'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var Notification = require('node-notifier');
var notify = require("gulp-notify");
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');



gulp.task('nib', function () {
  gulp.src('app/styles/nib.styl')
    .pipe(stylus({use: [nib(), axis()]}))
    .pipe(gulp.dest('app/styles/nib'));
});


gulp.task('stylus', function () {

  var onError = function(err) {
    notify.onError({ title:    "Gulp", subtitle: "Failure!", message:  "Error: <%= error.message %>", sound:    "Beep"})(err);
    this.emit('end');
  };


  gulp.src('app/styles/**/*.styl')
    .pipe(plumber({errorHandler: onError}))
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('app/styles/'));
});

//register task jade
gulp.task('jade', function () {

  var onError = function(err) {
    notify.onError({
      title:    "Gulp",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>",
      sound:    "Beep"
    })(err);

    this.emit('end');
  };

  gulp.src('app/**/*.jade')
    //compiler does not stop on error
    .pipe(plumber({errorHandler: onError}))
    .pipe(jade({
      compileDebug: false
    }))
    .pipe(gulp.dest('app/'));
});


//
//
//
//gulp.task('styles', function () {
//  return gulp.src('app/styles/main.scss')
//    .pipe($.plumber())
//    .pipe($.rubySass({style: 'compact'}))
//    .pipe($.autoprefixer('last 1 version'))
//    .pipe(gulp.dest('app/styles'))
//})

//gulp.task('scripts', function () {
//  return gulp.src('app/scripts/**/*.js')
//    .pipe($.jshint())
//});
//
//gulp.task('partials', function () {
//  return gulp.src('app/partials/**/*.html')
//    .pipe($.minifyHtml({
//      empty: true,
//      spare: true,
//      quotes: true
//    }))
//    .pipe($.ngHtml2js({
//      moduleName: 'app',
//      prefix: 'partials/'
//    }))
//    .pipe(gulp.dest('.tmp/partials'))
//});

//gulp.task('html', ['stylus', 'partials'], function () {
//  var jsFilter = $.filter('**/*.js');
//  var cssFilter = $.filter('**/*.css');
//
//  return gulp.src('app/*.html')
//    .pipe($.inject(gulp.src('.tmp/partials/**/*.js'), {
//      read: false,
//      starttag: '<!-- inject:partials -->',
//      addRootSlash: false,
//      addPrefix: '../'
//    }))
//    .pipe($.useref.assets())
//    .pipe($.rev())
//    .pipe(jsFilter)
//    .pipe($.ngAnnotate())
//    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
//    .pipe(jsFilter.restore())
//    .pipe(cssFilter)
//    .pipe(cssFilter.restore())
//    .pipe($.useref())
//    .pipe($.revReplace())
//    .pipe(gulp.dest('dist'))
//});

//gulp.task('images', function () {
//  return gulp.src('app/images/**/*')
//    .pipe($.cache($.imagemin({
//      optimizationLevel: 3,
//      progressive: true,
//      interlaced: true
//    })))
//    .pipe(gulp.dest('dist/images'))
//});
//
//gulp.task('fonts', function () {
//  return gulp.src($.mainBowerFiles())
//    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
//    .pipe($.flatten())
//    .pipe(gulp.dest('dist/fonts'))
//});
//
//gulp.task('clean', function () {
//  return gulp.src(['.tmp', 'dist'], {read: false}).pipe($.rimraf());
//});

//gulp.task('build', ['jade', 'html', 'partials', 'images', 'fonts']);
gulp.task('build', ['jade','stylus']);
