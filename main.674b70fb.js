parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";for(var n=Array.from(document.querySelector("thead").children[0].cells),t=document.querySelector("tbody"),e=[],r=[],c=function(t){n[t].addEventListener("click",function(n){u(t)})},o=0;o<n.length;o++)c(o);function i(n){return Number(n.match(/\d+/g).join(""))}function u(n){r=Array.from(document.querySelector("tbody").children),e=[];var t=r[0].children[n].textContent.includes("$");r.forEach(function(r){e.push(t?i(r.children[n].textContent):r.children[n].textContent)}),t?e.sort(function(n,t){return n-t}):e.sort(),d(n,t)}function d(n,c){e.forEach(function(e){var o=r.find(function(t){return c?i(t.children[n].textContent)===e:t.children[n].textContent===e});t.append(o),r.splice(r.indexOf(o),1)})}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.674b70fb.js.map