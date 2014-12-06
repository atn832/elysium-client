var path=require("path");
var webpack=require("webpack");
module.exports = {
    entry: "./built_jsx/js/app.js",
    output: {
        path: __dirname,
        filename: "build/js/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'es6-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": path.join(__dirname, "public_html/js/lib/jquery-2.1.1.min")
        })
    ]
};