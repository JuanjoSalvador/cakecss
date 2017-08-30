var gulp   = require('gulp');

var sass   = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./src/cake.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(gulp.dest('./build/dist'));
});

//gulp.task('default', ['sass']);