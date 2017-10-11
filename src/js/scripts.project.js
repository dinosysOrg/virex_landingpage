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

function activeTab(event, id){
  // var i, tabcontent, tablinks, itemId;
  // tabcontent = $('.section-proj-6__tab-content_item');
  // for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  // }
  // tablinks = $('.tablinks');
  // for (i = 0; i < tablinks.length; j++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }
  // itemId = '#item' + id;
  // $(itemId).style.display = "block";
  // evt.currentTarget.className += " active";
  // alert('aaa');
  console.log(event);
  console.log(id);
}