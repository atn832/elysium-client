var path=require("path");

module.exports = {
    entry: "./built_jsx/js/app.js",
    output: {
        path: __dirname,
        filename: "build/js/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'es6-loader' }
        ]
    }
};