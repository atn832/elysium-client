/** @jsx React.DOM */

import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import ConnectionRenderer from "./renderer/connectionrenderer";
import MapRenderer from "./renderer/maprenderer";
import Content from "./renderer/content";
import Tag from "./renderer/tag";
import IO from "../../io/io.js";

var Bubble = React.createClass({
    onClick: function() {
        // only if event is from server
        var event = this.props.lines[this.props.lines.length - 1];
        if (!event.status)
            this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var event = this.props.lines[this.props.lines.length - 1];
        var expanded = this.state && this.state.expanded;
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
                <div className="mb-8 d-f fd-r ai-fe">
                    <div className="square mr-4">
                        <span className="clickable" onClick={this.onClick}><Tag source={event.source} /></span>
                    </div>
                    <div className="arrow_box p-6 ml-6 d-ib bdr-3">
                        <div className="ov-h mb-4">{contents}</div>
                        <div className="ta-r c-g">{event.source.entity.name} sent {DeviceRenderer.render(event.source)} at {DateRenderer.render(event.source)}</div>
                    </div>
                </div>
                {expanded? <MapRenderer source={event.source} />: ""}
            </div>
        );
    }
});

export default Bubble;