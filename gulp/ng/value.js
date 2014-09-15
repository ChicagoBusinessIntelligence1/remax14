'use strict';


//<editor-fold desc="REQUIRES">
require('./util.js');
var gulp = require('gulp');
var args = require('yargs').argv;
var print = require('gulp-print');
var rename = require('gulp-rename');
var inject = require('gulp-inject-string');
var gulpif = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var gulpFilter = require('gulp-filter');
//</editor-fold>

var scripts = 'app/scripts/';
var allJsFiles = scripts + '**/*.js';

var argv = require('yargs')
  .default('name', 'value')
  .default('value', 'value')
  .argv;

var injectLine = "app.value('" + argv.name + "', '" + argv.value + "');\r\n"
var injectDep = argv.name;

var isInjectInFile = argv.file ? true : false;

gulp.task('fileInject', function () {
  var fileInc = '**/' + argv.file;
  var filter = gulpFilter(fileInc);

  return gulp.src(allJsFiles)
    .pipe(filter)
    .pipe(print())

  //.pipe(gulp.dest(scripts));

});
gulp.task('appInject', function () {
  return gulp.src(scripts + 'app.js')
    .pipe(inject.append(injectLine))
    .pipe(gulp.dest(scripts));

});
gulp.task('task', function () {
  var filter = gulpFilter('**/home.js');

  gulp.src('./app/scripts/**/*.js')
    .pipe(filter)
    .pipe(print())
});


gulp.task('value', ['appInject', 'fileInject']);

