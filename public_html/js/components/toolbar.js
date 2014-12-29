/** @jsx React.DOM */
import ChanList from './chanlist';
import UserList from './userlist';

var Toolbar = React.createClass({
    render: function() {
        return (
            <div className="topmenu bz-bb btc-g px-4 pt-8">
                <ChanList channels={this.props.chanList || []} currentChanID={this.props.currentChanID} />
                <UserList users={this.props.userList || []} />
            </div>
        );
    }
});

export default Toolbar;