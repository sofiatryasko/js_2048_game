parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=0,s=4,u=4,f=2048,l=document.querySelector(".start"),d=document.querySelectorAll(".field-cell"),v=document.querySelector(".game-score");function m(){for(var r=[],t=0;t<s;t++)for(var e=0;e<u;e++)i[t][e]||r.push({row:t,col:e});if(r.length>0){var n=r[Math.floor(Math.random()*r.length)],o=n.row,a=n.col;i[o][a]=Math.random()<.9?2:4}}function y(){for(var r=0;r<s;r++)for(var t=0;t<u;t++){var e=i[r][t],n=d[r*s+t];n.innerText="",n.classList.value="",n.classList.add("field-cell"),e>0&&(n.innerText=e.toString(),n.classList.add("field-cell--".concat(e.toString())))}v.innerHTML=c}function h(r){return r.filter(function(r){return 0!==r})}function g(r){var t=r;t=h(t);for(var e=0;e<t.length;e++)t[e]===t[e+1]&&(t[e]*=2,t[e+1]=0,c+=t[e]),t[e]===f&&k("win");for(t=h(t);t.length<s;)t.push(0);return t}function L(r,t){return JSON.stringify(r)===JSON.stringify(t)}function b(){for(var t=!1,e=0;e<s;e++){var n=i[e],o=r(n);n=g(n),i[e]=n,t||L(o,n)||(t=!0)}return t}function w(){for(var t=!1,e=0;e<s;e++){var n=i[e],o=r(n);n.reverse(),(n=g(n)).reverse(),i[e]=n,t||L(o,n)||(t=!0)}return t}function S(){for(var t=!1,e=0;e<u;e++){var n=[i[0][e],i[1][e],i[2][e],i[3][e]],o=r(n);n=g(n);for(var a=0;a<s;a++)i[a][e]=n[a];t||L(o,n)||(t=!0)}return t}function A(){for(var t=!1,e=0;e<u;e++){var n=[i[0][e],i[1][e],i[2][e],i[3][e]],o=r(n);n.reverse(),(n=g(n)).reverse();for(var a=0;a<s;a++)i[a][e]=n[a];t||L(o,n)||(t=!0)}return t}function p(){for(var r=0;r<s;r++)for(var t=0;t<u;t++){if(0===i[r][t])return!1;if(t<u-1&&i[r][t]===i[r][t+1]||r<s-1&&i[r][t]===i[r+1][t])return!1}return!0}function k(r){var t=document.querySelectorAll(".message");if(r){var e=document.querySelector(".message-".concat(r));t.forEach(function(r){return r.classList.add("hidden")}),e.classList.remove("hidden")}else t.forEach(function(r){return r.classList.add("hidden")})}function M(){document.body.style.overflow="auto"}l.addEventListener("click",function(){l.classList.contains("start")?(l.classList.remove("start"),l.classList.add("restart"),l.innerHTML="Restart",k(),m(),m(),y()):l.classList.contains("restart")&&(k(),i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=0,m(),m(),y())}),document.addEventListener("keydown",function(r){var t=!1;switch(r.key){case"ArrowRight":t=w();break;case"ArrowLeft":t=b();break;case"ArrowUp":t=S();break;case"ArrowDown":t=A()}t&&(m(),y(),p()&&(k("lose"),M()))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.31a31319.js.map