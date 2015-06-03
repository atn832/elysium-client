/** @jsx React.DOM */
var Dropzone = require('react-dropzone');

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
    onDrop: function (files) {
        console.log('Received files: ', files);
    },
    render: function() {
        return (
            <form className="d-f fd-r w-100 bgc-lg bz-bb btc-g" onSubmit={this.sendMessage}>
                <Dropzone onDrop={this.onDrop} size=" ">
                    <div>Try dropping</div>
                </Dropzone>
                <input type="text" className="fg-1 px-8 lh-2-5 o-n bd-0 m-0" ref="message" value={this.state.message} onChange={this.handleChange} />
                <button className="sendButton button bdr-0 m-0" type="submit" onClick={this.sendMessage}><i className="fa fa-send px-6" /></button>
            </form>
        );
    }
});

export default LineInput;