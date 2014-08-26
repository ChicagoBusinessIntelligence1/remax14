'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

//---------------------------------------------------------
var htmlmin = require('gulp-minifier');

gulp.task('htmlmin', function () {
    gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/2'))
});


