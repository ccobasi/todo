(()=>{"use strict";var e,n,r,t={426:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,'*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%) !important;\r\n    color: white;\r\n    font-family: "Poppins", sans-serif;\r\n    min-height: 100vh;\r\n    /* background: linear-gradient(rgba(245, 240, 240, 0.8), rgba(245, 240, 240, 0)), url(./task.jpg); */\r\n    background-size: cover;\r\n  }\r\n  \r\n  .box {\r\n    margin: 5% 20%;\r\n  }\r\n  \r\n  h1 {\r\n    padding-top: 10px;\r\n    color: darkblue;\r\n  }\r\n  \r\n  h1 span {\r\n    color: darkorange;\r\n  }\r\n  \r\n  h3 {\r\n    text-transform: capitalize;\r\n    margin: 10px;\r\n    text-align: center;\r\n    border-bottom: 2px solid black;\r\n  }\r\n  \r\n  .project-box {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #all-projects-content,\r\n  .project-box ul li {\r\n    margin: 0.5% 0;\r\n  }\r\n  \r\n  #all-projects-content {\r\n    margin: 5% 20%;\r\n  }\r\n  \r\n  #all-projects-content ul li {\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n  \r\n  #alert {\r\n    margin: 3% 20%;\r\n    display: none;\r\n  }',""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);t&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),n.push(l))}},n}},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function i(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function c(e,n){for(var r={},t=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,n),references:1}),t.push(u)}return t}function l(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,m=0;function v(e,n){var r,t,o;if(n.singleton){var a=m++;r=f||(f=l(n)),t=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=l(n),t=p.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var l=c(e,n),s=0;s<r.length;s++){var u=i(r[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=l}}}}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,exports:{}};return t[e](r,r.exports,a),r.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=a(379),n=a.n(e),r=a(426),n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.querySelector("#tasksubmit").onclick=()=>{const e=document.querySelector("#inputtitle").value.trim(),n=document.querySelector("#inputdate").value,r=document.querySelector("#inputdescription").value.trim(),t=document.querySelector("#inputnote").value,o=document.querySelector("#inputpriority").value;let a=document.querySelector("#inputproject").value.trim().toLowerCase();const i=validateForm(e,n,o),c=document.querySelector("#alert");if(i){a=""===a?"default":a;const i=todoFactory(e,n,r,t,o);if(!projectNameList([]).includes(a)){const e={name:a,list:[]};projects.push(e)}addTaskToProject(i,a),setAlert(c,"success")}else setAlert(c,"danger")}})();