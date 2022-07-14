/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
;/**
 * Created by hucf on 2019/11/20.
 */
var ImagePreview = {
    default_params:{},
    init:function (param) {
        if (param) {
            $.extend(this.default_params, param);
        }
        ip_global_img_list = [];
        var id = this.default_params.id;
        if (typeof id == 'string') {
            if ((ip_global_img_list = $("#"+id).find("img")).length == 0) {
                return;
            }
        } else if (typeof id == 'object' && id != null) {
            ip_global_img_list = $(id);
        }
        this.fnGenerateHtml();
        this.fnBindEvent(ip_global_img_list);
    },
    fnBindEvent:function (ip_global_img_list) {
        if (ip_global_img_list.length == 0) {
            return;
        }
        $(ip_global_img_list).on("click", this.onClickEvent);
        this.onDragEvent($("#ip-img-preview"));
      
        $("#ip-img-preview").on('mousewheel DOMMouseScroll', this.onMouseScrollEvent);

        $('#ip-img-floatshadow').on("click", function () {
            $('#ip-img-preview').hide();
            $("#ip-left").hide();
            $("#ip-right").hide();
            $('#ip-img-floatshadow').hide();
            $('#ip-img-preview').attr("src", "");
        });
        $("#ip-left").hover(this.fnMouseOver,this.fnMouseOut).click(this.fnPrev);
        $("#ip-right").hover(this.fnMouseOver,this.fnMouseOut).click(this.fnNext);
    },
    fnGenerateHtml:function () {
        $("body").append('<img id="ip-img-preview" style="position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 19941206;cursor: move;display: none"/><div id="ip-img-floatshadow" style="z-index: 19941205;background-color: #000;opacity: .5;top: 0;left: 0;width: 100%;height: 100%;position: fixed;display: none" title="点击空白处关闭"></div>');
        $("body").append('<div id="ip-left" style="display: none; width: 100px; height: 100px;left: 5px; top: 50%; position:fixed;z-index:19941207; cursor: pointer;">' +
            '<div style="left:-30px;border: 50px solid;border-color: transparent #1CB9C4 transparent transparent;position: absolute;"></div></div>');
        $("body").append('<div id="ip-right" style="display: none; width: 100px; height: 100px; right: 5px; top: 50%; position:fixed; z-index:19941207;cursor: pointer;">' +
            '<div style="left:30px;border: 50px solid;border-color: transparent transparent transparent #1CB9C4;position: absolute;"></div></div>');
    },
    fnMouseOver:function () {
        $(this).css("background", "rgb(134, 134, 134)");
        $(this).css("border", "1px solid rgb(111, 111, 111)");
    },
    fnMouseOut:function () {
        $(this).css("background", "");
        $(this).css("border", "");
    },
    fnPrev:function () {
        if (typeof(ip_global_cur) == "number" && ip_global_cur>0) {
            ImagePreview.fnReset();
            // $("#ip-img-preview").animate({left:"48%"}, 100);
            $("#ip-img-preview").attr("src", ip_global_img_list[--ip_global_cur].src);
            // $("#ip-img-preview").animate({left:"50.5%"}, 100);
            // $("#ip-img-preview").animate({left:"50%"}, 100);
            ImagePreview.fnAdjustMaxWidth();
        }
    },
    fnNext:function () {
   
        if (typeof(ip_global_cur) == "number" && ip_global_cur<ip_global_img_list.length-1) {
            ImagePreview.fnReset();
            // $("#ip-img-preview").animate({left:"52%"}, 100);
            $("#ip-img-preview").attr("src", ip_global_img_list[++ip_global_cur].src);
            // $("#ip-img-preview").animate({left:"49.5%"}, 100);
            // $("#ip-img-preview").animate({left:"50%"}, 100);
            ImagePreview.fnAdjustMaxWidth();
        }
    },
    fnGetIndexOfCurImg:function (cur) {
        for (var i=0; i<ip_global_img_list.length; i++) {
            if ($(ip_global_img_list[i]).is(cur)) {
                return i;
            }
        }
    },
    onClickEvent:function (e) {
 
        ImagePreview.fnReset();
        $("#ip-img-preview").attr("src", $(this).attr("src"));
        ImagePreview.fnAdjustMaxWidth();
        ip_global_cur = ImagePreview.fnGetIndexOfCurImg($(this));
        $("#ip-img-floatshadow").fadeIn();
        $("#ip-img-preview").fadeIn();
        $("#ip-left").fadeIn();
        $("#ip-right").fadeIn();
    },
    fnAdjustMaxWidth:function () {
        //最长边判定，避免超出屏幕画幅的展示
        var widthFlag = true;
        var max = $("#ip-img-preview").width();
        if (max < $("#ip-img-preview").height()) {
            widthFlag = false;
            max = $("#ip-img-preview").height();
        }
        if (widthFlag && $(window).width() < max) {
            $("#ip-img-preview").css("width","75%");
        } else if (!widthFlag && $(window).height() < max) {
            $("#ip-img-preview").css("height","75%");
        }
    },
    fnReset:function () {
        $("#ip-img-preview").css("left","50%");
        $("#ip-img-preview").css("top","50%");
        $("#ip-img-preview").css("width","");
        $("#ip-img-preview").css("height","");
    },
    onMouseScrollEvent:function (e) {
        e.preventDefault();
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel));
        if (delta < 0) { //向下滚动
            $(this).width($(this).width() / 1.1);
            $(this).height($(this).height() / 1.1);
        } else { //向上滚动
            $(this).width($(this).width() * 1.1);
            $(this).height($(this).height() * 1.1);
        }
    },
    onDragEvent:function (obj) {
        obj.bind("mousedown", start);
        function start(event) {
            if (event.button == 0) {
                gapX = event.clientX - obj.offset().left;
                gapY = event.clientY - obj.offset().top;
                $(document).bind("mousemove", move);
                $(document).bind("mouseup", stop);
            }
            return false;
        }
        function move(event) {
            obj.css({
                "left": (event.clientX - gapX + obj.width() / 2) + "px",
                "top": (event.clientY - gapY + obj.height() / 2) + "px"
            });
            return false;
        }
        function stop() {
            $(document).unbind("mousemove", move);
            $(document).unbind("mouseup", stop);
        }
    },
    removed:function(){
        
        $("#ip-img-preview").remove()
        $("#ip-img-floatshadow").remove()
        $("#ip-left").remove()
        $("#ip-right").remove()
    }
};
;/**
 * WinBox.js v0.2.01 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
 (function(){'use strict';var g,k=document.createElement("style");k.innerHTML="@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.winbox.modal:after,.winbox.modal:before{content:''}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.max,.no-shadow{box-shadow:none}.wb-header{top:0;width:100%;height:35px;color:#fff;overflow:hidden}.wb-body{right:0;top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;height:35px;line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n,.wb-s{height:10px;position:absolute;left:0}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w{position:absolute;top:0;left:-5px;bottom:0;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title,body.wb-drag iframe{pointer-events:none}.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.no-animation,body.wb-drag .winbox{transition:none}.winbox.modal:before{position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}";
var l=document.getElementsByTagName("head")[0];l.firstChild?l.insertBefore(k,l.firstChild):l.appendChild(k);var m=document.createElement("div");m.innerHTML="<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function n(a,b,c,e){a.addEventListener(b,c,e||!1===e?e:!0)}function r(a){a.stopPropagation();a.cancelable&&a.preventDefault()}function v(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)};var x=[],y,B=0,C=0,D,E,F,I,N,P,Q;
function S(a,b){if(!(this instanceof S))return new S(a);D||T();this.g=m.cloneNode(!0);this.body=this.g.getElementsByClassName("wb-body")[0];var c,e;if(a){if(b){var d=a;a=b}if("string"===typeof a)d=a;else{if(e=a.modal)var h=c="center";var p=a.id;var J=a.root;d=d||a.title;var G=a.mount;var f=a.html;var z=a.url;var q=a.width;var t=a.height;var w=a.minwidth;var A=a.minheight;h=a.x||h;c=a.y||c;var K=a.max;var u=a.top;var H=a.left;var L=a.bottom;var M=a.right;D=a.index||D;var Z=a.onclose;var aa=a.onfocus;
var ba=a.onblur;var ca=a.onmove;var da=a.onresize;b=a.background;var R=a.border;var O=a["class"];var ea=a.splitscreen;b&&this.setBackground(b);R&&v(this.body,"margin",R+(isNaN(R)?"":"px"))}}this.setTitle(d||"");a=P;d=Q;u=u?U(u,d):0;L=L?U(L,d):0;H=H?U(H,a):0;M=M?U(M,a):0;a-=H+M;d-=u+L;q=q?U(q,a):a/2|0;t=t?U(t,d):d/2|0;w=w?U(w,a):0;A=A?U(A,d):0;h=h?U(h,a,q):H;c=c?U(c,d,t):u;D=D||10;this.g.id=this.id=p||"winbox-"+ ++B;this.g.className="winbox"+(O?" "+("string"===typeof O?O:O.join(" ")):"")+(e?" modal":
"");this.x=h;this.y=c;this.width=q;this.height=t;this.u=w;this.s=A;this.top=u;this.right=M;this.bottom=L;this.left=H;this.max=this.min=!1;this.j=Z;this.l=aa;this.i=ba;this.o=ca;this.m=da;this.v=ea;K?this.maximize():this.move().resize();this.focus();G?this.mount(G):f?this.body.innerHTML=f:z&&this.setUrl(z);fa(this);(J||y).appendChild(this.g)}S["new"]=function(a){return new S(a)};
function U(a,b,c){"string"===typeof a&&("center"===a?a=(b-c)/2|0:"right"===a||"bottom"===a?a=b-c:(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c|0:c));return a}
function T(){y=document.body;y[I="requestFullscreen"]||y[I="msRequestFullscreen"]||y[I="webkitRequestFullscreen"]||y[I="mozRequestFullscreen"]||(I="");N=I&&I.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");n(window,"resize",function(){P=y.clientWidth;Q=y.clientHeight;V()});P=y.clientWidth;Q=y.clientHeight}
function fa(a){W(a,"title");W(a,"n");W(a,"s");W(a,"w");W(a,"e");W(a,"nw");W(a,"ne");W(a,"se");W(a,"sw");n(a.g.getElementsByClassName("wb-min")[0],"click",function(b){r(b);a.minimize()});n(a.g.getElementsByClassName("wb-max")[0],"click",function(b){r(b);a.focus().maximize()});I?n(a.g.getElementsByClassName("wb-full")[0],"click",function(b){r(b);a.focus().fullscreen()}):a.addClass("no-full");n(a.g.getElementsByClassName("wb-close")[0],"click",function(b){r(b);a.close()||(a=null)});n(a.g,"click",function(){a.focus()},
!1)}function X(a){x.splice(x.indexOf(a),1);V();a.removeClass("min");a.min=!1;a.g.title=""}function V(){for(var a=x.length,b={},c={},e=0,d;e<a;e++)d=x[e],d=d.left+":"+d.top,c[d]?c[d]++:c[d]=1;e=0;for(var h,p;e<a;e++)d=x[e],h=d.left+":"+d.top,p=Math.min((P-d.left-d.right)/c[h],250),b[h]||(b[h]=0),d.resize(p+1|0,35,!0).move(d.left+b[h]*p|0,Q-d.bottom-35,!0),b[h]++}
function W(a,b){function c(f){r(f);if(a.min)a.minimize();else{if("title"===b){var z=Date.now(),q=z-C;C=z;if(250>q){a.maximize();return}}a.max||(y.classList.add("wb-drag"),(p=f.touches)&&(p=p[0])?(f=p,n(window,"touchmove",e),n(window,"touchend",d)):(n(window,"mousemove",e),n(window,"mouseup",d)),J=f.pageX,G=f.pageY,a.focus())}}function e(f){r(f);p&&(f=f.touches[0]);var z=f.pageX;f=f.pageY;var q=z-J,t=f-G,w;if("title"===b){a.x+=q;a.y+=t;var A=w=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=q;var K=
1}else if("w"===b||"sw"===b||"nw"===b)a.x+=q,a.width-=q,A=K=1;if("s"===b||"se"===b||"sw"===b){a.height+=t;var u=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=t,a.height-=t,w=u=1}if(K||u)K&&(a.width=Math.max(Math.min(a.width,P-a.x-a.right),150)),u&&(a.height=Math.max(Math.min(a.height,Q-a.y-a.bottom),35)),a.resize();if(A||w)A&&(a.x=Math.max(Math.min(a.x,P-a.width-a.right),a.left)),w&&(a.y=Math.max(Math.min(a.y,Q-a.height-a.bottom),a.top)),a.move();J=z;G=f}function d(f){r(f);y.classList.remove("wb-drag");
p?(window.removeEventListener("touchmove",e,!0),window.removeEventListener("touchend",d,!0)):(window.removeEventListener("mousemove",e,!0),window.removeEventListener("mouseup",d,!0))}var h=a.g.getElementsByClassName("wb-"+b)[0],p,J,G;n(h,"mousedown",c);n(h,"touchstart",c,{passive:!1})}g=S.prototype;g.mount=function(a){this.unmount();a.h||(a.h=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};
g.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.h;c&&c.appendChild(b);b.h=a}return this};g.setTitle=function(a){a=this.title=a;this.g.getElementsByClassName("wb-title")[0].firstChild.nodeValue=a;return this};g.setBackground=function(a){v(this.g,"background",a);return this};g.setUrl=function(a){this.body.innerHTML='<iframe src="'+a+'"></iframe>';return this};
g.focus=function(){F!==this&&(v(this.g,"z-index",D++),this.addClass("focus"),F&&(F.removeClass("focus"),F.i&&F.i()),F=this,this.l&&this.l());return this};g.hide=function(){return this.addClass("hide")};g.show=function(){return this.removeClass("hide")};g.minimize=function(a){E&&Y();!a&&this.min?(X(this),this.resize().move().focus()):!1===a||this.min||(x.push(this),V(),this.g.title=this.title,this.addClass("min"),this.min=!0);this.max&&(this.removeClass("max"),this.max=!1);return this};
g.maximize=function(a){if("undefined"===typeof a||a!==this.max)this.min&&X(this),(this.max=!this.max)?this.addClass("max").resize(P-this.left-this.right,Q-this.top-this.bottom,!0).move(this.left,this.top,!0):this.resize().move().removeClass("max");return this};g.fullscreen=function(a){if("undefined"===typeof a||a!==E)this.min&&(this.resize().move(),X(this)),E&&Y()||(this.body[I](),E=!0);return this};
function Y(){E=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[N](),!0}g.close=function(a){if(this.j&&this.j(a))return!0;this.min&&X(this);this.unmount();this.g.parentNode.removeChild(this.g);F===this&&(F=null)};
g.move=function(a,b,c){a||0===a?c||(this.x=a?a=U(a,P-this.left-this.right,this.width):0,this.y=b?b=U(b,Q-this.top-this.bottom,this.height):0):(a=this.x,b=this.y,this.v&&(0===a?this.resize(P/2,Q):a===P-this.width&&this.resize(P/2,Q)));v(this.g,"transform","translate("+a+"px,"+b+"px)");this.o&&this.o(a,b);return this};
g.resize=function(a,b,c){a||0===a?c||(this.width=a?a=U(a,P-this.left-this.right):0,this.height=b?b=U(b,Q-this.top-this.bottom):0):(a=this.width,b=this.height);a=Math.max(a,this.u);b=Math.max(b,this.s);v(this.g,"width",a+"px");v(this.g,"height",b+"px");this.m&&this.m(a,b);return this};g.addClass=function(a){this.g.classList.add(a);return this};g.removeClass=function(a){this.g.classList.remove(a);return this};window.WinBox=S;}).call(this);

;/**
 * Swiper 4.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 31, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,B="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===B||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new B.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===B?B.scrollY:e.scrollTop,n=e===B?B.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return B.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===B)return i===B;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=f.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;0<=a;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?B.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,X={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=B.getComputedStyle(e,null);return B.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new B.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=B.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=B.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||B.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(X.isObject(a[l])&&X.isObject(s[l])?X.extend(a[l],s[l]):!X.isObject(a[l])&&X.isObject(s[l])?(a[l]={},X.extend(a[l],s[l])):a[l]=s[l])}}return a}},Y=(i=f.createElement("div"),{touch:B.Modernizr&&!0===B.Modernizr.touch||!!("ontouchstart"in B||B.DocumentTouch&&f instanceof B.DocumentTouch),pointerEvents:!(!B.navigator.pointerEnabled&&!B.PointerEvent),prefixedPointerEvents:!!B.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:B.Modernizr&&!0===B.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in B||"WebkitMutationObserver"in B,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});B.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in B}),s=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},n={components:{configurable:!0}};s.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},s.prototype.once=function(i,s,e){var r=this;if("function"!=typeof s)return r;return r.on(i,function e(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];s.apply(r,t),r.off(i,e)},e)},s.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a].forEach(function(e,t){e===i&&s.eventsListeners[a].splice(t,1)})}),s},s.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},s.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&X.extend(a,t.params)})},s.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},n.components.set=function(e){this.use&&this.use(e)},s.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+X.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},s.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(s,n);var o={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),X.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,E;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var T,S=t.slidesPerColumn,C=x/S,M=C-(t.slidesPerColumn*C-d),z=0;z<d;z+=1){E=0;var k=l.eq(z);if(1<t.slidesPerColumn){var P=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),P=$+L*x/S,k.css({"-webkit-box-ordinal-group":P,"-moz-box-ordinal-group":P,"-ms-flex-order":P,"-webkit-order":P,order:P})):$=z-(L=Math.floor(z/C))*C,k.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==k.css("display")){if("auto"===t.slidesPerView){var I=B.getComputedStyle(k[0],null),D=k[0].style.transform,O=k[0].style.webkitTransform;D&&(k[0].style.transform="none"),O&&(k[0].style.webkitTransform="none"),E=e.isHorizontal()?k[0].getBoundingClientRect().width+parseFloat(I.getPropertyValue("margin-left"))+parseFloat(I.getPropertyValue("margin-right")):k[0].getBoundingClientRect().height+parseFloat(I.getPropertyValue("margin-top"))+parseFloat(I.getPropertyValue("margin-bottom")),D&&(k[0].style.transform=D),O&&(k[0].style.webkitTransform=O),t.roundLengths&&(E=Math.floor(E))}else E=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),l[z]&&(e.isHorizontal()?l[z].style.width=E+"px":l[z].style.height=E+"px");l[z]&&(l[z].swiperSlideSize=E),u.push(E),t.centeredSlides?(b=b+E/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+E+g),e.virtualSize+=E+g,w=E,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),Y.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(E+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){T=[];for(var A=0;A<p.length;A+=1){var H=p[A];t.roundLengths&&(H=Math.floor(H)),p[A]<e.virtualSize+p[0]&&T.push(H)}p=T}if(!t.centeredSlides){T=[];for(var G=0;G<p.length;G+=1){var N=p[G];t.roundLengths&&(N=Math.floor(N)),p[G]<=e.virtualSize-i&&T.push(N)}p=T,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),X.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),X.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);X.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var d={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=X.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(Y.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var p={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var c={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&Y.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),X.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),X.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var u={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),a.removeAttr("data-swiper-slide-index")}};var h={setGrabCursor:function(e){if(!(Y.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){Y.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var v={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&Y.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&Y.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&Y.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&Y.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},m=function(){var e=B.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:B.cordova||B.phonegap,phonegap:B.cordova||B.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=B.devicePixelRatio||1,t}();function g(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var b={attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&(!a.isTouched||!a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=B.screen.width-d)){if(X.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=X.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur(),p&&t.allowTouchMove&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(X.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=X.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:X.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=X.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=X.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=X.now(),X.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<X.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,E=!1,T=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-T&&(w=t.maxTranslate()-T),y=t.maxTranslate(),E=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>T&&(w=t.minTranslate()+T),y=t.minTranslate(),E=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&E?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],k=0;k<o.length;k+=i.slidesPerGroup)void 0!==o[k+i.slidesPerGroup]?p>=o[k]&&p<o[k+i.slidesPerGroup]&&(z=o[(M=k)+i.slidesPerGroup]-o[k]):p>=o[k]&&(M=k,z=o[o.length-1]-o[o.length-2]);var P=(p-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(Y.touch||!Y.pointerEvents&&!Y.prefixedPointerEvents){if(Y.touch){var o=!("touchstart"!==a.start||!Y.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,Y.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!Y.touch&&m.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(Y.touch||!Y.pointerEvents&&!Y.prefixedPointerEvents){if(Y.touch){var o=!("onTouchStart"!==a.start||!Y.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!Y.touch&&m.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g)}};var w,y={setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:e.originalParams,l=s.loop&&o.slidesPerView!==s.slidesPerView;X.extend(e.params,o),X.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,l&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",o)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];s>=B.innerWidth&&!t&&(t=s)}return t||"max"}}},I={isIE:!!B.navigator.userAgent.match(/Trident/g)||!!B.navigator.userAgent.match(/MSIE/g),isSafari:(w=B.navigator.userAgent.toLowerCase(),0<=w.indexOf("safari")&&w.indexOf("chrome")<0&&w.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(B.navigator.userAgent)};var x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},E={update:o,translate:d,transition:p,slide:c,loop:u,grabCursor:h,manipulation:v,events:b,breakpoints:y,checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push(a.direction),a.freeMode&&s.push("free-mode"),Y.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),m.android&&s.push("android"),m.ios&&s.push("ios"),I.isIE&&(Y.pointerEvents||Y.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new B.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},T={},S=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=X.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(E).forEach(function(t){Object.keys(E[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=E[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=X.extend({},x);r.useModulesParams(n),r.params=X.extend({},n,T,s),r.originalParams=X.extend({},r.params),r.passedParams=X.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=X.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return X.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],Y.pointerEvents?p=["pointerdown","pointermove","pointerup"]:Y.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},Y.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:X.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),X.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){X.extend(T,e)},e.extendedDefaults.get=function(){return T},e.defaults.get=function(){return x},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(s),C={name:"device",proto:{device:m},static:{device:m}},M={name:"support",proto:{support:Y},static:{support:Y}},z={name:"browser",proto:{browser:I},static:{browser:I}},k={name:"resize",create:function(){var e=this;X.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){B.addEventListener("resize",this.resize.resizeHandler),B.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){B.removeEventListener("resize",this.resize.resizeHandler),B.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},P={func:B.MutationObserver||B.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new P.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};B.requestAnimationFrame?B.requestAnimationFrame(t):B.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(Y.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},$={name:"observer",params:{observer:!1,observeParents:!1},create:function(){X.extend(this,{observer:{init:P.init.bind(this),attach:P.attach.bind(this),destroy:P.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},D={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.virtual,o=n.from,l=n.to,d=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var h,v,f,m=t.activeIndex||0;h=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(v=Math.floor(i/2)+s,f=Math.floor(i/2)+s):(v=i+(s-1),f=s);var g=Math.max((m||0)-f,0),b=Math.min((m||0)+v,d.length-1),w=(t.slidesGrid[g]||0)-(t.slidesGrid[0]||0);function y(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(X.extend(t.virtual,{from:g,to:b,offset:w,slidesGrid:t.slidesGrid}),o===g&&l===b&&!e)return t.slidesGrid!==p&&w!==u&&t.slides.css(h,w+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:w,from:g,to:b,slides:function(){for(var e=[],t=g;t<=b;t+=1)e.push(d[t]);return e}()}),void y();var x=[],E=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var T=o;T<=l;T+=1)(T<g||b<T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+T+'"]').remove();for(var S=0;S<d.length;S+=1)g<=S&&S<=b&&(void 0===l||e?E.push(S):(l<S&&E.push(S),S<o&&x.push(S)));E.forEach(function(e){t.$wrapperEl.append(c(d[e],e))}),x.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(d[e],e))}),t.$wrapperEl.children(".swiper-slide").css(h,w+"px"),y()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},O={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;X.extend(e,{virtual:{update:D.update.bind(e),appendSlide:D.appendSlide.bind(e),prependSlide:D.prependSlide.bind(e),renderSlide:D.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};X.extend(e.params,t),X.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},A={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=B.innerWidth,o=B.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},H={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){X.extend(this,{keyboard:{enabled:!1,enable:A.enable.bind(this),disable:A.disable.bind(this),handle:A.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var G={lastScrollTime:X.now(),event:-1<B.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=G.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=X.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<X.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new B.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!G.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(G.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!G.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(G.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},N={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",function(e){e.preventDefault(),a.isEnd&&!a.params.loop||a.slideNext()}),t&&0<t.length&&t.on("click",function(e){e.preventDefault(),a.isBeginning&&!a.params.loop||a.slidePrev()}),X.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,a=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),a&&a.length&&(a.off("click"),a.removeClass(this.params.navigation.disabledClass))}},V={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),X.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},R={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(Y.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(Y.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),X.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=X.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!Y.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!Y.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};Y.touch||!Y.pointerEvents&&!Y.prefixedPointerEvents?(Y.touch&&(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)),(s.simulateTouch&&!m.ios&&!m.android||s.simulateTouch&&!Y.touch&&m.ios)&&(r.addEventListener("mousedown",e.scrollbar.onDragStart,n),f.addEventListener("mousemove",e.scrollbar.onDragMove,n),f.addEventListener("mouseup",e.scrollbar.onDragEnd,o))):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!Y.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!Y.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};Y.touch||!Y.pointerEvents&&!Y.prefixedPointerEvents?(Y.touch&&(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)),(s.simulateTouch&&!m.ios&&!m.android||s.simulateTouch&&!Y.touch&&m.ios)&&(r.removeEventListener("mousedown",e.scrollbar.onDragStart,n),f.removeEventListener("mousemove",e.scrollbar.onDragMove,n),f.removeEventListener("mouseup",e.scrollbar.onDragEnd,o))):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),X.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},F={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},W={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!Y.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=W.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!Y.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=W.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(Y.gestures?this.zoom.scale=e.scale*a.currentScale:a.scale=i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!Y.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!m.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(m.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=X.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=X.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!Y.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};Y.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!Y.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};Y.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},q={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},j={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new j.LinearSpline(t.slidesGrid,e.slidesGrid):new j.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof S&&n(r[o]);else r instanceof S&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&X.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof S&&r(s[a]);else s instanceof S&&e!==s&&r(s)}},K={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},U={init:function(){var e=this;if(e.params.history){if(!B.history||!B.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=U.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||B.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||B.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=U.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=B.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=U.slugify(a.attr("data-history"));B.location.pathname.includes(e)||(i=e+"/"+i);var s=B.history.state;s&&s.value===i||(this.params.history.replaceState?B.history.replaceState({value:i},null,i):B.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(U.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},_={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&B.history&&B.history.replaceState)B.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(B).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(B).off("hashchange",this.hashNavigation.onHashCange)}},Z={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=X.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},Q={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},J={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var E="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(E),d.slideShadows){var T=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(T)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),T.length&&(T[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,k=d.shadowScale/M,P=d.shadowOffset;e.transform("scale3d("+z+", 1, "+k+") translate3d(0px, "+(n/2+P)+"px, "+-n/2/k+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},ee={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},te={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var E="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(E),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var T=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(T)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),T.length&&(T[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(Y.pointerEvents||Y.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ae=[C,M,z,k,$,O,H,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;X.extend(e,{mousewheel:{enabled:!1,enable:G.enable.bind(e),disable:G.disable.bind(e),handle:G.handle.bind(e),handleMouseEnter:G.handleMouseEnter.bind(e),handleMouseLeave:G.handleMouseLeave.bind(e),lastScrollTime:X.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){X.extend(this,{navigation:{init:N.init.bind(this),update:N.update.bind(this),destroy:N.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,a=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||L(e.target).is(i)||L(e.target).is(a)||(a&&a.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;X.extend(e,{pagination:{init:V.init.bind(e),render:V.render.bind(e),update:V.update.bind(e),destroy:V.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;X.extend(e,{scrollbar:{init:R.init.bind(e),destroy:R.destroy.bind(e),updateSize:R.updateSize.bind(e),setTranslate:R.setTranslate.bind(e),setTransition:R.setTransition.bind(e),enableDraggable:R.enableDraggable.bind(e),disableDraggable:R.disableDraggable.bind(e),setDragPosition:R.setDragPosition.bind(e),onDragStart:R.onDragStart.bind(e),onDragMove:R.onDragMove.bind(e),onDragEnd:R.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){X.extend(this,{parallax:{setTransform:F.setTransform.bind(this),setTranslate:F.setTranslate.bind(this),setTransition:F.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var t=this,a={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){a[e]=W[e].bind(t)}),X.extend(t,{zoom:a})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){X.extend(this,{lazy:{initialImageLoaded:!1,load:q.load.bind(this),loadInSlide:q.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;X.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:j.getInterpolateFunction.bind(e),setTranslate:j.setTranslate.bind(e),setTransition:j.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;X.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(K).forEach(function(e){t.a11y[e]=K[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;X.extend(e,{history:{init:U.init.bind(e),setHistory:U.setHistory.bind(e),setHistoryPopState:U.setHistoryPopState.bind(e),scrollToSlide:U.scrollToSlide.bind(e),destroy:U.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;X.extend(e,{hashNavigation:{initialized:!1,init:_.init.bind(e),destroy:_.destroy.bind(e),setHash:_.setHash.bind(e),onHashCange:_.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;X.extend(t,{autoplay:{running:!1,paused:!1,run:Z.run.bind(t),start:Z.start.bind(t),stop:Z.stop.bind(t),pause:Z.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){X.extend(this,{fadeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};X.extend(e.params,t),X.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){X.extend(this,{cubeEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};X.extend(e.params,t),X.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){X.extend(this,{flipEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};X.extend(e.params,t),X.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){X.extend(this,{coverflowEffect:{setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}}];return void 0===S.use&&(S.use=S.Class.use,S.installModule=S.Class.installModule),S.use(ae),S});
//# sourceMappingURL=swiper.min.js.map

;//============================================================
//
// Copyright (C) 2013 Matthew Wagerfield
//
// Twitter: https://twitter.com/mwagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================

/**
 * Defines the Flat Surface Shader namespace for all the awesomeness to exist upon.
 * @author Matthew Wagerfield
 */
FSS = {
  FRONT  : 0,
  BACK   : 1,
  DOUBLE : 2,
  SVGNS  : 'http://www.w3.org/2000/svg'
};

/**
 * @class Array
 * @author Matthew Wagerfield
 */
FSS.Array = typeof Float32Array === 'function' ? Float32Array : Array;

/**
 * @class Utils
 * @author Matthew Wagerfield
 */
FSS.Utils = {
  isNumber: function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
};

/**
 * Request Animation Frame Polyfill.
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
(function() {

  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame  = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currentTime + timeToCall);
      }, timeToCall);
      lastTime = currentTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

}());

/**
 * @object Math Augmentation
 * @author Matthew Wagerfield
 */
Math.PIM2 = Math.PI*2;
Math.PID2 = Math.PI/2;
Math.randomInRange = function(min, max) {
  return min + (max - min) * Math.random();
};
Math.clamp = function(value, min, max) {
  value = Math.max(value, min);
  value = Math.min(value, max);
  return value;
};

/**
 * @object Vector3
 * @author Matthew Wagerfield
 */
FSS.Vector3 = {
  create: function(x, y, z) {
    var vector = new FSS.Array(3);
    this.set(vector, x, y, z);
    return vector;
  },
  clone: function(a) {
    var vector = this.create();
    this.copy(vector, a);
    return vector;
  },
  set: function(target, x, y, z) {
    target[0] = x || 0;
    target[1] = y || 0;
    target[2] = z || 0;
    return this;
  },
  setX: function(target, x) {
    target[0] = x || 0;
    return this;
  },
  setY: function(target, y) {
    target[1] = y || 0;
    return this;
  },
  setZ: function(target, z) {
    target[2] = z || 0;
    return this;
  },
  copy: function(target, a) {
    target[0] = a[0];
    target[1] = a[1];
    target[2] = a[2];
    return this;
  },
  add: function(target, a) {
    target[0] += a[0];
    target[1] += a[1];
    target[2] += a[2];
    return this;
  },
  addVectors: function(target, a, b) {
    target[0] = a[0] + b[0];
    target[1] = a[1] + b[1];
    target[2] = a[2] + b[2];
    return this;
  },
  addScalar: function(target, s) {
    target[0] += s;
    target[1] += s;
    target[2] += s;
    return this;
  },
  subtract: function(target, a) {
    target[0] -= a[0];
    target[1] -= a[1];
    target[2] -= a[2];
    return this;
  },
  subtractVectors: function(target, a, b) {
    target[0] = a[0] - b[0];
    target[1] = a[1] - b[1];
    target[2] = a[2] - b[2];
    return this;
  },
  subtractScalar: function(target, s) {
    target[0] -= s;
    target[1] -= s;
    target[2] -= s;
    return this;
  },
  multiply: function(target, a) {
    target[0] *= a[0];
    target[1] *= a[1];
    target[2] *= a[2];
    return this;
  },
  multiplyVectors: function(target, a, b) {
    target[0] = a[0] * b[0];
    target[1] = a[1] * b[1];
    target[2] = a[2] * b[2];
    return this;
  },
  multiplyScalar: function(target, s) {
    target[0] *= s;
    target[1] *= s;
    target[2] *= s;
    return this;
  },
  divide: function(target, a) {
    target[0] /= a[0];
    target[1] /= a[1];
    target[2] /= a[2];
    return this;
  },
  divideVectors: function(target, a, b) {
    target[0] = a[0] / b[0];
    target[1] = a[1] / b[1];
    target[2] = a[2] / b[2];
    return this;
  },
  divideScalar: function(target, s) {
    if (s !== 0) {
      target[0] /= s;
      target[1] /= s;
      target[2] /= s;
    } else {
      target[0] = 0;
      target[1] = 0;
      target[2] = 0;
    }
    return this;
  },
  cross: function(target, a) {
    var x = target[0];
    var y = target[1];
    var z = target[2];
    target[0] = y*a[2] - z*a[1];
    target[1] = z*a[0] - x*a[2];
    target[2] = x*a[1] - y*a[0];
    return this;
  },
  crossVectors: function(target, a, b) {
    target[0] = a[1]*b[2] - a[2]*b[1];
    target[1] = a[2]*b[0] - a[0]*b[2];
    target[2] = a[0]*b[1] - a[1]*b[0];
    return this;
  },
  min: function(target, value) {
    if (target[0] < value) { target[0] = value; }
    if (target[1] < value) { target[1] = value; }
    if (target[2] < value) { target[2] = value; }
    return this;
  },
  max: function(target, value) {
    if (target[0] > value) { target[0] = value; }
    if (target[1] > value) { target[1] = value; }
    if (target[2] > value) { target[2] = value; }
    return this;
  },
  clamp: function(target, min, max) {
    this.min(target, min);
    this.max(target, max);
    return this;
  },
  limit: function(target, min, max) {
    var length = this.length(target);
    if (min !== null && length < min) {
      this.setLength(target, min);
    } else if (max !== null && length > max) {
      this.setLength(target, max);
    }
    return this;
  },
  dot: function(a, b) {
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
  },
  normalise: function(target) {
    return this.divideScalar(target, this.length(target));
  },
  negate: function(target) {
    return this.multiplyScalar(target, -1);
  },
  distanceSquared: function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx*dx + dy*dy + dz*dz;
  },
  distance: function(a, b) {
    return Math.sqrt(this.distanceSquared(a, b));
  },
  lengthSquared: function(a) {
    return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];
  },
  length: function(a) {
    return Math.sqrt(this.lengthSquared(a));
  },
  setLength: function(target, l) {
    var length = this.length(target);
    if (length !== 0 && l !== length) {
      this.multiplyScalar(target, l / length);
    }
    return this;
  }
};

/**
 * @object Vector4
 * @author Matthew Wagerfield
 */
FSS.Vector4 = {
  create: function(x, y, z, w) {
    var vector = new FSS.Array(4);
    this.set(vector, x, y, z);
    return vector;
  },
  set: function(target, x, y, z, w) {
    target[0] = x || 0;
    target[1] = y || 0;
    target[2] = z || 0;
    target[3] = w || 0;
    return this;
  },
  setX: function(target, x) {
    target[0] = x || 0;
    return this;
  },
  setY: function(target, y) {
    target[1] = y || 0;
    return this;
  },
  setZ: function(target, z) {
    target[2] = z || 0;
    return this;
  },
  setW: function(target, w) {
    target[3] = w || 0;
    return this;
  },
  add: function(target, a) {
    target[0] += a[0];
    target[1] += a[1];
    target[2] += a[2];
    target[3] += a[3];
    return this;
  },
  multiplyVectors: function(target, a, b) {
    target[0] = a[0] * b[0];
    target[1] = a[1] * b[1];
    target[2] = a[2] * b[2];
    target[3] = a[3] * b[3];
    return this;
  },
  multiplyScalar: function(target, s) {
    target[0] *= s;
    target[1] *= s;
    target[2] *= s;
    target[3] *= s;
    return this;
  },
  min: function(target, value) {
    if (target[0] < value) { target[0] = value; }
    if (target[1] < value) { target[1] = value; }
    if (target[2] < value) { target[2] = value; }
    if (target[3] < value) { target[3] = value; }
    return this;
  },
  max: function(target, value) {
    if (target[0] > value) { target[0] = value; }
    if (target[1] > value) { target[1] = value; }
    if (target[2] > value) { target[2] = value; }
    if (target[3] > value) { target[3] = value; }
    return this;
  },
  clamp: function(target, min, max) {
    this.min(target, min);
    this.max(target, max);
    return this;
  }
};

/**
 * @class Color
 * @author Matthew Wagerfield
 */
FSS.Color = function(hex, opacity) {
  this.rgba = FSS.Vector4.create();
  this.hex = hex || '#000000';
  this.opacity = FSS.Utils.isNumber(opacity) ? opacity : 1;
  this.set(this.hex, this.opacity);
};

FSS.Color.prototype = {
  set: function(hex, opacity) {
    hex = hex.replace('#', '');
    var size = hex.length / 3;
    this.rgba[0] = parseInt(hex.substring(size*0, size*1), 16) / 255;
    this.rgba[1] = parseInt(hex.substring(size*1, size*2), 16) / 255;
    this.rgba[2] = parseInt(hex.substring(size*2, size*3), 16) / 255;
    this.rgba[3] = FSS.Utils.isNumber(opacity) ? opacity : this.rgba[3];
    return this;
  },
  hexify: function(channel) {
    var hex = Math.ceil(channel*255).toString(16);
    if (hex.length === 1) { hex = '0' + hex; }
    return hex;
  },
  format: function() {
    var r = this.hexify(this.rgba[0]);
    var g = this.hexify(this.rgba[1]);
    var b = this.hexify(this.rgba[2]);
    this.hex = '#' + r + g + b;
    return this.hex;
  }
};

/**
 * @class Object
 * @author Matthew Wagerfield
 */
FSS.Object = function() {
  this.position = FSS.Vector3.create();
};

FSS.Object.prototype = {
  setPosition: function(x, y, z) {
    FSS.Vector3.set(this.position, x, y, z);
    return this;
  }
};

/**
 * @class Light
 * @author Matthew Wagerfield
 */
FSS.Light = function(ambient, diffuse) {
  FSS.Object.call(this);
  this.ambient = new FSS.Color(ambient || '#FFFFFF');
  this.diffuse = new FSS.Color(diffuse || '#FFFFFF');
  this.ray = FSS.Vector3.create();
};

FSS.Light.prototype = Object.create(FSS.Object.prototype);

/**
 * @class Vertex
 * @author Matthew Wagerfield
 */
FSS.Vertex = function(x, y, z) {
  this.position = FSS.Vector3.create(x, y, z);
};

FSS.Vertex.prototype = {
  setPosition: function(x, y, z) {
    FSS.Vector3.set(this.position, x, y, z);
    return this;
  }
};

/**
 * @class Triangle
 * @author Matthew Wagerfield
 */
FSS.Triangle = function(a, b, c) {
  this.a = a || new FSS.Vertex();
  this.b = b || new FSS.Vertex();
  this.c = c || new FSS.Vertex();
  this.vertices = [this.a, this.b, this.c];
  this.u = FSS.Vector3.create();
  this.v = FSS.Vector3.create();
  this.centroid = FSS.Vector3.create();
  this.normal = FSS.Vector3.create();
  this.color = new FSS.Color();
  this.polygon = document.createElementNS(FSS.SVGNS, 'polygon');
  this.polygon.setAttributeNS(null, 'stroke-linejoin', 'round');
  this.polygon.setAttributeNS(null, 'stroke-miterlimit', '1');
  this.polygon.setAttributeNS(null, 'stroke-width', '1');
  this.computeCentroid();
  this.computeNormal();
};

FSS.Triangle.prototype = {
  computeCentroid: function() {
    this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0];
    this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1];
    this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2];
    FSS.Vector3.divideScalar(this.centroid, 3);
    return this;
  },
  computeNormal: function() {
    FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position);
    FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position);
    FSS.Vector3.crossVectors(this.normal, this.u, this.v);
    FSS.Vector3.normalise(this.normal);
    return this;
  }
};

/**
 * @class Geometry
 * @author Matthew Wagerfield
 */
FSS.Geometry = function() {
  this.vertices = [];
  this.triangles = [];
  this.dirty = false;
};

FSS.Geometry.prototype = {
  update: function() {
    if (this.dirty) {
      var t,triangle;
      for (t = this.triangles.length - 1; t >= 0; t--) {
        triangle = this.triangles[t];
        triangle.computeCentroid();
        triangle.computeNormal();
      }
      this.dirty = false;
    }
    return this;
  }
};

/**
 * @class Plane
 * @author Matthew Wagerfield
 */
FSS.Plane = function(width, height, segments, slices) {
  FSS.Geometry.call(this);
  this.width = width || 100;
  this.height = height || 100;
  this.segments = segments || 4;
  this.slices = slices || 4;
  this.segmentWidth = this.width / this.segments;
  this.sliceHeight = this.height / this.slices;

  // Cache Variables
  var x, y, v0, v1, v2, v3,
      vertex, triangle, vertices = [],
      offsetX = this.width * -0.5,
      offsetY = this.height * 0.5;

  // Add Vertices
  for (x = 0; x <= this.segments; x++) {
    vertices.push([]);
    for (y = 0; y <= this.slices; y++) {
      vertex = new FSS.Vertex(offsetX + x*this.segmentWidth, offsetY - y*this.sliceHeight);
      vertices[x].push(vertex);
      this.vertices.push(vertex);
    }
  }

  // Add Triangles
  for (x = 0; x < this.segments; x++) {
    for (y = 0; y < this.slices; y++) {
      v0 = vertices[x+0][y+0];
      v1 = vertices[x+0][y+1];
      v2 = vertices[x+1][y+0];
      v3 = vertices[x+1][y+1];
      t0 = new FSS.Triangle(v0, v1, v2);
      t1 = new FSS.Triangle(v2, v1, v3);
      this.triangles.push(t0, t1);
    }
  }
};

FSS.Plane.prototype = Object.create(FSS.Geometry.prototype);

/**
 * @class Material
 * @author Matthew Wagerfield
 */
FSS.Material = function(ambient, diffuse) {
  this.ambient = new FSS.Color(ambient || '#444444');
  this.diffuse = new FSS.Color(diffuse || '#FFFFFF');
  this.slave = new FSS.Color();
};

/**
 * @class Mesh
 * @author Matthew Wagerfield
 */
FSS.Mesh = function(geometry, material) {
  FSS.Object.call(this);
  this.geometry = geometry || new FSS.Geometry();
  this.material = material || new FSS.Material();
  this.side = FSS.FRONT;
  this.visible = true;
};

FSS.Mesh.prototype = Object.create(FSS.Object.prototype);

FSS.Mesh.prototype.update = function(lights, calculate) {
  var t,triangle, l,light, illuminance;

  // Update Geometry
  this.geometry.update();

  // Calculate the triangle colors
  if (calculate) {

    // Iterate through Triangles
    for (t = this.geometry.triangles.length - 1; t >= 0; t--) {
      triangle = this.geometry.triangles[t];

      // Reset Triangle Color
      FSS.Vector4.set(triangle.color.rgba);

      // Iterate through Lights
      for (l = lights.length - 1; l >= 0; l--) {
        light = lights[l];

        // Calculate Illuminance
        FSS.Vector3.subtractVectors(light.ray, light.position, triangle.centroid);
        FSS.Vector3.normalise(light.ray);
        illuminance = FSS.Vector3.dot(triangle.normal, light.ray);
        if (this.side === FSS.FRONT) {
          illuminance = Math.max(illuminance, 0);
        } else if (this.side === FSS.BACK) {
          illuminance = Math.abs(Math.min(illuminance, 0));
        } else if (this.side === FSS.DOUBLE) {
          illuminance = Math.max(Math.abs(illuminance), 0);
        }

        // Calculate Ambient Light
        FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, light.ambient.rgba);
        FSS.Vector4.add(triangle.color.rgba, this.material.slave.rgba);

        // Calculate Diffuse Light
        FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, light.diffuse.rgba);
        FSS.Vector4.multiplyScalar(this.material.slave.rgba, illuminance);
        FSS.Vector4.add(triangle.color.rgba, this.material.slave.rgba);
      }

      // Clamp & Format Color
      FSS.Vector4.clamp(triangle.color.rgba, 0, 1);
    }
  }
  return this;
};

/**
 * @class Scene
 * @author Matthew Wagerfield
 */
FSS.Scene = function() {
  this.meshes = [];
  this.lights = [];
};

FSS.Scene.prototype = {
  add: function(object) {
    if (object instanceof FSS.Mesh && !~this.meshes.indexOf(object)) {
      this.meshes.push(object);
    } else if (object instanceof FSS.Light && !~this.lights.indexOf(object)) {
      this.lights.push(object);
    }
    return this;
  },
  remove: function(object) {
    if (object instanceof FSS.Mesh && ~this.meshes.indexOf(object)) {
      this.meshes.splice(this.meshes.indexOf(object), 1);
    } else if (object instanceof FSS.Light && ~this.lights.indexOf(object)) {
      this.lights.splice(this.lights.indexOf(object), 1);
    }
    return this;
  }
};

/**
 * @class Renderer
 * @author Matthew Wagerfield
 */
FSS.Renderer = function() {
  this.width = 0;
  this.height = 0;
  this.halfWidth = 0;
  this.halfHeight = 0;
};

FSS.Renderer.prototype = {
  setSize: function(width, height) {
    if (this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;
    this.halfWidth = this.width * 0.5;
    this.halfHeight = this.height * 0.5;
    return this;
  },
  clear: function() {
    return this;
  },
  render: function(scene) {
    return this;
  }
};

/**
 * @class Canvas Renderer
 * @author Matthew Wagerfield
 */
FSS.CanvasRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement('canvas');
  this.element.style.display = 'block';
  this.context = this.element.getContext('2d');
  this.setSize(this.element.width, this.element.height);
};

FSS.CanvasRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.CanvasRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  this.element.width = width;
  this.element.height = height;
  this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
  return this;
};

FSS.CanvasRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
  return this;
};

FSS.CanvasRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  var m,mesh, t,triangle, color;

  // Clear Context
  this.clear();

  // Configure Context
  this.context.lineJoin = 'round';
  this.context.lineWidth = 1;

  // Update Meshes
  for (m = scene.meshes.length - 1; m >= 0; m--) {
    mesh = scene.meshes[m];
    if (mesh.visible) {
      mesh.update(scene.lights, true);

      // Render Triangles
      for (t = mesh.geometry.triangles.length - 1; t >= 0; t--) {
        triangle = mesh.geometry.triangles[t];
        color = triangle.color.format();
        this.context.beginPath();
        this.context.moveTo(triangle.a.position[0], triangle.a.position[1]);
        this.context.lineTo(triangle.b.position[0], triangle.b.position[1]);
        this.context.lineTo(triangle.c.position[0], triangle.c.position[1]);
        this.context.closePath();
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
        this.context.stroke();
        this.context.fill();
      }
    }
  }
  return this;
};

/**
 * @class WebGL Renderer
 * @author Matthew Wagerfield
 */
FSS.WebGLRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement('canvas');
  this.element.style.display = 'block';

  // Set initial vertex and light count
  this.vertices = null;
  this.lights = null;

  // Create parameters object
  var parameters = {
    preserveDrawingBuffer: false,
    premultipliedAlpha: true,
    antialias: true,
    stencil: true,
    alpha: true
  };

  // Create and configure the gl context
  this.gl = this.getContext(this.element, parameters);

  // Set the internal support flag
  this.unsupported = !this.gl;

  // Setup renderer
  if (this.unsupported) {
    return 'WebGL is not supported by your browser.';
  } else {
    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.setSize(this.element.width, this.element.height);
  }
};

FSS.WebGLRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.WebGLRenderer.prototype.getContext = function(canvas, parameters) {
  var context = false;
  try {
    if (!(context = canvas.getContext('experimental-webgl', parameters))) {
      throw 'Error creating WebGL context.';
    }
  } catch (error) {
    console.error(error);
  }
  return context;
};

FSS.WebGLRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  if (this.unsupported) return;

  // Set the size of the canvas element
  this.element.width = width;
  this.element.height = height;

  // Set the size of the gl viewport
  this.gl.viewport(0, 0, width, height);
  return this;
};

FSS.WebGLRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  if (this.unsupported) return;
  this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  return this;
};

FSS.WebGLRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  if (this.unsupported) return;
  var m,mesh, t,tl,triangle, l,light,
      attribute, uniform, buffer, data, location,
      update = false, lights = scene.lights.length,
      index, v,vl,vetex,vertices = 0;

  // Clear context
  this.clear();

  // Build the shader program
  if (this.lights !== lights) {
    this.lights = lights;
    if (this.lights > 0) {
      this.buildProgram(lights);
    } else {
      return;
    }
  }

  // Update program
  if (!!this.program) {

    // Increment vertex counter
    for (m = scene.meshes.length - 1; m >= 0; m--) {
      mesh = scene.meshes[m];
      if (mesh.geometry.dirty) update = true;
      mesh.update(scene.lights, false);
      vertices += mesh.geometry.triangles.length*3;
    }

    // Compare vertex counter
    if (update || this.vertices !== vertices) {
      this.vertices = vertices;

      // Build buffers
      for (attribute in this.program.attributes) {
        buffer = this.program.attributes[attribute];
        buffer.data = new FSS.Array(vertices*buffer.size);

        // Reset vertex index
        index = 0;

        // Update attribute buffer data
        for (m = scene.meshes.length - 1; m >= 0; m--) {
          mesh = scene.meshes[m];

          for (t = 0, tl = mesh.geometry.triangles.length; t < tl; t++) {
            triangle = mesh.geometry.triangles[t];

            for (v = 0, vl = triangle.vertices.length; v < vl; v++) {
              vertex = triangle.vertices[v];
              switch (attribute) {
                case 'side':
                  this.setBufferData(index, buffer, mesh.side);
                  break;
                case 'position':
                  this.setBufferData(index, buffer, vertex.position);
                  break;
                case 'centroid':
                  this.setBufferData(index, buffer, triangle.centroid);
                  break;
                case 'normal':
                  this.setBufferData(index, buffer, triangle.normal);
                  break;
                case 'ambient':
                  this.setBufferData(index, buffer, mesh.material.ambient.rgba);
                  break;
                case 'diffuse':
                  this.setBufferData(index, buffer, mesh.material.diffuse.rgba);
                  break;
              }
              index++;
            }
          }
        }

        // Upload attribute buffer data
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, buffer.data, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(buffer.location);
        this.gl.vertexAttribPointer(buffer.location, buffer.size, this.gl.FLOAT, false, 0, 0);
      }
    }

    // Build uniform buffers
    this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]);
    for (l = lights-1; l >= 0; l--) {
      light = scene.lights[l];
      this.setBufferData(l, this.program.uniforms.lightPosition, light.position);
      this.setBufferData(l, this.program.uniforms.lightAmbient, light.ambient.rgba);
      this.setBufferData(l, this.program.uniforms.lightDiffuse, light.diffuse.rgba);
    }

    // Update uniforms
    for (uniform in this.program.uniforms) {
      buffer = this.program.uniforms[uniform];
      location = buffer.location;
      data = buffer.data;
      switch (buffer.structure) {
        case '3f':
          this.gl.uniform3f(location, data[0], data[1], data[2]);
          break;
        case '3fv':
          this.gl.uniform3fv(location, data);
          break;
        case '4fv':
          this.gl.uniform4fv(location, data);
          break;
      }
    }
  }

  // Draw those lovely triangles
  this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices);
  return this;
};

FSS.WebGLRenderer.prototype.setBufferData = function(index, buffer, value) {
  if (FSS.Utils.isNumber(value)) {
    buffer.data[index*buffer.size] = value;
  } else {
    for (var i = value.length - 1; i >= 0; i--) {
      buffer.data[index*buffer.size+i] = value[i];
    }
  }
};

/**
 * Concepts taken from three.js WebGLRenderer
 * @see https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js
 */
FSS.WebGLRenderer.prototype.buildProgram = function(lights) {
  if (this.unsupported) return;

  // Create shader source
  var vs = FSS.WebGLRenderer.VS(lights);
  var fs = FSS.WebGLRenderer.FS(lights);

  // Derive the shader fingerprint
  var code = vs + fs;

  // Check if the program has already been compiled
  if (!!this.program && this.program.code === code) return;

  // Create the program and shaders
  var program = this.gl.createProgram();
  var vertexShader = this.buildShader(this.gl.VERTEX_SHADER, vs);
  var fragmentShader = this.buildShader(this.gl.FRAGMENT_SHADER, fs);

  // Attach an link the shader
  this.gl.attachShader(program, vertexShader);
  this.gl.attachShader(program, fragmentShader);
  this.gl.linkProgram(program);

  // Add error handling
  if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
    var error = this.gl.getError();
    var status = this.gl.getProgramParameter(program, this.gl.VALIDATE_STATUS);
    console.error('Could not initialise shader.\nVALIDATE_STATUS: '+status+'\nERROR: '+error);
    return null;
  }

  // Delete the shader
  this.gl.deleteShader(fragmentShader);
  this.gl.deleteShader(vertexShader);

  // Set the program code
  program.code = code;

  // Add the program attributes
  program.attributes = {
    side:     this.buildBuffer(program, 'attribute', 'aSide',     1, 'f' ),
    position: this.buildBuffer(program, 'attribute', 'aPosition', 3, 'v3'),
    centroid: this.buildBuffer(program, 'attribute', 'aCentroid', 3, 'v3'),
    normal:   this.buildBuffer(program, 'attribute', 'aNormal',   3, 'v3'),
    ambient:  this.buildBuffer(program, 'attribute', 'aAmbient',  4, 'v4'),
    diffuse:  this.buildBuffer(program, 'attribute', 'aDiffuse',  4, 'v4')
  };

  // Add the program uniforms
  program.uniforms = {
    resolution:    this.buildBuffer(program, 'uniform', 'uResolution',    3, '3f',  1     ),
    lightPosition: this.buildBuffer(program, 'uniform', 'uLightPosition', 3, '3fv', lights),
    lightAmbient:  this.buildBuffer(program, 'uniform', 'uLightAmbient',  4, '4fv', lights),
    lightDiffuse:  this.buildBuffer(program, 'uniform', 'uLightDiffuse',  4, '4fv', lights)
  };

  // Set the renderer program
  this.program = program;

  // Enable program
  this.gl.useProgram(this.program);

  // Return the program
  return program;
};

FSS.WebGLRenderer.prototype.buildShader = function(type, source) {
  if (this.unsupported) return;

  // Create and compile shader
  var shader = this.gl.createShader(type);
  this.gl.shaderSource(shader, source);
  this.gl.compileShader(shader);

  // Add error handling
  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
    console.error(this.gl.getShaderInfoLog(shader));
    return null;
  }

  // Return the shader
  return shader;
};

FSS.WebGLRenderer.prototype.buildBuffer = function(program, type, identifier, size, structure, count) {
  var buffer = {buffer:this.gl.createBuffer(), size:size, structure:structure, data:null};

  // Set the location
  switch (type) {
    case 'attribute':
      buffer.location = this.gl.getAttribLocation(program, identifier);
      break;
    case 'uniform':
      buffer.location = this.gl.getUniformLocation(program, identifier);
      break;
  }

  // Create the buffer if count is provided
  if (!!count) {
    buffer.data = new FSS.Array(count*size);
  }

  // Return the buffer
  return buffer;
};

FSS.WebGLRenderer.VS = function(lights) {
  var shader = [

  // Precision
  'precision mediump float;',

  // Lights
  '#define LIGHTS ' + lights,

  // Attributes
  'attribute float aSide;',
  'attribute vec3 aPosition;',
  'attribute vec3 aCentroid;',
  'attribute vec3 aNormal;',
  'attribute vec4 aAmbient;',
  'attribute vec4 aDiffuse;',

  // Uniforms
  'uniform vec3 uResolution;',
  'uniform vec3 uLightPosition[LIGHTS];',
  'uniform vec4 uLightAmbient[LIGHTS];',
  'uniform vec4 uLightDiffuse[LIGHTS];',

  // Varyings
  'varying vec4 vColor;',

  // Main
  'void main() {',

    // Create color
    'vColor = vec4(0.0);',

    // Calculate the vertex position
    'vec3 position = aPosition / uResolution * 2.0;',

    // Iterate through lights
    'for (int i = 0; i < LIGHTS; i++) {',
      'vec3 lightPosition = uLightPosition[i];',
      'vec4 lightAmbient = uLightAmbient[i];',
      'vec4 lightDiffuse = uLightDiffuse[i];',

      // Calculate illuminance
      'vec3 ray = normalize(lightPosition - aCentroid);',
      'float illuminance = dot(aNormal, ray);',
      'if (aSide == 0.0) {',
        'illuminance = max(illuminance, 0.0);',
      '} else if (aSide == 1.0) {',
        'illuminance = abs(min(illuminance, 0.0));',
      '} else if (aSide == 2.0) {',
        'illuminance = max(abs(illuminance), 0.0);',
      '}',

      // Calculate ambient light
      'vColor += aAmbient * lightAmbient;',

      // Calculate diffuse light
      'vColor += aDiffuse * lightDiffuse * illuminance;',
    '}',

    // Clamp color
    'vColor = clamp(vColor, 0.0, 1.0);',

    // Set gl_Position
    'gl_Position = vec4(position, 1.0);',

  '}'

  // Return the shader
  ].join('\n');
  return shader;
};

FSS.WebGLRenderer.FS = function(lights) {
  var shader = [

  // Precision
  'precision mediump float;',

  // Varyings
  'varying vec4 vColor;',

  // Main
  'void main() {',

    // Set gl_FragColor
    'gl_FragColor = vColor;',

  '}'

  // Return the shader
  ].join('\n');
  return shader;
};

/**
 * @class SVG Renderer
 * @author Matthew Wagerfield
 */
FSS.SVGRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElementNS(FSS.SVGNS, 'svg');
  this.element.setAttribute('xmlns', FSS.SVGNS);
  this.element.setAttribute('version', '1.1');
  this.element.style.display = 'block';
  this.setSize(300, 150);
};

FSS.SVGRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.SVGRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  this.element.setAttribute('width', width);
  this.element.setAttribute('height', height);
  return this;
};

FSS.SVGRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  for (var i = this.element.childNodes.length - 1; i >= 0; i--) {
    this.element.removeChild(this.element.childNodes[i]);
  }
  return this;
};

FSS.SVGRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  var m,mesh, t,triangle, points, style;

  // Update Meshes
  for (m = scene.meshes.length - 1; m >= 0; m--) {
    mesh = scene.meshes[m];
    if (mesh.visible) {
      mesh.update(scene.lights, true);

      // Render Triangles
      for (t = mesh.geometry.triangles.length - 1; t >= 0; t--) {
        triangle = mesh.geometry.triangles[t];
        if (triangle.polygon.parentNode !== this.element) {
          this.element.appendChild(triangle.polygon);
        }
        points  = this.formatPoint(triangle.a)+' ';
        points += this.formatPoint(triangle.b)+' ';
        points += this.formatPoint(triangle.c);
        style = this.formatStyle(triangle.color.format());
        triangle.polygon.setAttributeNS(null, 'points', points);
        triangle.polygon.setAttributeNS(null, 'style', style);
      }
    }
  }
  return this;
};

FSS.SVGRenderer.prototype.formatPoint = function(vertex) {
  return (this.halfWidth+vertex.position[0])+','+(this.halfHeight-vertex.position[1]);
};

FSS.SVGRenderer.prototype.formatStyle = function(color) {
  var style = 'fill:'+color+';';
  style += 'stroke:'+color+';';
  return style;
};

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AILabel = factory());
}(this, (function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var runtime = {exports: {}};

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (module) {
  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
      return this;
    });

    define(Gp, "toString", function() {
      return "[object Generator]";
    });

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
  }(runtime));

  var regenerator = runtime.exports;

  var events$1 = {exports: {}};

  var R = typeof Reflect === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };

  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target)
        .concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }

  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }

  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events$1.exports = EventEmitter;
  events$1.exports.once = once;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }

  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });

  EventEmitter.init = function() {

    if (this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };

  function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };

  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = (type === 'error');

    var events = this._events;
    if (events !== undefined)
      doError = (doError && events.error === undefined);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      }
      // At least give some kind of context to the user
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    var handler = events[type];

    if (handler === undefined)
      return false;

    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    checkListener(listener);

    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener !== undefined) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (existing === undefined) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
        // If we've already got an array, just append.
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

      // Check for listener leak
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        // No error code for this since it is a Warning
        // eslint-disable-next-line no-restricted-syntax
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + String(type) + ' listeners ' +
                            'added. Use emitter.setMaxListeners() to ' +
                            'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        checkListener(listener);

        events = this._events;
        if (events === undefined)
          return this;

        list = events[type];
        if (list === undefined)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener !== undefined)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (events === undefined)
          return this;

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (events === undefined)
      return [];

    var evlistener = events[type];
    if (evlistener === undefined)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ?
      unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events !== undefined) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  function once(emitter, name) {
    return new Promise(function (resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }

      function resolver() {
        if (typeof emitter.removeListener === 'function') {
          emitter.removeListener('error', errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== 'error') {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }

  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
      eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
  }

  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === 'function') {
      // EventTarget does not have `error` event semantics like Node
      // EventEmitters, we do not listen for `error` events here.
      emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }

  var events = events$1.exports;

  /*!
   * hotkeys-js v3.8.7
   * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
   * 
   * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
   * http://jaywcjlove.github.io/hotkeys
   * 
   * Licensed under the MIT license.
   */

  var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false; // 绑定事件

  function addEvent(object, event, method) {
    if (object.addEventListener) {
      object.addEventListener(event, method, false);
    } else if (object.attachEvent) {
      object.attachEvent("on".concat(event), function () {
        method(window.event);
      });
    }
  } // 修饰键转换成对应的键码


  function getMods(modifier, key) {
    var mods = key.slice(0, key.length - 1);

    for (var i = 0; i < mods.length; i++) {
      mods[i] = modifier[mods[i].toLowerCase()];
    }

    return mods;
  } // 处理传的key字符串转换成数组


  function getKeys(key) {
    if (typeof key !== 'string') key = '';
    key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等

    var keys = key.split(','); // 同时设置多个快捷键，以','分割

    var index = keys.lastIndexOf(''); // 快捷键可能包含','，需特殊处理

    for (; index >= 0;) {
      keys[index - 1] += ',';
      keys.splice(index, 1);
      index = keys.lastIndexOf('');
    }

    return keys;
  } // 比较修饰键的数组


  function compareArray(a1, a2) {
    var arr1 = a1.length >= a2.length ? a1 : a2;
    var arr2 = a1.length >= a2.length ? a2 : a1;
    var isIndex = true;

    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
    }

    return isIndex;
  }

  var _keyMap = {
    backspace: 8,
    tab: 9,
    clear: 12,
    enter: 13,
    return: 13,
    esc: 27,
    escape: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 46,
    delete: 46,
    ins: 45,
    insert: 45,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    capslock: 20,
    num_0: 96,
    num_1: 97,
    num_2: 98,
    num_3: 99,
    num_4: 100,
    num_5: 101,
    num_6: 102,
    num_7: 103,
    num_8: 104,
    num_9: 105,
    num_multiply: 106,
    num_add: 107,
    num_enter: 108,
    num_subtract: 109,
    num_decimal: 110,
    num_divide: 111,
    '⇪': 20,
    ',': 188,
    '.': 190,
    '/': 191,
    '`': 192,
    '-': isff ? 173 : 189,
    '=': isff ? 61 : 187,
    ';': isff ? 59 : 186,
    '\'': 222,
    '[': 219,
    ']': 221,
    '\\': 220
  }; // Modifier Keys

  var _modifier = {
    // shiftKey
    '⇧': 16,
    shift: 16,
    // altKey
    '⌥': 18,
    alt: 18,
    option: 18,
    // ctrlKey
    '⌃': 17,
    ctrl: 17,
    control: 17,
    // metaKey
    '⌘': 91,
    cmd: 91,
    command: 91
  };
  var modifierMap = {
    16: 'shiftKey',
    18: 'altKey',
    17: 'ctrlKey',
    91: 'metaKey',
    shiftKey: 16,
    ctrlKey: 17,
    altKey: 18,
    metaKey: 91
  };
  var _mods = {
    16: false,
    18: false,
    17: false,
    91: false
  };
  var _handlers = {}; // F1~F12 special key

  for (var k = 1; k < 20; k++) {
    _keyMap["f".concat(k)] = 111 + k;
  }

  var _downKeys = []; // 记录摁下的绑定键

  var _scope = 'all'; // 默认热键范围

  var elementHasBindEvent = []; // 已绑定事件的节点记录
  // 返回键码

  var code = function code(x) {
    return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
  }; // 设置获取当前范围（默认为'所有'）


  function setScope(scope) {
    _scope = scope || 'all';
  } // 获取当前范围


  function getScope() {
    return _scope || 'all';
  } // 获取摁下绑定键的键值


  function getPressedKeyCodes() {
    return _downKeys.slice(0);
  } // 表单控件控件判断 返回 Boolean
  // hotkey is effective only when filter return true


  function filter$1(event) {
    var target = event.target || event.srcElement;
    var tagName = target.tagName;
    var flag = true; // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>

    if (target.isContentEditable || (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') && !target.readOnly) {
      flag = false;
    }

    return flag;
  } // 判断摁下的键是否为某个键，返回true或者false


  function isPressed(keyCode) {
    if (typeof keyCode === 'string') {
      keyCode = code(keyCode); // 转换成键码
    }

    return _downKeys.indexOf(keyCode) !== -1;
  } // 循环删除handlers中的所有 scope(范围)


  function deleteScope(scope, newScope) {
    var handlers;
    var i; // 没有指定scope，获取scope

    if (!scope) scope = getScope();

    for (var key in _handlers) {
      if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
        handlers = _handlers[key];

        for (i = 0; i < handlers.length;) {
          if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
        }
      }
    } // 如果scope被删除，将scope重置为all


    if (getScope() === scope) setScope(newScope || 'all');
  } // 清除修饰键


  function clearModifier(event) {
    var key = event.keyCode || event.which || event.charCode;

    var i = _downKeys.indexOf(key); // 从列表中清除按压过的键


    if (i >= 0) {
      _downKeys.splice(i, 1);
    } // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题


    if (event.key && event.key.toLowerCase() === 'meta') {
      _downKeys.splice(0, _downKeys.length);
    } // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除


    if (key === 93 || key === 224) key = 91;

    if (key in _mods) {
      _mods[key] = false; // 将修饰键重置为false

      for (var k in _modifier) {
        if (_modifier[k] === key) hotkeys[k] = false;
      }
    }
  }

  function unbind(keysInfo) {
    // unbind(), unbind all keys
    if (!keysInfo) {
      Object.keys(_handlers).forEach(function (key) {
        return delete _handlers[key];
      });
    } else if (Array.isArray(keysInfo)) {
      // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
      keysInfo.forEach(function (info) {
        if (info.key) eachUnbind(info);
      });
    } else if (typeof keysInfo === 'object') {
      // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
      if (keysInfo.key) eachUnbind(keysInfo);
    } else if (typeof keysInfo === 'string') {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // support old method
      // eslint-disable-line
      var scope = args[0],
          method = args[1];

      if (typeof scope === 'function') {
        method = scope;
        scope = '';
      }

      eachUnbind({
        key: keysInfo,
        scope: scope,
        method: method,
        splitKey: '+'
      });
    }
  } // 解除绑定某个范围的快捷键


  var eachUnbind = function eachUnbind(_ref) {
    var key = _ref.key,
        scope = _ref.scope,
        method = _ref.method,
        _ref$splitKey = _ref.splitKey,
        splitKey = _ref$splitKey === void 0 ? '+' : _ref$splitKey;
    var multipleKeys = getKeys(key);
    multipleKeys.forEach(function (originKey) {
      var unbindKeys = originKey.split(splitKey);
      var len = unbindKeys.length;
      var lastKey = unbindKeys[len - 1];
      var keyCode = lastKey === '*' ? '*' : code(lastKey);
      if (!_handlers[keyCode]) return; // 判断是否传入范围，没有就获取范围

      if (!scope) scope = getScope();
      var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
      _handlers[keyCode] = _handlers[keyCode].map(function (record) {
        // 通过函数判断，是否解除绑定，函数相等直接返回
        var isMatchingMethod = method ? record.method === method : true;

        if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
          return {};
        }

        return record;
      });
    });
  }; // 对监听对应快捷键的回调函数进行处理


  function eventHandler(event, handler, scope) {
    var modifiersMatch; // 看它是否在当前范围

    if (handler.scope === scope || handler.scope === 'all') {
      // 检查是否匹配修饰符（如果有返回true）
      modifiersMatch = handler.mods.length > 0;

      for (var y in _mods) {
        if (Object.prototype.hasOwnProperty.call(_mods, y)) {
          if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
            modifiersMatch = false;
          }
        }
      } // 调用处理程序，如果是修饰键不做处理


      if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
        if (handler.method(event, handler) === false) {
          if (event.preventDefault) event.preventDefault();else event.returnValue = false;
          if (event.stopPropagation) event.stopPropagation();
          if (event.cancelBubble) event.cancelBubble = true;
        }
      }
    }
  } // 处理keydown事件


  function dispatch(event) {
    var asterisk = _handlers['*'];
    var key = event.keyCode || event.which || event.charCode; // 表单控件过滤 默认表单控件不触发快捷键

    if (!hotkeys.filter.call(this, event)) return; // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
    // Webkit左右 command 键值不一样

    if (key === 93 || key === 224) key = 91;
    /**
     * Collect bound keys
     * If an Input Method Editor is processing key input and the event is keydown, return 229.
     * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
     * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
     */

    if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
    /**
     * Jest test cases are required.
     * ===============================
     */

    ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (keyName) {
      var keyNum = modifierMap[keyName];

      if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
        _downKeys.push(keyNum);
      } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
        _downKeys.splice(_downKeys.indexOf(keyNum), 1);
      } else if (keyName === 'metaKey' && event[keyName] && _downKeys.length === 3) {
        /**
         * Fix if Command is pressed:
         * ===============================
         */
        if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
          _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
        }
      }
    });
    /**
     * -------------------------------
     */

    if (key in _mods) {
      _mods[key] = true; // 将特殊字符的key注册到 hotkeys 上

      for (var k in _modifier) {
        if (_modifier[k] === key) hotkeys[k] = true;
      }

      if (!asterisk) return;
    } // 将 modifierMap 里面的修饰键绑定到 event 中


    for (var e in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, e)) {
        _mods[e] = event[modifierMap[e]];
      }
    }
    /**
     * https://github.com/jaywcjlove/hotkeys/pull/129
     * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
     * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
     * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
     */


    if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
      if (_downKeys.indexOf(17) === -1) {
        _downKeys.push(17);
      }

      if (_downKeys.indexOf(18) === -1) {
        _downKeys.push(18);
      }

      _mods[17] = true;
      _mods[18] = true;
    } // 获取范围 默认为 `all`


    var scope = getScope(); // 对任何快捷键都需要做的处理

    if (asterisk) {
      for (var i = 0; i < asterisk.length; i++) {
        if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
          eventHandler(event, asterisk[i], scope);
        }
      }
    } // key 不在 _handlers 中返回


    if (!(key in _handlers)) return;

    for (var _i = 0; _i < _handlers[key].length; _i++) {
      if (event.type === 'keydown' && _handlers[key][_i].keydown || event.type === 'keyup' && _handlers[key][_i].keyup) {
        if (_handlers[key][_i].key) {
          var record = _handlers[key][_i];
          var splitKey = record.splitKey;
          var keyShortcut = record.key.split(splitKey);
          var _downKeysCurrent = []; // 记录当前按键键值

          for (var a = 0; a < keyShortcut.length; a++) {
            _downKeysCurrent.push(code(keyShortcut[a]));
          }

          if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
            // 找到处理内容
            eventHandler(event, record, scope);
          }
        }
      }
    }
  } // 判断 element 是否已经绑定事件


  function isElementBind(element) {
    return elementHasBindEvent.indexOf(element) > -1;
  }

  function hotkeys(key, option, method) {
    _downKeys = [];
    var keys = getKeys(key); // 需要处理的快捷键列表

    var mods = [];
    var scope = 'all'; // scope默认为all，所有范围都有效

    var element = document; // 快捷键事件绑定节点

    var i = 0;
    var keyup = false;
    var keydown = true;
    var splitKey = '+'; // 对为设定范围的判断

    if (method === undefined && typeof option === 'function') {
      method = option;
    }

    if (Object.prototype.toString.call(option) === '[object Object]') {
      if (option.scope) scope = option.scope; // eslint-disable-line

      if (option.element) element = option.element; // eslint-disable-line

      if (option.keyup) keyup = option.keyup; // eslint-disable-line

      if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line

      if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
    }

    if (typeof option === 'string') scope = option; // 对于每个快捷键进行处理

    for (; i < keys.length; i++) {
      key = keys[i].split(splitKey); // 按键列表

      mods = []; // 如果是组合快捷键取得组合快捷键

      if (key.length > 1) mods = getMods(_modifier, key); // 将非修饰键转化为键码

      key = key[key.length - 1];
      key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键
      // 判断key是否在_handlers中，不在就赋一个空数组

      if (!(key in _handlers)) _handlers[key] = [];

      _handlers[key].push({
        keyup: keyup,
        keydown: keydown,
        scope: scope,
        mods: mods,
        shortcut: keys[i],
        method: method,
        key: keys[i],
        splitKey: splitKey
      });
    } // 在全局document上设置快捷键


    if (typeof element !== 'undefined' && !isElementBind(element) && window) {
      elementHasBindEvent.push(element);
      addEvent(element, 'keydown', function (e) {
        dispatch(e);
      });
      addEvent(window, 'focus', function () {
        _downKeys = [];
      });
      addEvent(element, 'keyup', function (e) {
        dispatch(e);
        clearModifier(e);
      });
    }
  }

  var _api = {
    setScope: setScope,
    getScope: getScope,
    deleteScope: deleteScope,
    getPressedKeyCodes: getPressedKeyCodes,
    isPressed: isPressed,
    filter: filter$1,
    unbind: unbind
  };

  for (var a in _api) {
    if (Object.prototype.hasOwnProperty.call(_api, a)) {
      hotkeys[a] = _api[a];
    }
  }

  if (typeof window !== 'undefined') {
    var _hotkeys = window.hotkeys;

    hotkeys.noConflict = function (deep) {
      if (deep && window.hotkeys === hotkeys) {
        window.hotkeys = _hotkeys;
      }

      return hotkeys;
    };

    window.hotkeys = hotkeys;
  }

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$8;

  var root$7 = _root;

  /** Built-in value references. */
  var Symbol$6 = root$7.Symbol;

  var _Symbol = Symbol$6;

  var Symbol$5 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$f = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$f.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$e = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$e.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$4 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$8(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$8;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$8(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$8;

  var baseGetTag$7 = _baseGetTag,
      isObject$7 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$2(value) {
    if (!isObject$7(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$7(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$2;

  var root$6 = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__'];

  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource$2;

  var isFunction$1 = isFunction_1,
      isMasked = _isMasked,
      isObject$6 = isObject_1,
      toSource$1 = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$d = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$b).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$6(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$7;

  var getNative$6 = _getNative;

  var defineProperty$2 = (function() {
    try {
      var func = getNative$6(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty$2;

  var defineProperty$1 = _defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue$2;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$4(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq$4;

  var baseAssignValue$1 = _baseAssignValue,
      eq$3 = eq_1;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq$3(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue$1(object, key, value);
    }
  }

  var _assignValue = assignValue$3;

  var assignValue$2 = _assignValue,
      baseAssignValue = _baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$5(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$2(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject$5;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$4(value) {
    return value;
  }

  var identity_1 = identity$4;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply$1;

  var apply = _apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest$1(func, start, transform) {
    start = nativeMax$2(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax$2(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest$1;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant$1;

  var constant = constant_1,
      defineProperty = _defineProperty,
      identity$3 = identity_1;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString$1 = !defineProperty ? identity$3 : function(func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString$1;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut$1(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut$1;

  var baseSetToString = _baseSetToString,
      shortOut = _shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString$1 = shortOut(baseSetToString);

  var _setToString = setToString$1;

  var identity$2 = identity_1,
      overRest = _overRest,
      setToString = _setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity$2), func + '');
  }

  var _baseRest = baseRest$1;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$3(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength$3;

  var isFunction = isFunction_1,
      isLength$2 = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$8(value) {
    return value != null && isLength$2(value.length) && !isFunction(value);
  }

  var isArrayLike_1 = isArrayLike$8;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$3(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex$3;

  var eq$2 = eq_1,
      isArrayLike$7 = isArrayLike_1,
      isIndex$2 = _isIndex,
      isObject$5 = isObject_1;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall$1(value, index, object) {
    if (!isObject$5(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike$7(object) && isIndex$2(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq$2(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall$1;

  var baseRest = _baseRest,
      isIterateeCall = _isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner$1(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner$1;

  /** Used for built-in method references. */

  var objectProto$b = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$4(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

    return value === proto;
  }

  var _isPrototype = isPrototype$4;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$a(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$a;

  var baseGetTag$6 = _baseGetTag,
      isObjectLike$9 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$9(value) && baseGetTag$6(value) == argsTag$3;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$8 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike$8(value) && hasOwnProperty$9.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  var isArguments_1 = isArguments$2;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$d = Array.isArray;

  var isArray_1 = isArray$d;

  var isBuffer$3 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
  }(isBuffer$3, isBuffer$3.exports));

  var baseGetTag$5 = _baseGetTag,
      isLength$1 = isLength_1,
      isObjectLike$7 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$4 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$5 = '[object Map]',
      numberTag$4 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$4 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
  typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$4] =
  typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
  typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$5] = typedArrayTags[numberTag$4] =
  typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
  typedArrayTags[setTag$5] = typedArrayTags[stringTag$4] =
  typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike$7(value) &&
      isLength$1(value.length) && !!typedArrayTags[baseGetTag$5(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$3(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$3;

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  }(_nodeUtil, _nodeUtil.exports));

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary$2 = _baseUnary,
      nodeUtil$2 = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray_1 = isTypedArray$2;

  var baseTimes = _baseTimes,
      isArguments$1 = isArguments_1,
      isArray$c = isArray_1,
      isBuffer$2 = isBuffer$3.exports,
      isIndex$1 = _isIndex,
      isTypedArray$1 = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$c(value),
        isArg = !isArr && isArguments$1(value),
        isBuff = !isArr && !isArg && isBuffer$2(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$8.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex$1(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$2;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object);

  var _nativeKeys = nativeKeys$1;

  var isPrototype$3 = _isPrototype,
      nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype$3(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys$1;

  var arrayLikeKeys$1 = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$6 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$8(object) {
    return isArrayLike$6(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }

  var keys_1 = keys$8;

  var assignValue$1 = _assignValue,
      copyObject$4 = _copyObject,
      createAssigner = _createAssigner,
      isArrayLike$5 = isArrayLike_1,
      isPrototype$2 = _isPrototype,
      keys$7 = keys_1;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  var assign = createAssigner(function(object, source) {
    if (isPrototype$2(source) || isArrayLike$5(source)) {
      copyObject$4(source, keys$7(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty$6.call(source, key)) {
        assignValue$1(object, key, source[key]);
      }
    }
  });

  var assign_1 = assign;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap$3(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap$3;

  var baseGetTag$4 = _baseGetTag,
      isObjectLike$6 = isObjectLike_1;

  /** `Object#toString` result references. */
  var symbolTag$3 = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$4(value) {
    return typeof value == 'symbol' ||
      (isObjectLike$6(value) && baseGetTag$4(value) == symbolTag$3);
  }

  var isSymbol_1 = isSymbol$4;

  var Symbol$3 = _Symbol,
      arrayMap$2 = _arrayMap,
      isArray$b = isArray_1,
      isSymbol$3 = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$3 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : undefined,
      symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString$1(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$b(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap$2(value, baseToString$1) + '';
    }
    if (isSymbol$3(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
  }

  var _baseToString = baseToString$1;

  var baseToString = _baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$2(value) {
    return value == null ? '' : baseToString(value);
  }

  var toString_1 = toString$2;

  var toString$1 = toString_1;

  /** Used to generate unique IDs. */
  var idCounter = 0;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString$1(prefix) + id;
  }

  var uniqueId_1 = uniqueId;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$2(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach$2;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor$1;

  var createBaseFor = _createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor$1 = createBaseFor();

  var _baseFor = baseFor$1;

  var baseFor = _baseFor,
      keys$6 = keys_1;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn$1(object, iteratee) {
    return object && baseFor(object, iteratee, keys$6);
  }

  var _baseForOwn = baseForOwn$1;

  var isArrayLike$4 = isArrayLike_1;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike$4(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach$1;

  var baseForOwn = _baseForOwn,
      createBaseEach = _createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach$3 = createBaseEach(baseForOwn);

  var _baseEach = baseEach$3;

  var identity$1 = identity_1;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction$1(value) {
    return typeof value == 'function' ? value : identity$1;
  }

  var _castFunction = castFunction$1;

  var arrayEach$1 = _arrayEach,
      baseEach$2 = _baseEach,
      castFunction = _castFunction,
      isArray$a = isArray_1;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray$a(collection) ? arrayEach$1 : baseEach$2;
    return func(collection, castFunction(iteratee));
  }

  var forEach_1 = forEach;

  var isArray$9 = isArray_1,
      isSymbol$2 = isSymbol_1;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey$3(value, object) {
    if (isArray$9(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol$2(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey$3;

  var getNative$5 = _getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate$4 = getNative$5(Object, 'create');

  var _nativeCreate = nativeCreate$4;

  var nativeCreate$3 = _nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear$1;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete$1;

  var nativeCreate$2 = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet$1;

  var nativeCreate$1 = _nativeCreate;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
  }

  var _hashHas = hashHas$1;

  var nativeCreate = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet$1;

  var hashClear = _hashClear,
      hashDelete = _hashDelete,
      hashGet = _hashGet,
      hashHas = _hashHas,
      hashSet = _hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;

  var _Hash = Hash$1;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear$1;

  var eq$1 = eq_1;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf$4;

  var assocIndexOf$3 = _assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
        index = assocIndexOf$3(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete$1;

  var assocIndexOf$2 = _assocIndexOf;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
        index = assocIndexOf$2(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet$1;

  var assocIndexOf$1 = _assocIndexOf;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas$1;

  var assocIndexOf = _assocIndexOf;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet$1;

  var listCacheClear = _listCacheClear,
      listCacheDelete = _listCacheDelete,
      listCacheGet = _listCacheGet,
      listCacheHas = _listCacheHas,
      listCacheSet = _listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$4(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;

  var _ListCache = ListCache$4;

  var getNative$4 = _getNative,
      root$5 = _root;

  /* Built-in method references that are verified to be native. */
  var Map$4 = getNative$4(root$5, 'Map');

  var _Map = Map$4;

  var Hash = _Hash,
      ListCache$3 = _ListCache,
      Map$3 = _Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$3 || ListCache$3),
      'string': new Hash
    };
  }

  var _mapCacheClear = mapCacheClear$1;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable$1;

  var isKeyable = _isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData$4;

  var getMapData$3 = _getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete$1;

  var getMapData$2 = _getMapData;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet$1;

  var getMapData$1 = _getMapData;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas$1;

  var getMapData = _getMapData;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet$1;

  var mapCacheClear = _mapCacheClear,
      mapCacheDelete = _mapCacheDelete,
      mapCacheGet = _mapCacheGet,
      mapCacheHas = _mapCacheHas,
      mapCacheSet = _mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$3(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache$3.prototype.clear = mapCacheClear;
  MapCache$3.prototype['delete'] = mapCacheDelete;
  MapCache$3.prototype.get = mapCacheGet;
  MapCache$3.prototype.has = mapCacheHas;
  MapCache$3.prototype.set = mapCacheSet;

  var _MapCache = MapCache$3;

  var MapCache$2 = _MapCache;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize$1(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$2);
    return memoized;
  }

  // Expose `MapCache`.
  memoize$1.Cache = MapCache$2;

  var memoize_1 = memoize$1;

  var memoize = memoize_1;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped$1(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped$1;

  var memoizeCapped = _memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath$1;

  var isArray$8 = isArray_1,
      isKey$2 = _isKey,
      stringToPath = _stringToPath,
      toString = toString_1;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath$2(value, object) {
    if (isArray$8(value)) {
      return value;
    }
    return isKey$2(value, object) ? [value] : stringToPath(toString(value));
  }

  var _castPath = castPath$2;

  var isSymbol$1 = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey$4(value) {
    if (typeof value == 'string' || isSymbol$1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
  }

  var _toKey = toKey$4;

  var castPath$1 = _castPath,
      toKey$3 = _toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet$2(object, path) {
    path = castPath$1(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey$3(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet$2;

  var baseGet$1 = _baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet$1(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get$1;

  var baseGetTag$3 = _baseGetTag,
      isObjectLike$5 = isObjectLike_1;

  /** `Object#toString` result references. */
  var numberTag$3 = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike$5(value) && baseGetTag$3(value) == numberTag$3);
  }

  var isNumber_1 = isNumber;

  var ListCache$2 = _ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear$1() {
    this.__data__ = new ListCache$2;
    this.size = 0;
  }

  var _stackClear = stackClear$1;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete$1;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet$1;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas$1;

  var ListCache$1 = _ListCache,
      Map$2 = _Map,
      MapCache$1 = _MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$1 = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet$1;

  var ListCache = _ListCache,
      stackClear = _stackClear,
      stackDelete = _stackDelete,
      stackGet = _stackGet,
      stackHas = _stackHas,
      stackSet = _stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack$3(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack$3.prototype.clear = stackClear;
  Stack$3.prototype['delete'] = stackDelete;
  Stack$3.prototype.get = stackGet;
  Stack$3.prototype.has = stackHas;
  Stack$3.prototype.set = stackSet;

  var _Stack = Stack$3;

  var copyObject$3 = _copyObject,
      keys$5 = keys_1;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$5(source), object);
  }

  var _baseAssign = baseAssign$1;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn$1;

  var isObject$4 = isObject_1,
      isPrototype$1 = _isPrototype,
      nativeKeysIn = _nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject$4(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeysIn = _baseKeysIn,
      isArrayLike$3 = isArrayLike_1;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$3(object) {
    return isArrayLike$3(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var keysIn_1 = keysIn$3;

  var copyObject$2 = _copyObject,
      keysIn$2 = keysIn_1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }

  var _baseAssignIn = baseAssignIn$1;

  var _cloneBuffer = {exports: {}};

  (function (module, exports) {
  var root = _root;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  }(_cloneBuffer, _cloneBuffer.exports));

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray$1;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$2(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter$2;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return [];
  }

  var stubArray_1 = stubArray$2;

  var arrayFilter$1 = _arrayFilter,
      stubArray$1 = stubArray_1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter$1(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols$3;

  var copyObject$1 = _copyObject,
      getSymbols$2 = _getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols$1(source, object) {
    return copyObject$1(source, getSymbols$2(source), object);
  }

  var _copySymbols = copySymbols$1;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$2(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush$2;

  var overArg = _overArg;

  /** Built-in value references. */
  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype$2;

  var arrayPush$1 = _arrayPush,
      getPrototype$1 = _getPrototype,
      getSymbols$1 = _getSymbols,
      stubArray = stubArray_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush$1(result, getSymbols$1(object));
      object = getPrototype$1(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn$2;

  var copyObject = _copyObject,
      getSymbolsIn$1 = _getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn$1(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }

  var _copySymbolsIn = copySymbolsIn$1;

  var arrayPush = _arrayPush,
      isArray$7 = isArray_1;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$7(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys$2;

  var baseGetAllKeys$1 = _baseGetAllKeys,
      getSymbols = _getSymbols,
      keys$4 = keys_1;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys$2(object) {
    return baseGetAllKeys$1(object, keys$4, getSymbols);
  }

  var _getAllKeys = getAllKeys$2;

  var baseGetAllKeys = _baseGetAllKeys,
      getSymbolsIn = _getSymbolsIn,
      keysIn$1 = keysIn_1;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn$1;

  var getNative$3 = _getNative,
      root$4 = _root;

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$3(root$4, 'DataView');

  var _DataView = DataView$1;

  var getNative$2 = _getNative,
      root$3 = _root;

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$2(root$3, 'Promise');

  var _Promise = Promise$2;

  var getNative$1 = _getNative,
      root$2 = _root;

  /* Built-in method references that are verified to be native. */
  var Set$2 = getNative$1(root$2, 'Set');

  var _Set = Set$2;

  var getNative = _getNative,
      root$1 = _root;

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root$1, 'WeakMap');

  var _WeakMap = WeakMap$1;

  var DataView = _DataView,
      Map$1 = _Map,
      Promise$1 = _Promise,
      Set$1 = _Set,
      WeakMap = _WeakMap,
      baseGetTag$2 = _baseGetTag,
      toSource = _toSource;

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$4 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$3 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag$4 = baseGetTag$2;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
      (Map$1 && getTag$4(new Map$1) != mapTag$4) ||
      (Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag) ||
      (Set$1 && getTag$4(new Set$1) != setTag$4) ||
      (WeakMap && getTag$4(new WeakMap) != weakMapTag$1)) {
    getTag$4 = function(value) {
      var result = baseGetTag$2(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$3;
          case mapCtorString: return mapTag$4;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$4;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag$4;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray$1(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray$1;

  var root = _root;

  /** Built-in value references. */
  var Uint8Array$2 = root.Uint8Array;

  var _Uint8Array = Uint8Array$2;

  var Uint8Array$1 = _Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer$3;

  var cloneArrayBuffer$2 = _cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView$1;

  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp$1;

  var Symbol$2 = _Symbol;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
      symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol$1(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol$1;

  var cloneArrayBuffer$1 = _cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray$1;

  var cloneArrayBuffer = _cloneArrayBuffer,
      cloneDataView = _cloneDataView,
      cloneRegExp = _cloneRegExp,
      cloneSymbol = _cloneSymbol,
      cloneTypedArray = _cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$3 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      mapTag$3 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$3 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object);

      case boolTag$3:
      case dateTag$2:
        return new Ctor(+object);

      case dataViewTag$2:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$3:
        return new Ctor;

      case numberTag$2:
      case stringTag$3:
        return new Ctor(object);

      case regexpTag$2:
        return cloneRegExp(object);

      case setTag$3:
        return new Ctor;

      case symbolTag$2:
        return cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag$1;

  var isObject$3 = isObject_1;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate$1 = (function() {
    function object() {}
    return function(proto) {
      if (!isObject$3(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate$1;

  var baseCreate = _baseCreate,
      getPrototype = _getPrototype,
      isPrototype = _isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject$1(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject$1;

  var getTag$3 = _getTag,
      isObjectLike$4 = isObjectLike_1;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap$1(value) {
    return isObjectLike$4(value) && getTag$3(value) == mapTag$2;
  }

  var _baseIsMap = baseIsMap$1;

  var baseIsMap = _baseIsMap,
      baseUnary$1 = _baseUnary,
      nodeUtil$1 = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;

  var isMap_1 = isMap$1;

  var getTag$2 = _getTag,
      isObjectLike$3 = isObjectLike_1;

  /** `Object#toString` result references. */
  var setTag$2 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet$1(value) {
    return isObjectLike$3(value) && getTag$2(value) == setTag$2;
  }

  var _baseIsSet = baseIsSet$1;

  var baseIsSet = _baseIsSet,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  var isSet_1 = isSet$1;

  var Stack$2 = _Stack,
      arrayEach = _arrayEach,
      assignValue = _assignValue,
      baseAssign = _baseAssign,
      baseAssignIn = _baseAssignIn,
      cloneBuffer = _cloneBuffer.exports,
      copyArray = _copyArray,
      copySymbols = _copySymbols,
      copySymbolsIn = _copySymbolsIn,
      getAllKeys$1 = _getAllKeys,
      getAllKeysIn = _getAllKeysIn,
      getTag$1 = _getTag,
      initCloneArray = _initCloneArray,
      initCloneByTag = _initCloneByTag,
      initCloneObject = _initCloneObject,
      isArray$6 = isArray_1,
      isBuffer$1 = isBuffer$3.exports,
      isMap = isMap_1,
      isObject$2 = isObject_1,
      isSet = isSet_1,
      keys$3 = keys_1,
      keysIn = keysIn_1;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag$1 = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$1 = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
  cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
  cloneableTags[boolTag$2] = cloneableTags[dateTag$1] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
  cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
  cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
  cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject$2(value)) {
      return value;
    }
    var isArr = isArray$6(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer$1(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack$2);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys$1)
      : (isFlat ? keysIn : keys$3);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone$1;

  var baseClone = _baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  var cloneDeep_1 = cloneDeep;

  var baseEach$1 = _baseEach;

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function baseFilter$1(collection, predicate) {
    var result = [];
    baseEach$1(collection, function(value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  var _baseFilter = baseFilter$1;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  var _setCacheAdd = setCacheAdd$1;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */

  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas$1;

  var MapCache = _MapCache,
      setCacheAdd = _setCacheAdd,
      setCacheHas = _setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache$2(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
  SetCache$2.prototype.has = setCacheHas;

  var _SetCache = SetCache$2;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */

  function arraySome$1(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome$1;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function cacheHas$2(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas$2;

  var SetCache$1 = _SetCache,
      arraySome = _arraySome,
      cacheHas$1 = _cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache$1 : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas$1(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays$2;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */

  function mapToArray$1(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray$1;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */

  function setToArray$3(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray$3;

  var Symbol$1 = _Symbol,
      Uint8Array = _Uint8Array,
      eq = eq_1,
      equalArrays$1 = _equalArrays,
      mapToArray = _mapToArray,
      setToArray$2 = _setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag$1:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag$1:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
        convert || (convert = setToArray$2);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag$1;

  var getAllKeys = _getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects$1;

  var Stack$1 = _Stack,
      equalArrays = _equalArrays,
      equalByTag = _equalByTag,
      equalObjects = _equalObjects,
      getTag = _getTag,
      isArray$5 = isArray_1,
      isBuffer = isBuffer$3.exports,
      isTypedArray = isTypedArray_1;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$5(object),
        othIsArr = isArray$5(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack$1);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack$1);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack$1);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep$1;

  var baseIsEqualDeep = _baseIsEqualDeep,
      isObjectLike$2 = isObjectLike_1;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual$2(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike$2(value) && !isObjectLike$2(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
  }

  var _baseIsEqual = baseIsEqual$2;

  var Stack = _Stack,
      baseIsEqual$1 = _baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch$1(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  var _baseIsMatch = baseIsMatch$1;

  var isObject$1 = isObject_1;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable$2(value) {
    return value === value && !isObject$1(value);
  }

  var _isStrictComparable = isStrictComparable$2;

  var isStrictComparable$1 = _isStrictComparable,
      keys$2 = keys_1;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData$1(object) {
    var result = keys$2(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, isStrictComparable$1(value)];
    }
    return result;
  }

  var _getMatchData = getMatchData$1;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function matchesStrictComparable$2(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable$2;

  var baseIsMatch = _baseIsMatch,
      getMatchData = _getMatchData,
      matchesStrictComparable$1 = _matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches$1(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches$1;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */

  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn$1;

  var castPath = _castPath,
      isArguments = isArguments_1,
      isArray$4 = isArray_1,
      isIndex = _isIndex,
      isLength = isLength_1,
      toKey$2 = _toKey;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath$1(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey$2(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray$4(object) || isArguments(object));
  }

  var _hasPath = hasPath$1;

  var baseHasIn = _baseHasIn,
      hasPath = _hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  var hasIn_1 = hasIn$1;

  var baseIsEqual = _baseIsEqual,
      get = get_1,
      hasIn = hasIn_1,
      isKey$1 = _isKey,
      isStrictComparable = _isStrictComparable,
      matchesStrictComparable = _matchesStrictComparable,
      toKey$1 = _toKey;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty$1(path, srcValue) {
    if (isKey$1(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey$1(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty$1;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function baseProperty$1(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty$1;

  var baseGet = _baseGet;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep$1(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep$1;

  var baseProperty = _baseProperty,
      basePropertyDeep = _basePropertyDeep,
      isKey = _isKey,
      toKey = _toKey;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property$1(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  var property_1 = property$1;

  var baseMatches = _baseMatches,
      baseMatchesProperty = _baseMatchesProperty,
      identity = identity_1,
      isArray$3 = isArray_1,
      property = property_1;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee$4(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray$3(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }

  var _baseIteratee = baseIteratee$4;

  var arrayFilter = _arrayFilter,
      baseFilter = _baseFilter,
      baseIteratee$3 = _baseIteratee,
      isArray$2 = isArray_1;

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   *
   * // Combining several predicates using `_.overEvery` or `_.overSome`.
   * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
   * // => objects for ['fred', 'barney']
   */
  function filter(collection, predicate) {
    var func = isArray$2(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee$3(predicate));
  }

  var filter_1 = filter;

  var EXAxisDirection;

  (function (EXAxisDirection) {
    EXAxisDirection["Left"] = "left";
    EXAxisDirection["Right"] = "right";
  })(EXAxisDirection || (EXAxisDirection = {}));
  var EYAxisDirection;

  (function (EYAxisDirection) {
    EYAxisDirection["Top"] = "top";
    EYAxisDirection["Bottom"] = "bottom";
  })(EYAxisDirection || (EYAxisDirection = {}));
  var ECanvasTextBaseLine;

  (function (ECanvasTextBaseLine) {
    ECanvasTextBaseLine["Bottom"] = "bottom";
    ECanvasTextBaseLine["Top"] = "top";
    ECanvasTextBaseLine["Middle"] = "middle";
  })(ECanvasTextBaseLine || (ECanvasTextBaseLine = {}));

  var EMapMode;

  (function (EMapMode) {
    EMapMode["Pan"] = "PAN";
    EMapMode["Ban"] = "BAN";
    EMapMode["MARKER"] = "MARKER";
    EMapMode["Point"] = "POINT";
    EMapMode["Circle"] = "CIRCLE";
    EMapMode["Line"] = "LINE";
    EMapMode["Polyline"] = "POLYLINE";
    EMapMode["Rect"] = "RECT";
    EMapMode["Polygon"] = "POLYGON";
    EMapMode["DrawMask"] = "DRAWMASK";
    EMapMode["ClearMask"] = "CLEARMASK";
    EMapMode["ImageMask"] = "IMAGEMASK";
  })(EMapMode || (EMapMode = {}));

  var EEventType;

  (function (EEventType) {
    EEventType["BoundsChanged"] = "boundsChanged";
    EEventType["FeatureSelected"] = "featureSelected";
    EEventType["FeatureUnselected"] = "featureUnselected";
    EEventType["DrawDone"] = "drawDone";
    EEventType["FeatureUpdated"] = "featureUpdated";
    EEventType["FeatureDeleted"] = "featureDeleted";
    EEventType["Click"] = "click";
    EEventType["DblClick"] = "dblClick";
    EEventType["MouseDown"] = "mouseDown";
    EEventType["MouseMove"] = "mouseMove";
    EEventType["MouseUp"] = "mouseUp";
    EEventType["MouseOver"] = "mouseOver";
    EEventType["MouseOut"] = "mouseOut";
  })(EEventType || (EEventType = {}));

  var EEventSlotType;

  (function (EEventSlotType) {
    EEventSlotType["DrawActivePoint"] = "drawActivePoint";
    EEventSlotType["DrawActiveMiddlePoint"] = "drawActiveMiddlePoint";
  })(EEventSlotType || (EEventSlotType = {}));

  var ECursorType;

  (function (ECursorType) {
    ECursorType["Grab"] = "-webkit-grab";
    ECursorType["Grabbing"] = "-webkit-grabbing";
    ECursorType["Crosshair"] = "crosshair";
    ECursorType["Pointer"] = "pointer";
    ECursorType["Move"] = "move";
    ECursorType["NESW_Resize"] = "nesw-resize";
    ECursorType["NWSE_Resize"] = "nwse-resize";
  })(ECursorType || (ECursorType = {}));
  var EUrlCursorType;

  (function (EUrlCursorType) {
    EUrlCursorType["DrawMask"] = "crosshair";
    EUrlCursorType["ClearMask"] = "crosshair";
  })(EUrlCursorType || (EUrlCursorType = {}));

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  var baseEach = _baseEach,
      isArrayLike$2 = isArrayLike_1;

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap$1(collection, iteratee) {
    var index = -1,
        result = isArrayLike$2(collection) ? Array(collection.length) : [];

    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  var _baseMap = baseMap$1;

  var arrayMap$1 = _arrayMap,
      baseIteratee$2 = _baseIteratee,
      baseMap = _baseMap,
      isArray$1 = isArray_1;

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */
  function map(collection, iteratee) {
    var func = isArray$1(collection) ? arrayMap$1 : baseMap;
    return func(collection, baseIteratee$2(iteratee));
  }

  var map_1 = map;

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */

  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  var last_1 = last;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function baseFindIndex$2(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  var _baseFindIndex = baseFindIndex$2;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */

  function baseIsNaN$1(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN$1;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function strictIndexOf$1(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  var _strictIndexOf = strictIndexOf$1;

  var baseFindIndex$1 = _baseFindIndex,
      baseIsNaN = _baseIsNaN,
      strictIndexOf = _strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf$2(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex$1(array, baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf$2;

  var baseGetTag$1 = _baseGetTag,
      isArray = isArray_1,
      isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString$1(value) {
    return typeof value == 'string' ||
      (!isArray(value) && isObjectLike$1(value) && baseGetTag$1(value) == stringTag);
  }

  var isString_1 = isString$1;

  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex$1(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  var _trimmedEndIndex = trimmedEndIndex$1;

  var trimmedEndIndex = _trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim$1(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  var _baseTrim = baseTrim$1;

  var baseTrim = _baseTrim,
      isObject = isObject_1,
      isSymbol = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber$1(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber$1;

  var toNumber = toNumber_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite$1(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$1 || value === -INFINITY$1) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite$1;

  var toFinite = toFinite_1;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger$2(value) {
    var result = toFinite(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  var toInteger_1 = toInteger$2;

  var arrayMap = _arrayMap;

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues$1(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  var _baseValues = baseValues$1;

  var baseValues = _baseValues,
      keys$1 = keys_1;

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values$1(object) {
    return object == null ? [] : baseValues(object, keys$1(object));
  }

  var values_1 = values$1;

  var baseIndexOf$1 = _baseIndexOf,
      isArrayLike$1 = isArrayLike_1,
      isString = isString_1,
      toInteger$1 = toInteger_1,
      values = values_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'a': 1, 'b': 2 }, 1);
   * // => true
   *
   * _.includes('abcd', 'bc');
   * // => true
   */
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike$1(collection) ? collection : values(collection);
    fromIndex = (fromIndex && !guard) ? toInteger$1(fromIndex) : 0;

    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax$1(length + fromIndex, 0);
    }
    return isString(collection)
      ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
      : (!!length && baseIndexOf$1(collection, value, fromIndex) > -1);
  }

  var includes_1 = includes;

  // 涂抹action类型
  var EMaskActionType;

  (function (EMaskActionType) {
    EMaskActionType["Draw"] = "DRAW";
    EMaskActionType["Clear"] = "CLEAR";
    EMaskActionType["Image"] = "IMAGE";
  })(EMaskActionType || (EMaskActionType = {}));

  var Action = /*#__PURE__*/function () {
    // actionId
    // actionType
    // props
    // 对象空间数据结构

    /**
     * props: action样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */
    // function: constructor
    function Action(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Action);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Action.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Action, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when action remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {} // 改变样式

    }, {
      key: "setStyle",
      value: function setStyle(style, option) {
        var _this$layer;

        var _option$refresh = option.refresh,
            refresh = _option$refresh === void 0 ? true : _option$refresh;
        this.style = style;
        refresh && ((_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : _this$layer.refresh());
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Action;
  }();

  _defineProperty$1(Action, "defaultStyle", {
    opacity: 1,
    fillStyle: 'rgba(255, 0, 0, 0)',
    lineWidth: 1,
    strokeStyle: '#000' // 边框颜色

  });

  var baseGetTag = _baseGetTag,
      isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike(value) && baseGetTag(value) == boolTag);
  }

  var isBoolean_1 = isBoolean;

  var Layer$1 = /*#__PURE__*/function () {
    // layerId
    // layerType
    // props
    // props: domId

    /**
     * props: map可选配置项
     * defaultMapOptions: 默认配置项
     * mapOptions: userMapOptions merge defaultMapOptions
    */
    // function: constructor
    function Layer(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Layer);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Layer.defaultStyle, style);
      this.domId = "layer-".concat(id, "-wrapper");
      this.setDom();
    } // 创建容器dom元素div


    _createClass(Layer, [{
      key: "setDom",
      value: function setDom() {
        if (!this.dom) {
          this.dom = document.createElement('div');
          this.dom.setAttribute('id', this.domId);
          this.dom.style.position = 'absolute';
          this.dom.style.left = '0';
          this.dom.style.top = '0';
        }

        var _this$style = this.style,
            zIndex = _this$style.zIndex,
            opacity = _this$style.opacity;
        this.dom.style.zIndex = "".concat(zIndex);
        this.dom.style.opacity = "".concat(opacity);
      } // function: trigger when layer add to map

    }, {
      key: "onAdd",
      value: function onAdd(map) {
        // 首先判断当前layer是否已经被添加至map对象中

        // 范修改 -- 区域限制控制开关
        map.restrictArea = true
        map.inArea = false
        map.inImg = false
        this.map = map;
        this.resize();
      } // trigger when layer remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var layerElement = document.getElementById(this.domId);
        layerElement && layerElement.remove();
        this.map = null;
      } // 当容器变化时，需要调用触发
      // 以来map:getSize大小进行当前layer的resize

    }, {
      key: "resize",
      value: function resize() {
        var _this$map$getSize = this.map.getSize(),
            width = _this$map$getSize.width,
            height = _this$map$getSize.height;

        this.dom.style.width = "".concat(width, "px");
        this.dom.style.height = "".concat(height, "px");
      } // 刷新当前数据
      // 各子类各自实现

    }, {
      key: "refresh",
      value: function refresh() {
      } // 重新resize和刷新

    }, {
      key: "resizeAndRefresh",
      value: function resizeAndRefresh() {
        this.resize();
        this.refresh();
      } // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Layer;
  }();

  _defineProperty$1(Layer$1, "defaultStyle", {
    zIndex: 1,
    opacity: 1.0
  });

  function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var CanvasLayer = /*#__PURE__*/function (_Layer) {
    _inherits(CanvasLayer, _Layer);

    var _super = _createSuper$j(CanvasLayer);

    // function: constructor
    function CanvasLayer(id, layerType) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, CanvasLayer);

      _this = _super.call(this, id, layerType, props, style);

      _this.createRenderCanvas();

      return _this;
    }

    _createClass(CanvasLayer, [{
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(CanvasLayer.prototype), "onAdd", this).call(this, map);

        this.resize();
      } // 创建canvas层

    }, {
      key: "createRenderCanvas",
      value: function createRenderCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        this.dom.appendChild(this.canvas); // canvas上下文赋值

        this.canvasContext = this.canvas.getContext('2d');
      } // @override

    }, {
      key: "resize",
      value: function resize() {
        // 对容器进行重新resize
        _get(_getPrototypeOf(CanvasLayer.prototype), "resize", this).call(this); // 对canvas进行resize


        var _this$map$getSize = this.map.getSize(),
            width = _this$map$getSize.width,
            height = _this$map$getSize.height;

        this.canvas.width = width * CanvasLayer.dpr;
        this.canvas.height = height * CanvasLayer.dpr;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 进行canvas画布清除
        this.clear();

        _get(_getPrototypeOf(CanvasLayer.prototype), "refresh", this).call(this);
      } // 清空canvas画布

    }, {
      key: "clear",
      value: function clear() {
        var _this$canvasContext;

        (_this$canvasContext = this.canvasContext) === null || _this$canvasContext === void 0 ? void 0 : _this$canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }]);

    return CanvasLayer;
  }(Layer$1);

  _defineProperty$1(CanvasLayer, "dpr", window.devicePixelRatio);

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Graphic = /*#__PURE__*/function () {
    function Graphic() {
      _classCallCheck(this, Graphic);
    }

    _createClass(Graphic, null, [{
      key: "setStyle",
      value: // 需要进行dpr转换的样式属性
      // 设置canvas-style
      function setStyle(ctx) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var fullStyle = assign_1({}, Graphic.defaultStyle, style);

        forEach_1(fullStyle, function (value, key) {
          if (isFunction_1(Graphic.formatStyle[key])) {
            var dprValue = Graphic.formatStyle[key](value); // 排除方法被覆盖，比如fill/stroke

            !isFunction_1(ctx[key]) && (ctx[key] = dprValue);
          } else {
            // 排除方法被覆盖，比如fill/stroke
            !isFunction_1(ctx[key]) && (ctx[key] = value);
          }
        });
      } // 多段线绘制

    }, {
      key: "drawPolyline",
      value: function drawPolyline(ctx, shape, style, option) {
        var format = option.format,
            _option$limitCount = option.limitCount,
            limitCount = _option$limitCount === void 0 ? 2 : _option$limitCount;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var points = formatShape.points,
            width = formatShape.width;
        var pointsLength = points.length; // 校验

        if (pointsLength < limitCount) {
          return;
        }

        Graphic.setStyle(ctx, style);
        isNumber_1(width) && (ctx.lineWidth = width); // 绘制

        ctx.beginPath();
        var _points$ = points[0],
            startX = _points$.x,
            startY = _points$.y;
        ctx.moveTo(startX, startY); // 设置起点

        for (var i = 1; i < pointsLength; i++) {
          var _points$i = points[i],
              middleX = _points$i.x,
              middleY = _points$i.y;
          ctx.lineTo(middleX, middleY);
        }

        ctx.stroke();
      } // 线绘制

    }, {
      key: "drawLine",
      value: function drawLine(ctx, shape, style, option) {
        Graphic.setStyle(ctx, style);

        var _ref = option || {},
            format = _ref.format;

        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var start = formatShape.start,
            end = formatShape.end,
            width = formatShape.width;
        isNumber_1(width) && (ctx.lineWidth = width);
        ctx.beginPath();
        ctx.moveTo(start.x, start.y); // 设置起点

        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      } // 矩形绘制

    }, {
      key: "drawRect",
      value: function drawRect(ctx, shape, style, option) {
        var _ref2 = option || {},
            format = _ref2.format;

        var stroke = isBoolean_1(style.stroke) ? style.stroke : true;
        var fill = isBoolean_1(style.fill) ? style.fill : false;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var startX = formatShape.x,
            startY = formatShape.y,
            width = formatShape.width,
            height = formatShape.height;
        var endX = startX + width;
        var endY = startY + height; // 矩形点

        var rectPoints = [{
          x: startX,
          y: startY
        }, {
          x: endX,
          y: startY
        }, {
          x: endX,
          y: endY
        }, {
          x: startX,
          y: endY
        }];
        Graphic.drawPolygon(ctx, rectPoints, style, {
          fill: fill,
          stroke: stroke
        });
      } // 多边形绘制

    }, {
      key: "drawPolygon",
      value: function drawPolygon(ctx, points, style, option) {
        var format = option.format,
            _option$limitCount2 = option.limitCount,
            limitCount = _option$limitCount2 === void 0 ? 2 : _option$limitCount2,
            _option$closePath = option.closePath,
            closePath = _option$closePath === void 0 ? true : _option$closePath;
        var stroke = isBoolean_1(style.stroke) ? style.stroke : true;
        var fill = isBoolean_1(style.fill) ? style.fill : false; // 校验

        var pointsLength = points.length;

        if (pointsLength < limitCount) {
          return;
        }

        Graphic.setStyle(ctx, style); // 绘制

        ctx.beginPath();

        var _ref3 = isFunction_1(format) ? format(points[0]) : points[0],
            startX = _ref3.x,
            startY = _ref3.y;

        ctx.moveTo(startX, startY); // 设置起点

        for (var i = 1; i < pointsLength; i++) {
          var _ref4 = isFunction_1(format) ? format(points[i]) : points[i],
              middleX = _ref4.x,
              middleY = _ref4.y;

          ctx.lineTo(middleX, middleY);
        }

        closePath && ctx.closePath(); // 是否闭合

        fill && ctx.fill();

        if (stroke) {
          ctx.globalAlpha = 1; // 字体不能设置透明

          ctx.stroke();
        }
      } // 圆绘制

    }, {
      key: "drawCircle",
      value: function drawCircle(ctx, shape, style, option) {
        var format = option.format;
        var stroke = isBoolean_1(style.stroke) ? style.stroke : true;
        var fill = isBoolean_1(style.fill) ? style.fill : false;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var cx = formatShape.cx,
            cy = formatShape.cy,
            r = formatShape.r;
        Graphic.setStyle(ctx, style);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        fill && ctx.fill();

        if (stroke) {
          ctx.globalAlpha = 1; // 字体不能设置透明

          ctx.stroke();
        }
      } // 绘制点

    }, {
      key: "drawPoint",
      value: function drawPoint(ctx, shape, style, option) {
        var format = option.format;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var x = formatShape.x,
            y = formatShape.y,
            _formatShape$r = formatShape.r,
            r = _formatShape$r === void 0 ? 2 : _formatShape$r;
        Graphic.setStyle(ctx, style);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
      } // 图片绘制

    }, {
      key: "drawImage",
      value: function drawImage(ctx, imageInfo, option) {
        var image = imageInfo.image,
            x = imageInfo.x,
            y = imageInfo.y,
            width = imageInfo.width,
            height = imageInfo.height;
        ctx.drawImage(image, x, y, width, height);
      } // 文本绘制

    }, {
      key: "drawText",
      value: function drawText(ctx, textInfo, style, option) {
        var withBackground = style.background;
        var format = option.format;
        var fill = isBoolean_1(style.fill) ? style.fill : true;
        var formatTextInfo = isFunction_1(format) ? format(textInfo) : textInfo;
        var text = formatTextInfo.text,
            position = formatTextInfo.position,
            offset = formatTextInfo.offset; // 首先判断text文本是否为空，如果为空，就不进行绘制，直接返回

        if (!text) {
          return;
        }

        Graphic.setStyle(ctx, style);
        var x = position.x + offset.x;
        var y = position.y - offset.y;
        var lineWidth = ctx.lineWidth;
        var paddingVertical = 3 * CanvasLayer.dpr;
        var paddingHorizontal = 4 * CanvasLayer.dpr;
        var isBottom = ctx.textBaseline === ECanvasTextBaseLine.Bottom;
        var isTop = ctx.textBaseline === ECanvasTextBaseLine.Top;
        var isMiddle = ctx.textBaseline === ECanvasTextBaseLine.Middle;

        if (withBackground) {
          // 绘制容器矩形
          var textWidth = ctx.measureText(text).width;
          var fontSize = parseInt(ctx.font.replace(/[^0-9.]/ig, ''), 10);
          var width = textWidth + paddingHorizontal * 2;
          var height = fontSize + paddingVertical * 2;
          var rectLTY = position.y;
          isBottom && (rectLTY = rectLTY - height);
          isTop && (rectLTY = rectLTY); // 不同更换Y坐标

          isMiddle && (rectLTY = rectLTY - height / 2); // 不同更换Y坐标

          var rectShape = {
            x: position.x + offset.x,
            y: rectLTY - offset.y,
            width: width,
            height: height
          };
          Graphic.drawRect(ctx, rectShape, _objectSpread$8(_objectSpread$8({}, style || {}), {}, {
            fill: true
          }));
        } // 执行文本绘制


        ctx.globalAlpha = 1; // 字体不能设置透明

        if (fill) {
          ctx.fillStyle = style.fontColor;
          isBottom && withBackground && ctx.fillText(text, x + paddingHorizontal, y - paddingVertical + lineWidth);
          isMiddle && withBackground && ctx.fillText(text, x + paddingHorizontal, y);
          isTop && withBackground && ctx.fillText(text, x + paddingHorizontal, y + paddingVertical + lineWidth);
          !withBackground && ctx.fillText(text, x, y);
        } else {
          ctx.strokeStyle = style.fontColor;
          isBottom && withBackground && ctx.strokeText(text, x + paddingHorizontal, y - paddingVertical + lineWidth);
          isMiddle && withBackground && ctx.strokeText(text, x + paddingHorizontal, y);
          isTop && withBackground && ctx.strokeText(text, x + paddingHorizontal, y + paddingVertical + lineWidth);
          !withBackground && ctx.strokeText(text, x, y);
        }
      }
    }, {
      key: "drawArrow",
      value: function drawArrow(ctx, shape, radians, style, option) {
        var _ref5 = option || {},
            format = _ref5.format;

        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var position = formatShape.position,
            _formatShape$points = formatShape.points,
            points = _formatShape$points === void 0 ? [] : _formatShape$points;
        Graphic.setStyle(ctx, style);
        ctx.save();
        ctx.beginPath();
        ctx.translate(position.x, position.y);
        ctx.rotate(radians);

        forEach_1(points, function (point, index) {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });

        ctx.closePath();
        ctx.restore();
        ctx.fill();
        ctx.stroke();
      }
    }]);

    return Graphic;
  }();

  _defineProperty$1(Graphic, "defaultStyle", {
    fillStyle: '#FF0000',
    strokeStyle: '#FF0000',
    lineWidth: 1,
    font: 'normal 12px Arial',
    globalAlpha: 1,
    lineCap: 'round',
    lineJoin: 'round',
    shadowOffsetX: 0,
    // 阴影Y轴偏移
    shadowOffsetY: 0,
    // 阴影X轴偏移
    shadowBlur: 0 // 模糊尺寸

  });

  _defineProperty$1(Graphic, "formatStyle", {
    'lineWidth': function lineWidth(value) {
      return value * CanvasLayer.dpr;
    },
    'font': function font(value) {
      var fontSize = value.replace(/[^0-9.]/ig, '');
      var newFontSize = parseInt(fontSize, 10) * CanvasLayer.dpr;
      var reg = new RegExp("".concat(fontSize), 'g');
      var newValue = value.replace(reg, "".concat(newFontSize));
      return newValue;
    }
  });

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ClearActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(ClearActionFeature, _Action);

    var _super = _createSuper$i(ClearActionFeature);

    // function: constructor
    function ClearActionFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, ClearActionFeature);

      _this = _super.call(this, id, EMaskActionType.Clear, props, style);
      _this.shape = shape;
      return _this;
    } // 执行绘制当前
    // @override


    _createClass(ClearActionFeature, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale(); // 设置倒圆角

        var formateStyle = _objectSpread$7(_objectSpread$7({}, this.style || {}), {}, {
          lineCap: 'round',
          lineJoin: 'round'
        });

        this.layer.canvasContext.globalCompositeOperation = 'destination-out';
        Graphic.drawPolyline(this.layer.canvasContext, this.shape, formateStyle, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread$7({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
        this.layer.canvasContext.globalCompositeOperation = 'source-over';
      }
    }]);

    return ClearActionFeature;
  }(Action);

  // 图层类型
  var ELayerType;

  (function (ELayerType) {
    ELayerType["Image"] = "IMAGE";
    ELayerType["Feature"] = "FEATURE";
    ELayerType["Event"] = "EVENT";
    ELayerType["Mask"] = "MASK";
    ELayerType["Text"] = "TEXT";
    ELayerType["Marker"] = "MARKER";
    ELayerType["Overlay"] = "OVERLAY";
  })(ELayerType || (ELayerType = {}));

  var ELayerImageEventType;

  (function (ELayerImageEventType) {
    ELayerImageEventType["LoadStart"] = "loadStart";
    ELayerImageEventType["LoadEnd"] = "loadEnd";
    ELayerImageEventType["LoadError"] = "loadError";
  })(ELayerImageEventType || (ELayerImageEventType = {}));

  // Feature对象类型
  var EFeatureType;

  (function (EFeatureType) {
    EFeatureType["Point"] = "POINT";
    EFeatureType["Line"] = "LINE";
    EFeatureType["Polyline"] = "POLYLINE";
    EFeatureType["Polygon"] = "POLYGON";
    EFeatureType["Rect"] = "RECT";
    EFeatureType["Circle"] = "CIRCLE";
    EFeatureType["Arrow"] = "ARROW";
  })(EFeatureType || (EFeatureType = {}));

  var EFeatureCircleSubtype;

  (function (EFeatureCircleSubtype) {
    EFeatureCircleSubtype["Global"] = "GLOBAL";
    EFeatureCircleSubtype["Screen"] = "SCREEN";
  })(EFeatureCircleSubtype || (EFeatureCircleSubtype = {}));

  var Util = function Util() {
    _classCallCheck(this, Util);
  };

  _defineProperty$1(Util, "MathUtil", {
    // 获取亮点之间的中心点
    getMiddlePoint: function getMiddlePoint(start, end) {
      var x1 = start.x,
          y1 = start.y;
      var x2 = end.x,
          y2 = end.y;
      var middleX = (x1 + x2) / 2;
      var middleY = (y1 + y2) / 2;
      return {
        x: middleX,
        y: middleY
      };
    },
    // 计算两端之间的距离
    distance: function distance(start, end) {
      var x1 = start.x,
          y1 = start.y;
      var x2 = end.x,
          y2 = end.y;
      var dltX = x1 - x2;
      var dltY = y1 - y2;
      return Math.sqrt(dltX * dltX + dltY * dltY);
    },
    // 计算两端之间的距离
    pointInPolygon: function pointInPolygon(point, points) {
      var x = point.x,
          y = point.y;

      for (var c = false, i = -1, l = points.length, j = l - 1; ++i < l; j = i) {
        var _points$i = points[i],
            xi = _points$i.x,
            yi = _points$i.y;
        var _points$j = points[j],
            xj = _points$j.x,
            yj = _points$j.y;
        (yi <= y && y < yj || yj <= y && y < yi) && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (c = !c);
      }

      return c;
    },
    pointInPoint: function pointInPoint(point, point2) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var tolerance = option.tolerance;
      var distance = Util.MathUtil.distance(point, point2);
      return distance <= tolerance;
    },
    pointInPolyline: function pointInPolyline(pt, points) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var tolerance = option.tolerance;
      var maxIndex = points.length - 1;
      var result = false;

      forEach_1(points, function (point, index) {
        if (index === maxIndex) {
          return;
        }

        var nextPoint = points[index + 1];
        var distance = Util.MathUtil.distancePoint2Line(pt, point, nextPoint);

        if (distance <= tolerance) {
          result = true;
          return false;
        }
      });

      return result;
    },
    // 计算点到线段的最短距离
    distancePoint2Line: function distancePoint2Line(pt, point1, point2) {
      var x = pt.x,
          y = pt.y;
      var x1 = point1.x,
          y1 = point1.y;
      var x2 = point2.x,
          y2 = point2.y;
      var A = x - x1;
      var B = y - y1;
      var C = x2 - x1;
      var D = y2 - y1;
      var dot = A * C + B * D;
      var lineLength = C * C + D * D;
      var param = -1;

      if (lineLength !== 0) {
        // 线段长度不能为0
        param = dot / lineLength;
      }

      var xx;
      var yy;

      if (param < 0) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }

      var dx = x - xx;
      var dy = y - yy;
      return Math.sqrt(dx * dx + dy * dy);
    }
  });

  _defineProperty$1(Util, "EventUtil", {
    // 获取鼠标左右键
    getButtonIndex: function getButtonIndex(event) {
      if (!+[1]) {
        switch (event.button) {
          case 0:
          case 1:
          case 3:
          case 5:
          case 7:
            return 0;

          case 2:
          case 6:
            return 2;

          case 4:
            return 1;
        }
      }

      return event.button;
    },
    getMouseDirection: function getMouseDirection(dom, event) {
      var x1 = dom.offsetLeft;
      var y1 = -dom.offsetTop; // 注意坐标，所有的y坐标都是负数

      var x2 = x1 + dom.offsetWidth;
      var y2 = y1 - dom.offsetHeight; // 同样y坐标为负数

      var x0 = (x1 + x2) / 2;
      var y0 = (y1 + y2) / 2;
      var k = (y2 - y1) / (x2 - x1); // 斜率k
      // 计算

      var e = event || window.event;
      var x = e.clientX; // 鼠标刚移出div内，记录下当前的x坐标

      var y = -e.clientY; // 鼠标刚移出div内，记录下当前的y坐标

      var K = (y - y0) / (x - x0); // K是鼠标移入点和中心点的斜率
      // 当K大于k并且小于-k时，则肯定是左右移入，当移入点的x坐标大于中心点 ，则为右移入，小于则是左移入

      if (k < K && K < -k) {
        if (x > x0) {
          return 1; // 右
        } else {
          return 3; // 左
        }
      } // 注意此处y是负数，判断上下的方法同上


      if (y > y0) {
        return 0; // 上
      } else {
        return 2; // 下
      }
    }
  });

  var EMarkerType; // marker事件监听

  (function (EMarkerType) {
    EMarkerType["Marker"] = "MARKER";
  })(EMarkerType || (EMarkerType = {}));

  var EMarkerEventType;

  (function (EMarkerEventType) {
    EMarkerEventType["Click"] = "click";
    EMarkerEventType["MouseDown"] = "mouseDown";
    EMarkerEventType["MouseUp"] = "mouseUp";
    EMarkerEventType["MouseOver"] = "mouseOver";
    EMarkerEventType["MouseOut"] = "mouseOut";
    EMarkerEventType["DragStart"] = "dragStart";
    EMarkerEventType["Dragging"] = "dragging";
    EMarkerEventType["DragEnd"] = "dragEnd";
    EMarkerEventType["RightClick"] = "rightClick";
  })(EMarkerEventType || (EMarkerEventType = {}));

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var EventLayer = /*#__PURE__*/function (_Layer) {
    _inherits(EventLayer, _Layer);

    var _super = _createSuper$h(EventLayer);

    // 实时记录鼠标的位置
    // mouseDown坐标{screen:IPoint: 相对容器左上角坐标, globalPoint}
    //  mouseDown坐标：相对页面左上角的坐标
    // 标记是否处于dragging拖拽状态
    // mousemove过程中因为涉及到防抖逻辑，在setTimeOut需要判断是否会后续逻辑打断
    // 多边形绘制时临时保存points：IBasePoint[]
    // 当存在activeFeature时，鼠标move过程中捕捉到的feature
    // 当存在activeFeature时，鼠标move过程中捕捉到的feature节点index
    // 0 0.5 1 1.5 ：存在x.5时，代表的是x & x+1 的中间节点
    // function: constructor
    function EventLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, EventLayer);

      _this = _super.call(this, id, ELayerType.Event, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "dragging", false);

      _defineProperty$1(_assertThisInitialized(_this), "breakFeatureCapture", false);

      _defineProperty$1(_assertThisInitialized(_this), "tmpPointsStore", []);

      _defineProperty$1(_assertThisInitialized(_this), "hoverFeature", null);

      _defineProperty$1(_assertThisInitialized(_this), "hoverFeatureIndex", undefined);

      _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
      _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
      _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
      _this.onMouseOut = _this.onMouseOut.bind(_assertThisInitialized(_this));
      _this.onMouseOver = _this.onMouseOver.bind(_assertThisInitialized(_this));
      _this.onMouseClick = _this.onMouseClick.bind(_assertThisInitialized(_this));
      _this.onMouseDblClick = _this.onMouseDblClick.bind(_assertThisInitialized(_this));
      _this.onMouseWheel = _this.onMouseWheel.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(EventLayer, [{
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(EventLayer.prototype), "onAdd", this).call(this, map);

        this.createEventDom();
        this.dom.appendChild(this.eventDom); // 事件绑定

        this.addEventListener();
      } // 创建mask层

    }, {
      key: "createEventDom",
      value: function createEventDom() {
        this.eventDom = document.createElement('div');
        this.eventDom.style.position = 'absolute';
        this.eventDom.style.left = '0';
        this.eventDom.style.right = '0';
        this.eventDom.style.top = '0';
        this.eventDom.style.bottom = '0';
        this.eventDom.style.zIndex = '1'; // 阻止拖拽默认事件

        this.eventDom.ondragstart = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
      } // addEventListener: 初始化容器事件绑定

    }, {
      key: "addEventListener",
      value: function addEventListener() {
        this.eventDom.addEventListener("mousedown", this.onMouseDown);
        this.eventDom.addEventListener("mousemove", this.onMouseMove);
        this.eventDom.addEventListener("mouseup", this.onMouseUp);
        this.eventDom.addEventListener('click', this.onMouseClick);
        this.eventDom.addEventListener('dblclick', this.onMouseDblClick);
        this.eventDom.addEventListener("mousewheel", this.onMouseWheel);
        this.eventDom.addEventListener("mouseout", this.onMouseOut);
        this.eventDom.addEventListener("mouseover", this.onMouseOver);
      } // removeEventListener: 事件解除

    }, {
      key: "removeEventListener",
      value: function removeEventListener() {
        this.eventDom.removeEventListener("mousedown", this.onMouseDown);
        this.eventDom.removeEventListener("mousemove", this.onMouseMove);
        this.eventDom.removeEventListener("mouseup", this.onMouseUp);
        this.eventDom.removeEventListener('click', this.onMouseClick);
        this.eventDom.removeEventListener('dblclick', this.onMouseDblClick);
        this.eventDom.removeEventListener("mousewheel", this.onMouseWheel);
        this.eventDom.removeEventListener("mouseout", this.onMouseOut);
        this.eventDom.removeEventListener("mouseover", this.onMouseOver);
      }
      /*************************************************/

      /*************** map 平移 *************************/

      /*************************************************/
      // map平移开始

    }, {
      key: "handleMapPanStart",
      value: function handleMapPanStart(e) {
        var _this2 = this;

        this.dragging = true; // 鼠标按下态

        this.map.setCursor(ECursorType.Grabbing);

        document.onmousemove = function (e) {
          return _this2.handleMapPanMove(e);
        };

        document.onmouseup = function (e) {
          return _this2.handleMapPanEnd(e);
        };
      } // map平移中

    }, {
      key: "handleMapPanMove",
      value: function handleMapPanMove(e) {
        var _this$getDltXY = this.getDltXY(e),
            dltX = _this$getDltXY.x,
            dltY = _this$getDltXY.y;

        this.map.onDrag(dltX, dltY);
      } // map平移结束

    }, {
      key: "handleMapPanEnd",
      value: function handleMapPanEnd(e) {
        this.dragging = false; // 鼠标抬起

        this.map.setCursor(ECursorType.Grab);
        document.onmousemove = null;
        document.onmouseup = null; // 计算偏移量

        var _this$getDltXY2 = this.getDltXY(e),
            dltX = _this$getDltXY2.x,
            dltY = _this$getDltXY2.y;

        var _this$map$getScreenCe = this.map.getScreenCenter(),
            screenCenterX = _this$map$getScreenCe.x,
            screenCenterY = _this$map$getScreenCe.y; // 计算待更新的屏幕中心点坐标


        var newScreenCenterX = screenCenterX - dltX;
        var newScreenCenterY = screenCenterY - dltY; // 新的屏幕坐标转换为实际坐标值

        var newCenter = this.map.transformScreenToGlobal({
          x: newScreenCenterX,
          y: newScreenCenterY
        }); // 将map中相关元素复位，然后进行刷新

        this.map.reset().setCenter(newCenter);
      } // 获取pageScreenPoint相对startPageScreenPoint偏移量

    }, {
      key: "getDltXY",
      value: function getDltXY(e, option) {
        var _ref = option || {},
            _ref$transform = _ref.transform,
            transform = _ref$transform === void 0 ? false : _ref$transform;

        var scale = this.map.getScale();
        var screenX = e.screenX,
            screenY = e.screenY;
        var _this$startPageScreen = this.startPageScreenPoint,
            x = _this$startPageScreen.x,
            y = _this$startPageScreen.y;
        var screenDltX = screenX - x;
        var screenDltY = screenY - y;
        var globalDltX = screenDltX / scale;
        var globalDltY = screenDltY / scale;
        return {
          x: transform ? globalDltX : screenDltX,
          y: transform ? globalDltY : screenDltY
        };
      }
    }, {
      key: "clearDownTimer",
      value: function clearDownTimer() {
        if (this.downTimer) {
          window.clearTimeout(this.downTimer);
          this.downTimer = null;
        }
      }
      /*****************************************************/

      /*************** map 注记绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleMarkerStart",
      value: function handleMarkerStart(e) {
        var _this3 = this;

        this.clearDownTimer();
        this.downTimer = window.setTimeout(function () {
          _this3.map.eventsObServer.emit(EEventType.DrawDone, _this3.map.mode, {
            x: _this3.startPoint.global.x,
            y: _this3.startPoint.global.y
          });
        }, 300);
      }
      /*****************************************************/

      /*************** map 点 *************************/

      /*****************************************************/

    }, {
      key: "handlePointStart",
      value: function handlePointStart(e) {
        var _this4 = this;

        this.clearDownTimer();
        this.downTimer = window.setTimeout(function () {
          _this4.map.eventsObServer.emit(EEventType.DrawDone, _this4.map.mode, {
            x: _this4.startPoint.global.x,
            y: _this4.startPoint.global.y
          });

          _this4.reset(); // 重置

        }, 300);
      }
      /*****************************************************/

      /*************** map 矩形绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleCircleStart",
      value: function handleCircleStart(e) {
        var _this5 = this;

        this.dragging = true; // 鼠标按下态

        document.onmousemove = function (e) {
          return _this5.handleCircleMove(e);
        };

        document.onmouseup = function (e) {
          return _this5.handleCircleEnd(e);
        };

        var global = this.startPoint.global;
        this.setTip({
          text: '移动开始绘制',
          position: global
        });
      }
    }, {
      key: "handleCircleMove",
      value: function handleCircleMove(e) {
        var global = this.startPoint.global;

        var _this$getDltXY3 = this.getDltXY(e, {
          transform: true
        }),
            preGlobalDltX = _this$getDltXY3.x,
            preGlobalDltY = _this$getDltXY3.y;

        var _this$getDltXY4 = this.getDltXY(e, {
          transform: false
        }),
            screenDltX = _this$getDltXY4.x,
            screenDltY = _this$getDltXY4.y;

        var screenDlt = Math.sqrt(screenDltX * screenDltX + screenDltY * screenDltY);
        var isXAxisRight = this.map.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.map.yAxis.direction === EYAxisDirection.Top;
        var globalDltX = isXAxisRight ? preGlobalDltX : -preGlobalDltX;
        var globalDltY = isYAxisTop ? preGlobalDltY : -preGlobalDltY;
        var moveGlobal = {
          x: global.x + globalDltX,
          y: global.y - globalDltY
        };
        var circleShape = {
          cx: global.x,
          cy: global.y,
          sr: screenDlt
        };
        this.map.overlayLayer.addCircleFeature(circleShape);
        this.setTip({
          text: '抬起完成绘制',
          position: moveGlobal
        });
      }
    }, {
      key: "handleCircleEnd",
      value: function handleCircleEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;
        var _this$startPoint$glob = this.startPoint.global,
            centerX = _this$startPoint$glob.x,
            centerY = _this$startPoint$glob.y;

        var _this$getDltXY5 = this.getDltXY(e, {
          transform: true
        }),
            globalDltX = _this$getDltXY5.x,
            globalDltY = _this$getDltXY5.y;

        var _this$getDltXY6 = this.getDltXY(e, {
          transform: false
        }),
            screenDltX = _this$getDltXY6.x,
            screenDltY = _this$getDltXY6.y;

        var globalDlt = Math.sqrt(globalDltX * globalDltX + globalDltY * globalDltY);
        var screenDlt = Math.sqrt(screenDltX * screenDltX + screenDltY * screenDltY);
        this.reset(); // 重置临时数据
        // rect矩形有效性判读是否合适

        if (Math.abs(screenDlt) <= 2) {
          console.warn('the circle is too small...');
          return;
        } // 组织矩形数据shape格式


        var circleGlobalShape = {
          cx: centerX,
          cy: centerY,
          r: globalDlt
        };
        var circleScreenShape = {
          cx: centerX,
          cy: centerY,
          sr: screenDlt
        }; // 绘制矩形完成之后触发告知用户层

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, circleGlobalShape, circleScreenShape);
      }
      /*****************************************************/

      /*************** map 线段 *************************/

      /*****************************************************/

    }, {
      key: "handleLineStart",
      value: function handleLineStart(e) {
        var _this6 = this;

        // 说明绘制线段第一个点
        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this6.tmpPointsStore.push(_this6.startPoint);

            _this6.setTip({
              text: '移动开始绘制',
              position: _this6.startPoint.global
            });
          }, 300);
        } else if (this.tmpPointsStore.length === 1) {
          var startGlobal = this.tmpPointsStore[0].global;
          var endGlobal = this.startPoint.global; // 绘制矩形完成之后触发告知用户层

          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, {
            start: startGlobal,
            end: endGlobal
          });
          this.reset();
        }
      }
    }, {
      key: "handleLineMove",
      value: function handleLineMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen);
        var pointsLength = this.tmpPointsStore.length;

        if (pointsLength === 0) {
          this.setTip({
            text: '单击确定起点',
            position: global
          });
        } else if (pointsLength === 1) {
          var start = this.tmpPointsStore[0].global;
          var end = this.map.transformScreenToGlobal({
            x: offsetX,
            y: offsetY
          });
          this.map.overlayLayer.addLineFeature({
            start: start,
            end: end
          });
          this.setTip({
            text: '单击确定终点',
            position: global
          });
        }
      }
      /*****************************************************/

      /***************** map 多段线 *************************/

      /*****************************************************/

    }, {
      key: "handlePolylineStart",
      value: function handlePolylineStart(e) {
        var _this7 = this;
   
        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this7.tmpPointsStore.push(_this7.startPoint);

            _this7.setTip({
              text: '移动开始绘制',
              position: _this7.startPoint.global
            });
          }, 300);
        } else {
          this.tmpPointsStore.push(this.startPoint);

          if (this.map.withHotKeys) {
            this.setTip({
              text: 'ctrl+z撤销',
              position: this.startPoint.global
            });
          }
        }
      }
    }, {
      key: "handlePolylineMove",
      value: function handlePolylineMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var moveGlobalPoint = this.map.transformScreenToGlobal({
          x: offsetX,
          y: offsetY
        });

        var drawingGlobalPoints = map_1(this.tmpPointsStore, function (_ref2) {
          var global = _ref2.global;
          return global;
        });

        drawingGlobalPoints.push(moveGlobalPoint);

        if (drawingGlobalPoints.length === 1) {
          // 说明刚开始绘制
          this.setTip({
            text: '单击确定起点',
            position: moveGlobalPoint
          });
        } else if (drawingGlobalPoints.length > 1) {
          this.map.overlayLayer.addPolylineFeature({
            points: drawingGlobalPoints
          });
          this.setTip({
            text: '单击绘制/双击结束',
            position: moveGlobalPoint
          });
        }
      }
    }, {
      key: "handlePolylineEnd",
      value: function handlePolylineEnd(e) {
        this.tmpPointsStore.pop(); // 移除两次handlePolylineStart事件执行多的一个点

        if (this.tmpPointsStore.length >= 2) {
          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, map_1(this.tmpPointsStore, function (_ref3) {
            var global = _ref3.global;
            return global;
          }));
        }

        this.reset();
      }
      /*****************************************************/

      /*************** map 矩形绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleRectStart",
      value: function handleRectStart(e) {

       
        var _this8 = this;

        this.dragging = true; // 鼠标按下态




        document.onmousemove = function (e) {
          return _this8.handleRectMove(e);
        };

        document.onmouseup = function (e) {
          return _this8.handleRectEnd(e);
        };

        var global = this.startPoint.global;
        this.setTip({
          text: '移动开始绘制',
          position: global
        });
      }
    }, {
      key: "handleRectMove",
      value: function handleRectMove(e) {
     
        var _this$startPoint$glob2 = this.startPoint.global,
            x = _this$startPoint$glob2.x,
            y = _this$startPoint$glob2.y;

        var _this$getDltXY7 = this.getDltXY(e, {
          transform: true
        }),
            width = _this$getDltXY7.x,
            height = _this$getDltXY7.y;

        var isXAxisRight = this.map.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.map.yAxis.direction === EYAxisDirection.Top;
        var ltx = isXAxisRight ? Math.min(x, x + width) : Math.max(x, x - width);
        var lty = isYAxisTop ? Math.max(y, y - height) : Math.min(y, y + height);
        var moveGlobal = {
          x: isXAxisRight ? x + width : x - width,
          y: isYAxisTop ? y - height : y + height
        };

     
  


        var rectShape = {
          x: ltx,
          y: lty,
          width: Math.abs(width),
          height: Math.abs(height)
        };
        
        // if(rectShape.width>imgWidth){
        //   rectShape.width = imgWidth
        // }

        // if(rectShape.height>imgHeight){
        //   rectShape.height = imgHeight
        // }

        // 范修改 -- 矩形绘制完成后选区禁止超出背景图层
        if(this.map.restrictArea){
          let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
          let imgWidth = imgLayer.imageInfo.width;
          let imgHeight = imgLayer.imageInfo.height;
    
          if(rectShape.width>imgWidth-rectShape.x  && rectShape.x < imgWidth && rectShape.x >0){
            rectShape.width = imgWidth-rectShape.x
          }else if(rectShape.x<0){
            var x = rectShape.x
              rectShape.x = 0
              rectShape.width +=0
          }else if(rectShape.x > imgWidth ){
            rectShape.x = imgWidth
            rectShape.width  = 0
          }
    
          if(rectShape.height>imgHeight-rectShape.y && rectShape.y < imgHeight ){
            rectShape.height = imgHeight-rectShape.y
          }else if(rectShape.y<0 ){
            var y = rectShape.y
            rectShape.y = 0
            rectShape.height += 0
    
          }else if(rectShape.y > 0 && rectShape.y > imgHeight ){
            rectShape.y = imgHeight
            rectShape.height  = 0
          }
    
          if(rectShape.width > imgWidth){
            rectShape.width = imgWidth
          }
    
          if(rectShape.height > imgHeight){
            rectShape.height = imgHeight
          }
        }



        this.map.overlayLayer.addRectFeature(rectShape);
        this.setTip({
          text: '抬起完成绘制',
          position: moveGlobal
        });
      }
    }, {
      key: "handleRectEnd",
      value: function handleRectEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;
        var scale = this.map.getScale();
        var _this$startPoint$scre = this.startPoint.screen,
            startScreeX = _this$startPoint$scre.x,
            startScreeY = _this$startPoint$scre.y;

        var _this$getDltXY8 = this.getDltXY(e),
            screenDltX = _this$getDltXY8.x,
            screenDltY = _this$getDltXY8.y;

        var width = Math.abs(screenDltX) / scale;
        var height = Math.abs(screenDltY) / scale;
        var pointRBX = startScreeX + screenDltX;
        var pointRBY = startScreeY + screenDltY;
        var pointLTX = Math.min(pointRBX, startScreeX);
        var pointLTY = Math.min(pointRBY, startScreeY);
        var globalLTPoint = this.map.transformScreenToGlobal({
          x: pointLTX,
          y: pointLTY
        });
        this.reset(); // 重置临时数据
        // rect矩形有效性判读是否合适

        if (Math.abs(screenDltX) <= 3 || Math.abs(screenDltY) <= 3) {
          console.warn('the rect is too small...');
          return;
        } // 组织矩形数据shape格式


        var rectShape = {
          x: globalLTPoint.x,
          y: globalLTPoint.y,
          width: width,
          height: height
        }; // 绘制矩形完成之后触发告知用户层

        
      // 范修改 -- 矩形绘制完成后选区禁止超出背景图层
      if(this.map.restrictArea){
      let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
      let imgWidth = imgLayer.imageInfo.width;
      let imgHeight = imgLayer.imageInfo.height;

      if(rectShape.width>imgWidth-rectShape.x  && rectShape.x < imgWidth && rectShape.x >0){
        rectShape.width = imgWidth-rectShape.x
      }else if(rectShape.x<0){
        var x = rectShape.x
          rectShape.x = 0
          rectShape.width +=0
      }else if(rectShape.x > imgWidth ){
        rectShape.x = imgWidth
        rectShape.width  = 0
      }

      if(rectShape.height>imgHeight-rectShape.y && rectShape.y < imgHeight ){
        rectShape.height = imgHeight-rectShape.y
      }else if(rectShape.y<0 ){
        var y = rectShape.y
        rectShape.y = 0
        rectShape.height += 0

      }else if(rectShape.y > 0 && rectShape.y > imgHeight ){
        rectShape.y = imgHeight
        rectShape.height  = 0
      }

      if(rectShape.width > imgWidth){
        rectShape.width = imgWidth
      }

      if(rectShape.height > imgHeight){
        rectShape.height = imgHeight
      }
    }

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, rectShape);
      }
      /*****************************************************/

      /*************** map 矩形多边形 ************************/

      /*****************************************************/

    }, {
      key: "handlePolygonStart",
      value: function handlePolygonStart(e) {

        var _this9 = this;

       //范修改 --- 多边形绘制区域
       if(this.map.restrictArea){
        let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
        let imgWidth = imgLayer.imageInfo.width;
        let imgHeight = imgLayer.imageInfo.height;
        if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y <= imgHeight && this.startPoint.global.y >= 0){
            this.startPoint.global.x = imgWidth
        }
        else if(this.startPoint.global.x <= 0 && this.startPoint.global.y <= imgHeight && this.startPoint.global.y >= 0){
            this.startPoint.global.x = 0
        }
        else if(this.startPoint.global.y >= imgHeight && this.startPoint.global.x <= imgWidth && this.startPoint.global.x >= 0){
          this.startPoint.global.y = imgHeight
        }
        else if(this.startPoint.global.y <= 0 && this.startPoint.global.x <= imgWidth && this.startPoint.global.x >= 0){
          this.startPoint.global.y = 0
        }
        else if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y >= imgHeight){
          this.startPoint.global.x = imgWidth
          this.startPoint.global.y = imgHeight
        }
        else if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y <= 0){
          this.startPoint.global.x = imgWidth
          this.startPoint.global.y = 0
        }
        else if(this.startPoint.global.x <= 0 && this.startPoint.global.y >= imgHeight){
          this.startPoint.global.x = 0
          this.startPoint.global.y = imgHeight
        }
        else if(this.startPoint.global.x <= 0 && this.startPoint.global.y <= imgHeight){
          this.startPoint.global.x = 0
          this.startPoint.global.y = 0
        }
        
       }

        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this9.tmpPointsStore.push(_this9.startPoint);

            _this9.setTip({
              text: '移动开始绘制',
              position: _this9.startPoint.global
            });
          }, 300);
          
        } else {

            
          this.tmpPointsStore.push(this.startPoint);
          if (this.map.withHotKeys) {
         
            this.setTip({
              text: 'ctrl+z撤销',
              position: this.startPoint.global
            });
          }
        
       
        }

     


     
      }
    }, {
      key: "handlePolygonMove",
      value: function handlePolygonMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var moveGlobalPoint = this.map.transformScreenToGlobal({
          x: offsetX,
          y: offsetY
        });

        var drawingGlobalPoints = map_1(this.tmpPointsStore, function (_ref4) {
          var global = _ref4.global;
          return global;
        });

        drawingGlobalPoints.push(moveGlobalPoint);
        var drawingPointsCount = drawingGlobalPoints.length;

                // //范修改 
              if(this.map.restrictArea){
                  let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
                  let imgWidth = imgLayer.imageInfo.width;
                  let imgHeight = imgLayer.imageInfo.height;
                  if(moveGlobalPoint.x >= imgWidth && moveGlobalPoint.y <= imgHeight && moveGlobalPoint.y >= 0){
                   moveGlobalPoint.x = imgWidth
                  }
                  else if(moveGlobalPoint.x <= 0 && moveGlobalPoint.y <= imgHeight && moveGlobalPoint.y >= 0){
                    moveGlobalPoint.x = 0
                  }
                  else if(moveGlobalPoint.y >= imgHeight && moveGlobalPoint.x <= imgWidth && moveGlobalPoint.x >= 0){
                    moveGlobalPoint.y = imgHeight
                  }
                  else if(moveGlobalPoint.y <= 0 && moveGlobalPoint.x <= imgWidth && moveGlobalPoint.x >= 0){
                    moveGlobalPoint.y = 0
                  }
                  else if(moveGlobalPoint.x >= imgWidth && moveGlobalPoint.y >= imgHeight){
                    moveGlobalPoint.x = imgWidth
                    moveGlobalPoint.y = imgHeight
                  }
                  else if(moveGlobalPoint.x >= imgWidth && moveGlobalPoint.y <= 0){
                    moveGlobalPoint.x = imgWidth
                    moveGlobalPoint.y = 0
                  }
                  else if(moveGlobalPoint.x <= 0 && moveGlobalPoint.y >= imgHeight){
                    moveGlobalPoint.x = 0
                    moveGlobalPoint.y = imgHeight
                  }
                  else if(moveGlobalPoint.x <= 0 && moveGlobalPoint.y <= imgHeight){
                    moveGlobalPoint.x = 0
                    moveGlobalPoint.y = 0
                  }
                }
            


        if (drawingPointsCount === 1) {
          // 说明刚开始绘制
          this.setTip({
            text: '单击确定起点',
            position: moveGlobalPoint
          });
        
        } else if (drawingPointsCount > 1) {
          this.map.overlayLayer.addPolygonFeature({
            points: drawingGlobalPoints
          }, {
            node: true
          });
          var tipText = drawingPointsCount === 2 ? '单击绘制' : '单击绘制/双击结束';
          this.setTip({
            text: tipText,
            position: moveGlobalPoint
          });

   

        }
      }
    }, {
      key: "handlePolygonEnd",
      value: function handlePolygonEnd(e) {
        this.tmpPointsStore.pop(); // 移除两次handlePolygonStart事件执行多的一个点

        if (this.tmpPointsStore.length > 4) {
          // 绘制矩形完成之后触发告知用户层
          var points = map_1(this.tmpPointsStore, function (_ref5) {
            var global = _ref5.global;
            return global;
          });

          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, points);
        }

        // if(points.length<= 4){

        // }

        // console.log(points)

        this.reset();
      }
      /*****************************************************/

      /**********+****** map 涂抹 ***************************/

      /*****************************************************/

    }, {
      key: "handleMaskStart",
      value: function handleMaskStart(e) {
        var _this10 = this;

        this.dragging = true; // 鼠标按下态
   
        document.onmousemove = function (e) {
          return _this10.handleMaskMove(e);
        };

        document.onmouseup = function (e) {
          return _this10.handleMaskEnd(e);
        };

        this.tmpPointsStore.push(this.startPoint);

        var points = map_1(this.tmpPointsStore, function (_ref6) {
          var global = _ref6.global;
          return global;
        }); // 模式变化


        switch (this.map.mode) {
          case EMapMode.DrawMask:
            {
              this.map.overlayLayer.addDrawAction({
                points: points
              });
              break;
            }

          case EMapMode.ClearMask:
            {
              this.handleMaskClearMoving({
                points: points
              });
              break;
            }
        }
      }
    }, {
      key: "handleMaskMove",
      value: function handleMaskMove(e) {
        var _this$startPoint$scre2 = this.startPoint.screen,
            startScreeX = _this$startPoint$scre2.x,
            startScreeY = _this$startPoint$scre2.y;

        var _this$getDltXY9 = this.getDltXY(e),
            dltX = _this$getDltXY9.x,
            dltY = _this$getDltXY9.y;

        var middleScreenPoint = {
          x: startScreeX + dltX,
          y: startScreeY + dltY
        };
        var middleGlobalPoint = this.map.transformScreenToGlobal(middleScreenPoint); // 数据筛选过滤无效路径节点

        var lastPoint = last_1(this.tmpPointsStore);

        if (lastPoint) {
          var lastScreenPoint = lastPoint.screen;
          var distance = Util.MathUtil.distance(lastScreenPoint, middleScreenPoint);

          if (distance <= 3) {
            return;
          }
        } // 对有效路径节点添加


        this.tmpPointsStore.push({
          screen: middleScreenPoint,
          global: middleGlobalPoint
        });

        var points = map_1(this.tmpPointsStore, function (_ref7) {
          var global = _ref7.global;
          return global;
        }); // 模式变化


        switch (this.map.mode) {
          case EMapMode.DrawMask:
            {
              // 在临时层上绘制涂抹
              this.map.overlayLayer.addDrawAction({
                points: points
              });
              break;
            }

          case EMapMode.ClearMask:
            {
              // 在涂抹层上进行删除
              this.handleMaskClearMoving({
                points: points
              });
              break;
            }
        }
      }
    }, {
      key: "handleMaskEnd",
      value: function handleMaskEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;

        var maskPoints = map_1(this.tmpPointsStore, function (_ref8) {
          var global = _ref8.global;
          return global;
        });

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, // drawMask | clearMask
        maskPoints);
        this.reset();
        this.handleMaskClearMoving({
          reset: true
        });
      }
    }, {
      key: "handleMaskClearMoving",
      value: function handleMaskClearMoving(_ref9) {
        var _ref9$points = _ref9.points,
            points = _ref9$points === void 0 ? [] : _ref9$points,
            _ref9$reset = _ref9.reset,
            reset = _ref9$reset === void 0 ? false : _ref9$reset;
        var mapLayers = this.map.getLayers();
        var drawingStyle = this.map.drawingStyle;
        var _drawingStyle$lineWid = drawingStyle.lineWidth,
            lineWidth = _drawingStyle$lineWid === void 0 ? 10 : _drawingStyle$lineWid;
        var scale = this.map.getScale();
        var clearWidth = lineWidth / scale;

        forEach_1(mapLayers, function (layer) {
          // 需要进行擦除动作
          if (layer.type === ELayerType.Mask && !reset) {
            var clearAction = new ClearActionFeature("".concat(+new Date()), // id
            {
              points: points,
              width: clearWidth
            }, // shape
            {}, drawingStyle);
            layer.setMovingClearAction(clearAction);
          } else if (layer.type === ELayerType.Mask && reset) {
            layer.setMovingClearAction(null);
          }
        });
      }
      /*****************************************************/

      /************** map 鼠标滑轮缩放 ***********************/

      /*****************************************************/
      // mouse在map:pan模式下进行滑轮缩放[不断重绘图层方式，性能会受影响]

    }, {
      key: "handleMapZoom",
      value: function handleMapZoom(e) {
        var zoomNumber = 90 + this.map.zoomWheelRatio;
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen);
        var basePoint = {
          screen: screen,
          global: global
        }; // 计算缩放中心点

        var newZoom = e.deltaY < 0 ? this.map.zoom * zoomNumber / 100 // zoomIn
        : this.map.zoom * 100 / zoomNumber; // 为了返回上一次的zoom

        var screenCenter = this.map.getScreenCenter();
        var newCenter = this.map.transformScreenToGlobal(screenCenter, {
          basePoint: basePoint,
          zoom: newZoom
        });
        this.map.centerAndZoom({
          center: newCenter,
          zoom: newZoom
        }, {
          refreshDelay: true
        });
      } // // 尝试改变dom容器的scale(但是会对一些sr的圆造成放大缩小展示问题)
      // mouseWheelTimer: number | null | undefined
      // zoomScale: number = 1
      // public handleMapZoom_abort(e: WheelEvent) {
      //     if (this.mouseWheelTimer) {
      //         window.clearTimeout(this.mouseWheelTimer);
      //         this.mouseWheelTimer = null;
      //     }
      //     this.zoomScale = e.deltaY >= 0
      //         ? this.zoomScale * 95 / 100 // zoomIn
      //         : this.zoomScale * 105.263 / 100; // 为了返回上一次的zoom
      //     this.map.onZoom(this.zoomScale);
      //     this.mouseWheelTimer = window.setTimeout(() => {
      //         const newZoom = this.map.zoom / this.zoomScale;
      //         this.zoomScale = 1;
      //         this.map.reset();
      //         this.map.zoomTo(newZoom);
      //     }, 300);
      // }

      /*****************************************************/

      /************** map 双击编辑 ***********************/

      /*****************************************************/

    }, {
      key: "handleFeatureSelect",
      value: function handleFeatureSelect(e) {
        var targetFeature = this.map.getTargetFeatureWithPoint(this.startPoint.global); // 如果捕捉到，则触发事件回调
      
        targetFeature && this.map.eventsObServer.emit(EEventType.FeatureSelected, targetFeature);
      }
      /*****************************************************/

      /*******+**** map 鼠标捕捉activeFeature ***************/

      /*****************************************************/

    }, {
      key: "handleActiveFeatureCapture",
      value: function handleActiveFeatureCapture(e) {
        var _this11 = this;
      
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var currentPoint = {
          x: offsetX,
          y: offsetY
        };
        var currentGlobalPoint = this.map.transformScreenToGlobal(currentPoint);
        var activeFeature = this.map.activeFeature;

        var _ref10 = activeFeature || {},
            type = _ref10.type,
            shape = _ref10.shape; // 重置捕捉的feature及featureIndex


        this.hoverFeature = null;
        this.hoverFeatureIndex = undefined;

        switch (type) {
          case EFeatureType.Point:
            {
              if (activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Pointer);
                this.map.eventLayer.breakFeatureCapture = true;
                this.setTip({
                  text: '按下移动图形/右键删除',
                  position: currentGlobalPoint
                });
              }

              break;
            }

          case EFeatureType.Rect:
          case EFeatureType.Circle:
            {
              var isRectType = type === EFeatureType.Rect; // 计算获取点集合

              var points = isRectType ? activeFeature.getPoints() : activeFeature.getEdgePoints(); // 首先进行捕捉点判断

              forEach_1(points, function (point, index) {
                // 首先判断当前点
                var sPoint = _this11.map.transformGlobalToScreen(point);

                var distance = Util.MathUtil.distance(sPoint, currentPoint);

                if (distance <= 5) {
                  _this11.hoverFeatureIndex = index;
                  var cursor = index === 1 || index === 3 ? ECursorType.NESW_Resize : ECursorType.NWSE_Resize;

                  _this11.map.setCursor(cursor);

                  _this11.map.eventLayer.breakFeatureCapture = true;

                  _this11.setTip({
                    text: '按下拖动',
                    position: currentGlobalPoint
                  });

                  return false;
                }
              }); // 如果没有捕捉到点，此时需要判断是否捕捉到图形


              if (!isNumber_1(this.hoverFeatureIndex) && activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Move);
                this.map.eventLayer.breakFeatureCapture = true;
                this.setTip({
                  text: '按下移动图形',
                  position: currentGlobalPoint
                });
              }

              break;
            }

          case EFeatureType.Line:
          case EFeatureType.Polyline:
          case EFeatureType.Polygon:
            {
              var isLine = type === EFeatureType.Line;
              var isPolyline = type === EFeatureType.Polyline;
              type === EFeatureType.Polygon;
              var _ref11 = shape,
                  lineStartPoint = _ref11.start,
                  lineEndPoint = _ref11.end;
              var _ref12 = shape,
                  _ref12$points = _ref12.points,
                  multiPoints = _ref12$points === void 0 ? [] : _ref12$points;

              var _points = isLine ? [lineStartPoint, lineEndPoint] : multiPoints;

              var pointsLength = _points.length; // 首先进行捕捉点判断

              forEach_1(_points, function (point, index) {
                // 首先判断当前点
                var sPoint = _this11.map.transformGlobalToScreen(point);

                var distance = Util.MathUtil.distance(sPoint, currentPoint);

                if (distance <= 5) {
                  _this11.hoverFeatureIndex = index;

                  _this11.map.setCursor(ECursorType.Pointer);

                  var minPointsCount = isLine || isPolyline ? 2 : 3;
                  var deleteTip = pointsLength > minPointsCount ? '/右键删除' : '';
                  _this11.map.eventLayer.breakFeatureCapture = true;

                  _this11.setTip({
                    text: "\u6309\u4E0B\u62D6\u52A8".concat(deleteTip),
                    position: currentGlobalPoint
                  });

                  return false;
                } // 如果是线段，不需要判断中间节点，直接判断下一节点


                if (isLine) {
                  return;
                } // 如果是多段线且最后一个节点


                if (isPolyline && !_points[index + 1]) {
                  return false;
                } // 其次判断当前点与下一点之间的中心点


                var nextPoint = _points[index + 1] || _points[0];
                var middlePoint = Util.MathUtil.getMiddlePoint(point, nextPoint);

                var sMiddlePoint = _this11.map.transformGlobalToScreen(middlePoint);

                var distance2 = Util.MathUtil.distance(sMiddlePoint, currentPoint);

                if (distance2 <= 5) {
                  _this11.hoverFeatureIndex = index + 0.5;

                  _this11.map.setCursor(ECursorType.Pointer);

                  _this11.map.eventLayer.breakFeatureCapture = true;

                  _this11.setTip({
                    text: '按下拖动添加新节点',
                    position: currentGlobalPoint
                  });

                  return false;
                }
              }); // 如果没有捕捉到点，此时需要判断是否捕捉到图形


              if (!isNumber_1(this.hoverFeatureIndex) && activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Move);
                this.map.eventLayer.breakFeatureCapture = true;
                this.setTip({
                  text: '按下移动图形',
                  position: currentGlobalPoint
                });
              }

              break;
            }
        }
      }
      /*****************************************************/

      /*******+**** map 捕捉到的feature鼠标按下 ***************/

      /*****************************************************/

    }, {
      key: "handleActiveFeatureStart",
      value: function handleActiveFeatureStart(e) {
        var _this12 = this;
     
        // 鼠标按下时清空tipLayer
        this.map.tipLayer.removeAllFeatureActionText(); // 鼠标相关变量

        var btnIndex = Util.EventUtil.getButtonIndex(e); // 鼠标左键按下

        if (btnIndex === 0) {
          this.dragging = true; // 鼠标按下态

          document.onmousemove = function (e) {
            return _this12.handleActiveFeatureMove(e);
          };

          document.onmouseup = function (e) {
            return _this12.handleActiveFeatureEnd(e);
          };
        } // 鼠标右键按下
        else if (btnIndex === 2) {
            this.handleActiveFeatureElse(e);
          }
      }
    }, {
      key: "handleActiveFeatureMove",
      value: function handleActiveFeatureMove(e) {
        var _this13 = this;

        var _this$getDltXY10 = this.getDltXY(e, {
          transform: true
        }),
            preGlobalDltX = _this$getDltXY10.x,
            preGlobalDltY = _this$getDltXY10.y;

        var _this$getDltXY11 = this.getDltXY(e, {
          transform: false
        }),
            preScreenDltX = _this$getDltXY11.x;
            _this$getDltXY11.y;

        var activeFeature = this.map.activeFeature;
        var type = activeFeature.type,
            shape = activeFeature.shape,
            style = activeFeature.style;
        var isXAxisRight = this.map.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.map.yAxis.direction === EYAxisDirection.Top;
        var globalDltX = isXAxisRight ? preGlobalDltX : -preGlobalDltX;
        var globalDltY = isYAxisTop ? preGlobalDltY : -preGlobalDltY;
        var screenDltX = isXAxisRight ? preScreenDltX : -preScreenDltX;


       

        switch (type) {
          case EFeatureType.Point:
            {
              var _this$map;

              var _ref13 = shape,
                  x = _ref13.x,
                  y = _ref13.y;
              this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), {}, {
                x: x + globalDltX,
                y: y - globalDltY
              }); // 临时层执行绘制

              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addPointFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  fillStyle: (_this$map = this.map) === null || _this$map === void 0 ? void 0 : _this$map.editingColor
                })
              });
              break;
            }

          case EFeatureType.Circle:
            {
              var _this$map2;

              var _ref14 = shape,
                  cx = _ref14.cx,
                  cy = _ref14.cy,
                  r = _ref14.r,
                  sr = _ref14.sr;

              if (this.hoverFeature) {
                this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), {}, {
                  cx: cx + globalDltX,
                  cy: cy - globalDltY
                });
              } else if (isNumber_1(this.hoverFeatureIndex)) {
                this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 3;
                var isRight = this.hoverFeatureIndex === 1 || this.hoverFeatureIndex === 2;
                var circleSubtype = activeFeature.getSubType();
                var isGlobalType = circleSubtype === EFeatureCircleSubtype.Global;
                var newRadius = isGlobalType ? isRight ? r + globalDltX : r - globalDltX : isRight ? sr + screenDltX : sr - screenDltX; // 如果半径小于0不做任何处理å

                if (newRadius <= 0) {
                  console.warn('circle update error: invalid radius, radius <= 0');
                  return;
                }

                this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), isGlobalType ? {
                  r: newRadius
                } : {
                  sr: newRadius
                });
              }

              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addCircleFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: (_this$map2 = this.map) === null || _this$map2 === void 0 ? void 0 : _this$map2.editingColor
                })
              });
              break;
            }

          case EFeatureType.Rect:
            {
              var _this$map3;

              var _ref15 = shape,
                  _x = _ref15.x,
                  _y = _ref15.y,
                  width = _ref15.width,
                  height = _ref15.height; // 说明捕捉到了feature元素

              var newRectShape = null;

              if (this.hoverFeature) {
                newRectShape = {
                  x: _x + globalDltX,
                  y: _y - globalDltY,
                  width: width,
                  height: height
                };
             
              } // 说明捕捉到了feature节点
              else if (isNumber_1(this.hoverFeatureIndex)) {
                  // newRectShape = {x: x + globalDltX, y: y - globalDltY, width, height};
                  var _isLeft = this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 3;

                  var isTop = this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 1;
                  var preNewX = _isLeft ? _x + globalDltX : _x;
                  var preNewY = isTop ? _y - globalDltY : _y;
                  var preNewWidth = _isLeft ? width - preGlobalDltX : width + preGlobalDltX;
                  var preNewHeight = isTop ? height - preGlobalDltY : height + preGlobalDltY;
                  var RBX = isXAxisRight ? preNewX + preNewWidth : preNewX - preNewWidth;
                  var RBY = isYAxisTop ? preNewY - preNewHeight : preNewY + preNewHeight;
                  var newX = isXAxisRight ? Math.min(preNewX, RBX) : Math.max(preNewX, RBX);
                  var newY = isYAxisTop ? Math.max(preNewY, RBY) : Math.min(preNewY, RBY);
                  var newWidth = Math.abs(preNewWidth);
                  var newHeight = Math.abs(preNewHeight);
                  newRectShape = {
                    x: newX,
                    y: newY,
                    width: newWidth,
                    height: newHeight
                  };

                } // 保存

                //范修改-- 禁止选区移动到背景图外 
                if(this.map.restrictArea){

                  

                  let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
                  let imgWidth = imgLayer.imageInfo.width;
                  let imgHeight = imgLayer.imageInfo.height;

                  if(newRectShape.x<0 ){
                    newRectShape.x = 0
                    if(newWidth>imgWidth){
                      newRectShape.width = imgWidth
                 
                    }
                   
                    
                    
                  }else if(newRectShape.x+newRectShape.width>imgWidth){
                    newRectShape.x = imgWidth - newRectShape.width
              
                    if(newRectShape.x<0){
                      newRectShape.x = 0
                    }
                    if(newWidth>imgWidth){
                      newRectShape.width = imgWidth
                 
                    }
                   
                  }


                  if(newRectShape.y<0){
                    newRectShape.y=0

                 
                    if(newHeight>imgHeight){
                      newRectShape.height = imgHeight
                 
                    }

                  }else if(newRectShape.y+newRectShape.height>imgHeight){

                    newRectShape.y = imgHeight - newRectShape.height
                    if(newRectShape.y<0){
                      newRectShape.y=0
                    }
                    if(newHeight>imgHeight){
                      newRectShape.height = imgHeight
                 
                    }
               
                  }
                }
              this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), newRectShape); // 临时层执行绘制
              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addRectFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: (_this$map3 = this.map) === null || _this$map3 === void 0 ? void 0 : _this$map3.editingColor
                })
              });
              break;
            }

          case EFeatureType.Line:
          case EFeatureType.Polyline:
          case EFeatureType.Polygon:
            {
              var _this$map4, _this$map5, _this$map6;
              var isLine = type === EFeatureType.Line;
              var isPolyline = type === EFeatureType.Polyline;
              var isPolygon = type === EFeatureType.Polygon;
              var _ref16 = shape,
                  lineStartPoint = _ref16.start,
                  lineEndPoint = _ref16.end;
              var _ref17 = shape,
                  _ref17$points = _ref17.points,
                  multiPoints = _ref17$points === void 0 ? [] : _ref17$points;
              var points = isLine ? [lineStartPoint, lineEndPoint] : multiPoints; // 说明捕捉到了feature元素
              var newPoints = [];
            // 范修改 --- 多边形移动禁止移动到背景图外判断
              if (this.hoverFeature) {
                if(this.map.restrictArea){
                let max = points[0].x;
                for (let i = 0; i < points.length - 1; i++) {
                    max = max < points[i+1].x ? points[i+1].x : max
                }
                let min = points[0].x;
                for (let i = 0; i < points.length - 1; i++) {
                  min = min > points[i+1].x ? points[i+1].x : min
                }
                let maxY = points[0].y;
                for (let i = 0; i < points.length - 1; i++) {
                  maxY = maxY < points[i+1].y ? points[i+1].y : maxY
                }
                let minY = points[0].y;
                for (let i = 0; i < points.length - 1; i++) {
                  minY = minY > points[i+1].y ? points[i+1].y : minY
                }
                let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
                let imgWidth = imgLayer.imageInfo.width;
                let imgHeight = imgLayer.imageInfo.height;
                if(max+globalDltX<=imgWidth && min+globalDltX>=0 && maxY+(-globalDltY)<=imgHeight  && minY-globalDltY>=0){
                newPoints = map_1(points, function (_ref18) {
                  var x = _ref18.x,
                      y = _ref18.y;
                        return {
                          x: x + globalDltX,
                          y: y - globalDltY
                        };
                });
              }else{
                let arr1 = []
                if(max+globalDltX<=imgWidth  && maxY+(-globalDltY)<=imgHeight  && minY-globalDltY>=0 ){
                  points.forEach(x=>arr1.push(x.x))
                  let max1 = Math.min(...arr1)
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x - max1,
                            y: y - globalDltY
                          };
                  });
                }else if(min+globalDltX>=0 && maxY+(-globalDltY)<=imgHeight  && minY-globalDltY>=0  ){
                points.forEach(x=>arr1.push(imgWidth-x.x))
                  let min1 = Math.min(...arr1)
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x + min1,
                            y: y - globalDltY
                          };
                  });

                }else if(maxY+(-globalDltY)<=imgHeight && min+globalDltX>=0 && max+globalDltX<=imgWidth ){

                  points.forEach(x=>arr1.push(imgHeight-x.y))
                  let max1 = Math.max(...arr1)
               
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x + globalDltX,
                            y:  max1+ y -imgHeight
                          };
                  });

                }else if(minY-globalDltY>=0 && min+globalDltX>=0 && max+globalDltX<=imgWidth){

                  points.forEach(x=>arr1.push(imgHeight-x.y))
                  let max1 = Math.min(...arr1)
            
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x + globalDltX,
                            y: max1+y
                          };
                  });
                }else if(minY-globalDltY>=0 && max+globalDltX<=imgWidth){
                  let arr1 = []
                  let arr2 = []
                  points.forEach(x=>arr1.push(imgHeight-x.y))
                   points.forEach(x=>arr2.push(x.x))
                  let max1 = Math.min(...arr1)
                  let max2 = Math.min(...arr2)
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x - max2,
                            y: max1+y
                          };
                  });
                }else if(minY-globalDltY>=0 && min+globalDltX>=0){
                  let arr1 = []
                  let arr2 = []
                  points.forEach(x=>arr1.push(imgHeight-x.y))
                  points.forEach(x=>arr2.push(imgWidth-x.x))
                  let max1 = Math.min(...arr1)
                  let max2 = Math.min(...arr2)
             
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x +  max2,
                            y: max1+y
                          };
                  });

                }else if(maxY+(-globalDltY)<=imgHeight && min+globalDltX>=0){

                  let arr1 = []
                  let arr2 = []
                  points.forEach(x=>arr1.push(imgHeight-x.y))
                  points.forEach(x=>arr2.push(imgWidth-x.x))
                  let max1 = Math.max(...arr1)
                  let max2 = Math.min(...arr2)
             
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x +  max2,
                            y: max1+ y -imgHeight
                          };
                  });

                }else if(maxY+(-globalDltY)<=imgHeight && max+globalDltX<=imgWidth){

                  let arr1 = []
                  let arr2 = []
                  points.forEach(x=>arr1.push(imgHeight-x.y))
                  points.forEach(x=>arr2.push(x.x))
                  let max1 = Math.max(...arr1)
                  let max2 = Math.min(...arr2)
             
                  newPoints = map_1(points, function (_ref18) {
                    var x = _ref18.x,
                        y = _ref18.y;
                          return {
                            x: x -  max2,
                            y: max1+ y -imgHeight
                          };
                  });

                }
            
              }
             
        
            }else{

              newPoints = map_1(points, function (_ref18) {
                var x = _ref18.x,
                    y = _ref18.y;
                      return {
                        x: x + globalDltX,
                        y: y - globalDltY
                      };
              });

            }

               
              } // 说明捕捉到了feature节点
              else if (isNumber_1(this.hoverFeatureIndex)) {
                let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
                let imgWidth = imgLayer.imageInfo.width;
                let imgHeight = imgLayer.imageInfo.height;
                var that = this
                  var intIndex = parseInt("".concat(this.hoverFeatureIndex), 10);
                
                  forEach_1(points, function (_ref19, index) {
                    var x = _ref19.x,
                        y = _ref19.y;

                    // 说明是真实节点   
                    //范修改 拖动节点 禁止移动出背景范围
                    if (index === intIndex && intIndex === _this13.hoverFeatureIndex) {
                      if(that.map.restrictArea){
                      if(x + globalDltX >= imgWidth && y - globalDltY <=  imgHeight && y - globalDltY  >= 0){

                        newPoints.push({
                          x:imgWidth,
                          y: y - globalDltY
                        });

                      }else if(x + globalDltX <= 0 && y - globalDltY <=  imgHeight && y - globalDltY  >= 0){
                        newPoints.push({
                          x:0,
                          y: y - globalDltY
                        });
                      }else if(y - globalDltY >=  imgHeight && x + globalDltX <= imgWidth && x + globalDltX >= 0){
                        newPoints.push({
                          x:x + globalDltX,
                          y: imgHeight
                        });
                      }else if(y - globalDltY  <= 0 && x + globalDltX <= imgWidth && x + globalDltX >= 0){
                        newPoints.push({
                          x:x + globalDltX,
                          y: 0
                        });
                      }else if(y - globalDltY  <= 0 && x + globalDltX <= 0){
                        
                        newPoints.push({
                          x:0,
                          y: 0
                        });
                      }else if(y - globalDltY  <= 0 && x + globalDltX >= imgWidth){
                        newPoints.push({
                          x:imgWidth,
                          y: 0
                        });
                      }else if(y - globalDltY >=  imgHeight && x + globalDltX >= imgWidth){
                        newPoints.push({
                          x:imgWidth,
                          y: imgHeight
                        });
                      }else if(y - globalDltY >=  imgHeight && x + globalDltX <= 0){
                        newPoints.push({
                          x:0,
                          y: imgHeight
                        });
                      }else{
                        newPoints.push({
                          x: x + globalDltX,
                          y: y - globalDltY
                        });

                      }
                      }else{
                        newPoints.push({
                          x: x + globalDltX,
                          y: y - globalDltY
                        });

                      }

                    } // 说明是中间节点
                    else if (index === intIndex && intIndex !== _this13.hoverFeatureIndex) {
                        // 其次判断当前点与下一点之间的中心点
                        var nextPoint = points[index + 1] || points[0];
                        var middlePoint = Util.MathUtil.getMiddlePoint({
                          x: x,
                          y: y
                        }, nextPoint);
                        newPoints.push({
                          x: x,
                          y: y
                        });
                        var pointX = middlePoint.x + globalDltX
                        var pointY = middlePoint.y - globalDltY
                        if(pointX<0){
                          pointX = 0
                        }else if(pointX>imgWidth){
                          pointX = imgWidth
                        }
                        if(pointY<0){
                          pointY = 0
                        }else if(pointY>imgHeight){
                          pointY = imgHeight
                        }
                        newPoints.push({
                          x: pointX,
                          y: pointY
                        });

                        
                    

                      } // 说明其他节点
                      else {
                          newPoints.push({
                            x: x,
                            y: y
                          });
                        }
                  });
                } // 保存


              if (isLine) {
                var _newPoints = newPoints,
                    _newPoints2 = _slicedToArray(_newPoints, 2),
                    start = _newPoints2[0],
                    end = _newPoints2[1];

                this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), {}, {
                  start: start,
                  end: end
                });
              } else {
                this.toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), {}, {
                  points: newPoints
                });
              } // 临时层执行绘制


              this.map.overlayLayer.addActiveFeature(activeFeature); // 线段绘制

              isLine && this.map.overlayLayer.addLineFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  strokeStyle: (_this$map4 = this.map) === null || _this$map4 === void 0 ? void 0 : _this$map4.editingColor
                })
              }); // 多段线绘制

              isPolyline && this.map.overlayLayer.addPolylineFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  strokeStyle: (_this$map5 = this.map) === null || _this$map5 === void 0 ? void 0 : _this$map5.editingColor
                })
              }); // 多边形绘制

              isPolygon && this.map.overlayLayer.addPolygonFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread$6(_objectSpread$6({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: (_this$map6 = this.map) === null || _this$map6 === void 0 ? void 0 : _this$map6.editingColor
                })
              });
              break;
            }
        }
      }
    }, {
      key: "handleActiveFeatureEnd",
      value: function handleActiveFeatureEnd(e) {
        this.dragging = false; // 鼠标抬起
        document.onmousemove = null;
        document.onmouseup = null;
        this.map.overlayLayer.removeAllFeatureActionText();
        var activeFeature = this.map.activeFeature; // 首先需要恢复选中要素的选中态

        activeFeature && this.map.overlayLayer.addActiveFeature(activeFeature); // 如果存在更新数据

        if (this.toUpdateShape && activeFeature) {
          // 然后进行事件回调处理事件
          var type = activeFeature.type;

          switch (type) {
            case EFeatureType.Point:
            case EFeatureType.Circle:
            case EFeatureType.Line:
            case EFeatureType.Polyline:
            case EFeatureType.Rect:
            case EFeatureType.Polygon:
              {
                this.map.eventsObServer.emit(EEventType.FeatureUpdated, activeFeature, this.toUpdateShape);
                break;
              }
          } // 重置还原


          this.toUpdateShape = null;
        }
      } // 鼠标右键事件处理

    }, {
      key: "handleActiveFeatureElse",
      value: function handleActiveFeatureElse(e) {
        var activeFeature = this.map.activeFeature; // 如果存在更新数据

        if (activeFeature) {
          var type = activeFeature.type,
              shape = activeFeature.shape;

          switch (type) {
            case EFeatureType.Point:
              {
                this.map.eventsObServer.emit(EEventType.FeatureDeleted, activeFeature);
                break;
              }

            case EFeatureType.Polyline:
            case EFeatureType.Polygon:
              {
                var isPolyline = type === EFeatureType.Polyline;
                type === EFeatureType.Polygon;
                var minPointsCount = isPolyline ? 2 : 3;
                var _ref20 = shape,
                    _ref20$points = _ref20.points,
                    points = _ref20$points === void 0 ? [] : _ref20$points; // 如果捕捉到节点 && 当前点的个数大于minPointsCount个点【有可供删除的节点】

                if (isNumber_1(this.hoverFeatureIndex) && points.length > minPointsCount) {
                  var intIndex = parseInt("".concat(this.hoverFeatureIndex), 10); // 说明此时需要删除右键单击的真实节点

                  if (intIndex === this.hoverFeatureIndex) {
                    var newPoints = filter_1(points, function (__, index) {
                      return index !== intIndex;
                    }); // 修正后的shape数据返回


                    var toUpdateShape = _objectSpread$6(_objectSpread$6({}, shape), {}, {
                      points: newPoints
                    });

                    this.map.eventsObServer.emit(EEventType.FeatureUpdated, activeFeature, toUpdateShape);
                  }
                }

                break;
              }
          }
        }
      }
      /*****************************************************/

      /********* mousemove过程中进行捕捉feature判断[临时方案，耗性能] ***********/

      /*****************************************************/

    }, {
      key: "handleFeatureCapture",
      value: function handleFeatureCapture(point) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _option$extraTip = option.extraTip,
            extraTip = _option$extraTip === void 0 ? '' : _option$extraTip;
        var drawing = this.dragging || this.tmpPointsStore.length; // 首先判断用户是否开启捕捉

        if (!this.map.featureCaptureWhenMove || drawing) {
     
          return;
        } // 进行捕捉判断

        var targetFeature = this.map.getTargetFeatureWithPoint(point); // 如果捕捉到，则触发事件回调

        targetFeature && this.setTip({
          text: (extraTip ? extraTip + '/' : '') + '双击选中',
          position: point
        }); // // 清楚timeout-timer
        // this.clearMousemoveTimer();
        // // 重置breakFeatureCapture为非打断状态
        // this.breakFeatureCapture = false;
        // this.mousemoveTimer = window.setTimeout(() => {
        //     // 如果已被后续逻辑重置打断，则直接返回
        //     if (this.breakFeatureCapture) {
        //         return;
        //     }
        //     // 进行捕捉判断
        //     const targetFeature = this.map.getTargetFeatureWithPoint(point);
        //     // 如果捕捉到，则触发事件回调
        //     targetFeature && this.setTip({
        //         text: (extraTip ? extraTip + '/' : '') + '双击选中',
        //         position: point
        //     });
        // }, 200);
      } // 清除mousemove过程捕捉feature的防抖timer

    }, {
      key: "clearMousemoveTimer",
      value: function clearMousemoveTimer() {
        if (this.mousemoveTimer) {
          window.clearTimeout(this.mousemoveTimer);
          this.mousemoveTimer = null;
        }
      } // 获取mouse事件point

    }, {
      key: "getMouseEventPoint",
      value: function getMouseEventPoint(e) {
        // 相关坐标值处理
        var offsetX = e.offsetX,
            offsetY = e.offsetY; // 记录起始坐标

        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen);
        return {
          screen: screen,
          global: global
        };
      }
      /*****************************************************/

      /**************** map 事件绑定 ************************/

      /*****************************************************/
      // onMouseDown: 事件绑定

    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        // 相关坐标值处理
        var screenX = e.screenX,
            screenY = e.screenY; // 设置保存起始坐标

        this.startPoint = this.getMouseEventPoint(e);
        this.startPageScreenPoint = {
          x: screenX,
          y: screenY
        };
        var mapMode = this.map.mode;
        var dragging = this.dragging;

        var isCapturedFeature = this.hoverFeature || isNumber_1(this.hoverFeatureIndex);

        var drawing = !dragging && !isCapturedFeature; // 对外暴露事件执行

        this.map.eventsObServer.emit(EEventType.MouseDown, this.startPoint); // 首先判断是否是取消选中

        if (this.map.activeFeature && !isCapturedFeature) {
          this.map.eventsObServer.emit(EEventType.FeatureUnselected, this.map.activeFeature, 'cancel by click');
          return;
        }

        if (mapMode === EMapMode.Ban) {
          // 禁用任何逻辑判断
          return;
        } else if (mapMode === EMapMode.Pan && drawing) {
          this.handleMapPanStart(e);
        } else if (mapMode === EMapMode.MARKER && drawing) {
          this.handleMarkerStart(e);
        } else if (mapMode === EMapMode.Point && drawing) {
          this.handlePointStart(e);
        } else if (mapMode === EMapMode.Circle && drawing) {
          this.handleCircleStart(e);
        } else if (mapMode === EMapMode.Line && drawing) {
          this.handleLineStart(e);
        } else if (mapMode === EMapMode.Polyline && drawing) {
          this.handlePolylineStart(e);
        } else if (mapMode === EMapMode.Rect && drawing) {
          this.handleRectStart(e);
        } else if (mapMode === EMapMode.Polygon && drawing) {
          this.handlePolygonStart(e);
        } else if ((mapMode === EMapMode.DrawMask || mapMode === EMapMode.ClearMask) && drawing) {
          // 绘制｜清除涂抹
          this.handleMaskStart(e);
        } // 如果存在捕捉到feature或者featureIndex


        if (isCapturedFeature && !dragging) {
          this.handleActiveFeatureStart(e);
        }
      } // onMouseMove: 事件绑定

    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        // 实时记录mouseMoveEvent事件对象
        this.mouseMoveEvent = e; // 获取move坐标

        var _this$getMouseEventPo = this.getMouseEventPoint(e),
            screen = _this$getMouseEventPo.screen,
            global = _this$getMouseEventPo.global; // 后续对应模式处理


        var mapMode = this.map.mode;
        var dragging = this.dragging; // 对外暴露事件执行

        this.map.eventsObServer.emit(EEventType.MouseMove, {
          screen: screen,
          global: global
        });

        if (!this.map.activeFeature && !dragging) {
          // 首先清空临时层
          this.map.overlayLayer.removeAllFeatureActionText();
        }

        if (mapMode === EMapMode.Ban) {
          // 禁用任何逻辑判断
          return;
        } else if (mapMode === EMapMode.Pan && !dragging) {
          this.map.setCursor(ECursorType.Grab);
        } else if (mapMode === EMapMode.MARKER && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
        } else if (mapMode === EMapMode.Point && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.setTip({
            text: '点击绘制点',
            position: global
          });
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.Circle && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.setTip({
            text: '按下确定圆心',
            position: global
          });
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.Line && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handleLineMove(e);
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.Polyline && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handlePolylineMove(e);
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.Rect && !dragging) {

          this.map.setCursor(ECursorType.Crosshair);
          this.setTip({
            text: '按下确定起点',
            position: global
          });
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.Polygon && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handlePolygonMove(e);
          this.handleFeatureCapture(global);
        } else if (mapMode === EMapMode.DrawMask) {
          var lineWidth = get_1(this.map.drawingStyle, 'lineWidth', 1);

          this.map.setCursor(EUrlCursorType.DrawMask, {
            type: EFeatureType.Circle,
            shape: {
              sr: lineWidth / 2,
              cx: global.x,
              cy: global.y
            }
          });
        } else if (mapMode === EMapMode.ClearMask) {
          var _lineWidth = get_1(this.map.drawingStyle, 'lineWidth', 1);

          this.map.setCursor(EUrlCursorType.ClearMask, {
            type: EFeatureType.Circle,
            shape: {
              sr: _lineWidth / 2,
              cx: global.x,
              cy: global.y
            }
          });
        } // 首先判断是否是取消选中

        if (this.map.activeFeature && !dragging) {
          this.setTip({
            text: '单击取消选中',
            position: global
          });
        } // 编辑态，平移捕捉

      if(this.map.restrictArea){

        let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
        let imgWidth = imgLayer.imageInfo.width;
        let imgHeight = imgLayer.imageInfo.height;

        // console.log(global,imgWidth,imgHeight)

        if(global.x>=0 && global.y>=0 && global.x<=imgWidth &&  global.y<=imgHeight){
          this.map.inImg = true
        }else{
          this.map.inImg = false

        }
      
      }

     
        if(this.map.getTargetFeatureWithPoint(global)){
            this.map.inArea = true
        }else{
          this.map.inArea = false
        }
       
        if (includes_1([EMapMode.Point, EMapMode.Circle, EMapMode.Line, EMapMode.Polyline, EMapMode.Rect, EMapMode.Polygon], mapMode) && !dragging) {
          // 如果存在activeFeature, 此时需要进行捕捉
          this.handleActiveFeatureCapture(e);
        }
      } // onMouseUp: 事件绑定

    }, {
      key: "onMouseUp",
      value: function onMouseUp(e) {
        // 对外暴露事件执行

    
        this.map.eventsObServer.emit(EEventType.MouseUp, this.getMouseEventPoint(e));
  
          
        
      
      } // 单击事件

    }, {
      key: "onMouseClick",
      value: function onMouseClick(e) {

        // 对外暴露事件执行
        this.map.eventsObServer.emit(EEventType.Click, this.getMouseEventPoint(e));

      //   // 对外暴露事件执行
      //   this.map.eventsObServer.emit(EEventType.Click, this.getMouseEventPoint(e));
      // //   var inImg = true;
      // //   //范修改 --- 多边形绘制区域
      // //  if(this.map.restrictArea){
      // //   let imgLayer = this.map.layers.filter(item=>item.type == "IMAGE")[0];
      // //   let imgWidth = imgLayer.imageInfo.width;
      // //   let imgHeight = imgLayer.imageInfo.height;
      // //   if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y <= imgHeight && this.startPoint.global.y >= 0){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.x <= 0 && this.startPoint.global.y <= imgHeight && this.startPoint.global.y >= 0){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.y >= imgHeight && this.startPoint.global.x <= imgWidth && this.startPoint.global.x >= 0){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.y <= 0 && this.startPoint.global.x <= imgWidth && this.startPoint.global.x >= 0){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y >= imgHeight){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.x >= imgWidth && this.startPoint.global.y <= 0){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.x <= 0 && this.startPoint.global.y >= imgHeight){
      // //     inImg = false
      // //   }
      // //   else if(this.startPoint.global.x <= 0 && this.startPoint.global.y <= imgHeight){
      // //     inImg = false
      // //   }
        
      // //  }
 
  
      // // 范修改 -- 单击选择
      // // 判断是否在绘制或者编辑拖拽过程中
      //        var mapMode = this.map.mode;
      //        this.clearDownTimer();
      //        var drawing = this.dragging || this.tmpPointsStore.length; // 对外暴露事件执行
      //       //  this.map.eventsObServer.emit(EEventType.DblClick, this.getMouseEventPoint(e));
      //        if (mapMode === EMapMode.Ban){
      //          // 禁用任何逻辑判断
      //          return;
      //        }else if (mapMode === EMapMode.Polygon && !this.map.inArea && !this.map.activeFeature) {
              
      //           this.handlePolygonStart(e);
          
              
      //       }

      //        if (includes_1([EMapMode.Point, EMapMode.Circle, EMapMode.Line, EMapMode.Polyline, EMapMode.Rect, EMapMode.Polygon], mapMode) && !drawing) {
      //          this.handleFeatureSelect(e);
               
      //        }

      // // 范修改 -- 单击选择

      } // onMouseDblClick: 事件绑定-双击事件

    }, {
      key: "onMouseDblClick",  
      value: function onMouseDblClick(e) {
    
          // 判断是否在绘制或者编辑拖拽过程中
          var mapMode = this.map.mode;
          this.clearDownTimer();
          var drawing = this.dragging || this.tmpPointsStore.length; // 对外暴露事件执行
          this.map.eventsObServer.emit(EEventType.DblClick, this.getMouseEventPoint(e));
          if (mapMode === EMapMode.Ban) {
      // 禁用任何逻辑判断
            return;
          } else if (mapMode === EMapMode.Polyline && drawing) {
            this.handlePolylineEnd(e);
          } else if (mapMode === EMapMode.Polygon && drawing) {
            this.handlePolygonEnd(e);
          } // 编辑态，平移捕捉
  
  
          if (includes_1([EMapMode.Point, EMapMode.Circle, EMapMode.Line, EMapMode.Polyline, EMapMode.Rect, EMapMode.Polygon], mapMode) && !drawing) {
            this.handleFeatureSelect(e);
          }
   
      } // onMouseWheel: 鼠标滑动

    }, {
      key: "onMouseWheel",
      value: function onMouseWheel(e) {
        var mapMode = this.map.mode;
        mapMode !== EMapMode.Ban && e.preventDefault(); // 后续对应模式处理

        switch (mapMode) {
          case EMapMode.Ban:
            {
              // 啥都不做
              break;
            }

          case EMapMode.Pan:
            {
              this.handleMapZoom(e);
              break;
            }

          default:
            {
              // 需要判断在绘制过程中是否允许缩放
              if (this.map.zoomWhenDrawing) {
                this.handleMapZoom(e);
              }

              break;
            }
        }
      } // 清除计时器timer

    }, {
      key: "clearPanWhenDrawingTimer",
      value: function clearPanWhenDrawingTimer() {
        if (this.panWhenDrawingTimer) {
          window.clearInterval(this.panWhenDrawingTimer);
          this.panWhenDrawingTimer = null;
        }
      } // 绘制过程中启用平移视野

    }, {
      key: "handlePanWhenDrawing",
      value: function handlePanWhenDrawing(e) {
        var _this14 = this;

        var directionIndex = Util.EventUtil.getMouseDirection(this.map.dom, e);
        this.clearPanWhenDrawingTimer();
        var panScreenDistance = 10; // 每次平移10个像素
        // 如果map设置不允许自动平移 || 没有进行任何绘制点时

        if (!this.map.panWhenDrawing || !this.tmpPointsStore.length) {
          return;
        }

        this.panWhenDrawingTimer = window.setInterval(function () {
          var scale = _this14.map.getScale();

          var panGlobalDistance = panScreenDistance / scale;

          var center = _this14.map.getCenter();

          var isXAxisRight = _this14.map.xAxis.direction === EXAxisDirection.Right;
          var isYAxisTop = _this14.map.yAxis.direction === EYAxisDirection.Top;
          var newCenter = center;

          switch (directionIndex) {
            case 0:
              {
                // 上
                newCenter = {
                  x: center.x,
                  y: isYAxisTop ? center.y + panGlobalDistance : center.y - panGlobalDistance
                };
                break;
              }

            case 1:
              {
                // 右
                newCenter = {
                  x: isXAxisRight ? center.x + panGlobalDistance : center.x - panGlobalDistance,
                  y: center.y
                };
                break;
              }

            case 2:
              {
                // 下
                newCenter = {
                  x: center.x,
                  y: isYAxisTop ? center.y - panGlobalDistance : center.y + panGlobalDistance
                };
                break;
              }

            case 3:
              {
                // 左
                newCenter = {
                  x: isXAxisRight ? center.x - panGlobalDistance : center.x + panGlobalDistance,
                  y: center.y
                };
                break;
              }
          }

          _this14.map.setCenter(newCenter);
        }, 100);
      } // onMouseOut: 鼠标移出

    }, {
      key: "onMouseOut",
      value: function onMouseOut(e) {
        e.preventDefault(); // 清空文字提示层

        this.map.tipLayer.removeAllFeatureActionText(); // 清空鼠标矢量

        this.map.cursorLayer.removeAllFeatureActionText(); // 如果在绘制过程中，此时需要判断是否需要自动平移视野
        // 如果平移到marker上，做忽略处理

        if (e.toElement) {
          var eleDataType = e.toElement.getAttribute('data-type');

          if (eleDataType === EMarkerType.Marker) {
            return;
          }
        }

        this.handlePanWhenDrawing(e); // 对外暴露事件执行

        this.map.eventsObServer.emit(EEventType.MouseOut, this.getMouseEventPoint(e));
      } // onMouseOver: 鼠标移入

    }, {
      key: "onMouseOver",
      value: function onMouseOver(e) {
        e.preventDefault(); // 清空文字提示层

        this.map.tipLayer.removeAllFeatureActionText(); // 清除绘制过程中timer

        this.clearPanWhenDrawingTimer(); // 对外暴露事件执行

        this.map.eventsObServer.emit(EEventType.MouseOver, this.getMouseEventPoint(e));
      } // 撤销临时绘制点集

    }, {
      key: "revokeTmpPointsStore",
      value: function revokeTmpPointsStore() {
        if (!this.tmpPointsStore.length) {
          return;
        }

        this.tmpPointsStore.pop();
        var mouseMoveEvent = this.mouseMoveEvent;
        mouseMoveEvent && this.onMouseMove(mouseMoveEvent);
      } // 设置文字提示

    }, {
      key: "setTip",
      value: function setTip(textInfo) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.map.drawingTip) {
          this.map.tipLayer.addText(textInfo, option);
        } else {
          this.map.tipLayer.removeAllFeatureActionText();
        }
      } // 重置drawing过程中产生的临时数据&清空临时绘制层

    }, {
      key: "reset",
      value: function reset() {
        // 绘制完成之后进行this.tmpPointsStore清空处理
        this.tmpPointsStore = []; // 清空overlayLayer

        this.map.overlayLayer.removeAllFeatureActionText(); // 清空tipLayer

        this.map.tipLayer.removeAllFeatureActionText();
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(EventLayer.prototype), "refresh", this).call(this);
      }
    }]);

    return EventLayer;
  }(Layer$1);

  // 格式
  var IMAGE_FORMAT = {
    BASE64: 'base64',
    BLOB: 'blob'
  };

  var ExportHelperLayer = /*#__PURE__*/function () {
    // canvas大小
    // 当前maskLayer中所有的actions
    // 伪造map对象，给feature使用
    // function: constructor
    function ExportHelperLayer(bounds) {
      _classCallCheck(this, ExportHelperLayer);

      _defineProperty$1(this, "objects", []);

      _defineProperty$1(this, "map", {
        // 空属性/方法
        activeFeature: null,
        setActiveFeature: function setActiveFeature() {},
        getScale: function getScale() {
          return 1;
        },
        transformGlobalToScreen: function transformGlobalToScreen(point) {
          var x = point.x,
              y = point.y;
          var _this$bounds = this.bounds,
              startX = _this$bounds.x,
              startY = _this$bounds.y;
          return {
            x: x - startX,
            y: y - startY
          };
        }
      });

      this.bounds = bounds;
      this.createRenderCanvas(); // 对象冒充运行环境

      this.map.getScale = this.map.getScale.bind(this);
      this.map.transformGlobalToScreen = this.map.transformGlobalToScreen.bind(this);
    } // override 创建Canvas层


    _createClass(ExportHelperLayer, [{
      key: "createRenderCanvas",
      value: function createRenderCanvas() {
        var _this$bounds2 = this.bounds,
            width = _this$bounds2.width,
            height = _this$bounds2.height;
        this.canvas = document.createElement('canvas');
        this.canvas.width = width * CanvasLayer.dpr;
        this.canvas.height = height * CanvasLayer.dpr;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.canvasContext = this.canvas.getContext('2d');
        Graphic.drawRect(this.canvasContext, {
          x: 0,
          y: 0,
          width: this.canvas.width,
          height: this.canvas.height
        }, {
          fill: true,
          fillStyle: '#fff',
          stroke: false
        });
      } // 添加object至当前HelperLayer中

    }, {
      key: "addObject",
      value: function addObject(object) {
        object.onAdd(this);
        this.objects.push(object);
      } // 添加objects至当前HelperLayer中

    }, {
      key: "addObjects",
      value: function addObjects(objects) {
        var _this = this;

        forEach_1(objects, function (object) {
          return _this.addObject(object);
        });
      } // 添加imag至当前canvas

    }, {
      key: "putImage",
      value: function putImage(image) {
        this.canvasContext.drawImage(image, 0, 0);
      } // 添加图片

    }, {
      key: "addImageLayer",
      value: function addImageLayer(imageLayer) {
        // 执行坐标转换
        var _this$map$transformGl = this.map.transformGlobalToScreen(imageLayer.position),
            screenX = _this$map$transformGl.x,
            screenY = _this$map$transformGl.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.map.getScale();
        var _imageLayer$imageInfo = imageLayer.imageInfo,
            width = _imageLayer$imageInfo.width,
            height = _imageLayer$imageInfo.height;
        var screenWidth = width * scale;
        var screenHeight = height * scale;
        imageLayer.image && imageLayer.imageSuccess && Graphic.drawImage(this.canvasContext, {
          image: imageLayer.image,
          x: screenX * dpr,
          y: screenY * dpr,
          width: screenWidth * dpr,
          height: screenHeight * dpr
        }, {});
      }
      /**
       * type: 输出类型，目前支持base64/blob两种格式
       * format: 图片格式： ‘image/png ｜ image/jpeg’,
       * quality：图片质量
       */

    }, {
      key: "convertCanvasToImage",
      value: function convertCanvasToImage(type, format, quality) {
        if (type === IMAGE_FORMAT.BASE64) {
          return this.convertCanvasToBase64(format, quality);
        } else if (type === IMAGE_FORMAT.BLOB) {
          return this.convertCanvasToBlob(format, quality);
        }

        return new Promise(function (resolve, reject) {
          reject(new Error('export params error：' + type));
        });
      } // 转blob

    }, {
      key: "convertCanvasToBlob",
      value: function convertCanvasToBlob(format, quality) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          _this2.canvas.toBlob(function (blob) {
            _this2.canvas = null;
            var _this2$bounds = _this2.bounds,
                width = _this2$bounds.width,
                height = _this2$bounds.height;

            _this2.resizeBlobImage(blob, {
              width: width,
              height: height
            }, format, resolve, reject);
          }, format, quality);
        });
      } // 重设图片大小

    }, {
      key: "resizeBlobImage",
      value: function resizeBlobImage(blob, size) {
        var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image/png';
        var resolve = arguments.length > 3 ? arguments[3] : undefined;
        var reject = arguments.length > 4 ? arguments[4] : undefined;
        var image = new Image();
        var url = URL.createObjectURL(blob);
        image.src = url; // create an off-screen canvas

        var width = size.width,
            height = size.height;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d'); // set its dimension to target size

        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        image.onload = function () {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(url); // drawImage

          ctx.drawImage(image, 0, 0, width, height);
          canvas.toBlob(function (blob) {
            canvas = null;
            resolve(blob);
          }, format, 1);
        };

        image.onerror = function () {
          reject(new Error('resize image error'));
        };
      } // 转base64

    }, {
      key: "convertCanvasToBase64",
      value: function convertCanvasToBase64(format, quality) {
        // 获取base64
        var base64 = this.canvas.toDataURL(format); // 释放内存

        this.canvas = null; // resize图片大小（因为dpr的存在，会导致大小变成dpr倍）

        var _this$bounds3 = this.bounds,
            width = _this$bounds3.width,
            height = _this$bounds3.height;
        return this.resizeBase64Image(base64, {
          width: width,
          height: height
        }, format);
      } // 重设图片大小

    }, {
      key: "resizeBase64Image",
      value: function resizeBase64Image(base64, size) {
        var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'image/png';
        var image = new Image();
        image.src = base64; // create an off-screen canvas

        var width = size.width,
            height = size.height;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d'); // set its dimension to target size

        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        return new Promise(function (resolve, reject) {
          image.onload = function () {
            // drawImage
            ctx.drawImage(image, 0, 0, width, height);
            resolve(canvas.toDataURL(format));
          };

          image.onerror = function () {
            reject(new Error('resize image error'));
          };
        });
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 绘制objects中所有object对象
        forEach_1(this.objects, function (object) {
          return object.refresh();
        });
      } // 清空canvas画布

    }, {
      key: "clear",
      value: function clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } // // 格式转换
      // _fixImageType(format: string) {
      //     format = format.toLowerCase().replace(/jpg/i, 'jpeg');
      //     const r = format.match(/png|jpeg|bmp|gif/)[0];
      //     return 'image/' + r;
      // }
      // // 测试图片下载
      // _testImageDownload(downloadUrl: string, fileName: string = 'export.png'){
      //     let aLink = document.createElement('a');
      //     aLink.style.display = 'none';
      //     aLink.href = downloadUrl;
      //     aLink.download = fileName;
      //     // 触发点击-然后移除
      //     document.body.appendChild(aLink);
      //     aLink.click();
      //     document.body.removeChild(aLink);
      // }

    }]);

    return ExportHelperLayer;
  }();

  var Feature$1 = /*#__PURE__*/function () {
    // featureId
    // featureType
    // props
    // 对象空间数据结构
    // 最小外接矩形

    /**
     * props: feature样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */
    // function: constructor
    function Feature(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Feature);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Feature.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Feature, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when layer remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var _this$layer, _this$layer$map;

        // 如果map上的activeFeature 为 当前feature，此时需要同步更新map.activeFeature
        var activeFeature = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.activeFeature;

        if (activeFeature && activeFeature.id === this.id) {
          this.layer.map.setActiveFeature(null);
        }
      } // 获取最小外接矩形[各子类自行实现]

    }, {
      key: "getBounds",
      value: function getBounds() {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      } // 判断是否捕捉到当前对象，各子类自行实现

    }, {
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        return false;
      } // 更新图形坐标

    }, {
      key: "updateShape",
      value: function updateShape(shape) {
        var _this$layer2, _this$layer3, _this$layer3$map;

        this.shape = shape;
        (_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : _this$layer2.refresh(); // 如果map上的activeFeature 为 当前feature，此时需要同步更新map.activeFeature

        var activeFeature = (_this$layer3 = this.layer) === null || _this$layer3 === void 0 ? void 0 : (_this$layer3$map = _this$layer3.map) === null || _this$layer3$map === void 0 ? void 0 : _this$layer3$map.activeFeature;

        if (activeFeature && activeFeature.id === this.id) {
          this.layer.map.setActiveFeature(this);
        }
      } // 改变样式

    }, {
      key: "setStyle",
      value: function setStyle(style, option) {
        var _this$layer4;

        var _option$refresh = option.refresh,
            refresh = _option$refresh === void 0 ? true : _option$refresh;
        this.style = style;
        refresh && ((_this$layer4 = this.layer) === null || _this$layer4 === void 0 ? void 0 : _this$layer4.refresh());
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Feature;
  }();

  _defineProperty$1(Feature$1, "defaultStyle", {
    opacity: 1,
    fillStyle: 'rgba(255, 0, 0, 0)',
    lineWidth: 1,
    strokeStyle: '#000' // 边框颜色

  });

  function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var PointFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PointFeature, _Feature);

    var _super = _createSuper$g(PointFeature);

    // PointFeature附件选项，附加字段
    // function: constructor
    function PointFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var option = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, PointFeature);

      _this = _super.call(this, id, EFeatureType.Point, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "option", {});

      _this.shape = shape;
      _this.option = assign_1({}, PointFeature.defaultOption, option || {});
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PointFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            x = _ref.x,
            y = _ref.y,
            r = _ref.r,
            sr = _ref.sr;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var buffer = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(r) ? r + buffer : isNumber_1(sr) ? sr / mapScale + buffer : buffer;
        return Util.MathUtil.pointInPoint(point, {
          x: x,
          y: y
        }, {
          tolerance: tolerance
        });
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer2;

        // 执行坐标转换
        var _ref2 = this.shape,
            x = _ref2.x,
            y = _ref2.y,
            r = _ref2.r,
            sr = _ref2.sr;

        if (!((_this$layer2 = this.layer) !== null && _this$layer2 !== void 0 && _this$layer2.map)) {
          return;
        }

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen({
          x: x,
          y: y
        }),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var screenWidth = isNumber_1(r) ? r * scale : isNumber_1(sr) ? sr : 2;
        var cx = screenX * dpr;
        var cy = screenY * dpr;
        var cr = screenWidth * dpr;
        Graphic.drawPoint(this.layer.canvasContext, {
          x: cx,
          y: cy,
          r: cr
        }, this.style, {}); // 说明是选中态，需要绘制边框&交叉线

        if (this.option.active) {
          var LTX = cx - cr - 2;
          var LTY = cy - cr - 2;
          var width = cr * 2 + 4;
          var height = cr * 2 + 4; // 绘制对角线

          var RTX = LTX + width;
          var RTY = LTY;
          var RBX = RTX;
          var RBY = RTY + height;
          var LBX = LTX;
          var LBY = RBY; // 绘制斜对角线

          Graphic.drawLine(this.layer.canvasContext, {
            start: {
              x: LTX,
              y: LTY
            },
            end: {
              x: RBX,
              y: RBY
            }
          }, {
            strokeStyle: '#fff'
          });
          Graphic.drawLine(this.layer.canvasContext, {
            start: {
              x: RTX,
              y: RTY
            },
            end: {
              x: LBX,
              y: LBY
            }
          }, {
            strokeStyle: '#fff'
          }); // 绘制外接矩形

          Graphic.drawRect(this.layer.canvasContext, {
            x: LTX,
            y: LTY,
            width: width,
            height: height
          }, {
            strokeStyle: '#666'
          });
        }
      }
    }]);

    return PointFeature;
  }(Feature$1);

  _defineProperty$1(PointFeature, "defaultOption", {
    active: false // 是否绘制选中态，默认不是选中态【内部使用/内部使用/内部使用】

  });

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var LineFeature = /*#__PURE__*/function (_Feature) {
    _inherits(LineFeature, _Feature);

    var _super = _createSuper$f(LineFeature);

    // function: constructor
    function LineFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, LineFeature);

      _this = _super.call(this, id, EFeatureType.Line, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(LineFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            start = _ref.start,
            end = _ref.end,
            width = _ref.width;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var bufferWidth = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(width) ? width / 2 + bufferWidth : bufferWidth;
        return Util.MathUtil.pointInPolyline(point, [start, end], {
          tolerance: tolerance
        });
      } // 获取线宽

    }, {
      key: "getLineWidth",
      value: function getLineWidth() {
        var _this$layer2, _this$layer2$map;

        var _ref2 = this.shape,
            width = _ref2.width;
        var styleLineWidth = this.style.lineWidth || 1;
        var scale = (_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : (_this$layer2$map = _this$layer2.map) === null || _this$layer2$map === void 0 ? void 0 : _this$layer2$map.getScale();
        return width ? width * scale : styleLineWidth;
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer3;

        if (!((_this$layer3 = this.layer) !== null && _this$layer3 !== void 0 && _this$layer3.map)) {
          return;
        } // 执行坐标转换


        var _ref3 = this.shape,
            start = _ref3.start,
            end = _ref3.end,
            width = _ref3.width;

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(start),
            startX = _this$layer$map$trans.x,
            startY = _this$layer$map$trans.y;

        var _this$layer$map$trans2 = this.layer.map.transformGlobalToScreen(end),
            endX = _this$layer$map$trans2.x,
            endY = _this$layer$map$trans2.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var screenWidth = (width || 0) * scale;
        var lineWidth = this.getLineWidth(); // // draw the starting arrowhead
        // var startRadians=Math.atan((y2-y1)/(x2-x1));
        // startRadians+=((x2>x1)?-90:90)*Math.PI/180;
        // draw the ending arrowhead

        var endRadians = Math.atan((endY - startY) / (endX - startX));
        endRadians += (endX > startX ? 90 : -90) * Math.PI / 180;
        var xDistance = lineWidth * 1.2 * dpr;
        var bufferDltY = lineWidth * 1.4 * dpr; // 判断是否绘制箭头

        if (this.style.arrow) {
          Graphic.drawArrow(this.layer.canvasContext, {
            position: {
              x: endX * dpr,
              y: endY * dpr
            },
            points: [{
              x: 0 * dpr,
              y: 0 - bufferDltY
            }, {
              x: xDistance,
              y: xDistance * 2 - bufferDltY
            }, {
              x: -xDistance,
              y: xDistance * 2 - bufferDltY
            }]
          }, endRadians, _objectSpread$5(_objectSpread$5({}, this.style), {}, {
            lineWidth: 2
          }, this.style.strokeStyle ? {
            fillStyle: this.style.strokeStyle
          } : {}));
        } // 绘制线段


        Graphic.drawLine(this.layer.canvasContext, _objectSpread$5({
          start: {
            x: startX * dpr,
            y: startY * dpr
          },
          end: {
            x: endX * dpr,
            y: endY * dpr
          }
        }, isNumber_1(width) ? {
          width: screenWidth * dpr
        } : {}), this.style, {});
      }
    }]);

    return LineFeature;
  }(Feature$1);

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var PolylineFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PolylineFeature, _Feature);

    var _super = _createSuper$e(PolylineFeature);

    // function: constructor
    function PolylineFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, PolylineFeature);

      _this = _super.call(this, id, EFeatureType.Polyline, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PolylineFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            _ref$points = _ref.points,
            points = _ref$points === void 0 ? [] : _ref$points,
            width = _ref.width;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var bufferWidth = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(width) ? width / 2 + bufferWidth : bufferWidth;
        return Util.MathUtil.pointInPolyline(point, points, {
          tolerance: tolerance
        });
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer2,
            _this2 = this;

        if (!((_this$layer2 = this.layer) !== null && _this$layer2 !== void 0 && _this$layer2.map)) {
          return;
        } // 执行坐标转换


        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawPolyline(this.layer.canvasContext, this.shape, this.style, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread$4({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
      }
    }]);

    return PolylineFeature;
  }(Feature$1);

  function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var RectFeature = /*#__PURE__*/function (_Feature) {
    _inherits(RectFeature, _Feature);

    var _super = _createSuper$d(RectFeature);

    // function: constructor
    function RectFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, RectFeature);

      _this = _super.call(this, id, EFeatureType.Rect, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(RectFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var rectPoints = this.getPoints();
        return Util.MathUtil.pointInPolygon(point, rectPoints);
      } // 获取rect矩形的四个点

    }, {
      key: "getPoints",
      value: function getPoints() {
        var _this$layer, _this$layer$map, _this$layer2, _this$layer2$map;

        var isXAxisLeft = ((_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.xAxis.direction) === EXAxisDirection.Left;
        var isYAxisBottom = ((_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : (_this$layer2$map = _this$layer2.map) === null || _this$layer2$map === void 0 ? void 0 : _this$layer2$map.yAxis.direction) === EYAxisDirection.Bottom;
        var _ref = this.shape,
            startX = _ref.x,
            startY = _ref.y,
            width = _ref.width,
            height = _ref.height;
        var endX = !isXAxisLeft ? startX + width : startX - width;
        var endY = !isYAxisBottom ? startY - height : startY + height; // 矩形点

        return [{
          x: startX,
          y: startY
        }, {
          x: endX,
          y: startY
        }, {
          x: endX,
          y: endY
        }, {
          x: startX,
          y: endY
        }];
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer3,
            _this2 = this;

        if (!((_this$layer3 = this.layer) !== null && _this$layer3 !== void 0 && _this$layer3.map)) {
          return;
        }

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawRect(this.layer.canvasContext, this.shape, this.style, {
          format: function format(shape) {
            var x = shape.x,
                y = shape.y,
                width = shape.width,
                height = shape.height;

            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen({
              x: x,
              y: y
            }),
                screenX = _this2$layer$map$tran.x,
                screenY = _this2$layer$map$tran.y;

            var screenWidth = width * scale;
            var screenHeight = height * scale;
            return {
              x: screenX * dpr,
              y: screenY * dpr,
              width: screenWidth * dpr,
              height: screenHeight * dpr
            };
          }
        });
      }
    }]);

    return RectFeature;
  }(Feature$1);

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var PolygonFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PolygonFeature, _Feature);

    var _super = _createSuper$c(PolygonFeature);

    // function: constructor
    function PolygonFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, PolygonFeature);

      _this = _super.call(this, id, EFeatureType.Polygon, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PolygonFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _ref = this.shape,
            _ref$points = _ref.points,
            points = _ref$points === void 0 ? [] : _ref$points;
        return Util.MathUtil.pointInPolygon(point, points);
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer,
            _this2 = this;

        if (!((_this$layer = this.layer) !== null && _this$layer !== void 0 && _this$layer.map)) {
          return;
        } // 执行坐标转换


        var _ref2 = this.shape,
            points = _ref2.points;
            _ref2.inner;
        var dpr = CanvasLayer.dpr;
        Graphic.drawPolygon(this.layer.canvasContext, points, this.style, {
          format: function format(point) {
            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                screenX = _this2$layer$map$tran.x,
                screenY = _this2$layer$map$tran.y;

            return {
              x: screenX * dpr,
              y: screenY * dpr
            };
          }
        });
      }
    }]);

    return PolygonFeature;
  }(Feature$1);

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var CircleFeature = /*#__PURE__*/function (_Feature) {
    _inherits(CircleFeature, _Feature);

    var _super = _createSuper$b(CircleFeature);

    // PointFeature附件选项，附加字段
    // function: constructor
    function CircleFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var option = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, CircleFeature);

      _this = _super.call(this, id, EFeatureType.Circle, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "option", {});

      _this.shape = shape;
      _this.option = assign_1({}, CircleFeature.defaultOption, option || {});
      return _this;
    } // 根据shape设置subtype属性


    _createClass(CircleFeature, [{
      key: "getSubType",
      value: function getSubType() {
        var _ref = this.shape,
            r = _ref.r,
            sr = _ref.sr;

        if (isNumber_1(r)) {
          return EFeatureCircleSubtype.Global;
        } else if (isNumber_1(sr)) {
          return EFeatureCircleSubtype.Screen;
        }
      } // @override
      // 判断是否捕捉到当前对象，各子类自行实现

    }, {
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
        var isScreenSubtype = this.getSubType() === EFeatureCircleSubtype.Screen;
        var _ref2 = this.shape,
            cx = _ref2.cx,
            cy = _ref2.cy,
            r = _ref2.r,
            sr = _ref2.sr;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var buffer = mapScale ? 3 / mapScale : 0;
        var tolerance = isGlobalSubtype ? r + buffer : isScreenSubtype ? sr / mapScale + buffer : buffer;
        return Util.MathUtil.pointInPoint(point, {
          x: cx,
          y: cy
        }, {
          tolerance: tolerance
        });
      } // // @override
      // // 获取最小外接矩形
      // getBounds(): IRectShape {
      //     const isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
      //     const {cx, cy, r, sr} = this.shape as ICircleShape;
      //     const radius = isGlobalSubtype ? r : (_isNumber(sr) ? sr : 0);
      //     const width = radius * 2;
      //     const height = radius * 2;
      // }
      // 获取4个边界点：如果用户传入的是sr屏幕半径坐标，则返回的点集会随视野变化发生变化

    }, {
      key: "getEdgePoints",
      value: function getEdgePoints() {
        var _this$layer2, _this$layer2$map, _this$layer3, _this$layer3$map;

        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
        var isScreenSubtype = this.getSubType() === EFeatureCircleSubtype.Screen;
        var isXAxisLeft = ((_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : (_this$layer2$map = _this$layer2.map) === null || _this$layer2$map === void 0 ? void 0 : _this$layer2$map.xAxis.direction) === EXAxisDirection.Left;
        var isYAxisBottom = ((_this$layer3 = this.layer) === null || _this$layer3 === void 0 ? void 0 : (_this$layer3$map = _this$layer3.map) === null || _this$layer3$map === void 0 ? void 0 : _this$layer3$map.yAxis.direction) === EYAxisDirection.Bottom;
        var _ref3 = this.shape,
            cx = _ref3.cx,
            cy = _ref3.cy,
            r = _ref3.r,
            sr = _ref3.sr;
        var radius = isGlobalSubtype ? r : isScreenSubtype ? sr : 0;
        var halfRadius = Math.sqrt(radius * radius / 2);
        var xHalfRadius = !isXAxisLeft ? halfRadius : -halfRadius;
        var yHalfRadius = !isYAxisBottom ? halfRadius : -halfRadius;

        if (isGlobalSubtype) {
          return [{
            x: cx - xHalfRadius,
            y: cy + yHalfRadius
          }, // 左上
          {
            x: cx + xHalfRadius,
            y: cy + yHalfRadius
          }, // 右上
          {
            x: cx + xHalfRadius,
            y: cy - yHalfRadius
          }, // 右下
          {
            x: cx - xHalfRadius,
            y: cy - yHalfRadius
          } // 左下
          ];
        } else if (isScreenSubtype) {
          var _this$layer4, _this$layer4$map;

          var scale = (_this$layer4 = this.layer) === null || _this$layer4 === void 0 ? void 0 : (_this$layer4$map = _this$layer4.map) === null || _this$layer4$map === void 0 ? void 0 : _this$layer4$map.getScale();

          if (!scale) {
            console.error('circle getEdgePoints error: no added to layer or map');
            return [];
          }

          var globalRadius = halfRadius / scale;
          var xGlobalRadius = !isXAxisLeft ? globalRadius : -globalRadius;
          var yHGlobalRadius = !isYAxisBottom ? globalRadius : -globalRadius;
          return [{
            x: cx - xGlobalRadius,
            y: cy + yHGlobalRadius
          }, // 左上
          {
            x: cx + xGlobalRadius,
            y: cy + yHGlobalRadius
          }, // 右上
          {
            x: cx + xGlobalRadius,
            y: cy - yHGlobalRadius
          }, // 右下
          {
            x: cx - xGlobalRadius,
            y: cy - yHGlobalRadius
          } // 左下
          ];
        } else {
          console.error('circle getEdgePoints error: no valid radius');
          return [];
        }
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer5,
            _this2 = this;

        if (!((_this$layer5 = this.layer) !== null && _this$layer5 !== void 0 && _this$layer5.map)) {
          return;
        }

        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawCircle(this.layer.canvasContext, this.shape, this.style, // style
        {
          format: function format(shape) {
            var cx = shape.cx,
                cy = shape.cy,
                r = shape.r,
                sr = shape.sr;
            var screenWidth = isGlobalSubtype ? r * scale : isNumber_1(sr) ? sr : 2;

            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen({
              x: cx,
              y: cy
            }),
                globalX = _this2$layer$map$tran.x,
                globalY = _this2$layer$map$tran.y;

            return {
              cx: globalX * dpr,
              cy: globalY * dpr,
              r: screenWidth * dpr
            };
          }
        }); // 说明是选中态，需要绘制边界节点

        if (this.option.active) {
          var edgePoints = this.getEdgePoints();

          forEach_1(edgePoints, function (point) {
            var cx = point.x,
                cy = point.y;
            Graphic.drawCircle(_this2.layer.canvasContext, {
              sr: 3.5,
              cx: cx,
              cy: cy
            }, {
              strokeStyle: '#666',
              fillStyle: '#fff',
              stroke: true,
              fill: true,
              lineWidth: 1
            }, {
              format: function format(shape) {
                var cx = shape.cx,
                    cy = shape.cy,
                    sr = shape.sr;
                var screenWidth = sr;

                var _this2$layer$map$tran2 = _this2.layer.map.transformGlobalToScreen({
                  x: cx,
                  y: cy
                }),
                    globalX = _this2$layer$map$tran2.x,
                    globalY = _this2$layer$map$tran2.y;

                return {
                  cx: globalX * dpr,
                  cy: globalY * dpr,
                  r: screenWidth * dpr
                };
              }
            });
          });
        }
      }
    }]);

    return CircleFeature;
  }(Feature$1);

  _defineProperty$1(CircleFeature, "defaultOption", {
    active: false // 是否绘制选中态，默认不是选中态【内部使用/内部使用/内部使用】

  });

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var DrawActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(DrawActionFeature, _Action);

    var _super = _createSuper$a(DrawActionFeature);

    // 当前涂抹action分类
    // function: constructor
    function DrawActionFeature(id, category, shape) {
      var _this;

      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, DrawActionFeature);

      _this = _super.call(this, id, EMaskActionType.Draw, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "category", '');

      _this.shape = shape;
      _this.category = category;
      return _this;
    } // 执行绘制当前
    // @override


    _createClass(DrawActionFeature, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale(); // 设置倒圆角

        var formateStyle = _objectSpread$3(_objectSpread$3({}, this.style || {}), {}, {
          lineCap: 'round',
          lineJoin: 'round'
        });

        Graphic.drawPolyline(this.layer.canvasContext, this.shape, formateStyle, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread$3({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
      }
    }]);

    return DrawActionFeature;
  }(Action);

  var ETextType;

  (function (ETextType) {
    ETextType["Text"] = "TEXT";
  })(ETextType || (ETextType = {}));

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Text = /*#__PURE__*/function () {
    // textId
    // textType
    // props
    // text-container

    /**
     * props: feature样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */

    /**
     * props: text文本
     * defaultTextInfo: 默认文本配置项
     * style: userTextInfo merge defaultTextInfo
    */
    // function: constructor
    function Text(id, text) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Text);

      this.id = id;
      this.type = ETextType.Text;
      this.props = props;
      this.textInfo = assign_1({}, Text.defaultTextInfo, text);
      this.style = assign_1({}, Text.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Text, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when control remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {} // 更新text

    }, {
      key: "updateText",
      value: function updateText(text) {
        if (isString_1(text) && text) {
          var _this$layer;

          var textInfo = this.textInfo;
          this.textInfo = _objectSpread$2(_objectSpread$2({}, textInfo), {}, {
            text: text
          });
          (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : _this$layer.refresh();
        }
      } // 更新text位置

    }, {
      key: "updatePosition",
      value: function updatePosition(position) {
        var _this$layer2;

        var textInfo = this.textInfo;
        this.textInfo = _objectSpread$2(_objectSpread$2({}, textInfo), {}, {
          position: position
        });
        (_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : _this$layer2.refresh();
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer3,
            _this = this;

        if (!((_this$layer3 = this.layer) !== null && _this$layer3 !== void 0 && _this$layer3.map)) {
          return;
        }

        var textInfo = this.textInfo;
        var dpr = CanvasLayer.dpr;
        Graphic.drawText(this.layer.canvasContext, textInfo, this.style, {
          format: function format(info) {
            var position = info.position,
                offset = info.offset;

            var _this$layer$map$trans = _this.layer.map.transformGlobalToScreen(position),
                screenX = _this$layer$map$trans.x,
                screenY = _this$layer$map$trans.y;

            var offsetX = offset.x,
                offsetY = offset.y;
            return _objectSpread$2(_objectSpread$2({}, info), {}, {
              position: {
                x: screenX * dpr,
                y: screenY * dpr
              },
              offset: {
                x: offsetX * dpr,
                y: offsetY * dpr
              }
            });
          }
        });
      } // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Text;
  }();

  _defineProperty$1(Text, "defaultStyle", {
    opacity: 1,
    strokeStyle: '#FF0000',
    background: true,
    // 是否有背景色
    fontColor: '#FFFFFF',
    // 字体颜色
    fillStyle: '#FF0000',
    font: 'normal 12px Arial',
    textAlign: 'left',
    textBaseline: 'bottom'
  });

  _defineProperty$1(Text, "defaultTextInfo", {
    text: '',
    position: {
      x: 0,
      y: 0
    },
    // 文本位置
    offset: {
      x: 0,
      y: 0
    } // 文本偏移量

  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var OverlayLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(OverlayLayer, _CanvasLayer);

    var _super = _createSuper$9(OverlayLayer);

    // 当前featureLayer中所有的features
    // 默认active的样式
    // 默认text文本的样式
    // function: constructor
    function OverlayLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, OverlayLayer);

      _this = _super.call(this, id, ELayerType.Overlay, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "featureActionTexts", []);

      _defineProperty$1(_assertThisInitialized(_this), "defaultActiveFeatureStyle", {
        strokeStyle: '#FF0000',
        fillStyle: '#FF0000',
        lineWidth: 1
      });

      _defineProperty$1(_assertThisInitialized(_this), "defaultTextStyle", {
        fillStyle: '#FFFFFF',
        strokeStyle: '#D2691E',
        background: true,
        globalAlpha: 1,
        fontColor: '#333',
        font: 'normal 10px Arial',
        textBaseline: 'top'
      });

      return _this;
    } // 添加feature至当前FeatureLayer中


    _createClass(OverlayLayer, [{
      key: "addFeatureActionText",
      value: function addFeatureActionText(feature, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        clear && this.removeAllFeatureActionText();
        feature.onAdd(this);
        this.featureActionTexts.push(feature);
      } // 添加point

    }, {
      key: "addPointFeature",
      value: function addPointFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear = option.clear,
            clear = _option$clear === void 0 ? true : _option$clear,
            _option$active = option.active,
            active = _option$active === void 0 ? false : _option$active;
        var feature = new PointFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle, // style
        {
          active: active
        });
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加line

    }, {
      key: "addLineFeature",
      value: function addLineFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear2 = option.clear,
            clear = _option$clear2 === void 0 ? true : _option$clear2;
        var feature = new LineFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        }); // 节点绘制

        var _ref2 = shape,
            start = _ref2.start,
            end = _ref2.end;
        this.addDrawingPoints([start, end]);
      } // 添加polyline

    }, {
      key: "addPolylineFeature",
      value: function addPolylineFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear3 = option.clear,
            clear = _option$clear3 === void 0 ? true : _option$clear3;
        var feature = new PolylineFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        }); // 节点绘制

        this.addDrawingPoints(shape.points);
      } // 添加rect

    }, {
      key: "addRectFeature",
      value: function addRectFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear4 = option.clear,
            clear = _option$clear4 === void 0 ? true : _option$clear4;
        var feature = new RectFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        });
        var rectPoints = feature.getPoints();
        this.addDrawingPoints(rectPoints);
      } // 添加polygon

    }, {
      key: "addPolygonFeature",
      value: function addPolygonFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear5 = option.clear,
            clear = _option$clear5 === void 0 ? true : _option$clear5;
        var feature = new PolygonFeature( // 为了非闭合多段线
        "".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        }); // 节点绘制

        this.addDrawingPoints(shape.points);
      } // 添加circle

    }, {
      key: "addCircleFeature",
      value: function addCircleFeature(shape, option) {
        var _ref3 = option || {},
            _ref3$clear = _ref3.clear,
            clear = _ref3$clear === void 0 ? true : _ref3$clear,
            style = _ref3.style,
            _ref3$active = _ref3.active,
            active = _ref3$active === void 0 ? false : _ref3$active;

        var feature = new CircleFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle, // style
        {
          active: active
        });
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加涂抹action

    }, {
      key: "addDrawAction",
      value: function addDrawAction(shape) {
        var action = new DrawActionFeature("".concat(+new Date()), // id
        'drawAction', shape, // shape
        {}, // props
        this.map.drawingStyle // style
        );
        this.addFeatureActionText(action, {
          clear: true
        });
      } // 添加文本

    }, {
      key: "addText",
      value: function addText(textInfo, option) {
        var _ref4 = option || {},
            _ref4$clear = _ref4.clear,
            clear = _ref4$clear === void 0 ? true : _ref4$clear;

        var text = new Text("".concat(+new Date()), // id
        _objectSpread$1(_objectSpread$1({}, textInfo), {}, {
          offset: {
            x: 5,
            y: -5
          }
        }), // shape
        {}, // props
        this.defaultTextStyle // style
        );
        this.addFeatureActionText(text, {
          clear: clear
        });
      } // 绘制当前activeFeature

    }, {
      key: "addActiveFeature",
      value: function addActiveFeature(feature) {
        if (!feature) {
          this.removeAllFeatureActionText();
          return;
        } // 高亮的样式


        var style = this.defaultActiveFeatureStyle; // 做一下深度克隆，避免原有feature被污染[暂时不做克隆，效率太低]
        // const activeFeature = _cloneDeep(feature);

        var type = feature.type,
            shape = feature.shape;

        switch (type) {
          case EFeatureType.Point:
            {
              this.addPointFeature(shape, {
                style: style,
                active: true
              });
              break;
            }

          case EFeatureType.Line:
            {
              this.addLineFeature(shape, {
                style: style
              });
              break;
            }

          case EFeatureType.Polyline:
            {
              this.addPolylineFeature(shape, {
                style: style
              });
              this.addActiveMiddlePoints(shape.points, {
                withClose: false
              });
              break;
            }

          case EFeatureType.Rect:
            {
              this.addRectFeature(shape, {
                style: style
              });
              break;
            }

          case EFeatureType.Polygon:
            {
              this.addPolygonFeature(shape, {
                style: style
              });
              this.addActiveMiddlePoints(shape.points, {
                withClose: true
              });
              break;
            }

          case EFeatureType.Circle:
            {
              this.addCircleFeature(shape, {
                style: style,
                active: true
              });
              break;
            }
        }
      } // 绘制节点中间高亮点

    }, {
      key: "addActiveMiddlePoints",
      value: function addActiveMiddlePoints(points) {
        var _this2 = this;

        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _option$withClose = option.withClose,
            withClose = _option$withClose === void 0 ? true : _option$withClose;

        forEach_1(points, function (point, index) {
          var nextPoint = withClose ? points[index + 1] || points[0] : points[index + 1];

          if (!nextPoint) {
            return;
          }

          var middlePoint = Util.MathUtil.getMiddlePoint(point, nextPoint);

          _this2.addDrawingPoint(middlePoint, {
            strokeStyle: '#228B22',
            withAddIcon: true,
            isMiddlePoint: true
          });
        });
      } // 绘制过程中节点

    }, {
      key: "addDrawingPoints",
      value: function addDrawingPoints(points) {
        var _this3 = this;

        forEach_1(points, function (point) {
          _this3.addDrawingPoint(point);
        });
      } // 绘制节点

    }, {
      key: "addDrawingPoint",
      value: function addDrawingPoint(point) {
        var _this$map, _this$map2;

        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _option$strokeStyle = option.strokeStyle,
            strokeStyle = _option$strokeStyle === void 0 ? '#666' : _option$strokeStyle,
            _option$fillStyle = option.fillStyle,
            fillStyle = _option$fillStyle === void 0 ? '#fff' : _option$fillStyle,
            _option$withAddIcon = option.withAddIcon,
            withAddIcon = _option$withAddIcon === void 0 ? false : _option$withAddIcon,
            _option$iconColor = option.iconColor,
            iconColor = _option$iconColor === void 0 ? '#228B22' : _option$iconColor,
            _option$isMiddlePoint = option.isMiddlePoint,
            isMiddlePoint = _option$isMiddlePoint === void 0 ? false : _option$isMiddlePoint;
        var cx = point.x,
            cy = point.y; // EEventSlotType.DrawActivePoint 插槽拦截处理

        var onDrawActivePoint = (_this$map = this.map) === null || _this$map === void 0 ? void 0 : _this$map.slotsObServer[EEventSlotType.DrawActivePoint];

        if (!isMiddlePoint && isFunction_1(onDrawActivePoint)) {
          var res = onDrawActivePoint(point, this);

          if (res === false) {
            return;
          }
        }

        var onDrawActiveMiddlePoint = (_this$map2 = this.map) === null || _this$map2 === void 0 ? void 0 : _this$map2.slotsObServer[EEventSlotType.DrawActiveMiddlePoint];

        if (isMiddlePoint && isFunction_1(onDrawActiveMiddlePoint)) {
          var _res = onDrawActiveMiddlePoint(point, this);

          if (_res === false) {
            return;
          }
        }
        this.addCircleFeature({
          sr: 3.5,
          cx: cx,
          cy: cy
        }, {
          clear: false,
          style: {
            strokeStyle: strokeStyle,
            fillStyle: fillStyle,
            stroke: true,
            fill: true,
            lineWidth: 1
          }
        }); // 绘制+号

        if (withAddIcon) {
          this.addCircleFeature({
            sr: 1.25,
            cx: cx,
            cy: cy
          }, {
            clear: false,
            style: {
              fillStyle: iconColor,
              stroke: false,
              fill: true
            }
          });
        }
      } // 清空所有子对象

    }, {
      key: "removeAllFeatureActionText",
      value: function removeAllFeatureActionText() {
        this.featureActionTexts = [];
        this.clear();
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(OverlayLayer.prototype), "refresh", this).call(this);

        forEach_1(this.featureActionTexts, function (featureActionText) {
          return featureActionText.refresh();
        });
      }
    }]);

    return OverlayLayer;
  }(CanvasLayer);

  var baseIteratee$1 = _baseIteratee,
      isArrayLike = isArrayLike_1,
      keys = keys_1;

  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind$1(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee$1(predicate);
        collection = keys(collection);
        predicate = function(key) { return iteratee(iterable[key], key, iterable); };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  var _createFind = createFind$1;

  var baseFindIndex = _baseFindIndex,
      baseIteratee = _baseIteratee,
      toInteger = toInteger_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex$1(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate), index);
  }

  var findIndex_1 = findIndex$1;

  var createFind = _createFind,
      findIndex = findIndex_1;

  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.find(users, function(o) { return o.age < 40; });
   * // => object for 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.find(users, { 'age': 1, 'active': true });
   * // => object for 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.find(users, ['active', false]);
   * // => object for 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.find(users, 'active');
   * // => object for 'barney'
   */
  var find = createFind(findIndex);

  var find_1 = find;

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var MarkerLayer = /*#__PURE__*/function (_Layer) {
    _inherits(MarkerLayer, _Layer);

    var _super = _createSuper$8(MarkerLayer);

    // 当前MarkerLayer中所有的markers
    // function: constructor
    function MarkerLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, MarkerLayer);

      _this = _super.call(this, id, ELayerType.Marker, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "markers", []);

      return _this;
    } // 添加marker至当前MarkerLayer中


    _createClass(MarkerLayer, [{
      key: "addMarker",
      value: function addMarker(marker, option) {
        marker.onAdd(this);
        this.markers.push(marker);
      } // 删除marker

    }, {
      key: "removeMarkerById",
      value: function removeMarkerById(targetMarkerId) {
        var newMarkers = filter_1(this.markers, function (marker) {
          var markerId = marker.id;

          if (markerId === targetMarkerId) {
            marker.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的markers


        this.markers = newMarkers;
        this.refresh();
      } // 获取指定marker对象

    }, {
      key: "getMarkerById",
      value: function getMarkerById(targetMarkerId) {
        return find_1(this.markers, function (_ref) {
          var id = _ref.id;
          return id === targetMarkerId;
        });
      } // 获取所有markers

    }, {
      key: "getAllMarkers",
      value: function getAllMarkers() {
        return this.markers;
      } // 删除所有markers

    }, {
      key: "removeAllMarkers",
      value: function removeAllMarkers() {
        var newMarkers = filter_1(this.markers, function (marker) {
          marker.onRemove();
          return false;
        }); // 重新设置最新的markers


        this.markers = newMarkers;
        this.refresh();
      } // @override 重写container大小，设置为0

    }, {
      key: "resize",
      value: function resize() {
        this.dom.style.width = '0px';
        this.dom.style.height = '0px';
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(MarkerLayer.prototype), "refresh", this).call(this);

        forEach_1(this.markers, function (marker) {
          return marker.refresh();
        });
      }
    }]);

    return MarkerLayer;
  }(Layer$1);

  var Map = /*#__PURE__*/function () {
    // 用户侧传入的dom
    // props: domId / dom
    // props: layerDomId / layerDom
    // props: platformDomId / platformDom
    // props: layerDom2Id / layerDom2
    // props: controlDomId / controlDom

    /**
     * props: map可选初始化配置项
     * defaultMapOptions: 默认配置项
     * mapOptions: userMapOptions merge defaultMapOptions
    */
    // 左上角代表的实际坐标值
    // 当前map中包含的controls
    // 当前map中包含的layers
    // 绘制状态下相关样式设置
    // 绘制状态下鼠标旁提示文案开关[默认开启]
    // 编辑时临时feature的颜色
    // slots[暂时采用事件覆盖形式]
    // 当前选中的激活feature对象
    // function: constructor
    function Map(domId, mapOptions) {
      var _this = this;

      _classCallCheck(this, Map);

      _defineProperty$1(this, "controls", []);

      _defineProperty$1(this, "layers", []);

      _defineProperty$1(this, "drawingStyle", {});

      _defineProperty$1(this, "drawingTip", true);

      _defineProperty$1(this, "editingColor", '#FF0000');

      _defineProperty$1(this, "slotsObServer", {});

      _defineProperty$1(this, "activeFeature", null);

      _defineProperty$1(this, "events", {
        on: function on(eventType, callback) {
          _this.eventsObServer.on(eventType, callback);
        }
      });

      _defineProperty$1(this, "slots", {
        on: function on(eventType, callback) {
          _this.slotsObServer[eventType] = callback;
        }
      });

      this.wrapperDomId = domId;
      this.wrapperDom = document.getElementById(domId); // 首先判断是否已经被实例化过
      // 在dom容器创建map主容器

      this.createMainDom(); // 相关参数初始化

      this.mapOptions = assign_1({}, Map.defaultMapOptions, mapOptions);
      this.zoom = this.mapOptions.zoom; // 更新初始zoom

      this.center = this.mapOptions.center; // 更新初始origin

      this.mode = this.mapOptions.mode; // 更新初始map操作模式

      this.refreshDelayWhenZooming = this.mapOptions.refreshDelayWhenZooming; // 是否持续缩放时延时刷新

      this.zoomWhenDrawing = this.mapOptions.zoomWhenDrawing; // 更新是否绘制过程中允许缩放

      this.panWhenDrawing = this.mapOptions.panWhenDrawing; // 更新是否绘制过程中允许平移

      this.featureCaptureWhenMove = this.mapOptions.featureCaptureWhenMove; // mousemove过程中是否开启捕捉, 默认不开启

      this.withHotKeys = this.mapOptions.withHotKeys; // 快捷键开关设置

      this.zoomWheelRatio = this.mapOptions.zoomWheelRatio; // 滑轮缩放速率

      this.xAxis = this.mapOptions.xAxis; // x轴设置

      this.yAxis = this.mapOptions.yAxis; // y轴设置

      this.size = this.mapOptions.size || {
        // 容器大小设置
        width: get_1(this.dom, 'clientWidth', 0),
        height: get_1(this.dom, 'clientHeight', 0)
      }; // 设置容器样式

      this.setDomStyle(); // 分别创建platformContainer/layerContainer/controlCOntainer

      this.createSubDoms(); // 添加overlayLayer至当前map，最终会被添加至platform层

      this.addOverlayLayer(); // 添加tipLayer至当前map，最终会被添加至platform层

      this.addTipLayer(); // 添加cursorLayer至当前map，最终会被添加至platform层

      this.addCursorLayer(); // 添加eventLayer至当前map，最终会被添加至platform层

      this.addEventLayer(); // 添加markerLayer至当前map，最终会被添加至platform层

      this.addMarkerLayer(); // 事件监听实例添加

      this.eventsObServer = new events.EventEmitter();   // 注册快捷键（注意多实例时可能存在冲突问题，后面的实例会覆盖前面的）

      this.withHotKeys && this.registerHotkey();
    } // 设置dom容器的style样式


    _createClass(Map, [{
      key: "setDomStyle",
      value: function setDomStyle() {
        this.dom.ondragstart = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };

        this.dom.oncontextmenu = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
      } // 设置当前mapMode模式

    }, {
      key: "setMode",
      value: function setMode(mode) {
        this.mode = mode;
        this.eventLayer.reset(); // 切换mode时，需要取消activeFeature的选中

        if (this.activeFeature) {
          this.eventsObServer.emit(EEventType.FeatureUnselected, this.activeFeature, 'cancel by switch mode');
        }
      } // 设置当前map绘制状态样式

    }, {
      key: "setDrawingStyle",
      value: function setDrawingStyle(drawingStyle) {
        this.drawingStyle = drawingStyle;
      } // 设置编辑时临时feature的颜色

    }, {
      key: "setEditingColor",
      value: function setEditingColor(color) {
        this.editingColor = color;
      } // 开启绘制过程中的tip提示文案

    }, {
      key: "enableDrawingTip",
      value: function enableDrawingTip() {
        this.drawingTip = true;
      } // 关闭绘制过程中的tip提示文案

    }, {
      key: "disableDrawingTip",
      value: function disableDrawingTip() {
        this.drawingTip = false;
      } // 获取dom宽高（width/height）

    }, {
      key: "getSize",
      value: function getSize() {
        return this.size;
      } // 获取当前的缩放值

    }, {
      key: "getScale",
      value: function getScale(zoom) {
        var scaleZoom = isNumber_1(zoom) ? zoom : this.zoom;
        var dot = 1000000; // 小数点6位数

        var _this$getSize = this.getSize(),
            width = _this$getSize.width;

        var scale = parseInt(width * dot / scaleZoom + '', 10) / dot;
        return scale;
      } // 设置实际坐标系center

    }, {
      key: "setCenter",
      value: function setCenter(center) {
        this.center = center;
        this.refresh();
        this.triggerBoundsChanged();
        return this;
      } // 获取实际坐标系center

    }, {
      key: "getCenter",
      value: function getCenter() {
        return this.center;
      } // 获取屏幕中心点坐标

    }, {
      key: "getScreenCenter",
      value: function getScreenCenter() {
        var _this$getSize2 = this.getSize(),
            width = _this$getSize2.width,
            height = _this$getSize2.height;

        return {
          x: width / 2,
          y: height / 2
        };
      } // 获取当前视野范围

    }, {
      key: "getBounds",
      value: function getBounds(option) {
        var _this$getSize3 = this.getSize(),
            width = _this$getSize3.width,
            height = _this$getSize3.height;

        var _this$transformScreen = this.transformScreenToGlobal({
          x: 0,
          y: 0
        }),
            ltx = _this$transformScreen.x,
            lty = _this$transformScreen.y;

        var _this$transformScreen2 = this.transformScreenToGlobal({
          x: width,
          y: height
        }),
            rtx = _this$transformScreen2.x,
            rty = _this$transformScreen2.y;

        return {
          x: ltx,
          y: lty,
          width: rtx - ltx,
          height: lty - rty
        };
      } // 绘制过程中是否允许自由缩放

    }, {
      key: "enableZoomWhenDrawing",
      value: function enableZoomWhenDrawing() {
        this.zoomWhenDrawing = true;
      }
    }, {
      key: "disableZoomWhenDrawing",
      value: function disableZoomWhenDrawing() {
        this.zoomWhenDrawing = false;
      } // 绘制过程中是否允许自由平移

    }, {
      key: "enablePanWhenDrawing",
      value: function enablePanWhenDrawing() {
        this.panWhenDrawing = true;
      }
    }, {
      key: "disablePanWhenDrawing",
      value: function disablePanWhenDrawing() {
        this.panWhenDrawing = false;
      } // move过程中是否开启捕捉

    }, {
      key: "enableFeatureCaptureWhenMove",
      value: function enableFeatureCaptureWhenMove() {
        this.featureCaptureWhenMove = true;
      }
    }, {
      key: "disableFeatureCaptureWhenMove",
      value: function disableFeatureCaptureWhenMove() {
        this.featureCaptureWhenMove = false;
      } // 开启快捷键

    }, {
      key: "enableHotKeys",
      value: function enableHotKeys() {
        if (!this.withHotKeys) {
          this.withHotKeys = true;
          this.registerHotkey();
        }
      }
    }, {
      key: "disableHotKeys",
      value: function disableHotKeys() {
        if (this.withHotKeys) {
          this.withHotKeys = false;
          this.unbindHotkey();
        }
      } // 定位且zoom到指定zoom值

    }, {
      key: "centerAndZoom",
      value: function centerAndZoom(centerZoom) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _option$refreshDelay = option.refreshDelay,
            refreshDelay = _option$refreshDelay === void 0 ? false : _option$refreshDelay;
        var center = centerZoom.center,
            zoom = centerZoom.zoom;
        center && (this.center = center);
        isNumber_1(zoom) && (this.zoom = zoom); // 只有map设置了this.refreshDelayWhenZooming = true && refreshDelay = true才能允许延时刷新

        this.refresh(refreshDelay && this.refreshDelayWhenZooming);
        this.triggerBoundsChanged();
        return this;
      } // 缩放到指定zoom

    }, {
      key: "zoomTo",
      value: function zoomTo(zoom) {
        this.zoom = zoom;
        this.refresh();
        this.triggerBoundsChanged();
      } // 放大-中心点放大

    }, {
      key: "zoomIn",
      value: function zoomIn() {
        this.zoom = this.zoom / 2;
        this.refresh();
        this.triggerBoundsChanged();
      } // 缩小

    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.zoom = this.zoom * 2;
        this.refresh();
        this.triggerBoundsChanged();
      } // 设置滑轮缩放比例, 取值区间[0, 10)

    }, {
      key: "setZoomWheelRatio",
      value: function setZoomWheelRatio(ratio) {
        this.zoomWheelRatio = ratio;
      } // 添加控件

    }, {
      key: "addControl",
      value: function addControl(control) {
        control.onAdd(this);
        this.controls.push(control);
      } // 删除指定control

    }, {
      key: "removeControlById",
      value: function removeControlById(targetControlId) {
        var newControls = filter_1(this.controls, function (control) {
          var controlId = control.id;

          if (controlId === targetControlId) {
            control.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的controls


        this.controls = newControls;
      } // 添加layer至当前map容器

    }, {
      key: "addLayer",
      value: function addLayer(layer) {
        // 首先将layer-dom-append到容器中
        var layerDom = layer.dom;
        this.layerDom.appendChild(layerDom); // 然后调用layer的onAdd方法

        layer.onAdd(this); // 添加对象layers中

        this.layers.push(layer);
      } // 删除指定layer

    }, {
      key: "removeLayerById",
      value: function removeLayerById(targetLayerId) {
        var newLayers = filter_1(this.layers, function (layer) {
          var layerId = layer.id;

          if (layerId === targetLayerId) {
            layer.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的layers


        this.layers = newLayers; // 执行重绘刷新

        this.refresh();
      } // 删除所有layer[除内置layers]

    }, {
      key: "removeAllLayers",
      value: function removeAllLayers() {
        var newLayers = filter_1(this.layers, function (layer) {
          layer.onRemove();
          return false;
        }); // 重新设置最新的layers


        this.layers = newLayers; // 执行重绘刷新

        this.refresh();
      } // 获取所有手动添加的layers

    }, {
      key: "getLayers",
      value: function getLayers() {
        return this.layers;
      } // 触发视野范围变化回调

    }, {
      key: "triggerBoundsChanged",
      value: function triggerBoundsChanged() {
        var _this2 = this;

        // 通知上层视野范围发生变化
        if (this.boundsChangedTimer) {
          window.clearTimeout(this.boundsChangedTimer);
          this.boundsChangedTimer = null;
        }

        this.boundsChangedTimer = window.setTimeout(function () {
          _this2.eventsObServer.emit(EEventType.BoundsChanged);
        }, 666); // 刷新overlayLayer: 目的是绘制图形过程中刷新临时绘制要素信息

        this.overlayLayer.refresh();
      } // 刷新当前视图
      // refreshDelay 是否需要延迟刷新，主要为了解决滑轮缩放时频繁触发元素refresh

    }, {
      key: "refresh",
      value: function refresh() {
        var refreshDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // 用户加入layer刷新
        forEach_1(this.layers, function (layer) {
          return layer.refresh(refreshDelay);
        }); // markerLayer也要伴随刷新


        this.markerLayer.refresh();
      } // 刷新当前视图

    }, {
      key: "resize",
      value: function resize(size) {
        // 重设size大小
        this.size = size || {
          // 容器大小设置
          width: get_1(this.dom, 'clientWidth', 0),
          height: get_1(this.dom, 'clientHeight', 0)
        }; // 重设最外层容器大小

        this.setLayerDomSize();
        this.setPlatformDomSize(); // resize-layer

        forEach_1(this.layers, function (layer) {
          return layer.resizeAndRefresh();
        }); // 内置图层markerLayer/overlayLayer/tipLayer/eventLayer执行resize


        this.markerLayer.resizeAndRefresh();
        this.overlayLayer.resizeAndRefresh();
        this.tipLayer.resizeAndRefresh();
        this.eventLayer.resizeAndRefresh();
      } // 设置当前active的feature

    }, {
      key: "setActiveFeature",
      value: function setActiveFeature(feature) {
        this.activeFeature = feature; // 如果不存在feature，则清空overLayer, 否则添加activeFeature

        this.overlayLayer.addActiveFeature(feature); // 主动触发一次mouseMove事件

        var mouseMoveEvent = this.eventLayer.mouseMoveEvent;
        mouseMoveEvent && this.eventLayer.onMouseMove(mouseMoveEvent);
      } // 获取当前active的feature

    }, {
      key: "getActiveFeature",
      value: function getActiveFeature() {
        return this.activeFeature;
      } // 撤销临时绘制点【如线段/多段线/多边形等】

    }, {
      key: "removeDrawingPoints",
      value: function removeDrawingPoints() {
        this.eventLayer.revokeTmpPointsStore();
      } // 根据点获取各Layer.Feature上的

    }, {
      key: "getTargetFeatureWithPoint",
      value: function getTargetFeatureWithPoint(globalPoint) {
        var mapLayers = this.getLayers();
        var targetFeatures = [];
        forEach_1(mapLayers, function (layer) {
          if (layer.type === ELayerType.Feature) {
            var target = layer.getTargetFeatureWithPoint(globalPoint);

            if (target) {
              targetFeatures.push(target);
              return false;
            }
          }
        });

        var targetFeature = get_1(targetFeatures, '[0]', null);

        return targetFeature;
      } // 以图片形式导出layers[当前只支持到处text/image/feature三种layer图层]

    }, {
      key: "exportLayersToImage",
      value: function exportLayersToImage(bounds) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _option$layers = option.layers,
            layers = _option$layers === void 0 ? this.getLayers() : _option$layers,
            _option$type = option.type,
            type = _option$type === void 0 ? 'base64' : _option$type,
            _option$format = option.format,
            format = _option$format === void 0 ? 'image/png' : _option$format,
            _option$quality = option.quality,
            quality = _option$quality === void 0 ? 1 : _option$quality;
        var exportLayers = layers;
        var exportLayerHelper = new ExportHelperLayer(bounds);
        var promises = []; // 循环添加feature/text/image

        forEach_1(exportLayers, /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(layer) {
            var features, allFeatures, texts, allTexts, imageBase64, imageLayer;
            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (layer.type === ELayerType.Feature) {
                      features = layer.getAllFeatures();
                      allFeatures = cloneDeep_1(features);
                      exportLayerHelper.addObjects(allFeatures); // 通知结束

                      promises.push(new Promise(function (resolve) {
                        resolve(true);
                      }));
                    } else if (layer.type === ELayerType.Text) {
                      texts = layer.getAllTexts();
                      allTexts = cloneDeep_1(texts); // ImageAction存在跨越问题

                      exportLayerHelper.addObjects(allTexts); // 通知结束

                      promises.push(new Promise(function (resolve) {
                        resolve(true);
                      }));
                    } else if (layer.type === ELayerType.Mask) {
                      imageBase64 = layer.getImageWithBounds(bounds); // 通知结束

                      promises.push(new Promise(function (resolve, reject) {
                        var image = new Image();

                        image.onload = function () {
                          exportLayerHelper.putImage(image);
                          resolve(true);
                        };

                        image.onerror = function () {
                          reject();
                        };

                        image.src = imageBase64;
                      })); // exportLayerHelper.putImage(image as HTMLImageElement);
                    } else if (layer.type === ELayerType.Image) {
                      imageLayer = cloneDeep_1(layer); // 存在跨越问题

                      exportLayerHelper.addImageLayer(imageLayer); // 通知结束

                      promises.push(new Promise(function (resolve) {
                        resolve(true);
                      }));
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()); // 返回promise对象


        return new Promise(function (resolve, reject) {
          Promise.all(promises).then(function () {
            var imagePromise = exportLayerHelper.convertCanvasToImage(type, format, quality);
            imagePromise.then(function (image) {
              exportLayerHelper = null;
              resolve(image);
            })["catch"](function (error) {
              console.log(error);
            });
          })["catch"](function (error) {
            console.log(error);
          });
        });
      } // 屏幕坐标转换全局【实际】坐标，默认基于中心点基准point进行计算

    }, {
      key: "transformScreenToGlobal",
      value: function transformScreenToGlobal(screenPoint, options) {
        var _ref2 = options || {},
            basePoint = _ref2.basePoint,
            zoom = _ref2.zoom;

        var scale = this.getScale(zoom);

        var _this$getScreenCenter = this.getScreenCenter(),
            screenCenterX = _this$getScreenCenter.x,
            screenCenterY = _this$getScreenCenter.y;

        var screenX = screenPoint.x,
            screenY = screenPoint.y;

        var screenBasePointX = get_1(basePoint, 'screen.x', screenCenterX);

        var screenBasePointY = get_1(basePoint, 'screen.y', screenCenterY);

        var _get2 = get_1(basePoint, 'global', this.center),
            basePointX = _get2.x,
            basePointY = _get2.y;

        var dltScreenX = screenX - screenBasePointX;
        var dltScreenY = screenY - screenBasePointY;
        var isXAxisRight = this.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.yAxis.direction === EYAxisDirection.Top;
        var globalX = isXAxisRight ? basePointX + dltScreenX / scale : basePointX - dltScreenX / scale;
        var globalY = isYAxisTop ? basePointY - dltScreenY / scale : basePointY + dltScreenY / scale;
        return {
          x: globalX,
          y: globalY
        };
      } // 全局【实际】坐标转换屏幕坐标，默认基于中心点基准point进行计算

    }, {
      key: "transformGlobalToScreen",
      value: function transformGlobalToScreen(globalPoint, options) {
        var _ref3 = options || {},
            basePoint = _ref3.basePoint,
            zoom = _ref3.zoom;

        var scale = this.getScale(zoom);

        var _this$getScreenCenter2 = this.getScreenCenter(),
            screenCenterX = _this$getScreenCenter2.x,
            screenCenterY = _this$getScreenCenter2.y;

        var globalX = globalPoint.x,
            globalY = globalPoint.y;

        var screenBasePointX = get_1(basePoint, 'screen.x', screenCenterX);

        var screenBasePointY = get_1(basePoint, 'screen.y', screenCenterY);

        var _get3 = get_1(basePoint, 'global', this.center),
            basePointX = _get3.x,
            basePointY = _get3.y;

        var dltGlobalX = globalX - basePointX;
        var dltGlobalY = globalY - basePointY;
        var isXAxisRight = this.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.yAxis.direction === EYAxisDirection.Top;
        var screenX = isXAxisRight ? screenBasePointX + dltGlobalX * scale : screenBasePointX - dltGlobalX * scale;
        var screenY = isYAxisTop ? screenBasePointY - dltGlobalY * scale : screenBasePointY + dltGlobalY * scale;
        return {
          x: screenX,
          y: screenY
        };
      } // 创建this.dom

    }, {
      key: "createMainDom",
      value: function createMainDom() {
        this.domId = "main-wrapper-".concat(uniqueId_1());
        this.dom = document.createElement('div');
        this.dom.setAttribute('id', this.domId);
        this.dom.style.position = 'absolute';
        this.dom.style.left = '0';
        this.dom.style.top = '0';
        this.dom.style.right = '0';
        this.dom.style.bottom = '0';
        this.wrapperDom.appendChild(this.dom);
      } // 创建map容器下相关的container

    }, {
      key: "createSubDoms",
      value: function createSubDoms() {
        this.setLayerDom();
        this.setPlatformDom();
        this.setLayerDom2();
        this.setControlDom();
      } // 创建图层container

    }, {
      key: "setLayerDom",
      value: function setLayerDom() {
        this.layerDomId = "layer-wrapper-".concat(uniqueId_1());
        this.layerDom = document.createElement('div');
        this.layerDom.setAttribute('id', this.layerDomId);
        this.layerDom.style.position = 'absolute';
        this.layerDom.style.left = '0';
        this.layerDom.style.top = '0';
        this.layerDom.style.zIndex = '1'; // 设置大小

        this.setLayerDomSize(); // add this.layerDom to dom

        this.dom.appendChild(this.layerDom);
      }
    }, {
      key: "setLayerDomSize",
      value: function setLayerDomSize() {
        var _this$getSize4 = this.getSize(),
            width = _this$getSize4.width,
            height = _this$getSize4.height;

        this.layerDom.style.width = "".concat(width, "px");
        this.layerDom.style.height = "".concat(height, "px");
      } // 创建platform平台container[不会进行位置的移动]

    }, {
      key: "setPlatformDom",
      value: function setPlatformDom() {
        this.platformDomId = "platform-wrapper-".concat(uniqueId_1());
        this.platformDom = document.createElement('div');
        this.platformDom.setAttribute('id', this.platformDomId);
        this.platformDom.style.position = 'absolute';
        this.platformDom.style.left = '0';
        this.platformDom.style.top = '0';
        this.platformDom.style.zIndex = '5'; // 设置大小

        this.setPlatformDomSize(); // add this.platformDom to dom

        this.dom.appendChild(this.platformDom);
      }
    }, {
      key: "setPlatformDomSize",
      value: function setPlatformDomSize() {
        var _this$getSize5 = this.getSize(),
            width = _this$getSize5.width,
            height = _this$getSize5.height;

        this.platformDom.style.width = "".concat(width, "px");
        this.platformDom.style.height = "".concat(height, "px");
      } // 创建layer控件container【不同于setLayerDom的是：此容器width=0, height=0】

    }, {
      key: "setLayerDom2",
      value: function setLayerDom2() {
        this.layerDom2Id = "layer2-wrapper-".concat(uniqueId_1());
        this.layerDom2 = document.createElement('div');
        this.layerDom2.setAttribute('id', this.layerDom2Id);
        this.layerDom2.style.position = 'absolute';
        this.layerDom2.style.left = '0';
        this.layerDom2.style.right = '0';
        this.layerDom2.style.width = '0';
        this.layerDom2.style.height = '0';
        this.layerDom2.style.zIndex = '10'; // add this.layerDom2 to dom

        this.dom.appendChild(this.layerDom2);
      } // 创建control控件container

    }, {
      key: "setControlDom",
      value: function setControlDom() {
        // 暂时不用，control直接会在dom上进行添加
        this.controlDomId = "control-wrapper-".concat(uniqueId_1());
        this.controlDom = document.createElement('div');
        this.controlDom.setAttribute('id', this.controlDomId);
        this.controlDom.style.position = 'absolute';
        this.controlDom.style.left = '0';
        this.controlDom.style.right = '0';
        this.controlDom.style.width = '0';
        this.controlDom.style.height = '0';
        this.controlDom.style.zIndex = '15'; // add this.controlDom to dom

        this.dom.appendChild(this.controlDom);
      } // 添加eventLayer至当前map

    }, {
      key: "addEventLayer",
      value: function addEventLayer() {
        // 实例化eventLayer
        this.eventLayer = new EventLayer("event-".concat(uniqueId_1()), {}, {
          zIndex: 5
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.eventLayer.dom);
        this.eventLayer.onAdd(this);
      } // 添加overlayLayer至当前map

    }, {
      key: "addOverlayLayer",
      value: function addOverlayLayer() {
        // 实例化overlayLayer
        this.overlayLayer = new OverlayLayer("overlay-".concat(uniqueId_1()), {}, {
          zIndex: 1
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.overlayLayer.dom);
        this.overlayLayer.onAdd(this);
      } // 添加tipLayer至当前map

    }, {
      key: "addTipLayer",
      value: function addTipLayer() {
        // 实例化tipLayer
        this.tipLayer = new OverlayLayer("tip-".concat(uniqueId_1()), {}, {
          zIndex: 2
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.tipLayer.dom);
        this.tipLayer.onAdd(this);
      } // 添加cursorLayer至当前map

    }, {
      key: "addCursorLayer",
      value: function addCursorLayer() {
        // 实例化cursorLayer
        this.cursorLayer = new OverlayLayer("cursor-".concat(uniqueId_1()), {}, {
          zIndex: 3
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.cursorLayer.dom);
        this.cursorLayer.onAdd(this);
      } // 添加markerLayer至当前map

    }, {
      key: "addMarkerLayer",
      value: function addMarkerLayer() {
        // 实例化markerLayer
        this.markerLayer = new MarkerLayer("marker-".concat(uniqueId_1()), {}, {
          zIndex: 10
        }); // 首先将layer-dom-append到容器中

        this.layerDom2.appendChild(this.markerLayer.dom);
        this.markerLayer.onAdd(this);
      } // 注册快捷键

    }, {
      key: "registerHotkey",
      value: function registerHotkey() {
        var _this3 = this;
    
        // 注册ctrl+z删除
        hotkeys('ctrl+z', function (event, handler) {
          _this3.removeDrawingPoints();
        });
      } // 解绑快捷键

    }, {
      key: "unbindHotkey",
      value: function unbindHotkey() {
        hotkeys.unbind('ctrl+z');
      } // setCursor

    }, {
      key: "setCursor",
      value: function setCursor(cursor) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // 鼠标矢量样式层清空
        this.cursorLayer.removeAllFeatureActionText(); // 设置mouse:cursor

        this.platformDom.style.cursor = cursor; // 然后判断是否需要绘制矢量鼠标样式

        this.setCursorFeature(option);
        return this;
      } // setUrlCursor

    }, {
      key: "setUrlCursor",
      value: function setUrlCursor(cursor) {
        return this;
      } // 设置矢量cursor

    }, {
      key: "setCursorFeature",
      value: function setCursorFeature() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = option.type,
            shape = option.shape; // 涂抹/擦除

        if (type === EFeatureType.Circle) {
          this.cursorLayer.addCircleFeature(shape, {
            style: {
              lineWidth: 1,
              strokeStyle: '#aaa',
              fillStyle: '#ffffffb3',
              stroke: true,
              fill: true
            }
          });
        }
      } // map-dragging时调用，在平移时调用

    }, {
      key: "onDrag",
      value: function onDrag(dltX, dltY) {
        this.layerDom.style.left = "".concat(dltX, "px");
        this.layerDom.style.top = "".concat(dltY, "px");
        this.layerDom2.style.left = "".concat(dltX, "px");
        this.layerDom2.style.top = "".concat(dltY, "px");
      } // map缩放

    }, {
      key: "onZoom",
      value: function onZoom(scale) {
        this.dom.style.transform = "scale(".concat(scale, ")");
      } // 复位

    }, {
      key: "reset",
      value: function reset() {
        this.layerDom.style.left = '0';
        this.layerDom.style.top = '0';
        this.layerDom2.style.left = '0';
        this.layerDom2.style.top = '0'; // this.dom.style.transform = 'scale(1)';

        return this;
      } // 用户事件添加

    }, {
      key: "destroy",
      value: // gMap实例销毁
      function destroy() {
        // 移除当前事件
        this.dom.remove();
      } // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Map;
  }();

  _defineProperty$1(Map, "defaultMapOptions", {
    center: {
      x: 0,
      y: 0
    },
    // 中心点坐标
    zoom: 1000,
    // 缩放值
    zoomWheelRatio: 5,
    // 鼠标滑轮缩放大小,取值区间[0, 10)，zoomWheelRatio越小，代表缩放速度越快，反之越慢
    mode: EMapMode.Pan,
    // 默认当前map模式
    size: null,
    // 可自定义容器宽/高，默认取dom: clientWidth/clientHeight
    refreshDelayWhenZooming: true,
    // 当持续缩放时，是否延时feature刷新，默认delay，性能更优
    zoomWhenDrawing: false,
    // 绘制过程中是否允许缩放，默认不会缩放
    featureCaptureWhenMove: false,
    // mousemove过程中是否开启捕捉, 默认不开启
    withHotKeys: true,
    // 是否开启快捷键
    panWhenDrawing: false,
    // 绘制过程中是否允许自动平移，默认不会自动平移
    xAxis: {
      direction: EXAxisDirection.Right
    },
    // x坐标轴方向设置
    yAxis: {
      direction: EYAxisDirection.Bottom
    } // y坐标轴方向设置

  });

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ImageLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(ImageLayer, _CanvasLayer);

    var _super = _createSuper$7(ImageLayer);

    /**
     * props: image可选初始化配置项
     * defaultImageInfo: 默认配置项
     * image: userImage merge defaultImageInfo
    */
    // function: constructor
    function ImageLayer(id, image) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, ImageLayer);

      _this = _super.call(this, id, ELayerType.Image, props, style); // 事件监听实例添加

      _defineProperty$1(_assertThisInitialized(_this), "imageSuccess", false);

      _defineProperty$1(_assertThisInitialized(_this), "events", {
        on: function on(eventType, callback) {
          _this.eventsObServer.on(eventType, callback);
        }
      });

      _this.eventsObServer = new events.EventEmitter();
      _this.imageInfo = assign_1({}, ImageLayer.defaultImageInfo, image);
      _this.position = _this.imageInfo.position;
      _this.grid = _this.imageInfo.grid; // this.updateImage();

      return _this;
    } // 更新图片信息


    _createClass(ImageLayer, [{
      key: "updateImageInfo",
      value: function updateImageInfo(image) {
        this.imageInfo = assign_1({}, this.imageInfo, image);
        image.position && (this.position = this.imageInfo.position);
        image.src && this.updateImage();
        this.refresh();
      } // 更新image对象

    }, {
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.imageInfo.src) {
          this.imageSuccess = false; // 首先执行loadStart回调

          this.eventsObServer.emit(ELayerImageEventType.LoadStart, this.imageInfo.src, this);
          this.image = new Image();

          if (this.imageInfo.crossOrigin) {
            this.image.setAttribute('crossOrigin', 'anonymous');
          } else {
            this.image.removeAttribute('crossOrigin');
          }

          this.image.src = this.imageInfo.src;

          this.image.onload = function () {
            _this2.imageSuccess = true;
            _this2.map && _this2.refresh();

            _this2.eventsObServer.emit(ELayerImageEventType.LoadEnd, _this2.imageInfo.src, _this2);
          };

          this.image.onerror = function () {
            _this2.imageSuccess = false;
            console.error('image src: ' + _this2.imageInfo.src + ' load error');

            _this2.eventsObServer.emit(ELayerImageEventType.LoadError, _this2.imageInfo.src, _this2);
          };
        }
      } // 更新grid网格

    }, {
      key: "updateGrid",
      value: function updateGrid(gridInfo) {
        this.grid = gridInfo;
        this.refresh();
      } // @override

    }, {
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(ImageLayer.prototype), "onAdd", this).call(this, map);

        this.updateImage();
        this.refresh();
      } // 绘制image信息

    }, {
      key: "drawImage",
      value: function drawImage() {
        // 执行坐标转换
        var _this$map$transformGl = this.map.transformGlobalToScreen(this.position),
            screenX = _this$map$transformGl.x,
            screenY = _this$map$transformGl.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.map.getScale();
        var _this$imageInfo = this.imageInfo,
            width = _this$imageInfo.width,
            height = _this$imageInfo.height;
        var screenWidth = width * scale;
        var screenHeight = height * scale;
        this.image && this.imageSuccess && Graphic.drawImage(this.canvasContext, {
          image: this.image,
          x: screenX * dpr,
          y: screenY * dpr,
          width: screenWidth * dpr,
          height: screenHeight * dpr
        }, {});
      } // 绘制grid信息

    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var _this3 = this;

        var _this$imageInfo2 = this.imageInfo,
            width = _this$imageInfo2.width,
            height = _this$imageInfo2.height;
        var _this$position = this.position,
            startX = _this$position.x,
            startY = _this$position.y;
        var dpr = CanvasLayer.dpr;
        var isXAxisRight = this.map.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.map.yAxis.direction === EYAxisDirection.Top;

        var columns = get_1(this.grid, 'columns', []);

        var rows = get_1(this.grid, 'rows', []); // 绘制列


        var columnsCount = columns.length;
        var columnItemWidth = width / (columnsCount + 1);

        forEach_1(columns, function (column, index) {
          var _ref = column || {},
              _ref$color = _ref.color,
              lineColor = _ref$color === void 0 ? '#333' : _ref$color,
              _ref$width = _ref.width,
              lineWidth = _ref$width === void 0 ? 1 : _ref$width;

          var totalItemWidth = (index + 1) * columnItemWidth;
          var itemX = isXAxisRight ? startX + totalItemWidth : startX - totalItemWidth;
          var itemTopY = startY;
          var itemBottomY = isYAxisTop ? startY - height : startY + height;

          var startPoint = _this3.map.transformGlobalToScreen({
            x: itemX,
            y: itemTopY
          });

          var endPoint = _this3.map.transformGlobalToScreen({
            x: itemX,
            y: itemBottomY
          });

          Graphic.drawLine(_this3.canvasContext, {
            start: {
              x: startPoint.x * dpr,
              y: startPoint.y * dpr
            },
            end: {
              x: endPoint.x * dpr,
              y: endPoint.y * dpr
            }
          }, {
            strokeStyle: lineColor,
            lineWidth: lineWidth
          });
        }); // 绘制行


        var rowsCount = rows.length;
        var rowItemHeight = height / (rowsCount + 1);

        forEach_1(rows, function (row, index) {
          var _ref2 = row || {},
              _ref2$color = _ref2.color,
              lineColor = _ref2$color === void 0 ? '#333' : _ref2$color,
              _ref2$width = _ref2.width,
              lineWidth = _ref2$width === void 0 ? 1 : _ref2$width;

          var totalItemHeight = (index + 1) * rowItemHeight;
          var itemY = isYAxisTop ? startY - totalItemHeight : startY + totalItemHeight;
          var itemLeftX = startX;
          var itemRightX = isXAxisRight ? startX + width : startX - width;

          var startPoint = _this3.map.transformGlobalToScreen({
            x: itemLeftX,
            y: itemY
          });

          var endPoint = _this3.map.transformGlobalToScreen({
            x: itemRightX,
            y: itemY
          });

          Graphic.drawLine(_this3.canvasContext, {
            start: {
              x: startPoint.x * dpr,
              y: startPoint.y * dpr
            },
            end: {
              x: endPoint.x * dpr,
              y: endPoint.y * dpr
            }
          }, {
            strokeStyle: lineColor,
            lineWidth: lineWidth
          });
        });
      } // 用户事件添加

    }, {
      key: "refresh",
      value: // @override
      function refresh() {
        _get(_getPrototypeOf(ImageLayer.prototype), "refresh", this).call(this);

        this.drawImage();
        this.drawGrid();
      }
    }]);

    return ImageLayer;
  }(CanvasLayer);

  _defineProperty$1(ImageLayer, "defaultImageInfo", {
    src: '',
    width: 0,
    height: 0,
    position: {
      x: 0,
      y: 0
    },
    // 默认起始位置
    crossOrigin: false,
    grid: {
      columns: [],
      rows: []
    }
  });

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var FeatureLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(FeatureLayer, _CanvasLayer);

    var _super = _createSuper$6(FeatureLayer);

    // function: constructor
    function FeatureLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, FeatureLayer);

      _this = _super.call(this, id, ELayerType.Feature, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "features", []);

      return _this;
    } // 添加feature至当前FeatureLayer中


    _createClass(FeatureLayer, [{
      key: "addFeature",
      value: function addFeature(feature, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        if (clear) {
          this.features = [];
          this.clear();
        }

        feature.onAdd(this);
        this.features.push(feature);
      } // 删除feature

    }, {
      key: "removeFeatureById",
      value: function removeFeatureById(targetFeatureId) {
        var newFeatures = filter_1(this.features, function (feature) {
          var featureId = feature.id;

          if (featureId === targetFeatureId) {
            feature.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的features


        this.features = newFeatures; // 执行重绘刷新

        this.refresh();
      } // 获取指定feature对象

    }, {
      key: "getFeatureById",
      value: function getFeatureById(targetFeatureId) {
        return find_1(this.features, function (_ref2) {
          var id = _ref2.id;
          return id === targetFeatureId;
        });
      } // 获取所有features

    }, {
      key: "getAllFeatures",
      value: function getAllFeatures() {
        return this.features;
      } // 删除所有features

    }, {
      key: "removeAllFeatures",
      value: function removeAllFeatures() {
        var newFeatures = filter_1(this.features, function (feature) {
          feature.onRemove();
          return false;
        }); // 重新设置最新的features


        this.features = newFeatures; // 执行重绘刷新

        this.refresh();
      } // 根据点获取命中的feature

    }, {
      key: "getTargetFeatureWithPoint",
      value: function getTargetFeatureWithPoint(point) {
        var targetFeatures = []; // 为了以后命中多个的返回判断

        forEach_1(this.features, function (feature) {
          var captured = feature.captureWithPoint(point);

          if (captured) {
            targetFeatures.push(feature);
            return false; // 中断玄幻
          }
        });

        return get_1(targetFeatures, '[0]', null);
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        var refreshDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // 首先清除refreshTimer
        if (this.refreshDelayTimer) {
          window.clearTimeout(this.refreshDelayTimer);
          this.refreshDelayTimer = null;
        }

        _get(_getPrototypeOf(FeatureLayer.prototype), "refresh", this).call(this); // 延迟执行刷新


        if (refreshDelay) {
          this.refreshDelayTimer = window.setTimeout(function () {
            forEach_1(_this2.features, function (feature) {
              return feature.refresh();
            });
          }, 100);
          return;
        } // 立即执行刷新


        forEach_1(this.features, function (feature) {
          return feature.refresh();
        });
      }
    }]);

    return FeatureLayer;
  }(CanvasLayer);

  var baseIndexOf = _baseIndexOf;

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes$1(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  var _arrayIncludes = arrayIncludes$1;

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */

  function arrayIncludesWith$1(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  var _arrayIncludesWith = arrayIncludesWith$1;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop$1() {
    // No operation performed.
  }

  var noop_1 = noop$1;

  var Set = _Set,
      noop = noop_1,
      setToArray$1 = _setToArray;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet$1 = !(Set && (1 / setToArray$1(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
    return new Set(values);
  };

  var _createSet = createSet$1;

  var SetCache = _SetCache,
      arrayIncludes = _arrayIncludes,
      arrayIncludesWith = _arrayIncludesWith,
      cacheHas = _cacheHas,
      createSet = _createSet,
      setToArray = _setToArray;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq$1(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    }
    else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = iteratee ? [] : result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  var _baseUniq = baseUniq$1;

  var baseUniq = _baseUniq;

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return (array && array.length) ? baseUniq(array) : [];
  }

  var uniq_1 = uniq;

  var MaskHelperLayer = /*#__PURE__*/function () {
    // canvas大小
    // public canvas: HTMLCanvasElement
    // public canvasContext: CanvasRenderingContext2D
    // 当前maskLayer中所有的actions
    // 伪造map对象，给feature使用
    // function: constructor
    function MaskHelperLayer(bounds) {
      _classCallCheck(this, MaskHelperLayer);

      _defineProperty$1(this, "actions", []);

      _defineProperty$1(this, "map", {
        getScale: function getScale() {
          return 1;
        },
        transformGlobalToScreen: function transformGlobalToScreen(point) {
          var x = point.x,
              y = point.y;
          var _this$bounds = this.bounds,
              startX = _this$bounds.x,
              startY = _this$bounds.y;
          return {
            x: x - startX,
            y: y - startY
          };
        }
      });

      this.bounds = bounds;
      this.createRenderCanvas(); // 对象冒充运行环境

      this.map.getScale = this.map.getScale.bind(this);
      this.map.transformGlobalToScreen = this.map.transformGlobalToScreen.bind(this);
    } // override 创建offscreenCanvas层


    _createClass(MaskHelperLayer, [{
      key: "createRenderCanvas",
      value: function createRenderCanvas() {
        var _this$bounds2 = this.bounds,
            width = _this$bounds2.width,
            height = _this$bounds2.height;
        this.canvas = new OffscreenCanvas(width, height);
        this.canvas.width = width * CanvasLayer.dpr;
        this.canvas.height = height * CanvasLayer.dpr;
        this.canvasContext = this.canvas.getContext('2d'); // const {width, height} = this.bounds;
        // this.canvas = document.createElement('canvas');
        // this.canvas.width = width * CanvasLayer.dpr;
        // this.canvas.height = height * CanvasLayer.dpr;
        // this.canvas.style.width = width + 'px';
        // this.canvas.style.height = height + 'px';
        // this.canvas.style.border = '1px solid red';
        // this.canvasContext = this.canvas.getContext('2d');
        // document.body.appendChild(this.canvas);
      } // 添加action至当前ActionLayer中

    }, {
      key: "addAction",
      value: function addAction(action) {
        action.setStyle({
          strokeStyle: '#ff0000',
          fillStyle: '#ff0000'
        }, {
          refresh: false
        });
        action.onAdd(this);
        this.actions.push(action);
      } // 添加actions至当前ActionLayer中

    }, {
      key: "addActions",
      value: function addActions(actions) {
        var _this = this;

        forEach_1(actions, function (action) {
          return _this.addAction(action);
        });
      } // 获取当前层上的pixels

    }, {
      key: "getRle",
      value: function getRle() {
        var rlePixels = []; // rle数据，第一位是统计value=1的像素数

        var dpr = CanvasLayer.dpr;
        var _this$bounds3 = this.bounds,
            realWidth = _this$bounds3.width,
            realHeight = _this$bounds3.height;
        var _this$canvas = this.canvas,
            width = _this$canvas.width,
            height = _this$canvas.height;
        var pixels = this.canvasContext.getImageData(0, 0, width, height).data;
        var pixelCount = 0; // 统计数据

        var lastPixelValue = 1; // 上一次pixel-value值

        for (var i = 0; i < realHeight; i++) {
          for (var j = 0; j < realWidth; j++) {
            var rIndex = (i * dpr * realWidth + j) * 4 * dpr;
            var rValue = pixels[rIndex];
            var gValue = pixels[rIndex + 1];
            var bValue = pixels[rIndex + 2];
            var aValue = pixels[rIndex + 3];
            var currentPixelValue = +!!(rValue || gValue || bValue || aValue); // 如果当前pixelValue === lastPixelValue 上一次的pixel值

            if (currentPixelValue === lastPixelValue) {
              pixelCount++;
            } else {
              // 此时需要进行push数据
              rlePixels.push(pixelCount);
              pixelCount = 1; // 计数重置为1
            } // 然后判断是否达到最后一个像素点


            if (i + 1 === realHeight && j + 1 === realWidth) {
              rlePixels.push(pixelCount);
            }

            lastPixelValue = currentPixelValue;
          }
        }

        return rlePixels;
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 绘制actions中所有action对象
        forEach_1(this.actions, function (action) {
          return action.refresh();
        });
      } // 清空canvas画布

    }, {
      key: "clear",
      value: function clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }]);

    return MaskHelperLayer;
  }();

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var MaskLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(MaskLayer, _CanvasLayer);

    var _super = _createSuper$5(MaskLayer);

    // function: constructor
    function MaskLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, MaskLayer);

      _this = _super.call(this, id, ELayerType.Mask, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "actions", []);

      return _this;
    } // 添加action至当前ActionLayer中


    _createClass(MaskLayer, [{
      key: "addAction",
      value: function addAction(action, option) {
        action.onAdd(this);
        this.actions.push(action);
      } // 删除action

    }, {
      key: "removeActionById",
      value: function removeActionById(targetActionId) {
        var newActions = filter_1(this.actions, function (action) {
          var actionId = action.id;

          if (actionId === targetActionId) {
            action.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的actions


        this.actions = newActions; // 执行重绘刷新

        this.refresh();
      } // 获取所有actions

    }, {
      key: "getAllActions",
      value: function getAllActions() {
        return this.actions;
      } // 删除所有actions

    }, {
      key: "removeAllActions",
      value: function removeAllActions() {
        var newActions = filter_1(this.actions, function (action) {
          action.onRemove();
          return false;
        }); // 重新设置最新的actions


        this.actions = newActions; // 执行重绘刷新

        this.refresh();
      } // 内部方法
      // 在橡皮擦擦除时添加临时clearAction
      // 此action并非实际真正action, 不会被记录到this.actions中

    }, {
      key: "setMovingClearAction",
      value: function setMovingClearAction(clearAction) {
        clearAction && clearAction.onAdd(this);
        !clearAction && this.refresh();
      } // 获取当前layer上所有category分类

    }, {
      key: "getActionCategories",
      value: function getActionCategories() {
        var actions = this.actions;

        var categories = map_1(actions, function (_ref) {
          var category = _ref.category;
          return category;
        }); // 去重之后，然后去除clearAction对应的category=undefined的情况


        return filter_1(uniq_1(categories), function (category) {
          return !!category;
        });
      } // 根action.category进行分组

    }, {
      key: "groupByCategory",
      value: function groupByCategory() {
        var actions = this.actions;
        var categories = this.getActionCategories();
        var groups = [];

        forEach_1(categories, function (cat) {
          var mappedActions = filter_1(actions, function (_ref2) {
            var type = _ref2.type,
                category = _ref2.category;
            return category === cat || type === EMaskActionType.Clear;
          });

          groups.push({
            category: cat,
            actions: mappedActions
          });
        });

        return groups;
      } // 获取指定group的rleData

    }, {
      key: "getGroupRleData",
      value: function getGroupRleData(group, bounds) {
        var category = group.category,
            _group$actions = group.actions,
            actions = _group$actions === void 0 ? [] : _group$actions;
        var maskLayerHelper = new MaskHelperLayer(bounds);

        var copyActions = cloneDeep_1(actions);

        maskLayerHelper.addActions(copyActions);
        var rle = maskLayerHelper.getRle();
        return {
          category: category,
          rle: rle
        };
      } // 获取指定范围的imageDta

    }, {
      key: "getImageData",
      value: function getImageData(bounds) {
        var x = bounds.x,
            y = bounds.y,
            width = bounds.width,
            height = bounds.height;
        var screenXY = this.map.transformGlobalToScreen({
          x: x,
          y: y
        });
        var scale = this.map.getScale();
        var newX = screenXY.x * CanvasLayer.dpr;
        var newY = screenXY.y * CanvasLayer.dpr;
        var newWidth = width / scale * CanvasLayer.dpr;
        var newHeight = height / scale * CanvasLayer.dpr;
        var imageData = this.canvasContext.getImageData(newX, newY, newWidth, newHeight);
        return imageData;
      } // 返回指定范围的image对象

    }, {
      key: "getImageWithBounds",
      value: function getImageWithBounds(bounds) {
        var width = bounds.width,
            height = bounds.height;
        var imageData = this.getImageData(bounds);
        var canvas = document.createElement('canvas');
        canvas.width = width * CanvasLayer.dpr;
        canvas.height = height * CanvasLayer.dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        var canvasContext = canvas.getContext('2d'); // 绘制截图区域

        canvasContext.putImageData(imageData, 0, 0); // 产出base64图片

        var imageBase64 = canvas.toDataURL('image/png', 1.0); // 返回image对象

        return imageBase64;
      } // 根据分类获取分类分类rle数据, 截取某个范围的数据

    }, {
      key: "getRleData",
      value: function getRleData(bounds) {
        var _this2 = this;

        var groups = this.groupByCategory();
        var rles = []; // 所有category的rle数据集合

        forEach_1(groups, function (group) {
          var rle = _this2.getGroupRleData(group, bounds);

          rles.push(rle);
        });

        return rles;
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this3 = this;

        var refreshDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // 首先清除refreshTimer
        if (this.refreshDelayTimer) {
          window.clearTimeout(this.refreshDelayTimer);
          this.refreshDelayTimer = null;
        }

        _get(_getPrototypeOf(MaskLayer.prototype), "refresh", this).call(this); // 延迟执行刷新


        if (refreshDelay) {
          this.refreshDelayTimer = window.setTimeout(function () {
            forEach_1(_this3.actions, function (action) {
              return action.refresh();
            });
          }, 100);
          return;
        } // 立即执行


        forEach_1(this.actions, function (action) {
          return action.refresh();
        });
      }
    }]);

    return MaskLayer;
  }(CanvasLayer);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var TextLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(TextLayer, _CanvasLayer);

    var _super = _createSuper$4(TextLayer);

    // function: constructor
    function TextLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, TextLayer);

      _this = _super.call(this, id, ELayerType.Text, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "texts", []);

      return _this;
    }

    _createClass(TextLayer, [{
      key: "addText",
      value: function addText(text, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        clear && this.clear();
        text.onAdd(this);
        this.texts.push(text);
      } // 删除text

    }, {
      key: "removeTextById",
      value: function removeTextById(targetTextId) {
        var newTexts = filter_1(this.texts, function (text) {
          var textId = text.id;

          if (textId === targetTextId) {
            text.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的texts


        this.texts = newTexts; // 执行重绘刷新

        this.refresh();
      } // 获取指定text对象

    }, {
      key: "getTextById",
      value: function getTextById(targetTextId) {
        return find_1(this.texts, function (_ref2) {
          var id = _ref2.id;
          return id === targetTextId;
        });
      } // 获取所有texts

    }, {
      key: "getAllTexts",
      value: function getAllTexts() {
        return this.texts;
      } // 删除所有texts

    }, {
      key: "removeAllTexts",
      value: function removeAllTexts() {
        var newTexts = filter_1(this.texts, function (text) {
          text.onRemove();
          return false;
        }); // 重新设置最新的texts


        this.texts = newTexts; // 执行重绘刷新

        this.refresh();
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        var refreshDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // 首先清除refreshTimer
        if (this.refreshDelayTimer) {
          window.clearTimeout(this.refreshDelayTimer);
          this.refreshDelayTimer = null;
        }

        _get(_getPrototypeOf(TextLayer.prototype), "refresh", this).call(this); // 延迟执行刷新


        if (refreshDelay) {
          this.refreshDelayTimer = window.setTimeout(function () {
            forEach_1(_this2.texts, function (text) {
              return text.refresh();
            });
          }, 100);
          return;
        } // 立即刷新


        forEach_1(this.texts, function (text) {
          return text.refresh();
        });
      }
    }]);

    return TextLayer;
  }(CanvasLayer);

  var Layer = {
    Text: TextLayer,
    Mask: MaskLayer,
    Image: ImageLayer,
    Feature: FeatureLayer,
    OverlayLayer: OverlayLayer,
    EventLayer: EventLayer
  };

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ArrowFeature = /*#__PURE__*/function (_Feature) {
    _inherits(ArrowFeature, _Feature);

    var _super = _createSuper$3(ArrowFeature);

    // function: constructor
    function ArrowFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, ArrowFeature);

      _this = _super.call(this, id, EFeatureType.Arrow, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(ArrowFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        return false;
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this$layer;

        if (!((_this$layer = this.layer) !== null && _this$layer !== void 0 && _this$layer.map)) {
          return;
        }
      }
    }]);

    return ArrowFeature;
  }(Feature$1);

  var Feature = {
    Point: PointFeature,
    Circle: CircleFeature,
    Line: LineFeature,
    Polyline: PolylineFeature,
    Rect: RectFeature,
    Polygon: PolygonFeature,
    Arrow: ArrowFeature
  };

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ImageActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(ImageActionFeature, _Action);

    var _super = _createSuper$2(ImageActionFeature);

    // 当前涂抹action分类

    /**
     * props: image可选初始化配置项
     * defaultImageInfo: 默认配置项
     * image: userImage merge defaultImageInfo
    */
    // 图片当前的位置
    // function: constructor
    function ImageActionFeature(id, category, image) {
      var _this;

      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, ImageActionFeature);

      _this = _super.call(this, id, EMaskActionType.Image, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "category", '');

      _this.imageInfo = assign_1({}, ImageActionFeature.defaultImageInfo, image);
      _this.position = _this.imageInfo.position;

      _this.updateImage();

      _this.category = category;
      return _this;
    } // 更新image对象


    _createClass(ImageActionFeature, [{
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.imageInfo.src) {
          this.image = new Image();

          if (this.imageInfo.crossOrigin) {
            this.image.setAttribute('crossOrigin', 'anonymous');
          } else {
            this.image.removeAttribute('crossOrigin');
          }

          this.image.src = this.imageInfo.src;

          this.image.onload = function () {
            return _this2.layer && _this2.refresh();
          };
        }
      } // 绘制image信息

    }, {
      key: "drawImage",
      value: function drawImage() {
        var _this$layer;

        if (!((_this$layer = this.layer) !== null && _this$layer !== void 0 && _this$layer.map)) {
          return;
        } // 执行坐标转换


        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(this.position),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var _this$imageInfo = this.imageInfo,
            width = _this$imageInfo.width,
            height = _this$imageInfo.height;
        var screenWidth = width * scale;
        var screenHeight = height * scale;
        Graphic.drawImage(this.layer.canvasContext, {
          image: this.image,
          x: screenX * dpr,
          y: screenY * dpr,
          width: screenWidth * dpr,
          height: screenHeight * dpr
        }, {});
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(ImageActionFeature.prototype), "refresh", this).call(this);

        this.drawImage();
      }
    }]);

    return ImageActionFeature;
  }(Action);

  _defineProperty$1(ImageActionFeature, "defaultImageInfo", {
    src: '',
    width: 0,
    height: 0,
    crossOrigin: false,
    position: {
      x: 0,
      y: 0
    } // 默认起始位置

  });

  var Mask = {
    Draw: DrawActionFeature,
    Clear: ClearActionFeature,
    Image: ImageActionFeature
  };

  var Control$1 = /*#__PURE__*/function () {
    // controlId
    // controlType
    // control位置
    // props属性
    // option属性
    // props: domId
    // control-container
    // function: constructor
    function Control(id, type, props, option) {
      _classCallCheck(this, Control);

      this.id = id;
      this.type = type;
      this.props = props || {};
      this.option = option || {};
      this.domId = "control-grid-".concat(id, "-wrapper");
      this.createContainer();
    }

    _createClass(Control, [{
      key: "createContainer",
      value: function createContainer() {
        if (!this.dom) {
          this.dom = document.createElement('div');
          this.dom.setAttribute('id', this.domId);
          this.dom.style.position = 'absolute';
          this.dom.style.left = '0';
          this.dom.style.top = '0';
          this.dom.style.zIndex = '20';
        }
      } // function: trigger when control add to map

    }, {
      key: "onAdd",
      value: function onAdd(map) {
        // 首先判断当前layer是否已经被添加至map对象中
        this.map = map;
        this.map.dom.appendChild(this.dom);
      } // trigger when control remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var controlElement = document.getElementById(this.domId);
        controlElement && controlElement.remove();
      } //

    }, {
      key: "updatePosition",
      value: function updatePosition(position) {
        this.position = position;
        this.refresh();
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Control;
  }();

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ScaleControl = /*#__PURE__*/function (_Control) {
    _inherits(ScaleControl, _Control);

    var _super = _createSuper$1(ScaleControl);

    // function: constructor
    function ScaleControl() {

      
      _classCallCheck(this, ScaleControl);

      return _super.call(this);
    } // 执行绘制当前
    // @override


    _createClass(ScaleControl, [{
      key: "refresh",
      value: function refresh() {}
    }]);

    return ScaleControl;
  }(Control$1);

  var EControlType;

  (function (EControlType) {
    EControlType["Scale"] = "SCALE";
    EControlType["Grid"] = "GRID";
  })(EControlType || (EControlType = {}));

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var GridControl = /*#__PURE__*/function (_Control) {
    _inherits(GridControl, _Control);

    var _super = _createSuper(GridControl);

    /**
     * props: gridInfo可选初始化配置项
     * defaultGridInfo: 默认配置项
     * grid: userGridInfo merge defaultGridInfo
    */
    // function: constructor
    function GridControl(id, gridInfo, props, option) {
      var _this;

      _classCallCheck(this, GridControl);

      console.log(111, id);
      _this = _super.call(this, id, EControlType.Grid, props, option);
      _this.gridInfo = assign_1({}, GridControl.defaultGridInfo, gridInfo); // 创建canvas

      _this.creatCanvasElement();

      _this.refreshElement();

      return _this;
    }

    _createClass(GridControl, [{
      key: "refreshElement",
      value: function refreshElement() {
        // 设置container相关
        this.setContainerSize();
        this.setContainerPosition();
        this.setContainerStyle(); // 设置canvas大小

        this.setRenderCanvasSize();
      }
    }, {
      key: "setContainerSize",
      value: function setContainerSize() {
        var _this$gridInfo$size = this.gridInfo.size,
            width = _this$gridInfo$size.width,
            height = _this$gridInfo$size.height;
        this.dom.style.width = width + 'px';
        this.dom.style.height = height + 'px';
      }
    }, {
      key: "setContainerPosition",
      value: function setContainerPosition() {
        var _this$gridInfo$positi = this.gridInfo.position,
            left = _this$gridInfo$positi.left,
            top = _this$gridInfo$positi.top,
            right = _this$gridInfo$positi.right,
            bottom = _this$gridInfo$positi.bottom;
        this.dom.style.left = isNumber_1(left) ? "".concat(left, "px") : 'initial';
        this.dom.style.right = isNumber_1(right) ? "".concat(right, "px") : 'initial';
        this.dom.style.top = isNumber_1(top) ? "".concat(top, "px") : 'initial';
        this.dom.style.bottom = isNumber_1(bottom) ? "".concat(bottom, "px") : 'initial';
      }
    }, {
      key: "setContainerStyle",
      value: function setContainerStyle() {
        this.dom.style.border = '1px solid red';
      } // 创建相关element:div & canvas

    }, {
      key: "creatCanvasElement",
      value: function creatCanvasElement() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        this.dom.appendChild(this.canvas); // canvas上下文赋值

        this.canvasContext = this.canvas.getContext('2d');
      }
    }, {
      key: "setRenderCanvasSize",
      value: function setRenderCanvasSize() {
        var _this$gridInfo$size2 = this.gridInfo.size,
            width = _this$gridInfo$size2.width,
            height = _this$gridInfo$size2.height;
        this.canvas.width = width * CanvasLayer.dpr;
        this.canvas.height = height * CanvasLayer.dpr;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {}
    }]);

    return GridControl;
  }(Control$1);

  _defineProperty$1(GridControl, "defaultGridInfo", {
    position: {
      right: 10,
      bottom: 10
    },
    // 位置
    size: {
      width: 200,
      height: 200
    },
    // 大小
    grid: {
      // 网格信息
      columns: [],
      rows: []
    }
  });

  var Control = {
    Scale: ScaleControl,
    Grid: GridControl
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Marker = /*#__PURE__*/function () {
    // markerId
    // markerType
    // props
    // marker注记icon
    // 是否拖拽中
    // 是否可拖拽【默认可拖拽】

    /**
     * props: text文本
     * defaultMarkerInfo: 默认文本配置项
     * style: userMarkerInfo merge defaultMarkerInfo
    */
    // function: constructor
    function Marker(id, marker) {
      var _this = this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Marker);

      _defineProperty$1(this, "dragging", false);

      _defineProperty$1(this, "draggingEnabled", false);

      _defineProperty$1(this, "events", {
        on: function on(eventType, callback) {
          _this.eventsObServer.on(eventType, callback);
        }
      });

      this.id = id;
      this.type = EMarkerType.Marker;
      this.props = props;
      this.markerInfo = assign_1({}, Marker.defaultMarkerInfo, marker);
      this.updateImage(); // 事件监听实例添加

      this.eventsObServer = new events.EventEmitter();
    } // function: trigger when marker add to markerLayer


    _createClass(Marker, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when marker remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var imageElement = document.getElementById(this.id);
        imageElement && imageElement.remove();
      } // 开启鼠标按下拖拽

    }, {
      key: "enableDragging",
      value: function enableDragging() {
        this.draggingEnabled = true;
        this.dragging = false;
      }
    }, {
      key: "disableDragging",
      value: function disableDragging() {
        this.draggingEnabled = false;
        this.dragging = false;
      } // 更新image对象

    }, {
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.markerInfo.src) {
          this.image = new Image();
          this.image.id = this.id;
          this.image.setAttribute('data-type', this.type);
          this.image.style.position = 'absolute';
          this.image.style.cursor = 'pointer';
          this.image.style.userSelect = 'none';
          this.image.src = this.markerInfo.src;

          this.image.onload = function () {
            var _this2$layer, _this2$layer$dom;

            (_this2$layer = _this2.layer) === null || _this2$layer === void 0 ? void 0 : (_this2$layer$dom = _this2$layer.dom) === null || _this2$layer$dom === void 0 ? void 0 : _this2$layer$dom.appendChild(_this2.image);

            _this2.attachEvents();
          };

          this.image.onerror = function () {
            console.error('marker‘s src onerror');
          };
        }
      } // 更新marker位置

    }, {
      key: "updatePosition",
      value: function updatePosition(position) {
        var markerInfo = this.markerInfo;
        this.markerInfo = _objectSpread(_objectSpread({}, markerInfo), {}, {
          position: position
        });
        this.refresh();
      } // 鼠标按下事件

    }, {
      key: "handleMouseDown",
      value: function handleMouseDown(e) {
        var _this3 = this;

        // 相关坐标值处理
        var screenX = e.screenX,
            screenY = e.screenY;
        this.startPageScreenPoint = {
          x: screenX,
          y: screenY
        }; // 重置

        this.toUpdatePosition = null; // 鼠标event事件

        var buttonIndex = Util.EventUtil.getButtonIndex(e); // 首先执行回调

        this.eventsObServer.emit(EMarkerEventType.MouseDown, this); // 单击鼠标右键

        if (buttonIndex === 2) {
          this.eventsObServer.emit(EMarkerEventType.RightClick, this);
        } // 然后判断是否允许dragging


        if (!this.draggingEnabled) {
          return;
        } // 执行dragging拖拽


        this.dragging = true;

        document.onmousemove = function (e) {
          return _this3.handleMarkerMove(e);
        };

        document.onmouseup = function (e) {
          return _this3.handleMarkerUp(e);
        }; // 执行onDragStart回调


        this.eventsObServer.emit(EMarkerEventType.DragStart, this);
      } // marker平移中

    }, {
      key: "handleMarkerMove",
      value: function handleMarkerMove(e) {
        var scale = this.layer.map.getScale();
        var screenX = e.screenX,
            screenY = e.screenY;
        var _this$startPageScreen = this.startPageScreenPoint,
            x = _this$startPageScreen.x,
            y = _this$startPageScreen.y;
        var screenDltX = screenX - x;
        var screenDltY = screenY - y;
        var preGlobalDltX = screenDltX / scale;
        var preGlobalDltY = screenDltY / scale;
        var isXAxisRight = this.layer.map.xAxis.direction === EXAxisDirection.Right;
        var isYAxisTop = this.layer.map.yAxis.direction === EYAxisDirection.Top;
        var globalDltX = isXAxisRight ? preGlobalDltX : -preGlobalDltX;
        var globalDltY = isYAxisTop ? preGlobalDltY : -preGlobalDltY;
        var position = this.markerInfo.position;
        this.toUpdatePosition = {
          x: position.x + globalDltX,
          y: position.y - globalDltY
        };
        this.refresh(this.toUpdatePosition); // 执行onDragging回调

        this.eventsObServer.emit(EMarkerEventType.Dragging, this, this.toUpdatePosition);
      } // marker平移结束

    }, {
      key: "handleMarkerUp",
      value: function handleMarkerUp(e) {
        this.dragging = false;
        document.onmousemove = null;
        document.onmouseup = null;

        if (this.toUpdatePosition) {
          // 首先复原marker，然后执行回调
          this.refresh(); // 执行更新回调

          this.eventsObServer.emit(EMarkerEventType.DragEnd, this, this.toUpdatePosition);
        }

        this.toUpdatePosition = null;
      } // 鼠标弹起事件

    }, {
      key: "handleMouseUp",
      value: function handleMouseUp(e) {
        this.eventsObServer.emit(EMarkerEventType.MouseUp, this);
      } // 鼠标滑过事件

    }, {
      key: "handleMouseOver",
      value: function handleMouseOver(e) {
        var _this$layer, _this$layer$map;

        // 清空tipLayer文字提示
        this.layer.map.eventLayer.breakFeatureCapture = true;
        (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.tipLayer.removeAllFeatureActionText(); // 触发事件回调

        this.eventsObServer.emit(EMarkerEventType.MouseOver, this);
      } // 鼠标离开事件

    }, {
      key: "handleMouseOut",
      value: function handleMouseOut(e) {
        this.eventsObServer.emit(EMarkerEventType.MouseOut, this);
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        this.eventsObServer.emit(EMarkerEventType.Click, this);
      } // marker添加事件绑定

    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var _this4 = this;

        this.image.onmousedown = function (e) {
          return _this4.handleMouseDown(e);
        };

        this.image.onmouseup = function (e) {
          return _this4.handleMouseUp(e);
        };

        this.image.onmouseover = function (e) {
          return _this4.handleMouseOver(e);
        };

        this.image.onmouseout = function (e) {
          return _this4.handleMouseOut(e);
        };

        this.image.onclick = function (e) {
          return _this4.handleClick(e);
        };
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh(customPosition) {
        var _this$markerInfo = this.markerInfo,
            markerPosition = _this$markerInfo.position,
            offset = _this$markerInfo.offset;
        var position = customPosition || markerPosition;

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(position),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var offsetX = offset.x,
            offsetY = offset.y;
        var left = screenX + offsetX;
        var top = screenY - offsetY;
        this.image.style.left = "".concat(left, "px");
        this.image.style.top = "".concat(top, "px");
      } // 用户事件添加

    }, {
      key: "printInfo",
      value: // 打印测试输出
      function printInfo() {}
    }]);

    return Marker;
  }();

  _defineProperty$1(Marker, "defaultMarkerInfo", {
    src: '',
    position: {
      x: 0,
      y: 0
    },
    // 文本位置
    offset: {
      x: 0,
      y: 0
    } // 文本偏移量

  });

  var AILabel = {
    Map: Map,
    Layer: Layer,
    Feature: Feature,
    Mask: Mask,
    Control: Control,
    Text: Text,
    Marker: Marker,
    Util: Util,
    version: '5.1.6' // 和npm-version保持一致

  };

  return AILabel;

})));

;
//# sourceMappingURL=scripts.js.map