var gulp = require('gulp');
var concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'), // sourcemaps 호출
    sass = require('gulp-sass'); // sass 호출

var src = 'src';
var dist = 'dist';
var paths = {
    js : src + '/js/**/*.js',
    scss : src + '/sass/**/*.scss',
    css: src + '/css'
};

gulp.task('compile-sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function () {
    gulp.watch(paths.scss, gulp.series('compile-sass'));
})

gulp.task('default', gulp.series('watch', 'compile-sass'));