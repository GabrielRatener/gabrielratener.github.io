_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("nKUr"),o=n("g4pe"),i=n.n(o),s=n("20a2"),c=n("GyP+"),u=n("FiQg"),l=n.n(u);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=[{name:"resume",title:"Resume",link:"/resume"},{name:"portfolio",title:"Portfolio",link:"/portfolio"},{name:"contact",title:"Contact",link:"/contact"}],h=function(e){switch(e.slice(1)){case"":case"index":return"Home";case"contact":return"Contact";case"portfolio":return"Portfolio";case"resume":return"Resume";default:return"4oooo4"}};function b(e){var t=e.children,n=e.route;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"background",class:"print-omit",children:Object(a.jsx)("canvas",{})}),Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)("a",{class:"github-corner right d-none d-lg-block print-omit",href:"https://github.com/".concat(l.a.profiles.github),target:"blank",children:Object(a.jsx)("img",{src:Object(c.g)("github-corner-right")})}),Object(a.jsxs)("nav",{class:"navbar navbar-expand-md navbar-light shaddow-box print-omit",children:[Object(a.jsx)("a",{class:"navbar-brand",href:"/",children:"Gabriel Ratener"}),Object(a.jsx)("button",{type:"button",class:"navbar-toggler","data-toggle":"collapse","data-target":"#thenavigation","aria-controls":"thenavigation","aria-expanded":"false","aria-label":"Expand Navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{id:"thenavigation",class:"navbar-collapse",children:Object(a.jsx)("ul",{class:"navbar-nav ml-auto",children:f.map((function(e){return Object(a.jsxs)("li",{class:"nav-item",children:[Object(a.jsx)("a",{class:"nav-link",href:e.link,children:e.title}),Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)("div",{class:"shoe d-none d-md-block ".concat(e.link===n?"active":"inactive")})})]},e.link)}))})})]}),Object(a.jsxs)("div",{class:"app-content jumbotron shaddow-box",children:[Object(a.jsx)("h1",{class:"text-center print-omit",children:h(n)}),Object(a.jsx)("br",{class:"print-omit"}),Object(a.jsx)("div",{children:t}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("p",{class:"text-muted print-omit",children:["\xa9 ",Object(c.d)()," Gabriel Ratener"]}),Object(a.jsxs)("p",{class:"text-muted print-only",children:["Published ",Object(c.c)()]})]})]})]})]})}t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(s.useRouter)();return Object(a.jsxs)(b,{route:r.route,children:[Object(a.jsx)(i.a,{children:Object(a.jsxs)("title",{children:["Gabriel Ratener - ",h(r.route)]})}),Object(a.jsx)(t,p({route:r.route},n))]})}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FiQg:function(e,t){const n=[{overview:"I am a full-stack software engineer with 3 years of experience\ndeveloping full-stack web applications primarily in JavaScript. Hobbies include\ndeveloping programming languages, parser-generators, and other paring tools.\nRecently I've been developing apps with Flutter\nfor Android and IOS, and writing services in Rust with Actix Web.\n",education:{degrees:[{school:"Central Washington University",degree:"MS in Computer Science",dates:["01-09-2014","01-03-2017"]},{school:"University of Washington",degree:"BS in Atmostpheric Sciences",dates:["01-09-2011","01-06-2014"]}]},employment:{jobs:[{company:"StatPower",link:"https://statpower.com",dates:["01-03-2020"],overview:"I am the lead full-stack developer of the jewelery-focused CRM. My duties include\n",duties:["Developing and maintaining our Vue.js/TypeScript web app\n","Developing and maintaining our Node.JS/Express REST API\n","Writing SQL queries when Sequelize fails to meet our needs\n","Managing our PostgreSQL database\n"]},{company:"KLIK Boks",link:"https://klikboks.com",dates:["01-07-2018","01-02-2020"],overview:"I worked on a number of miscellaneous\nsoftware projects at the hardware startup, mainly\n",duties:["Writing desktop apps in Electron to setup and manage KLIK devices\n","Rewriting the device-hosted Vue.js web interface for controlling KLIK devices\n","Designing toolchains to automate and customize firmware builds\n","Developing our cloud platform with Node.js and Rust\n"]},{company:"Social Rugrats",link:"https://www.linkedin.com/company/social-rugrats",dates:["01-04-2017","01-10-2017"],overview:"I primarily worked on the Angular.js\nfront-end at the online playdate-hosting startup.\n",duties:[]}]},skills:{overview:"I have some!",list:["Web Development","Pumping out tons of JavaScript","Writing Parsers","Building Electron Apps","Writing Servers in Node.JS and Rust","Creating web apps with front-end frameworks like React and Vue.js","Creating UIs and applicaitons for embedded devices and IoT","Writing WebRTC-based applications","Web Scraping"]},profiles:{github:"GabrielRatener"}}];e.exports=n.length<=1?n[0]:n},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[[0,0,1,3,2,4]]]);