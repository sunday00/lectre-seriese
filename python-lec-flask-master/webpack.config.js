const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        })
    ],
    entry: {
        main: [
            path.join(__dirname, 'resources/app.js'),
            path.join(__dirname, 'resources/app.scss')
        ]
    },
    output:{
        path : path.resolve(__dirname, 'static/js'),
        filename: '[name].js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}