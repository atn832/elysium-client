/** @jsx React.DOM */
var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      channel: 1
    };
  },
  render: function() {
    var chanUpdates = this.props.data.chanUpdates[0].events;
    return (
      <div id="chatclient" className="container">
        <div id="header" className="header">
          <Toolbar data={this.props.data} channel={this.state.channel}></Toolbar>
        </div>
        <Chat events={chanUpdates}></Chat>
        <div className="footer">
          <LineInput></LineInput>
        </div>
      </div>
    );
  }
});
