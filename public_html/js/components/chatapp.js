/** @jsx React.DOM */
import Toolbar from "./toolbar";
import MessageView from "./messageview";
import LineInput from "./lineinput";

var ChatApp = React.createClass({
    getInitialState: function() {
        return {
            channel: 1,
            chanUpdates: this.props.data.chanUpdates[0].events
        };
    },
    render: function() {
        // var chanUpdates = this.props.data.chanUpdates[0].events;
        return (
            <div id="chatclient" className="container">
                <div id="header" className="header">
                    <Toolbar data={this.props.data} channel={this.state.channel}></Toolbar>
                </div>
                <MessageView events={this.state.chanUpdates} ref="messages"/>
                <div className="footer">
                    <LineInput app={this}></LineInput>
                </div>
            </div>
        );
    },
    loadChatClient: function() {
        $(chatclient).show();

        oldestEventID = -1;
        newestEventID = -1;
        numMessagesToRetrieve = 100;
        messageBuffer = [];
        bufferedMessageSent = null;
        
        $(conversationLinesDiv).empty();
        
        this.getMissedMessages();

        $(textBox).focus();
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
        setGetLogStatus("getting missed logs");
        getMessages(true, oldestEventID, -1);
    },
    getLogs: function() {
        setGetLogStatus("getting " + numMessagesToRetrieve + " messages");
        getMessages(true, oldestEventID, numMessagesToRetrieve);
        numMessagesToRetrieve *= 4;
        if (numMessagesToRetrieve > MaxMessageToRetrieveCount)
            numMessagesToRetrieve = MaxMessageToRetrieveCount;
    },
    //checks for new messages regularly
    getLatestMessages: function(isLog) {
        getMessages(isLog, newestEventID, -1);
    },
    getMessages: function(isLog, vLastEventID, vNumMessages) {
        // do not try several getLatestMessages at once
        if (isGettingNonLogMessage && !isLog)
            return;
        
        if (!isLog)
            isGettingNonLogMessage = true;
        var r = Math.random();              //for IE to prevent caching.
        sidToIsLog[r] = isLog;

        var data = getSourceInformation();
        data.log = isLog;
        data.lastEventID = vLastEventID;
        data.numMessages = vNumMessages;
        $.getJSON("getmessages.action", data)
            .success(function(data, textStatus, jqXHR) { getMessagesSuccess(data, r); })
            .error(function(jqXHR, status, error) { getMessagesError(jqXHR, r); });
    },
    getMessagesSuccess: function(data, sid) {
        if (!logInterface && !getMessageTimerID) {
            // initialize timers when logs have been received for the first time
            getMessageTimerID = setInterval("getLatestMessages(false);", getmessageinterval);
            serverTimeoutTimerID = setInterval("reduceTimeout();", 1000)
            sendMessageTimerID = setInterval("dequeueMessageBuffer();", 300);
            serverTimeout = serverTimeoutMaxValue;
        }
        
        var isLog = sidToIsLog[sid];
        delete sidToIsLog[sid];
        if (isLog) {
            if (!data.chanUpdates) {
                setGetLogStatus("No more logs");
            }
            else {
                $(getMoreButton).attr("disabled", false);      //enable get more button
                setGetLogStatus("");
            }
        }
        else
            isGettingNonLogMessage = false;

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
        var isLog = sidToIsLog[sid];
        delete sidToIsLog[sid];
        if (isLog) {
            setGetLogStatus("Error retrieving logs");
            $(getMoreButton).attr("disabled", false);      //enable get more button
        }
        else {
            // enable getMessage again
            isGettingNonLogMessage = null;
        }
    },
    scrollToBottom: function(atNextUpdate) {
      this.refs.messages.scrollToBottom(atNextUpdate);
    },
    isScrolledToBottom: function() {
      return this.refs.messages.isScrolledToBottom();
    },
    enqueueOneMessage: function(message) {
        messageBuffer.push(message);
    },
    dequeueMessageBuffer: function() {
        if (!bufferedMessageSent) {
            if (messageBuffer.length > 0) {
                // send the first message in the queue
                bufferedMessageSent = messageBuffer.shift();
                this.sendOneMessage(bufferedMessageSent);
            }
        }
    },
    sendOneMessage: function(message) {
        var sendOwnMessageID = message.ownMessageID;
        var data = getSourceInformation();
        data.destinationID = chanID;
        data.clientMessageID = sendOwnMessageID;
        data.content = message.text;
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
                messageBuffer.unshift(bufferedMessageSent);
            }
            // mark as ready for next message in queue
            bufferedMessageSent = null;
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
            oldestEventID = -1;
            newestEventID = -1;
            numMessagesToRetrieve = 100;

            loggedin = false;
            nick = null;
            userid = -1;
            chanID = -1;
            token = -1;
        };
    }
});

export default ChatApp;
