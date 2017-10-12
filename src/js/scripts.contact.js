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