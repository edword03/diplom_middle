!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".club-select"),t=document.getElementById("toggleHeaderMenu");e.addEventListener("click",(function(){t.style.display&&"none"!==t.style.display?t.style.display="none":t.style.display="block"}))},l=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift"),n=document.getElementById("callback_form"),o=document.getElementById("free_visit_form"),l=document.querySelector(".head-main"),r=function(e){e.style.display="block",e.addEventListener("click",(function(t){var n=t.target;e.style.display="block",n.matches(".close_icon")&&(e.style.display="none"),(n=n.closest(".form-wrapper"))||(e.style.display="none")}))};l.addEventListener("click",(function(e){var t=e.target;t.matches(".open-popup")&&r(o),t.matches("#callbackBtn")&&r(n)})),e&&e.addEventListener("click",(function(n){n.target.matches(".close-btn")&&(t.style.display="none"),e.style.display="none",r(t)}))},r=function(){document.querySelectorAll("form")},c=function(){var e=document.querySelectorAll(".main-slider > .slide"),t=0;setInterval((function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="flex"}(e,t)}),3e3)};(function(){var e=document.getElementById("burgerBtn"),t=document.querySelector(".top-menu"),n=document.querySelector(".popup-menu");window.addEventListener("scroll",(function(){document.documentElement.clientWidth<768?window.pageYOffset>200?(t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="100%"):window.pageYOffset<200&&(t.style=""):t.style=""})),document.documentElement.clientWidth<768&&e.addEventListener("click",(function(){n.style.display="flex",n.addEventListener("click",(function(e){var t=e.target;(t.matches("#closeBtnMenu")||(t=t.closest(".scroll")))&&(n.style.display="none")}))}));var o;(o=document.getElementById("totop")).style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>300?o.style.display="block":o.style.display="none"}))})(),o(),l(),c(),r()}]);