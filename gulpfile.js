/**
 * Created by nzhyrkova on 21.01.2017.
 */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
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
    host: 'localhost',
    port: 8040,
    open: true,
    notify: false,
    injectChanges: true,
    logPrefix: "App Evidence"
};
gulp.task('webserver', function () {
    browserSync(config);
});
/* HTML */
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});
/* Fonts */
gulp.task('fonts', function () {
    return gulp.src('src/fonts/*.ttf')
        .pipe(gulp.dest('build/fonts/'))
        .pipe(gulp.dest('build/fonts/')).pipe(reload({stream: true}));
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
            paths: [path.join('src/styles', 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/styles'))
        .pipe(reload({stream: true}));
});

/* BrowserSync local web server*/
gulp.task('watch',['webserver'], function () {
    watch('src/*.html', function(event, cb) {
        gulp.start('html');
    });
    watch(['src/fonts/*.ttf'], function(event, cb) {
        gulp.start('fonts');
    });
    watch(['src/scripts/*.js'], function(event, cb) {
        gulp.start('js');
    });
    watch(['src/styles/*.less'], function(event, cb) {
        gulp.start('less');
    });
});
/* Default */
gulp.task('default', ['watch'], function() {});