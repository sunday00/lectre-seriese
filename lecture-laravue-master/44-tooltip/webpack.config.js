// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js',
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new CleanTerminalPlugin()
    ]
}