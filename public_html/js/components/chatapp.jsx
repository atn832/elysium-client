/** @jsx React.DOM */
var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      channel: 1
    };
  },
  render: function() {
    var chanUpdates = this.props.data.chanUpdates[0].events;
    console.log(chanUpdates);
    return (
      <div className="commentBox">
        <Toolbar data={this.props.data} channel={this.state.channel}></Toolbar>
        <Chat events={chanUpdates}></Chat>
      </div>
    );
  }
});
