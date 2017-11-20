const fs = require('fs')
const Hexo = require('hexo')
const hexo = new Hexo(process.cwd(), {});

let mapfile = `map $arg_p $wordpress_hexo_redirect {
	default	"";
`
hexo.init().then(() => hexo.load()).then(() => {
	const posts = hexo.locals.get('posts').data
		.filter((post) => !!post.id)
		.sort((a, b) => parseInt(a.id) - parseInt(b.id))

	for (post of posts) {
		mapfile += `	${post.id}	${post.permalink.substring(21)};\n`
	}
	mapfile += '}'
	fs.writeFileSync('blog-redirect-map.conf', mapfile)
})
