'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');
var sass = require('gulp-sass')

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('sass', function () {
    gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

