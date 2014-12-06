import Source from "../../../io/source";
var timeFormat = "HH:mm";

var DateRenderer = {
    render: function(source) {
        if (!source.datetime)
            return "xx:xx";
        
        var someUTCDate = new Date(source.datetime);
        var localTime = moment.utc(source.datetime).tz(Source.getTimeZone());

        var remoteTime = !source.timeZone || !source.timeZone.timeZone? null: moment.utc(source.datetime).tz(source.timeZone.timeZone);
        
        var displayTime = !remoteTime || localTime.format(timeFormat) == remoteTime.format(timeFormat) ? localTime.format(timeFormat): localTime.format(timeFormat) + "/" + remoteTime.format(timeFormat);
        return displayTime;
//        return source && source.datetime && source.datetime.substring(11) || "xx:xx";
    }
};

export default DateRenderer;