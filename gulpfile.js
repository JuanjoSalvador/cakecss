const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('development', () => { 
    gulp.src('src/cake.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/dist/cake.css'))
})

gulp.task('production', () => { 
    gulp.src('src/cake.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/dist/cake.min.css'))
})

gulp.task('default', ['development', 'production'], () => {})