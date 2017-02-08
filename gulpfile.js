var path$ = require('path');
var gulp$ = require('gulp');
var rjs$ = require('gulp-requirejs');
var sourcemaps$ = require('gulp-sourcemaps');
var gulpFileInclude$ = require('gulp-file-include');

gulp$.task('default', function(){
    console.log('I love ranran.');
});

gulp$.task('love', function() {
    console.log('Yes, love~~');
});

gulp$.task('rjs-build', function(){
    return rjs$({
        baseUrl: './src',
        name: 'js/main',

        optimize: "uglify",
        uglify2: {
            output: {
                beautify: false
            },
            compress: {
                sequences: false,
                global_defs: {
                    DEBUG: false
                }
            },
            preserveLicenseComments: true,
            warnings: true,
            mangle: true
        },

        optimizeCss: 'standard',

        removeCombined: true,

        out: 'index.bundle.js',
        generateSourceMaps: true,

        paths: {
            zepto: 'js/libs/zepto',
        }
    })
    .pipe(sourcemaps$.init({ loadMaps: true }))
    .pipe(sourcemaps$.write())
    .pipe(gulp$.dest('./dist/'));
});

gulp$.task('include-common-template-files', function() {
    gulp.src('./html/*.html')
        .pipe(gulpFileInclude$({
            prefix: '@@'
        }));
});
