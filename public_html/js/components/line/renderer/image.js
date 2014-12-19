/** @jsx React.DOM */

var ImageRenderer = React.createClass({
    onClick: function() {
        this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var url = this.props.src;
        var image = "";
        if (this.state && this.state.expanded) {
            image = <div className="respContainer pos-r my-4"><img className="expand w-100" src={url} /></div>;
        }
        return <span><a href={url} target="_blank">{url}</a> <button onClick={this.onClick}>{this.state && this.state.expanded?"Hide": "Show"}</button>{image}</span>;
    }
});

export default ImageRenderer;