'use-strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');
    pug = require('gulp-pug');

//server
gulp.task('server', function() {
    connect.server({
      root: 'app',
      port: 8888,
      livereload: true
    });
});

//html
gulp.task('html', function() {
  gulp.src('./app/*.html')
  .pipe(connect.reload());
});

//less
gulp.task('sass', function() {
    gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});


gulp.task('pug', function(){
    gulp.src('./app/pug/*.pug')
        .pipe(pug({
            pretty: true
        })).on("error", console.log)
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});


//watch
gulp.task('watch', function() {
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/pug/*.pug', ['pug']);
    gulp.watch('./app/pug/inc/*.pug', ['pug']);
    gulp.watch('./app/pug/mixins/*.pug', ['pug']);
});

//default
gulp.task('default', ['server', 'html', 'sass', 'watch']);
