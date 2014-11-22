/** @jsx React.DOM */
var UserList = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
        return <a className="tab tab-unselected">{user.name}</a>
    });
    return (
      <span id="usermenu" className="tabbar">
        {users}
      </span>
    );
  }
});

export default UserList;