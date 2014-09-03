'use strict';
/**********************
 Requires
 ***********************/

var gulp = require('gulp');
var args = require('yargs').argv;
var gulpif = require('gulp-if');


gulp.task('sv', function () {
  var test = args.type;
  console.log(test);
});


//---------------------------------------------------------

require('require-dir')('./gulp');
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

