/**
 * Created by nzhyrkova on 21.01.2017.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    return gulp.src('src/styles/common.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/styles/common.css'));
});