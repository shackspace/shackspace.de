(function(){var s,e;s=window.matchMedia("(min-width: 992px)"),s.matches&&($("#log").slick({infinite:!0,slidesToShow:4,speed:5e3,slidesToScroll:2,autoplay:!0,autoplaySpeed:0,pauseOnHover:!1,arrows:!1,cssEase:"linear"}),$.getJSON("https://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?",{},function(s){var e,a,o,t,n,i,l,d;for(l=s.response.posts,e=0,o=l.length;o>e;e++)for(i=l[e],d=i.photos,a=0,t=d.length;t>a;a++)n=d[a],$("#log").slick("slickAdd","<div class='slide'><div class='img' style='background-image:url("+n.original_size.url+")'></div></div>");return $("#log").slick("slickPlay")})),e=function(s){var e;switch(e=$("#door-status"),e.removeClass(),e.find("a").append("space is "),s){case"open":return e.addClass("status-open"),e.find("a").append("open");case"closed":return e.addClass("status-closed"),e.find("a").append("closed");default:return e.addClass("status-undefined"),e.find("a").append("broken")}},$.ajax({url:"https://shackspace.de/sopen/text/en",success:function(s){return console.log("the shackspace is ",s),e(s.trim())},error:function(){return e("nope")}})}).call(this);