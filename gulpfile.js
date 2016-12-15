var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");


// compile ts files into js and move them to built folder
function build(){
     return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("built"));
}

// watch for file changes and rebuild
function watch(){
    gulp.watch('src/***.ts', [build]);
}



gulp.task("build", build);
gulp.task('watch',['build'], watch)

gulp.task("default",["build"], function () {

});



