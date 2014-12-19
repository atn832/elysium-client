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
        return (
            <div className="respContainer expand pos-r mb-8">
                <div ref="map" className="w-100 r-16-9" />
            </div>
        );
    },
    componentDidMount: function() {
        var source = this.props.source;
        if (this.isLocationValid()) {
            var loc = source.location;
            // TODO: use animation end instead
            setTimeout(function() {
                initializeMaps(loc.latitude, loc.longitude, this.refs.map.getDOMNode());
            }.bind(this), 350);
        }
    },
    isLocationValid: function() {
        var source = this.props.source;
        return source.location && source.location.latitude && source.location.longitude;
    }
});

export default MapRenderer;