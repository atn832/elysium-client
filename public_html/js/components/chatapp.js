/** @jsx React.DOM */
var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      channel: 1,
      chanUpdates: this.props.data.chanUpdates[0].events
    };
  },
  render: function() {
    // var chanUpdates = this.props.data.chanUpdates[0].events;
    return (
      <div id="chatclient" className="container">
        <div id="header" className="header">
          <Toolbar data={this.props.data} channel={this.state.channel}></Toolbar>
        </div>
        <MessageView events={this.state.chanUpdates} />
        <div className="footer">
          <LineInput app={this}></LineInput>
        </div>
      </div>
    );
  }
});