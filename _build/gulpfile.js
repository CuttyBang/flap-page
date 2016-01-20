var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var gulpsync = require('gulp-sync')(gulp);

var dirs = {
  theme:'../',
  assets:'assets/',
  css:'css/',
  js:'js/',
  img:'img/',
  scss:'./scss/'
};

//jshint
gulp.task('jshint', function() {
  return gulp.src(dirs.theme + dirs.assets +  dirs.js + '*.js')
  .pipe(jshint())
  .pipe(jshint.reporter());
});

//sass
gulp.task('sass', function(){
  return gulp.src(dirs.scss + '*.scss')
  .pipe(sass())
  .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.css));
});

//watch
gulp.task('watch', function(){
  gulp.watch('./' +  dirs.js + '*.js', ['jshint','scripts'])
  gulp.watch(dirs.scss + '*.scss', gulpsync.sync(['sass','styles']));
});

gulp.task('scripts', function() {
  return browserify('./' + dirs.js + 'main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.js));
});

gulp.task('styles', function() {
  return gulp.src(dirs.theme + dirs.assets +  dirs.css + 'main.css')
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.css));
});

gulp.task('images', function() {
  return gulp.src(dirs.theme + dirs.assets +  dirs.img + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(dirs.theme + dirs.assets +  dirs.img));
});

gulp.task('default', ['jshint', 'sass', 'watch']);

gulp.task('build', ['jshint', 'sass', 'scripts', 'styles']);