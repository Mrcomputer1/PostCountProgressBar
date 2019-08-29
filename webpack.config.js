const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "dist"),
        library: "progressBar"
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ],
	mode: "production"
};