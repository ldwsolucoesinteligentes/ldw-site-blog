var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './_site'
        }
    });
    gulp.watch(['**/**/*.html', '**/**/**.css', '**/**/**.js']).on('change', reload);
});
