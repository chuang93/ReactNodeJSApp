/// <binding BeforeBuild='Run - Development' AfterBuild='Watch - Development' />
"use strict";
const webpack = require('webpack');

module.exports = {
    entry: "./scripts/playerAppEntry.js",
    output: {
        filename: "./public/javascripts/playerAppEntryOut.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};