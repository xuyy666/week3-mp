var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            proxies: [{
                source: '/users/api/get/train_tickets',
                target: 'http://localhost:3000/users/api/get/train_tickets'
            }]
        }))
});



gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
});

gulp.task('dev', gulp.series('sass', 'server', 'watch'));