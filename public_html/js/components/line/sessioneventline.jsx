/** @jsx React.DOM */

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
                <span className="line clickable event">
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {eventName}
                </span>
            </div>
        );
    }
});
