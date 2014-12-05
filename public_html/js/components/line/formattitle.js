var timeZone = jstz.determine().name();
var timeFormat = "HH:mm";

function getTime(datetime) {
    if (!datetime)
        return "xx:xx";

    var someUTCDate = new Date(datetime);
    var localTime = moment.utc(datetime).tz(timeZone);
    return localTime.format(timeFormat);
}

function formatTitle(event) {
    return getTime(event.source.datetime) + " " + event.source.entity.name;
}

export default formatTitle;