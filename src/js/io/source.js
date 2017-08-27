import jstz from "jstz";

/*
 * Initialize geolocation tracking
 */
var myLocation = null;
if (navigator.geolocation) {
    var onSuccess = function(position) {
        myLocation = position.coords;
    };
    var onError = function() {};
    var wpid = navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});
}

function getTimeZone() {
    return jstz.determine().name();
}

function setSourceInformation(data) {
    data.timeZone = getTimeZone();
    data.userAgent = navigator.userAgent;

    function storeIfNumeric(data, property, value) {
        if (value !== null && !isNaN(value))
            data[property] = value;
    }
    if (myLocation) {
        storeIfNumeric(data, "location.accuracy", myLocation.accuracy);
        storeIfNumeric(data, "location.altitude", myLocation.altitude);
        storeIfNumeric(data, "location.altitudeAccuracy", myLocation.altitudeAccuracy);
        storeIfNumeric(data, "location.heading", myLocation.heading);
        storeIfNumeric(data, "location.latitude", myLocation.latitude);
        storeIfNumeric(data, "location.longitude", myLocation.longitude);
        storeIfNumeric(data, "location.speed", myLocation.speed);
    }
    return data;
}

var Source = {
    setSourceInformation: setSourceInformation,
    getTimeZone: getTimeZone
};
export default Source;