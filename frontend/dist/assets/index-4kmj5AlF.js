function nw(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function iw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xy={exports:{}},Au={},$y={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),rw=Symbol.for("react.portal"),sw=Symbol.for("react.fragment"),aw=Symbol.for("react.strict_mode"),ow=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),dw=Symbol.for("react.suspense"),fw=Symbol.for("react.memo"),hw=Symbol.for("react.lazy"),Jg=Symbol.iterator;function pw(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,Ky={};function Pa(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||qy}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zy(){}Zy.prototype=Pa.prototype;function $p(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||qy}var qp=$p.prototype=new Zy;qp.constructor=$p;Yy(qp,Pa.prototype);qp.isPureReactComponent=!0;var Qg=Array.isArray,Jy=Object.prototype.hasOwnProperty,Yp={current:null},Qy={key:!0,ref:!0,__self:!0,__source:!0};function e_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Jy.call(e,i)&&!Qy.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Jo,type:t,key:s,ref:a,props:r,_owner:Yp.current}}function mw(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function gw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e0=/\/+/g;function id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gw(""+t.key):e.toString(36)}function rc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Jo:case rw:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+id(a,0):i,Qg(r)?(n="",t!=null&&(n=t.replace(e0,"$&/")+"/"),rc(r,e,n,"",function(c){return c})):r!=null&&(Kp(r)&&(r=mw(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(e0,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+id(s,o);a+=rc(s,e,n,l,r)}else if(l=pw(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+id(s,o++),a+=rc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function pl(t,e,n){if(t==null)return t;var i=[],r=0;return rc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},sc={transition:null},xw={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:sc,ReactCurrentOwner:Yp};function t_(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Pa;qe.Fragment=sw;qe.Profiler=ow;qe.PureComponent=$p;qe.StrictMode=aw;qe.Suspense=dw;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;qe.act=t_;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yy({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Jy.call(e,l)&&!Qy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Jo,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:cw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lw,_context:t},t.Consumer=t};qe.createElement=e_;qe.createFactory=function(t){var e=e_.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:uw,render:t}};qe.isValidElement=Kp;qe.lazy=function(t){return{$$typeof:hw,_payload:{_status:-1,_result:t},_init:vw}};qe.memo=function(t,e){return{$$typeof:fw,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=sc.transition;sc.transition={};try{t()}finally{sc.transition=e}};qe.unstable_act=t_;qe.useCallback=function(t,e){return vn.current.useCallback(t,e)};qe.useContext=function(t){return vn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return vn.current.useEffect(t,e)};qe.useId=function(){return vn.current.useId()};qe.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return vn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};qe.useRef=function(t){return vn.current.useRef(t)};qe.useState=function(t){return vn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return vn.current.useTransition()};qe.version="18.3.1";$y.exports=qe;var L=$y.exports;const n_=iw(L),yw=nw({__proto__:null,default:n_},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w=L,Sw=Symbol.for("react.element"),Mw=Symbol.for("react.fragment"),Ew=Object.prototype.hasOwnProperty,ww=_w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tw={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ew.call(e,i)&&!Tw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sw,type:t,key:s,ref:a,props:r,_owner:ww.current}}Au.Fragment=Mw;Au.jsx=i_;Au.jsxs=i_;Xy.exports=Au;var g=Xy.exports,Uf={},r_={exports:{}},kn={},s_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,D){var q=U.length;U.push(D);e:for(;0<q;){var ie=q-1>>>1,oe=U[ie];if(0<r(oe,D))U[ie]=D,U[q]=oe,q=ie;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var D=U[0],q=U.pop();if(q!==D){U[0]=q;e:for(var ie=0,oe=U.length,ze=oe>>>1;ie<ze;){var Ue=2*(ie+1)-1,Ge=U[Ue],Z=Ue+1,ne=U[Z];if(0>r(Ge,q))Z<oe&&0>r(ne,Ge)?(U[ie]=ne,U[Z]=q,ie=Z):(U[ie]=Ge,U[Ue]=q,ie=Ue);else if(Z<oe&&0>r(ne,q))U[ie]=ne,U[Z]=q,ie=Z;else break e}}return D}function r(U,D){var q=U.sortIndex-D.sortIndex;return q!==0?q:U.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,p=!1,v=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var D=n(c);D!==null;){if(D.callback===null)i(c);else if(D.startTime<=U)i(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function _(U){if(M=!1,S(U),!v)if(n(l)!==null)v=!0,K(T);else{var D=n(c);D!==null&&G(_,D.startTime-U)}}function T(U,D){v=!1,M&&(M=!1,h(y),y=-1),p=!0;var q=d;try{for(S(D),f=n(l);f!==null&&(!(f.expirationTime>D)||U&&!N());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var oe=ie(f.expirationTime<=D);D=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&i(l),S(D)}else i(l);f=n(l)}if(f!==null)var ze=!0;else{var Ue=n(c);Ue!==null&&G(_,Ue.startTime-D),ze=!1}return ze}finally{f=null,d=q,p=!1}}var w=!1,C=null,y=-1,b=5,R=-1;function N(){return!(t.unstable_now()-R<b)}function F(){if(C!==null){var U=t.unstable_now();R=U;var D=!0;try{D=C(!0,U)}finally{D?X():(w=!1,C=null)}}else w=!1}var X;if(typeof x=="function")X=function(){x(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,z=Y.port2;Y.port1.onmessage=F,X=function(){z.postMessage(null)}}else X=function(){m(F,0)};function K(U){C=U,w||(w=!0,X())}function G(U,D){y=m(function(){U(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,K(T))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var q=d;d=D;try{return U()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,D){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=d;d=U;try{return D()}finally{d=q}},t.unstable_scheduleCallback=function(U,D,q){var ie=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,U){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,U={id:u++,callback:D,priorityLevel:U,startTime:q,expirationTime:oe,sortIndex:-1},q>ie?(U.sortIndex=q,e(c,U),n(l)===null&&U===n(c)&&(M?(h(y),y=-1):M=!0,G(_,q-ie))):(U.sortIndex=oe,e(l,U),v||p||(v=!0,K(T))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var D=d;return function(){var q=d;d=D;try{return U.apply(this,arguments)}finally{d=q}}}})(a_);s_.exports=a_;var Aw=s_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=L,On=Aw;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o_=new Set,Ao={};function Es(t,e){va(t,e),va(t+"Capture",e)}function va(t,e){for(Ao[t]=e,t=0;t<e.length;t++)o_.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=Object.prototype.hasOwnProperty,bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t0={},n0={};function Rw(t){return Ff.call(n0,t)?!0:Ff.call(t0,t)?!1:bw.test(t)?n0[t]=!0:(t0[t]=!0,!1)}function Pw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nw(t,e,n,i){if(e===null||typeof e>"u"||Pw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function Jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zp,Jp);tn[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zp,Jp);tn[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zp,Jp);tn[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nw(e,n,r,i)&&(n=null),i||r===null?Rw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),$s=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),u_=Symbol.for("react.offscreen"),i0=Symbol.iterator;function Va(t){return t===null||typeof t!="object"?null:(t=i0&&t[i0]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,rd;function io(t){if(rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+t}var sd=!1;function ad(t,e){if(!t||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function Lw(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case $s:return"Portal";case Of:return"Profiler";case em:return"StrictMode";case kf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c_:return(t.displayName||"Context")+".Consumer";case l_:return(t._context.displayName||"Context")+".Provider";case tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nm:return e=t.displayName||null,e!==null?e:zf(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return zf(t(e))}catch{}}return null}function Dw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iw(t){var e=d_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=Iw(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=d_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function r0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h_(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function Hf(t,e){h_(t,e);var n=Fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function la(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ro(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function p_(t,e){var n=Fr(e.value),i=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function o0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,g_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uw=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){Uw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function x_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Fw=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(Fw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,ca=null,ua=null;function l0(t){if(t=tl(t)){if(typeof Yf!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Nu(e),Yf(t.stateNode,t.type,e))}}function y_(t){ca?ua?ua.push(t):ua=[t]:ca=t}function __(){if(ca){var t=ca,e=ua;if(ua=ca=null,l0(t),e)for(t=0;t<e.length;t++)l0(e[t])}}function S_(t,e){return t(e)}function M_(){}var od=!1;function E_(t,e,n){if(od)return t(e,n);od=!0;try{return S_(t,e,n)}finally{od=!1,(ca!==null||ua!==null)&&(M_(),__())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var i=Nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Kf=!1;if(Zi)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{Kf=!1}function Ow(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var po=!1,Dc=null,Ic=!1,Zf=null,kw={onError:function(t){po=!0,Dc=t}};function Bw(t,e,n,i,r,s,a,o,l){po=!1,Dc=null,Ow.apply(kw,arguments)}function zw(t,e,n,i,r,s,a,o,l){if(Bw.apply(this,arguments),po){if(po){var c=Dc;po=!1,Dc=null}else throw Error(ae(198));Ic||(Ic=!0,Zf=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c0(t){if(ws(t)!==t)throw Error(ae(188))}function Vw(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return c0(r),t;if(s===i)return c0(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function T_(t){return t=Vw(t),t!==null?A_(t):null}function A_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A_(t);if(e!==null)return e;t=t.sibling}return null}var C_=On.unstable_scheduleCallback,u0=On.unstable_cancelCallback,Hw=On.unstable_shouldYield,Gw=On.unstable_requestPaint,It=On.unstable_now,Ww=On.unstable_getCurrentPriorityLevel,rm=On.unstable_ImmediatePriority,b_=On.unstable_UserBlockingPriority,Uc=On.unstable_NormalPriority,jw=On.unstable_LowPriority,R_=On.unstable_IdlePriority,Cu=null,bi=null;function Xw(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Yw,$w=Math.log,qw=Math.LN2;function Yw(t){return t>>>=0,t===0?32:31-($w(t)/qw|0)|0}var xl=64,yl=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=so(o):(s&=a,s!==0&&(i=so(s)))}else a=n&~r,a!==0?i=so(a):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Kw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ci(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Kw(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P_(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function ld(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Jw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function N_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L_,am,D_,I_,U_,Qf=!1,_l=[],Cr=null,br=null,Rr=null,Ro=new Map,Po=new Map,yr=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d0(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&am(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function eT(t,e,n,i,r){switch(e){case"focusin":return Cr=Ga(Cr,t,e,n,i,r),!0;case"dragenter":return br=Ga(br,t,e,n,i,r),!0;case"mouseover":return Rr=Ga(Rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ro.set(s,Ga(Ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,Ga(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function F_(t){var e=ss(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=w_(n),e!==null){t.blockedOn=e,U_(t.priority,function(){D_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qf=i,n.target.dispatchEvent(i),qf=null}else return e=tl(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function f0(t,e,n){ac(t)&&n.delete(e)}function tT(){Qf=!1,Cr!==null&&ac(Cr)&&(Cr=null),br!==null&&ac(br)&&(br=null),Rr!==null&&ac(Rr)&&(Rr=null),Ro.forEach(f0),Po.forEach(f0)}function Wa(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,tT)))}function No(t){function e(r){return Wa(r,t)}if(0<_l.length){Wa(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&Wa(Cr,t),br!==null&&Wa(br,t),Rr!==null&&Wa(Rr,t),Ro.forEach(e),Po.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)F_(n),n.blockedOn===null&&yr.shift()}var da=ir.ReactCurrentBatchConfig,Oc=!0;function nT(t,e,n,i){var r=st,s=da.transition;da.transition=null;try{st=1,om(t,e,n,i)}finally{st=r,da.transition=s}}function iT(t,e,n,i){var r=st,s=da.transition;da.transition=null;try{st=4,om(t,e,n,i)}finally{st=r,da.transition=s}}function om(t,e,n,i){if(Oc){var r=eh(t,e,n,i);if(r===null)xd(t,e,i,kc,n),d0(t,i);else if(eT(r,t,e,n,i))i.stopPropagation();else if(d0(t,i),e&4&&-1<Qw.indexOf(t)){for(;r!==null;){var s=tl(r);if(s!==null&&L_(s),s=eh(t,e,n,i),s===null&&xd(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xd(t,e,i,null,n)}}var kc=null;function eh(t,e,n,i){if(kc=null,t=im(i),t=ss(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function O_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ww()){case rm:return 1;case b_:return 4;case Uc:case jw:return 16;case R_:return 536870912;default:return 16}default:return 16}}var Mr=null,lm=null,oc=null;function k_(){if(oc)return oc;var t,e=lm,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return oc=r.slice(t,1<i?1-i:void 0)}function lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function h0(){return!1}function Bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sl:h0,this.isPropagationStopped=h0,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cm=Bn(Na),el=wt({},Na,{view:0,detail:0}),rT=Bn(el),cd,ud,ja,bu=wt({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ja&&(ja&&t.type==="mousemove"?(cd=t.screenX-ja.screenX,ud=t.screenY-ja.screenY):ud=cd=0,ja=t),cd)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),p0=Bn(bu),sT=wt({},bu,{dataTransfer:0}),aT=Bn(sT),oT=wt({},el,{relatedTarget:0}),dd=Bn(oT),lT=wt({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),cT=Bn(lT),uT=wt({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dT=Bn(uT),fT=wt({},Na,{data:0}),m0=Bn(fT),hT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mT[t])?!!e[t]:!1}function um(){return gT}var vT=wt({},el,{key:function(t){if(t.key){var e=hT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xT=Bn(vT),yT=wt({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=Bn(yT),_T=wt({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),ST=Bn(_T),MT=wt({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),ET=Bn(MT),wT=wt({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TT=Bn(wT),AT=[9,13,27,32],dm=Zi&&"CompositionEvent"in window,mo=null;Zi&&"documentMode"in document&&(mo=document.documentMode);var CT=Zi&&"TextEvent"in window&&!mo,B_=Zi&&(!dm||mo&&8<mo&&11>=mo),v0=" ",x0=!1;function z_(t,e){switch(t){case"keyup":return AT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function bT(t,e){switch(t){case"compositionend":return V_(e);case"keypress":return e.which!==32?null:(x0=!0,v0);case"textInput":return t=e.data,t===v0&&x0?null:t;default:return null}}function RT(t,e){if(Ys)return t==="compositionend"||!dm&&z_(t,e)?(t=k_(),oc=lm=Mr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B_&&e.locale!=="ko"?null:e.data;default:return null}}var PT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PT[t.type]:e==="textarea"}function H_(t,e,n,i){y_(i),e=Bc(e,"onChange"),0<e.length&&(n=new cm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var go=null,Lo=null;function NT(t){Q_(t,0)}function Ru(t){var e=Js(t);if(f_(e))return t}function LT(t,e){if(t==="change")return e}var G_=!1;if(Zi){var fd;if(Zi){var hd="oninput"in document;if(!hd){var _0=document.createElement("div");_0.setAttribute("oninput","return;"),hd=typeof _0.oninput=="function"}fd=hd}else fd=!1;G_=fd&&(!document.documentMode||9<document.documentMode)}function S0(){go&&(go.detachEvent("onpropertychange",W_),Lo=go=null)}function W_(t){if(t.propertyName==="value"&&Ru(Lo)){var e=[];H_(e,Lo,t,im(t)),E_(NT,e)}}function DT(t,e,n){t==="focusin"?(S0(),go=e,Lo=n,go.attachEvent("onpropertychange",W_)):t==="focusout"&&S0()}function IT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(Lo)}function UT(t,e){if(t==="click")return Ru(e)}function FT(t,e){if(t==="input"||t==="change")return Ru(e)}function OT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:OT;function Do(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ff.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function M0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function E0(t,e){var n=M0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=M0(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X_(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kT(t){var e=X_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j_(n.ownerDocument.documentElement,n)){if(i!==null&&fm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=E0(n,s);var a=E0(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BT=Zi&&"documentMode"in document&&11>=document.documentMode,Ks=null,th=null,vo=null,nh=!1;function w0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Ks==null||Ks!==Lc(i)||(i=Ks,"selectionStart"in i&&fm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&Do(vo,i)||(vo=i,i=Bc(th,"onSelect"),0<i.length&&(e=new cm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ks)))}function Ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},pd={},$_={};Zi&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Pu(t){if(pd[t])return pd[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $_)return pd[t]=e[n];return t}var q_=Pu("animationend"),Y_=Pu("animationiteration"),K_=Pu("animationstart"),Z_=Pu("transitionend"),J_=new Map,T0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){J_.set(t,e),Es(e,[t])}for(var md=0;md<T0.length;md++){var gd=T0[md],zT=gd.toLowerCase(),VT=gd[0].toUpperCase()+gd.slice(1);Hr(zT,"on"+VT)}Hr(q_,"onAnimationEnd");Hr(Y_,"onAnimationIteration");Hr(K_,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(Z_,"onTransitionEnd");va("onMouseEnter",["mouseout","mouseover"]);va("onMouseLeave",["mouseout","mouseover"]);va("onPointerEnter",["pointerout","pointerover"]);va("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function A0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zw(i,e,void 0,t),t.currentTarget=null}function Q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;A0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;A0(r,o,c),s=l}}}if(Ic)throw t=Zf,Ic=!1,Zf=null,t}function mt(t,e){var n=e[oh];n===void 0&&(n=e[oh]=new Set);var i=t+"__bubble";n.has(i)||(eS(e,t,2,!1),n.add(i))}function vd(t,e,n){var i=0;e&&(i|=4),eS(n,t,i,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[El]){t[El]=!0,o_.forEach(function(n){n!=="selectionchange"&&(HT.has(n)||vd(n,!1,t),vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,vd("selectionchange",!1,e))}}function eS(t,e,n,i){switch(O_(e)){case 1:var r=nT;break;case 4:r=iT;break;default:r=om}n=r.bind(null,e,n,t),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ss(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}E_(function(){var c=s,u=im(n),f=[];e:{var d=J_.get(t);if(d!==void 0){var p=cm,v=t;switch(t){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":p=xT;break;case"focusin":v="focus",p=dd;break;case"focusout":v="blur",p=dd;break;case"beforeblur":case"afterblur":p=dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ST;break;case q_:case Y_:case K_:p=cT;break;case Z_:p=ET;break;case"scroll":p=rT;break;case"wheel":p=TT;break;case"copy":case"cut":case"paste":p=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=g0}var M=(e&4)!==0,m=!M&&t==="scroll",h=M?d!==null?d+"Capture":null:d;M=[];for(var x=c,S;x!==null;){S=x;var _=S.stateNode;if(S.tag===5&&_!==null&&(S=_,h!==null&&(_=bo(x,h),_!=null&&M.push(Uo(x,_,S)))),m)break;x=x.return}0<M.length&&(d=new p(d,v,null,n,u),f.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==qf&&(v=n.relatedTarget||n.fromElement)&&(ss(v)||v[Ji]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ss(v):null,v!==null&&(m=ws(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(M=p0,_="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=g0,_="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:Js(p),S=v==null?d:Js(v),d=new M(_,x+"leave",p,n,u),d.target=m,d.relatedTarget=S,_=null,ss(u)===c&&(M=new M(h,x+"enter",v,n,u),M.target=S,M.relatedTarget=m,_=M),m=_,p&&v)t:{for(M=p,h=v,x=0,S=M;S;S=Ns(S))x++;for(S=0,_=h;_;_=Ns(_))S++;for(;0<x-S;)M=Ns(M),x--;for(;0<S-x;)h=Ns(h),S--;for(;x--;){if(M===h||h!==null&&M===h.alternate)break t;M=Ns(M),h=Ns(h)}M=null}else M=null;p!==null&&C0(f,d,p,M,!1),v!==null&&m!==null&&C0(f,m,v,M,!0)}}e:{if(d=c?Js(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=LT;else if(y0(d))if(G_)T=FT;else{T=IT;var w=DT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=UT);if(T&&(T=T(t,c))){H_(f,T,n,u);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Gf(d,"number",d.value)}switch(w=c?Js(c):window,t){case"focusin":(y0(w)||w.contentEditable==="true")&&(Ks=w,th=c,vo=null);break;case"focusout":vo=th=Ks=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,w0(f,n,u);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":w0(f,n,u)}var C;if(dm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ys?z_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(B_&&n.locale!=="ko"&&(Ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ys&&(C=k_()):(Mr=u,lm="value"in Mr?Mr.value:Mr.textContent,Ys=!0)),w=Bc(c,y),0<w.length&&(y=new m0(y,t,null,n,u),f.push({event:y,listeners:w}),C?y.data=C:(C=V_(n),C!==null&&(y.data=C)))),(C=CT?bT(t,n):RT(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new m0("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}Q_(f,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bo(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=bo(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C0(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=bo(n,s),l!=null&&a.unshift(Uo(n,l,o))):r||(l=bo(n,s),l!=null&&a.push(Uo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var GT=/\r\n?/g,WT=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(GT,`
`).replace(WT,"")}function wl(t,e,n){if(e=b0(e),b0(t)!==e&&n)throw Error(ae(425))}function zc(){}var ih=null,rh=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,jT=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,XT=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch($T)}:ah;function $T(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),No(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);No(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var La=Math.random().toString(36).slice(2),Ei="__reactFiber$"+La,Fo="__reactProps$"+La,Ji="__reactContainer$"+La,oh="__reactEvents$"+La,qT="__reactListeners$"+La,YT="__reactHandles$"+La;function ss(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ji]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P0(t);t!==null;){if(n=t[Ei])return n;t=P0(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[Ei]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Nu(t){return t[Fo]||null}var lh=[],Qs=-1;function Gr(t){return{current:t}}function gt(t){0>Qs||(t.current=lh[Qs],lh[Qs]=null,Qs--)}function ht(t,e){Qs++,lh[Qs]=t.current,t.current=e}var Or={},un=Gr(Or),En=Gr(!1),gs=Or;function xa(t,e){var n=t.type.contextTypes;if(!n)return Or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Vc(){gt(En),gt(un)}function N0(t,e,n){if(un.current!==Or)throw Error(ae(168));ht(un,e),ht(En,n)}function tS(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Dw(t)||"Unknown",r));return wt({},n,i)}function Hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,gs=un.current,ht(un,t),ht(En,En.current),!0}function L0(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=tS(t,e,gs),i.__reactInternalMemoizedMergedChildContext=t,gt(En),gt(un),ht(un,t)):gt(En),ht(En,n)}var Wi=null,Lu=!1,_d=!1;function nS(t){Wi===null?Wi=[t]:Wi.push(t)}function KT(t){Lu=!0,nS(t)}function Wr(){if(!_d&&Wi!==null){_d=!0;var t=0,e=st;try{var n=Wi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,Lu=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),C_(rm,Wr),r}finally{st=e,_d=!1}}return null}var ea=[],ta=0,Gc=null,Wc=0,Gn=[],Wn=0,vs=null,ji=1,Xi="";function Qr(t,e){ea[ta++]=Wc,ea[ta++]=Gc,Gc=t,Wc=e}function iS(t,e,n){Gn[Wn++]=ji,Gn[Wn++]=Xi,Gn[Wn++]=vs,vs=t;var i=ji;t=Xi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ji=1<<32-ci(e)+r|n<<r|i,Xi=s+t}else ji=1<<s|n<<r|i,Xi=t}function hm(t){t.return!==null&&(Qr(t,1),iS(t,1,0))}function pm(t){for(;t===Gc;)Gc=ea[--ta],ea[ta]=null,Wc=ea[--ta],ea[ta]=null;for(;t===vs;)vs=Gn[--Wn],Gn[Wn]=null,Xi=Gn[--Wn],Gn[Wn]=null,ji=Gn[--Wn],Gn[Wn]=null}var Un=null,In=null,vt=!1,ai=null;function rS(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function D0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,In=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vs!==null?{id:ji,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,In=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(vt){var e=In;if(e){var n=e;if(!D0(t,e)){if(ch(t))throw Error(ae(418));e=Pr(n.nextSibling);var i=Un;e&&D0(t,e)?rS(i,n):(t.flags=t.flags&-4097|2,vt=!1,Un=t)}}else{if(ch(t))throw Error(ae(418));t.flags=t.flags&-4097|2,vt=!1,Un=t}}}function I0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Tl(t){if(t!==Un)return!1;if(!vt)return I0(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=In)){if(ch(t))throw sS(),Error(ae(418));for(;e;)rS(t,e),e=Pr(e.nextSibling)}if(I0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Un?Pr(t.stateNode.nextSibling):null;return!0}function sS(){for(var t=In;t;)t=Pr(t.nextSibling)}function ya(){In=Un=null,vt=!1}function mm(t){ai===null?ai=[t]:ai.push(t)}var ZT=ir.ReactCurrentBatchConfig;function Xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U0(t){var e=t._init;return e(t._payload)}function aS(t){function e(h,x){if(t){var S=h.deletions;S===null?(h.deletions=[x],h.flags|=16):S.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Ir(h,x),h.index=0,h.sibling=null,h}function s(h,x,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<x?(h.flags|=2,x):S):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,x,S,_){return x===null||x.tag!==6?(x=Cd(S,h.mode,_),x.return=h,x):(x=r(x,S),x.return=h,x)}function l(h,x,S,_){var T=S.type;return T===qs?u(h,x,S.props.children,_,S.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&U0(T)===x.type)?(_=r(x,S.props),_.ref=Xa(h,x,S),_.return=h,_):(_=mc(S.type,S.key,S.props,null,h.mode,_),_.ref=Xa(h,x,S),_.return=h,_)}function c(h,x,S,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=bd(S,h.mode,_),x.return=h,x):(x=r(x,S.children||[]),x.return=h,x)}function u(h,x,S,_,T){return x===null||x.tag!==7?(x=hs(S,h.mode,_,T),x.return=h,x):(x=r(x,S),x.return=h,x)}function f(h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cd(""+x,h.mode,S),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:return S=mc(x.type,x.key,x.props,null,h.mode,S),S.ref=Xa(h,null,x),S.return=h,S;case $s:return x=bd(x,h.mode,S),x.return=h,x;case vr:var _=x._init;return f(h,_(x._payload),S)}if(ro(x)||Va(x))return x=hs(x,h.mode,S,null),x.return=h,x;Al(h,x)}return null}function d(h,x,S,_){var T=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(h,x,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ml:return S.key===T?l(h,x,S,_):null;case $s:return S.key===T?c(h,x,S,_):null;case vr:return T=S._init,d(h,x,T(S._payload),_)}if(ro(S)||Va(S))return T!==null?null:u(h,x,S,_,null);Al(h,S)}return null}function p(h,x,S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(S)||null,o(x,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return h=h.get(_.key===null?S:_.key)||null,l(x,h,_,T);case $s:return h=h.get(_.key===null?S:_.key)||null,c(x,h,_,T);case vr:var w=_._init;return p(h,x,S,w(_._payload),T)}if(ro(_)||Va(_))return h=h.get(S)||null,u(x,h,_,T,null);Al(x,_)}return null}function v(h,x,S,_){for(var T=null,w=null,C=x,y=x=0,b=null;C!==null&&y<S.length;y++){C.index>y?(b=C,C=null):b=C.sibling;var R=d(h,C,S[y],_);if(R===null){C===null&&(C=b);break}t&&C&&R.alternate===null&&e(h,C),x=s(R,x,y),w===null?T=R:w.sibling=R,w=R,C=b}if(y===S.length)return n(h,C),vt&&Qr(h,y),T;if(C===null){for(;y<S.length;y++)C=f(h,S[y],_),C!==null&&(x=s(C,x,y),w===null?T=C:w.sibling=C,w=C);return vt&&Qr(h,y),T}for(C=i(h,C);y<S.length;y++)b=p(C,h,y,S[y],_),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?y:b.key),x=s(b,x,y),w===null?T=b:w.sibling=b,w=b);return t&&C.forEach(function(N){return e(h,N)}),vt&&Qr(h,y),T}function M(h,x,S,_){var T=Va(S);if(typeof T!="function")throw Error(ae(150));if(S=T.call(S),S==null)throw Error(ae(151));for(var w=T=null,C=x,y=x=0,b=null,R=S.next();C!==null&&!R.done;y++,R=S.next()){C.index>y?(b=C,C=null):b=C.sibling;var N=d(h,C,R.value,_);if(N===null){C===null&&(C=b);break}t&&C&&N.alternate===null&&e(h,C),x=s(N,x,y),w===null?T=N:w.sibling=N,w=N,C=b}if(R.done)return n(h,C),vt&&Qr(h,y),T;if(C===null){for(;!R.done;y++,R=S.next())R=f(h,R.value,_),R!==null&&(x=s(R,x,y),w===null?T=R:w.sibling=R,w=R);return vt&&Qr(h,y),T}for(C=i(h,C);!R.done;y++,R=S.next())R=p(C,h,y,R.value,_),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?y:R.key),x=s(R,x,y),w===null?T=R:w.sibling=R,w=R);return t&&C.forEach(function(F){return e(h,F)}),vt&&Qr(h,y),T}function m(h,x,S,_){if(typeof S=="object"&&S!==null&&S.type===qs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ml:e:{for(var T=S.key,w=x;w!==null;){if(w.key===T){if(T=S.type,T===qs){if(w.tag===7){n(h,w.sibling),x=r(w,S.props.children),x.return=h,h=x;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&U0(T)===w.type){n(h,w.sibling),x=r(w,S.props),x.ref=Xa(h,w,S),x.return=h,h=x;break e}n(h,w);break}else e(h,w);w=w.sibling}S.type===qs?(x=hs(S.props.children,h.mode,_,S.key),x.return=h,h=x):(_=mc(S.type,S.key,S.props,null,h.mode,_),_.ref=Xa(h,x,S),_.return=h,h=_)}return a(h);case $s:e:{for(w=S.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(h,x.sibling),x=r(x,S.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=bd(S,h.mode,_),x.return=h,h=x}return a(h);case vr:return w=S._init,m(h,x,w(S._payload),_)}if(ro(S))return v(h,x,S,_);if(Va(S))return M(h,x,S,_);Al(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,S),x.return=h,h=x):(n(h,x),x=Cd(S,h.mode,_),x.return=h,h=x),a(h)):n(h,x)}return m}var _a=aS(!0),oS=aS(!1),jc=Gr(null),Xc=null,na=null,gm=null;function vm(){gm=na=Xc=null}function xm(t){var e=jc.current;gt(jc),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fa(t,e){Xc=t,gm=na=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(gm!==t)if(t={context:t,memoizedValue:e,next:null},na===null){if(Xc===null)throw Error(ae(308));na=t,Xc.dependencies={lanes:0,firstContext:t}}else na=na.next=t;return e}var as=null;function ym(t){as===null?as=[t]:as.push(t)}function lS(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ym(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,ym(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sm(t,n)}}function F0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;xr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(d=e,p=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=wt({},f,d);break e;case 2:xr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=a,t.lanes=a,t.memoizedState=f}}function O0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var nl={},Ri=Gr(nl),Oo=Gr(nl),ko=Gr(nl);function os(t){if(t===nl)throw Error(ae(174));return t}function Sm(t,e){switch(ht(ko,e),ht(Oo,t),ht(Ri,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}gt(Ri),ht(Ri,e)}function Sa(){gt(Ri),gt(Oo),gt(ko)}function uS(t){os(ko.current);var e=os(Ri.current),n=jf(e,t.type);e!==n&&(ht(Oo,t),ht(Ri,n))}function Mm(t){Oo.current===t&&(gt(Ri),gt(Oo))}var St=Gr(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sd=[];function Em(){for(var t=0;t<Sd.length;t++)Sd[t]._workInProgressVersionPrimary=null;Sd.length=0}var uc=ir.ReactCurrentDispatcher,Md=ir.ReactCurrentBatchConfig,xs=0,Et=null,Ht=null,$t=null,Yc=!1,xo=!1,Bo=0,JT=0;function rn(){throw Error(ae(321))}function wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Tm(t,e,n,i,r,s){if(xs=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uc.current=t===null||t.memoizedState===null?nA:iA,t=n(i,r),xo){s=0;do{if(xo=!1,Bo=0,25<=s)throw Error(ae(301));s+=1,$t=Ht=null,e.updateQueue=null,uc.current=rA,t=n(i,r)}while(xo)}if(uc.current=Kc,e=Ht!==null&&Ht.next!==null,xs=0,$t=Ht=Et=null,Yc=!1,e)throw Error(ae(300));return t}function Am(){var t=Bo!==0;return Bo=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Et.memoizedState=$t=t:$t=$t.next=t,$t}function Kn(){if(Ht===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=$t===null?Et.memoizedState:$t.next;if(e!==null)$t=e,Ht=t;else{if(t===null)throw Error(ae(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},$t===null?Et.memoizedState=$t=t:$t=$t.next=t}return $t}function zo(t,e){return typeof e=="function"?e(t):e}function Ed(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((xs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Et.lanes|=u,ys|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,fi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);fi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function dS(){}function fS(t,e){var n=Et,i=Kn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Cm(mS.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Vo(9,pS.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(ae(349));xs&30||hS(n,e,r)}return r}function hS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pS(t,e,n,i){e.value=n,e.getSnapshot=i,gS(e)&&vS(t)}function mS(t,e,n){return n(function(){gS(e)&&vS(t)})}function gS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function vS(t){var e=Qi(t,1);e!==null&&ui(e,t,1,-1)}function k0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=tA.bind(null,Et,t),[e.memoizedState,t]}function Vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function xS(){return Kn().memoizedState}function dc(t,e,n,i){var r=yi();Et.flags|=t,r.memoizedState=Vo(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var a=Ht.memoizedState;if(s=a.destroy,i!==null&&wm(i,a.deps)){r.memoizedState=Vo(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Vo(1|e,n,s,i)}function B0(t,e){return dc(8390656,8,t,e)}function Cm(t,e){return Du(2048,8,t,e)}function yS(t,e){return Du(4,2,t,e)}function _S(t,e){return Du(4,4,t,e)}function SS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function MS(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,SS.bind(null,e,t),n)}function bm(){}function ES(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wS(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function TS(t,e,n){return xs&21?(fi(n,e)||(n=P_(),Et.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function QT(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Md.transition;Md.transition={};try{t(!1),e()}finally{st=n,Md.transition=i}}function AS(){return Kn().memoizedState}function eA(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},CS(t))bS(e,n);else if(n=lS(t,e,n,i),n!==null){var r=mn();ui(n,t,i,r),RS(n,e,i)}}function tA(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(CS(t))bS(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,fi(o,a)){var l=e.interleaved;l===null?(r.next=r,ym(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lS(t,e,r,i),n!==null&&(r=mn(),ui(n,t,i,r),RS(n,e,i))}}function CS(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function bS(t,e){xo=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RS(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sm(t,n)}}var Kc={readContext:Yn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},nA={readContext:Yn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:B0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,SS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=eA.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:k0,useDebugValue:bm,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=k0(!1),e=t[0];return t=QT.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=yi();if(vt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),qt===null)throw Error(ae(349));xs&30||hS(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,B0(mS.bind(null,i,s,t),[t]),i.flags|=2048,Vo(9,pS.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=qt.identifierPrefix;if(vt){var n=Xi,i=ji;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iA={readContext:Yn,useCallback:ES,useContext:Yn,useEffect:Cm,useImperativeHandle:MS,useInsertionEffect:yS,useLayoutEffect:_S,useMemo:wS,useReducer:Ed,useRef:xS,useState:function(){return Ed(zo)},useDebugValue:bm,useDeferredValue:function(t){var e=Kn();return TS(e,Ht.memoizedState,t)},useTransition:function(){var t=Ed(zo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:dS,useSyncExternalStore:fS,useId:AS,unstable_isNewReconciler:!1},rA={readContext:Yn,useCallback:ES,useContext:Yn,useEffect:Cm,useImperativeHandle:MS,useInsertionEffect:yS,useLayoutEffect:_S,useMemo:wS,useReducer:wd,useRef:xS,useState:function(){return wd(zo)},useDebugValue:bm,useDeferredValue:function(t){var e=Kn();return Ht===null?e.memoizedState=t:TS(e,Ht.memoizedState,t)},useTransition:function(){var t=wd(zo)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:dS,useSyncExternalStore:fS,useId:AS,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Dr(t),s=qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(ui(e,t,r,i),cc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Dr(t),s=qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(ui(e,t,r,i),cc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Dr(t),r=qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Nr(t,r,i),e!==null&&(ui(e,t,i,n),cc(e,t,i))}};function z0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Do(n,i)||!Do(r,s):!0}function PS(t,e,n){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=wn(e)?gs:un.current,i=e.contextTypes,s=(i=i!=null)?xa(t,r):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function V0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function hh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_m(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=wn(e)?gs:un.current,r.context=xa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ma(t,e){try{var n="",i=e;do n+=Lw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sA=typeof WeakMap=="function"?WeakMap:Map;function NS(t,e,n){n=qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jc||(Jc=!0,wh=i),ph(t,e)},n}function LS(t,e,n){n=qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function H0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yA.bind(null,t,e,n),e.then(t,t))}function G0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function W0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qi(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var aA=ir.ReactCurrentOwner,Mn=!1;function fn(t,e,n,i){e.child=t===null?oS(e,null,n,i):_a(e,t.child,n,i)}function j0(t,e,n,i,r){n=n.render;var s=e.ref;return fa(e,r),i=Tm(t,e,n,i,s,r),n=Am(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&n&&hm(e),e.flags|=1,fn(t,e,i,r),e.child)}function X0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,DS(t,e,s,i,r)):(t=mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(a,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function DS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Do(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,er(t,e,r)}return mh(t,e,n,i,r)}function IS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ra,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(ra,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(ra,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(ra,Nn),Nn|=i;return fn(t,e,r,n),e.child}function US(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,i,r){var s=wn(n)?gs:un.current;return s=xa(e,s),fa(e,r),n=Tm(t,e,n,i,s,r),i=Am(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(vt&&i&&hm(e),e.flags|=1,fn(t,e,n,r),e.child)}function $0(t,e,n,i,r){if(wn(n)){var s=!0;Hc(e)}else s=!1;if(fa(e,r),e.stateNode===null)fc(t,e),PS(e,n,i),hh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=wn(n)?gs:un.current,c=xa(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&V0(e,a,i,c),xr=!1;var d=e.memoizedState;a.state=d,$c(e,i,a,r),l=e.memoizedState,o!==i||d!==l||En.current||xr?(typeof u=="function"&&(fh(e,n,u,i),l=e.memoizedState),(o=xr||z0(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,cS(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ri(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=wn(n)?gs:un.current,l=xa(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&V0(e,a,i,l),xr=!1,d=e.memoizedState,a.state=d,$c(e,i,a,r);var v=e.memoizedState;o!==f||d!==v||En.current||xr?(typeof p=="function"&&(fh(e,n,p,i),v=e.memoizedState),(c=xr||z0(e,n,c,i,d,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gh(t,e,n,i,s,r)}function gh(t,e,n,i,r,s){US(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&L0(e,n,!1),er(t,e,s);i=e.stateNode,aA.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=_a(e,t.child,null,s),e.child=_a(e,null,o,s)):fn(t,e,o,s),e.memoizedState=i.state,r&&L0(e,n,!0),e.child}function FS(t){var e=t.stateNode;e.pendingContext?N0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&N0(t,e.context,!1),Sm(t,e.containerInfo)}function q0(t,e,n,i,r){return ya(),mm(r),e.flags|=256,fn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function OS(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ou(a,i,0,null),t=hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xh(n),e.memoizedState=vh,t):Rm(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return oA(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ir(o,s):(s=hs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?xh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=vh,i}return s=t.child,t=s.sibling,i=Ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rm(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,i){return i!==null&&mm(i),_a(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oA(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Td(Error(ae(422))),Cl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ou({mode:"visible",children:i.children},r,0,null),s=hs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_a(e,t.child,null,a),e.child.memoizedState=xh(a),e.memoizedState=vh,s);if(!(e.mode&1))return Cl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Td(s,i,void 0),Cl(t,e,a,i)}if(o=(a&t.childLanes)!==0,Mn||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),ui(i,t,r,-1))}return Um(),i=Td(Error(ae(421))),Cl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_A.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=Pr(r.nextSibling),Un=e,vt=!0,ai=null,t!==null&&(Gn[Wn++]=ji,Gn[Wn++]=Xi,Gn[Wn++]=vs,ji=t.id,Xi=t.overflow,vs=e),e=Rm(e,i.children),e.flags|=4096,e)}function Y0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dh(t.return,e,n)}function Ad(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function kS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,n,e);else if(t.tag===19)Y0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ad(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ad(e,!0,n,null,s);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lA(t,e,n){switch(e.tag){case 3:FS(e),ya();break;case 5:uS(e);break;case 1:wn(e.type)&&Hc(e);break;case 4:Sm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?OS(t,e,n):(ht(St,St.current&1),t=er(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return kS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,IS(t,e,n)}return er(t,e,n)}var BS,yh,zS,VS;BS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};zS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(Ri.current);var s=null;switch(n){case"input":r=Vf(t,r),i=Vf(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Wf(t,r),i=Wf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}Xf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};VS=function(t,e,n,i){n!==i&&(e.flags|=4)};function $a(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cA(t,e,n){var i=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return wn(e.type)&&Vc(),sn(e),null;case 3:return i=e.stateNode,Sa(),gt(En),gt(un),Em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Ch(ai),ai=null))),yh(t,e),sn(e),null;case 5:Mm(e);var r=os(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)zS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return sn(e),null}if(t=os(Ri.current),Tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ao.length;r++)mt(ao[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":r0(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":a0(i,s),mt("invalid",i)}Xf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,o,t),r=["children",""+o]):Ao.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(n){case"input":gl(i),s0(i,s,!0);break;case"textarea":gl(i),o0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ei]=e,t[Fo]=i,BS(t,e,!1,!1),e.stateNode=t;e:{switch(a=$f(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ao.length;r++)mt(ao[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":r0(t,i),r=Vf(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":a0(t,i),r=Wf(t,i),mt("invalid",t);break;default:r=i}Xf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?x_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Qp(t,s,l,a))}switch(n){case"input":gl(t),s0(t,i,!1);break;case"textarea":gl(t),o0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?la(t,!!i.multiple,s,!1):i.defaultValue!=null&&la(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)VS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=os(ko.current),os(Ri.current),Tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return sn(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&In!==null&&e.mode&1&&!(e.flags&128))sS(),ya(),e.flags|=98560,s=!1;else if(s=Tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ei]=e}else ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ai!==null&&(Ch(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Gt===0&&(Gt=3):Um())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Sa(),yh(t,e),t===null&&Io(e.stateNode.containerInfo),sn(e),null;case 10:return xm(e.type._context),sn(e),null;case 17:return wn(e.type)&&Vc(),sn(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$a(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=qc(t),a!==null){for(e.flags|=128,$a(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>Ea&&(e.flags|=128,i=!0,$a(s,!1),e.lanes=4194304)}else{if(!i)if(t=qc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return sn(e),null}else 2*It()-s.renderingStartTime>Ea&&n!==1073741824&&(e.flags|=128,i=!0,$a(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Im(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function uA(t,e){switch(pm(e),e.tag){case 1:return wn(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(),gt(En),gt(un),Em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ya()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return Sa(),null;case 10:return xm(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var bl=!1,ln=!1,dA=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ia(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function _h(t,e,n){try{n()}catch(i){bt(t,e,i)}}var K0=!1;function fA(t,e){if(ih=Oc,t=X_(),fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},Oc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,m=v.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ri(e.type,M),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(_){bt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=K0,K0=!1,v}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_h(e,n,s)}r=r.next}while(r!==i)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function HS(t){var e=t.alternate;e!==null&&(t.alternate=null,HS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Fo],delete e[oh],delete e[qT],delete e[YT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function GS(t){return t.tag===5||t.tag===3||t.tag===4}function Z0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||GS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function Eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Kt=null,si=!1;function lr(t,e,n){for(n=n.child;n!==null;)WS(t,e,n),n=n.sibling}function WS(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:ln||ia(n,e);case 6:var i=Kt,r=si;Kt=null,lr(t,e,n),Kt=i,si=r,Kt!==null&&(si?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(si?(t=Kt,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),No(t)):yd(Kt,n.stateNode));break;case 4:i=Kt,r=si,Kt=n.stateNode.containerInfo,si=!0,lr(t,e,n),Kt=i,si=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_h(n,e,a),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!ln&&(ia(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,lr(t,e,n),ln=i):lr(t,e,n);break;default:lr(t,e,n)}}function J0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dA),e.forEach(function(i){var r=SA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,si=!1;break e;case 3:Kt=o.stateNode.containerInfo,si=!0;break e;case 4:Kt=o.stateNode.containerInfo,si=!0;break e}o=o.return}if(Kt===null)throw Error(ae(160));WS(s,a,r),Kt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jS(e,t),e=e.sibling}function jS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),gi(t),i&4){try{yo(3,t,t.return),Uu(3,t)}catch(M){bt(t,t.return,M)}try{yo(5,t,t.return)}catch(M){bt(t,t.return,M)}}break;case 1:Jn(e,t),gi(t),i&512&&n!==null&&ia(n,n.return);break;case 5:if(Jn(e,t),gi(t),i&512&&n!==null&&ia(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(M){bt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&h_(r,s),$f(o,a);var c=$f(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?x_(r,f):u==="dangerouslySetInnerHTML"?g_(r,f):u==="children"?Co(r,f):Qp(r,u,f,c)}switch(o){case"input":Hf(r,s);break;case"textarea":p_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?la(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?la(r,!!s.multiple,s.defaultValue,!0):la(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(M){bt(t,t.return,M)}}break;case 6:if(Jn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){bt(t,t.return,M)}}break;case 3:if(Jn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(M){bt(t,t.return,M)}break;case 4:Jn(e,t),gi(t);break;case 13:Jn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lm=It())),i&4&&J0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,Jn(e,t),ln=c):Jn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(f=Se=u;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:ia(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){bt(i,n,M)}}break;case 5:ia(d,d.return);break;case 22:if(d.memoizedState!==null){ev(f);continue}}p!==null?(p.return=d,Se=p):ev(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=v_("display",a))}catch(M){bt(t,t.return,M)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){bt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,t),gi(t),i&4&&J0(t);break;case 21:break;default:Jn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(GS(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=Z0(t);Eh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Z0(t);Mh(t,o,a);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hA(t,e,n){Se=t,XS(t)}function XS(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||bl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||ln;o=bl;var c=ln;if(bl=a,(ln=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?tv(r):l!==null?(l.return=a,Se=l):tv(r);for(;s!==null;)Se=s,XS(s),s=s.sibling;Se=r,bl=o,ln=c}Q0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Q0(t)}}function Q0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||Uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}O0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&No(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}ln||e.flags&512&&Sh(e)}catch(d){bt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function ev(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function tv(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Sh(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Sh(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var pA=Math.ceil,Zc=ir.ReactCurrentDispatcher,Pm=ir.ReactCurrentOwner,$n=ir.ReactCurrentBatchConfig,nt=0,qt=null,Bt=null,en=0,Nn=0,ra=Gr(0),Gt=0,Ho=null,ys=0,Fu=0,Nm=0,_o=null,_n=null,Lm=0,Ea=1/0,Gi=null,Jc=!1,wh=null,Lr=null,Rl=!1,Er=null,Qc=0,So=0,Th=null,hc=-1,pc=0;function mn(){return nt&6?It():hc!==-1?hc:hc=It()}function Dr(t){return t.mode&1?nt&2&&en!==0?en&-en:ZT.transition!==null?(pc===0&&(pc=P_()),pc):(t=st,t!==0||(t=window.event,t=t===void 0?16:O_(t.type)),t):1}function ui(t,e,n,i){if(50<So)throw So=0,Th=null,Error(ae(185));Qo(t,n,i),(!(nt&2)||t!==qt)&&(t===qt&&(!(nt&2)&&(Fu|=n),Gt===4&&_r(t,en)),Tn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ea=It()+500,Lu&&Wr()))}function Tn(t,e){var n=t.callbackNode;Zw(t,e);var i=Fc(t,t===qt?en:0);if(i===0)n!==null&&u0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&u0(n),e===1)t.tag===0?KT(nv.bind(null,t)):nS(nv.bind(null,t)),XT(function(){!(nt&6)&&Wr()}),n=null;else{switch(N_(i)){case 1:n=rm;break;case 4:n=b_;break;case 16:n=Uc;break;case 536870912:n=R_;break;default:n=Uc}n=eM(n,$S.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $S(t,e){if(hc=-1,pc=0,nt&6)throw Error(ae(327));var n=t.callbackNode;if(ha()&&t.callbackNode!==n)return null;var i=Fc(t,t===qt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=nt;nt|=2;var s=YS();(qt!==t||en!==e)&&(Gi=null,Ea=It()+500,fs(t,e));do try{vA();break}catch(o){qS(t,o)}while(!0);vm(),Zc.current=s,nt=r,Bt!==null?e=0:(qt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=Jf(t),r!==0&&(i=r,e=Ah(t,r))),e===1)throw n=Ho,fs(t,0),_r(t,i),Tn(t,It()),n;if(e===6)_r(t,i);else{if(r=t.current.alternate,!(i&30)&&!mA(r)&&(e=eu(t,i),e===2&&(s=Jf(t),s!==0&&(i=s,e=Ah(t,s))),e===1))throw n=Ho,fs(t,0),_r(t,i),Tn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:es(t,_n,Gi);break;case 3:if(_r(t,i),(i&130023424)===i&&(e=Lm+500-It(),10<e)){if(Fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ah(es.bind(null,t,_n,Gi),e);break}es(t,_n,Gi);break;case 4:if(_r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ci(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pA(i/1960))-i,10<i){t.timeoutHandle=ah(es.bind(null,t,_n,Gi),i);break}es(t,_n,Gi);break;case 5:es(t,_n,Gi);break;default:throw Error(ae(329))}}}return Tn(t,It()),t.callbackNode===n?$S.bind(null,t):null}function Ah(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=eu(t,e),t!==2&&(e=_n,_n=n,e!==null&&Ch(e)),t}function Ch(t){_n===null?_n=t:_n.push.apply(_n,t)}function mA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Nm,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function nv(t){if(nt&6)throw Error(ae(327));ha();var e=Fc(t,0);if(!(e&1))return Tn(t,It()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=Jf(t);i!==0&&(e=i,n=Ah(t,i))}if(n===1)throw n=Ho,fs(t,0),_r(t,e),Tn(t,It()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,_n,Gi),Tn(t,It()),null}function Dm(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ea=It()+500,Lu&&Wr())}}function _s(t){Er!==null&&Er.tag===0&&!(nt&6)&&ha();var e=nt;nt|=1;var n=$n.transition,i=st;try{if($n.transition=null,st=1,t)return t()}finally{st=i,$n.transition=n,nt=e,!(nt&6)&&Wr()}}function Im(){Nn=ra.current,gt(ra)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jT(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(pm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:Sa(),gt(En),gt(un),Em();break;case 5:Mm(i);break;case 4:Sa();break;case 13:gt(St);break;case 19:gt(St);break;case 10:xm(i.type._context);break;case 22:case 23:Im()}n=n.return}if(qt=t,Bt=t=Ir(t.current,null),en=Nn=e,Gt=0,Ho=null,Nm=Fu=ys=0,_n=_o=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}as=null}return t}function qS(t,e){do{var n=Bt;try{if(vm(),uc.current=Kc,Yc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yc=!1}if(xs=0,$t=Ht=Et=null,xo=!1,Bo=0,Pm.current=null,n===null||n.return===null){Gt=1,Ho=e,Bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=G0(a);if(p!==null){p.flags&=-257,W0(p,a,o,s,e),p.mode&1&&H0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){H0(s,c,e),Um();break e}l=Error(ae(426))}}else if(vt&&o.mode&1){var m=G0(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),W0(m,a,o,s,e),mm(Ma(l,o));break e}}s=l=Ma(l,o),Gt!==4&&(Gt=2),_o===null?_o=[s]:_o.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=NS(s,l,e);F0(s,h);break e;case 1:o=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Lr===null||!Lr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=LS(s,o,e);F0(s,_);break e}}s=s.return}while(s!==null)}ZS(n)}catch(T){e=T,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function YS(){var t=Zc.current;return Zc.current=Kc,t===null?Kc:t}function Um(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),qt===null||!(ys&268435455)&&!(Fu&268435455)||_r(qt,en)}function eu(t,e){var n=nt;nt|=2;var i=YS();(qt!==t||en!==e)&&(Gi=null,fs(t,e));do try{gA();break}catch(r){qS(t,r)}while(!0);if(vm(),nt=n,Zc.current=i,Bt!==null)throw Error(ae(261));return qt=null,en=0,Gt}function gA(){for(;Bt!==null;)KS(Bt)}function vA(){for(;Bt!==null&&!Hw();)KS(Bt)}function KS(t){var e=QS(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?ZS(t):Bt=e,Pm.current=null}function ZS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uA(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Bt=null;return}}else if(n=cA(n,e,Nn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Gt===0&&(Gt=5)}function es(t,e,n){var i=st,r=$n.transition;try{$n.transition=null,st=1,xA(t,e,n,i)}finally{$n.transition=r,st=i}return null}function xA(t,e,n,i){do ha();while(Er!==null);if(nt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jw(t,s),t===qt&&(Bt=qt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,eM(Uc,function(){return ha(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var a=st;st=1;var o=nt;nt|=4,Pm.current=null,fA(t,n),jS(n,t),kT(rh),Oc=!!ih,rh=ih=null,t.current=n,hA(n),Gw(),nt=o,st=a,$n.transition=s}else t.current=n;if(Rl&&(Rl=!1,Er=t,Qc=r),s=t.pendingLanes,s===0&&(Lr=null),Xw(n.stateNode),Tn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jc)throw Jc=!1,t=wh,wh=null,t;return Qc&1&&t.tag!==0&&ha(),s=t.pendingLanes,s&1?t===Th?So++:(So=0,Th=t):So=0,Wr(),null}function ha(){if(Er!==null){var t=N_(Qc),e=$n.transition,n=st;try{if($n.transition=null,st=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Qc=0,nt&6)throw Error(ae(331));var r=nt;for(nt|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:yo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Se=f;else for(;Se!==null;){u=Se;var d=u.sibling,p=u.return;if(HS(u),u===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){a=Se;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Se=S;else e:for(a=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Uu(9,o)}}catch(T){bt(o,o.return,T)}if(o===a){Se=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Se=_;break e}Se=o.return}}if(nt=r,Wr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{st=n,$n.transition=e}}return!1}function iv(t,e,n){e=Ma(n,e),e=NS(t,e,1),t=Nr(t,e,1),e=mn(),t!==null&&(Qo(t,1,e),Tn(t,e))}function bt(t,e,n){if(t.tag===3)iv(t,t,n);else for(;e!==null;){if(e.tag===3){iv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){t=Ma(n,t),t=LS(e,t,1),e=Nr(e,t,1),t=mn(),e!==null&&(Qo(e,1,t),Tn(e,t));break}}e=e.return}}function yA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>It()-Lm?fs(t,0):Nm|=n),Tn(t,e)}function JS(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=mn();t=Qi(t,e),t!==null&&(Qo(t,e,n),Tn(t,n))}function _A(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JS(t,n)}function SA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),JS(t,n)}var QS;QS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,lA(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,vt&&e.flags&1048576&&iS(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fc(t,e),t=e.pendingProps;var r=xa(e,un.current);fa(e,n),r=Tm(null,e,i,t,r,n);var s=Am();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_m(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,hh(e,i,t,n),e=gh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&hm(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=EA(i),t=ri(i,t),r){case 0:e=mh(null,e,i,t,n);break e;case 1:e=$0(null,e,i,t,n);break e;case 11:e=j0(null,e,i,t,n);break e;case 14:e=X0(null,e,i,ri(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),$0(t,e,i,r,n);case 3:e:{if(FS(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cS(t,e),$c(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ma(Error(ae(423)),e),e=q0(t,e,i,n,r);break e}else if(i!==r){r=Ma(Error(ae(424)),e),e=q0(t,e,i,n,r);break e}else for(In=Pr(e.stateNode.containerInfo.firstChild),Un=e,vt=!0,ai=null,n=oS(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),i===r){e=er(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return uS(e),t===null&&uh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sh(i,r)?a=null:s!==null&&sh(i,s)&&(e.flags|=32),US(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&uh(e),null;case 13:return OS(t,e,n);case 4:return Sm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),j0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(jc,i._currentValue),i._currentValue=a,s!==null)if(fi(s.value,a)){if(s.children===r.children&&!En.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fa(e,n),r=Yn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),X0(t,e,i,r,n);case 15:return DS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),fc(t,e),e.tag=1,wn(i)?(t=!0,Hc(e)):t=!1,fa(e,n),PS(e,i,r),hh(e,i,r,n),gh(null,e,i,!0,t,n);case 19:return kS(t,e,n);case 22:return IS(t,e,n)}throw Error(ae(156,e.tag))};function eM(t,e){return C_(t,e)}function MA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new MA(t,e,n,i)}function Fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function EA(t){if(typeof t=="function")return Fm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tm)return 11;if(t===nm)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case qs:return hs(n.children,r,s,e);case em:a=8,r|=8;break;case Of:return t=jn(12,n,e,r|2),t.elementType=Of,t.lanes=s,t;case kf:return t=jn(13,n,e,r),t.elementType=kf,t.lanes=s,t;case Bf:return t=jn(19,n,e,r),t.elementType=Bf,t.lanes=s,t;case u_:return Ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l_:a=10;break e;case c_:a=9;break e;case tm:a=11;break e;case nm:a=14;break e;case vr:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hs(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Ou(t,e,n,i){return t=jn(22,t,i,e),t.elementType=u_,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function bd(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,i,r,s,a,o,l){return t=new wA(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function TA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tM(t){if(!t)return Or;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(wn(n))return tS(t,n,e)}return e}function nM(t,e,n,i,r,s,a,o,l){return t=Om(n,i,!0,t,r,s,a,o,l),t.context=tM(null),n=t.current,i=mn(),r=Dr(n),s=qi(i,r),s.callback=e??null,Nr(n,s,r),t.current.lanes=r,Qo(t,r,i),Tn(t,i),t}function ku(t,e,n,i){var r=e.current,s=mn(),a=Dr(r);return n=tM(n),e.context===null?e.context=n:e.pendingContext=n,e=qi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Nr(r,e,a),t!==null&&(ui(t,r,a,s),cc(t,r,a)),a}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){rv(t,e),(t=t.alternate)&&rv(t,e)}function AA(){return null}var iM=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}Bu.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));ku(t,e,null,null)};Bu.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){ku(null,t,null,null)}),e[Ji]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&F_(t)}};function zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function CA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tu(a);s.call(c)}}var a=nM(e,i,t,0,null,!1,!1,"",sv);return t._reactRootContainer=a,t[Ji]=a.current,Io(t.nodeType===8?t.parentNode:t),_s(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=tu(l);o.call(c)}}var l=Om(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=l,t[Ji]=l.current,Io(t.nodeType===8?t.parentNode:t),_s(function(){ku(e,l,n,i)}),l}function Vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=tu(a);o.call(l)}}ku(e,a,t,r)}else a=CA(n,e,t,r,i);return tu(a)}L_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(sm(e,n|1),Tn(e,It()),!(nt&6)&&(Ea=It()+500,Wr()))}break;case 13:_s(function(){var i=Qi(t,1);if(i!==null){var r=mn();ui(i,t,1,r)}}),km(t,1)}};am=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=mn();ui(e,t,134217728,n)}km(t,134217728)}};D_=function(t){if(t.tag===13){var e=Dr(t),n=Qi(t,e);if(n!==null){var i=mn();ui(n,t,e,i)}km(t,e)}};I_=function(){return st};U_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Yf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nu(i);if(!r)throw Error(ae(90));f_(i),Hf(i,r)}}}break;case"textarea":p_(t,n);break;case"select":e=n.value,e!=null&&la(t,!!n.multiple,e,!1)}};S_=Dm;M_=_s;var bA={usingClientEntryPoint:!1,Events:[tl,Js,Nu,y_,__,Dm]},qa={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RA={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T_(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||AA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Cu=Pl.inject(RA),bi=Pl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bA;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zm(e))throw Error(ae(200));return TA(t,e,null,n)};kn.createRoot=function(t,e){if(!zm(t))throw Error(ae(299));var n=!1,i="",r=iM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,i,r),t[Ji]=e.current,Io(t.nodeType===8?t.parentNode:t),new Bm(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=T_(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return _s(t)};kn.hydrate=function(t,e,n){if(!zu(e))throw Error(ae(200));return Vu(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!zm(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=iM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=nM(e,null,t,1,n??null,r,!1,s,a),t[Ji]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bu(e)};kn.render=function(t,e,n){if(!zu(e))throw Error(ae(200));return Vu(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!zu(t))throw Error(ae(40));return t._reactRootContainer?(_s(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1};kn.unstable_batchedUpdates=Dm;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Vu(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function rM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rM)}catch(t){console.error(t)}}rM(),r_.exports=kn;var PA=r_.exports,av=PA;Uf.createRoot=av.createRoot,Uf.hydrateRoot=av.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Go.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const ov="popstate";function NA(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return bh("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:nu(r)}return DA(e,n,null,t)}function Ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LA(){return Math.random().toString(36).substr(2,8)}function lv(t,e){return{usr:t.state,key:t.key,idx:e}}function bh(t,e,n,i){return n===void 0&&(n=null),Go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Da(e):e,{state:n,key:e&&e.key||i||LA()})}function nu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Da(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function DA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=wr.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Go({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){o=wr.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:o,location:M.location,delta:h})}function d(m,h){o=wr.Push;let x=bh(M.location,m,h);c=u()+1;let S=lv(x,c),_=M.createHref(x);try{a.pushState(S,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(_)}s&&l&&l({action:o,location:M.location,delta:1})}function p(m,h){o=wr.Replace;let x=bh(M.location,m,h);c=u();let S=lv(x,c),_=M.createHref(x);a.replaceState(S,"",_),s&&l&&l({action:o,location:M.location,delta:0})}function v(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:nu(m);return x=x.replace(/ $/,"%20"),Ft(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let M={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ov,f),l=m,()=>{r.removeEventListener(ov,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return M}var cv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cv||(cv={}));function IA(t,e,n){return n===void 0&&(n="/"),UA(t,e,n)}function UA(t,e,n,i){let r=typeof e=="string"?Da(e):e,s=Hm(r.pathname||"/",n);if(s==null)return null;let a=sM(t);FA(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=qA(s);o=jA(a[l],c)}return o}function sM(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ur([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sM(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:GA(c,s.index),routesMeta:u})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of aM(s.path))r(s,a,l)}),e}function aM(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=aM(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function FA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const OA=/^:[\w-]+$/,kA=3,BA=2,zA=1,VA=10,HA=-2,uv=t=>t==="*";function GA(t,e){let n=t.split("/"),i=n.length;return n.some(uv)&&(i+=HA),e&&(i+=BA),n.filter(r=>!uv(r)).reduce((r,s)=>r+(OA.test(s)?kA:s===""?zA:VA),i)}function WA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function jA(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=XA({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Ur([s,f.pathname]),pathnameBase:QA(Ur([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Ur([s,f.pathnameBase]))}return a}function XA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=$A(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let M=o[f]||"";a=s.slice(0,s.length-M.length).replace(/(.)\/+$/,"$1")}const v=o[f];return p&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function $A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function qA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const YA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KA=t=>YA.test(t);function ZA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Da(t):t,s;if(n)if(KA(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Vm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=dv(n.substring(1),"/"):s=dv(n,e)}else s=e;return{pathname:s,search:eC(i),hash:tC(r)}}function dv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Rd(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gm(t,e){let n=JA(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Wm(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Da(t):(r=Go({},t),Ft(!r.pathname||!r.pathname.includes("?"),Rd("?","pathname","search",r)),Ft(!r.pathname||!r.pathname.includes("#"),Rd("#","pathname","hash",r)),Ft(!r.search||!r.search.includes("#"),Rd("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=ZA(r,o),c=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),QA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const oM=["post","put","patch","delete"];new Set(oM);const iC=["get",...oM];new Set(iC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wo.apply(this,arguments)}const jm=L.createContext(null),rC=L.createContext(null),jr=L.createContext(null),Hu=L.createContext(null),rr=L.createContext({outlet:null,matches:[],isDataRoute:!1}),lM=L.createContext(null);function sC(t,e){let{relative:n}=e===void 0?{}:e;Ia()||Ft(!1);let{basename:i,navigator:r}=L.useContext(jr),{hash:s,pathname:a,search:o}=uM(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Ur([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ia(){return L.useContext(Hu)!=null}function il(){return Ia()||Ft(!1),L.useContext(Hu).location}function cM(t){L.useContext(jr).static||L.useLayoutEffect(t)}function Ts(){let{isDataRoute:t}=L.useContext(rr);return t?yC():aC()}function aC(){Ia()||Ft(!1);let t=L.useContext(jm),{basename:e,future:n,navigator:i}=L.useContext(jr),{matches:r}=L.useContext(rr),{pathname:s}=il(),a=JSON.stringify(Gm(r,n.v7_relativeSplatPath)),o=L.useRef(!1);return cM(()=>{o.current=!0}),L.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Wm(c,JSON.parse(a),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ur([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,a,s,t])}function oC(){let{matches:t}=L.useContext(rr),e=t[t.length-1];return e?e.params:{}}function uM(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=L.useContext(jr),{matches:r}=L.useContext(rr),{pathname:s}=il(),a=JSON.stringify(Gm(r,i.v7_relativeSplatPath));return L.useMemo(()=>Wm(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function lC(t,e){return cC(t,e)}function cC(t,e,n,i){Ia()||Ft(!1);let{navigator:r}=L.useContext(jr),{matches:s}=L.useContext(rr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=il(),u;if(e){var f;let m=typeof e=="string"?Da(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Ft(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=IA(t,{pathname:p}),M=pC(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Ur([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Ur([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&M?L.createElement(Hu.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wr.Pop}},M):M}function uC(){let t=xC(),e=nC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,null)}const dC=L.createElement(uC,null);class fC extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(rr.Provider,{value:this.props.routeContext},L.createElement(lM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hC(t){let{routeContext:e,match:n,children:i}=t,r=L.useContext(jm);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(rr.Provider,{value:e},i)}function pC(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let u=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);u>=0||Ft(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:p}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,d)=>{let p,v=!1,M=null,m=null;n&&(p=o&&f.route.id?o[f.route.id]:void 0,M=f.route.errorElement||dC,l&&(c<0&&d===0?(_C("route-fallback"),v=!0,m=null):c===d&&(v=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,d+1)),x=()=>{let S;return p?S=M:v?S=m:f.route.Component?S=L.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=u,L.createElement(hC,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?L.createElement(fC,{location:n.location,revalidation:n.revalidation,component:M,error:p,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var dM=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dM||{}),fM=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fM||{});function mC(t){let e=L.useContext(jm);return e||Ft(!1),e}function gC(t){let e=L.useContext(rC);return e||Ft(!1),e}function vC(t){let e=L.useContext(rr);return e||Ft(!1),e}function hM(t){let e=vC(),n=e.matches[e.matches.length-1];return n.route.id||Ft(!1),n.route.id}function xC(){var t;let e=L.useContext(lM),n=gC(),i=hM();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function yC(){let{router:t}=mC(dM.UseNavigateStable),e=hM(fM.UseNavigateStable),n=L.useRef(!1);return cM(()=>{n.current=!0}),L.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Wo({fromRouteId:e},s)))},[t,e])}const fv={};function _C(t,e,n){fv[t]||(fv[t]=!0)}function SC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function MC(t){let{to:e,replace:n,state:i,relative:r}=t;Ia()||Ft(!1);let{future:s,static:a}=L.useContext(jr),{matches:o}=L.useContext(rr),{pathname:l}=il(),c=Ts(),u=Wm(e,Gm(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return L.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function mr(t){Ft(!1)}function EC(t){let{basename:e="/",children:n=null,location:i,navigationType:r=wr.Pop,navigator:s,static:a=!1,future:o}=t;Ia()&&Ft(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:s,static:a,future:Wo({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Da(i));let{pathname:u="/",search:f="",hash:d="",state:p=null,key:v="default"}=i,M=L.useMemo(()=>{let m=Hm(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:v},navigationType:r}},[l,u,f,d,p,v,r]);return M==null?null:L.createElement(jr.Provider,{value:c},L.createElement(Hu.Provider,{children:n,value:M}))}function wC(t){let{children:e,location:n}=t;return lC(Rh(e),n)}new Promise(()=>{});function Rh(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let s=[...e,r];if(i.type===L.Fragment){n.push.apply(n,Rh(i.props.children,s));return}i.type!==mr&&Ft(!1),!i.props.index||!i.props.children||Ft(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Rh(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ph(){return Ph=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ph.apply(this,arguments)}function TC(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function AC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CC(t,e){return t.button===0&&(!e||e==="_self")&&!AC(t)}const bC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RC="6";try{window.__reactRouterVersion=RC}catch{}const PC="startTransition",hv=yw[PC];function NC(t){let{basename:e,children:n,future:i,window:r}=t,s=L.useRef();s.current==null&&(s.current=NA({window:r,v5Compat:!0}));let a=s.current,[o,l]=L.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},u=L.useCallback(f=>{c&&hv?hv(()=>l(f)):l(f)},[l,c]);return L.useLayoutEffect(()=>a.listen(u),[a,u]),L.useEffect(()=>SC(i),[i]),L.createElement(EC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const LC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xm=L.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,d=TC(e,bC),{basename:p}=L.useContext(jr),v,M=!1;if(typeof c=="string"&&DC.test(c)&&(v=c,LC))try{let S=new URL(window.location.href),_=c.startsWith("//")?new URL(S.protocol+c):new URL(c),T=Hm(_.pathname,p);_.origin===S.origin&&T!=null?c=T+_.search+_.hash:M=!0}catch{}let m=sC(c,{relative:r}),h=IC(c,{replace:a,state:o,target:l,preventScrollReset:u,relative:r,viewTransition:f});function x(S){i&&i(S),S.defaultPrevented||h(S)}return L.createElement("a",Ph({},d,{href:v||m,onClick:M||s?i:x,ref:n,target:l}))});var pv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pv||(pv={}));var mv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mv||(mv={}));function IC(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Ts(),c=il(),u=uM(t,{relative:a});return L.useCallback(f=>{if(CC(f,n)){f.preventDefault();let d=i!==void 0?i:nu(c)===nu(u);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,u,i,r,n,t,s,a,o])}const $m=L.createContext({});function qm(t){const e=L.useRef(null);return e.current===null&&(e.current=t()),e.current}const UC=typeof window<"u",iu=UC?L.useLayoutEffect:L.useEffect,Gu=L.createContext(null);function Ym(t,e){t.indexOf(e)===-1&&t.push(e)}function ru(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ii=(t,e,n)=>n>e?e:n<t?t:n;let Wu=()=>{};const kr={},pM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),mM=t=>typeof t=="object"&&t!==null,gM=t=>/^0[^.\s]+$/u.test(t);function vM(t){let e;return()=>(e===void 0&&(e=t()),e)}const qn=t=>t,rl=(...t)=>t.reduce((e,n)=>i=>n(e(i))),jo=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class Km{constructor(){this.subscriptions=[]}add(e){return Ym(this.subscriptions,e),()=>ru(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Fn=t=>t*1e3,Xn=t=>t/1e3,xM=(t,e)=>e?t*(1e3/e):0,yM=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,FC=1e-7,OC=12;function kC(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=yM(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>FC&&++o<OC);return a}function sl(t,e,n,i){if(t===e&&n===i)return qn;const r=s=>kC(s,0,1,t,n);return s=>s===0||s===1?s:yM(r(s),e,i)}const _M=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,SM=t=>e=>1-t(1-e),MM=sl(.33,1.53,.69,.99),Zm=SM(MM),EM=_M(Zm),wM=t=>t>=1?1:(t*=2)<1?.5*Zm(t):.5*(2-Math.pow(2,-10*(t-1))),Jm=t=>1-Math.sin(Math.acos(t)),TM=SM(Jm),AM=_M(Jm),BC=sl(.42,0,1,1),zC=sl(0,0,.58,1),CM=sl(.42,0,.58,1),VC=t=>Array.isArray(t)&&typeof t[0]!="number",bM=t=>Array.isArray(t)&&typeof t[0]=="number",HC={linear:qn,easeIn:BC,easeInOut:CM,easeOut:zC,circIn:Jm,circInOut:AM,circOut:TM,backIn:Zm,backInOut:EM,backOut:MM,anticipate:wM},GC=t=>typeof t=="string",gv=t=>{if(bM(t)){Wu(t.length===4);const[e,n,i,r]=t;return sl(e,n,i,r)}else if(GC(t))return HC[t];return t},Nl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function WC(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){s.has(c)&&(l.schedule(c),t()),c(a)}const l={schedule:(c,u=!1,f=!1)=>{const p=f&&i?e:n;return u&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(a=c,i){r=!0;return}i=!0;const u=e;e=n,n=u,e.forEach(o),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const jC=40;function RM(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=Nl.reduce((S,_)=>(S[_]=WC(s),S),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:v}=a,M=()=>{const S=kr.useManualTiming,_=S?r.timestamp:performance.now();n=!1,S||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,jC),1)),r.timestamp=_,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(M))},m=()=>{n=!0,i=!0,r.isProcessing||t(M)};return{schedule:Nl.reduce((S,_)=>{const T=a[_];return S[_]=(w,C=!1,y=!1)=>(n||m(),T.schedule(w,C,y)),S},{}),cancel:S=>{for(let _=0;_<Nl.length;_++)a[Nl[_]].cancel(S)},state:r,steps:a}}const{schedule:ut,cancel:Br,state:Zt,steps:Pd}=RM(typeof requestAnimationFrame<"u"?requestAnimationFrame:qn,!0);let gc;function XC(){gc=void 0}const hn={now:()=>(gc===void 0&&hn.set(Zt.isProcessing||kr.useManualTiming?Zt.timestamp:performance.now()),gc),set:t=>{gc=t,queueMicrotask(XC)}},PM=t=>e=>typeof e=="string"&&e.startsWith(t),NM=PM("--"),$C=PM("var(--"),Qm=t=>$C(t)?qC.test(t.split("/*")[0].trim()):!1,qC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vv(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ua={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Xo={...Ua,transform:t=>Ii(0,1,t)},Ll={...Ua,default:1},Mo=t=>Math.round(t*1e5)/1e5,eg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function YC(t){return t==null}const KC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tg=(t,e)=>n=>!!(typeof n=="string"&&KC.test(n)&&n.startsWith(t)||e&&!YC(n)&&Object.prototype.hasOwnProperty.call(n,e)),LM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(eg);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},ZC=t=>Ii(0,255,t),Nd={...Ua,transform:t=>Math.round(ZC(t))},ls={test:tg("rgb","red"),parse:LM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Nd.transform(t)+", "+Nd.transform(e)+", "+Nd.transform(n)+", "+Mo(Xo.transform(i))+")"};function JC(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Nh={test:tg("#"),parse:JC,transform:ls.transform},al=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Hi=al("deg"),Pi=al("%"),Me=al("px"),QC=al("vh"),eb=al("vw"),xv={...Pi,parse:t=>Pi.parse(t)/100,transform:t=>Pi.transform(t*100)},sa={test:tg("hsl","hue"),parse:LM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Pi.transform(Mo(e))+", "+Pi.transform(Mo(n))+", "+Mo(Xo.transform(i))+")"},kt={test:t=>ls.test(t)||Nh.test(t)||sa.test(t),parse:t=>ls.test(t)?ls.parse(t):sa.test(t)?sa.parse(t):Nh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ls.transform(t):sa.transform(t),getAnimatableNone:t=>{const e=kt.parse(t);return e.alpha=0,kt.transform(e)}},tb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nb(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(eg))==null?void 0:e.length)||0)+(((n=t.match(tb))==null?void 0:n.length)||0)>0}const DM="number",IM="color",ib="var",rb="var(",yv="${}",sb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(sb,l=>(kt.test(l)?(i.color.push(s),r.push(IM),n.push(kt.parse(l))):l.startsWith(rb)?(i.var.push(s),r.push(ib),n.push(l)):(i.number.push(s),r.push(DM),n.push(parseFloat(l))),++s,yv)).split(yv);return{values:n,split:o,indexes:i,types:r}}function ab(t){return wa(t).values}function UM({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const a=e[s];a===DM?r+=Mo(i[s]):a===IM?r+=kt.transform(i[s]):r+=i[s]}return r}}function ob(t){return UM(wa(t))}const lb=t=>typeof t=="number"?0:kt.test(t)?kt.getAnimatableNone(t):t,cb=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:lb(t);function ub(t){const e=wa(t);return UM(e)(e.values.map((i,r)=>cb(i,e.split[r])))}const di={test:nb,parse:ab,createTransformer:ob,getAnimatableNone:ub};function Ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function db({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=Ld(l,o,t+1/3),s=Ld(l,o,t),a=Ld(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function su(t,e){return n=>n>0?e:t}const ct=(t,e,n)=>t+(e-t)*n,Dd=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},fb=[Nh,ls,sa],hb=t=>fb.find(e=>e.test(t));function _v(t){const e=hb(t);if(!e)return!1;let n=e.parse(t);return e===sa&&(n=db(n)),n}const Sv=(t,e)=>{const n=_v(t),i=_v(e);if(!n||!i)return su(t,e);const r={...n};return s=>(r.red=Dd(n.red,i.red,s),r.green=Dd(n.green,i.green,s),r.blue=Dd(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),ls.transform(r))},Lh=new Set(["none","hidden"]);function pb(t,e){return Lh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function mb(t,e){return n=>ct(t,e,n)}function ng(t){return typeof t=="number"?mb:typeof t=="string"?Qm(t)?su:kt.test(t)?Sv:xb:Array.isArray(t)?FM:typeof t=="object"?kt.test(t)?Sv:gb:su}function FM(t,e){const n=[...t],i=n.length,r=t.map((s,a)=>ng(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}}function gb(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=ng(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function vb(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],a=t.indexes[s][i[s]],o=t.values[a]??0;n[r]=o,i[s]++}return n}const xb=(t,e)=>{const n=di.createTransformer(e),i=wa(t),r=wa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Lh.has(t)&&!r.values.length||Lh.has(e)&&!i.values.length?pb(t,e):rl(FM(vb(i,r),r.values),n):su(t,e)};function OM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):ng(t)(t,e)}const yb=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ut.update(e,n),stop:()=>Br(e),now:()=>Zt.isProcessing?Zt.timestamp:hn.now()}},kM=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},au=2e4;function ig(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<au;)e+=n,i=t.next(e);return e>=au?1/0:e}function _b(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(ig(i),au);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Xn(r)}}const Ct={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Dh(t,e){return t*Math.sqrt(1-e*e)}const Sb=12;function Mb(t,e,n){let i=n;for(let r=1;r<Sb;r++)i=i-t(i)/e(i);return i}const Id=.001;function Eb({duration:t=Ct.duration,bounce:e=Ct.bounce,velocity:n=Ct.velocity,mass:i=Ct.mass}){let r,s,a=1-e;a=Ii(Ct.minDamping,Ct.maxDamping,a),t=Ii(Ct.minDuration,Ct.maxDuration,Xn(t)),a<1?(r=c=>{const u=c*a,f=u*t,d=u-n,p=Dh(c,a),v=Math.exp(-f);return Id-d/p*v},s=c=>{const f=c*a*t,d=f*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,v=Math.exp(-f),M=Dh(Math.pow(c,2),a);return(-r(c)+Id>0?-1:1)*((d-p)*v)/M}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Id+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const o=5/t,l=Mb(r,s,o);if(t=Fn(t),isNaN(l))return{stiffness:Ct.stiffness,damping:Ct.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const wb=["duration","bounce"],Tb=["stiffness","damping","mass"];function Mv(t,e){return e.some(n=>t[n]!==void 0)}function Ab(t){let e={velocity:Ct.velocity,stiffness:Ct.stiffness,damping:Ct.damping,mass:Ct.mass,isResolvedFromDuration:!1,...t};if(!Mv(t,Tb)&&Mv(t,wb))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ii(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Ct.mass,stiffness:r,damping:s}}else{const n=Eb({...t,velocity:0});e={...e,...n,mass:Ct.mass},e.isResolvedFromDuration=!0}return e}function ou(t=Ct.visualDuration,e=Ct.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=Ab({...n,velocity:-Xn(n.velocity||0)}),v=d||0,M=c/(2*Math.sqrt(l*u)),m=a-s,h=Xn(Math.sqrt(l/u)),x=Math.abs(m)<5;i||(i=x?Ct.restSpeed.granular:Ct.restSpeed.default),r||(r=x?Ct.restDelta.granular:Ct.restDelta.default);let S,_,T,w,C,y;if(M<1)T=Dh(h,M),w=(v+M*h*m)/T,S=R=>{const N=Math.exp(-M*h*R);return a-N*(w*Math.sin(T*R)+m*Math.cos(T*R))},C=M*h*w+m*T,y=M*h*m-w*T,_=R=>Math.exp(-M*h*R)*(C*Math.sin(T*R)+y*Math.cos(T*R));else if(M===1){S=N=>a-Math.exp(-h*N)*(m+(v+h*m)*N);const R=v+h*m;_=N=>Math.exp(-h*N)*(h*R*N-v)}else{const R=h*Math.sqrt(M*M-1);S=Y=>{const z=Math.exp(-M*h*Y),K=Math.min(R*Y,300);return a-z*((v+M*h*m)*Math.sinh(K)+R*m*Math.cosh(K))/R};const N=(v+M*h*m)/R,F=M*h*N-m*R,X=M*h*m-N*R;_=Y=>{const z=Math.exp(-M*h*Y),K=Math.min(R*Y,300);return z*(F*Math.sinh(K)+X*Math.cosh(K))}}const b={calculatedDuration:p&&f||null,velocity:R=>Fn(_(R)),next:R=>{if(!p&&M<1){const F=Math.exp(-M*h*R),X=Math.sin(T*R),Y=Math.cos(T*R),z=a-F*(w*X+m*Y),K=Fn(F*(C*X+y*Y));return o.done=Math.abs(K)<=i&&Math.abs(a-z)<=r,o.value=o.done?a:z,o}const N=S(R);if(p)o.done=R>=f;else{const F=Fn(_(R));o.done=Math.abs(F)<=i&&Math.abs(a-N)<=r}return o.value=o.done?a:N,o},toString:()=>{const R=Math.min(ig(b),au),N=kM(F=>b.next(R*F).value,R,30);return R+"ms "+N},toTransition:()=>{}};return b}ou.applyToOptions=t=>{const e=_b(t,100,ou);return t.ease=e.ease,t.duration=Fn(e.duration),t.type="keyframes",t};const Cb=5;function BM(t,e,n){const i=Math.max(e-Cb,0);return xM(n-t(i),e-i)}function Ih({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=y=>o!==void 0&&y<o||l!==void 0&&y>l,v=y=>o===void 0?l:l===void 0||Math.abs(o-y)<Math.abs(l-y)?o:l;let M=n*e;const m=f+M,h=a===void 0?m:a(m);h!==m&&(M=h-f);const x=y=>-M*Math.exp(-y/i),S=y=>h+x(y),_=y=>{const b=x(y),R=S(y);d.done=Math.abs(b)<=c,d.value=d.done?h:R};let T,w;const C=y=>{p(d.value)&&(T=y,w=ou({keyframes:[d.value,v(d.value)],velocity:BM(S,y,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:y=>{let b=!1;return!w&&T===void 0&&(b=!0,_(y),C(y)),T!==void 0&&y>=T?w.next(y-T):(!b&&_(y),d)}}}function bb(t,e,n){const i=[],r=n||kr.mix||OM,s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||qn:e;o=rl(l,o)}i.push(o)}return i}function Rb(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Wu(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=bb(e,i,r),l=o.length,c=u=>{if(a&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=jo(t[f],t[f+1],u);return o[f](d)};return n?u=>c(Ii(t[0],t[s-1],u)):c}function Pb(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=jo(0,e,i);t.push(ct(n,1,r))}}function Nb(t){const e=[0];return Pb(e,t.length-1),e}function Lb(t,e){return t.map(n=>n*e)}function Db(t,e){return t.map(()=>e||CM).splice(0,t.length-1)}function Eo({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=VC(i)?i.map(gv):gv(i),s={done:!1,value:e[0]},a=Lb(n&&n.length===e.length?n:Nb(e),t),o=Rb(a,e,{ease:Array.isArray(r)?r:Db(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}const Ib=t=>t!==null;function ju(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Ib),o=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}const Ub={decay:Ih,inertia:Ih,tween:Eo,keyframes:Eo,spring:ou};function zM(t){typeof t.type=="string"&&(t.type=Ub[t.type])}class rg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Fb=t=>t/100;class lu extends rg{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==hn.now()&&this.tick(hn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;zM(e);const{type:n=Eo,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=e;let{keyframes:o}=e;const l=n||Eo;l!==Eo&&typeof o[0]!="number"&&(this.mixKeyframes=rl(Fb,OM(o[0],o[1])),o=[0,100]);const c=l({...e,keyframes:o});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=ig(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:v,onUpdate:M,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let S=this.currentTime,_=i;if(f){const y=Math.min(this.currentTime,r)/o;let b=Math.floor(y),R=y%1;!R&&y>=1&&(R=1),R===1&&b--,b=Math.min(b,f+1),!!(b%2)&&(d==="reverse"?(R=1-R,p&&(R-=p/o)):d==="mirror"&&(_=a)),S=Ii(0,1,R)*o}let T;x?(this.delayState.value=u[0],T=this.delayState):T=_.next(S),s&&!x&&(T.value=s(T.value));let{done:w}=T;!x&&l!==null&&(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return C&&v!==Ih&&(T.value=ju(u,this.options,m,this.speed)),M&&M(T.value),C&&this.finish(),T}then(e,n){return this.finished.then(e,n)}get duration(){return Xn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(this.currentTime)}set time(e){e=Fn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return BM(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(hn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Xn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=yb,startTime:n}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(hn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Ob(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const cs=t=>t*180/Math.PI,Uh=t=>{const e=cs(Math.atan2(t[1],t[0]));return Fh(e)},kb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Uh,rotateZ:Uh,skewX:t=>cs(Math.atan(t[1])),skewY:t=>cs(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Fh=t=>(t=t%360,t<0&&(t+=360),t),Ev=Uh,wv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Tv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Bb={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:wv,scaleY:Tv,scale:t=>(wv(t)+Tv(t))/2,rotateX:t=>Fh(cs(Math.atan2(t[6],t[5]))),rotateY:t=>Fh(cs(Math.atan2(-t[2],t[0]))),rotateZ:Ev,rotate:Ev,skewX:t=>cs(Math.atan(t[4])),skewY:t=>cs(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Oh(t){return t.includes("scale")?1:0}function kh(t,e){if(!t||t==="none")return Oh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Bb,r=n;else{const o=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=kb,r=o}if(!r)return Oh(e);const s=i[e],a=r[1].split(",").map(Vb);return typeof s=="function"?s(a):a[s]}const zb=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return kh(n,e)};function Vb(t){return parseFloat(t.trim())}const Fa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Oa=new Set([...Fa,"pathRotation"]),Av=t=>t===Ua||t===Me,Hb=new Set(["x","y","z"]),Gb=Fa.filter(t=>!Hb.has(t));function Wb(t){const e=[];return Gb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Tr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>kh(e,"x"),y:(t,{transform:e})=>kh(e,"y")};Tr.translateX=Tr.x;Tr.translateY=Tr.y;const ps=new Set;let Bh=!1,zh=!1,Vh=!1;function VM(){if(zh){const t=Array.from(ps).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Wb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,a])=>{var o;(o=i.getValue(s))==null||o.set(a)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}zh=!1,Bh=!1,ps.forEach(t=>t.complete(Vh)),ps.clear()}function HM(){ps.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(zh=!0)})}function jb(){Vh=!0,HM(),VM(),Vh=!1}class sg{constructor(e,n,i,r,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(ps.add(this),Bh||(Bh=!0,ut.read(HM),ut.resolveKeyframes(VM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const o=i.readValue(n,a);o!=null&&(e[0]=o)}e[0]===void 0&&(e[0]=a),r&&s===void 0&&r.set(e[0])}Ob(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ps.delete(this)}cancel(){this.state==="scheduled"&&(ps.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Xb=t=>t.startsWith("--");function GM(t,e,n){Xb(e)?t.style.setProperty(e,n):t.style[e]=n}const $b={};function WM(t,e){const n=vM(t);return()=>$b[e]??n()}const qb=WM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jM=WM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),oo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Cv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oo([0,.65,.55,1]),circOut:oo([.55,0,1,.45]),backIn:oo([.31,.01,.66,-.59]),backOut:oo([.33,1.53,.69,.99])};function XM(t,e){if(t)return typeof t=="function"?jM()?kM(t,e):"ease-out":bM(t)?oo(t):Array.isArray(t)?t.map(n=>XM(n,e)||Cv.easeOut):Cv[t]}function Yb(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const f=XM(o,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function $M(t){return typeof t=="function"&&"applyToOptions"in t}function Kb({type:t,...e}){return $M(t)&&jM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class qM extends rg{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=e,Wu(typeof e.type!="string");const c=Kb(e);this.animation=Yb(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=ju(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(u),GM(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Xn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Fn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&qb()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),qn):r(this)}}const YM={anticipate:wM,backInOut:EM,circInOut:AM};function Zb(t){return t in YM}function Jb(t){typeof t.ease=="string"&&Zb(t.ease)&&(t.ease=YM[t.ease])}const Ud=10;class Qb extends qM{constructor(e){Jb(e),zM(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...a}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const o=new lu({...a,autoplay:!1}),l=Math.max(Ud,hn.now()-this.startTime),c=Ii(0,Ud,l-Ud),u=o.sample(l).value,{name:f}=this.options;s&&f&&GM(s,f,u),n.setWithVelocity(o.sample(Math.max(0,l-c)).value,u,c),o.stop()}}const bv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(di.test(t)||t==="0")&&!t.startsWith("url("));function eR(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function tR(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],a=bv(r,e),o=bv(s,e);return!a||!o?!1:eR(t)||(n==="spring"||$M(n))&&i}function Hh(t){t.duration=0,t.type="keyframes"}const KM=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),nR=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function iR(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&nR.test(t[e]))return!0;return!1}const rR=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),sR=vM(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function aR(t){var f;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:a,keyframes:o}=t,l=(f=e==null?void 0:e.owner)==null?void 0:f.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return sR()&&n&&(KM.has(n)||rR.has(n)&&iR(o))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&a!=="inertia"}const oR=40;class lR extends rg{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...f}){var v;super(),this.stop=()=>{var M,m;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=hn.now();const d={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:a,name:l,motionValue:c,element:u,...f},p=(u==null?void 0:u.KeyframeResolver)||sg;this.keyframeResolver=new p(o,(M,m,h)=>this.onKeyframesResolved(M,m,d,!h),l,c,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,x;this.keyframeResolver=void 0;const{name:s,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=hn.now();let f=!0;tR(e,s,a,o)||(f=!1,(kr.instantAnimations||!l)&&(u==null||u(ju(e,i,n))),e[0]=e[e.length-1],Hh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>oR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},v=f&&!c&&aR(p),M=(x=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:x.current;let m;if(v)try{m=new Qb({...p,element:M})}catch{m=new lu(p)}else m=new lu(p);m.finished.then(()=>{this.notifyFinished()}).catch(qn),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),jb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function ZM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),a=t.size,o=(a-1)*i;return typeof n=="function"?n(s,a):r===1?s*i:o-s*i}const Rv=30,cR=t=>!isNaN(parseFloat(t));class uR{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=hn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=hn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cR(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Km);const i=this.events[e].add(n);return e==="change"?()=>{i(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Rv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Rv);return xM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ta(t,e){return new uR(t,e)}function JM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function ag(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?JM(n,t):n}const dR={type:"spring",stiffness:500,damping:25,restSpeed:10},fR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),hR={type:"keyframes",duration:.8},pR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mR=(t,{keyframes:e})=>e.length>2?hR:Oa.has(t)?t.startsWith("scale")?fR(e[1]):dR:pR,gR=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vR(t){for(const e in t)if(!gR.has(e))return!0;return!1}const og=(t,e,n,i={},r,s)=>a=>{const o=ag(i,t)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Fn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:d=>{e.set(d),o.onUpdate&&o.onUpdate(d)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:r};vR(o)||Object.assign(u,mR(t,u)),u.duration&&(u.duration=Fn(u.duration)),u.repeatDelay&&(u.repeatDelay=Fn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Hh(u),u.delay===0&&(f=!0)),(kr.instantAnimations||kr.skipAnimations||r!=null&&r.shouldSkipAnimations||o.skipAnimations)&&(f=!0,Hh(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,f&&!s&&e.get()!==void 0){const d=ju(u.keyframes,o);if(d!==void 0){ut.update(()=>{u.onUpdate(d),u.onComplete()});return}}return o.isSync?new lu(u):new lR(u)},xR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yR(t){const e=xR.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function QM(t,e,n=1){const[i,r]=yR(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return pM(a)?parseFloat(a):a}return Qm(r)?QM(r,e,n+1):r}function Pv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function lg(t,e,n,i){if(typeof e=="function"){const[r,s]=Pv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Pv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ms(t,e,n){const i=t.getProps();return lg(i,e,n!==void 0?n:i.custom,t)}const e1=new Set(["width","height","top","left","right","bottom",...Fa]),Gh=t=>Array.isArray(t);function _R(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ta(n))}function SR(t){return Gh(t)?t[t.length-1]||0:t}function MR(t,e){const n=ms(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const a in s){const o=SR(s[a]);_R(t,a,o)}}const Jt=t=>!!(t&&t.getVelocity);function ER(t){return!!(Jt(t)&&t.add)}function Wh(t,e){const n=t.getValue("willChange");if(ER(n))return n.add(e);if(!n&&kr.WillChange){const i=new kr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function cg(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const wR="framerAppearId",t1="data-"+cg(wR);function n1(t){return t.props[t1]}function TR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function i1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:a,...o}=e;const l=t.getDefaultTransition();s=s?JM(s,l):l;const c=s==null?void 0:s.reduceMotion,u=s==null?void 0:s.skipAnimations;i&&(s=i);const f=[],d=r&&t.animationState&&t.animationState.getState()[r],p=s==null?void 0:s.path;p&&p.animateVisualElement(t,o,s,n,f);for(const v in o){const M=t.getValue(v,t.latestValues[v]??null),m=o[v];if(m===void 0||d&&TR(d,v))continue;const h={delay:n,...ag(s||{},v)};u&&(h.skipAnimations=!0);const x=M.get();if(x!==void 0&&!M.isAnimating()&&!Array.isArray(m)&&m===x&&!h.velocity){ut.update(()=>M.set(m));continue}let S=!1;if(window.MotionHandoffAnimation){const w=n1(t);if(w){const C=window.MotionHandoffAnimation(w,v,ut);C!==null&&(h.startTime=C,S=!0)}}Wh(t,v);const _=c??t.shouldReduceMotion;M.start(og(v,M,m,_&&e1.has(v)?{type:!1}:h,t,S));const T=M.animation;T&&f.push(T)}if(a){const v=()=>ut.update(()=>{a&&MR(t,a)});f.length?Promise.all(f).then(v):v()}return f}function jh(t,e,n={}){var l;const i=ms(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(i1(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return AR(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:o}=r;if(o){const[c,u]=o==="beforeChildren"?[s,a]:[a,s];return c().then(()=>u())}else return Promise.all([s(),a(n.delay)])}function AR(t,e,n=0,i=0,r=0,s=1,a){const o=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),o.push(jh(l,e,{...a,delay:n+(typeof i=="function"?0:i)+ZM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(o)}function CR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>jh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=jh(t,e,n);else{const r=typeof e=="function"?ms(t,e,n.custom):e;i=Promise.all(i1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const bR={test:t=>t==="auto",parse:t=>t},r1=t=>e=>e.test(t),s1=[Ua,Me,Pi,Hi,eb,QC,bR],Nv=t=>s1.find(r1(t));function RR(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||gM(t):!0}const PR=new Set(["brightness","contrast","saturate","opacity"]);function NR(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(eg)||[];if(!i)return t;const r=n.replace(i,"");let s=PR.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const LR=/\b([a-z-]*)\(.*?\)/gu,Xh={...di,getAnimatableNone:t=>{const e=t.match(LR);return e?e.map(NR).join(" "):t}},$h={...di,getAnimatableNone:t=>{const e=di.parse(t);return di.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Lv={...Ua,transform:Math.round},DR={rotate:Hi,pathRotation:Hi,rotateX:Hi,rotateY:Hi,rotateZ:Hi,scale:Ll,scaleX:Ll,scaleY:Ll,scaleZ:Ll,skew:Hi,skewX:Hi,skewY:Hi,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Xo,originX:xv,originY:xv,originZ:Me},cu={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,inset:Me,insetBlock:Me,insetBlockStart:Me,insetBlockEnd:Me,insetInline:Me,insetInlineStart:Me,insetInlineEnd:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,paddingBlock:Me,paddingBlockStart:Me,paddingBlockEnd:Me,paddingInline:Me,paddingInlineStart:Me,paddingInlineEnd:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,marginBlock:Me,marginBlockStart:Me,marginBlockEnd:Me,marginInline:Me,marginInlineStart:Me,marginInlineEnd:Me,fontSize:Me,backgroundPositionX:Me,backgroundPositionY:Me,...DR,zIndex:Lv,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:Lv},IR={...cu,color:kt,backgroundColor:kt,outlineColor:kt,fill:kt,stroke:kt,borderColor:kt,borderTopColor:kt,borderRightColor:kt,borderBottomColor:kt,borderLeftColor:kt,filter:Xh,WebkitFilter:Xh,mask:$h,WebkitMask:$h},a1=t=>IR[t],UR=new Set([Xh,$h]);function o1(t,e){let n=a1(t);return UR.has(n)||(n=di),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const FR=new Set(["auto","none","0"]);function OR(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!FR.has(s)&&wa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=o1(n,r)}class kR extends sg{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let f=e[u];if(typeof f=="string"&&(f=f.trim(),Qm(f))){const d=QM(f,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!e1.has(i)||e.length!==2)return;const[r,s]=e,a=Nv(r),o=Nv(s),l=vv(r),c=vv(s);if(l!==c&&Tr[i]){this.needsMeasurement=!0;return}if(a!==o)if(Av(a)&&Av(o))for(let u=0;u<e.length;u++){const f=e[u];typeof f=="string"&&(e[u]=parseFloat(f))}else Tr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||RR(e[r]))&&i.push(r);i.length&&OR(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var o;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Tr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ug=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function l1(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const qh=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function vc(t){return mM(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:dg}=RM(queueMicrotask,!1),ii={x:!1,y:!1};function c1(){return ii.x||ii.y}function BR(t){return t==="x"||t==="y"?ii[t]?null:(ii[t]=!0,()=>{ii[t]=!1}):ii.x||ii.y?null:(ii.x=ii.y=!0,()=>{ii.x=ii.y=!1})}function u1(t,e){const n=l1(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function zR(t){return!(t.pointerType==="touch"||c1())}function VR(t,e,n={}){const[i,r,s]=u1(t,n);return i.forEach(a=>{let o=!1,l=!1,c;const u=()=>{a.removeEventListener("pointerleave",v)},f=m=>{c&&(c(m),c=void 0),u()},d=m=>{o=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,f(m))},p=()=>{o=!0,window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",d,r)},v=m=>{if(m.pointerType!=="touch"){if(o){l=!0;return}f(m)}},M=m=>{if(!zR(m))return;l=!1;const h=e(a,m);typeof h=="function"&&(c=h,a.addEventListener("pointerleave",v,r))};a.addEventListener("pointerenter",M,r),a.addEventListener("pointerdown",p,r)}),s}const d1=(t,e)=>e?t===e?!0:d1(t,e.parentElement):!1,fg=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,HR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function GR(t){return HR.has(t.tagName)||t.isContentEditable===!0}const WR=new Set(["INPUT","SELECT","TEXTAREA"]);function jR(t){return WR.has(t.tagName)||t.isContentEditable===!0}const xc=new WeakSet;function Dv(t){return e=>{e.key==="Enter"&&t(e)}}function Fd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const XR=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Dv(()=>{if(xc.has(n))return;Fd(n,"down");const r=Dv(()=>{Fd(n,"up")}),s=()=>Fd(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Iv(t){return fg(t)&&!c1()}const Uv=new WeakSet;function $R(t,e,n={}){const[i,r,s]=u1(t,n),a=o=>{const l=o.currentTarget;if(!Iv(o)||Uv.has(o))return;xc.add(l),n.stopPropagation&&Uv.add(o);const c=e(l,o),u={...r,capture:!0},f=(v,M)=>{window.removeEventListener("pointerup",d,u),window.removeEventListener("pointercancel",p,u),xc.has(l)&&xc.delete(l),Iv(v)&&typeof c=="function"&&c(v,{success:M})},d=v=>{f(v,l===window||l===document||n.useGlobalTarget||d1(l,v.target))},p=v=>{f(v,!1)};window.addEventListener("pointerup",d,u),window.addEventListener("pointercancel",p,u)};return i.forEach(o=>{(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),vc(o)&&(o.addEventListener("focus",c=>XR(c,r)),!GR(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),s}function hg(t){return mM(t)&&"ownerSVGElement"in t}const yc=new WeakMap;let gr;const f1=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:hg(i)&&"getBBox"in i?i.getBBox()[e]:i[n],qR=f1("inline","width","offsetWidth"),YR=f1("block","height","offsetHeight");function KR({target:t,borderBoxSize:e}){var n;(n=yc.get(t))==null||n.forEach(i=>{i(t,{get width(){return qR(t,e)},get height(){return YR(t,e)}})})}function ZR(t){t.forEach(KR)}function JR(){typeof ResizeObserver>"u"||(gr=new ResizeObserver(ZR))}function QR(t,e){gr||JR();const n=l1(t);return n.forEach(i=>{let r=yc.get(i);r||(r=new Set,yc.set(i,r)),r.add(e),gr==null||gr.observe(i)}),()=>{n.forEach(i=>{const r=yc.get(i);r==null||r.delete(e),r!=null&&r.size||gr==null||gr.unobserve(i)})}}const _c=new Set;let aa;function eP(){aa=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};_c.forEach(e=>e(t))},window.addEventListener("resize",aa)}function tP(t){return _c.add(t),aa||eP(),()=>{_c.delete(t),!_c.size&&typeof aa=="function"&&(window.removeEventListener("resize",aa),aa=void 0)}}function Fv(t,e){return typeof t=="function"?tP(t):QR(t,e)}function nP(t){return hg(t)&&t.tagName==="svg"}const iP=[...s1,kt,di],rP=t=>iP.find(r1(t)),Ov=()=>({translate:0,scale:1,origin:0,originPoint:0}),oa=()=>({x:Ov(),y:Ov()}),kv=()=>({min:0,max:0}),Vt=()=>({x:kv(),y:kv()}),sP=new WeakMap;function Xu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function $o(t){return typeof t=="string"||Array.isArray(t)}const pg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],mg=["initial",...pg];function $u(t){return Xu(t.animate)||mg.some(e=>$o(t[e]))}function h1(t){return!!($u(t)||t.variants)}function aP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Jt(r))t.addValue(i,r);else if(Jt(s))t.addValue(i,Ta(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const a=t.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(i);t.addValue(i,Ta(a!==void 0?a:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Yh={current:null},p1={current:!1},oP=typeof window<"u";function lP(){if(p1.current=!0,!!oP)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Yh.current=t.matches;t.addEventListener("change",e),e()}else Yh.current=!1}const Bv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let uu={};function m1(t){uu=t}function cP(){return uu}class uP{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=sg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=hn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ut.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=$u(n),this.isVariantNode=h1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const v=d[p];c[p]!==void 0&&Jt(v)&&v.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,sP.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(p1.current||lP(),this.shouldReduceMotion=Yh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Br(this.notifyUpdate),Br(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&KM.has(e)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:c,duration:u}=n.accelerate,f=new qM({element:this.current,name:e,keyframes:o,times:l,ease:c,duration:Fn(u)}),d=a(f);this.valueSubscriptions.set(e,()=>{d(),f.cancel()});return}const i=Oa.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in uu){const n=uu[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Vt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Bv.length;i++){const r=Bv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=aP(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ta(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(pM(i)||gM(i))?i=parseFloat(i):!rP(i)&&di.test(n)&&(i=o1(e,n)),this.setBaseTarget(e,Jt(i)?i.get():i)),Jt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const a=lg(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);a&&(i=a[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Jt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Km),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){dg.render(this.render)}}class g1 extends uP{constructor(){super(...arguments),this.KeyframeResolver=kR}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Jt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Xr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function v1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function dP({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function fP(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Od(t){return t===void 0||t===1}function Kh({scale:t,scaleX:e,scaleY:n}){return!Od(t)||!Od(e)||!Od(n)}function ts(t){return Kh(t)||x1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function x1(t){return zv(t.x)||zv(t.y)}function zv(t){return t&&t!=="0%"}function du(t,e,n){const i=t-n,r=e*i;return n+r}function Vv(t,e,n,i,r){return r!==void 0&&(t=du(t,r,i)),du(t,n,i)+e}function Zh(t,e=0,n=1,i,r){t.min=Vv(t.min,e,n,i,r),t.max=Vv(t.max,e,n,i,r)}function y1(t,{x:e,y:n}){Zh(t.x,e.translate,e.scale,e.originPoint),Zh(t.y,n.translate,n.scale,n.originPoint)}const Hv=.999999999999,Gv=1.0000000000001;function hP(t,e,n,i=!1){var o;const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let l=0;l<r;l++){s=n[l],a=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Si(t.x,-s.scroll.offset.x),Si(t.y,-s.scroll.offset.y)),a&&(e.x*=a.x.scale,e.y*=a.y.scale,y1(t,a)),i&&ts(s.latestValues)&&Sc(t,s.latestValues,(o=s.layout)==null?void 0:o.layoutBox))}e.x<Gv&&e.x>Hv&&(e.x=1),e.y<Gv&&e.y>Hv&&(e.y=1)}function Si(t,e){t.min+=e,t.max+=e}function Wv(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Zh(t,e,n,s,i)}function jv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Sc(t,e,n){const i=n??t;Wv(t.x,jv(e.x,i.x),e.scaleX,e.scale,e.originX),Wv(t.y,jv(e.y,i.y),e.scaleY,e.scale,e.originY)}function _1(t,e){return v1(fP(t.getBoundingClientRect(),e))}function pP(t,e,n){const i=_1(t,n),{scroll:r}=e;return r&&(Si(i.x,r.offset.x),Si(i.y,r.offset.y)),i}const mP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gP=Fa.length;function vP(t,e,n){let i="",r=!0;for(let a=0;a<gP;a++){const o=Fa[a],l=t[o];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(o.startsWith("scale")?1:0);else{const u=parseFloat(l);c=o.startsWith("scale")?u===1:u===0}if(!c||n){const u=qh(l,cu[o]);if(!c){r=!1;const f=mP[o]||o;i+=`${f}(${u}) `}n&&(e[o]=u)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${qh(s,cu.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function gg(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let a=!1,o=!1;for(const l in e){const c=e[l];if(Oa.has(l)){a=!0;continue}else if(NM(l)){r[l]=c;continue}else{const u=qh(c,cu[l]);l.startsWith("origin")?(o=!0,s[l]=u):i[l]=u}}if(e.transform||(a||n?i.transform=vP(e,t.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function S1(t,{style:e,vars:n},i,r){const s=t.style;let a;for(a in e)s[a]=e[a];r==null||r.applyProjectionStyles(s,i);for(a in n)s.setProperty(a,n[a])}function Xv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ya={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=Xv(t,e.target.x),i=Xv(t,e.target.y);return`${n}% ${i}%`}},xP={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=di.parse(t);if(r.length>5)return i;const s=di.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=ct(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}},Jh={borderRadius:{...Ya,applyTo:[...ug]},borderTopLeftRadius:Ya,borderTopRightRadius:Ya,borderBottomLeftRadius:Ya,borderBottomRightRadius:Ya,boxShadow:xP};function M1(t,{layout:e,layoutId:n}){return Oa.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Jh[t]||t==="opacity")}function vg(t,e,n){var a;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const o in i)(Jt(i[o])||r&&Jt(r[o])||M1(o,t)||((a=n==null?void 0:n.getValue(o))==null?void 0:a.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function yP(t){return window.getComputedStyle(t)}class _P extends g1{constructor(){super(...arguments),this.type="html",this.renderInstance=S1}mount(e){Wu(!!e.style),super.mount(e)}readValueFromInstance(e,n){var i;if(Oa.has(n))return(i=this.projection)!=null&&i.isProjecting?Oh(n):zb(e,n);{const r=yP(e),s=(NM(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return _1(e,n)}build(e,n,i){gg(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return vg(e,n,i)}}const SP={offset:"stroke-dashoffset",array:"stroke-dasharray"},MP={offset:"strokeDashoffset",array:"strokeDasharray"};function EP(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?SP:MP;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const E1=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function w1(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:a=0,...o},l,c,u){if(gg(t,o,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:d}=t;for(const p of E1)f[p]!==void 0&&(d[p]=f[p],delete f[p]);(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&EP(f,r,s,a,!1)}const T1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),A1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function wP(t,e,n,i){S1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(T1.has(r)?r:cg(r),e.attrs[r])}function C1(t,e,n){const i=vg(t,e,n);for(const r in t)if(Jt(t[r])||Jt(e[r])){const s=Fa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class TP extends g1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Vt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Oa.has(n)){const i=a1(n);return i&&i.default||0}if(E1.includes(n)){const r=getComputedStyle(e)[n];if(typeof r=="string"&&r)return r.trim()}return n=T1.has(n)?n:cg(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return C1(e,n,i)}build(e,n,i){w1(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){wP(e,n,i,r)}mount(e){this.isSVGTag=A1(e.tagName),super.mount(e)}}const AP=mg.length;function b1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?b1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<AP;n++){const i=mg[n],r=t.props[i];($o(r)||r===!1)&&(e[i]=r)}return e}function R1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const CP=[...pg].reverse(),bP=pg.length;function RP(t){return e=>Promise.all(e.map(({animation:n,options:i})=>CR(t,n,i)))}function PP(t){let e=RP(t),n=$v(),i=!0,r=!1;const s=c=>(u,f)=>{var p;const d=ms(t,f,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(d){const{transition:v,transitionEnd:M,...m}=d;u={...u,...m,...M}}return u};function a(c){e=c(t)}function o(c){const{props:u}=t,f=b1(t.parent)||{},d=[],p=new Set;let v={},M=1/0;for(let h=0;h<bP;h++){const x=CP[h],S=n[x],_=u[x]!==void 0?u[x]:f[x],T=$o(_),w=x===c?S.isActive:null;w===!1&&(M=h);let C=_===f[x]&&_!==u[x]&&T;if(C&&(i||r)&&t.manuallyAnimateOnMount&&(C=!1),S.protectedKeys={...v},!S.isActive&&w===null||!_&&!S.prevProp||Xu(_)||typeof _=="boolean")continue;if(x==="exit"&&S.isActive&&w!==!0){S.prevResolvedValues&&(v={...v,...S.prevResolvedValues});continue}const y=NP(S.prevProp,_);let b=y||x===c&&S.isActive&&!C&&T||h>M&&T,R=!1;const N=Array.isArray(_)?_:[_];let F=N.reduce(s(x),{});w===!1&&(F={});const{prevResolvedValues:X={}}=S,Y={...X,...F},z=U=>{b=!0,p.has(U)&&(R=!0,p.delete(U)),S.needsAnimating[U]=!0;const D=t.getValue(U);D&&(D.liveStyle=!1)};for(const U in Y){const D=F[U],q=X[U];if(v.hasOwnProperty(U))continue;let ie=!1;Gh(D)&&Gh(q)?ie=!R1(D,q)||y:ie=D!==q,ie?D!=null?z(U):p.add(U):D!==void 0&&p.has(U)?z(U):S.protectedKeys[U]=!0}S.prevProp=_,S.prevResolvedValues=F,S.isActive&&(v={...v,...F}),(i||r)&&t.blockInitialAnimation&&(b=!1);const K=C&&y;b&&(!K||R)&&d.push(...N.map(U=>{const D={type:x};if(typeof U=="string"&&(i||r)&&!K&&t.manuallyAnimateOnMount&&t.parent){const{parent:q}=t,ie=ms(q,U);if(q.enteringChildren&&ie){const{delayChildren:oe}=ie.transition||{};D.delay=ZM(q.enteringChildren,t,oe)}}return{animation:U,options:D}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const x=ms(t,Array.isArray(u.initial)?u.initial[0]:u.initial);x&&x.transition&&(h.transition=x.transition)}p.forEach(x=>{const S=t.getBaseTarget(x),_=t.getValue(x);_&&(_.liveStyle=!0),h[x]=S??null}),d.push({animation:h})}let m=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,r=!1,m?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(p=>{var v;return(v=p.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const f=o(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=$v(),r=!0}}}function NP(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!R1(e,t):!1}function qr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $v(){return{animate:qr(!0),whileInView:qr(),whileHover:qr(),whileTap:qr(),whileDrag:qr(),whileFocus:qr(),exit:qr()}}function Qh(t,e){t.min=e.min,t.max=e.max}function Qn(t,e){Qh(t.x,e.x),Qh(t.y,e.y)}function qv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const P1=1e-4,LP=1-P1,DP=1+P1,N1=.01,IP=0-N1,UP=0+N1;function pn(t){return t.max-t.min}function FP(t,e,n){return Math.abs(t-e)<=n}function Yv(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=pn(n)/pn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=LP&&t.scale<=DP||isNaN(t.scale))&&(t.scale=1),(t.translate>=IP&&t.translate<=UP||isNaN(t.translate))&&(t.translate=0)}function wo(t,e,n,i){Yv(t.x,e.x,n.x,i?i.originX:void 0),Yv(t.y,e.y,n.y,i?i.originY:void 0)}function Kv(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+pn(e)}function OP(t,e,n,i){Kv(t.x,e.x,n.x,i==null?void 0:i.x),Kv(t.y,e.y,n.y,i==null?void 0:i.y)}function Zv(t,e,n,i=0){const r=i?ct(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+pn(e)}function fu(t,e,n,i){Zv(t.x,e.x,n.x,i==null?void 0:i.x),Zv(t.y,e.y,n.y,i==null?void 0:i.y)}function Jv(t,e,n,i,r){return t-=e,t=du(t,1/n,i),r!==void 0&&(t=du(t,1/r,i)),t}function kP(t,e=0,n=1,i=.5,r,s=t,a=t){if(Pi.test(e)&&(e=parseFloat(e),e=ct(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=ct(s.min,s.max,i);t===s&&(o-=e),t.min=Jv(t.min,e,n,o,r),t.max=Jv(t.max,e,n,o,r)}function Qv(t,e,[n,i,r],s,a){kP(t,e[n],e[i],e[r],e.scale,s,a)}const BP=["x","scaleX","originX"],zP=["y","scaleY","originY"];function ex(t,e,n,i){Qv(t.x,e,BP,n?n.x:void 0,i?i.x:void 0),Qv(t.y,e,zP,n?n.y:void 0,i?i.y:void 0)}function tx(t){return t.translate===0&&t.scale===1}function L1(t){return tx(t.x)&&tx(t.y)}function nx(t,e){return t.min===e.min&&t.max===e.max}function VP(t,e){return nx(t.x,e.x)&&nx(t.y,e.y)}function ix(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function D1(t,e){return ix(t.x,e.x)&&ix(t.y,e.y)}function rx(t){return pn(t.x)/pn(t.y)}function sx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function _i(t){return[t("x"),t("y")]}function HP(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,a=(n==null?void 0:n.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,pathRotation:f,rotateX:d,rotateY:p,skewX:v,skewY:M}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotateX(${d}deg) `),p&&(i+=`rotateY(${p}deg) `),v&&(i+=`skewX(${v}deg) `),M&&(i+=`skewY(${M}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const GP=ug.length,ax=t=>typeof t=="string"?parseFloat(t):t,ox=t=>typeof t=="number"||Me.test(t);function WP(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity??1,jP(i)),t.opacityExit=ct(e.opacity??1,0,XP(i))):s&&(t.opacity=ct(e.opacity??1,n.opacity??1,i));for(let a=0;a<GP;a++){const o=ug[a];let l=lx(e,o),c=lx(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ox(l)===ox(c)?(t[o]=Math.max(ct(ax(l),ax(c),i),0),(Pi.test(c)||Pi.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function lx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const jP=I1(0,.5,TM),XP=I1(.5,.95,qn);function I1(t,e,n){return i=>i<t?0:i>e?1:n(jo(t,e,i))}function $P(t,e,n){const i=Jt(t)?t:Ta(t);return i.start(og("",i,e,n)),i.animation}function qo(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const qP=(t,e)=>t.depth-e.depth;class YP{constructor(){this.children=[],this.isDirty=!1}add(e){Ym(this.children,e),this.isDirty=!0}remove(e){ru(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(qP),this.isDirty=!1,this.children.forEach(e)}}function KP(t,e){const n=hn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Br(i),t(s-e))};return ut.setup(i,!0),()=>Br(i)}function Mc(t){return Jt(t)?t.get():t}class ZP{constructor(){this.members=[]}add(e){Ym(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(ru(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(ru(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:a}=e.options;(s===void 0||s!==a)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,a;(i=(n=e.options).onExitComplete)==null||i.call(n),(a=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||a.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ec={hasAnimatedSinceResize:!0,hasEverUpdated:!1},kd=["","X","Y","Z"],JP=1e3;let QP=0;function Bd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function U1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=n1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ut,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&U1(i)}function F1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=QP++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(n2),this.nodes.forEach(l2),this.nodes.forEach(c2),this.nodes.forEach(i2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new YP)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Km),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=hg(a)&&!nP(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),t){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;ut.read(()=>{f=window.innerWidth}),t(a,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=KP(d,250),Ec.hasAnimatedSinceResize&&(Ec.hasAnimatedSinceResize=!1,this.nodes.forEach(dx)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||p2,{onLayoutAnimationStart:M,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!D1(this.targetLayout,p),x=!f&&d;if(this.options.layoutRoot||this.resumeFrom||x||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...ag(v,"layout"),onPlay:M,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(u,x,S.path)}else f||dx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Br(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(u2),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&U1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(s2),this.nodes.forEach(cx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ux);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(a2),this.nodes.forEach(o2),this.nodes.forEach(e2),this.nodes.forEach(t2)):this.nodes.forEach(ux),this.clearAllSnapshots();const o=hn.now();Zt.delta=Ii(0,1e3/60,o-Zt.timestamp),Zt.timestamp=o,Zt.isProcessing=!0,Pd.update.process(Zt),Pd.preRender.process(Zt),Pd.render.process(Zt),Zt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r2),this.sharedNodes.forEach(d2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pn(this.snapshot.measuredBox.x)&&!pn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Vt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!L1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||ts(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),m2(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:a}=this.options;if(!a)return Vt();const o=a.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(g2))){const{scroll:u}=this.root;u&&(Si(o.x,u.offset.x),Si(o.y,u.offset.y))}return o}removeElementScroll(a){var l;const o=Vt();if(Qn(o,a),(l=this.scroll)!=null&&l.wasRoot)return o;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Qn(o,a),Si(o.x,f.offset.x),Si(o.y,f.offset.y))}return o}applyTransform(a,o=!1,l){var u,f;const c=l||Vt();Qn(c,a);for(let d=0;d<this.path.length;d++){const p=this.path[d];!o&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Si(c.x,-p.scroll.offset.x),Si(c.y,-p.scroll.offset.y)),ts(p.latestValues)&&Sc(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return ts(this.latestValues)&&Sc(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(a){var l;const o=Vt();Qn(o,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!ts(u.latestValues))continue;let f;u.instance&&(Kh(u.latestValues)&&u.updateSnapshot(),f=Vt(),Qn(f,u.measurePageBox())),ex(o,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,f)}return ts(this.latestValues)&&ex(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Zt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var p;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=Zt.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Vt(),this.targetWithTransforms=Vt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),OP(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Qn(this.target,this.layout.layoutBox),y1(this.target,this.targetDelta)):Qn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Kh(this.parent.latestValues)||x1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Vt(),this.relativeTargetOrigin=Vt(),fu(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),Qn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Zt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Qn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;hP(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Vt());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qv(this.prevProjectionDelta.x,this.projectionDelta.x),qv(this.prevProjectionDelta.y,this.projectionDelta.y)),wo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!sx(this.projectionDelta.x,this.prevProjectionDelta.x)||!sx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oa(),this.projectionDelta=oa(),this.projectionDeltaWithTransform=oa()}setAnimationOrigin(a,o=!1,l){const c=this.snapshot,u=c?c.latestValues:{},f={...this.latestValues},d=oa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const p=Vt(),v=c?c.source:void 0,M=this.layout?this.layout.source:void 0,m=v!==M,h=this.getStack(),x=!h||h.members.length<=1,S=!!(m&&!x&&this.options.crossfade===!0&&!this.path.some(h2));this.animationProgress=0;let _;const T=l==null?void 0:l.interpolateProjection(a);this.mixTargetDelta=w=>{const C=w/1e3,y=T==null?void 0:T(C);y?(d.x.translate=y.x,d.x.scale=ct(a.x.scale,1,C),d.x.origin=a.x.origin,d.x.originPoint=a.x.originPoint,d.y.translate=y.y,d.y.scale=ct(a.y.scale,1,C),d.y.origin=a.y.origin,d.y.originPoint=a.y.originPoint):(fx(d.x,a.x,C),fx(d.y,a.y,C)),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fu(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),f2(this.relativeTarget,this.relativeTargetOrigin,p,C),_&&VP(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Vt()),Qn(_,this.relativeTarget)),m&&(this.animationValues=f,WP(f,u,this.latestValues,C,S,x)),y&&y.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=y.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var o,l,c;this.notifyListeners("animationStart"),(o=this.currentAnimation)==null||o.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Br(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{Ec.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ta(0)),this.motionValue.jump(0,!1),this.currentAnimation=$P(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(JP),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&O1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Vt();const f=pn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const d=pn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+d}Qn(o,l),Sc(o,u),wo(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new ZP),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&Bd("z",a,c,this.animationValues);for(let u=0;u<kd.length;u++)Bd(`rotate${kd[u]}`,a,c,this.animationValues),Bd(`skew${kd[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Mc(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Mc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ts(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=HP(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),a.transform=f;const{x:d,y:p}=this.projectionDelta;a.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const v in Jh){if(u[v]===void 0)continue;const{correct:M,applyTo:m,isCSSVariable:h}=Jh[v],x=f==="none"?u[v]:M(u[v],c);if(m){const S=m.length;for(let _=0;_<S;_++)a[m[_]]=x}else h?this.options.visualElement.renderState.vars[v]=x:a[v]=x}this.options.layoutId&&(a.pointerEvents=c===this?Mc(o==null?void 0:o.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(cx),this.root.sharedNodes.clear()}}}function e2(t){t.updateLayout()}function t2(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=e.source!==t.layout.source;if(s==="size")_i(f=>{const d=a?e.measuredBox[f]:e.layoutBox[f],p=pn(d);d.min=i[f].min,d.max=d.min+p});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";Qh(a?e.measuredBox[f]:e.layoutBox[f],i[f])}else O1(s,e.layoutBox,i)&&_i(f=>{const d=a?e.measuredBox[f]:e.layoutBox[f],p=pn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const o=oa();wo(o,i,e.layoutBox);const l=oa();a?wo(l,t.applyTransform(r,!0),e.measuredBox):wo(l,i,e.layoutBox);const c=!L1(o);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const v=t.options.layoutAnchor||void 0,M=Vt();fu(M,e.layoutBox,d.layoutBox,v);const m=Vt();fu(m,i,p.layoutBox,v),D1(M,m)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=M,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function n2(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function i2(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function r2(t){t.clearSnapshot()}function cx(t){t.clearMeasurements()}function s2(t){t.isLayoutDirty=!0,t.updateLayout()}function ux(t){t.isLayoutDirty=!1}function a2(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function o2(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function dx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function l2(t){t.resolveTargetDelta()}function c2(t){t.calcProjection()}function u2(t){t.resetSkewAndRotation()}function d2(t){t.removeLeadSnapshot()}function fx(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function hx(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function f2(t,e,n,i){hx(t.x,e.x,n.x,i),hx(t.y,e.y,n.y,i)}function h2(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const p2={duration:.45,ease:[.4,0,.1,1]},px=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),mx=px("applewebkit/")&&!px("chrome/")?Math.round:qn;function gx(t){t.min=mx(t.min),t.max=mx(t.max)}function m2(t){gx(t.x),gx(t.y)}function O1(t,e,n){return t==="position"||t==="preserve-aspect"&&!FP(rx(e),rx(n),.2)}function g2(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const v2=F1({attachResizeListener:(t,e)=>qo(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),zd={current:void 0},k1=F1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zd.current){const t=new v2({});t.mount(window),t.setOptions({layoutScroll:!0}),zd.current=t}return zd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),xg=L.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function vx(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function x2(...t){return e=>{let n=!1;const i=t.map(r=>{const s=vx(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():vx(t[r],null)}}}}function y2(...t){return L.useCallback(x2(...t),t)}class _2 extends L.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(vc(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=vc(i)&&i.offsetWidth||0,s=vc(i)&&i.offsetHeight||0,a=getComputedStyle(n),o=this.props.sizeRef.current;o.height=parseFloat(a.height),o.width=parseFloat(a.width),o.top=n.offsetTop,o.left=n.offsetLeft,o.right=r-o.width-o.left,o.bottom=s-o.height-o.top,o.direction=a.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function S2({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var d;const a=L.useId(),o=L.useRef(null),l=L.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=L.useContext(xg),u=s!==!1?((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref):void 0,f=y2(o,u);return L.useInsertionEffect(()=>{const{width:p,height:v,top:M,left:m,right:h,bottom:x,direction:S}=l.current;if(e||s===!1||!o.current||!p||!v)return;const _=S==="rtl",T=n==="left"?_?`right: ${h}`:`left: ${m}`:_?`left: ${m}`:`right: ${h}`,w=i==="bottom"?`bottom: ${x}`:`top: ${M}`;o.current.dataset.motionPopId=a;const C=document.createElement("style");c&&(C.nonce=c);const y=r??document.head;return y.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${v}px !important;
            ${T}px !important;
            ${w}px !important;
          }
        `),()=>{var b;(b=o.current)==null||b.removeAttribute("data-motion-pop-id"),y.contains(C)&&y.removeChild(C)}},[e]),g.jsx(_2,{isPresent:e,childRef:o,sizeRef:l,pop:s,children:s===!1?t:L.cloneElement(t,{ref:f})})}const M2=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a,anchorX:o,anchorY:l,root:c})=>{const u=qm(E2),f=L.useId(),d=L.useRef(n),p=L.useRef(i);iu(()=>{d.current=n,p.current=i});let v=!0,M=L.useMemo(()=>(v=!1,{id:f,initial:e,isPresent:n,custom:r,onExitComplete:m=>{u.set(m,!0);for(const h of u.values())if(!h)return;i&&i()},register:m=>(u.set(m,!1),()=>{var h;u.delete(m),!d.current&&!u.size&&((h=p.current)==null||h.call(p))})}),[n,u,i]);return s&&v&&(M={...M}),L.useMemo(()=>{u.forEach((m,h)=>u.set(h,!1))},[n]),L.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=g.jsx(S2,{pop:a==="popLayout",isPresent:n,anchorX:o,anchorY:l,root:c,children:t}),g.jsx(Gu.Provider,{value:M,children:t})};function E2(){return new Map}function B1(t=!0){const e=L.useContext(Gu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=L.useId();L.useEffect(()=>{if(t)return r(s)},[t]);const a=L.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,a]:[!0]}const Dl=t=>t.key||"";function xx(t){const e=[];return L.Children.forEach(t,n=>{L.isValidElement(n)&&e.push(n)}),e}const wc=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1,anchorX:o="left",anchorY:l="top",root:c})=>{const[u,f]=B1(a),d=L.useMemo(()=>xx(t),[t]),p=a&&!u?[]:d.map(Dl),v=L.useRef(!0),M=L.useRef(d),m=qm(()=>new Map),h=L.useRef(new Set),[x,S]=L.useState(d),[_,T]=L.useState(d);iu(()=>{a&&!u&&!_.length&&(f==null||f())},[u,a,_.length,f]),iu(()=>{v.current=!1,M.current=d;for(let y=0;y<_.length;y++){const b=Dl(_[y]);p.includes(b)?(m.delete(b),h.current.delete(b)):m.get(b)!==!0&&m.set(b,!1)}},[_,p.length,p.join("-")]);const w=[];if(d!==x){let y=[...d];for(let b=0;b<_.length;b++){const R=_[b],N=Dl(R);p.includes(N)||(y.splice(b,0,R),w.push(R))}return s==="wait"&&w.length&&(y=w),T(xx(y)),S(d),null}const{forceRender:C}=L.useContext($m);return g.jsx(g.Fragment,{children:_.map(y=>{const b=Dl(y),R=a&&!u?!1:d===_||p.includes(b),N=()=>{if(h.current.has(b))return;if(m.has(b))h.current.add(b),m.set(b,!0);else return;let F=!0;m.forEach(X=>{X||(F=!1)}),F&&(C==null||C(),T(M.current),a&&(f==null||f()),i&&i())};return g.jsx(M2,{isPresent:R,initial:!v.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:R?void 0:N,anchorX:o,anchorY:l,children:y},b)})})},z1=L.createContext({strict:!1}),yx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let _x=!1;function w2(){if(_x)return;const t={};for(const e in yx)t[e]={isEnabled:n=>yx[e].some(i=>!!n[i])};m1(t),_x=!0}function V1(){return w2(),cP()}function T2(t){const e=V1();for(const n in t)e[n]={...e[n],...t[n]};m1(e)}const qu=L.createContext({});function A2(t,e){if($u(t)){const{initial:n,animate:i}=t;return{initial:n===!1||$o(n)?n:void 0,animate:$o(i)?i:void 0}}return t.inherit!==!1?e:{}}function C2(t){const{initial:e,animate:n}=A2(t,L.useContext(qu));return L.useMemo(()=>({initial:e,animate:n}),[Sx(e),Sx(n)])}function Sx(t){return Array.isArray(t)?t.join(" "):t}const yg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function H1(t,e,n){for(const i in e)!Jt(e[i])&&!M1(i,n)&&(t[i]=e[i])}function b2({transformTemplate:t},e){return L.useMemo(()=>{const n=yg();return gg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function R2(t,e){const n=t.style||{},i={};return H1(i,n,t),Object.assign(i,b2(t,e)),i}function P2(t,e){const n={},i=R2(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const G1=()=>({...yg(),attrs:{}});function N2(t,e,n,i){const r=L.useMemo(()=>{const s=G1();return w1(s,e,A1(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};H1(s,t.style,t),r.style={...s,...r.style}}return r}const L2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function hu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||L2.has(t)}function D2(t,e){return t.startsWith("on")?!hu(t):(e==null?void 0:e(t))??!hu(t)}function I2(t,e,n,i){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||Jt(t[s])||(D2(s,i)||n===!0&&hu(s)||!e&&!hu(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}const U2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _g(t){return typeof t!="string"||t.includes("-")?!1:!!(U2.indexOf(t)>-1||/[A-Z]/u.test(t))}function F2(t,e,n,{latestValues:i},r,s=!1,a,o){const c=(a??_g(t)?N2:P2)(e,i,r,t),u=I2(e,typeof t=="string",s,o),f=t!==L.Fragment?{...u,...c,ref:n}:{},{children:d}=e,p=L.useMemo(()=>Jt(d)?d.get():d,[d]);return L.createElement(t,{...f,children:p})}function O2({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:k2(n,i,r,t),renderState:e()}}function k2(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Mc(s[d]);let{initial:a,animate:o}=t;const l=$u(t),c=h1(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const f=u?o:a;if(f&&typeof f!="boolean"&&!Xu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const v=lg(t,d[p]);if(v){const{transitionEnd:M,transition:m,...h}=v;for(const x in h){let S=h[x];if(Array.isArray(S)){const _=u?S.length-1:0;S=S[_]}S!==null&&(r[x]=S)}for(const x in M)r[x]=M[x]}}}return r}const W1=t=>(e,n)=>{const i=L.useContext(qu),r=L.useContext(Gu),s=()=>O2(t,e,i,r);return n?s():qm(s)},B2=W1({scrapeMotionValuesFromProps:vg,createRenderState:yg}),z2=W1({scrapeMotionValuesFromProps:C1,createRenderState:G1}),V2=Symbol.for("motionComponentSymbol");function H2(t,e,n){const i=L.useRef(n);L.useInsertionEffect(()=>{i.current=n});const r=L.useRef(null);return L.useCallback(s=>{var o;s&&((o=t.onMount)==null||o.call(t,s)),e&&(s?e.mount(s):e.unmount());const a=i.current;if(typeof a=="function")if(s){const l=a(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):a(s);else a&&(a.current=s)},[e])}const j1=L.createContext({});function Xs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function G2(t,e,n,i,r,s){var S,_;const{visualElement:a}=L.useContext(qu),o=L.useContext(z1),l=L.useContext(Gu),c=L.useContext(xg),u=c.reducedMotion,f=c.skipAnimations,d=L.useRef(null),p=L.useRef(!1);i=i||o.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:f,isSVG:s}),p.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const v=d.current,M=L.useContext(j1);v&&!v.projection&&r&&(v.type==="html"||v.type==="svg")&&W2(d.current,n,r,M);const m=L.useRef(!1);L.useInsertionEffect(()=>{v&&m.current&&v.update(n,l)});const h=n[t1],x=L.useRef(!!h&&typeof window<"u"&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,h))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,h)));return iu(()=>{p.current=!0,v&&(m.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),x.current&&v.animationState&&v.animationState.animateChanges())}),L.useEffect(()=>{v&&(!x.current&&v.animationState&&v.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,h)}),x.current=!1),v.enteringChildren=void 0)}),v}function W2(t,e,n,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:X1(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&Xs(o),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function X1(t){if(t)return t.options.allowProjection!==!1?t.projection:X1(t.parent)}function Vd(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&T2(i);const s=n?n==="svg":_g(t),a=s?z2:B2;function o(c,u){let f;const d={...L.useContext(xg),...c,layoutId:j2(c)},{isStatic:p,isValidProp:v}=d,M=C2(c),m=a(c,p);if(!p&&typeof window<"u"){X2();const h=$2(d);f=h.MeasureLayout,M.visualElement=G2(t,m,d,r,h.ProjectionNode,s)}return g.jsxs(qu.Provider,{value:M,children:[f&&M.visualElement?g.jsx(f,{visualElement:M.visualElement,...d}):null,F2(t,c,H2(m,M.visualElement,u),m,p,e,s,v)]})}o.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=L.forwardRef(o);return l[V2]=t,l}function j2({layoutId:t}){const e=L.useContext($m).id;return e&&t!==void 0?e+"-"+t:t}function X2(t,e){L.useContext(z1).strict}function $2(t){const e=V1(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function q2(t,e){if(typeof Proxy>"u")return Vd;const n=new Map,i=(s,a)=>Vd(s,a,t,e),r=(s,a)=>i(s,a);return new Proxy(r,{get:(s,a)=>a==="create"?i:(n.has(a)||n.set(a,Vd(a,void 0,t,e)),n.get(a))})}const Y2=(t,e)=>e.isSVG??_g(t)?new TP(e):new _P(e,{allowProjection:t!==L.Fragment});class K2 extends Xr{constructor(e){super(e),e.animationState||(e.animationState=PP(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Z2=0;class J2 extends Xr{constructor(){super(...arguments),this.id=Z2++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:a,custom:o}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const l=ms(this.node,a,o);if(l){const{transition:c,transitionEnd:u,...f}=l;for(const d in f)(s=this.node.getValue(d))==null||s.jump(f[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Q2={animation:{Feature:K2},exit:{Feature:J2}};function ol(t){return{point:{x:t.pageX,y:t.pageY}}}const e3=t=>e=>fg(e)&&t(e,ol(e));function To(t,e,n,i){return qo(t,e,e3(n),i)}const $1=({current:t})=>t?t.ownerDocument.defaultView:null,Mx=(t,e)=>Math.abs(t-e);function t3(t,e){const n=Mx(t.x,e.x),i=Mx(t.y,e.y);return Math.sqrt(n**2+i**2)}const Ex=new Set(["auto","scroll"]);class q1{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Il(this.lastRawMoveEventInfo,this.transformPagePoint));const v=Hd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,m=t3(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!m)return;const{point:h}=v,{timestamp:x}=Zt;this.history.push({...h,timestamp:x});const{onStart:S,onMove:_}=this.handlers;M||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,v)},this.handlePointerMove=(v,M)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Il(M,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(v,M)=>{this.end();const{onEnd:m,onSessionEnd:h,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Hd(v.type==="pointercancel"?this.lastMoveEventInfo:Il(M,this.transformPagePoint),this.history);this.startEvent&&m&&m(v,S),h&&h(v,S)},!fg(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=r||window;const l=ol(e),c=Il(l,this.transformPagePoint),{point:u}=c,{timestamp:f}=Zt;this.history=[{...u,timestamp:f}];const{onSessionStart:d}=n;d&&d(e,Hd(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=rl(To(this.contextWindow,"pointermove",this.handlePointerMove,p),To(this.contextWindow,"pointerup",this.handlePointerUp,p),To(this.contextWindow,"pointercancel",this.handlePointerUp,p)),o&&this.startScrollTracking(o)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Ex.has(i.overflowX)||Ex.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),ut.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Br(this.updatePoint)}}function Il(t,e){return e?{point:e(t.point)}:t}function wx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Hd({point:t},e){return{point:t,delta:wx(t,Y1(e)),offset:wx(t,n3(e)),velocity:i3(e,.1)}}function n3(t){return t[0]}function Y1(t){return t[t.length-1]}function i3(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Y1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Fn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Fn(e)*2&&(i=t[1]);const s=Xn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function r3(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Tx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function s3(t,{top:e,left:n,bottom:i,right:r}){return{x:Tx(t.x,n,r),y:Tx(t.y,e,i)}}function Ax(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function a3(t,e){return{x:Ax(t.x,e.x),y:Ax(t.y,e.y)}}function o3(t,e){let n=.5;const i=pn(t),r=pn(e);return r>i?n=jo(e.min,e.max-i,t.min):i>r&&(n=jo(t.min,t.max-r,e.min)),Ii(0,1,n)}function l3(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const ep=.35;function c3(t=ep){return t===!1?t=0:t===!0&&(t=ep),{x:Cx(t,"left","right"),y:Cx(t,"top","bottom")}}function Cx(t,e,n){return{min:bx(t,e),max:bx(t,n)}}function bx(t,e){return typeof t=="number"?t:t[e]||0}const u3=new WeakMap;class d3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Vt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(ol(f).point),this.stopAnimation()},a=(f,d)=>{const{drag:p,dragPropagation:v,onDragStart:M}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BR(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_i(h=>{let x=this.getAxisMotionValue(h).get()||0;if(Pi.test(x)){const{projection:S}=this.visualElement;if(S&&S.layout){const _=S.layout.layoutBox[h];_&&(x=pn(_)*(parseFloat(x)/100))}}this.originPoint[h]=x}),M&&ut.update(()=>M(f,d),!1,!0),Wh(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:M,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=d;if(v&&this.currentDirection===null){this.currentDirection=h3(h),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),m&&ut.update(()=>m(f,d),!1,!0)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new q1(e,{onSessionStart:s,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:$1(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&ut.postRender(()=>o(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ul(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=r3(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Xs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=s3(i.layoutBox,e):this.constraints=!1,this.elastic=c3(n),r!==this.constraints&&!Xs(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&_i(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=l3(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Xs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=pP(i,r.root,this.visualElement.getTransformPagePoint());let a=a3(r.layout.layoutBox,s);if(n){const o=n(dP(a));this.hasMutatedConstraints=!!o,o&&(a=v1(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=_i(u=>{if(!Ul(u,n,this.currentDirection))return;let f=l&&l[u]||{};(a===!0||a===u)&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Wh(this.visualElement,e),i.start(og(e,i,0,n,this.visualElement,!1))}stopAnimation(){_i(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){_i(n=>{const{drag:i}=this.getProps();if(!Ul(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ct(a,o,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Xs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};_i(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=o3({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),_i(a=>{if(!Ul(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(ct(l,c,r[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;u3.set(this.visualElement,this);const e=this.visualElement.current,n=To(e,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps(),d=c.target,p=d!==e&&jR(d);u&&f&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Xs(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=f3(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,a=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ut.read(r);const o=qo(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(_i(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=c[f].translate,d.set(d.get()+c[f].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=ep,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Rx(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function f3(t,e,n){const i=Fv(t,Rx(n)),r=Fv(e,Rx(n));return()=>{i(),r()}}function Ul(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function h3(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class p3 extends Xr{constructor(e){super(e),this.removeGroupControls=qn,this.removeListeners=qn,this.controls=new d3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Gd=t=>(e,n)=>{t&&ut.update(()=>t(e,n),!1,!0)};class m3 extends Xr{constructor(){super(...arguments),this.removePointerDownListener=qn}onPointerDown(e){this.session=new q1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Gd(e),onStart:Gd(n),onMove:Gd(i),onEnd:(s,a)=>{delete this.session,r&&ut.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=To(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Wd=!1;class g3 extends L.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Wd&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ec.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:a}=i;return a&&(a.isPresent=s,e.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),Wd=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||ut.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),dg.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Wd=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function K1(t){const[e,n]=B1(),i=L.useContext($m);return g.jsx(g3,{...t,layoutGroup:i,switchLayoutGroup:L.useContext(j1),isPresent:e,safeToRemove:n})}const v3={pan:{Feature:m3},drag:{Feature:p3,ProjectionNode:k1,MeasureLayout:K1}};function Px(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ut.postRender(()=>s(e,ol(e)))}class x3 extends Xr{mount(){const{current:e}=this.node;e&&(this.unmount=VR(e,(n,i)=>(Px(this.node,i,"Start"),r=>Px(this.node,r,"End"))))}unmount(){}}class y3 extends Xr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rl(qo(this.node.current,"focus",()=>this.onFocus()),qo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nx(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ut.postRender(()=>s(e,ol(e)))}class _3 extends Xr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=$R(e,(r,s)=>(Nx(this.node,s,"Start"),(a,{success:o})=>Nx(this.node,a,o?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const tp=new WeakMap,jd=new WeakMap,S3=t=>{const e=tp.get(t.target);e&&e(t)},M3=t=>{t.forEach(S3)};function E3({root:t,...e}){const n=t||document;jd.has(n)||jd.set(n,{});const i=jd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(M3,{root:t,...e})),i[r]}function w3(t,e,n){const i=E3(e);return tp.set(t,n),i.observe(t),()=>{tp.delete(t),i.unobserve(t)}}const T3={some:0,all:1};class A3 extends Xr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:T3[r]},o=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),p=u?f:d;p&&p(c)};this.stopObserver=w3(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(C3(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function C3({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const b3={inView:{Feature:A3},tap:{Feature:_3},focus:{Feature:y3},hover:{Feature:x3}},R3={layout:{ProjectionNode:k1,MeasureLayout:K1}},P3={...Q2,...b3,...v3,...R3},Ut=q2(P3,Y2);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=t=>{const e=L3(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},I3=L.createContext({}),U3=()=>L.useContext(I3),F3=L.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=U3()??{},v=i??f?Number(n??u)*24/Number(e??c):n??u;return L.createElement("svg",{ref:l,...Xd,width:e??c??Xd.width,height:e??c??Xd.height,stroke:t??d,strokeWidth:v,className:Z1("lucide",p,r),...!s&&!D3(o)&&{"aria-hidden":"true"},...o},[...a.map(([M,m])=>L.createElement(M,m)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(t,e)=>{const n=L.forwardRef(({className:i,...r},s)=>L.createElement(F3,{ref:s,iconNode:e,className:Z1(`lucide-${N3(Lx(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Lx(t),n};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lo=Oe("arrow-left",O3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Dx=Oe("arrow-right",k3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],z3=Oe("award",B3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Yu=Oe("brain-circuit",V3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ix=Oe("briefcase",H3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],Ux=Oe("chart-no-axes-column",G3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$d=Oe("chevron-right",W3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],X3=Oe("circle-alert",j3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Tc=Oe("circle-check-big",$3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Y3=Oe("circle-play",q3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],Fx=Oe("clipboard-check",K3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],pu=Oe("clock",Z3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Q3=Oe("cloud-upload",J3);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],tN=Oe("code-xml",eN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],iN=Oe("database",nN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sN=Oe("eye-off",rN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],oN=Oe("eye",aN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],J1=Oe("file-text",lN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],uN=Oe("hash",cN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],fN=Oe("layers",dN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],pN=Oe("layout-dashboard",hN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],Q1=Oe("lock-keyhole",mN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],qd=Oe("log-out",gN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mu=Oe("mail",vN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],yN=Oe("menu",xN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],SN=Oe("message-square",_N);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m14.305 7.53.923-.382",key:"1mlnsw"}],["path",{d:"m15.228 4.852-.923-.383",key:"82mpwg"}],["path",{d:"m16.852 3.228-.383-.924",key:"ln4sir"}],["path",{d:"m16.852 8.772-.383.923",key:"1dejw0"}],["path",{d:"m19.148 3.228.383-.924",key:"192kgf"}],["path",{d:"m19.53 9.696-.382-.924",key:"fiavlr"}],["path",{d:"m20.772 4.852.924-.383",key:"1j8mgp"}],["path",{d:"m20.772 7.148.924.383",key:"zix9be"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],EN=Oe("monitor-cog",MN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],TN=Oe("monitor",wN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],CN=Oe("network",AN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],RN=Oe("pen",bN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],NN=Oe("play",PN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ox=Oe("refresh-cw",LN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],eE=Oe("rotate-ccw-clock",DN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],tE=Oe("save",IN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],FN=Oe("search",UN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nE=Oe("shield-check",ON);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],BN=Oe("shield",kN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],VN=Oe("sliders-horizontal",zN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ku=Oe("target",HN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Sg=Oe("trending-up",GN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Yd=Oe("triangle-alert",WN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],XN=Oe("user-round",jN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gu=Oe("user",$N);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],YN=Oe("users-round",qN);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mg=Oe("x",KN);function iE({id:t,value:e,onChange:n,placeholder:i,required:r,autoComplete:s,minLength:a}){const[o,l]=L.useState(!1);return g.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[g.jsx("input",{id:t,type:o?"text":"password",value:e,onChange:n,placeholder:i,required:r,autoComplete:s,minLength:a,style:{width:"100%",paddingRight:"40px"}}),g.jsx("button",{type:"button",onClick:()=>l(!o),title:o?"Hide password":"Show password","aria-label":o?"Hide password":"Show password",style:{position:"absolute",right:"12px",background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:"4px",transition:"color 0.2s ease"},onMouseEnter:c=>c.currentTarget.style.color="var(--accent-main)",onMouseLeave:c=>c.currentTarget.style.color="var(--text-muted)",children:o?g.jsx(oN,{size:18}):g.jsx(sN,{size:18})})]})}function Eg({text:t,speed:e=40,delay:n=0,active:i=!0,className:r="",onComplete:s}){const[a,o]=L.useState(""),[l,c]=L.useState(!1);return L.useEffect(()=>{if(!i){o(""),c(!1);return}let u=0;o(""),c(!1);const f=setTimeout(()=>{const d=setInterval(()=>{u+=1,o(t.slice(0,u)),u>=t.length&&(clearInterval(d),c(!0),s==null||s())},e);return()=>clearInterval(d)},n);return()=>clearTimeout(f)},[t,e,n,i,s]),g.jsxs("span",{className:r,children:[a,i&&!l&&g.jsx(Ut.span,{animate:{opacity:[0,1,0]},transition:{repeat:1/0,duration:.8,ease:"linear"},style:{color:"var(--accent-main)",marginLeft:"4px",display:"inline-block",fontWeight:"600"},children:"|"})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wg="185",ZN=0,kx=1,JN=2,Ac=1,QN=2,co=3,zr=0,An=1,wi=2,Yi=0,pa=1,Bx=2,zx=3,Vx=4,eL=5,is=100,tL=101,nL=102,iL=103,rL=104,sL=200,aL=201,oL=202,lL=203,np=204,ip=205,cL=206,uL=207,dL=208,fL=209,hL=210,pL=211,mL=212,gL=213,vL=214,rp=0,sp=1,ap=2,Aa=3,op=4,lp=5,cp=6,up=7,rE=0,xL=1,yL=2,Ni=0,sE=1,aE=2,oE=3,lE=4,cE=5,uE=6,dE=7,fE=300,Ss=301,Ca=302,Kd=303,Zd=304,Zu=306,dp=1e3,$i=1001,fp=1002,Qt=1003,_L=1004,Fl=1005,cn=1006,Jd=1007,us=1008,Dn=1009,hE=1010,pE=1011,Yo=1012,Tg=1013,Ui=1014,Ai=1015,tr=1016,Ag=1017,Cg=1018,Ko=1020,mE=35902,gE=35899,vE=1021,xE=1022,li=1023,nr=1026,ds=1027,yE=1028,bg=1029,Ms=1030,Rg=1031,Pg=1033,Cc=33776,bc=33777,Rc=33778,Pc=33779,hp=35840,pp=35841,mp=35842,gp=35843,vp=36196,xp=37492,yp=37496,_p=37488,Sp=37489,vu=37490,Mp=37491,Ep=37808,wp=37809,Tp=37810,Ap=37811,Cp=37812,bp=37813,Rp=37814,Pp=37815,Np=37816,Lp=37817,Dp=37818,Ip=37819,Up=37820,Fp=37821,Op=36492,kp=36494,Bp=36495,zp=36283,Vp=36284,xu=36285,Hp=36286,SL=3200,Gp=0,ML=1,Sr="",Hn="srgb",yu="srgb-linear",_u="linear",rt="srgb",Ls=7680,Hx=519,EL=512,wL=513,TL=514,Ng=515,AL=516,CL=517,Lg=518,bL=519,Gx=35044,Wx="300 es",Ci=2e3,Zo=2001;function RL(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PL(){const t=Su("canvas");return t.style.display="block",t}const jx={};function Xx(...t){const e="THREE."+t.shift();console.log(e,...t)}function _E(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ma(...t){const e=t.join(" ");e in jx||(jx[e]=!0,Ie(...t))}function NL(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const LL={[rp]:sp,[ap]:cp,[op]:up,[Aa]:lp,[sp]:rp,[cp]:ap,[up]:op,[lp]:Aa};class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qd=Math.PI/180,Wp=180/Math.PI;function ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function DL(t,e){return(t%e+e)%e}function ef(t,e,n){return(1-n)*t+n*e}function Ka(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const kg=class kg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kg.prototype.isVector2=!0;let $e=kg;class ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(f!==M||l!==d||c!==p||u!==v){let m=l*d+c*p+u*v+f*M;m<0&&(d=-d,p=-p,v=-v,M=-M,m=-m);let h=1-o;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);h=Math.sin(h*x)/S,o=Math.sin(o*x)/S,l=l*h+d*o,c=c*h+p*o,u=u*h+v*o,f=f*h+M*o}else{l=l*h+d*o,c=c*h+p*o,u=u*h+v*o,f=f*h+M*o;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*f+l*p-c*d,e[n+1]=l*v+u*d+c*f-o*p,e[n+2]=c*v+u*p+o*d-l*f,e[n+3]=u*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bg=class Bg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($x.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($x.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bg.prototype.isVector3=!0;let V=Bg;const tf=new V,$x=new ka,zg=class zg{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],M=r[0],m=r[3],h=r[6],x=r[1],S=r[4],_=r[7],T=r[2],w=r[5],C=r[8];return s[0]=a*M+o*x+l*T,s[3]=a*m+o*S+l*w,s[6]=a*h+o*_+l*C,s[1]=c*M+u*x+f*T,s[4]=c*m+u*S+f*w,s[7]=c*h+u*_+f*C,s[2]=d*M+p*x+v*T,s[5]=d*m+p*S+v*w,s[8]=d*h+p*_+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nf.makeScale(e,n)),this}rotate(e){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nf.makeRotation(-e)),this}translate(e,n){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zg.prototype.isMatrix3=!0;let Be=zg;const nf=new Be,qx=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yx=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IL(){const t={enabled:!0,workingColorSpace:yu,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=ga(r.r),r.g=ga(r.g),r.b=ga(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?_u:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yu]:{primaries:e,whitePoint:i,transfer:_u,toXYZ:qx,fromXYZ:Yx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:qx,fromXYZ:Yx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const Ke=IL();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class UL{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Su("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FL=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FL++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rf(r[a].image)):s.push(rf(r[a]))}else s=rf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UL.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let OL=0;const sf=new V;class gn extends As{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=$i,r=$i,s=cn,a=us,o=li,l=Dn,c=gn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OL++}),this.uuid=ll(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dp:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dp:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=fE;gn.DEFAULT_ANISOTROPY=1;const Vg=class Vg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,_=(p+1)/2,T=(h+1)/2,w=(u+d)/4,C=(f+M)/4,y=(v+m)/4;return S>_&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=C/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=y/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-v)*(m-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-M)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vg.prototype.isVector4=!0;let Mt=Vg;class kL extends As{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new gn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends kL{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class SE extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BL extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=class Tu{constructor(e,n,i,r,s,a,o,l,c,u,f,d,p,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,p,v,M,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,p,v,M,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,v=o*u,M=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-M*c,n[9]=-o*l,n[2]=M-d*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,M=c*f;n[0]=d+M*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=M+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,M=c*f;n[0]=d-M*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=M-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,v=o*u,M=o*f;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+M,n[1]=l*f,n[5]=M*c+d,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,M=o*c;n[0]=l*u,n[4]=M-d*f,n[8]=v*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+v,n[10]=d-M*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,M=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+M,n[5]=a*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*u,n[10]=M*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zL,e,VL)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),cr.crossVectors(i,Rn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),cr.crossVectors(i,Rn)),cr.normalize(),Ol.crossVectors(Rn,cr),r[0]=cr.x,r[4]=Ol.x,r[8]=Rn.x,r[1]=cr.y,r[5]=Ol.y,r[9]=Rn.y,r[2]=cr.z,r[6]=Ol.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],M=i[6],m=i[10],h=i[14],x=i[3],S=i[7],_=i[11],T=i[15],w=r[0],C=r[4],y=r[8],b=r[12],R=r[1],N=r[5],F=r[9],X=r[13],Y=r[2],z=r[6],K=r[10],G=r[14],U=r[3],D=r[7],q=r[11],ie=r[15];return s[0]=a*w+o*R+l*Y+c*U,s[4]=a*C+o*N+l*z+c*D,s[8]=a*y+o*F+l*K+c*q,s[12]=a*b+o*X+l*G+c*ie,s[1]=u*w+f*R+d*Y+p*U,s[5]=u*C+f*N+d*z+p*D,s[9]=u*y+f*F+d*K+p*q,s[13]=u*b+f*X+d*G+p*ie,s[2]=v*w+M*R+m*Y+h*U,s[6]=v*C+M*N+m*z+h*D,s[10]=v*y+M*F+m*K+h*q,s[14]=v*b+M*X+m*G+h*ie,s[3]=x*w+S*R+_*Y+T*U,s[7]=x*C+S*N+_*z+T*D,s[11]=x*y+S*F+_*K+T*q,s[15]=x*b+S*X+_*G+T*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],M=e[7],m=e[11],h=e[15],x=l*p-c*d,S=o*p-c*f,_=o*d-l*f,T=a*p-c*u,w=a*d-l*u,C=a*f-o*u;return n*(M*x-m*S+h*_)-i*(v*x-m*T+h*w)+r*(v*S-M*T+h*C)-s*(v*_-M*w+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],M=e[13],m=e[14],h=e[15],x=n*o-i*a,S=n*l-r*a,_=n*c-s*a,T=i*l-r*o,w=i*c-s*o,C=r*c-s*l,y=u*M-f*v,b=u*m-d*v,R=u*h-p*v,N=f*m-d*M,F=f*h-p*M,X=d*h-p*m,Y=x*X-S*F+_*N+T*R-w*b+C*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return e[0]=(o*X-l*F+c*N)*z,e[1]=(r*F-i*X-s*N)*z,e[2]=(M*C-m*w+h*T)*z,e[3]=(d*w-f*C-p*T)*z,e[4]=(l*R-a*X-c*b)*z,e[5]=(n*X-r*R+s*b)*z,e[6]=(m*_-v*C-h*S)*z,e[7]=(u*C-d*_+p*S)*z,e[8]=(a*F-o*R+c*y)*z,e[9]=(i*R-n*F-s*y)*z,e[10]=(v*w-M*_+h*x)*z,e[11]=(f*_-u*w-p*x)*z,e[12]=(o*b-a*N-l*y)*z,e[13]=(n*N-i*b+r*y)*z,e[14]=(M*S-v*T-m*x)*z,e[15]=(u*T-f*S+d*x)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,v=s*f,M=a*u,m=a*f,h=o*f,x=l*c,S=l*u,_=l*f,T=i.x,w=i.y,C=i.z;return r[0]=(1-(M+h))*T,r[1]=(p+_)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(p-_)*w,r[5]=(1-(d+h))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(v+S)*C,r[9]=(m-x)*C,r[10]=(1-(d+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),l=Is.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ei.copy(this);const c=1/a,u=1/o,f=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,n.setFromRotationMatrix(ei),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Ci,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===Ci)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Zo)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ci,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===Ci)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Zo)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Tu.prototype.isMatrix4=!0;let Rt=Tu;const Is=new V,ei=new Rt,zL=new V(0,0,0),VL=new V(1,1,1),cr=new V,Ol=new V,Rn=new V,Kx=new Rt,Zx=new ka;class Vr{constructor(e=0,n=0,i=0,r=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zx.setFromEuler(this),this.setFromQuaternion(Zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class ME{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HL=0;const Jx=new V,Us=new ka,Oi=new Rt,kl=new V,Za=new V,GL=new V,WL=new ka,Qx=new V(1,0,0),ey=new V(0,1,0),ty=new V(0,0,1),ny={type:"added"},jL={type:"removed"},Fs={type:"childadded",child:null},af={type:"childremoved",child:null};class Cn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HL++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new V,n=new Vr,i=new ka,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Be}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ME,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Qx,e)}rotateY(e){return this.rotateOnAxis(ey,e)}rotateZ(e){return this.rotateOnAxis(ty,e)}translateOnAxis(e,n){return Jx.copy(e).applyQuaternion(this.quaternion),this.position.add(Jx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qx,e)}translateY(e){return this.translateOnAxis(ey,e)}translateZ(e){return this.translateOnAxis(ty,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?kl.copy(e):kl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Za,kl,this.up):Oi.lookAt(kl,Za,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(Oi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ny),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jL),af.child=e,this.dispatchEvent(af),af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ny),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,GL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,WL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new V(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uo extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XL={type:"move"};class of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),h=this._getHandJoint(c,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XL)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const EE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=DL(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=lf(a,s,e+1/3),this.g=lf(a,s,e),this.b=lf(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=EE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ke.workingToColorSpace(on.copy(this),e),Math.round(Ze(on.r*255,0,255))*65536+Math.round(Ze(on.g*255,0,255))*256+Math.round(Ze(on.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Hn){Ke.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Bl);const i=ef(ur.h,Bl.h,n),r=ef(ur.s,Bl.s,n),s=ef(ur.l,Bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new tt;tt.NAMES=EE;class $L extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ti=new V,ki=new V,cf=new V,Bi=new V,Os=new V,ks=new V,iy=new V,uf=new V,df=new V,ff=new V,hf=new Mt,pf=new Mt,mf=new Mt;class oi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),ki.subVectors(i,n),cf.subVectors(e,n);const a=ti.dot(ti),o=ti.dot(ki),l=ti.dot(cf),c=ki.dot(ki),u=ki.dot(cf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return hf.setScalar(0),pf.setScalar(0),mf.setScalar(0),hf.fromBufferAttribute(e,n),pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hf,s.x),a.addScaledVector(pf,s.y),a.addScaledVector(mf,s.z),a}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),ki.subVectors(e,n),ti.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ti.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Os.subVectors(r,i),ks.subVectors(s,i),uf.subVectors(e,i);const l=Os.dot(uf),c=ks.dot(uf);if(l<=0&&c<=0)return n.copy(i);df.subVectors(e,r);const u=Os.dot(df),f=ks.dot(df);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Os,a);ff.subVectors(e,s);const p=Os.dot(ff),v=ks.dot(ff);if(v>=0&&p<=v)return n.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ks,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return iy.subVectors(s,r),o=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(iy,o);const h=1/(m+M+d);return a=M*h,o=d*h,n.copy(i).addScaledVector(Os,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Vl.subVectors(this.max,Ja),Bs.subVectors(e.a,Ja),zs.subVectors(e.b,Ja),Vs.subVectors(e.c,Ja),dr.subVectors(zs,Bs),fr.subVectors(Vs,zs),Yr.subVectors(Bs,Vs);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Yr.z,Yr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Yr.z,0,-Yr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Yr.y,Yr.x,0];return!gf(n,Bs,zs,Vs,Vl)||(n=[1,0,0,0,1,0,0,0,1],!gf(n,Bs,zs,Vs,Vl))?!1:(Hl.crossVectors(dr,fr),n=[Hl.x,Hl.y,Hl.z],gf(n,Bs,zs,Vs,Vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new V,new V,new V,new V,new V,new V,new V,new V],ni=new V,zl=new cl,Bs=new V,zs=new V,Vs=new V,dr=new V,fr=new V,Yr=new V,Ja=new V,Vl=new V,Hl=new V,Kr=new V;function gf(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Kr.fromArray(t,s);const o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=n.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ot=new V,Gl=new $e;let qL=0;class Di extends As{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qL++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gx,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gl.fromBufferAttribute(this,n),Gl.applyMatrix3(e),this.setXY(n,Gl.x,Gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ka(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ka(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ka(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ka(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ka(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wE extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class TE extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const YL=new cl,Qa=new V,vf=new V;class Ig{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):YL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const n=Qa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(vf)),this.expandByPoint(Qa.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let KL=0;const Vn=new Rt,xf=new Cn,Hs=new V,Pn=new cl,eo=new cl,Xt=new V;class Zn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KL++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RL(e)?TE:wE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ig);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Pn.min,eo.min),Pn.expandByPoint(Xt),Xt.addVectors(Pn.max,eo.max),Pn.expandByPoint(Xt)):(Pn.expandByPoint(eo.min),Pn.expandByPoint(eo.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),Xt.add(Hs)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new V,l[y]=new V;const c=new V,u=new V,f=new V,d=new $e,p=new $e,v=new $e,M=new V,m=new V;function h(y,b,R){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,R),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(N),o[y].add(M),o[b].add(M),o[R].add(M),l[y].add(m),l[b].add(m),l[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,b=x.length;y<b;++y){const R=x[y],N=R.start,F=R.count;for(let X=N,Y=N+F;X<Y;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new V,_=new V,T=new V,w=new V;function C(y){T.fromBufferAttribute(r,y),w.copy(T);const b=o[y];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(w,b);const N=_.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,N)}for(let y=0,b=x.length;y<b;++y){const R=x[y],N=R.start,F=R.count;for(let X=N,Y=N+F;X<Y;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Di(d,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZL=0;class ul extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZL++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=pa,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==np&&(i.blendSrc=this.blendSrc),this.blendDst!==ip&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vi=new V,yf=new V,Wl=new V,hr=new V,_f=new V,jl=new V,Sf=new V;class JL{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yf.copy(e).add(n).multiplyScalar(.5),Wl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(yf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wl),o=hr.dot(this.direction),l=-hr.dot(Wl),c=hr.lengthSq(),u=Math.abs(1-a*a);let f,d,p,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yf).addScaledVector(Wl,d),p}intersectSphere(e,n){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,i,r,s){_f.subVectors(n,e),jl.subVectors(i,e),Sf.crossVectors(_f,jl);let a=this.direction.dot(Sf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hr.subVectors(this.origin,e);const l=o*this.direction.dot(jl.crossVectors(hr,jl));if(l<0)return null;const c=o*this.direction.dot(_f.cross(hr));if(c<0||l+c>a)return null;const u=-o*hr.dot(Sf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mu extends ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ry=new Rt,Zr=new JL,Xl=new Ig,sy=new V,$l=new V,ql=new V,Yl=new V,Mf=new V,Kl=new V,ay=new V,Zl=new V;class Sn extends Cn{constructor(e=new Zn,n=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Mf.fromBufferAttribute(f,e),a?Kl.addScaledVector(Mf,u):Kl.addScaledVector(Mf.sub(n),u))}n.add(Kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Xl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Xl,sy)===null||Zr.origin.distanceToSquared(sy)>(e.far-e.near)**2))&&(ry.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(ry),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,T=S;_<T;_+=3){const w=o.getX(_),C=o.getX(_+1),y=o.getX(_+2);r=Jl(this,h,e,i,c,u,f,w,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const x=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);r=Jl(this,a,e,i,c,u,f,x,S,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,T=S;_<T;_+=3){const w=_,C=_+1,y=_+2;r=Jl(this,h,e,i,c,u,f,w,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const x=m,S=m+1,_=m+2;r=Jl(this,a,e,i,c,u,f,x,S,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function QL(t,e,n,i,r,s,a,o){let l;if(e.side===An?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zr,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Zl);return c<n.near||c>n.far?null:{distance:c,point:Zl.clone(),object:t}}function Jl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,$l),t.getVertexPosition(l,ql),t.getVertexPosition(c,Yl);const u=QL(t,e,n,i,$l,ql,Yl,ay);if(u){const f=new V;oi.getBarycoord(ay,$l,ql,Yl,f),r&&(u.uv=oi.getInterpolatedAttribute(r,o,l,c,f,new $e)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,l,c,f,new $e)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};oi.getNormal($l,ql,Yl,d.normal),u.face=d,u.barycoord=f}return u}class eD extends gn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Qt,u=Qt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new V,tD=new V,nD=new Be;class ns{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ef.subVectors(i,n).cross(tD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ef),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nD.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Ig,iD=new $e(.5,.5),Ql=new V;class Ug{constructor(e=new ns,n=new ns,i=new ns,r=new ns,s=new ns,a=new ns){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],v=s[8],M=s[9],m=s[10],h=s[11],x=s[12],S=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,h-v,T-x).normalize(),r[1].setComponents(c+a,p+u,h+v,T+x).normalize(),r[2].setComponents(c+o,p+f,h+M,T+S).normalize(),r[3].setComponents(c-o,p-f,h-M,T-S).normalize(),i)r[4].setComponents(l,d,m,_).normalize(),r[5].setComponents(c-l,p-d,h-m,T-_).normalize();else if(r[4].setComponents(c-l,p-d,h-m,T-_).normalize(),n===Ci)r[5].setComponents(c+l,p+d,h+m,T+_).normalize();else if(n===Zo)r[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=iD.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AE extends gn{constructor(e=[],n=Ss,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ba extends gn{constructor(e,n,i=Ui,r,s,a,o=Qt,l=Qt,c,u=nr,f=1){if(u!==nr&&u!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class rD extends ba{constructor(e,n=Ui,i=Ss,r,s,a=Qt,o=Qt,l,c=nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class CE extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function v(M,m,h,x,S,_,T,w,C,y,b){const R=_/C,N=T/y,F=_/2,X=T/2,Y=w/2,z=C+1,K=y+1;let G=0,U=0;const D=new V;for(let q=0;q<K;q++){const ie=q*N-X;for(let oe=0;oe<z;oe++){const ze=oe*R-F;D[M]=ze*x,D[m]=ie*S,D[h]=Y,c.push(D.x,D.y,D.z),D[M]=0,D[m]=0,D[h]=w>0?1:-1,u.push(D.x,D.y,D.z),f.push(oe/C),f.push(1-q/y),G+=1}}for(let q=0;q<y;q++)for(let ie=0;ie<C;ie++){const oe=d+ie+z*q,ze=d+ie+z*(q+1),Ue=d+(ie+1)+z*(q+1),Ge=d+(ie+1)+z*q;l.push(oe,ze,Ge),l.push(ze,Ue,Ge),U+=6}o.addGroup(p,U,b),p+=U,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fg extends Zn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new V,_=new V,T=new V;for(let w=0;w<n.length;w+=3)p(n[w+0],S),p(n[w+1],_),p(n[w+2],T),l(S,_,T,x)}function l(x,S,_,T){const w=T+1,C=[];for(let y=0;y<=w;y++){C[y]=[];const b=x.clone().lerp(_,y/w),R=S.clone().lerp(_,y/w),N=w-y;for(let F=0;F<=N;F++)F===0&&y===w?C[y][F]=b:C[y][F]=b.clone().lerp(R,F/N)}for(let y=0;y<w;y++)for(let b=0;b<2*(w-y)-1;b++){const R=Math.floor(b/2);b%2===0?(d(C[y][R+1]),d(C[y+1][R]),d(C[y][R])):(d(C[y][R+1]),d(C[y+1][R+1]),d(C[y+1][R]))}}function c(x){const S=new V;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(x),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function u(){const x=new V;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const _=m(x)/2/Math.PI+.5,T=h(x)/Math.PI+.5;a.push(_,1-T)}v(),f()}function f(){for(let x=0;x<a.length;x+=6){const S=a[x+0],_=a[x+2],T=a[x+4],w=Math.max(S,_,T),C=Math.min(S,_,T);w>.9&&C<.1&&(S<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,S){const _=x*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function v(){const x=new V,S=new V,_=new V,T=new V,w=new $e,C=new $e,y=new $e;for(let b=0,R=0;b<s.length;b+=9,R+=6){x.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),w.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),T.copy(x).add(S).add(_).divideScalar(3);const N=m(T);M(w,R+0,x,N),M(C,R+2,S,N),M(y,R+4,_,N)}}function M(x,S,_,T){T<0&&x.x===1&&(a[S]=x.x-1),_.x===0&&_.z===0&&(a[S]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fg(e.vertices,e.indices,e.radius,e.detail)}}class Eu extends Fg{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Eu(e.radius,e.detail)}}class Ju extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,p=[],v=[],M=[],m=[];for(let h=0;h<u;h++){const x=h*d-a;for(let S=0;S<c;S++){const _=S*f-s;v.push(_,-x,0),M.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const S=x+c*h,_=x+c*(h+1),T=x+1+c*(h+1),w=x+1+c*h;p.push(S,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class Og extends Zn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new V,d=new V,p=[],v=[],M=[],m=[];for(let h=0;h<=i;h++){const x=[],S=h/i,_=a+S*o,T=e*Math.cos(_),w=Math.sqrt(e*e-T*T);let C=0;h===0&&a===0?C=.5/n:h===i&&l===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){const b=y/n,R=r+b*s;f.x=-w*Math.cos(R),f.y=T,f.z=w*Math.sin(R),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),m.push(b+C,1-S),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const S=u[h][x+1],_=u[h][x],T=u[h+1][x],w=u[h+1][x+1];(h!==0||a>0)&&p.push(S,_,w),(h!==i-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Og(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wu extends Zn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],d=new V,p=new V,v=new V;for(let M=0;M<=i;M++){const m=a+M/i*o;for(let h=0;h<=r;h++){const x=h/r*s;p.x=(e+n*Math.cos(m))*Math.cos(x),p.y=(e+n*Math.cos(m))*Math.sin(x),p.z=n*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),v.subVectors(p,d).normalize(),u.push(v.x,v.y,v.z),f.push(h/r),f.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=r;m++){const h=(r+1)*M+m-1,x=(r+1)*(M-1)+m-1,S=(r+1)*(M-1)+m,_=(r+1)*M+m;l.push(h,x,_),l.push(x,S,_)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(oy(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(oy(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Ra(t[n]);for(const r in i)e[r]=i[r]}return e}function oy(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function sD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const aD={clone:Ra,merge:dn};var oD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oD,this.fragmentShader=lD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=sD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cD extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ly extends ul{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uD extends ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dD extends ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class RE extends Cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const wf=new Rt,cy=new V,uy=new V;class fD{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ug,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cy.setFromMatrixPosition(e.matrixWorld),n.position.copy(cy),uy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(uy),n.updateMatrixWorld(),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Zo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new V,tc=new ka,vi=new V;class PE extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ec,tc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new V,dy=new $e,fy=new $e;class Ln extends PE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wp*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,dy,fy),n.subVectors(fy,dy)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hD extends fD{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class hy extends RE{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hD}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class NE extends PE{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pD extends RE{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Ws=1;class mD extends Cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Gs,Ws,e,n);r.layers=this.layers,this.add(r);const s=new Ln(Gs,Ws,e,n);s.layers=this.layers,this.add(s);const a=new Ln(Gs,Ws,e,n);a.layers=this.layers,this.add(a);const o=new Ln(Gs,Ws,e,n);o.layers=this.layers,this.add(o);const l=new Ln(Gs,Ws,e,n);l.layers=this.layers,this.add(l);const c=new Ln(Gs,Ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class gD extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hg=class Hg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Hg.prototype.isMatrix2=!0;let py=Hg;function my(t,e,n,i){const r=vD(i);switch(n){case vE:return t*e;case yE:return t*e/r.components*r.byteLength;case bg:return t*e/r.components*r.byteLength;case Ms:return t*e*2/r.components*r.byteLength;case Rg:return t*e*2/r.components*r.byteLength;case xE:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Pg:return t*e*4/r.components*r.byteLength;case Cc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(t,16)*Math.max(e,8)/4;case hp:case mp:return Math.max(t,8)*Math.max(e,8)/2;case vp:case xp:case _p:case Sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yp:case vu:case Mp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Up:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Op:case kp:case Bp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zp:case Vp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xu:case Hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vD(t){switch(t){case Dn:case hE:return{byteLength:1,components:1};case Yo:case pE:case tr:return{byteLength:2,components:1};case Ag:case Cg:return{byteLength:2,components:4};case Ui:case Tg:case Ai:return{byteLength:4,components:1};case mE:case gE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wg}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function LE(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xD(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const M=f[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_D=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ED=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ND=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$D=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YD="gl_FragColor = linearToOutputTexel( gl_FragColor );",KD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vI=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_I=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SI=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,II=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$I=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_U=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$U=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:yD,alphahash_pars_fragment:_D,alphamap_fragment:SD,alphamap_pars_fragment:MD,alphatest_fragment:ED,alphatest_pars_fragment:wD,aomap_fragment:TD,aomap_pars_fragment:AD,batching_pars_vertex:CD,batching_vertex:bD,begin_vertex:RD,beginnormal_vertex:PD,bsdfs:ND,iridescence_fragment:LD,bumpmap_pars_fragment:DD,clipping_planes_fragment:ID,clipping_planes_pars_fragment:UD,clipping_planes_pars_vertex:FD,clipping_planes_vertex:OD,color_fragment:kD,color_pars_fragment:BD,color_pars_vertex:zD,color_vertex:VD,common:HD,cube_uv_reflection_fragment:GD,defaultnormal_vertex:WD,displacementmap_pars_vertex:jD,displacementmap_vertex:XD,emissivemap_fragment:$D,emissivemap_pars_fragment:qD,colorspace_fragment:YD,colorspace_pars_fragment:KD,envmap_fragment:ZD,envmap_common_pars_fragment:JD,envmap_pars_fragment:QD,envmap_pars_vertex:eI,envmap_physical_pars_fragment:dI,envmap_vertex:tI,fog_vertex:nI,fog_pars_vertex:iI,fog_fragment:rI,fog_pars_fragment:sI,gradientmap_pars_fragment:aI,lightmap_pars_fragment:oI,lights_lambert_fragment:lI,lights_lambert_pars_fragment:cI,lights_pars_begin:uI,lights_toon_fragment:fI,lights_toon_pars_fragment:hI,lights_phong_fragment:pI,lights_phong_pars_fragment:mI,lights_physical_fragment:gI,lights_physical_pars_fragment:vI,lights_fragment_begin:xI,lights_fragment_maps:yI,lights_fragment_end:_I,lightprobes_pars_fragment:SI,logdepthbuf_fragment:MI,logdepthbuf_pars_fragment:EI,logdepthbuf_pars_vertex:wI,logdepthbuf_vertex:TI,map_fragment:AI,map_pars_fragment:CI,map_particle_fragment:bI,map_particle_pars_fragment:RI,metalnessmap_fragment:PI,metalnessmap_pars_fragment:NI,morphinstance_vertex:LI,morphcolor_vertex:DI,morphnormal_vertex:II,morphtarget_pars_vertex:UI,morphtarget_vertex:FI,normal_fragment_begin:OI,normal_fragment_maps:kI,normal_pars_fragment:BI,normal_pars_vertex:zI,normal_vertex:VI,normalmap_pars_fragment:HI,clearcoat_normal_fragment_begin:GI,clearcoat_normal_fragment_maps:WI,clearcoat_pars_fragment:jI,iridescence_pars_fragment:XI,opaque_fragment:$I,packing:qI,premultiplied_alpha_fragment:YI,project_vertex:KI,dithering_fragment:ZI,dithering_pars_fragment:JI,roughnessmap_fragment:QI,roughnessmap_pars_fragment:eU,shadowmap_pars_fragment:tU,shadowmap_pars_vertex:nU,shadowmap_vertex:iU,shadowmask_pars_fragment:rU,skinbase_vertex:sU,skinning_pars_vertex:aU,skinning_vertex:oU,skinnormal_vertex:lU,specularmap_fragment:cU,specularmap_pars_fragment:uU,tonemapping_fragment:dU,tonemapping_pars_fragment:fU,transmission_fragment:hU,transmission_pars_fragment:pU,uv_pars_fragment:mU,uv_pars_vertex:gU,uv_vertex:vU,worldpos_vertex:xU,background_vert:yU,background_frag:_U,backgroundCube_vert:SU,backgroundCube_frag:MU,cube_vert:EU,cube_frag:wU,depth_vert:TU,depth_frag:AU,distance_vert:CU,distance_frag:bU,equirect_vert:RU,equirect_frag:PU,linedashed_vert:NU,linedashed_frag:LU,meshbasic_vert:DU,meshbasic_frag:IU,meshlambert_vert:UU,meshlambert_frag:FU,meshmatcap_vert:OU,meshmatcap_frag:kU,meshnormal_vert:BU,meshnormal_frag:zU,meshphong_vert:VU,meshphong_frag:HU,meshphysical_vert:GU,meshphysical_frag:WU,meshtoon_vert:jU,meshtoon_frag:XU,points_vert:$U,points_frag:qU,shadow_vert:YU,shadow_frag:KU,sprite_vert:ZU,sprite_frag:JU},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Mi={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mi.physical={uniforms:dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const nc={r:0,b:0,g:0},QU=new Rt,DE=new Be;DE.set(-1,0,0,0,1,0,0,0,1);function eF(t,e,n,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const _=x.backgroundBlurriness>0;S=e.get(S,_)}return S}function v(x){let S=!1;const _=p(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,S){const _=p(S);_&&(_.isCubeTexture||_.mapping===Zu)?(c===void 0&&(c=new Sn(new dl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ra(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QU.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(DE),c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==rt,(u!==_||f!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Sn(new Ju(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ra(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(nc,bE(t)),n.buffers.color.setClear(nc.r,nc.g,nc.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:v,addToRenderList:M,dispose:h}}function tF(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,F,X,Y,z){let K=!1;const G=f(N,Y,X,F);s!==G&&(s=G,c(s.object)),K=p(N,Y,X,z),K&&v(N,Y,X,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(N,F,X,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,F,X,Y){const z=Y.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const G=N.isInstancedMesh===!0?N.id:0;let U=K[G];U===void 0&&(U={},K[G]=U);let D=U[X.id];D===void 0&&(D={},U[X.id]=D);let q=D[z];return q===void 0&&(q=d(l()),D[z]=q),q}function d(N){const F=[],X=[],Y=[];for(let z=0;z<n;z++)F[z]=0,X[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:Y,object:N,attributes:{},index:null}}function p(N,F,X,Y){const z=s.attributes,K=F.attributes;let G=0;const U=X.getAttributes();for(const D in U)if(U[D].location>=0){const ie=z[D];let oe=K[D];if(oe===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==Y}function v(N,F,X,Y){const z={},K=F.attributes;let G=0;const U=X.getAttributes();for(const D in U)if(U[D].location>=0){let ie=K[D];ie===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),z[D]=oe,G++}s.attributes=z,s.attributesNum=G,s.index=Y}function M(){const N=s.newAttributes;for(let F=0,X=N.length;F<X;F++)N[F]=0}function m(N){h(N,0)}function h(N,F){const X=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;X[N]=1,Y[N]===0&&(t.enableVertexAttribArray(N),Y[N]=1),z[N]!==F&&(t.vertexAttribDivisor(N,F),z[N]=F)}function x(){const N=s.newAttributes,F=s.enabledAttributes;for(let X=0,Y=F.length;X<Y;X++)F[X]!==N[X]&&(t.disableVertexAttribArray(X),F[X]=0)}function S(N,F,X,Y,z,K,G){G===!0?t.vertexAttribIPointer(N,F,X,z,K):t.vertexAttribPointer(N,F,X,Y,z,K)}function _(N,F,X,Y){M();const z=Y.attributes,K=X.getAttributes(),G=F.defaultAttributeValues;for(const U in K){const D=K[U];if(D.location>=0){let q=z[U];if(q===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const ie=q.normalized,oe=q.itemSize,ze=e.get(q);if(ze===void 0)continue;const Ue=ze.buffer,Ge=ze.type,Z=ze.bytesPerElement,ne=Ge===t.INT||Ge===t.UNSIGNED_INT||q.gpuType===Tg;if(q.isInterleavedBufferAttribute){const se=q.data,De=se.stride,ke=q.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<D.locationSize;Ne++)h(D.location+Ne,se.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<D.locationSize;Ne++)m(D.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Ne=0;Ne<D.locationSize;Ne++)S(D.location+Ne,oe/D.locationSize,Ge,ie,De*Z,(ke+oe/D.locationSize*Ne)*Z,ne)}else{if(q.isInstancedBufferAttribute){for(let se=0;se<D.locationSize;se++)h(D.location+se,q.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let se=0;se<D.locationSize;se++)m(D.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let se=0;se<D.locationSize;se++)S(D.location+se,oe/D.locationSize,Ge,ie,oe*Z,oe/D.locationSize*se*Z,ne)}}else if(G!==void 0){const ie=G[U];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(D.location,ie);break;case 3:t.vertexAttrib3fv(D.location,ie);break;case 4:t.vertexAttrib4fv(D.location,ie);break;default:t.vertexAttrib1fv(D.location,ie)}}}}x()}function T(){b();for(const N in i){const F=i[N];for(const X in F){const Y=F[X];for(const z in Y){const K=Y[z];for(const G in K)u(K[G].object),delete K[G];delete Y[z]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const X in F){const Y=F[X];for(const z in Y){const K=Y[z];for(const G in K)u(K[G].object),delete K[G];delete Y[z]}}delete i[N.id]}function C(N){for(const F in i){const X=i[F];for(const Y in X){const z=X[Y];if(z[N.id]===void 0)continue;const K=z[N.id];for(const G in K)u(K[G].object),delete K[G];delete z[N.id]}}}function y(N){for(const F in i){const X=i[F],Y=N.isInstancedMesh===!0?N.id:0,z=X[Y];if(z!==void 0){for(const K in z){const G=z[K];for(const U in G)u(G[U].object),delete G[U];delete z[K]}delete X[Y],Object.keys(X).length===0&&delete i[F]}}}function b(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function nF(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function iF(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ai&&!y)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,maxSamples:T,samples:w}}function rF(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ns,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,S=x*4;let _=h.clippingState||null;l.value=_,_=u(v,d,S,p);for(let T=0;T!==S;++T)_[T]=n[T];h.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const h=p+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,_=p;S!==M;++S,_+=4)a.copy(f[S]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Ar=4,gy=[.125,.215,.35,.446,.526,.582],rs=20,sF=256,to=new NE,vy=new tt;let Tf=null,Af=0,Cf=0,bf=!1;const aF=new V;class xy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=aF}=s;Tf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_y(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,Af,Cf),this._renderer.xr.enabled=bf,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:tr,format:li,colorSpace:yu,depthBuffer:!1},r=yy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yy(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oF(s)),this._blurMaterial=cF(s,e,n),this._ggxMaterial=lF(s,e,n)}return r}_compileMaterial(e){const n=new Sn(new Zn,e);this._renderer.compile(n,to)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(vy),f.toneMapping=Ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new dl,new Mu({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let h=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,h=!0):(m.color.copy(vy),h=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;js(r,_*T,S>2?T:0,T,T),f.setRenderTarget(r),h&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_y());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,to)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:v}=this,M=this._sizeLods[i],m=3*M*(i>v-Ar?i-v+Ar:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,js(s,m,h,3*M,2*M),r.setRenderTarget(s),r.render(o,to),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,js(e,m,h,3*M,2*M),r.setRenderTarget(e),r.render(o,to)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),M=s/v,m=isFinite(s)?1+Math.floor(u*M):rs;m>rs&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const h=[];let x=0;for(let C=0;C<rs;++C){const y=C/M,b=Math.exp(-y*y/2);h.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const _=this._sizeLods[r],T=3*_*(r>S-Ar?r-S+Ar:0),w=4*(this._cubeSize-_);js(n,T,w,3*_,2*_),l.setRenderTarget(n),l.render(f,to)}}function oF(t){const e=[],n=[],i=[];let r=t;const s=t-Ar+1+gy.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ar?l=gy[a-t+Ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,M=3,m=2,h=1,x=new Float32Array(M*v*p),S=new Float32Array(m*v*p),_=new Float32Array(h*v*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,y=w>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];x.set(b,M*v*w),S.set(d,m*v*w);const R=[w,w,w,w,w,w];_.set(R,h*v*w)}const T=new Zn;T.setAttribute("position",new Di(x,M)),T.setAttribute("uv",new Di(S,m)),T.setAttribute("faceIndex",new Di(_,h)),i.push(new Sn(T,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function yy(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lF(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sF,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function cF(t,e,n){const i=new Float32Array(rs),r=new V(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function _y(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Sy(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class IE extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new AE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dl(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Yi});s.uniforms.tEquirect.value=n;const a=new Sn(r,s),o=n.minFilter;return n.minFilter===us&&(n.minFilter=cn),new mD(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function uF(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Kd||p===Zd)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new IE(v.height);return M.fromEquirectangularTexture(t,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,v=p===Kd||p===Zd,M=p===Ss||p===Ca;if(v||M){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new xy(t)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return v&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new xy(t)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===Kd?d.mapping=Ss:p===Zd&&(d.mapping=Ca),d}function l(d){let p=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function dF(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ma("WebGLRenderer: "+i+" extension not supported."),r}}}function fF(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const x=p.array;M=p.version;for(let S=0,_=x.length;S<_;S+=3){const T=x[S+0],w=x[S+1],C=x[S+2];d.push(T,w,w,C,C,T)}}else{const x=v.array;M=v.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const T=S+0,w=S+1,C=S+2;d.push(T,w,w,C,C,T)}}const m=new(v.count>=65535?TE:wE)(d,1);m.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hF(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*a,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let M=0;for(let m=0;m<p;m++)M+=d[m];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pF(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mF(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),M===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*f),y=new SE(C,T,w,f);y.type=Ai,y.needsUpdate=!0;const b=_*4;for(let N=0;N<f;N++){const F=h[N],X=x[N],Y=S[N],z=T*w*4*N;for(let K=0;K<F.count;K++){const G=K*b;v===!0&&(r.fromBufferAttribute(F,K),C[z+G+0]=r.x,C[z+G+1]=r.y,C[z+G+2]=r.z,C[z+G+3]=0),M===!0&&(r.fromBufferAttribute(X,K),C[z+G+4]=r.x,C[z+G+5]=r.y,C[z+G+6]=r.z,C[z+G+7]=0),m===!0&&(r.fromBufferAttribute(Y,K),C[z+G+8]=r.x,C[z+G+9]=r.y,C[z+G+10]=r.z,C[z+G+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new $e(T,w)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function gF(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const vF={[sE]:"LINEAR_TONE_MAPPING",[aE]:"REINHARD_TONE_MAPPING",[oE]:"CINEON_TONE_MAPPING",[lE]:"ACES_FILMIC_TONE_MAPPING",[uE]:"AGX_TONE_MAPPING",[dE]:"NEUTRAL_TONE_MAPPING",[cE]:"CUSTOM_TONE_MAPPING"};function xF(t,e,n,i,r,s){const a=new Li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ba(e,n):void 0}),o=new Li(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new Zn;l.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const c=new cD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Sn(l,c),f=new NE(-1,1,1,-1,0,1);let d=null,p=null,v=!1,M,m=null,h=[],x=!1;this.setSize=function(S,_){a.setSize(S,_),o.setSize(S,_);for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(S,_)}},this.setEffects=function(S){h=S,x=h.length>0&&h[0].isRenderPass===!0;const _=a.width,T=a.height;for(let w=0;w<h.length;w++){const C=h[w];C.setSize&&C.setSize(_,T)}},this.begin=function(S,_){if(v||S.toneMapping===Ni&&h.length===0)return!1;if(m=_,_!==null){const T=_.width,w=_.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return x===!1&&S.setRenderTarget(a),M=S.toneMapping,S.toneMapping=Ni,!0},this.hasRenderPass=function(){return x},this.end=function(S,_){S.toneMapping=M,v=!0;let T=a,w=o;for(let C=0;C<h.length;C++){const y=h[C];if(y.enabled!==!1&&(y.render(S,w,T,_),y.needsSwap!==!1)){const b=T;T=w,w=b}}if(d!==S.outputColorSpace||p!==S.toneMapping){d=S.outputColorSpace,p=S.toneMapping,c.defines={},Ke.getTransfer(d)===rt&&(c.defines.SRGB_TRANSFER="");const C=vF[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(u,f),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const UE=new gn,jp=new ba(1,1),FE=new SE,OE=new BL,kE=new AE,My=[],Ey=[],wy=new Float32Array(16),Ty=new Float32Array(9),Ay=new Float32Array(4);function Ba(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=My[r];if(s===void 0&&(s=new Float32Array(r),My[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ed(t,e){let n=Ey[e];n===void 0&&(n=new Int32Array(e),Ey[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yF(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _F(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function SF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function MF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function EF(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;Ay.set(i),t.uniformMatrix2fv(this.addr,!1,Ay),jt(n,i)}}function wF(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;Ty.set(i),t.uniformMatrix3fv(this.addr,!1,Ty),jt(n,i)}}function TF(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;wy.set(i),t.uniformMatrix4fv(this.addr,!1,wy),jt(n,i)}}function AF(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function bF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function RF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function PF(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function LF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function DF(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function IF(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(jp.compareFunction=n.isReversedDepthBuffer()?Lg:Ng,s=jp):s=UE,n.setTexture2D(e||s,r)}function UF(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OE,r)}function FF(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kE,r)}function OF(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||FE,r)}function kF(t){switch(t){case 5126:return yF;case 35664:return _F;case 35665:return SF;case 35666:return MF;case 35674:return EF;case 35675:return wF;case 35676:return TF;case 5124:case 35670:return AF;case 35667:case 35671:return CF;case 35668:case 35672:return bF;case 35669:case 35673:return RF;case 5125:return PF;case 36294:return NF;case 36295:return LF;case 36296:return DF;case 35678:case 36198:case 36298:case 36306:case 35682:return IF;case 35679:case 36299:case 36307:return UF;case 35680:case 36300:case 36308:case 36293:return FF;case 36289:case 36303:case 36311:case 36292:return OF}}function BF(t,e){t.uniform1fv(this.addr,e)}function zF(t,e){const n=Ba(e,this.size,2);t.uniform2fv(this.addr,n)}function VF(t,e){const n=Ba(e,this.size,3);t.uniform3fv(this.addr,n)}function HF(t,e){const n=Ba(e,this.size,4);t.uniform4fv(this.addr,n)}function GF(t,e){const n=Ba(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WF(t,e){const n=Ba(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jF(t,e){const n=Ba(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XF(t,e){t.uniform1iv(this.addr,e)}function $F(t,e){t.uniform2iv(this.addr,e)}function qF(t,e){t.uniform3iv(this.addr,e)}function YF(t,e){t.uniform4iv(this.addr,e)}function KF(t,e){t.uniform1uiv(this.addr,e)}function ZF(t,e){t.uniform2uiv(this.addr,e)}function JF(t,e){t.uniform3uiv(this.addr,e)}function QF(t,e){t.uniform4uiv(this.addr,e)}function eO(t,e,n){const i=this.cache,r=e.length,s=ed(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=jp:a=UE;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function tO(t,e,n){const i=this.cache,r=e.length,s=ed(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||OE,s[a])}function nO(t,e,n){const i=this.cache,r=e.length,s=ed(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kE,s[a])}function iO(t,e,n){const i=this.cache,r=e.length,s=ed(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||FE,s[a])}function rO(t){switch(t){case 5126:return BF;case 35664:return zF;case 35665:return VF;case 35666:return HF;case 35674:return GF;case 35675:return WF;case 35676:return jF;case 5124:case 35670:return XF;case 35667:case 35671:return $F;case 35668:case 35672:return qF;case 35669:case 35673:return YF;case 5125:return KF;case 36294:return ZF;case 36295:return JF;case 36296:return QF;case 35678:case 36198:case 36298:case 36306:case 35682:return eO;case 35679:case 36299:case 36307:return tO;case 35680:case 36300:case 36308:case 36293:return nO;case 36289:case 36303:case 36311:case 36292:return iO}}class sO{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kF(n.type)}}class aO{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rO(n.type)}}class oO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function Cy(t,e){t.seq.push(e),t.map[e.id]=e}function lO(t,e,n){const i=t.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),a=Rf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cy(n,c===void 0?new sO(o,t,e):new aO(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new oO(o),Cy(n,f)),n=f}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);lO(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function by(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cO=37297;let uO=0;function dO(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ry=new Be;function fO(t){Ke._getMatrix(Ry,Ke.workingColorSpace,t);const e=`mat3( ${Ry.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case _u:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Py(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+dO(t.getShaderSource(e),o)}else return s}function hO(t,e){const n=fO(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pO={[sE]:"Linear",[aE]:"Reinhard",[oE]:"Cineon",[lE]:"ACESFilmic",[uE]:"AgX",[dE]:"Neutral",[cE]:"Custom"};function mO(t,e){const n=pO[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ic=new V;function gO(){Ke.getLuminanceCoefficients(ic);const t=ic.x.toFixed(4),e=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vO(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function xO(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yO(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fo(t){return t!==""}function Ny(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ly(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _O=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(t){return t.replace(_O,MO)}const SO=new Map;function MO(t,e){let n=We[e];if(n===void 0){const i=SO.get(e);if(i!==void 0)n=We[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xp(n)}const EO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dy(t){return t.replace(EO,wO)}function wO(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iy(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TO={[Ac]:"SHADOWMAP_TYPE_PCF",[co]:"SHADOWMAP_TYPE_VSM"};function AO(t){return TO[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CO={[Ss]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function bO(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":CO[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RO={[Ca]:"ENVMAP_MODE_REFRACTION"};function PO(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RO[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NO={[rE]:"ENVMAP_BLENDING_MULTIPLY",[xL]:"ENVMAP_BLENDING_MIX",[yL]:"ENVMAP_BLENDING_ADD"};function LO(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":NO[t.combine]||"ENVMAP_BLENDING_NONE"}function DO(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IO(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=AO(n),c=bO(n),u=PO(n),f=LO(n),d=DO(n),p=vO(n),v=xO(s),M=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fo).join(`
`),h.length>0&&(h+=`
`)):(m=[Iy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),h=[Iy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?We.tonemapping_pars_fragment:"",n.toneMapping!==Ni?mO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,hO("linearToOutputTexel",n.outputColorSpace),gO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),a=Xp(a),a=Ny(a,n),a=Ly(a,n),o=Xp(o),o=Ny(o,n),o=Ly(o,n),a=Dy(a),o=Dy(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=x+m+a,_=x+h+o,T=by(r,r.VERTEX_SHADER,S),w=by(r,r.FRAGMENT_SHADER,_);r.attachShader(M,T),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(w)||"",z=F.trim(),K=X.trim(),G=Y.trim();let U=!0,D=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,w);else{const q=Py(r,T,"vertex"),ie=Py(r,w,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+q+`
`+ie)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(K===""||G==="")&&(D=!1);D&&(N.diagnostics={runnable:U,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(T),r.deleteShader(w),y=new Nc(r,M),b=yO(r,M)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(M,cO)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uO++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let UO=0;class FO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OO(e),n.set(e,i)),i}}class OO{constructor(e){this.id=UO++,this.code=e,this.usedTimes=0}}function kO(t){return t===Ms||t===vu||t===xu}function BO(t,e,n,i,r,s){const a=new ME,o=new FO,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,b,R,N,F,X){const Y=N.fog,z=F.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||K,G),D=U&&U.mapping===Zu?U.image.height:null,q=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=ie!==void 0?ie.length:0;let ze=0;z.morphAttributes.position!==void 0&&(ze=1),z.morphAttributes.normal!==void 0&&(ze=2),z.morphAttributes.color!==void 0&&(ze=3);let Ue,Ge,Z,ne;if(q){const Ee=Mi[q];Ue=Ee.vertexShader,Ge=Ee.fragmentShader}else{Ue=y.vertexShader,Ge=y.fragmentShader;const Ee=o.getVertexShaderStage(y),Tt=o.getFragmentShaderStage(y);o.update(y,Ee,Tt),Z=Ee.id,ne=Tt.id}const se=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,xt=!!y.map,Xe=!!y.matcap,it=!!U,Je=!!y.aoMap,Ye=!!y.lightMap,yt=!!y.bumpMap&&y.wireframe===!1,Pt=!!y.normalMap,Nt=!!y.displacementMap,zt=!!y.emissiveMap,pt=!!y.metalnessMap,_t=!!y.roughnessMap,I=y.anisotropy>0,Fe=y.clearcoat>0,Ae=y.dispersion>0,P=y.iridescence>0,E=y.sheen>0,k=y.transmission>0,H=I&&!!y.anisotropyMap,J=Fe&&!!y.clearcoatMap,le=Fe&&!!y.clearcoatNormalMap,ue=Fe&&!!y.clearcoatRoughnessMap,Q=P&&!!y.iridescenceMap,te=P&&!!y.iridescenceThicknessMap,de=E&&!!y.sheenColorMap,Ce=E&&!!y.sheenRoughnessMap,pe=!!y.specularMap,fe=!!y.specularColorMap,Pe=!!y.specularIntensityMap,Le=k&&!!y.transmissionMap,Ve=k&&!!y.thicknessMap,O=!!y.gradientMap,ce=!!y.alphaMap,ee=y.alphaTest>0,he=!!y.alphaHash,xe=!!y.extensions;let re=Ni;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(re=t.toneMapping);const Te={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:Ge,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:xt,matcap:Xe,envMap:it,envMapMode:it&&U.mapping,envMapCubeUVHeight:D,aoMap:Je,lightMap:Ye,bumpMap:yt,normalMap:Pt,displacementMap:Nt,emissiveMap:zt,normalMapObjectSpace:Pt&&y.normalMapType===ML,normalMapTangentSpace:Pt&&y.normalMapType===Gp,packedNormalMap:Pt&&y.normalMapType===Gp&&kO(y.normalMap.format),metalnessMap:pt,roughnessMap:_t,anisotropy:I,anisotropyMap:H,clearcoat:Fe,clearcoatMap:J,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:Ae,iridescence:P,iridescenceMap:Q,iridescenceThicknessMap:te,sheen:E,sheenColorMap:de,sheenRoughnessMap:Ce,specularMap:pe,specularColorMap:fe,specularIntensityMap:Pe,transmission:k,transmissionMap:Le,thicknessMap:Ve,gradientMap:O,opaque:y.transparent===!1&&y.blending===pa&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:ee,alphaHash:he,combine:y.combine,mapUv:xt&&v(y.map.channel),aoMapUv:Je&&v(y.aoMap.channel),lightMapUv:Ye&&v(y.lightMap.channel),bumpMapUv:yt&&v(y.bumpMap.channel),normalMapUv:Pt&&v(y.normalMap.channel),displacementMapUv:Nt&&v(y.displacementMap.channel),emissiveMapUv:zt&&v(y.emissiveMap.channel),metalnessMapUv:pt&&v(y.metalnessMap.channel),roughnessMapUv:_t&&v(y.roughnessMap.channel),anisotropyMapUv:H&&v(y.anisotropyMap.channel),clearcoatMapUv:J&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(y.sheenRoughnessMap.channel),specularMapUv:pe&&v(y.specularMap.channel),specularColorMapUv:fe&&v(y.specularColorMap.channel),specularIntensityMapUv:Pe&&v(y.specularIntensityMap.channel),transmissionMapUv:Le&&v(y.transmissionMap.channel),thicknessMapUv:Ve&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pt||I),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(xt||ce),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Pt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(h(b,y),x(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function h(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const b=p[y.type];let R;if(b){const N=Mi[b];R=aD.clone(N.uniforms)}else R=y.uniforms;return R}function _(y,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new IO(t,b,y,r),c.push(R),u.set(b,R)),R}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function zO(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function VO(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Uy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fy(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,M,m,h){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:h},t[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=v,x.materialVariant=a(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=m,x.group=h),e++,x}function l(d,p,v,M,m,h){const x=o(d,p,v,M,m,h);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function c(d,p,v,M,m,h){const x=o(d,p,v,M,m,h);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function u(d,p,v){n.length>1&&n.sort(d||VO),i.length>1&&i.sort(p||Uy),r.length>1&&r.sort(p||Uy),v&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,p=t.length;d<p;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function HO(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Fy,t.set(i,[a])):r>=s.length?(a=new Fy,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function GO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new tt};break;case"SpotLight":n={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function WO(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jO=0;function XO(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $O(t){const e=new GO,n=WO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Rt,a=new Rt;function o(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,M=0,m=0,h=0,x=0,S=0,_=0,T=0,w=0,C=0;c.sort(XO);for(let b=0,R=c.length;b<R;b++){const N=c[b],F=N.color,X=N.intensity,Y=N.distance;let z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ms?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=F.r*X,f+=F.g*X,d+=F.b*X;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],X);C++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=K,p++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(F).multiplyScalar(X),K.distance=Y,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[M]=K;const G=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,G.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[M]=G.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=z,_++}M++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(F).multiplyScalar(X),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=K,m++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const G=N.shadow,U=n.get(N);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=N.shadow.matrix,S++}i.point[v]=K,v++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(X),K.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[h]=K,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==v||y.spotLength!==M||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==_||y.numSpotMaps!==T||y.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,y.directionalLength=p,y.pointLength=v,y.spotLength=M,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=_,y.numSpotMaps=T,y.numLightProbes=C,i.version=jO++)}function l(c,u){let f=0,d=0,p=0,v=0,M=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const S=c[h];if(S.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(S.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=i.hemi[M];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Oy(t){const e=new $O(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qO(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Oy(t),e.set(r,[o])):s>=a.length?(o=new Oy(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const YO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZO=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],JO=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ky=new Rt,no=new V,Pf=new V;function QO(t,e,n){let i=new Ug;const r=new $e,s=new $e,a=new Mt,o=new uD,l=new dD,c={},u=n.maxTextureSize,f={[zr]:An,[An]:zr,[wi]:wi},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:YO,fragmentShader:KO}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Zn;v.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let h=this.type;this.render=function(w,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===QN&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);const b=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Yi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=h!==this.type;X&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=w.length;Y<z;Y++){const K=w[Y],G=K.shadow;if(G===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const U=G.getFrameExtents();r.multiply(U),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,G.mapSize.y=s.y));const D=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=D,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===co){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Li(r.x,r.y,{format:Ms,type:tr,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new ba(r.x,r.y,Ai),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=nr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt}else K.isPointLight?(G.map=new IE(r.x),G.map.depthTexture=new rD(r.x,Ui)):(G.map=new Li(r.x,r.y),G.map.depthTexture=new ba(r.x,r.y,Ui)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=nr,this.type===Ac?(G.map.depthTexture.compareFunction=D?Lg:Ng,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt);G.camera.updateProjectionMatrix()}const q=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<q;ie++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(G.map),t.clear());const oe=G.getViewport(ie);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a)}if(K.isPointLight){const oe=G.camera,ze=G.matrix,Ue=K.distance||oe.far;Ue!==oe.far&&(oe.far=Ue,oe.updateProjectionMatrix()),no.setFromMatrixPosition(K.matrixWorld),oe.position.copy(no),Pf.copy(oe.position),Pf.add(ZO[ie]),oe.up.copy(JO[ie]),oe.lookAt(Pf),oe.updateMatrixWorld(),ze.makeTranslation(-no.x,-no.y,-no.z),ky.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ky,oe.coordinateSystem,oe.reversedDepth)}else G.updateMatrices(K);i=G.getFrustum(),_(C,y,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===co&&x(G,y),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,R,N)};function x(w,C){const y=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Li(r.x,r.y,{format:Ms,type:tr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,y,d,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,y,p,M,null)}function S(w,C,y,b){let R=null;const N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=y.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=R.uuid,X=C.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let z=Y[X];z===void 0&&(z=R.clone(),Y[X]=z,C.addEventListener("dispose",T)),R=z}if(R.visible=C.visible,R.wireframe=C.wireframe,b===co?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=y}return R}function _(w,C,y,b,R){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===co)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const X=e.update(w),Y=w.material;if(Array.isArray(Y)){const z=X.groups;for(let K=0,G=z.length;K<G;K++){const U=z[K],D=Y[U.materialIndex];if(D&&D.visible){const q=S(w,D,b,R);w.onBeforeShadow(t,w,C,y,X,q,U),t.renderBufferDirect(y,null,X,q,w,U),w.onAfterShadow(t,w,C,y,X,q,U)}}}else if(Y.visible){const z=S(w,Y,b,R);w.onBeforeShadow(t,w,C,y,X,z,null),t.renderBufferDirect(y,null,X,z,w,null),w.onAfterShadow(t,w,C,y,X,z,null)}}const F=w.children;for(let X=0,Y=F.length;X<Y;X++)_(F[X],C,y,b,R)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const b=c[y],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function ek(t,e){function n(){let O=!1;const ce=new Mt;let ee=null;const he=new Mt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!O&&(t.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){O=xe},setClear:function(xe,re,Te,Ee,Tt){Tt===!0&&(xe*=Ee,re*=Ee,Te*=Ee),ce.set(xe,re,Te,Ee),he.equals(ce)===!1&&(t.clearColor(xe,re,Te,Ee),he.copy(ce))},reset:function(){O=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let O=!1,ce=!1,ee=null,he=null,xe=null;return{setReversed:function(re){if(ce!==re){const Te=e.get("EXT_clip_control");re?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Ee=xe;xe=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(re){re?se(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(re){ee!==re&&!O&&(t.depthMask(re),ee=re)},setFunc:function(re){if(ce&&(re=LL[re]),he!==re){switch(re){case rp:t.depthFunc(t.NEVER);break;case sp:t.depthFunc(t.ALWAYS);break;case ap:t.depthFunc(t.LESS);break;case Aa:t.depthFunc(t.LEQUAL);break;case op:t.depthFunc(t.EQUAL);break;case lp:t.depthFunc(t.GEQUAL);break;case cp:t.depthFunc(t.GREATER);break;case up:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=re}},setLocked:function(re){O=re},setClear:function(re){xe!==re&&(xe=re,ce&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,ee=null,he=null,xe=null,ce=!1}}}function r(){let O=!1,ce=null,ee=null,he=null,xe=null,re=null,Te=null,Ee=null,Tt=null;return{setTest:function(dt){O||(dt?se(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!O&&(t.stencilMask(dt),ce=dt)},setFunc:function(dt,hi,pi){(ee!==dt||he!==hi||xe!==pi)&&(t.stencilFunc(dt,hi,pi),ee=dt,he=hi,xe=pi)},setOp:function(dt,hi,pi){(re!==dt||Te!==hi||Ee!==pi)&&(t.stencilOp(dt,hi,pi),re=dt,Te=hi,Ee=pi)},setLocked:function(dt){O=dt},setClear:function(dt){Tt!==dt&&(t.clearStencil(dt),Tt=dt)},reset:function(){O=!1,ce=null,ee=null,he=null,xe=null,re=null,Te=null,Ee=null,Tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,v=[],M=null,m=!1,h=null,x=null,S=null,_=null,T=null,w=null,C=null,y=new tt(0,0,0),b=0,R=!1,N=null,F=null,X=null,Y=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(D)[1]),G=U>=1):D.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),G=U>=2);let q=null,ie={};const oe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ue=new Mt().fromArray(oe),Ge=new Mt().fromArray(ze);function Z(O,ce,ee,he){const xe=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<ee;Te++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return re}const ne={};ne[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(Aa),yt(!1),Pt(kx),se(t.CULL_FACE),Je(Yi);function se(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function De(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function ke(O,ce){return d[O]!==ce?(t.bindFramebuffer(O,ce),d[O]=ce,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ne(O,ce){let ee=v,he=!1;if(O){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const xe=O.textures;if(ee.length!==xe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Te=xe.length;re<Te;re++)ee[re]=t.COLOR_ATTACHMENT0+re;ee.length=xe.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function xt(O){return M!==O?(t.useProgram(O),M=O,!0):!1}const Xe={[is]:t.FUNC_ADD,[tL]:t.FUNC_SUBTRACT,[nL]:t.FUNC_REVERSE_SUBTRACT};Xe[iL]=t.MIN,Xe[rL]=t.MAX;const it={[sL]:t.ZERO,[aL]:t.ONE,[oL]:t.SRC_COLOR,[np]:t.SRC_ALPHA,[hL]:t.SRC_ALPHA_SATURATE,[dL]:t.DST_COLOR,[cL]:t.DST_ALPHA,[lL]:t.ONE_MINUS_SRC_COLOR,[ip]:t.ONE_MINUS_SRC_ALPHA,[fL]:t.ONE_MINUS_DST_COLOR,[uL]:t.ONE_MINUS_DST_ALPHA,[pL]:t.CONSTANT_COLOR,[mL]:t.ONE_MINUS_CONSTANT_COLOR,[gL]:t.CONSTANT_ALPHA,[vL]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(O,ce,ee,he,xe,re,Te,Ee,Tt,dt){if(O===Yi){m===!0&&(De(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),O!==eL){if(O!==h||dt!==R){if((x!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),x=is,T=is),dt)switch(O){case pa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bx:t.blendFunc(t.ONE,t.ONE);break;case zx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",O);break}else switch(O){case pa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zx:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vx:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",O);break}S=null,_=null,w=null,C=null,y.set(0,0,0),b=0,h=O,R=dt}return}xe=xe||ce,re=re||ee,Te=Te||he,(ce!==x||xe!==T)&&(t.blendEquationSeparate(Xe[ce],Xe[xe]),x=ce,T=xe),(ee!==S||he!==_||re!==w||Te!==C)&&(t.blendFuncSeparate(it[ee],it[he],it[re],it[Te]),S=ee,_=he,w=re,C=Te),(Ee.equals(y)===!1||Tt!==b)&&(t.blendColor(Ee.r,Ee.g,Ee.b,Tt),y.copy(Ee),b=Tt),h=O,R=!1}function Ye(O,ce){O.side===wi?De(t.CULL_FACE):se(t.CULL_FACE);let ee=O.side===An;ce&&(ee=!ee),yt(ee),O.blending===pa&&O.transparent===!1?Je(Yi):Je(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function yt(O){N!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),N=O)}function Pt(O){O!==ZN?(se(t.CULL_FACE),O!==F&&(O===kx?t.cullFace(t.BACK):O===JN?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),F=O}function Nt(O){O!==X&&(G&&t.lineWidth(O),X=O)}function zt(O,ce,ee){O?(se(t.POLYGON_OFFSET_FILL),(Y!==ce||z!==ee)&&(Y=ce,z=ee,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,ee))):De(t.POLYGON_OFFSET_FILL)}function pt(O){O?se(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function _t(O){O===void 0&&(O=t.TEXTURE0+K-1),q!==O&&(t.activeTexture(O),q=O)}function I(O,ce,ee){ee===void 0&&(q===null?ee=t.TEXTURE0+K-1:ee=q);let he=ie[ee];he===void 0&&(he={type:void 0,texture:void 0},ie[ee]=he),(he.type!==O||he.texture!==ce)&&(q!==ee&&(t.activeTexture(ee),q=ee),t.bindTexture(O,ce||ne[O]),he.type=O,he.texture=ce)}function Fe(){const O=ie[q];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ae(){try{t.compressedTexImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function E(){try{t.texSubImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function k(){try{t.texSubImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function le(){try{t.texStorage2D(...arguments)}catch(O){et("WebGLState:",O)}}function ue(){try{t.texStorage3D(...arguments)}catch(O){et("WebGLState:",O)}}function Q(){try{t.texImage2D(...arguments)}catch(O){et("WebGLState:",O)}}function te(){try{t.texImage3D(...arguments)}catch(O){et("WebGLState:",O)}}function de(O){return f[O]!==void 0?f[O]:t.getParameter(O)}function Ce(O,ce){f[O]!==ce&&(t.pixelStorei(O,ce),f[O]=ce)}function pe(O){Ue.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ue.copy(O))}function fe(O){Ge.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function Pe(O,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let he=ee.get(O);he===void 0&&(he=t.getUniformBlockIndex(ce,O.name),ee.set(O,he))}function Le(O,ce){const he=c.get(ce).get(O);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,O.__bindingPointIndex),l.set(ce,he))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},q=null,ie={},d={},p=new WeakMap,v=[],M=null,m=!1,h=null,x=null,S=null,_=null,T=null,w=null,C=null,y=new tt(0,0,0),b=0,R=!1,N=null,F=null,X=null,Y=null,z=null,Ue.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:De,bindFramebuffer:ke,drawBuffers:Ne,useProgram:xt,setBlending:Je,setMaterial:Ye,setFlipSided:yt,setCullFace:Pt,setLineWidth:Nt,setPolygonOffset:zt,setScissorTest:pt,activeTexture:_t,bindTexture:I,unbindTexture:Fe,compressedTexImage2D:Ae,compressedTexImage3D:P,texImage2D:Q,texImage3D:te,pixelStorei:Ce,getParameter:de,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:ue,texSubImage2D:E,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:pe,viewport:fe,reset:Ve}}function tk(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return v?new OffscreenCanvas(P,E):Su("canvas")}function m(P,E,k){let H=1;const J=Ae(P);if((J.width>k||J.height>k)&&(H=k/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(H*J.width),ue=Math.floor(H*J.height);d===void 0&&(d=M(le,ue));const Q=E?M(le,ue):d;return Q.width=le,Q.height=ue,Q.getContext("2d").drawImage(P,0,0,le,ue),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+le+"x"+ue+")."),Q}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function h(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,E,k,H,J,le=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;H&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===t.RED&&(k===t.FLOAT&&(Q=t.R32F),k===t.HALF_FLOAT&&(Q=t.R16F),k===t.UNSIGNED_BYTE&&(Q=t.R8),k===t.UNSIGNED_SHORT&&ue&&(Q=ue.R16_EXT),k===t.SHORT&&ue&&(Q=ue.R16_SNORM_EXT)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.R8UI),k===t.UNSIGNED_SHORT&&(Q=t.R16UI),k===t.UNSIGNED_INT&&(Q=t.R32UI),k===t.BYTE&&(Q=t.R8I),k===t.SHORT&&(Q=t.R16I),k===t.INT&&(Q=t.R32I)),E===t.RG&&(k===t.FLOAT&&(Q=t.RG32F),k===t.HALF_FLOAT&&(Q=t.RG16F),k===t.UNSIGNED_BYTE&&(Q=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(Q=ue.RG16_EXT),k===t.SHORT&&ue&&(Q=ue.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RG8UI),k===t.UNSIGNED_SHORT&&(Q=t.RG16UI),k===t.UNSIGNED_INT&&(Q=t.RG32UI),k===t.BYTE&&(Q=t.RG8I),k===t.SHORT&&(Q=t.RG16I),k===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),k===t.UNSIGNED_INT&&(Q=t.RGB32UI),k===t.BYTE&&(Q=t.RGB8I),k===t.SHORT&&(Q=t.RGB16I),k===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),k===t.UNSIGNED_INT&&(Q=t.RGBA32UI),k===t.BYTE&&(Q=t.RGBA8I),k===t.SHORT&&(Q=t.RGBA16I),k===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(Q=ue.RGB16_EXT),k===t.SHORT&&ue&&(Q=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),E===t.RGBA){const te=le?_u:Ke.getTransfer(J);k===t.FLOAT&&(Q=t.RGBA32F),k===t.HALF_FLOAT&&(Q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Q=te===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(Q=ue.RGBA16_EXT),k===t.SHORT&&ue&&(Q=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(P,E){let k;return P?E===null||E===Ui||E===Ko?k=t.DEPTH24_STENCIL8:E===Ai?k=t.DEPTH32F_STENCIL8:E===Yo&&(k=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ui||E===Ko?k=t.DEPTH_COMPONENT24:E===Ai?k=t.DEPTH_COMPONENT32F:E===Yo&&(k=t.DEPTH_COMPONENT16),k}function w(P,E){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),b(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function y(P){const E=P.target;E.removeEventListener("dispose",y),N(E)}function b(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,H=p.get(k);if(H){const J=H[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(P),Object.keys(H).length===0&&p.delete(k)}i.remove(P)}function R(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const k=P.source,H=p.get(k);delete H[E.__cacheKey],a.memory.textures--}function N(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let J=0;J<E.__webglFramebuffer[H].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[H][J]);else t.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)t.deleteFramebuffer(E.__webglFramebuffer[H]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let H=0,J=k.length;H<J;H++){const le=i.get(k[H]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(k[H])}i.remove(P)}let F=0;function X(){F=0}function Y(){return F}function z(P){F=P}function K(){const P=F;return P>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function G(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function U(P,E){const k=i.get(P);if(P.isVideoTexture&&I(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const H=P.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,P,E);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function D(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){De(k,P,E);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function q(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){De(k,P,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function ie(P,E){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){ke(k,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const oe={[dp]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[fp]:t.MIRRORED_REPEAT},ze={[Qt]:t.NEAREST,[_L]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Jd]:t.LINEAR_MIPMAP_NEAREST,[us]:t.LINEAR_MIPMAP_LINEAR},Ue={[EL]:t.NEVER,[bL]:t.ALWAYS,[wL]:t.LESS,[Ng]:t.LEQUAL,[TL]:t.EQUAL,[Lg]:t.GEQUAL,[AL]:t.GREATER,[CL]:t.NOTEQUAL};function Ge(P,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===Jd||E.magFilter===Fl||E.magFilter===us||E.minFilter===cn||E.minFilter===Jd||E.minFilter===Fl||E.minFilter===us)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,oe[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,oe[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,oe[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ze[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qt||E.minFilter!==Fl&&E.minFilter!==us||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const H=E.source;let J=p.get(H);J===void 0&&(J={},p.set(H,J));const le=G(E);if(le!==P.__cacheKey){J[le]===void 0&&(J[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[le].usedTimes++;const ue=J[P.__cacheKey];ue!==void 0&&(J[P.__cacheKey].usedTimes--,ue.usedTimes===0&&R(E)),P.__cacheKey=le,P.__webglTexture=J[le].texture}return k}function ne(P,E,k){return Math.floor(Math.floor(P/k)/E)}function se(P,E,k,H){const le=P.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,k,H,E.data);else{le.sort((Ce,pe)=>Ce.start-pe.start);let ue=0;for(let Ce=1;Ce<le.length;Ce++){const pe=le[ue],fe=le[Ce],Pe=pe.start+pe.count,Le=ne(fe.start,E.width,4),Ve=ne(pe.start,E.width,4);fe.start<=Pe+1&&Le===Ve&&ne(fe.start+fe.count-1,E.width,4)===Le?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,le[ue]=fe)}le.length=ue+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Ce=0,pe=le.length;Ce<pe;Ce++){const fe=le[Ce],Pe=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Ve=Pe%E.width,O=Math.floor(Pe/E.width),ce=Le,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ve,O,ce,ee,k,H,E.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function De(P,E,k){let H=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=t.TEXTURE_3D);const J=Z(P,E),le=E.source;n.bindTexture(H,P.__webglTexture,t.TEXTURE0+k);const ue=i.get(le);if(le.version!==ue.__version||J===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ee=Ke.getPrimaries(Ke.workingColorSpace),he=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),xe=E.colorSpace===Sr||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let te=m(E.image,!1,r.maxTextureSize);te=Fe(E,te);const de=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type);let pe=_(E.internalFormat,de,Ce,E.normalized,E.colorSpace,E.isVideoTexture);Ge(H,E);let fe;const Pe=E.mipmaps,Le=E.isVideoTexture!==!0,Ve=ue.__version===void 0||J===!0,O=le.dataReady,ce=w(E,te);if(E.isDepthTexture)pe=T(E.format===ds,E.type),Ve&&(Le?n.texStorage2D(t.TEXTURE_2D,1,pe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,de,Ce,null));else if(E.isDataTexture)if(Pe.length>0){Le&&Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let ee=0,he=Pe.length;ee<he;ee++)fe=Pe[ee],Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,de,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,ee,pe,fe.width,fe.height,0,de,Ce,fe.data);E.generateMipmaps=!1}else Le?(Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height),O&&se(E,te,de,Ce)):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,de,Ce,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Le&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,he=Pe.length;ee<he;ee++)if(fe=Pe[ee],E.format!==li)if(de!==null)if(Le){if(O)if(E.layerUpdates.size>0){const xe=my(fe.width,fe.height,E.format,E.type);for(const re of E.layerUpdates){const Te=fe.data.subarray(re*xe/fe.data.BYTES_PER_ELEMENT,(re+1)*xe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,re,fe.width,fe.height,1,de,Te)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,te.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,fe.width,fe.height,te.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,te.depth,de,Ce,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,fe.width,fe.height,te.depth,0,de,Ce,fe.data)}else{Le&&Ve&&n.texStorage2D(t.TEXTURE_2D,ce,pe,Pe[0].width,Pe[0].height);for(let ee=0,he=Pe.length;ee<he;ee++)fe=Pe[ee],E.format!==li?de!==null?Le?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,de,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,ee,pe,fe.width,fe.height,0,de,Ce,fe.data)}else if(E.isDataArrayTexture)if(Le){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,te.width,te.height,te.depth),O)if(E.layerUpdates.size>0){const ee=my(te.width,te.height,E.format,E.type);for(const he of E.layerUpdates){const xe=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,de,Ce,xe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,de,Ce,te.data);else if(E.isData3DTexture)Le?(Ve&&n.texStorage3D(t.TEXTURE_3D,ce,pe,te.width,te.height,te.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,de,Ce,te.data);else if(E.isFramebufferTexture){if(Ve)if(Le)n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height);else{let ee=te.width,he=te.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,ee,he,0,de,Ce,null),ee>>=1,he>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),f.add(E),ee.onpaint=he=>{const xe=he.changedElements;for(const re of f)xe.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const xe=t.RGBA,re=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,re,Te,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&Ve){const ee=Ae(Pe[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}for(let ee=0,he=Pe.length;ee<he;ee++)fe=Pe[ee],Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de,Ce,fe):n.texImage2D(t.TEXTURE_2D,ee,pe,de,Ce,fe);E.generateMipmaps=!1}else if(Le){if(Ve){const ee=Ae(te);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ce,te)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,Ce,te);h(E)&&x(H),ue.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ke(P,E,k){if(E.image.length!==6)return;const H=Z(P,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const le=i.get(J);if(J.version!==le.__version||H===!0){n.activeTexture(t.TEXTURE0+k);const ue=Ke.getPrimaries(Ke.workingColorSpace),Q=E.colorSpace===Sr?null:Ke.getPrimaries(E.colorSpace),te=E.colorSpace===Sr||ue===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,Ce=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!de&&!Ce?pe[re]=m(E.image[re],!0,r.maxCubemapSize):pe[re]=Ce?E.image[re].image:E.image[re],pe[re]=Fe(E,pe[re]);const fe=pe[0],Pe=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),Ve=_(E.internalFormat,Pe,Le,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,ce=le.__version===void 0||H===!0,ee=J.dataReady;let he=w(E,fe);Ge(t.TEXTURE_CUBE_MAP,E);let xe;if(de){O&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,fe.width,fe.height);for(let re=0;re<6;re++){xe=pe[re].mipmaps;for(let Te=0;Te<xe.length;Te++){const Ee=xe[Te];E.format!==li?Pe!==null?O?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Ee.width,Ee.height,Pe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,Ve,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,Ee.width,Ee.height,Pe,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,Ve,Ee.width,Ee.height,0,Pe,Le,Ee.data)}}}else{if(xe=E.mipmaps,O&&ce){xe.length>0&&he++;const re=Ae(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,re.width,re.height)}for(let re=0;re<6;re++)if(Ce){O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Pe,Le,pe[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,pe[re].width,pe[re].height,0,Pe,Le,pe[re].data);for(let Te=0;Te<xe.length;Te++){const Tt=xe[Te].image[re].image;O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,Tt.width,Tt.height,Pe,Le,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,Ve,Tt.width,Tt.height,0,Pe,Le,Tt.data)}}else{O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Le,pe[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,Pe,Le,pe[re]);for(let Te=0;Te<xe.length;Te++){const Ee=xe[Te];O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,Pe,Le,Ee.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,Ve,Pe,Le,Ee.image[re])}}}h(E)&&x(t.TEXTURE_CUBE_MAP),le.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ne(P,E,k,H,J,le){const ue=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),te=_(k.internalFormat,ue,Q,k.normalized,k.colorSpace),de=i.get(E),Ce=i.get(k);if(Ce.__renderTarget=E,!de.__hasExternalTextures){const pe=Math.max(1,E.width>>le),fe=Math.max(1,E.height>>le);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,le,te,pe,fe,E.depth,0,ue,Q,null):n.texImage2D(J,le,te,pe,fe,0,ue,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),_t(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,J,Ce.__webglTexture,0,pt(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,J,Ce.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(P,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const H=E.depthTexture,J=H&&H.isDepthTexture?H.type:null,le=T(E.stencilBuffer,J),ue=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_t(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(E),le,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(E),le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,P)}else{const H=E.textures;for(let J=0;J<H.length;J++){const le=H[J],ue=s.convert(le.format,le.colorSpace),Q=s.convert(le.type),te=_(le.internalFormat,ue,Q,le.normalized,le.colorSpace);_t(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(E),te,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(E),te,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(P,E,k){const H=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(E.depthTexture);if(J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,E.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,E.depthTexture);const de=s.convert(E.depthTexture.format),Ce=s.convert(E.depthTexture.type);let pe;E.depthTexture.format===nr?pe=t.DEPTH_COMPONENT24:E.depthTexture.format===ds&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,E.width,E.height,0,de,Ce,null)}}else U(E.depthTexture,0);const le=J.__webglTexture,ue=pt(E),Q=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,te=E.depthTexture.format===ds?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)_t(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,le,0);else if(E.depthTexture.format===ds)_t(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Q,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,Q,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const H=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=H}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)Xe(E.__webglFramebuffer[H],P,H);else{const H=P.texture.mipmaps;H&&H.length>0?Xe(E.__webglFramebuffer[0],P,0):Xe(E.__webglFramebuffer,P,0)}else if(k){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=t.createRenderbuffer(),xt(E.__webglDepthbuffer[H],P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}else{const H=P.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),xt(E.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(P,E,k){const H=i.get(P);E!==void 0&&Ne(H.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&it(P)}function Ye(P){const E=P.texture,k=i.get(P),H=i.get(E);P.addEventListener("dispose",y);const J=P.textures,le=P.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=E.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let te=0;te<E.mipmaps.length;te++)k.__webglFramebuffer[Q][te]=t.createFramebuffer()}else k.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)k.__webglFramebuffer[Q]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Q=0,te=J.length;Q<te;Q++){const de=i.get(J[Q]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&_t(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const te=J[Q];k.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const de=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),pe=_(te.internalFormat,de,Ce,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),fe=pt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Ne(k.__webglFramebuffer[Q][te],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else Ne(k.__webglFramebuffer[Q],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);h(E)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Q=0,te=J.length;Q<te;Q++){const de=J[Q],Ce=i.get(de);let pe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ce.__webglTexture),Ge(pe,de),Ne(k.__webglFramebuffer,P,de,t.COLOR_ATTACHMENT0+Q,pe,0),h(de)&&x(pe)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,H.__webglTexture),Ge(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Ne(k.__webglFramebuffer[te],P,E,t.COLOR_ATTACHMENT0,Q,te);else Ne(k.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,Q,0);h(E)&&x(Q),n.unbindTexture()}P.depthBuffer&&it(P)}function yt(P){const E=P.textures;for(let k=0,H=E.length;k<H;k++){const J=E[k];if(h(J)){const le=S(P),ue=i.get(J).__webglTexture;n.bindTexture(le,ue),x(le),n.unbindTexture()}}}const Pt=[],Nt=[];function zt(P){if(P.samples>0){if(_t(P)===!1){const E=P.textures,k=P.width,H=P.height;let J=t.COLOR_BUFFER_BIT;const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(P),Q=E.length>1;if(Q)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<E.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ce=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,k,H,0,0,k,H,J,t.NEAREST),l===!0&&(Pt.length=0,Nt.length=0,Pt.push(t.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(le),Nt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ce=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function pt(P){return Math.min(r.maxSamples,P.samples)}function _t(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function I(P){const E=a.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Fe(P,E){const k=P.colorSpace,H=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==yu&&k!==Sr&&(Ke.getTransfer(k)===rt?(H!==li||J!==Dn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),E}function Ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nk(t,e){function n(i,r=Sr){let s;const a=Ke.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===Ag)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===hE)return t.BYTE;if(i===pE)return t.SHORT;if(i===Yo)return t.UNSIGNED_SHORT;if(i===Tg)return t.INT;if(i===Ui)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===vE)return t.ALPHA;if(i===xE)return t.RGB;if(i===li)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===ds)return t.DEPTH_STENCIL;if(i===yE)return t.RED;if(i===bg)return t.RED_INTEGER;if(i===Ms)return t.RG;if(i===Rg)return t.RG_INTEGER;if(i===Pg)return t.RGBA_INTEGER;if(i===Cc||i===bc||i===Rc||i===Pc)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hp||i===pp||i===mp||i===gp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vp||i===xp||i===yp||i===_p||i===Sp||i===vu||i===Mp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vp||i===xp)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_p)return s.COMPRESSED_R11_EAC;if(i===Sp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vu)return s.COMPRESSED_RG11_EAC;if(i===Mp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ep||i===wp||i===Tp||i===Ap||i===Cp||i===bp||i===Rp||i===Pp||i===Np||i===Lp||i===Dp||i===Ip||i===Up||i===Fp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ep)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ap)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Np)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ip)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Up)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fp)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Op||i===kp||i===Bp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Op)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zp||i===Vp||i===xu||i===Hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ik=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rk=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sk{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new CE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:ik,fragmentShader:rk,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new Ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ak extends As{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",m=new sk,h={},x=n.getContextAttributes();let S=null,_=null;const T=[],w=[],C=new $e;let y=null;const b=new Ln;b.viewport=new Mt;const R=new Ln;R.viewport=new Mt;const N=[b,R],F=new gD;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=T[Z];return ne===void 0&&(ne=new of,T[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=T[Z];return ne===void 0&&(ne=new of,T[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=T[Z];return ne===void 0&&(ne=new of,T[Z]=ne),ne.getHandSpace()};function z(Z){const ne=w.indexOf(Z.inputSource);if(ne===-1)return;const se=T[ne];se!==void 0&&(se.update(Z.inputSource,Z.frame,c||a),se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<T.length;Z++){const ne=w[Z];ne!==null&&(w[Z]=null,T[Z].disconnect(ne))}X=null,Y=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(S),p=null,d=null,f=null,r=null,_=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,De=null,ke=null;x.depth&&(ke=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?ds:nr,De=x.stencil?Ko:Ui);const Ne={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Li(d.textureWidth,d.textureHeight,{format:li,type:Dn,depthTexture:new ba(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Li(p.framebufferWidth,p.framebufferHeight,{format:li,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let ne=0;ne<Z.removed.length;ne++){const se=Z.removed[ne],De=w.indexOf(se);De>=0&&(w[De]=null,T[De].disconnect(se))}for(let ne=0;ne<Z.added.length;ne++){const se=Z.added[ne];let De=w.indexOf(se);if(De===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(se),De=Ne;break}else if(w[Ne]===null){w[Ne]=se,De=Ne;break}if(De===-1)break}const ke=T[De];ke&&ke.connect(se)}}const U=new V,D=new V;function q(Z,ne,se){U.setFromMatrixPosition(ne.matrixWorld),D.setFromMatrixPosition(se.matrixWorld);const De=U.distanceTo(D),ke=ne.projectionMatrix.elements,Ne=se.projectionMatrix.elements,xt=ke[14]/(ke[10]-1),Xe=ke[14]/(ke[10]+1),it=(ke[9]+1)/ke[5],Je=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],yt=(Ne[8]+1)/Ne[0],Pt=xt*Ye,Nt=xt*yt,zt=De/(-Ye+yt),pt=zt*-Ye;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const _t=xt+zt,I=Xe+zt,Fe=Pt-pt,Ae=Nt+(De-pt),P=it*Xe/I*_t,E=Je*Xe/I*_t;Z.projectionMatrix.makePerspective(Fe,Ae,P,E,_t,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,se=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(se=m.depthFar)),F.near=R.near=b.near=ne,F.far=R.far=b.far=se,(X!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,Y=F.far),F.layers.mask=Z.layers.mask|6,b.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const De=Z.parent,ke=F.cameras;ie(F,De);for(let Ne=0;Ne<ke.length;Ne++)ie(ke[Ne],De);ke.length===2?q(F,b,R):F.projectionMatrix.copy(b.projectionMatrix),oe(Z,F,De)};function oe(Z,ne,se){se===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return h[Z]};let ze=null;function Ue(Z,ne){if(u=ne.getViewerPose(c||a),v=ne,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let De=!1;se.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let Xe=0;Xe<se.length;Xe++){const it=se[Xe];let Je=null;if(p!==null)Je=p.getViewport(it);else{const yt=f.getViewSubImage(d,it);Je=yt.viewport,Xe===0&&(e.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(_))}let Ye=N[Xe];Ye===void 0&&(Ye=new Ln,Ye.layers.enable(Xe),Ye.viewport=new Mt,N[Xe]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Je.x,Je.y,Je.width,Je.height),Xe===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Ye)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const Xe=f.getDepthInformation(se[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(ke&&ke.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<se.length;Xe++){const it=se[Xe].camera;if(it){let Je=h[it];Je||(Je=new CE,h[it]=Je);const Ye=f.getCameraImage(it);Je.sourceTexture=Ye}}}}for(let se=0;se<T.length;se++){const De=w[se],ke=T[se];De!==null&&ke!==void 0&&ke.update(De,ne,c||a)}ze&&ze(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ge=new LE;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const ok=new Rt,BE=new Be;BE.set(-1,0,0,0,1,0,0,0,1);function lk(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bE(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,S,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),M(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===An&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===An&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),S=x.envMap,_=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(ok.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(BE),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ck(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const w=T.program;i.uniformBlockBinding(_,w)}function c(_,T){let w=r[_.id];w===void 0&&(m(_),w=u(_),r[_.id]=w,_.addEventListener("dispose",x));const C=T.program;i.updateUBOMapping(_,C);const y=e.render.frame;s[_.id]!==y&&(d(_),s[_.id]=y)}function u(_){const T=f();_.__bindingPointIndex=T;const w=t.createBuffer(),C=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const T=r[_.id],w=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,b=w.length;y<b;y++){const R=w[y];if(Array.isArray(R))for(let N=0,F=R.length;N<F;N++)p(R[N],y,N,C);else p(R,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,T,w,C){if(M(_,T,w,C)===!0){const y=_.__offset,b=_.value;if(Array.isArray(b)){let R=0;for(let N=0;N<b.length;N++){const F=b[N],X=h(F);v(F,_.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function v(_,T,w){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,w)}function M(_,T,w,C){const y=_.value,b=T+"_"+w;if(C[b]===void 0)return typeof y=="number"||typeof y=="boolean"?C[b]=y:ArrayBuffer.isView(y)?C[b]=y.slice():C[b]=y.clone(),!0;{const R=C[b];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return C[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){const T=_.uniforms;let w=0;const C=16;for(let b=0,R=T.length;b<R;b++){const N=Array.isArray(T[b])?T[b]:[T[b]];for(let F=0,X=N.length;F<X;F++){const Y=N[F],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,G=z.length;K<G;K++){const U=z[K],D=h(U),q=w%C,ie=q%D.boundary,oe=q+ie;w+=ie,oe!==0&&C-oe<D.storage&&(w+=C-oe),Y.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=D.storage}}}const y=w%C;return y>0&&(w+=C-y),_.__size=w,_.__cache={},this}function h(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),T}function x(_){const T=_.target;T.removeEventListener("dispose",x);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const uk=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function dk(){return xi===null&&(xi=new eD(uk,16,16,Ms,tr),xi.name="DFG_LUT",xi.minFilter=cn,xi.magFilter=cn,xi.wrapS=$i,xi.wrapT=$i,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class fk{constructor(e={}){const{canvas:n=PL(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=p,m=new Set([Pg,Rg,bg]),h=new Set([Dn,Ui,Yo,Ko,Ag,Cg]),x=new Uint32Array(4),S=new Int32Array(4),_=new V;let T=null,w=null;const C=[],y=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,F=null,X=null,Y=null,z=null;this._outputColorSpace=Hn;let K=0,G=0,U=null,D=-1,q=null;const ie=new Mt,oe=new Mt;let ze=null;const Ue=new tt(0);let Ge=0,Z=n.width,ne=n.height,se=1,De=null,ke=null;const Ne=new Mt(0,0,Z,ne),xt=new Mt(0,0,Z,ne);let Xe=!1;const it=new Ug;let Je=!1,Ye=!1;const yt=new Rt,Pt=new V,Nt=new Mt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function _t(){return U===null?se:1}let I=i;function Fe(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wg}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",hi,!1),I===null){const B="webgl2";if(I=Fe(B,A),I===null)throw Fe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw et("WebGLRenderer: "+A.message),A}let Ae,P,E,k,H,J,le,ue,Q,te,de,Ce,pe,fe,Pe,Le,Ve,O,ce,ee,he,xe,re;function Te(){Ae=new dF(I),Ae.init(),he=new nk(I,Ae),P=new iF(I,Ae,e,he),E=new ek(I,Ae),P.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),X=I.createFramebuffer(),Y=I.createFramebuffer(),z=I.createFramebuffer(),k=new pF(I),H=new zO,J=new tk(I,Ae,E,H,P,he,k),le=new uF(R),ue=new xD(I),xe=new tF(I,ue),Q=new fF(I,ue,k,xe),te=new gF(I,Q,ue,xe,k),O=new mF(I,P,J),Pe=new rF(H),de=new BO(R,le,Ae,P,xe,Pe),Ce=new lk(R,H),pe=new HO,fe=new qO(Ae),Ve=new eF(R,le,E,te,v,l),Le=new QO(R,te,P),re=new ck(I,k,P,E),ce=new nF(I,Ae,k),ee=new hF(I,Ae,k),k.programs=de.programs,R.capabilities=P,R.extensions=Ae,R.properties=H,R.renderLists=pe,R.shadowMap=Le,R.state=E,R.info=k}Te(),M!==Dn&&(b=new xF(M,n.width,n.height,o,r,s));const Ee=new ak(R,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(Z,ne,!1))},this.getSize=function(A){return A.set(Z,ne)},this.setSize=function(A,B,$=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,ne=B,n.width=Math.floor(A*se),n.height=Math.floor(B*se),$===!0&&(n.style.width=A+"px",n.style.height=B+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Z*se,ne*se).floor()},this.setDrawingBufferSize=function(A,B,$){Z=A,ne=B,se=$,n.width=Math.floor(A*$),n.height=Math.floor(B*$),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(M===Dn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ie)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,B,$,W){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,B,$,W),E.viewport(ie.copy(Ne).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,B,$,W){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,B,$,W),E.scissor(oe.copy(xt).multiplyScalar(se).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){E.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){De=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,$=!0){let W=0;if(A){let j=!1;if(U!==null){const ve=U.texture.format;j=m.has(ve)}if(j){const ve=U.texture.type,_e=h.has(ve),ge=Ve.getClearColor(),we=Ve.getClearAlpha(),be=ge.r,He=ge.g,je=ge.b;_e?(x[0]=be,x[1]=He,x[2]=je,x[3]=we,I.clearBufferuiv(I.COLOR,0,x)):(S[0]=be,S[1]=He,S[2]=je,S[3]=we,I.clearBufferiv(I.COLOR,0,S))}else W|=I.COLOR_BUFFER_BIT}B&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",hi,!1),Ve.dispose(),pe.dispose(),fe.dispose(),H.dispose(),le.dispose(),te.dispose(),xe.dispose(),re.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Wg),Ee.removeEventListener("sessionend",jg),$r.stop()};function Tt(A){A.preventDefault(),Xx("WebGLRenderer: Context Lost."),N=!0}function dt(){Xx("WebGLRenderer: Context Restored."),N=!1;const A=k.autoReset,B=Le.enabled,$=Le.autoUpdate,W=Le.needsUpdate,j=Le.type;Te(),k.autoReset=A,Le.enabled=B,Le.autoUpdate=$,Le.needsUpdate=W,Le.type=j}function hi(A){et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pi(A){const B=A.target;B.removeEventListener("dispose",pi),YE(B)}function YE(A){KE(A),H.remove(A)}function KE(A){const B=H.get(A).programs;B!==void 0&&(B.forEach(function($){de.releaseProgram($)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,$,W,j,ve){B===null&&(B=zt);const _e=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=QE(A,B,$,W,j);E.setMaterial(W,_e);let we=$.index,be=1;if(W.wireframe===!0){if(we=Q.getWireframeAttribute($),we===void 0)return;be=2}const He=$.drawRange,je=$.attributes.position;let Re=He.start*be,at=(He.start+He.count)*be;ve!==null&&(Re=Math.max(Re,ve.start*be),at=Math.min(at,(ve.start+ve.count)*be)),we!==null?(Re=Math.max(Re,0),at=Math.min(at,we.count)):je!=null&&(Re=Math.max(Re,0),at=Math.min(at,je.count));const Lt=at-Re;if(Lt<0||Lt===1/0)return;xe.setup(j,W,ge,$,we);let At,ot=ce;if(we!==null&&(At=ue.get(we),ot=ee,ot.setIndex(At)),j.isMesh)W.wireframe===!0?(E.setLineWidth(W.wireframeLinewidth*_t()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(j.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),E.setLineWidth(nn*_t()),j.isLineSegments?ot.setMode(I.LINES):j.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else j.isPoints?ot.setMode(I.POINTS):j.isSprite&&ot.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,ye=j._multiDrawCounts,bn=j._multiDrawCount,Qe=we?ue.get(we).bytesPerElement:1,zn=H.get(W).currentProgram.getUniforms();for(let mi=0;mi<bn;mi++)zn.setValue(I,"_gl_DrawID",mi),ot.render(nn[mi]/Qe,ye[mi])}else if(j.isInstancedMesh)ot.renderInstances(Re,Lt,j.count);else if($.isInstancedBufferGeometry){const nn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,nn);ot.renderInstances(Re,Lt,ye)}else ot.render(Re,Lt)};function Gg(A,B,$){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=An,A.needsUpdate=!0,hl(A,B,$),A.side=zr,A.needsUpdate=!0,hl(A,B,$),A.side=wi):hl(A,B,$)}this.compile=function(A,B,$=null){$===null&&($=A),w=fe.get($),w.init(B),y.push(w),$.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),A!==$&&A.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights();const W=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let _e=0;_e<ve.length;_e++){const ge=ve[_e];Gg(ge,$,j),W.add(ge)}else Gg(ve,$,j),W.add(ve)}),w=y.pop(),W},this.compileAsync=function(A,B,$=null){const W=this.compile(A,B,$);return new Promise(j=>{function ve(){if(W.forEach(function(_e){H.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){j(A);return}setTimeout(ve,10)}Ae.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let td=null;function ZE(A){td&&td(A)}function Wg(){$r.stop()}function jg(){$r.start()}const $r=new LE;$r.setAnimationLoop(ZE),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(A){td=A,Ee.setAnimationLoop(A),A===null?$r.stop():$r.start()},Ee.addEventListener("sessionstart",Wg),Ee.addEventListener("sessionend",jg),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(A,B);const $=Ee.enabled===!0&&Ee.isPresenting===!0,W=b!==null&&(U===null||$)&&b.begin(R,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,B,U),w=fe.get(A,y.length),w.init(B),w.state.textureUnits=J.getTextureUnits(),y.push(w),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(yt,Ci,B.reversedDepth),Ye=this.localClippingEnabled,Je=Pe.init(this.clippingPlanes,Ye),T=pe.get(A,C.length),T.init(),C.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const _e=R.xr.getDepthSensingMesh();_e!==null&&nd(_e,B,-1/0,R.sortObjects)}nd(A,B,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(De,ke,B.reversedDepth),pt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pt&&Ve.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Pe.beginShadows();const j=w.state.shadowsArray;if(Le.render(j,A,B),Je===!0&&Pe.endShadows(),(W&&b.hasRenderPass())===!1){const _e=T.opaque,ge=T.transmissive;if(w.setupLights(),B.isArrayCamera){const we=B.cameras;if(ge.length>0)for(let be=0,He=we.length;be<He;be++){const je=we[be];$g(_e,ge,A,je)}pt&&Ve.render(A);for(let be=0,He=we.length;be<He;be++){const je=we[be];Xg(T,A,je,je.viewport)}}else ge.length>0&&$g(_e,ge,A,B),pt&&Ve.render(A),Xg(T,A,B)}U!==null&&G===0&&(J.updateMultisampleRenderTarget(U),J.updateRenderTargetMipmap(U)),W&&b.end(R),A.isScene===!0&&A.onAfterRender(R,A,B),xe.resetDefaultState(),D=-1,q=null,y.pop(),y.length>0?(w=y[y.length-1],J.setTextureUnits(w.state.textureUnits),Je===!0&&Pe.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function nd(A,B,$,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){W&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const _e=te.update(A),ge=A.material;ge.visible&&T.push(A,_e,ge,$,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){const _e=te.update(A),ge=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Nt.copy(_e.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(ge)){const we=_e.groups;for(let be=0,He=we.length;be<He;be++){const je=we[be],Re=ge[je.materialIndex];Re&&Re.visible&&T.push(A,_e,Re,$,Nt.z,je)}}else ge.visible&&T.push(A,_e,ge,$,Nt.z,null)}}const ve=A.children;for(let _e=0,ge=ve.length;_e<ge;_e++)nd(ve[_e],B,$,W)}function Xg(A,B,$,W){const{opaque:j,transmissive:ve,transparent:_e}=A;w.setupLightsView($),Je===!0&&Pe.setGlobalState(R.clippingPlanes,$),W&&E.viewport(ie.copy(W)),j.length>0&&fl(j,B,$),ve.length>0&&fl(ve,B,$),_e.length>0&&fl(_e,B,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function $g(A,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Re=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Re?tr:Dn,minFilter:us,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=w.state.transmissionRenderTarget[W.id],_e=W.viewport||ie;ve.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);const ge=R.getRenderTarget(),we=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(Ue),Ge=R.getClearAlpha(),Ge<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Ve.render($);const He=R.toneMapping;R.toneMapping=Ni;const je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Je===!0&&Pe.setGlobalState(R.clippingPlanes,W),fl(A,$,W),J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Lt=B.length;at<Lt;at++){const At=B[at],{object:ot,geometry:nn,material:ye,group:bn}=At;if(ye.side===wi&&ot.layers.test(W.layers)){const Qe=ye.side;ye.side=An,ye.needsUpdate=!0,qg(ot,$,W,nn,ye,bn),ye.side=Qe,ye.needsUpdate=!0,Re=!0}}Re===!0&&(J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve))}R.setRenderTarget(ge,we,be),R.setClearColor(Ue,Ge),je!==void 0&&(W.viewport=je),R.toneMapping=He}function fl(A,B,$){const W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ve=A.length;j<ve;j++){const _e=A[j],{object:ge,geometry:we,group:be}=_e;let He=_e.material;He.allowOverride===!0&&W!==null&&(He=W),ge.layers.test($.layers)&&qg(ge,B,$,we,He,be)}}function qg(A,B,$,W,j,ve){A.onBeforeRender(R,B,$,W,j,ve),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,B,$,W,A,ve),j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=An,j.needsUpdate=!0,R.renderBufferDirect($,B,W,j,A,ve),j.side=zr,j.needsUpdate=!0,R.renderBufferDirect($,B,W,j,A,ve),j.side=wi):R.renderBufferDirect($,B,W,j,A,ve),A.onAfterRender(R,B,$,W,j,ve)}function hl(A,B,$){B.isScene!==!0&&(B=zt);const W=H.get(A),j=w.state.lights,ve=w.state.shadowsArray,_e=j.state.version,ge=de.getParameters(A,j.state,ve,B,$,w.state.lightProbeGridArray),we=de.getProgramCacheKey(ge);let be=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const He=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=le.get(A.envMap||W.environment,He),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,be===void 0&&(A.addEventListener("dispose",pi),be=new Map,W.programs=be);let je=be.get(we);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===_e)return Kg(A,ge),je}else ge.uniforms=de.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,$,ge),A.onBeforeCompile(ge,R),je=de.acquireProgram(ge,we),be.set(we,je),W.uniforms=ge.uniforms;const Re=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),Kg(A,ge),W.needsLights=tw(A),W.lightsStateVersion=_e,W.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=je,W.uniformsList=null,je}function Yg(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Kg(A,B){const $=H.get(A);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function JE(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let $=0,W=A.length;$<W;$++){const j=A[$];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function QE(A,B,$,W,j){B.isScene!==!0&&(B=zt),J.resetTextureUnits();const ve=B.fog,_e=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,ge=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ke.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,be=le.get(W.envMap||_e,we),He=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,Lt=!!$.morphAttributes.color;let At=Ni;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=R.toneMapping);const ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nn=ot!==void 0?ot.length:0,ye=H.get(W),bn=w.state.lights;if(Je===!0&&(Ye===!0||A!==q)){const ft=A===q&&W.id===D;Pe.setState(W,A,ft)}let Qe=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==bn.state.version||ye.outputColorSpace!==ge||j.isBatchedMesh&&ye.batching===!1||!j.isBatchedMesh&&ye.batching===!0||j.isBatchedMesh&&ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ye.instancing===!1||!j.isInstancedMesh&&ye.instancing===!0||j.isSkinnedMesh&&ye.skinning===!1||!j.isSkinnedMesh&&ye.skinning===!0||j.isInstancedMesh&&ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ye.instancingMorph===!1&&j.morphTexture!==null||ye.envMap!==be||W.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Pe.numPlanes||ye.numIntersection!==Pe.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==je||ye.morphTargets!==Re||ye.morphNormals!==at||ye.morphColors!==Lt||ye.toneMapping!==At||ye.morphTargetsCount!==nn||!!ye.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=W.version);let zn=ye.currentProgram;Qe===!0&&(zn=hl(W,B,j),F&&W.isNodeMaterial&&F.onUpdateProgram(W,zn,ye));let mi=!1,sr=!1,Rs=!1;const lt=zn.getUniforms(),Dt=ye.uniforms;if(E.useProgram(zn.program)&&(mi=!0,sr=!0,Rs=!0),W.id!==D&&(D=W.id,sr=!0),ye.needsLights){const ft=JE(w.state.lightProbeGridArray,j);ye.lightProbeGrid!==ft&&(ye.lightProbeGrid=ft,sr=!0)}if(mi||q!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",A.projectionMatrix),lt.setValue(I,"viewMatrix",A.matrixWorldInverse);const or=lt.map.cameraPosition;or!==void 0&&or.setValue(I,Pt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,sr=!0,Rs=!0)}if(ye.needsLights&&(bn.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",bn.state.directionalShadowMap,J),bn.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",bn.state.spotShadowMap,J),bn.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",bn.state.pointShadowMap,J)),j.isSkinnedMesh){lt.setOptional(I,j,"bindMatrix"),lt.setOptional(I,j,"bindMatrixInverse");const ft=j.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),lt.setValue(I,"boneTexture",ft.boneTexture,J))}j.isBatchedMesh&&(lt.setOptional(I,j,"batchingTexture"),lt.setValue(I,"batchingTexture",j._matricesTexture,J),lt.setOptional(I,j,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",j._indirectTexture,J),lt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",j._colorsTexture,J));const ar=$.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&O.update(j,$,zn),(sr||ye.receiveShadow!==j.receiveShadow)&&(ye.receiveShadow=j.receiveShadow,lt.setValue(I,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Dt.envMapIntensity.value=B.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=dk()),sr){if(lt.setValue(I,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&ew(Dt,Rs),ve&&W.fog===!0&&Ce.refreshFogUniforms(Dt,ve),Ce.refreshMaterialUniforms(Dt,W,se,ne,w.state.transmissionRenderTarget[A.id]),ye.needsLights&&ye.lightProbeGrid){const ft=ye.lightProbeGrid;Dt.probesSH.value=ft.texture,Dt.probesMin.value.copy(ft.boundingBox.min),Dt.probesMax.value.copy(ft.boundingBox.max),Dt.probesResolution.value.copy(ft.resolution)}Nc.upload(I,Yg(ye),Dt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nc.upload(I,Yg(ye),Dt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(I,"center",j.center),lt.setValue(I,"modelViewMatrix",j.modelViewMatrix),lt.setValue(I,"normalMatrix",j.normalMatrix),lt.setValue(I,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const ft=W.uniformsGroups;for(let or=0,Ps=ft.length;or<Ps;or++){const Zg=ft[or];re.update(Zg,zn),re.bind(Zg,zn)}}return zn}function ew(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function tw(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,B,$){const W=H.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(A.texture).__webglTexture=B,H.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const $=H.get(A);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,$=0){U=A,K=B,G=$;let W=null,j=!1,ve=!1;if(A){const ge=H.get(A);if(ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(A.viewport),oe.copy(A.scissor),ze=A.scissorTest,E.viewport(ie),E.scissor(oe),E.setScissorTest(ze),D=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(ge.__hasExternalTextures)J.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&H.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const be=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(be[B])?W=be[B][$]:W=be[B],j=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?W=H.get(A).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[$]:W=be,ie.copy(A.viewport),oe.copy(A.scissor),ze=A.scissorTest}else ie.copy(Ne).multiplyScalar(se).floor(),oe.copy(xt).multiplyScalar(se).floor(),ze=Xe;if($!==0&&(W=X),E.bindFramebuffer(I.FRAMEBUFFER,W)&&E.drawBuffers(A,W),E.viewport(ie),E.scissor(oe),E.setScissorTest(ze),j){const ge=H.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,$)}else if(ve){const ge=B;for(let we=0;we<A.textures.length;we++){const be=H.get(A.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,be.__webglTexture,$,ge)}}else if(A!==null&&$!==0){const ge=H.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,$)}D=-1},this.readRenderTargetPixels=function(A,B,$,W,j,ve,_e,ge=0){if(!(A&&A.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){E.bindFramebuffer(I.FRAMEBUFFER,we);try{const be=A.textures[ge],He=be.format,je=be.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!P.textureFormatReadable(He)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(je)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&$>=0&&$<=A.height-j&&I.readPixels(B,$,W,j,he.convert(He),he.convert(je),ve)}finally{const be=U!==null?H.get(U).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(A,B,$,W,j,ve,_e,ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(B>=0&&B<=A.width-W&&$>=0&&$<=A.height-j){E.bindFramebuffer(I.FRAMEBUFFER,we);const be=A.textures[ge],He=be.format,je=be.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!P.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(B,$,W,j,he.convert(He),he.convert(je),0);const at=U!==null?H.get(U).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,at);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await NL(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(Re),I.deleteSync(Lt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,$=0){const W=Math.pow(2,-$),j=Math.floor(A.image.width*W),ve=Math.floor(A.image.height*W),_e=B!==null?B.x:0,ge=B!==null?B.y:0;J.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,_e,ge,j,ve),E.unbindTexture()},this.copyTextureToTexture=function(A,B,$=null,W=null,j=0,ve=0){let _e,ge,we,be,He,je,Re,at,Lt;const At=A.isCompressedTexture?A.mipmaps[ve]:A.image;if($!==null)_e=$.max.x-$.min.x,ge=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,be=$.min.x,He=$.min.y,je=$.isBox3?$.min.z:0;else{const Dt=Math.pow(2,-j);_e=Math.floor(At.width*Dt),ge=Math.floor(At.height*Dt),A.isDataArrayTexture?we=At.depth:A.isData3DTexture?we=Math.floor(At.depth*Dt):we=1,be=0,He=0,je=0}W!==null?(Re=W.x,at=W.y,Lt=W.z):(Re=0,at=0,Lt=0);const ot=he.convert(B.format),nn=he.convert(B.type);let ye;B.isData3DTexture?(J.setTexture3D(B,0),ye=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),ye=I.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),ye=I.TEXTURE_2D),E.activeTexture(I.TEXTURE0),E.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const bn=E.getParameter(I.UNPACK_ROW_LENGTH),Qe=E.getParameter(I.UNPACK_IMAGE_HEIGHT),zn=E.getParameter(I.UNPACK_SKIP_PIXELS),mi=E.getParameter(I.UNPACK_SKIP_ROWS),sr=E.getParameter(I.UNPACK_SKIP_IMAGES);E.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),E.pixelStorei(I.UNPACK_SKIP_PIXELS,be),E.pixelStorei(I.UNPACK_SKIP_ROWS,He),E.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const Rs=A.isDataArrayTexture||A.isData3DTexture,lt=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Dt=H.get(A),ar=H.get(B),ft=H.get(Dt.__renderTarget),or=H.get(ar.__renderTarget);E.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Ps=0;Ps<we;Ps++)Rs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(A).__webglTexture,j,je+Ps),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(B).__webglTexture,ve,Lt+Ps)),I.blitFramebuffer(be,He,_e,ge,Re,at,_e,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||H.has(A)){const Dt=H.get(A),ar=H.get(B);E.bindFramebuffer(I.READ_FRAMEBUFFER,Y),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let ft=0;ft<we;ft++)Rs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,j,je+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,j),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ar.__webglTexture,ve,Lt+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ar.__webglTexture,ve),j!==0?I.blitFramebuffer(be,He,_e,ge,Re,at,_e,ge,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(ye,ve,Re,at,Lt+ft,be,He,_e,ge):I.copyTexSubImage2D(ye,ve,Re,at,be,He,_e,ge);E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ye,ve,Re,at,Lt,_e,ge,we,ot,nn,At.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ve,Re,at,Lt,_e,ge,we,ot,At.data):I.texSubImage3D(ye,ve,Re,at,Lt,_e,ge,we,ot,nn,At):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Re,at,_e,ge,ot,nn,At.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Re,at,At.width,At.height,ot,At.data):I.texSubImage2D(I.TEXTURE_2D,ve,Re,at,_e,ge,ot,nn,At);E.pixelStorei(I.UNPACK_ROW_LENGTH,bn),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),E.pixelStorei(I.UNPACK_SKIP_PIXELS,zn),E.pixelStorei(I.UNPACK_SKIP_ROWS,mi),E.pixelStorei(I.UNPACK_SKIP_IMAGES,sr),ve===0&&B.generateMipmaps&&I.generateMipmap(ye),E.unbindTexture()},this.initRenderTarget=function(A){H.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){K=0,G=0,U=null,E.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}function Ti({className:t="",label:e="AI interviewer online"}){const n=L.useRef(null);return L.useEffect(()=>{const i=n.current;if(!i)return;const r=new $L,s=new Ln(38,1,.1,100);s.position.set(0,.25,5.2);const a=new fk({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(0,0),i.appendChild(a.domElement);const o=new uo;r.add(o);const l=new pD(16777215,1.5);r.add(l);const c=new hy(10414037,2.8,12);c.position.set(2.6,2.4,3.5),r.add(c);const u=new hy(12109823,2,10);u.position.set(-3,-1.5,2.8),r.add(u);const f=new Sn(new Eu(1.05,3),new ly({color:8379080,roughness:.34,metalness:.35,emissive:1325623,emissiveIntensity:.4}));o.add(f);const d=new Sn(new Eu(1.18,2),new Mu({color:13095678,wireframe:!0,transparent:!0,opacity:.22}));o.add(d);const p=new Mu({color:9103059,transparent:!0,opacity:.42,side:wi}),v=new Sn(new wu(1.72,.01,12,120),p);v.rotation.x=Math.PI/2.6,o.add(v);const M=new Sn(new wu(2.12,.008,12,120),p.clone());M.material.opacity=.24,M.rotation.y=Math.PI/2.8,o.add(M);const m=new ly({color:16042333,emissive:7032069,emissiveIntensity:.45,roughness:.22,metalness:.15}),h=Array.from({length:8},(C,y)=>{const b=new Sn(new Og(.07,20,20),m),R=y/8*Math.PI*2;return b.position.set(Math.cos(R)*2.1,Math.sin(R)*.35,Math.sin(R)*1.1),o.add(b),{node:b,angle:R,radius:2.1+y%2*.22}});let x=0,S;const _=()=>{const{width:C,height:y}=i.getBoundingClientRect(),b=Math.max(C,1),R=Math.max(y,1);a.setSize(b,R,!1),s.aspect=b/R,s.updateProjectionMatrix()},T=new ResizeObserver(_);T.observe(i),_();const w=()=>{x+=.01,f.rotation.x+=.0025,f.rotation.y+=.006,d.rotation.y-=.004,v.rotation.z+=.006,M.rotation.x-=.004,o.position.y=Math.sin(x*1.4)*.07,h.forEach(({node:C,angle:y,radius:b},R)=>{const N=x*(.8+R*.025)+y;C.position.x=Math.cos(N)*b,C.position.z=Math.sin(N)*1.15,C.position.y=Math.sin(N*1.6)*.52}),a.render(r,s),S=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(S),T.disconnect(),a.dispose(),r.traverse(C=>{C.geometry&&C.geometry.dispose(),C.material&&(Array.isArray(C.material)?C.material.forEach(y=>y.dispose()):C.material.dispose())}),a.domElement.remove()}},[]),g.jsxs("div",{className:`assistant-scene ${t}`,"aria-label":e,children:[g.jsx("div",{ref:n,className:"assistant-scene-canvas","data-testid":"assistant-scene-canvas"}),g.jsxs("div",{className:"assistant-scene-readout",children:[g.jsx("span",{className:"assistant-status-dot"}),g.jsx("span",{children:e})]})]})}const zE="https://aiva-backend-3.onrender.com/auth";async function VE(t){const e=await t.text();try{const n=JSON.parse(e);return n.message||n.error||e}catch{return e||"Request failed"}}async function hk(t,e,n){const i=await fetch(`${zE}/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:e,password:n})});if(!i.ok)throw new Error(await VE(i));return i.text()}async function pk(t,e){const n=await fetch(`${zE}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})});if(!n.ok)throw new Error(await VE(n));return n.text()}function mk(){const t=Ts(),[e,n]=L.useState(""),[i,r]=L.useState(""),[s,a]=L.useState(""),[o,l]=L.useState(!1),c=async u=>{u.preventDefault(),a(""),l(!0);try{const f=await pk(e,i);localStorage.setItem("token",f),t("/dashboard")}catch(f){a(f.message||"Login failed")}finally{l(!1)}};return g.jsxs("div",{className:"auth-page",children:[g.jsx("section",{className:"auth-brand-panel",children:g.jsxs("div",{className:"auth-brand-inner",children:[g.jsx("div",{className:"auth-kicker",children:"AI Interview & Virtual Assistant"}),g.jsx("h1",{children:g.jsx(Eg,{text:"Welcome back to AIVA.",speed:42})}),g.jsx("p",{children:"Continue your mock interview practice, review previous feedback, and prepare with a focused assistant that behaves like a real interviewer."}),g.jsx(Ti,{className:"auth-assistant",label:"Assistant ready for practice"})]})}),g.jsx("section",{className:"auth-form-panel",children:g.jsxs(Ut.div,{className:"auth-container app-shell-panel",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.45,ease:"easeOut"},children:[g.jsxs("div",{className:"auth-header",children:[g.jsx("span",{className:"eyebrow",children:"Secure sign in"}),g.jsx("h2",{className:"auth-title",children:"Log in"}),g.jsx("p",{className:"auth-subtitle",children:"Open your interview workspace and saved session history."})]}),g.jsxs("form",{className:"auth-form",onSubmit:c,children:[s&&g.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},className:"auth-error",children:s}),g.jsxs("div",{className:"auth-field",children:[g.jsxs("label",{htmlFor:"email",children:[g.jsx(mu,{size:16})," Email Address"]}),g.jsx("input",{id:"email",type:"email",value:e,onChange:u=>n(u.target.value),placeholder:"you@example.com",required:!0,autoComplete:"email"})]}),g.jsxs("div",{className:"auth-field",children:[g.jsxs("label",{htmlFor:"password",children:[g.jsx(Q1,{size:16})," Password"]}),g.jsx(iE,{id:"password",value:i,onChange:u=>r(u.target.value),placeholder:"Enter your password",required:!0,autoComplete:"current-password"})]}),g.jsx("button",{type:"submit",className:"btn-primary auth-btn",disabled:o,children:o?"Authenticating...":"Log in to workspace"})]}),g.jsxs("div",{className:"auth-switch",children:["Don't have an account? ",g.jsx(Xm,{to:"/signup",className:"auth-link",children:"Create one"})]})]})})]})}function gk(){const t=Ts(),[e,n]=L.useState(""),[i,r]=L.useState(""),[s,a]=L.useState(""),[o,l]=L.useState(""),[c,u]=L.useState(!1),f=async d=>{d.preventDefault(),l(""),u(!0);try{await hk(e,i,s),t("/login")}catch(p){l(p.message||"Signup failed")}finally{u(!1)}};return g.jsxs("div",{className:"auth-page",children:[g.jsx("section",{className:"auth-brand-panel",children:g.jsxs("div",{className:"auth-brand-inner",children:[g.jsx("div",{className:"auth-kicker",children:"Practice room setup"}),g.jsx("h1",{children:g.jsx(Eg,{text:"Create your AIVA workspace.",speed:38})}),g.jsx("p",{children:"Build a preparation profile, upload resume context later, and start focused AI interview sessions across technical and behavioral tracks."}),g.jsx(Ti,{className:"auth-assistant",label:"New interview workspace"})]})}),g.jsx("section",{className:"auth-form-panel",children:g.jsxs(Ut.div,{className:"auth-container app-shell-panel",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.45,ease:"easeOut"},children:[g.jsxs("div",{className:"auth-header",children:[g.jsx("span",{className:"eyebrow",children:"Start practicing"}),g.jsx("h2",{className:"auth-title",children:"Create account"}),g.jsx("p",{className:"auth-subtitle",children:"Set up your interview workspace in a few seconds."})]}),g.jsxs("form",{className:"auth-form",onSubmit:f,children:[o&&g.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},className:"auth-error",children:o}),g.jsxs("div",{className:"auth-field",children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx(XN,{size:16})," Full Name"]}),g.jsx("input",{id:"name",type:"text",value:e,onChange:d=>n(d.target.value),placeholder:"Your name",required:!0,autoComplete:"name"})]}),g.jsxs("div",{className:"auth-field",children:[g.jsxs("label",{htmlFor:"email",children:[g.jsx(mu,{size:16})," Email Address"]}),g.jsx("input",{id:"email",type:"email",value:i,onChange:d=>r(d.target.value),placeholder:"you@example.com",required:!0,autoComplete:"email"})]}),g.jsxs("div",{className:"auth-field",children:[g.jsxs("label",{htmlFor:"password",children:[g.jsx(Q1,{size:16})," Password"]}),g.jsx(iE,{id:"password",value:s,onChange:d=>a(d.target.value),placeholder:"At least 6 characters",required:!0,minLength:6,autoComplete:"new-password"})]}),g.jsx("button",{type:"submit",className:"btn-primary auth-btn",disabled:c,children:c?"Creating account...":"Create account"})]}),g.jsxs("div",{className:"auth-switch",children:["Already have an account? ",g.jsx(Xm,{to:"/login",className:"auth-link",children:"Log in"})]})]})})]})}const Cs="https://aiva-backend-3.onrender.com";function bs(){const t=localStorage.getItem("token");return t?{Authorization:`Bearer ${t}`}:{}}async function za(t){const e=await t.text();if(!t.ok)try{const n=JSON.parse(e);throw new Error(n.message||n.error||e)}catch(n){throw n instanceof Error?n:new Error(e||"Request failed")}return e?JSON.parse(e):null}async function vk(){const t=await fetch(`${Cs}/interview/types`,{headers:bs()});if(!t.ok)throw new Error("Failed to fetch interview types");return t.json()}async function xk(t,e){const n=await fetch(`${Cs}/interview/start/${t}`,{method:"POST",headers:{...bs(),"Content-Type":"application/json"},body:JSON.stringify(e)});return za(n)}async function Nf(t){const e=await fetch(`${Cs}/interview/${t}/question`,{headers:bs()});return za(e)}async function Lf(t,e,n){const i=await fetch(`${Cs}/interview/${t}/question/${e}/submit`,{method:"POST",headers:{...bs(),"Content-Type":"application/json"},body:JSON.stringify({answer:n})});return za(i)}async function By(t){const e=await fetch(`${Cs}/interview/${t}/result`,{headers:bs()});return za(e)}async function zy(t){const e=await fetch(`${Cs}/interview/${t}/questions`,{headers:bs()});return za(e)}async function yk(){const t=await fetch(`${Cs}/interview/history`,{headers:bs()});return za(t)}const HE="https://aiva-backend-3.onrender.com";function GE(){const t=localStorage.getItem("token");return t?{Authorization:`Bearer ${t}`}:{}}async function WE(t){const e=await t.text();if(!t.ok)try{const n=JSON.parse(e);throw new Error(n.message||n.error||e)}catch(n){throw n instanceof Error?n:new Error(e||"Request failed")}return e?JSON.parse(e):null}async function jE(){const t=await fetch(`${HE}/profile`,{headers:{...GE(),"Content-Type":"application/json"}});return WE(t)}async function _k(t){const e=await fetch(`${HE}/profile`,{method:"PUT",headers:{...GE(),"Content-Type":"application/json"},body:JSON.stringify(t)});return WE(e)}const XE="https://aiva-backend-3.onrender.com";function $E(){const t=localStorage.getItem("token");return t?{Authorization:`Bearer ${t}`}:{}}async function Sk(t){const e=new FormData;e.append("file",t);const n=await fetch(`${XE}/resume/upload`,{method:"POST",headers:$E(),body:e});if(!n.ok)throw new Error("Failed to upload resume");return n.text()}async function qE(){const t=await fetch(`${XE}/resume/status`,{headers:$E()});return t.ok?t.json():!1}function Mk({interview:t,onClose:e,onStart:n,hasResume:i}){const[r,s]=L.useState(10),[a,o]=L.useState(5),l=c=>{c.preventDefault(),n({durationMinutes:r,questionCount:a})};return g.jsx(Ut.div,{className:"modal-overlay interview-setup-overlay",onClick:e,initial:{opacity:0},animate:{opacity:1},children:g.jsxs(Ut.div,{className:"modal-box app-shell-panel",onClick:c=>c.stopPropagation(),initial:{scale:.96,opacity:0,y:18},animate:{scale:1,opacity:1,y:0},transition:{type:"spring",duration:.5},children:[g.jsx("button",{className:"modal-close",onClick:e,"aria-label":"Close",children:g.jsx(Mg,{size:20})}),g.jsxs("div",{className:"modal-header",children:[g.jsxs("span",{className:"eyebrow",children:[g.jsx(VN,{size:13})," Session setup"]}),g.jsx("h2",{className:"modal-title",children:t==null?void 0:t.title}),g.jsx("p",{className:"modal-desc",children:t==null?void 0:t.description})]}),i?g.jsxs("div",{className:"modal-resume-badge success",children:[g.jsx(J1,{size:18,className:"badge-icon"}),g.jsx("span",{children:"Questions will use your resume context when possible."})]}):g.jsxs("div",{className:"modal-resume-badge warning",children:[g.jsx(X3,{size:18,className:"badge-icon"}),g.jsx("span",{children:"Upload your resume in Profile for more personalized questions."})]}),g.jsxs("form",{onSubmit:l,className:"modal-form",children:[g.jsxs("div",{className:"form-row-group",children:[g.jsxs("div",{className:"modal-field",children:[g.jsxs("label",{children:[g.jsx(pu,{size:16})," Duration"]}),g.jsx("select",{value:r,onChange:c=>s(Number(c.target.value)),className:"modal-select",children:[5,10,15,20,25,30].map(c=>g.jsxs("option",{value:c,children:[c," min"]},c))})]}),g.jsxs("div",{className:"modal-field",children:[g.jsxs("label",{children:[g.jsx(uN,{size:16})," Questions"]}),g.jsx("select",{value:a,onChange:c=>o(Number(c.target.value)),className:"modal-select",children:Array.from({length:10},(c,u)=>u+1).map(c=>g.jsxs("option",{value:c,children:[c," questions"]},c))})]})]}),g.jsxs("div",{className:"modal-actions",children:[g.jsx("button",{type:"button",onClick:e,className:"btn-secondary",children:"Cancel"}),g.jsxs("button",{type:"submit",className:"btn-primary start-session-btn",children:["Start Interview ",g.jsx(NN,{size:16})]})]})]})]})})}const Df={java:{icon:g.jsx(tN,{size:22}),tone:"teal",label:"Backend fundamentals"},python:{icon:g.jsx(Yu,{size:22}),tone:"blue",label:"Problem solving"},frontend:{icon:g.jsx(EN,{size:22}),tone:"amber",label:"UI engineering"},"data-science":{icon:g.jsx(iN,{size:22}),tone:"violet",label:"Data reasoning"},"system-design":{icon:g.jsx(CN,{size:22}),tone:"green",label:"Architecture"},behavioral:{icon:g.jsx(YN,{size:22}),tone:"rose",label:"Communication"}},Vy=[{id:"dashboard",label:"Dashboard",icon:g.jsx(pN,{size:20})},{id:"interviews",label:"Mock Interviews",icon:g.jsx(Y3,{size:20})},{id:"history",label:"Session History",icon:g.jsx(eE,{size:20})},{id:"progress",label:"Progress",icon:g.jsx(Sg,{size:20})}],Ek=[{icon:g.jsx(Yu,{size:22}),title:"Live answer review",desc:"AIVA evaluates clarity, relevance, structure, and confidence after each completed session."},{icon:g.jsx(Ku,{size:22}),title:"Role-aware practice",desc:"Sessions are tuned by domain, question count, duration, and resume context when available."},{icon:g.jsx(Sg,{size:22}),title:"Progress memory",desc:"Scores, attempts, and recent performance stay organized so improvement is easy to track."},{icon:g.jsx(BN,{size:22}),title:"Focused interview mode",desc:"Fullscreen and tab-switch checks create a realistic practice environment."}],wk=[{step:"01",title:"Select a track",desc:"Choose the interview domain that matches the role."},{step:"02",title:"Tune the session",desc:"Set time and number of questions before starting."},{step:"03",title:"Answer naturally",desc:"Write clear responses in the focused interview room."},{step:"04",title:"Review feedback",desc:"Use the score report to decide what to practice next."}];function Tk(){var U;const t=Ts(),[e,n]=L.useState(!1),[i,r]=L.useState("dashboard"),[s,a]=L.useState(!1),[o,l]=L.useState(!0),[c,u]=L.useState([]),[f,d]=L.useState(!0),[p,v]=L.useState(null),[M,m]=L.useState(!1),h=L.useRef(null),[x,S]=L.useState(""),[_,T]=L.useState(""),[w,C]=L.useState(null),[y,b]=L.useState(!0);L.useEffect(()=>{localStorage.getItem("token")||t("/login")},[t]),L.useEffect(()=>{vk().then(u).catch(()=>u([])).finally(()=>d(!1))},[]),L.useEffect(()=>{Promise.all([jE().catch(()=>null),yk().catch(()=>null)]).then(([D,q])=>{D!=null&&D.name&&S(D.name),D!=null&&D.email&&T(D.email),q&&C(q),qE().then(m).catch(()=>{})}).finally(()=>b(!1))},[]),L.useEffect(()=>{function D(q){h.current&&!h.current.contains(q.target)&&a(!1)}return document.addEventListener("click",D),()=>document.removeEventListener("click",D)},[]);const R=()=>{localStorage.removeItem("token"),t("/login")},N=async D=>{if(p)try{const{sessionId:q}=await xk(p.id,D);v(null),sessionStorage.setItem(`interview_duration_${q}`,D.durationMinutes),t(`/interview/${p.id}/${q}`)}catch(q){alert(q.message||"Failed to start interview")}},F=D=>D?new Date(D).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"-",X=D=>D>=8?{cls:"score-high",text:"Excellent"}:D>=6?{cls:"score-mid",text:"Good"}:D>=4?{cls:"score-avg",text:"Average"}:{cls:"score-low",text:"Needs Work"},Y=x?x.charAt(0).toUpperCase():"?",z=x?x.split(" ")[0]:"",K={dashboard:"Home",interviews:"Mock Interviews",history:"Session History",progress:"Progress"},G=((U=w==null?void 0:w.sessions)==null?void 0:U.slice(0,3))||[];return g.jsxs("div",{className:"dashboard-layout",children:[g.jsxs("aside",{className:`sidebar app-shell-panel ${o?"open":"collapsed"}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx("div",{className:"logo-badge",children:"A"}),o&&g.jsxs("div",{children:[g.jsx("h2",{children:"AIVA"}),g.jsx("span",{children:"Interview workspace"})]})]}),g.jsx("nav",{className:"sidebar-nav",children:Vy.map(D=>g.jsxs("button",{className:`nav-item ${i===D.id?"active":""}`,onClick:()=>r(D.id),title:o?void 0:D.label,children:[D.icon,o&&g.jsx("span",{children:D.label})]},D.id))}),g.jsxs("button",{className:"nav-collapse",onClick:()=>l(D=>!D),children:[g.jsx($d,{size:16}),o&&g.jsx("span",{children:"Collapse"})]}),g.jsx("div",{className:"sidebar-footer",children:g.jsxs("button",{className:"nav-item logout",onClick:R,children:[g.jsx(qd,{size:20}),o&&g.jsx("span",{children:"Logout"})]})})]}),e&&g.jsx("div",{className:"mobile-menu-overlay",onClick:()=>n(!1),children:g.jsxs("div",{className:"mobile-menu app-shell-panel",onClick:D=>D.stopPropagation(),children:[g.jsxs("div",{className:"mobile-menu-header",children:[g.jsx("div",{className:"logo-badge",children:"A"}),g.jsx("h2",{children:"AIVA"}),g.jsx("button",{onClick:()=>n(!1),className:"close-btn",children:g.jsx(Mg,{size:22})})]}),g.jsxs("nav",{className:"mobile-nav",children:[Vy.map(D=>g.jsxs("button",{className:`nav-item ${i===D.id?"active":""}`,onClick:()=>{r(D.id),n(!1)},children:[D.icon," ",g.jsx("span",{children:D.label})]},D.id)),g.jsxs("button",{className:"nav-item logout",onClick:R,children:[g.jsx(qd,{size:20})," ",g.jsx("span",{children:"Logout"})]})]})]})}),g.jsxs("main",{className:"dashboard-content",children:[g.jsxs("header",{className:"dashboard-topbar app-shell-panel",children:[g.jsxs("div",{className:"topbar-left",children:[g.jsx("button",{className:"hamburger-btn",onClick:()=>n(!0),children:g.jsx(yN,{size:22})}),g.jsxs("span",{className:"breadcrumb",children:["AIVA ",g.jsx($d,{size:14})," ",K[i]]})]}),g.jsxs("div",{className:"topbar-right",ref:h,children:[g.jsxs("span",{className:"greeting",children:["Hi, ",g.jsx("strong",{children:z||"there"})]}),g.jsx("button",{className:"avatar-btn",onClick:()=>a(!s),children:Y}),s&&g.jsxs("div",{className:"dropdown-menu app-shell-panel",children:[g.jsxs("div",{className:"dropdown-header",children:[g.jsx("strong",{children:x||"User"}),g.jsx("span",{children:_})]}),g.jsxs(Xm,{to:"/profile",className:"dropdown-item",onClick:()=>a(!1),children:[g.jsx(gu,{size:16})," Profile"]}),g.jsxs("button",{className:"dropdown-item logout",onClick:R,children:[g.jsx(qd,{size:16})," Log out"]})]})]})]}),g.jsxs("div",{className:"view-container",children:[i==="dashboard"&&g.jsxs(Ut.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},className:"dashboard-home",children:[g.jsxs("section",{className:"hero-section",children:[g.jsxs("div",{className:"hero-content",children:[g.jsx("span",{className:"eyebrow",children:"AI interview practice"}),g.jsx("h1",{children:z?`Welcome back, ${z}.`:"Practice interviews with a focused AI assistant."}),g.jsx("p",{className:"subtitle",children:g.jsx(Eg,{text:"AIVA helps you rehearse technical and behavioral answers, then turns each session into clear feedback.",speed:26})}),g.jsxs("div",{className:"hero-actions",children:[g.jsx("button",{className:"btn-primary",onClick:()=>r("interviews"),children:"Start practicing"}),g.jsx("button",{className:"btn-secondary",onClick:()=>r("history"),children:"Review sessions"})]})]}),g.jsx("div",{className:"hero-visual",children:g.jsx(Ti,{label:"Virtual interviewer listening"})})]}),g.jsxs("section",{className:"overview-strip",children:[g.jsxs("div",{className:"overview-item",children:[g.jsx("span",{children:(w==null?void 0:w.totalInterviews)??0}),g.jsx("p",{children:"Total sessions"})]}),g.jsxs("div",{className:"overview-item",children:[g.jsx("span",{children:(w==null?void 0:w.averageScore)??"-"}),g.jsx("p",{children:"Average score"})]}),g.jsxs("div",{className:"overview-item",children:[g.jsx("span",{children:M?"On":"Off"}),g.jsx("p",{children:"Resume context"})]}),g.jsxs("div",{className:"overview-item",children:[g.jsx("span",{children:"6"}),g.jsx("p",{children:"Practice domains"})]})]}),g.jsxs("section",{className:"workflow-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("span",{className:"eyebrow",children:"Workflow"}),g.jsx("h2",{children:"Simple, structured preparation."})]}),g.jsx("div",{className:"how-it-works-grid",children:wk.map(D=>g.jsxs("div",{className:"step-card",children:[g.jsx("div",{className:"step-number",children:D.step}),g.jsx("h3",{children:D.title}),g.jsx("p",{children:D.desc})]},D.step))})]}),g.jsxs("section",{className:"features-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("span",{className:"eyebrow",children:"Capabilities"}),g.jsx("h2",{children:"Built for repeated practice, not showpiece screens."})]}),g.jsx("div",{className:"features-grid",children:Ek.map(D=>g.jsxs("div",{className:"feature-card",children:[g.jsx("div",{className:"feature-icon",children:D.icon}),g.jsx("h4",{children:D.title}),g.jsx("p",{children:D.desc})]},D.title))})]}),G.length>0&&g.jsxs("section",{className:"recent-panel",children:[g.jsxs("div",{className:"section-heading inline",children:[g.jsxs("div",{children:[g.jsx("span",{className:"eyebrow",children:"Recent work"}),g.jsx("h2",{children:"Latest interview sessions"})]}),g.jsx("button",{className:"btn-secondary",onClick:()=>r("history"),children:"View all"})]}),g.jsx("div",{className:"mini-history",children:G.map(D=>{const{cls:q,text:ie}=X(D.score);return g.jsxs("div",{className:"mini-history-row",children:[g.jsxs("div",{children:[g.jsx("strong",{children:D.role}),g.jsx("span",{children:F(D.completedAt)})]}),g.jsx("span",{className:`history-badge ${q}`,children:ie})]},D.sessionId)})})]})]}),i==="interviews"&&g.jsxs(Ut.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},children:[g.jsxs("div",{className:"view-header split-header",children:[g.jsxs("div",{children:[g.jsx("span",{className:"eyebrow",children:"Practice catalog"}),g.jsx("h2",{children:"Mock Interviews"}),g.jsx("p",{children:"Choose a focused track, configure the session, and begin in fullscreen mode."})]}),g.jsxs("button",{className:"btn-secondary",onClick:()=>t("/profile"),children:[g.jsx(gu,{size:16})," Profile and resume"]})]}),f?g.jsx("div",{className:"skeleton-grid",children:[1,2,3,4,5,6].map(D=>g.jsx("div",{className:"skeleton-card"},D))}):g.jsx("div",{className:"interview-catalog",children:c.map(D=>{const q=Df[D.id]||{icon:g.jsx(Fx,{size:22}),tone:"teal",label:"Interview practice"};return g.jsxs("div",{className:`domain-row tone-${q.tone}`,children:[g.jsx("div",{className:"domain-mark",children:q.icon}),g.jsxs("div",{className:"domain-copy",children:[g.jsxs("div",{className:"domain-title-line",children:[g.jsx("h3",{children:D.title}),g.jsx("span",{children:q.label})]}),g.jsx("p",{children:D.description})]}),g.jsxs("button",{className:"btn-primary start-btn",onClick:()=>v(D),children:["Start Session ",g.jsx($d,{size:16})]})]},D.id)})})]}),i==="progress"&&g.jsxs(Ut.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},children:[g.jsxs("div",{className:"view-header",children:[g.jsx("span",{className:"eyebrow",children:"Performance"}),g.jsx("h2",{children:"Your Progress"}),g.jsx("p",{children:"Track your session volume, average score, and best result."})]}),y?g.jsx("div",{className:"loading-text",children:"Loading stats..."}):g.jsxs("div",{className:"stats-grid",children:[g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon purple",children:g.jsx(fN,{size:24})}),g.jsxs("div",{className:"stat-info",children:[g.jsx("span",{className:"stat-value",children:(w==null?void 0:w.totalInterviews)??0}),g.jsx("span",{className:"stat-label",children:"Total Sessions"})]})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon blue",children:g.jsx(Sg,{size:24})}),g.jsxs("div",{className:"stat-info",children:[g.jsxs("span",{className:"stat-value",children:[(w==null?void 0:w.averageScore)??"-",g.jsx("small",{children:"/10"})]}),g.jsx("span",{className:"stat-label",children:"Average Score"})]})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon gold",children:g.jsx(Ku,{size:24})}),g.jsxs("div",{className:"stat-info",children:[g.jsxs("span",{className:"stat-value",children:[(w==null?void 0:w.bestScore)??"-",g.jsx("small",{children:"/10"})]}),g.jsx("span",{className:"stat-label",children:"Best Score"})]})]})]})]}),i==="history"&&g.jsxs(Ut.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},children:[g.jsxs("div",{className:"view-header",children:[g.jsx("span",{className:"eyebrow",children:"Archive"}),g.jsx("h2",{children:"Session History"}),g.jsx("p",{children:"Review past performance and AI feedback."})]}),y?g.jsx("div",{className:"skeleton-grid",children:[1,2,3].map(D=>g.jsx("div",{className:"skeleton-row"},D))}):!w||w.sessions.length===0?g.jsxs("div",{className:"empty-state",children:[g.jsx(eE,{size:44,className:"empty-icon"}),g.jsx("h3",{children:"No sessions yet"}),g.jsx("p",{children:"Complete your first mock interview to see your history here."}),g.jsx("button",{className:"btn-primary",onClick:()=>r("interviews"),children:"Start an Interview"})]}):g.jsx("div",{className:"history-list",children:w.sessions.map(D=>{const{cls:q,text:ie}=X(D.score),oe=D.score/10*100,ze=Object.keys(Df).find(Ge=>D.role.toLowerCase().includes(Ge.replace("-"," "))),Ue=Df[ze]||{icon:g.jsx(Fx,{size:20}),tone:"teal"};return g.jsxs("div",{className:"history-row",children:[g.jsx("div",{className:`history-icon tone-${Ue.tone}`,children:Ue.icon}),g.jsxs("div",{className:"history-details",children:[g.jsx("h4",{children:D.role}),g.jsxs("span",{children:[D.questionCount," questions - ",F(D.completedAt)]})]}),g.jsx("div",{className:"history-score-bar",children:g.jsx("div",{className:"bar-track",children:g.jsx("div",{className:`bar-fill ${q}`,style:{width:`${oe}%`}})})}),g.jsxs("div",{className:`history-score ${q}`,children:[g.jsx("strong",{children:D.score}),"/10"]}),g.jsx("div",{className:`history-badge ${q}`,children:ie})]},D.sessionId)})})]})]})]}),p&&g.jsx(Mk,{interview:p,onClose:()=>v(null),onStart:N,hasResume:M})]})}const If={STUDENT:"Student",WORKING_PROFESSIONAL:"Working Professional"};function Ak(){const t=Ts(),[e,n]=L.useState(null),[i,r]=L.useState(!0),[s,a]=L.useState(!1),[o,l]=L.useState(""),[c,u]=L.useState("STUDENT"),[f,d]=L.useState(""),[p,v]=L.useState(""),[M,m]=L.useState(!1),[h,x]=L.useState(!1),[S,_]=L.useState(!1),[T,w]=L.useState(""),[C,y]=L.useState(!1);L.useEffect(()=>{if(!localStorage.getItem("token")){t("/login");return}jE().then(Y=>{n(Y),l(Y.name||""),u(Y.profession||"STUDENT"),d(Y.designation||""),qE().then(x).catch(()=>{})}).catch(()=>t("/login")).finally(()=>r(!1))},[t]);const b=async X=>{X.preventDefault(),v(""),m(!0);try{const Y=await _k({name:o,profession:c,designation:c==="WORKING_PROFESSIONAL"?f:null});n(Y),a(!1),y(!0),setTimeout(()=>y(!1),3e3)}catch(Y){v(Y.message||"Update failed")}finally{m(!1)}},R=()=>{l((e==null?void 0:e.name)||""),u((e==null?void 0:e.profession)||"STUDENT"),d((e==null?void 0:e.designation)||""),a(!1),v("")},N=async X=>{const Y=X.target.files[0];if(Y){if(Y.type!=="application/pdf"){w("Only PDF files are allowed");return}_(!0),w("");try{await Sk(Y),x(!0),w("Resume uploaded successfully!")}catch{w("Upload failed. Try again.")}finally{_(!1)}}},F=e!=null&&e.name?e.name.split(" ").map(X=>X[0]).join("").toUpperCase().slice(0,2):"?";return i?g.jsxs("div",{className:"profile-layout loading-layout",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading your profile..."})]}):g.jsxs("div",{className:"profile-layout",children:[g.jsx(wc,{children:C&&g.jsxs(Ut.div,{className:"toast-notification app-shell-panel",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},children:[g.jsx(Tc,{size:20,color:"var(--success)"}),"Profile updated successfully"]})}),g.jsx("header",{className:"profile-topbar",children:g.jsxs("button",{className:"back-btn",onClick:()=>t("/dashboard"),children:[g.jsx(lo,{size:20})," Back to Dashboard"]})}),g.jsxs("main",{className:"profile-container",children:[g.jsxs("section",{className:"profile-hero",children:[g.jsxs("div",{className:"profile-hero-copy",children:[g.jsx("span",{className:"eyebrow",children:"Candidate profile"}),g.jsx("h1",{children:(e==null?void 0:e.name)||"Your profile"}),g.jsx("p",{children:"Keep your identity, resume context, and interview preferences ready before starting a session."})]}),g.jsx(Ti,{className:"profile-assistant",label:"Profile context ready"})]}),g.jsxs("section",{className:"profile-grid",children:[g.jsxs("aside",{className:"identity-panel app-shell-panel",children:[g.jsx("div",{className:"avatar-circle",children:F}),g.jsxs("div",{className:"identity-copy",children:[g.jsx("h2",{children:(e==null?void 0:e.name)||"-"}),g.jsx("span",{children:If[e==null?void 0:e.profession]||(e==null?void 0:e.profession)||"Member"}),(e==null?void 0:e.profession)==="WORKING_PROFESSIONAL"&&(e==null?void 0:e.designation)&&g.jsx("p",{children:e.designation})]}),g.jsxs("div",{className:"identity-meta",children:[g.jsxs("div",{className:"meta-item",children:[g.jsx(gu,{size:16})," ",g.jsx("span",{children:(e==null?void 0:e.name)||"-"})]}),g.jsxs("div",{className:"meta-item",children:[g.jsx(mu,{size:16})," ",g.jsx("span",{children:(e==null?void 0:e.email)||"-"})]}),g.jsxs("div",{className:"meta-item",children:[g.jsx(Ix,{size:16})," ",g.jsx("span",{children:If[e==null?void 0:e.profession]||"-"})]})]}),!s&&g.jsxs("button",{className:"btn-primary edit-btn",onClick:()=>a(!0),children:[g.jsx(RN,{size:16})," Edit Profile"]})]}),g.jsx("section",{className:"profile-content",children:g.jsx(wc,{mode:"wait",children:s?g.jsx(Ut.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.2},className:"content-wrapper",children:g.jsxs("div",{className:"content-card edit-card app-shell-panel",children:[g.jsxs("div",{className:"card-header",children:[g.jsx("h3",{children:"Edit Profile"}),g.jsx("p",{children:"Update the details AIVA uses to shape the practice experience."})]}),p&&g.jsxs("div",{className:"error-banner",children:[g.jsx(Mg,{size:16})," ",p]}),g.jsxs("form",{className:"edit-form",onSubmit:b,children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Full Name"}),g.jsx("input",{type:"text",value:o,onChange:X=>l(X.target.value),placeholder:"Your full name",required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{children:["Email Address ",g.jsx("span",{className:"hint",children:"(Cannot be changed)"})]}),g.jsx("input",{type:"email",value:(e==null?void 0:e.email)||"",disabled:!0,className:"disabled-input"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Profession"}),g.jsxs("select",{value:c,onChange:X=>u(X.target.value),children:[g.jsx("option",{value:"STUDENT",children:"Student"}),g.jsx("option",{value:"WORKING_PROFESSIONAL",children:"Working Professional"})]})]}),g.jsx(wc,{children:c==="WORKING_PROFESSIONAL"&&g.jsxs(Ut.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"form-group",children:[g.jsx("label",{children:"Designation"}),g.jsx("input",{type:"text",value:f,onChange:X=>d(X.target.value),placeholder:"e.g. Software Engineer, Product Manager",required:!0})]})}),g.jsxs("div",{className:"form-actions",children:[g.jsx("button",{type:"button",className:"btn-secondary",onClick:R,disabled:M,children:"Cancel"}),g.jsx("button",{type:"submit",className:"btn-primary save-btn",disabled:M,children:M?"Saving...":g.jsxs(g.Fragment,{children:[g.jsx(tE,{size:18})," Save Changes"]})})]})]})]})},"edit"):g.jsxs(Ut.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.2},className:"content-wrapper",children:[g.jsxs("div",{className:"content-card app-shell-panel",children:[g.jsxs("div",{className:"card-header",children:[g.jsx("h3",{children:"Profile Details"}),g.jsx("p",{children:"Information used to personalize the interview experience."})]}),g.jsxs("div",{className:"details-grid",children:[g.jsxs("div",{className:"detail-box",children:[g.jsx("div",{className:"detail-icon",children:g.jsx(gu,{size:20})}),g.jsxs("div",{children:[g.jsx("label",{children:"Full Name"}),g.jsx("p",{children:(e==null?void 0:e.name)||"-"})]})]}),g.jsxs("div",{className:"detail-box",children:[g.jsx("div",{className:"detail-icon blue",children:g.jsx(mu,{size:20})}),g.jsxs("div",{children:[g.jsx("label",{children:"Email Address"}),g.jsx("p",{children:(e==null?void 0:e.email)||"-"})]})]}),g.jsxs("div",{className:"detail-box",children:[g.jsx("div",{className:"detail-icon purple",children:g.jsx(Ix,{size:20})}),g.jsxs("div",{children:[g.jsx("label",{children:"Profession"}),g.jsx("p",{children:If[e==null?void 0:e.profession]||(e==null?void 0:e.profession)||"-"})]})]}),(e==null?void 0:e.profession)==="WORKING_PROFESSIONAL"&&g.jsxs("div",{className:"detail-box",children:[g.jsx("div",{className:"detail-icon gold",children:g.jsx(z3,{size:20})}),g.jsxs("div",{children:[g.jsx("label",{children:"Designation"}),g.jsx("p",{children:(e==null?void 0:e.designation)||"-"})]})]})]})]}),g.jsxs("div",{className:"content-card app-shell-panel",children:[g.jsxs("div",{className:"card-header",children:[g.jsx("h3",{children:"Resume Integration"}),g.jsx("p",{children:"Upload a PDF resume to make questions more specific to your profile."})]}),g.jsxs("div",{className:`resume-upload-zone ${h?"has-file":""}`,children:[g.jsx("div",{className:"resume-status-icon",children:h?g.jsx(J1,{size:34}):g.jsx(Q3,{size:34})}),g.jsxs("div",{className:"resume-text",children:[g.jsx("h4",{children:h?"Resume active":"No resume found"}),g.jsx("p",{children:h?"Future mock interviews can use your resume context.":"Upload a PDF to improve AI context."})]}),g.jsxs("label",{className:`btn-secondary upload-btn ${S?"disabled":""}`,children:[S?"Uploading...":h?"Replace PDF":"Upload PDF",g.jsx("input",{type:"file",accept:"application/pdf",onChange:N,disabled:S,style:{display:"none"}})]})]}),T&&g.jsx("p",{className:`upload-msg ${T.includes("success")?"success":"error"}`,children:T})]}),g.jsxs("div",{className:"account-status-card app-shell-panel",children:[g.jsxs("div",{className:"account-info",children:[g.jsx(nE,{size:24,className:"shield-icon"}),g.jsxs("div",{children:[g.jsx("h4",{children:"Account Status"}),g.jsx("p",{children:"Active and ready for mock sessions."})]})]}),g.jsxs("span",{className:"status-badge",children:[g.jsx("span",{className:"pulse-dot"})," Active"]})]})]},"view")})})]})]})]})}const Ck={java:"Java Developer",python:"Python Developer",frontend:"Frontend Developer","data-science":"Data Science","system-design":"System Design",behavioral:"HR / Behavioral"},bk=[{icon:Ku,title:"Use the STAR Method",text:"Structure your answers with Situation, Task, Action, and Result to give clear, impactful responses."},{icon:FN,title:"Research the Company",text:"Study the company products, culture, and recent news. Tailor your answers to show genuine interest."},{icon:pu,title:"Practice Time Management",text:"Keep answers concise. Aim for 1 to 2 minutes per response so the interviewer can follow your thinking."},{icon:Yu,title:"Think Before You Speak",text:"It is okay to pause and collect your thoughts. A well-structured answer beats a rushed one."},{icon:SN,title:"Ask Thoughtful Questions",text:"Prepare questions about the role, team, or challenges. It shows you are engaged and curious."}];function Hy(){var _t;const t=Ts(),{typeId:e,sessionId:n}=oC(),[i,r]=L.useState([]),[s,a]=L.useState(0),[o,l]=L.useState({}),[c,u]=L.useState(!1),[f,d]=L.useState(!1),[p,v]=L.useState(!1),[M,m]=L.useState(!1),[h,x]=L.useState(null),[S,_]=L.useState(0),[T,w]=L.useState(null),[C,y]=L.useState(null),b=L.useRef(null),[R,N]=L.useState(!1),[F,X]=L.useState(!1),[Y,z]=L.useState(0),[K,G]=L.useState(!1),[U,D]=L.useState(!1),[q,ie]=L.useState(!1),oe=L.useRef(0),ze=L.useRef(!1),Ue=L.useRef(!1),Ge=L.useCallback(()=>{const I=document.documentElement,Fe=I.requestFullscreen||I.webkitRequestFullscreen||I.msRequestFullscreen;Fe?Fe.call(I).then(()=>{X(!0),Ue.current=!0}).catch(()=>{Ue.current=!0}):Ue.current=!0},[]),Z=L.useCallback(async()=>{var I;if(!ze.current){ze.current=!0,D(!0),Ue.current=!1,document.fullscreenElement&&((I=document.exitFullscreen)==null||I.call(document).catch(()=>{}));try{const Fe=Number(n);let Ae=[];try{Ae=await zy(Fe)}catch{Ae=[]}for(const H of Ae)if(!H.userAnswer)try{await Lf(Fe,H.questionId,"-")}catch{}let P=0;const E=20;let k=null;for(;P<E;){P++;try{k=await By(Fe);break}catch{try{const H=await Nf(Fe);if(H&&H.questionId)await Lf(Fe,H.questionId,"-");else break}catch{break}}}k&&x(k),v(!0)}catch{v(!0)}}},[n]);L.useEffect(()=>{if(!n||!Ue.current)return;const I=()=>{!Ue.current||ze.current||(oe.current+=1,z(oe.current),oe.current>=2?Z():G(!0))},Fe=()=>{document.hidden&&Ue.current&&I()},Ae=()=>{!document.fullscreenElement&&Ue.current&&F&&I()};return document.addEventListener("visibilitychange",Fe),document.addEventListener("fullscreenchange",Ae),()=>{document.removeEventListener("visibilitychange",Fe),document.removeEventListener("fullscreenchange",Ae)}},[n,F,Z]),L.useEffect(()=>{if(!localStorage.getItem("token")){t("/login");return}if(!n)return;u(!0),N(!0);const Fe=sessionStorage.getItem(`interview_duration_${n}`);if(Fe){const Ae=parseInt(Fe)*60;w(Ae),y(Ae)}return zy(Number(n)).then(Ae=>{if(Ae&&Ae.length>0){r(Ae),_(Ae[0].totalQuestions);const P={};Ae.forEach(k=>{k.userAnswer&&(P[k.questionId]=k.userAnswer)}),l(P);const E=Ae.findIndex(k=>!k.userAnswer);if(E>=0)a(E);else{if(Ae.length<Ae[0].totalQuestions)return Nf(Number(n)).then(k=>{k?(_(k.totalQuestions),r(H=>[...H,k]),a(Ae.length)):v(!0)});v(!0)}}else return Nf(Number(n)).then(P=>{P?(r([P]),_(P.totalQuestions),a(0)):v(!0)})}).catch(()=>t("/dashboard")).finally(()=>u(!1)),()=>{var Ae;Ue.current=!1,document.fullscreenElement&&((Ae=document.exitFullscreen)==null||Ae.call(document).catch(()=>{}))}},[t,n]),L.useEffect(()=>{if(!(T===null||p||h)&&!(!F&&!Ue.current)){if(T<=0){ie(!0),Z();return}return b.current=setTimeout(()=>{w(I=>I<=1?(ie(!0),Z(),0):I-1)},1e3),()=>clearTimeout(b.current)}},[T,p,h,F,Z]);const ne=i[s]||null,se=ne&&o[ne.questionId]||"",De=I=>{ne&&l(Fe=>({...Fe,[ne.questionId]:I}))},ke=async I=>{if(I.preventDefault(),!(!se.trim()||!(ne!=null&&ne.questionId))){d(!0);try{const Fe=await Lf(Number(n),ne.questionId,se.trim());Fe.hasNextQuestion&&Fe.nextQuestion?(i.some(P=>P.questionId===Fe.nextQuestion.questionId)||r(P=>[...P,Fe.nextQuestion]),a(s+1)):v(!0)}catch(Fe){alert(Fe.message||"Failed to submit answer")}finally{d(!1)}}},Ne=()=>{s>0&&a(s-1)},xt=()=>{s<i.length-1&&a(s+1)},Xe=async()=>{m(!0);try{const I=await By(Number(n));x(I)}catch(I){alert(I.message||"Failed to get results")}finally{m(!1)}},it=Ck[e]||e||"Mock Interview",Je=I=>{if(I===null)return"";const Fe=Math.floor(I/60),Ae=I%60;return`${String(Fe).padStart(2,"0")}:${String(Ae).padStart(2,"0")}`},Ye=()=>{if(T===null||C===null)return"";const I=T/C;return I<=.1?"timer-danger":I<=.25?"timer-warning":"timer-safe"};if(!n)return g.jsx("div",{className:"interview-layout",children:g.jsxs("div",{className:"centered-card app-shell-panel",children:[g.jsx(Ti,{label:"Interview room inactive"}),g.jsxs("div",{className:"centered-copy",children:[g.jsx(Ux,{size:34,className:"icon-muted"}),g.jsx("h2",{children:it}),g.jsx("p",{children:"Start an interview from the dashboard to begin."}),g.jsxs("button",{onClick:()=>t("/dashboard"),className:"btn-primary",children:[g.jsx(lo,{size:16})," Go to Dashboard"]})]})]})});if(c)return g.jsxs("div",{className:"interview-layout loading-layout",children:[g.jsx(Ti,{className:"loading-assistant",label:"Connecting to interviewer"}),g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Connecting to AI interviewer..."})]});if(h){const Fe=(parseFloat(h.score)||0)/10*100,Ae=100-Fe,P="var(--success)",E="rgba(255, 255, 255, 0.1)";return g.jsxs("div",{className:"interview-layout result-layout",children:[g.jsx("header",{className:"interview-header",children:g.jsxs("button",{className:"back-btn",onClick:()=>t("/dashboard"),children:[g.jsx(lo,{size:18})," Back to Dashboard"]})}),g.jsxs(Ut.main,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},className:"result-dashboard",children:[g.jsxs("section",{className:"result-hero",children:[g.jsxs("div",{className:"result-header",children:[g.jsx("span",{className:"eyebrow",children:"Evaluation report"}),g.jsx("h1",{children:"Interview Evaluation"}),g.jsx("p",{children:"Detailed breakdown of your session performance and next practice areas."})]}),g.jsx(Ti,{className:"result-assistant",label:"Evaluation complete"})]}),U&&!q&&g.jsxs("div",{className:"alert-banner warning-banner",children:[g.jsx(Yd,{size:20})," Your interview was auto-submitted due to tab switching violations."]}),q&&g.jsxs("div",{className:"alert-banner danger-banner",children:[g.jsx(pu,{size:20})," Your time is up. The interview was submitted automatically."]}),g.jsxs("section",{className:"result-hero-grid",children:[g.jsxs("div",{className:"score-container app-shell-panel",children:[g.jsx("div",{className:"result-pie",style:{background:`conic-gradient(${P} 0% ${Fe}%, ${E} ${Fe}% 100%)`},children:g.jsxs("div",{className:"result-pie-inner",children:[g.jsx("span",{className:"pie-score",children:h.score}),g.jsx("span",{className:"pie-outof",children:"/10"})]})}),g.jsxs("div",{className:"pie-legend",children:[g.jsxs("div",{className:"legend-item",children:[g.jsx("span",{className:"legend-dot",style:{background:P}})," Score (",Fe.toFixed(0),"%)"]}),g.jsxs("div",{className:"legend-item",children:[g.jsx("span",{className:"legend-dot",style:{background:E}})," Room to improve (",Ae.toFixed(0),"%)"]})]})]}),g.jsxs("div",{className:"feedback-container",children:[h.strengths&&g.jsxs("div",{className:"feedback-card success-card",children:[g.jsxs("h3",{children:[g.jsx(Tc,{size:18})," Strengths"]}),g.jsx("p",{children:h.strengths})]}),h.weaknesses&&g.jsxs("div",{className:"feedback-card danger-card",children:[g.jsxs("h3",{children:[g.jsx(Yd,{size:18})," Areas to Improve"]}),g.jsx("p",{children:h.weaknesses})]}),h.improvements&&g.jsxs("div",{className:"feedback-card info-card",children:[g.jsxs("h3",{children:[g.jsx(Ku,{size:18})," What to Study"]}),g.jsx("p",{children:h.improvements})]})]})]}),h.interviewTips&&g.jsxs("section",{className:"tips-banner app-shell-panel",children:[g.jsxs("h3",{children:[g.jsx(Yu,{size:20})," AI Interview Tips"]}),g.jsx("p",{children:h.interviewTips})]}),g.jsxs("section",{className:"general-tips-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("span",{className:"eyebrow",children:"Real interview habits"}),g.jsx("h2",{children:"Best practices for your next session"})]}),g.jsx("div",{className:"tips-grid",children:bk.map(k=>g.jsxs("div",{className:"tip-card app-shell-panel",children:[g.jsx("div",{className:"tip-icon",children:g.jsx(k.icon,{size:22})}),g.jsx("h4",{children:k.title}),g.jsx("p",{children:k.text})]},k.title))})]})]})]})}if(p)return g.jsx("div",{className:"interview-layout",children:g.jsxs("div",{className:"centered-card app-shell-panel complete-card",children:[g.jsx(Ti,{label:"Answers ready for evaluation"}),g.jsxs("div",{className:"centered-copy",children:[g.jsx(Tc,{size:54,className:"icon-success"}),g.jsx("h2",{children:"Interview Complete"}),g.jsx("p",{children:"You have answered all questions. Process your final evaluation to see feedback and study suggestions."}),g.jsx("button",{onClick:Xe,disabled:M,className:"btn-primary mt-4",children:M?g.jsxs(g.Fragment,{children:[g.jsx(Ox,{size:18,className:"spin"})," Evaluating..."]}):g.jsxs(g.Fragment,{children:[g.jsx(Ux,{size:18})," Get My Results"]})})]})]})});const yt=(ne==null?void 0:ne.currentQuestion)===S,Pt=s===0,Nt=!!((_t=o[ne==null?void 0:ne.questionId])!=null&&_t.trim()),zt=s<i.length-1,pt=S?(ne==null?void 0:ne.currentQuestion)/S*100:0;return g.jsxs("div",{className:"interview-layout active-session",children:[g.jsxs(wc,{children:[R&&!p&&!h&&g.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"modal-overlay",children:g.jsxs(Ut.div,{initial:{scale:.95},animate:{scale:1},className:"proctor-modal app-shell-panel",children:[g.jsx("div",{className:"modal-icon-ring",children:g.jsx(TN,{size:30})}),g.jsx("h2",{children:"Enter Fullscreen Mode"}),g.jsx("p",{children:"This mock interview simulates a proctored environment. Tab switching and exiting fullscreen are monitored."}),g.jsxs("div",{className:"rules-box",children:[g.jsxs("div",{className:"rule",children:[g.jsx("span",{className:"dot warning"})," 1st violation: You receive a warning."]}),g.jsxs("div",{className:"rule",children:[g.jsx("span",{className:"dot danger"})," 2nd violation: Interview auto-submits."]})]}),g.jsxs("button",{className:"btn-primary w-full",onClick:()=>{N(!1),Ge()},children:[g.jsx(nE,{size:18})," I Understand, Go Fullscreen"]})]})}),K&&g.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"modal-overlay danger-overlay",children:g.jsxs(Ut.div,{initial:{scale:.95},animate:{scale:1},className:"proctor-modal app-shell-panel",children:[g.jsx("div",{className:"modal-icon-ring danger",children:g.jsx(Yd,{size:30})}),g.jsx("h2",{children:"Tab Switch Detected"}),g.jsxs("p",{children:["You exited fullscreen or switched tabs. This is violation ",g.jsxs("strong",{children:[Y," of 2"]}),"."]}),g.jsx("div",{className:"rules-box danger-box",children:"One more violation and your interview will instantly auto-submit."}),g.jsx("button",{className:"btn-primary danger-btn w-full",onClick:()=>{G(!1),Ge()},children:"Return to Interview"})]})})]}),g.jsxs("header",{className:"active-header app-shell-panel",children:[g.jsxs("button",{className:"back-btn",onClick:()=>{var I;window.confirm("Are you sure you want to exit? Your progress will be lost.")&&(Ue.current=!1,document.fullscreenElement&&((I=document.exitFullscreen)==null||I.call(document).catch(()=>{})),t("/dashboard"))},children:[g.jsx(lo,{size:18})," End Session"]}),ne&&g.jsxs("div",{className:"header-status",children:[g.jsxs("span",{className:"question-counter",children:["Question ",ne.currentQuestion," of ",S]}),T!==null&&g.jsxs("div",{className:`timer-badge ${Ye()}`,children:[g.jsx(pu,{size:16})," ",Je(T)]})]})]}),g.jsxs("main",{className:"question-container",children:[g.jsxs("section",{className:"session-sidebar app-shell-panel",children:[g.jsx(Ti,{label:"AIVA is listening"}),g.jsxs("div",{className:"session-progress",children:[g.jsxs("div",{className:"session-progress-head",children:[g.jsx("span",{children:"Progress"}),g.jsxs("strong",{children:[Math.round(pt),"%"]})]}),g.jsx("div",{className:"session-progress-track",children:g.jsx("div",{style:{width:`${pt}%`}})})]}),g.jsxs("div",{className:"session-note",children:[g.jsx("h3",{children:it}),g.jsx("p",{children:"Answer clearly, use examples, and keep your response focused on the question."})]})]}),g.jsxs(Ut.section,{initial:{opacity:0,x:18},animate:{opacity:1,x:0},transition:{duration:.28},className:"question-card app-shell-panel",children:[g.jsxs("div",{className:"question-topline",children:[g.jsxs("span",{className:"q-badge",children:["Question ",ne==null?void 0:ne.currentQuestion]}),g.jsx("span",{className:`answer-state ${Nt?"answered":""}`,children:Nt?"Draft saved locally":"Awaiting answer"})]}),g.jsx("h1",{className:"q-text",children:ne==null?void 0:ne.questionText}),g.jsxs("form",{onSubmit:ke,className:"answer-form",children:[g.jsx("textarea",{className:"answer-input",value:se,onChange:I=>De(I.target.value),placeholder:"Write your answer here. Use a short structure: context, decision, action, result.",disabled:f}),g.jsxs("div",{className:"form-controls",children:[g.jsx("div",{className:"control-left",children:!Pt&&g.jsxs("button",{type:"button",onClick:Ne,className:"btn-secondary",disabled:f,children:[g.jsx(lo,{size:16})," Previous"]})}),g.jsx("div",{className:"control-right",children:zt?g.jsxs(g.Fragment,{children:[g.jsxs("button",{type:"submit",disabled:f||!se.trim(),className:"btn-secondary",children:[g.jsx(tE,{size:16})," ",f?"Saving...":"Update"]}),g.jsxs("button",{type:"button",onClick:xt,className:"btn-primary",disabled:f,children:["Next ",g.jsx(Dx,{size:16})]})]}):g.jsxs("button",{type:"submit",disabled:f||!se.trim(),className:"btn-primary submit-btn",children:[f?g.jsx(Ox,{size:16,className:"spin"}):yt?g.jsx(Tc,{size:16}):g.jsx(Dx,{size:16}),f?"Submitting...":yt?"Submit Final Answer":"Submit and Next"]})})]})]})]},ne==null?void 0:ne.questionId)]})]})}const Gy="AIVA",Wy="AI Interview & Virtual Assistant",jy="Practice smarter. Interview better.";function Rk({onDone:t}){const[e,n]=L.useState(""),[i,r]=L.useState(""),[s,a]=L.useState(""),[o,l]=L.useState("top"),[c,u]=L.useState(!1);return L.useEffect(()=>{let f=0;const d=setInterval(()=>{f++,n(Gy.slice(0,f)),f>=Gy.length&&(clearInterval(d),l("sub"))},120);return()=>clearInterval(d)},[]),L.useEffect(()=>{if(o!=="sub")return;let f=0;const d=setInterval(()=>{f++,r(Wy.slice(0,f)),f>=Wy.length&&(clearInterval(d),l("tag"))},28);return()=>clearInterval(d)},[o]),L.useEffect(()=>{if(o!=="tag")return;let f=0;const d=setInterval(()=>{f++,a(jy.slice(0,f)),f>=jy.length&&(clearInterval(d),l("hold"))},35);return()=>clearInterval(d)},[o]),L.useEffect(()=>{if(o!=="hold")return;const f=setTimeout(()=>u(!0),700),d=setTimeout(()=>t&&t(),1300);return()=>{clearTimeout(f),clearTimeout(d)}},[o,t]),g.jsx("div",{className:`intro-splash ${c?"intro-leaving":""}`,children:g.jsxs("div",{className:"intro-panel app-shell-panel",children:[g.jsx(Ti,{className:"intro-assistant",label:"Initializing interview assistant"}),g.jsxs("div",{className:"intro-text-block",children:[g.jsxs("h1",{className:"intro-title",children:[e,o==="top"&&g.jsx("span",{className:"intro-cursor"})]}),g.jsxs("p",{className:"intro-subtitle",children:[i,o==="sub"&&g.jsx("span",{className:"intro-cursor"})]}),g.jsxs("p",{className:"intro-tagline",children:[s,o==="tag"&&g.jsx("span",{className:"intro-cursor intro-cursor-muted"})]})]}),g.jsx("div",{className:"intro-progress-container",children:g.jsx("div",{className:`intro-progress-bar ${o==="hold"||c?"intro-progress-done":""}`})})]})})}function Pk(){const[t,e]=L.useState(!0);return g.jsxs(g.Fragment,{children:[t&&g.jsx(Rk,{onDone:()=>e(!1)}),g.jsx(NC,{children:g.jsxs(wC,{children:[g.jsx(mr,{path:"/",element:g.jsx(MC,{to:"/login",replace:!0})}),g.jsx(mr,{path:"/login",element:g.jsx(mk,{})}),g.jsx(mr,{path:"/signup",element:g.jsx(gk,{})}),g.jsx(mr,{path:"/dashboard",element:g.jsx(Tk,{})}),g.jsx(mr,{path:"/profile",element:g.jsx(Ak,{})}),g.jsx(mr,{path:"/interview/:typeId",element:g.jsx(Hy,{})}),g.jsx(mr,{path:"/interview/:typeId/:sessionId",element:g.jsx(Hy,{})})]})})]})}Uf.createRoot(document.getElementById("root")).render(g.jsx(n_.StrictMode,{children:g.jsx(Pk,{})}));
