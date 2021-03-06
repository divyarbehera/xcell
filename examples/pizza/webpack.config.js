const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  devtool: 'source-maps',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        },
      },
    ]
  },

  devServer: {
    contentBase: './dist'
  },

  node: {
    fs: 'empty',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    })
  ]
}
