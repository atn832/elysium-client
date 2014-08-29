/** @jsx React.DOM */

var Line = React.createClass({
    onClick: function() {
        console.log("clicked");
        // only if event is from server
        if (!this.props.event.status)
            this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var event = this.props.event;
        var expandedInfo = this.state && this.state.expanded?"expanded": ConnectionRenderer.render(event.source);
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
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {event.content} {expandedInfo}
                </span>
            </div>
        );
    }
});
