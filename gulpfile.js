const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const run = require('gulp-run');
watch = require('gulp-watch');


function tailwind() {
    return run('npm run build').exec();
}

function includeFiles() {
    gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./build'));
}

gulp.task('fileinclude', includeFiles);

gulp.task('tailwind', tailwind)

exports.default = function () {
    // All events will be watched
    watch(['src/*.html', 'src/**/*.html'], includeFiles);
    watch(['css/*.css'], tailwind);
};