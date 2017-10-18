<<<<<<< HEAD
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
// ==================================================
// fancyBox v3.1.28
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;(function (window, document, $, undefined) {
    'use strict';

    // If there's no jQuery, fancyBox can't work
    // =========================================

    if ( !$ ) {
        return;
    }

    // Check if fancyBox is already initialized
    // ========================================

    if ( $.fn.fancybox ) {

        $.error('fancyBox already initialized');

        return;
    }

    // Private default settings
    // ========================

    var defaults = {

        // Enable infinite gallery navigation
        loop : false,

        // Space around image, ignored if zoomed-in or viewport width is smaller than 800px
        margin : [44, 0],

        // Horizontal space between slides
        gutter : 50,

        // Enable keyboard navigation
        keyboard : true,

        // Should display navigation arrows at the screen edges
        arrows : true,

        // Should display infobar (counter and arrows at the top)
        infobar : false,

        // Should display toolbar (buttons at the top)
        toolbar : true,

        // What buttons should appear in the top right corner.
        // Buttons will be created using templates from `btnTpl` option
        // and they will be placed into toolbar (class="fancybox-toolbar"` element)
        buttons : [
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
        ],

        // Detect "idle" time in seconds
        idleTime : 4,

        // Should display buttons at top right corner of the content
        // If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
        // Use template from `btnTpl.smallBtn` for customization
        smallBtn : 'auto',

        // Disable right-click and use simple image protection for images
        protect : false,

        // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
        modal : false,

        image : {

            // Wait for images to load before displaying
            // Requires predefined image dimensions
            // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
            preload : "auto",

        },

        ajax : {

            // Object containing settings for ajax request
            settings : {

                // This helps to indicate that request comes from the modal
                // Feel free to change naming
                data : {
                    fancybox : true
                }
            }

        },

        iframe : {

            // Iframe template
            tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

            // Preload iframe before displaying it
            // This allows to calculate iframe content width and height
            // (note: Due to "Same Origin Policy", you can't get cross domain data).
            preload : true,

            // Custom CSS styling for iframe wrapping element
            // You can use this to set custom iframe dimensions
            css : {},

            // Iframe tag attributes
            attr : {
                scrolling : 'auto'
            }

        },

        // Open/close animation type
        // Possible values:
        //   false            - disable
        //   "zoom"           - zoom images from/to thumbnail
        //   "fade"
        //   "zoom-in-out"
        //
        animationEffect : "zoom",

        // Duration in ms for open/close animation
        animationDuration : 366,

        // Should image change opacity while zooming
        // If opacity is 'auto', then opacity will be changed if image and thumbnail have different aspect ratios
        zoomOpacity : 'auto',

        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect : "fade",

        // Duration in ms for transition animation
        transitionDuration : 366,

        // Custom CSS class for slide element
        slideClass : '',

        // Custom CSS class for layout
        baseClass : '',

        // Base template for layout
        baseTpl	:
            '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-inner">' +
                    '<div class="fancybox-infobar">' +
                        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
                        '<div class="fancybox-infobar__body">' +
                            '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
                        '</div>' +
                        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
                    '</div>' +
                    '<div class="fancybox-toolbar">' +
                        '{{BUTTONS}}' +
                    '</div>' +
                    '<div class="fancybox-navigation">' +
                        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
                        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
                    '</div>' +
                    '<div class="fancybox-stage"></div>' +
                    '<div class="fancybox-caption-wrap">' +
                        '<div class="fancybox-caption"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        // Loading indicator template
        spinnerTpl : '<div class="fancybox-loading"></div>',

        // Error message template
        errorTpl : '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

        btnTpl : {
            slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
            fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
            thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
            close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn   : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
        },

        // Container is injected into this element
        parentEl : 'body',


        // Focus handling
        // ==============

        // Try to focus on the first focusable element after opening
        autoFocus : true,

        // Put focus back to active element after closing
        backFocus : true,

        // Do not let user to focus on element outside modal content
        trapFocus : true,


        // Module specific options
        // =======================

        fullScreen : {
            autoStart : false,
        },

        // Set `touch: false` to disable dragging/swiping
        touch : {
            vertical : true,  // Allow to drag content vertically
            momentum : true   // Continue movement after releasing mouse/touch when panning
        },

        // Hash value when initializing manually,
        // set `false` to disable hash change
        hash : null,

        // Customize or add new media types
        // Example:
        /*
        media : {
            youtube : {
                params : {
                    autoplay : 0
                }
            }
        }
        */
        media : {},

        slideShow : {
            autoStart : false,
            speed     : 4000
        },

        thumbs : {
            autoStart   : false,   // Display thumbnails on opening
            hideOnClose : true     // Hide thumbnail grid when closing animation starts
        },

        // Callbacks
        //==========

        // See Documentation/API/Events for more information
        // Example:
        /*
            afterShow: function( instance, current ) {
                 console.info( 'Clicked element:' );
                 console.info( current.opts.$orig );
            }
        */

        onInit       : $.noop,  // When instance has been initialized

        beforeLoad   : $.noop,  // Before the content of a slide is being loaded
        afterLoad    : $.noop,  // When the content of a slide is done loading

        beforeShow   : $.noop,  // Before open animation starts
        afterShow    : $.noop,  // When content is done loading and animating

        beforeClose  : $.noop,  // Before the instance attempts to close. Return false to cancel the close.
        afterClose   : $.noop,  // After instance has been closed

        onActivate   : $.noop,  // When instance is brought to front
        onDeactivate : $.noop,  // When other instance has been activated


        // Interaction
        // ===========

        // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
        // each option can be string or method that returns value.
        //
        // Possible values:
        //   "close"           - close instance
        //   "next"            - move to next gallery item
        //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
        //   "toggleControls"  - show/hide controls
        //   "zoom"            - zoom image (if loaded)
        //   false             - do nothing

        // Clicked on the content
        clickContent : function( current, event ) {
            return current.type === 'image' ? 'zoom' : false;
        },

        // Clicked on the slide
        clickSlide : 'close',

        // Clicked on the background (backdrop) element
        clickOutside : 'close',

        // Same as previous two, but for double click
        dblclickContent : false,
        dblclickSlide   : false,
        dblclickOutside : false,


        // Custom options when mobile device is detected
        // =============================================

        mobile : {
            clickContent : function( current, event ) {
                return current.type === 'image' ? 'toggleControls' : false;
            },
            clickSlide : function( current, event ) {
                return current.type === 'image' ? 'toggleControls' : 'close';
            },
            dblclickContent : function( current, event ) {
                return current.type === 'image' ? 'zoom' : false;
            },
            dblclickSlide : function( current, event ) {
                return current.type === 'image' ? 'zoom' : false;
            }
        },


        // Internationalization
        // ============

        lang : 'en',
        i18n : {
            'en' : {
                CLOSE       : 'Close',
                NEXT        : 'Next',
                PREV        : 'Previous',
                ERROR       : 'The requested content cannot be loaded. <br/> Please try again later.',
                PLAY_START  : 'Start slideshow',
                PLAY_STOP   : 'Pause slideshow',
                FULL_SCREEN : 'Full screen',
                THUMBS      : 'Thumbnails'
            },
            'de' : {
                CLOSE       : 'Schliessen',
                NEXT        : 'Weiter',
                PREV        : 'Zurück',
                ERROR       : 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
                PLAY_START  : 'Diaschau starten',
                PLAY_STOP   : 'Diaschau beenden',
                FULL_SCREEN : 'Vollbild',
                THUMBS      : 'Vorschaubilder'
            }
        }

    };

    // Few useful variables and methods
    // ================================

    var $W = $(window);
    var $D = $(document);

    var called = 0;


    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================

    var isQuery = function ( obj ) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };


    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================

    var requestAFrame = (function () {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                // if all else fails, use setTimeout
                function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
    })();


    // Detect the supported transition-end event property name
    // =======================================================

    var transitionEnd = (function () {
        var t, el = document.createElement("fakeelement");

        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined){
                return transitions[t];
            }
        }
    })();


    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly.
    // =================================================================================

    var forceRedraw = function( $el ) {
        return ( $el && $el.length && $el[0].offsetHeight );
    };


    // Class definition
    // ================

    var FancyBox = function( content, opts, index ) {
        var self = this;

        self.opts  = $.extend( true, { index : index }, defaults, opts || {} );

        // Exclude buttons option from deep merging
        if ( opts && $.isArray( opts.buttons ) ) {
            self.opts.buttons = opts.buttons;
        }

        self.id    = self.opts.id || ++called;
        self.group = [];

        self.currIndex = parseInt( self.opts.index, 10 ) || 0;
        self.prevIndex = null;

        self.prevPos = null;
        self.currPos = 0;

        self.firstRun = null;

        // Create group elements from original item collection
        self.createGroup( content );

        if ( !self.group.length ) {
            return;
        }

        // Save last active element and current scroll position
        self.$lastFocus = $(document.activeElement).blur();

        // Collection of gallery objects
        self.slides = {};

        self.init( content );

    };

    $.extend(FancyBox.prototype, {

        // Create DOM structure
        // ====================

        init : function() {
            var self = this;

            var testWidth, $container, buttonStr;

            var firstItemOpts = self.group[ self.currIndex ].opts;

            self.scrollTop  = $D.scrollTop();
            self.scrollLeft = $D.scrollLeft();


            // Hide scrollbars
            // ===============

            if ( !$.fancybox.getInstance() && !$.fancybox.isMobile && $( 'body' ).css('overflow') !== 'hidden' ) {
                testWidth = $( 'body' ).width();

                $( 'html' ).addClass( 'fancybox-enabled' );

                // Compare body width after applying "overflow: hidden"
                testWidth = $( 'body' ).width() - testWidth;

                // If width has changed - compensate missing scrollbars by adding right margin
                if ( testWidth > 1 ) {
                    $( 'head' ).append( '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + testWidth + 'px; }</style>' );
                }
            }


            // Build html markup and set references
            // ====================================

            // Build html code for buttons and insert into main template
            buttonStr = '';

            $.each( firstItemOpts.buttons, function( index, value ) {
                buttonStr += ( firstItemOpts.btnTpl[ value ] || '' );
            });

            // Create markup from base template, it will be initially hidden to
            // avoid unnecessary work like painting while initializing is not complete
            $container = $( self.translate( self, firstItemOpts.baseTpl.replace( '\{\{BUTTONS\}\}', buttonStr ) ) )
                .addClass( 'fancybox-is-hidden' )
                .attr('id', 'fancybox-container-' + self.id)
                .addClass( firstItemOpts.baseClass )
                .data( 'FancyBox', self )
                .prependTo( firstItemOpts.parentEl );

            // Create object holding references to jQuery wrapped nodes
            self.$refs = {
                container : $container
            };

            [ 'bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption' ].forEach(function(item) {
                self.$refs[ item ] = $container.find( '.fancybox-' + item );
            });

            // Check for redundant elements
            if ( !firstItemOpts.arrows || self.group.length < 2 ) {
                $container.find('.fancybox-navigation').remove();
            }

            if ( !firstItemOpts.infobar ) {
                self.$refs.infobar.remove();
            }

            if ( !firstItemOpts.toolbar ) {
                self.$refs.toolbar.remove();
            }

            self.trigger( 'onInit' );

            // Bring to front and enable events
            self.activate();

            // Build slides, load and reveal content
            self.jumpTo( self.currIndex );
        },


        // Simple i18n support - replaces object keys found in template
        // with corresponding values
        // ============================================================

        translate : function( obj, str ) {
            var arr = obj.opts.i18n[ obj.opts.lang ];

            return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
                var value = arr[n];

                if ( value === undefined ) {
                    return match;
                }

                return value;
            });
        },

        // Create array of gally item objects
        // Check if each object has valid type and content
        // ===============================================

        createGroup : function ( content ) {
            var self  = this;
            var items = $.makeArray( content );

            $.each(items, function( i, item ) {
                var obj  = {},
                    opts = {},
                    data = [],
                    $item,
                    type,
                    src,
                    srcParts;

                // Step 1 - Make sure we have an object
                // ====================================

                if ( $.isPlainObject( item ) ) {

                    // We probably have manual usage here, something like
                    // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

                    obj  = item;
                    opts = item.opts || item;

                } else if ( $.type( item ) === 'object' && $( item ).length ) {

                    // Here we propbably have jQuery collection returned by some selector

                    $item = $( item );
                    data  = $item.data();

                    opts = 'options' in data ? data.options : {};
                    opts = $.type( opts ) === 'object' ? opts : {};

                    obj.src  = 'src' in data ? data.src : ( opts.src || $item.attr( 'href' ) );

                    [ 'width', 'height', 'thumb', 'type', 'filter' ].forEach(function(item) {
                        if ( item in data ) {
                            opts[ item ] = data[ item ];
                        }
                    });

                    if ( 'srcset' in data ) {
                        opts.image = { srcset : data.srcset };
                    }

                    opts.$orig = $item;

                    if ( !obj.type && !obj.src ) {
                        obj.type = 'inline';
                        obj.src  = item;
                    }

                } else {

                    // Assume we have a simple html code, for example:
                    // $.fancybox.open( '<div><h1>Hi!</h1></div>' );

                    obj = {
                        type : 'html',
                        src  : item + ''
                    };

                }

                // Each gallery object has full collection of options
                obj.opts = $.extend( true, {}, self.opts, opts );

                if ( $.fancybox.isMobile ) {
                    obj.opts = $.extend( true, {}, obj.opts, obj.opts.mobile );
                }


                // Step 2 - Make sure we have content type, if not - try to guess
                // ==============================================================

                type = obj.type || obj.opts.type;
                src  = obj.src || '';

                if ( !type && src ) {
                    if ( src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ) {
                        type = 'image';

                    } else if ( src.match(/\.(pdf)((\?|#).*)?$/i) ) {
                        type = 'pdf';

                    } else if ( src.charAt(0) === '#' ) {
                        type = 'inline';
                    }
                }

                obj.type = type;


                // Step 3 - Some adjustments
                // =========================

                obj.index = self.group.length;

                // Check if $orig and $thumb objects exist
                if ( obj.opts.$orig && !obj.opts.$orig.length ) {
                    delete obj.opts.$orig;
                }

                if ( !obj.opts.$thumb && obj.opts.$orig ) {
                    obj.opts.$thumb = obj.opts.$orig.find( 'img:first' );
                }

                if ( obj.opts.$thumb && !obj.opts.$thumb.length ) {
                    delete obj.opts.$thumb;
                }

                // Caption is a "special" option, it can be passed as a method
                if ( $.type( obj.opts.caption ) === 'function' ) {
                    obj.opts.caption = obj.opts.caption.apply( item, [ self, obj ] );

                } else if ( 'caption' in data ) {
                    obj.opts.caption = data.caption;
                }

                // Make sure we have caption as a string
                obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';

                // Check if url contains "filter" used to filter the content
                // Example: "ajax.html #something"
                if ( type === 'ajax' ) {
                    srcParts = src.split(/\s+/, 2);

                    if ( srcParts.length > 1 ) {
                        obj.src = srcParts.shift();

                        obj.opts.filter = srcParts.shift();
                    }
                }

                if ( obj.opts.smallBtn == 'auto' ) {

                    if ( $.inArray( type, ['html', 'inline', 'ajax'] ) > -1 ) {
                        obj.opts.toolbar  = false;
                        obj.opts.smallBtn = true;

                    } else {
                        obj.opts.smallBtn = false;
                    }

                }

                // If the type is "pdf", then simply load file into iframe
                if ( type === 'pdf' ) {
                    obj.type = 'iframe';

                    obj.opts.iframe.preload = false;
                }

                // Hide all buttons and disable interactivity for modal items
                if ( obj.opts.modal ) {

                    obj.opts = $.extend(true, obj.opts, {
                        // Remove buttons
                        infobar : 0,
                        toolbar : 0,

                        smallBtn : 0,

                        // Disable keyboard navigation
                        keyboard : 0,

                        // Disable some modules
                        slideShow  : 0,
                        fullScreen : 0,
                        thumbs     : 0,
                        touch      : 0,

                        // Disable click event handlers
                        clickContent    : false,
                        clickSlide      : false,
                        clickOutside    : false,
                        dblclickContent : false,
                        dblclickSlide   : false,
                        dblclickOutside : false
                    });

                }

                // Step 4 - Add processed object to group
                // ======================================

                self.group.push( obj );

            });

        },


        // Attach an event handler functions for:
        //   - navigation buttons
        //   - browser scrolling, resizing;
        //   - focusing
        //   - keyboard
        //   - detect idle
        // ======================================

        addEvents : function() {
            var self = this;

            self.removeEvents();

            // Make navigation elements clickable
            self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.close( e );

            }).on( 'click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.previous();

            }).on( 'click.fb-next touchend.fb-next', '[data-fancybox-next]', function(e) {
                e.stopPropagation();
                e.preventDefault();

                self.next();

            });


            // Handle page scrolling and browser resizing
            $W.on('orientationchange.fb resize.fb', function(e) {

                if ( e && e.originalEvent && e.originalEvent.type === "resize" ) {

                    requestAFrame(function() {
                        self.update();
                    });

                } else {

                    self.$refs.stage.hide();

                    setTimeout(function() {
                        self.$refs.stage.show();

                        self.update();
                    }, 500);

                }

            });

            // Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
            // (a.k.a. "escaping the modal")
            $D.on('focusin.fb', function(e) {
                var instance = $.fancybox ? $.fancybox.getInstance() : null;

                if ( instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $( e.target ).hasClass( 'fancybox-container' ) || $( e.target ).is( document ) ) {
                    return;
                }

                if ( instance && $( e.target ).css( 'position' ) !== 'fixed' && !instance.$refs.container.has( e.target ).length ) {
                    e.stopPropagation();

                    instance.focus();

                    // Sometimes page gets scrolled, set it back
                    $W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );
                }
            });


            // Enable keyboard navigation
            $D.on('keydown.fb', function (e) {
                var current = self.current,
                    keycode = e.keyCode || e.which;

                if ( !current || !current.opts.keyboard ) {
                    return;
                }

                if ( $(e.target).is('input') || $(e.target).is('textarea') ) {
                    return;
                }

                // Backspace and Esc keys
                if ( keycode === 8 || keycode === 27 ) {
                    e.preventDefault();

                    self.close( e );

                    return;
                }

                // Left arrow and Up arrow
                if ( keycode === 37 || keycode === 38 ) {
                    e.preventDefault();

                    self.previous();

                    return;
                }

                // Righ arrow and Down arrow
                if ( keycode === 39 || keycode === 40 ) {
                    e.preventDefault();

                    self.next();

                    return;
                }

                self.trigger('afterKeydown', e, keycode);
            });


            // Hide controls after some inactivity period
            if ( self.group[ self.currIndex ].opts.idleTime ) {
                self.idleSecondsCounter = 0;

                $D.on('mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function() {
                    self.idleSecondsCounter = 0;

                    if ( self.isIdle ) {
                        self.showControls();
                    }

                    self.isIdle = false;
                });

                self.idleInterval = window.setInterval(function() {

                    self.idleSecondsCounter++;

                    if ( self.idleSecondsCounter >= self.group[ self.currIndex ].opts.idleTime ) {
                        self.isIdle = true;
                        self.idleSecondsCounter = 0;

                        self.hideControls();
                    }

                }, 1000);
            }

        },


        // Remove events added by the core
        // ===============================

        removeEvents : function () {
            var self = this;

            $W.off( 'orientationchange.fb resize.fb' );
            $D.off( 'focusin.fb keydown.fb .fb-idle' );

            this.$refs.container.off( '.fb-close .fb-prev .fb-next' );

            if ( self.idleInterval ) {
                window.clearInterval( self.idleInterval );

                self.idleInterval = null;
            }
        },


        // Change to previous gallery item
        // ===============================

        previous : function( duration ) {
            return this.jumpTo( this.currPos - 1, duration );
        },


        // Change to next gallery item
        // ===========================

        next : function( duration ) {
            return this.jumpTo( this.currPos + 1, duration );
        },


        // Switch to selected gallery item
        // ===============================

        jumpTo : function ( pos, duration, slide ) {
            var self = this,
                firstRun,
                loop,
                current,
                previous,
                canvasWidth,
                currentPos,
                transitionProps;

            var groupLen = self.group.length;

            if ( self.isSliding || self.isClosing || ( self.isAnimating && self.firstRun ) ) {
                return;
            }

            pos  = parseInt( pos, 10 );
            loop = self.current ? self.current.opts.loop : self.opts.loop;

            if ( !loop && ( pos < 0 || pos >= groupLen ) ) {
                return false;
            }

            firstRun = self.firstRun = ( self.firstRun === null );

            if ( groupLen < 2 && !firstRun && !!self.isSliding ) {
                return;
            }

            previous = self.current;

            self.prevIndex = self.currIndex;
            self.prevPos   = self.currPos;

            // Create slides
            current = self.createSlide( pos );

            if ( groupLen > 1 ) {
                if ( loop || current.index > 0 ) {
                    self.createSlide( pos - 1 );
                }

                if ( loop || current.index < groupLen - 1 ) {
                    self.createSlide( pos + 1 );
                }
            }

            self.current   = current;
            self.currIndex = current.index;
            self.currPos   = current.pos;

            self.trigger( 'beforeShow', firstRun );

            self.updateControls();

            currentPos = $.fancybox.getTranslate( current.$slide );

            current.isMoved        = ( currentPos.left !== 0 || currentPos.top !== 0 ) && !current.$slide.hasClass( 'fancybox-animated' );
            current.forcedDuration = undefined;

            if ( $.isNumeric( duration ) ) {
                current.forcedDuration = duration;
            } else {
                duration = current.opts[ firstRun ? 'animationDuration' : 'transitionDuration' ];
            }

            duration = parseInt( duration, 10 );

            // Fresh start - reveal container, current slide and start loading content
            if ( firstRun ) {

                if ( current.opts.animationEffect && duration ) {
                    self.$refs.container.css( 'transition-duration', duration + 'ms' );
                }

                self.$refs.container.removeClass( 'fancybox-is-hidden' );

                forceRedraw( self.$refs.container );

                self.$refs.container.addClass( 'fancybox-is-open' );

                // Make first slide visible (to display loading icon, if needed)
                current.$slide.addClass( 'fancybox-slide--current' );

                self.loadSlide( current );

                self.preload();

                return;
            }

            // Clean up
            $.each(self.slides, function( index, slide ) {
                $.fancybox.stop( slide.$slide );
            });

            // Make current that slide is visible even if content is still loading
            current.$slide.removeClass( 'fancybox-slide--next fancybox-slide--previous' ).addClass( 'fancybox-slide--current' );

            // If slides have been dragged, animate them to correct position
            if ( current.isMoved ) {
                canvasWidth = Math.round( current.$slide.width() );

                $.each(self.slides, function( index, slide ) {
                    var pos = slide.pos - current.pos;

                    $.fancybox.animate( slide.$slide, {
                        top  : 0,
                        left : ( pos * canvasWidth ) + ( pos * slide.opts.gutter )
                    }, duration, function() {

                        slide.$slide.removeAttr('style').removeClass( 'fancybox-slide--next fancybox-slide--previous' );

                        if ( slide.pos === self.currPos ) {
                            current.isMoved = false;

                            self.complete();
                        }
                    });
                });

            } else {
                self.$refs.stage.children().removeAttr( 'style' );
            }

            // Start transition that reveals current content
            // or wait when it will be loaded

            if ( current.isLoaded ) {
                self.revealContent( current );

            } else {
                self.loadSlide( current );
            }

            self.preload();

            if ( previous.pos === current.pos ) {
                return;
            }

            // Handle previous slide
            // =====================

            transitionProps = 'fancybox-slide--' + ( previous.pos > current.pos ? 'next' : 'previous' );

            previous.$slide.removeClass( 'fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous' );

            previous.isComplete = false;

            if ( !duration || ( !current.isMoved && !current.opts.transitionEffect ) ) {
                return;
            }

            if ( current.isMoved ) {
                previous.$slide.addClass( transitionProps );

            } else {

                transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;

                $.fancybox.animate( previous.$slide, transitionProps, duration, function() {
                    previous.$slide.removeClass( transitionProps ).removeAttr( 'style' );
                });

            }

        },


        // Create new "slide" element
        // These are gallery items  that are actually added to DOM
        // =======================================================

        createSlide : function( pos ) {

            var self = this;
            var $slide;
            var index;

            index = pos % self.group.length;
            index = index < 0 ? self.group.length + index : index;

            if ( !self.slides[ pos ] && self.group[ index ] ) {
                $slide = $('<div class="fancybox-slide"></div>').appendTo( self.$refs.stage );

                self.slides[ pos ] = $.extend( true, {}, self.group[ index ], {
                    pos      : pos,
                    $slide   : $slide,
                    isLoaded : false,
                });

                self.updateSlide( self.slides[ pos ] );
            }

            return self.slides[ pos ];
        },


        // Scale image to the actual size of the image
        // ===========================================

        scaleToActual : function( x, y, duration ) {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var imgPos, posX, posY, scaleX, scaleY;

            var canvasWidth  = parseInt( current.$slide.width(), 10 );
            var canvasHeight = parseInt( current.$slide.height(), 10 );

            var newImgWidth  = current.width;
            var newImgHeight = current.height;

            if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
                return;
            }

            $.fancybox.stop( $what );

            self.isAnimating = true;

            x = x === undefined ? canvasWidth  * 0.5  : x;
            y = y === undefined ? canvasHeight * 0.5  : y;

            imgPos = $.fancybox.getTranslate( $what );

            scaleX  = newImgWidth  / imgPos.width;
            scaleY  = newImgHeight / imgPos.height;

            // Get center position for original image
            posX = ( canvasWidth * 0.5  - newImgWidth * 0.5 );
            posY = ( canvasHeight * 0.5 - newImgHeight * 0.5 );

            // Make sure image does not move away from edges
            if ( newImgWidth > canvasWidth ) {
                posX = imgPos.left * scaleX - ( ( x * scaleX ) - x );

                if ( posX > 0 ) {
                    posX = 0;
                }

                if ( posX <  canvasWidth - newImgWidth ) {
                    posX = canvasWidth - newImgWidth;
                }
            }

            if ( newImgHeight > canvasHeight) {
                posY = imgPos.top  * scaleY - ( ( y * scaleY ) - y );

                if ( posY > 0 ) {
                    posY = 0;
                }

                if ( posY <  canvasHeight - newImgHeight ) {
                    posY = canvasHeight - newImgHeight;
                }
            }

            self.updateCursor( newImgWidth, newImgHeight );

            $.fancybox.animate( $what, {
                top    : posY,
                left   : posX,
                scaleX : scaleX,
                scaleY : scaleY
            }, duration || 330, function() {
                self.isAnimating = false;
            });

            // Stop slideshow
            if ( self.SlideShow && self.SlideShow.isActive ) {
                self.SlideShow.stop();
            }
        },


        // Scale image to fit inside parent element
        // ========================================

        scaleToFit : function( duration ) {

            var self = this;

            var current = self.current;
            var $what   = current.$content;
            var end;

            if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating ) {
                return;
            }

            $.fancybox.stop( $what );

            self.isAnimating = true;

            end = self.getFitPos( current );

            self.updateCursor( end.width, end.height );

            $.fancybox.animate( $what, {
                top    : end.top,
                left   : end.left,
                scaleX : end.width  / $what.width(),
                scaleY : end.height / $what.height()
            }, duration || 330, function() {
                self.isAnimating = false;
            });

        },

        // Calculate image size to fit inside viewport
        // ===========================================

        getFitPos : function( slide ) {
            var self  = this;
            var $what = slide.$content;

            var imgWidth  = slide.width;
            var imgHeight = slide.height;

            var margin = slide.opts.margin;

            var canvasWidth, canvasHeight, minRatio, width, height;

            if ( !$what || !$what.length || ( !imgWidth && !imgHeight) ) {
                return false;
            }

            // Convert "margin to CSS style: [ top, right, bottom, left ]
            if ( $.type( margin ) === "number" ) {
                margin = [ margin, margin ];
            }

            if ( margin.length == 2 ) {
                margin = [ margin[0], margin[1], margin[0], margin[1] ];
            }

            if ( $W.width() < 800 ) {
                margin = [ 0, 0, 0, 0 ];
            }

            // We can not use $slide width here, because it can have different diemensions while in transiton
            canvasWidth  = parseInt( self.$refs.stage.width(), 10 )  - ( margin[ 1 ] + margin[ 3 ] );
            canvasHeight = parseInt( self.$refs.stage.height(), 10 ) - ( margin[ 0 ] + margin[ 2 ] );

            minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight );

            width  = Math.floor( minRatio * imgWidth );
            height = Math.floor( minRatio * imgHeight );

            // Use floor rounding to make sure it really fits
            return {
                top    : Math.floor( ( canvasHeight - height ) * 0.5 ) + margin[ 0 ],
                left   : Math.floor( ( canvasWidth  - width )  * 0.5 ) + margin[ 3 ],
                width  : width,
                height : height
            };

        },


        // Update position and content of all slides
        // =========================================

        update : function() {

            var self = this;

            $.each( self.slides, function( key, slide ) {
                self.updateSlide( slide );
            });

        },


        // Update slide position and scale content to fit
        // ==============================================

        updateSlide : function( slide ) {

            var self  = this;
            var $what = slide.$content;

            if ( $what && ( slide.width || slide.height ) ) {
                $.fancybox.stop( $what );

                $.fancybox.setTranslate( $what, self.getFitPos( slide ) );

                if ( slide.pos === self.currPos ) {
                    self.updateCursor();
                }
            }

            slide.$slide.trigger( 'refresh' );

            self.trigger( 'onUpdate', slide );

        },

        // Update cursor style depending if content can be zoomed
        // ======================================================

        updateCursor : function( nextWidth, nextHeight ) {

            var self = this;
            var isScaledDown;

            var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

            if ( !self.current || self.isClosing ) {
                return;
            }

            if ( self.isZoomable() ) {

                $container.addClass( 'fancybox-is-zoomable' );

                if ( nextWidth !== undefined && nextHeight !== undefined ) {
                    isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;

                } else {
                    isScaledDown = self.isScaledDown();
                }

                if ( isScaledDown ) {

                    // If image is scaled down, then, obviously, it can be zoomed to full size
                    $container.addClass('fancybox-can-zoomIn');

                } else {

                    if ( self.current.opts.touch ) {

                        // If image size ir largen than available available and touch module is not disable,
                        // then user can do panning
                        $container.addClass('fancybox-can-drag');

                    } else {
                        $container.addClass('fancybox-can-zoomOut');
                    }

                }

            } else if ( self.current.opts.touch ) {
                $container.addClass('fancybox-can-drag');
            }

        },


        // Check if current slide is zoomable
        // ==================================

        isZoomable : function() {

            var self = this;

            var current = self.current;
            var fitPos;

            if ( !current || self.isClosing ) {
                return;
            }

            // Assume that slide is zoomable if
            //   - image is loaded successfuly
            //   - click action is "zoom"
            //   - actual size of the image is smaller than available area
            if ( current.type === 'image' && current.isLoaded && !current.hasError &&
                ( current.opts.clickContent === 'zoom' || ( $.isFunction( current.opts.clickContent ) && current.opts.clickContent( current ) ===  "zoom" ) )
            ) {

                fitPos = self.getFitPos( current );

                if ( current.width > fitPos.width || current.height > fitPos.height ) {
                    return true;
                }

            }

            return false;

        },


        // Check if current image dimensions are smaller than actual
        // =========================================================

        isScaledDown : function() {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var rez = false;

            if ( $what ) {
                rez = $.fancybox.getTranslate( $what );
                rez = rez.width < current.width || rez.height < current.height;
            }

            return rez;

        },


        // Check if image dimensions exceed parent element
        // ===============================================

        canPan : function() {

            var self = this;

            var current = self.current;
            var $what   = current.$content;

            var rez = false;

            if ( $what ) {
                rez = self.getFitPos( current );
                rez = Math.abs( $what.width() - rez.width ) > 1  || Math.abs( $what.height() - rez.height ) > 1;

            }

            return rez;

        },


        // Load content into the slide
        // ===========================

        loadSlide : function( slide ) {

            var self = this, type, $slide;
            var ajaxLoad;

            if ( slide.isLoading ) {
                return;
            }

            if ( slide.isLoaded ) {
                return;
            }

            slide.isLoading = true;

            self.trigger( 'beforeLoad', slide );

            type   = slide.type;
            $slide = slide.$slide;

            $slide
                .off( 'refresh' )
                .trigger( 'onReset' )
                .addClass( 'fancybox-slide--' + ( type || 'unknown' ) )
                .addClass( slide.opts.slideClass );

            // Create content depending on the type

            switch ( type ) {

                case 'image':

                    self.setImage( slide );

                break;

                case 'iframe':

                    self.setIframe( slide );

                break;

                case 'html':

                    self.setContent( slide, slide.src || slide.content );

                break;

                case 'inline':

                    if ( $( slide.src ).length ) {
                        self.setContent( slide, $( slide.src ) );

                    } else {
                        self.setError( slide );
                    }

                break;

                case 'ajax':

                    self.showLoading( slide );

                    ajaxLoad = $.ajax( $.extend( {}, slide.opts.ajax.settings, {
                        url : slide.src,
                        success : function ( data, textStatus ) {

                            if ( textStatus === 'success' ) {
                                self.setContent( slide, data );
                            }

                        },
                        error : function ( jqXHR, textStatus ) {

                            if ( jqXHR && textStatus !== 'abort' ) {
                                self.setError( slide );
                            }

                        }
                    }));

                    $slide.one( 'onReset', function () {
                        ajaxLoad.abort();
                    });

                break;

                default:

                    self.setError( slide );

                break;

            }

            return true;

        },


        // Use thumbnail image, if possible
        // ================================

        setImage : function( slide ) {

            var self   = this;
            var srcset = slide.opts.image.srcset;

            var found, temp, pxRatio, windowWidth;

            // If we have "srcset", then we need to find matching "src" value.
            // This is necessary, because when you set an src attribute, the browser will preload the image
            // before any javascript or even CSS is applied.
            if ( srcset ) {
                pxRatio     = window.devicePixelRatio || 1;
                windowWidth = window.innerWidth  * pxRatio;

                temp = srcset.split(',').map(function ( el ) {
            		var ret = {};

            		el.trim().split(/\s+/).forEach(function ( el, i ) {
                        var value = parseInt( el.substring(0, el.length - 1), 10 );

            			if ( i === 0 ) {
            				return ( ret.url = el );
            			}

                        if ( value ) {
                            ret.value   = value;
                            ret.postfix = el[ el.length - 1 ];
                        }

            		});

            		return ret;
            	});

                // Sort by value
                temp.sort(function (a, b) {
                  return a.value - b.value;
                });

                // Ok, now we have an array of all srcset values
                for ( var j = 0; j < temp.length; j++ ) {
                    var el = temp[ j ];

                    if ( ( el.postfix === 'w' && el.value >= windowWidth ) || ( el.postfix === 'x' && el.value >= pxRatio ) ) {
                        found = el;
                        break;
                    }
                }

                // If not found, take the last one
                if ( !found && temp.length ) {
                    found = temp[ temp.length - 1 ];
                }

                if ( found ) {
                    slide.src = found.url;

                    // If we have default width/height values, we can calculate height for matching source
                    if ( slide.width && slide.height && found.postfix == 'w' ) {
                        slide.height = ( slide.width / slide.height ) * found.value;
                        slide.width  = found.value;
                    }
                }
            }

            // This will be wrapper containing both ghost and actual image
            slide.$content = $('<div class="fancybox-image-wrap"></div>')
                .addClass( 'fancybox-is-hidden' )
                .appendTo( slide.$slide );


            // If we have a thumbnail, we can display it while actual image is loading
            // Users will not stare at black screen and actual image will appear gradually
            if ( slide.opts.preload !== false && slide.opts.width && slide.opts.height && ( slide.opts.thumb || slide.opts.$thumb ) ) {

                slide.width  = slide.opts.width;
                slide.height = slide.opts.height;

                slide.$ghost = $('<img />')
                    .one('error', function() {

                        $(this).remove();

                        slide.$ghost = null;

                        self.setBigImage( slide );

                    })
                    .one('load', function() {

                        self.afterLoad( slide );

                        self.setBigImage( slide );

                    })
                    .addClass( 'fancybox-image' )
                    .appendTo( slide.$content )
                    .attr( 'src', slide.opts.thumb || slide.opts.$thumb.attr( 'src' ) );

            } else {

                self.setBigImage( slide );

            }

        },


        // Create full-size image
        // ======================

        setBigImage : function ( slide ) {
            var self = this;
            var $img = $('<img />');

            slide.$image = $img
                .one('error', function() {

                    self.setError( slide );

                })
                .one('load', function() {

                    // Clear timeout that checks if loading icon needs to be displayed
                    clearTimeout( slide.timouts );

                    slide.timouts = null;

                    if ( self.isClosing ) {
                        return;
                    }

                    slide.width  = this.naturalWidth;
                    slide.height = this.naturalHeight;

                    if ( slide.opts.image.srcset ) {
                        $img.attr( 'sizes', '100vw' ).attr( 'srcset', slide.opts.image.srcset );
                    }

                    self.hideLoading( slide );

                    if ( slide.$ghost ) {

                        slide.timouts = setTimeout(function() {
                            slide.timouts = null;

                            slide.$ghost.hide();

                        }, Math.min( 300, Math.max( 1000, slide.height / 1600 ) ) );

                    } else {
                        self.afterLoad( slide );
                    }

                })
                .addClass( 'fancybox-image' )
                .attr('src', slide.src)
                .appendTo( slide.$content );

            if ( ( $img[0].complete || $img[0].readyState == "complete" ) && $img[0].naturalWidth && $img[0].naturalHeight ) {
                  $img.trigger( 'load' );

            } else if( $img[0].error ) {
                 $img.trigger( 'error' );

            } else {

                slide.timouts = setTimeout(function() {
                    if ( !$img[0].complete && !slide.hasError ) {
                        self.showLoading( slide );
                    }

                }, 100);

            }

        },


        // Create iframe wrapper, iframe and bindings
        // ==========================================

        setIframe : function( slide ) {
            var self	= this,
                opts    = slide.opts.iframe,
                $slide	= slide.$slide,
                $iframe;

            slide.$content = $('<div class="fancybox-content' + ( opts.preload ? ' fancybox-is-hidden' : '' ) + '"></div>')
                .css( opts.css )
                .appendTo( $slide );

            $iframe = $( opts.tpl.replace(/\{rnd\}/g, new Date().getTime()) )
                .attr( opts.attr )
                .appendTo( slide.$content );

            if ( opts.preload ) {

                self.showLoading( slide );

                // Unfortunately, it is not always possible to determine if iframe is successfully loaded
                // (due to browser security policy)

                $iframe.on('load.fb error.fb', function(e) {
                    this.isReady = 1;

                    slide.$slide.trigger( 'refresh' );

                    self.afterLoad( slide );
                });

                // Recalculate iframe content size
                // ===============================

                $slide.on('refresh.fb', function() {
                    var $wrap = slide.$content,
                        frameWidth  = opts.css.width,
                        frameHeight = opts.css.height,
                        scrollWidth,
                        $contents,
                        $body;

                    if ( $iframe[0].isReady !== 1 ) {
                        return;
                    }

                    // Check if content is accessible,
                    // it will fail if frame is not with the same origin

                    try {
                        $contents = $iframe.contents();
                        $body     = $contents.find('body');

                    } catch (ignore) {}

                    // Calculate dimensions for the wrapper
                    if ( $body && $body.length ) {

                        if ( frameWidth === undefined ) {
                            scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;

                            frameWidth = Math.ceil( $body.outerWidth(true) + ( $wrap.width() - scrollWidth ) );
                            frameWidth += $wrap.outerWidth() - $wrap.innerWidth();
                        }

                        if ( frameHeight === undefined ) {
                            frameHeight = Math.ceil( $body.outerHeight(true) );
                            frameHeight += $wrap.outerHeight() - $wrap.innerHeight();
                        }

                        // Resize wrapper to fit iframe content
                        if ( frameWidth ) {
                            $wrap.width( frameWidth );
                        }

                        if ( frameHeight ) {
                            $wrap.height( frameHeight );
                        }
                    }

                    $wrap.removeClass( 'fancybox-is-hidden' );

                });

            } else {

                this.afterLoad( slide );

            }

            $iframe.attr( 'src', slide.src );

            if ( slide.opts.smallBtn === true ) {
                slide.$content.prepend( self.translate( slide, slide.opts.btnTpl.smallBtn ) );
            }

            // Remove iframe if closing or changing gallery item
            $slide.one( 'onReset', function () {

                // This helps IE not to throw errors when closing
                try {

                    $( this ).find( 'iframe' ).hide().attr( 'src', '//about:blank' );

                } catch ( ignore ) {}

                $( this ).empty();

                slide.isLoaded = false;

            });

        },


        // Wrap and append content to the slide
        // ======================================

        setContent : function ( slide, content ) {

            var self = this;

            if ( self.isClosing ) {
                return;
            }

            self.hideLoading( slide );

            slide.$slide.empty();

            if ( isQuery( content ) && content.parent().length ) {

                // If content is a jQuery object, then it will be moved to the slide.
                // The placeholder is created so we will know where to put it back.
                // If user is navigating gallery fast, then the content might be already inside fancyBox
                // =====================================================================================

                // Make sure content is not already moved to fancyBox
                content.parent( '.fancybox-slide--inline' ).trigger( 'onReset' );

                // Create temporary element marking original place of the content
                slide.$placeholder = $( '<div></div>' ).hide().insertAfter( content );

                // Make sure content is visible
                content.css('display', 'inline-block');

            } else if ( !slide.hasError ) {

                // If content is just a plain text, try to convert it to html
                if ( $.type( content ) === 'string' ) {
                    content = $('<div>').append( $.trim( content ) ).contents();

                    // If we have text node, then add wrapping element to make vertical alignment work
                    if ( content[0].nodeType === 3 ) {
                        content = $('<div>').html( content );
                    }
                }

                // If "filter" option is provided, then filter content
                if ( slide.opts.filter ) {
                    content = $('<div>').html( content ).find( slide.opts.filter );
                }

            }

            slide.$slide.one('onReset', function () {

                // Put content back
                if ( slide.$placeholder ) {
                    slide.$placeholder.after( content.hide() ).remove();

                    slide.$placeholder = null;
                }

                // Remove custom close button
                if ( slide.$smallBtn ) {
                    slide.$smallBtn.remove();

                    slide.$smallBtn = null;
                }

                // Remove content and mark slide as not loaded
                if ( !slide.hasError ) {
                    $(this).empty();

                    slide.isLoaded = false;
                }

            });

            slide.$content = $( content ).appendTo( slide.$slide );

            if ( slide.opts.smallBtn && !slide.$smallBtn ) {
                slide.$smallBtn = $( self.translate( slide, slide.opts.btnTpl.smallBtn ) ).appendTo( slide.$content.filter('div').first() );
            }

            this.afterLoad( slide );
        },

        // Display error message
        // =====================

        setError : function ( slide ) {

            slide.hasError = true;

            slide.$slide.removeClass( 'fancybox-slide--' + slide.type );

            this.setContent( slide, this.translate( slide, slide.opts.errorTpl ) );

        },


        // Show loading icon inside the slide
        // ==================================

        showLoading : function( slide ) {

            var self = this;

            slide = slide || self.current;

            if ( slide && !slide.$spinner ) {
                slide.$spinner = $( self.opts.spinnerTpl ).appendTo( slide.$slide );
            }

        },

        // Remove loading icon from the slide
        // ==================================

        hideLoading : function( slide ) {

            var self = this;

            slide = slide || self.current;

            if ( slide && slide.$spinner ) {
                slide.$spinner.remove();

                delete slide.$spinner;
            }

        },


        // Adjustments after slide content has been loaded
        // ===============================================

        afterLoad : function( slide ) {

            var self = this;

            if ( self.isClosing ) {
                return;
            }

            slide.isLoading = false;
            slide.isLoaded  = true;

            self.trigger( 'afterLoad', slide );

            self.hideLoading( slide );

            if ( slide.opts.protect && slide.$content && !slide.hasError ) {

                // Disable right click
                slide.$content.on( 'contextmenu.fb', function( e ) {
                     if ( e.button == 2 ) {
                         e.preventDefault();
                     }

                    return true;
                });

                // Add fake element on top of the image
                // This makes a bit harder for user to select image
                if ( slide.type === 'image' ) {
                    $( '<div class="fancybox-spaceball"></div>' ).appendTo( slide.$content );
                }

            }

            self.revealContent( slide );

        },


        // Make content visible
        // This method is called right after content has been loaded or
        // user navigates gallery and transition should start
        // ============================================================

        revealContent : function( slide ) {

            var self   = this;
            var $slide = slide.$slide;

            var effect, effectClassName, duration, opacity, end, start = false;

            effect   = slide.opts[ self.firstRun ? 'animationEffect'   : 'transitionEffect' ];
            duration = slide.opts[ self.firstRun ? 'animationDuration' : 'transitionDuration' ];

            duration = parseInt( slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10 );

            if ( slide.isMoved || slide.pos !== self.currPos || !duration ) {
                effect = false;
            }

            // Check if can zoom
            if ( effect === 'zoom' && !( slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && ( start = self.getThumbPos( slide ) ) ) ) {
                effect = 'fade';
            }

            // Zoom animation
            // ==============

            if ( effect === 'zoom' ) {
                end = self.getFitPos( slide );

                end.scaleX = end.width  / start.width;
                end.scaleY = end.height / start.height;

                delete end.width;
                delete end.height;

                // Check if we need to animate opacity
                opacity = slide.opts.zoomOpacity;

                if ( opacity == 'auto' ) {
                    opacity = Math.abs( slide.width / slide.height - start.width / start.height ) > 0.1;
                }

                if ( opacity ) {
                    start.opacity = 0.1;
                    end.opacity   = 1;
                }

                // Draw image at start position
                $.fancybox.setTranslate( slide.$content.removeClass( 'fancybox-is-hidden' ), start );

                forceRedraw( slide.$content );

                // Start animation
                $.fancybox.animate( slide.$content, end, duration, function() {
                    self.complete();
                });

                return;
            }


            self.updateSlide( slide );


            // Simply show content
            // ===================

            if ( !effect ) {
                forceRedraw( $slide );

                slide.$content.removeClass( 'fancybox-is-hidden' );

                if ( slide.pos === self.currPos ) {
                    self.complete();
                }

                return;
            }

            $.fancybox.stop( $slide );

            effectClassName = 'fancybox-animated fancybox-slide--' + ( slide.pos > self.prevPos ? 'next' : 'previous' ) + ' fancybox-fx-' + effect;

            $slide.removeAttr( 'style' ).removeClass( 'fancybox-slide--current fancybox-slide--next fancybox-slide--previous' ).addClass( effectClassName );

            slide.$content.removeClass( 'fancybox-is-hidden' );

            //Force reflow for CSS3 transitions
            forceRedraw( $slide );

            $.fancybox.animate( $slide, 'fancybox-slide--current', duration, function(e) {
                $slide.removeClass( effectClassName ).removeAttr( 'style' );

                if ( slide.pos === self.currPos ) {
                    self.complete();
                }

            }, true);

        },


        // Check if we can and have to zoom from thumbnail
        //================================================

        getThumbPos : function( slide ) {

            var self = this;
            var rez  = false;

            // Check if element is inside the viewport by at least 1 pixel
            var isElementVisible = function( $el ) {
                var element = $el[0];

                var elementRect = element.getBoundingClientRect();
                var parentRects = [];

                var visibleInAllParents;

                while ( element.parentElement !== null ) {
                    if ( $(element.parentElement).css('overflow') === 'hidden'  || $(element.parentElement).css('overflow') === 'auto' ) {
                        parentRects.push(element.parentElement.getBoundingClientRect());
                    }

                    element = element.parentElement;
                }

                visibleInAllParents = parentRects.every(function(parentRect){
                    var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
                    var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);

                    return visiblePixelX > 0 && visiblePixelY > 0;
                });

                return visibleInAllParents &&
                    elementRect.bottom > 0 && elementRect.right > 0 &&
                    elementRect.left < $(window).width() && elementRect.top < $(window).height();
            };

            var $thumb   = slide.opts.$thumb;
            var thumbPos = $thumb ? $thumb.offset() : 0;
            var slidePos;

            if ( thumbPos && $thumb[0].ownerDocument === document && isElementVisible( $thumb ) ) {
                slidePos = self.$refs.stage.offset();

                rez = {
                    top    : thumbPos.top  - slidePos.top  + parseFloat( $thumb.css( "border-top-width" ) || 0 ),
                    left   : thumbPos.left - slidePos.left + parseFloat( $thumb.css( "border-left-width" ) || 0 ),
                    width  : $thumb.width(),
                    height : $thumb.height(),
                    scaleX : 1,
                    scaleY : 1
                };
            }

            return rez;
        },


        // Final adjustments after current gallery item is moved to position
        // and it`s content is loaded
        // ==================================================================

        complete : function() {

            var self = this;

            var current = self.current;
            var slides  = {};

            if ( current.isMoved || !current.isLoaded || current.isComplete ) {
                return;
            }

            current.isComplete = true;

            current.$slide.siblings().trigger( 'onReset' );

            // Trigger any CSS3 transiton inside the slide
            forceRedraw( current.$slide );

            current.$slide.addClass( 'fancybox-slide--complete' );

            // Remove unnecessary slides
            $.each( self.slides, function( key, slide ) {
                if ( slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1 ) {
                    slides[ slide.pos ] = slide;

                } else if ( slide ) {

                    $.fancybox.stop( slide.$slide );

                    slide.$slide.off().remove();
                }
            });

            self.slides = slides;

            self.updateCursor();

            self.trigger( 'afterShow' );

            // Try to focus on the first focusable element
            if ( $( document.activeElement ).is( '[disabled]' ) || ( current.opts.autoFocus && !( current.type == 'image' || current.type === 'iframe' ) ) ) {
                self.focus();
            }

        },


        // Preload next and previous slides
        // ================================

        preload : function() {
            var self = this;
            var next, prev;

            if ( self.group.length < 2 ) {
                return;
            }

            next  = self.slides[ self.currPos + 1 ];
            prev  = self.slides[ self.currPos - 1 ];

            if ( next && next.type === 'image' ) {
                self.loadSlide( next );
            }

            if ( prev && prev.type === 'image' ) {
                self.loadSlide( prev );
            }

        },


        // Try to find and focus on the first focusable element
        // ====================================================

        focus : function() {
            var current = this.current;
            var $el;

            if ( this.isClosing ) {
                return;
            }

            if ( current && current.isComplete ) {

                // Look for first input with autofocus attribute
                $el = current.$slide.find('input[autofocus]:enabled:visible:first');

                if ( !$el.length ) {
                    $el = current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first');
                }
            }

            $el = $el && $el.length ? $el : this.$refs.container;

            $el.focus();
        },


        // Activates current instance - brings container to the front and enables keyboard,
        // notifies other instances about deactivating
        // =================================================================================

        activate : function () {
            var self = this;

            // Deactivate all instances
            $( '.fancybox-container' ).each(function () {
                var instance = $(this).data( 'FancyBox' );

                // Skip self and closing instances
                if (instance && instance.uid !== self.uid && !instance.isClosing) {
                    instance.trigger( 'onDeactivate' );
                }

            });

            if ( self.current ) {
                if ( self.$refs.container.index() > 0 ) {
                    self.$refs.container.prependTo( document.body );
                }

                self.updateControls();
            }

            self.trigger( 'onActivate' );

            self.addEvents();

        },


        // Start closing procedure
        // This will start "zoom-out" animation if needed and clean everything up afterwards
        // =================================================================================

        close : function( e, d ) {

            var self    = this;
            var current = self.current;

            var effect, duration;
            var $what, opacity, start, end;

            var done = function() {
                self.cleanUp( e );
            };

            if ( self.isClosing ) {
                return false;
            }

            self.isClosing = true;

            // If beforeClose callback prevents closing, make sure content is centered
            if ( self.trigger( 'beforeClose', e ) === false ) {
                self.isClosing = false;

                requestAFrame(function() {
                    self.update();
                });

                return false;
            }

            // Remove all events
            // If there are multiple instances, they will be set again by "activate" method
            self.removeEvents();

            if ( current.timouts ) {
                clearTimeout( current.timouts );
            }

            $what    = current.$content;
            effect   = current.opts.animationEffect;
            duration = $.isNumeric( d ) ? d : ( effect ? current.opts.animationDuration : 0 );

            // Remove other slides
            current.$slide.off( transitionEnd ).removeClass( 'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated' );

            current.$slide.siblings().trigger( 'onReset' ).remove();

            // Trigger animations
            if ( duration ) {
                self.$refs.container.removeClass( 'fancybox-is-open' ).addClass( 'fancybox-is-closing' );
            }

            // Clean up
            self.hideLoading( current );

            self.hideControls();

            self.updateCursor();

            // Check if possible to zoom-out
            if ( effect === 'zoom' && !( e !== true && $what && duration && current.type === 'image' && !current.hasError && ( end = self.getThumbPos( current ) ) ) ) {
                effect = 'fade';
            }

            if ( effect === 'zoom' ) {
                $.fancybox.stop( $what );

                start = $.fancybox.getTranslate( $what );

                start.width  = start.width  * start.scaleX;
                start.height = start.height * start.scaleY;

                // Check if we need to animate opacity
                opacity = current.opts.zoomOpacity;

                if ( opacity == 'auto' ) {
                    opacity = Math.abs( current.width / current.height - end.width / end.height ) > 0.1;
                }

                if ( opacity ) {
                    end.opacity = 0;
                }

                start.scaleX = start.width  / end.width;
                start.scaleY = start.height / end.height;

                start.width  = end.width;
                start.height = end.height;

                $.fancybox.setTranslate( current.$content, start );

                $.fancybox.animate( current.$content, end, duration, done );

                return true;
            }

            if ( effect && duration ) {

                // If skip animation
                if ( e === true ) {
                    setTimeout( done, duration );

                } else {
                    $.fancybox.animate( current.$slide.removeClass( 'fancybox-slide--current' ), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done );
                }

            } else {
                done();
            }

            return true;
        },


        // Final adjustments after removing the instance
        // =============================================

        cleanUp : function( e ) {
            var self = this,
                instance;

            self.current.$slide.trigger( 'onReset' );

            self.$refs.container.empty().remove();

            self.trigger( 'afterClose', e );

            // Place back focus
            if ( self.$lastFocus && !!self.current.opts.backFocus ) {
                self.$lastFocus.focus();
            }

            self.current = null;

            // Check if there are other instances
            instance = $.fancybox.getInstance();

            if ( instance ) {
                instance.activate();

            } else {
                $W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );

                $( 'html' ).removeClass( 'fancybox-enabled' );

                $( '#fancybox-style-noscroll' ).remove();
            }

        },


        // Call callback and trigger an event
        // ==================================

        trigger : function( name, slide ) {
            var args  = Array.prototype.slice.call(arguments, 1),
                self  = this,
                obj   = slide && slide.opts ? slide : self.current,
                rez;

            if ( obj ) {
                args.unshift( obj );

            } else {
                obj = self;
            }

            args.unshift( self );

            if ( $.isFunction( obj.opts[ name ] ) ) {
                rez = obj.opts[ name ].apply( obj, args );
            }

            if ( rez === false ) {
                return rez;
            }

            if ( name === 'afterClose' ) {
                $D.trigger( name + '.fb', args );

            } else {
                self.$refs.container.trigger( name + '.fb', args );
            }

        },


        // Update infobar values, navigation button states and reveal caption
        // ==================================================================

        updateControls : function ( force ) {

            var self = this;

            var current  = self.current;
            var index    = current.index;
            var opts     = current.opts;
            var caption  = opts.caption;
            var $caption = self.$refs.caption;

            // Recalculate content dimensions
            current.$slide.trigger( 'refresh' );

            self.$caption = caption && caption.length ? $caption.html( caption ) : null;

            if ( !self.isHiddenControls ) {
                self.showControls();
            }

            // Update info and navigation elements
            $('[data-fancybox-count]').html( self.group.length );
            $('[data-fancybox-index]').html( index + 1 );

            $('[data-fancybox-prev]').prop('disabled', ( !opts.loop && index <= 0 ) );
            $('[data-fancybox-next]').prop('disabled', ( !opts.loop && index >= self.group.length - 1 ) );

        },

        // Hide toolbar and caption
        // ========================

        hideControls : function () {

            this.isHiddenControls = true;

            this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');

        },

        showControls : function() {

            var self = this;
            var opts = self.current ? self.current.opts : self.opts;
            var $container = self.$refs.container;

            self.isHiddenControls   = false;
            self.idleSecondsCounter = 0;

            $container
                .toggleClass('fancybox-show-toolbar', !!( opts.toolbar && opts.buttons ) )
                .toggleClass('fancybox-show-infobar', !!( opts.infobar && self.group.length > 1 ) )
                .toggleClass('fancybox-show-nav',     !!( opts.arrows && self.group.length > 1 ) )
                .toggleClass('fancybox-is-modal',     !!opts.modal );

            if ( self.$caption ) {
                $container.addClass( 'fancybox-show-caption ');

            } else {
               $container.removeClass( 'fancybox-show-caption' );
           }

       },


       // Toggle toolbar and caption
       // ==========================

       toggleControls : function() {

           if ( this.isHiddenControls ) {
               this.showControls();

           } else {
               this.hideControls();
           }

       },


    });


    $.fancybox = {

        version  : "3.1.28",
        defaults : defaults,


        // Get current instance and execute a command.
        //
        // Examples of usage:
        //
        //   $instance = $.fancybox.getInstance();
        //   $.fancybox.getInstance().jumpTo( 1 );
        //   $.fancybox.getInstance( 'jumpTo', 1 );
        //   $.fancybox.getInstance( function() {
        //       console.info( this.currIndex );
        //   });
        // ======================================================

        getInstance : function ( command ) {
            var instance = $('.fancybox-container:not(".fancybox-is-closing"):first').data( 'FancyBox' );
            var args     = Array.prototype.slice.call(arguments, 1);

            if ( instance instanceof FancyBox ) {

                if ( $.type( command ) === 'string' ) {
                    instance[ command ].apply( instance, args );

                } else if ( $.type( command ) === 'function' ) {
                    command.apply( instance, args );

                }

                return instance;
            }

            return false;

        },


        // Create new instance
        // ===================

        open : function ( items, opts, index ) {
            return new FancyBox( items, opts, index );
        },


        // Close current or all instances
        // ==============================

        close : function ( all ) {
            var instance = this.getInstance();

            if ( instance ) {
                instance.close();

                // Try to find and close next instance

                if ( all === true ) {
                    this.close();
                }
            }

        },

        // Close instances and unbind all events
        // ==============================

        destroy : function() {

            this.close( true );

            $D.off( 'click.fb-start' );

        },


        // Try to detect mobile devices
        // ============================

        isMobile : document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),


        // Detect if 'translate3d' support is available
        // ============================================

        use3d : (function() {
            var div = document.createElement('div');

            return window.getComputedStyle && window.getComputedStyle( div ).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
        }()),


        // Helper function to get current visual state of an element
        // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
        // =====================================================================

        getTranslate : function( $el ) {
            var matrix;

            if ( !$el || !$el.length ) {
                return false;
            }

            matrix  = $el.eq( 0 ).css('transform');

            if ( matrix && matrix.indexOf( 'matrix' ) !== -1 ) {
                matrix = matrix.split('(')[1];
                matrix = matrix.split(')')[0];
                matrix = matrix.split(',');
            } else {
                matrix = [];
            }

            if ( matrix.length ) {

                // If IE
                if ( matrix.length > 10 ) {
                    matrix = [ matrix[13], matrix[12], matrix[0], matrix[5] ];

                } else {
                    matrix = [ matrix[5], matrix[4], matrix[0], matrix[3]];
                }

                matrix = matrix.map(parseFloat);

            } else {
                matrix = [ 0, 0, 1, 1 ];

                var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
                var transRez = transRegex.exec( $el.eq( 0 ).attr('style') );

                if ( transRez ) {
                    matrix[ 0 ] = parseFloat( transRez[2] );
                    matrix[ 1 ] = parseFloat( transRez[1] );
                }
            }

            return {
                top     : matrix[ 0 ],
                left    : matrix[ 1 ],
                scaleX  : matrix[ 2 ],
                scaleY  : matrix[ 3 ],
                opacity : parseFloat( $el.css('opacity') ),
                width   : $el.width(),
                height  : $el.height()
            };

        },


        // Shortcut for setting "translate3d" properties for element
        // Can set be used to set opacity, too
        // ========================================================

        setTranslate : function( $el, props ) {
            var str  = '';
            var css  = {};

            if ( !$el || !props ) {
                return;
            }

            if ( props.left !== undefined || props.top !== undefined ) {
                str = ( props.left === undefined ? $el.position().left : props.left )  + 'px, ' + ( props.top === undefined ? $el.position().top : props.top ) + 'px';

                if ( this.use3d ) {
                    str = 'translate3d(' + str + ', 0px)';

                } else {
                    str = 'translate(' + str + ')';
                }
            }

            if ( props.scaleX !== undefined && props.scaleY !== undefined ) {
                str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
            }

            if ( str.length ) {
                css.transform = str;
            }

            if ( props.opacity !== undefined ) {
                css.opacity = props.opacity;
            }

            if ( props.width !== undefined ) {
                css.width = props.width;
            }

            if ( props.height !== undefined ) {
                css.height = props.height;
            }

            return $el.css( css );
        },


        // Simple CSS transition handler
        // =============================

        animate : function ( $el, to, duration, callback, leaveAnimationName ) {
            var event = transitionEnd || 'transitionend';

            if ( $.isFunction( duration ) ) {
                callback = duration;
                duration = null;
            }

            if ( !$.isPlainObject( to ) ) {
                $el.removeAttr('style');
            }

            $el.on( event, function(e) {

                // Skip events from child elements and z-index change
                if ( e && e.originalEvent && ( !$el.is( e.originalEvent.target ) || e.originalEvent.propertyName == 'z-index' ) ) {
                    return;
                }

                $el.off( event );

                if ( $.isPlainObject( to ) ) {

                    if ( to.scaleX !== undefined && to.scaleY !== undefined ) {
                        $el.css( 'transition-duration', '0ms' );

                        to.width  = Math.round( $el.width()  * to.scaleX );
                        to.height = Math.round( $el.height() * to.scaleY );

                        to.scaleX = 1;
                        to.scaleY = 1;

                        $.fancybox.setTranslate( $el, to );
                    }

                } else if ( leaveAnimationName !== true ) {
                    $el.removeClass( to );
                }

                if ( $.isFunction( callback ) ) {
                    callback( e );
                }

            });

            if ( $.isNumeric( duration ) ) {
                $el.css( 'transition-duration', duration + 'ms' );
            }

            if ( $.isPlainObject( to ) ) {
                $.fancybox.setTranslate( $el, to );

            } else {
                $el.addClass( to );
            }

            $el.data("timer", setTimeout(function() {
                $el.trigger( 'transitionend' );
            }, duration + 16));

        },

        stop : function( $el ) {
            clearTimeout( $el.data("timer") );

            $el.off( transitionEnd );
        }

    };


    // Default click handler for "fancyboxed" links
    // ============================================

    function _run( e ) {
        var target	= e.currentTarget,
            opts	= e.data ? e.data.options : {},
            items	= opts.selector ? $( opts.selector ) : ( e.data ? e.data.items : [] ),
            value	= $( target ).attr( 'data-fancybox' ) || '',
            index	= 0,
            active  = $.fancybox.getInstance();

        e.preventDefault();

        // Avoid opening multiple times
        if ( active && active.current.opts.$orig.is( target ) ) {
            return;
        }

        // Get all related items and find index for clicked one
        if ( value ) {
            items = items.length ? items.filter( '[data-fancybox="' + value + '"]' ) : $( '[data-fancybox="' + value + '"]' );
            index = items.index( target );

            // Sometimes current item can not be found
            // (for example, when slider clones items)
            if ( index < 0 ) {
                index = 0;
            }

        } else {
            items = [ target ];
        }

        $.fancybox.open( items, opts, index );
    }


    // Create a jQuery plugin
    // ======================

    $.fn.fancybox = function (options) {
        var selector;

        options  = options || {};
        selector = options.selector || false;

        if ( selector ) {

            $( 'body' ).off( 'click.fb-start', selector ).on( 'click.fb-start', selector, {
                options : options
            }, _run );

        } else {

            this.off( 'click.fb-start' ).on( 'click.fb-start', {
                items   : this,
                options : options
            }, _run);

        }

        return this;
    };


    // Self initializing plugin
    // ========================

    $D.on( 'click.fb-start', '[data-fancybox]', _run );

}( window, document, window.jQuery || jQuery ));

// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
;(function ($) {

	'use strict';

	// Formats matching url to final form

	var format = function (url, rez, params) {
		if ( !url ) {
			return;
		}

		params = params || '';

		if ( $.type(params) === "object" ) {
			params = $.param(params, true);
		}

		$.each(rez, function (key, value) {
			url = url.replace('$' + key, value || '');
		});

		if (params.length) {
			url += (url.indexOf('?') > 0 ? '&' : '?') + params;
		}

		return url;
	};

	// Object containing properties for each media type

	var defaults = {
		youtube : {
			matcher : /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params  : {
				autoplay : 1,
				autohide : 1,
				fs  : 1,
				rel : 0,
				hd  : 1,
				wmode : 'transparent',
				enablejsapi : 1,
				html5 : 1
			},
			paramPlace : 8,
			type  : 'iframe',
			url   : '//www.youtube.com/embed/$4',
			thumb : '//img.youtube.com/vi/$4/hqdefault.jpg'
		},

		vimeo : {
			matcher : /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params  : {
				autoplay : 1,
				hd : 1,
				show_title    : 1,
				show_byline   : 1,
				show_portrait : 0,
				fullscreen    : 1,
				api : 1
			},
			paramPlace : 3,
			type : 'iframe',
			url : '//player.vimeo.com/video/$2'
		},

		metacafe : {
			matcher : /metacafe.com\/watch\/(\d+)\/(.*)?/,
			type    : 'iframe',
			url     : '//www.metacafe.com/embed/$1/?ap=1'
		},

		dailymotion : {
			matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
			params : {
				additionalInfos : 0,
				autoStart : 1
			},
			type : 'iframe',
			url  : '//www.dailymotion.com/embed/video/$1'
		},

		vine : {
			matcher : /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
			type    : 'iframe',
			url     : '//vine.co/v/$1/embed/simple'
		},

		instagram : {
			matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type    : 'image',
			url     : '//$1/p/$2/media/?size=l'
		},

		// Examples:
		// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
		// https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
		// https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
		gmap_place : {
			matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type    : 'iframe',
			url     : function (rez) {
				return '//maps.google.' + rez[2] + '/?ll=' + ( rez[9] ? rez[9] + '&z=' + Math.floor(  rez[10]  ) + ( rez[12] ? rez[12].replace(/^\//, "&") : '' )  : rez[12] ) + '&output=' + ( rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed' );
			}
		},

		// Examples:
		// https://www.google.com/maps/search/Empire+State+Building/
		// https://www.google.com/maps/search/?api=1&query=centurylink+field
		// https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
		gmap_search : {
			matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
			type    : 'iframe',
			url     : function (rez) {
				return '//maps.google.' + rez[2] + '/maps?q=' + rez[5].replace('query=', 'q=').replace('api=1', '') + '&output=embed';
			}
		}
	};

	$(document).on('onInit.fb', function (e, instance) {

		$.each(instance.group, function( i, item ) {

			var url	 = item.src || '',
				type = false,
				media,
				thumb,
				rez,
				params,
				urlParams,
				o,
				provider;

			// Skip items that already have content type
			if ( item.type ) {
				return;
			}

			media = $.extend( true, {}, defaults, item.opts.media );

			// Look for any matching media type
			$.each(media, function ( n, el ) {
				rez = url.match(el.matcher);
				o   = {};
				provider = n;

				if (!rez) {
					return;
				}

				type = el.type;

				if ( el.paramPlace && rez[ el.paramPlace ] ) {
					urlParams = rez[ el.paramPlace ];

					if ( urlParams[ 0 ] == '?' ) {
						urlParams = urlParams.substring(1);
					}

					urlParams = urlParams.split('&');

					for ( var m = 0; m < urlParams.length; ++m ) {
						var p = urlParams[ m ].split('=', 2);

						if ( p.length == 2 ) {
							o[ p[0] ] = decodeURIComponent( p[1].replace(/\+/g, " ") );
						}
					}
				}

				params = $.extend( true, {}, el.params, item.opts[ n ], o );

				url   = $.type(el.url) === "function" ? el.url.call(this, rez, params, item) : format(el.url, rez, params);
				thumb = $.type(el.thumb) === "function" ? el.thumb.call(this, rez, params, item) : format(el.thumb, rez);

				if ( provider === 'vimeo' ) {
					url = url.replace('&%23', '#');
				}

				return false;
			});

			// If it is found, then change content type and update the url

			if ( type ) {
				item.src  = url;
				item.type = type;

				if ( !item.opts.thumb && !( item.opts.$thumb && item.opts.$thumb.length ) ) {
					item.opts.thumb = thumb;
				}

				if ( type === 'iframe' ) {
					$.extend(true, item.opts, {
						iframe : {
							preload : false,
							attr : {
								scrolling : "no"
							}
						}
					});

					item.contentProvider = provider;

					item.opts.slideClass += ' fancybox-slide--' + ( provider == 'gmap_place' || provider == 'gmap_search' ? 'map' : 'video' );
				}

			} else {

				// If no content type is found, then set it to `image` as fallback
				item.type = 'image';
			}

		});

	});

}(window.jQuery));

// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
;(function (window, document, $) {
	'use strict';

	var requestAFrame = (function () {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                // if all else fails, use setTimeout
                function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
    })();


    var cancelAFrame = (function () {
        return window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.oCancelAnimationFrame ||
                function (id) {
                    window.clearTimeout(id);
                };
    })();


	var pointers = function( e ) {
		var result = [];

		e = e.originalEvent || e || window.e;
		e = e.touches && e.touches.length ? e.touches : ( e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ] );

		for ( var key in e ) {

			if ( e[ key ].pageX ) {
				result.push( { x : e[ key ].pageX, y : e[ key ].pageY } );

			} else if ( e[ key ].clientX ) {
				result.push( { x : e[ key ].clientX, y : e[ key ].clientY } );
			}
		}

		return result;
	};

	var distance = function( point2, point1, what ) {
		if ( !point1 || !point2 ) {
			return 0;
		}

		if ( what === 'x' ) {
			return point2.x - point1.x;

		} else if ( what === 'y' ) {
			return point2.y - point1.y;
		}

		return Math.sqrt( Math.pow( point2.x - point1.x, 2 ) + Math.pow( point2.y - point1.y, 2 ) );
	};

	var isClickable = function( $el ) {

		if ( $el.is('a,button,input,select,textarea,label') || $.isFunction( $el.get(0).onclick ) || $el.data('selectable') ) {
			return true;
		}

		// Check for attributes like data-fancybox-next or data-fancybox-close
		for ( var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++ ) {
            if ( atts[i].nodeName.substr(0, 14) === 'data-fancybox-' ) {
                return true;
            }
        }

	 	return false;
	};

	var hasScrollbars = function( el ) {
		var overflowY = window.getComputedStyle( el )['overflow-y'];
		var overflowX = window.getComputedStyle( el )['overflow-x'];

		var vertical   = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
		var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;

		return vertical || horizontal;
	};

	var isScrollable = function ( $el ) {
		var rez = false;

		while ( true ) {
			rez	= hasScrollbars( $el.get(0) );

			if ( rez ) {
				break;
			}

			$el = $el.parent();

			if ( !$el.length || $el.hasClass( 'fancybox-stage' ) || $el.is( 'body' ) ) {
				break;
			}
		}

		return rez;
	};


	var Guestures = function ( instance ) {
		var self = this;

		self.instance = instance;

		self.$bg        = instance.$refs.bg;
		self.$stage     = instance.$refs.stage;
		self.$container = instance.$refs.container;

		self.destroy();

		self.$container.on( 'touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart') );
	};

	Guestures.prototype.destroy = function() {
		this.$container.off( '.fb.touch' );
	};

	Guestures.prototype.ontouchstart = function( e ) {
		var self = this;

		var $target  = $( e.target );
		var instance = self.instance;
		var current  = instance.current;
		var $content = current.$content;

		var isTouchDevice = ( e.type == 'touchstart' );

		// Do not respond to both events
		if ( isTouchDevice ) {
	        self.$container.off( 'mousedown.fb.touch' );
	    }

		// Ignore clicks while zooming or closing
		if ( !current || self.instance.isAnimating || self.instance.isClosing ) {
			e.stopPropagation();
			e.preventDefault();

			return;
		}

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Ignore taping on links, buttons, input elements
		if ( !$target.length || isClickable( $target ) || isClickable( $target.parent() ) ) {
			return;
		}

		// Ignore clicks on the scrollbar
		if ( e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		self.startPoints = pointers( e );

		// Prevent zooming if already swiping
		if ( !self.startPoints || ( self.startPoints.length > 1 && instance.isSliding ) ) {
			return;
		}

		self.$target  = $target;
		self.$content = $content;
		self.canTap   = true;

		$(document).off( '.fb.touch' );

		$(document).on( isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch',  $.proxy(self, "ontouchend"));
		$(document).on( isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch',  $.proxy(self, "ontouchmove"));

		if ( !(instance.current.opts.touch || instance.canPan() ) || !( $target.is( self.$stage ) || self.$stage.find( $target ).length ) ) {

			// Prevent ghosting
			if ( $target.is('img') ) {
				e.preventDefault();
			}

			return;
		}

		e.stopPropagation();

		if ( !( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) ) {
			e.preventDefault();
		}

		self.canvasWidth  = Math.round( current.$slide[0].clientWidth );
		self.canvasHeight = Math.round( current.$slide[0].clientHeight );

		self.startTime = new Date().getTime();
		self.distanceX = self.distanceY = self.distance = 0;

		self.isPanning = false;
		self.isSwiping = false;
		self.isZooming = false;

		self.sliderStartPos  = self.sliderLastPos || { top: 0, left: 0 };
		self.contentStartPos = $.fancybox.getTranslate( self.$content );
		self.contentLastPos  = null;

		if ( self.startPoints.length === 1 && !self.isZooming ) {
			self.canTap = !instance.isSliding;

			if ( current.type === 'image' && ( self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1 ) ) {

				$.fancybox.stop( self.$content );

				self.$content.css( 'transition-duration', '0ms' );

				self.isPanning = true;

			} else {

				self.isSwiping = true;
			}

			self.$container.addClass('fancybox-controls--isGrabbing');
		}

		if ( self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && ( current.isLoaded || current.$ghost ) ) {
			self.isZooming = true;

			self.isSwiping = false;
			self.isPanning = false;

			$.fancybox.stop( self.$content );

			self.$content.css( 'transition-duration', '0ms' );

			self.centerPointStartX = ( ( self.startPoints[0].x + self.startPoints[1].x ) * 0.5 ) - $(window).scrollLeft();
			self.centerPointStartY = ( ( self.startPoints[0].y + self.startPoints[1].y ) * 0.5 ) - $(window).scrollTop();

			self.percentageOfImageAtPinchPointX = ( self.centerPointStartX - self.contentStartPos.left ) / self.contentStartPos.width;
			self.percentageOfImageAtPinchPointY = ( self.centerPointStartY - self.contentStartPos.top  ) / self.contentStartPos.height;

			self.startDistanceBetweenFingers = distance( self.startPoints[0], self.startPoints[1] );
		}

	};

	Guestures.prototype.ontouchmove = function( e ) {

		var self = this;

		self.newPoints = pointers( e );

		if ( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) {
			e.stopPropagation();

			self.canTap = false;

			return;
		}

		if ( !( self.instance.current.opts.touch || self.instance.canPan() ) || !self.newPoints || !self.newPoints.length ) {
			return;
		}

		self.distanceX = distance( self.newPoints[0], self.startPoints[0], 'x' );
		self.distanceY = distance( self.newPoints[0], self.startPoints[0], 'y' );

		self.distance = distance( self.newPoints[0], self.startPoints[0] );

		// Skip false ontouchmove events (Chrome)
		if ( self.distance > 0 ) {

			if ( !( self.$target.is( self.$stage ) || self.$stage.find( self.$target ).length ) ) {
				return;
			}

			e.stopPropagation();
			e.preventDefault();

			if ( self.isSwiping ) {
				self.onSwipe();

			} else if ( self.isPanning ) {
				self.onPan();

			} else if ( self.isZooming ) {
				self.onZoom();
			}

		}

	};

	Guestures.prototype.onSwipe = function() {

		var self = this;

		var swiping = self.isSwiping;
		var left    = self.sliderStartPos.left || 0;
		var angle;

		if ( swiping === true ) {

			if ( Math.abs( self.distance ) > 10 )  {

				self.canTap = false;

				if ( self.instance.group.length < 2 && self.instance.opts.touch.vertical ) {
					self.isSwiping  = 'y';

				} else if ( self.instance.isSliding || self.instance.opts.touch.vertical === false || ( self.instance.opts.touch.vertical === 'auto' && $( window ).width() > 800 ) ) {
					self.isSwiping  = 'x';

				} else {
					angle = Math.abs( Math.atan2( self.distanceY, self.distanceX ) * 180 / Math.PI );

					self.isSwiping = ( angle > 45 && angle < 135 ) ? 'y' : 'x';
				}

				self.instance.isSliding = self.isSwiping;

				// Reset points to avoid jumping, because we dropped first swipes to calculate the angle
				self.startPoints = self.newPoints;

				$.each(self.instance.slides, function( index, slide ) {
					$.fancybox.stop( slide.$slide );

					slide.$slide.css( 'transition-duration', '0ms' );

					slide.inTransition = false;

					if ( slide.pos === self.instance.current.pos ) {
						self.sliderStartPos.left = $.fancybox.getTranslate( slide.$slide ).left;
					}
				});

				//self.instance.current.isMoved = true;

				// Stop slideshow
				if ( self.instance.SlideShow && self.instance.SlideShow.isActive ) {
					self.instance.SlideShow.stop();
				}
			}

		} else {

			if ( swiping == 'x' ) {

				// Sticky edges
				if ( self.distanceX > 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === 0 && !self.instance.current.opts.loop ) ) ) {
					left = left + Math.pow( self.distanceX, 0.8 );

				} else if ( self.distanceX < 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop ) ) ) {
					left = left - Math.pow( -self.distanceX, 0.8 );

				} else {
					left = left + self.distanceX;
				}

			}

			self.sliderLastPos = {
				top  : swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
				left : left
			};

			if ( self.requestId ) {
				cancelAFrame( self.requestId );

				self.requestId = null;
			}

			self.requestId = requestAFrame(function() {

				if ( self.sliderLastPos ) {
					$.each(self.instance.slides, function( index, slide ) {
						var pos = slide.pos - self.instance.currPos;

						$.fancybox.setTranslate( slide.$slide, {
							top  : self.sliderLastPos.top,
							left : self.sliderLastPos.left + ( pos * self.canvasWidth ) + ( pos * slide.opts.gutter )
						});
					});

					self.$container.addClass( 'fancybox-is-sliding' );
				}

			});

		}

	};

	Guestures.prototype.onPan = function() {

		var self = this;

		var newOffsetX, newOffsetY, newPos;

		self.canTap = false;

		if ( self.contentStartPos.width > self.canvasWidth ) {
			newOffsetX = self.contentStartPos.left + self.distanceX;

		} else {
			newOffsetX = self.contentStartPos.left;
		}

		newOffsetY = self.contentStartPos.top + self.distanceY;

		newPos = self.limitMovement( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		newPos.scaleX = self.contentStartPos.scaleX;
		newPos.scaleY = self.contentStartPos.scaleY;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});
	};

	// Make panning sticky to the edges
	Guestures.prototype.limitMovement = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var distanceX = self.distanceX;
		var distanceY = self.distanceY;

		// Slow down proportionally to traveled distance

		minTranslateX = Math.max(0, canvasWidth  * 0.5 - newWidth  * 0.5 );
		minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5 );

		maxTranslateX = Math.min( canvasWidth  - newWidth,  canvasWidth  * 0.5 - newWidth  * 0.5 );
		maxTranslateY = Math.min( canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5 );

		if ( newWidth > canvasWidth ) {

			//   ->
			if ( distanceX > 0 && newOffsetX > minTranslateX ) {
				newOffsetX = minTranslateX - 1 + Math.pow( -minTranslateX + currentOffsetX + distanceX, 0.8 ) || 0;
			}

			//    <-
			if ( distanceX  < 0 && newOffsetX < maxTranslateX ) {
				newOffsetX = maxTranslateX + 1 - Math.pow( maxTranslateX - currentOffsetX - distanceX, 0.8 ) || 0;
			}

		}

		if ( newHeight > canvasHeight ) {

			//   \/
			if ( distanceY > 0 && newOffsetY > minTranslateY ) {
				newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8 ) || 0;
			}

			//   /\
			if ( distanceY < 0 && newOffsetY < maxTranslateY ) {
				newOffsetY = maxTranslateY + 1 - Math.pow ( maxTranslateY - currentOffsetY - distanceY, 0.8 ) || 0;
			}

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};


	Guestures.prototype.limitPosition = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		if ( newWidth > canvasWidth ) {
			newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
			newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;

		} else {

			// Center horizontally
			newOffsetX = Math.max( 0, canvasWidth / 2 - newWidth / 2 );

		}

		if ( newHeight > canvasHeight ) {
			newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
			newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;

		} else {

			// Center vertically
			newOffsetY = Math.max( 0, canvasHeight / 2 - newHeight / 2 );

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};

	Guestures.prototype.onZoom = function() {

		var self = this;

		// Calculate current distance between points to get pinch ratio and new width and height

		var currentWidth  = self.contentStartPos.width;
		var currentHeight = self.contentStartPos.height;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var endDistanceBetweenFingers = distance( self.newPoints[0], self.newPoints[1] );

		var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

		var newWidth  = Math.floor( currentWidth  * pinchRatio );
		var newHeight = Math.floor( currentHeight * pinchRatio );

		// This is the translation due to pinch-zooming
		var translateFromZoomingX = (currentWidth  - newWidth)  * self.percentageOfImageAtPinchPointX;
		var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

		//Point between the two touches

		var centerPointEndX = ((self.newPoints[0].x + self.newPoints[1].x) / 2) - $(window).scrollLeft();
		var centerPointEndY = ((self.newPoints[0].y + self.newPoints[1].y) / 2) - $(window).scrollTop();

		// And this is the translation due to translation of the centerpoint
		// between the two fingers

		var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
		var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

		// The new offset is the old/current one plus the total translation

		var newOffsetX = currentOffsetX + ( translateFromZoomingX + translateFromTranslatingX );
		var newOffsetY = currentOffsetY + ( translateFromZoomingY + translateFromTranslatingY );

		var newPos = {
			top    : newOffsetY,
			left   : newOffsetX,
			scaleX : self.contentStartPos.scaleX * pinchRatio,
			scaleY : self.contentStartPos.scaleY * pinchRatio
		};

		self.canTap = false;

		self.newWidth  = newWidth;
		self.newHeight = newHeight;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});

	};

	Guestures.prototype.ontouchend = function( e ) {

		var self = this;
		var dMs  = Math.max( (new Date().getTime() ) - self.startTime, 1);

		var swiping = self.isSwiping;
		var panning = self.isPanning;
		var zooming = self.isZooming;

		self.endPoints = pointers( e );

		self.$container.removeClass( 'fancybox-controls--isGrabbing' );

		$(document).off( '.fb.touch' );

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.isSwiping = false;
		self.isPanning = false;
		self.isZooming = false;

		if ( self.canTap )  {
			return self.onTap( e );
		}

		self.speed = 366;

		// Speed in px/ms
		self.velocityX = self.distanceX / dMs * 0.5;
		self.velocityY = self.distanceY / dMs * 0.5;

		self.speedX = Math.max( self.speed * 0.5, Math.min( self.speed * 1.5, ( 1 / Math.abs( self.velocityX ) ) * self.speed ) );

		if ( panning ) {
			self.endPanning();

		} else if ( zooming ) {
			self.endZooming();

		} else {
			self.endSwiping( swiping );
		}

		return;
	};

	Guestures.prototype.endSwiping = function( swiping ) {

		var self = this;
		var ret = false;

		self.instance.isSliding = false;
		self.sliderLastPos      = null;

		// Close if swiped vertically / navigate if horizontally
		if ( swiping == 'y' && Math.abs( self.distanceY ) > 50 ) {

			// Continue vertical movement
			$.fancybox.animate( self.instance.current.$slide, {
				top     : self.sliderStartPos.top + self.distanceY + ( self.velocityY * 150 ),
				opacity : 0
			}, 150 );

			ret = self.instance.close( true, 300 );

		} else if ( swiping == 'x' && self.distanceX > 50 && self.instance.group.length > 1 ) {
			ret = self.instance.previous( self.speedX );

		} else if ( swiping == 'x' && self.distanceX < -50  && self.instance.group.length > 1 ) {
			ret = self.instance.next( self.speedX );
		}

		if ( ret === false && ( swiping == 'x' || swiping == 'y' ) ) {
			self.instance.jumpTo( self.instance.current.index, 150 );
		}

		self.$container.removeClass( 'fancybox-is-sliding' );

	};

	// Limit panning from edges
	// ========================

	Guestures.prototype.endPanning = function() {

		var self = this;
		var newOffsetX, newOffsetY, newPos;

		if ( !self.contentLastPos ) {
			return;
		}

		if ( self.instance.current.opts.touch.momentum === false ) {
			newOffsetX = self.contentLastPos.left;
			newOffsetY = self.contentLastPos.top;

		} else {

			// Continue movement
			newOffsetX = self.contentLastPos.left + ( self.velocityX * self.speed );
			newOffsetY = self.contentLastPos.top  + ( self.velocityY * self.speed );
		}

		newPos = self.limitPosition( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		 newPos.width  = self.contentStartPos.width;
		 newPos.height = self.contentStartPos.height;

		$.fancybox.animate( self.$content, newPos, 330 );
	};


	Guestures.prototype.endZooming = function() {

		var self = this;

		var current = self.instance.current;

		var newOffsetX, newOffsetY, newPos, reset;

		var newWidth  = self.newWidth;
		var newHeight = self.newHeight;

		if ( !self.contentLastPos ) {
			return;
		}

		newOffsetX = self.contentLastPos.left;
		newOffsetY = self.contentLastPos.top;

		reset = {
		   	top    : newOffsetY,
		   	left   : newOffsetX,
		   	width  : newWidth,
		   	height : newHeight,
			scaleX : 1,
			scaleY : 1
	   };

	   // Reset scalex/scaleY values; this helps for perfomance and does not break animation
	   $.fancybox.setTranslate( self.$content, reset );

		if ( newWidth < self.canvasWidth && newHeight < self.canvasHeight ) {
			self.instance.scaleToFit( 150 );

		} else if ( newWidth > current.width || newHeight > current.height ) {
			self.instance.scaleToActual( self.centerPointStartX, self.centerPointStartY, 150 );

		} else {

			newPos = self.limitPosition( newOffsetX, newOffsetY, newWidth, newHeight );

			// Switch from scale() to width/height or animation will not work correctly
			$.fancybox.setTranslate( self.content, $.fancybox.getTranslate( self.$content ) );

			$.fancybox.animate( self.$content, newPos, 150 );
		}

	};

	Guestures.prototype.onTap = function(e) {
		var self    = this;
		var $target = $( e.target );

		var instance = self.instance;
		var current  = instance.current;

		var endPoints = ( e && pointers( e ) ) || self.startPoints;

		var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
		var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top  : 0;

		var where;

		var process = function ( prefix ) {

			var action = current.opts[ prefix ];

			if ( $.isFunction( action ) ) {
				action = action.apply( instance, [ current, e ] );
			}

			if ( !action) {
				return;
			}

			switch ( action ) {

				case "close" :

					instance.close( self.startEvent );

				break;

				case "toggleControls" :

					instance.toggleControls( true );

				break;

				case "next" :

					instance.next();

				break;

				case "nextOrClose" :

					if ( instance.group.length > 1 ) {
						instance.next();

					} else {
						instance.close( self.startEvent );
					}

				break;

				case "zoom" :

					if ( current.type == 'image' && ( current.isLoaded || current.$ghost ) ) {

						if ( instance.canPan() ) {
							instance.scaleToFit();

						} else if ( instance.isScaledDown() ) {
							instance.scaleToActual( tapX, tapY );

						} else if ( instance.group.length < 2 ) {
							instance.close( self.startEvent );
						}
					}

				break;
			}

		};

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Skip if current slide is not in the center
		if ( instance.isSliding ) {
			return;
		}

		// Skip if clicked on the scrollbar
		if ( tapX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		// Check where is clicked
		if ( $target.is( '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container' ) ) {
			where = 'Outside';

		} else if ( $target.is( '.fancybox-slide' ) ) {
			where = 'Slide';

		} else if  ( instance.current.$content && instance.current.$content.has( e.target ).length ) {
		 	where = 'Content';

		} else {
			return;
		}

		// Check if this is a double tap
		if ( self.tapped ) {

			// Stop previously created single tap
			clearTimeout( self.tapped );
			self.tapped = null;

			// Skip if distance between taps is too big
			if ( Math.abs( tapX - self.tapX ) > 50 || Math.abs( tapY - self.tapY ) > 50 || instance.isSliding ) {
				return this;
			}

			// OK, now we assume that this is a double-tap
			process( 'dblclick' + where );

		} else {

			// Single tap will be processed if user has not clicked second time within 300ms
			// or there is no need to wait for double-tap
			self.tapX = tapX;
			self.tapY = tapY;

			if ( current.opts[ 'dblclick' + where ] && current.opts[ 'dblclick' + where ] !== current.opts[ 'click' + where ] ) {
				self.tapped = setTimeout(function() {
					self.tapped = null;

					process( 'click' + where );

				}, 300);

			} else {
				process( 'click' + where );
			}

		}

		return this;
	};

	$(document).on('onActivate.fb', function (e, instance) {
		if ( instance && !instance.Guestures ) {
			instance.Guestures = new Guestures( instance );
		}
	});

	$(document).on('beforeClose.fb', function (e, instance) {
		if ( instance && instance.Guestures ) {
			instance.Guestures.destroy();
		}
	});


}(window, document, window.jQuery));

// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var SlideShow = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( SlideShow.prototype, {
		timer    : null,
		isActive : false,
		$button  : null,
		speed    : 3000,

		init : function() {
			var self = this;

			self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function() {
				self.toggle();
			});

			if ( self.instance.group.length < 2 || !self.instance.group[ self.instance.currIndex ].opts.slideShow ) {
				self.$button.hide();
			}
		},

		set : function() {
			var self = this;

			// Check if reached last element
			if ( self.instance && self.instance.current && (self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1 )) {
				self.timer = setTimeout(function() {
					self.instance.next();

				}, self.instance.current.opts.slideShow.speed || self.speed);

			} else {
				self.stop();
				self.instance.idleSecondsCounter = 0;
				self.instance.showControls();
			}

		},

		clear : function() {
			var self = this;

			clearTimeout( self.timer );

			self.timer = null;
		},

		start : function() {
			var self = this;
			var current = self.instance.current;

			if ( self.instance && current && ( current.opts.loop || current.index < self.instance.group.length - 1 )) {

				self.isActive = true;

				self.$button
					.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_STOP )
					.addClass( 'fancybox-button--pause' );

				if ( current.isComplete ) {
					self.set();
				}
			}
		},

		stop : function() {
			var self = this;
			var current = self.instance.current;

			self.clear();

			self.$button
				.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_START )
				.removeClass( 'fancybox-button--pause' );

			self.isActive = false;
		},

		toggle : function() {
			var self = this;

			if ( self.isActive ) {
				self.stop();

			} else {
				self.start();
			}
		}

	});

	$(document).on({
		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.SlideShow ) {
				instance.SlideShow = new SlideShow( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, current, firstRun) {
			var SlideShow = instance && instance.SlideShow;

			if ( firstRun ) {

				if ( SlideShow && current.opts.slideShow.autoStart ) {
					SlideShow.start();
				}

			} else if ( SlideShow && SlideShow.isActive )  {
				SlideShow.clear();
			}
		},

		'afterShow.fb' : function(e, instance, current) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow && SlideShow.isActive ) {
				SlideShow.set();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var SlideShow = instance && instance.SlideShow;

			// "P" or Spacebar
			if ( SlideShow && current.opts.slideShow && ( keycode === 80 || keycode === 32 ) && !$(document.activeElement).is( 'button,a,input' ) ) {
				keypress.preventDefault();

				SlideShow.toggle();
			}
		},

		'beforeClose.fb onDeactivate.fb' : function(e, instance) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow ) {
				SlideShow.stop();
			}
		}
	});

	// Page Visibility API to pause slideshow when window is not active
	$(document).on("visibilitychange", function() {
		var instance  = $.fancybox.getInstance();
		var SlideShow = instance && instance.SlideShow;

		if ( SlideShow && SlideShow.isActive ) {
			if ( document.hidden ) {
				SlideShow.clear();

			} else {
				SlideShow.set();
			}
		}
	});

}(document, window.jQuery));

// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	// Collection of methods supported by user browser
	var fn = (function () {

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var val;
		var ret = {};
		var i, j;

		for ( i = 0; i < fnMap.length; i++ ) {
			val = fnMap[ i ];

			if ( val && val[ 1 ] in document ) {
				for ( j = 0; j < val.length; j++ ) {
					ret[ fnMap[ 0 ][ j ] ] = val[ j ];
				}

				return ret;
			}
		}

		return false;
	})();

	// If browser does not have Full Screen API, then simply unset default button template and stop
	if ( !fn ) {

		if ( $ && $.fancybox ) {
			$.fancybox.defaults.btnTpl.fullScreen = false;
		}

		return;
	}

	var FullScreen = {

		request : function ( elem ) {

			elem = elem || document.documentElement;

			elem[ fn.requestFullscreen ]( elem.ALLOW_KEYBOARD_INPUT );

		},
		exit : function () {

			document[ fn.exitFullscreen ]();

		},
		toggle : function ( elem ) {

			elem = elem || document.documentElement;

			if ( this.isFullscreen() ) {
				this.exit();

			} else {
				this.request( elem );
			}

		},
		isFullscreen : function()  {

			return Boolean( document[ fn.fullscreenElement ] );

		},
		enabled : function()  {

			return Boolean( document[ fn.fullscreenEnabled ] );

		}
	};

	$(document).on({
		'onInit.fb' : function(e, instance) {
			var $container;

			var $button = instance.$refs.toolbar.find('[data-fancybox-fullscreen]');

			if ( instance && !instance.FullScreen && instance.group[ instance.currIndex ].opts.fullScreen ) {
				$container = instance.$refs.container;

				$container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function(e) {

					e.stopPropagation();
					e.preventDefault();

					FullScreen.toggle( $container[ 0 ] );

				});

				if ( instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true ) {
					FullScreen.request( $container[ 0 ] );
				}

				// Expose API
				instance.FullScreen = FullScreen;

			} else {
				$button.hide();
			}

		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {

			// "P" or Spacebar
			if ( instance && instance.FullScreen && keycode === 70 ) {
				keypress.preventDefault();

				instance.FullScreen.toggle( instance.$refs.container[ 0 ] );
			}

		},

		'beforeClose.fb' : function( instance ) {
			if ( instance && instance.FullScreen ) {
				FullScreen.exit();
			}
		}
	});

	$(document).on(fn.fullscreenchange, function() {
		var instance = $.fancybox.getInstance();

		// If image is zooming, then force to stop and reposition properly
		if ( instance.current && instance.current.type === 'image' && instance.isAnimating ) {
			instance.current.$content.css( 'transition', 'none' );

			instance.isAnimating = false;

			instance.update( true, true, 0 );
		}

		instance.trigger('onFullscreenChange', FullScreen.isFullscreen() );

	});

}(document, window.jQuery));

// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var FancyThumbs = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( FancyThumbs.prototype, {

		$button		: null,
		$grid		: null,
		$list		: null,
		isVisible	: false,

		init : function() {
			var self = this;

			var first  = self.instance.group[0],
				second = self.instance.group[1];

			self.$button = self.instance.$refs.toolbar.find( '[data-fancybox-thumbs]' );

			if ( self.instance.group.length > 1 && self.instance.group[ self.instance.currIndex ].opts.thumbs && (
		    		( first.type == 'image'  || first.opts.thumb  || first.opts.$thumb ) &&
		    		( second.type == 'image' || second.opts.thumb || second.opts.$thumb )
			)) {

				self.$button.on('click', function() {
					self.toggle();
				});

				self.isActive = true;

			} else {
				self.$button.hide();

				self.isActive = false;
			}

		},

		create : function() {
			var instance = this.instance,
				list,
				src;

			this.$grid = $('<div class="fancybox-thumbs"></div>').appendTo( instance.$refs.container );

			list = '<ul>';

			$.each(instance.group, function( i, item ) {

				src = item.opts.thumb || ( item.opts.$thumb ? item.opts.$thumb.attr('src') : null );

				if ( !src && item.type === 'image' ) {
					src = item.src;
				}

				if ( src && src.length ) {
					list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
				}

			});

			list += '</ul>';

			this.$list = $( list ).appendTo( this.$grid ).on('click', 'li', function() {
				instance.jumpTo( $(this).data('index') );
			});

			this.$list.find('img').hide().one('load', function() {

				var $parent		= $(this).parent().removeClass( 'fancybox-thumbs-loading' ),
					thumbWidth	= $parent.outerWidth(),
					thumbHeight	= $parent.outerHeight(),
					width,
					height,
					widthRatio,
					heightRatio;

				width  = this.naturalWidth	|| this.width;
				height = this.naturalHeight	|| this.height;

				// Calculate thumbnail width/height and center it

				widthRatio  = width  / thumbWidth;
				heightRatio = height / thumbHeight;

				if ( widthRatio >= 1 && heightRatio >= 1 ) {
					if (widthRatio > heightRatio) {
						width  = width / heightRatio;
						height = thumbHeight;

					} else {
						width  = thumbWidth;
						height = height / widthRatio;
					}
				}

				$(this).css({
					width         : Math.floor(width),
					height        : Math.floor(height),
					'margin-top'  : Math.min( 0, Math.floor(thumbHeight * 0.3 - height * 0.3 ) ),
					'margin-left' : Math.min( 0, Math.floor(thumbWidth  * 0.5 - width  * 0.5 ) )
				}).show();

			})
			.each(function() {
				this.src = $( this ).data( 'src' );
			});

		},

		focus : function() {

			if ( this.instance.current ) {
				this.$list
					.children()
					.removeClass( 'fancybox-thumbs-active' )
					.filter( '[data-index="' + this.instance.current.index  + '"]' )
					.addClass( 'fancybox-thumbs-active' )
					.focus();
			}

		},

		close : function() {
			this.$grid.hide();
		},

		update : function() {

			this.instance.$refs.container.toggleClass( 'fancybox-show-thumbs', this.isVisible );

			if ( this.isVisible ) {

				if ( !this.$grid ) {
					this.create();
				}

				this.instance.trigger( 'onThumbsShow' );

				this.focus();

			} else if ( this.$grid ) {
				this.instance.trigger( 'onThumbsHide' );
			}

			// Update content position
			this.instance.update();

		},

		hide : function() {
			this.isVisible = false;
			this.update();
		},

		show : function() {
			this.isVisible = true;
			this.update();
		},

		toggle : function() {
			this.isVisible = !this.isVisible;
			this.update();
		}

	});

	$(document).on({

		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.Thumbs ) {
				instance.Thumbs = new FancyThumbs( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, item, firstRun) {
			var Thumbs = instance && instance.Thumbs;

			if ( !Thumbs || !Thumbs.isActive ) {
				return;
			}

			if ( item.modal ) {
				Thumbs.$button.hide();

				Thumbs.hide();

				return;
			}

			if ( firstRun && item.opts.thumbs.autoStart === true ) {
				Thumbs.show();
			}

			if ( Thumbs.isVisible ) {
				Thumbs.focus();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var Thumbs = instance && instance.Thumbs;

			// "G"
			if ( Thumbs && Thumbs.isActive && keycode === 71 ) {
				keypress.preventDefault();

				Thumbs.toggle();
			}
		},

		'beforeClose.fb' : function( e, instance ) {
			var Thumbs = instance && instance.Thumbs;

			if ( Thumbs && Thumbs.isVisible && instance.opts.thumbs.hideOnClose !== false ) {
				Thumbs.close();
			}
		}

	});

}(document, window.jQuery));

// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
;(function (document, window, $) {
	'use strict';

	// Simple $.escapeSelector polyfill (for jQuery prior v3)
	if ( !$.escapeSelector ) {
		$.escapeSelector = function( sel ) {
			var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
			var fcssescape = function( ch, asCodePoint ) {
				if ( asCodePoint ) {
					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if ( ch === "\0" ) {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			};

			return ( sel + "" ).replace( rcssescape, fcssescape );
		};
	}

	// Create new history entry only once
	var shouldCreateHistory = true;

	// Variable containing last hash value set by fancyBox
	// It will be used to determine if fancyBox needs to close after hash change is detected
    var currentHash = null;

	// Throttling the history change
	var timerID = null;

	// Get info about gallery name and current index from url
    function parseUrl() {
        var hash    = window.location.hash.substr( 1 );
        var rez     = hash.split( '-' );
        var index   = rez.length > 1 && /^\+?\d+$/.test( rez[ rez.length - 1 ] ) ? parseInt( rez.pop( -1 ), 10 ) || 1 : 1;
        var gallery = rez.join( '-' );

		// Index is starting from 1
		if ( index < 1 ) {
			index = 1;
		}

        return {
            hash    : hash,
            index   : index,
            gallery : gallery
        };
    }

	// Trigger click evnt on links to open new fancyBox instance
	function triggerFromUrl( url ) {
		var $el;

        if ( url.gallery !== '' ) {

			// If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
			$el = $( "[data-fancybox='" + $.escapeSelector( url.gallery ) + "']" ).eq( url.index - 1 );

            if ( !$el.length ) {
				// .. if not, try finding element by ID
				$el = $( "#" + $.escapeSelector( url.gallery ) + "" );
			}

			if ( $el.length ) {
				shouldCreateHistory = false;

				$el.trigger( 'click' );
			}

        }
	}

	// Get gallery name from current instance
	function getGalleryID( instance ) {
		var opts;

		if ( !instance ) {
			return false;
		}

		opts = instance.current ? instance.current.opts : instance.opts;

		return opts.hash || ( opts.$orig ? opts.$orig.data( 'fancybox' ) : ''  );
	}

	// Star when DOM becomes ready
    $(function() {

		// Small delay is used to allow other scripts to process "dom ready" event
		setTimeout(function() {

			// Check if this module is not disabled
			if ( $.fancybox.defaults.hash === false ) {
				return;
			}

			// Update hash when opening/closing fancyBox
		    $(document).on({
				'onInit.fb' : function( e, instance ) {
					var url, gallery;

					if ( instance.group[ instance.currIndex ].opts.hash === false ) {
						return;
					}

					url     = parseUrl();
					gallery = getGalleryID( instance );

					// Make sure gallery start index matches index from hash
					if ( gallery && url.gallery && gallery == url.gallery ) {
						instance.currIndex = url.index - 1;
					}

				},

				'beforeShow.fb' : function( e, instance, current ) {
					var gallery;

					if ( !current || current.opts.hash === false ) {
						return;
					}

		            gallery = getGalleryID( instance );

		            // Update window hash
		            if ( gallery && gallery !== '' ) {

						if ( window.location.hash.indexOf( gallery ) < 0 ) {
			                instance.opts.origHash = window.location.hash;
			            }

						currentHash = gallery + ( instance.group.length > 1 ? '-' + ( current.index + 1 ) : '' );

						if ( 'replaceState' in window.history ) {
							if ( timerID ) {
								clearTimeout( timerID );
							}

							timerID = setTimeout(function() {
								window.history[ shouldCreateHistory ? 'pushState' : 'replaceState' ]( {} , document.title, window.location.pathname + window.location.search + '#' +  currentHash );

								timerID = null;

								shouldCreateHistory = false;

							}, 300);

						} else {
							window.location.hash = currentHash;
						}

		            }

		        },

				'beforeClose.fb' : function( e, instance, current ) {
					var gallery, origHash;

					if ( timerID ) {
						clearTimeout( timerID );
					}

					if ( current.opts.hash === false ) {
						return;
					}

					gallery  = getGalleryID( instance );
					origHash = instance && instance.opts.origHash ? instance.opts.origHash : '';

		            // Remove hash from location bar
		            if ( gallery && gallery !== '' ) {

		                if ( 'replaceState' in history ) {
							window.history.replaceState( {} , document.title, window.location.pathname + window.location.search + origHash );

		                } else {
							window.location.hash = origHash;

							// Keep original scroll position
							$( window ).scrollTop( instance.scrollTop ).scrollLeft( instance.scrollLeft );
		                }
		            }

					currentHash = null;
		        }
		    });

			// Check if need to close after url has changed
			$(window).on('hashchange.fb', function() {
				var url = parseUrl();

				if ( $.fancybox.getInstance() ) {
					if ( currentHash && currentHash !== url.gallery + '-' + url.index && !( url.index === 1 && currentHash == url.gallery ) ) {
						currentHash = null;

						$.fancybox.close();
					}

				} else if ( url.gallery !== '' ) {
					triggerFromUrl( url );
				}
			});

			// Check current hash and trigger click event on matching element to start fancyBox, if needed
			triggerFromUrl( parseUrl() );

		}, 50);

    });

}(document, window, window.jQuery));

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
  console.log('aaa')
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
  openGallery(project.gallery.picture);
});
$('.section-proj-1__button-group__civil-guide').on('click', function() {
  openGallery(project.gallery.guide);
});
$('.section-proj-1__button-group__position').on('click',function() {
  openGallery(project.gallery.position);
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
=======
function validEmail(t){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(t)}function getFormData(t){var e=document.getElementById(t).elements,n={};return Object.keys(e).map(function(t){return void 0!==e[t].name?e[t].name:e[t].length>0?e[t].item(0).name:void 0}).filter(function(t,e,n){return n.indexOf(t)==e&&t}).forEach(function(t){n[t]=e[t].value;var i="";if("checkbox"===e[t].type)i=i+e[t].checked+", ",n[t]=i.slice(0,-2);else if(e[t].length)for(var o=0;o<e[t].length;o++)e[t].item(o).checked&&(i=i+e[t].item(o).value+", ",n[t]=i.slice(0,-2))}),n}function handleFormSubmitModal(t){t.preventDefault();var e=getFormData("gformModal");if(!validEmail(e.Email))return document.getElementById("email-invalid").style.display="block",!1;var n=t.target.action,i=new XMLHttpRequest;i.open("POST",n),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){document.getElementById("gformModal").style.display="none",document.getElementById("thankyou_message_modal").style.display="block"};var o=Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");i.send(o)}function loaded(){document.getElementById("gformModal").addEventListener("submit",handleFormSubmitModal,!1)}function activeTab(t,e){var n,i,o;for(i=$(".section-proj-6__tab-content__item"),n=0;n<i.length;n++)i[n].style.display="none";$(".section-proj-6 .active").removeClass("active"),o="#item"+e,$(o).css("display","block"),t.target.classList.add("active")}function openGallery(t){$.fancybox.open(t,{thumbs:{autoStart:!0},scrollOutside:!0})}if(function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function n(t,e){var n=(e=e||et).createElement("script");n.text=t,e.head.appendChild(n).parentNode.removeChild(n)}function i(t){var e=!!t&&"length"in t&&t.length,n=ht.type(t);return"function"!==n&&!ht.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function o(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}function r(t,e,n){return ht.isFunction(e)?ht.grep(t,function(t,i){return!!e.call(t,i,t)!==n}):e.nodeType?ht.grep(t,function(t){return t===e!==n}):"string"!=typeof e?ht.grep(t,function(t){return st.call(e,t)>-1!==n}):Et.test(e)?ht.filter(e,t,n):(e=ht.filter(e,t),ht.grep(t,function(t){return st.call(e,t)>-1!==n&&1===t.nodeType}))}function s(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function a(t){var e={};return ht.each(t.match(It)||[],function(t,n){e[n]=!0}),e}function l(t){return t}function c(t){throw t}function u(t,e,n,i){var o;try{t&&ht.isFunction(o=t.promise)?o.call(t).done(e).fail(n):t&&ht.isFunction(o=t.then)?o.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}function f(){et.removeEventListener("DOMContentLoaded",f),t.removeEventListener("load",f),ht.ready()}function d(){this.expando=ht.expando+d.uid++}function p(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:jt.test(t)?JSON.parse(t):t)}function h(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(Rt,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=p(n)}catch(t){}$t.set(t,e,n)}else n=void 0;return n}function g(t,e,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return ht.css(t,e,"")},l=a(),c=n&&n[3]||(ht.cssNumber[e]?"":"px"),u=(ht.cssNumber[e]||"px"!==c&&+l)&&Ft.exec(ht.css(t,e));if(u&&u[3]!==c){c=c||u[3],n=n||[],u=+l||1;do{r=r||".5",u/=r,ht.style(t,e,u+c)}while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(u=+u||+l||0,o=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=o)),o}function m(t){var e,n=t.ownerDocument,i=t.nodeName,o=qt[i];return o||(e=n.body.appendChild(n.createElement(i)),o=ht.css(e,"display"),e.parentNode.removeChild(e),"none"===o&&(o="block"),qt[i]=o,o)}function v(t,e){for(var n,i,o=[],r=0,s=t.length;r<s;r++)(i=t[r]).style&&(n=i.style.display,e?("none"===n&&(o[r]=Lt.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&Wt(i)&&(o[r]=m(i))):"none"!==n&&(o[r]="none",Lt.set(i,"display",n)));for(r=0;r<s;r++)null!=o[r]&&(t[r].style.display=o[r]);return t}function y(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&o(t,e)?ht.merge([t],n):n}function b(t,e){for(var n=0,i=t.length;n<i;n++)Lt.set(t[n],"globalEval",!e||Lt.get(e[n],"globalEval"))}function x(t,e,n,i,o){for(var r,s,a,l,c,u,f=e.createDocumentFragment(),d=[],p=0,h=t.length;p<h;p++)if((r=t[p])||0===r)if("object"===ht.type(r))ht.merge(d,r.nodeType?[r]:r);else if(Yt.test(r)){for(s=s||f.appendChild(e.createElement("div")),a=(Vt.exec(r)||["",""])[1].toLowerCase(),l=Xt[a]||Xt._default,s.innerHTML=l[1]+ht.htmlPrefilter(r)+l[2],u=l[0];u--;)s=s.lastChild;ht.merge(d,s.childNodes),(s=f.firstChild).textContent=""}else d.push(e.createTextNode(r));for(f.textContent="",p=0;r=d[p++];)if(i&&ht.inArray(r,i)>-1)o&&o.push(r);else if(c=ht.contains(r.ownerDocument,r),s=y(f.appendChild(r),"script"),c&&b(s),n)for(u=0;r=s[u++];)Gt.test(r.type||"")&&n.push(r);return f}function w(){return!0}function _(){return!1}function T(){try{return et.activeElement}catch(t){}}function E(t,e,n,i,o,r){var s,a;if("object"==typeof e){"string"!=typeof n&&(i=i||n,n=void 0);for(a in e)E(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=_;else if(!o)return t;return 1===r&&(s=o,o=function(t){return ht().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=ht.guid++)),t.each(function(){ht.event.add(this,e,o,i,n)})}function C(t,e){return o(t,"table")&&o(11!==e.nodeType?e:e.firstChild,"tr")?ht(">tbody",t)[0]||t:t}function S(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function A(t){var e=ne.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function D(t,e){var n,i,o,r,s,a,l,c;if(1===e.nodeType){if(Lt.hasData(t)&&(r=Lt.access(t),s=Lt.set(e,r),c=r.events)){delete s.handle,s.events={};for(o in c)for(n=0,i=c[o].length;n<i;n++)ht.event.add(e,o,c[o][n])}$t.hasData(t)&&(a=$t.access(t),l=ht.extend({},a),$t.set(e,l))}}function I(t,e){var n=e.nodeName.toLowerCase();"input"===n&&Ut.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function O(t,e,i,o){e=ot.apply([],e);var r,s,a,l,c,u,f=0,d=t.length,p=d-1,h=e[0],g=ht.isFunction(h);if(g||d>1&&"string"==typeof h&&!dt.checkClone&&ee.test(h))return t.each(function(n){var r=t.eq(n);g&&(e[0]=h.call(this,n,r.html())),O(r,e,i,o)});if(d&&(r=x(e,t[0].ownerDocument,!1,t,o),s=r.firstChild,1===r.childNodes.length&&(r=s),s||o)){for(l=(a=ht.map(y(r,"script"),S)).length;f<d;f++)c=r,f!==p&&(c=ht.clone(c,!0,!0),l&&ht.merge(a,y(c,"script"))),i.call(t[f],c,f);if(l)for(u=a[a.length-1].ownerDocument,ht.map(a,A),f=0;f<l;f++)c=a[f],Gt.test(c.type||"")&&!Lt.access(c,"globalEval")&&ht.contains(u,c)&&(c.src?ht._evalUrl&&ht._evalUrl(c.src):n(c.textContent.replace(ie,""),u))}return t}function N(t,e,n){for(var i,o=e?ht.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||ht.cleanData(y(i)),i.parentNode&&(n&&ht.contains(i.ownerDocument,i)&&b(y(i,"script")),i.parentNode.removeChild(i));return t}function P(t,e,n){var i,o,r,s,a=t.style;return(n=n||se(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||ht.contains(t.ownerDocument,t)||(s=ht.style(t,e)),!dt.pixelMarginRight()&&re.test(s)&&oe.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function k(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function L(t){if(t in de)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=fe.length;n--;)if((t=fe[n]+e)in de)return t}function $(t){var e=ht.cssProps[t];return e||(e=ht.cssProps[t]=L(t)||t),e}function j(t,e,n){var i=Ft.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function R(t,e,n,i,o){var r,s=0;for(r=n===(i?"border":"content")?4:"width"===e?1:0;r<4;r+=2)"margin"===n&&(s+=ht.css(t,n+Mt[r],!0,o)),i?("content"===n&&(s-=ht.css(t,"padding"+Mt[r],!0,o)),"margin"!==n&&(s-=ht.css(t,"border"+Mt[r]+"Width",!0,o))):(s+=ht.css(t,"padding"+Mt[r],!0,o),"padding"!==n&&(s+=ht.css(t,"border"+Mt[r]+"Width",!0,o)));return s}function H(t,e,n){var i,o=se(t),r=P(t,e,o),s="border-box"===ht.css(t,"boxSizing",!1,o);return re.test(r)?r:(i=s&&(dt.boxSizingReliable()||r===t.style[e]),"auto"===r&&(r=t["offset"+e[0].toUpperCase()+e.slice(1)]),(r=parseFloat(r)||0)+R(t,e,n||(s?"border":"content"),i,o)+"px")}function F(t,e,n,i,o){return new F.prototype.init(t,e,n,i,o)}function M(){he&&(!1===et.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(M):t.setTimeout(M,ht.fx.interval),ht.fx.tick())}function W(){return t.setTimeout(function(){pe=void 0}),pe=ht.now()}function B(t,e){var n,i=0,o={height:t};for(e=e?1:0;i<4;i+=2-e)n=Mt[i],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function q(t,e,n){for(var i,o=(V.tweeners[e]||[]).concat(V.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,e,t))return i}function U(t,e){var n,i,o,r,s;for(n in t)if(i=ht.camelCase(n),o=e[i],r=t[n],Array.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=ht.cssHooks[i])&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function V(t,e,n){var i,o,r=0,s=V.prefilters.length,a=ht.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=pe||W(),n=Math.max(0,c.startTime+c.duration-e),i=1-(n/c.duration||0),r=0,s=c.tweens.length;r<s;r++)c.tweens[r].run(i);return a.notifyWith(t,[c,i,n]),i<1&&s?n:(s||a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:ht.extend({},e),opts:ht.extend(!0,{specialEasing:{},easing:ht.easing._default},n),originalProperties:e,originalOptions:n,startTime:pe||W(),duration:n.duration,tweens:[],createTween:function(e,n){var i=ht.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),u=c.props;for(U(u,c.opts.specialEasing);r<s;r++)if(i=V.prefilters[r].call(c,t,u,c.opts))return ht.isFunction(i.stop)&&(ht._queueHooks(c.elem,c.opts.queue).stop=ht.proxy(i.stop,i)),i;return ht.map(u,q,c),ht.isFunction(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),ht.fx.timer(ht.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}function G(t){return(t.match(It)||[]).join(" ")}function X(t){return t.getAttribute&&t.getAttribute("class")||""}function Y(t,e,n,i){var o;if(Array.isArray(e))ht.each(e,function(e,o){n||Se.test(t)?i(t,o):Y(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)});else if(n||"object"!==ht.type(e))i(t,e);else for(o in e)Y(t+"["+o+"]",e[o],n,i)}function z(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(It)||[];if(ht.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function Q(t,e,n,i){function o(a){var l;return r[a]=!0,ht.each(t[a]||[],function(t,a){var c=a(e,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=t===He;return o(e.dataTypes[0])||!r["*"]&&o("*")}function K(t,e){var n,i,o=ht.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&ht.extend(!0,t,i),t}function Z(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}function J(t,e,n,i){var o,r,s,a,l,c={},u=t.dataTypes.slice();if(u[1])for(s in t.converters)c[s.toLowerCase()]=t.converters[s];for(r=u.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=u.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}var tt=[],et=t.document,nt=Object.getPrototypeOf,it=tt.slice,ot=tt.concat,rt=tt.push,st=tt.indexOf,at={},lt=at.toString,ct=at.hasOwnProperty,ut=ct.toString,ft=ut.call(Object),dt={},pt="3.2.1",ht=function(t,e){return new ht.fn.init(t,e)},gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,mt=/^-ms-/,vt=/-([a-z])/g,yt=function(t,e){return e.toUpperCase()};ht.fn=ht.prototype={jquery:pt,constructor:ht,length:0,toArray:function(){return it.call(this)},get:function(t){return null==t?it.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=ht.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return ht.each(this,t)},map:function(t){return this.pushStack(ht.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(it.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:rt,sort:tt.sort,splice:tt.splice},ht.extend=ht.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||ht.isFunction(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(c&&i&&(ht.isPlainObject(i)||(o=Array.isArray(i)))?(o?(o=!1,r=n&&Array.isArray(n)?n:[]):r=n&&ht.isPlainObject(n)?n:{},s[e]=ht.extend(c,r,i)):void 0!==i&&(s[e]=i));return s},ht.extend({expando:"jQuery"+(pt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===ht.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=ht.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==lt.call(t)||(e=nt(t))&&("function"!=typeof(n=ct.call(e,"constructor")&&e.constructor)||ut.call(n)!==ft))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?at[lt.call(t)]||"object":typeof t},globalEval:function(t){n(t)},camelCase:function(t){return t.replace(mt,"ms-").replace(vt,yt)},each:function(t,e){var n,o=0;if(i(t))for(n=t.length;o<n&&!1!==e.call(t[o],o,t[o]);o++);else for(o in t)if(!1===e.call(t[o],o,t[o]))break;return t},trim:function(t){return null==t?"":(t+"").replace(gt,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(i(Object(t))?ht.merge(n,"string"==typeof t?[t]:t):rt.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:st.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i=[],o=0,r=t.length,s=!n;o<r;o++)!e(t[o],o)!==s&&i.push(t[o]);return i},map:function(t,e,n){var o,r,s=0,a=[];if(i(t))for(o=t.length;s<o;s++)null!=(r=e(t[s],s,n))&&a.push(r);else for(s in t)null!=(r=e(t[s],s,n))&&a.push(r);return ot.apply([],a)},guid:1,proxy:function(t,e){var n,i,o;if("string"==typeof e&&(n=t[e],e=t,t=n),ht.isFunction(t))return i=it.call(arguments,2),o=function(){return t.apply(e||this,i.concat(it.call(arguments)))},o.guid=t.guid=t.guid||ht.guid++,o},now:Date.now,support:dt}),"function"==typeof Symbol&&(ht.fn[Symbol.iterator]=tt[Symbol.iterator]),ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){at["[object "+e+"]"]=e.toLowerCase()});var bt=function(t){function e(t,e,n,i){var o,r,s,a,l,u,d,p=e&&e.ownerDocument,h=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==h&&9!==h&&11!==h)return n;if(!i&&((e?e.ownerDocument||e:F)!==N&&O(e),e=e||N,k)){if(11!==h&&(l=gt.exec(t)))if(o=l[1]){if(9===h){if(!(s=e.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(p&&(s=p.getElementById(o))&&R(e,s)&&s.id===o)return n.push(s),n}else{if(l[2])return Q.apply(n,e.getElementsByTagName(t)),n;if((o=l[3])&&x.getElementsByClassName&&e.getElementsByClassName)return Q.apply(n,e.getElementsByClassName(o)),n}if(x.qsa&&!U[t+" "]&&(!L||!L.test(t))){if(1!==h)p=e,d=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(bt,xt):e.setAttribute("id",a=H),r=(u=E(t)).length;r--;)u[r]="#"+a+" "+f(u[r]);d=u.join(","),p=mt.test(t)&&c(e.parentNode)||e}if(d)try{return Q.apply(n,p.querySelectorAll(d)),n}catch(t){}finally{a===H&&e.removeAttribute("id")}}}return S(t.replace(rt,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>w.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[H]=!0,t}function o(t){var e=N.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=n.length;i--;)w.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&_t(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function l(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(t){return t&&void 0!==t.getElementsByTagName&&t}function u(){}function f(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function d(t,e,n){var i=e.dir,o=e.next,r=o||i,s=n&&"parentNode"===r,a=W++;return e.first?function(e,n,o){for(;e=e[i];)if(1===e.nodeType||s)return t(e,n,o);return!1}:function(e,n,l){var c,u,f,d=[M,a];if(l){for(;e=e[i];)if((1===e.nodeType||s)&&t(e,n,l))return!0}else for(;e=e[i];)if(1===e.nodeType||s)if(f=e[H]||(e[H]={}),u=f[e.uniqueID]||(f[e.uniqueID]={}),o&&o===e.nodeName.toLowerCase())e=e[i]||e;else{if((c=u[r])&&c[0]===M&&c[1]===a)return d[2]=c[2];if(u[r]=d,d[2]=t(e,n,l))return!0}return!1}}function p(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function h(t,n,i){for(var o=0,r=n.length;o<r;o++)e(t,n[o],i);return i}function g(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,c=null!=e;a<l;a++)(r=t[a])&&(n&&!n(r,i,o)||(s.push(r),c&&e.push(a)));return s}function m(t,e,n,o,r,s){return o&&!o[H]&&(o=m(o)),r&&!r[H]&&(r=m(r,s)),i(function(i,s,a,l){var c,u,f,d=[],p=[],m=s.length,v=i||h(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:g(v,d,t,a,l),b=n?r||(i?t:m||o)?[]:s:y;if(n&&n(y,b,a,l),o)for(c=g(b,p),o(c,[],a,l),u=c.length;u--;)(f=c[u])&&(b[p[u]]=!(y[p[u]]=f));if(i){if(r||t){if(r){for(c=[],u=b.length;u--;)(f=b[u])&&c.push(y[u]=f);r(null,b=[],c,l)}for(u=b.length;u--;)(f=b[u])&&(c=r?Z(i,f):d[u])>-1&&(i[c]=!(s[c]=f))}}else b=g(b===s?b.splice(m,b.length):b),r?r(null,s,b,l):Q.apply(s,b)})}function v(t){for(var e,n,i,o=t.length,r=w.relative[t[0].type],s=r||w.relative[" "],a=r?1:0,l=d(function(t){return t===e},s,!0),c=d(function(t){return Z(e,t)>-1},s,!0),u=[function(t,n,i){var o=!r&&(i||n!==A)||((e=n).nodeType?l(t,n,i):c(t,n,i));return e=null,o}];a<o;a++)if(n=w.relative[t[a].type])u=[d(p(u),n)];else{if((n=w.filter[t[a].type].apply(null,t[a].matches))[H]){for(i=++a;i<o&&!w.relative[t[i].type];i++);return m(a>1&&p(u),a>1&&f(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(rt,"$1"),n,a<i&&v(t.slice(a,i)),i<o&&v(t=t.slice(i)),i<o&&f(t))}u.push(n)}return p(u)}function y(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,l,c){var u,f,d,p=0,h="0",m=i&&[],v=[],y=A,b=i||r&&w.find.TAG("*",c),x=M+=null==y?1:Math.random()||.1,_=b.length;for(c&&(A=s===N||s||c);h!==_&&null!=(u=b[h]);h++){if(r&&u){for(f=0,s||u.ownerDocument===N||(O(u),a=!k);d=t[f++];)if(d(u,s||N,a)){l.push(u);break}c&&(M=x)}o&&((u=!d&&u)&&p--,i&&m.push(u))}if(p+=h,o&&h!==p){for(f=0;d=n[f++];)d(m,v,s,a);if(i){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=Y.call(l));v=g(v)}Q.apply(l,v),c&&!i&&v.length>0&&p+n.length>1&&e.uniqueSort(l)}return c&&(M=x,A=y),m};return o?i(s):s}var b,x,w,_,T,E,C,S,A,D,I,O,N,P,k,L,$,j,R,H="sizzle"+1*new Date,F=t.document,M=0,W=0,B=n(),q=n(),U=n(),V=function(t,e){return t===e&&(I=!0),0},G={}.hasOwnProperty,X=[],Y=X.pop,z=X.push,Q=X.push,K=X.slice,Z=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",tt="[\\x20\\t\\r\\n\\f]",et="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",nt="\\["+tt+"*("+et+")(?:"+tt+"*([*^$|!~]?=)"+tt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+et+"))|)"+tt+"*\\]",it=":("+et+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+nt+")*)|.*)\\)|)",ot=new RegExp(tt+"+","g"),rt=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g"),st=new RegExp("^"+tt+"*,"+tt+"*"),at=new RegExp("^"+tt+"*([>+~]|"+tt+")"+tt+"*"),lt=new RegExp("="+tt+"*([^\\]'\"]*?)"+tt+"*\\]","g"),ct=new RegExp(it),ut=new RegExp("^"+et+"$"),ft={ID:new RegExp("^#("+et+")"),CLASS:new RegExp("^\\.("+et+")"),TAG:new RegExp("^("+et+"|[*])"),ATTR:new RegExp("^"+nt),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+tt+"*(even|odd|(([+-]|)(\\d*)n|)"+tt+"*(?:([+-]|)"+tt+"*(\\d+)|))"+tt+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+tt+"*((?:-\\d)?\\d*)"+tt+"*\\)|)(?=[^-]|$)","i")},dt=/^(?:input|select|textarea|button)$/i,pt=/^h\d$/i,ht=/^[^{]+\{\s*\[native \w/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/[+~]/,vt=new RegExp("\\\\([\\da-f]{1,6}"+tt+"?|("+tt+")|.)","ig"),yt=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},bt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},wt=function(){O()},_t=d(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{Q.apply(X=K.call(F.childNodes),F.childNodes),X[F.childNodes.length].nodeType}catch(t){Q={apply:X.length?function(t,e){z.apply(t,K.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}x=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},O=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:F;return i!==N&&9===i.nodeType&&i.documentElement?(N=i,P=N.documentElement,k=!T(N),F!==N&&(n=N.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",wt,!1):n.attachEvent&&n.attachEvent("onunload",wt)),x.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),x.getElementsByTagName=o(function(t){return t.appendChild(N.createComment("")),!t.getElementsByTagName("*").length}),x.getElementsByClassName=ht.test(N.getElementsByClassName),x.getById=o(function(t){return P.appendChild(t).id=H,!N.getElementsByName||!N.getElementsByName(H).length}),x.getById?(w.filter.ID=function(t){var e=t.replace(vt,yt);return function(t){return t.getAttribute("id")===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&k){var n=e.getElementById(t);return n?[n]:[]}}):(w.filter.ID=function(t){var e=t.replace(vt,yt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&k){var n,i,o,r=e.getElementById(t);if(r){if((n=r.getAttributeNode("id"))&&n.value===t)return[r];for(o=e.getElementsByName(t),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===t)return[r]}return[]}}),w.find.TAG=x.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):x.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},w.find.CLASS=x.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&k)return e.getElementsByClassName(t)},$=[],L=[],(x.qsa=ht.test(N.querySelectorAll))&&(o(function(t){P.appendChild(t).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+tt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||L.push("\\["+tt+"*(?:value|"+J+")"),t.querySelectorAll("[id~="+H+"-]").length||L.push("~="),t.querySelectorAll(":checked").length||L.push(":checked"),t.querySelectorAll("a#"+H+"+*").length||L.push(".#.+[+~]")}),o(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=N.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&L.push("name"+tt+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),P.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")})),(x.matchesSelector=ht.test(j=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&o(function(t){x.disconnectedMatch=j.call(t,"*"),j.call(t,"[s!='']:x"),$.push("!=",it)}),L=L.length&&new RegExp(L.join("|")),$=$.length&&new RegExp($.join("|")),e=ht.test(P.compareDocumentPosition),R=e||ht.test(P.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},V=e?function(t,e){if(t===e)return I=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!x.sortDetached&&e.compareDocumentPosition(t)===n?t===N||t.ownerDocument===F&&R(F,t)?-1:e===N||e.ownerDocument===F&&R(F,e)?1:D?Z(D,t)-Z(D,e):0:4&n?-1:1)}:function(t,e){if(t===e)return I=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,a=[t],l=[e];if(!o||!r)return t===N?-1:e===N?1:o?-1:r?1:D?Z(D,t)-Z(D,e):0;if(o===r)return s(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===F?-1:l[i]===F?1:0},N):N},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==N&&O(t),n=n.replace(lt,"='$1']"),x.matchesSelector&&k&&!U[n+" "]&&(!$||!$.test(n))&&(!L||!L.test(n)))try{var i=j.call(t,n);if(i||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return e(n,N,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==N&&O(t),R(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==N&&O(t);var n=w.attrHandle[e.toLowerCase()],i=n&&G.call(w.attrHandle,e.toLowerCase())?n(t,e,!k):void 0;return void 0!==i?i:x.attributes||!k?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.escape=function(t){return(t+"").replace(bt,xt)},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(I=!x.detectDuplicates,D=!x.sortStable&&t.slice(0),t.sort(V),I){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return D=null,t},_=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=_(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=_(e);return n},(w=e.selectors={cacheLength:50,createPseudo:i,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(vt,yt),t[3]=(t[3]||t[4]||t[5]||"").replace(vt,yt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ft.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ct.test(n)&&(e=E(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(vt,yt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+tt+")"+t+"("+tt+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(ot," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var c,u,f,d,p,h,g=r!==s?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){if(r){for(;g;){for(d=e;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g="only"===t&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(b=(p=(c=(u=(f=(d=m)[H]||(d[H]={}))[d.uniqueID]||(f[d.uniqueID]={}))[t]||[])[0]===M&&c[1])&&c[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(b=p=0)||h.pop();)if(1===d.nodeType&&++b&&d===e){u[t]=[M,p,b];break}}else if(y&&(d=e,f=d[H]||(d[H]={}),u=f[d.uniqueID]||(f[d.uniqueID]={}),c=u[t]||[],p=c[0]===M&&c[1],b=p),!1===b)for(;(d=++p&&d&&d[g]||(b=p=0)||h.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&(f=d[H]||(d[H]={}),u=f[d.uniqueID]||(f[d.uniqueID]={}),u[t]=[M,b]),d!==e)););return(b-=o)===i||b%i==0&&b/i>=0}}},PSEUDO:function(t,n){var o,r=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return r[H]?r(n):r.length>1?(o=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=Z(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=C(t.replace(rt,"$1"));return o[H]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(vt,yt),function(e){return(e.textContent||e.innerText||_(e)).indexOf(t)>-1}}),lang:i(function(t){return ut.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(vt,yt).toLowerCase(),function(e){var n;do{if(n=k?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===P},focus:function(t){return t===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!w.pseudos.empty(t)},header:function(t){return pt.test(t.nodeName)},input:function(t){return dt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:l(function(){return[0]}),last:l(function(t,e){return[e-1]}),eq:l(function(t,e,n){return[n<0?n+e:n]}),even:l(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:l(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:l(function(t,e,n){for(var i=n<0?n+e:n;--i>=0;)t.push(i);return t}),gt:l(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=w.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[b]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(b);for(b in{submit:!0,reset:!0})w.pseudos[b]=function(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}(b);return u.prototype=w.filters=w.pseudos,w.setFilters=new u,E=e.tokenize=function(t,n){var i,o,r,s,a,l,c,u=q[t+" "];if(u)return n?0:u.slice(0);for(a=t,l=[],c=w.preFilter;a;){i&&!(o=st.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=at.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(rt," ")}),a=a.slice(i.length));for(s in w.filter)!(o=ft[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):q(t,l).slice(0)},C=e.compile=function(t,e){var n,i=[],o=[],r=U[t+" "];if(!r){for(e||(e=E(t)),n=e.length;n--;)(r=v(e[n]))[H]?i.push(r):o.push(r);(r=U(t,y(o,i))).selector=t}return r},S=e.select=function(t,e,n,i){var o,r,s,a,l,u="function"==typeof t&&t,d=!i&&E(t=u.selector||t);if(n=n||[],1===d.length){if((r=d[0]=d[0].slice(0)).length>2&&"ID"===(s=r[0]).type&&9===e.nodeType&&k&&w.relative[r[1].type]){if(!(e=(w.find.ID(s.matches[0].replace(vt,yt),e)||[])[0]))return n;u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=ft.needsContext.test(t)?0:r.length;o--&&(s=r[o],!w.relative[a=s.type]);)if((l=w.find[a])&&(i=l(s.matches[0].replace(vt,yt),mt.test(r[0].type)&&c(e.parentNode)||e))){if(r.splice(o,1),!(t=i.length&&f(r)))return Q.apply(n,i),n;break}}return(u||C(t,d))(i,e,!k,n,!e||mt.test(t)&&c(e.parentNode)||e),n},x.sortStable=H.split("").sort(V).join("")===H,x.detectDuplicates=!!I,O(),x.sortDetached=o(function(t){return 1&t.compareDocumentPosition(N.createElement("fieldset"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),x.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(J,function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);ht.find=bt,ht.expr=bt.selectors,ht.expr[":"]=ht.expr.pseudos,ht.uniqueSort=ht.unique=bt.uniqueSort,ht.text=bt.getText,ht.isXMLDoc=bt.isXML,ht.contains=bt.contains,ht.escapeSelector=bt.escape;var xt=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&ht(t).is(n))break;i.push(t)}return i},wt=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},_t=ht.expr.match.needsContext,Tt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Et=/^.[^:#\[\.,]*$/;ht.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?ht.find.matchesSelector(i,t)?[i]:[]:ht.find.matches(t,ht.grep(e,function(t){return 1===t.nodeType}))},ht.fn.extend({find:function(t){var e,n,i=this.length,o=this;if("string"!=typeof t)return this.pushStack(ht(t).filter(function(){for(e=0;e<i;e++)if(ht.contains(o[e],this))return!0}));for(n=this.pushStack([]),e=0;e<i;e++)ht.find(t,o[e],n);return i>1?ht.uniqueSort(n):n},filter:function(t){return this.pushStack(r(this,t||[],!1))},not:function(t){return this.pushStack(r(this,t||[],!0))},is:function(t){return!!r(this,"string"==typeof t&&_t.test(t)?ht(t):t||[],!1).length}});var Ct,St=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ht.fn.init=function(t,e,n){var i,o;if(!t)return this;if(n=n||Ct,"string"==typeof t){if(!(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:St.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof ht?e[0]:e,ht.merge(this,ht.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:et,!0)),Tt.test(i[1])&&ht.isPlainObject(e))for(i in e)ht.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return(o=et.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):ht.isFunction(t)?void 0!==n.ready?n.ready(t):t(ht):ht.makeArray(t,this)}).prototype=ht.fn,Ct=ht(et);var At=/^(?:parents|prev(?:Until|All))/,Dt={children:!0,contents:!0,next:!0,prev:!0};ht.fn.extend({has:function(t){var e=ht(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(ht.contains(this,e[t]))return!0})},closest:function(t,e){var n,i=0,o=this.length,r=[],s="string"!=typeof t&&ht(t);if(!_t.test(t))for(;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&ht.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?ht.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?st.call(ht(t),this[0]):st.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(ht.uniqueSort(ht.merge(this.get(),ht(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ht.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return xt(t,"parentNode")},parentsUntil:function(t,e,n){return xt(t,"parentNode",n)},next:function(t){return s(t,"nextSibling")},prev:function(t){return s(t,"previousSibling")},nextAll:function(t){return xt(t,"nextSibling")},prevAll:function(t){return xt(t,"previousSibling")},nextUntil:function(t,e,n){return xt(t,"nextSibling",n)},prevUntil:function(t,e,n){return xt(t,"previousSibling",n)},siblings:function(t){return wt((t.parentNode||{}).firstChild,t)},children:function(t){return wt(t.firstChild)},contents:function(t){return o(t,"iframe")?t.contentDocument:(o(t,"template")&&(t=t.content||t),ht.merge([],t.childNodes))}},function(t,e){ht.fn[t]=function(n,i){var o=ht.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=ht.filter(i,o)),this.length>1&&(Dt[t]||ht.uniqueSort(o),At.test(t)&&o.reverse()),this.pushStack(o)}});var It=/[^\x20\t\r\n\f]+/g;ht.Callbacks=function(t){t="string"==typeof t?a(t):ht.extend({},t);var e,n,i,o,r=[],s=[],l=-1,c=function(){for(o=o||t.once,i=e=!0;s.length;l=-1)for(n=s.shift();++l<r.length;)!1===r[l].apply(n[0],n[1])&&t.stopOnFalse&&(l=r.length,n=!1);t.memory||(n=!1),e=!1,o&&(r=n?[]:"")},u={add:function(){return r&&(n&&!e&&(l=r.length-1,s.push(n)),function e(n){ht.each(n,function(n,i){ht.isFunction(i)?t.unique&&u.has(i)||r.push(i):i&&i.length&&"string"!==ht.type(i)&&e(i)})}(arguments),n&&!e&&c()),this},remove:function(){return ht.each(arguments,function(t,e){for(var n;(n=ht.inArray(e,r,n))>-1;)r.splice(n,1),n<=l&&l--}),this},has:function(t){return t?ht.inArray(t,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=s=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=s=[],n||e||(r=n=""),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=n||[],n=[t,n.slice?n.slice():n],s.push(n),e||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},ht.extend({Deferred:function(e){var n=[["notify","progress",ht.Callbacks("memory"),ht.Callbacks("memory"),2],["resolve","done",ht.Callbacks("once memory"),ht.Callbacks("once memory"),0,"resolved"],["reject","fail",ht.Callbacks("once memory"),ht.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return o.then(null,t)},pipe:function(){var t=arguments;return ht.Deferred(function(e){ht.each(n,function(n,i){var o=ht.isFunction(t[i[4]])&&t[i[4]];r[i[1]](function(){var t=o&&o.apply(this,arguments);t&&ht.isFunction(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[i[0]+"With"](this,o?[t]:arguments)})}),t=null}).promise()},then:function(e,i,o){function r(e,n,i,o){return function(){var a=this,u=arguments,f=function(){var t,f;if(!(e<s)){if((t=i.apply(a,u))===n.promise())throw new TypeError("Thenable self-resolution");f=t&&("object"==typeof t||"function"==typeof t)&&t.then,ht.isFunction(f)?o?f.call(t,r(s,n,l,o),r(s,n,c,o)):(s++,f.call(t,r(s,n,l,o),r(s,n,c,o),r(s,n,l,n.notifyWith))):(i!==l&&(a=void 0,u=[t]),(o||n.resolveWith)(a,u))}},d=o?f:function(){try{f()}catch(t){ht.Deferred.exceptionHook&&ht.Deferred.exceptionHook(t,d.stackTrace),e+1>=s&&(i!==c&&(a=void 0,u=[t]),n.rejectWith(a,u))}};e?d():(ht.Deferred.getStackHook&&(d.stackTrace=ht.Deferred.getStackHook()),t.setTimeout(d))}}var s=0;return ht.Deferred(function(t){n[0][3].add(r(0,t,ht.isFunction(o)?o:l,t.notifyWith)),n[1][3].add(r(0,t,ht.isFunction(e)?e:l)),n[2][3].add(r(0,t,ht.isFunction(i)?i:c))}).promise()},promise:function(t){return null!=t?ht.extend(t,o):o}},r={};return ht.each(n,function(t,e){var s=e[2],a=e[5];o[e[1]]=s.add,a&&s.add(function(){i=a},n[3-t][2].disable,n[0][2].lock),s.add(e[3].fire),r[e[0]]=function(){return r[e[0]+"With"](this===r?void 0:this,arguments),this},r[e[0]+"With"]=s.fireWith}),o.promise(r),e&&e.call(r,r),r},when:function(t){var e=arguments.length,n=e,i=Array(n),o=it.call(arguments),r=ht.Deferred(),s=function(t){return function(n){i[t]=this,o[t]=arguments.length>1?it.call(arguments):n,--e||r.resolveWith(i,o)}};if(e<=1&&(u(t,r.done(s(n)).resolve,r.reject,!e),"pending"===r.state()||ht.isFunction(o[n]&&o[n].then)))return r.then();for(;n--;)u(o[n],s(n),r.reject);return r.promise()}});var Ot=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ht.Deferred.exceptionHook=function(e,n){t.console&&t.console.warn&&e&&Ot.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},ht.readyException=function(e){t.setTimeout(function(){throw e})};var Nt=ht.Deferred();ht.fn.ready=function(t){return Nt.then(t).catch(function(t){ht.readyException(t)}),this},ht.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--ht.readyWait:ht.isReady)||(ht.isReady=!0,!0!==t&&--ht.readyWait>0||Nt.resolveWith(et,[ht]))}}),ht.ready.then=Nt.then,"complete"===et.readyState||"loading"!==et.readyState&&!et.documentElement.doScroll?t.setTimeout(ht.ready):(et.addEventListener("DOMContentLoaded",f),t.addEventListener("load",f));var Pt=function(t,e,n,i,o,r,s){var a=0,l=t.length,c=null==n;if("object"===ht.type(n)){o=!0;for(a in n)Pt(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,ht.isFunction(i)||(s=!0),c&&(s?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(ht(t),n)})),e))for(;a<l;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:c?e.call(t):l?e(t[0],n):r},kt=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};d.uid=1,d.prototype={cache:function(t){var e=t[this.expando];return e||(e={},kt(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);if("string"==typeof e)o[ht.camelCase(e)]=n;else for(i in e)o[ht.camelCase(i)]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][ht.camelCase(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){Array.isArray(e)?e=e.map(ht.camelCase):(e=ht.camelCase(e),e=e in i?[e]:e.match(It)||[]),n=e.length;for(;n--;)delete i[e[n]]}(void 0===e||ht.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!ht.isEmptyObject(e)}};var Lt=new d,$t=new d,jt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Rt=/[A-Z]/g;ht.extend({hasData:function(t){return $t.hasData(t)||Lt.hasData(t)},data:function(t,e,n){return $t.access(t,e,n)},removeData:function(t,e){$t.remove(t,e)},_data:function(t,e,n){return Lt.access(t,e,n)},_removeData:function(t,e){Lt.remove(t,e)}}),ht.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=$t.get(r),1===r.nodeType&&!Lt.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=ht.camelCase(i.slice(5)),h(r,i,o[i]));Lt.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){$t.set(this,t)}):Pt(this,function(e){var n;if(r&&void 0===e){if(void 0!==(n=$t.get(r,t)))return n;if(void 0!==(n=h(r,t)))return n}else this.each(function(){$t.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){$t.remove(this,t)})}}),ht.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=Lt.get(t,e),n&&(!i||Array.isArray(n)?i=Lt.access(t,e,ht.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=ht.queue(t,e),i=n.length,o=n.shift(),r=ht._queueHooks(t,e);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,function(){ht.dequeue(t,e)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Lt.get(t,n)||Lt.access(t,n,{empty:ht.Callbacks("once memory").add(function(){Lt.remove(t,[e+"queue",n])})})}}),ht.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?ht.queue(this[0],t):void 0===e?this:this.each(function(){var n=ht.queue(this,t,e);ht._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&ht.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ht.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=ht.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=Lt.get(r[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var Ht=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ft=new RegExp("^(?:([+-])=|)("+Ht+")([a-z%]*)$","i"),Mt=["Top","Right","Bottom","Left"],Wt=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&ht.contains(t.ownerDocument,t)&&"none"===ht.css(t,"display")},Bt=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o},qt={};ht.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Wt(this)?ht(this).show():ht(this).hide()})}});var Ut=/^(?:checkbox|radio)$/i,Vt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Gt=/^$|\/(?:java|ecma)script/i,Xt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Xt.optgroup=Xt.option,Xt.tbody=Xt.tfoot=Xt.colgroup=Xt.caption=Xt.thead,Xt.th=Xt.td;var Yt=/<|&#?\w+;/;!function(){var t=et.createDocumentFragment().appendChild(et.createElement("div")),e=et.createElement("input");e.setAttribute("type","radio"),e.setAttribute("checked","checked"),e.setAttribute("name","t"),t.appendChild(e),dt.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",dt.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var zt=et.documentElement,Qt=/^key/,Kt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Zt=/^([^.]*)(?:\.(.+)|)/;ht.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,c,u,f,d,p,h,g,m=Lt.get(t);if(m)for(n.handler&&(r=n,n=r.handler,o=r.selector),o&&ht.find.matchesSelector(zt,o),n.guid||(n.guid=ht.guid++),(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(e){return void 0!==ht&&ht.event.triggered!==e.type?ht.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(It)||[""]).length;c--;)a=Zt.exec(e[c])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p&&(f=ht.event.special[p]||{},p=(o?f.delegateType:f.bindType)||p,f=ht.event.special[p]||{},u=ht.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&ht.expr.match.needsContext.test(o),namespace:h.join(".")},r),(d=l[p])||(d=l[p]=[],d.delegateCount=0,f.setup&&!1!==f.setup.call(t,i,h,s)||t.addEventListener&&t.addEventListener(p,s)),f.add&&(f.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,u):d.push(u),ht.event.global[p]=!0)},remove:function(t,e,n,i,o){var r,s,a,l,c,u,f,d,p,h,g,m=Lt.hasData(t)&&Lt.get(t);if(m&&(l=m.events)){for(c=(e=(e||"").match(It)||[""]).length;c--;)if(a=Zt.exec(e[c])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p){for(f=ht.event.special[p]||{},d=l[p=(i?f.delegateType:f.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)u=d[r],!o&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(r,1),u.selector&&d.delegateCount--,f.remove&&f.remove.call(t,u));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(t,h,m.handle)||ht.removeEvent(t,p,m.handle),delete l[p])}else for(p in l)ht.event.remove(t,p+e[c],n,i,!0);ht.isEmptyObject(l)&&Lt.remove(t,"handle events")}},dispatch:function(t){var e,n,i,o,r,s,a=ht.event.fix(t),l=new Array(arguments.length),c=(Lt.get(this,"events")||{})[a.type]||[],u=ht.event.special[a.type]||{};for(l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];if(a.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,a)){for(s=ht.event.handlers.call(this,a,c),e=0;(o=s[e++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((ht.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,a),a.result}},handlers:function(t,e){var n,i,o,r,s,a=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)i=e[n],o=i.selector+" ",void 0===s[o]&&(s[o]=i.needsContext?ht(o,this).index(c)>-1:ht.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(ht.Event.prototype,t,{enumerable:!0,configurable:!0,get:ht.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[ht.expando]?t:new ht.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==T()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===T()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&o(this,"input"))return this.click(),!1},_default:function(t){return o(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},ht.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},ht.Event=function(t,e){return this instanceof ht.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?w:_,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&ht.extend(this,e),this.timeStamp=t&&t.timeStamp||ht.now(),void(this[ht.expando]=!0)):new ht.Event(t,e)},ht.Event.prototype={constructor:ht.Event,isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=w,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=w,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=w,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},ht.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&Qt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Kt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},ht.event.addProp),ht.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){ht.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return o&&(o===i||ht.contains(i,o))||(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),ht.fn.extend({on:function(t,e,n,i){return E(this,t,e,n,i)},one:function(t,e,n,i){return E(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,ht(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=_),this.each(function(){ht.event.remove(this,t,n,e)})}});var Jt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,te=/<script|<style|<link/i,ee=/checked\s*(?:[^=]|=\s*.checked.)/i,ne=/^true\/(.*)/,ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ht.extend({htmlPrefilter:function(t){return t.replace(Jt,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),l=ht.contains(t.ownerDocument,t);if(!(dt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ht.isXMLDoc(t)))for(s=y(a),r=y(t),i=0,o=r.length;i<o;i++)I(r[i],s[i]);if(e)if(n)for(r=r||y(t),s=s||y(a),i=0,o=r.length;i<o;i++)D(r[i],s[i]);else D(t,a);return(s=y(a,"script")).length>0&&b(s,!l&&y(t,"script")),a},cleanData:function(t){for(var e,n,i,o=ht.event.special,r=0;void 0!==(n=t[r]);r++)if(kt(n)){if(e=n[Lt.expando]){if(e.events)for(i in e.events)o[i]?ht.event.remove(n,i):ht.removeEvent(n,i,e.handle);n[Lt.expando]=void 0}n[$t.expando]&&(n[$t.expando]=void 0)}}}),ht.fn.extend({detach:function(t){return N(this,t,!0)},remove:function(t){return N(this,t)},text:function(t){return Pt(this,function(t){return void 0===t?ht.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return O(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||C(this,t).appendChild(t)})},prepend:function(){return O(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=C(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return O(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return O(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(ht.cleanData(y(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return ht.clone(this,t,e)})},html:function(t){return Pt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!te.test(t)&&!Xt[(Vt.exec(t)||["",""])[1].toLowerCase()]){t=ht.htmlPrefilter(t);try{for(;n<i;n++)1===(e=this[n]||{}).nodeType&&(ht.cleanData(y(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return O(this,arguments,function(e){var n=this.parentNode;ht.inArray(this,t)<0&&(ht.cleanData(y(this)),n&&n.replaceChild(e,this))},t)}}),ht.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ht.fn[t]=function(t){for(var n,i=[],o=ht(t),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),ht(o[s])[e](n),rt.apply(i,n.get());return this.pushStack(i)}});var oe=/^margin/,re=new RegExp("^("+Ht+")(?!px)[a-z%]+$","i"),se=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=t),n.getComputedStyle(e)};!function(){function e(){if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",zt.appendChild(s);var e=t.getComputedStyle(a);n="1%"!==e.top,r="2px"===e.marginLeft,i="4px"===e.width,a.style.marginRight="50%",o="4px"===e.marginRight,zt.removeChild(s),a=null}}var n,i,o,r,s=et.createElement("div"),a=et.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",dt.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),ht.extend(dt,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return e(),i},pixelMarginRight:function(){return e(),o},reliableMarginLeft:function(){return e(),r}}))}();var ae=/^(none|table(?!-c[ea]).+)/,le=/^--/,ce={position:"absolute",visibility:"hidden",display:"block"},ue={letterSpacing:"0",fontWeight:"400"},fe=["Webkit","Moz","ms"],de=et.createElement("div").style;ht.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=P(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=ht.camelCase(e),l=le.test(e),c=t.style;return l||(e=$(a)),s=ht.cssHooks[e]||ht.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:c[e]:("string"===(r=typeof n)&&(o=Ft.exec(n))&&o[1]&&(n=g(t,e,o),r="number"),void(null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(ht.cssNumber[a]?"":"px")),dt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l?c.setProperty(e,n):c[e]=n))))}},css:function(t,e,n,i){var o,r,s,a=ht.camelCase(e);return le.test(e)||(e=$(a)),(s=ht.cssHooks[e]||ht.cssHooks[a])&&"get"in s&&(o=s.get(t,!0,n)),void 0===o&&(o=P(t,e,i)),"normal"===o&&e in ue&&(o=ue[e]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),ht.each(["height","width"],function(t,e){ht.cssHooks[e]={get:function(t,n,i){if(n)return!ae.test(ht.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?H(t,e,i):Bt(t,ce,function(){return H(t,e,i)})},set:function(t,n,i){var o,r=i&&se(t),s=i&&R(t,e,i,"border-box"===ht.css(t,"boxSizing",!1,r),r);return s&&(o=Ft.exec(n))&&"px"!==(o[3]||"px")&&(t.style[e]=n,n=ht.css(t,e)),j(0,n,s)}}}),ht.cssHooks.marginLeft=k(dt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(P(t,"marginLeft"))||t.getBoundingClientRect().left-Bt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),ht.each({margin:"",padding:"",border:"Width"},function(t,e){ht.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[t+Mt[i]+e]=r[i]||r[i-2]||r[0];return o}},oe.test(t)||(ht.cssHooks[t+e].set=j)}),ht.fn.extend({css:function(t,e){return Pt(this,function(t,e,n){var i,o,r={},s=0;if(Array.isArray(e)){for(i=se(t),o=e.length;s<o;s++)r[e[s]]=ht.css(t,e[s],!1,i);return r}return void 0!==n?ht.style(t,e,n):ht.css(t,e)},t,e,arguments.length>1)}}),ht.Tween=F,F.prototype={constructor:F,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||ht.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(ht.cssNumber[n]?"":"px")},cur:function(){var t=F.propHooks[this.prop];return t&&t.get?t.get(this):F.propHooks._default.get(this)},run:function(t){var e,n=F.propHooks[this.prop];return this.options.duration?this.pos=e=ht.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=ht.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){ht.fx.step[t.prop]?ht.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[ht.cssProps[t.prop]]&&!ht.cssHooks[t.prop]?t.elem[t.prop]=t.now:ht.style(t.elem,t.prop,t.now+t.unit)}}},F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ht.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},ht.fx=F.prototype.init,ht.fx.step={};var pe,he,ge=/^(?:toggle|show|hide)$/,me=/queueHooks$/;ht.Animation=ht.extend(V,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return g(n.elem,t,Ft.exec(e),n),n}]},tweener:function(t,e){ht.isFunction(t)?(e=t,t=["*"]):t=t.match(It);for(var n,i=0,o=t.length;i<o;i++)n=t[i],V.tweeners[n]=V.tweeners[n]||[],V.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,o,r,s,a,l,c,u,f="width"in e||"height"in e,d=this,p={},h=t.style,g=t.nodeType&&Wt(t),m=Lt.get(t,"fxshow");n.queue||(null==(s=ht._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,ht.queue(t,"fx").length||s.empty.fire()})}));for(i in e)if(o=e[i],ge.test(o)){if(delete e[i],r=r||"toggle"===o,o===(g?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue;g=!0}p[i]=m&&m[i]||ht.style(t,i)}if((l=!ht.isEmptyObject(e))||!ht.isEmptyObject(p)){f&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=m&&m.display)&&(c=Lt.get(t,"display")),"none"===(u=ht.css(t,"display"))&&(c?u=c:(v([t],!0),c=t.style.display||c,u=ht.css(t,"display"),v([t]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===ht.css(t,"float")&&(l||(d.done(function(){h.display=c}),null==c&&(u=h.display,c="none"===u?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1;for(i in p)l||(m?"hidden"in m&&(g=m.hidden):m=Lt.access(t,"fxshow",{display:c}),r&&(m.hidden=!g),g&&v([t],!0),d.done(function(){g||v([t]),Lt.remove(t,"fxshow");for(i in p)ht.style(t,i,p[i])})),l=q(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}}],prefilter:function(t,e){e?V.prefilters.unshift(t):V.prefilters.push(t)}}),ht.speed=function(t,e,n){var i=t&&"object"==typeof t?ht.extend({},t):{complete:n||!n&&e||ht.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ht.isFunction(e)&&e};return ht.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in ht.fx.speeds?i.duration=ht.fx.speeds[i.duration]:i.duration=ht.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){ht.isFunction(i.old)&&i.old.call(this),i.queue&&ht.dequeue(this,i.queue)},i},ht.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Wt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=ht.isEmptyObject(t),r=ht.speed(e,n,i),s=function(){var e=V(this,ht.extend({},t),r);(o||Lt.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=ht.timers,s=Lt.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&me.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));!e&&n||ht.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=Lt.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=ht.timers,s=i?i.length:0;for(n.finish=!0,ht.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<s;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),ht.each(["toggle","show","hide"],function(t,e){var n=ht.fn[e];ht.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(B(e,!0),t,i,o)}}),ht.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ht.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),ht.timers=[],ht.fx.tick=function(){var t,e=0,n=ht.timers;for(pe=ht.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||ht.fx.stop(),pe=void 0},ht.fx.timer=function(t){ht.timers.push(t),ht.fx.start()},ht.fx.interval=13,ht.fx.start=function(){he||(he=!0,M())},ht.fx.stop=function(){he=null},ht.fx.speeds={slow:600,fast:200,_default:400},ht.fn.delay=function(e,n){return e=ht.fx?ht.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(n,i){var o=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(o)}})},function(){var t=et.createElement("input"),e=et.createElement("select").appendChild(et.createElement("option"));t.type="checkbox",dt.checkOn=""!==t.value,dt.optSelected=e.selected,(t=et.createElement("input")).value="t",t.type="radio",dt.radioValue="t"===t.value}();var ve,ye=ht.expr.attrHandle;ht.fn.extend({attr:function(t,e){return Pt(this,ht.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ht.removeAttr(this,t)})}}),ht.extend({attr:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?ht.prop(t,e,n):(1===r&&ht.isXMLDoc(t)||(o=ht.attrHooks[e.toLowerCase()]||(ht.expr.match.bool.test(e)?ve:void 0)),void 0!==n?null===n?void ht.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=ht.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!dt.radioValue&&"radio"===e&&o(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,o=e&&e.match(It);if(o&&1===t.nodeType)for(;n=o[i++];)t.removeAttribute(n)}}),ve={set:function(t,e,n){return!1===e?ht.removeAttr(t,n):t.setAttribute(n,n),n}},ht.each(ht.expr.match.bool.source.match(/\w+/g),function(t,e){var n=ye[e]||ht.find.attr;ye[e]=function(t,e,i){var o,r,s=e.toLowerCase();return i||(r=ye[s],ye[s]=o,o=null!=n(t,e,i)?s:null,ye[s]=r),o}});var be=/^(?:input|select|textarea|button)$/i,xe=/^(?:a|area)$/i;ht.fn.extend({prop:function(t,e){return Pt(this,ht.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[ht.propFix[t]||t]})}}),ht.extend({prop:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&ht.isXMLDoc(t)||(e=ht.propFix[e]||e,o=ht.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=ht.find.attr(t,"tabindex");return e?parseInt(e,10):be.test(t.nodeName)||xe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),dt.optSelected||(ht.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),ht.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ht.propFix[this.toLowerCase()]=this}),ht.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(ht.isFunction(t))return this.each(function(e){ht(this).addClass(t.call(this,e,X(this)))});if("string"==typeof t&&t)for(e=t.match(It)||[];n=this[l++];)if(o=X(n),i=1===n.nodeType&&" "+G(o)+" "){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=G(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(ht.isFunction(t))return this.each(function(e){ht(this).removeClass(t.call(this,e,X(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(It)||[];n=this[l++];)if(o=X(n),i=1===n.nodeType&&" "+G(o)+" "){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");o!==(a=G(i))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):ht.isFunction(t)?this.each(function(n){ht(this).toggleClass(t.call(this,n,X(this),e),e)}):this.each(function(){var e,i,o,r;if("string"===n)for(i=0,o=ht(this),r=t.match(It)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==n||((e=X(this))&&Lt.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Lt.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+G(X(n))+" ").indexOf(e)>-1)return!0;return!1}});var we=/\r/g;ht.fn.extend({val:function(t){var e,n,i,o=this[0];return arguments.length?(i=ht.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?t.call(this,n,ht(this).val()):t)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=ht.map(o,function(t){return null==t?"":t+""})),(e=ht.valHooks[this.type]||ht.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=ht.valHooks[o.type]||ht.valHooks[o.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(we,""):null==n?"":n:void 0}}),ht.extend({valHooks:{option:{get:function(t){var e=ht.find.attr(t,"value");return null!=e?e:G(ht.text(t))}},select:{get:function(t){var e,n,i,r=t.options,s=t.selectedIndex,a="select-one"===t.type,l=a?null:[],c=a?s+1:r.length;for(i=s<0?c:a?s:0;i<c;i++)if(((n=r[i]).selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(e=ht(n).val(),a)return e;l.push(e)}return l},set:function(t,e){for(var n,i,o=t.options,r=ht.makeArray(e),s=o.length;s--;)i=o[s],(i.selected=ht.inArray(ht.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(t.selectedIndex=-1),r}}}}),ht.each(["radio","checkbox"],function(){ht.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=ht.inArray(ht(t).val(),e)>-1}},dt.checkOn||(ht.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var _e=/^(?:focusinfocus|focusoutblur)$/;ht.extend(ht.event,{trigger:function(e,n,i,o){var r,s,a,l,c,u,f,d=[i||et],p=ct.call(e,"type")?e.type:e,h=ct.call(e,"namespace")?e.namespace.split("."):[];if(s=a=i=i||et,3!==i.nodeType&&8!==i.nodeType&&!_e.test(p+ht.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),c=p.indexOf(":")<0&&"on"+p,e=e[ht.expando]?e:new ht.Event(p,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:ht.makeArray(n,[e]),f=ht.event.special[p]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!ht.isWindow(i)){for(l=f.delegateType||p,_e.test(l+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||et)&&d.push(a.defaultView||a.parentWindow||t)}for(r=0;(s=d[r++])&&!e.isPropagationStopped();)e.type=r>1?l:f.bindType||p,(u=(Lt.get(s,"events")||{})[e.type]&&Lt.get(s,"handle"))&&u.apply(s,n),(u=c&&s[c])&&u.apply&&kt(s)&&(e.result=u.apply(s,n),!1===e.result&&e.preventDefault());return e.type=p,o||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!kt(i)||c&&ht.isFunction(i[p])&&!ht.isWindow(i)&&((a=i[c])&&(i[c]=null),ht.event.triggered=p,i[p](),ht.event.triggered=void 0,a&&(i[c]=a)),e.result}},simulate:function(t,e,n){var i=ht.extend(new ht.Event,n,{type:t,isSimulated:!0});ht.event.trigger(i,null,e)}}),ht.fn.extend({trigger:function(t,e){return this.each(function(){ht.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return ht.event.trigger(t,e,n,!0)}}),ht.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){ht.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ht.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),dt.focusin="onfocusin"in t,dt.focusin||ht.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){ht.event.simulate(e,t.target,ht.event.fix(t))};ht.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=Lt.access(i,e);o||i.addEventListener(t,n,!0),Lt.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Lt.access(i,e)-1;o?Lt.access(i,e,o):(i.removeEventListener(t,n,!0),Lt.remove(i,e))}}});var Te=t.location,Ee=ht.now(),Ce=/\?/;ht.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||ht.error("Invalid XML: "+e),n};var Se=/\[\]$/,Ae=/\r?\n/g,De=/^(?:submit|button|image|reset|file)$/i,Ie=/^(?:input|select|textarea|keygen)/i;ht.param=function(t,e){var n,i=[],o=function(t,e){var n=ht.isFunction(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!ht.isPlainObject(t))ht.each(t,function(){o(this.name,this.value)});else for(n in t)Y(n,t[n],e,o);return i.join("&")},ht.fn.extend({serialize:function(){return ht.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ht.prop(this,"elements");return t?ht.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ht(this).is(":disabled")&&Ie.test(this.nodeName)&&!De.test(t)&&(this.checked||!Ut.test(t))}).map(function(t,e){var n=ht(this).val();return null==n?null:Array.isArray(n)?ht.map(n,function(t){return{name:e.name,value:t.replace(Ae,"\r\n")}}):{name:e.name,value:n.replace(Ae,"\r\n")}}).get()}});var Oe=/%20/g,Ne=/#.*$/,Pe=/([?&])_=[^&]*/,ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Le=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,$e=/^(?:GET|HEAD)$/,je=/^\/\//,Re={},He={},Fe="*/".concat("*"),Me=et.createElement("a");Me.href=Te.href,ht.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Te.href,type:"GET",isLocal:Le.test(Te.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Fe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ht.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?K(K(t,ht.ajaxSettings),e):K(ht.ajaxSettings,t)},ajaxPrefilter:z(Re),ajaxTransport:z(He),ajax:function(e,n){function i(e,n,i,a){var c,d,p,x,w,_=n;u||(u=!0,l&&t.clearTimeout(l),o=void 0,s=a||"",T.readyState=e>0?4:0,c=e>=200&&e<300||304===e,i&&(x=Z(h,T,i)),x=J(h,x,T,c),c?(h.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(ht.lastModified[r]=w),(w=T.getResponseHeader("etag"))&&(ht.etag[r]=w)),204===e||"HEAD"===h.type?_="nocontent":304===e?_="notmodified":(_=x.state,d=x.data,p=x.error,c=!p)):(p=_,!e&&_||(_="error",e<0&&(e=0))),T.status=e,T.statusText=(n||_)+"",c?v.resolveWith(g,[d,_,T]):v.rejectWith(g,[T,_,p]),T.statusCode(b),b=void 0,f&&m.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?d:p]),y.fireWith(g,[T,_]),f&&(m.trigger("ajaxComplete",[T,h]),--ht.active||ht.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=void 0),n=n||{};var o,r,s,a,l,c,u,f,d,p,h=ht.ajaxSetup({},n),g=h.context||h,m=h.context&&(g.nodeType||g.jquery)?ht(g):ht.event,v=ht.Deferred(),y=ht.Callbacks("once memory"),b=h.statusCode||{},x={},w={},_="canceled",T={readyState:0,getResponseHeader:function(t){var e;if(u){if(!a)for(a={};e=ke.exec(s);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return u?s:null},setRequestHeader:function(t,e){return null==u&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,x[t]=e),this},overrideMimeType:function(t){return null==u&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(u)T.always(t[T.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||_;return o&&o.abort(e),i(0,e),this}};if(v.promise(T),h.url=((e||h.url||Te.href)+"").replace(je,Te.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(It)||[""],null==h.crossDomain){c=et.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Me.protocol+"//"+Me.host!=c.protocol+"//"+c.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=ht.param(h.data,h.traditional)),Q(Re,h,n,T),u)return T;(f=ht.event&&h.global)&&0==ht.active++&&ht.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!$e.test(h.type),r=h.url.replace(Ne,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Oe,"+")):(p=h.url.slice(r.length),h.data&&(r+=(Ce.test(r)?"&":"?")+h.data,delete h.data),!1===h.cache&&(r=r.replace(Pe,"$1"),p=(Ce.test(r)?"&":"?")+"_="+Ee+++p),h.url=r+p),h.ifModified&&(ht.lastModified[r]&&T.setRequestHeader("If-Modified-Since",ht.lastModified[r]),ht.etag[r]&&T.setRequestHeader("If-None-Match",ht.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Fe+"; q=0.01":""):h.accepts["*"]);for(d in h.headers)T.setRequestHeader(d,h.headers[d]);if(h.beforeSend&&(!1===h.beforeSend.call(g,T,h)||u))return T.abort();if(_="abort",y.add(h.complete),T.done(h.success),T.fail(h.error),o=Q(He,h,n,T)){if(T.readyState=1,f&&m.trigger("ajaxSend",[T,h]),u)return T;h.async&&h.timeout>0&&(l=t.setTimeout(function(){T.abort("timeout")},h.timeout));try{u=!1,o.send(x,i)}catch(t){if(u)throw t;i(-1,t)}}else i(-1,"No Transport");return T},getJSON:function(t,e,n){return ht.get(t,e,n,"json")},getScript:function(t,e){return ht.get(t,void 0,e,"script")}}),ht.each(["get","post"],function(t,e){ht[e]=function(t,n,i,o){return ht.isFunction(n)&&(o=o||i,i=n,n=void 0),ht.ajax(ht.extend({url:t,type:e,dataType:o,data:n,success:i},ht.isPlainObject(t)&&t))}}),ht._evalUrl=function(t){return ht.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ht.fn.extend({wrapAll:function(t){var e;return this[0]&&(ht.isFunction(t)&&(t=t.call(this[0])),e=ht(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return ht.isFunction(t)?this.each(function(e){ht(this).wrapInner(t.call(this,e))}):this.each(function(){var e=ht(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ht.isFunction(t);return this.each(function(n){ht(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){ht(this).replaceWith(this.childNodes)}),this}}),ht.expr.pseudos.hidden=function(t){return!ht.expr.pseudos.visible(t)},ht.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},ht.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var We={0:200,1223:204},Be=ht.ajaxSettings.xhr();dt.cors=!!Be&&"withCredentials"in Be,dt.ajax=Be=!!Be,ht.ajaxTransport(function(e){var n,i;if(dt.cors||Be&&!e.crossDomain)return{send:function(o,r){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(t){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(We[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(t){if(n)throw t}},abort:function(){n&&n()}}}),ht.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),ht.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return ht.globalEval(t),t}}}),ht.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),ht.ajaxTransport("script",function(t){if(t.crossDomain){var e,n;return{send:function(i,o){e=ht("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),et.head.appendChild(e[0])},abort:function(){n&&n()}}}});var qe=[],Ue=/(=)\?(?=&|$)|\?\?/;ht.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=qe.pop()||ht.expando+"_"+Ee++;return this[t]=!0,t}}),ht.ajaxPrefilter("json jsonp",function(e,n,i){var o,r,s,a=!1!==e.jsonp&&(Ue.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ue.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=ht.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ue,"$1"+o):!1!==e.jsonp&&(e.url+=(Ce.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||ht.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=t[o],t[o]=function(){s=arguments},i.always(function(){void 0===r?ht(t).removeProp(o):t[o]=r,e[o]&&(e.jsonpCallback=n.jsonpCallback,qe.push(o)),s&&ht.isFunction(r)&&r(s[0]),s=r=void 0}),"script"}),dt.createHTMLDocument=function(){var t=et.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),ht.parseHTML=function(t,e,n){if("string"!=typeof t)return[];"boolean"==typeof e&&(n=e,e=!1);var i,o,r;return e||(dt.createHTMLDocument?(e=et.implementation.createHTMLDocument(""),i=e.createElement("base"),i.href=et.location.href,e.head.appendChild(i)):e=et),o=Tt.exec(t),r=!n&&[],o?[e.createElement(o[1])]:(o=x([t],e,r),r&&r.length&&ht(r).remove(),ht.merge([],o.childNodes))},ht.fn.load=function(t,e,n){var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=G(t.slice(a)),t=t.slice(0,a)),ht.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&ht.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done(function(t){r=arguments,s.html(i?ht("<div>").append(ht.parseHTML(t)).find(i):t)}).always(n&&function(t,e){s.each(function(){n.apply(this,r||[t.responseText,e,t])})}),this},ht.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ht.fn[e]=function(t){return this.on(e,t)}}),ht.expr.pseudos.animated=function(t){return ht.grep(ht.timers,function(e){return t===e.elem}).length},ht.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,c=ht.css(t,"position"),u=ht(t),f={};"static"===c&&(t.style.position="relative"),a=u.offset(),r=ht.css(t,"top"),l=ht.css(t,"left"),("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1?(i=u.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),ht.isFunction(e)&&(e=e.call(t,n,ht.extend({},a))),null!=e.top&&(f.top=e.top-a.top+s),null!=e.left&&(f.left=e.left-a.left+o),"using"in e?e.using.call(t,f):u.css(f)}},ht.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ht.offset.setOffset(this,t,e)});var e,n,i,o,r=this[0];return r?r.getClientRects().length?(i=r.getBoundingClientRect(),e=r.ownerDocument,n=e.documentElement,o=e.defaultView,{top:i.top+o.pageYOffset-n.clientTop,left:i.left+o.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n=this[0],i={top:0,left:0};return"fixed"===ht.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),o(t[0],"html")||(i=t.offset()),i={top:i.top+ht.css(t[0],"borderTopWidth",!0),left:i.left+ht.css(t[0],"borderLeftWidth",!0)}),{top:e.top-i.top-ht.css(n,"marginTop",!0),left:e.left-i.left-ht.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===ht.css(t,"position");)t=t.offsetParent;return t||zt})}}),ht.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;ht.fn[t]=function(i){return Pt(this,function(t,i,o){var r;return ht.isWindow(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===o?r?r[e]:t[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):t[i]=o)},t,i,arguments.length)}}),ht.each(["top","left"],function(t,e){ht.cssHooks[e]=k(dt.pixelPosition,function(t,n){if(n)return n=P(t,e),re.test(n)?ht(t).position()[e]+"px":n})}),ht.each({Height:"height",Width:"width"},function(t,e){ht.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){ht.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return Pt(this,function(e,n,o){var r;return ht.isWindow(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===o?ht.css(e,n,a):ht.style(e,n,o,a)},e,s?o:void 0,s)}})}),ht.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),ht.holdReady=function(t){t?ht.readyWait++:ht.ready(!0)},ht.isArray=Array.isArray,ht.parseJSON=JSON.parse,ht.nodeName=o,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ht});var Ve=t.jQuery,Ge=t.$;return ht.noConflict=function(e){return t.$===ht&&(t.$=Ge),e&&t.jQuery===ht&&(t.jQuery=Ve),ht},e||(t.jQuery=t.$=ht),ht}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Popper=e()}(this,function(){"use strict";function t(t){return t&&"[object Function]"==={}.toString.call(t)}function e(t,e){if(1!==t.nodeType)return[];var n=window.getComputedStyle(t,null);return e?n[e]:n}function n(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function i(t){if(!t||-1!==["HTML","BODY","#document"].indexOf(t.nodeName))return window.document.body;var o=e(t),r=o.overflow,s=o.overflowX,a=o.overflowY;return/(auto|scroll)/.test(r+a+s)?t:i(n(t))}function o(t){var n=t&&t.offsetParent,i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===e(n,"position")?o(n):n:window.document.documentElement}function r(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||o(t.firstElementChild)===t)}function s(t){return null===t.parentNode?t:s(t.parentNode)}function a(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return window.document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,l=n?e:t,c=document.createRange();c.setStart(i,0),c.setEnd(l,0);var u=c.commonAncestorContainer;if(t!==u&&e!==u||i.contains(l))return r(u)?u:o(u);var f=s(t);return f.host?a(f.host,e):a(t,s(e).host)}function l(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=window.document.documentElement;return(window.document.scrollingElement||i)[e]}return t[e]}function c(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=l(e,"top"),o=l(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function u(t,e){var n="x"===e?"Left":"Top",i="Left"==n?"Right":"Bottom";return+t["border"+n+"Width"].split("px")[0]+ +t["border"+i+"Width"].split("px")[0]}function f(t,e,n,i){return X(e["offset"+t],n["client"+t],n["offset"+t],et()?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function d(){var t=window.document.body,e=window.document.documentElement,n=et()&&window.getComputedStyle(e);return{height:f("Height",t,e,n),width:f("Width",t,e,n)}}function p(t){return rt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function h(t){var n={};if(et())try{n=t.getBoundingClientRect();var i=l(t,"top"),o=l(t,"left");n.top+=i,n.left+=o,n.bottom+=i,n.right+=o}catch(t){}else n=t.getBoundingClientRect();var r={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},s="HTML"===t.nodeName?d():{},a=s.width||t.clientWidth||r.right-r.left,c=s.height||t.clientHeight||r.bottom-r.top,f=t.offsetWidth-a,h=t.offsetHeight-c;if(f||h){var g=e(t);f-=u(g,"x"),h-=u(g,"y"),r.width-=f,r.height-=h}return p(r)}function g(t,n){var o=et(),r="HTML"===n.nodeName,s=h(t),a=h(n),l=i(t),u=e(n),f=+u.borderTopWidth.split("px")[0],d=+u.borderLeftWidth.split("px")[0],g=p({top:s.top-a.top-f,left:s.left-a.left-d,width:s.width,height:s.height});if(g.marginTop=0,g.marginLeft=0,!o&&r){var m=+u.marginTop.split("px")[0],v=+u.marginLeft.split("px")[0];g.top-=f-m,g.bottom-=f-m,g.left-=d-v,g.right-=d-v,g.marginTop=m,g.marginLeft=v}return(o?n.contains(l):n===l&&"BODY"!==l.nodeName)&&(g=c(g,n)),g}function m(t){var e=window.document.documentElement,n=g(t,e),i=X(e.clientWidth,window.innerWidth||0),o=X(e.clientHeight,window.innerHeight||0),r=l(e),s=l(e,"left");return p({top:r-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:o})}function v(t){var i=t.nodeName;return"BODY"!==i&&"HTML"!==i&&("fixed"===e(t,"position")||v(n(t)))}function y(t,e,o,r){var s={top:0,left:0},l=a(t,e);if("viewport"===r)s=m(l);else{var c;"scrollParent"===r?"BODY"===(c=i(n(t))).nodeName&&(c=window.document.documentElement):c="window"===r?window.document.documentElement:r;var u=g(c,l);if("HTML"!==c.nodeName||v(l))s=u;else{var f=d(),p=f.height,h=f.width;s.top+=u.top-u.marginTop,s.bottom=p+u.top,s.left+=u.left-u.marginLeft,s.right=h+u.left}}return s.left+=o,s.top+=o,s.right-=o,s.bottom-=o,s}function b(t){return t.width*t.height}function x(t,e,n,i,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=y(n,i,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return rt({key:t},a[t],{area:b(a[t])})}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),u=0<c.length?c[0].key:l[0].key,f=t.split("-")[1];return u+(f?"-"+f:"")}function w(t,e,n){return g(n,a(e,n))}function _(t){var e=window.getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function T(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function E(t,e,n){n=n.split("-")[0];var i=_(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[T(a)],o}function C(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function S(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=C(t,function(t){return t[e]===n});return t.indexOf(i)}function A(e,n,i){return(void 0===i?e:e.slice(0,S(e,"name",i))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=e.function||e.fn;e.enabled&&t(i)&&(n.offsets.popper=p(n.offsets.popper),n.offsets.reference=p(n.offsets.reference),n=i(n,e))}),n}function D(){if(!this.state.isDestroyed){var t={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=w(this.state,this.popper,this.reference),t.placement=x(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=E(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=A(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function I(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function O(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length-1;i++){var o=e[i],r=o?""+o+n:t;if(void 0!==window.document.body.style[r])return r}return null}function N(){return this.state.isDestroyed=!0,I(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[O("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(t,e,n,o){var r="BODY"===t.nodeName,s=r?window:t;s.addEventListener(e,n,{passive:!0}),r||P(i(s.parentNode),e,n,o),o.push(s)}function k(t,e,n,o){n.updateBound=o,window.addEventListener("resize",n.updateBound,{passive:!0});var r=i(t);return P(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function L(){this.state.eventsEnabled||(this.state=k(this.reference,this.options,this.state,this.scheduleUpdate))}function $(t,e){return window.removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function j(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=$(this.reference,this.state))}function R(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function H(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&R(e[n])&&(i="px"),t.style[n]=e[n]+i})}function F(t,e){Object.keys(e).forEach(function(n){!1===e[n]?t.removeAttribute(n):t.setAttribute(n,e[n])})}function M(t,e,n){var i=C(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`";console.warn("`"+n+"` modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}function W(t){return"end"===t?"start":"start"===t?"end":t}function B(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=at.indexOf(t),i=at.slice(n+1).concat(at.slice(0,n));return e?i.reverse():i}function q(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0===s.indexOf("%")){var a;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return p(a)[e]/100*r}if("vh"===s||"vw"===s){return("vh"===s?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}function U(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(C(s,function(t){return-1!==t.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1===a?[s]:[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))];return(c=c.map(function(t,i){var o=(1===i?!r:r)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return q(t,o,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){R(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))})}),o}for(var V=Math.min,G=Math.floor,X=Math.max,Y=["native code","[object MutationObserverConstructor]"],z="undefined"!=typeof window,Q=["Edge","Trident","Firefox"],K=0,Z=0;Z<Q.length;Z+=1)if(z&&0<=navigator.userAgent.indexOf(Q[Z])){K=1;break}var J,tt=z&&function(t){return Y.some(function(e){return-1<(t||"").toString().indexOf(e)})}(window.MutationObserver)?function(t){var e=!1,n=0,i=document.createElement("span");return new MutationObserver(function(){t(),e=!1}).observe(i,{attributes:!0}),function(){e||(e=!0,i.setAttribute("x-index",n),++n)}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},K))}},et=function(){return void 0==J&&(J=-1!==navigator.appVersion.indexOf("MSIE 10")),J},nt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},it=function(){function t(t,e){for(var n,i=0;i<e.length;i++)n=e[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ot=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},rt=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},st=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],at=st.slice(3),lt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ct=function(){function e(n,i){var o=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};nt(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=tt(this.update.bind(this)),this.options=rt({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n.jquery?n[0]:n,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(rt({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=rt({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return rt({name:t},o.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(e){e.enabled&&t(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return it(e,[{key:"update",value:function(){return D.call(this)}},{key:"destroy",value:function(){return N.call(this)}},{key:"enableEventListeners",value:function(){return L.call(this)}},{key:"disableEventListeners",value:function(){return j.call(this)}}]),e}();return ct.Utils=("undefined"==typeof window?global:window).PopperUtils,ct.placements=st,ct.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",u={start:ot({},l,r[l]),end:ot({},l,r[l]+r[c]-s[c])};t.offsets.popper=rt({},s,u[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,o=t.placement,r=t.offsets,s=r.popper,a=r.reference,l=o.split("-")[0];return n=R(+i)?[+i,0]:U(i,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),t.popper=s,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||o(t.instance.popper);t.instance.reference===n&&(n=o(n));var i=y(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=i;var r=e.priority,s=t.offsets.popper,a={primary:function(t){var n=s[t];return s[t]<i[t]&&!e.escapeWithReference&&(n=X(s[t],i[t])),ot({},t,n)},secondary:function(t){var n="right"===t?"left":"top",o=s[n];return s[t]>i[t]&&!e.escapeWithReference&&(o=V(s[n],i[t]-("right"===t?s.width:s.height))),ot({},n,o)}};return r.forEach(function(t){var e=-1===["left","top"].indexOf(t)?"secondary":"primary";s=rt({},s,a[e](t))}),t.offsets.popper=s,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=G,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!M(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,r=o.popper,s=o.reference,a=-1!==["left","right"].indexOf(i),l=a?"height":"width",c=a?"top":"left",u=a?"left":"top",f=a?"bottom":"right",d=_(n)[l];s[f]-d<r[c]&&(t.offsets.popper[c]-=r[c]-(s[f]-d)),s[c]+d>r[f]&&(t.offsets.popper[c]+=s[c]+d-r[f]);var h=s[c]+s[l]/2-d/2-p(t.offsets.popper)[c];return h=X(V(r[l]-d,h),0),t.arrowElement=n,t.offsets.arrow={},t.offsets.arrow[c]=Math.round(h),t.offsets.arrow[u]="",t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(I(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=y(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),i=t.placement.split("-")[0],o=T(i),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case lt.FLIP:s=[i,o];break;case lt.CLOCKWISE:s=B(i);break;case lt.COUNTERCLOCKWISE:s=B(i,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0],o=T(i);var c=t.offsets.popper,u=t.offsets.reference,f=G,d="left"===i&&f(c.right)>f(u.left)||"right"===i&&f(c.left)<f(u.right)||"top"===i&&f(c.bottom)>f(u.top)||"bottom"===i&&f(c.top)<f(u.bottom),p=f(c.left)<f(n.left),h=f(c.right)>f(n.right),g=f(c.top)<f(n.top),m=f(c.bottom)>f(n.bottom),v="left"===i&&p||"right"===i&&h||"top"===i&&g||"bottom"===i&&m,y=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(y&&"start"===r&&p||y&&"end"===r&&h||!y&&"start"===r&&g||!y&&"end"===r&&m);(d||v||b)&&(t.flipped=!0,(d||v)&&(i=s[l+1]),b&&(r=W(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=rt({},t.offsets.popper,E(t.instance.popper,t.offsets.reference,t.placement)),t=A(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[e]-(a?o[s?"width":"height"]:0),t.placement=T(e),t.offsets.popper=p(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!M(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=C(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,s=C(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==s&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,l,c=void 0===s?e.gpuAcceleration:s,u=h(o(t.instance.popper)),f={position:r.position},d={left:G(r.left),top:G(r.top),bottom:G(r.bottom),right:G(r.right)},p="bottom"===n?"top":"bottom",g="right"===i?"left":"right",m=O("transform");if(l="bottom"==p?-u.height+d.bottom:d.top,a="right"==g?-u.width+d.right:d.left,c&&m)f[m]="translate3d("+a+"px, "+l+"px, 0)",f[p]=0,f[g]=0,f.willChange="transform";else{var v="bottom"==p?-1:1,y="right"==g?-1:1;f[p]=l*v,f[g]=a*y,f.willChange=p+", "+g}var b={"x-placement":t.placement};return t.attributes=rt({},b,t.attributes),t.styles=rt({},f,t.styles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return H(t.instance.popper,t.styles),F(t.instance.popper,t.attributes),t.offsets.arrow&&H(t.arrowElement,t.offsets.arrow),t},onLoad:function(t,e,n,i,o){var r=w(o,e,t),s=x(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),H(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},ct}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(t){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:s.end,delegateType:s.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in a)if(void 0!==t.style[e])return{end:a[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}var s=!1,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(s.end)},supportsTransitionEnd:function(){return Boolean(s)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+s+'".')}}};return s=o(),t.fn.emulateTransitionEnd=r,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=i()),l}(jQuery),s=(function(t){var e="alert",i=t.fn[e],s={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},l={ALERT:"alert",FADE:"fade",SHOW:"show"},c=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;t(e).removeClass(l.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(l.FADE)?t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DISMISS,c._handleDismiss(new c)),t.fn[e]=c._jQueryInterface,t.fn[e].Constructor=c,t.fn[e].noConflict=function(){return t.fn[e]=i,c._jQueryInterface}}(jQuery),function(t){var e="button",i=t.fn[e],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(s.DATA_TOGGLE)[0];if(i){var o=t(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&t(this._element).hasClass(r.ACTIVE))e=!1;else{var a=t(i).find(s.ACTIVE)[0];a&&t(a).removeClass(r.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!t(this._element).hasClass(r.ACTIVE),t(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(r.ACTIVE)),e&&t(this._element).toggleClass(r.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(r.BUTTON)||(n=t(n).closest(s.BUTTON)),l._jQueryInterface.call(t(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(s.BUTTON)[0];t(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=l._jQueryInterface,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=i,l._jQueryInterface}}(jQuery),function(t){var e="carousel",s="bs.carousel",a="."+s,l=t.fn[e],c={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},f={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},d={SLIDE:"slide"+a,SLID:"slid"+a,KEYDOWN:"keydown"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a,TOUCHEND:"touchend"+a,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},p={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slideNew",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},h={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},g=function(){function l(e,i){n(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(h.INDICATORS)[0],this._addEventListeners()}return l.prototype.next=function(){this._isSliding||this._slide(f.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(f.PREV)},l.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(h.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},l.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(h.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var o=e>i?f.NEXT:f.PREV;this._slide(o,this._items[e])}},l.prototype.dispose=function(){t(this._element).off(a),t.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(n){return n=t.extend({},c,n),r.typeCheckConfig(e,n,u),n},l.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},l.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},l.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(h.ITEM)),this._items.indexOf(e)},l.prototype._getItemByDirection=function(t,e){var n=t===f.NEXT,i=t===f.PREV,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===f.PREV?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},l.prototype._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),o=this._getItemIndex(t(this._element).find(h.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:o,to:i});return t(this._element).trigger(r),r},l.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(h.ACTIVE).removeClass(p.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(p.ACTIVE)}},l.prototype._slide=function(e,n){var i=this,o=t(this._element).find(h.ACTIVE_ITEM)[0],s=this._getItemIndex(o),a=n||o&&this._getItemByDirection(e,o),l=this._getItemIndex(a),c=Boolean(this._interval),u=void 0,g=void 0,m=void 0;if(e===f.NEXT?(u=p.LEFT,g=p.NEXT,m=f.LEFT):(u=p.RIGHT,g=p.PREV,m=f.RIGHT),a&&t(a).hasClass(p.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(a,m).isDefaultPrevented()&&o&&a){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(a);var v=t.Event(d.SLID,{relatedTarget:a,direction:m,from:s,to:l});r.supportsTransitionEnd()&&t(this._element).hasClass(p.SLIDE)?(t(a).addClass(g),r.reflow(a),t(o).addClass(u),t(a).addClass(u),t(o).one(r.TRANSITION_END,function(){t(a).removeClass(u+" "+g).addClass(p.ACTIVE),t(o).removeClass(p.ACTIVE+" "+g+" "+u),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(v)},0)}).emulateTransitionEnd(600)):(t(o).removeClass(p.ACTIVE),t(a).addClass(p.ACTIVE),this._isSliding=!1,t(this._element).trigger(v)),c&&this.cycle()}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o=t.extend({},c,t(this).data());"object"===(void 0===e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new l(this,o),t(this).data(s,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},l._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(p.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),l._jQueryInterface.call(t(i),o),a&&t(i).data(s).to(a),e.preventDefault()}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return c}}]),l}();t(document).on(d.CLICK_DATA_API,h.DATA_SLIDE,g._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(h.DATA_RIDE).each(function(){var e=t(this);g._jQueryInterface.call(e,e.data())})}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=l,g._jQueryInterface}}(jQuery),function(t){var e="collapse",s="bs.collapse",a=t.fn[e],l={toggle:!0,parent:""},c={toggle:"boolean",parent:"string"},u={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},f={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},d={WIDTH:"width",HEIGHT:"height"},p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},h=function(){function a(e,i){n(this,a),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var o=t(p.DATA_TOGGLE),s=0;s<o.length;s++){var l=o[s],c=r.getSelectorFromElement(l);null!==c&&t(c).filter(e).length>0&&this._triggerArray.push(l)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){t(this._element).hasClass(f.SHOW)?this.hide():this.show()},a.prototype.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(f.SHOW)){var n=void 0,i=void 0;if(this._parent&&((n=t.makeArray(t(this._parent).children().children(p.ACTIVES))).length||(n=null)),!(n&&(i=t(n).data(s))&&i._isTransitioning)){var o=t.Event(u.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(a._jQueryInterface.call(t(n),"hide"),i||t(n).data(s,null));var l=this._getDimension();t(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var c=function(){t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(u.SHOWN)};if(r.supportsTransitionEnd()){var d="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(r.TRANSITION_END,c).emulateTransitionEnd(600),this._element.style[l]=this._element[d]+"px"}else c()}}}},a.prototype.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(f.SHOW)){var n=t.Event(u.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",r.reflow(this._element),t(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var s=this._triggerArray[o],a=r.getSelectorFromElement(s);null!==a&&(t(a).hasClass(f.SHOW)||t(s).addClass(f.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(u.HIDDEN)};this._element.style[i]="",r.supportsTransitionEnd()?t(this._element).one(r.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.prototype.setTransitioning=function(t){this._isTransitioning=t},a.prototype.dispose=function(){t.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(n){return n=t.extend({},l,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,c),n},a.prototype._getDimension=function(){return t(this._element).hasClass(d.WIDTH)?d.WIDTH:d.HEIGHT},a.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(a._getTargetFromElement(n),[n])}),n},a.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(f.SHOW);n.length&&t(n).toggleClass(f.COLLAPSED,!i).attr("aria-expanded",i)}},a._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},a._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(s),r=t.extend({},l,n.data(),"object"===(void 0===e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new a(this,r),n.data(s,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(u.CLICK_DATA_API,p.DATA_TOGGLE,function(e){/input|textarea/i.test(e.target.tagName)||e.preventDefault();var n=t(this),i=r.getSelectorFromElement(this);t(i).each(function(){var e=t(this),i=e.data(s)?"toggle":n.data();h._jQueryInterface.call(e,i)})}),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=a,h._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e="dropdown",s="bs.dropdown",a="."+s,l=t.fn[e],c=new RegExp("38|40|27"),u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},f={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},p={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},h={placement:p.BOTTOM,offset:0,flip:!0},g={placement:"string",offset:"(number|string)",flip:"boolean"},m=function(){function l(t,e){n(this,l),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(f.DISABLED)){var e=l._getParentFromElement(this._element),n=t(this._menu).hasClass(f.SHOW);if(l._clearMenus(),!n){var i={relatedTarget:this._element},o=t.Event(u.SHOW,i);if(t(e).trigger(o),!o.isDefaultPrevented()){var r=this._element;t(e).hasClass(f.DROPUP)&&(t(this._menu).hasClass(f.MENULEFT)||t(this._menu).hasClass(f.MENURIGHT))&&(r=e),this._popper=new Popper(r,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!t(e).closest(d.NAVBAR_NAV).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f.SHOW),t(e).toggleClass(f.SHOW).trigger(t.Event(u.SHOWN,i))}}}},l.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var e=this;t(this._element).on(u.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l.prototype._getConfig=function(n){var i=t(this._element).data();return void 0!==i.placement&&(i.placement=p[i.placement.toUpperCase()]),n=t.extend({},this.constructor.Default,t(this._element).data(),n),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},l.prototype._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(d.MENU)[0]}return this._menu},l.prototype._getPlacement=function(){var e=t(this._element).parent(),n=this._config.placement;return e.hasClass(f.DROPUP)||this._config.placement===p.TOP?(n=p.TOP,t(this._menu).hasClass(f.MENURIGHT)&&(n=p.TOPEND)):t(this._menu).hasClass(f.MENURIGHT)&&(n=p.BOTTOMEND),n},l.prototype._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o="object"===(void 0===e?"undefined":i(e))?e:null;if(n||(n=new l(this,o),t(this).data(s,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(d.DATA_TOGGLE)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),r=t(n[i]).data(s),a={relatedTarget:n[i]};if(r){var c=r._menu;if(t(o).hasClass(f.SHOW)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(o,e.target))){var p=t.Event(u.HIDE,a);t(o).trigger(p),p.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[i].setAttribute("aria-expanded","false"),t(c).removeClass(f.SHOW),t(o).removeClass(f.SHOW).trigger(t.Event(u.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if(!(!c.test(e.which)||/button/i.test(e.target.tagName)&&32===e.which||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),e.stopPropagation(),this.disabled||t(this).hasClass(f.DISABLED)))){var n=l._getParentFromElement(this),i=t(n).hasClass(f.SHOW);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var o=t(n).find(d.VISIBLE_ITEMS).get();if(o.length){var r=o.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===e.which){var s=t(n).find(d.DATA_TOGGLE)[0];t(s).trigger("focus")}t(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return h}},{key:"DefaultType",get:function(){return g}}]),l}();t(document).on(u.KEYDOWN_DATA_API,d.DATA_TOGGLE,m._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,d.MENU,m._dataApiKeydownHandler).on(u.CLICK_DATA_API+" "+u.KEYUP_DATA_API,m._clearMenus).on(u.CLICK_DATA_API,d.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),m._jQueryInterface.call(t(this),"toggle")}).on(u.CLICK_DATA_API,d.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=l,m._jQueryInterface}}(jQuery),function(t){var e="modal",s=".bs.modal",a=t.fn[e],l={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},u={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},f={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},d={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function a(e,i){n(this,a),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(d.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return a.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},a.prototype.show=function(e){var n=this;if(!this._isTransitioning){r.supportsTransitionEnd()&&t(this._element).hasClass(f.FADE)&&(this._isTransitioning=!0);var i=t.Event(u.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(f.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(u.CLICK_DISMISS,d.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(u.MOUSEDOWN_DISMISS,function(){t(n._element).one(u.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},a.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=r.supportsTransitionEnd()&&t(this._element).hasClass(f.FADE);i&&(this._isTransitioning=!0);var o=t.Event(u.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(u.FOCUSIN),t(this._element).removeClass(f.SHOW),t(this._element).off(u.CLICK_DISMISS),t(this._dialog).off(u.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},a.prototype.dispose=function(){t.removeData(this._element,"bs.modal"),t(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.prototype.handleUpdate=function(){this._adjustDialog()},a.prototype._getConfig=function(n){return n=t.extend({},l,n),r.typeCheckConfig(e,n,c),n},a.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(f.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(f.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(u.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(300):s()},a.prototype._enforceFocus=function(){var e=this;t(document).off(u.FOCUSIN).on(u.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},a.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(u.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(u.KEYDOWN_DISMISS)},a.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(u.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(u.RESIZE)},a.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(u.HIDDEN)})},a.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},a.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(f.FADE)?f.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=f.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(u.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(f.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(f.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(f.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s()}else e&&e()},a.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a.prototype._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(d.FIXED_CONTENT).each(function(n,i){var o=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(d.NAVBAR_TOGGLER).each(function(n,i){var o=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},a.prototype._resetScrollbar=function(){t(d.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");void 0!==i&&t(n).css("padding-right",i).removeData("padding-right")}),t(d.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},a.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=f.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data("bs.modal"),r=t.extend({},a.Default,t(this).data(),"object"===(void 0===e?"undefined":i(e))&&e);if(o||(o=new a(this,r),t(this).data("bs.modal",o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(u.CLICK_DATA_API,d.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data("bs.modal")?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(i).one(u.SHOW,function(e){e.isDefaultPrevented()||a.one(u.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});p._jQueryInterface.call(t(i),s,this)}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=a,p._jQueryInterface}}(jQuery),function(t){var e="scrollspy",s=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},u={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d={OFFSET:"offset",POSITION:"position"},p=function(){function s(e,i){var o=this;n(this,s),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(c.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return s.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?d.POSITION:d.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===d.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n=void 0,s=r.getSelectorFromElement(e);if(s&&(n=t(s)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},s.prototype.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},s.prototype._getConfig=function(n){if("string"!=typeof(n=t.extend({},a,n)).target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,l),n},s.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},s.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},s.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},s.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},s.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(u.DROPDOWN_ITEM)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u.ACTIVE),i.addClass(u.ACTIVE)):(i.addClass(u.ACTIVE),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u.ACTIVE)),t(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:e})},s.prototype._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u.ACTIVE)},s._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.scrollspy"),o="object"===(void 0===e?"undefined":i(e))&&e;if(n||(n=new s(this,o),t(this).data("bs.scrollspy",n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return a}}]),s}();t(window).on(c.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);p._jQueryInterface.call(i,i.data())}}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=s,p._jQueryInterface}}(jQuery),function(t){var e=t.fn.tab,i={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},s={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},a={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(s.ACTIVE)||t(this._element).hasClass(s.DISABLED))){var n=void 0,o=void 0,l=t(this._element).closest(a.NAV_LIST_GROUP)[0],c=r.getSelectorFromElement(this._element);l&&(o=t.makeArray(t(l).find(a.ACTIVE)),o=o[o.length-1]);var u=t.Event(i.HIDE,{relatedTarget:this._element}),f=t.Event(i.SHOW,{relatedTarget:o});if(o&&t(o).trigger(u),t(this._element).trigger(f),!f.isDefaultPrevented()&&!u.isDefaultPrevented()){c&&(n=t(c)[0]),this._activate(this._element,l);var d=function(){var n=t.Event(i.HIDDEN,{relatedTarget:e._element}),r=t.Event(i.SHOWN,{relatedTarget:o});t(o).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,d):d()}}},e.prototype.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},e.prototype._activate=function(e,n,i){var o=this,l=t(n).find(a.ACTIVE)[0],c=i&&r.supportsTransitionEnd()&&l&&t(l).hasClass(s.FADE),u=function(){return o._transitionComplete(e,l,c,i)};l&&c?t(l).one(r.TRANSITION_END,u).emulateTransitionEnd(150):u(),l&&t(l).removeClass(s.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(s.ACTIVE);var l=t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l&&t(l).removeClass(s.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(s.SHOW)):t(e).removeClass(s.FADE),e.parentNode&&t(e.parentNode).hasClass(s.DROPDOWN_MENU)){var c=t(e).closest(a.DROPDOWN)[0];c&&t(c).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(i.CLICK_DATA_API,a.DATA_TOGGLE,function(e){e.preventDefault(),l._jQueryInterface.call(t(this),"show")}),t.fn.tab=l._jQueryInterface,t.fn.tab.Constructor=l,t.fn.tab.noConflict=function(){return t.fn.tab=e,l._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",s=".bs.tooltip",a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},u={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},d={SHOW:"show",OUT:"out"},p={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},h={FADE:"fade",SHOW:"show"},g={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},m={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},v=function(){function a(t,e){n(this,a),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return a.prototype.enable=function(){this._isEnabled=!0},a.prototype.disable=function(){this._isEnabled=!1},a.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},a.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(h.SHOW))return void this._leave(null,this);this._enter(null,this)}},a.prototype.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},a.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(h.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var u=!1===this.config.container?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(o).appendTo(u),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,o,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:g.ARROW}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(o).addClass(h.SHOW),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var f=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d.OUT&&e._leave(null,e)};r.supportsTransitionEnd()&&t(this.tip).hasClass(h.FADE)?t(this.tip).one(r.TRANSITION_END,f).emulateTransitionEnd(a._TRANSITION_DURATION):f()}},a.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE),s=function(){n._hoverState!==d.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(h.SHOW),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[m.CLICK]=!1,this._activeTrigger[m.FOCUS]=!1,this._activeTrigger[m.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(h.FADE)?t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},a.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},a.prototype.isWithContent=function(){return Boolean(this.getTitle())},a.prototype.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},a.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},a.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(g.TOOLTIP_INNER),this.getTitle()),e.removeClass(h.FADE+" "+h.SHOW)},a.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===(void 0===n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},a.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},a.prototype._getAttachment=function(t){return u[t.toUpperCase()]},a.prototype._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==m.MANUAL){var i=n===m.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===m.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},a.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},a.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?m.FOCUS:m.HOVER]=!0),t(n.getTipElement()).hasClass(h.SHOW)||n._hoverState===d.SHOW?n._hoverState=d.SHOW:(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show):n.show())},a.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?m.FOCUS:m.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide):n.hide())},a.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},a.prototype._getConfig=function(n){return(n=t.extend({},this.constructor.Default,t(this.element).data(),n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.title&&"number"==typeof n.title&&(n.title=n.title.toString()),n.content&&"number"==typeof n.content&&(n.content=n.content.toString()),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},a.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},a.prototype._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},a.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},a.prototype._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(h.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.tooltip"),o="object"===(void 0===e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,o),t(this).data("bs.tooltip",n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return c}}]),a}();return t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=a,v._jQueryInterface},v}(jQuery));!function(r){var a="popover",l=".bs.popover",c=r.fn[a],u=new RegExp("(^|\\s)bs-popover\\S+","g"),f=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),d=r.extend({},s.DefaultType,{content:"(string|element|function)"}),p={FADE:"fade",SHOW:"show"},h={TITLE:".popover-header",CONTENT:".popover-body"},g={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},m=function(s){function c(){return n(this,c),t(this,s.apply(this,arguments))}return e(c,s),c.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},c.prototype.addAttachmentClass=function(t){r(this.getTipElement()).addClass("bs-popover-"+t)},c.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},c.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(h.TITLE),this.getTitle()),this.setElementContent(t.find(h.CONTENT),this._getContent()),t.removeClass(p.FADE+" "+p.SHOW)},c.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},c.prototype._cleanTipClass=function(){var t=r(this.getTipElement()),e=t.attr("class").match(u);null!==e&&e.length>0&&t.removeClass(e.join(""))},c._jQueryInterface=function(t){return this.each(function(){var e=r(this).data("bs.popover"),n="object"===(void 0===t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new c(this,n),r(this).data("bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(c,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return g}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return d}}]),c}(s);r.fn[a]=m._jQueryInterface,r.fn[a].Constructor=m,r.fn[a].noConflict=function(){return r.fn[a]=c,m._jQueryInterface}}(jQuery)}(),function(t,e,n,i){"use strict";function o(t){var e=t.currentTarget,i=t.data?t.data.options:{},o=i.selector?n(i.selector):t.data?t.data.items:[],r=n(e).attr("data-fancybox")||"",s=0,a=n.fancybox.getInstance();t.preventDefault(),a&&a.current.opts.$orig.is(e)||(r?(s=(o=o.length?o.filter('[data-fancybox="'+r+'"]'):n('[data-fancybox="'+r+'"]')).index(e))<0&&(s=0):o=[e],n.fancybox.open(o,i,s))}if(n)if(n.fn.fancybox)n.error("fancyBox already initialized");else{var r={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),a=n(e),l=0,c=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},f=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==n.style[t])return i[t]}(),d=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,i,o){var s=this;s.opts=n.extend(!0,{index:o},r,i||{}),i&&n.isArray(i.buttons)&&(s.opts.buttons=i.buttons),s.id=s.opts.id||++l,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(p.prototype,{init:function(){var t,e,i,o=this,r=o.group[o.currIndex].opts;o.scrollTop=a.scrollTop(),o.scrollLeft=a.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),(t=n("body").width()-t)>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),e=n(o.translate(o,r.baseTpl.replace("{{BUTTONS}}",i))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+o.id).addClass(r.baseClass).data("FancyBox",o).prependTo(r.parentEl),o.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){o.$refs[t]=e.find(".fancybox-"+t)}),(!r.arrows||o.group.length<2)&&e.find(".fancybox-navigation").remove(),r.infobar||o.$refs.infobar.remove(),r.toolbar||o.$refs.toolbar.remove(),o.trigger("onInit"),o.activate(),o.jumpTo(o.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return void 0===i?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var o,r,s,a,l={},c={},u=[];n.isPlainObject(i)?(l=i,c=i.opts||i):"object"===n.type(i)&&n(i).length?(o=n(i),u=o.data(),c="options"in u?u.options:{},c="object"===n.type(c)?c:{},l.src="src"in u?u.src:c.src||o.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in u&&(c[t]=u[t])}),"srcset"in u&&(c.image={srcset:u.srcset}),c.$orig=o,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,c),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),r=l.type||l.opts.type,s=l.src||"",!r&&s&&(s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?r="image":s.match(/\.(pdf)((\?|#).*)?$/i)?r="pdf":"#"===s.charAt(0)&&(r="inline")),l.type=r,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in u&&(l.opts.caption=u.caption),l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+"","ajax"===r&&(a=s.split(/\s+/,2)).length>1&&(l.src=a.shift(),l.opts.filter=a.shift()),"auto"==l.opts.smallBtn&&(n.inArray(r,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===r&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var i=this;i.removeEvents(),i.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),i.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),i.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),i.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){i.update()}):(i.$refs.stage.hide(),setTimeout(function(){i.$refs.stage.show(),i.update()},500))}),a.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus(),s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))}),a.on("keydown.fb",function(t){var e=i.current,o=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===o||27===o?(t.preventDefault(),void i.close(t)):37===o||38===o?(t.preventDefault(),void i.previous()):39===o||40===o?(t.preventDefault(),void i.next()):void i.trigger("afterKeydown",t,o)}),i.group[i.currIndex].opts.idleTime&&(i.idleSecondsCounter=0,a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){i.idleSecondsCounter=0,i.isIdle&&i.showControls(),i.isIdle=!1}),i.idleInterval=t.setInterval(function(){i.idleSecondsCounter++,i.idleSecondsCounter>=i.group[i.currIndex].opts.idleTime&&(i.isIdle=!0,i.idleSecondsCounter=0,i.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),a.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var o,r,s,a,l,c,u,f=this,p=f.group.length;if(!(f.isSliding||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(r=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=p))return!1;if(o=f.firstRun=null===f.firstRun,!(p<2&&!o&&f.isSliding)){if(a=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),p>1&&((r||s.index>0)&&f.createSlide(t-1),(r||s.index<p-1)&&f.createSlide(t+1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),c=n.fancybox.getTranslate(s.$slide),s.isMoved=(0!==c.left||0!==c.top)&&!s.$slide.hasClass("fancybox-animated"),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.removeClass("fancybox-is-hidden"),d(f.$refs.container),f.$refs.container.addClass("fancybox-is-open"),s.$slide.addClass("fancybox-slide--current"),f.loadSlide(s),void f.preload();n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide)}),s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),s.isMoved?(l=Math.round(s.$slide.width()),n.each(f.slides,function(t,i){var o=i.pos-s.pos;n.fancybox.animate(i.$slide,{top:0,left:o*l+o*i.opts.gutter},e,function(){i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),i.pos===f.currPos&&(s.isMoved=!1,f.complete())})})):f.$refs.stage.children().removeAttr("style"),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload(),a.pos!==s.pos&&(u="fancybox-slide--"+(a.pos>s.pos?"next":"previous"),a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),a.isComplete=!1,e&&(s.isMoved||s.opts.transitionEffect)&&(s.isMoved?a.$slide.addClass(u):(u="fancybox-animated "+u+" fancybox-fx-"+s.opts.transitionEffect,n.fancybox.animate(a.$slide,u,e,function(){a.$slide.removeClass(u).removeAttr("style")}))))}}},createSlide:function(t){var e,i,o=this;return i=t%o.group.length,i=i<0?o.group.length+i:i,!o.slides[t]&&o.group[i]&&(e=n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=n.extend(!0,{},o.group[i],{pos:t,$slide:e,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function(t,e,i){var o,r,s,a,l,c=this,u=c.current,f=u.$content,d=parseInt(u.$slide.width(),10),p=parseInt(u.$slide.height(),10),h=u.width,g=u.height;"image"!=u.type||u.hasError||!f||c.isAnimating||(n.fancybox.stop(f),c.isAnimating=!0,t=void 0===t?.5*d:t,e=void 0===e?.5*p:e,a=h/(o=n.fancybox.getTranslate(f)).width,l=g/o.height,r=.5*d-.5*h,s=.5*p-.5*g,h>d&&((r=o.left*a-(t*a-t))>0&&(r=0),r<d-h&&(r=d-h)),g>p&&((s=o.top*l-(e*l-e))>0&&(s=0),s<p-g&&(s=p-g)),c.updateCursor(h,g),n.fancybox.animate(f,{top:s,left:r,scaleX:a,scaleY:l},i||330,function(){c.isAnimating=!1}),c.SlideShow&&c.SlideShow.isActive&&c.SlideShow.stop())},scaleToFit:function(t){var e,i=this,o=i.current,r=o.$content;"image"!=o.type||o.hasError||!r||i.isAnimating||(n.fancybox.stop(r),i.isAnimating=!0,e=i.getFitPos(o),i.updateCursor(e.width,e.height),n.fancybox.animate(r,{top:e.top,left:e.left,scaleX:e.width/r.width(),scaleY:e.height/r.height()},t||330,function(){i.isAnimating=!1}))},getFitPos:function(t){var e,i,o,r,a,l=this,c=t.$content,u=t.width,f=t.height,d=t.opts.margin;return!(!c||!c.length||!u&&!f)&&("number"===n.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),s.width()<800&&(d=[0,0,0,0]),e=parseInt(l.$refs.stage.width(),10)-(d[1]+d[3]),i=parseInt(l.$refs.stage.height(),10)-(d[0]+d[2]),o=Math.min(1,e/u,i/f),r=Math.floor(o*u),a=Math.floor(o*f),{top:Math.floor(.5*(i-a))+d[0],left:Math.floor(.5*(e-r))+d[3],width:r,height:a})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,i=t.$content;i&&(t.width||t.height)&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n=this,i=n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");n.current&&!n.isClosing&&(n.isZoomable()?(i.addClass("fancybox-is-zoomable"),(void 0!==t&&void 0!==e?t<n.current.width&&e<n.current.height:n.isScaledDown())?i.addClass("fancybox-can-zoomIn"):n.current.opts.touch?i.addClass("fancybox-can-drag"):i.addClass("fancybox-can-zoomOut")):n.current.opts.touch&&i.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,i=e.current;if(i&&!e.isClosing)return!!("image"===i.type&&i.isLoaded&&!i.hasError&&("zoom"===i.opts.clickContent||n.isFunction(i.opts.clickContent)&&"zoom"===i.opts.clickContent(i))&&(t=e.getFitPos(i),i.width>t.width||i.height>t.height))},isScaledDown:function(){var t=this.current,e=t.$content,i=!1;return e&&(i=(i=n.fancybox.getTranslate(e)).width<t.width||i.height<t.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,i=!1;return n&&(i=t.getFitPos(e),i=Math.abs(n.width()-i.width)>1||Math.abs(n.height()-i.height)>1),i},loadSlide:function(t){var e,i,o,r=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,r.trigger("beforeLoad",t),e=t.type,(i=t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":r.setImage(t);break;case"iframe":r.setIframe(t);break;case"html":r.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?r.setContent(t,n(t.src)):r.setError(t);break;case"ajax":r.showLoading(t),o=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&r.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&r.setError(t)}})),i.one("onReset",function(){o.abort()});break;default:r.setError(t)}return!0}},setImage:function(e){var i,o,r,s,a=this,l=e.opts.image.srcset;if(l){r=t.devicePixelRatio||1,s=t.innerWidth*r,(o=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var i=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;i&&(e.value=i,e.postfix=t[t.length-1])}),e})).sort(function(t,e){return t.value-e.value});for(var c=0;c<o.length;c++){var u=o[c];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=r){i=u;break}}!i&&o.length&&(i=o[o.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,a.setBigImage(e)}).one("load",function(){a.afterLoad(e),a.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):a.setBigImage(e)},setBigImage:function(t){var e=this,i=n("<img />");t.$image=i.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&i.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i[0].complete||"complete"==i[0].readyState)&&i[0].naturalWidth&&i[0].naturalHeight?i.trigger("load"):i[0].error?i.trigger("error"):t.timouts=setTimeout(function(){i[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,o=t.opts.iframe,r=t.$slide;t.$content=n('<div class="fancybox-content'+(o.preload?" fancybox-is-hidden":"")+'"></div>').css(o.css).appendTo(r),e=n(o.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(o.attr).appendTo(t.$content),o.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),r.on("refresh.fb",function(){var n,i,r=t.$content,s=o.css.width,a=o.css.height;if(1===e[0].isReady){try{i=e.contents().find("body")}catch(t){}i&&i.length&&(void 0===s&&(n=e[0].contentWindow.document.documentElement.scrollWidth,s=Math.ceil(i.outerWidth(!0)+(r.width()-n)),s+=r.outerWidth()-r.innerWidth()),void 0===a&&(a=Math.ceil(i.outerHeight(!0)),a+=r.outerHeight()-r.innerHeight()),s&&r.width(s),a&&r.height(a)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),!0===t.opts.smallBtn&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),r.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var i=this;i.isClosing||(i.hideLoading(t),t.$slide.empty(),c(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&3===(e=n("<div>").append(n.trim(e)).contents())[0].nodeType&&(e=n("<div>").html(e)),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(i.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,o,r,s,a=this,l=t.$slide,c=!1;return e=t.opts[a.firstRun?"animationEffect":"transitionEffect"],o=t.opts[a.firstRun?"animationDuration":"transitionDuration"],o=parseInt(void 0===t.forcedDuration?o:t.forcedDuration,10),!t.isMoved&&t.pos===a.currPos&&o||(e=!1),"zoom"!==e||t.pos===a.currPos&&o&&"image"===t.type&&!t.hasError&&(c=a.getThumbPos(t))||(e="fade"),"zoom"===e?(s=a.getFitPos(t),s.scaleX=s.width/c.width,s.scaleY=s.height/c.height,delete s.width,delete s.height,"auto"==(r=t.opts.zoomOpacity)&&(r=Math.abs(t.width/t.height-c.width/c.height)>.1),r&&(c.opacity=.1,s.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),c),d(t.$content),void n.fancybox.animate(t.$content,s,o,function(){a.complete()})):(a.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>a.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),d(l),void n.fancybox.animate(l,"fancybox-slide--current",o,function(e){l.removeClass(i).removeAttr("style"),t.pos===a.currPos&&a.complete()},!0)):(d(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===a.currPos&&a.complete())))},getThumbPos:function(i){var o,r=this,s=!1,a=i.opts.$thumb,l=a?a.offset():0;return l&&a[0].ownerDocument===e&&function(e){for(var i=e[0],o=i.getBoundingClientRect(),r=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||r.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return r.every(function(t){var e=Math.min(o.right,t.right)-Math.max(o.left,t.left),n=Math.min(o.bottom,t.bottom)-Math.max(o.top,t.top);return e>0&&n>0})&&o.bottom>0&&o.right>0&&o.left<n(t).width()&&o.top<n(t).height()}(a)&&(o=r.$refs.stage.offset(),s={top:l.top-o.top+parseFloat(a.css("border-top-width")||0),left:l.left-o.left+parseFloat(a.css("border-left-width")||0),width:a.width(),height:a.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,i=t.current,o={};i.isMoved||!i.isLoaded||i.isComplete||(i.isComplete=!0,i.$slide.siblings().trigger("onReset"),d(i.$slide),i.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,i){i.pos>=t.currPos-1&&i.pos<=t.currPos+1?o[i.pos]=i:i&&(n.fancybox.stop(i.$slide),i.$slide.off().remove())}),t.slides=o,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||i.opts.autoFocus&&"image"!=i.type&&"iframe"!==i.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&((t=e.$slide.find("input[autofocus]:enabled:visible:first")).length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),(t=t&&t.length?t:this.$refs.container).focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var i,o,r,s,a,l,c=this,d=c.current,p=function(){c.cleanUp(t)};return!c.isClosing&&(c.isClosing=!0,!1===c.trigger("beforeClose",t)?(c.isClosing=!1,u(function(){c.update()}),!1):(c.removeEvents(),d.timouts&&clearTimeout(d.timouts),r=d.$content,i=d.opts.animationEffect,o=n.isNumeric(e)?e:i?d.opts.animationDuration:0,d.$slide.off(f).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),d.$slide.siblings().trigger("onReset").remove(),o&&c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),c.hideLoading(d),c.hideControls(),c.updateCursor(),"zoom"!==i||!0!==t&&r&&o&&"image"===d.type&&!d.hasError&&(l=c.getThumbPos(d))||(i="fade"),"zoom"===i?(n.fancybox.stop(r),a=n.fancybox.getTranslate(r),a.width=a.width*a.scaleX,a.height=a.height*a.scaleY,"auto"==(s=d.opts.zoomOpacity)&&(s=Math.abs(d.width/d.height-l.width/l.height)>.1),s&&(l.opacity=0),a.scaleX=a.width/l.width,a.scaleY=a.height/l.height,a.width=l.width,a.height=l.height,n.fancybox.setTranslate(d.$content,a),n.fancybox.animate(d.$content,l,o,p),!0):(i&&o?!0===t?setTimeout(p,o):n.fancybox.animate(d.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+i,o,p):p(),!0)))},cleanUp:function(t){var e,i=this;i.current.$slide.trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",t),i.$lastFocus&&i.current.opts.backFocus&&i.$lastFocus.focus(),i.current=null,(e=n.fancybox.getInstance())?e.activate():(s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var i,o=Array.prototype.slice.call(arguments,1),r=this,s=e&&e.opts?e:r.current;if(s?o.unshift(s):s=r,o.unshift(r),n.isFunction(s.opts[t])&&(i=s.opts[t].apply(s,o)),!1===i)return i;"afterClose"===t?a.trigger(t+".fb",o):r.$refs.container.trigger(t+".fb",o)},updateControls:function(t){var e=this,i=e.current,o=i.index,r=i.opts,s=r.caption,a=e.$refs.caption;i.$slide.trigger("refresh"),e.$caption=s&&s.length?a.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(o+1),n("[data-fancybox-prev]").prop("disabled",!r.loop&&o<=0),n("[data-fancybox-next]").prop("disabled",!r.loop&&o>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.28",defaults:r,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,i):"function"===n.type(t)&&t.apply(e,i),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close())},destroy:function(){this.close(!0),a.off("click.fb-start")},isMobile:void 0!==e.createTouch&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),(e=e&&-1!==e.indexOf("matrix")?(e=(e=e.split("(")[1]).split(")")[0]).split(","):[]).length)e=(e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]]).map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));n&&(e[0]=parseFloat(n[2]),e[1]=parseFloat(n[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),void 0!==e.opacity&&(i.opacity=e.opacity),void 0!==e.width&&(i.width=e.width),void 0!==e.height&&(i.height=e.height),t.css(i)},animate:function(t,e,i,o,r){var s=f||"transitionend";n.isFunction(i)&&(o=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(s,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(s),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&(t.css("transition-duration","0ms"),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):!0!==r&&t.removeClass(e),n.isFunction(o)&&o(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(f)}},n.fn.fancybox=function(t){var e;return t=t||{},(e=t.selector||!1)?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},o):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},o),this},a.on("click.fb-start","[data-fancybox]",o)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,i){if(e)return i=i||"","object"===t.type(i)&&(i=t.param(i,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),i.length&&(e+=(e.indexOf("?")>0?"&":"?")+i),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("onInit.fb",function(i,o){t.each(o.group,function(i,o){var r,s,a,l,c,u,f,d=o.src||"",p=!1;o.type||(r=t.extend(!0,{},n,o.opts.media),t.each(r,function(n,i){if(a=d.match(i.matcher),u={},f=n,a){if(p=i.type,i.paramPlace&&a[i.paramPlace]){"?"==(c=a[i.paramPlace])[0]&&(c=c.substring(1)),c=c.split("&");for(var r=0;r<c.length;++r){var h=c[r].split("=",2);2==h.length&&(u[h[0]]=decodeURIComponent(h[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},i.params,o.opts[n],u),d="function"===t.type(i.url)?i.url.call(this,a,l,o):e(i.url,a,l),s="function"===t.type(i.thumb)?i.thumb.call(this,a,l,o):e(i.thumb,a),"vimeo"===f&&(d=d.replace("&%23","#")),!1}}),p?(o.src=d,o.type=p,o.opts.thumb||o.opts.$thumb&&o.opts.$thumb.length||(o.opts.thumb=s),"iframe"===p&&(t.extend(!0,o.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),o.contentProvider=f,o.opts.slideClass+=" fancybox-slide--"+("gmap_place"==f||"gmap_search"==f?"map":"video"))):o.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var i=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},o=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)},r=function(e){var n=[];e=(e=e.originalEvent||e||t.e).touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var i in e)e[i].pageX?n.push({x:e[i].pageX,y:e[i].pageY}):e[i].clientX&&n.push({x:e[i].clientX,y:e[i].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){if(t.is("a,button,input,select,textarea,label")||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,i=t[0].attributes,o=i.length;e<o;e++)if("data-fancybox-"===i[e].nodeName.substr(0,14))return!0;return!1},l=function(e){var n=t.getComputedStyle(e)["overflow-y"],i=t.getComputedStyle(e)["overflow-x"],o=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,r=("scroll"===i||"auto"===i)&&e.scrollWidth>e.clientWidth;return o||r},c=function(t){for(var e=!1;;){if(e=l(t.get(0)))break;if(!(t=t.parent()).length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(i){var o=this,l=n(i.target),u=o.instance,f=u.current,d=f.$content,p="touchstart"==i.type;if(p&&o.$container.off("mousedown.fb.touch"),!f||o.instance.isAnimating||o.instance.isClosing)return i.stopPropagation(),void i.preventDefault();i.originalEvent&&2==i.originalEvent.button||!l.length||a(l)||a(l.parent())||i.originalEvent.clientX>l[0].clientWidth+l.offset().left||(o.startPoints=r(i),!o.startPoints||o.startPoints.length>1&&u.isSliding||(o.$target=l,o.$content=d,o.canTap=!0,n(e).off(".fb.touch"),n(e).on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(o,"ontouchend")),n(e).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(o,"ontouchmove")),(u.current.opts.touch||u.canPan())&&(l.is(o.$stage)||o.$stage.find(l).length)?(i.stopPropagation(),n.fancybox.isMobile&&(c(o.$target)||c(o.$target.parent()))||i.preventDefault(),o.canvasWidth=Math.round(f.$slide[0].clientWidth),o.canvasHeight=Math.round(f.$slide[0].clientHeight),o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.sliderStartPos=o.sliderLastPos||{top:0,left:0},o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,1!==o.startPoints.length||o.isZooming||(o.canTap=!u.isSliding,"image"===f.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.$content.css("transition-duration","0ms"),o.isPanning=!0):o.isSwiping=!0,o.$container.addClass("fancybox-controls--isGrabbing")),2!==o.startPoints.length||u.isAnimating||f.hasError||"image"!==f.type||!f.isLoaded&&!f.$ghost||(o.isZooming=!0,o.isSwiping=!1,o.isPanning=!1,n.fancybox.stop(o.$content),o.$content.css("transition-duration","0ms"),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=s(o.startPoints[0],o.startPoints[1]))):l.is("img")&&i.preventDefault()))},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=r(t),n.fancybox.isMobile&&(c(e.$target)||c(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,r=this,s=r.isSwiping,a=r.sliderStartPos.left||0;!0===s?Math.abs(r.distance)>10&&(r.canTap=!1,r.instance.group.length<2&&r.instance.opts.touch.vertical?r.isSwiping="y":r.instance.isSliding||!1===r.instance.opts.touch.vertical||"auto"===r.instance.opts.touch.vertical&&n(t).width()>800?r.isSwiping="x":(e=Math.abs(180*Math.atan2(r.distanceY,r.distanceX)/Math.PI),r.isSwiping=e>45&&e<135?"y":"x"),r.instance.isSliding=r.isSwiping,r.startPoints=r.newPoints,n.each(r.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===r.instance.current.pos&&(r.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),r.instance.SlideShow&&r.instance.SlideShow.isActive&&r.instance.SlideShow.stop()):("x"==s&&(r.distanceX>0&&(r.instance.group.length<2||0===r.instance.current.index&&!r.instance.current.opts.loop)?a+=Math.pow(r.distanceX,.8):r.distanceX<0&&(r.instance.group.length<2||r.instance.current.index===r.instance.group.length-1&&!r.instance.current.opts.loop)?a-=Math.pow(-r.distanceX,.8):a+=r.distanceX),r.sliderLastPos={top:"x"==s?0:r.sliderStartPos.top+r.distanceY,left:a},r.requestId&&(o(r.requestId),r.requestId=null),r.requestId=i(function(){r.sliderLastPos&&(n.each(r.instance.slides,function(t,e){var i=e.pos-r.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:r.sliderLastPos.top,left:r.sliderLastPos.left+i*r.canvasWidth+i*e.opts.gutter})}),r.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,r,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,(r=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height)).scaleX=s.contentStartPos.scaleX,r.scaleY=s.contentStartPos.scaleY,s.contentLastPos=r,s.requestId&&(o(s.requestId),s.requestId=null),s.requestId=i(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,i){var o,r,s,a,l=this,c=l.canvasWidth,u=l.canvasHeight,f=l.contentStartPos.left,d=l.contentStartPos.top,p=l.distanceX,h=l.distanceY;return o=Math.max(0,.5*c-.5*n),r=Math.max(0,.5*u-.5*i),s=Math.min(c-n,.5*c-.5*n),a=Math.min(u-i,.5*u-.5*i),n>c&&(p>0&&t>o&&(t=o-1+Math.pow(-o+f+p,.8)||0),p<0&&t<s&&(t=s+1-Math.pow(s-f-p,.8)||0)),i>u&&(h>0&&e>r&&(e=r-1+Math.pow(-r+d+h,.8)||0),h<0&&e<a&&(e=a+1-Math.pow(a-d-h,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,i){var o=this,r=o.canvasWidth,s=o.canvasHeight;return t=n>r?(t=t>0?0:t)<r-n?r-n:t:Math.max(0,r/2-n/2),e=i>s?(e=e>0?0:e)<s-i?s-i:e:Math.max(0,s/2-i/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,r=e.contentStartPos.width,a=e.contentStartPos.height,l=e.contentStartPos.left,c=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1])/e.startDistanceBetweenFingers,f=Math.floor(r*u),d=Math.floor(a*u),p=(r-f)*e.percentageOfImageAtPinchPointX,h=(a-d)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),v=g-e.centerPointStartX,y={top:c+(h+(m-e.centerPointStartY)),left:l+(p+v),scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u};e.canTap=!1,e.newWidth=f,e.newHeight=d,e.contentLastPos=y,e.requestId&&(o(e.requestId),e.requestId=null),e.requestId=i(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var i=this,s=Math.max((new Date).getTime()-i.startTime,1),a=i.isSwiping,l=i.isPanning,c=i.isZooming;if(i.endPoints=r(t),i.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),i.requestId&&(o(i.requestId),i.requestId=null),i.isSwiping=!1,i.isPanning=!1,i.isZooming=!1,i.canTap)return i.onTap(t);i.speed=366,i.velocityX=i.distanceX/s*.5,i.velocityY=i.distanceY/s*.5,i.speedX=Math.max(.5*i.speed,Math.min(1.5*i.speed,1/Math.abs(i.velocityX)*i.speed)),l?i.endPanning():c?i.endZooming():i.endSwiping(a)},u.prototype.endSwiping=function(t){var e=this,i=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),i=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?i=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(i=e.instance.next(e.speedX)),!1!==i||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,i,o=this;o.contentLastPos&&(!1===o.instance.current.opts.touch.momentum?(t=o.contentLastPos.left,e=o.contentLastPos.top):(t=o.contentLastPos.left+o.velocityX*o.speed,e=o.contentLastPos.top+o.velocityY*o.speed),(i=o.limitPosition(t,e,o.contentStartPos.width,o.contentStartPos.height)).width=o.contentStartPos.width,i.height=o.contentStartPos.height,n.fancybox.animate(o.$content,i,330))},u.prototype.endZooming=function(){var t,e,i,o,r=this,s=r.instance.current,a=r.newWidth,l=r.newHeight;r.contentLastPos&&(t=r.contentLastPos.left,o={top:e=r.contentLastPos.top,left:t,width:a,height:l,scaleX:1,scaleY:1},n.fancybox.setTranslate(r.$content,o),a<r.canvasWidth&&l<r.canvasHeight?r.instance.scaleToFit(150):a>s.width||l>s.height?r.instance.scaleToActual(r.centerPointStartX,r.centerPointStartY,150):(i=r.limitPosition(t,e,a,l),n.fancybox.setTranslate(r.content,n.fancybox.getTranslate(r.$content)),n.fancybox.animate(r.$content,i,150)))},u.prototype.onTap=function(t){var e,i=this,o=n(t.target),s=i.instance,a=s.current,l=t&&r(t)||i.startPoints,c=l[0]?l[0].x-i.$stage.offset().left:0,u=l[0]?l[0].y-i.$stage.offset().top:0,f=function(e){var o=a.opts[e];if(n.isFunction(o)&&(o=o.apply(s,[a,t])),o)switch(o){case"close":s.close(i.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(i.startEvent);break;case"zoom":"image"==a.type&&(a.isLoaded||a.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(c,u):s.group.length<2&&s.close(i.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||c>o[0].clientWidth+o.offset().left)){if(o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(o.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(c-i.tapX)>50||Math.abs(u-i.tapY)>50||s.isSliding)return this;f("dblclick"+e)}else i.tapX=c,i.tapY=u,a.opts["dblclick"+e]&&a.opts["dblclick"+e]!==a.opts["click"+e]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+e)},300):f("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,i){var o=e&&e.SlideShow;i?o&&n.opts.slideShow.autoStart&&o.start():o&&o.isActive&&o.clear()},"afterShow.fb":function(t,e,n){var i=e&&e.SlideShow;i&&i.isActive&&i.set()},"afterKeydown.fb":function(n,i,o,r,s){var a=i&&i.SlideShow;!a||!o.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(r.preventDefault(),a.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),i=n&&n.SlideShow;i&&i.isActive&&(t.hidden?i.clear():i.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,i,o=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r={};for(n=0;n<o.length;n++)if((e=o[n])&&e[1]in t){for(i=0;i<e.length;i++)r[o[0][i]]=e[i];return r}return!1}();if(n){var i={request:function(e){(e=e||t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,o=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?((n=e.$refs.container).on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),i.toggle(n[0])}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&i.request(n[0]),e.FullScreen=i):o.hide()},"afterKeydown.fb":function(t,e,n,i,o){e&&e.FullScreen&&70===o&&(i.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&i.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0)),t.trigger("onFullscreenChange",i.isFullscreen())})}else e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1)}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,i=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(i.$refs.container),t="<ul>",e.each(i.group,function(e,i){(n=i.opts.thumb||(i.opts.$thumb?i.opts.$thumb.attr("src"):null))||"image"!==i.type||(n=i.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){i.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,i,o,r=e(this).parent().removeClass("fancybox-thumbs-loading"),s=r.outerWidth(),a=r.outerHeight();t=this.naturalWidth||this.width,o=(n=this.naturalHeight||this.height)/a,(i=t/s)>=1&&o>=1&&(i>o?(t/=o,n=a):(t=s,n/=i)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*a-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,i){var o=e&&e.Thumbs;if(o&&o.isActive){if(n.modal)return o.$button.hide(),void o.hide();i&&!0===n.opts.thumbs.autoStart&&o.show(),o.isVisible&&o.focus()}},"afterKeydown.fb":function(t,e,n,i,o){var r=e&&e.Thumbs;r&&r.isActive&&71===o&&(i.preventDefault(),r.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==e.opts.thumbs.hideOnClose&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function i(){var t=e.location.hash.substr(1),n=t.split("-"),i=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,o=n.join("-");return i<1&&(i=1),{hash:t,index:i,gallery:o}}function o(t){var e;""!==t.gallery&&((e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1)).length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function r(t){var e;return!!t&&((e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;return(t+"").replace(e,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})});var s=!0,a=null,l=null;n(function(){setTimeout(function(){!1!==n.fancybox.defaults.hash&&(n(t).on({"onInit.fb":function(t,e){var n,o;!1!==e.group[e.currIndex].opts.hash&&(n=i(),(o=r(e))&&n.gallery&&o==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,i,o){var c;o&&!1!==o.opts.hash&&(c=r(i))&&""!==c&&(e.location.hash.indexOf(c)<0&&(i.opts.origHash=e.location.hash),a=c+(i.group.length>1?"-"+(o.index+1):""),"replaceState"in e.history?(l&&clearTimeout(l),l=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+a),l=null,s=!1},300)):e.location.hash=a)},"beforeClose.fb":function(i,o,s){var c,u;l&&clearTimeout(l),!1!==s.opts.hash&&(c=r(o),u=o&&o.opts.origHash?o.opts.origHash:"",c&&""!==c&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))),a=null)}}),n(e).on("hashchange.fb",function(){var t=i();n.fancybox.getInstance()?!a||a===t.gallery+"-"+t.index||1===t.index&&a==t.gallery||(a=null,n.fancybox.close()):""!==t.gallery&&o(t)}),o(i()))},50)})}(document,window,window.jQuery),function(t,e,n,i,o,r,s){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,r=e.createElement(n),s=e.getElementsByTagName(n)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),ga("create","UA-107982810-1","auto"),ga("send","pageview"),window.onload=function(){$(".loading").fadeOut("slow")},document.addEventListener("DOMContentLoaded",loaded,!1),$("#defaultOpen").click(),$(".more").click(function(){var t=$(".section-proj-4__detail__content__more");"none"===t.css("display")?($(this).html("ẩn nội dung"),t.css("display","inline")):($(this).html("xem thêm"),t.css("display","none"))}),$(".section-proj-1__button-group__picture").on("click",function(){openGallery(project.gallery.picture)}),$(".section-proj-1__button-group__civil-guide").on("click",function(){openGallery(project.gallery.guide)}),$(".section-proj-1__button-group__position").on("click",function(){openGallery(project.gallery.position)});var acc=$(".section-proj-6__arcordion__link").on("click",function(){$(".section-proj-6 .active").removeClass("active"),$(".section-proj-6__arcordion__item").css("max-height","0px"),$(this).addClass("active");var t=$(this).next();"0px"===t.css("max-height")?t.css("max-height",t[0].scrollHeight+"px"):t.css("max-height","0px")}),defaultShow=$("#defaultShow");defaultShow.css("max-height",defaultShow[0].scrollHeight+"px"),defaultShow.prev().addClass("active");
>>>>>>> master
