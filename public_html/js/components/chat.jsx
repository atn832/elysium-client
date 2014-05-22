/** @jsx React.DOM */
var Chat = React.createClass({
  render: function() {
    console.log(this.props.events.length);
    var lines = this.props.events.map(function(event) {
        return <Line event={event}></Line>;
    });
    return (
      <div className="commentBox">
        {lines}
      </div>
    );
  }
});
