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
            numMessagesToRetrieve = 1000;
        }
        else {
            this.props.app.enqueueOneMessage(this.state.message);
            this.props.app.scrollToBottom(true);
			this.props.app.forceUpdate();
        }
        this.setState({message: ""});
        // this is not enough to show the software keyboard in Android
        // $(textBox).focus();
	},
  render: function() {
    return (
    	<form className="d-f fd-r w-100" onSubmit={this.sendMessage}>
	      	<input type="text" className="txtBox fg-1" ref="message" value={this.state.message} onChange={this.handleChange} />
	      	<input className="sendButton" type="submit" onClick={this.sendMessage} value="send" />
      	</form>
    );
  }
});

export default LineInput;