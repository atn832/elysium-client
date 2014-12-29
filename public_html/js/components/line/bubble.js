/** @jsx React.DOM */

import DateRenderer from "./renderer/daterenderer";
import DeviceRenderer from "./renderer/devicerenderer";
import ConnectionRenderer from "./renderer/connectionrenderer";
import Content from "./renderer/content";
import Tag from "./renderer/tag";
import IO from "../../io/io.js";

var Bubble = React.createClass({
    render: function() {
        var event = this.props.lines[this.props.lines.length - 1];
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
                    <Tag source={event.source} />
                    <div className={"arrow_box p-6 ml-10 d-ib bdr-3 c-" + (event.source.entity.ID % 5)}>
                        <div className="ov-h mb-4">{contents}</div>
                        <div className="ta-r c-g ml-20 whs-nw">{event.source.entity.name} sent {DeviceRenderer.render(event.source)} at {DateRenderer.render(event.source)}</div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Bubble;