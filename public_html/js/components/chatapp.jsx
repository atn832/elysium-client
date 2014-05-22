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
        <Toolbar channels={this.props.data.chanList}></Toolbar>
        <Chat events={chanUpdates}></Chat>
      </div>
    );
  }
});
