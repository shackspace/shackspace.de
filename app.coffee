axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
jeet = require 'jeet'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

module.exports =
  ignores: ['README.md', '**/docs/*', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', '**/*.php']

  extensions: [
    js_pipeline(files: ['assets/js/*.js', 'scripts/*.coffee']),
    css_pipeline(files: ['assets/css/*.css', 'styles/*.styl'])
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer(), jeet()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
