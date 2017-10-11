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
      navigation: true,
      navigationPosition: 'right',
      // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      // menu: '#menu',
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


