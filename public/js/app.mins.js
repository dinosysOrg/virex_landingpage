<<<<<<< HEAD

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
  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  var form = 'gform';
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData(form);         // get the values submitted in the form
  console.log(data);
  if( !validEmail(data.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gform').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }

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
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
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


function handleFormSubmitModa(event) {  // handles form submit withtout any jquery
  var form = 'gformModa';
  event.preventDefault();           // we are submitting via xhr below
  var dataModa = getFormData(form);         // get the values submitted in the form

  if( !validEmail(dataModa.Email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gformModa').style.display = 'none'; // hide form
        document.getElementById('thankyou_message_moda').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encodedModa = Object.keys(dataModa).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(dataModa[k])
    }).join('&')
    xhr.send(encodedModa);
  }
}

function loaded() {
  // bind to the submit event of our form
  // var form = document.getElementById('gform');
  var form1 = document.getElementById('gformModal');
  var form2 = document.getElementById('gformModa');
  // form.addEventListener("submit", handleFormSubmit, false);
  form1.addEventListener("submit", handleFormSubmitModal, false);
  form2.addEventListener("submit", handleFormSubmitModa, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

(function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})(jQuery);

(function () {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
  };function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    TOUCHEND: 'touchend' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slideNew',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this.touchTimeout = null;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $(this._element).on(Event.TOUCHEND, function () {
            _this4.pause();
            if (_this4.touchTimeout) {
              clearTimeout(_this4.touchTimeout);
            }
            _this4.touchTimeout = setTimeout(function (event) {
              return _this4.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
          });
        }
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);
      var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var activeElementIndex = this._getItemIndex(activeElement);
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
      var nextElementIndex = this._getItemIndex(nextElement);
      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
      var tabToggles = $(Selector.DATA_TOGGLE);
      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);
        if (selector !== null && $(selector).filter(element).length > 0) {
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = $(selector);
            if (!$elem.hasClass(ClassName.SHOW)) {
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    if (!/input|textarea/i.test(event.target.tagName)) {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    $(selector).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();
      Collapse._jQueryInterface.call($target, config);
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };

  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };

  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };

  var Default = {
    placement: AttachmentMap.BOTTOM,
    offset: 0,
    flip: true
  };

  var DefaultType = {
    placement: 'string',
    offset: '(number|string)',
    flip: 'boolean'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Dropdown = function () {
    function Dropdown(element, config) {
      _classCallCheck(this, Dropdown);

      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new Popper(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    };

    Dropdown.prototype.update = function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      var _this9 = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this9.toggle();
      });
    };

    Dropdown.prototype._getConfig = function _getConfig(config) {
      var elementData = $(this._element).data();
      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Dropdown.prototype._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = $(parent).find(Selector.MENU)[0];
      }
      return this._menu;
    };

    Dropdown.prototype._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = this._config.placement;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    };

    Dropdown.prototype._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        }

        // Disable Popper.js for Dropdown in Navbar
      };if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }
      return popperConfig;
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));
      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this10 = this;

      if (this._isTransitioning) {
        return;
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this10.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this10._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this10._element)) {
            _this10._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this10._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this11 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {

        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this11._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    Modal.prototype.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this12 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this12._config.focus) {
          _this12._element.focus();
        }
        _this12._isTransitioning = false;
        $(_this12._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this13 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
          _this13._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this14 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();
            _this14.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this15 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this15.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this16 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this16._resetAdjustments();
        _this16._resetScrollbar();
        $(_this16._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this17 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this17._ignoreBackdropClick) {
            _this17._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this17._config.backdrop === 'static') {
            _this17._element.focus();
          } else {
            _this17.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this17._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var _this18 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
        });

        // Adjust navbar-toggler margin
        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
        });

        // Adjust body padding
        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');
        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      });

      // Restore navbar-toggler margin
      $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      });

      // Restore body padding
      var padding = $('body').data('padding-right');
      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this19 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this19).is(':visible')) {
          _this19.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this20 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this20._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this21 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this21._offsets.push(item[0]);
        _this21._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE);
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this22 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this22._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this22._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this23 = this;

      var active = $(container).find(Selector.ACTIVE)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this23._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)'
  };

  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this24 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this24._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this24._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this24.config.animation) {
            _this24._fixTransition();
          }
          var prevHoverState = _this24._hoverState;
          _this24._hoverState = null;

          $(_this24.element).trigger(_this24.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this24._leave(null, _this24);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this25 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this25._cleanTipClass();
        _this25.element.removeAttribute('aria-describedby');
        $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
        if (_this25._popper !== null) {
          _this25._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    Tooltip.prototype.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this26 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function (event) {
            return _this26.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;

          $(_this26.element).on(eventIn, _this26.config.selector, function (event) {
            return _this26._enter(event);
          }).on(eventOut, _this26.config.selector, function (event) {
            return _this26._leave(event);
          });
        }

        $(_this26.element).closest('.modal').on('hide.bs.modal', function () {
          return _this26.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Popover = function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
    }

    // overrides

    Popover.prototype.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Popover.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Popover.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    // private

    Popover.prototype._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    Popover.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    // static

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: 'VERSION',


      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}(jQuery);


})();
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*!
* Customized version of iScroll.js 0.0.1
* It fixes bugs affecting its integration with fullpage.js
*/
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
    var me = {};

    var _elementStyle = document.createElement('div').style;
    var _vendor = (function () {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;

        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
        }

        return false;
    })();

    function _prefixStyle (style) {
        if ( _vendor === false ) return false;
        if ( _vendor === '' ) return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime () { return new Date().getTime(); };

    me.extend = function (target, obj) {
        for ( var i in obj ) {
            target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
        return window.MSPointerEvent ?
            'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
            pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            speed = Math.abs(distance) / time,
            destination,
            duration;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
        duration = speed / deceleration;

        if ( destination < lowerMargin ) {
            destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
            distance = Math.abs(destination - current);
            duration = distance / speed;
        } else if ( destination > 0 ) {
            destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
            distance = Math.abs(current) + destination;
            duration = distance / speed;
        }

        return {
            destination: Math.round(destination),
            duration: duration
        };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle
    });

    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
    me.isBadAndroid = (function() {
        var appVersion = window.navigator.appVersion;
        // Android browser is not a chrome browser.
        if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
            if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
                return parseFloat(safariVersion[1]) < 535.19;
            } else {
                return true;
            }
        } else {
            return false;
        }
    })();

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin')
    });

    me.hasClass = function (e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
    };

    me.addClass = function (e, c) {
        if ( me.hasClass(e, c) ) {
            return;
        }

        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
        if ( !me.hasClass(e, c) ) {
            return;
        }

        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return {
            left: left,
            top: top
        };
    };

    me.preventDefaultException = function (el, exceptions) {
        for ( var i in exceptions ) {
            if ( exceptions[i].test(el[i]) ) {
                return true;
            }
        }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (k) {
                return k * ( 2 - k );
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',   // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
            fn: function (k) {
                return Math.sqrt( 1 - ( --k * k ) );
            }
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function (k) {
                var b = 4;
                return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
            }
        },
        bounce: {
            style: '',
            fn: function (k) {
                if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
                    return 7.5625 * k * k;
                } else if ( k < ( 2 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
                } else if ( k < ( 2.5 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
                } else {
                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
                }
            }
        },
        elastic: {
            style: '',
            fn: function (k) {
                var f = 0.22,
                    e = 0.4;

                if ( k === 0 ) { return 0; }
                if ( k == 1 ) { return 1; }

                return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
            }
        }
    });

    me.tap = function (e, eventName) {
        var ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
        var target = e.target,
            ev;

        if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
            // initMouseEvent is deprecated.
            ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
            ev.initEvent('click', true, true);
            ev.view = e.view || window;
            ev.detail = 1;
            ev.screenX = target.screenX || 0;
            ev.screenY = target.screenY || 0;
            ev.clientX = target.clientX || 0;
            ev.clientY = target.clientY || 0;
            ev.ctrlKey = !!e.ctrlKey;
            ev.altKey = !!e.altKey;
            ev.shiftKey = !!e.shiftKey;
            ev.metaKey = !!e.metaKey;
            ev.button = 0;
            ev.relatedTarget = null;
            ev._constructed = true;
            target.dispatchEvent(ev);
        }
    };

    return me;
})();
function IScroll (el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style;       // cache style for better performance

    this.options = {

        resizeScrollbars: true,

        mouseWheelSpeed: 20,

        snapThreshold: 0.334,

// INSERT POINT: OPTIONS
        disablePointer : !utils.hasPointer,
        disableTouch : utils.hasPointer || !utils.hasTouch,
        disableMouse : utils.hasPointer || utils.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,

        bounce: true,
        bounceTime: 600,
        bounceEasing: '',

        preventDefault: true,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },

        HWCompositing: true,
        useTransition: true,
        useTransform: true,
        bindToWrapper: typeof window.onmousedown === "undefined"
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    // Normalize options
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;

    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if ( this.options.tap === true ) {
        this.options.tap = 'tap';
    }

    // https://github.com/cubiq/iscroll/issues/1029
    if (!this.options.useTransition && !this.options.useTransform) {
        if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
            this.scrollerStyle.position = "relative";
        }
    }

    if ( this.options.shrinkScrollbars == 'scale' ) {
        this.options.useTransition = false;
    }

    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

    // Some defaults
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};

// INSERT POINT: DEFAULTS

    this._init();
    this.refresh();

    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
}

IScroll.prototype = {
    version: '5.2.0',

    _init: function () {
        this._initEvents();

        if ( this.options.scrollbars || this.options.indicators ) {
            this._initIndicators();
        }

        if ( this.options.mouseWheel ) {
            this._initWheel();
        }

        if ( this.options.snap ) {
            this._initSnap();
        }

        if ( this.options.keyBindings ) {
            this._initKeys();
        }

// INSERT POINT: _init

    },

    destroy: function () {
        this._initEvents(true);
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
        this._execEvent('destroy');
    },

    _transitionEnd: function (e) {
        if ( e.target != this.scroller || !this.isInTransition ) {
            return;
        }

        this._transitionTime();
        if ( !this.resetPosition(this.options.bounceTime) ) {
            this.isInTransition = false;
            this._execEvent('scrollEnd');
        }
    },

    _start: function (e) {
        // React to left mouse button only
        if ( utils.eventType[e.type] != 1 ) {
          // for button property
          // http://unixpapa.com/js/mouse.html
          var button;
        if (!e.which) {
          /* IE case */
          button = (e.button < 2) ? 0 :
                   ((e.button == 4) ? 1 : 2);
        } else {
          /* All others */
          button = e.button;
        }
            if ( button !== 0 ) {
                return;
            }
        }

        if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
            return;
        }

        if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.touches ? e.touches[0] : e,
            pos;

        this.initiated  = utils.eventType[e.type];
        this.moved      = false;
        this.distX      = 0;
        this.distY      = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;

        this.startTime = utils.getTime();

        if ( this.options.useTransition && this.isInTransition ) {
            this._transitionTime();
            this.isInTransition = false;
            pos = this.getComputedPosition();
            this._translate(Math.round(pos.x), Math.round(pos.y));
            this._execEvent('scrollEnd');
        } else if ( !this.options.useTransition && this.isAnimating ) {
            this.isAnimating = false;
            this._execEvent('scrollEnd');
        }

        this.startX    = this.x;
        this.startY    = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX    = point.pageX;
        this.pointY    = point.pageY;

        this._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault ) {    // increases performance on Android? TODO: check!
            e.preventDefault();
        }

        var point       = e.touches ? e.touches[0] : e,
            deltaX      = point.pageX - this.pointX,
            deltaY      = point.pageY - this.pointY,
            timestamp   = utils.getTime(),
            newX, newY,
            absDistX, absDistY;

        this.pointX     = point.pageX;
        this.pointY     = point.pageY;

        this.distX      += deltaX;
        this.distY      += deltaY;
        absDistX        = Math.abs(this.distX);
        absDistY        = Math.abs(this.distY);

        // We need to move at least 10 pixels for the scrolling to initiate
        if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
            return;
        }

        // If you are scrolling in one direction lock the other
        if ( !this.directionLocked && !this.options.freeScroll ) {
            if ( absDistX > absDistY + this.options.directionLockThreshold ) {
                this.directionLocked = 'h';     // lock horizontally
            } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
                this.directionLocked = 'v';     // lock vertically
            } else {
                this.directionLocked = 'n';     // no lock
            }
        }

        if ( this.directionLocked == 'h' ) {
            if ( this.options.eventPassthrough == 'vertical' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'horizontal' ) {
                this.initiated = false;
                return;
            }

            deltaY = 0;
        } else if ( this.directionLocked == 'v' ) {
            if ( this.options.eventPassthrough == 'horizontal' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'vertical' ) {
                this.initiated = false;
                return;
            }

            deltaX = 0;
        }

        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        // Slow down if outside of the boundaries
        if ( newX > 0 || newX < this.maxScrollX ) {
            newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if ( newY > 0 || newY < this.maxScrollY ) {
            newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }

        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

        if ( !this.moved ) {
            this._execEvent('scrollStart');
        }

        this.moved = true;

        this._translate(newX, newY);

/* REPLACE START: _move */

        if ( timestamp - this.startTime > 300 ) {
            this.startTime = timestamp;
            this.startX = this.x;
            this.startY = this.y;
        }

/* REPLACE END: _move */

    },

    _end: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.changedTouches ? e.changedTouches[0] : e,
            momentumX,
            momentumY,
            duration = utils.getTime() - this.startTime,
            newX = Math.round(this.x),
            newY = Math.round(this.y),
            distanceX = Math.abs(newX - this.startX),
            distanceY = Math.abs(newY - this.startY),
            time = 0,
            easing = '';

        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();

        // reset if we are outside of the boundaries
        if ( this.resetPosition(this.options.bounceTime) ) {
            return;
        }

        this.scrollTo(newX, newY);  // ensures that the last position is rounded

        // we scrolled less than 10 pixels
        if ( !this.moved ) {
            if ( this.options.tap ) {
                utils.tap(e, this.options.tap);
            }

            if ( this.options.click ) {
                utils.click(e);
            }

            this._execEvent('scrollCancel');
            return;
        }

        if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
            this._execEvent('flick');
            return;
        }

        // start momentum animation if needed
        if ( this.options.momentum && duration < 300 ) {
            momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
            momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
            newX = momentumX.destination;
            newY = momentumY.destination;
            time = Math.max(momentumX.duration, momentumY.duration);
            this.isInTransition = 1;
        }


        if ( this.options.snap ) {
            var snap = this._nearestSnap(newX, newY);
            this.currentPage = snap;
            time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(newX - snap.x), 1000),
                        Math.min(Math.abs(newY - snap.y), 1000)
                    ), 300);
            newX = snap.x;
            newY = snap.y;

            this.directionX = 0;
            this.directionY = 0;
            easing = this.options.bounceEasing;
        }

// INSERT POINT: _end

        if ( newX != this.x || newY != this.y ) {
            // change easing function when scroller goes out of the boundaries
            if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
                easing = utils.ease.quadratic;
            }

            this.scrollTo(newX, newY, time, easing);
            return;
        }

        this._execEvent('scrollEnd');
    },

    _resize: function () {
        var that = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            that.refresh();
        }, this.options.resizePolling);
    },

    resetPosition: function (time) {
        var x = this.x,
            y = this.y;

        time = time || 0;

        if ( !this.hasHorizontalScroll || this.x > 0 ) {
            x = 0;
        } else if ( this.x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( !this.hasVerticalScroll || this.y > 0 ) {
            y = 0;
        } else if ( this.y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        if ( x == this.x && y == this.y ) {
            return false;
        }

        this.scrollTo(x, y, time, this.options.bounceEasing);

        return true;
    },

    disable: function () {
        this.enabled = false;
    },

    enable: function () {
        this.enabled = true;
    },

    refresh: function () {
        var rf = this.wrapper.offsetHeight;     // Force reflow

        this.wrapperWidth   = this.wrapper.clientWidth;
        this.wrapperHeight  = this.wrapper.clientHeight;

/* REPLACE START: refresh */

        this.scrollerWidth  = this.scroller.offsetWidth;
        this.scrollerHeight = this.scroller.offsetHeight;

        this.maxScrollX     = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY     = this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

        this.hasHorizontalScroll    = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll      = this.options.scrollY && this.maxScrollY < 0;

        if ( !this.hasHorizontalScroll ) {
            this.maxScrollX = 0;
            this.scrollerWidth = this.wrapperWidth;
        }

        if ( !this.hasVerticalScroll ) {
            this.maxScrollY = 0;
            this.scrollerHeight = this.wrapperHeight;
        }

        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.wrapperOffset = utils.offset(this.wrapper);

        this._execEvent('refresh');

        this.resetPosition();

// INSERT POINT: _refresh

    },

    on: function (type, fn) {
        if ( !this._events[type] ) {
            this._events[type] = [];
        }

        this._events[type].push(fn);
    },

    off: function (type, fn) {
        if ( !this._events[type] ) {
            return;
        }

        var index = this._events[type].indexOf(fn);

        if ( index > -1 ) {
            this._events[type].splice(index, 1);
        }
    },

    _execEvent: function (type) {
        if ( !this._events[type] ) {
            return;
        }

        var i = 0,
            l = this._events[type].length;

        if ( !l ) {
            return;
        }

        for ( ; i < l; i++ ) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
    },

    scrollBy: function (x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;

        this.scrollTo(x, y, time, easing);
    },

    scrollTo: function (x, y, time, easing) {
        easing = easing || utils.ease.circular;

        this.isInTransition = this.options.useTransition && time > 0;
        var transitionType = this.options.useTransition && easing.style;
        if ( !time || transitionType ) {
                if(transitionType) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                }
            this._translate(x, y);
        } else {
            this._animate(x, y, time, easing.fn);
        }
    },

    scrollToElement: function (el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);

        if ( !el ) {
            return;
        }

        var pos = utils.offset(el);

        pos.left -= this.wrapperOffset.left;
        pos.top  -= this.wrapperOffset.top;

        // if offsetX/Y are true we center the element to the screen
        if ( offsetX === true ) {
            offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if ( offsetY === true ) {
            offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }

        pos.left -= offsetX || 0;
        pos.top  -= offsetY || 0;

        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

        this.scrollTo(pos.left, pos.top, time, easing);
    },

    _transitionTime: function (time) {
        if (!this.options.useTransition) {
            return;
        }
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.scrollerStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.scrollerStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.scrollerStyle[durationProp] === '0.0001ms') {
                    self.scrollerStyle[durationProp] = '0s';
                }
            });
        }


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTime(time);
            }
        }


// INSERT POINT: _transitionTime

    },

    _transitionTimingFunction: function (easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTimingFunction(easing);
            }
        }


// INSERT POINT: _transitionTimingFunction

    },

    _translate: function (x, y) {
        if ( this.options.useTransform ) {

/* REPLACE START: _translate */

            this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

        } else {
            x = Math.round(x);
            y = Math.round(y);
            this.scrollerStyle.left = x + 'px';
            this.scrollerStyle.top = y + 'px';
        }

        this.x = x;
        this.y = y;


    if ( this.indicators ) {
        for ( var i = this.indicators.length; i--; ) {
            this.indicators[i].updatePosition();
        }
    }


// INSERT POINT: _translate

    },

    _initEvents: function (remove) {
        var eventType = remove ? utils.removeEvent : utils.addEvent,
            target = this.options.bindToWrapper ? this.wrapper : window;

        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);

        if ( this.options.click ) {
            eventType(this.wrapper, 'click', this, true);
        }

        if ( !this.options.disableMouse ) {
            eventType(this.wrapper, 'mousedown', this);
            eventType(target, 'mousemove', this);
            eventType(target, 'mousecancel', this);
            eventType(target, 'mouseup', this);
        }

        if ( utils.hasPointer && !this.options.disablePointer ) {
            eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
            eventType(target, utils.prefixPointerEvent('pointermove'), this);
            eventType(target, utils.prefixPointerEvent('pointercancel'), this);
            eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }

        if ( utils.hasTouch && !this.options.disableTouch ) {
            eventType(this.wrapper, 'touchstart', this);
            eventType(target, 'touchmove', this);
            eventType(target, 'touchcancel', this);
            eventType(target, 'touchend', this);
        }

        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
    },

    getComputedPosition: function () {
        var matrix = window.getComputedStyle(this.scroller, null),
            x, y;

        if ( this.options.useTransform ) {
            matrix = matrix[utils.style.transform].split(')')[0].split(', ');
            x = +(matrix[12] || matrix[4]);
            y = +(matrix[13] || matrix[5]);
        } else {
            x = +matrix.left.replace(/[^-\d.]/g, '');
            y = +matrix.top.replace(/[^-\d.]/g, '');
        }

        return { x: x, y: y };
    },
    _initIndicators: function () {
        var interactive = this.options.interactiveScrollbars,
            customStyle = typeof this.options.scrollbars != 'string',
            indicators = [],
            indicator;

        var that = this;

        this.indicators = [];

        if ( this.options.scrollbars ) {
            // Vertical scrollbar
            if ( this.options.scrollY ) {
                indicator = {
                    el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }

            // Horizontal scrollbar
            if ( this.options.scrollX ) {
                indicator = {
                    el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }
        }

        if ( this.options.indicators ) {
            // TODO: check concat compatibility
            indicators = indicators.concat(this.options.indicators);
        }

        for ( var i = indicators.length; i--; ) {
            this.indicators.push( new Indicator(this, indicators[i]) );
        }

        // TODO: check if we can use array.map (wide compatibility and performance issues)
        function _indicatorsMap (fn) {
            if (that.indicators) {
                for ( var i = that.indicators.length; i--; ) {
                    fn.call(that.indicators[i]);
                }
            }
        }

        if ( this.options.fadeScrollbars ) {
            this.on('scrollEnd', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollCancel', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1);
                });
            });

            this.on('beforeScrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1, true);
                });
            });
        }


        this.on('refresh', function () {
            _indicatorsMap(function () {
                this.refresh();
            });
        });

        this.on('destroy', function () {
            _indicatorsMap(function () {
                this.destroy();
            });

            delete this.indicators;
        });
    },

    _initWheel: function () {
        utils.addEvent(this.wrapper, 'wheel', this);
        utils.addEvent(this.wrapper, 'mousewheel', this);
        utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

        this.on('destroy', function () {
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = null;
            utils.removeEvent(this.wrapper, 'wheel', this);
            utils.removeEvent(this.wrapper, 'mousewheel', this);
            utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
        });
    },

    _wheel: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var wheelDeltaX, wheelDeltaY,
            newX, newY,
            that = this;

        if ( this.wheelTimeout === undefined ) {
            that._execEvent('scrollStart');
        }

        // Execute the scrollEnd event after 400ms the wheel stopped scrolling
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(function () {
            if(!that.options.snap) {
                that._execEvent('scrollEnd');
            }
            that.wheelTimeout = undefined;
        }, 400);

        if ( 'deltaX' in e ) {
            if (e.deltaMode === 1) {
                wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
            } else {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            }
        } else if ( 'wheelDeltaX' in e ) {
            wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ( 'wheelDelta' in e ) {
            wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ( 'detail' in e ) {
            wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
            return;
        }

        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;

        if ( !this.hasVerticalScroll ) {
            wheelDeltaX = wheelDeltaY;
            wheelDeltaY = 0;
        }

        if ( this.options.snap ) {
            newX = this.currentPage.pageX;
            newY = this.currentPage.pageY;

            if ( wheelDeltaX > 0 ) {
                newX--;
            } else if ( wheelDeltaX < 0 ) {
                newX++;
            }

            if ( wheelDeltaY > 0 ) {
                newY--;
            } else if ( wheelDeltaY < 0 ) {
                newY++;
            }

            this.goToPage(newX, newY);

            return;
        }

        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

        this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

        if ( newX > 0 ) {
            newX = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
        }

        if ( newY > 0 ) {
            newY = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
        }

        this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
    },

    _initSnap: function () {
        this.currentPage = {};

        if ( typeof this.options.snap == 'string' ) {
            this.options.snap = this.scroller.querySelectorAll(this.options.snap);
        }

        this.on('refresh', function () {
            var i = 0, l,
                m = 0, n,
                cx, cy,
                x = 0, y,
                stepX = this.options.snapStepX || this.wrapperWidth,
                stepY = this.options.snapStepY || this.wrapperHeight,
                el;

            this.pages = [];

            if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
                return;
            }

            if ( this.options.snap === true ) {
                cx = Math.round( stepX / 2 );
                cy = Math.round( stepY / 2 );

                while ( x > -this.scrollerWidth ) {
                    this.pages[i] = [];
                    l = 0;
                    y = 0;

                    while ( y > -this.scrollerHeight ) {
                        this.pages[i][l] = {
                            x: Math.max(x, this.maxScrollX),
                            y: Math.max(y, this.maxScrollY),
                            width: stepX,
                            height: stepY,
                            cx: x - cx,
                            cy: y - cy
                        };

                        y -= stepY;
                        l++;
                    }

                    x -= stepX;
                    i++;
                }
            } else {
                el = this.options.snap;
                l = el.length;
                n = -1;

                for ( ; i < l; i++ ) {
                    if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
                        m = 0;
                        n++;
                    }

                    if ( !this.pages[m] ) {
                        this.pages[m] = [];
                    }

                    x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                    y = Math.max(-el[i].offsetTop, this.maxScrollY);
                    cx = x - Math.round(el[i].offsetWidth / 2);
                    cy = y - Math.round(el[i].offsetHeight / 2);

                    this.pages[m][n] = {
                        x: x,
                        y: y,
                        width: el[i].offsetWidth,
                        height: el[i].offsetHeight,
                        cx: cx,
                        cy: cy
                    };

                    if ( x > this.maxScrollX ) {
                        m++;
                    }
                }
            }

            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

            // Update snap threshold if needed
            if ( this.options.snapThreshold % 1 === 0 ) {
                this.snapThresholdX = this.options.snapThreshold;
                this.snapThresholdY = this.options.snapThreshold;
            } else {
                this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
            }
        });

        this.on('flick', function () {
            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.x - this.startX), 1000),
                        Math.min(Math.abs(this.y - this.startY), 1000)
                    ), 300);

            this.goToPage(
                this.currentPage.pageX + this.directionX,
                this.currentPage.pageY + this.directionY,
                time
            );
        });
    },

    _nearestSnap: function (x, y) {
        if ( !this.pages.length ) {
            return { x: 0, y: 0, pageX: 0, pageY: 0 };
        }

        var i = 0,
            l = this.pages.length,
            m = 0;

        // Check if we exceeded the snap threshold
        if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
            Math.abs(y - this.absStartY) < this.snapThresholdY ) {
            return this.currentPage;
        }

        if ( x > 0 ) {
            x = 0;
        } else if ( x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( y > 0 ) {
            y = 0;
        } else if ( y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        for ( ; i < l; i++ ) {
            if ( x >= this.pages[i][0].cx ) {
                x = this.pages[i][0].x;
                break;
            }
        }

        l = this.pages[i].length;

        for ( ; m < l; m++ ) {
            if ( y >= this.pages[0][m].cy ) {
                y = this.pages[0][m].y;
                break;
            }
        }

        if ( i == this.currentPage.pageX ) {
            i += this.directionX;

            if ( i < 0 ) {
                i = 0;
            } else if ( i >= this.pages.length ) {
                i = this.pages.length - 1;
            }

            x = this.pages[i][0].x;
        }

        if ( m == this.currentPage.pageY ) {
            m += this.directionY;

            if ( m < 0 ) {
                m = 0;
            } else if ( m >= this.pages[0].length ) {
                m = this.pages[0].length - 1;
            }

            y = this.pages[0][m].y;
        }

        return {
            x: x,
            y: y,
            pageX: i,
            pageY: m
        };
    },

    goToPage: function (x, y, time, easing) {
        easing = easing || this.options.bounceEasing;

        if ( x >= this.pages.length ) {
            x = this.pages.length - 1;
        } else if ( x < 0 ) {
            x = 0;
        }

        if ( y >= this.pages[x].length ) {
            y = this.pages[x].length - 1;
        } else if ( y < 0 ) {
            y = 0;
        }

        var posX = this.pages[x][y].x,
            posY = this.pages[x][y].y;

        time = time === undefined ? this.options.snapSpeed || Math.max(
            Math.max(
                Math.min(Math.abs(posX - this.x), 1000),
                Math.min(Math.abs(posY - this.y), 1000)
            ), 300) : time;

        this.currentPage = {
            x: posX,
            y: posY,
            pageX: x,
            pageY: y
        };

        this.scrollTo(posX, posY, time, easing);
    },

    next: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x++;

        if ( x >= this.pages.length && this.hasVerticalScroll ) {
            x = 0;
            y++;
        }

        this.goToPage(x, y, time, easing);
    },

    prev: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x--;

        if ( x < 0 && this.hasVerticalScroll ) {
            x = 0;
            y--;
        }

        this.goToPage(x, y, time, easing);
    },

    _initKeys: function (e) {
        // default key bindings
        var keys = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        var i;

        // if you give me characters I give you keycode
        if ( typeof this.options.keyBindings == 'object' ) {
            for ( i in this.options.keyBindings ) {
                if ( typeof this.options.keyBindings[i] == 'string' ) {
                    this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                }
            }
        } else {
            this.options.keyBindings = {};
        }

        for ( i in keys ) {
            this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
        }

        utils.addEvent(window, 'keydown', this);

        this.on('destroy', function () {
            utils.removeEvent(window, 'keydown', this);
        });
    },

    _key: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var snap = this.options.snap,   // we are using this alot, better to cache it
            newX = snap ? this.currentPage.pageX : this.x,
            newY = snap ? this.currentPage.pageY : this.y,
            now = utils.getTime(),
            prevTime = this.keyTime || 0,
            acceleration = 0.250,
            pos;

        if ( this.options.useTransition && this.isInTransition ) {
            pos = this.getComputedPosition();

            this._translate(Math.round(pos.x), Math.round(pos.y));
            this.isInTransition = false;
        }

        this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

        switch ( e.keyCode ) {
            case this.options.keyBindings.pageUp:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX += snap ? 1 : this.wrapperWidth;
                } else {
                    newY += snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.pageDown:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX -= snap ? 1 : this.wrapperWidth;
                } else {
                    newY -= snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.end:
                newX = snap ? this.pages.length-1 : this.maxScrollX;
                newY = snap ? this.pages[0].length-1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                newX = 0;
                newY = 0;
                break;
            case this.options.keyBindings.left:
                newX += snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.up:
                newY += snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.right:
                newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.down:
                newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            default:
                return;
        }

        if ( snap ) {
            this.goToPage(newX, newY);
            return;
        }

        if ( newX > 0 ) {
            newX = 0;
            this.keyAcceleration = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
            this.keyAcceleration = 0;
        }

        if ( newY > 0 ) {
            newY = 0;
            this.keyAcceleration = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
            this.keyAcceleration = 0;
        }

        this.scrollTo(newX, newY, 0);

        this.keyTime = now;
    },

    _animate: function (destX, destY, duration, easingFn) {
        var that = this,
            startX = this.x,
            startY = this.y,
            startTime = utils.getTime(),
            destTime = startTime + duration;

        function step () {
            var now = utils.getTime(),
                newX, newY,
                easing;

            if ( now >= destTime ) {
                that.isAnimating = false;
                that._translate(destX, destY);

                if ( !that.resetPosition(that.options.bounceTime) ) {
                    that._execEvent('scrollEnd');
                }

                return;
            }

            now = ( now - startTime ) / duration;
            easing = easingFn(now);
            newX = ( destX - startX ) * easing + startX;
            newY = ( destY - startY ) * easing + startY;
            that._translate(newX, newY);

            if ( that.isAnimating ) {
                rAF(step);
            }
        }

        this.isAnimating = true;
        step();
    },
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            case 'click':
                if ( this.enabled && !e._constructed ) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
        }
    }
};
function createDefaultScrollbar (direction, interactive, type) {
    var scrollbar = document.createElement('div'),
        indicator = document.createElement('div');

    if ( type === true ) {
        scrollbar.style.cssText = 'position:absolute;z-index:9999';
        indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }

    indicator.className = 'iScrollIndicator';

    if ( direction == 'h' ) {
        if ( type === true ) {
            scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
            indicator.style.height = '100%';
        }
        scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
        if ( type === true ) {
            scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
            indicator.style.width = '100%';
        }
        scrollbar.className = 'iScrollVerticalScrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';

    if ( !interactive ) {
        scrollbar.style.pointerEvents = 'none';
    }

    scrollbar.appendChild(indicator);

    return scrollbar;
}

function Indicator (scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;

    this.options = {
        listenX: true,
        listenY: true,
        interactive: false,
        resize: true,
        defaultScrollbars: false,
        shrink: false,
        fade: false,
        speedRatioX: 0,
        speedRatioY: 0
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;

    if ( this.options.interactive ) {
        if ( !this.options.disableTouch ) {
            utils.addEvent(this.indicator, 'touchstart', this);
            utils.addEvent(window, 'touchend', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(this.indicator, 'mousedown', this);
            utils.addEvent(window, 'mouseup', this);
        }
    }

    if ( this.options.fade ) {
        this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }
        this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
        // remove 0.0001ms
        var self = this;
        if(utils.isBadAndroid) {
            rAF(function() {
                if(self.wrapperStyle[durationProp] === '0.0001ms') {
                    self.wrapperStyle[durationProp] = '0s';
                }
            });
        }
        this.wrapperStyle.opacity = '0';
    }
}

Indicator.prototype = {
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
        }
    },

    destroy: function () {
        if ( this.options.fadeScrollbars ) {
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
        }
        if ( this.options.interactive ) {
            utils.removeEvent(this.indicator, 'touchstart', this);
            utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.removeEvent(this.indicator, 'mousedown', this);

            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
            utils.removeEvent(window, 'mousemove', this);

            utils.removeEvent(window, 'touchend', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
            utils.removeEvent(window, 'mouseup', this);
        }

        if ( this.options.defaultScrollbars ) {
            this.wrapper.parentNode.removeChild(this.wrapper);
        }
    },

    _start: function (e) {
        var point = e.touches ? e.touches[0] : e;

        e.preventDefault();
        e.stopPropagation();

        this.transitionTime();

        this.initiated = true;
        this.moved = false;
        this.lastPointX = point.pageX;
        this.lastPointY = point.pageY;

        this.startTime  = utils.getTime();

        if ( !this.options.disableTouch ) {
            utils.addEvent(window, 'touchmove', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(window, 'mousemove', this);
        }

        this.scroller._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX, deltaY,
            newX, newY,
            timestamp = utils.getTime();

        if ( !this.moved ) {
            this.scroller._execEvent('scrollStart');
        }

        this.moved = true;

        deltaX = point.pageX - this.lastPointX;
        this.lastPointX = point.pageX;

        deltaY = point.pageY - this.lastPointY;
        this.lastPointY = point.pageY;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        this._pos(newX, newY);

// INSERT POINT: indicator._move

        e.preventDefault();
        e.stopPropagation();
    },

    _end: function (e) {
        if ( !this.initiated ) {
            return;
        }

        this.initiated = false;

        e.preventDefault();
        e.stopPropagation();

        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);

        if ( this.scroller.options.snap ) {
            var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                        Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                    ), 300);

            if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
                this.scroller.directionX = 0;
                this.scroller.directionY = 0;
                this.scroller.currentPage = snap;
                this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
            }
        }

        if ( this.moved ) {
            this.scroller._execEvent('scrollEnd');
        }
    },

    transitionTime: function (time) {
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.indicatorStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.indicatorStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.indicatorStyle[durationProp] === '0.0001ms') {
                    self.indicatorStyle[durationProp] = '0s';
                }
            });
        }
    },

    transitionTimingFunction: function (easing) {
        this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },

    refresh: function () {
        this.transitionTime();

        if ( this.options.listenX && !this.options.listenY ) {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
        } else if ( this.options.listenY && !this.options.listenX ) {
            this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
        } else {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
        }

        if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
            utils.addClass(this.wrapper, 'iScrollBothScrollbars');
            utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '8px';
                } else {
                    this.wrapper.style.bottom = '8px';
                }
            }
        } else {
            utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
            utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '2px';
                } else {
                    this.wrapper.style.bottom = '2px';
                }
            }
        }

        var r = this.wrapper.offsetHeight;  // force refresh

        if ( this.options.listenX ) {
            this.wrapperWidth = this.wrapper.clientWidth;
            if ( this.options.resize ) {
                this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                this.indicatorStyle.width = this.indicatorWidth + 'px';
            } else {
                this.indicatorWidth = this.indicator.clientWidth;
            }

            this.maxPosX = this.wrapperWidth - this.indicatorWidth;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryX = -this.indicatorWidth + 8;
                this.maxBoundaryX = this.wrapperWidth - 8;
            } else {
                this.minBoundaryX = 0;
                this.maxBoundaryX = this.maxPosX;
            }

            this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
        }

        if ( this.options.listenY ) {
            this.wrapperHeight = this.wrapper.clientHeight;
            if ( this.options.resize ) {
                this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                this.indicatorStyle.height = this.indicatorHeight + 'px';
            } else {
                this.indicatorHeight = this.indicator.clientHeight;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryY = -this.indicatorHeight + 8;
                this.maxBoundaryY = this.wrapperHeight - 8;
            } else {
                this.minBoundaryY = 0;
                this.maxBoundaryY = this.maxPosY;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;
            this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
        }

        this.updatePosition();
    },

    updatePosition: function () {
        var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

        if ( !this.options.ignoreBoundaries ) {
            if ( x < this.minBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth + x, 8);
                    this.indicatorStyle.width = this.width + 'px';
                }
                x = this.minBoundaryX;
            } else if ( x > this.maxBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                    this.indicatorStyle.width = this.width + 'px';
                    x = this.maxPosX + this.indicatorWidth - this.width;
                } else {
                    x = this.maxBoundaryX;
                }
            } else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
                this.width = this.indicatorWidth;
                this.indicatorStyle.width = this.width + 'px';
            }

            if ( y < this.minBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight + y * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                }
                y = this.minBoundaryY;
            } else if ( y > this.maxBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                    y = this.maxPosY + this.indicatorHeight - this.height;
                } else {
                    y = this.maxBoundaryY;
                }
            } else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
                this.height = this.indicatorHeight;
                this.indicatorStyle.height = this.height + 'px';
            }
        }

        this.x = x;
        this.y = y;

        if ( this.scroller.options.useTransform ) {
            this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
        } else {
            this.indicatorStyle.left = x + 'px';
            this.indicatorStyle.top = y + 'px';
        }
    },

    _pos: function (x, y) {
        if ( x < 0 ) {
            x = 0;
        } else if ( x > this.maxPosX ) {
            x = this.maxPosX;
        }

        if ( y < 0 ) {
            y = 0;
        } else if ( y > this.maxPosY ) {
            y = this.maxPosY;
        }

        x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
        y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

        this.scroller.scrollTo(x, y);
    },

    fade: function (val, hold) {
        if ( hold && !this.visible ) {
            return;
        }

        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;

        var time = val ? 250 : 500,
            delay = val ? 0 : 300;

        val = val ? '1' : '0';

        this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

        this.fadeTimeout = setTimeout((function (val) {
            this.wrapperStyle.opacity = val;
            this.visible = +val;
        }).bind(this, val), delay);
    }
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
    window.IScroll = IScroll;
}

})(window, document, Math);
/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    // Default options for iScroll.js used when using scrollOverflow
    var iscrollOptions = {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true,
        interactiveScrollbars: true
    };

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Creating some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: iscrollHandler,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
        iscrollOptions.click = isTouch; // see #2035

        //extending iScroll options with the user custom ones
        iscrollOptions = $.extend(iscrollOptions, options.scrollOverflowOptions);

        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating global var

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if(options.scrollOverflow){
                    if(slides.length){
                        slides.each(function(){
                            createScrollBar($(this));
                        });
                    }else{
                        createScrollBar($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
            }
        }

        if($(this).length){
            //public functions
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                .on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter', options.normalScrollElements, function () {
                    setMouseWheelScrolling(false);
                });

                $document.on('mouseleave', options.normalScrollElements, function(){
                    setMouseWheelScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function(){
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

             //styling the sections / slides / menu
            $(SECTION_SEL).each(function(index){
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createScrollBarHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createScrollBarHandler);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function(index) {
                $(this).css('width', slideWidth + '%');

                if(options.verticalCentered){
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL);

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(section.hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /**
        * Creates the slim scroll scrollbar for the sections and slides inside them.
        */
        function createScrollBarHandler(){
            $(SECTION_SEL).each(function(){
                var slides = $(this).find(SLIDE_SEL);

                if(slides.length){
                    slides.each(function(){
                        createScrollBar($(this));
                    });
                }else{
                    createScrollBar($(this));
                }

            });
            afterRenderActions();
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            container.find('iframe[src*="youtube.com/embed/"]').each(function(){
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            if(options.scrollOverflowHandler.afterRender){
                options.scrollOverflowHandler.afterRender(section);
            }
            lazyLoad(section);
            playMedia(section);
            options.scrollOverflowHandler.afterLoad();
            
            if(isDestinyTheStartingSection()){
                $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            }

            $.isFunction( options.afterRender ) && options.afterRender.call(container);
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var anchors =  window.location.hash.replace('#', '').split('/');
            var destinationSection = getSectionByAnchor(decodeURIComponent(anchors[0]));
    
            return !destinationSection.length || destinationSection.length && destinationSection.index() === startingSection.index();
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if(activeSlide.length){
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL));
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if(movement == 'up'){
                return bottom >= ($window.scrollTop() + $window.height());
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed.m[type]){
                return;
            }
            var check = (type === 'down') ? 'bottom' : 'top';
            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event){
            var e = event.originalEvent;
            if(!checkParentForNormalScrollElement(event.target) && options.autoScrolling && isReallyTouch(e)){
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);
                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down', scrollable);
                        } else if (touchEndY > touchStartY) {
                            scrolling('up', scrollable);
                        }
                    }
                }
            }
        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                        //scrolling up?
                        }else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'left'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'left'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(element.outerHeight() > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            options.scrollOverflowHandler.beforeLeave();
            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);
            options.scrollOverflowHandler.onLeave();


            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
            options.scrollOverflowHandler.afterLoad();

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element
                .attr(attribute, element.data(attribute))
                .removeAttr('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;
            
            panel.find('img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                element = $(this);

                $.each(['src', 'srcset'], function(index, type){
                    var attribute = element.attr('data-' + type);
                    if(typeof attribute !== 'undefined' && attribute){
                        setSrc(element, type);
                    }
                });

                if(element.is('source')){
                    element.closest('video').get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if( slide.length ) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var sectionAnchor = decodeURIComponent(value[0]);
            var slideAnchor = decodeURIComponent(value[1]);

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var value =  window.location.hash.replace('#', '').split('/');
                var sectionAnchor = decodeURIComponent(value[0]);
                var slideAnchor = decodeURIComponent(value[1]);

                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);


                if(sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slideAnchor ))  {
                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.which) < 0){
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor:  getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.xMovement, v.slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        /**
        * Checks if the element needs scrollbar and if the user wants to apply it.
        * If so it creates it.
        *
        * @param {Object} element   jQuery object of the section or slide
        */
        function createScrollBar(element){
            //User doesn't want scrollbar here? Sayonara baby!
            if(element.hasClass('fp-noscroll')) return;

            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            var scrollOverflowHandler = options.scrollOverflowHandler;
            var wrap = scrollOverflowHandler.wrapContent();
            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = scrollOverflowHandler.scrollable(element);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollOverflowHandler.scrollHeight(element);
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //did we already have an scrollbar ? Updating it
                if(scrollable.length){
                    scrollOverflowHandler.update(element, scrollHeight);
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
                    }else{
                        element.wrapInner(wrap);
                    }
                    scrollOverflowHandler.create(element, scrollHeight);
                }
            }
            //removing the scrolling when it is not necessary anymore
            else{
                scrollOverflowHandler.remove(element);
            }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!element.hasClass(TABLE)){
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            if(!sectionAnchor) return [];

            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( sectionAnchor -1);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //do nothing if there's no section with the given anchor name
            if(!section.length) return;

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if(typeof anchor === 'undefined'){
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container
                .off('mousedown', mouseDownHandler)
                .off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove).on(events.touchmove, preventBouncing);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart).on(events.touchstart, touchStartHandler)
                    .off(events.touchmove).on(events.touchmove, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                $(WRAPPER_SEL)
                    .off(events.touchstart)
                    .off(events.touchmove);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                container.css('top', -roundedTop);
            }
            else{
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            switch (direction){
                case 'up': isScrollAllowed[type].up = value; break;
                case 'down': isScrollAllowed[type].down = value; break;
                case 'left': isScrollAllowed[type].left = value; break;
                case 'right': isScrollAllowed[type].right = value; break;
                case 'all':
                    if(type == 'm'){
                        setAllowScrolling(value);
                    }else{
                        setKeyboardScrolling(value);
                    }
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click touchstart', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click touchstart', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                setSrc($(this), 'src');
            });

            container.find('img[data-srcset]').each(function(){
                setSrc($(this), 'srcset');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                options.scrollOverflowHandler.remove($(this));
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //removing the applied transition from the fullpage wrapper
            container.css({
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function(index, value){
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            if($('html').hasClass(ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //using extensions? Wrong file!
            $.each(extensions, function(index, extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function() {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function() {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }

    }; //end of $.fn.fullpage

    if(typeof IScroll !== 'undefined'){
        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener('wheel', this);
            this.wrapper.removeEventListener('mousewheel', this);
            this.wrapper.removeEventListener('DOMMouseScroll', this);
        };
    }

    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */
    var iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],

        // Enables or disables the mouse wheel for the active section or all slides in it
        toggleWheel: function(value){
            var scrollable = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL);
            scrollable.each(function(){
                var iScrollInstance = $(this).data('iscrollInstance');
                if(typeof iScrollInstance !== 'undefined' && iScrollInstance){
                    if(value){
                        iScrollInstance.wheelOn();
                    }
                    else{    
                        iScrollInstance.wheelOff();
                    }
                }
            });
        },

        /**
        * Turns off iScroll for the destination section.
        * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
        * scroll the destination section/slide before the sections animations ends.
        */
        onLeave: function(){
            iscrollHandler.toggleWheel(false);
        },

        // Turns off iScroll for the leaving section
        beforeLeave: function(){
            iscrollHandler.onLeave()
        },

        // Turns on iScroll on section load
        afterLoad: function(){
            iscrollHandler.toggleWheel(true);
        },

        /**
         * Called when overflow scrolling is needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        create: function(element, scrollHeight) {
            var scrollable = element.find(SCROLLABLE_SEL);

            scrollable.height(scrollHeight);
            scrollable.each(function() {
                var $this = $(this);
                var iScrollInstance = $this.data('iscrollInstance');
                if (iScrollInstance) {
                    $.each(iscrollHandler.iScrollInstances, function(){
                        $(this).destroy();
                    });
                }

                iScrollInstance = new IScroll($this.get(0), iscrollOptions);
                iscrollHandler.iScrollInstances.push(iScrollInstance);

                //off by default until the section gets active
                iScrollInstance.wheelOff();

                $this.data('iscrollInstance', iScrollInstance);
            });
        },

        /**
         * Return a boolean depending on whether the scrollable element is a
         * the end or at the start of the scrolling depending on the given type.
         *
         * @param  {String}  type       Either 'top' or 'bottom'
         * @param  {Object}  scrollable jQuery object for the scrollable element
         * @return {Boolean}
         */
        isScrolled: function(type, scrollable) {
            var scroller = scrollable.data('iscrollInstance');

            //no scroller?
            if (!scroller) {
                return true;
            }

            if (type === 'top') {
                return scroller.y >= 0 && !scrollable.scrollTop();
            } else if (type === 'bottom') {
                return (0 - scroller.y) + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        },

        /**
         * Returns the scrollable element for the given section.
         * If there are landscape slides, will only return a scrollable element
         * if it is in the active slide.
         *
         * @param  {Object}  activeSection jQuery object containing current section
         * @return {Boolean}
         */
        scrollable: function(activeSection){
            // if there are landscape slides, we check if the scrolling bar is in the current one or not
            if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
            }
            return activeSection.find(SCROLLABLE_SEL);
        },

        /**
         * Returns the scroll height of the wrapped content.
         * If this is larger than the window height minus section padding,
         * overflow scrolling is needed.
         *
         * @param  {Object} element jQuery object containing current section
         * @return {Number}
         */
        scrollHeight: function(element) {
            return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
        },

        /**
         * Called when overflow scrolling is no longer needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         */
        remove: function(element) {
            var scrollable = element.find(SCROLLABLE_SEL);
            if (scrollable.length) {
                var iScrollInstance = scrollable.data('iscrollInstance');
                iScrollInstance.destroy();

                scrollable.data('iscrollInstance', null);
            }
            element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
        },

        /**
         * Called when overflow scrolling has already been setup but the
         * window height has potentially changed.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        update: function(element, scrollHeight) {
            //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
            //short period of time.
            //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
            clearTimeout(iscrollHandler.refreshId);
            iscrollHandler.refreshId = setTimeout(function(){
                $.each(iscrollHandler.iScrollInstances, function(){
                    $(this).get(0).refresh();
                });
            }, 150);

            //updating the wrappers height
            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
        },

        /**
         * Called to get any additional elements needed to wrap the section
         * content in order to facilitate overflow scrolling.
         *
         * @return {String|Object} Can be a string containing HTML,
         *                         a DOM element, or jQuery object.
         */
        wrapContent: function() {
            return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
        }
    };
});

// Google Analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-107982810-1', 'auto');
ga('send', 'pageview');
// check mobile
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
// loading
window.onload = function() {
  $('.loading').fadeOut('slow');
};
$(document).ready(function() {
  var device = mobileAndTabletcheck();
  // $('.section-4__slide').carousel({
  //   interval: 4000
  // })
  $('.multiple-snap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  if (device !== true) {
    $('body').addClass('pc');
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'vision', 'portfolio', 'comment', 'flow', 'contact', 'footer'],
        sectionSelector: '.sec',
        scrollOverflow: true,
        css3: true,
        verticalCentered: false,
        menu: '#navigation',
        afterRender: function(){},
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
  } else{
    $('body').addClass('mobile');
  }
});
=======
function validEmail(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}function getFormData(e){var t=document.getElementById(e).elements,i={};return Object.keys(t).map(function(e){return void 0!==t[e].name?t[e].name:t[e].length>0?t[e].item(0).name:void 0}).filter(function(e,t,i){return i.indexOf(e)==t&&e}).forEach(function(e){i[e]=t[e].value;var n="";if("checkbox"===t[e].type)n=n+t[e].checked+", ",i[e]=n.slice(0,-2);else if(t[e].length)for(var o=0;o<t[e].length;o++)t[e].item(o).checked&&(n=n+t[e].item(o).value+", ",i[e]=n.slice(0,-2))}),i}function handleFormSubmit(e){e.preventDefault();var t=getFormData("gform");if(!validEmail(t.email))return document.getElementById("email-invalid").style.display="block",!1;var i=e.target.action,n=new XMLHttpRequest;n.open("POST",i),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){document.getElementById("gform").style.display="none",document.getElementById("thankyou_message").style.display="block"};var o=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");n.send(o)}function handleFormSubmitModal(e){e.preventDefault();var t=getFormData("gformModal");if(!validEmail(t.Email))return document.getElementById("email-invalid").style.display="block",!1;var i=e.target.action,n=new XMLHttpRequest;n.open("POST",i),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){document.getElementById("gformModal").style.display="none",document.getElementById("thankyou_message_modal").style.display="block"};var o=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");n.send(o)}function handleFormSubmitModa(e){e.preventDefault();var t=getFormData("gformModa");if(!validEmail(t.Email))return document.getElementById("email-invalid").style.display="block",!1;var i=e.target.action,n=new XMLHttpRequest;n.open("POST",i),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){document.getElementById("gformModa").style.display="none",document.getElementById("thankyou_message_moda").style.display="block"};var o=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");n.send(o)}function loaded(){var e=document.getElementById("gformModal"),t=document.getElementById("gformModa");e.addEventListener("submit",handleFormSubmitModal,!1),t.addEventListener("submit",handleFormSubmitModa,!1)}if(document.addEventListener("DOMContentLoaded",loaded,!1),function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function i(e,t){var i=(t=t||te).createElement("script");i.text=e,t.head.appendChild(i).parentNode.removeChild(i)}function n(e){var t=!!e&&"length"in e&&e.length,i=fe.type(e);return"function"!==i&&!fe.isWindow(e)&&("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function s(e,t,i){return fe.isFunction(t)?fe.grep(e,function(e,n){return!!t.call(e,n,e)!==i}):t.nodeType?fe.grep(e,function(e){return e===t!==i}):"string"!=typeof t?fe.grep(e,function(e){return re.call(t,e)>-1!==i}):Ee.test(t)?fe.filter(t,e,i):(t=fe.filter(t,e),fe.grep(e,function(e){return re.call(t,e)>-1!==i&&1===e.nodeType}))}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function a(e){var t={};return fe.each(e.match(Oe)||[],function(e,i){t[i]=!0}),t}function l(e){return e}function c(e){throw e}function d(e,t,i,n){var o;try{e&&fe.isFunction(o=e.promise)?o.call(e).done(t).fail(i):e&&fe.isFunction(o=e.then)?o.call(e,t,i):t.apply(void 0,[e].slice(n))}catch(e){i.apply(void 0,[e])}}function u(){te.removeEventListener("DOMContentLoaded",u),e.removeEventListener("load",u),fe.ready()}function p(){this.expando=fe.expando+p.uid++}function h(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:$e.test(e)?JSON.parse(e):e)}function f(e,t,i){var n;if(void 0===i&&1===e.nodeType)if(n="data-"+t.replace(Me,"-$&").toLowerCase(),"string"==typeof(i=e.getAttribute(n))){try{i=h(i)}catch(e){}He.set(e,t,i)}else i=void 0;return i}function g(e,t,i,n){var o,s=1,r=20,a=n?function(){return n.cur()}:function(){return fe.css(e,t,"")},l=a(),c=i&&i[3]||(fe.cssNumber[t]?"":"px"),d=(fe.cssNumber[t]||"px"!==c&&+l)&&je.exec(fe.css(e,t));if(d&&d[3]!==c){c=c||d[3],i=i||[],d=+l||1;do{s=s||".5",d/=s,fe.style(e,t,d+c)}while(s!==(s=a()/l)&&1!==s&&--r)}return i&&(d=+d||+l||0,o=i[1]?d+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=d,n.end=o)),o}function m(e){var t,i=e.ownerDocument,n=e.nodeName,o=ze[n];return o||(t=i.body.appendChild(i.createElement(n)),o=fe.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),ze[n]=o,o)}function v(e,t){for(var i,n,o=[],s=0,r=e.length;s<r;s++)(n=e[s]).style&&(i=n.style.display,t?("none"===i&&(o[s]=Le.get(n,"display")||null,o[s]||(n.style.display="")),""===n.style.display&&Be(n)&&(o[s]=m(n))):"none"!==i&&(o[s]="none",Le.set(n,"display",i)));for(s=0;s<r;s++)null!=o[s]&&(e[s].style.display=o[s]);return e}function y(e,t){var i;return i=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?fe.merge([e],i):i}function b(e,t){for(var i=0,n=e.length;i<n;i++)Le.set(e[i],"globalEval",!t||Le.get(t[i],"globalEval"))}function w(e,t,i,n,o){for(var s,r,a,l,c,d,u=t.createDocumentFragment(),p=[],h=0,f=e.length;h<f;h++)if((s=e[h])||0===s)if("object"===fe.type(s))fe.merge(p,s.nodeType?[s]:s);else if(Ve.test(s)){for(r=r||u.appendChild(t.createElement("div")),a=(Xe.exec(s)||["",""])[1].toLowerCase(),l=Ue[a]||Ue._default,r.innerHTML=l[1]+fe.htmlPrefilter(s)+l[2],d=l[0];d--;)r=r.lastChild;fe.merge(p,r.childNodes),(r=u.firstChild).textContent=""}else p.push(t.createTextNode(s));for(u.textContent="",h=0;s=p[h++];)if(n&&fe.inArray(s,n)>-1)o&&o.push(s);else if(c=fe.contains(s.ownerDocument,s),r=y(u.appendChild(s),"script"),c&&b(r),i)for(d=0;s=r[d++];)Ye.test(s.type||"")&&i.push(s);return u}function T(){return!0}function S(){return!1}function x(){try{return te.activeElement}catch(e){}}function E(e,t,i,n,o,s){var r,a;if("object"==typeof t){"string"!=typeof i&&(n=n||i,i=void 0);for(a in t)E(e,a,i,n,t[a],s);return e}if(null==n&&null==o?(o=i,n=i=void 0):null==o&&("string"==typeof i?(o=n,n=void 0):(o=n,n=i,i=void 0)),!1===o)o=S;else if(!o)return e;return 1===s&&(r=o,o=function(e){return fe().off(e),r.apply(this,arguments)},o.guid=r.guid||(r.guid=fe.guid++)),e.each(function(){fe.event.add(this,t,o,n,i)})}function C(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")?fe(">tbody",e)[0]||e:e}function _(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function k(e){var t=it.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function A(e,t){var i,n,o,s,r,a,l,c;if(1===t.nodeType){if(Le.hasData(e)&&(s=Le.access(e),r=Le.set(t,s),c=s.events)){delete r.handle,r.events={};for(o in c)for(i=0,n=c[o].length;i<n;i++)fe.event.add(t,o,c[o][i])}He.hasData(e)&&(a=He.access(e),l=fe.extend({},a),He.set(t,l))}}function O(e,t){var i=t.nodeName.toLowerCase();"input"===i&&qe.test(e.type)?t.checked=e.checked:"input"!==i&&"textarea"!==i||(t.defaultValue=e.defaultValue)}function D(e,t,n,o){t=oe.apply([],t);var s,r,a,l,c,d,u=0,p=e.length,h=p-1,f=t[0],g=fe.isFunction(f);if(g||p>1&&"string"==typeof f&&!pe.checkClone&&tt.test(f))return e.each(function(i){var s=e.eq(i);g&&(t[0]=f.call(this,i,s.html())),D(s,t,n,o)});if(p&&(s=w(t,e[0].ownerDocument,!1,e,o),r=s.firstChild,1===s.childNodes.length&&(s=r),r||o)){for(l=(a=fe.map(y(s,"script"),_)).length;u<p;u++)c=s,u!==h&&(c=fe.clone(c,!0,!0),l&&fe.merge(a,y(c,"script"))),n.call(e[u],c,u);if(l)for(d=a[a.length-1].ownerDocument,fe.map(a,k),u=0;u<l;u++)c=a[u],Ye.test(c.type||"")&&!Le.access(c,"globalEval")&&fe.contains(d,c)&&(c.src?fe._evalUrl&&fe._evalUrl(c.src):i(c.textContent.replace(nt,""),d))}return e}function I(e,t,i){for(var n,o=t?fe.filter(t,e):e,s=0;null!=(n=o[s]);s++)i||1!==n.nodeType||fe.cleanData(y(n)),n.parentNode&&(i&&fe.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return e}function N(e,t,i){var n,o,s,r,a=e.style;return(i=i||rt(e))&&(""!==(r=i.getPropertyValue(t)||i[t])||fe.contains(e.ownerDocument,e)||(r=fe.style(e,t)),!pe.pixelMarginRight()&&st.test(r)&&ot.test(t)&&(n=a.width,o=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=i.width,a.width=n,a.minWidth=o,a.maxWidth=s)),void 0!==r?r+"":r}function P(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function L(e){if(e in pt)return e;for(var t=e[0].toUpperCase()+e.slice(1),i=ut.length;i--;)if((e=ut[i]+t)in pt)return e}function H(e){var t=fe.cssProps[e];return t||(t=fe.cssProps[e]=L(e)||e),t}function $(e,t,i){var n=je.exec(t);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):t}function M(e,t,i,n,o){var s,r=0;for(s=i===(n?"border":"content")?4:"width"===t?1:0;s<4;s+=2)"margin"===i&&(r+=fe.css(e,i+We[s],!0,o)),n?("content"===i&&(r-=fe.css(e,"padding"+We[s],!0,o)),"margin"!==i&&(r-=fe.css(e,"border"+We[s]+"Width",!0,o))):(r+=fe.css(e,"padding"+We[s],!0,o),"padding"!==i&&(r+=fe.css(e,"border"+We[s]+"Width",!0,o)));return r}function R(e,t,i){var n,o=rt(e),s=N(e,t,o),r="border-box"===fe.css(e,"boxSizing",!1,o);return st.test(s)?s:(n=r&&(pe.boxSizingReliable()||s===e.style[t]),"auto"===s&&(s=e["offset"+t[0].toUpperCase()+t.slice(1)]),(s=parseFloat(s)||0)+M(e,t,i||(r?"border":"content"),n,o)+"px")}function j(e,t,i,n,o){return new j.prototype.init(e,t,i,n,o)}function W(){ft&&(!1===te.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(W):e.setTimeout(W,fe.fx.interval),fe.fx.tick())}function B(){return e.setTimeout(function(){ht=void 0}),ht=fe.now()}function F(e,t){var i,n=0,o={height:e};for(t=t?1:0;n<4;n+=2-t)i=We[n],o["margin"+i]=o["padding"+i]=e;return t&&(o.opacity=o.width=e),o}function z(e,t,i){for(var n,o=(X.tweeners[t]||[]).concat(X.tweeners["*"]),s=0,r=o.length;s<r;s++)if(n=o[s].call(i,t,e))return n}function q(e,t){var i,n,o,s,r;for(i in e)if(n=fe.camelCase(i),o=t[n],s=e[i],Array.isArray(s)&&(o=s[1],s=e[i]=s[0]),i!==n&&(e[n]=s,delete e[i]),(r=fe.cssHooks[n])&&"expand"in r){s=r.expand(s),delete e[n];for(i in s)i in e||(e[i]=s[i],t[i]=o)}else t[n]=o}function X(e,t,i){var n,o,s=0,r=X.prefilters.length,a=fe.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ht||B(),i=Math.max(0,c.startTime+c.duration-t),n=1-(i/c.duration||0),s=0,r=c.tweens.length;s<r;s++)c.tweens[s].run(n);return a.notifyWith(e,[c,n,i]),n<1&&r?i:(r||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:fe.extend({},t),opts:fe.extend(!0,{specialEasing:{},easing:fe.easing._default},i),originalProperties:t,originalOptions:i,startTime:ht||B(),duration:i.duration,tweens:[],createTween:function(t,i){var n=fe.Tween(e,c.opts,t,i,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(n),n},stop:function(t){var i=0,n=t?c.tweens.length:0;if(o)return this;for(o=!0;i<n;i++)c.tweens[i].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),d=c.props;for(q(d,c.opts.specialEasing);s<r;s++)if(n=X.prefilters[s].call(c,e,d,c.opts))return fe.isFunction(n.stop)&&(fe._queueHooks(c.elem,c.opts.queue).stop=fe.proxy(n.stop,n)),n;return fe.map(d,z,c),fe.isFunction(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),fe.fx.timer(fe.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}function Y(e){return(e.match(Oe)||[]).join(" ")}function U(e){return e.getAttribute&&e.getAttribute("class")||""}function V(e,t,i,n){var o;if(Array.isArray(t))fe.each(t,function(t,o){i||_t.test(e)?n(e,o):V(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,i,n)});else if(i||"object"!==fe.type(t))n(e,t);else for(o in t)V(e+"["+o+"]",t[o],i,n)}function G(e){return function(t,i){"string"!=typeof t&&(i=t,t="*");var n,o=0,s=t.toLowerCase().match(Oe)||[];if(fe.isFunction(i))for(;n=s[o++];)"+"===n[0]?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(i)):(e[n]=e[n]||[]).push(i)}}function K(e,t,i,n){function o(a){var l;return s[a]=!0,fe.each(e[a]||[],function(e,a){var c=a(t,i,n);return"string"!=typeof c||r||s[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var s={},r=e===Rt;return o(t.dataTypes[0])||!s["*"]&&o("*")}function Q(e,t){var i,n,o=fe.ajaxSettings.flatOptions||{};for(i in t)void 0!==t[i]&&((o[i]?e:n||(n={}))[i]=t[i]);return n&&fe.extend(!0,e,n),e}function Z(e,t,i){for(var n,o,s,r,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n)for(o in a)if(a[o]&&a[o].test(n)){l.unshift(o);break}if(l[0]in i)s=l[0];else{for(o in i){if(!l[0]||e.converters[o+" "+l[0]]){s=o;break}r||(r=o)}s=s||r}if(s)return s!==l[0]&&l.unshift(s),i[s]}function J(e,t,i,n){var o,s,r,a,l,c={},d=e.dataTypes.slice();if(d[1])for(r in e.converters)c[r.toLowerCase()]=e.converters[r];for(s=d.shift();s;)if(e.responseFields[s]&&(i[e.responseFields[s]]=t),!l&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=d.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(r=c[l+" "+s]||c["* "+s]))for(o in c)if((a=o.split(" "))[1]===s&&(r=c[l+" "+a[0]]||c["* "+a[0]])){!0===r?r=c[o]:!0!==c[o]&&(s=a[0],d.unshift(a[1]));break}if(!0!==r)if(r&&e.throws)t=r(t);else try{t=r(t)}catch(e){return{state:"parsererror",error:r?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}var ee=[],te=e.document,ie=Object.getPrototypeOf,ne=ee.slice,oe=ee.concat,se=ee.push,re=ee.indexOf,ae={},le=ae.toString,ce=ae.hasOwnProperty,de=ce.toString,ue=de.call(Object),pe={},he="3.2.1",fe=function(e,t){return new fe.fn.init(e,t)},ge=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ve=/-([a-z])/g,ye=function(e,t){return t.toUpperCase()};fe.fn=fe.prototype={jquery:he,constructor:fe,length:0,toArray:function(){return ne.call(this)},get:function(e){return null==e?ne.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=fe.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return fe.each(this,e)},map:function(e){return this.pushStack(fe.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(ne.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,i=+e+(e<0?t:0);return this.pushStack(i>=0&&i<t?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:se,sort:ee.sort,splice:ee.splice},fe.extend=fe.fn.extend=function(){var e,t,i,n,o,s,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,r=arguments[a]||{},a++),"object"==typeof r||fe.isFunction(r)||(r={}),a===l&&(r=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=r[t],n=e[t],r!==n&&(c&&n&&(fe.isPlainObject(n)||(o=Array.isArray(n)))?(o?(o=!1,s=i&&Array.isArray(i)?i:[]):s=i&&fe.isPlainObject(i)?i:{},r[t]=fe.extend(c,s,n)):void 0!==n&&(r[t]=n));return r},fe.extend({expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===fe.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=fe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,i;return!(!e||"[object Object]"!==le.call(e)||(t=ie(e))&&("function"!=typeof(i=ce.call(t,"constructor")&&t.constructor)||de.call(i)!==ue))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ae[le.call(e)]||"object":typeof e},globalEval:function(e){i(e)},camelCase:function(e){return e.replace(me,"ms-").replace(ve,ye)},each:function(e,t){var i,o=0;if(n(e))for(i=e.length;o<i&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},trim:function(e){return null==e?"":(e+"").replace(ge,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?fe.merge(i,"string"==typeof e?[e]:e):se.call(i,e)),i},inArray:function(e,t,i){return null==t?-1:re.call(t,e,i)},merge:function(e,t){for(var i=+t.length,n=0,o=e.length;n<i;n++)e[o++]=t[n];return e.length=o,e},grep:function(e,t,i){for(var n=[],o=0,s=e.length,r=!i;o<s;o++)!t(e[o],o)!==r&&n.push(e[o]);return n},map:function(e,t,i){var o,s,r=0,a=[];if(n(e))for(o=e.length;r<o;r++)null!=(s=t(e[r],r,i))&&a.push(s);else for(r in e)null!=(s=t(e[r],r,i))&&a.push(s);return oe.apply([],a)},guid:1,proxy:function(e,t){var i,n,o;if("string"==typeof t&&(i=e[t],t=e,e=i),fe.isFunction(e))return n=ne.call(arguments,2),o=function(){return e.apply(t||this,n.concat(ne.call(arguments)))},o.guid=e.guid=e.guid||fe.guid++,o},now:Date.now,support:pe}),"function"==typeof Symbol&&(fe.fn[Symbol.iterator]=ee[Symbol.iterator]),fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ae["[object "+t+"]"]=t.toLowerCase()});var be=function(e){function t(e,t,i,n){var o,s,r,a,l,d,p,h=t&&t.ownerDocument,f=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return i;if(!n&&((t?t.ownerDocument||t:j)!==I&&D(t),t=t||I,P)){if(11!==f&&(l=ge.exec(e)))if(o=l[1]){if(9===f){if(!(r=t.getElementById(o)))return i;if(r.id===o)return i.push(r),i}else if(h&&(r=h.getElementById(o))&&M(t,r)&&r.id===o)return i.push(r),i}else{if(l[2])return K.apply(i,t.getElementsByTagName(e)),i;if((o=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(i,t.getElementsByClassName(o)),i}if(w.qsa&&!q[e+" "]&&(!L||!L.test(e))){if(1!==f)h=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(be,we):t.setAttribute("id",a=R),s=(d=E(e)).length;s--;)d[s]="#"+a+" "+u(d[s]);p=d.join(","),h=me.test(e)&&c(t.parentNode)||t}if(p)try{return K.apply(i,h.querySelectorAll(p)),i}catch(e){}finally{a===R&&t.removeAttribute("id")}}}return _(e.replace(se,"$1"),t,i,n)}function i(){function e(i,n){return t.push(i+" ")>T.cacheLength&&delete e[t.shift()],e[i+" "]=n}var t=[];return e}function n(e){return e[R]=!0,e}function o(e){var t=I.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function s(e,t){for(var i=e.split("|"),n=i.length;n--;)T.attrHandle[i[n]]=t}function r(e,t){var i=t&&e,n=i&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===t)return-1;return e?1:-1}function a(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function l(e){return n(function(t){return t=+t,n(function(i,n){for(var o,s=e([],i.length,t),r=s.length;r--;)i[o=s[r]]&&(i[o]=!(n[o]=i[o]))})})}function c(e){return e&&void 0!==e.getElementsByTagName&&e}function d(){}function u(e){for(var t=0,i=e.length,n="";t<i;t++)n+=e[t].value;return n}function p(e,t,i){var n=t.dir,o=t.next,s=o||n,r=i&&"parentNode"===s,a=B++;return t.first?function(t,i,o){for(;t=t[n];)if(1===t.nodeType||r)return e(t,i,o);return!1}:function(t,i,l){var c,d,u,p=[W,a];if(l){for(;t=t[n];)if((1===t.nodeType||r)&&e(t,i,l))return!0}else for(;t=t[n];)if(1===t.nodeType||r)if(u=t[R]||(t[R]={}),d=u[t.uniqueID]||(u[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[n]||t;else{if((c=d[s])&&c[0]===W&&c[1]===a)return p[2]=c[2];if(d[s]=p,p[2]=e(t,i,l))return!0}return!1}}function h(e){return e.length>1?function(t,i,n){for(var o=e.length;o--;)if(!e[o](t,i,n))return!1;return!0}:e[0]}function f(e,i,n){for(var o=0,s=i.length;o<s;o++)t(e,i[o],n);return n}function g(e,t,i,n,o){for(var s,r=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(i&&!i(s,n,o)||(r.push(s),c&&t.push(a)));return r}function m(e,t,i,o,s,r){return o&&!o[R]&&(o=m(o)),s&&!s[R]&&(s=m(s,r)),n(function(n,r,a,l){var c,d,u,p=[],h=[],m=r.length,v=n||f(t||"*",a.nodeType?[a]:a,[]),y=!e||!n&&t?v:g(v,p,e,a,l),b=i?s||(n?e:m||o)?[]:r:y;if(i&&i(y,b,a,l),o)for(c=g(b,h),o(c,[],a,l),d=c.length;d--;)(u=c[d])&&(b[h[d]]=!(y[h[d]]=u));if(n){if(s||e){if(s){for(c=[],d=b.length;d--;)(u=b[d])&&c.push(y[d]=u);s(null,b=[],c,l)}for(d=b.length;d--;)(u=b[d])&&(c=s?Z(n,u):p[d])>-1&&(n[c]=!(r[c]=u))}}else b=g(b===r?b.splice(m,b.length):b),s?s(null,r,b,l):K.apply(r,b)})}function v(e){for(var t,i,n,o=e.length,s=T.relative[e[0].type],r=s||T.relative[" "],a=s?1:0,l=p(function(e){return e===t},r,!0),c=p(function(e){return Z(t,e)>-1},r,!0),d=[function(e,i,n){var o=!s&&(n||i!==k)||((t=i).nodeType?l(e,i,n):c(e,i,n));return t=null,o}];a<o;a++)if(i=T.relative[e[a].type])d=[p(h(d),i)];else{if((i=T.filter[e[a].type].apply(null,e[a].matches))[R]){for(n=++a;n<o&&!T.relative[e[n].type];n++);return m(a>1&&h(d),a>1&&u(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(se,"$1"),i,a<n&&v(e.slice(a,n)),n<o&&v(e=e.slice(n)),n<o&&u(e))}d.push(i)}return h(d)}function y(e,i){var o=i.length>0,s=e.length>0,r=function(n,r,a,l,c){var d,u,p,h=0,f="0",m=n&&[],v=[],y=k,b=n||s&&T.find.TAG("*",c),w=W+=null==y?1:Math.random()||.1,S=b.length;for(c&&(k=r===I||r||c);f!==S&&null!=(d=b[f]);f++){if(s&&d){for(u=0,r||d.ownerDocument===I||(D(d),a=!P);p=e[u++];)if(p(d,r||I,a)){l.push(d);break}c&&(W=w)}o&&((d=!p&&d)&&h--,n&&m.push(d))}if(h+=f,o&&f!==h){for(u=0;p=i[u++];)p(m,v,r,a);if(n){if(h>0)for(;f--;)m[f]||v[f]||(v[f]=V.call(l));v=g(v)}K.apply(l,v),c&&!n&&v.length>0&&h+i.length>1&&t.uniqueSort(l)}return c&&(W=w,k=y),m};return o?n(r):r}var b,w,T,S,x,E,C,_,k,A,O,D,I,N,P,L,H,$,M,R="sizzle"+1*new Date,j=e.document,W=0,B=0,F=i(),z=i(),q=i(),X=function(e,t){return e===t&&(O=!0),0},Y={}.hasOwnProperty,U=[],V=U.pop,G=U.push,K=U.push,Q=U.slice,Z=function(e,t){for(var i=0,n=e.length;i<n;i++)if(e[i]===t)return i;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ie="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",ne=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",oe=new RegExp(ee+"+","g"),se=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),re=new RegExp("^"+ee+"*,"+ee+"*"),ae=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),le=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ce=new RegExp(ne),de=new RegExp("^"+te+"$"),ue={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,fe=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,ve=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,i){var n="0x"+t-65536;return n!==n||i?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,we=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Te=function(){D()},Se=p(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{K.apply(U=Q.call(j.childNodes),j.childNodes),U[j.childNodes.length].nodeType}catch(e){K={apply:U.length?function(e,t){G.apply(e,Q.call(t))}:function(e,t){for(var i=e.length,n=0;e[i++]=t[n++];);e.length=i-1}}}w=t.support={},x=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,i,n=e?e.ownerDocument||e:j;return n!==I&&9===n.nodeType&&n.documentElement?(I=n,N=I.documentElement,P=!x(I),j!==I&&(i=I.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",Te,!1):i.attachEvent&&i.attachEvent("onunload",Te)),w.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=o(function(e){return e.appendChild(I.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=fe.test(I.getElementsByClassName),w.getById=o(function(e){return N.appendChild(e).id=R,!I.getElementsByName||!I.getElementsByName(R).length}),w.getById?(T.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},T.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var i=t.getElementById(e);return i?[i]:[]}}):(T.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var i=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return i&&i.value===t}},T.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var i,n,o,s=t.getElementById(e);if(s){if((i=s.getAttributeNode("id"))&&i.value===e)return[s];for(o=t.getElementsByName(e),n=0;s=o[n++];)if((i=s.getAttributeNode("id"))&&i.value===e)return[s]}return[]}}),T.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var i,n=[],o=0,s=t.getElementsByTagName(e);if("*"===e){for(;i=s[o++];)1===i.nodeType&&n.push(i);return n}return s},T.find.CLASS=w.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&P)return t.getElementsByClassName(e)},H=[],L=[],(w.qsa=fe.test(I.querySelectorAll))&&(o(function(e){N.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ee+"*(?:value|"+J+")"),e.querySelectorAll("[id~="+R+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||L.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=I.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ee+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),N.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(w.matchesSelector=fe.test($=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&o(function(e){w.disconnectedMatch=$.call(e,"*"),$.call(e,"[s!='']:x"),H.push("!=",ne)}),L=L.length&&new RegExp(L.join("|")),H=H.length&&new RegExp(H.join("|")),t=fe.test(N.compareDocumentPosition),M=t||fe.test(N.contains)?function(e,t){var i=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){if(e===t)return O=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!w.sortDetached&&t.compareDocumentPosition(e)===i?e===I||e.ownerDocument===j&&M(j,e)?-1:t===I||t.ownerDocument===j&&M(j,t)?1:A?Z(A,e)-Z(A,t):0:4&i?-1:1)}:function(e,t){if(e===t)return O=!0,0;var i,n=0,o=e.parentNode,s=t.parentNode,a=[e],l=[t];if(!o||!s)return e===I?-1:t===I?1:o?-1:s?1:A?Z(A,e)-Z(A,t):0;if(o===s)return r(e,t);for(i=e;i=i.parentNode;)a.unshift(i);for(i=t;i=i.parentNode;)l.unshift(i);for(;a[n]===l[n];)n++;return n?r(a[n],l[n]):a[n]===j?-1:l[n]===j?1:0},I):I},t.matches=function(e,i){return t(e,null,null,i)},t.matchesSelector=function(e,i){if((e.ownerDocument||e)!==I&&D(e),i=i.replace(le,"='$1']"),w.matchesSelector&&P&&!q[i+" "]&&(!H||!H.test(i))&&(!L||!L.test(i)))try{var n=$.call(e,i);if(n||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return t(i,I,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==I&&D(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==I&&D(e);var i=T.attrHandle[t.toLowerCase()],n=i&&Y.call(T.attrHandle,t.toLowerCase())?i(e,t,!P):void 0;return void 0!==n?n:w.attributes||!P?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,i=[],n=0,o=0;if(O=!w.detectDuplicates,A=!w.sortStable&&e.slice(0),e.sort(X),O){for(;t=e[o++];)t===e[o]&&(n=i.push(o));for(;n--;)e.splice(i[n],1)}return A=null,e},S=t.getText=function(e){var t,i="",n=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=S(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[n++];)i+=S(t);return i},(T=t.selectors={cacheLength:50,createPseudo:n,match:ue,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,i=!e[6]&&e[2];return ue.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":i&&ce.test(i)&&(t=E(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=F[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&F(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(o){var s=t.attr(o,e);return null==s?"!="===i:!i||(s+="","="===i?s===n:"!="===i?s!==n:"^="===i?n&&0===s.indexOf(n):"*="===i?n&&s.indexOf(n)>-1:"$="===i?n&&s.slice(-n.length)===n:"~="===i?(" "+s.replace(oe," ")+" ").indexOf(n)>-1:"|="===i&&(s===n||s.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,i,n,o){var s="nth"!==e.slice(0,3),r="last"!==e.slice(-4),a="of-type"===t;return 1===n&&0===o?function(e){return!!e.parentNode}:function(t,i,l){var c,d,u,p,h,f,g=s!==r?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){if(s){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;f=g="only"===e&&!f&&"nextSibling"}return!0}if(f=[r?m.firstChild:m.lastChild],r&&y){for(b=(h=(c=(d=(u=(p=m)[R]||(p[R]={}))[p.uniqueID]||(u[p.uniqueID]={}))[e]||[])[0]===W&&c[1])&&c[2],p=h&&m.childNodes[h];p=++h&&p&&p[g]||(b=h=0)||f.pop();)if(1===p.nodeType&&++b&&p===t){d[e]=[W,h,b];break}}else if(y&&(p=t,u=p[R]||(p[R]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),c=d[e]||[],h=c[0]===W&&c[1],b=h),!1===b)for(;(p=++h&&p&&p[g]||(b=h=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(y&&(u=p[R]||(p[R]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),d[e]=[W,b]),p!==t)););return(b-=o)===n||b%n==0&&b/n>=0}}},PSEUDO:function(e,i){var o,s=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return s[R]?s(i):s.length>1?(o=[e,e,"",i],T.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n,o=s(e,i),r=o.length;r--;)n=Z(e,o[r]),e[n]=!(t[n]=o[r])}):function(e){return s(e,0,o)}):s}},pseudos:{not:n(function(e){var t=[],i=[],o=C(e.replace(se,"$1"));return o[R]?n(function(e,t,i,n){for(var s,r=o(e,null,n,[]),a=e.length;a--;)(s=r[a])&&(e[a]=!(t[a]=s))}):function(e,n,s){return t[0]=e,o(t,null,s,i),t[0]=null,!i.pop()}}),has:n(function(e){return function(i){return t(e,i).length>0}}),contains:n(function(e){return e=e.replace(ve,ye),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:n(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var i;do{if(i=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(i=i.toLowerCase())===e||0===i.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var i=e.location&&e.location.hash;return i&&i.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===I.activeElement&&(!I.hasFocus||I.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,i){return[i<0?i+t:i]}),even:l(function(e,t){for(var i=0;i<t;i+=2)e.push(i);return e}),odd:l(function(e,t){for(var i=1;i<t;i+=2)e.push(i);return e}),lt:l(function(e,t,i){for(var n=i<0?i+t:i;--n>=0;)e.push(n);return e}),gt:l(function(e,t,i){for(var n=i<0?i+t:i;++n<t;)e.push(n);return e})}}).pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=function(e){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===e}}(b);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,E=t.tokenize=function(e,i){var n,o,s,r,a,l,c,d=z[e+" "];if(d)return i?0:d.slice(0);for(a=e,l=[],c=T.preFilter;a;){n&&!(o=re.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(s=[])),n=!1,(o=ae.exec(a))&&(n=o.shift(),s.push({value:n,type:o[0].replace(se," ")}),a=a.slice(n.length));for(r in T.filter)!(o=ue[r].exec(a))||c[r]&&!(o=c[r](o))||(n=o.shift(),s.push({value:n,type:r,matches:o}),a=a.slice(n.length));if(!n)break}return i?a.length:a?t.error(e):z(e,l).slice(0)},C=t.compile=function(e,t){var i,n=[],o=[],s=q[e+" "];if(!s){for(t||(t=E(e)),i=t.length;i--;)(s=v(t[i]))[R]?n.push(s):o.push(s);(s=q(e,y(o,n))).selector=e}return s},_=t.select=function(e,t,i,n){var o,s,r,a,l,d="function"==typeof e&&e,p=!n&&E(e=d.selector||e);if(i=i||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(r=s[0]).type&&9===t.nodeType&&P&&T.relative[s[1].type]){if(!(t=(T.find.ID(r.matches[0].replace(ve,ye),t)||[])[0]))return i;d&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(o=ue.needsContext.test(e)?0:s.length;o--&&(r=s[o],!T.relative[a=r.type]);)if((l=T.find[a])&&(n=l(r.matches[0].replace(ve,ye),me.test(s[0].type)&&c(t.parentNode)||t))){if(s.splice(o,1),!(e=n.length&&u(s)))return K.apply(i,n),i;break}}return(d||C(e,p))(n,t,!P,i,!t||me.test(e)&&c(t.parentNode)||t),i},w.sortStable=R.split("").sort(X).join("")===R,w.detectDuplicates=!!O,D(),w.sortDetached=o(function(e){return 1&e.compareDocumentPosition(I.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||s("type|href|height|width",function(e,t,i){if(!i)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||s("value",function(e,t,i){if(!i&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||s(J,function(e,t,i){var n;if(!i)return!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),t}(e);fe.find=be,fe.expr=be.selectors,fe.expr[":"]=fe.expr.pseudos,fe.uniqueSort=fe.unique=be.uniqueSort,fe.text=be.getText,fe.isXMLDoc=be.isXML,fe.contains=be.contains,fe.escapeSelector=be.escape;var we=function(e,t,i){for(var n=[],o=void 0!==i;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&fe(e).is(i))break;n.push(e)}return n},Te=function(e,t){for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);return i},Se=fe.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Ee=/^.[^:#\[\.,]*$/;fe.filter=function(e,t,i){var n=t[0];return i&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?fe.find.matchesSelector(n,e)?[n]:[]:fe.find.matches(e,fe.grep(t,function(e){return 1===e.nodeType}))},fe.fn.extend({find:function(e){var t,i,n=this.length,o=this;if("string"!=typeof e)return this.pushStack(fe(e).filter(function(){for(t=0;t<n;t++)if(fe.contains(o[t],this))return!0}));for(i=this.pushStack([]),t=0;t<n;t++)fe.find(e,o[t],i);return n>1?fe.uniqueSort(i):i},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Se.test(e)?fe(e):e||[],!1).length}});var Ce,_e=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(fe.fn.init=function(e,t,i){var n,o;if(!e)return this;if(i=i||Ce,"string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:_e.exec(e))||!n[1]&&t)return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof fe?t[0]:t,fe.merge(this,fe.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:te,!0)),xe.test(n[1])&&fe.isPlainObject(t))for(n in t)fe.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(o=te.getElementById(n[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):fe.isFunction(e)?void 0!==i.ready?i.ready(e):e(fe):fe.makeArray(e,this)}).prototype=fe.fn,Ce=fe(te);var ke=/^(?:parents|prev(?:Until|All))/,Ae={children:!0,contents:!0,next:!0,prev:!0};fe.fn.extend({has:function(e){var t=fe(e,this),i=t.length;return this.filter(function(){for(var e=0;e<i;e++)if(fe.contains(this,t[e]))return!0})},closest:function(e,t){var i,n=0,o=this.length,s=[],r="string"!=typeof e&&fe(e);if(!Se.test(e))for(;n<o;n++)for(i=this[n];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&fe.find.matchesSelector(i,e))){s.push(i);break}return this.pushStack(s.length>1?fe.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?re.call(fe(e),this[0]):re.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(fe.uniqueSort(fe.merge(this.get(),fe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),fe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return we(e,"parentNode")},parentsUntil:function(e,t,i){return we(e,"parentNode",i)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return we(e,"nextSibling")},prevAll:function(e){return we(e,"previousSibling")},nextUntil:function(e,t,i){return we(e,"nextSibling",i)},prevUntil:function(e,t,i){return we(e,"previousSibling",i)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return o(e,"iframe")?e.contentDocument:(o(e,"template")&&(e=e.content||e),fe.merge([],e.childNodes))}},function(e,t){fe.fn[e]=function(i,n){var o=fe.map(this,t,i);return"Until"!==e.slice(-5)&&(n=i),n&&"string"==typeof n&&(o=fe.filter(n,o)),this.length>1&&(Ae[e]||fe.uniqueSort(o),ke.test(e)&&o.reverse()),this.pushStack(o)}});var Oe=/[^\x20\t\r\n\f]+/g;fe.Callbacks=function(e){e="string"==typeof e?a(e):fe.extend({},e);var t,i,n,o,s=[],r=[],l=-1,c=function(){for(o=o||e.once,n=t=!0;r.length;l=-1)for(i=r.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(l=s.length,i=!1);e.memory||(i=!1),t=!1,o&&(s=i?[]:"")},d={add:function(){return s&&(i&&!t&&(l=s.length-1,r.push(i)),function t(i){fe.each(i,function(i,n){fe.isFunction(n)?e.unique&&d.has(n)||s.push(n):n&&n.length&&"string"!==fe.type(n)&&t(n)})}(arguments),i&&!t&&c()),this},remove:function(){return fe.each(arguments,function(e,t){for(var i;(i=fe.inArray(t,s,i))>-1;)s.splice(i,1),i<=l&&l--}),this},has:function(e){return e?fe.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=r=[],s=i="",this},disabled:function(){return!s},lock:function(){return o=r=[],i||t||(s=i=""),this},locked:function(){return!!o},fireWith:function(e,i){return o||(i=i||[],i=[e,i.slice?i.slice():i],r.push(i),t||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}};return d},fe.extend({Deferred:function(t){var i=[["notify","progress",fe.Callbacks("memory"),fe.Callbacks("memory"),2],["resolve","done",fe.Callbacks("once memory"),fe.Callbacks("once memory"),0,"resolved"],["reject","fail",fe.Callbacks("once memory"),fe.Callbacks("once memory"),1,"rejected"]],n="pending",o={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return fe.Deferred(function(t){fe.each(i,function(i,n){var o=fe.isFunction(e[n[4]])&&e[n[4]];s[n[1]](function(){var e=o&&o.apply(this,arguments);e&&fe.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[n[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,n,o){function s(t,i,n,o){return function(){var a=this,d=arguments,u=function(){var e,u;if(!(t<r)){if((e=n.apply(a,d))===i.promise())throw new TypeError("Thenable self-resolution");u=e&&("object"==typeof e||"function"==typeof e)&&e.then,fe.isFunction(u)?o?u.call(e,s(r,i,l,o),s(r,i,c,o)):(r++,u.call(e,s(r,i,l,o),s(r,i,c,o),s(r,i,l,i.notifyWith))):(n!==l&&(a=void 0,d=[e]),(o||i.resolveWith)(a,d))}},p=o?u:function(){try{u()}catch(e){fe.Deferred.exceptionHook&&fe.Deferred.exceptionHook(e,p.stackTrace),t+1>=r&&(n!==c&&(a=void 0,d=[e]),i.rejectWith(a,d))}};t?p():(fe.Deferred.getStackHook&&(p.stackTrace=fe.Deferred.getStackHook()),e.setTimeout(p))}}var r=0;return fe.Deferred(function(e){i[0][3].add(s(0,e,fe.isFunction(o)?o:l,e.notifyWith)),i[1][3].add(s(0,e,fe.isFunction(t)?t:l)),i[2][3].add(s(0,e,fe.isFunction(n)?n:c))}).promise()},promise:function(e){return null!=e?fe.extend(e,o):o}},s={};return fe.each(i,function(e,t){var r=t[2],a=t[5];o[t[1]]=r.add,a&&r.add(function(){n=a},i[3-e][2].disable,i[0][2].lock),r.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=r.fireWith}),o.promise(s),t&&t.call(s,s),s},when:function(e){var t=arguments.length,i=t,n=Array(i),o=ne.call(arguments),s=fe.Deferred(),r=function(e){return function(i){n[e]=this,o[e]=arguments.length>1?ne.call(arguments):i,--t||s.resolveWith(n,o)}};if(t<=1&&(d(e,s.done(r(i)).resolve,s.reject,!t),"pending"===s.state()||fe.isFunction(o[i]&&o[i].then)))return s.then();for(;i--;)d(o[i],r(i),s.reject);return s.promise()}});var De=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;fe.Deferred.exceptionHook=function(t,i){e.console&&e.console.warn&&t&&De.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,i)},fe.readyException=function(t){e.setTimeout(function(){throw t})};var Ie=fe.Deferred();fe.fn.ready=function(e){return Ie.then(e).catch(function(e){fe.readyException(e)}),this},fe.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--fe.readyWait:fe.isReady)||(fe.isReady=!0,!0!==e&&--fe.readyWait>0||Ie.resolveWith(te,[fe]))}}),fe.ready.then=Ie.then,"complete"===te.readyState||"loading"!==te.readyState&&!te.documentElement.doScroll?e.setTimeout(fe.ready):(te.addEventListener("DOMContentLoaded",u),e.addEventListener("load",u));var Ne=function(e,t,i,n,o,s,r){var a=0,l=e.length,c=null==i;if("object"===fe.type(i)){o=!0;for(a in i)Ne(e,t,a,i[a],!0,s,r)}else if(void 0!==n&&(o=!0,fe.isFunction(n)||(r=!0),c&&(r?(t.call(e,n),t=null):(c=t,t=function(e,t,i){return c.call(fe(e),i)})),t))for(;a<l;a++)t(e[a],i,r?n:n.call(e[a],a,t(e[a],i)));return o?e:c?t.call(e):l?t(e[0],i):s},Pe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};p.uid=1,p.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Pe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,i){var n,o=this.cache(e);if("string"==typeof t)o[fe.camelCase(t)]=i;else for(n in t)o[fe.camelCase(n)]=t[n];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][fe.camelCase(t)]},access:function(e,t,i){return void 0===t||t&&"string"==typeof t&&void 0===i?this.get(e,t):(this.set(e,t,i),void 0!==i?i:t)},remove:function(e,t){var i,n=e[this.expando];if(void 0!==n){if(void 0!==t){Array.isArray(t)?t=t.map(fe.camelCase):(t=fe.camelCase(t),t=t in n?[t]:t.match(Oe)||[]),i=t.length;for(;i--;)delete n[t[i]]}(void 0===t||fe.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!fe.isEmptyObject(t)}};var Le=new p,He=new p,$e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Me=/[A-Z]/g;fe.extend({hasData:function(e){return He.hasData(e)||Le.hasData(e)},data:function(e,t,i){return He.access(e,t,i)},removeData:function(e,t){He.remove(e,t)},_data:function(e,t,i){return Le.access(e,t,i)},_removeData:function(e,t){Le.remove(e,t)}}),fe.fn.extend({data:function(e,t){var i,n,o,s=this[0],r=s&&s.attributes;if(void 0===e){if(this.length&&(o=He.get(s),1===s.nodeType&&!Le.get(s,"hasDataAttrs"))){for(i=r.length;i--;)r[i]&&0===(n=r[i].name).indexOf("data-")&&(n=fe.camelCase(n.slice(5)),f(s,n,o[n]));Le.set(s,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){He.set(this,e)}):Ne(this,function(t){var i;if(s&&void 0===t){if(void 0!==(i=He.get(s,e)))return i;if(void 0!==(i=f(s,e)))return i}else this.each(function(){He.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){He.remove(this,e)})}}),fe.extend({queue:function(e,t,i){var n;if(e)return t=(t||"fx")+"queue",n=Le.get(e,t),i&&(!n||Array.isArray(i)?n=Le.access(e,t,fe.makeArray(i)):n.push(i)),n||[]},dequeue:function(e,t){t=t||"fx";var i=fe.queue(e,t),n=i.length,o=i.shift(),s=fe._queueHooks(e,t);"inprogress"===o&&(o=i.shift(),n--),o&&("fx"===t&&i.unshift("inprogress"),delete s.stop,o.call(e,function(){fe.dequeue(e,t)},s)),!n&&s&&s.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return Le.get(e,i)||Le.access(e,i,{empty:fe.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",i])})})}}),fe.fn.extend({queue:function(e,t){var i=2;return"string"!=typeof e&&(t=e,e="fx",i--),arguments.length<i?fe.queue(this[0],e):void 0===t?this:this.each(function(){var i=fe.queue(this,e,t);fe._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&fe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){fe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,n=1,o=fe.Deferred(),s=this,r=this.length,a=function(){--n||o.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)(i=Le.get(s[r],e+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),o.promise(t)}});var Re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=new RegExp("^(?:([+-])=|)("+Re+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Be=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&fe.contains(e.ownerDocument,e)&&"none"===fe.css(e,"display")},Fe=function(e,t,i,n){var o,s,r={};for(s in t)r[s]=e.style[s],e.style[s]=t[s];o=i.apply(e,n||[]);for(s in t)e.style[s]=r[s];return o},ze={};fe.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Be(this)?fe(this).show():fe(this).hide()})}});var qe=/^(?:checkbox|radio)$/i,Xe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ye=/^$|\/(?:java|ecma)script/i,Ue={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ue.optgroup=Ue.option,Ue.tbody=Ue.tfoot=Ue.colgroup=Ue.caption=Ue.thead,Ue.th=Ue.td;var Ve=/<|&#?\w+;/;!function(){var e=te.createDocumentFragment().appendChild(te.createElement("div")),t=te.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),pe.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",pe.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Ge=te.documentElement,Ke=/^key/,Qe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ze=/^([^.]*)(?:\.(.+)|)/;fe.event={global:{},add:function(e,t,i,n,o){var s,r,a,l,c,d,u,p,h,f,g,m=Le.get(e);if(m)for(i.handler&&(s=i,i=s.handler,o=s.selector),o&&fe.find.matchesSelector(Ge,o),i.guid||(i.guid=fe.guid++),(l=m.events)||(l=m.events={}),(r=m.handle)||(r=m.handle=function(t){return void 0!==fe&&fe.event.triggered!==t.type?fe.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(Oe)||[""]).length;c--;)a=Ze.exec(t[c])||[],h=g=a[1],f=(a[2]||"").split(".").sort(),h&&(u=fe.event.special[h]||{},h=(o?u.delegateType:u.bindType)||h,u=fe.event.special[h]||{},d=fe.extend({type:h,origType:g,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&fe.expr.match.needsContext.test(o),namespace:f.join(".")},s),(p=l[h])||(p=l[h]=[],p.delegateCount=0,u.setup&&!1!==u.setup.call(e,n,f,r)||e.addEventListener&&e.addEventListener(h,r)),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=i.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),fe.event.global[h]=!0)},remove:function(e,t,i,n,o){var s,r,a,l,c,d,u,p,h,f,g,m=Le.hasData(e)&&Le.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(Oe)||[""]).length;c--;)if(a=Ze.exec(t[c])||[],h=g=a[1],f=(a[2]||"").split(".").sort(),h){for(u=fe.event.special[h]||{},p=l[h=(n?u.delegateType:u.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=p.length;s--;)d=p[s],!o&&g!==d.origType||i&&i.guid!==d.guid||a&&!a.test(d.namespace)||n&&n!==d.selector&&("**"!==n||!d.selector)||(p.splice(s,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));r&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,f,m.handle)||fe.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)fe.event.remove(e,h+t[c],i,n,!0);fe.isEmptyObject(l)&&Le.remove(e,"handle events")}},dispatch:function(e){var t,i,n,o,s,r,a=fe.event.fix(e),l=new Array(arguments.length),c=(Le.get(this,"events")||{})[a.type]||[],d=fe.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,a)){for(r=fe.event.handlers.call(this,a,c),t=0;(o=r[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,i=0;(s=o.handlers[i++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(s.namespace)||(a.handleObj=s,a.data=s.data,void 0!==(n=((fe.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,l))&&!1===(a.result=n)&&(a.preventDefault(),a.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,a),a.result}},handlers:function(e,t){var i,n,o,s,r,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],r={},i=0;i<l;i++)n=t[i],o=n.selector+" ",void 0===r[o]&&(r[o]=n.needsContext?fe(o,this).index(c)>-1:fe.find(o,this,null,[c]).length),r[o]&&s.push(n);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(fe.Event.prototype,e,{enumerable:!0,configurable:!0,get:fe.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[fe.expando]?e:new fe.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===x()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&o(this,"input"))return this.click(),!1},_default:function(e){return o(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},fe.removeEvent=function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i)},fe.Event=function(e,t){return this instanceof fe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?T:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&fe.extend(this,t),this.timeStamp=e&&e.timeStamp||fe.now(),void(this[fe.expando]=!0)):new fe.Event(e,t)},fe.Event.prototype={constructor:fe.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=T,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=T,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=T,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},fe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ke.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Qe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},fe.event.addProp),fe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){fe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var i,n=this,o=e.relatedTarget,s=e.handleObj;return o&&(o===n||fe.contains(n,o))||(e.type=s.origType,i=s.handler.apply(this,arguments),e.type=t),i}}}),fe.fn.extend({on:function(e,t,i,n){return E(this,e,t,i,n)},one:function(e,t,i,n){return E(this,e,t,i,n,1)},off:function(e,t,i){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,fe(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(i=t,t=void 0),!1===i&&(i=S),this.each(function(){fe.event.remove(this,e,i,t)})}});var Je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,et=/<script|<style|<link/i,tt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;fe.extend({htmlPrefilter:function(e){return e.replace(Je,"<$1></$2>")},clone:function(e,t,i){var n,o,s,r,a=e.cloneNode(!0),l=fe.contains(e.ownerDocument,e);if(!(pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||fe.isXMLDoc(e)))for(r=y(a),s=y(e),n=0,o=s.length;n<o;n++)O(s[n],r[n]);if(t)if(i)for(s=s||y(e),r=r||y(a),n=0,o=s.length;n<o;n++)A(s[n],r[n]);else A(e,a);return(r=y(a,"script")).length>0&&b(r,!l&&y(e,"script")),a},cleanData:function(e){for(var t,i,n,o=fe.event.special,s=0;void 0!==(i=e[s]);s++)if(Pe(i)){if(t=i[Le.expando]){if(t.events)for(n in t.events)o[n]?fe.event.remove(i,n):fe.removeEvent(i,n,t.handle);i[Le.expando]=void 0}i[He.expando]&&(i[He.expando]=void 0)}}}),fe.fn.extend({detach:function(e){return I(this,e,!0)},remove:function(e){return I(this,e)},text:function(e){return Ne(this,function(e){return void 0===e?fe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return D(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||C(this,e).appendChild(e)})},prepend:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=C(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(fe.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return fe.clone(this,e,t)})},html:function(e){return Ne(this,function(e){var t=this[0]||{},i=0,n=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!et.test(e)&&!Ue[(Xe.exec(e)||["",""])[1].toLowerCase()]){e=fe.htmlPrefilter(e);try{for(;i<n;i++)1===(t=this[i]||{}).nodeType&&(fe.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return D(this,arguments,function(t){var i=this.parentNode;fe.inArray(this,e)<0&&(fe.cleanData(y(this)),i&&i.replaceChild(t,this))},e)}}),fe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){fe.fn[e]=function(e){for(var i,n=[],o=fe(e),s=o.length-1,r=0;r<=s;r++)i=r===s?this:this.clone(!0),fe(o[r])[t](i),se.apply(n,i.get());return this.pushStack(n)}});var ot=/^margin/,st=new RegExp("^("+Re+")(?!px)[a-z%]+$","i"),rt=function(t){var i=t.ownerDocument.defaultView;return i&&i.opener||(i=e),i.getComputedStyle(t)};!function(){function t(){if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ge.appendChild(r);var t=e.getComputedStyle(a);i="1%"!==t.top,s="2px"===t.marginLeft,n="4px"===t.width,a.style.marginRight="50%",o="4px"===t.marginRight,Ge.removeChild(r),a=null}}var i,n,o,s,r=te.createElement("div"),a=te.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",pe.clearCloneStyle="content-box"===a.style.backgroundClip,r.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",r.appendChild(a),fe.extend(pe,{pixelPosition:function(){return t(),i},boxSizingReliable:function(){return t(),n},pixelMarginRight:function(){return t(),o},reliableMarginLeft:function(){return t(),s}}))}();var at=/^(none|table(?!-c[ea]).+)/,lt=/^--/,ct={position:"absolute",visibility:"hidden",display:"block"},dt={letterSpacing:"0",fontWeight:"400"},ut=["Webkit","Moz","ms"],pt=te.createElement("div").style;fe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=N(e,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,i,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,s,r,a=fe.camelCase(t),l=lt.test(t),c=e.style;return l||(t=H(a)),r=fe.cssHooks[t]||fe.cssHooks[a],void 0===i?r&&"get"in r&&void 0!==(o=r.get(e,!1,n))?o:c[t]:("string"===(s=typeof i)&&(o=je.exec(i))&&o[1]&&(i=g(e,t,o),s="number"),void(null!=i&&i===i&&("number"===s&&(i+=o&&o[3]||(fe.cssNumber[a]?"":"px")),pe.clearCloneStyle||""!==i||0!==t.indexOf("background")||(c[t]="inherit"),r&&"set"in r&&void 0===(i=r.set(e,i,n))||(l?c.setProperty(t,i):c[t]=i))))}},css:function(e,t,i,n){var o,s,r,a=fe.camelCase(t);return lt.test(t)||(t=H(a)),(r=fe.cssHooks[t]||fe.cssHooks[a])&&"get"in r&&(o=r.get(e,!0,i)),void 0===o&&(o=N(e,t,n)),"normal"===o&&t in dt&&(o=dt[t]),""===i||i?(s=parseFloat(o),!0===i||isFinite(s)?s||0:o):o}}),fe.each(["height","width"],function(e,t){fe.cssHooks[t]={get:function(e,i,n){if(i)return!at.test(fe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?R(e,t,n):Fe(e,ct,function(){return R(e,t,n)})},set:function(e,i,n){var o,s=n&&rt(e),r=n&&M(e,t,n,"border-box"===fe.css(e,"boxSizing",!1,s),s);return r&&(o=je.exec(i))&&"px"!==(o[3]||"px")&&(e.style[t]=i,i=fe.css(e,t)),$(0,i,r)}}}),fe.cssHooks.marginLeft=P(pe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(N(e,"marginLeft"))||e.getBoundingClientRect().left-Fe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),fe.each({margin:"",padding:"",border:"Width"},function(e,t){fe.cssHooks[e+t]={expand:function(i){for(var n=0,o={},s="string"==typeof i?i.split(" "):[i];n<4;n++)o[e+We[n]+t]=s[n]||s[n-2]||s[0];return o}},ot.test(e)||(fe.cssHooks[e+t].set=$)}),fe.fn.extend({css:function(e,t){return Ne(this,function(e,t,i){var n,o,s={},r=0;if(Array.isArray(t)){for(n=rt(e),o=t.length;r<o;r++)s[t[r]]=fe.css(e,t[r],!1,n);return s}return void 0!==i?fe.style(e,t,i):fe.css(e,t)},e,t,arguments.length>1)}}),fe.Tween=j,j.prototype={constructor:j,init:function(e,t,i,n,o,s){this.elem=e,this.prop=i,this.easing=o||fe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=s||(fe.cssNumber[i]?"":"px")},cur:function(){var e=j.propHooks[this.prop];return e&&e.get?e.get(this):j.propHooks._default.get(this)},run:function(e){var t,i=j.propHooks[this.prop];return this.options.duration?this.pos=t=fe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=fe.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){fe.fx.step[e.prop]?fe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[fe.cssProps[e.prop]]&&!fe.cssHooks[e.prop]?e.elem[e.prop]=e.now:fe.style(e.elem,e.prop,e.now+e.unit)}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},fe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},fe.fx=j.prototype.init,fe.fx.step={};var ht,ft,gt=/^(?:toggle|show|hide)$/,mt=/queueHooks$/;fe.Animation=fe.extend(X,{tweeners:{"*":[function(e,t){var i=this.createTween(e,t);return g(i.elem,e,je.exec(t),i),i}]},tweener:function(e,t){fe.isFunction(e)?(t=e,e=["*"]):e=e.match(Oe);for(var i,n=0,o=e.length;n<o;n++)i=e[n],X.tweeners[i]=X.tweeners[i]||[],X.tweeners[i].unshift(t)},prefilters:[function(e,t,i){var n,o,s,r,a,l,c,d,u="width"in t||"height"in t,p=this,h={},f=e.style,g=e.nodeType&&Be(e),m=Le.get(e,"fxshow");i.queue||(null==(r=fe._queueHooks(e,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,p.always(function(){p.always(function(){r.unqueued--,fe.queue(e,"fx").length||r.empty.fire()})}));for(n in t)if(o=t[n],gt.test(o)){if(delete t[n],s=s||"toggle"===o,o===(g?"hide":"show")){if("show"!==o||!m||void 0===m[n])continue;g=!0}h[n]=m&&m[n]||fe.style(e,n)}if((l=!fe.isEmptyObject(t))||!fe.isEmptyObject(h)){u&&1===e.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=m&&m.display)&&(c=Le.get(e,"display")),"none"===(d=fe.css(e,"display"))&&(c?d=c:(v([e],!0),c=e.style.display||c,d=fe.css(e,"display"),v([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===fe.css(e,"float")&&(l||(p.done(function(){f.display=c}),null==c&&(d=f.display,c="none"===d?"":d)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",p.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),l=!1;for(n in h)l||(m?"hidden"in m&&(g=m.hidden):m=Le.access(e,"fxshow",{display:c}),s&&(m.hidden=!g),g&&v([e],!0),p.done(function(){g||v([e]),Le.remove(e,"fxshow");for(n in h)fe.style(e,n,h[n])})),l=z(g?m[n]:0,n,p),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}}],prefilter:function(e,t){t?X.prefilters.unshift(e):X.prefilters.push(e)}}),fe.speed=function(e,t,i){var n=e&&"object"==typeof e?fe.extend({},e):{complete:i||!i&&t||fe.isFunction(e)&&e,duration:e,easing:i&&t||t&&!fe.isFunction(t)&&t};return fe.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in fe.fx.speeds?n.duration=fe.fx.speeds[n.duration]:n.duration=fe.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){fe.isFunction(n.old)&&n.old.call(this),n.queue&&fe.dequeue(this,n.queue)},n},fe.fn.extend({fadeTo:function(e,t,i,n){return this.filter(Be).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(e,t,i,n){var o=fe.isEmptyObject(e),s=fe.speed(t,i,n),r=function(){var t=X(this,fe.extend({},e),s);(o||Le.get(this,"finish"))&&t.stop(!0)};return r.finish=r,o||!1===s.queue?this.each(r):this.queue(s.queue,r)},stop:function(e,t,i){var n=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof e&&(i=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",s=fe.timers,r=Le.get(this);if(o)r[o]&&r[o].stop&&n(r[o]);else for(o in r)r[o]&&r[o].stop&&mt.test(o)&&n(r[o]);for(o=s.length;o--;)s[o].elem!==this||null!=e&&s[o].queue!==e||(s[o].anim.stop(i),t=!1,s.splice(o,1));!t&&i||fe.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,i=Le.get(this),n=i[e+"queue"],o=i[e+"queueHooks"],s=fe.timers,r=n?n.length:0;for(i.finish=!0,fe.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<r;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete i.finish})}}),fe.each(["toggle","show","hide"],function(e,t){var i=fe.fn[t];fe.fn[t]=function(e,n,o){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(F(t,!0),e,n,o)}}),fe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){fe.fn[e]=function(e,i,n){return this.animate(t,e,i,n)}}),fe.timers=[],fe.fx.tick=function(){var e,t=0,i=fe.timers;for(ht=fe.now();t<i.length;t++)(e=i[t])()||i[t]!==e||i.splice(t--,1);i.length||fe.fx.stop(),ht=void 0},fe.fx.timer=function(e){fe.timers.push(e),fe.fx.start()},fe.fx.interval=13,fe.fx.start=function(){ft||(ft=!0,W())},fe.fx.stop=function(){ft=null},fe.fx.speeds={slow:600,fast:200,_default:400},fe.fn.delay=function(t,i){return t=fe.fx?fe.fx.speeds[t]||t:t,i=i||"fx",this.queue(i,function(i,n){var o=e.setTimeout(i,t);n.stop=function(){e.clearTimeout(o)}})},function(){var e=te.createElement("input"),t=te.createElement("select").appendChild(te.createElement("option"));e.type="checkbox",pe.checkOn=""!==e.value,pe.optSelected=t.selected,(e=te.createElement("input")).value="t",e.type="radio",pe.radioValue="t"===e.value}();var vt,yt=fe.expr.attrHandle;fe.fn.extend({attr:function(e,t){return Ne(this,fe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){fe.removeAttr(this,e)})}}),fe.extend({attr:function(e,t,i){var n,o,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?fe.prop(e,t,i):(1===s&&fe.isXMLDoc(e)||(o=fe.attrHooks[t.toLowerCase()]||(fe.expr.match.bool.test(t)?vt:void 0)),void 0!==i?null===i?void fe.removeAttr(e,t):o&&"set"in o&&void 0!==(n=o.set(e,i,t))?n:(e.setAttribute(t,i+""),i):o&&"get"in o&&null!==(n=o.get(e,t))?n:null==(n=fe.find.attr(e,t))?void 0:n)},attrHooks:{type:{set:function(e,t){if(!pe.radioValue&&"radio"===t&&o(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}},removeAttr:function(e,t){var i,n=0,o=t&&t.match(Oe);if(o&&1===e.nodeType)for(;i=o[n++];)e.removeAttribute(i)}}),vt={set:function(e,t,i){return!1===t?fe.removeAttr(e,i):e.setAttribute(i,i),i}},fe.each(fe.expr.match.bool.source.match(/\w+/g),function(e,t){var i=yt[t]||fe.find.attr;yt[t]=function(e,t,n){var o,s,r=t.toLowerCase();return n||(s=yt[r],yt[r]=o,o=null!=i(e,t,n)?r:null,yt[r]=s),o}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;fe.fn.extend({prop:function(e,t){return Ne(this,fe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[fe.propFix[e]||e]})}}),fe.extend({prop:function(e,t,i){var n,o,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&fe.isXMLDoc(e)||(t=fe.propFix[t]||t,o=fe.propHooks[t]),void 0!==i?o&&"set"in o&&void 0!==(n=o.set(e,i,t))?n:e[t]=i:o&&"get"in o&&null!==(n=o.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){var t=fe.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),pe.optSelected||(fe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),fe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){fe.propFix[this.toLowerCase()]=this}),fe.fn.extend({addClass:function(e){var t,i,n,o,s,r,a,l=0;if(fe.isFunction(e))return this.each(function(t){fe(this).addClass(e.call(this,t,U(this)))});if("string"==typeof e&&e)for(t=e.match(Oe)||[];i=this[l++];)if(o=U(i),n=1===i.nodeType&&" "+Y(o)+" "){for(r=0;s=t[r++];)n.indexOf(" "+s+" ")<0&&(n+=s+" ");o!==(a=Y(n))&&i.setAttribute("class",a)}return this},removeClass:function(e){var t,i,n,o,s,r,a,l=0;if(fe.isFunction(e))return this.each(function(t){fe(this).removeClass(e.call(this,t,U(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Oe)||[];i=this[l++];)if(o=U(i),n=1===i.nodeType&&" "+Y(o)+" "){for(r=0;s=t[r++];)for(;n.indexOf(" "+s+" ")>-1;)n=n.replace(" "+s+" "," ");o!==(a=Y(n))&&i.setAttribute("class",a)}return this},toggleClass:function(e,t){var i=typeof e;return"boolean"==typeof t&&"string"===i?t?this.addClass(e):this.removeClass(e):fe.isFunction(e)?this.each(function(i){fe(this).toggleClass(e.call(this,i,U(this),t),t)}):this.each(function(){var t,n,o,s;if("string"===i)for(n=0,o=fe(this),s=e.match(Oe)||[];t=s[n++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==i||((t=U(this))&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Le.get(this,"__className__")||""))})},hasClass:function(e){var t,i,n=0;for(t=" "+e+" ";i=this[n++];)if(1===i.nodeType&&(" "+Y(U(i))+" ").indexOf(t)>-1)return!0;return!1}});var Tt=/\r/g;fe.fn.extend({val:function(e){var t,i,n,o=this[0];return arguments.length?(n=fe.isFunction(e),this.each(function(i){var o;1===this.nodeType&&(null==(o=n?e.call(this,i,fe(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=fe.map(o,function(e){return null==e?"":e+""})),(t=fe.valHooks[this.type]||fe.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=fe.valHooks[o.type]||fe.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(i=t.get(o,"value"))?i:"string"==typeof(i=o.value)?i.replace(Tt,""):null==i?"":i:void 0}}),fe.extend({valHooks:{option:{get:function(e){var t=fe.find.attr(e,"value");return null!=t?t:Y(fe.text(e))}},select:{get:function(e){var t,i,n,s=e.options,r=e.selectedIndex,a="select-one"===e.type,l=a?null:[],c=a?r+1:s.length;for(n=r<0?c:a?r:0;n<c;n++)if(((i=s[n]).selected||n===r)&&!i.disabled&&(!i.parentNode.disabled||!o(i.parentNode,"optgroup"))){if(t=fe(i).val(),a)return t;l.push(t)}return l},set:function(e,t){for(var i,n,o=e.options,s=fe.makeArray(t),r=o.length;r--;)n=o[r],(n.selected=fe.inArray(fe.valHooks.option.get(n),s)>-1)&&(i=!0);return i||(e.selectedIndex=-1),s}}}}),fe.each(["radio","checkbox"],function(){fe.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=fe.inArray(fe(e).val(),t)>-1}},pe.checkOn||(fe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var St=/^(?:focusinfocus|focusoutblur)$/;fe.extend(fe.event,{trigger:function(t,i,n,o){var s,r,a,l,c,d,u,p=[n||te],h=ce.call(t,"type")?t.type:t,f=ce.call(t,"namespace")?t.namespace.split("."):[];if(r=a=n=n||te,3!==n.nodeType&&8!==n.nodeType&&!St.test(h+fe.event.triggered)&&(h.indexOf(".")>-1&&(f=h.split("."),h=f.shift(),f.sort()),c=h.indexOf(":")<0&&"on"+h,t=t[fe.expando]?t:new fe.Event(h,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=f.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),i=null==i?[t]:fe.makeArray(i,[t]),u=fe.event.special[h]||{},o||!u.trigger||!1!==u.trigger.apply(n,i))){if(!o&&!u.noBubble&&!fe.isWindow(n)){for(l=u.delegateType||h,St.test(l+h)||(r=r.parentNode);r;r=r.parentNode)p.push(r),a=r;a===(n.ownerDocument||te)&&p.push(a.defaultView||a.parentWindow||e)}for(s=0;(r=p[s++])&&!t.isPropagationStopped();)t.type=s>1?l:u.bindType||h,(d=(Le.get(r,"events")||{})[t.type]&&Le.get(r,"handle"))&&d.apply(r,i),(d=c&&r[c])&&d.apply&&Pe(r)&&(t.result=d.apply(r,i),!1===t.result&&t.preventDefault());return t.type=h,o||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(p.pop(),i)||!Pe(n)||c&&fe.isFunction(n[h])&&!fe.isWindow(n)&&((a=n[c])&&(n[c]=null),fe.event.triggered=h,n[h](),fe.event.triggered=void 0,a&&(n[c]=a)),t.result}},simulate:function(e,t,i){var n=fe.extend(new fe.Event,i,{type:e,isSimulated:!0});fe.event.trigger(n,null,t)}}),fe.fn.extend({trigger:function(e,t){return this.each(function(){fe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];if(i)return fe.event.trigger(e,t,i,!0)}}),fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){fe.fn[t]=function(e,i){return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}}),fe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),pe.focusin="onfocusin"in e,pe.focusin||fe.each({focus:"focusin",blur:"focusout"},function(e,t){var i=function(e){fe.event.simulate(t,e.target,fe.event.fix(e))};fe.event.special[t]={setup:function(){var n=this.ownerDocument||this,o=Le.access(n,t);o||n.addEventListener(e,i,!0),Le.access(n,t,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this,o=Le.access(n,t)-1;o?Le.access(n,t,o):(n.removeEventListener(e,i,!0),Le.remove(n,t))}}});var xt=e.location,Et=fe.now(),Ct=/\?/;fe.parseXML=function(t){var i;if(!t||"string"!=typeof t)return null;try{i=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){i=void 0}return i&&!i.getElementsByTagName("parsererror").length||fe.error("Invalid XML: "+t),i};var _t=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;fe.param=function(e,t){var i,n=[],o=function(e,t){var i=fe.isFunction(t)?t():t;n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==i?"":i)};if(Array.isArray(e)||e.jquery&&!fe.isPlainObject(e))fe.each(e,function(){o(this.name,this.value)});else for(i in e)V(i,e[i],t,o);return n.join("&")},fe.fn.extend({serialize:function(){return fe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=fe.prop(this,"elements");return e?fe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!fe(this).is(":disabled")&&Ot.test(this.nodeName)&&!At.test(e)&&(this.checked||!qe.test(e))}).map(function(e,t){var i=fe(this).val();return null==i?null:Array.isArray(i)?fe.map(i,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:i.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,It=/#.*$/,Nt=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,$t=/^\/\//,Mt={},Rt={},jt="*/".concat("*"),Wt=te.createElement("a");Wt.href=xt.href,fe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:Lt.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":jt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":fe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,fe.ajaxSettings),t):Q(fe.ajaxSettings,e)},ajaxPrefilter:G(Mt),ajaxTransport:G(Rt),ajax:function(t,i){function n(t,i,n,a){var c,p,h,w,T,S=i;d||(d=!0,l&&e.clearTimeout(l),o=void 0,r=a||"",x.readyState=t>0?4:0,c=t>=200&&t<300||304===t,n&&(w=Z(f,x,n)),w=J(f,w,x,c),c?(f.ifModified&&((T=x.getResponseHeader("Last-Modified"))&&(fe.lastModified[s]=T),(T=x.getResponseHeader("etag"))&&(fe.etag[s]=T)),204===t||"HEAD"===f.type?S="nocontent":304===t?S="notmodified":(S=w.state,p=w.data,h=w.error,c=!h)):(h=S,!t&&S||(S="error",t<0&&(t=0))),x.status=t,x.statusText=(i||S)+"",c?v.resolveWith(g,[p,S,x]):v.rejectWith(g,[x,S,h]),x.statusCode(b),b=void 0,u&&m.trigger(c?"ajaxSuccess":"ajaxError",[x,f,c?p:h]),y.fireWith(g,[x,S]),u&&(m.trigger("ajaxComplete",[x,f]),--fe.active||fe.event.trigger("ajaxStop")))}"object"==typeof t&&(i=t,t=void 0),i=i||{};var o,s,r,a,l,c,d,u,p,h,f=fe.ajaxSetup({},i),g=f.context||f,m=f.context&&(g.nodeType||g.jquery)?fe(g):fe.event,v=fe.Deferred(),y=fe.Callbacks("once memory"),b=f.statusCode||{},w={},T={},S="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(d){if(!a)for(a={};t=Pt.exec(r);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return d?r:null},setRequestHeader:function(e,t){return null==d&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==d&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(d)x.always(e[x.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||S;return o&&o.abort(t),n(0,t),this}};if(v.promise(x),f.url=((t||f.url||xt.href)+"").replace($t,xt.protocol+"//"),f.type=i.method||i.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(Oe)||[""],null==f.crossDomain){c=te.createElement("a");try{c.href=f.url,c.href=c.href,f.crossDomain=Wt.protocol+"//"+Wt.host!=c.protocol+"//"+c.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=fe.param(f.data,f.traditional)),K(Mt,f,i,x),d)return x;(u=fe.event&&f.global)&&0==fe.active++&&fe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ht.test(f.type),s=f.url.replace(It,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Dt,"+")):(h=f.url.slice(s.length),f.data&&(s+=(Ct.test(s)?"&":"?")+f.data,delete f.data),!1===f.cache&&(s=s.replace(Nt,"$1"),h=(Ct.test(s)?"&":"?")+"_="+Et+++h),f.url=s+h),f.ifModified&&(fe.lastModified[s]&&x.setRequestHeader("If-Modified-Since",fe.lastModified[s]),fe.etag[s]&&x.setRequestHeader("If-None-Match",fe.etag[s])),(f.data&&f.hasContent&&!1!==f.contentType||i.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+jt+"; q=0.01":""):f.accepts["*"]);for(p in f.headers)x.setRequestHeader(p,f.headers[p]);if(f.beforeSend&&(!1===f.beforeSend.call(g,x,f)||d))return x.abort();if(S="abort",y.add(f.complete),x.done(f.success),x.fail(f.error),o=K(Rt,f,i,x)){if(x.readyState=1,u&&m.trigger("ajaxSend",[x,f]),d)return x;f.async&&f.timeout>0&&(l=e.setTimeout(function(){x.abort("timeout")},f.timeout));try{d=!1,o.send(w,n)}catch(e){if(d)throw e;n(-1,e)}}else n(-1,"No Transport");return x},getJSON:function(e,t,i){return fe.get(e,t,i,"json")},getScript:function(e,t){return fe.get(e,void 0,t,"script")}}),fe.each(["get","post"],function(e,t){fe[t]=function(e,i,n,o){return fe.isFunction(i)&&(o=o||n,n=i,i=void 0),fe.ajax(fe.extend({url:e,type:t,dataType:o,data:i,success:n},fe.isPlainObject(e)&&e))}}),fe._evalUrl=function(e){return fe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},fe.fn.extend({wrapAll:function(e){var t;return this[0]&&(fe.isFunction(e)&&(e=e.call(this[0])),t=fe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return fe.isFunction(e)?this.each(function(t){fe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=fe(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=fe.isFunction(e);return this.each(function(i){fe(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){fe(this).replaceWith(this.childNodes)}),this}}),fe.expr.pseudos.hidden=function(e){return!fe.expr.pseudos.visible(e)},fe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},fe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},Ft=fe.ajaxSettings.xhr();pe.cors=!!Ft&&"withCredentials"in Ft,pe.ajax=Ft=!!Ft,fe.ajaxTransport(function(t){var i,n;if(pe.cors||Ft&&!t.crossDomain)return{send:function(o,s){var r,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(r in t.xhrFields)a[r]=t.xhrFields[r];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(r in o)a.setRequestHeader(r,o[r]);i=function(e){return function(){i&&(i=n=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=i(),n=a.onerror=i("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){i&&n()})},i=i("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(i)throw e}},abort:function(){i&&i()}}}),fe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),fe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return fe.globalEval(e),e}}}),fe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),fe.ajaxTransport("script",function(e){if(e.crossDomain){var t,i;return{send:function(n,o){t=fe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",i=function(e){t.remove(),i=null,e&&o("error"===e.type?404:200,e.type)}),te.head.appendChild(t[0])},abort:function(){i&&i()}}}});var zt=[],qt=/(=)\?(?=&|$)|\?\?/;fe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||fe.expando+"_"+Et++;return this[e]=!0,e}}),fe.ajaxPrefilter("json jsonp",function(t,i,n){var o,s,r,a=!1!==t.jsonp&&(qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&qt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=fe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(qt,"$1"+o):!1!==t.jsonp&&(t.url+=(Ct.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return r||fe.error(o+" was not called"),r[0]},t.dataTypes[0]="json",s=e[o],e[o]=function(){r=arguments},n.always(function(){void 0===s?fe(e).removeProp(o):e[o]=s,t[o]&&(t.jsonpCallback=i.jsonpCallback,zt.push(o)),r&&fe.isFunction(s)&&s(r[0]),r=s=void 0}),"script"}),pe.createHTMLDocument=function(){var e=te.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),fe.parseHTML=function(e,t,i){if("string"!=typeof e)return[];"boolean"==typeof t&&(i=t,t=!1);var n,o,s;return t||(pe.createHTMLDocument?(t=te.implementation.createHTMLDocument(""),n=t.createElement("base"),n.href=te.location.href,t.head.appendChild(n)):t=te),o=xe.exec(e),s=!i&&[],o?[t.createElement(o[1])]:(o=w([e],t,s),s&&s.length&&fe(s).remove(),fe.merge([],o.childNodes))},fe.fn.load=function(e,t,i){var n,o,s,r=this,a=e.indexOf(" ");return a>-1&&(n=Y(e.slice(a)),e=e.slice(0,a)),fe.isFunction(t)?(i=t,t=void 0):t&&"object"==typeof t&&(o="POST"),r.length>0&&fe.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){s=arguments,r.html(n?fe("<div>").append(fe.parseHTML(e)).find(n):e)}).always(i&&function(e,t){r.each(function(){i.apply(this,s||[e.responseText,t,e])})}),this},fe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){fe.fn[t]=function(e){return this.on(t,e)}}),fe.expr.pseudos.animated=function(e){return fe.grep(fe.timers,function(t){return e===t.elem}).length},fe.offset={setOffset:function(e,t,i){var n,o,s,r,a,l,c=fe.css(e,"position"),d=fe(e),u={};"static"===c&&(e.style.position="relative"),a=d.offset(),s=fe.css(e,"top"),l=fe.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(n=d.position(),r=n.top,o=n.left):(r=parseFloat(s)||0,o=parseFloat(l)||0),fe.isFunction(t)&&(t=t.call(e,i,fe.extend({},a))),null!=t.top&&(u.top=t.top-a.top+r),null!=t.left&&(u.left=t.left-a.left+o),"using"in t?t.using.call(e,u):d.css(u)}},fe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){fe.offset.setOffset(this,e,t)});var t,i,n,o,s=this[0];return s?s.getClientRects().length?(n=s.getBoundingClientRect(),t=s.ownerDocument,i=t.documentElement,o=t.defaultView,{top:n.top+o.pageYOffset-i.clientTop,left:n.left+o.pageXOffset-i.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,i=this[0],n={top:0,left:0};return"fixed"===fe.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),o(e[0],"html")||(n=e.offset()),n={top:n.top+fe.css(e[0],"borderTopWidth",!0),left:n.left+fe.css(e[0],"borderLeftWidth",!0)}),{top:t.top-n.top-fe.css(i,"marginTop",!0),left:t.left-n.left-fe.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===fe.css(e,"position");)e=e.offsetParent;return e||Ge})}}),fe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var i="pageYOffset"===t;fe.fn[e]=function(n){return Ne(this,function(e,n,o){var s;return fe.isWindow(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===o?s?s[t]:e[n]:void(s?s.scrollTo(i?s.pageXOffset:o,i?o:s.pageYOffset):e[n]=o)},e,n,arguments.length)}}),fe.each(["top","left"],function(e,t){fe.cssHooks[t]=P(pe.pixelPosition,function(e,i){if(i)return i=N(e,t),st.test(i)?fe(e).position()[t]+"px":i})}),fe.each({Height:"height",Width:"width"},function(e,t){fe.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,n){fe.fn[n]=function(o,s){var r=arguments.length&&(i||"boolean"!=typeof o),a=i||(!0===o||!0===s?"margin":"border");return Ne(this,function(t,i,o){var s;return fe.isWindow(t)?0===n.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===o?fe.css(t,i,a):fe.style(t,i,o,a)},t,r?o:void 0,r)}})}),fe.fn.extend({bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,n){return this.on(t,e,i,n)},undelegate:function(e,t,i){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}}),fe.holdReady=function(e){e?fe.readyWait++:fe.ready(!0)},fe.isArray=Array.isArray,fe.parseJSON=JSON.parse,fe.nodeName=o,"function"==typeof define&&define.amd&&define("jquery",[],function(){return fe});var Xt=e.jQuery,Yt=e.$;return fe.noConflict=function(t){return e.$===fe&&(e.$=Yt),t&&e.jQuery===fe&&(e.jQuery=Xt),fe},t||(e.jQuery=e.$=fe),fe}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};(t=function(){var t=0;return function(i,n){var o,s=this;s.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(i),appendDots:e(i),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return e('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},s.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(s,s.initials),s.activeBreakpoint=null,s.animType=null,s.animProp=null,s.breakpoints=[],s.breakpointSettings=[],s.cssTransitions=!1,s.focussed=!1,s.interrupted=!1,s.hidden="hidden",s.paused=!0,s.positionProp=null,s.respondTo=null,s.rowCount=1,s.shouldClick=!0,s.$slider=e(i),s.$slidesCache=null,s.transformType=null,s.transitionType=null,s.visibilityChange="visibilitychange",s.windowWidth=0,s.windowTimer=null,o=e(i).data("slick")||{},s.options=e.extend({},s.defaults,n,o),s.currentSlide=s.options.initialSlide,s.originalSettings=s.options,void 0!==document.mozHidden?(s.hidden="mozHidden",s.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(s.hidden="webkitHidden",s.visibilityChange="webkitvisibilitychange"),s.autoPlay=e.proxy(s.autoPlay,s),s.autoPlayClear=e.proxy(s.autoPlayClear,s),s.autoPlayIterator=e.proxy(s.autoPlayIterator,s),s.changeSlide=e.proxy(s.changeSlide,s),s.clickHandler=e.proxy(s.clickHandler,s),s.selectHandler=e.proxy(s.selectHandler,s),s.setPosition=e.proxy(s.setPosition,s),s.swipeHandler=e.proxy(s.swipeHandler,s),s.dragHandler=e.proxy(s.dragHandler,s),s.keyHandler=e.proxy(s.keyHandler,s),s.instanceUid=t++,s.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,s.registerBreakpoints(),s.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,n){var o=this;if("boolean"==typeof i)n=i,i=null;else if(i<0||i>=o.slideCount)return!1;o.unload(),"number"==typeof i?0===i&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):n?e(t).insertBefore(o.$slides.eq(i)):e(t).insertAfter(o.$slides.eq(i)):!0===n?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var n={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,i):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,i):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),!1===o.options.vertical?(n[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(n)):(n[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(n))},complete:function(){i&&i.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?n[o.animType]="translate3d("+t+"px, 0px, 0px)":n[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(n),i&&setTimeout(function(){o.disableTransition(),i.call()},o.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};!1===t.options.fade?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,n=this;if(!0===n.options.dots&&n.slideCount>n.options.slidesToShow){for(n.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(n.options.dotsClass),t=0;t<=n.getDotCount();t+=1)i.append(e("<li />").append(n.options.customPaging.call(this,n,t)));n.$dots=i.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,n,o,s,r,a=this;if(n=document.createDocumentFragment(),s=a.$slider.children(),a.options.rows>0){for(r=a.options.slidesPerRow*a.options.rows,o=Math.ceil(s.length/r),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var d=e*r+(t*a.options.slidesPerRow+i);s.get(d)&&c.appendChild(s.get(d))}l.appendChild(c)}n.appendChild(l)}a.$slider.empty().append(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var n,o,s,r=this,a=!1,l=r.$slider.width(),c=window.innerWidth||e(window).width();if("window"===r.respondTo?s=c:"slider"===r.respondTo?s=l:"min"===r.respondTo&&(s=Math.min(c,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){o=null;for(n in r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(!1===r.originalSettings.mobileFirst?s<r.breakpoints[n]&&(o=r.breakpoints[n]):s>r.breakpoints[n]&&(o=r.breakpoints[n]));null!==o?null!==r.activeBreakpoint?(o!==r.activeBreakpoint||i)&&(r.activeBreakpoint=o,"unslick"===r.breakpointSettings[o]?r.unslick(o):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[o]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=o):(r.activeBreakpoint=o,"unslick"===r.breakpointSettings[o]?r.unslick(o):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[o]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=o):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t),a=o),t||!1===a||r.$slider.trigger("breakpoint",[r,a])}},t.prototype.changeSlide=function(t,i){var n,o,s,r=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),s=r.slideCount%r.options.slidesToScroll!=0,n=s?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":o=0===n?r.options.slidesToScroll:r.options.slidesToShow-n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,i);break;case"next":o=0===n?r.options.slidesToScroll:n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i;if(t=this.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&((e=t.$slides.children().children()).removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;!1===i.cssTransitions?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var n=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=n.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,n=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++n;else for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)n=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else n=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return n-1},t.prototype.getLeft=function(e){var t,i,n,o,s=this,r=0;return s.slideOffset=0,i=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,o=-1,!0===s.options.vertical&&!0===s.options.centerMode&&(2===s.options.slidesToShow?o=-1.5:1===s.options.slidesToShow&&(o=-2)),r=i*s.options.slidesToShow*o),s.slideCount%s.options.slidesToScroll!=0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(e>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(e-s.slideCount))*s.slideWidth*-1,r=(s.options.slidesToShow-(e-s.slideCount))*i*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,r=s.slideCount%s.options.slidesToScroll*i*-1))):e+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(e+s.options.slidesToShow-s.slideCount)*s.slideWidth,r=(e+s.options.slidesToShow-s.slideCount)*i),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,r=0),!0===s.options.centerMode&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),t=!1===s.options.vertical?e*s.slideWidth*-1+s.slideOffset:e*i*-1+r,!0===s.options.variableWidth&&(n=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow),t=!0===s.options.rtl?n[0]?-1*(s.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===s.options.centerMode&&(n=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow+1),t=!0===s.options.rtl?n[0]?-1*(s.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,t+=(s.$list.width()-n.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,n=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(i=-1*t.options.slidesToScroll,n=-1*t.options.slidesToScroll,e=2*t.slideCount);i<e;)o.push(i),i=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,n=this;return i=!0===n.options.centerMode?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,!0===n.options.swipeToSlide?(n.$slideTrack.find(".slick-slide").each(function(o,s){if(s.offsetLeft-i+e(s).outerWidth()/2>-1*n.swipeLeft)return t=s,!1}),Math.abs(e(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this,i=Math.ceil(t.slideCount/t.options.slidesToShow),n=t.getNavigableIndexes().filter(function(e){return e>=0&&e<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){var o=n.indexOf(i);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+i,tabindex:-1}),-1!==o){var s="slick-slide-control"+t.instanceUid+o;e("#"+s).length&&e(this).attr({"aria-describedby":s})}}),t.$dots.attr("role","tablist").find("li").each(function(o){var s=n[o];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+o,"aria-controls":"slick-slide"+t.instanceUid+s,"aria-label":o+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=t.currentSlide,s=o+t.options.slidesToShow;o<s;o++)t.options.focusOnChange?t.$slides.eq(o).attr({tabindex:"0"}):t.$slides.eq(o).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),n=e(this).attr("data-srcset"),o=e(this).attr("data-sizes")||s.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){t.animate({opacity:0},100,function(){n&&(t.attr("srcset",n),o&&t.attr("sizes",o)),t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,i])})},r.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,i])},r.src=i})}var i,n,o,s=this;if(!0===s.options.centerMode?!0===s.options.infinite?o=(n=s.currentSlide+(s.options.slidesToShow/2+1))+s.options.slidesToShow+2:(n=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=s.options.slidesToShow/2+1+2+s.currentSlide):(n=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,o=Math.ceil(n+s.options.slidesToShow),!0===s.options.fade&&(n>0&&n--,o<=s.slideCount&&o++)),i=s.$slider.find(".slick-slide").slice(n,o),"anticipated"===s.options.lazyLoad)for(var r=n-1,a=o,l=s.$slider.find(".slick-slide"),c=0;c<s.options.slidesToScroll;c++)r<0&&(r=s.slideCount-1),i=(i=i.add(l.eq(r))).add(l.eq(a)),r--,a++;t(i),s.slideCount<=s.options.slidesToShow?t(s.$slider.find(".slick-slide")):s.currentSlide>=s.slideCount-s.options.slidesToShow?t(s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow)):0===s.currentSlide&&t(s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var i=this;i.unslicked||(i.$slider.trigger("afterChange",[i,t]),i.animating=!1,i.slideCount>i.options.slidesToShow&&i.setPosition(),i.swipeLeft=null,i.options.autoplay&&i.autoPlay(),!0===i.options.accessibility&&(i.initADA(),i.options.focusOnChange&&e(i.$slides.get(i.currentSlide)).attr("tabindex",0).focus()))},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,n,o,s,r,a=this,l=e("img[data-lazy]",a.$slider);l.length?(i=l.first(),n=i.attr("data-lazy"),o=i.attr("data-srcset"),s=i.attr("data-sizes")||a.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){o&&(i.attr("srcset",o),s&&i.attr("sizes",s)),i.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,n]),a.progressiveLazyLoad()},r.onerror=function(){t<3?setTimeout(function(){a.progressiveLazyLoad(t+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,n]),a.progressiveLazyLoad())},r.src=n):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var i,n,o=this;n=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>n&&(o.currentSlide=n),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),i=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:i}),o.init(),t||o.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,n,o=this,s=o.options.responsive||null;if("array"===e.type(s)&&s.length){o.respondTo=o.options.respondTo||"window";for(t in s)if(n=o.breakpoints.length-1,s.hasOwnProperty(t)){for(i=s[t].breakpoint;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===i&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(i),o.breakpointSettings[i]=s[t].settings}o.breakpoints.sort(function(e,t){return o.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var n=this;if(e="boolean"==typeof e?!0===(t=e)?0:n.slideCount-1:!0===t?--e:e,n.slideCount<1||e<0||e>n.slideCount-1)return!1;n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(e).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,n.reinit()},t.prototype.setCSS=function(e){var t,i,n=this,o={};!0===n.options.rtl&&(e=-e),t="left"==n.positionProp?Math.ceil(e)+"px":"0px",i="top"==n.positionProp?Math.ceil(e)+"px":"0px",o[n.positionProp]=e,!1===n.transformsEnabled?n.$slideTrack.css(o):(o={},!1===n.cssTransitions?(o[n.animType]="translate("+t+", "+i+")",n.$slideTrack.css(o)):(o[n.animType]="translate3d("+t+", "+i+", 0px)",n.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(n,o){t=i.slideWidth*n*-1,!0===i.options.rtl?e(o).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,i,n,o,s,r=this,a=!1;if("object"===e.type(arguments[0])?(n=arguments[0],a=arguments[1],s="multiple"):"string"===e.type(arguments[0])&&(n=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?s="responsive":void 0!==arguments[1]&&(s="single")),"single"===s)r.options[n]=o;else if("multiple"===s)e.each(n,function(e,t){r.options[e]=t});else if("responsive"===s)for(i in o)if("array"!==e.type(r.options.responsive))r.options.responsive=[o[i]];else{for(t=r.options.responsive.length-1;t>=0;)r.options.responsive[t].breakpoint===o[i].breakpoint&&r.options.responsive.splice(t,1),t--;r.options.responsive.push(o[i])}a&&(r.unload(),r.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,i,n,o,s=this;if(i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(e).addClass("slick-current"),!0===s.options.centerMode){var r=s.options.slidesToShow%2==0?1:0;t=Math.floor(s.options.slidesToShow/2),!0===s.options.infinite&&(e>=t&&e<=s.slideCount-1-t?s.$slides.slice(e-t+r,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(n=s.options.slidesToShow+e,i.slice(n-t+1+r,n+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):e===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=s.slideCount-s.options.slidesToShow?s.$slides.slice(e,e+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(o=s.slideCount%s.options.slidesToShow,n=!0===s.options.infinite?s.options.slidesToShow+e:e,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-e<s.options.slidesToShow?i.slice(n-(s.options.slidesToShow-o),n+o).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==s.options.lazyLoad&&"anticipated"!==s.options.lazyLoad||s.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,n,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(i=null,o.slideCount>o.options.slidesToShow)){for(n=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-n;t-=1)i=t-1,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<n+o.slideCount;t+=1)i=t,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,n=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(n.attr("data-slick-index"));o||(o=0),i.slideCount<=i.options.slidesToShow?i.slideHandler(o,!1,!0):i.slideHandler(o)},t.prototype.slideHandler=function(e,t,i){var n,o,s,r,a,l=null,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))if(!1===t&&c.asNavFor(e),n=e,l=c.getLeft(n),r=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?r:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(r,function(){c.postSlide(n)}):c.postSlide(n));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(r,function(){c.postSlide(n)}):c.postSlide(n));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=n<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+n:n>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:n-c.slideCount:n,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),s=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==i?(c.fadeSlideOut(s),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight();!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o)}},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,n,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(t,e),(n=Math.round(180*i/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&n>=0?!1===o.options.rtl?"left":"right":n<=360&&n>=315?!1===o.options.rtl?"left":"right":n>=135&&n<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?n>=35&&n<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,n=this;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1,!1;if(n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),void 0===n.touchObject.curX)return!1;if(!0===n.touchObject.edgeHit&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(i=n.swipeDirection()){case"left":case"down":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1}"vertical"!=i&&(n.slideHandler(t),n.touchObject={},n.$slider.trigger("swipe",[n,i]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,n,o,s,r,a=this;return s=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||s&&1!==s.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==s?s[0].pageX:e.clientX,a.touchObject.curY=void 0!==s?s[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&r>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=r),i=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),n=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(n=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+n*o:a.swipeLeft=t+n*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=t+n*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,i=this;if(i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow)return i.touchObject={},!1;void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,i.dragging=!0},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,n=this,o=arguments[0],s=Array.prototype.slice.call(arguments,1),r=n.length;for(e=0;e<r;e++)if("object"==typeof o||void 0===o?n[e].slick=new t(n[e],o):i=n[e].slick[o].apply(n[e].slick,s),void 0!==i)return i;return n}}),function(e,t,i){function n(i,n){this.wrapper="string"==typeof i?t.querySelector(i):i,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!a.hasPointer,disableTouch:a.hasPointer||!a.hasTouch,disableMouse:a.hasPointer||a.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===e.onmousedown};for(var o in n)this.options[o]=n[o];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(e,i,n){var o=t.createElement("div"),s=t.createElement("div");return!0===n&&(o.style.cssText="position:absolute;z-index:9999",s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),s.className="iScrollIndicator","h"==e?(!0===n&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",s.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(!0===n&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",s.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",i||(o.style.pointerEvents="none"),o.appendChild(s),o}function s(i,n){this.wrapper="string"==typeof n.el?t.querySelector(n.el):n.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=i,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var o in n)this.options[o]=n[o];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(a.addEvent(this.indicator,"touchstart",this),a.addEvent(e,"touchend",this)),this.options.disablePointer||(a.addEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.addEvent(e,a.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(a.addEvent(this.indicator,"mousedown",this),a.addEvent(e,"mouseup",this))),this.options.fade){this.wrapperStyle[a.style.transform]=this.scroller.translateZ;var s=a.style.transitionDuration;if(!s)return;this.wrapperStyle[s]=a.isBadAndroid?"0.0001ms":"0ms";var l=this;a.isBadAndroid&&r(function(){"0.0001ms"===l.wrapperStyle[s]&&(l.wrapperStyle[s]="0s")}),this.wrapperStyle.opacity="0"}}var r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},a=function(){function n(e){return!1!==r&&(""===r?e:r+e.charAt(0).toUpperCase()+e.substr(1))}var o={},s=t.createElement("div").style,r=function(){for(var e=["t","webkitT","MozT","msT","OT"],t=0,i=e.length;t<i;t++)if(e[t]+"ransform"in s)return e[t].substr(0,e[t].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(e,t){for(var i in t)e[i]=t[i]},o.addEvent=function(e,t,i,n){e.addEventListener(t,i,!!n)},o.removeEvent=function(e,t,i,n){e.removeEventListener(t,i,!!n)},o.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},o.momentum=function(e,t,n,o,s,r){var a,l,c=e-t,d=i.abs(c)/n;return r=void 0===r?6e-4:r,a=e+d*d/(2*r)*(c<0?-1:1),l=d/r,a<o?(a=s?o-s/2.5*(d/8):o,l=(c=i.abs(a-e))/d):a>0&&(a=s?s/2.5*(d/8):0,l=(c=i.abs(e)+a)/d),{destination:i.round(a),duration:l}};var a=n("transform");return o.extend(o,{hasTransform:!1!==a,hasPerspective:n("perspective")in s,hasTouch:"ontouchstart"in e,hasPointer:!(!e.PointerEvent&&!e.MSPointerEvent),hasTransition:n("transition")in s}),o.isBadAndroid=function(){var t=e.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),o.extend(o.style={},{transform:a,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin")}),o.hasClass=function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},o.addClass=function(e,t){if(!o.hasClass(e,t)){var i=e.className.split(" ");i.push(t),e.className=i.join(" ")}},o.removeClass=function(e,t){if(o.hasClass(e,t)){var i=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(i," ")}},o.offset=function(e){for(var t=-e.offsetLeft,i=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,i-=e.offsetTop;return{left:t,top:i}},o.preventDefaultException=function(e,t){for(var i in t)if(t[i].test(e[i]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return i.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){return(e-=1)*e*(5*e+4)+1}},bounce:{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){return 0===e?0:1==e?1:.4*i.pow(2,-10*e)*i.sin((e-.055)*(2*i.PI)/.22)+1}}}),o.tap=function(e,i){var n=t.createEvent("Event");n.initEvent(i,!0,!0),n.pageX=e.pageX,n.pageY=e.pageY,e.target.dispatchEvent(n)},o.click=function(i){var n,o=i.target;/(SELECT|INPUT|TEXTAREA)/i.test(o.tagName)||((n=t.createEvent(e.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),n.view=i.view||e,n.detail=1,n.screenX=o.screenX||0,n.screenY=o.screenY||0,n.clientX=o.clientX||0,n.clientY=o.clientY||0,n.ctrlKey=!!i.ctrlKey,n.altKey=!!i.altKey,n.shiftKey=!!i.shiftKey,n.metaKey=!!i.metaKey,n.button=0,n.relatedTarget=null,n._constructed=!0,o.dispatchEvent(n))},o}();n.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(e){if(1!=a.eventType[e.type]){if(0!==(e.which?e.button:e.button<2?0:4==e.button?1:2))return}if(this.enabled&&(!this.initiated||a.eventType[e.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault();var t,n=e.touches?e.touches[0]:e;this.initiated=a.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,t=this.getComputedPosition(),this._translate(i.round(t.x),i.round(t.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&a.eventType[e.type]===this.initiated){this.options.preventDefault&&e.preventDefault();var t,n,o,s,r=e.touches?e.touches[0]:e,l=r.pageX-this.pointX,c=r.pageY-this.pointY,d=a.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=l,this.distY+=c,o=i.abs(this.distX),s=i.abs(this.distY),!(d-this.endTime>300&&o<10&&s<10)){if(this.directionLocked||this.options.freeScroll||(o>s+this.options.directionLockThreshold?this.directionLocked="h":s>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,t=this.x+l,n=this.y+c,(t>0||t<this.maxScrollX)&&(t=this.options.bounce?this.x+l/3:t>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+c/3:n>0?0:this.maxScrollY),this.directionX=l>0?-1:l<0?1:0,this.directionY=c>0?-1:c<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(t,n),d-this.startTime>300&&(this.startTime=d,this.startX=this.x,this.startY=this.y)}}},_end:function(e){if(this.enabled&&a.eventType[e.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault();e.changedTouches&&e.changedTouches[0];var t,n,o=a.getTime()-this.startTime,s=i.round(this.x),r=i.round(this.y),l=i.abs(s-this.startX),c=i.abs(r-this.startY),d=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(s,r),!this.moved)return this.options.tap&&a.tap(e,this.options.tap),this.options.click&&a.click(e),void this._execEvent("scrollCancel");if(this._events.flick&&o<200&&l<100&&c<100)this._execEvent("flick");else{if(this.options.momentum&&o<300&&(t=this.hasHorizontalScroll?a.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:s,duration:0},n=this.hasVerticalScroll?a.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},s=t.destination,r=n.destination,d=i.max(t.duration,n.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(s,r);this.currentPage=p,d=this.options.snapSpeed||i.max(i.max(i.min(i.abs(s-p.x),1e3),i.min(i.abs(r-p.y),1e3)),300),s=p.x,r=p.y,this.directionX=0,this.directionY=0,u=this.options.bounceEasing}if(s!=this.x||r!=this.y)return(s>0||s<this.maxScrollX||r>0||r<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(s,r,d,u);this._execEvent("scrollEnd")}}}},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,i=this.y;return e=e||0,!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(t!=this.x||i!=this.y)&&(this.scrollTo(t,i,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(this._events[e]){var i=this._events[e].indexOf(t);i>-1&&this._events[e].splice(i,1)}},_execEvent:function(e){if(this._events[e]){var t=0,i=this._events[e].length;if(i)for(;t<i;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,i,n){e=this.x+e,t=this.y+t,i=i||0,this.scrollTo(e,t,i,n)},scrollTo:function(e,t,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0;var o=this.options.useTransition&&n.style;!i||o?(o&&(this._transitionTimingFunction(n.style),this._transitionTime(i)),this._translate(e,t)):this._animate(e,t,i,n.fn)},scrollToElement:function(e,t,n,o,s){if(e=e.nodeType?e:this.scroller.querySelector(e)){var r=a.offset(e);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,!0===n&&(n=i.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=i.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=n||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,t=void 0===t||null===t||"auto"===t?i.max(i.abs(this.x-r.left),i.abs(this.y-r.top)):t,this.scrollTo(r.left,r.top,t,s)}},_transitionTime:function(e){if(this.options.useTransition){e=e||0;var t=a.style.transitionDuration;if(t){if(this.scrollerStyle[t]=e+"ms",!e&&a.isBadAndroid){this.scrollerStyle[t]="0.0001ms";var i=this;r(function(){"0.0001ms"===i.scrollerStyle[t]&&(i.scrollerStyle[t]="0s")})}if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(e)}}},_transitionTimingFunction:function(e){if(this.scrollerStyle[a.style.transitionTimingFunction]=e,this.indicators)for(var t=this.indicators.length;t--;)this.indicators[t].transitionTimingFunction(e)},_translate:function(e,t){if(this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(e=i.round(e),t=i.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t,this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].updatePosition()},_initEvents:function(t){var i=t?a.removeEvent:a.addEvent,n=this.options.bindToWrapper?this.wrapper:e;i(e,"orientationchange",this),i(e,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(n,"mousemove",this),i(n,"mousecancel",this),i(n,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,a.prefixPointerEvent("pointerdown"),this),i(n,a.prefixPointerEvent("pointermove"),this),i(n,a.prefixPointerEvent("pointercancel"),this),i(n,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(n,"touchmove",this),i(n,"touchcancel",this),i(n,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,n=e.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((n=n[a.style.transform].split(")")[0].split(", "))[12]||n[4]),i=+(n[13]||n[5])):(t=+n.left.replace(/[^-\d.]/g,""),i=+n.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){function e(e){if(a.indicators)for(var t=a.indicators.length;t--;)e.call(a.indicators[t])}var t,i=this.options.interactiveScrollbars,n="string"!=typeof this.options.scrollbars,r=[],a=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:o("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),r.push(t)),this.options.scrollX&&(t={el:o("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),r.push(t))),this.options.indicators&&(r=r.concat(this.options.indicators));for(var l=r.length;l--;)this.indicators.push(new s(this,r[l]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){e(function(){this.fade()})}),this.on("scrollCancel",function(){e(function(){this.fade()})}),this.on("scrollStart",function(){e(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){e(function(){this.fade(1,!0)})})),this.on("refresh",function(){e(function(){this.refresh()})}),this.on("destroy",function(){e(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){a.addEvent(this.wrapper,"wheel",this),a.addEvent(this.wrapper,"mousewheel",this),a.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,a.removeEvent(this.wrapper,"wheel",this),a.removeEvent(this.wrapper,"mousewheel",this),a.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(this.enabled){var t,n,o,s,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r.options.snap||r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in e)1===e.deltaMode?(t=-e.deltaX*this.options.mouseWheelSpeed,n=-e.deltaY*this.options.mouseWheelSpeed):(t=-e.deltaX,n=-e.deltaY);else if("wheelDeltaX"in e)t=e.wheelDeltaX/120*this.options.mouseWheelSpeed,n=e.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in e)t=n=e.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in e))return;t=n=-e.detail/3*this.options.mouseWheelSpeed}if(t*=this.options.invertWheelDirection,n*=this.options.invertWheelDirection,this.hasVerticalScroll||(t=n,n=0),this.options.snap)return o=this.currentPage.pageX,s=this.currentPage.pageY,t>0?o--:t<0&&o++,n>0?s--:n<0&&s++,void this.goToPage(o,s);o=this.x+i.round(this.hasHorizontalScroll?t:0),s=this.y+i.round(this.hasVerticalScroll?n:0),this.directionX=t>0?-1:t<0?1:0,this.directionY=n>0?-1:n<0?1:0,o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),s>0?s=0:s<this.maxScrollY&&(s=this.maxScrollY),this.scrollTo(o,s,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e,t,n,o,s,r,a=0,l=0,c=0,d=this.options.snapStepX||this.wrapperWidth,u=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(n=i.round(d/2),o=i.round(u/2);c>-this.scrollerWidth;){for(this.pages[a]=[],e=0,s=0;s>-this.scrollerHeight;)this.pages[a][e]={x:i.max(c,this.maxScrollX),y:i.max(s,this.maxScrollY),width:d,height:u,cx:c-n,cy:s-o},s-=u,e++;c-=d,a++}else for(e=(r=this.options.snap).length,t=-1;a<e;a++)(0===a||r[a].offsetLeft<=r[a-1].offsetLeft)&&(l=0,t++),this.pages[l]||(this.pages[l]=[]),c=i.max(-r[a].offsetLeft,this.maxScrollX),s=i.max(-r[a].offsetTop,this.maxScrollY),n=c-i.round(r[a].offsetWidth/2),o=s-i.round(r[a].offsetHeight/2),this.pages[l][t]={x:c,y:s,width:r[a].offsetWidth,height:r[a].offsetHeight,cx:n,cy:o},c>this.maxScrollX&&l++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var e=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.x-this.startX),1e3),i.min(i.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var n=0,o=this.pages.length,s=0;if(i.abs(e-this.absStartX)<this.snapThresholdX&&i.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage;for(e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),t>0?t=0:t<this.maxScrollY&&(t=this.maxScrollY);n<o;n++)if(e>=this.pages[n][0].cx){e=this.pages[n][0].x;break}for(o=this.pages[n].length;s<o;s++)if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}return n==this.currentPage.pageX&&((n+=this.directionX)<0?n=0:n>=this.pages.length&&(n=this.pages.length-1),e=this.pages[n][0].x),s==this.currentPage.pageY&&((s+=this.directionY)<0?s=0:s>=this.pages[0].length&&(s=this.pages[0].length-1),t=this.pages[0][s].y),{x:e,y:t,pageX:n,pageY:s}},goToPage:function(e,t,n,o){o=o||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[e].length?t=this.pages[e].length-1:t<0&&(t=0);var s=this.pages[e][t].x,r=this.pages[e][t].y;n=void 0===n?this.options.snapSpeed||i.max(i.max(i.min(i.abs(s-this.x),1e3),i.min(i.abs(r-this.y),1e3)),300):n,this.currentPage={x:s,y:r,pageX:e,pageY:t},this.scrollTo(s,r,n,o)},next:function(e,t){var i=this.currentPage.pageX,n=this.currentPage.pageY;++i>=this.pages.length&&this.hasVerticalScroll&&(i=0,n++),this.goToPage(i,n,e,t)},prev:function(e,t){var i=this.currentPage.pageX,n=this.currentPage.pageY;--i<0&&this.hasVerticalScroll&&(i=0,n--),this.goToPage(i,n,e,t)},_initKeys:function(t){var i,n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in n)this.options.keyBindings[i]=this.options.keyBindings[i]||n[i];a.addEvent(e,"keydown",this),this.on("destroy",function(){a.removeEvent(e,"keydown",this)})},_key:function(e){if(this.enabled){var t,n=this.options.snap,o=n?this.currentPage.pageX:this.x,s=n?this.currentPage.pageY:this.y,r=a.getTime(),l=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(t=this.getComputedPosition(),this._translate(i.round(t.x),i.round(t.y)),this.isInTransition=!1),this.keyAcceleration=r-l<200?i.min(this.keyAcceleration+.25,50):0,e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=n?1:this.wrapperWidth:s+=n?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=n?1:this.wrapperWidth:s-=n?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=n?this.pages.length-1:this.maxScrollX,s=n?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,s=0;break;case this.options.keyBindings.left:o+=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:s+=n?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:s-=n?1:5+this.keyAcceleration>>0;break;default:return}n?this.goToPage(o,s):(o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),s>0?(s=0,this.keyAcceleration=0):s<this.maxScrollY&&(s=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,s,0),this.keyTime=r)}},_animate:function(e,t,i,n){function o(){var p,h,f,g=a.getTime();if(g>=u)return s.isAnimating=!1,s._translate(e,t),void(s.resetPosition(s.options.bounceTime)||s._execEvent("scrollEnd"));f=n(g=(g-d)/i),p=(e-l)*f+l,h=(t-c)*f+c,s._translate(p,h),s.isAnimating&&r(o)}var s=this,l=this.x,c=this.y,d=a.getTime(),u=d+i;this.isAnimating=!0,o()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":this.enabled&&!e._constructed&&(e.preventDefault(),e.stopPropagation())}}},s.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(a.removeEvent(this.indicator,"touchstart",this),a.removeEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.removeEvent(this.indicator,"mousedown",this),a.removeEvent(e,"touchmove",this),a.removeEvent(e,a.prefixPointerEvent("pointermove"),this),a.removeEvent(e,"mousemove",this),a.removeEvent(e,"touchend",this),a.removeEvent(e,a.prefixPointerEvent("pointerup"),this),a.removeEvent(e,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=a.getTime(),this.options.disableTouch||a.addEvent(e,"touchmove",this),this.options.disablePointer||a.addEvent(e,a.prefixPointerEvent("pointermove"),this),this.options.disableMouse||a.addEvent(e,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t,i,n,o,s=e.touches?e.touches[0]:e;a.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,t=s.pageX-this.lastPointX,this.lastPointX=s.pageX,i=s.pageY-this.lastPointY,this.lastPointY=s.pageY,n=this.x+t,o=this.y+i,this._pos(n,o),e.preventDefault(),e.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),a.removeEvent(e,"touchmove",this),a.removeEvent(e,a.prefixPointerEvent("pointermove"),this),a.removeEvent(e,"mousemove",this),this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.scroller.x-n.x),1e3),i.min(i.abs(this.scroller.y-n.y),1e3)),300);this.scroller.x==n.x&&this.scroller.y==n.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0;var t=a.style.transitionDuration;if(t&&(this.indicatorStyle[t]=e+"ms",!e&&a.isBadAndroid)){this.indicatorStyle[t]="0.0001ms";var i=this;r(function(){"0.0001ms"===i.indicatorStyle[t]&&(i.indicatorStyle[t]="0s")})}},transitionTimingFunction:function(e){this.indicatorStyle[a.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(a.addClass(this.wrapper,"iScrollBothScrollbars"),a.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(a.removeClass(this.wrapper,"iScrollBothScrollbars"),a.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=i.max(i.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=i.max(i.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&i.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&i.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(e<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=i.max(this.indicatorWidth+e,8),this.indicatorStyle.width=this.width+"px"),e=this.minBoundaryX):e>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=i.max(this.indicatorWidth-(e-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",e=this.maxPosX+this.indicatorWidth-this.width):e=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),t<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=i.max(this.indicatorHeight+3*t,8),this.indicatorStyle.height=this.height+"px"),t=this.minBoundaryY):t>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=i.max(this.indicatorHeight-3*(t-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",t=this.maxPosY+this.indicatorHeight-this.height):t=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=e,this.y=t,this.scroller.options.useTransform?this.indicatorStyle[a.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=e+"px",this.indicatorStyle.top=t+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?i.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?i.round(t/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(e,t)},fade:function(e,t){if(!t||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var i=e?250:500,n=e?0:300;e=e?"1":"0",this.wrapperStyle[a.style.transitionDuration]=i+"ms",this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e,this.visible=+e}.bind(this,e),n)}}},n.utils=a,"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):e.IScroll=n}(window,document,Math),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(i){return t(i,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=t(require("jquery"),e,e.document,e.Math):t(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,t,i,n,o){"use strict";var s="fullpage-wrapper",r="."+s,a="fp-responsive",l="fp-notransition",c="fp-destroyed",d="fp-enabled",u="fp-viewing",p="active",h="."+p,f="fp-completely",g="."+f,m="fp-section",v="."+m,y=v+h,b=v+":first",w=v+":last",T="fp-tableCell",S="."+T,x="fp-auto-height",E="fp-normal-scroll",C="fp-nav",_="#"+C,k="fp-tooltip",A="."+k,O="fp-show-active",D="fp-slide",I="."+D,N=I+h,P="fp-slides",L="."+P,H="fp-slidesContainer",$="."+H,M="fp-table",R="fp-slidesNav",j="."+R,W=j+" a",B=".fp-controlArrow",F="fp-prev",z="fp-controlArrow "+F,q=B+("."+F),X="fp-controlArrow fp-next",Y=B+".fp-next",U=e(t),V=e(i),G={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(Q){function Z(t,i){t||Vt(0),Zt("autoScrolling",t,i);var n=e(y);Q.autoScrolling&&!Q.scrollBar?(ti.css({overflow:"hidden",height:"100%"}),J(_i.recordHistory,"internal"),ui.css({"-ms-touch-action":"none","touch-action":"none"}),n.length&&Vt(n.position().top)):(ti.css({overflow:"visible",height:"initial"}),J(!1,"internal"),ui.css({"-ms-touch-action":"","touch-action":""}),n.length&&ti.scrollTop(n.position().top))}function J(e,t){Zt("recordHistory",e,t)}function ee(e,t){Zt("scrollingSpeed",e,t)}function te(e,t){Zt("fitToSection",e,t)}function ie(e){e?(Bt(),Ft()):(Wt(),zt())}function ne(t,i){void 0!==i?(i=i.replace(/ /g,"").split(","),e.each(i,function(e,i){Kt(t,i,"m")})):t?(ie(!0),qt()):(ie(!1),Xt())}function oe(t,i){void 0!==i?(i=i.replace(/ /g,"").split(","),e.each(i,function(e,i){Kt(t,i,"k")})):Q.keyboardScrolling=t}function se(){var t=e(y).prev(v);t.length||!Q.loopTop&&!Q.continuousVertical||(t=e(v).last()),t.length&&Fe(t,null,!0)}function re(){var t=e(y).next(v);t.length||!Q.loopBottom&&!Q.continuousVertical||(t=e(v).first()),t.length&&Fe(t,null,!1)}function ae(e,t){ee(0,"internal"),le(e,t),ee(_i.scrollingSpeed,"internal")}function le(e,t){var i=Dt(e);void 0!==t?Nt(e,t):i.length>0&&Fe(i)}function ce(e){je("right",e)}function de(e){je("left",e)}function ue(t){if(!ui.hasClass(c)){hi=!0,pi=U.height(),e(v).each(function(){var t=e(this).find(L),i=e(this).find(I);Q.verticalCentered&&e(this).find(S).css("height",At(e(this))+"px"),e(this).css("height",pi+"px"),Q.scrollOverflow&&(i.length?i.each(function(){_t(e(this))}):_t(e(this))),i.length>1&&ht(t,t.find(N))});var i=e(y).index(v);i&&ae(i+1),hi=!1,e.isFunction(Q.afterResize)&&t&&Q.afterResize.call(ui),e.isFunction(Q.afterReBuild)&&!t&&Q.afterReBuild.call(ui)}}function pe(t){var i=ii.hasClass(a);t?i||(Z(!1,"internal"),te(!1,"internal"),e(_).hide(),ii.addClass(a),e.isFunction(Q.afterResponsive)&&Q.afterResponsive.call(ui,t)):i&&(Z(_i.autoScrolling,"internal"),te(_i.autoScrolling,"internal"),e(_).show(),ii.removeClass(a),e.isFunction(Q.afterResponsive)&&Q.afterResponsive.call(ui,t))}function he(){var t=ui.find(Q.sectionSelector);Q.anchors.length||(Q.anchors=t.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),Q.navigationTooltips.length||(Q.navigationTooltips=t.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function fe(){ui.css({height:"100%",position:"relative"}),ui.addClass(s),e("html").addClass(d),pi=U.height(),ui.removeClass(c),ye(),e(v).each(function(t){var i=e(this),n=i.find(I),o=n.length;me(i,t),ve(i,t),o>0?ge(i,n,o):Q.verticalCentered&&kt(i)}),Q.fixedElements&&Q.css3&&e(Q.fixedElements).appendTo(ii),Q.navigation&&we(),Se(),Q.scrollOverflow?("complete"===i.readyState&&Te(),U.on("load",Te)):Ce()}function ge(t,i,n){var o=100*n,s=100/n;i.wrapAll('<div class="'+H+'" />'),i.parent().wrap('<div class="'+P+'" />'),t.find($).css("width",o+"%"),n>1&&(Q.controlArrows&&be(t),Q.slidesNavigation&&Lt(t,n)),i.each(function(t){e(this).css("width",s+"%"),Q.verticalCentered&&kt(e(this))});var r=t.find(N);r.length&&(0!==e(y).index(v)||0===e(y).index(v)&&0!==r.index())?Ut(r,"internal"):i.eq(0).addClass(p)}function me(t,i){i||0!==e(y).length||t.addClass(p),ai=e(y),t.css("height",pi+"px"),Q.paddingTop&&t.css("padding-top",Q.paddingTop),Q.paddingBottom&&t.css("padding-bottom",Q.paddingBottom),void 0!==Q.sectionsColor[i]&&t.css("background-color",Q.sectionsColor[i]),void 0!==Q.anchors[i]&&t.attr("data-anchor",Q.anchors[i])}function ve(t,i){void 0!==Q.anchors[i]&&t.hasClass(p)&&xt(Q.anchors[i],i),Q.menu&&Q.css3&&e(Q.menu).closest(r).length&&e(Q.menu).appendTo(ii)}function ye(){ui.find(Q.sectionSelector).addClass(m),ui.find(Q.slideSelector).addClass(D)}function be(e){e.find(L).after('<div class="'+z+'"></div><div class="'+X+'"></div>'),"#fff"!=Q.controlArrowColor&&(e.find(Y).css("border-color","transparent transparent transparent "+Q.controlArrowColor),e.find(q).css("border-color","transparent "+Q.controlArrowColor+" transparent transparent")),Q.loopHorizontal||e.find(q).hide()}function we(){ii.append('<div id="'+C+'"><ul></ul></div>');var t=e(_);t.addClass(function(){return Q.showActiveTooltip?O+" "+Q.navigationPosition:Q.navigationPosition});for(var i=0;i<e(v).length;i++){var n="";Q.anchors.length&&(n=Q.anchors[i]);var o='<li><a href="#'+n+'"><span></span></a>',s=Q.navigationTooltips[i];void 0!==s&&""!==s&&(o+='<div class="'+k+" "+Q.navigationPosition+'">'+s+"</div>"),o+="</li>",t.find("ul").append(o)}e(_).css("margin-top","-"+e(_).height()/2+"px"),e(_).find("li").eq(e(y).index(v)).find("a").addClass(p)}function Te(){e(v).each(function(){var t=e(this).find(I);t.length?t.each(function(){_t(e(this))}):_t(e(this))}),Ce()}function Se(){ui.find('iframe[src*="youtube.com/embed/"]').each(function(){xe(e(this),"enablejsapi=1")})}function xe(e,t){var i=e.attr("src");e.attr("src",i+Ee(i)+t)}function Ee(e){return/\?/.test(e)?"&":"?"}function Ce(){var t=e(y);t.addClass(f),Q.scrollOverflowHandler.afterRender&&Q.scrollOverflowHandler.afterRender(t),Ge(t),Ke(t),Q.scrollOverflowHandler.afterLoad(),_e()&&e.isFunction(Q.afterLoad)&&Q.afterLoad.call(t,t.data("anchor"),t.index(v)+1),e.isFunction(Q.afterRender)&&Q.afterRender.call(ui)}function _e(){var e=t.location.hash.replace("#","").split("/"),i=Dt(decodeURIComponent(e[0]));return!i.length||i.length&&i.index()===ai.index()}function ke(){var t;if(!Q.autoScrolling||Q.scrollBar){var n=U.scrollTop(),o=De(n),s=0,r=n+U.height()/2,a=ii.height()-U.height()===n,l=i.querySelectorAll(v);if(a)s=l.length-1;else if(n)for(var c=0;c<l.length;++c)l[c].offsetTop<=r&&(s=c);else s=0;if(Oe(o)&&(e(y).hasClass(f)||e(y).addClass(f).siblings().removeClass(f)),!(t=e(l).eq(s)).hasClass(p)){ki=!0;var d,u,h=e(y),g=h.index(v)+1,m=Et(t),b=t.data("anchor"),w=t.index(v)+1,T=t.find(N);T.length&&(u=T.data("anchor"),d=T.index()),gi&&(t.addClass(p).siblings().removeClass(p),e.isFunction(Q.onLeave)&&Q.onLeave.call(h,g,w,m),e.isFunction(Q.afterLoad)&&Q.afterLoad.call(t,b,w),Ze(h),Ge(t),Ke(t),xt(b,w-1),Q.anchors.length&&(oi=b),Ht(d,u,b,w)),clearTimeout(Ti),Ti=setTimeout(function(){ki=!1},100)}Q.fitToSection&&(clearTimeout(Si),Si=setTimeout(function(){Q.fitToSection&&Ae()},Q.fitToSectionDelay))}}function Ae(){gi&&(hi=!0,Fe(e(y)),hi=!1)}function Oe(t){var i=e(y).position().top,n=i+U.height();return"up"==t?n>=U.scrollTop()+U.height():i<=U.scrollTop()}function De(e){var t=e>Ai?"down":"up";return Ai=e,Li=e,t}function Ie(e,t){if(vi.m[e]){var i="down"===e?"bottom":"top",n="down"===e?re:se;if(t.length>0){if(!Q.scrollOverflowHandler.isScrolled(i,t))return!0;n()}else n()}}function Ne(e){var t=e.originalEvent;!Le(e.target)&&Q.autoScrolling&&He(t)&&e.preventDefault()}function Pe(t){var i=t.originalEvent,o=e(i.target).closest(v);if(!Le(t.target)&&He(i)){Q.autoScrolling&&t.preventDefault();var s=Q.scrollOverflowHandler.scrollable(o),r=Yt(i);Ii=r.y,Ni=r.x,o.find(L).length&&n.abs(Di-Ni)>n.abs(Oi-Ii)?!li&&n.abs(Di-Ni)>U.outerWidth()/100*Q.touchSensitivity&&(Di>Ni?vi.m.right&&ce(o):vi.m.left&&de(o)):Q.autoScrolling&&gi&&n.abs(Oi-Ii)>U.height()/100*Q.touchSensitivity&&(Oi>Ii?Ie("down",s):Ii>Oi&&Ie("up",s))}}function Le(t,i){i=i||0;var n=e(t).parent();return!!(i<Q.normalScrollElementTouchThreshold&&n.is(Q.normalScrollElements))||i!=Q.normalScrollElementTouchThreshold&&Le(n,++i)}function He(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function $e(e){var t=e.originalEvent;if(Q.fitToSection&&ti.stop(),He(t)){var i=Yt(t);Oi=i.y,Di=i.x}}function Me(e,t){for(var i=0,o=e.slice(n.max(e.length-t,1)),s=0;s<o.length;s++)i+=o[s];return n.ceil(i/t)}function Re(i){var o=(new Date).getTime(),s=e(g).hasClass(E);if(Q.autoScrolling&&!ri&&!s){var r=(i=i||t.event).wheelDelta||-i.deltaY||-i.detail,a=n.max(-1,n.min(1,r)),l=void 0!==i.wheelDeltaX||void 0!==i.deltaX,c=n.abs(i.wheelDeltaX)<n.abs(i.wheelDelta)||n.abs(i.deltaX)<n.abs(i.deltaY)||!l;mi.length>149&&mi.shift(),mi.push(n.abs(r)),Q.scrollBar&&(i.preventDefault?i.preventDefault():i.returnValue=!1);var d=e(y),u=Q.scrollOverflowHandler.scrollable(d),p=o-Pi;return Pi=o,p>200&&(mi=[]),gi&&Me(mi,10)>=Me(mi,70)&&c&&(a<0?Ie("down",u):Ie("up",u)),!1}Q.fitToSection&&ti.stop()}function je(t,i){var n=(void 0===i?e(y):i).find(L),o=n.find(I).length;if(!(!n.length||li||o<2)){var s=n.find(N),r=null;if(!(r="left"===t?s.prev(I):s.next(I)).length){if(!Q.loopHorizontal)return;r="left"===t?s.siblings(":last"):s.siblings(":first")}li=!0,ht(n,r,t)}}function We(){e(N).each(function(){Ut(e(this),"internal")})}function Be(e){var t=e.position(),i=t.top,n=t.top>Li,o=i-pi+e.outerHeight(),s=Q.bigSectionsDestination;return e.outerHeight()>pi?(n||s)&&"bottom"!==s||(i=o):(n||hi&&e.is(":last-child"))&&(i=o),Li=i,i}function Fe(t,i,n){if(void 0!==t){var o,s,r={element:t,callback:i,isMovementUp:n,dtop:Be(t),yMovement:Et(t),anchorLink:t.data("anchor"),sectionIndex:t.index(v),activeSlide:t.find(N),activeSection:e(y),leavingSection:e(y).index(v)+1,localIsResizing:hi};r.activeSection.is(t)&&!hi||Q.scrollBar&&U.scrollTop()===r.dtop&&!t.hasClass(x)||(r.activeSlide.length&&(o=r.activeSlide.data("anchor"),s=r.activeSlide.index()),Q.autoScrolling&&Q.continuousVertical&&void 0!==r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&(r=Xe(r)),e.isFunction(Q.onLeave)&&!r.localIsResizing&&!1===Q.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement)||(r.localIsResizing||Ze(r.activeSection),Q.scrollOverflowHandler.beforeLeave(),t.addClass(p).siblings().removeClass(p),Ge(t),Q.scrollOverflowHandler.onLeave(),gi=!1,Ht(s,o,r.anchorLink,r.sectionIndex),ze(r),oi=r.anchorLink,xt(r.anchorLink,r.sectionIndex)))}}function ze(t){if(Q.css3&&Q.autoScrolling&&!Q.scrollBar)Ot("translate3d(0px, -"+n.round(t.dtop)+"px, 0px)",!0),Q.scrollingSpeed?(clearTimeout(bi),bi=setTimeout(function(){Ue(t)},Q.scrollingSpeed)):Ue(t);else{var i=qe(t);e(i.element).animate(i.options,Q.scrollingSpeed,Q.easing).promise().done(function(){Q.scrollBar?setTimeout(function(){Ue(t)},30):Ue(t)})}}function qe(e){var t={};return Q.autoScrolling&&!Q.scrollBar?(t.options={top:-e.dtop},t.element=r):(t.options={scrollTop:e.dtop},t.element="html, body"),t}function Xe(t){return t.isMovementUp?e(y).before(t.activeSection.nextAll(v)):e(y).after(t.activeSection.prevAll(v).get().reverse()),Vt(e(y).position().top),We(),t.wrapAroundElements=t.activeSection,t.dtop=t.element.position().top,t.yMovement=Et(t.element),t}function Ye(t){t.wrapAroundElements&&t.wrapAroundElements.length&&(t.isMovementUp?e(b).before(t.wrapAroundElements):e(w).after(t.wrapAroundElements),Vt(e(y).position().top),We())}function Ue(t){Ye(t),e.isFunction(Q.afterLoad)&&!t.localIsResizing&&Q.afterLoad.call(t.element,t.anchorLink,t.sectionIndex+1),Q.scrollOverflowHandler.afterLoad(),t.localIsResizing||Ke(t.element),t.element.addClass(f).siblings().removeClass(f),gi=!0,e.isFunction(t.callback)&&t.callback.call(this)}function Ve(e,t){e.attr(t,e.data(t)).removeAttr("data-"+t)}function Ge(t){if(Q.lazyLoading){var i;Je(t).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function(){i=e(this),e.each(["src","srcset"],function(e,t){var n=i.attr("data-"+t);void 0!==n&&n&&Ve(i,t)}),i.is("source")&&i.closest("video").get(0).load()})}}function Ke(t){var i=Je(t);i.find("video, audio").each(function(){var t=e(this).get(0);t.hasAttribute("data-autoplay")&&"function"==typeof t.play&&t.play()}),i.find('iframe[src*="youtube.com/embed/"]').each(function(){var t=e(this).get(0);t.hasAttribute("data-autoplay")&&Qe(t),t.onload=function(){t.hasAttribute("data-autoplay")&&Qe(t)}})}function Qe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ze(t){var i=Je(t);i.find("video, audio").each(function(){var t=e(this).get(0);t.hasAttribute("data-keepplaying")||"function"!=typeof t.pause||t.pause()}),i.find('iframe[src*="youtube.com/embed/"]').each(function(){var t=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!t.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Je(t){var i=t.find(N);return i.length&&(t=e(i)),t}function et(){var e=t.location.hash.replace("#","").split("/"),i=decodeURIComponent(e[0]),n=decodeURIComponent(e[1]);i&&(Q.animateAnchor?Nt(i,n):ae(i,n))}function tt(){if(!ki&&!Q.lockAnchors){var e=t.location.hash.replace("#","").split("/"),i=decodeURIComponent(e[0]),n=decodeURIComponent(e[1]),o=void 0===oi,s=void 0===oi&&void 0===n&&!li;i.length&&(i&&i!==oi&&!o||s||!li&&si!=n)&&Nt(i,n)}}function it(t){clearTimeout(xi);var i=e(":focus");if(!i.is("textarea")&&!i.is("input")&&!i.is("select")&&"true"!==i.attr("contentEditable")&&""!==i.attr("contentEditable")&&Q.keyboardScrolling&&Q.autoScrolling){var n=t.which,o=[40,38,32,33,34];e.inArray(n,o)>-1&&t.preventDefault(),ri=t.ctrlKey,xi=setTimeout(function(){ut(t)},150)}}function nt(){e(this).prev().trigger("click")}function ot(e){fi&&(ri=e.ctrlKey)}function st(e){2==e.which&&(Hi=e.pageY,ui.on("mousemove",pt))}function rt(e){2==e.which&&ui.off("mousemove")}function at(){var t=e(this).closest(v);e(this).hasClass(F)?vi.m.left&&de(t):vi.m.right&&ce(t)}function lt(){fi=!1,ri=!1}function ct(t){t.preventDefault();var i=e(this).parent().index();Fe(e(v).eq(i))}function dt(t){t.preventDefault();var i=e(this).closest(v).find(L);ht(i,i.find(I).eq(e(this).closest("li").index()))}function ut(t){var i=t.shiftKey;if(gi||!([37,39].indexOf(t.which)<0))switch(t.which){case 38:case 33:vi.k.up&&se();break;case 32:if(i&&vi.k.up){se();break}case 40:case 34:vi.k.down&&re();break;case 36:vi.k.up&&le(1);break;case 35:vi.k.down&&le(e(v).length);break;case 37:vi.k.left&&de();break;case 39:vi.k.right&&ce();break;default:return}}function pt(e){gi&&(e.pageY<Hi&&vi.m.up?se():e.pageY>Hi&&vi.m.down&&re()),Hi=e.pageY}function ht(t,i,n){var o=t.closest(v),s={slides:t,destiny:i,direction:n,destinyPos:i.position(),slideIndex:i.index(),section:o,sectionIndex:o.index(v),anchorLink:o.data("anchor"),slidesNav:o.find(j),slideAnchor:Mt(i),prevSlide:o.find(N),prevSlideIndex:o.find(N).index(),localIsResizing:hi};s.xMovement=Ct(s.prevSlideIndex,s.slideIndex),s.localIsResizing||(gi=!1),Q.onSlideLeave&&!s.localIsResizing&&"none"!==s.xMovement&&e.isFunction(Q.onSlideLeave)&&!1===Q.onSlideLeave.call(s.prevSlide,s.anchorLink,s.sectionIndex+1,s.prevSlideIndex,s.xMovement,s.slideIndex)?li=!1:(i.addClass(p).siblings().removeClass(p),s.localIsResizing||(Ze(s.prevSlide),Ge(i)),!Q.loopHorizontal&&Q.controlArrows&&(o.find(q).toggle(0!==s.slideIndex),o.find(Y).toggle(!i.is(":last-child"))),o.hasClass(p)&&!s.localIsResizing&&Ht(s.slideIndex,s.slideAnchor,s.anchorLink,s.sectionIndex),gt(t,s,!0))}function ft(t){mt(t.slidesNav,t.slideIndex),t.localIsResizing||(e.isFunction(Q.afterSlideLoad)&&Q.afterSlideLoad.call(t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex),gi=!0,Ke(t.destiny)),li=!1}function gt(e,t,i){var o=t.destinyPos;if(Q.css3){var s="translate3d(-"+n.round(o.left)+"px, 0px, 0px)";bt(e.find($)).css(Gt(s)),wi=setTimeout(function(){i&&ft(t)},Q.scrollingSpeed,Q.easing)}else e.animate({scrollLeft:n.round(o.left)},Q.scrollingSpeed,Q.easing,function(){i&&ft(t)})}function mt(e,t){e.find(h).removeClass(p),e.find("li").eq(t).find("a").addClass(p)}function vt(){if(yt(),ci){var t=e(i.activeElement);if(!t.is("textarea")&&!t.is("input")&&!t.is("select")){var o=U.height();n.abs(o-$i)>20*n.max($i,o)/100&&(ue(!0),$i=o)}}else clearTimeout(yi),yi=setTimeout(function(){ue(!0)},350)}function yt(){var e=Q.responsive||Q.responsiveWidth,t=Q.responsiveHeight,i=e&&U.outerWidth()<e,n=t&&U.height()<t;e&&t?pe(i||n):e?pe(i):t&&pe(n)}function bt(e){var t="all "+Q.scrollingSpeed+"ms "+Q.easingcss3;return e.removeClass(l),e.css({"-webkit-transition":t,transition:t})}function wt(e){return e.addClass(l)}function Tt(t,i){Q.navigation&&(e(_).find(h).removeClass(p),t?e(_).find('a[href="#'+t+'"]').addClass(p):e(_).find("li").eq(i).find("a").addClass(p))}function St(t){Q.menu&&(e(Q.menu).find(h).removeClass(p),e(Q.menu).find('[data-menuanchor="'+t+'"]').addClass(p))}function xt(e,t){St(e),Tt(e,t)}function Et(t){var i=e(y).index(v),n=t.index(v);return i==n?"none":i>n?"up":"down"}function Ct(e,t){return e==t?"none":e>t?"left":"right"}function _t(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var t,i=Q.scrollOverflowHandler,n=i.wrapContent(),o=e.closest(v),s=i.scrollable(e);s.length?t=i.scrollHeight(e):(t=e.get(0).scrollHeight,Q.verticalCentered&&(t=e.find(S).get(0).scrollHeight));var r=pi-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));t>r?s.length?i.update(e,r):(Q.verticalCentered?e.find(S).wrapInner(n):e.wrapInner(n),i.create(e,r)):i.remove(e),e.css("overflow","")}}function kt(e){e.hasClass(M)||e.addClass(M).wrapInner('<div class="'+T+'" style="height:'+At(e)+'px;" />')}function At(e){var t=pi;if(Q.paddingTop||Q.paddingBottom){var i=e;i.hasClass(m)||(i=e.closest(v));var n=parseInt(i.css("padding-top"))+parseInt(i.css("padding-bottom"));t=pi-n}return t}function Ot(e,t){t?bt(ui):wt(ui),ui.css(Gt(e)),setTimeout(function(){ui.removeClass(l)},10)}function Dt(t){if(!t)return[];var i=ui.find(v+'[data-anchor="'+t+'"]');return i.length||(i=e(v).eq(t-1)),i}function It(e,t){var i=t.find(L),n=i.find(I+'[data-anchor="'+e+'"]');return n.length||(n=i.find(I).eq(e)),n}function Nt(e,t){var i=Dt(e);i.length&&(void 0===t&&(t=0),e===oi||i.hasClass(p)?Pt(i,t):Fe(i,function(){Pt(i,t)}))}function Pt(e,t){if(void 0!==t){var i=e.find(L),n=It(t,e);n.length&&ht(i,n)}}function Lt(e,t){e.append('<div class="'+R+'"><ul></ul></div>');var i=e.find(j);i.addClass(Q.slidesNavPosition);for(var n=0;n<t;n++)i.find("ul").append('<li><a href="#"><span></span></a></li>');i.css("margin-left","-"+i.width()/2+"px"),i.find("li").first().find("a").addClass(p)}function Ht(e,t,i,n){var o="";Q.anchors.length&&!Q.lockAnchors&&(e?(void 0!==i&&(o=i),void 0===t&&(t=e),si=t,$t(o+"/"+t)):void 0!==e?(si=t,$t(i)):$t(i)),Rt()}function $t(e){if(Q.recordHistory)location.hash=e;else if(ci||di)t.history.replaceState(o,o,"#"+e);else{var i=t.location.href.split("#")[0];t.location.replace(i+"#"+e)}}function Mt(e){var t=e.data("anchor"),i=e.index();return void 0===t&&(t=i),t}function Rt(){var t=e(y),i=t.find(N),n=Mt(t),o=Mt(i),s=String(n);i.length&&(s=s+"-"+o),s=s.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+u+"-[^\\s]+\\b","g");ii[0].className=ii[0].className.replace(r,""),ii.addClass(u+"-"+s)}function jt(){var e,n=i.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};i.body.insertBefore(n,null);for(var r in s)n.style[r]!==o&&(n.style[r]="translate3d(1px,1px,1px)",e=t.getComputedStyle(n).getPropertyValue(s[r]));return i.body.removeChild(n),e!==o&&e.length>0&&"none"!==e}function Wt(){i.addEventListener?(i.removeEventListener("mousewheel",Re,!1),i.removeEventListener("wheel",Re,!1),i.removeEventListener("MozMousePixelScroll",Re,!1)):i.detachEvent("onmousewheel",Re)}function Bt(){var e,n="";t.addEventListener?e="addEventListener":(e="attachEvent",n="on");var s="onwheel"in i.createElement("div")?"wheel":i.onmousewheel!==o?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==s?i[e](n+"MozMousePixelScroll",Re,!1):i[e](n+s,Re,!1)}function Ft(){ui.on("mousedown",st).on("mouseup",rt)}function zt(){ui.off("mousedown",st).off("mouseup",rt)}function qt(){(ci||di)&&(Q.autoScrolling&&ii.off(Ci.touchmove).on(Ci.touchmove,Ne),e(r).off(Ci.touchstart).on(Ci.touchstart,$e).off(Ci.touchmove).on(Ci.touchmove,Pe))}function Xt(){(ci||di)&&e(r).off(Ci.touchstart).off(Ci.touchmove)}function Yt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,di&&He(e)&&Q.scrollBar&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Ut(e,t){ee(0,"internal"),void 0!==t&&(hi=!0),ht(e.closest(L),e),void 0!==t&&(hi=!1),ee(_i.scrollingSpeed,"internal")}function Vt(e){var t=n.round(e);Q.css3&&Q.autoScrolling&&!Q.scrollBar?Ot("translate3d(0px, -"+t+"px, 0px)",!1):Q.autoScrolling&&!Q.scrollBar?ui.css("top",-t):ti.scrollTop(t)}function Gt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Kt(e,t,i){switch(t){case"up":vi[i].up=e;break;case"down":vi[i].down=e;break;case"left":vi[i].left=e;break;case"right":vi[i].right=e;break;case"all":"m"==i?ne(e):oe(e)}}function Qt(){Vt(0),ui.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){Ve(e(this),"src")}),ui.find("img[data-srcset]").each(function(){Ve(e(this),"srcset")}),e(_+", "+j+", "+B).remove(),e(v).css({height:"","background-color":"",padding:""}),e(I).css({width:""}),ui.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ti.css({overflow:"",height:""}),e("html").removeClass(d),ii.removeClass(a),e.each(ii.get(0).className.split(/\s+/),function(e,t){0===t.indexOf(u)&&ii.removeClass(t)}),e(v+", "+I).each(function(){Q.scrollOverflowHandler.remove(e(this)),e(this).removeClass(M+" "+p)}),wt(ui),ui.find(S+", "+$+", "+L).each(function(){e(this).replaceWith(this.childNodes)}),ui.css({"-webkit-transition":"none",transition:"none"}),ti.scrollTop(0);var t=[m,D,H];e.each(t,function(t,i){e("."+i).removeClass(i)})}function Zt(e,t,i){Q[e]=t,"internal"!==i&&(_i[e]=t)}function Jt(){var t=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];e("html").hasClass(d)?ei("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(Q.continuousVertical&&(Q.loopTop||Q.loopBottom)&&(Q.continuousVertical=!1,ei("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),Q.scrollBar&&Q.scrollOverflow&&ei("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!Q.continuousVertical||!Q.scrollBar&&Q.autoScrolling||(Q.continuousVertical=!1,ei("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(t,function(e,t){Q[t]&&ei("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+t)}),e.each(Q.anchors,function(t,i){var n=V.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==i.toLowerCase()}),o=V.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==i.toLowerCase()});(o.length||n.length)&&(ei("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),o.length&&ei("error",'"'+i+'" is is being used by another element `id` property'),n.length&&ei("error",'"'+i+'" is is being used by another element `name` property'))}))}function ei(e,t){console&&console[e]&&console[e]("fullPage: "+t)}if(e("html").hasClass(d))Jt();else{var ti=e("html, body"),ii=e("body"),ni=e.fn.fullpage;Q=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:K,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},Q);var oi,si,ri,ai,li=!1,ci=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),di="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,ui=e(this),pi=U.height(),hi=!1,fi=!0,gi=!0,mi=[],vi={};vi.m={up:!0,down:!0,left:!0,right:!0},vi.k=e.extend(!0,{},vi.m);var yi,bi,wi,Ti,Si,xi,Ei=t.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Ci={touchmove:"ontouchmove"in t?"touchmove":Ei.move,touchstart:"ontouchstart"in t?"touchstart":Ei.down},_i=e.extend(!0,{},Q);Jt(),G.click=di,G=e.extend(G,Q.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,t,i,n,o){return(t/=o/2)<1?n/2*t*t*t+i:n/2*((t-=2)*t*t+2)+i}}),e(this).length&&(ni.setAutoScrolling=Z,ni.setRecordHistory=J,ni.setScrollingSpeed=ee,ni.setFitToSection=te,ni.setLockAnchors=function(e){Q.lockAnchors=e},ni.setMouseWheelScrolling=ie,ni.setAllowScrolling=ne,ni.setKeyboardScrolling=oe,ni.moveSectionUp=se,ni.moveSectionDown=re,ni.silentMoveTo=ae,ni.moveTo=le,ni.moveSlideRight=ce,ni.moveSlideLeft=de,ni.fitToSection=Ae,ni.reBuild=ue,ni.setResponsive=pe,ni.destroy=function(t){Z(!1,"internal"),ne(!1),oe(!1),ui.addClass(c),clearTimeout(wi),clearTimeout(bi),clearTimeout(yi),clearTimeout(Ti),clearTimeout(Si),U.off("scroll",ke).off("hashchange",tt).off("resize",vt),V.off("click touchstart",_+" a").off("mouseenter",_+" li").off("mouseleave",_+" li").off("click touchstart",W).off("mouseover",Q.normalScrollElements).off("mouseout",Q.normalScrollElements),e(v).off("click touchstart",B),clearTimeout(wi),clearTimeout(bi),t&&Qt()},Q.css3&&(Q.css3=jt()),Q.scrollBar=Q.scrollBar||Q.hybrid,he(),fe(),ne(!0),Z(Q.autoScrolling,"internal"),yt(),Rt(),"complete"===i.readyState&&et(),U.on("load",et),U.on("scroll",ke).on("hashchange",tt).blur(lt).resize(vt),V.keydown(it).keyup(ot).on("click touchstart",_+" a",ct).on("click touchstart",W,dt).on("click",A,nt),e(v).on("click touchstart",B,at),Q.normalScrollElements&&(V.on("mouseenter",Q.normalScrollElements,function(){ie(!1)}),V.on("mouseleave",Q.normalScrollElements,function(){ie(!0)})));var ki=!1,Ai=0,Oi=0,Di=0,Ii=0,Ni=0,Pi=(new Date).getTime(),Li=0,Hi=0,$i=pi}},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var K={refreshId:null,iScrollInstances:[],toggleWheel:function(t){e(y).find(".fp-scrollable").each(function(){var i=e(this).data("iscrollInstance");void 0!==i&&i&&(t?i.wheelOn():i.wheelOff())})},onLeave:function(){K.toggleWheel(!1)},beforeLeave:function(){K.onLeave()},afterLoad:function(){K.toggleWheel(!0)},create:function(t,i){var n=t.find(".fp-scrollable");n.height(i),n.each(function(){var t=e(this),i=t.data("iscrollInstance");i&&e.each(K.iScrollInstances,function(){e(this).destroy()}),i=new IScroll(t.get(0),G),K.iScrollInstances.push(i),i.wheelOff(),t.data("iscrollInstance",i)})},isScrolled:function(e,t){var i=t.data("iscrollInstance");return!i||("top"===e?i.y>=0&&!t.scrollTop():"bottom"===e?0-i.y+t.scrollTop()+1+t.innerHeight()>=t[0].scrollHeight:void 0)},scrollable:function(e){return e.find(L).length?e.find(N).find(".fp-scrollable"):e.find(".fp-scrollable")},scrollHeight:function(e){return e.find(".fp-scrollable").children().first().get(0).scrollHeight},remove:function(e){var t=e.find(".fp-scrollable");t.length&&(t.data("iscrollInstance").destroy(),t.data("iscrollInstance",null)),e.find(".fp-scrollable").children().first().children().first().unwrap().unwrap()},update:function(t,i){clearTimeout(K.refreshId),K.refreshId=setTimeout(function(){e.each(K.iScrollInstances,function(){e(this).get(0).refresh()})},150),t.find(".fp-scrollable").css("height",i+"px").parent().css("height",i+"px")},wrapContent:function(){return'<div class="fp-scrollable"><div class="fp-scroller"></div></div>'}}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var i=window.getComputedStyle(e,null);return t?i[t]:i}function i(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var o=t(e),s=o.overflow,r=o.overflowX,a=o.overflowY;return/(auto|scroll)/.test(s+a+r)?e:n(i(e))}function o(e){var i=e&&e.offsetParent,n=i&&i.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(i.nodeName)&&"static"===t(i,"position")?o(i):i:window.document.documentElement}function s(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||o(e.firstElementChild)===e)}function r(e){return null===e.parentNode?e:r(e.parentNode)}function a(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=i?e:t,l=i?t:e,c=document.createRange();c.setStart(n,0),c.setEnd(l,0);var d=c.commonAncestorContainer;if(e!==d&&t!==d||n.contains(l))return s(d)?d:o(d);var u=r(e);return u.host?a(u.host,t):a(e,r(t).host)}function l(e){var t="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var n=window.document.documentElement;return(window.document.scrollingElement||n)[t]}return e[t]}function c(e,t){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,"top"),o=l(t,"left"),s=i?-1:1;return e.top+=n*s,e.bottom+=n*s,e.left+=o*s,e.right+=o*s,e}function d(e,t){var i="x"===t?"Left":"Top",n="Left"==i?"Right":"Bottom";return+e["border"+i+"Width"].split("px")[0]+ +e["border"+n+"Width"].split("px")[0]}function u(e,t,i,n){return U(t["offset"+e],i["client"+e],i["offset"+e],te()?i["offset"+e]+n["margin"+("Height"===e?"Top":"Left")]+n["margin"+("Height"===e?"Bottom":"Right")]:0)}function p(){var e=window.document.body,t=window.document.documentElement,i=te()&&window.getComputedStyle(t);return{height:u("Height",e,t,i),width:u("Width",e,t,i)}}function h(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function f(e){var i={};if(te())try{i=e.getBoundingClientRect();var n=l(e,"top"),o=l(e,"left");i.top+=n,i.left+=o,i.bottom+=n,i.right+=o}catch(e){}else i=e.getBoundingClientRect();var s={left:i.left,top:i.top,width:i.right-i.left,height:i.bottom-i.top},r="HTML"===e.nodeName?p():{},a=r.width||e.clientWidth||s.right-s.left,c=r.height||e.clientHeight||s.bottom-s.top,u=e.offsetWidth-a,f=e.offsetHeight-c;if(u||f){var g=t(e);u-=d(g,"x"),f-=d(g,"y"),s.width-=u,s.height-=f}return h(s)}function g(e,i){var o=te(),s="HTML"===i.nodeName,r=f(e),a=f(i),l=n(e),d=t(i),u=+d.borderTopWidth.split("px")[0],p=+d.borderLeftWidth.split("px")[0],g=h({top:r.top-a.top-u,left:r.left-a.left-p,width:r.width,height:r.height});if(g.marginTop=0,g.marginLeft=0,!o&&s){var m=+d.marginTop.split("px")[0],v=+d.marginLeft.split("px")[0];g.top-=u-m,g.bottom-=u-m,g.left-=p-v,g.right-=p-v,g.marginTop=m,g.marginLeft=v}return(o?i.contains(l):i===l&&"BODY"!==l.nodeName)&&(g=c(g,i)),g}function m(e){var t=window.document.documentElement,i=g(e,t),n=U(t.clientWidth,window.innerWidth||0),o=U(t.clientHeight,window.innerHeight||0),s=l(t),r=l(t,"left");return h({top:s-i.top+i.marginTop,left:r-i.left+i.marginLeft,width:n,height:o})}function v(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===t(e,"position")||v(i(e)))}function y(e,t,o,s){var r={top:0,left:0},l=a(e,t);if("viewport"===s)r=m(l);else{var c;"scrollParent"===s?"BODY"===(c=n(i(e))).nodeName&&(c=window.document.documentElement):c="window"===s?window.document.documentElement:s;var d=g(c,l);if("HTML"!==c.nodeName||v(l))r=d;else{var u=p(),h=u.height,f=u.width;r.top+=d.top-d.marginTop,r.bottom=h+d.top,r.left+=d.left-d.marginLeft,r.right=f+d.left}}return r.left+=o,r.top+=o,r.right-=o,r.bottom-=o,r}function b(e){return e.width*e.height}function w(e,t,i,n,o){var s=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var r=y(i,n,s,o),a={top:{width:r.width,height:t.top-r.top},right:{width:r.right-t.right,height:r.height},bottom:{width:r.width,height:r.bottom-t.bottom},left:{width:t.left-r.left,height:r.height}},l=Object.keys(a).map(function(e){return se({key:e},a[e],{area:b(a[e])})}).sort(function(e,t){return t.area-e.area}),c=l.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),d=0<c.length?c[0].key:l[0].key,u=e.split("-")[1];return d+(u?"-"+u:"")}function T(e,t,i){return g(i,a(t,i))}function S(e){var t=window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+n,height:e.offsetHeight+i}}function x(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function E(e,t,i){i=i.split("-")[0];var n=S(e),o={width:n.width,height:n.height},s=-1!==["right","left"].indexOf(i),r=s?"top":"left",a=s?"left":"top",l=s?"height":"width",c=s?"width":"height";return o[r]=t[r]+t[l]/2-n[l]/2,o[a]=i===a?t[a]-n[c]:t[x(a)],o}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function _(e,t,i){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===i});var n=C(e,function(e){return e[t]===i});return e.indexOf(n)}function k(t,i,n){return(void 0===n?t:t.slice(0,_(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&e(n)&&(i.offsets.popper=h(i.offsets.popper),i.offsets.reference=h(i.offsets.reference),i=n(i,t))}),i}function A(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=T(this.state,this.popper,this.reference),e.placement=w(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=E(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=k(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function O(e,t){return e.some(function(e){var i=e.name;return e.enabled&&i===t})}function D(e){for(var t=[!1,"ms","Webkit","Moz","O"],i=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var o=t[n],s=o?""+o+i:e;if(void 0!==window.document.body.style[s])return s}return null}function I(){return this.state.isDestroyed=!0,O(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[D("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function N(e,t,i,o){var s="BODY"===e.nodeName,r=s?window:e;r.addEventListener(t,i,{passive:!0}),s||N(n(r.parentNode),t,i,o),o.push(r)}function P(e,t,i,o){i.updateBound=o,window.addEventListener("resize",i.updateBound,{passive:!0});var s=n(e);return N(s,"scroll",i.updateBound,i.scrollParents),i.scrollElement=s,i.eventsEnabled=!0,i}function L(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function H(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function $(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=H(this.reference,this.state))}function M(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(e,t){Object.keys(t).forEach(function(i){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&M(t[i])&&(n="px"),e.style[i]=t[i]+n})}function j(e,t){Object.keys(t).forEach(function(i){!1===t[i]?e.removeAttribute(i):e.setAttribute(i,t[i])})}function W(e,t,i){var n=C(e,function(e){return e.name===t}),o=!!n&&e.some(function(e){return e.name===i&&e.enabled&&e.order<n.order});if(!o){var s="`"+t+"`";console.warn("`"+i+"` modifier is required by "+s+" modifier in order to work, be sure to include it before "+s+"!")}return o}function B(e){return"end"===e?"start":"start"===e?"end":e}function F(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=ae.indexOf(e),n=ae.slice(i+1).concat(ae.slice(0,i));return t?n.reverse():n}function z(e,t,i,n){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+o[1],r=o[2];if(!s)return e;if(0===r.indexOf("%")){var a;switch(r){case"%p":a=i;break;case"%":case"%r":default:a=n}return h(a)[t]/100*s}if("vh"===r||"vw"===r){return("vh"===r?U(document.documentElement.clientHeight,window.innerHeight||0):U(document.documentElement.clientWidth,window.innerWidth||0))/100*s}return s}function q(e,t,i,n){var o=[0,0],s=-1!==["right","left"].indexOf(n),r=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=r.indexOf(C(r,function(e){return-1!==e.search(/,|\s/)}));r[a]&&-1===r[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1===a?[r]:[r.slice(0,a).concat([r[a].split(l)[0]]),[r[a].split(l)[1]].concat(r.slice(a+1))];return(c=c.map(function(e,n){var o=(1===n?!s:s)?"height":"width",r=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)},[]).map(function(e){return z(e,o,t,i)})})).forEach(function(e,t){e.forEach(function(i,n){M(i)&&(o[t]+=i*("-"===e[n-1]?-1:1))})}),o}for(var X=Math.min,Y=Math.floor,U=Math.max,V=["native code","[object MutationObserverConstructor]"],G="undefined"!=typeof window,K=["Edge","Trident","Firefox"],Q=0,Z=0;Z<K.length;Z+=1)if(G&&0<=navigator.userAgent.indexOf(K[Z])){Q=1;break}var J,ee=G&&function(e){return V.some(function(t){return-1<(e||"").toString().indexOf(t)})}(window.MutationObserver)?function(e){var t=!1,i=0,n=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(n,{attributes:!0}),function(){t||(t=!0,n.setAttribute("x-index",i),++i)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Q))}},te=function(){return void 0==J&&(J=-1!==navigator.appVersion.indexOf("MSIE 10")),J},ie=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ne=function(){function e(e,t){for(var i,n=0;n<t.length;n++)i=t[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),oe=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},se=Object.assign||function(e){for(var t,i=1;i<arguments.length;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},re=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ae=re.slice(3),le={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ce=function(){function t(i,n){var o=this,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ie(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=ee(this.update.bind(this)),this.options=se({},t.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=i.jquery?i[0]:i,this.popper=n.jquery?n[0]:n,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,s.modifiers)).forEach(function(e){o.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},s.modifiers?s.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(o.reference,o.popper,o.options,t,o.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return ne(t,[{key:"update",value:function(){return A.call(this)}},{key:"destroy",value:function(){return I.call(this)}},{key:"enableEventListeners",value:function(){return L.call(this)}},{key:"disableEventListeners",value:function(){return $.call(this)}}]),t}();return ce.Utils=("undefined"==typeof window?global:window).PopperUtils,ce.placements=re,ce.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,i=t.split("-")[0],n=t.split("-")[1];if(n){var o=e.offsets,s=o.reference,r=o.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",c=a?"width":"height",d={start:oe({},l,s[l]),end:oe({},l,s[l]+s[c]-r[c])};e.offsets.popper=se({},r,d[n])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var i,n=t.offset,o=e.placement,s=e.offsets,r=s.popper,a=s.reference,l=o.split("-")[0];return i=M(+n)?[+n,0]:q(n,r,a,l),"left"===l?(r.top+=i[0],r.left-=i[1]):"right"===l?(r.top+=i[0],r.left+=i[1]):"top"===l?(r.left+=i[0],r.top-=i[1]):"bottom"===l&&(r.left+=i[0],r.top+=i[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var i=t.boundariesElement||o(e.instance.popper);e.instance.reference===i&&(i=o(i));var n=y(e.instance.popper,e.instance.reference,t.padding,i);t.boundaries=n;var s=t.priority,r=e.offsets.popper,a={primary:function(e){var i=r[e];return r[e]<n[e]&&!t.escapeWithReference&&(i=U(r[e],n[e])),oe({},e,i)},secondary:function(e){var i="right"===e?"left":"top",o=r[i];return r[e]>n[e]&&!t.escapeWithReference&&(o=X(r[i],n[e]-("right"===e?r.width:r.height))),oe({},i,o)}};return s.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";r=se({},r,a[t](e))}),e.offsets.popper=r,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,i=t.popper,n=t.reference,o=e.placement.split("-")[0],s=Y,r=-1!==["top","bottom"].indexOf(o),a=r?"right":"bottom",l=r?"left":"top",c=r?"width":"height";return i[a]<s(n[l])&&(e.offsets.popper[l]=s(n[l])-i[c]),i[l]>s(n[a])&&(e.offsets.popper[l]=s(n[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!W(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var n=e.placement.split("-")[0],o=e.offsets,s=o.popper,r=o.reference,a=-1!==["left","right"].indexOf(n),l=a?"height":"width",c=a?"top":"left",d=a?"left":"top",u=a?"bottom":"right",p=S(i)[l];r[u]-p<s[c]&&(e.offsets.popper[c]-=s[c]-(r[u]-p)),r[c]+p>s[u]&&(e.offsets.popper[c]+=r[c]+p-s[u]);var f=r[c]+r[l]/2-p/2-h(e.offsets.popper)[c];return f=U(X(s[l]-p,f),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[c]=Math.round(f),e.offsets.arrow[d]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(O(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var i=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),n=e.placement.split("-")[0],o=x(n),s=e.placement.split("-")[1]||"",r=[];switch(t.behavior){case le.FLIP:r=[n,o];break;case le.CLOCKWISE:r=F(n);break;case le.COUNTERCLOCKWISE:r=F(n,!0);break;default:r=t.behavior}return r.forEach(function(a,l){if(n!==a||r.length===l+1)return e;n=e.placement.split("-")[0],o=x(n);var c=e.offsets.popper,d=e.offsets.reference,u=Y,p="left"===n&&u(c.right)>u(d.left)||"right"===n&&u(c.left)<u(d.right)||"top"===n&&u(c.bottom)>u(d.top)||"bottom"===n&&u(c.top)<u(d.bottom),h=u(c.left)<u(i.left),f=u(c.right)>u(i.right),g=u(c.top)<u(i.top),m=u(c.bottom)>u(i.bottom),v="left"===n&&h||"right"===n&&f||"top"===n&&g||"bottom"===n&&m,y=-1!==["top","bottom"].indexOf(n),b=!!t.flipVariations&&(y&&"start"===s&&h||y&&"end"===s&&f||!y&&"start"===s&&g||!y&&"end"===s&&m);(p||v||b)&&(e.flipped=!0,(p||v)&&(n=r[l+1]),b&&(s=B(s)),e.placement=n+(s?"-"+s:""),e.offsets.popper=se({},e.offsets.popper,E(e.instance.popper,e.offsets.reference,e.placement)),e=k(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,i=t.split("-")[0],n=e.offsets,o=n.popper,s=n.reference,r=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return o[r?"left":"top"]=s[t]-(a?o[r?"width":"height"]:0),e.placement=x(t),e.offsets.popper=h(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!W(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,i=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var i=t.x,n=t.y,s=e.offsets.popper,r=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,l,c=void 0===r?t.gpuAcceleration:r,d=f(o(e.instance.popper)),u={position:s.position},p={left:Y(s.left),top:Y(s.top),bottom:Y(s.bottom),right:Y(s.right)},h="bottom"===i?"top":"bottom",g="right"===n?"left":"right",m=D("transform");if(l="bottom"==h?-d.height+p.bottom:p.top,a="right"==g?-d.width+p.right:p.left,c&&m)u[m]="translate3d("+a+"px, "+l+"px, 0)",u[h]=0,u[g]=0,u.willChange="transform";else{var v="bottom"==h?-1:1,y="right"==g?-1:1;u[h]=l*v,u[g]=a*y,u.willChange=h+", "+g}var b={"x-placement":e.placement};return e.attributes=se({},b,e.attributes),e.styles=se({},u,e.styles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return R(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.offsets.arrow&&R(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,i,n,o){var s=T(o,t,e),r=w(i.placement,s,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return t.setAttribute("x-placement",r),R(t,{position:"absolute"}),i},gpuAcceleration:void 0}}},ce}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(e){var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){function e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function(e){function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function i(e){return(e[0]||e).nodeType}function n(){return{bindType:r.end,delegateType:r.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var e=document.createElement("bootstrap");for(var t in a)if(void 0!==e.style[t])return{end:a[t]};return!1}function s(t){var i=this,n=!1;return e(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(i)},t),this}var r=!1,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var i=t.getAttribute("data-target");i&&"#"!==i||(i=t.getAttribute("href")||"");try{return e(i).length>0?i:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(r.end)},supportsTransitionEnd:function(){return Boolean(r)},typeCheckConfig:function(e,n,o){for(var s in o)if(o.hasOwnProperty(s)){var r=o[s],a=n[s],l=a&&i(a)?"element":t(a);if(!new RegExp(r).test(l))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+l+'" but expected type "'+r+'".')}}};return r=o(),e.fn.emulateTransitionEnd=s,l.supportsTransitionEnd()&&(e.event.special[l.TRANSITION_END]=n()),l}(jQuery),r=(function(e){var t="alert",n=e.fn[t],r={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},l={ALERT:"alert",FADE:"fade",SHOW:"show"},c=function(){function t(e){i(this,t),this._element=e}return t.prototype.close=function(e){e=e||this._element;var t=this._getRootElement(e);this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},t.prototype.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},t.prototype._getRootElement=function(t){var i=s.getSelectorFromElement(t),n=!1;return i&&(n=e(i)[0]),n||(n=e(t).closest("."+l.ALERT)[0]),n},t.prototype._triggerCloseEvent=function(t){var i=e.Event(a.CLOSE);return e(t).trigger(i),i},t.prototype._removeElement=function(t){var i=this;e(t).removeClass(l.SHOW),s.supportsTransitionEnd()&&e(t).hasClass(l.FADE)?e(t).one(s.TRANSITION_END,function(e){return i._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},t.prototype._destroyElement=function(t){e(t).detach().trigger(a.CLOSED).remove()},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),o=n.data("bs.alert");o||(o=new t(this),n.data("bs.alert",o)),"close"===i&&o[i](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),t}();e(document).on(a.CLICK_DATA_API,r.DISMISS,c._handleDismiss(new c)),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=n,c._jQueryInterface}}(jQuery),function(e){var t="button",n=e.fn[t],s={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},r={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},l=function(){function t(e){i(this,t),this._element=e}return t.prototype.toggle=function(){var t=!0,i=!0,n=e(this._element).closest(r.DATA_TOGGLE)[0];if(n){var o=e(this._element).find(r.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(s.ACTIVE))t=!1;else{var a=e(n).find(r.ACTIVE)[0];a&&e(a).removeClass(s.ACTIVE)}if(t){if(o.hasAttribute("disabled")||n.hasAttribute("disabled")||o.classList.contains("disabled")||n.classList.contains("disabled"))return;o.checked=!e(this._element).hasClass(s.ACTIVE),e(o).trigger("change")}o.focus(),i=!1}}i&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(s.ACTIVE)),t&&e(this._element).toggleClass(s.ACTIVE)},t.prototype.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data("bs.button");n||(n=new t(this),e(this).data("bs.button",n)),"toggle"===i&&n[i]()})},o(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),t}();e(document).on(a.CLICK_DATA_API,r.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var i=t.target;e(i).hasClass(s.BUTTON)||(i=e(i).closest(r.BUTTON)),l._jQueryInterface.call(e(i),"toggle")}).on(a.FOCUS_BLUR_DATA_API,r.DATA_TOGGLE_CARROT,function(t){var i=e(t.target).closest(r.BUTTON)[0];e(i).toggleClass(s.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=l._jQueryInterface,e.fn[t].Constructor=l,e.fn[t].noConflict=function(){return e.fn[t]=n,l._jQueryInterface}}(jQuery),function(e){var t="carousel",r="bs.carousel",a="."+r,l=e.fn[t],c={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},d={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},u={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},p={SLIDE:"slide"+a,SLID:"slid"+a,KEYDOWN:"keydown"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a,TOUCHEND:"touchend"+a,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},h={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slideNew",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},f={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},g=function(){function l(t,n){i(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(f.INDICATORS)[0],this._addEventListeners()}return l.prototype.next=function(){this._isSliding||this._slide(u.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(u.PREV)},l.prototype.pause=function(t){t||(this._isPaused=!0),e(this._element).find(f.NEXT_PREV)[0]&&s.supportsTransitionEnd()&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},l.prototype.to=function(t){var i=this;this._activeElement=e(this._element).find(f.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(p.SLID,function(){return i.to(t)});else{if(n===t)return this.pause(),void this.cycle();var o=t>n?u.NEXT:u.PREV;this._slide(o,this._items[t])}},l.prototype.dispose=function(){e(this._element).off(a),e.removeData(this._element,r),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(i){return i=e.extend({},c,i),s.typeCheckConfig(t,i,d),i},l.prototype._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(p.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(p.MOUSEENTER,function(e){return t.pause(e)}).on(p.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(p.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},l.prototype._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next();break;default:return}},l.prototype._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(f.ITEM)),this._items.indexOf(t)},l.prototype._getItemByDirection=function(e,t){var i=e===u.NEXT,n=e===u.PREV,o=this._getItemIndex(t),s=this._items.length-1;if((n&&0===o||i&&o===s)&&!this._config.wrap)return t;var r=(o+(e===u.PREV?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},l.prototype._triggerSlideEvent=function(t,i){var n=this._getItemIndex(t),o=this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0]),s=e.Event(p.SLIDE,{relatedTarget:t,direction:i,from:o,to:n});return e(this._element).trigger(s),s},l.prototype._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(f.ACTIVE).removeClass(h.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(h.ACTIVE)}},l.prototype._slide=function(t,i){var n=this,o=e(this._element).find(f.ACTIVE_ITEM)[0],r=this._getItemIndex(o),a=i||o&&this._getItemByDirection(t,o),l=this._getItemIndex(a),c=Boolean(this._interval),d=void 0,g=void 0,m=void 0;if(t===u.NEXT?(d=h.LEFT,g=h.NEXT,m=u.LEFT):(d=h.RIGHT,g=h.PREV,m=u.RIGHT),a&&e(a).hasClass(h.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(a,m).isDefaultPrevented()&&o&&a){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(a);var v=e.Event(p.SLID,{relatedTarget:a,direction:m,from:r,to:l});s.supportsTransitionEnd()&&e(this._element).hasClass(h.SLIDE)?(e(a).addClass(g),s.reflow(a),e(o).addClass(d),e(a).addClass(d),e(o).one(s.TRANSITION_END,function(){e(a).removeClass(d+" "+g).addClass(h.ACTIVE),e(o).removeClass(h.ACTIVE+" "+g+" "+d),n._isSliding=!1,setTimeout(function(){return e(n._element).trigger(v)},0)}).emulateTransitionEnd(600)):(e(o).removeClass(h.ACTIVE),e(a).addClass(h.ACTIVE),this._isSliding=!1,e(this._element).trigger(v)),c&&this.cycle()}},l._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(r),o=e.extend({},c,e(this).data());"object"===(void 0===t?"undefined":n(t))&&e.extend(o,t);var s="string"==typeof t?t:o.slide;if(i||(i=new l(this,o),e(this).data(r,i)),"number"==typeof t)i.to(t);else if("string"==typeof s){if(void 0===i[s])throw new Error('No method named "'+s+'"');i[s]()}else o.interval&&(i.pause(),i.cycle())})},l._dataApiClickHandler=function(t){var i=s.getSelectorFromElement(this);if(i){var n=e(i)[0];if(n&&e(n).hasClass(h.CAROUSEL)){var o=e.extend({},e(n).data(),e(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),l._jQueryInterface.call(e(n),o),a&&e(n).data(r).to(a),t.preventDefault()}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return c}}]),l}();e(document).on(p.CLICK_DATA_API,f.DATA_SLIDE,g._dataApiClickHandler),e(window).on(p.LOAD_DATA_API,function(){e(f.DATA_RIDE).each(function(){var t=e(this);g._jQueryInterface.call(t,t.data())})}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=l,g._jQueryInterface}}(jQuery),function(e){var t="collapse",r="bs.collapse",a=e.fn[t],l={toggle:!0,parent:""},c={toggle:"boolean",parent:"string"},d={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},h={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},f=function(){function a(t,n){i(this,a),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var o=e(h.DATA_TOGGLE),r=0;r<o.length;r++){var l=o[r],c=s.getSelectorFromElement(l);null!==c&&e(c).filter(t).length>0&&this._triggerArray.push(l)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){e(this._element).hasClass(u.SHOW)?this.hide():this.show()},a.prototype.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(u.SHOW)){var i=void 0,n=void 0;if(this._parent&&((i=e.makeArray(e(this._parent).children().children(h.ACTIVES))).length||(i=null)),!(i&&(n=e(i).data(r))&&n._isTransitioning)){var o=e.Event(d.SHOW);if(e(this._element).trigger(o),!o.isDefaultPrevented()){i&&(a._jQueryInterface.call(e(i),"hide"),n||e(i).data(r,null));var l=this._getDimension();e(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var c=function(){e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW),t._element.style[l]="",t.setTransitioning(!1),e(t._element).trigger(d.SHOWN)};if(s.supportsTransitionEnd()){var p="scroll"+(l[0].toUpperCase()+l.slice(1));e(this._element).one(s.TRANSITION_END,c).emulateTransitionEnd(600),this._element.style[l]=this._element[p]+"px"}else c()}}}},a.prototype.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(u.SHOW)){var i=e.Event(d.HIDE);if(e(this._element).trigger(i),!i.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",s.reflow(this._element),e(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var r=this._triggerArray[o],a=s.getSelectorFromElement(r);null!==a&&(e(a).hasClass(u.SHOW)||e(r).addClass(u.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var l=function(){t.setTransitioning(!1),e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(d.HIDDEN)};this._element.style[n]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.prototype.setTransitioning=function(e){this._isTransitioning=e},a.prototype.dispose=function(){e.removeData(this._element,r),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(i){return i=e.extend({},l,i),i.toggle=Boolean(i.toggle),s.typeCheckConfig(t,i,c),i},a.prototype._getDimension=function(){return e(this._element).hasClass(p.WIDTH)?p.WIDTH:p.HEIGHT},a.prototype._getParent=function(){var t=this,i=e(this._config.parent)[0],n='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(i).find(n).each(function(e,i){t._addAriaAndCollapsedClass(a._getTargetFromElement(i),[i])}),i},a.prototype._addAriaAndCollapsedClass=function(t,i){if(t){var n=e(t).hasClass(u.SHOW);i.length&&e(i).toggleClass(u.COLLAPSED,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var i=s.getSelectorFromElement(t);return i?e(i)[0]:null},a._jQueryInterface=function(t){return this.each(function(){var i=e(this),o=i.data(r),s=e.extend({},l,i.data(),"object"===(void 0===t?"undefined":n(t))&&t);if(!o&&s.toggle&&/show|hide/.test(t)&&(s.toggle=!1),o||(o=new a(this,s),i.data(r,o)),"string"==typeof t){if(void 0===o[t])throw new Error('No method named "'+t+'"');o[t]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();e(document).on(d.CLICK_DATA_API,h.DATA_TOGGLE,function(t){/input|textarea/i.test(t.target.tagName)||t.preventDefault();var i=e(this),n=s.getSelectorFromElement(this);e(n).each(function(){var t=e(this),n=t.data(r)?"toggle":i.data();f._jQueryInterface.call(t,n)})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=a,f._jQueryInterface}}(jQuery),function(e){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t="dropdown",r="bs.dropdown",a="."+r,l=e.fn[t],c=new RegExp("38|40|27"),d={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},u={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},p={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},h={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},f={placement:h.BOTTOM,offset:0,flip:!0},g={placement:"string",offset:"(number|string)",flip:"boolean"},m=function(){function l(e,t){i(this,l),this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(u.DISABLED)){var t=l._getParentFromElement(this._element),i=e(this._menu).hasClass(u.SHOW);if(l._clearMenus(),!i){var n={relatedTarget:this._element},o=e.Event(d.SHOW,n);if(e(t).trigger(o),!o.isDefaultPrevented()){var s=this._element;e(t).hasClass(u.DROPUP)&&(e(this._menu).hasClass(u.MENULEFT)||e(this._menu).hasClass(u.MENURIGHT))&&(s=t),this._popper=new Popper(s,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(p.NAVBAR_NAV).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(u.SHOW),e(t).toggleClass(u.SHOW).trigger(e.Event(d.SHOWN,n))}}}},l.prototype.dispose=function(){e.removeData(this._element,r),e(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var t=this;e(this._element).on(d.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},l.prototype._getConfig=function(i){var n=e(this._element).data();return void 0!==n.placement&&(n.placement=h[n.placement.toUpperCase()]),i=e.extend({},this.constructor.Default,e(this._element).data(),i),s.typeCheckConfig(t,i,this.constructor.DefaultType),i},l.prototype._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=e(t).find(p.MENU)[0]}return this._menu},l.prototype._getPlacement=function(){var t=e(this._element).parent(),i=this._config.placement;return t.hasClass(u.DROPUP)||this._config.placement===h.TOP?(i=h.TOP,e(this._menu).hasClass(u.MENURIGHT)&&(i=h.TOPEND)):e(this._menu).hasClass(u.MENURIGHT)&&(i=h.BOTTOMEND),i},l.prototype._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},l.prototype._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(e.modifiers.applyStyle={enabled:!this._inNavbar}),e},l._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(r),o="object"===(void 0===t?"undefined":n(t))?t:null;if(i||(i=new l(this,o),e(this).data(r,i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"');i[t]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=e.makeArray(e(p.DATA_TOGGLE)),n=0;n<i.length;n++){var o=l._getParentFromElement(i[n]),s=e(i[n]).data(r),a={relatedTarget:i[n]};if(s){var c=s._menu;if(e(o).hasClass(u.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var h=e.Event(d.HIDE,a);e(o).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),i[n].setAttribute("aria-expanded","false"),e(c).removeClass(u.SHOW),e(o).removeClass(u.SHOW).trigger(e.Event(d.HIDDEN,a)))}}}},l._getParentFromElement=function(t){var i=void 0,n=s.getSelectorFromElement(t);return n&&(i=e(n)[0]),i||t.parentNode},l._dataApiKeydownHandler=function(t){if(!(!c.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(u.DISABLED)))){var i=l._getParentFromElement(this),n=e(i).hasClass(u.SHOW);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var o=e(i).find(p.VISIBLE_ITEMS).get();if(o.length){var s=o.indexOf(t.target);38===t.which&&s>0&&s--,40===t.which&&s<o.length-1&&s++,s<0&&(s=0),o[s].focus()}}else{if(27===t.which){var r=e(i).find(p.DATA_TOGGLE)[0];e(r).trigger("focus")}e(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return f}},{key:"DefaultType",get:function(){return g}}]),l}();e(document).on(d.KEYDOWN_DATA_API,p.DATA_TOGGLE,m._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API,p.MENU,m._dataApiKeydownHandler).on(d.CLICK_DATA_API+" "+d.KEYUP_DATA_API,m._clearMenus).on(d.CLICK_DATA_API,p.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),m._jQueryInterface.call(e(this),"toggle")}).on(d.CLICK_DATA_API,p.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=l,m._jQueryInterface}}(jQuery),function(e){var t="modal",r=".bs.modal",a=e.fn[t],l={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},d={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},p={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},h=function(){function a(t,n){i(this,a),this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(p.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return a.prototype.toggle=function(e){return this._isShown?this.hide():this.show(e)},a.prototype.show=function(t){var i=this;if(!this._isTransitioning){s.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var n=e.Event(d.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),e(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(d.CLICK_DISMISS,p.DATA_DISMISS,function(e){return i.hide(e)}),e(this._dialog).on(d.MOUSEDOWN_DISMISS,function(){e(i._element).one(d.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(t)}))}},a.prototype.hide=function(t){var i=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=s.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE);n&&(this._isTransitioning=!0);var o=e.Event(d.HIDE);e(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),e(document).off(d.FOCUSIN),e(this._element).removeClass(u.SHOW),e(this._element).off(d.CLICK_DISMISS),e(this._dialog).off(d.MOUSEDOWN_DISMISS),n?e(this._element).one(s.TRANSITION_END,function(e){return i._hideModal(e)}).emulateTransitionEnd(300):this._hideModal())}},a.prototype.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(r),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.prototype.handleUpdate=function(){this._adjustDialog()},a.prototype._getConfig=function(i){return i=e.extend({},l,i),s.typeCheckConfig(t,i,c),i},a.prototype._showElement=function(t){var i=this,n=s.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&s.reflow(this._element),e(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var o=e.Event(d.SHOWN,{relatedTarget:t}),r=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,e(i._element).trigger(o)};n?e(this._dialog).one(s.TRANSITION_END,r).emulateTransitionEnd(300):r()},a.prototype._enforceFocus=function(){var t=this;e(document).off(d.FOCUSIN).on(d.FOCUSIN,function(i){document===i.target||t._element===i.target||e(t._element).has(i.target).length||t._element.focus()})},a.prototype._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(d.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(d.KEYDOWN_DISMISS)},a.prototype._setResizeEvent=function(){var t=this;this._isShown?e(window).on(d.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(d.RESIZE)},a.prototype._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(u.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(d.HIDDEN)})},a.prototype._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},a.prototype._showBackdrop=function(t){var i=this,n=e(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=s.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,n&&e(this._backdrop).addClass(n),e(this._backdrop).appendTo(document.body),e(this._element).on(d.CLICK_DISMISS,function(e){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),o&&s.reflow(this._backdrop),e(this._backdrop).addClass(u.SHOW),!t)return;if(!o)return void t();e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(u.SHOW);var r=function(){i._removeBackdrop(),t&&t()};s.supportsTransitionEnd()&&e(this._element).hasClass(u.FADE)?e(this._backdrop).one(s.TRANSITION_END,r).emulateTransitionEnd(150):r()}else t&&t()},a.prototype._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a.prototype._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(p.FIXED_CONTENT).each(function(i,n){var o=e(n)[0].style.paddingRight,s=e(n).css("padding-right");e(n).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")}),e(p.NAVBAR_TOGGLER).each(function(i,n){var o=e(n)[0].style.marginRight,s=e(n).css("margin-right");e(n).data("margin-right",o).css("margin-right",parseFloat(s)+t._scrollbarWidth+"px")});var i=document.body.style.paddingRight,n=e("body").css("padding-right");e("body").data("padding-right",i).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},a.prototype._resetScrollbar=function(){e(p.FIXED_CONTENT).each(function(t,i){var n=e(i).data("padding-right");void 0!==n&&e(i).css("padding-right",n).removeData("padding-right")}),e(p.NAVBAR_TOGGLER).each(function(t,i){var n=e(i).data("margin-right");void 0!==n&&e(i).css("margin-right",n).removeData("margin-right")});var t=e("body").data("padding-right");void 0!==t&&e("body").css("padding-right",t).removeData("padding-right")},a.prototype._getScrollbarWidth=function(){var e=document.createElement("div");e.className=u.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},a._jQueryInterface=function(t,i){return this.each(function(){var o=e(this).data("bs.modal"),s=e.extend({},a.Default,e(this).data(),"object"===(void 0===t?"undefined":n(t))&&t);if(o||(o=new a(this,s),e(this).data("bs.modal",o)),"string"==typeof t){if(void 0===o[t])throw new Error('No method named "'+t+'"');o[t](i)}else s.show&&o.show(i)})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();e(document).on(d.CLICK_DATA_API,p.DATA_TOGGLE,function(t){var i=this,n=void 0,o=s.getSelectorFromElement(this);o&&(n=e(o)[0]);var r=e(n).data("bs.modal")?"toggle":e.extend({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(d.SHOW,function(t){t.isDefaultPrevented()||a.one(d.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});h._jQueryInterface.call(e(n),r,this)}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=a,h._jQueryInterface}}(jQuery),function(e){var t="scrollspy",r=e.fn[t],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},d={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},h=function(){function r(t,n){var o=this;i(this,r),this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.LIST_ITEMS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(c.SCROLL,function(e){return o._process(e)}),this.refresh(),this._process()}return r.prototype.refresh=function(){var t=this,i=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,n="auto"===this._config.method?i:this._config.method,o=n===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var i=void 0,r=s.getSelectorFromElement(t);if(r&&(i=e(r)[0]),i){var a=i.getBoundingClientRect();if(a.width||a.height)return[e(i)[n]().top+o,r]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},r.prototype.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},r.prototype._getConfig=function(i){if("string"!=typeof(i=e.extend({},a,i)).target){var n=e(i.target).attr("id");n||(n=s.getUID(t),e(i.target).attr("id",n)),i.target="#"+n}return s.typeCheckConfig(t,i,l),i},r.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},r.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},r.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},r.prototype._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),i=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=i){var n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&(void 0===this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}},r.prototype._activate=function(t){this._activeTarget=t,this._clear();var i=this._selector.split(",");i=i.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=e(i.join(","));n.hasClass(d.DROPDOWN_ITEM)?(n.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(d.ACTIVE),n.addClass(d.ACTIVE)):(n.addClass(d.ACTIVE),n.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS+", "+u.LIST_ITEMS).addClass(d.ACTIVE)),e(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:t})},r.prototype._clear=function(){e(this._selector).filter(u.ACTIVE).removeClass(d.ACTIVE)},r._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),o="object"===(void 0===t?"undefined":n(t))&&t;if(i||(i=new r(this,o),e(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"');i[t]()}})},o(r,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return a}}]),r}();e(window).on(c.LOAD_DATA_API,function(){for(var t=e.makeArray(e(u.DATA_SPY)),i=t.length;i--;){var n=e(t[i]);h._jQueryInterface.call(n,n.data())}}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=r,h._jQueryInterface}}(jQuery),function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},a={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},l=function(){function t(e){i(this,t),this._element=e}return t.prototype.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(r.ACTIVE)||e(this._element).hasClass(r.DISABLED))){var i=void 0,o=void 0,l=e(this._element).closest(a.NAV_LIST_GROUP)[0],c=s.getSelectorFromElement(this._element);l&&(o=e.makeArray(e(l).find(a.ACTIVE)),o=o[o.length-1]);var d=e.Event(n.HIDE,{relatedTarget:this._element}),u=e.Event(n.SHOW,{relatedTarget:o});if(o&&e(o).trigger(d),e(this._element).trigger(u),!u.isDefaultPrevented()&&!d.isDefaultPrevented()){c&&(i=e(c)[0]),this._activate(this._element,l);var p=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),s=e.Event(n.SHOWN,{relatedTarget:o});e(o).trigger(i),e(t._element).trigger(s)};i?this._activate(i,i.parentNode,p):p()}}},t.prototype.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},t.prototype._activate=function(t,i,n){var o=this,l=e(i).find(a.ACTIVE)[0],c=n&&s.supportsTransitionEnd()&&l&&e(l).hasClass(r.FADE),d=function(){return o._transitionComplete(t,l,c,n)};l&&c?e(l).one(s.TRANSITION_END,d).emulateTransitionEnd(150):d(),l&&e(l).removeClass(r.SHOW)},t.prototype._transitionComplete=function(t,i,n,o){if(i){e(i).removeClass(r.ACTIVE);var l=e(i.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l&&e(l).removeClass(r.ACTIVE),i.setAttribute("aria-expanded",!1)}if(e(t).addClass(r.ACTIVE),t.setAttribute("aria-expanded",!0),n?(s.reflow(t),e(t).addClass(r.SHOW)):e(t).removeClass(r.FADE),t.parentNode&&e(t.parentNode).hasClass(r.DROPDOWN_MENU)){var c=e(t).closest(a.DROPDOWN)[0];c&&e(c).find(a.DROPDOWN_TOGGLE).addClass(r.ACTIVE),t.setAttribute("aria-expanded",!0)}o&&o()},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),o=n.data("bs.tab");if(o||(o=new t(this),n.data("bs.tab",o)),"string"==typeof i){if(void 0===o[i])throw new Error('No method named "'+i+'"');o[i]()}})},o(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),t}();e(document).on(n.CLICK_DATA_API,a.DATA_TOGGLE,function(t){t.preventDefault(),l._jQueryInterface.call(e(this),"show")}),e.fn.tab=l._jQueryInterface,e.fn.tab.Constructor=l,e.fn.tab.noConflict=function(){return e.fn.tab=t,l._jQueryInterface}}(jQuery),function(e){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t="tooltip",r=".bs.tooltip",a=e.fn[t],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},d={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},p={SHOW:"show",OUT:"out"},h={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,INSERTED:"inserted"+r,CLICK:"click"+r,FOCUSIN:"focusin"+r,FOCUSOUT:"focusout"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r},f={FADE:"fade",SHOW:"show"},g={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},m={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},v=function(){function a(e,t){i(this,a),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}return a.prototype.enable=function(){this._isEnabled=!0},a.prototype.disable=function(){this._isEnabled=!1},a.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},a.prototype.toggle=function(t){if(t){var i=this.constructor.DATA_KEY,n=e(t.currentTarget).data(i);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null,this);this._enter(null,this)}},a.prototype.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},a.prototype.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var n=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!n)return;var o=this.getTipElement(),r=s.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&e(o).addClass(f.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var d=!1===this.config.container?document.body:e(this.config.container);e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(d),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,o,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:g.ARROW}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop);var u=function(){t.config.animation&&t._fixTransition();var i=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),i===p.OUT&&t._leave(null,t)};s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(this.tip).one(s.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},a.prototype.hide=function(t){var i=this,n=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),r=function(){i._hoverState!==p.SHOW&&n.parentNode&&n.parentNode.removeChild(n),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),e(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),t&&t()};e(this.element).trigger(o),o.isDefaultPrevented()||(e(n).removeClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[m.CLICK]=!1,this._activeTrigger[m.FOCUS]=!1,this._activeTrigger[m.HOVER]=!1,s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(n).one(s.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},a.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},a.prototype.isWithContent=function(){return Boolean(this.getTitle())},a.prototype.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},a.prototype.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0]},a.prototype.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(g.TOOLTIP_INNER),this.getTitle()),t.removeClass(f.FADE+" "+f.SHOW)},a.prototype.setElementContent=function(t,i){var o=this.config.html;"object"===(void 0===i?"undefined":n(i))&&(i.nodeType||i.jquery)?o?e(i).parent().is(t)||t.empty().append(i):t.text(e(i).text()):t[o?"html":"text"](i)},a.prototype.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},a.prototype._getAttachment=function(e){return d[e.toUpperCase()]},a.prototype._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(i){if("click"===i)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(i!==m.MANUAL){var n=i===m.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=i===m.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(o,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},a.prototype._fixTitle=function(){var e=n(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},a.prototype._enter=function(t,i){var n=this.constructor.DATA_KEY;(i=i||e(t.currentTarget).data(n))||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),t&&(i._activeTrigger["focusin"===t.type?m.FOCUS:m.HOVER]=!0),e(i.getTipElement()).hasClass(f.SHOW)||i._hoverState===p.SHOW?i._hoverState=p.SHOW:(clearTimeout(i._timeout),i._hoverState=p.SHOW,i.config.delay&&i.config.delay.show?i._timeout=setTimeout(function(){i._hoverState===p.SHOW&&i.show()},i.config.delay.show):i.show())},a.prototype._leave=function(t,i){var n=this.constructor.DATA_KEY;(i=i||e(t.currentTarget).data(n))||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),t&&(i._activeTrigger["focusout"===t.type?m.FOCUS:m.HOVER]=!1),i._isWithActiveTrigger()||(clearTimeout(i._timeout),i._hoverState=p.OUT,i.config.delay&&i.config.delay.hide?i._timeout=setTimeout(function(){i._hoverState===p.OUT&&i.hide()},i.config.delay.hide):i.hide())},a.prototype._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},a.prototype._getConfig=function(i){return(i=e.extend({},this.constructor.Default,e(this.element).data(),i)).delay&&"number"==typeof i.delay&&(i.delay={show:i.delay,hide:i.delay}),i.title&&"number"==typeof i.title&&(i.title=i.title.toString()),i.content&&"number"==typeof i.content&&(i.content=i.content.toString()),s.typeCheckConfig(t,i,this.constructor.DefaultType),i},a.prototype._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},a.prototype._cleanTipClass=function(){var t=e(this.getTipElement()),i=t.attr("class").match(l);null!==i&&i.length>0&&t.removeClass(i.join(""))},a.prototype._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},a.prototype._fixTransition=function(){var t=this.getTipElement(),i=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(f.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=i)},a._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.tooltip"),o="object"===(void 0===t?"undefined":n(t))&&t;if((i||!/dispose|hide/.test(t))&&(i||(i=new a(this,o),e(this).data("bs.tooltip",i)),"string"==typeof t)){if(void 0===i[t])throw new Error('No method named "'+t+'"');i[t]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return r}},{key:"DefaultType",get:function(){return c}}]),a}();return e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=a,v._jQueryInterface},v}(jQuery));!function(s){var a="popover",l=".bs.popover",c=s.fn[a],d=new RegExp("(^|\\s)bs-popover\\S+","g"),u=s.extend({},r.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),p=s.extend({},r.DefaultType,{content:"(string|element|function)"}),h={FADE:"fade",SHOW:"show"},f={TITLE:".popover-header",CONTENT:".popover-body"},g={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},m=function(r){function c(){return i(this,c),e(this,r.apply(this,arguments))}return t(c,r),c.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},c.prototype.addAttachmentClass=function(e){s(this.getTipElement()).addClass("bs-popover-"+e)},c.prototype.getTipElement=function(){return this.tip=this.tip||s(this.config.template)[0]},c.prototype.setContent=function(){var e=s(this.getTipElement());this.setElementContent(e.find(f.TITLE),this.getTitle()),this.setElementContent(e.find(f.CONTENT),this._getContent()),e.removeClass(h.FADE+" "+h.SHOW)},c.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},c.prototype._cleanTipClass=function(){var e=s(this.getTipElement()),t=e.attr("class").match(d);null!==t&&t.length>0&&e.removeClass(t.join(""))},c._jQueryInterface=function(e){return this.each(function(){var t=s(this).data("bs.popover"),i="object"===(void 0===e?"undefined":n(e))?e:null;if((t||!/destroy|hide/.test(e))&&(t||(t=new c(this,i),s(this).data("bs.popover",t)),"string"==typeof e)){if(void 0===t[e])throw new Error('No method named "'+e+'"');t[e]()}})},o(c,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return p}}]),c}(r);s.fn[a]=m._jQueryInterface,s.fn[a].Constructor=m,s.fn[a].noConflict=function(){return s.fn[a]=c,m._jQueryInterface}}(jQuery)}(),function(e,t,i,n,o,s,r){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,s=t.createElement(i),r=t.getElementsByTagName(i)[0],s.async=1,s.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(s,r)}(window,document,"script",0,"ga"),ga("create","UA-107982810-1","auto"),ga("send","pageview"),window.mobileAndTabletcheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},window.onload=function(){$(".loading").fadeOut("slow")},$(document).ready(function(){var e=mobileAndTabletcheck();$(".multiple-snap").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".section-4__slide").carousel({interval:4e3}),!0!==e?($("body").addClass("pc"),$("#fullpage").fullpage({anchors:["home","about","vision","portfolio","comment","flow","contact","footer"],sectionSelector:".sec",scrollOverflow:!0,css3:!0,verticalCentered:!1,menu:"#navigation",afterRender:function(){},afterLoad:function(e,t){1===t&&$(".section-1__txt").addClass("fadeInRight animated"),2===t&&$(".section-2__box").addClass("fadeInLeft animated")},onLeave:function(e,t,i){1!==t&&$(".section-1__txt").removeClass("fadeInRight animated"),2!==t&&$(".section-2__box").removeClass("fadeInLeft animated")}})):$("body").addClass("mobile")});
>>>>>>> master
