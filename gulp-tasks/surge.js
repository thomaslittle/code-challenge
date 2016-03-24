import gulp from 'gulp';
var surge = require('gulp-surge')

gulp.task('deploy', [], function () {
  return surge({
    project: 'dist',
    domain: 'thomaslittle-ally.surge.sh'
  })
})