'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('sass', function () {
    return gulp.src('src/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});
gulp.task('scripts', function () {
    gulp.src([
        'src/plugins/AdminLTE-2.4.2/bower_components/jquery/dist/jquery.min.js',
        'src/plugins/AdminLTE-2.4.2/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'src/plugins/AdminLTE-2.4.2/dist/js/adminlte.js',
    ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

gulp.task('build', ['sass', 'scripts']);