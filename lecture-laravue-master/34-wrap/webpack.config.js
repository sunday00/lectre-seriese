// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './main.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
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
        new VueLoaderPlugin()
    ]
}