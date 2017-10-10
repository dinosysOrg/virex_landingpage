// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
// smooth on scroll
$("body").niceScroll({
  cursorcolor:		"#888",
  cursorwidth: 		"7px",
  cursorborder: 		"0px solid #000",
  scrollspeed: 		70,
  background: 		'#ddd',
  cursorminheight: 	20,
  enablekeyboard: 	true,
  horizrailenabled: 	true,
  autohidemode: 		false,
  bouncescroll: 		false,
  smoothscroll: 		true,
  iframeautoresize: 	true,
  touchbehavior: 		false,
  zindex: 999
});
// animation 
AOS.init({
  offset: 200,
  // once: true,
});
// scroll spy
$('body').scrollspy({ target: '#navigation' })
// smooth on link
$(".smooth-scroll").on('click', function(event) {
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 700, function() {
    window.location.hash = hash;
  });
});
$('.section-4__slide').carousel({
  interval: 3000
})

