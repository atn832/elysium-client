/** @jsx React.DOM */
var colors = require("../../../../../node_modules/material-colors/dist/colors");
console.log(colors);

var GlobalMap = React.createClass({
    getValidUsers: function() {
        return this.props.users.filter(function(user) {
            return user.lat && user.lng;
        });
    },
    render: function() {
        var validUserCount = this.getValidUsers().length;
        return <div ref="map" className={"w-100 r-16-9 tr" + (validUserCount > 1? "": " op-0")} />
    },
    componentDidMount: function() {
        setTimeout(function() {
            this.initializeMaps(this.refs.map.getDOMNode(), this.getValidUsers());
            this.mounted = true;
        }.bind(this), 350);
    },
    componentDidUpdate: function() {
        setTimeout(function() {
            if (!this.map)
                return;
            google.maps.event.trigger(this.map, "resize");
            
            var validUserCount = this.getValidUsers().length;
            if (this.mounted && validUserCount > 1)
                this.updateMap(this.getValidUsers());
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
            mapTypeControl: false,
            streetViewControl: false
        }
        this.map = new google.maps.Map(element, mapOptions);
        this.updateMap(users);
    },
    updateMap: function(users) {
        if (!this.idToMarkers)
            this.idToMarkers = {};
        
        // mark all markers as invisible
        var unusedMarkers = {};
        for (var id in this.idToMarkers) {
            unusedMarkers[id] = true;
        }
        // create new or reuse markers
        var markers = users.map(function(user) {
            var id = user.ID;
            var latlng = new google.maps.LatLng(user.lat, user.lng);
            
            if (!this.idToMarkers[id]) {
                var pinColor = "FE7569";
                var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0,0),
                    new google.maps.Point(10, 34));

                this.idToMarkers[id] = new google.maps.Marker({
                    position: latlng,
                    map: this.map,
                    title: user.name,
                    icon: pinImage
                });
            }
            else {
                this.idToMarkers[id].setPosition(latlng);
                unusedMarkers[id] = false;
            }
            return this.idToMarkers[id];
        }.bind(this));

        //hide unused markers
        for (var id in unusedMarkers) {
            if (unusedMarkers[id])
                this.idToMarkers[id].setMap(null);
        }

        var bounds = new google.maps.LatLngBounds();
        markers.forEach(function(marker) {
            bounds.extend(marker.getPosition());
        });
        this.map.fitBounds(bounds);
    }
});

export default GlobalMap;