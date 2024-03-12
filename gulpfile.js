const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Generate 

function GenerateCSS() {
    return src('dist/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist'))
}

function watchSASS() {
    watch(["dist/**/*.scss", '*.html'], GenerateCSS)
}

exports.default = series(GenerateCSS, watchSASS);



// Build

function build() {
    return src('dist/**/*.scss')
        .pipe(dest('dist'))
}

function buildCSS() {
    return src('dist/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist'))
}

exports.build = series(buildCSS, build);