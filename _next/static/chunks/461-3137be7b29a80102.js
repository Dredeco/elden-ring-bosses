(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(7052);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5529:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3043:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let r=n(6277);function o(e){return(0,r.pathHasPrefix)(e,"/elden-ring-bosses")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(6927),o=n(5909),i=o._(n(6006)),a=r._(n(9209)),l=n(8706),u=n(922),c=n(3278);n(4745);let s=n(7052);function f(e){return"/"===e[0]?e.slice(1):e}let d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/elden-ring-bosses/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},p=new Set,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",h=new Map([["default",function(e){let{config:t,src:n,width:r,quality:o}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:(0,s.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}],["imgix",function(e){let{config:t,src:n,width:r,quality:o}=e,i=new URL(""+t.path+f(n)),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){let{config:t,src:n,width:r,quality:o}=e,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return""+t.path+i+f(n)}],["akamai",function(e){let{config:t,src:n,width:r}=e;return""+t.path+f(n)+"?imwidth="+r}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function g(e){return void 0!==e.default}function y(e){let{config:t,src:n,unoptimized:r,layout:o,width:i,quality:a,sizes:l,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:s}=function(e,t,n,r){let{deviceSizes:o,allSizes:i}=e;if(r&&("fill"===n||"responsive"===n)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t||"fill"===n||"responsive"===n)return{widths:o,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o,l),f=c.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:c.map((e,r)=>u({config:t,src:n,quality:a,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:u({config:t,src:n,quality:a,width:c[f]})}}function b(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function v(e){var t;let n=(null==(t=e.config)?void 0:t.loader)||"default",r=h.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+l.VALID_LOADERS.join(", ")+". Received: "+n)}function _(e,t,n,r,o,i){if(!e||e.src===m||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode&&(p.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){let{naturalWidth:t,naturalHeight:n}=e;o.current({naturalWidth:t,naturalHeight:n})}})}let P=e=>{let{imgAttributes:t,heightInt:n,widthInt:r,qualityInt:o,layout:a,className:l,imgStyle:u,blurStyle:c,isLazy:s,placeholder:f,loading:d,srcString:p,config:m,unoptimized:h,loader:g,onLoadingCompleteRef:b,setBlurComplete:v,setIntersection:P,onLoad:j,onError:O,isVisible:w,noscriptSizes:x,...S}=e;return d=s?"lazy":d,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",{...S,...t,decoding:"async","data-nimg":a,className:l,style:{...u,...c},ref:(0,i.useCallback)(e=>{P(e),(null==e?void 0:e.complete)&&_(e,p,a,f,b,v)},[P,p,a,f,b,v]),onLoad:e=>{let t=e.currentTarget;_(t,p,a,f,b,v),j&&j(e)},onError:e=>{"blur"===f&&v(!0),O&&O(e)}}),(s||"blur"===f)&&i.default.createElement("noscript",null,i.default.createElement("img",{...S,loading:d,decoding:"async","data-nimg":a,style:u,className:l,...y({config:m,src:p,unoptimized:h,layout:a,width:r,quality:o,sizes:x,loader:g})})))};function j(e){var t;let n,{src:r,sizes:o,unoptimized:s=!1,priority:f=!1,loading:h,lazyRoot:_=null,lazyBoundary:j,className:O,quality:w,width:x,height:S,style:E,objectFit:A,objectPosition:M,onLoadingComplete:k,placeholder:R="empty",blurDataURL:C,...I}=e,z=(0,i.useContext)(c.ImageConfigContext),L=(0,i.useMemo)(()=>{let e=d||z||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[z]),U=o?"responsive":"intrinsic";"layout"in I&&(I.layout&&(U=I.layout),delete I.layout);let T=v;if("loader"in I){if(I.loader){let e=I.loader;T=t=>{let{config:n,...r}=t;return e(r)}}delete I.loader}let N="";if("object"==typeof(t=r)&&(g(t)||void 0!==t.src)){let e=g(r)?r.default:r;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(C=C||e.blurDataURL,N=e.src,(!U||"fill"!==U)&&(S=S||e.height,x=x||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let W=!f&&("lazy"===h||void 0===h);((r="string"==typeof r?r:N).startsWith("data:")||r.startsWith("blob:"))&&(s=!0,W=!1),p.has(r)&&(W=!1),L.unoptimized&&(s=!0);let[D,q]=(0,i.useState)(!1),[B,F,H]=(0,u.useIntersection)({rootRef:_,rootMargin:j||"200px",disabled:!W}),$=!W||F,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},V={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G=!1,Q=b(x),Z=b(S),J=b(w),X=Object.assign({},E,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:M}),Y="blur"!==R||D?{}:{backgroundSize:A||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+C+'")'};if("fill"===U)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if(void 0!==Q&&void 0!==Z){let e=Z/Q,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===U?(K.display="block",K.position="relative",G=!0,V.paddingTop=t):"intrinsic"===U?(K.display="inline-block",K.position="relative",K.maxWidth="100%",G=!0,V.maxWidth="100%",n="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+Q+"%27%20height=%27"+Z+"%27/%3e"):"fixed"===U&&(K.display="inline-block",K.position="relative",K.width=Q,K.height=Z)}let ee={src:m,srcSet:void 0,sizes:void 0};$&&(ee=y({config:L,src:r,unoptimized:s,layout:U,width:Q,quality:J,sizes:o,loader:T}));let et=r,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:I.crossOrigin,referrerPolicy:I.referrerPolicy},er=i.default.useLayoutEffect,eo=(0,i.useRef)(k),ei=(0,i.useRef)(r);(0,i.useEffect)(()=>{eo.current=k},[k]),er(()=>{ei.current!==r&&(H(),ei.current=r)},[H,r]);let ea={isLazy:W,imgAttributes:ee,heightInt:Z,widthInt:Q,qualityInt:J,layout:U,className:O,imgStyle:X,blurStyle:Y,loading:h,config:L,unoptimized:s,placeholder:R,loader:T,srcString:et,onLoadingCompleteRef:eo,setBlurComplete:q,setIntersection:B,isVisible:$,noscriptSizes:o,...I};return i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:K},G?i.default.createElement("span",{style:V},n?i.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:n}):null):null,i.default.createElement(P,ea)),f?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,...en})):null)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(6927),o=r._(n(6006)),i=n(2888),a=n(6822),l=n(1448),u=n(2287),c=n(6961),s=n(409),f=n(6406),d=n(922),p=n(5529),m=n(2035),h=n(2003),g=new Set;function y(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(g.has(i))return;g.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:l,as:g,children:v,prefetch:_=null,passHref:P,replace:j,shallow:O,scroll:w,locale:x,onClick:S,onMouseEnter:E,onTouchStart:A,legacyBehavior:M=!1,...k}=e;n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let R=!1!==_,C=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,I=o.default.useContext(s.RouterContext),z=o.default.useContext(f.AppRouterContext),L=null!=I?I:z,U=!I,{href:T,as:N}=o.default.useMemo(()=>{if(!I){let e=b(l);return{href:e,as:g?b(g):e}}let[e,t]=(0,i.resolveHref)(I,l,!0);return{href:e,as:g?(0,i.resolveHref)(I,g):t||e}},[I,l,g]),W=o.default.useRef(T),D=o.default.useRef(N);M&&(r=o.default.Children.only(n));let q=M?r&&"object"==typeof r&&r.ref:t,[B,F,H]=(0,d.useIntersection)({rootMargin:"200px"}),$=o.default.useCallback(e=>{(D.current!==N||W.current!==T)&&(H(),D.current=N,W.current=T),B(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[N,q,T,H,B]);o.default.useEffect(()=>{L&&F&&R&&y(L,T,N,{locale:x},{kind:C},U)},[N,T,F,x,R,null==I?void 0:I.locale,L,U,C]);let K={ref:$,onClick(e){M||"function"!=typeof S||S(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,i,l,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:c,scroll:u}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?o.default.startTransition(m):m()}(e,L,T,N,j,O,w,x,U,R)},onMouseEnter(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(R||!U)&&y(L,T,N,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:C},U)},onTouchStart(e){M||"function"!=typeof A||A(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(R||!U)&&y(L,T,N,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:C},U)}};if((0,u.isAbsoluteUrl)(N))K.href=N;else if(!M||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==x?x:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);K.href=t||(0,m.addBasePath)((0,c.addLocale)(N,e,null==I?void 0:I.defaultLocale))}return M?o.default.cloneElement(r,K):o.default.createElement("a",{...k,...K},n)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(6006),o=n(1722),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!i,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(c||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]);let m=(0,r.useCallback)(()=>{f(!1)},[]);return[p,s,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let r=n(6927),o=r._(n(6006)),i=o.default.createContext({})},7060:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},1371:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},9209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return m}});let r=n(6927),o=n(5909),i=o._(n(6006)),a=r._(n(9797)),l=n(1909),u=n(5415),c=n(7060);function s(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(4745);let d=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(s(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,i.useContext)(l.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(6927),o=r._(n(6006)),i=n(8706),a=o.default.createContext(i.imageConfigDefault)},8706:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let r=n(6927),o=r._(n(6006)),i=o.default.createContext(null)},1448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return l},formatWithValidation:function(){return u}});let r=n(5909),o=r._(n(2786)),i=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,r=e.protocol||"",a=e.pathname||"",l=e.hash||"",u=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let s=e.search||u&&"?"+u||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),s&&"?"!==s[0]&&(s="?"+s),""+r+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+l}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},781:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(3694),o=n(3980);function i(e,t,n){let i="",a=(0,o.getRouteRegex)(e),l=a.groups,u=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;let c=Object.keys(l);return c.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:c,result:i}}},1218:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});let n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},6822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(2287),o=n(3043);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},736:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},6277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let r=n(9854);function o(e,t){if("string"!=typeof e)return!1;let{pathname:n}=(0,r.parsePath)(e);return n===t||n.startsWith(t+"/")}},2786:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},2888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(2786),o=n(1448),i=n(736),a=n(2287),l=n(7052),u=n(6822),c=n(1218),s=n(781);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),m=p?d.slice(p[0].length):d,h=m.split("?");if((h[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(m);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,s.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,l)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[d]:d}}},3694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(2287);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),a}}},3980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return s},getNamedMiddlewareRegex:function(){return f}});let r=n(1371),o=n(694),i="nxtP";function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),n={},i=1;return{parameterizedRoute:t.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,r.escapeStringRegexp)(e);{let{key:t,optional:r,repeat:o}=a(e.slice(1,-1));return n[t]={pos:i++,repeat:o,optional:r},o?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function u(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function c(e,t){let n,l;let u=(0,o.removeTrailingSlash)(e).slice(1).split("/"),c=(n=97,l=1,()=>{let e="";for(let t=0;t<l;t++)e+=String.fromCharCode(n),++n>122&&(l++,n=97);return e}),s={};return{namedParameterizedRoute:u.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,r.escapeStringRegexp)(e);{let{key:n,optional:r,repeat:o}=a(e.slice(1,-1)),l=n.replace(/\W/g,"");t&&(l=""+i+l);let u=!1;return(0===l.length||l.length>30)&&(u=!0),isNaN(parseInt(l.slice(0,1)))||(u=!0),u&&(l=c()),t?s[l]=""+i+n:s[l]=""+n,o?r?"(?:/(?<"+l+">.+?))?":"/(?<"+l+">.+?)":"/(?<"+l+">[^/]+?)"}}).join(""),routeKeys:s}}function s(e,t){let n=c(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function f(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},9797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(5909),o=r._(n(6006)),i=o.useLayoutEffect,a=o.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2287:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},getDisplayName:function(){return u},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return s},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function s(e){let t=e.split("?"),n=t[0];return n.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&c(n))return r;if(!r){let t='"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw Error(t)}return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}},4745:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},9590:function(e,t,n){e.exports=n(3758)},5846:function(e,t,n){e.exports=n(8920)},2805:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}}]);