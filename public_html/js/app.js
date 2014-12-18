/** @jsx React.DOM */
"use strict";

import LoginForm from './components/loginform';
import ChatApp from './components/chatapp';
import IO from "./io/io";
import { getURLParameter } from "./util";

var App = React.createClass({
    getInitialState: function() {
        // Google Analytics snippet
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', this.props.gaID, 'auto');
        ga('send', 'pageview');
        
        IO.host = this.props.host;
        
        this.attemptAutoLogin();

        return {};
    },
    attemptAutoLogin: function() {
        var chanName = getURLParameter("chanName");
        var chanPass = getURLParameter("chanPass");
        var nick = getURLParameter("nick");
        if (!nick)
            return;

        this.submitLoginInfo(chanName, chanPass, nick);
    },
    exitFunction: function() {
        var data = getSourceInformation();
        $.ajax({
            url: this.props.host + "logout.action",
            data: data,
            async: false
        });
    },
    submitLoginInfo: function(channel, password, login) {
        this.setState({
            isSigningIn: true,
            chanName: channel
        });

        IO.login(channel, password, login,
                this.submitLoginInfoCallback.bind(this));
    },
    submitLoginInfoCallback: function(data) {
        if (data.loggedin) {
            this.setState({
                isSigningIn: false,
                status: "",
                userID: data.userID,
                token: data.token,
                chanID: data.chanID,
                nick: data.nick,
                loggedin: true
            });
            this.refs.chat.loadChatClient();
        }
        else {
            this.setState({
                isSigningIn: false,
                status: "Could not login:" + data.reason,
                error: data.error
            });
        }
    },
    onLogOut: function() {
        this.setState({
            loggedin: false
        });
    },
    render: function() {
        return (
            <div className="w-100 h-100">
            {this.state.loggedin?
                <ChatApp host={this.props.host} chanName={this.state.chanName} chanID={this.state.chanID} userID={this.state.userID} nick={this.state.nick} token={this.state.token} ref="chat" onLogOut={this.onLogOut} /> : 
                <LoginForm onLogin={this.submitLoginInfo} status={this.state.status} error={this.state.error} isSigningIn={this.state.isSigningIn} />
            }<i className="fa fa-mobile pos-a v-h t-0"/>{/* preload icon font */}
            </div>
        );
    }
});

export default App;