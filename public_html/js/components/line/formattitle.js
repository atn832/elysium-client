import moment from "moment";
import Source from "../../io/source";
var timeFormat = "hh:mm A";

function getTime(datetime) {
    if (!datetime)
        return "xx:xx xx";

    var someUTCDate = new Date(datetime);
    var localTime = moment.utc(datetime).tz(Source.getTimeZone());
    return localTime.format(timeFormat);
}

function formatTitle(event) {
    return getTime(event.source.datetime) + " " + event.source.entity.name;
}

export default formatTitle;