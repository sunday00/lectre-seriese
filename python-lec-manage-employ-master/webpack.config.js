let webpack = require('webpack');
let path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : {
        main: [
            './resources/js/main.js',
            './resources/scss/main.scss',
        ]
    },
    output:{
        path : path.resolve(__dirname, 'static/js'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '/static/css',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/
            }
        ]
    }
}