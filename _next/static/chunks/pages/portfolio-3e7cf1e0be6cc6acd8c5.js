_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"0fKk":function(e,t){const r=[{angular:{title:"AngularJS",url:"https://angularjs.org"},bootstrap:{title:"Bootstrap",url:"https://getbootstrap.com"},crane:{title:"Crane Parser",url:"https://github.com/crane-parser"},electron:{title:"Electron",url:"https://electronjs.org"},nodejs:{title:"NodeJS",url:"https://nodejs.org"},postgresql:{title:"PostgreSQL",url:"https://postgresql.org"},pugjs:{title:"PugJS",url:"https://pugjs.org"},rails:{title:"Ruby on Rails",url:"https://rubyonrails.org"},react:{title:"React",background:{light:"#555"},url:"https://reactjs.org"},ruby:{title:"Ruby",url:"https://ruby-lang.org"},typescript:{title:"TypeScript",url:"https://typescriptlang.org"},vuejs:{title:"Vue.js",url:"https://vuejs.org"},nextjs:{title:"Next.js",url:"https://nextjs.org"},rust:{title:"Rust",url:"https://www.rust-lang.org"},shopify:{title:"Shopify",url:"https://shopify.com"},sass:{title:"Sass",url:"https://sass-lang.com"},svelte:{title:"Svelte",url:"https://svelte.dev"},twilio:{title:"Twilio",url:"https://twilio.com"},materialui:{title:"Material UI",url:"https://material-ui.com"},sequelize:{title:"Sequelize ORM",url:"https://sequelize.org"},webpack:{title:"Webpack",url:"https://webpack.js.org"},python:{title:"Python",url:"https://python.org"},flask:{title:"Flask",url:"https://flask.palletsproject.com"}}];e.exports=r.length<=1?r[0]:r},"9u96":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Y}));var n=r("nKUr"),o=r("KQm4"),a=r("rePB"),i=r("q1tI"),l=r("wx14"),s=r("Ff2n"),c=(r("17x9"),r("iuhU")),u=r("TrhM");var p=i.createContext();function d(){return i.useContext(p)}var h=p,f=r("H2TA"),b=r("NqtD"),g=r("bfFb"),m=r("l3Wi");function y(e,t){return parseInt(e[t],10)||0}var v="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,j={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},w=i.forwardRef((function(e,t){var r=e.onChange,n=e.rows,o=e.rowsMax,a=e.rowsMin,c=void 0===a?1:a,u=e.style,p=e.value,d=Object(s.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),h=n||c,f=i.useRef(null!=p).current,b=i.useRef(null),w=Object(g.a)(t,b),O=i.useRef(null),x=i.useRef(0),k=i.useState({}),S=k[0],C=k[1],E=i.useCallback((function(){var t=b.current,r=window.getComputedStyle(t),n=O.current;n.style.width=r.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");var a=r["box-sizing"],i=y(r,"padding-bottom")+y(r,"padding-top"),l=y(r,"border-bottom-width")+y(r,"border-top-width"),s=n.scrollHeight-i;n.value="x";var c=n.scrollHeight-i,u=s;h&&(u=Math.max(Number(h)*c,u)),o&&(u=Math.min(Number(o)*c,u));var p=(u=Math.max(u,c))+("border-box"===a?i+l:0),d=Math.abs(u-s)<=1;C((function(e){return x.current<20&&(p>0&&Math.abs((e.outerHeightStyle||0)-p)>1||e.overflow!==d)?(x.current+=1,{overflow:d,outerHeightStyle:p}):e}))}),[o,h,e.placeholder]);i.useEffect((function(){var e=Object(m.a)((function(){x.current=0,E()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[E]),v((function(){E()})),i.useEffect((function(){x.current=0}),[p]);return i.createElement(i.Fragment,null,i.createElement("textarea",Object(l.a)({value:p,onChange:function(e){x.current=0,f||E(),r&&r(e)},ref:w,rows:h,style:Object(l.a)({height:S.outerHeightStyle,overflow:S.overflow?"hidden":null},u)},d)),i.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:O,tabIndex:-1,style:Object(l.a)({},j,u)}))}));function O(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var x="undefined"===typeof window?i.useEffect:i.useLayoutEffect,k=i.forwardRef((function(e,t){var r=e["aria-describedby"],n=e.autoComplete,o=e.autoFocus,a=e.classes,p=e.className,f=(e.color,e.defaultValue),m=e.disabled,y=e.endAdornment,v=(e.error,e.fullWidth),j=void 0!==v&&v,k=e.id,S=e.inputComponent,C=void 0===S?"input":S,E=e.inputProps,P=void 0===E?{}:E,A=e.inputRef,M=(e.margin,e.multiline),R=void 0!==M&&M,T=e.name,D=e.onBlur,I=e.onChange,L=e.onClick,N=e.onFocus,B=e.onKeyDown,z=e.onKeyUp,q=e.placeholder,K=e.readOnly,W=e.renderSuffix,F=e.rows,_=e.rowsMax,U=e.rowsMin,$=e.startAdornment,H=e.type,J=void 0===H?"text":H,G=e.value,X=Object(s.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),V=null!=P.value?P.value:G,Q=i.useRef(null!=V).current,Z=i.useRef(),Y=i.useCallback((function(e){0}),[]),ee=Object(g.a)(P.ref,Y),te=Object(g.a)(A,ee),re=Object(g.a)(Z,te),ne=i.useState(!1),oe=ne[0],ae=ne[1],ie=d();var le=function(e){var t=e.props,r=e.states,n=e.muiFormControl;return r.reduce((function(e,r){return e[r]=t[r],n&&"undefined"===typeof t[r]&&(e[r]=n[r]),e}),{})}({props:e,muiFormControl:ie,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});le.focused=ie?ie.focused:oe,i.useEffect((function(){!ie&&m&&oe&&(ae(!1),D&&D())}),[ie,m,oe,D]);var se=ie&&ie.onFilled,ce=ie&&ie.onEmpty,ue=i.useCallback((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(O(e.value)&&""!==e.value||t&&O(e.defaultValue)&&""!==e.defaultValue)}(e)?ce&&ce():se&&se()}),[se,ce]);x((function(){Q&&ue({value:V})}),[V,ue,Q]);i.useEffect((function(){ue(Z.current)}),[]);var pe=C,de=Object(l.a)({},P,{ref:re});"string"!==typeof pe?de=Object(l.a)({inputRef:re,type:J},de,{ref:null}):R?!F||_||U?(de=Object(l.a)({rows:F,rowsMax:_},de),pe=w):pe="textarea":de=Object(l.a)({type:J},de);return i.useEffect((function(){ie&&ie.setAdornedStart(Boolean($))}),[ie,$]),i.createElement("div",Object(l.a)({className:Object(c.a)(a.root,a["color".concat(Object(b.a)(le.color||"primary"))],p,le.disabled&&a.disabled,le.error&&a.error,j&&a.fullWidth,le.focused&&a.focused,ie&&a.formControl,R&&a.multiline,$&&a.adornedStart,y&&a.adornedEnd,"dense"===le.margin&&a.marginDense),onClick:function(e){Z.current&&e.currentTarget===e.target&&Z.current.focus(),L&&L(e)},ref:t},X),$,i.createElement(h.Provider,{value:null},i.createElement(pe,Object(l.a)({"aria-invalid":le.error,"aria-describedby":r,autoComplete:n,autoFocus:o,defaultValue:f,disabled:le.disabled,id:k,onAnimationStart:function(e){ue("mui-auto-fill-cancel"===e.animationName?Z.current:{value:"x"})},name:T,placeholder:q,readOnly:K,required:le.required,rows:F,value:V,onKeyDown:B,onKeyUp:z},de,{className:Object(c.a)(a.input,P.className,le.disabled&&a.disabled,R&&a.inputMultiline,le.hiddenLabel&&a.inputHiddenLabel,$&&a.inputAdornedStart,y&&a.inputAdornedEnd,"search"===J&&a.inputTypeSearch,"dense"===le.margin&&a.inputMarginDense),onBlur:function(e){D&&D(e),P.onBlur&&P.onBlur(e),ie&&ie.onBlur?ie.onBlur(e):ae(!1)},onChange:function(e){if(!Q){var t=e.target||Z.current;if(null==t)throw new Error(Object(u.a)(1));ue({value:t.value})}for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];P.onChange&&P.onChange.apply(P,[e].concat(n)),I&&I.apply(void 0,[e].concat(n))},onFocus:function(e){le.disabled?e.stopPropagation():(N&&N(e),P.onFocus&&P.onFocus(e),ie&&ie.onFocus?ie.onFocus(e):ae(!0))}}))),y,W?W(Object(l.a)({},le,{startAdornment:$})):null)})),S=Object(f.a)((function(e){var t="light"===e.palette.type,r={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},n={opacity:"0 !important"},o={opacity:t?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:Object(l.a)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(k),C=i.forwardRef((function(e,t){var r=e.disableUnderline,n=e.classes,o=e.fullWidth,a=void 0!==o&&o,u=e.inputComponent,p=void 0===u?"input":u,d=e.multiline,h=void 0!==d&&d,f=e.type,b=void 0===f?"text":f,g=Object(s.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return i.createElement(S,Object(l.a)({classes:Object(l.a)({},n,{root:Object(c.a)(n.root,!r&&n.underline),underline:null}),fullWidth:a,inputComponent:p,multiline:h,ref:t,type:b},g))}));C.muiName="Input";var E=Object(f.a)((function(e){var t="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(t),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(t)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}}),{name:"MuiInput"})(C),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},A=i.forwardRef((function(e,t){var r=e.align,n=void 0===r?"inherit":r,o=e.classes,a=e.className,u=e.color,p=void 0===u?"initial":u,d=e.component,h=e.display,f=void 0===h?"initial":h,g=e.gutterBottom,m=void 0!==g&&g,y=e.noWrap,v=void 0!==y&&y,j=e.paragraph,w=void 0!==j&&j,O=e.variant,x=void 0===O?"body1":O,k=e.variantMapping,S=void 0===k?P:k,C=Object(s.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=d||(w?"p":S[x]||P[x])||"span";return i.createElement(E,Object(l.a)({className:Object(c.a)(o.root,a,"inherit"!==x&&o[x],"initial"!==p&&o["color".concat(Object(b.a)(p))],v&&o.noWrap,m&&o.gutterBottom,w&&o.paragraph,"inherit"!==n&&o["align".concat(Object(b.a)(n))],"initial"!==f&&o["display".concat(Object(b.a)(f))]),ref:t},C))})),M=Object(f.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(A),R=i.forwardRef((function(e,t){var r=e.children,n=e.classes,o=e.className,a=e.component,u=void 0===a?"div":a,p=e.disablePointerEvents,f=void 0!==p&&p,b=e.disableTypography,g=void 0!==b&&b,m=e.position,y=e.variant,v=Object(s.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=d()||{},w=y;return y&&j.variant,j&&!w&&(w=j.variant),i.createElement(h.Provider,{value:null},i.createElement(u,Object(l.a)({className:Object(c.a)(n.root,o,f&&n.disablePointerEvents,j.hiddenLabel&&n.hiddenLabel,"filled"===w&&n.filled,{start:n.positionStart,end:n.positionEnd}[m],"dense"===j.margin&&n.marginDense),ref:t},v),"string"!==typeof r||g?r:i.createElement(M,{color:"textSecondary"},r)))})),T=Object(f.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(R),D=r("PsDL"),I=r("WUv8"),L=r.n(I),N=r("bSwy"),B=r.n(N),z=r("C/Fq"),q=r("m95x"),K=r("vR5X"),W=r("x4pp"),F=r.n(W),_=r("0fKk"),U=r.n(_);function $(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=F.a.projects.map((function(e){return G(G({},e),{},{plainDescription:Object(z.g)(e.description).toLowerCase()})})),V=function(e){return e.hasOwnProperty("tech")?e.tech.map((function(e){return G(G({},U.a[e]),{},{img:"images/tech/".concat(e,".png")})})):[]},Q=function(e,t){var r=t.toLowerCase();if(e.title.toLowerCase().includes(r))return!0;if(e.plainDescription.includes(r))return!0;if(e.hasOwnProperty("tech")){var n,o=$(e.tech);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(U.a[a].title.toLowerCase().includes(r))return!0}}catch(i){o.e(i)}finally{o.f()}}return!1},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.length>0?Q(e,t)?["does-match"]:["doesnt-match"]:[]};function Y(){var e=Object(i.useState)(""),t=e[0],r=e[1],a=X.filter(function(e){return function(t){return Q(t,e)}}(t));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{class:"text-center p-1 mb-2 portfolio-search d-none d-md-block",children:Object(n.jsx)(E,{placeholder:"Filter results",value:t,endAdornment:Object(n.jsx)(T,{position:"end",children:0===t.length?Object(n.jsx)(B.a,{}):Object(n.jsx)(D.a,{onClick:function(){return r("")},style:{padding:"0px"},children:Object(n.jsx)(L.a,{})})}),onInput:function(e){return r(e.target.value)}})}),0===a.length?Object(n.jsxs)("div",{class:"text-center m-4",children:[Object(n.jsx)("h5",{children:"No Results"}),Object(n.jsx)("p",{children:"Try a different query perhaps?"})]}):Object(n.jsx)("ul",{id:"portfolio",class:"list-unstyled",children:a.map((function(e,r){return Object(n.jsx)("li",{className:["shaddow-box"].concat(Object(o.a)(Z(e,t))).join(" "),children:Object(n.jsxs)("a",{class:"link-unstyled",target:"blank",href:e.link,children:[Object(n.jsx)("img",{class:"portfolio image-t".concat(Math.floor((r+1)/2)%2),src:Object(z.f)(e.image)}),Object(n.jsxs)("div",{class:"description ".concat(e.dark?"dark":"light"),children:[Object(n.jsx)("h4",{children:Object(n.jsx)(q.a,{value:e.title,query:t})}),Object(n.jsx)("p",{children:Object(z.e)(e.description).map((function(e){var r=Object(n.jsx)(q.a,{value:e.content,query:t});switch(e.type){case"link":return Object(n.jsx)("a",{href:e.link,children:r});case"text":return Object(n.jsx)("span",{children:r});case"bold":return Object(n.jsx)("span",{class:"font-weight-bold",children:r});case"italic":return Object(n.jsx)("span",{class:"font-italic",children:r})}}))}),Object(n.jsx)("div",{class:"chip-container d-none d-sm-block",children:V(e).map((function(r){return Object(n.jsx)(K.a,{dark:e.dark,filter:t,tech:r})}))})]})]})},r)}))})]})}},WUv8:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=i},bSwy:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},m95x:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("nKUr"),o=r("KQm4"),a=r("o0o1"),i=r.n(a);function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=i.a.mark((function e(t,r){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=0,0!==r.length){e.next=3;break}return e.abrupt("return");case 3:if(!((o=t.indexOf(r,n))>=0)){e.next=11;break}return e.next=8,o;case 8:n=o+r.length,e.next=12;break;case 11:return e.abrupt("return");case 12:e.next=3;break;case 14:case"end":return e.stop()}}),e)})),u=i.a.mark((function e(){var t,r,n,o,a,s,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length>0&&void 0!==u[0]?u[0]:"",r=u.length>1&&void 0!==u[1]?u[1]:"",n=0,o=l(c(t.toLowerCase(),r.toLowerCase())),e.prev=4,o.s();case 6:if((a=o.n()).done){e.next=16;break}if(!((s=a.value)>0)){e.next=11;break}return e.next=11,{match:!1,text:t.slice(n,s)};case 11:return e.next=13,{match:!0,text:t.slice(s,s+r.length)};case 13:n=s+r.length;case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),o.e(e.t0);case 21:return e.prev=21,o.f(),e.finish(21);case 24:if(!(n<t.length)){e.next=27;break}return e.next=27,{match:!1,text:t.slice(n)};case 27:case"end":return e.stop()}}),e,null,[[4,18,21,24]])}));function p(e){return Object(n.jsx)("span",{children:Object(o.a)(u(e.value,e.query)).map((function(e){return Object(n.jsx)("span",{class:e.match?"match-highlight":"no-match-highlight",children:e.text})}))})}},uGGz:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return r("9u96")}])},vR5X:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr"),o=r("rePB"),a=r("m95x");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=l({light:"transparent",dark:"transparent"},t),o=n[e?"dark":"light"];return l(l({},r),{},{backgroundColor:o,borderColor:o})};function c(e){var t=["badge","rounded-0","align-bottom",e.dark?"light":"dark"];return e.outlined&&t.push("outlined"),Object(n.jsxs)("span",{class:t.join(" "),children:[Object(n.jsx)("img",{class:"mr-1",src:e.tech.img,alt:e.tech.title,style:s(!e.dark,e.tech.background,{height:20})}),e.link?Object(n.jsx)("a",{class:"m-1 align-middle",target:"blank",href:e.tech.url,children:Object(n.jsx)(a.a,{value:e.tech.title,query:e.filter})}):Object(n.jsx)("span",{class:"m-1 align-middle",children:Object(n.jsx)(a.a,{value:e.tech.title,query:e.filter})})]},e.tech.title)}c.defaultProps={filter:"",outlined:!1,dark:!1,link:!1}},x4pp:function(e,t){const r=[{overview:"I have worked on a lot of projects",projects:[{title:"StatPower",type:"professional",role:"author",link:"https://statpower.com",image:"statpower.jpg",description:"A powerful CRM for jewelers to bring in leads and manage customers. I built the project from scratch.\n",dark:!0,tech:["vuejs","nodejs","postgresql","svelte","twilio","typescript"]},{title:"Ringy",type:"professional",role:"contributor",link:"https://ringy.com",image:"isalescrm.jpg",description:"A cloud-based CRM for managing\nleads and inbound calls.\n",tech:["react","nodejs","sequelize","twilio","materialui","webpack"]},{title:"KLIK Control Center",type:"professional",role:"author",link:"https://klikboks.com/klik-control-center",image:"klikcontrolcenter.jpg",description:"The web portal to each KLIK Device that allows you to\nview presentations and manage without installing an app.\n",tech:["vuejs","bootstrap"]},{title:"GoApron",type:"professional",role:"contributor",link:"https://goapron.com",image:"goapron.jpg",description:"The San Diego startup that's revolutionizing commercial airplane parking.\n",dark:!0,tech:["ruby","rails","react","bootstrap","postgresql"]},{title:"KLIK Setup Wizard",type:"professional",role:"author",link:"https://klikboks.com/setup",image:"klikwizard.jpg",description:"The tool that discovers and sets up your\nKLIK Devices in under a minute.\n",tech:["electron","vuejs","pugjs","sass"]},{title:"KLIK Manager",type:"professional",role:"author",link:"https://klikboks.com/klik-manager",image:"klikmanager.jpg",description:"The administrator application that manages\nall KLIK Devices on your network.\n",tech:["electron","vuejs","nodejs","sass","typescript"]},{title:"CoffeeScript",type:"foss",role:"contributor",link:"https://coffeescript.org",image:"coffeescript.jpg",description:"CoffeeScript was the first major compile-to-JS language.\nI added _async/await_ syntax to the language\nto better support async programming.\n"},{title:"DefScript",type:"foss",role:"author",link:"https://github.com/defscript/defscript-core",image:"defscript.jpg",description:"An extensible compile-to-JS language that\nsupports macros and embedded languages through\na simple plugin API.\n",tech:["crane"],dark:!0},{title:"Crane Parser",type:"foss",role:"author",link:"https://github.com/gabrielratener/crane-parser",image:"craneparser.jpg",description:"A parser-generator with a clean, advanced syntax\nfor describing grammars, that generates simple,\nclean, push-based parsers as ES6 modules.\n"},{title:"Jolt.sh",type:"foss",role:"author",link:"https://github.com/GabrielRatener/jolt.sh",image:"jolt.jpg",description:"Write safe, interpolated bash scripts directly in your JavaScript!\n",dark:!0},{title:"Bizubee",type:"foss",role:"author",link:"https://bizubee.github.io",image:"bizubee.jpg",description:"The most intense programming language on Earth!\n"},{title:"This Website",type:"professional",role:"author",link:"https://gabrielratener.github.io",image:"gabrielratener.jpg",description:"My very own website, written by me!\n",tech:["nextjs","react","sass"],dark:!0},{title:"Social Rugrats",type:"professional",role:"contributor",link:"https://www.linkedin.com/company/social-rugrats",image:"socialrugrats.jpg",description:"The online platform for finding and\nhosting playdates and kids events.\n",tech:["angular","postgresql","bootstrap","flask","python"]},{title:"Michael Green",type:"professional",role:"author",link:"https://web.archive.org/web/20180827005448/https://michaelgreenusa.com/",image:"michaelgreen.jpg",description:"An online store for designer hand-bags.\n",tech:["shopify","sass"]}]}];e.exports=r.length<=1?r[0]:r}},[["uGGz",0,1,3,2,4,5,6]]]);