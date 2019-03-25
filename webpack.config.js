var path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: "./src/index.js",
  output: {
    chunkFilename: '[name]-[chunkhash].js',
    path: path.join(__dirname, './public/js'),
    filename: "bundle.js",
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
