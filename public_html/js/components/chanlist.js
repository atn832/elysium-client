/** @jsx React.DOM */
var ChanList = React.createClass({
    render: function() {
        var channels = this.props.channels.map(function(channel) {
            return <a className={"d-ib mb-8 tab" + (channel.ID === this.props.currentChanID? " tab-selected" : " tab-disabled d-n-mobile")}>
                <span className={channel.ID !== this.props.currentChanID? "c-b:h": ""} onClick={channel.ID !== this.props.currentChanID? this.logInto.bind(this, channel) : null}>{channel.name}</span> <i className={"fa fa-times fz-xs va-s border-highlight bdr-3 " + (channel.ID !== this.props.currentChanID? "c-g c-b:h": "c-b")} onClick={this.onLeaveClick.bind(this, channel)}></i>
            </a>
        }.bind(this));
        return <span>
            {channels}
        </span>;
    },
    onLeaveClick: function(channel) {
        this.props.chatApp.leave(channel.ID);
    },
    logInto: function(channel) {
        this.props.chatApp.logInto(channel);
    }
});

export default ChanList;