/** @jsx React.DOM */

var Line = React.createClass({
    render: function() {
        var event = this.props.event;
        return (
            <div className="line clickable">
                {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {event.content}
            </div>
        );
    }
});
