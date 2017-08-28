import React from 'react';
var Dropzone = require('react-dropzone');

var LineInput = React.createClass({
    getInitialState: function() {
        return {
            message: "",
            uploading: false
        };
    },
    handleChange: function() {
        this.setState({
            message: this.refs.message.value
        });
    },
	sendMessage: function(e) {
		if (e) {
            e.preventDefault();
        }

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
        this.refs.message.focus();
    },
    onDrop: function (files) {
        console.log('Received files: ', files);
        this.upload(files[0]);
    },
    // from https://github.com/paulrouget/miniuploader/blob/gh-pages/index.html
    upload: function (file) {
        /* Is the file an image? */
        if (!file || !file.type.match(/image.*/)) return;
        /* It is! */
        this.setState({
            uploading: true
        });
        /* Lets build a FormData object*/
        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", file); // Append the file
        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
        // xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!
        xhr.open("POST", "https://m.wafrat.com:8081/imgur/"); // Boooom!
        xhr.onload = function() {
            var url = JSON.parse(xhr.responseText).data.link;
            this.setState({
                message: url,
                uploading: false
            }, this.sendMessage.bind(this));
            // document.body.className = "uploaded";
        }.bind(this);
        
        xhr.setRequestHeader('Authorization', 'Client-ID 8517b6b3225c78a'); // Get your own key http://api.imgur.com/
        
        // Ok, I don't handle the errors. An exercise for the reader.
        /* And now, we send the formdata */
        xhr.send(fd);
    },
    render: function() {
        return (
            <form className="d-f fd-r w-100 bgc-lg bz-bb btc-g" onSubmit={this.sendMessage}>
                <Dropzone onDrop={this.onDrop} style={{}}>
                    {this.state.uploading?
                        <i className="fa fa-spinner fa-spin px-14 lh-25px" /> :
                        <i className="fa fa-camera px-14 lh-25px" />
                    }
                </Dropzone>
                <input type="text" className="fg-1 px-8 lh-2-5 o-n bd-0 m-0" ref="message" value={this.state.message} onChange={this.handleChange} />
                <button className="sendButton button bdr-0 m-0" type="submit" onClick={this.sendMessage}><i className="fa fa-send px-6" /></button>
            </form>
        );
    }
});

export default LineInput;