/** @jsx React.DOM */
import Toolbar from "./toolbar";
import MessageView from "./messageview";
import LineInput from "./lineinput";
import Status from "./status";
import setSourceInformation from "../io/source";
import GetMoreButton from "./getmorebutton";

var MaxMessageToRetrieveCount = 1000;

var ChatApp = React.createClass({
    getInitialState: function() {
        this.loadChatClient();
        return {
            channel: 1,
            chanUpdates: this.props.data && this.props.data.chanUpdates && this.props.data.chanUpdates[0].events || []
        };
    },
    render: function() {
        // var chanUpdates = this.props.data.chanUpdates[0].events;
        return (
            <div id="chatclient" className="container">
                <div>
                    <Toolbar data={this.props.data} channel={this.state.channel} />
                    <GetMoreButton app={this} isGettingLogs={this.state.isGettingLogs} /><Status status={this.state.status} />
                </div>
                <MessageView events={this.state.chanUpdates} ref="messages" />
                <LineInput app={this} />
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

//        var loggedin = false;
//        var nick = null;
        this.userid = null;
//        var chanID = null;
        this.token = null;

        // for logs (get more button)
//        var oldestEventID = -1;
//        var newestEventID = -1;
//        var numMessagesToRetrieve = 100;

        this.sidToIsLog = {};

        this.getMissedMessages();

//        $(textBox).focus();
    },
    reduceTimeout: function() {
        serverTimeout--;
        if (serverTimeout <= 0 && serverDown == false) {
            serverDown = true;

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
            token: this.token,
            userID: this.userid
        }
        setSourceInformation(data);
        
        data.log = isLog;
        data.lastEventID = vLastEventID;
        data.numMessages = vNumMessages;
        $.getJSON("getmessages.action", data)
            .success(function(data, textStatus, jqXHR) { this.getMessagesSuccess(data, r); }.bind(this))
            .error(function(jqXHR, status, error) { this.getMessagesError(jqXHR, r); }.bind(this));
    },
    getMessagesSuccess: function(data, sid) {
        if (!logInterface && !getMessageTimerID) {
            // initialize timers when logs have been received for the first time
            getMessageTimerID = setInterval("getLatestMessages(false);", getmessageinterval);
            serverTimeoutTimerID = setInterval("reduceTimeout();", 1000)
            sendMessageTimerID = setInterval("dequeueMessageBuffer();", 300);
            serverTimeout = serverTimeoutMaxValue;
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

        resetTimeout(data);
        checkLoginState(data); // updates loggedin flag
        if (loggedin) {
            updateChanListDiv(data);
            if (data.chanUpdates) {
                data.chanUpdates.forEach(function(singleChanUpdates) {
                    if (fullInterface) updateUserDiv(singleChanUpdates);
                    var updatedChanID = singleChanUpdates.chanID;
                    if (updatedChanID == chanID) {
                        updateChatDiv(updatedChanID, singleChanUpdates, isLog);
                    }
                });
            }
        }
    },
    // Resets server timeout, if the server sent a valid response
    resetTimeout: function(data) {
        // this tag is included at the end of the resonse xml to getmessages
        if (data.validResponse) {
            serverTimeout = serverTimeoutMaxValue;
            if (serverDown) {
                serverDown = false;

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
        this.messageBuffer.push(message);
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
        var sendOwnMessageID = message.ownMessageID;
        var data = {
            sid: Math.random(), // for IE
            token: this.token,
            userID: this.userid
        }
        setSourceInformation(data);
        
        data.destinationID = chanID;
        data.clientMessageID = sendOwnMessageID;
        data.content = message.text;

        this.state.chanUpdates.push({
            "status": "sending",
            "content": message.text,
            "eventType":{
               "ID":3,
               "name":"Message",
               "type":"Message"
            },
            "source":{
               "entity":{
                  "entityType":{
                     "ID":2,
                     "name":"User",
                     "type":"User"
                  },
                  "name":"atn"
               }
           }
        });

        /*$.ajax({
            url: "say.action",
            data: data,
            timeout: 10000
        })
        .success(function(data, textStatus, jqXHR) {
            enqueueOneMessageDone(sendOwnMessageID, true, data);
        })
        .fail(function() {
            enqueueOneMessageDone(sendOwnMessageID, false, null);
        });*/
      
        // test error
        enqueueOneMessageDone(sendOwnMessageID, false, null);
    },
    enqueueOneMessageDone: function(clientEventID, success, data) {
        // will disable loggedin if the user is not logged in
        if (data)
            this.checkLoginState(data);
        
        if (loggedin) {
            // if still logged in, it passed!
            var span = $("#own" + clientEventID);
            // the line is now marked as verified
            span.removeClass("unverified");
            if (success) {
                eventIDToOwnEventID[data.eventID] = clientEventID;
                // may have failed in a previous attempt
                span.removeClass("failed");
            }
            else {
                span.addClass("failed");
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
            
            clearInterval(getMessageTimerID);
            clearInterval(serverTimeoutTimerID);
            clearInterval(sendMessageTimerID);
            getMessageTimerID = null;
            serverTimeoutTimerID = null;
            sendMessageTimerID = null;
            
            $(chatclient).hide();
            $(conversationLinesDiv).empty();
            $(formFrame).show();
            $(txtLogin).focus();

            // reset initial values
            this.oldestEventID = -1;
            this.newestEventID = -1;
            this.numMessagesToRetrieve = 100;

            loggedin = false;
            nick = null;
            this.userid = -1;
            chanID = -1;
            this.token = -1;
        };
    }
});

export default ChatApp;
