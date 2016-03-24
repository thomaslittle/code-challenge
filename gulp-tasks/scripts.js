import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';

gulp.task('scripts', function() {
  return browserify({
      extensions: ['.js', '.jsx'],
      entries: './app/scripts/App.js',
  })
  .transform(babelify.configure({
      ignore: /(bower_components)|(node_modules)/
  }))
  .bundle()
  .on("error", function (err) { console.log("Error : " + err.message); })
  .pipe(source('main.js'))
  .pipe(gulp.dest('.tmp/scripts/'));
});
