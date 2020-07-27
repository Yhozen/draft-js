/*! For license information please see b852ecf3.22c40170.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(181),n(180)),c={id:"api-reference-editor-change-type",title:"EditorChangeType"},i={id:"api-reference-editor-change-type",title:"EditorChangeType",description:"EditorChangeType",source:"@site/../docs/APIReference-EditorChangeType.md",permalink:"/docs/api-reference-editor-change-type",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-EditorChangeType.md",lastUpdatedBy:"Shalabh Vyas",lastUpdatedAt:1586184841,sidebar:"docs",previous:{title:"Editor Component",permalink:"/docs/api-reference-editor"},next:{title:"EditorState",permalink:"/docs/api-reference-editor-state"}},l=[{value:"Values",id:"values",children:[{value:"<code>adjust-depth</code>",id:"adjust-depth",children:[]},{value:"<code>apply-entity</code>",id:"apply-entity",children:[]},{value:"<code>backspace-character</code>",id:"backspace-character",children:[]},{value:"<code>change-block-data</code>",id:"change-block-data",children:[]},{value:"<code>change-block-type</code>",id:"change-block-type",children:[]},{value:"<code>change-inline-style</code>",id:"change-inline-style",children:[]},{value:"<code>move-block</code>",id:"move-block",children:[]},{value:"<code>delete-character</code>",id:"delete-character",children:[]},{value:"<code>insert-characters</code>",id:"insert-characters",children:[]},{value:"<code>insert-fragment</code>",id:"insert-fragment",children:[]},{value:"<code>redo</code>",id:"redo",children:[]},{value:"<code>remove-range</code>",id:"remove-range",children:[]},{value:"<code>spellcheck-change</code>",id:"spellcheck-change",children:[]},{value:"<code>split-block</code>",id:"split-block",children:[]},{value:"<code>undo</code>",id:"undo",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/EditorChangeType.js"}),"EditorChangeType"),"\nis an enum that lists the possible set of change operations that can be handled\nthe Draft model. It is represented as a Flow type, as a union of strings."),Object(a.b)("p",null,"It is passed as a parameter to ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.push"),", and denotes the type of\nchange operation that is being performed by transitioning to the new\n",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),"."),Object(a.b)("p",null,"Behind the scenes, this value is used to determine appropriate undo/redo\nhandling, spellcheck behavior, and more. Therefore, while it is possible to\nprovide an arbitrary string value as the ",Object(a.b)("inlineCode",{parentName:"p"},"changeType")," parameter here, you should\navoid doing so."),Object(a.b)("p",null,"We highly recommend that you install ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://flowtype.org"}),"Flow")," to perform\nstatic typechecking on your project. Flow will enforce the use of an appropriate\n",Object(a.b)("inlineCode",{parentName:"p"},"EditorChangeType")," value."),Object(a.b)("h2",{id:"values"},"Values"),Object(a.b)("h3",{id:"adjust-depth"},Object(a.b)("inlineCode",{parentName:"h3"},"adjust-depth")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"depth")," value of one or more ",Object(a.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(a.b)("h3",{id:"apply-entity"},Object(a.b)("inlineCode",{parentName:"h3"},"apply-entity")),Object(a.b)("p",null,"An entity is being applied (or removed via ",Object(a.b)("inlineCode",{parentName:"p"},"null"),") to one or more characters."),Object(a.b)("h3",{id:"backspace-character"},Object(a.b)("inlineCode",{parentName:"h3"},"backspace-character")),Object(a.b)("p",null,"A single character is being backward-removed."),Object(a.b)("h3",{id:"change-block-data"},Object(a.b)("inlineCode",{parentName:"h3"},"change-block-data")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"data")," value of one or more ",Object(a.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(a.b)("h3",{id:"change-block-type"},Object(a.b)("inlineCode",{parentName:"h3"},"change-block-type")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"type")," value of one or more ",Object(a.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(a.b)("h3",{id:"change-inline-style"},Object(a.b)("inlineCode",{parentName:"h3"},"change-inline-style")),Object(a.b)("p",null,"An inline style is being applied or removed for one or more characters."),Object(a.b)("h3",{id:"move-block"},Object(a.b)("inlineCode",{parentName:"h3"},"move-block")),Object(a.b)("p",null,"A block is being moved within the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"}),"BlockMap"),"."),Object(a.b)("h3",{id:"delete-character"},Object(a.b)("inlineCode",{parentName:"h3"},"delete-character")),Object(a.b)("p",null,"A single character is being forward-removed."),Object(a.b)("h3",{id:"insert-characters"},Object(a.b)("inlineCode",{parentName:"h3"},"insert-characters")),Object(a.b)("p",null,"One or more characters is being inserted at a selection state."),Object(a.b)("h3",{id:"insert-fragment"},Object(a.b)("inlineCode",{parentName:"h3"},"insert-fragment")),Object(a.b)("p",null,'A "fragment" of content (i.e. a\n',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"}),"BlockMap"),")\nis being inserted at a selection state."),Object(a.b)("h3",{id:"redo"},Object(a.b)("inlineCode",{parentName:"h3"},"redo")),Object(a.b)("p",null,"A redo operation is being performed. Since redo behavior is handled by the\nDraft core, it is unlikely that you will need to use this explicitly."),Object(a.b)("h3",{id:"remove-range"},Object(a.b)("inlineCode",{parentName:"h3"},"remove-range")),Object(a.b)("p",null,"Multiple characters or blocks are being removed."),Object(a.b)("h3",{id:"spellcheck-change"},Object(a.b)("inlineCode",{parentName:"h3"},"spellcheck-change")),Object(a.b)("p",null,"A spellcheck or autocorrect change is being performed. This is used to inform\nthe core editor whether to try to allow native undo behavior."),Object(a.b)("h3",{id:"split-block"},Object(a.b)("inlineCode",{parentName:"h3"},"split-block")),Object(a.b)("p",null,"A single ",Object(a.b)("inlineCode",{parentName:"p"},"ContentBlock")," is being split into two, for instance when the user\npresses return."),Object(a.b)("h3",{id:"undo"},Object(a.b)("inlineCode",{parentName:"h3"},"undo")),Object(a.b)("p",null,"An undo operation is being performed. Since undo behavior is handled by the\nDraft core, it is unlikely that you will need to use this explicitly."))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,o,a,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,c,i],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function k(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function C(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=k.prototype;var S=w.prototype=new C;S.constructor=w,r(S,k.prototype),S.isPureReactComponent=!0;var E={current:null},N={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,A=[];function R(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+I(i=t[u],u);l+=e(i,p,r,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=m&&t[m]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,p=n+I(i,u++),r,o);else"object"===i&&v("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace($,"$&/")+"/"),D(e,U,t=R(t,a,r,o)),M(t)}function V(){var e=E.current;return null===e&&v("307"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,B,t=R(null,null,t,n)),M(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return T(e)||v("143"),e}},createRef:function(){return{current:null}},Component:k,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,n){return V().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,n){return V().useReducer(e,t,n)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:i,StrictMode:l,Suspense:b,createElement:x,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,c=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=N.current),void 0!==t.key&&(i=""+t.key);var p=void 0;for(o in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)P.call(t,o)&&!_.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){p=Array(o);for(var s=0;s<o;s++)p[s]=arguments[s+2];c.children=p}return{$$typeof:a,type:e.type,key:i,ref:l,props:c,_owner:u}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.8.4",unstable_ConcurrentMode:d,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:E,ReactCurrentOwner:N,assign:r}},L={default:q},X=L&&q||L;e.exports=X.default||X},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(l[p]=n[p]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}}}]);