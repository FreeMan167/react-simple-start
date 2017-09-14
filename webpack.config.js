const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlRootPlugin = require("html-webpack-react-root-plugin");

const webpack = require('webpack');

module.exports = {
    entry : {
        js : './app/app.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(),
        new HtmlRootPlugin('app'),
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin()
    ]
};
