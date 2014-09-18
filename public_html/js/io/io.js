var prevMessage = "";

var ownMessageID = 1;   //will be sent along the next sent message to identify the message
                        //and validate it when we receive the message acknowledgement from the server
var eventIDToOwnEventID = {};

