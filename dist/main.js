(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%) !important;\r\n    color: white;\r\n    font-family: "Poppins", sans-serif;\r\n    min-height: 100vh;\r\n    /* background: linear-gradient(rgba(245, 240, 240, 0.8), rgba(245, 240, 240, 0)), url(./task.jpg); */\r\n    background-size: cover;\r\n  }\r\n  \r\n  .box {\r\n    margin: 5% 20%;\r\n  }\r\n  \r\n  h1 {\r\n    padding-top: 10px;\r\n    color: darkblue;\r\n  }\r\n  \r\n  h1 span {\r\n    color: darkorange;\r\n  }\r\n  \r\n  h3 {\r\n    text-transform: capitalize;\r\n    margin: 10px;\r\n    text-align: center;\r\n    border-bottom: 2px solid black;\r\n  }\r\n  \r\n  .project-box {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #all-projects-content,\r\n  .project-box ul li {\r\n    margin: 0.5% 0;\r\n  }\r\n  \r\n  #all-projects-content {\r\n    margin: 5% 20%;\r\n  }\r\n  \r\n  #all-projects-content ul li {\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n  \r\n  #alert {\r\n    margin: 3% 20%;\r\n    display: none;\r\n  }',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,t){var n,r,o;if(t.singleton){var a=f++;n=m||(m=s(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=i(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=s}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{w:()=>d,r:()=>u});var e=n(379),t=n.n(e),o=n(426);function a(e){return{name:e,list:[]}}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=e=>{const t=document.querySelector("#all-projects-content");document.querySelector("#all-projects-content").innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.setAttribute("class",` ${e.name}-project project-box`);const r=document.createElement("h3");r.textContent=e.name;const o=document.createElement("ul");o.id=`${e.name}-list`,n.append(r,o),t.appendChild(n),e.list.forEach((t=>{const n=document.createElement("li"),r=(a=t.duedate,new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));var a;const i=document.createElement("span");i.textContent=t.title;const c=document.createElement("span");c.textContent=r;const s=document.createElement("span");s.textContent=t.priority,n.append(i,c,s);const l=document.createElement("button"),p=document.createElement("button");l.innerHTML='<img src="https://img.icons8.com/fluent-systems-regular/15/000000/edit-property.png" />',l.setAttribute("class"," btn btn-primary"),p.innerHTML='<img src="https://img.icons8.com/material-sharp/15/000000/delete-forever.png" />',p.setAttribute("class","delete-btn btn btn-danger"),n.setAttribute("class","listItem col-md-12"),l.onclick=()=>u(t,e),p.onclick=()=>d(t,e),n.append(l,p),o.appendChild(n)}))}))},{projects:c}=initialData;let{id:s}=initialData;const l=(e,t)=>{e.style.display="block","success"===t?(e.textContent="Task created succesfully!",e.setAttribute("class","box alert alert-success")):"danger"===t&&(e.textContent="Title, Date, and Priority are required fields",e.setAttribute("class","box alert alert-danger"))};document.querySelector("#tasksubmit").onclick=()=>{const e=document.querySelector("#inputtitle").value.trim(),t=document.querySelector("#inputdate").value,n=document.querySelector("#inputdescription").value.trim(),r=document.querySelector("#inputnote").value,o=document.querySelector("#inputpriority").value;let u=document.querySelector("#inputproject").value.trim().toLowerCase();const d=((e,t,n)=>!(""===e||""===t||"Choose..."===n))(e,t,o),p=document.querySelector("#alert");if(d){u=""===u?"default":u;const d=((e,t,n,r,o,a="Empty")=>("Empty"===a?s+=1:s=a,{id:s,title:e,duedate:t,desc:n,note:r,priority:o}))(e,t,n,r,o);if(!(m=[],c.forEach((e=>m.push(e.name))),m).includes(u)){const e=a(u);c.push(e)}f=d,v=u,c.find((e=>e.name===v)).list.push(f),saveData(c,s),i(c),l(p,"success")}else l(p,"danger");var m,f,v};const u=(e,t)=>{const n=document.querySelector("#inputtitle"),r=document.querySelector("#inputdate"),o=document.querySelector("#inputdescription"),a=document.querySelector("#inputnote"),i=document.querySelector("#inputpriority"),c=document.querySelector("#inputproject");n.value=e.title,r.value=e.duedate,o.value=e.description,a.value=e.note,i.value=e.priority,c.value=t.name;const s=document.createElement("button"),l=document.querySelector("#btn-div");l.innerHTML="",s.setAttribute("class","btn btn-primary"),s.setAttribute("id","tasksubmit"),s.textContent="Modify Task",l.append(s),s.onclick=()=>saveModifiedData(e,t)};if(0===c.length){const e=a("default");c.push(e)}else i(c);const d=(e,t)=>{const n=c.find((e=>e.name===t.name));n.list=n.list.filter((t=>t.id!==e.id)),saveData(c,s),i(c)}})()})();