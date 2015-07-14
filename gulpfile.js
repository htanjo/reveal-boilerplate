'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.']
    },
    ui: false
  });
  gulp.watch([
    'index.html',
    'slides/*',
    'css/*'
  ])
  .on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
