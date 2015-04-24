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
      var photo, post, _i, _j, _len, _len1, _ref, _ref1;
      _ref = res.response.posts;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        _ref1 = post.photos;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          photo = _ref1[_j];
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
    switch (status) {
      case 'open':
        return $status.addClass('status-open');
      case 'closed':
        return $status.addClass('status-closed');
      default:
        return $status.addClass('status-undefined');
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