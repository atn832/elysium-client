import React from 'react';
import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import EventTypes from "../../data/eventtype";

var JoinLeaveLine = React.createClass({
    render: function() {
        var event = this.props.event;
        var typeID = event.eventType.ID;
        var eventName = typeID === EventTypes.Join? "joined": "left";
        return (
            <div className="line event mb-8">
                {event.source.entity.name} has {eventName} {DeviceRenderer.render(event.source)} {DateRenderer.render(event.source)}
            </div>
        );
    }
});

export default JoinLeaveLine;