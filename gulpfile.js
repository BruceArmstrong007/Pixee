const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');

// Generate 

function GenerateCSS() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

function watchSASS() {
    watch(["pixee-ui/**/*.scss", 'sass/**/*.scss', '*.html'], GenerateCSS)
}

exports.default = series(GenerateCSS, watchSASS);



// Build

function build() {
    return src('pixee-ui/**/*.scss')
        .pipe(dest('dist'))
}

function buildCSS() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('dist'))
}

exports.build = series(buildCSS, build);