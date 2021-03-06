axis = require 'axis'
nib = require 'nib'
jeet = require 'jeet'
autoprefixer = require 'autoprefixer-stylus'
rupture = require 'rupture'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

module.exports =
	ignores: ['README.md', 'docs/*', '**/layout.*', '**/_*', 'blog/**', '.gitignore', 'gulpfile.*']
	
	extensions: [
		js_pipeline(files: ['assets/js/jquery.min.js', 'assets/js/slick.min.js'], out: 'js/vendor.js', minify: true),
		js_pipeline(files: ['scripts/*.coffee'], out: 'js/script.js', minify: true),
		css_pipeline(files: ['assets/css/*.css'], out: 'css/vendor.css', minify: true),
		css_pipeline(files: ['styles/*.styl'], out: 'css/default.css', minify: true)
	]

	stylus:
		use: [nib(), axis(), rupture(), autoprefixer(), jeet()]
