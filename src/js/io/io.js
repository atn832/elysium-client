import Source from "./source";
/*global $*/

function submitLoginInfoError(jqXHR) {
    return {
        loggedin: false,
        reason: "Request failed",
        error: jqXHR.responseText
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
        return {
            status: "",
            userID: data.user.ID,
            token: data.token,
            chanID: data.channel.ID,
            nick: data.user.name,
            loggedin: true
        };
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
        
        Source.setSourceInformation(data);

        $.getJSON(IO.host + "login.action", data)
                .success(function(data, textStatus, jqXHR) { callback(submitLoginInfoSuccess(data)); })
                .error(function(jqXHR, status, error) { callback(submitLoginInfoError(jqXHR)); });
    },
    logout: function(token, userID) {
        var data = {
            token: token,
            userID: userID
        };
        Source.setSourceInformation(data);
        $.ajax({
            url: IO.host + "logout.action",
            data: data,
            async: false
        });
    }
};

export default IO;