(self.webpackChunkvincent_tse=self.webpackChunkvincent_tse||[]).push([[682],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return E}});var a=n(4694),r=n(5697),o=n.n(r),c=n(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function v(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),r=f(t.slice(0,a)),o=t.slice(a+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[r]=o,e}),{})}var b=!1;try{b=!0}catch(g){}function y(e){return a.parse.icon?a.parse.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function p(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function E(e){var t=e.forwardedRef,n=u(e,["forwardedRef"]),r=n.icon,o=n.mask,c=n.symbol,l=n.className,i=n.title,f=n.titleId,v=y(r),g=p("classes",[].concat(d(function(e){var t,n=e.spin,a=e.pulse,r=e.fixedWidth,o=e.inverse,c=e.border,l=e.listItem,i=e.flip,m=e.size,u=e.rotation,d=e.pull,f=(s(t={"fa-spin":n,"fa-pulse":a,"fa-fw":r,"fa-inverse":o,"fa-border":c,"fa-li":l,"fa-flip-horizontal":"horizontal"===i||"both"===i,"fa-flip-vertical":"vertical"===i||"both"===i},"fa-".concat(m),null!=m),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(d),null!=d),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),d(l.split(" ")))),A=p("transform","string"==typeof n.transform?a.parse.transform(n.transform):n.transform),N=p("mask",y(o)),w=(0,a.icon)(v,m({},g,{},A,{},N,{symbol:c,title:i,titleId:f}));if(!w)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",v),null;var h=w.abstract,H={ref:t};return Object.keys(n).forEach((function(e){E.defaultProps.hasOwnProperty(e)||(H[e]=n[e])})),O(h[0],H)}E.displayName="FontAwesomeIcon",E.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=v(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[f(t)]=a}return e}),{attrs:{}}),c=a.style,l=void 0===c?{}:c,s=u(a,["style"]);return o.attrs.style=m({},o.attrs.style,{},l),t.apply(void 0,[n.tag,m({},o.attrs,{},s)].concat(d(r)))}.bind(null,c.createElement)},5015:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r="footer-module--social_image--7A0wA",o="footer-module--social_link--2Kw5u",c=n(4694),l=n(7190),s=n(8014),i=n(7606),m=function(){return c.library.add(l.vnX,s.mRB),a.createElement("div",{className:"footer-module--footer_container--1gGEW footer-module--padding--293gf"},a.createElement("div",{className:"footer-module--text_container--31zNu"},a.createElement("h1",{className:"footer-module--footer_h1--8TdJY"},"CONNECT WITH ME")),a.createElement("div",{className:"footer-module--socials_container--2n_7g"},a.createElement("a",{className:o,href:"https://github.com/vincenttse15",target:"_blank",rel:"noreferrer"},a.createElement(i.G,{icon:["fab","github-square"],className:r})),a.createElement("a",{className:o,href:"https://www.linkedin.com/in/vincent-tse-0084a7210/",target:"_blank",rel:"noreferrer"},a.createElement(i.G,{icon:["fab","linkedin"],className:r})),a.createElement("a",{className:o,href:"mailto:vincenttse19@gmail.com"},a.createElement(i.G,{icon:["fas","envelope-square"],className:r}))))}},6297:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(7294),r="navbar-module--navbar_active--1sENi",o="navbar-module--name_active--dd_BF",c="navbar-module--link_container_active--Q6JJO",l="navbar-module--menu_active--1BjrX",s="navbar-module--menu_button_active--3Jgmw",i="navbar-module--link--15Cqi",m="navbar-module--right_link--2vmfZ",u="navbar-module--right_link_active--21608",d="navbar-module--active--1TM2D",f=n.p+"static/Vincent_Tse_Resume-a5e89b6a45794c7ecee3d9e9b7ba0035.pdf",v=n(5444),b=n(4694),y=n(8014),p=n(7606);function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g=function(e){var t=e.path;b.library.add(y.mRB);var n=a.useState(!1),O=n[0],g=n[1],A=a.useState(!1),N=A[0],w=A[1],h=a.useState(0),H=h[0],C=h[1],X=function(){C(window.innerWidth)},L=function(){if(O){g(!1),document.getElementById("menu-button").classList.remove(s),document.getElementById("link-container").classList.remove(c),document.getElementById("nav").classList.remove(r),document.getElementById("name").classList.remove(o),document.getElementById("menu").classList.remove(l),document.body.style.overflow="visible";for(var e,t=E(document.getElementsByClassName(m));!(e=t()).done;){e.value.classList.remove(u)}}else{g(!0),document.getElementById("menu-button").classList.add(s),document.getElementById("link-container").classList.add(c),document.getElementById("nav").classList.add(r),document.getElementById("name").classList.add(o),document.getElementById("menu").classList.add(l),document.body.style.overflow="hidden";for(var n,a=E(document.getElementsByClassName(m));!(n=a()).done;){n.value.classList.add(u)}}},Z=function(){O&&(document.body.style.overflow="visible")};return a.useEffect((function(){return N||(w(!0),X()),window.addEventListener("resize",X),H>768&&O&&L(),function(){window.removeEventListener("resize",X)}}),[H]),a.useEffect((function(){switch(console.log(t),t){case"/vincent-tse-portfolio/about":document.getElementById("nav-about").classList.add(d);break;case"/vincent-tse-portfolio/contact":document.getElementById("nav-contact").classList.add(d);break;default:document.getElementById("nav-home").classList.add(d)}}),[t]),a.createElement("div",{className:"navbar-module--navbar--13zbi navbar-module--padding--1geGH",id:"nav"},a.createElement("div",{className:"navbar-module--name--3m2LV",id:"name"},a.createElement(v.rU,{to:"/",className:"navbar-module--left_link--24GD3"},"VINCENT TSE")),a.createElement("div",{className:"navbar-module--menu--39_1X",id:"menu"},a.createElement("button",{type:"button",className:"navbar-module--button--1Iamj",onClick:L},a.createElement(p.G,{icon:["fas","bars"],className:"navbar-module--menu_button--3L5oz",id:"menu-button"}))),a.createElement("div",{className:"navbar-module--link_container--AXmBY",id:"link-container"},a.createElement(v.rU,{to:"/",className:i+" "+m,id:"nav-home",onClick:Z},"PORTFOLIO"),a.createElement(v.rU,{to:"/about",className:i+" "+m,id:"nav-about",onClick:Z},"ABOUT"),a.createElement(v.rU,{to:"/contact",className:i+" "+m,id:"nav-contact",onClick:Z},"CONTACT"),a.createElement("a",{href:f,target:"_blank",rel:"noreferrer",className:i+" "+m,id:"nav-resume",onClick:Z},"RESUME")))}},4485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var a=n(7294),r="about-module--padding--18NLm",o="about-module--image--3XhaB",c="about-module--text--1xvRJ",l="about-module--icons--2w18Q",s="about-module--description_container--2JX4-",i="about-module--paint_image_container--3yxsf",m="about-module--paint_character--1MdcY",u=n(6297),d=n.p+"static/vincent-32152901a85ad4ab739d18b7036fb99e.jpeg",f=n(5015),v=n(4694),b=n(8014),y=n(7606),p=n.p+"static/woody-04d0b2506bc336c424cc28bdb90a4df2.png",E=n.p+"static/shrek-4acfeb412a40709b5b3937b7144d6f0f.png",O=n.p+"static/spiderverse-ebbd6860cd71c995e06e488bb47edc49.png",g=n(9499),A=function(){var e=g.globalHistory.location.pathname;return v.library.add(b.mRB),a.createElement("main",null,a.createElement(u.Z,{path:e}),a.createElement("div",{className:"about-module--about_container--3eHJ8 "+r},a.createElement("div",{className:"about-module--image_container--1sHec"},a.createElement("div",{className:"about-module--vincent--_vo5E"},a.createElement("img",{src:d,alt:"vincent",className:o}))),a.createElement("div",{className:"about-module--text_container--r5LlO"},a.createElement("h1",{className:"about-module--text_h1--2tCmD"},"ABOUT ME"),a.createElement("div",{className:"about-module--divider--32N94"}),a.createElement("p",{className:c},"Hi, I'm Vincent Tse, a software engineer based in San Jose, CA. In May 2021, I acquired my Bachelor's Degree in Computer Science from San Francisco State University with my main focus being on front-end development."),a.createElement("p",{className:c},"In my free time I enjoy watching movies and shows, playing games, finding new music, and drawing on MS Paint."),a.createElement("p",{className:c},"I'm currently looking for full-time software engineering opportunities. You can reach me at ",a.createElement("a",{className:"about-module--email--1AVHe",href:"mailto:vincenttse19@gmail.com"},"vincenttse19@gmail.com"),"."))),a.createElement("div",{className:"about-module--drawing_header--1oFiQ "+r},a.createElement("h1",{className:"about-module--header_h1--HO333"},"SOME THINGS I DREW"),a.createElement(y.G,{icon:["fas","palette"],className:l}),a.createElement(y.G,{icon:["fas","paint-brush"],className:l})),a.createElement("div",{className:"about-module--woody_container--3yRUF "+r},a.createElement("div",{className:i},a.createElement("div",{className:"about-module--woody--12EXt"},a.createElement("img",{src:p,alt:"woody",className:o}))),a.createElement("div",{className:s},a.createElement("h1",{className:m},"WOODY"))),a.createElement("div",{className:"about-module--shrek_container--3agaY "+r},a.createElement("div",{className:s},a.createElement("h1",{className:m},"SHREK")),a.createElement("div",{className:i},a.createElement("div",{className:"about-module--shrek--1RUob"},a.createElement("img",{src:E,alt:"shrek",className:o})))),a.createElement("div",{className:"about-module--spiderverse_container--2B8iM "+r},a.createElement("div",{className:i},a.createElement("div",{className:"about-module--spiderverse--1WUqc"},a.createElement("img",{src:O,alt:"spiderverse",className:o}))),a.createElement("div",{className:s},a.createElement("h1",{className:m},"PETER PARKER"),a.createElement("h1",{className:m},"MILES MORALES"),a.createElement("h1",{className:m},"GWEN STACY"))),a.createElement("div",{className:"about-module--findingnemo_container--1vyIZ "+r},a.createElement("div",{className:s},a.createElement("h1",{className:m},"MARLIN"),a.createElement("h1",{className:m},"DORY")),a.createElement("div",{className:i},a.createElement("div",{className:"about-module--findingnemo--3o5og"},a.createElement("img",{src:"data:image/png;base64,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",alt:"findingnemo",className:o})))),a.createElement(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-fd6085500f11dbee1214.js.map