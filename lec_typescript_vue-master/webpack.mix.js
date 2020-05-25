// eslint-disable-next-line @typescript-eslint/no-var-requires
const mix = require('laravel-mix')
require('laravel-mix-alias')
require('laravel-mix-tailwind')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts(['resources/ts/app.ts', 'resources/ts/todo.ts'], 'public/js')

mix.sass('resources/sass/app.scss', 'public/css').tailwind()

mix.alias({
  '@/components': '/resources/ts/components',
  '@/common': '/resources/ts/common',
  '@/store': '/resources/ts/store',

  '@todo/components': '/resources/ts/todo/components',
  '@todo/common': '/resources/ts/todo/common',
  '@todo/store': '/resources/ts/todo/store',
  '@todo/service': '/resources/ts/todo/service',
  '@todo/views': '/resources/ts/todo/views',
})

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ],
  },
})
