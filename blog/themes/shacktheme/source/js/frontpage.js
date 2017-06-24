function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn()
	} else {
		document.addEventListener('DOMContentLoaded', fn)
	}
}

const SPACE_ACTIVITIES = [
	'code',
	'hack',
	'löt',
	'holz',
	'party',
	'discuss'
]

let activityCounter = 0

const transition = function () {
	const container = document.querySelector('#activities')
	container.children[0].classList.add('transition-out')
	const newActivity = document.createElement('div')
	activityCounter++
	if (activityCounter >= SPACE_ACTIVITIES.length) activityCounter = 0
	newActivity.textContent = SPACE_ACTIVITIES[activityCounter]
	container.appendChild(newActivity)
	setTimeout(function () {
		container.removeChild(container.children[0])
		transition()
	}, 2000)
}

ready(function () {
	transition()
})
