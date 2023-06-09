const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(commonConfig, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});