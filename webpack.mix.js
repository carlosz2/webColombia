const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            '@': __dirname + '/application'
        }
    }
});

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

mix.js('application/vue/app.js', 'public/js')
    .sass('application/vue/css/app.scss', 'public/css');
