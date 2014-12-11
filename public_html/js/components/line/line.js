/** @jsx React.DOM */

import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import ConnectionRenderer from "./renderer/connectionrenderer";
import MapRenderer from "./renderer/maprenderer";
import Content from "./renderer/content";
import IO from "../../io/io.js";

var Line = React.createClass({
    onClick: function() {
        // only if event is from server
        if (!this.props.event.status)
            this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var event = this.props.event;
        var expanded = this.state && this.state.expanded;
        var expandedInfo = expanded? <span>{ConnectionRenderer.render(event.source)} <MapRenderer source={event.source} /></span>: "";
        var status = "";
        switch (event.status) {
            case "sending":
                status = "unverified";
                break;
            case "error":
                status = "failed";
                break;
        }
        var classes = "d-b line tr " + status;
        return (
            <span className={classes}>
                {DateRenderer.render(event.source)} <span className="clickable" onClick={this.onClick}>{DeviceRenderer.render(event.source)} {event.source.entity.name}</span>&gt; <Content content={event.content} /> {expandedInfo}
            </span>
        );
    }
});

export default Line;