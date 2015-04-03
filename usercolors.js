var colors = require("material-colors");
var wantedColors = ["green", "deepOrange", "deepPurple", "pink", "cyan"];
//50: bg, 100: bd, 500: bg

module.exports = wantedColors.map(function(color) {
    return {
        fg: colors[color][500],
        bd: colors[color][100],
        bg: colors[color][50]
    };
});
