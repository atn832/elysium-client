/** @jsx React.DOM */

import DeviceRenderer from "./devicerenderer";

var Tag = React.createClass({
//    onClick: function() {
//        // only if event is from server
//        var event = this.props.lines[0];
//        if (!event.status)
//            this.setState({expanded: !(this.state && this.state.expanded)});
//    },
    render: function() {
        var source = this.props.source;
        return (
            <span className={"d-ib square c-w bdr-3 bgc-" + (source.entity.ID % 5)}>
                <span className="square d-f fd-c jc-c ta-c">
                    <span className="fz-l">{source.entity.name.substring(0, 1).toUpperCase()}</span>
                </span>
            </span>
        );
    }
});

export default Tag;