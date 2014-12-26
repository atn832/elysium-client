/** @jsx React.DOM */
var ChanList = React.createClass({
    render: function() {
        //currentChanID
        var channels = this.props.channels.map(function(channel) {
            return <a className={"tab" + (channel.ID === this.props.currentChanID? " tab-selected" : " tab-disabled")}>{channel.name}</a>
        }.bind(this));
        return <span>
            {channels}
        </span>;
    }
});

export default ChanList;