var path$ = require('path');
var gulp$ = require('gulp');
var rjs$ = require('gulp-requirejs');
var sourcemaps$ = require('gulp-sourcemaps');

gulp$.task('default', function(){
    console.log('I love ranran.');
});

gulp$.task('love', function() {
    console.log('Yes, love~~');
});

gulp$.task('requirejsBuild', function(){
    return rjs$({
        baseUrl: 'src/js/main.js',
        out: 'index.bundle.js',
        shim: {

        }
    })
    .pipe(sourcemaps$.init({loadMaps: true}))
    .pipe(sourcemaps$.write())
    .pipe(gulp$.dest('./deploy/'));
});
