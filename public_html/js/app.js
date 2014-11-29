/** @jsx React.DOM */
"use strict";

import LoginForm from './components/loginform';
import ChatApp from './components/chatapp';
import setSourceInformation from "./io/source";

var LastUserNickKey = "lastUserNick";

var App = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    setCookie: function(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    },
    getCookie: function(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g,"");
            if (x == c_name) {
                return unescape(y);
            }
        }
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
//        $(formFrame).hide();
//        $("#errordiv").text("");

        this.setCookie(LastUserNickKey, login, 365);

        var data = {
            sid: Math.random(), // for IE
            "channel.name": channel,
            "channel.password": password,
            "user.name": login
        };
        
        setSourceInformation(data);

        $.getJSON(this.props.host + "login.action", data)
            .success(function(data, textStatus, jqXHR) { this.submitLoginInfoSuccess(data); }.bind(this))
            .error(function(jqXHR, status, error) { this.submitLoginInfoError(jqXHR); }.bind(this));

        // put the focus to the text box by default.
        // useful when clicking somewhere on the window to put focus on the Elysium window
//        $(window).mouseup(function() {
//            $(textBox).focus();
//        });

//        $(textBox).keydown(function(event) {
//            if (event.keyCode == VK_RETURN) {
//                sendMessage();
//            }
//        });
    },
    submitLoginInfoError: function(jqxhr) {
        this.setState({ status: "Could not login. Request failed" });
        this.setState({
            error: jqxhr.responseText
        });
//        $(txtLogin).focus();
    },
    submitLoginInfoSuccess: function(data) {
        if (data.invalidLoginMessage) {
            this.setState({ status: "Could not login: " + $(this).attr("reason") });
//            $(formFrame).show();
        }
        else {
            this.setState({
                status: "",
                userid: data.user.ID,
                token: data.token,
                chanID: data.channel.ID,
                nick: data.user.name,
                loggedin: true
            });
        }
    },
    render: function() {
        return (
            <div className="w-100 h-100">
            {this.state.loggedin?
                <ChatApp host={this.props.host} userid={this.state.userid} token={this.state.token} ref="chat" /> : 
                <LoginForm onLogin={this.submitLoginInfo} status={this.state.status} error={this.state.error} />
            }
            </div>
        );
    }
});

React.renderComponent(
    <App host="http://localhost:8084/Elysium/" />,
    document.body
);
