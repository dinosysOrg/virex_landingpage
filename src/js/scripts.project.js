// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};

function activeTab(event, id){
  var i, tabcontent, tablinks, itemId, prevActive;
  tabcontent = $('.section-proj-6__tab-content_item');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  $('.section-proj-6 .active').removeClass('active');
  itemId = '#item' + id;
  $(itemId).css('display', 'block');
  event.target.classList.add('active');
}

$('#defaultOpen').click();

function openGallery(photos) {
  $.fancybox.open(photos,{
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

$('.section-proj-1__button-group__picture').on('click', function() {
  openGallery(project.gallery.picture);
});
$('.section-proj-1__button-group__civil-guide').on('click', function() {
  openGallery(project.gallery.guide);
});
$('.section-proj-1__button-group__position').on('click',function() {
  openGallery(project.gallery.position);
});