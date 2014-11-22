/** @jsx React.DOM */
var ChanList = React.createClass({
  render: function() {
    var channels = this.props.channels.map(function(channel) {
        return <a className="tab tab-selected">{channel.name}</a>
    });
    return (
      <span id="chanList">
        {channels}
      </span>
    );
  }
});

export default ChanList;