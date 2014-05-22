/** @jsx React.DOM */
var UserList = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
        var style = {
            border: "1px solid blue"
        };
        return <span style={style}>{user.name}</span>
    });
    return (
      <span>
        {users}
      </span>
    );
  }
});
