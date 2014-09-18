/** @jsx React.DOM */
var LineInput = React.createClass({
    getInitialState: function() {
        return {
            message: ""
        };
    },
    handleChange: function() {
        this.setState({
            message: this.refs.message.getDOMNode().value
        });
    },
	sendMessage: function(e) {
		e.preventDefault();
        var message = this.state.message;
	    if (message === "")
	    	return;

        if (message === "/clear") {
            // clear the conversation div
            $(conversationLinesDiv).empty();
            // reset the oldest event received
            oldestEventID = -1;
            numMessagesToRetrieve = 100;
        }
        else {
            // send the message to server
            prevMessage = message;
            var message = {
                text: prevMessage,
                ownMessageID: ownMessageID++
            };
            // enqueueOneMessage(message);

            // Append temporary line. Will be updated by server reception confirmation
			// var elysiumIndex;
			// data.chanList.forEach(function(chan, idx) {
			// 	if (chan.name === "Elysium")
			// 		elysiumIndex = idx;
			// })
			this.props.app.state.chanUpdates.push({
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
			this.props.app.setState({
				chanUpdates: this.props.app.state.chanUpdates
			});

            // var div = $("<div></div>");
            // var newSpan = $("<span class='line self unverified' id='own" + message.ownMessageID + "'></span>");
            // newSpan.text("xx:xx <" + nick + "> " + message.text);
            // div.append(newSpan);
            // $(conversationLinesDiv).append(div);

            this.props.app.scrollToBottom(true);
        }
        this.setState({message: ""});
        // this is not enough to show the software keyboard in Android
        // $(textBox).focus();
	},
  render: function() {
    return (
    	<form onSubmit={this.sendMessage}>
	      	<input type="text" id="txtBox" className="txtBox" ref="message" value={this.state.message} onChange={this.handleChange} />
	      	<input className="sendButton" type="submit" onClick={this.sendMessage} value="send" />
      	</form>
    );
  }
});
