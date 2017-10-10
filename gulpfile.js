var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');
var minifycss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});
gulp.task('pug', function () {
  return gulp.src([
      '!./src/views/layouts/*.pug',
      '!./src/views/**/_*.pug',
      './src/views/home/*.pug',
      './src/views/project/*.pug',
    ])
    .pipe(pug({
    }))
    .pipe(gulp.dest('./public'));
});
gulp.task('sass', function () {
    return gulp.src([
            './src/styles/bootstrap.scss',
            './src/styles/jquery.fancybox.scss',
            './src/styles/styles.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
});
gulp.task('js', function () {
    return gulp.src ([
            './src/js/jquery-3.2.1.min.js',
            './src/js/jquery.nicescroll.js',
            './src/js/aos.js',
            './src/js/popper.min.js',
            './src/js/bootstrap.js',
            './src/js/jquery.fancybox.js',
            './src/js/scripts.js',
        ])
        .pipe(concat('app.mins.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
gulp.task('jsproject', function () {
    return gulp.src ([
            './src/js/jquery-3.2.1.min.js',
            './src/js/jquery.nicescroll.js',
            './src/js/popper.min.js',
            './src/js/bootstrap.js',
            './src/js/jquery.fancybox.js',
            './src/js/scripts.project.js',
        ])
        .pipe(concat('app.project.mins.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
gulp.task('img', function () {
    return gulp.src ('./src/assets/images/*.+(jpg|jpeg|gif|png)')
        .pipe(gulp.dest('./public/images'));
});
gulp.task('watch', function(){
    gulp.watch('./src/data/data.pug',['pug'])
    gulp.watch('./src/styles/*.scss',['sass'])
    gulp.watch('./src/styles/_*.scss',['sass'])
    gulp.watch('./src/views/**/*.pug',['pug'])
    gulp.watch('./src/views/**/_**.pug',['pug'])
    gulp.watch('./src/js/*.js', ['js', 'jsproject'])
    gulp.watch('./public/js/*.js').on('change', reload)
    gulp.watch('./public/*.html').on('change', reload)
});

gulp.task('default', ['watch', 'browser-sync', 'sass', 'pug', 'js', 'jsproject', 'img']);