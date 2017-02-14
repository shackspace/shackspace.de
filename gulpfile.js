(function() {
  var ghPages, gulp;

  gulp = require('gulp');

  ghPages = require('gulp-gh-pages');

  gulp.task('publish', function() {
    return gulp.src('./public/**/*').pipe(ghPages());
  });

}).call(this);

 //# sourceMappingURL=gulpfile.js.map