'use strict';

const gulp = require('gulp');
const reactEasy = require('gulp-react-easy');

gulp.task('watch', ['jsx', 'watch']);
gulp.task('watch', () => {
  gulp.watch('./src/js/**/*', ['jsx']);
});
gulp.task('jsx', () => {
  return reactEasy({
    'file': './src/js/app.jsx',
    'debug': true
  })
  .to('app.js')
  .pipe(gulp.dest('./public/static/js'));
});