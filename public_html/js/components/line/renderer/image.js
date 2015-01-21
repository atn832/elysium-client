/** @jsx React.DOM */

var ImageRenderer = React.createClass({
    onClick: function() {
        this.setState({expanded: !(this.state && this.state.expanded)});
    },
    getDirectImageURL: function(url) {
        if (url.indexOf("dropbox.com") >= 0) {
            return url + (url.indexOf("?") >= 0? "&" : "?") + "raw=1";
        }
        return url;
    },
    render: function() {
        var url = this.props.src;
        var image = "";
        if (this.state && this.state.expanded) {
            image = <div className="respContainer pos-r my-4"><img className="expand w-100" src={this.getDirectImageURL(url)} /></div>;
        }
        return <span><a href={url} target="_blank">{decodeURIComponent(url)}</a> <button className="button" onClick={this.onClick}>{this.state && this.state.expanded?"Hide": "Show"}</button>{image}</span>;
    }
});

export default ImageRenderer;