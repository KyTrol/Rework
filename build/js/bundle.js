!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=6)}([function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),i=a(l),u=n(5),s=a(u),c=function(){function e(){o(this,e)}return r(e,null,[{key:"setNavigation",value:function(){var e=document.getElementById("menu-btn"),t=document.getElementsByTagName("nav")[0];e.onclick=function(){var e=this;i.default.toggleClass(t,"active"),i.default.toggleClass(this,"open");var n=document.getElementsByClassName("hline")[0].children[0];setTimeout(function(){i.default.hasClass(e,"open")?i.default.addClass(n,"extend"):i.default.dropClass(n,"extend")},200)}}},{key:"loadSection",value:function(e){var t=document.getElementsByClassName("description")[0],n=t.firstElementChild;if(e!==n.id.split("-")[0]){i.default.addClass(n,"hide");var a=document.getElementById(e+"-page-hidden").cloneNode(!0),o=a.id;setTimeout(function(){i.default.dropChildren(t),a.id=o.substring(0,o.length-7),t.appendChild(a),i.default.dropClasses(a,["no-display","hide"]),"proj"===e&&s.default.setProjectBar()},300)}}}]),e}();t.default=c},function(e,t,n){"use strict";"use_strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){a(this,e)}return o(e,null,[{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"addClasses",value:function(e,t){for(var n=0;n<t.length;n++)this.addClass(e,t[n])}},{key:"dropClass",value:function(e,t){e.classList.remove(t)}},{key:"dropClasses",value:function(e,t){var n=this;t.forEach(function(t){return n.dropClass(e,t)})}},{key:"hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"toggleClass",value:function(e,t){e.classList.toggle(t)}},{key:"createEleWithAttrs",value:function(e){var t=e.tag,n=void 0===t?"div":t,a=e.idName,o=e.className,r=e.classes,l=document.createElement(n);if(a&&l.setAttribute("id",a),o)l.setAttribute("class",o);else if(r)for(var i=0;i<r.length;i++)this.addClass(l,r[i]);return l}},{key:"dropChildren",value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}}]),e}();t.default=r},function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),i=a(l),u=function(){function e(){o(this,e)}return r(e,null,[{key:"loadFromImg",value:function(){for(var e=document.getElementsByClassName("nav-img"),t=0;t<e.length;t++)e[t].onclick=function(e){var t=this.id;"resume"!==t&&i.default.loadSection(t)}}},{key:"loadFromCaption",value:function(){for(var e=document.getElementsByClassName("caption"),t=0;t<e.length;t++)e[t].onclick=function(){var e=this.parentNode.firstElementChild,t=e.id;"resume"!==t?i.default.loadSection(t):e.click()}}}]),e}();t.default=u},function(e,t){},function(e,t,n){e.exports=n.p+"assets/img/head/tree-2x.jpg"},function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),i=a(l),u=function(){function e(){o(this,e)}return r(e,null,[{key:"setProjectBar",value:function(){function e(e){for(var a=function(a){e[a].onclick=function(){i.default.dropClass(this,"inactive");for(var o=0;o<e.length;o++)this!==e[o]&&i.default.addClass(e[o],"inactive");t(a),n(a)}},o=0;o<e.length;o++)a(o)}function t(e){var t=document.getElementsByClassName("platform")[0];0===e?i.default.dropClasses(t,["plat-mid","plat-right"]):1===e?(i.default.dropClass(t,"plat-right"),i.default.addClass(t,"plat-mid")):(i.default.dropClass(t,"plat-mid"),i.default.addClass(t,"plat-right"))}function n(e){for(var t=document.getElementsByClassName("desc-container")[0].children,n=t.item(e),a=function(e){n!==t[e]&&(i.default.addClass(t[e],"hide"),setTimeout(function(){i.default.addClass(t[e],"no-display"),i.default.dropClasses(n,["no-display","hide"])},200))},o=0;o<t.length;o++)a(o)}e(document.getElementsByClassName("proj-icons")[0].getElementsByClassName("proj-icon"))}}]),e}();t.default=u},function(e,t,n){"use strict";"use_strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(0),r=a(o),l=n(2),i=a(l);n(3),n(4),document.addEventListener("DOMContentLoaded",function(){r.default.setNavigation(),i.default.loadFromImg(),i.default.loadFromCaption()})}]);