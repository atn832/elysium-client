var colors = require("material-colors");
console.log(colors);
var wantedColors = ["green", "deepOrange", "deepPurple", "pink", "cyan"];
//50: bg, 100: bd, 500: bg

var bg = wantedColors.map(function(color, index) {
    return ".bgc-" + index + " { background-color: " + colors[color][500] + "; }";
}).join("\n");

var template = "\
.c-INDEX.arrow_box {\n\
    background: BG;\n\
	border: 1px solid BD;\n\
}\n\
.c-INDEX.arrow_box:after {\n\
	border-right-color: BG;\n\
}\n\
.c-INDEX.arrow_box:before {\n\
	border-right-color: BD;\n\
}";

var bubbles = wantedColors.map(function(color, index) {
    return template
        .replace(/INDEX/g, index)
        .replace(/BG/g, colors[color][50])
        .replace(/BD/g, colors[color][100]);
}).join("\n");

var fs = require("fs");

var css = bg + "\n" + bubbles;

try {
    fs.mkdirSync("temp");
} catch (e) {
    console.log(e);
}
fs.writeFile("temp/material.css", css, function (err) {
    if (err) throw err;
    console.log('Material Palette has been saved!');
});
