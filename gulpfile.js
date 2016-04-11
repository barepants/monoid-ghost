var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');


gulp.task('sass', function () {
  return sass('assets/scss/style.scss', {style: 'compressed', sourcemap: true})
    .pipe(autoprefixer({remove: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
