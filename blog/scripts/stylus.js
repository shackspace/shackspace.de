const stylus = require('stylus')
const nib = require('nib')
const autoprefixer = require('autoprefixer-stylus')
const axis = require('axis')
const rupture = require('rupture')

const renderer = function (data, options, callback) {
	stylus(data.text)
		.import(nib())
		.import(autoprefixer())
		.use(axis())
		.use(rupture())
		.set('filename', data.path)
		.render(callback)
}

hexo.extend.renderer.register('styl', 'css', renderer)
