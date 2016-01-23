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
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel'
        }]
    },
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },
};
