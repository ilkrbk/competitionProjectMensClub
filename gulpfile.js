'use strict';

var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify-es').default,
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    browserSync = require('browser-sync'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug');

gulp.task('sass', function() {
    return gulp.src('src/assets/main.sass')
    .pipe(gulpSass())
    .pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('html', function() {
    return gulp.src('src/layout/*.pug')
    .pipe(pug({
        pretty: '\t'
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
    .pipe(rigger())
    .pipe(uglify())
    .pipe(babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist'
        },
        notify: false
    })
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/**/*.pug', ['html']);
    gulp.watch('dist/*.html', browserSync.reload);
});