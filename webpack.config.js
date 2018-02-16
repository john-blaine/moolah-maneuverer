var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname,  'client/src');
var DIST_DIR = path.resolve(__dirname, 'compiled/client/src');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query : {
          presets : ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;