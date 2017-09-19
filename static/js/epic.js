window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = "socialWrap";
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));

twttr.ready(
  function (twttr) {
    document.getElementById("socialWrap").style.display = "block";
  }
);

var fapeye=function(e,f,t,y,a){$(".em").append("<div id='eye"+e+"'><div id='ball"+e+"'></div></div>"),c="#ball"+e,eyec="#eye"+e,$(eyec).css({left:f,top:t}),$(c).css({width:.4*y,height:.4*y}),$(eyec).css({width:y,height:y}),$(c).css({position:"relative",background:"#ffffff",width:a}),$(eyec).css({position:"absolute",overflow:"hidden","border-radius":"50%"});var i=$(c).width()/2,o={x:$(eyec).width()/2-i,y:$(eyec).height()/2-i},s=$(eyec).width()/2-i,n=o.x,p=o.y;$(window).mousemove(function(e){var f={x:e.pageX-i-$(eyec).offset().left-o.x,y:e.pageY-i-$(eyec).offset().top-o.y},t=Math.sqrt(f.x*f.x+f.y*f.y);s>t?(n=e.pageX-$(eyec).offset().left-i,p=e.pageY-$(eyec).offset().top-i):(n=f.x/t*s+o.x,p=f.y/t*s+o.y)});{var c=$(c),d=o.x,w=o.y;setInterval(function(){d+=(n-d)/1,w+=(p-w)/1,c.css({left:d,top:w})},1)}};new fapeye(1,75,62,15,2),new fapeye(2,110,62,15,2),new fapeye(3,64,82,15,2),new fapeye(4,95,85,15,3),new fapeye(5,125,82,15,2),new fapeye(6,45,100,12,2),new fapeye(7,70,115,12,3),new fapeye(8,120,115,12,3),new fapeye(9,145,102,12,2);

$(document).ready(function () {
  $('.tooltip').fadeIn('slow');

  $('.card-pic').each(function () {
    $(this).click(function () {
      window.location = $(this).data('href');
      return;
    });
  });
});