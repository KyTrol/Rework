!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=3)}([function(e,t,n){"use strict";"use_strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return o(e,null,[{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"addClasses",value:function(e,t){for(var n=0;n<t.length;n++)this.addClass(e,t[n])}},{key:"dropClass",value:function(e,t){e.classList.remove(t)}},{key:"dropClasses",value:function(e,t){var n=this;t.forEach(function(t){return n.dropClass(e,t)})}},{key:"hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"toggleClass",value:function(e,t){e.classList.toggle(t)}},{key:"createEleWithAttrs",value:function(e){var t=e.tag,n=void 0===t?"div":t,r=e.idName,o=e.className,a=e.classes,i=document.createElement(n);if(r&&i.setAttribute("id",r),o)i.setAttribute("class",o);else if(a)for(var l=0;l<a.length;l++)this.addClass(i,a[l]);return i}},{key:"dropChildren",value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},{key:"getElementByClass",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return document.getElementsByClassName(e)[t]}}]),e}();t.default=a},function(e,t,n){"use strict";"use_strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=r(i),s=function(){function e(){o(this,e)}return a(e,null,[{key:"bindIcons",value:function(){for(var e=l.default.getElementByClass("menu").children,t=function(t){e[t].onclick=function(){var n=e[t].id.split("-")[0],r=document.getElementById(n).offsetTop;window.scroll(0,r)}},n=0;n<e.length;n++)t(n)}},{key:"bindLinks",value:function(){for(var e=l.default.getElementByClass("links").children,t=this,n=0;n<e.length;n++)e[n].onclick=function(){t.scrollToSection(this.id.split("-")[0])}}},{key:"animateArrow",value:function(){function e(){for(var e=window.innerHeight,t=document.getElementsByTagName("section").length,n=document.getElementById("projects").getBoundingClientRect().top,r=0;r<t;r++){var o=r+1;if(n<=(t-r)*e&&n>=(t-o)*e-e/2)return r}}var t=e(),n=l.default.getElementByClass("links").children,r=n[t].id.split("-")[0],o=l.default.getElementByClass("arrow");if(!l.default.hasClass(o,"arrow-"+r)){for(var a=o.className.split(" "),i=0;i<a.length;i++)"arrow"!==a[i]&&a[i].indexOf("arrow")>=0&&l.default.dropClass(o,a[i]);l.default.addClass(o,"arrow-"+r)}}},{key:"scrollToSection",value:function(e){function t(e){var s=(e-r)/a,u=void 0;if((u=l?n-s*i*-1:n+s*i)<=o&&l||u>=o&&!l)return void(u!==o&&window.scroll(0,o));window.scroll(0,u),window.requestAnimationFrame(t)}var n=window.pageYOffset,r=window.performance.now(),o=document.getElementById(e).offsetTop,a=250,i=o-n,l=i<0;window.requestAnimationFrame(t)}}]),e}();t.default=s},function(e,t){},function(e,t,n){"use strict";"use_strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),i=n(0),l=r(i);n(2),document.addEventListener("DOMContentLoaded",function(){a.default.bindLinks(),a.default.bindIcons();var e=l.default.getElementByClass("arrow");l.default.getElementByClass("menu").offsetHeight||(l.default.dropClass(e,"hide"),a.default.animateArrow()),window.onscroll=function(){!!l.default.getElementByClass("menu").offsetHeight||(a.default.animateArrow(),l.default.hasClass(e,"hide")&&l.default.dropClass(e,"hide"))}})}]);