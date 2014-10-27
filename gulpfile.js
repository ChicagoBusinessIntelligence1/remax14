'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var plumber = require('gulp-plumber');
var Notification = require('node-notifier');
var notify = require("gulp-notify");
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./app/"
    },
    notify: false,
    logLevel: "silent"
  });});

gulp.task('nib', function () {
  gulp.src('app/styles/nib.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('app/styles/nib'));
});

gulp.task('stylus', function () {

  var onError = function (err) {
    notify.onError({title: "Gulp", subtitle: "Failure!", message: "Error: <%= error.message %>", sound: "Beep"})(err);
    this.emit('end');
  };

  gulp.src('app/styles/**/*.styl')
    .pipe(plumber({errorHandler: onError}))
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('app/styles/'))

});

//register task jade
gulp.task('jade', function () {

  var onError = function (err) {
    notify.onError({
      title: "Gulp",
      subtitle: "Failure!",
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err);
    this.emit('end');
  };

  gulp.src('app/**/*.jade')
    //compiler does not stop on error
    .pipe(plumber({errorHandler: onError}))
    .pipe(jade({
      compileDebug: false
    }))
    .pipe(gulp.dest('app/'))
});

gulp.task('js', function () {

  gulp.src('app/scripts/**/*.js')
    //compiler does not stop on error
    .pipe(gulp.dest('app/scripts/'))
});
gulp.task('html', function () {

  gulp.src('app/index.html')
    //compiler does not stop on error
    .pipe(gulp.dest('app/'))
});


gulp.task('default', ['jade','stylus', 'browser-sync'], function () {
  gulp.watch('app/styles/**/*.styl', ['stylus', browserSync.reload]);
  gulp.watch('app/views/**/*.jade', ['jade',browserSync.reload]);
  gulp.watch('app/scripts/**/*.js', ['js',browserSync.reload]);
  gulp.watch('app/index.html', ['html',browserSync.reload]);
});

/**********************
 ANGULAR
 ***********************/
require('./gulp/ng/gvl.js');
require('./gulp/ng/css-transitions.js');
require('./gulp/ng/css-animations.js');
require('./gulp/ng/js-animations.js');
