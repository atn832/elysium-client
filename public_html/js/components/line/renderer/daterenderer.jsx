var timeZone = jstz.determine().name();

function pad(minuteOrHour) {
    if (minuteOrHour < 10)
        return "0" + minuteOrHour;
    return minuteOrHour;
}

function formatTime(wt) {
    return [pad(wt.getHours()), pad(wt.getMinutes())].join(":");
}

var DateRenderer = {
    render: function(source) {
        var someUTCDate = new Date(source.datetime);
        var localTime = WallTime.UTCToWallTime(someUTCDate, timeZone);
        var remoteTime = !source.timeZone || !source.timeZone.timeZone? null: WallTime.UTCToWallTime(someUTCDate, source.timeZone.timeZone);
        
        var displayTime = !remoteTime || formatTime(localTime) == formatTime(remoteTime) ? formatTime(localTime): formatTime(localTime) + "/" + formatTime(remoteTime);
        return displayTime;
//        return source && source.datetime && source.datetime.substring(11) || "xx:xx";
    }
};