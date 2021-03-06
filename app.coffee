axis = require 'axis'
jeet = require 'jeet'
nib = require 'nib'
autoprefixer = require 'autoprefixer-stylus'
rupture = require 'rupture'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

module.exports =
	ignores: ['README.md', 'docs/*', '**/layout.*', '**/_*', 'blog/**', '.gitignore', 'gulpfile.*']

	extensions: [
		js_pipeline(files: ['assets/js/jquery.min.js', 'assets/js/slick.min.js'], out: 'js/vendor.js'),
		js_pipeline(files: ['scripts/*.coffee'], out: 'js/script.js'),
		css_pipeline(files: ['assets/css/*.css'], out: 'css/vendor.css'),
		css_pipeline(files: ['styles/*.styl'], out: 'css/default.css')
	]

	stylus:
		use: [nib(), axis(), rupture(), autoprefixer(), jeet()]
		sourcemap: true

	'coffee-script':
		sourcemap: true

	jade:
		pretty: true
