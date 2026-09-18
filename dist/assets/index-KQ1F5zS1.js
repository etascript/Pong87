(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function hd(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Nl={},mh={},gh;function iv(){return gh||(gh=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),mh}var za={},Xu=function(n,e){return Xu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Xu(n,e)};function Wm(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Xu(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nc=function(){return Nc=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Nc.apply(this,arguments)};function $m(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function qm(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Xm(n,e){return function(t,i){e(t,i,n)}}function jm(n,e,t,i,r,s){function o(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,f=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),d,h=!1,m=t.length-1;m>=0;m--){var x={};for(var y in i)x[y]=y==="access"?{}:i[y];for(var y in i.access)x.access[y]=i.access[y];x.addInitializer=function(g){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(g||null))};var v=(0,t[m])(a==="accessor"?{get:f.get,set:f.set}:f[c],x);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=o(v.get))&&(f.get=d),(d=o(v.set))&&(f.set=d),(d=o(v.init))&&r.unshift(d)}else(d=o(v))&&(a==="field"?r.unshift(d):f[c]=d)}l&&Object.defineProperty(l,i.name,f),h=!0}function Ym(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function Km(n){return typeof n=="symbol"?n:"".concat(n)}function Jm(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Zm(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Qm(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(f){try{l(i.next(f))}catch(d){o(d)}}function c(f){try{l(i.throw(f))}catch(d){o(d)}}function l(f){f.done?s(f.value):r(f.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function eg(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(f){return c([l,f])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(f){l=[6,f],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var sl=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function tg(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&sl(e,n,t)}function Uc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pd(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function ng(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(pd(arguments[e]));return n}function ig(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function rg(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function oo(n){return this instanceof oo?(this.v=n,this):new oo(n)}function sg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(m){return function(x){return Promise.resolve(x).then(m,d)}}function a(m,x){i[m]&&(r[m]=function(y){return new Promise(function(v,g){s.push([m,y,v,g])>1||c(m,y)})},x&&(r[m]=x(r[m])))}function c(m,x){try{l(i[m](x))}catch(y){h(s[0][3],y)}}function l(m){m.value instanceof oo?Promise.resolve(m.value.v).then(f,d):h(s[0][2],m)}function f(m){c("next",m)}function d(m){c("throw",m)}function h(m,x){m(x),s.shift(),s.length&&c(s[0][0],s[0][1])}}function og(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:oo(n[r](o)),done:!1}:s?s(o):o}:s}}function ag(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Uc=="function"?Uc(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function cg(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var rv=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},ju=function(n){return ju=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},ju(n)};function lg(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=ju(n),i=0;i<t.length;i++)t[i]!=="default"&&sl(e,n,t[i]);return rv(e,n),e}function ug(n){return n&&n.__esModule?n:{default:n}}function fg(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function dg(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function hg(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function pg(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var sv=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function mg(n){function e(s){n.error=n.hasError?new sv(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function gg(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const ov={__extends:Wm,__assign:Nc,__rest:$m,__decorate:qm,__param:Xm,__esDecorate:jm,__runInitializers:Ym,__propKey:Km,__setFunctionName:Jm,__metadata:Zm,__awaiter:Qm,__generator:eg,__createBinding:sl,__exportStar:tg,__values:Uc,__read:pd,__spread:ng,__spreadArrays:ig,__spreadArray:rg,__await:oo,__asyncGenerator:sg,__asyncDelegator:og,__asyncValues:ag,__makeTemplateObject:cg,__importStar:lg,__importDefault:ug,__classPrivateFieldGet:fg,__classPrivateFieldSet:dg,__classPrivateFieldIn:hg,__addDisposableResource:pg,__disposeResources:mg,__rewriteRelativeImportExtension:gg},av=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:pg,get __assign(){return Nc},__asyncDelegator:og,__asyncGenerator:sg,__asyncValues:ag,__await:oo,__awaiter:Qm,__classPrivateFieldGet:fg,__classPrivateFieldIn:hg,__classPrivateFieldSet:dg,__createBinding:sl,__decorate:qm,__disposeResources:mg,__esDecorate:jm,__exportStar:tg,__extends:Wm,__generator:eg,__importDefault:ug,__importStar:lg,__makeTemplateObject:cg,__metadata:Zm,__param:Xm,__propKey:Km,__read:pd,__rest:$m,__rewriteRelativeImportExtension:gg,__runInitializers:Ym,__setFunctionName:Jm,__spread:ng,__spreadArray:rg,__spreadArrays:ig,__values:Uc,default:ov},Symbol.toStringTag,{value:"Module"})),ol=hd(av);var Ul={},_h;function al(){return _h||(_h=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(Ul)),Ul}var Fl={},Bl={},kl={},Uo={exports:{}},cv=Uo.exports,vh;function md(){return vh||(vh=1,(function(n,e){(function(t,i){i(e)})(cv,(function(t){t.OPERATION=void 0,(function(T){T[T.ADD=128]="ADD",T[T.REPLACE=0]="REPLACE",T[T.DELETE=64]="DELETE",T[T.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",T[T.MOVE_AND_ADD=160]="MOVE_AND_ADD",T[T.DELETE_AND_ADD=192]="DELETE_AND_ADD",T[T.CLEAR=10]="CLEAR",T[T.REVERSE=15]="REVERSE",T[T.MOVE=32]="MOVE",T[T.DELETE_BY_REFID=33]="DELETE_BY_REFID",T[T.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??=Symbol.for("Symbol.metadata");const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",f="~deleteByIndex",d="~changes",h="~childType",m="~onEncodeEnd",x="~onDecodeEnd",y="~descriptors",v="~__numFields",g="~__refTypeFieldIndexes",R="~__viewFieldIndexes",C="$__fieldIndexesByViewTag";let b;try{b=new TextEncoder}catch{}const N=new ArrayBuffer(8),k=new Int32Array(N),B=new Float32Array(N),J=new Float64Array(N),I=new BigInt64Array(N),U=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(T,u){for(var p=0,_=0,E=0,O=T.length;E<O;E++)p=T.charCodeAt(E),p<128?_+=1:p<2048?_+=2:p<55296||p>=57344?_+=3:(E++,_+=4);return _};function ye(T,u,p){for(var _=0,E=0,O=u.length;E<O;E++)_=u.charCodeAt(E),_<128?T[p.offset++]=_:_<2048?(T[p.offset]=192|_>>6,T[p.offset+1]=128|_&63,p.offset+=2):_<55296||_>=57344?(T[p.offset]=224|_>>12,T[p.offset+1]=128|_>>6&63,T[p.offset+2]=128|_&63,p.offset+=3):(E++,_=65536+((_&1023)<<10|u.charCodeAt(E)&1023),T[p.offset]=240|_>>18,T[p.offset+1]=128|_>>12&63,T[p.offset+2]=128|_>>6&63,T[p.offset+3]=128|_&63,p.offset+=4)}function D(T,u,p){T[p.offset++]=u&255}function W(T,u,p){T[p.offset++]=u&255}function $(T,u,p){T[p.offset++]=u&255,T[p.offset++]=u>>8&255}function F(T,u,p){T[p.offset++]=u&255,T[p.offset++]=u>>8&255}function V(T,u,p){T[p.offset++]=u&255,T[p.offset++]=u>>8&255,T[p.offset++]=u>>16&255,T[p.offset++]=u>>24&255}function z(T,u,p){const _=u>>24,E=u>>16,O=u>>8,j=u;T[p.offset++]=j&255,T[p.offset++]=O&255,T[p.offset++]=E&255,T[p.offset++]=_&255}function Se(T,u,p){const _=Math.floor(u/Math.pow(2,32)),E=u>>>0;z(T,E,p),z(T,_,p)}function Ee(T,u,p){const _=u/Math.pow(2,32)>>0,E=u>>>0;z(T,E,p),z(T,_,p)}function Re(T,u,p){I[0]=BigInt.asIntN(64,u),V(T,k[0],p),V(T,k[1],p)}function Ne(T,u,p){I[0]=BigInt.asIntN(64,u),V(T,k[0],p),V(T,k[1],p)}function ft(T,u,p){B[0]=u,V(T,k[0],p)}function dt(T,u,p){J[0]=u,V(T,k[0],p),V(T,k[1],p)}function ge(T,u,p){T[p.offset++]=u?1:0}function Ue(T,u,p){u||(u="");let _=U(u,"utf8"),E=0;if(_<32)T[p.offset++]=_|160,E=1;else if(_<256)T[p.offset++]=217,T[p.offset++]=_%255,E=2;else if(_<65536)T[p.offset++]=218,F(T,_,p),E=3;else if(_<4294967296)T[p.offset++]=219,z(T,_,p),E=5;else throw new Error("String too long");return ye(T,u,p),E+_}function Ie(T,u,p){if(isNaN(u))return Ie(T,0,p);if(isFinite(u)){if(u!==(u|0))return Math.abs(u)<=34028235e31&&(B[0]=u,Math.abs(Math.abs(B[0])-Math.abs(u))<1e-4)?(T[p.offset++]=202,ft(T,u,p),5):(T[p.offset++]=203,dt(T,u,p),9)}else return Ie(T,u>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,p);return u>=0?u<128?(T[p.offset++]=u&255,1):u<256?(T[p.offset++]=204,T[p.offset++]=u&255,2):u<65536?(T[p.offset++]=205,F(T,u,p),3):u<4294967296?(T[p.offset++]=206,z(T,u,p),5):(T[p.offset++]=207,Ee(T,u,p),9):u>=-32?(T[p.offset++]=224|u+32,1):u>=-128?(T[p.offset++]=208,D(T,u,p),2):u>=-32768?(T[p.offset++]=209,$(T,u,p),3):u>=-2147483648?(T[p.offset++]=210,V(T,u,p),5):(T[p.offset++]=211,Se(T,u,p),9)}const Qe={int8:D,uint8:W,int16:$,uint16:F,int32:V,uint32:z,int64:Se,uint64:Ee,bigint64:Re,biguint64:Ne,float32:ft,float64:dt,boolean:ge,string:Ue,number:Ie,utf8Write:ye,utf8Length:U},nt=new ArrayBuffer(8),it=new Int32Array(nt),Gt=new Float32Array(nt),L=new Float64Array(nt),M=new BigUint64Array(nt),te=new BigInt64Array(nt);function oe(T,u,p){p>T.length-u.offset&&(p=T.length-u.offset);for(var _="",E=0,O=u.offset,j=u.offset+p;O<j;O++){var me=T[O];if((me&128)===0){_+=String.fromCharCode(me);continue}if((me&224)===192){_+=String.fromCharCode((me&31)<<6|T[++O]&63);continue}if((me&240)===224){_+=String.fromCharCode((me&15)<<12|(T[++O]&63)<<6|(T[++O]&63)<<0);continue}if((me&248)===240){E=(me&7)<<18|(T[++O]&63)<<12|(T[++O]&63)<<6|(T[++O]&63)<<0,E>=65536?(E-=65536,_+=String.fromCharCode((E>>>10)+55296,(E&1023)+56320)):_+=String.fromCharCode(E);continue}console.error("decode.utf8Read(): Invalid byte "+me+" at offset "+O+". Skip to end of string: "+(u.offset+p));break}return u.offset+=p,_}function de(T,u){return Q(T,u)<<24>>24}function Q(T,u){return T[u.offset++]}function Me(T,u){return ae(T,u)<<16>>16}function ae(T,u){return T[u.offset++]|T[u.offset++]<<8}function he(T,u){return T[u.offset++]|T[u.offset++]<<8|T[u.offset++]<<16|T[u.offset++]<<24}function _e(T,u){return he(T,u)>>>0}function He(T,u){return it[0]=he(T,u),Gt[0]}function w(T,u){return it[0]=he(T,u),it[1]=he(T,u),L[0]}function S(T,u){const p=_e(T,u);return he(T,u)*Math.pow(2,32)+p}function H(T,u){const p=_e(T,u);return _e(T,u)*Math.pow(2,32)+p}function ie(T,u){return it[0]=he(T,u),it[1]=he(T,u),te[0]}function ve(T,u){return it[0]=he(T,u),it[1]=he(T,u),M[0]}function re(T,u){return Q(T,u)>0}function Fe(T,u){const p=T[u.offset++];let _;return p<192?_=p&31:p===217?_=Q(T,u):p===218?_=ae(T,u):p===219&&(_=_e(T,u)),oe(T,u,_)}function be(T,u){const p=T[u.offset++];if(p<128)return p;if(p===202)return He(T,u);if(p===203)return w(T,u);if(p===204)return Q(T,u);if(p===205)return ae(T,u);if(p===206)return _e(T,u);if(p===207)return H(T,u);if(p===208)return de(T,u);if(p===209)return Me(T,u);if(p===210)return he(T,u);if(p===211)return S(T,u);if(p>223)return(255-p+1)*-1}function Je(T,u){const p=T[u.offset];return p<192&&p>160||p===217||p===218||p===219}const Oe={utf8Read:oe,int8:de,uint8:Q,int16:Me,uint16:ae,int32:he,uint32:_e,float32:He,float64:w,int64:S,uint64:H,bigint64:ie,biguint64:ve,boolean:re,string:Fe,number:be,stringCheck:Je},we={},ze=new Map;function Xe(T,u){u.constructor&&(ze.set(u.constructor,T),we[T]=u),u.encode&&(Qe[T]=u.encode),u.decode&&(Oe[T]=u.decode)}function Ke(T){return we[T]}function Be(T){for(const u in T)Xe(u,T[u]);return u=>ke(u)}const bi=class bi{static register(u){const p=Object.getPrototypeOf(u);if(p!==qe){let _=bi.inheritedTypes.get(p);_||(_=new Set,bi.inheritedTypes.set(p,_)),_.add(u)}}static cache(u){let p=bi.cachedContexts.get(u);return p||(p=new bi(u),bi.cachedContexts.set(u,p)),p}constructor(u){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},u&&this.discoverTypes(u)}has(u){return this.schemas.has(u)}get(u){return this.types[u]}add(u,p=this.schemas.size){return this.schemas.has(u)?!1:(this.types[p]=u,u[Symbol.metadata]===void 0&&Ce.initialize(u),this.schemas.set(u,p),!0)}getTypeId(u){return this.schemas.get(u)}discoverTypes(u,p,_,E){if(E&&this.registerFilteredByParent(u,p,_),!this.add(u))return;bi.inheritedTypes.get(u)?.forEach(me=>{this.discoverTypes(me,p,_,E)});let O=u;for(;(O=Object.getPrototypeOf(O))&&O!==qe&&O!==Function.prototype;)this.discoverTypes(O);const j=u[Symbol.metadata]??={};j[R]&&(this.hasFilters=!0);for(const me in j){const se=me,fe=j[se].type,pe=j[se].tag!==void 0;if(typeof fe!="string")if(typeof fe=="function")this.discoverTypes(fe,u,se,E||pe);else{const ue=Object.values(fe)[0];if(typeof ue=="string")continue;this.discoverTypes(ue,u,se,E||pe)}}}registerFilteredByParent(u,p,_){let O=`${this.schemas.get(u)??this.schemas.size}`;p&&(O+=`-${this.schemas.get(p)}`),O+=`-${_}`,this.parentFiltered[O]=!0}debug(){let u="";for(const p in this.parentFiltered){const _=p.split("-").map(Number),E=_.pop();u+=`
		`,u+=`${p}: ${_.reverse().map((O,j)=>{const me=this.types[O],se=me[Symbol.metadata];let fe=me.name;return j===0&&(fe+=`[${se[E].name}]`),`${fe}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${u}`}};bi.inheritedTypes=new Map,bi.cachedContexts=new Map;let ot=bi;function G(T){if(Array.isArray(T))return{array:G(T[0])};if(typeof T.type<"u")return T.type;if(De(T))return Object.keys(T).every(u=>typeof T[u]=="string")?"string":"number";if(typeof T=="object"&&T!==null){const u=Object.keys(T).find(p=>we[p]!==void 0);if(u)return T[u]=G(T[u]),T}return T}function De(T){if(typeof T=="function"&&T[Symbol.metadata])return!1;const u=Object.keys(T),p=u.filter(_=>/\d+/.test(_));return!!(p.length>0&&p.length===u.length/2&&T[T[p[0]]]==p[0]||u.length>0&&u.every(_=>typeof T[_]=="string"&&T[_]===_))}const Ce={addField(T,u,p,_,E){if(u>64)throw new Error(`Can't define field '${p}'.
Schema instances may only have up to 64 fields.`);T[u]=Object.assign(T[u]||{},{type:G(_),index:u,name:p}),Object.defineProperty(T,y,{value:T[y]||{},enumerable:!1,configurable:!0}),E?(T[y][p]=E,T[y][`_${p}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):T[y][p]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(T,v,{value:u,enumerable:!1,configurable:!0}),Object.defineProperty(T,p,{value:u,enumerable:!1,configurable:!0}),typeof T[u].type!="string"&&(T[g]===void 0&&Object.defineProperty(T,g,{value:[],enumerable:!1,configurable:!0}),T[g].push(u))},setTag(T,u,p){const _=T[u],E=T[_];E.tag=p,T[R]||(Object.defineProperty(T,R,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(T,C,{value:{},enumerable:!1,configurable:!0})),T[R].push(_),T[C][p]||(T[C][p]=[]),T[C][p].push(_)},setFields(T,u){const p=T.prototype.constructor;ot.register(p);const _=Object.getPrototypeOf(p),E=_&&_[Symbol.metadata],O=Ce.initialize(p);p[s]||(p[s]=qe[s]),p[o]||(p[o]=qe[o]),p[a]||(p[a]=qe[a]),p.prototype.toJSON||(p.prototype.toJSON=qe.prototype.toJSON);let j=O[v]??(E&&E[v])??-1;j++;for(const me in u){const se=G(u[me]),fe=typeof Object.keys(se)[0]=="string"&&Ke(Object.keys(se)[0]),pe=fe?Object.values(se)[0]:se;Ce.addField(O,j,me,se,ct(`_${me}`,j,pe,fe)),j++}return T},isDeprecated(T,u){return T[u].deprecated===!0},init(T){const u={};T[Symbol.metadata]=u,Object.defineProperty(u,v,{value:0,enumerable:!1,configurable:!0})},initialize(T){const u=Object.getPrototypeOf(T),p=u[Symbol.metadata];let _=T[Symbol.metadata]??Object.create(null);return u!==qe&&_===p&&(_=Object.create(null),p&&(Object.setPrototypeOf(_,p),Object.defineProperty(_,v,{value:p[v],enumerable:!1,configurable:!0,writable:!0}),p[R]!==void 0&&(Object.defineProperty(_,R,{value:[...p[R]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,C,{value:{...p[C]},enumerable:!1,configurable:!0,writable:!0})),p[g]!==void 0&&Object.defineProperty(_,g,{value:[...p[g]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,y,{value:{...p[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(T,Symbol.metadata,{value:_,writable:!1,configurable:!0}),_},isValidInstance(T){return T.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(T.constructor[Symbol.metadata],v)},getFields(T){const u=T[Symbol.metadata],p={};for(let _=0;_<=u[v];_++)p[u[_].name]=u[_].type;return p},hasViewTagAtIndex(T,u){return T?.[R]?.includes(u)}};function je(T){return{indexes:{},operations:[],queueRootNode:T}}function Ae(){return{next:void 0,tail:void 0}}function xe(T,u){const p=T.indexes[u];p===void 0?T.indexes[u]=T.operations.push(u)-1:T.operations[p]=u}function tt(T,u){let p=T.indexes[u];p===void 0&&(p=Object.values(T.indexes).at(-1),u=Object.entries(T.indexes).find(([_,E])=>E===p)?.[0]),T.operations[p]=void 0,delete T.indexes[u]}class lt{constructor(u){this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=u,this.metadata=u.constructor[Symbol.metadata],this.metadata?.[R]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(u){this.root=u;const p=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,p),p&&this.forEachChild((_,E)=>{_.root!==u?_.setRoot(u):u.add(_)})}setParent(u,p,_){if(this.addParent(u,_),!p)return;const E=p.add(this);p!==this.root&&(this.root=p,this.checkIsFiltered(u,_,E)),E&&this.forEachChild((O,j)=>{if(O.root===p){p.add(O),p.moveNextToParent(O);return}O.setParent(this.ref,p,j)})}forEachChild(u){if(this.ref[h]){if(typeof this.ref[h]!="string")for(const[p,_]of this.ref.entries())_&&u(_[d],this.indexes?.[p]??p)}else for(const p of this.metadata?.[g]??[]){const _=this.metadata[p],E=this.ref[_.name];E&&u(E[d],p)}}operation(u){this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-u),this.root?.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-u),this.root?.enqueueChangeTree(this,"changes"))}change(u,p=t.OPERATION.ADD){const _=this.isFiltered||this.metadata?.[u]?.tag!==void 0,E=_?this.filteredChanges:this.changes,O=this.indexedOperations[u];if(!O||O===t.OPERATION.DELETE){const j=O&&O===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:p;this.indexedOperations[u]=j}xe(E,u),_?(xe(this.allFilteredChanges,u),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(xe(this.allChanges,u),this.root?.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(u){const p=this.isFiltered?this.filteredChanges:this.changes,_={},E={};for(const O in this.indexedOperations)_[Number(O)+u]=this.indexedOperations[O],E[Number(O)+u]=p.indexes[O];this.indexedOperations=_,p.indexes=E,p.operations=p.operations.map(O=>O+u)}shiftAllChangeIndexes(u,p=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(u,p,this.allFilteredChanges),this._shiftAllChangeIndexes(u,p,this.allChanges)):this._shiftAllChangeIndexes(u,p,this.allChanges)}_shiftAllChangeIndexes(u,p=0,_){const E={};let O=0;for(const j in _.indexes)E[O++]=_.indexes[j];_.indexes=E;for(let j=0;j<_.operations.length;j++){const me=_.operations[j];me>p&&(_.operations[j]=me+u)}}indexedOperation(u,p,_=u){this.indexedOperations[u]=p,this.filteredChanges!==void 0?(xe(this.allFilteredChanges,_),xe(this.filteredChanges,u),this.root?.enqueueChangeTree(this,"filteredChanges")):(xe(this.allChanges,_),xe(this.changes,u),this.root?.enqueueChangeTree(this,"changes"))}getType(u){return this.ref[h]||this.metadata[u].type}getChange(u){return this.indexedOperations[u]}getValue(u,p=!1){return this.ref[l](u,p)}delete(u,p,_=u){if(u===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${u}'`)}catch(j){console.warn(j)}return}const E=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[u]=p??t.OPERATION.DELETE,xe(E,u),tt(this.allChanges,_);const O=this.getValue(u);return O&&O[d]&&this.root?.remove(O[d]),this.filteredChanges!==void 0?(tt(this.allFilteredChanges,_),this.root?.enqueueChangeTree(this,"filteredChanges")):this.root?.enqueueChangeTree(this,"changes"),O}endEncode(u){this.indexedOperations={},this[u]=je(),this.ref[m]?.(),this.isNew=!1}discard(u=!1){this.ref[m]?.(),this.indexedOperations={},this.changes=je(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=je(this.filteredChanges.queueRootNode)),u&&(this.allChanges=je(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=je(this.allFilteredChanges.queueRootNode)))}discardAll(){const u=Object.keys(this.indexedOperations);for(let p=0,_=u.length;p<_;p++){const E=this.getValue(Number(u[p]));E&&E[d]&&E[d].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(u,p,_){this.root.types.hasFilters&&(this._checkFilteredByParent(u,p),this.filteredChanges!==void 0&&(this.root?.enqueueChangeTree(this,"filteredChanges"),_&&this.root?.enqueueChangeTree(this,"allFilteredChanges"))),this.isFiltered||(this.root?.enqueueChangeTree(this,"changes"),_&&this.root?.enqueueChangeTree(this,"allChanges"))}_checkFilteredByParent(u,p){if(!u)return;const _=Ce.isValidInstance(this.ref)?this.ref.constructor:this.ref[h];let E,O=!Ce.isValidInstance(u);O?(E=u[d],u=E.parent,p=E.parentIndex):E=u[d];const j=u.constructor;let me=`${this.root.types.getTypeId(_)}`;j&&(me+=`-${this.root.types.schemas.get(j)}`),me+=`-${p}`;const se=Ce.hasViewTagAtIndex(j?.[Symbol.metadata],p);this.isFiltered=u[d].isFiltered||this.root.types.parentFiltered[me]||se,this.isFiltered&&(this.isVisibilitySharedWithParent=E.isFiltered&&typeof _!="string"&&!se&&O,this.filteredChanges||(this.filteredChanges=je(),this.allFilteredChanges=je()),this.changes.operations.length>0&&(this.changes.operations.forEach(fe=>xe(this.filteredChanges,fe)),this.allChanges.operations.forEach(fe=>xe(this.allFilteredChanges,fe)),this.changes=je(),this.allChanges=je()))}get parent(){return this.parentChain?.ref}get parentIndex(){return this.parentChain?.index}addParent(u,p){if(this.hasParent((_,E)=>_[d]===u[d])){this.parentChain.index=p;return}this.parentChain={ref:u,index:p,next:this.parentChain}}removeParent(u=this.parent){let p=this.parentChain,_=null;for(;p;){if(p.ref[d]===u[d])return _?_.next=p.next:this.parentChain=p.next,!0;_=p,p=p.next}return this.parentChain===void 0}findParent(u){let p=this.parentChain;for(;p;){if(u(p.ref,p.index))return p;p=p.next}}hasParent(u){return this.findParent(u)!==void 0}getAllParents(){const u=[];let p=this.parentChain;for(;p;)u.push({ref:p.ref,index:p.index}),p=p.next;return u}}function At(T,u,p,_,E,O){typeof p=="string"?Qe[p]?.(u,_,O):p[Symbol.metadata]!==void 0?(Qe.number(u,_[d].refId,O),(E&t.OPERATION.ADD)===t.OPERATION.ADD&&T.tryEncodeTypeId(u,p,_.constructor,O)):Qe.number(u,_[d].refId,O)}const Mt=function(T,u,p,_,E,O,j,me,se){if(u[O.offset++]=(_|E)&255,E===t.OPERATION.DELETE)return;const fe=p.ref,pe=se[_];At(T,u,se[_].type,fe[pe.name],E,O)},Fn=function(T,u,p,_,E,O){if(u[O.offset++]=E&255,Qe.number(u,_,O),E===t.OPERATION.DELETE)return;const j=p.ref;if((E&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof j.set=="function"){const fe=p.ref.$indexes.get(_);Qe.string(u,fe,O)}const me=j[h],se=j[l](_);At(T,u,me,se,E,O)},Wn=function(T,u,p,_,E,O,j,me){const se=p.ref,fe=me&&p.isFiltered&&typeof p.getType(_)!="string";let pe;if(fe){const Ve=se.tmpItems[_];if(!Ve)return;pe=Ve[d].refId,E===t.OPERATION.DELETE?E=t.OPERATION.DELETE_BY_REFID:E===t.OPERATION.ADD&&(E=t.OPERATION.ADD_BY_REFID)}else pe=_;if(u[O.offset++]=E&255,Qe.number(u,pe,O),E===t.OPERATION.DELETE||E===t.OPERATION.DELETE_BY_REFID)return;const ue=p.getType(_),Ye=p.getValue(_,j);At(T,u,ue,Ye,E,O)},Mo=-1;function ci(T,u,p,_,E,O,j,me){const se=T.root,fe=p[l](_);let pe;if((u&t.OPERATION.DELETE)===t.OPERATION.DELETE){const ue=se.refIds.get(fe);ue!==void 0&&se.removeRef(ue),u!==t.OPERATION.DELETE_AND_ADD&&p[f](_),pe=void 0}if(u!==t.OPERATION.DELETE)if(qe.is(E)){const ue=Oe.number(O,j);if(pe=se.refs.get(ue),(u&t.OPERATION.ADD)===t.OPERATION.ADD){const Ye=T.getInstanceType(O,j,E);pe||(pe=T.createInstanceOfType(Ye)),se.addRef(ue,pe,pe!==fe||u===t.OPERATION.DELETE_AND_ADD&&pe===fe)}}else if(typeof E=="string")pe=Oe[E](O,j);else{const ue=Ke(Object.keys(E)[0]),Ye=Oe.number(O,j),Ve=se.refs.has(Ye)?fe||se.refs.get(Ye):new ue.constructor;if(pe=Ve.clone(!0),pe[h]=Object.values(E)[0],fe){let Le=se.refIds.get(fe);if(Le!==void 0&&Ye!==Le){const Pe=fe.entries();let Ze;for(;(Ze=Pe.next())&&!Ze.done;){const[jt,Yt]=Ze.value;typeof Yt=="object"&&(Le=se.refIds.get(Yt),se.removeRef(Le)),me.push({ref:fe,refId:Le,op:t.OPERATION.DELETE,field:jt,value:void 0,previousValue:Yt})}}}se.addRef(Ye,pe,Ve!==fe||u===t.OPERATION.DELETE_AND_ADD&&Ve===fe)}return{value:pe,previousValue:fe}}const Cs=function(T,u,p,_,E){const O=u[p.offset++],j=_.constructor[Symbol.metadata],me=O>>6<<6,se=O%(me||255),fe=j[se];if(fe===void 0)return console.warn("@colyseus/schema: field not defined at",{index:se,ref:_.constructor.name,metadata:j}),Mo;const{value:pe,previousValue:ue}=ci(T,me,_,se,fe.type,u,p,E);pe!=null&&(_[fe.name]=pe),ue!==pe&&E.push({ref:_,refId:T.currentRefId,op:me,field:fe.name,value:pe,previousValue:ue})},zr=function(T,u,p,_,E){const O=u[p.offset++];if(O===t.OPERATION.CLEAR){T.removeChildRefs(_,E),_.clear();return}const j=Oe.number(u,p),me=_[h];let se;(O&t.OPERATION.ADD)===t.OPERATION.ADD?typeof _.set=="function"?(se=Oe.string(u,p),_.setIndex(j,se)):se=j:se=_.getIndex(j);const{value:fe,previousValue:pe}=ci(T,O,_,j,me,u,p,E);if(fe!=null){if(typeof _.set=="function")_.$items.set(se,fe);else if(typeof _.$setAt=="function")_.$setAt(j,fe,O);else if(typeof _.add=="function"){const ue=_.add(fe);typeof ue=="number"&&_.setIndex(ue,ue)}}pe!==fe&&E.push({ref:_,refId:T.currentRefId,op:O,field:"",dynamicIndex:se,value:fe,previousValue:pe})},La=function(T,u,p,_,E){let O=u[p.offset++],j;if(O===t.OPERATION.CLEAR){T.removeChildRefs(_,E),_.clear();return}else if(O===t.OPERATION.REVERSE){_.reverse();return}else if(O===t.OPERATION.DELETE_BY_REFID){const ue=Oe.number(u,p),Ye=T.root.refs.get(ue);j=_.findIndex(Ve=>Ve===Ye),_[f](j),E.push({ref:_,refId:T.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:j,value:void 0,previousValue:Ye});return}else if(O===t.OPERATION.ADD_BY_REFID){const ue=Oe.number(u,p),Ye=T.root.refs.get(ue);Ye&&(j=_.findIndex(Ve=>Ve===Ye)),(j===-1||j===void 0)&&(j=_.length)}else j=Oe.number(u,p);const me=_[h];let se=j;const{value:fe,previousValue:pe}=ci(T,O,_,j,me,u,p,E);fe!=null&&fe!==pe&&_.$setAt(j,fe,O),pe!==fe&&E.push({ref:_,refId:T.currentRefId,op:O,field:"",dynamicIndex:se,value:fe,previousValue:pe})};class Vr extends Error{}function Oa(T,u,p,_){let E,O=!1;switch(u){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":E="number",isNaN(T)&&console.log(`trying to encode "NaN" in ${p.constructor.name}#${_}`);break;case"bigint64":case"biguint64":E="bigint";break;case"string":E="string",O=!0;break;case"boolean":return;default:return}if(typeof T!==E&&(!O||O&&T!==null)){let j=`'${JSON.stringify(T)}'${T&&T.constructor&&` (${T.constructor.name})`||""}`;throw new Vr(`a '${E}' was expected, but ${j} was provided in ${p.constructor.name}#${_}`)}}function Hi(T,u,p,_){if(!(T instanceof u))throw new Vr(`a '${u.name}' was expected, but '${T&&T.constructor.name}' was provided in ${p.constructor.name}#${_}`)}var bo,To;const Ol=(T,u)=>{const p=T.toString(),_=u.toString();return p<_?-1:p>_?1:0},ui=class ui{static[(bo=o,To=a,c)](u,p,_){return!_||typeof u[h]=="string"||_.isChangeTreeVisible(u.tmpItems[p]?.[d])}static is(u){return Array.isArray(u)||u.array!==void 0}static from(u){return new ui(...Array.from(u))}constructor(...u){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,h,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const p=new Proxy(this,{get:(_,E)=>typeof E!="symbol"&&!isNaN(E)?this.items[E]:Reflect.get(_,E),set:(_,E,O)=>{if(typeof E!="symbol"&&!isNaN(E)){if(O==null)_.$deleteAt(E);else{if(O[d]){Hi(O,_[h],_,E);const j=_.items[E];_.isMovingItems?(j!==void 0?O[d].isNew?_[d].indexedOperation(Number(E),t.OPERATION.MOVE_AND_ADD):(_[d].getChange(Number(E))&t.OPERATION.DELETE)===t.OPERATION.DELETE?_[d].indexedOperation(Number(E),t.OPERATION.DELETE_AND_MOVE):_[d].indexedOperation(Number(E),t.OPERATION.MOVE):O[d].isNew&&_[d].indexedOperation(Number(E),t.OPERATION.ADD),O[d].setParent(this,_[d].root,E)):_.$changeAt(Number(E),O),j!==void 0&&j[d].root?.remove(j[d])}else _.$changeAt(Number(E),O);_.items[E]=O,_.tmpItems[E]=O}return!0}else return Reflect.set(_,E,O)},deleteProperty:(_,E)=>(typeof E=="number"?_.$deleteAt(E):delete _[E],!0),has:(_,E)=>typeof E!="symbol"&&!isNaN(Number(E))?Reflect.has(this.items,E):Reflect.has(_,E)});return Object.defineProperty(this,d,{value:new lt(p),enumerable:!1,writable:!0}),u.length>0&&this.push(...u),p}set length(u){u===0?this.clear():u<this.items.length?this.splice(u,this.length-u):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...u){let p=this.tmpItems.length;const _=this[d];for(let E=0,O=u.length;E<O;E++,p++){const j=u[E];if(j==null)return;typeof j=="object"&&this[h]&&Hi(j,this[h],this,E),_.indexedOperation(p,t.OPERATION.ADD,this.items.length),this.items.push(j),this.tmpItems.push(j),j[d]?.setParent(this,_.root,p)}return p}pop(){let u=-1;for(let p=this.tmpItems.length-1;p>=0;p--)if(this.deletedIndexes[p]!==!0){u=p;break}if(!(u<0))return this[d].delete(u,void 0,this.items.length-1),this.deletedIndexes[u]=!0,this.items.pop()}at(u){return u<0&&(u+=this.length),this.items[u]}$changeAt(u,p){if(p==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[u]===p)return;const _=this.items[u]!==void 0?typeof p=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,E=this[d];E.change(u,_),p[d]?.setParent(this,E.root,u)}$deleteAt(u,p){this[d].delete(u,p)}$setAt(u,p,_){u===0&&_===t.OPERATION.ADD&&this.items[u]!==void 0?this.items.unshift(p):_===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(u,1),this.items[u]=p):this.items[u]=p}clear(){if(this.items.length===0)return;const u=this[d];u.forEachChild((p,_)=>{u.root?.remove(p)}),u.discard(!0),u.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...u){return new ui(...this.items.concat(...u))}join(u){return this.items.join(u)}reverse(){return this[d].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const u=this[d],p=this.tmpItems.findIndex(E=>E===this.items[0]),_=this.items.findIndex(E=>E===this.items[0]);return u.delete(p,t.OPERATION.DELETE,_),u.shiftAllChangeIndexes(-1,_),this.deletedIndexes[p]=!0,this.items.shift()}slice(u,p){const _=new ui;return _.push(...this.items.slice(u,p)),_}sort(u=Ol){this.isMovingItems=!0;const p=this[d];return this.items.sort(u).forEach((E,O)=>p.change(O,t.OPERATION.REPLACE)),this.tmpItems.sort(u),this.isMovingItems=!1,this}splice(u,p,..._){const E=this[d],O=this.items.length,j=this.tmpItems.length,me=_.length,se=[];for(let fe=0;fe<j;fe++)this.deletedIndexes[fe]!==!0&&se.push(fe);if(O>u){p===void 0&&(p=O-u);for(let fe=u;fe<u+p;fe++){const pe=se[fe];E.delete(pe,t.OPERATION.DELETE),this.deletedIndexes[pe]=!0}}else p=0;if(me>0){if(me>p)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let fe=0;fe<me;fe++){const pe=(se[u]??O)+fe;E.indexedOperation(pe,this.deletedIndexes[pe]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),_[fe][d]?.setParent(this,E.root,pe)}}return p>me&&E.shiftAllChangeIndexes(-(p-me),se[u+me]),E.filteredChanges!==void 0?E.root?.enqueueChangeTree(E,"filteredChanges"):E.root?.enqueueChangeTree(E,"changes"),this.items.splice(u,p,..._)}unshift(...u){const p=this[d];return p.shiftChangeIndexes(u.length),p.isFiltered?xe(p.filteredChanges,this.items.length):xe(p.allChanges,this.items.length),u.forEach((_,E)=>{p.change(E,t.OPERATION.ADD)}),this.tmpItems.unshift(...u),this.items.unshift(...u)}indexOf(u,p){return this.items.indexOf(u,p)}lastIndexOf(u,p=this.length-1){return this.items.lastIndexOf(u,p)}every(u,p){return this.items.every(u,p)}some(u,p){return this.items.some(u,p)}forEach(u,p){return this.items.forEach(u,p)}map(u,p){return this.items.map(u,p)}filter(u,p){return this.items.filter(u,p)}reduce(u,p){return this.items.reduce(u,p)}reduceRight(u,p){return this.items.reduceRight(u,p)}find(u,p){return this.items.find(u,p)}findIndex(u,p){return this.items.findIndex(u,p)}fill(u,p,_){throw new Error("ArraySchema#fill() not implemented")}copyWithin(u,p,_){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return ui}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(u,p){return this.items.includes(u,p)}flatMap(u,p){throw new Error("ArraySchema#flatMap() is not supported.")}flat(u){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...u){return this.items.findLastIndex.apply(this.items,arguments)}with(u,p){const _=this.items.slice();return u<0&&(u+=this.length),_[u]=p,new ui(..._)}toReversed(){return this.items.slice().reverse()}toSorted(u){return this.items.slice().sort(u)}toSpliced(u,p,..._){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(u=>{let p=this.items.length;for(;p!=0;){let _=Math.floor(Math.random()*p);p--,[this[p],this[_]]=[this[_],this[p]]}})}move(u){return this.isMovingItems=!0,u(this),this.isMovingItems=!1,this}[l](u,p=!1){return p?this.items[u]:this.deletedIndexes[u]?this.items[u]:this.tmpItems[u]||this.items[u]}[f](u){this.items[u]=void 0,this.tmpItems[u]=void 0}[m](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[x](){this.items=this.items.filter(u=>u!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(u=>typeof u.toJSON=="function"?u.toJSON():u)}clone(u){let p;return u?(p=new ui,p.push(...this.items)):p=new ui(...this.map(_=>_[d]?_.clone():_)),p}};ui[bo]=Wn,ui[To]=La;let $n=ui;Xe("array",{constructor:$n});var Na,Ua;const _r=class _r{static[(Na=o,Ua=a,c)](u,p,_){return!_||typeof u[h]=="string"||_.isChangeTreeVisible((u[l](p)??u.deletedItems[p])[d])}static is(u){return u.map!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const p=new lt(this);if(p.indexes={},Object.defineProperty(this,d,{value:p,enumerable:!1,writable:!0}),u)if(u instanceof Map||u instanceof _r)u.forEach((_,E)=>this.set(E,_));else for(const _ in u)this.set(_,u[_]);Object.defineProperty(this,h,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return _r}set(u,p){if(p==null)throw new Error(`MapSchema#set('${u}', ${p}): trying to set ${p} value on '${u}'.`);typeof p=="object"&&this[h]&&Hi(p,this[h],this,u),u=u.toString();const _=this[d],E=p[d]!==void 0;let O,j;if(typeof _.indexes[u]<"u"){O=_.indexes[u],j=t.OPERATION.REPLACE;const me=this.$items.get(u);if(me===p)return;E&&(j=t.OPERATION.DELETE_AND_ADD,me!==void 0&&me[d].root?.remove(me[d])),this.deletedItems[O]&&delete this.deletedItems[O]}else O=_.indexes[v]??0,j=t.OPERATION.ADD,this.$indexes.set(O,u),_.indexes[u]=O,_.indexes[v]=O+1;return this.$items.set(u,p),_.change(O,j),E&&p[d].setParent(this,_.root,O),this}get(u){return this.$items.get(u)}delete(u){if(!this.$items.has(u))return!1;const p=this[d].indexes[u];return this.deletedItems[p]=this[d].delete(p),this.$items.delete(u)}clear(){const u=this[d];u.discard(!0),u.indexes={},u.forEachChild((p,_)=>{u.root?.remove(p)}),this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){return this.$items.has(u)}forEach(u){this.$items.forEach(u)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(u,p){this.$indexes.set(u,p)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[f](u){const p=this.$indexes.get(u);this.$items.delete(p),this.$indexes.delete(u)}[m](){const u=this[d];for(const p in this.deletedItems){const _=parseInt(p),E=this.$indexes.get(_);delete u.indexes[E],this.$indexes.delete(_)}this.deletedItems={}}toJSON(){const u={};return this.forEach((p,_)=>{u[_]=typeof p.toJSON=="function"?p.toJSON():p}),u}clone(u){let p;return u?p=Object.assign(new _r,this):(p=new _r,this.forEach((_,E)=>{_[d]?p.set(E,_.clone()):p.set(E,_)})),p}};_r[Na]=Fn,_r[Ua]=zr;let li=_r;Xe("map",{constructor:li});var Fa,A;const Rs=class Rs{static[(Fa=o,A=a,c)](u,p,_){return!_||typeof u[h]=="string"||_.isChangeTreeVisible((u[l](p)??u.deletedItems[p])[d])}static is(u){return u.collection!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[d]=new lt(this),this[d].indexes={},u&&u.forEach(p=>this.add(p)),Object.defineProperty(this,h,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(u){const p=this.$refId++;return u[d]!==void 0&&u[d].setParent(this,this[d].root,p),this[d].indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,u),this[d].change(p),p}at(u){const p=Array.from(this.$items.keys())[u];return this.$items.get(p)}entries(){return this.$items.entries()}delete(u){const p=this.$items.entries();let _,E;for(;(E=p.next())&&!E.done;)if(u===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[d].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const u=this[d];u.discard(!0),u.indexes={},u.forEachChild((p,_)=>{u.root?.remove(p)}),this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){return Array.from(this.$items.values()).some(p=>p===u)}forEach(u){this.$items.forEach((p,_,E)=>u(p,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(u,p){this.$indexes.set(u,p)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[f](u){const p=this.$indexes.get(u);this.$items.delete(p),this.$indexes.delete(u)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const u=[];return this.forEach((p,_)=>{u.push(typeof p.toJSON=="function"?p.toJSON():p)}),u}clone(u){let p;return u?p=Object.assign(new Rs,this):(p=new Rs,this.forEach(_=>{_[d]?p.add(_.clone()):p.add(_)})),p}};Rs[Fa]=Fn,Rs[A]=zr;let q=Rs;Xe("collection",{constructor:q});var ce,le;const Ps=class Ps{static[(ce=o,le=a,c)](u,p,_){return!_||typeof u[h]=="string"||_.visible.has((u[l](p)??u.deletedItems[p])[d])}static is(u){return u.set!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[d]=new lt(this),this[d].indexes={},u&&u.forEach(p=>this.add(p)),Object.defineProperty(this,h,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(u){if(this.has(u))return!1;const p=this.$refId++;u[d]!==void 0&&u[d].setParent(this,this[d].root,p);const _=this[d].indexes[p]?.op??t.OPERATION.ADD;return this[d].indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,u),this[d].change(p,_),p}entries(){return this.$items.entries()}delete(u){const p=this.$items.entries();let _,E;for(;(E=p.next())&&!E.done;)if(u===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[d].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const u=this[d];u.discard(!0),u.indexes={},this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){const p=this.$items.values();let _=!1,E;for(;(E=p.next())&&!E.done;)if(u===E.value){_=!0;break}return _}forEach(u){this.$items.forEach((p,_,E)=>u(p,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(u,p){this.$indexes.set(u,p)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[f](u){const p=this.$indexes.get(u);this.$items.delete(p),this.$indexes.delete(u)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const u=[];return this.forEach((p,_)=>{u.push(typeof p.toJSON=="function"?p.toJSON():p)}),u}clone(u){let p;return u?p=Object.assign(new Ps,this):(p=new Ps,this.forEach(_=>{_[d]?p.add(_.clone()):p.add(_)})),p}};Ps[ce]=Fn,Ps[le]=zr;let Y=Ps;Xe("set",{constructor:Y});const Te=-1;function $e(T){return ot.register(T),T}function et(T=Te){return function(u,p){const _=u.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null));Ce.setTag(j,p,T)}}function ke(T,u){return function(p,_){const E=p.constructor;if(!T)throw new Error(`${E.name}: @type() reference provided for "${_}" is undefined. Make sure you don't have any circular dependencies.`);T=G(T),ot.register(E);const j=Object.getPrototypeOf(E)[Symbol.metadata],me=Ce.initialize(E);let se=me[_];if(me[se]!==void 0){if(me[se].deprecated)return;if(me[se].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${_}' definition on '${E.name}'.
Check @type() annotation`)}catch(fe){const pe=fe.stack.split(`
`)[4].trim();throw new Error(`${fe.message} ${pe}`)}}else se=me[v]??(j&&j[v])??-1,se++;if(u&&u.manual)Ce.addField(me,se,_,T,{enumerable:!0,configurable:!0,writable:!0});else{const fe=typeof Object.keys(T)[0]=="string"&&Ke(Object.keys(T)[0]),pe=fe?Object.values(T)[0]:T;Ce.addField(me,se,_,T,ct(`_${_}`,se,pe,fe))}}}function ct(T,u,p,_){return{get:function(){return this[T]},set:function(E){const O=this[T]??void 0;if(E!==O){if(E!=null){_?(_.constructor===$n&&!(E instanceof $n)&&(E=new $n(...E)),_.constructor===li&&!(E instanceof li)&&(E=new li(E)),E[h]=p):typeof p!="string"?Hi(E,p,this,T.substring(1)):Oa(E,p,this,T.substring(1));const j=this[d];O!==void 0&&O[d]?(j.root?.remove(O[d]),this.constructor[s](j,u,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](j,u,t.OPERATION.ADD),E[d]?.setParent(this,j.root,u)}else O!==void 0&&this[d].delete(u);this[T]=E}},enumerable:!0,configurable:!0}}function ut(T=!0){return function(u,p){const _=u.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null)),me=j[p];j[me].deprecated=!0,T&&(j[y]??={},j[y][p]={get:function(){throw new Error(`${p} is deprecated.`)},set:function(se){},enumerable:!1,configurable:!0}),Object.defineProperty(j,me,{value:j[me],enumerable:!1,configurable:!0})}}function at(T,u,p){for(let _ in u)ke(u[_],p)(T.prototype,_);return T}function _t(T,u,p=qe){const _={},E={},O={},j={};for(let pe in T){const ue=T[pe];typeof ue=="object"?(ue.view!==void 0&&(j[pe]=typeof ue.view=="boolean"?Te:ue.view),_[pe]=G(ue),Object.prototype.hasOwnProperty.call(ue,"default")?O[pe]=ue.default:Array.isArray(ue)||ue.array!==void 0?O[pe]=new $n:ue.map!==void 0?O[pe]=new li:ue.collection!==void 0?O[pe]=new q:ue.set!==void 0?O[pe]=new Y:ue.type!==void 0&&qe.is(ue.type)&&(!ue.type.prototype.initialize||ue.type.prototype.initialize.length===0)&&(O[pe]=new ue.type)):typeof ue=="function"?qe.is(ue)?((!ue.prototype.initialize||ue.prototype.initialize.length===0)&&(O[pe]=new ue),_[pe]=G(ue)):E[pe]=ue:_[pe]=G(ue)}const me=()=>{const pe={};for(const ue in O){const Ye=O[ue];Ye&&typeof Ye.clone=="function"?pe[ue]=Ye.clone():pe[ue]=Ye}return pe},se=pe=>{const ue=Object.keys(_),Ye={};for(const Ve in pe)ue.includes(Ve)||(Ye[Ve]=pe[Ve]);return Ye},fe=Ce.setFields(class extends p{constructor(...pe){E.initialize&&typeof E.initialize=="function"?(super(Object.assign({},me(),se(pe[0]||{}))),new.target===fe&&E.initialize.apply(this,pe)):super(Object.assign({},me(),pe[0]||{}))}},_);fe._getDefaultValues=me,Object.assign(fe.prototype,E);for(let pe in j)et(j[pe])(fe.prototype,pe);return u&&Object.defineProperty(fe,"name",{value:u}),fe.extends=(pe,ue)=>_t(pe,ue,fe),fe}function bt(T){return new Array(T).fill(0).map((u,p)=>p===T-1?"└─ ":"   ").join("")}function Wt(T){const u=T[d].root,p={ops:{},refs:[]};let _=u.changes.next;for(;_;){const E=_.changeTree;if(E===void 0){_=_.next;continue}const O=E.indexedOperations;p.refs.push(`refId#${E.refId}`);for(const j in O){const me=O[j],se=t.OPERATION[me];p.ops[se]||(p.ops[se]=0),p.ops[t.OPERATION[me]]++}_=_.next}return p}var Dt,Ct;const Is=class Is{static initialize(u){Object.defineProperty(u,d,{value:new lt(u),enumerable:!1,writable:!0}),Object.defineProperties(u,u.constructor[Symbol.metadata]?.[y]||{})}static is(u){return typeof u[Symbol.metadata]=="object"}static[(Dt=o,Ct=a,s)](u,p,_=t.OPERATION.ADD){u.change(p,_)}static[c](u,p,_){const O=u.constructor[Symbol.metadata][p]?.tag;if(_===void 0)return O===void 0;if(O===void 0)return!0;if(O===Te)return _.isChangeTreeVisible(u[d]);{const j=_.tags?.get(u[d]);return j&&j.has(O)}}constructor(u){Is.initialize(this),u&&Object.assign(this,u)}assign(u){return Object.assign(this,u),this}setDirty(u,p){const _=this.constructor[Symbol.metadata];this[d].change(_[_[u]].index,p)}clone(){const u=Object.create(this.constructor.prototype);Is.initialize(u);const p=this.constructor[Symbol.metadata];for(const _ in p){const E=p[_].name;typeof this[E]=="object"&&typeof this[E]?.clone=="function"?u[E]=this[E].clone():u[E]=this[E]}return u}toJSON(){const u={},p=this.constructor[Symbol.metadata];for(const _ in p){const E=p[_],O=E.name;!E.deprecated&&this[O]!==null&&typeof this[O]<"u"&&(u[O]=typeof this[O].toJSON=="function"?this[O].toJSON():this[O])}return u}discardAllChanges(){this[d].discardAll()}[l](u){const p=this.constructor[Symbol.metadata];return this[p[u].name]}[f](u){const p=this.constructor[Symbol.metadata];this[p[u].name]=void 0}static debugRefIds(u,p=!1,_=0,E,O=""){const j=p?` - ${JSON.stringify(u.toJSON())}`:"",me=u[d],se=E?E.root.refIds.get(u):me.refId,fe=E?E.root:me.root,pe=fe?.refCount?.[se]>1?` [×${fe.refCount[se]}]`:"";let ue=`${bt(_)}${O}${u.constructor.name} (refId: ${se})${pe}${j}
`;return me.forEachChild((Ye,Ve)=>{let Le=Ve;typeof Ve=="number"&&u.$indexes&&(Le=u.$indexes.get(Ve)??Ve);const Pe=u.forEach!==void 0&&Le!==void 0?`["${Le}"]: `:"";ue+=this.debugRefIds(Ye.ref,p,_+1,E,Pe)}),ue}static debugRefIdEncodingOrder(u,p="allChanges"){let _=[],E=u[d].root[p].next;for(;E;)E.changeTree&&_.push(E.changeTree.refId),E=E.next;return _}static debugRefIdsFromDecoder(u){return this.debugRefIds(u.state,!1,0,u)}static debugChanges(u,p=!1){const _=u[d],E=p?_.allChanges:_.changes,O=p?"allChanges":"changes";let j=`${u.constructor.name} (${_.refId}) -> .${O}:
`;function me(se){se.operations.filter(fe=>fe).forEach(fe=>{const pe=_.indexedOperations[fe];j+=`- [${fe}]: ${t.OPERATION[pe]} (${JSON.stringify(_.getValue(Number(fe),p))})
`})}return me(E),!p&&_.filteredChanges&&_.filteredChanges.operations.filter(se=>se).length>0&&(j+=`${u.constructor.name} (${_.refId}) -> .filteredChanges:
`,me(_.filteredChanges)),p&&_.allFilteredChanges&&_.allFilteredChanges.operations.filter(se=>se).length>0&&(j+=`${u.constructor.name} (${_.refId}) -> .allFilteredChanges:
`,me(_.allFilteredChanges)),j}static debugChangesDeep(u,p="changes"){let _="";const E=u[d],O=E.root,j=new Map,me=[];let se=0;for(const[pe,ue]of Object.entries(O[p])){const Ye=O.changeTrees[pe];if(!Ye)continue;let Ve=!1,Le=[],Pe=Ye.parent?.[d];if(Ye===E)Ve=!0;else for(;Pe!==void 0;){if(Le.push(Pe),Pe.ref===u){Ve=!0;break}Pe=Pe.parent?.[d]}Ve&&(me.push(Ye.refId),se+=Object.keys(ue).length,j.set(Ye,Le.reverse()))}_+=`---
`,_+=`root refId: ${E.refId}
`,_+=`Total instances: ${me.length} (refIds: ${me.join(", ")})
`,_+=`Total changes: ${se}
`,_+=`---
`;const fe=new WeakSet;for(const[pe,ue]of j.entries()){ue.forEach((Ze,jt)=>{fe.has(Ze)||(_+=`${bt(jt)}${Ze.ref.constructor.name} (refId: ${Ze.refId})
`,fe.add(Ze))});const Ye=pe.indexedOperations,Ve=ue.length,Le=bt(Ve),Pe=Ve>0?`(${pe.parentIndex}) `:"";_+=`${Le}${Pe}${pe.ref.constructor.name} (refId: ${pe.refId}) - changes: ${Object.keys(Ye).length}
`;for(const Ze in Ye){const jt=Ye[Ze];_+=`${bt(Ve+1)}${t.OPERATION[jt]}: ${Ze}
`}}return`${_}`}};Is[Dt]=Mt,Is[Ct]=Cs;let qe=Is;function Tt(T,u,p,_){var E=arguments.length,O=E<3?u:_,j;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")O=Reflect.decorate(T,u,p,_);else for(var me=T.length-1;me>=0;me--)(j=T[me])&&(O=(E<3?j(O):E>3?j(u,p,O):j(u,p))||O);return E>3&&O&&Object.defineProperty(u,p,O),O}typeof SuppressedError=="function"&&SuppressedError;class Et{constructor(u){this.types=u,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Ae(),this.allFilteredChanges=Ae(),this.changes=Ae(),this.filteredChanges=Ae()}getNextUniqueId(){return this.nextUniqueId++}add(u){u.refId===void 0&&(u.refId=this.getNextUniqueId());const p=this.changeTrees[u.refId]===void 0;p&&(this.changeTrees[u.refId]=u);const _=this.refCount[u.refId];if(_===0){const E=u.allChanges.operations;let O=E.length;for(;O--;)u.indexedOperations[E[O]]=t.OPERATION.ADD,xe(u.changes,O)}return this.refCount[u.refId]=(_||0)+1,p}remove(u){const p=this.refCount[u.refId]-1;return p<=0?(u.root=void 0,delete this.changeTrees[u.refId],this.removeChangeFromChangeSet("allChanges",u),this.removeChangeFromChangeSet("changes",u),u.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",u),this.removeChangeFromChangeSet("filteredChanges",u)),this.refCount[u.refId]=0,u.forEachChild((_,E)=>{_.removeParent(u.ref)&&(_.parentChain===void 0||_.parentChain&&this.refCount[_.refId]>0?this.remove(_):_.parentChain&&this.moveNextToParent(_))})):(this.refCount[u.refId]=p,this.recursivelyMoveNextToParent(u)),p}recursivelyMoveNextToParent(u){this.moveNextToParent(u),u.forEachChild((p,_)=>this.recursivelyMoveNextToParent(p))}moveNextToParent(u){u.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",u),this.moveNextToParentInChangeTreeList("allFilteredChanges",u)):(this.moveNextToParentInChangeTreeList("changes",u),this.moveNextToParentInChangeTreeList("allChanges",u))}moveNextToParentInChangeTreeList(u,p){const _=this[u],E=p[u].queueRootNode;if(!E)return;const O=p.parent;if(!O||!O[d])return;const j=O[d][u]?.queueRootNode;if(!j||j===E)return;const me=j.position;E.position>me||(E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,E.prev=j,E.next=j.next,j.next?j.next.prev=E:_.tail=E,j.next=E,this.updatePositionsAfterMove(_,E,me+1))}enqueueChangeTree(u,p,_=u[p].queueRootNode){_||(u[p].queueRootNode=this.addToChangeTreeList(this[p],u))}addToChangeTreeList(u,p){const _={changeTree:p,next:void 0,prev:void 0,position:u.tail?u.tail.position+1:0};return u.next?(_.prev=u.tail,u.tail.next=_,u.tail=_):(u.next=_,u.tail=_),_}updatePositionsAfterRemoval(u,p){let _=u.next,E=0;for(;_;)E>=p&&(_.position=E),_=_.next,E++}updatePositionsAfterMove(u,p,_){let E=u.next,O=0;for(;E;)E.position=O,E=E.next,O++}removeChangeFromChangeSet(u,p){const _=this[u],E=p[u].queueRootNode;if(E&&E.changeTree===p){const O=E.position;return E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,this.updatePositionsAfterRemoval(_,O),p[u].queueRootNode=void 0,!0}return!1}}const Ba=class Ba{constructor(u){this.sharedBuffer=Buffer.allocUnsafe(Ba.BUFFER_SIZE),this.context=ot.cache(u.constructor),this.root=new Et(this.context),this.setState(u)}setState(u){this.state=u,this.state[d].setRoot(this.root)}encode(u={offset:0},p,_=this.sharedBuffer,E="changes",O=E==="allChanges",j=u.offset){const me=p!==void 0,se=this.state[d];let fe=this.root[E];for(;fe=fe.next;){const pe=fe.changeTree;if(me){if(!p.isChangeTreeVisible(pe)){p.invisible.add(pe);continue}p.invisible.delete(pe)}const ue=pe[E],Ye=pe.ref,Ve=ue.operations.length;if(Ve===0)continue;const Le=Ye.constructor,Pe=Le[o],Ze=Le[c],jt=Le[Symbol.metadata];(me||u.offset>j||pe!==se)&&(_[u.offset++]=255,Qe.number(_,pe.refId,u));for(let Yt=0;Yt<Ve;Yt++){const qn=ue.operations[Yt];if(qn<0){_[u.offset++]=Math.abs(qn)&255;continue}const ti=O?t.OPERATION.ADD:pe.indexedOperations[qn];qn===void 0||ti===void 0||Ze&&!Ze(Ye,qn,p)||Pe(this,_,pe,qn,ti,u,O,me,jt)}}if(u.offset>_.byteLength){const pe=Math.ceil(u.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),_=Buffer.alloc(pe,_),_===this.sharedBuffer&&(this.sharedBuffer=_),this.encode({offset:j},p,_,E,O)}else return _.subarray(0,u.offset)}encodeAll(u={offset:0},p=this.sharedBuffer){return this.encode(u,void 0,p,"allChanges",!0)}encodeAllView(u,p,_,E=this.sharedBuffer){const O=_.offset;return this.encode(_,u,E,"allFilteredChanges",!0,O),Buffer.concat([E.subarray(0,p),E.subarray(O,_.offset)])}encodeView(u,p,_,E=this.sharedBuffer){const O=_.offset;for(const[j,me]of u.changes){const se=this.root.changeTrees[j];if(se===void 0){u.changes.delete(j);continue}const fe=Object.keys(me);if(fe.length===0)continue;const ue=se.ref.constructor,Ye=ue[o],Ve=ue[Symbol.metadata];E[_.offset++]=255,Qe.number(E,se.refId,_);for(let Le=0,Pe=fe.length;Le<Pe;Le++){const Ze=Number(fe[Le]),Yt=se.ref[l](Ze)!==void 0&&me[Ze]||t.OPERATION.DELETE;Ye(this,E,se,Ze,Yt,_,!1,!0,Ve)}}return u.changes.clear(),this.encode(_,u,E,"filteredChanges",!1,O),Buffer.concat([E.subarray(0,p),E.subarray(O,_.offset)])}discardChanges(){let u=this.root.changes.next;for(;u;)u.changeTree.endEncode("changes"),u=u.next;for(this.root.changes=Ae(),u=this.root.filteredChanges.next;u;)u.changeTree.endEncode("filteredChanges"),u=u.next;this.root.filteredChanges=Ae()}tryEncodeTypeId(u,p,_,E){const O=this.context.getTypeId(p),j=this.context.getTypeId(_);if(j===void 0){console.warn(`@colyseus/schema WARNING: Class "${_.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}O!==j&&(u[E.offset++]=213,Qe.number(u,j,E))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};Ba.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let hn=Ba;function Gi(T,u){if(u===-1||u>=T.length)return!1;const p=T.length-1;for(let _=u;_<p;_++)T[_]=T[_+1];return T.length=p,!0}class Mn extends Error{constructor(u){super(u),this.name="DecodingWarning"}}class Hr{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(u,p,_=!0){this.refs.set(u,p),this.refIds.set(p,u),_&&(this.refCount[u]=(this.refCount[u]||0)+1),this.deletedRefs.has(u)&&this.deletedRefs.delete(u)}removeRef(u){const p=this.refCount[u];if(p===void 0){try{throw new Mn("trying to remove refId that doesn't exist: "+u)}catch(_){console.warn(_)}return}if(p===0){try{const _=this.refs.get(u);throw new Mn(`trying to remove refId '${u}' with 0 refCount (${_.constructor.name}: ${JSON.stringify(_)})`)}catch(_){console.warn(_)}return}(this.refCount[u]=p-1)<=0&&this.deletedRefs.add(u)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(u=>{if(this.refCount[u]>0)return;const p=this.refs.get(u);if(p.constructor[Symbol.metadata]!==void 0){const _=p.constructor[Symbol.metadata];for(const E in _){const O=_[E].name,j=typeof p[O]=="object"&&this.refIds.get(p[O]);j&&!this.deletedRefs.has(j)&&this.removeRef(j)}}else typeof p[h]=="function"&&Array.from(p.values()).forEach(_=>{const E=this.refIds.get(_);this.deletedRefs.has(E)||this.removeRef(E)});this.refs.delete(u),delete this.refCount[u],delete this.callbacks[u]}),this.deletedRefs.clear()}addCallback(u,p,_){if(u===void 0){const E=typeof p=="number"?t.OPERATION[p]:p;throw new Error(`Can't addCallback on '${E}' (refId is undefined)`)}return this.callbacks[u]||(this.callbacks[u]={}),this.callbacks[u][p]||(this.callbacks[u][p]=[]),this.callbacks[u][p].push(_),()=>this.removeCallback(u,p,_)}removeCallback(u,p,_){const E=this.callbacks?.[u]?.[p]?.indexOf(_);E!==void 0&&E!==-1&&Gi(this.callbacks[u][p],E)}}class Nt{constructor(u,p){this.currentRefId=0,this.setState(u),this.context=p||new ot(u.constructor)}setState(u){this.state=u,this.root=new Hr,this.root.addRef(0,u)}decode(u,p={offset:0},_=this.state){const E=[],O=this.root,j=u.byteLength;let me=_.constructor[a];for(this.currentRefId=0;p.offset<j;){if(u[p.offset]==255){p.offset++,_[x]?.();const fe=Oe.number(u,p),pe=O.refs.get(fe);pe?(_=pe,me=_.constructor[a],this.currentRefId=fe):(console.error(`"refId" not found: ${fe}`,{previousRef:_,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(u,p,j));continue}if(me(this,u,p,_,E)===Mo){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(u,p,j);continue}}return _[x]?.(),this.triggerChanges?.(E),O.garbageCollectDeletedRefs(),E}skipCurrentStructure(u,p,_){const E={offset:p.offset};for(;p.offset<_&&!(u[p.offset]===255&&(E.offset=p.offset+1,this.root.refs.has(Oe.number(u,E))));)p.offset++}getInstanceType(u,p,_){let E;if(u[p.offset]===213){p.offset++;const O=Oe.number(u,p);E=this.context.get(O)}return E||_}createInstanceOfType(u){return new u}removeChildRefs(u,p){const _=typeof u[h]!="string",E=this.root.refIds.get(u);u.forEach((O,j)=>{p.push({ref:u,refId:E,op:t.OPERATION.DELETE,field:j,value:void 0,previousValue:O}),_&&this.root.removeRef(this.root.refIds.get(O))})}}class cn extends qe{}Tt([ke("string")],cn.prototype,"name",void 0),Tt([ke("string")],cn.prototype,"type",void 0),Tt([ke("number")],cn.prototype,"referencedType",void 0);class ln extends qe{constructor(){super(...arguments),this.fields=new $n}}Tt([ke("number")],ln.prototype,"id",void 0),Tt([ke("number")],ln.prototype,"extendsId",void 0),Tt([ke([cn])],ln.prototype,"fields",void 0);class Xt extends qe{constructor(){super(...arguments),this.types=new $n}static encode(u,p={offset:0}){const _=u.context,E=new Xt,O=new hn(E),j=_.schemas.get(u.state.constructor);j>0&&(E.rootType=j);const me=new Set,se={},fe=ue=>{if(ue.extendsId===void 0||me.has(ue.extendsId)){me.add(ue.id),E.types.push(ue);const Ye=se[ue.id];Ye!==void 0&&(delete se[ue.id],Ye.forEach(Ve=>fe(Ve)))}else se[ue.extendsId]===void 0&&(se[ue.extendsId]=[]),se[ue.extendsId].push(ue)};_.schemas.forEach((ue,Ye)=>{const Ve=new ln;Ve.id=Number(ue);const Le=Object.getPrototypeOf(Ye);Le!==qe&&(Ve.extendsId=_.schemas.get(Le));const Pe=Ye[Symbol.metadata];if(Pe!==Le[Symbol.metadata])for(const Ze in Pe){const jt=Number(Ze),Yt=Pe[jt].name;if(!Object.prototype.hasOwnProperty.call(Pe,Yt))continue;const qn=new cn;qn.name=Yt;let ti;const vr=Pe[jt];if(typeof vr.type=="string")ti=vr.type;else{let ka;qe.is(vr.type)?(ti="ref",ka=vr.type):(ti=Object.keys(vr.type)[0],typeof vr.type[ti]=="string"?ti+=":"+vr.type[ti]:ka=vr.type[ti]),qn.referencedType=ka?_.getTypeId(ka):-1}qn.type=ti,Ve.fields.push(qn)}fe(Ve)});for(const ue in se)se[ue].forEach(Ye=>E.types.push(Ye));return O.encodeAll(p).slice(0,p.offset)}static decode(u,p){const _=new Xt;new Nt(_).decode(u,p);const O=new ot;_.types.forEach(se=>{const fe=O.get(se.extendsId)??qe,pe=class extends fe{};ot.register(pe),O.add(pe,se.id)},{});const j=(se,fe,pe)=>{fe.fields.forEach((ue,Ye)=>{const Ve=pe+Ye;if(ue.referencedType!==void 0){let Le=ue.type,Pe=O.get(ue.referencedType);if(!Pe){const Ze=ue.type.split(":");Le=Ze[0],Pe=Ze[1]}Le==="ref"?Ce.addField(se,Ve,ue.name,Pe):Ce.addField(se,Ve,ue.name,{[Le]:Pe})}else Ce.addField(se,Ve,ue.name,ue.type)})};_.types.forEach(se=>{const fe=O.get(se.id),pe=Ce.initialize(fe),ue=[];let Ye=se;do ue.push(Ye),Ye=_.types.find(Le=>Le.id===Ye.extendsId);while(Ye);let Ve=0;ue.reverse().forEach(Le=>{j(pe,Le,Ve),Ve+=Le.fields.length})});const me=new(O.get(_.rootType||0));return new Nt(me,O)}}Tt([ke([ln])],Xt.prototype,"types",void 0),Tt([ke("number")],Xt.prototype,"rootType",void 0);function bn(T){const u=T.root,p=u.callbacks,_=new WeakMap;let E;T.triggerChanges=function(me){const se=new Set;for(let fe=0,pe=me.length;fe<pe;fe++){const ue=me[fe],Ye=ue.refId,Ve=ue.ref,Le=p[Ye];if(Le){if((ue.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ue.previousValue instanceof qe){const Pe=p[u.refIds.get(ue.previousValue)]?.[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Ve instanceof qe){if(!se.has(Ye)){const Pe=Le?.[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Le.hasOwnProperty(ue.field)){const Pe=Le[ue.field];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ue.value,ue.previousValue)}}else{if((ue.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ue.previousValue!==void 0){const Pe=Le[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ue.previousValue,ue.dynamicIndex??ue.field)}if((ue.op&t.OPERATION.ADD)===t.OPERATION.ADD){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ue.value,ue.dynamicIndex??ue.field)}}else if((ue.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ue.previousValue!==ue.value){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ue.value,ue.dynamicIndex??ue.field)}if(ue.value!==ue.previousValue&&(ue.value!==void 0||ue.previousValue!==void 0)){const Pe=Le[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ue.value,ue.dynamicIndex??ue.field)}}se.add(Ye)}}};function O(me,se){let fe=se.instance?.constructor[Symbol.metadata]||me,pe=se.instance&&typeof se.instance.forEach=="function"||me&&typeof me[Symbol.metadata]>"u";if(fe&&!pe){const ue=function(Ye,Ve,Le,Pe){return Pe&&se.instance[Ve]!==void 0&&!_.has(E)&&Le(se.instance[Ve],void 0),u.addCallback(u.refIds.get(Ye),Ve,Le)};return new Proxy({listen:function(Ve,Le,Pe=!0){if(se.instance)return ue(se.instance,Ve,Le,Pe);{let Ze=()=>{};return se.onInstanceAvailable((jt,Yt)=>{Ze=ue(jt,Ve,Le,Pe&&Yt&&!_.has(E))}),()=>Ze()}},onChange:function(Ve){return u.addCallback(u.refIds.get(se.instance),t.OPERATION.REPLACE,Ve)},bindTo:function(Ve,Le){return Le||(Le=Object.keys(fe).map(Pe=>fe[Pe].name)),u.addCallback(u.refIds.get(se.instance),t.OPERATION.REPLACE,()=>{Le.forEach(Pe=>Ve[Pe]=se.instance[Pe])})}},{get(Ye,Ve){const Le=fe[fe[Ve]];if(Le){const Pe=se.instance?.[Ve],Ze=(jt=>{const Yt=j(se.instance).listen(Ve,(qn,ti)=>{jt(qn,!1),Yt?.()},!1);u.refIds.get(Pe)!==void 0&&jt(Pe,!0)});return O(Le.type,{instance:u.refIds.get(Pe)&&Pe,parentInstance:se.instance,onInstanceAvailable:Ze})}else return Ye[Ve]},has(Ye,Ve){return fe[Ve]!==void 0},set(Ye,Ve,Le){throw new Error("not allowed")},deleteProperty(Ye,Ve){throw new Error("not allowed")}})}else{const ue=function(Le,Pe,Ze){return Ze&&Le.forEach((jt,Yt)=>Pe(jt,Yt)),u.addCallback(u.refIds.get(Le),t.OPERATION.ADD,(jt,Yt)=>{_.set(Pe,!0),E=Pe,Pe(jt,Yt),_.delete(Pe),E=void 0})},Ye=function(Le,Pe){return u.addCallback(u.refIds.get(Le),t.OPERATION.DELETE,Pe)},Ve=function(Le,Pe){return u.addCallback(u.refIds.get(Le),t.OPERATION.REPLACE,Pe)};return new Proxy({onAdd:function(Le,Pe=!0){if(se.instance)return ue(se.instance,Le,Pe&&!_.has(E));if(se.onInstanceAvailable){let Ze=()=>{};return se.onInstanceAvailable((jt,Yt)=>{Ze=ue(jt,Le,Pe&&Yt&&!_.has(E))}),()=>Ze()}},onRemove:function(Le){if(se.instance)return Ye(se.instance,Le);if(se.onInstanceAvailable){let Pe=()=>{};return se.onInstanceAvailable(Ze=>{Pe=Ye(Ze,Le)}),()=>Pe()}},onChange:function(Le){if(se.instance)return Ve(se.instance,Le);if(se.onInstanceAvailable){let Pe=()=>{};return se.onInstanceAvailable(Ze=>{Pe=Ve(Ze,Le)}),()=>Pe()}}},{get(Le,Pe){if(!Le[Pe])throw new Error(`Can't access '${Pe}' through callback proxy. access the instance directly.`);return Le[Pe]},has(Le,Pe){return Le[Pe]!==void 0},set(Le,Pe,Ze){throw new Error("not allowed")},deleteProperty(Le,Pe){throw new Error("not allowed")}})}}function j(me){return O(void 0,{instance:me})}return j}function wo(T,u){T.triggerChanges=u}class Wi{constructor(u=!1){this.iterable=u,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,u&&(this.items=[])}add(u,p=Te,_=!0){const E=u?.[d],O=E.parent;if(E){if(!O&&E.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${E.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",u),!1;const j=u.constructor[Symbol.metadata];this.visible.add(E),this.iterable&&_&&this.items.push(u),_&&O&&this.addParentOf(E,p);let me=this.changes.get(E.refId);me===void 0&&(me={},this.changes.set(E.refId,me));let se=!1;if(E.forEachChild((fe,pe)=>{j&&j[pe].tag!==void 0&&j[pe].tag!==p||this.add(fe.ref,p,!1)&&(se=!0)}),p!==Te){this.tags||(this.tags=new WeakMap);let fe;this.tags.has(E)?fe=this.tags.get(E):(fe=new Set,this.tags.set(E,fe)),fe.add(p),j?.[C]?.[p]?.forEach(pe=>{E.getChange(pe)!==t.OPERATION.DELETE&&(me[pe]=t.OPERATION.ADD)})}else if(!E.isNew||se){const fe=E.filteredChanges!==void 0?E.allFilteredChanges:E.allChanges,pe=this.invisible.has(E);for(let ue=0,Ye=fe.operations.length;ue<Ye;ue++){const Ve=fe.operations[ue];if(Ve===void 0)continue;const Le=E.indexedOperations[Ve]??t.OPERATION.ADD,Pe=j?.[Ve].tag;Le!==t.OPERATION.DELETE&&(pe||Pe===void 0||Pe===p)&&(me[Ve]=Le,se=!0)}}return se}addParentOf(u,p){const _=u.parent[d],E=u.parentIndex;if(!this.visible.has(_)){this.visible.add(_);const O=_.parent?.[d];O&&O.filteredChanges!==void 0&&this.addParentOf(_,p)}if(_.getChange(E)!==t.OPERATION.DELETE){let O=this.changes.get(_.refId);O===void 0&&(O={},this.changes.set(_.refId,O)),this.tags||(this.tags=new WeakMap);let j;this.tags.has(_)?j=this.tags.get(_):(j=new Set,this.tags.set(_,j)),j.add(p),O[E]=t.OPERATION.ADD}}remove(u,p=Te,_=!1){const E=u[d];if(!E)return console.warn("StateView#remove(), invalid object:",u),this;this.visible.delete(E),this.iterable&&!_&&Gi(this.items,this.items.indexOf(u));const j=E.ref.constructor[Symbol.metadata];let me=this.changes.get(E.refId);if(me===void 0&&(me={},this.changes.set(E.refId,me)),p===Te){const se=E.parent;if(se&&!Ce.isValidInstance(se)&&E.isFiltered){const fe=se[d];let pe=this.changes.get(fe.refId);pe===void 0?(pe={},this.changes.set(fe.refId,pe)):pe[E.parentIndex]===t.OPERATION.ADD&&this.changes.delete(E.refId),pe[E.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(E)}else j?.[R]?.forEach(fe=>me[fe]=t.OPERATION.DELETE)}else j?.[C][p].forEach(se=>me[se]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(E)){const se=this.tags.get(E);p===void 0?this.tags.delete(E):(se.delete(p),se.size===0&&this.tags.delete(E))}return this}has(u){return this.visible.has(u[d])}hasTag(u,p=Te){return this.tags?.get(u[d])?.has(p)??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let u=0,p=this.items.length;u<p;u++)this.remove(this.items[u],Te,!0);this.items.length=0}isChangeTreeVisible(u){let p=this.visible.has(u);return!p&&u.isVisibilitySharedWithParent&&this.visible.has(u.parent[d])&&(this.visible.add(u),p=!0),p}_recursiveDeleteVisibleChangeTree(u){u.forEachChild(p=>{this.visible.delete(p),this._recursiveDeleteVisibleChangeTree(p)})}}Xe("map",{constructor:li}),Xe("array",{constructor:$n}),Xe("set",{constructor:Y}),Xe("collection",{constructor:q}),t.$changes=d,t.$childType=h,t.$decoder=a,t.$deleteByIndex=f,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=$n,t.ChangeTree=lt,t.CollectionSchema=q,t.Decoder=Nt,t.Encoder=hn,t.MapSchema=li,t.Metadata=Ce,t.Reflection=Xt,t.ReflectionField=cn,t.ReflectionType=ln,t.Schema=qe,t.SetSchema=Y,t.StateView=Wi,t.TypeContext=ot,t.decode=Oe,t.decodeKeyValueOperation=zr,t.decodeSchemaOperation=Cs,t.defineCustomTypes=Be,t.defineTypes=at,t.deprecated=ut,t.dumpChanges=Wt,t.encode=Qe,t.encodeArray=Wn,t.encodeKeyValueOperation=Fn,t.encodeSchemaOperation=Mt,t.entity=$e,t.getDecoderStateCallbacks=bn,t.getRawChangesCallback=wo,t.registerType=Xe,t.schema=_t,t.type=ke,t.view=et}))})(Uo,Uo.exports)),Uo.exports}var xh;function lv(){if(xh)return kl;xh=1;var n=ol,e=md();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return kl.H3TransportTransport=t,kl}var zl={},Vl,yh;function uv(){return yh||(yh=1,Vl=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Vl}var Sh;function fv(){if(Sh)return zl;Sh=1;var n=uv();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return zl.WebSocketTransport=t,zl}var Eh;function dv(){if(Eh)return Bl;Eh=1;var n=lv(),e=fv();let t=class{constructor(r){this.events={},r==="h3"?this.transport=new n.H3TransportTransport(this.events):this.transport=new e.WebSocketTransport(this.events)}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return Bl.Connection=t,Bl}var Hl={},Mh;function _g(){return Mh||(Mh=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Hl)),Hl}var Va={},bh;function vg(){if(bh)return Va;bh=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return Va.getSerializer=t,Va.registerSerializer=e,Va}var Gl={},Th;function xg(){if(Th)return Gl;Th=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Gl.createNanoEvents=n,Gl}var Ha={},wh;function hv(){if(wh)return Ha;wh=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return Ha.EventEmitter=n,Ha.createSignal=e,Ha}var Ga={},Ah;function yg(){if(Ah)return Ga;Ah=1;var n=md();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return Ga.SchemaSerializer=t,Ga.getStateCallbacks=e,Ga}var Yu;try{Yu=new TextDecoder}catch{}var We,Oi,X=0,kt={},St,Cr,ri=0,Pi=0,gn,ar,Rn=[],xt,Ch={useRecords:!1,mapsAsObjects:!0};class Sg{}const gd=new Sg;gd.name="MessagePack 0xC1";var Pr=!1,Eg=2,pv;try{new Function("")}catch{Eg=1/0}class Lr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(We)return Cg(()=>(Fc(),this?this.unpack(e,t):Lr.prototype.unpack.call(Ch,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Oi=t.end||e.length,X=t.start||0):(X=0,Oi=t>-1?t:e.length),Pi=0,Cr=null,gn=null,We=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw We=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Lr){if(kt=this,this.structures)return St=this.structures,Wa(t);(!St||St.length>0)&&(St=[])}else kt=Ch,(!St||St.length>0)&&(St=[]);return Wa(t)}unpackMultiple(e,t){let i,r=0;try{Pr=!0;let s=e.length,o=this?this.unpack(e,s):ll.unpack(e,s);if(t){if(t(o,r,X)===!1)return;for(;X<s;)if(r=X,t(Wa(),r,X)===!1)return}else{for(i=[o];X<s;)r=X,i.push(Wa());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Pr=!1,Fc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function Wa(n){try{if(!kt.trusted&&!Pr){let t=St.sharedLength||0;t<St.length&&(St.length=t)}let e;if(kt.randomAccessStructure&&We[X]<64&&We[X]>=32&&pv||(e=en()),gn&&(X=gn.postBundlePosition,gn=null),Pr&&(St.restoreStructures=null),X==Oi)St&&St.restoreStructures&&Rh(),St=null,We=null,ar&&(ar=null);else{if(X>Oi)throw new Error("Unexpected end of MessagePack data");if(!Pr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw St&&St.restoreStructures&&Rh(),Fc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||X>Oi)&&(e.incomplete=!0),e}}function Rh(){for(let n in St.restoreStructures)St[n]=St.restoreStructures[n];St.restoreStructures=null}function en(){let n=We[X++];if(n<160)if(n<128){if(n<64)return n;{let e=St[n&63]||kt.getStructures&&Mg()[n&63];return e?(e.read||(e.read=_d(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,kt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=Tg();i==="__proto__"&&(i="__proto_"),e[i]=en()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(en(),en());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=en();return kt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(Pi>=X)return Cr.slice(X-ri,(X+=e)-ri);if(Pi==0&&Oi<140){let t=e<16?vd(e):bg(e);if(t!=null)return t}return Ku(e)}else{let e;switch(n){case 192:return null;case 193:return gn?(e=en(),e>0?gn[1].slice(gn.position1,gn.position1+=e):gn[0].slice(gn.position0,gn.position0-=e)):gd;case 194:return!1;case 195:return!0;case 196:if(e=We[X++],e===void 0)throw new Error("Unexpected end of buffer");return Wl(e);case 197:return e=xt.getUint16(X),X+=2,Wl(e);case 198:return e=xt.getUint32(X),X+=4,Wl(e);case 199:return Gr(We[X++]);case 200:return e=xt.getUint16(X),X+=2,Gr(e);case 201:return e=xt.getUint32(X),X+=4,Gr(e);case 202:if(e=xt.getFloat32(X),kt.useFloat32>2){let t=cl[(We[X]&127)<<1|We[X+1]>>7];return X+=4,(t*e+(e>0?.5:-.5)>>0)/t}return X+=4,e;case 203:return e=xt.getFloat64(X),X+=8,e;case 204:return We[X++];case 205:return e=xt.getUint16(X),X+=2,e;case 206:return e=xt.getUint32(X),X+=4,e;case 207:return kt.int64AsType==="number"?(e=xt.getUint32(X)*4294967296,e+=xt.getUint32(X+4)):kt.int64AsType==="string"?e=xt.getBigUint64(X).toString():kt.int64AsType==="auto"?(e=xt.getBigUint64(X),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(X),X+=8,e;case 208:return xt.getInt8(X++);case 209:return e=xt.getInt16(X),X+=2,e;case 210:return e=xt.getInt32(X),X+=4,e;case 211:return kt.int64AsType==="number"?(e=xt.getInt32(X)*4294967296,e+=xt.getUint32(X+4)):kt.int64AsType==="string"?e=xt.getBigInt64(X).toString():kt.int64AsType==="auto"?(e=xt.getBigInt64(X),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(X),X+=8,e;case 212:if(e=We[X++],e==114)return Nh(We[X++]&63);{let t=Rn[e];if(t)return t.read?(X++,t.read(en())):t.noBuffer?(X++,t()):t(We.subarray(X,++X));throw new Error("Unknown extension "+e)}case 213:return e=We[X],e==114?(X++,Nh(We[X++]&63,We[X++])):Gr(2);case 214:return Gr(4);case 215:return Gr(8);case 216:return Gr(16);case 217:return e=We[X++],Pi>=X?Cr.slice(X-ri,(X+=e)-ri):gv(e);case 218:return e=xt.getUint16(X),X+=2,Pi>=X?Cr.slice(X-ri,(X+=e)-ri):_v(e);case 219:return e=xt.getUint32(X),X+=4,Pi>=X?Cr.slice(X-ri,(X+=e)-ri):vv(e);case 220:return e=xt.getUint16(X),X+=2,Ih(e);case 221:return e=xt.getUint32(X),X+=4,Ih(e);case 222:return e=xt.getUint16(X),X+=2,Dh(e);case 223:return e=xt.getUint32(X),X+=4,Dh(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const mv=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function _d(n,e){function t(){if(t.count++>Eg){let r=n.read=new Function("r","return function(){return "+(kt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":mv.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(en);return n.highByte===0&&(n.read=Ph(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=en()}return kt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Ph(e,t):t}const Ph=(n,e)=>function(){let t=We[X++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=St[i]||Mg()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=_d(r,n)),r.read()};function Mg(){let n=Cg(()=>(We=null,kt.getStructures()));return St=kt._mergeStructures(n,St)}var Ku=xa,gv=xa,_v=xa,vv=xa;let xv=!1;function xa(n){let e;if(n<16&&(e=vd(n)))return e;if(n>64&&Yu)return Yu.decode(We.subarray(X,X+=n));const t=X+n,i=[];for(e="";X<t;){const r=We[X++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=We[X++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=We[X++]&63,o=We[X++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=We[X++]&63,o=We[X++]&63,a=We[X++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=mn.apply(String,i),i.length=0)}return i.length>0&&(e+=mn.apply(String,i)),e}function Ih(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=en();return kt.freezeData?Object.freeze(e):e}function Dh(n){if(kt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=Tg();i==="__proto__"&&(i="__proto_"),e[i]=en()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(en(),en());return e}}var mn=String.fromCharCode;function bg(n){let e=X,t=new Array(n);for(let i=0;i<n;i++){const r=We[X++];if((r&128)>0){X=e;return}t[i]=r}return mn.apply(String,t)}function vd(n){if(n<4)if(n<2){if(n===0)return"";{let e=We[X++];if((e&128)>1){X-=1;return}return mn(e)}}else{let e=We[X++],t=We[X++];if((e&128)>0||(t&128)>0){X-=2;return}if(n<3)return mn(e,t);let i=We[X++];if((i&128)>0){X-=3;return}return mn(e,t,i)}else{let e=We[X++],t=We[X++],i=We[X++],r=We[X++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){X-=4;return}if(n<6){if(n===4)return mn(e,t,i,r);{let s=We[X++];if((s&128)>0){X-=5;return}return mn(e,t,i,r,s)}}else if(n<8){let s=We[X++],o=We[X++];if((s&128)>0||(o&128)>0){X-=6;return}if(n<7)return mn(e,t,i,r,s,o);let a=We[X++];if((a&128)>0){X-=7;return}return mn(e,t,i,r,s,o,a)}else{let s=We[X++],o=We[X++],a=We[X++],c=We[X++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){X-=8;return}if(n<10){if(n===8)return mn(e,t,i,r,s,o,a,c);{let l=We[X++];if((l&128)>0){X-=9;return}return mn(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=We[X++],f=We[X++];if((l&128)>0||(f&128)>0){X-=10;return}if(n<11)return mn(e,t,i,r,s,o,a,c,l,f);let d=We[X++];if((d&128)>0){X-=11;return}return mn(e,t,i,r,s,o,a,c,l,f,d)}else{let l=We[X++],f=We[X++],d=We[X++],h=We[X++];if((l&128)>0||(f&128)>0||(d&128)>0||(h&128)>0){X-=12;return}if(n<14){if(n===12)return mn(e,t,i,r,s,o,a,c,l,f,d,h);{let m=We[X++];if((m&128)>0){X-=13;return}return mn(e,t,i,r,s,o,a,c,l,f,d,h,m)}}else{let m=We[X++],x=We[X++];if((m&128)>0||(x&128)>0){X-=14;return}if(n<15)return mn(e,t,i,r,s,o,a,c,l,f,d,h,m,x);let y=We[X++];if((y&128)>0){X-=15;return}return mn(e,t,i,r,s,o,a,c,l,f,d,h,m,x,y)}}}}}function Lh(){let n=We[X++],e;if(n<192)e=n-160;else switch(n){case 217:e=We[X++];break;case 218:e=xt.getUint16(X),X+=2;break;case 219:e=xt.getUint32(X),X+=4;break;default:throw new Error("Expected string")}return xa(e)}function Wl(n){return kt.copyBuffers?Uint8Array.prototype.slice.call(We,X,X+=n):We.subarray(X,X+=n)}function Gr(n){let e=We[X++];if(Rn[e]){let t;return Rn[e](We.subarray(X,t=X+=n),i=>{X=i;try{return en()}finally{X=t}})}else throw new Error("Unknown extension type "+e)}var Oh=new Array(4096);function Tg(){let n=We[X++];if(n>=160&&n<192){if(n=n-160,Pi>=X)return Cr.slice(X-ri,(X+=n)-ri);if(!(Pi==0&&Oi<180))return Ku(n)}else return X--,wg(en());let e=(n<<5^(n>1?xt.getUint16(X):n>0?We[X]:0))&4095,t=Oh[e],i=X,r=X+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=We[i++],s!=t[o++]){i=1879048192;break}if(i===r)return X=i,t.string;r-=3,i=X}for(t=[],Oh[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=We[i++],t.push(s);let a=n<16?vd(n):bg(n);return a!=null?t.string=a:t.string=Ku(n)}function wg(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(kt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const Nh=(n,e)=>{let t=en().map(wg),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=St[n];return r&&(r.isShared||Pr)&&((St.restoreStructures||(St.restoreStructures=[]))[n]=r),St[n]=t,t.read=_d(t,i),t.read()};Rn[0]=()=>{};Rn[0].noBuffer=!0;Rn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let yv={Error,TypeError,ReferenceError};Rn[101]=()=>{let n=en();return(yv[n[0]]||Error)(n[1],{cause:n[2]})};Rn[105]=n=>{if(kt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(X-4);ar||(ar=new Map);let t=We[X],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};ar.set(e,r);let s=en();return r.used?Object.assign(i,s):(r.target=s,s)};Rn[112]=n=>{if(kt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(X-4),t=ar.get(e);return t.used=!0,t.target};Rn[115]=()=>new Set(en());const Ag=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let Sv=typeof globalThis=="object"?globalThis:window;Rn[116]=n=>{let e=n[0],t=Ag[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new Sv[t](Uint8Array.prototype.slice.call(n,1).buffer)};Rn[120]=()=>{let n=en();return new RegExp(n[0],n[1])};const Ev=[];Rn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=X;return X+=e-n.length,gn=Ev,gn=[Lh(),Lh()],gn.position0=0,gn.position1=0,gn.postBundlePosition=X,X=t,en()};Rn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function Cg(n){let e=Oi,t=X,i=ri,r=Pi,s=Cr,o=ar,a=gn,c=new Uint8Array(We.slice(0,Oi)),l=St,f=St.slice(0,St.length),d=kt,h=Pr,m=n();return Oi=e,X=t,ri=i,Pi=r,Cr=s,ar=o,gn=a,We=c,Pr=h,St=l,St.splice(0,St.length,...f),kt=d,xt=new DataView(We.buffer,We.byteOffset,We.byteLength),m}function Fc(){We=null,ar=null,St=null}function Mv(n){n.unpack?Rn[n.type]=n.unpack:Rn[n.type]=n}const cl=new Array(147);for(let n=0;n<256;n++)cl[n]=+("1e"+Math.floor(45.15-n*.30103));const bv=Lr;var ll=new Lr({useRecords:!1});const Tv=ll.unpack,wv=ll.unpackMultiple,Av=ll.unpack,Rg={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let Pg=new Float32Array(1),Uh=new Uint8Array(Pg.buffer,0,4);function Cv(n){Pg[0]=n;let e=cl[(Uh[3]&127)<<1|Uh[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let Ec;try{Ec=new TextEncoder}catch{}let Bc,xd;const ul=typeof Buffer<"u",$a=ul?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,Ig=ul?Buffer:Uint8Array,Fh=ul?4294967296:2144337920;let ee,Ao,Ut,K=0,Pn,$t=null,Rv;const Pv=21760,Iv=/[\u0080-\uFFFF]/,Ds=Symbol("record-id");class ya extends Lr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=Ig.prototype.utf8Write?function(D,W){return ee.utf8Write(D,W,ee.byteLength-W)}:Ec&&Ec.encodeInto?function(D,W){return Ec.encodeInto(D,ee.subarray(W)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,f=e.maxSharedStructures;if(f==null&&(f=l?32:0),f>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let d=e.maxOwnStructures;d==null&&(d=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let h=f>32||d+f>64,m=f+64,x=f+d+64;if(x>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],v=0,g=0;this.pack=this.encode=function(D,W){if(ee||(ee=new $a(8192),Ut=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,8192)),K=0),Pn=ee.length-10,Pn-K<2048?(ee=new $a(ee.length),Ut=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,ee.length)),Pn=ee.length-10,K=0):K=K+7&2147483640,t=K,W&Ng&&(K+=W&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof D!="string"?($t=[],$t.size=1/0):$t=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let F=r.sharedLength||0;if(F>f)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let V=0;V<F;V++){let z=r[V];if(!z)continue;let Se,Ee=r.transitions;for(let Re=0,Ne=z.length;Re<Ne;Re++){let ft=z[Re];Se=Ee[ft],Se||(Se=Ee[ft]=Object.create(null)),Ee=Se}Ee[Ds]=V+64}this.lastNamedStructuresLength=F}c||(r.nextId=F+64)}i&&(i=!1);let $;try{a.randomAccessStructure&&D&&D.constructor&&D.constructor===Object?ye(D):b(D);let F=$t;if($t&&zh(t,b,0),s&&s.idsToInsert){let V=s.idsToInsert.sort((Re,Ne)=>Re.offset>Ne.offset?1:-1),z=V.length,Se=-1;for(;F&&z>0;){let Re=V[--z].offset+t;Re<F.stringsPosition+t&&Se===-1&&(Se=0),Re>F.position+t?Se>=0&&(Se+=6):(Se>=0&&(Ut.setUint32(F.position+t,Ut.getUint32(F.position+t)+Se),Se=-1),F=F.previous,z++)}Se>=0&&F&&Ut.setUint32(F.position+t,Ut.getUint32(F.position+t)+Se),K+=V.length*6,K>Pn&&I(K),a.offset=K;let Ee=Lv(ee.subarray(t,K),V);return s=null,Ee}return a.offset=K,W&Lg?(ee.start=t,ee.end=K,ee):ee.subarray(t,K)}catch(F){throw $=F,F}finally{if(r&&(R(),i&&a.saveStructures)){let F=r.sharedLength||0,V=ee.subarray(t,K),z=Nv(r,a);if(!$)return a.saveStructures(z,z.isCompatible)===!1?a.pack(D,W):(a.lastNamedStructuresLength=F,ee.length>1073741824&&(ee=null),V)}ee.length>1073741824&&(ee=null),W&Og&&(K=t)}};const R=()=>{g<10&&g++;let D=r.sharedLength||0;if(r.length>D&&!c&&(r.length=D),v>1e4)r.transitions=null,g=0,v=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let W=0,$=y.length;W<$;W++)y[W][Ds]=0;y=[]}},C=D=>{var W=D.length;W<16?ee[K++]=144|W:W<65536?(ee[K++]=220,ee[K++]=W>>8,ee[K++]=W&255):(ee[K++]=221,Ut.setUint32(K,W),K+=4);for(let $=0;$<W;$++)b(D[$])},b=D=>{K>Pn&&(ee=I(K));var W=typeof D,$;if(W==="string"){let F=D.length;if($t&&F>=4&&F<4096){if(($t.size+=F)>Pv){let Ee,Re=($t[0]?$t[0].length*3+$t[1].length:0)+10;K+Re>Pn&&(ee=I(K+Re));let Ne;$t.position?(Ne=$t,ee[K]=200,K+=3,ee[K++]=98,Ee=K-t,K+=4,zh(t,b,0),Ut.setUint16(Ee+t-3,K-t-Ee)):(ee[K++]=214,ee[K++]=98,Ee=K-t,K+=4),$t=["",""],$t.previous=Ne,$t.size=0,$t.position=Ee}let Se=Iv.test(D);$t[Se?0:1]+=D,ee[K++]=193,b(Se?-F:F);return}let V;F<32?V=1:F<256?V=2:F<65536?V=3:V=5;let z=F*3;if(K+z>Pn&&(ee=I(K+z)),F<64||!o){let Se,Ee,Re,Ne=K+V;for(Se=0;Se<F;Se++)Ee=D.charCodeAt(Se),Ee<128?ee[Ne++]=Ee:Ee<2048?(ee[Ne++]=Ee>>6|192,ee[Ne++]=Ee&63|128):(Ee&64512)===55296&&((Re=D.charCodeAt(Se+1))&64512)===56320?(Ee=65536+((Ee&1023)<<10)+(Re&1023),Se++,ee[Ne++]=Ee>>18|240,ee[Ne++]=Ee>>12&63|128,ee[Ne++]=Ee>>6&63|128,ee[Ne++]=Ee&63|128):(ee[Ne++]=Ee>>12|224,ee[Ne++]=Ee>>6&63|128,ee[Ne++]=Ee&63|128);$=Ne-K-V}else $=o(D,K+V);$<32?ee[K++]=160|$:$<256?(V<2&&ee.copyWithin(K+2,K+1,K+1+$),ee[K++]=217,ee[K++]=$):$<65536?(V<3&&ee.copyWithin(K+3,K+2,K+2+$),ee[K++]=218,ee[K++]=$>>8,ee[K++]=$&255):(V<5&&ee.copyWithin(K+5,K+3,K+3+$),ee[K++]=219,Ut.setUint32(K,$),K+=4),K+=$}else if(W==="number")if(D>>>0===D)D<32||D<128&&this.useRecords===!1||D<64&&!this.randomAccessStructure?ee[K++]=D:D<256?(ee[K++]=204,ee[K++]=D):D<65536?(ee[K++]=205,ee[K++]=D>>8,ee[K++]=D&255):(ee[K++]=206,Ut.setUint32(K,D),K+=4);else if(D>>0===D)D>=-32?ee[K++]=256+D:D>=-128?(ee[K++]=208,ee[K++]=D+256):D>=-32768?(ee[K++]=209,Ut.setInt16(K,D),K+=2):(ee[K++]=210,Ut.setInt32(K,D),K+=4);else{let F;if((F=this.useFloat32)>0&&D<4294967296&&D>=-2147483648){ee[K++]=202,Ut.setFloat32(K,D);let V;if(F<4||(V=D*cl[(ee[K]&127)<<1|ee[K+1]>>7])>>0===V){K+=4;return}else K--}ee[K++]=203,Ut.setFloat64(K,D),K+=8}else if(W==="object"||W==="function")if(!D)ee[K++]=192;else{if(s){let V=s.get(D);if(V){if(!V.id){let z=s.idsToInsert||(s.idsToInsert=[]);V.id=z.push(V)}ee[K++]=214,ee[K++]=112,Ut.setUint32(K,V.id),K+=4;return}else s.set(D,{offset:K-t})}let F=D.constructor;if(F===Object)J(D);else if(F===Array)C(D);else if(F===Map)if(this.mapAsEmptyObject)ee[K++]=128;else{$=D.size,$<16?ee[K++]=128|$:$<65536?(ee[K++]=222,ee[K++]=$>>8,ee[K++]=$&255):(ee[K++]=223,Ut.setUint32(K,$),K+=4);for(let[V,z]of D)b(V),b(z)}else{for(let V=0,z=Bc.length;V<z;V++){let Se=xd[V];if(D instanceof Se){let Ee=Bc[V];if(Ee.write){Ee.type&&(ee[K++]=212,ee[K++]=Ee.type,ee[K++]=0);let ge=Ee.write.call(this,D);ge===D?Array.isArray(D)?C(D):J(D):b(ge);return}let Re=ee,Ne=Ut,ft=K;ee=null;let dt;try{dt=Ee.pack.call(this,D,ge=>(ee=Re,Re=null,K+=ge,K>Pn&&I(K),{target:ee,targetView:Ut,position:K-ge}),b)}finally{Re&&(ee=Re,Ut=Ne,K=ft,Pn=ee.length-10)}dt&&(dt.length+K>Pn&&I(dt.length+K),K=Dv(dt,ee,K,Ee.type));return}}if(Array.isArray(D))C(D);else{if(D.toJSON){const V=D.toJSON();if(V!==D)return b(V)}if(W==="function")return b(this.writeFunction&&this.writeFunction(D));J(D)}}}else if(W==="boolean")ee[K++]=D?195:194;else if(W==="bigint"){if(D<BigInt(1)<<BigInt(63)&&D>=-(BigInt(1)<<BigInt(63)))ee[K++]=211,Ut.setBigInt64(K,D);else if(D<BigInt(1)<<BigInt(64)&&D>0)ee[K++]=207,Ut.setBigUint64(K,D);else if(this.largeBigIntToFloat)ee[K++]=203,Ut.setFloat64(K,Number(D));else{if(this.largeBigIntToString)return b(D.toString());if(this.useBigIntExtension&&D<BigInt(2)**BigInt(1023)&&D>-(BigInt(2)**BigInt(1023))){ee[K++]=199,K++,ee[K++]=66;let F=[],V;do{let z=D&BigInt(255);V=(z&BigInt(128))===(D<BigInt(0)?BigInt(128):BigInt(0)),F.push(z),D>>=BigInt(8)}while(!((D===BigInt(0)||D===BigInt(-1))&&V));ee[K-2]=F.length;for(let z=F.length;z>0;)ee[K++]=Number(F[--z]);return}else throw new RangeError(D+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}K+=8}else if(W==="undefined")this.encodeUndefinedAsNil?ee[K++]=192:(ee[K++]=212,ee[K++]=0,ee[K++]=0);else throw new Error("Unknown type: "+W)},N=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?D=>{let W;if(this.skipValues){W=[];for(let V in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(V))&&!this.skipValues.includes(D[V])&&W.push(V)}else W=Object.keys(D);let $=W.length;$<16?ee[K++]=128|$:$<65536?(ee[K++]=222,ee[K++]=$>>8,ee[K++]=$&255):(ee[K++]=223,Ut.setUint32(K,$),K+=4);let F;if(this.coercibleKeyAsNumber)for(let V=0;V<$;V++){F=W[V];let z=Number(F);b(isNaN(z)?F:z),b(D[F])}else for(let V=0;V<$;V++)b(F=W[V]),b(D[F])}:D=>{ee[K++]=222;let W=K-t;K+=2;let $=0;for(let F in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(F))&&(b(F),b(D[F]),$++);if($>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ee[W+++t]=$>>8,ee[W+t]=$&255},k=this.useRecords===!1?N:e.progressiveRecords&&!h?D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=K++-t,V;for(let z in D)if(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z)){if(W=$[z],W)$=W;else{let Se=Object.keys(D),Ee=$;$=r.transitions;let Re=0;for(let Ne=0,ft=Se.length;Ne<ft;Ne++){let dt=Se[Ne];W=$[dt],W||(W=$[dt]=Object.create(null),Re++),$=W}F+t+1==K?(K--,P($,Se,Re)):U($,Se,F,Re),V=!0,$=Ee[z]}b(D[z])}if(!V){let z=$[Ds];z?ee[F+t]=z:U($,Object.keys(D),F,0)}}:D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=0;for(let z in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z))&&(W=$[z],W||(W=$[z]=Object.create(null),F++),$=W);let V=$[Ds];V?V>=96&&h?(ee[K++]=((V-=96)&31)+96,ee[K++]=V>>5):ee[K++]=V:P($,$.__keys__||Object.keys(D),F);for(let z in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z))&&b(D[z])},B=typeof this.useRecords=="function"&&this.useRecords,J=B?D=>{B(D)?k(D):N(D)}:k,I=D=>{let W;if(D>16777216){if(D-t>Fh)throw new Error("Packed buffer would be larger than maximum buffer size");W=Math.min(Fh,Math.round(Math.max((D-t)*(D>67108864?1.25:2),4194304)/4096)*4096)}else W=(Math.max(D-t<<2,ee.length-1)>>12)+1<<12;let $=new $a(W);return Ut=$.dataView||($.dataView=new DataView($.buffer,0,W)),D=Math.min(D,ee.length),ee.copy?ee.copy($,0,t,D):$.set(ee.slice(t,D)),K-=t,t=0,Pn=$.length-10,ee=$},P=(D,W,$)=>{let F=r.nextId;F||(F=64),F<m&&this.shouldShareStructure&&!this.shouldShareStructure(W)?(F=r.nextOwnId,F<x||(F=m),r.nextOwnId=F+1):(F>=x&&(F=m),r.nextId=F+1);let V=W.highByte=F>=96&&h?F-96>>5:-1;D[Ds]=F,D.__keys__=W,r[F-64]=W,F<m?(W.isShared=!0,r.sharedLength=F-63,i=!0,V>=0?(ee[K++]=(F&31)+96,ee[K++]=V):ee[K++]=F):(V>=0?(ee[K++]=213,ee[K++]=114,ee[K++]=(F&31)+96,ee[K++]=V):(ee[K++]=212,ee[K++]=114,ee[K++]=F),$&&(v+=g*$),y.length>=d&&(y.shift()[Ds]=0),y.push(D),b(W))},U=(D,W,$,F)=>{let V=ee,z=K,Se=Pn,Ee=t;ee=Ao,K=0,t=0,ee||(Ao=ee=new $a(8192)),Pn=ee.length-10,P(D,W,F),Ao=ee;let Re=K;if(ee=V,K=z,Pn=Se,t=Ee,Re>1){let Ne=K+Re-1;Ne>Pn&&I(Ne);let ft=$+t;ee.copyWithin(ft+Re,ft+1,K),ee.set(Ao.slice(0,Re),ft),K=Ne}else ee[$+t]=Ao[0]},ye=D=>{let W=Rv(D,ee,t,K,r,I,($,F,V)=>{if(V)return i=!0;K=F;let z=ee;return b($),R(),z!==ee?{position:K,targetView:Ut,target:ee}:K},this);if(W===0)return J(D);K=W}}useBuffer(e){ee=e,ee.dataView||(ee.dataView=new DataView(ee.buffer,ee.byteOffset,ee.byteLength)),Ut=ee.dataView,K=0}set position(e){K=e}get position(){return K}set buffer(e){ee=e}get buffer(){return ee}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}xd=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Sg];Bc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?Bh(n,16,e):kh(ul?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==Ig&&this.moreTypes?Bh(n,Ag.indexOf(t.name),e):kh(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function Bh(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function kh(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function Dv(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function Lv(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function zh(n,e,t){if($t.length>0){Ut.setUint32($t.position+n,K+t-$t.position-n),$t.stringsPosition=K-n;let i=$t;$t=null,e(i[0]),e(i[1])}}function Ov(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");xd.unshift(n.Class),Bc.unshift(n)}Mv(n)}function Nv(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let Dg=new ya({useRecords:!1});const Uv=Dg.pack,Fv=Dg.pack,Bv=ya,{NEVER:kv,ALWAYS:zv,DECIMAL_ROUND:Vv,DECIMAL_FIT:Hv}=Rg,Lg=512,Og=1024,Ng=2048;function Gv(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return Wv(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return $v(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*Wv(n,e){const t=new ya(e);for(const i of n)yield t.pack(i)}async function*$v(n,e){const t=new ya(e);for await(const i of n)yield t.pack(i)}function qv(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Lr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const Xv=qv,jv=Gv,Yv=!1,Kv=!0,Jv=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:zv,C1:gd,DECIMAL_FIT:Hv,DECIMAL_ROUND:Vv,Decoder:bv,Encoder:Bv,FLOAT32_OPTIONS:Rg,NEVER:kv,Packr:ya,RESERVE_START_SPACE:Ng,RESET_BUFFER_MODE:Og,REUSE_BUFFER_MODE:Lg,Unpackr:Lr,addExtension:Ov,clearSource:Fc,decode:Av,decodeIter:Xv,encode:Fv,encodeIter:jv,isNativeAccelerationEnabled:xv,mapsAsObjects:Kv,pack:Uv,roundFloat32:Cv,unpack:Tv,unpackMultiple:wv,useRecords:Yv},Symbol.toStringTag,{value:"Module"})),Zv=hd(Jv);var Vh;function Fg(){if(Vh)return Fl;Vh=1;var n=dv(),e=_g(),t=vg(),i=xg(),r=hv(),s=md(),o=yg(),a=al(),c=Zv;let l=class Ug{constructor(d,h){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=d,this.packr=new c.Packr,this.packr.encode(void 0),h&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=h,this.serializer.state=new h),this.onError((m,x)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${m}) ${x}`)}),this.onLeave(()=>this.removeAllListeners())}connect(d,h,m=this,x,y){const v=new n.Connection(x.protocol);if(m.connection=v,v.events.onmessage=Ug.prototype.onMessageCallback.bind(m),v.events.onclose=function(g){var R;if(!m.hasJoined){(R=console.warn)===null||R===void 0||R.call(console,`Room connection was closed unexpectedly (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason);return}g.code===a.CloseCode.DEVMODE_RESTART&&h?h():(m.onLeave.invoke(g.code,g.reason),m.destroy())},v.events.onerror=function(g){var R;(R=console.warn)===null||R===void 0||R.call(console,`Room, onError (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason)},x.protocol==="h3"){const g=new URL(d);v.connect(g.origin,x)}else v.connect(d,y)}leave(d=!0){return new Promise(h=>{this.onLeave(m=>h(m)),this.connection?d?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(d,h){return this.onMessageHandlers.on(this.getMessageHandlerKey(d),h)}send(d,h){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof d=="string"?s.encode.string(this.packr.buffer,d,m):s.encode.number(this.packr.buffer,d,m),this.packr.position=0;const x=h!==void 0?this.packr.pack(h,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.send(x)}sendUnreliable(d,h){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof d=="string"?s.encode.string(this.packr.buffer,d,m):s.encode.number(this.packr.buffer,d,m),this.packr.position=0;const x=h!==void 0?this.packr.pack(h,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.sendUnreliable(x)}sendBytes(d,h){const m={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof d=="string"?s.encode.string(this.packr.buffer,d,m):s.encode.number(this.packr.buffer,d,m),h.byteLength+m.offset>this.packr.buffer.byteLength){const x=new Uint8Array(m.offset+h.byteLength);x.set(this.packr.buffer),this.packr.useBuffer(x)}this.packr.buffer.set(h,m.offset),this.connection.send(this.packr.buffer.subarray(0,m.offset+h.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(d){const h=new Uint8Array(d.data),m={offset:1},x=h[0];if(x===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(h,m,h[m.offset++]);if(this.serializerId=s.decode.utf8Read(h,m,h[m.offset++]),!this.serializer){const v=t.getSerializer(this.serializerId);this.serializer=new v}h.byteLength>m.offset&&this.serializer.handshake&&this.serializer.handshake(h,m),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(x===e.Protocol.ERROR){const y=s.decode.number(h,m),v=s.decode.string(h,m);this.onError.invoke(y,v)}else if(x===e.Protocol.LEAVE_ROOM)this.leave();else if(x===e.Protocol.ROOM_STATE)this.serializer.setState(h,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(h,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(h,m)?s.decode.string(h,m):s.decode.number(h,m),v=h.byteLength>m.offset?c.unpack(h,{start:m.offset}):void 0;this.dispatchMessage(y,v)}else if(x===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(h,m)?s.decode.string(h,m):s.decode.number(h,m);this.dispatchMessage(y,h.subarray(m.offset))}}dispatchMessage(d,h){var m;const x=this.getMessageHandlerKey(d);this.onMessageHandlers.events[x]?this.onMessageHandlers.emit(x,h):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",d,h):(m=console.warn)===null||m===void 0||m.call(console,`colyseus.js: onMessage() not registered for type '${d}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(d){switch(typeof d){case"string":return d;case"number":return`i${d}`;default:throw new Error("invalid message type.")}}};return Fl.Room=l,Fl}var $l={};function Hh(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function yi(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,f=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(d){d.timeout=d.type=="timeout",r(d)},s.onabort=function(d){d.aborted=!0,r(d)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Hh(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(d){return Hh(s,d),r(d)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(f["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in f)s.setRequestHeader(o,f[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var Qv=yi.bind(yi,"GET"),ex=yi.bind(yi,"POST"),tx=yi.bind(yi,"PATCH"),nx=yi.bind(yi,"DELETE"),ix=yi.bind(yi,"PUT");const rx=Object.freeze(Object.defineProperty({__proto__:null,del:nx,get:Qv,patch:tx,post:ex,put:ix,send:yi},Symbol.toStringTag,{value:"Module"})),sx=hd(rx);var Gh;function ox(){if(Gh)return $l;Gh=1;var n=al(),e=sx;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var f;if(l.aborted)throw new n.AbortError("Request aborted");const d=l.statusCode,h=((f=l.data)===null||f===void 0?void 0:f.error)||l.statusMessage||l.message;throw!d&&!h?l:new n.ServerError(d,h)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return $l.HTTP=r,$l}var ql={},Co={},Wh;function ax(){if(Wh)return Co;Wh=1;var n=ol;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(f=>c(f))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const d=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(d)})}setItem(c,l){return this.tx("readwrite",f=>f.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",f=>f.get(c));return new Promise(f=>{l.onsuccess=()=>f(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Co.getItem=s,Co.removeItem=r,Co.setItem=i,Co}var $h;function Bg(){if($h)return ql;$h=1;var n=ol,e=ax(),t=xg(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,f=>this.token=f)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const f=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((d,h)=>{this.getUserData().then(m=>{this.emitChange(Object.assign(Object.assign({},m),{token:this.token}))}).catch(m=>{this.emitChange({user:null,token:void 0})}).finally(()=>{d()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),f}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,f,d){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:f,options:d}})).data;return this.emitChange(h),h})}signInWithEmailAndPassword(l,f){return n.__awaiter(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:f}})).data;return this.emitChange(d),d})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(f),f})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(f,d={}){return new Promise((h,m)=>{const x=d.width||480,y=d.height||768,v=this.token?`?token=${this.token}`:"",g=`Login with ${f[0].toUpperCase()+f.substring(1)}`,R=this.http.client.getHttpEndpoint(`${d.prefix||`${this.settings.path}/provider`}/${f}${v}`),C=screen.width/2-x/2,b=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(R,g,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+x+", height="+y+", top="+b+", left="+C),"f");const N=B=>{B.data.user===void 0&&B.data.token===void 0||(clearInterval(k),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",N),B.data.error!==void 0?m(B.data.error):(h(B.data),this.emitChange(B.data)))},k=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),m("cancelled"),window.removeEventListener("message",N))},200);window.addEventListener("message",N)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,ql.Auth=a,ql}var Xl={},qh;function cx(){if(qh)return Xl;qh=1;function n(e){var t;const i=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Xl.discordURLBuilder=n,Xl}var Xh;function lx(){if(Xh)return za;Xh=1;var n=ol,e=al(),t=Fg(),i=ox(),r=Bg(),s=cx(),o;class a extends Error{constructor(d,h){super(d),this.code=h,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window?.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(d=c,h){var m,x;if(typeof d=="string"){const y=d.startsWith("/")?new URL(d,c):new URL(d),v=y.protocol==="https:"||y.protocol==="wss:",g=Number(y.port||(v?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:g,secure:v,searchParams:y.searchParams.toString()||void 0}}else d.port===void 0&&(d.port=d.secure?443:80),d.pathname===void 0&&(d.pathname=""),this.settings=d;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,h?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=h?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((x=(m=window?.location)===null||m===void 0?void 0:m.hostname)===null||x===void 0)&&x.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(d){return n.__awaiter(this,arguments,void 0,function*(h,m={},x){return yield this.createMatchMakeRequest("joinOrCreate",h,m,x)})}create(d){return n.__awaiter(this,arguments,void 0,function*(h,m={},x){return yield this.createMatchMakeRequest("create",h,m,x)})}join(d){return n.__awaiter(this,arguments,void 0,function*(h,m={},x){return yield this.createMatchMakeRequest("join",h,m,x)})}joinById(d){return n.__awaiter(this,arguments,void 0,function*(h,m={},x){return yield this.createMatchMakeRequest("joinById",h,m,x)})}reconnect(d,h){return n.__awaiter(this,void 0,void 0,function*(){if(typeof d=="string"&&typeof h=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[m,x]=d.split(":");if(!m||!x)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",m,{reconnectionToken:x},h)})}consumeSeatReservation(d,h,m){return n.__awaiter(this,void 0,void 0,function*(){const x=this.createRoom(d.room.name,h);x.roomId=d.room.roomId,x.sessionId=d.sessionId;const y={sessionId:x.sessionId};d.reconnectionToken&&(y.reconnectionToken=d.reconnectionToken);const v=m||x;return x.connect(this.buildEndpoint(d.room,y,d.protocol),d.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${x.roomId}'...`);let g=0,R=8;const C=()=>n.__awaiter(this,void 0,void 0,function*(){g++;try{yield this.consumeSeatReservation(d,h,v),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${x.roomId}'`)}catch{g<R?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${g} out of ${R})`),setTimeout(C,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(C,2e3)})),v,d,this.http.headers),new Promise((g,R)=>{const C=(b,N)=>R(new e.ServerError(b,N));v.onError.once(C),v.onJoin.once(()=>{v.onError.remove(C),g(v)})})})}createMatchMakeRequest(d,h){return n.__awaiter(this,arguments,void 0,function*(m,x,y={},v,g){const R=(yield this.http.post(`matchmake/${m}/${x}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(R.error)throw new a(R.error,R.code);return m==="reconnect"&&(R.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(R,v,g)})}createRoom(d,h){return new t.Room(d,h)}buildEndpoint(d,h={},m="ws"){let x=this.settings.searchParams||"";this.http.authToken&&(h._authToken=this.http.authToken);for(const g in h)h.hasOwnProperty(g)&&(x+=(x?"&":"")+`${g}=${h[g]}`);m==="h3"&&(m="http");let y=this.settings.secure?`${m}s://`:`${m}://`;d.publicAddress?y+=`${d.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${y}/${d.processId}/${d.roomId}?${x}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(d=""){const h=d.startsWith("/")?d:`/${d}`;let m=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${h}`;return this.settings.searchParams&&(m+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(m)):m}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",za.Client=l,za.MatchMakeError=a,za}var jl={},jh;function ux(){if(jh)return jl;jh=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return jl.NoneSerializer=n,jl}var Yh;function fx(){return Yh||(Yh=1,(function(n){iv();var e=lx(),t=_g(),i=Fg(),r=Bg(),s=al(),o=yg(),a=ux(),c=vg();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(Nl)),Nl}var dx=fx();const yd="179",hx=0,Kh=1,px=2,kg=1,mx=2,Ji=3,Or=0,Vn=1,Kn=2,Ir=0,Ni=1,hs=2,Jh=3,Zh=4,gx=5,ns=100,_x=101,vx=102,xx=103,yx=104,Sx=200,Ex=201,Mx=202,bx=203,Ju=204,Zu=205,Tx=206,wx=207,Ax=208,Cx=209,Rx=210,Px=211,Ix=212,Dx=213,Lx=214,Qu=0,ef=1,tf=2,ao=3,nf=4,rf=5,sf=6,of=7,zg=0,Ox=1,Nx=2,Dr=0,Ux=1,Fx=2,Bx=3,kx=4,zx=5,Vx=6,Hx=7,Vg=300,co=301,lo=302,af=303,cf=304,fl=306,lf=1e3,ss=1001,uf=1002,_i=1003,Gx=1004,qa=1005,Ii=1006,Yl=1007,os=1008,ur=1009,Hg=1010,Gg=1011,ta=1012,Sd=1013,ps=1014,sr=1015,Sa=1016,Ed=1017,Md=1018,na=1020,Wg=35902,$g=1021,qg=1022,gi=1023,ia=1026,ra=1027,Xg=1028,bd=1029,jg=1030,Td=1031,wd=1033,Mc=33776,bc=33777,Tc=33778,wc=33779,ff=35840,df=35841,hf=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37808,xf=37809,yf=37810,Sf=37811,Ef=37812,Mf=37813,bf=37814,Tf=37815,wf=37816,Af=37817,Cf=37818,Rf=37819,Pf=37820,If=37821,Ac=36492,Df=36494,Lf=36495,Yg=36283,Of=36284,Nf=36285,Uf=36286,Wx=3200,$x=3201,qx=0,Xx=1,wr="",Yn="srgb",uo="srgb-linear",kc="linear",Lt="srgb",Ls=7680,Qh=519,jx=512,Yx=513,Kx=514,Kg=515,Jx=516,Zx=517,Qx=518,ey=519,ep=35044,tp="300 es",Di=2e3,zc=2001;class go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,Ff=180/Math.PI;function _o(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function ty(n,e){return(n%e+e)%e}function Jl(n,e,t){return(1-t)*n+t*e}function Ro(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ea{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(d!==y||c!==h||l!==m||f!==x){let v=1-a;const g=c*h+l*m+f*x+d*y,R=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const N=Math.sqrt(C),k=Math.atan2(N,g*R);v=Math.sin(v*k)/N,a=Math.sin(a*k)/N}const b=a*R;if(c=c*v+h*b,l=l*v+m*b,f=f*v+x*b,d=d*v+y*b,v===1-a){const N=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=N,l*=N,f*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+f*d+c*m-l*h,e[t+1]=c*x+f*h+l*d-a*m,e[t+2]=l*x+f*m+a*h-c*d,e[t+3]=f*x-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=h*f*d+l*m*x,this._y=l*m*d-h*f*x,this._z=l*f*x+h*m*d,this._w=l*f*d-h*m*x;break;case"YXZ":this._x=h*f*d+l*m*x,this._y=l*m*d-h*f*x,this._z=l*f*x-h*m*d,this._w=l*f*d+h*m*x;break;case"ZXY":this._x=h*f*d-l*m*x,this._y=l*m*d+h*f*x,this._z=l*f*x+h*m*d,this._w=l*f*d-h*m*x;break;case"ZYX":this._x=h*f*d-l*m*x,this._y=l*m*d+h*f*x,this._z=l*f*x-h*m*d,this._w=l*f*d+h*m*x;break;case"YZX":this._x=h*f*d+l*m*x,this._y=l*m*d+h*f*x,this._z=l*f*x-h*m*d,this._w=l*f*d-h*m*x;break;case"XZY":this._x=h*f*d-l*m*x,this._y=l*m*d-h*f*x,this._z=l*f*x+h*m*d,this._w=l*f*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),d=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),f=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*f,this.y=i+c*f+a*l-s*d,this.z=r+c*d+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new Z,np=new Ea;class ht{constructor(e,t,i,r,s,o,a,c,l){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],d=i[7],h=i[2],m=i[5],x=i[8],y=r[0],v=r[3],g=r[6],R=r[1],C=r[4],b=r[7],N=r[2],k=r[5],B=r[8];return s[0]=o*y+a*R+c*N,s[3]=o*v+a*C+c*k,s[6]=o*g+a*b+c*B,s[1]=l*y+f*R+d*N,s[4]=l*v+f*C+d*k,s[7]=l*g+f*b+d*B,s[2]=h*y+m*R+x*N,s[5]=h*v+m*C+x*k,s[8]=h*g+m*b+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],d=f*o-a*l,h=a*c-f*s,m=l*s-o*c,x=t*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*l-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new ht;function Jg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ny(){const n=Vc("canvas");return n.style.display="block",n}const ip={};function eo(n){n in ip||(ip[n]=!0,console.warn(n))}function iy(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const rp=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){const n={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Lt&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wr?kc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[uo]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:rp,fromXYZ:sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:rp,fromXYZ:sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),n}const wt=ry();function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function to(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class sy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Os===void 0&&(Os=Vc("canvas")),Os.width=e.width,Os.height=e.height;const r=Os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eu(r[o].image)):s.push(eu(r[o]))}else s=eu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;const tu=new Z;class Hn extends go{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=ss,r=ss,s=Ii,o=os,a=gi,c=ur,l=Hn.DEFAULT_ANISOTROPY,f=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=_o(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Vg;Hn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],d=c[8],h=c[1],m=c[5],x=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+v)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,b=(m+1)/2,N=(g+1)/2,k=(f+h)/4,B=(d+y)/4,J=(x+v)/4;return C>b&&C>N?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=k/i,s=B/i):b>N?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=k/r,s=J/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=B/s,r=J/s),this.set(i,r,s,t),this}let R=Math.sqrt((v-x)*(v-x)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(R)<.001&&(R=1),this.x=(v-x)/R,this.y=(d-y)/R,this.z=(h-f)/R,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends go{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Hn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ad(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends cy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zg extends Hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends Hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ja.subVectors(this.max,Po),Ns.subVectors(e.a,Po),Us.subVectors(e.b,Po),Fs.subVectors(e.c,Po),xr.subVectors(Us,Ns),yr.subVectors(Fs,Us),Wr.subVectors(Ns,Fs);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Wr.z,Wr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Wr.z,0,-Wr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Wr.y,Wr.x,0];return!nu(t,Ns,Us,Fs,ja)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,Ns,Us,Fs,ja))?!1:(Ya.crossVectors(xr,yr),t=[Ya.x,Ya.y,Ya.z],nu(t,Ns,Us,Fs,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],fi=new Z,Xa=new Ma,Ns=new Z,Us=new Z,Fs=new Z,xr=new Z,yr=new Z,Wr=new Z,Po=new Z,ja=new Z,Ya=new Z,$r=new Z;function nu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$r.fromArray(n,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),c=e.dot($r),l=t.dot($r),f=i.dot($r);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const uy=new Ma,Io=new Z,iu=new Z;class Cd{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(iu)),this.expandByPoint(Io.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qi=new Z,ru=new Z,Ka=new Z,Sr=new Z,su=new Z,Ja=new Z,ou=new Z;class fy{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ru.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(ru);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=Sr.dot(this.direction),c=-Sr.dot(Ka),l=Sr.lengthSq(),f=Math.abs(1-o*o);let d,h,m,x;if(f>0)if(d=o*c-a,h=o*a-c,x=s*f,d>=0)if(h>=-x)if(h<=x){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ru).addScaledVector(Ka,h),m}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,r,s){su.subVectors(t,e),Ja.subVectors(i,e),ou.crossVectors(su,Ja);let o=this.direction.dot(ou),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const c=a*this.direction.dot(Ja.crossVectors(Sr,Ja));if(c<0)return null;const l=a*this.direction.dot(su.cross(Sr));if(l<0||c+l>o)return null;const f=-a*Sr.dot(ou);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,t,i,r,s,o,a,c,l,f,d,h,m,x,y,v){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,f,d,h,m,x,y,v)}set(e,t,i,r,s,o,a,c,l,f,d,h,m,x,y,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=d,g[14]=h,g[3]=m,g[7]=x,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,x=a*f,y=a*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=m+x*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,m=c*d,x=l*f,y=l*d;t[0]=h+y*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=m*a-x,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,m=c*d,x=l*f,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*f,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,m=o*d,x=a*f,y=a*d;t[0]=c*f,t[4]=x*l-m,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,x=a*c,y=a*l;t[0]=c*f,t[4]=y-h*d,t[8]=x*d+m,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*d+x,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*c,m=o*l,x=a*c,y=a*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=h*d+y,t[5]=o*f,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*f,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,hy)}lookAt(e,t,i){const r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Er.crossVectors(i,Xn),Er.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Er.crossVectors(i,Xn)),Er.normalize(),Za.crossVectors(Xn,Er),r[0]=Er.x,r[4]=Za.x,r[8]=Xn.x,r[1]=Er.y,r[5]=Za.y,r[9]=Xn.y,r[2]=Er.z,r[6]=Za.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],d=i[5],h=i[9],m=i[13],x=i[2],y=i[6],v=i[10],g=i[14],R=i[3],C=i[7],b=i[11],N=i[15],k=r[0],B=r[4],J=r[8],I=r[12],P=r[1],U=r[5],ye=r[9],D=r[13],W=r[2],$=r[6],F=r[10],V=r[14],z=r[3],Se=r[7],Ee=r[11],Re=r[15];return s[0]=o*k+a*P+c*W+l*z,s[4]=o*B+a*U+c*$+l*Se,s[8]=o*J+a*ye+c*F+l*Ee,s[12]=o*I+a*D+c*V+l*Re,s[1]=f*k+d*P+h*W+m*z,s[5]=f*B+d*U+h*$+m*Se,s[9]=f*J+d*ye+h*F+m*Ee,s[13]=f*I+d*D+h*V+m*Re,s[2]=x*k+y*P+v*W+g*z,s[6]=x*B+y*U+v*$+g*Se,s[10]=x*J+y*ye+v*F+g*Ee,s[14]=x*I+y*D+v*V+g*Re,s[3]=R*k+C*P+b*W+N*z,s[7]=R*B+C*U+b*$+N*Se,s[11]=R*J+C*ye+b*F+N*Ee,s[15]=R*I+C*D+b*V+N*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],d=e[6],h=e[10],m=e[14],x=e[3],y=e[7],v=e[11],g=e[15];return x*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*f-s*c*f)+v*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*f-i*l*f)+g*(-r*a*f-t*c*d+t*a*h+r*o*d-i*o*h+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],d=e[9],h=e[10],m=e[11],x=e[12],y=e[13],v=e[14],g=e[15],R=d*v*l-y*h*l+y*c*m-a*v*m-d*c*g+a*h*g,C=x*h*l-f*v*l-x*c*m+o*v*m+f*c*g-o*h*g,b=f*y*l-x*d*l+x*a*m-o*y*m-f*a*g+o*d*g,N=x*d*c-f*y*c-x*a*h+o*y*h+f*a*v-o*d*v,k=t*R+i*C+r*b+s*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return e[0]=R*B,e[1]=(y*h*s-d*v*s-y*r*m+i*v*m+d*r*g-i*h*g)*B,e[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*B,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*B,e[4]=C*B,e[5]=(f*v*s-x*h*s+x*r*m-t*v*m-f*r*g+t*h*g)*B,e[6]=(x*c*s-o*v*s-x*r*l+t*v*l+o*r*g-t*c*g)*B,e[7]=(o*h*s-f*c*s+f*r*l-t*h*l-o*r*m+t*c*m)*B,e[8]=b*B,e[9]=(x*d*s-f*y*s-x*i*m+t*y*m+f*i*g-t*d*g)*B,e[10]=(o*y*s-x*a*s+x*i*l-t*y*l-o*i*g+t*a*g)*B,e[11]=(f*a*s-o*d*s-f*i*l+t*d*l+o*i*m-t*a*m)*B,e[12]=N*B,e[13]=(f*y*r-x*d*r+x*i*h-t*y*h-f*i*v+t*d*v)*B,e[14]=(x*a*r-o*y*r-x*i*c+t*y*c+o*i*v-t*a*v)*B,e[15]=(o*d*r-f*a*r+f*i*c-t*d*c-o*i*h+t*a*h)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,d=a+a,h=s*l,m=s*f,x=s*d,y=o*f,v=o*d,g=a*d,R=c*l,C=c*f,b=c*d,N=i.x,k=i.y,B=i.z;return r[0]=(1-(y+g))*N,r[1]=(m+b)*N,r[2]=(x-C)*N,r[3]=0,r[4]=(m-b)*k,r[5]=(1-(h+g))*k,r[6]=(v+R)*k,r[7]=0,r[8]=(x+C)*B,r[9]=(v-R)*B,r[10]=(1-(h+y))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const l=1/s,f=1/o,d=1/a;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=f,di.elements[5]*=f,di.elements[6]*=f,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Di,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let x,y;if(c)x=s/(o-s),y=o*s/(o-s);else if(a===Di)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===zc)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Di,c=!1){const l=this.elements,f=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,y;if(c)x=1/(o-s),y=o/(o-s);else if(a===Di)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===zc)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bs=new Z,di=new on,dy=new Z(0,0,0),hy=new Z(1,1,1),Er=new Z,Za=new Z,Xn=new Z,op=new on,ap=new Ea;class fr{constructor(e=0,t=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const cp=new Z,ks=new Ea,Xi=new on,Qa=new Z,Do=new Z,my=new Z,gy=new Ea,lp=new Z(1,0,0),up=new Z(0,1,0),fp=new Z(0,0,1),dp={type:"added"},_y={type:"removed"},zs={type:"childadded",child:null},au={type:"childremoved",child:null};class Qn extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new Z,t=new fr,i=new Ea,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new ht}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Do,Qa,this.up):Xi.lookAt(Qa,Do,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Xi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dp),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_y),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dp),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qn.DEFAULT_UP=new Z(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Z,ji=new Z,cu=new Z,Yi=new Z,Vs=new Z,Hs=new Z,hp=new Z,lu=new Z,uu=new Z,fu=new Z,du=new nn,hu=new nn,pu=new nn;class mi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hi.subVectors(e,t),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hi.subVectors(r,t),ji.subVectors(i,t),cu.subVectors(e,t);const o=hi.dot(hi),a=hi.dot(ji),c=hi.dot(cu),l=ji.dot(ji),f=ji.dot(cu),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(l*c-a*f)*h,x=(o*f-a*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return du.setScalar(0),hu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(hu,s.y),o.addScaledVector(pu,s.z),o}static isFrontFacing(e,t,i,r){return hi.subVectors(i,t),ji.subVectors(e,t),hi.cross(ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vs.subVectors(r,i),Hs.subVectors(s,i),lu.subVectors(e,i);const c=Vs.dot(lu),l=Hs.dot(lu);if(c<=0&&l<=0)return t.copy(i);uu.subVectors(e,r);const f=Vs.dot(uu),d=Hs.dot(uu);if(f>=0&&d<=f)return t.copy(r);const h=c*d-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Vs,o);fu.subVectors(e,s);const m=Vs.dot(fu),x=Hs.dot(fu);if(x>=0&&m<=x)return t.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(Hs,a);const v=f*x-m*d;if(v<=0&&d-f>=0&&m-x>=0)return hp.subVectors(s,r),a=(d-f)/(d-f+(m-x)),t.copy(r).addScaledVector(hp,a);const g=1/(v+y+h);return o=y*g,a=h*g,t.copy(i).addScaledVector(Vs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function mu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class It{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=ty(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mu(o,s,e+1/3),this.g=mu(o,s,e),this.b=mu(o,s,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const i=e0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return wt.workingToColorSpace(wn.copy(this),e),Math.round(vt(wn.r*255,0,255))*65536+Math.round(vt(wn.g*255,0,255))*256+Math.round(vt(wn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Yn){wt.workingToColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(ec);const i=Jl(Mr.h,ec.h,t),r=Jl(Mr.s,ec.s,t),s=Jl(Mr.l,ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new It;It.NAMES=e0;let vy=0;class dl extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Ni,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Zu,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new Z,tc=new rt;let xy=0;class Ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ep,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ro(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),i=Bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),i=Bn(i,this.array),r=Bn(r,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),e}}class t0 extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class n0 extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yy=0;const ni=new on,gu=new Qn,Gs=new Z,jn=new Ma,Lo=new Ma,pn=new Z;class Mi extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jg(e)?n0:t0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(jn.min,Lo.min),jn.expandByPoint(pn),pn.addVectors(jn.max,Lo.max),jn.expandByPoint(pn)):(jn.expandByPoint(Lo.min),jn.expandByPoint(Lo.max))}jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)pn.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(e,l),pn.add(Gs)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let J=0;J<i.count;J++)a[J]=new Z,c[J]=new Z;const l=new Z,f=new Z,d=new Z,h=new rt,m=new rt,x=new rt,y=new Z,v=new Z;function g(J,I,P){l.fromBufferAttribute(i,J),f.fromBufferAttribute(i,I),d.fromBufferAttribute(i,P),h.fromBufferAttribute(s,J),m.fromBufferAttribute(s,I),x.fromBufferAttribute(s,P),f.sub(l),d.sub(l),m.sub(h),x.sub(h);const U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(U),v.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(U),a[J].add(y),a[I].add(y),a[P].add(y),c[J].add(v),c[I].add(v),c[P].add(v))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let J=0,I=R.length;J<I;++J){const P=R[J],U=P.start,ye=P.count;for(let D=U,W=U+ye;D<W;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const C=new Z,b=new Z,N=new Z,k=new Z;function B(J){N.fromBufferAttribute(r,J),k.copy(N);const I=a[J];C.copy(I),C.sub(N.multiplyScalar(N.dot(I))).normalize(),b.crossVectors(k,I);const U=b.dot(c[J])<0?-1:1;o.setXYZW(J,C.x,C.y,C.z,U)}for(let J=0,I=R.length;J<I;++J){const P=R[J],U=P.start,ye=P.count;for(let D=U,W=U+ye;D<W;D+=3)B(e.getX(D+0)),B(e.getX(D+1)),B(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,c=new Z,l=new Z,f=new Z,d=new Z;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),a.add(f),c.add(f),l.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,d=a.normalized,h=new l.constructor(c.length*f);let m=0,x=0;for(let y=0,v=c.length;y<v;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*f;for(let g=0;g<f;g++)h[x++]=l[m++]}return new Ui(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,d=l.length;f<d;f++){const h=l[f],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new on,qr=new fy,nc=new Cd,mp=new Z,ic=new Z,rc=new Z,sc=new Z,_u=new Z,oc=new Z,gp=new Z,ac=new Z;class st extends Qn{constructor(e=new Mi,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){oc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],d=s[c];f!==0&&(_u.fromBufferAttribute(d,e),o?oc.addScaledVector(_u,f):oc.addScaledVector(_u.sub(t),f))}t.add(oc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(nc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(nc,mp)===null||qr.origin.distanceToSquared(mp)>(e.far-e.near)**2))&&(pp.copy(s).invert(),qr.copy(e.ray).applyMatrix4(pp),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const v=h[x],g=o[v.materialIndex],R=Math.max(v.start,m.start),C=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let b=R,N=C;b<N;b+=3){const k=a.getX(b),B=a.getX(b+1),J=a.getX(b+2);r=lc(this,g,e,i,l,f,d,k,B,J),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const R=a.getX(v),C=a.getX(v+1),b=a.getX(v+2);r=lc(this,o,e,i,l,f,d,R,C,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const v=h[x],g=o[v.materialIndex],R=Math.max(v.start,m.start),C=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let b=R,N=C;b<N;b+=3){const k=b,B=b+1,J=b+2;r=lc(this,g,e,i,l,f,d,k,B,J),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const R=v,C=v+1,b=v+2;r=lc(this,o,e,i,l,f,d,R,C,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Sy(n,e,t,i,r,s,o,a){let c;if(e.side===Vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Or,a),c===null)return null;ac.copy(a),ac.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ac);return l<t.near||l>t.far?null:{distance:l,point:ac.clone(),object:n}}function lc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ic),n.getVertexPosition(c,rc),n.getVertexPosition(l,sc);const f=Sy(n,e,t,i,ic,rc,sc,gp);if(f){const d=new Z;mi.getBarycoord(gp,ic,rc,sc,d),r&&(f.uv=mi.getInterpolatedAttribute(r,a,c,l,d,new rt)),s&&(f.uv1=mi.getInterpolatedAttribute(s,a,c,l,d,new rt)),o&&(f.normal=mi.getInterpolatedAttribute(o,a,c,l,d,new Z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new Z,materialIndex:0};mi.getNormal(ic,rc,sc,h.normal),f.face=h,f.barycoord=d}return f}class _n extends Mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(d,2));function x(y,v,g,R,C,b,N,k,B,J,I){const P=b/B,U=N/J,ye=b/2,D=N/2,W=k/2,$=B+1,F=J+1;let V=0,z=0;const Se=new Z;for(let Ee=0;Ee<F;Ee++){const Re=Ee*U-D;for(let Ne=0;Ne<$;Ne++){const ft=Ne*P-ye;Se[y]=ft*R,Se[v]=Re*C,Se[g]=W,l.push(Se.x,Se.y,Se.z),Se[y]=0,Se[v]=0,Se[g]=k>0?1:-1,f.push(Se.x,Se.y,Se.z),d.push(Ne/B),d.push(1-Ee/J),V+=1}}for(let Ee=0;Ee<J;Ee++)for(let Re=0;Re<B;Re++){const Ne=h+Re+$*Ee,ft=h+Re+$*(Ee+1),dt=h+(Re+1)+$*(Ee+1),ge=h+(Re+1)+$*Ee;c.push(Ne,ft,ge),c.push(ft,dt,ge),z+=6}a.addGroup(m,z,I),m+=z,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const i=fo(n[t]);for(const r in i)e[r]=i[r]}return e}function Ey(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function i0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const My={clone:fo,merge:Dn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class r0 extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new Z,_p=new rt,vp=new rt;class pi extends r0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ff*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ff*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,_p,vp),t.subVectors(vp,_p)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,$s=1;class wy extends Qn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pi(Ws,$s,e,t);r.layers=this.layers,this.add(r);const s=new pi(Ws,$s,e,t);s.layers=this.layers,this.add(s);const o=new pi(Ws,$s,e,t);o.layers=this.layers,this.add(o);const a=new pi(Ws,$s,e,t);a.layers=this.layers,this.add(a);const c=new pi(Ws,$s,e,t);c.layers=this.layers,this.add(c);const l=new pi(Ws,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class s0 extends Hn{constructor(e=[],t=co,i,r,s,o,a,c,l,f){super(e,t,i,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new s0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _n(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Ir});s.uniforms.tEquirect.value=t;const o=new st(r,s),a=t.minFilter;return t.minFilter===os&&(t.minFilter=Ii),new wy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ft extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,i),g=this._getHandJoint(l,y);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ry extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xu=new Z,Py=new Z,Iy=new ht;class Qr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xu.subVectors(i,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Iy.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Cd,Dy=new rt(.5,.5),uc=new Z;class o0{constructor(e=new Qr,t=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],f=s[4],d=s[5],h=s[6],m=s[7],x=s[8],y=s[9],v=s[10],g=s[11],R=s[12],C=s[13],b=s[14],N=s[15];if(r[0].setComponents(l-o,m-f,g-x,N-R).normalize(),r[1].setComponents(l+o,m+f,g+x,N+R).normalize(),r[2].setComponents(l+a,m+d,g+y,N+C).normalize(),r[3].setComponents(l-a,m-d,g-y,N-C).normalize(),i)r[4].setComponents(c,h,v,b).normalize(),r[5].setComponents(l-c,m-h,g-v,N-b).normalize();else if(r[4].setComponents(l-c,m-h,g-v,N-b).normalize(),t===Di)r[5].setComponents(l+c,m+h,g+v,N+b).normalize();else if(t===zc)r[5].setComponents(c,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const t=Dy.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class a0 extends Hn{constructor(e,t,i=ps,r,s,o,a=_i,c=_i,l,f=ia,d=1){if(f!==ia&&f!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zi extends Mi{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new Z,f=new rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const m=i+d/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new un(o,3)),this.setAttribute("normal",new un(a,3)),this.setAttribute("uv",new un(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,m=(o-f)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new rt:new Z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Z,r=[],s=[],o=[],a=new Z,c=new on;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new Z)}s[0]=new Z,o[0]=new Z;let l=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=l&&(l=f,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(vt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(vt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rd extends Vi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new rt){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*f-m*d+this.aX,l=h*d+m*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ly extends Rd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pd(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,d){let h=(o-s)/l-(a-s)/(l+f)+(a-o)/f,m=(a-o)/f-(c-o)/(f+d)+(c-a)/d;h*=f,m*=f,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const fc=new Z,yu=new Pd,Su=new Pd,Eu=new Pd;class Oy extends Vi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,f;this.closed||a>0?l=r[(a-1)%s]:(fc.subVectors(r[0],r[1]).add(r[0]),l=fc);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(fc.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m);y<1e-4&&(y=1),x<1e-4&&(x=y),v<1e-4&&(v=y),yu.initNonuniformCatmullRom(l.x,d.x,h.x,f.x,x,y,v),Su.initNonuniformCatmullRom(l.y,d.y,h.y,f.y,x,y,v),Eu.initNonuniformCatmullRom(l.z,d.z,h.z,f.z,x,y,v)}else this.curveType==="catmullrom"&&(yu.initCatmullRom(l.x,d.x,h.x,f.x,this.tension),Su.initCatmullRom(l.y,d.y,h.y,f.y,this.tension),Eu.initCatmullRom(l.z,d.z,h.z,f.z,this.tension));return i.set(yu.calc(c),Su.calc(c),Eu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Ny(n,e){const t=1-n;return t*t*e}function Uy(n,e){return 2*(1-n)*n*e}function Fy(n,e){return n*n*e}function Ho(n,e,t,i){return Ny(n,e)+Uy(n,t)+Fy(n,i)}function By(n,e){const t=1-n;return t*t*t*e}function ky(n,e){const t=1-n;return 3*t*t*n*e}function zy(n,e){return 3*(1-n)*n*n*e}function Vy(n,e){return n*n*n*e}function Go(n,e,t,i,r){return By(n,e)+ky(n,t)+zy(n,i)+Vy(n,r)}class c0 extends Vi{constructor(e=new rt,t=new rt,i=new rt,r=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new rt){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Go(e,r.x,s.x,o.x,a.x),Go(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hy extends Vi{constructor(e=new Z,t=new Z,i=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Go(e,r.x,s.x,o.x,a.x),Go(e,r.y,s.y,o.y,a.y),Go(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l0 extends Vi{constructor(e=new rt,t=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new rt){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new rt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gy extends Vi{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u0 extends Vi{constructor(e=new rt,t=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new rt){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wy extends Vi{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y),Ho(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f0 extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new rt){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(xp(a,c.x,l.x,f.x,d.x),xp(a,c.y,l.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new rt().fromArray(r))}return this}}var yp=Object.freeze({__proto__:null,ArcCurve:Ly,CatmullRomCurve3:Oy,CubicBezierCurve:c0,CubicBezierCurve3:Hy,EllipseCurve:Rd,LineCurve:l0,LineCurve3:Gy,QuadraticBezierCurve:u0,QuadraticBezierCurve3:Wy,SplineCurve:f0});class $y extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const f=c[l];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new yp[r.type]().fromJSON(r))}return this}}class Sp extends $y{constructor(e){super(),this.type="Path",this.currentPoint=new rt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new l0(this.currentPoint.clone(),new rt(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new u0(this.currentPoint.clone(),new rt(e,t),new rt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new c0(this.currentPoint.clone(),new rt(e,t),new rt(i,r),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new f0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Rd(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hl extends Sp{constructor(e){super(e),this.uuid=_o(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Sp().fromJSON(r))}return this}}function qy(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=d0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Jy(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let f=-1/0,d=-1/0;for(let h=t;h<r;h+=t){const m=n[h],x=n[h+1];m<a&&(a=m),x<c&&(c=x),m>f&&(f=m),x>d&&(d=x)}l=Math.max(f-a,d-c),l=l!==0?32767/l:0}return sa(s,o,t,a,c,l,0),o}function d0(n,e,t,i,r){let s;if(r===cS(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ep(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ep(o/i|0,n[o],n[o+1],s);return s&&ho(s,s.next)&&(aa(s),s=s.next),s}function gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ho(t,t.next)||qt(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&nS(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?jy(n,i,r,s):Xy(n)){e.push(c.i,n.i,l.i),aa(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Yy(gs(n),e),sa(n,e,t,i,r,s,2)):o===2&&Ky(n,e,t,i,r,s):sa(gs(n),e,t,i,r,s,1);break}}}function Xy(n){const e=n.prev,t=n,i=n.next;if(qt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,f=Math.min(r,s,o),d=Math.min(a,c,l),h=Math.max(r,s,o),m=Math.max(a,c,l);let x=i.next;for(;x!==e;){if(x.x>=f&&x.x<=h&&x.y>=d&&x.y<=m&&Fo(r,a,s,c,o,l,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function jy(n,e,t,i){const r=n.prev,s=n,o=n.next;if(qt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,f=r.y,d=s.y,h=o.y,m=Math.min(a,c,l),x=Math.min(f,d,h),y=Math.max(a,c,l),v=Math.max(f,d,h),g=Bf(m,x,e,t,i),R=Bf(y,v,e,t,i);let C=n.prevZ,b=n.nextZ;for(;C&&C.z>=g&&b&&b.z<=R;){if(C.x>=m&&C.x<=y&&C.y>=x&&C.y<=v&&C!==r&&C!==o&&Fo(a,f,c,d,l,h,C.x,C.y)&&qt(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=m&&b.x<=y&&b.y>=x&&b.y<=v&&b!==r&&b!==o&&Fo(a,f,c,d,l,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=g;){if(C.x>=m&&C.x<=y&&C.y>=x&&C.y<=v&&C!==r&&C!==o&&Fo(a,f,c,d,l,h,C.x,C.y)&&qt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=R;){if(b.x>=m&&b.x<=y&&b.y>=x&&b.y<=v&&b!==r&&b!==o&&Fo(a,f,c,d,l,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Yy(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ho(i,r)&&p0(i,t,t.next,r)&&oa(i,r)&&oa(r,i)&&(e.push(i.i,t.i,r.i),aa(t),aa(t.next),t=n=r),t=t.next}while(t!==n);return gs(t)}function Ky(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sS(o,a)){let c=m0(o,a);o=gs(o,o.next),c=gs(c,c.next),sa(o,e,t,i,r,s,0),sa(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Jy(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=d0(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(rS(l))}r.sort(Zy);for(let s=0;s<r.length;s++)t=Qy(r[s],t);return t}function Zy(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Qy(n,e){const t=eS(n,e);if(!t)return e;const i=m0(t,n);return gs(i,i.next),gs(t,t.next)}function eS(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ho(n,t))return t;do{if(ho(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let f=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&h0(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);oa(t,n)&&(d<f||d===f&&(t.x>o.x||t.x===o.x&&tS(o,t)))&&(o=t,f=d)}t=t.next}while(t!==a);return o}function tS(n,e){return qt(n.prev,n,e.prev)<0&&qt(e.next,n,n.next)<0}function nS(n,e,t,i){let r=n;do r.z===0&&(r.z=Bf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,iS(r)}function iS(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Bf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function h0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Fo(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&h0(n,e,t,i,r,s,o,a)}function sS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!oS(n,e)&&(oa(n,e)&&oa(e,n)&&aS(n,e)&&(qt(n.prev,n,e.prev)||qt(n,e.prev,e))||ho(n,e)&&qt(n.prev,n,n.next)>0&&qt(e.prev,e,e.next)>0)}function qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ho(n,e){return n.x===e.x&&n.y===e.y}function p0(n,e,t,i){const r=hc(qt(n,e,t)),s=hc(qt(n,e,i)),o=hc(qt(t,i,n)),a=hc(qt(t,i,e));return!!(r!==s&&o!==a||r===0&&dc(n,t,e)||s===0&&dc(n,i,e)||o===0&&dc(t,n,i)||a===0&&dc(t,e,i))}function dc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function hc(n){return n>0?1:n<0?-1:0}function oS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&p0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function oa(n,e){return qt(n.prev,n,n.next)<0?qt(n,e,n.next)>=0&&qt(n,n.prev,e)>=0:qt(n,e,n.prev)<0||qt(n,n.next,e)<0}function aS(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function m0(n,e){const t=kf(n.i,n.x,n.y),i=kf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ep(n,e,t,i){const r=kf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cS(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class lS{static triangulate(e,t,i=2){return qy(e,t,i)}}class Wo{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Wo.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Mp(e),bp(i,e);let o=e.length;t.forEach(Mp);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,bp(i,t[c]);const a=lS.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Mp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function bp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ba extends Mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,d=e/a,h=t/c,m=[],x=[],y=[],v=[];for(let g=0;g<f;g++){const R=g*h-o;for(let C=0;C<l;C++){const b=C*d-s;x.push(b,-R,0),y.push(0,0,1),v.push(C/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<a;R++){const C=R+l*g,b=R+l*(g+1),N=R+1+l*(g+1),k=R+1+l*g;m.push(C,b,k),m.push(b,N,k)}this.setIndex(m),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class ai extends Mi{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],f=[];let d=e;const h=(t-e)/r,m=new Z,x=new rt;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const g=s+v/i*o;m.x=d*Math.cos(g),m.y=d*Math.sin(g),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,f.push(x.x,x.y)}d+=h}for(let y=0;y<r;y++){const v=y*(i+1);for(let g=0;g<i;g++){const R=g+v,C=R,b=R+i+1,N=R+i+2,k=R+1;a.push(C,b,k),a.push(b,N,k)}}this.setIndex(a),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(l,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class po extends Mi{constructor(e=new hl([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new un(r,3)),this.setAttribute("normal",new un(s,3)),this.setAttribute("uv",new un(o,2));function l(f){const d=r.length/3,h=f.extractPoints(t);let m=h.shape;const x=h.holes;Wo.isClockWise(m)===!1&&(m=m.reverse());for(let v=0,g=x.length;v<g;v++){const R=x[v];Wo.isClockWise(R)===!0&&(x[v]=R.reverse())}const y=Wo.triangulateShape(m,x);for(let v=0,g=x.length;v<g;v++){const R=x[v];m=m.concat(R)}for(let v=0,g=m.length;v<g;v++){const R=m[v];r.push(R.x,R.y,0),s.push(0,0,1),o.push(R.x,R.y)}for(let v=0,g=y.length;v<g;v++){const R=y[v],C=R[0]+d,b=R[1]+d,N=R[2]+d;i.push(C,b,N),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return uS(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new po(i,e.curveSegments)}}function uS(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Hc extends Mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const f=[],d=new Z,h=new Z,m=[],x=[],y=[],v=[];for(let g=0;g<=i;g++){const R=[],C=g/i;let b=0;g===0&&o===0?b=.5/t:g===i&&c===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const k=N/t;d.x=-e*Math.cos(r+k*s)*Math.sin(o+C*a),d.y=e*Math.cos(o+C*a),d.z=e*Math.sin(r+k*s)*Math.sin(o+C*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),v.push(k+b,1-C),R.push(l++)}f.push(R)}for(let g=0;g<i;g++)for(let R=0;R<t;R++){const C=f[g][R+1],b=f[g][R],N=f[g+1][R],k=f[g+1][R+1];(g!==0||o>0)&&m.push(C,b,k),(g!==i-1||c<Math.PI)&&m.push(b,N,k)}this.setIndex(m),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fS extends dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dS extends dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class g0 extends r0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hS extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tp(n,e,t,i){const r=pS(i);switch(t){case $g:return n*e;case Xg:return n*e/r.components*r.byteLength;case bd:return n*e/r.components*r.byteLength;case jg:return n*e*2/r.components*r.byteLength;case Td:return n*e*2/r.components*r.byteLength;case qg:return n*e*3/r.components*r.byteLength;case gi:return n*e*4/r.components*r.byteLength;case wd:return n*e*4/r.components*r.byteLength;case Mc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case df:case pf:return Math.max(n,16)*Math.max(e,8)/4;case ff:case hf:return Math.max(n,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Df:case Lf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yg:case Of:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nf:case Uf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pS(n){switch(n){case ur:case Hg:return{byteLength:1,components:1};case ta:case Gg:case Sa:return{byteLength:2,components:1};case Ed:case Md:return{byteLength:2,components:4};case ps:case Sd:case sr:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function _0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mS(n){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const f=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,f);else{d.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<d.length;m++){const x=d[h],y=d[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let m=0,x=d.length;m<x;m++){const y=d[m];n.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var gS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_S=`#ifdef USE_ALPHAHASH
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
#endif`,vS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
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
#endif`,MS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RS=`#ifdef USE_IRIDESCENCE
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
#endif`,PS=`#ifdef USE_BUMPMAP
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kS=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,zS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,pE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,eM=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,tM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uM=`#ifdef USE_TRANSMISSION
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
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
}`,EM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,MM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`uniform float scale;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 diffuse;
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
}`,IM=`#define LAMBERT
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
}`,DM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,LM=`#define MATCAP
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
}`,OM=`#define MATCAP
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
}`,NM=`#define NORMAL
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
}`,UM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FM=`#define PHONG
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
}`,BM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,kM=`#define STANDARD
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
}`,zM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,VM=`#define TOON
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
}`,HM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,GM=`uniform float size;
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
}`,WM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,qM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,XM=`uniform float rotation;
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
}`,jM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:gS,alphahash_pars_fragment:_S,alphamap_fragment:vS,alphamap_pars_fragment:xS,alphatest_fragment:yS,alphatest_pars_fragment:SS,aomap_fragment:ES,aomap_pars_fragment:MS,batching_pars_vertex:bS,batching_vertex:TS,begin_vertex:wS,beginnormal_vertex:AS,bsdfs:CS,iridescence_fragment:RS,bumpmap_pars_fragment:PS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:LS,clipping_planes_vertex:OS,color_fragment:NS,color_pars_fragment:US,color_pars_vertex:FS,color_vertex:BS,common:kS,cube_uv_reflection_fragment:zS,defaultnormal_vertex:VS,displacementmap_pars_vertex:HS,displacementmap_vertex:GS,emissivemap_fragment:WS,emissivemap_pars_fragment:$S,colorspace_fragment:qS,colorspace_pars_fragment:XS,envmap_fragment:jS,envmap_common_pars_fragment:YS,envmap_pars_fragment:KS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:cE,envmap_vertex:ZS,fog_vertex:QS,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:oE,lights_pars_begin:aE,lights_toon_fragment:lE,lights_toon_pars_fragment:uE,lights_phong_fragment:fE,lights_phong_pars_fragment:dE,lights_physical_fragment:hE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:_E,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:SE,map_fragment:EE,map_pars_fragment:ME,map_particle_fragment:bE,map_particle_pars_fragment:TE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:AE,morphinstance_vertex:CE,morphcolor_vertex:RE,morphnormal_vertex:PE,morphtarget_pars_vertex:IE,morphtarget_vertex:DE,normal_fragment_begin:LE,normal_fragment_maps:OE,normal_pars_fragment:NE,normal_pars_vertex:UE,normal_vertex:FE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:HE,opaque_fragment:GE,packing:WE,premultiplied_alpha_fragment:$E,project_vertex:qE,dithering_fragment:XE,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:ZE,shadowmap_vertex:QE,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:rM,specularmap_fragment:sM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:cM,transmission_fragment:lM,transmission_pars_fragment:uM,uv_pars_fragment:fM,uv_pars_vertex:dM,uv_vertex:hM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:_M,backgroundCube_frag:vM,cube_vert:xM,cube_frag:yM,depth_vert:SM,depth_frag:EM,distanceRGBA_vert:MM,distanceRGBA_frag:bM,equirect_vert:TM,equirect_frag:wM,linedashed_vert:AM,linedashed_frag:CM,meshbasic_vert:RM,meshbasic_frag:PM,meshlambert_vert:IM,meshlambert_frag:DM,meshmatcap_vert:LM,meshmatcap_frag:OM,meshnormal_vert:NM,meshnormal_frag:UM,meshphong_vert:FM,meshphong_frag:BM,meshphysical_vert:kM,meshphysical_frag:zM,meshtoon_vert:VM,meshtoon_frag:HM,points_vert:GM,points_frag:WM,shadow_vert:$M,shadow_frag:qM,sprite_vert:XM,sprite_frag:jM},Ge={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ai={basic:{uniforms:Dn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Dn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new It(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Dn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Dn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Dn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new It(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Dn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Dn([Ge.points,Ge.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Dn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Dn([Ge.common,Ge.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Dn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Dn([Ge.sprite,Ge.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Dn([Ge.common,Ge.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Dn([Ge.lights,Ge.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ai.physical={uniforms:Dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const pc={r:0,b:0,g:0},jr=new fr,YM=new on;function KM(n,e,t,i,r,s,o){const a=new It(0);let c=s===!0?0:1,l,f,d=null,h=0,m=null;function x(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function y(C){let b=!1;const N=x(C);N===null?g(a,c):N&&N.isColor&&(g(N,1),b=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(C,b){const N=x(b);N&&(N.isCubeTexture||N.mapping===fl)?(f===void 0&&(f=new st(new _n(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:fo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,B,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),jr.copy(b.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(jr)),f.material.toneMapped=wt.getTransfer(N.colorSpace)!==Lt,(d!==N||h!==N.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=N,h=N.version,m=n.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new st(new ba(2,2),new Nr({name:"BackgroundMaterial",uniforms:fo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=wt.getTransfer(N.colorSpace)!==Lt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||h!==N.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,h=N.version,m=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function g(C,b){C.getRGB(pc,i0(n)),i.buffers.color.setClear(pc.r,pc.g,pc.b,b,o)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,b=1){a.set(C),c=b,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,g(a,c)},render:y,addToRenderList:v,dispose:R}}function JM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(P,U,ye,D,W){let $=!1;const F=d(D,ye,U);s!==F&&(s=F,l(s.object)),$=m(P,D,ye,W),$&&x(P,D,ye,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(P,U,ye,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function f(P){return n.deleteVertexArray(P)}function d(P,U,ye){const D=ye.wireframe===!0;let W=i[P.id];W===void 0&&(W={},i[P.id]=W);let $=W[U.id];$===void 0&&($={},W[U.id]=$);let F=$[D];return F===void 0&&(F=h(c()),$[D]=F),F}function h(P){const U=[],ye=[],D=[];for(let W=0;W<t;W++)U[W]=0,ye[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:ye,attributeDivisors:D,object:P,attributes:{},index:null}}function m(P,U,ye,D){const W=s.attributes,$=U.attributes;let F=0;const V=ye.getAttributes();for(const z in V)if(V[z].location>=0){const Ee=W[z];let Re=$[z];if(Re===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),Ee===void 0||Ee.attribute!==Re||Re&&Ee.data!==Re.data)return!0;F++}return s.attributesNum!==F||s.index!==D}function x(P,U,ye,D){const W={},$=U.attributes;let F=0;const V=ye.getAttributes();for(const z in V)if(V[z].location>=0){let Ee=$[z];Ee===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor));const Re={};Re.attribute=Ee,Ee&&Ee.data&&(Re.data=Ee.data),W[z]=Re,F++}s.attributes=W,s.attributesNum=F,s.index=D}function y(){const P=s.newAttributes;for(let U=0,ye=P.length;U<ye;U++)P[U]=0}function v(P){g(P,0)}function g(P,U){const ye=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;ye[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),W[P]!==U&&(n.vertexAttribDivisor(P,U),W[P]=U)}function R(){const P=s.newAttributes,U=s.enabledAttributes;for(let ye=0,D=U.length;ye<D;ye++)U[ye]!==P[ye]&&(n.disableVertexAttribArray(ye),U[ye]=0)}function C(P,U,ye,D,W,$,F){F===!0?n.vertexAttribIPointer(P,U,ye,W,$):n.vertexAttribPointer(P,U,ye,D,W,$)}function b(P,U,ye,D){y();const W=D.attributes,$=ye.getAttributes(),F=U.defaultAttributeValues;for(const V in $){const z=$[V];if(z.location>=0){let Se=W[V];if(Se===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),Se!==void 0){const Ee=Se.normalized,Re=Se.itemSize,Ne=e.get(Se);if(Ne===void 0)continue;const ft=Ne.buffer,dt=Ne.type,ge=Ne.bytesPerElement,Ue=dt===n.INT||dt===n.UNSIGNED_INT||Se.gpuType===Sd;if(Se.isInterleavedBufferAttribute){const Ie=Se.data,Qe=Ie.stride,nt=Se.offset;if(Ie.isInstancedInterleavedBuffer){for(let it=0;it<z.locationSize;it++)g(z.location+it,Ie.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let it=0;it<z.locationSize;it++)v(z.location+it);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let it=0;it<z.locationSize;it++)C(z.location+it,Re/z.locationSize,dt,Ee,Qe*ge,(nt+Re/z.locationSize*it)*ge,Ue)}else{if(Se.isInstancedBufferAttribute){for(let Ie=0;Ie<z.locationSize;Ie++)g(z.location+Ie,Se.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)v(z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Ie=0;Ie<z.locationSize;Ie++)C(z.location+Ie,Re/z.locationSize,dt,Ee,Re*ge,Re/z.locationSize*Ie*ge,Ue)}}else if(F!==void 0){const Ee=F[V];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(z.location,Ee);break;case 3:n.vertexAttrib3fv(z.location,Ee);break;case 4:n.vertexAttrib4fv(z.location,Ee);break;default:n.vertexAttrib1fv(z.location,Ee)}}}}R()}function N(){J();for(const P in i){const U=i[P];for(const ye in U){const D=U[ye];for(const W in D)f(D[W].object),delete D[W];delete U[ye]}delete i[P]}}function k(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const ye in U){const D=U[ye];for(const W in D)f(D[W].object),delete D[W];delete U[ye]}delete i[P.id]}function B(P){for(const U in i){const ye=i[U];if(ye[P.id]===void 0)continue;const D=ye[P.id];for(const W in D)f(D[W].object),delete D[W];delete ye[P.id]}}function J(){I(),o=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:J,resetDefaultState:I,dispose:N,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:v,disableUnusedAttributes:R}}function ZM(n,e,t){let i;function r(l){i=l}function s(l,f){n.drawArrays(i,l,f),t.update(f,i,1)}function o(l,f,d){d!==0&&(n.drawArraysInstanced(i,l,f,d),t.update(f,i,d))}function a(l,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x];t.update(m,i,1)}function c(l,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)o(l[x],f[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,f,0,h,0,d);let x=0;for(let y=0;y<d;y++)x+=f[y]*h[y];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function QM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(B){return!(B!==gi&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){const J=B===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ur&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sr&&!J)}function c(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,k=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:N,maxSamples:k}}function eb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qr,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!v)s?f(null):l();else{const R=s?0:i,C=R*4;let b=g.clippingState||null;c.value=b,b=f(x,h,C,m);for(let N=0;N!==C;++N)b[N]=t[N];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,x){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=c.value,x!==!0||v===null){const g=m+y*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(v===null||v.length<g)&&(v=new Float32Array(g));for(let C=0,b=m;C!==y;++C,b+=4)o.copy(d[C]).applyMatrix4(R,a),o.normal.toArray(v,b),v[b+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function tb(n){let e=new WeakMap;function t(o,a){return a===af?o.mapping=co:a===cf&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===af||a===cf)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ay(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Qs=4,wp=[.125,.215,.35,.446,.526,.582],is=20,Mu=new g0,Ap=new It;let bu=null,Tu=0,wu=0,Au=!1;const es=(1+Math.sqrt(5))/2,qs=1/es,Cp=[new Z(-es,qs,0),new Z(es,qs,0),new Z(-qs,0,es),new Z(qs,0,es),new Z(0,es,-qs),new Z(0,es,qs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],nb=new Z;class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=nb}=s;bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Tu,wu),this._renderer.xr.enabled=Au,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Sa,format:gi,colorSpace:uo,depthBuffer:!1},r=Pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(s)),this._blurMaterial=rb(s,e,t)}return r}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,i,r,s){const c=new pi(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Ap),d.toneMapping=Dr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new Es({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),v=new st(new _n,y);let g=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,g=!0):(y.color.copy(Ap),g=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[C],s.y,s.z)):b===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[C]));const N=this._cubeSize;mc(r,b*N,C>2?N:0,N,N),d.setRenderTarget(r),g&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=h,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===co||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;mc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Mu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cp[(r-s-1)%Cp.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new st(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*is-1),y=s/x,v=isFinite(s)?1+Math.floor(f*y):is;v>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${is}`);const g=[];let R=0;for(let B=0;B<is;++B){const J=B/y,I=Math.exp(-J*J/2);g.push(I),B===0?R+=I:B<v&&(R+=2*I)}for(let B=0;B<g.length;B++)g[B]=g[B]/R;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:C}=this;h.dTheta.value=x,h.mipInt.value=C-i;const b=this._sizeLods[r],N=3*b*(r>C-Qs?r-C+Qs:0),k=4*(this._cubeSize-b);mc(t,N,k,3*b,2*b),c.setRenderTarget(t),c.render(d,Mu)}}function ib(n){const e=[],t=[],i=[];let r=n;const s=n-Qs+1+wp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Qs?c=wp[o-n+Qs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),f=-l,d=1+l,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,y=3,v=2,g=1,R=new Float32Array(y*x*m),C=new Float32Array(v*x*m),b=new Float32Array(g*x*m);for(let k=0;k<m;k++){const B=k%3*2/3-1,J=k>2?0:-1,I=[B,J,0,B+2/3,J,0,B+2/3,J+1,0,B,J,0,B+2/3,J+1,0,B,J+1,0];R.set(I,y*x*k),C.set(h,v*x*k);const P=[k,k,k,k,k,k];b.set(P,g*x*k)}const N=new Mi;N.setAttribute("position",new Ui(R,y)),N.setAttribute("uv",new Ui(C,v)),N.setAttribute("faceIndex",new Ui(b,g)),e.push(N),r>Qs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pp(n,e,t){const i=new ms(n,e,t);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rb(n,e,t){const i=new Float32Array(is),r=new Z(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Ip(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Dp(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}function sb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===af||c===cf,f=c===co||c===lo;if(l||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Rp(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Rp(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ob(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ab(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(d){const h=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const R=m.array;y=m.version;for(let C=0,b=R.length;C<b;C+=3){const N=R[C+0],k=R[C+1],B=R[C+2];h.push(N,k,k,B,B,N)}}else if(x!==void 0){const R=x.array;y=x.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const N=C+0,k=C+1,B=C+2;h.push(N,k,k,B,B,N)}}else return;const v=new(Jg(h)?n0:t0)(h,1);v.version=y;const g=s.get(d);g&&e.remove(g),s.set(d,v)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:f}}function cb(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function l(h,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,h*o,x),t.update(m,i,x))}function f(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let v=0;for(let g=0;g<x;g++)v+=m[g];t.update(v,i,1)}function d(h,m,x,y){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<h.length;g++)l(h[g]/o,m[g],y[g]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,x);let g=0;for(let R=0;R<x;R++)g+=m[R]*y[R];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ub(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let P=function(){J.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),y===!0&&(b=2),v===!0&&(b=3);let N=a.attributes.position.count*b,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*k*4*d),J=new Zg(B,N,k,d);J.type=sr,J.needsUpdate=!0;const I=b*4;for(let U=0;U<d;U++){const ye=g[U],D=R[U],W=C[U],$=N*k*4*U;for(let F=0;F<ye.count;F++){const V=F*I;x===!0&&(r.fromBufferAttribute(ye,F),B[$+V+0]=r.x,B[$+V+1]=r.y,B[$+V+2]=r.z,B[$+V+3]=0),y===!0&&(r.fromBufferAttribute(D,F),B[$+V+4]=r.x,B[$+V+5]=r.y,B[$+V+6]=r.z,B[$+V+7]=0),v===!0&&(r.fromBufferAttribute(W,F),B[$+V+8]=r.x,B[$+V+9]=r.y,B[$+V+10]=r.z,B[$+V+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:J,size:new rt(N,k)},i.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let v=0;v<l.length;v++)x+=l[v];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function fb(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const v0=new Hn,Lp=new a0(1,1),x0=new Zg,y0=new ly,S0=new s0,Op=[],Np=[],Up=new Float32Array(16),Fp=new Float32Array(9),Bp=new Float32Array(4);function vo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pl(n,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function db(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Bp.set(i),n.uniformMatrix2fv(this.addr,!1,Bp),dn(t,i)}}function _b(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Fp.set(i),n.uniformMatrix3fv(this.addr,!1,Fp),dn(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Up.set(i),n.uniformMatrix4fv(this.addr,!1,Up),dn(t,i)}}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function Mb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function Ab(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Lp.compareFunction=Kg,s=Lp):s=v0,t.setTexture2D(e||s,r)}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||y0,r)}function Rb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||S0,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||x0,r)}function Ib(n){switch(n){case 5126:return db;case 35664:return hb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Eb;case 5125:return Mb;case 36294:return bb;case 36295:return Tb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Db(n,e){n.uniform1fv(this.addr,e)}function Lb(n,e){const t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function Ob(n,e){const t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function Nb(n,e){const t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function Ub(n,e){const t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fb(n,e){const t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bb(n,e){const t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kb(n,e){n.uniform1iv(this.addr,e)}function zb(n,e){n.uniform2iv(this.addr,e)}function Vb(n,e){n.uniform3iv(this.addr,e)}function Hb(n,e){n.uniform4iv(this.addr,e)}function Gb(n,e){n.uniform1uiv(this.addr,e)}function Wb(n,e){n.uniform2uiv(this.addr,e)}function $b(n,e){n.uniform3uiv(this.addr,e)}function qb(n,e){n.uniform4uiv(this.addr,e)}function Xb(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||v0,s[o])}function jb(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||y0,s[o])}function Yb(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||S0,s[o])}function Kb(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||x0,s[o])}function Jb(n){switch(n){case 5126:return Db;case 35664:return Lb;case 35665:return Ob;case 35666:return Nb;case 35674:return Ub;case 35675:return Fb;case 35676:return Bb;case 5124:case 35670:return kb;case 35667:case 35671:return zb;case 35668:case 35672:return Vb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Wb;case 36295:return $b;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Kb}}class Zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ib(t.type)}}class Qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function kp(n,e){n.seq.push(e),n.map[e.id]=e}function tT(n,e,t){const i=n.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kp(t,l===void 0?new Zb(a,n,e):new Qb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new eT(a),kp(t,d)),t=d}}}class Cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);tT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nT=37297;let iT=0;function rT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vp=new ht;function sT(n){wt._getMatrix(Vp,wt.workingColorSpace,n);const e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case kc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+rT(n.getShaderSource(e),a)}else return s}function oT(n,e){const t=sT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aT(n,e){let t;switch(e){case Ux:t="Linear";break;case Fx:t="Reinhard";break;case Bx:t="Cineon";break;case kx:t="ACESFilmic";break;case Vx:t="AgX";break;case Hx:t="Neutral";break;case zx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new Z;function cT(){wt.getLuminanceCoefficients(gc);const n=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function uT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Bo(n){return n!==""}function Gp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(n){return n.replace(dT,pT)}const hT=new Map;function pT(n,e){let t=gt[e];if(t===void 0){const i=hT.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zf(t)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(n){return n.replace(mT,gT)}function gT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case co:case lo:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===lo&&(e="ENVMAP_MODE_REFRACTION"),e}function yT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ox:e="ENVMAP_BLENDING_MIX";break;case Nx:e="ENVMAP_BLENDING_ADD";break}return e}function ST(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ET(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=_T(t),l=vT(t),f=xT(t),d=yT(t),h=ST(t),m=lT(t),x=uT(s),y=r.createProgram();let v,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(v=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Dr?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,oT("linearToOutputTexel",t.outputColorSpace),cT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=zf(o),o=Gp(o,t),o=Wp(o,t),a=zf(a),a=Gp(a,t),a=Wp(a,t),o=$p(o),a=$p(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=R+v+o,b=R+g+a,N=zp(r,r.VERTEX_SHADER,C),k=zp(r,r.FRAGMENT_SHADER,b);r.attachShader(y,N),r.attachShader(y,k),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function B(U){if(n.debug.checkShaderErrors){const ye=r.getProgramInfoLog(y)||"",D=r.getShaderInfoLog(N)||"",W=r.getShaderInfoLog(k)||"",$=ye.trim(),F=D.trim(),V=W.trim();let z=!0,Se=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,k);else{const Ee=Hp(r,N,"vertex"),Re=Hp(r,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+Ee+`
`+Re)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||V==="")&&(Se=!1);Se&&(U.diagnostics={runnable:z,programLog:$,vertexShader:{log:F,prefix:v},fragmentShader:{log:V,prefix:g}})}r.deleteShader(N),r.deleteShader(k),J=new Cc(r,y),I=fT(r,y)}let J;this.getUniforms=function(){return J===void 0&&B(this),J};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,nT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=k,this}let MT=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TT(e),t.set(e,i)),i}}class TT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function wT(n,e,t,i,r,s,o){const a=new Qg,c=new bT,l=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return l.add(I),I===0?"uv":`uv${I}`}function v(I,P,U,ye,D){const W=ye.fog,$=D.geometry,F=I.isMeshStandardMaterial?ye.environment:null,V=(I.isMeshStandardMaterial?t:e).get(I.envMap||F),z=V&&V.mapping===fl?V.image.height:null,Se=x[I.type];I.precision!==null&&(m=r.getMaxPrecision(I.precision),m!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",m,"instead."));const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Re=Ee!==void 0?Ee.length:0;let Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let ft,dt,ge,Ue;if(Se){const Mt=Ai[Se];ft=Mt.vertexShader,dt=Mt.fragmentShader}else ft=I.vertexShader,dt=I.fragmentShader,c.update(I),ge=c.getVertexShaderID(I),Ue=c.getFragmentShaderID(I);const Ie=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),nt=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,Gt=!!I.map,L=!!I.matcap,M=!!V,te=!!I.aoMap,oe=!!I.lightMap,de=!!I.bumpMap,Q=!!I.normalMap,Me=!!I.displacementMap,ae=!!I.emissiveMap,he=!!I.metalnessMap,_e=!!I.roughnessMap,He=I.anisotropy>0,w=I.clearcoat>0,S=I.dispersion>0,H=I.iridescence>0,ie=I.sheen>0,ve=I.transmission>0,re=He&&!!I.anisotropyMap,Fe=w&&!!I.clearcoatMap,be=w&&!!I.clearcoatNormalMap,Je=w&&!!I.clearcoatRoughnessMap,Oe=H&&!!I.iridescenceMap,we=H&&!!I.iridescenceThicknessMap,ze=ie&&!!I.sheenColorMap,Xe=ie&&!!I.sheenRoughnessMap,Ke=!!I.specularMap,Be=!!I.specularColorMap,ot=!!I.specularIntensityMap,G=ve&&!!I.transmissionMap,De=ve&&!!I.thicknessMap,Ce=!!I.gradientMap,je=!!I.alphaMap,Ae=I.alphaTest>0,xe=!!I.alphaHash,tt=!!I.extensions;let lt=Dr;I.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(lt=n.toneMapping);const At={shaderID:Se,shaderType:I.type,shaderName:I.name,vertexShader:ft,fragmentShader:dt,defines:I.defines,customVertexShaderID:ge,customFragmentShaderID:Ue,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:m,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:uo,alphaToCoverage:!!I.alphaToCoverage,map:Gt,matcap:L,envMap:M,envMapMode:M&&V.mapping,envMapCubeUVHeight:z,aoMap:te,lightMap:oe,bumpMap:de,normalMap:Q,displacementMap:h&&Me,emissiveMap:ae,normalMapObjectSpace:Q&&I.normalMapType===Xx,normalMapTangentSpace:Q&&I.normalMapType===qx,metalnessMap:he,roughnessMap:_e,anisotropy:He,anisotropyMap:re,clearcoat:w,clearcoatMap:Fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Je,dispersion:S,iridescence:H,iridescenceMap:Oe,iridescenceThicknessMap:we,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Xe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:ot,transmission:ve,transmissionMap:G,thicknessMap:De,gradientMap:Ce,opaque:I.transparent===!1&&I.blending===Ni&&I.alphaToCoverage===!1,alphaMap:je,alphaTest:Ae,alphaHash:xe,combine:I.combine,mapUv:Gt&&y(I.map.channel),aoMapUv:te&&y(I.aoMap.channel),lightMapUv:oe&&y(I.lightMap.channel),bumpMapUv:de&&y(I.bumpMap.channel),normalMapUv:Q&&y(I.normalMap.channel),displacementMapUv:Me&&y(I.displacementMap.channel),emissiveMapUv:ae&&y(I.emissiveMap.channel),metalnessMapUv:he&&y(I.metalnessMap.channel),roughnessMapUv:_e&&y(I.roughnessMap.channel),anisotropyMapUv:re&&y(I.anisotropyMap.channel),clearcoatMapUv:Fe&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:we&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&y(I.sheenRoughnessMap.channel),specularMapUv:Ke&&y(I.specularMap.channel),specularColorMapUv:Be&&y(I.specularColorMap.channel),specularIntensityMapUv:ot&&y(I.specularIntensityMap.channel),transmissionMapUv:G&&y(I.transmissionMap.channel),thicknessMapUv:De&&y(I.thicknessMap.channel),alphaMapUv:je&&y(I.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Q||He),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(Gt||je),fog:!!W,useFog:I.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:I.flatShading===!0&&I.wireframe===!1,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Qe,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ne,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:I.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Gt&&I.map.isVideoTexture===!0&&wt.getTransfer(I.map.colorSpace)===Lt,decodeVideoTextureEmissive:ae&&I.emissiveMap.isVideoTexture===!0&&wt.getTransfer(I.emissiveMap.colorSpace)===Lt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Kn,flipSided:I.side===Vn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:tt&&I.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&I.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function g(I){const P=[];if(I.shaderID?P.push(I.shaderID):(P.push(I.customVertexShaderID),P.push(I.customFragmentShaderID)),I.defines!==void 0)for(const U in I.defines)P.push(U),P.push(I.defines[U]);return I.isRawShaderMaterial===!1&&(R(P,I),C(P,I),P.push(n.outputColorSpace)),P.push(I.customProgramCacheKey),P.join()}function R(I,P){I.push(P.precision),I.push(P.outputColorSpace),I.push(P.envMapMode),I.push(P.envMapCubeUVHeight),I.push(P.mapUv),I.push(P.alphaMapUv),I.push(P.lightMapUv),I.push(P.aoMapUv),I.push(P.bumpMapUv),I.push(P.normalMapUv),I.push(P.displacementMapUv),I.push(P.emissiveMapUv),I.push(P.metalnessMapUv),I.push(P.roughnessMapUv),I.push(P.anisotropyMapUv),I.push(P.clearcoatMapUv),I.push(P.clearcoatNormalMapUv),I.push(P.clearcoatRoughnessMapUv),I.push(P.iridescenceMapUv),I.push(P.iridescenceThicknessMapUv),I.push(P.sheenColorMapUv),I.push(P.sheenRoughnessMapUv),I.push(P.specularMapUv),I.push(P.specularColorMapUv),I.push(P.specularIntensityMapUv),I.push(P.transmissionMapUv),I.push(P.thicknessMapUv),I.push(P.combine),I.push(P.fogExp2),I.push(P.sizeAttenuation),I.push(P.morphTargetsCount),I.push(P.morphAttributeCount),I.push(P.numDirLights),I.push(P.numPointLights),I.push(P.numSpotLights),I.push(P.numSpotLightMaps),I.push(P.numHemiLights),I.push(P.numRectAreaLights),I.push(P.numDirLightShadows),I.push(P.numPointLightShadows),I.push(P.numSpotLightShadows),I.push(P.numSpotLightShadowsWithMaps),I.push(P.numLightProbes),I.push(P.shadowMapType),I.push(P.toneMapping),I.push(P.numClippingPlanes),I.push(P.numClipIntersection),I.push(P.depthPacking)}function C(I,P){a.disableAll(),P.supportsVertexTextures&&a.enable(0),P.instancing&&a.enable(1),P.instancingColor&&a.enable(2),P.instancingMorph&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),P.dispersion&&a.enable(20),P.batchingColor&&a.enable(21),P.gradientMap&&a.enable(22),I.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),I.push(a.mask)}function b(I){const P=x[I.type];let U;if(P){const ye=Ai[P];U=My.clone(ye.uniforms)}else U=I.uniforms;return U}function N(I,P){let U;for(let ye=0,D=f.length;ye<D;ye++){const W=f[ye];if(W.cacheKey===P){U=W,++U.usedTimes;break}}return U===void 0&&(U=new ET(n,P,I,s),f.push(U)),U}function k(I){if(--I.usedTimes===0){const P=f.indexOf(I);f[P]=f[f.length-1],f.pop(),I.destroy()}}function B(I){c.remove(I)}function J(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:N,releaseProgram:k,releaseShaderCache:B,programs:f,dispose:J}}function AT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,x,y,v){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:v},n[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=y,g.group=v),e++,g}function a(d,h,m,x,y,v){const g=o(d,h,m,x,y,v);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(d,h,m,x,y,v){const g=o(d,h,m,x,y,v);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function l(d,h){t.length>1&&t.sort(d||CT),i.length>1&&i.sort(h||Xp),r.length>1&&r.sort(h||Xp)}function f(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function RT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jp,n.set(i,[o])):r>=s.length?(o=new jp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new It};break;case"SpotLight":t={position:new Z,direction:new Z,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function IT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DT=0;function LT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OT(n){const e=new PT,t=IT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);const r=new Z,s=new on,o=new on;function a(l){let f=0,d=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,x=0,y=0,v=0,g=0,R=0,C=0,b=0,N=0,k=0,B=0;l.sort(LT);for(let I=0,P=l.length;I<P;I++){const U=l[I],ye=U.color,D=U.intensity,W=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=ye.r*D,d+=ye.g*D,h+=ye.b*D;else if(U.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],D);B++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,z=t.get(U);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=U.shadow.matrix,R++}i.directional[m]=F,m++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(ye).multiplyScalar(D),F.distance=W,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[y]=F;const V=U.shadow;if(U.map&&(i.spotLightMap[N]=U.map,N++,V.updateMatrices(U),U.castShadow&&k++),i.spotLightMatrix[y]=V.matrix,U.castShadow){const z=t.get(U);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=$,b++}y++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(ye).multiplyScalar(D),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=F,v++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const V=U.shadow,z=t.get(U);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=$,i.pointShadowMatrix[x]=U.shadow.matrix,C++}i.point[x]=F,x++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(D),F.groundColor.copy(U.groundColor).multiplyScalar(D),i.hemi[g]=F,g++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const J=i.hash;(J.directionalLength!==m||J.pointLength!==x||J.spotLength!==y||J.rectAreaLength!==v||J.hemiLength!==g||J.numDirectionalShadows!==R||J.numPointShadows!==C||J.numSpotShadows!==b||J.numSpotMaps!==N||J.numLightProbes!==B)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+N-k,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=B,J.directionalLength=m,J.pointLength=x,J.spotLength=y,J.rectAreaLength=v,J.hemiLength=g,J.numDirectionalShadows=R,J.numPointShadows=C,J.numSpotShadows=b,J.numSpotMaps=N,J.numLightProbes=B,i.version=DT++)}function c(l,f){let d=0,h=0,m=0,x=0,y=0;const v=f.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){const C=l[g];if(C.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),d++}else if(C.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),m++}else if(C.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),o.identity(),s.copy(C.matrixWorld),s.premultiply(v),o.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(v),h++}else if(C.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(v),y++}}}return{setup:a,setupView:c,state:i}}function Yp(n){const e=new OT(n),t=[],i=[];function r(f){l.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function NT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yp(n),e.set(r,[a])):s>=o.length?(a=new Yp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(n,e,t){let i=new o0;const r=new rt,s=new rt,o=new nn,a=new fS({depthPacking:$x}),c=new dS,l={},f=t.maxTextureSize,d={[Or]:Vn,[Vn]:Or,[Kn]:Kn},h=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:UT,fragmentShader:FT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mi;x.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new st(x,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let g=this.type;this.render=function(k,B,J){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const I=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),ye=n.state;ye.setBlending(Ir),ye.buffers.depth.getReversed()?ye.buffers.color.setClear(0,0,0,0):ye.buffers.color.setClear(1,1,1,1),ye.buffers.depth.setTest(!0),ye.setScissorTest(!1);const D=g!==Ji&&this.type===Ji,W=g===Ji&&this.type!==Ji;for(let $=0,F=k.length;$<F;$++){const V=k[$],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Se=z.getFrameExtents();if(r.multiply(Se),s.copy(z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Se.x),r.x=s.x*Se.x,z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Se.y),r.y=s.y*Se.y,z.mapSize.y=s.y)),z.map===null||D===!0||W===!0){const Re=this.type!==Ji?{minFilter:_i,magFilter:_i}:{};z.map!==null&&z.map.dispose(),z.map=new ms(r.x,r.y,Re),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Ee=z.getViewportCount();for(let Re=0;Re<Ee;Re++){const Ne=z.getViewport(Re);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),ye.viewport(o),z.updateMatrices(V,Re),i=z.getFrustum(),b(B,J,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Ji&&R(z,J),z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(I,P,U)};function R(k,B){const J=e.update(y);h.defines.VSM_SAMPLES!==k.blurSamples&&(h.defines.VSM_SAMPLES=k.blurSamples,m.defines.VSM_SAMPLES=k.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ms(r.x,r.y)),h.uniforms.shadow_pass.value=k.map.texture,h.uniforms.resolution.value=k.mapSize,h.uniforms.radius.value=k.radius,n.setRenderTarget(k.mapPass),n.clear(),n.renderBufferDirect(B,null,J,h,y,null),m.uniforms.shadow_pass.value=k.mapPass.texture,m.uniforms.resolution.value=k.mapSize,m.uniforms.radius.value=k.radius,n.setRenderTarget(k.map),n.clear(),n.renderBufferDirect(B,null,J,m,y,null)}function C(k,B,J,I){let P=null;const U=J.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(U!==void 0)P=U;else if(P=J.isPointLight===!0?c:a,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ye=P.uuid,D=B.uuid;let W=l[ye];W===void 0&&(W={},l[ye]=W);let $=W[D];$===void 0&&($=P.clone(),W[D]=$,B.addEventListener("dispose",N)),P=$}if(P.visible=B.visible,P.wireframe=B.wireframe,I===Ji?P.side=B.shadowSide!==null?B.shadowSide:B.side:P.side=B.shadowSide!==null?B.shadowSide:d[B.side],P.alphaMap=B.alphaMap,P.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,P.map=B.map,P.clipShadows=B.clipShadows,P.clippingPlanes=B.clippingPlanes,P.clipIntersection=B.clipIntersection,P.displacementMap=B.displacementMap,P.displacementScale=B.displacementScale,P.displacementBias=B.displacementBias,P.wireframeLinewidth=B.wireframeLinewidth,P.linewidth=B.linewidth,J.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ye=n.properties.get(P);ye.light=J}return P}function b(k,B,J,I,P){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&P===Ji)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,k.matrixWorld);const D=e.update(k),W=k.material;if(Array.isArray(W)){const $=D.groups;for(let F=0,V=$.length;F<V;F++){const z=$[F],Se=W[z.materialIndex];if(Se&&Se.visible){const Ee=C(k,Se,I,P);k.onBeforeShadow(n,k,B,J,D,Ee,z),n.renderBufferDirect(J,null,D,Ee,k,z),k.onAfterShadow(n,k,B,J,D,Ee,z)}}}else if(W.visible){const $=C(k,W,I,P);k.onBeforeShadow(n,k,B,J,D,$,null),n.renderBufferDirect(J,null,D,$,k,null),k.onAfterShadow(n,k,B,J,D,$,null)}}const ye=k.children;for(let D=0,W=ye.length;D<W;D++)b(ye[D],B,J,I,P)}function N(k){k.target.removeEventListener("dispose",N);for(const J in l){const I=l[J],P=k.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}const kT={[Qu]:ef,[tf]:sf,[nf]:of,[ao]:rf,[ef]:Qu,[sf]:tf,[of]:nf,[rf]:ao};function zT(n,e){function t(){let G=!1;const De=new nn;let Ce=null;const je=new nn(0,0,0,0);return{setMask:function(Ae){Ce!==Ae&&!G&&(n.colorMask(Ae,Ae,Ae,Ae),Ce=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,xe,tt,lt,At){At===!0&&(Ae*=lt,xe*=lt,tt*=lt),De.set(Ae,xe,tt,lt),je.equals(De)===!1&&(n.clearColor(Ae,xe,tt,lt),je.copy(De))},reset:function(){G=!1,Ce=null,je.set(-1,0,0,0)}}}function i(){let G=!1,De=!1,Ce=null,je=null,Ae=null;return{setReversed:function(xe){if(De!==xe){const tt=e.get("EXT_clip_control");xe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const lt=Ae;Ae=null,this.setClear(lt)}},getReversed:function(){return De},setTest:function(xe){xe?Ie(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(xe){Ce!==xe&&!G&&(n.depthMask(xe),Ce=xe)},setFunc:function(xe){if(De&&(xe=kT[xe]),je!==xe){switch(xe){case Qu:n.depthFunc(n.NEVER);break;case ef:n.depthFunc(n.ALWAYS);break;case tf:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case nf:n.depthFunc(n.EQUAL);break;case rf:n.depthFunc(n.GEQUAL);break;case sf:n.depthFunc(n.GREATER);break;case of:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}je=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Ae!==xe&&(De&&(xe=1-xe),n.clearDepth(xe),Ae=xe)},reset:function(){G=!1,Ce=null,je=null,Ae=null,De=!1}}}function r(){let G=!1,De=null,Ce=null,je=null,Ae=null,xe=null,tt=null,lt=null,At=null;return{setTest:function(Mt){G||(Mt?Ie(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Mt){De!==Mt&&!G&&(n.stencilMask(Mt),De=Mt)},setFunc:function(Mt,Fn,Wn){(Ce!==Mt||je!==Fn||Ae!==Wn)&&(n.stencilFunc(Mt,Fn,Wn),Ce=Mt,je=Fn,Ae=Wn)},setOp:function(Mt,Fn,Wn){(xe!==Mt||tt!==Fn||lt!==Wn)&&(n.stencilOp(Mt,Fn,Wn),xe=Mt,tt=Fn,lt=Wn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){At!==Mt&&(n.clearStencil(Mt),At=Mt)},reset:function(){G=!1,De=null,Ce=null,je=null,Ae=null,xe=null,tt=null,lt=null,At=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let f={},d={},h=new WeakMap,m=[],x=null,y=!1,v=null,g=null,R=null,C=null,b=null,N=null,k=null,B=new It(0,0,0),J=0,I=!1,P=null,U=null,ye=null,D=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=V>=2);let Se=null,Ee={};const Re=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),ft=new nn().fromArray(Re),dt=new nn().fromArray(Ne);function ge(G,De,Ce,je){const Ae=new Uint8Array(4),xe=n.createTexture();n.bindTexture(G,xe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Ce;tt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(De+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return xe}const Ue={};Ue[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ie(n.DEPTH_TEST),o.setFunc(ao),de(!1),Q(Kh),Ie(n.CULL_FACE),te(Ir);function Ie(G){f[G]!==!0&&(n.enable(G),f[G]=!0)}function Qe(G){f[G]!==!1&&(n.disable(G),f[G]=!1)}function nt(G,De){return d[G]!==De?(n.bindFramebuffer(G,De),d[G]=De,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=De),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=De),!0):!1}function it(G,De){let Ce=m,je=!1;if(G){Ce=h.get(De),Ce===void 0&&(Ce=[],h.set(De,Ce));const Ae=G.textures;if(Ce.length!==Ae.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,tt=Ae.length;xe<tt;xe++)Ce[xe]=n.COLOR_ATTACHMENT0+xe;Ce.length=Ae.length,je=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,je=!0);je&&n.drawBuffers(Ce)}function Gt(G){return x!==G?(n.useProgram(G),x=G,!0):!1}const L={[ns]:n.FUNC_ADD,[_x]:n.FUNC_SUBTRACT,[vx]:n.FUNC_REVERSE_SUBTRACT};L[xx]=n.MIN,L[yx]=n.MAX;const M={[Sx]:n.ZERO,[Ex]:n.ONE,[Mx]:n.SRC_COLOR,[Ju]:n.SRC_ALPHA,[Rx]:n.SRC_ALPHA_SATURATE,[Ax]:n.DST_COLOR,[Tx]:n.DST_ALPHA,[bx]:n.ONE_MINUS_SRC_COLOR,[Zu]:n.ONE_MINUS_SRC_ALPHA,[Cx]:n.ONE_MINUS_DST_COLOR,[wx]:n.ONE_MINUS_DST_ALPHA,[Px]:n.CONSTANT_COLOR,[Ix]:n.ONE_MINUS_CONSTANT_COLOR,[Dx]:n.CONSTANT_ALPHA,[Lx]:n.ONE_MINUS_CONSTANT_ALPHA};function te(G,De,Ce,je,Ae,xe,tt,lt,At,Mt){if(G===Ir){y===!0&&(Qe(n.BLEND),y=!1);return}if(y===!1&&(Ie(n.BLEND),y=!0),G!==gx){if(G!==v||Mt!==I){if((g!==ns||b!==ns)&&(n.blendEquation(n.FUNC_ADD),g=ns,b=ns),Mt)switch(G){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hs:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}R=null,C=null,N=null,k=null,B.set(0,0,0),J=0,v=G,I=Mt}return}Ae=Ae||De,xe=xe||Ce,tt=tt||je,(De!==g||Ae!==b)&&(n.blendEquationSeparate(L[De],L[Ae]),g=De,b=Ae),(Ce!==R||je!==C||xe!==N||tt!==k)&&(n.blendFuncSeparate(M[Ce],M[je],M[xe],M[tt]),R=Ce,C=je,N=xe,k=tt),(lt.equals(B)===!1||At!==J)&&(n.blendColor(lt.r,lt.g,lt.b,At),B.copy(lt),J=At),v=G,I=!1}function oe(G,De){G.side===Kn?Qe(n.CULL_FACE):Ie(n.CULL_FACE);let Ce=G.side===Vn;De&&(Ce=!Ce),de(Ce),G.blending===Ni&&G.transparent===!1?te(Ir):te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const je=G.stencilWrite;a.setTest(je),je&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(G){P!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),P=G)}function Q(G){G!==hx?(Ie(n.CULL_FACE),G!==U&&(G===Kh?n.cullFace(n.BACK):G===px?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),U=G}function Me(G){G!==ye&&(F&&n.lineWidth(G),ye=G)}function ae(G,De,Ce){G?(Ie(n.POLYGON_OFFSET_FILL),(D!==De||W!==Ce)&&(n.polygonOffset(De,Ce),D=De,W=Ce)):Qe(n.POLYGON_OFFSET_FILL)}function he(G){G?Ie(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function _e(G){G===void 0&&(G=n.TEXTURE0+$-1),Se!==G&&(n.activeTexture(G),Se=G)}function He(G,De,Ce){Ce===void 0&&(Se===null?Ce=n.TEXTURE0+$-1:Ce=Se);let je=Ee[Ce];je===void 0&&(je={type:void 0,texture:void 0},Ee[Ce]=je),(je.type!==G||je.texture!==De)&&(Se!==Ce&&(n.activeTexture(Ce),Se=Ce),n.bindTexture(G,De||Ue[G]),je.type=G,je.texture=De)}function w(){const G=Ee[Se];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){ft.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ft.copy(G))}function Xe(G){dt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),dt.copy(G))}function Ke(G,De){let Ce=l.get(De);Ce===void 0&&(Ce=new WeakMap,l.set(De,Ce));let je=Ce.get(G);je===void 0&&(je=n.getUniformBlockIndex(De,G.name),Ce.set(G,je))}function Be(G,De){const je=l.get(De).get(G);c.get(De)!==je&&(n.uniformBlockBinding(De,je,G.__bindingPointIndex),c.set(De,je))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Se=null,Ee={},d={},h=new WeakMap,m=[],x=null,y=!1,v=null,g=null,R=null,C=null,b=null,N=null,k=null,B=new It(0,0,0),J=0,I=!1,P=null,U=null,ye=null,D=null,W=null,ft.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ie,disable:Qe,bindFramebuffer:nt,drawBuffers:it,useProgram:Gt,setBlending:te,setMaterial:oe,setFlipSided:de,setCullFace:Q,setLineWidth:Me,setPolygonOffset:ae,setScissorTest:he,activeTexture:_e,bindTexture:He,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Oe,texImage3D:we,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:be,texStorage3D:Je,texSubImage2D:ie,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:Fe,scissor:ze,viewport:Xe,reset:ot}}function VT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return m?new OffscreenCanvas(w,S):Vc("canvas")}function y(w,S,H){let ie=1;const ve=He(w);if((ve.width>H||ve.height>H)&&(ie=H/Math.max(ve.width,ve.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(ie*ve.width),Fe=Math.floor(ie*ve.height);d===void 0&&(d=x(re,Fe));const be=S?x(re,Fe):d;return be.width=re,be.height=Fe,be.getContext("2d").drawImage(w,0,0,re,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+re+"x"+Fe+")."),be}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),w;return w}function v(w){return w.generateMipmaps}function g(w){n.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(w,S,H,ie,ve=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=S;if(S===n.RED&&(H===n.FLOAT&&(re=n.R32F),H===n.HALF_FLOAT&&(re=n.R16F),H===n.UNSIGNED_BYTE&&(re=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.R8UI),H===n.UNSIGNED_SHORT&&(re=n.R16UI),H===n.UNSIGNED_INT&&(re=n.R32UI),H===n.BYTE&&(re=n.R8I),H===n.SHORT&&(re=n.R16I),H===n.INT&&(re=n.R32I)),S===n.RG&&(H===n.FLOAT&&(re=n.RG32F),H===n.HALF_FLOAT&&(re=n.RG16F),H===n.UNSIGNED_BYTE&&(re=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.RG8UI),H===n.UNSIGNED_SHORT&&(re=n.RG16UI),H===n.UNSIGNED_INT&&(re=n.RG32UI),H===n.BYTE&&(re=n.RG8I),H===n.SHORT&&(re=n.RG16I),H===n.INT&&(re=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.RGB8UI),H===n.UNSIGNED_SHORT&&(re=n.RGB16UI),H===n.UNSIGNED_INT&&(re=n.RGB32UI),H===n.BYTE&&(re=n.RGB8I),H===n.SHORT&&(re=n.RGB16I),H===n.INT&&(re=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),H===n.UNSIGNED_INT&&(re=n.RGBA32UI),H===n.BYTE&&(re=n.RGBA8I),H===n.SHORT&&(re=n.RGBA16I),H===n.INT&&(re=n.RGBA32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),S===n.RGBA){const Fe=ve?kc:wt.getTransfer(ie);H===n.FLOAT&&(re=n.RGBA32F),H===n.HALF_FLOAT&&(re=n.RGBA16F),H===n.UNSIGNED_BYTE&&(re=Fe===Lt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(w,S){let H;return w?S===null||S===ps||S===na?H=n.DEPTH24_STENCIL8:S===sr?H=n.DEPTH32F_STENCIL8:S===ta&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ps||S===na?H=n.DEPTH_COMPONENT24:S===sr?H=n.DEPTH_COMPONENT32F:S===ta&&(H=n.DEPTH_COMPONENT16),H}function N(w,S){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==_i&&w.minFilter!==Ii?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function k(w){const S=w.target;S.removeEventListener("dispose",k),J(S),S.isVideoTexture&&f.delete(S)}function B(w){const S=w.target;S.removeEventListener("dispose",B),P(S)}function J(w){const S=i.get(w);if(S.__webglInit===void 0)return;const H=w.source,ie=h.get(H);if(ie){const ve=ie[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&I(w),Object.keys(ie).length===0&&h.delete(H)}i.remove(w)}function I(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const H=w.source,ie=h.get(H);delete ie[S.__cacheKey],o.memory.textures--}function P(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let ve=0;ve<S.__webglFramebuffer[ie].length;ve++)n.deleteFramebuffer(S.__webglFramebuffer[ie][ve]);else n.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[ie]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=w.textures;for(let ie=0,ve=H.length;ie<ve;ie++){const re=i.get(H[ie]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(H[ie])}i.remove(w)}let U=0;function ye(){U=0}function D(){const w=U;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),U+=1,w}function W(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function $(w,S){const H=i.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(H,w,S);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function F(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ue(H,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function V(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ue(H,w,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function z(w,S){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Ie(H,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const Se={[lf]:n.REPEAT,[ss]:n.CLAMP_TO_EDGE,[uf]:n.MIRRORED_REPEAT},Ee={[_i]:n.NEAREST,[Gx]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[Ii]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Re={[jx]:n.NEVER,[ey]:n.ALWAYS,[Yx]:n.LESS,[Kg]:n.LEQUAL,[Kx]:n.EQUAL,[Qx]:n.GEQUAL,[Jx]:n.GREATER,[Zx]:n.NOTEQUAL};function Ne(w,S){if(S.type===sr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ii||S.magFilter===Yl||S.magFilter===qa||S.magFilter===os||S.minFilter===Ii||S.minFilter===Yl||S.minFilter===qa||S.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Se[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ee[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==qa&&S.minFilter!==os||S.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ft(w,S){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",k));const ie=S.source;let ve=h.get(ie);ve===void 0&&(ve={},h.set(ie,ve));const re=W(S);if(re!==w.__cacheKey){ve[re]===void 0&&(ve[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ve[re].usedTimes++;const Fe=ve[w.__cacheKey];Fe!==void 0&&(ve[w.__cacheKey].usedTimes--,Fe.usedTimes===0&&I(S)),w.__cacheKey=re,w.__webglTexture=ve[re].texture}return H}function dt(w,S,H){return Math.floor(Math.floor(w/H)/S)}function ge(w,S,H,ie){const re=w.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,ie,S.data);else{re.sort((we,ze)=>we.start-ze.start);let Fe=0;for(let we=1;we<re.length;we++){const ze=re[Fe],Xe=re[we],Ke=ze.start+ze.count,Be=dt(Xe.start,S.width,4),ot=dt(ze.start,S.width,4);Xe.start<=Ke+1&&Be===ot&&dt(Xe.start+Xe.count-1,S.width,4)===Be?ze.count=Math.max(ze.count,Xe.start+Xe.count-ze.start):(++Fe,re[Fe]=Xe)}re.length=Fe+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),Je=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let we=0,ze=re.length;we<ze;we++){const Xe=re[we],Ke=Math.floor(Xe.start/4),Be=Math.ceil(Xe.count/4),ot=Ke%S.width,G=Math.floor(Ke/S.width),De=Be,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ot,G,De,Ce,H,ie,S.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Ue(w,S,H){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);const ve=ft(w,S),re=S.source;t.bindTexture(ie,w.__webglTexture,n.TEXTURE0+H);const Fe=i.get(re);if(re.version!==Fe.__version||ve===!0){t.activeTexture(n.TEXTURE0+H);const be=wt.getPrimaries(wt.workingColorSpace),Je=S.colorSpace===wr?null:wt.getPrimaries(S.colorSpace),Oe=S.colorSpace===wr||be===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let we=y(S.image,!1,r.maxTextureSize);we=_e(S,we);const ze=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type);let Ke=C(S.internalFormat,ze,Xe,S.colorSpace,S.isVideoTexture);Ne(ie,S);let Be;const ot=S.mipmaps,G=S.isVideoTexture!==!0,De=Fe.__version===void 0||ve===!0,Ce=re.dataReady,je=N(S,we);if(S.isDepthTexture)Ke=b(S.format===ra,S.type),De&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ke,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,Ke,we.width,we.height,0,ze,Xe,null));else if(S.isDataTexture)if(ot.length>0){G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,ot[0].width,ot[0].height);for(let Ae=0,xe=ot.length;Ae<xe;Ae++)Be=ot[Ae],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ze,Xe,Be.data):t.texImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,ze,Xe,Be.data);S.generateMipmaps=!1}else G?(De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height),Ce&&ge(S,we,ze,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ke,we.width,we.height,0,ze,Xe,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,ot[0].width,ot[0].height,we.depth);for(let Ae=0,xe=ot.length;Ae<xe;Ae++)if(Be=ot[Ae],S.format!==gi)if(ze!==null)if(G){if(Ce)if(S.layerUpdates.size>0){const tt=Tp(Be.width,Be.height,S.format,S.type);for(const lt of S.layerUpdates){const At=Be.data.subarray(lt*tt/Be.data.BYTES_PER_ELEMENT,(lt+1)*tt/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,lt,Be.width,Be.height,1,ze,At)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,we.depth,ze,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ae,Ke,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,we.depth,ze,Xe,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ae,Ke,Be.width,Be.height,we.depth,0,ze,Xe,Be.data)}else{G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,ot[0].width,ot[0].height);for(let Ae=0,xe=ot.length;Ae<xe;Ae++)Be=ot[Ae],S.format!==gi?ze!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ze,Xe,Be.data):t.texImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,ze,Xe,Be.data)}else if(S.isDataArrayTexture)if(G){if(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,we.width,we.height,we.depth),Ce)if(S.layerUpdates.size>0){const Ae=Tp(we.width,we.height,S.format,S.type);for(const xe of S.layerUpdates){const tt=we.data.subarray(xe*Ae/we.data.BYTES_PER_ELEMENT,(xe+1)*Ae/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,we.width,we.height,1,ze,Xe,tt)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,Xe,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,ze,Xe,we.data);else if(S.isData3DTexture)G?(De&&t.texStorage3D(n.TEXTURE_3D,je,Ke,we.width,we.height,we.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,Xe,we.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,ze,Xe,we.data);else if(S.isFramebufferTexture){if(De)if(G)t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height);else{let Ae=we.width,xe=we.height;for(let tt=0;tt<je;tt++)t.texImage2D(n.TEXTURE_2D,tt,Ke,Ae,xe,0,ze,Xe,null),Ae>>=1,xe>>=1}}else if(ot.length>0){if(G&&De){const Ae=He(ot[0]);t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height)}for(let Ae=0,xe=ot.length;Ae<xe;Ae++)Be=ot[Ae],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ze,Xe,Be):t.texImage2D(n.TEXTURE_2D,Ae,Ke,ze,Xe,Be);S.generateMipmaps=!1}else if(G){if(De){const Ae=He(we);t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Xe,we)}else t.texImage2D(n.TEXTURE_2D,0,Ke,ze,Xe,we);v(S)&&g(ie),Fe.__version=re.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ie(w,S,H){if(S.image.length!==6)return;const ie=ft(w,S),ve=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);const re=i.get(ve);if(ve.version!==re.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const Fe=wt.getPrimaries(wt.workingColorSpace),be=S.colorSpace===wr?null:wt.getPrimaries(S.colorSpace),Je=S.colorSpace===wr||Fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!Oe&&!we?ze[xe]=y(S.image[xe],!0,r.maxCubemapSize):ze[xe]=we?S.image[xe].image:S.image[xe],ze[xe]=_e(S,ze[xe]);const Xe=ze[0],Ke=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),ot=C(S.internalFormat,Ke,Be,S.colorSpace),G=S.isVideoTexture!==!0,De=re.__version===void 0||ie===!0,Ce=ve.dataReady;let je=N(S,Xe);Ne(n.TEXTURE_CUBE_MAP,S);let Ae;if(Oe){G&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,ot,Xe.width,Xe.height);for(let xe=0;xe<6;xe++){Ae=ze[xe].mipmaps;for(let tt=0;tt<Ae.length;tt++){const lt=Ae[tt];S.format!==gi?Ke!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,lt.width,lt.height,Ke,lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,ot,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,lt.width,lt.height,Ke,Be,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,ot,lt.width,lt.height,0,Ke,Be,lt.data)}}}else{if(Ae=S.mipmaps,G&&De){Ae.length>0&&je++;const xe=He(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,ot,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,Ke,Be,ze[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,ze[xe].width,ze[xe].height,0,Ke,Be,ze[xe].data);for(let tt=0;tt<Ae.length;tt++){const At=Ae[tt].image[xe].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,At.width,At.height,Ke,Be,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,ot,At.width,At.height,0,Ke,Be,At.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ke,Be,ze[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,Ke,Be,ze[xe]);for(let tt=0;tt<Ae.length;tt++){const lt=Ae[tt];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,Ke,Be,lt.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,ot,Ke,Be,lt.image[xe])}}}v(S)&&g(n.TEXTURE_CUBE_MAP),re.__version=ve.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Qe(w,S,H,ie,ve,re){const Fe=s.convert(H.format,H.colorSpace),be=s.convert(H.type),Je=C(H.internalFormat,Fe,be,H.colorSpace),Oe=i.get(S),we=i.get(H);if(we.__renderTarget=S,!Oe.__hasExternalTextures){const ze=Math.max(1,S.width>>re),Xe=Math.max(1,S.height>>re);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,re,Je,ze,Xe,S.depth,0,Fe,be,null):t.texImage2D(ve,re,Je,ze,Xe,0,Fe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ae(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ve,we.__webglTexture,0,Me(S)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ve,we.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(w,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const ie=S.depthTexture,ve=ie&&ie.isDepthTexture?ie.type:null,re=b(S.stencilBuffer,ve),Fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=Me(S);ae(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,re,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,re,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,w)}else{const ie=S.textures;for(let ve=0;ve<ie.length;ve++){const re=ie[ve],Fe=s.convert(re.format,re.colorSpace),be=s.convert(re.type),Je=C(re.internalFormat,Fe,be,re.colorSpace),Oe=Me(S);H&&ae(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Je,S.width,S.height):ae(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Je,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Je,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(S.depthTexture);ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ve=ie.__webglTexture,re=Me(S);if(S.depthTexture.format===ia)ae(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(S.depthTexture.format===ra)ae(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Gt(w){const S=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const ie=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const ve=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",ve)};ie.addEventListener("dispose",ve),S.__depthDisposeCallback=ve}S.__boundDepthTexture=ie}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const ie=w.texture.mipmaps;ie&&ie.length>0?it(S.__webglFramebuffer[0],w):it(S.__webglFramebuffer,w)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=n.createRenderbuffer(),nt(S.__webglDepthbuffer[ie],w,!1);else{const ve=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,re)}}else{const ie=w.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),nt(S.__webglDepthbuffer,w,!1);else{const ve=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(w,S,H){const ie=i.get(w);S!==void 0&&Qe(ie.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Gt(w)}function M(w){const S=w.texture,H=i.get(w),ie=i.get(S);w.addEventListener("dispose",B);const ve=w.textures,re=w.isWebGLCubeRenderTarget===!0,Fe=ve.length>1;if(Fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,o.memory.textures++),re){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let Je=0;Je<S.mipmaps.length;Je++)H.__webglFramebuffer[be][Je]=n.createFramebuffer()}else H.__webglFramebuffer[be]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)H.__webglFramebuffer[be]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let be=0,Je=ve.length;be<Je;be++){const Oe=i.get(ve[be]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ae(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Je=ve[be];H.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[be]);const Oe=s.convert(Je.format,Je.colorSpace),we=s.convert(Je.type),ze=C(Je.internalFormat,Oe,we,Je.colorSpace,w.isXRRenderTarget===!0),Xe=Me(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,ze,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,H.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[be][Je],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je);else Qe(H.__webglFramebuffer[be],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(S)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let be=0,Je=ve.length;be<Je;be++){const Oe=ve[be],we=i.get(Oe);let ze=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ze=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ze,we.__webglTexture),Ne(ze,Oe),Qe(H.__webglFramebuffer,w,Oe,n.COLOR_ATTACHMENT0+be,ze,0),v(Oe)&&g(ze)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ie.__webglTexture),Ne(be,S),S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[Je],w,S,n.COLOR_ATTACHMENT0,be,Je);else Qe(H.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,be,0);v(S)&&g(be),t.unbindTexture()}w.depthBuffer&&Gt(w)}function te(w){const S=w.textures;for(let H=0,ie=S.length;H<ie;H++){const ve=S[H];if(v(ve)){const re=R(w),Fe=i.get(ve).__webglTexture;t.bindTexture(re,Fe),g(re),t.unbindTexture()}}}const oe=[],de=[];function Q(w){if(w.samples>0){if(ae(w)===!1){const S=w.textures,H=w.width,ie=w.height;let ve=n.COLOR_BUFFER_BIT;const re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(w),be=S.length>1;if(be)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Je=w.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const we=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,H,ie,0,0,H,ie,ve,n.NEAREST),c===!0&&(oe.length=0,de.length=0,oe.push(n.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(oe.push(re),de.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const we=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Me(w){return Math.min(r.maxSamples,w.samples)}function ae(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(w){const S=o.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function _e(w,S){const H=w.colorSpace,ie=w.format,ve=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==uo&&H!==wr&&(wt.getTransfer(H)===Lt?(ie!==gi||ve!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=ye,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=L,this.setupRenderTarget=M,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ae}function HT(n,e){function t(i,r=wr){let s;const o=wt.getTransfer(r);if(i===ur)return n.UNSIGNED_BYTE;if(i===Ed)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Md)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return n.BYTE;if(i===Gg)return n.SHORT;if(i===ta)return n.UNSIGNED_SHORT;if(i===Sd)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===sr)return n.FLOAT;if(i===Sa)return n.HALF_FLOAT;if(i===$g)return n.ALPHA;if(i===qg)return n.RGB;if(i===gi)return n.RGBA;if(i===ia)return n.DEPTH_COMPONENT;if(i===ra)return n.DEPTH_STENCIL;if(i===Xg)return n.RED;if(i===bd)return n.RED_INTEGER;if(i===jg)return n.RG;if(i===Td)return n.RG_INTEGER;if(i===wd)return n.RGBA_INTEGER;if(i===Mc||i===bc||i===Tc||i===wc)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===df||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===_f)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mf||i===gf)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_f)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vf||i===xf||i===yf||i===Sf||i===Ef||i===Mf||i===bf||i===Tf||i===wf||i===Af||i===Cf||i===Rf||i===Pf||i===If)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ef)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Af)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pf)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===If)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Df||i===Lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ac)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yg||i===Of||i===Nf||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class E0 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class $T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new E0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nr({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends go{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,d=null,h=null,m=null,x=null;const y=new $T,v={},g=t.getContextAttributes();let R=null,C=null;const b=[],N=[],k=new rt;let B=null;const J=new pi;J.viewport=new nn;const I=new pi;I.viewport=new nn;const P=[J,I],U=new hS;let ye=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let Ue=b[ge];return Ue===void 0&&(Ue=new vu,b[ge]=Ue),Ue.getTargetRaySpace()},this.getControllerGrip=function(ge){let Ue=b[ge];return Ue===void 0&&(Ue=new vu,b[ge]=Ue),Ue.getGripSpace()},this.getHand=function(ge){let Ue=b[ge];return Ue===void 0&&(Ue=new vu,b[ge]=Ue),Ue.getHandSpace()};function W(ge){const Ue=N.indexOf(ge.inputSource);if(Ue===-1)return;const Ie=b[Ue];Ie!==void 0&&(Ie.update(ge.inputSource,ge.frame,l||o),Ie.dispatchEvent({type:ge.type,data:ge.inputSource}))}function $(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",F);for(let ge=0;ge<b.length;ge++){const Ue=N[ge];Ue!==null&&(N[ge]=null,b[ge].disconnect(Ue))}ye=null,D=null,y.reset();for(const ge in v)delete v[ge];e.setRenderTarget(R),m=null,h=null,d=null,r=null,C=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){s=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){a=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ge){l=ge},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ge){if(r=ge,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",$),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Qe=null,nt=null;g.depth&&(nt=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=g.stencil?ra:ia,Qe=g.stencil?na:ps);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:s};h=d.createProjectionLayer(it),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new ms(h.textureWidth,h.textureHeight,{format:gi,type:ur,depthTexture:new a0(h.textureWidth,h.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new ms(m.framebufferWidth,m.framebufferHeight,{format:gi,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(ge){for(let Ue=0;Ue<ge.removed.length;Ue++){const Ie=ge.removed[Ue],Qe=N.indexOf(Ie);Qe>=0&&(N[Qe]=null,b[Qe].disconnect(Ie))}for(let Ue=0;Ue<ge.added.length;Ue++){const Ie=ge.added[Ue];let Qe=N.indexOf(Ie);if(Qe===-1){for(let it=0;it<b.length;it++)if(it>=N.length){N.push(Ie),Qe=it;break}else if(N[it]===null){N[it]=Ie,Qe=it;break}if(Qe===-1)break}const nt=b[Qe];nt&&nt.connect(Ie)}}const V=new Z,z=new Z;function Se(ge,Ue,Ie){V.setFromMatrixPosition(Ue.matrixWorld),z.setFromMatrixPosition(Ie.matrixWorld);const Qe=V.distanceTo(z),nt=Ue.projectionMatrix.elements,it=Ie.projectionMatrix.elements,Gt=nt[14]/(nt[10]-1),L=nt[14]/(nt[10]+1),M=(nt[9]+1)/nt[5],te=(nt[9]-1)/nt[5],oe=(nt[8]-1)/nt[0],de=(it[8]+1)/it[0],Q=Gt*oe,Me=Gt*de,ae=Qe/(-oe+de),he=ae*-oe;if(Ue.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(he),ge.translateZ(ae),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),nt[10]===-1)ge.projectionMatrix.copy(Ue.projectionMatrix),ge.projectionMatrixInverse.copy(Ue.projectionMatrixInverse);else{const _e=Gt+ae,He=L+ae,w=Q-he,S=Me+(Qe-he),H=M*L/He*_e,ie=te*L/He*_e;ge.projectionMatrix.makePerspective(w,S,H,ie,_e,He),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function Ee(ge,Ue){Ue===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(Ue.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(r===null)return;let Ue=ge.near,Ie=ge.far;y.texture!==null&&(y.depthNear>0&&(Ue=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),U.near=I.near=J.near=Ue,U.far=I.far=J.far=Ie,(ye!==U.near||D!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),ye=U.near,D=U.far),U.layers.mask=ge.layers.mask|6,J.layers.mask=U.layers.mask&3,I.layers.mask=U.layers.mask&5;const Qe=ge.parent,nt=U.cameras;Ee(U,Qe);for(let it=0;it<nt.length;it++)Ee(nt[it],Qe);nt.length===2?Se(U,J,I):U.projectionMatrix.copy(J.projectionMatrix),Re(ge,U,Qe)};function Re(ge,Ue,Ie){Ie===null?ge.matrix.copy(Ue.matrixWorld):(ge.matrix.copy(Ie.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(Ue.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(Ue.projectionMatrix),ge.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=Ff*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(ge){c=ge,h!==null&&(h.fixedFoveation=ge),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ge)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(U)},this.getCameraTexture=function(ge){return v[ge]};let Ne=null;function ft(ge,Ue){if(f=Ue.getViewerPose(l||o),x=Ue,f!==null){const Ie=f.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let Qe=!1;Ie.length!==U.cameras.length&&(U.cameras.length=0,Qe=!0);for(let L=0;L<Ie.length;L++){const M=Ie[L];let te=null;if(m!==null)te=m.getViewport(M);else{const de=d.getViewSubImage(h,M);te=de.viewport,L===0&&(e.setRenderTargetTextures(C,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(C))}let oe=P[L];oe===void 0&&(oe=new pi,oe.layers.enable(L),oe.viewport=new nn,P[L]=oe),oe.matrix.fromArray(M.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(M.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(te.x,te.y,te.width,te.height),L===0&&(U.matrix.copy(oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Qe===!0&&U.cameras.push(oe)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const L=d.getDepthInformation(Ie[0]);L&&L.isValid&&L.texture&&y.init(L,r.renderState)}if(nt&&nt.includes("camera-access")&&(e.state.unbindTexture(),d))for(let L=0;L<Ie.length;L++){const M=Ie[L].camera;if(M){let te=v[M];te||(te=new E0,v[M]=te);const oe=d.getCameraImage(M);te.sourceTexture=oe}}}for(let Ie=0;Ie<b.length;Ie++){const Qe=N[Ie],nt=b[Ie];Qe!==null&&nt!==void 0&&nt.update(Qe,Ue,l||o)}Ne&&Ne(ge,Ue),Ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ue}),x=null}const dt=new _0;dt.setAnimationLoop(ft),this.setAnimationLoop=function(ge){Ne=ge},this.dispose=function(){}}}const Yr=new fr,XT=new on;function jT(n,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,i0(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,R,C,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),d(v,g)):g.isMeshPhongMaterial?(s(v,g),f(v,g)):g.isMeshStandardMaterial?(s(v,g),h(v,g),g.isMeshPhysicalMaterial&&m(v,g,b)):g.isMeshMatcapMaterial?(s(v,g),x(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),y(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&a(v,g)):g.isPointsMaterial?c(v,g,R,C):g.isSpriteMaterial?l(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Vn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Vn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const R=e.get(g),C=R.envMap,b=R.envMapRotation;C&&(v.envMap.value=C,Yr.copy(b),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Yr)),v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function a(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,R,C){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*R,v.scale.value=C*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function l(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function d(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function h(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function m(v,g,R){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,g){g.matcap&&(v.matcap.value=g.matcap)}function y(v,g){const R=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,C){const b=C.program;i.uniformBlockBinding(R,b)}function l(R,C){let b=r[R.id];b===void 0&&(x(R),b=f(R),r[R.id]=b,R.addEventListener("dispose",v));const N=C.program;i.updateUBOMapping(R,N);const k=e.render.frame;s[R.id]!==k&&(h(R),s[R.id]=k)}function f(R){const C=d();R.__bindingPointIndex=C;const b=n.createBuffer(),N=R.__size,k=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,k),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,b),b}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const C=r[R.id],b=R.uniforms,N=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let k=0,B=b.length;k<B;k++){const J=Array.isArray(b[k])?b[k]:[b[k]];for(let I=0,P=J.length;I<P;I++){const U=J[I];if(m(U,k,I,N)===!0){const ye=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let $=0;$<D.length;$++){const F=D[$],V=y(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,ye+W,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ye,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,C,b,N){const k=R.value,B=C+"_"+b;if(N[B]===void 0)return typeof k=="number"||typeof k=="boolean"?N[B]=k:N[B]=k.clone(),!0;{const J=N[B];if(typeof k=="number"||typeof k=="boolean"){if(J!==k)return N[B]=k,!0}else if(J.equals(k)===!1)return J.copy(k),!0}return!1}function x(R){const C=R.uniforms;let b=0;const N=16;for(let B=0,J=C.length;B<J;B++){const I=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,U=I.length;P<U;P++){const ye=I[P],D=Array.isArray(ye.value)?ye.value:[ye.value];for(let W=0,$=D.length;W<$;W++){const F=D[W],V=y(F),z=b%N,Se=z%V.boundary,Ee=z+Se;b+=Se,Ee!==0&&N-Ee<V.storage&&(b+=N-Ee),ye.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ye.__offset=b,b+=V.storage}}}const k=b%N;return k>0&&(b+=N-k),R.__size=b,R.__cache={},this}function y(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function v(R){const C=R.target;C.removeEventListener("dispose",v);const b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function g(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:c,update:l,dispose:g}}class KT{constructor(e={}){const{canvas:t=ny(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,g=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Yn;let k=0,B=0,J=null,I=-1,P=null;const U=new nn,ye=new nn;let D=null;const W=new It(0);let $=0,F=t.width,V=t.height,z=1,Se=null,Ee=null;const Re=new nn(0,0,F,V),Ne=new nn(0,0,F,V);let ft=!1;const dt=new o0;let ge=!1,Ue=!1;const Ie=new on,Qe=new Z,nt=new nn,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function L(){return J===null?z:1}let M=i;function te(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),M===null){const q="webgl2";if(M=te(q,A),M===null)throw te(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,de,Q,Me,ae,he,_e,He,w,S,H,ie,ve,re,Fe,be,Je,Oe,we,ze,Xe,Ke,Be,ot;function G(){oe=new ob(M),oe.init(),Ke=new HT(M,oe),de=new QM(M,oe,e,Ke),Q=new zT(M,oe),de.reversedDepthBuffer&&h&&Q.buffers.depth.setReversed(!0),Me=new lb(M),ae=new AT,he=new VT(M,oe,Q,ae,de,Ke,Me),_e=new tb(b),He=new sb(b),w=new mS(M),Be=new JM(M,w),S=new ab(M,w,Me,Be),H=new fb(M,S,w,Me),we=new ub(M,de,he),be=new eb(ae),ie=new wT(b,_e,He,oe,de,Be,be),ve=new jT(b,ae),re=new RT,Fe=new NT(oe),Oe=new KM(b,_e,He,Q,H,m,c),Je=new BT(b,H,de),ot=new YT(M,Me,de,Q),ze=new ZM(M,oe,Me),Xe=new cb(M,oe,Me),Me.programs=ie.programs,b.capabilities=de,b.extensions=oe,b.properties=ae,b.renderLists=re,b.shadowMap=Je,b.state=Q,b.info=Me}G();const De=new qT(b,M);this.xr=De,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(F,V,!1))},this.getSize=function(A){return A.set(F,V)},this.setSize=function(A,q,ce=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,V=q,t.width=Math.floor(A*z),t.height=Math.floor(q*z),ce===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(F*z,V*z).floor()},this.setDrawingBufferSize=function(A,q,ce){F=A,V=q,z=ce,t.width=Math.floor(A*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,q,ce,le){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,q,ce,le),Q.viewport(U.copy(Re).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,q,ce,le){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,q,ce,le),Q.scissor(ye.copy(Ne).multiplyScalar(z).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){Q.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){Ee=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ce=!0){let le=0;if(A){let Y=!1;if(J!==null){const Te=J.texture.format;Y=Te===wd||Te===Td||Te===bd}if(Y){const Te=J.texture.type,$e=Te===ur||Te===ps||Te===ta||Te===na||Te===Ed||Te===Md,et=Oe.getClearColor(),ke=Oe.getClearAlpha(),ct=et.r,ut=et.g,at=et.b;$e?(x[0]=ct,x[1]=ut,x[2]=at,x[3]=ke,M.clearBufferuiv(M.COLOR,0,x)):(y[0]=ct,y[1]=ut,y[2]=at,y[3]=ke,M.clearBufferiv(M.COLOR,0,y))}else le|=M.COLOR_BUFFER_BIT}q&&(le|=M.DEPTH_BUFFER_BIT),ce&&(le|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Oe.dispose(),re.dispose(),Fe.dispose(),ae.dispose(),_e.dispose(),He.dispose(),H.dispose(),Be.dispose(),ot.dispose(),ie.dispose(),De.dispose(),De.removeEventListener("sessionstart",Wn),De.removeEventListener("sessionend",Mo),ci.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=Me.autoReset,q=Je.enabled,ce=Je.autoUpdate,le=Je.needsUpdate,Y=Je.type;G(),Me.autoReset=A,Je.enabled=q,Je.autoUpdate=ce,Je.needsUpdate=le,Je.type=Y}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const q=A.target;q.removeEventListener("dispose",xe),tt(q)}function tt(A){lt(A),ae.remove(A)}function lt(A){const q=ae.get(A).programs;q!==void 0&&(q.forEach(function(ce){ie.releaseProgram(ce)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ce,le,Y,Te){q===null&&(q=it);const $e=Y.isMesh&&Y.matrixWorld.determinant()<0,et=Ol(A,q,ce,le,Y);Q.setMaterial(le,$e);let ke=ce.index,ct=1;if(le.wireframe===!0){if(ke=S.getWireframeAttribute(ce),ke===void 0)return;ct=2}const ut=ce.drawRange,at=ce.attributes.position;let _t=ut.start*ct,bt=(ut.start+ut.count)*ct;Te!==null&&(_t=Math.max(_t,Te.start*ct),bt=Math.min(bt,(Te.start+Te.count)*ct)),ke!==null?(_t=Math.max(_t,0),bt=Math.min(bt,ke.count)):at!=null&&(_t=Math.max(_t,0),bt=Math.min(bt,at.count));const Wt=bt-_t;if(Wt<0||Wt===1/0)return;Be.setup(Y,le,et,ce,ke);let Dt,Ct=ze;if(ke!==null&&(Dt=w.get(ke),Ct=Xe,Ct.setIndex(Dt)),Y.isMesh)le.wireframe===!0?(Q.setLineWidth(le.wireframeLinewidth*L()),Ct.setMode(M.LINES)):Ct.setMode(M.TRIANGLES);else if(Y.isLine){let qe=le.linewidth;qe===void 0&&(qe=1),Q.setLineWidth(qe*L()),Y.isLineSegments?Ct.setMode(M.LINES):Y.isLineLoop?Ct.setMode(M.LINE_LOOP):Ct.setMode(M.LINE_STRIP)}else Y.isPoints?Ct.setMode(M.POINTS):Y.isSprite&&Ct.setMode(M.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Tt=Y._multiDrawCounts,Et=Y._multiDrawCount,hn=ke?w.get(ke).bytesPerElement:1,Gi=ae.get(le).currentProgram.getUniforms();for(let Mn=0;Mn<Et;Mn++)Gi.setValue(M,"_gl_DrawID",Mn),Ct.render(qe[Mn]/hn,Tt[Mn])}else if(Y.isInstancedMesh)Ct.renderInstances(_t,Wt,Y.count);else if(ce.isInstancedBufferGeometry){const qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Tt=Math.min(ce.instanceCount,qe);Ct.renderInstances(_t,Wt,Tt)}else Ct.render(_t,Wt)};function At(A,q,ce){A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Hi(A,q,ce),A.side=Or,A.needsUpdate=!0,Hi(A,q,ce),A.side=Kn):Hi(A,q,ce)}this.compile=function(A,q,ce=null){ce===null&&(ce=A),g=Fe.get(ce),g.init(q),C.push(g),ce.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==ce&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const le=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let $e=0;$e<Te.length;$e++){const et=Te[$e];At(et,ce,Y),le.add(et)}else At(Te,ce,Y),le.add(Te)}),g=C.pop(),le},this.compileAsync=function(A,q,ce=null){const le=this.compile(A,q,ce);return new Promise(Y=>{function Te(){if(le.forEach(function($e){ae.get($e).currentProgram.isReady()&&le.delete($e)}),le.size===0){Y(A);return}setTimeout(Te,10)}oe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mt=null;function Fn(A){Mt&&Mt(A)}function Wn(){ci.stop()}function Mo(){ci.start()}const ci=new _0;ci.setAnimationLoop(Fn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(A){Mt=A,De.setAnimationLoop(A),A===null?ci.stop():ci.start()},De.addEventListener("sessionstart",Wn),De.addEventListener("sessionend",Mo),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,q,J),g=Fe.get(A,C.length),g.init(q),C.push(g),Ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),dt.setFromProjectionMatrix(Ie,Di,q.reversedDepth),Ue=this.localClippingEnabled,ge=be.init(this.clippingPlanes,Ue),v=re.get(A,R.length),v.init(),R.push(v),De.enabled===!0&&De.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&Cs(Te,q,-1/0,b.sortObjects)}Cs(A,q,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Se,Ee),Gt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Gt&&Oe.addToRenderList(v,A),this.info.render.frame++,ge===!0&&be.beginShadows();const ce=g.state.shadowsArray;Je.render(ce,A,q),ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=v.opaque,Y=v.transmissive;if(g.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Y.length>0)for(let $e=0,et=Te.length;$e<et;$e++){const ke=Te[$e];La(le,Y,A,ke)}Gt&&Oe.render(A);for(let $e=0,et=Te.length;$e<et;$e++){const ke=Te[$e];zr(v,A,ke,ke.viewport)}}else Y.length>0&&La(le,Y,A,q),Gt&&Oe.render(A),zr(v,A,q);J!==null&&B===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),A.isScene===!0&&A.onAfterRender(b,A,q),Be.resetDefaultState(),I=-1,P=null,C.pop(),C.length>0?(g=C[C.length-1],ge===!0&&be.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function Cs(A,q,ce,le){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||dt.intersectsSprite(A)){le&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);const $e=H.update(A),et=A.material;et.visible&&v.push(A,$e,et,ce,nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||dt.intersectsObject(A))){const $e=H.update(A),et=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),nt.copy($e.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)),Array.isArray(et)){const ke=$e.groups;for(let ct=0,ut=ke.length;ct<ut;ct++){const at=ke[ct],_t=et[at.materialIndex];_t&&_t.visible&&v.push(A,$e,_t,ce,nt.z,at)}}else et.visible&&v.push(A,$e,et,ce,nt.z,null)}}const Te=A.children;for(let $e=0,et=Te.length;$e<et;$e++)Cs(Te[$e],q,ce,le)}function zr(A,q,ce,le){const Y=A.opaque,Te=A.transmissive,$e=A.transparent;g.setupLightsView(ce),ge===!0&&be.setGlobalState(b.clippingPlanes,ce),le&&Q.viewport(U.copy(le)),Y.length>0&&Vr(Y,q,ce),Te.length>0&&Vr(Te,q,ce),$e.length>0&&Vr($e,q,ce),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function La(A,q,ce,le){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[le.id]===void 0&&(g.state.transmissionRenderTarget[le.id]=new ms(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Sa:ur,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[le.id],$e=le.viewport||U;Te.setSize($e.z*b.transmissionResolutionScale,$e.w*b.transmissionResolutionScale);const et=b.getRenderTarget(),ke=b.getActiveCubeFace(),ct=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(W),$=b.getClearAlpha(),$<1&&b.setClearColor(16777215,.5),b.clear(),Gt&&Oe.render(ce);const ut=b.toneMapping;b.toneMapping=Dr;const at=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),g.setupLightsView(le),ge===!0&&be.setGlobalState(b.clippingPlanes,le),Vr(A,ce,le),he.updateMultisampleRenderTarget(Te),he.updateRenderTargetMipmap(Te),oe.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let bt=0,Wt=q.length;bt<Wt;bt++){const Dt=q[bt],Ct=Dt.object,qe=Dt.geometry,Tt=Dt.material,Et=Dt.group;if(Tt.side===Kn&&Ct.layers.test(le.layers)){const hn=Tt.side;Tt.side=Vn,Tt.needsUpdate=!0,Oa(Ct,ce,le,qe,Tt,Et),Tt.side=hn,Tt.needsUpdate=!0,_t=!0}}_t===!0&&(he.updateMultisampleRenderTarget(Te),he.updateRenderTargetMipmap(Te))}b.setRenderTarget(et,ke,ct),b.setClearColor(W,$),at!==void 0&&(le.viewport=at),b.toneMapping=ut}function Vr(A,q,ce){const le=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Te=A.length;Y<Te;Y++){const $e=A[Y],et=$e.object,ke=$e.geometry,ct=$e.group;let ut=$e.material;ut.allowOverride===!0&&le!==null&&(ut=le),et.layers.test(ce.layers)&&Oa(et,q,ce,ke,ut,ct)}}function Oa(A,q,ce,le,Y,Te){A.onBeforeRender(b,q,ce,le,Y,Te),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(b,q,ce,le,A,Te),Y.transparent===!0&&Y.side===Kn&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,b.renderBufferDirect(ce,q,le,Y,A,Te),Y.side=Or,Y.needsUpdate=!0,b.renderBufferDirect(ce,q,le,Y,A,Te),Y.side=Kn):b.renderBufferDirect(ce,q,le,Y,A,Te),A.onAfterRender(b,q,ce,le,Y,Te)}function Hi(A,q,ce){q.isScene!==!0&&(q=it);const le=ae.get(A),Y=g.state.lights,Te=g.state.shadowsArray,$e=Y.state.version,et=ie.getParameters(A,Y.state,Te,q,ce),ke=ie.getProgramCacheKey(et);let ct=le.programs;le.environment=A.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(A.isMeshStandardMaterial?He:_e).get(A.envMap||le.environment),le.envMapRotation=le.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",xe),ct=new Map,le.programs=ct);let ut=ct.get(ke);if(ut!==void 0){if(le.currentProgram===ut&&le.lightsStateVersion===$e)return To(A,et),ut}else et.uniforms=ie.getUniforms(A),A.onBeforeCompile(et,b),ut=ie.acquireProgram(et,ke),ct.set(ke,ut),le.uniforms=et.uniforms;const at=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(at.clippingPlanes=be.uniform),To(A,et),le.needsLights=Na(A),le.lightsStateVersion=$e,le.needsLights&&(at.ambientLightColor.value=Y.state.ambient,at.lightProbe.value=Y.state.probe,at.directionalLights.value=Y.state.directional,at.directionalLightShadows.value=Y.state.directionalShadow,at.spotLights.value=Y.state.spot,at.spotLightShadows.value=Y.state.spotShadow,at.rectAreaLights.value=Y.state.rectArea,at.ltc_1.value=Y.state.rectAreaLTC1,at.ltc_2.value=Y.state.rectAreaLTC2,at.pointLights.value=Y.state.point,at.pointLightShadows.value=Y.state.pointShadow,at.hemisphereLights.value=Y.state.hemi,at.directionalShadowMap.value=Y.state.directionalShadowMap,at.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,at.spotShadowMap.value=Y.state.spotShadowMap,at.spotLightMatrix.value=Y.state.spotLightMatrix,at.spotLightMap.value=Y.state.spotLightMap,at.pointShadowMap.value=Y.state.pointShadowMap,at.pointShadowMatrix.value=Y.state.pointShadowMatrix),le.currentProgram=ut,le.uniformsList=null,ut}function bo(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Cc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function To(A,q){const ce=ae.get(A);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Ol(A,q,ce,le,Y){q.isScene!==!0&&(q=it),he.resetTextureUnits();const Te=q.fog,$e=le.isMeshStandardMaterial?q.environment:null,et=J===null?b.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:uo,ke=(le.isMeshStandardMaterial?He:_e).get(le.envMap||$e),ct=le.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,bt=!!ce.morphAttributes.color;let Wt=Dr;le.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Wt=b.toneMapping);const Dt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ct=Dt!==void 0?Dt.length:0,qe=ae.get(le),Tt=g.state.lights;if(ge===!0&&(Ue===!0||A!==P)){const Xt=A===P&&le.id===I;be.setState(le,A,Xt)}let Et=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Tt.state.version||qe.outputColorSpace!==et||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==ke||le.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==be.numPlanes||qe.numIntersection!==be.numIntersection)||qe.vertexAlphas!==ct||qe.vertexTangents!==ut||qe.morphTargets!==at||qe.morphNormals!==_t||qe.morphColors!==bt||qe.toneMapping!==Wt||qe.morphTargetsCount!==Ct)&&(Et=!0):(Et=!0,qe.__version=le.version);let hn=qe.currentProgram;Et===!0&&(hn=Hi(le,q,Y));let Gi=!1,Mn=!1,Hr=!1;const Nt=hn.getUniforms(),cn=qe.uniforms;if(Q.useProgram(hn.program)&&(Gi=!0,Mn=!0,Hr=!0),le.id!==I&&(I=le.id,Mn=!0),Gi||P!==A){Q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(M,"projectionMatrix",A.projectionMatrix),Nt.setValue(M,"viewMatrix",A.matrixWorldInverse);const bn=Nt.map.cameraPosition;bn!==void 0&&bn.setValue(M,Qe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&Nt.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Nt.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Mn=!0,Hr=!0)}if(Y.isSkinnedMesh){Nt.setOptional(M,Y,"bindMatrix"),Nt.setOptional(M,Y,"bindMatrixInverse");const Xt=Y.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Nt.setValue(M,"boneTexture",Xt.boneTexture,he))}Y.isBatchedMesh&&(Nt.setOptional(M,Y,"batchingTexture"),Nt.setValue(M,"batchingTexture",Y._matricesTexture,he),Nt.setOptional(M,Y,"batchingIdTexture"),Nt.setValue(M,"batchingIdTexture",Y._indirectTexture,he),Nt.setOptional(M,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(M,"batchingColorTexture",Y._colorsTexture,he));const ln=ce.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&we.update(Y,ce,hn),(Mn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Nt.setValue(M,"receiveShadow",Y.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(cn.envMap.value=ke,cn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(cn.envMapIntensity.value=q.environmentIntensity),Mn&&(Nt.setValue(M,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&$n(cn,Hr),Te&&le.fog===!0&&ve.refreshFogUniforms(cn,Te),ve.refreshMaterialUniforms(cn,le,z,V,g.state.transmissionRenderTarget[A.id]),Cc.upload(M,bo(qe),cn,he)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Cc.upload(M,bo(qe),cn,he),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Nt.setValue(M,"center",Y.center),Nt.setValue(M,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(M,"normalMatrix",Y.normalMatrix),Nt.setValue(M,"modelMatrix",Y.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Xt=le.uniformsGroups;for(let bn=0,wo=Xt.length;bn<wo;bn++){const Wi=Xt[bn];ot.update(Wi,hn),ot.bind(Wi,hn)}}return hn}function $n(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Na(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,q,ce){const le=ae.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=q,ae.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ce,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ce=ae.get(A);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const Ua=M.createFramebuffer();this.setRenderTarget=function(A,q=0,ce=0){J=A,k=q,B=ce;let le=!0,Y=null,Te=!1,$e=!1;if(A){const ke=ae.get(A);if(ke.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(M.FRAMEBUFFER,null),le=!1;else if(ke.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(ke.__hasExternalTextures)he.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(ke.__boundDepthTexture!==at){if(at!==null&&ae.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const ct=A.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&($e=!0);const ut=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ut[q])?Y=ut[q][ce]:Y=ut[q],Te=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?Y=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[ce]:Y=ut,U.copy(A.viewport),ye.copy(A.scissor),D=A.scissorTest}else U.copy(Re).multiplyScalar(z).floor(),ye.copy(Ne).multiplyScalar(z).floor(),D=ft;if(ce!==0&&(Y=Ua),Q.bindFramebuffer(M.FRAMEBUFFER,Y)&&le&&Q.drawBuffers(A,Y),Q.viewport(U),Q.scissor(ye),Q.setScissorTest(D),Te){const ke=ae.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,ce)}else if($e){const ke=q;for(let ct=0;ct<A.textures.length;ct++){const ut=ae.get(A.textures[ct]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+ct,ut.__webglTexture,ce,ke)}}else if(A!==null&&ce!==0){const ke=ae.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ke.__webglTexture,ce)}I=-1},this.readRenderTargetPixels=function(A,q,ce,le,Y,Te,$e,et=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(ke=ke[$e]),ke){Q.bindFramebuffer(M.FRAMEBUFFER,ke);try{const ct=A.textures[et],ut=ct.format,at=ct.type;if(!de.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-le&&ce>=0&&ce<=A.height-Y&&(A.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(q,ce,le,Y,Ke.convert(ut),Ke.convert(at),Te))}finally{const ct=J!==null?ae.get(J).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(A,q,ce,le,Y,Te,$e,et=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(ke=ke[$e]),ke)if(q>=0&&q<=A.width-le&&ce>=0&&ce<=A.height-Y){Q.bindFramebuffer(M.FRAMEBUFFER,ke);const ct=A.textures[et],ut=ct.format,at=ct.type;if(!de.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,_t),M.bufferData(M.PIXEL_PACK_BUFFER,Te.byteLength,M.STREAM_READ),A.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(q,ce,le,Y,Ke.convert(ut),Ke.convert(at),0);const bt=J!==null?ae.get(J).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,bt);const Wt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await iy(M,Wt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,_t),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Te),M.deleteBuffer(_t),M.deleteSync(Wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ce=0){const le=Math.pow(2,-ce),Y=Math.floor(A.image.width*le),Te=Math.floor(A.image.height*le),$e=q!==null?q.x:0,et=q!==null?q.y:0;he.setTexture2D(A,0),M.copyTexSubImage2D(M.TEXTURE_2D,ce,0,0,$e,et,Y,Te),Q.unbindTexture()};const li=M.createFramebuffer(),Fa=M.createFramebuffer();this.copyTextureToTexture=function(A,q,ce=null,le=null,Y=0,Te=null){Te===null&&(Y!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let $e,et,ke,ct,ut,at,_t,bt,Wt;const Dt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(ce!==null)$e=ce.max.x-ce.min.x,et=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,ct=ce.min.x,ut=ce.min.y,at=ce.isBox3?ce.min.z:0;else{const ln=Math.pow(2,-Y);$e=Math.floor(Dt.width*ln),et=Math.floor(Dt.height*ln),A.isDataArrayTexture?ke=Dt.depth:A.isData3DTexture?ke=Math.floor(Dt.depth*ln):ke=1,ct=0,ut=0,at=0}le!==null?(_t=le.x,bt=le.y,Wt=le.z):(_t=0,bt=0,Wt=0);const Ct=Ke.convert(q.format),qe=Ke.convert(q.type);let Tt;q.isData3DTexture?(he.setTexture3D(q,0),Tt=M.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Tt=M.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Tt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=M.getParameter(M.UNPACK_ROW_LENGTH),hn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Gi=M.getParameter(M.UNPACK_SKIP_PIXELS),Mn=M.getParameter(M.UNPACK_SKIP_ROWS),Hr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Dt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Dt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ct),M.pixelStorei(M.UNPACK_SKIP_ROWS,ut),M.pixelStorei(M.UNPACK_SKIP_IMAGES,at);const Nt=A.isDataArrayTexture||A.isData3DTexture,cn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const ln=ae.get(A),Xt=ae.get(q),bn=ae.get(ln.__renderTarget),wo=ae.get(Xt.__renderTarget);Q.bindFramebuffer(M.READ_FRAMEBUFFER,bn.__webglFramebuffer),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,wo.__webglFramebuffer);for(let Wi=0;Wi<ke;Wi++)Nt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,Y,at+Wi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,Te,Wt+Wi)),M.blitFramebuffer(ct,ut,$e,et,_t,bt,$e,et,M.DEPTH_BUFFER_BIT,M.NEAREST);Q.bindFramebuffer(M.READ_FRAMEBUFFER,null),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||ae.has(A)){const ln=ae.get(A),Xt=ae.get(q);Q.bindFramebuffer(M.READ_FRAMEBUFFER,li),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,Fa);for(let bn=0;bn<ke;bn++)Nt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ln.__webglTexture,Y,at+bn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ln.__webglTexture,Y),cn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Xt.__webglTexture,Te,Wt+bn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Xt.__webglTexture,Te),Y!==0?M.blitFramebuffer(ct,ut,$e,et,_t,bt,$e,et,M.COLOR_BUFFER_BIT,M.NEAREST):cn?M.copyTexSubImage3D(Tt,Te,_t,bt,Wt+bn,ct,ut,$e,et):M.copyTexSubImage2D(Tt,Te,_t,bt,ct,ut,$e,et);Q.bindFramebuffer(M.READ_FRAMEBUFFER,null),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else cn?A.isDataTexture||A.isData3DTexture?M.texSubImage3D(Tt,Te,_t,bt,Wt,$e,et,ke,Ct,qe,Dt.data):q.isCompressedArrayTexture?M.compressedTexSubImage3D(Tt,Te,_t,bt,Wt,$e,et,ke,Ct,Dt.data):M.texSubImage3D(Tt,Te,_t,bt,Wt,$e,et,ke,Ct,qe,Dt):A.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Te,_t,bt,$e,et,Ct,qe,Dt.data):A.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Te,_t,bt,Dt.width,Dt.height,Ct,Dt.data):M.texSubImage2D(M.TEXTURE_2D,Te,_t,bt,$e,et,Ct,qe,Dt);M.pixelStorei(M.UNPACK_ROW_LENGTH,Et),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,hn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Gi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Mn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Hr),Te===0&&q.generateMipmaps&&M.generateMipmap(Tt),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ce=null,le=null,Y=0){return eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,ce,le,Y)},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){k=0,B=0,J=null,Q.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function Dd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const zt={},no=[],Fi=()=>{},M0=()=>!1,ml=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gl=n=>n.startsWith("onUpdate:"),En=Object.assign,Ld=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},JT=Object.prototype.hasOwnProperty,Rt=(n,e)=>JT.call(n,e),mt=Array.isArray,as=n=>Ta(n)==="[object Map]",Vf=n=>Ta(n)==="[object Set]",Kp=n=>Ta(n)==="[object Date]",pt=n=>typeof n=="function",an=n=>typeof n=="string",Ur=n=>typeof n=="symbol",Ht=n=>n!==null&&typeof n=="object",b0=n=>(Ht(n)||pt(n))&&pt(n.then)&&pt(n.catch),ZT=Object.prototype.toString,Ta=n=>ZT.call(n),QT=n=>Ta(n).slice(8,-1),ew=n=>Ta(n)==="[object Object]",Od=n=>an(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$o=Dd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},tw=/-\w/g,vi=_l(n=>n.replace(tw,e=>e.slice(1).toUpperCase())),nw=/\B([A-Z])/g,Ms=_l(n=>n.replace(nw,"-$1").toLowerCase()),T0=_l(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ru=_l(n=>n?`on${T0(n)}`:""),ir=(n,e)=>!Object.is(n,e),Pu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},w0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},iw=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Jp;const vl=()=>Jp||(Jp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nd(n){if(mt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=an(i)?aw(i):Nd(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(an(n)||Ht(n))return n}const rw=/;(?![^(]*\))/g,sw=/:([^]+)/,ow=/\/\*[^]*?\*\//g;function aw(n){const e={};return n.replace(ow,"").split(rw).forEach(t=>{if(t){const i=t.split(sw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ud(n){let e="";if(an(n))e=n;else if(mt(n))for(let t=0;t<n.length;t++){const i=Ud(n[t]);i&&(e+=i+" ")}else if(Ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const cw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lw=Dd(cw);function A0(n){return!!n||n===""}function uw(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=xl(n[i],e[i]);return t}function Zp(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&xl(r,t[o])){s=o;break}if(s<0)return!1;i[s]=1}return!0}function xl(n,e){if(n===e)return!0;let t=Kp(n),i=Kp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ur(n),i=Ur(e),t||i)return n===e;if(t=mt(n),i=mt(e),t||i)return t&&i?uw(n,e):!1;if(t=Ht(n),i=Ht(e),t||i){if(!t||!i)return!1;if(t=as(n),i=as(e),t||i||(t=Vf(n),i=Vf(e),t||i))return t&&i?Zp(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xl(n[o],e[o]))return!1}}return String(n)===String(e)}let yn;class fw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&yn&&(yn.active?(this.parent=yn,this.index=(yn.scopes||(yn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){++this._on===1&&(this.prevScope=yn,yn=this)}off(){if(this._on>0&&--this._on===0){if(yn===this)yn=this.prevScope;else{let e=yn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dw(){return yn}let Bt;const Iu=new WeakSet;class C0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&(yn.active?yn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Iu.has(this)&&(Iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||P0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qp(this),I0(this);const e=Bt,t=xi;Bt=this,xi=!0;try{return this.fn()}finally{D0(this),Bt=e,xi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kd(e);this.deps=this.depsTail=void 0,Qp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hf(this)&&this.run()}get dirty(){return Hf(this)}}let R0=0,qo,Xo;function P0(n,e=!1){if(n.flags|=8,e){n.next=Xo,Xo=n;return}n.next=qo,qo=n}function Fd(){R0++}function Bd(){if(--R0>0)return;if(Xo){let e=Xo;for(Xo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qo;){let e=qo;for(qo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function I0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function D0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),kd(i),hw(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(L0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function L0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ca)||(n.globalVersion=ca,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hf(n))))return;n.flags|=2;const e=n.dep,t=Bt,i=xi;Bt=n,xi=!0;try{I0(n);const r=n.fn(n._value);(e.version===0||ir(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Bt=t,xi=i,D0(n),n.flags&=-3}}function kd(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)kd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function hw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xi=!0;const O0=[];function dr(){O0.push(xi),xi=!1}function hr(){const n=O0.pop();xi=n===void 0?!0:n}function Qp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Bt;Bt=void 0;try{e()}finally{Bt=t}}}let ca=0;class pw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class N0{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Bt||!xi||Bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Bt)t=this.activeLink=new pw(Bt,this),Bt.deps?(t.prevDep=Bt.depsTail,Bt.depsTail.nextDep=t,Bt.depsTail=t):Bt.deps=Bt.depsTail=t,U0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Bt.depsTail,t.nextDep=void 0,Bt.depsTail.nextDep=t,Bt.depsTail=t,Bt.deps===t&&(Bt.deps=i)}return t}trigger(e){this.version++,ca++,this.notify(e)}notify(e){Fd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bd()}}}function U0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)U0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gf=new WeakMap,cs=Symbol(""),Wf=Symbol(""),la=Symbol("");function Cn(n,e,t){if(xi&&Bt){let i=Gf.get(n);i||Gf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new N0),r.map=i,r.key=t),r.track()}}function rr(n,e,t,i,r,s){const o=Gf.get(n);if(!o){ca++;return}const a=c=>{c&&c.trigger()};if(Fd(),e==="clear")o.forEach(a);else{const c=mt(n),l=c&&Od(t);if(c&&t==="length"){const f=Number(i);o.forEach((d,h)=>{(h==="length"||h===la||!Ur(h)&&h>=f)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(la)),e){case"add":c?l&&a(o.get("length")):(a(o.get(cs)),as(n)&&a(o.get(Wf)));break;case"delete":c||(a(o.get(cs)),as(n)&&a(o.get(Wf)));break;case"set":as(n)&&a(o.get(cs));break}}Bd()}function Xs(n){const e=Ot(n);return e===n?e:(Cn(e,"iterate",la),Bi(n)?e:e.map(vs))}function zd(n){return Cn(n=Ot(n),"iterate",la),n}function Ci(n,e){return _s(n)?ua(io(n)?vs(e):e):vs(e)}const mw={__proto__:null,[Symbol.iterator](){return Du(this,Symbol.iterator,n=>Ci(this,n))},concat(...n){return Xs(this).concat(...n.map(e=>mt(e)?Xs(e):e))},entries(){return Du(this,"entries",n=>(n[1]=Ci(this,n[1]),n))},every(n,e){return Ki(this,"every",n,e,void 0,arguments)},filter(n,e){return Ki(this,"filter",n,e,t=>t.map(i=>Ci(this,i)),arguments)},find(n,e){return Ki(this,"find",n,e,t=>Ci(this,t),arguments)},findIndex(n,e){return Ki(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ki(this,"findLast",n,e,t=>Ci(this,t),arguments)},findLastIndex(n,e){return Ki(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ki(this,"forEach",n,e,void 0,arguments)},includes(...n){return Lu(this,"includes",n)},indexOf(...n){return Lu(this,"indexOf",n)},join(n){return Xs(this).join(n)},lastIndexOf(...n){return Lu(this,"lastIndexOf",n)},map(n,e){return Ki(this,"map",n,e,void 0,arguments)},pop(){return Oo(this,"pop")},push(...n){return Oo(this,"push",n)},reduce(n,...e){return em(this,"reduce",n,e)},reduceRight(n,...e){return em(this,"reduceRight",n,e)},shift(){return Oo(this,"shift")},some(n,e){return Ki(this,"some",n,e,void 0,arguments)},splice(...n){return Oo(this,"splice",n)},toReversed(){return Xs(this).toReversed()},toSorted(n){return Xs(this).toSorted(n)},toSpliced(...n){return Xs(this).toSpliced(...n)},unshift(...n){return Oo(this,"unshift",n)},values(){return Du(this,"values",n=>Ci(this,n))}};function Du(n,e,t){const i=zd(n),r=i[e]();return i!==n&&!Bi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const gw=Array.prototype;function Ki(n,e,t,i,r,s){const o=zd(n),a=o!==n&&!Bi(n),c=o[e];if(c!==gw[e]){const d=c.apply(n,s);return a?vs(d):d}let l=t;o!==n&&(a?l=function(d,h){return t.call(this,Ci(n,d),h,n)}:t.length>2&&(l=function(d,h){return t.call(this,d,h,n)}));const f=c.call(o,l,i);return a&&r?r(f):f}function em(n,e,t,i){const r=zd(n),s=r!==n&&!Bi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(l,f,d){return a&&(a=!1,l=Ci(n,l)),t.call(this,l,Ci(n,f),d,n)}):t.length>3&&(o=function(l,f,d){return t.call(this,l,f,d,n)}));const c=r[e](o,...i);return a?Ci(n,c):c}function Lu(n,e,t){const i=Ot(n);Cn(i,"iterate",la);const r=i[e](...t);return(r===-1||r===!1)&&Wd(t[0])?(t[0]=Ot(t[0]),i[e](...t)):r}function Oo(n,e,t=[]){dr(),Fd();const i=Ot(n)[e].apply(n,t);return Bd(),hr(),i}const _w=Dd("__proto__,__v_isRef,__isVue"),F0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ur));function vw(n){Ur(n)||(n=String(n));const e=Ot(this);return Cn(e,"has",n),e.hasOwnProperty(n)}class B0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Cw:H0:s?V0:z0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=mt(e);if(!r){let c;if(o&&(c=mw[t]))return c;if(t==="hasOwnProperty")return vw}const a=Reflect.get(e,t,Nn(e)?e:i);if((Ur(t)?F0.has(t):_w(t))||(r||Cn(e,"get",t),s))return a;if(Nn(a)){const c=o&&Od(t)?a:a.value;return r&&Ht(c)?qf(c):c}return Ht(a)?r?qf(a):Hd(a):a}}class k0 extends B0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=mt(e)&&Od(t);if(!this._isShallow){const l=_s(s);if(!Bi(i)&&!_s(i)&&(s=Ot(s),i=Ot(i)),!o&&Nn(s)&&!Nn(i))return l||(s.value=i),!0}const a=o?Number(t)<e.length:Rt(e,t),c=Reflect.set(e,t,i,Nn(e)?e:r);return e===Ot(r)&&c&&(a?ir(i,s)&&rr(e,"set",t,i):rr(e,"add",t,i)),c}deleteProperty(e,t){const i=Rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&rr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ur(t)||!F0.has(t))&&Cn(e,"has",t),i}ownKeys(e){return Cn(e,"iterate",mt(e)?"length":cs),Reflect.ownKeys(e)}}class xw extends B0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const yw=new k0,Sw=new xw,Ew=new k0(!0);const $f=n=>n,_c=n=>Reflect.getPrototypeOf(n);function Mw(n,e,t){return function(...i){const r=this.__v_raw,s=Ot(r),o=as(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),f=t?$f:e?ua:vs;return!e&&Cn(s,"iterate",c?Wf:cs),En(Object.create(l),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[f(d[0]),f(d[1])]:f(d),done:h}}})}}function vc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bw(n,e){const t={get(r){const s=this.__v_raw,o=Ot(s),a=Ot(r);n||(ir(r,a)&&Cn(o,"get",r),Cn(o,"get",a));const{has:c}=_c(o),l=e?$f:n?ua:vs;if(c.call(o,r))return l(s.get(r));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Cn(Ot(r),"iterate",cs),r.size},has(r){const s=this.__v_raw,o=Ot(s),a=Ot(r);return n||(ir(r,a)&&Cn(o,"has",r),Cn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=Ot(a),l=e?$f:n?ua:vs;return!n&&Cn(c,"iterate",cs),a.forEach((f,d)=>r.call(s,l(f),l(d),o))}};return En(t,n?{add:vc("add"),set:vc("set"),delete:vc("delete"),clear:vc("clear")}:{add(r){const s=Ot(this),o=_c(s),a=Ot(r),c=!e&&!Bi(r)&&!_s(r)?a:r;return o.has.call(s,c)||ir(r,c)&&o.has.call(s,r)||ir(a,c)&&o.has.call(s,a)||(s.add(c),rr(s,"add",c,c)),this},set(r,s){!e&&!Bi(s)&&!_s(s)&&(s=Ot(s));const o=Ot(this),{has:a,get:c}=_c(o);let l=a.call(o,r);l||(r=Ot(r),l=a.call(o,r));const f=c.call(o,r);return o.set(r,s),l?ir(s,f)&&rr(o,"set",r,s):rr(o,"add",r,s),this},delete(r){const s=Ot(this),{has:o,get:a}=_c(s);let c=o.call(s,r);c||(r=Ot(r),c=o.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return c&&rr(s,"delete",r,void 0),l},clear(){const r=Ot(this),s=r.size!==0,o=r.clear();return s&&rr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mw(r,n,e)}),t}function Vd(n,e){const t=bw(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Rt(t,r)&&r in i?t:i,r,s)}const Tw={get:Vd(!1,!1)},ww={get:Vd(!1,!0)},Aw={get:Vd(!0,!1)};const z0=new WeakMap,V0=new WeakMap,H0=new WeakMap,Cw=new WeakMap;function Rw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hd(n){return _s(n)?n:Gd(n,!1,yw,Tw,z0)}function Pw(n){return Gd(n,!1,Ew,ww,V0)}function qf(n){return Gd(n,!0,Sw,Aw,H0)}function Gd(n,e,t,i,r){if(!Ht(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Rw(QT(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function io(n){return _s(n)?io(n.__v_raw):!!(n&&n.__v_isReactive)}function _s(n){return!!(n&&n.__v_isReadonly)}function Bi(n){return!!(n&&n.__v_isShallow)}function Wd(n){return n?!!n.__v_raw:!1}function Ot(n){const e=n&&n.__v_raw;return e?Ot(e):n}function Iw(n){return!Rt(n,"__v_skip")&&Object.isExtensible(n)&&w0(n,"__v_skip",!0),n}const vs=n=>Ht(n)?Hd(n):n,ua=n=>Ht(n)?qf(n):n;function Nn(n){return n?n.__v_isRef===!0:!1}function Dw(n){return Nn(n)?n.value:n}const Lw={get:(n,e,t)=>e==="__v_raw"?n:Dw(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nn(r)&&!Nn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function G0(n){return io(n)?n:new Proxy(n,Lw)}class Ow{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new N0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return P0(this,!0),!0}get value(){const e=this.dep.track();return L0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nw(n,e,t=!1){let i,r;return pt(n)?i=n:(i=n.get,r=n.set),new Ow(i,r,t)}const xc={},Gc=new WeakMap;let ts;function Uw(n,e=!1,t=ts){if(t){let i=Gc.get(t);i||Gc.set(t,i=[]),i.push(n)}}function Fw(n,e,t=zt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,l=b=>r?b:Bi(b)||r===!1||r===0?Ar(b,1):Ar(b);let f,d,h,m,x=!1,y=!1;if(Nn(n)?(d=()=>n.value,x=Bi(n)):io(n)?(d=()=>l(n),x=!0):mt(n)?(y=!0,x=n.some(b=>io(b)||Bi(b)),d=()=>n.map(b=>{if(Nn(b))return b.value;if(io(b))return l(b);if(pt(b))return c?c(b,2):b()})):pt(n)?e?d=c?()=>c(n,2):n:d=()=>{if(h){dr();try{h()}finally{hr()}}const b=ts;ts=f;try{return c?c(n,3,[m]):n(m)}finally{ts=b}}:d=Fi,e&&r){const b=d,N=r===!0?1/0:r;d=()=>Ar(b(),N)}const v=dw(),g=()=>{f.stop(),v&&v.active&&Ld(v.effects,f)};if(s&&e){const b=e;e=(...N)=>{const k=b(...N);return g(),k}}let R=y?new Array(n.length).fill(xc):xc;const C=b=>{if(!(!(f.flags&1)||!f.dirty&&!b))if(e){const N=f.run();if(b||r||x||(y?N.some((k,B)=>ir(k,R[B])):ir(N,R))){h&&h();const k=ts;ts=f;try{const B=[N,R===xc?void 0:y&&R[0]===xc?[]:R,m];R=N,c?c(e,3,B):e(...B)}finally{ts=k}}}else f.run()};return a&&a(C),f=new C0(d),f.scheduler=o?()=>o(C,!1):C,m=b=>Uw(b,!1,f),h=f.onStop=()=>{const b=Gc.get(f);if(b){if(c)c(b,4);else for(const N of b)N();Gc.delete(f)}},e?i?C(!0):R=f.run():o?o(C.bind(null,!0),!0):f.run(),g.pause=f.pause.bind(f),g.resume=f.resume.bind(f),g.stop=g,g}function Ar(n,e=1/0,t){if(e<=0||!Ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nn(n))Ar(n.value,e,t);else if(mt(n))for(let i=0;i<n.length;i++)Ar(n[i],e,t);else if(Vf(n)||as(n))n.forEach(i=>{Ar(i,e,t)});else if(ew(n)){for(const i in n)Ar(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ar(n[i],e,t)}return n}function wa(n,e,t,i){try{return i?n(...i):n()}catch(r){yl(r,e,t)}}function Si(n,e,t,i){if(pt(n)){const r=wa(n,e,t,i);return r&&b0(r)&&r.catch(s=>{yl(s,e,t)}),r}if(mt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Si(n[s],e,t,i));return r}}function yl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||zt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](n,c,l)===!1)return}a=a.parent}if(s){dr(),wa(s,null,10,[n,c,l]),hr();return}}Bw(n,t,r,i,o)}function Bw(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ln=[];let wi=-1;const ro=[];let Tr=null,Js=0;const W0=Promise.resolve();let Wc=null;function kw(n){const e=Wc||W0;return n?e.then(this?n.bind(this):n):e}function zw(n){let e=wi+1,t=Ln.length;for(;e<t;){const i=e+t>>>1,r=Ln[i],s=fa(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function $d(n){if(!(n.flags&1)){const e=fa(n),t=Ln[Ln.length-1];!t||!(n.flags&2)&&e>=fa(t)?Ln.push(n):Ln.splice(zw(e),0,n),n.flags|=1,$0()}}function $0(){Wc||(Wc=W0.then(X0))}function Vw(n){if(!mt(n))Tr&&n.id===-1?Tr.splice(Js+1,0,n):n.flags&1||(ro.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ro.push(n[e]);$0()}function tm(n,e,t=wi+1){for(;t<Ln.length;t++){const i=Ln[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ln.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function q0(n){if(ro.length){const e=[...new Set(ro)].sort((t,i)=>fa(t)-fa(i));if(ro.length=0,Tr){for(let t=0;t<e.length;t++)Tr.push(e[t]);return}for(Tr=e,Js=0;Js<Tr.length;Js++){const t=Tr[Js];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Tr=null,Js=0}}const fa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function X0(n){try{for(wi=0;wi<Ln.length;wi++){const e=Ln[wi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wi<Ln.length;wi++){const e=Ln[wi];e&&(e.flags&=-2)}wi=-1,Ln.length=0,q0(),Wc=null,(Ln.length||ro.length)&&X0()}}let Li=null,j0=null;function $c(n){const e=Li;return Li=n,j0=n&&n.type.__scopeId||null,e}function Hw(n,e=Li,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&dm(-1);const s=$c(e),o=ls.length;let a;try{a=n(...r)}finally{for(let c=ls.length;c>o;c--)v_();$c(s),i._d&&dm(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Kr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(dr(),Si(c,t,8,[n.el,a,n,e]),hr())}}function Gw(n,e){if(On){let t=On.provides;const i=On.parent&&On.parent.provides;i===t&&(t=On.provides=Object.create(i)),t[n]=e}}function Rc(n,e,t=!1){const i=GA();if(i||so){let r=so?so._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&pt(e)?e.call(i&&i.proxy):e}}const Ww=Symbol.for("v-scx"),$w=()=>Rc(Ww);function Ou(n,e,t){return Y0(n,e,t)}function Y0(n,e,t=zt){const{immediate:i,deep:r,flush:s,once:o}=t,a=En({},t),c=e&&i||!e&&s!=="post";let l;if(pa){if(s==="sync"){const m=$w();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Fi,m.resume=Fi,m.pause=Fi,m}}const f=On;a.call=(m,x,y)=>Si(m,f,x,y);let d=!1;s==="post"?a.scheduler=m=>{kn(m,f&&f.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,x)=>{x?m():$d(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const h=Fw(n,e,a);return pa&&(l?l.push(h):c&&h()),h}function qw(n,e,t){const i=this.proxy,r=an(n)?n.includes(".")?K0(i,n):()=>i[n]:n.bind(i,i);let s;pt(e)?s=e:(s=e.handler,t=e);const o=Aa(this),a=Y0(r,s.bind(i),t);return o(),a}function K0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xw=Symbol("_vte"),Sl=n=>n.__isTeleport,Nu=Symbol("_leaveCb");function jw(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==xs){e=t;break}}return e}function J0(n){if(!Xd(n))return Sl(n.type)&&n.children?jw(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&pt(t.default))return t.default()}}function qd(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;qd(Sl(t.type)&&J0(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Yw(n,e){return pt(n)?En({name:n.name},e,{setup:n}):n}function Z0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function nm(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const qc=new WeakMap;function jo(n,e,t,i,r=!1){if(mt(n)){n.forEach((y,v)=>jo(y,e&&(mt(e)?e[v]:e),t,i,r));return}if(Yo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jo(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Kd(i.component):i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,f=a.refs===zt?a.refs={}:a.refs,d=a.setupState,h=Ot(d),m=d===zt?M0:y=>nm(f,y)?!1:Rt(h,y),x=(y,v)=>!(v&&nm(f,v));if(l!=null&&l!==c){if(im(e),an(l))f[l]=null,m(l)&&(d[l]=null);else if(Nn(l)){const y=e;x(l,y.k)&&(l.value=null),y.k&&(f[y.k]=null)}}if(pt(c))wa(c,a,12,[o,f]);else{const y=an(c),v=Nn(c);if(y||v){const g=()=>{if(n.f){const R=y?m(c)?d[c]:f[c]:x()||!n.k?c.value:f[n.k];if(r)mt(R)&&Ld(R,s);else if(mt(R))R.includes(s)||R.push(s);else if(y)f[c]=[s],m(c)&&(d[c]=f[c]);else{const C=[s];x(c,n.k)&&(c.value=C),n.k&&(f[n.k]=C)}}else y?(f[c]=o,m(c)&&(d[c]=o)):v&&(x(c,n.k)&&(c.value=o),n.k&&(f[n.k]=o))};if(o){const R=()=>{g(),qc.delete(n)};R.id=-1,qc.set(n,R),kn(R,t)}else im(n),g()}}}function im(n){const e=qc.get(n);e&&(e.flags|=8,qc.delete(n))}vl().requestIdleCallback;vl().cancelIdleCallback;const Yo=n=>!!n.type.__asyncLoader,Xd=n=>n.type.__isKeepAlive;function Kw(n,e){Q0(n,"a",e)}function Jw(n,e){Q0(n,"da",e)}function Q0(n,e,t=On){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(El(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Xd(r.parent.vnode)&&Zw(i,e,t,r),r=r.parent}}function Zw(n,e,t,i){const r=El(e,n,i,!0);e_(()=>{Ld(i[e],r)},t)}function El(n,e,t=On,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{dr();const a=Aa(t),c=Si(e,t,n,o);return a(),hr(),c});return i?r.unshift(s):r.push(s),s}}const pr=n=>(e,t=On)=>{(!pa||n==="sp")&&El(n,(...i)=>e(...i),t)},Qw=pr("bm"),eA=pr("m"),tA=pr("bu"),nA=pr("u"),iA=pr("bum"),e_=pr("um"),rA=pr("sp"),sA=pr("rtg"),oA=pr("rtc");function aA(n,e=On){El("ec",n,e)}const cA=Symbol.for("v-ndc"),Xf=n=>n?S_(n)?Kd(n):Xf(n.parent):null,Ko=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xf(n.parent),$root:n=>Xf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>n_(n),$forceUpdate:n=>n.f||(n.f=()=>{$d(n.update)}),$nextTick:n=>n.n||(n.n=kw.bind(n.proxy)),$watch:n=>qw.bind(n)}),Uu=(n,e)=>n!==zt&&!n.__isScriptSetup&&Rt(n,e),lA={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Uu(i,e))return o[e]=1,i[e];if(r!==zt&&Rt(r,e))return o[e]=2,r[e];if(Rt(s,e))return o[e]=3,s[e];if(t!==zt&&Rt(t,e))return o[e]=4,t[e];jf&&(o[e]=0)}}const l=Ko[e];let f,d;if(l)return e==="$attrs"&&Cn(n.attrs,"get",""),l(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==zt&&Rt(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,Rt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Uu(r,e)?(r[e]=t,!0):i!==zt&&Rt(i,e)?(i[e]=t,!0):Rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let c;return!!(t[a]||n!==zt&&a[0]!=="$"&&Rt(n,a)||Uu(e,a)||Rt(s,a)||Rt(i,a)||Rt(Ko,a)||Rt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function rm(n){return mt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let jf=!0;function uA(n){const e=n_(n),t=n.proxy,i=n.ctx;jf=!1,e.beforeCreate&&sm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:d,mounted:h,beforeUpdate:m,updated:x,activated:y,deactivated:v,beforeDestroy:g,beforeUnmount:R,destroyed:C,unmounted:b,render:N,renderTracked:k,renderTriggered:B,errorCaptured:J,serverPrefetch:I,expose:P,inheritAttrs:U,components:ye,directives:D,filters:W}=e;if(l&&fA(l,i,null),o)for(const V in o){const z=o[V];pt(z)&&(i[V]=z.bind(t))}if(r){const V=r.call(t,t);Ht(V)&&(n.data=Hd(V))}if(jf=!0,s)for(const V in s){const z=s[V],Se=pt(z)?z.bind(t,t):pt(z.get)?z.get.bind(t,t):Fi,Ee=!pt(z)&&pt(z.set)?z.set.bind(t):Fi,Re=YA({get:Se,set:Ee});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ne=>Re.value=Ne})}if(a)for(const V in a)t_(a[V],i,t,V);if(c){const V=pt(c)?c.call(t):c;Reflect.ownKeys(V).forEach(z=>{Gw(z,V[z])})}f&&sm(f,n,"c");function F(V,z){mt(z)?z.forEach(Se=>V(Se.bind(t))):z&&V(z.bind(t))}if(F(Qw,d),F(eA,h),F(tA,m),F(nA,x),F(Kw,y),F(Jw,v),F(aA,J),F(oA,k),F(sA,B),F(iA,R),F(e_,b),F(rA,I),mt(P))if(P.length){const V=n.exposed||(n.exposed={});P.forEach(z=>{Object.defineProperty(V,z,{get:()=>t[z],set:Se=>t[z]=Se,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===Fi&&(n.render=N),U!=null&&(n.inheritAttrs=U),ye&&(n.components=ye),D&&(n.directives=D),I&&Z0(n)}function fA(n,e,t=Fi){mt(n)&&(n=Yf(n));for(const i in n){const r=n[i];let s;Ht(r)?"default"in r?s=Rc(r.from||i,r.default,!0):s=Rc(r.from||i):s=Rc(r),Nn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function sm(n,e,t){Si(mt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function t_(n,e,t,i){let r=i.includes(".")?K0(t,i):()=>t[i];if(an(n)){const s=e[n];pt(s)&&Ou(r,s)}else if(pt(n))Ou(r,n.bind(t));else if(Ht(n))if(mt(n))n.forEach(s=>t_(s,e,t,i));else{const s=pt(n.handler)?n.handler.bind(t):e[n.handler];pt(s)&&Ou(r,s,n)}}function n_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Xc(c,l,o,!0)),Xc(c,e,o)),Ht(e)&&s.set(e,c),c}function Xc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Xc(n,s,t,!0),r&&r.forEach(o=>Xc(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=dA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const dA={data:om,props:am,emits:am,methods:ko,computed:ko,beforeCreate:In,created:In,beforeMount:In,mounted:In,beforeUpdate:In,updated:In,beforeDestroy:In,beforeUnmount:In,destroyed:In,unmounted:In,activated:In,deactivated:In,errorCaptured:In,serverPrefetch:In,components:ko,directives:ko,watch:pA,provide:om,inject:hA};function om(n,e){return e?n?function(){return En(pt(n)?n.call(this,this):n,pt(e)?e.call(this,this):e)}:e:n}function hA(n,e){return ko(Yf(n),Yf(e))}function Yf(n){if(mt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function In(n,e){return n?[...new Set([].concat(n,e))]:e}function ko(n,e){return n?En(Object.create(null),n,e):e}function am(n,e){return n?mt(n)&&mt(e)?[...new Set([...n,...e])]:En(Object.create(null),rm(n),rm(e??{})):e}function pA(n,e){if(!n)return e;if(!e)return n;const t=En(Object.create(null),n);for(const i in e)t[i]=In(n[i],e[i]);return t}function i_(){return{app:null,config:{isNativeTag:M0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mA=0;function gA(n,e){return function(i,r=null){pt(i)||(i=En({},i)),r!=null&&!Ht(r)&&(r=null);const s=i_(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:mA++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:KA,get config(){return s.config},set config(f){},use(f,...d){return o.has(f)||(f&&pt(f.install)?(o.add(f),f.install(l,...d)):pt(f)&&(o.add(f),f(l,...d))),l},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),l},component(f,d){return d?(s.components[f]=d,l):s.components[f]},directive(f,d){return d?(s.directives[f]=d,l):s.directives[f]},mount(f,d,h){if(!c){const m=l._ceVNode||Jn(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,f,h),c=!0,l._container=f,f.__vue_app__=l,Kd(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Si(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(f,d){return s.provides[f]=d,l},runWithContext(f){const d=so;so=l;try{return f()}finally{so=d}}};return l}}let so=null;const _A=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vi(e)}Modifiers`]||n[`${Ms(e)}Modifiers`];function vA(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||zt;let r=t;const s=e.startsWith("update:"),o=s&&_A(i,e.slice(7));o&&(o.trim&&(r=t.map(f=>an(f)?f.trim():f)),o.number&&(r=r.map(iw)));let a,c=i[a=Ru(e)]||i[a=Ru(vi(e))];!c&&s&&(c=i[a=Ru(Ms(e))]),c&&Si(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Si(l,n,6,r)}}const xA=new WeakMap;function r_(n,e,t=!1){const i=t?xA:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!pt(n)){const c=l=>{const f=r_(l,e,!0);f&&(a=!0,En(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Ht(n)&&i.set(n,null),null):(mt(s)?s.forEach(c=>o[c]=null):En(o,s),Ht(n)&&i.set(n,o),o)}function Ml(n,e){return!n||!ml(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Rt(n,e[0].toLowerCase()+e.slice(1))||Rt(n,Ms(e))||Rt(n,e))}function cm(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:d,data:h,setupState:m,ctx:x,inheritAttrs:y}=n,v=$c(n);let g,R;try{if(t.shapeFlag&4){const b=r||i,N=b;g=Ri(l.call(N,b,f,d,m,h,x)),R=a}else{const b=e;g=Ri(b.length>1?b(d,{attrs:a,slots:o,emit:c}):b(d,null)),R=e.props?a:yA(a)}}catch(b){ls.length=0,yl(b,n,1),g=Jn(xs)}let C=g;if(R&&y!==!1){const b=Object.keys(R),{shapeFlag:N}=C;b.length&&N&7&&(s&&b.some(gl)&&(R=SA(R,s)),C=mo(C,R,!1,!0))}if(t.dirs&&(C=mo(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition){const b=Sl(C.type)&&J0(C)||C;qd(b,t.transition)}return g=C,$c(v),g}const yA=n=>{let e;for(const t in n)(t==="class"||t==="style"||ml(t))&&((e||(e={}))[t]=n[t]);return e},SA=(n,e)=>{const t={};for(const i in n)(!gl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function EA(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?lm(i,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(s_(o,i,h)&&!Ml(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?lm(i,o,l):!0:!!o;return!1}function lm(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(s_(e,n,s)&&!Ml(t,s))return!0}return!1}function s_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Ht(i)&&Ht(r)?!xl(i,r):i!==r}function MA({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const o_={},a_=()=>Object.create(o_),c_=n=>Object.getPrototypeOf(n)===o_;function bA(n,e,t,i=!1){const r={},s=a_();n.propsDefaults=Object.create(null),l_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Pw(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function TA(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ot(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Ml(n.emitsOptions,h))continue;const m=e[h];if(c)if(Rt(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const x=vi(h);r[x]=Kf(c,a,x,m,n,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{l_(n,e,r,s)&&(l=!0);let f;for(const d in a)(!e||!Rt(e,d)&&((f=Ms(d))===d||!Rt(e,f)))&&(c?t&&(t[d]!==void 0||t[f]!==void 0)&&(r[d]=Kf(c,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Rt(e,d))&&(delete s[d],l=!0)}l&&rr(n.attrs,"set","")}function l_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if($o(c))continue;const l=e[c];let f;r&&Rt(r,f=vi(c))?!s||!s.includes(f)?t[f]=l:(a||(a={}))[f]=l:Ml(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Ot(t),l=a||zt;for(let f=0;f<s.length;f++){const d=s[f];t[d]=Kf(r,c,d,l[d],n,!Rt(l,d))}}return o}function Kf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pt(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const f=Aa(r);i=l[t]=c.call(null,e),f()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ms(t))&&(i=!0))}return i}const wA=new WeakMap;function u_(n,e,t=!1){const i=t?wA:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!pt(n)){const f=d=>{c=!0;const[h,m]=u_(d,e,!0);En(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!c)return Ht(n)&&i.set(n,no),no;if(mt(s))for(let f=0;f<s.length;f++){const d=vi(s[f]);um(d)&&(o[d]=zt)}else if(s)for(const f in s){const d=vi(f);if(um(d)){const h=s[f],m=o[d]=mt(h)||pt(h)?{type:h}:En({},h),x=m.type;let y=!1,v=!0;if(mt(x))for(let g=0;g<x.length;++g){const R=x[g],C=pt(R)&&R.name;if(C==="Boolean"){y=!0;break}else C==="String"&&(v=!1)}else y=pt(x)&&x.name==="Boolean";m[0]=y,m[1]=v,(y||Rt(m,"default"))&&a.push(d)}}const l=[o,a];return Ht(n)&&i.set(n,l),l}function um(n){return n[0]!=="$"&&!$o(n)}const jd=n=>n==="_"||n==="_ctx"||n==="$stable",Yd=n=>mt(n)?n.map(Ri):[Ri(n)],AA=(n,e,t)=>{if(e._n)return e;const i=Hw((...r)=>Yd(e(...r)),t);return i._c=!1,i},f_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(jd(r))continue;const s=n[r];if(pt(s))e[r]=AA(r,s,i);else if(s!=null){const o=Yd(s);e[r]=()=>o}}},d_=(n,e)=>{const t=Yd(e);n.slots.default=()=>t},h_=(n,e,t)=>{for(const i in e)(t||!jd(i))&&(n[i]=e[i])},CA=(n,e,t)=>{const i=n.slots=a_();if(n.vnode.shapeFlag&32){const r=e._;r?(h_(i,e,t),t&&w0(i,"_",r,!0)):f_(e,i)}else e&&d_(n,e)},RA=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=zt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:h_(r,e,t):(s=!e.$stable,f_(e,r)),o=e}else e&&(d_(n,e),o={default:1});if(s)for(const a in r)!jd(a)&&o[a]==null&&delete r[a]},kn=OA;function PA(n){return IA(n)}function IA(n,e){const t=vl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:d,nextSibling:h,setScopeId:m=Fi,insertStaticContent:x}=n,y=(L,M,te,oe=null,de=null,Q=null,Me=void 0,ae=null,he=!!M.dynamicChildren)=>{if(L===M)return;L&&!No(L,M)&&(oe=Ie(L),Ne(L,de,Q,!0),L=null),M.patchFlag===-2&&(he=!1,M.dynamicChildren=null);const{type:_e,ref:He,shapeFlag:w}=M;switch(_e){case bl:v(L,M,te,oe);break;case xs:g(L,M,te,oe);break;case Pc:L==null&&R(M,te,oe,Me);break;case er:ye(L,M,te,oe,de,Q,Me,ae,he);break;default:w&1?N(L,M,te,oe,de,Q,Me,ae,he):w&6?D(L,M,te,oe,de,Q,Me,ae,he):(w&64||w&128)&&_e.process(L,M,te,oe,de,Q,Me,ae,he,it)}He!=null&&de?jo(He,L&&L.ref,Q,M||L,!M):He==null&&L&&L.ref!=null&&jo(L.ref,null,Q,L,!0)},v=(L,M,te,oe)=>{if(L==null)i(M.el=a(M.children),te,oe);else{const de=M.el=L.el;M.children!==L.children&&l(de,M.children)}},g=(L,M,te,oe)=>{L==null?i(M.el=c(M.children||""),te,oe):M.el=L.el},R=(L,M,te,oe)=>{[L.el,L.anchor]=x(L.children,M,te,oe,L.el,L.anchor)},C=({el:L,anchor:M},te,oe)=>{let de;for(;L&&L!==M;)de=h(L),i(L,te,oe),L=de;i(M,te,oe)},b=({el:L,anchor:M})=>{let te;for(;L&&L!==M;)te=h(L),r(L),L=te;r(M)},N=(L,M,te,oe,de,Q,Me,ae,he)=>{if(M.type==="svg"?Me="svg":M.type==="math"&&(Me="mathml"),L==null)k(M,te,oe,de,Q,Me,ae,he);else{const _e=L.el&&L.el._isVueCE?L.el:null;try{_e&&_e._beginPatch(),I(L,M,de,Q,Me,ae,he)}finally{_e&&_e._endPatch()}}},k=(L,M,te,oe,de,Q,Me,ae)=>{let he,_e;const{props:He,shapeFlag:w,transition:S,dirs:H}=L;if(he=L.el=o(L.type,Q,He&&He.is,He),w&8?f(he,L.children):w&16&&J(L.children,he,null,oe,de,Fu(L,Q),Me,ae),H&&Kr(L,null,oe,"created"),B(he,L,L.scopeId,Me,oe),He){for(const ve in He)ve!=="value"&&!$o(ve)&&s(he,ve,null,He[ve],Q,oe);"value"in He&&s(he,"value",null,He.value,Q),(_e=He.onVnodeBeforeMount)&&Ti(_e,oe,L)}H&&Kr(L,null,oe,"beforeMount");const ie=DA(de,S);ie&&S.beforeEnter(he),i(he,M,te),((_e=He&&He.onVnodeMounted)||ie||H)&&kn(()=>{_e&&Ti(_e,oe,L),ie&&S.enter(he),H&&Kr(L,null,oe,"mounted")},de)},B=(L,M,te,oe,de)=>{if(te&&m(L,te),oe)for(let Q=0;Q<oe.length;Q++)m(L,oe[Q]);if(de){let Q=de.subTree;if(M===Q||__(Q.type)&&(Q.ssContent===M||Q.ssFallback===M)){const Me=de.vnode;B(L,Me,Me.scopeId,Me.slotScopeIds,de.parent)}}},J=(L,M,te,oe,de,Q,Me,ae,he=0)=>{for(let _e=he;_e<L.length;_e++){const He=L[_e]=ae?tr(L[_e]):Ri(L[_e]);y(null,He,M,te,oe,de,Q,Me,ae)}},I=(L,M,te,oe,de,Q,Me)=>{const ae=M.el=L.el;let{patchFlag:he,dynamicChildren:_e,dirs:He}=M;he|=L.patchFlag&16;const w=L.props||zt,S=M.props||zt;let H;if(te&&Jr(te,!1),(H=S.onVnodeBeforeUpdate)&&Ti(H,te,M,L),He&&Kr(M,L,te,"beforeUpdate"),te&&Jr(te,!0),_e&&(!L.dynamicChildren||L.dynamicChildren.length!==_e.length)&&(he=0,Me=!1,_e=null),(w.innerHTML&&S.innerHTML==null||w.textContent&&S.textContent==null)&&f(ae,""),_e?P(L.dynamicChildren,_e,ae,te,oe,Fu(M,de),Q):Me||z(L,M,ae,null,te,oe,Fu(M,de),Q,!1),he>0){if(he&16)U(ae,w,S,te,de);else if(he&2&&w.class!==S.class&&s(ae,"class",null,S.class,de),he&4&&s(ae,"style",w.style,S.style,de),he&8){const ie=M.dynamicProps;for(let ve=0;ve<ie.length;ve++){const re=ie[ve],Fe=w[re],be=S[re];(be!==Fe||re==="value")&&s(ae,re,Fe,be,de,te)}}he&1&&L.children!==M.children&&f(ae,M.children)}else!Me&&_e==null&&U(ae,w,S,te,de);((H=S.onVnodeUpdated)||He)&&kn(()=>{H&&Ti(H,te,M,L),He&&Kr(M,L,te,"updated")},oe)},P=(L,M,te,oe,de,Q,Me)=>{for(let ae=0;ae<M.length;ae++){const he=L[ae],_e=M[ae],He=he.el&&(he.type===er||!No(he,_e)||he.shapeFlag&198)?d(he.el):te;y(he,_e,He,null,oe,de,Q,Me,!0)}},U=(L,M,te,oe,de)=>{if(M!==te){if(M!==zt)for(const Q in M)!$o(Q)&&!(Q in te)&&s(L,Q,M[Q],null,de,oe);for(const Q in te){if($o(Q))continue;const Me=te[Q],ae=M[Q];Me!==ae&&Q!=="value"&&s(L,Q,ae,Me,de,oe)}"value"in te&&s(L,"value",M.value,te.value,de)}},ye=(L,M,te,oe,de,Q,Me,ae,he)=>{const _e=M.el=L?L.el:a(""),He=M.anchor=L?L.anchor:a("");let{patchFlag:w,dynamicChildren:S,slotScopeIds:H}=M;H&&(ae=ae?ae.concat(H):H),L==null?(i(_e,te,oe),i(He,te,oe),J(M.children||[],te,He,de,Q,Me,ae,he)):w>0&&w&64&&S&&L.dynamicChildren&&L.dynamicChildren.length===S.length?(P(L.dynamicChildren,S,te,de,Q,Me,ae),(M.key!=null||de&&M===de.subTree)&&p_(L,M,!0)):z(L,M,te,He,de,Q,Me,ae,he)},D=(L,M,te,oe,de,Q,Me,ae,he)=>{M.slotScopeIds=ae,L==null?M.shapeFlag&512?de.ctx.activate(M,te,oe,Me,he):W(M,te,oe,de,Q,Me,he):$(L,M,he)},W=(L,M,te,oe,de,Q,Me)=>{const ae=L.component=HA(L,oe,de);if(Xd(L)&&(ae.ctx.renderer=it),WA(ae,!1,Me),ae.asyncDep){if(de&&de.registerDep(ae,F,Me),!L.el){const he=ae.subTree=Jn(xs);g(null,he,M,te),L.placeholder=he.el}}else F(ae,L,M,te,de,Q,Me)},$=(L,M,te)=>{const oe=M.component=L.component;if(EA(L,M,te))if(oe.asyncDep&&!oe.asyncResolved){V(oe,M,te);return}else oe.next=M,oe.update();else M.el=L.el,oe.vnode=M},F=(L,M,te,oe,de,Q,Me)=>{const ae=()=>{if(L.isMounted){let{next:w,bu:S,u:H,parent:ie,vnode:ve}=L;{const Oe=m_(L);if(Oe){w&&(w.el=ve.el,V(L,w,Me)),Oe.asyncDep.then(()=>{kn(()=>{L.isUnmounted||_e()},de)});return}}let re=w,Fe;Jr(L,!1),w?(w.el=ve.el,V(L,w,Me)):w=ve,S&&Pu(S),(Fe=w.props&&w.props.onVnodeBeforeUpdate)&&Ti(Fe,ie,w,ve),Jr(L,!0);const be=cm(L),Je=L.subTree;L.subTree=be,y(Je,be,d(Je.el),Ie(Je),L,de,Q),w.el=be.el,re===null&&MA(L,be.el),H&&kn(H,de),(Fe=w.props&&w.props.onVnodeUpdated)&&kn(()=>Ti(Fe,ie,w,ve),de)}else{let w;const{el:S,props:H}=M,{bm:ie,m:ve,parent:re,root:Fe,type:be}=L,Je=Yo(M);Jr(L,!1),ie&&Pu(ie),!Je&&(w=H&&H.onVnodeBeforeMount)&&Ti(w,re,M),Jr(L,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(be,L.parent?L.parent.type:void 0);const Oe=L.subTree=cm(L);y(null,Oe,te,oe,L,de,Q),M.el=Oe.el}if(ve&&kn(ve,de),!Je&&(w=H&&H.onVnodeMounted)){const Oe=M;kn(()=>Ti(w,re,Oe),de)}(M.shapeFlag&256||re&&Yo(re.vnode)&&re.vnode.shapeFlag&256)&&L.a&&kn(L.a,de),L.isMounted=!0,M=te=oe=null}};L.scope.on();const he=L.effect=new C0(ae);L.scope.off();const _e=L.update=he.run.bind(he),He=L.job=he.runIfDirty.bind(he);He.i=L,He.id=L.uid,he.scheduler=()=>$d(He),Jr(L,!0),_e()},V=(L,M,te)=>{M.component=L;const oe=L.vnode.props;L.vnode=M,L.next=null,TA(L,M.props,oe,te),RA(L,M.children,te),dr(),tm(L),hr()},z=(L,M,te,oe,de,Q,Me,ae,he=!1)=>{const _e=L&&L.children,He=L?L.shapeFlag:0,w=M.children,{patchFlag:S,shapeFlag:H}=M;if(S>0){if(S&128){Ee(_e,w,te,oe,de,Q,Me,ae,he);return}else if(S&256){Se(_e,w,te,oe,de,Q,Me,ae,he);return}}H&8?(He&16&&Ue(_e,de,Q),w!==_e&&f(te,w)):He&16?H&16?Ee(_e,w,te,oe,de,Q,Me,ae,he):Ue(_e,de,Q,!0):(He&8&&f(te,""),H&16&&J(w,te,oe,de,Q,Me,ae,he))},Se=(L,M,te,oe,de,Q,Me,ae,he)=>{L=L||no,M=M||no;const _e=L.length,He=M.length,w=Math.min(_e,He);let S;for(S=0;S<w;S++){const H=M[S]=he?tr(M[S]):Ri(M[S]);y(L[S],H,te,null,de,Q,Me,ae,he)}_e>He?Ue(L,de,Q,!0,!1,w):J(M,te,oe,de,Q,Me,ae,he,w)},Ee=(L,M,te,oe,de,Q,Me,ae,he)=>{let _e=0;const He=M.length;let w=L.length-1,S=He-1;for(;_e<=w&&_e<=S;){const H=L[_e],ie=M[_e]=he?tr(M[_e]):Ri(M[_e]);if(No(H,ie))y(H,ie,te,null,de,Q,Me,ae,he);else break;_e++}for(;_e<=w&&_e<=S;){const H=L[w],ie=M[S]=he?tr(M[S]):Ri(M[S]);if(No(H,ie))y(H,ie,te,null,de,Q,Me,ae,he);else break;w--,S--}if(_e>w){if(_e<=S){const H=S+1,ie=H<He?M[H].el:oe;for(;_e<=S;)y(null,M[_e]=he?tr(M[_e]):Ri(M[_e]),te,ie,de,Q,Me,ae,he),_e++}}else if(_e>S)for(;_e<=w;)Ne(L[_e],de,Q,!0),_e++;else{const H=_e,ie=_e,ve=new Map;for(_e=ie;_e<=S;_e++){const Xe=M[_e]=he?tr(M[_e]):Ri(M[_e]);Xe.key!=null&&ve.set(Xe.key,_e)}let re,Fe=0;const be=S-ie+1;let Je=!1,Oe=0;const we=new Array(be);for(_e=0;_e<be;_e++)we[_e]=0;for(_e=H;_e<=w;_e++){const Xe=L[_e];if(Fe>=be){Ne(Xe,de,Q,!0);continue}let Ke;if(Xe.key!=null)Ke=ve.get(Xe.key);else for(re=ie;re<=S;re++)if(we[re-ie]===0&&No(Xe,M[re])){Ke=re;break}Ke===void 0?Ne(Xe,de,Q,!0):(we[Ke-ie]=_e+1,Ke>=Oe?Oe=Ke:Je=!0,y(Xe,M[Ke],te,null,de,Q,Me,ae,he),Fe++)}const ze=Je?LA(we):no;for(re=ze.length-1,_e=be-1;_e>=0;_e--){const Xe=ie+_e,Ke=M[Xe],Be=M[Xe+1],ot=Xe+1<He?Be.el||g_(Be):oe;we[_e]===0?y(null,Ke,te,ot,de,Q,Me,ae,he):Je&&(re<0||_e!==ze[re]?Re(Ke,te,ot,2):re--)}}},Re=(L,M,te,oe,de=null)=>{const{el:Q,type:Me,transition:ae,children:he,shapeFlag:_e}=L;if(_e&6){Re(L.component.subTree,M,te,oe);return}if(_e&128){L.suspense.move(M,te,oe);return}if(_e&64){Me.move(L,M,te,it);return}if(Me===er){i(Q,M,te);for(let w=0;w<he.length;w++)Re(he[w],M,te,oe);i(L.anchor,M,te);return}if(Me===Pc){C(L,M,te);return}if(oe!==2&&_e&1&&ae)if(oe===0)ae.persisted&&!Q[Nu]?i(Q,M,te):(ae.beforeEnter(Q),i(Q,M,te),kn(()=>ae.enter(Q),de));else{const{leave:w,delayLeave:S,afterLeave:H}=ae,ie=()=>{L.ctx.isUnmounted?r(Q):i(Q,M,te)},ve=()=>{const re=Q._isLeaving||!!Q[Nu];Q._isLeaving&&Q[Nu](!0),ae.persisted&&!re?ie():w(Q,()=>{ie(),H&&H()})};S?S(Q,ie,ve):ve()}else i(Q,M,te)},Ne=(L,M,te,oe=!1,de=!1)=>{const{type:Q,props:Me,ref:ae,children:he,dynamicChildren:_e,shapeFlag:He,patchFlag:w,dirs:S,cacheIndex:H,memo:ie}=L;if(w===-2&&(de=!1),ae!=null&&(dr(),jo(ae,null,te,L,!0),hr()),H!=null&&(M.renderCache[H]=void 0),He&256){M.ctx.deactivate(L);return}const ve=He&1&&S,re=!Yo(L);let Fe;if(re&&(Fe=Me&&Me.onVnodeBeforeUnmount)&&Ti(Fe,M,L),He&6)ge(L.component,te,oe);else{if(He&128){L.suspense.unmount(te,oe);return}ve&&Kr(L,null,M,"beforeUnmount"),He&64?L.type.remove(L,M,te,it,oe):_e&&!_e.hasOnce&&(Q!==er||w>0&&w&64)?Ue(_e,M,te,!1,!0):(Q===er&&w&384||!de&&He&16)&&Ue(he,M,te),oe&&ft(L)}const be=ie!=null&&H==null;(re&&(Fe=Me&&Me.onVnodeUnmounted)||ve||be)&&kn(()=>{Fe&&Ti(Fe,M,L),ve&&Kr(L,null,M,"unmounted"),be&&(L.el=null)},te)},ft=L=>{const{type:M,el:te,anchor:oe,transition:de}=L;if(M===er){dt(te,oe);return}if(M===Pc){b(L);return}const Q=()=>{r(te),de&&!de.persisted&&de.afterLeave&&de.afterLeave()};if(L.shapeFlag&1&&de&&!de.persisted){const{leave:Me,delayLeave:ae}=de,he=()=>Me(te,Q);ae?ae(L.el,Q,he):he()}else Q()},dt=(L,M)=>{let te;for(;L!==M;)te=h(L),r(L),L=te;r(M)},ge=(L,M,te)=>{const{bum:oe,scope:de,job:Q,subTree:Me,um:ae,m:he,a:_e}=L;fm(he),fm(_e),oe&&Pu(oe),de.stop(),Q&&(Q.flags|=8,Ne(Me,L,M,te)),ae&&kn(ae,M),kn(()=>{L.isUnmounted=!0},M)},Ue=(L,M,te,oe=!1,de=!1,Q=0)=>{for(let Me=Q;Me<L.length;Me++)Ne(L[Me],M,te,oe,de)},Ie=L=>{if(L.shapeFlag&6)return Ie(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const M=h(L.anchor||L.el),te=M&&M[Xw];return te?h(te):M};let Qe=!1;const nt=(L,M,te)=>{let oe;L==null?M._vnode&&(Ne(M._vnode,null,null,!0),oe=M._vnode.component):y(M._vnode||null,L,M,null,null,null,te),M._vnode=L,Qe||(Qe=!0,tm(oe),q0(),Qe=!1)},it={p:y,um:Ne,m:Re,r:ft,mt:W,mc:J,pc:z,pbc:P,n:Ie,o:n};return{render:nt,hydrate:void 0,createApp:gA(nt)}}function Fu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Jr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function DA(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function p_(n,e,t=!1){const i=n.children,r=e.children;if(mt(i)&&mt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=tr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&p_(o,a)),a.type===bl&&(a.patchFlag===-1&&(a=r[s]=tr(a)),a.el=o.el),a.type===xs&&!a.el&&(a.el=o.el)}}function LA(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function m_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:m_(e)}function fm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function g_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?g_(e.subTree):null}const __=n=>n.__isSuspense;function OA(n,e){e&&e.pendingBranch?mt(n)?e.effects.push(...n):e.effects.push(n):Vw(n)}const er=Symbol.for("v-fgt"),bl=Symbol.for("v-txt"),xs=Symbol.for("v-cmt"),Pc=Symbol.for("v-stc"),ls=[];let Zn=null;function xo(n=!1){ls.push(Zn=n?null:[])}function v_(){ls.pop(),Zn=ls[ls.length-1]||null}let da=1;function dm(n,e=!1){da+=n,n<0&&Zn&&e&&(Zn.hasOnce=!0)}function NA(n){return n.dynamicChildren=da>0?Zn||no:null,v_(),da>0&&Zn&&Zn.push(n),n}function yo(n,e,t,i,r,s){return NA(Rr(n,e,t,i,r,s,!0))}function x_(n){return n?n.__v_isVNode===!0:!1}function No(n,e){return n.type===e.type&&n.key===e.key}const y_=({key:n})=>n??null,Ic=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?an(n)||Nn(n)||pt(n)?{i:Li,r:n,k:e,f:!!t}:n:null);function Rr(n,e=null,t=null,i=0,r=null,s=n===er?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&y_(e),ref:e&&Ic(e),scopeId:j0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Li};return a?(jc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=an(t)?8:16),da>0&&!o&&Zn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Zn.push(c),c}const Jn=UA;function UA(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===cA)&&(n=xs),x_(n)){const a=mo(n,e,!0);return t&&jc(a,t),da>0&&!s&&Zn&&(a.shapeFlag&6?Zn[Zn.indexOf(n)]=a:Zn.push(a)),a.patchFlag=-2,a}if(jA(n)&&(n=n.__vccOpts),e){e=FA(e);let{class:a,style:c}=e;a&&!an(a)&&(e.class=Ud(a)),Ht(c)&&(Wd(c)&&!mt(c)&&(c=En({},c)),e.style=Nd(c))}const o=an(n)?1:__(n)?128:Sl(n)?64:Ht(n)?4:pt(n)?2:0;return Rr(n,e,t,i,r,o,s,!0)}function FA(n){return n?Wd(n)||c_(n)?En({},n):n:null}function mo(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,l=e?kA(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&y_(l),ref:e&&e.ref?t&&s?mt(s)?s.concat(Ic(e)):[s,Ic(e)]:Ic(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==er?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mo(n.ssContent),ssFallback:n.ssFallback&&mo(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&qd(f,c.clone(f)),f}function BA(n=" ",e=0){return Jn(bl,null,n,e)}function Tl(n,e){const t=Jn(Pc,null,n);return t.staticCount=e,t}function Ri(n){return n==null||typeof n=="boolean"?Jn(xs):mt(n)?Jn(er,null,n.slice()):x_(n)?tr(n):Jn(bl,null,String(n))}function tr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mo(n)}function jc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(mt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),jc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!c_(e)?e._ctx=Li:r===3&&Li&&(Li.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(pt(e)){if(i&65){jc(n,{default:e});return}e={default:e,_ctx:Li},t=32}else e=String(e),i&64?(t=16,e=[BA(e)]):t=8;n.children=e,n.shapeFlag|=t}function kA(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ud([e.class,i.class]));else if(r==="style")e.style=Nd([e.style,i.style]);else if(ml(r)){const s=e[r],o=i[r];o&&s!==o&&!(mt(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!gl(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Ti(n,e,t,i=null){Si(n,e,7,[t,i])}const zA=i_();let VA=0;function HA(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zA,s={uid:VA++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:u_(i,r),emitsOptions:r_(i,r),emit:null,emitted:null,propsDefaults:zt,inheritAttrs:i.inheritAttrs,ctx:zt,data:zt,props:zt,attrs:zt,slots:zt,refs:zt,setupState:zt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=vA.bind(null,s),n.ce&&n.ce(s),s}let On=null;const GA=()=>On||Li;let Yc,ha;{const n=vl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yc=e("__VUE_INSTANCE_SETTERS__",t=>On=t),ha=e("__VUE_SSR_SETTERS__",t=>pa=t)}const Aa=n=>{const e=On;return Yc(n),n.scope.on(),()=>{n.scope.off(),Yc(e)}},hm=()=>{On&&On.scope.off(),Yc(null)};function S_(n){return n.vnode.shapeFlag&4}let pa=!1;function WA(n,e=!1,t=!1){e&&ha(e);const{props:i,children:r}=n.vnode,s=S_(n);bA(n,i,s,e),CA(n,r,t||e);const o=s?$A(n,e):void 0;return e&&ha(!1),o}function $A(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lA);const{setup:i}=t;if(i){dr();const r=n.setupContext=i.length>1?XA(n):null,s=Aa(n),o=wa(i,n,0,[n.props,r]),a=b0(o);if(hr(),s(),(a||n.sp)&&!Yo(n)&&Z0(n),a){if(o.then(hm,hm),e)return o.then(c=>{ha(!0);try{pm(n,c,e)}finally{ha(!1)}}).catch(c=>{yl(c,n,0)});n.asyncDep=o}else pm(n,o)}else E_(n)}function pm(n,e,t){pt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ht(e)&&(n.setupState=G0(e)),E_(n)}function E_(n,e,t){const i=n.type;n.render||(n.render=i.render||Fi);{const r=Aa(n);dr();try{uA(n)}finally{hr(),r()}}}const qA={get(n,e){return Cn(n,"get",""),n[e]}};function XA(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,qA),slots:n.slots,emit:n.emit,expose:e}}function Kd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(G0(Iw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ko)return Ko[t](n)},has(e,t){return t in e||t in Ko}})):n.proxy}function jA(n){return pt(n)&&"__vccOpts"in n}const YA=(n,e)=>Nw(n,e,pa),KA="3.5.42";let Jf;const mm=typeof window<"u"&&window.trustedTypes;if(mm)try{Jf=mm.createPolicy("vue",{createHTML:n=>n})}catch{}const M_=Jf?n=>Jf.createHTML(n):n=>n,JA="http://www.w3.org/2000/svg",ZA="http://www.w3.org/1998/Math/MathML",Qi=typeof document<"u"?document:null,gm=Qi&&Qi.createElement("template"),QA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Qi.createElementNS(JA,n):e==="mathml"?Qi.createElementNS(ZA,n):t?Qi.createElement(n,{is:t}):Qi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qi.createTextNode(n),createComment:n=>Qi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{gm.innerHTML=M_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=gm.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},e1=Symbol("_vtc");function t1(n,e,t){const i=n[e1];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const _m=Symbol("_vod"),n1=Symbol("_vsh"),i1=Symbol(""),r1=/(?:^|;)\s*display\s*:/;function s1(n,e,t){const i=n.style,r=an(t);let s=!1;if(t&&!r){if(e)if(an(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zo(i,a,"")}else for(const o in e)t[o]==null&&zo(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?a1(n,o,!an(e)&&e?e[o]:void 0,a)||zo(i,o,a):zo(i,o,"")}}else if(r){if(e!==t){const o=i[i1];o&&(t+=";"+o),i.cssText=t,s=r1.test(t)}}else e&&n.removeAttribute("style");_m in n&&(n[_m]=s?i.display:"",n[n1]&&(i.display="none"))}const yc=/\s*!important$/;function zo(n,e,t){if(mt(t))t.forEach(i=>zo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))yc.test(t)?n.setProperty(e,t.replace(yc,""),"important"):n.setProperty(e,t);else{const i=o1(n,e);yc.test(t)?n.setProperty(Ms(i),t.replace(yc,""),"important"):n[i]=t}}const vm=["Webkit","Moz","ms"],Bu={};function o1(n,e){const t=Bu[e];if(t)return t;let i=vi(e);if(i!=="filter"&&i in n)return Bu[e]=i;i=T0(i);for(let r=0;r<vm.length;r++){const s=vm[r]+i;if(s in n)return Bu[e]=s}return e}function a1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&an(i)&&t===i}const xm="http://www.w3.org/1999/xlink";function ym(n,e,t,i,r,s=lw(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xm,e.slice(6,e.length)):n.setAttributeNS(xm,e,t):t==null||s&&!A0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ur(t)?String(t):t)}function Sm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?M_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=A0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function c1(n,e,t,i){n.addEventListener(e,t,i)}function l1(n,e,t,i){n.removeEventListener(e,t,i)}const Em=Symbol("_vei");function u1(n,e,t,i,r=null){const s=n[Em]||(n[Em]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=h1(e);if(i){const l=s[e]=g1(i,r);c1(n,a,l,c)}else o&&(l1(n,a,o,c),s[e]=void 0)}}const f1=/(Once|Passive|Capture)$/,d1=/^on:?(?:Once|Passive|Capture)$/;function h1(n){let e,t;for(;(t=n.match(f1))&&!d1.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let ku=0;const p1=Promise.resolve(),m1=()=>ku||(p1.then(()=>ku=0),ku=Date.now());function g1(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(mt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let c=0;c<o.length&&!i._stopped;c++){const l=o[c];l&&Si(l,e,5,a)}}else Si(r,e,5,[i])};return t.value=n,t.attached=m1(),t}const Mm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_1=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?t1(n,i,o):e==="style"?s1(n,t,i):ml(e)?gl(e)||u1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v1(n,e,i,o))?(Sm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ym(n,e,i,o,s,e!=="value")):n._isVueCE&&(x1(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!an(i)))?Sm(n,vi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ym(n,e,i,o))};function v1(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mm(e)&&pt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mm(e)&&an(t)?!1:e in n}function x1(n,e){const t=n._def.props;if(!t)return!1;const i=vi(e);return Array.isArray(t)?t.some(r=>vi(r)===i):Object.keys(t).some(r=>vi(r)===i)}const y1=En({patchProp:_1},QA);let bm;function S1(){return bm||(bm=PA(y1))}const E1=((...n)=>{const e=S1().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=b1(i);if(!r)return;const s=e._component;!pt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,M1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function M1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function b1(n){return an(n)?document.querySelector(n):n}const Ca=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},T1={},w1={class:"topbar"};function A1(n,e){return xo(),yo("section",w1,[...e[0]||(e[0]=[Tl('<div class="brand"><span class="mark"></span><div><small data-i18n="subtitle">NEON GRID / PONG-84</small><strong data-i18n="title">PONG 87</strong><span id="statusText" data-i18n="disconnected">Sin conexion</span></div></div><div class="readout"><span id="modeText">STANDBY</span><span id="roundText">R-01</span></div><div id="topInviteActions" class="top-invite-actions hidden"><button id="topCopyInviteButton" class="invite-chip" type="button" data-i18n="copyInvite" aria-label="Copiar link">Copiar link</button><button id="topShareInviteButton" class="icon-button invite-share" type="button" aria-label="Compartir sala"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16.1c-.76 0-1.44.3-1.96.77L8.91 12.7a3.2 3.2 0 0 0 0-1.39l7.05-4.12A2.96 2.96 0 1 0 15 5c0 .23.03.45.08.66L8.03 9.78a3 3 0 1 0 0 4.44l7.1 4.16c-.05.2-.08.41-.08.62A2.95 2.95 0 1 0 18 16.1Z"></path></svg></button></div><button id="pauseButton" class="icon-button pause-toggle" type="button" aria-label="Pausa" data-paused="false" hidden><svg class="icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z"></path></svg><svg class="icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></button><button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Salir al menu" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z"></path></svg></button>',5)])])}const C1=Ca(T1,[["render",A1]]),R1="/assets/img/me.png",P1={},I1={id:"menuLayer",class:"menu-layer"};function D1(n,e){return xo(),yo("div",I1,[...e[0]||(e[0]=[Tl('<section class="menu-panel" data-menu-view="main"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h1 data-i18n="mainMenuTitle">PONG 87</h1><p data-i18n="mainMenuSubtitle">Arcade neon chileno para 1 a 8 jugadores</p><div class="menu-buttons"><button id="singlePlayerButton" class="primary-menu" type="button" data-i18n="singlePlayer">Single Player</button><button id="multiPlayerButton" type="button" data-i18n="multiPlayer">Multi Player</button><button id="settingsButton" type="button" data-i18n="settings">Configuracion</button><button id="aboutButton" type="button" data-i18n="about">About Me</button><button id="exitButton" class="ghost" type="button" data-i18n="exit">Salir</button></div></section><section class="menu-panel" data-menu-view="settings" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="settingsTitle">Configuracion</h2><div class="settings-stack"><label class="range-field"><span data-i18n="musicVolume">Musica</span><output id="musicVolumeValue">70%</output><input id="musicVolumeInput" type="range" min="0" max="100" step="1"></label><label class="range-field"><span data-i18n="sfxVolume">Efectos</span><output id="sfxVolumeValue">80%</output><input id="sfxVolumeInput" type="range" min="0" max="100" step="1"></label><label><span data-i18n="language">Idioma</span><select id="languageInput"><option value="es">ES</option><option value="en">EN</option></select></label></div><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="about" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><div class="about-profile"><img src="'+R1+'" alt="Sebastian Cortes Perez"><div class="about-intro"><h2 data-i18n="aboutTitle">About Me</h2><strong data-i18n="aboutRole">Full Stack Dev desde Chile</strong><p data-i18n="aboutBody">Analista Programador, estudiante de Ingenieria en Desarrollo de Software y constructor de plataformas web con mas de 5 anos de experiencia.</p></div></div><div class="about-code"><span>const sebastian = {</span><span data-i18n="aboutCodeRole">rol: &quot;Desarrollador Full Stack&quot;,</span><span data-i18n="aboutCodeFocus">focus: [&quot;codigo limpio&quot;, &quot;magia&quot;, &quot;subir de nivel&quot;],</span><span data-i18n="aboutCodeMotto">motto: &quot;si no lo se hoy, lo aprendo manana&quot;</span><span>};</span></div><div class="about-grid"><div><h3 data-i18n="aboutNowTitle">Ahora</h3><p data-i18n="aboutNowBody">Full Stack Dev en Yoy Simulators, integrando Laravel, Vue, APIs, HubSpot, BBDD, VPS, DNS y AWS S3 sin perder el ritmo arcade.</p></div><div><h3 data-i18n="aboutPastTitle">Background</h3><p data-i18n="aboutPastBody">Continuidad para LATAM Airlines Cargo en 7 paises, Oracle/SQL bajo SLA y una ruta previa entre ASP.NET, ERPs y consultoria.</p></div></div><div class="about-chips" aria-label="Stack"><span>Laravel</span><span>Vue.js</span><span>Spring Boot</span><span>Oracle Cloud</span><span>SQL</span><span>AWS S3</span></div><a class="about-contact" href="mailto:sebastiancortes.2202@gmail.com">sebastiancortes.2202@gmail.com</a><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="exit" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="exitTitle">Salir</h2><p class="about-copy" data-i18n="exitBody">En web no siempre se puede cerrar la pestana desde el juego.</p><button class="back-button" type="button" data-i18n="back">Volver</button></section>',4)])])}const L1=Ca(P1,[["render",D1]]),O1={},N1={id:"centerPanel",class:"center-panel hidden","data-flow":"multi"};function U1(n,e){return xo(),yo("div",N1,[...e[0]||(e[0]=[Tl('<div class="panel-header"><span id="lobbyTitle" data-i18n="arcadeLink">ARCADE LINK</span><strong id="roomCode">----</strong></div><div id="setupPanel" class="setup-panel"><div class="field-grid"><label><span data-i18n="playerTag">Player tag</span><input id="nameInput" maxlength="16" value="Jugador"></label><label><span data-i18n="arena">Arena</span><select id="sidesInput"><option value="2">2</option><option value="3">3</option><option value="4" selected>4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select></label><label><span data-i18n="mode">Modo</span><select id="gameModeInput"><option value="score" data-i18n="scoreRush">Score Rush</option><option value="elimination" data-i18n="elimination">Eliminacion</option></select></label><label id="livesField"><span data-i18n="lives">Vidas</span><input id="livesInput" type="number" min="1" max="9" step="1" value="5"></label><label><span data-i18n="matchTime">Tiempo</span><select id="matchTimeInput"><option value="0" data-i18n="noLimit">Sin limite</option><option value="30">0:30</option><option value="60">1:00</option><option value="90">1:30</option><option value="120">2:00</option><option value="150" selected>2:30</option><option value="180">3:00</option><option value="240">4:00</option><option value="300">5:00</option></select></label></div><div class="actions"><button id="createButton" type="button" data-i18n="host">Host</button><input id="joinInput" maxlength="8" placeholder="CODIGO" data-i18n-placeholder="joinPlaceholder"><button id="joinButton" type="button" data-i18n="link">Link</button></div></div><div id="waitingPanel" class="waiting-panel hidden"><div class="lobby-code"><span>ROOM</span><strong id="waitingRoomCode">----</strong></div><div id="invitePanel" class="invite-panel hidden"><input id="inviteLinkInput" readonly aria-label="Invite link"><button id="copyInviteButton" type="button" data-i18n="copyInvite">Copiar link</button><button id="shareInviteButton" type="button" data-i18n="shareInvite">Compartir</button></div><div id="waitingRoster" class="waiting-roster"></div></div><div id="resultsPanel" class="results-panel hidden"><div class="podium-title">RESULTS</div><div id="podiumList" class="podium-list"></div></div><div class="boot-actions"><button id="offlineButton" class="offline" type="button" data-i18n="cpuJam">CPU Jam</button><button id="forceStartButton" class="force-start hidden" type="button" data-i18n="fillWithBots">Completar con IA</button><button id="readyButton" class="ready" type="button" disabled data-i18n="ready">Ready</button><button id="finishMatchButton" class="finish-match hidden" type="button" data-i18n="finishMatch">Terminar partida</button><button id="menuBackButton" class="ghost" type="button" data-i18n="mainMenu">Menu</button></div>',5)])])}const F1=Ca(O1,[["render",U1]]),B1={},k1={id:"pauseMenu",class:"pause-menu hidden",role:"dialog","aria-modal":"true","aria-labelledby":"pauseTitle"};function z1(n,e){return xo(),yo("div",k1,[...e[0]||(e[0]=[Tl('<section class="pause-panel"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 id="pauseTitle" data-i18n="pauseTitle">Pausa</h2><div class="pause-actions"><button id="resumeButton" class="primary-menu" type="button" data-i18n="continueGame">Continuar</button><button id="pauseExitButton" class="ghost" type="button" data-i18n="exitToMenu">Salir</button></div></section>',1)])])}const V1=Ca(B1,[["render",z1]]),H1={},G1={id:"touchRail",class:"touch-rail"};function W1(n,e){return xo(),yo("div",G1,[...e[0]||(e[0]=[Rr("span",{class:"rail-label","data-i18n":"paddleTrack"},"PADDLE TRACK",-1),Rr("div",{id:"thumb",class:"thumb"},null,-1)])])}const $1=Ca(H1,[["render",W1]]),q1={class:"shell"},X1={class:"game-wrap"},j1=Yw({__name:"App",setup(n){return(e,t)=>(xo(),yo("main",q1,[t[1]||(t[1]=Rr("div",{class:"scanlines","aria-hidden":"true"},null,-1)),Jn(C1),Rr("section",X1,[t[0]||(t[0]=Rr("canvas",{id:"gameCanvas"},null,-1)),Jn(L1),Jn(F1),Jn(V1),Jn($1)]),t[2]||(t[2]=Rr("section",{id:"scoreStrip",class:"score-strip"},null,-1))]))}}),Y1="/",ii=n=>`${Y1}${n}`.replace(/\/{2,}/g,"/"),zu={ui:{url:ii("assets/audio/sfx/ui-click.webm"),group:"sfx",gain:.85},ready:{url:ii("assets/audio/sfx/ready.webm"),group:"sfx",gain:.9},charge:{url:ii("assets/audio/sfx/charge.webm"),group:"sfx",gain:.95},pad:{url:ii("assets/audio/sfx/pad-hit.webm"),group:"sfx",gain:1},wall:{url:ii("assets/audio/sfx/wall-hit.webm"),group:"sfx",gain:.82},obstacle:{url:ii("assets/audio/sfx/obstacle-hit.webm"),group:"sfx",gain:.95},scoreFor:{url:ii("assets/audio/sfx/score-for.webm"),group:"sfx",gain:1},scoreAgainst:{url:ii("assets/audio/sfx/score-against.webm"),group:"sfx",gain:1},spawn:{url:ii("assets/audio/sfx/ball-spawn.webm"),group:"sfx",gain:.9},start:{url:ii("assets/audio/sfx/start.webm"),group:"sfx",gain:.9},pause:{url:ii("assets/audio/sfx/pause.webm"),group:"sfx",gain:.78},musicLoop:{url:ii("assets/audio/music/neon-loop.webm"),group:"music",loop:!0,gain:.8}};class K1{constructor(e){this.ctx=null,this.master=null,this.sfx=null,this.music=null,this.ambience=null,this.ambienceGain=null,this.musicSource=null,this.buffers=new Map,this.missingAssets=new Set,this.loadingAssets=null,this.lastPlayed=new Map,this.settings=e}setSettings(e){this.settings=e,this.applyVolumes()}async unlock(){this.ensureContext(),this.ctx&&(this.ctx.state!=="running"&&await this.ctx.resume(),await this.loadAssets(),this.startMusicLoop()||this.startProceduralAmbience())}play(e,t=1){!this.ctx||this.ctx.state!=="running"||this.canPlay(e)&&(this.playAsset(e,t)||this.playFallback(e,t))}ensureContext(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.music=this.ctx.createGain(),this.sfx.connect(this.master),this.music.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes())}async loadAssets(){if(this.ctx){if(this.loadingAssets){await this.loadingAssets;return}this.loadingAssets=Promise.all(Object.entries(zu).map(async([e,t])=>{if(!(!t||this.buffers.has(e)||this.missingAssets.has(e)))try{const i=await fetch(t.url);if(!i.ok)throw new Error(`HTTP ${i.status}`);const r=await i.arrayBuffer();this.buffers.set(e,await this.ctx.decodeAudioData(r))}catch{this.missingAssets.add(e)}})).then(()=>{}),await this.loadingAssets}}playAsset(e,t){const i=zu[e],r=this.buffers.get(e),s=i?.group==="music"?this.music:this.sfx;if(!this.ctx||!i||!r||!s)return!1;const o=this.ctx.createBufferSource(),a=this.ctx.createGain();return o.buffer=r,o.loop=!!i.loop,a.gain.value=(i.gain??1)*Math.max(.35,Math.min(1.45,t)),o.connect(a).connect(s),o.start(),!0}startMusicLoop(){const e=zu.musicLoop,t=this.buffers.get("musicLoop");if(!this.ctx||!this.music||!e||!t||this.musicSource)return!!this.musicSource;const i=this.ctx.createBufferSource(),r=this.ctx.createGain();return i.buffer=t,i.loop=!0,r.gain.value=e.gain,i.connect(r).connect(this.music),i.start(),this.musicSource=i,!0}applyVolumes(){!this.sfx||!this.music||(this.sfx.gain.value=this.settings.sfxVolume/100*.75,this.music.gain.value=this.settings.musicVolume/100*.22)}startProceduralAmbience(){!this.ctx||!this.music||this.ambience||this.musicSource||(this.ambience=this.ctx.createOscillator(),this.ambienceGain=this.ctx.createGain(),this.ambience.type="sine",this.ambience.frequency.value=58,this.ambienceGain.gain.value=.22,this.ambience.connect(this.ambienceGain).connect(this.music),this.ambience.start())}canPlay(e){const t=performance.now(),i=e==="pad"||e==="wall"?38:e==="obstacle"?70:120,r=this.lastPlayed.get(e)??-1/0;return t-r<i?!1:(this.lastPlayed.set(e,t),!0)}playFallback(e,t=1){const i=Math.max(.35,Math.min(1.45,t));switch(e){case"ui":this.tone({frequency:620,endFrequency:820,duration:.055,volume:.1});break;case"ready":this.tone({frequency:440,endFrequency:760,duration:.11,volume:.12}),this.tone({frequency:880,duration:.07,volume:.07,delay:.055});break;case"charge":this.tone({type:"sawtooth",frequency:320,endFrequency:1280,duration:.18,volume:.08}),this.noise(.08,.05);break;case"pad":this.tone({type:"square",frequency:220*i,endFrequency:520*i,duration:.09,volume:.14}),this.tone({frequency:980*i,duration:.045,volume:.06});break;case"wall":this.tone({type:"triangle",frequency:340,endFrequency:180,duration:.08,volume:.09}),this.noise(.045,.04);break;case"obstacle":this.tone({type:"sawtooth",frequency:540,endFrequency:260,duration:.13,volume:.13}),this.noise(.11,.055);break;case"scoreFor":this.tone({frequency:520,endFrequency:880,duration:.13,volume:.14}),this.tone({frequency:1040,endFrequency:1560,duration:.16,volume:.12,delay:.08}),this.noise(.12,.035,.03);break;case"scoreAgainst":this.tone({type:"sawtooth",frequency:280,endFrequency:92,duration:.24,volume:.16}),this.noise(.18,.06);break;case"spawn":this.tone({frequency:300,endFrequency:980,duration:.2,volume:.09}),this.tone({frequency:1230,duration:.06,volume:.04,delay:.12});break;case"start":this.tone({frequency:180,endFrequency:620,duration:.18,volume:.12}),this.tone({frequency:740,endFrequency:1180,duration:.16,volume:.1,delay:.12});break;case"pause":this.tone({type:"triangle",frequency:500,endFrequency:250,duration:.09,volume:.08});break}}tone(e){if(!this.ctx||!this.sfx)return;const t=this.ctx.currentTime+(e.delay??0),i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type=e.type??"sine",i.frequency.setValueAtTime(e.frequency,t),e.endFrequency&&i.frequency.exponentialRampToValueAtTime(Math.max(20,e.endFrequency),t+e.duration),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e.volume,t+.012),r.gain.exponentialRampToValueAtTime(1e-4,t+e.duration),i.connect(r).connect(this.sfx),i.start(t),i.stop(t+e.duration+.02)}noise(e,t,i=0){if(!this.ctx||!this.sfx)return;const r=Math.max(1,Math.floor(this.ctx.sampleRate*e)),s=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=s.getChannelData(0);for(let d=0;d<r;d+=1)o[d]=(Math.random()*2-1)*(1-d/r);const a=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain(),f=this.ctx.currentTime+i;a.buffer=s,c.type="bandpass",c.frequency.value=1400,c.Q.value=.8,l.gain.setValueAtTime(t,f),l.gain.exponentialRampToValueAtTime(1e-4,f+e),a.connect(c).connect(l).connect(this.sfx),a.start(f)}}const J1="arcade-hub.v1",b_="pong87",Z1="0.1.0";function Q1(){const n=new URLSearchParams(window.location.search),e=n.get("arcadeToken")||"";return e?{token:e,roomId:n.get("room")||void 0,returnUrl:n.get("returnUrl")||void 0,offline:n.get("offline")==="1",sides:n.get("sides")?Number(n.get("sides")):void 0,hubUrl:n.get("hubUrl")||void 0||`http://${window.location.hostname||"127.0.0.1"}:2580`}:null}async function T_(n,e,t,i=!1){const r=await fetch(`${n.hubUrl}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:i});return r.ok?r.json():null}async function eC(){const n=Q1();if(!n)return null;const e=await fetch(`${n.hubUrl}/api/launch-token/validate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n.token})});if(!e.ok)throw new Error("Arcade token invalido");const t=await e.json();if(!t.valid||!t.payload)throw new Error("Arcade token expirado");return{token:n.token,payload:t.payload,roomId:n.roomId||t.payload.roomId,returnUrl:n.returnUrl||t.payload.returnUrl,hubUrl:n.hubUrl,offline:n.offline,sides:n.sides}}function tC(n,e,t={},i){return{protocol:J1,eventId:crypto.randomUUID(),eventType:e,source:{gameId:b_,runtime:"client",version:Z1},occurredAt:new Date().toISOString(),roomId:n.roomId,userId:n.payload.user.userId,sessionId:i,payload:t}}async function w_(n,e,t={},i){await T_(n,"/api/telemetry",tC(n,e,t,i),!0)}function Kc(n,e){return{name:n.payload.user.displayName,arcadeToken:n.token,arcadeRoomId:n.roomId,arcadeUserId:n.payload.user.userId,arcadeOrigin:n.payload.user.origin,arcadeHubUrl:n.hubUrl,...e||{}}}function nC(n,e){const t=[...e.seats].filter(r=>r.connected).sort((r,s)=>e.mode==="score"?s.score-r.score||s.lives-r.lives:s.lives-r.lives||s.score-r.score),i=t[0];return{gameId:b_,roomId:n.roomId,winnerUserId:Tm(n,i),finishedAt:new Date().toISOString(),players:t.map((r,s)=>({userId:Tm(n,r)||r.id,displayName:r.name,score:r.score,placement:s+1,metadata:{sessionId:r.id,edgeIndex:r.edgeIndex,lives:r.lives,bot:r.id.startsWith("bot-")}})),metadata:{mode:e.mode,sides:e.sides,round:e.round,matchTimeSeconds:e.matchTimeSeconds,source:"pong87-client"}}}function Tm(n,e){if(!(!e||e.id.startsWith("bot-")))return e.id==="offline-human"?n.payload.user.userId:e.id}async function iC(n,e){await T_(n,"/api/results",nC(n,e),!0)}function rC(n){if(n?.returnUrl){window.location.assign(n.returnUrl);return}window.close()}const A_="es",wm={es:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Sin conexion",connected:"Conectado",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Arcade neon chileno para 1 a 8 jugadores",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Configuracion",about:"About Me",exit:"Salir",back:"Volver",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Modo",lives:"Vidas",matchTime:"Tiempo",noLimit:"Sin limite",scoreRush:"Score Rush",elimination:"Eliminacion",host:"Host",joinPlaceholder:"CODIGO",link:"Link",copyInvite:"Copiar link",shareInvite:"Compartir",copiedInvite:"Link copiado",inviteTitle:"PONG87",inviteText:"Unete a mi sala de PONG87",joinRoom:"Entrar",cpuJam:"CPU Jam",fillWithBots:"Completar con IA",ready:"Ready",finishMatch:"Terminar partida",waiting:"Waiting",restart:"Reiniciar",pauseTitle:"Pausa",continueGame:"Continuar",exitToMenu:"Salir",settingsTitle:"Configuracion",musicVolume:"Musica",sfxVolume:"Efectos",language:"Idioma",aboutTitle:"About Me",aboutRole:"Full Stack Dev desde Chile",aboutBody:"Analista Programador, estudiante de Ingenieria en Desarrollo de Software y constructor de plataformas web con mas de 5 anos de experiencia.",aboutCodeRole:'rol: "Desarrollador Full Stack",',aboutCodeFocus:'focus: ["codigo limpio", "magia", "subir de nivel"],',aboutCodeMotto:'motto: "si no lo se hoy, lo aprendo manana"',aboutNowTitle:"Ahora",aboutNowBody:"Full Stack Dev en Yoy Simulators, integrando Laravel, Vue, APIs, HubSpot, BBDD, VPS, DNS y AWS S3 sin perder el ritmo arcade.",aboutPastTitle:"Background",aboutPastBody:"Continuidad para LATAM Airlines Cargo en 7 paises, Oracle/SQL bajo SLA y una ruta previa entre ASP.NET, ERPs y consultoria.",exitTitle:"Salir",exitBody:"En web no siempre se puede cerrar la pestana desde el juego. Puedes volver al menu o cerrar la pestana del navegador.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Error de conexion",offlineEvent:"Offline vs IA",botName:"IA",playerFallback:"Jugador"},en:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Disconnected",connected:"Connected",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Chilean neon arcade for 1 to 8 players",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Settings",about:"About Me",exit:"Exit",back:"Back",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Mode",lives:"Lives",matchTime:"Time",noLimit:"No limit",scoreRush:"Score Rush",elimination:"Elimination",host:"Host",joinPlaceholder:"CODE",link:"Link",copyInvite:"Copy link",shareInvite:"Share",copiedInvite:"Link copied",inviteTitle:"PONG87",inviteText:"Join my PONG87 room",joinRoom:"Join",cpuJam:"CPU Jam",fillWithBots:"Fill with AI",ready:"Ready",finishMatch:"Finish match",waiting:"Waiting",restart:"Restart",pauseTitle:"Paused",continueGame:"Continue",exitToMenu:"Exit",settingsTitle:"Settings",musicVolume:"Music",sfxVolume:"SFX",language:"Language",aboutTitle:"About Me",aboutRole:"Full Stack Dev from Chile",aboutBody:"Computer Programming Analyst, Software Engineering student, and web platform builder with more than 5 years of experience.",aboutCodeRole:'role: "Full Stack Developer",',aboutCodeFocus:'focus: ["clean code", "magic", "leveling up"],',aboutCodeMotto:'motto: "if I do not know it today, I learn it tomorrow"',aboutNowTitle:"Now",aboutNowBody:"Full Stack Dev at Yoy Simulators, wiring Laravel, Vue, APIs, HubSpot, databases, VPS, DNS, and AWS S3 without losing the arcade tempo.",aboutPastTitle:"Background",aboutPastBody:"Business continuity for LATAM Airlines Cargo across 7 countries, Oracle/SQL under SLA, plus earlier ASP.NET, ERP, and consulting work.",exitTitle:"Exit",exitBody:"Browsers usually do not let games close the tab directly. You can return to the menu or close the browser tab.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Connection error",offlineEvent:"Offline vs AI",botName:"AI",playerFallback:"Player"}};function sC(n,e){return wm[n]?.[e]??wm[A_][e]??e}const mr=4,Jc=2,Zc=8,Gn=8,si=2.7,Zi=.34,Kt=.28,Am=Kt*1.32,C_=7.85,oC=.012,aC=1.26,cC=.45,lC=1.14,R_=3,Jd=10,P_=5,Qc=150,Cm=30,Rm=30,Vu=1/60;function uC(n){return n<=3?4:n}function fC(n){return n<=2?Gn*1.04:Gn*(1.08+Math.max(0,n-4)*.055)}function Pm(n){const e=uC(n);return 2*fC(n)*Math.sin(Math.PI/e)}function I_(n){const e=Pm(mr),t=si/e,i=Pm(n)*t;return Math.max(1.45,Math.min(si,i))}function dC(n){return R_}function D_(n,e){const t=1+Math.floor(e/Jd);return Math.min(dC(),t)}function Zf(n){return C_*(1+Math.max(0,n-mr)*.045)}function hC(n,e=mr){return Zf(e)*Math.min(aC,1+Math.max(0,n)*oC)}function pC(n,e,t=0){const i=Zf(n)+Math.min(e,R_-1)*.25,r=Math.max(0,t-i)*cC,s=i+r;return Math.min(s,Zf(n)*lC)}function mC(n){return{sides:mr,phase:"lobby",lastEvent:n,round:1,countdown:0,remainingTime:Qc,matchTimeSeconds:Qc,livesPerPlayer:P_,lastTouchEdge:-1,mode:"score",ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:[]}}function gC(n,e){return{...n,phase:"lobby",lastEvent:e,seats:[],obstacles:[],balls:[],chargedBy:-1}}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function kr(n){return n<=3?4:n}function wl(n,e){return e===2?n*2:n}function Zd(n,e){return e===2?n===0?0:n===2?1:-1:e===3?n<3?n:-1:n<e?n:-1}function gr(n,e=Gn){return n<=2?e*1.04:e*(1.08+Math.max(0,n-4)*.055)}function L_(n,e=Gn){const t=-Math.PI/2+Math.PI/n;return Array.from({length:n},(i,r)=>{const s=t+r/n*Math.PI*2;return{x:Math.cos(s)*e,y:Math.sin(s)*e}})}function bs(n,e=Gn){const t=L_(n,e);return t.map((i,r)=>{const s=t[(r+1)%t.length],o=s.x-i.x,a=s.y-i.y,c=Math.hypot(o,a),l={x:o/c,y:a/c},f={x:(i.x+s.x)/2,y:(i.y+s.y)/2},d={x:-f.x,y:-f.y},h=Math.hypot(d.x,d.y)||1,m={x:d.x/h,y:d.y/h};return{a:i,b:s,tangent:l,inward:m,length:c,angle:Math.atan2(l.y,l.x)}})}function Qd(n,e){return{x:n.a.x+(n.b.x-n.a.x)*e,y:n.a.y+(n.b.y-n.a.y)*e}}function us(n,e){return n.x*e.x+n.y*e.y}function Qf(n,e){const t=us(n,e);return{x:n.x-2*t*e.x,y:n.y-2*t*e.y}}function _C(n,e,t){const i=n==="elimination"?"elimination":"score";let r=Math.round(Number(e||Qc)/Rm)*Rm;return i==="score"?r=Math.max(Cm,r||Qc):r>0&&(r=Math.max(Cm,r)),{mode:i,lives:xn(Math.round(Number(t||P_)),1,9),matchTimeSeconds:r}}function vC(n){const e=Math.max(0,Math.ceil(n)),t=Math.floor(e/60),i=e%60;return`${t}:${String(i).padStart(2,"0")}`}function xC(n){return[...n.seats].filter(e=>e.connected).sort((e,t)=>n.mode==="score"?t.score-e.score||t.lives-e.lives:t.lives-e.lives||t.score-e.score)}const O_="polygon-pong-settings",Sc={language:A_,musicVolume:70,sfxVolume:80};function yC(n=localStorage){try{const e=JSON.parse(n.getItem(O_)||"{}");return{language:e.language==="en"||e.language==="es"?e.language:Sc.language,musicVolume:xn(Number(e.musicVolume??Sc.musicVolume),0,100),sfxVolume:xn(Number(e.sfxVolume??Sc.sfxVolume),0,100)}}catch{return{...Sc}}}function eh(n,e=localStorage){e.setItem(O_,JSON.stringify(n))}function rn(n,e,t=!1){return new Es({color:n,transparent:e<1,opacity:e,side:Kn,depthWrite:!1,blending:t?hs:Ni})}function SC(n){n.traverse(e=>{if(!(e instanceof st))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function Im(n,e){n.traverse(t=>{if(!(t instanceof st))return;const i=t.material,r=t.userData.baseOpacity??i.opacity;i.opacity=Math.max(0,r*e)})}function EC(n){const e=new Ft,t=10419455,i=new st(new _n(n.radius*2.45,n.radius*.33,.16),rn(16777215,.7)),r=new st(new _n(n.radius*2.85,n.radius*.78,.06),rn(t,.16,!0)),s=new st(new _n(n.radius*2.7,n.radius*.08,.08),rn(16732141,.68,!0)),o=s.clone();s.position.y=n.radius*.34,o.position.y=-n.radius*.34;const a=new hl;a.moveTo(0,n.radius*.52),a.lineTo(n.radius*.46,0),a.lineTo(0,-n.radius*.52),a.closePath();const c=new po(a),l=new st(c,rn(16773226,.5,!0)),f=new st(c.clone(),rn(16773226,.5,!0));return l.position.x=-n.radius*1.38,f.position.x=n.radius*1.38,f.rotation.z=Math.PI,e.add(r,i,s,o,l,f),{group:e,pulseMeshes:[r,l,f],spinMeshes:[]}}function MC(n){const e=new Ft,t=Math.max(8,n.sides||8),i=new st(new ai(n.radius*.72,n.radius*1.18,t),rn(16773226,.46,!0)),r=new st(new zi(n.radius*.58,t),rn(16771162,.62)),s=new st(new zi(n.radius*.24,20),rn(16777215,.76,!0)),o=new st(new ai(n.radius*.35,n.radius*.46,20),rn(16732013,.62,!0));return e.add(i,r,o,s),{group:e,pulseMeshes:[i,s],spinMeshes:[o]}}function bC(n){const e=new Ft,t=Math.max(5,Math.min(8,n.sides||6)),i=new st(new zi(n.radius*.42,t),rn(2618879,.68)),r=new st(new ai(n.radius*.55,n.radius*.86,28),rn(2618879,.54,!0)),s=new st(new ai(n.radius*.98,n.radius*1.08,28),rn(13270271,.34,!0)),o=new Ft;for(let a=0;a<4;a+=1){const c=new st(new _n(n.radius*1.28,n.radius*.11,.06),rn(a%2===0?16777215:4386047,.48,!0));c.rotation.z=Math.PI/4*a,o.add(c)}return e.add(s,r,i,o),{group:e,pulseMeshes:[s,r],spinMeshes:[o]}}function TC(n){const e=new Ft,t=new st(new zi(n.radius*.26,18),rn(16777215,.74,!0)),i=new st(new ai(n.radius*.82,n.radius*1.05,36),rn(16732013,.38,!0)),r=new Ft;for(let s=0;s<3;s+=1){const o=new st(new _n(n.radius*1.62,n.radius*.16,.08),rn(s===0?16773226:4386047,.58,!0));o.position.x=n.radius*.58,o.rotation.z=Math.PI*2*s/3,r.add(o);const a=new st(new zi(n.radius*.16,10),rn(16777215,.44,!0));a.position.set(Math.cos(o.rotation.z)*n.radius*1.33,Math.sin(o.rotation.z)*n.radius*1.33,.03),r.add(a)}return e.add(i,r,t),{group:e,pulseMeshes:[i,t],spinMeshes:[r]}}function wC(n){const e=new Ft,t=new hl;t.moveTo(0,n.radius*1.2),t.lineTo(n.radius*.52,n.radius*.12),t.lineTo(n.radius*.22,-n.radius*.96),t.lineTo(-n.radius*.38,-n.radius*.72),t.lineTo(-n.radius*.55,n.radius*.08),t.closePath();const i=new st(new po(t),rn(13270271,.58)),r=new st(new po(t),rn(4386047,.26,!0));r.scale.setScalar(.62),r.position.z=.04;const s=new st(new ai(n.radius*.62,n.radius*1.08,5),rn(13270271,.22,!0)),o=new st(new _n(n.radius*.16,n.radius*1.24,.07),rn(16777215,.4,!0));return o.rotation.z=-.36,o.position.z=.08,e.add(s,i,r,o),{group:e,pulseMeshes:[s,r,o],spinMeshes:[s]}}function AC(n){const e=new Ft,t=n.variant==="barrier"?EC(n):n.variant==="bumper"?MC(n):n.variant==="spinner"?TC(n):n.variant==="crystal"?wC(n):bC(n);return e.add(t.group),e.userData.id=n.id,e.userData.createdAt=performance.now(),e.userData.despawnAt=0,e.userData.baseOpacity=n.variant==="barrier"?.78:.86,e.userData.variant=n.variant,e.userData.pulseMeshes=t.pulseMeshes,e.userData.spinMeshes=t.spinMeshes,e.traverse(i=>{i instanceof st&&(i.userData.baseOpacity=i.material.opacity)}),e.scale.setScalar(.1),e}function CC(n,e,t){const i=new Set(e.map(r=>r.id));for(const r of[...n.children])if(!i.has(r.userData.id)){r.userData.despawnAt||=t;const s=Math.min(1,(t-r.userData.despawnAt)/260);r.scale.setScalar(Math.max(.01,1-s)),Im(r,1-s),s>=1&&(n.remove(r),SC(r))}e.forEach((r,s)=>{let o=n.children.find(l=>l.userData.id===r.id);o||(o=AC(r),n.add(o)),o.userData.despawnAt=0,o.position.set(r.x,r.y,.2),o.rotation.z=r.angle+t*.0013*Math.sign(r.spin||1);const a=Math.min(1,(t-o.userData.createdAt)/340),c=1+Math.sin(t*.0065+s)*(r.variant==="barrier"?.025:.07);o.scale.setScalar((.18+a*.82)*c),Im(o,a),o.userData.pulseMeshes.forEach((l,f)=>{l.scale.setScalar(1+Math.sin(t*.009+f+s)*.08)}),o.userData.spinMeshes.forEach((l,f)=>{l.rotation.z+=.018*Math.sign(r.spin||1)*(f+1)})})}function Zr(n,e,t=!1){return new Es({color:n,transparent:e<1,opacity:e,depthWrite:!1,blending:t?hs:Ni})}function Dm(n,e){n.material.color.setHex(e)}function js(n,e){const t=n.material;t.opacity=e,t.transparent=e<1}function RC(n,e,t){const i=new Ft,r=new st(new _n(si*1.16,Zi*1.95,.035),Zr(n,.2,!0));r.position.z=-.035;const s=new st(new _n(si*1.32,Zi*2.85,.025),Zr(n,.12,!0));s.position.z=-.06;const o=new st(new _n(si,Zi,.2),Zr(n,.96));o.position.z=.02;const a=new _n(si*1.08,Zi*.16,.08),c=new st(a.clone(),Zr(16777215,.86,!0)),l=new st(a.clone(),Zr(16777215,.86,!0));c.position.set(0,Zi*.66,.08),l.position.set(0,-Zi*.66,.08);const f=[];for(let h=0;h<5;h+=1){const m=new st(new _n(si*.055,Zi*.42,.09),Zr(16777215,.48,!0));m.position.set((h-2)*si*.18,0,.1),f.push(m)}const d=[];for(let h=0;h<4;h+=1){const m=new st(new _n(si*.16,Zi*.2,.1),Zr(16773226,0,!0));m.position.set((h-1.5)*si*.2,0,.14),d.push(m)}return i.add(s,r,o,c,l,...f,...d),i.userData.playerIndex=e,i.userData.edgeIndex=t,i.userData.refs={core:o,shield:r,glow:s,rails:[c,l],ticks:f,chargeBars:d},i}function PC(n,e){const{refs:t}=n.userData,i=e.eliminatedWall,r=i?16777215:e.color,s=e.connected||i?1:.45,o=.5+.5*Math.sin(e.time*.011+n.userData.playerIndex),a=e.charged?.65+o*.35:0;[t.core,t.shield,t.glow,...t.rails,...t.ticks].forEach(c=>Dm(c,r)),js(t.core,i?.22:.9*s),js(t.shield,i?.16:(.23+a*.24)*s),js(t.glow,i?.1:(.14+a*.25)*s),t.rails.forEach(c=>js(c,i?.34:(.76+a*.18)*s)),t.ticks.forEach((c,l)=>{const f=.32+Math.sin(e.time*.016+l)*.08;js(c,i?0:f*s)}),t.chargeBars.forEach((c,l)=>{js(c,e.charged&&!i?(.42+l*.12+o*.22)*s:0),Dm(c,l%2===0?16773226:r)}),t.shield.scale.y=i?.7:1+a*.28,t.glow.scale.y=i?.58:1+a*.42,t.core.scale.y=i?.72:1}function Jt(n,e=1,t=!1){return new Es({color:n,transparent:e<1,opacity:e,depthWrite:!1,blending:t?hs:Ni,side:Kn})}function oi(n,e,t,i){return new st(new _n(n,e,t),i)}function IC(n,e){const t=L_(n,e),i=new hl;return t.forEach((r,s)=>{s===0?i.moveTo(r.x,r.y):i.lineTo(r.x,r.y)}),i.closePath(),i}function Hu(n,e,t,i){const r=new st(new po(IC(n,e)),t);return r.position.z=i,r}function Gu(n,e,t,i,r=96){const s=new st(new ai(n-e,n+e,r),t);return s.position.z=i,s}function DC(n,e,t,i,r){const s=Qd(e,t);n.position.set(s.x+e.inward.x*i,s.y+e.inward.y*i,r),n.rotation.z=e.angle}function LC(n,e,t=!1){const i=new Ft,r=t?12:1;for(let s=0;s<r;s+=1){const o=t?n/(r*1.85):n,a=t?-n/2+(s+.5)*(n/r):0,c=oi(o,.025,.015,Jt(e,t?.48:.22,!0));c.position.x=a,i.add(c)}return i}function OC(n,e,t,i){const r=new Ft,s=t>=0,o=s?e:5327494,a=n.length,c=a*.94,l=oi(c,.46,.12,i.frame),f=oi(a*.88,.16,.1,i.frameTrim),d=oi(c*.96,.07,.04,Jt(o,s?.5:.18,!0)),h=oi(a*.78,.035,.035,Jt(o,s?.58:.16,!0));if(l.position.y=-.34,f.position.y=-.08,d.position.y=-.58,h.position.y=.03,r.add(l,f,d,h),[-1,1].forEach(m=>{const x=oi(Math.min(.44,a*.12),.54,.14,i.frame);x.position.set(m*a*.42,-.28,.02),x.rotation.z=m*.18,r.add(x)}),s){const m=oi(a*.72,.045,.035,Jt(o,.24,!0)),x=oi(a*.62,.024,.03,Jt(16777215,.36,!0));m.position.y=.34,x.position.y=.48,r.add(m,x);for(let y=0;y<9;y+=1){const v=oi(.055,.024,.06,Jt(y%2===0?o:16777215,.32,!0));v.position.set((y-4)*a*.07,.39,.07),r.add(v)}}return DC(r,n,.5,-.2,.12),r}function NC(n,e){const t=new Ft;return n.forEach(i=>{const r=oi(.5,.38,.12,e.frameTrim);r.position.set(i.a.x-i.inward.x*.28,i.a.y-i.inward.y*.28,.16),r.rotation.z=i.angle+.2,t.add(r)}),t}function UC(n,e){const t=new Ft,i=n*2.35,r=.64,s=Math.floor(i/r);for(let o=-s;o<=s;o+=1){const a=o*r,c=o%4===0,l=oi(i,c?.018:.01,.01,c?e.grid:Jt(1799679,.1,!0)),f=oi(c?.018:.01,i,.01,c?e.grid:Jt(16727538,.075,!0));l.position.set(0,a,-.16),f.position.set(a,0,-.16),t.add(l,f)}return t}function FC(n,e,t){const i=new Ft;return n.forEach((r,s)=>{const o=Qd(r,.5),a=Math.hypot(o.x,o.y),c=Zd(s,e),l=c>=0?t[c%t.length]:2248191,f=LC(a*.86,l,!0);f.position.set(o.x*.43,o.y*.43,-.02),f.rotation.z=Math.atan2(o.y,o.x),i.add(f)}),i}function BC(n,e){const t=new Ft,i=kr(n),r=gr(n,Gn),s=bs(i,r),o={floor:Jt(330520,.92),floorGlow:Jt(269630,.28,!0),frame:Jt(591897,.96),frameTrim:Jt(1709904,.82),grid:Jt(2618879,.16,!0),guide:Jt(16777215,.18,!0),cyan:Jt(2618879,.36,!0),magenta:Jt(16727538,.42,!0),white:Jt(16777215,.52,!0)},a=Hu(i,r*1.08,o.floorGlow,-.22),c=Hu(i,r*.98,o.floor,-.18),l=Hu(i,r*1.105,Jt(1183813,.38),-.2);t.add(UC(r,o),l,a,c);const f=Gu(r*.42,.012,Jt(1799679,.3,!0),-.01,128),d=Gu(Kt*7.6,.018,Jt(16727538,.55,!0),0,8),h=Gu(Kt*3.2,.016,Jt(16777215,.72,!0),.04,4);return h.rotation.z=Math.PI/4,f.userData.animate="slow-spin",d.userData.animate="reverse-spin",h.userData.animate="pulse",t.add(f,d,h,FC(s,n,e)),s.forEach((m,x)=>{const y=Zd(x,n),v=y>=0?e[y%e.length]:5327494;t.add(OC(m,v,y,o))}),t.add(NC(s,o)),t.userData.radius=r,t.userData.sides=i,t}function kC(n){n.traverse(e=>{if(!(e instanceof st))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function zC(n,e){const t=e/1e3;n.traverse(i=>{if(i.userData.animate==="slow-spin"){i.rotation.z=t*.08;return}if(i.userData.animate==="reverse-spin"){i.rotation.z=-t*.13;return}if(i.userData.animate==="pulse"){const r=1+Math.sin(t*2.2)*.035;i.scale.setScalar(r)}})}function VC(n){return n>=8?{min:7,max:8}:n>=7?{min:6,max:7}:n>=5?{min:5,max:6}:n>=4?{min:4,max:5}:{min:3,max:4}}function Wu(n,e,t,i=1){return{x:Math.cos(e)*n*t,y:Math.sin(e)*n*t,weight:i}}function HC(n,e){const t=[{x:0,y:0,weight:.2},{x:e*.22,y:0,weight:1.2},{x:-e*.22,y:0,weight:1.2},{x:0,y:e*.22,weight:1.2},{x:0,y:-e*.22,weight:1.2}],i=n>=7?16:n>=5?12:8,r=Math.PI/i;for(let o=0;o<i;o+=1)t.push(Wu(e,r+o/i*Math.PI*2,.39,1.6));const s=n>=7?16:10;for(let o=0;o<s;o+=1)t.push(Wu(e,o/s*Math.PI*2,.58,1.35));if(n>=6)for(let o=0;o<8;o+=1)t.push(Wu(e,Math.PI/4+o/8*Math.PI*2,.69,1));return t}function GC(n,e){return n.map(t=>({item:t,key:e()**(1/t.weight)})).sort((t,i)=>i.key-t.key).map(({item:t})=>t)}function Lm(n,e){const t=["bumper","post","barrier","spinner","crystal","bumper","post"],i=t[n%t.length];return e()<.12?t[Math.floor(e()*t.length)]:i}function Om(n,e){return n==="barrier"?.5+e()*.14:n==="spinner"?.48+e()*.11:n==="crystal"?.38+e()*.12:n==="bumper"?.42+e()*.13:.34+e()*.11}function Nm(n){return n==="bumper"?8:n==="barrier"?4:n==="spinner"?6:n==="crystal"?5:16}function WC(n,e,t,i,r=Math.random){const s=VC(n),o=s.min+Math.floor(r()*(s.max-s.min+1)),a=GC(HC(n,e),r),c=e*(n>=7?.205:n>=5?.19:.18),l=e*(n>=7?.055:.04),f=[];for(const h of a){if(f.length>=o)break;const m=Lm(f.length,r),x=Om(m,r),y={x:h.x+(r()-.5)*l,y:h.y+(r()-.5)*l},v=Math.hypot(y.x,y.y);v>e*.72||v<e*.1&&f.length>0||f.some(R=>Math.hypot(y.x-R.x,y.y-R.y)<c+(x+R.radius)*.45)||f.push({id:`${t}-${i}-${f.length}`,x:y.x,y:y.y,radius:x,sides:Nm(m),angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*xn(.5+r()*1.15,.5,1.65),variant:m})}let d=0;for(;f.length<s.min&&d<80;){d+=1;const h=r()*Math.PI*2,m=e*(.3+r()*.38),x=Lm(f.length,r),y=Om(x,r),v={x:Math.cos(h)*m,y:Math.sin(h)*m};f.some(R=>Math.hypot(v.x-R.x,v.y-R.y)<c)||f.push({id:`${t}-${i}-${f.length}`,x:v.x,y:v.y,radius:y,sides:Nm(x),angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*(.5+r()*1.15),variant:x})}return f}function $C(n){n.traverse(e=>{if(!(e instanceof st))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function Ys(n,e=1,t=!1){return new Es({color:n,transparent:e<1,opacity:e,side:Kn,depthWrite:!1,blending:t?hs:Ni})}function Um(n,e){n.material.color.setHex(e)}function Ks(n,e){const t=n.material;t.opacity=e,t.transparent=e<1}function qC(n,e){const t=new Ft,i=[0,1,2,3].map(l=>{const f=new st(new zi(Kt*(1.32-l*.18),24),Ys(e,.16-l*.03,!0));return f.position.z=-.08-l*.018,f}),r=new st(new zi(Kt*2.25,32),Ys(e,.16,!0)),s=new st(new ai(Kt*1.22,Kt*1.62,36),Ys(e,.52,!0)),o=new st(new ai(Kt*1.82,Kt*2.05,36),Ys(16773226,0,!0)),a=new st(new Hc(Kt,28,14),Ys(e,.96)),c=new st(new Hc(Kt*.48,18,10),Ys(16777215,.92,!0));return a.scale.z=.44,c.scale.z=.38,r.position.z=-.04,s.position.z=.04,o.position.z=.05,a.position.z=.08,c.position.z=.16,t.add(...i,r,s,o,a,c),t.userData.id=n.id,t.userData.core=a,t.userData.hotCore=c,t.userData.halo=r,t.userData.ring=s,t.userData.chargeRing=o,t.userData.trail=i,t.scale.setScalar(.12),t}function XC(n,e,t,i,r=0){const s=new Set(e.map(o=>o.id));for(const o of[...n.children])s.has(o.userData.id)||(n.remove(o),$C(o));e.forEach((o,a)=>{const c=o.lastTouchEdge>=0?t[o.lastTouchEdge%t.length]:16777215,l=o.chargedBy>=0?t[o.chargedBy%t.length]:c;let f=n.children.find(g=>g.userData.id===o.id);f||(f=qC(o,c),n.add(f));const d=Math.hypot(o.vx,o.vy)||1,h={x:o.vx/d,y:o.vy/d},m=o.chargedBy>=0,x=Math.max(0,1-o.age/.58),y=Math.min(1,Math.max(0,(o.hitCount-3)/8)),v=1+Math.sin(i*.014+a)*(m?.14:.045)+x*.6;f.position.set(o.x+o.vx*r,o.y+o.vy*r,.36),f.scale.setScalar(Math.max(.2,v)),f.rotation.z=Math.atan2(o.vy,o.vx),[f.userData.core,f.userData.halo,f.userData.ring,...f.userData.trail].forEach(g=>{Um(g,c)}),Um(f.userData.chargeRing,l),Ks(f.userData.core,.92),Ks(f.userData.hotCore,.82+x*.16),Ks(f.userData.halo,.13+x*.22+y*.1+(m?.2:0)),Ks(f.userData.ring,.46+x*.25+y*.12),Ks(f.userData.chargeRing,m?.72+Math.sin(i*.022)*.14:0),f.userData.ring.rotation.z=i*.0045*(m?1.75:1),f.userData.chargeRing.rotation.z=-i*.008,f.userData.halo.scale.setScalar(1+x*.55+y*.28+(m?.3:0)),f.userData.chargeRing.scale.setScalar(1+Math.sin(i*.018)*.08),f.userData.trail.forEach((g,R)=>{const C=Kt*(2.1+R*1.12+y*.9);g.position.x=-h.x*C,g.position.y=-h.y*C,g.rotation.z=Math.atan2(o.vy,o.vx),g.scale.x=1.15+y*.65+(m?.3:0),g.scale.y=.72,Ks(g,Math.max(.035,.17-R*.031+y*.035+(m?.055:0)))})})}const Fm=new ai(.18,.34,28),jC=new ba(.34,.045),Bm=new zi(.055,10);function $u(n,e){return new Es({color:n,transparent:!0,opacity:e,side:Kn,depthWrite:!1,blending:hs})}function YC(n){n.traverse(e=>{if(!(e instanceof st))return;(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function KC(n){const e=new Ft;n.add(e);function t(i,r,s,o,a=0){const c=new Ft,l=new st(Fm,$u(s,o==="score"?.7:.55)),f=new st(Bm,$u(16777215,.75)),d=o==="spawn"?6:o==="score"?10:4,h=o==="spawn"?.34:.2;for(let m=0;m<d;m+=1){const x=a+Math.PI*2*m/d,y=new st(m%2===0?jC:Bm,$u(m%3===0?16773226:s,.44));y.position.set(Math.cos(x)*h,Math.sin(x)*h,.03),y.rotation.z=x,y.userData.vx=Math.cos(x)*(.18+m*.015),y.userData.vy=Math.sin(x)*(.18+m*.015),c.add(y)}l.rotation.z=a,l.position.z=.05,f.position.z=.08,c.add(l,f),c.position.set(i,r,.62),c.userData.createdAt=performance.now(),c.userData.life=o==="score"?560:360,c.userData.kind=o,c.userData.velocity={x:Math.cos(a)*.02,y:Math.sin(a)*.02},e.add(c)}return{group:e,spawn:t,update(i){for(const r of[...e.children]){const s=i-r.userData.createdAt,o=Math.min(1,s/r.userData.life),a=1-o;r.scale.setScalar(.75+o*(r.userData.kind==="score"?1.4:.9)),r.position.x+=r.userData.velocity.x*a,r.position.y+=r.userData.velocity.y*a,r.rotation.z+=.025*a,r.traverse(c=>{if(!(c instanceof st))return;const l=c.material;l.opacity=(c.geometry===Fm?.55:.75)*a,c.position.x+=(c.userData.vx??0)*a,c.position.y+=(c.userData.vy??0)*a}),o>=1&&(e.remove(r),YC(r))}}}}const N_=document.querySelector("#app");if(!N_)throw new Error("Missing app root");let tn=yC();const yt=n=>sC(tn.language,n),Al=new K1(tn);E1(j1).mount(N_);const ei=document.querySelector("#gameCanvas"),Jo=document.querySelector(".shell"),ed=document.querySelector("#menuLayer"),Fr=document.querySelector("#statusText"),JC=document.querySelector("#modeText"),ZC=document.querySelector("#roundText"),km=document.querySelector("#topInviteActions"),So=document.querySelector("#roomCode"),QC=document.querySelector("#lobbyTitle"),fs=document.querySelector("#centerPanel"),eR=document.querySelector("#setupPanel"),tR=document.querySelector("#waitingPanel"),nR=document.querySelector("#waitingRoomCode"),iR=document.querySelector("#invitePanel"),Zo=document.querySelector("#inviteLinkInput"),rR=document.querySelector("#waitingRoster"),sR=document.querySelector("#resultsPanel"),oR=document.querySelector("#podiumList"),Vo=document.querySelector("#scoreStrip"),Ei=document.querySelector("#touchRail"),aR=document.querySelector("#thumb"),Ra=document.querySelector("#nameInput"),el=document.querySelector("#sidesInput"),th=document.querySelector("#gameModeInput"),cR=document.querySelector("#livesField"),td=document.querySelector("#livesInput"),tl=document.querySelector("#matchTimeInput"),ys=document.querySelector("#joinInput"),nd=document.querySelector("#languageInput"),id=document.querySelector("#musicVolumeInput"),rd=document.querySelector("#sfxVolumeInput"),U_=document.querySelector("#musicVolumeValue"),F_=document.querySelector("#sfxVolumeValue"),lR=document.querySelector("#singlePlayerButton"),uR=document.querySelector("#multiPlayerButton"),fR=document.querySelector("#settingsButton"),dR=document.querySelector("#aboutButton"),hR=document.querySelector("#exitButton"),pR=document.querySelectorAll(".back-button"),mR=document.querySelector("#createButton"),B_=document.querySelector("#joinButton"),k_=document.querySelector("#copyInviteButton"),sd=document.querySelector("#shareInviteButton"),z_=document.querySelector("#topCopyInviteButton"),od=document.querySelector("#topShareInviteButton"),gR=document.querySelector("#offlineButton"),ad=document.querySelector("#forceStartButton"),Br=document.querySelector("#readyButton"),cd=document.querySelector("#finishMatchButton"),_R=document.querySelector("#menuBackButton"),nl=document.querySelector("#pauseButton"),Cl=document.querySelector("#gameExitButton"),vR=document.querySelector("#pauseMenu"),xR=document.querySelector("#resumeButton"),yR=document.querySelector("#pauseExitButton"),nh=new Ry;nh.background=new It(461071);const An=new g0(-10,10,10,-10,.1,100);An.position.set(0,0,20);An.lookAt(0,0,0);const Pa=new KT({canvas:ei,antialias:!0,alpha:!1});Pa.setPixelRatio(Math.min(window.devicePixelRatio,1.75));Pa.outputColorSpace=Yn;const ma=new Ft,Qo=new Ft,ga=new Ft,ih=new Ft,Rl=new Ft;ma.add(Qo,ga,ih,Rl);nh.add(ma);const zn=KC(ma),vn=[16732013,5242788,6661887,16250716,16751170,13270271,4386047,16777215],SR=20,ER=90,MR=.0015,bR=.075,TR="wss://pong87.onrender.com",il=new dx.Client(TR);let Vt=null,Sn="",ne=mC(yt("disconnected")),nr=.5,ki=.5,rh=0,ds=!1,Dc=0,ld=Number.NaN,Zt=!1,sh=null,zm=performance.now(),Lc=0,Ss=null,ud=0,V_=.5,oh=!1;const or=new Set;let H_="",Vm=0,Oc=3.5,Zs=0,G_=0,ea=Jd,_a=0,rs=0,qu="",Pt=null,fd="",Ts=!1;function ah(){Al.unlock().catch(()=>{})}function Qt(n,e=1){Al.play(n,e)}function W_(n){kC(Qo),Qo.clear(),ga.clear();const e=kr(n),t=gr(n,Gn);bs(e,t),H_=`${n}:${e}`,Qo.add(BC(n,vn));for(let i=0;i<n;i+=1){const r=wl(i,n),s=RC(vn[i%vn.length],i,r);ga.add(s)}}function ws(){const n=ei.parentElement?.getBoundingClientRect(),e=Math.max(1,Math.round(n?.width||window.innerWidth)),t=Math.max(1,Math.round(n?.height||window.innerHeight)),i=e/t,s=(gr(ne.sides||mr,Gn)+Zi+Kt+.75)*2,o=e<760&&Jo.classList.contains("game-active")?Math.min(96,t*.2):0,a=Math.max(.68,(t-o)/t),c=Math.max(s/i,s/a),f=-(c*(o/t))/2;An.position.set(0,f,20),An.lookAt(0,f,0),An.top=c/2,An.bottom=-c/2,An.left=-c*i/2,An.right=c*i/2,An.updateProjectionMatrix(),Pa.setSize(e,t,!1)}function wR(){const n=ne.seats.find(e=>e.id===Sn);return n?wl(n.edgeIndex,ne.sides||mr):0}function AR(){const n=ne.sides||mr,e=bs(kr(n),gr(n,Gn));return-(e[wR()]??e[0]).angle}function CR(n,e){return Math.atan2(Math.sin(e-n),Math.cos(e-n))}function rl(){return ne.balls.length>0?ne.balls:[{...ne.ball,id:"legacy-ball",lastTouchEdge:ne.lastTouchEdge,chargedBy:ne.chargedBy,age:1,hitCount:0}]}function Hm(){return 8+Math.random()*5}function Gm(n){const e=gr(n,Gn),t=WC(n,e,"local",Vm);return Vm+=1,t}function RR(n){return{sides:n.sides,phase:n.phase,lastEvent:n.lastEvent,round:n.round,countdown:n.countdown,remainingTime:n.remainingTime,matchTimeSeconds:n.matchTimeSeconds,livesPerPlayer:n.livesPerPlayer,lastTouchEdge:n.lastTouchEdge,mode:n.mode,ball:{x:n.ball.x,y:n.ball.y,vx:n.ball.vx,vy:n.ball.vy},balls:Array.from(n.balls?.length?n.balls:[n.ball]).map((e,t)=>({id:e.id||`legacy-${t}`,x:e.x,y:e.y,vx:e.vx,vy:e.vy,lastTouchEdge:e.lastTouchEdge??n.lastTouchEdge??-1,chargedBy:e.chargedBy??n.chargedBy??-1,age:e.age??1,hitCount:e.hitCount??0})),chargedBy:n.chargedBy??-1,obstacles:Array.from(n.obstacles??[]).map(e=>({id:e.id,x:e.x,y:e.y,radius:e.radius,sides:e.sides,angle:e.angle,spin:e.spin,variant:e.variant??"post"})),seats:Array.from(n.seats).map(e=>({id:e.id,name:e.name,edgeIndex:e.edgeIndex,paddle:e.paddle,paddleVelocity:0,lives:e.lives,score:e.score,charge:!!e.charge,ready:e.ready,connected:e.connected}))}}function Eo(){const n=_C(th.value,tl.value,td.value);return tl.value=String(n.matchTimeSeconds),td.value=String(n.lives),n}function ch(n){return n.replace(/[\s-]/g,"").toUpperCase()}function $_(){const n=Vt?.roomId||So.textContent||"";return ch(n==="----"||n==="SOLO"?"":n)}function lh(n=$_()){const e=new URL(window.location.href);return e.searchParams.delete("arcadeToken"),e.searchParams.delete("returnUrl"),e.searchParams.delete("offline"),e.searchParams.set("room",n),e.toString()}function va(){const n=$_(),e=!!n&&!!Vt&&!Zt,t="share"in navigator;iR.classList.toggle("hidden",!e),km.classList.toggle("hidden",!e),km.classList.toggle("no-native-share",!t),k_.disabled=!e,z_.disabled=!e,sd.disabled=!e,od.disabled=!e,sd.hidden=!t,od.hidden=!t,Zo.value=e?lh(n):""}async function uh(){const n=Zo.value||lh();if(n){try{await navigator.clipboard.writeText(n)}catch{Zo.hidden=!1,Zo.select(),document.execCommand("copy")}Fr.textContent=yt("copiedInvite")}}async function q_(){const n=Zo.value||lh();if(!n||!("share"in navigator)){await uh();return}await navigator.share({title:yt("inviteTitle"),text:yt("inviteText"),url:n})}function PR(){if(Pt)return;const n=new URLSearchParams(window.location.search),e=ch(n.get("room")||"");e&&(Ts=!0,ys.value=e,As("multi"),Fr.textContent=`${yt("joinPlaceholder")}: ${e}`)}function X_(){const n=th.value==="elimination"?"elimination":"score";cR.classList.toggle("hidden",n!=="elimination"),tl.querySelector('option[value="0"]').disabled=n==="score",Eo()}function j_(){document.documentElement.lang=tn.language,document.querySelectorAll("[data-i18n]").forEach(n=>{const e=n.dataset.i18n;n.textContent=yt(e)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{const e=n.dataset.i18nPlaceholder;n.placeholder=yt(e)}),nd.value=tn.language,id.value=String(tn.musicVolume),rd.value=String(tn.sfxVolume),U_.textContent=`${tn.musicVolume}%`,F_.textContent=`${tn.sfxVolume}%`,!Vt&&!Zt&&(Fr.textContent=yt("disconnected")),lr()}function Ia(n){Jo.classList.add("menu-open"),ed.classList.remove("hidden"),fs.classList.add("hidden"),sh=null,ed.querySelectorAll("[data-menu-view]").forEach(e=>{e.hidden=e.dataset.menuView!==n})}async function Pl(){if(Da(!1),Ts=!1,Cl.hidden=!0,Zt=!1,await Il(),Pt){rC(Pt);return}ne=gC(ne,yt("disconnected")),ne.ball={x:0,y:0,vx:0,vy:0},ne.balls=[],Rl.clear(),ih.clear(),So.textContent="----",ys.value="",va(),Br.disabled=!0,Ia("main"),lr()}function As(n){sh=n,Cl.hidden=!1,ed.classList.add("hidden"),fs.dataset.flow=n,fs.classList.toggle("invite-join",Ts&&n==="multi"&&!Vt),fs.classList.remove("hidden"),QC.textContent=yt(n==="single"?"singlePlayerTitle":"multiPlayerTitle"),So.textContent=n==="single"?"SOLO":"----",va(),Br.disabled=n==="multi"&&!Vt,lr()}async function Y_(){Ts=!1,Zt=!1,await Il(),As("multi");const n=xn(Number(el.value),Jc,Zc),e=Eo();Vt=await il.create("polygon_pong",{sides:n,name:Ra.value,...e,...Pt?Kc(Pt,e):{}}),dh(Vt)}async function K_(){const n=ch(ys.value);n&&(ys.value=n,Zt=!1,await Il(),As("multi"),Vt=await il.joinById(n,{name:Ra.value,...Pt?Kc(Pt):{}}),dh(Vt))}async function Il(){Vt&&(await Vt.leave(),Vt=null)}async function fh(){await Il(),ah(),Qt("start"),As("single");const n=xn(Number(el.value),Jc,Zc),e=Eo();Zt=!0,Sn="offline-human",nr=.5,ki=.5,rh=0,Da(!1),Lc=0,Oc=0,Zs=0,ea=0,_a=0,G_=0,Rl.clear(),So.textContent=yt("botName"),ys.value="",Br.disabled=!1,Br.textContent=yt("restart"),ne=UR(n,e),fd="",J_(),ws(),lr()}async function IR(){if(Pt=await eC(),!!Pt){if(Ra.value=Pt.payload.user.displayName,Pt.roomId&&(ys.value=Pt.roomId),Pt.sides&&(el.value=String(xn(Pt.sides,Jc,Zc))),await w_(Pt,"game.client_ready",{roomId:Pt.roomId,returnUrl:Pt.returnUrl,offline:Pt.offline,sides:Pt.sides}),Pt.offline){await fh();return}As("multi");try{if(!Pt.roomId){await Y_();return}Vt=await il.joinById(Pt.roomId,Kc(Pt))}catch{const n=Eo();Vt=await il.create("polygon_pong",{sides:xn(Number(el.value),Jc,Zc),...Kc(Pt,n)})}dh(Vt)}}function dh(n){Ts=!1,fs.classList.remove("invite-join"),Sn=n.sessionId,Dc=0,ld=Number.NaN,So.textContent=n.roomId,ys.value=n.roomId,Br.disabled=!1,Fr.textContent=yt("connected"),va(),n.onStateChange(e=>{const t=ne.lastEvent;ne=RR(e),WR(t,ne),J_(),ws(),lr()}),n.onLeave(()=>{Fr.textContent=yt("disconnected"),Br.disabled=!0,va()})}function J_(){const n=`${ne.sides}:${kr(ne.sides)}`;(ga.children.length!==ne.sides||H_!==n)&&W_(ne.sides)}function lr(){const n=ne.seats.find(f=>f.id===Sn),e=ne.seats.map(f=>`${f.id}:${f.score}:${f.lives}`).join("|");qu&&e!==qu&&(rs=1),qu=e;const t=ne.phase==="playing"||ne.phase==="countdown",i=Zt&&t;nl.hidden=!i,Cl.hidden=!(Vt||Zt||t);const r=Jo.classList.contains("game-active");Jo.classList.toggle("game-active",t),Jo.classList.toggle("menu-open",!t),r!==t&&ws(),vR.classList.toggle("hidden",!(Zt&&ds&&t));const s=!!sh&&ne.phase!=="playing"&&ne.phase!=="countdown";fs.classList.toggle("hidden",!s);const o=!!Vt||Zt;eR.classList.toggle("hidden",o),tR.classList.toggle("hidden",!o||ne.phase==="results"),sR.classList.toggle("hidden",ne.phase!=="results"),DR(),nR.textContent=So.textContent||"----";const a=ne.seats.filter(f=>f.connected&&!f.id.startsWith("bot-")).length,c=!!Vt&&!Zt&&ne.phase==="lobby"&&a>0&&a<ne.sides;ad.classList.toggle("hidden",!c),ad.disabled=!c,cd.classList.toggle("hidden",ne.phase!=="results"),cd.disabled=ne.phase!=="results",B_.textContent=yt(Ts?"joinRoom":"link"),va(),Br.textContent=Zt?yt("restart"):n?.ready?yt("waiting"):yt("ready"),Fr.textContent=`${ne.lastEvent}${ne.phase==="countdown"?` ${Math.ceil(ne.countdown)}`:""}`,JC.textContent=ne.mode==="score"?"SCORE":Zt?"SIM":Vt?"K.O.":"STANDBY",ZC.textContent=ne.matchTimeSeconds>0?vC(ne.remainingTime):`R-${String(ne.round).padStart(2,"0")}`;const l=ne.sides>=7?4:ne.sides>=5?3:2;Vo.classList.toggle("compact",ne.sides>=5),Vo.style.setProperty("--score-columns-mobile",String(l)),Vo.dataset.players=String(ne.sides),Vo.innerHTML=ne.seats.map((f,d)=>{const h=f.connected?ne.mode==="score"?String(f.score).padStart(2,"0"):`${f.lives}/${ne.livesPerPlayer}`:"--",m=f.ready?yt("ready").toUpperCase():yt("open"),x=Array.from({length:ne.livesPerPlayer},(v,g)=>`<i class="${g<f.lives&&f.connected?"on":""}"></i>`).join(""),y=ne.mode==="score"?`${yt("last")} ${ne.lastTouchEdge===f.edgeIndex?yt("lastTouch"):m}`:f.connected&&f.lives<=0?yt("wall"):m;return`
      <div class="score" style="--accent:#${vn[d].toString(16).padStart(6,"0")}">
        <span>${String(f.edgeIndex+1).padStart(2,"0")} / ${f.name}</span>
        <strong>${h}</strong>
        <div class="integrity">${x}</div>
        <em>${y}</em>
      </div>
    `}).join(""),rR.innerHTML=ne.seats.map((f,d)=>`
    <div class="roster-row" style="--accent:#${vn[d].toString(16).padStart(6,"0")}">
      <span>${String(f.edgeIndex+1).padStart(2,"0")}</span>
      <strong>${f.name}</strong>
      <em>${f.connected&&f.ready?yt("ready").toUpperCase():yt("open")}</em>
    </div>
  `).join(""),oR.innerHTML=xC(ne).slice(0,3).map((f,d)=>`
    <div class="podium-row place-${d+1}" style="--accent:#${vn[f.edgeIndex%vn.length].toString(16).padStart(6,"0")}">
      <span>#${d+1}</span>
      <strong>${f.name}</strong>
      <em>${ne.mode==="score"?String(f.score).padStart(2,"0"):`${f.lives}/${ne.livesPerPlayer}`}</em>
    </div>
  `).join("")}function DR(){if(!Pt||!Zt||ne.phase!=="results")return;const n=ne.seats.map(e=>`${e.id}:${e.score}:${e.lives}`).join("|");!n||n===fd||(fd=n,iC(Pt,ne).catch(Un))}function Da(n){ds=n,nl.dataset.paused=String(ds),nl.setAttribute("aria-label",yt(ds?"continueGame":"pauseTitle")),or.clear(),Qt("pause"),lr()}function hh(n=!1){if(Zt||!Vt)return;const e=performance.now(),t=Math.abs(ki-ld)>=MR,i=e-Dc>=ER;!n&&(!t||e-Dc<SR)&&!i||(Dc=e,ld=ki,Vt.send("input",{paddle:ki}))}function Dl(n,e=!1){ki=xn(n,0,1),hh(e)}function LR(){if(Qt("charge"),Zt){const n=ne.seats.find(e=>e.id===Sn);n&&n.lives>0&&(n.charge=!0);return}Vt?.send("input",{charge:!0})}function OR(n){const e=Ei.getBoundingClientRect();Dl((n-e.left)/e.width)}function Z_(n,e,t){Ss=n,ud=e,V_=ki,oh=!1,t.setPointerCapture(n)}function Q_(n,e){Math.abs(n-ud)>4&&(oh=!0);const t=window.innerWidth<720?1.25:1,i=(n-ud)/Math.max(1,e)*t;Dl(V_+i)}function Ll(n,e){Ss===n&&(Ss=null,e.hasPointerCapture(n)&&e.releasePointerCapture(n))}Ei.addEventListener("pointerdown",n=>{Z_(n.pointerId,n.clientX,Ei)});Ei.addEventListener("pointermove",n=>{Ss===n.pointerId&&Q_(n.clientX,Ei.getBoundingClientRect().width)});Ei.addEventListener("click",n=>{oh||OR(n.clientX)});Ei.addEventListener("pointerup",n=>Ll(n.pointerId,Ei));Ei.addEventListener("pointercancel",n=>Ll(n.pointerId,Ei));Ei.addEventListener("lostpointercapture",()=>{Ss=null});ei.addEventListener("pointerdown",n=>{fs.classList.contains("hidden")&&Z_(n.pointerId,n.clientX,ei)});ei.addEventListener("pointermove",n=>{Ss===n.pointerId&&Q_(n.clientX,window.innerWidth*.72)});ei.addEventListener("pointerup",n=>Ll(n.pointerId,ei));ei.addEventListener("pointercancel",n=>Ll(n.pointerId,ei));ei.addEventListener("lostpointercapture",()=>{Ss=null});function ev(){const n=or.has("ArrowLeft")||or.has("KeyA"),e=or.has("ArrowRight")||or.has("KeyD");return Number(e)-Number(n)}function NR(n){return n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement}window.addEventListener("keydown",n=>{if(ah(),n.code==="Escape"&&Zt&&(ne.phase==="playing"||ne.phase==="countdown")){n.preventDefault(),Da(!ds);return}if(!NR(n.target)&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)){n.preventDefault(),or.add(n.code);const e=ev();e!==0&&Dl(ki+e*.045,!0)}n.code==="Space"&&!n.repeat&&(n.preventDefault(),LR())});window.addEventListener("keyup",n=>{["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&or.delete(n.code)});document.addEventListener("pointerdown",n=>{ah(),n.target instanceof HTMLButtonElement&&Qt("ui")},{passive:!0});lR.addEventListener("click",()=>As("single"));uR.addEventListener("click",()=>As("multi"));fR.addEventListener("click",()=>Ia("settings"));dR.addEventListener("click",()=>Ia("about"));hR.addEventListener("click",()=>Ia("exit"));pR.forEach(n=>n.addEventListener("click",()=>Ia("main")));_R.addEventListener("click",()=>Pl().catch(Un));nd.addEventListener("change",()=>{tn={...tn,language:nd.value==="en"?"en":"es"},eh(tn),j_()});id.addEventListener("input",()=>{tn={...tn,musicVolume:xn(Number(id.value),0,100)},U_.textContent=`${tn.musicVolume}%`,Al.setSettings(tn),eh(tn)});rd.addEventListener("input",()=>{tn={...tn,sfxVolume:xn(Number(rd.value),0,100)},F_.textContent=`${tn.sfxVolume}%`,Al.setSettings(tn),eh(tn)});th.addEventListener("change",X_);tl.addEventListener("change",Eo);td.addEventListener("change",Eo);Ra.addEventListener("keydown",n=>{n.key==="Enter"&&Ts&&!Vt&&(n.preventDefault(),K_().catch(Un))});mR.addEventListener("click",()=>Y_().catch(Un));B_.addEventListener("click",()=>K_().catch(Un));k_.addEventListener("click",()=>uh().catch(Un));sd.addEventListener("click",()=>q_().catch(Un));z_.addEventListener("click",()=>uh().catch(Un));od.addEventListener("click",()=>q_().catch(Un));gR.addEventListener("click",()=>fh().catch(Un));ad.addEventListener("click",()=>{Vt?.send("input",{forceStart:!0})});Br.addEventListener("click",()=>{if(Zt){fh().catch(Un);return}const n=ne.seats.find(e=>e.id===Sn);Qt("ready"),Vt?.send("input",{ready:!n?.ready})});nl.addEventListener("click",()=>{Da(!ds)});cd.addEventListener("click",()=>Pl().catch(Un));Cl.addEventListener("click",()=>Pl().catch(Un));xR.addEventListener("click",()=>Da(!1));yR.addEventListener("click",()=>Pl().catch(Un));function Un(n){Fr.textContent=n instanceof Error?n.message:yt("errorConnection"),Pt&&w_(Pt,"error.client",{message:Fr.textContent}).catch(()=>{})}function UR(n,e){const t={sides:n,phase:"countdown",lastEvent:yt("offlineEvent"),round:1,countdown:.9,remainingTime:e.matchTimeSeconds,matchTimeSeconds:e.matchTimeSeconds,livesPerPlayer:e.lives,lastTouchEdge:-1,mode:e.mode,ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:Array.from({length:n},(r,s)=>({id:s===0?"offline-human":`bot-${s}`,name:s===0?Ra.value.trim().slice(0,16)||yt("playerFallback"):`${yt("botName")} ${s}`,edgeIndex:s,paddle:.5,paddleVelocity:0,lives:e.lives,score:0,charge:!1,ready:!0,connected:!0}))},i=ph(-1,n);return t.ball={x:i.x,y:i.y,vx:i.vx,vy:i.vy},t.balls=[i],ea=0,_a=0,t}function ph(n=-1,e=ne.sides||mr,t=0){const i=bs(kr(e),gr(e,Gn)),r=n>=0?wl(n,e):-1,o=(r>=0?Math.atan2(-i[r].inward.y,-i[r].inward.x):e===2?Math.random()<.5?0:Math.PI:Math.random()*Math.PI*2)+(Math.random()-.5)*.65,a=pC(e,ne.balls?.length??0,t);return{id:`local-ball-${G_++}`,x:0,y:0,vx:Math.cos(o)*a,vy:Math.sin(o)*a,lastTouchEdge:-1,chargedBy:-1,age:0,hitCount:0}}function dd(n,e=0){n.hitCount+=1;const t=Math.hypot(n.vx,n.vy)||C_,i=hC(n.hitCount,ne.sides)+e;n.vx=n.vx/t*i,n.vy=n.vy/t*i}function FR(n){if(!Zt||ne.phase==="lobby")return;if(ne.phase==="countdown"){ne.countdown-=n,ne.countdown<=0&&(ne.phase="playing",ne.lastEvent=yt("offlineEvent")),lr();return}if(ne.phase!=="playing")return;if(_a+=n,zR(n),BR(n),ne.matchTimeSeconds>0&&(ne.remainingTime=Math.max(0,ne.remainingTime-n),ne.remainingTime<=0)){kR(),lr();return}const e=D_(ne.sides,_a);ea+=n,ne.balls.length<e&&ea>=Jd&&(ne.balls.push(ph()),ne.lastEvent="Nueva esfera",Qt("spawn"),ea=0);for(const t of ne.balls)t.age+=n,t.x+=t.vx*n,t.y+=t.vy*n;GR();for(let t=ne.balls.length-1;t>=0&&ne.phase==="playing";t-=1){const i=ne.balls[t];HR(i),$R(i,t)}tv(),lr()}function BR(n){if(ne.obstacles.forEach(e=>{e.angle+=e.spin*n}),Zs>0){Zs-=n,Zs<=0&&(ne.obstacles=Gm(ne.sides),Zs=Hm());return}Oc-=n,Oc<=0&&(ne.obstacles=Gm(ne.sides),Zs=Hm(),Oc=0)}function kR(){const n=ne.seats.filter(i=>i.connected),e=Math.max(...n.map(i=>i.score),0),t=n.filter(i=>i.score===e);ne.phase="results",ne.obstacles=[],ne.chargedBy=-1,ne.ball={x:0,y:0,vx:0,vy:0},ne.balls=[],ne.lastEvent=t.length===1?`${t[0].name} gana por tiempo`:"Empate por tiempo"}function zR(n){const e=bs(kr(ne.sides),gr(ne.sides,Gn));ne.seats.forEach(t=>{if(t.id===Sn||ne.mode==="elimination"&&t.lives<=0)return;const i=e[wl(t.edgeIndex,ne.sides)],s=rl().map(C=>({ball:C,prediction:VR(i,{x:C.x,y:C.y},{x:C.vx,y:C.vy})})).filter(C=>C.prediction).sort((C,b)=>(C.prediction?.time??99)-(b.prediction?.time??99))[0],o=s?.prediction??null,a=s?.ball??rl()[0]??ne.ball,c=performance.now()*.001,l=.5+t.edgeIndex*37%5*.08,f=.5+Math.sin(c*(.85+l)+t.edgeIndex*2.1)*.26,d=us({x:a.vx,y:a.vy},i.tangent),h=xn(d/12,-.14,.14),m=o?xn(1.25-o.time,0,1):0,x=Math.sin(c*3.1+t.edgeIndex*1.7)*(.11-m*.045),y=o?o.t+h*m+x:f,v=xn(y,.08,.92),g=n*(.56+m*1.28+l*.18),R=t.paddle;t.paddle+=xn(v-t.paddle,-g,g),t.paddleVelocity=(t.paddle-R)/Math.max(n,.001)})}function VR(n,e,t){const i=us(t,n.inward);if(i>=-.001)return null;const r={x:e.x-n.a.x,y:e.y-n.a.y},s=us(r,n.inward),o=(Kt-s)/i;if(o<0||o>2.5)return null;const a={x:e.x+t.x*o,y:e.y+t.y*o},c=us({x:a.x-n.a.x,y:a.y-n.a.y},n.tangent);return{t:xn(c/n.length,0,1),time:o}}function HR(n){for(const e of ne.obstacles){const t=n.x-e.x,i=n.y-e.y,r=Math.hypot(t,i),s=e.radius+Kt;if(r>s)continue;const o=r>.001?{x:t/r,y:i/r}:{x:1,y:0},a=Qf({x:n.vx,y:n.vy},o),c={x:-o.y,y:o.x};n.vx=a.x+c.x*e.spin*.55,n.vy=a.y+c.y*e.spin*.55,dd(n),n.x=e.x+o.x*(s+.05),n.y=e.y+o.y*(s+.05),n.chargedBy=-1,zn.spawn(n.x,n.y,e.variant==="bumper"?16773226:4386047,"obstacle",Math.atan2(o.y,o.x)),Qt("obstacle",.85+Math.min(.6,Math.hypot(n.vx,n.vy)/18)),ne.lastEvent="Obstaculo desvio";return}}function GR(){const n=Kt*2,e=n*n;for(let t=0;t<ne.balls.length;t+=1)for(let i=t+1;i<ne.balls.length;i+=1){const r=ne.balls[t],s=ne.balls[i],o=s.x-r.x,a=s.y-r.y,c=o*o+a*a;if(c<=0||c>e)continue;const l=Math.sqrt(c),f={x:o/l,y:a/l},d=n-l;r.x-=f.x*d*.5,r.y-=f.y*d*.5,s.x+=f.x*d*.5,s.y+=f.y*d*.5;const h=(r.vx-s.vx)*f.x+(r.vy-s.vy)*f.y;if(h<=0)continue;r.vx-=f.x*h,r.vy-=f.y*h,s.vx+=f.x*h,s.vy+=f.y*h,r.chargedBy=-1,s.chargedBy=-1;const m=(r.x+s.x)*.5,x=(r.y+s.y)*.5;zn.spawn(m,x,16777215,"obstacle",Math.atan2(f.y,f.x)),Qt("obstacle",.75),ne.lastEvent="Esferas chocaron"}}function WR(n,e){if(n===e.lastEvent||Zt)return;const t=rl()[0];if(!t)return;const i=e.lastEvent,r=e.seats.find(a=>a.id===Sn),s=e.lastTouchEdge>=0?e.lastTouchEdge:t.lastTouchEdge,o=s>=0?vn[s%vn.length]:16777215;i.includes("Esferas")?(zn.spawn(t.x,t.y,16777215,"obstacle",Math.atan2(t.vy,t.vx)),Qt("obstacle",.75)):i.includes("Obstaculo")?(zn.spawn(t.x,t.y,4386047,"obstacle",Math.atan2(t.vy,t.vx)),Qt("obstacle")):i.includes("bloqueo")?(zn.spawn(t.x,t.y,o,e.chargedBy>=0?"score":"pad",Math.atan2(t.vy,t.vx)),Qt(s===r?.edgeIndex?"pad":"wall")):i.includes("Muro")||i.includes("reboto")?(zn.spawn(t.x,t.y,16777215,"wall",Math.atan2(t.vy,t.vx)),Qt("wall")):i.includes("anota")?(zn.spawn(t.x,t.y,o,"score",Math.atan2(t.vy,t.vx)),Qt(r&&i.includes(r.name)?"scoreFor":"scoreAgainst")):(i.includes("eliminado")||i.includes("perdio"))&&(zn.spawn(t.x,t.y,o,"score",Math.atan2(t.vy,t.vx)),Qt(r&&i.includes(r.name)?"scoreAgainst":"scoreFor"))}function $R(n,e){const t=bs(kr(ne.sides),gr(ne.sides,Gn));for(let i=0;i<t.length;i+=1){const r=t[i],s={x:n.x-r.a.x,y:n.y-r.a.y},o=us(s,r.inward);if(o>Am)continue;const c=us(s,r.tangent)/r.length;if(c<-.02||c>1.02)continue;const l=Zd(i,ne.sides),f=l>=0?ne.seats[l]:void 0;if(!f){if(o>Kt)continue;const R=Qf({x:n.vx,y:n.vy},r.inward);n.vx=R.x,n.vy=R.y,dd(n),n.x+=r.inward.x*(Kt-o+.06),n.y+=r.inward.y*(Kt-o+.06),n.chargedBy=-1,zn.spawn(n.x,n.y,16777215,"wall",r.angle),Qt("wall"),ne.lastEvent=`Muro ${i+1} reboto`;return}const h=Am,m=(I_(ne.sides)+h*1.35)/r.length/2,x=f.id===Sn?nr:f.paddle,y=ne.mode==="elimination"&&f.connected&&f.lives<=0&&o<=Kt,v=f.connected&&f.lives>0&&o<=h&&Math.abs(c-x)<=m;if(v||y){const R=v?h:Kt,C=Qf({x:n.vx,y:n.vy},r.inward),b=v?xn((c-x)/m,-1,1):0,N=Math.sign(b)*Math.pow(Math.abs(b),.72)*3.7,k=f.id===Sn?rh:f.paddleVelocity,B=v?-xn(k,-3.2,3.2)*1.25:0;n.vx=C.x+r.tangent.x*(N+B),n.vy=C.y+r.tangent.y*(N+B);const J=v&&f.charge;dd(n,J?2.3:0),n.x+=r.inward.x*(R-o+.06),n.y+=r.inward.y*(R-o+.06),v?(n.lastTouchEdge=f.edgeIndex,n.chargedBy=J?f.edgeIndex:-1,ne.lastTouchEdge=f.edgeIndex,ne.chargedBy=n.chargedBy,f.charge=!1,zn.spawn(n.x,n.y,vn[f.edgeIndex%vn.length],J?"score":"pad",r.angle),Qt(f.id===Sn?"pad":"wall"),ne.lastEvent=`${f.name} bloqueo`):(n.chargedBy=-1,zn.spawn(n.x,n.y,16777215,"wall",r.angle),Qt("wall"),ne.lastEvent=`Muro ${f.edgeIndex+1} reboto`);return}if(o>Kt)continue;if(ne.mode==="score"){const R=ne.seats[n.lastTouchEdge];R&&R.connected&&R.edgeIndex!==f.edgeIndex?(R.score+=1,ne.lastEvent=`${R.name} anota`,rs=1,zn.spawn(n.x,n.y,vn[R.edgeIndex%vn.length],"score",r.angle),Qt(R.id===Sn?"scoreFor":f.id===Sn?"scoreAgainst":"scoreFor")):(ne.lastEvent=`${f.name} fallo`,f.id===Sn&&Qt("scoreAgainst"))}else f.lives=Math.max(0,f.lives-1),ne.lastEvent=f.lives===0?`${f.name} eliminado`:`${f.name} perdio una vida`,zn.spawn(n.x,n.y,vn[f.edgeIndex%vn.length],"score",r.angle),Qt(f.id===Sn?"scoreAgainst":"scoreFor");const g=ne.mode==="score"?ne.seats.filter(R=>R.connected):ne.seats.filter(R=>R.lives>0);if(ne.mode==="elimination"&&g.length<=1)ne.phase="results",ne.lastEvent=g[0]?`${g[0].name} gana`:"Ronda terminada",ne.balls=[],ne.obstacles=[],ne.chargedBy=-1,ne.ball={x:0,y:0,vx:0,vy:0};else{ne.round+=1;const R=Math.hypot(n.vx,n.vy);ne.balls.splice(e,1);const C=D_(ne.sides,_a);let b=0;for(;ne.balls.length<C;)ne.balls.push(ph(f.edgeIndex,ne.sides,b===0?R:0)),b+=1;b>0&&Qt("spawn")}tv();return}}function tv(){const n=ne.balls[0];if(!n){ne.ball={x:0,y:0,vx:0,vy:0},ne.lastTouchEdge=-1,ne.chargedBy=-1;return}ne.ball={x:n.x,y:n.y,vx:n.vx,vy:n.vy},ne.lastTouchEdge=n.lastTouchEdge,ne.chargedBy=n.chargedBy}function nv(n){const e=Math.min((n-zm)/1e3,.1);zm=n;const t=AR();if(ma.rotation.z+=CR(ma.rotation.z,t)*Math.min(1,e*16),!ds){const i=ev();i!==0&&Dl(ki+i*e*1.85);const r=nr;for(nr+=(ki-nr)*Math.min(1,e*18),rh=(nr-r)/Math.max(e,.001),aR.style.left=`${nr*100}%`,Lc+=e;Lc>=Vu;)FR(Vu),Lc-=Vu;rs=Math.max(0,rs-e*2.8),Vo.style.filter=rs>0?`brightness(${1+rs*.8}) saturate(${1+rs*.5})`:"",XC(Rl,rl(),vn,n,Zt?0:bR),CC(ih,ne.obstacles,n),zC(Qo,n),zn.update(n);const s=bs(kr(ne.sides),gr(ne.sides,Gn));ga.children.forEach(o=>{const a=o,c=a.userData.playerIndex,l=a.userData.edgeIndex,f=s[l],d=ne.seats[c],h=ne.mode==="elimination"&&!!d?.connected&&(d?.lives??0)<=0,m=h?.5:d?.connected&&d.id===Sn?nr:d?.paddle??.5,x=Qd(f,m);a.position.set(x.x+f.inward.x*(h?.05:.28),x.y+f.inward.y*(h?.05:.28),.45),a.rotation.z=f.angle;const y=I_(ne.sides);a.scale.x=h?f.length/si:y/si,a.scale.y=h?.32:d?.connected?1:.35,PC(a,{color:vn[c%vn.length],connected:!!d?.connected,eliminatedWall:h,charged:!!d?.charge,time:n})})}Pa.render(nh,An),requestAnimationFrame(nv)}window.addEventListener("resize",ws);window.addEventListener("orientationchange",ws);window.visualViewport?.addEventListener("resize",ws);window.addEventListener("blur",()=>{or.clear(),hh(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&or.clear(),hh(!0)});W_(mr);ws();j_();X_();IR().then(()=>PR()).catch(Un);requestAnimationFrame(nv);window.__THREE_GAME_DIAGNOSTICS__=()=>({renderer:Pa.info.render,canvas:{css:ei.getBoundingClientRect().toJSON(),buffer:{width:ei.width,height:ei.height},dpr:window.devicePixelRatio},camera:{left:An.left,right:An.right,top:An.top,bottom:An.bottom,x:An.position.x,y:An.position.y},snapshot:ne,connected:!!Vt,mySessionId:Sn,localPaddle:nr,localPaddleTarget:ki,arcade:Pt});
