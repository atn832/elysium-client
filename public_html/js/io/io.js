import setSourceInformation from "./source";

function submitLoginInfoError(jqxhr) {
    return {
        loggedin: false,
        reason: "Request failed",
        error: jqxhr.responseText
    };
}

function submitLoginInfoSuccess(data) {
    if (data.invalidLoginMessage) {
        return {
            loggedin: false,
            reason: $(this).attr("reason")
        };
    }
    else {
        this.setState({
            status: "",
            userID: data.user.ID,
            token: data.token,
            chanID: data.channel.ID,
            nick: data.user.name,
            loggedin: true
        });
    }
}

var IO = {
    login: function(channel, password, login, callback) {
        var data = {
            sid: Math.random(), // for IE
            "channel.name": channel,
            "channel.password": password,
            "user.name": login
        };
        
        setSourceInformation(data);

        $.getJSON(this.props.host + "login.action", data)
                .success(function(data, textStatus, jqXHR) { callback(this.submitLoginInfoSuccess(data)); }.bind(this))
                .error(function(jqXHR, status, error) { callback(this.submitLoginInfoError(jqXHR)); }.bind(this));
    }
};

export default IO;