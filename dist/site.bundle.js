(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body{\n    background-color: transparent;\n    margin: 0;\n}\n.top-header{\n    height:10vh;\n    width:100vw;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    align-items: center;\n    text-align: center;\n\n    color:black;\n    background-color: white;\n    border:none;\n    box-shadow: 0px 10px 10px rgba(128, 128, 128, 0.221);\n\n}\n.top-header-text{\n    border: solid red 1px;\n    display: flex;\n    justify-content: center;\n    width:80%;\n    justify-self: center;\n    text-align: center;\n    color:black;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    font-size: large;\n}\n.cart{\n    background-color: black;\n    color:white;\n    border:none;\n    border-radius:5px;\n    width:10%;\n    height:40%;\n    margin-right:5%;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    justify-self: right;\n}\n.icon{\n    margin:10px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,6BAA6B;IAC7B,SAAS;AACb;AACA;IACI,WAAW;IACX,WAAW;;IAEX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,mBAAmB;IACnB,kBAAkB;;IAElB,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,oDAAoD;;AAExD;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,yCAAyC;IACzC,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,eAAe;IACf,yCAAyC;IACzC,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf",sourcesContent:["body{\r\n    background-color: transparent;\r\n    margin: 0;\r\n}\r\n.top-header{\r\n    height:10vh;\r\n    width:100vw;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    align-items: center;\r\n    text-align: center;\r\n\r\n    color:black;\r\n    background-color: white;\r\n    border:none;\r\n    box-shadow: 0px 10px 10px rgba(128, 128, 128, 0.221);\r\n\r\n}\r\n.top-header-text{\r\n    border: solid red 1px;\r\n    display: flex;\r\n    justify-content: center;\r\n    width:80%;\r\n    justify-self: center;\r\n    text-align: center;\r\n    color:black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n.cart{\r\n    background-color: black;\r\n    color:white;\r\n    border:none;\r\n    border-radius:5px;\r\n    width:10%;\r\n    height:40%;\r\n    margin-right:5%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    justify-self: right;\r\n}\r\n.icon{\r\n    margin:10px;\r\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,A="".concat(l," ").concat(d);a[l]=d+1;var u=t(A),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),A=t(589),u=t.n(A),p=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=t.p+"312fe8279dd4e11b9081.png",m=document.createElement("div");m.classList.add("top-header");const v=new Image;v.src=h,v.classList.add("icon");const g=document.createElement("h2");g.textContent="MIR 23",g.classList.add("top-header-text");const b=document.createElement("button");b.classList.add("cart"),b.innerHTML="Cart",m.appendChild(v),m.appendChild(g),m.appendChild(b);const C=m;document.getElementById("content").appendChild(C)})()})();
//# sourceMappingURL=site.bundle.js.map