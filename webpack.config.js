const path = require("path");

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
    mode: process.env.NODE_ENV || "production"
};