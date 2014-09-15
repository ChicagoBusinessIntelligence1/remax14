'use strict';
/**********************
 Requires
 ***********************/

{
  require('./util.js');
  var gulp = require('gulp');
  var args = require('yargs').argv;
  var gulpif = require('gulp-if');

  var rename = require('gulp-rename');
  var inject = require('gulp-inject-string');
}


gulp.task('value', function () {

  gulp.src('app/scripts/app.js')
    .pipe(inject.append('<!-- Created: ' + Date() + ' -->\n'))
    .pipe(rename('prepend.html'))
    .pipe(gulp.dest('build'));

});
