/** @jsx React.DOM */
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";

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

export default EventLine;