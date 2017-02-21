mq = window.matchMedia '(min-width: 992px)'

if mq.matches

	$('#log').slick
		infinite: true
		slidesToShow: 4
		speed: 5000
		slidesToScroll: 2
		# centerMode: true
		autoplay: true
		autoplaySpeed: 0
		pauseOnHover: false
		arrows: false
		cssEase: 'linear'


	$.getJSON 'https://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?', {}, (res) ->
		# TODO: shuffle
		for post in res.response.posts
			for photo in post.photos
				$('#log').slick 'slickAdd', "<div class='slide'><div class='img' style='background-image:url(#{photo.original_size.url})'></div></div>"
		$('#log').slick 'slickPlay'

setDoorStatus = (status) ->
	$status = $('#door-status')
	$status.removeClass()
	$status.find('a').append('space is ')
	switch status
		when 'open'
			$status.addClass 'status-open'
			$status.find('a').append('open')
		when 'closed'
			$status.addClass 'status-closed'
			$status.find('a').append('closed')
		else
			$status.addClass 'status-undefined'
			$status.find('a').append('broken')

$.ajax
	url: 'https://shackspace.de/sopen/text/en'
	success: (res) ->
		console.log 'the shackspace is ', res
		setDoorStatus res.trim()
	error: ->
		setDoorStatus 'nope'
