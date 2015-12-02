const gulp = require('gulp');
const jsonminify = require('gulp-jsonminify');

gulp.task('build', function() {
    return gulp.src('normalize.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['build']);