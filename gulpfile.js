var gulp = require("gulp"),
    run = require("gulp-run");
	
var project = {
	target: 'Debug',
	platform: 'anycpu',
	output: 'bin/Debug'
};
	
gulp.task('default', ['build']);

gulp.task('build', function () {
  gulp.src('./**/project.json')
  			 .pipe(run('dnu build <%= file.path %> --quiet'));
});

gulp.task('test', function() {
  gulp.src('./**.tests/project.json')
  			 .pipe(run('dnx <%= file.path %> test'));
});

gulp.task('watch', function() {
  gulp.watch('./**/*.cs', ['test']);
});