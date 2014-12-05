/** @jsx React.DOM */
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import EventTypes from "../../data/eventtype";

var JoinLeaveLine = React.createClass({
    render: function() {
        var event = this.props.event;
        var typeID = event.eventType.ID;
        var eventName = typeID === EventTypes.Join? "Join": "Leave";
        return (
            <div>
                <span className="line clickable">
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {eventName}
                </span>
            </div>
        );
    }
});

export default JoinLeaveLine;