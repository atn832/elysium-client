import moment from "moment-timezone";

var UserList = React.createClass({
    render: function() {
        var users = this.props.users.map(function(user, index) {
            var tz = user.latestSource && user.latestSource.timeZone && user.latestSource.timeZone.timeZone;
            return (
                <span className="d-ib mb-8 mr-4">
                    <span className={user.on? "" : "c-g"}>{user.name + (tz? moment().tz(tz).format(" (hh:mm A)") : "")}</span>
                    {index < this.props.users.length - 1? "," : null}
                </span>
            );
        }.bind(this));
        return (
            <span className="ml-8">
                {users}
            </span>
        );
    },
    componentDidMount: function() {
        setInterval(this.forceUpdate.bind(this), 60000);
    }
});

export default UserList;