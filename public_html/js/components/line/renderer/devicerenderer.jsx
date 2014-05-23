/** @jsx React.DOM */

var Device = {
    Mobile: 0,
    Laptop: 1
}

var DeviceRenderer = {
    render: function(source) {
        var userAgent = source.userAgent? source.userAgent.userAgent: "";
        var device = userAgent.indexOf("Android") >= 0 ||
            userAgent.indexOf("iPhone")? Device.Mobile: Device.Laptop;
        var deviceClassName = device === Device.Mobile? "fa-mobile": "fa-laptop";
        var deviceIcon = <i className={"fa " + deviceClassName}></i>;
        return deviceIcon;
    }
}