const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('css', function () {
    return gulp.src('./public/sass/*.scss')
      .pipe(sass())
      .pipe(postcss([
        autoprefixer({
          browsers: ['last 3 versions']
        })
      ]))
      .pipe(gulp.dest('./public/css'));
  }
);

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.scss', gulp.series('css'));
});

gulp.task('default', gulp.series('css', 'watch'));
