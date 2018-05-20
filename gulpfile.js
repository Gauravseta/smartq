var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

gulp.task('sass',function(){
    return gulp.src('./app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('useref',function(){
    return gulp.src('./app/index.html')
                .pipe(useref({allowEmpty: true}))
                .pipe(gulp.dest('./dist/'));
});

gulp.task('clean:dist',function(){
    return gulp.src('./dist/')
                .pipe(clean());
});

gulp.task('default',function(){
    runSequence('clean:dist','sass','useref');
})