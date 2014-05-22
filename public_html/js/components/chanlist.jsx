/** @jsx React.DOM */
var ChanList = React.createClass({
  render: function() {
    var channels = this.props.channels.map(function(channel) {
        var style = {
            border: "1px solid blue",
            margin: "5px"
        };
        return <span style={style}>{channel.name}</span>
    });
    return (
      <span>
        {channels}
      </span>
    );
  }
});
