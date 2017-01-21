/**
 * Created by nzhyrkova on 21.01.2017.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'),
    processhtml = require('gulp-processhtml'),
    less = require('gulp-less'),
    path = require('path'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    watch = require('gulp-watch');

var config = {
    server: {
        baseDir: "build"
    },
    tunnel: true,
    host: 'evidence',
    port: 9999,
    injectChanges: true,
    logPrefix: "App Evidence"
};

/* HTML */
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});
/* JavaScript */
gulp.task('js', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('build/scripts/'))
        .pipe(gulp.dest('build/scripts/')).pipe(reload({stream: true}));
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
        .pipe(gulp.dest('build/styles'))
        .pipe(reload({stream: true}));
});

/* BrowserSync local web server*/
gulp.task('browser-sync', function () {
    browserSync(config);
});
gulp.task('watch', function () {
    gulp.watch('src/*.html',['html']);
    gulp.watch('src/styles/*',['less']);
});
gulp.task('default', ['js', 'html', 'less', 'browser-sync', 'watch']);