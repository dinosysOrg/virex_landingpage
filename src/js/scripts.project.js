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

photos = [ {href : 'https://via.placeholder.com/960x480', title : 'Title'}, {href : 'https://via.placeholder.com/960x480', title : 'Title'}, {href : 'https://via.placeholder.com/960x480', title : 'Title'}, {href : 'https://via.placeholder.com/960x480', title : 'Title'}, {href : 'https://via.placeholder.com/960x480', title : 'Title'} ]

function activeTab(event, id){
  var i, tabcontent, tablinks, itemId, prevActive;
  tabcontent = $('.section-proj-6__tab-content_item');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  $('.active').removeClass('active');
  itemId = '#item' + id;
  $(itemId).css('display', 'block');
  event.target.classList.add('active');
}

$('#defaultOpen').click();
function openGallery(photos) {
  var data = JSON.parse(photos)
  $.fancybox.open(data,{
      thumbs : {
        autoStart : true
      },
      scrollOutside: true,
    });
}

$('.more').click(function(){
  var moreBlock = $('.section-proj-4__detail__content__more');
  if (moreBlock.css('display') === 'none') {
    $(this).html('ẩn nội dung');
    moreBlock.css('display', 'inline');
  } else {
    $(this).html('xem thêm');
    moreBlock.css('display', 'none');
  }
});