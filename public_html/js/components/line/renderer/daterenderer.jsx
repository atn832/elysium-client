var DateRenderer = {
    render: function(source) {
        return source && source.datetime && source.datetime.substring(11) || "Undefined Date";
    }
};