/** @jsx React.DOM */
var Line = React.createClass({
  render: function() {
    var event = this.props.event;
    return (
      <div className="commentBox">
        {event.source.datetime.substring(11)} &lt;{event.source.entity.name}&gt; {event.content}
      </div>
    );
  }
});
