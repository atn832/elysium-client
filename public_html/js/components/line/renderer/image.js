/** @jsx React.DOM */

var Image = React.createClass({
    onClick: function() {
        this.setState({expanded: !(this.state && this.state.expanded)});
    },
    render: function() {
        var url = this.props.src;
        var image = "";
        if (this.state && this.state.expanded) {
            var style = {
                "display": "inline-block",
                "vertical-align": "top"
            };
            image = <span style={style}><a href={url} target="_blank">{url}<br/><img src={url} /></a></span>;
        }
        return <span><button onClick={this.onClick}>{this.state && this.state.expanded?"Hide": "Show " + url }</button>{image}</span>;
    }
});
