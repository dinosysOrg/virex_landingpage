// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors: ['home', 'about', 'vision', 'comment', 'portfolio','flow', 'contact'],
      sectionSelector: '.sec',
      scrollOverflow: true,
      css3: true,
      verticalCentered: false,
      menu: '#navigation',
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
// scroll spy
// $('body').scrollspy({ target: '#navigation' })
// smooth on link
// $(".smooth-scroll").on('click', function(event) {
//   event.preventDefault();
//   var hash = this.hash;
//   $('html, body').animate({
//     scrollTop: $(hash).offset().top
//   }, 700, function() {
//     window.location.hash = hash;
//   });
// });


