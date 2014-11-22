/** @jsx React.DOM */

var Device = {
    Mobile: 0,
    Laptop: 1,
    Unknown: 2
}

var DeviceRenderer = {
    render: function(source) {
        var userAgent = source && source.userAgent && source.userAgent.userAgent ||"";
        var device = "";
        if (userAgent && (userAgent.indexOf("Android") >= 0 || userAgent.indexOf("iPhone") >= 0))
            device = Device.Mobile;
        else if (userAgent && (userAgent.indexOf("Macintosh") >= 0 || userAgent.indexOf("Windows") >= 0))
            device = Device.Laptop;
        else
            device = Device.Unknown;
        
        if (device === Device.Unknown)
            return <span></span>
        
        var deviceClassName = device === Device.Mobile? "fa-mobile": "fa-laptop";
        var deviceIcon = <i className={"fa " + deviceClassName}></i>;
        return deviceIcon;
    }
}

export default DeviceRenderer;