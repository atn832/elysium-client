/** @jsx React.DOM */
var UserList = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
        return user.name;
    }).join(", ");
    return (
      <span className="ml-8">
        {users}
      </span>
    );
  }
});

export default UserList;