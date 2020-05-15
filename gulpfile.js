const gulp = require("gulp");
const html = require("./gulp/tasks/html");
const styles = require("./gulp/tasks/styles");
const scripts = require("./gulp/tasks/scripts");
const fonts = require("./gulp/tasks/fonts");
const serve = require("./gulp/tasks/server");
const imageMinify = require("./gulp/tasks/image");

const dev = gulp.parallel(html, styles, scripts, fonts, imageMinify);

const build = gulp.series(dev);

module.exports.start = gulp.series(build, serve);
module.exports.build = build;