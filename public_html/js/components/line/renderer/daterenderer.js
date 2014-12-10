import Source from "../../../io/source";

var timeFormat = "HH:mm";

var DateRenderer = {
    render: function(source) {
        if (!source.datetime)
            return "xx:xx";
        
        var someUTCDate = new Date(source.datetime);
        var localTime = source.datetime.tz(Source.getTimeZone()).format(timeFormat);
        var remoteTime = source.timeZone && source.timeZone.timeZone && source.datetime.tz(source.timeZone.timeZone).format(timeFormat);
        
        var displayTime = !remoteTime || localTime == remoteTime ? localTime: localTime + "/" + remoteTime;
        return displayTime;
    }
};

export default DateRenderer;