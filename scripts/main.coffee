
$('#log').slick
	infinite: true
	slidesToShow: 3
	speed: 300
	# slidesToScroll: 1
	centerMode: true
	dots: true
	# autoplay: true
	# autoplaySpeed: 200
	# variableWidth: true

console.log 'hello there!'

$.get 'http://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4', {}, (res) ->
	for post in res.response.posts
		for photo in post.photos
			$('#log').slick 'slickAdd', "<div><img class='tumblr-photo' src='#{photo.original_size.url}'></div>"