var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: "./index.js",
  output: {
    chunkFilename: '[name]-[chunkhash].js',
    path: path.join(__dirname, './public/js'),
    filename: "[name].bundle.js",
    publicPath: './public'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
  },
  stats: {
    colors: true
  },
  plugins: [],
};