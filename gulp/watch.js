'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/styles/**/*.styl', ['stylus']);
  gulp.watch('app/**/*.jade', ['jade']);
  //gulp.watch('bower.json', ['wiredep']);
});
