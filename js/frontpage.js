function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn()
	} else {
		document.addEventListener('DOMContentLoaded', fn)
	}
}

let unique = 0
function jsonP (url) {
	const name = "_jsonp_" + unique++
	url += "&callback=" + name
	
	const script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = url
	
	return new Promise((resolve, reject) => {
		window[name] = function (data) {
			resolve(data)
			document.getElementsByTagName('head')[0].removeChild(script)
			delete window[name]
		}
		document.getElementsByTagName('head')[0].appendChild(script)
	})
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i)
		;[a[i - 1], a[j]] = [a[j], a[i - 1]]
	}
}

const SPACE_ACTIVITIES = [
	'code',
	'hack',
	'program',
	'löt',
	'solder',
	'woodwork',
	'saw',
	'drill',
	'party',
	'discuss',
	'blink',
	'be',
	'SCIENCE!',
	'socialize',
	'create',
	'write',
	'read',
	'plan',
	'print',
	'laser',
	'grow',
	'meet',
	'jam',
	'overengineer',
	'improve',
	'repair',
	'kress',
	'radio',
	'funk',
	'SPAAAAACE',
	'knit',
	'talk',
	'listen',
	'learn',
	'teach',
	'workshop',
	'admin',
	'team up',
	'be exellent',
	'arcade',
	'help',
	'ask',
	'exchange'
]

// pop from a shuffled array, when empty copy all activities and shuffle again

let shuffledActivities = []
const transition = function () {
	const container = document.querySelector('#activities')
	container.children[0].classList.add('transition-out')
	const newActivity = document.createElement('div')
	
	if (shuffledActivities.length === 0) {
		shuffledActivities = SPACE_ACTIVITIES.slice()
		shuffle(shuffledActivities)
	}
	newActivity.textContent = shuffledActivities.pop()
	container.appendChild(newActivity)
	setTimeout(function () {
		container.removeChild(container.children[0])
		transition()
	}, 2000)
}


const setDoorStatus = function () {
	const statusEl = document.querySelector('#status')
	fetch('https://api.shackspace.de/v1/space').then((response) => {
		return response.json()
	}).then((response) => {
		const status = response.doorState.open
		if (status) {
			statusEl.classList.add('open')
		} else {
			statusEl.classList.add('closed')
		}
	})
}

const loadLogImages = function () {
	const container = document.querySelector('#log-container')
	jsonP('https://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4').then((response) => {
		for (const post of response.response.posts) {
			for (const photo of post.photos) {
				for (const size of photo.alt_sizes) {
					if (size.width <= 250) {
						const img = document.createElement('a')
						img.href = post.post_url
						img.classList.add('log-image')
						img.style['background-image'] = `url(${size.url})`
						container.appendChild(img)
						break
					}
				}
			}
		}
	})
		// for post in res.response.posts
			// for photo in post.photos
			// 	$('#log').slick 'slickAdd', "<div class='slide'><div class='img' style='background-image:url(#{photo.original_size.url})'></div></div>"
}

ready(function () {
	transition()
	const hero = document.querySelector('.hero')
	const navbar = document.querySelector('nav.primary')
	navbar.classList.add('hidden')
	window.addEventListener('scroll', function(event) {
		const dim = hero.getBoundingClientRect()
		if (dim.bottom < 0)
			navbar.classList.remove('hidden')
	})
	setDoorStatus()
	loadLogImages()
})
