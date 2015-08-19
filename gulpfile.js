var gulp = require("gulp"),
    run = require("gulp-run"),
    exec = require("gulp-exec");
	
var project = {
	target: 'Debug',
	platform: 'anycpu',
	output: 'bin/Debug'
};
	
gulp.task('default', ['build']);

gulp.task('build', function () {

var options = {
  continueOnError: false, // default = false, true means don't emit error event 
  pipeStdout: false, // default = false, true means stdout is written to file.contents
};
var reportOptions = {
  err: true, // default = true, false means don't write err 
  stderr: true, // default = true, false means don't write stderr 
  stdout: true // default = true, false means don't write stdout 
}
  gulp.src('./**/project.json')
  			 .pipe(run('dnu build <%= file.path %> --quiet'));
  			 // .pipe(exec('dnu build <%= file.path %> --quiet', options))
  			 // .pipe(exec.reporter(reportOptions));
});

gulp.task('test', function() {

var options = {
  continueOnError: false, // default = false, true means don't emit error event 
  pipeStdout: false, // default = false, true means stdout is written to file.contents
};
var reportOptions = {
  err: true, // default = true, false means don't write err 
  stderr: true, // default = true, false means don't write stderr 
  stdout: true // default = true, false means don't write stdout 
}
  gulp.src('./**.tests/project.json')
  			 .pipe(run('dnx <%= file.path %> test'));
             // .pipe(exec('dnx <%= file.path %> test', options))
  			     // .pipe(exec.reporter(reportOptions));
});

gulp.task('watch', function() {
  gulp.watch('./**/*.cs', ['test']);
});