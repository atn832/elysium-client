function initializeMaps(lat, lng, targetCanvasID) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById(targetCanvasID), mapOptions);

    marker = new google.maps.Marker({
        position: latlng,
        map: map
});

var ConnectionRenderer = {
    render: function(source) {
        if (source.location && source.location.latitude && source.location.longitude) {
            var map = $("<div id=\"" + canvasID + "\" style=\"width:50%; height: 300px\"></div>");
            var loc = source.location;
            initializeMaps(loc.latitude, loc.longitude, canvasID);
        }
    }
};
