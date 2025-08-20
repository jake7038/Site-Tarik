var gulp = require('gulp');
const less = require('gulp-less');
const path = require('path')
const imagemin = require('gulp-imagemin');


function comprimirimagem(){
    return gulp.src('./img/mensagens-de-zap/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/mensagens-de-zap'));
}

function compilarLess() {
    return gulp.src('./main.less')
    .pipe(less()) 
    .pipe(gulp.dest('./')); 
}

function watchLess() {
  gulp.watch('./main.less', compilarLess); // observa mudanças e recompila
}

exports.comprimirimagem = comprimirimagem;
exports.default = watchLess;