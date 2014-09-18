/** @jsx React.DOM */

var EventLine = React.createClass({
    render: function() {
        var event = this.props.event;
        return (
            <div className="commentBox">
                {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {event.content}
            </div>
        );
    }
});
