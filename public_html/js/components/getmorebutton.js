/** @jsx React.DOM */
var GetMoreButton = React.createClass({
    handleClick: function() {
        this.props.app.getLogs();
    },
    render: function() {
        return (
            <input type="button" className="button m-4" value="See more messages" onClick={this.handleClick} disabled={this.props.isGettingLogs} />
        );
    }
});

export default GetMoreButton;