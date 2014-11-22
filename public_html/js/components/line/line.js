/** @jsx React.DOM */

import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import ConnectionRenderer from "./renderer/connectionrenderer";
import MapRenderer from "./renderer/maprenderer";
import Content from "./renderer/content";

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
        var classes = "line clickable " + status;
        return (
            <div>
                <span className={classes} onClick={this.onClick}>
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; <Content content={event.content} /> {expandedInfo}
                </span>
            </div>
        );
    }
});

export default Line;