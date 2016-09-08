var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('console', function () {
	console.log(" abc !! ");
});

gulp.task('convert', function () {
	gulp.src('src/app/scss/*').
	pipe(sass()).
	pipe(gulp.dest('src/app/css'));
});
