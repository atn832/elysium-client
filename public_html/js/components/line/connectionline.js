/** @jsx React.DOM */
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import EventTypes from "../../data/eventtype";

var ConnectionLine = React.createClass({
    render: function() {
        var event = this.props.event;
        var typeID = event.eventType.ID;
        var eventName;
        switch (typeID) {
            case EventTypes.LostConnection:
                eventName = "Lost connection to server";
                break;
            case EventTypes.FoundConnection:
                eventName = "Heard back from server!";
                break;
        }
        return (
            <div>
                <span className="line clickable event error">
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {eventName}
                </span>
            </div>
        );
    }
});

export default ConnectionLine;