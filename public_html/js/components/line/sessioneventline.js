/** @jsx React.DOM */
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import EventTypes from "../../data/eventtype";

var SessionEventLine = React.createClass({
    render: function() {
        var event = this.props.event;
        var typeID = event.eventType.ID;
        var eventName;
        switch (typeID) {
            case EventTypes.SessionStart:
                eventName = "connected";
                break;
            case EventTypes.SessionStop:
                eventName = "disconnected";
                break;
            case EventTypes.SessionPause:
                eventName = "Session Pause";
                break;
            case EventTypes.SessionResume:
                eventName = "Session Resume";
                break;
        }
        return (
            <div className="line event mb-8">
                {event.source.entity.name} has {eventName} from {DeviceRenderer.render(event.source)} at {DateRenderer.render(event.source)}
            </div>
        );
    }
});

export default SessionEventLine;