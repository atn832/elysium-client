/** @jsx React.DOM */
var GlobalMap = React.createClass({
    getValidUsers: function() {
        return this.props.users.filter(function(user) {
            return user.lat && user.lng;
        });
    },
    render: function() {
        var validUserCount = this.getValidUsers().length;
        if (this.mounted && validUserCount > 1)
            this.updateMap(this.getValidUsers());
        return <div ref="map" className={"w-100 r-16-9" + (validUserCount? "": " op-0")} />
    },
    componentDidMount: function() {
        setTimeout(function() {
            this.initializeMaps(this.refs.map.getDOMNode(), this.getValidUsers());
            this.mounted = true;
        }.bind(this), 350);
    },
    /**
    * user is defined by {name: ..., lat: xxx, lng: yyy }
    */
    initializeMaps: function(element, users) {
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
        this.map = new google.maps.Map(element, mapOptions);
        this.updateMap(users);
    },
    updateMap: function(users) {
        // delete old markers
        if (this.markers) {
            this.markers.forEach(function(marker) {
                marker.setMap(null);
            });
        }
        // create new markers
        this.markers = users.map(function(user) {
            var latlng = new google.maps.LatLng(user.lat, user.lng);
            return new google.maps.Marker({
                position: latlng,
                map: this.map,
                title: user.name
            });
        }.bind(this));
        var bounds = new google.maps.LatLngBounds();
        this.markers.forEach(function(marker) {
            bounds.extend(marker.getPosition());
        });
        this.map.fitBounds(bounds);
    }
});

export default GlobalMap;