let gulp      = require('gulp'),
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('scss', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
});
gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch'));
