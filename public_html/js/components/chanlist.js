/** @jsx React.DOM */
var ChanList = React.createClass({
    render: function() {
        var channels = this.props.channels.map(function(channel) {
            return <a className={"d-ib mb-8 tab tr " + (channel.ID === this.props.currentChanID? " tab-selected" : " tab-disabled d-n-mobile") + (channel.isLeaving? " op-50": "")}>
                <span className={!channel.isLeaving && channel.ID !== this.props.currentChanID? "c-b:h": ""}
                    onClick={channel.ID !== this.props.currentChanID? this.logInto.bind(this, channel) : null}>
                    {channel.name}
                </span>
                <i className={"d-n-mobile fa fa-times fz-xs va-s border-highlight bdr-3 " + (!channel.isLeaving? "border-highlight:h ": " ") + (channel.ID !== this.props.currentChanID? "c-g " + (!channel.isLeaving? "c-b:h": ""): "c-b")}
                    onClick={this.onLeaveClick.bind(this, channel)} />
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