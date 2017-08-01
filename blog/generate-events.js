const Hexo = require('hexo')
const request = require('request')
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(() => {
	request('https://events.shackspace.de/c/webdevs/json', (error, response, body) => {
		if (error)
			return console.error(error)
		const events = JSON.parse(body).items
		for (const event of events) {
			const slug = event.link.replace('http://events.shackspace.de/c/webdevs/', '').slice(0, -1)
			hexo.post.create({
				path: `events/${slug}`,
				layout: 'event',
				title: event.title,
				content: event.description,
				slug,
				date: event.pubdate,
				event_start: event.start_datetime,
				event_end: event.end_datetime,
				event_link: event.link
			}, true)
		}
	})	
})
