'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorhandler = require('errorhandler'),
  path = require('path');
var _ = require('underscore');
var gulp = require('gulp');
var filter = require('gulp-filter');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');

var plumber = require('gulp-plumber');
var Notification = require('node-notifier');
var notify = require("gulp-notify");
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');
var livereload = require('gulp-livereload');

var sendgrid = require('sendgrid')('remax14', 'R1eKefo9ApTh');
var open = require("gulp-open");

var EXPRESS_PORT = 3000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;

function startExpress() {

  var express = require('express');
  var app = express();


  var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '/app')));

  app.use(express.static(EXPRESS_ROOT));



  app.get('*', function (req, res) {
    res.render('index');
  })

// POST /api/users gets JSON bodies
  app.post('/sendmail', jsonParser, function (req, res) {

    var sendEmail = req.body;
    var fromName = sendEmail.fname + ' ' + sendEmail.lname;
    var messageBody = 'Send from remax1stclass.com contact us form\r\n';
    if (!_.isUndefined(sendEmail.phone)) {
      messageBody += 'Phone:' + sendEmail.phone + '\r\n';
    }
    if (!_.isUndefined(sendEmail.mobile)) {
      messageBody += 'Cell phone:' + sendEmail.mobile + '\r\n';
    }
    messageBody+='\r\n';
    messageBody+=sendEmail.body;
    sendgrid.send({
      to: 'chicagobusinessintelligence1@gmail.com',
      fromname: fromName,
      from: sendEmail.from,
      subject: sendEmail.subject,
      text: messageBody
    }, function (err, json) {
      if (err) {
        return console.error(err);
      }
      console.log(json);
    });
    console.log(sendEmail);

    res.send(200);
    res.end();
  })

  app.listen(EXPRESS_PORT);
}



gulp.task('scripts', function () {
  gulp.src('app/scripts/directives/sv-contact-us-form.js')

    .pipe(gulp.dest('app/scripts/directives'))
})

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
    .pipe(filter('**/*.css'))
    .pipe(livereload())
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

  gulp.src('app/views/**/*.jade')
    //compiler does not stop on error
    .pipe(plumber({errorHandler: onError}))
    .pipe(jade({
      compileDebug: false
    }))
    .pipe(gulp.dest('app/views/'))
    .pipe(livereload({silent:true}));
});

gulp.task('html', function () {

  gulp.src('app/index.html')
    //compiler does not stop on error
    .pipe(gulp.dest('app/'))
});


gulp.task("url", function(){
  var options = {
    url: "http://localhost:3000",
    app: "chrome"
  };
  gulp.src("app/index.html")
    .pipe(open("", options));
});

gulp.task('default', ['jade', 'stylus'], function () {
  startExpress();
  var onError = function (err) {
    notify.onError({
      title: "Gulp",
      subtitle: "Failure!",
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err);
    this.emit('end');
  };

  gulp.src('app/styles/**/*.styl')
    .pipe(watch('app/styles/**/*.styl'))
    .pipe(plumber({errorHandler: onError}))
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('app/styles/'))
    .pipe(filter('**/*.css'))
    .pipe(livereload({silent:true}))


  watch('app/views/**/*.jade', {watch:false})
    .pipe(plumber())
    .pipe(jade({
      debug:false
    }))
    .pipe(gulp.dest('app/views'))
    .pipe(livereload({silent:true}));


  gulp.src('app/index.html')
    .pipe(watch('app/index.html'))
    .pipe(livereload({silent:true}))

  gulp.run('url');

});

/**********************
 ANGULAR
 ***********************/
require('./gulp/ng/gvl.js');
require('./gulp/ng/css-transitions.js');
require('./gulp/ng/css-animations.js');
require('./gulp/ng/js-animations.js');
