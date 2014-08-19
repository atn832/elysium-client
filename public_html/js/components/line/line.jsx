/** @jsx React.DOM */

var Line = React.createClass({
    onClick: function() {
        console.log("clicked");
        this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var event = this.props.event;
        var expandedInfo = this.state && this.state.expanded?"expanded": "";
        return (
            <div>
                <span className="line clickable" onClick={this.onClick}>
                    {DateRenderer.render(event.source)} {DeviceRenderer.render(event.source)} {event.source.entity.name}&gt; {event.content} {expandedInfo}
                </span>
            </div>
        );
    }
});
