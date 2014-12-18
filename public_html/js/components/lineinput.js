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

        this.props.app.enqueueOneMessage(this.state.message);
        this.props.app.scrollToBottom(true);
        this.props.app.forceUpdate();
        this.setState({message: ""});
        // this is not enough to show the software keyboard in Android
        // $(textBox).focus();
	},
    focus: function() {
        this.refs.message.getDOMNode().focus();
    },
    render: function() {
        return (
            <form className="d-f fd-r w-100 bgc-lg bz-bb btc-g px-4 py-8" onSubmit={this.sendMessage}>
                <input type="text" className="txtBox fg-1 px-8 lh-2 o-n" ref="message" value={this.state.message} onChange={this.handleChange} />
                <input className="sendButton button ml-4" type="submit" onClick={this.sendMessage} value="Send" />
            </form>
        );
    }
});

export default LineInput;