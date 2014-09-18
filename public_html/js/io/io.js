var prevMessage = "";

var ownMessageID = 1;   //will be sent along the next sent message to identify the message
                        //and validate it when we receive the message acknowledgement from the server
var eventIDToOwnEventID = {};

function enqueueOneMessage(message) {
    messageBuffer.push(message);
}

function dequeueMessageBuffer() {
    if (!bufferedMessageSent) {
        if (messageBuffer.length > 0) {
            // send the first message in the queue
            bufferedMessageSent = messageBuffer.shift();
            sendOneMessage(bufferedMessageSent);
        }
    }
}

function sendOneMessage(message) {
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
}

function enqueueOneMessageDone(clientEventID, success, data) {
    // will disable loggedin if the user is not logged in
    if (data)
        checkLoginState(data);
    
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
}

// Goes back to login page if the  server sent a not_logged_in message
function checkLoginState(data) {
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
