'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('app/styles/**/*.styl', ['stylus']);
  gulp.watch('app/**/*.jade', ['jade']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  //gulp.watch('app/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
