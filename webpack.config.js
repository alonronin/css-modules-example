const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');

module.exports = {
  entry: {
    app: ['./'],
    vendors: Object.keys(pkg.dependencies)
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'src'),
        options: {
          presets: [['latest', { modules: false }], 'react']
        }
      },

      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },

            'sass-loader'
          ]
        })
      },

      {
        test: /\.(jpg|png|gif)?(\?.+)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    }),

    new ExtractTextPlugin("styles.css"),

    new HtmlWebpackPlugin()
  ]
};
