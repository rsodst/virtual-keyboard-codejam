!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([function(e,t,s){var r=s(1),a=s(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1},i=(r(a,n),a.locals?a.locals:{});e.exports=i},function(e,t,s){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}(),i=[];function o(e){for(var t=-1,s=0;s<i.length;s++)if(i[s].identifier===e){t=s;break}return t}function c(e,t){for(var s={},r=[],a=0;a<e.length;a++){var n=e[a],c=t.base?n[0]+t.base:n[0],l=s[c]||0,y="".concat(c," ").concat(l);s[c]=l+1;var d=o(y),h={css:n[1],media:n[2],sourceMap:n[3]};-1!==d?(i[d].references++,i[d].updater(h)):i.push({identifier:y,updater:m(h,t),references:1}),r.push(y)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=s.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=n(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var y,d=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function h(e,t,s,r){var a=s?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var n=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(n,i[t]):e.appendChild(n)}}function p(e,t,s){var r=s.css,a=s.media,n=s.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),n&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var k=null,u=0;function m(e,t){var s,r,a;if(t.singleton){var n=u++;s=k||(k=l(t)),r=h.bind(null,s,n,!1),a=h.bind(null,s,n,!0)}else s=l(t),r=p.bind(null,s,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var s=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<s.length;r++){var a=o(s[r]);i[a].references--}for(var n=c(e,t),l=0;l<s.length;l++){var y=o(s[l]);0===i[y].references&&(i[y].updater(),i.splice(y,1))}s=n}}}},function(e,t,s){(t=s(3)(!1)).push([e.i,'body{padding:0;margin:0}#text-area{padding:2rem;position:fixed;background-color:black;background-image:radial-gradient(rgba(32,32,32,0.75), black 120%);height:100%;width:100%;margin:0;overflow:hidden;color:greenyellow;font:1.3rem Inconsolata, monospace;text-shadow:0 0 5px #c8c8c8}.container{position:fixed}.container::after{content:"";position:absolute;top:0;left:0;width:100vw;height:100vh;background:repeating-linear-gradient(0deg, rgba(87,87,87,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px);pointer-events:none}::selection{background:#0080ff;text-shadow:none}.keyboard{position:absolute;background-color:#878787;display:inline-flex;flex-direction:column;align-items:start;padding:2px;border-radius:5px;border:2px solid #4d4c4c;top:300px;left:20px}.row{display:flex;justify-content:start}.key{position:relative;font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;transition:all 150ms ease;cursor:pointer;user-select:none}.key::after{position:absolute;top:50%;left:50%;content:"";opacity:0;pointer-events:none;z-index:99}.key.key--type-char{font-size:14px;width:50px;height:50px;background-color:#1c1e25;color:#ddd;border:1px solid #878787;border-radius:5px;display:grid;gap:0;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr;grid-template-areas:"tl tr"\r "bl br"}.key.key--type-char::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--type-oem{font-size:12px;background-color:#1c1e25;color:#ddd;border:1px solid #878787;border-radius:5px;display:flex;justify-content:center;align-items:center}.key.key--style-space{width:355px;height:50px}.key.key--style-space::after{margin:-25px 0 0 -177.5px;width:355px;height:50px}.key.key--style-space:before{content:"[----]"}.key.key--style-tab{width:65px;height:50px}.key.key--style-tab::after{margin:-25px 0 0 -32.5px;width:65px;height:50px}.key.key--style-tab:before{content:"Tab"}.key.key--style-caps{width:80px;height:50px}.key.key--style-caps::after{margin:-25px 0 0 -40px;width:80px;height:50px}.key.key--style-caps:before{content:"Caps"}.key.key--style-shift{width:95px;height:50px}.key.key--style-shift::after{margin:-25px 0 0 -47.5px;width:95px;height:50px}.key.key--style-shift:before{content:"Shift"}.key.key--style-enter{width:87px;height:50px}.key.key--style-enter::after{margin:-25px 0 0 -43.5px;width:87px;height:50px}.key.key--style-enter:before{content:"Enter"}.key.key--style-backspace{width:65px;height:50px}.key.key--style-backspace::after{margin:-25px 0 0 -32.5px;width:65px;height:50px}.key.key--style-backspace:before{content:"<-----"}.key.key--style-ctrl{width:50px;height:50px}.key.key--style-ctrl::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-ctrl:before{content:"    Ctrl"}.key.key--style-alt{width:50px;height:50px}.key.key--style-alt::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-alt:before{content:"    Alt"}.key.key--style-del{width:50px;height:50px}.key.key--style-del::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-del:before{content:"    Del"}.key.key--style-left{width:50px;height:50px}.key.key--style-left::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-left:before{content:"  <--"}.key.key--style-bottom{width:50px;height:50px}.key.key--style-bottom::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-bottom:before{content:"     \\\\/"}.key.key--style-right{width:50px;height:50px}.key.key--style-right::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-right:before{content:"  --\x3e"}.key.key--style-top{width:50px;height:50px}.key.key--style-top::after{margin:-25px 0 0 -25px;width:50px;height:50px}.key.key--style-top:before{content:"     /\\\\"}.key.key--style-home{width:72px;height:50px}.key.key--style-home::after{margin:-25px 0 0 -36px;width:72px;height:50px}.key.key--style-home:before{content:"home"}.key.key--style-end{width:72px;height:50px}.key.key--style-end::after{margin:-25px 0 0 -36px;width:72px;height:50px}.key.key--style-end:before{content:"end"}.key:hover{background-color:black;border:1px solid #1c1e25;color:white}.key .key__longpress-indicator{width:10px;height:10px;position:absolute;right:10px;border-radius:50%}.key .key__longpress-indicator--enabled{background-color:#ec1111}.key .key__char{width:25px;height:25px;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.key .key__char--position-bl{grid-area:bl}.key .key__char--position-br{grid-area:br}.key .key__char--position-tl{grid-area:tl}.key .key__char--position-tr{grid-area:tr}.key.key--clicked{opacity:0.4}.key.key--clicked::after{background-color:gray;border:1px solid #1c1e25;color:white;animation:anim-effect-click 0.3s forwards}@keyframes anim-effect-click{0%{transform:scale3d(0.3, 0.3, 1)}25%,50%{opacity:1}to{opacity:0;transform:scale3d(1.2, 1.2, 1)}}\n',""]),e.exports=t},function(e,t,s){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s=e[1]||"",r=e[3];if(!r)return s;if(t&&"function"==typeof btoa){var a=(i=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),n=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[s].concat(n).concat([a]).join("\n")}var i,o,c;return[s].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var n=0;n<this.length;n++){var i=this[n][0];null!=i&&(a[i]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&a[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),t.push(c))}},t}},function(e,t,s){"use strict";s.r(t);s(0);var r=class{constructor(e){this.type=e,this.keyPressed=!1}get isPressed(){return this.keyPressed}set isPressed(e){this.keyPressed=e,this.keyEvent(e)}};var a=class extends r{constructor(e){super("char"),this.baseChar="",this.alterChar="",this.style=e}updateChar(e,t,s,r){this.baseCharView=e,this.alterCharView=t,this.baseChar=s,this.alterChar=r,this.onUpdate()}};var n=class{constructor(e){this.initializeElement(),this.updateView(e.baseCharView,e.alterCharView),e.onUpdate=()=>{this.updateView(e.baseCharView,e.alterCharView)},e.keyEvent=()=>{e.keyPressed?this.keyElement.classList.add("key--clicked"):this.keyElement.classList.remove("key--clicked")}}updateView(e,t){this.baseKeyCharElement.innerText=e,this.alterKeyCharElement.innerText=t}initializeElement(){this.keyElement=document.createElement("div"),this.keyElement.classList.add("key"),this.keyElement.classList.add("key--type-char"),this.baseKeyCharElement=document.createElement("div"),this.baseKeyCharElement.classList.add("key__char"),this.baseKeyCharElement.classList.add("key__char--position-br"),this.alterKeyCharElement=document.createElement("div"),this.alterKeyCharElement.classList.add("key__char"),this.alterKeyCharElement.classList.add("key__char--position-tl"),this.keyElement.appendChild(this.baseKeyCharElement),this.keyElement.appendChild(this.alterKeyCharElement)}};var i=class{constructor(e,t,s){this.code=e,this.key=new a(t),this.keyView=new n(this.key),this.keyUpHandler=()=>{this.key.isPressed=!1,this.keyView.keyElement.removeEventListener("mouseup",this.keyUpHandler)},this.keyDownHandler=()=>{this.keyView.keyElement.addEventListener("mouseup",this.keyUpHandler),this.key.isPressed=!0,s(this.key,this.keyView)},this.keyView.keyElement.addEventListener("mousedown",this.keyDownHandler),document.addEventListener("keydown",e=>{e.keyCode===this.code&&(this.keyDownHandler(),e.preventDefault())}),document.addEventListener("keyup",e=>{e.keyCode===this.code&&(this.keyUpHandler(),e.preventDefault())})}};var o=class extends r{constructor(e){super("oem"),this.keyStyle=e,this.keyPressIndicatorEnabled=!1}setKeyPressIndicatorEnabled(e){this.keyPressIndicatorEnabled=e,this.keyPressIndicatorEvent(e)}};var c=class{constructor(e){this.initializeElement(e.keyStyle),this.indicatorEnabled=!1,e.keyEvent=()=>{e.keyPressed?this.keyElement.classList.add("key--clicked"):this.keyElement.classList.remove("key--clicked")},e.keyPressIndicatorEvent=()=>{e.keyPressIndicatorEnabled?this.longPressIndicatorElement.classList.add("key__longpress-indicator--enabled"):this.longPressIndicatorElement.classList.remove("key__longpress-indicator--enabled")}}initializeElement(e){this.keyElement=document.createElement("div"),this.keyElement.classList.add("key"),this.keyElement.classList.add("key--type-oem"),this.keyElement.classList.add(e),this.keyCharElement=document.createElement("div"),this.keyCharElement.classList.add("key__char"),this.longPressIndicatorElement=document.createElement("div"),this.longPressIndicatorElement.classList.add("key__longpress-indicator"),this.keyElement.appendChild(this.keyCharElement),this.keyElement.appendChild(this.longPressIndicatorElement)}};var l=class{constructor(e,t,s,r,a=!0,n=!1){let i;this.code=e,this.key=new o(t),this.longPressEnabled=r,this.preventDefaultEnabled=a,this.disableKeyPressHandler=n,this.keyView=new c(this.key),this.keyUpHandler=()=>{clearTimeout(i),this.key.isPressed=!1,this.keyView.keyElement.removeEventListener("mouseup",this.keyUpHandler)},this.keyDownHandler=e=>{this.keyView.keyElement.addEventListener("mouseup",this.keyUpHandler),this.key.isPressed=!0,s&&s(this.key,this.keyView),this.longPressEnabled&&e&&(i=window.setTimeout(()=>{clearTimeout(i),this.keyView.keyElement.removeEventListener("mouseup",this.keyUpHandler)},1e3))},this.keyView.keyElement.addEventListener("mousedown",this.keyDownHandler),document.addEventListener("keydown",e=>{e.keyCode===this.code&&(!1===this.disableKeyPressHandler&&this.keyDownHandler(),this.preventDefaultEnabled&&e.preventDefault())}),document.addEventListener("keyup",e=>{e.keyCode===this.code&&(!1===this.disableKeyPressHandler&&this.keyUpHandler(),this.preventDefaultEnabled&&e.preventDefault())})}};var y={space:32,enter:13,backspace:8,tab:9,left:37,right:39,up:38,down:40,home:36,end:35,delete:46,shift:16,caps:20,ctrl:17};var d=class{static buildKeyboardRows(e,t){const s=[];return this.template=e,this.template.forEach(e=>{s.push(this.createKeyRow(e,t))}),s}static createKeyRow(e,t){this.textArea=document.getElementById("text-area"),this.textArea.onblur=()=>{this.textArea.focus()};const s=e=>{this.textArea.focus(),this.textArea.selectionStart=e,this.textArea.selectionEnd=e},r=e=>{const{value:t,selectionStart:r,selectionEnd:a}=this.textArea;this.textArea.value=`${t.substring(0,r)}${e}${t.substring(a)}`,s(r+1)},a=[];return e.forEach(e=>{let n;"oem"===e.type&&(e.code===y.caps&&(n=new l(e.code,e.style,e=>{e.keyPressIndicatorEnabled?e.setKeyPressIndicatorEnabled(!1):e.setKeyPressIndicatorEnabled(!0)})),e.code===y.shift&&(n=new l(e.code,e.style,()=>{this.ctrlKey.key.isPressed&&t.changeLayout()},!0)),e.code===y.ctrl&&(n=new l(e.code,e.style,()=>{this.shiftKey.key.isPressed&&t.changeLayout()},!0)),e.code===y.space&&(n=new l(e.code,e.style,()=>{const{value:e,selectionStart:t,selectionEnd:r}=this.textArea;this.textArea.value=`${e.substring(0,t)} ${e.substring(r)}`,s(t+1)})),e.code===y.enter&&(n=new l(e.code,e.style,()=>{const{value:e,selectionStart:t,selectionEnd:r}=this.textArea;this.textArea.value=`${e.substring(0,t)}\n${e.substring(r)}`,s(t+1)})),e.code===y.backspace&&(n=new l(e.code,e.style,()=>{const{value:e,selectionStart:t,selectionEnd:r}=this.textArea;t!==r?(this.textArea.value=`${e.slice(0,t)}${e.slice(r)}`,s(t)):0!==t?(this.textArea.value=`${e.slice(0,t-1)}${e.slice(t)}`,s(t-1)):s(t)})),e.code===y.tab&&(n=new l(e.code,e.style,()=>{const e=document.getElementById("text-area"),{value:t,selectionStart:r,selectionEnd:a}=e;e.value=`${t.substring(0,r)}\t${t.substring(a)}`,s(r+1)})),e.code===y.left&&(n=new l(e.code,e.style,()=>{s(this.textArea.selectionStart-1)},!1,!1,!0)),e.code===y.right&&(n=new l(e.code,e.style,()=>{s(this.textArea.selectionStart+1)},!1,!1,!0)),e.code===y.up&&(n=new l(e.code,e.style,()=>{s(0)},!1,!1,!0)),e.code===y.down&&(n=new l(e.code,e.style,()=>{s(this.textArea.value.length)},!1,!1,!0)),e.code===y.home&&(n=new l(e.code,e.style,()=>{s(0)},!1,!1)),e.code===y.end&&(n=new l(e.code,e.style,()=>{s(this.textArea.value.length)},!1,!1)),e.code===y.delete&&(n=new l(e.code,e.style,()=>{const{value:e,selectionStart:t,selectionEnd:r}=this.textArea;t!==r?this.textArea.value=`${e.slice(0,t)}${e.slice(r)}`:r!==e.length&&(this.textArea.value=`${e.slice(0,t)}${e.slice(t+1)}`),s(t)},!1,!1,!0)),n||(n=new l(e.code,e.style,()=>{}))),"char"===e.type&&(n=new i(e.code,e.style,e=>{"key--ignore-caps"===e.style?this.shiftKey.key.isPressed?r(e.alterChar):r(e.baseChar):this.shiftKey.key.isPressed||this.capsKey.key.keyPressIndicatorEnabled?r(e.alterChar):r(e.baseChar)})),e.code===y.shift&&(this.shiftKey=n),e.code===y.caps&&(this.capsKey=n),e.code===y.ctrl&&(this.ctrlKey=n),a.push(n)}),a}};var h=[[{type:"char",code:192,style:"key--ignore-caps"},{type:"char",code:49,style:"key--ignore-caps"},{type:"char",code:50,style:"key--ignore-caps"},{type:"char",code:51,style:"key--ignore-caps"},{type:"char",code:52,style:"key--ignore-caps"},{type:"char",code:53,style:"key--ignore-caps"},{type:"char",code:54,style:"key--ignore-caps"},{type:"char",code:55,style:"key--ignore-caps"},{type:"char",code:56,style:"key--ignore-caps"},{type:"char",code:57,style:"key--ignore-caps"},{type:"char",code:48,style:"key--ignore-caps"},{type:"char",code:189,style:"key--ignore-caps"},{type:"char",code:187,style:"key--ignore-caps"},{type:"oem",code:8,style:"key--style-backspace"}],[{type:"oem",code:9,style:"key--style-tab"},{type:"char",code:81},{type:"char",code:87},{type:"char",code:69},{type:"char",code:82},{type:"char",code:84},{type:"char",code:89},{type:"char",code:85},{type:"char",code:73},{type:"char",code:79},{type:"char",code:80},{type:"char",code:219},{type:"char",code:221},{type:"char",code:220}],[{type:"oem",code:20,style:"key--style-caps"},{type:"char",code:65},{type:"char",code:83},{type:"char",code:68},{type:"char",code:70},{type:"char",code:71},{type:"char",code:72},{type:"char",code:74},{type:"char",code:75},{type:"char",code:76},{type:"char",code:186},{type:"char",code:222},{type:"oem",code:13,style:"key--style-enter"}],[{type:"oem",code:16,style:"key--style-shift"},{type:"char",code:90},{type:"char",code:88},{type:"char",code:67},{type:"char",code:86},{type:"char",code:66},{type:"char",code:78},{type:"char",code:77},{type:"char",code:188},{type:"char",code:190},{type:"oem",code:38,style:"key--style-top"},{type:"char",code:191},{type:"oem",code:36,style:"key--style-home"}],[{type:"oem",code:17,style:"key--style-ctrl"},{type:"oem",code:46,style:"key--style-del"},{type:"oem",code:18,style:"key--style-alt"},{type:"oem",code:32,style:"key--style-space"},{type:"oem",code:37,style:"key--style-left"},{type:"oem",code:40,style:"key--style-bottom"},{type:"oem",code:39,style:"key--style-right"},{type:"oem",code:35,style:"key--style-end"}]];var p={192:["`","~","`","~"],49:["1","!","1","!"],50:["2","@","2","@"],51:["3","#","3","#"],52:["4","$","4","$"],53:["5","%","5","%"],54:["6","^","6","^"],55:["7","&","7","&"],56:["8","*","8","*"],57:["9","(","9","("],48:["0",")","0",")"],189:["-","-","-","-"],187:["=","+","=","+"],8:["<---"],9:["Tab"],81:["Q","","q","Q"],87:["W","","w","W"],69:["E","","e","E"],82:["R","","r","R"],84:["T","","t","T"],89:["Y","","y","Y"],85:["U","","u","U"],73:["I","","i","I"],79:["O","","o","O"],80:["P","","p","P"],219:["[","{","[","{"],221:["]","}","]","}"],220:["\\","|","\\","|"],20:["Caps",""],65:["A","","a","A"],83:["S","","s","S"],68:["D","","d","D"],70:["F","","f","F"],71:["G","","g","G"],72:["H","","h","H"],74:["J","","j","J"],75:["K","","k","K"],76:["L","","l","L"],186:[";",":",";",":"],222:["'",":","'",":"],13:["Enter"],16:["Shift"],90:["Z","","z","Z"],88:["X","","x","X"],67:["C","","c","C"],86:["V","","v","V"],66:["B","","b","B"],78:["N","","n","N"],77:["M","","m","M"],188:[",","<",",","<"],190:[".",">",".",">"],191:["/","?","/","?"],17:["Ctrl"],91:["Win"],18:["Alt"],32:["Space"]};var k={192:["ё","Ё","ё","Ё"],49:["1","!","1","!"],50:["2",'"',"2",'"'],51:["3","№","3","№"],52:["4",";","4",";"],53:["5","%","5","%"],54:["6",":","6",":"],55:["7","?","7","?"],56:["8","*","8","*"],57:["9","(","9","("],48:["0",")","0",")"],189:["-","-","-","-"],187:["=","+","=","+"],8:["<---"],9:["Tab"],81:["Й","","й","Й"],87:["Ц","","ц","Ц"],69:["У","","у","У"],82:["К","","к","К"],84:["Е","","е","Е"],89:["Н","","н","Н"],85:["Г","","г","Г"],73:["Ш","","ш","Ш"],79:["Щ","","щ","Щ"],80:["З","","з","З"],219:["Х","","x","Х"],221:["Ъ","","ъ","Ъ"],220:["\\","|","\\","|"],20:["Caps"],65:["Ф","","ф","Ф"],83:["Ы","","ы","Ы"],68:["В","","в","В"],70:["А","","а","А"],71:["П","","п","П"],72:["Р","","р","Р"],74:["О","","о","О"],75:["Л","","л","Л"],76:["Д","","д","Д"],186:["Ж","","ж","Ж"],222:["Э","","э","Э"],13:["Enter"],16:["Shift"],90:["Я","","я","Я"],88:["Ч","","ч","Ч"],67:["С","","с","С"],86:["М","","м","М"],66:["И","","и","И"],78:["Т","","т","Т"],77:["Ь","","ь","Ь"],188:["Б","","б","Б"],190:["Ю","","ю","Ю"],191:[".",",",".",","],17:["Ctrl"],91:["Win"],18:["Alt"],32:["Space"]};var u=class{constructor(){this.ru_RU=k,this.en_US=p}updateLocale(e,t){e.forEach(e=>{e.filter(e=>"char"===e.key.type?e:null).forEach(e=>{const s=this[t][e.code];e.key.updateChar(s[0],s[1],s[2],s[3])})})}};var m=class{constructor(e){this.layouts=["en_US","ru_RU"],this.currentLayout=parseInt(e,10)||0,this.localeManager=new u,this.keyRows=d.buildKeyboardRows(h,this),this.localeManager.updateLocale(this.keyRows,this.layouts[this.currentLayout])}changeLayout(){this.currentLayout=(this.currentLayout+1)%this.layouts.length,this.localeManager.updateLocale(this.keyRows,this.layouts[this.currentLayout]),localStorage.setItem("currentLayout",this.currentLayout)}};var f=class{constructor(e){this.keyboard=e,this.initializeElement()}initializeElement(){this.keyboardView=document.createElement("div"),this.keyboardView.classList.add("keyboard"),this.keyboard.keyRows.forEach(e=>{const t=document.createElement("div");t.classList.add("row"),e.forEach(e=>{t.appendChild(e.keyView.keyElement)}),this.keyboardView.appendChild(t)}),this.keyboardView.onmousedown=e=>{this.dragFunction(e)},this.keyboardView.ondragstart=()=>!1,this.dragFunction=e=>{const t=e.clientX-this.keyboardView.getBoundingClientRect().left,s=e.clientY-this.keyboardView.getBoundingClientRect().top,r=(e,r)=>{this.keyboardView.style.left=`${e-t}px`,this.keyboardView.style.top=`${r-s}px`};r(e.pageX,e.pageY);const a=e=>{r(e.pageX,e.pageY)};document.addEventListener("mousemove",a),this.keyboardView.onmouseup=()=>{document.removeEventListener("mousemove",a),this.keyboardView.onmouseup=null}}}};var g=class{constructor(){const e=localStorage.getItem("currentLayout");this.keyboard=new m(e),this.keyboardView=new f(this.keyboard)}};const b=document.createElement("div");b.classList.add("container");const x=document.createElement("textarea");x.setAttribute("id","text-area"),x.value="Target Platform: Windows 10",x.value+="\nTarget Browser: Chrome 80.0.3987.149",x.value+="\nSwitch Layout: Ctrl+Shift",x.value+="\nKeyboard has supported Drag'n'Drop",x.value+="\nUse Mouse to move keyboard panel",x.value+="\nUse long press the button to fix the press mode\n",b.appendChild(x),document.body.appendChild(b);const w=new g;b.appendChild(w.keyboardView.keyboardView),x.focus()}]);