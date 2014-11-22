module.exports = {
    entry: "./built_jsx/app.js",
    output: {
        path: __dirname,
        filename: "build/js/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['es6-loader'] }
        ]
    }
};