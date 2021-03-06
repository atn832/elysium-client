var path=require("path");
var webpack=require("webpack");
module.exports = {
    entry: "./built_jsx/js/app.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": path.join(__dirname, "public_html/js/lib/jquery-2.1.1.min")
        })
    ]
};