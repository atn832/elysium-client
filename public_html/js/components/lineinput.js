/** @jsx React.DOM */
var ownMessageID = 1;   //will be sent along the next sent message to identify the message
                        //and validate it when we receive the message acknowledgement from the server
var LineInput = React.createClass({
    getInitialState: function() {
        // test
        setInterval(function() {
            this.setState({
                message: "test"
            });
            this.sendMessage({
                preventDefault: function() {}
            });
        }.bind(this), 1000);
        
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
            numMessagesToRetrieve = 1000;
        }
        else {
            // send the message to server
            var message = {
                text: this.state.message,
                ownMessageID: ownMessageID++
            };
            this.props.app.enqueueOneMessage(message);
            this.props.app.scrollToBottom(true);
			this.props.app.forceUpdate();
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

export default LineInput;