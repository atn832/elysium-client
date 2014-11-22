/** @jsx React.DOM */
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";

var JoinLeaveLine = React.createClass({
    render: function() {
        var event = this.props.event;
        var typeID = event.eventType.ID;
        var event = typeID === EventTypes.Join? "Join": "Leave";
        return (
            <div>
                <span className="line clickable">
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {event}
                </span>
            </div>
        );
    }
});

export default JoinLeaveLine;