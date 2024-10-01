var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var pkg = require("./package.json");

gulp.task("copy", function () {
  gulp
    .src([
      "node_modules/bootstrap/dist/**/*",
      "!**/npm.js",
      "!**/bootstrap-theme.*",
      "!**/*.map",
    ])
    .pipe(gulp.dest("vendor/bootstrap"));

  gulp
    .src([
      "node_modules/jquery/dist/jquery.js",
      "node_modules/jquery/dist/jquery.min.js",
    ])
    .pipe(gulp.dest("vendor/jquery"));

  gulp
    .src(["node_modules/tether/dist/js/*.js"])
    .pipe(gulp.dest("vendor/tether"));
});

gulp.task("default", ["copy"]);

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "",
    },
  });
});

gulp.task("dev", ["browserSync"], function () {
  gulp.watch("css/*.css", browserSync.reload);
  gulp.watch("*.html", browserSync.reload);
});
