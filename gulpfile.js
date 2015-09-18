'use strict';
var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorhandler = require('errorhandler'),
	path = require('path');
var _ = require('underscore');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var rename = require("gulp-rename");
var filter = require('gulp-filter');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var Notification = require('node-notifier');
var notify = require("gulp-notify");
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');
var sendgrid = require('sendgrid')('remax14', 'R1eKefo9ApTh');
var open = require("gulp-open");
var cssmin = require('gulp-cssmin');
var EXPRESS_PORT = 3000;
var EXPRESS_ROOT = __dirname;
function startExpress() {
	var express = require('express');
	var app = express();
	var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, '/app'));
	var engines = require('consolidate');
	app.set('view engine', jade);
	app.engine('haml', engines.haml);
	app.engine('html', engines.hogan);
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(methodOverride());
	app.use(express.static(path.join(__dirname, '/app')));
	app.get('*', function (req, res) {
		res.render('index');
	});
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
		messageBody += '\r\n';
		messageBody += sendEmail.body;
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
	});
	app.listen(EXPRESS_PORT);
}
gulp.task('scripts', function () {
	gulp.src('app/scripts/directives/sv-contact-us-form.js')
		.pipe(gulp.dest('app/scripts/directives'))
});
gulp.task('css', function () {
	gulp.src('app/styles/main.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/styles'));
});
gulp.task('nib', function () {
	gulp.src('app/styles/nib.styl')
		.pipe(stylus({use: [nib()]}))
		.pipe(gulp.dest('app/styles/nib'));
});
gulp.task('stylus', function () {
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
		.pipe(plumber({errorHandler: onError}))
		.pipe(stylus({
			use: [nib()],
			compress: true
		}))
		.pipe(gulp.dest('app/styles/'))
		.pipe(filter('**/*.css'))
		.pipe(reload({stream: true}))
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
		.pipe(reload({stream: true}))
});
gulp.task('html', function () {
	gulp.src('app/index.html')
		//compiler does not stop on error
		.pipe(gulp.dest('app/'))
});
gulp.task("url", function () {
	var options = {
		url: "http://localhost:3001",
		app: "chrome"
	};
	gulp.src("app/index.html")
		.pipe(open("", options));
});
gulp.task('nodemon', function () {
	startExpress();
});
gulp.task('js-watch', browserSync.reload);
gulp.task('serve-dev', function () {
	var onError = function (err) {
		notify.onError({
			title: "Gulp",
			subtitle: "Failure!",
			message: "Error: <%= error.message %>",
			sound: "Beep"
		})(err);
		this.emit('end');
	};
	gulp.watch('app/styles/**/*.styl',['stylus']);
	gulp.watch('app/views/**/*.jade', ['jade']);
	gulp.watch('app/scripts/**/*.js').on('change', browserSync.reload);
	gulp.watch("app/*.html").on('change', browserSync.reload);
	browserSync.init({
		server: "./app",
		notify: false
	});
	//gulp.run('url');
});
/**********************
 ANGULAR
 ***********************/
require('./gulp/ng/gvl.js');
require('./gulp/ng/css-transitions.js');
require('./gulp/ng/css-animations.js');
require('./gulp/ng/js-animations.js');
