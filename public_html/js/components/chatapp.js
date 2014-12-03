/** @jsx React.DOM */
import Toolbar from "./toolbar";
import MessageView from "./messageview";
import LineInput from "./lineinput";
import Status from "./status";
import setSourceInformation from "../io/source";
import GetMoreButton from "./getmorebutton";

var MaxMessageToRetrieveCount = 1000;
var ServerTimeoutDuration = 60; // seconds
var PollInterval = 2000;

// used to prevent duplicates from being stored in the db
var clientMessageID = 0;

var ChatApp = React.createClass({
    getInitialState: function() {
        this.sentMessageIDToEventIndex = [];
        return {
            channel: 1,
            chanUpdates: this.props.data && this.props.data.chanUpdates && this.props.data.chanUpdates[0].events || []
        };
    },
    render: function() {
        // var chanUpdates = this.props.data.chanUpdates[0].events;
        return (
            <div className="d-f fd-c h-100 w-100 p-r">
                <div className="f-n">
                    <Toolbar chanList={this.state.chanList} userList={this.state.userList} channel={this.state.channel} />
                    <GetMoreButton app={this} isGettingLogs={this.state.isGettingLogs} /><Status status={this.state.status} />
                </div>
                <MessageView events={
                        this.state.chanUpdates[this.state.channel] && this.state.chanUpdates[this.state.channel].events
                    } ref="messages" />
                <div className="f-n">    
                    <LineInput app={this} />
                </div>
            </div>
        );
    },
    loadChatClient: function() {
        this.isGettingNonLogMessage = false;
        
        this.oldestEventID = -1;
        this.newestEventID = -1;
        this.numMessagesToRetrieve = 1000;
        
        this.messageBuffer = [];
        this.bufferedMessageSent = null;

        this.setState({
            loggedin: true,
            chanID: this.props.chanID
        });

        // for logs (get more button)
//        var oldestEventID = -1;
//        var newestEventID = -1;
//        var numMessagesToRetrieve = 100;

        this.sidToIsLog = {};

        this.getMissedMessages();
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
            isGettingLogs: true,
            status: "getting missed logs"
        });
        this.getMessages(true, this.oldestEventID, -1);
    },
    getLogs: function() {
        this.setState({
            isGettingLogs: true,
            status: "getting " + this.numMessagesToRetrieve + " messages"
        });
        this.getMessages(true, this.oldestEventID, this.numMessagesToRetrieve);
        this.numMessagesToRetrieve *= 4;
        if (this.numMessagesToRetrieve > MaxMessageToRetrieveCount)
            this.numMessagesToRetrieve = MaxMessageToRetrieveCount;
    },
    //checks for new messages regularly
    getLatestMessages: function(isLog) {
        this.getMessages(isLog, this.newestEventID, -1);
    },
    getMessages: function(isLog, vLastEventID, vNumMessages) {
        // do not try several getLatestMessages at once
        if (this.isGettingNonLogMessage && !isLog)
            return;
        
        if (!isLog)
            this.isGettingNonLogMessage = true;
        var r = Math.random();              //for IE to prevent caching.
        this.sidToIsLog[r] = isLog;

        var data = {
            sid: Math.random(), // for IE
            token: this.props.token,
            userID: this.props.userID
        }
        setSourceInformation(data);
        
        data.log = isLog;
        data.lastEventID = vLastEventID;
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
                if (!this.state.chanUpdates[oneChanUpdate.chanID]) {
                    // set
                    this.state.chanUpdates[oneChanUpdate.chanID] = oneChanUpdate;
                    oneChanUpdate.events.forEach(function(event) {
                        if (event.ID > this.newestEventID)
                            this.newestEventID = event.ID;
                        if (event.ID < this.oldestEventID)
                            this.oldestEventID = event.ID;
                    }.bind(this));
                }
                else {
                    //merge
                    var currOneChanUpdate = this.state.chanUpdates[oneChanUpdate.chanID];
                    // add events
                    oneChanUpdate.events.forEach(function(event, index) {
                        if (this.sentMessageIDToEventIndex[event.ID]) {
                            // replace the old one by the new one
                            currOneChanUpdate.events.splice(this.sentMessageIDToEventIndex[event.ID], 1, event);
                        }
                        else {
                            currOneChanUpdate.events.push(event);
                        }
                        if (event.ID > this.newestEventID)
                            this.newestEventID = event.ID;
                        if (event.ID < this.oldestEventID)
                            this.oldestEventID = event.ID;
                    }.bind(this));
                    Array.prototype.push.apply(currOneChanUpdate.events, oneChanUpdate.events);
                    // update userlist
                    if (oneChanUpdate.userListUpdated) {
                        currOneChanUpdate.userList = oneChanUpdate.userList;
                    }
                }
            }.bind(this));
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
        var sayEvent = {
            "status": "sending",
            "content": message,
            "eventType":{
               "ID":3,
               "name":"Message",
               "type":"Message"
            },
            "source":{
               "entity":{
                  "entityType":{
                     "ID": this.props.userID,
                     "name":"User",
                     "type":"User"
                  },
                  "name": this.props.nick
               }
           },
            eventIndex: this.state.chanUpdates[this.state.channel].events.length
        };
        this.state.chanUpdates[this.state.channel].events.push(sayEvent);
        this.messageBuffer.push({
            text: message,
            event: sayEvent
        });
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
        setSourceInformation(data);
        
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
                //record eventid
                sayEvent.status = ""; // not sending nor error
                sayEvent.ID = data.eventID;
                this.sentMessageIDToEventIndex[sayEvent.ID] = sayEvent.eventIndex;
            }
            else {
                this.bufferedMessageSent.status = "error";
                // resend. put it back, at the beginning of the list
                this.messageBuffer.unshift(this.bufferedMessageSent);
            }
            // mark as ready for next message in queue
            this.bufferedMessageSent = null;
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
            this.oldestEventID = Number.POSITIVE_INFINITY;
            this.newestEventID = -1;
            this.numMessagesToRetrieve = 100;

            nick = null;
            this.setState({
                chanID: -1,
                loggedin: false
            });
            if (this.props.onLogOut)
                this.props.onLogOut();
        };
    }
});

export default ChatApp;
