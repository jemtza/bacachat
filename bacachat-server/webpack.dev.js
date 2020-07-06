const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodemonPlugin = require('nodemon-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: '#inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new nodemonPlugin({ watch: path.resolve(__dirname, 'dist') }),
  ],
});
