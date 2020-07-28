const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {    
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [     
            { test: /\.css$/,  use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" },
            { test: /\.(woff|woff2)$/, use:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: 'file-loader'
            },
            {
              test: /\.scss$/,
              use: [{
                loader: 'style-loader', // inject CSS to page
              }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
              }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                  plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                      //require('precss'),
                      require('autoprefixer')
                    ];
                  }
                }
              }, {
                loader: 'sass-loader' // compiles Sass to CSS
              }],
            }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html',
        //模板文件中使用<%= htmlWebpackPlugin.options.title %> 
        title: 'test html templete ',
        //模板文件中使用 <%= foo %>
        templateParameters: {
          'foo': 'bar'
        },
      }),
      new MiniCssExtractPlugin({ filename: 'styles.css' })
    ]
};

