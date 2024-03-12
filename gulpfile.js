const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');

// Generate 

function GenerateCSS() {
    return src('pixee-ui/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist'))
}

function watchSASS() {
    watch(["pixee-ui/**/*.scss", '*.html'], GenerateCSS)
}

exports.default = series(GenerateCSS, watchSASS);



// Build

function build() {
    return src('pixee-ui/**/*.scss')
        .pipe(dest('dist'))
}

function buildCSS() {
    return src('pixee-ui/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist'))
}

exports.build = series(buildCSS, build);