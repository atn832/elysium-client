/** @jsx React.DOM */
function initializeMaps(lat, lng, element) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: 'roadmap'
    }
    var map = new google.maps.Map(element, mapOptions);

    new google.maps.Marker({
        position: latlng,
        map: map
    });
}

var MapRenderer = React.createClass({
    render: function() {
        var divStyle = {};
        if (this.isLocationValid()) {
            divStyle = {
                width:"50%",
                height: "300px"
            };
        }
        return (
            <div ref="map" style={divStyle}>
            </div>
        );
    },
    componentDidMount: function() {
        var source = this.props.source;
        if (this.isLocationValid()) {
            var loc = source.location;
            initializeMaps(loc.latitude, loc.longitude, this.refs.map.getDOMNode());
        }
    },
    isLocationValid: function() {
        var source = this.props.source;
        return source.location && source.location.latitude && source.location.longitude;
    }
});

export default MapRenderer;