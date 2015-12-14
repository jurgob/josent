'use strict';

var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./index.js"
    },
    module: {
        loaders: [{
            include: /src/,
            test: /\.js$/,
            loader: 'babel'
        }]
    }
};
