!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=57)}([function(e,t,n){var o=n(17)("wks"),s=n(16),r=n(4).Symbol,a="function"==typeof r;(e.exports=function(e){return o[e]||(o[e]=a&&r[e]||(a?r:s)("Symbol."+e))}).store=o},function(e,t,n){e.exports=!n(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){var o=n(3),s=n(33),r=n(34),a=Object.defineProperty;t.f=n(1)?Object.defineProperty:function(e,t,n){if(o(e),t=r(t,!0),o(n),s)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(10);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var o=n(2).f,s=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in s||n(1)&&o(s,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(2),s=n(15);e.exports=n(1)?function(e,t,n){return o.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(4),s=n(7),r=n(9),a=n(16)("src"),i=n(37),l=(""+i).split("toString");n(6).inspectSource=function(e){return i.call(e)},(e.exports=function(e,t,n,i){var c="function"==typeof n;c&&(r(n,"name")||s(n,"name",t)),e[t]!==n&&(c&&(r(n,a)||s(n,a,e[t]?""+e[t]:l.join(String(t)))),e===o?e[t]=n:i?e[t]?e[t]=n:s(e,t,n):(delete e[t],s(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||i.call(this)}))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var o=n(35)(!0);n(36)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})}))},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t,n){var o=n(6),s=n(4),r=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(22)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports={}},function(e,t,n){var o=n(17)("keys"),s=n(16);e.exports=function(e){return o[e]||(o[e]=s(e))}},function(e,t,n){"use strict";var o=n(24),s=n(23),r=n(30),a=n(49),i=n(50),l=n(27),c=n(51),d=n(52);s(s.S+s.F*!n(53)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,s,u,m=r(e),f="function"==typeof this?this:Array,g=arguments.length,p=g>1?arguments[1]:void 0,v=void 0!==p,y=0,h=d(m);if(v&&(p=o(p,g>2?arguments[2]:void 0,2)),null==h||f==Array&&i(h))for(n=new f(t=l(m.length));t>y;y++)c(n,y,v?p(m[y],y):m[y]);else for(u=h.call(m),n=new f;!(s=u.next()).done;y++)c(n,y,v?a(u,p,[s.value,y],!0):s.value);return n.length=y,n}})},function(e,t,n){var o=n(10),s=n(4).document,r=o(s)&&o(s.createElement);e.exports=function(e){return r?s.createElement(e):{}}},function(e,t){e.exports=!1},function(e,t,n){var o=n(4),s=n(6),r=n(7),a=n(8),i=n(24),l=function(e,t,n){var c,d,u,m,f=e&l.F,g=e&l.G,p=e&l.S,v=e&l.P,y=e&l.B,h=g?o:p?o[t]||(o[t]={}):(o[t]||{}).prototype,E=g?s:s[t]||(s[t]={}),k=E.prototype||(E.prototype={});for(c in g&&(n=t),n)u=((d=!f&&h&&void 0!==h[c])?h:n)[c],m=y&&d?i(u,o):v&&"function"==typeof u?i(Function.call,u):u,h&&a(h,c,u,e&l.U),E[c]!=u&&r(E,c,m),v&&k[c]!=u&&(k[c]=u)};o.core=s,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,n){var o=n(38);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,s){return e.call(t,n,o,s)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var o=n(44),s=n(14);e.exports=function(e){return o(s(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(13),s=Math.min;e.exports=function(e){return e>0?s(o(e),9007199254740991):0}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var o=n(2).f,s=n(9),r=n(0)("toStringTag");e.exports=function(e,t,n){e&&!s(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},function(e,t,n){var o=n(14);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(26),s=n(0)("toStringTag"),r="Arguments"==o(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),s))?n:r?o(t):"Object"==(a=o(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){"use strict";var o=n(3);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){e.exports=!n(1)&&!n(11)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var o=n(10);e.exports=function(e,t){if(!o(e))return e;var n,s;if(t&&"function"==typeof(n=e.toString)&&!o(s=n.call(e)))return s;if("function"==typeof(n=e.valueOf)&&!o(s=n.call(e)))return s;if(!t&&"function"==typeof(n=e.toString)&&!o(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(13),s=n(14);e.exports=function(e){return function(t,n){var r,a,i=String(s(t)),l=o(n),c=i.length;return l<0||l>=c?e?"":void 0:(r=i.charCodeAt(l))<55296||r>56319||l+1===c||(a=i.charCodeAt(l+1))<56320||a>57343?e?i.charAt(l):r:e?i.slice(l,l+2):a-56320+(r-55296<<10)+65536}}},function(e,t,n){"use strict";var o=n(22),s=n(23),r=n(8),a=n(7),i=n(18),l=n(39),c=n(29),d=n(48),u=n(0)("iterator"),m=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,n,g,p,v,y){l(n,t,g);var h,E,k,b=function(e){if(!m&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},x=t+" Iterator",S="values"==p,w=!1,C=e.prototype,_=C[u]||C["@@iterator"]||p&&C[p],L=_||b(p),A=p?S?b("entries"):L:void 0,N="Array"==t&&C.entries||_;if(N&&(k=d(N.call(new e)))!==Object.prototype&&k.next&&(c(k,x,!0),o||"function"==typeof k[u]||a(k,u,f)),S&&_&&"values"!==_.name&&(w=!0,L=function(){return _.call(this)}),o&&!y||!m&&!w&&C[u]||a(C,u,L),i[t]=L,i[x]=f,p)if(h={values:S?L:b("values"),keys:v?L:b("keys"),entries:A},y)for(E in h)E in C||r(C,E,h[E]);else s(s.P+s.F*(m||w),t,h);return h}},function(e,t,n){e.exports=n(17)("native-function-to-string",Function.toString)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var o=n(40),s=n(15),r=n(29),a={};n(7)(a,n(0)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=o(a,{next:s(1,n)}),r(e,t+" Iterator")}},function(e,t,n){var o=n(3),s=n(41),r=n(28),a=n(19)("IE_PROTO"),i=function(){},l=function(){var e,t=n(21)("iframe"),o=r.length;for(t.style.display="none",n(47).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;o--;)delete l.prototype[r[o]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(i.prototype=o(e),n=new i,i.prototype=null,n[a]=e):n=l(),void 0===t?n:s(n,t)}},function(e,t,n){var o=n(2),s=n(3),r=n(42);e.exports=n(1)?Object.defineProperties:function(e,t){s(e);for(var n,a=r(t),i=a.length,l=0;i>l;)o.f(e,n=a[l++],t[n]);return e}},function(e,t,n){var o=n(43),s=n(28);e.exports=Object.keys||function(e){return o(e,s)}},function(e,t,n){var o=n(9),s=n(25),r=n(45)(!1),a=n(19)("IE_PROTO");e.exports=function(e,t){var n,i=s(e),l=0,c=[];for(n in i)n!=a&&o(i,n)&&c.push(n);for(;t.length>l;)o(i,n=t[l++])&&(~r(c,n)||c.push(n));return c}},function(e,t,n){var o=n(26);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t,n){var o=n(25),s=n(27),r=n(46);e.exports=function(e){return function(t,n,a){var i,l=o(t),c=s(l.length),d=r(a,c);if(e&&n!=n){for(;c>d;)if((i=l[d++])!=i)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},function(e,t,n){var o=n(13),s=Math.max,r=Math.min;e.exports=function(e,t){return(e=o(e))<0?s(e+t,0):r(e,t)}},function(e,t,n){var o=n(4).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(9),s=n(30),r=n(19)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),o(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var o=n(3);e.exports=function(e,t,n,s){try{return s?t(o(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&o(r.call(e)),t}}},function(e,t,n){var o=n(18),s=n(0)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||r[s]===e)}},function(e,t,n){"use strict";var o=n(2),s=n(15);e.exports=function(e,t,n){t in e?o.f(e,t,s(0,n)):e[t]=n}},function(e,t,n){var o=n(31),s=n(0)("iterator"),r=n(18);e.exports=n(6).getIteratorMethod=function(e){if(null!=e)return e[s]||e["@@iterator"]||r[o(e)]}},function(e,t,n){var o=n(0)("iterator"),s=!1;try{var r=[7][o]();r.return=function(){s=!0},Array.from(r,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r=[7],a=r[o]();a.next=function(){return{done:n=!0}},r[o]=function(){return a},e(r)}catch(e){}return n}},function(e,t,n){"use strict";n(55);var o=n(3),s=n(32),r=n(1),a=/./.toString,i=function(e){n(8)(RegExp.prototype,"toString",e,!0)};n(11)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?i((function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?s.call(e):void 0)})):"toString"!=a.name&&i((function(){return a.call(this)}))},function(e,t,n){n(1)&&"g"!=/./g.flags&&n(2).f(RegExp.prototype,"flags",{configurable:!0,get:n(32)})},function(e,t,n){"use strict";var o=n(31),s={};s[n(0)("toStringTag")]="z",s+""!="[object z]"&&n(8)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(e,t,n){"use strict";n.r(t);n(5);n(12),n(20),n(54),n(56);function o(){for(var e=JSON.parse(window.localStorage.users),t=document.querySelectorAll(".employees_button"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){c("main"),document.querySelector(".pagination").style.display="block"}));var o=document.getElementById("button_prev"),s=document.getElementById("button_next"),r=1;function a(){for(var e=document.getElementById("page_number").getElementsByClassName("clickPageNumber"),t=0;t<e.length;t++)e[t].style.opacity=t==r-1?"1.0":"0.5"}function i(t){var n=document.getElementById("listingTable");t<1&&(t=1),t>l()-1&&(t=l()),n.innerHTML="";for(var i=10*(t-1);i<10*t&&i<e.length;i++)if(!e[i].isAdmin){var c=e[i].name.charAt(0).toUpperCase()+e[i].name.slice(1),d=document.createElement("div");d.classList.add("objectBlock"),d.innerText="".concat(c," Core Skill: ").concat(e[i].coreSkill),n.appendChild(d)}1==r?o.classList.add("opacity"):o.classList.remove("opacity"),r==l()?s.classList.add("opacity"):s.classList.remove("opacity"),a()}function l(){return Math.ceil(e.length/10)}function c(e){for(var t=document.querySelectorAll(e+" > *"),n=0;n<t.length;n++)t[n].style.display="none"}i(1),function(){for(var e=document.getElementById("page_number"),t=1;t<l()+1;t++){var n=document.createElement("span");n.classList.add("clickPageNumber"),n.innerText=t,e.appendChild(n)}}(),a(),document.addEventListener("click",(function(e){"SPAN"==e.target.nodeName&&e.target.classList.contains("clickPageNumber")&&i(r=e.target.textContent)})),o.addEventListener("click",(function(){r>1&&i(--r)})),s.addEventListener("click",(function(){r<l()&&i(++r)}))}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),window.onload=function(){for(var e=document.querySelectorAll(".home_button"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(){for(var e=document.querySelectorAll("main > *"),t=0;t<e.length;t++)e[t].style.display="none";document.querySelector(".carousel-wrapper").style.display="flex"}));if(!window.localStorage.users){window.localStorage.users=JSON.stringify([{name:"admin",password:"admin",messages:{sentMessages:[],inboxMessages:[]},isAdmin:!0,loggedIn:!1},{name:"vanya",password:"vanya",coreSkill:"JavaScript",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"nikita",password:"nikita",coreSkill:"Dota 2",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"vova",password:"vova",coreSkill:"Intelligence",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"kolya",password:"vova",coreSkill:"energy",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"katya",password:"vova",coreSkill:"wine",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"masha",password:"vova",coreSkill:"love",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"mazur",password:"vova",coreSkill:"drink",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"bob",password:"vova",coreSkill:"bob",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"dasha",password:"vova",coreSkill:"marketing",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"igor",password:"vova",coreSkill:"Intelligence",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"sasha",password:"vova",coreSkill:"Intelligence",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"mazur",password:"vova",coreSkill:"drink",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"bob",password:"vova",coreSkill:"bob",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"dasha",password:"vova",coreSkill:"marketing",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"igor",password:"vova",coreSkill:"Intelligence",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1},{name:"sasha",password:"vova",coreSkill:"Intelligence",loggedIn:!1,messages:{sentMessages:[],inboxMessages:[]},isAdmin:!1}])}if(!window.localStorage.tasks){window.localStorage.tasks=JSON.stringify([])}function n(){for(var e=JSON.parse(window.localStorage.users),t=0;t<e.length;t++)if(0!=e[t].loggedIn)return 1==e[t].loggedIn}n()?(document.getElementById("logged_out").style.display="none",document.getElementById("logged_in").style.display="block"):n()||(document.getElementById("logged_in").style.display="none",document.getElementById("logged_out").style.display="block"),function(){for(var e=document.querySelectorAll(".logout"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(){var e=JSON.parse(window.localStorage.users);if(e)for(var t=0;t<e.length;t++)1==e[t].loggedIn&&(e[t].loggedIn=!1,window.localStorage.users=JSON.stringify(e),document.location.reload(!0))}))}(),function(){var e,t,n,o;u()?(n=document.getElementById("search_logged_in"),o=Array.from(document.querySelector("#logged_in ul").getElementsByTagName("li")),t=document.querySelector("#search_logged_in span"),e=document.querySelector("#search_logged_in input")):u()||(n=document.getElementById("search_logged_out"),o=Array.from(document.querySelector("#logged_out ul").getElementsByTagName("li")),t=document.querySelector("#search_logged_out span"),e=document.querySelector("#search_logged_out input")),t.addEventListener("click",(function(){e.style.display="inline-block",t.style.display="none",e.focus()}));var s=n.firstElementChild,r=document.createElement("ul");r.style.display="none",n.appendChild(r);for(var a=0;a<o.length;a++)if("search_logged_out"!=o[a].getAttribute("id")&&"search_logged_in"!=o[a].getAttribute("id")&&"nav_profile"!=o[a].getAttribute("id")&&"about_us"!=o[a].className){var i=o[a].className,l=document.createElement("li");l.className=i;var c=o[a].innerText;l.textContent=c,r.appendChild(l),l.addEventListener("click",(function(){s.value="",r.style.display="none"}))}var d=Array.from(r.children);function u(){for(var e=JSON.parse(window.localStorage.users),t=0;t<e.length;t++)if(0!=e[t].loggedIn)return 1==e[t].loggedIn}s.addEventListener("keyup",(function(e){for(var t=e.target.value.toLowerCase(),n=0;n<d.length;n++){var o=d[n].innerText;-1!=o.toLowerCase().indexOf(t)?(r.style.display="block",r.children[n].style.display="block"):-1==o.toLowerCase().indexOf(t)&&(r.children[n].style.display="none")}t||(r.style.display="none")})),s.addEventListener("blur",(function(){e.style.display="none",t.style.display="inline-block",r.style.display="none",s.value=""}))}(),function(){for(var e=document.querySelectorAll(".sign_in"),t=document.querySelector(".carousel-wrapper"),n=document.querySelector(".sign_in_page"),o=document.querySelector(".sign_in_wrapper form"),s=document.getElementById("sign_in_login"),r=document.getElementById("sign_in_password"),a=document.getElementById("sign_in_button"),i=document.getElementById("sign_up_button"),l=document.querySelector(".sign_up_wrapper form"),c=document.getElementById("sign_up_login"),d=document.getElementById("sign_up_password"),u=document.getElementById("sign_up_skill"),m=document.getElementById("save_button"),f=document.getElementById("nav_profile"),g=0;g<e.length;g++)e[g].addEventListener("click",(function(){b(),l.style.display="none",n.style.display="flex",o.style.display="flex",h()}));function p(){for(var e=document.querySelectorAll("input"),t=0;t<e.length;t++)e[t].value=""}function v(e){for(var t=JSON.parse(window.localStorage.users),n=0;n<t.length;n++)if(e.name==t[n].name)return!0}function y(){"P"==o.lastElementChild.tagName&&(o.lastElementChild.remove(),event.preventDefault())}function h(){"P"==l.lastElementChild.tagName&&(l.lastElementChild.remove(),event.preventDefault())}function E(e){var t=document.createElement("p");t.innerText=e,t.style.color="red","BUTTON"==l.lastElementChild.tagName&&l.appendChild(t),event.preventDefault()}function k(e){var t=document.createElement("p");t.innerText=e,t.style.color="red","BUTTON"==o.lastElementChild.tagName&&o.appendChild(t),event.preventDefault()}function b(){for(var e=document.querySelectorAll("main > *"),t=0;t<e.length;t++)e[t].style.display="none"}a.addEventListener("click",(function(){""!=s.value&&""!=r.value||(k("Please Fill in both forms"),p(),event.preventDefault());for(var e=[],t=JSON.parse(window.localStorage.users),n=0;n<t.length;n++)if(e.push(t[n].name),e.push(t[n].password),s.value==t[n].name&&r.value==t[n].password){p(),b(),t[n].loggedIn=!0,window.localStorage.users=JSON.stringify(t),f.childNodes[0].textContent=t[n].name;break}""!=s.value&&""!=r.value&&(-1==e.indexOf(s.value)||-1==e.indexOf(r.value)||-1==e.indexOf(s.value)&&-1==e.indexOf(r.value))&&(p(),k("Username or password is wrong"))})),s.addEventListener("focus",y),r.addEventListener("focus",y),c.addEventListener("focus",h),d.addEventListener("focus",h),u.addEventListener("focus",h),i.addEventListener("click",(function(){o.style.display="none",l.style.display="flex",y(),event.preventDefault()})),m.addEventListener("click",(function(){""!=c.value&&""!=d.value&&""!=u.value||E("Please Fill in all forms");var e={name:c.value,password:d.value,coreSkill:u.value,loggedIn:!1,isAdmin:!1};if(window.localStorage.users&&""!=c.value&&""!=d.value&&""!=u.value){var s=JSON.parse(window.localStorage.users);v(e)?(E("User with such login already exist"),p(),event.preventDefault()):v(e)||(s.push(e),window.localStorage.users=JSON.stringify(s),t.style.display="none",l.style.display="none",n.style.display="flex",o.style.display="flex",p(),event.preventDefault())}}))}(),function(){for(var e=document.querySelectorAll(".contacts_nav"),t=document.querySelector(".contacts"),n=0;n<e.length;n++)e[n].addEventListener("click",(function(){for(var e=document.querySelectorAll("main > *"),n=0;n<e.length;n++)e[n].style.display="none";t.style.display="flex"}));for(var o=document.querySelectorAll(".founders_nav"),s=document.querySelector(".founders"),r=0;r<o.length;r++)o[r].addEventListener("click",(function(){for(var e=document.querySelectorAll("main > *"),t=0;t<e.length;t++)e[t].style.display="none";s.style.display="flex"}));for(var a=document.querySelectorAll(".history_nav"),i=document.querySelector(".history"),l=0;l<a.length;l++)a[l].addEventListener("click",(function(){for(var e=document.querySelectorAll("main > *"),t=0;t<e.length;t++)e[t].style.display="none";i.style.display="flex"}))}(),function(){var e,t,n,o=JSON.parse(window.localStorage.users),s=document.forms,r=document.getElementById("message-list_sent"),a=document.getElementById("message-list_inbox"),i=document.querySelector("#message-list_sent ul"),l=document.querySelector("#message-list_inbox ul"),c=document.getElementById("select_message"),d=document.querySelectorAll(".messages_button"),u=document.getElementById("add_message_button");if(o)for(var m=0;m<o.length;m++)if(1==o[m].loggedIn){e=o[m],t=o[m].messages.sentMessages,n=o[m].messages.inboxMessages,S(t,i),S(n,l);break}for(var f=0;f<d.length;f++)d[f].addEventListener("click",(function(){w("main"),document.getElementById("messages_wrapper").style.display="block"}));for(var g=0;g<o.length;g++)0==o[g].loggedIn?x(c,g):0==o[g].loggedIn&&x(c,g);u.addEventListener("click",(function(t){t.preventDefault();var n=document.createElement("span"),s=document.getElementById("message_subject").value,r=document.createElement("p");r.textContent="To: ";var a=document.createElement("p"),l=document.createElement("span"),d=document.createElement("div"),u=document.getElementById("message_text").value,m=document.createElement("li"),f=document.createElement("span"),g=document.createElement("span"),p=(new Date).toLocaleString("en-US",{month:"short",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",hour12:!1}).toString(),v=Array.from(c.options).filter((function(e){return e.selected})).map((function(e){return e.value.charAt(0).toLowerCase()+e.value.slice(1)}));if(u&&v.length>0){var y={contributors:[],status:"unseen"};y.fromWhom=e.name,y.date=p,s?n.textContent="Subject: ".concat(s):s||(n.textContent="(no subject)"),y.subject=n.textContent,y.message=u,a.textContent=u,l.textContent=u,g.textContent=p,f.textContent="delete",v.forEach((function(e){for(var t=0;t<o.length;t++)o[t].name==e&&o[t].messages.inboxMessages.push(y);y.contributors.push(e),r.textContent+="".concat(e," ")})),g.classList.add("date"),f.classList.add("delete"),m.classList.add("message"),m.classList.add("unseen"),d.classList.add("hide_message"),m.appendChild(g),m.appendChild(n),m.appendChild(l),m.appendChild(f),d.appendChild(r),d.appendChild(a),m.appendChild(d),i.appendChild(m),document.getElementById("message_text").value="",document.getElementById("message_subject").value="",e.messages.sentMessages.push(y),window.localStorage.users=JSON.stringify(o)}}));var p=document.getElementById("sent_message_button"),v=document.getElementById("inbox_message_button");function y(e,t){if("delete"==t.target.className){var n=t.target.parentElement,s=n.parentElement,r=Array.from(s.children).indexOf(n);s.removeChild(n),e.splice(r,1),window.localStorage.users=JSON.stringify(o)}}function h(e,t){if("message unseen"==t.target.className){var n=t.target.parentElement,s=Array.from(n.children).indexOf(t.target);"message-list_inbox"==n.parentElement.getAttribute("id")&&(t.target.classList.remove("unseen"),t.target.classList.add("seen"),e[s].status="seen"),t.target.childNodes[1].classList.toggle("hide_message"),t.target.lastChild.classList.toggle("hide_message"),window.localStorage.users=JSON.stringify(o)}else"message seen"==t.target.className&&(t.target.lastChild.classList.toggle("hide_message"),t.target.childNodes[1].classList.toggle("hide_message"))}p.addEventListener("click",(function(e){e.preventDefault(),a.className="messages_invis",r.className=""})),v.addEventListener("click",(function(e){e.preventDefault(),r.className="messages_invis",a.className=""})),i.addEventListener("click",(function(e){y(t,e),h(t,e)})),l.addEventListener("click",(function(e){y(n,e),h(n,e)})),s["search-messages"].querySelector("input").addEventListener("keyup",(function(e){var t=e.target.value.toLowerCase(),n=Array.from(i.getElementsByTagName("li")),o=Array.from(l.getElementsByTagName("li"));(n=n.concat(o)).forEach((function(e){var n=e.firstElementChild.textContent.slice(9),o=e.childNodes[1].textContent;-1!=n.toLowerCase().indexOf(t)||-1!=o.toLowerCase().indexOf(t)?e.style.display="block":e.style.display="none"}))}));var E=document.getElementById("unseen"),k=document.getElementById("seen");function b(e,t){var n=Array.from(l.getElementsByTagName("li"));e.checked?n.forEach((function(e){e.className=="message "+t&&(e.style.display="block")})):e.checked||n.forEach((function(e){e.className=="message "+t&&(e.style.display="none")}))}function x(e,t){var n=document.createElement("option"),s=o[t].name.charAt(0).toUpperCase()+o[t].name.slice(1);n.innerText=s,e.appendChild(n),o.length<=23?e.setAttribute("size",o.length-1):o.length>22&&e.setAttribute("size","22")}function S(t,n){if(t)for(var o=function(o){var s=void 0;t[o].fromWhom!==e.name&&((s=document.createElement("p")).textContent="From: ".concat(t[o].fromWhom));var r=document.createElement("span"),a=t[o].subject,i=document.createElement("p");i.textContent="To: ";var l=document.createElement("p"),c=t[o].message,d=document.createElement("span"),u=document.createElement("div"),m=document.createElement("li"),f=document.createElement("span"),g=document.createElement("span");r.textContent=a,l.textContent=c,d.textContent=c,f.textContent="delete",g.textContent=t[o].date,t[o].contributors.forEach((function(e){i.textContent+="".concat(e," ")})),f.classList.add("delete"),g.classList.add("date"),m.classList.add("message"),m.classList.add(t[o].status),u.classList.add("hide_message"),m.appendChild(g),m.appendChild(r),m.appendChild(d),m.appendChild(f),s&&u.appendChild(s),u.appendChild(i),u.appendChild(l),m.appendChild(u),n.appendChild(m)},s=0;s<t.length;s++)o(s)}function w(e){for(var t=document.querySelectorAll(e+" > *"),n=0;n<t.length;n++)t[n].style.display="none"}E.addEventListener("click",(function(){b(E,"unseen")})),k.addEventListener("click",(function(){b(k,"seen")}))}(),function(){var e,t=document.querySelectorAll(".tasks_button"),n=JSON.parse(window.localStorage.tasks),o=JSON.parse(window.localStorage.users),s=document.getElementById("nav_profile"),r=document.querySelector(".employees_button"),a=document.querySelector("#task-list ul"),i=document.forms,l=document.getElementById("select_task");if(o)for(var c=0;c<o.length;c++)if(1==o[c].loggedIn){o[c].isAdmin&&(r.style.display="block"),e=o[c],s.childNodes[0].textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),b("main"),document.getElementById("tasks_wrapper").style.display="block",E();break}for(var d=0;d<t.length;d++)t[d].addEventListener("click",(function(){b("main"),document.getElementById("tasks_wrapper").style.display="block"}));for(var u=0;u<o.length;u++)!o[u].isAdmin&&o.length<=23?h(l,u):!o[u].isAdmin&&o.length>22&&h(l,u);var m=i["add-task"],f=document.getElementById("add_task_button");function g(e,t,o,s,r,a){for(var i=0;i<r.length-1;i++)r[i].childNodes[1].checked=e,r[i].className=t;n[s].subTasks.forEach((function(n){return n.checked=e,n.status=t})),a.className="task "+t,a.childNodes[2].innerText=o+"%",a.className="task "+t,n[s].progress=o,n[s].status=t,n[s].progress=o,n[s].checked=e,window.localStorage.tasks=JSON.stringify(n)}document.getElementById("add_subtask_button").addEventListener("click",(function(e){var t=document.createElement("input");t.setAttribute("placeholder","Add a subtask..."),t.setAttribute("type","text"),t.classList.add("subtask");var n=document.createElement("button");n.innerText="delete",n.classList.add("delete_subtask"),m.appendChild(t),m.appendChild(n),e.preventDefault()})),f.addEventListener("click",(function(e){e.preventDefault();var t=m.querySelector('input[type="text"]').value,o=document.createElement("span"),s=document.createElement("span"),r=m.querySelectorAll(".subtask"),i=document.createElement("li"),c=document.createElement("span"),d=document.createElement("span"),u=document.createElement("li"),f=document.createElement("span"),g=document.createElement("ul"),p=Array.from(l.options).filter((function(e){return e.selected})).map((function(e){return e.value.slice(0,e.value.indexOf("Core Skill:")-1)}));if(t&&p.length>0){var v={};v.name=t,v.progress=0,v.subTasks=[],v.contributors=[],v.status="undone",v.checked=!1,d.textContent="Contributors: ",o.textContent=t,s.textContent="0%",f.textContent="delete",p.forEach((function(e){v.contributors.push(e.charAt(0).toLowerCase()+e.slice(1)),c.textContent+="".concat(e," ")})),s.classList.add("progress"),f.classList.add("delete"),u.classList.add("task"),u.classList.add("undone"),g.classList.add("sub_task_invis");for(var y=1;y<r.length;y++)if(r[y].value){var h={};h.name=r[y].value,h.status="undone",h.checked=!1,v.subTasks.push(h);var E=document.createElement("li"),k=document.createElement("span"),b=document.createElement("span");k.textContent=r[y].value,b.textContent="delete",k.classList.add("name"),b.classList.add("delete"),E.appendChild(k),E.appendChild(b),E.classList.add("undone"),g.appendChild(E)}u.appendChild(o),u.appendChild(s),u.appendChild(f),a.appendChild(u),u.appendChild(g),i.appendChild(d),i.appendChild(c),g.appendChild(i),m.querySelectorAll('input[type="text"]').forEach((function(e){e.value=""})),n.push(v),window.localStorage.tasks=JSON.stringify(n)}})),a.addEventListener("click",(function(e){if("delete"==e.target.className){var t=e.target.parentElement,o=t.getAttribute("value");if("task undone"==t.className||"task done"==t.className)n.splice(o,1);else if("task undone"!=t.className||"task done"!=t.className){var s=e.target.parentElement,r=s.parentElement,a=r.parentElement,i=a.parentElement,l=Array.from(i.children).indexOf(a),c=Array.from(r.children).indexOf(s);n[l].subTasks.splice(c,1)}t.parentNode.removeChild(t),window.localStorage.tasks=JSON.stringify(n)}else if("task undone"==e.target.className||"task done"==e.target.className)e.target.lastChild.classList.toggle("sub_task_invis");else if("addValue"==e.target.className){var d=e.target.parentElement,u=d.parentElement,m=u.parentElement,f=m.lastChild.childNodes,p=+m.childNodes[2].innerText.slice(0,-1),v=+e.target.getAttribute("value"),y=m.getAttribute("value"),h=Array.from(u.children).indexOf(d);if(e.target.checked){d.className="done",n[y].subTasks[h].status="done",n[y].subTasks[h].checked=!0,n[y].progress=v,window.localStorage.tasks=JSON.stringify(n);for(var E=0,k=0;k<f.length-1;k++)f[k].childNodes[1].checked||(E+=1);0==E?(m.childNodes[1].checked=!0,m.childNodes[2].innerText="100%",m.className="task done",n[y].status="done",n[y].progress=100,n[y].checked=!0,window.localStorage.tasks=JSON.stringify(n)):(m.childNodes[2].innerText=p+v+"%",n[y].progress=p+v,window.localStorage.tasks=JSON.stringify(n))}else if(!e.target.checked){d.className="undone",m.className="task undone",n[y].status="undone",n[y].subTasks[h].status="undone",n[y].subTasks[h].checked=!1,n[y].progress=p-v,window.localStorage.tasks=JSON.stringify(n);for(var b=0,x=0;x<f.length-1;x++)f[x].childNodes[1].checked&&(b+=1);0==b?(m.childNodes[2].innerText="0%",m.className="task undone",n[y].status="undone",n[y].checked=!1,n[y].progress=0,window.localStorage.tasks=JSON.stringify(n)):(m.childNodes[1].checked=!1,n[y].checked=!1,window.localStorage.tasks=JSON.stringify(n),m.childNodes[2].innerText=p-v+"%")}}else if("doneTask"==e.target.className){var S=e.target.parentElement,w=S.getAttribute("value"),C=S.lastChild.childNodes;e.target.checked?g(!0,"done",100,w,C,S):e.target.checked||g(!1,"undone",0,w,C,S)}})),i["add-task"].addEventListener("click",(function(e){if("delete_subtask"==e.target.className){e.preventDefault();var t=e.target.parentNode,n=e.target.previousElementSibling,o=e.target;t.removeChild(n),t.removeChild(o)}})),i["search-tasks"].querySelector("input").addEventListener("keyup",(function(e){for(var t=e.target.value.toLowerCase(),n=Array.from(a.querySelectorAll("li.task")),o=0;o<n.length;o++){var s=n[o].firstElementChild.textContent,r=Array.from(n[o].getElementsByTagName("li"));if(-1!=s.toLowerCase().indexOf(t))n[o].style.display="block";else for(var i=0;i<r.length;i++){var l=r[i].firstElementChild.textContent;if(!r[i].classList.contains("task")){if(-1!=l.toLowerCase().indexOf(t)){r[i].parentElement.parentElement.style.display="block";break}r[i].parentElement.parentElement.style.display="none"}}}}));var p=document.getElementById("undone"),v=document.getElementById("done");function y(e,t){var n=Array.from(a.getElementsByTagName("li"));e.checked?n.forEach((function(e){e.className=="task "+t&&(e.style.display="block")})):e.checked||n.forEach((function(e){e.className=="task "+t&&(e.style.display="none")}))}function h(e,t){var n=document.createElement("option"),s=o[t].name.charAt(0).toUpperCase()+o[t].name.slice(1);n.innerText="".concat(s," Core Skill: ").concat(o[t].coreSkill),e.appendChild(n),o.length<=23?e.setAttribute("size",o.length-1):o.length>22&&e.setAttribute("size","22")}function E(){if(e.isAdmin)e.isAdmin&&k(!0);else{k(!1),b("#tasks_wrapper header .page-banner"),i["search-tasks"].style.display="block";var t=document.querySelectorAll(".check");document.querySelectorAll(".delete").forEach((function(e){e.style.display="none"})),t.forEach((function(e){e.classList.remove("check")}))}}function k(t){for(var o=function(o){var s=n[o].name,r=document.createElement("li"),i=document.createElement("span"),l=document.createElement("span"),c=document.createElement("span"),d=n.indexOf(n[o]),u=document.createElement("li"),m=document.createElement("span"),f=document.createElement("span"),g=document.createElement("ul"),p=document.createElement("input");if(p.setAttribute("type","checkbox"),p.classList.add("check"),p.checked=n[o].checked,n[o].contributors.forEach((function(e){m.textContent+="".concat(e.charAt(0).toUpperCase()+e.slice(1)," ")})),f.textContent="Contributors: ",i.textContent=s,l.textContent=n[o].progress+"%",c.textContent="delete",i.classList.add("name"),l.classList.add("progress"),c.classList.add("delete"),r.setAttribute("value",d),r.classList.add("task"),r.classList.add(n[o].status),g.classList.add("sub_task_invis"),p.setAttribute("value","100"),p.classList.add("doneTask"),n[o].subTasks.length>0)for(var v=(100/n[o].subTasks.length).toFixed(),y=0;y<n[o].subTasks.length;y++){var h=document.createElement("li"),E=document.createElement("input");E.setAttribute("type","checkbox"),E.setAttribute("value",v);var k=document.createElement("span"),b=document.createElement("span");k.textContent=n[o].subTasks[y].name,E.checked=n[o].subTasks[y].checked,E.classList.add("check"),E.classList.add("addValue"),h.classList.add(n[o].subTasks[y].status),b.textContent="delete",k.classList.add("name"),b.classList.add("delete"),h.appendChild(k),h.appendChild(E),h.appendChild(b),g.appendChild(h)}if(u.appendChild(f),u.appendChild(m),g.appendChild(u),r.appendChild(i),r.appendChild(p),r.appendChild(l),r.appendChild(c),r.appendChild(g),t)a.appendChild(r);else for(var x=0;x<n[o].contributors.length;x++)n[o].contributors[x]==e.name&&a.appendChild(r)},s=0;s<n.length;s++)o(s)}function b(e){for(var t=document.querySelectorAll(e+" > *"),n=0;n<t.length;n++)t[n].style.display="none"}p.addEventListener("click",(function(){y(p,"undone")})),v.addEventListener("click",(function(){y(v,"done")}))}(),o();var s=document.getElementById("share_button"),r=document.getElementById("share_link_copy"),a=document.getElementById("share_link_container"),i=a.getElementsByTagName("SPAN")[0];s.addEventListener("click",(function(){var e,t;a.style.display="block",urlCopied.innerHTML=window.location.href,e="urlCopied",(t=document.createRange()).selectNode(document.getElementById(e)),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)})),r.addEventListener("click",(function(){document.execCommand("copy")})),i.addEventListener("click",(function(){a.style.display="none"}))}}]);