// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
$(document).ready(function() {
  $('#fullpage').fullpage({
      sectionSelector: '.sec',
      scrollOverflow: true,
      css3: true,
      verticalCentered: false,
      anchors: ['home', 'about', 'vision', 'comment', 'portfolio', 'contact'],
      menu: '#navigation',
      afterLoad: function(anchorLink, index){
        if(index === 1){
          $('.section-1__txt').addClass('fadeInRight')
        }
      }
  });
  $('.section-4__slide').carousel({
    interval: 3000
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


