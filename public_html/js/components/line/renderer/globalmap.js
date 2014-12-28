/** @jsx React.DOM */
/**
* user is defined by {name: ..., lat: xxx, lng: yyy }
*/
function initializeMaps(element, users) {
    var lat = 0, lng = 0;
    users.forEach(function(user) {
        lat += user.lag;
        lng += user.lng;
    });
    lat /= users.length;
    lng /= users.length;
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: 'roadmap',
        mapTypeControl: false
    }
    var map = new google.maps.Map(element, mapOptions);
    
    var markers = users.map(function(user) {
        var latlng = new google.maps.LatLng(user.lat, user.lng);
        return new google.maps.Marker({
            position: latlng,
            map: map,
            title: user.name
        });
    });
    var bounds = new google.maps.LatLngBounds();
    markers.forEach(function(marker) {
        bounds.extend(marker.getPosition());
    });
    map.fitBounds(bounds);
}

var GlobalMap = React.createClass({
    updateMap: function() {
        var validUsers = this.props.users.filter(function(user) {
            return user.lat && user.lng;
        });
        initializeMaps(this.refs.map.getDOMNode(), validUsers);
    },
    render: function() {
        if (this.mounted)
            this.updateMap();
        return (
            <div ref="map" className="w-100 r-16-9" />
        );
    },
    componentDidMount: function() {
        this.mounted = true;
        setTimeout(this.updateMap.bind(this), 350);
    }
});

export default GlobalMap;