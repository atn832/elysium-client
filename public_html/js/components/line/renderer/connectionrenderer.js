var UserAgentPlatformRegex = /[(]([^)]*)[)]/;
function htmlentities(text) {
    return $('<div/>').text(text).html()
}

var ConnectionRenderer = {
    render: function(source) {
        var additionalInfo = [];
        var connection = null;
        if (source.connection) {
            if (source.connection.hostmask && source.connection.hostmask.hostmask)
                connection = source.connection.hostmask.hostmask;
            else if (source.connection.IP && source.connection.IP.IP)
                connection = source.connection.IP.IP;
        }
        if (connection)
            additionalInfo.push(connection);
        if (source.location && source.location.locationName && source.location.locationName.name)
            additionalInfo.push(source.location.locationName.name);
        if (source.userAgent && source.userAgent.userAgent) {
            var platform = source.userAgent.userAgent.match(UserAgentPlatformRegex)[1];
            additionalInfo.push(platform);
        }
        if (source.timeZone && source.timeZone.timeZone)
            additionalInfo.push(source.timeZone.timeZone);
        
        // var canvasID = "map" + event.ID;
        var info = " [" + htmlentities(additionalInfo.join(", ")) + "]";
        return info;
    }
};