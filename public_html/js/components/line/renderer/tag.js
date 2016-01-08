
import DeviceRenderer from "./devicerenderer";

var Tag = React.createClass({
    render: function() {
        var source = this.props.source;
        return (
            <span className={"d-ib square c-w ta-c bdr-3 bgc-" + (source.entity.ID % 5)}>
                <span className="d-ib va-c pos-r fz-l">{source.entity.name.substring(0, 1).toUpperCase()}</span>
            </span>
        );
    }
});

export default Tag;