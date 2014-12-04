/** @jsx React.DOM */
"use strict";

import LoginForm from './components/loginform';
import ChatApp from './components/chatapp';
import IO from "./io/io";
import { getURLParameter } from "./util";

var App = React.createClass({
    getInitialState: function() {
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
            status: "logging in"
        });

        IO.login(channel, password, login,
                this.submitLoginInfoCallback.bind(this));
    },
    submitLoginInfoCallback: function(data) {
        if (data.loggedin) {
            this.setState({
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
                <ChatApp host={this.props.host} chanID={this.state.chanID} userID={this.state.userID} nick={this.state.nick} token={this.state.token} ref="chat" onLogOut={this.onLogOut} /> : 
                <LoginForm onLogin={this.submitLoginInfo} status={this.state.status} error={this.state.error} />
            }
            </div>
        );
    }
});

React.renderComponent(
    <App host="http://localhost:8080/Elysium/" />,
    document.body
);
