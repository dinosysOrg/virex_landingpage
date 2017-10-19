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

var defaultItemShow;
var defaultItemShowHeight;

function activeTab(event, id){
  var i, tabcontent, tablinks, itemId, prevActive;
  tabcontent = $('.section-foreign-4__tab-content__item');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  $('.section-foreign-4 .active').removeClass('active');
  itemId = '#item' + id;
  $(itemId).css('display', 'block');
  event.target.classList.add('active');

  defaultItemShow = $('#defaultItemShow');
  if (defaultItemShow[0].scrollHeight > 0) {
    defaultItemShowHeight = defaultItemShow[0].scrollHeight + 150;
    defaultItemShow.css( 'max-height', defaultItemShowHeight + 'px');
    defaultItemShow.prev().addClass('active');
  }
}

$('#defaultOpen').click();

var acc = $('.section-foreign-4__arcordion__link').on('click', function() {
  $('.section-foreign-4 .active').removeClass('active');
  $('.section-foreign-4__arcordion__item').css('max-height', '0px');
  var panel = $(this).next();
  if (panel.css('max-height') === '0px') {
    $(this).addClass('active');
    var height = panel[0].scrollHeight + 150;
    panel.css('max-height', height + 'px');
  } else {
    panel.css('max-height', '0px');
  }
});

var defaultShow = $('#defaultShow');
var defaultShowHeight = defaultShow[0].scrollHeight + 150;
defaultShow.css( 'max-height', defaultShowHeight + 'px');
defaultShow.prev().addClass('active');

var accItem = $('.section-foreign-4__item__arcordion__link').on('click', function() {
  $('.section-foreign-4__item__arcordion__link.active').removeClass('active');
  $('.section-foreign-4__item__arcordion__item').css('max-height', '0px');
  var panel = $(this).next();
  if (panel.css('max-height') === '0px') {
    $(this).addClass('active');
    var height = panel[0].scrollHeight + 150;
    panel.css('max-height', height + 'px');
  } else {
    panel.css('max-height', '0px');
  }
});