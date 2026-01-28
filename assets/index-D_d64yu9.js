(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))T(c);new MutationObserver(c=>{for(const A of c)if(A.type==="childList")for(const s of A.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&T(s)}).observe(document,{childList:!0,subtree:!0});function u(c){const A={};return c.integrity&&(A.integrity=c.integrity),c.referrerPolicy&&(A.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?A.credentials="include":c.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function T(c){if(c.ep)return;c.ep=!0;const A=u(c);fetch(c.href,A)}})();function yo(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var Fi={exports:{}},e$={};var Rc;function po(){if(Rc)return e$;Rc=1;var L=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(T,c,A){var s=null;if(A!==void 0&&(s=""+A),c.key!==void 0&&(s=""+c.key),"key"in c){A={};for(var O in c)O!=="key"&&(A[O]=c[O])}else A=c;return c=A.ref,{$$typeof:L,type:T,key:s,ref:c!==void 0?c:null,props:A}}return e$.Fragment=i,e$.jsx=u,e$.jsxs=u,e$}var hc;function Do(){return hc||(hc=1,Fi.exports=po()),Fi.exports}var V=Do(),qi={exports:{}},A_={};var Nc;function xo(){if(Nc)return A_;Nc=1;var L=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),s=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),r=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),y=Symbol.iterator;function q(h){return h===null||typeof h!="object"?null:(h=y&&h[y]||h["@@iterator"],typeof h=="function"?h:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,Z={};function k(h,I,o){this.props=h,this.context=I,this.refs=Z,this.updater=o||K}k.prototype.isReactComponent={},k.prototype.setState=function(h,I){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,I,"setState")},k.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function l_(){}l_.prototype=k.prototype;function e_(h,I,o){this.props=h,this.context=I,this.refs=Z,this.updater=o||K}var T_=e_.prototype=new l_;T_.constructor=e_,t_(T_,k.prototype),T_.isPureReactComponent=!0;var N_=Array.isArray;function U(){}var Y={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function u_(h,I,o){var f=o.ref;return{$$typeof:L,type:h,key:I,ref:f!==void 0?f:null,props:o}}function v_(h,I){return u_(h.type,I,h.props)}function p_(h){return typeof h=="object"&&h!==null&&h.$$typeof===L}function r_(h){var I={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(o){return I[o]})}var U_=/\/+/g;function S_(h,I){return typeof h=="object"&&h!==null&&h.key!=null?r_(""+h.key):I.toString(36)}function O_(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(U,U):(h.status="pending",h.then(function(I){h.status==="pending"&&(h.status="fulfilled",h.value=I)},function(I){h.status==="pending"&&(h.status="rejected",h.reason=I)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function p(h,I,o,f,S){var x=typeof h;(x==="undefined"||x==="boolean")&&(h=null);var W=!1;if(h===null)W=!0;else switch(x){case"bigint":case"string":case"number":W=!0;break;case"object":switch(h.$$typeof){case L:case i:W=!0;break;case m:return W=h._init,p(W(h._payload),I,o,f,S)}}if(W)return S=S(h),W=f===""?"."+S_(h,0):f,N_(S)?(o="",W!=null&&(o=W.replace(U_,"$&/")+"/"),p(S,I,o,"",function(w){return w})):S!=null&&(p_(S)&&(S=v_(S,o+(S.key==null||h&&h.key===S.key?"":(""+S.key).replace(U_,"$&/")+"/")+W)),I.push(S)),1;W=0;var P=f===""?".":f+":";if(N_(h))for(var z=0;z<h.length;z++)f=h[z],x=P+S_(f,z),W+=p(f,I,o,x,S);else if(z=q(h),typeof z=="function")for(h=z.call(h),z=0;!(f=h.next()).done;)f=f.value,x=P+S_(f,z++),W+=p(f,I,o,x,S);else if(x==="object"){if(typeof h.then=="function")return p(O_(h),I,o,f,S);throw I=String(h),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return W}function X(h,I,o){if(h==null)return h;var f=[],S=0;return p(h,f,"","",function(x){return I.call(o,x,S++)}),f}function J(h){if(h._status===-1){var I=h._result;I=I(),I.then(function(o){(h._status===0||h._status===-1)&&(h._status=1,h._result=o)},function(o){(h._status===0||h._status===-1)&&(h._status=2,h._result=o)}),h._status===-1&&(h._status=0,h._result=I)}if(h._status===1)return h._result.default;throw h._result}var o_=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},s_={map:X,forEach:function(h,I,o){X(h,function(){I.apply(this,arguments)},o)},count:function(h){var I=0;return X(h,function(){I++}),I},toArray:function(h){return X(h,function(I){return I})||[]},only:function(h){if(!p_(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return A_.Activity=C,A_.Children=s_,A_.Component=k,A_.Fragment=u,A_.Profiler=c,A_.PureComponent=e_,A_.StrictMode=T,A_.Suspense=d,A_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,A_.__COMPILER_RUNTIME={__proto__:null,c:function(h){return Y.H.useMemoCache(h)}},A_.cache=function(h){return function(){return h.apply(null,arguments)}},A_.cacheSignal=function(){return null},A_.cloneElement=function(h,I,o){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var f=t_({},h.props),S=h.key;if(I!=null)for(x in I.key!==void 0&&(S=""+I.key),I)!j.call(I,x)||x==="key"||x==="__self"||x==="__source"||x==="ref"&&I.ref===void 0||(f[x]=I[x]);var x=arguments.length-2;if(x===1)f.children=o;else if(1<x){for(var W=Array(x),P=0;P<x;P++)W[P]=arguments[P+2];f.children=W}return u_(h.type,S,f)},A_.createContext=function(h){return h={$$typeof:s,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},A_.createElement=function(h,I,o){var f,S={},x=null;if(I!=null)for(f in I.key!==void 0&&(x=""+I.key),I)j.call(I,f)&&f!=="key"&&f!=="__self"&&f!=="__source"&&(S[f]=I[f]);var W=arguments.length-2;if(W===1)S.children=o;else if(1<W){for(var P=Array(W),z=0;z<W;z++)P[z]=arguments[z+2];S.children=P}if(h&&h.defaultProps)for(f in W=h.defaultProps,W)S[f]===void 0&&(S[f]=W[f]);return u_(h,x,S)},A_.createRef=function(){return{current:null}},A_.forwardRef=function(h){return{$$typeof:O,render:h}},A_.isValidElement=p_,A_.lazy=function(h){return{$$typeof:m,_payload:{_status:-1,_result:h},_init:J}},A_.memo=function(h,I){return{$$typeof:r,type:h,compare:I===void 0?null:I}},A_.startTransition=function(h){var I=Y.T,o={};Y.T=o;try{var f=h(),S=Y.S;S!==null&&S(o,f),typeof f=="object"&&f!==null&&typeof f.then=="function"&&f.then(U,o_)}catch(x){o_(x)}finally{I!==null&&o.types!==null&&(I.types=o.types),Y.T=I}},A_.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},A_.use=function(h){return Y.H.use(h)},A_.useActionState=function(h,I,o){return Y.H.useActionState(h,I,o)},A_.useCallback=function(h,I){return Y.H.useCallback(h,I)},A_.useContext=function(h){return Y.H.useContext(h)},A_.useDebugValue=function(){},A_.useDeferredValue=function(h,I){return Y.H.useDeferredValue(h,I)},A_.useEffect=function(h,I){return Y.H.useEffect(h,I)},A_.useEffectEvent=function(h){return Y.H.useEffectEvent(h)},A_.useId=function(){return Y.H.useId()},A_.useImperativeHandle=function(h,I,o){return Y.H.useImperativeHandle(h,I,o)},A_.useInsertionEffect=function(h,I){return Y.H.useInsertionEffect(h,I)},A_.useLayoutEffect=function(h,I){return Y.H.useLayoutEffect(h,I)},A_.useMemo=function(h,I){return Y.H.useMemo(h,I)},A_.useOptimistic=function(h,I){return Y.H.useOptimistic(h,I)},A_.useReducer=function(h,I,o){return Y.H.useReducer(h,I,o)},A_.useRef=function(h){return Y.H.useRef(h)},A_.useState=function(h){return Y.H.useState(h)},A_.useSyncExternalStore=function(h,I,o){return Y.H.useSyncExternalStore(h,I,o)},A_.useTransition=function(){return Y.H.useTransition()},A_.version="19.2.4",A_}var Sc;function fu(){return Sc||(Sc=1,qi.exports=xo()),qi.exports}var H_=fu();const HT=yo(H_);var Qi={exports:{}},a$={},Zi={exports:{}},Ji={};var Cc;function Uo(){return Cc||(Cc=1,(function(L){function i(p,X){var J=p.length;p.push(X);_:for(;0<J;){var o_=J-1>>>1,s_=p[o_];if(0<c(s_,X))p[o_]=X,p[J]=s_,J=o_;else break _}}function u(p){return p.length===0?null:p[0]}function T(p){if(p.length===0)return null;var X=p[0],J=p.pop();if(J!==X){p[0]=J;_:for(var o_=0,s_=p.length,h=s_>>>1;o_<h;){var I=2*(o_+1)-1,o=p[I],f=I+1,S=p[f];if(0>c(o,J))f<s_&&0>c(S,o)?(p[o_]=S,p[f]=J,o_=f):(p[o_]=o,p[I]=J,o_=I);else if(f<s_&&0>c(S,J))p[o_]=S,p[f]=J,o_=f;else break _}}return X}function c(p,X){var J=p.sortIndex-X.sortIndex;return J!==0?J:p.id-X.id}if(L.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;L.unstable_now=function(){return A.now()}}else{var s=Date,O=s.now();L.unstable_now=function(){return s.now()-O}}var d=[],r=[],m=1,C=null,y=3,q=!1,K=!1,t_=!1,Z=!1,k=typeof setTimeout=="function"?setTimeout:null,l_=typeof clearTimeout=="function"?clearTimeout:null,e_=typeof setImmediate<"u"?setImmediate:null;function T_(p){for(var X=u(r);X!==null;){if(X.callback===null)T(r);else if(X.startTime<=p)T(r),X.sortIndex=X.expirationTime,i(d,X);else break;X=u(r)}}function N_(p){if(t_=!1,T_(p),!K)if(u(d)!==null)K=!0,U||(U=!0,r_());else{var X=u(r);X!==null&&O_(N_,X.startTime-p)}}var U=!1,Y=-1,j=5,u_=-1;function v_(){return Z?!0:!(L.unstable_now()-u_<j)}function p_(){if(Z=!1,U){var p=L.unstable_now();u_=p;var X=!0;try{_:{K=!1,t_&&(t_=!1,l_(Y),Y=-1),q=!0;var J=y;try{t:{for(T_(p),C=u(d);C!==null&&!(C.expirationTime>p&&v_());){var o_=C.callback;if(typeof o_=="function"){C.callback=null,y=C.priorityLevel;var s_=o_(C.expirationTime<=p);if(p=L.unstable_now(),typeof s_=="function"){C.callback=s_,T_(p),X=!0;break t}C===u(d)&&T(d),T_(p)}else T(d);C=u(d)}if(C!==null)X=!0;else{var h=u(r);h!==null&&O_(N_,h.startTime-p),X=!1}}break _}finally{C=null,y=J,q=!1}X=void 0}}finally{X?r_():U=!1}}}var r_;if(typeof e_=="function")r_=function(){e_(p_)};else if(typeof MessageChannel<"u"){var U_=new MessageChannel,S_=U_.port2;U_.port1.onmessage=p_,r_=function(){S_.postMessage(null)}}else r_=function(){k(p_,0)};function O_(p,X){Y=k(function(){p(L.unstable_now())},X)}L.unstable_IdlePriority=5,L.unstable_ImmediatePriority=1,L.unstable_LowPriority=4,L.unstable_NormalPriority=3,L.unstable_Profiling=null,L.unstable_UserBlockingPriority=2,L.unstable_cancelCallback=function(p){p.callback=null},L.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<p?Math.floor(1e3/p):5},L.unstable_getCurrentPriorityLevel=function(){return y},L.unstable_next=function(p){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var J=y;y=X;try{return p()}finally{y=J}},L.unstable_requestPaint=function(){Z=!0},L.unstable_runWithPriority=function(p,X){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var J=y;y=p;try{return X()}finally{y=J}},L.unstable_scheduleCallback=function(p,X,J){var o_=L.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?o_+J:o_):J=o_,p){case 1:var s_=-1;break;case 2:s_=250;break;case 5:s_=1073741823;break;case 4:s_=1e4;break;default:s_=5e3}return s_=J+s_,p={id:m++,callback:X,priorityLevel:p,startTime:J,expirationTime:s_,sortIndex:-1},J>o_?(p.sortIndex=J,i(r,p),u(d)===null&&p===u(r)&&(t_?(l_(Y),Y=-1):t_=!0,O_(N_,J-o_))):(p.sortIndex=s_,i(d,p),K||q||(K=!0,U||(U=!0,r_()))),p},L.unstable_shouldYield=v_,L.unstable_wrapCallback=function(p){var X=y;return function(){var J=y;y=X;try{return p.apply(this,arguments)}finally{y=J}}}})(Ji)),Ji}var dc;function bo(){return dc||(dc=1,Zi.exports=Uo()),Zi.exports}var ki={exports:{}},It={};var mc;function Wo(){if(mc)return It;mc=1;var L=fu();function i(d){var r="https://react.dev/errors/"+d;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)r+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var T={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function A(d,r,m){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:C==null?null:""+C,children:d,containerInfo:r,implementation:m}}var s=L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(d,r){if(d==="font")return"";if(typeof r=="string")return r==="use-credentials"?r:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,It.createPortal=function(d,r){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)throw Error(i(299));return A(d,r,null,m)},It.flushSync=function(d){var r=s.T,m=T.p;try{if(s.T=null,T.p=2,d)return d()}finally{s.T=r,T.p=m,T.d.f()}},It.preconnect=function(d,r){typeof d=="string"&&(r?(r=r.crossOrigin,r=typeof r=="string"?r==="use-credentials"?r:"":void 0):r=null,T.d.C(d,r))},It.prefetchDNS=function(d){typeof d=="string"&&T.d.D(d)},It.preinit=function(d,r){if(typeof d=="string"&&r&&typeof r.as=="string"){var m=r.as,C=O(m,r.crossOrigin),y=typeof r.integrity=="string"?r.integrity:void 0,q=typeof r.fetchPriority=="string"?r.fetchPriority:void 0;m==="style"?T.d.S(d,typeof r.precedence=="string"?r.precedence:void 0,{crossOrigin:C,integrity:y,fetchPriority:q}):m==="script"&&T.d.X(d,{crossOrigin:C,integrity:y,fetchPriority:q,nonce:typeof r.nonce=="string"?r.nonce:void 0})}},It.preinitModule=function(d,r){if(typeof d=="string")if(typeof r=="object"&&r!==null){if(r.as==null||r.as==="script"){var m=O(r.as,r.crossOrigin);T.d.M(d,{crossOrigin:m,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0})}}else r==null&&T.d.M(d)},It.preload=function(d,r){if(typeof d=="string"&&typeof r=="object"&&r!==null&&typeof r.as=="string"){var m=r.as,C=O(m,r.crossOrigin);T.d.L(d,m,{crossOrigin:C,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0,type:typeof r.type=="string"?r.type:void 0,fetchPriority:typeof r.fetchPriority=="string"?r.fetchPriority:void 0,referrerPolicy:typeof r.referrerPolicy=="string"?r.referrerPolicy:void 0,imageSrcSet:typeof r.imageSrcSet=="string"?r.imageSrcSet:void 0,imageSizes:typeof r.imageSizes=="string"?r.imageSizes:void 0,media:typeof r.media=="string"?r.media:void 0})}},It.preloadModule=function(d,r){if(typeof d=="string")if(r){var m=O(r.as,r.crossOrigin);T.d.m(d,{as:typeof r.as=="string"&&r.as!=="script"?r.as:void 0,crossOrigin:m,integrity:typeof r.integrity=="string"?r.integrity:void 0})}else T.d.m(d)},It.requestFormReset=function(d){T.d.r(d)},It.unstable_batchedUpdates=function(d,r){return d(r)},It.useFormState=function(d,r,m){return s.H.useFormState(d,r,m)},It.useFormStatus=function(){return s.H.useHostTransitionStatus()},It.version="19.2.4",It}var vc;function Go(){if(vc)return ki.exports;vc=1;function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(i){console.error(i)}}return L(),ki.exports=Wo(),ki.exports}var Oc;function Bo(){if(Oc)return a$;Oc=1;var L=bo(),i=fu(),u=Go();function T(_){var t="https://react.dev/errors/"+_;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+_+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function A(_){var t=_,e=_;if(_.alternate)for(;t.return;)t=t.return;else{_=t;do t=_,(t.flags&4098)!==0&&(e=t.return),_=t.return;while(_)}return t.tag===3?e:null}function s(_){if(_.tag===13){var t=_.memoizedState;if(t===null&&(_=_.alternate,_!==null&&(t=_.memoizedState)),t!==null)return t.dehydrated}return null}function O(_){if(_.tag===31){var t=_.memoizedState;if(t===null&&(_=_.alternate,_!==null&&(t=_.memoizedState)),t!==null)return t.dehydrated}return null}function d(_){if(A(_)!==_)throw Error(T(188))}function r(_){var t=_.alternate;if(!t){if(t=A(_),t===null)throw Error(T(188));return t!==_?null:_}for(var e=_,a=t;;){var l=e.return;if(l===null)break;var $=l.alternate;if($===null){if(a=l.return,a!==null){e=a;continue}break}if(l.child===$.child){for($=l.child;$;){if($===e)return d(l),_;if($===a)return d(l),t;$=$.sibling}throw Error(T(188))}if(e.return!==a.return)e=l,a=$;else{for(var n=!1,E=l.child;E;){if(E===e){n=!0,e=l,a=$;break}if(E===a){n=!0,a=l,e=$;break}E=E.sibling}if(!n){for(E=$.child;E;){if(E===e){n=!0,e=$,a=l;break}if(E===a){n=!0,a=$,e=l;break}E=E.sibling}if(!n)throw Error(T(189))}}if(e.alternate!==a)throw Error(T(190))}if(e.tag!==3)throw Error(T(188));return e.stateNode.current===e?_:t}function m(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _;for(_=_.child;_!==null;){if(t=m(_),t!==null)return t;_=_.sibling}return null}var C=Object.assign,y=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),l_=Symbol.for("react.consumer"),e_=Symbol.for("react.context"),T_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),u_=Symbol.for("react.activity"),v_=Symbol.for("react.memo_cache_sentinel"),p_=Symbol.iterator;function r_(_){return _===null||typeof _!="object"?null:(_=p_&&_[p_]||_["@@iterator"],typeof _=="function"?_:null)}var U_=Symbol.for("react.client.reference");function S_(_){if(_==null)return null;if(typeof _=="function")return _.$$typeof===U_?null:_.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case t_:return"Fragment";case k:return"Profiler";case Z:return"StrictMode";case N_:return"Suspense";case U:return"SuspenseList";case u_:return"Activity"}if(typeof _=="object")switch(_.$$typeof){case K:return"Portal";case e_:return _.displayName||"Context";case l_:return(_._context.displayName||"Context")+".Consumer";case T_:var t=_.render;return _=_.displayName,_||(_=t.displayName||t.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case Y:return t=_.displayName||null,t!==null?t:S_(_.type)||"Memo";case j:t=_._payload,_=_._init;try{return S_(_(t))}catch{}}return null}var O_=Array.isArray,p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},o_=[],s_=-1;function h(_){return{current:_}}function I(_){0>s_||(_.current=o_[s_],o_[s_]=null,s_--)}function o(_,t){s_++,o_[s_]=_.current,_.current=t}var f=h(null),S=h(null),x=h(null),W=h(null);function P(_,t){switch(o(x,t),o(S,_),o(f,null),t.nodeType){case 9:case 11:_=(_=t.documentElement)&&(_=_.namespaceURI)?PA(_):0;break;default:if(_=t.tagName,t=t.namespaceURI)t=PA(t),_=YA(t,_);else switch(_){case"svg":_=1;break;case"math":_=2;break;default:_=0}}I(f),o(f,_)}function z(){I(f),I(S),I(x)}function w(_){_.memoizedState!==null&&o(W,_);var t=f.current,e=YA(t,_.type);t!==e&&(o(S,_),o(f,e))}function a_(_){S.current===_&&(I(f),I(S)),W.current===_&&(I(W),Jl._currentValue=J)}var L_,E_;function n_(_){if(L_===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);L_=t&&t[1]||"",E_=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+L_+_+E_}var Q=!1;function f_(_,t){if(!_||Q)return"";Q=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(D){var M=D}Reflect.construct(_,[],B)}else{try{B.call()}catch(D){M=D}_.call(B.prototype)}}else{try{throw Error()}catch(D){M=D}(B=_())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(D){if(D&&M&&typeof D.stack=="string")return[D.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var $=a.DetermineComponentFrameRoot(),n=$[0],E=$[1];if(n&&E){var R=n.split(`
`),H=E.split(`
`);for(l=a=0;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;for(;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;if(a===R.length||l===H.length)for(a=R.length-1,l=H.length-1;1<=a&&0<=l&&R[a]!==H[l];)l--;for(;1<=a&&0<=l;a--,l--)if(R[a]!==H[l]){if(a!==1||l!==1)do if(a--,l--,0>l||R[a]!==H[l]){var b=`
`+R[a].replace(" at new "," at ");return _.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",_.displayName)),b}while(1<=a&&0<=l);break}}}finally{Q=!1,Error.prepareStackTrace=e}return(e=_?_.displayName||_.name:"")?n_(e):""}function D_(_,t){switch(_.tag){case 26:case 27:case 5:return n_(_.type);case 16:return n_("Lazy");case 13:return _.child!==t&&t!==null?n_("Suspense Fallback"):n_("Suspense");case 19:return n_("SuspenseList");case 0:case 15:return f_(_.type,!1);case 11:return f_(_.type.render,!1);case 1:return f_(_.type,!0);case 31:return n_("Activity");default:return""}}function ot(_){try{var t="",e=null;do t+=D_(_,e),e=_,_=_.return;while(_);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Tt=Object.prototype.hasOwnProperty,rt=L.unstable_scheduleCallback,J_=L.unstable_cancelCallback,q_=L.unstable_shouldYield,il=L.unstable_requestPaint,lt=L.unstable_now,ul=L.unstable_getCurrentPriorityLevel,Qe=L.unstable_ImmediatePriority,Nu=L.unstable_UserBlockingPriority,A$=L.unstable_NormalPriority,Ef=L.unstable_LowPriority,Su=L.unstable_IdlePriority,Af=L.log,cf=L.unstable_setDisableYieldValue,Ll=null,gt=null;function Se(_){if(typeof Af=="function"&&cf(_),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Ll,_)}catch{}}var Ht=Math.clz32?Math.clz32:of,ff=Math.log,If=Math.LN2;function of(_){return _>>>=0,_===0?32:31-(ff(_)/If|0)|0}var c$=256,f$=262144,I$=4194304;function Ze(_){var t=_&42;if(t!==0)return t;switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return _&261888;case 262144:case 524288:case 1048576:case 2097152:return _&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return _&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return _}}function o$(_,t,e){var a=_.pendingLanes;if(a===0)return 0;var l=0,$=_.suspendedLanes,n=_.pingedLanes;_=_.warmLanes;var E=a&134217727;return E!==0?(a=E&~$,a!==0?l=Ze(a):(n&=E,n!==0?l=Ze(n):e||(e=E&~_,e!==0&&(l=Ze(e))))):(E=a&~$,E!==0?l=Ze(E):n!==0?l=Ze(n):e||(e=a&~_,e!==0&&(l=Ze(e)))),l===0?0:t!==0&&t!==l&&(t&$)===0&&($=l&-l,e=t&-t,$>=e||$===32&&(e&4194048)!==0)?t:l}function El(_,t){return(_.pendingLanes&~(_.suspendedLanes&~_.pingedLanes)&t)===0}function sf(_,t){switch(_){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cu(){var _=I$;return I$<<=1,(I$&62914560)===0&&(I$=4194304),_}function UT(_){for(var t=[],e=0;31>e;e++)t.push(_);return t}function Al(_,t){_.pendingLanes|=t,t!==268435456&&(_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0)}function rf(_,t,e,a,l,$){var n=_.pendingLanes;_.pendingLanes=e,_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0,_.expiredLanes&=e,_.entangledLanes&=e,_.errorRecoveryDisabledLanes&=e,_.shellSuspendCounter=0;var E=_.entanglements,R=_.expirationTimes,H=_.hiddenUpdates;for(e=n&~e;0<e;){var b=31-Ht(e),B=1<<b;E[b]=0,R[b]=-1;var M=H[b];if(M!==null)for(H[b]=null,b=0;b<M.length;b++){var D=M[b];D!==null&&(D.lane&=-536870913)}e&=~B}a!==0&&du(_,a,0),$!==0&&l===0&&_.tag!==0&&(_.suspendedLanes|=$&~(n&~t))}function du(_,t,e){_.pendingLanes|=t,_.suspendedLanes&=~t;var a=31-Ht(t);_.entangledLanes|=t,_.entanglements[a]=_.entanglements[a]|1073741824|e&261930}function mu(_,t){var e=_.entangledLanes|=t;for(_=_.entanglements;e;){var a=31-Ht(e),l=1<<a;l&t|_[a]&t&&(_[a]|=t),e&=~l}}function vu(_,t){var e=t&-t;return e=(e&42)!==0?1:bT(e),(e&(_.suspendedLanes|t))!==0?0:e}function bT(_){switch(_){case 2:_=1;break;case 8:_=4;break;case 32:_=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:_=128;break;case 268435456:_=134217728;break;default:_=0}return _}function WT(_){return _&=-_,2<_?8<_?(_&134217727)!==0?32:268435456:8:2}function Ou(){var _=X.p;return _!==0?_:(_=window.event,_===void 0?32:Ac(_.type))}function gu(_,t){var e=X.p;try{return X.p=_,t()}finally{X.p=e}}var Ce=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Ce,Rt="__reactProps$"+Ce,Ra="__reactContainer$"+Ce,GT="__reactEvents$"+Ce,Rf="__reactListeners$"+Ce,hf="__reactHandles$"+Ce,Hu="__reactResources$"+Ce,cl="__reactMarker$"+Ce;function BT(_){delete _[Lt],delete _[Rt],delete _[GT],delete _[Rf],delete _[hf]}function ha(_){var t=_[Lt];if(t)return t;for(var e=_.parentNode;e;){if(t=e[Ra]||e[Lt]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(_=QA(_);_!==null;){if(e=_[Lt])return e;_=QA(_)}return t}_=e,e=_.parentNode}return null}function Na(_){if(_=_[Lt]||_[Ra]){var t=_.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return _}return null}function fl(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _.stateNode;throw Error(T(33))}function Sa(_){var t=_[Hu];return t||(t=_[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(_){_[cl]=!0}var Mu=new Set,yu={};function Je(_,t){Ca(_,t),Ca(_+"Capture",t)}function Ca(_,t){for(yu[_]=t,_=0;_<t.length;_++)Mu.add(t[_])}var Nf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pu={},Du={};function Sf(_){return Tt.call(Du,_)?!0:Tt.call(pu,_)?!1:Nf.test(_)?Du[_]=!0:(pu[_]=!0,!1)}function s$(_,t,e){if(Sf(t))if(e===null)_.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":_.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){_.removeAttribute(t);return}}_.setAttribute(t,""+e)}}function r$(_,t,e){if(e===null)_.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(t);return}_.setAttribute(t,""+e)}}function le(_,t,e,a){if(a===null)_.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(e);return}_.setAttributeNS(t,e,""+a)}}function Wt(_){switch(typeof _){case"bigint":case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function xu(_){var t=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cf(_,t,e){var a=Object.getOwnPropertyDescriptor(_.constructor.prototype,t);if(!_.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,$=a.set;return Object.defineProperty(_,t,{configurable:!0,get:function(){return l.call(this)},set:function(n){e=""+n,$.call(this,n)}}),Object.defineProperty(_,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(n){e=""+n},stopTracking:function(){_._valueTracker=null,delete _[t]}}}}function zT(_){if(!_._valueTracker){var t=xu(_)?"checked":"value";_._valueTracker=Cf(_,t,""+_[t])}}function Uu(_){if(!_)return!1;var t=_._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return _&&(a=xu(_)?_.checked?"true":"false":_.value),_=a,_!==e?(t.setValue(_),!0):!1}function R$(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}var df=/[\n"\\]/g;function Gt(_){return _.replace(df,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function VT(_,t,e,a,l,$,n,E){_.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?_.type=n:_.removeAttribute("type"),t!=null?n==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+Wt(t)):_.value!==""+Wt(t)&&(_.value=""+Wt(t)):n!=="submit"&&n!=="reset"||_.removeAttribute("value"),t!=null?PT(_,n,Wt(t)):e!=null?PT(_,n,Wt(e)):a!=null&&_.removeAttribute("value"),l==null&&$!=null&&(_.defaultChecked=!!$),l!=null&&(_.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?_.name=""+Wt(E):_.removeAttribute("name")}function bu(_,t,e,a,l,$,n,E){if($!=null&&typeof $!="function"&&typeof $!="symbol"&&typeof $!="boolean"&&(_.type=$),t!=null||e!=null){if(!($!=="submit"&&$!=="reset"||t!=null)){zT(_);return}e=e!=null?""+Wt(e):"",t=t!=null?""+Wt(t):e,E||t===_.value||(_.value=t),_.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,_.checked=E?_.checked:!!a,_.defaultChecked=!!a,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(_.name=n),zT(_)}function PT(_,t,e){t==="number"&&R$(_.ownerDocument)===_||_.defaultValue===""+e||(_.defaultValue=""+e)}function da(_,t,e,a){if(_=_.options,t){t={};for(var l=0;l<e.length;l++)t["$"+e[l]]=!0;for(e=0;e<_.length;e++)l=t.hasOwnProperty("$"+_[e].value),_[e].selected!==l&&(_[e].selected=l),l&&a&&(_[e].defaultSelected=!0)}else{for(e=""+Wt(e),t=null,l=0;l<_.length;l++){if(_[l].value===e){_[l].selected=!0,a&&(_[l].defaultSelected=!0);return}t!==null||_[l].disabled||(t=_[l])}t!==null&&(t.selected=!0)}}function Wu(_,t,e){if(t!=null&&(t=""+Wt(t),t!==_.value&&(_.value=t),e==null)){_.defaultValue!==t&&(_.defaultValue=t);return}_.defaultValue=e!=null?""+Wt(e):""}function Gu(_,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(T(92));if(O_(a)){if(1<a.length)throw Error(T(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=Wt(t),_.defaultValue=e,a=_.textContent,a===e&&a!==""&&a!==null&&(_.value=a),zT(_)}function ma(_,t){if(t){var e=_.firstChild;if(e&&e===_.lastChild&&e.nodeType===3){e.nodeValue=t;return}}_.textContent=t}var mf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bu(_,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?_.setProperty(t,""):t==="float"?_.cssFloat="":_[t]="":a?_.setProperty(t,e):typeof e!="number"||e===0||mf.has(t)?t==="float"?_.cssFloat=e:_[t]=(""+e).trim():_[t]=e+"px"}function zu(_,t,e){if(t!=null&&typeof t!="object")throw Error(T(62));if(_=_.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?_.setProperty(a,""):a==="float"?_.cssFloat="":_[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&e[l]!==a&&Bu(_,l,a)}else for(var $ in t)t.hasOwnProperty($)&&Bu(_,$,t[$])}function YT(_){if(_.indexOf("-")===-1)return!1;switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Of=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function h$(_){return Of.test(""+_)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":_}function $e(){}var XT=null;function wT(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var va=null,Oa=null;function Vu(_){var t=Na(_);if(t&&(_=t.stateNode)){var e=_[Rt]||null;_:switch(_=t.stateNode,t.type){case"input":if(VT(_,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=_;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==_&&a.form===_.form){var l=a[Rt]||null;if(!l)throw Error(T(90));VT(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===_.form&&Uu(a)}break _;case"textarea":Wu(_,e.value,e.defaultValue);break _;case"select":t=e.value,t!=null&&da(_,!!e.multiple,t,!1)}}}var KT=!1;function Pu(_,t,e){if(KT)return _(t,e);KT=!0;try{var a=_(t);return a}finally{if(KT=!1,(va!==null||Oa!==null)&&(nT(),va&&(t=va,_=Oa,Oa=va=null,Vu(t),_)))for(t=0;t<_.length;t++)Vu(_[t])}}function Il(_,t){var e=_.stateNode;if(e===null)return null;var a=e[Rt]||null;if(a===null)return null;e=a[t];_:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(_=_.type,a=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!a;break _;default:_=!1}if(_)return null;if(e&&typeof e!="function")throw Error(T(231,t,typeof e));return e}var Te=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jT=!1;if(Te)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){jT=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{jT=!1}var de=null,FT=null,N$=null;function Yu(){if(N$)return N$;var _,t=FT,e=t.length,a,l="value"in de?de.value:de.textContent,$=l.length;for(_=0;_<e&&t[_]===l[_];_++);var n=e-_;for(a=1;a<=n&&t[e-a]===l[$-a];a++);return N$=l.slice(_,1<a?1-a:void 0)}function S$(_){var t=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&t===13&&(_=13)):_=t,_===10&&(_=13),32<=_||_===13?_:0}function C$(){return!0}function Xu(){return!1}function ht(_){function t(e,a,l,$,n){this._reactName=e,this._targetInst=l,this.type=a,this.nativeEvent=$,this.target=n,this.currentTarget=null;for(var E in _)_.hasOwnProperty(E)&&(e=_[E],this[E]=e?e($):$[E]);return this.isDefaultPrevented=($.defaultPrevented!=null?$.defaultPrevented:$.returnValue===!1)?C$:Xu,this.isPropagationStopped=Xu,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=C$)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=C$)},persist:function(){},isPersistent:C$}),t}var ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},d$=ht(ke),sl=C({},ke,{view:0,detail:0}),gf=ht(sl),qT,QT,rl,m$=C({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:JT,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==rl&&(rl&&_.type==="mousemove"?(qT=_.screenX-rl.screenX,QT=_.screenY-rl.screenY):QT=qT=0,rl=_),qT)},movementY:function(_){return"movementY"in _?_.movementY:QT}}),wu=ht(m$),Hf=C({},m$,{dataTransfer:0}),Mf=ht(Hf),yf=C({},sl,{relatedTarget:0}),ZT=ht(yf),pf=C({},ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=ht(pf),xf=C({},ke,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),Uf=ht(xf),bf=C({},ke,{data:0}),Ku=ht(bf),Wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(_){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(_):(_=Bf[_])?!!t[_]:!1}function JT(){return zf}var Vf=C({},sl,{key:function(_){if(_.key){var t=Wf[_.key]||_.key;if(t!=="Unidentified")return t}return _.type==="keypress"?(_=S$(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?Gf[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:JT,charCode:function(_){return _.type==="keypress"?S$(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?S$(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),Pf=ht(Vf),Yf=C({},m$,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=ht(Yf),Xf=C({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:JT}),wf=ht(Xf),Kf=C({},ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=ht(Kf),Ff=C({},m$,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=ht(Ff),Qf=C({},ke,{newState:0,oldState:0}),Zf=ht(Qf),Jf=[9,13,27,32],kT=Te&&"CompositionEvent"in window,Rl=null;Te&&"documentMode"in document&&(Rl=document.documentMode);var kf=Te&&"TextEvent"in window&&!Rl,Fu=Te&&(!kT||Rl&&8<Rl&&11>=Rl),qu=" ",Qu=!1;function Zu(_,t){switch(_){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ju(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var ga=!1;function _I(_,t){switch(_){case"compositionend":return Ju(t);case"keypress":return t.which!==32?null:(Qu=!0,qu);case"textInput":return _=t.data,_===qu&&Qu?null:_;default:return null}}function tI(_,t){if(ga)return _==="compositionend"||!kT&&Zu(_,t)?(_=Yu(),N$=FT=de=null,ga=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var eI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t==="input"?!!eI[_.type]:t==="textarea"}function _L(_,t,e,a){va?Oa?Oa.push(a):Oa=[a]:va=a,t=fT(t,"onChange"),0<t.length&&(e=new d$("onChange","change",null,e,a),_.push({event:e,listeners:t}))}var hl=null,Nl=null;function aI(_){bA(_,0)}function v$(_){var t=fl(_);if(Uu(t))return _}function tL(_,t){if(_==="change")return t}var eL=!1;if(Te){var _n;if(Te){var tn="oninput"in document;if(!tn){var aL=document.createElement("div");aL.setAttribute("oninput","return;"),tn=typeof aL.oninput=="function"}_n=tn}else _n=!1;eL=_n&&(!document.documentMode||9<document.documentMode)}function lL(){hl&&(hl.detachEvent("onpropertychange",$L),Nl=hl=null)}function $L(_){if(_.propertyName==="value"&&v$(Nl)){var t=[];_L(t,Nl,_,wT(_)),Pu(aI,t)}}function lI(_,t,e){_==="focusin"?(lL(),hl=t,Nl=e,hl.attachEvent("onpropertychange",$L)):_==="focusout"&&lL()}function $I(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return v$(Nl)}function TI(_,t){if(_==="click")return v$(t)}function nI(_,t){if(_==="input"||_==="change")return v$(t)}function iI(_,t){return _===t&&(_!==0||1/_===1/t)||_!==_&&t!==t}var Mt=typeof Object.is=="function"?Object.is:iI;function Sl(_,t){if(Mt(_,t))return!0;if(typeof _!="object"||_===null||typeof t!="object"||t===null)return!1;var e=Object.keys(_),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var l=e[a];if(!Tt.call(t,l)||!Mt(_[l],t[l]))return!1}return!0}function TL(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function nL(_,t){var e=TL(_);_=0;for(var a;e;){if(e.nodeType===3){if(a=_+e.textContent.length,_<=t&&a>=t)return{node:e,offset:t-_};_=a}_:{for(;e;){if(e.nextSibling){e=e.nextSibling;break _}e=e.parentNode}e=void 0}e=TL(e)}}function iL(_,t){return _&&t?_===t?!0:_&&_.nodeType===3?!1:t&&t.nodeType===3?iL(_,t.parentNode):"contains"in _?_.contains(t):_.compareDocumentPosition?!!(_.compareDocumentPosition(t)&16):!1:!1}function uL(_){_=_!=null&&_.ownerDocument!=null&&_.ownerDocument.defaultView!=null?_.ownerDocument.defaultView:window;for(var t=R$(_.document);t instanceof _.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)_=t.contentWindow;else break;t=R$(_.document)}return t}function en(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t&&(t==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||t==="textarea"||_.contentEditable==="true")}var uI=Te&&"documentMode"in document&&11>=document.documentMode,Ha=null,an=null,Cl=null,ln=!1;function LL(_,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ln||Ha==null||Ha!==R$(a)||(a=Ha,"selectionStart"in a&&en(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Cl&&Sl(Cl,a)||(Cl=a,a=fT(an,"onSelect"),0<a.length&&(t=new d$("onSelect","select",null,t,e),_.push({event:t,listeners:a}),t.target=Ha)))}function _a(_,t){var e={};return e[_.toLowerCase()]=t.toLowerCase(),e["Webkit"+_]="webkit"+t,e["Moz"+_]="moz"+t,e}var Ma={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},$n={},EL={};Te&&(EL=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function ta(_){if($n[_])return $n[_];if(!Ma[_])return _;var t=Ma[_],e;for(e in t)if(t.hasOwnProperty(e)&&e in EL)return $n[_]=t[e];return _}var AL=ta("animationend"),cL=ta("animationiteration"),fL=ta("animationstart"),LI=ta("transitionrun"),EI=ta("transitionstart"),AI=ta("transitioncancel"),IL=ta("transitionend"),oL=new Map,Tn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tn.push("scrollEnd");function Ft(_,t){oL.set(_,t),Je(t,[_])}var O$=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},Bt=[],ya=0,nn=0;function g$(){for(var _=ya,t=nn=ya=0;t<_;){var e=Bt[t];Bt[t++]=null;var a=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var $=Bt[t];if(Bt[t++]=null,a!==null&&l!==null){var n=a.pending;n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l}$!==0&&sL(e,l,$)}}function H$(_,t,e,a){Bt[ya++]=_,Bt[ya++]=t,Bt[ya++]=e,Bt[ya++]=a,nn|=a,_.lanes|=a,_=_.alternate,_!==null&&(_.lanes|=a)}function un(_,t,e,a){return H$(_,t,e,a),M$(_)}function ea(_,t){return H$(_,null,null,t),M$(_)}function sL(_,t,e){_.lanes|=e;var a=_.alternate;a!==null&&(a.lanes|=e);for(var l=!1,$=_.return;$!==null;)$.childLanes|=e,a=$.alternate,a!==null&&(a.childLanes|=e),$.tag===22&&(_=$.stateNode,_===null||_._visibility&1||(l=!0)),_=$,$=$.return;return _.tag===3?($=_.stateNode,l&&t!==null&&(l=31-Ht(e),_=$.hiddenUpdates,a=_[l],a===null?_[l]=[t]:a.push(t),t.lane=e|536870912),$):null}function M$(_){if(50<wl)throw wl=0,ri=null,Error(T(185));for(var t=_.return;t!==null;)_=t,t=_.return;return _.tag===3?_.stateNode:null}var pa={};function cI(_,t,e,a){this.tag=_,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(_,t,e,a){return new cI(_,t,e,a)}function Ln(_){return _=_.prototype,!(!_||!_.isReactComponent)}function ne(_,t){var e=_.alternate;return e===null?(e=yt(_.tag,t,_.key,_.mode),e.elementType=_.elementType,e.type=_.type,e.stateNode=_.stateNode,e.alternate=_,_.alternate=e):(e.pendingProps=t,e.type=_.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=_.flags&65011712,e.childLanes=_.childLanes,e.lanes=_.lanes,e.child=_.child,e.memoizedProps=_.memoizedProps,e.memoizedState=_.memoizedState,e.updateQueue=_.updateQueue,t=_.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=_.sibling,e.index=_.index,e.ref=_.ref,e.refCleanup=_.refCleanup,e}function rL(_,t){_.flags&=65011714;var e=_.alternate;return e===null?(_.childLanes=0,_.lanes=t,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=e.childLanes,_.lanes=e.lanes,_.child=e.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=e.memoizedProps,_.memoizedState=e.memoizedState,_.updateQueue=e.updateQueue,_.type=e.type,t=e.dependencies,_.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),_}function y$(_,t,e,a,l,$){var n=0;if(a=_,typeof _=="function")Ln(_)&&(n=1);else if(typeof _=="string")n=ro(_,e,f.current)?26:_==="html"||_==="head"||_==="body"?27:5;else _:switch(_){case u_:return _=yt(31,e,t,l),_.elementType=u_,_.lanes=$,_;case t_:return aa(e.children,l,$,t);case Z:n=8,l|=24;break;case k:return _=yt(12,e,t,l|2),_.elementType=k,_.lanes=$,_;case N_:return _=yt(13,e,t,l),_.elementType=N_,_.lanes=$,_;case U:return _=yt(19,e,t,l),_.elementType=U,_.lanes=$,_;default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case e_:n=10;break _;case l_:n=9;break _;case T_:n=11;break _;case Y:n=14;break _;case j:n=16,a=null;break _}n=29,e=Error(T(130,_===null?"null":typeof _,"")),a=null}return t=yt(n,e,t,l),t.elementType=_,t.type=a,t.lanes=$,t}function aa(_,t,e,a){return _=yt(7,_,a,t),_.lanes=e,_}function En(_,t,e){return _=yt(6,_,null,t),_.lanes=e,_}function RL(_){var t=yt(18,null,null,0);return t.stateNode=_,t}function An(_,t,e){return t=yt(4,_.children!==null?_.children:[],_.key,t),t.lanes=e,t.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},t}var hL=new WeakMap;function zt(_,t){if(typeof _=="object"&&_!==null){var e=hL.get(_);return e!==void 0?e:(t={value:_,source:t,stack:ot(t)},hL.set(_,t),t)}return{value:_,source:t,stack:ot(t)}}var Da=[],xa=0,p$=null,dl=0,Vt=[],Pt=0,me=null,Jt=1,kt="";function ie(_,t){Da[xa++]=dl,Da[xa++]=p$,p$=_,dl=t}function NL(_,t,e){Vt[Pt++]=Jt,Vt[Pt++]=kt,Vt[Pt++]=me,me=_;var a=Jt;_=kt;var l=32-Ht(a)-1;a&=~(1<<l),e+=1;var $=32-Ht(t)+l;if(30<$){var n=l-l%5;$=(a&(1<<n)-1).toString(32),a>>=n,l-=n,Jt=1<<32-Ht(t)+l|e<<l|a,kt=$+_}else Jt=1<<$|e<<l|a,kt=_}function cn(_){_.return!==null&&(ie(_,1),NL(_,1,0))}function fn(_){for(;_===p$;)p$=Da[--xa],Da[xa]=null,dl=Da[--xa],Da[xa]=null;for(;_===me;)me=Vt[--Pt],Vt[Pt]=null,kt=Vt[--Pt],Vt[Pt]=null,Jt=Vt[--Pt],Vt[Pt]=null}function SL(_,t){Vt[Pt++]=Jt,Vt[Pt++]=kt,Vt[Pt++]=me,Jt=t.id,kt=t.overflow,me=_}var Et=null,P_=null,g_=!1,ve=null,Yt=!1,In=Error(T(519));function Oe(_){var t=Error(T(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ml(zt(t,_)),In}function CL(_){var t=_.stateNode,e=_.type,a=_.memoizedProps;switch(t[Lt]=_,t[Rt]=a,e){case"dialog":h_("cancel",t),h_("close",t);break;case"iframe":case"object":case"embed":h_("load",t);break;case"video":case"audio":for(e=0;e<jl.length;e++)h_(jl[e],t);break;case"source":h_("error",t);break;case"img":case"image":case"link":h_("error",t),h_("load",t);break;case"details":h_("toggle",t);break;case"input":h_("invalid",t),bu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":h_("invalid",t);break;case"textarea":h_("invalid",t),Gu(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||zA(t.textContent,e)?(a.popover!=null&&(h_("beforetoggle",t),h_("toggle",t)),a.onScroll!=null&&h_("scroll",t),a.onScrollEnd!=null&&h_("scrollend",t),a.onClick!=null&&(t.onclick=$e),t=!0):t=!1,t||Oe(_,!0)}function dL(_){for(Et=_.return;Et;)switch(Et.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:Et=Et.return}}function Ua(_){if(_!==Et)return!1;if(!g_)return dL(_),g_=!0,!1;var t=_.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=_.type,e=!(e!=="form"&&e!=="button")||Di(_.type,_.memoizedProps)),e=!e),e&&P_&&Oe(_),dL(_),t===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(T(317));P_=qA(_)}else if(t===31){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(T(317));P_=qA(_)}else t===27?(t=P_,Ve(_.type)?(_=Gi,Gi=null,P_=_):P_=t):P_=Et?wt(_.stateNode.nextSibling):null;return!0}function la(){P_=Et=null,g_=!1}function on(){var _=ve;return _!==null&&(dt===null?dt=_:dt.push.apply(dt,_),ve=null),_}function ml(_){ve===null?ve=[_]:ve.push(_)}var sn=h(null),$a=null,ue=null;function ge(_,t,e){o(sn,t._currentValue),t._currentValue=e}function Le(_){_._currentValue=sn.current,I(sn)}function rn(_,t,e){for(;_!==null;){var a=_.alternate;if((_.childLanes&t)!==t?(_.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),_===e)break;_=_.return}}function Rn(_,t,e,a){var l=_.child;for(l!==null&&(l.return=_);l!==null;){var $=l.dependencies;if($!==null){var n=l.child;$=$.firstContext;_:for(;$!==null;){var E=$;$=l;for(var R=0;R<t.length;R++)if(E.context===t[R]){$.lanes|=e,E=$.alternate,E!==null&&(E.lanes|=e),rn($.return,e,_),a||(n=null);break _}$=E.next}}else if(l.tag===18){if(n=l.return,n===null)throw Error(T(341));n.lanes|=e,$=n.alternate,$!==null&&($.lanes|=e),rn(n,e,_),n=null}else n=l.child;if(n!==null)n.return=l;else for(n=l;n!==null;){if(n===_){n=null;break}if(l=n.sibling,l!==null){l.return=n.return,n=l;break}n=n.return}l=n}}function ba(_,t,e,a){_=null;for(var l=t,$=!1;l!==null;){if(!$){if((l.flags&524288)!==0)$=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var n=l.alternate;if(n===null)throw Error(T(387));if(n=n.memoizedProps,n!==null){var E=l.type;Mt(l.pendingProps.value,n.value)||(_!==null?_.push(E):_=[E])}}else if(l===W.current){if(n=l.alternate,n===null)throw Error(T(387));n.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(_!==null?_.push(Jl):_=[Jl])}l=l.return}_!==null&&Rn(t,_,e,a),t.flags|=262144}function D$(_){for(_=_.firstContext;_!==null;){if(!Mt(_.context._currentValue,_.memoizedValue))return!0;_=_.next}return!1}function Ta(_){$a=_,ue=null,_=_.dependencies,_!==null&&(_.firstContext=null)}function At(_){return mL($a,_)}function x$(_,t){return $a===null&&Ta(_),mL(_,t)}function mL(_,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},ue===null){if(_===null)throw Error(T(308));ue=t,_.dependencies={lanes:0,firstContext:t},_.flags|=524288}else ue=ue.next=t;return e}var fI=typeof AbortController<"u"?AbortController:function(){var _=[],t=this.signal={aborted:!1,addEventListener:function(e,a){_.push(a)}};this.abort=function(){t.aborted=!0,_.forEach(function(e){return e()})}},II=L.unstable_scheduleCallback,oI=L.unstable_NormalPriority,k_={$$typeof:e_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hn(){return{controller:new fI,data:new Map,refCount:0}}function vl(_){_.refCount--,_.refCount===0&&II(oI,function(){_.controller.abort()})}var Ol=null,Nn=0,Wa=0,Ga=null;function sI(_,t){if(Ol===null){var e=Ol=[];Nn=0,Wa=di(),Ga={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Nn++,t.then(vL,vL),t}function vL(){if(--Nn===0&&Ol!==null){Ga!==null&&(Ga.status="fulfilled");var _=Ol;Ol=null,Wa=0,Ga=null;for(var t=0;t<_.length;t++)(0,_[t])()}}function rI(_,t){var e=[],a={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return _.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<e.length;l++)(0,e[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),a}var OL=p.S;p.S=function(_,t){LA=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sI(_,t),OL!==null&&OL(_,t)};var na=h(null);function Sn(){var _=na.current;return _!==null?_:V_.pooledCache}function U$(_,t){t===null?o(na,na.current):o(na,t.pool)}function gL(){var _=Sn();return _===null?null:{parent:k_._currentValue,pool:_}}var Ba=Error(T(460)),Cn=Error(T(474)),b$=Error(T(542)),W$={then:function(){}};function HL(_){return _=_.status,_==="fulfilled"||_==="rejected"}function ML(_,t,e){switch(e=_[e],e===void 0?_.push(t):e!==t&&(t.then($e,$e),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,pL(_),_;default:if(typeof t.status=="string")t.then($e,$e);else{if(_=V_,_!==null&&100<_.shellSuspendCounter)throw Error(T(482));_=t,_.status="pending",_.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,pL(_),_}throw ua=t,Ba}}function ia(_){try{var t=_._init;return t(_._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(ua=e,Ba):e}}var ua=null;function yL(){if(ua===null)throw Error(T(459));var _=ua;return ua=null,_}function pL(_){if(_===Ba||_===b$)throw Error(T(483))}var za=null,gl=0;function G$(_){var t=gl;return gl+=1,za===null&&(za=[]),ML(za,_,t)}function Hl(_,t){t=t.props.ref,_.ref=t!==void 0?t:null}function B$(_,t){throw t.$$typeof===y?Error(T(525)):(_=Object.prototype.toString.call(t),Error(T(31,_==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":_)))}function DL(_){function t(v,N){if(_){var g=v.deletions;g===null?(v.deletions=[N],v.flags|=16):g.push(N)}}function e(v,N){if(!_)return null;for(;N!==null;)t(v,N),N=N.sibling;return null}function a(v){for(var N=new Map;v!==null;)v.key!==null?N.set(v.key,v):N.set(v.index,v),v=v.sibling;return N}function l(v,N){return v=ne(v,N),v.index=0,v.sibling=null,v}function $(v,N,g){return v.index=g,_?(g=v.alternate,g!==null?(g=g.index,g<N?(v.flags|=67108866,N):g):(v.flags|=67108866,N)):(v.flags|=1048576,N)}function n(v){return _&&v.alternate===null&&(v.flags|=67108866),v}function E(v,N,g,G){return N===null||N.tag!==6?(N=En(g,v.mode,G),N.return=v,N):(N=l(N,g),N.return=v,N)}function R(v,N,g,G){var $_=g.type;return $_===t_?b(v,N,g.props.children,G,g.key):N!==null&&(N.elementType===$_||typeof $_=="object"&&$_!==null&&$_.$$typeof===j&&ia($_)===N.type)?(N=l(N,g.props),Hl(N,g),N.return=v,N):(N=y$(g.type,g.key,g.props,null,v.mode,G),Hl(N,g),N.return=v,N)}function H(v,N,g,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==g.containerInfo||N.stateNode.implementation!==g.implementation?(N=An(g,v.mode,G),N.return=v,N):(N=l(N,g.children||[]),N.return=v,N)}function b(v,N,g,G,$_){return N===null||N.tag!==7?(N=aa(g,v.mode,G,$_),N.return=v,N):(N=l(N,g),N.return=v,N)}function B(v,N,g){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=En(""+N,v.mode,g),N.return=v,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case q:return g=y$(N.type,N.key,N.props,null,v.mode,g),Hl(g,N),g.return=v,g;case K:return N=An(N,v.mode,g),N.return=v,N;case j:return N=ia(N),B(v,N,g)}if(O_(N)||r_(N))return N=aa(N,v.mode,g,null),N.return=v,N;if(typeof N.then=="function")return B(v,G$(N),g);if(N.$$typeof===e_)return B(v,x$(v,N),g);B$(v,N)}return null}function M(v,N,g,G){var $_=N!==null?N.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return $_!==null?null:E(v,N,""+g,G);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case q:return g.key===$_?R(v,N,g,G):null;case K:return g.key===$_?H(v,N,g,G):null;case j:return g=ia(g),M(v,N,g,G)}if(O_(g)||r_(g))return $_!==null?null:b(v,N,g,G,null);if(typeof g.then=="function")return M(v,N,G$(g),G);if(g.$$typeof===e_)return M(v,N,x$(v,g),G);B$(v,g)}return null}function D(v,N,g,G,$_){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return v=v.get(g)||null,E(N,v,""+G,$_);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case q:return v=v.get(G.key===null?g:G.key)||null,R(N,v,G,$_);case K:return v=v.get(G.key===null?g:G.key)||null,H(N,v,G,$_);case j:return G=ia(G),D(v,N,g,G,$_)}if(O_(G)||r_(G))return v=v.get(g)||null,b(N,v,G,$_,null);if(typeof G.then=="function")return D(v,N,g,G$(G),$_);if(G.$$typeof===e_)return D(v,N,g,x$(N,G),$_);B$(N,G)}return null}function F(v,N,g,G){for(var $_=null,M_=null,__=N,I_=N=0,d_=null;__!==null&&I_<g.length;I_++){__.index>I_?(d_=__,__=null):d_=__.sibling;var y_=M(v,__,g[I_],G);if(y_===null){__===null&&(__=d_);break}_&&__&&y_.alternate===null&&t(v,__),N=$(y_,N,I_),M_===null?$_=y_:M_.sibling=y_,M_=y_,__=d_}if(I_===g.length)return e(v,__),g_&&ie(v,I_),$_;if(__===null){for(;I_<g.length;I_++)__=B(v,g[I_],G),__!==null&&(N=$(__,N,I_),M_===null?$_=__:M_.sibling=__,M_=__);return g_&&ie(v,I_),$_}for(__=a(__);I_<g.length;I_++)d_=D(__,v,I_,g[I_],G),d_!==null&&(_&&d_.alternate!==null&&__.delete(d_.key===null?I_:d_.key),N=$(d_,N,I_),M_===null?$_=d_:M_.sibling=d_,M_=d_);return _&&__.forEach(function(Ke){return t(v,Ke)}),g_&&ie(v,I_),$_}function i_(v,N,g,G){if(g==null)throw Error(T(151));for(var $_=null,M_=null,__=N,I_=N=0,d_=null,y_=g.next();__!==null&&!y_.done;I_++,y_=g.next()){__.index>I_?(d_=__,__=null):d_=__.sibling;var Ke=M(v,__,y_.value,G);if(Ke===null){__===null&&(__=d_);break}_&&__&&Ke.alternate===null&&t(v,__),N=$(Ke,N,I_),M_===null?$_=Ke:M_.sibling=Ke,M_=Ke,__=d_}if(y_.done)return e(v,__),g_&&ie(v,I_),$_;if(__===null){for(;!y_.done;I_++,y_=g.next())y_=B(v,y_.value,G),y_!==null&&(N=$(y_,N,I_),M_===null?$_=y_:M_.sibling=y_,M_=y_);return g_&&ie(v,I_),$_}for(__=a(__);!y_.done;I_++,y_=g.next())y_=D(__,v,I_,y_.value,G),y_!==null&&(_&&y_.alternate!==null&&__.delete(y_.key===null?I_:y_.key),N=$(y_,N,I_),M_===null?$_=y_:M_.sibling=y_,M_=y_);return _&&__.forEach(function(Mo){return t(v,Mo)}),g_&&ie(v,I_),$_}function z_(v,N,g,G){if(typeof g=="object"&&g!==null&&g.type===t_&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case q:_:{for(var $_=g.key;N!==null;){if(N.key===$_){if($_=g.type,$_===t_){if(N.tag===7){e(v,N.sibling),G=l(N,g.props.children),G.return=v,v=G;break _}}else if(N.elementType===$_||typeof $_=="object"&&$_!==null&&$_.$$typeof===j&&ia($_)===N.type){e(v,N.sibling),G=l(N,g.props),Hl(G,g),G.return=v,v=G;break _}e(v,N);break}else t(v,N);N=N.sibling}g.type===t_?(G=aa(g.props.children,v.mode,G,g.key),G.return=v,v=G):(G=y$(g.type,g.key,g.props,null,v.mode,G),Hl(G,g),G.return=v,v=G)}return n(v);case K:_:{for($_=g.key;N!==null;){if(N.key===$_)if(N.tag===4&&N.stateNode.containerInfo===g.containerInfo&&N.stateNode.implementation===g.implementation){e(v,N.sibling),G=l(N,g.children||[]),G.return=v,v=G;break _}else{e(v,N);break}else t(v,N);N=N.sibling}G=An(g,v.mode,G),G.return=v,v=G}return n(v);case j:return g=ia(g),z_(v,N,g,G)}if(O_(g))return F(v,N,g,G);if(r_(g)){if($_=r_(g),typeof $_!="function")throw Error(T(150));return g=$_.call(g),i_(v,N,g,G)}if(typeof g.then=="function")return z_(v,N,G$(g),G);if(g.$$typeof===e_)return z_(v,N,x$(v,g),G);B$(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,N!==null&&N.tag===6?(e(v,N.sibling),G=l(N,g),G.return=v,v=G):(e(v,N),G=En(g,v.mode,G),G.return=v,v=G),n(v)):e(v,N)}return function(v,N,g,G){try{gl=0;var $_=z_(v,N,g,G);return za=null,$_}catch(__){if(__===Ba||__===b$)throw __;var M_=yt(29,__,null,v.mode);return M_.lanes=G,M_.return=v,M_}}}var La=DL(!0),xL=DL(!1),He=!1;function dn(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mn(_,t){_=_.updateQueue,t.updateQueue===_&&(t.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,callbacks:null})}function Me(_){return{lane:_,tag:0,payload:null,callback:null,next:null}}function ye(_,t,e){var a=_.updateQueue;if(a===null)return null;if(a=a.shared,(x_&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=M$(_),sL(_,null,e),t}return H$(_,a,t,e),M$(_)}function Ml(_,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=_.pendingLanes,e|=a,t.lanes=e,mu(_,e)}}function vn(_,t){var e=_.updateQueue,a=_.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var l=null,$=null;if(e=e.firstBaseUpdate,e!==null){do{var n={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};$===null?l=$=n:$=$.next=n,e=e.next}while(e!==null);$===null?l=$=t:$=$.next=t}else l=$=t;e={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:$,shared:a.shared,callbacks:a.callbacks},_.updateQueue=e;return}_=e.lastBaseUpdate,_===null?e.firstBaseUpdate=t:_.next=t,e.lastBaseUpdate=t}var On=!1;function yl(){if(On){var _=Ga;if(_!==null)throw _}}function pl(_,t,e,a){On=!1;var l=_.updateQueue;He=!1;var $=l.firstBaseUpdate,n=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var R=E,H=R.next;R.next=null,n===null?$=H:n.next=H,n=R;var b=_.alternate;b!==null&&(b=b.updateQueue,E=b.lastBaseUpdate,E!==n&&(E===null?b.firstBaseUpdate=H:E.next=H,b.lastBaseUpdate=R))}if($!==null){var B=l.baseState;n=0,b=H=R=null,E=$;do{var M=E.lane&-536870913,D=M!==E.lane;if(D?(C_&M)===M:(a&M)===M){M!==0&&M===Wa&&(On=!0),b!==null&&(b=b.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});_:{var F=_,i_=E;M=t;var z_=e;switch(i_.tag){case 1:if(F=i_.payload,typeof F=="function"){B=F.call(z_,B,M);break _}B=F;break _;case 3:F.flags=F.flags&-65537|128;case 0:if(F=i_.payload,M=typeof F=="function"?F.call(z_,B,M):F,M==null)break _;B=C({},B,M);break _;case 2:He=!0}}M=E.callback,M!==null&&(_.flags|=64,D&&(_.flags|=8192),D=l.callbacks,D===null?l.callbacks=[M]:D.push(M))}else D={lane:M,tag:E.tag,payload:E.payload,callback:E.callback,next:null},b===null?(H=b=D,R=B):b=b.next=D,n|=M;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;D=E,E=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);b===null&&(R=B),l.baseState=R,l.firstBaseUpdate=H,l.lastBaseUpdate=b,$===null&&(l.shared.lanes=0),be|=n,_.lanes=n,_.memoizedState=B}}function UL(_,t){if(typeof _!="function")throw Error(T(191,_));_.call(t)}function bL(_,t){var e=_.callbacks;if(e!==null)for(_.callbacks=null,_=0;_<e.length;_++)UL(e[_],t)}var Va=h(null),z$=h(0);function WL(_,t){_=Re,o(z$,_),o(Va,t),Re=_|t.baseLanes}function gn(){o(z$,Re),o(Va,Va.current)}function Hn(){Re=z$.current,I(Va),I(z$)}var pt=h(null),Xt=null;function pe(_){var t=_.alternate;o(Q_,Q_.current&1),o(pt,_),Xt===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(Xt=_)}function Mn(_){o(Q_,Q_.current),o(pt,_),Xt===null&&(Xt=_)}function GL(_){_.tag===22?(o(Q_,Q_.current),o(pt,_),Xt===null&&(Xt=_)):De()}function De(){o(Q_,Q_.current),o(pt,pt.current)}function Dt(_){I(pt),Xt===_&&(Xt=null),I(Q_)}var Q_=h(0);function V$(_){for(var t=_;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||bi(e)||Wi(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ee=0,c_=null,G_=null,_t=null,P$=!1,Pa=!1,Ea=!1,Y$=0,Dl=0,Ya=null,RI=0;function j_(){throw Error(T(321))}function yn(_,t){if(t===null)return!1;for(var e=0;e<t.length&&e<_.length;e++)if(!Mt(_[e],t[e]))return!1;return!0}function pn(_,t,e,a,l,$){return Ee=$,c_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,p.H=_===null||_.memoizedState===null?NE:jn,Ea=!1,$=e(a,l),Ea=!1,Pa&&($=zL(t,e,a,l)),BL(_),$}function BL(_){p.H=bl;var t=G_!==null&&G_.next!==null;if(Ee=0,_t=G_=c_=null,P$=!1,Dl=0,Ya=null,t)throw Error(T(300));_===null||tt||(_=_.dependencies,_!==null&&D$(_)&&(tt=!0))}function zL(_,t,e,a){c_=_;var l=0;do{if(Pa&&(Ya=null),Dl=0,Pa=!1,25<=l)throw Error(T(301));if(l+=1,_t=G_=null,_.updateQueue!=null){var $=_.updateQueue;$.lastEffect=null,$.events=null,$.stores=null,$.memoCache!=null&&($.memoCache.index=0)}p.H=SE,$=t(e,a)}while(Pa);return $}function hI(){var _=p.H,t=_.useState()[0];return t=typeof t.then=="function"?xl(t):t,_=_.useState()[0],(G_!==null?G_.memoizedState:null)!==_&&(c_.flags|=1024),t}function Dn(){var _=Y$!==0;return Y$=0,_}function xn(_,t,e){t.updateQueue=_.updateQueue,t.flags&=-2053,_.lanes&=~e}function Un(_){if(P$){for(_=_.memoizedState;_!==null;){var t=_.queue;t!==null&&(t.pending=null),_=_.next}P$=!1}Ee=0,_t=G_=c_=null,Pa=!1,Dl=Y$=0,Ya=null}function st(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?c_.memoizedState=_t=_:_t=_t.next=_,_t}function Z_(){if(G_===null){var _=c_.alternate;_=_!==null?_.memoizedState:null}else _=G_.next;var t=_t===null?c_.memoizedState:_t.next;if(t!==null)_t=t,G_=_;else{if(_===null)throw c_.alternate===null?Error(T(467)):Error(T(310));G_=_,_={memoizedState:G_.memoizedState,baseState:G_.baseState,baseQueue:G_.baseQueue,queue:G_.queue,next:null},_t===null?c_.memoizedState=_t=_:_t=_t.next=_}return _t}function X$(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(_){var t=Dl;return Dl+=1,Ya===null&&(Ya=[]),_=ML(Ya,_,t),t=c_,(_t===null?t.memoizedState:_t.next)===null&&(t=t.alternate,p.H=t===null||t.memoizedState===null?NE:jn),_}function w$(_){if(_!==null&&typeof _=="object"){if(typeof _.then=="function")return xl(_);if(_.$$typeof===e_)return At(_)}throw Error(T(438,String(_)))}function bn(_){var t=null,e=c_.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=c_.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=X$(),c_.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(_),a=0;a<_;a++)e[a]=v_;return t.index++,e}function Ae(_,t){return typeof t=="function"?t(_):t}function K$(_){var t=Z_();return Wn(t,G_,_)}function Wn(_,t,e){var a=_.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=e;var l=_.baseQueue,$=a.pending;if($!==null){if(l!==null){var n=l.next;l.next=$.next,$.next=n}t.baseQueue=l=$,a.pending=null}if($=_.baseState,l===null)_.memoizedState=$;else{t=l.next;var E=n=null,R=null,H=t,b=!1;do{var B=H.lane&-536870913;if(B!==H.lane?(C_&B)===B:(Ee&B)===B){var M=H.revertLane;if(M===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),B===Wa&&(b=!0);else if((Ee&M)===M){H=H.next,M===Wa&&(b=!0);continue}else B={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(E=R=B,n=$):R=R.next=B,c_.lanes|=M,be|=M;B=H.action,Ea&&e($,B),$=H.hasEagerState?H.eagerState:e($,B)}else M={lane:B,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(E=R=M,n=$):R=R.next=M,c_.lanes|=B,be|=B;H=H.next}while(H!==null&&H!==t);if(R===null?n=$:R.next=E,!Mt($,_.memoizedState)&&(tt=!0,b&&(e=Ga,e!==null)))throw e;_.memoizedState=$,_.baseState=n,_.baseQueue=R,a.lastRenderedState=$}return l===null&&(a.lanes=0),[_.memoizedState,a.dispatch]}function Gn(_){var t=Z_(),e=t.queue;if(e===null)throw Error(T(311));e.lastRenderedReducer=_;var a=e.dispatch,l=e.pending,$=t.memoizedState;if(l!==null){e.pending=null;var n=l=l.next;do $=_($,n.action),n=n.next;while(n!==l);Mt($,t.memoizedState)||(tt=!0),t.memoizedState=$,t.baseQueue===null&&(t.baseState=$),e.lastRenderedState=$}return[$,a]}function VL(_,t,e){var a=c_,l=Z_(),$=g_;if($){if(e===void 0)throw Error(T(407));e=e()}else e=t();var n=!Mt((G_||l).memoizedState,e);if(n&&(l.memoizedState=e,tt=!0),l=l.queue,Vn(XL.bind(null,a,l,_),[_]),l.getSnapshot!==t||n||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,Xa(9,{destroy:void 0},YL.bind(null,a,l,e,t),null),V_===null)throw Error(T(349));$||(Ee&127)!==0||PL(a,t,e)}return e}function PL(_,t,e){_.flags|=16384,_={getSnapshot:t,value:e},t=c_.updateQueue,t===null?(t=X$(),c_.updateQueue=t,t.stores=[_]):(e=t.stores,e===null?t.stores=[_]:e.push(_))}function YL(_,t,e,a){t.value=e,t.getSnapshot=a,wL(t)&&KL(_)}function XL(_,t,e){return e(function(){wL(t)&&KL(_)})}function wL(_){var t=_.getSnapshot;_=_.value;try{var e=t();return!Mt(_,e)}catch{return!0}}function KL(_){var t=ea(_,2);t!==null&&mt(t,_,2)}function Bn(_){var t=st();if(typeof _=="function"){var e=_;if(_=e(),Ea){Se(!0);try{e()}finally{Se(!1)}}}return t.memoizedState=t.baseState=_,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:_},t}function jL(_,t,e,a){return _.baseState=e,Wn(_,G_,typeof a=="function"?a:Ae)}function NI(_,t,e,a,l){if(q$(_))throw Error(T(485));if(_=t.action,_!==null){var $={payload:l,action:_,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){$.listeners.push(n)}};p.T!==null?e(!0):$.isTransition=!1,a($),e=t.pending,e===null?($.next=t.pending=$,FL(t,$)):($.next=e.next,t.pending=e.next=$)}}function FL(_,t){var e=t.action,a=t.payload,l=_.state;if(t.isTransition){var $=p.T,n={};p.T=n;try{var E=e(l,a),R=p.S;R!==null&&R(n,E),qL(_,t,E)}catch(H){zn(_,t,H)}finally{$!==null&&n.types!==null&&($.types=n.types),p.T=$}}else try{$=e(l,a),qL(_,t,$)}catch(H){zn(_,t,H)}}function qL(_,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){QL(_,t,a)},function(a){return zn(_,t,a)}):QL(_,t,e)}function QL(_,t,e){t.status="fulfilled",t.value=e,ZL(t),_.state=e,t=_.pending,t!==null&&(e=t.next,e===t?_.pending=null:(e=e.next,t.next=e,FL(_,e)))}function zn(_,t,e){var a=_.pending;if(_.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,ZL(t),t=t.next;while(t!==a)}_.action=null}function ZL(_){_=_.listeners;for(var t=0;t<_.length;t++)(0,_[t])()}function JL(_,t){return t}function kL(_,t){if(g_){var e=V_.formState;if(e!==null){_:{var a=c_;if(g_){if(P_){t:{for(var l=P_,$=Yt;l.nodeType!==8;){if(!$){l=null;break t}if(l=wt(l.nextSibling),l===null){l=null;break t}}$=l.data,l=$==="F!"||$==="F"?l:null}if(l){P_=wt(l.nextSibling),a=l.data==="F!";break _}}Oe(a)}a=!1}a&&(t=e[0])}}return e=st(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:JL,lastRenderedState:t},e.queue=a,e=rE.bind(null,c_,a),a.dispatch=e,a=Bn(!1),$=Kn.bind(null,c_,!1,a.queue),a=st(),l={state:t,dispatch:null,action:_,pending:null},a.queue=l,e=NI.bind(null,c_,l,$,e),l.dispatch=e,a.memoizedState=_,[t,e,!1]}function _E(_){var t=Z_();return tE(t,G_,_)}function tE(_,t,e){if(t=Wn(_,t,JL)[0],_=K$(Ae)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=xl(t)}catch(n){throw n===Ba?b$:n}else a=t;t=Z_();var l=t.queue,$=l.dispatch;return e!==t.memoizedState&&(c_.flags|=2048,Xa(9,{destroy:void 0},SI.bind(null,l,e),null)),[a,$,_]}function SI(_,t){_.action=t}function eE(_){var t=Z_(),e=G_;if(e!==null)return tE(t,e,_);Z_(),t=t.memoizedState,e=Z_();var a=e.queue.dispatch;return e.memoizedState=_,[t,a,!1]}function Xa(_,t,e,a){return _={tag:_,create:e,deps:a,inst:t,next:null},t=c_.updateQueue,t===null&&(t=X$(),c_.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=_.next=_:(a=e.next,e.next=_,_.next=a,t.lastEffect=_),_}function aE(){return Z_().memoizedState}function j$(_,t,e,a){var l=st();c_.flags|=_,l.memoizedState=Xa(1|t,{destroy:void 0},e,a===void 0?null:a)}function F$(_,t,e,a){var l=Z_();a=a===void 0?null:a;var $=l.memoizedState.inst;G_!==null&&a!==null&&yn(a,G_.memoizedState.deps)?l.memoizedState=Xa(t,$,e,a):(c_.flags|=_,l.memoizedState=Xa(1|t,$,e,a))}function lE(_,t){j$(8390656,8,_,t)}function Vn(_,t){F$(2048,8,_,t)}function CI(_){c_.flags|=4;var t=c_.updateQueue;if(t===null)t=X$(),c_.updateQueue=t,t.events=[_];else{var e=t.events;e===null?t.events=[_]:e.push(_)}}function $E(_){var t=Z_().memoizedState;return CI({ref:t,nextImpl:_}),function(){if((x_&2)!==0)throw Error(T(440));return t.impl.apply(void 0,arguments)}}function TE(_,t){return F$(4,2,_,t)}function nE(_,t){return F$(4,4,_,t)}function iE(_,t){if(typeof t=="function"){_=_();var e=t(_);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return _=_(),t.current=_,function(){t.current=null}}function uE(_,t,e){e=e!=null?e.concat([_]):null,F$(4,4,iE.bind(null,t,_),e)}function Pn(){}function LE(_,t){var e=Z_();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&yn(t,a[1])?a[0]:(e.memoizedState=[_,t],_)}function EE(_,t){var e=Z_();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&yn(t,a[1]))return a[0];if(a=_(),Ea){Se(!0);try{_()}finally{Se(!1)}}return e.memoizedState=[a,t],a}function Yn(_,t,e){return e===void 0||(Ee&1073741824)!==0&&(C_&261930)===0?_.memoizedState=t:(_.memoizedState=e,_=AA(),c_.lanes|=_,be|=_,e)}function AE(_,t,e,a){return Mt(e,t)?e:Va.current!==null?(_=Yn(_,e,a),Mt(_,t)||(tt=!0),_):(Ee&42)===0||(Ee&1073741824)!==0&&(C_&261930)===0?(tt=!0,_.memoizedState=e):(_=AA(),c_.lanes|=_,be|=_,t)}function cE(_,t,e,a,l){var $=X.p;X.p=$!==0&&8>$?$:8;var n=p.T,E={};p.T=E,Kn(_,!1,t,e);try{var R=l(),H=p.S;if(H!==null&&H(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var b=rI(R,a);Ul(_,t,b,bt(_))}else Ul(_,t,a,bt(_))}catch(B){Ul(_,t,{then:function(){},status:"rejected",reason:B},bt())}finally{X.p=$,n!==null&&E.types!==null&&(n.types=E.types),p.T=n}}function dI(){}function Xn(_,t,e,a){if(_.tag!==5)throw Error(T(476));var l=fE(_).queue;cE(_,l,t,J,e===null?dI:function(){return IE(_),e(a)})}function fE(_){var t=_.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:J},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ae,lastRenderedState:e},next:null},_.memoizedState=t,_=_.alternate,_!==null&&(_.memoizedState=t),t}function IE(_){var t=fE(_);t.next===null&&(t=_.alternate.memoizedState),Ul(_,t.next.queue,{},bt())}function wn(){return At(Jl)}function oE(){return Z_().memoizedState}function sE(){return Z_().memoizedState}function mI(_){for(var t=_.return;t!==null;){switch(t.tag){case 24:case 3:var e=bt();_=Me(e);var a=ye(t,_,e);a!==null&&(mt(a,t,e),Ml(a,t,e)),t={cache:hn()},_.payload=t;return}t=t.return}}function vI(_,t,e){var a=bt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},q$(_)?RE(t,e):(e=un(_,t,e,a),e!==null&&(mt(e,_,a),hE(e,t,a)))}function rE(_,t,e){var a=bt();Ul(_,t,e,a)}function Ul(_,t,e,a){var l={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(q$(_))RE(t,l);else{var $=_.alternate;if(_.lanes===0&&($===null||$.lanes===0)&&($=t.lastRenderedReducer,$!==null))try{var n=t.lastRenderedState,E=$(n,e);if(l.hasEagerState=!0,l.eagerState=E,Mt(E,n))return H$(_,t,l,0),V_===null&&g$(),!1}catch{}if(e=un(_,t,l,a),e!==null)return mt(e,_,a),hE(e,t,a),!0}return!1}function Kn(_,t,e,a){if(a={lane:2,revertLane:di(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},q$(_)){if(t)throw Error(T(479))}else t=un(_,e,a,2),t!==null&&mt(t,_,2)}function q$(_){var t=_.alternate;return _===c_||t!==null&&t===c_}function RE(_,t){Pa=P$=!0;var e=_.pending;e===null?t.next=t:(t.next=e.next,e.next=t),_.pending=t}function hE(_,t,e){if((e&4194048)!==0){var a=t.lanes;a&=_.pendingLanes,e|=a,t.lanes=e,mu(_,e)}}var bl={readContext:At,use:w$,useCallback:j_,useContext:j_,useEffect:j_,useImperativeHandle:j_,useLayoutEffect:j_,useInsertionEffect:j_,useMemo:j_,useReducer:j_,useRef:j_,useState:j_,useDebugValue:j_,useDeferredValue:j_,useTransition:j_,useSyncExternalStore:j_,useId:j_,useHostTransitionStatus:j_,useFormState:j_,useActionState:j_,useOptimistic:j_,useMemoCache:j_,useCacheRefresh:j_};bl.useEffectEvent=j_;var NE={readContext:At,use:w$,useCallback:function(_,t){return st().memoizedState=[_,t===void 0?null:t],_},useContext:At,useEffect:lE,useImperativeHandle:function(_,t,e){e=e!=null?e.concat([_]):null,j$(4194308,4,iE.bind(null,t,_),e)},useLayoutEffect:function(_,t){return j$(4194308,4,_,t)},useInsertionEffect:function(_,t){j$(4,2,_,t)},useMemo:function(_,t){var e=st();t=t===void 0?null:t;var a=_();if(Ea){Se(!0);try{_()}finally{Se(!1)}}return e.memoizedState=[a,t],a},useReducer:function(_,t,e){var a=st();if(e!==void 0){var l=e(t);if(Ea){Se(!0);try{e(t)}finally{Se(!1)}}}else l=t;return a.memoizedState=a.baseState=l,_={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:l},a.queue=_,_=_.dispatch=vI.bind(null,c_,_),[a.memoizedState,_]},useRef:function(_){var t=st();return _={current:_},t.memoizedState=_},useState:function(_){_=Bn(_);var t=_.queue,e=rE.bind(null,c_,t);return t.dispatch=e,[_.memoizedState,e]},useDebugValue:Pn,useDeferredValue:function(_,t){var e=st();return Yn(e,_,t)},useTransition:function(){var _=Bn(!1);return _=cE.bind(null,c_,_.queue,!0,!1),st().memoizedState=_,[!1,_]},useSyncExternalStore:function(_,t,e){var a=c_,l=st();if(g_){if(e===void 0)throw Error(T(407));e=e()}else{if(e=t(),V_===null)throw Error(T(349));(C_&127)!==0||PL(a,t,e)}l.memoizedState=e;var $={value:e,getSnapshot:t};return l.queue=$,lE(XL.bind(null,a,$,_),[_]),a.flags|=2048,Xa(9,{destroy:void 0},YL.bind(null,a,$,e,t),null),e},useId:function(){var _=st(),t=V_.identifierPrefix;if(g_){var e=kt,a=Jt;e=(a&~(1<<32-Ht(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Y$++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=RI++,t="_"+t+"r_"+e.toString(32)+"_";return _.memoizedState=t},useHostTransitionStatus:wn,useFormState:kL,useActionState:kL,useOptimistic:function(_){var t=st();t.memoizedState=t.baseState=_;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Kn.bind(null,c_,!0,e),e.dispatch=t,[_,t]},useMemoCache:bn,useCacheRefresh:function(){return st().memoizedState=mI.bind(null,c_)},useEffectEvent:function(_){var t=st(),e={impl:_};return t.memoizedState=e,function(){if((x_&2)!==0)throw Error(T(440));return e.impl.apply(void 0,arguments)}}},jn={readContext:At,use:w$,useCallback:LE,useContext:At,useEffect:Vn,useImperativeHandle:uE,useInsertionEffect:TE,useLayoutEffect:nE,useMemo:EE,useReducer:K$,useRef:aE,useState:function(){return K$(Ae)},useDebugValue:Pn,useDeferredValue:function(_,t){var e=Z_();return AE(e,G_.memoizedState,_,t)},useTransition:function(){var _=K$(Ae)[0],t=Z_().memoizedState;return[typeof _=="boolean"?_:xl(_),t]},useSyncExternalStore:VL,useId:oE,useHostTransitionStatus:wn,useFormState:_E,useActionState:_E,useOptimistic:function(_,t){var e=Z_();return jL(e,G_,_,t)},useMemoCache:bn,useCacheRefresh:sE};jn.useEffectEvent=$E;var SE={readContext:At,use:w$,useCallback:LE,useContext:At,useEffect:Vn,useImperativeHandle:uE,useInsertionEffect:TE,useLayoutEffect:nE,useMemo:EE,useReducer:Gn,useRef:aE,useState:function(){return Gn(Ae)},useDebugValue:Pn,useDeferredValue:function(_,t){var e=Z_();return G_===null?Yn(e,_,t):AE(e,G_.memoizedState,_,t)},useTransition:function(){var _=Gn(Ae)[0],t=Z_().memoizedState;return[typeof _=="boolean"?_:xl(_),t]},useSyncExternalStore:VL,useId:oE,useHostTransitionStatus:wn,useFormState:eE,useActionState:eE,useOptimistic:function(_,t){var e=Z_();return G_!==null?jL(e,G_,_,t):(e.baseState=_,[_,e.queue.dispatch])},useMemoCache:bn,useCacheRefresh:sE};SE.useEffectEvent=$E;function Fn(_,t,e,a){t=_.memoizedState,e=e(a,t),e=e==null?t:C({},t,e),_.memoizedState=e,_.lanes===0&&(_.updateQueue.baseState=e)}var qn={enqueueSetState:function(_,t,e){_=_._reactInternals;var a=bt(),l=Me(a);l.payload=t,e!=null&&(l.callback=e),t=ye(_,l,a),t!==null&&(mt(t,_,a),Ml(t,_,a))},enqueueReplaceState:function(_,t,e){_=_._reactInternals;var a=bt(),l=Me(a);l.tag=1,l.payload=t,e!=null&&(l.callback=e),t=ye(_,l,a),t!==null&&(mt(t,_,a),Ml(t,_,a))},enqueueForceUpdate:function(_,t){_=_._reactInternals;var e=bt(),a=Me(e);a.tag=2,t!=null&&(a.callback=t),t=ye(_,a,e),t!==null&&(mt(t,_,e),Ml(t,_,e))}};function CE(_,t,e,a,l,$,n){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(a,$,n):t.prototype&&t.prototype.isPureReactComponent?!Sl(e,a)||!Sl(l,$):!0}function dE(_,t,e,a){_=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==_&&qn.enqueueReplaceState(t,t.state,null)}function Aa(_,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(_=_.defaultProps){e===t&&(e=C({},e));for(var l in _)e[l]===void 0&&(e[l]=_[l])}return e}function mE(_){O$(_)}function vE(_){console.error(_)}function OE(_){O$(_)}function Q$(_,t){try{var e=_.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function gE(_,t,e){try{var a=_.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Qn(_,t,e){return e=Me(e),e.tag=3,e.payload={element:null},e.callback=function(){Q$(_,t)},e}function HE(_){return _=Me(_),_.tag=3,_}function ME(_,t,e,a){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var $=a.value;_.payload=function(){return l($)},_.callback=function(){gE(t,e,a)}}var n=e.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(_.callback=function(){gE(t,e,a),typeof l!="function"&&(We===null?We=new Set([this]):We.add(this));var E=a.stack;this.componentDidCatch(a.value,{componentStack:E!==null?E:""})})}function OI(_,t,e,a,l){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&ba(t,e,l,!0),e=pt.current,e!==null){switch(e.tag){case 31:case 13:return Xt===null?iT():e.alternate===null&&F_===0&&(F_=3),e.flags&=-257,e.flags|=65536,e.lanes=l,a===W$?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Ni(_,a,l)),!1;case 22:return e.flags|=65536,a===W$?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Ni(_,a,l)),!1}throw Error(T(435,e.tag))}return Ni(_,a,l),iT(),!1}if(g_)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==In&&(_=Error(T(422),{cause:a}),ml(zt(_,e)))):(a!==In&&(t=Error(T(423),{cause:a}),ml(zt(t,e))),_=_.current.alternate,_.flags|=65536,l&=-l,_.lanes|=l,a=zt(a,e),l=Qn(_.stateNode,a,l),vn(_,l),F_!==4&&(F_=2)),!1;var $=Error(T(520),{cause:a});if($=zt($,e),Xl===null?Xl=[$]:Xl.push($),F_!==4&&(F_=2),t===null)return!0;a=zt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,_=l&-l,e.lanes|=_,_=Qn(e.stateNode,a,_),vn(e,_),!1;case 1:if(t=e.type,$=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(We===null||!We.has($))))return e.flags|=65536,l&=-l,e.lanes|=l,l=HE(l),ME(l,_,e,a),vn(e,l),!1}e=e.return}while(e!==null);return!1}var Zn=Error(T(461)),tt=!1;function ct(_,t,e,a){t.child=_===null?xL(t,null,e,a):La(t,_.child,e,a)}function yE(_,t,e,a,l){e=e.render;var $=t.ref;if("ref"in a){var n={};for(var E in a)E!=="ref"&&(n[E]=a[E])}else n=a;return Ta(t),a=pn(_,t,e,n,$,l),E=Dn(),_!==null&&!tt?(xn(_,t,l),ce(_,t,l)):(g_&&E&&cn(t),t.flags|=1,ct(_,t,a,l),t.child)}function pE(_,t,e,a,l){if(_===null){var $=e.type;return typeof $=="function"&&!Ln($)&&$.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=$,DE(_,t,$,a,l)):(_=y$(e.type,null,a,t,t.mode,l),_.ref=t.ref,_.return=t,t.child=_)}if($=_.child,!$i(_,l)){var n=$.memoizedProps;if(e=e.compare,e=e!==null?e:Sl,e(n,a)&&_.ref===t.ref)return ce(_,t,l)}return t.flags|=1,_=ne($,a),_.ref=t.ref,_.return=t,t.child=_}function DE(_,t,e,a,l){if(_!==null){var $=_.memoizedProps;if(Sl($,a)&&_.ref===t.ref)if(tt=!1,t.pendingProps=a=$,$i(_,l))(_.flags&131072)!==0&&(tt=!0);else return t.lanes=_.lanes,ce(_,t,l)}return Jn(_,t,e,a,l)}function xE(_,t,e,a){var l=a.children,$=_!==null?_.memoizedState:null;if(_===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if($=$!==null?$.baseLanes|e:e,_!==null){for(a=t.child=_.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~$}else a=0,t.child=null;return UE(_,t,$,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},_!==null&&U$(t,$!==null?$.cachePool:null),$!==null?WL(t,$):gn(),GL(t);else return a=t.lanes=536870912,UE(_,t,$!==null?$.baseLanes|e:e,e,a)}else $!==null?(U$(t,$.cachePool),WL(t,$),De(),t.memoizedState=null):(_!==null&&U$(t,null),gn(),De());return ct(_,t,l,e),t.child}function Wl(_,t){return _!==null&&_.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function UE(_,t,e,a,l){var $=Sn();return $=$===null?null:{parent:k_._currentValue,pool:$},t.memoizedState={baseLanes:e,cachePool:$},_!==null&&U$(t,null),gn(),GL(t),_!==null&&ba(_,t,a,!0),t.childLanes=l,null}function Z$(_,t){return t=k$({mode:t.mode,children:t.children},_.mode),t.ref=_.ref,_.child=t,t.return=_,t}function bE(_,t,e){return La(t,_.child,null,e),_=Z$(t,t.pendingProps),_.flags|=2,Dt(t),t.memoizedState=null,_}function gI(_,t,e){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,_===null){if(g_){if(a.mode==="hidden")return _=Z$(t,a),t.lanes=536870912,Wl(null,_);if(Mn(t),(_=P_)?(_=FA(_,Yt),_=_!==null&&_.data==="&"?_:null,_!==null&&(t.memoizedState={dehydrated:_,treeContext:me!==null?{id:Jt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},e=RL(_),e.return=t,t.child=e,Et=t,P_=null)):_=null,_===null)throw Oe(t);return t.lanes=536870912,null}return Z$(t,a)}var $=_.memoizedState;if($!==null){var n=$.dehydrated;if(Mn(t),l)if(t.flags&256)t.flags&=-257,t=bE(_,t,e);else if(t.memoizedState!==null)t.child=_.child,t.flags|=128,t=null;else throw Error(T(558));else if(tt||ba(_,t,e,!1),l=(e&_.childLanes)!==0,tt||l){if(a=V_,a!==null&&(n=vu(a,e),n!==0&&n!==$.retryLane))throw $.retryLane=n,ea(_,n),mt(a,_,n),Zn;iT(),t=bE(_,t,e)}else _=$.treeContext,P_=wt(n.nextSibling),Et=t,g_=!0,ve=null,Yt=!1,_!==null&&SL(t,_),t=Z$(t,a),t.flags|=4096;return t}return _=ne(_.child,{mode:a.mode,children:a.children}),_.ref=t.ref,t.child=_,_.return=t,_}function J$(_,t){var e=t.ref;if(e===null)_!==null&&_.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(T(284));(_===null||_.ref!==e)&&(t.flags|=4194816)}}function Jn(_,t,e,a,l){return Ta(t),e=pn(_,t,e,a,void 0,l),a=Dn(),_!==null&&!tt?(xn(_,t,l),ce(_,t,l)):(g_&&a&&cn(t),t.flags|=1,ct(_,t,e,l),t.child)}function WE(_,t,e,a,l,$){return Ta(t),t.updateQueue=null,e=zL(t,a,e,l),BL(_),a=Dn(),_!==null&&!tt?(xn(_,t,$),ce(_,t,$)):(g_&&a&&cn(t),t.flags|=1,ct(_,t,e,$),t.child)}function GE(_,t,e,a,l){if(Ta(t),t.stateNode===null){var $=pa,n=e.contextType;typeof n=="object"&&n!==null&&($=At(n)),$=new e(a,$),t.memoizedState=$.state!==null&&$.state!==void 0?$.state:null,$.updater=qn,t.stateNode=$,$._reactInternals=t,$=t.stateNode,$.props=a,$.state=t.memoizedState,$.refs={},dn(t),n=e.contextType,$.context=typeof n=="object"&&n!==null?At(n):pa,$.state=t.memoizedState,n=e.getDerivedStateFromProps,typeof n=="function"&&(Fn(t,e,n,a),$.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof $.getSnapshotBeforeUpdate=="function"||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(n=$.state,typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount(),n!==$.state&&qn.enqueueReplaceState($,$.state,null),pl(t,a,$,l),yl(),$.state=t.memoizedState),typeof $.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(_===null){$=t.stateNode;var E=t.memoizedProps,R=Aa(e,E);$.props=R;var H=$.context,b=e.contextType;n=pa,typeof b=="object"&&b!==null&&(n=At(b));var B=e.getDerivedStateFromProps;b=typeof B=="function"||typeof $.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,b||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(E||H!==n)&&dE(t,$,a,n),He=!1;var M=t.memoizedState;$.state=M,pl(t,a,$,l),yl(),H=t.memoizedState,E||M!==H||He?(typeof B=="function"&&(Fn(t,e,B,a),H=t.memoizedState),(R=He||CE(t,e,R,a,M,H,n))?(b||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount()),typeof $.componentDidMount=="function"&&(t.flags|=4194308)):(typeof $.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),$.props=a,$.state=H,$.context=n,a=R):(typeof $.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{$=t.stateNode,mn(_,t),n=t.memoizedProps,b=Aa(e,n),$.props=b,B=t.pendingProps,M=$.context,H=e.contextType,R=pa,typeof H=="object"&&H!==null&&(R=At(H)),E=e.getDerivedStateFromProps,(H=typeof E=="function"||typeof $.getSnapshotBeforeUpdate=="function")||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(n!==B||M!==R)&&dE(t,$,a,R),He=!1,M=t.memoizedState,$.state=M,pl(t,a,$,l),yl();var D=t.memoizedState;n!==B||M!==D||He||_!==null&&_.dependencies!==null&&D$(_.dependencies)?(typeof E=="function"&&(Fn(t,e,E,a),D=t.memoizedState),(b=He||CE(t,e,b,a,M,D,R)||_!==null&&_.dependencies!==null&&D$(_.dependencies))?(H||typeof $.UNSAFE_componentWillUpdate!="function"&&typeof $.componentWillUpdate!="function"||(typeof $.componentWillUpdate=="function"&&$.componentWillUpdate(a,D,R),typeof $.UNSAFE_componentWillUpdate=="function"&&$.UNSAFE_componentWillUpdate(a,D,R)),typeof $.componentDidUpdate=="function"&&(t.flags|=4),typeof $.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof $.componentDidUpdate!="function"||n===_.memoizedProps&&M===_.memoizedState||(t.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||n===_.memoizedProps&&M===_.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),$.props=a,$.state=D,$.context=R,a=b):(typeof $.componentDidUpdate!="function"||n===_.memoizedProps&&M===_.memoizedState||(t.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||n===_.memoizedProps&&M===_.memoizedState||(t.flags|=1024),a=!1)}return $=a,J$(_,t),a=(t.flags&128)!==0,$||a?($=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:$.render(),t.flags|=1,_!==null&&a?(t.child=La(t,_.child,null,l),t.child=La(t,null,e,l)):ct(_,t,e,l),t.memoizedState=$.state,_=t.child):_=ce(_,t,l),_}function BE(_,t,e,a){return la(),t.flags|=256,ct(_,t,e,a),t.child}var kn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _i(_){return{baseLanes:_,cachePool:gL()}}function ti(_,t,e){return _=_!==null?_.childLanes&~e:0,t&&(_|=Ut),_}function zE(_,t,e){var a=t.pendingProps,l=!1,$=(t.flags&128)!==0,n;if((n=$)||(n=_!==null&&_.memoizedState===null?!1:(Q_.current&2)!==0),n&&(l=!0,t.flags&=-129),n=(t.flags&32)!==0,t.flags&=-33,_===null){if(g_){if(l?pe(t):De(),(_=P_)?(_=FA(_,Yt),_=_!==null&&_.data!=="&"?_:null,_!==null&&(t.memoizedState={dehydrated:_,treeContext:me!==null?{id:Jt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},e=RL(_),e.return=t,t.child=e,Et=t,P_=null)):_=null,_===null)throw Oe(t);return Wi(_)?t.lanes=32:t.lanes=536870912,null}var E=a.children;return a=a.fallback,l?(De(),l=t.mode,E=k$({mode:"hidden",children:E},l),a=aa(a,l,e,null),E.return=t,a.return=t,E.sibling=a,t.child=E,a=t.child,a.memoizedState=_i(e),a.childLanes=ti(_,n,e),t.memoizedState=kn,Wl(null,a)):(pe(t),ei(t,E))}var R=_.memoizedState;if(R!==null&&(E=R.dehydrated,E!==null)){if($)t.flags&256?(pe(t),t.flags&=-257,t=ai(_,t,e)):t.memoizedState!==null?(De(),t.child=_.child,t.flags|=128,t=null):(De(),E=a.fallback,l=t.mode,a=k$({mode:"visible",children:a.children},l),E=aa(E,l,e,null),E.flags|=2,a.return=t,E.return=t,a.sibling=E,t.child=a,La(t,_.child,null,e),a=t.child,a.memoizedState=_i(e),a.childLanes=ti(_,n,e),t.memoizedState=kn,t=Wl(null,a));else if(pe(t),Wi(E)){if(n=E.nextSibling&&E.nextSibling.dataset,n)var H=n.dgst;n=H,a=Error(T(419)),a.stack="",a.digest=n,ml({value:a,source:null,stack:null}),t=ai(_,t,e)}else if(tt||ba(_,t,e,!1),n=(e&_.childLanes)!==0,tt||n){if(n=V_,n!==null&&(a=vu(n,e),a!==0&&a!==R.retryLane))throw R.retryLane=a,ea(_,a),mt(n,_,a),Zn;bi(E)||iT(),t=ai(_,t,e)}else bi(E)?(t.flags|=192,t.child=_.child,t=null):(_=R.treeContext,P_=wt(E.nextSibling),Et=t,g_=!0,ve=null,Yt=!1,_!==null&&SL(t,_),t=ei(t,a.children),t.flags|=4096);return t}return l?(De(),E=a.fallback,l=t.mode,R=_.child,H=R.sibling,a=ne(R,{mode:"hidden",children:a.children}),a.subtreeFlags=R.subtreeFlags&65011712,H!==null?E=ne(H,E):(E=aa(E,l,e,null),E.flags|=2),E.return=t,a.return=t,a.sibling=E,t.child=a,Wl(null,a),a=t.child,E=_.child.memoizedState,E===null?E=_i(e):(l=E.cachePool,l!==null?(R=k_._currentValue,l=l.parent!==R?{parent:R,pool:R}:l):l=gL(),E={baseLanes:E.baseLanes|e,cachePool:l}),a.memoizedState=E,a.childLanes=ti(_,n,e),t.memoizedState=kn,Wl(_.child,a)):(pe(t),e=_.child,_=e.sibling,e=ne(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,_!==null&&(n=t.deletions,n===null?(t.deletions=[_],t.flags|=16):n.push(_)),t.child=e,t.memoizedState=null,e)}function ei(_,t){return t=k$({mode:"visible",children:t},_.mode),t.return=_,_.child=t}function k$(_,t){return _=yt(22,_,null,t),_.lanes=0,_}function ai(_,t,e){return La(t,_.child,null,e),_=ei(t,t.pendingProps.children),_.flags|=2,t.memoizedState=null,_}function VE(_,t,e){_.lanes|=t;var a=_.alternate;a!==null&&(a.lanes|=t),rn(_.return,t,e)}function li(_,t,e,a,l,$){var n=_.memoizedState;n===null?_.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:l,treeForkCount:$}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=e,n.tailMode=l,n.treeForkCount=$)}function PE(_,t,e){var a=t.pendingProps,l=a.revealOrder,$=a.tail;a=a.children;var n=Q_.current,E=(n&2)!==0;if(E?(n=n&1|2,t.flags|=128):n&=1,o(Q_,n),ct(_,t,a,e),a=g_?dl:0,!E&&_!==null&&(_.flags&128)!==0)_:for(_=t.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&VE(_,e,t);else if(_.tag===19)VE(_,e,t);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break _;for(;_.sibling===null;){if(_.return===null||_.return===t)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}switch(l){case"forwards":for(e=t.child,l=null;e!==null;)_=e.alternate,_!==null&&V$(_)===null&&(l=e),e=e.sibling;e=l,e===null?(l=t.child,t.child=null):(l=e.sibling,e.sibling=null),li(t,!1,l,e,$,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,l=t.child,t.child=null;l!==null;){if(_=l.alternate,_!==null&&V$(_)===null){t.child=l;break}_=l.sibling,l.sibling=e,e=l,l=_}li(t,!0,e,null,$,a);break;case"together":li(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ce(_,t,e){if(_!==null&&(t.dependencies=_.dependencies),be|=t.lanes,(e&t.childLanes)===0)if(_!==null){if(ba(_,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(_!==null&&t.child!==_.child)throw Error(T(153));if(t.child!==null){for(_=t.child,e=ne(_,_.pendingProps),t.child=e,e.return=t;_.sibling!==null;)_=_.sibling,e=e.sibling=ne(_,_.pendingProps),e.return=t;e.sibling=null}return t.child}function $i(_,t){return(_.lanes&t)!==0?!0:(_=_.dependencies,!!(_!==null&&D$(_)))}function HI(_,t,e){switch(t.tag){case 3:P(t,t.stateNode.containerInfo),ge(t,k_,_.memoizedState.cache),la();break;case 27:case 5:w(t);break;case 4:P(t,t.stateNode.containerInfo);break;case 10:ge(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mn(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(pe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?zE(_,t,e):(pe(t),_=ce(_,t,e),_!==null?_.sibling:null);pe(t);break;case 19:var l=(_.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(ba(_,t,e,!1),a=(e&t.childLanes)!==0),l){if(a)return PE(_,t,e);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),o(Q_,Q_.current),a)break;return null;case 22:return t.lanes=0,xE(_,t,e,t.pendingProps);case 24:ge(t,k_,_.memoizedState.cache)}return ce(_,t,e)}function YE(_,t,e){if(_!==null)if(_.memoizedProps!==t.pendingProps)tt=!0;else{if(!$i(_,e)&&(t.flags&128)===0)return tt=!1,HI(_,t,e);tt=(_.flags&131072)!==0}else tt=!1,g_&&(t.flags&1048576)!==0&&NL(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:_:{var a=t.pendingProps;if(_=ia(t.elementType),t.type=_,typeof _=="function")Ln(_)?(a=Aa(_,a),t.tag=1,t=GE(null,t,_,a,e)):(t.tag=0,t=Jn(null,t,_,a,e));else{if(_!=null){var l=_.$$typeof;if(l===T_){t.tag=11,t=yE(null,t,_,a,e);break _}else if(l===Y){t.tag=14,t=pE(null,t,_,a,e);break _}}throw t=S_(_)||_,Error(T(306,t,""))}}return t;case 0:return Jn(_,t,t.type,t.pendingProps,e);case 1:return a=t.type,l=Aa(a,t.pendingProps),GE(_,t,a,l,e);case 3:_:{if(P(t,t.stateNode.containerInfo),_===null)throw Error(T(387));a=t.pendingProps;var $=t.memoizedState;l=$.element,mn(_,t),pl(t,a,null,e);var n=t.memoizedState;if(a=n.cache,ge(t,k_,a),a!==$.cache&&Rn(t,[k_],e,!0),yl(),a=n.element,$.isDehydrated)if($={element:a,isDehydrated:!1,cache:n.cache},t.updateQueue.baseState=$,t.memoizedState=$,t.flags&256){t=BE(_,t,a,e);break _}else if(a!==l){l=zt(Error(T(424)),t),ml(l),t=BE(_,t,a,e);break _}else for(_=t.stateNode.containerInfo,_.nodeType===9?_=_.body:_=_.nodeName==="HTML"?_.ownerDocument.body:_,P_=wt(_.firstChild),Et=t,g_=!0,ve=null,Yt=!0,e=xL(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(la(),a===l){t=ce(_,t,e);break _}ct(_,t,a,e)}t=t.child}return t;case 26:return J$(_,t),_===null?(e=_c(t.type,null,t.pendingProps,null))?t.memoizedState=e:g_||(e=t.type,_=t.pendingProps,a=IT(x.current).createElement(e),a[Lt]=t,a[Rt]=_,ft(a,e,_),nt(a),t.stateNode=a):t.memoizedState=_c(t.type,_.memoizedProps,t.pendingProps,_.memoizedState),null;case 27:return w(t),_===null&&g_&&(a=t.stateNode=ZA(t.type,t.pendingProps,x.current),Et=t,Yt=!0,l=P_,Ve(t.type)?(Gi=l,P_=wt(a.firstChild)):P_=l),ct(_,t,t.pendingProps.children,e),J$(_,t),_===null&&(t.flags|=4194304),t.child;case 5:return _===null&&g_&&((l=a=P_)&&(a=$o(a,t.type,t.pendingProps,Yt),a!==null?(t.stateNode=a,Et=t,P_=wt(a.firstChild),Yt=!1,l=!0):l=!1),l||Oe(t)),w(t),l=t.type,$=t.pendingProps,n=_!==null?_.memoizedProps:null,a=$.children,Di(l,$)?a=null:n!==null&&Di(l,n)&&(t.flags|=32),t.memoizedState!==null&&(l=pn(_,t,hI,null,null,e),Jl._currentValue=l),J$(_,t),ct(_,t,a,e),t.child;case 6:return _===null&&g_&&((_=e=P_)&&(e=To(e,t.pendingProps,Yt),e!==null?(t.stateNode=e,Et=t,P_=null,_=!0):_=!1),_||Oe(t)),null;case 13:return zE(_,t,e);case 4:return P(t,t.stateNode.containerInfo),a=t.pendingProps,_===null?t.child=La(t,null,a,e):ct(_,t,a,e),t.child;case 11:return yE(_,t,t.type,t.pendingProps,e);case 7:return ct(_,t,t.pendingProps,e),t.child;case 8:return ct(_,t,t.pendingProps.children,e),t.child;case 12:return ct(_,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ge(t,t.type,a.value),ct(_,t,a.children,e),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ta(t),l=At(l),a=a(l),t.flags|=1,ct(_,t,a,e),t.child;case 14:return pE(_,t,t.type,t.pendingProps,e);case 15:return DE(_,t,t.type,t.pendingProps,e);case 19:return PE(_,t,e);case 31:return gI(_,t,e);case 22:return xE(_,t,e,t.pendingProps);case 24:return Ta(t),a=At(k_),_===null?(l=Sn(),l===null&&(l=V_,$=hn(),l.pooledCache=$,$.refCount++,$!==null&&(l.pooledCacheLanes|=e),l=$),t.memoizedState={parent:a,cache:l},dn(t),ge(t,k_,l)):((_.lanes&e)!==0&&(mn(_,t),pl(t,null,null,e),yl()),l=_.memoizedState,$=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ge(t,k_,a)):(a=$.cache,ge(t,k_,a),a!==l.cache&&Rn(t,[k_],e,!0))),ct(_,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(T(156,t.tag))}function fe(_){_.flags|=4}function Ti(_,t,e,a,l){if((t=(_.mode&32)!==0)&&(t=!1),t){if(_.flags|=16777216,(l&335544128)===l)if(_.stateNode.complete)_.flags|=8192;else if(oA())_.flags|=8192;else throw ua=W$,Cn}else _.flags&=-16777217}function XE(_,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)_.flags&=-16777217;else if(_.flags|=16777216,!$c(t))if(oA())_.flags|=8192;else throw ua=W$,Cn}function _T(_,t){t!==null&&(_.flags|=4),_.flags&16384&&(t=_.tag!==22?Cu():536870912,_.lanes|=t,Fa|=t)}function Gl(_,t){if(!g_)switch(_.tailMode){case"hidden":t=_.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?_.tail=null:e.sibling=null;break;case"collapsed":e=_.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||_.tail===null?_.tail=null:_.tail.sibling=null:a.sibling=null}}function Y_(_){var t=_.alternate!==null&&_.alternate.child===_.child,e=0,a=0;if(t)for(var l=_.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=_,l=l.sibling;else for(l=_.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=_,l=l.sibling;return _.subtreeFlags|=a,_.childLanes=e,t}function MI(_,t,e){var a=t.pendingProps;switch(fn(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Y_(t),null;case 1:return Y_(t),null;case 3:return e=t.stateNode,a=null,_!==null&&(a=_.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Le(k_),z(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(_===null||_.child===null)&&(Ua(t)?fe(t):_===null||_.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,on())),Y_(t),null;case 26:var l=t.type,$=t.memoizedState;return _===null?(fe(t),$!==null?(Y_(t),XE(t,$)):(Y_(t),Ti(t,l,null,a,e))):$?$!==_.memoizedState?(fe(t),Y_(t),XE(t,$)):(Y_(t),t.flags&=-16777217):(_=_.memoizedProps,_!==a&&fe(t),Y_(t),Ti(t,l,_,a,e)),null;case 27:if(a_(t),e=x.current,l=t.type,_!==null&&t.stateNode!=null)_.memoizedProps!==a&&fe(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return Y_(t),null}_=f.current,Ua(t)?CL(t):(_=ZA(l,a,e),t.stateNode=_,fe(t))}return Y_(t),null;case 5:if(a_(t),l=t.type,_!==null&&t.stateNode!=null)_.memoizedProps!==a&&fe(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return Y_(t),null}if($=f.current,Ua(t))CL(t);else{var n=IT(x.current);switch($){case 1:$=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:$=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":$=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":$=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":$=n.createElement("div"),$.innerHTML="<script><\/script>",$=$.removeChild($.firstChild);break;case"select":$=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?$.multiple=!0:a.size&&($.size=a.size);break;default:$=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}$[Lt]=t,$[Rt]=a;_:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)$.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break _;for(;n.sibling===null;){if(n.return===null||n.return===t)break _;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=$;_:switch(ft($,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break _;case"img":a=!0;break _;default:a=!1}a&&fe(t)}}return Y_(t),Ti(t,t.type,_===null?null:_.memoizedProps,t.pendingProps,e),null;case 6:if(_&&t.stateNode!=null)_.memoizedProps!==a&&fe(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(_=x.current,Ua(t)){if(_=t.stateNode,e=t.memoizedProps,a=null,l=Et,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}_[Lt]=t,_=!!(_.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||zA(_.nodeValue,e)),_||Oe(t,!0)}else _=IT(_).createTextNode(a),_[Lt]=t,t.stateNode=_}return Y_(t),null;case 31:if(e=t.memoizedState,_===null||_.memoizedState!==null){if(a=Ua(t),e!==null){if(_===null){if(!a)throw Error(T(318));if(_=t.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(T(557));_[Lt]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Y_(t),_=!1}else e=on(),_!==null&&_.memoizedState!==null&&(_.memoizedState.hydrationErrors=e),_=!0;if(!_)return t.flags&256?(Dt(t),t):(Dt(t),null);if((t.flags&128)!==0)throw Error(T(558))}return Y_(t),null;case 13:if(a=t.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(l=Ua(t),a!==null&&a.dehydrated!==null){if(_===null){if(!l)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[Lt]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Y_(t),l=!1}else l=on(),_!==null&&_.memoizedState!==null&&(_.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Dt(t),t):(Dt(t),null)}return Dt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,_=_!==null&&_.memoizedState!==null,e&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),$=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&($=a.memoizedState.cachePool.pool),$!==l&&(a.flags|=2048)),e!==_&&e&&(t.child.flags|=8192),_T(t,t.updateQueue),Y_(t),null);case 4:return z(),_===null&&gi(t.stateNode.containerInfo),Y_(t),null;case 10:return Le(t.type),Y_(t),null;case 19:if(I(Q_),a=t.memoizedState,a===null)return Y_(t),null;if(l=(t.flags&128)!==0,$=a.rendering,$===null)if(l)Gl(a,!1);else{if(F_!==0||_!==null&&(_.flags&128)!==0)for(_=t.child;_!==null;){if($=V$(_),$!==null){for(t.flags|=128,Gl(a,!1),_=$.updateQueue,t.updateQueue=_,_T(t,_),t.subtreeFlags=0,_=e,e=t.child;e!==null;)rL(e,_),e=e.sibling;return o(Q_,Q_.current&1|2),g_&&ie(t,a.treeForkCount),t.child}_=_.sibling}a.tail!==null&&lt()>$T&&(t.flags|=128,l=!0,Gl(a,!1),t.lanes=4194304)}else{if(!l)if(_=V$($),_!==null){if(t.flags|=128,l=!0,_=_.updateQueue,t.updateQueue=_,_T(t,_),Gl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!$.alternate&&!g_)return Y_(t),null}else 2*lt()-a.renderingStartTime>$T&&e!==536870912&&(t.flags|=128,l=!0,Gl(a,!1),t.lanes=4194304);a.isBackwards?($.sibling=t.child,t.child=$):(_=a.last,_!==null?_.sibling=$:t.child=$,a.last=$)}return a.tail!==null?(_=a.tail,a.rendering=_,a.tail=_.sibling,a.renderingStartTime=lt(),_.sibling=null,e=Q_.current,o(Q_,l?e&1|2:e&1),g_&&ie(t,a.treeForkCount),_):(Y_(t),null);case 22:case 23:return Dt(t),Hn(),a=t.memoizedState!==null,_!==null?_.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(Y_(t),t.subtreeFlags&6&&(t.flags|=8192)):Y_(t),e=t.updateQueue,e!==null&&_T(t,e.retryQueue),e=null,_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(e=_.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),_!==null&&I(na),null;case 24:return e=null,_!==null&&(e=_.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Le(k_),Y_(t),null;case 25:return null;case 30:return null}throw Error(T(156,t.tag))}function yI(_,t){switch(fn(t),t.tag){case 1:return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 3:return Le(k_),z(),_=t.flags,(_&65536)!==0&&(_&128)===0?(t.flags=_&-65537|128,t):null;case 26:case 27:case 5:return a_(t),null;case 31:if(t.memoizedState!==null){if(Dt(t),t.alternate===null)throw Error(T(340));la()}return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 13:if(Dt(t),_=t.memoizedState,_!==null&&_.dehydrated!==null){if(t.alternate===null)throw Error(T(340));la()}return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 19:return I(Q_),null;case 4:return z(),null;case 10:return Le(t.type),null;case 22:case 23:return Dt(t),Hn(),_!==null&&I(na),_=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 24:return Le(k_),null;case 25:return null;default:return null}}function wE(_,t){switch(fn(t),t.tag){case 3:Le(k_),z();break;case 26:case 27:case 5:a_(t);break;case 4:z();break;case 31:t.memoizedState!==null&&Dt(t);break;case 13:Dt(t);break;case 19:I(Q_);break;case 10:Le(t.type);break;case 22:case 23:Dt(t),Hn(),_!==null&&I(na);break;case 24:Le(k_)}}function Bl(_,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var l=a.next;e=l;do{if((e.tag&_)===_){a=void 0;var $=e.create,n=e.inst;a=$(),n.destroy=a}e=e.next}while(e!==l)}}catch(E){W_(t,t.return,E)}}function xe(_,t,e){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var $=l.next;a=$;do{if((a.tag&_)===_){var n=a.inst,E=n.destroy;if(E!==void 0){n.destroy=void 0,l=t;var R=e,H=E;try{H()}catch(b){W_(l,R,b)}}}a=a.next}while(a!==$)}}catch(b){W_(t,t.return,b)}}function KE(_){var t=_.updateQueue;if(t!==null){var e=_.stateNode;try{bL(t,e)}catch(a){W_(_,_.return,a)}}}function jE(_,t,e){e.props=Aa(_.type,_.memoizedProps),e.state=_.memoizedState;try{e.componentWillUnmount()}catch(a){W_(_,t,a)}}function zl(_,t){try{var e=_.ref;if(e!==null){switch(_.tag){case 26:case 27:case 5:var a=_.stateNode;break;case 30:a=_.stateNode;break;default:a=_.stateNode}typeof e=="function"?_.refCleanup=e(a):e.current=a}}catch(l){W_(_,t,l)}}function _e(_,t){var e=_.ref,a=_.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(l){W_(_,t,l)}finally{_.refCleanup=null,_=_.alternate,_!=null&&(_.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){W_(_,t,l)}else e.current=null}function FE(_){var t=_.type,e=_.memoizedProps,a=_.stateNode;try{_:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break _;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(l){W_(_,_.return,l)}}function ni(_,t,e){try{var a=_.stateNode;kI(a,_.type,e,t),a[Rt]=t}catch(l){W_(_,_.return,l)}}function qE(_){return _.tag===5||_.tag===3||_.tag===26||_.tag===27&&Ve(_.type)||_.tag===4}function ii(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||qE(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.tag===27&&Ve(_.type)||_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function ui(_,t,e){var a=_.tag;if(a===5||a===6)_=_.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(_,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(_),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=$e));else if(a!==4&&(a===27&&Ve(_.type)&&(e=_.stateNode,t=null),_=_.child,_!==null))for(ui(_,t,e),_=_.sibling;_!==null;)ui(_,t,e),_=_.sibling}function tT(_,t,e){var a=_.tag;if(a===5||a===6)_=_.stateNode,t?e.insertBefore(_,t):e.appendChild(_);else if(a!==4&&(a===27&&Ve(_.type)&&(e=_.stateNode),_=_.child,_!==null))for(tT(_,t,e),_=_.sibling;_!==null;)tT(_,t,e),_=_.sibling}function QE(_){var t=_.stateNode,e=_.memoizedProps;try{for(var a=_.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ft(t,a,e),t[Lt]=_,t[Rt]=e}catch($){W_(_,_.return,$)}}var Ie=!1,et=!1,Li=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,it=null;function pI(_,t){if(_=_.containerInfo,yi=ST,_=uL(_),en(_)){if("selectionStart"in _)var e={start:_.selectionStart,end:_.selectionEnd};else _:{e=(e=_.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var l=a.anchorOffset,$=a.focusNode;a=a.focusOffset;try{e.nodeType,$.nodeType}catch{e=null;break _}var n=0,E=-1,R=-1,H=0,b=0,B=_,M=null;t:for(;;){for(var D;B!==e||l!==0&&B.nodeType!==3||(E=n+l),B!==$||a!==0&&B.nodeType!==3||(R=n+a),B.nodeType===3&&(n+=B.nodeValue.length),(D=B.firstChild)!==null;)M=B,B=D;for(;;){if(B===_)break t;if(M===e&&++H===l&&(E=n),M===$&&++b===a&&(R=n),(D=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=D}e=E===-1||R===-1?null:{start:E,end:R}}else e=null}e=e||{start:0,end:0}}else e=null;for(pi={focusedElem:_,selectionRange:e},ST=!1,it=t;it!==null;)if(t=it,_=t.child,(t.subtreeFlags&1028)!==0&&_!==null)_.return=t,it=_;else for(;it!==null;){switch(t=it,$=t.alternate,_=t.flags,t.tag){case 0:if((_&4)!==0&&(_=t.updateQueue,_=_!==null?_.events:null,_!==null))for(e=0;e<_.length;e++)l=_[e],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((_&1024)!==0&&$!==null){_=void 0,e=t,l=$.memoizedProps,$=$.memoizedState,a=e.stateNode;try{var F=Aa(e.type,l);_=a.getSnapshotBeforeUpdate(F,$),a.__reactInternalSnapshotBeforeUpdate=_}catch(i_){W_(e,e.return,i_)}}break;case 3:if((_&1024)!==0){if(_=t.stateNode.containerInfo,e=_.nodeType,e===9)Ui(_);else if(e===1)switch(_.nodeName){case"HEAD":case"HTML":case"BODY":Ui(_);break;default:_.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((_&1024)!==0)throw Error(T(163))}if(_=t.sibling,_!==null){_.return=t.return,it=_;break}it=t.return}}function JE(_,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:se(_,e),a&4&&Bl(5,e);break;case 1:if(se(_,e),a&4)if(_=e.stateNode,t===null)try{_.componentDidMount()}catch(n){W_(e,e.return,n)}else{var l=Aa(e.type,t.memoizedProps);t=t.memoizedState;try{_.componentDidUpdate(l,t,_.__reactInternalSnapshotBeforeUpdate)}catch(n){W_(e,e.return,n)}}a&64&&KE(e),a&512&&zl(e,e.return);break;case 3:if(se(_,e),a&64&&(_=e.updateQueue,_!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{bL(_,t)}catch(n){W_(e,e.return,n)}}break;case 27:t===null&&a&4&&QE(e);case 26:case 5:se(_,e),t===null&&a&4&&FE(e),a&512&&zl(e,e.return);break;case 12:se(_,e);break;case 31:se(_,e),a&4&&tA(_,e);break;case 13:se(_,e),a&4&&eA(_,e),a&64&&(_=e.memoizedState,_!==null&&(_=_.dehydrated,_!==null&&(e=VI.bind(null,e),no(_,e))));break;case 22:if(a=e.memoizedState!==null||Ie,!a){t=t!==null&&t.memoizedState!==null||et,l=Ie;var $=et;Ie=a,(et=t)&&!$?re(_,e,(e.subtreeFlags&8772)!==0):se(_,e),Ie=l,et=$}break;case 30:break;default:se(_,e)}}function kE(_){var t=_.alternate;t!==null&&(_.alternate=null,kE(t)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(t=_.stateNode,t!==null&&BT(t)),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}var X_=null,Nt=!1;function oe(_,t,e){for(e=e.child;e!==null;)_A(_,t,e),e=e.sibling}function _A(_,t,e){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Ll,e)}catch{}switch(e.tag){case 26:et||_e(e,t),oe(_,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:et||_e(e,t);var a=X_,l=Nt;Ve(e.type)&&(X_=e.stateNode,Nt=!1),oe(_,t,e),ql(e.stateNode),X_=a,Nt=l;break;case 5:et||_e(e,t);case 6:if(a=X_,l=Nt,X_=null,oe(_,t,e),X_=a,Nt=l,X_!==null)if(Nt)try{(X_.nodeType===9?X_.body:X_.nodeName==="HTML"?X_.ownerDocument.body:X_).removeChild(e.stateNode)}catch($){W_(e,t,$)}else try{X_.removeChild(e.stateNode)}catch($){W_(e,t,$)}break;case 18:X_!==null&&(Nt?(_=X_,KA(_.nodeType===9?_.body:_.nodeName==="HTML"?_.ownerDocument.body:_,e.stateNode),el(_)):KA(X_,e.stateNode));break;case 4:a=X_,l=Nt,X_=e.stateNode.containerInfo,Nt=!0,oe(_,t,e),X_=a,Nt=l;break;case 0:case 11:case 14:case 15:xe(2,e,t),et||xe(4,e,t),oe(_,t,e);break;case 1:et||(_e(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&jE(e,t,a)),oe(_,t,e);break;case 21:oe(_,t,e);break;case 22:et=(a=et)||e.memoizedState!==null,oe(_,t,e),et=a;break;default:oe(_,t,e)}}function tA(_,t){if(t.memoizedState===null&&(_=t.alternate,_!==null&&(_=_.memoizedState,_!==null))){_=_.dehydrated;try{el(_)}catch(e){W_(t,t.return,e)}}}function eA(_,t){if(t.memoizedState===null&&(_=t.alternate,_!==null&&(_=_.memoizedState,_!==null&&(_=_.dehydrated,_!==null))))try{el(_)}catch(e){W_(t,t.return,e)}}function DI(_){switch(_.tag){case 31:case 13:case 19:var t=_.stateNode;return t===null&&(t=_.stateNode=new ZE),t;case 22:return _=_.stateNode,t=_._retryCache,t===null&&(t=_._retryCache=new ZE),t;default:throw Error(T(435,_.tag))}}function eT(_,t){var e=DI(_);t.forEach(function(a){if(!e.has(a)){e.add(a);var l=PI.bind(null,_,a);a.then(l,l)}})}function St(_,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a],$=_,n=t,E=n;_:for(;E!==null;){switch(E.tag){case 27:if(Ve(E.type)){X_=E.stateNode,Nt=!1;break _}break;case 5:X_=E.stateNode,Nt=!1;break _;case 3:case 4:X_=E.stateNode.containerInfo,Nt=!0;break _}E=E.return}if(X_===null)throw Error(T(160));_A($,n,l),X_=null,Nt=!1,$=l.alternate,$!==null&&($.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)aA(t,_),t=t.sibling}var qt=null;function aA(_,t){var e=_.alternate,a=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:St(t,_),Ct(_),a&4&&(xe(3,_,_.return),Bl(3,_),xe(5,_,_.return));break;case 1:St(t,_),Ct(_),a&512&&(et||e===null||_e(e,e.return)),a&64&&Ie&&(_=_.updateQueue,_!==null&&(a=_.callbacks,a!==null&&(e=_.shared.hiddenCallbacks,_.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var l=qt;if(St(t,_),Ct(_),a&512&&(et||e===null||_e(e,e.return)),a&4){var $=e!==null?e.memoizedState:null;if(a=_.memoizedState,e===null)if(a===null)if(_.stateNode===null){_:{a=_.type,e=_.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":$=l.getElementsByTagName("title")[0],(!$||$[cl]||$[Lt]||$.namespaceURI==="http://www.w3.org/2000/svg"||$.hasAttribute("itemprop"))&&($=l.createElement(a),l.head.insertBefore($,l.querySelector("head > title"))),ft($,a,e),$[Lt]=_,nt($),a=$;break _;case"link":var n=ac("link","href",l).get(a+(e.href||""));if(n){for(var E=0;E<n.length;E++)if($=n[E],$.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&$.getAttribute("rel")===(e.rel==null?null:e.rel)&&$.getAttribute("title")===(e.title==null?null:e.title)&&$.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){n.splice(E,1);break t}}$=l.createElement(a),ft($,a,e),l.head.appendChild($);break;case"meta":if(n=ac("meta","content",l).get(a+(e.content||""))){for(E=0;E<n.length;E++)if($=n[E],$.getAttribute("content")===(e.content==null?null:""+e.content)&&$.getAttribute("name")===(e.name==null?null:e.name)&&$.getAttribute("property")===(e.property==null?null:e.property)&&$.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&$.getAttribute("charset")===(e.charSet==null?null:e.charSet)){n.splice(E,1);break t}}$=l.createElement(a),ft($,a,e),l.head.appendChild($);break;default:throw Error(T(468,a))}$[Lt]=_,nt($),a=$}_.stateNode=a}else lc(l,_.type,_.stateNode);else _.stateNode=ec(l,a,_.memoizedProps);else $!==a?($===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):$.count--,a===null?lc(l,_.type,_.stateNode):ec(l,a,_.memoizedProps)):a===null&&_.stateNode!==null&&ni(_,_.memoizedProps,e.memoizedProps)}break;case 27:St(t,_),Ct(_),a&512&&(et||e===null||_e(e,e.return)),e!==null&&a&4&&ni(_,_.memoizedProps,e.memoizedProps);break;case 5:if(St(t,_),Ct(_),a&512&&(et||e===null||_e(e,e.return)),_.flags&32){l=_.stateNode;try{ma(l,"")}catch(F){W_(_,_.return,F)}}a&4&&_.stateNode!=null&&(l=_.memoizedProps,ni(_,l,e!==null?e.memoizedProps:l)),a&1024&&(Li=!0);break;case 6:if(St(t,_),Ct(_),a&4){if(_.stateNode===null)throw Error(T(162));a=_.memoizedProps,e=_.stateNode;try{e.nodeValue=a}catch(F){W_(_,_.return,F)}}break;case 3:if(rT=null,l=qt,qt=oT(t.containerInfo),St(t,_),qt=l,Ct(_),a&4&&e!==null&&e.memoizedState.isDehydrated)try{el(t.containerInfo)}catch(F){W_(_,_.return,F)}Li&&(Li=!1,lA(_));break;case 4:a=qt,qt=oT(_.stateNode.containerInfo),St(t,_),Ct(_),qt=a;break;case 12:St(t,_),Ct(_);break;case 31:St(t,_),Ct(_),a&4&&(a=_.updateQueue,a!==null&&(_.updateQueue=null,eT(_,a)));break;case 13:St(t,_),Ct(_),_.child.flags&8192&&_.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(lT=lt()),a&4&&(a=_.updateQueue,a!==null&&(_.updateQueue=null,eT(_,a)));break;case 22:l=_.memoizedState!==null;var R=e!==null&&e.memoizedState!==null,H=Ie,b=et;if(Ie=H||l,et=b||R,St(t,_),et=b,Ie=H,Ct(_),a&8192)_:for(t=_.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(e===null||R||Ie||et||ca(_)),e=null,t=_;;){if(t.tag===5||t.tag===26){if(e===null){R=e=t;try{if($=R.stateNode,l)n=$.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{E=R.stateNode;var B=R.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null;E.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(F){W_(R,R.return,F)}}}else if(t.tag===6){if(e===null){R=t;try{R.stateNode.nodeValue=l?"":R.memoizedProps}catch(F){W_(R,R.return,F)}}}else if(t.tag===18){if(e===null){R=t;try{var D=R.stateNode;l?jA(D,!0):jA(R.stateNode,!1)}catch(F){W_(R,R.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===_)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break _;for(;t.sibling===null;){if(t.return===null||t.return===_)break _;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=_.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,eT(_,e))));break;case 19:St(t,_),Ct(_),a&4&&(a=_.updateQueue,a!==null&&(_.updateQueue=null,eT(_,a)));break;case 30:break;case 21:break;default:St(t,_),Ct(_)}}function Ct(_){var t=_.flags;if(t&2){try{for(var e,a=_.return;a!==null;){if(qE(a)){e=a;break}a=a.return}if(e==null)throw Error(T(160));switch(e.tag){case 27:var l=e.stateNode,$=ii(_);tT(_,$,l);break;case 5:var n=e.stateNode;e.flags&32&&(ma(n,""),e.flags&=-33);var E=ii(_);tT(_,E,n);break;case 3:case 4:var R=e.stateNode.containerInfo,H=ii(_);ui(_,H,R);break;default:throw Error(T(161))}}catch(b){W_(_,_.return,b)}_.flags&=-3}t&4096&&(_.flags&=-4097)}function lA(_){if(_.subtreeFlags&1024)for(_=_.child;_!==null;){var t=_;lA(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),_=_.sibling}}function se(_,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)JE(_,t.alternate,t),t=t.sibling}function ca(_){for(_=_.child;_!==null;){var t=_;switch(t.tag){case 0:case 11:case 14:case 15:xe(4,t,t.return),ca(t);break;case 1:_e(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&jE(t,t.return,e),ca(t);break;case 27:ql(t.stateNode);case 26:case 5:_e(t,t.return),ca(t);break;case 22:t.memoizedState===null&&ca(t);break;case 30:ca(t);break;default:ca(t)}_=_.sibling}}function re(_,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=_,$=t,n=$.flags;switch($.tag){case 0:case 11:case 15:re(l,$,e),Bl(4,$);break;case 1:if(re(l,$,e),a=$,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(H){W_(a,a.return,H)}if(a=$,l=a.updateQueue,l!==null){var E=a.stateNode;try{var R=l.shared.hiddenCallbacks;if(R!==null)for(l.shared.hiddenCallbacks=null,l=0;l<R.length;l++)UL(R[l],E)}catch(H){W_(a,a.return,H)}}e&&n&64&&KE($),zl($,$.return);break;case 27:QE($);case 26:case 5:re(l,$,e),e&&a===null&&n&4&&FE($),zl($,$.return);break;case 12:re(l,$,e);break;case 31:re(l,$,e),e&&n&4&&tA(l,$);break;case 13:re(l,$,e),e&&n&4&&eA(l,$);break;case 22:$.memoizedState===null&&re(l,$,e),zl($,$.return);break;case 30:break;default:re(l,$,e)}t=t.sibling}}function Ei(_,t){var e=null;_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(e=_.memoizedState.cachePool.pool),_=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(_=t.memoizedState.cachePool.pool),_!==e&&(_!=null&&_.refCount++,e!=null&&vl(e))}function Ai(_,t){_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&vl(_))}function Qt(_,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$A(_,t,e,a),t=t.sibling}function $A(_,t,e,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(_,t,e,a),l&2048&&Bl(9,t);break;case 1:Qt(_,t,e,a);break;case 3:Qt(_,t,e,a),l&2048&&(_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&vl(_)));break;case 12:if(l&2048){Qt(_,t,e,a),_=t.stateNode;try{var $=t.memoizedProps,n=$.id,E=$.onPostCommit;typeof E=="function"&&E(n,t.alternate===null?"mount":"update",_.passiveEffectDuration,-0)}catch(R){W_(t,t.return,R)}}else Qt(_,t,e,a);break;case 31:Qt(_,t,e,a);break;case 13:Qt(_,t,e,a);break;case 23:break;case 22:$=t.stateNode,n=t.alternate,t.memoizedState!==null?$._visibility&2?Qt(_,t,e,a):Vl(_,t):$._visibility&2?Qt(_,t,e,a):($._visibility|=2,wa(_,t,e,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Ei(n,t);break;case 24:Qt(_,t,e,a),l&2048&&Ai(t.alternate,t);break;default:Qt(_,t,e,a)}}function wa(_,t,e,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var $=_,n=t,E=e,R=a,H=n.flags;switch(n.tag){case 0:case 11:case 15:wa($,n,E,R,l),Bl(8,n);break;case 23:break;case 22:var b=n.stateNode;n.memoizedState!==null?b._visibility&2?wa($,n,E,R,l):Vl($,n):(b._visibility|=2,wa($,n,E,R,l)),l&&H&2048&&Ei(n.alternate,n);break;case 24:wa($,n,E,R,l),l&&H&2048&&Ai(n.alternate,n);break;default:wa($,n,E,R,l)}t=t.sibling}}function Vl(_,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=_,a=t,l=a.flags;switch(a.tag){case 22:Vl(e,a),l&2048&&Ei(a.alternate,a);break;case 24:Vl(e,a),l&2048&&Ai(a.alternate,a);break;default:Vl(e,a)}t=t.sibling}}var Pl=8192;function Ka(_,t,e){if(_.subtreeFlags&Pl)for(_=_.child;_!==null;)TA(_,t,e),_=_.sibling}function TA(_,t,e){switch(_.tag){case 26:Ka(_,t,e),_.flags&Pl&&_.memoizedState!==null&&Ro(e,qt,_.memoizedState,_.memoizedProps);break;case 5:Ka(_,t,e);break;case 3:case 4:var a=qt;qt=oT(_.stateNode.containerInfo),Ka(_,t,e),qt=a;break;case 22:_.memoizedState===null&&(a=_.alternate,a!==null&&a.memoizedState!==null?(a=Pl,Pl=16777216,Ka(_,t,e),Pl=a):Ka(_,t,e));break;default:Ka(_,t,e)}}function nA(_){var t=_.alternate;if(t!==null&&(_=t.child,_!==null)){t.child=null;do t=_.sibling,_.sibling=null,_=t;while(_!==null)}}function Yl(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];it=a,uA(a,_)}nA(_)}if(_.subtreeFlags&10256)for(_=_.child;_!==null;)iA(_),_=_.sibling}function iA(_){switch(_.tag){case 0:case 11:case 15:Yl(_),_.flags&2048&&xe(9,_,_.return);break;case 3:Yl(_);break;case 12:Yl(_);break;case 22:var t=_.stateNode;_.memoizedState!==null&&t._visibility&2&&(_.return===null||_.return.tag!==13)?(t._visibility&=-3,aT(_)):Yl(_);break;default:Yl(_)}}function aT(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];it=a,uA(a,_)}nA(_)}for(_=_.child;_!==null;){switch(t=_,t.tag){case 0:case 11:case 15:xe(8,t,t.return),aT(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,aT(t));break;default:aT(t)}_=_.sibling}}function uA(_,t){for(;it!==null;){var e=it;switch(e.tag){case 0:case 11:case 15:xe(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:vl(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,it=a;else _:for(e=_;it!==null;){a=it;var l=a.sibling,$=a.return;if(kE(a),a===e){it=null;break _}if(l!==null){l.return=$,it=l;break _}it=$}}}var xI={getCacheForType:function(_){var t=At(k_),e=t.data.get(_);return e===void 0&&(e=_(),t.data.set(_,e)),e},cacheSignal:function(){return At(k_).controller.signal}},UI=typeof WeakMap=="function"?WeakMap:Map,x_=0,V_=null,R_=null,C_=0,b_=0,xt=null,Ue=!1,ja=!1,ci=!1,Re=0,F_=0,be=0,fa=0,fi=0,Ut=0,Fa=0,Xl=null,dt=null,Ii=!1,lT=0,LA=0,$T=1/0,TT=null,We=null,$t=0,Ge=null,qa=null,he=0,oi=0,si=null,EA=null,wl=0,ri=null;function bt(){return(x_&2)!==0&&C_!==0?C_&-C_:p.T!==null?di():Ou()}function AA(){if(Ut===0)if((C_&536870912)===0||g_){var _=f$;f$<<=1,(f$&3932160)===0&&(f$=262144),Ut=_}else Ut=536870912;return _=pt.current,_!==null&&(_.flags|=32),Ut}function mt(_,t,e){(_===V_&&(b_===2||b_===9)||_.cancelPendingCommit!==null)&&(Qa(_,0),Be(_,C_,Ut,!1)),Al(_,e),((x_&2)===0||_!==V_)&&(_===V_&&((x_&2)===0&&(fa|=e),F_===4&&Be(_,C_,Ut,!1)),te(_))}function cA(_,t,e){if((x_&6)!==0)throw Error(T(327));var a=!e&&(t&127)===0&&(t&_.expiredLanes)===0||El(_,t),l=a?GI(_,t):hi(_,t,!0),$=a;do{if(l===0){ja&&!a&&Be(_,t,0,!1);break}else{if(e=_.current.alternate,$&&!bI(e)){l=hi(_,t,!1),$=!1;continue}if(l===2){if($=t,_.errorRecoveryDisabledLanes&$)var n=0;else n=_.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){t=n;_:{var E=_;l=Xl;var R=E.current.memoizedState.isDehydrated;if(R&&(Qa(E,n).flags|=256),n=hi(E,n,!1),n!==2){if(ci&&!R){E.errorRecoveryDisabledLanes|=$,fa|=$,l=4;break _}$=dt,dt=l,$!==null&&(dt===null?dt=$:dt.push.apply(dt,$))}l=n}if($=!1,l!==2)continue}}if(l===1){Qa(_,0),Be(_,t,0,!0);break}_:{switch(a=_,$=l,$){case 0:case 1:throw Error(T(345));case 4:if((t&4194048)!==t)break;case 6:Be(a,t,Ut,!Ue);break _;case 2:dt=null;break;case 3:case 5:break;default:throw Error(T(329))}if((t&62914560)===t&&(l=lT+300-lt(),10<l)){if(Be(a,t,Ut,!Ue),o$(a,0,!0)!==0)break _;he=t,a.timeoutHandle=XA(fA.bind(null,a,e,dt,TT,Ii,t,Ut,fa,Fa,Ue,$,"Throttled",-0,0),l);break _}fA(a,e,dt,TT,Ii,t,Ut,fa,Fa,Ue,$,null,-0,0)}}break}while(!0);te(_)}function fA(_,t,e,a,l,$,n,E,R,H,b,B,M,D){if(_.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$e},TA(t,$,B);var F=($&62914560)===$?lT-lt():($&4194048)===$?LA-lt():0;if(F=ho(B,F),F!==null){he=$,_.cancelPendingCommit=F(SA.bind(null,_,t,$,e,a,l,n,E,R,b,B,null,M,D)),Be(_,$,n,!H);return}}SA(_,t,$,e,a,l,n,E,R)}function bI(_){for(var t=_;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var l=e[a],$=l.getSnapshot;l=l.value;try{if(!Mt($(),l))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Be(_,t,e,a){t&=~fi,t&=~fa,_.suspendedLanes|=t,_.pingedLanes&=~t,a&&(_.warmLanes|=t),a=_.expirationTimes;for(var l=t;0<l;){var $=31-Ht(l),n=1<<$;a[$]=-1,l&=~n}e!==0&&du(_,e,t)}function nT(){return(x_&6)===0?(Kl(0),!1):!0}function Ri(){if(R_!==null){if(b_===0)var _=R_.return;else _=R_,ue=$a=null,Un(_),za=null,gl=0,_=R_;for(;_!==null;)wE(_.alternate,_),_=_.return;R_=null}}function Qa(_,t){var e=_.timeoutHandle;e!==-1&&(_.timeoutHandle=-1,eo(e)),e=_.cancelPendingCommit,e!==null&&(_.cancelPendingCommit=null,e()),he=0,Ri(),V_=_,R_=e=ne(_.current,null),C_=t,b_=0,xt=null,Ue=!1,ja=El(_,t),ci=!1,Fa=Ut=fi=fa=be=F_=0,dt=Xl=null,Ii=!1,(t&8)!==0&&(t|=t&32);var a=_.entangledLanes;if(a!==0)for(_=_.entanglements,a&=t;0<a;){var l=31-Ht(a),$=1<<l;t|=_[l],a&=~$}return Re=t,g$(),e}function IA(_,t){c_=null,p.H=bl,t===Ba||t===b$?(t=yL(),b_=3):t===Cn?(t=yL(),b_=4):b_=t===Zn?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,R_===null&&(F_=1,Q$(_,zt(t,_.current)))}function oA(){var _=pt.current;return _===null?!0:(C_&4194048)===C_?Xt===null:(C_&62914560)===C_||(C_&536870912)!==0?_===Xt:!1}function sA(){var _=p.H;return p.H=bl,_===null?bl:_}function rA(){var _=p.A;return p.A=xI,_}function iT(){F_=4,Ue||(C_&4194048)!==C_&&pt.current!==null||(ja=!0),(be&134217727)===0&&(fa&134217727)===0||V_===null||Be(V_,C_,Ut,!1)}function hi(_,t,e){var a=x_;x_|=2;var l=sA(),$=rA();(V_!==_||C_!==t)&&(TT=null,Qa(_,t)),t=!1;var n=F_;_:do try{if(b_!==0&&R_!==null){var E=R_,R=xt;switch(b_){case 8:Ri(),n=6;break _;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var H=b_;if(b_=0,xt=null,Za(_,E,R,H),e&&ja){n=0;break _}break;default:H=b_,b_=0,xt=null,Za(_,E,R,H)}}WI(),n=F_;break}catch(b){IA(_,b)}while(!0);return t&&_.shellSuspendCounter++,ue=$a=null,x_=a,p.H=l,p.A=$,R_===null&&(V_=null,C_=0,g$()),n}function WI(){for(;R_!==null;)RA(R_)}function GI(_,t){var e=x_;x_|=2;var a=sA(),l=rA();V_!==_||C_!==t?(TT=null,$T=lt()+500,Qa(_,t)):ja=El(_,t);_:do try{if(b_!==0&&R_!==null){t=R_;var $=xt;t:switch(b_){case 1:b_=0,xt=null,Za(_,t,$,1);break;case 2:case 9:if(HL($)){b_=0,xt=null,hA(t);break}t=function(){b_!==2&&b_!==9||V_!==_||(b_=7),te(_)},$.then(t,t);break _;case 3:b_=7;break _;case 4:b_=5;break _;case 7:HL($)?(b_=0,xt=null,hA(t)):(b_=0,xt=null,Za(_,t,$,7));break;case 5:var n=null;switch(R_.tag){case 26:n=R_.memoizedState;case 5:case 27:var E=R_;if(n?$c(n):E.stateNode.complete){b_=0,xt=null;var R=E.sibling;if(R!==null)R_=R;else{var H=E.return;H!==null?(R_=H,uT(H)):R_=null}break t}}b_=0,xt=null,Za(_,t,$,5);break;case 6:b_=0,xt=null,Za(_,t,$,6);break;case 8:Ri(),F_=6;break _;default:throw Error(T(462))}}BI();break}catch(b){IA(_,b)}while(!0);return ue=$a=null,p.H=a,p.A=l,x_=e,R_!==null?0:(V_=null,C_=0,g$(),F_)}function BI(){for(;R_!==null&&!q_();)RA(R_)}function RA(_){var t=YE(_.alternate,_,Re);_.memoizedProps=_.pendingProps,t===null?uT(_):R_=t}function hA(_){var t=_,e=t.alternate;switch(t.tag){case 15:case 0:t=WE(e,t,t.pendingProps,t.type,void 0,C_);break;case 11:t=WE(e,t,t.pendingProps,t.type.render,t.ref,C_);break;case 5:Un(t);default:wE(e,t),t=R_=rL(t,Re),t=YE(e,t,Re)}_.memoizedProps=_.pendingProps,t===null?uT(_):R_=t}function Za(_,t,e,a){ue=$a=null,Un(t),za=null,gl=0;var l=t.return;try{if(OI(_,l,t,e,C_)){F_=1,Q$(_,zt(e,_.current)),R_=null;return}}catch($){if(l!==null)throw R_=l,$;F_=1,Q$(_,zt(e,_.current)),R_=null;return}t.flags&32768?(g_||a===1?_=!0:ja||(C_&536870912)!==0?_=!1:(Ue=_=!0,(a===2||a===9||a===3||a===6)&&(a=pt.current,a!==null&&a.tag===13&&(a.flags|=16384))),NA(t,_)):uT(t)}function uT(_){var t=_;do{if((t.flags&32768)!==0){NA(t,Ue);return}_=t.return;var e=MI(t.alternate,t,Re);if(e!==null){R_=e;return}if(t=t.sibling,t!==null){R_=t;return}R_=t=_}while(t!==null);F_===0&&(F_=5)}function NA(_,t){do{var e=yI(_.alternate,_);if(e!==null){e.flags&=32767,R_=e;return}if(e=_.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(_=_.sibling,_!==null)){R_=_;return}R_=_=e}while(_!==null);F_=6,R_=null}function SA(_,t,e,a,l,$,n,E,R){_.cancelPendingCommit=null;do LT();while($t!==0);if((x_&6)!==0)throw Error(T(327));if(t!==null){if(t===_.current)throw Error(T(177));if($=t.lanes|t.childLanes,$|=nn,rf(_,e,$,n,E,R),_===V_&&(R_=V_=null,C_=0),qa=t,Ge=_,he=e,oi=$,si=l,EA=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(_.callbackNode=null,_.callbackPriority=0,YI(A$,function(){return OA(),null})):(_.callbackNode=null,_.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=p.T,p.T=null,l=X.p,X.p=2,n=x_,x_|=4;try{pI(_,t,e)}finally{x_=n,X.p=l,p.T=a}}$t=1,CA(),dA(),mA()}}function CA(){if($t===1){$t=0;var _=Ge,t=qa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=p.T,p.T=null;var a=X.p;X.p=2;var l=x_;x_|=4;try{aA(t,_);var $=pi,n=uL(_.containerInfo),E=$.focusedElem,R=$.selectionRange;if(n!==E&&E&&E.ownerDocument&&iL(E.ownerDocument.documentElement,E)){if(R!==null&&en(E)){var H=R.start,b=R.end;if(b===void 0&&(b=H),"selectionStart"in E)E.selectionStart=H,E.selectionEnd=Math.min(b,E.value.length);else{var B=E.ownerDocument||document,M=B&&B.defaultView||window;if(M.getSelection){var D=M.getSelection(),F=E.textContent.length,i_=Math.min(R.start,F),z_=R.end===void 0?i_:Math.min(R.end,F);!D.extend&&i_>z_&&(n=z_,z_=i_,i_=n);var v=nL(E,i_),N=nL(E,z_);if(v&&N&&(D.rangeCount!==1||D.anchorNode!==v.node||D.anchorOffset!==v.offset||D.focusNode!==N.node||D.focusOffset!==N.offset)){var g=B.createRange();g.setStart(v.node,v.offset),D.removeAllRanges(),i_>z_?(D.addRange(g),D.extend(N.node,N.offset)):(g.setEnd(N.node,N.offset),D.addRange(g))}}}}for(B=[],D=E;D=D.parentNode;)D.nodeType===1&&B.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<B.length;E++){var G=B[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ST=!!yi,pi=yi=null}finally{x_=l,X.p=a,p.T=e}}_.current=t,$t=2}}function dA(){if($t===2){$t=0;var _=Ge,t=qa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=p.T,p.T=null;var a=X.p;X.p=2;var l=x_;x_|=4;try{JE(_,t.alternate,t)}finally{x_=l,X.p=a,p.T=e}}$t=3}}function mA(){if($t===4||$t===3){$t=0,il();var _=Ge,t=qa,e=he,a=EA;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$t=5:($t=0,qa=Ge=null,vA(_,_.pendingLanes));var l=_.pendingLanes;if(l===0&&(We=null),WT(e),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=p.T,l=X.p,X.p=2,p.T=null;try{for(var $=_.onRecoverableError,n=0;n<a.length;n++){var E=a[n];$(E.value,{componentStack:E.stack})}}finally{p.T=t,X.p=l}}(he&3)!==0&&LT(),te(_),l=_.pendingLanes,(e&261930)!==0&&(l&42)!==0?_===ri?wl++:(wl=0,ri=_):wl=0,Kl(0)}}function vA(_,t){(_.pooledCacheLanes&=t)===0&&(t=_.pooledCache,t!=null&&(_.pooledCache=null,vl(t)))}function LT(){return CA(),dA(),mA(),OA()}function OA(){if($t!==5)return!1;var _=Ge,t=oi;oi=0;var e=WT(he),a=p.T,l=X.p;try{X.p=32>e?32:e,p.T=null,e=si,si=null;var $=Ge,n=he;if($t=0,qa=Ge=null,he=0,(x_&6)!==0)throw Error(T(331));var E=x_;if(x_|=4,iA($.current),$A($,$.current,n,e),x_=E,Kl(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Ll,$)}catch{}return!0}finally{X.p=l,p.T=a,vA(_,t)}}function gA(_,t,e){t=zt(e,t),t=Qn(_.stateNode,t,2),_=ye(_,t,2),_!==null&&(Al(_,2),te(_))}function W_(_,t,e){if(_.tag===3)gA(_,_,e);else for(;t!==null;){if(t.tag===3){gA(t,_,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(We===null||!We.has(a))){_=zt(e,_),e=HE(2),a=ye(t,e,2),a!==null&&(ME(e,a,t,_),Al(a,2),te(a));break}}t=t.return}}function Ni(_,t,e){var a=_.pingCache;if(a===null){a=_.pingCache=new UI;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(e)||(ci=!0,l.add(e),_=zI.bind(null,_,t,e),t.then(_,_))}function zI(_,t,e){var a=_.pingCache;a!==null&&a.delete(t),_.pingedLanes|=_.suspendedLanes&e,_.warmLanes&=~e,V_===_&&(C_&e)===e&&(F_===4||F_===3&&(C_&62914560)===C_&&300>lt()-lT?(x_&2)===0&&Qa(_,0):fi|=e,Fa===C_&&(Fa=0)),te(_)}function HA(_,t){t===0&&(t=Cu()),_=ea(_,t),_!==null&&(Al(_,t),te(_))}function VI(_){var t=_.memoizedState,e=0;t!==null&&(e=t.retryLane),HA(_,e)}function PI(_,t){var e=0;switch(_.tag){case 31:case 13:var a=_.stateNode,l=_.memoizedState;l!==null&&(e=l.retryLane);break;case 19:a=_.stateNode;break;case 22:a=_.stateNode._retryCache;break;default:throw Error(T(314))}a!==null&&a.delete(t),HA(_,e)}function YI(_,t){return rt(_,t)}var ET=null,Ja=null,Si=!1,AT=!1,Ci=!1,ze=0;function te(_){_!==Ja&&_.next===null&&(Ja===null?ET=Ja=_:Ja=Ja.next=_),AT=!0,Si||(Si=!0,wI())}function Kl(_,t){if(!Ci&&AT){Ci=!0;do for(var e=!1,a=ET;a!==null;){if(_!==0){var l=a.pendingLanes;if(l===0)var $=0;else{var n=a.suspendedLanes,E=a.pingedLanes;$=(1<<31-Ht(42|_)+1)-1,$&=l&~(n&~E),$=$&201326741?$&201326741|1:$?$|2:0}$!==0&&(e=!0,DA(a,$))}else $=C_,$=o$(a,a===V_?$:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),($&3)===0||El(a,$)||(e=!0,DA(a,$));a=a.next}while(e);Ci=!1}}function XI(){MA()}function MA(){AT=Si=!1;var _=0;ze!==0&&to()&&(_=ze);for(var t=lt(),e=null,a=ET;a!==null;){var l=a.next,$=yA(a,t);$===0?(a.next=null,e===null?ET=l:e.next=l,l===null&&(Ja=e)):(e=a,(_!==0||($&3)!==0)&&(AT=!0)),a=l}$t!==0&&$t!==5||Kl(_),ze!==0&&(ze=0)}function yA(_,t){for(var e=_.suspendedLanes,a=_.pingedLanes,l=_.expirationTimes,$=_.pendingLanes&-62914561;0<$;){var n=31-Ht($),E=1<<n,R=l[n];R===-1?((E&e)===0||(E&a)!==0)&&(l[n]=sf(E,t)):R<=t&&(_.expiredLanes|=E),$&=~E}if(t=V_,e=C_,e=o$(_,_===t?e:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),a=_.callbackNode,e===0||_===t&&(b_===2||b_===9)||_.cancelPendingCommit!==null)return a!==null&&a!==null&&J_(a),_.callbackNode=null,_.callbackPriority=0;if((e&3)===0||El(_,e)){if(t=e&-e,t===_.callbackPriority)return t;switch(a!==null&&J_(a),WT(e)){case 2:case 8:e=Nu;break;case 32:e=A$;break;case 268435456:e=Su;break;default:e=A$}return a=pA.bind(null,_),e=rt(e,a),_.callbackPriority=t,_.callbackNode=e,t}return a!==null&&a!==null&&J_(a),_.callbackPriority=2,_.callbackNode=null,2}function pA(_,t){if($t!==0&&$t!==5)return _.callbackNode=null,_.callbackPriority=0,null;var e=_.callbackNode;if(LT()&&_.callbackNode!==e)return null;var a=C_;return a=o$(_,_===V_?a:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),a===0?null:(cA(_,a,t),yA(_,lt()),_.callbackNode!=null&&_.callbackNode===e?pA.bind(null,_):null)}function DA(_,t){if(LT())return null;cA(_,t,!0)}function wI(){ao(function(){(x_&6)!==0?rt(Qe,XI):MA()})}function di(){if(ze===0){var _=Wa;_===0&&(_=c$,c$<<=1,(c$&261888)===0&&(c$=256)),ze=_}return ze}function xA(_){return _==null||typeof _=="symbol"||typeof _=="boolean"?null:typeof _=="function"?_:h$(""+_)}function UA(_,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,_.id&&e.setAttribute("form",_.id),t.parentNode.insertBefore(e,t),_=new FormData(_),e.parentNode.removeChild(e),_}function KI(_,t,e,a,l){if(t==="submit"&&e&&e.stateNode===l){var $=xA((l[Rt]||null).action),n=a.submitter;n&&(t=(t=n[Rt]||null)?xA(t.formAction):n.getAttribute("formAction"),t!==null&&($=t,n=null));var E=new d$("action","action",null,a,l);_.push({event:E,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ze!==0){var R=n?UA(l,n):new FormData(l);Xn(e,{pending:!0,data:R,method:l.method,action:$},null,R)}}else typeof $=="function"&&(E.preventDefault(),R=n?UA(l,n):new FormData(l),Xn(e,{pending:!0,data:R,method:l.method,action:$},$,R))},currentTarget:l}]})}}for(var mi=0;mi<Tn.length;mi++){var vi=Tn[mi],jI=vi.toLowerCase(),FI=vi[0].toUpperCase()+vi.slice(1);Ft(jI,"on"+FI)}Ft(AL,"onAnimationEnd"),Ft(cL,"onAnimationIteration"),Ft(fL,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(LI,"onTransitionRun"),Ft(EI,"onTransitionStart"),Ft(AI,"onTransitionCancel"),Ft(IL,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Je("onBeforeInput",["compositionend","keypress","textInput","paste"]),Je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function bA(_,t){t=(t&4)!==0;for(var e=0;e<_.length;e++){var a=_[e],l=a.event;a=a.listeners;_:{var $=void 0;if(t)for(var n=a.length-1;0<=n;n--){var E=a[n],R=E.instance,H=E.currentTarget;if(E=E.listener,R!==$&&l.isPropagationStopped())break _;$=E,l.currentTarget=H;try{$(l)}catch(b){O$(b)}l.currentTarget=null,$=R}else for(n=0;n<a.length;n++){if(E=a[n],R=E.instance,H=E.currentTarget,E=E.listener,R!==$&&l.isPropagationStopped())break _;$=E,l.currentTarget=H;try{$(l)}catch(b){O$(b)}l.currentTarget=null,$=R}}}}function h_(_,t){var e=t[GT];e===void 0&&(e=t[GT]=new Set);var a=_+"__bubble";e.has(a)||(WA(t,_,2,!1),e.add(a))}function Oi(_,t,e){var a=0;t&&(a|=4),WA(e,_,a,t)}var cT="_reactListening"+Math.random().toString(36).slice(2);function gi(_){if(!_[cT]){_[cT]=!0,Mu.forEach(function(e){e!=="selectionchange"&&(qI.has(e)||Oi(e,!1,_),Oi(e,!0,_))});var t=_.nodeType===9?_:_.ownerDocument;t===null||t[cT]||(t[cT]=!0,Oi("selectionchange",!1,t))}}function WA(_,t,e,a){switch(Ac(t)){case 2:var l=Co;break;case 8:l=mo;break;default:l=Yi}e=l.bind(null,t,e,_),l=void 0,!jT||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?_.addEventListener(t,e,{capture:!0,passive:l}):_.addEventListener(t,e,!0):l!==void 0?_.addEventListener(t,e,{passive:l}):_.addEventListener(t,e,!1)}function Hi(_,t,e,a,l){var $=a;if((t&1)===0&&(t&2)===0&&a!==null)_:for(;;){if(a===null)return;var n=a.tag;if(n===3||n===4){var E=a.stateNode.containerInfo;if(E===l)break;if(n===4)for(n=a.return;n!==null;){var R=n.tag;if((R===3||R===4)&&n.stateNode.containerInfo===l)return;n=n.return}for(;E!==null;){if(n=ha(E),n===null)return;if(R=n.tag,R===5||R===6||R===26||R===27){a=$=n;continue _}E=E.parentNode}}a=a.return}Pu(function(){var H=$,b=wT(e),B=[];_:{var M=oL.get(_);if(M!==void 0){var D=d$,F=_;switch(_){case"keypress":if(S$(e)===0)break _;case"keydown":case"keyup":D=Pf;break;case"focusin":F="focus",D=ZT;break;case"focusout":F="blur",D=ZT;break;case"beforeblur":case"afterblur":D=ZT;break;case"click":if(e.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=wf;break;case AL:case cL:case fL:D=Df;break;case IL:D=jf;break;case"scroll":case"scrollend":D=gf;break;case"wheel":D=qf;break;case"copy":case"cut":case"paste":D=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ju;break;case"toggle":case"beforetoggle":D=Zf}var i_=(t&4)!==0,z_=!i_&&(_==="scroll"||_==="scrollend"),v=i_?M!==null?M+"Capture":null:M;i_=[];for(var N=H,g;N!==null;){var G=N;if(g=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||g===null||v===null||(G=Il(N,v),G!=null&&i_.push(Fl(N,G,g))),z_)break;N=N.return}0<i_.length&&(M=new D(M,F,null,e,b),B.push({event:M,listeners:i_}))}}if((t&7)===0){_:{if(M=_==="mouseover"||_==="pointerover",D=_==="mouseout"||_==="pointerout",M&&e!==XT&&(F=e.relatedTarget||e.fromElement)&&(ha(F)||F[Ra]))break _;if((D||M)&&(M=b.window===b?b:(M=b.ownerDocument)?M.defaultView||M.parentWindow:window,D?(F=e.relatedTarget||e.toElement,D=H,F=F?ha(F):null,F!==null&&(z_=A(F),i_=F.tag,F!==z_||i_!==5&&i_!==27&&i_!==6)&&(F=null)):(D=null,F=H),D!==F)){if(i_=wu,G="onMouseLeave",v="onMouseEnter",N="mouse",(_==="pointerout"||_==="pointerover")&&(i_=ju,G="onPointerLeave",v="onPointerEnter",N="pointer"),z_=D==null?M:fl(D),g=F==null?M:fl(F),M=new i_(G,N+"leave",D,e,b),M.target=z_,M.relatedTarget=g,G=null,ha(b)===H&&(i_=new i_(v,N+"enter",F,e,b),i_.target=g,i_.relatedTarget=z_,G=i_),z_=G,D&&F)t:{for(i_=QI,v=D,N=F,g=0,G=v;G;G=i_(G))g++;G=0;for(var $_=N;$_;$_=i_($_))G++;for(;0<g-G;)v=i_(v),g--;for(;0<G-g;)N=i_(N),G--;for(;g--;){if(v===N||N!==null&&v===N.alternate){i_=v;break t}v=i_(v),N=i_(N)}i_=null}else i_=null;D!==null&&GA(B,M,D,i_,!1),F!==null&&z_!==null&&GA(B,z_,F,i_,!0)}}_:{if(M=H?fl(H):window,D=M.nodeName&&M.nodeName.toLowerCase(),D==="select"||D==="input"&&M.type==="file")var M_=tL;else if(ku(M))if(eL)M_=nI;else{M_=$I;var __=lI}else D=M.nodeName,!D||D.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?H&&YT(H.elementType)&&(M_=tL):M_=TI;if(M_&&(M_=M_(_,H))){_L(B,M_,e,b);break _}__&&__(_,M,H),_==="focusout"&&H&&M.type==="number"&&H.memoizedProps.value!=null&&PT(M,"number",M.value)}switch(__=H?fl(H):window,_){case"focusin":(ku(__)||__.contentEditable==="true")&&(Ha=__,an=H,Cl=null);break;case"focusout":Cl=an=Ha=null;break;case"mousedown":ln=!0;break;case"contextmenu":case"mouseup":case"dragend":ln=!1,LL(B,e,b);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":LL(B,e,b)}var I_;if(kT)_:{switch(_){case"compositionstart":var d_="onCompositionStart";break _;case"compositionend":d_="onCompositionEnd";break _;case"compositionupdate":d_="onCompositionUpdate";break _}d_=void 0}else ga?Zu(_,e)&&(d_="onCompositionEnd"):_==="keydown"&&e.keyCode===229&&(d_="onCompositionStart");d_&&(Fu&&e.locale!=="ko"&&(ga||d_!=="onCompositionStart"?d_==="onCompositionEnd"&&ga&&(I_=Yu()):(de=b,FT="value"in de?de.value:de.textContent,ga=!0)),__=fT(H,d_),0<__.length&&(d_=new Ku(d_,_,null,e,b),B.push({event:d_,listeners:__}),I_?d_.data=I_:(I_=Ju(e),I_!==null&&(d_.data=I_)))),(I_=kf?_I(_,e):tI(_,e))&&(d_=fT(H,"onBeforeInput"),0<d_.length&&(__=new Ku("onBeforeInput","beforeinput",null,e,b),B.push({event:__,listeners:d_}),__.data=I_)),KI(B,_,H,e,b)}bA(B,t)})}function Fl(_,t,e){return{instance:_,listener:t,currentTarget:e}}function fT(_,t){for(var e=t+"Capture",a=[];_!==null;){var l=_,$=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||$===null||(l=Il(_,e),l!=null&&a.unshift(Fl(_,l,$)),l=Il(_,t),l!=null&&a.push(Fl(_,l,$))),_.tag===3)return a;_=_.return}return[]}function QI(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5&&_.tag!==27);return _||null}function GA(_,t,e,a,l){for(var $=t._reactName,n=[];e!==null&&e!==a;){var E=e,R=E.alternate,H=E.stateNode;if(E=E.tag,R!==null&&R===a)break;E!==5&&E!==26&&E!==27||H===null||(R=H,l?(H=Il(e,$),H!=null&&n.unshift(Fl(e,H,R))):l||(H=Il(e,$),H!=null&&n.push(Fl(e,H,R)))),e=e.return}n.length!==0&&_.push({event:t,listeners:n})}var ZI=/\r\n?/g,JI=/\u0000|\uFFFD/g;function BA(_){return(typeof _=="string"?_:""+_).replace(ZI,`
`).replace(JI,"")}function zA(_,t){return t=BA(t),BA(_)===t}function B_(_,t,e,a,l,$){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(_,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(_,""+a);break;case"className":r$(_,"class",a);break;case"tabIndex":r$(_,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":r$(_,e,a);break;case"style":zu(_,a,$);break;case"data":if(t!=="object"){r$(_,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){_.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){_.removeAttribute(e);break}a=h$(""+a),_.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){_.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof $=="function"&&(e==="formAction"?(t!=="input"&&B_(_,t,"name",l.name,l,null),B_(_,t,"formEncType",l.formEncType,l,null),B_(_,t,"formMethod",l.formMethod,l,null),B_(_,t,"formTarget",l.formTarget,l,null)):(B_(_,t,"encType",l.encType,l,null),B_(_,t,"method",l.method,l,null),B_(_,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){_.removeAttribute(e);break}a=h$(""+a),_.setAttribute(e,a);break;case"onClick":a!=null&&(_.onclick=$e);break;case"onScroll":a!=null&&h_("scroll",_);break;case"onScrollEnd":a!=null&&h_("scrollend",_);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(T(60));_.innerHTML=e}}break;case"multiple":_.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":_.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){_.removeAttribute("xlink:href");break}e=h$(""+a),_.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(e,""+a):_.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(e,""):_.removeAttribute(e);break;case"capture":case"download":a===!0?_.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(e,a):_.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?_.setAttribute(e,a):_.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?_.removeAttribute(e):_.setAttribute(e,a);break;case"popover":h_("beforetoggle",_),h_("toggle",_),s$(_,"popover",a);break;case"xlinkActuate":le(_,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":le(_,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":le(_,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":le(_,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":le(_,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":le(_,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":le(_,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":le(_,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":le(_,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":s$(_,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=vf.get(e)||e,s$(_,e,a))}}function Mi(_,t,e,a,l,$){switch(e){case"style":zu(_,a,$);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(T(60));_.innerHTML=e}}break;case"children":typeof a=="string"?ma(_,a):(typeof a=="number"||typeof a=="bigint")&&ma(_,""+a);break;case"onScroll":a!=null&&h_("scroll",_);break;case"onScrollEnd":a!=null&&h_("scrollend",_);break;case"onClick":a!=null&&(_.onclick=$e);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yu.hasOwnProperty(e))_:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),t=e.slice(2,l?e.length-7:void 0),$=_[Rt]||null,$=$!=null?$[e]:null,typeof $=="function"&&_.removeEventListener(t,$,l),typeof a=="function")){typeof $!="function"&&$!==null&&(e in _?_[e]=null:_.hasAttribute(e)&&_.removeAttribute(e)),_.addEventListener(t,a,l);break _}e in _?_[e]=a:a===!0?_.setAttribute(e,""):s$(_,e,a)}}}function ft(_,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":h_("error",_),h_("load",_);var a=!1,l=!1,$;for($ in e)if(e.hasOwnProperty($)){var n=e[$];if(n!=null)switch($){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:B_(_,t,$,n,e,null)}}l&&B_(_,t,"srcSet",e.srcSet,e,null),a&&B_(_,t,"src",e.src,e,null);return;case"input":h_("invalid",_);var E=$=n=l=null,R=null,H=null;for(a in e)if(e.hasOwnProperty(a)){var b=e[a];if(b!=null)switch(a){case"name":l=b;break;case"type":n=b;break;case"checked":R=b;break;case"defaultChecked":H=b;break;case"value":$=b;break;case"defaultValue":E=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(T(137,t));break;default:B_(_,t,a,b,e,null)}}bu(_,$,E,R,H,n,l,!1);return;case"select":h_("invalid",_),a=n=$=null;for(l in e)if(e.hasOwnProperty(l)&&(E=e[l],E!=null))switch(l){case"value":$=E;break;case"defaultValue":n=E;break;case"multiple":a=E;default:B_(_,t,l,E,e,null)}t=$,e=n,_.multiple=!!a,t!=null?da(_,!!a,t,!1):e!=null&&da(_,!!a,e,!0);return;case"textarea":h_("invalid",_),$=l=a=null;for(n in e)if(e.hasOwnProperty(n)&&(E=e[n],E!=null))switch(n){case"value":a=E;break;case"defaultValue":l=E;break;case"children":$=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(T(91));break;default:B_(_,t,n,E,e,null)}Gu(_,a,l,$);return;case"option":for(R in e)e.hasOwnProperty(R)&&(a=e[R],a!=null)&&(R==="selected"?_.selected=a&&typeof a!="function"&&typeof a!="symbol":B_(_,t,R,a,e,null));return;case"dialog":h_("beforetoggle",_),h_("toggle",_),h_("cancel",_),h_("close",_);break;case"iframe":case"object":h_("load",_);break;case"video":case"audio":for(a=0;a<jl.length;a++)h_(jl[a],_);break;case"image":h_("error",_),h_("load",_);break;case"details":h_("toggle",_);break;case"embed":case"source":case"link":h_("error",_),h_("load",_);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in e)if(e.hasOwnProperty(H)&&(a=e[H],a!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:B_(_,t,H,a,e,null)}return;default:if(YT(t)){for(b in e)e.hasOwnProperty(b)&&(a=e[b],a!==void 0&&Mi(_,t,b,a,e,void 0));return}}for(E in e)e.hasOwnProperty(E)&&(a=e[E],a!=null&&B_(_,t,E,a,e,null))}function kI(_,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,$=null,n=null,E=null,R=null,H=null,b=null;for(D in e){var B=e[D];if(e.hasOwnProperty(D)&&B!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":R=B;default:a.hasOwnProperty(D)||B_(_,t,D,null,a,B)}}for(var M in a){var D=a[M];if(B=e[M],a.hasOwnProperty(M)&&(D!=null||B!=null))switch(M){case"type":$=D;break;case"name":l=D;break;case"checked":H=D;break;case"defaultChecked":b=D;break;case"value":n=D;break;case"defaultValue":E=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(T(137,t));break;default:D!==B&&B_(_,t,M,D,a,B)}}VT(_,n,E,R,H,b,$,l);return;case"select":D=n=E=M=null;for($ in e)if(R=e[$],e.hasOwnProperty($)&&R!=null)switch($){case"value":break;case"multiple":D=R;default:a.hasOwnProperty($)||B_(_,t,$,null,a,R)}for(l in a)if($=a[l],R=e[l],a.hasOwnProperty(l)&&($!=null||R!=null))switch(l){case"value":M=$;break;case"defaultValue":E=$;break;case"multiple":n=$;default:$!==R&&B_(_,t,l,$,a,R)}t=E,e=n,a=D,M!=null?da(_,!!e,M,!1):!!a!=!!e&&(t!=null?da(_,!!e,t,!0):da(_,!!e,e?[]:"",!1));return;case"textarea":D=M=null;for(E in e)if(l=e[E],e.hasOwnProperty(E)&&l!=null&&!a.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:B_(_,t,E,null,a,l)}for(n in a)if(l=a[n],$=e[n],a.hasOwnProperty(n)&&(l!=null||$!=null))switch(n){case"value":M=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(T(91));break;default:l!==$&&B_(_,t,n,l,a,$)}Wu(_,M,D);return;case"option":for(var F in e)M=e[F],e.hasOwnProperty(F)&&M!=null&&!a.hasOwnProperty(F)&&(F==="selected"?_.selected=!1:B_(_,t,F,null,a,M));for(R in a)M=a[R],D=e[R],a.hasOwnProperty(R)&&M!==D&&(M!=null||D!=null)&&(R==="selected"?_.selected=M&&typeof M!="function"&&typeof M!="symbol":B_(_,t,R,M,a,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var i_ in e)M=e[i_],e.hasOwnProperty(i_)&&M!=null&&!a.hasOwnProperty(i_)&&B_(_,t,i_,null,a,M);for(H in a)if(M=a[H],D=e[H],a.hasOwnProperty(H)&&M!==D&&(M!=null||D!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(T(137,t));break;default:B_(_,t,H,M,a,D)}return;default:if(YT(t)){for(var z_ in e)M=e[z_],e.hasOwnProperty(z_)&&M!==void 0&&!a.hasOwnProperty(z_)&&Mi(_,t,z_,void 0,a,M);for(b in a)M=a[b],D=e[b],!a.hasOwnProperty(b)||M===D||M===void 0&&D===void 0||Mi(_,t,b,M,a,D);return}}for(var v in e)M=e[v],e.hasOwnProperty(v)&&M!=null&&!a.hasOwnProperty(v)&&B_(_,t,v,null,a,M);for(B in a)M=a[B],D=e[B],!a.hasOwnProperty(B)||M===D||M==null&&D==null||B_(_,t,B,M,a,D)}function VA(_){switch(_){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _o(){if(typeof performance.getEntriesByType=="function"){for(var _=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var l=e[a],$=l.transferSize,n=l.initiatorType,E=l.duration;if($&&E&&VA(n)){for(n=0,E=l.responseEnd,a+=1;a<e.length;a++){var R=e[a],H=R.startTime;if(H>E)break;var b=R.transferSize,B=R.initiatorType;b&&VA(B)&&(R=R.responseEnd,n+=b*(R<E?1:(E-H)/(R-H)))}if(--a,t+=8*($+n)/(l.duration/1e3),_++,10<_)break}}if(0<_)return t/_/1e6}return navigator.connection&&(_=navigator.connection.downlink,typeof _=="number")?_:5}var yi=null,pi=null;function IT(_){return _.nodeType===9?_:_.ownerDocument}function PA(_){switch(_){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function YA(_,t){if(_===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return _===1&&t==="foreignObject"?0:_}function Di(_,t){return _==="textarea"||_==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=null;function to(){var _=window.event;return _&&_.type==="popstate"?_===xi?!1:(xi=_,!0):(xi=null,!1)}var XA=typeof setTimeout=="function"?setTimeout:void 0,eo=typeof clearTimeout=="function"?clearTimeout:void 0,wA=typeof Promise=="function"?Promise:void 0,ao=typeof queueMicrotask=="function"?queueMicrotask:typeof wA<"u"?function(_){return wA.resolve(null).then(_).catch(lo)}:XA;function lo(_){setTimeout(function(){throw _})}function Ve(_){return _==="head"}function KA(_,t){var e=t,a=0;do{var l=e.nextSibling;if(_.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(a===0){_.removeChild(l),el(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")ql(_.ownerDocument.documentElement);else if(e==="head"){e=_.ownerDocument.head,ql(e);for(var $=e.firstChild;$;){var n=$.nextSibling,E=$.nodeName;$[cl]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&$.rel.toLowerCase()==="stylesheet"||e.removeChild($),$=n}}else e==="body"&&ql(_.ownerDocument.body);e=l}while(e);el(t)}function jA(_,t){var e=_;_=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(_===0)break;_--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||_++;e=a}while(e)}function Ui(_){var t=_.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ui(e),BT(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}_.removeChild(e)}}function $o(_,t,e,a){for(;_.nodeType===1;){var l=e;if(_.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(_.nodeName!=="INPUT"||_.type!=="hidden"))break}else if(a){if(!_[cl])switch(t){case"meta":if(!_.hasAttribute("itemprop"))break;return _;case"link":if($=_.getAttribute("rel"),$==="stylesheet"&&_.hasAttribute("data-precedence"))break;if($!==l.rel||_.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||_.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||_.getAttribute("title")!==(l.title==null?null:l.title))break;return _;case"style":if(_.hasAttribute("data-precedence"))break;return _;case"script":if($=_.getAttribute("src"),($!==(l.src==null?null:l.src)||_.getAttribute("type")!==(l.type==null?null:l.type)||_.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&$&&_.hasAttribute("async")&&!_.hasAttribute("itemprop"))break;return _;default:return _}}else if(t==="input"&&_.type==="hidden"){var $=l.name==null?null:""+l.name;if(l.type==="hidden"&&_.getAttribute("name")===$)return _}else return _;if(_=wt(_.nextSibling),_===null)break}return null}function To(_,t,e){if(t==="")return null;for(;_.nodeType!==3;)if((_.nodeType!==1||_.nodeName!=="INPUT"||_.type!=="hidden")&&!e||(_=wt(_.nextSibling),_===null))return null;return _}function FA(_,t){for(;_.nodeType!==8;)if((_.nodeType!==1||_.nodeName!=="INPUT"||_.type!=="hidden")&&!t||(_=wt(_.nextSibling),_===null))return null;return _}function bi(_){return _.data==="$?"||_.data==="$~"}function Wi(_){return _.data==="$!"||_.data==="$?"&&_.ownerDocument.readyState!=="loading"}function no(_,t){var e=_.ownerDocument;if(_.data==="$~")_._reactRetry=t;else if(_.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),_._reactRetry=a}}function wt(_){for(;_!=null;_=_.nextSibling){var t=_.nodeType;if(t===1||t===3)break;if(t===8){if(t=_.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return _}var Gi=null;function qA(_){_=_.nextSibling;for(var t=0;_;){if(_.nodeType===8){var e=_.data;if(e==="/$"||e==="/&"){if(t===0)return wt(_.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}_=_.nextSibling}return null}function QA(_){_=_.previousSibling;for(var t=0;_;){if(_.nodeType===8){var e=_.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return _;t--}else e!=="/$"&&e!=="/&"||t++}_=_.previousSibling}return null}function ZA(_,t,e){switch(t=IT(e),_){case"html":if(_=t.documentElement,!_)throw Error(T(452));return _;case"head":if(_=t.head,!_)throw Error(T(453));return _;case"body":if(_=t.body,!_)throw Error(T(454));return _;default:throw Error(T(451))}}function ql(_){for(var t=_.attributes;t.length;)_.removeAttributeNode(t[0]);BT(_)}var Kt=new Map,JA=new Set;function oT(_){return typeof _.getRootNode=="function"?_.getRootNode():_.nodeType===9?_:_.ownerDocument}var Ne=X.d;X.d={f:io,r:uo,D:Lo,C:Eo,L:Ao,m:co,X:Io,S:fo,M:oo};function io(){var _=Ne.f(),t=nT();return _||t}function uo(_){var t=Na(_);t!==null&&t.tag===5&&t.type==="form"?IE(t):Ne.r(_)}var ka=typeof document>"u"?null:document;function kA(_,t,e){var a=ka;if(a&&typeof t=="string"&&t){var l=Gt(t);l='link[rel="'+_+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),JA.has(l)||(JA.add(l),_={rel:_,crossOrigin:e,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),ft(t,"link",_),nt(t),a.head.appendChild(t)))}}function Lo(_){Ne.D(_),kA("dns-prefetch",_,null)}function Eo(_,t){Ne.C(_,t),kA("preconnect",_,t)}function Ao(_,t,e){Ne.L(_,t,e);var a=ka;if(a&&_&&t){var l='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+Gt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+Gt(e.imageSizes)+'"]')):l+='[href="'+Gt(_)+'"]';var $=l;switch(t){case"style":$=_l(_);break;case"script":$=tl(_)}Kt.has($)||(_=C({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:_,as:t},e),Kt.set($,_),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ql($))||t==="script"&&a.querySelector(Zl($))||(t=a.createElement("link"),ft(t,"link",_),nt(t),a.head.appendChild(t)))}}function co(_,t){Ne.m(_,t);var e=ka;if(e&&_){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Gt(a)+'"][href="'+Gt(_)+'"]',$=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":$=tl(_)}if(!Kt.has($)&&(_=C({rel:"modulepreload",href:_},t),Kt.set($,_),e.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Zl($)))return}a=e.createElement("link"),ft(a,"link",_),nt(a),e.head.appendChild(a)}}}function fo(_,t,e){Ne.S(_,t,e);var a=ka;if(a&&_){var l=Sa(a).hoistableStyles,$=_l(_);t=t||"default";var n=l.get($);if(!n){var E={loading:0,preload:null};if(n=a.querySelector(Ql($)))E.loading=5;else{_=C({rel:"stylesheet",href:_,"data-precedence":t},e),(e=Kt.get($))&&Bi(_,e);var R=n=a.createElement("link");nt(R),ft(R,"link",_),R._p=new Promise(function(H,b){R.onload=H,R.onerror=b}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sT(n,t,a)}n={type:"stylesheet",instance:n,count:1,state:E},l.set($,n)}}}function Io(_,t){Ne.X(_,t);var e=ka;if(e&&_){var a=Sa(e).hoistableScripts,l=tl(_),$=a.get(l);$||($=e.querySelector(Zl(l)),$||(_=C({src:_,async:!0},t),(t=Kt.get(l))&&zi(_,t),$=e.createElement("script"),nt($),ft($,"link",_),e.head.appendChild($)),$={type:"script",instance:$,count:1,state:null},a.set(l,$))}}function oo(_,t){Ne.M(_,t);var e=ka;if(e&&_){var a=Sa(e).hoistableScripts,l=tl(_),$=a.get(l);$||($=e.querySelector(Zl(l)),$||(_=C({src:_,async:!0,type:"module"},t),(t=Kt.get(l))&&zi(_,t),$=e.createElement("script"),nt($),ft($,"link",_),e.head.appendChild($)),$={type:"script",instance:$,count:1,state:null},a.set(l,$))}}function _c(_,t,e,a){var l=(l=x.current)?oT(l):null;if(!l)throw Error(T(446));switch(_){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=_l(e.href),e=Sa(l).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){_=_l(e.href);var $=Sa(l).hoistableStyles,n=$.get(_);if(n||(l=l.ownerDocument||l,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},$.set(_,n),($=l.querySelector(Ql(_)))&&!$._p&&(n.instance=$,n.state.loading=5),Kt.has(_)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Kt.set(_,e),$||so(l,_,e,n.state))),t&&a===null)throw Error(T(528,""));return n}if(t&&a!==null)throw Error(T(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tl(e),e=Sa(l).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(T(444,_))}}function _l(_){return'href="'+Gt(_)+'"'}function Ql(_){return'link[rel="stylesheet"]['+_+"]"}function tc(_){return C({},_,{"data-precedence":_.precedence,precedence:null})}function so(_,t,e,a){_.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=_.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ft(t,"link",e),nt(t),_.head.appendChild(t))}function tl(_){return'[src="'+Gt(_)+'"]'}function Zl(_){return"script[async]"+_}function ec(_,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=_.querySelector('style[data-href~="'+Gt(e.href)+'"]');if(a)return t.instance=a,nt(a),a;var l=C({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(_.ownerDocument||_).createElement("style"),nt(a),ft(a,"style",l),sT(a,e.precedence,_),t.instance=a;case"stylesheet":l=_l(e.href);var $=_.querySelector(Ql(l));if($)return t.state.loading|=4,t.instance=$,nt($),$;a=tc(e),(l=Kt.get(l))&&Bi(a,l),$=(_.ownerDocument||_).createElement("link"),nt($);var n=$;return n._p=new Promise(function(E,R){n.onload=E,n.onerror=R}),ft($,"link",a),t.state.loading|=4,sT($,e.precedence,_),t.instance=$;case"script":return $=tl(e.src),(l=_.querySelector(Zl($)))?(t.instance=l,nt(l),l):(a=e,(l=Kt.get($))&&(a=C({},e),zi(a,l)),_=_.ownerDocument||_,l=_.createElement("script"),nt(l),ft(l,"link",a),_.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(T(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,sT(a,e.precedence,_));return t.instance}function sT(_,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,$=l,n=0;n<a.length;n++){var E=a[n];if(E.dataset.precedence===t)$=E;else if($!==l)break}$?$.parentNode.insertBefore(_,$.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(_,t.firstChild))}function Bi(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.title==null&&(_.title=t.title)}function zi(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.integrity==null&&(_.integrity=t.integrity)}var rT=null;function ac(_,t,e){if(rT===null){var a=new Map,l=rT=new Map;l.set(e,a)}else l=rT,a=l.get(e),a||(a=new Map,l.set(e,a));if(a.has(_))return a;for(a.set(_,null),e=e.getElementsByTagName(_),l=0;l<e.length;l++){var $=e[l];if(!($[cl]||$[Lt]||_==="link"&&$.getAttribute("rel")==="stylesheet")&&$.namespaceURI!=="http://www.w3.org/2000/svg"){var n=$.getAttribute(t)||"";n=_+n;var E=a.get(n);E?E.push($):a.set(n,[$])}}return a}function lc(_,t,e){_=_.ownerDocument||_,_.head.insertBefore(e,t==="title"?_.querySelector("head > title"):null)}function ro(_,t,e){if(e===1||t.itemProp!=null)return!1;switch(_){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(_=t.disabled,typeof t.precedence=="string"&&_==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $c(_){return!(_.type==="stylesheet"&&(_.state.loading&3)===0)}function Ro(_,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=_l(a.href),$=t.querySelector(Ql(l));if($){t=$._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(_.count++,_=RT.bind(_),t.then(_,_)),e.state.loading|=4,e.instance=$,nt($);return}$=t.ownerDocument||t,a=tc(a),(l=Kt.get(l))&&Bi(a,l),$=$.createElement("link"),nt($);var n=$;n._p=new Promise(function(E,R){n.onload=E,n.onerror=R}),ft($,"link",a),e.instance=$}_.stylesheets===null&&(_.stylesheets=new Map),_.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(_.count++,e=RT.bind(_),t.addEventListener("load",e),t.addEventListener("error",e))}}var Vi=0;function ho(_,t){return _.stylesheets&&_.count===0&&NT(_,_.stylesheets),0<_.count||0<_.imgCount?function(e){var a=setTimeout(function(){if(_.stylesheets&&NT(_,_.stylesheets),_.unsuspend){var $=_.unsuspend;_.unsuspend=null,$()}},6e4+t);0<_.imgBytes&&Vi===0&&(Vi=62500*_o());var l=setTimeout(function(){if(_.waitingForImages=!1,_.count===0&&(_.stylesheets&&NT(_,_.stylesheets),_.unsuspend)){var $=_.unsuspend;_.unsuspend=null,$()}},(_.imgBytes>Vi?50:800)+t);return _.unsuspend=e,function(){_.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function RT(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)NT(this,this.stylesheets);else if(this.unsuspend){var _=this.unsuspend;this.unsuspend=null,_()}}}var hT=null;function NT(_,t){_.stylesheets=null,_.unsuspend!==null&&(_.count++,hT=new Map,t.forEach(No,_),hT=null,RT.call(_))}function No(_,t){if(!(t.state.loading&4)){var e=hT.get(_);if(e)var a=e.get(null);else{e=new Map,hT.set(_,e);for(var l=_.querySelectorAll("link[data-precedence],style[data-precedence]"),$=0;$<l.length;$++){var n=l[$];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(e.set(n.dataset.precedence,n),a=n)}a&&e.set(null,a)}l=t.instance,n=l.getAttribute("data-precedence"),$=e.get(n)||a,$===a&&e.set(null,l),e.set(n,l),this.count++,a=RT.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),$?$.parentNode.insertBefore(l,$.nextSibling):(_=_.nodeType===9?_.head:_,_.insertBefore(l,_.firstChild)),t.state.loading|=4}}var Jl={$$typeof:e_,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function So(_,t,e,a,l,$,n,E,R){this.tag=1,this.containerInfo=_,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=UT(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=UT(0),this.hiddenUpdates=UT(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=$,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Tc(_,t,e,a,l,$,n,E,R,H,b,B){return _=new So(_,t,e,n,R,H,b,B,E),t=1,$===!0&&(t|=24),$=yt(3,null,null,t),_.current=$,$.stateNode=_,t=hn(),t.refCount++,_.pooledCache=t,t.refCount++,$.memoizedState={element:a,isDehydrated:e,cache:t},dn($),_}function nc(_){return _?(_=pa,_):pa}function ic(_,t,e,a,l,$){l=nc(l),a.context===null?a.context=l:a.pendingContext=l,a=Me(t),a.payload={element:e},$=$===void 0?null:$,$!==null&&(a.callback=$),e=ye(_,a,t),e!==null&&(mt(e,_,t),Ml(e,_,t))}function uc(_,t){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var e=_.retryLane;_.retryLane=e!==0&&e<t?e:t}}function Pi(_,t){uc(_,t),(_=_.alternate)&&uc(_,t)}function Lc(_){if(_.tag===13||_.tag===31){var t=ea(_,67108864);t!==null&&mt(t,_,67108864),Pi(_,67108864)}}function Ec(_){if(_.tag===13||_.tag===31){var t=bt();t=bT(t);var e=ea(_,t);e!==null&&mt(e,_,t),Pi(_,t)}}var ST=!0;function Co(_,t,e,a){var l=p.T;p.T=null;var $=X.p;try{X.p=2,Yi(_,t,e,a)}finally{X.p=$,p.T=l}}function mo(_,t,e,a){var l=p.T;p.T=null;var $=X.p;try{X.p=8,Yi(_,t,e,a)}finally{X.p=$,p.T=l}}function Yi(_,t,e,a){if(ST){var l=Xi(a);if(l===null)Hi(_,t,a,CT,e),cc(_,a);else if(Oo(l,_,t,e,a))a.stopPropagation();else if(cc(_,a),t&4&&-1<vo.indexOf(_)){for(;l!==null;){var $=Na(l);if($!==null)switch($.tag){case 3:if($=$.stateNode,$.current.memoizedState.isDehydrated){var n=Ze($.pendingLanes);if(n!==0){var E=$;for(E.pendingLanes|=2,E.entangledLanes|=2;n;){var R=1<<31-Ht(n);E.entanglements[1]|=R,n&=~R}te($),(x_&6)===0&&($T=lt()+500,Kl(0))}}break;case 31:case 13:E=ea($,2),E!==null&&mt(E,$,2),nT(),Pi($,2)}if($=Xi(a),$===null&&Hi(_,t,a,CT,e),$===l)break;l=$}l!==null&&a.stopPropagation()}else Hi(_,t,a,null,e)}}function Xi(_){return _=wT(_),wi(_)}var CT=null;function wi(_){if(CT=null,_=ha(_),_!==null){var t=A(_);if(t===null)_=null;else{var e=t.tag;if(e===13){if(_=s(t),_!==null)return _;_=null}else if(e===31){if(_=O(t),_!==null)return _;_=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;_=null}else t!==_&&(_=null)}}return CT=_,null}function Ac(_){switch(_){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ul()){case Qe:return 2;case Nu:return 8;case A$:case Ef:return 32;case Su:return 268435456;default:return 32}default:return 32}}var Ki=!1,Pe=null,Ye=null,Xe=null,kl=new Map,_$=new Map,we=[],vo="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cc(_,t){switch(_){case"focusin":case"focusout":Pe=null;break;case"dragenter":case"dragleave":Ye=null;break;case"mouseover":case"mouseout":Xe=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_$.delete(t.pointerId)}}function t$(_,t,e,a,l,$){return _===null||_.nativeEvent!==$?(_={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:$,targetContainers:[l]},t!==null&&(t=Na(t),t!==null&&Lc(t)),_):(_.eventSystemFlags|=a,t=_.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),_)}function Oo(_,t,e,a,l){switch(t){case"focusin":return Pe=t$(Pe,_,t,e,a,l),!0;case"dragenter":return Ye=t$(Ye,_,t,e,a,l),!0;case"mouseover":return Xe=t$(Xe,_,t,e,a,l),!0;case"pointerover":var $=l.pointerId;return kl.set($,t$(kl.get($)||null,_,t,e,a,l)),!0;case"gotpointercapture":return $=l.pointerId,_$.set($,t$(_$.get($)||null,_,t,e,a,l)),!0}return!1}function fc(_){var t=ha(_.target);if(t!==null){var e=A(t);if(e!==null){if(t=e.tag,t===13){if(t=s(e),t!==null){_.blockedOn=t,gu(_.priority,function(){Ec(e)});return}}else if(t===31){if(t=O(e),t!==null){_.blockedOn=t,gu(_.priority,function(){Ec(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){_.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}_.blockedOn=null}function dT(_){if(_.blockedOn!==null)return!1;for(var t=_.targetContainers;0<t.length;){var e=Xi(_.nativeEvent);if(e===null){e=_.nativeEvent;var a=new e.constructor(e.type,e);XT=a,e.target.dispatchEvent(a),XT=null}else return t=Na(e),t!==null&&Lc(t),_.blockedOn=e,!1;t.shift()}return!0}function Ic(_,t,e){dT(_)&&e.delete(t)}function go(){Ki=!1,Pe!==null&&dT(Pe)&&(Pe=null),Ye!==null&&dT(Ye)&&(Ye=null),Xe!==null&&dT(Xe)&&(Xe=null),kl.forEach(Ic),_$.forEach(Ic)}function mT(_,t){_.blockedOn===t&&(_.blockedOn=null,Ki||(Ki=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,go)))}var vT=null;function oc(_){vT!==_&&(vT=_,L.unstable_scheduleCallback(L.unstable_NormalPriority,function(){vT===_&&(vT=null);for(var t=0;t<_.length;t+=3){var e=_[t],a=_[t+1],l=_[t+2];if(typeof a!="function"){if(wi(a||e)===null)continue;break}var $=Na(e);$!==null&&(_.splice(t,3),t-=3,Xn($,{pending:!0,data:l,method:e.method,action:a},a,l))}}))}function el(_){function t(R){return mT(R,_)}Pe!==null&&mT(Pe,_),Ye!==null&&mT(Ye,_),Xe!==null&&mT(Xe,_),kl.forEach(t),_$.forEach(t);for(var e=0;e<we.length;e++){var a=we[e];a.blockedOn===_&&(a.blockedOn=null)}for(;0<we.length&&(e=we[0],e.blockedOn===null);)fc(e),e.blockedOn===null&&we.shift();if(e=(_.ownerDocument||_).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var l=e[a],$=e[a+1],n=l[Rt]||null;if(typeof $=="function")n||oc(e);else if(n){var E=null;if($&&$.hasAttribute("formAction")){if(l=$,n=$[Rt]||null)E=n.formAction;else if(wi(l)!==null)continue}else E=n.action;typeof E=="function"?e[a+1]=E:(e.splice(a,3),a-=3),oc(e)}}}function sc(){function _($){$.canIntercept&&$.info==="react-transition"&&$.intercept({handler:function(){return new Promise(function(n){return l=n})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var $=navigation.currentEntry;$&&$.url!=null&&navigation.navigate($.url,{state:$.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",_),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",_),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ji(_){this._internalRoot=_}OT.prototype.render=ji.prototype.render=function(_){var t=this._internalRoot;if(t===null)throw Error(T(409));var e=t.current,a=bt();ic(e,a,_,t,null,null)},OT.prototype.unmount=ji.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var t=_.containerInfo;ic(_.current,2,null,_,null,null),nT(),t[Ra]=null}};function OT(_){this._internalRoot=_}OT.prototype.unstable_scheduleHydration=function(_){if(_){var t=Ou();_={blockedOn:null,target:_,priority:t};for(var e=0;e<we.length&&t!==0&&t<we[e].priority;e++);we.splice(e,0,_),e===0&&fc(_)}};var rc=i.version;if(rc!=="19.2.4")throw Error(T(527,rc,"19.2.4"));X.findDOMNode=function(_){var t=_._reactInternals;if(t===void 0)throw typeof _.render=="function"?Error(T(188)):(_=Object.keys(_).join(","),Error(T(268,_)));return _=r(t),_=_!==null?m(_):null,_=_===null?null:_.stateNode,_};var Ho={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gT=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gT.isDisabled&&gT.supportsFiber)try{Ll=gT.inject(Ho),gt=gT}catch{}}return a$.createRoot=function(_,t){if(!c(_))throw Error(T(299));var e=!1,a="",l=mE,$=vE,n=OE;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&($=t.onCaughtError),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=Tc(_,1,!1,null,null,e,a,null,l,$,n,sc),_[Ra]=t.current,gi(_),new ji(t)},a$.hydrateRoot=function(_,t,e){if(!c(_))throw Error(T(299));var a=!1,l="",$=mE,n=vE,E=OE,R=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&($=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(E=e.onRecoverableError),e.formState!==void 0&&(R=e.formState)),t=Tc(_,1,!0,t,e??null,a,l,R,$,n,E,sc),t.context=nc(null),e=t.current,a=bt(),a=bT(a),l=Me(a),l.callback=null,ye(e,l,a),e=a,t.current.lanes=e,Al(t,e),te(t),_[Ra]=t.current,gi(_),new OT(t)},a$.version="19.2.4",a$}var gc;function zo(){if(gc)return Qi.exports;gc=1;function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(i){console.error(i)}}return L(),Qi.exports=Bo(),Qi.exports}var Vo=zo();function Po({inputMode:L,setInputMode:i,textInput:u,setTextInput:T,font:c,setFont:A,fontOptions:s=[],onFileChange:O,width:d,setWidth:r,mode:m,setMode:C,invert:y,setInvert:q,threshold:K,setThreshold:t_,brightness:Z,setBrightness:k,contrast:l_,setContrast:e_,saturation:T_,setSaturation:N_,grayscale:U,setGrayscale:Y,sepia:j,setSepia:u_,hue:v_,setHue:p_,dithering:r_,setDithering:U_,charSet:S_,setCharSet:O_,asciiSets:p=[],onCopy:X,onSaveTxt:J,onSavePng:o_,onEdit:s_,hasImage:h}){const I=()=>{k(1),e_(1),N_(1),Y(0),u_(0),p_(0),q(!1),U_("None"),O_("Normal"),r(50)};return V.jsxs("div",{className:"controls-panel",children:[V.jsxs("div",{className:"logo-area",children:[V.jsx("h2",{children:"Img2Text"}),V.jsx("span",{className:"badge",children:"Pro"})]}),V.jsx("div",{className:"control-group",children:V.jsxs("div",{className:"input-mode-tabs",children:[V.jsx("button",{className:`tab-btn ${L==="image"?"active":""}`,onClick:()=>i("image"),children:"Image to Text"}),V.jsx("button",{className:`tab-btn ${L==="text"?"active":""}`,onClick:()=>i("text"),children:"Text to Art"})]})}),L==="image"?V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"control-group",children:[V.jsxs("label",{className:"file-upload-btn",children:["Upload Image",V.jsx("input",{type:"file",accept:"image/*",onChange:O})]}),h&&V.jsx("button",{className:"edit-btn",onClick:s_,children:"✂️ Crop / Rotate Image"})]}),V.jsxs("div",{className:"control-group",children:[V.jsx("label",{children:"Conversion Mode"}),V.jsxs("select",{className:"font-select",value:m,onChange:o=>C(o.target.value),children:[V.jsx("option",{value:"ascii",children:"Classic ASCII"}),V.jsx("option",{value:"block",children:"Block Cartoons"}),V.jsx("option",{value:"braille",children:"Braille (Detail)"})]})]}),V.jsxs("div",{className:"control-group",children:[V.jsxs("label",{children:["Width: ",d," chars"]}),V.jsx("input",{type:"range",min:"10",max:"200",value:d,onChange:o=>r(Number(o.target.value))})]}),m==="ascii"&&V.jsxs("div",{className:"control-group",children:[V.jsx("label",{children:"ASCII Gradient"}),V.jsx("select",{className:"font-select",value:S_,onChange:o=>O_(o.target.value),children:p.map(o=>V.jsx("option",{value:o,children:o},o))})]}),V.jsxs("div",{className:"settings-grid",children:[V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Brightness: ",Math.round(Z*100),"%"]}),V.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:Z,onChange:o=>k(Number(o.target.value))})]}),V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Contrast: ",Math.round(l_*100),"%"]}),V.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:l_,onChange:o=>e_(Number(o.target.value))})]}),V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Saturation: ",Math.round(T_*100),"%"]}),V.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:T_,onChange:o=>N_(Number(o.target.value))})]}),V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Hue: ",v_,"°"]}),V.jsx("input",{type:"range",min:"0",max:"360",value:v_,onChange:o=>p_(Number(o.target.value))})]}),V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Grayscale: ",Math.round(U*100),"%"]}),V.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:U,onChange:o=>Y(Number(o.target.value))})]}),V.jsxs("div",{className:"control-group compact",children:[V.jsxs("label",{children:["Sepia: ",Math.round(j*100),"%"]}),V.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:j,onChange:o=>u_(Number(o.target.value))})]})]}),V.jsx("div",{className:"control-group",children:V.jsxs("label",{children:[V.jsx("input",{type:"checkbox",checked:y,onChange:o=>q(o.target.checked)}),"Invert Colors"]})}),(m==="ascii"||m==="block")&&V.jsxs("div",{className:"control-group",children:[V.jsx("label",{children:"Dithering"}),V.jsxs("select",{className:"font-select",value:r_,onChange:o=>U_(o.target.value),children:[V.jsx("option",{value:"None",children:"None"}),V.jsx("option",{value:"Floyd-Steinberg",children:"Floyd-Steinberg"}),V.jsx("option",{value:"Atkinson",children:"Atkinson"})]})]}),m==="braille"&&V.jsxs("div",{className:"control-group",children:[V.jsxs("label",{children:["Dot Threshold: ",K]}),V.jsx("input",{type:"range",min:"0",max:"255",value:K,onChange:o=>t_(Number(o.target.value))})]}),V.jsx("button",{className:"reset-btn",onClick:I,children:"Reset Filters"})]}):V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"control-group",children:[V.jsx("label",{children:"Text Input"}),V.jsx("input",{type:"text",className:"text-input-field",value:u,onChange:o=>T(o.target.value),placeholder:"Enter text...",maxLength:30})]}),V.jsxs("div",{className:"control-group",children:[V.jsx("label",{children:"Font Style"}),V.jsx("select",{className:"font-select",value:c,onChange:o=>A(o.target.value),children:s.map(o=>V.jsx("option",{value:o,children:o},o))})]})]}),V.jsxs("div",{className:"control-group action-group-row",children:[V.jsx("button",{className:"action-btn primary",onClick:X,children:"Copy to Clipboard"}),V.jsx("button",{className:"action-btn secondary",onClick:J,children:"Save ASCII Art"}),V.jsx("button",{className:"action-btn secondary",onClick:o_,children:"Save as PNG"})]})]})}function Yo({text:L}){return V.jsx("div",{className:"output-panel",children:V.jsx("div",{className:"output-container",children:L?V.jsx("pre",{children:L}):V.jsx("div",{className:"placeholder",children:V.jsx("p",{children:"Select an image to convert."})})})})}function Xo({message:L,onClose:i}){return H_.useEffect(()=>{const u=setTimeout(i,3e3);return()=>clearTimeout(u)},[i]),V.jsx("div",{className:"toast-notification",children:L})}function Hc(L,i){var u=Object.keys(L);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(L);i&&(T=T.filter(function(c){return Object.getOwnPropertyDescriptor(L,c).enumerable})),u.push.apply(u,T)}return u}function jc(L){for(var i=1;i<arguments.length;i++){var u=arguments[i]!=null?arguments[i]:{};i%2?Hc(Object(u),!0).forEach(function(T){Fo(L,T,u[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(u)):Hc(Object(u)).forEach(function(T){Object.defineProperty(L,T,Object.getOwnPropertyDescriptor(u,T))})}return L}function wo(L,i){if(typeof L!="object"||!L)return L;var u=L[Symbol.toPrimitive];if(u!==void 0){var T=u.call(L,i);if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(L)}function Fc(L){var i=wo(L,"string");return typeof i=="symbol"?i:i+""}function lu(L){"@babel/helpers - typeof";return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},lu(L)}function Ko(L,i){if(!(L instanceof i))throw new TypeError("Cannot call a class as a function")}function Mc(L,i){for(var u=0;u<i.length;u++){var T=i[u];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(L,Fc(T.key),T)}}function jo(L,i,u){return i&&Mc(L.prototype,i),u&&Mc(L,u),Object.defineProperty(L,"prototype",{writable:!1}),L}function Fo(L,i,u){return i=Fc(i),i in L?Object.defineProperty(L,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):L[i]=u,L}function qc(L){return qo(L)||Qo(L)||Zo(L)||Jo()}function qo(L){if(Array.isArray(L))return $u(L)}function Qo(L){if(typeof Symbol<"u"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function Zo(L,i){if(L){if(typeof L=="string")return $u(L,i);var u=Object.prototype.toString.call(L).slice(8,-1);if(u==="Object"&&L.constructor&&(u=L.constructor.name),u==="Map"||u==="Set")return Array.from(L);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return $u(L,i)}}function $u(L,i){(i==null||i>L.length)&&(i=L.length);for(var u=0,T=new Array(i);u<i;u++)T[u]=L[u];return T}function Jo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xT=typeof window<"u"&&typeof window.document<"u",ae=xT?window:{},Iu=xT&&ae.document.documentElement?"ontouchstart"in ae.document.documentElement:!1,ou=xT?"PointerEvent"in ae:!1,w_="cropper",su="all",Qc="crop",Zc="move",Jc="zoom",Ia="e",oa="w",al="s",je="n",l$="ne",$$="nw",T$="se",n$="sw",Tu="".concat(w_,"-crop"),yc="".concat(w_,"-disabled"),Ot="".concat(w_,"-hidden"),pc="".concat(w_,"-hide"),ko="".concat(w_,"-invisible"),DT="".concat(w_,"-modal"),nu="".concat(w_,"-move"),L$="".concat(w_,"Action"),MT="".concat(w_,"Preview"),ru="crop",kc="move",_f="none",iu="crop",uu="cropend",Lu="cropmove",Eu="cropstart",Dc="dblclick",_s=Iu?"touchstart":"mousedown",ts=Iu?"touchmove":"mousemove",es=Iu?"touchend touchcancel":"mouseup",xc=ou?"pointerdown":_s,Uc=ou?"pointermove":ts,bc=ou?"pointerup pointercancel":es,Wc="ready",Gc="resize",Bc="wheel",Au="zoom",zc="image/jpeg",as=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ls=/^data:/,$s=/^data:image\/jpeg;base64,/,Ts=/^img|canvas$/i,tf=200,ef=100,Vc={viewMode:0,dragMode:ru,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:tf,minContainerHeight:ef,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},ns='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',is=Number.isNaN||ae.isNaN;function m_(L){return typeof L=="number"&&!is(L)}var Pc=function(i){return i>0&&i<1/0};function _u(L){return typeof L>"u"}function ra(L){return lu(L)==="object"&&L!==null}var us=Object.prototype.hasOwnProperty;function ll(L){if(!ra(L))return!1;try{var i=L.constructor,u=i.prototype;return i&&u&&us.call(u,"isPrototypeOf")}catch{return!1}}function vt(L){return typeof L=="function"}var Ls=Array.prototype.slice;function af(L){return Array.from?Array.from(L):Ls.call(L)}function at(L,i){return L&&vt(i)&&(Array.isArray(L)||m_(L.length)?af(L).forEach(function(u,T){i.call(L,u,T,L)}):ra(L)&&Object.keys(L).forEach(function(u){i.call(L,L[u],u,L)})),L}var K_=Object.assign||function(i){for(var u=arguments.length,T=new Array(u>1?u-1:0),c=1;c<u;c++)T[c-1]=arguments[c];return ra(i)&&T.length>0&&T.forEach(function(A){ra(A)&&Object.keys(A).forEach(function(s){i[s]=A[s]})}),i},Es=/\.\d*(?:0|9){12}\d*$/;function Tl(L){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Es.test(L)?Math.round(L*i)/i:L}var As=/^width|height|left|top|marginLeft|marginTop$/;function Fe(L,i){var u=L.style;at(i,function(T,c){As.test(c)&&m_(T)&&(T="".concat(T,"px")),u[c]=T})}function cs(L,i){return L.classList?L.classList.contains(i):L.className.indexOf(i)>-1}function ut(L,i){if(i){if(m_(L.length)){at(L,function(T){ut(T,i)});return}if(L.classList){L.classList.add(i);return}var u=L.className.trim();u?u.indexOf(i)<0&&(L.className="".concat(u," ").concat(i)):L.className=i}}function ee(L,i){if(i){if(m_(L.length)){at(L,function(u){ee(u,i)});return}if(L.classList){L.classList.remove(i);return}L.className.indexOf(i)>=0&&(L.className=L.className.replace(i,""))}}function $l(L,i,u){if(i){if(m_(L.length)){at(L,function(T){$l(T,i,u)});return}u?ut(L,i):ee(L,i)}}var fs=/([a-z\d])([A-Z])/g;function Ru(L){return L.replace(fs,"$1-$2").toLowerCase()}function cu(L,i){return ra(L[i])?L[i]:L.dataset?L.dataset[i]:L.getAttribute("data-".concat(Ru(i)))}function E$(L,i,u){ra(u)?L[i]=u:L.dataset?L.dataset[i]=u:L.setAttribute("data-".concat(Ru(i)),u)}function Is(L,i){if(ra(L[i]))try{delete L[i]}catch{L[i]=void 0}else if(L.dataset)try{delete L.dataset[i]}catch{L.dataset[i]=void 0}else L.removeAttribute("data-".concat(Ru(i)))}var lf=/\s\s*/,$f=(function(){var L=!1;if(xT){var i=!1,u=function(){},T=Object.defineProperty({},"once",{get:function(){return L=!0,i},set:function(A){i=A}});ae.addEventListener("test",u,T),ae.removeEventListener("test",u,T)}return L})();function Zt(L,i,u){var T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=u;i.trim().split(lf).forEach(function(A){if(!$f){var s=L.listeners;s&&s[A]&&s[A][u]&&(c=s[A][u],delete s[A][u],Object.keys(s[A]).length===0&&delete s[A],Object.keys(s).length===0&&delete L.listeners)}L.removeEventListener(A,c,T)})}function jt(L,i,u){var T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=u;i.trim().split(lf).forEach(function(A){if(T.once&&!$f){var s=L.listeners,O=s===void 0?{}:s;c=function(){delete O[A][u],L.removeEventListener(A,c,T);for(var r=arguments.length,m=new Array(r),C=0;C<r;C++)m[C]=arguments[C];u.apply(L,m)},O[A]||(O[A]={}),O[A][u]&&L.removeEventListener(A,O[A][u],T),O[A][u]=c,L.listeners=O}L.addEventListener(A,c,T)})}function nl(L,i,u){var T;return vt(Event)&&vt(CustomEvent)?T=new CustomEvent(i,{detail:u,bubbles:!0,cancelable:!0}):(T=document.createEvent("CustomEvent"),T.initCustomEvent(i,!0,!0,u)),L.dispatchEvent(T)}function Tf(L){var i=L.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var tu=ae.location,os=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Yc(L){var i=L.match(os);return i!==null&&(i[1]!==tu.protocol||i[2]!==tu.hostname||i[3]!==tu.port)}function Xc(L){var i="timestamp=".concat(new Date().getTime());return L+(L.indexOf("?")===-1?"?":"&")+i}function u$(L){var i=L.rotate,u=L.scaleX,T=L.scaleY,c=L.translateX,A=L.translateY,s=[];m_(c)&&c!==0&&s.push("translateX(".concat(c,"px)")),m_(A)&&A!==0&&s.push("translateY(".concat(A,"px)")),m_(i)&&i!==0&&s.push("rotate(".concat(i,"deg)")),m_(u)&&u!==1&&s.push("scaleX(".concat(u,")")),m_(T)&&T!==1&&s.push("scaleY(".concat(T,")"));var O=s.length?s.join(" "):"none";return{WebkitTransform:O,msTransform:O,transform:O}}function ss(L){var i=jc({},L),u=0;return at(L,function(T,c){delete i[c],at(i,function(A){var s=Math.abs(T.startX-A.startX),O=Math.abs(T.startY-A.startY),d=Math.abs(T.endX-A.endX),r=Math.abs(T.endY-A.endY),m=Math.sqrt(s*s+O*O),C=Math.sqrt(d*d+r*r),y=(C-m)/m;Math.abs(y)>Math.abs(u)&&(u=y)})}),u}function yT(L,i){var u=L.pageX,T=L.pageY,c={endX:u,endY:T};return i?c:jc({startX:u,startY:T},c)}function rs(L){var i=0,u=0,T=0;return at(L,function(c){var A=c.startX,s=c.startY;i+=A,u+=s,T+=1}),i/=T,u/=T,{pageX:i,pageY:u}}function qe(L){var i=L.aspectRatio,u=L.height,T=L.width,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",A=Pc(T),s=Pc(u);if(A&&s){var O=u*i;c==="contain"&&O>T||c==="cover"&&O<T?u=T/i:T=u*i}else A?u=T/i:s&&(T=u*i);return{width:T,height:u}}function Rs(L){var i=L.width,u=L.height,T=L.degree;if(T=Math.abs(T)%180,T===90)return{width:u,height:i};var c=T%90*Math.PI/180,A=Math.sin(c),s=Math.cos(c),O=i*s+u*A,d=i*A+u*s;return T>90?{width:d,height:O}:{width:O,height:d}}function hs(L,i,u,T){var c=i.aspectRatio,A=i.naturalWidth,s=i.naturalHeight,O=i.rotate,d=O===void 0?0:O,r=i.scaleX,m=r===void 0?1:r,C=i.scaleY,y=C===void 0?1:C,q=u.aspectRatio,K=u.naturalWidth,t_=u.naturalHeight,Z=T.fillColor,k=Z===void 0?"transparent":Z,l_=T.imageSmoothingEnabled,e_=l_===void 0?!0:l_,T_=T.imageSmoothingQuality,N_=T_===void 0?"low":T_,U=T.maxWidth,Y=U===void 0?1/0:U,j=T.maxHeight,u_=j===void 0?1/0:j,v_=T.minWidth,p_=v_===void 0?0:v_,r_=T.minHeight,U_=r_===void 0?0:r_,S_=document.createElement("canvas"),O_=S_.getContext("2d"),p=qe({aspectRatio:q,width:Y,height:u_}),X=qe({aspectRatio:q,width:p_,height:U_},"cover"),J=Math.min(p.width,Math.max(X.width,K)),o_=Math.min(p.height,Math.max(X.height,t_)),s_=qe({aspectRatio:c,width:Y,height:u_}),h=qe({aspectRatio:c,width:p_,height:U_},"cover"),I=Math.min(s_.width,Math.max(h.width,A)),o=Math.min(s_.height,Math.max(h.height,s)),f=[-I/2,-o/2,I,o];return S_.width=Tl(J),S_.height=Tl(o_),O_.fillStyle=k,O_.fillRect(0,0,J,o_),O_.save(),O_.translate(J/2,o_/2),O_.rotate(d*Math.PI/180),O_.scale(m,y),O_.imageSmoothingEnabled=e_,O_.imageSmoothingQuality=N_,O_.drawImage.apply(O_,[L].concat(qc(f.map(function(S){return Math.floor(Tl(S))})))),O_.restore(),S_}var nf=String.fromCharCode;function Ns(L,i,u){var T="";u+=i;for(var c=i;c<u;c+=1)T+=nf(L.getUint8(c));return T}var Ss=/^data:.*,/;function Cs(L){var i=L.replace(Ss,""),u=atob(i),T=new ArrayBuffer(u.length),c=new Uint8Array(T);return at(c,function(A,s){c[s]=u.charCodeAt(s)}),T}function ds(L,i){for(var u=[],T=8192,c=new Uint8Array(L);c.length>0;)u.push(nf.apply(null,af(c.subarray(0,T)))),c=c.subarray(T);return"data:".concat(i,";base64,").concat(btoa(u.join("")))}function ms(L){var i=new DataView(L),u;try{var T,c,A;if(i.getUint8(0)===255&&i.getUint8(1)===216)for(var s=i.byteLength,O=2;O+1<s;){if(i.getUint8(O)===255&&i.getUint8(O+1)===225){c=O;break}O+=1}if(c){var d=c+4,r=c+10;if(Ns(i,d,4)==="Exif"){var m=i.getUint16(r);if(T=m===18761,(T||m===19789)&&i.getUint16(r+2,T)===42){var C=i.getUint32(r+4,T);C>=8&&(A=r+C)}}}if(A){var y=i.getUint16(A,T),q,K;for(K=0;K<y;K+=1)if(q=A+K*12+2,i.getUint16(q,T)===274){q+=8,u=i.getUint16(q,T),i.setUint16(q,1,T);break}}}catch{u=1}return u}function vs(L){var i=0,u=1,T=1;switch(L){case 2:u=-1;break;case 3:i=-180;break;case 4:T=-1;break;case 5:i=90,T=-1;break;case 6:i=90;break;case 7:i=90,u=-1;break;case 8:i=-90;break}return{rotate:i,scaleX:u,scaleY:T}}var Os={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var i=this.element,u=this.options,T=this.container,c=this.cropper,A=Number(u.minContainerWidth),s=Number(u.minContainerHeight);ut(c,Ot),ee(i,Ot);var O={width:Math.max(T.offsetWidth,A>=0?A:tf),height:Math.max(T.offsetHeight,s>=0?s:ef)};this.containerData=O,Fe(c,{width:O.width,height:O.height}),ut(i,Ot),ee(c,Ot)},initCanvas:function(){var i=this.containerData,u=this.imageData,T=this.options.viewMode,c=Math.abs(u.rotate)%180===90,A=c?u.naturalHeight:u.naturalWidth,s=c?u.naturalWidth:u.naturalHeight,O=A/s,d=i.width,r=i.height;i.height*O>i.width?T===3?d=i.height*O:r=i.width/O:T===3?r=i.width/O:d=i.height*O;var m={aspectRatio:O,naturalWidth:A,naturalHeight:s,width:d,height:r};this.canvasData=m,this.limited=T===1||T===2,this.limitCanvas(!0,!0),m.width=Math.min(Math.max(m.width,m.minWidth),m.maxWidth),m.height=Math.min(Math.max(m.height,m.minHeight),m.maxHeight),m.left=(i.width-m.width)/2,m.top=(i.height-m.height)/2,m.oldLeft=m.left,m.oldTop=m.top,this.initialCanvasData=K_({},m)},limitCanvas:function(i,u){var T=this.options,c=this.containerData,A=this.canvasData,s=this.cropBoxData,O=T.viewMode,d=A.aspectRatio,r=this.cropped&&s;if(i){var m=Number(T.minCanvasWidth)||0,C=Number(T.minCanvasHeight)||0;O>1?(m=Math.max(m,c.width),C=Math.max(C,c.height),O===3&&(C*d>m?m=C*d:C=m/d)):O>0&&(m?m=Math.max(m,r?s.width:0):C?C=Math.max(C,r?s.height:0):r&&(m=s.width,C=s.height,C*d>m?m=C*d:C=m/d));var y=qe({aspectRatio:d,width:m,height:C});m=y.width,C=y.height,A.minWidth=m,A.minHeight=C,A.maxWidth=1/0,A.maxHeight=1/0}if(u)if(O>(r?0:1)){var q=c.width-A.width,K=c.height-A.height;A.minLeft=Math.min(0,q),A.minTop=Math.min(0,K),A.maxLeft=Math.max(0,q),A.maxTop=Math.max(0,K),r&&this.limited&&(A.minLeft=Math.min(s.left,s.left+(s.width-A.width)),A.minTop=Math.min(s.top,s.top+(s.height-A.height)),A.maxLeft=s.left,A.maxTop=s.top,O===2&&(A.width>=c.width&&(A.minLeft=Math.min(0,q),A.maxLeft=Math.max(0,q)),A.height>=c.height&&(A.minTop=Math.min(0,K),A.maxTop=Math.max(0,K))))}else A.minLeft=-A.width,A.minTop=-A.height,A.maxLeft=c.width,A.maxTop=c.height},renderCanvas:function(i,u){var T=this.canvasData,c=this.imageData;if(u){var A=Rs({width:c.naturalWidth*Math.abs(c.scaleX||1),height:c.naturalHeight*Math.abs(c.scaleY||1),degree:c.rotate||0}),s=A.width,O=A.height,d=T.width*(s/T.naturalWidth),r=T.height*(O/T.naturalHeight);T.left-=(d-T.width)/2,T.top-=(r-T.height)/2,T.width=d,T.height=r,T.aspectRatio=s/O,T.naturalWidth=s,T.naturalHeight=O,this.limitCanvas(!0,!1)}(T.width>T.maxWidth||T.width<T.minWidth)&&(T.left=T.oldLeft),(T.height>T.maxHeight||T.height<T.minHeight)&&(T.top=T.oldTop),T.width=Math.min(Math.max(T.width,T.minWidth),T.maxWidth),T.height=Math.min(Math.max(T.height,T.minHeight),T.maxHeight),this.limitCanvas(!1,!0),T.left=Math.min(Math.max(T.left,T.minLeft),T.maxLeft),T.top=Math.min(Math.max(T.top,T.minTop),T.maxTop),T.oldLeft=T.left,T.oldTop=T.top,Fe(this.canvas,K_({width:T.width,height:T.height},u$({translateX:T.left,translateY:T.top}))),this.renderImage(i),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(i){var u=this.canvasData,T=this.imageData,c=T.naturalWidth*(u.width/u.naturalWidth),A=T.naturalHeight*(u.height/u.naturalHeight);K_(T,{width:c,height:A,left:(u.width-c)/2,top:(u.height-A)/2}),Fe(this.image,K_({width:T.width,height:T.height},u$(K_({translateX:T.left,translateY:T.top},T)))),i&&this.output()},initCropBox:function(){var i=this.options,u=this.canvasData,T=i.aspectRatio||i.initialAspectRatio,c=Number(i.autoCropArea)||.8,A={width:u.width,height:u.height};T&&(u.height*T>u.width?A.height=A.width/T:A.width=A.height*T),this.cropBoxData=A,this.limitCropBox(!0,!0),A.width=Math.min(Math.max(A.width,A.minWidth),A.maxWidth),A.height=Math.min(Math.max(A.height,A.minHeight),A.maxHeight),A.width=Math.max(A.minWidth,A.width*c),A.height=Math.max(A.minHeight,A.height*c),A.left=u.left+(u.width-A.width)/2,A.top=u.top+(u.height-A.height)/2,A.oldLeft=A.left,A.oldTop=A.top,this.initialCropBoxData=K_({},A)},limitCropBox:function(i,u){var T=this.options,c=this.containerData,A=this.canvasData,s=this.cropBoxData,O=this.limited,d=T.aspectRatio;if(i){var r=Number(T.minCropBoxWidth)||0,m=Number(T.minCropBoxHeight)||0,C=O?Math.min(c.width,A.width,A.width+A.left,c.width-A.left):c.width,y=O?Math.min(c.height,A.height,A.height+A.top,c.height-A.top):c.height;r=Math.min(r,c.width),m=Math.min(m,c.height),d&&(r&&m?m*d>r?m=r/d:r=m*d:r?m=r/d:m&&(r=m*d),y*d>C?y=C/d:C=y*d),s.minWidth=Math.min(r,C),s.minHeight=Math.min(m,y),s.maxWidth=C,s.maxHeight=y}u&&(O?(s.minLeft=Math.max(0,A.left),s.minTop=Math.max(0,A.top),s.maxLeft=Math.min(c.width,A.left+A.width)-s.width,s.maxTop=Math.min(c.height,A.top+A.height)-s.height):(s.minLeft=0,s.minTop=0,s.maxLeft=c.width-s.width,s.maxTop=c.height-s.height))},renderCropBox:function(){var i=this.options,u=this.containerData,T=this.cropBoxData;(T.width>T.maxWidth||T.width<T.minWidth)&&(T.left=T.oldLeft),(T.height>T.maxHeight||T.height<T.minHeight)&&(T.top=T.oldTop),T.width=Math.min(Math.max(T.width,T.minWidth),T.maxWidth),T.height=Math.min(Math.max(T.height,T.minHeight),T.maxHeight),this.limitCropBox(!1,!0),T.left=Math.min(Math.max(T.left,T.minLeft),T.maxLeft),T.top=Math.min(Math.max(T.top,T.minTop),T.maxTop),T.oldLeft=T.left,T.oldTop=T.top,i.movable&&i.cropBoxMovable&&E$(this.face,L$,T.width>=u.width&&T.height>=u.height?Zc:su),Fe(this.cropBox,K_({width:T.width,height:T.height},u$({translateX:T.left,translateY:T.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),nl(this.element,iu,this.getData())}},gs={initPreview:function(){var i=this.element,u=this.crossOrigin,T=this.options.preview,c=u?this.crossOriginUrl:this.url,A=i.alt||"The image to preview",s=document.createElement("img");if(u&&(s.crossOrigin=u),s.src=c,s.alt=A,this.viewBox.appendChild(s),this.viewBoxImage=s,!!T){var O=T;typeof T=="string"?O=i.ownerDocument.querySelectorAll(T):T.querySelector&&(O=[T]),this.previews=O,at(O,function(d){var r=document.createElement("img");E$(d,MT,{width:d.offsetWidth,height:d.offsetHeight,html:d.innerHTML}),u&&(r.crossOrigin=u),r.src=c,r.alt=A,r.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',d.innerHTML="",d.appendChild(r)})}},resetPreview:function(){at(this.previews,function(i){var u=cu(i,MT);Fe(i,{width:u.width,height:u.height}),i.innerHTML=u.html,Is(i,MT)})},preview:function(){var i=this.imageData,u=this.canvasData,T=this.cropBoxData,c=T.width,A=T.height,s=i.width,O=i.height,d=T.left-u.left-i.left,r=T.top-u.top-i.top;!this.cropped||this.disabled||(Fe(this.viewBoxImage,K_({width:s,height:O},u$(K_({translateX:-d,translateY:-r},i)))),at(this.previews,function(m){var C=cu(m,MT),y=C.width,q=C.height,K=y,t_=q,Z=1;c&&(Z=y/c,t_=A*Z),A&&t_>q&&(Z=q/A,K=c*Z,t_=q),Fe(m,{width:K,height:t_}),Fe(m.getElementsByTagName("img")[0],K_({width:s*Z,height:O*Z},u$(K_({translateX:-d*Z,translateY:-r*Z},i))))}))}},Hs={bind:function(){var i=this.element,u=this.options,T=this.cropper;vt(u.cropstart)&&jt(i,Eu,u.cropstart),vt(u.cropmove)&&jt(i,Lu,u.cropmove),vt(u.cropend)&&jt(i,uu,u.cropend),vt(u.crop)&&jt(i,iu,u.crop),vt(u.zoom)&&jt(i,Au,u.zoom),jt(T,xc,this.onCropStart=this.cropStart.bind(this)),u.zoomable&&u.zoomOnWheel&&jt(T,Bc,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),u.toggleDragModeOnDblclick&&jt(T,Dc,this.onDblclick=this.dblclick.bind(this)),jt(i.ownerDocument,Uc,this.onCropMove=this.cropMove.bind(this)),jt(i.ownerDocument,bc,this.onCropEnd=this.cropEnd.bind(this)),u.responsive&&jt(window,Gc,this.onResize=this.resize.bind(this))},unbind:function(){var i=this.element,u=this.options,T=this.cropper;vt(u.cropstart)&&Zt(i,Eu,u.cropstart),vt(u.cropmove)&&Zt(i,Lu,u.cropmove),vt(u.cropend)&&Zt(i,uu,u.cropend),vt(u.crop)&&Zt(i,iu,u.crop),vt(u.zoom)&&Zt(i,Au,u.zoom),Zt(T,xc,this.onCropStart),u.zoomable&&u.zoomOnWheel&&Zt(T,Bc,this.onWheel,{passive:!1,capture:!0}),u.toggleDragModeOnDblclick&&Zt(T,Dc,this.onDblclick),Zt(i.ownerDocument,Uc,this.onCropMove),Zt(i.ownerDocument,bc,this.onCropEnd),u.responsive&&Zt(window,Gc,this.onResize)}},Ms={resize:function(){if(!this.disabled){var i=this.options,u=this.container,T=this.containerData,c=u.offsetWidth/T.width,A=u.offsetHeight/T.height,s=Math.abs(c-1)>Math.abs(A-1)?c:A;if(s!==1){var O,d;i.restore&&(O=this.getCanvasData(),d=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(at(O,function(r,m){O[m]=r*s})),this.setCropBoxData(at(d,function(r,m){d[m]=r*s})))}}},dblclick:function(){this.disabled||this.options.dragMode===_f||this.setDragMode(cs(this.dragBox,Tu)?kc:ru)},wheel:function(i){var u=this,T=Number(this.options.wheelZoomRatio)||.1,c=1;this.disabled||(i.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){u.wheeling=!1},50),i.deltaY?c=i.deltaY>0?1:-1:i.wheelDelta?c=-i.wheelDelta/120:i.detail&&(c=i.detail>0?1:-1),this.zoom(-c*T,i)))},cropStart:function(i){var u=i.buttons,T=i.button;if(!(this.disabled||(i.type==="mousedown"||i.type==="pointerdown"&&i.pointerType==="mouse")&&(m_(u)&&u!==1||m_(T)&&T!==0||i.ctrlKey))){var c=this.options,A=this.pointers,s;i.changedTouches?at(i.changedTouches,function(O){A[O.identifier]=yT(O)}):A[i.pointerId||0]=yT(i),Object.keys(A).length>1&&c.zoomable&&c.zoomOnTouch?s=Jc:s=cu(i.target,L$),as.test(s)&&nl(this.element,Eu,{originalEvent:i,action:s})!==!1&&(i.preventDefault(),this.action=s,this.cropping=!1,s===Qc&&(this.cropping=!0,ut(this.dragBox,DT)))}},cropMove:function(i){var u=this.action;if(!(this.disabled||!u)){var T=this.pointers;i.preventDefault(),nl(this.element,Lu,{originalEvent:i,action:u})!==!1&&(i.changedTouches?at(i.changedTouches,function(c){K_(T[c.identifier]||{},yT(c,!0))}):K_(T[i.pointerId||0]||{},yT(i,!0)),this.change(i))}},cropEnd:function(i){if(!this.disabled){var u=this.action,T=this.pointers;i.changedTouches?at(i.changedTouches,function(c){delete T[c.identifier]}):delete T[i.pointerId||0],u&&(i.preventDefault(),Object.keys(T).length||(this.action=""),this.cropping&&(this.cropping=!1,$l(this.dragBox,DT,this.cropped&&this.options.modal)),nl(this.element,uu,{originalEvent:i,action:u}))}}},ys={change:function(i){var u=this.options,T=this.canvasData,c=this.containerData,A=this.cropBoxData,s=this.pointers,O=this.action,d=u.aspectRatio,r=A.left,m=A.top,C=A.width,y=A.height,q=r+C,K=m+y,t_=0,Z=0,k=c.width,l_=c.height,e_=!0,T_;!d&&i.shiftKey&&(d=C&&y?C/y:1),this.limited&&(t_=A.minLeft,Z=A.minTop,k=t_+Math.min(c.width,T.width,T.left+T.width),l_=Z+Math.min(c.height,T.height,T.top+T.height));var N_=s[Object.keys(s)[0]],U={x:N_.endX-N_.startX,y:N_.endY-N_.startY},Y=function(u_){switch(u_){case Ia:q+U.x>k&&(U.x=k-q);break;case oa:r+U.x<t_&&(U.x=t_-r);break;case je:m+U.y<Z&&(U.y=Z-m);break;case al:K+U.y>l_&&(U.y=l_-K);break}};switch(O){case su:r+=U.x,m+=U.y;break;case Ia:if(U.x>=0&&(q>=k||d&&(m<=Z||K>=l_))){e_=!1;break}Y(Ia),C+=U.x,C<0&&(O=oa,C=-C,r-=C),d&&(y=C/d,m+=(A.height-y)/2);break;case je:if(U.y<=0&&(m<=Z||d&&(r<=t_||q>=k))){e_=!1;break}Y(je),y-=U.y,m+=U.y,y<0&&(O=al,y=-y,m-=y),d&&(C=y*d,r+=(A.width-C)/2);break;case oa:if(U.x<=0&&(r<=t_||d&&(m<=Z||K>=l_))){e_=!1;break}Y(oa),C-=U.x,r+=U.x,C<0&&(O=Ia,C=-C,r-=C),d&&(y=C/d,m+=(A.height-y)/2);break;case al:if(U.y>=0&&(K>=l_||d&&(r<=t_||q>=k))){e_=!1;break}Y(al),y+=U.y,y<0&&(O=je,y=-y,m-=y),d&&(C=y*d,r+=(A.width-C)/2);break;case l$:if(d){if(U.y<=0&&(m<=Z||q>=k)){e_=!1;break}Y(je),y-=U.y,m+=U.y,C=y*d}else Y(je),Y(Ia),U.x>=0?q<k?C+=U.x:U.y<=0&&m<=Z&&(e_=!1):C+=U.x,U.y<=0?m>Z&&(y-=U.y,m+=U.y):(y-=U.y,m+=U.y);C<0&&y<0?(O=n$,y=-y,C=-C,m-=y,r-=C):C<0?(O=$$,C=-C,r-=C):y<0&&(O=T$,y=-y,m-=y);break;case $$:if(d){if(U.y<=0&&(m<=Z||r<=t_)){e_=!1;break}Y(je),y-=U.y,m+=U.y,C=y*d,r+=A.width-C}else Y(je),Y(oa),U.x<=0?r>t_?(C-=U.x,r+=U.x):U.y<=0&&m<=Z&&(e_=!1):(C-=U.x,r+=U.x),U.y<=0?m>Z&&(y-=U.y,m+=U.y):(y-=U.y,m+=U.y);C<0&&y<0?(O=T$,y=-y,C=-C,m-=y,r-=C):C<0?(O=l$,C=-C,r-=C):y<0&&(O=n$,y=-y,m-=y);break;case n$:if(d){if(U.x<=0&&(r<=t_||K>=l_)){e_=!1;break}Y(oa),C-=U.x,r+=U.x,y=C/d}else Y(al),Y(oa),U.x<=0?r>t_?(C-=U.x,r+=U.x):U.y>=0&&K>=l_&&(e_=!1):(C-=U.x,r+=U.x),U.y>=0?K<l_&&(y+=U.y):y+=U.y;C<0&&y<0?(O=l$,y=-y,C=-C,m-=y,r-=C):C<0?(O=T$,C=-C,r-=C):y<0&&(O=$$,y=-y,m-=y);break;case T$:if(d){if(U.x>=0&&(q>=k||K>=l_)){e_=!1;break}Y(Ia),C+=U.x,y=C/d}else Y(al),Y(Ia),U.x>=0?q<k?C+=U.x:U.y>=0&&K>=l_&&(e_=!1):C+=U.x,U.y>=0?K<l_&&(y+=U.y):y+=U.y;C<0&&y<0?(O=$$,y=-y,C=-C,m-=y,r-=C):C<0?(O=n$,C=-C,r-=C):y<0&&(O=l$,y=-y,m-=y);break;case Zc:this.move(U.x,U.y),e_=!1;break;case Jc:this.zoom(ss(s),i),e_=!1;break;case Qc:if(!U.x||!U.y){e_=!1;break}T_=Tf(this.cropper),r=N_.startX-T_.left,m=N_.startY-T_.top,C=A.minWidth,y=A.minHeight,U.x>0?O=U.y>0?T$:l$:U.x<0&&(r-=C,O=U.y>0?n$:$$),U.y<0&&(m-=y),this.cropped||(ee(this.cropBox,Ot),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}e_&&(A.width=C,A.height=y,A.left=r,A.top=m,this.action=O,this.renderCropBox()),at(s,function(j){j.startX=j.endX,j.startY=j.endY})}},ps={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&ut(this.dragBox,DT),ee(this.cropBox,Ot),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=K_({},this.initialImageData),this.canvasData=K_({},this.initialCanvasData),this.cropBoxData=K_({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(K_(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),ee(this.dragBox,DT),ut(this.cropBox,Ot)),this},replace:function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&i&&(this.isImg&&(this.element.src=i),u?(this.url=i,this.image.src=i,this.ready&&(this.viewBoxImage.src=i,at(this.previews,function(T){T.getElementsByTagName("img")[0].src=i}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(i))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,ee(this.cropper,yc)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,ut(this.cropper,yc)),this},destroy:function(){var i=this.element;return i[w_]?(i[w_]=void 0,this.isImg&&this.replaced&&(i.src=this.originalUrl),this.uncreate(),this):this},move:function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,T=this.canvasData,c=T.left,A=T.top;return this.moveTo(_u(i)?i:c+Number(i),_u(u)?u:A+Number(u))},moveTo:function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,T=this.canvasData,c=!1;return i=Number(i),u=Number(u),this.ready&&!this.disabled&&this.options.movable&&(m_(i)&&(T.left=i,c=!0),m_(u)&&(T.top=u,c=!0),c&&this.renderCanvas(!0)),this},zoom:function(i,u){var T=this.canvasData;return i=Number(i),i<0?i=1/(1-i):i=1+i,this.zoomTo(T.width*i/T.naturalWidth,null,u)},zoomTo:function(i,u,T){var c=this.options,A=this.canvasData,s=A.width,O=A.height,d=A.naturalWidth,r=A.naturalHeight;if(i=Number(i),i>=0&&this.ready&&!this.disabled&&c.zoomable){var m=d*i,C=r*i;if(nl(this.element,Au,{ratio:i,oldRatio:s/d,originalEvent:T})===!1)return this;if(T){var y=this.pointers,q=Tf(this.cropper),K=y&&Object.keys(y).length?rs(y):{pageX:T.pageX,pageY:T.pageY};A.left-=(m-s)*((K.pageX-q.left-A.left)/s),A.top-=(C-O)*((K.pageY-q.top-A.top)/O)}else ll(u)&&m_(u.x)&&m_(u.y)?(A.left-=(m-s)*((u.x-A.left)/s),A.top-=(C-O)*((u.y-A.top)/O)):(A.left-=(m-s)/2,A.top-=(C-O)/2);A.width=m,A.height=C,this.renderCanvas(!0)}return this},rotate:function(i){return this.rotateTo((this.imageData.rotate||0)+Number(i))},rotateTo:function(i){return i=Number(i),m_(i)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=i%360,this.renderCanvas(!0,!0)),this},scaleX:function(i){var u=this.imageData.scaleY;return this.scale(i,m_(u)?u:1)},scaleY:function(i){var u=this.imageData.scaleX;return this.scale(m_(u)?u:1,i)},scale:function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i,T=this.imageData,c=!1;return i=Number(i),u=Number(u),this.ready&&!this.disabled&&this.options.scalable&&(m_(i)&&(T.scaleX=i,c=!0),m_(u)&&(T.scaleY=u,c=!0),c&&this.renderCanvas(!0,!0)),this},getData:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,u=this.options,T=this.imageData,c=this.canvasData,A=this.cropBoxData,s;if(this.ready&&this.cropped){s={x:A.left-c.left,y:A.top-c.top,width:A.width,height:A.height};var O=T.width/T.naturalWidth;if(at(s,function(m,C){s[C]=m/O}),i){var d=Math.round(s.y+s.height),r=Math.round(s.x+s.width);s.x=Math.round(s.x),s.y=Math.round(s.y),s.width=r-s.x,s.height=d-s.y}}else s={x:0,y:0,width:0,height:0};return u.rotatable&&(s.rotate=T.rotate||0),u.scalable&&(s.scaleX=T.scaleX||1,s.scaleY=T.scaleY||1),s},setData:function(i){var u=this.options,T=this.imageData,c=this.canvasData,A={};if(this.ready&&!this.disabled&&ll(i)){var s=!1;u.rotatable&&m_(i.rotate)&&i.rotate!==T.rotate&&(T.rotate=i.rotate,s=!0),u.scalable&&(m_(i.scaleX)&&i.scaleX!==T.scaleX&&(T.scaleX=i.scaleX,s=!0),m_(i.scaleY)&&i.scaleY!==T.scaleY&&(T.scaleY=i.scaleY,s=!0)),s&&this.renderCanvas(!0,!0);var O=T.width/T.naturalWidth;m_(i.x)&&(A.left=i.x*O+c.left),m_(i.y)&&(A.top=i.y*O+c.top),m_(i.width)&&(A.width=i.width*O),m_(i.height)&&(A.height=i.height*O),this.setCropBoxData(A)}return this},getContainerData:function(){return this.ready?K_({},this.containerData):{}},getImageData:function(){return this.sized?K_({},this.imageData):{}},getCanvasData:function(){var i=this.canvasData,u={};return this.ready&&at(["left","top","width","height","naturalWidth","naturalHeight"],function(T){u[T]=i[T]}),u},setCanvasData:function(i){var u=this.canvasData,T=u.aspectRatio;return this.ready&&!this.disabled&&ll(i)&&(m_(i.left)&&(u.left=i.left),m_(i.top)&&(u.top=i.top),m_(i.width)?(u.width=i.width,u.height=i.width/T):m_(i.height)&&(u.height=i.height,u.width=i.height*T),this.renderCanvas(!0)),this},getCropBoxData:function(){var i=this.cropBoxData,u;return this.ready&&this.cropped&&(u={left:i.left,top:i.top,width:i.width,height:i.height}),u||{}},setCropBoxData:function(i){var u=this.cropBoxData,T=this.options.aspectRatio,c,A;return this.ready&&this.cropped&&!this.disabled&&ll(i)&&(m_(i.left)&&(u.left=i.left),m_(i.top)&&(u.top=i.top),m_(i.width)&&i.width!==u.width&&(c=!0,u.width=i.width),m_(i.height)&&i.height!==u.height&&(A=!0,u.height=i.height),T&&(c?u.height=u.width/T:A&&(u.width=u.height*T)),this.renderCropBox()),this},getCroppedCanvas:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var u=this.canvasData,T=hs(this.image,this.imageData,u,i);if(!this.cropped)return T;var c=this.getData(i.rounded),A=c.x,s=c.y,O=c.width,d=c.height,r=T.width/Math.floor(u.naturalWidth);r!==1&&(A*=r,s*=r,O*=r,d*=r);var m=O/d,C=qe({aspectRatio:m,width:i.maxWidth||1/0,height:i.maxHeight||1/0}),y=qe({aspectRatio:m,width:i.minWidth||0,height:i.minHeight||0},"cover"),q=qe({aspectRatio:m,width:i.width||(r!==1?T.width:O),height:i.height||(r!==1?T.height:d)}),K=q.width,t_=q.height;K=Math.min(C.width,Math.max(y.width,K)),t_=Math.min(C.height,Math.max(y.height,t_));var Z=document.createElement("canvas"),k=Z.getContext("2d");Z.width=Tl(K),Z.height=Tl(t_),k.fillStyle=i.fillColor||"transparent",k.fillRect(0,0,K,t_);var l_=i.imageSmoothingEnabled,e_=l_===void 0?!0:l_,T_=i.imageSmoothingQuality;k.imageSmoothingEnabled=e_,T_&&(k.imageSmoothingQuality=T_);var N_=T.width,U=T.height,Y=A,j=s,u_,v_,p_,r_,U_,S_;Y<=-O||Y>N_?(Y=0,u_=0,p_=0,U_=0):Y<=0?(p_=-Y,Y=0,u_=Math.min(N_,O+Y),U_=u_):Y<=N_&&(p_=0,u_=Math.min(O,N_-Y),U_=u_),u_<=0||j<=-d||j>U?(j=0,v_=0,r_=0,S_=0):j<=0?(r_=-j,j=0,v_=Math.min(U,d+j),S_=v_):j<=U&&(r_=0,v_=Math.min(d,U-j),S_=v_);var O_=[Y,j,u_,v_];if(U_>0&&S_>0){var p=K/O;O_.push(p_*p,r_*p,U_*p,S_*p)}return k.drawImage.apply(k,[T].concat(qc(O_.map(function(X){return Math.floor(Tl(X))})))),Z},setAspectRatio:function(i){var u=this.options;return!this.disabled&&!_u(i)&&(u.aspectRatio=Math.max(0,i)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(i){var u=this.options,T=this.dragBox,c=this.face;if(this.ready&&!this.disabled){var A=i===ru,s=u.movable&&i===kc;i=A||s?i:_f,u.dragMode=i,E$(T,L$,i),$l(T,Tu,A),$l(T,nu,s),u.cropBoxMovable||(E$(c,L$,i),$l(c,Tu,A),$l(c,nu,s))}return this}},Ds=ae.Cropper,uf=(function(){function L(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ko(this,L),!i||!Ts.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=K_({},Vc,ll(u)&&u),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return jo(L,[{key:"init",value:function(){var u=this.element,T=u.tagName.toLowerCase(),c;if(!u[w_]){if(u[w_]=this,T==="img"){if(this.isImg=!0,c=u.getAttribute("src")||"",this.originalUrl=c,!c)return;c=u.src}else T==="canvas"&&window.HTMLCanvasElement&&(c=u.toDataURL());this.load(c)}}},{key:"load",value:function(u){var T=this;if(u){this.url=u,this.imageData={};var c=this.element,A=this.options;if(!A.rotatable&&!A.scalable&&(A.checkOrientation=!1),!A.checkOrientation||!window.ArrayBuffer){this.clone();return}if(ls.test(u)){$s.test(u)?this.read(Cs(u)):this.clone();return}var s=new XMLHttpRequest,O=this.clone.bind(this);this.reloading=!0,this.xhr=s,s.onabort=O,s.onerror=O,s.ontimeout=O,s.onprogress=function(){s.getResponseHeader("content-type")!==zc&&s.abort()},s.onload=function(){T.read(s.response)},s.onloadend=function(){T.reloading=!1,T.xhr=null},A.checkCrossOrigin&&Yc(u)&&c.crossOrigin&&(u=Xc(u)),s.open("GET",u,!0),s.responseType="arraybuffer",s.withCredentials=c.crossOrigin==="use-credentials",s.send()}}},{key:"read",value:function(u){var T=this.options,c=this.imageData,A=ms(u),s=0,O=1,d=1;if(A>1){this.url=ds(u,zc);var r=vs(A);s=r.rotate,O=r.scaleX,d=r.scaleY}T.rotatable&&(c.rotate=s),T.scalable&&(c.scaleX=O,c.scaleY=d),this.clone()}},{key:"clone",value:function(){var u=this.element,T=this.url,c=u.crossOrigin,A=T;this.options.checkCrossOrigin&&Yc(T)&&(c||(c="anonymous"),A=Xc(T)),this.crossOrigin=c,this.crossOriginUrl=A;var s=document.createElement("img");c&&(s.crossOrigin=c),s.src=A||T,s.alt=u.alt||"The image to crop",this.image=s,s.onload=this.start.bind(this),s.onerror=this.stop.bind(this),ut(s,pc),u.parentNode.insertBefore(s,u.nextSibling)}},{key:"start",value:function(){var u=this,T=this.image;T.onload=null,T.onerror=null,this.sizing=!0;var c=ae.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ae.navigator.userAgent),A=function(r,m){K_(u.imageData,{naturalWidth:r,naturalHeight:m,aspectRatio:r/m}),u.initialImageData=K_({},u.imageData),u.sizing=!1,u.sized=!0,u.build()};if(T.naturalWidth&&!c){A(T.naturalWidth,T.naturalHeight);return}var s=document.createElement("img"),O=document.body||document.documentElement;this.sizingImage=s,s.onload=function(){A(s.width,s.height),c||O.removeChild(s)},s.src=T.src,c||(s.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",O.appendChild(s))}},{key:"stop",value:function(){var u=this.image;u.onload=null,u.onerror=null,u.parentNode.removeChild(u),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var u=this.element,T=this.options,c=this.image,A=u.parentNode,s=document.createElement("div");s.innerHTML=ns;var O=s.querySelector(".".concat(w_,"-container")),d=O.querySelector(".".concat(w_,"-canvas")),r=O.querySelector(".".concat(w_,"-drag-box")),m=O.querySelector(".".concat(w_,"-crop-box")),C=m.querySelector(".".concat(w_,"-face"));this.container=A,this.cropper=O,this.canvas=d,this.dragBox=r,this.cropBox=m,this.viewBox=O.querySelector(".".concat(w_,"-view-box")),this.face=C,d.appendChild(c),ut(u,Ot),A.insertBefore(O,u.nextSibling),ee(c,pc),this.initPreview(),this.bind(),T.initialAspectRatio=Math.max(0,T.initialAspectRatio)||NaN,T.aspectRatio=Math.max(0,T.aspectRatio)||NaN,T.viewMode=Math.max(0,Math.min(3,Math.round(T.viewMode)))||0,ut(m,Ot),T.guides||ut(m.getElementsByClassName("".concat(w_,"-dashed")),Ot),T.center||ut(m.getElementsByClassName("".concat(w_,"-center")),Ot),T.background&&ut(O,"".concat(w_,"-bg")),T.highlight||ut(C,ko),T.cropBoxMovable&&(ut(C,nu),E$(C,L$,su)),T.cropBoxResizable||(ut(m.getElementsByClassName("".concat(w_,"-line")),Ot),ut(m.getElementsByClassName("".concat(w_,"-point")),Ot)),this.render(),this.ready=!0,this.setDragMode(T.dragMode),T.autoCrop&&this.crop(),this.setData(T.data),vt(T.ready)&&jt(u,Wc,T.ready,{once:!0}),nl(u,Wc)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var u=this.cropper.parentNode;u&&u.removeChild(this.cropper),ee(this.element,Ot)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Ds,L}},{key:"setDefaults",value:function(u){K_(Vc,ll(u)&&u)}}])})();K_(uf.prototype,Os,gs,Hs,Ms,ys,ps);var sa=function(){return sa=Object.assign||function(L){for(var i,u=1,T=arguments.length;u<T;u++)for(var c in i=arguments[u])Object.prototype.hasOwnProperty.call(i,c)&&(L[c]=i[c]);return L},sa.apply(this,arguments)};function eu(L,i){var u={};for(var T in L)Object.prototype.hasOwnProperty.call(L,T)&&i.indexOf(T)<0&&(u[T]=L[T]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(T=Object.getOwnPropertySymbols(L);c<T.length;c++)i.indexOf(T[c])<0&&Object.prototype.propertyIsEnumerable.call(L,T[c])&&(u[T[c]]=L[T[c]])}return u}var xs=["aspectRatio","autoCrop","autoCropArea","background","center","checkCrossOrigin","checkOrientation","cropBoxMovable","cropBoxResizable","data","dragMode","guides","highlight","initialAspectRatio","minCanvasHeight","minCanvasWidth","minContainerHeight","minContainerWidth","minCropBoxHeight","minCropBoxWidth","modal","movable","preview","responsive","restore","rotatable","scalable","toggleDragModeOnDblclick","viewMode","wheelZoomRatio","zoomOnTouch","zoomOnWheel","zoomable","cropstart","cropmove","cropend","crop","zoom","ready"],Us={opacity:0,maxWidth:"100%"},bs=HT.forwardRef((function(L,i){var u=eu(L,[]),T=u.dragMode,c=T===void 0?"crop":T,A=u.src,s=u.style,O=u.className,d=u.crossOrigin,r=u.scaleX,m=u.scaleY,C=u.enable,y=u.zoomTo,q=u.rotateTo,K=u.alt,t_=K===void 0?"picture":K,Z=u.ready,k=u.onInitialized,l_=eu(u,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),e_={scaleY:m,scaleX:r,enable:C,zoomTo:y,rotateTo:q},T_=(function(){for(var U=[],Y=0;Y<arguments.length;Y++)U[Y]=arguments[Y];var j=H_.useRef(null);return HT.useEffect((function(){U.forEach((function(u_){u_&&(typeof u_=="function"?u_(j.current):u_.current=j.current)}))}),[U]),j})(i,H_.useRef(null));H_.useEffect((function(){var U;!((U=T_.current)===null||U===void 0)&&U.cropper&&typeof y=="number"&&T_.current.cropper.zoomTo(y)}),[u.zoomTo]),H_.useEffect((function(){var U;!((U=T_.current)===null||U===void 0)&&U.cropper&&A!==void 0&&T_.current.cropper.reset().clear().replace(A)}),[A]),H_.useEffect((function(){if(T_.current!==null){var U=new uf(T_.current,sa(sa({dragMode:c},l_),{ready:function(Y){Y.currentTarget!==null&&(function(j,u_){u_===void 0&&(u_={});var v_=u_.enable,p_=v_===void 0||v_,r_=u_.scaleX,U_=r_===void 0?1:r_,S_=u_.scaleY,O_=S_===void 0?1:S_,p=u_.zoomTo,X=p===void 0?0:p,J=u_.rotateTo;p_?j.enable():j.disable(),j.scaleX(U_),j.scaleY(O_),J!==void 0&&j.rotateTo(J),X>0&&j.zoomTo(X)})(Y.currentTarget.cropper,e_),Z&&Z(Y)}}));k&&k(U)}return function(){var Y,j;(j=(Y=T_.current)===null||Y===void 0?void 0:Y.cropper)===null||j===void 0||j.destroy()}}),[T_]);var N_=(function(U){return xs.reduce((function(Y,j){var u_=Y,v_=j;return u_[v_],eu(u_,[typeof v_=="symbol"?v_:v_+""])}),U)})(sa(sa({},l_),{crossOrigin:d,src:A,alt:t_}));return HT.createElement("div",{style:s,className:O},HT.createElement("img",sa({},N_,{style:Us,ref:T_})))}));function Ws({src:L,onSave:i,onCancel:u}){const T=H_.useRef(null),c=()=>{const d=T.current?.cropper;d&&d.rotate(-90)},A=()=>{const d=T.current?.cropper;d&&d.rotate(90)},s=()=>{const d=T.current?.cropper;d&&d.reset()},O=()=>{const d=T.current?.cropper;if(d){const r=d.getCroppedCanvas();if(r){const m=r.toDataURL();i(m)}}};return V.jsx("div",{className:"editor-overlay",children:V.jsxs("div",{className:"editor-modal",children:[V.jsx("div",{className:"editor-header",children:V.jsx("h3",{children:"Edit Image"})}),V.jsx("div",{className:"editor-body",children:V.jsx(bs,{src:L,style:{height:400,width:"100%"},initialAspectRatio:NaN,guides:!0,ref:T,viewMode:1,background:!1,responsive:!0,autoCropArea:1})}),V.jsxs("div",{className:"editor-toolbar",children:[V.jsxs("div",{className:"tools-group",children:[V.jsx("button",{className:"tool-btn",onClick:c,title:"Rotate Left",children:"↩️"}),V.jsx("button",{className:"tool-btn",onClick:A,title:"Rotate Right",children:"↪️"}),V.jsx("button",{className:"tool-btn",onClick:s,title:"Reset",children:"Reset"})]}),V.jsxs("div",{className:"action-group-editor",children:[V.jsx("button",{className:"cancel-btn",onClick:u,children:"Cancel"}),V.jsx("button",{className:"save-btn",onClick:O,children:"Done"})]})]})]})})}const pT={Normal:[" ",".",":","-","=","+","*","#","%","@"],"Normal 2":["@","%","#","*","+","=","-",":","."," "],Minimalist:[" ",".","*","#"],"Gray Scale":[" ",".",":","-","=","+","*","#","%","@","8","&","$","W","M"],"Extended High":[" ",".",",","-",":",";","=","+","*","#","%","&","@","$"],Alphabetic:[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],Alphanumeric:[" ","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],"Math Symbols":[" ","+","-","=","*","/","<",">","(",")","[","]","{","}"],Arrow:[" ","↑","↗","→","↘","↓","↙","←","↖"],"Code Page 437":[" ","░","▒","▓","█"],"Black and White":[" ","@"],Numerical:[" ","1","2","3","4","5","6","7","8","9","0"]},Gs={process:(L,i)=>{const{width:u=50,mode:T="ascii",charSet:c="Normal",brightness:A=1,contrast:s=1,saturation:O=1,grayscale:d=0,sepia:r=0,hue:m=0,invert:C=!1,dithering:y="None",threshold:q=128}=i,K=document.createElement("canvas"),t_=K.getContext("2d"),Z=L.height/L.width;let k,l_,e_,T_;T==="braille"?(e_=u,T_=Math.round(u*Z*.5),k=u*2,l_=T_*4):(e_=u,T_=Math.round(u*Z*.5),k=e_,l_=T_),k=Math.max(1,k),l_=Math.max(1,l_),K.width=k,K.height=l_;let N_=`brightness(${A*100}%) contrast(${s*100}%) saturate(${O*100}%) grayscale(${d*100}%) sepia(${r*100}%) hue-rotate(${m}deg)`;C&&(N_+=" invert(100%)"),t_.filter=N_,t_.drawImage(L,0,0,k,l_),t_.filter="none";const U=t_.getImageData(0,0,k,l_);y!=="None"&&T!=="braille"&&Bs(U,y);const Y=new Uint8Array(k*l_);for(let j=0;j<U.data.length;j+=4){const u_=U.data[j],v_=U.data[j+1],p_=U.data[j+2];Y[j/4]=(u_+v_+p_)/3}if(T==="braille")return zs(Y,k,l_,e_,T_,q);if(T==="block"){const j=pT["Code Page 437"];return wc(Y,k,l_,j)}else{const j=pT[c]||pT.Normal;return wc(Y,k,l_,j)}}};function Bs(L,i){const u=L.width,T=L.height,c=L.data,A=(s,O)=>(O*u+s)*4;for(let s=0;s<T;s++)for(let O=0;O<u;O++){const d=A(O,s),r=c[d],m=r<128?0:255;c[d]=m,c[d+1]=m,c[d+2]=m;const C=r-m,y=(q,K,t_)=>{const Z=O+q,k=s+K;if(Z>=0&&Z<u&&k>=0&&k<T){const l_=A(Z,k),e_=c[l_]+C*t_,T_=Math.min(255,Math.max(0,e_));c[l_]=T_,c[l_+1]=T_,c[l_+2]=T_}};i==="Floyd-Steinberg"?(y(1,0,7/16),y(-1,1,3/16),y(0,1,5/16),y(1,1,1/16)):i==="Atkinson"&&(y(1,0,1/8),y(2,0,1/8),y(-1,1,1/8),y(0,1,1/8),y(1,1,1/8),y(0,2,1/8))}}function zs(L,i,u,T,c,A,s){let O="";for(let d=0;d<c;d++){for(let r=0;r<T;r++){let m=10240;const C=r*2,y=d*4,q=[{dx:0,dy:0,v:1},{dx:0,dy:1,v:2},{dx:0,dy:2,v:4},{dx:1,dy:0,v:8},{dx:1,dy:1,v:16},{dx:1,dy:2,v:32},{dx:0,dy:3,v:64},{dx:1,dy:3,v:128}];for(const K of q){const t_=C+K.dx,Z=y+K.dy;t_<i&&Z<u&&L[Z*i+t_]>=A&&(m+=K.v)}O+=String.fromCharCode(m)}O+=`
`}return O}function wc(L,i,u,T){let c="";const A=T.length;for(let s=0;s<u;s++){for(let O=0;O<i;O++){const d=L[s*i+O],r=Math.floor(d/256*A);c+=T[Math.min(r,A-1)]}c+=`
`}return c}const Vs={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class Ps{constructor(){this.comment="",this.numChars=0,this.options={}}}const au=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],Kc={"ANSI-Compact":"ANSI Compact"},i$=L=>Kc[L]?Kc[L]:L;function Ys(L){return/[.*+?^${}()|[\]\\]/.test(L)?"\\"+L:L}const Lf=(()=>{const{FULL_WIDTH:L=0,FITTING:i,SMUSHING:u,CONTROLLED_SMUSHING:T}=Vs,c={},A={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function s(I,o,f){const S=Ys(I.trim().slice(-1))||"@",x=o===f-1?new RegExp(S+S+"?\\s*$"):new RegExp(S+"\\s*$");return I.replace(x,"")}function O(I=-1,o=null){let f={},S,x=[[16384,"vLayout",u],[8192,"vLayout",i],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",u],[64,"hLayout",i],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];S=o!==null?o:I;for(const[W,P,z]of x)S>=W?(S-=W,f[P]===void 0&&(f[P]=z)):P!=="vLayout"&&P!=="hLayout"&&(f[P]=!1);return typeof f.hLayout>"u"?I===0?f.hLayout=i:I===-1?f.hLayout=L:f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6?f.hLayout=T:f.hLayout=u:f.hLayout===u&&(f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6)&&(f.hLayout=T),typeof f.vLayout>"u"?f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5?f.vLayout=T:f.vLayout=L:f.vLayout===u&&(f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5)&&(f.vLayout=T),f}function d(I,o,f=""){return I===o&&I!==f?I:!1}function r(I,o){let f="|/\\[]{}()<>";if(I==="_"){if(f.indexOf(o)!==-1)return o}else if(o==="_"&&f.indexOf(I)!==-1)return I;return!1}function m(I,o){let f="| /\\ [] {} () <>",S=f.indexOf(I),x=f.indexOf(o);if(S!==-1&&x!==-1&&S!==x&&Math.abs(S-x)!==1){const W=Math.max(S,x),P=W+1;return f.substring(W,P)}return!1}function C(I,o){let f="[] {} ()",S=f.indexOf(I),x=f.indexOf(o);return S!==-1&&x!==-1&&Math.abs(S-x)<=1?"|":!1}function y(I,o){return{"/\\":"|","\\/":"Y","><":"X"}[I+o]||!1}function q(I,o,f=""){return I===f&&o===f?f:!1}function K(I,o){return I===o?I:!1}function t_(I,o){return r(I,o)}function Z(I,o){return m(I,o)}function k(I,o){return I==="-"&&o==="_"||I==="_"&&o==="-"?"=":!1}function l_(I,o){return I==="|"&&o==="|"?"|":!1}function e_(I,o,f){return o===" "||o===""||o===f&&I!==" "?I:o}function T_(I,o,f){if(f.fittingRules&&f.fittingRules.vLayout===L)return"invalid";let S,x=Math.min(I.length,o.length),W,P,z=!1,w;if(x===0)return"invalid";for(S=0;S<x;S++)if(W=I.substring(S,S+1),P=o.substring(S,S+1),W!==" "&&P!==" "){if(f.fittingRules&&f.fittingRules.vLayout===i)return"invalid";if(f.fittingRules&&f.fittingRules.vLayout===u)return"end";if(l_(W,P)){z=z||!1;continue}if(w=!1,w=f.fittingRules&&f.fittingRules.vRule1?K(W,P):w,w=!w&&f.fittingRules&&f.fittingRules.vRule2?t_(W,P):w,w=!w&&f.fittingRules&&f.fittingRules.vRule3?Z(W,P):w,w=!w&&f.fittingRules&&f.fittingRules.vRule4?k(W,P):w,z=!0,!w)return"invalid"}return z?"end":"valid"}function N_(I,o,f){let S=I.length,x=I.length,W,P,z,w=1,a_,L_,E_;for(;w<=S;){for(W=I.slice(Math.max(0,x-w),x),P=o.slice(0,Math.min(S,w)),z=P.length,E_="",a_=0;a_<z;a_++)if(L_=T_(W[a_],P[a_],f),L_==="end")E_=L_;else if(L_==="invalid"){E_=L_;break}else E_===""&&(E_="valid");if(E_==="invalid"){w--;break}if(E_==="end")break;E_==="valid"&&w++}return Math.min(S,w)}function U(I,o,f){let S,x=Math.min(I.length,o.length),W,P,z="",w;const a_=f.fittingRules||{};for(S=0;S<x;S++)W=I.substring(S,S+1),P=o.substring(S,S+1),W!==" "&&P!==" "?a_.vLayout===i||a_.vLayout===u?z+=e_(W,P):(w=!1,w=a_.vRule5?l_(W,P):w,w=!w&&a_.vRule1?K(W,P):w,w=!w&&a_.vRule2?t_(W,P):w,w=!w&&a_.vRule3?Z(W,P):w,w=!w&&a_.vRule4?k(W,P):w,z+=w):z+=e_(W,P);return z}function Y(I,o,f,S){let x=I.length,W=o.length,P=I.slice(0,Math.max(0,x-f)),z=I.slice(Math.max(0,x-f),x),w=o.slice(0,Math.min(f,W)),a_,L_,E_,n_=[],Q;for(L_=z.length,a_=0;a_<L_;a_++)a_>=W?E_=z[a_]:E_=U(z[a_],w[a_],S),n_.push(E_);return Q=o.slice(Math.min(f,W),W),[...P,...n_,...Q]}function j(I,o){const f=" ".repeat(o);return I.map(S=>S+f)}function u_(I,o,f){let S=I[0].length,x=o[0].length,W;return S>x?o=j(o,S-x):x>S&&(I=j(I,x-S)),W=N_(I,o,f),Y(I,o,W,f)}function v_(I,o,f){const S=f.fittingRules||{};if(S.hLayout===L)return 0;let x,W=I.length,P=o.length,z=W,w=1,a_=!1,L_,E_,n_,Q;if(W===0)return 0;_:for(;w<=z;){const f_=W-w;for(L_=I.substring(f_,f_+w),E_=o.substring(0,Math.min(w,P)),x=0;x<Math.min(w,P);x++)if(n_=L_.substring(x,x+1),Q=E_.substring(x,x+1),n_!==" "&&Q!==" "){if(S.hLayout===i){w=w-1;break _}else if(S.hLayout===u){(n_===f.hardBlank||Q===f.hardBlank)&&(w=w-1);break _}else if(a_=!0,!(S.hRule1&&d(n_,Q,f.hardBlank)||S.hRule2&&r(n_,Q)||S.hRule3&&m(n_,Q)||S.hRule4&&C(n_,Q)||S.hRule5&&y(n_,Q)||S.hRule6&&q(n_,Q,f.hardBlank))){w=w-1;break _}}if(a_)break;w++}return Math.min(z,w)}function p_(I,o,f,S){let x,W,P=[],z,w,a_,L_,E_,n_,Q,f_;const D_=S.fittingRules||{};if(typeof S.height!="number")throw new Error("height is not defined.");for(x=0;x<S.height;x++){Q=I[x],f_=o[x],E_=Q.length,n_=f_.length,z=E_-f,w=Q.slice(0,Math.max(0,z)),a_="";const ot=Math.max(0,E_-f);let Tt=Q.substring(ot,ot+f),rt=f_.substring(0,Math.min(f,n_));for(W=0;W<f;W++){let J_=W<E_?Tt.substring(W,W+1):" ",q_=W<n_?rt.substring(W,W+1):" ";if(J_!==" "&&q_!==" ")if(D_.hLayout===i||D_.hLayout===u)a_+=e_(J_,q_,S.hardBlank);else{const il=D_.hRule1&&d(J_,q_,S.hardBlank)||D_.hRule2&&r(J_,q_)||D_.hRule3&&m(J_,q_)||D_.hRule4&&C(J_,q_)||D_.hRule5&&y(J_,q_)||D_.hRule6&&q(J_,q_,S.hardBlank)||e_(J_,q_,S.hardBlank);a_+=il}else a_+=e_(J_,q_,S.hardBlank)}f>=n_?L_="":L_=f_.substring(f,f+Math.max(0,n_-f)),P[x]=w+a_+L_}return P}function r_(I){return new Array(I).fill("")}const U_=function(I){return Math.max(...I.map(o=>o.length))};function S_(I,o,f){return I.reduce(function(S,x){return p_(S,x.fig,x.overlap||0,f)},r_(o))}function O_(I,o,f){for(let S=I.length-1;S>0;S--){const x=S_(I.slice(0,S),o,f);if(U_(x)<=f.width)return{outputFigText:x,chars:I.slice(S)}}return{outputFigText:r_(o),chars:I}}function p(I,o,f){let S,x,W=0,P,z,w,a_=f.height,L_=[],E_,n_={chars:[],overlap:W},Q=[],f_,D_,ot,Tt,rt;if(typeof a_!="number")throw new Error("height is not defined.");z=r_(a_);const J_=f.fittingRules||{};for(f.printDirection===1&&(I=I.split("").reverse().join("")),w=I.length,S=0;S<w;S++)if(f_=I.substring(S,S+1),D_=f_.match(/\s/),x=o[f_.charCodeAt(0)],Tt=null,x){if(J_.hLayout!==L){for(W=1e4,P=0;P<a_;P++)W=Math.min(W,v_(z[P],x[P],f));W=W===1e4?0:W}if(f.width>0&&(f.whitespaceBreak?(ot=S_(n_.chars.concat([{fig:x,overlap:W}]),a_,f),Tt=S_(Q.concat([{fig:ot,overlap:n_.overlap}]),a_,f),E_=U_(Tt)):(Tt=p_(z,x,W,f),E_=U_(Tt)),E_>=f.width&&S>0&&(f.whitespaceBreak?(z=S_(Q.slice(0,-1),a_,f),Q.length>1&&(L_.push(z),z=r_(a_)),Q=[]):(L_.push(z),z=r_(a_)))),f.width>0&&f.whitespaceBreak&&((!D_||S===w-1)&&n_.chars.push({fig:x,overlap:W}),D_||S===w-1)){for(rt=null;Tt=S_(n_.chars,a_,f),E_=U_(Tt),E_>=f.width;)rt=O_(n_.chars,a_,f),n_={chars:rt.chars},L_.push(rt.outputFigText);E_>0&&(rt?Q.push({fig:Tt,overlap:1}):Q.push({fig:Tt,overlap:n_.overlap})),D_&&(Q.push({fig:x,overlap:W}),z=r_(a_)),S===w-1&&(z=S_(Q,a_,f)),n_={chars:[],overlap:W};continue}z=p_(z,x,W,f)}return U_(z)>0&&L_.push(z),f.showHardBlanks||L_.forEach(function(q_){for(w=q_.length,P=0;P<w;P++)q_[P]=q_[P].replace(new RegExp("\\"+f.hardBlank,"g")," ")}),I===""&&L_.length===0&&L_.push(new Array(a_).fill("")),L_}const X=function(I,o){let f;const S=o.fittingRules||{};if(I==="default")f={hLayout:S.hLayout,hRule1:S.hRule1,hRule2:S.hRule2,hRule3:S.hRule3,hRule4:S.hRule4,hRule5:S.hRule5,hRule6:S.hRule6};else if(I==="full")f={hLayout:L,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="fitted")f={hLayout:i,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="controlled smushing")f={hLayout:T,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(I==="universal smushing")f={hLayout:u,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return f},J=function(I,o){let f={};const S=o.fittingRules||{};if(I==="default")f={vLayout:S.vLayout,vRule1:S.vRule1,vRule2:S.vRule2,vRule3:S.vRule3,vRule4:S.vRule4,vRule5:S.vRule5};else if(I==="full")f={vLayout:L,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="fitted")f={vLayout:i,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="controlled smushing")f={vLayout:T,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(I==="universal smushing")f={vLayout:u,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return f},o_=function(I,o,f){f=f.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const S=i$(I);let x=f.split(`
`),W=[],P,z,w;for(z=x.length,P=0;P<z;P++)W=W.concat(p(x[P],c[S],o));for(z=W.length,w=W[0],P=1;P<z;P++)w=u_(w,W[P],o);return w?w.join(`
`):""};function s_(I,o){let f;if(typeof structuredClone<"u"?f=structuredClone(I):f=JSON.parse(JSON.stringify(I)),f.showHardBlanks=o.showHardBlanks||!1,f.width=o.width||-1,f.whitespaceBreak=o.whitespaceBreak||!1,o.horizontalLayout){const S=X(o.horizontalLayout,I);S&&Object.assign(f.fittingRules,S)}if(o.verticalLayout){const S=J(o.verticalLayout,I);S&&Object.assign(f.fittingRules,S)}return f.printDirection=o.printDirection!==null&&o.printDirection!==void 0?o.printDirection:I.printDirection,f}const h=async function(I,o,f){return h.text(I,o,f)};return h.text=async function(I,o,f){I=I+"";let S,x;typeof o=="function"?(x=o,S={font:A.font}):typeof o=="string"?(S={font:o},x=f):o?(S=o,x=f):(S={font:A.font},x=f);const W=S.font||A.font;try{const P=await h.loadFont(W),z=P?o_(W,s_(P,S),I):"";return x&&x(null,z),z}catch(P){const z=P instanceof Error?P:new Error(String(P));if(x)return x(z),"";throw z}},h.textSync=function(I,o){I=I+"",typeof o=="string"?o={font:o}:o=o||{};const f=o.font||A.font;let S=s_(h.loadFontSync(f),o);return o_(f,S,I)},h.metadata=async function(I,o){I=I+"";try{const f=await h.loadFont(I);if(!f)throw new Error("Error loading font.");const S=i$(I),x=c[S]||{},W=[f,x.comment||""];return o&&o(null,f,x.comment),W}catch(f){const S=f instanceof Error?f:new Error(String(f));if(o)return o(S),null;throw S}},h.defaults=function(I){return I&&typeof I=="object"&&Object.assign(A,I),typeof structuredClone<"u"?structuredClone(A):JSON.parse(JSON.stringify(A))},h.parseFont=function(I,o,f=!0){if(c[I]&&!f)return c[I].options;o=o.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const S=new Ps,x=o.split(`
`),W=x.shift();if(!W)throw new Error("Invalid font file: missing header");const P=W.split(" "),z={hardBlank:P[0].substring(5,6),height:parseInt(P[1],10),baseline:parseInt(P[2],10),maxLength:parseInt(P[3],10),oldLayout:parseInt(P[4],10),numCommentLines:parseInt(P[5],10),printDirection:P[6]?parseInt(P[6],10):0,fullLayout:P[7]?parseInt(P[7],10):null,codeTagCount:P[8]?parseInt(P[8],10):null};if((z.hardBlank||"").length!==1||[z.height,z.baseline,z.maxLength,z.oldLayout,z.numCommentLines].some(L_=>L_==null||isNaN(L_)))throw new Error("FIGlet header contains invalid values.");if(z.height==null||z.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");z.fittingRules=O(z.oldLayout,z.fullLayout),S.options=z;const a_=[];for(let L_=32;L_<=126;L_++)a_.push(L_);if(a_.push(196,214,220,228,246,252,223),x.length<z.numCommentLines+z.height*a_.length)throw new Error(`FIGlet file is missing data. Line length: ${x.length}. Comment lines: ${z.numCommentLines}. Height: ${z.height}. Num chars: ${a_.length}.`);for(S.comment=x.splice(0,z.numCommentLines).join(`
`),S.numChars=0;x.length>0&&S.numChars<a_.length;){const L_=a_[S.numChars];S[L_]=x.splice(0,z.height);for(let E_=0;E_<z.height;E_++)typeof S[L_][E_]>"u"?S[L_][E_]="":S[L_][E_]=s(S[L_][E_],E_,z.height);S.numChars++}for(;x.length>0;){const L_=x.shift();if(!L_||L_.trim()==="")break;let E_=L_.split(" ")[0],n_;if(/^-?0[xX][0-9a-fA-F]+$/.test(E_))n_=parseInt(E_,16);else if(/^-?0[0-7]+$/.test(E_))n_=parseInt(E_,8);else if(/^-?[0-9]+$/.test(E_))n_=parseInt(E_,10);else throw new Error(`Error parsing data. Invalid data: ${E_}`);if(n_===-1||n_<-2147483648||n_>2147483647){const Q=n_===-1?"The char code -1 is not permitted.":`The char code cannot be ${n_<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${Q}`)}S[n_]=x.splice(0,z.height);for(let Q=0;Q<z.height;Q++)typeof S[n_][Q]>"u"?S[n_][Q]="":S[n_][Q]=s(S[n_][Q],Q,z.height);S.numChars++}return c[I]=S,z},h.loadedFonts=()=>Object.keys(c),h.clearLoadedFonts=()=>{Object.keys(c).forEach(I=>{delete c[I]})},h.loadFont=async function(I,o){const f=i$(I);if(c[f]){const S=c[f].options;return o&&o(null,S),Promise.resolve(S)}try{if(!A.fetchFontIfMissing)throw new Error(`Font is not loaded: ${f}`);const S=await fetch(`${A.fontPath}/${f}.flf`);if(!S.ok)throw new Error(`Network response was not ok: ${S.status}`);const x=await S.text(),W=h.parseFont(f,x);return o&&o(null,W),W}catch(S){const x=S instanceof Error?S:new Error(String(S));if(o)return o(x),null;throw x}},h.loadFontSync=function(I){const o=i$(I);if(c[o])return c[o].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},h.preloadFonts=async function(I,o){try{for(const f of I){const S=i$(f),x=await fetch(`${A.fontPath}/${S}.flf`);if(!x.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${S}, status code: ${x.statusText}`);const W=await x.text();h.parseFont(S,W)}o&&o()}catch(f){const S=f instanceof Error?f:new Error(String(f));if(o){o(S);return}throw f}},h.fonts=function(I){return new Promise(function(o,f){o(au),I&&I(null,au)})},h.fontsSync=function(){return au},h.figFonts=c,h})(),Xs=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `,ws=`flf2a$ 9 8 15 0 20 0 16255 0
Author : myflix
Date   : 2004/9/26 12:46:52
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
- Widened the space character.

Font modified May 26, 2012 by patorjk
- Switched the _ and - character (which were swapped).
- Added the 0xCA0 character
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $##
,---. #
|   | #
|   | #
|   | #
|   | #
|  .' #
\`--'  #
.--.  #
'--'  ##
         #
,--.,--. #
\\  |\\  | #
 \`-' \`-' #
         #
         #
         #
         #
         ##
             #
   ,-. ,-.   #
   | | | |   #
,--| |-| |--.#
'--| |-| |--'#
'--| |-| |--'#
   | | | |   #
   \`-' \`-'   #
             ##
   ,-.    #
 .-| |-.  #
|  | |_/  #
\\  | |.   #
 '-| | '. #
.- | |  | #
| \`| |  / #
 \`-| |'\`  #
   \`-'    ##
      ,-. #
 ,--. / / #
 '--'/ /  #
    / /   #
   / /    #
  / /     #
 / / ,--. #
/ /  '--' #
\`-'       ##
             #
 .-----.     #
/  .-.  \\    #
|  \\_.' /    #
/  .-. ',-.  #
| |   | . /_ #
\\  '-'  _.__)#
 \`----''     #
             ##
     #
,--. #
\\  | #
 \`-' #
     #
     #
     #
     #
     ##
  ,-. #
 /  | #
'  .' #
|  |  #
|  |  #
|  |  #
'  '. #
 \\  | #
  \`-' ##
,-.   #
|  \\  #
'.  ' #
 |  | #
 |  | #
 |  | #
.'  ' #
|  /  #
\`-'   ##
            #
    .-.     #
 .-,| |,-.  #
 _\\ ' ' /_  #
(__     __) #
  / . . \\   #
 \`-'| |\`-'  #
    \`-'     #
            ##
            #
            #
    ,-.     #
    | |     #
,---| |---. #
'---| |---' #
    | |     #
    \`-'     #
            ##
    #
    #
    #
    #
    #
    #
    #
.-. #
',/ ##
          #
          #
          #
   .-')   #
 _(  OO)  #
(,------. #
 '------' #
          #
          ##
    #
    #
    #
    #
    #
    #
    #
.-. #
\`-' ##
      ,-. #
      / / #
     / /  #
    / /   #
   / /    #
  / /     #
 / /      #
/ /       #
\`-'       ##
           #
           #
  .----.   #
 /  ..  \\  #
.  /  \\  . #
|  |  '  | #
'  \\  /  ' #
 \\  \`'  /  #
  \`---''   ##
       #
       #
 .---. #
/_   | #
 |   | #
 |   | #
 |   | #
 |   | #
 \`---' ##
          #
          #
 .-----.  #
/ ,-.   \\ #
'-'  |  | #
   .'  /  #
 .'  /__  #
|       | #
\`-------' ##
          #
          #
 .-----.  #
/  -.   \\ #
'-' _'  | #
   |_  <  #
.-.  |  | #
\\ \`-'   / #
 \`----''  ##
            #
            #
    .---.   #
   / .  |   #
  / /|  |   #
 / / |  |_  #
/  '-'    | #
\`----|  |-' #
     \`--'   ##
          #
          #
.------.  #
|   ___|  #
|  '--.   #
\`---.  '. #
.-   |  | #
| \`-'   / #
 \`----''  ##
          #
          #
  ,--.    #
 /  .'    #
.  / -.   #
| .-.  '  #
' \\  |  | #
\\  \`'  /  #
 \`----'   ##
           #
           #
.--------. #
|   __   ' #
\`--' .  /  #
    /  /   #
   .  /    #
  /  /     #
 \`--'      ##
            #
            #
  .-----.   #
 /  .-.  \\  #
|   \\_.' /  #
 /  .-. '.  #
|  |   |  | #
 \\  '-'  /  #
  \`----''   ##
           #
           #
  .----.   #
 /  ,.  \\  #
|  |  \\  | #
 '  \`-'  ' #
  \`- /  '  #
   ,'  /   #
  \`---'    ##
    #
    #
.-. #
\`-' #
    #
.-. #
\`-' #
    #
    ##
    #
    #
.-. #
'-' #
    #
.-. #
',/ #
    #
    ##
       #
   ,-. #
  / /  #
 / /   #
/ /    #
\\ \\    #
 \\ \\   #
  \\ \\  #
   \`-' ##
        #
        #
,-----. #
'-----' #
        #
,-----. #
'-----' #
        #
        ##
       #
,-.    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
   / / #
  / /  #
 / /   #
\`-'    ##
 ,------.  #
'  .--.  ' #
|  |  |  | #
'--'  |  | #
    __.  | #
   |   .'  #
   |___|   #
   .---.   #
   '---'   ##
          #
          #
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
,----. #
|    | #
|  .-' #
|  |   #
|  |   #
|  |   #
|  '-. #
|    | #
\`----' ##
,-.       #
\\ \\       #
 \\ \\      #
  \\ \\     #
   \\ \\    #
    \\ \\   #
     \\ \\  #
      \\ \\ #
      \`-' ##
,----. #
|    | #
\`-.  | #
  |  | #
  |  | #
  |  | #
.-'  | #
|    | #
\`----' ##
          #
          #
  ,---.   #
 /  \\  \\  #
\`--' \`--' #
          #
          #
          #
          ##
          #
          #
          #
          #
          #
  (\`-.    #
 (OO  )_  #
,------.) #
\`------'  ##
       #
       #
,--.   #
'.  \\  #
  \`--' #
       #
       #
       #
       ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
   ,--. #
  |   | #
  |  .' #
 .'  /  #
<   <   #
 \`.  \\  #
  |  '. #
  |   | #
   \`--' ##
,-. #
| | #
| | #
| | #
| | #
| | #
| | #
| | #
\`-' ##
,--.    #
|   |   #
'.  |   #
  \\  \`  #
   >  > #
  /  .  #
.'  |   #
|   |   #
\`--'    ##
           #
      .--, #
  .--'  /  #
 /  ---\`   #
\`--'       #
           #
           #
           #
           ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##
0xCA0  KANNADA LETTER TTHA
          #
          #
  _ _ _ _)#
 |______/ #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  ##`,Ks=`flf2a$ 6 5 32 15 10
Font name is graffiti.flf
This figlet font designed by Leigh Purdie (purdie@zeus.usq.edu.au)
'fig-fonted' by Leigh Purdie and Tim Maggio (tim@claremont.com)
Date: 5 Mar 1994

---

Font modified May 20, 2012 by patorjk 
- Changed the hardblanks around certain punctuation characters (., and -) to improve smushing.
- Added the 0xCA0 character
$@
$@
$@
$@
$@
$@@
._.@
| |@
| |@
 \\|@
 __@
 \\/@@
/\\/\\@
)/)/@
    @
    @
    @
    @@
   _  _   @
__| || |__@
\\   __   /@
 |  ||  | @
/_  ~~  _\\@
  |_||_|  @@
  ____/\\__@
 /   / /_/@
 \\__/ / \\ @
 / / /   \\@
/_/ /__  /@
  \\/   \\/ @@
 _   /\\ @
/ \\ / / @
\\_// /_ @
  / // \\@
 / / \\_/@
 \\/     @@
  ____   @
 /  _ \\  @
 >  _ </\\@
/  <_\\ \\/@
\\_____\\ \\@
       \\/@@
/\\@
)/@
  @
  @
  @
  @@
$   ___$@
$  /  /$@
$ /  / $@
$(  (  $@
$ \\  \\ $@
$  \\__\\$@@
$___   $@
$\\  \\  $@
$ \\  \\ $@
$  )  )$@
$ /  / $@
$/__/  $@@
$         $@
$ /\\|\\/\\  $@
$_)    (__$@
$\\_     _/$@
$  )    \\ $@
$  \\/\\|\\/ $@@
$          $@
$   .__    $@
$ __|  |___$@
$/__    __/$@
$   |__|   $@
$          $@@
    @
    @
    @
    @
$/\\$@
$)/$@@
         @
         @
$ ______$@
$/_____/$@
$       $@
         @@
    @
    @
    @
    @
$/\\$@
$\\/$@@
$    /\\$@
$   / /$@
$  / / $@
$ / /  $@
$/ /   $@
$\\/    $@@
_______   @
\\   _  \\  @
/  /_\\  \\ @
\\  \\_/   \\@
 \\_____  /@
       \\/ @@
 ____ @
/_   |@
 |   |@
 |   |@
 |___|@
      @@
________  @
\\_____  \\ @
 /  ____/ @
/       \\ @
\\_______ \\@
        \\/@@
________  @
\\_____  \\ @
  _(__  < @
 /       \\@
/______  /@
       \\/ @@
   _____  @
  /  |  | @
 /   |  |_@
/    ^   /@
\\____   | @
     |__| @@
 .________@
 |   ____/@
 |____  \\ @
 /       \\@
/______  /@
       \\/ @@
  ________@
 /  _____/@
/   __  \\ @
\\  |__\\  \\@
 \\_____  /@
       \\/ @@
_________ @
\\______  \\@
    /    /@
   /    / @
  /____/  @
          @@
  ______  @
 /  __  \\ @
 >      < @
/   --   \\@
\\______  /@
       \\/ @@
 ________ @
/   __   \\@
\\____    /@
   /    / @
  /____/  @
          @@
$  $@
$/\\$@
$\\/$@
$/\\$@
$\\/$@
$  $@@
$  $@
$/\\$@
$\\/$@
$/\\$@
$)/$@
$  $@@
$  __$@
$ / /$@
$/ / $@
$\\ \\ $@
$ \\_\\$@
$    $@@
$       $@
$ ______$@
$/_____/$@
$/_____/$@
$       $@
$       $@@
$__  $@
$\\ \\ $@
$ \\ \\$@
$ / /$@
$/_/ $@
$    $@@
_________ @
\\_____   \\@
   /   __/@
  |   |   @
  |___|   @
  <___>   @@
   _____  @
  / ___ \\ @
 / / ._\\ \\@
<  \\_____/@
 \\_____\\  @
          @@
   _____   @
  /  _  \\  @
 /  /_\\  \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
__________ @
\\______   \\@
 |    |  _/@
 |    |   \\@
 |______  /@
        \\/ @@
_________  @
\\_   ___ \\ @
/    \\  \\/ @
\\     \\____@
 \\______  /@
        \\/ @@
________   @
\\______ \\  @
 |    |  \\ @
 |    \`   \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)_ @
 |        \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)  @
 |     \\   @
 \\___  /   @
     \\/    @@
  ________ @
 /  _____/ @
/   \\  ___ @
\\    \\_\\  \\@
 \\______  /@
        \\/ @@
  ___ ___  @
 /   |   \\ @
/    ~    \\@
\\    Y    /@
 \\___|_  / @
       \\/  @@
.___ @
|   |@
|   |@
|   |@
|___|@
     @@
     ____.@
    |    |@
    |    |@
/\\__|    |@
\\________|@
          @@
 ____  __.@
|    |/ _|@
|      <  @
|    |  \\ @
|____|__ \\@
        \\/@@
.____     @
|    |    @
|    |    @
|    |___ @
|_______ \\@
        \\/@@
   _____   @
  /     \\  @
 /  \\ /  \\ @
/    Y    \\@
\\____|__  /@
        \\/ @@
 _______   @
 \\      \\  @
 /   |   \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
________   @
\\_____  \\  @
 /   |   \\ @
/    |    \\@
\\_______  /@
        \\/ @@
__________ @
\\______   \\@
 |     ___/@
 |    |    @
 |____|    @
           @@
________   @
\\_____  \\  @
 /  / \\  \\ @
/   \\_/.  \\@
\\_____\\ \\_/@
       \\__>@@
__________ @
\\______   \\@
 |       _/@
 |    |   \\@
 |____|_  /@
        \\/ @@
  _________@
 /   _____/@
 \\_____  \\ @
 /        \\@
/_______  /@
        \\/ @@
___________@
\\__    ___/@
  |    |   @
  |    |   @
  |____|   @
           @@
 ____ ___ @
|    |   \\@
|    |   /@
|    |  / @
|______/  @
          @@
____   ____@
\\   \\ /   /@
 \\   Y   / @
  \\     /  @
   \\___/   @
           @@
 __      __ @
/  \\    /  \\@
\\   \\/\\/   /@
 \\        / @
  \\__/\\  /  @
       \\/   @@
____  ___@
\\   \\/  /@
 \\     / @
 /     \\ @
/___/\\  \\@
      \\_/@@
_____.___.@
\\__  |   |@
 /   |   |@
 \\____   |@
 / ______|@
 \\/       @@
__________@
\\____    /@
  /     / @
 /     /_ @
/_______ \\@
        \\/@@
$.____ $@
$|   _|$@
$|  |  $@
$|  |  $@
$|  |_ $@
$|____|$@@
/\\    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\ \\@
    \\/@@
$ ____.$@
$|_   |$@
$  |  |$@
$  |  |$@
$ _|  |$@
$|____|$@@
$ /\\ $@
$/  \\$@
$\\/\\/$@
$    $@
$    $@
$    $@@
       @
       @
       @
       @
 ______@
/_____/@@
/\\@
\\(@
  @
  @
  @
  @@
        @
_____   @
\\__  \\  @
 / __ \\_@
(____  /@
     \\/ @@
___.    @
\\_ |__  @
 | __ \\ @
 | \\_\\ \\@
 |___  /@
     \\/ @@
        @
  ____  @
_/ ___\\ @
\\  \\___ @
 \\___  >@
     \\/ @@
    .___@
  __| _/@
 / __ | @
/ /_/ | @
\\____ | @
     \\/ @@
        @
  ____  @
_/ __ \\ @
\\  ___/ @
 \\___  >@
     \\/ @@
  _____ @
_/ ____\\@
\\   __\\ @
 |  |   @
 |__|   @
        @@
         @
   ____  @
  / ___\\ @
 / /_/  >@
 \\___  / @
/_____/  @@
.__     @
|  |__  @
|  |  \\ @
|   Y  \\@
|___|  /@
     \\/ @@
.__ @
|__|@
|  |@
|  |@
|__|@
    @@
     __ @
    |__|@
    |  |@
    |  |@
/\\__|  |@
\\______|@@
 __    @
|  | __@
|  |/ /@
|    < @
|__|_ \\@
     \\/@@
.__   @
|  |  @
|  |  @
|  |__@
|____/@
      @@
         @
  _____  @
 /     \\ @
|  Y Y  \\@
|__|_|  /@
      \\/ @@
        @
  ____  @
 /    \\ @
|   |  \\@
|___|  /@
     \\/ @@
        @
  ____  @
 /  _ \\ @
(  <_> )@
 \\____/ @
        @@
        @
______  @
\\____ \\ @
|  |_> >@
|   __/ @
|__|    @@
        @
  ______@
 / ____/@
< <_|  |@
 \\__   |@
    |__|@@
        @
_______ @
\\_  __ \\@
 |  | \\/@
 |__|   @
        @@
        @
  ______@
 /  ___/@
 \\___ \\ @
/____  >@
     \\/ @@
  __   @
_/  |_ @
\\   __\\@
 |  |  @
 |__|  @
       @@
       @
 __ __ @
|  |  \\@
|  |  /@
|____/ @
       @@
       @
___  __@
\\  \\/ /@
 \\   / @
  \\_/  @
       @@
         @
__  _  __@
\\ \\/ \\/ /@
 \\     / @
  \\/\\_/  @
         @@
        @
___  ___@
\\  \\/  /@
 >    < @
/__/\\_ \\@
      \\/@@
        @
 ___.__.@
<   |  |@
 \\___  |@
 / ____|@
 \\/     @@
        @
________@
\\___   /@
 /    / @
/_____ \\@
      \\/@@
$ ___$@
$/ / $@
$\\ \\ $@
$< < $@
$/ / $@
$\\_\\_$@@
$._.$@
$| |$@
$|_|$@
$|-|$@
$| |$@
$|_|$@@
$___ $@
$ \\ \\$@
$ / /$@
$ > >$@
$ \\ \\$@
$_/_/$@@
$ ___    $@
$/ _ \\_/\\$@
$\\/ \\___/$@
$        $@
$        $@
$        $@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
0xCA0  KANNADA LETTER TTHA
  _____)@
 /_____/@
 /    \\ @
(  ()  )@
$\\____/$@
        @@`,js=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,Fs=`flf2a$ 5 4 13 15 10 0 22415
Small by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
      @@
    _ _   @
  _| | |_ @
 |_  .  _|@
 |_     _|@
   |_|_|  @@
     @
  ||_@
 (_-<@
 / _/@
  || @@
  _  __ @
 (_)/ / @
   / /_ @
  /_/(_)@
        @@
  __     @
 / _|___ @
 > _|_ _|@
 \\_____| @
         @@
  _ @
 ( )@
 |/ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
 /_/ @@
     @
 _/\\_@
 >  <@
  \\/ @
     @@
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
  _ @
 ( )@
 |/ @@
      @
  ___ @
 |___|@
   $  @
      @@
    @
    @
  _ @
 (_)@
    @@
    __@
   / /@
  / / @
 /_/  @
      @@
   __  @
  /  \\ @
 | () |@
  \\__/ @
       @@
  _ @
 / |@
 | |@
 |_|@
    @@
  ___ @
 |_  )@
  / / @
 /___|@
      @@
  ____@
 |__ /@
  |_ \\@
 |___/@
      @@
  _ _  @
 | | | @
 |_  _|@
   |_| @
       @@
  ___ @
 | __|@
 |__ \\@
 |___/@
      @@
   __ @
  / / @
 / _ \\@
 \\___/@
      @@
  ____ @
 |__  |@
   / / @
  /_/  @
       @@
  ___ @
 ( _ )@
 / _ \\@
 \\___/@
      @@
  ___ @
 / _ \\@
 \\_, /@
  /_/ @
      @@
  _ @
 (_)@
  _ @
 (_)@
    @@
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 < < @
  \\_\\@
     @@
      @
  ___ @
 |___|@
 |___|@
      @@
 __  @
 \\ \\ @
  > >@
 /_/ @
     @@
  ___ @
 |__ \\@
   /_/@
  (_) @
      @@
   ____  @
  / __ \\ @
 / / _\` |@
 \\ \\__,_|@
  \\____/ @@
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  ___ @
 | _ )@
 | _ \\@
 |___/@
      @@
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
  ___  @
 |   \\ @
 | |) |@
 |___/ @
       @@
  ___ @
 | __|@
 | _| @
 |___|@
      @@
  ___ @
 | __|@
 | _| @
 |_|  @
      @@
   ___ @
  / __|@
 | (_ |@
  \\___|@
       @@
  _  _ @
 | || |@
 | __ |@
 |_||_|@
       @@
  ___ @
 |_ _|@
  | | @
 |___|@
      @@
     _ @
  _ | |@
 | || |@
  \\__/ @
       @@
  _  __@
 | |/ /@
 | ' < @
 |_|\\_\\@
       @@
  _    @
 | |   @
 | |__ @
 |____|@
       @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 |_|  |_|@
         @@
  _  _ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  ___ @
 | _ \\@
 |  _/@
 |_|  @
      @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__\\_\\@
        @@
  ___ @
 | _ \\@
 |   /@
 |_|_\\@
      @@
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _____ @
 |_   _|@
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
 __      __@
 \\ \\    / /@
  \\ \\/\\/ / @
   \\_/\\_/  @
           @@
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
  ____@
 |_  /@
  / / @
 /___|@
      @@
  __ @
 | _|@
 | | @
 | | @
 |__|@@
 __   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
  __ @
 |_ |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
     @@
      @
      @
      @
  ___ @
 |___|@@
  _ @
 ( )@
  \\|@
  $ @
    @@
       @
  __ _ @
 / _\` |@
 \\__,_|@
       @@
  _    @
 | |__ @
 | '_ \\@
 |_.__/@
       @@
     @
  __ @
 / _|@
 \\__|@
     @@
     _ @
  __| |@
 / _\` |@
 \\__,_|@
       @@
      @
  ___ @
 / -_)@
 \\___|@
      @@
   __ @
  / _|@
 |  _|@
 |_|  @
      @@
       @
  __ _ @
 / _\` |@
 \\__, |@
 |___/ @@
  _    @
 | |_  @
 | ' \\ @
 |_||_|@
       @@
  _ @
 (_)@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
  _/ |@
 |__/ @@
  _   @
 | |__@
 | / /@
 |_\\_\\@
      @@
  _ @
 | |@
 | |@
 |_|@
    @@
        @
  _ __  @
 | '  \\ @
 |_|_|_|@
        @@
       @
  _ _  @
 | ' \\ @
 |_||_|@
       @@
      @
  ___ @
 / _ \\@
 \\___/@
      @@
       @
  _ __ @
 | '_ \\@
 | .__/@
 |_|   @@
       @
  __ _ @
 / _\` |@
 \\__, |@
    |_|@@
      @
  _ _ @
 | '_|@
 |_|  @
      @@
     @
  ___@
 (_-<@
 /__/@
     @@
  _   @
 | |_ @
 |  _|@
  \\__|@
      @@
       @
  _  _ @
 | || |@
  \\_,_|@
       @@
      @
 __ __@
 \\ V /@
  \\_/ @
      @@
         @
 __ __ __@
 \\ V  V /@
  \\_/\\_/ @
         @@
      @
 __ __@
 \\ \\ /@
 /_\\_\\@
      @@
       @
  _  _ @
 | || |@
  \\_, |@
  |__/ @@
     @
  ___@
 |_ /@
 /__|@
     @@
    __@
   / /@
 _| | @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | |_@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
      @@
  _  _ @
 (_)(_)@
  /--\\ @
 /_/\\_\\@
       @@
  _  _ @
 (_)(_)@
 / __ \\@
 \\____/@
       @@
  _   _ @
 (_) (_)@
 | |_| |@
  \\___/ @
        @@
  _  _ @
 (_)(_)@
 / _\` |@
 \\__,_|@
       @@
  _   _ @
 (_)_(_)@
  / _ \\ @
  \\___/ @
        @@
  _  _ @
 (_)(_)@
 | || |@
  \\_,_|@
       @@
   ___ @
  / _ \\@
 | |< <@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 |_|@
    @@
162  CENT SIGN
     @
  || @
 / _)@
 \\ _)@
  || @@
163  POUND SIGN
    __  @
  _/ _\\ @
 |_ _|_ @
 (_,___|@
        @@
164  CURRENCY SIGN
 /\\_/\\@
 \\ . /@
 / _ \\@
 \\/ \\/@
      @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
   / _)@
  /\\ \\ @
  \\ \\/ @
 (__/  @@
168  DIAERESIS
  _  _ @
 (_)(_)@
  $  $ @
  $  $ @
       @@
169  COPYRIGHT SIGN
   ____  @
  / __ \\ @
 / / _| \\@
 \\ \\__| /@
  \\____/ @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 < < < @
  \\_\\_\\@
       @@
172  NOT SIGN
  ____ @
 |__  |@
    |_|@
   $   @
       @@
173  SOFT HYPHEN
     @
  __ @
 |__|@
   $ @
     @@
174  REGISTERED SIGN
   ____  @
  / __ \\ @
 / | -) \\@
 \\ ||\\\\ /@
  \\____/ @@
175  MACRON
  ___ @
 |___|@
   $  @
   $  @
      @@
176  DEGREE SIGN
  _ @
 /.\\@
 \\_/@
  $ @
    @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@@
178  SUPERSCRIPT TWO
  __ @
 |_ )@
 /__|@
   $ @
     @@
179  SUPERSCRIPT THREE
  ___@
 |_ /@
 |__)@
   $ @
     @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
    @@
181  MICRO SIGN
       @
  _  _ @
 | || |@
 | .,_|@
 |_|   @@
182  PILCROW SIGN
  ____ @
 /    |@
 \\_ | |@
  |_|_|@
       @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
    @@
184  CEDILLA
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  > > >@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _  __   @
 / |/ /__ @
 |_/ /_' |@
  /_/  |_|@
          @@
189  VULGAR FRACTION ONE HALF
  _  __  @
 / |/ /_ @
 |_/ /_ )@
  /_//__|@
         @@
190  VULGAR FRACTION THREE QUARTERS
  ___ __   @
 |_ // /__ @
 |__) /_' |@
   /_/  |_|@
           @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
  __   @
  \\_\\  @
  /--\\ @
 /_/\\_\\@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __ @
   /_/ @
  /--\\ @
 /_/\\_\\@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   /\\  @
  |/\\| @
  /--\\ @
 /_/\\_\\@
       @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/|@
  |/\\/ @
  /--\\ @
 /_/\\_\\@
       @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _  _ @
 (_)(_)@
  /--\\ @
 /_/\\_\\@
       @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   __  @
  (()) @
  /--\\ @
 /_/\\_\\@
       @@
198  LATIN CAPITAL LETTER AE
    ____ @
   /, __|@
  / _ _| @
 /_/|___|@
         @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
  __ @
  \\_\\@
 | -<@
 |__<@
     @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   __@
  /_/@
 | -<@
 |__<@
     @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
  /\\ @
 |/\\|@
 | -<@
 |__<@
     @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _  _ @
 (_)(_)@
  | -< @
  |__< @
       @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
   ____  @
  | __ \\ @
 |_ _|) |@
  |____/ @
         @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  __   @
  \\_\\_ @
 / __ \\@
 \\____/@
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __ @
  _/_/ @
 / __ \\@
 \\____/@
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 / __ \\@
 \\____/@
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/|@
  |/\\/ @
 / __ \\@
 \\____/@
       @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _  _ @
 (_)(_)@
 / __ \\@
 \\____/@
       @@
215  MULTIPLICATION SIGN
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
 _/_/_@
 \\ V /@
  |_| @
      @@
222  LATIN CAPITAL LETTER THORN
  _   @
 | |_ @
 | -_)@
 |_|  @
      @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |< <@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
  __   @
  \\_\\_ @
 / _\` |@
 \\__,_|@
       @@
225  LATIN SMALL LETTER A WITH ACUTE
    __ @
  _/_/ @
 / _\` |@
 \\__,_|@
       @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 / _\` |@
 \\__,_|@
       @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/|@
  |/\\/ @
 / _\` |@
 \\__,_|@
       @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _  _ @
 (_)(_)@
 / _\` |@
 \\__,_|@
       @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   __  @
  (()) @
 / _\` |@
 \\__,_|@
       @@
230  LATIN SMALL LETTER AE
         @
  __ ___ @
 / _\` -_)@
 \\__,___|@
         @@
231  LATIN SMALL LETTER C WITH CEDILLA
     @
  __ @
 / _|@
 \\__|@
  )_)@@
232  LATIN SMALL LETTER E WITH GRAVE
  __  @
  \\_\\ @
 / -_)@
 \\___|@
      @@
233  LATIN SMALL LETTER E WITH ACUTE
   __ @
  /_/ @
 / -_)@
 \\___|@
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 / -_)@
 \\___|@
      @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / -_) @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
  \\\\/\\ @
  \\/\\\\ @
 / _\` |@
 \\___/ @
       @@
241  LATIN SMALL LETTER N WITH TILDE
  /\\/| @
 |/\\/  @
 | ' \\ @
 |_||_|@
       @@
242  LATIN SMALL LETTER O WITH GRAVE
  __  @
  \\_\\ @
 / _ \\@
 \\___/@
      @@
243  LATIN SMALL LETTER O WITH ACUTE
   __ @
  /_/ @
 / _ \\@
 \\___/@
      @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 / _ \\@
 \\___/@
      @@
245  LATIN SMALL LETTER O WITH TILDE
  /\\/|@
 |/\\/ @
 / _ \\@
 \\___/@
      @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
  \\___/ @
        @@
247  DIVISION SIGN
   _  @
  (_) @
 |___|@
  (_) @
      @@
248  LATIN SMALL LETTER O WITH STROKE
      @
  ___ @
 / //\\@
 \\//_/@
      @@
249  LATIN SMALL LETTER U WITH GRAVE
  __   @
  \\_\\_ @
 | || |@
  \\_,_|@
       @@
250  LATIN SMALL LETTER U WITH ACUTE
    __ @
  _/_/ @
 | || |@
  \\_,_|@
       @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 | || |@
  \\_,_|@
       @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _  _ @
 (_)(_)@
 | || |@
  \\_,_|@
       @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __ @
  _/_/ @
 | || |@
  \\_, |@
  |__/ @@
254  LATIN SMALL LETTER THORN
  _    @
 | |__ @
 | '_ \\@
 | .__/@
 |_|   @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _  _ @
 (_)(_)@
 | || |@
  \\_, |@
  |__/ @@
`,qs=`flf2a$ 8 8 20 -1 6
3-D font created by Daniel Henninger <dahennin@eos.ncsu.edu>

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@
$    $@@
 **@
/**@
/**@
/**@
/**@
// @
 **@
// @@
 *  *@
/* /*@
/  / @
     @
     @
     @
     @
     @@
             @
   **    **  @
 ************@
///**////**/ @
  /**   /**  @
 ************@
///**////**/ @
  //    //   @@
   *  @
 *****@
/*/*/ @
/*****@
///*/*@
 *****@
///*/ @
  /   @@
         @
 **   ** @
//   **  @
    **   @
   **    @
  **     @
 **   ** @
//   //  @@
   **   @
  */ *  @
 / **   @
  */ * *@
 *  / * @
/*   /* @
/ **** *@
 //// / @@
 **@
//*@
 / @
   @
   @
   @
   @
   @@
   **@
  ** @
 **  @
/**  @
/**  @
//** @
 //**@
  // @@
 **  @
//** @
 //**@
  /**@
  /**@
  ** @
 **  @
//   @@
       **      @
  **  /**   ** @
 //** /**  **  @
 **************@
///**//**//**/ @
  **  /** //** @
 //   /**  //  @
      //       @@
           @
      *    @
     /*    @
  *********@
 /////*/// @
     /*    @
     /     @
           @@
   @
   @
   @
   @
   @
 **@
//*@
 / @@
      @
      @
      @
 *****@
///// @
      @
      @
      @@
   @
   @
   @
   @
   @
 **@
/**@
// @@
       **@
      ** @
     **  @
    **   @
   **    @
  **     @
 **      @
//       @@
  **** @
 *///**@
/*  */*@
/* * /*@
/**  /*@
/*   /*@
/ **** @
 ////  @@
  ** @
 *** @
//** @
 /** @
 /** @
 /** @
 ****@
//// @@
  **** @
 */// *@
/    /*@
   *** @
  *//  @
 *     @
/******@
////// @@
  **** @
 */// *@
/    /*@
   *** @
  /// *@
 *   /*@
/ **** @
 ////  @@
    ** @
   */* @
  * /* @
 ******@
/////* @
    /* @
    /* @
    /  @@
 ******@
/*//// @
/***** @
///// *@
     /*@
 *   /*@
/ **** @
 ////  @@
  **** @
 */// *@
/*   / @
/***** @
/*/// *@
/*   /*@
/ **** @
 ////  @@
 ******@
//////*@
     /*@
     * @
    *  @
   *   @
  *    @
 /     @@
  **** @
 */// *@
/*   /*@
/ **** @
 */// *@
/*   /*@
/ **** @
 ////  @@
  **** @
 */// *@
/*   /*@
/ **** @
 ///*  @
   *   @
  *    @
 /     @@
   @
   @
   @
   @
 **@
// @
 **@
// @@
   @
   @
   @
 **@
// @
 **@
//*@
 / @@
       **@
     **/ @
   **/   @
 **/     @
// **    @
  // **  @
    // **@
      // @@
       @
       @
 ******@
////// @
 ******@
////// @
       @
       @@
 **      @
// **    @
  // **  @
    // **@
     **/ @
   **/   @
 **/     @
//       @@
  **** @
 **//**@
/** /**@
//  ** @
   **  @
  //   @
   **  @
  //   @@
  **** @
 */// *@
/* **/*@
/*/* /*@
/*/ ** @
/* //  @
/ *****@
 ///// @@
     **    @
    ****   @
   **//**  @
  **  //** @
 **********@
/**//////**@
/**     /**@
//      // @@
 ******  @
/*////** @
/*   /** @
/******  @
/*//// **@
/*    /**@
/******* @
///////  @@
   ****** @
  **////**@
 **    // @
/**       @
/**       @
//**    **@
 //****** @
  //////  @@
 *******  @
/**////** @
/**    /**@
/**    /**@
/**    /**@
/**    ** @
/*******  @
///////   @@
 ********@
/**///// @
/**      @
/******* @
/**////  @
/**      @
/********@
//////// @@
 ********@
/**///// @
/**      @
/******* @
/**////  @
/**      @
/**      @
//       @@
   ******** @
  **//////**@
 **      // @
/**         @
/**    *****@
//**  ////**@
 //******** @
  ////////  @@
 **      **@
/**     /**@
/**     /**@
/**********@
/**//////**@
/**     /**@
/**     /**@
//      // @@
 **@
/**@
/**@
/**@
/**@
/**@
/**@
// @@
      **@
     /**@
     /**@
     /**@
     /**@
 **  /**@
//***** @
 /////  @@
 **   **@
/**  ** @
/** **  @
/****   @
/**/**  @
/**//** @
/** //**@
//   // @@
 **      @
/**      @
/**      @
/**      @
/**      @
/**      @
/********@
//////// @@
 ****     ****@
/**/**   **/**@
/**//** ** /**@
/** //***  /**@
/**  //*   /**@
/**   /    /**@
/**        /**@
//         // @@
 ****     **@
/**/**   /**@
/**//**  /**@
/** //** /**@
/**  //**/**@
/**   //****@
/**    //***@
//      /// @@
   *******  @
  **/////** @
 **     //**@
/**      /**@
/**      /**@
//**     ** @
 //*******  @
  ///////   @@
 ******* @
/**////**@
/**   /**@
/******* @
/**////  @
/**      @
/**      @
//       @@
   *******   @
  **/////**  @
 **     //** @
/**      /** @
/**    **/** @
//**  // **  @
 //******* **@
  /////// // @@
 *******  @
/**////** @
/**   /** @
/*******  @
/**///**  @
/**  //** @
/**   //**@
//     // @@
  ********@
 **////// @
/**       @
/*********@
////////**@
       /**@
 ******** @
////////  @@
 **********@
/////**/// @
    /**    @
    /**    @
    /**    @
    /**    @
    /**    @
    //     @@
 **     **@
/**    /**@
/**    /**@
/**    /**@
/**    /**@
/**    /**@
//******* @
 ///////  @@
 **      **@
/**     /**@
/**     /**@
//**    ** @
 //**  **  @
  //****   @
   //**    @
    //     @@
 **       **@
/**      /**@
/**   *  /**@
/**  *** /**@
/** **/**/**@
/**** //****@
/**/   ///**@
//       // @@
 **     **@
//**   ** @
 //** **  @
  //***   @
   **/**  @
  ** //** @
 **   //**@
//     // @@
 **    **@
//**  ** @
 //****  @
  //**   @
   /**   @
   /**   @
   /**   @
   //    @@
 ********@
//////** @
     **  @
    **   @
   **    @
  **     @
 ********@
//////// @@
 *****@
/**// @
/**   @
/**   @
/**   @
/**   @
/*****@
///// @@
 **      @
//**     @
 //**    @
  //**   @
   //**  @
    //** @
     //**@
      // @@
 *****@
////**@
   /**@
   /**@
   /**@
   /**@
 *****@
///// @@
     **    @
   **/ **  @
 **   // **@
//      // @
           @
           @
           @
           @@
      @
      @
      @
      @
      @
      @
 *****@
///// @@
 **@
/* @
/  @
   @
   @
   @
   @
   @@
          @
          @
  ******  @
 //////** @
  ******* @
 **////** @
//********@
 //////// @@
 **     @
/**     @
/**     @
/****** @
/**///**@
/**  /**@
/****** @
/////   @@
        @
        @
  ***** @
 **///**@
/**  // @
/**   **@
//***** @
 /////  @@
      **@
     /**@
     /**@
  ******@
 **///**@
/**  /**@
//******@
 ////// @@
        @
        @
  ***** @
 **///**@
/*******@
/**//// @
//******@
 ////// @@
   ****@
  /**/ @
 ******@
///**/ @
  /**  @
  /**  @
  /**  @
  //   @@
        @
  ***** @
 **///**@
/**  /**@
//******@
 /////**@
  ***** @
 /////  @@
 **     @
/**     @
/**     @
/****** @
/**///**@
/**  /**@
/**  /**@
//   // @@
 **@
// @
 **@
/**@
/**@
/**@
/**@
// @@
    **@
   // @
    **@
   /**@
   /**@
 **/**@
//*** @
 ///  @@
 **    @
/**    @
/**  **@
/** ** @
/****  @
/**/** @
/**//**@
//  // @@
  **@
 /**@
 /**@
 /**@
 /**@
 /**@
 ***@
/// @@
            @
            @
 ********** @
//**//**//**@
 /** /** /**@
 /** /** /**@
 *** /** /**@
///  //  // @@
         @
         @
 ******* @
//**///**@
 /**  /**@
 /**  /**@
 ***  /**@
///   // @@
         @
         @
  ****** @
 **////**@
/**   /**@
/**   /**@
//****** @
 //////  @@
        @
 ****** @
/**///**@
/**  /**@
/****** @
/**///  @
/**     @
//      @@
        @
  ****  @
 **//** @
/** /** @
//***** @
 ////** @
    /***@
    /// @@
       @
       @
 ******@
//**//*@
 /** / @
 /**   @
/***   @
///    @@
        @
        @
  ******@
 **//// @
//***** @
 /////**@
 ****** @
//////  @@
   **  @
  /**  @
 ******@
///**/ @
  /**  @
  /**  @
  //** @
   //  @@
        @
        @
 **   **@
/**  /**@
/**  /**@
/**  /**@
//******@
 ////// @@
         @
         @
 **    **@
/**   /**@
//** /** @
 //****  @
  //**   @
   //    @@
           @
           @
 ***     **@
//**  * /**@
 /** ***/**@
 /****/****@
 ***/ ///**@
///    /// @@
        @
        @
 **   **@
//** ** @
 //***  @
  **/** @
 ** //**@
//   // @@
         @
  **   **@
 //** ** @
  //***  @
   /**   @
   **    @
  **     @
 //      @@
       @
       @
 ******@
////** @
   **  @
  **   @
 ******@
////// @@
    ***@
   **/ @
  /**  @
 ***   @
///**  @
  /**  @
  //***@
   /// @@
 *@
/*@
/*@
/ @
 *@
/*@
/*@
/ @@
 ***   @
///**  @
  /**  @
  //***@
   **/ @
  /**  @
 ***   @
///    @@
 **  *** @
//***//**@
 ///  // @
         @
         @
         @
         @
         @@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@@
`,Qs=`flf2a$ 7 7 13 0 7 0 64 0
Font Author: ?

More Info:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
██╗@
██║@
██║@
╚═╝@
██╗@
╚═╝@
   @@
@
@
@
@
@
@
@@
 ██╗ ██╗ @
████████╗@
╚██╔═██╔╝@
████████╗@
╚██╔═██╔╝@
 ╚═╝ ╚═╝ @
         @@
▄▄███▄▄·@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚═▀▀▀══╝@
        @@
██╗ ██╗@
╚═╝██╔╝@
  ██╔╝ @
 ██╔╝  @
██╔╝██╗@
╚═╝ ╚═╝@
       @@
   ██╗   @
   ██║   @
████████╗@
██╔═██╔═╝@
██████║  @
╚═════╝  @
         @@
@
@
@
@
@
@
@@
 ██╗@
██╔╝@
██║ @
██║ @
╚██╗@
 ╚═╝@
    @@
██╗ @
╚██╗@
 ██║@
 ██║@
██╔╝@
╚═╝ @
    @@
      @
▄ ██╗▄@
 ████╗@
▀╚██╔▀@
  ╚═╝ @
      @
      @@
@
@
@
@
@
@
@@
   @
   @
   @
   @
▄█╗@
╚═╝@
   @@
      @
      @
█████╗@
╚════╝@
      @
      @
      @@
   @
   @
   @
   @
██╗@
╚═╝@
   @@
    ██╗@
   ██╔╝@
  ██╔╝ @
 ██╔╝  @
██╔╝   @
╚═╝    @
       @@
 ██████╗ @
██╔═████╗@
██║██╔██║@
████╔╝██║@
╚██████╔╝@
 ╚═════╝ @
         @@
 ██╗@
███║@
╚██║@
 ██║@
 ██║@
 ╚═╝@
    @@
██████╗ @
╚════██╗@
 █████╔╝@
██╔═══╝ @
███████╗@
╚══════╝@
        @@
██████╗ @
╚════██╗@
 █████╔╝@
 ╚═══██╗@
██████╔╝@
╚═════╝ @
        @@
██╗  ██╗@
██║  ██║@
███████║@
╚════██║@
     ██║@
     ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
 ██████╗ @
██╔════╝ @
███████╗ @
██╔═══██╗@
╚██████╔╝@
 ╚═════╝ @
         @@
███████╗@
╚════██║@
    ██╔╝@
   ██╔╝ @
   ██║  @
   ╚═╝  @
        @@
 █████╗ @
██╔══██╗@
╚█████╔╝@
██╔══██╗@
╚█████╔╝@
 ╚════╝ @
        @@
 █████╗ @
██╔══██╗@
╚██████║@
 ╚═══██║@
 █████╔╝@
 ╚════╝ @
        @@
   @
██╗@
╚═╝@
██╗@
╚═╝@
   @
   @@
   @
██╗@
╚═╝@
▄█╗@
▀═╝@
   @
   @@
  ██╗@
 ██╔╝@
██╔╝ @
╚██╗ @
 ╚██╗@
  ╚═╝@
     @@
@
@
@
@
@
@
@@
██╗  @
╚██╗ @
 ╚██╗@
 ██╔╝@
██╔╝ @
╚═╝  @
     @@
██████╗ @
╚════██╗@
  ▄███╔╝@
  ▀▀══╝ @
  ██╗   @
  ╚═╝   @
        @@
 ██████╗ @
██╔═══██╗@
██║██╗██║@
██║██║██║@
╚█║████╔╝@
 ╚╝╚═══╝ @
         @@
 █████╗ @
██╔══██╗@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██████╔╝@
╚═════╝ @
        @@
 ██████╗@
██╔════╝@
██║     @
██║     @
╚██████╗@
 ╚═════╝@
        @@
██████╗ @
██╔══██╗@
██║  ██║@
██║  ██║@
██████╔╝@
╚═════╝ @
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
███████╗@
╚══════╝@
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔════╝ @
██║  ███╗@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗  ██╗@
██║  ██║@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██╗@
██║@
██║@
██║@
██║@
╚═╝@
   @@
     ██╗@
     ██║@
     ██║@
██   ██║@
╚█████╔╝@
 ╚════╝ @
        @@
██╗  ██╗@
██║ ██╔╝@
█████╔╝ @
██╔═██╗ @
██║  ██╗@
╚═╝  ╚═╝@
        @@
██╗     @
██║     @
██║     @
██║     @
███████╗@
╚══════╝@
        @@
███╗   ███╗@
████╗ ████║@
██╔████╔██║@
██║╚██╔╝██║@
██║ ╚═╝ ██║@
╚═╝     ╚═╝@
           @@
███╗   ██╗@
████╗  ██║@
██╔██╗ ██║@
██║╚██╗██║@
██║ ╚████║@
╚═╝  ╚═══╝@
          @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔═══╝ @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║▄▄ ██║@
╚██████╔╝@
 ╚══▀▀═╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██║  ██║@
╚═╝  ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
████████╗@
╚══██╔══╝@
   ██║   @
   ██║   @
   ██║   @
   ╚═╝   @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚═══╝  @
         @@
██╗    ██╗@
██║    ██║@
██║ █╗ ██║@
██║███╗██║@
╚███╔███╔╝@
 ╚══╝╚══╝ @
          @@
██╗  ██╗@
╚██╗██╔╝@
 ╚███╔╝ @
 ██╔██╗ @
██╔╝ ██╗@
╚═╝  ╚═╝@
        @@
██╗   ██╗@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚██╔╝  @
   ██║   @
   ╚═╝   @
         @@
███████╗@
╚══███╔╝@
  ███╔╝ @
 ███╔╝  @
███████╗@
╚══════╝@
        @@
███╗@
██╔╝@
██║ @
██║ @
███╗@
╚══╝@
    @@
@
@
@
@
@
@
@@
███╗@
╚██║@
 ██║@
 ██║@
███║@
╚══╝@
    @@
 ███╗ @
██╔██╗@
╚═╝╚═╝@
      @
      @
      @
      @@
        @
        @
        @
        @
███████╗@
╚══════╝@
        @@
@
@
@
@
@
@
@@
 █████╗ @
██╔══██╗@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██████╔╝@
╚═════╝ @
        @@
 ██████╗@
██╔════╝@
██║     @
██║     @
╚██████╗@
 ╚═════╝@
        @@
██████╗ @
██╔══██╗@
██║  ██║@
██║  ██║@
██████╔╝@
╚═════╝ @
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
███████╗@
╚══════╝@
        @@
███████╗@
██╔════╝@
█████╗  @
██╔══╝  @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔════╝ @
██║  ███╗@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗  ██╗@
██║  ██║@
███████║@
██╔══██║@
██║  ██║@
╚═╝  ╚═╝@
        @@
██╗@
██║@
██║@
██║@
██║@
╚═╝@
   @@
     ██╗@
     ██║@
     ██║@
██   ██║@
╚█████╔╝@
 ╚════╝ @
        @@
██╗  ██╗@
██║ ██╔╝@
█████╔╝ @
██╔═██╗ @
██║  ██╗@
╚═╝  ╚═╝@
        @@
██╗     @
██║     @
██║     @
██║     @
███████╗@
╚══════╝@
        @@
███╗   ███╗@
████╗ ████║@
██╔████╔██║@
██║╚██╔╝██║@
██║ ╚═╝ ██║@
╚═╝     ╚═╝@
           @@
███╗   ██╗@
████╗  ██║@
██╔██╗ ██║@
██║╚██╗██║@
██║ ╚████║@
╚═╝  ╚═══╝@
          @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔═══╝ @
██║     @
╚═╝     @
        @@
 ██████╗ @
██╔═══██╗@
██║   ██║@
██║▄▄ ██║@
╚██████╔╝@
 ╚══▀▀═╝ @
         @@
██████╗ @
██╔══██╗@
██████╔╝@
██╔══██╗@
██║  ██║@
╚═╝  ╚═╝@
        @@
███████╗@
██╔════╝@
███████╗@
╚════██║@
███████║@
╚══════╝@
        @@
████████╗@
╚══██╔══╝@
   ██║   @
   ██║   @
   ██║   @
   ╚═╝   @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
██║   ██║@
╚██████╔╝@
 ╚═════╝ @
         @@
██╗   ██╗@
██║   ██║@
██║   ██║@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚═══╝  @
         @@
██╗    ██╗@
██║    ██║@
██║ █╗ ██║@
██║███╗██║@
╚███╔███╔╝@
 ╚══╝╚══╝ @
          @@
██╗  ██╗@
╚██╗██╔╝@
 ╚███╔╝ @
 ██╔██╗ @
██╔╝ ██╗@
╚═╝  ╚═╝@
        @@
██╗   ██╗@
╚██╗ ██╔╝@
 ╚████╔╝ @
  ╚██╔╝  @
   ██║   @
   ╚═╝   @
         @@
███████╗@
╚══███╔╝@
  ███╔╝ @
 ███╔╝  @
███████╗@
╚══════╝@
        @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@`,Zs=`flf2a$ 8 7 54 0 12 0 64 185
banner.flf version 2 by Ryan Youck (youck@cs.uregina.ca)
(From a unix program called banner)
I am not responsible for use of this font  
Thanks to Glenn Chappell for his help
Katakana characters by Vinney Thai <ssfiit@eris.cs.umb.edu>
Cyrillic characters from "koi8x8" BDF font.
Date: August 11, 1994

Merged by John Cowan <cowan@ccil.org>
Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@@
 ###$@
 ###$@
 ###$@
  # $@
    $@
 ###$@
 ###$@
    $@@
 ### ###$@
 ### ###$@
  #   # $@
 $      $@
 $      $@
        $@
        $@
        $@@
   # #  $@
   # #  $@
 #######$@
   # #  $@
 #######$@
   # #  $@
   # #  $@
        $@@
  ##### $@
 #  #  #$@
 #  #   $@
  ##### $@
    #  #$@
 #  #  #$@
  ##### $@
        $@@
 ###   #$@
 # #  # $@
 ### #  $@
    #   $@
   # ###$@
  #  # #$@
 #   ###$@
        $@@
   ##   $@
  #  #  $@
   ##   $@
  ###   $@
 #   # #$@
 #    # $@
  ###  #$@
        $@@
 ###$@
 ###$@
  # $@
 #  $@
    $@
    $@
    $@
    $@@
   ##$@
  #  $@
 #   $@
 #   $@
 #   $@
  #  $@
   ##$@
     $@@
 ##  $@
   # $@
    #$@
    #$@
    #$@
   # $@
 ##  $@
     $@@
        $@
  #   # $@
   # #  $@
 #######$@
   # #  $@
  #   # $@
        $@
        $@@
      $@
   #  $@
   #  $@
 #####$@
   #  $@
   #  $@
      $@
      $@@
    $@
    $@
    $@
    $@
 ###$@
 ###$@
  # $@
 #  $@@
      $@
      $@
      $@
 #####$@
      $@
      $@
      $@
      $@@
    $@
    $@
    $@
    $@
 ###$@
 ###$@
 ###$@
    $@@
       #$@
      # $@
     #  $@
    #   $@
   #    $@
  #     $@
 #      $@
        $@@
   ###  $@
  #   # $@
 #     #$@
 #     #$@
 #     #$@
  #   # $@
   ###  $@
        $@@
   #  $@
  ##  $@
 # #  $@
   #  $@
   #  $@
   #  $@
 #####$@
      $@@
  ##### $@
 #     #$@
       #$@
  ##### $@
 #      $@
 #      $@
 #######$@
        $@@
  ##### $@
 #     #$@
       #$@
  ##### $@
       #$@
 #     #$@
  ##### $@
        $@@
 #      $@
 #    # $@
 #    # $@
 #    # $@
 #######$@
      # $@
      # $@
        $@@
 #######$@
 #      $@
 #      $@
 ###### $@
       #$@
 #     #$@
  ##### $@
        $@@
  ##### $@
 #     #$@
 #      $@
 ###### $@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #######$@
 #    # $@
     #  $@
    #   $@
   #    $@
   #    $@
   #    $@
        $@@
  ##### $@
 #     #$@
 #     #$@
  ##### $@
 #     #$@
 #     #$@
  ##### $@
        $@@
  ##### $@
 #     #$@
 #     #$@
  ######$@
       #$@
 #     #$@
  ##### $@
        $@@
  # $@
 ###$@
  # $@
    $@
  # $@
 ###$@
  # $@
    $@@
    $@
 ###$@
 ###$@
    $@
 ###$@
 ###$@
  # $@
 #  $@@
    #$@
   # $@
  #  $@
 #   $@
  #  $@
   # $@
    #$@
     $@@
      $@
      $@
 #####$@
      $@
 #####$@
      $@
      $@
      $@@
 #   $@
  #  $@
   # $@
    #$@
   # $@
  #  $@
 #   $@
     $@@
  ##### $@
 #     #$@
       #$@
    ### $@
    #   $@
        $@
    #   $@
        $@@
  ##### $@
 #     #$@
 # ### #$@
 # ### #$@
 # #### $@
 #      $@
  ##### $@
        $@@
    #   $@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
        $@@
  ##### $@
 #     #$@
 #      $@
 #      $@
 #      $@
 #     #$@
  ##### $@
        $@@
 ###### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 ###### $@
        $@@
 #######$@
 #      $@
 #      $@
 #####  $@
 #      $@
 #      $@
 #######$@
        $@@
 #######$@
 #      $@
 #      $@
 #####  $@
 #      $@
 #      $@
 #      $@
        $@@
  ##### $@
 #     #$@
 #      $@
 #  ####$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #######$@
 #     #$@
 #     #$@
 #     #$@
        $@@
 ###$@
  # $@
  # $@
  # $@
  # $@
  # $@
 ###$@
    $@@
       #$@
       #$@
       #$@
       #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #    #$@
 #   # $@
 #  #  $@
 ###   $@
 #  #  $@
 #   # $@
 #    #$@
       $@@
 #      $@
 #      $@
 #      $@
 #      $@
 #      $@
 #      $@
 #######$@
        $@@
 #     #$@
 ##   ##$@
 # # # #$@
 #  #  #$@
 #     #$@
 #     #$@
 #     #$@
        $@@
 #     #$@
 ##    #$@
 # #   #$@
 #  #  #$@
 #   # #$@
 #    ##$@
 #     #$@
        $@@
 #######$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #######$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@
 #      $@
 #      $@
        $@@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #   # #$@
 #    # $@
  #### #$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #   #  $@
 #    # $@
 #     #$@
        $@@
  ##### $@
 #     #$@
 #      $@
  ##### $@
       #$@
 #     #$@
  ##### $@
        $@@
 #######$@
    #   $@
    #   $@
    #   $@
    #   $@
    #   $@
    #   $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  #   # $@
   # #  $@
    #   $@
        $@@
 #     #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
  ## ## $@
        $@@
 #     #$@
  #   # $@
   # #  $@
    #   $@
   # #  $@
  #   # $@
 #     #$@
        $@@
 #     #$@
  #   # $@
   # #  $@
    #   $@
    #   $@
    #   $@
    #   $@
        $@@
 #######$@
      # $@
     #  $@
    #   $@
   #    $@
  #     $@
 #######$@
        $@@
 #####$@
 #    $@
 #    $@
 #    $@
 #    $@
 #    $@
 #####$@
      $@@
 #      $@
  #     $@
   #    $@
    #   $@
     #  $@
      # $@
       #$@
        $@@
 #####$@
     #$@
     #$@
     #$@
     #$@
     #$@
 #####$@
      $@@
   #  $@
  # # $@
 #   #$@
      $@
      $@
      $@
      $@
      $@@
        $@
        $@
        $@
        $@
        $@
        $@
        $@
 #######$@@
 ###$@
 ###$@
  # $@
   #$@
    $@
    $@
    $@
    $@@
       $@
   ##  $@
  #  # $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
       $@
 ##### $@
 #    #$@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
       $@@
       $@
  #### $@
 #    #$@
 #     $@
 #     $@
 #    #$@
  #### $@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
 ##### $@
       $@@
       $@
 ######$@
 #     $@
 ##### $@
 #     $@
 #     $@
 ######$@
       $@@
       $@
 ######$@
 #     $@
 ##### $@
 #     $@
 #     $@
 #     $@
       $@@
       $@
  #### $@
 #    #$@
 #     $@
 #  ###$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #    #$@
 ######$@
 #    #$@
 #    #$@
 #    #$@
       $@@
  $@
 #$@
 #$@
 #$@
 #$@
 #$@
 #$@
  $@@
       $@
      #$@
      #$@
      #$@
      #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #   # $@
 ####  $@
 #  #  $@
 #   # $@
 #    #$@
       $@@
       $@
 #     $@
 #     $@
 #     $@
 #     $@
 #     $@
 ######$@
       $@@
       $@
 #    #$@
 ##  ##$@
 # ## #$@
 #    #$@
 #    #$@
 #    #$@
       $@@
       $@
 #    #$@
 ##   #$@
 # #  #$@
 #  # #$@
 #   ##$@
 #    #$@
       $@@
       $@
  #### $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
 #     $@
 #     $@
       $@@
       $@
  #### $@
 #    #$@
 #    #$@
 #  # #$@
 #   # $@
  ### #$@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
 #   # $@
 #    #$@
       $@@
       $@
  #### $@
 #     $@
  #### $@
      #$@
 #    #$@
  #### $@
       $@@
      $@
 #####$@
   #  $@
   #  $@
   #  $@
   #  $@
   #  $@
      $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #  # $@
   ##  $@
       $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 # ## #$@
 ##  ##$@
 #    #$@
       $@@
       $@
 #    #$@
  #  # $@
   ##  $@
   ##  $@
  #  # $@
 #    #$@
       $@@
      $@
 #   #$@
  # # $@
   #  $@
   #  $@
   #  $@
   #  $@
      $@@
       $@
 ######$@
     # $@
    #  $@
   #   $@
  #    $@
 ######$@
       $@@
   ###$@
  #   $@
  #   $@
 ##   $@
  #   $@
  #   $@
   ###$@
      $@@
 #$@
 #$@
 #$@
  $@
 #$@
 #$@
 #$@
  $@@
 ###  $@
    # $@
    # $@
    ##$@
    # $@
    # $@
 ###  $@
      $@@
  ##    $@
 #  #  #$@
     ## $@
        $@
        $@
        $@
        $@
        $@@
 #  #  #$@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
 #     #$@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
        $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
       $@
 #    #$@
  #### $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
       $@
 #    #$@
  #### $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
       $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@@
160  NO-BREAK SPACE
         $@
         $@
         $@
         $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
169  COPYRIGHT SIGN
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
176  DEGREE SIGN
         $@
         $@
         $@
         $@
 ########$@
         $@
         $@
         $@@
178  SUPERSCRIPT TWO
    ##   $@
    ##   $@
    ##   $@
    ##   $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
183  MIDDLE DOT
 ##   $@
 ##   $@
 #####$@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 #  #  #$@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 #     #$@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 #     #$@
        $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
223  LATIN SMALL LETTER SHARP S
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@@
228  LATIN SMALL LETTER A WITH DIAERESIS
       $@
 #    #$@
  #### $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
246  LATIN SMALL LETTER O WITH DIAERESIS
       $@
 #    #$@
  #### $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
247  DIVISION SIGN
 #### $@
 #### $@
 #### $@
 #### $@
 #####$@
 #### $@
 #### $@
 #### $@@
252  LATIN SMALL LETTER U WITH DIAERESIS
       $@
 #    #$@
       $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
0x0401  CYRILLIC CAPITAL LETTER IO
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@@
0x0410  CYRILLIC CAPITAL LETTER A
    ####$@
   ## ##$@
  ##  ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
        $@@
0x0411  CYRILLIC CAPITAL LETTER BE
 #######$@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x0412  CYRILLIC CAPITAL LETTER VE
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x0413  CYRILLIC CAPITAL LETTER GHE
 #######$@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
        $@@
0x0414  CYRILLIC CAPITAL LETTER DE
   #### $@
  ## ## $@
  ## ## $@
  ## ## $@
  ## ## $@
 #######$@
 ##   ##$@
        $@@
0x0415  CYRILLIC CAPITAL LETTER IE
 #######$@
 ##     $@
 ##     $@
 ###### $@
 ##     $@
 ##     $@
 #######$@
        $@@
0x0416  CYRILLIC CAPITAL LETTER ZHE
 ## # ##$@
  # # # $@
   ###  $@
   ###  $@
  # # # $@
  # # # $@
 ## # ##$@
        $@@
0x0417  CYRILLIC CAPITAL LETTER ZE
  ##### $@
 ##   ##$@
      ##$@
    ##  $@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x0418  CYRILLIC CAPITAL LETTER I
 ##   ##$@
 ##  ###$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0419  CYRILLIC CAPITAL LETTER SHORT I
 ## ## #$@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041A  CYRILLIC CAPITAL LETTER KA
 ##   ##$@
 ##  ## $@
 ## ##  $@
 #####  $@
 ##  ## $@
 ##   ##$@
 ##   ##$@
        $@@
0x041B  CYRILLIC CAPITAL LETTER EL
   #####$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x041C  CYRILLIC CAPITAL LETTER EM
 ##   ##$@
 ##   ##$@
 ### ###$@
 ## # ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041D  CYRILLIC CAPITAL LETTER EN
 ##   ##$@
 ##   ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041E  CYRILLIC CAPITAL LETTER O
  ##### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ##### $@
        $@@
0x041F  CYRILLIC CAPITAL LETTER PE
 #######$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0420  CYRILLIC CAPITAL LETTER ER
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
 ##     $@
 ##     $@
 ##     $@
        $@@
0x0421  CYRILLIC CAPITAL LETTER ES
  ##### $@
 ##   ##$@
 ##     $@
 ##     $@
 ##     $@
 ##   ##$@
  ##### $@
        $@@
0x0422  CYRILLIC CAPITAL LETTER TE
 ###### $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
        $@@
0x0423  CYRILLIC CAPITAL LETTER U
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x0424  CYRILLIC CAPITAL LETTER EF
    #   $@
  ##### $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
  ##### $@
    #   $@
        $@@
0x0425  CYRILLIC CAPITAL LETTER HA
 ##   ##$@
  ## ## $@
   ###  $@
   ###  $@
   ###  $@
  ## ## $@
 ##   ##$@
        $@@
0x0426  CYRILLIC CAPITAL LETTER TSE
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 #######$@
       #$@@
0x0427  CYRILLIC CAPITAL LETTER CHE
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
      ##$@
      ##$@
        $@@
0x0428  CYRILLIC CAPITAL LETTER SHA
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
        $@@
0x0429  CYRILLIC CAPITAL LETTER SHCHA
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
       #$@@
0x042A  CYRILLIC CAPITAL LETTER HARD SIGN
 ###    $@
 ###    $@
  ##    $@
  ##### $@
  ##  ##$@
  ##  ##$@
  ##### $@
        $@@
0x042B  CYRILLIC CAPITAL LETTER YERU
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ####  #$@
 ##  # #$@
 ##  # #$@
 ####  #$@
        $@@
0x042C  CYRILLIC CAPITAL LETTER SOFT SIGN
 ##     $@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x042D  CYRILLIC CAPITAL LETTER E
  ##### $@
 ##   ##$@
      ##$@
   #####$@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x042E  CYRILLIC CAPITAL LETTER YU
 ##  ## $@
 ## # ##$@
 ## # ##$@
 #### ##$@
 ## # ##$@
 ## # ##$@
 ##  ## $@
        $@@
0x042F  CYRILLIC CAPITAL LETTER YA
   #####$@
  ##  ##$@
  ##  ##$@
   #####$@
   ## ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x0430  CYRILLIC SMALL LETTER A
        $@
        $@
  ####  $@
     ## $@
  ##### $@
 ##  ## $@
  ######$@
        $@@
0x0431  CYRILLIC SMALL LETTER BE
        $@
     ## $@
  ####  $@
 ##     $@
 ###### $@
 ##   ##$@
  ##### $@
        $@@
0x0432  CYRILLIC SMALL LETTER VE
        $@
        $@
 #####  $@
 ##  ## $@
 ###### $@
 ##   ##$@
 ###### $@
        $@@
0x0433  CYRILLIC SMALL LETTER GHE
        $@
        $@
  ##### $@
      ##$@
  ##### $@
 ##     $@
  ######$@
        $@@
0x0434  CYRILLIC SMALL LETTER DE
        $@
   #### $@
      ##$@
   #####$@
  ##  ##$@
 ##   ##$@
  ##### $@
        $@@
0x0435  CYRILLIC SMALL LETTER IE
        $@
        $@
  ##### $@
 ##   ##$@
 ###### $@
 ##     $@
  ##### $@
        $@@
0x0436  CYRILLIC SMALL LETTER ZHE
        $@
        $@
 ## # ##$@
  # # # $@
   ###  $@
  # # # $@
 ## # ##$@
        $@@
0x0437  CYRILLIC SMALL LETTER ZE
        $@
        $@
  ##### $@
 ##   ##$@
    ### $@
 ##   ##$@
  ##### $@
        $@@
0x0438  CYRILLIC SMALL LETTER I
        $@
        $@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
        $@@
0x0439  CYRILLIC SMALL LETTER SHORT I
        $@
    ##  $@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
        $@@
0x043A  CYRILLIC SMALL LETTER KA
        $@
        $@
 ##   ##$@
 ##  ## $@
 #####  $@
 ##  ## $@
 ##   ##$@
        $@@
0x043B  CYRILLIC SMALL LETTER EL
        $@
        $@
   #####$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x043C  CYRILLIC SMALL LETTER EM
        $@
        $@
 ##   ##$@
 ### ###$@
 ## # ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x043D  CYRILLIC SMALL LETTER EN
        $@
        $@
 ##   ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
        $@@
0x043E  CYRILLIC SMALL LETTER O
        $@
        $@
  ##### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ##### $@
        $@@
0x043F  CYRILLIC SMALL LETTER PE
        $@
        $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0440  CYRILLIC SMALL LETTER ER
        $@
        $@
 ###### $@
 ##   ##$@
 ###### $@
 ##     $@
 ##     $@
        $@@
0x0441  CYRILLIC SMALL LETTER ES
        $@
        $@
  ##### $@
 ##     $@
 ##     $@
 ##     $@
  ##### $@
        $@@
0x0442  CYRILLIC SMALL LETTER TE
        $@
        $@
 ###### $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
        $@@
0x0443  CYRILLIC SMALL LETTER U
        $@
        $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
  ##### $@@
0x0444  CYRILLIC SMALL LETTER EF
        $@
    #   $@
  ##### $@
 ## # ##$@
 ## # ##$@
  ##### $@
    #   $@
        $@@
0x0445  CYRILLIC SMALL LETTER HA
        $@
        $@
 ##   ##$@
  ## ## $@
   ###  $@
  ## ## $@
 ##   ##$@
        $@@
0x0446  CYRILLIC SMALL LETTER TSE
        $@
        $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##  ## $@
  ### ##$@
       #$@@
0x0447  CYRILLIC SMALL LETTER CHE
        $@
        $@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
      ##$@
        $@@
0x0448  CYRILLIC SMALL LETTER SHA
        $@
        $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
        $@@
0x0449  CYRILLIC SMALL LETTER SHCHA
        $@
        $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
       #$@@
0x044A  CYRILLIC SMALL LETTER HARD SIGN
        $@
        $@
 ###    $@
  ##    $@
  ##### $@
  ##  ##$@
  ##### $@
        $@@
0x044B  CYRILLIC SMALL LETTER YERU
        $@
        $@
 ##   ##$@
 ##   ##$@
 ####  #$@
 ##  # #$@
 ####  #$@
        $@@
0x044C  CYRILLIC SMALL LETTER SOFT SIGN
        $@
        $@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ###### $@
        $@@
0x044D  CYRILLIC SMALL LETTER E
        $@
        $@
 ###### $@
      ##$@
   #####$@
      ##$@
 ###### $@
        $@@
0x044E  CYRILLIC SMALL LETTER YU
        $@
        $@
 #  ### $@
 # ## ##$@
 #### ##$@
 # ## ##$@
 #  ### $@
        $@@
0x044F  CYRILLIC SMALL LETTER YA
        $@
        $@
   #####$@
  ##  ##$@
   #####$@
  ##  ##$@
 ##   ##$@
        $@@
0x0451  CYRILLIC SMALL LETTER IO
         $@
         $@
 ########$@
         $@
 #### ###$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x2219  BULLET OPERATOR
   ## ##$@
   ## ##$@
   ## ##$@
   ## ##$@
 #######$@
        $@
        $@
        $@@
0x221A  SQUARE ROOT
    ## $@
    ## $@
 ##### $@
    ## $@
 ##### $@
       $@
       $@
       $@@
0x2248  ALMOST EQUAL TO
       $@
       $@
       $@
       $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2264  LESS-THAN OR EQUAL TO
 ##   $@
 ##   $@
 ##   $@
 ##   $@
 #####$@
      $@
      $@
      $@@
0x2265  GREATER-THAN OR EQUAL TO
    ##   $@
    ##   $@
    ##   $@
    ##   $@
 ########$@
         $@
         $@
         $@@
0x2320  TOP HALF INTEGRAL
        $@
        $@
 #######$@
      ##$@
 #### ##$@
   ## ##$@
   ## ##$@
   ## ##$@@
0x2321  BOTTOM HALF INTEGRAL
 ##   $@
 ##   $@
 ##   $@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x2500  BOX DRAWINGS LIGHT HORIZONTAL
   ##  $@
       $@
   ##  $@
  ##   $@
 ##    $@
 ##  ##$@
  #### $@
       $@@
0x2502  BOX DRAWINGS LIGHT VERTICAL
       $@
       $@
       $@
 ######$@
 ##    $@
 ##    $@
       $@
       $@@
0x250C  BOX DRAWINGS LIGHT DOWN AND RIGHT
       $@
       $@
       $@
 ######$@
     ##$@
     ##$@
       $@
       $@@
0x2510  BOX DRAWINGS LIGHT DOWN AND LEFT
 ##    ##$@
 ##   ## $@
 ##  ##  $@
 ## #### $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
     ####$@@
0x2514  BOX DRAWINGS LIGHT UP AND RIGHT
 ##    ##$@
 ##   ## $@
 ##  ##  $@
 ## ## ##$@
   ## ###$@
  ## ####$@
 ##  ####$@
       ##$@@
0x2518  BOX DRAWINGS LIGHT UP AND LEFT
 ## $@
 ## $@
    $@
 ## $@
 ## $@
 ## $@
 ## $@
    $@@
0x251C  BOX DRAWINGS LIGHT VERTICAL AND RIGHT
         $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
  ##  ## $@
   ##  ##$@
         $@
         $@@
0x2524  BOX DRAWINGS LIGHT VERTICAL AND LEFT
         $@
 ##  ##  $@
  ##  ## $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
         $@
         $@@
0x252C  BOX DRAWINGS LIGHT DOWN AND HORIZONTAL
  # #$@
 # # $@
  # #$@
 # # $@
  # #$@
 # # $@
  # #$@
 # # $@@
0x2534  BOX DRAWINGS LIGHT UP AND HORIZONTAL
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@@
0x253C  BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL
 ## ## ##$@
  ### ###$@
 ## ## ##$@
 ### ### $@
 ## ## ##$@
  ### ###$@
 ## ## ##$@
 ### ### $@@
0x2550  BOX DRAWINGS DOUBLE HORIZONTAL
 ## ## $@
 ## ## $@
 ## ###$@
 ##    $@
 ######$@
       $@
       $@
       $@@
0x2551  BOX DRAWINGS DOUBLE VERTICAL
       $@
       $@
 ######$@
 ##    $@
 ## ###$@
 ## ## $@
 ## ## $@
 ## ## $@@
0x2552  BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE
   ## ## $@
   ## ## $@
 #### ###$@
         $@
 ########$@
         $@
         $@
         $@@
0x2553  BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE
 #### $@
 #### $@
 #####$@
 ##   $@
 #####$@
 #### $@
 #### $@
 #### $@@
0x2554  BOX DRAWINGS DOUBLE DOWN AND RIGHT
         $@
         $@
 ########$@
         $@
 ########$@
         $@
         $@
         $@@
0x2555  BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE
   #### $@
   #### $@
 #######$@
        $@
 #######$@
   #### $@
   #### $@
   #### $@@
0x2556  BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE
    ##   $@
    ##   $@
 ########$@
         $@
 ########$@
         $@
         $@
         $@@
0x2557  BOX DRAWINGS DOUBLE DOWN AND LEFT
   ## ## $@
   ## ## $@
   ## ## $@
   ## ## $@
 ########$@
         $@
         $@
         $@@
0x2558  BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE
         $@
         $@
 ########$@
         $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
0x2559  BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE
         $@
         $@
         $@
         $@
 ########$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x255A  BOX DRAWINGS DOUBLE UP AND RIGHT
 ## ## $@
 ## ## $@
 ## ## $@
 ## ## $@
 ######$@
       $@
       $@
       $@@
0x255B  BOX DRAWINGS UP SINGLE AND LEFT DOUBLE
 ##   $@
 ##   $@
 #####$@
 ##   $@
 #####$@
      $@
      $@
      $@@
0x255C  BOX DRAWINGS UP DOUBLE AND LEFT SINGLE
      $@
      $@
 #####$@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x255D  BOX DRAWINGS DOUBLE UP AND LEFT
       $@
       $@
       $@
       $@
 ######$@
 ## ## $@
 ## ## $@
 ## ## $@@
0x255E  BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE
   ## ## $@
   ## ## $@
   ## ## $@
   ## ## $@
 ########$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x255F  BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE
    ##   $@
    ##   $@
 ########$@
    ##   $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
0x2560  BOX DRAWINGS DOUBLE VERTICAL AND RIGHT
    ## $@
    ## $@
    ## $@
    ## $@
 ##### $@
       $@
       $@
       $@@
0x2561  BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE
      $@
      $@
      $@
      $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x2562  BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE
         $@
         $@
         $@
         $@
 ########$@
 ########$@
 ########$@
 ########$@@
0x2563  BOX DRAWINGS DOUBLE VERTICAL AND LEFT
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@@
0x2564  BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@@
0x2565  BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE
 ########$@
 ########$@
 ########$@
 ########$@
         $@
         $@
         $@
         $@@
0x2566  BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL
  ###  $@
 ## ## $@
 ## ## $@
  ###  $@
       $@
       $@
       $@
       $@@
0x2567  BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE
    $@
    $@
    $@
 ## $@
 ## $@
    $@
    $@
    $@@
0x2568  BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE
    $@
    $@
    $@
    $@
 ## $@
    $@
    $@
    $@@
0x2569  BOX DRAWINGS DOUBLE UP AND HORIZONTAL
     ####$@
     ##  $@
     ##  $@
     ##  $@
 ### ##  $@
  ## ##  $@
   ####  $@
    ###  $@@
0x256A  BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE
 ####  $@
 ## ## $@
 ## ## $@
 ## ## $@
 ## ## $@
       $@
       $@
       $@@
0x256B  BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE
 ###  $@
   ## $@
  ##  $@
 ##   $@
 #### $@
      $@
      $@
      $@@
0x256C  BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL
      $@
      $@
 #### $@
 #### $@
 #### $@
 #### $@
      $@
      $@@
0x2580  UPPER HALF BLOCK
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@@
0x2584  LOWER HALF BLOCK
    ## $@
    ## $@
    ## $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2588  FULL BLOCK
    ## $@
    ## $@
 ##### $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x258C  LEFT HALF BLOCK
   ####$@
   ####$@
   ####$@
   ####$@
 ######$@
   ####$@
   ####$@
   ####$@@
0x2590  RIGHT HALF BLOCK
        $@
        $@
        $@
        $@
 #######$@
   ## ##$@
   ## ##$@
   ## ##$@@
0x2591  LIGHT SHADE
       $@
       $@
 ##### $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2592  MEDIUM SHADE
   ####$@
   ####$@
 ######$@
     ##$@
 ######$@
   ####$@
   ####$@
   ####$@@
0x2593  DARK SHADE
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@@
0x25A0  BLACK SQUARE
   ## ##$@
   ## ##$@
 #### ##$@
      ##$@
 #######$@
        $@
        $@
        $@@
0x30A2  A
 ##########$@
       ### $@
      #    $@
     #     $@
    #      $@
   #       $@
  #        $@
           $@@
0x30A4  I
       ##$@
     ##  $@
   ## #  $@
 ##   #  $@
      #  $@
      #  $@
      #  $@
         $@@
0x30A6  U
     #     $@
 ##########$@
 #        #$@
        ## $@
      ##   $@
    ##     $@
  ##       $@
           $@@
0x30A8  E
           $@
   ####### $@
      #    $@
      #    $@
      #    $@
      #    $@
 ##########$@
           $@@
0x30AA  O
        #  $@
 ##########$@
       ##  $@
     ## #  $@
   ##   #  $@
 ##    ##  $@
        #  $@
           $@@
0x30AB  KA
      #    $@
 ##########$@
     #    #$@
     #    #$@
    #     #$@
   #   # # $@
  #     #  $@
           $@@
0x30AD  KI
 # #    $@
  #   # $@
 # # #  $@
    #   $@
   # #  $@
  #   # $@
       #$@
        $@@
0x30AF  KU
    #      $@
   ########$@
  #       #$@
 #      ## $@
      ##   $@
    ##     $@
  ##       $@
           $@@
0x30B1  KE
    #      $@
   ########$@
  #    #   $@
 #    #    $@
     #     $@
    #      $@
   #       $@
           $@@
0x30B3  KO
           $@
 ##########$@
          #$@
          #$@
          #$@
          #$@
 ######### $@
           $@@
0x30B5  SA
   #    #  $@
 ##########$@
   #    #  $@
        #  $@
       #   $@
      #    $@
    #      $@
           $@@
0x30B7  SI (SHI)
   #       #$@
 #  #     # $@
  #      #  $@
       ##   $@
     ##     $@
   ##       $@
 ##         $@
            $@@
0x30B9  SU
 ########$@
        #$@
       # $@
     ##  $@
   ## #  $@
  ##   # $@
 #      #$@
         $@@
0x30BB  SE
   #       $@
   #       $@
 ##########$@
   #     # $@
   #       $@
   #       $@
    ###### $@
           $@@
0x30BD  SO
 #       #$@
 #       #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30BF  TA
    #     $@
   #######$@
  #     # $@
 # #   #  $@
    ###   $@
   ##     $@
 ##       $@
          $@@
0x30C1  TI (CHI)
        ## $@
  ######   $@
      #    $@
 ##########$@
      #    $@
      #    $@
    ##     $@
           $@@
0x30C4  TU (TSU)
 # #     #$@
 # #     #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30C6  TE
   ######  $@
           $@
 ##########$@
      #    $@
      #    $@
     #     $@
   ##      $@
           $@@
0x30C8  TO
 #   $@
 #   $@
 ##  $@
 # # $@
 #  #$@
 #   $@
 #   $@
     $@@
0x30CA  NA
      #    $@
 ##########$@
      #    $@
      #    $@
     #     $@
    #      $@
  ##       $@
           $@@
0x30CB  NI
           $@
           $@
   ######  $@
           $@
           $@
 ##########$@
           $@
           $@@
0x30CC  NU
 ##########$@
          #$@
    #    # $@
     # ##  $@
     ##    $@
   ##  #   $@
 ##     #  $@
           $@@
0x30CD  NE
      #    $@
 ##########$@
         # $@
      ###  $@
   ######  $@
 ##   #  ##$@
      #    $@
           $@@
0x30CE  NO
         #$@
         #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30CF  HA
          $@
          $@
    #  #  $@
   #    # $@
  #      #$@
 #        $@
          $@
          $@@
0x30D2  HI
 #       $@
 #   ### $@
 ####    $@
 #       $@
 #       $@
 #       $@
  #######$@
         $@@
0x30D5  HU (FU)
 ########$@
        #$@
        #$@
       # $@
     ##  $@
   ##    $@
 ##      $@
         $@@
0x30D8  HE
           $@
           $@
   ##      $@
  #  ##    $@
 #     ##  $@
         ##$@
           $@
           $@@
0x30DB  HO
      #    $@
 ##########$@
      #    $@
   #  # #  $@
  #   #  # $@
 #   ##   #$@
      #    $@
           $@@
0x30DE  MA
           $@
 ##########$@
         # $@
        #  $@
     # #   $@
      #    $@
       #   $@
           $@@
0x30DF  MI
 ####  $@
     ##$@
 ###   $@
    ###$@
       $@
 ###   $@
    ###$@
       $@@
0x30E0  MU
      #    $@
     #     $@
    #      $@
   #       $@
  #     #  $@
 ######### $@
          #$@
           $@@
0x30E1  ME
         #$@
        # $@
   #   #  $@
    # #   $@
     #    $@
   ## #   $@
 ##    #  $@
          $@@
0x30E2  MO
   ######  $@
     #     $@
 ##########$@
     #     $@
     #     $@
     #     $@
      #### $@
           $@@
0x30E4  YA
 #     ##  $@
  #  ## #  $@
  ###      $@
 #  #      $@
     #     $@
      #    $@
       #   $@
           $@@
0x30E6  YU
           $@
   ######  $@
        #  $@
        #  $@
        #  $@
 ##########$@
           $@
           $@@
0x30E8  YO
           $@
   ######  $@
       #   $@
      #    $@
      #    $@
 ##########$@
           $@
           $@@
0x30E9  RA
   ######  $@
           $@
 ##########$@
 #        #$@
        ## $@
      ##   $@
    ##     $@
           $@@
0x30EA  RI
 #   #$@
 #   #$@
 #   #$@
 #   #$@
    # $@
   #  $@
 ##   $@
      $@@
0x30EB  RU
    # #    $@
    # #    $@
    # #    $@
    # #   #$@
   #  #  # $@
  #   # #  $@
 #    ##   $@
           $@@
0x30EC  RE
 #       $@
 #       $@
 #       $@
 #     ##$@
 #   ##  $@
 # ##    $@
 ##      $@
         $@@
0x30ED  RO
          $@
 #########$@
 #       #$@
 #       #$@
 #       #$@
 #########$@
          $@
          $@@
0x30EF  WA
 ##########$@
 #        #$@
         # $@
        #  $@
       #   $@
     ##    $@
   ##      $@
           $@@
0x30F0  WI
      #    $@
   ####### $@
    # #    $@
    # #    $@
 ##########$@
      #    $@
      #    $@
           $@@
0x30F1  WE
 #########$@
         #$@
         #$@
 ######## $@
        # $@
        # $@
 ######## $@
          $@@
0x30F2  WO
 ##########$@
          #$@
         # $@
 ########  $@
     ##    $@
   ##      $@
 ##        $@
           $@@
0x30F3  N
         #$@
 #       #$@
  #     # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
-0x0004  KATAMAP
                                                    @
a-A i-B u-C e-D o-E ka-F ki-G ku-H ke-I ko-J        @
sa-K shi-L su-M se-N so-O ta-P chi-Q tsu-R te-S to-T@
na-U ni-V nu-W ne-X no-Y ha-Z hi-a fu-b he-c ho-d   @
ma-e mi-f mu-g me-h mo-i ya-j yu-k we-l yo-m        @
ra-n ri-o ru-p re-q ro-r wa-s wi-t wo-u             @
n-v                                                 @
                                                    @@
-0x0006  MOSCOWMAP
a-a, b-b, v-v, g-g, d-d, e-e, zh-j, z-z, i-i@
short i->, k-k, l-l, m-m, n-n, o-o, p-p, r-r@
s-s, t-t, u-u, f-f, kh-h, ts-q, ch-c, sh-w  @
shch-x, hard-\\, yeru-|, soft-/, reverse e-~ @
yu-\`, ya-y                                  @
Capitals use Latin capital letters, except: @
Reverse E-<, Yu-@                           @
No caps for short i, hard, yeru, soft.      @@
`,Js=`flf2a$ 8 6 59 15 10 0 24463
Big by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
Greek characters by Bruce Jakeway <pbjakeway@neumann.uwaterloo.ca>
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 | |@
 |_|@
 (_)@
    @
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
   $  @
      @
      @@
    _  _   @
  _| || |_ @
 |_  __  _|@
  _| || |_ @
 |_  __  _|@
   |_||_|  @
           @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @
      @
      @@
  _   __@
 (_) / /@
    / / @
   / /  @
  / / _ @
 /_/ (_)@
        @
        @@
         @
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
  $ @
    @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
 | | @
  \\_\\@
     @@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
  | |@
 /_/ @
     @@
     _    @
  /\\| |/\\ @
  \\ \` ' / @
 |_     _|@
  / , . \\ @
  \\/|_|\\/ @
          @
          @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
    $   @
        @
        @@
    @
    @
    @
    @
  _ @
 ( )@
 |/ @
    @@
         @
         @
  ______ @
 |______|@
     $   @
     $   @
         @
         @@
    @
    @
    @
    @
  _ @
 (_)@
    @
    @@
      __@
     / /@
    / / @
   / /  @
  / /   @
 /_/    @
        @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  __ @
 /_ |@
  | |@
  | |@
  | |@
  |_|@
     @
     @@
  ___  @
 |__ \\ @
   $) |@
   / / @
  / /_ @
 |____|@
       @
       @@
  ____  @
 |___ \\ @
   __) |@
  |__ < @
  ___) |@
 |____/ @
        @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    | |  @
    |_|  @
         @
         @@
  _____ @
 | ____|@
 | |__  @
 |___ \\ @
  ___) |@
 |____/ @
        @
        @@
    __  @
   / /  @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  ______ @
 |____  |@
    $/ / @
    / /  @
   / /   @
  /_/    @
         @
         @@
   ___  @
  / _ \\ @
 | (_) |@
  > _ < @
 | (_) |@
  \\___/ @
        @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    / / @
   /_/  @
        @
        @@
    @
  _ @
 (_)@
  $ @
  _ @
 (_)@
    @
    @@
    @
  _ @
 (_)@
  $ @
  _ @
 ( )@
 |/ @
    @@
    __@
   / /@
  / / @
 < <  @
  \\ \\ @
   \\_\\@
      @
      @@
         @
  ______ @
 |______|@
  ______ @
 |______|@
         @
         @
         @@
 __   @
 \\ \\  @
  \\ \\ @
   > >@
  / / @
 /_/  @
      @
      @@
  ___  @
 |__ \\ @
    ) |@
   / / @
  |_|  @
  (_)  @
       @
       @@
          @
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @
          @@
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / ____ \\ @
 /_/    \\_\\@
           @
           @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 | |_) |@
 |____/ @
        @
        @@
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
         @
         @@
  _____  @
 |  __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
 |_____/ @
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |____ @
 |______|@
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |     @
 |_|     @
         @
         @@
   _____ @
  / ____|@
 | |  __ @
 | | |_ |@
 | |__| |@
  \\_____|@
         @
         @@
  _    _ @
 | |  | |@
 | |__| |@
 |  __  |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _____ @
 |_   _|@
   | |  @
   | |  @
  _| |_ @
 |_____|@
        @
        @@
       _ @
      | |@
      | |@
  _   | |@
 | |__| |@
  \\____/ @
         @
         @@
  _  __@
 | |/ /@
 | ' / @
 |  <  @
 | . \\ @
 |_|\\_\\@
       @
       @@
  _      @
 | |     @
 | |     @
 | |     @
 | |____ @
 |______|@
         @
         @@
  __  __ @
 |  \\/  |@
 | \\  / |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | . \` |@
 | |\\  |@
 |_| \\_|@
        @
        @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 | |     @
 |_|     @
         @
         @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\___\\_\\@
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  _  / @
 | | \\ \\ @
 |_|  \\_\\@
         @
         @@
   _____ @
  / ____|@
 | (___  @
  \\___ \\ @
  ____) |@
 |_____/ @
         @
         @@
  _______ @
 |__   __|@
    | |   @
    | |   @
    | |   @
    |_|   @
          @
          @@
  _    _ @
 | |  | |@
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
 __      __@
 \\ \\    / /@
  \\ \\  / / @
   \\ \\/ /  @
    \\  /   @
     \\/    @
           @
           @@
 __          __@
 \\ \\        / /@
  \\ \\  /\\  / / @
   \\ \\/  \\/ /  @
    \\  /\\  /   @
     \\/  \\/    @
               @
               @@
 __   __@
 \\ \\ / /@
  \\ V / @
   > <  @
  / . \\ @
 /_/ \\_\\@
        @
        @@
 __     __@
 \\ \\   / /@
  \\ \\_/ / @
   \\   /  @
    | |   @
    |_|   @
          @
          @@
  ______@
 |___  /@
   $/ / @
   / /  @
  / /__ @
 /_____|@
        @
        @@
  ___ @
 |  _|@
 | |  @
 | |  @
 | |  @
 | |_ @
 |___|@
      @@
 __     @
 \\ \\    @
  \\ \\   @
   \\ \\  @
    \\ \\ @
     \\_\\@
        @
        @@
  ___ @
 |_  |@
   | |@
   | |@
   | |@
  _| |@
 |___|@
      @@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
   $ @
     @
     @@
         @
         @
         @
         @
         @
     $   @
  ______ @
 |______|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
  $ @
    @
    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @
        @@
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @
       @@
      _ @
     | |@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
       @
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 | |  @
 |_|  @
      @
      @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
   __/ |@
  |___/ @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
  _ @
 (_)@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
    _ @
   (_)@
    _ @
   | |@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | |   @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
            @
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @
            @@
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
        @
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
        @
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     | |@
     |_|@@
       @
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @
       @@
      @
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @
      @@
  _   @
 | |  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @
      @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
        @
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @
        @@
           @
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @
           @@
       @
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @
       @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
      @
      @
  ____@
 |_  /@
  / / @
 /___|@
      @
      @@
    __@
   / /@
  | | @
 / /  @
 \\ \\  @
  | | @
   \\_\\@
      @@
  _ @
 | |@
 | |@
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   \\ \\@
   / /@
  | | @
 /_/  @
      @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
   $  @
      @
      @@
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
162  CENT SIGN
       @
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @
       @@
163  POUND SIGN
     ___   @
    / ,_\\  @
  _| |_    @
 |__ __|   @
   | |____ @
  (_,_____|@
           @
           @@
164  CURRENCY SIGN
        @
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @
        @@
165  YEN SIGN
  __   __ @
  \\ \\ / / @
  _\\ V /_ @
 |___ ___|@
 |___ ___|@
    |_|   @
          @
          @@
166  BROKEN BAR
  _ @
 | |@
 | |@
 |_|@
  _ @
 | |@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @
       @
       @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
  $   $ @
        @
        @@
169  COPYRIGHT SIGN
    ________   @
   /  ____  \\  @
  /  / ___|  \\ @
 |  | |       |@
 |  | |___    |@
  \\  \\____|  / @
   \\________/  @
               @@
170  FEMININE ORDINAL INDICATOR
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
 |_____|@
    $   @
        @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    ____@
   / / /@
  / / / @
 < < <  @
  \\ \\ \\ @
   \\_\\_\\@
        @
        @@
172  NOT SIGN
         @
         @
  ______ @
 |____  |@
      |_|@
     $   @
         @
         @@
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
    $   @
        @
        @@
174  REGISTERED SIGN
    ________   @
   /  ____  \\  @
  /  |  _ \\  \\ @
 |   | |_) |  |@
 |   |  _ <   |@
  \\  |_| \\_\\ / @
   \\________/  @
               @@
175  MACRON
  ______ @
 |______|@
     $   @
     $   @
     $   @
     $   @
         @
         @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
    $  @
       @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
   |_|  @
  _____ @
 |_____|@
        @
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
   $  @
      @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
   $  @
      @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
  $ @
    @
    @@
181  MICRO SIGN
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
182  PILCROW SIGN
   ______ @
  /      |@
 | (| || |@
  \\__ || |@
    | || |@
    |_||_|@
          @
          @@
183  MIDDLE DOT
    @
    @
  _ @
 (_)@
  $ @
  $ @
    @
    @@
184  CEDILLA
    @
    @
    @
    @
    @
  _ @
 )_)@
    @@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
  $ @
    @
    @@
186  MASCULINE ORDINAL INDICATOR
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
 |_____|@
    $   @
        @
        @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____   @
 \\ \\ \\  @
  \\ \\ \\ @
   > > >@
  / / / @
 /_/_/  @
        @
        @@
188  VULGAR FRACTION ONE QUARTER
  _   __   @
 / | / /   @
 | |/ / _  @
 |_/ / | | @
  / /|_  _|@
 /_/   |_| @
           @
           @@
189  VULGAR FRACTION ONE HALF
  _   __  @
 / | / /  @
 | |/ /__ @
 |_/ /_  )@
  / / / / @
 /_/ /___|@
          @
          @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __   @
 |__ / / /   @
  |_ \\/ / _  @
 |___/ / | | @
    / /|_  _|@
   /_/   |_| @
             @
             @@
191  INVERTED QUESTION MARK
    _  @
   (_) @
   | | @
  / /  @
 | (__ @
  \\___|@
       @
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __    @
    \\_\\   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __   @
    /_/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    //\\   @
   |/_\\|  @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
195  LATIN CAPITAL LETTER A WITH TILDE
    /\\/|  @
   |/\\/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
     _    @
    (o)   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
198  LATIN CAPITAL LETTER AE
      _______ @
     /   ____|@
    /   |__   @
   / /|  __|  @
  / ___ |____ @
 /_/  |______|@
              @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
    )_)  @
         @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
   | |  @
  |___| @
        @
        @@
208  LATIN CAPITAL LETTER ETH
    _____  @
   |  __ \\ @
  _| |_ | |@
 |__ __|| |@
   | |__| |@
   |_____/ @
           @
           @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/| @
  |/\\/_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @
        @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
   $ @
     @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / __// @
 | | // |@
 | |//| |@
 | //_| |@
  //___/ @
         @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @
        @@
222  LATIN CAPITAL LETTER THORN
  _      @
 | |___  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 |_|     @
         @
         @@
223  LATIN SMALL LETTER SHARP S
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
230  LATIN SMALL LETTER AE
           @
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @
       @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/ \\|@
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 |  __/ @
  \\___| @
        @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/ \\|@
   _  @
  | | @
  | | @
  |_| @
      @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_) (_)@
    _   @
   | |  @
   | |  @
   |_|  @
        @
        @@
240  LATIN SMALL LETTER ETH
  /\\/\\  @
  >  <  @
  \\/\\ \\ @
  / _\` |@
 | (_) |@
  \\___/ @
        @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
247  DIVISION SIGN
     _    @
    (_)   @
  _______ @
 |_______|@
     _    @
    (_)   @
          @
          @@
248  LATIN SMALL LETTER O WITH STROKE
         @
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
   \\_\\  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
0x02BC  MODIFIER LETTER APOSTROPHE
   @
   @
 ))@
   @
   @
   @
   @
   @@
0x02BD  MODIFIER LETTER REVERSED COMMA
   @
   @
 ((@
   @
   @
   @
   @
   @@
0x037A  GREEK YPOGEGRAMMENI
   @
   @
   @
   @
   @
   @
   @
 ||@@
0x0387  GREEK ANO TELEIA
    @
  $ @
  _ @
 (_)@
    @
  $ @
    @
    @@
0x0391  GREEK CAPITAL LETTER ALPHA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0392  GREEK CAPITAL LETTER BETA
  ____  @
 |  _ \\ @
 | |_) )@
 |  _ ( @
 | |_) )@
 |____/ @
        @
        @@
0x0393  GREEK CAPITAL LETTER GAMMA
  _____ @
 |  ___)@
 | |$   @
 | |$   @
 | |    @
 |_|    @
        @
        @@
0x0394  GREEK CAPITAL LETTER DELTA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /__\\ \\ @
 /________\\@
           @
           @@
0x0395  GREEK CAPITAL LETTER EPSILON
  _____ @
 |  ___)@
 | |_   @
 |  _)  @
 | |___ @
 |_____)@
        @
        @@
0x0396  GREEK CAPITAL LETTER ZETA
  ______@
 (___  /@
    / / @
   / /  @
  / /__ @
 /_____)@
        @
        @@
0x0397  GREEK CAPITAL LETTER ETA
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0398  GREEK CAPITAL LETTER THETA
   ____  @
  / __ \\ @
 | |__| |@
 |  __  |@
 | |__| |@
  \\____/ @
         @
         @@
0x0399  GREEK CAPITAL LETTER IOTA
  ___ @
 (   )@
  | | @
  | | @
  | | @
 (___)@
      @
      @@
0x039A  GREEK CAPITAL LETTER KAPPA
  _   __@
 | | / /@
 | |/ / @
 |   <  @
 | |\\ \\ @
 |_| \\_\\@
        @
        @@
0x039B  GREEK CAPITAL LETTER LAMDA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /  \\ \\ @
 /_/    \\_\\@
           @
           @@
0x039C  GREEK CAPITAL LETTER MU
  __   __ @
 |  \\ /  |@
 |   v   |@
 | |\\_/| |@
 | |   | |@
 |_|   |_|@
          @
          @@
0x039D  GREEK CAPITAL LETTER NU
  _   _ @
 | \\ | |@
 |  \\| |@
 |     |@
 | |\\  |@
 |_| \\_|@
        @
        @@
0x039E  GREEK CAPITAL LETTER XI
  _____ @
 (_____)@
   ___  @
  (___) @
  _____ @
 (_____)@
        @
        @@
0x039F  GREEK CAPITAL LETTER OMICRON
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03A0  GREEK CAPITAL LETTER PI
  _______ @
 (   _   )@
  | | | | @
  | | | | @
  | | | | @
  |_| |_| @
          @
          @@
0x03A1  GREEK CAPITAL LETTER RHO
  ____  @
 |  _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @
        @
        @@
0x03A3  GREEK CAPITAL LETTER SIGMA
 ______ @
 \\  ___)@
  \\ \\   @
   > >  @
  / /__ @
 /_____)@
        @
        @@
0x03A4  GREEK CAPITAL LETTER TAU
  _____ @
 (_   _)@
   | |  @
   | |  @
   | |  @
   |_|  @
        @
        @@
0x03A5  GREEK CAPITAL LETTER UPSILON
  __   __ @
 (_ \\ / _)@
   \\ v /  @
    | |   @
    | |   @
    |_|   @
          @
          @@
0x03A6  GREEK CAPITAL LETTER PHI
     _    @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    |_|   @
          @
          @@
0x03A7  GREEK CAPITAL LETTER CHI
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03A8  GREEK CAPITAL LETTER PSI
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @
          @
          @@
0x03A9  GREEK CAPITAL LETTER OMEGA
    ____   @
   / __ \\  @
  | |  | | @
  | |  | | @
  _\\ \\/ /_ @
 (___||___)@
           @
           @@
0x03B1  GREEK SMALL LETTER ALPHA
         @
         @
   __  __@
  /  \\/ /@
 ( ()  < @
  \\__/\\_\\@
         @
         @@
0x03B2  GREEK SMALL LETTER BETA
   ___  @
  / _ \\ @
 | |_) )@
 |  _ < @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03B3  GREEK SMALL LETTER GAMMA
        @
        @
  _   _ @
 ( \\ / )@
  \\ v / @
   | |  @
   | |  @
   |_|  @@
0x03B4  GREEK SMALL LETTER DELTA
    __  @
   / _) @
   \\ \\  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03B5  GREEK SMALL LETTER EPSILON
      @
      @
  ___ @
 / __)@
 > _) @
 \\___)@
      @
      @@
0x03B6  GREEK SMALL LETTER ZETA
 _____  @
 \\__  ) @
   / /  @
  / /   @
 | |__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03B7  GREEK SMALL LETTER ETA
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
     |_|@@
0x03B8  GREEK SMALL LETTER THETA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | |_| |@
  \\___/ @
        @
        @@
0x03B9  GREEK SMALL LETTER IOTA
     @
     @
  _  @
 | | @
 | | @
  \\_)@
     @
     @@
0x03BA  GREEK SMALL LETTER KAPPA
       @
       @
  _  __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
0x03BB  GREEK SMALL LETTER LAMDA
 __     @
 \\ \\    @
  \\ \\   @
   > \\  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03BC  GREEK SMALL LETTER MU
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
0x03BD  GREEK SMALL LETTER NU
       @
       @
  _  __@
 | |/ /@
 | / / @
 |__/  @
       @
       @@
0x03BE  GREEK SMALL LETTER XI
 \\=\\__  @
  > __) @
 ( (_   @
  > _)  @
 ( (__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03BF  GREEK SMALL LETTER OMICRON
        @
        @
   ___  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03C0  GREEK SMALL LETTER PI
         @
         @
  ______ @
 (  __  )@
  | || | @
  |_||_| @
         @
         @@
0x03C1  GREEK SMALL LETTER RHO
        @
        @
   ___  @
  / _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03C2  GREEK SMALL LETTER FINAL SIGMA
        @
        @
   ____ @
  / ___)@
 ( (__  @
  \\__ \\ @
    _) )@
   (__/ @@
0x03C3  GREEK SMALL LETTER SIGMA
        @
        @
   ____ @
  /  ._)@
 ( () ) @
  \\__/  @
        @
        @@
0x03C4  GREEK SMALL LETTER TAU
      @
      @
  ___ @
 (   )@
  | | @
   \\_)@
      @
      @@
0x03C5  GREEK SMALL LETTER UPSILON
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03C6  GREEK SMALL LETTER PHI
     _    @
    | |   @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C7  GREEK SMALL LETTER CHI
        @
        @
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@@
0x03C8  GREEK SMALL LETTER PSI
          @
          @
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C9  GREEK SMALL LETTER OMEGA
            @
            @
   __   __  @
  / / _ \\ \\ @
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
0x03D1  GREEK THETA SYMBOL
     ___    @
    / _ \\   @
   ( (_| |_ @
  _ \\ _   _)@
 | |___| |  @
  \\_____/   @
            @
            @@
0x03D5  GREEK PHI SYMBOL
          @
          @
  _   __  @
 | | /  \\ @
 | || || )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03D6  GREEK PI SYMBOL
            @
            @
  _________ @
 (  _____  )@
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
-0x0005  
alpha = a, beta = b, gamma = g, delta = d, epsilon = e   @
zeta = z, eta = h, theta = q, iota = i, lamda = l, mu = m@
nu = n, xi = x, omicron = o, pi = p, rho = r, sigma = s  @
phi = f, chi = c, psi = y, omega = w, final sigma = V    @
     pi symbol = v, theta symbol = J, phi symbol = j     @
     middle dot = :, ypogegrammeni = _                   @
     rough breathing = (, smooth breathing = )           @
     acute accent = ', grave accent = \`, dialytika = ^   @@
`,ks=`flf2a$ 8 6 27 0 10 0 576
Block by Glenn Chappell 4/93 -- straight version of Lean
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
 _| $@
   $$@
     @@
 _|  _| $@
 _|  _| $@
       $$@
   $$    @
   $$    @
   $$    @
         @
         @@
         $$  @
   _|  _|   $@
 _|_|_|_|_| $@
   _|  _|   $@
 _|_|_|_|_| $@
   _|  _|   $@
         $$  @
             @@
     $$  @
   _|   $@
 _|_|_| $@
 _|_|   $@
   _|_| $@
 _|_|_| $@
   _|   $@
     $$  @@
           $$@
 _|_|    _| $@
 _|_|  _|   $@
     _|     $@
   _|  _|_| $@
 _|    _|_| $@
           $$@
             @@
     $$      @
   _|   $    @
 _|  _|     $@
   _|_|  _| $@
 _|    _|   $@
   _|_|  _| $@
           $$@
             @@
   _| $@
 _|   $@
   $$  @
 $$    @
 $$    @
 $$    @
       @
       @@
   _| $@
 _|   $@
 _| $  @
 _| $  @
 _| $  @
 _|   $@
   _| $@
     $$@@
 _|   $@
   _| $@
   _| $@
   _| $@
   _| $@
   _| $@
 _|   $@
   $$  @@
           $$@
 _|  _|  _| $@
   _|_|_|   $@
 _|_|_|_|_| $@
   _|_|_|   $@
 _|  _|  _| $@
           $$@
             @@
       $$    @
     _| $    @
     _|     $@
 _|_|_|_|_| $@
     _|     $@
     _| $    @
       $$    @
             @@
       @
       @
       @
       @
     $$@
   _| $@
 _|   $@
   $$  @@
             @
             @
           $$@
 _|_|_|_|_| $@
           $$@
             @
             @
             @@
     @
     @
     @
     @
   $$@
 _| $@
   $$@
     @@
           $$@
         _| $@
       _|   $@
     _|   $  @
   _|   $    @
 _|   $      @
   $$        @
             @@
     $$  @
   _|   $@
 _|  _| $@
 _|  _| $@
 _|  _| $@
   _|   $@
     $$  @
         @@
     $$@
   _| $@
 _|_| $@
   _| $@
   _| $@
   _| $@
     $$@
       @@
       $$  @
   _|_|   $@
 _|    _| $@
     _|   $@
   _|     $@
 _|_|_|_| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
       _| $@
   _|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
       $$  @
 _|  _| $  @
 _|  _|   $@
 _|_|_|_| $@
     _|   $@
     _| $  @
       $$  @
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|_|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           $$@
 _|_|_|_|_| $@
         _| $@
       _|   $@
     _|   $  @
   _|   $    @
     $$      @
             @@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|_| $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
     @
   $$@
 _| $@
   $$@
   $$@
 _| $@
   $$@
     @@
       @
     $$@
   _| $@
     $$@
     $$@
   _| $@
 _|   $@
   $$  @@
       $$@
     _| $@
   _|   $@
 _|   $  @
   _|   $@
     _| $@
       $$@
         @@
             @
           $$@
 _|_|_|_|_| $@
           $$@
 _|_|_|_|_| $@
           $$@
             @
             @@
   $$    @
 _|   $  @
   _|   $@
     _| $@
   _|   $@
 _|   $  @
   $$    @
         @@
     $$  @
 _|_|   $@
     _| $@
 _|_|   $@
     $$  @
 _| $    @
   $$    @
         @@
               $$  @
     _|_|_|_|_|   $@
   _|          _| $@
 _|    _|_|_|  _| $@
 _|  _|    _|  _| $@
 _|    _|_|_|_|   $@
   _|             $@
     _|_|_|_|_|_| $@@
       $$  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|   $    @
 _|       $@
   _|_|_| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_| $  @
 _|     $  @
 _| $      @
   $$      @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|  _|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
         $$@
 _|    _| $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
       $$@
 _|_|_| $@
   _|   $@
   _| $  @
   _|   $@
 _|_|_| $@
       $$@
         @@
         $$@
       _| $@
       _| $@
       _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
         $$@
 _|    _| $@
 _|  _|   $@
 _|_|   $  @
 _|  _|   $@
 _|    _| $@
         $$@
           @@
   $$      @
 _| $      @
 _| $      @
 _| $      @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
           $$@
 _|      _| $@
 _|_|  _|_| $@
 _|  _|  _| $@
 _|      _| $@
 _|      _| $@
           $$@
             @@
           $$@
 _|      _| $@
 _|_|    _| $@
 _|  _|  _| $@
 _|    _|_| $@
 _|      _| $@
           $$@
             @@
       $$  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @
   $$      @
           @@
       $$    @
   _|_|   $  @
 _|    _| $  @
 _|  _|_| $  @
 _|    _|   $@
   _|_|  _| $@
           $$@
             @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
         $$@
   _|_|_| $@
 _|       $@
   _|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
           $$@
 _|_|_|_|_| $@
     _|     $@
     _| $    @
     _| $    @
     _| $    @
       $$    @
             @@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           $$@
 _|      _| $@
 _|      _| $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
       $$    @
             @@
               $$@
 _|          _| $@
 _|          _| $@
 _|    _|    _| $@
   _|  _|  _|   $@
     _|  _|   $  @
           $$    @
                 @@
           $$@
 _|      _| $@
   _|  _|   $@
     _|   $  @
   _|  _|   $@
 _|      _| $@
           $$@
             @@
           $$@
 _|      _| $@
   _|  _|   $@
     _|   $  @
     _| $    @
     _| $    @
       $$    @
             @@
           $$@
 _|_|_|_|_| $@
       _|   $@
     _|   $  @
   _|       $@
 _|_|_|_|_| $@
           $$@
             @@
 _|_| $@
 _|   $@
 _| $  @
 _| $  @
 _| $  @
 _|   $@
 _|_| $@
     $$@@
   $$        @
 _|   $      @
   _|   $    @
     _|   $  @
       _|   $@
         _| $@
           $$@
             @@
 _|_| $@
   _| $@
   _| $@
   _| $@
   _| $@
   _| $@
 _|_| $@
     $$@@
   _|   $@
 _|  _| $@
       $$@
   $$    @
   $$    @
   $$    @
         @
         @@
             @
             @
     $$      @
     $$      @
     $$      @
     $$      @
           $$@
 _|_|_|_|_| $@@
 _|   $@
   _| $@
     $$@
   $$  @
   $$  @
   $$  @
       @
       @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
           @
         $$@
   _|_|_| $@
 _|       $@
 _|       $@
   _|_|_| $@
         $$@
           @@
         $$@
       _| $@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
           @
       $$  @
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
         $$@
     _|_| $@
   _|     $@
 _|_|_|_| $@
   _|     $@
   _| $    @
     $$    @
           @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
   $$@
 _| $@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
     @@
     $$@
   _| $@
     $$@
   _| $@
   _| $@
   _| $@
   _| $@
 _|   $@@
   $$      @
 _|     $  @
 _|  _| $  @
 _|_|   $  @
 _|  _|   $@
 _|    _| $@
         $$@
           @@
   $$@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
   $$@
     @@
                 @
             $$  @
 _|_|_|  _|_|   $@
 _|    _|    _| $@
 _|    _|    _| $@
 _|    _|    _| $@
               $$@
                 @@
           @
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
           @
       $$  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           @
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
       _| $@@
           @
         $$@
 _|  _|_| $@
 _|_|     $@
 _|   $    @
 _| $      @
   $$      @
           @@
           @
         $$@
   _|_|_| $@
 _|_|     $@
     _|_| $@
 _|_|_|   $@
       $$  @
           @@
     $$    @
   _|     $@
 _|_|_|_|  @
   _|     $@
   _|     $@
     _|_| $@
         $$@
           @@
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
             @
           $$@
 _|      _| $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
       $$    @
             @@
                     @
                   $$@
 _|      _|      _| $@
 _|      _|      _| $@
   _|  _|  _|  _|   $@
     _|      _|   $  @
               $$    @
                     @@
           @
         $$@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
           @
         $$@
 _|_|_|_| $@
     _|   $@
   _|     $@
 _|_|_|_| $@
         $$@
           @@
     _| $@
   _|   $@
   _|   $@
 _|   $  @
   _|   $@
   _|   $@
     _| $@
       $$@@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@@
 _|   $  @
   _|   $@
   _|   $@
     _| $@
   _|   $@
   _|   $@
 _|   $  @
   $$    @@
   _|  _| $@
 _|  _|   $@
       $$  @
     $$    @
     $$    @
     $$    @
           @
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
       $$  @
   _|_|   $@
 _|    _| $@
 _|  _|   $@
 _|    _| $@
 _|  _|   $@
 _|     $  @
   $$      @@
160  NO-BREAK SPACE
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@@
161  INVERTED EXCLAMATION MARK
   $$@
 _| $@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
     @@
162  CENT SIGN
       $$  @
     _|   $@
   _|_|_| $@
 _|  _|   $@
 _|  _|   $@
   _|_|_| $@
     _|   $@
       $$  @@
163  POUND SIGN
         $$    @
     _|_|   $  @
   _|    _| $  @
 _|_|_|     $  @
   _|         $@
 _|_|_|    _| $@
 _|_|  _|_|   $@
               @@
164  CURRENCY SIGN
             $$@
 _|        _| $@
   _|_|_|_|   $@
   _|    _| $  @
   _|    _| $  @
   _|_|_|_|   $@
 _|        _| $@
             $$@@
165  YEN SIGN
           $$@
 _|      _| $@
   _|  _|   $@
 _|_|_|_|_| $@
     _|     $@
 _|_|_|_|_| $@
     _|     $@
       $$    @@
166  BROKEN BAR
 _| $@
 _| $@
 _| $@
   $$@
   $$@
 _| $@
 _| $@
 _| $@@
167  SECTION SIGN
   _|_| $@
 _|     $@
   _|   $@
 _|  _| $@
   _|   $@
     _| $@
 _|_|   $@
     $$  @@
168  DIAERESIS
 _|    _| $@
         $$@
 $      $  @
 $      $  @
 $      $  @
 $      $  @
           @
           @@
169  COPYRIGHT SIGN
     _|_|_|_|   $  @
   _|        _|   $@
 _|    _|_|_|  _| $@
 _|  _|        _| $@
 _|  _|        _| $@
 _|    _|_|_|  _| $@
   _|        _|   $@
     _|_|_|_|   $  @@
170  FEMININE ORDINAL INDICATOR
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
 _|_|_|_| $@
           @
           @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
           $$@
     _|  _| $@
   _|  _|   $@
 _|  _|   $  @
   _|  _|   $@
     _|  _| $@
           $$@
             @@
172  NOT SIGN
             @
             @
           $$@
 _|_|_|_|_| $@
         _| $@
           $$@
             @
             @@
173  SOFT HYPHEN
           @
           @
         $$@
 _|_|_|_| $@
         $$@
     $$    @
           @
           @@
174  REGISTERED SIGN
     _|_|_|_|   $  @
   _|        _|   $@
 _|  _|_|_|    _| $@
 _|  _|    _|  _| $@
 _|  _|_|_|    _| $@
 _|  _|    _|  _| $@
   _|        _|   $@
     _|_|_|_|   $  @@
175  MACRON
 _|_|_|_|_| $@
           $$@
     $$      @
     $$      @
     $$      @
     $$      @
             @
             @@
176  DEGREE SIGN
   _|   $@
 _|  _| $@
   _|   $@
     $$  @
   $$    @
   $$    @
         @
         @@
177  PLUS-MINUS SIGN
       $$    @
     _| $    @
     _|     $@
 _|_|_|_|_| $@
     _|     $@
 _|_|_|_|_| $@
           $$@
             @@
178  SUPERSCRIPT TWO
     $$  @
 _|_|   $@
     _| $@
   _|   $@
 _|_|_| $@
       $$@
         @
         @@
179  SUPERSCRIPT THREE
       $$@
 _|_|_| $@
   _|   $@
     _| $@
 _|_|   $@
     $$  @
         @
         @@
180  ACUTE ACCENT
   _| $@
 _|   $@
   $$  @
 $$    @
 $$    @
 $$    @
       @
       @@
181  MICRO SIGN
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|_|_|_| $@
 _|       $@
 _| $      @@
182  PILCROW SIGN
           $$@
   _|_|_|_| $@
 _|_|_|  _| $@
   _|_|  _| $@
     _|  _| $@
     _|  _| $@
           $$@
             @@
183  MIDDLE DOT
     @
     @
   $$@
 _| $@
   $$@
 $$  @
     @
     @@
184  CEDILLA
       @
       @
       @
       @
       @
     $$@
   _| $@
 _|_| $@@
185  SUPERSCRIPT ONE
     $$@
   _| $@
 _|_| $@
   _| $@
   _| $@
     $$@
       @
       @@
186  MASCULINE ORDINAL INDICATOR
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
         $$@
 _|_|_|_| $@
           @
           @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
       $$    @
 _|  _|   $  @
   _|  _|   $@
     _|  _| $@
   _|  _|   $@
 _|  _|   $  @
       $$    @
             @@
188  VULGAR FRACTION ONE QUARTER
               $$        @
   _|        _|       $  @
 _|_|      _|  _|  _| $  @
   _|    _|    _|  _|   $@
   _|  _|      _|_|_|_| $@
     _|            _|   $@
                     $$  @
                         @@
189  VULGAR FRACTION ONE HALF
               $$      @
   _|        _|     $  @
 _|_|      _|  _|_|   $@
   _|    _|        _| $@
   _|  _|        _|   $@
     _|        _|_|_| $@
                     $$@
                       @@
190  VULGAR FRACTION THREE QUARTERS
               $$        @
 _|_|_|      _|       $  @
   _|      _|  _|  _| $  @
     _|  _|    _|  _|   $@
 _|_|  _|      _|_|_|_| $@
     _|            _|   $@
                     $$  @
                         @@
191  INVERTED QUESTION MARK
       $$@
     _| $@
       $$@
   _|_| $@
 _|     $@
   _|_| $@
       $$@
         @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   _|   $  @
     _| $  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     _| $  @
   _|   $  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
   _|_|   $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
195  LATIN CAPITAL LETTER A WITH TILDE
   _|  _| $@
 _|  _|   $@
       $$  @
   _|_|   $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
198  LATIN CAPITAL LETTER AE
               $$@
   _|_|_|_|_|_| $@
 _|    _|       $@
 _|_|_|_|_|_| $  @
 _|    _|       $@
 _|    _|_|_|_| $@
               $$@
                 @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
         $$@
   _|_|_| $@
 _|       $@
 _|   $    @
 _|       $@
   _|_|_| $@
     _|   $@
   _|_| $  @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   _|   $  @
     _|   $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     _| $  @
   _|     $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 _|    _| $@
         $$@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 _|   $  @
   _|   $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     _| $@
   _|   $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
   _|   $@
 _|  _| $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 _|  _| $@
       $$@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
208  LATIN CAPITAL LETTER ETH
         $$  @
   _|_|_|   $@
   _|    _| $@
 _|_|_|  _| $@
   _|    _| $@
   _|_|_|   $@
         $$  @
             @@
209  LATIN CAPITAL LETTER N WITH TILDE
   _|  _| $@
 _|  _|   $@
 _|    _| $@
 _|_|  _| $@
 _|  _|_| $@
 _|    _| $@
         $$@
           @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   _|   $  @
     _| $  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     _| $  @
   _|   $  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
213  LATIN CAPITAL LETTER O WITH TILDE
   _|  _| $@
 _|  _|   $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
215  MULTIPLICATION SIGN
         @
       $$@
 _|  _| $@
   _|   $@
 _|  _| $@
       $$@
         @
         @@
216  LATIN CAPITAL LETTER O WITH STROKE
           $$@
   _|_|_|_| $@
 _|    _|_| $@
 _|  _|  _| $@
 _|_|    _| $@
 _|_|_|_|   $@
         $$  @
             @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   _|   $  @
     _| $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     _| $  @
   _|   $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
       _| $  @
     _|     $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
     _| $    @
       $$    @
             @@
222  LATIN CAPITAL LETTER THORN
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
   $$      @
           @@
223  LATIN SMALL LETTER SHARP S
       $$  @
   _|_|   $@
 _|    _| $@
 _|  _|   $@
 _|    _| $@
 _|  _|   $@
 _|     $  @
   $$      @@
224  LATIN SMALL LETTER A WITH GRAVE
   _|   $  @
     _| $  @
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
225  LATIN SMALL LETTER A WITH ACUTE
       _| $@
     _|   $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
     _|   $@
   _|  _| $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
227  LATIN SMALL LETTER A WITH TILDE
   _|  _| $@
 _|  _|   $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     _|   $@
   _|  _| $@
     _|   $@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
230  LATIN SMALL LETTER AE
                   @
               $$  @
   _|_|_|  _|_|   $@
 _|    _|_|_|_|_| $@
 _|    _|_|       $@
   _|_|_|  _|_|_| $@
                 $$@
                   @@
231  LATIN SMALL LETTER C WITH CEDILLA
           @
         $$@
   _|_|_| $@
 _|       $@
 _|       $@
   _|_|_| $@
     _|   $@
   _|_| $  @@
232  LATIN SMALL LETTER E WITH GRAVE
   _|     $@
     _| $  @
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
233  LATIN SMALL LETTER E WITH ACUTE
       _| $@
     _|   $@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
236  LATIN SMALL LETTER I WITH GRAVE
 _|   $@
   _| $@
     $$@
   _| $@
   _| $@
   _| $@
     $$@
       @@
237  LATIN SMALL LETTER I WITH ACUTE
   _| $@
 _|   $@
   $$  @
 _| $  @
 _| $  @
 _| $  @
   $$  @
       @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
   _|   $@
 _|  _| $@
       $$@
   _| $  @
   _| $  @
   _| $  @
     $$  @
         @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 _|  _| $@
       $$@
   _| $  @
   _| $  @
   _| $  @
   _| $  @
     $$  @
         @@
240  LATIN SMALL LETTER ETH
 _|  _| $  @
   _|   $  @
 _|  _|   $@
   _|_|_| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
241  LATIN SMALL LETTER N WITH TILDE
   _|  _| $@
 _|  _|   $@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
242  LATIN SMALL LETTER O WITH GRAVE
   _|   $  @
     _| $  @
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
243  LATIN SMALL LETTER O WITH ACUTE
     _| $  @
   _|   $  @
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
245  LATIN SMALL LETTER O WITH TILDE
   _|_|_| $@
 _|  _|   $@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
247  DIVISION SIGN
       $$    @
     _| $    @
           $$@
 _|_|_|_|_| $@
           $$@
     _| $    @
       $$    @
             @@
248  LATIN SMALL LETTER O WITH STROKE
           @
         $$@
   _|_|_| $@
 _|  _|_| $@
 _|_|  _| $@
 _|_|_|   $@
       $$  @
           @@
249  LATIN SMALL LETTER U WITH GRAVE
 _|   $    @
   _| $    @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
250  LATIN SMALL LETTER U WITH ACUTE
       _| $@
     _|   $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
253  LATIN SMALL LETTER Y WITH ACUTE
     _| $  @
   _|   $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
254  LATIN SMALL LETTER THORN
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
`,_r=`flf2a 4 3 8 15 11 0 10127 242
Bubble by Glenn Chappell 4/93
Includes characters 128-255
Enhanced for Latin-2,3,4 by John Cowan <cowan@ccil.org>
Latin character sets supported only if your screen font does
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 @
 @
 @
 @@
   _  @
  / \\ @
 ( ! )@
  \\_/ @@
   _  @
  / \\ @
 ( " )@
  \\_/ @@
   _  @
  / \\ @
 ( # )@
  \\_/ @@
   _  @
  / \\ @
 ( $ )@
  \\_/ @@
   _  @
  / \\ @
 ( % )@
  \\_/ @@
   _  @
  / \\ @
 ( & )@
  \\_/ @@
   _  @
  / \\ @
 ( ' )@
  \\_/ @@
   _  @
  / \\ @
 ( ( )@
  \\_/ @@
   _  @
  / \\ @
 ( ) )@
  \\_/ @@
   _  @
  / \\ @
 ( * )@
  \\_/ @@
   _  @
  / \\ @
 ( + )@
  \\_/ @@
   _  @
  / \\ @
 ( , )@
  \\_/ @@
   _  @
  / \\ @
 ( - )@
  \\_/ @@
   _  @
  / \\ @
 ( . )@
  \\_/ @@
   _  @
  / \\ @
 ( / )@
  \\_/ @@
   _  @
  / \\ @
 ( 0 )@
  \\_/ @@
   _  @
  / \\ @
 ( 1 )@
  \\_/ @@
   _  @
  / \\ @
 ( 2 )@
  \\_/ @@
   _  @
  / \\ @
 ( 3 )@
  \\_/ @@
   _  @
  / \\ @
 ( 4 )@
  \\_/ @@
   _  @
  / \\ @
 ( 5 )@
  \\_/ @@
   _  @
  / \\ @
 ( 6 )@
  \\_/ @@
   _  @
  / \\ @
 ( 7 )@
  \\_/ @@
   _  @
  / \\ @
 ( 8 )@
  \\_/ @@
   _  @
  / \\ @
 ( 9 )@
  \\_/ @@
   _  @
  / \\ @
 ( : )@
  \\_/ @@
   _  @
  / \\ @
 ( ; )@
  \\_/ @@
   _  @
  / \\ @
 ( < )@
  \\_/ @@
   _  @
  / \\ @
 ( = )@
  \\_/ @@
   _  @
  / \\ @
 ( > )@
  \\_/ @@
   _  @
  / \\ @
 ( ? )@
  \\_/ @@
   _  @
  / \\ @
 ( @ )@
  \\_/ @@
   _  @
  / \\ @
 ( A )@
  \\_/ @@
   _  @
  / \\ @
 ( B )@
  \\_/ @@
   _  @
  / \\ @
 ( C )@
  \\_/ @@
   _  @
  / \\ @
 ( D )@
  \\_/ @@
   _  @
  / \\ @
 ( E )@
  \\_/ @@
   _  @
  / \\ @
 ( F )@
  \\_/ @@
   _  @
  / \\ @
 ( G )@
  \\_/ @@
   _  @
  / \\ @
 ( H )@
  \\_/ @@
   _  @
  / \\ @
 ( I )@
  \\_/ @@
   _  @
  / \\ @
 ( J )@
  \\_/ @@
   _  @
  / \\ @
 ( K )@
  \\_/ @@
   _  @
  / \\ @
 ( L )@
  \\_/ @@
   _  @
  / \\ @
 ( M )@
  \\_/ @@
   _  @
  / \\ @
 ( N )@
  \\_/ @@
   _  @
  / \\ @
 ( O )@
  \\_/ @@
   _  @
  / \\ @
 ( P )@
  \\_/ @@
   _  @
  / \\ @
 ( Q )@
  \\_/ @@
   _  @
  / \\ @
 ( R )@
  \\_/ @@
   _  @
  / \\ @
 ( S )@
  \\_/ @@
   _  @
  / \\ @
 ( T )@
  \\_/ @@
   _  @
  / \\ @
 ( U )@
  \\_/ @@
   _  @
  / \\ @
 ( V )@
  \\_/ @@
   _  @
  / \\ @
 ( W )@
  \\_/ @@
   _  @
  / \\ @
 ( X )@
  \\_/ @@
   _  @
  / \\ @
 ( Y )@
  \\_/ @@
   _  @
  / \\ @
 ( Z )@
  \\_/ @@
   _  @
  / \\ @
 ( [ )@
  \\_/ @@
   _  @
  / \\ @
 ( \\ )@
  \\_/ @@
   _  @
  / \\ @
 ( ] )@
  \\_/ @@
   _  @
  / \\ @
 ( ^ )@
  \\_/ @@
   _  @
  / \\ @
 ( _ )@
  \\_/ @@
   _  @
  / \\ @
 ( \` )@
  \\_/ @@
   _  @
  / \\ @
 ( a )@
  \\_/ @@
   _  @
  / \\ @
 ( b )@
  \\_/ @@
   _  @
  / \\ @
 ( c )@
  \\_/ @@
   _  @
  / \\ @
 ( d )@
  \\_/ @@
   _  @
  / \\ @
 ( e )@
  \\_/ @@
   _  @
  / \\ @
 ( f )@
  \\_/ @@
   _  @
  / \\ @
 ( g )@
  \\_/ @@
   _  @
  / \\ @
 ( h )@
  \\_/ @@
   _  @
  / \\ @
 ( i )@
  \\_/ @@
   _  @
  / \\ @
 ( j )@
  \\_/ @@
   _  @
  / \\ @
 ( k )@
  \\_/ @@
   _  @
  / \\ @
 ( l )@
  \\_/ @@
   _  @
  / \\ @
 ( m )@
  \\_/ @@
   _  @
  / \\ @
 ( n )@
  \\_/ @@
   _  @
  / \\ @
 ( o )@
  \\_/ @@
   _  @
  / \\ @
 ( p )@
  \\_/ @@
   _  @
  / \\ @
 ( q )@
  \\_/ @@
   _  @
  / \\ @
 ( r )@
  \\_/ @@
   _  @
  / \\ @
 ( s )@
  \\_/ @@
   _  @
  / \\ @
 ( t )@
  \\_/ @@
   _  @
  / \\ @
 ( u )@
  \\_/ @@
   _  @
  / \\ @
 ( v )@
  \\_/ @@
   _  @
  / \\ @
 ( w )@
  \\_/ @@
   _  @
  / \\ @
 ( x )@
  \\_/ @@
   _  @
  / \\ @
 ( y )@
  \\_/ @@
   _  @
  / \\ @
 ( z )@
  \\_/ @@
   _  @
  / \\ @
 ( { )@
  \\_/ @@
   _  @
  / \\ @
 ( | )@
  \\_/ @@
   _  @
  / \\ @
 ( } )@
  \\_/ @@
   _  @
  / \\ @
 ( ~ )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
128
   _  @
  / \\ @
 ( � )@
  \\_/ @@
129
   _  @
  / \\ @
 ( � )@
  \\_/ @@
130
   _  @
  / \\ @
 ( � )@
  \\_/ @@
131
   _  @
  / \\ @
 ( � )@
  \\_/ @@
132
   _  @
  / \\ @
 ( � )@
  \\_/ @@
133
   _  @
  / \\ @
 ( � )@
  \\_/ @@
134
   _  @
  / \\ @
 ( � )@
  \\_/ @@
135
   _  @
  / \\ @
 ( � )@
  \\_/ @@
136
   _  @
  / \\ @
 ( � )@
  \\_/ @@
137
   _  @
  / \\ @
 ( � )@
  \\_/ @@
138
   _  @
  / \\ @
 ( � )@
  \\_/ @@
139
   _  @
  / \\ @
 ( � )@
  \\_/ @@
140
   _  @
  / \\ @
 ( � )@
  \\_/ @@
141
   _  @
  / \\ @
 ( � )@
  \\_/ @@
142
   _  @
  / \\ @
 ( � )@
  \\_/ @@
143
   _  @
  / \\ @
 ( � )@
  \\_/ @@
144
   _  @
  / \\ @
 ( � )@
  \\_/ @@
145
   _  @
  / \\ @
 ( � )@
  \\_/ @@
146
   _  @
  / \\ @
 ( � )@
  \\_/ @@
147
   _  @
  / \\ @
 ( � )@
  \\_/ @@
148
   _  @
  / \\ @
 ( � )@
  \\_/ @@
149
   _  @
  / \\ @
 ( � )@
  \\_/ @@
150
   _  @
  / \\ @
 ( � )@
  \\_/ @@
151
   _  @
  / \\ @
 ( � )@
  \\_/ @@
152
   _  @
  / \\ @
 ( � )@
  \\_/ @@
153
   _  @
  / \\ @
 ( � )@
  \\_/ @@
154
   _  @
  / \\ @
 ( � )@
  \\_/ @@
155
   _  @
  / \\ @
 ( � )@
  \\_/ @@
156
   _  @
  / \\ @
 ( � )@
  \\_/ @@
157
   _  @
  / \\ @
 ( � )@
  \\_/ @@
158
   _  @
  / \\ @
 ( � )@
  \\_/ @@
159
   _  @
  / \\ @
 ( � )@
  \\_/ @@
160  NO-BREAK SPACE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
161  INVERTED EXCLAMATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
162  CENT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
163  POUND SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
164  CURRENCY SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
165  YEN SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
166  BROKEN BAR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
167  SECTION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
168  DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
169  COPYRIGHT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
170  FEMININE ORDINAL INDICATOR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
172  NOT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
173  SOFT HYPHEN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
174  REGISTERED SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
175  MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
176  DEGREE SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
177  PLUS-MINUS SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
178  SUPERSCRIPT TWO
   _  @
  / \\ @
 ( � )@
  \\_/ @@
179  SUPERSCRIPT THREE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
180  ACUTE ACCENT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
181  MICRO SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
182  PILCROW SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
183  MIDDLE DOT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
184  CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
185  SUPERSCRIPT ONE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
186  MASCULINE ORDINAL INDICATOR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
188  VULGAR FRACTION ONE QUARTER
   _  @
  / \\ @
 ( � )@
  \\_/ @@
189  VULGAR FRACTION ONE HALF
   _  @
  / \\ @
 ( � )@
  \\_/ @@
190  VULGAR FRACTION THREE QUARTERS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
191  INVERTED QUESTION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
193  LATIN CAPITAL LETTER A WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
195  LATIN CAPITAL LETTER A WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
198  LATIN CAPITAL LETTER AE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
204  LATIN CAPITAL LETTER I WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
208  LATIN CAPITAL LETTER ETH
   _  @
  / \\ @
 ( � )@
  \\_/ @@
209  LATIN CAPITAL LETTER N WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
211  LATIN CAPITAL LETTER O WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
213  LATIN CAPITAL LETTER O WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
215  MULTIPLICATION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
218  LATIN CAPITAL LETTER U WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
222  LATIN CAPITAL LETTER THORN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
223  LATIN SMALL LETTER SHARP S
   _  @
  / \\ @
 ( � )@
  \\_/ @@
224  LATIN SMALL LETTER A WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
225  LATIN SMALL LETTER A WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
227  LATIN SMALL LETTER A WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
230  LATIN SMALL LETTER AE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
231  LATIN SMALL LETTER C WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
232  LATIN SMALL LETTER E WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
233  LATIN SMALL LETTER E WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
236  LATIN SMALL LETTER I WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
237  LATIN SMALL LETTER I WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
239  LATIN SMALL LETTER I WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
240  LATIN SMALL LETTER ETH
   _  @
  / \\ @
 ( � )@
  \\_/ @@
241  LATIN SMALL LETTER N WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
242  LATIN SMALL LETTER O WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
243  LATIN SMALL LETTER O WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
245  LATIN SMALL LETTER O WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
247  DIVISION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
248  LATIN SMALL LETTER O WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
249  LATIN SMALL LETTER U WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
250  LATIN SMALL LETTER U WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
253  LATIN SMALL LETTER Y WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
254  LATIN SMALL LETTER THORN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0101  LATIN SMALL LETTER A WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0105  LATIN SMALL LETTER A WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010D  LATIN SMALL LETTER C WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010F  LATIN SMALL LETTER D WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0111  LATIN SMALL LETTER D WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0113  LATIN SMALL LETTER E WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0119  LATIN SMALL LETTER E WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011B  LATIN SMALL LETTER E WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011F  LATIN SMALL LETTER G WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0127  LATIN SMALL LETTER H WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0129  LATIN SMALL LETTER I WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012B  LATIN SMALL LETTER I WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012F  LATIN SMALL LETTER I WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0131  LATIN SMALL LETTER DOTLESS I
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0138  LATIN SMALL LETTER KRA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013D  LATIN CAPITAL LETTER L WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013E  LATIN SMALL LETTER L WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0142  LATIN SMALL LETTER L WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0148  LATIN SMALL LETTER N WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014A  LATIN CAPITAL LETTER ENG
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014B  LATIN SMALL LETTER ENG
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0159  LATIN SMALL LETTER R WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0160  LATIN CAPITAL LETTER S WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0161  LATIN SMALL LETTER S WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0164  LATIN CAPITAL LETTER T WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0165  LATIN SMALL LETTER T WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0167  LATIN SMALL LETTER T WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0169  LATIN SMALL LETTER U WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016D  LATIN SMALL LETTER U WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0173  LATIN SMALL LETTER U WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017E  LATIN SMALL LETTER Z WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02C7  CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02D8  BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02D9  DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02DB  OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02DD  DOUBLE ACUTE ACCENT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
`,tr=`flf2a 3 2 6 1 11 0 16513
Digital by Glenn Chappell 1/94 -- based on Bubble
Includes characters 128-255
Enhanced for Latin-2,3,4 by John Cowan <cowan@ccil.org>
Latin character sets supported only if your screen font does
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 @
 @
 @@
 +-+@
 |!|@
 +-+@@
 +-+@
 |"|@
 +-+@@
 +-+@
 |#|@
 +-+@@
 +-+@
 |$|@
 +-+@@
 +-+@
 |%|@
 +-+@@
 +-+@
 |&|@
 +-+@@
 +-+@
 |'|@
 +-+@@
 +-+@
 |(|@
 +-+@@
 +-+@
 |)|@
 +-+@@
 +-+@
 |*|@
 +-+@@
 +-+@
 |+|@
 +-+@@
 +-+@
 |,|@
 +-+@@
 +-+@
 |-|@
 +-+@@
 +-+@
 |.|@
 +-+@@
 +-+@
 |/|@
 +-+@@
 +-+@
 |0|@
 +-+@@
 +-+@
 |1|@
 +-+@@
 +-+@
 |2|@
 +-+@@
 +-+@
 |3|@
 +-+@@
 +-+@
 |4|@
 +-+@@
 +-+@
 |5|@
 +-+@@
 +-+@
 |6|@
 +-+@@
 +-+@
 |7|@
 +-+@@
 +-+@
 |8|@
 +-+@@
 +-+@
 |9|@
 +-+@@
 +-+@
 |:|@
 +-+@@
 +-+@
 |;|@
 +-+@@
 +-+@
 |<|@
 +-+@@
 +-+@
 |=|@
 +-+@@
 +-+@
 |>|@
 +-+@@
 +-+@
 |?|@
 +-+@@
 +-+@
 |@|@
 +-+@@
 +-+@
 |A|@
 +-+@@
 +-+@
 |B|@
 +-+@@
 +-+@
 |C|@
 +-+@@
 +-+@
 |D|@
 +-+@@
 +-+@
 |E|@
 +-+@@
 +-+@
 |F|@
 +-+@@
 +-+@
 |G|@
 +-+@@
 +-+@
 |H|@
 +-+@@
 +-+@
 |I|@
 +-+@@
 +-+@
 |J|@
 +-+@@
 +-+@
 |K|@
 +-+@@
 +-+@
 |L|@
 +-+@@
 +-+@
 |M|@
 +-+@@
 +-+@
 |N|@
 +-+@@
 +-+@
 |O|@
 +-+@@
 +-+@
 |P|@
 +-+@@
 +-+@
 |Q|@
 +-+@@
 +-+@
 |R|@
 +-+@@
 +-+@
 |S|@
 +-+@@
 +-+@
 |T|@
 +-+@@
 +-+@
 |U|@
 +-+@@
 +-+@
 |V|@
 +-+@@
 +-+@
 |W|@
 +-+@@
 +-+@
 |X|@
 +-+@@
 +-+@
 |Y|@
 +-+@@
 +-+@
 |Z|@
 +-+@@
 +-+@
 |[|@
 +-+@@
 +-+@
 |\\|@
 +-+@@
 +-+@
 |]|@
 +-+@@
 +-+@
 |^|@
 +-+@@
 +-+@
 |_|@
 +-+@@
 +-+@
 |\`|@
 +-+@@
 +-+@
 |a|@
 +-+@@
 +-+@
 |b|@
 +-+@@
 +-+@
 |c|@
 +-+@@
 +-+@
 |d|@
 +-+@@
 +-+@
 |e|@
 +-+@@
 +-+@
 |f|@
 +-+@@
 +-+@
 |g|@
 +-+@@
 +-+@
 |h|@
 +-+@@
 +-+@
 |i|@
 +-+@@
 +-+@
 |j|@
 +-+@@
 +-+@
 |k|@
 +-+@@
 +-+@
 |l|@
 +-+@@
 +-+@
 |m|@
 +-+@@
 +-+@
 |n|@
 +-+@@
 +-+@
 |o|@
 +-+@@
 +-+@
 |p|@
 +-+@@
 +-+@
 |q|@
 +-+@@
 +-+@
 |r|@
 +-+@@
 +-+@
 |s|@
 +-+@@
 +-+@
 |t|@
 +-+@@
 +-+@
 |u|@
 +-+@@
 +-+@
 |v|@
 +-+@@
 +-+@
 |w|@
 +-+@@
 +-+@
 |x|@
 +-+@@
 +-+@
 |y|@
 +-+@@
 +-+@
 |z|@
 +-+@@
 +-+@
 |{|@
 +-+@@
 +-+@
 |||@
 +-+@@
 +-+@
 |}|@
 +-+@@
 +-+@
 |~|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
128
 +-+@
 |�|@
 +-+@@
129
 +-+@
 |�|@
 +-+@@
130
 +-+@
 |�|@
 +-+@@
131
 +-+@
 |�|@
 +-+@@
132
 +-+@
 |�|@
 +-+@@
133
 +-+@
 |�|@
 +-+@@
134
 +-+@
 |�|@
 +-+@@
135
 +-+@
 |�|@
 +-+@@
136
 +-+@
 |�|@
 +-+@@
137
 +-+@
 |�|@
 +-+@@
138
 +-+@
 |�|@
 +-+@@
139
 +-+@
 |�|@
 +-+@@
140
 +-+@
 |�|@
 +-+@@
141
 +-+@
 |�|@
 +-+@@
142
 +-+@
 |�|@
 +-+@@
143
 +-+@
 |�|@
 +-+@@
144
 +-+@
 |�|@
 +-+@@
145
 +-+@
 |�|@
 +-+@@
146
 +-+@
 |�|@
 +-+@@
147
 +-+@
 |�|@
 +-+@@
148
 +-+@
 |�|@
 +-+@@
149
 +-+@
 |�|@
 +-+@@
150
 +-+@
 |�|@
 +-+@@
151
 +-+@
 |�|@
 +-+@@
152
 +-+@
 |�|@
 +-+@@
153
 +-+@
 |�|@
 +-+@@
154
 +-+@
 |�|@
 +-+@@
155
 +-+@
 |�|@
 +-+@@
156
 +-+@
 |�|@
 +-+@@
157
 +-+@
 |�|@
 +-+@@
158
 +-+@
 |�|@
 +-+@@
159
 +-+@
 |�|@
 +-+@@
160  NO-BREAK SPACE
 +-+@
 |�|@
 +-+@@
161  INVERTED EXCLAMATION MARK
 +-+@
 |�|@
 +-+@@
162  CENT SIGN
 +-+@
 |�|@
 +-+@@
163  POUND SIGN
 +-+@
 |�|@
 +-+@@
164  CURRENCY SIGN
 +-+@
 |�|@
 +-+@@
165  YEN SIGN
 +-+@
 |�|@
 +-+@@
166  BROKEN BAR
 +-+@
 |�|@
 +-+@@
167  SECTION SIGN
 +-+@
 |�|@
 +-+@@
168  DIAERESIS
 +-+@
 |�|@
 +-+@@
169  COPYRIGHT SIGN
 +-+@
 |�|@
 +-+@@
170  FEMININE ORDINAL INDICATOR
 +-+@
 |�|@
 +-+@@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
 +-+@
 |�|@
 +-+@@
172  NOT SIGN
 +-+@
 |�|@
 +-+@@
173  SOFT HYPHEN
 +-+@
 |�|@
 +-+@@
174  REGISTERED SIGN
 +-+@
 |�|@
 +-+@@
175  MACRON
 +-+@
 |�|@
 +-+@@
176  DEGREE SIGN
 +-+@
 |�|@
 +-+@@
177  PLUS-MINUS SIGN
 +-+@
 |�|@
 +-+@@
178  SUPERSCRIPT TWO
 +-+@
 |�|@
 +-+@@
179  SUPERSCRIPT THREE
 +-+@
 |�|@
 +-+@@
180  ACUTE ACCENT
 +-+@
 |�|@
 +-+@@
181  MICRO SIGN
 +-+@
 |�|@
 +-+@@
182  PILCROW SIGN
 +-+@
 |�|@
 +-+@@
183  MIDDLE DOT
 +-+@
 |�|@
 +-+@@
184  CEDILLA
 +-+@
 |�|@
 +-+@@
185  SUPERSCRIPT ONE
 +-+@
 |�|@
 +-+@@
186  MASCULINE ORDINAL INDICATOR
 +-+@
 |�|@
 +-+@@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 +-+@
 |�|@
 +-+@@
188  VULGAR FRACTION ONE QUARTER
 +-+@
 |�|@
 +-+@@
189  VULGAR FRACTION ONE HALF
 +-+@
 |�|@
 +-+@@
190  VULGAR FRACTION THREE QUARTERS
 +-+@
 |�|@
 +-+@@
191  INVERTED QUESTION MARK
 +-+@
 |�|@
 +-+@@
192  LATIN CAPITAL LETTER A WITH GRAVE
 +-+@
 |�|@
 +-+@@
193  LATIN CAPITAL LETTER A WITH ACUTE
 +-+@
 |�|@
 +-+@@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
195  LATIN CAPITAL LETTER A WITH TILDE
 +-+@
 |�|@
 +-+@@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
198  LATIN CAPITAL LETTER AE
 +-+@
 |�|@
 +-+@@
199  LATIN CAPITAL LETTER C WITH CEDILLA
 +-+@
 |�|@
 +-+@@
200  LATIN CAPITAL LETTER E WITH GRAVE
 +-+@
 |�|@
 +-+@@
201  LATIN CAPITAL LETTER E WITH ACUTE
 +-+@
 |�|@
 +-+@@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
204  LATIN CAPITAL LETTER I WITH GRAVE
 +-+@
 |�|@
 +-+@@
205  LATIN CAPITAL LETTER I WITH ACUTE
 +-+@
 |�|@
 +-+@@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
208  LATIN CAPITAL LETTER ETH
 +-+@
 |�|@
 +-+@@
209  LATIN CAPITAL LETTER N WITH TILDE
 +-+@
 |�|@
 +-+@@
210  LATIN CAPITAL LETTER O WITH GRAVE
 +-+@
 |�|@
 +-+@@
211  LATIN CAPITAL LETTER O WITH ACUTE
 +-+@
 |�|@
 +-+@@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
213  LATIN CAPITAL LETTER O WITH TILDE
 +-+@
 |�|@
 +-+@@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
215  MULTIPLICATION SIGN
 +-+@
 |�|@
 +-+@@
216  LATIN CAPITAL LETTER O WITH STROKE
 +-+@
 |�|@
 +-+@@
217  LATIN CAPITAL LETTER U WITH GRAVE
 +-+@
 |�|@
 +-+@@
218  LATIN CAPITAL LETTER U WITH ACUTE
 +-+@
 |�|@
 +-+@@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
221  LATIN CAPITAL LETTER Y WITH ACUTE
 +-+@
 |�|@
 +-+@@
222  LATIN CAPITAL LETTER THORN
 +-+@
 |�|@
 +-+@@
223  LATIN SMALL LETTER SHARP S
 +-+@
 |�|@
 +-+@@
224  LATIN SMALL LETTER A WITH GRAVE
 +-+@
 |�|@
 +-+@@
225  LATIN SMALL LETTER A WITH ACUTE
 +-+@
 |�|@
 +-+@@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
227  LATIN SMALL LETTER A WITH TILDE
 +-+@
 |�|@
 +-+@@
228  LATIN SMALL LETTER A WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
229  LATIN SMALL LETTER A WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
230  LATIN SMALL LETTER AE
 +-+@
 |�|@
 +-+@@
231  LATIN SMALL LETTER C WITH CEDILLA
 +-+@
 |�|@
 +-+@@
232  LATIN SMALL LETTER E WITH GRAVE
 +-+@
 |�|@
 +-+@@
233  LATIN SMALL LETTER E WITH ACUTE
 +-+@
 |�|@
 +-+@@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
235  LATIN SMALL LETTER E WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
236  LATIN SMALL LETTER I WITH GRAVE
 +-+@
 |�|@
 +-+@@
237  LATIN SMALL LETTER I WITH ACUTE
 +-+@
 |�|@
 +-+@@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
239  LATIN SMALL LETTER I WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
240  LATIN SMALL LETTER ETH
 +-+@
 |�|@
 +-+@@
241  LATIN SMALL LETTER N WITH TILDE
 +-+@
 |�|@
 +-+@@
242  LATIN SMALL LETTER O WITH GRAVE
 +-+@
 |�|@
 +-+@@
243  LATIN SMALL LETTER O WITH ACUTE
 +-+@
 |�|@
 +-+@@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
245  LATIN SMALL LETTER O WITH TILDE
 +-+@
 |�|@
 +-+@@
246  LATIN SMALL LETTER O WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
247  DIVISION SIGN
 +-+@
 |�|@
 +-+@@
248  LATIN SMALL LETTER O WITH STROKE
 +-+@
 |�|@
 +-+@@
249  LATIN SMALL LETTER U WITH GRAVE
 +-+@
 |�|@
 +-+@@
250  LATIN SMALL LETTER U WITH ACUTE
 +-+@
 |�|@
 +-+@@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
252  LATIN SMALL LETTER U WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
253  LATIN SMALL LETTER Y WITH ACUTE
 +-+@
 |�|@
 +-+@@
254  LATIN SMALL LETTER THORN
 +-+@
 |�|@
 +-+@@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0101  LATIN SMALL LETTER A WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0103  LATIN SMALL LETTER A WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0107  LATIN SMALL LETTER C WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x010C  LATIN CAPITAL LETTER C WITH CARON
 +-+@
 |�|@
 +-+@@
0x010D  LATIN SMALL LETTER C WITH CARON
 +-+@
 |�|@
 +-+@@
0x010E  LATIN CAPITAL LETTER D WITH CARON
 +-+@
 |�|@
 +-+@@
0x010F  LATIN SMALL LETTER D WITH CARON
 +-+@
 |�|@
 +-+@@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0111  LATIN SMALL LETTER D WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0113  LATIN SMALL LETTER E WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
 +-+@
 |�|@
 +-+@@
0x011B  LATIN SMALL LETTER E WITH CARON
 +-+@
 |�|@
 +-+@@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
 +-+@
 |�|@
 +-+@@
0x011F  LATIN SMALL LETTER G WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0127  LATIN SMALL LETTER H WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
 +-+@
 |�|@
 +-+@@
0x0129  LATIN SMALL LETTER I WITH TILDE
 +-+@
 |�|@
 +-+@@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 +-+@
 |�|@
 +-+@@
0x012B  LATIN SMALL LETTER I WITH MACRON
 +-+@
 |�|@
 +-+@@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0131  LATIN SMALL LETTER DOTLESS I
 +-+@
 |�|@
 +-+@@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0138  LATIN SMALL LETTER KRA
 +-+@
 |�|@
 +-+@@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x013A  LATIN SMALL LETTER L WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
 +-+@
 |�|@
 +-+@@
0x013E  LATIN SMALL LETTER L WITH CARON
 +-+@
 |�|@
 +-+@@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0142  LATIN SMALL LETTER L WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0144  LATIN SMALL LETTER N WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0147  LATIN CAPITAL LETTER N WITH CARON
 +-+@
 |�|@
 +-+@@
0x0148  LATIN SMALL LETTER N WITH CARON
 +-+@
 |�|@
 +-+@@
0x014A  LATIN CAPITAL LETTER ENG
 +-+@
 |�|@
 +-+@@
0x014B  LATIN SMALL LETTER ENG
 +-+@
 |�|@
 +-+@@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
 +-+@
 |�|@
 +-+@@
0x014D  LATIN SMALL LETTER O WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0155  LATIN SMALL LETTER R WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0158  LATIN CAPITAL LETTER R WITH CARON
 +-+@
 |�|@
 +-+@@
0x0159  LATIN SMALL LETTER R WITH CARON
 +-+@
 |�|@
 +-+@@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x015B  LATIN SMALL LETTER S WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
 +-+@
 |�|@
 +-+@@
0x0161  LATIN SMALL LETTER S WITH CARON
 +-+@
 |�|@
 +-+@@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
 +-+@
 |�|@
 +-+@@
0x0165  LATIN SMALL LETTER T WITH CARON
 +-+@
 |�|@
 +-+@@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0167  LATIN SMALL LETTER T WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
 +-+@
 |�|@
 +-+@@
0x0169  LATIN SMALL LETTER U WITH TILDE
 +-+@
 |�|@
 +-+@@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
 +-+@
 |�|@
 +-+@@
0x016B  LATIN SMALL LETTER U WITH MACRON
 +-+@
 |�|@
 +-+@@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
 +-+@
 |�|@
 +-+@@
0x016D  LATIN SMALL LETTER U WITH BREVE
 +-+@
 |�|@
 +-+@@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
 +-+@
 |�|@
 +-+@@
0x017E  LATIN SMALL LETTER Z WITH CARON
 +-+@
 |�|@
 +-+@@
0x02C7  CARON
 +-+@
 |�|@
 +-+@@
0x02D8  BREVE
 +-+@
 |�|@
 +-+@@
0x02D9  DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x02DB  OGONEK
 +-+@
 |�|@
 +-+@@
0x02DD  DOUBLE ACUTE ACCENT
 +-+@
 |�|@
 +-+@@
`,er=`flf2a$ 8 6 14 15 16
DOOM by Frans P. de Vries <fpv@xymph.iaf.nl>  18 Jun 1996
based on Big by Glenn Chappell 4/93 -- based on Standard
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
8    - height of a character
6    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

$@
$@
$@
$@
$@
$@
$@
$@@
 _ @
| |@
| |@
| |@
|_|@
(_)@
   @
   @@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @
     @@
   _  _   @
 _| || |_ @
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_|  @
          @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @
     @
     @@
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @
        @@
 _ @
( )@
|/ @
 $ @
 $ @
 $ @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
| | @
 \\_\\@
    @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
 | |@
/_/ @
    @@
    _    @
 /\\| |/\\ @
 \\ \` ' / @
|_     _|@
 / , . \\ @
 \\/|_|\\/ @
         @
         @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
   $   @
       @
       @@
   @
   @
   @
   @
 _ @
( )@
|/ @
   @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @
        @@
   @
   @
   @
   @
 _ @
(_)@
   @
   @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
 _____ @
|  _  |@
| |/' |@
|  /| |@
\\ |_/ /@
 \\___/ @
       @
       @@
 __  @
/  | @
\`| | @
 | | @
_| |_@
\\___/@
     @
     @@
 _____ @
/ __  \\@
\`' / /'@
  / /  @
./ /___@
\\_____/@
       @
       @@
 _____ @
|____ |@
    / /@
  $ \\ \\@
.___/ /@
\\____/ @
       @
       @@
   ___ @
  /   |@
 / /| |@
/ /_| |@
\\___  |@
    |_/@
       @
       @@
 _____ @
|  ___|@
|___ \\ @
    \\ \\@
/\\__/ /@
\\____/ @
       @
       @@
  ____ @
 / ___|@
/ /___ @
| ___ \\@
| \\_/ |@
\\_____/@
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /   @
\\_/    @
       @
       @@
 _____ @
|  _  |@
 \\ V / @
 / _ \\ @
| |_| |@
\\_____/@
       @
       @@
 _____ @
|  _  |@
| |_| |@
\\____ |@
.___/ /@
\\____/ @
       @
       @@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @
   @@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @
        @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
 ___  @
|__ \\ @
   ) |@
  / / @
 |_|  @
 (_)  @
      @
      @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
  ___  @
 / _ \\ @
/ /_\\ \\@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
______ @
| ___ \\@
| |_/ /@
| ___ \\@
| |_/ /@
\\____/ @
       @
       @@
 _____ @
/  __ \\@
| /  \\/@
| |    @
| \\__/\\@
 \\____/@
       @
       @@
______ @
|  _  \\@
| | | |@
| | | |@
| |/ / @
|___/  @
       @
       @@
 _____ @
|  ___|@
| |__  @
|  __| @
| |___ @
\\____/ @
       @
       @@
______ @
|  ___|@
| |_   @
|  _|  @
| |    @
\\_|    @
       @
       @@
 _____ @
|  __ \\@
| |  \\/@
| | __ @
| |_\\ \\@
 \\____/@
       @
       @@
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
 _| |_ @
 \\___/ @
       @
       @@
   ___ @
  |_  |@
  $ | |@
    | |@
/\\__/ /@
\\____/ @
       @
       @@
 _   __@
| | / /@
| |/ / @
|    \\ @
| |\\  \\@
\\_| \\_/@
       @
       @@
 _     @
| | $  @
| | $  @
| |    @
| |____@
\\_____/@
       @
       @@
___  ___@
|  \\/  |@
| .  . |@
| |\\/| |@
| |  | |@
\\_|  |_/@
        @
        @@
 _   _ @
| \\ | |@
|  \\| |@
| . \` |@
| |\\  |@
\\_| \\_/@
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
______ @
| ___ \\@
| |_/ /@
|  __/ @
| |    @
\\_|    @
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\/' /@
 \\_/\\_\\@
       @
       @@
______ @
| ___ \\@
| |_/ /@
|    / @
| |\\ \\ @
\\_| \\_|@
       @
       @@
 _____ @
/  ___|@
\\ \`--. @
 \`--. \\@
/\\__/ /@
\\____/ @
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
  | |  @
  \\_/  @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _    _ @
| |  | |@
| |  | |@
| |/\\| |@
\\  /\\  /@
 \\/  \\/ @
        @
        @@
__   __@
\\ \\ / /@
 \\ V / @
 /   \\ @
/ /^\\ \\@
\\/   \\/@
       @
       @@
__   __@
\\ \\ / /@
 \\ V / @
  \\ /  @
  | |  @
  \\_/  @
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /___@
\\_____/@
       @
       @@
 ___ @
|  _|@
| |  @
| |  @
| |  @
| |_ @
|___|@
     @@
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
|_  |@
  | |@
  | |@
  | |@
 _| |@
|___|@
     @@
 /\\ @
|/\\|@
  $ @
  $ @
  $ @
  $ @
    @
    @@
        @
        @
        @
        @
        @
    $   @
 ______ @
|______|@@
 _ @
( )@
 \\|@
 $ @
 $ @
 $ @
   @
   @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _     @
| |    @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @
       @@
      @
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @
      @@
     _ @
    | |@
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
      @
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @
      @@
  __ @
 / _|@
| |_ @
|  _|@
| |  @
|_|  @
     @
     @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
  __/ |@
 |___/ @@
 _     @
| |    @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
 _ @
(_)@
 _ @
| |@
| |@
|_|@
   @
   @@
   _ @
  (_)@
   _ @
  | |@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| |   @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
 _ @
| |@
| |@
| |@
| |@
|_|@
   @
   @@
           @
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @
           @@
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
       @
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
       @
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
| |    @
|_|    @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    | |@
    |_|@@
      @
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @
      @@
     @
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @
     @@
 _   @
| |  @
| |_ @
| __|@
| |_ @
 \\__|@
     @
     @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @
       @@
          @
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @
          @@
      @
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @
      @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
  __/ |@
 |___/ @@
     @
     @
 ____@
|_  /@
 / / @
/___|@
     @
     @@
   __@
  / /@
 | | @
/ /  @
\\ \\  @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  \\ \\@
  / /@
 | | @
/_/  @
     @@
 /\\/|@
|/\\/ @
  $  @
  $  @
  $  @
  $  @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
/ /_\\ \\@
|  _  |@
\\_| |_/@
       @
       @@
 _   _ @
(_)_(_)@
|  _  |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
\\_|    @
       @@
`,ar=`flf2a$ 9 8 13 16 16
Epic by Claude Martins 12/94

Figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
8    - height of a character, not including descenders
13   - max line length (excluding comment lines) + a fudge factor
16   - default smushmode for this font
16   - number of comment lines

$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@@
 _ @
( )@
| |@
| |@
| |@
(_)@
 _ @
(_)@
   @@
 _  _ @
( )( )@
 \\||/ @
      @
      @
      @
      @
      @
      @@
   _   _   @
  ( ) ( )  @
 _| |_| |_ @
(_   _   _)@
 _| (_) |_ @
(_   _   _)@
  | | | |  @
  (_) (_)  @
           @@
    _    @
 __|_|___@
(  _____/@
| (|_|__ @
(_____  )@
/\\_|_|) |@
\\_______)@
   |_|   @
         @@
       @
     /\\@
()  / /@
   / / @
  / /  @
 / /   @
/ /  ()@
\\/     @
       @@
   __   @
  /__\\  @
 ( \\/ ) @
  \\  /  @
  /  \\/\\@
 / /\\  /@
(  \\/  \\@
 \\___/\\/@
        @@
 _ @
( )@
|/ @
   @
   @
   @
   @
   @
   @@
   _ @
  / )@
 / / @
( (  @
| |  @
( (  @
 \\ \\ @
  \\_)@
     @@
 _   @
( \\  @
 \\ \\ @
  ) )@
  | |@
  ) )@
 / / @
(_/  @
     @@
          @
 /\\    /\\ @
 \\ \\  / / @
 _) () (_ @
(_      _)@
  ) () (  @
 / /  \\ \\ @
 \\/    \\/ @
          @@
    _    @
   ( )   @
   | |   @
 __| |__ @
(__   __)@
   | |   @
   | |   @
   (_)   @
         @@
   @
   @
   @
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
       @
 _____ @
(_____)@
       @
       @
       @
       @@
   @
   @
   @
   @
   @
   @
 _ @
(_)@
   @@
       @
     /\\@
    / /@
   / / @
  / /  @
 / /   @
/ /    @
\\/     @
       @@
 _______ @
(  __   )@
| (  )  |@
| | /   |@
| (/ /) |@
|   / | |@
|  (__) |@
(_______)@
         @@
  __   @
 /  \\  @
 \\/) ) @
   | | @
   | | @
   | | @
 __) (_@
 \\____/@
       @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
  _/   / @
 /   _/  @
(   (__/\\@
\\_______/@
         @@
 ______  @
/ ___  \\ @
\\/   \\  \\@
   ___) /@
  (___ ( @
      ) \\@
/\\___/  /@
\\______/ @
         @@
    ___   @
   /   )  @
  / /) |  @
 / (_) (_ @
(____   _)@
     ) (  @
     | |  @
     (_)  @
          @@
 _______ @
(  ____ \\@
| (    \\/@
| (____  @
(_____ \\ @
      ) )@
/\\____) )@
\\______/ @
         @@
  ______ @
 / ____ \\@
( (    \\/@
| (____  @
|  ___ \\ @
| (   ) )@
( (___) )@
 \\_____/ @
         @@
 ______  @
/ ___  \\ @
\\/   )  )@
    /  / @
   /  /  @
  /  /   @
 /  /    @
 \\_/     @
         @@
  _____  @
 / ___ \\ @
( (___) )@
 \\     / @
 / ___ \\ @
( (   ) )@
( (___) )@
 \\_____/ @
         @@
  _____  @
 / ___ \\ @
( (   ) )@
( (___) |@
 \\____  |@
      ) |@
/\\____) )@
\\______/ @
         @@
   @
   @
 _ @
(_)@
   @
 _ @
(_)@
   @
   @@
   @
   @
   @
 _ @
(_)@
   @
 _ @
( )@
|/ @@
    _ @
   / )@
  / / @
 / /  @
( (   @
 \\ \\  @
  \\ \\ @
   \\_)@
      @@
     @
     @
 ___ @
(___)@
 ___ @
(___)@
     @
     @
     @@
 _    @
( \\   @
 \\ \\  @
  \\ \\ @
   ) )@
  / / @
 / /  @
(_/   @
      @@
  _____  @
 / ___ \\ @
( (   ) )@
 \\/  / / @
    ( (  @
    | |  @
    (_)  @
     _   @
    (_)  @@
   _____   @
  / ___ \\  @
 / / _ \\ \\ @
( ( / \\ ) )@
| |(()// / @
( ( \\___/  @
 \\ \\____/\\ @
  \\______/ @
           @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
 ____ @
(  __)@
| (   @
| |   @
| |   @
| |   @
| (__ @
(____)@
      @@
       @
/\\     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\ \\@
     \\/@
       @@
 ____ @
(__  )@
   ) |@
   | |@
   | |@
   | |@
 __) |@
(____)@
      @@
 /\\ @
(/\\)@
    @
    @
    @
    @
    @
    @
    @@
       @
       @
       @
       @
       @
       @
       @
 _____ @
(_____)@@
 _ @
( )@
 \\|@
   @
   @
   @
   @
   @
   @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
  __ @
 ( _)@
 )(  @
/ |  @
\\ |  @
 )(_ @
 (__)@
     @
     @@
 _ @
( )@
| |@
(_)@
 _ @
( )@
| |@
(_)@
   @@
 __  @
(_ ) @
  )( @
  | \\@
  | /@
 _)( @
(__) @
     @
     @@
  _    @
 /_\\_/)@
(/ \\_/ @
       @
       @
       @
       @
       @
       @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 ______  @
(  ___ \\ @
| (___) )@
|  ___ / @
| (___)\\ @
| |\\___/ @
| )      @
|/       @
         @@
`,lr=`flf2a$ 11 11 18 -1 23
isometric1.flf

Figlet conversion by Kent Nassen (kentn@cyberspace.org), 8-10-94, based
on the fonts posted by Lennert Stock:

From: stock@fwi.uva.nl (Lennert Stock)
Date: 15 Jul 1994 00:04:25 GMT

Here are some fonts. Non-figlet I'm afraid, if you wanna convert them, be
my guest. I posted the isometric fonts before.

------------------------------------------------------------------------------

     .x%%%%%%x.                                             .x%%%%%%x.
    ,%%%%%%%%%%.                                           .%%%%%%%%%%.
   ,%%%'  )'  \\)                                           :(  \`(  \`%%%.
  ,%x%)________) --------- L e n n e r t   S t o c k       ( _   __ (%x%.
  (%%%~^88P~88P|                                           |~=> .=-~ %%%)
  (%%::. .:,\\ .'                                           \`. /,:. .::%%)
  \`;%:\`\\. \`-' |                                             | \`-' ./':%:'
   \`\`x\`. -===.'                   stock@fwi.uva.nl -------- \`.===- .'x''
    / \`:\`.__.;                                               :.__.':' \\
 .d8b.     ..\`.                                             .'..     .d8b.
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\__\\ @
 /:/\\:\\ \\:|__|@
 \\:\\~\\:\\/:/  /@
  \\:\\ \\::/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\  \\/__/@
  \\:\\  \\      @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\__\\ @
 /:/__/ \\:|__|@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\:\\~\\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\ \\/__/  @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\ \\/__/@
      \\:\\__\\  @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/_\\:\\__\\@
 \\:\\  /\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\  \\ ___ @
 /:/\\:\\  /\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
            @
      ___   @
     /\\  \\  @
     \\:\\  \\ @
     /::\\__\\@
  __/:/\\/__/@
 /\\/:/  /   @
 \\::/__/    @
  \\:\\__\\    @
   \\/__/    @
            @@
       ___   @
      /\\  \\  @
      \\:\\  \\ @
  ___ /::\\__\\@
 /\\  /:/\\/__/@
 \\:\\/:/  /   @
  \\::/  /    @
   \\/__/     @
             @
             @
             @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\__\\____ @
 /:/\\:::::\\__\\@
 \\/_|:|~~|~   @
    |:|  |    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___ @
     /\\__\\@
    /:/  /@
   /:/  / @
  /:/  /  @
 /:/__/   @
 \\:\\  \\   @
  \\:\\  \\  @
   \\:\\  \\ @
    \\:\\__\\@
     \\/__/@@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|__|__ @
 /:/ |::::\\__\\@
 \\/__/~~/:/  /@
       /:/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|  |__ @
 /:/ |:| /\\__\\@
 \\/__|:|/:/  /@
     |:/:/  / @
     |::/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
   \\:\\~\\:\\  \\ @
    \\:\\ \\:\\__\\@
     \\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/_|::\\/:/  /@
    |:|::/  / @
    |:|\\/__/  @
    |:|  |    @
     \\|__|    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\ \\  \\  @
  _\\:\\~\\ \\  \\ @
 /\\ \\:\\ \\ \\__\\@
 \\:\\ \\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
      /::\\  \\ @
     /:/\\:\\__\\@
    /:/  \\/__/@
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/  /  ___ @
 /:/__/  /\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/__/  ___ @
  |:|  | /\\__\\@
  |:|  |/:/  /@
  |:|__/:/  / @
   \\::::/__/  @
    ~~~~      @
              @@
      ___     @
     /\\__\\    @
    /:/ _/_   @
   /:/ /\\__\\  @
  /:/ /:/ _/_ @
 /:/_/:/ /\\__\\@
 \\:\\/:/ /:/  /@
  \\::/_/:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
 ____/::::\\__\\@
 \\::::/~~/~   @
  ~~|:|~~|    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
     /::::\\__\\@
    /:/~~/~   @
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
       \\:\\  \\ @
 _______\\:\\__\\@
 \\::::::::/__/@
  \\:\\~~\\~~    @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /::::\\  \\  @
  /::::::\\  \\ @
 /:::LS:::\\__\\@
 \\::1994::/  /@
  \\::::::/  / @
   \\::::/  /  @
    \\::/  /   @
     \\/__/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\__\\ @
 /:/\\:\\ \\:|__|@
 \\:\\~\\:\\/:/  /@
  \\:\\ \\::/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\  \\/__/@
  \\:\\  \\      @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\__\\ @
 /:/__/ \\:|__|@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\:\\~\\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\ \\/__/  @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\ \\/__/@
      \\:\\__\\  @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/_\\:\\__\\@
 \\:\\  /\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\  \\ ___ @
 /:/\\:\\  /\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
            @
      ___   @
     /\\  \\  @
     \\:\\  \\ @
     /::\\__\\@
  __/:/\\/__/@
 /\\/:/  /   @
 \\::/__/    @
  \\:\\__\\    @
   \\/__/    @
            @@
       ___   @
      /\\  \\  @
      \\:\\  \\ @
  ___ /::\\__\\@
 /\\  /:/\\/__/@
 \\:\\/:/  /   @
  \\::/  /    @
   \\/__/     @
             @
             @
             @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\__\\____ @
 /:/\\:::::\\__\\@
 \\/_|:|~~|~   @
    |:|  |    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___ @
     /\\__\\@
    /:/  /@
   /:/  / @
  /:/  /  @
 /:/__/   @
 \\:\\  \\   @
  \\:\\  \\  @
   \\:\\  \\ @
    \\:\\__\\@
     \\/__/@@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|__|__ @
 /:/ |::::\\__\\@
 \\/__/~~/:/  /@
       /:/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|  |__ @
 /:/ |:| /\\__\\@
 \\/__|:|/:/  /@
     |:/:/  / @
     |::/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
   \\:\\~\\:\\  \\ @
    \\:\\ \\:\\__\\@
     \\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/_|::\\/:/  /@
    |:|::/  / @
    |:|\\/__/  @
    |:|  |    @
     \\|__|    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\ \\  \\  @
  _\\:\\~\\ \\  \\ @
 /\\ \\:\\ \\ \\__\\@
 \\:\\ \\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
      /::\\  \\ @
     /:/\\:\\__\\@
    /:/  \\/__/@
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/  /  ___ @
 /:/__/  /\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/__/  ___ @
  |:|  | /\\__\\@
  |:|  |/:/  /@
  |:|__/:/  / @
   \\::::/__/  @
    ~~~~      @
              @@
      ___     @
     /\\__\\    @
    /:/ _/_   @
   /:/ /\\__\\  @
  /:/ /:/ _/_ @
 /:/_/:/ /\\__\\@
 \\:\\/:/ /:/  /@
  \\::/_/:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
 ____/::::\\__\\@
 \\::::/~~/~   @
  ~~|:|~~|    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
     /::::\\__\\@
    /:/~~/~   @
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
       \\:\\  \\ @
 _______\\:\\__\\@
 \\::::::::/__/@
  \\:\\~~\\~~    @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
`,$r=`flf2a$ 6 5 76 15 14 1 16271
Ivrit (Hebrew) Unicode font assembled by John Cowan <cowan@ccil.org>
Latin chars from  Standard by G. Chappell & Ian Chai
Hebrew chars from Jerusalem by Gedaliah Friedenberg <gfrieden@nyx.cs.du.edu>
        Use "ilhebrew.flc" for Hebrew keyboard mapping
        Use "ushebrew.flc" for U.S.-style keyboard mapping ("febrew" script)
        Use "8859-8.flc" for ISO 8859-8 text
        Or use UTF-8
WARNING! FIGfonts aren't bidirectional; this is strictly right-to-left 
        (by default) even for the Latin characters.
figlet release 2.2 -- November 1996

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x05D0  HEBREW LETTER ALEF
 __   __@
 \\ \\ / /@
 |  V / @
 | |\\ \\ @
 |_| \\_\\@
        @@
0x05D1  HEBREW LETTER BET
   ______  @
  |____  | @
       | | @
  _____| |_@
 /________/@
           @@
0x05D2  HEBREW LETTER GIMEL
    ____  @
   |__  | @
      | | @
  ____| | @
 /____/\\_\\@
          @@
0x05D3  HEBREW LETTER DALET
  _______ @
 |____   |@
      | | @
      | | @
      |_| @
          @@
0x05D4  HEBREW LETTER HE
  _______ @
 |_____  |@
   _   | |@
  | |  | |@
  |_|  |_|@
          @@
0x05D5  HEBREW LETTER VAV
  ___ @
 |_  |@
   | |@
   | |@
   |_|@
      @@
0x05D6  HEBREW LETTER ZAYIN
 ________ @
 \\__   __\\@
    | |   @
    | |   @
    |_|   @
          @@
0x05D7  HEBREW LETTER HET
  _______ @
 |.  __  |@
  | |  | |@
  | |  | |@
  |_|  |_|@
          @@
0x05D8  HEBREW LETTER TET
  __   ___ @
 |. | /_  |@
  | |   | |@
  | |___| |@
  |_______|@
           @@
0x05D9  HEBREW LETTER YOD
  ___ @
 |_  |@
   |_|@
    $ @
    $ @
      @@
0x05DA  HEBREW LETTER FINAL KAF
  _______ @
 |____  .|@
      | | @
      | | @
      | | @
      |_| @@
0x05DB  HEBREW LETTER KAF
  _____  @
 |____ \\ @
      | |@
  ____| |@
 |_____/ @
         @@
0x05DC  HEBREW LETTER LAMED
 |=|____ @
 |____  |@
     / / @
    / /  @
   /_/   @
         @@
0x05DD  HEBREW LETTER FINAL MEM
  ________ @
 |.  ___  |@
  | |   | |@
  | |___| |@
  |_______|@
           @@
0x05DE  HEBREW LETTER MEM
  _______ @
 |.  __  |@
  | |  | |@
  | | _| |@
  |_||___|@
          @@
0x05DF  HEBREW LETTER FINAL NUN
  ___ @
 |_  |@
   | |@
   | |@
   | |@
   |_|@@
0x05E0  HEBREW LETTER NUN
   ___ @
  |_  |@
    | |@
  __| |@
 |____|@
       @@
0x05E1  HEBREW LETTER SAMEKH
  _______ @
 |.  __  |@
  | |  | |@
  | |__/ |@
  |_____/ @
          @@
0x05E2  HEBREW LETTER AYIN
  __   _ @
  \\ \\ | |@
   \\ \\| |@
  __\\ \` |@
 |______|@
         @@
0x05E3  HEBREW LETTER FINAL PE
  ______ @
 |  __  |@
 | |_ | |@
 |___|| |@
      | |@
      |_|@@
0x05E4  HEBREW LETTER PE
  _______ @
 |  ___  |@
  \\_\\  | |@
  _____| |@
 |_______|@
          @@
0x05E5  HEBREW LETTER FINAL TSADI
  __   _ @
 |. | | |@
  | | // @
  | |//  @
  | |    @
  |_|    @@
0x05E6  HEBREW LETTER TSADI
   __   __.@
   \\ \\ / / @
    \\ V /  @
  ___\\  \\  @
 |______|  @
           @@
0x05E7  HEBREW LETTER QOF
  ______ @
 |____  |@
   _  | |@
  | | |_|@
  | |    @
  |_|    @@
0x05E8  HEBREW LETTER RESH
  ______ @
 |____  |@
      | |@
      | |@
      |_|@
         @@
0x05E9  HEBREW LETTER SHIN
  _   _   _ @
 | | | | | |@
 | | | | | |@
 | |/ /_/ / @
 |_______/  @
            @@
0x05EA  HEBREW LETTER TAV
    ______ @
   |  __  |@
   | |  | |@
  _| |  | |@
 |___|  |_|@
           @@
0x2721  STAR OF DAVID
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
-0x0002  
aleph = t, bet/vet = c, gimel = d, dalet = s, he = v, vav = u, zayin = z  @
het = j, tet = y, yod = h, kaf/chaf = f, final kaf = l, lamed = k, mem = n@
final mem = o, nun = b, final nun = i, samekh = x, ayin = g, pe/fe = p,   @
final pe = ;, tsadi = m, final tsadi = ., qof = e, resh = r, shin/sin = a @
tav = , comma = ', period = /, semicolon = \`, slash = q, apostrophe = w   @
Star of David = *                                                         @@
-0x0003  
aleph = a, bet/vet = b, gimel = g, dalet = d, he = h, vav = v, zayin = z  @
het = c, tet = t, yod = y, kaf/chaf = k, final kaf = f, lamed = l, mem = m@
final mem = o, nun = n, final nun = i, samekh = e, ayin = _, pe/fe = p,   @
final pe = u, tsadi = j, final tsadi = w, qof = q, resh = r, shin/sin = s @
tav = x                                                                   @
Star of David = *                                                         @@
`,Tr=`flf2a$ 4 3 10 0 10 0 1920
Mini by Glenn Chappell 4/93
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

$$@
$$@
$$@
$$@@
   @
 |$@
 o$@
   @@
    @
 ||$@
    @
    @@
       @
 -|-|-$@
 -|-|-$@
       @@
   _$@
 (|$ @
 _|)$@
     @@
    @
 O/$@
 /O$@
    @@
     @
 ()$ @
 (_X$@
     @@
   @
 /$@
   @
   @@
    @
  /$@
 |$ @
  \\$@@
    @
 \\$ @
  |$@
 /$ @@
     @
 \\|/$@
 /|\\$@
     @@
     @
 _|_$@
  |$ @
     @@
   @
   @
 o$@
 /$@@
    @
 __$@
    @
    @@
   @
   @
 o$@
   @@
    @
  /$@
 /$ @
    @@
  _$ @
 / \\$@
 \\_/$@
     @@
    @
 /|$@
  |$@
    @@
 _$ @
  )$@
 /_$@
    @@
 _$ @
 _)$@
 _)$@
    @@
      @
 |_|_$@
   |$ @
      @@
  _$ @
 |_$ @
  _)$@
     @@
  _$ @
 |_$ @
 |_)$@
     @@
 __$@
  /$@
 /$ @
    @@
  _$ @
 (_)$@
 (_)$@
     @@
  _$ @
 (_|$@
   |$@
     @@
   @
 o$@
 o$@
   @@
   @
 o$@
 o$@
 /$@@
   @
 /$@
 \\$@
   @@
    @
 --$@
 --$@
    @@
   @
 \\$@
 /$@
   @@
 _$ @
  )$@
 o$ @
    @@
   __$ @
  /  \\$@
 | (|/$@
  \\__$ @@
      @
  /\\$ @
 /--\\$@
      @@
  _$ @
 |_)$@
 |_)$@
     @@
  _$@
 /$ @
 \\_$@
    @@
  _$ @
 | \\$@
 |_/$@
     @@
  _$@
 |_$@
 |_$@
    @@
  _$@
 |_$@
 |$ @
    @@
  __$@
 /__$@
 \\_|$@
     @@
     @
 |_|$@
 | |$@
     @@
 ___$@
  |$ @
 _|_$@
     @@
     @
   |$@
 \\_|$@
     @@
    @
 |/$@
 |\\$@
    @@
    @
 |$ @
 |_$@
    @@
      @
 |\\/|$@
 |  |$@
      @@
      @
 |\\ |$@
 | \\|$@
      @@
  _$ @
 / \\$@
 \\_/$@
     @@
  _$ @
 |_)$@
 |$  @
     @@
  _$ @
 / \\$@
 \\_X$@
     @@
  _$ @
 |_)$@
 | \\$@
     @@
  __$@
 (_$ @
 __)$@
     @@
 ___$@
  |$ @
  |$ @
     @@
     @
 | |$@
 |_|$@
     @@
      @
 \\  /$@
  \\/$ @
      @@
        @
 \\    /$@
  \\/\\/$ @
        @@
    @
 \\/$@
 /\\$@
    @@
     @
 \\_/$@
  |$ @
     @@
 __$@
  /$@
 /_$@
    @@
  _$@
 |$ @
 |_$@
    @@
    @
 \\$ @
  \\$@
    @@
 _$ @
  |$@
 _|$@
    @@
 /\\$@
    @
    @
    @@
    @
    @
    @
 __$@@
   @
 \\$@
   @
   @@
     @
  _.$@
 (_|$@
     @@
     @
 |_$ @
 |_)$@
     @@
    @
  _$@
 (_$@
    @@
     @
  _|$@
 (_|$@
     @@
     @
  _$ @
 (/_$@
     @@
   _$@
 _|_$@
  |$ @
     @@
     @
  _$ @
 (_|$@
  _|$@@
     @
 |_$ @
 | |$@
     @@
   @
 o$@
 |$@
   @@
    @
  o$@
  |$@
 _|$@@
    @
 |$ @
 |<$@
    @@
   @
 |$@
 |$@
   @@
       @
 ._ _$ @
 | | |$@
       @@
     @
 ._$ @
 | |$@
     @@
     @
  _$ @
 (_)$@
     @@
     @
 ._$ @
 |_)$@
 |$  @@
     @
  _.$@
 (_|$@
   |$@@
    @
 ._$@
 |$ @
    @@
    @
  _$@
 _>$@
    @@
     @
 _|_$@
  |_$@
     @@
     @
     @
 |_|$@
     @@
    @
    @
 \\/$@
    @@
      @
      @
 \\/\\/$@
      @@
    @
    @
 ><$@
    @@
    @
    @
 \\/$@
 /$ @@
    @
 _$ @
 /_$@
    @@
  ,-$@
 _|$ @
  |$ @
  \`-$@@
 |$@
 |$@
 |$@
 |$@@
 -.$ @
  |_$@
  |$ @
 -'$ @@
 /\\/$@
     @
     @
     @@
 o  o$@
  /\\$ @
 /--\\$@
      @@
 o_o$@
 / \\$@
 \\_/$@
     @@
 o o$@
 | |$@
 |_|$@
     @@
 o o$@
  _.$@
 (_|$@
     @@
 o o$@
  _$ @
 (_)$@
     @@
 o o$@
     @
 |_|$@
     @@
  _$ @
 | )$@
 | )$@
 |$  @@
160  NO-BREAK SPACE
 $$@
 $$@
 $$@
 $$@@
161  INVERTED EXCLAMATION MARK
   @
 o$@
 |$@
   @@
162  CENT SIGN
     @
  |_$@
 (__$@
  |$ @@
163  POUND SIGN
    _$  @
  _/_\`$ @
   |___$@
        @@
164  CURRENCY SIGN
     @
 \`o'$@
 ' \`$@
     @@
165  YEN SIGN
       @
 _\\_/_$@
 --|--$@
       @@
166  BROKEN BAR
 |$@
 |$@
 |$@
 |$@@
167  SECTION SIGN
  _$@
 ($ @
 ()$@
 _)$@@
168  DIAERESIS
 o o$@
     @
     @
     @@
169  COPYRIGHT SIGN
  _$ @
 |C|$@
 \`-'$@
     @@
170  FEMININE ORDINAL INDICATOR
  _.$@
 (_|$@
 ---$@
     @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    @
 //$@
 \\\\$@
    @@
172  NOT SIGN
     @
 __$ @
   |$@
     @@
173  SOFT HYPHEN
   @
 _$@
   @
   @@
174  REGISTERED SIGN
  _$ @
 |R|$@
 \`-'$@
     @@
175  MACRON
 __$@
    @
    @
    @@
176  DEGREE SIGN
 O$@
   @
   @
   @@
177  PLUS-MINUS SIGN
     @
 _|_$@
 _|_$@
     @@
178  SUPERSCRIPT TWO
 2$@
   @
   @
   @@
179  SUPERSCRIPT THREE
 3$@
   @
   @
   @@
180  ACUTE ACCENT
 /$@
   @
   @
   @@
181  MICRO SIGN
     @
     @
 |_|$@
 |$  @@
182  PILCROW SIGN
  __$ @
 (| |$@
  | |$@
      @@
183  MIDDLE DOT
   @
 o$@
   @
   @@
184  CEDILLA
   @
   @
   @
 S$@@
185  SUPERSCRIPT ONE
 1$@
   @
   @
   @@
186  MASCULINE ORDINAL INDICATOR
  _$ @
 (_)$@
 ---$@
     @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
    @
 \\\\$@
 //$@
    @@
188  VULGAR FRACTION ONE QUARTER
    @
 1/$@
 /4$@
    @@
189  VULGAR FRACTION ONE HALF
    @
 1/$@
 /2$@
    @@
190  VULGAR FRACTION THREE QUARTERS
    @
 3/$@
 /4$@
    @@
191  INVERTED QUESTION MARK
    @
  o$@
 (_$@
    @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   \\$ @
  /\\$ @
 /--\\$@
      @@
193  LATIN CAPITAL LETTER A WITH ACUTE
  /$  @
  /\\$ @
 /--\\$@
      @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
  /\\$ @
  /\\$ @
 /--\\$@
      @@
195  LATIN CAPITAL LETTER A WITH TILDE
  /\\/$@
  /\\$ @
 /--\\$@
      @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 o  o$@
  /\\$ @
 /--\\$@
      @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   O$  @
  / \\$ @
 /---\\$@
       @@
198  LATIN CAPITAL LETTER AE
    _$@
  /|_$@
 /-|_$@
      @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
  _$@
 /$ @
 \\_$@
  S$@@
200  LATIN CAPITAL LETTER E WITH GRAVE
 \\_$@
 |_$@
 |_$@
    @@
201  LATIN CAPITAL LETTER E WITH ACUTE
  _/$@
 |_$ @
 |_$ @
     @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
  /\\$@
 |_$ @
 |_$ @
     @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 o_o$@
 |_$ @
 |_$ @
     @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 \\__$@
  |$ @
 _|_$@
     @@
205  LATIN CAPITAL LETTER I WITH ACUTE
 __/$@
  |$ @
 _|_$@
     @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  /\\$@
 ___$@
 _|_$@
     @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 o_o$@
  |$ @
 _|_$@
     @@
208  LATIN CAPITAL LETTER ETH
   _$ @
 _|_\\$@
  |_/$@
      @@
209  LATIN CAPITAL LETTER N WITH TILDE
  /\\/$@
 |\\ |$@
 | \\|$@
      @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  \\$ @
 / \\$@
 \\_/$@
     @@
211  LATIN CAPITAL LETTER O WITH ACUTE
  /$ @
 / \\$@
 \\_/$@
     @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
  /\\$@
 / \\$@
 \\_/$@
     @@
213  LATIN CAPITAL LETTER O WITH TILDE
 /\\/$@
 / \\$@
 \\_/$@
     @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 o_o$@
 / \\$@
 \\_/$@
     @@
215  MULTIPLICATION SIGN
   @
   @
 X$@
   @@
216  LATIN CAPITAL LETTER O WITH STROKE
  __$ @
 / /\\$@
 \\/_/$@
      @@
217  LATIN CAPITAL LETTER U WITH GRAVE
  \\$ @
 | |$@
 |_|$@
     @@
218  LATIN CAPITAL LETTER U WITH ACUTE
  /$ @
 | |$@
 |_|$@
     @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
  /\\$@
 | |$@
 |_|$@
     @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 o o$@
 | |$@
 |_|$@
     @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
  /$ @
 \\_/$@
  |$ @
     @@
222  LATIN CAPITAL LETTER THORN
 |_$ @
 |_)$@
 |$  @
     @@
223  LATIN SMALL LETTER SHARP S
  _$ @
 | )$@
 | )$@
 |$  @@
224  LATIN SMALL LETTER A WITH GRAVE
  \\$ @
  _.$@
 (_|$@
     @@
225  LATIN SMALL LETTER A WITH ACUTE
  /$ @
  _.$@
 (_|$@
     @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
  /\\$@
  _.$@
 (_|$@
     @@
227  LATIN SMALL LETTER A WITH TILDE
 /\\/$@
  _.$@
 (_|$@
     @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 o o$@
  _.$@
 (_|$@
     @@
229  LATIN SMALL LETTER A WITH RING ABOVE
  O$ @
  _.$@
 (_|$@
     @@
230  LATIN SMALL LETTER AE
       @
  ___$ @
 (_|/_$@
       @@
231  LATIN SMALL LETTER C WITH CEDILLA
    @
  _$@
 (_$@
  S$@@
232  LATIN SMALL LETTER E WITH GRAVE
  \\$ @
  _$ @
 (/_$@
     @@
233  LATIN SMALL LETTER E WITH ACUTE
  /$ @
  _$ @
 (/_$@
     @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
  /\\$@
  _$ @
 (/_$@
     @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 o o$@
  _$ @
 (/_$@
     @@
236  LATIN SMALL LETTER I WITH GRAVE
 \\$@
   @
 |$@
   @@
237  LATIN SMALL LETTER I WITH ACUTE
 /$@
   @
 |$@
   @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 /\\$@
    @
 |$ @
    @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 o o$@
     @
  |$ @
     @@
240  LATIN SMALL LETTER ETH
 X$  @
  \\$ @
 (_|$@
     @@
241  LATIN SMALL LETTER N WITH TILDE
 /\\/$@
 ._$ @
 | |$@
     @@
242  LATIN SMALL LETTER O WITH GRAVE
  \\$ @
  _$ @
 (_)$@
     @@
243  LATIN SMALL LETTER O WITH ACUTE
  /$ @
  _$ @
 (_)$@
     @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
  /\\$@
  _$ @
 (_)$@
     @@
245  LATIN SMALL LETTER O WITH TILDE
 /\\/$@
  _$ @
 (_)$@
     @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 o o$@
  _$ @
 (_)$@
     @@
247  DIVISION SIGN
  o$ @
 ---$@
  o$ @
     @@
248  LATIN SMALL LETTER O WITH STROKE
     @
  _$ @
 (/)$@
     @@
249  LATIN SMALL LETTER U WITH GRAVE
  \\$ @
     @
 |_|$@
     @@
250  LATIN SMALL LETTER U WITH ACUTE
  /$ @
     @
 |_|$@
     @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
  /\\$@
     @
 |_|$@
     @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 o o$@
     @
 |_|$@
     @@
253  LATIN SMALL LETTER Y WITH ACUTE
  /$@
    @
 \\/$@
 /$ @@
254  LATIN SMALL LETTER THORN
     @
 |_$ @
 |_)$@
 |$  @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 oo$@
    @
 \\/$@
 /$ @@
`,nr=`flf2a$ 7 5 16 0 10 0 3904 96
Script by Glenn Chappell 4/93
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

$$@
$$@
$$@
$$@
$$@
$$@
$$@@
  @
 |@
 |@
 |@
 o@
  @
  @@
 oo@
 ||@
 $$@
 $$@
 $$@
   @
   @@
         @
   |  |  @
 --+--+--@
 --+--+--@
   |  |  @
         @
         @@
      @
  |_|_@
 (|_| @
 _|_|)@
  | | @
      @
      @@
     @
 () /@
   / @
  /  @
 / ()@
     @
     @@
      @
  ()  @
  /\\  @
 /  \\/@
 \\__/\\@
      @
      @@
 o@
 /@
 $@
 $@
 $@
  @
  @@
   @
  /@
 | @
 | @
 | @
  \\@
   @@
   @
 \\ @
  |@
  |@
  |@
 / @
   @@
      @
      @
  \\|/ @
 --*--@
  /|\\ @
      @
      @@
      @
      @
   |  @
 --+--@
   |  @
      @
      @@
  @
  @
  @
  @
 o@
 /@
  @@
      @
      @
      @
 -----@
   $  @
      @
      @@
  @
  @
  @
  @
 o@
  @
  @@
     @
    /@
   / @
  /  @
 /   @
     @
     @@
   __  @
  /  \\ @
 |    |@
 |    |@
  \\__/ @
       @
       @@
  ,@
 /|@
  |@
  |@
  |@
   @
   @@
  __ @
 /  )@
  $/ @
  /  @
 /___@
     @
     @@
  ___ @
 /   \\@
  $__/@
  $  \\@
 \\___/@
      @
      @@
      @
 |  | @
 |__|_@
    | @
    | @
      @
      @@
  ____@
 |    @
 |___ @
  $  \\@
 \\___/@
      @
      @@
   __ @
  /$  @
 | __ @
 |/  \\@
  \\__/@
      @
      @@
 _____@
  $  /@
  $ / @
  $/  @
  /   @
      @
      @@
  __ @
 /  \\@
 \\__/@
 /  \\@
 \\__/@
     @
     @@
  __ @
 /  |@
 \\_/|@
    |@
    |@
     @
     @@
  @
 o@
 $@
 $@
 o@
  @
  @@
  @
 o@
 $@
 $@
 o@
 /@
  @@
   @
  /@
 / @
 \\ @
  \\@
   @
   @@
      @
      @
 -----@
 -----@
      @
      @
      @@
   @
 \\ @
  \\@
  /@
 / @
   @
   @@
  __ @
 /  \\@
  $_/@
  |  @
  o  @
     @
     @@
         @
   ____  @
  / __,\\ @
 | /  | |@
 | \\_/|/ @
  \\____/ @
         @@
   ___,  @
  /   |  @
 |    |  @
 |    |  @
  \\__/\\_/@
         @
         @@
  , __ @
 /|/  \\@
  | __/@
  |   \\@
  |(__/@
       @
       @@
   ___$@
  / (_)@
 |   $ @
 |   $ @
  \\___/@
       @
       @@
  $____  @
  (|   \\ @
   |    |@
 $_|    |@
 (/\\___/ @
         @
         @@
  ___$@
 / (_)@
 \\__$ @
 /  $ @
 \\___/@
      @
      @@
 $______@
 (_) |$ @
    _|_$@
   / | |@
  (_/   @
        @
        @@
       @
   () |@
   /\\/|@
  /   |@
 /(__/ @
       @
       @@
  ,     @
 /|   | @
  |___| @
  |   |\\@
  |   |/@
        @
        @@
    _ @
   | |@
   | |@
 _ |/ @
 \\_/\\/@
      @
      @@
      @
  /\\  @
 |  | @
 |  | @
  \\_|/@
   /| @
   \\| @@
  ,     @
 /|   / @
  |__/  @
  | \\$  @
  |  \\_/@
        @
        @@
   $_$  @
 \\_|_)  @
   |$   @
 $_|$   @
 (/\\___/@
        @
        @@
  ,__ __   @
 /|  |  |  @
  |  |  |  @
  |  |  |  @
  |  |  |_/@
           @
           @@
  , _    @
 /|/ \\   @
  |   |  @
  |   |  @
  |   |_/@
         @
         @@
   __  @
  /\\_\\/@
 |    |@
 |    |@
  \\__/ @
       @
       @@
  , __ @
 /|/  \\@
  |___/@
  |   $@
  |   $@
       @
       @@
   __    @
  /  \\   @
 | __ |  @
 |/  \\|  @
  \\__/\\_/@
         @
         @@
  , __  @
 /|/  \\ @
  |___/ @
  | \\$  @
  |  \\_/@
        @
        @@
      @
   () @
   /\\ @
  /  \\@
 /(__/@
      @
      @@
 $______@
 (_) |  @
   $ |  @
  $_ |  @
  (_/   @
        @
        @@
 $_        @
 (_|    |  @
   |    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
 $_       @
 (_|   |_/@
   |   |  @
   |   |  @
    \\_/   @
          @
          @@
 $_           @
 (_|   |   |_/@
   |   |   |  @
   |   |   |  @
    \\_/ \\_/   @
              @
              @@
 $_      @
 (_\\  /  @
   $\\/   @
   $/\\   @
  _/  \\_/@
         @
         @@
 $_      @
 (_|   | @
   |   | @
   |   | @
    \\_/|/@
      /| @
      \\| @@
 $__  @
 (_ \\ @
   $/ @
   /  @
  /__/@
   /| @
   \\| @@
  _@
 | @
 | @
 | @
 | @
 |_@
   @@
     @
 \\   @
  \\  @
   \\ @
    \\@
     @
     @@
 _ @
  |@
  |@
  |@
  |@
 _|@
   @@
 /\\@
  $@
  $@
  $@
  $@
   @
   @@
      @
      @
      @
      @
   $  @
   $  @
 _____@@
 o@
 \\@
 $@
 $@
 $@
  @
  @@
       @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
 $_$  @
 | |  @
 | |  @
 |/ \\_@
  \\_/ @
      @
      @@
      @
      @
  __  @
 /$   @
 \\___/@
      @
      @@
       @
    |  @
  __|  @
 /  |  @
 \\_/|_/@
       @
       @@
     @
     @
  _  @
 |/  @
 |__/@
     @
     @@
 $_$ @
 | | @
 | | @
 |/  @
 |__/@
 |\\  @
 |/  @@
      @
      @
  __, @
 /  | @
 \\_/|/@
   /| @
   \\| @@
 $_$    @
 | |    @
 | |    @
 |/ \\   @
 |   |_/@
        @
        @@
    @
 o  @
    @
 |  @
 |_/@
    @
    @@
    @
  o @
    @
  | @
  |/@
 /| @
 \\| @@
 $_$  @
 | |  @
 | |  @
 |/_) @
 | \\_/@
      @
      @@
 $_$ @
 | | @
 | | @
 |/  @
 |__/@
     @
     @@
            @
            @
  _  _  _   @
 / |/ |/ |  @
 $ |  |  |_/@
            @
            @@
         @
         @
  _  _   @
 / |/ |  @
 $ |  |_/@
         @
         @@
      @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
       @
       @
    _  @
  |/ \\_@
  |__/ @
 /|    @
 \\|    @@
       @
       @
  __,  @
 /  |  @
 \\_/|_/@
    |\\ @
    |/ @@
       @
       @
  ,_   @
 /  |  @
 $  |_/@
       @
       @@
     @
     @
  ,  @
 / \\_@
 $\\/ @
     @
     @@
     @
     @
 _|_ @
  |  @
  |_/@
     @
     @@
        @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
      @
      @
      @
 |  |_@
 $\\/  @
      @
      @@
         @
         @
         @
 |  |  |_@
 $\\/ \\/  @
         @
         @@
      @
      @
      @
 /\\/  @
 $/\\_/@
      @
      @@
       @
       @
       @
 |   | @
 $\\_/|/@
    /| @
    \\| @@
      @
      @
  __  @
 / / _@
 $/_/ @
   /| @
   \\| @@
    @
   /@
  | @
 <  @
  | @
   \\@
    @@
 |@
 |@
 |@
 |@
 |@
 |@
 |@@
    @
 \\  @
  | @
   >@
  | @
 /  @
    @@
 /\\/@
  $ @
  $ @
  $ @
  $ @
    @
    @@
  o   o  @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
  o  o @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
    o  o   @
 $_        @
 (_|    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
 o  o  @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
 o  o @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
 o   o  @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
   _ @
  / \\@
 |  /@
 |  \\@
 | _/@
 |   @
     @@
160  NO-BREAK SPACE
 $$@
 $$@
 $$@
 $$@
 $$@
 $$@
 $$@@
161  INVERTED EXCLAMATION MARK
  @
 o@
 |@
 |@
 |@
  @
  @@
162  CENT SIGN
      @
      @
  _|_ @
 / |  @
 \\_|_/@
   |  @
      @@
163  POUND SIGN
     _  @
    / \\ @
 __|__  @
  _| $  @
 (/ \\__/@
        @
        @@
164  CURRENCY SIGN
      @
 \\ _ /@
  / \\ @
  \\_/ @
 /   \\@
      @
      @@
165  YEN SIGN
      @
 \\   /@
 _\\_/_@
 __|__@
   |  @
      @
      @@
166  BROKEN BAR
 |@
 |@
 |@
  @
 |@
 |@
 |@@
167  SECTION SIGN
  _@
 ( @
 /\\@
 \\/@
 _)@
   @
   @@
168  DIAERESIS
 o  o@
 $  $@
 $  $@
 $  $@
 $  $@
     @
     @@
169  COPYRIGHT SIGN
    ____   @
   / __ \\  @
  / / () \\ @
 | |      |@
  \\ \\__/ / @
   \\____/  @
           @@
170  FEMININE ORDINAL INDICATOR
  __, @
 /  | @
 \\_/|_@
 ---- @
   $  @
      @
      @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    @
  //@
 // @
 \\\\ @
  \\\\@
    @
    @@
172  NOT SIGN
     @
 ___ @
    |@
   $ @
   $ @
     @
     @@
173  SOFT HYPHEN
     @
     @
     @
 ----@
   $ @
     @
     @@
174  REGISTERED SIGN
    ____   @
   /, _ \\  @
  //|/ \\ \\ @
 |  |__/  |@
  \\ | \\_// @
   \\____/  @
           @@
175  MACRON
 _____@
   $  @
   $  @
   $  @
   $  @
      @
      @@
176  DEGREE SIGN
  _ @
 / \\@
 \\_/@
    @
  $ @
    @
    @@
177  PLUS-MINUS SIGN
      @
      @
   |  @
 --+--@
 __|__@
      @
      @@
178  SUPERSCRIPT TWO
 _ @
  )@
 /_@
   @
  $@
   @
   @@
179  SUPERSCRIPT THREE
 ___@
  _/@
 __)@
    @
  $ @
    @
    @@
180  ACUTE ACCENT
 /@
 $@
 $@
 $@
 $@
  @
  @@
181  MICRO SIGN
        @
        @
        @
 |   |  @
 |\\_/|_/@
 |      @
 |      @@
182  PILCROW SIGN
  ____ @
 / |  |@
 \\_|  |@
   |  |@
   |  |@
       @
       @@
183  MIDDLE DOT
    @
    @
 $O$@
  $ @
  $ @
    @
    @@
184  CEDILLA
   @
   @
   @
   @
 $ @
 _)@
   @@
185  SUPERSCRIPT ONE
  ,@
 /|@
  |@
   @
  $@
   @
   @@
186  MASCULINE ORDINAL INDICATOR
  __  @
 /  \\_@
 \\__/ @
 ---- @
   $  @
      @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
    @
 \\\\ @
  \\\\@
  //@
 // @
    @
    @@
188  VULGAR FRACTION ONE QUARTER
  ,    @
 /| /  @
  |/   @
  /|_|_@
 /   | @
       @
       @@
189  VULGAR FRACTION ONE HALF
  ,   @
 /| / @
  |/_ @
  /  )@
 /  /_@
      @
      @@
190  VULGAR FRACTION THREE QUARTERS
 ___    @
  _/ /  @
 __)/   @
   /|_|_@
  /   | @
        @
        @@
191  INVERTED QUESTION MARK
     @
   o @
  _| @
 /$  @
 \\__/@
     @
     @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    \\    @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    /    @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    /\\   @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/   @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  o   o  @
   ___,  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _    @
   (_),  @
  /   |  @
 |    |  @
  \\__/\\_/@
         @
         @@
198  LATIN CAPITAL LETTER AE
   ___,___$@
  /   | (_)@
 |    |__  @
 |    |    @
  \\__/\\___/@
           @
           @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ___$@
  / (_)@
 |   $ @
 |   $ @
  \\___/@
   _)  @
       @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   \\   @
  ___$ @
 / (_) @
 >--$  @
 \\____/@
       @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   /   @
  ___$ @
 / (_) @
 >--$  @
 \\____/@
       @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
  /\\   @
  ___$ @
 / (_) @
 >--$  @
 \\____/@
       @
       @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 o   o @
  ___$ @
 / (_) @
 >--$  @
 \\____/@
       @
       @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    \\  @
   $_$ @
   | | @
 _ |/  @
 \\_/\\_/@
       @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
    /  @
   $_$ @
   | | @
 _ |/  @
 \\_/\\_/@
       @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
   /\\  @
   $_$ @
   | | @
 _ |/  @
 \\_/\\_/@
       @
       @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  o  o @
   $_$ @
   | | @
 _ |/  @
 \\_/\\_/@
       @
       @@
208  LATIN CAPITAL LETTER ETH
  $____  @
  (|   \\ @
 __|__  |@
 $_|    |@
 (/\\___/ @
         @
         @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/   @
  , _    @
 /|/ \\   @
  |   |  @
  |   |_/@
         @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   \\   @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    /  @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   /\\  @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/ @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  o  o @
   __  @
  /\\_\\/@
 |    |@
  \\__/ @
       @
       @@
215  MULTIPLICATION SIGN
     @
     @
 $\\/$@
 $/\\$@
 $  $@
     @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   __ /@
  /\\_//@
 |  / |@
 | /  |@
  /__/ @
 /     @
       @@
217  LATIN CAPITAL LETTER U WITH GRAVE
     \\     @
 $_        @
 (_|    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
218  LATIN CAPITAL LETTER U WITH ACUTE
      /    @
 $_        @
 (_|    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
     /\\    @
 $_        @
 (_|    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
    o  o   @
 $_        @
 (_|    |  @
   |    |  @
    \\__/\\_/@
           @
           @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
     /   @
 $_      @
 (_|   | @
   |   | @
    \\_/|/@
      /| @
      \\| @@
222  LATIN CAPITAL LETTER THORN
  ,    @
  | __ @
 /|/  \\@
  |___/@
  |   $@
       @
       @@
223  LATIN SMALL LETTER SHARP S
   _ @
  / \\@
 |  /@
 |  \\@
 | _/@
 |   @
     @@
224  LATIN SMALL LETTER A WITH GRAVE
   \\   @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
225  LATIN SMALL LETTER A WITH ACUTE
   /   @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
  /\\   @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
227  LATIN SMALL LETTER A WITH TILDE
  /\\/  @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 o  o  @
       @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
229  LATIN SMALL LETTER A WITH RING ABOVE
       @
  ()   @
  __,  @
 /  |  @
 \\_/|_/@
       @
       @@
230  LATIN SMALL LETTER AE
        @
        @
  __,_  @
 /  |/  @
 \\_/|__/@
        @
        @@
231  LATIN SMALL LETTER C WITH CEDILLA
      @
      @
  __  @
 /    @
 \\___/@
  _)  @
      @@
232  LATIN SMALL LETTER E WITH GRAVE
  \\  @
     @
  _  @
 |/  @
 |__/@
     @
     @@
233  LATIN SMALL LETTER E WITH ACUTE
  /  @
     @
  _  @
 |/  @
 |__/@
     @
     @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
 /\\  @
     @
  _  @
 |/  @
 |__/@
     @
     @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 o o @
     @
  _  @
 |/  @
 |__/@
     @
     @@
236  LATIN SMALL LETTER I WITH GRAVE
 \\  @
    @
    @
 |  @
 |_/@
    @
    @@
237  LATIN SMALL LETTER I WITH ACUTE
 /  @
    @
    @
 |  @
 |_/@
    @
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 /\\ @
    @
    @
 |  @
 |_/@
    @
    @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 o o @
     @
     @
 |   @
 |__/@
     @
     @@
240  LATIN SMALL LETTER ETH
     @
   \\/@
  _'|@
 /  |@
 \\_/ @
     @
     @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/   @
         @
  _  _   @
 / |/ |  @
 $ |  |_/@
         @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
  \\   @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
243  LATIN SMALL LETTER O WITH ACUTE
   /  @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
  /\\  @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
245  LATIN SMALL LETTER O WITH TILDE
  /\\/ @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 o  o @
      @
  __  @
 /  \\_@
 \\__/ @
      @
      @@
247  DIVISION SIGN
      @
      @
   O  @
 -----@
   O  @
      @
      @@
248  LATIN SMALL LETTER O WITH STROKE
      @
      @
  __/ @
 / /\\_@
 \\/_/ @
 /    @
      @@
249  LATIN SMALL LETTER U WITH GRAVE
   \\    @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
   /    @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   /\\   @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 o   o  @
        @
        @
 |   |  @
 $\\_/|_/@
        @
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
   /   @
       @
       @
 |   | @
 $\\_/|/@
    /| @
    \\| @@
254  LATIN SMALL LETTER THORN
   _   @
  | |  @
  | |  @
  |/ \\_@
  |__/ @
 /|    @
 \\|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 o   o @
       @
       @
 |   | @
 $\\_/|/@
    /| @
    \\| @@
`,ir=`flf2a$ 5 4 16 0 14 0 4992
Shadow by Glenn Chappell 6/93 -- based on Standard & SmShadow
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$ $$@
$ $$@
$ $$@
$ $$@
$ $$@@
 $|$@
 $|$@
 _|$@
 _)$@
    @@
 $| )$@
 V V$ @
  $$  @
  $$  @
      @@
   $|  |$  @
 _  |_ |_|$@
 _  |_ |_|$@
   _| _|$  @
           @@
   $|$ @
 $ __)$@
 \\__ \\$@
 (   /$@
   _|$ @@
 _)  /$@
   $/$ @
  $/$  @
 _/ _)$@
       @@
 $ _ )$  @
  $_ \\ \\$@
 $( \`  <$@
 \\___/\\/$@
         @@
 $)$@
 /$ @
 $$ @
 $$ @
    @@
  $/$@
 $|$ @
 $|$ @
 $|$ @
 \\_\\$@@
 \\ \\$ @
   $|$@
   $|$@
   $|$@
  _/$ @@
   $\\$  @
 \\    /$@
 $_  _\\$@
   \\/$  @
        @@
        @
   $|$  @
 _   _|$@
   _|$  @
        @@
    @
    @
    @
 $)$@
 /$ @@
        @
        @
 _____|$@
   $$   @
        @@
    @
    @
    @
 _)$@
    @@
    $/$@
   $/$ @
  $/$  @
 _/$   @
       @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 _ |$@
  $|$@
  $|$@
  _|$@
     @@
 ___ \\$ @
    ) |$@
  $__/$ @
 _____|$@
        @@
 ___ /$ @
   _ \\$ @
    ) |$@
 ____/$ @
        @@
 $|  |$  @
 $|  |$  @
 ___ __|$@
    _|$  @
         @@
 $___|$ @
 $__ \\$ @
    ) |$@
 ____/$ @
        @@
  $/$   @
 $ _ \\$ @
 $(   |$@
 \\___/$ @
        @@
 ___  |$@
    $/$ @
   $/$  @
  _/$   @
        @@
 $ _ )$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
  $_ \\$ @
 $(   |$@
 \\__  |$@
   __/$ @
        @@
    @
 _)$@
 $$ @
 _)$@
    @@
    @
 _)$@
 $$ @
 $)$@
 /$ @@
   $/$@
  $/$ @
 \\ \\$ @
  \\_\\$@
      @@
        @
 _____|$@
 _____|$@
        @
        @@
 \\ \\$ @
  \\ \\$@
   $/$@
  _/$ @
      @@
 __ \\$@
   $/$@
  _|$ @
  _)$ @
      @@
   $__ \\$ @
  $/ _\` |$@
 $| (   |$@
 \\ \\__,_|$@
  \\____/$ @@
    $\\$   @
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
 $__ )$ @
 $__ \\$ @
 $|   |$@
 ____/$ @
        @@
  $___|$@
 $|$    @
 $|$    @
 \\____|$@
        @@
 $__ \\$ @
 $|   |$@
 $|   |$@
 ____/$ @
        @@
 $____|$@
 $__|$  @
 $|$    @
 _____|$@
        @@
 $____|$@
 $|$    @
 $__|$  @
 _|$    @
        @@
  $___|$@
 $|$    @
 $|   |$@
 \\____|$@
        @@
 $|   |$@
 $|   |$@
 $___ |$@
 _|  _|$@
        @@
 _ _|$@
  $|$ @
  $|$ @
 ___|$@
      @@
     $|$@
     $|$@
 $\\   |$@
 \\___/$ @
        @@
 $|  /$@
 $' /$ @
 $. \\$ @
 _|\\_\\$@
       @@
 $|$    @
 $|$    @
 $|$    @
 _____|$@
        @@
 $ \\  |$@
 $|\\/ |$@
 $|   |$@
 _|  _|$@
        @@
 $ \\  |$@
 $  \\ |$@
 $|\\  |$@
 _| \\_|$@
        @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 $ _ \\$ @
 $|   |$@
 $___/$ @
 _|$    @
        @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\__\\_\\$@
        @@
 $ _ \\$ @
 $|   |$@
 $__ <$ @
 _| \\_\\$@
        @@
  $___|$ @
 \\___ \\$ @
      $|$@
 _____/$ @
         @@
 __ __|$@
   $|$  @
   $|$  @
   _|$  @
        @@
 $|   |$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 \\ \\     /$@
  \\ \\   /$ @
   \\ \\ /$  @
    \\_/$   @
           @@
 \\ \\        /$@
  \\ \\  \\   /$ @
   \\ \\  \\ /$  @
    \\_/\\_/$   @
              @@
 \\ \\  /$@
  \\  /$ @
   $ \\$ @
  _/\\_\\$@
        @@
 \\ \\   /$@
  \\   /$ @
    $|$  @
    _|$  @
         @@
 __  /$@
   $/$ @
  $/$  @
 ____|$@
       @@
 $_|$@
 $|$ @
 $|$ @
 $|$ @
 __|$@@
 \\ \\$   @
  \\ \\$  @
   \\ \\$ @
    \\_\\$@
        @@
 _ |$@
  $|$@
  $|$@
  $|$@
 __|$@@
 /\\\\$@
  $$ @
  $$ @
  $$ @
     @@
        @
        @
        @
   $$   @
 _____|$@@
 $)$@
 \\|$@
 $$ @
 $$ @
    @@
        @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
 $|$    @
 $__ \\$ @
 $|   |$@
 _.__/$ @
        @@
       @
  $__|$@
 $($   @
 \\___|$@
       @@
     $|$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
       @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
  $_|$@
 $|$  @
 $__|$@
 _|$  @
      @@
        @
  $_\` |$@
 $(   |$@
 \\__, |$@
 |___/$ @@
 $|$    @
 $__ \\$ @
 $| | |$@
 _| |_|$@
        @@
 _)$@
 $|$@
 $|$@
 _|$@
    @@
    _)$@
    $|$@
    $|$@
    $|$@
 ___/$ @@
 $|$   @
 $|  /$@
 $  <$ @
 _|\\_\\$@
       @@
 $|$@
 $|$@
 $|$@
 _|$@
    @@
            @
 $__ \`__ \\$ @
 $|   |   |$@
 _|  _|  _|$@
            @@
        @
 $__ \\$ @
 $|   |$@
 _|  _|$@
        @@
        @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
        @
 $__ \\$ @
 $|   |$@
 $.__/$ @
 _|$    @@
        @
  $_\` |$@
 $(   |$@
 \\__, |$@
     _|$@@
       @
 $ __|$@
 $|$   @
 _|$   @
       @@
       @
  $__|$@
 \\__ \\$@
 ____/$@
       @@
 $|$  @
 $__|$@
 $|$  @
 \\__|$@
      @@
        @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
         @
 \\ \\   /$@
  \\ \\ /$ @
   \\_/$  @
         @@
            @
 \\ \\  \\   /$@
  \\ \\  \\ /$ @
   \\_/\\_/$  @
            @@
        @
 \\ \\  /$@
  \`  <$ @
  _/\\_\\$@
        @@
        @
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
      @
 _  /$@
  $/$ @
 ___|$@
      @@
    $/$@
   $|$ @
 < <$  @
   $|$ @
   \\_\\$@@
 $|$@
 $|$@
 $|$@
 $|$@
 _|$@@
 \\ \\$  @
   $|$ @
   \` >$@
   $|$ @
  _/$  @@
 / _/$@
  $$  @
  $$  @
  $$  @
      @@
  _) \\ _)$@
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
 _)  _)$@
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
 _)  _)$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 _)  _)$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
 _)  _)$@
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
  $_ \\$@
 $|  /$@
 $|\\ \\$@
 $|__/$@
 _|$   @@
160  NO-BREAK SPACE
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@@
161  INVERTED EXCLAMATION MARK
 _)$@
 $|$@
 $|$@
 _|$@
    @@
162  CENT SIGN
   $|$ @
  $__)$@
 $($   @
 \\   )$@
   _|$ @@
163  POUND SIGN
    $,_\\$ @
 _  |_$   @
   $|$    @
  _,____|$@
          @@
164  CURRENCY SIGN
 \\  _  /$@
  $(   |$@
  $___ \\$@
 \\/    /$@
         @@
165  YEN SIGN
 \\ \\ /$ @
 __ __|$@
 __ __|$@
   _|$  @
        @@
166  BROKEN BAR
 $|$@
 _|$@
    @
 $|$@
 _|$@@
167  SECTION SIGN
    $_)$@
  $\\ \\$ @
 \\ \\\\ \\$@
  \\ \\_/$@
 (__/$  @@
168  DIAERESIS
 _)  _)$@
 $    $ @
 $    $ @
 $    $ @
        @@
169  COPYRIGHT SIGN
   $    \\$  @
  $  __| \\$ @
 $  (     |$@
 \\ \\___| /$ @
  \\_____/$  @@
170  FEMININE ORDINAL INDICATOR
  $_\` |$@
 \\__,_|$@
 _____|$@
   $$   @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   $/ /$@
  $/ /$ @
 \\ \\ \\$ @
  \\_\\_\\$@
        @@
172  NOT SIGN
         @
 _____ |$@
      _|$@
    $$   @
         @@
173  SOFT HYPHEN
        @
        @
 _____|$@
   $$   @
        @@
174  REGISTERED SIGN
   $    \\$  @
  $  _ \\ \\$ @
 $     /  |$@
 \\  _|_\\ /$ @
  \\_____/$  @@
175  MACRON
 _____|$@
   $$   @
   $$   @
   $$   @
        @@
176  DEGREE SIGN
  $ \\$ @
 $(  |$@
 \\__/$ @
   $$  @
       @@
177  PLUS-MINUS SIGN
   $|$  @
 _   _|$@
   _|$  @
 _____|$@
        @@
178  SUPERSCRIPT TWO
 _  )$@
  $/$ @
 ___|$@
  $$  @
      @@
179  SUPERSCRIPT THREE
 __ /$@
  _ \\$@
 ___/$@
  $$  @
      @@
180  ACUTE ACCENT
 _/$@
 $$ @
 $$ @
 $$ @
    @@
181  MICRO SIGN
        @
 $|   |$@
 $|   |$@
 $._,_|$@
 _|$    @@
182  PILCROW SIGN
  $    |$@
 $(  | |$@
 \\__ | |$@
    _|_|$@
         @@
183  MIDDLE DOT
    @
 _)$@
 $$ @
 $$ @
    @@
184  CEDILLA
    @
    @
    @
 $$ @
 _)$@@
185  SUPERSCRIPT ONE
 _ |$@
  $|$@
  _|$@
  $$ @
     @@
186  MASCULINE ORDINAL INDICATOR
  $_ \\$@
 \\___/$@
 ____|$@
   $$  @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 \\ \\ \\$ @
  \\ \\ \\$@
   $/ /$@
  _/_/$ @
        @@
188  VULGAR FRACTION ONE QUARTER
 _ |   /$    @
  $|  / | |$ @
  _| / __ _|$@
   _/    _|$ @
             @@
189  VULGAR FRACTION ONE HALF
 _ |   /$   @
  $|  /_  )$@
  _| /   /$ @
   _/  ___|$@
            @@
190  VULGAR FRACTION THREE QUARTERS
 __ /   /$    @
  _ \\  / | |$ @
 ___/ / __ _|$@
    _/    _|$ @
              @@
191  INVERTED QUESTION MARK
   _)$ @
   $|$ @
  $/$  @
 \\___|$@
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
  \\_\\$  @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
   _/$  @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   /\\\\$ @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
  / _/$ @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _) \\ _)$@
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    ( )$  @
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
198  LATIN CAPITAL LETTER AE
    $ ____|$@
   $/ __|$  @
  $__ |$    @
 _/  _____|$@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
  $___|$@
 $|$    @
 $|$    @
 \\____|$@
    _)$ @@
200  LATIN CAPITAL LETTER E WITH GRAVE
  \\_\\$  @
 $____|$@
 $ _|$  @
 _____|$@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   _/$  @
 $____|$@
 $ _|$  @
 _____|$@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   /\\\\$ @
 $____|$@
 $ _|_$ @
 _____|$@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 _)  _)$@
 $____|$@
 $ _|$  @
 _____|$@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 \\_\\$ @
 _ _|$@
 | |$ @
 ___|$@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
  _/$ @
 _ _|$@
  $|$ @
 ___|$@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
 /\\\\$ @
 _ _|$@
  $|$ @
 ___|$@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 _)  _)$@
  _ _|$ @
   $|$  @
  ___|$ @
        @@
208  LATIN CAPITAL LETTER ETH
    __ \\$ @
    |   |$@
 __ __| |$@
   ____/$ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
  / _/$@
 $ \\ |$@
 $.  |$@
 _|\\_|$@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  \\_\\$  @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
   _/$  @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   /\\\\$ @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
  / _/$ @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
215  MULTIPLICATION SIGN
      @
  \\ \\$@
 ,  '$@
 \\/\\/$@
      @@
216  LATIN CAPITAL LETTER O WITH STROKE
  $_ /$ @
 $| / |$@
 $ /  |$@
 _/__/$ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
  \\_\\$  @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   /\\\\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    _/$ @
 \\ \\  /$@
  \\  /$ @
   _|$  @
        @@
222  LATIN CAPITAL LETTER THORN
 $|$    @
 $ __ \\$@
 $ ___/$@
 _|$    @
        @@
223  LATIN SMALL LETTER SHARP S
  $_ \\$@
 $|  /$@
 $|\\ \\$@
 $|__/$@
 _|$   @@
224  LATIN SMALL LETTER A WITH GRAVE
  \\_\\$  @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
   _/_$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   /\\\\$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
227  LATIN SMALL LETTER A WITH TILDE
  / _/$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 _)  _)$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   ( )$ @
  $_ '|$@
 $(   |$@
 \\__,_|$@
        @@
230  LATIN SMALL LETTER AE
           @
  $_\`  _ \\$@
 $(    __/$@
 \\__,____|$@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  $__|$@
 $($   @
 \\___|$@
   _)$ @@
232  LATIN SMALL LETTER E WITH GRAVE
  \\_\\$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
   _/$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
  /\\\\$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $ __/$ @
 \\___|$ @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 \\_\\$@
  $|$@
  $|$@
  _|$@
     @@
237  LATIN SMALL LETTER I WITH ACUTE
 _/$@
 $|$@
 $|$@
 _|$@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 /\\\\$@
 $|$ @
 $|$ @
 _|$ @
     @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 _)  _)$@
   $|$  @
   $|$  @
   _|$  @
        @@
240  LATIN SMALL LETTER ETH
   \`  <$ @
   \\/\\ |$@
  $__\` |$@
 \\____/$ @
         @@
241  LATIN SMALL LETTER N WITH TILDE
  / _/$ @
 $'_ \\$ @
 $|   |$@
 _|  _|$@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
  \\_\\$  @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
   _/$  @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   /\\\\$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
  / _/$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
247  DIVISION SIGN
        @
   _)$  @
 _____|$@
   _)$  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
  $_ /\\$ @
 $( /  |$@
 \\_/__/$ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
  \\_\\$  @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   /\\\\$ @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
254  LATIN SMALL LETTER THORN
 $|$    @
 $__ \\$ @
 $|   |$@
 $.__/$ @
 _|$    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
`,ur=`flf2a$ 6 5 16 15 16
Speed by Claude Martins 2/95 -- based on Slant
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
______@
___  /@
__  / @
 /_/  @
(_)   @
      @@
___ _ @
_( | )@
_|/|/ @
  $   @
 $    @
      @@
_______ __ @
____/ // /_@
_ _  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
_______@
____/ /@
__  __/@
_(_  ) @
/  _/  @
/_/    @@
____   __@
__(_)_/_/@
____/_/  @
__/_/_   @
/_/ (_)  @
         @@
______   @
__( _ )  @
_  __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
___ @
_( )@
_|/ @
 $  @
$   @
    @@
_______@
____/_/@
__  /  @
_  /   @
/ /    @
|_|    @@
______ @
____| |@
____  /@
___  / @
__/_/  @
/_/    @@
_____  @
____/|_@
_|    /@
/_ __| @
 |/    @
       @@
       @
______ @
___/ /_@
/_  __/@
 /_/   @
       @@
    @
    @
    @
___ @
_( )@
_|/ @@
        @
        @
________@
_/_____/@
   $    @
        @@
    @
    @
    @
___ @
_(_)@
    @@
_________@
______/_/@
____/_/  @
__/_/    @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
______@
__<  /@
__  / @
_  /  @
/_/   @
      @@
______ @
__|__ \\@
____/ /@
_  __/ @
/____/ @
       @@
________@
__|__  /@
___/_ < @
____/ / @
/____/  @
        @@
_____ __@
__  // /@
_  // /_@
/__  __/@
  /_/   @
        @@
__________@
___  ____/@
______ \\  @
 ____/ /  @
/_____/   @
          @@
________@
__  ___/@
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
______@
/__  /@
__  / @
_  /  @
/_/   @
      @@
_______ @
__( __ )@
_  __  |@
/ /_/ / @
\\____/  @
        @@
_______ @
__  __ \\@
_  /_/ /@
_\\__, / @
/____/  @
        @@
      @
_____ @
___(_)@
___   @
_(_)  @
      @@
      @
_____ @
___(_)@
___   @
_( )  @
_|/   @@
____@
_  /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
_______@
_ ____/@
/____/ @
  $    @
       @@
___  @
__ \\ @
___ \\@
__  /@
_/_/ @
     @@
_____ @
_ __ \\@
__/ _/@
_/_/  @
(_)   @
      @@
_________ @
__  ____ \\@
_  / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
_______ @
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
________ @
___  __ )@
__  __  |@
_  /_/ / @
/_____/  @
         @@
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
         @@
________ @
___  __ \\@
__  / / /@
_  /_/ / @
/_____/  @
         @@
__________@
___  ____/@
__  __/   @
_  /___   @
/_____/   @
          @@
__________@
___  ____/@
__  /_    @
_  __/    @
/_/       @
          @@
_________@
__  ____/@
_  / __  @
/ /_/ /  @
\\____/   @
         @@
______  __@
___  / / /@
__  /_/ / @
_  __  /  @
/_/ /_/   @
          @@
________@
____  _/@
 __  /  @
__/ /   @
/___/   @
        @@
_________@
______  /@
___ _  / @
/ /_/ /  @
\\____/   @
         @@
______ __@
___  //_/@
__  ,<   @
_  /| |  @
/_/ |_|  @
         @@
______ @
___  / @
__  /  @
_  /___@
/_____/@
       @@
______  ___@
___   |/  /@
__  /|_/ / @
_  /  / /  @
/_/  /_/   @
           @@
_____   __@
___  | / /@
__   |/ / @
_  /|  /  @
/_/ |_/   @
          @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
________ @
___  __ \\@
__  /_/ /@
_  ____/ @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\___\\_\\ @
        @@
________ @
___  __ \\@
__  /_/ /@
_  _, _/ @
/_/ |_|  @
         @@
________@
__  ___/@
_____ \\ @
____/ / @
/____/  @
        @@
________@
___  __/@
__  /   @
_  /    @
/_/     @
        @@
_____  __@
__  / / /@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
___    __@
__ |  / /@
__ | / / @
__ |/ /  @
_____/   @
         @@
___       __@
__ |     / /@
__ | /| / / @
__ |/ |/ /  @
____/|__/   @
            @@
____  __@
__  |/ /@
__    / @
_    |  @
/_/|_|  @
        @@
__  __@
_ \\/ /@
__  / @
_  /  @
/_/   @
      @@
______@
___  /@
__  / @
_  /__@
/____/@
      @@
________@
____  _/@
___  /  @
__  /   @
_  /    @
/__/    @@
___    @
__ \\   @
___ \\  @
____ \\ @
______\\@
       @@
________@
____/  /@
____  / @
___  /  @
__/ /   @
/__/    @@
_ //|@
_|/||@
  $  @
 $   @
$    @
     @@
        @
        @
        @
        @
________@
_/_____/@@
___ @
_( )@
__V @
 $  @
$   @
    @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
______  @
___  /_ @
__  __ \\@
_  /_/ /@
/_.___/ @
        @@
       @
_______@
_  ___/@
/ /__  @
\\___/  @
       @@
_________@
______  /@
_  __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
_____ @
_  _ \\@
/  __/@
\\___/ @
      @@
________@
___  __/@
__  /_  @
_  __/  @
/_/     @
        @@
         @
_______ _@
__  __ \`/@
_  /_/ / @
_\\__, /  @
/____/   @@
______  @
___  /_ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
________ @
______(_)@
_____  / @
____  /  @
___  /   @
/___/    @@
______  @
___  /__@
__  //_/@
_  ,<   @
/_/|_|  @
        @@
______@
___  /@
__  / @
_  /  @
/_/   @
      @@
            @
_______ ___ @
__  __ \`__ \\@
_  / / / / /@
/_/ /_/ /_/ @
            @@
        @
_______ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
       @
______ @
_  __ \\@
/ /_/ /@
\\____/ @
       @@
         @
________ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
________@
__  ___/@
_  /    @
/_/     @
        @@
        @
________@
__  ___/@
_(__  ) @
/____/  @
        @@
_____ @
__  /_@
_  __/@
/ /_  @
\\__/  @
      @@
        @
____  __@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
        @
___   __@
__ | / /@
__ |/ / @
_____/  @
        @@
           @
___      __@
__ | /| / /@
__ |/ |/ / @
____/|__/  @
           @@
        @
____  __@
__  |/_/@
__>  <  @
/_/|_|  @
        @@
         @
_____  __@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
      @
______@
___  /@
__  /_@
_____/@
      @@
_______@
____/_/@
__/_/  @
< <    @
/ /    @
\\_\\    @@
_______@
____  /@
___  / @
__  /  @
_  /   @
/_/    @@
____ _ @
____| |@
____/ /@
____>_>@
__/_/  @
/_/    @@
__/\\//@
_//\\/ @
  $   @
 $    @
$     @
      @@
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
160
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
162
_______@
____/ /@
_  ___/@
/ /__  @
\\  _/  @
/_/    @@
163
_________ @
____  ,__\\@
___/ /_   @
__/ /___  @
(_,____/  @
          @@
164
___ /|___/|@
___| __  / @
__  /_/ /  @
_ ___  |   @
|/   |/    @
           @@
165
___ ____@
___| / /@
_ _  __/@
/_  __/ @
 /_/    @
        @@
166
_______@
____  /@
_____/ @
____   @
_  /   @
/_/    @@
167
_______ @
____/ _)@
__  | | @
_| || | @
_| |_/  @
(__/    @@
168
___   _ @
_(_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169
__________  @
___  _____\\ @
__  / ___/ |@
_  / /__  / @
|  \\___/ /  @
 \\______/   @@
170
______ _@
__  _ \`/@
__\\_,_/ @
/____/  @
 $      @
        @@
171
______@
_  / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172
        @
________@
_/___  /@
    /_/ @
  $     @
        @@
173
       @
       @
_______@
_/____/@
   $   @
       @@
174
__________  @
___  ___  \\ @
__  / _ \\  |@
_  / , _/ / @
| /_/|_| /  @
 \\______/   @@
175
________@
_/_____/@
   $    @
  $     @
 $      @
        @@
176
_____ @
_  _ \\@
/ // /@
\\___/ @
 $    @
      @@
177
________ @
_____/ /_@
____  __/@
___/_/_  @
/_____/  @
         @@
178
__ ___ @
__|_  |@
_  __/ @
/____/ @
 $     @
       @@
179
__ ____@
__|_  /@
__/_ < @
/____/ @
 $     @
       @@
180
____@
_/_/@
  $ @
 $  @
$   @
    @@
181
          @
______  __@
___  / / /@
__  /_/ / @
_  ._,_/  @
/_/       @@
182
_________@
_  _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183
    @
___ @
_(_)@
  $ @
 $  @
    @@
184 
    @
    @
    @
    @
___ @
_/_)@@
185
_____@
_<  /@
_  / @
/_/  @
$    @
     @@
186
______ @
__  _ \\@
__\\___/@
/____/ @
 $     @
       @@
187
_____  @
__ \\ \\ @
___ \\ \\@
__  / /@
___/_/ @
       @@
188
_____   __ @
_<  / _/_/ @
_/ /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189
_____   __   @
_<  / _/_/__ @
_/ /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190
__ ____    __ @
__|_  /  _/_/ @
__/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191
___ _ @
___(_)@
__  / @
/ _/_ @
\\___/ @
      @@
192
______ @
____\\_\\@
__  _ |@
_  __ |@
/_/ |_|@
       @@
193
_______@
____/_/@
__  _ |@
_  __ |@
/_/ |_|@
       @@
194
____ //|@
____|/||@
__  _ | @
_  __ | @
/_/ |_| @
        @@
195
_____/\\//@
____//\\/ @
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
196
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
197
____(())@
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
198
______________@
___      ____/@
__  /|  __/   @
_  __  /___   @
/_/ /_____/   @
              @@
199
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
 /_)     @@
200
______ @
____\\_\\@
__  __/@
_  _/  @
/___/  @
       @@
201
_______@
____/_/@
__  __/@
_  _/  @
/___/  @
       @@
202
____ //|@
____|/||@
__  __/ @
_  _/   @
/___/   @
        @@
203
_____  _ @
___(_)(_)@
__  __/  @
_  _/    @
/___/    @
         @@
204
______ @
____\\_\\@
__   _/@
__/ /  @
/___/  @
       @@
205
_______@
____/_/@
__   _/@
__/ /  @
/___/  @
       @@
206
____ //|@
____|/||@
__   _/ @
__/ /   @
/___/   @
        @@
207
_____  _ @
___(_)(_)@
__   _/  @
__/ /    @
/___/    @
         @@
208
_________ @
____  __ \\@
___  /_/ /@
/_  __/ / @
 /_____/  @
          @@
209
_____/\\//@
____//\\/ @
__  |/ / @
_     /  @
/_/|_/   @
         @@
210
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
211
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
212
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
213
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
214
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
215
     @
__   @
_/|/|@
 > < @
|/|/ @
     @@
216
________ @
__  _// \\@
_  //// /@
/ //// / @
\\_//__/  @
         @@
217
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
218
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
219
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
220
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
221
______ @
___/_/_@
__ \\/ /@
___  / @
__/_/  @
       @@
222
______  @
___  /_ @
__  __ \\@
_  ____/@
/_/     @
        @@
223
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
224
______  @
____\\_\\_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225
_______ @
____/_/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226
___ //| @
___|/||_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227
____/\\//@
___//\\/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229
_______ @
____(())@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230
           @
______ ___ @
_  __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231
       @
_______@
_  ___/@
/ /__  @
\\___/  @
/_)    @@
232
_____ @
___\\_\\@
_  _ \\@
/  __/@
\\___/ @
      @@
233
______@
___/_/@
_  _ \\@
/  __/@
\\___/ @
      @@
234
___ //|@
___|/||@
_  _ \\ @
/  __/ @
\\___/  @
       @@
235
____  _ @
__(_)(_)@
_  _ \\  @
/  __/  @
\\___/   @
        @@
236
_____ @
___\\_\\@
__  / @
_  /  @
/_/   @
      @@
237
______@
___/_/@
__  / @
_  /  @
/_/   @
      @@
238
___ //|@
___|/||@
__  /  @
_  /   @
/_/    @
       @@
239
_ _   _ @
_(_)_(_)@
__/ /   @
_  /    @
/_/     @
        @@
240
____ || @
____=||=@
____ || @
/ __\` | @
\\____/  @
        @@
241
_____/\\//@
____//\\/ @
__  __ \\ @
_  / / / @
/_/ /_/  @
         @@
242
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
243
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
244
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
245
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
246
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
247
       @
_____  @
___(_)_@
/_____/@
 (_)   @
       @@
248
        @
_______ @
_  _// \\@
/ //// /@
\\_//__/ @
        @@
249
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
250
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
251
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
252
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
253
________ @
_____/_/_@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
254
_______  @
____  /_ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
255
_____   _ @
___(_) (_)@
__  / / / @
_  /_/ /  @
_\\__, /   @
/____/    @@
`,Lr=`flf2a$ 7 6 22 15 4
starwars.flf by Ryan Youck (youck@cs.uregina.ca) Dec 25/1994
I am not responsible for use of this font  
Based on Big.flf by Glenn Chappell

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
 __ $@
|  |$@
|  |$@
|  |$@
|__|$@
(__)$@
    $@@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @@
   _  _   @
 _| || |_$@
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_| $@
          @@
     __,--,_.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_    __/   $@
  '--'      $@@
  _     ___$ @
 / \\   /  /$ @
( o ) /  / $ @
 \\_/ /  / _$ @
    /  / / \\ @
   /  / ( o )@
  /__/   \\_/ @@
        @
  ___   @
 ( _ ) $@
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
       $@@
 __ @
(_ )@
 |/ @
  $ @
  $ @
  $ @
    @@
  ___@
 /  /@
|  |$@
|  |$@
|  |$@
|  |$@
 \\__\\@@
___  @
\\  \\ @
 |  |@
 |  |@
 |  |@
 |  |@
/__/ @@
    _    @
 /\\| |/\\ @
 \\ \` ' /$@
|_     _|@
 / , . \\$@
 \\/|_|\\/ @
         @@
       @
   _   @
 _| |_$@
|_   _|@
  |_| $@
   $   @
       @@
    @
    @
  $ @
  $ @
 __ @
(_ )@
 |/ @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @@
    @
    @
    @
  $ @
 __ @
(__)@
    @@
     ___@
    /  /@
   /  / @
  /  /$ @
 /  /$  @
/__/$   @
        @@
  ___  $@
 / _ \\ $@
| | | |$@
| | | |$@
| |_| |$@
 \\___/ $@
       $@@
 __ $@
/_ |$@
 | |$@
 | |$@
 | |$@
 |_|$@
    $@@
 ___  $@
|__ \\ $@
  $) |$@
  / / $@
 / /_ $@
|____|$@
      $@@
 ____  $@
|___ \\ $@
  __) |$@
 |__ < $@
 ___) |$@
|____/ $@
       $@@
 _  _   $@
| || |  $@
| || |_ $@
|__   _|$@
   | |  $@
   |_|  $@
        $@@
 _____ $@
| ____|$@
| |__  $@
|___ \\ $@
 ___) |$@
|____/ $@
       $@@
   __  $@
  / /  $@
 / /_  $@
| '_ \\ $@
| (_) |$@
 \\___/ $@
       $@@
 ______ $@
|____  |$@
   $/ / $@
   / /  $@
  / /   $@
 /_/    $@
        $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 > _ < $@
| (_) |$@
 \\___/ $@
       $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 \\__, |$@
   / / $@
  /_/  $@
       $@@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @@
   ___@
  /  /@
 /  /$@
<  <$ @
 \\  \\$@
  \\__\\@
      @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @@
___   @
\\  \\$ @
 \\  \\ @
  >  >@
 /  / @
/__/$ @
      @@
 ______  $@
|      \\ $@
\`----)  |$@
    /  / $@
   |__|  $@
    __   $@
   (__)  $@@
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
 ____ @
|    |@
|  |-\`@
|  | $@
|  | $@
|  |-.@
|____|@@
___     @
\\  \\ $  @
 \\  \\$  @
  \\  \\$ @
   \\  \\$@
    \\__\\@
        @@
 ____ @
|    |@
\`-|  |@
  |  |@
  |  |@
.-|  |@
|____|@@
  ___  @
 /   \\ @
/--^--\\@
      $@
      $@
      $@
      $@@
        @
        @
        @
    $   @
    $   @
 ______ @
|______|@@
 __ @
( _)@
 \\| @
  $ @
  $ @
  $ @
    @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
   ___@
  /  /@
 |  |$@
/  /$ @
\\  \\$ @
 |  |$@
  \\__\\@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@@
___   @
\\  \\$ @
 |  | @
  \\  \\@
  /  /@
 |  | @
/__/$ @@
  __  _ @
 /  \\/ |@
|_/\\__/ @
     $  @
     $  @
     $  @
        @@
  _   _  @
 (_)_(_) @
   / \\   @
  / _ \\  @
 / ___ \\ @
/_/   \\_\\@
         @@
 _   _ @
(_)_(_)@
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
|_|    @@
`,Er=`flf2a$ 7 6 20 15 3
Stop by David Walton <walton@cs.ucdavis.edu>
Derived from Rounded by Nick Miners N.M.Miners@durham.ac.uk
21 August 1994
$$#
$$#
$$#
$$#
$$#
$$#
$$##
 _ #
| |#
| |#
|_|#
 _ #
|_|#
   ##
 _  _ #
( )( )#
|/ |/ #
      #
      #
      #
      ##
   __  _   #
 _|  || |_ #
(_   ||  _)#
 _|  || |_ #
(_   ||  _)#
  |__||_|  #
           ##
   _   #
 _| |_ #
|  ___)#
|___  |#
(_   _|#
  |_|  #
       ##
 _   _ #
(_) | |#
   / / #
  / /  #
 / / _ #
|_| (_)#
       ##
  ___   #
 / _ \\  #
( (_) ) #
 ) _ (  #
( (/  \\ #
 \\__/\\_)#
        ##
 _ #
( )#
|/ #
   #
   #
   #
   ##
   __ #
  / _)#
 / /  #
( (   #
 \\ \\_ #
  \\__)#
      ##
 __   #
(_ \\  #
  \\ \\ #
   ) )#
 _/ / #
(__/  #
      ##
 _  _  _ #
( \\| |/ )#
 \\  _  / #
(_ (_) _)#
 /     \\ #
(_/|_|\\_)#
         ##
       #
   _   #
 _| |_ #
(_   _)#
  |_|  #
       #
       ##
   #
   #
   #
   #
 _ #
( )#
|/ ##
     #
     #
 ___ #
(___)#
     #
     #
     ##
   #
   #
   #
   #
 _ #
(_)#
   ##
     _ #
    | |#
   / / #
  / /  #
 / /   #
|_|    #
       ##
  ______ #
 / __   |#
| | //| |#
| |// | |#
|  /__| |#
 \\_____/ #
         ##
  __ #
 /  |#
/_/ |#
  | |#
  | |#
  |_|#
     ##
 ______  #
(_____ \\ #
  ____) )#
 /_____/ #
 _______ #
(_______)#
         ##
 ________#
(_______/#
   ____  #
  (___ \\ #
 _____) )#
(______/ #
         ##
   __    #
  / /    #
 / /____ #
|___   _)#
    | |  #
    |_|  #
         ##
 _______ #
(_______)#
 ______  #
(_____ \\ #
 _____) )#
(______/ #
         ##
    __  #
   / /  #
  / /_  #
 / __ \\ #
( (__) )#
 \\____/ #
        ##
 _______ #
(_______)#
      _  #
     / ) #
    / /  #
   (_/   #
         ##
  _____  #
 / ___ \\ #
( (   ) )#
 > > < < #
( (___) )#
 \\_____/ #
         ##
  ____  #
 / __ \\ #
( (__) )#
 \\__  / #
   / /  #
  /_/   #
        ##
   #
   #
 _ #
(_)#
 _ #
(_)#
   ##
   #
   #
 _ #
(_)#
 _ #
( )#
|/ ##
       #
  _  _ #
 / )/ )#
( (( ( #
 \\_)\\_)#
       #
       ##
     #
 ___ #
(___)#
 ___ #
(___)#
     #
     ##
       #
 _  _  #
( \\( \\ #
 ) )) )#
(_/(_/ #
       #
       ##
 ____  #
(___ \\ #
    ) )#
   /_/ #
   _   #
  (_)  #
       ##
 $       $ #
 $       $ #
 $       $ #
 $    _|_$ #
 $__   | $ #
$(_/|_/|_/$#
 $       $ ##
        #
   /\\   #
  /  \\  #
 / /\\ \\ #
| |__| |#
|______|#
        ##
 ______  #
(____  \\ #
 ____)  )#
|  __  ( #
| |__)  )#
|______/ #
         ##
  ______ #
 / _____)#
| /      #
| |      #
| \\_____ #
 \\______)#
         ##
 _____   #
(____ \\  #
 _   \\ \\ #
| |   | |#
| |__/ / #
|_____/  #
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |_____ #
|_______)#
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |      #
|_|      #
         ##
  ______ #
 / _____)#
| /  ___ #
| | (___)#
| \\____/|#
 \\_____/ #
         ##
 _     _ #
| |   | |#
| |__ | |#
|  __)| |#
| |   | |#
|_|   |_|#
         ##
 _____ #
(_____)#
   _   #
  | |  #
 _| |_ #
(_____)#
       ##
   _____ #
  (_____)#
     _   #
    | |  #
 ___| |  #
(____/   #
         ##
 _    _ #
| |  / )#
| | / / #
| |< <  #
| | \\ \\ #
|_|  \\_)#
        ##
 _       #
| |      #
| |      #
| |      #
| |_____ #
|_______)#
         ##
 ______  #
|  ___ \\ #
| | _ | |#
| || || |#
| || || |#
|_||_||_|#
         ##
 ______  #
|  ___ \\ #
| |   | |#
| |   | |#
| |   | |#
|_|   |_|#
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   | |#
| |___| |#
 \\_____/ #
         ##
 ______  #
(_____ \\ #
 _____) )#
|  ____/ #
| |      #
|_|      #
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   |_|#
 \\ \\____ #
  \\_____)#
         ##
 ______  #
(_____ \\ #
 _____) )#
(_____ ( #
      | |#
      |_|#
         ##
    _    #
   | |   #
    \\ \\  #
     \\ \\ #
 _____) )#
(______/ #
         ##
 _______ #
(_______)#
 _       #
| |      #
| |_____ #
 \\______)#
         ##
 _     _ #
| |   | |#
| |   | |#
| |   | |#
| |___| |#
 \\______|#
         ##
 _    _ #
| |  | |#
| |  | |#
 \\ \\/ / #
  \\  /  #
   \\/   #
        ##
 _  _  _ #
| || || |#
| || || |#
| ||_|| |#
| |___| |#
 \\______|#
         ##
 _    _ #
\\ \\  / /#
 \\ \\/ / #
  )  (  #
 / /\\ \\ #
/_/  \\_\\#
        ##
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
   ___   #
  (___)  #
         ##
 _______ #
(_______)#
   __    #
  / /    #
 / /____ #
(_______)#
         ##
 ___ #
|  _)#
| |  #
| |  #
| |_ #
|___)#
     ##
 _     #
| |    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
    |_|#
       ##
 ___ #
(_  |#
  | |#
  | |#
 _| |#
(___|#
     ##
   /\\  #
  //\\\\ #
 (____)#
       #
       #
       #
       ##
         #
         #
         #
         #
 _______ #
(_______)#
         ##
 _ #
( )#
 \\|#
   #
   #
   #
   ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _     #
| |    #
| | _  #
| || \\ #
| |_) )#
|____/ #
       ##
       #
       #
  ____ #
 / ___)#
( (___ #
 \\____)#
       ##
     _ #
    | |#
  _ | |#
 / || |#
( (_| |#
 \\____|#
       ##
       #
       #
  ____ #
 / _  )#
( (/ / #
 \\____)#
       ##
  ___ #
 / __)#
| |__ #
|  __)#
| |   #
|_|   #
      ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_|| |#
(_____|##
 _     #
| |    #
| | _  #
| || \\ #
| | | |#
|_| |_|#
       ##
 _ #
(_)#
 _ #
| |#
| |#
|_|#
   ##
   _ #
  (_)#
   _ #
  | |#
  | |#
 _| |#
(__/ ##
 _     #
| |    #
| |  _ #
| | / )#
| |< ( #
|_| \\_)#
       ##
 _ #
| |#
| |#
| |#
| |#
|_|#
   ##
       #
       #
 ____  #
|    \\ #
| | | |#
|_|_|_|#
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
|_| |_|#
       ##
       #
       #
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
| ||_/ #
|_|    ##
       #
       #
  ____ #
 / _  |#
| | | |#
 \\_|| |#
    |_|##
       #
       #
  ____ #
 / ___)#
| |    #
|_|    #
       ##
      #
      #
  ___ #
 /___)#
|___ |#
(___/ #
      ##
      #
 _    #
| |_  #
|  _) #
| |__ #
 \\___)#
      ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
       #
       #
 _   _ #
| | | |#
 \\ V / #
  \\_/  #
       ##
       #
       #
 _ _ _ #
| | | |#
| | | |#
 \\____|#
       ##
       #
       #
 _   _ #
( \\ / )#
 ) X ( #
(_/ \\_)#
       ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\__  |#
(____/ ##
       #
       #
 _____ #
(___  )#
 / __/ #
(_____)#
       ##
   __ #
  / _)#
 | |  #
( (   #
 | |_ #
  \\__)#
      ##
 _ #
| |#
|_|#
 _ #
| |#
|_|#
   ##
 __   #
(_ \\  #
  | | #
   ) )#
 _| | #
(__/  #
      ##
  __  _ #
 /  \\/ )#
(_/\\__/ #
        #
        #
        #
        ##
 _     _ #
(_) _ (_)#
   / \\   #
  / _ \\  #
 / /_\\ \\ #
|_______|#
         ##
 _     _ #
(_)___(_)#
 / ___ \\ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
| |___| |#
 \\______|#
         ##
 _   _ #
(_) (_)#
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _   _ #
(_) (_)#
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
 _   _ #
(_) (_)#
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
  ___  #
 / _ \\ #
| | ) )#
| |< ( #
| | ) )#
|_|(_/ #
       ##
`,Ar=`flf2a 1 1 2 -1 13 0 0 242
Terminal by Glenn Chappell 4/93
Includes characters 128-255
Enhanced for Latin-2,3,4 by John Cowan <cowan@ccil.org>
Latin character sets supported only if your screen font does
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Double-checked by Paul Burton <solution@earthlink.net> 12/96.  Added the new
parameter supported by FIGlet and FIGWin.  Unlike all other FIGfonts, this one
is intended to produce output exactly the same as the input unless a control
file is used.  Therefore it produces the SAME output for smush, kern or fit.
  
@
!@
"@
#@
$@
%@
&@
'@
(@
)@
*@
+@
,@
-@
.@
/@
0@
1@
2@
3@
4@
5@
6@
7@
8@
9@
:@
;@
<@
=@
>@
?@
@#
A@
B@
C@
D@
E@
F@
G@
H@
I@
J@
K@
L@
M@
N@
O@
P@
Q@
R@
S@
T@
U@
V@
W@
X@
Y@
Z@
[@
\\@
]@
^@
_@
\`@
a@
b@
c@
d@
e@
f@
g@
h@
i@
j@
k@
l@
m@
n@
o@
p@
q@
r@
s@
t@
u@
v@
w@
x@
y@
z@
{@
|@
}@
~@
�@
�@
�@
�@
�@
�@
�@
128
�@
129
�@
130
�@
131
�@
132
�@
133
�@
134
�@
135
�@
136
�@
137
�@
138
�@
139
�@
140
�@
141
�@
142
�@
143
�@
144
�@
145
�@
146
�@
147
�@
148
�@
149
�@
150
�@
151
�@
152
�@
153
�@
154
�@
155
�@
156
�@
157
�@
158
�@
159
�@
160  NO-BREAK SPACE
�@
161  INVERTED EXCLAMATION MARK
�@
162  CENT SIGN
�@
163  POUND SIGN
�@
164  CURRENCY SIGN
�@
165  YEN SIGN
�@
166  BROKEN BAR
�@
167  SECTION SIGN
�@
168  DIAERESIS
�@
169  COPYRIGHT SIGN
�@
170  FEMININE ORDINAL INDICATOR
�@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
�@
172  NOT SIGN
�@
173  SOFT HYPHEN
�@
174  REGISTERED SIGN
�@
175  MACRON
�@
176  DEGREE SIGN
�@
177  PLUS-MINUS SIGN
�@
178  SUPERSCRIPT TWO
�@
179  SUPERSCRIPT THREE
�@
180  ACUTE ACCENT
�@
181  MICRO SIGN
�@
182  PILCROW SIGN
�@
183  MIDDLE DOT
�@
184  CEDILLA
�@
185  SUPERSCRIPT ONE
�@
186  MASCULINE ORDINAL INDICATOR
�@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
�@
188  VULGAR FRACTION ONE QUARTER
�@
189  VULGAR FRACTION ONE HALF
�@
190  VULGAR FRACTION THREE QUARTERS
�@
191  INVERTED QUESTION MARK
�@
192  LATIN CAPITAL LETTER A WITH GRAVE
�@
193  LATIN CAPITAL LETTER A WITH ACUTE
�@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
�@
195  LATIN CAPITAL LETTER A WITH TILDE
�@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
�@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
�@
198  LATIN CAPITAL LETTER AE
�@
199  LATIN CAPITAL LETTER C WITH CEDILLA
�@
200  LATIN CAPITAL LETTER E WITH GRAVE
�@
201  LATIN CAPITAL LETTER E WITH ACUTE
�@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
�@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
�@
204  LATIN CAPITAL LETTER I WITH GRAVE
�@
205  LATIN CAPITAL LETTER I WITH ACUTE
�@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
�@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
�@
208  LATIN CAPITAL LETTER ETH
�@
209  LATIN CAPITAL LETTER N WITH TILDE
�@
210  LATIN CAPITAL LETTER O WITH GRAVE
�@
211  LATIN CAPITAL LETTER O WITH ACUTE
�@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
�@
213  LATIN CAPITAL LETTER O WITH TILDE
�@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
�@
215  MULTIPLICATION SIGN
�@
216  LATIN CAPITAL LETTER O WITH STROKE
�@
217  LATIN CAPITAL LETTER U WITH GRAVE
�@
218  LATIN CAPITAL LETTER U WITH ACUTE
�@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
�@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
�@
221  LATIN CAPITAL LETTER Y WITH ACUTE
�@
222  LATIN CAPITAL LETTER THORN
�@
223  LATIN SMALL LETTER SHARP S
�@
224  LATIN SMALL LETTER A WITH GRAVE
�@
225  LATIN SMALL LETTER A WITH ACUTE
�@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
�@
227  LATIN SMALL LETTER A WITH TILDE
�@
228  LATIN SMALL LETTER A WITH DIAERESIS
�@
229  LATIN SMALL LETTER A WITH RING ABOVE
�@
230  LATIN SMALL LETTER AE
�@
231  LATIN SMALL LETTER C WITH CEDILLA
�@
232  LATIN SMALL LETTER E WITH GRAVE
�@
233  LATIN SMALL LETTER E WITH ACUTE
�@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
�@
235  LATIN SMALL LETTER E WITH DIAERESIS
�@
236  LATIN SMALL LETTER I WITH GRAVE
�@
237  LATIN SMALL LETTER I WITH ACUTE
�@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
�@
239  LATIN SMALL LETTER I WITH DIAERESIS
�@
240  LATIN SMALL LETTER ETH
�@
241  LATIN SMALL LETTER N WITH TILDE
�@
242  LATIN SMALL LETTER O WITH GRAVE
�@
243  LATIN SMALL LETTER O WITH ACUTE
�@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
�@
245  LATIN SMALL LETTER O WITH TILDE
�@
246  LATIN SMALL LETTER O WITH DIAERESIS
�@
247  DIVISION SIGN
�@
248  LATIN SMALL LETTER O WITH STROKE
�@
249  LATIN SMALL LETTER U WITH GRAVE
�@
250  LATIN SMALL LETTER U WITH ACUTE
�@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
�@
252  LATIN SMALL LETTER U WITH DIAERESIS
�@
253  LATIN SMALL LETTER Y WITH ACUTE
�@
254  LATIN SMALL LETTER THORN
�@
255  LATIN SMALL LETTER Y WITH DIAERESIS
�@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
�@
0x0101  LATIN SMALL LETTER A WITH MACRON
�@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
�@
0x0103  LATIN SMALL LETTER A WITH BREVE
�@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
�@
0x0105  LATIN SMALL LETTER A WITH OGONEK
�@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
�@
0x0107  LATIN SMALL LETTER C WITH ACUTE
�@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
�@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
�@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
�@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
�@
0x010C  LATIN CAPITAL LETTER C WITH CARON
�@
0x010D  LATIN SMALL LETTER C WITH CARON
�@
0x010E  LATIN CAPITAL LETTER D WITH CARON
�@
0x010F  LATIN SMALL LETTER D WITH CARON
�@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
�@
0x0111  LATIN SMALL LETTER D WITH STROKE
�@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
�@
0x0113  LATIN SMALL LETTER E WITH MACRON
�@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
�@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
�@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
�@
0x0119  LATIN SMALL LETTER E WITH OGONEK
�@
0x011A  LATIN CAPITAL LETTER E WITH CARON
�@
0x011B  LATIN SMALL LETTER E WITH CARON
�@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
�@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
�@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
�@
0x011F  LATIN SMALL LETTER G WITH BREVE
�@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
�@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
�@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
�@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
�@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
�@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
�@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
�@
0x0127  LATIN SMALL LETTER H WITH STROKE
�@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
�@
0x0129  LATIN SMALL LETTER I WITH TILDE
�@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
�@
0x012B  LATIN SMALL LETTER I WITH MACRON
�@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
�@
0x012F  LATIN SMALL LETTER I WITH OGONEK
�@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
�@
0x0131  LATIN SMALL LETTER DOTLESS I
�@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
�@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
�@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
�@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
�@
0x0138  LATIN SMALL LETTER KRA
�@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
�@
0x013A  LATIN SMALL LETTER L WITH ACUTE
�@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
�@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
�@
0x013D  LATIN CAPITAL LETTER L WITH CARON
�@
0x013E  LATIN SMALL LETTER L WITH CARON
�@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
�@
0x0142  LATIN SMALL LETTER L WITH STROKE
�@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
�@
0x0144  LATIN SMALL LETTER N WITH ACUTE
�@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
�@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
�@
0x0147  LATIN CAPITAL LETTER N WITH CARON
�@
0x0148  LATIN SMALL LETTER N WITH CARON
�@
0x014A  LATIN CAPITAL LETTER ENG
�@
0x014B  LATIN SMALL LETTER ENG
�@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
�@
0x014D  LATIN SMALL LETTER O WITH MACRON
�@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
�@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
�@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
�@
0x0155  LATIN SMALL LETTER R WITH ACUTE
�@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
�@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
�@
0x0158  LATIN CAPITAL LETTER R WITH CARON
�@
0x0159  LATIN SMALL LETTER R WITH CARON
�@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
�@
0x015B  LATIN SMALL LETTER S WITH ACUTE
�@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
�@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
�@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
�@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
�@
0x0160  LATIN CAPITAL LETTER S WITH CARON
�@
0x0161  LATIN SMALL LETTER S WITH CARON
�@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
�@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
�@
0x0164  LATIN CAPITAL LETTER T WITH CARON
�@
0x0165  LATIN SMALL LETTER T WITH CARON
�@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
�@
0x0167  LATIN SMALL LETTER T WITH STROKE
�@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
�@
0x0169  LATIN SMALL LETTER U WITH TILDE
�@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
�@
0x016B  LATIN SMALL LETTER U WITH MACRON
�@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
�@
0x016D  LATIN SMALL LETTER U WITH BREVE
�@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
�@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
�@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
�@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
�@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
�@
0x0173  LATIN SMALL LETTER U WITH OGONEK
�@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
�@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
�@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
�@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
�@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
�@
0x017E  LATIN SMALL LETTER Z WITH CARON
�@
0x02C7  CARON
�@
0x02D8  BREVE
�@
0x02D9  DOT ABOVE
�@
0x02DB  OGONEK
�@
0x02DD  DOUBLE ACUTE ACCENT
�@
`,cr=`flf2a$ 10 5 10 0 3 0


Figlet conversion by patorjk, April 17, 2008
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
$▐██▌$@
$▐██▌$@
$▐██▌$@
$▓██▒$@
$▒▄▄ $@
$░▀▀▒$@
$░  ░$@
$   ░$@
$░   $@
$    $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
$   $@
$   $@
$   $@
$   $@
$██▓$@
$▒▓▒$@
$░▒ $@
$░  $@
$ ░ $@
$ ░ $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`,fr=`flf2a$ 4 3 10 -1 20
Cyberfont - large
Figlet conversion by Kent Nassen, kentn@cyberspace.org, 8-10-94
From: stock@fwi.uva.nl (Lennert Stock)
Date: 15 Jul 1994 00:04:25 GMT

Here are some fonts. Non-figlet I'm afraid, if you wanna convert them, be
my guest. I posted the isometric fonts before.

------------------------------------------------------------------------------

     .x%%%%%%x.                                             .x%%%%%%x.
    ,%%%%%%%%%%.                                           .%%%%%%%%%%.
   ,%%%'  )'  \\)                                           :(  \`(  \`%%%.
  ,%x%)________) --------- L e n n e r t   S t o c k       ( _   __ (%x%.
  (%%%~^88P~88P|                                           |~=> .=-~ %%%)
  (%%::. .:,\\ .'                                           \`. /,:. .::%%)
  \`;%:\`\\. \`-' |                                             | \`-' ./':%:'
   \`\`x\`. -===.'                   stock@fwi.uva.nl -------- \`.===- .'x''
    / \`:\`.__.;                                               :.__.':' \\
 .d8b.     ..\`.                                             .'..     .d8b.
 $  $@
 $  $@
 $  $@
 $  $@@
   /@
  / @
 .  @
   $@@
 ..@
 ''@
   @
   @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 .@
 '@
  @
  @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 $@
 $@
 .@
 '@@
 $$$@
 ___@
 $$$@
 $$$@@
 $@
 $@
 .@
 $@@
    /@
   / @
  /  @
 /   @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 $@
 .@
 .@
 $@@
 $@
 .@
 .@
 '@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 ____ @
  ___|@
  \\   @
   \`  @@
@
@
@
@@
 _______@
 |_____|@
 |     |@
        @@
 ______ @
 |_____]@
 |_____]@
        @@
 _______@
 |     $@
 |_____$@
        @@
 ______$@
 |     \\@
 |_____/@
        @@
 _______@
 |______@
 |______@
        @@
 _______@
 |______@
 |     $@
        @@
  ______@
 |  ____@
 |_____|@
        @@
 _     _@
 |_____|@
 |     |@
        @@
 _____@
   | $@
 __|__@
      @@
 _____@
   | $@
 __| $@
      @@
 _     _@
 |____/$@
 |    \\_@
        @@
 $    $@
 |    $@
 |_____@
       @@
 _______@
 |  |  |@
 |  |  |@
        @@
 __   _@
 | \\  |@
 |  \\_|@
       @@
  _____ @
 |     |@
 |_____|@
        @@
  _____ @
 |_____]@
 |     $@
        @@
  _____ @
 |   __|@
 |____\\|@
        @@
  ______@
 |_____/@
 |    \\_@
        @@
 _______@
 |______@
 ______|@
        @@
 _______@
    |  $@
    |  $@
        @@
 _     _@
 |     |@
 |_____|@
        @@
 _    _@
  \\  /$@
   \\/ $@
       @@
 _  _  _@
 |  |  |@
 |__|__|@
        @@
 _     _@
  \\___/$@
 _/   \\_@
        @@
 __   __@
   \\_/ $@
    |  $@
        @@
 ______@
  ____/@
 /_____@
       @@
@
@
@
@@
 \\   @
  \\  @
   \\ @
    \\@@
@
@
@
@@
@
@
@
@@
      @
      @
 _____@
      @@
 .@
 \`@
  @
  @@
 _______@
 |_____|@
 |     |@
        @@
 ______ @
 |_____]@
 |_____]@
        @@
 _______@
 |     $@
 |_____$@
        @@
 ______$@
 |     \\@
 |_____/@
        @@
 _______@
 |______@
 |______@
        @@
 _______@
 |______@
 |     $@
        @@
  ______@
 |  ____@
 |_____|@
        @@
 _     _@
 |_____|@
 |     |@
        @@
 _____@
   | $@
 __|__@
      @@
 _____@
   | $@
 __| $@
      @@
 _     _@
 |____/$@
 |    \\_@
        @@
 $    $@
 |    $@
 |_____@
       @@
 _______@
 |  |  |@
 |  |  |@
        @@
 __   _@
 | \\  |@
 |  \\_|@
       @@
  _____ @
 |     |@
 |_____|@
        @@
  _____ @
 |_____]@
 |     $@
        @@
  _____ @
 |   __|@
 |____\\|@
        @@
  ______@
 |_____/@
 |    \\_@
        @@
 _______@
 |______@
 ______|@
        @@
 _______@
    |  $@
    |  $@
        @@
 _     _@
 |     |@
 |_____|@
        @@
 _    _@
  \\  /$@
   \\/ $@
       @@
 _  _  _@
 |  |  |@
 |__|__|@
        @@
 _     _@
  \\___/$@
 _/   \\_@
        @@
 __   __@
   \\_/ $@
    |  $@
        @@
 ______@
  ____/@
 /_____@
       @@
@
@
@
@@
  |@
  |@
  |@
  |@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
`,hu={Standard:Xs,Ghost:ws,Graffiti:Ks,Slant:js,Small:Fs,"3-D":qs,"ANSI Shadow":Qs,Banner:Zs,Big:Js,Block:ks,Bubble:_r,Digital:tr,Doom:er,Epic:ar,Isometric1:lr,Ivrit:$r,Mini:Tr,Script:nr,Shadow:ir,Speed:ur,"Star Wars":Lr,Stop:Er,Term:Ar,Bloody:cr,Cyberlarge:fr},Ir=Object.keys(hu);Object.entries(hu).forEach(([L,i])=>{Lf.parseFont(L,i)});const or={process:(L,i)=>new Promise((u,T)=>{hu[i]||(i="Standard"),Lf.text(L,{font:i},(c,A)=>{c?(console.error("Figlet error:",c),u("Error producing text art")):u(A)})})};function sr(){const[L,i]=H_.useState(null),[u,T]=H_.useState(null),[c,A]=H_.useState(""),[s,O]=H_.useState(!1),[d,r]=H_.useState(null),[m,C]=H_.useState(null),[y,q]=H_.useState("image"),[K,t_]=H_.useState(50),[Z,k]=H_.useState("ascii"),[l_,e_]=H_.useState(1),[T_,N_]=H_.useState(1),[U,Y]=H_.useState(1),[j,u_]=H_.useState(0),[v_,p_]=H_.useState(0),[r_,U_]=H_.useState(0),[S_,O_]=H_.useState(!1),[p,X]=H_.useState("None"),[J,o_]=H_.useState("Normal"),[s_,h]=H_.useState(128),[I,o]=H_.useState("MESSI"),[f,S]=H_.useState("Standard"),[x,W]=H_.useState(null);H_.useEffect(()=>{if(L){const Q=new FileReader;Q.onload=f_=>{const D_=f_.target.result;r(D_),C(D_);const ot=new Image;ot.onload=()=>{T(ot)},ot.src=D_},Q.readAsDataURL(L)}},[L]),H_.useEffect(()=>{if(y==="image"){if(u){const Q=Gs.process(u,{width:K,mode:Z,brightness:l_,contrast:T_,saturation:U,grayscale:j,sepia:v_,hue:r_,invert:S_,dithering:p,charSet:J,threshold:s_});A(Q)}}else or.process(I,f).then(Q=>{A(Q)})},[y,u,K,Z,l_,T_,U,j,v_,r_,S_,p,J,s_,I,f]);const P=Q=>{Q.target.files&&Q.target.files[0]&&i(Q.target.files[0])},z=()=>{d?O(!0):W("Upload an image first!")},w=Q=>{const f_=new Image;f_.onload=()=>{T(f_),O(!1),C(Q)},f_.src=Q},a_=()=>{O(!1)},L_=async()=>{if(!c){W("Nothing to copy!");return}try{if(navigator.clipboard)await navigator.clipboard.writeText(c),W("Copied to clipboard!");else throw new Error("Clipboard API unavailable")}catch{const f_=document.createElement("textarea");f_.value=c,f_.style.position="fixed",f_.style.left="-9999px",document.body.appendChild(f_),f_.focus(),f_.select();try{document.execCommand("copy"),W("Copied to clipboard!")}catch{W("Failed to copy.")}document.body.removeChild(f_)}},E_=()=>{if(!c)return;const Q=new Blob([c],{type:"text/plain"}),f_=URL.createObjectURL(Q),D_=document.createElement("a");D_.href=f_,D_.download="ascii-art.txt",document.body.appendChild(D_),D_.click(),document.body.removeChild(D_),URL.revokeObjectURL(f_),W("Saved as ascii-art.txt")},n_=()=>{if(!c)return;const Q=document.createElement("canvas"),f_=Q.getContext("2d"),D_=c.split(`
`),ot=14,Tt=14,rt="Courier New, monospace";f_.font=`${ot}px ${rt}`;let J_=0;D_.forEach(ul=>{const Qe=f_.measureText(ul);Qe.width>J_&&(J_=Qe.width)});const q_=20;Q.width=Math.ceil(J_+q_*2),Q.height=Math.ceil(D_.length*Tt+q_*2),f_.fillStyle="#111111",f_.fillRect(0,0,Q.width,Q.height),f_.fillStyle="#eeeeee",f_.font=`${ot}px ${rt}`,f_.textBaseline="top",D_.forEach((ul,Qe)=>{f_.fillText(ul,q_,q_+Qe*Tt)});const il=Q.toDataURL("image/png"),lt=document.createElement("a");lt.href=il,lt.download="ascii-art.png",document.body.appendChild(lt),lt.click(),document.body.removeChild(lt),W("Saved as ascii-art.png")};return V.jsxs("div",{className:"app-container",children:[s&&V.jsx(Ws,{src:m,onSave:w,onCancel:a_}),V.jsx(Po,{onFileChange:P,inputMode:y,setInputMode:q,textInput:I,setTextInput:o,font:f,setFont:S,fontOptions:Ir,width:K,setWidth:t_,mode:Z,setMode:k,brightness:l_,setBrightness:e_,contrast:T_,setContrast:N_,saturation:U,setSaturation:Y,grayscale:j,setGrayscale:u_,sepia:v_,setSepia:p_,hue:r_,setHue:U_,invert:S_,setInvert:O_,dithering:p,setDithering:X,charSet:J,setCharSet:o_,asciiSets:Object.keys(pT),threshold:s_,setThreshold:h,onCopy:L_,onSaveTxt:E_,onSavePng:n_,onEdit:z,hasImage:!!u}),V.jsx(Yo,{text:c}),x&&V.jsx(Xo,{message:x,onClose:()=>W(null)})]})}Vo.createRoot(document.getElementById("root")).render(V.jsx(H_.StrictMode,{children:V.jsx(sr,{})}));
