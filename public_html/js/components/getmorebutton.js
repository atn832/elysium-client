/** @jsx React.DOM */
var GetMoreButton = React.createClass({
    handleClick: function() {
        this.props.app.getLogs();
    },
    render: function() {
        return (
            <button type="button" className="button m-4 tr lh-2" onClick={this.handleClick} disabled={this.props.isGettingLogs}>
                {this.props.isGettingLogs?"Getting messages": "See more messages"}
                {this.props.isGettingLogs? <i className="ml-8 fa fa-spinner fa-spin"></i>: null}
            </button>
        );
    }
});

export default GetMoreButton;