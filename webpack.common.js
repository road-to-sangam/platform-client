var { resolve } = require("path");
const Dotenv = require('dotenv-webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./client/index.js",
  entry: {
    app: ["babel-polyfill", "./client/index.js"]
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    new Dotenv()
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
