
const gulp = require('gulp');

const imageMinify = require('./image');
const svgSprite = require('./svgSprite');
const styles = require('./styles');
const html = require('./html');
const script = require('./scripts');
const fonts = require('./fonts');

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/images/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload)
    gulp.watch('src/images/sprite/*.svg', gulp.series(svgSprite)).on('change', server.reload)
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
    gulp.watch('src/*.html', gulp.series(html))
    gulp.watch('src/fonts/*', gulp.series(fonts))
    gulp.watch('build/*.html').on('change', server.reload)

    return cb()
}
