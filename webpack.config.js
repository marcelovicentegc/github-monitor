var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './assets/js/index',
  output: {
    path: path.resolve(__dirname, 'assets/bundles/'),
    publicPath: '/static/bundles/',
    filename: '[name]-[hash].js',
  },

  plugins: [new BundleTracker({filename: './webpack-stats.json'})],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'assets/js')],
    extensions: ['.js', '.jsx'],
  },
};
