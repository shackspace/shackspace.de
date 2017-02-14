(function() {
  var mq, setDoorStatus;

  mq = window.matchMedia('(min-width: 992px)');

  if (mq.matches) {
    $('#log').slick({
      infinite: true,
      slidesToShow: 4,
      speed: 5000,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: false,
      arrows: false,
      cssEase: 'linear'
    });
    $.getJSON('http://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?', {}, function(res) {
      var i, j, len, len1, photo, post, ref, ref1;
      ref = res.response.posts;
      for (i = 0, len = ref.length; i < len; i++) {
        post = ref[i];
        ref1 = post.photos;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          photo = ref1[j];
          $('#log').slick('slickAdd', "<div class='slide'><div class='img' style='background-image:url(" + photo.original_size.url + ")'></div></div>");
        }
      }
      return $('#log').slick('slickPlay');
    });
  }

  setDoorStatus = function(status) {
    var $status;
    $status = $('#door-status');
    $status.removeClass();
    $status.find('a').append('space is ');
    switch (status) {
      case 'open':
        $status.addClass('status-open');
        return $status.find('a').append('open');
      case 'closed':
        $status.addClass('status-closed');
        return $status.find('a').append('closed');
      default:
        $status.addClass('status-undefined');
        return $status.find('a').append('broken');
    }
  };

  $.ajax({
    url: 'http://shackspace.de/sopen/text/en',
    success: function(res) {
      console.log('the shackspace is ', res);
      return setDoorStatus(res.trim());
    },
    error: function() {
      return setDoorStatus('nope');
    }
  });

}).call(this);

 //# sourceMappingURL=main.js.map