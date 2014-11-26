/** @jsx React.DOM */
import ChanList from './chanlist';
import UserList from './userlist';

var Toolbar = React.createClass({
  render: function() {
    return (
      <div className="tabbar" id="topmenu">
        <ChanList channels={this.props.data && this.props.data.chanList || []} channel={this.props.channel}></ChanList>
        - <UserList users={this.props.data && this.props.data.chanUpdates[this.props.channel].userList || []}></UserList>
      </div>
    );
  }
});

export default Toolbar;