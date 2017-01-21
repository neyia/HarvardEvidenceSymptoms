/**
 * Created by nzhyrkova on 21.01.2017.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'),
    processhtml = require('gulp-processhtml'),
    less = require('gulp-less'),
    path = require('path');

/* HTML */
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('build/'));
});
/* JavaScript */
gulp.task('js', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('build/scripts/'));
});
/* Styles */
gulp.task('less', function () {
    return gulp.src('src/styles/common.less')
        .pipe(less({
            paths: [ path.join('src/styles', 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/styles'));
});
