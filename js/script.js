(function(){var s,a;s=window.matchMedia("(min-width: 992px)"),s.matches&&($("#log").slick({infinite:!0,slidesToShow:4,speed:5e3,slidesToScroll:2,autoplay:!0,autoplaySpeed:0,pauseOnHover:!1,arrows:!1,cssEase:"linear"}),$.getJSON("https://api.tumblr.com/v2/blog/log.shackspace.de/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?",{},function(s){var a,e,t,o,i,l,n,d;for(n=s.response.posts,a=0,t=n.length;t>a;a++)for(l=n[a],d=l.photos,e=0,o=d.length;o>e;e++)i=d[e],$("#log").slick("slickAdd","<div class='slide'><div class='img' style='background-image:url("+i.original_size.url+")'></div></div>");return $("#log").slick("slickPlay")})),a=function(s){var a;switch(a=$("#door-status"),a.removeClass(),a.find("a").append("space is "),s){case!0:return a.addClass("status-open"),a.find("a").append("open");case!1:return a.addClass("status-closed"),a.find("a").append("closed");default:return a.addClass("status-undefined"),a.find("a").append("broken")}},$.ajax({dataType:"json",url:"https://api.shackspace.de/v1/space",success:function(s){return a(s.doorState.open)},error:function(){return a(null)}})}).call(this);