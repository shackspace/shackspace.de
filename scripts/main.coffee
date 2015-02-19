
$('#log').slick
	infinite: true
	slidesToShow: 4
	speed: 300
	slidesToScroll: 2
	centerMode: true
	autoplay: true
	autoplaySpeed: 1750
	pauseOnHover: false
	arrows: false


$.getJSON 'http://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?', {}, (res) ->
	# TODO: shuffle
	for post in res.response.posts
		for photo in post.photos
			$('#log').slick 'slickAdd', "<div class='slide'><div class='img' style='background-image:url(#{photo.original_size.url})'></div></div>"
	$('#log').slick 'slickPlay'

$.get 'http://shackspace.de/sopen/text/en', {}, (res) ->
	console.log 'the shackspace is ' + res
	$status = $('#door-status')
	$status.removeClass()
	switch res.trim()
		when 'open'
			$status.addClass 'status-open'
		when 'closed'
			$status.addClass 'status-closed'
		when 'no data'
			$status.addClass 'status-undefined'