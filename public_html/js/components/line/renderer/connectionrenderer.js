var UserAgentPlatformRegex = /[(]([^)]*)[)]/;

var ConnectionRenderer = {
    render: function(source) {
        var additionalInfo = [];
        var connection = null;

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
        var info = " [" + additionalInfo.join(", ") + "]";
        return info;
    }
};

export default ConnectionRenderer;