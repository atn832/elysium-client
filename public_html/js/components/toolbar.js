/** @jsx React.DOM */
import ChanList from './chanlist';
import UserList from './userlist';

var Toolbar = React.createClass({
  render: function() {
    return (
      <div className="tabbar topmenu">
        <ChanList channels={this.props.chanList || []} channel={this.props.channel} />
        - <UserList users={this.props.userList || []} />
      </div>
    );
  }
});

export default Toolbar;