/** @jsx React.DOM */

var Device = {
    Mobile: 0,
    Laptop: 1,
    Unknown: 2
}

var DeviceRenderer = {
    render: function(source) {
        var userAgent = source && source.userAgent && source.userAgent.userAgent ||"";
        var device = userAgent? userAgent.indexOf("Android") >= 0 ||
            userAgent.indexOf("iPhone")? Device.Mobile: Device.Laptop : Device.Unknown;
        if (device === Device.Unknown)
            return <span></span>
        
        var deviceClassName = device === Device.Mobile? "fa-mobile": "fa-laptop";
        var deviceIcon = <i className={"fa " + deviceClassName}></i>;
        return deviceIcon;
    }
}