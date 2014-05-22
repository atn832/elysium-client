/** @jsx React.DOM */
var Toolbar = React.createClass({
  render: function() {
    var style = {
        border: "1px solid black",
        padding: "3px"
    };
    return (
      <div className="commentBox" style={style}>
        <ChanList channels={this.props.data.chanList} channel={this.props.channel}></ChanList>
        - <UserList users={this.props.data.chanUpdates[this.props.channel].userList}></UserList>
      </div>
    );
  }
});
