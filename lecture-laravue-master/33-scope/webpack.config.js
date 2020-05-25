// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}