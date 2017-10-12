// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
$(document).ready(function() {
  $('.multiple-snap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $('#fullpage').fullpage({
      anchors: ['home', 'about', 'vision', 'comment', 'portfolio','flow', 'contact'],
      sectionSelector: '.sec',
      scrollOverflow: true,
      css3: true,
      verticalCentered: false,
      menu: '#navigation',
      afterRender: function(){
      },
      afterLoad: function(anchorLink, index){
        if(index === 1){
          $('.section-1__txt').addClass('fadeInRight animated')
        }
        if(index === 2){
          $('.section-2__box').addClass('fadeInLeft animated')
        }
      },
      onLeave: function(index, nextIndex, direction){
        if(nextIndex !== 1){
          $('.section-1__txt').removeClass('fadeInRight animated')
        }
        if(nextIndex !== 2){
          $('.section-2__box').removeClass('fadeInLeft animated')
        }
      },
  });
  $('.section-4__slide').carousel({
    interval: 4000
  })

});
