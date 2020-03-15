let mix = require('laravel-mix')

// mix
//   .setPublicPath('dist')
//   .js('resources/js/tool.js', 'js')
//   .sass('resources/sass/tool.scss', 'css')

mix.setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .react('./resources/blocks/index.js', './dist/js/editor.js')
    .react('./resources/js/script.js', './dist/js/script.js')
    .sass('resources/scss/field.scss', 'css')
    .sass('./resources/scss/style.scss', './dist/css/style.css')
    .sass('./resources/scss/editor.scss', './dist/css/editor.css')
    .copy('node_modules/aos/dist/aos.css', './dist/css/aos.css')
    .copy('node_modules/aos/dist/aos.js', './dist/js/aos.js')
    .copy('./resources/img', './dist/img')
    .sourceMaps();
