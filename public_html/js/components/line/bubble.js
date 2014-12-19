/** @jsx React.DOM */

import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import ConnectionRenderer from "./renderer/connectionrenderer";
import MapRenderer from "./renderer/maprenderer";
import Content from "./renderer/content";
import IO from "../../io/io.js";

var Bubble = React.createClass({
    onClick: function() {
        // only if event is from server
        var event = this.props.lines[0];
        if (!event.status)
            this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var event = this.props.lines[0];
        var expanded = this.state && this.state.expanded;
        var expandedInfo = expanded? <span>{ConnectionRenderer.render(event.source)} <MapRenderer source={event.source} /></span>: "";
        var contents = this.props.lines.map(function(line) {
            var status = "";
            switch (line.status) {
                case "sending":
                    status = "unverified";
                    break;
                case "error":
                    status = "failed";
                    break;
            }
            var classes = "d-b line tr " + status;
            return <span className={classes}><Content content={line.content} /></span>;
        });
        return (
            <div>
                <div className="mb-4">
                    {DateRenderer.render(event.source)} <span className="clickable" onClick={this.onClick}>{DeviceRenderer.render(event.source)} {event.source.entity.name}</span>&gt;{expandedInfo}
                </div>
                <div className="arrow_box p-6 mb-4 d-ib"><div className="ov-h">{contents}</div></div>
            </div>
        );
    }
});

export default Bubble;