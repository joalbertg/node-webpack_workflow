const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: `${path.resolve(__dirname, '../dist')}`,
    filename: 'js/bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080'
  },
  module: {
    rules: [{
      test: /\.(sc|sa|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.handlebars/,
      loader: 'handlebars-loader'
    },{
      test: /\.(jp|jpe|pn)g$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/img/',
          useRelativePath: true
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.handlebars',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-styles.css'
    })
  ]
};

