var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var shell = require('gulp-shell');
var browserSync = require('browser-sync');


// watch for file changes and rebuild
function watch(){
    gulp.watch('src/***.ts', ["build"]);
}

gulp.task('serve', ['build'], function (done) {
    browserSync({
    online: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
})

gulp.task('watch',['serve'], watch)

gulp.task("default",["build"], function () {

});

gulp.task('build', shell.task([
  'tsc'
]));


