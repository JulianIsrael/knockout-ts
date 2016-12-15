var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var shell = require('gulp-shell');


// watch for file changes and rebuild
function watch(){
    gulp.watch('src/***.ts', ["build"]);
}

gulp.task('watch',['build'], watch)

gulp.task("default",["build"], function () {

});

gulp.task('build', shell.task([
  'tsc'
]));


