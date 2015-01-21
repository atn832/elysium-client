/** @jsx React.DOM */
require("../../../public_html/css/atomic.css");
require("../../../temp/material.css");
require("../../../public_html/css/style.css");
require("font-awesome-webpack");

require("script!../../bower_components/moment/min/moment.min");
require("script!../../bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.min");

moment.locale('en', {
    calendar : {
        lastDay : '[yesterday at] LT',
        sameDay : '[at] LT',
        nextDay : '[tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'on dddd [at] LT',
        sameElse : 'on L [at] LT'
    }
});

import Toolbar from "./toolbar";
import MessageView from "./messageview";
import LineInput from "./lineinput";
import Status from "./status";
import Source from "../io/source";
import GetMoreButton from "./getmorebutton";
import GlobalMap from "./line/renderer/globalmap";

var MaxMessageToRetrieveCount = 1000;
var ServerTimeoutDuration = 60; // seconds
var PollInterval = 2000;

// used to prevent duplicates from being stored in the db
var clientMessageID = 0;

var ChatApp = React.createClass({
    getInitialState: function() {
        this.messageBuffer = [];
        this.sidToIsLog = {};
        this.sentMessageIDToEvent = {};
        this.oldestEventID = {}; // should really be infinity, but BE does not support it yet
        this.newestEventID = {};
        this.isGettingNonLogMessage = false;
        
        this.numMessagesToRetrieve = 1000;
        
        this.bufferedMessageSent = null;

        var initialState = {
            channel: this.props.chanName,
            chanID: this.props.chanID,
            chanList: [{ name: this.props.chanName, ID: this.props.chanID }], // show at start up time before getting the real data
            chanUpdates: {},
            globalMapVisible: true
        };
//        if (!this.props.chanUpdates) {
            // show at start up time before getting the real data
            initialState.chanUpdates[this.props.chanID] = {
                events: [],
                userList: [{ name: this.props.nick, on: true }]
            };
//        }
        if (this.props.staticData) {
            // received static data
            initialState.loggedin = true;
            setTimeout(function() {
                this.getMessagesSuccess(this.props.staticData);
                this.refs.globalMap.getDOMNode().focus();
            }.bind(this), 1000);
        }
        return initialState;
    },
    render: function() {
        var locatedUsers = this.getChanUpdates().userList.filter(function(user) {
            return user.latestSource && user.latestSource.location;
        }).map(function(user) {
            return {
                name: user.name,
                ID: user.ID,
                lng: user.latestSource.location.longitude,
                lat: user.latestSource.location.latitude
            }
        });
        var scrollbarWidth = this.refs.conversationElement && this.refs.conversationElement.getDOMNode() &&
            (this.refs.conversationElement.getDOMNode().offsetWidth - this.refs.conversationElement.getDOMNode().clientWidth) || 0;
        return (
            <div className="d-f fd-c h-100 w-100 pos-r">
                <div className="f-n">
                    <Toolbar chanList={this.state.chanList} userList={this.getChanUpdates().userList}
                        currentChanID={this.state.chanID} />
                </div>
                <button className="global-map-button f-n z-2 pos-a button square-s" style={{ right: scrollbarWidth + "px" }} onClick={this.toggleGlobalMap}>
                    <i className={"fa " + (this.state.globalMapVisible? "fa-compress" : "fa-expand")} />
                </button>
                <div className={"global-map f-n z-1 ov-h tr bg-dimmed" + (this.state.globalMapVisible? " map-visible" : "")}
                    style={{ right: scrollbarWidth + "px" }}
                    onBlur={this.onGlobalMapBlur}
                    ref="globalMap">
                    <div className="pos-a w-100 ta-c va-c">Map Unavailable</div>
                    <GlobalMap users={locatedUsers} />
                </div>
                <div className="fg-1 w-100 ov-x-h ov-y-s px-4 pt-4 bz-bb" ref="conversationElement">
                    <GetMoreButton app={this} isGettingLogs={this.state.isGettingLogs} /><Status status={this.state.status} />
                    <MessageView events={this.getChanUpdates().events} onClick={this.onMessageViewClick} ref="messages" conversationElement={this.refs.conversationElement} />
                </div>
                <div className="f-n">    
                    <LineInput app={this} ref="input" />
                </div>
            </div>
        );
    },
    onGlobalMapBlur: function() {
        alert("blur");
    },
    toggleGlobalMap: function() {
        this.setState({
            globalMapVisible: !this.state.globalMapVisible
        });
    },
    onMessageViewClick: function() {
        this.refs.input.focus();
    },
    loadChatClient: function() {
        this.setState({
            loggedin: true,
            chanID: this.props.chanID
        });
        this.getMissedMessages();
//        this.refs.input.focus();
        this.refs.globalMap.getDOMNode().focus();
    },
    reduceTimeout: function() {
        this.serverTimeout--;
        if (this.serverTimeout <= 0 && this.serverDown == false) {
            this.serverDown = true;

            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            $(conversationLinesDiv).append("<span class='line error'>" + hours + ":" + minutes + ":" + seconds + " - lost contact with Elysium...</span>");
            scrollToBottom();
        }
    },
    getMissedMessages: function() {
        this.setState({
            isGettingLogs: true
        });
        this.getMessages(true, this.oldestEventID[this.state.chanID], -1);
    },
    getLogs: function() {
        this.setState({
            isGettingLogs: true
        });
        this.getMessages(true, this.oldestEventID[this.state.chanID], this.numMessagesToRetrieve);
        this.numMessagesToRetrieve *= 4;
        if (this.numMessagesToRetrieve > MaxMessageToRetrieveCount)
            this.numMessagesToRetrieve = MaxMessageToRetrieveCount;
    },
    //checks for new messages regularly
    getLatestMessages: function(isLog) {
        this.getMessages(isLog, this.newestEventID[this.state.chanID], -1);
    },
    getMessages: function(isLog, vLastEventID, vNumMessages) {
        // do not try several getLatestMessages at once
//        if (this.isGettingNonLogMessage && !isLog)
//            return;
        
        if (!isLog)
            this.isGettingNonLogMessage = true;
        var r = Math.random();              //for IE to prevent caching.
        this.sidToIsLog[r] = isLog;

        var data = {
            sid: Math.random(), // for IE
            token: this.props.token,
            userID: this.props.userID
        }
        Source.setSourceInformation(data);
        
        data.log = isLog;
        data.lastEventID = vLastEventID === undefined? -1 : vLastEventID;
        data.numMessages = vNumMessages;
        $.getJSON(this.props.host + "getmessages.action", data)
            .success(function(data, textStatus, jqXHR) { this.getMessagesSuccess(data, r); }.bind(this))
            .error(function(jqXHR, status, error) { this.getMessagesError(jqXHR, r); }.bind(this));
    },
    getMessagesSuccess: function(data, sid) {
        if (!this.getMessageTimerID) {
            // initialize timers when logs have been received for the first time
            this.getMessageTimerID = setInterval(function() {
                this.getLatestMessages(false);
            }.bind(this), PollInterval);
            this.serverTimeoutTimerID = setInterval(function() {
                this.reduceTimeout();
            }.bind(this), 1000);
            this.sendMessageTimerID = setInterval(function() {
                this.dequeueMessageBuffer();
            }.bind(this), 300);
            this.serverTimeout = ServerTimeoutDuration;
        }
        
        var isLog = this.sidToIsLog[sid];
        delete this.sidToIsLog[sid];
        if (isLog) {
            if (!data.chanUpdates) {
                this.setState({ status: "No more logs" });
            }
            else {
                this.setState({
                    isGettingLogs: false,
                    status: ""
                });
            }
        }
        else
            this.isGettingNonLogMessage = false;

        this.resetTimeout(data);
        this.checkLoginState(data); // updates loggedin flag
        if (this.state.loggedin && data.chanUpdates) {
            data.chanUpdates.forEach(function(oneChanUpdate) {
                // convert datetime string to moment instance
                oneChanUpdate.events.forEach(function(event) {
                    event.source.datetime = moment.utc(event.source.datetime);
                });
                
                //merge
                var currOneChanUpdate = this.getChanUpdates(oneChanUpdate.chanID);
                // add events
                if (!isLog) {
                    if (oneChanUpdate.events.length > 0) {
                        if (this.newestEventID[oneChanUpdate.chanID] === undefined ||
                                this.newestEventID[oneChanUpdate.chanID] < oneChanUpdate.events[oneChanUpdate.events.length - 1].ID) {
                            Array.prototype.push.apply(currOneChanUpdate.events, oneChanUpdate.events);
                            this.newestEventID[oneChanUpdate.chanID] = oneChanUpdate.events[oneChanUpdate.events.length - 1].ID;
                        }
                    }
                }
                else {
                    if (oneChanUpdate.events.length > 0 &&
                            (this.oldestEventID[oneChanUpdate.chanID] === undefined ||
                             this.oldestEventID[oneChanUpdate.chanID] > oneChanUpdate.events[0].ID)) {
                        Array.prototype.unshift.apply(currOneChanUpdate.events, oneChanUpdate.events);
                        this.oldestEventID[oneChanUpdate.chanID] = oneChanUpdate.events[0].ID;
                        this.newestEventID[oneChanUpdate.chanID] = oneChanUpdate.events[oneChanUpdate.events.length - 1].ID;
                    }
                }

                var validatedSentMessages = [];
                for (var id in this.sentMessageIDToEvent) {
                    // replace the old one by the new one
                    var index = currOneChanUpdate.events.indexOf(this.sentMessageIDToEvent[id]);
                    if (index >= 0) {
                        // remove
                        currOneChanUpdate.events.splice(index, 1);
                        validatedSentMessages.push(id);
                    }
                }
                validatedSentMessages.forEach(function(id) {
                    delete this.sentMessageIDToEvent[id];
                }.bind(this));

                // update userlist
                if (oneChanUpdate.userListUpdated) {
                    currOneChanUpdate.userList = oneChanUpdate.userList;
                }
/*
                var userLocated = {},
                    idToUser = {},
                    locatedUsers = 0,
                    index = currOneChanUpdate.events.length - 1;
                currOneChanUpdate.userList.forEach(function(user) {
                    userLocated[user.ID] = false;
                    idToUser[user.ID] = user;
                });
                while (index >= 0 && locatedUsers < currOneChanUpdate.userList.length) {
                    var event = currOneChanUpdate.events[index];
                    if (event.source && event.source.entity && event.source.entity.ID) {
                        var id = event.source.entity.ID;
                        if (!userLocated[id]) {
                            idToUser[id].lat = event.source.location && event.source.location.latitude;
                            idToUser[id].lng = event.source.location && event.source.location.longitude;
                            userLocated[id] = true;
                            locatedUsers++;
                        }
                    }
                    index--;
                }*/
            }.bind(this));
            if (this.isScrolledToBottom())
                this.scrollToBottom(true);
            
            this.setState({
                chanList: data.chanList
            });
        }
    },
    // Resets server timeout, if the server sent a valid response
    resetTimeout: function(data) {
        // this tag is included at the end of the resonse xml to getmessages
        if (data.validResponse) {
            this.serverTimeout = ServerTimeoutDuration;
            if (this.serverDown) {
                this.serverDown = false;

                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var seconds = currentTime.getSeconds();

                $(conversationLinesDiv).append("<span class='line error'>" + hours + ":" + minutes + ":" + seconds + " - got a response from Elysium, Kronos hasn't forgotten you yet!</span>");
                this.scrollToBottom();
            }
        };
    },
    getMessagesError: function(jqXHR, sid) {
        var isLog = this.sidToIsLog[sid];
        delete this.sidToIsLog[sid];
        if (isLog) {
            this.setState({
                isGettingLogs: false,
                status: "Error retrieving logs"
            });
        }
        else {
            // enable getMessage again
            this.isGettingNonLogMessage = null;
        }
    },
    scrollToBottom: function(atNextUpdate) {
      this.refs.messages.scrollToBottom(atNextUpdate);
    },
    isScrolledToBottom: function() {
      return this.refs.messages.isScrolledToBottom();
    },
    enqueueOneMessage: function(message) {
        if (message === "/clear") {
            // clear the conversation div
            this.getChanUpdates().events = [];
            // reset the oldest event received
            this.oldestEventID = {};
            this.numMessagesToRetrieve = 1000;
            
            this.forceUpdate();
            return;
        }
        var data = {};
        Source.setSourceInformation(data);

        var sayEvent = {
            "status": "sending",
            "content": message,
            "eventType":{
               "ID":3,
               "name":"Message",
               "type":"Message"
            },
            "source":{
                "datetime": moment.utc(),
                "entity":{
                    "entityType": {
                        "name":"User",
                        "type":"User"
                    },
                    "ID": this.props.userID,
                    "name": this.props.nick
                },
                "userAgent": {
                    "userAgent": data.userAgent
                }
            }
        };
        this.getChanUpdates().events.push(sayEvent);
        // ignore in static mode
        if (this.messageBuffer) {
            this.messageBuffer.push({
                text: message,
                event: sayEvent
            });
        }

        this.refs.input.focus();
    },
    dequeueMessageBuffer: function() {
        if (!this.bufferedMessageSent) {
            if (this.messageBuffer.length > 0) {
                // send the first message in the queue
                this.bufferedMessageSent = this.messageBuffer.shift();
                this.sendOneMessage(this.bufferedMessageSent);
            }
        }
    },
    sendOneMessage: function(message) {
        var data = {
            sid: Math.random(), // for IE
            token: this.props.token,
            userID: this.props.userID,
            clientMessageID: clientMessageID++
        }
        Source.setSourceInformation(data);
        
        data.destinationID = this.state.chanID;
        data.content = message.text;

        $.ajax({
            url: this.props.host + "say.action",
            data: data,
            timeout: 10000
        })
        .success(function(data, textStatus, jqXHR) {
            this.enqueueOneMessageDone(message.event, true, data);
        }.bind(this))
        .fail(function() {
            this.enqueueOneMessageDone(message.event, false, null);
        }.bind(this));
      
        // test error
//        this.enqueueOneMessageDone(sendOwnMessageID, false, null);
    },
    enqueueOneMessageDone: function(sayEvent, success, data) {
        // will disable loggedin if the user is not logged in
        if (data)
            this.checkLoginState(data);
        
        if (this.state.loggedin) {
            // if still logged in, it passed!
            // the line is now marked as verified
            if (success) {
                if (this.getChanUpdates().events.some(function(event) {
                    return event.ID === data.eventID;
                })) {
                    // remove sayEvent
                    this.getChanUpdates().events.splice(this.getChanUpdates().events.indexOf(sayEvent), 1);
                }

                //record eventid
                sayEvent.status = ""; // not sending nor error
                sayEvent.ID = data.eventID;
                this.sentMessageIDToEvent[sayEvent.ID] = sayEvent;
                
                // mark as ready for next message in queue
                this.bufferedMessageSent = null;
                this.forceUpdate();
            }
            else {
                this.bufferedMessageSent.status = "error";
                // resend. put it back, at the beginning of the list
                this.messageBuffer.unshift(this.bufferedMessageSent);
                this.bufferedMessageSent = null;
            }
        }
    },
    // Goes back to login page if the  server sent a not_logged_in message
    checkLoginState: function(data) {
        if (data.notLoggedIn) {
            setChatStatus(new Date() + ": disconnected by server")
            $('title').text(new Date() + ": disconnected by server");
            
            clearInterval(this.getMessageTimerID);
            clearInterval(this.serverTimeoutTimerID);
            clearInterval(this.sendMessageTimerID);
            this.getMessageTimerID = null;
            this.serverTimeoutTimerID = null;
            this.sendMessageTimerID = null;
            
            $(chatclient).hide();
            $(conversationLinesDiv).empty();
            $(formFrame).show();
            $(txtLogin).focus();

            // reset initial values
            this.oldestEventID = {};
            this.newestEventID = {};
            this.numMessagesToRetrieve = 1000;

            nick = null;
            this.setState({
                chanID: -1,
                loggedin: false
            });
            if (this.props.onLogOut)
                this.props.onLogOut();
        };
    },
    getChanUpdates: function(chanID) {
        if (chanID === undefined)
            chanID = this.state.chanID;

        if (!this.state.chanUpdates[chanID]) {
            this.state.chanUpdates[chanID] = {
                events: []
            };
        }
        return this.state.chanUpdates[chanID];
    },
    setChanUpdates: function(chanID, updates) {
        this.state.chanUpdates[chanID] = updates;
    }
});

export default ChatApp;
