/** @jsx React.DOM */
var GetMoreButton = React.createClass({
    handleClick: function() {
        this.props.app.getLogs();
    },
    render: function() {
        return (
            <input type="button" value="get more" onClick={this.handleClick} disabled={this.props.isGettingLogs} />
        );
    }
});

export default GetMoreButton;