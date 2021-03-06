// Google Analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'UA-107982810-1', 'auto');
  ga('send', 'pageview');
// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData(form) {
  var elements = document.getElementById(form).elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  return data;
}

function handleFormSubmitModal(event) {  // handles form submit withtout any jquery
  var form = 'gformModal';
  event.preventDefault();           // we are submitting via xhr below
  var dataModal = getFormData(form);         // get the values submitted in the form

  if( !validEmail(dataModal.Email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        document.getElementById('gformModal').style.display = 'none'; // hide form
        document.getElementById('thankyou_message_modal').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encodedModal = Object.keys(dataModal).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(dataModal[k])
    }).join('&')
    xhr.send(encodedModal);
  }
}

function loaded() {
  // bind to the submit event of our form
  // var form = document.getElementById('gform');
  var form1 = document.getElementById('gformModal');
  form1.addEventListener("submit", handleFormSubmitModal, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);



function activeTab(event, id){
  var i, tabcontent, tablinks, itemId, prevActive;
  tabcontent = $('.section-proj-6__tab-content__item');
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
  openGallery(photos.picture);
});
$('.section-proj-1__button-group__civil-guide').on('click', function() {
  openGallery(photos.guide);
});
$('.section-proj-1__button-group__position').on('click',function() {
  openGallery(photos.position);
});

var acc = $('.section-proj-6__arcordion__link').on('click', function() {
  $('.section-proj-6 .active').removeClass('active');
  $('.section-proj-6__arcordion__item').css('max-height', '0px');
  $(this).addClass('active');
  var panel = $(this).next();
  if (panel.css('max-height') === '0px') {
    panel.css('max-height', panel[0].scrollHeight + 'px');
  } else {
    panel.css('max-height', '0px');
  }
});

var defaultShow = $('#defaultShow');
defaultShow.css( 'max-height', defaultShow[0].scrollHeight + 'px');
defaultShow.prev().addClass('active');