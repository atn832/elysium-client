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
                eventName = "Session Start";
                break;
            case EventTypes.SessionStop:
                eventName = "Session Stop";
                break;
            case EventTypes.SessionPause:
                eventName = "Session Pause";
                break;
            case EventTypes.SessionResume:
                eventName = "Session Resume";
                break;
        }
        return (
            <div>
                <span className="line event">
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {eventName}
                </span>
            </div>
        );
    }
});

export default SessionEventLine;