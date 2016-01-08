var GetMoreButton = React.createClass({
    handleClick: function() {
        this.props.app.getLogs();
    },
    render: function() {
        return (
            <button type="button" className="button mt-4 mb-8 tr lh-2" onClick={this.handleClick} disabled={this.props.isGettingLogs}>
                {this.props.isGettingLogs?"Getting messages": "See more messages"}
                {this.props.isGettingLogs? <i className="ml-8 fa fa-spinner fa-spin"></i>: null}
            </button>
        );
    }
});

export default GetMoreButton;