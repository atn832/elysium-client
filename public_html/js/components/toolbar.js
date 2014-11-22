/** @jsx React.DOM */
var Toolbar = React.createClass({
  render: function() {
    return (
      <div className="tabbar" id="topmenu">
        <ChanList channels={this.props.data.chanList} channel={this.props.channel}></ChanList>
        - <UserList users={this.props.data.chanUpdates[this.props.channel].userList}></UserList>
      </div>
    );
  }
});

export default Toolbar;