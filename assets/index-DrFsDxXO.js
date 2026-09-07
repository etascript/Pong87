(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function pf(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Xl={},hd={},pd;function C0(){return pd||(pd=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),hd}var na={},Qc=function(n,e){return Qc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Qc(n,e)};function Cp(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Qc(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xa=function(){return Xa=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Xa.apply(this,arguments)};function Pp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Ip(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Dp(n,e){return function(t,i){e(t,i,n)}}function Lp(n,e,t,i,r,s){function o(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",f=!e&&n?i.static?n:n.prototype:null,d=e||(f?Object.getOwnPropertyDescriptor(f,i.name):{}),u,p=!1,m=t.length-1;m>=0;m--){var x={};for(var y in i)x[y]=y==="access"?{}:i[y];for(var y in i.access)x.access[y]=i.access[y];x.addInitializer=function(g){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(g||null))};var v=(0,t[m])(a==="accessor"?{get:d.get,set:d.set}:d[c],x);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(u=o(v.get))&&(d.get=u),(u=o(v.set))&&(d.set=u),(u=o(v.init))&&r.unshift(u)}else(u=o(v))&&(a==="field"?r.unshift(u):d[c]=u)}f&&Object.defineProperty(f,i.name,d),p=!0}function Op(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function Up(n){return typeof n=="symbol"?n:"".concat(n)}function Np(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Fp(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Bp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(d){try{f(i.next(d))}catch(u){o(u)}}function c(d){try{f(i.throw(d))}catch(u){o(u)}}function f(d){d.done?s(d.value):r(d.value).then(a,c)}f((i=i.apply(n,e||[])).next())})}function kp(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(f){return function(d){return c([f,d])}}function c(f){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,f[0]&&(t=0)),t;)try{if(i=1,r&&(s=f[0]&2?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[f[0]&2,s.value]),f[0]){case 0:case 1:s=f;break;case 4:return t.label++,{value:f[1],done:!1};case 5:t.label++,r=f[1],f=[0];continue;case 7:f=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(f[0]===6||f[0]===2)){t=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){t.label=f[1];break}if(f[0]===6&&t.label<s[1]){t.label=s[1],s=f;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(f);break}s[2]&&t.ops.pop(),t.trys.pop();continue}f=e.call(n,t)}catch(d){f=[6,d],r=0}finally{i=s=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var pl=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function zp(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&pl(e,n,t)}function qa(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function mf(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function Vp(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(mf(arguments[e]));return n}function Hp(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function Gp(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Ls(n){return this instanceof Ls?(this.v=n,this):new Ls(n)}function Wp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(m){return function(x){return Promise.resolve(x).then(m,u)}}function a(m,x){i[m]&&(r[m]=function(y){return new Promise(function(v,g){s.push([m,y,v,g])>1||c(m,y)})},x&&(r[m]=x(r[m])))}function c(m,x){try{f(i[m](x))}catch(y){p(s[0][3],y)}}function f(m){m.value instanceof Ls?Promise.resolve(m.value.v).then(d,u):p(s[0][2],m)}function d(m){c("next",m)}function u(m){c("throw",m)}function p(m,x){m(x),s.shift(),s.length&&c(s[0][0],s[0][1])}}function $p(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:Ls(n[r](o)),done:!1}:s?s(o):o}:s}}function Xp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof qa=="function"?qa(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(f){s({value:f,done:a})},o)}}function qp(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var P0=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},eu=function(n){return eu=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},eu(n)};function jp(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=eu(n),i=0;i<t.length;i++)t[i]!=="default"&&pl(e,n,t[i]);return P0(e,n),e}function Yp(n){return n&&n.__esModule?n:{default:n}}function Kp(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function Jp(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function Zp(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function Qp(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var I0=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function em(n){function e(s){n.error=n.hasError?new I0(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function tm(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const D0={__extends:Cp,__assign:Xa,__rest:Pp,__decorate:Ip,__param:Dp,__esDecorate:Lp,__runInitializers:Op,__propKey:Up,__setFunctionName:Np,__metadata:Fp,__awaiter:Bp,__generator:kp,__createBinding:pl,__exportStar:zp,__values:qa,__read:mf,__spread:Vp,__spreadArrays:Hp,__spreadArray:Gp,__await:Ls,__asyncGenerator:Wp,__asyncDelegator:$p,__asyncValues:Xp,__makeTemplateObject:qp,__importStar:jp,__importDefault:Yp,__classPrivateFieldGet:Kp,__classPrivateFieldSet:Jp,__classPrivateFieldIn:Zp,__addDisposableResource:Qp,__disposeResources:em,__rewriteRelativeImportExtension:tm},L0=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Qp,get __assign(){return Xa},__asyncDelegator:$p,__asyncGenerator:Wp,__asyncValues:Xp,__await:Ls,__awaiter:Bp,__classPrivateFieldGet:Kp,__classPrivateFieldIn:Zp,__classPrivateFieldSet:Jp,__createBinding:pl,__decorate:Ip,__disposeResources:em,__esDecorate:Lp,__exportStar:zp,__extends:Cp,__generator:kp,__importDefault:Yp,__importStar:jp,__makeTemplateObject:qp,__metadata:Fp,__param:Dp,__propKey:Up,__read:mf,__rest:Pp,__rewriteRelativeImportExtension:tm,__runInitializers:Op,__setFunctionName:Np,__spread:Vp,__spreadArray:Gp,__spreadArrays:Hp,__values:qa,default:D0},Symbol.toStringTag,{value:"Module"})),ml=pf(L0);var ql={},md;function gl(){return md||(md=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(ql)),ql}var jl={},Yl={},Kl={},uo={exports:{}},O0=uo.exports,gd;function gf(){return gd||(gd=1,(function(n,e){(function(t,i){i(e)})(O0,(function(t){t.OPERATION=void 0,(function(b){b[b.ADD=128]="ADD",b[b.REPLACE=0]="REPLACE",b[b.DELETE=64]="DELETE",b[b.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",b[b.MOVE_AND_ADD=160]="MOVE_AND_ADD",b[b.DELETE_AND_ADD=192]="DELETE_AND_ADD",b[b.CLEAR=10]="CLEAR",b[b.REVERSE=15]="REVERSE",b[b.MOVE=32]="MOVE",b[b.DELETE_BY_REFID=33]="DELETE_BY_REFID",b[b.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??=Symbol.for("Symbol.metadata");const s="~track",o="~encoder",a="~decoder",c="~filter",f="~getByIndex",d="~deleteByIndex",u="~changes",p="~childType",m="~onEncodeEnd",x="~onDecodeEnd",y="~descriptors",v="~__numFields",g="~__refTypeFieldIndexes",I="~__viewFieldIndexes",R="$__fieldIndexesByViewTag";let T;try{T=new TextEncoder}catch{}const U=new ArrayBuffer(8),B=new Int32Array(U),k=new Float32Array(U),J=new Float64Array(U),P=new BigInt64Array(U),N=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(b,l){for(var h=0,_=0,E=0,O=b.length;E<O;E++)h=b.charCodeAt(E),h<128?_+=1:h<2048?_+=2:h<55296||h>=57344?_+=3:(E++,_+=4);return _};function ye(b,l,h){for(var _=0,E=0,O=l.length;E<O;E++)_=l.charCodeAt(E),_<128?b[h.offset++]=_:_<2048?(b[h.offset]=192|_>>6,b[h.offset+1]=128|_&63,h.offset+=2):_<55296||_>=57344?(b[h.offset]=224|_>>12,b[h.offset+1]=128|_>>6&63,b[h.offset+2]=128|_&63,h.offset+=3):(E++,_=65536+((_&1023)<<10|l.charCodeAt(E)&1023),b[h.offset]=240|_>>18,b[h.offset+1]=128|_>>12&63,b[h.offset+2]=128|_>>6&63,b[h.offset+3]=128|_&63,h.offset+=4)}function D(b,l,h){b[h.offset++]=l&255}function W(b,l,h){b[h.offset++]=l&255}function $(b,l,h){b[h.offset++]=l&255,b[h.offset++]=l>>8&255}function F(b,l,h){b[h.offset++]=l&255,b[h.offset++]=l>>8&255}function V(b,l,h){b[h.offset++]=l&255,b[h.offset++]=l>>8&255,b[h.offset++]=l>>16&255,b[h.offset++]=l>>24&255}function z(b,l,h){const _=l>>24,E=l>>16,O=l>>8,j=l;b[h.offset++]=j&255,b[h.offset++]=O&255,b[h.offset++]=E&255,b[h.offset++]=_&255}function Se(b,l,h){const _=Math.floor(l/Math.pow(2,32)),E=l>>>0;z(b,E,h),z(b,_,h)}function Ee(b,l,h){const _=l/Math.pow(2,32)>>0,E=l>>>0;z(b,E,h),z(b,_,h)}function Ce(b,l,h){P[0]=BigInt.asIntN(64,l),V(b,B[0],h),V(b,B[1],h)}function Ue(b,l,h){P[0]=BigInt.asIntN(64,l),V(b,B[0],h),V(b,B[1],h)}function ct(b,l,h){k[0]=l,V(b,B[0],h)}function ut(b,l,h){J[0]=l,V(b,B[0],h),V(b,B[1],h)}function ge(b,l,h){b[h.offset++]=l?1:0}function Ne(b,l,h){l||(l="");let _=N(l,"utf8"),E=0;if(_<32)b[h.offset++]=_|160,E=1;else if(_<256)b[h.offset++]=217,b[h.offset++]=_%255,E=2;else if(_<65536)b[h.offset++]=218,F(b,_,h),E=3;else if(_<4294967296)b[h.offset++]=219,z(b,_,h),E=5;else throw new Error("String too long");return ye(b,l,h),E+_}function Ie(b,l,h){if(isNaN(l))return Ie(b,0,h);if(isFinite(l)){if(l!==(l|0))return Math.abs(l)<=34028235e31&&(k[0]=l,Math.abs(Math.abs(k[0])-Math.abs(l))<1e-4)?(b[h.offset++]=202,ct(b,l,h),5):(b[h.offset++]=203,ut(b,l,h),9)}else return Ie(b,l>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,h);return l>=0?l<128?(b[h.offset++]=l&255,1):l<256?(b[h.offset++]=204,b[h.offset++]=l&255,2):l<65536?(b[h.offset++]=205,F(b,l,h),3):l<4294967296?(b[h.offset++]=206,z(b,l,h),5):(b[h.offset++]=207,Ee(b,l,h),9):l>=-32?(b[h.offset++]=224|l+32,1):l>=-128?(b[h.offset++]=208,D(b,l,h),2):l>=-32768?(b[h.offset++]=209,$(b,l,h),3):l>=-2147483648?(b[h.offset++]=210,V(b,l,h),5):(b[h.offset++]=211,Se(b,l,h),9)}const Qe={int8:D,uint8:W,int16:$,uint16:F,int32:V,uint32:z,int64:Se,uint64:Ee,bigint64:Ce,biguint64:Ue,float32:ct,float64:ut,boolean:ge,string:Ne,number:Ie,utf8Write:ye,utf8Length:N},nt=new ArrayBuffer(8),it=new Int32Array(nt),zt=new Float32Array(nt),L=new Float64Array(nt),M=new BigUint64Array(nt),ee=new BigInt64Array(nt);function re(b,l,h){h>b.length-l.offset&&(h=b.length-l.offset);for(var _="",E=0,O=l.offset,j=l.offset+h;O<j;O++){var me=b[O];if((me&128)===0){_+=String.fromCharCode(me);continue}if((me&224)===192){_+=String.fromCharCode((me&31)<<6|b[++O]&63);continue}if((me&240)===224){_+=String.fromCharCode((me&15)<<12|(b[++O]&63)<<6|(b[++O]&63)<<0);continue}if((me&248)===240){E=(me&7)<<18|(b[++O]&63)<<12|(b[++O]&63)<<6|(b[++O]&63)<<0,E>=65536?(E-=65536,_+=String.fromCharCode((E>>>10)+55296,(E&1023)+56320)):_+=String.fromCharCode(E);continue}console.error("decode.utf8Read(): Invalid byte "+me+" at offset "+O+". Skip to end of string: "+(l.offset+h));break}return l.offset+=h,_}function fe(b,l){return Z(b,l)<<24>>24}function Z(b,l){return b[l.offset++]}function Me(b,l){return se(b,l)<<16>>16}function se(b,l){return b[l.offset++]|b[l.offset++]<<8}function de(b,l){return b[l.offset++]|b[l.offset++]<<8|b[l.offset++]<<16|b[l.offset++]<<24}function _e(b,l){return de(b,l)>>>0}function He(b,l){return it[0]=de(b,l),zt[0]}function A(b,l){return it[0]=de(b,l),it[1]=de(b,l),L[0]}function S(b,l){const h=_e(b,l);return de(b,l)*Math.pow(2,32)+h}function H(b,l){const h=_e(b,l);return _e(b,l)*Math.pow(2,32)+h}function te(b,l){return it[0]=de(b,l),it[1]=de(b,l),ee[0]}function ve(b,l){return it[0]=de(b,l),it[1]=de(b,l),M[0]}function ne(b,l){return Z(b,l)>0}function Fe(b,l){const h=b[l.offset++];let _;return h<192?_=h&31:h===217?_=Z(b,l):h===218?_=se(b,l):h===219&&(_=_e(b,l)),re(b,l,_)}function be(b,l){const h=b[l.offset++];if(h<128)return h;if(h===202)return He(b,l);if(h===203)return A(b,l);if(h===204)return Z(b,l);if(h===205)return se(b,l);if(h===206)return _e(b,l);if(h===207)return H(b,l);if(h===208)return fe(b,l);if(h===209)return Me(b,l);if(h===210)return de(b,l);if(h===211)return S(b,l);if(h>223)return(255-h+1)*-1}function Je(b,l){const h=b[l.offset];return h<192&&h>160||h===217||h===218||h===219}const Oe={utf8Read:re,int8:fe,uint8:Z,int16:Me,uint16:se,int32:de,uint32:_e,float32:He,float64:A,int64:S,uint64:H,bigint64:te,biguint64:ve,boolean:ne,string:Fe,number:be,stringCheck:Je},Ae={},ze=new Map;function qe(b,l){l.constructor&&(ze.set(l.constructor,b),Ae[b]=l),l.encode&&(Qe[b]=l.encode),l.decode&&(Oe[b]=l.decode)}function Ke(b){return Ae[b]}function Be(b){for(const l in b)qe(l,b[l]);return l=>ke(l)}const li=class li{static register(l){const h=Object.getPrototypeOf(l);if(h!==Xe){let _=li.inheritedTypes.get(h);_||(_=new Set,li.inheritedTypes.set(h,_)),_.add(l)}}static cache(l){let h=li.cachedContexts.get(l);return h||(h=new li(l),li.cachedContexts.set(l,h)),h}constructor(l){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},l&&this.discoverTypes(l)}has(l){return this.schemas.has(l)}get(l){return this.types[l]}add(l,h=this.schemas.size){return this.schemas.has(l)?!1:(this.types[h]=l,l[Symbol.metadata]===void 0&&Re.initialize(l),this.schemas.set(l,h),!0)}getTypeId(l){return this.schemas.get(l)}discoverTypes(l,h,_,E){if(E&&this.registerFilteredByParent(l,h,_),!this.add(l))return;li.inheritedTypes.get(l)?.forEach(me=>{this.discoverTypes(me,h,_,E)});let O=l;for(;(O=Object.getPrototypeOf(O))&&O!==Xe&&O!==Function.prototype;)this.discoverTypes(O);const j=l[Symbol.metadata]??={};j[I]&&(this.hasFilters=!0);for(const me in j){const ie=me,ue=j[ie].type,he=j[ie].tag!==void 0;if(typeof ue!="string")if(typeof ue=="function")this.discoverTypes(ue,l,ie,E||he);else{const ce=Object.values(ue)[0];if(typeof ce=="string")continue;this.discoverTypes(ce,l,ie,E||he)}}}registerFilteredByParent(l,h,_){let O=`${this.schemas.get(l)??this.schemas.size}`;h&&(O+=`-${this.schemas.get(h)}`),O+=`-${_}`,this.parentFiltered[O]=!0}debug(){let l="";for(const h in this.parentFiltered){const _=h.split("-").map(Number),E=_.pop();l+=`
		`,l+=`${h}: ${_.reverse().map((O,j)=>{const me=this.types[O],ie=me[Symbol.metadata];let ue=me.name;return j===0&&(ue+=`[${ie[E].name}]`),`${ue}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${l}`}};li.inheritedTypes=new Map,li.cachedContexts=new Map;let rt=li;function G(b){if(Array.isArray(b))return{array:G(b[0])};if(typeof b.type<"u")return b.type;if(De(b))return Object.keys(b).every(l=>typeof b[l]=="string")?"string":"number";if(typeof b=="object"&&b!==null){const l=Object.keys(b).find(h=>Ae[h]!==void 0);if(l)return b[l]=G(b[l]),b}return b}function De(b){if(typeof b=="function"&&b[Symbol.metadata])return!1;const l=Object.keys(b),h=l.filter(_=>/\d+/.test(_));return!!(h.length>0&&h.length===l.length/2&&b[b[h[0]]]==h[0]||l.length>0&&l.every(_=>typeof b[_]=="string"&&b[_]===_))}const Re={addField(b,l,h,_,E){if(l>64)throw new Error(`Can't define field '${h}'.
Schema instances may only have up to 64 fields.`);b[l]=Object.assign(b[l]||{},{type:G(_),index:l,name:h}),Object.defineProperty(b,y,{value:b[y]||{},enumerable:!1,configurable:!0}),E?(b[y][h]=E,b[y][`_${h}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):b[y][h]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(b,v,{value:l,enumerable:!1,configurable:!0}),Object.defineProperty(b,h,{value:l,enumerable:!1,configurable:!0}),typeof b[l].type!="string"&&(b[g]===void 0&&Object.defineProperty(b,g,{value:[],enumerable:!1,configurable:!0}),b[g].push(l))},setTag(b,l,h){const _=b[l],E=b[_];E.tag=h,b[I]||(Object.defineProperty(b,I,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(b,R,{value:{},enumerable:!1,configurable:!0})),b[I].push(_),b[R][h]||(b[R][h]=[]),b[R][h].push(_)},setFields(b,l){const h=b.prototype.constructor;rt.register(h);const _=Object.getPrototypeOf(h),E=_&&_[Symbol.metadata],O=Re.initialize(h);h[s]||(h[s]=Xe[s]),h[o]||(h[o]=Xe[o]),h[a]||(h[a]=Xe[a]),h.prototype.toJSON||(h.prototype.toJSON=Xe.prototype.toJSON);let j=O[v]??(E&&E[v])??-1;j++;for(const me in l){const ie=G(l[me]),ue=typeof Object.keys(ie)[0]=="string"&&Ke(Object.keys(ie)[0]),he=ue?Object.values(ie)[0]:ie;Re.addField(O,j,me,ie,ot(`_${me}`,j,he,ue)),j++}return b},isDeprecated(b,l){return b[l].deprecated===!0},init(b){const l={};b[Symbol.metadata]=l,Object.defineProperty(l,v,{value:0,enumerable:!1,configurable:!0})},initialize(b){const l=Object.getPrototypeOf(b),h=l[Symbol.metadata];let _=b[Symbol.metadata]??Object.create(null);return l!==Xe&&_===h&&(_=Object.create(null),h&&(Object.setPrototypeOf(_,h),Object.defineProperty(_,v,{value:h[v],enumerable:!1,configurable:!0,writable:!0}),h[I]!==void 0&&(Object.defineProperty(_,I,{value:[...h[I]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,R,{value:{...h[R]},enumerable:!1,configurable:!0,writable:!0})),h[g]!==void 0&&Object.defineProperty(_,g,{value:[...h[g]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,y,{value:{...h[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(b,Symbol.metadata,{value:_,writable:!1,configurable:!0}),_},isValidInstance(b){return b.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(b.constructor[Symbol.metadata],v)},getFields(b){const l=b[Symbol.metadata],h={};for(let _=0;_<=l[v];_++)h[l[_].name]=l[_].type;return h},hasViewTagAtIndex(b,l){return b?.[I]?.includes(l)}};function je(b){return{indexes:{},operations:[],queueRootNode:b}}function we(){return{next:void 0,tail:void 0}}function xe(b,l){const h=b.indexes[l];h===void 0?b.indexes[l]=b.operations.push(l)-1:b.operations[h]=l}function tt(b,l){let h=b.indexes[l];h===void 0&&(h=Object.values(b.indexes).at(-1),l=Object.entries(b.indexes).find(([_,E])=>E===h)?.[0]),b.operations[h]=void 0,delete b.indexes[l]}class at{constructor(l){this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=l,this.metadata=l.constructor[Symbol.metadata],this.metadata?.[I]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(l){this.root=l;const h=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,h),h&&this.forEachChild((_,E)=>{_.root!==l?_.setRoot(l):l.add(_)})}setParent(l,h,_){if(this.addParent(l,_),!h)return;const E=h.add(this);h!==this.root&&(this.root=h,this.checkIsFiltered(l,_,E)),E&&this.forEachChild((O,j)=>{if(O.root===h){h.add(O),h.moveNextToParent(O);return}O.setParent(this.ref,h,j)})}forEachChild(l){if(this.ref[p]){if(typeof this.ref[p]!="string")for(const[h,_]of this.ref.entries())_&&l(_[u],this.indexes?.[h]??h)}else for(const h of this.metadata?.[g]??[]){const _=this.metadata[h],E=this.ref[_.name];E&&l(E[u],h)}}operation(l){this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-l),this.root?.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-l),this.root?.enqueueChangeTree(this,"changes"))}change(l,h=t.OPERATION.ADD){const _=this.isFiltered||this.metadata?.[l]?.tag!==void 0,E=_?this.filteredChanges:this.changes,O=this.indexedOperations[l];if(!O||O===t.OPERATION.DELETE){const j=O&&O===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:h;this.indexedOperations[l]=j}xe(E,l),_?(xe(this.allFilteredChanges,l),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(xe(this.allChanges,l),this.root?.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(l){const h=this.isFiltered?this.filteredChanges:this.changes,_={},E={};for(const O in this.indexedOperations)_[Number(O)+l]=this.indexedOperations[O],E[Number(O)+l]=h.indexes[O];this.indexedOperations=_,h.indexes=E,h.operations=h.operations.map(O=>O+l)}shiftAllChangeIndexes(l,h=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(l,h,this.allFilteredChanges),this._shiftAllChangeIndexes(l,h,this.allChanges)):this._shiftAllChangeIndexes(l,h,this.allChanges)}_shiftAllChangeIndexes(l,h=0,_){const E={};let O=0;for(const j in _.indexes)E[O++]=_.indexes[j];_.indexes=E;for(let j=0;j<_.operations.length;j++){const me=_.operations[j];me>h&&(_.operations[j]=me+l)}}indexedOperation(l,h,_=l){this.indexedOperations[l]=h,this.filteredChanges!==void 0?(xe(this.allFilteredChanges,_),xe(this.filteredChanges,l),this.root?.enqueueChangeTree(this,"filteredChanges")):(xe(this.allChanges,_),xe(this.changes,l),this.root?.enqueueChangeTree(this,"changes"))}getType(l){return this.ref[p]||this.metadata[l].type}getChange(l){return this.indexedOperations[l]}getValue(l,h=!1){return this.ref[f](l,h)}delete(l,h,_=l){if(l===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${l}'`)}catch(j){console.warn(j)}return}const E=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[l]=h??t.OPERATION.DELETE,xe(E,l),tt(this.allChanges,_);const O=this.getValue(l);return O&&O[u]&&this.root?.remove(O[u]),this.filteredChanges!==void 0?(tt(this.allFilteredChanges,_),this.root?.enqueueChangeTree(this,"filteredChanges")):this.root?.enqueueChangeTree(this,"changes"),O}endEncode(l){this.indexedOperations={},this[l]=je(),this.ref[m]?.(),this.isNew=!1}discard(l=!1){this.ref[m]?.(),this.indexedOperations={},this.changes=je(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=je(this.filteredChanges.queueRootNode)),l&&(this.allChanges=je(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=je(this.allFilteredChanges.queueRootNode)))}discardAll(){const l=Object.keys(this.indexedOperations);for(let h=0,_=l.length;h<_;h++){const E=this.getValue(Number(l[h]));E&&E[u]&&E[u].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(l,h,_){this.root.types.hasFilters&&(this._checkFilteredByParent(l,h),this.filteredChanges!==void 0&&(this.root?.enqueueChangeTree(this,"filteredChanges"),_&&this.root?.enqueueChangeTree(this,"allFilteredChanges"))),this.isFiltered||(this.root?.enqueueChangeTree(this,"changes"),_&&this.root?.enqueueChangeTree(this,"allChanges"))}_checkFilteredByParent(l,h){if(!l)return;const _=Re.isValidInstance(this.ref)?this.ref.constructor:this.ref[p];let E,O=!Re.isValidInstance(l);O?(E=l[u],l=E.parent,h=E.parentIndex):E=l[u];const j=l.constructor;let me=`${this.root.types.getTypeId(_)}`;j&&(me+=`-${this.root.types.schemas.get(j)}`),me+=`-${h}`;const ie=Re.hasViewTagAtIndex(j?.[Symbol.metadata],h);this.isFiltered=l[u].isFiltered||this.root.types.parentFiltered[me]||ie,this.isFiltered&&(this.isVisibilitySharedWithParent=E.isFiltered&&typeof _!="string"&&!ie&&O,this.filteredChanges||(this.filteredChanges=je(),this.allFilteredChanges=je()),this.changes.operations.length>0&&(this.changes.operations.forEach(ue=>xe(this.filteredChanges,ue)),this.allChanges.operations.forEach(ue=>xe(this.allFilteredChanges,ue)),this.changes=je(),this.allChanges=je()))}get parent(){return this.parentChain?.ref}get parentIndex(){return this.parentChain?.index}addParent(l,h){if(this.hasParent((_,E)=>_[u]===l[u])){this.parentChain.index=h;return}this.parentChain={ref:l,index:h,next:this.parentChain}}removeParent(l=this.parent){let h=this.parentChain,_=null;for(;h;){if(h.ref[u]===l[u])return _?_.next=h.next:this.parentChain=h.next,!0;_=h,h=h.next}return this.parentChain===void 0}findParent(l){let h=this.parentChain;for(;h;){if(l(h.ref,h.index))return h;h=h.next}}hasParent(l){return this.findParent(l)!==void 0}getAllParents(){const l=[];let h=this.parentChain;for(;h;)l.push({ref:h.ref,index:h.index}),h=h.next;return l}}function bt(b,l,h,_,E,O){typeof h=="string"?Qe[h]?.(l,_,O):h[Symbol.metadata]!==void 0?(Qe.number(l,_[u].refId,O),(E&t.OPERATION.ADD)===t.OPERATION.ADD&&b.tryEncodeTypeId(l,h,_.constructor,O)):Qe.number(l,_[u].refId,O)}const yt=function(b,l,h,_,E,O,j,me,ie){if(l[O.offset++]=(_|E)&255,E===t.OPERATION.DELETE)return;const ue=h.ref,he=ie[_];bt(b,l,ie[_].type,ue[he.name],E,O)},An=function(b,l,h,_,E,O){if(l[O.offset++]=E&255,Qe.number(l,_,O),E===t.OPERATION.DELETE)return;const j=h.ref;if((E&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof j.set=="function"){const ue=h.ref.$indexes.get(_);Qe.string(l,ue,O)}const me=j[p],ie=j[f](_);bt(b,l,me,ie,E,O)},In=function(b,l,h,_,E,O,j,me){const ie=h.ref,ue=me&&h.isFiltered&&typeof h.getType(_)!="string";let he;if(ue){const Ve=ie.tmpItems[_];if(!Ve)return;he=Ve[u].refId,E===t.OPERATION.DELETE?E=t.OPERATION.DELETE_BY_REFID:E===t.OPERATION.ADD&&(E=t.OPERATION.ADD_BY_REFID)}else he=_;if(l[O.offset++]=E&255,Qe.number(l,he,O),E===t.OPERATION.DELETE||E===t.OPERATION.DELETE_BY_REFID)return;const ce=h.getType(_),Ye=h.getValue(_,j);bt(b,l,ce,Ye,E,O)},Js=-1;function Wn(b,l,h,_,E,O,j,me){const ie=b.root,ue=h[f](_);let he;if((l&t.OPERATION.DELETE)===t.OPERATION.DELETE){const ce=ie.refIds.get(ue);ce!==void 0&&ie.removeRef(ce),l!==t.OPERATION.DELETE_AND_ADD&&h[d](_),he=void 0}if(l!==t.OPERATION.DELETE)if(Xe.is(E)){const ce=Oe.number(O,j);if(he=ie.refs.get(ce),(l&t.OPERATION.ADD)===t.OPERATION.ADD){const Ye=b.getInstanceType(O,j,E);he||(he=b.createInstanceOfType(Ye)),ie.addRef(ce,he,he!==ue||l===t.OPERATION.DELETE_AND_ADD&&he===ue)}}else if(typeof E=="string")he=Oe[E](O,j);else{const ce=Ke(Object.keys(E)[0]),Ye=Oe.number(O,j),Ve=ie.refs.has(Ye)?ue||ie.refs.get(Ye):new ce.constructor;if(he=Ve.clone(!0),he[p]=Object.values(E)[0],ue){let Le=ie.refIds.get(ue);if(Le!==void 0&&Ye!==Le){const Pe=ue.entries();let Ze;for(;(Ze=Pe.next())&&!Ze.done;){const[Wt,$t]=Ze.value;typeof $t=="object"&&(Le=ie.refIds.get($t),ie.removeRef(Le)),me.push({ref:ue,refId:Le,op:t.OPERATION.DELETE,field:Wt,value:void 0,previousValue:$t})}}}ie.addRef(Ye,he,Ve!==ue||l===t.OPERATION.DELETE_AND_ADD&&Ve===ue)}return{value:he,previousValue:ue}}const ns=function(b,l,h,_,E){const O=l[h.offset++],j=_.constructor[Symbol.metadata],me=O>>6<<6,ie=O%(me||255),ue=j[ie];if(ue===void 0)return console.warn("@colyseus/schema: field not defined at",{index:ie,ref:_.constructor.name,metadata:j}),Js;const{value:he,previousValue:ce}=Wn(b,me,_,ie,ue.type,l,h,E);he!=null&&(_[ue.name]=he),ce!==he&&E.push({ref:_,refId:b.currentRefId,op:me,field:ue.name,value:he,previousValue:ce})},br=function(b,l,h,_,E){const O=l[h.offset++];if(O===t.OPERATION.CLEAR){b.removeChildRefs(_,E),_.clear();return}const j=Oe.number(l,h),me=_[p];let ie;(O&t.OPERATION.ADD)===t.OPERATION.ADD?typeof _.set=="function"?(ie=Oe.string(l,h),_.setIndex(j,ie)):ie=j:ie=_.getIndex(j);const{value:ue,previousValue:he}=Wn(b,O,_,j,me,l,h,E);if(ue!=null){if(typeof _.set=="function")_.$items.set(ie,ue);else if(typeof _.$setAt=="function")_.$setAt(j,ue,O);else if(typeof _.add=="function"){const ce=_.add(ue);typeof ce=="number"&&_.setIndex(ce,ce)}}he!==ue&&E.push({ref:_,refId:b.currentRefId,op:O,field:"",dynamicIndex:ie,value:ue,previousValue:he})},Yo=function(b,l,h,_,E){let O=l[h.offset++],j;if(O===t.OPERATION.CLEAR){b.removeChildRefs(_,E),_.clear();return}else if(O===t.OPERATION.REVERSE){_.reverse();return}else if(O===t.OPERATION.DELETE_BY_REFID){const ce=Oe.number(l,h),Ye=b.root.refs.get(ce);j=_.findIndex(Ve=>Ve===Ye),_[d](j),E.push({ref:_,refId:b.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:j,value:void 0,previousValue:Ye});return}else if(O===t.OPERATION.ADD_BY_REFID){const ce=Oe.number(l,h),Ye=b.root.refs.get(ce);Ye&&(j=_.findIndex(Ve=>Ve===Ye)),(j===-1||j===void 0)&&(j=_.length)}else j=Oe.number(l,h);const me=_[p];let ie=j;const{value:ue,previousValue:he}=Wn(b,O,_,j,me,l,h,E);ue!=null&&ue!==he&&_.$setAt(j,ue,O),he!==ue&&E.push({ref:_,refId:b.currentRefId,op:O,field:"",dynamicIndex:ie,value:ue,previousValue:he})};class Tr extends Error{}function Ko(b,l,h,_){let E,O=!1;switch(l){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":E="number",isNaN(b)&&console.log(`trying to encode "NaN" in ${h.constructor.name}#${_}`);break;case"bigint64":case"biguint64":E="bigint";break;case"string":E="string",O=!0;break;case"boolean":return;default:return}if(typeof b!==E&&(!O||O&&b!==null)){let j=`'${JSON.stringify(b)}'${b&&b.constructor&&` (${b.constructor.name})`||""}`;throw new Tr(`a '${E}' was expected, but ${j} was provided in ${h.constructor.name}#${_}`)}}function bi(b,l,h,_){if(!(b instanceof l))throw new Tr(`a '${l.name}' was expected, but '${b&&b.constructor.name}' was provided in ${h.constructor.name}#${_}`)}var Zs,Qs;const $l=(b,l)=>{const h=b.toString(),_=l.toString();return h<_?-1:h>_?1:0},Xn=class Xn{static[(Zs=o,Qs=a,c)](l,h,_){return!_||typeof l[p]=="string"||_.isChangeTreeVisible(l.tmpItems[h]?.[u])}static is(l){return Array.isArray(l)||l.array!==void 0}static from(l){return new Xn(...Array.from(l))}constructor(...l){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const h=new Proxy(this,{get:(_,E)=>typeof E!="symbol"&&!isNaN(E)?this.items[E]:Reflect.get(_,E),set:(_,E,O)=>{if(typeof E!="symbol"&&!isNaN(E)){if(O==null)_.$deleteAt(E);else{if(O[u]){bi(O,_[p],_,E);const j=_.items[E];_.isMovingItems?(j!==void 0?O[u].isNew?_[u].indexedOperation(Number(E),t.OPERATION.MOVE_AND_ADD):(_[u].getChange(Number(E))&t.OPERATION.DELETE)===t.OPERATION.DELETE?_[u].indexedOperation(Number(E),t.OPERATION.DELETE_AND_MOVE):_[u].indexedOperation(Number(E),t.OPERATION.MOVE):O[u].isNew&&_[u].indexedOperation(Number(E),t.OPERATION.ADD),O[u].setParent(this,_[u].root,E)):_.$changeAt(Number(E),O),j!==void 0&&j[u].root?.remove(j[u])}else _.$changeAt(Number(E),O);_.items[E]=O,_.tmpItems[E]=O}return!0}else return Reflect.set(_,E,O)},deleteProperty:(_,E)=>(typeof E=="number"?_.$deleteAt(E):delete _[E],!0),has:(_,E)=>typeof E!="symbol"&&!isNaN(Number(E))?Reflect.has(this.items,E):Reflect.has(_,E)});return Object.defineProperty(this,u,{value:new at(h),enumerable:!1,writable:!0}),l.length>0&&this.push(...l),h}set length(l){l===0?this.clear():l<this.items.length?this.splice(l,this.length-l):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...l){let h=this.tmpItems.length;const _=this[u];for(let E=0,O=l.length;E<O;E++,h++){const j=l[E];if(j==null)return;typeof j=="object"&&this[p]&&bi(j,this[p],this,E),_.indexedOperation(h,t.OPERATION.ADD,this.items.length),this.items.push(j),this.tmpItems.push(j),j[u]?.setParent(this,_.root,h)}return h}pop(){let l=-1;for(let h=this.tmpItems.length-1;h>=0;h--)if(this.deletedIndexes[h]!==!0){l=h;break}if(!(l<0))return this[u].delete(l,void 0,this.items.length-1),this.deletedIndexes[l]=!0,this.items.pop()}at(l){return l<0&&(l+=this.length),this.items[l]}$changeAt(l,h){if(h==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[l]===h)return;const _=this.items[l]!==void 0?typeof h=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,E=this[u];E.change(l,_),h[u]?.setParent(this,E.root,l)}$deleteAt(l,h){this[u].delete(l,h)}$setAt(l,h,_){l===0&&_===t.OPERATION.ADD&&this.items[l]!==void 0?this.items.unshift(h):_===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(l,1),this.items[l]=h):this.items[l]=h}clear(){if(this.items.length===0)return;const l=this[u];l.forEachChild((h,_)=>{l.root?.remove(h)}),l.discard(!0),l.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...l){return new Xn(...this.items.concat(...l))}join(l){return this.items.join(l)}reverse(){return this[u].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const l=this[u],h=this.tmpItems.findIndex(E=>E===this.items[0]),_=this.items.findIndex(E=>E===this.items[0]);return l.delete(h,t.OPERATION.DELETE,_),l.shiftAllChangeIndexes(-1,_),this.deletedIndexes[h]=!0,this.items.shift()}slice(l,h){const _=new Xn;return _.push(...this.items.slice(l,h)),_}sort(l=$l){this.isMovingItems=!0;const h=this[u];return this.items.sort(l).forEach((E,O)=>h.change(O,t.OPERATION.REPLACE)),this.tmpItems.sort(l),this.isMovingItems=!1,this}splice(l,h,..._){const E=this[u],O=this.items.length,j=this.tmpItems.length,me=_.length,ie=[];for(let ue=0;ue<j;ue++)this.deletedIndexes[ue]!==!0&&ie.push(ue);if(O>l){h===void 0&&(h=O-l);for(let ue=l;ue<l+h;ue++){const he=ie[ue];E.delete(he,t.OPERATION.DELETE),this.deletedIndexes[he]=!0}}else h=0;if(me>0){if(me>h)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let ue=0;ue<me;ue++){const he=(ie[l]??O)+ue;E.indexedOperation(he,this.deletedIndexes[he]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),_[ue][u]?.setParent(this,E.root,he)}}return h>me&&E.shiftAllChangeIndexes(-(h-me),ie[l+me]),E.filteredChanges!==void 0?E.root?.enqueueChangeTree(E,"filteredChanges"):E.root?.enqueueChangeTree(E,"changes"),this.items.splice(l,h,..._)}unshift(...l){const h=this[u];return h.shiftChangeIndexes(l.length),h.isFiltered?xe(h.filteredChanges,this.items.length):xe(h.allChanges,this.items.length),l.forEach((_,E)=>{h.change(E,t.OPERATION.ADD)}),this.tmpItems.unshift(...l),this.items.unshift(...l)}indexOf(l,h){return this.items.indexOf(l,h)}lastIndexOf(l,h=this.length-1){return this.items.lastIndexOf(l,h)}every(l,h){return this.items.every(l,h)}some(l,h){return this.items.some(l,h)}forEach(l,h){return this.items.forEach(l,h)}map(l,h){return this.items.map(l,h)}filter(l,h){return this.items.filter(l,h)}reduce(l,h){return this.items.reduce(l,h)}reduceRight(l,h){return this.items.reduceRight(l,h)}find(l,h){return this.items.find(l,h)}findIndex(l,h){return this.items.findIndex(l,h)}fill(l,h,_){throw new Error("ArraySchema#fill() not implemented")}copyWithin(l,h,_){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return Xn}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(l,h){return this.items.includes(l,h)}flatMap(l,h){throw new Error("ArraySchema#flatMap() is not supported.")}flat(l){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...l){return this.items.findLastIndex.apply(this.items,arguments)}with(l,h){const _=this.items.slice();return l<0&&(l+=this.length),_[l]=h,new Xn(..._)}toReversed(){return this.items.slice().reverse()}toSorted(l){return this.items.slice().sort(l)}toSpliced(l,h,..._){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(l=>{let h=this.items.length;for(;h!=0;){let _=Math.floor(Math.random()*h);h--,[this[h],this[_]]=[this[_],this[h]]}})}move(l){return this.isMovingItems=!0,l(this),this.isMovingItems=!1,this}[f](l,h=!1){return h?this.items[l]:this.deletedIndexes[l]?this.items[l]:this.tmpItems[l]||this.items[l]}[d](l){this.items[l]=void 0,this.tmpItems[l]=void 0}[m](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[x](){this.items=this.items.filter(l=>l!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(l=>typeof l.toJSON=="function"?l.toJSON():l)}clone(l){let h;return l?(h=new Xn,h.push(...this.items)):h=new Xn(...this.map(_=>_[u]?_.clone():_)),h}};Xn[Zs]=In,Xn[Qs]=Yo;let Dn=Xn;qe("array",{constructor:Dn});var Jo,Zo;const Qi=class Qi{static[(Jo=o,Zo=a,c)](l,h,_){return!_||typeof l[p]=="string"||_.isChangeTreeVisible((l[f](h)??l.deletedItems[h])[u])}static is(l){return l.map!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const h=new at(this);if(h.indexes={},Object.defineProperty(this,u,{value:h,enumerable:!1,writable:!0}),l)if(l instanceof Map||l instanceof Qi)l.forEach((_,E)=>this.set(E,_));else for(const _ in l)this.set(_,l[_]);Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Qi}set(l,h){if(h==null)throw new Error(`MapSchema#set('${l}', ${h}): trying to set ${h} value on '${l}'.`);typeof h=="object"&&this[p]&&bi(h,this[p],this,l),l=l.toString();const _=this[u],E=h[u]!==void 0;let O,j;if(typeof _.indexes[l]<"u"){O=_.indexes[l],j=t.OPERATION.REPLACE;const me=this.$items.get(l);if(me===h)return;E&&(j=t.OPERATION.DELETE_AND_ADD,me!==void 0&&me[u].root?.remove(me[u])),this.deletedItems[O]&&delete this.deletedItems[O]}else O=_.indexes[v]??0,j=t.OPERATION.ADD,this.$indexes.set(O,l),_.indexes[l]=O,_.indexes[v]=O+1;return this.$items.set(l,h),_.change(O,j),E&&h[u].setParent(this,_.root,O),this}get(l){return this.$items.get(l)}delete(l){if(!this.$items.has(l))return!1;const h=this[u].indexes[l];return this.deletedItems[h]=this[u].delete(h),this.$items.delete(l)}clear(){const l=this[u];l.discard(!0),l.indexes={},l.forEachChild((h,_)=>{l.root?.remove(h)}),this.$indexes.clear(),this.$items.clear(),l.operation(t.OPERATION.CLEAR)}has(l){return this.$items.has(l)}forEach(l){this.$items.forEach(l)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(l,h){this.$indexes.set(l,h)}getIndex(l){return this.$indexes.get(l)}[f](l){return this.$items.get(this.$indexes.get(l))}[d](l){const h=this.$indexes.get(l);this.$items.delete(h),this.$indexes.delete(l)}[m](){const l=this[u];for(const h in this.deletedItems){const _=parseInt(h),E=this.$indexes.get(_);delete l.indexes[E],this.$indexes.delete(_)}this.deletedItems={}}toJSON(){const l={};return this.forEach((h,_)=>{l[_]=typeof h.toJSON=="function"?h.toJSON():h}),l}clone(l){let h;return l?h=Object.assign(new Qi,this):(h=new Qi,this.forEach((_,E)=>{_[u]?h.set(E,_.clone()):h.set(E,_)})),h}};Qi[Jo]=An,Qi[Zo]=br;let $n=Qi;qe("map",{constructor:$n});var Qo,w;const is=class is{static[(Qo=o,w=a,c)](l,h,_){return!_||typeof l[p]=="string"||_.isChangeTreeVisible((l[f](h)??l.deletedItems[h])[u])}static is(l){return l.collection!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[u]=new at(this),this[u].indexes={},l&&l.forEach(h=>this.add(h)),Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(l){const h=this.$refId++;return l[u]!==void 0&&l[u].setParent(this,this[u].root,h),this[u].indexes[h]=h,this.$indexes.set(h,h),this.$items.set(h,l),this[u].change(h),h}at(l){const h=Array.from(this.$items.keys())[l];return this.$items.get(h)}entries(){return this.$items.entries()}delete(l){const h=this.$items.entries();let _,E;for(;(E=h.next())&&!E.done;)if(l===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[u].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const l=this[u];l.discard(!0),l.indexes={},l.forEachChild((h,_)=>{l.root?.remove(h)}),this.$indexes.clear(),this.$items.clear(),l.operation(t.OPERATION.CLEAR)}has(l){return Array.from(this.$items.values()).some(h=>h===l)}forEach(l){this.$items.forEach((h,_,E)=>l(h,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(l,h){this.$indexes.set(l,h)}getIndex(l){return this.$indexes.get(l)}[f](l){return this.$items.get(this.$indexes.get(l))}[d](l){const h=this.$indexes.get(l);this.$items.delete(h),this.$indexes.delete(l)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const l=[];return this.forEach((h,_)=>{l.push(typeof h.toJSON=="function"?h.toJSON():h)}),l}clone(l){let h;return l?h=Object.assign(new is,this):(h=new is,this.forEach(_=>{_[u]?h.add(_.clone()):h.add(_)})),h}};is[Qo]=An,is[w]=br;let X=is;qe("collection",{constructor:X});var oe,ae;const rs=class rs{static[(oe=o,ae=a,c)](l,h,_){return!_||typeof l[p]=="string"||_.visible.has((l[f](h)??l.deletedItems[h])[u])}static is(l){return l.set!==void 0}constructor(l){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[u]=new at(this),this[u].indexes={},l&&l.forEach(h=>this.add(h)),Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(l){if(this.has(l))return!1;const h=this.$refId++;l[u]!==void 0&&l[u].setParent(this,this[u].root,h);const _=this[u].indexes[h]?.op??t.OPERATION.ADD;return this[u].indexes[h]=h,this.$indexes.set(h,h),this.$items.set(h,l),this[u].change(h,_),h}entries(){return this.$items.entries()}delete(l){const h=this.$items.entries();let _,E;for(;(E=h.next())&&!E.done;)if(l===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[u].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const l=this[u];l.discard(!0),l.indexes={},this.$indexes.clear(),this.$items.clear(),l.operation(t.OPERATION.CLEAR)}has(l){const h=this.$items.values();let _=!1,E;for(;(E=h.next())&&!E.done;)if(l===E.value){_=!0;break}return _}forEach(l){this.$items.forEach((h,_,E)=>l(h,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(l,h){this.$indexes.set(l,h)}getIndex(l){return this.$indexes.get(l)}[f](l){return this.$items.get(this.$indexes.get(l))}[d](l){const h=this.$indexes.get(l);this.$items.delete(h),this.$indexes.delete(l)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const l=[];return this.forEach((h,_)=>{l.push(typeof h.toJSON=="function"?h.toJSON():h)}),l}clone(l){let h;return l?h=Object.assign(new rs,this):(h=new rs,this.forEach(_=>{_[u]?h.add(_.clone()):h.add(_)})),h}};rs[oe]=An,rs[ae]=br;let Y=rs;qe("set",{constructor:Y});const Te=-1;function $e(b){return rt.register(b),b}function et(b=Te){return function(l,h){const _=l.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null));Re.setTag(j,h,b)}}function ke(b,l){return function(h,_){const E=h.constructor;if(!b)throw new Error(`${E.name}: @type() reference provided for "${_}" is undefined. Make sure you don't have any circular dependencies.`);b=G(b),rt.register(E);const j=Object.getPrototypeOf(E)[Symbol.metadata],me=Re.initialize(E);let ie=me[_];if(me[ie]!==void 0){if(me[ie].deprecated)return;if(me[ie].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${_}' definition on '${E.name}'.
Check @type() annotation`)}catch(ue){const he=ue.stack.split(`
`)[4].trim();throw new Error(`${ue.message} ${he}`)}}else ie=me[v]??(j&&j[v])??-1,ie++;if(l&&l.manual)Re.addField(me,ie,_,b,{enumerable:!0,configurable:!0,writable:!0});else{const ue=typeof Object.keys(b)[0]=="string"&&Ke(Object.keys(b)[0]),he=ue?Object.values(b)[0]:b;Re.addField(me,ie,_,b,ot(`_${_}`,ie,he,ue))}}}function ot(b,l,h,_){return{get:function(){return this[b]},set:function(E){const O=this[b]??void 0;if(E!==O){if(E!=null){_?(_.constructor===Dn&&!(E instanceof Dn)&&(E=new Dn(...E)),_.constructor===$n&&!(E instanceof $n)&&(E=new $n(E)),E[p]=h):typeof h!="string"?bi(E,h,this,b.substring(1)):Ko(E,h,this,b.substring(1));const j=this[u];O!==void 0&&O[u]?(j.root?.remove(O[u]),this.constructor[s](j,l,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](j,l,t.OPERATION.ADD),E[u]?.setParent(this,j.root,l)}else O!==void 0&&this[u].delete(l);this[b]=E}},enumerable:!0,configurable:!0}}function lt(b=!0){return function(l,h){const _=l.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null)),me=j[h];j[me].deprecated=!0,b&&(j[y]??={},j[y][h]={get:function(){throw new Error(`${h} is deprecated.`)},set:function(ie){},enumerable:!1,configurable:!0}),Object.defineProperty(j,me,{value:j[me],enumerable:!1,configurable:!0})}}function st(b,l,h){for(let _ in l)ke(l[_],h)(b.prototype,_);return b}function mt(b,l,h=Xe){const _={},E={},O={},j={};for(let he in b){const ce=b[he];typeof ce=="object"?(ce.view!==void 0&&(j[he]=typeof ce.view=="boolean"?Te:ce.view),_[he]=G(ce),Object.prototype.hasOwnProperty.call(ce,"default")?O[he]=ce.default:Array.isArray(ce)||ce.array!==void 0?O[he]=new Dn:ce.map!==void 0?O[he]=new $n:ce.collection!==void 0?O[he]=new X:ce.set!==void 0?O[he]=new Y:ce.type!==void 0&&Xe.is(ce.type)&&(!ce.type.prototype.initialize||ce.type.prototype.initialize.length===0)&&(O[he]=new ce.type)):typeof ce=="function"?Xe.is(ce)?((!ce.prototype.initialize||ce.prototype.initialize.length===0)&&(O[he]=new ce),_[he]=G(ce)):E[he]=ce:_[he]=G(ce)}const me=()=>{const he={};for(const ce in O){const Ye=O[ce];Ye&&typeof Ye.clone=="function"?he[ce]=Ye.clone():he[ce]=Ye}return he},ie=he=>{const ce=Object.keys(_),Ye={};for(const Ve in he)ce.includes(Ve)||(Ye[Ve]=he[Ve]);return Ye},ue=Re.setFields(class extends h{constructor(...he){E.initialize&&typeof E.initialize=="function"?(super(Object.assign({},me(),ie(he[0]||{}))),new.target===ue&&E.initialize.apply(this,he)):super(Object.assign({},me(),he[0]||{}))}},_);ue._getDefaultValues=me,Object.assign(ue.prototype,E);for(let he in j)et(j[he])(ue.prototype,he);return l&&Object.defineProperty(ue,"name",{value:l}),ue.extends=(he,ce)=>mt(he,ce,ue),ue}function St(b){return new Array(b).fill(0).map((l,h)=>h===b-1?"└─ ":"   ").join("")}function Vt(b){const l=b[u].root,h={ops:{},refs:[]};let _=l.changes.next;for(;_;){const E=_.changeTree;if(E===void 0){_=_.next;continue}const O=E.indexedOperations;h.refs.push(`refId#${E.refId}`);for(const j in O){const me=O[j],ie=t.OPERATION[me];h.ops[ie]||(h.ops[ie]=0),h.ops[t.OPERATION[me]]++}_=_.next}return h}var Ct,Tt;const ss=class ss{static initialize(l){Object.defineProperty(l,u,{value:new at(l),enumerable:!1,writable:!0}),Object.defineProperties(l,l.constructor[Symbol.metadata]?.[y]||{})}static is(l){return typeof l[Symbol.metadata]=="object"}static[(Ct=o,Tt=a,s)](l,h,_=t.OPERATION.ADD){l.change(h,_)}static[c](l,h,_){const O=l.constructor[Symbol.metadata][h]?.tag;if(_===void 0)return O===void 0;if(O===void 0)return!0;if(O===Te)return _.isChangeTreeVisible(l[u]);{const j=_.tags?.get(l[u]);return j&&j.has(O)}}constructor(l){ss.initialize(this),l&&Object.assign(this,l)}assign(l){return Object.assign(this,l),this}setDirty(l,h){const _=this.constructor[Symbol.metadata];this[u].change(_[_[l]].index,h)}clone(){const l=Object.create(this.constructor.prototype);ss.initialize(l);const h=this.constructor[Symbol.metadata];for(const _ in h){const E=h[_].name;typeof this[E]=="object"&&typeof this[E]?.clone=="function"?l[E]=this[E].clone():l[E]=this[E]}return l}toJSON(){const l={},h=this.constructor[Symbol.metadata];for(const _ in h){const E=h[_],O=E.name;!E.deprecated&&this[O]!==null&&typeof this[O]<"u"&&(l[O]=typeof this[O].toJSON=="function"?this[O].toJSON():this[O])}return l}discardAllChanges(){this[u].discardAll()}[f](l){const h=this.constructor[Symbol.metadata];return this[h[l].name]}[d](l){const h=this.constructor[Symbol.metadata];this[h[l].name]=void 0}static debugRefIds(l,h=!1,_=0,E,O=""){const j=h?` - ${JSON.stringify(l.toJSON())}`:"",me=l[u],ie=E?E.root.refIds.get(l):me.refId,ue=E?E.root:me.root,he=ue?.refCount?.[ie]>1?` [×${ue.refCount[ie]}]`:"";let ce=`${St(_)}${O}${l.constructor.name} (refId: ${ie})${he}${j}
`;return me.forEachChild((Ye,Ve)=>{let Le=Ve;typeof Ve=="number"&&l.$indexes&&(Le=l.$indexes.get(Ve)??Ve);const Pe=l.forEach!==void 0&&Le!==void 0?`["${Le}"]: `:"";ce+=this.debugRefIds(Ye.ref,h,_+1,E,Pe)}),ce}static debugRefIdEncodingOrder(l,h="allChanges"){let _=[],E=l[u].root[h].next;for(;E;)E.changeTree&&_.push(E.changeTree.refId),E=E.next;return _}static debugRefIdsFromDecoder(l){return this.debugRefIds(l.state,!1,0,l)}static debugChanges(l,h=!1){const _=l[u],E=h?_.allChanges:_.changes,O=h?"allChanges":"changes";let j=`${l.constructor.name} (${_.refId}) -> .${O}:
`;function me(ie){ie.operations.filter(ue=>ue).forEach(ue=>{const he=_.indexedOperations[ue];j+=`- [${ue}]: ${t.OPERATION[he]} (${JSON.stringify(_.getValue(Number(ue),h))})
`})}return me(E),!h&&_.filteredChanges&&_.filteredChanges.operations.filter(ie=>ie).length>0&&(j+=`${l.constructor.name} (${_.refId}) -> .filteredChanges:
`,me(_.filteredChanges)),h&&_.allFilteredChanges&&_.allFilteredChanges.operations.filter(ie=>ie).length>0&&(j+=`${l.constructor.name} (${_.refId}) -> .allFilteredChanges:
`,me(_.allFilteredChanges)),j}static debugChangesDeep(l,h="changes"){let _="";const E=l[u],O=E.root,j=new Map,me=[];let ie=0;for(const[he,ce]of Object.entries(O[h])){const Ye=O.changeTrees[he];if(!Ye)continue;let Ve=!1,Le=[],Pe=Ye.parent?.[u];if(Ye===E)Ve=!0;else for(;Pe!==void 0;){if(Le.push(Pe),Pe.ref===l){Ve=!0;break}Pe=Pe.parent?.[u]}Ve&&(me.push(Ye.refId),ie+=Object.keys(ce).length,j.set(Ye,Le.reverse()))}_+=`---
`,_+=`root refId: ${E.refId}
`,_+=`Total instances: ${me.length} (refIds: ${me.join(", ")})
`,_+=`Total changes: ${ie}
`,_+=`---
`;const ue=new WeakSet;for(const[he,ce]of j.entries()){ce.forEach((Ze,Wt)=>{ue.has(Ze)||(_+=`${St(Wt)}${Ze.ref.constructor.name} (refId: ${Ze.refId})
`,ue.add(Ze))});const Ye=he.indexedOperations,Ve=ce.length,Le=St(Ve),Pe=Ve>0?`(${he.parentIndex}) `:"";_+=`${Le}${Pe}${he.ref.constructor.name} (refId: ${he.refId}) - changes: ${Object.keys(Ye).length}
`;for(const Ze in Ye){const Wt=Ye[Ze];_+=`${St(Ve+1)}${t.OPERATION[Wt]}: ${Ze}
`}}return`${_}`}};ss[Ct]=yt,ss[Tt]=ns;let Xe=ss;function Et(b,l,h,_){var E=arguments.length,O=E<3?l:_,j;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")O=Reflect.decorate(b,l,h,_);else for(var me=b.length-1;me>=0;me--)(j=b[me])&&(O=(E<3?j(O):E>3?j(l,h,O):j(l,h))||O);return E>3&&O&&Object.defineProperty(l,h,O),O}typeof SuppressedError=="function"&&SuppressedError;class xt{constructor(l){this.types=l,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=we(),this.allFilteredChanges=we(),this.changes=we(),this.filteredChanges=we()}getNextUniqueId(){return this.nextUniqueId++}add(l){l.refId===void 0&&(l.refId=this.getNextUniqueId());const h=this.changeTrees[l.refId]===void 0;h&&(this.changeTrees[l.refId]=l);const _=this.refCount[l.refId];if(_===0){const E=l.allChanges.operations;let O=E.length;for(;O--;)l.indexedOperations[E[O]]=t.OPERATION.ADD,xe(l.changes,O)}return this.refCount[l.refId]=(_||0)+1,h}remove(l){const h=this.refCount[l.refId]-1;return h<=0?(l.root=void 0,delete this.changeTrees[l.refId],this.removeChangeFromChangeSet("allChanges",l),this.removeChangeFromChangeSet("changes",l),l.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",l),this.removeChangeFromChangeSet("filteredChanges",l)),this.refCount[l.refId]=0,l.forEachChild((_,E)=>{_.removeParent(l.ref)&&(_.parentChain===void 0||_.parentChain&&this.refCount[_.refId]>0?this.remove(_):_.parentChain&&this.moveNextToParent(_))})):(this.refCount[l.refId]=h,this.recursivelyMoveNextToParent(l)),h}recursivelyMoveNextToParent(l){this.moveNextToParent(l),l.forEachChild((h,_)=>this.recursivelyMoveNextToParent(h))}moveNextToParent(l){l.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",l),this.moveNextToParentInChangeTreeList("allFilteredChanges",l)):(this.moveNextToParentInChangeTreeList("changes",l),this.moveNextToParentInChangeTreeList("allChanges",l))}moveNextToParentInChangeTreeList(l,h){const _=this[l],E=h[l].queueRootNode;if(!E)return;const O=h.parent;if(!O||!O[u])return;const j=O[u][l]?.queueRootNode;if(!j||j===E)return;const me=j.position;E.position>me||(E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,E.prev=j,E.next=j.next,j.next?j.next.prev=E:_.tail=E,j.next=E,this.updatePositionsAfterMove(_,E,me+1))}enqueueChangeTree(l,h,_=l[h].queueRootNode){_||(l[h].queueRootNode=this.addToChangeTreeList(this[h],l))}addToChangeTreeList(l,h){const _={changeTree:h,next:void 0,prev:void 0,position:l.tail?l.tail.position+1:0};return l.next?(_.prev=l.tail,l.tail.next=_,l.tail=_):(l.next=_,l.tail=_),_}updatePositionsAfterRemoval(l,h){let _=l.next,E=0;for(;_;)E>=h&&(_.position=E),_=_.next,E++}updatePositionsAfterMove(l,h,_){let E=l.next,O=0;for(;E;)E.position=O,E=E.next,O++}removeChangeFromChangeSet(l,h){const _=this[l],E=h[l].queueRootNode;if(E&&E.changeTree===h){const O=E.position;return E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,this.updatePositionsAfterRemoval(_,O),h[l].queueRootNode=void 0,!0}return!1}}const ea=class ea{constructor(l){this.sharedBuffer=Buffer.allocUnsafe(ea.BUFFER_SIZE),this.context=rt.cache(l.constructor),this.root=new xt(this.context),this.setState(l)}setState(l){this.state=l,this.state[u].setRoot(this.root)}encode(l={offset:0},h,_=this.sharedBuffer,E="changes",O=E==="allChanges",j=l.offset){const me=h!==void 0,ie=this.state[u];let ue=this.root[E];for(;ue=ue.next;){const he=ue.changeTree;if(me){if(!h.isChangeTreeVisible(he)){h.invisible.add(he);continue}h.invisible.delete(he)}const ce=he[E],Ye=he.ref,Ve=ce.operations.length;if(Ve===0)continue;const Le=Ye.constructor,Pe=Le[o],Ze=Le[c],Wt=Le[Symbol.metadata];(me||l.offset>j||he!==ie)&&(_[l.offset++]=255,Qe.number(_,he.refId,l));for(let $t=0;$t<Ve;$t++){const Ln=ce.operations[$t];if(Ln<0){_[l.offset++]=Math.abs(Ln)&255;continue}const kn=O?t.OPERATION.ADD:he.indexedOperations[Ln];Ln===void 0||kn===void 0||Ze&&!Ze(Ye,Ln,h)||Pe(this,_,he,Ln,kn,l,O,me,Wt)}}if(l.offset>_.byteLength){const he=Math.ceil(l.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(he/1024)} * 1024; // ${Math.round(he/1024)} KB
`),_=Buffer.alloc(he,_),_===this.sharedBuffer&&(this.sharedBuffer=_),this.encode({offset:j},h,_,E,O)}else return _.subarray(0,l.offset)}encodeAll(l={offset:0},h=this.sharedBuffer){return this.encode(l,void 0,h,"allChanges",!0)}encodeAllView(l,h,_,E=this.sharedBuffer){const O=_.offset;return this.encode(_,l,E,"allFilteredChanges",!0,O),Buffer.concat([E.subarray(0,h),E.subarray(O,_.offset)])}encodeView(l,h,_,E=this.sharedBuffer){const O=_.offset;for(const[j,me]of l.changes){const ie=this.root.changeTrees[j];if(ie===void 0){l.changes.delete(j);continue}const ue=Object.keys(me);if(ue.length===0)continue;const ce=ie.ref.constructor,Ye=ce[o],Ve=ce[Symbol.metadata];E[_.offset++]=255,Qe.number(E,ie.refId,_);for(let Le=0,Pe=ue.length;Le<Pe;Le++){const Ze=Number(ue[Le]),$t=ie.ref[f](Ze)!==void 0&&me[Ze]||t.OPERATION.DELETE;Ye(this,E,ie,Ze,$t,_,!1,!0,Ve)}}return l.changes.clear(),this.encode(_,l,E,"filteredChanges",!1,O),Buffer.concat([E.subarray(0,h),E.subarray(O,_.offset)])}discardChanges(){let l=this.root.changes.next;for(;l;)l.changeTree.endEncode("changes"),l=l.next;for(this.root.changes=we(),l=this.root.filteredChanges.next;l;)l.changeTree.endEncode("filteredChanges"),l=l.next;this.root.filteredChanges=we()}tryEncodeTypeId(l,h,_,E){const O=this.context.getTypeId(h),j=this.context.getTypeId(_);if(j===void 0){console.warn(`@colyseus/schema WARNING: Class "${_.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}O!==j&&(l[E.offset++]=213,Qe.number(l,j,E))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};ea.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let nn=ea;function Ti(b,l){if(l===-1||l>=b.length)return!1;const h=b.length-1;for(let _=l;_<h;_++)b[_]=b[_+1];return b.length=h,!0}class dn extends Error{constructor(l){super(l),this.name="DecodingWarning"}}class Ar{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(l,h,_=!0){this.refs.set(l,h),this.refIds.set(h,l),_&&(this.refCount[l]=(this.refCount[l]||0)+1),this.deletedRefs.has(l)&&this.deletedRefs.delete(l)}removeRef(l){const h=this.refCount[l];if(h===void 0){try{throw new dn("trying to remove refId that doesn't exist: "+l)}catch(_){console.warn(_)}return}if(h===0){try{const _=this.refs.get(l);throw new dn(`trying to remove refId '${l}' with 0 refCount (${_.constructor.name}: ${JSON.stringify(_)})`)}catch(_){console.warn(_)}return}(this.refCount[l]=h-1)<=0&&this.deletedRefs.add(l)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(l=>{if(this.refCount[l]>0)return;const h=this.refs.get(l);if(h.constructor[Symbol.metadata]!==void 0){const _=h.constructor[Symbol.metadata];for(const E in _){const O=_[E].name,j=typeof h[O]=="object"&&this.refIds.get(h[O]);j&&!this.deletedRefs.has(j)&&this.removeRef(j)}}else typeof h[p]=="function"&&Array.from(h.values()).forEach(_=>{const E=this.refIds.get(_);this.deletedRefs.has(E)||this.removeRef(E)});this.refs.delete(l),delete this.refCount[l],delete this.callbacks[l]}),this.deletedRefs.clear()}addCallback(l,h,_){if(l===void 0){const E=typeof h=="number"?t.OPERATION[h]:h;throw new Error(`Can't addCallback on '${E}' (refId is undefined)`)}return this.callbacks[l]||(this.callbacks[l]={}),this.callbacks[l][h]||(this.callbacks[l][h]=[]),this.callbacks[l][h].push(_),()=>this.removeCallback(l,h,_)}removeCallback(l,h,_){const E=this.callbacks?.[l]?.[h]?.indexOf(_);E!==void 0&&E!==-1&&Ti(this.callbacks[l][h],E)}}class Lt{constructor(l,h){this.currentRefId=0,this.setState(l),this.context=h||new rt(l.constructor)}setState(l){this.state=l,this.root=new Ar,this.root.addRef(0,l)}decode(l,h={offset:0},_=this.state){const E=[],O=this.root,j=l.byteLength;let me=_.constructor[a];for(this.currentRefId=0;h.offset<j;){if(l[h.offset]==255){h.offset++,_[x]?.();const ue=Oe.number(l,h),he=O.refs.get(ue);he?(_=he,me=_.constructor[a],this.currentRefId=ue):(console.error(`"refId" not found: ${ue}`,{previousRef:_,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(l,h,j));continue}if(me(this,l,h,_,E)===Js){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(l,h,j);continue}}return _[x]?.(),this.triggerChanges?.(E),O.garbageCollectDeletedRefs(),E}skipCurrentStructure(l,h,_){const E={offset:h.offset};for(;h.offset<_&&!(l[h.offset]===255&&(E.offset=h.offset+1,this.root.refs.has(Oe.number(l,E))));)h.offset++}getInstanceType(l,h,_){let E;if(l[h.offset]===213){h.offset++;const O=Oe.number(l,h);E=this.context.get(O)}return E||_}createInstanceOfType(l){return new l}removeChildRefs(l,h){const _=typeof l[p]!="string",E=this.root.refIds.get(l);l.forEach((O,j)=>{h.push({ref:l,refId:E,op:t.OPERATION.DELETE,field:j,value:void 0,previousValue:O}),_&&this.root.removeRef(this.root.refIds.get(O))})}}class Kt extends Xe{}Et([ke("string")],Kt.prototype,"name",void 0),Et([ke("string")],Kt.prototype,"type",void 0),Et([ke("number")],Kt.prototype,"referencedType",void 0);class Jt extends Xe{constructor(){super(...arguments),this.fields=new Dn}}Et([ke("number")],Jt.prototype,"id",void 0),Et([ke("number")],Jt.prototype,"extendsId",void 0),Et([ke([Kt])],Jt.prototype,"fields",void 0);class Gt extends Xe{constructor(){super(...arguments),this.types=new Dn}static encode(l,h={offset:0}){const _=l.context,E=new Gt,O=new nn(E),j=_.schemas.get(l.state.constructor);j>0&&(E.rootType=j);const me=new Set,ie={},ue=ce=>{if(ce.extendsId===void 0||me.has(ce.extendsId)){me.add(ce.id),E.types.push(ce);const Ye=ie[ce.id];Ye!==void 0&&(delete ie[ce.id],Ye.forEach(Ve=>ue(Ve)))}else ie[ce.extendsId]===void 0&&(ie[ce.extendsId]=[]),ie[ce.extendsId].push(ce)};_.schemas.forEach((ce,Ye)=>{const Ve=new Jt;Ve.id=Number(ce);const Le=Object.getPrototypeOf(Ye);Le!==Xe&&(Ve.extendsId=_.schemas.get(Le));const Pe=Ye[Symbol.metadata];if(Pe!==Le[Symbol.metadata])for(const Ze in Pe){const Wt=Number(Ze),$t=Pe[Wt].name;if(!Object.prototype.hasOwnProperty.call(Pe,$t))continue;const Ln=new Kt;Ln.name=$t;let kn;const er=Pe[Wt];if(typeof er.type=="string")kn=er.type;else{let ta;Xe.is(er.type)?(kn="ref",ta=er.type):(kn=Object.keys(er.type)[0],typeof er.type[kn]=="string"?kn+=":"+er.type[kn]:ta=er.type[kn]),Ln.referencedType=ta?_.getTypeId(ta):-1}Ln.type=kn,Ve.fields.push(Ln)}ue(Ve)});for(const ce in ie)ie[ce].forEach(Ye=>E.types.push(Ye));return O.encodeAll(h).slice(0,h.offset)}static decode(l,h){const _=new Gt;new Lt(_).decode(l,h);const O=new rt;_.types.forEach(ie=>{const ue=O.get(ie.extendsId)??Xe,he=class extends ue{};rt.register(he),O.add(he,ie.id)},{});const j=(ie,ue,he)=>{ue.fields.forEach((ce,Ye)=>{const Ve=he+Ye;if(ce.referencedType!==void 0){let Le=ce.type,Pe=O.get(ce.referencedType);if(!Pe){const Ze=ce.type.split(":");Le=Ze[0],Pe=Ze[1]}Le==="ref"?Re.addField(ie,Ve,ce.name,Pe):Re.addField(ie,Ve,ce.name,{[Le]:Pe})}else Re.addField(ie,Ve,ce.name,ce.type)})};_.types.forEach(ie=>{const ue=O.get(ie.id),he=Re.initialize(ue),ce=[];let Ye=ie;do ce.push(Ye),Ye=_.types.find(Le=>Le.id===Ye.extendsId);while(Ye);let Ve=0;ce.reverse().forEach(Le=>{j(he,Le,Ve),Ve+=Le.fields.length})});const me=new(O.get(_.rootType||0));return new Lt(me,O)}}Et([ke([Jt])],Gt.prototype,"types",void 0),Et([ke("number")],Gt.prototype,"rootType",void 0);function hn(b){const l=b.root,h=l.callbacks,_=new WeakMap;let E;b.triggerChanges=function(me){const ie=new Set;for(let ue=0,he=me.length;ue<he;ue++){const ce=me[ue],Ye=ce.refId,Ve=ce.ref,Le=h[Ye];if(Le){if((ce.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ce.previousValue instanceof Xe){const Pe=h[l.refIds.get(ce.previousValue)]?.[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Ve instanceof Xe){if(!ie.has(Ye)){const Pe=Le?.[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Le.hasOwnProperty(ce.field)){const Pe=Le[ce.field];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ce.value,ce.previousValue)}}else{if((ce.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ce.previousValue!==void 0){const Pe=Le[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ce.previousValue,ce.dynamicIndex??ce.field)}if((ce.op&t.OPERATION.ADD)===t.OPERATION.ADD){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ce.value,ce.dynamicIndex??ce.field)}}else if((ce.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ce.previousValue!==ce.value){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ce.value,ce.dynamicIndex??ce.field)}if(ce.value!==ce.previousValue&&(ce.value!==void 0||ce.previousValue!==void 0)){const Pe=Le[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](ce.value,ce.dynamicIndex??ce.field)}}ie.add(Ye)}}};function O(me,ie){let ue=ie.instance?.constructor[Symbol.metadata]||me,he=ie.instance&&typeof ie.instance.forEach=="function"||me&&typeof me[Symbol.metadata]>"u";if(ue&&!he){const ce=function(Ye,Ve,Le,Pe){return Pe&&ie.instance[Ve]!==void 0&&!_.has(E)&&Le(ie.instance[Ve],void 0),l.addCallback(l.refIds.get(Ye),Ve,Le)};return new Proxy({listen:function(Ve,Le,Pe=!0){if(ie.instance)return ce(ie.instance,Ve,Le,Pe);{let Ze=()=>{};return ie.onInstanceAvailable((Wt,$t)=>{Ze=ce(Wt,Ve,Le,Pe&&$t&&!_.has(E))}),()=>Ze()}},onChange:function(Ve){return l.addCallback(l.refIds.get(ie.instance),t.OPERATION.REPLACE,Ve)},bindTo:function(Ve,Le){return Le||(Le=Object.keys(ue).map(Pe=>ue[Pe].name)),l.addCallback(l.refIds.get(ie.instance),t.OPERATION.REPLACE,()=>{Le.forEach(Pe=>Ve[Pe]=ie.instance[Pe])})}},{get(Ye,Ve){const Le=ue[ue[Ve]];if(Le){const Pe=ie.instance?.[Ve],Ze=(Wt=>{const $t=j(ie.instance).listen(Ve,(Ln,kn)=>{Wt(Ln,!1),$t?.()},!1);l.refIds.get(Pe)!==void 0&&Wt(Pe,!0)});return O(Le.type,{instance:l.refIds.get(Pe)&&Pe,parentInstance:ie.instance,onInstanceAvailable:Ze})}else return Ye[Ve]},has(Ye,Ve){return ue[Ve]!==void 0},set(Ye,Ve,Le){throw new Error("not allowed")},deleteProperty(Ye,Ve){throw new Error("not allowed")}})}else{const ce=function(Le,Pe,Ze){return Ze&&Le.forEach((Wt,$t)=>Pe(Wt,$t)),l.addCallback(l.refIds.get(Le),t.OPERATION.ADD,(Wt,$t)=>{_.set(Pe,!0),E=Pe,Pe(Wt,$t),_.delete(Pe),E=void 0})},Ye=function(Le,Pe){return l.addCallback(l.refIds.get(Le),t.OPERATION.DELETE,Pe)},Ve=function(Le,Pe){return l.addCallback(l.refIds.get(Le),t.OPERATION.REPLACE,Pe)};return new Proxy({onAdd:function(Le,Pe=!0){if(ie.instance)return ce(ie.instance,Le,Pe&&!_.has(E));if(ie.onInstanceAvailable){let Ze=()=>{};return ie.onInstanceAvailable((Wt,$t)=>{Ze=ce(Wt,Le,Pe&&$t&&!_.has(E))}),()=>Ze()}},onRemove:function(Le){if(ie.instance)return Ye(ie.instance,Le);if(ie.onInstanceAvailable){let Pe=()=>{};return ie.onInstanceAvailable(Ze=>{Pe=Ye(Ze,Le)}),()=>Pe()}},onChange:function(Le){if(ie.instance)return Ve(ie.instance,Le);if(ie.onInstanceAvailable){let Pe=()=>{};return ie.onInstanceAvailable(Ze=>{Pe=Ve(Ze,Le)}),()=>Pe()}}},{get(Le,Pe){if(!Le[Pe])throw new Error(`Can't access '${Pe}' through callback proxy. access the instance directly.`);return Le[Pe]},has(Le,Pe){return Le[Pe]!==void 0},set(Le,Pe,Ze){throw new Error("not allowed")},deleteProperty(Le,Pe){throw new Error("not allowed")}})}}function j(me){return O(void 0,{instance:me})}return j}function eo(b,l){b.triggerChanges=l}class Ai{constructor(l=!1){this.iterable=l,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,l&&(this.items=[])}add(l,h=Te,_=!0){const E=l?.[u],O=E.parent;if(E){if(!O&&E.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${E.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",l),!1;const j=l.constructor[Symbol.metadata];this.visible.add(E),this.iterable&&_&&this.items.push(l),_&&O&&this.addParentOf(E,h);let me=this.changes.get(E.refId);me===void 0&&(me={},this.changes.set(E.refId,me));let ie=!1;if(E.forEachChild((ue,he)=>{j&&j[he].tag!==void 0&&j[he].tag!==h||this.add(ue.ref,h,!1)&&(ie=!0)}),h!==Te){this.tags||(this.tags=new WeakMap);let ue;this.tags.has(E)?ue=this.tags.get(E):(ue=new Set,this.tags.set(E,ue)),ue.add(h),j?.[R]?.[h]?.forEach(he=>{E.getChange(he)!==t.OPERATION.DELETE&&(me[he]=t.OPERATION.ADD)})}else if(!E.isNew||ie){const ue=E.filteredChanges!==void 0?E.allFilteredChanges:E.allChanges,he=this.invisible.has(E);for(let ce=0,Ye=ue.operations.length;ce<Ye;ce++){const Ve=ue.operations[ce];if(Ve===void 0)continue;const Le=E.indexedOperations[Ve]??t.OPERATION.ADD,Pe=j?.[Ve].tag;Le!==t.OPERATION.DELETE&&(he||Pe===void 0||Pe===h)&&(me[Ve]=Le,ie=!0)}}return ie}addParentOf(l,h){const _=l.parent[u],E=l.parentIndex;if(!this.visible.has(_)){this.visible.add(_);const O=_.parent?.[u];O&&O.filteredChanges!==void 0&&this.addParentOf(_,h)}if(_.getChange(E)!==t.OPERATION.DELETE){let O=this.changes.get(_.refId);O===void 0&&(O={},this.changes.set(_.refId,O)),this.tags||(this.tags=new WeakMap);let j;this.tags.has(_)?j=this.tags.get(_):(j=new Set,this.tags.set(_,j)),j.add(h),O[E]=t.OPERATION.ADD}}remove(l,h=Te,_=!1){const E=l[u];if(!E)return console.warn("StateView#remove(), invalid object:",l),this;this.visible.delete(E),this.iterable&&!_&&Ti(this.items,this.items.indexOf(l));const j=E.ref.constructor[Symbol.metadata];let me=this.changes.get(E.refId);if(me===void 0&&(me={},this.changes.set(E.refId,me)),h===Te){const ie=E.parent;if(ie&&!Re.isValidInstance(ie)&&E.isFiltered){const ue=ie[u];let he=this.changes.get(ue.refId);he===void 0?(he={},this.changes.set(ue.refId,he)):he[E.parentIndex]===t.OPERATION.ADD&&this.changes.delete(E.refId),he[E.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(E)}else j?.[I]?.forEach(ue=>me[ue]=t.OPERATION.DELETE)}else j?.[R][h].forEach(ie=>me[ie]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(E)){const ie=this.tags.get(E);h===void 0?this.tags.delete(E):(ie.delete(h),ie.size===0&&this.tags.delete(E))}return this}has(l){return this.visible.has(l[u])}hasTag(l,h=Te){return this.tags?.get(l[u])?.has(h)??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let l=0,h=this.items.length;l<h;l++)this.remove(this.items[l],Te,!0);this.items.length=0}isChangeTreeVisible(l){let h=this.visible.has(l);return!h&&l.isVisibilitySharedWithParent&&this.visible.has(l.parent[u])&&(this.visible.add(l),h=!0),h}_recursiveDeleteVisibleChangeTree(l){l.forEachChild(h=>{this.visible.delete(h),this._recursiveDeleteVisibleChangeTree(h)})}}qe("map",{constructor:$n}),qe("array",{constructor:Dn}),qe("set",{constructor:Y}),qe("collection",{constructor:X}),t.$changes=u,t.$childType=p,t.$decoder=a,t.$deleteByIndex=d,t.$encoder=o,t.$filter=c,t.$getByIndex=f,t.$track=s,t.ArraySchema=Dn,t.ChangeTree=at,t.CollectionSchema=X,t.Decoder=Lt,t.Encoder=nn,t.MapSchema=$n,t.Metadata=Re,t.Reflection=Gt,t.ReflectionField=Kt,t.ReflectionType=Jt,t.Schema=Xe,t.SetSchema=Y,t.StateView=Ai,t.TypeContext=rt,t.decode=Oe,t.decodeKeyValueOperation=br,t.decodeSchemaOperation=ns,t.defineCustomTypes=Be,t.defineTypes=st,t.deprecated=lt,t.dumpChanges=Vt,t.encode=Qe,t.encodeArray=In,t.encodeKeyValueOperation=An,t.encodeSchemaOperation=yt,t.entity=$e,t.getDecoderStateCallbacks=hn,t.getRawChangesCallback=eo,t.registerType=qe,t.schema=mt,t.type=ke,t.view=et}))})(uo,uo.exports)),uo.exports}var _d;function U0(){if(_d)return Kl;_d=1;var n=ml,e=gf();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(f=>{this.reader=f.value.readable.getReader(),this.writer=f.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(f=>{console.error("failed to read incoming stream",f),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return Kl.H3TransportTransport=t,Kl}var Jl={},Zl,vd;function N0(){return vd||(vd=1,Zl=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Zl}var xd;function F0(){if(xd)return Jl;xd=1;var n=N0();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Jl.WebSocketTransport=t,Jl}var yd;function B0(){if(yd)return Yl;yd=1;var n=U0(),e=F0();let t=class{constructor(r){this.events={},r==="h3"?this.transport=new n.H3TransportTransport(this.events):this.transport=new e.WebSocketTransport(this.events)}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return Yl.Connection=t,Yl}var Ql={},Sd;function nm(){return Sd||(Sd=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Ql)),Ql}var ia={},Ed;function im(){if(Ed)return ia;Ed=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return ia.getSerializer=t,ia.registerSerializer=e,ia}var ec={},Md;function rm(){if(Md)return ec;Md=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return ec.createNanoEvents=n,ec}var ra={},bd;function k0(){if(bd)return ra;bd=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return ra.EventEmitter=n,ra.createSignal=e,ra}var sa={},Td;function sm(){if(Td)return sa;Td=1;var n=gf();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return sa.SchemaSerializer=t,sa.getStateCallbacks=e,sa}var tu;try{tu=new TextDecoder}catch{}var We,xi,q=0,Ft={},_t,fr,Vn=0,pi=0,on,Gi,vn=[],gt,Ad={useRecords:!1,mapsAsObjects:!0};class om{}const _f=new om;_f.name="MessagePack 0xC1";var hr=!1,am=2,z0;try{new Function("")}catch{am=1/0}class gr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(We)return hm(()=>(ja(),this?this.unpack(e,t):gr.prototype.unpack.call(Ad,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(xi=t.end||e.length,q=t.start||0):(q=0,xi=t>-1?t:e.length),pi=0,fr=null,on=null,We=e;try{gt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw We=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof gr){if(Ft=this,this.structures)return _t=this.structures,oa(t);(!_t||_t.length>0)&&(_t=[])}else Ft=Ad,(!_t||_t.length>0)&&(_t=[]);return oa(t)}unpackMultiple(e,t){let i,r=0;try{hr=!0;let s=e.length,o=this?this.unpack(e,s):vl.unpack(e,s);if(t){if(t(o,r,q)===!1)return;for(;q<s;)if(r=q,t(oa(),r,q)===!1)return}else{for(i=[o];q<s;)r=q,i.push(oa());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{hr=!1,ja()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function oa(n){try{if(!Ft.trusted&&!hr){let t=_t.sharedLength||0;t<_t.length&&(_t.length=t)}let e;if(Ft.randomAccessStructure&&We[q]<64&&We[q]>=32&&z0||(e=Xt()),on&&(q=on.postBundlePosition,on=null),hr&&(_t.restoreStructures=null),q==xi)_t&&_t.restoreStructures&&wd(),_t=null,We=null,Gi&&(Gi=null);else{if(q>xi)throw new Error("Unexpected end of MessagePack data");if(!hr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw _t&&_t.restoreStructures&&wd(),ja(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||q>xi)&&(e.incomplete=!0),e}}function wd(){for(let n in _t.restoreStructures)_t[n]=_t.restoreStructures[n];_t.restoreStructures=null}function Xt(){let n=We[q++];if(n<160)if(n<128){if(n<64)return n;{let e=_t[n&63]||Ft.getStructures&&lm()[n&63];return e?(e.read||(e.read=vf(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Ft.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=um();i==="__proto__"&&(i="__proto_"),e[i]=Xt()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(Xt(),Xt());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=Xt();return Ft.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(pi>=q)return fr.slice(q-Vn,(q+=e)-Vn);if(pi==0&&xi<140){let t=e<16?xf(e):cm(e);if(t!=null)return t}return nu(e)}else{let e;switch(n){case 192:return null;case 193:return on?(e=Xt(),e>0?on[1].slice(on.position1,on.position1+=e):on[0].slice(on.position0,on.position0-=e)):_f;case 194:return!1;case 195:return!0;case 196:if(e=We[q++],e===void 0)throw new Error("Unexpected end of buffer");return tc(e);case 197:return e=gt.getUint16(q),q+=2,tc(e);case 198:return e=gt.getUint32(q),q+=4,tc(e);case 199:return wr(We[q++]);case 200:return e=gt.getUint16(q),q+=2,wr(e);case 201:return e=gt.getUint32(q),q+=4,wr(e);case 202:if(e=gt.getFloat32(q),Ft.useFloat32>2){let t=_l[(We[q]&127)<<1|We[q+1]>>7];return q+=4,(t*e+(e>0?.5:-.5)>>0)/t}return q+=4,e;case 203:return e=gt.getFloat64(q),q+=8,e;case 204:return We[q++];case 205:return e=gt.getUint16(q),q+=2,e;case 206:return e=gt.getUint32(q),q+=4,e;case 207:return Ft.int64AsType==="number"?(e=gt.getUint32(q)*4294967296,e+=gt.getUint32(q+4)):Ft.int64AsType==="string"?e=gt.getBigUint64(q).toString():Ft.int64AsType==="auto"?(e=gt.getBigUint64(q),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=gt.getBigUint64(q),q+=8,e;case 208:return gt.getInt8(q++);case 209:return e=gt.getInt16(q),q+=2,e;case 210:return e=gt.getInt32(q),q+=4,e;case 211:return Ft.int64AsType==="number"?(e=gt.getInt32(q)*4294967296,e+=gt.getUint32(q+4)):Ft.int64AsType==="string"?e=gt.getBigInt64(q).toString():Ft.int64AsType==="auto"?(e=gt.getBigInt64(q),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=gt.getBigInt64(q),q+=8,e;case 212:if(e=We[q++],e==114)return Ld(We[q++]&63);{let t=vn[e];if(t)return t.read?(q++,t.read(Xt())):t.noBuffer?(q++,t()):t(We.subarray(q,++q));throw new Error("Unknown extension "+e)}case 213:return e=We[q],e==114?(q++,Ld(We[q++]&63,We[q++])):wr(2);case 214:return wr(4);case 215:return wr(8);case 216:return wr(16);case 217:return e=We[q++],pi>=q?fr.slice(q-Vn,(q+=e)-Vn):H0(e);case 218:return e=gt.getUint16(q),q+=2,pi>=q?fr.slice(q-Vn,(q+=e)-Vn):G0(e);case 219:return e=gt.getUint32(q),q+=4,pi>=q?fr.slice(q-Vn,(q+=e)-Vn):W0(e);case 220:return e=gt.getUint16(q),q+=2,Cd(e);case 221:return e=gt.getUint32(q),q+=4,Cd(e);case 222:return e=gt.getUint16(q),q+=2,Pd(e);case 223:return e=gt.getUint32(q),q+=4,Pd(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const V0=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function vf(n,e){function t(){if(t.count++>am){let r=n.read=new Function("r","return function(){return "+(Ft.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":V0.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(Xt);return n.highByte===0&&(n.read=Rd(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=Xt()}return Ft.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Rd(e,t):t}const Rd=(n,e)=>function(){let t=We[q++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=_t[i]||lm()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=vf(r,n)),r.read()};function lm(){let n=hm(()=>(We=null,Ft.getStructures()));return _t=Ft._mergeStructures(n,_t)}var nu=Uo,H0=Uo,G0=Uo,W0=Uo;let $0=!1;function Uo(n){let e;if(n<16&&(e=xf(n)))return e;if(n>64&&tu)return tu.decode(We.subarray(q,q+=n));const t=q+n,i=[];for(e="";q<t;){const r=We[q++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=We[q++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=We[q++]&63,o=We[q++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=We[q++]&63,o=We[q++]&63,a=We[q++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=sn.apply(String,i),i.length=0)}return i.length>0&&(e+=sn.apply(String,i)),e}function Cd(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=Xt();return Ft.freezeData?Object.freeze(e):e}function Pd(n){if(Ft.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=um();i==="__proto__"&&(i="__proto_"),e[i]=Xt()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(Xt(),Xt());return e}}var sn=String.fromCharCode;function cm(n){let e=q,t=new Array(n);for(let i=0;i<n;i++){const r=We[q++];if((r&128)>0){q=e;return}t[i]=r}return sn.apply(String,t)}function xf(n){if(n<4)if(n<2){if(n===0)return"";{let e=We[q++];if((e&128)>1){q-=1;return}return sn(e)}}else{let e=We[q++],t=We[q++];if((e&128)>0||(t&128)>0){q-=2;return}if(n<3)return sn(e,t);let i=We[q++];if((i&128)>0){q-=3;return}return sn(e,t,i)}else{let e=We[q++],t=We[q++],i=We[q++],r=We[q++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){q-=4;return}if(n<6){if(n===4)return sn(e,t,i,r);{let s=We[q++];if((s&128)>0){q-=5;return}return sn(e,t,i,r,s)}}else if(n<8){let s=We[q++],o=We[q++];if((s&128)>0||(o&128)>0){q-=6;return}if(n<7)return sn(e,t,i,r,s,o);let a=We[q++];if((a&128)>0){q-=7;return}return sn(e,t,i,r,s,o,a)}else{let s=We[q++],o=We[q++],a=We[q++],c=We[q++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){q-=8;return}if(n<10){if(n===8)return sn(e,t,i,r,s,o,a,c);{let f=We[q++];if((f&128)>0){q-=9;return}return sn(e,t,i,r,s,o,a,c,f)}}else if(n<12){let f=We[q++],d=We[q++];if((f&128)>0||(d&128)>0){q-=10;return}if(n<11)return sn(e,t,i,r,s,o,a,c,f,d);let u=We[q++];if((u&128)>0){q-=11;return}return sn(e,t,i,r,s,o,a,c,f,d,u)}else{let f=We[q++],d=We[q++],u=We[q++],p=We[q++];if((f&128)>0||(d&128)>0||(u&128)>0||(p&128)>0){q-=12;return}if(n<14){if(n===12)return sn(e,t,i,r,s,o,a,c,f,d,u,p);{let m=We[q++];if((m&128)>0){q-=13;return}return sn(e,t,i,r,s,o,a,c,f,d,u,p,m)}}else{let m=We[q++],x=We[q++];if((m&128)>0||(x&128)>0){q-=14;return}if(n<15)return sn(e,t,i,r,s,o,a,c,f,d,u,p,m,x);let y=We[q++];if((y&128)>0){q-=15;return}return sn(e,t,i,r,s,o,a,c,f,d,u,p,m,x,y)}}}}}function Id(){let n=We[q++],e;if(n<192)e=n-160;else switch(n){case 217:e=We[q++];break;case 218:e=gt.getUint16(q),q+=2;break;case 219:e=gt.getUint32(q),q+=4;break;default:throw new Error("Expected string")}return Uo(e)}function tc(n){return Ft.copyBuffers?Uint8Array.prototype.slice.call(We,q,q+=n):We.subarray(q,q+=n)}function wr(n){let e=We[q++];if(vn[e]){let t;return vn[e](We.subarray(q,t=q+=n),i=>{q=i;try{return Xt()}finally{q=t}})}else throw new Error("Unknown extension type "+e)}var Dd=new Array(4096);function um(){let n=We[q++];if(n>=160&&n<192){if(n=n-160,pi>=q)return fr.slice(q-Vn,(q+=n)-Vn);if(!(pi==0&&xi<180))return nu(n)}else return q--,fm(Xt());let e=(n<<5^(n>1?gt.getUint16(q):n>0?We[q]:0))&4095,t=Dd[e],i=q,r=q+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=gt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=We[i++],s!=t[o++]){i=1879048192;break}if(i===r)return q=i,t.string;r-=3,i=q}for(t=[],Dd[e]=t,t.bytes=n;i<r;)s=gt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=We[i++],t.push(s);let a=n<16?xf(n):cm(n);return a!=null?t.string=a:t.string=nu(n)}function fm(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Ft.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const Ld=(n,e)=>{let t=Xt().map(fm),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=_t[n];return r&&(r.isShared||hr)&&((_t.restoreStructures||(_t.restoreStructures=[]))[n]=r),_t[n]=t,t.read=vf(t,i),t.read()};vn[0]=()=>{};vn[0].noBuffer=!0;vn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let X0={Error,TypeError,ReferenceError};vn[101]=()=>{let n=Xt();return(X0[n[0]]||Error)(n[1],{cause:n[2]})};vn[105]=n=>{if(Ft.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=gt.getUint32(q-4);Gi||(Gi=new Map);let t=We[q],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};Gi.set(e,r);let s=Xt();return r.used?Object.assign(i,s):(r.target=s,s)};vn[112]=n=>{if(Ft.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=gt.getUint32(q-4),t=Gi.get(e);return t.used=!0,t.target};vn[115]=()=>new Set(Xt());const dm=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let q0=typeof globalThis=="object"?globalThis:window;vn[116]=n=>{let e=n[0],t=dm[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new q0[t](Uint8Array.prototype.slice.call(n,1).buffer)};vn[120]=()=>{let n=Xt();return new RegExp(n[0],n[1])};const j0=[];vn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=q;return q+=e-n.length,on=j0,on=[Id(),Id()],on.position0=0,on.position1=0,on.postBundlePosition=q,q=t,Xt()};vn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function hm(n){let e=xi,t=q,i=Vn,r=pi,s=fr,o=Gi,a=on,c=new Uint8Array(We.slice(0,xi)),f=_t,d=_t.slice(0,_t.length),u=Ft,p=hr,m=n();return xi=e,q=t,Vn=i,pi=r,fr=s,Gi=o,on=a,We=c,hr=p,_t=f,_t.splice(0,_t.length,...d),Ft=u,gt=new DataView(We.buffer,We.byteOffset,We.byteLength),m}function ja(){We=null,Gi=null,_t=null}function Y0(n){n.unpack?vn[n.type]=n.unpack:vn[n.type]=n}const _l=new Array(147);for(let n=0;n<256;n++)_l[n]=+("1e"+Math.floor(45.15-n*.30103));const K0=gr;var vl=new gr({useRecords:!1});const J0=vl.unpack,Z0=vl.unpackMultiple,Q0=vl.unpack,pm={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let mm=new Float32Array(1),Od=new Uint8Array(mm.buffer,0,4);function e_(n){mm[0]=n;let e=_l[(Od[3]&127)<<1|Od[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let Oa;try{Oa=new TextEncoder}catch{}let Ya,yf;const xl=typeof Buffer<"u",aa=xl?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,gm=xl?Buffer:Uint8Array,Ud=xl?4294967296:2144337920;let Q,to,Ot,K=0,xn,Ht=null,t_;const n_=21760,i_=/[\u0080-\uFFFF]/,os=Symbol("record-id");class No extends gr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=gm.prototype.utf8Write?function(D,W){return Q.utf8Write(D,W,Q.byteLength-W)}:Oa&&Oa.encodeInto?function(D,W){return Oa.encodeInto(D,Q.subarray(W)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,f=e.structures||e.saveStructures,d=e.maxSharedStructures;if(d==null&&(d=f?32:0),d>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let u=e.maxOwnStructures;u==null&&(u=f?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let p=d>32||u+d>64,m=d+64,x=d+u+64;if(x>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],v=0,g=0;this.pack=this.encode=function(D,W){if(Q||(Q=new aa(8192),Ot=Q.dataView||(Q.dataView=new DataView(Q.buffer,0,8192)),K=0),xn=Q.length-10,xn-K<2048?(Q=new aa(Q.length),Ot=Q.dataView||(Q.dataView=new DataView(Q.buffer,0,Q.length)),xn=Q.length-10,K=0):K=K+7&2147483640,t=K,W&ym&&(K+=W&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof D!="string"?(Ht=[],Ht.size=1/0):Ht=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let F=r.sharedLength||0;if(F>d)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let V=0;V<F;V++){let z=r[V];if(!z)continue;let Se,Ee=r.transitions;for(let Ce=0,Ue=z.length;Ce<Ue;Ce++){let ct=z[Ce];Se=Ee[ct],Se||(Se=Ee[ct]=Object.create(null)),Ee=Se}Ee[os]=V+64}this.lastNamedStructuresLength=F}c||(r.nextId=F+64)}i&&(i=!1);let $;try{a.randomAccessStructure&&D&&D.constructor&&D.constructor===Object?ye(D):T(D);let F=Ht;if(Ht&&Bd(t,T,0),s&&s.idsToInsert){let V=s.idsToInsert.sort((Ce,Ue)=>Ce.offset>Ue.offset?1:-1),z=V.length,Se=-1;for(;F&&z>0;){let Ce=V[--z].offset+t;Ce<F.stringsPosition+t&&Se===-1&&(Se=0),Ce>F.position+t?Se>=0&&(Se+=6):(Se>=0&&(Ot.setUint32(F.position+t,Ot.getUint32(F.position+t)+Se),Se=-1),F=F.previous,z++)}Se>=0&&F&&Ot.setUint32(F.position+t,Ot.getUint32(F.position+t)+Se),K+=V.length*6,K>xn&&P(K),a.offset=K;let Ee=s_(Q.subarray(t,K),V);return s=null,Ee}return a.offset=K,W&vm?(Q.start=t,Q.end=K,Q):Q.subarray(t,K)}catch(F){throw $=F,F}finally{if(r&&(I(),i&&a.saveStructures)){let F=r.sharedLength||0,V=Q.subarray(t,K),z=a_(r,a);if(!$)return a.saveStructures(z,z.isCompatible)===!1?a.pack(D,W):(a.lastNamedStructuresLength=F,Q.length>1073741824&&(Q=null),V)}Q.length>1073741824&&(Q=null),W&xm&&(K=t)}};const I=()=>{g<10&&g++;let D=r.sharedLength||0;if(r.length>D&&!c&&(r.length=D),v>1e4)r.transitions=null,g=0,v=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let W=0,$=y.length;W<$;W++)y[W][os]=0;y=[]}},R=D=>{var W=D.length;W<16?Q[K++]=144|W:W<65536?(Q[K++]=220,Q[K++]=W>>8,Q[K++]=W&255):(Q[K++]=221,Ot.setUint32(K,W),K+=4);for(let $=0;$<W;$++)T(D[$])},T=D=>{K>xn&&(Q=P(K));var W=typeof D,$;if(W==="string"){let F=D.length;if(Ht&&F>=4&&F<4096){if((Ht.size+=F)>n_){let Ee,Ce=(Ht[0]?Ht[0].length*3+Ht[1].length:0)+10;K+Ce>xn&&(Q=P(K+Ce));let Ue;Ht.position?(Ue=Ht,Q[K]=200,K+=3,Q[K++]=98,Ee=K-t,K+=4,Bd(t,T,0),Ot.setUint16(Ee+t-3,K-t-Ee)):(Q[K++]=214,Q[K++]=98,Ee=K-t,K+=4),Ht=["",""],Ht.previous=Ue,Ht.size=0,Ht.position=Ee}let Se=i_.test(D);Ht[Se?0:1]+=D,Q[K++]=193,T(Se?-F:F);return}let V;F<32?V=1:F<256?V=2:F<65536?V=3:V=5;let z=F*3;if(K+z>xn&&(Q=P(K+z)),F<64||!o){let Se,Ee,Ce,Ue=K+V;for(Se=0;Se<F;Se++)Ee=D.charCodeAt(Se),Ee<128?Q[Ue++]=Ee:Ee<2048?(Q[Ue++]=Ee>>6|192,Q[Ue++]=Ee&63|128):(Ee&64512)===55296&&((Ce=D.charCodeAt(Se+1))&64512)===56320?(Ee=65536+((Ee&1023)<<10)+(Ce&1023),Se++,Q[Ue++]=Ee>>18|240,Q[Ue++]=Ee>>12&63|128,Q[Ue++]=Ee>>6&63|128,Q[Ue++]=Ee&63|128):(Q[Ue++]=Ee>>12|224,Q[Ue++]=Ee>>6&63|128,Q[Ue++]=Ee&63|128);$=Ue-K-V}else $=o(D,K+V);$<32?Q[K++]=160|$:$<256?(V<2&&Q.copyWithin(K+2,K+1,K+1+$),Q[K++]=217,Q[K++]=$):$<65536?(V<3&&Q.copyWithin(K+3,K+2,K+2+$),Q[K++]=218,Q[K++]=$>>8,Q[K++]=$&255):(V<5&&Q.copyWithin(K+5,K+3,K+3+$),Q[K++]=219,Ot.setUint32(K,$),K+=4),K+=$}else if(W==="number")if(D>>>0===D)D<32||D<128&&this.useRecords===!1||D<64&&!this.randomAccessStructure?Q[K++]=D:D<256?(Q[K++]=204,Q[K++]=D):D<65536?(Q[K++]=205,Q[K++]=D>>8,Q[K++]=D&255):(Q[K++]=206,Ot.setUint32(K,D),K+=4);else if(D>>0===D)D>=-32?Q[K++]=256+D:D>=-128?(Q[K++]=208,Q[K++]=D+256):D>=-32768?(Q[K++]=209,Ot.setInt16(K,D),K+=2):(Q[K++]=210,Ot.setInt32(K,D),K+=4);else{let F;if((F=this.useFloat32)>0&&D<4294967296&&D>=-2147483648){Q[K++]=202,Ot.setFloat32(K,D);let V;if(F<4||(V=D*_l[(Q[K]&127)<<1|Q[K+1]>>7])>>0===V){K+=4;return}else K--}Q[K++]=203,Ot.setFloat64(K,D),K+=8}else if(W==="object"||W==="function")if(!D)Q[K++]=192;else{if(s){let V=s.get(D);if(V){if(!V.id){let z=s.idsToInsert||(s.idsToInsert=[]);V.id=z.push(V)}Q[K++]=214,Q[K++]=112,Ot.setUint32(K,V.id),K+=4;return}else s.set(D,{offset:K-t})}let F=D.constructor;if(F===Object)J(D);else if(F===Array)R(D);else if(F===Map)if(this.mapAsEmptyObject)Q[K++]=128;else{$=D.size,$<16?Q[K++]=128|$:$<65536?(Q[K++]=222,Q[K++]=$>>8,Q[K++]=$&255):(Q[K++]=223,Ot.setUint32(K,$),K+=4);for(let[V,z]of D)T(V),T(z)}else{for(let V=0,z=Ya.length;V<z;V++){let Se=yf[V];if(D instanceof Se){let Ee=Ya[V];if(Ee.write){Ee.type&&(Q[K++]=212,Q[K++]=Ee.type,Q[K++]=0);let ge=Ee.write.call(this,D);ge===D?Array.isArray(D)?R(D):J(D):T(ge);return}let Ce=Q,Ue=Ot,ct=K;Q=null;let ut;try{ut=Ee.pack.call(this,D,ge=>(Q=Ce,Ce=null,K+=ge,K>xn&&P(K),{target:Q,targetView:Ot,position:K-ge}),T)}finally{Ce&&(Q=Ce,Ot=Ue,K=ct,xn=Q.length-10)}ut&&(ut.length+K>xn&&P(ut.length+K),K=r_(ut,Q,K,Ee.type));return}}if(Array.isArray(D))R(D);else{if(D.toJSON){const V=D.toJSON();if(V!==D)return T(V)}if(W==="function")return T(this.writeFunction&&this.writeFunction(D));J(D)}}}else if(W==="boolean")Q[K++]=D?195:194;else if(W==="bigint"){if(D<BigInt(1)<<BigInt(63)&&D>=-(BigInt(1)<<BigInt(63)))Q[K++]=211,Ot.setBigInt64(K,D);else if(D<BigInt(1)<<BigInt(64)&&D>0)Q[K++]=207,Ot.setBigUint64(K,D);else if(this.largeBigIntToFloat)Q[K++]=203,Ot.setFloat64(K,Number(D));else{if(this.largeBigIntToString)return T(D.toString());if(this.useBigIntExtension&&D<BigInt(2)**BigInt(1023)&&D>-(BigInt(2)**BigInt(1023))){Q[K++]=199,K++,Q[K++]=66;let F=[],V;do{let z=D&BigInt(255);V=(z&BigInt(128))===(D<BigInt(0)?BigInt(128):BigInt(0)),F.push(z),D>>=BigInt(8)}while(!((D===BigInt(0)||D===BigInt(-1))&&V));Q[K-2]=F.length;for(let z=F.length;z>0;)Q[K++]=Number(F[--z]);return}else throw new RangeError(D+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}K+=8}else if(W==="undefined")this.encodeUndefinedAsNil?Q[K++]=192:(Q[K++]=212,Q[K++]=0,Q[K++]=0);else throw new Error("Unknown type: "+W)},U=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?D=>{let W;if(this.skipValues){W=[];for(let V in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(V))&&!this.skipValues.includes(D[V])&&W.push(V)}else W=Object.keys(D);let $=W.length;$<16?Q[K++]=128|$:$<65536?(Q[K++]=222,Q[K++]=$>>8,Q[K++]=$&255):(Q[K++]=223,Ot.setUint32(K,$),K+=4);let F;if(this.coercibleKeyAsNumber)for(let V=0;V<$;V++){F=W[V];let z=Number(F);T(isNaN(z)?F:z),T(D[F])}else for(let V=0;V<$;V++)T(F=W[V]),T(D[F])}:D=>{Q[K++]=222;let W=K-t;K+=2;let $=0;for(let F in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(F))&&(T(F),T(D[F]),$++);if($>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');Q[W+++t]=$>>8,Q[W+t]=$&255},B=this.useRecords===!1?U:e.progressiveRecords&&!p?D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=K++-t,V;for(let z in D)if(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z)){if(W=$[z],W)$=W;else{let Se=Object.keys(D),Ee=$;$=r.transitions;let Ce=0;for(let Ue=0,ct=Se.length;Ue<ct;Ue++){let ut=Se[Ue];W=$[ut],W||(W=$[ut]=Object.create(null),Ce++),$=W}F+t+1==K?(K--,C($,Se,Ce)):N($,Se,F,Ce),V=!0,$=Ee[z]}T(D[z])}if(!V){let z=$[os];z?Q[F+t]=z:N($,Object.keys(D),F,0)}}:D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=0;for(let z in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z))&&(W=$[z],W||(W=$[z]=Object.create(null),F++),$=W);let V=$[os];V?V>=96&&p?(Q[K++]=((V-=96)&31)+96,Q[K++]=V>>5):Q[K++]=V:C($,$.__keys__||Object.keys(D),F);for(let z in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(z))&&T(D[z])},k=typeof this.useRecords=="function"&&this.useRecords,J=k?D=>{k(D)?B(D):U(D)}:B,P=D=>{let W;if(D>16777216){if(D-t>Ud)throw new Error("Packed buffer would be larger than maximum buffer size");W=Math.min(Ud,Math.round(Math.max((D-t)*(D>67108864?1.25:2),4194304)/4096)*4096)}else W=(Math.max(D-t<<2,Q.length-1)>>12)+1<<12;let $=new aa(W);return Ot=$.dataView||($.dataView=new DataView($.buffer,0,W)),D=Math.min(D,Q.length),Q.copy?Q.copy($,0,t,D):$.set(Q.slice(t,D)),K-=t,t=0,xn=$.length-10,Q=$},C=(D,W,$)=>{let F=r.nextId;F||(F=64),F<m&&this.shouldShareStructure&&!this.shouldShareStructure(W)?(F=r.nextOwnId,F<x||(F=m),r.nextOwnId=F+1):(F>=x&&(F=m),r.nextId=F+1);let V=W.highByte=F>=96&&p?F-96>>5:-1;D[os]=F,D.__keys__=W,r[F-64]=W,F<m?(W.isShared=!0,r.sharedLength=F-63,i=!0,V>=0?(Q[K++]=(F&31)+96,Q[K++]=V):Q[K++]=F):(V>=0?(Q[K++]=213,Q[K++]=114,Q[K++]=(F&31)+96,Q[K++]=V):(Q[K++]=212,Q[K++]=114,Q[K++]=F),$&&(v+=g*$),y.length>=u&&(y.shift()[os]=0),y.push(D),T(W))},N=(D,W,$,F)=>{let V=Q,z=K,Se=xn,Ee=t;Q=to,K=0,t=0,Q||(to=Q=new aa(8192)),xn=Q.length-10,C(D,W,F),to=Q;let Ce=K;if(Q=V,K=z,xn=Se,t=Ee,Ce>1){let Ue=K+Ce-1;Ue>xn&&P(Ue);let ct=$+t;Q.copyWithin(ct+Ce,ct+1,K),Q.set(to.slice(0,Ce),ct),K=Ue}else Q[$+t]=to[0]},ye=D=>{let W=t_(D,Q,t,K,r,P,($,F,V)=>{if(V)return i=!0;K=F;let z=Q;return T($),I(),z!==Q?{position:K,targetView:Ot,target:Q}:K},this);if(W===0)return J(D);K=W}}useBuffer(e){Q=e,Q.dataView||(Q.dataView=new DataView(Q.buffer,Q.byteOffset,Q.byteLength)),Ot=Q.dataView,K=0}set position(e){K=e}get position(){return K}set buffer(e){Q=e}get buffer(){return Q}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}yf=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,om];Ya=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?Nd(n,16,e):Fd(xl?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==gm&&this.moreTypes?Nd(n,dm.indexOf(t.name),e):Fd(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function Nd(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function Fd(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function r_(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function s_(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function Bd(n,e,t){if(Ht.length>0){Ot.setUint32(Ht.position+n,K+t-Ht.position-n),Ht.stringsPosition=K-n;let i=Ht;Ht=null,e(i[0]),e(i[1])}}function o_(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");yf.unshift(n.Class),Ya.unshift(n)}Y0(n)}function a_(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let _m=new No({useRecords:!1});const l_=_m.pack,c_=_m.pack,u_=No,{NEVER:f_,ALWAYS:d_,DECIMAL_ROUND:h_,DECIMAL_FIT:p_}=pm,vm=512,xm=1024,ym=2048;function m_(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return g_(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return __(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*g_(n,e){const t=new No(e);for(const i of n)yield t.pack(i)}async function*__(n,e){const t=new No(e);for await(const i of n)yield t.pack(i)}function v_(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new gr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const x_=v_,y_=m_,S_=!1,E_=!0,M_=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:d_,C1:_f,DECIMAL_FIT:p_,DECIMAL_ROUND:h_,Decoder:K0,Encoder:u_,FLOAT32_OPTIONS:pm,NEVER:f_,Packr:No,RESERVE_START_SPACE:ym,RESET_BUFFER_MODE:xm,REUSE_BUFFER_MODE:vm,Unpackr:gr,addExtension:o_,clearSource:ja,decode:Q0,decodeIter:x_,encode:c_,encodeIter:y_,isNativeAccelerationEnabled:$0,mapsAsObjects:E_,pack:l_,roundFloat32:e_,unpack:J0,unpackMultiple:Z0,useRecords:S_},Symbol.toStringTag,{value:"Module"})),b_=pf(M_);var kd;function Em(){if(kd)return jl;kd=1;var n=B0(),e=nm(),t=im(),i=rm(),r=k0(),s=gf(),o=sm(),a=gl(),c=b_;let f=class Sm{constructor(u,p){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=u,this.packr=new c.Packr,this.packr.encode(void 0),p&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=p,this.serializer.state=new p),this.onError((m,x)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${m}) ${x}`)}),this.onLeave(()=>this.removeAllListeners())}connect(u,p,m=this,x,y){const v=new n.Connection(x.protocol);if(m.connection=v,v.events.onmessage=Sm.prototype.onMessageCallback.bind(m),v.events.onclose=function(g){var I;if(!m.hasJoined){(I=console.warn)===null||I===void 0||I.call(console,`Room connection was closed unexpectedly (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason);return}g.code===a.CloseCode.DEVMODE_RESTART&&p?p():(m.onLeave.invoke(g.code,g.reason),m.destroy())},v.events.onerror=function(g){var I;(I=console.warn)===null||I===void 0||I.call(console,`Room, onError (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason)},x.protocol==="h3"){const g=new URL(u);v.connect(g.origin,x)}else v.connect(u,y)}leave(u=!0){return new Promise(p=>{this.onLeave(m=>p(m)),this.connection?u?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(u,p){return this.onMessageHandlers.on(this.getMessageHandlerKey(u),p)}send(u,p){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof u=="string"?s.encode.string(this.packr.buffer,u,m):s.encode.number(this.packr.buffer,u,m),this.packr.position=0;const x=p!==void 0?this.packr.pack(p,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.send(x)}sendUnreliable(u,p){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof u=="string"?s.encode.string(this.packr.buffer,u,m):s.encode.number(this.packr.buffer,u,m),this.packr.position=0;const x=p!==void 0?this.packr.pack(p,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.sendUnreliable(x)}sendBytes(u,p){const m={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof u=="string"?s.encode.string(this.packr.buffer,u,m):s.encode.number(this.packr.buffer,u,m),p.byteLength+m.offset>this.packr.buffer.byteLength){const x=new Uint8Array(m.offset+p.byteLength);x.set(this.packr.buffer),this.packr.useBuffer(x)}this.packr.buffer.set(p,m.offset),this.connection.send(this.packr.buffer.subarray(0,m.offset+p.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(u){const p=new Uint8Array(u.data),m={offset:1},x=p[0];if(x===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(p,m,p[m.offset++]);if(this.serializerId=s.decode.utf8Read(p,m,p[m.offset++]),!this.serializer){const v=t.getSerializer(this.serializerId);this.serializer=new v}p.byteLength>m.offset&&this.serializer.handshake&&this.serializer.handshake(p,m),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(x===e.Protocol.ERROR){const y=s.decode.number(p,m),v=s.decode.string(p,m);this.onError.invoke(y,v)}else if(x===e.Protocol.LEAVE_ROOM)this.leave();else if(x===e.Protocol.ROOM_STATE)this.serializer.setState(p,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(p,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(p,m)?s.decode.string(p,m):s.decode.number(p,m),v=p.byteLength>m.offset?c.unpack(p,{start:m.offset}):void 0;this.dispatchMessage(y,v)}else if(x===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(p,m)?s.decode.string(p,m):s.decode.number(p,m);this.dispatchMessage(y,p.subarray(m.offset))}}dispatchMessage(u,p){var m;const x=this.getMessageHandlerKey(u);this.onMessageHandlers.events[x]?this.onMessageHandlers.emit(x,p):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",u,p):(m=console.warn)===null||m===void 0||m.call(console,`colyseus.js: onMessage() not registered for type '${u}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(u){switch(typeof u){case"string":return u;case"number":return`i${u}`;default:throw new Error("invalid message type.")}}};return jl.Room=f,jl}var nc={};function zd(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function ii(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,f=t.body,d=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(u){u.timeout=u.type=="timeout",r(u)},s.onabort=function(u){u.aborted=!0,r(u)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),zd(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(u){return zd(s,u),r(u)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&f instanceof FormData||f&&typeof f=="object"&&(d["content-type"]="application/json",f=JSON.stringify(f)),s.withCredentials=!!t.withCredentials;for(o in d)s.setRequestHeader(o,d[o]);s.send(f),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var T_=ii.bind(ii,"GET"),A_=ii.bind(ii,"POST"),w_=ii.bind(ii,"PATCH"),R_=ii.bind(ii,"DELETE"),C_=ii.bind(ii,"PUT");const P_=Object.freeze(Object.defineProperty({__proto__:null,del:R_,get:T_,patch:w_,post:A_,put:C_,send:ii},Symbol.toStringTag,{value:"Module"})),I_=pf(P_);var Vd;function D_(){if(Vd)return nc;Vd=1;var n=gl(),e=I_;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(f=>{var d;if(f.aborted)throw new n.AbortError("Request aborted");const u=f.statusCode,p=((d=f.data)===null||d===void 0?void 0:d.error)||f.statusMessage||f.message;throw!u&&!p?f:new n.ServerError(u,p)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return nc.HTTP=r,nc}var ic={},no={},Hd;function L_(){if(Hd)return no;Hd=1;var n=ml;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const f=t().getItem(a);typeof Promise>"u"||!(f instanceof Promise)?c(f):f.then(d=>c(d))}class o{constructor(){this.dbPromise=new Promise(c=>{const f=indexedDB.open("_colyseus_storage",1);f.onupgradeneeded=()=>f.result.createObjectStore("store"),f.onsuccess=()=>c(f.result)})}tx(c,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.dbPromise).transaction("store",c).objectStore("store");return f(u)})}setItem(c,f){return this.tx("readwrite",d=>d.put(f,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const f=yield this.tx("readonly",d=>d.get(c));return new Promise(d=>{f.onsuccess=()=>d(f.result)})})}removeItem(c){return this.tx("readwrite",f=>f.delete(c)).then()}}return no.getItem=s,no.removeItem=r,no.setItem=i,no}var Gd;function Mm(){if(Gd)return ic;Gd=1;var n=ml,e=L_(),t=rm(),i,r,s,o;let a=class{constructor(f){this.http=f,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,d=>this.token=d)}set token(f){this.http.authToken=f}get token(){return this.http.authToken}onChange(f){const d=n.__classPrivateFieldGet(this,o,"f").on("change",f);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((u,p)=>{this.getUserData().then(m=>{this.emitChange(Object.assign(Object.assign({},m),{token:this.token}))}).catch(m=>{this.emitChange({user:null,token:void 0})}).finally(()=>{u()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),d}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(f,d,u){return n.__awaiter(this,void 0,void 0,function*(){const p=(yield this.http.post(`${this.settings.path}/register`,{body:{email:f,password:d,options:u}})).data;return this.emitChange(p),p})}signInWithEmailAndPassword(f,d){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/login`,{body:{email:f,password:d}})).data;return this.emitChange(u),u})}signInAnonymously(f){return n.__awaiter(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:f}})).data;return this.emitChange(d),d})}sendPasswordResetEmail(f){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:f}})).data})}signInWithProvider(f){return n.__awaiter(this,arguments,void 0,function*(d,u={}){return new Promise((p,m)=>{const x=u.width||480,y=u.height||768,v=this.token?`?token=${this.token}`:"",g=`Login with ${d[0].toUpperCase()+d.substring(1)}`,I=this.http.client.getHttpEndpoint(`${u.prefix||`${this.settings.path}/provider`}/${d}${v}`),R=screen.width/2-x/2,T=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(I,g,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+x+", height="+y+", top="+T+", left="+R),"f");const U=k=>{k.data.user===void 0&&k.data.token===void 0||(clearInterval(B),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",U),k.data.error!==void 0?m(k.data.error):(p(k.data),this.emitChange(k.data)))},B=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),m("cancelled"),window.removeEventListener("message",U))},200);window.addEventListener("message",U)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(f){f.token!==void 0&&(this.token=f.token,f.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,f.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",f)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,ic.Auth=a,ic}var rc={},Wd;function O_(){if(Wd)return rc;Wd=1;function n(e){var t;const i=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return rc.discordURLBuilder=n,rc}var $d;function U_(){if($d)return na;$d=1;var n=ml,e=gl(),t=Em(),i=D_(),r=Mm(),s=O_(),o;class a extends Error{constructor(u,p){super(u),this.code=p,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window?.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let f=class{constructor(u=c,p){var m,x;if(typeof u=="string"){const y=u.startsWith("/")?new URL(u,c):new URL(u),v=y.protocol==="https:"||y.protocol==="wss:",g=Number(y.port||(v?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:g,secure:v,searchParams:y.searchParams.toString()||void 0}}else u.port===void 0&&(u.port=u.secure?443:80),u.pathname===void 0&&(u.pathname=""),this.settings=u;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,p?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=p?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((x=(m=window?.location)===null||m===void 0?void 0:m.hostname)===null||x===void 0)&&x.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(u){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("joinOrCreate",p,m,x)})}create(u){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("create",p,m,x)})}join(u){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("join",p,m,x)})}joinById(u){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("joinById",p,m,x)})}reconnect(u,p){return n.__awaiter(this,void 0,void 0,function*(){if(typeof u=="string"&&typeof p=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[m,x]=u.split(":");if(!m||!x)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",m,{reconnectionToken:x},p)})}consumeSeatReservation(u,p,m){return n.__awaiter(this,void 0,void 0,function*(){const x=this.createRoom(u.room.name,p);x.roomId=u.room.roomId,x.sessionId=u.sessionId;const y={sessionId:x.sessionId};u.reconnectionToken&&(y.reconnectionToken=u.reconnectionToken);const v=m||x;return x.connect(this.buildEndpoint(u.room,y,u.protocol),u.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${x.roomId}'...`);let g=0,I=8;const R=()=>n.__awaiter(this,void 0,void 0,function*(){g++;try{yield this.consumeSeatReservation(u,p,v),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${x.roomId}'`)}catch{g<I?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${g} out of ${I})`),setTimeout(R,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(R,2e3)})),v,u,this.http.headers),new Promise((g,I)=>{const R=(T,U)=>I(new e.ServerError(T,U));v.onError.once(R),v.onJoin.once(()=>{v.onError.remove(R),g(v)})})})}createMatchMakeRequest(u,p){return n.__awaiter(this,arguments,void 0,function*(m,x,y={},v,g){const I=(yield this.http.post(`matchmake/${m}/${x}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(I.error)throw new a(I.error,I.code);return m==="reconnect"&&(I.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(I,v,g)})}createRoom(u,p){return new t.Room(u,p)}buildEndpoint(u,p={},m="ws"){let x=this.settings.searchParams||"";this.http.authToken&&(p._authToken=this.http.authToken);for(const g in p)p.hasOwnProperty(g)&&(x+=(x?"&":"")+`${g}=${p[g]}`);m==="h3"&&(m="http");let y=this.settings.secure?`${m}s://`:`${m}://`;u.publicAddress?y+=`${u.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${y}/${u.processId}/${u.roomId}?${x}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(u=""){const p=u.startsWith("/")?u:`/${u}`;let m=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${p}`;return this.settings.searchParams&&(m+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(m)):m}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return f.VERSION="0.16.22",na.Client=f,na.MatchMakeError=a,na}var sc={},Xd;function N_(){if(Xd)return sc;Xd=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return sc.NoneSerializer=n,sc}var qd;function F_(){return qd||(qd=1,(function(n){C0();var e=U_(),t=nm(),i=Em(),r=Mm(),s=gl(),o=sm(),a=N_(),c=im();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(Xl)),Xl}var B_=F_();const Sf="179",k_=0,jd=1,z_=2,bm=1,V_=2,Li=3,_r=0,Cn=1,Jn=2,pr=0,Ts=1,Yd=2,Kd=3,Jd=4,H_=5,kr=100,G_=101,W_=102,$_=103,X_=104,q_=200,j_=201,Y_=202,K_=203,iu=204,ru=205,J_=206,Z_=207,Q_=208,ev=209,tv=210,nv=211,iv=212,rv=213,sv=214,su=0,ou=1,au=2,Os=3,lu=4,cu=5,uu=6,fu=7,Tm=0,ov=1,av=2,mr=0,lv=1,cv=2,uv=3,fv=4,dv=5,hv=6,pv=7,Am=300,Us=301,Ns=302,du=303,hu=304,yl=306,pu=1e3,Hr=1001,mu=1002,ei=1003,mv=1004,la=1005,mi=1006,oc=1007,Gr=1008,Xi=1009,wm=1010,Rm=1011,So=1012,Ef=1013,jr=1014,zi=1015,Fo=1016,Mf=1017,bf=1018,Eo=1020,Cm=35902,Pm=1021,Im=1022,Qn=1023,Mo=1026,bo=1027,Dm=1028,Tf=1029,Lm=1030,Af=1031,wf=1033,Ua=33776,Na=33777,Fa=33778,Ba=33779,gu=35840,_u=35841,vu=35842,xu=35843,yu=36196,Su=37492,Eu=37496,Mu=37808,bu=37809,Tu=37810,Au=37811,wu=37812,Ru=37813,Cu=37814,Pu=37815,Iu=37816,Du=37817,Lu=37818,Ou=37819,Uu=37820,Nu=37821,ka=36492,Fu=36494,Bu=36495,Om=36283,ku=36284,zu=36285,Vu=36286,gv=3200,_v=3201,vv=0,xv=1,lr="",Hn="srgb",Fs="srgb-linear",Ka="linear",Pt="srgb",as=7680,Zd=519,yv=512,Sv=513,Ev=514,Um=515,Mv=516,bv=517,Tv=518,Av=519,Qd=35044,eh="300 es",gi=2e3,Ja=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,Hu=180/Math.PI;function Bo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function wv(n,e){return(n%e+e)%e}function lc(n,e,t){return(1-t)*n+t*e}function io(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],f=i[r+1],d=i[r+2],u=i[r+3];const p=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=f,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(u!==y||c!==p||f!==m||d!==x){let v=1-a;const g=c*p+f*m+d*x+u*y,I=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const U=Math.sqrt(R),B=Math.atan2(U,g*I);v=Math.sin(v*B)/U,a=Math.sin(a*B)/U}const T=a*I;if(c=c*v+p*T,f=f*v+m*T,d=d*v+x*T,u=u*v+y*T,v===1-a){const U=1/Math.sqrt(c*c+f*f+d*d+u*u);c*=U,f*=U,d*=U,u*=U}}e[t]=c,e[t+1]=f,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o],p=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+d*u+c*m-f*p,e[t+1]=c*x+d*p+f*u-a*m,e[t+2]=f*x+d*m+a*p-c*u,e[t+3]=d*x-a*u-c*p-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,f=a(i/2),d=a(r/2),u=a(s/2),p=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*d*u+f*m*x,this._y=f*m*u-p*d*x,this._z=f*d*x+p*m*u,this._w=f*d*u-p*m*x;break;case"YXZ":this._x=p*d*u+f*m*x,this._y=f*m*u-p*d*x,this._z=f*d*x-p*m*u,this._w=f*d*u+p*m*x;break;case"ZXY":this._x=p*d*u-f*m*x,this._y=f*m*u+p*d*x,this._z=f*d*x+p*m*u,this._w=f*d*u-p*m*x;break;case"ZYX":this._x=p*d*u-f*m*x,this._y=f*m*u+p*d*x,this._z=f*d*x-p*m*u,this._w=f*d*u+p*m*x;break;case"YZX":this._x=p*d*u+f*m*x,this._y=f*m*u+p*d*x,this._z=f*d*x-p*m*u,this._w=f*d*u-p*m*x;break;case"XZY":this._x=p*d*u-f*m*x,this._y=f*m*u-p*d*x,this._z=f*d*x+p*m*u,this._w=f*d*u+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],f=t[2],d=t[6],u=t[10],p=i+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-f)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+f)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-f)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+f)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,f=t._z,d=t._w;return this._x=i*d+o*a+r*f-s*c,this._y=r*d+o*c+s*a-i*f,this._z=s*d+o*f+i*c-r*a,this._w=o*d-i*a-r*c-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const f=Math.sqrt(c),d=Math.atan2(f,a),u=Math.sin((1-t)*d)/f,p=Math.sin(t*d)/f;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,f=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*f+o*u-a*d,this.y=i+c*d+a*f-s*u,this.z=r+c*u+s*d-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new le,th=new ko;class ft{constructor(e,t,i,r,s,o,a,c,f){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,f)}set(e,t,i,r,s,o,a,c,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],f=i[1],d=i[4],u=i[7],p=i[2],m=i[5],x=i[8],y=r[0],v=r[3],g=r[6],I=r[1],R=r[4],T=r[7],U=r[2],B=r[5],k=r[8];return s[0]=o*y+a*I+c*U,s[3]=o*v+a*R+c*B,s[6]=o*g+a*T+c*k,s[1]=f*y+d*I+u*U,s[4]=f*v+d*R+u*B,s[7]=f*g+d*T+u*k,s[2]=p*y+m*I+x*U,s[5]=p*v+m*R+x*B,s[8]=p*g+m*T+x*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],d=e[8];return t*o*d-t*a*f-i*s*d+i*a*c+r*s*f-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],d=e[8],u=d*o-a*f,p=a*c-d*s,m=f*s-o*c,x=t*u+i*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=u*y,e[1]=(r*f-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(d*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-f*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),f=Math.sin(s);return this.set(i*c,i*f,-i*(c*o+f*a)+o+e,-r*f,r*c,-r*(-f*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new ft;function Nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rv(){const n=Za("canvas");return n.style.display="block",n}const nh={};function As(n){n in nh||(nh[n]=!0,console.warn(n))}function Cv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ih=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){const n={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?Ka:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fs]:{primaries:e,whitePoint:i,transfer:Ka,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}const Mt=Pv();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class Iv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Za("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dv=0;class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;const hc=new le;class Pn extends Gs{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Hr,r=Hr,s=mi,o=Gr,a=Qn,c=Xi,f=Pn.DEFAULT_ANISOTROPY,d=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Bo(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pu:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pu:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Am;Pn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,f=c[0],d=c[4],u=c[8],p=c[1],m=c[5],x=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+y)<.1&&Math.abs(x+v)<.1&&Math.abs(f+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(f+1)/2,T=(m+1)/2,U=(g+1)/2,B=(d+p)/4,k=(u+y)/4,J=(x+v)/4;return R>T&&R>U?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=B/i,s=k/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=B/r,s=J/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=k/s,r=J/s),this.set(i,r,s,t),this}let I=Math.sqrt((v-x)*(v-x)+(u-y)*(u-y)+(p-d)*(p-d));return Math.abs(I)<.001&&(I=1),this.x=(v-x)/I,this.y=(u-y)/I,this.z=(p-d)/I,this.w=Math.acos((f+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ov extends Gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Pn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Ov{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fm extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),ua.subVectors(this.max,ro),cs.subVectors(e.a,ro),us.subVectors(e.b,ro),fs.subVectors(e.c,ro),tr.subVectors(us,cs),nr.subVectors(fs,us),Rr.subVectors(cs,fs);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Rr.z,Rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Rr.z,0,-Rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Rr.y,Rr.x,0];return!pc(t,cs,us,fs,ua)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,cs,us,fs,ua))?!1:(fa.crossVectors(tr,nr),t=[fa.x,fa.y,fa.z],pc(t,cs,us,fs,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new le,new le,new le,new le,new le,new le,new le,new le],qn=new le,ca=new zo,cs=new le,us=new le,fs=new le,tr=new le,nr=new le,Rr=new le,ro=new le,ua=new le,fa=new le,Cr=new le;function pc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Cr.fromArray(n,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),c=e.dot(Cr),f=t.dot(Cr),d=i.dot(Cr);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>a)return!1}return!0}const Nv=new zo,so=new le,mc=new le;class Cf{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(so,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(mc)),this.expandByPoint(so.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new le,gc=new le,da=new le,ir=new le,_c=new le,ha=new le,vc=new le;class Fv{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(gc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=ir.dot(this.direction),c=-ir.dot(da),f=ir.lengthSq(),d=Math.abs(1-o*o);let u,p,m,x;if(d>0)if(u=o*c-a,p=o*a-c,x=s*d,u>=0)if(p>=-x)if(p<=x){const y=1/d;u*=y,p*=y,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+f}else p=s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+f;else p=-s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+f;else p<=-x?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+f):p<=x?(u=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+f):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+f);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gc).addScaledVector(da,p),m}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const f=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return f>=0?(i=(e.min.x-p.x)*f,r=(e.max.x-p.x)*f):(i=(e.max.x-p.x)*f,r=(e.min.x-p.x)*f),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,r,s){_c.subVectors(t,e),ha.subVectors(i,e),vc.crossVectors(_c,ha);let o=this.direction.dot(vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const c=a*this.direction.dot(ha.crossVectors(ir,ha));if(c<0)return null;const f=a*this.direction.dot(_c.cross(ir));if(f<0||c+f>o)return null;const d=-a*ir.dot(vc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,i,r,s,o,a,c,f,d,u,p,m,x,y,v){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,f,d,u,p,m,x,y,v)}set(e,t,i,r,s,o,a,c,f,d,u,p,m,x,y,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=f,g[6]=d,g[10]=u,g[14]=p,g[3]=m,g[7]=x,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),f=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=o*d,m=o*u,x=a*d,y=a*u;t[0]=c*d,t[4]=-c*u,t[8]=f,t[1]=m+x*f,t[5]=p-y*f,t[9]=-a*c,t[2]=y-p*f,t[6]=x+m*f,t[10]=o*c}else if(e.order==="YXZ"){const p=c*d,m=c*u,x=f*d,y=f*u;t[0]=p+y*a,t[4]=x*a-m,t[8]=o*f,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=y+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*d,m=c*u,x=f*d,y=f*u;t[0]=p-y*a,t[4]=-o*u,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=y-p*a,t[2]=-o*f,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*d,m=o*u,x=a*d,y=a*u;t[0]=c*d,t[4]=x*f-m,t[8]=p*f+y,t[1]=c*u,t[5]=y*f+p,t[9]=m*f-x,t[2]=-f,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*f,x=a*c,y=a*f;t[0]=c*d,t[4]=y-p*u,t[8]=x*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-f*d,t[6]=m*u+x,t[10]=p-y*u}else if(e.order==="XZY"){const p=o*c,m=o*f,x=a*c,y=a*f;t[0]=c*d,t[4]=-u,t[8]=f*d,t[1]=p*u+y,t[5]=o*d,t[9]=m*u-x,t[2]=x*u-m,t[6]=a*d,t[10]=y*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bv,e,kv)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),rr.crossVectors(i,On),rr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),rr.crossVectors(i,On)),rr.normalize(),pa.crossVectors(On,rr),r[0]=rr.x,r[4]=pa.x,r[8]=On.x,r[1]=rr.y,r[5]=pa.y,r[9]=On.y,r[2]=rr.z,r[6]=pa.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],f=i[12],d=i[1],u=i[5],p=i[9],m=i[13],x=i[2],y=i[6],v=i[10],g=i[14],I=i[3],R=i[7],T=i[11],U=i[15],B=r[0],k=r[4],J=r[8],P=r[12],C=r[1],N=r[5],ye=r[9],D=r[13],W=r[2],$=r[6],F=r[10],V=r[14],z=r[3],Se=r[7],Ee=r[11],Ce=r[15];return s[0]=o*B+a*C+c*W+f*z,s[4]=o*k+a*N+c*$+f*Se,s[8]=o*J+a*ye+c*F+f*Ee,s[12]=o*P+a*D+c*V+f*Ce,s[1]=d*B+u*C+p*W+m*z,s[5]=d*k+u*N+p*$+m*Se,s[9]=d*J+u*ye+p*F+m*Ee,s[13]=d*P+u*D+p*V+m*Ce,s[2]=x*B+y*C+v*W+g*z,s[6]=x*k+y*N+v*$+g*Se,s[10]=x*J+y*ye+v*F+g*Ee,s[14]=x*P+y*D+v*V+g*Ce,s[3]=I*B+R*C+T*W+U*z,s[7]=I*k+R*N+T*$+U*Se,s[11]=I*J+R*ye+T*F+U*Ee,s[15]=I*P+R*D+T*V+U*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],f=e[13],d=e[2],u=e[6],p=e[10],m=e[14],x=e[3],y=e[7],v=e[11],g=e[15];return x*(+s*c*u-r*f*u-s*a*p+i*f*p+r*a*m-i*c*m)+y*(+t*c*m-t*f*p+s*o*p-r*o*m+r*f*d-s*c*d)+v*(+t*f*u-t*a*m-s*o*u+i*o*m+s*a*d-i*f*d)+g*(-r*a*d-t*c*u+t*a*p+r*o*u-i*o*p+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],f=e[7],d=e[8],u=e[9],p=e[10],m=e[11],x=e[12],y=e[13],v=e[14],g=e[15],I=u*v*f-y*p*f+y*c*m-a*v*m-u*c*g+a*p*g,R=x*p*f-d*v*f-x*c*m+o*v*m+d*c*g-o*p*g,T=d*y*f-x*u*f+x*a*m-o*y*m-d*a*g+o*u*g,U=x*u*c-d*y*c-x*a*p+o*y*p+d*a*v-o*u*v,B=t*I+i*R+r*T+s*U;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=I*k,e[1]=(y*p*s-u*v*s-y*r*m+i*v*m+u*r*g-i*p*g)*k,e[2]=(a*v*s-y*c*s+y*r*f-i*v*f-a*r*g+i*c*g)*k,e[3]=(u*c*s-a*p*s-u*r*f+i*p*f+a*r*m-i*c*m)*k,e[4]=R*k,e[5]=(d*v*s-x*p*s+x*r*m-t*v*m-d*r*g+t*p*g)*k,e[6]=(x*c*s-o*v*s-x*r*f+t*v*f+o*r*g-t*c*g)*k,e[7]=(o*p*s-d*c*s+d*r*f-t*p*f-o*r*m+t*c*m)*k,e[8]=T*k,e[9]=(x*u*s-d*y*s-x*i*m+t*y*m+d*i*g-t*u*g)*k,e[10]=(o*y*s-x*a*s+x*i*f-t*y*f-o*i*g+t*a*g)*k,e[11]=(d*a*s-o*u*s-d*i*f+t*u*f+o*i*m-t*a*m)*k,e[12]=U*k,e[13]=(d*y*r-x*u*r+x*i*p-t*y*p-d*i*v+t*u*v)*k,e[14]=(x*a*r-o*y*r-x*i*c+t*y*c+o*i*v-t*a*v)*k,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*p+t*a*p)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,f=s*o,d=s*a;return this.set(f*o+i,f*a-r*c,f*c+r*a,0,f*a+r*c,d*a+i,d*c-r*o,0,f*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,f=s+s,d=o+o,u=a+a,p=s*f,m=s*d,x=s*u,y=o*d,v=o*u,g=a*u,I=c*f,R=c*d,T=c*u,U=i.x,B=i.y,k=i.z;return r[0]=(1-(y+g))*U,r[1]=(m+T)*U,r[2]=(x-R)*U,r[3]=0,r[4]=(m-T)*B,r[5]=(1-(p+g))*B,r[6]=(v+I)*B,r[7]=0,r[8]=(x+R)*k,r[9]=(v-I)*k,r[10]=(1-(p+y))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const f=1/s,d=1/o,u=1/a;return jn.elements[0]*=f,jn.elements[1]*=f,jn.elements[2]*=f,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gi,c=!1){const f=this.elements,d=2*s/(t-e),u=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let x,y;if(c)x=s/(o-s),y=o*s/(o-s);else if(a===gi)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ja)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=d,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=u,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi,c=!1){const f=this.elements,d=2/(t-e),u=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,y;if(c)x=1/(o-s),y=o/(o-s);else if(a===gi)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ja)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=d,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=u,f[9]=0,f[13]=m,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new le,jn=new Zt,Bv=new le(0,0,0),kv=new le(1,1,1),rr=new le,pa=new le,On=new le,sh=new Zt,oh=new ko;class qi{constructor(e=0,t=0,i=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],f=r[5],d=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zv=0;const ah=new le,hs=new ko,Ci=new Zt,ma=new le,oo=new le,Vv=new le,Hv=new ko,lh=new le(1,0,0),ch=new le(0,1,0),uh=new le(0,0,1),fh={type:"added"},Gv={type:"removed"},ps={type:"childadded",child:null},xc={type:"childremoved",child:null};class Bn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new le,t=new qi,i=new ko,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ft}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(oo,ma,this.up):Ci.lookAt(ma,oo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Ci),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gv),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const u=c[f];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),f=o(e.textures),d=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bn.DEFAULT_UP=new le(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new le,Pi=new le,yc=new le,Ii=new le,ms=new le,gs=new le,dh=new le,Sc=new le,Ec=new le,Mc=new le,bc=new qt,Tc=new qt,Ac=new qt;class Zn{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Pi.subVectors(i,t),yc.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Pi),c=Yn.dot(yc),f=Pi.dot(Pi),d=Pi.dot(yc),u=o*f-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(f*c-a*d)*p,x=(o*d-a*c)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return bc.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),bc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,i),Ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bc,s.x),o.addScaledVector(Tc,s.y),o.addScaledVector(Ac,s.z),o}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Pi.subVectors(e,t),Yn.cross(Pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Yn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),Sc.subVectors(e,i);const c=ms.dot(Sc),f=gs.dot(Sc);if(c<=0&&f<=0)return t.copy(i);Ec.subVectors(e,r);const d=ms.dot(Ec),u=gs.dot(Ec);if(d>=0&&u<=d)return t.copy(r);const p=c*u-d*f;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(ms,o);Mc.subVectors(e,s);const m=ms.dot(Mc),x=gs.dot(Mc);if(x>=0&&m<=x)return t.copy(s);const y=m*f-c*x;if(y<=0&&f>=0&&x<=0)return a=f/(f-x),t.copy(i).addScaledVector(gs,a);const v=d*x-m*u;if(v<=0&&u-d>=0&&m-x>=0)return dh.subVectors(s,r),a=(u-d)/(u-d+(m-x)),t.copy(r).addScaledVector(dh,a);const g=1/(v+y+p);return o=y*g,a=p*g,t.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},ga={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=wv(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wc(o,s,e+1/3),this.g=wc(o,s,e),this.b=wc(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=km[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Mt.workingToColorSpace(mn.copy(this),e),Math.round(vt(mn.r*255,0,255))*65536+Math.round(vt(mn.g*255,0,255))*256+Math.round(vt(mn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(mn.copy(this),t);const i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,f;const d=(a+o)/2;if(a===o)c=0,f=0;else{const u=o-a;switch(f=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=f,e.l=d,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Hn){Mt.workingToColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,r=mn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(ga);const i=lc(sr.h,ga.h,t),r=lc(sr.s,ga.s,t),s=lc(sr.l,ga.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Rt;Rt.NAMES=km;let Wv=0;class Sl extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Ts,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==iu&&(i.blendSrc=this.blendSrc),this.blendDst!==ru&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bs extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new le,_a=new wt;let $v=0;class yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=io(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=io(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=io(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=io(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class zm extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vm extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xv=0;const zn=new Zt,Rc=new Bn,_s=new le,Un=new zo,ao=new zo,rn=new le;class Mi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?Vm:zm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Un.min,ao.min),Un.expandByPoint(rn),rn.addVectors(Un.max,ao.max),Un.expandByPoint(rn)):(Un.expandByPoint(ao.min),Un.expandByPoint(ao.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let f=0,d=a.count;f<d;f++)rn.fromBufferAttribute(a,f),c&&(_s.fromBufferAttribute(e,f),rn.add(_s)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let J=0;J<i.count;J++)a[J]=new le,c[J]=new le;const f=new le,d=new le,u=new le,p=new wt,m=new wt,x=new wt,y=new le,v=new le;function g(J,P,C){f.fromBufferAttribute(i,J),d.fromBufferAttribute(i,P),u.fromBufferAttribute(i,C),p.fromBufferAttribute(s,J),m.fromBufferAttribute(s,P),x.fromBufferAttribute(s,C),d.sub(f),u.sub(f),m.sub(p),x.sub(p);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(N),v.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(N),a[J].add(y),a[P].add(y),a[C].add(y),c[J].add(v),c[P].add(v),c[C].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let J=0,P=I.length;J<P;++J){const C=I[J],N=C.start,ye=C.count;for(let D=N,W=N+ye;D<W;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const R=new le,T=new le,U=new le,B=new le;function k(J){U.fromBufferAttribute(r,J),B.copy(U);const P=a[J];R.copy(P),R.sub(U.multiplyScalar(U.dot(P))).normalize(),T.crossVectors(B,P);const N=T.dot(c[J])<0?-1:1;o.setXYZW(J,R.x,R.y,R.z,N)}for(let J=0,P=I.length;J<P;++J){const C=I[J],N=C.start,ye=C.count;for(let D=N,W=N+ye;D<W;D+=3)k(e.getX(D+0)),k(e.getX(D+1)),k(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new le,s=new le,o=new le,a=new le,c=new le,f=new le,d=new le,u=new le;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),y=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,v),a.add(d),c.add(d),f.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){const f=a.array,d=a.itemSize,u=a.normalized,p=new f.constructor(c.length*d);let m=0,x=0;for(let y=0,v=c.length;y<v;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*d;for(let g=0;g<d;g++)p[x++]=f[m++]}return new yi(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],f=e(c,i);t.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const c=[],f=s[a];for(let d=0,u=f.length;d<u;d++){const p=f[d],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const f=o[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let u=0,p=f.length;u<p;u++){const m=f[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const s=e.morphAttributes;for(const f in s){const d=[],u=s[f];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,d=o.length;f<d;f++){const u=o[f];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new Zt,Pr=new Fv,va=new Cf,ph=new le,xa=new le,ya=new le,Sa=new le,Cc=new le,Ea=new le,mh=new le,Ma=new le;class ln extends Bn{constructor(e=new Mi,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const d=a[c],u=s[c];d!==0&&(Cc.fromBufferAttribute(u,e),o?Ea.addScaledVector(Cc,d):Ea.addScaledVector(Cc.sub(t),d))}t.add(Ea)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(va.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(va,ph)===null||Pr.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(hh.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],g=o[v.materialIndex],I=Math.max(v.start,m.start),R=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let T=I,U=R;T<U;T+=3){const B=a.getX(T),k=a.getX(T+1),J=a.getX(T+2);r=ba(this,g,e,i,f,d,u,B,k,J),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const I=a.getX(v),R=a.getX(v+1),T=a.getX(v+2);r=ba(this,o,e,i,f,d,u,I,R,T),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],g=o[v.materialIndex],I=Math.max(v.start,m.start),R=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let T=I,U=R;T<U;T+=3){const B=T,k=T+1,J=T+2;r=ba(this,g,e,i,f,d,u,B,k,J),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const I=v,R=v+1,T=v+2;r=ba(this,o,e,i,f,d,u,I,R,T),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function qv(n,e,t,i,r,s,o,a){let c;if(e.side===Cn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===_r,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Ma);return f<t.near||f>t.far?null:{distance:f,point:Ma.clone(),object:n}}function ba(n,e,t,i,r,s,o,a,c,f){n.getVertexPosition(a,xa),n.getVertexPosition(c,ya),n.getVertexPosition(f,Sa);const d=qv(n,e,t,i,xa,ya,Sa,mh);if(d){const u=new le;Zn.getBarycoord(mh,xa,ya,Sa,u),r&&(d.uv=Zn.getInterpolatedAttribute(r,a,c,f,u,new wt)),s&&(d.uv1=Zn.getInterpolatedAttribute(s,a,c,f,u,new wt)),o&&(d.normal=Zn.getInterpolatedAttribute(o,a,c,f,u,new le),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:c,c:f,normal:new le,materialIndex:0};Zn.getNormal(xa,ya,Sa,p.normal),d.face=p,d.barycoord=u}return d}class vr extends Mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],d=[],u=[];let p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _n(f,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(u,2));function x(y,v,g,I,R,T,U,B,k,J,P){const C=T/k,N=U/J,ye=T/2,D=U/2,W=B/2,$=k+1,F=J+1;let V=0,z=0;const Se=new le;for(let Ee=0;Ee<F;Ee++){const Ce=Ee*N-D;for(let Ue=0;Ue<$;Ue++){const ct=Ue*C-ye;Se[y]=ct*I,Se[v]=Ce*R,Se[g]=W,f.push(Se.x,Se.y,Se.z),Se[y]=0,Se[v]=0,Se[g]=B>0?1:-1,d.push(Se.x,Se.y,Se.z),u.push(Ue/k),u.push(1-Ee/J),V+=1}}for(let Ee=0;Ee<J;Ee++)for(let Ce=0;Ce<k;Ce++){const Ue=p+Ce+$*Ee,ct=p+Ce+$*(Ee+1),ut=p+(Ce+1)+$*(Ee+1),ge=p+(Ce+1)+$*Ee;c.push(Ue,ct,ge),c.push(ct,ut,ge),z+=6}a.addGroup(m,z,P),m+=z,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const r in i)e[r]=i[r]}return e}function jv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Yv={clone:ks,merge:Sn};var Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gm extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new le,gh=new wt,_h=new wt;class Kn extends Gm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/f,r*=o.width/c,i*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class Zv extends Bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(vs,xs,e,t);r.layers=this.layers,this.add(r);const s=new Kn(vs,xs,e,t);s.layers=this.layers,this.add(s);const o=new Kn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new Kn(vs,xs,e,t);a.layers=this.layers,this.add(a);const c=new Kn(vs,xs,e,t);c.layers=this.layers,this.add(c);const f=new Kn(vs,xs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const f of t)this.remove(f);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,f,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Wm extends Pn{constructor(e=[],t=Us,i,r,s,o,a,c,f,d){super(e,t,i,r,s,o,a,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qv extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vr(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:pr});s.uniforms.tEquirect.value=t;const o=new ln(r,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=mi),new Zv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class _i extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,i),g=this._getHandJoint(f,y);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const d=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,x=.005;f.inputState.pinching&&p>m+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&p<=m-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tx extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ic=new le,nx=new le,ix=new ft;class Nr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ic.subVectors(i,t).cross(nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ix.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Cf,rx=new wt(.5,.5),Ta=new le;class $m{constructor(e=new Nr,t=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],f=s[3],d=s[4],u=s[5],p=s[6],m=s[7],x=s[8],y=s[9],v=s[10],g=s[11],I=s[12],R=s[13],T=s[14],U=s[15];if(r[0].setComponents(f-o,m-d,g-x,U-I).normalize(),r[1].setComponents(f+o,m+d,g+x,U+I).normalize(),r[2].setComponents(f+a,m+u,g+y,U+R).normalize(),r[3].setComponents(f-a,m-u,g-y,U-R).normalize(),i)r[4].setComponents(c,p,v,T).normalize(),r[5].setComponents(f-c,m-p,g-v,U-T).normalize();else if(r[4].setComponents(f-c,m-p,g-v,U-T).normalize(),t===gi)r[5].setComponents(f+c,m+p,g+v,U+T).normalize();else if(t===Ja)r[5].setComponents(c,p,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const t=rx.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xm extends Pn{constructor(e,t,i=jr,r,s,o,a=ei,c=ei,f,d=Mo,u=1){if(d!==Mo&&d!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,s,o,a,c,d,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class El extends Mi{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],f=new le,d=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const m=i+u/t*r;f.x=e*Math.cos(m),f.y=e*Math.sin(m),o.push(f.x,f.y,f.z),a.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new _n(o,3)),this.setAttribute("normal",new _n(a,3)),this.setAttribute("uv",new _n(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ml extends Mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),f=a+1,d=c+1,u=e/a,p=t/c,m=[],x=[],y=[],v=[];for(let g=0;g<d;g++){const I=g*p-o;for(let R=0;R<f;R++){const T=R*u-s;x.push(T,-I,0),y.push(0,0,1),v.push(R/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let I=0;I<a;I++){const R=I+f*g,T=I+f*(g+1),U=I+1+f*(g+1),B=I+1+f*g;m.push(R,T,B),m.push(T,U,B)}this.setIndex(m),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(y,3)),this.setAttribute("uv",new _n(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends Mi{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],f=[],d=[];let u=e;const p=(t-e)/r,m=new le,x=new wt;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const g=s+v/i*o;m.x=u*Math.cos(g),m.y=u*Math.sin(g),c.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,d.push(x.x,x.y)}u+=p}for(let y=0;y<r;y++){const v=y*(i+1);for(let g=0;g<i;g++){const I=g+v,R=I,T=I+i+1,U=I+i+2,B=I+1;a.push(R,T,B),a.push(T,U,B)}}this.setIndex(a),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(f,3)),this.setAttribute("uv",new _n(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pf extends Mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let f=0;const d=[],u=new le,p=new le,m=[],x=[],y=[],v=[];for(let g=0;g<=i;g++){const I=[],R=g/i;let T=0;g===0&&o===0?T=.5/t:g===i&&c===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){const B=U/t;u.x=-e*Math.cos(r+B*s)*Math.sin(o+R*a),u.y=e*Math.cos(o+R*a),u.z=e*Math.sin(r+B*s)*Math.sin(o+R*a),x.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),v.push(B+T,1-R),I.push(f++)}d.push(I)}for(let g=0;g<i;g++)for(let I=0;I<t;I++){const R=d[g][I+1],T=d[g][I],U=d[g+1][I],B=d[g+1][I+1];(g!==0||o>0)&&m.push(R,T,B),(g!==i-1||c<Math.PI)&&m.push(T,U,B)}this.setIndex(m),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(y,3)),this.setAttribute("uv",new _n(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sx extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qm extends Gm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ax extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function vh(n,e,t,i){const r=lx(i);switch(t){case Pm:return n*e;case Dm:return n*e/r.components*r.byteLength;case Tf:return n*e/r.components*r.byteLength;case Lm:return n*e*2/r.components*r.byteLength;case Af:return n*e*2/r.components*r.byteLength;case Im:return n*e*3/r.components*r.byteLength;case Qn:return n*e*4/r.components*r.byteLength;case wf:return n*e*4/r.components*r.byteLength;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:case xu:return Math.max(n,16)*Math.max(e,8)/4;case gu:case vu:return Math.max(n,8)*Math.max(e,8)/2;case yu:case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ka:case Fu:case Bu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Om:case ku:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zu:case Vu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lx(n){switch(n){case Xi:case wm:return{byteLength:1,components:1};case So:case Rm:case Fo:return{byteLength:2,components:1};case Mf:case bf:return{byteLength:2,components:4};case jr:case Ef:case zi:return{byteLength:4,components:1};case Cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sf);function jm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cx(n){const e=new WeakMap;function t(a,c){const f=a.array,d=a.usage,u=f.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),a.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)m=n.HALF_FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,f){const d=c.array,u=c.updateRanges;if(n.bindBuffer(f,a),u.length===0)n.bufferSubData(f,0,d);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){const x=u[p],y=u[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,u[p]=y)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){const y=u[m];n.bufferSubData(f,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=e.get(a);if(f===void 0)e.set(a,t(a,c));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,c),f.version=a.version}}return{get:r,remove:s,update:o}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lx=`#define PI 3.141592653589793
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
} // validated`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
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
}`,cy=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,bS=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,wS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,OS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,NS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,BS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,zS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ux,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:Sx,bsdfs:Ex,iridescence_fragment:Mx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Rx,color_fragment:Cx,color_pars_fragment:Px,color_pars_vertex:Ix,color_vertex:Dx,common:Lx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Nx,displacementmap_vertex:Fx,emissivemap_fragment:Bx,emissivemap_pars_fragment:kx,colorspace_fragment:zx,colorspace_pars_fragment:Vx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ny,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:jx,fog_fragment:Yx,fog_pars_fragment:Kx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:fy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:_y,map_particle_fragment:vy,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:Ey,morphcolor_vertex:My,morphnormal_vertex:by,morphtarget_pars_vertex:Ty,morphtarget_vertex:Ay,normal_fragment_begin:wy,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:Py,normal_vertex:Iy,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Ny,opaque_fragment:Fy,packing:By,premultiplied_alpha_fragment:ky,project_vertex:zy,dithering_fragment:Vy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:jy,skinbase_vertex:Yy,skinning_pars_vertex:Ky,skinning_vertex:Jy,skinnormal_vertex:Zy,specularmap_fragment:Qy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:xS,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:ES,meshbasic_vert:MS,meshbasic_frag:bS,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:wS,meshmatcap_frag:RS,meshnormal_vert:CS,meshnormal_frag:PS,meshphong_vert:IS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:OS,meshtoon_vert:US,meshtoon_frag:NS,points_vert:FS,points_frag:BS,shadow_vert:kS,shadow_frag:zS,sprite_vert:VS,sprite_frag:HS},Ge={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},fi={basic:{uniforms:Sn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Sn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Sn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Sn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Sn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Sn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Sn([Ge.points,Ge.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Sn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Sn([Ge.common,Ge.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Sn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Sn([Ge.sprite,Ge.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Sn([Ge.common,Ge.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Sn([Ge.lights,Ge.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};fi.physical={uniforms:Sn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Aa={r:0,b:0,g:0},Dr=new qi,GS=new Zt;function WS(n,e,t,i,r,s,o){const a=new Rt(0);let c=s===!0?0:1,f,d,u=null,p=0,m=null;function x(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function y(R){let T=!1;const U=x(R);U===null?g(a,c):U&&U.isColor&&(g(U,1),T=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(R,T){const U=x(T);U&&(U.isCubeTexture||U.mapping===yl)?(d===void 0&&(d=new ln(new vr(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:ks(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,k,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Dr.copy(T.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Dr)),d.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Pt,(u!==U||p!==U.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,u=U,p=U.version,m=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new ln(new Ml(2,2),new xr({name:"BackgroundMaterial",uniforms:ks(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Pt,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(u!==U||p!==U.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,u=U,p=U.version,m=n.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function g(R,T){R.getRGB(Aa,Hm(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,T,o)}function I(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),c=T,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,g(a,c)},render:y,addToRenderList:v,dispose:I}}function $S(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(C,N,ye,D,W){let $=!1;const F=u(D,ye,N);s!==F&&(s=F,f(s.object)),$=m(C,D,ye,W),$&&x(C,D,ye,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(C,N,ye,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function f(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function u(C,N,ye){const D=ye.wireframe===!0;let W=i[C.id];W===void 0&&(W={},i[C.id]=W);let $=W[N.id];$===void 0&&($={},W[N.id]=$);let F=$[D];return F===void 0&&(F=p(c()),$[D]=F),F}function p(C){const N=[],ye=[],D=[];for(let W=0;W<t;W++)N[W]=0,ye[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ye,attributeDivisors:D,object:C,attributes:{},index:null}}function m(C,N,ye,D){const W=s.attributes,$=N.attributes;let F=0;const V=ye.getAttributes();for(const z in V)if(V[z].location>=0){const Ee=W[z];let Ce=$[z];if(Ce===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;F++}return s.attributesNum!==F||s.index!==D}function x(C,N,ye,D){const W={},$=N.attributes;let F=0;const V=ye.getAttributes();for(const z in V)if(V[z].location>=0){let Ee=$[z];Ee===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),W[z]=Ce,F++}s.attributes=W,s.attributesNum=F,s.index=D}function y(){const C=s.newAttributes;for(let N=0,ye=C.length;N<ye;N++)C[N]=0}function v(C){g(C,0)}function g(C,N){const ye=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;ye[C]=1,D[C]===0&&(n.enableVertexAttribArray(C),D[C]=1),W[C]!==N&&(n.vertexAttribDivisor(C,N),W[C]=N)}function I(){const C=s.newAttributes,N=s.enabledAttributes;for(let ye=0,D=N.length;ye<D;ye++)N[ye]!==C[ye]&&(n.disableVertexAttribArray(ye),N[ye]=0)}function R(C,N,ye,D,W,$,F){F===!0?n.vertexAttribIPointer(C,N,ye,W,$):n.vertexAttribPointer(C,N,ye,D,W,$)}function T(C,N,ye,D){y();const W=D.attributes,$=ye.getAttributes(),F=N.defaultAttributeValues;for(const V in $){const z=$[V];if(z.location>=0){let Se=W[V];if(Se===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const Ee=Se.normalized,Ce=Se.itemSize,Ue=e.get(Se);if(Ue===void 0)continue;const ct=Ue.buffer,ut=Ue.type,ge=Ue.bytesPerElement,Ne=ut===n.INT||ut===n.UNSIGNED_INT||Se.gpuType===Ef;if(Se.isInterleavedBufferAttribute){const Ie=Se.data,Qe=Ie.stride,nt=Se.offset;if(Ie.isInstancedInterleavedBuffer){for(let it=0;it<z.locationSize;it++)g(z.location+it,Ie.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let it=0;it<z.locationSize;it++)v(z.location+it);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let it=0;it<z.locationSize;it++)R(z.location+it,Ce/z.locationSize,ut,Ee,Qe*ge,(nt+Ce/z.locationSize*it)*ge,Ne)}else{if(Se.isInstancedBufferAttribute){for(let Ie=0;Ie<z.locationSize;Ie++)g(z.location+Ie,Se.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)v(z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Ie=0;Ie<z.locationSize;Ie++)R(z.location+Ie,Ce/z.locationSize,ut,Ee,Ce*ge,Ce/z.locationSize*Ie*ge,Ne)}}else if(F!==void 0){const Ee=F[V];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(z.location,Ee);break;case 3:n.vertexAttrib3fv(z.location,Ee);break;case 4:n.vertexAttrib4fv(z.location,Ee);break;default:n.vertexAttrib1fv(z.location,Ee)}}}}I()}function U(){J();for(const C in i){const N=i[C];for(const ye in N){const D=N[ye];for(const W in D)d(D[W].object),delete D[W];delete N[ye]}delete i[C]}}function B(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const ye in N){const D=N[ye];for(const W in D)d(D[W].object),delete D[W];delete N[ye]}delete i[C.id]}function k(C){for(const N in i){const ye=i[N];if(ye[C.id]===void 0)continue;const D=ye[C.id];for(const W in D)d(D[W].object),delete D[W];delete ye[C.id]}}function J(){P(),o=!0,s!==r&&(s=r,f(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:J,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:v,disableUnusedAttributes:I}}function XS(n,e,t){let i;function r(f){i=f}function s(f,d){n.drawArrays(i,f,d),t.update(d,i,1)}function o(f,d,u){u!==0&&(n.drawArraysInstanced(i,f,d,u),t.update(d,i,u))}function a(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];t.update(m,i,1)}function c(f,d,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f.length;x++)o(f[x],d[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(i,f,0,d,0,p,0,u);let x=0;for(let y=0;y<u;y++)x+=d[y]*p[y];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(k){return!(k!==Qn&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){const J=k===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Xi&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==zi&&!J)}function c(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=c(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:U,maxSamples:B}}function jS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nr,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||r;return r=p,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,m){const x=u.clippingPlanes,y=u.clipIntersection,v=u.clipShadows,g=n.get(u);if(!r||x===null||x.length===0||s&&!v)s?d(null):f();else{const I=s?0:i,R=I*4;let T=g.clippingState||null;c.value=T,T=d(x,p,R,m);for(let U=0;U!==R;++U)T[U]=t[U];g.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=I}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,p,m,x){const y=u!==null?u.length:0;let v=null;if(y!==0){if(v=c.value,x!==!0||v===null){const g=m+y*4,I=p.matrixWorldInverse;a.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let R=0,T=m;R!==y;++R,T+=4)o.copy(u[R]).applyMatrix4(I,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function YS(n){let e=new WeakMap;function t(o,a){return a===du?o.mapping=Us:a===hu&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===du||a===hu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new Qv(c.height);return f.fromEquirectangularTexture(n,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const bs=4,xh=[.125,.215,.35,.446,.526,.582],zr=20,Dc=new qm,yh=new Rt;let Lc=null,Oc=0,Uc=0,Nc=!1;const Fr=(1+Math.sqrt(5))/2,ys=1/Fr,Sh=[new le(-Fr,ys,0),new le(Fr,ys,0),new le(-ys,0,Fr),new le(ys,0,Fr),new le(0,Fr,-ys),new le(0,Fr,ys),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],KS=new le;class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=KS}=s;Lc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Oc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Fo,format:Qn,colorSpace:Fs,depthBuffer:!1},r=Mh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JS(s)),this._blurMaterial=ZS(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,i,r,s){const c=new Kn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(yh),u.toneMapping=mr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const y=new Bs({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),v=new ln(new vr,y);let g=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,g=!0):(y.color.copy(yh),g=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(c.up.set(0,f[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[R],s.y,s.z)):T===1?(c.up.set(0,0,f[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[R],s.z)):(c.up.set(0,f[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[R]));const U=this._cubeSize;wa(r,T*U,R>2?U:0,U,U),u.setRenderTarget(r),g&&u.render(v,c),u.render(e,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Us||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;wa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sh[(r-s-1)%Sh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new ln(this._lodPlanes[r],f),p=f.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zr-1),y=s/x,v=isFinite(s)?1+Math.floor(d*y):zr;v>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zr}`);const g=[];let I=0;for(let k=0;k<zr;++k){const J=k/y,P=Math.exp(-J*J/2);g.push(P),k===0?I+=P:k<v&&(I+=2*P)}for(let k=0;k<g.length;k++)g[k]=g[k]/I;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=g,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:R}=this;p.dTheta.value=x,p.mipInt.value=R-i;const T=this._sizeLods[r],U=3*T*(r>R-bs?r-R+bs:0),B=4*(this._cubeSize-T);wa(t,U,B,3*T,2*T),c.setRenderTarget(t),c.render(u,Dc)}}function JS(n){const e=[],t=[],i=[];let r=n;const s=n-bs+1+xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-bs?c=xh[o-n+bs-1]:o===0&&(c=0),i.push(c);const f=1/(a-2),d=-f,u=1+f,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,x=6,y=3,v=2,g=1,I=new Float32Array(y*x*m),R=new Float32Array(v*x*m),T=new Float32Array(g*x*m);for(let B=0;B<m;B++){const k=B%3*2/3-1,J=B>2?0:-1,P=[k,J,0,k+2/3,J,0,k+2/3,J+1,0,k,J,0,k+2/3,J+1,0,k,J+1,0];I.set(P,y*x*B),R.set(p,v*x*B);const C=[B,B,B,B,B,B];T.set(C,g*x*B)}const U=new Mi;U.setAttribute("position",new yi(I,y)),U.setAttribute("uv",new yi(R,v)),U.setAttribute("faceIndex",new yi(T,g)),e.push(U),r>bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mh(n,e,t){const i=new Yr(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ZS(n,e,t){const i=new Float32Array(zr),r=new le(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:If(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function bh(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Th(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}function QS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,f=c===du||c===hu,d=c===Us||c===Ns;if(f||d){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Eh(n)),u=f?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return f&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Eh(n)),u=f?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const f=6;for(let d=0;d<f;d++)a[d]!==void 0&&c++;return c===f}function s(a){const c=a.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tE(n,e,t,i){const r={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function f(u){const p=[],m=u.index,x=u.attributes.position;let y=0;if(m!==null){const I=m.array;y=m.version;for(let R=0,T=I.length;R<T;R+=3){const U=I[R+0],B=I[R+1],k=I[R+2];p.push(U,B,B,k,k,U)}}else if(x!==void 0){const I=x.array;y=x.version;for(let R=0,T=I.length/3-1;R<T;R+=3){const U=R+0,B=R+1,k=R+2;p.push(U,B,B,k,k,U)}}else return;const v=new(Nm(p)?Vm:zm)(p,1);v.version=y;const g=s.get(u);g&&e.remove(g),s.set(u,v)}function d(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&f(u)}else f(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function nE(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,m){n.drawElements(i,m,s,p*o),t.update(m,i,1)}function f(p,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,p*o,x),t.update(m,i,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,x);let v=0;for(let g=0;g<x;g++)v+=m[g];t.update(v,i,1)}function u(p,m,x,y){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<p.length;g++)f(p[g]/o,m[g],y[g]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,y,0,x);let g=0;for(let I=0;I<x;I++)g+=m[I]*y[I];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function iE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rE(n,e,t){const i=new WeakMap,r=new qt;function s(o,a,c){const f=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==u){let C=function(){J.dispose(),i.delete(a),a.removeEventListener("dispose",C)};var m=C;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],I=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let T=0;x===!0&&(T=1),y===!0&&(T=2),v===!0&&(T=3);let U=a.attributes.position.count*T,B=1;U>e.maxTextureSize&&(B=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const k=new Float32Array(U*B*4*u),J=new Fm(k,U,B,u);J.type=zi,J.needsUpdate=!0;const P=T*4;for(let N=0;N<u;N++){const ye=g[N],D=I[N],W=R[N],$=U*B*4*N;for(let F=0;F<ye.count;F++){const V=F*P;x===!0&&(r.fromBufferAttribute(ye,F),k[$+V+0]=r.x,k[$+V+1]=r.y,k[$+V+2]=r.z,k[$+V+3]=0),y===!0&&(r.fromBufferAttribute(D,F),k[$+V+4]=r.x,k[$+V+5]=r.y,k[$+V+6]=r.z,k[$+V+7]=0),v===!0&&(r.fromBufferAttribute(W,F),k[$+V+8]=r.x,k[$+V+9]=r.y,k[$+V+10]=r.z,k[$+V+11]=W.itemSize===4?r.w:1)}}p={count:u,texture:J,size:new wt(U,B)},i.set(a,p),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let v=0;v<f.length;v++)x+=f[v];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",f)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function sE(n,e,t,i){let r=new WeakMap;function s(c){const f=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return u}function o(){r=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Ym=new Pn,Ah=new Xm(1,1),Km=new Fm,Jm=new Uv,Zm=new Wm,wh=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wh[r];if(s===void 0&&(s=new Float32Array(r),wh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function lE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function cE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function uE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ih.set(i),n.uniformMatrix2fv(this.addr,!1,Ih),tn(t,i)}}function fE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),tn(t,i)}}function dE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),tn(t,i)}}function hE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function mE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function gE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function _E(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function yE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function SE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ah.compareFunction=Um,s=Ah):s=Ym,t.setTexture2D(e||s,r)}function EE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jm,r)}function ME(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zm,r)}function bE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Km,r)}function TE(n){switch(n){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return hE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return _E;case 36294:return vE;case 36295:return xE;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return bE}}function AE(n,e){n.uniform1fv(this.addr,e)}function wE(n,e){const t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function RE(n,e){const t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function CE(n,e){const t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function PE(n,e){const t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IE(n,e){const t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DE(n,e){const t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LE(n,e){n.uniform1iv(this.addr,e)}function OE(n,e){n.uniform2iv(this.addr,e)}function UE(n,e){n.uniform3iv(this.addr,e)}function NE(n,e){n.uniform4iv(this.addr,e)}function FE(n,e){n.uniform1uiv(this.addr,e)}function BE(n,e){n.uniform2uiv(this.addr,e)}function kE(n,e){n.uniform3uiv(this.addr,e)}function zE(n,e){n.uniform4uiv(this.addr,e)}function VE(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ym,s[o])}function HE(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jm,s[o])}function GE(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zm,s[o])}function WE(n,e,t){const i=this.cache,r=e.length,s=Tl(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Km,s[o])}function $E(n){switch(n){case 5126:return AE;case 35664:return wE;case 35665:return RE;case 35666:return CE;case 35674:return PE;case 35675:return IE;case 35676:return DE;case 5124:case 35670:return LE;case 35667:case 35671:return OE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return FE;case 36294:return BE;case 36295:return kE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}class XE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TE(t.type)}}class qE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$E(t.type)}}class jE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Dh(n,e){n.seq.push(e),n.map[e.id]=e}function YE(n,e,t){const i=n.name,r=i.length;for(Fc.lastIndex=0;;){const s=Fc.exec(i),o=Fc.lastIndex;let a=s[1];const c=s[2]==="]",f=s[3];if(c&&(a=a|0),f===void 0||f==="["&&o+2===r){Dh(t,f===void 0?new XE(a,n,e):new qE(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new jE(a),Dh(t,u)),t=u}}}class za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KE=37297;let JE=0;function ZE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Oh=new ft;function QE(n){Mt._getMatrix(Oh,Mt.workingColorSpace,n);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Ka:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ZE(n.getShaderSource(e),a)}else return s}function eM(n,e){const t=QE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tM(n,e){let t;switch(e){case lv:t="Linear";break;case cv:t="Reinhard";break;case uv:t="Cineon";break;case fv:t="ACESFilmic";break;case hv:t="AgX";break;case pv:t="Neutral";break;case dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new le;function nM(){Mt.getLuminanceCoefficients(Ra);const n=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function rM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fo(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(n){return n.replace(oM,lM)}const aM=new Map;function lM(n,e){let t=pt[e];if(t===void 0){const i=aM.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gu(t)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(cM,uM)}function uM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function fM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function dM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function pM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tm:e="ENVMAP_BLENDING_MULTIPLY";break;case ov:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function mM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fM(t),f=dM(t),d=hM(t),u=pM(t),p=mM(t),m=iM(t),x=rM(s),y=r.createProgram();let v,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),g.length>0&&(g+=`
`)):(v=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),g=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?pt.tonemapping_pars_fragment:"",t.toneMapping!==mr?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),nM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Gu(o),o=Nh(o,t),o=Fh(o,t),a=Gu(a),a=Nh(a,t),a=Fh(a,t),o=Bh(o),a=Bh(a),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=I+v+o,T=I+g+a,U=Lh(r,r.VERTEX_SHADER,R),B=Lh(r,r.FRAGMENT_SHADER,T);r.attachShader(y,U),r.attachShader(y,B),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function k(N){if(n.debug.checkShaderErrors){const ye=r.getProgramInfoLog(y)||"",D=r.getShaderInfoLog(U)||"",W=r.getShaderInfoLog(B)||"",$=ye.trim(),F=D.trim(),V=W.trim();let z=!0,Se=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,U,B);else{const Ee=Uh(r,U,"vertex"),Ce=Uh(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+Ee+`
`+Ce)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||V==="")&&(Se=!1);Se&&(N.diagnostics={runnable:z,programLog:$,vertexShader:{log:F,prefix:v},fragmentShader:{log:V,prefix:g}})}r.deleteShader(U),r.deleteShader(B),J=new za(r,y),P=sM(r,y)}let J;this.getUniforms=function(){return J===void 0&&k(this),J};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(y,KE)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=B,this}let _M=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xM(e),t.set(e,i)),i}}class xM{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}}function yM(n,e,t,i,r,s,o){const a=new Bm,c=new vM,f=new Set,d=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(P){return f.add(P),P===0?"uv":`uv${P}`}function v(P,C,N,ye,D){const W=ye.fog,$=D.geometry,F=P.isMeshStandardMaterial?ye.environment:null,V=(P.isMeshStandardMaterial?t:e).get(P.envMap||F),z=V&&V.mapping===yl?V.image.height:null,Se=x[P.type];P.precision!==null&&(m=r.getMaxPrecision(P.precision),m!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",m,"instead."));const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let Ue=0;$.morphAttributes.position!==void 0&&(Ue=1),$.morphAttributes.normal!==void 0&&(Ue=2),$.morphAttributes.color!==void 0&&(Ue=3);let ct,ut,ge,Ne;if(Se){const yt=fi[Se];ct=yt.vertexShader,ut=yt.fragmentShader}else ct=P.vertexShader,ut=P.fragmentShader,c.update(P),ge=c.getVertexShaderID(P),Ne=c.getFragmentShaderID(P);const Ie=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),nt=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,zt=!!P.map,L=!!P.matcap,M=!!V,ee=!!P.aoMap,re=!!P.lightMap,fe=!!P.bumpMap,Z=!!P.normalMap,Me=!!P.displacementMap,se=!!P.emissiveMap,de=!!P.metalnessMap,_e=!!P.roughnessMap,He=P.anisotropy>0,A=P.clearcoat>0,S=P.dispersion>0,H=P.iridescence>0,te=P.sheen>0,ve=P.transmission>0,ne=He&&!!P.anisotropyMap,Fe=A&&!!P.clearcoatMap,be=A&&!!P.clearcoatNormalMap,Je=A&&!!P.clearcoatRoughnessMap,Oe=H&&!!P.iridescenceMap,Ae=H&&!!P.iridescenceThicknessMap,ze=te&&!!P.sheenColorMap,qe=te&&!!P.sheenRoughnessMap,Ke=!!P.specularMap,Be=!!P.specularColorMap,rt=!!P.specularIntensityMap,G=ve&&!!P.transmissionMap,De=ve&&!!P.thicknessMap,Re=!!P.gradientMap,je=!!P.alphaMap,we=P.alphaTest>0,xe=!!P.alphaHash,tt=!!P.extensions;let at=mr;P.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(at=n.toneMapping);const bt={shaderID:Se,shaderType:P.type,shaderName:P.name,vertexShader:ct,fragmentShader:ut,defines:P.defines,customVertexShaderID:ge,customFragmentShaderID:Ne,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:m,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Fs,alphaToCoverage:!!P.alphaToCoverage,map:zt,matcap:L,envMap:M,envMapMode:M&&V.mapping,envMapCubeUVHeight:z,aoMap:ee,lightMap:re,bumpMap:fe,normalMap:Z,displacementMap:p&&Me,emissiveMap:se,normalMapObjectSpace:Z&&P.normalMapType===xv,normalMapTangentSpace:Z&&P.normalMapType===vv,metalnessMap:de,roughnessMap:_e,anisotropy:He,anisotropyMap:ne,clearcoat:A,clearcoatMap:Fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Je,dispersion:S,iridescence:H,iridescenceMap:Oe,iridescenceThicknessMap:Ae,sheen:te,sheenColorMap:ze,sheenRoughnessMap:qe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:rt,transmission:ve,transmissionMap:G,thicknessMap:De,gradientMap:Re,opaque:P.transparent===!1&&P.blending===Ts&&P.alphaToCoverage===!1,alphaMap:je,alphaTest:we,alphaHash:xe,combine:P.combine,mapUv:zt&&y(P.map.channel),aoMapUv:ee&&y(P.aoMap.channel),lightMapUv:re&&y(P.lightMap.channel),bumpMapUv:fe&&y(P.bumpMap.channel),normalMapUv:Z&&y(P.normalMap.channel),displacementMapUv:Me&&y(P.displacementMap.channel),emissiveMapUv:se&&y(P.emissiveMap.channel),metalnessMapUv:de&&y(P.metalnessMap.channel),roughnessMapUv:_e&&y(P.roughnessMap.channel),anisotropyMapUv:ne&&y(P.anisotropyMap.channel),clearcoatMapUv:Fe&&y(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&y(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&y(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(P.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(P.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(P.sheenRoughnessMap.channel),specularMapUv:Ke&&y(P.specularMap.channel),specularColorMapUv:Be&&y(P.specularColorMap.channel),specularIntensityMapUv:rt&&y(P.specularIntensityMap.channel),transmissionMapUv:G&&y(P.transmissionMap.channel),thicknessMapUv:De&&y(P.thicknessMap.channel),alphaMapUv:je&&y(P.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Z||He),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(zt||je),fog:!!W,useFog:P.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Qe,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:zt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:se&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Jn,flipSided:P.side===Cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:tt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&P.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return bt.vertexUv1s=f.has(1),bt.vertexUv2s=f.has(2),bt.vertexUv3s=f.has(3),f.clear(),bt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const N in P.defines)C.push(N),C.push(P.defines[N]);return P.isRawShaderMaterial===!1&&(I(C,P),R(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function I(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function R(P,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),P.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),P.push(a.mask)}function T(P){const C=x[P.type];let N;if(C){const ye=fi[C];N=Yv.clone(ye.uniforms)}else N=P.uniforms;return N}function U(P,C){let N;for(let ye=0,D=d.length;ye<D;ye++){const W=d[ye];if(W.cacheKey===C){N=W,++N.usedTimes;break}}return N===void 0&&(N=new gM(n,C,P,s),d.push(N)),N}function B(P){if(--P.usedTimes===0){const C=d.indexOf(P);d[C]=d[d.length-1],d.pop(),P.destroy()}}function k(P){c.remove(P)}function J(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:U,releaseProgram:B,releaseShaderCache:k,programs:d,dispose:J}}function SM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function EM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,p,m,x,y,v){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:y,group:v},n[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=m,g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=y,g.group=v),e++,g}function a(u,p,m,x,y,v){const g=o(u,p,m,x,y,v);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(u,p,m,x,y,v){const g=o(u,p,m,x,y,v);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function f(u,p){t.length>1&&t.sort(u||EM),i.length>1&&i.sort(p||zh),r.length>1&&r.sort(p||zh)}function d(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:f}}function MM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vh,n.set(i,[o])):r>=s.length?(o=new Vh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Rt};break;case"SpotLight":t={position:new le,direction:new le,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function TM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AM=0;function wM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RM(n){const e=new bM,t=TM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new le);const r=new le,s=new Zt,o=new Zt;function a(f){let d=0,u=0,p=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let m=0,x=0,y=0,v=0,g=0,I=0,R=0,T=0,U=0,B=0,k=0;f.sort(wM);for(let P=0,C=f.length;P<C;P++){const N=f[P],ye=N.color,D=N.intensity,W=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=ye.r*D,u+=ye.g*D,p+=ye.b*D;else if(N.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(N.sh.coefficients[F],D);k++}else if(N.isDirectionalLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const V=N.shadow,z=t.get(N);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=N.shadow.matrix,I++}i.directional[m]=F,m++}else if(N.isSpotLight){const F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(ye).multiplyScalar(D),F.distance=W,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,i.spot[y]=F;const V=N.shadow;if(N.map&&(i.spotLightMap[U]=N.map,U++,V.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[y]=V.matrix,N.castShadow){const z=t.get(N);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=$,T++}y++}else if(N.isRectAreaLight){const F=e.get(N);F.color.copy(ye).multiplyScalar(D),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=F,v++}else if(N.isPointLight){const F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const V=N.shadow,z=t.get(N);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=$,i.pointShadowMatrix[x]=N.shadow.matrix,R++}i.point[x]=F,x++}else if(N.isHemisphereLight){const F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(D),F.groundColor.copy(N.groundColor).multiplyScalar(D),i.hemi[g]=F,g++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=p;const J=i.hash;(J.directionalLength!==m||J.pointLength!==x||J.spotLength!==y||J.rectAreaLength!==v||J.hemiLength!==g||J.numDirectionalShadows!==I||J.numPointShadows!==R||J.numSpotShadows!==T||J.numSpotMaps!==U||J.numLightProbes!==k)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+U-B,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=k,J.directionalLength=m,J.pointLength=x,J.spotLength=y,J.rectAreaLength=v,J.hemiLength=g,J.numDirectionalShadows=I,J.numPointShadows=R,J.numSpotShadows=T,J.numSpotMaps=U,J.numLightProbes=k,i.version=AM++)}function c(f,d){let u=0,p=0,m=0,x=0,y=0;const v=d.matrixWorldInverse;for(let g=0,I=f.length;g<I;g++){const R=f[g];if(R.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),u++}else if(R.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),m++}else if(R.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(v),o.identity(),s.copy(R.matrixWorld),s.premultiply(v),o.extractRotation(s),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(R.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(v),p++}else if(R.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(v),y++}}}return{setup:a,setupView:c,state:i}}function Hh(n){const e=new RM(n),t=[],i=[];function r(d){f.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function CM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hh(n),e.set(r,[a])):s>=o.length?(a=new Hh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`;function DM(n,e,t){let i=new $m;const r=new wt,s=new wt,o=new qt,a=new sx({depthPacking:_v}),c=new ox,f={},d=t.maxTextureSize,u={[_r]:Cn,[Cn]:_r,[Jn]:Jn},p=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:PM,fragmentShader:IM}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mi;x.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ln(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bm;let g=this.type;this.render=function(B,k,J){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ye=n.state;ye.setBlending(pr),ye.buffers.depth.getReversed()?ye.buffers.color.setClear(0,0,0,0):ye.buffers.color.setClear(1,1,1,1),ye.buffers.depth.setTest(!0),ye.setScissorTest(!1);const D=g!==Li&&this.type===Li,W=g===Li&&this.type!==Li;for(let $=0,F=B.length;$<F;$++){const V=B[$],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Se=z.getFrameExtents();if(r.multiply(Se),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Se.x),r.x=s.x*Se.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Se.y),r.y=s.y*Se.y,z.mapSize.y=s.y)),z.map===null||D===!0||W===!0){const Ce=this.type!==Li?{minFilter:ei,magFilter:ei}:{};z.map!==null&&z.map.dispose(),z.map=new Yr(r.x,r.y,Ce),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Ee=z.getViewportCount();for(let Ce=0;Ce<Ee;Ce++){const Ue=z.getViewport(Ce);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),ye.viewport(o),z.updateMatrices(V,Ce),i=z.getFrustum(),T(k,J,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Li&&I(z,J),z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(P,C,N)};function I(B,k){const J=e.update(y);p.defines.VSM_SAMPLES!==B.blurSamples&&(p.defines.VSM_SAMPLES=B.blurSamples,m.defines.VSM_SAMPLES=B.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yr(r.x,r.y)),p.uniforms.shadow_pass.value=B.map.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(k,null,J,p,y,null),m.uniforms.shadow_pass.value=B.mapPass.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(k,null,J,m,y,null)}function R(B,k,J,P){let C=null;const N=J.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)C=N;else if(C=J.isPointLight===!0?c:a,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ye=C.uuid,D=k.uuid;let W=f[ye];W===void 0&&(W={},f[ye]=W);let $=W[D];$===void 0&&($=C.clone(),W[D]=$,k.addEventListener("dispose",U)),C=$}if(C.visible=k.visible,C.wireframe=k.wireframe,P===Li?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:u[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ye=n.properties.get(C);ye.light=J}return C}function T(B,k,J,P,C){if(B.visible===!1)return;if(B.layers.test(k.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Li)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,B.matrixWorld);const D=e.update(B),W=B.material;if(Array.isArray(W)){const $=D.groups;for(let F=0,V=$.length;F<V;F++){const z=$[F],Se=W[z.materialIndex];if(Se&&Se.visible){const Ee=R(B,Se,P,C);B.onBeforeShadow(n,B,k,J,D,Ee,z),n.renderBufferDirect(J,null,D,Ee,B,z),B.onAfterShadow(n,B,k,J,D,Ee,z)}}}else if(W.visible){const $=R(B,W,P,C);B.onBeforeShadow(n,B,k,J,D,$,null),n.renderBufferDirect(J,null,D,$,B,null),B.onAfterShadow(n,B,k,J,D,$,null)}}const ye=B.children;for(let D=0,W=ye.length;D<W;D++)T(ye[D],k,J,P,C)}function U(B){B.target.removeEventListener("dispose",U);for(const J in f){const P=f[J],C=B.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const LM={[su]:ou,[au]:uu,[lu]:fu,[Os]:cu,[ou]:su,[uu]:au,[fu]:lu,[cu]:Os};function OM(n,e){function t(){let G=!1;const De=new qt;let Re=null;const je=new qt(0,0,0,0);return{setMask:function(we){Re!==we&&!G&&(n.colorMask(we,we,we,we),Re=we)},setLocked:function(we){G=we},setClear:function(we,xe,tt,at,bt){bt===!0&&(we*=at,xe*=at,tt*=at),De.set(we,xe,tt,at),je.equals(De)===!1&&(n.clearColor(we,xe,tt,at),je.copy(De))},reset:function(){G=!1,Re=null,je.set(-1,0,0,0)}}}function i(){let G=!1,De=!1,Re=null,je=null,we=null;return{setReversed:function(xe){if(De!==xe){const tt=e.get("EXT_clip_control");xe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const at=we;we=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(xe){xe?Ie(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(xe){Re!==xe&&!G&&(n.depthMask(xe),Re=xe)},setFunc:function(xe){if(De&&(xe=LM[xe]),je!==xe){switch(xe){case su:n.depthFunc(n.NEVER);break;case ou:n.depthFunc(n.ALWAYS);break;case au:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case lu:n.depthFunc(n.EQUAL);break;case cu:n.depthFunc(n.GEQUAL);break;case uu:n.depthFunc(n.GREATER);break;case fu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}je=xe}},setLocked:function(xe){G=xe},setClear:function(xe){we!==xe&&(De&&(xe=1-xe),n.clearDepth(xe),we=xe)},reset:function(){G=!1,Re=null,je=null,we=null,De=!1}}}function r(){let G=!1,De=null,Re=null,je=null,we=null,xe=null,tt=null,at=null,bt=null;return{setTest:function(yt){G||(yt?Ie(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(yt){De!==yt&&!G&&(n.stencilMask(yt),De=yt)},setFunc:function(yt,An,In){(Re!==yt||je!==An||we!==In)&&(n.stencilFunc(yt,An,In),Re=yt,je=An,we=In)},setOp:function(yt,An,In){(xe!==yt||tt!==An||at!==In)&&(n.stencilOp(yt,An,In),xe=yt,tt=An,at=In)},setLocked:function(yt){G=yt},setClear:function(yt){bt!==yt&&(n.clearStencil(yt),bt=yt)},reset:function(){G=!1,De=null,Re=null,je=null,we=null,xe=null,tt=null,at=null,bt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,f=new WeakMap;let d={},u={},p=new WeakMap,m=[],x=null,y=!1,v=null,g=null,I=null,R=null,T=null,U=null,B=null,k=new Rt(0,0,0),J=0,P=!1,C=null,N=null,ye=null,D=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=V>=2);let Se=null,Ee={};const Ce=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),ct=new qt().fromArray(Ce),ut=new qt().fromArray(Ue);function ge(G,De,Re,je){const we=new Uint8Array(4),xe=n.createTexture();n.bindTexture(G,xe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Re;tt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(De+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return xe}const Ne={};Ne[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ie(n.DEPTH_TEST),o.setFunc(Os),fe(!1),Z(jd),Ie(n.CULL_FACE),ee(pr);function Ie(G){d[G]!==!0&&(n.enable(G),d[G]=!0)}function Qe(G){d[G]!==!1&&(n.disable(G),d[G]=!1)}function nt(G,De){return u[G]!==De?(n.bindFramebuffer(G,De),u[G]=De,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=De),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=De),!0):!1}function it(G,De){let Re=m,je=!1;if(G){Re=p.get(De),Re===void 0&&(Re=[],p.set(De,Re));const we=G.textures;if(Re.length!==we.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,tt=we.length;xe<tt;xe++)Re[xe]=n.COLOR_ATTACHMENT0+xe;Re.length=we.length,je=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,je=!0);je&&n.drawBuffers(Re)}function zt(G){return x!==G?(n.useProgram(G),x=G,!0):!1}const L={[kr]:n.FUNC_ADD,[G_]:n.FUNC_SUBTRACT,[W_]:n.FUNC_REVERSE_SUBTRACT};L[$_]=n.MIN,L[X_]=n.MAX;const M={[q_]:n.ZERO,[j_]:n.ONE,[Y_]:n.SRC_COLOR,[iu]:n.SRC_ALPHA,[tv]:n.SRC_ALPHA_SATURATE,[Q_]:n.DST_COLOR,[J_]:n.DST_ALPHA,[K_]:n.ONE_MINUS_SRC_COLOR,[ru]:n.ONE_MINUS_SRC_ALPHA,[ev]:n.ONE_MINUS_DST_COLOR,[Z_]:n.ONE_MINUS_DST_ALPHA,[nv]:n.CONSTANT_COLOR,[iv]:n.ONE_MINUS_CONSTANT_COLOR,[rv]:n.CONSTANT_ALPHA,[sv]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(G,De,Re,je,we,xe,tt,at,bt,yt){if(G===pr){y===!0&&(Qe(n.BLEND),y=!1);return}if(y===!1&&(Ie(n.BLEND),y=!0),G!==H_){if(G!==v||yt!==P){if((g!==kr||T!==kr)&&(n.blendEquation(n.FUNC_ADD),g=kr,T=kr),yt)switch(G){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yd:n.blendFunc(n.ONE,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,R=null,U=null,B=null,k.set(0,0,0),J=0,v=G,P=yt}return}we=we||De,xe=xe||Re,tt=tt||je,(De!==g||we!==T)&&(n.blendEquationSeparate(L[De],L[we]),g=De,T=we),(Re!==I||je!==R||xe!==U||tt!==B)&&(n.blendFuncSeparate(M[Re],M[je],M[xe],M[tt]),I=Re,R=je,U=xe,B=tt),(at.equals(k)===!1||bt!==J)&&(n.blendColor(at.r,at.g,at.b,bt),k.copy(at),J=bt),v=G,P=!1}function re(G,De){G.side===Jn?Qe(n.CULL_FACE):Ie(n.CULL_FACE);let Re=G.side===Cn;De&&(Re=!Re),fe(Re),G.blending===Ts&&G.transparent===!1?ee(pr):ee(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const je=G.stencilWrite;a.setTest(je),je&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(G){C!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),C=G)}function Z(G){G!==k_?(Ie(n.CULL_FACE),G!==N&&(G===jd?n.cullFace(n.BACK):G===z_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),N=G}function Me(G){G!==ye&&(F&&n.lineWidth(G),ye=G)}function se(G,De,Re){G?(Ie(n.POLYGON_OFFSET_FILL),(D!==De||W!==Re)&&(n.polygonOffset(De,Re),D=De,W=Re)):Qe(n.POLYGON_OFFSET_FILL)}function de(G){G?Ie(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function _e(G){G===void 0&&(G=n.TEXTURE0+$-1),Se!==G&&(n.activeTexture(G),Se=G)}function He(G,De,Re){Re===void 0&&(Se===null?Re=n.TEXTURE0+$-1:Re=Se);let je=Ee[Re];je===void 0&&(je={type:void 0,texture:void 0},Ee[Re]=je),(je.type!==G||je.texture!==De)&&(Se!==Re&&(n.activeTexture(Re),Se=Re),n.bindTexture(G,De||Ne[G]),je.type=G,je.texture=De)}function A(){const G=Ee[Se];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){ct.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ct.copy(G))}function qe(G){ut.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ut.copy(G))}function Ke(G,De){let Re=f.get(De);Re===void 0&&(Re=new WeakMap,f.set(De,Re));let je=Re.get(G);je===void 0&&(je=n.getUniformBlockIndex(De,G.name),Re.set(G,je))}function Be(G,De){const je=f.get(De).get(G);c.get(De)!==je&&(n.uniformBlockBinding(De,je,G.__bindingPointIndex),c.set(De,je))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Se=null,Ee={},u={},p=new WeakMap,m=[],x=null,y=!1,v=null,g=null,I=null,R=null,T=null,U=null,B=null,k=new Rt(0,0,0),J=0,P=!1,C=null,N=null,ye=null,D=null,W=null,ct.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ie,disable:Qe,bindFramebuffer:nt,drawBuffers:it,useProgram:zt,setBlending:ee,setMaterial:re,setFlipSided:fe,setCullFace:Z,setLineWidth:Me,setPolygonOffset:se,setScissorTest:de,activeTexture:_e,bindTexture:He,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Oe,texImage3D:Ae,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:be,texStorage3D:Je,texSubImage2D:te,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:Fe,scissor:ze,viewport:qe,reset:rt}}function UM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new wt,d=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return m?new OffscreenCanvas(A,S):Za("canvas")}function y(A,S,H){let te=1;const ve=He(A);if((ve.width>H||ve.height>H)&&(te=H/Math.max(ve.width,ve.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(te*ve.width),Fe=Math.floor(te*ve.height);u===void 0&&(u=x(ne,Fe));const be=S?x(ne,Fe):u;return be.width=ne,be.height=Fe,be.getContext("2d").drawImage(A,0,0,ne,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ne+"x"+Fe+")."),be}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),A;return A}function v(A){return A.generateMipmaps}function g(A){n.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(A,S,H,te,ve=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),S===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RG8UI),H===n.UNSIGNED_SHORT&&(ne=n.RG16UI),H===n.UNSIGNED_INT&&(ne=n.RG32UI),H===n.BYTE&&(ne=n.RG8I),H===n.SHORT&&(ne=n.RG16I),H===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),H===n.UNSIGNED_INT&&(ne=n.RGB32UI),H===n.BYTE&&(ne=n.RGB8I),H===n.SHORT&&(ne=n.RGB16I),H===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),H===n.UNSIGNED_INT&&(ne=n.RGBA32UI),H===n.BYTE&&(ne=n.RGBA8I),H===n.SHORT&&(ne=n.RGBA16I),H===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),S===n.RGBA){const Fe=ve?Ka:Mt.getTransfer(te);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=Fe===Pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(A,S){let H;return A?S===null||S===jr||S===Eo?H=n.DEPTH24_STENCIL8:S===zi?H=n.DEPTH32F_STENCIL8:S===So&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jr||S===Eo?H=n.DEPTH_COMPONENT24:S===zi?H=n.DEPTH_COMPONENT32F:S===So&&(H=n.DEPTH_COMPONENT16),H}function U(A,S){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==ei&&A.minFilter!==mi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function B(A){const S=A.target;S.removeEventListener("dispose",B),J(S),S.isVideoTexture&&d.delete(S)}function k(A){const S=A.target;S.removeEventListener("dispose",k),C(S)}function J(A){const S=i.get(A);if(S.__webglInit===void 0)return;const H=A.source,te=p.get(H);if(te){const ve=te[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(A),Object.keys(te).length===0&&p.delete(H)}i.remove(A)}function P(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const H=A.source,te=p.get(H);delete te[S.__cacheKey],o.memory.textures--}function C(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let ve=0;ve<S.__webglFramebuffer[te].length;ve++)n.deleteFramebuffer(S.__webglFramebuffer[te][ve]);else n.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)n.deleteFramebuffer(S.__webglFramebuffer[te]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let te=0,ve=H.length;te<ve;te++){const ne=i.get(H[te]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(H[te])}i.remove(A)}let N=0;function ye(){N=0}function D(){const A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const H=i.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(H,A,S);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function F(A,S){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ne(H,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function V(A,S){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ne(H,A,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function z(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ie(H,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const Se={[pu]:n.REPEAT,[Hr]:n.CLAMP_TO_EDGE,[mu]:n.MIRRORED_REPEAT},Ee={[ei]:n.NEAREST,[mv]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[mi]:n.LINEAR,[oc]:n.LINEAR_MIPMAP_NEAREST,[Gr]:n.LINEAR_MIPMAP_LINEAR},Ce={[yv]:n.NEVER,[Av]:n.ALWAYS,[Sv]:n.LESS,[Um]:n.LEQUAL,[Ev]:n.EQUAL,[Tv]:n.GEQUAL,[Mv]:n.GREATER,[bv]:n.NOTEQUAL};function Ue(A,S){if(S.type===zi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mi||S.magFilter===oc||S.magFilter===la||S.magFilter===Gr||S.minFilter===mi||S.minFilter===oc||S.minFilter===la||S.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Se[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ee[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ei||S.minFilter!==la&&S.minFilter!==Gr||S.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ct(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",B));const te=S.source;let ve=p.get(te);ve===void 0&&(ve={},p.set(te,ve));const ne=W(S);if(ne!==A.__cacheKey){ve[ne]===void 0&&(ve[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ve[ne].usedTimes++;const Fe=ve[A.__cacheKey];Fe!==void 0&&(ve[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(S)),A.__cacheKey=ne,A.__webglTexture=ve[ne].texture}return H}function ut(A,S,H){return Math.floor(Math.floor(A/H)/S)}function ge(A,S,H,te){const ne=A.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,te,S.data);else{ne.sort((Ae,ze)=>Ae.start-ze.start);let Fe=0;for(let Ae=1;Ae<ne.length;Ae++){const ze=ne[Fe],qe=ne[Ae],Ke=ze.start+ze.count,Be=ut(qe.start,S.width,4),rt=ut(ze.start,S.width,4);qe.start<=Ke+1&&Be===rt&&ut(qe.start+qe.count-1,S.width,4)===Be?ze.count=Math.max(ze.count,qe.start+qe.count-ze.start):(++Fe,ne[Fe]=qe)}ne.length=Fe+1;const be=n.getParameter(n.UNPACK_ROW_LENGTH),Je=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,ze=ne.length;Ae<ze;Ae++){const qe=ne[Ae],Ke=Math.floor(qe.start/4),Be=Math.ceil(qe.count/4),rt=Ke%S.width,G=Math.floor(Ke/S.width),De=Be,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,rt,G,De,Re,H,te,S.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Ne(A,S,H){let te=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=n.TEXTURE_3D);const ve=ct(A,S),ne=S.source;t.bindTexture(te,A.__webglTexture,n.TEXTURE0+H);const Fe=i.get(ne);if(ne.version!==Fe.__version||ve===!0){t.activeTexture(n.TEXTURE0+H);const be=Mt.getPrimaries(Mt.workingColorSpace),Je=S.colorSpace===lr?null:Mt.getPrimaries(S.colorSpace),Oe=S.colorSpace===lr||be===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ae=y(S.image,!1,r.maxTextureSize);Ae=_e(S,Ae);const ze=s.convert(S.format,S.colorSpace),qe=s.convert(S.type);let Ke=R(S.internalFormat,ze,qe,S.colorSpace,S.isVideoTexture);Ue(te,S);let Be;const rt=S.mipmaps,G=S.isVideoTexture!==!0,De=Fe.__version===void 0||ve===!0,Re=ne.dataReady,je=U(S,Ae);if(S.isDepthTexture)Ke=T(S.format===bo,S.type),De&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ke,Ae.width,Ae.height):t.texImage2D(n.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,ze,qe,null));else if(S.isDataTexture)if(rt.length>0){G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,rt[0].width,rt[0].height);for(let we=0,xe=rt.length;we<xe;we++)Be=rt[we],G?Re&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Be.width,Be.height,ze,qe,Be.data):t.texImage2D(n.TEXTURE_2D,we,Ke,Be.width,Be.height,0,ze,qe,Be.data);S.generateMipmaps=!1}else G?(De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height),Re&&ge(S,Ae,ze,qe)):t.texImage2D(n.TEXTURE_2D,0,Ke,Ae.width,Ae.height,0,ze,qe,Ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,rt[0].width,rt[0].height,Ae.depth);for(let we=0,xe=rt.length;we<xe;we++)if(Be=rt[we],S.format!==Qn)if(ze!==null)if(G){if(Re)if(S.layerUpdates.size>0){const tt=vh(Be.width,Be.height,S.format,S.type);for(const at of S.layerUpdates){const bt=Be.data.subarray(at*tt/Be.data.BYTES_PER_ELEMENT,(at+1)*tt/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,at,Be.width,Be.height,1,ze,bt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Ae.depth,ze,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,Ke,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,Ae.depth,ze,qe,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,Ke,Be.width,Be.height,Ae.depth,0,ze,qe,Be.data)}else{G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,rt[0].width,rt[0].height);for(let we=0,xe=rt.length;we<xe;we++)Be=rt[we],S.format!==Qn?ze!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,we,Ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Be.width,Be.height,ze,qe,Be.data):t.texImage2D(n.TEXTURE_2D,we,Ke,Be.width,Be.height,0,ze,qe,Be.data)}else if(S.isDataArrayTexture)if(G){if(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,Ae.width,Ae.height,Ae.depth),Re)if(S.layerUpdates.size>0){const we=vh(Ae.width,Ae.height,S.format,S.type);for(const xe of S.layerUpdates){const tt=Ae.data.subarray(xe*we/Ae.data.BYTES_PER_ELEMENT,(xe+1)*we/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,ze,qe,tt)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,qe,Ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,Ae.width,Ae.height,Ae.depth,0,ze,qe,Ae.data);else if(S.isData3DTexture)G?(De&&t.texStorage3D(n.TEXTURE_3D,je,Ke,Ae.width,Ae.height,Ae.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,ze,qe,Ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,Ae.width,Ae.height,Ae.depth,0,ze,qe,Ae.data);else if(S.isFramebufferTexture){if(De)if(G)t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height);else{let we=Ae.width,xe=Ae.height;for(let tt=0;tt<je;tt++)t.texImage2D(n.TEXTURE_2D,tt,Ke,we,xe,0,ze,qe,null),we>>=1,xe>>=1}}else if(rt.length>0){if(G&&De){const we=He(rt[0]);t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height)}for(let we=0,xe=rt.length;we<xe;we++)Be=rt[we],G?Re&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,ze,qe,Be):t.texImage2D(n.TEXTURE_2D,we,Ke,ze,qe,Be);S.generateMipmaps=!1}else if(G){if(De){const we=He(Ae);t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,qe,Ae)}else t.texImage2D(n.TEXTURE_2D,0,Ke,ze,qe,Ae);v(S)&&g(te),Fe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,H){if(S.image.length!==6)return;const te=ct(A,S),ve=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const ne=i.get(ve);if(ve.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const Fe=Mt.getPrimaries(Mt.workingColorSpace),be=S.colorSpace===lr?null:Mt.getPrimaries(S.colorSpace),Je=S.colorSpace===lr||Fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!Oe&&!Ae?ze[xe]=y(S.image[xe],!0,r.maxCubemapSize):ze[xe]=Ae?S.image[xe].image:S.image[xe],ze[xe]=_e(S,ze[xe]);const qe=ze[0],Ke=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),rt=R(S.internalFormat,Ke,Be,S.colorSpace),G=S.isVideoTexture!==!0,De=ne.__version===void 0||te===!0,Re=ve.dataReady;let je=U(S,qe);Ue(n.TEXTURE_CUBE_MAP,S);let we;if(Oe){G&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,rt,qe.width,qe.height);for(let xe=0;xe<6;xe++){we=ze[xe].mipmaps;for(let tt=0;tt<we.length;tt++){const at=we[tt];S.format!==Qn?Ke!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,at.width,at.height,Ke,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,at.width,at.height,Ke,Be,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,rt,at.width,at.height,0,Ke,Be,at.data)}}}else{if(we=S.mipmaps,G&&De){we.length>0&&je++;const xe=He(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,rt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,Ke,Be,ze[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,ze[xe].width,ze[xe].height,0,Ke,Be,ze[xe].data);for(let tt=0;tt<we.length;tt++){const bt=we[tt].image[xe].image;G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,bt.width,bt.height,Ke,Be,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,rt,bt.width,bt.height,0,Ke,Be,bt.data)}}else{G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ke,Be,ze[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,rt,Ke,Be,ze[xe]);for(let tt=0;tt<we.length;tt++){const at=we[tt];G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,Ke,Be,at.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,rt,Ke,Be,at.image[xe])}}}v(S)&&g(n.TEXTURE_CUBE_MAP),ne.__version=ve.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Qe(A,S,H,te,ve,ne){const Fe=s.convert(H.format,H.colorSpace),be=s.convert(H.type),Je=R(H.internalFormat,Fe,be,H.colorSpace),Oe=i.get(S),Ae=i.get(H);if(Ae.__renderTarget=S,!Oe.__hasExternalTextures){const ze=Math.max(1,S.width>>ne),qe=Math.max(1,S.height>>ne);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,ne,Je,ze,qe,S.depth,0,Fe,be,null):t.texImage2D(ve,ne,Je,ze,qe,0,Fe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ve,Ae.__webglTexture,0,Me(S)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ve,Ae.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(A,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const te=S.depthTexture,ve=te&&te.isDepthTexture?te.type:null,ne=T(S.stencilBuffer,ve),Fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=Me(S);se(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ne,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,A)}else{const te=S.textures;for(let ve=0;ve<te.length;ve++){const ne=te[ve],Fe=s.convert(ne.format,ne.colorSpace),be=s.convert(ne.type),Je=R(ne.internalFormat,Fe,be,ne.colorSpace),Oe=Me(S);H&&se(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Je,S.width,S.height):se(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Je,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Je,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ve=te.__webglTexture,ne=Me(S);if(S.depthTexture.format===Mo)se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(S.depthTexture.format===bo)se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function zt(A){const S=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const ve=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",ve)};te.addEventListener("dispose",ve),S.__depthDisposeCallback=ve}S.__boundDepthTexture=te}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const te=A.texture.mipmaps;te&&te.length>0?it(S.__webglFramebuffer[0],A):it(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=n.createRenderbuffer(),nt(S.__webglDepthbuffer[te],A,!1);else{const ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ne)}}else{const te=A.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{const ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(A,S,H){const te=i.get(A);S!==void 0&&Qe(te.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&zt(A)}function M(A){const S=A.texture,H=i.get(A),te=i.get(S);A.addEventListener("dispose",k);const ve=A.textures,ne=A.isWebGLCubeRenderTarget===!0,Fe=ve.length>1;if(Fe||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=S.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let Je=0;Je<S.mipmaps.length;Je++)H.__webglFramebuffer[be][Je]=n.createFramebuffer()}else H.__webglFramebuffer[be]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)H.__webglFramebuffer[be]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let be=0,Je=ve.length;be<Je;be++){const Oe=i.get(ve[be]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&se(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Je=ve[be];H.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[be]);const Oe=s.convert(Je.format,Je.colorSpace),Ae=s.convert(Je.type),ze=R(Je.internalFormat,Oe,Ae,Je.colorSpace,A.isXRRenderTarget===!0),qe=Me(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ze,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,H.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[be][Je],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je);else Qe(H.__webglFramebuffer[be],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(S)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let be=0,Je=ve.length;be<Je;be++){const Oe=ve[be],Ae=i.get(Oe);let ze=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ze=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ze,Ae.__webglTexture),Ue(ze,Oe),Qe(H.__webglFramebuffer,A,Oe,n.COLOR_ATTACHMENT0+be,ze,0),v(Oe)&&g(ze)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(be=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,te.__webglTexture),Ue(be,S),S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[Je],A,S,n.COLOR_ATTACHMENT0,be,Je);else Qe(H.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,be,0);v(S)&&g(be),t.unbindTexture()}A.depthBuffer&&zt(A)}function ee(A){const S=A.textures;for(let H=0,te=S.length;H<te;H++){const ve=S[H];if(v(ve)){const ne=I(A),Fe=i.get(ve).__webglTexture;t.bindTexture(ne,Fe),g(ne),t.unbindTexture()}}}const re=[],fe=[];function Z(A){if(A.samples>0){if(se(A)===!1){const S=A.textures,H=A.width,te=A.height;let ve=n.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(A),be=S.length>1;if(be)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Je=A.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const Ae=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,H,te,0,0,H,te,ve,n.NEAREST),c===!0&&(re.length=0,fe.length=0,re.push(n.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(ne),fe.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const Ae=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Me(A){return Math.min(r.maxSamples,A.samples)}function se(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(A){const S=o.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function _e(A,S){const H=A.colorSpace,te=A.format,ve=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Fs&&H!==lr&&(Mt.getTransfer(H)===Pt?(te!==Qn||ve!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=D,this.resetTextureUnits=ye,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=L,this.setupRenderTarget=M,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=se}function NM(n,e){function t(i,r=lr){let s;const o=Mt.getTransfer(r);if(i===Xi)return n.UNSIGNED_BYTE;if(i===Mf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wm)return n.BYTE;if(i===Rm)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Ef)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===Fo)return n.HALF_FLOAT;if(i===Pm)return n.ALPHA;if(i===Im)return n.RGB;if(i===Qn)return n.RGBA;if(i===Mo)return n.DEPTH_COMPONENT;if(i===bo)return n.DEPTH_STENCIL;if(i===Dm)return n.RED;if(i===Tf)return n.RED_INTEGER;if(i===Lm)return n.RG;if(i===Af)return n.RG_INTEGER;if(i===wf)return n.RGBA_INTEGER;if(i===Ua||i===Na||i===Fa||i===Ba)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gu||i===_u||i===vu||i===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yu||i===Su||i===Eu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yu||i===Su)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mu||i===bu||i===Tu||i===Au||i===wu||i===Ru||i===Cu||i===Pu||i===Iu||i===Du||i===Lu||i===Ou||i===Uu||i===Nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Au)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ru)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Du)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ou)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Fu||i===Bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ka)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Om||i===ku||i===zu||i===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Qm extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`;class kM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xr({vertexShader:FM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Gs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,f=null,d=null,u=null,p=null,m=null,x=null;const y=new kM,v={},g=t.getContextAttributes();let I=null,R=null;const T=[],U=[],B=new wt;let k=null;const J=new Kn;J.viewport=new qt;const P=new Kn;P.viewport=new qt;const C=[J,P],N=new ax;let ye=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let Ne=T[ge];return Ne===void 0&&(Ne=new Pc,T[ge]=Ne),Ne.getTargetRaySpace()},this.getControllerGrip=function(ge){let Ne=T[ge];return Ne===void 0&&(Ne=new Pc,T[ge]=Ne),Ne.getGripSpace()},this.getHand=function(ge){let Ne=T[ge];return Ne===void 0&&(Ne=new Pc,T[ge]=Ne),Ne.getHandSpace()};function W(ge){const Ne=U.indexOf(ge.inputSource);if(Ne===-1)return;const Ie=T[Ne];Ie!==void 0&&(Ie.update(ge.inputSource,ge.frame,f||o),Ie.dispatchEvent({type:ge.type,data:ge.inputSource}))}function $(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",F);for(let ge=0;ge<T.length;ge++){const Ne=U[ge];Ne!==null&&(U[ge]=null,T[ge].disconnect(Ne))}ye=null,D=null,y.reset();for(const ge in v)delete v[ge];e.setRenderTarget(I),m=null,p=null,u=null,r=null,R=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){s=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){a=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ge){f=ge},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ge){if(r=ge,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",$),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Qe=null,nt=null;g.depth&&(nt=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=g.stencil?bo:Mo,Qe=g.stencil?Eo:jr);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:s};p=u.createProjectionLayer(it),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Yr(p.textureWidth,p.textureHeight,{format:Qn,type:Xi,depthTexture:new Xm(p.textureWidth,p.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Yr(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(ge){for(let Ne=0;Ne<ge.removed.length;Ne++){const Ie=ge.removed[Ne],Qe=U.indexOf(Ie);Qe>=0&&(U[Qe]=null,T[Qe].disconnect(Ie))}for(let Ne=0;Ne<ge.added.length;Ne++){const Ie=ge.added[Ne];let Qe=U.indexOf(Ie);if(Qe===-1){for(let it=0;it<T.length;it++)if(it>=U.length){U.push(Ie),Qe=it;break}else if(U[it]===null){U[it]=Ie,Qe=it;break}if(Qe===-1)break}const nt=T[Qe];nt&&nt.connect(Ie)}}const V=new le,z=new le;function Se(ge,Ne,Ie){V.setFromMatrixPosition(Ne.matrixWorld),z.setFromMatrixPosition(Ie.matrixWorld);const Qe=V.distanceTo(z),nt=Ne.projectionMatrix.elements,it=Ie.projectionMatrix.elements,zt=nt[14]/(nt[10]-1),L=nt[14]/(nt[10]+1),M=(nt[9]+1)/nt[5],ee=(nt[9]-1)/nt[5],re=(nt[8]-1)/nt[0],fe=(it[8]+1)/it[0],Z=zt*re,Me=zt*fe,se=Qe/(-re+fe),de=se*-re;if(Ne.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(de),ge.translateZ(se),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),nt[10]===-1)ge.projectionMatrix.copy(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(Ne.projectionMatrixInverse);else{const _e=zt+se,He=L+se,A=Z-de,S=Me+(Qe-de),H=M*L/He*_e,te=ee*L/He*_e;ge.projectionMatrix.makePerspective(A,S,H,te,_e,He),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function Ee(ge,Ne){Ne===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(Ne.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(r===null)return;let Ne=ge.near,Ie=ge.far;y.texture!==null&&(y.depthNear>0&&(Ne=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),N.near=P.near=J.near=Ne,N.far=P.far=J.far=Ie,(ye!==N.near||D!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),ye=N.near,D=N.far),N.layers.mask=ge.layers.mask|6,J.layers.mask=N.layers.mask&3,P.layers.mask=N.layers.mask&5;const Qe=ge.parent,nt=N.cameras;Ee(N,Qe);for(let it=0;it<nt.length;it++)Ee(nt[it],Qe);nt.length===2?Se(N,J,P):N.projectionMatrix.copy(J.projectionMatrix),Ce(ge,N,Qe)};function Ce(ge,Ne,Ie){Ie===null?ge.matrix.copy(Ne.matrixWorld):(ge.matrix.copy(Ie.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(Ne.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(Ne.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=Hu*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(ge){c=ge,p!==null&&(p.fixedFoveation=ge),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ge)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(N)},this.getCameraTexture=function(ge){return v[ge]};let Ue=null;function ct(ge,Ne){if(d=Ne.getViewerPose(f||o),x=Ne,d!==null){const Ie=d.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Qe=!1;Ie.length!==N.cameras.length&&(N.cameras.length=0,Qe=!0);for(let L=0;L<Ie.length;L++){const M=Ie[L];let ee=null;if(m!==null)ee=m.getViewport(M);else{const fe=u.getViewSubImage(p,M);ee=fe.viewport,L===0&&(e.setRenderTargetTextures(R,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(R))}let re=C[L];re===void 0&&(re=new Kn,re.layers.enable(L),re.viewport=new qt,C[L]=re),re.matrix.fromArray(M.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(M.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ee.x,ee.y,ee.width,ee.height),L===0&&(N.matrix.copy(re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Qe===!0&&N.cameras.push(re)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const L=u.getDepthInformation(Ie[0]);L&&L.isValid&&L.texture&&y.init(L,r.renderState)}if(nt&&nt.includes("camera-access")&&(e.state.unbindTexture(),u))for(let L=0;L<Ie.length;L++){const M=Ie[L].camera;if(M){let ee=v[M];ee||(ee=new Qm,v[M]=ee);const re=u.getCameraImage(M);ee.sourceTexture=re}}}for(let Ie=0;Ie<T.length;Ie++){const Qe=U[Ie],nt=T[Ie];Qe!==null&&nt!==void 0&&nt.update(Qe,Ne,f||o)}Ue&&Ue(ge,Ne),Ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ne}),x=null}const ut=new jm;ut.setAnimationLoop(ct),this.setAnimationLoop=function(ge){Ue=ge},this.dispose=function(){}}}const Lr=new qi,VM=new Zt;function HM(n,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,Hm(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,I,R,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),u(v,g)):g.isMeshPhongMaterial?(s(v,g),d(v,g)):g.isMeshStandardMaterial?(s(v,g),p(v,g),g.isMeshPhysicalMaterial&&m(v,g,T)):g.isMeshMatcapMaterial?(s(v,g),x(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),y(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&a(v,g)):g.isPointsMaterial?c(v,g,I,R):g.isSpriteMaterial?f(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Cn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Cn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),R=I.envMap,T=I.envMapRotation;R&&(v.envMap.value=R,Lr.copy(T),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),v.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(Lr)),v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function a(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,I,R){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=R*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function d(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function u(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function p(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function m(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,g){g.matcap&&(v.matcap.value=g.matcap)}function y(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,R){const T=R.program;i.uniformBlockBinding(I,T)}function f(I,R){let T=r[I.id];T===void 0&&(x(I),T=d(I),r[I.id]=T,I.addEventListener("dispose",v));const U=R.program;i.updateUBOMapping(I,U);const B=e.render.frame;s[I.id]!==B&&(p(I),s[I.id]=B)}function d(I){const R=u();I.__bindingPointIndex=R;const T=n.createBuffer(),U=I.__size,B=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,T),T}function u(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(I){const R=r[I.id],T=I.uniforms,U=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let B=0,k=T.length;B<k;B++){const J=Array.isArray(T[B])?T[B]:[T[B]];for(let P=0,C=J.length;P<C;P++){const N=J[P];if(m(N,B,P,U)===!0){const ye=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let $=0;$<D.length;$++){const F=D[$],V=y(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,ye+W,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ye,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(I,R,T,U){const B=I.value,k=R+"_"+T;if(U[k]===void 0)return typeof B=="number"||typeof B=="boolean"?U[k]=B:U[k]=B.clone(),!0;{const J=U[k];if(typeof B=="number"||typeof B=="boolean"){if(J!==B)return U[k]=B,!0}else if(J.equals(B)===!1)return J.copy(B),!0}return!1}function x(I){const R=I.uniforms;let T=0;const U=16;for(let k=0,J=R.length;k<J;k++){const P=Array.isArray(R[k])?R[k]:[R[k]];for(let C=0,N=P.length;C<N;C++){const ye=P[C],D=Array.isArray(ye.value)?ye.value:[ye.value];for(let W=0,$=D.length;W<$;W++){const F=D[W],V=y(F),z=T%U,Se=z%V.boundary,Ee=z+Se;T+=Se,Ee!==0&&U-Ee<V.storage&&(T+=U-Ee),ye.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ye.__offset=T,T+=V.storage}}}const B=T%U;return B>0&&(T+=U-B),I.__size=T,I.__cache={},this}function y(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function v(I){const R=I.target;R.removeEventListener("dispose",v);const T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function g(){for(const I in r)n.deleteBuffer(r[I]);o=[],r={},s={}}return{bind:c,update:f,dispose:g}}class WM{constructor(e={}){const{canvas:t=Rv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,g=null;const I=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Hn;let B=0,k=0,J=null,P=-1,C=null;const N=new qt,ye=new qt;let D=null;const W=new Rt(0);let $=0,F=t.width,V=t.height,z=1,Se=null,Ee=null;const Ce=new qt(0,0,F,V),Ue=new qt(0,0,F,V);let ct=!1;const ut=new $m;let ge=!1,Ne=!1;const Ie=new Zt,Qe=new le,nt=new qt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function L(){return J===null?z:1}let M=i;function ee(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sf}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",we,!1),M===null){const X="webgl2";if(M=ee(X,w),M===null)throw ee(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,fe,Z,Me,se,de,_e,He,A,S,H,te,ve,ne,Fe,be,Je,Oe,Ae,ze,qe,Ke,Be,rt;function G(){re=new eE(M),re.init(),Ke=new NM(M,re),fe=new qS(M,re,e,Ke),Z=new OM(M,re),fe.reversedDepthBuffer&&p&&Z.buffers.depth.setReversed(!0),Me=new iE(M),se=new SM,de=new UM(M,re,Z,se,fe,Ke,Me),_e=new YS(T),He=new QS(T),A=new cx(M),Be=new $S(M,A),S=new tE(M,A,Me,Be),H=new sE(M,S,A,Me),Ae=new rE(M,fe,de),be=new jS(se),te=new yM(T,_e,He,re,fe,Be,be),ve=new HM(T,se),ne=new MM,Fe=new CM(re),Oe=new WS(T,_e,He,Z,H,m,c),Je=new DM(T,H,fe),rt=new GM(M,Me,fe,Z),ze=new XS(M,re,Me),qe=new nE(M,re,Me),Me.programs=te.programs,T.capabilities=fe,T.extensions=re,T.properties=se,T.renderLists=ne,T.shadowMap=Je,T.state=Z,T.info=Me}G();const De=new zM(T,M);this.xr=De,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(F,V,!1))},this.getSize=function(w){return w.set(F,V)},this.setSize=function(w,X,oe=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,V=X,t.width=Math.floor(w*z),t.height=Math.floor(X*z),oe===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(F*z,V*z).floor()},this.setDrawingBufferSize=function(w,X,oe){F=w,V=X,z=oe,t.width=Math.floor(w*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,X,oe,ae){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,X,oe,ae),Z.viewport(N.copy(Ce).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,X,oe,ae){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,X,oe,ae),Z.scissor(ye.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){Z.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){Ee=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,oe=!0){let ae=0;if(w){let Y=!1;if(J!==null){const Te=J.texture.format;Y=Te===wf||Te===Af||Te===Tf}if(Y){const Te=J.texture.type,$e=Te===Xi||Te===jr||Te===So||Te===Eo||Te===Mf||Te===bf,et=Oe.getClearColor(),ke=Oe.getClearAlpha(),ot=et.r,lt=et.g,st=et.b;$e?(x[0]=ot,x[1]=lt,x[2]=st,x[3]=ke,M.clearBufferuiv(M.COLOR,0,x)):(y[0]=ot,y[1]=lt,y[2]=st,y[3]=ke,M.clearBufferiv(M.COLOR,0,y))}else ae|=M.COLOR_BUFFER_BIT}X&&(ae|=M.DEPTH_BUFFER_BIT),oe&&(ae|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Oe.dispose(),ne.dispose(),Fe.dispose(),se.dispose(),_e.dispose(),He.dispose(),H.dispose(),Be.dispose(),rt.dispose(),te.dispose(),De.dispose(),De.removeEventListener("sessionstart",In),De.removeEventListener("sessionend",Js),Wn.stop()};function Re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const w=Me.autoReset,X=Je.enabled,oe=Je.autoUpdate,ae=Je.needsUpdate,Y=Je.type;G(),Me.autoReset=w,Je.enabled=X,Je.autoUpdate=oe,Je.needsUpdate=ae,Je.type=Y}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const X=w.target;X.removeEventListener("dispose",xe),tt(X)}function tt(w){at(w),se.remove(w)}function at(w){const X=se.get(w).programs;X!==void 0&&(X.forEach(function(oe){te.releaseProgram(oe)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,oe,ae,Y,Te){X===null&&(X=it);const $e=Y.isMesh&&Y.matrixWorld.determinant()<0,et=$l(w,X,oe,ae,Y);Z.setMaterial(ae,$e);let ke=oe.index,ot=1;if(ae.wireframe===!0){if(ke=S.getWireframeAttribute(oe),ke===void 0)return;ot=2}const lt=oe.drawRange,st=oe.attributes.position;let mt=lt.start*ot,St=(lt.start+lt.count)*ot;Te!==null&&(mt=Math.max(mt,Te.start*ot),St=Math.min(St,(Te.start+Te.count)*ot)),ke!==null?(mt=Math.max(mt,0),St=Math.min(St,ke.count)):st!=null&&(mt=Math.max(mt,0),St=Math.min(St,st.count));const Vt=St-mt;if(Vt<0||Vt===1/0)return;Be.setup(Y,ae,et,oe,ke);let Ct,Tt=ze;if(ke!==null&&(Ct=A.get(ke),Tt=qe,Tt.setIndex(Ct)),Y.isMesh)ae.wireframe===!0?(Z.setLineWidth(ae.wireframeLinewidth*L()),Tt.setMode(M.LINES)):Tt.setMode(M.TRIANGLES);else if(Y.isLine){let Xe=ae.linewidth;Xe===void 0&&(Xe=1),Z.setLineWidth(Xe*L()),Y.isLineSegments?Tt.setMode(M.LINES):Y.isLineLoop?Tt.setMode(M.LINE_LOOP):Tt.setMode(M.LINE_STRIP)}else Y.isPoints?Tt.setMode(M.POINTS):Y.isSprite&&Tt.setMode(M.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xe=Y._multiDrawStarts,Et=Y._multiDrawCounts,xt=Y._multiDrawCount,nn=ke?A.get(ke).bytesPerElement:1,Ti=se.get(ae).currentProgram.getUniforms();for(let dn=0;dn<xt;dn++)Ti.setValue(M,"_gl_DrawID",dn),Tt.render(Xe[dn]/nn,Et[dn])}else if(Y.isInstancedMesh)Tt.renderInstances(mt,Vt,Y.count);else if(oe.isInstancedBufferGeometry){const Xe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Et=Math.min(oe.instanceCount,Xe);Tt.renderInstances(mt,Vt,Et)}else Tt.render(mt,Vt)};function bt(w,X,oe){w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,bi(w,X,oe),w.side=_r,w.needsUpdate=!0,bi(w,X,oe),w.side=Jn):bi(w,X,oe)}this.compile=function(w,X,oe=null){oe===null&&(oe=w),g=Fe.get(oe),g.init(X),R.push(g),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),w!==oe&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ae=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let $e=0;$e<Te.length;$e++){const et=Te[$e];bt(et,oe,Y),ae.add(et)}else bt(Te,oe,Y),ae.add(Te)}),g=R.pop(),ae},this.compileAsync=function(w,X,oe=null){const ae=this.compile(w,X,oe);return new Promise(Y=>{function Te(){if(ae.forEach(function($e){se.get($e).currentProgram.isReady()&&ae.delete($e)}),ae.size===0){Y(w);return}setTimeout(Te,10)}re.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let yt=null;function An(w){yt&&yt(w)}function In(){Wn.stop()}function Js(){Wn.start()}const Wn=new jm;Wn.setAnimationLoop(An),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){yt=w,De.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},De.addEventListener("sessionstart",In),De.addEventListener("sessionend",Js),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(X),X=De.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,X,J),g=Fe.get(w,R.length),g.init(X),R.push(g),Ie.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ut.setFromProjectionMatrix(Ie,gi,X.reversedDepth),Ne=this.localClippingEnabled,ge=be.init(this.clippingPlanes,Ne),v=ne.get(w,I.length),v.init(),I.push(v),De.enabled===!0&&De.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&ns(Te,X,-1/0,T.sortObjects)}ns(w,X,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(Se,Ee),zt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,zt&&Oe.addToRenderList(v,w),this.info.render.frame++,ge===!0&&be.beginShadows();const oe=g.state.shadowsArray;Je.render(oe,w,X),ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=v.opaque,Y=v.transmissive;if(g.setupLights(),X.isArrayCamera){const Te=X.cameras;if(Y.length>0)for(let $e=0,et=Te.length;$e<et;$e++){const ke=Te[$e];Yo(ae,Y,w,ke)}zt&&Oe.render(w);for(let $e=0,et=Te.length;$e<et;$e++){const ke=Te[$e];br(v,w,ke,ke.viewport)}}else Y.length>0&&Yo(ae,Y,w,X),zt&&Oe.render(w),br(v,w,X);J!==null&&k===0&&(de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J)),w.isScene===!0&&w.onAfterRender(T,w,X),Be.resetDefaultState(),P=-1,C=null,R.pop(),R.length>0?(g=R[R.length-1],ge===!0&&be.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function ns(w,X,oe,ae){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){ae&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const $e=H.update(w),et=w.material;et.visible&&v.push(w,$e,et,oe,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const $e=H.update(w),et=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),nt.copy($e.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(et)){const ke=$e.groups;for(let ot=0,lt=ke.length;ot<lt;ot++){const st=ke[ot],mt=et[st.materialIndex];mt&&mt.visible&&v.push(w,$e,mt,oe,nt.z,st)}}else et.visible&&v.push(w,$e,et,oe,nt.z,null)}}const Te=w.children;for(let $e=0,et=Te.length;$e<et;$e++)ns(Te[$e],X,oe,ae)}function br(w,X,oe,ae){const Y=w.opaque,Te=w.transmissive,$e=w.transparent;g.setupLightsView(oe),ge===!0&&be.setGlobalState(T.clippingPlanes,oe),ae&&Z.viewport(N.copy(ae)),Y.length>0&&Tr(Y,X,oe),Te.length>0&&Tr(Te,X,oe),$e.length>0&&Tr($e,X,oe),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Yo(w,X,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Yr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Fo:Xi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[ae.id],$e=ae.viewport||N;Te.setSize($e.z*T.transmissionResolutionScale,$e.w*T.transmissionResolutionScale);const et=T.getRenderTarget(),ke=T.getActiveCubeFace(),ot=T.getActiveMipmapLevel();T.setRenderTarget(Te),T.getClearColor(W),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),zt&&Oe.render(oe);const lt=T.toneMapping;T.toneMapping=mr;const st=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),ge===!0&&be.setGlobalState(T.clippingPlanes,ae),Tr(w,oe,ae),de.updateMultisampleRenderTarget(Te),de.updateRenderTargetMipmap(Te),re.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let St=0,Vt=X.length;St<Vt;St++){const Ct=X[St],Tt=Ct.object,Xe=Ct.geometry,Et=Ct.material,xt=Ct.group;if(Et.side===Jn&&Tt.layers.test(ae.layers)){const nn=Et.side;Et.side=Cn,Et.needsUpdate=!0,Ko(Tt,oe,ae,Xe,Et,xt),Et.side=nn,Et.needsUpdate=!0,mt=!0}}mt===!0&&(de.updateMultisampleRenderTarget(Te),de.updateRenderTargetMipmap(Te))}T.setRenderTarget(et,ke,ot),T.setClearColor(W,$),st!==void 0&&(ae.viewport=st),T.toneMapping=lt}function Tr(w,X,oe){const ae=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Te=w.length;Y<Te;Y++){const $e=w[Y],et=$e.object,ke=$e.geometry,ot=$e.group;let lt=$e.material;lt.allowOverride===!0&&ae!==null&&(lt=ae),et.layers.test(oe.layers)&&Ko(et,X,oe,ke,lt,ot)}}function Ko(w,X,oe,ae,Y,Te){w.onBeforeRender(T,X,oe,ae,Y,Te),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(T,X,oe,ae,w,Te),Y.transparent===!0&&Y.side===Jn&&Y.forceSinglePass===!1?(Y.side=Cn,Y.needsUpdate=!0,T.renderBufferDirect(oe,X,ae,Y,w,Te),Y.side=_r,Y.needsUpdate=!0,T.renderBufferDirect(oe,X,ae,Y,w,Te),Y.side=Jn):T.renderBufferDirect(oe,X,ae,Y,w,Te),w.onAfterRender(T,X,oe,ae,Y,Te)}function bi(w,X,oe){X.isScene!==!0&&(X=it);const ae=se.get(w),Y=g.state.lights,Te=g.state.shadowsArray,$e=Y.state.version,et=te.getParameters(w,Y.state,Te,X,oe),ke=te.getProgramCacheKey(et);let ot=ae.programs;ae.environment=w.isMeshStandardMaterial?X.environment:null,ae.fog=X.fog,ae.envMap=(w.isMeshStandardMaterial?He:_e).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,ot===void 0&&(w.addEventListener("dispose",xe),ot=new Map,ae.programs=ot);let lt=ot.get(ke);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===$e)return Qs(w,et),lt}else et.uniforms=te.getUniforms(w),w.onBeforeCompile(et,T),lt=te.acquireProgram(et,ke),ot.set(ke,lt),ae.uniforms=et.uniforms;const st=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(st.clippingPlanes=be.uniform),Qs(w,et),ae.needsLights=Jo(w),ae.lightsStateVersion=$e,ae.needsLights&&(st.ambientLightColor.value=Y.state.ambient,st.lightProbe.value=Y.state.probe,st.directionalLights.value=Y.state.directional,st.directionalLightShadows.value=Y.state.directionalShadow,st.spotLights.value=Y.state.spot,st.spotLightShadows.value=Y.state.spotShadow,st.rectAreaLights.value=Y.state.rectArea,st.ltc_1.value=Y.state.rectAreaLTC1,st.ltc_2.value=Y.state.rectAreaLTC2,st.pointLights.value=Y.state.point,st.pointLightShadows.value=Y.state.pointShadow,st.hemisphereLights.value=Y.state.hemi,st.directionalShadowMap.value=Y.state.directionalShadowMap,st.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,st.spotShadowMap.value=Y.state.spotShadowMap,st.spotLightMatrix.value=Y.state.spotLightMatrix,st.spotLightMap.value=Y.state.spotLightMap,st.pointShadowMap.value=Y.state.pointShadowMap,st.pointShadowMatrix.value=Y.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function Zs(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=za.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Qs(w,X){const oe=se.get(w);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function $l(w,X,oe,ae,Y){X.isScene!==!0&&(X=it),de.resetTextureUnits();const Te=X.fog,$e=ae.isMeshStandardMaterial?X.environment:null,et=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fs,ke=(ae.isMeshStandardMaterial?He:_e).get(ae.envMap||$e),ot=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),st=!!oe.morphAttributes.position,mt=!!oe.morphAttributes.normal,St=!!oe.morphAttributes.color;let Vt=mr;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Vt=T.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Tt=Ct!==void 0?Ct.length:0,Xe=se.get(ae),Et=g.state.lights;if(ge===!0&&(Ne===!0||w!==C)){const Gt=w===C&&ae.id===P;be.setState(ae,w,Gt)}let xt=!1;ae.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Et.state.version||Xe.outputColorSpace!==et||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==ke||ae.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==be.numPlanes||Xe.numIntersection!==be.numIntersection)||Xe.vertexAlphas!==ot||Xe.vertexTangents!==lt||Xe.morphTargets!==st||Xe.morphNormals!==mt||Xe.morphColors!==St||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==Tt)&&(xt=!0):(xt=!0,Xe.__version=ae.version);let nn=Xe.currentProgram;xt===!0&&(nn=bi(ae,X,Y));let Ti=!1,dn=!1,Ar=!1;const Lt=nn.getUniforms(),Kt=Xe.uniforms;if(Z.useProgram(nn.program)&&(Ti=!0,dn=!0,Ar=!0),ae.id!==P&&(P=ae.id,dn=!0),Ti||C!==w){Z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(M,"projectionMatrix",w.projectionMatrix),Lt.setValue(M,"viewMatrix",w.matrixWorldInverse);const hn=Lt.map.cameraPosition;hn!==void 0&&hn.setValue(M,Qe.setFromMatrixPosition(w.matrixWorld)),fe.logarithmicDepthBuffer&&Lt.setValue(M,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Lt.setValue(M,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,dn=!0,Ar=!0)}if(Y.isSkinnedMesh){Lt.setOptional(M,Y,"bindMatrix"),Lt.setOptional(M,Y,"bindMatrixInverse");const Gt=Y.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Lt.setValue(M,"boneTexture",Gt.boneTexture,de))}Y.isBatchedMesh&&(Lt.setOptional(M,Y,"batchingTexture"),Lt.setValue(M,"batchingTexture",Y._matricesTexture,de),Lt.setOptional(M,Y,"batchingIdTexture"),Lt.setValue(M,"batchingIdTexture",Y._indirectTexture,de),Lt.setOptional(M,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Lt.setValue(M,"batchingColorTexture",Y._colorsTexture,de));const Jt=oe.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ae.update(Y,oe,nn),(dn||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Lt.setValue(M,"receiveShadow",Y.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Kt.envMap.value=ke,Kt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&X.environment!==null&&(Kt.envMapIntensity.value=X.environmentIntensity),dn&&(Lt.setValue(M,"toneMappingExposure",T.toneMappingExposure),Xe.needsLights&&Dn(Kt,Ar),Te&&ae.fog===!0&&ve.refreshFogUniforms(Kt,Te),ve.refreshMaterialUniforms(Kt,ae,z,V,g.state.transmissionRenderTarget[w.id]),za.upload(M,Zs(Xe),Kt,de)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(za.upload(M,Zs(Xe),Kt,de),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Lt.setValue(M,"center",Y.center),Lt.setValue(M,"modelViewMatrix",Y.modelViewMatrix),Lt.setValue(M,"normalMatrix",Y.normalMatrix),Lt.setValue(M,"modelMatrix",Y.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Gt=ae.uniformsGroups;for(let hn=0,eo=Gt.length;hn<eo;hn++){const Ai=Gt[hn];rt.update(Ai,nn),rt.bind(Ai,nn)}}return nn}function Dn(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Jo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,X,oe){const ae=se.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(w.texture).__webglTexture=X,se.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const oe=se.get(w);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const Zo=M.createFramebuffer();this.setRenderTarget=function(w,X=0,oe=0){J=w,B=X,k=oe;let ae=!0,Y=null,Te=!1,$e=!1;if(w){const ke=se.get(w);if(ke.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(M.FRAMEBUFFER,null),ae=!1;else if(ke.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(ke.__hasExternalTextures)de.rebindTextures(w,se.get(w.texture).__webglTexture,se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(ke.__boundDepthTexture!==st){if(st!==null&&se.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}const ot=w.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&($e=!0);const lt=se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(lt[X])?Y=lt[X][oe]:Y=lt[X],Te=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?Y=se.get(w).__webglMultisampledFramebuffer:Array.isArray(lt)?Y=lt[oe]:Y=lt,N.copy(w.viewport),ye.copy(w.scissor),D=w.scissorTest}else N.copy(Ce).multiplyScalar(z).floor(),ye.copy(Ue).multiplyScalar(z).floor(),D=ct;if(oe!==0&&(Y=Zo),Z.bindFramebuffer(M.FRAMEBUFFER,Y)&&ae&&Z.drawBuffers(w,Y),Z.viewport(N),Z.scissor(ye),Z.setScissorTest(D),Te){const ke=se.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,oe)}else if($e){const ke=X;for(let ot=0;ot<w.textures.length;ot++){const lt=se.get(w.textures[ot]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+ot,lt.__webglTexture,oe,ke)}}else if(w!==null&&oe!==0){const ke=se.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ke.__webglTexture,oe)}P=-1},this.readRenderTargetPixels=function(w,X,oe,ae,Y,Te,$e,et=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$e!==void 0&&(ke=ke[$e]),ke){Z.bindFramebuffer(M.FRAMEBUFFER,ke);try{const ot=w.textures[et],lt=ot.format,st=ot.type;if(!fe.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ae&&oe>=0&&oe<=w.height-Y&&(w.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(X,oe,ae,Y,Ke.convert(lt),Ke.convert(st),Te))}finally{const ot=J!==null?se.get(J).__webglFramebuffer:null;Z.bindFramebuffer(M.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(w,X,oe,ae,Y,Te,$e,et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$e!==void 0&&(ke=ke[$e]),ke)if(X>=0&&X<=w.width-ae&&oe>=0&&oe<=w.height-Y){Z.bindFramebuffer(M.FRAMEBUFFER,ke);const ot=w.textures[et],lt=ot.format,st=ot.type;if(!fe.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,mt),M.bufferData(M.PIXEL_PACK_BUFFER,Te.byteLength,M.STREAM_READ),w.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(X,oe,ae,Y,Ke.convert(lt),Ke.convert(st),0);const St=J!==null?se.get(J).__webglFramebuffer:null;Z.bindFramebuffer(M.FRAMEBUFFER,St);const Vt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Cv(M,Vt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,mt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Te),M.deleteBuffer(mt),M.deleteSync(Vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,oe=0){const ae=Math.pow(2,-oe),Y=Math.floor(w.image.width*ae),Te=Math.floor(w.image.height*ae),$e=X!==null?X.x:0,et=X!==null?X.y:0;de.setTexture2D(w,0),M.copyTexSubImage2D(M.TEXTURE_2D,oe,0,0,$e,et,Y,Te),Z.unbindTexture()};const $n=M.createFramebuffer(),Qo=M.createFramebuffer();this.copyTextureToTexture=function(w,X,oe=null,ae=null,Y=0,Te=null){Te===null&&(Y!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let $e,et,ke,ot,lt,st,mt,St,Vt;const Ct=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(oe!==null)$e=oe.max.x-oe.min.x,et=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,ot=oe.min.x,lt=oe.min.y,st=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-Y);$e=Math.floor(Ct.width*Jt),et=Math.floor(Ct.height*Jt),w.isDataArrayTexture?ke=Ct.depth:w.isData3DTexture?ke=Math.floor(Ct.depth*Jt):ke=1,ot=0,lt=0,st=0}ae!==null?(mt=ae.x,St=ae.y,Vt=ae.z):(mt=0,St=0,Vt=0);const Tt=Ke.convert(X.format),Xe=Ke.convert(X.type);let Et;X.isData3DTexture?(de.setTexture3D(X,0),Et=M.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(de.setTexture2DArray(X,0),Et=M.TEXTURE_2D_ARRAY):(de.setTexture2D(X,0),Et=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,X.unpackAlignment);const xt=M.getParameter(M.UNPACK_ROW_LENGTH),nn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Ti=M.getParameter(M.UNPACK_SKIP_PIXELS),dn=M.getParameter(M.UNPACK_SKIP_ROWS),Ar=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Ct.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ct.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ot),M.pixelStorei(M.UNPACK_SKIP_ROWS,lt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,st);const Lt=w.isDataArrayTexture||w.isData3DTexture,Kt=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const Jt=se.get(w),Gt=se.get(X),hn=se.get(Jt.__renderTarget),eo=se.get(Gt.__renderTarget);Z.bindFramebuffer(M.READ_FRAMEBUFFER,hn.__webglFramebuffer),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let Ai=0;Ai<ke;Ai++)Lt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,se.get(w).__webglTexture,Y,st+Ai),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,se.get(X).__webglTexture,Te,Vt+Ai)),M.blitFramebuffer(ot,lt,$e,et,mt,St,$e,et,M.DEPTH_BUFFER_BIT,M.NEAREST);Z.bindFramebuffer(M.READ_FRAMEBUFFER,null),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||se.has(w)){const Jt=se.get(w),Gt=se.get(X);Z.bindFramebuffer(M.READ_FRAMEBUFFER,$n),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,Qo);for(let hn=0;hn<ke;hn++)Lt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Jt.__webglTexture,Y,st+hn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Jt.__webglTexture,Y),Kt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Gt.__webglTexture,Te,Vt+hn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Gt.__webglTexture,Te),Y!==0?M.blitFramebuffer(ot,lt,$e,et,mt,St,$e,et,M.COLOR_BUFFER_BIT,M.NEAREST):Kt?M.copyTexSubImage3D(Et,Te,mt,St,Vt+hn,ot,lt,$e,et):M.copyTexSubImage2D(Et,Te,mt,St,ot,lt,$e,et);Z.bindFramebuffer(M.READ_FRAMEBUFFER,null),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Kt?w.isDataTexture||w.isData3DTexture?M.texSubImage3D(Et,Te,mt,St,Vt,$e,et,ke,Tt,Xe,Ct.data):X.isCompressedArrayTexture?M.compressedTexSubImage3D(Et,Te,mt,St,Vt,$e,et,ke,Tt,Ct.data):M.texSubImage3D(Et,Te,mt,St,Vt,$e,et,ke,Tt,Xe,Ct):w.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Te,mt,St,$e,et,Tt,Xe,Ct.data):w.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Te,mt,St,Ct.width,Ct.height,Tt,Ct.data):M.texSubImage2D(M.TEXTURE_2D,Te,mt,St,$e,et,Tt,Xe,Ct);M.pixelStorei(M.UNPACK_ROW_LENGTH,xt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,nn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ti),M.pixelStorei(M.UNPACK_SKIP_ROWS,dn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ar),Te===0&&X.generateMipmaps&&M.generateMipmap(Et),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,X,oe=null,ae=null,Y=0){return As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,oe,ae,Y)},this.initRenderTarget=function(w){se.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){B=0,k=0,J=null,Z.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function Df(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Bt={},Rs=[],Si=()=>{},eg=()=>!1,Al=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wl=n=>n.startsWith("onUpdate:"),fn=Object.assign,Lf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$M=Object.prototype.hasOwnProperty,At=(n,e)=>$M.call(n,e),ht=Array.isArray,Wr=n=>Vo(n)==="[object Map]",Wu=n=>Vo(n)==="[object Set]",Gh=n=>Vo(n)==="[object Date]",dt=n=>typeof n=="function",Yt=n=>typeof n=="string",yr=n=>typeof n=="symbol",kt=n=>n!==null&&typeof n=="object",tg=n=>(kt(n)||dt(n))&&dt(n.then)&&dt(n.catch),XM=Object.prototype.toString,Vo=n=>XM.call(n),qM=n=>Vo(n).slice(8,-1),jM=n=>Vo(n)==="[object Object]",Of=n=>Yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mo=Df(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},YM=/-\w/g,ti=Rl(n=>n.replace(YM,e=>e.slice(1).toUpperCase())),KM=/\B([A-Z])/g,es=Rl(n=>n.replace(KM,"-$1").toLowerCase()),ng=Rl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bc=Rl(n=>n?`on${ng(n)}`:""),Bi=(n,e)=>!Object.is(n,e),kc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ig=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},JM=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wh;const Cl=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uf(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Yt(i)?tb(i):Uf(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Yt(n)||kt(n))return n}const ZM=/;(?![^(]*\))/g,QM=/:([^]+)/,eb=/\/\*[^]*?\*\//g;function tb(n){const e={};return n.replace(eb,"").split(ZM).forEach(t=>{if(t){const i=t.split(QM);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nf(n){let e="";if(Yt(n))e=n;else if(ht(n))for(let t=0;t<n.length;t++){const i=Nf(n[t]);i&&(e+=i+" ")}else if(kt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const nb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ib=Df(nb);function rg(n){return!!n||n===""}function rb(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Pl(n[i],e[i]);return t}function $h(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&Pl(r,t[o])){s=o;break}if(s<0)return!1;i[s]=1}return!0}function Pl(n,e){if(n===e)return!0;let t=Gh(n),i=Gh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=yr(n),i=yr(e),t||i)return n===e;if(t=ht(n),i=ht(e),t||i)return t&&i?rb(n,e):!1;if(t=kt(n),i=kt(e),t||i){if(!t||!i)return!1;if(t=Wr(n),i=Wr(e),t||i||(t=Wu(n),i=Wu(e),t||i))return t&&i?$h(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Pl(n[o],e[o]))return!1}}return String(n)===String(e)}let un;class sb{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&un&&(un.active?(this.parent=un,this.index=(un.scopes||(un.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){++this._on===1&&(this.prevScope=un,un=this)}off(){if(this._on>0&&--this._on===0){if(un===this)un=this.prevScope;else{let e=un;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ob(){return un}let Nt;const zc=new WeakSet;class sg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&(un.active?un.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zc.has(this)&&(zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ag(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xh(this),lg(this);const e=Nt,t=ni;Nt=this,ni=!0;try{return this.fn()}finally{cg(this),Nt=e,ni=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kf(e);this.deps=this.depsTail=void 0,Xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$u(this)&&this.run()}get dirty(){return $u(this)}}let og=0,go,_o;function ag(n,e=!1){if(n.flags|=8,e){n.next=_o,_o=n;return}n.next=go,go=n}function Ff(){og++}function Bf(){if(--og>0)return;if(_o){let e=_o;for(_o=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;go;){let e=go;for(go=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function lg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),kf(i),ab(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function $u(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ug(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ug(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===To)||(n.globalVersion=To,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$u(n))))return;n.flags|=2;const e=n.dep,t=Nt,i=ni;Nt=n,ni=!0;try{lg(n);const r=n.fn(n._value);(e.version===0||Bi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Nt=t,ni=i,cg(n),n.flags&=-3}}function kf(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)kf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ab(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ni=!0;const fg=[];function ji(){fg.push(ni),ni=!1}function Yi(){const n=fg.pop();ni=n===void 0?!0:n}function Xh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Nt;Nt=void 0;try{e()}finally{Nt=t}}}let To=0;class lb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dg{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Nt||!ni||Nt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Nt)t=this.activeLink=new lb(Nt,this),Nt.deps?(t.prevDep=Nt.depsTail,Nt.depsTail.nextDep=t,Nt.depsTail=t):Nt.deps=Nt.depsTail=t,hg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Nt.depsTail,t.nextDep=void 0,Nt.depsTail.nextDep=t,Nt.depsTail=t,Nt.deps===t&&(Nt.deps=i)}return t}trigger(e){this.version++,To++,this.notify(e)}notify(e){Ff();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bf()}}}function hg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xu=new WeakMap,$r=Symbol(""),qu=Symbol(""),Ao=Symbol("");function gn(n,e,t){if(ni&&Nt){let i=Xu.get(n);i||Xu.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new dg),r.map=i,r.key=t),r.track()}}function ki(n,e,t,i,r,s){const o=Xu.get(n);if(!o){To++;return}const a=c=>{c&&c.trigger()};if(Ff(),e==="clear")o.forEach(a);else{const c=ht(n),f=c&&Of(t);if(c&&t==="length"){const d=Number(i);o.forEach((u,p)=>{(p==="length"||p===Ao||!yr(p)&&p>=d)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),f&&a(o.get(Ao)),e){case"add":c?f&&a(o.get("length")):(a(o.get($r)),Wr(n)&&a(o.get(qu)));break;case"delete":c||(a(o.get($r)),Wr(n)&&a(o.get(qu)));break;case"set":Wr(n)&&a(o.get($r));break}}Bf()}function Ss(n){const e=Dt(n);return e===n?e:(gn(e,"iterate",Ao),Ei(n)?e:e.map(Jr))}function zf(n){return gn(n=Dt(n),"iterate",Ao),n}function di(n,e){return Kr(n)?wo(Cs(n)?Jr(e):e):Jr(e)}const cb={__proto__:null,[Symbol.iterator](){return Vc(this,Symbol.iterator,n=>di(this,n))},concat(...n){return Ss(this).concat(...n.map(e=>ht(e)?Ss(e):e))},entries(){return Vc(this,"entries",n=>(n[1]=di(this,n[1]),n))},every(n,e){return Di(this,"every",n,e,void 0,arguments)},filter(n,e){return Di(this,"filter",n,e,t=>t.map(i=>di(this,i)),arguments)},find(n,e){return Di(this,"find",n,e,t=>di(this,t),arguments)},findIndex(n,e){return Di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Di(this,"findLast",n,e,t=>di(this,t),arguments)},findLastIndex(n,e){return Di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Di(this,"forEach",n,e,void 0,arguments)},includes(...n){return Hc(this,"includes",n)},indexOf(...n){return Hc(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return Hc(this,"lastIndexOf",n)},map(n,e){return Di(this,"map",n,e,void 0,arguments)},pop(){return lo(this,"pop")},push(...n){return lo(this,"push",n)},reduce(n,...e){return qh(this,"reduce",n,e)},reduceRight(n,...e){return qh(this,"reduceRight",n,e)},shift(){return lo(this,"shift")},some(n,e){return Di(this,"some",n,e,void 0,arguments)},splice(...n){return lo(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return lo(this,"unshift",n)},values(){return Vc(this,"values",n=>di(this,n))}};function Vc(n,e,t){const i=zf(n),r=i[e]();return i!==n&&!Ei(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ub=Array.prototype;function Di(n,e,t,i,r,s){const o=zf(n),a=o!==n&&!Ei(n),c=o[e];if(c!==ub[e]){const u=c.apply(n,s);return a?Jr(u):u}let f=t;o!==n&&(a?f=function(u,p){return t.call(this,di(n,u),p,n)}:t.length>2&&(f=function(u,p){return t.call(this,u,p,n)}));const d=c.call(o,f,i);return a&&r?r(d):d}function qh(n,e,t,i){const r=zf(n),s=r!==n&&!Ei(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(f,d,u){return a&&(a=!1,f=di(n,f)),t.call(this,f,di(n,d),u,n)}):t.length>3&&(o=function(f,d,u){return t.call(this,f,d,u,n)}));const c=r[e](o,...i);return a?di(n,c):c}function Hc(n,e,t){const i=Dt(n);gn(i,"iterate",Ao);const r=i[e](...t);return(r===-1||r===!1)&&Wf(t[0])?(t[0]=Dt(t[0]),i[e](...t)):r}function lo(n,e,t=[]){ji(),Ff();const i=Dt(n)[e].apply(n,t);return Bf(),Yi(),i}const fb=Df("__proto__,__v_isRef,__isVue"),pg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yr));function db(n){yr(n)||(n=String(n));const e=Dt(this);return gn(e,"has",n),e.hasOwnProperty(n)}class mg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Eb:xg:s?vg:_g).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ht(e);if(!r){let c;if(o&&(c=cb[t]))return c;if(t==="hasOwnProperty")return db}const a=Reflect.get(e,t,Tn(e)?e:i);if((yr(t)?pg.has(t):fb(t))||(r||gn(e,"get",t),s))return a;if(Tn(a)){const c=o&&Of(t)?a:a.value;return r&&kt(c)?Yu(c):c}return kt(a)?r?Yu(a):Hf(a):a}}class gg extends mg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=ht(e)&&Of(t);if(!this._isShallow){const f=Kr(s);if(!Ei(i)&&!Kr(i)&&(s=Dt(s),i=Dt(i)),!o&&Tn(s)&&!Tn(i))return f||(s.value=i),!0}const a=o?Number(t)<e.length:At(e,t),c=Reflect.set(e,t,i,Tn(e)?e:r);return e===Dt(r)&&c&&(a?Bi(i,s)&&ki(e,"set",t,i):ki(e,"add",t,i)),c}deleteProperty(e,t){const i=At(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ki(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!yr(t)||!pg.has(t))&&gn(e,"has",t),i}ownKeys(e){return gn(e,"iterate",ht(e)?"length":$r),Reflect.ownKeys(e)}}class hb extends mg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pb=new gg,mb=new hb,gb=new gg(!0);const ju=n=>n,Ca=n=>Reflect.getPrototypeOf(n);function _b(n,e,t){return function(...i){const r=this.__v_raw,s=Dt(r),o=Wr(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,f=r[n](...i),d=t?ju:e?wo:Jr;return!e&&gn(s,"iterate",c?qu:$r),fn(Object.create(f),{next(){const{value:u,done:p}=f.next();return p?{value:u,done:p}:{value:a?[d(u[0]),d(u[1])]:d(u),done:p}}})}}function Pa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vb(n,e){const t={get(r){const s=this.__v_raw,o=Dt(s),a=Dt(r);n||(Bi(r,a)&&gn(o,"get",r),gn(o,"get",a));const{has:c}=Ca(o),f=e?ju:n?wo:Jr;if(c.call(o,r))return f(s.get(r));if(c.call(o,a))return f(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&gn(Dt(r),"iterate",$r),r.size},has(r){const s=this.__v_raw,o=Dt(s),a=Dt(r);return n||(Bi(r,a)&&gn(o,"has",r),gn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=Dt(a),f=e?ju:n?wo:Jr;return!n&&gn(c,"iterate",$r),a.forEach((d,u)=>r.call(s,f(d),f(u),o))}};return fn(t,n?{add:Pa("add"),set:Pa("set"),delete:Pa("delete"),clear:Pa("clear")}:{add(r){const s=Dt(this),o=Ca(s),a=Dt(r),c=!e&&!Ei(r)&&!Kr(r)?a:r;return o.has.call(s,c)||Bi(r,c)&&o.has.call(s,r)||Bi(a,c)&&o.has.call(s,a)||(s.add(c),ki(s,"add",c,c)),this},set(r,s){!e&&!Ei(s)&&!Kr(s)&&(s=Dt(s));const o=Dt(this),{has:a,get:c}=Ca(o);let f=a.call(o,r);f||(r=Dt(r),f=a.call(o,r));const d=c.call(o,r);return o.set(r,s),f?Bi(s,d)&&ki(o,"set",r,s):ki(o,"add",r,s),this},delete(r){const s=Dt(this),{has:o,get:a}=Ca(s);let c=o.call(s,r);c||(r=Dt(r),c=o.call(s,r)),a&&a.call(s,r);const f=s.delete(r);return c&&ki(s,"delete",r,void 0),f},clear(){const r=Dt(this),s=r.size!==0,o=r.clear();return s&&ki(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_b(r,n,e)}),t}function Vf(n,e){const t=vb(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(At(t,r)&&r in i?t:i,r,s)}const xb={get:Vf(!1,!1)},yb={get:Vf(!1,!0)},Sb={get:Vf(!0,!1)};const _g=new WeakMap,vg=new WeakMap,xg=new WeakMap,Eb=new WeakMap;function Mb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hf(n){return Kr(n)?n:Gf(n,!1,pb,xb,_g)}function bb(n){return Gf(n,!1,gb,yb,vg)}function Yu(n){return Gf(n,!0,mb,Sb,xg)}function Gf(n,e,t,i,r){if(!kt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Mb(qM(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Cs(n){return Kr(n)?Cs(n.__v_raw):!!(n&&n.__v_isReactive)}function Kr(n){return!!(n&&n.__v_isReadonly)}function Ei(n){return!!(n&&n.__v_isShallow)}function Wf(n){return n?!!n.__v_raw:!1}function Dt(n){const e=n&&n.__v_raw;return e?Dt(e):n}function Tb(n){return!At(n,"__v_skip")&&Object.isExtensible(n)&&ig(n,"__v_skip",!0),n}const Jr=n=>kt(n)?Hf(n):n,wo=n=>kt(n)?Yu(n):n;function Tn(n){return n?n.__v_isRef===!0:!1}function Ab(n){return Tn(n)?n.value:n}const wb={get:(n,e,t)=>e==="__v_raw"?n:Ab(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tn(r)&&!Tn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function yg(n){return Cs(n)?n:new Proxy(n,wb)}class Rb{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dg(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=To-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return ag(this,!0),!0}get value(){const e=this.dep.track();return ug(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cb(n,e,t=!1){let i,r;return dt(n)?i=n:(i=n.get,r=n.set),new Rb(i,r,t)}const Ia={},Qa=new WeakMap;let Br;function Pb(n,e=!1,t=Br){if(t){let i=Qa.get(t);i||Qa.set(t,i=[]),i.push(n)}}function Ib(n,e,t=Bt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,f=T=>r?T:Ei(T)||r===!1||r===0?cr(T,1):cr(T);let d,u,p,m,x=!1,y=!1;if(Tn(n)?(u=()=>n.value,x=Ei(n)):Cs(n)?(u=()=>f(n),x=!0):ht(n)?(y=!0,x=n.some(T=>Cs(T)||Ei(T)),u=()=>n.map(T=>{if(Tn(T))return T.value;if(Cs(T))return f(T);if(dt(T))return c?c(T,2):T()})):dt(n)?e?u=c?()=>c(n,2):n:u=()=>{if(p){ji();try{p()}finally{Yi()}}const T=Br;Br=d;try{return c?c(n,3,[m]):n(m)}finally{Br=T}}:u=Si,e&&r){const T=u,U=r===!0?1/0:r;u=()=>cr(T(),U)}const v=ob(),g=()=>{d.stop(),v&&v.active&&Lf(v.effects,d)};if(s&&e){const T=e;e=(...U)=>{const B=T(...U);return g(),B}}let I=y?new Array(n.length).fill(Ia):Ia;const R=T=>{if(!(!(d.flags&1)||!d.dirty&&!T))if(e){const U=d.run();if(T||r||x||(y?U.some((B,k)=>Bi(B,I[k])):Bi(U,I))){p&&p();const B=Br;Br=d;try{const k=[U,I===Ia?void 0:y&&I[0]===Ia?[]:I,m];I=U,c?c(e,3,k):e(...k)}finally{Br=B}}}else d.run()};return a&&a(R),d=new sg(u),d.scheduler=o?()=>o(R,!1):R,m=T=>Pb(T,!1,d),p=d.onStop=()=>{const T=Qa.get(d);if(T){if(c)c(T,4);else for(const U of T)U();Qa.delete(d)}},e?i?R(!0):I=d.run():o?o(R.bind(null,!0),!0):d.run(),g.pause=d.pause.bind(d),g.resume=d.resume.bind(d),g.stop=g,g}function cr(n,e=1/0,t){if(e<=0||!kt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Tn(n))cr(n.value,e,t);else if(ht(n))for(let i=0;i<n.length;i++)cr(n[i],e,t);else if(Wu(n)||Wr(n))n.forEach(i=>{cr(i,e,t)});else if(jM(n)){for(const i in n)cr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&cr(n[i],e,t)}return n}function Ho(n,e,t,i){try{return i?n(...i):n()}catch(r){Il(r,e,t)}}function ri(n,e,t,i){if(dt(n)){const r=Ho(n,e,t,i);return r&&tg(r)&&r.catch(s=>{Il(s,e,t)}),r}if(ht(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ri(n[s],e,t,i));return r}}function Il(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Bt;if(e){let a=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,c,f)===!1)return}a=a.parent}if(s){ji(),Ho(s,null,10,[n,c,f]),Yi();return}}Db(n,t,r,i,o)}function Db(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const En=[];let ui=-1;const Ps=[];let ar=null,Es=0;const Sg=Promise.resolve();let el=null;function Lb(n){const e=el||Sg;return n?e.then(this?n.bind(this):n):e}function Ob(n){let e=ui+1,t=En.length;for(;e<t;){const i=e+t>>>1,r=En[i],s=Ro(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function $f(n){if(!(n.flags&1)){const e=Ro(n),t=En[En.length-1];!t||!(n.flags&2)&&e>=Ro(t)?En.push(n):En.splice(Ob(e),0,n),n.flags|=1,Eg()}}function Eg(){el||(el=Sg.then(bg))}function Ub(n){if(!ht(n))ar&&n.id===-1?ar.splice(Es+1,0,n):n.flags&1||(Ps.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Ps.push(n[e]);Eg()}function jh(n,e,t=ui+1){for(;t<En.length;t++){const i=En[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;En.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mg(n){if(Ps.length){const e=[...new Set(Ps)].sort((t,i)=>Ro(t)-Ro(i));if(Ps.length=0,ar){for(let t=0;t<e.length;t++)ar.push(e[t]);return}for(ar=e,Es=0;Es<ar.length;Es++){const t=ar[Es];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ar=null,Es=0}}const Ro=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bg(n){try{for(ui=0;ui<En.length;ui++){const e=En[ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ui<En.length;ui++){const e=En[ui];e&&(e.flags&=-2)}ui=-1,En.length=0,Mg(),el=null,(En.length||Ps.length)&&bg()}}let vi=null,Tg=null;function tl(n){const e=vi;return vi=n,Tg=n&&n.type.__scopeId||null,e}function Nb(n,e=vi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&sp(-1);const s=tl(e),o=Xr.length;let a;try{a=n(...r)}finally{for(let c=Xr.length;c>o;c--)Yg();tl(s),i._d&&sp(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Or(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(ji(),ri(c,t,8,[n.el,a,n,e]),Yi())}}function Fb(n,e){if(Mn){let t=Mn.provides;const i=Mn.parent&&Mn.parent.provides;i===t&&(t=Mn.provides=Object.create(i)),t[n]=e}}function Va(n,e,t=!1){const i=FT();if(i||Is){let r=Is?Is._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&dt(e)?e.call(i&&i.proxy):e}}const Bb=Symbol.for("v-scx"),kb=()=>Va(Bb);function Gc(n,e,t){return Ag(n,e,t)}function Ag(n,e,t=Bt){const{immediate:i,deep:r,flush:s,once:o}=t,a=fn({},t),c=e&&i||!e&&s!=="post";let f;if(Io){if(s==="sync"){const m=kb();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Si,m.resume=Si,m.pause=Si,m}}const d=Mn;a.call=(m,x,y)=>ri(m,d,x,y);let u=!1;s==="post"?a.scheduler=m=>{Rn(m,d&&d.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(m,x)=>{x?m():$f(m)}),a.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const p=Ib(n,e,a);return Io&&(f?f.push(p):c&&p()),p}function zb(n,e,t){const i=this.proxy,r=Yt(n)?n.includes(".")?wg(i,n):()=>i[n]:n.bind(i,i);let s;dt(e)?s=e:(s=e.handler,t=e);const o=Go(this),a=Ag(r,s.bind(i),t);return o(),a}function wg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vb=Symbol("_vte"),Dl=n=>n.__isTeleport,Wc=Symbol("_leaveCb");function Hb(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zr){e=t;break}}return e}function Rg(n){if(!qf(n))return Dl(n.type)&&n.children?Hb(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&dt(t.default))return t.default()}}function Xf(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Xf(Dl(t.type)&&Rg(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gb(n,e){return dt(n)?fn({name:n.name},e,{setup:n}):n}function Cg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Yh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const nl=new WeakMap;function vo(n,e,t,i,r=!1){if(ht(n)){n.forEach((y,v)=>vo(y,e&&(ht(e)?e[v]:e),t,i,r));return}if(xo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vo(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Kf(i.component):i.el,o=r?null:s,{i:a,r:c}=n,f=e&&e.r,d=a.refs===Bt?a.refs={}:a.refs,u=a.setupState,p=Dt(u),m=u===Bt?eg:y=>Yh(d,y)?!1:At(p,y),x=(y,v)=>!(v&&Yh(d,v));if(f!=null&&f!==c){if(Kh(e),Yt(f))d[f]=null,m(f)&&(u[f]=null);else if(Tn(f)){const y=e;x(f,y.k)&&(f.value=null),y.k&&(d[y.k]=null)}}if(dt(c))Ho(c,a,12,[o,d]);else{const y=Yt(c),v=Tn(c);if(y||v){const g=()=>{if(n.f){const I=y?m(c)?u[c]:d[c]:x()||!n.k?c.value:d[n.k];if(r)ht(I)&&Lf(I,s);else if(ht(I))I.includes(s)||I.push(s);else if(y)d[c]=[s],m(c)&&(u[c]=d[c]);else{const R=[s];x(c,n.k)&&(c.value=R),n.k&&(d[n.k]=R)}}else y?(d[c]=o,m(c)&&(u[c]=o)):v&&(x(c,n.k)&&(c.value=o),n.k&&(d[n.k]=o))};if(o){const I=()=>{g(),nl.delete(n)};I.id=-1,nl.set(n,I),Rn(I,t)}else Kh(n),g()}}}function Kh(n){const e=nl.get(n);e&&(e.flags|=8,nl.delete(n))}Cl().requestIdleCallback;Cl().cancelIdleCallback;const xo=n=>!!n.type.__asyncLoader,qf=n=>n.type.__isKeepAlive;function Wb(n,e){Pg(n,"a",e)}function $b(n,e){Pg(n,"da",e)}function Pg(n,e,t=Mn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ll(e,i,t),t){let r=t.parent;for(;r&&r.parent;)qf(r.parent.vnode)&&Xb(i,e,t,r),r=r.parent}}function Xb(n,e,t,i){const r=Ll(e,n,i,!0);Ig(()=>{Lf(i[e],r)},t)}function Ll(n,e,t=Mn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ji();const a=Go(t),c=ri(e,t,n,o);return a(),Yi(),c});return i?r.unshift(s):r.push(s),s}}const Ji=n=>(e,t=Mn)=>{(!Io||n==="sp")&&Ll(n,(...i)=>e(...i),t)},qb=Ji("bm"),jb=Ji("m"),Yb=Ji("bu"),Kb=Ji("u"),Jb=Ji("bum"),Ig=Ji("um"),Zb=Ji("sp"),Qb=Ji("rtg"),eT=Ji("rtc");function tT(n,e=Mn){Ll("ec",n,e)}const nT=Symbol.for("v-ndc"),Ku=n=>n?Zg(n)?Kf(n):Ku(n.parent):null,yo=fn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ku(n.parent),$root:n=>Ku(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Lg(n),$forceUpdate:n=>n.f||(n.f=()=>{$f(n.update)}),$nextTick:n=>n.n||(n.n=Lb.bind(n.proxy)),$watch:n=>zb.bind(n)}),$c=(n,e)=>n!==Bt&&!n.__isScriptSetup&&At(n,e),iT={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if($c(i,e))return o[e]=1,i[e];if(r!==Bt&&At(r,e))return o[e]=2,r[e];if(At(s,e))return o[e]=3,s[e];if(t!==Bt&&At(t,e))return o[e]=4,t[e];Ju&&(o[e]=0)}}const f=yo[e];let d,u;if(f)return e==="$attrs"&&gn(n.attrs,"get",""),f(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Bt&&At(t,e))return o[e]=4,t[e];if(u=c.config.globalProperties,At(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return $c(r,e)?(r[e]=t,!0):i!==Bt&&At(i,e)?(i[e]=t,!0):At(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let c;return!!(t[a]||n!==Bt&&a[0]!=="$"&&At(n,a)||$c(e,a)||At(s,a)||At(i,a)||At(yo,a)||At(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:At(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Jh(n){return ht(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ju=!0;function rT(n){const e=Lg(n),t=n.proxy,i=n.ctx;Ju=!1,e.beforeCreate&&Zh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:f,created:d,beforeMount:u,mounted:p,beforeUpdate:m,updated:x,activated:y,deactivated:v,beforeDestroy:g,beforeUnmount:I,destroyed:R,unmounted:T,render:U,renderTracked:B,renderTriggered:k,errorCaptured:J,serverPrefetch:P,expose:C,inheritAttrs:N,components:ye,directives:D,filters:W}=e;if(f&&sT(f,i,null),o)for(const V in o){const z=o[V];dt(z)&&(i[V]=z.bind(t))}if(r){const V=r.call(t,t);kt(V)&&(n.data=Hf(V))}if(Ju=!0,s)for(const V in s){const z=s[V],Se=dt(z)?z.bind(t,t):dt(z.get)?z.get.bind(t,t):Si,Ee=!dt(z)&&dt(z.set)?z.set.bind(t):Si,Ce=GT({get:Se,set:Ee});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Ue=>Ce.value=Ue})}if(a)for(const V in a)Dg(a[V],i,t,V);if(c){const V=dt(c)?c.call(t):c;Reflect.ownKeys(V).forEach(z=>{Fb(z,V[z])})}d&&Zh(d,n,"c");function F(V,z){ht(z)?z.forEach(Se=>V(Se.bind(t))):z&&V(z.bind(t))}if(F(qb,u),F(jb,p),F(Yb,m),F(Kb,x),F(Wb,y),F($b,v),F(tT,J),F(eT,B),F(Qb,k),F(Jb,I),F(Ig,T),F(Zb,P),ht(C))if(C.length){const V=n.exposed||(n.exposed={});C.forEach(z=>{Object.defineProperty(V,z,{get:()=>t[z],set:Se=>t[z]=Se,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Si&&(n.render=U),N!=null&&(n.inheritAttrs=N),ye&&(n.components=ye),D&&(n.directives=D),P&&Cg(n)}function sT(n,e,t=Si){ht(n)&&(n=Zu(n));for(const i in n){const r=n[i];let s;kt(r)?"default"in r?s=Va(r.from||i,r.default,!0):s=Va(r.from||i):s=Va(r),Tn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Zh(n,e,t){ri(ht(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Dg(n,e,t,i){let r=i.includes(".")?wg(t,i):()=>t[i];if(Yt(n)){const s=e[n];dt(s)&&Gc(r,s)}else if(dt(n))Gc(r,n.bind(t));else if(kt(n))if(ht(n))n.forEach(s=>Dg(s,e,t,i));else{const s=dt(n.handler)?n.handler.bind(t):e[n.handler];dt(s)&&Gc(r,s,n)}}function Lg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(f=>il(c,f,o,!0)),il(c,e,o)),kt(e)&&s.set(e,c),c}function il(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&il(n,s,t,!0),r&&r.forEach(o=>il(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=oT[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const oT={data:Qh,props:ep,emits:ep,methods:ho,computed:ho,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:ho,directives:ho,watch:lT,provide:Qh,inject:aT};function Qh(n,e){return e?n?function(){return fn(dt(n)?n.call(this,this):n,dt(e)?e.call(this,this):e)}:e:n}function aT(n,e){return ho(Zu(n),Zu(e))}function Zu(n){if(ht(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yn(n,e){return n?[...new Set([].concat(n,e))]:e}function ho(n,e){return n?fn(Object.create(null),n,e):e}function ep(n,e){return n?ht(n)&&ht(e)?[...new Set([...n,...e])]:fn(Object.create(null),Jh(n),Jh(e??{})):e}function lT(n,e){if(!n)return e;if(!e)return n;const t=fn(Object.create(null),n);for(const i in e)t[i]=yn(n[i],e[i]);return t}function Og(){return{app:null,config:{isNativeTag:eg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cT=0;function uT(n,e){return function(i,r=null){dt(i)||(i=fn({},i)),r!=null&&!kt(r)&&(r=null);const s=Og(),o=new WeakSet,a=[];let c=!1;const f=s.app={_uid:cT++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:WT,get config(){return s.config},set config(d){},use(d,...u){return o.has(d)||(d&&dt(d.install)?(o.add(d),d.install(f,...u)):dt(d)&&(o.add(d),d(f,...u))),f},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),f},component(d,u){return u?(s.components[d]=u,f):s.components[d]},directive(d,u){return u?(s.directives[d]=u,f):s.directives[d]},mount(d,u,p){if(!c){const m=f._ceVNode||Nn(i,r);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),n(m,d,p),c=!0,f._container=d,d.__vue_app__=f,Kf(m.component)}},onUnmount(d){a.push(d)},unmount(){c&&(ri(a,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,u){return s.provides[d]=u,f},runWithContext(d){const u=Is;Is=f;try{return d()}finally{Is=u}}};return f}}let Is=null;const fT=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ti(e)}Modifiers`]||n[`${es(e)}Modifiers`];function dT(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Bt;let r=t;const s=e.startsWith("update:"),o=s&&fT(i,e.slice(7));o&&(o.trim&&(r=t.map(d=>Yt(d)?d.trim():d)),o.number&&(r=r.map(JM)));let a,c=i[a=Bc(e)]||i[a=Bc(ti(e))];!c&&s&&(c=i[a=Bc(es(e))]),c&&ri(c,n,6,r);const f=i[a+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ri(f,n,6,r)}}const hT=new WeakMap;function Ug(n,e,t=!1){const i=t?hT:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!dt(n)){const c=f=>{const d=Ug(f,e,!0);d&&(a=!0,fn(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(kt(n)&&i.set(n,null),null):(ht(s)?s.forEach(c=>o[c]=null):fn(o,s),kt(n)&&i.set(n,o),o)}function Ol(n,e){return!n||!Al(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),At(n,e[0].toLowerCase()+e.slice(1))||At(n,es(e))||At(n,e))}function tp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:f,renderCache:d,props:u,data:p,setupState:m,ctx:x,inheritAttrs:y}=n,v=tl(n);let g,I;try{if(t.shapeFlag&4){const T=r||i,U=T;g=hi(f.call(U,T,d,u,m,p,x)),I=a}else{const T=e;g=hi(T.length>1?T(u,{attrs:a,slots:o,emit:c}):T(u,null)),I=e.props?a:pT(a)}}catch(T){Xr.length=0,Il(T,n,1),g=Nn(Zr)}let R=g;if(I&&y!==!1){const T=Object.keys(I),{shapeFlag:U}=R;T.length&&U&7&&(s&&T.some(wl)&&(I=mT(I,s)),R=zs(R,I,!1,!0))}if(t.dirs&&(R=zs(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition){const T=Dl(R.type)&&Rg(R)||R;Xf(T,t.transition)}return g=R,tl(v),g}const pT=n=>{let e;for(const t in n)(t==="class"||t==="style"||Al(t))&&((e||(e={}))[t]=n[t]);return e},mT=(n,e)=>{const t={};for(const i in n)(!wl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gT(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?np(i,o,f):!!o;if(c&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(Ng(o,i,p)&&!Ol(f,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?np(i,o,f):!0:!!o;return!1}function np(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Ng(e,n,s)&&!Ol(t,s))return!0}return!1}function Ng(n,e,t){const i=n[t],r=e[t];return t==="style"&&kt(i)&&kt(r)?!Pl(i,r):i!==r}function _T({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Fg={},Bg=()=>Object.create(Fg),kg=n=>Object.getPrototypeOf(n)===Fg;function vT(n,e,t,i=!1){const r={},s=Bg();n.propsDefaults=Object.create(null),zg(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:bb(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xT(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Dt(r),[c]=n.propsOptions;let f=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Ol(n.emitsOptions,p))continue;const m=e[p];if(c)if(At(s,p))m!==s[p]&&(s[p]=m,f=!0);else{const x=ti(p);r[x]=Qu(c,a,x,m,n,!1)}else m!==s[p]&&(s[p]=m,f=!0)}}}else{zg(n,e,r,s)&&(f=!0);let d;for(const u in a)(!e||!At(e,u)&&((d=es(u))===u||!At(e,d)))&&(c?t&&(t[u]!==void 0||t[d]!==void 0)&&(r[u]=Qu(c,a,u,void 0,n,!0)):delete r[u]);if(s!==a)for(const u in s)(!e||!At(e,u))&&(delete s[u],f=!0)}f&&ki(n.attrs,"set","")}function zg(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const f=e[c];let d;r&&At(r,d=ti(c))?!s||!s.includes(d)?t[d]=f:(a||(a={}))[d]=f:Ol(n.emitsOptions,c)||(!(c in i)||f!==i[c])&&(i[c]=f,o=!0)}if(s){const c=Dt(t),f=a||Bt;for(let d=0;d<s.length;d++){const u=s[d];t[u]=Qu(r,c,u,f[u],n,!At(f,u))}}return o}function Qu(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=At(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&dt(c)){const{propsDefaults:f}=r;if(t in f)i=f[t];else{const d=Go(r);i=f[t]=c.call(null,e),d()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===es(t))&&(i=!0))}return i}const yT=new WeakMap;function Vg(n,e,t=!1){const i=t?yT:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!dt(n)){const d=u=>{c=!0;const[p,m]=Vg(u,e,!0);fn(o,p),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!c)return kt(n)&&i.set(n,Rs),Rs;if(ht(s))for(let d=0;d<s.length;d++){const u=ti(s[d]);ip(u)&&(o[u]=Bt)}else if(s)for(const d in s){const u=ti(d);if(ip(u)){const p=s[d],m=o[u]=ht(p)||dt(p)?{type:p}:fn({},p),x=m.type;let y=!1,v=!0;if(ht(x))for(let g=0;g<x.length;++g){const I=x[g],R=dt(I)&&I.name;if(R==="Boolean"){y=!0;break}else R==="String"&&(v=!1)}else y=dt(x)&&x.name==="Boolean";m[0]=y,m[1]=v,(y||At(m,"default"))&&a.push(u)}}const f=[o,a];return kt(n)&&i.set(n,f),f}function ip(n){return n[0]!=="$"&&!mo(n)}const jf=n=>n==="_"||n==="_ctx"||n==="$stable",Yf=n=>ht(n)?n.map(hi):[hi(n)],ST=(n,e,t)=>{if(e._n)return e;const i=Nb((...r)=>Yf(e(...r)),t);return i._c=!1,i},Hg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(jf(r))continue;const s=n[r];if(dt(s))e[r]=ST(r,s,i);else if(s!=null){const o=Yf(s);e[r]=()=>o}}},Gg=(n,e)=>{const t=Yf(e);n.slots.default=()=>t},Wg=(n,e,t)=>{for(const i in e)(t||!jf(i))&&(n[i]=e[i])},ET=(n,e,t)=>{const i=n.slots=Bg();if(n.vnode.shapeFlag&32){const r=e._;r?(Wg(i,e,t),t&&ig(i,"_",r,!0)):Hg(e,i)}else e&&Gg(n,e)},MT=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Wg(r,e,t):(s=!e.$stable,Hg(e,r)),o=e}else e&&(Gg(n,e),o={default:1});if(s)for(const a in r)!jf(a)&&o[a]==null&&delete r[a]},Rn=RT;function bT(n){return TT(n)}function TT(n,e){const t=Cl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:f,setElementText:d,parentNode:u,nextSibling:p,setScopeId:m=Si,insertStaticContent:x}=n,y=(L,M,ee,re=null,fe=null,Z=null,Me=void 0,se=null,de=!!M.dynamicChildren)=>{if(L===M)return;L&&!co(L,M)&&(re=Ie(L),Ue(L,fe,Z,!0),L=null),M.patchFlag===-2&&(de=!1,M.dynamicChildren=null);const{type:_e,ref:He,shapeFlag:A}=M;switch(_e){case Ul:v(L,M,ee,re);break;case Zr:g(L,M,ee,re);break;case Ha:L==null&&I(M,ee,re,Me);break;case Ui:ye(L,M,ee,re,fe,Z,Me,se,de);break;default:A&1?U(L,M,ee,re,fe,Z,Me,se,de):A&6?D(L,M,ee,re,fe,Z,Me,se,de):(A&64||A&128)&&_e.process(L,M,ee,re,fe,Z,Me,se,de,it)}He!=null&&fe?vo(He,L&&L.ref,Z,M||L,!M):He==null&&L&&L.ref!=null&&vo(L.ref,null,Z,L,!0)},v=(L,M,ee,re)=>{if(L==null)i(M.el=a(M.children),ee,re);else{const fe=M.el=L.el;M.children!==L.children&&f(fe,M.children)}},g=(L,M,ee,re)=>{L==null?i(M.el=c(M.children||""),ee,re):M.el=L.el},I=(L,M,ee,re)=>{[L.el,L.anchor]=x(L.children,M,ee,re,L.el,L.anchor)},R=({el:L,anchor:M},ee,re)=>{let fe;for(;L&&L!==M;)fe=p(L),i(L,ee,re),L=fe;i(M,ee,re)},T=({el:L,anchor:M})=>{let ee;for(;L&&L!==M;)ee=p(L),r(L),L=ee;r(M)},U=(L,M,ee,re,fe,Z,Me,se,de)=>{if(M.type==="svg"?Me="svg":M.type==="math"&&(Me="mathml"),L==null)B(M,ee,re,fe,Z,Me,se,de);else{const _e=L.el&&L.el._isVueCE?L.el:null;try{_e&&_e._beginPatch(),P(L,M,fe,Z,Me,se,de)}finally{_e&&_e._endPatch()}}},B=(L,M,ee,re,fe,Z,Me,se)=>{let de,_e;const{props:He,shapeFlag:A,transition:S,dirs:H}=L;if(de=L.el=o(L.type,Z,He&&He.is,He),A&8?d(de,L.children):A&16&&J(L.children,de,null,re,fe,Xc(L,Z),Me,se),H&&Or(L,null,re,"created"),k(de,L,L.scopeId,Me,re),He){for(const ve in He)ve!=="value"&&!mo(ve)&&s(de,ve,null,He[ve],Z,re);"value"in He&&s(de,"value",null,He.value,Z),(_e=He.onVnodeBeforeMount)&&ci(_e,re,L)}H&&Or(L,null,re,"beforeMount");const te=AT(fe,S);te&&S.beforeEnter(de),i(de,M,ee),((_e=He&&He.onVnodeMounted)||te||H)&&Rn(()=>{_e&&ci(_e,re,L),te&&S.enter(de),H&&Or(L,null,re,"mounted")},fe)},k=(L,M,ee,re,fe)=>{if(ee&&m(L,ee),re)for(let Z=0;Z<re.length;Z++)m(L,re[Z]);if(fe){let Z=fe.subTree;if(M===Z||jg(Z.type)&&(Z.ssContent===M||Z.ssFallback===M)){const Me=fe.vnode;k(L,Me,Me.scopeId,Me.slotScopeIds,fe.parent)}}},J=(L,M,ee,re,fe,Z,Me,se,de=0)=>{for(let _e=de;_e<L.length;_e++){const He=L[_e]=se?Ni(L[_e]):hi(L[_e]);y(null,He,M,ee,re,fe,Z,Me,se)}},P=(L,M,ee,re,fe,Z,Me)=>{const se=M.el=L.el;let{patchFlag:de,dynamicChildren:_e,dirs:He}=M;de|=L.patchFlag&16;const A=L.props||Bt,S=M.props||Bt;let H;if(ee&&Ur(ee,!1),(H=S.onVnodeBeforeUpdate)&&ci(H,ee,M,L),He&&Or(M,L,ee,"beforeUpdate"),ee&&Ur(ee,!0),_e&&(!L.dynamicChildren||L.dynamicChildren.length!==_e.length)&&(de=0,Me=!1,_e=null),(A.innerHTML&&S.innerHTML==null||A.textContent&&S.textContent==null)&&d(se,""),_e?C(L.dynamicChildren,_e,se,ee,re,Xc(M,fe),Z):Me||z(L,M,se,null,ee,re,Xc(M,fe),Z,!1),de>0){if(de&16)N(se,A,S,ee,fe);else if(de&2&&A.class!==S.class&&s(se,"class",null,S.class,fe),de&4&&s(se,"style",A.style,S.style,fe),de&8){const te=M.dynamicProps;for(let ve=0;ve<te.length;ve++){const ne=te[ve],Fe=A[ne],be=S[ne];(be!==Fe||ne==="value")&&s(se,ne,Fe,be,fe,ee)}}de&1&&L.children!==M.children&&d(se,M.children)}else!Me&&_e==null&&N(se,A,S,ee,fe);((H=S.onVnodeUpdated)||He)&&Rn(()=>{H&&ci(H,ee,M,L),He&&Or(M,L,ee,"updated")},re)},C=(L,M,ee,re,fe,Z,Me)=>{for(let se=0;se<M.length;se++){const de=L[se],_e=M[se],He=de.el&&(de.type===Ui||!co(de,_e)||de.shapeFlag&198)?u(de.el):ee;y(de,_e,He,null,re,fe,Z,Me,!0)}},N=(L,M,ee,re,fe)=>{if(M!==ee){if(M!==Bt)for(const Z in M)!mo(Z)&&!(Z in ee)&&s(L,Z,M[Z],null,fe,re);for(const Z in ee){if(mo(Z))continue;const Me=ee[Z],se=M[Z];Me!==se&&Z!=="value"&&s(L,Z,se,Me,fe,re)}"value"in ee&&s(L,"value",M.value,ee.value,fe)}},ye=(L,M,ee,re,fe,Z,Me,se,de)=>{const _e=M.el=L?L.el:a(""),He=M.anchor=L?L.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:H}=M;H&&(se=se?se.concat(H):H),L==null?(i(_e,ee,re),i(He,ee,re),J(M.children||[],ee,He,fe,Z,Me,se,de)):A>0&&A&64&&S&&L.dynamicChildren&&L.dynamicChildren.length===S.length?(C(L.dynamicChildren,S,ee,fe,Z,Me,se),(M.key!=null||fe&&M===fe.subTree)&&$g(L,M,!0)):z(L,M,ee,He,fe,Z,Me,se,de)},D=(L,M,ee,re,fe,Z,Me,se,de)=>{M.slotScopeIds=se,L==null?M.shapeFlag&512?fe.ctx.activate(M,ee,re,Me,de):W(M,ee,re,fe,Z,Me,de):$(L,M,de)},W=(L,M,ee,re,fe,Z,Me)=>{const se=L.component=NT(L,re,fe);if(qf(L)&&(se.ctx.renderer=it),BT(se,!1,Me),se.asyncDep){if(fe&&fe.registerDep(se,F,Me),!L.el){const de=se.subTree=Nn(Zr);g(null,de,M,ee),L.placeholder=de.el}}else F(se,L,M,ee,fe,Z,Me)},$=(L,M,ee)=>{const re=M.component=L.component;if(gT(L,M,ee))if(re.asyncDep&&!re.asyncResolved){V(re,M,ee);return}else re.next=M,re.update();else M.el=L.el,re.vnode=M},F=(L,M,ee,re,fe,Z,Me)=>{const se=()=>{if(L.isMounted){let{next:A,bu:S,u:H,parent:te,vnode:ve}=L;{const Oe=Xg(L);if(Oe){A&&(A.el=ve.el,V(L,A,Me)),Oe.asyncDep.then(()=>{Rn(()=>{L.isUnmounted||_e()},fe)});return}}let ne=A,Fe;Ur(L,!1),A?(A.el=ve.el,V(L,A,Me)):A=ve,S&&kc(S),(Fe=A.props&&A.props.onVnodeBeforeUpdate)&&ci(Fe,te,A,ve),Ur(L,!0);const be=tp(L),Je=L.subTree;L.subTree=be,y(Je,be,u(Je.el),Ie(Je),L,fe,Z),A.el=be.el,ne===null&&_T(L,be.el),H&&Rn(H,fe),(Fe=A.props&&A.props.onVnodeUpdated)&&Rn(()=>ci(Fe,te,A,ve),fe)}else{let A;const{el:S,props:H}=M,{bm:te,m:ve,parent:ne,root:Fe,type:be}=L,Je=xo(M);Ur(L,!1),te&&kc(te),!Je&&(A=H&&H.onVnodeBeforeMount)&&ci(A,ne,M),Ur(L,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(be,L.parent?L.parent.type:void 0);const Oe=L.subTree=tp(L);y(null,Oe,ee,re,L,fe,Z),M.el=Oe.el}if(ve&&Rn(ve,fe),!Je&&(A=H&&H.onVnodeMounted)){const Oe=M;Rn(()=>ci(A,ne,Oe),fe)}(M.shapeFlag&256||ne&&xo(ne.vnode)&&ne.vnode.shapeFlag&256)&&L.a&&Rn(L.a,fe),L.isMounted=!0,M=ee=re=null}};L.scope.on();const de=L.effect=new sg(se);L.scope.off();const _e=L.update=de.run.bind(de),He=L.job=de.runIfDirty.bind(de);He.i=L,He.id=L.uid,de.scheduler=()=>$f(He),Ur(L,!0),_e()},V=(L,M,ee)=>{M.component=L;const re=L.vnode.props;L.vnode=M,L.next=null,xT(L,M.props,re,ee),MT(L,M.children,ee),ji(),jh(L),Yi()},z=(L,M,ee,re,fe,Z,Me,se,de=!1)=>{const _e=L&&L.children,He=L?L.shapeFlag:0,A=M.children,{patchFlag:S,shapeFlag:H}=M;if(S>0){if(S&128){Ee(_e,A,ee,re,fe,Z,Me,se,de);return}else if(S&256){Se(_e,A,ee,re,fe,Z,Me,se,de);return}}H&8?(He&16&&Ne(_e,fe,Z),A!==_e&&d(ee,A)):He&16?H&16?Ee(_e,A,ee,re,fe,Z,Me,se,de):Ne(_e,fe,Z,!0):(He&8&&d(ee,""),H&16&&J(A,ee,re,fe,Z,Me,se,de))},Se=(L,M,ee,re,fe,Z,Me,se,de)=>{L=L||Rs,M=M||Rs;const _e=L.length,He=M.length,A=Math.min(_e,He);let S;for(S=0;S<A;S++){const H=M[S]=de?Ni(M[S]):hi(M[S]);y(L[S],H,ee,null,fe,Z,Me,se,de)}_e>He?Ne(L,fe,Z,!0,!1,A):J(M,ee,re,fe,Z,Me,se,de,A)},Ee=(L,M,ee,re,fe,Z,Me,se,de)=>{let _e=0;const He=M.length;let A=L.length-1,S=He-1;for(;_e<=A&&_e<=S;){const H=L[_e],te=M[_e]=de?Ni(M[_e]):hi(M[_e]);if(co(H,te))y(H,te,ee,null,fe,Z,Me,se,de);else break;_e++}for(;_e<=A&&_e<=S;){const H=L[A],te=M[S]=de?Ni(M[S]):hi(M[S]);if(co(H,te))y(H,te,ee,null,fe,Z,Me,se,de);else break;A--,S--}if(_e>A){if(_e<=S){const H=S+1,te=H<He?M[H].el:re;for(;_e<=S;)y(null,M[_e]=de?Ni(M[_e]):hi(M[_e]),ee,te,fe,Z,Me,se,de),_e++}}else if(_e>S)for(;_e<=A;)Ue(L[_e],fe,Z,!0),_e++;else{const H=_e,te=_e,ve=new Map;for(_e=te;_e<=S;_e++){const qe=M[_e]=de?Ni(M[_e]):hi(M[_e]);qe.key!=null&&ve.set(qe.key,_e)}let ne,Fe=0;const be=S-te+1;let Je=!1,Oe=0;const Ae=new Array(be);for(_e=0;_e<be;_e++)Ae[_e]=0;for(_e=H;_e<=A;_e++){const qe=L[_e];if(Fe>=be){Ue(qe,fe,Z,!0);continue}let Ke;if(qe.key!=null)Ke=ve.get(qe.key);else for(ne=te;ne<=S;ne++)if(Ae[ne-te]===0&&co(qe,M[ne])){Ke=ne;break}Ke===void 0?Ue(qe,fe,Z,!0):(Ae[Ke-te]=_e+1,Ke>=Oe?Oe=Ke:Je=!0,y(qe,M[Ke],ee,null,fe,Z,Me,se,de),Fe++)}const ze=Je?wT(Ae):Rs;for(ne=ze.length-1,_e=be-1;_e>=0;_e--){const qe=te+_e,Ke=M[qe],Be=M[qe+1],rt=qe+1<He?Be.el||qg(Be):re;Ae[_e]===0?y(null,Ke,ee,rt,fe,Z,Me,se,de):Je&&(ne<0||_e!==ze[ne]?Ce(Ke,ee,rt,2):ne--)}}},Ce=(L,M,ee,re,fe=null)=>{const{el:Z,type:Me,transition:se,children:de,shapeFlag:_e}=L;if(_e&6){Ce(L.component.subTree,M,ee,re);return}if(_e&128){L.suspense.move(M,ee,re);return}if(_e&64){Me.move(L,M,ee,it);return}if(Me===Ui){i(Z,M,ee);for(let A=0;A<de.length;A++)Ce(de[A],M,ee,re);i(L.anchor,M,ee);return}if(Me===Ha){R(L,M,ee);return}if(re!==2&&_e&1&&se)if(re===0)se.persisted&&!Z[Wc]?i(Z,M,ee):(se.beforeEnter(Z),i(Z,M,ee),Rn(()=>se.enter(Z),fe));else{const{leave:A,delayLeave:S,afterLeave:H}=se,te=()=>{L.ctx.isUnmounted?r(Z):i(Z,M,ee)},ve=()=>{const ne=Z._isLeaving||!!Z[Wc];Z._isLeaving&&Z[Wc](!0),se.persisted&&!ne?te():A(Z,()=>{te(),H&&H()})};S?S(Z,te,ve):ve()}else i(Z,M,ee)},Ue=(L,M,ee,re=!1,fe=!1)=>{const{type:Z,props:Me,ref:se,children:de,dynamicChildren:_e,shapeFlag:He,patchFlag:A,dirs:S,cacheIndex:H,memo:te}=L;if(A===-2&&(fe=!1),se!=null&&(ji(),vo(se,null,ee,L,!0),Yi()),H!=null&&(M.renderCache[H]=void 0),He&256){M.ctx.deactivate(L);return}const ve=He&1&&S,ne=!xo(L);let Fe;if(ne&&(Fe=Me&&Me.onVnodeBeforeUnmount)&&ci(Fe,M,L),He&6)ge(L.component,ee,re);else{if(He&128){L.suspense.unmount(ee,re);return}ve&&Or(L,null,M,"beforeUnmount"),He&64?L.type.remove(L,M,ee,it,re):_e&&!_e.hasOnce&&(Z!==Ui||A>0&&A&64)?Ne(_e,M,ee,!1,!0):(Z===Ui&&A&384||!fe&&He&16)&&Ne(de,M,ee),re&&ct(L)}const be=te!=null&&H==null;(ne&&(Fe=Me&&Me.onVnodeUnmounted)||ve||be)&&Rn(()=>{Fe&&ci(Fe,M,L),ve&&Or(L,null,M,"unmounted"),be&&(L.el=null)},ee)},ct=L=>{const{type:M,el:ee,anchor:re,transition:fe}=L;if(M===Ui){ut(ee,re);return}if(M===Ha){T(L);return}const Z=()=>{r(ee),fe&&!fe.persisted&&fe.afterLeave&&fe.afterLeave()};if(L.shapeFlag&1&&fe&&!fe.persisted){const{leave:Me,delayLeave:se}=fe,de=()=>Me(ee,Z);se?se(L.el,Z,de):de()}else Z()},ut=(L,M)=>{let ee;for(;L!==M;)ee=p(L),r(L),L=ee;r(M)},ge=(L,M,ee)=>{const{bum:re,scope:fe,job:Z,subTree:Me,um:se,m:de,a:_e}=L;rp(de),rp(_e),re&&kc(re),fe.stop(),Z&&(Z.flags|=8,Ue(Me,L,M,ee)),se&&Rn(se,M),Rn(()=>{L.isUnmounted=!0},M)},Ne=(L,M,ee,re=!1,fe=!1,Z=0)=>{for(let Me=Z;Me<L.length;Me++)Ue(L[Me],M,ee,re,fe)},Ie=L=>{if(L.shapeFlag&6)return Ie(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const M=p(L.anchor||L.el),ee=M&&M[Vb];return ee?p(ee):M};let Qe=!1;const nt=(L,M,ee)=>{let re;L==null?M._vnode&&(Ue(M._vnode,null,null,!0),re=M._vnode.component):y(M._vnode||null,L,M,null,null,null,ee),M._vnode=L,Qe||(Qe=!0,jh(re),Mg(),Qe=!1)},it={p:y,um:Ue,m:Ce,r:ct,mt:W,mc:J,pc:z,pbc:C,n:Ie,o:n};return{render:nt,hydrate:void 0,createApp:uT(nt)}}function Xc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ur({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function AT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $g(n,e,t=!1){const i=n.children,r=e.children;if(ht(i)&&ht(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ni(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&$g(o,a)),a.type===Ul&&(a.patchFlag===-1&&(a=r[s]=Ni(a)),a.el=o.el),a.type===Zr&&!a.el&&(a.el=o.el)}}function wT(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const f=n[i];if(f!==0){if(r=t[t.length-1],n[r]<f){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<f?s=a+1:o=a;f<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Xg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xg(e)}function rp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function qg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?qg(e.subTree):null}const jg=n=>n.__isSuspense;function RT(n,e){e&&e.pendingBranch?ht(n)?e.effects.push(...n):e.effects.push(n):Ub(n)}const Ui=Symbol.for("v-fgt"),Ul=Symbol.for("v-txt"),Zr=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Xr=[];let Fn=null;function $s(n=!1){Xr.push(Fn=n?null:[])}function Yg(){Xr.pop(),Fn=Xr[Xr.length-1]||null}let Co=1;function sp(n,e=!1){Co+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function CT(n){return n.dynamicChildren=Co>0?Fn||Rs:null,Yg(),Co>0&&Fn&&Fn.push(n),n}function Xs(n,e,t,i,r,s){return CT(dr(n,e,t,i,r,s,!0))}function Kg(n){return n?n.__v_isVNode===!0:!1}function co(n,e){return n.type===e.type&&n.key===e.key}const Jg=({key:n})=>n??null,Ga=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Yt(n)||Tn(n)||dt(n)?{i:vi,r:n,k:e,f:!!t}:n:null);function dr(n,e=null,t=null,i=0,r=null,s=n===Ui?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jg(e),ref:e&&Ga(e),scopeId:Tg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vi};return a?(rl(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Yt(t)?8:16),Co>0&&!o&&Fn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Fn.push(c),c}const Nn=PT;function PT(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===nT)&&(n=Zr),Kg(n)){const a=zs(n,e,!0);return t&&rl(a,t),Co>0&&!s&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(HT(n)&&(n=n.__vccOpts),e){e=IT(e);let{class:a,style:c}=e;a&&!Yt(a)&&(e.class=Nf(a)),kt(c)&&(Wf(c)&&!ht(c)&&(c=fn({},c)),e.style=Uf(c))}const o=Yt(n)?1:jg(n)?128:Dl(n)?64:kt(n)?4:dt(n)?2:0;return dr(n,e,t,i,r,o,s,!0)}function IT(n){return n?Wf(n)||kg(n)?fn({},n):n:null}function zs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,f=e?LT(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&Jg(f),ref:e&&e.ref?t&&s?ht(s)?s.concat(Ga(e)):[s,Ga(e)]:Ga(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ui?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zs(n.ssContent),ssFallback:n.ssFallback&&zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Xf(d,c.clone(d)),d}function DT(n=" ",e=0){return Nn(Ul,null,n,e)}function Nl(n,e){const t=Nn(Ha,null,n);return t.staticCount=e,t}function hi(n){return n==null||typeof n=="boolean"?Nn(Zr):ht(n)?Nn(Ui,null,n.slice()):Kg(n)?Ni(n):Nn(Ul,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zs(n)}function rl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ht(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!kg(e)?e._ctx=vi:r===3&&vi&&(vi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(dt(e)){if(i&65){rl(n,{default:e});return}e={default:e,_ctx:vi},t=32}else e=String(e),i&64?(t=16,e=[DT(e)]):t=8;n.children=e,n.shapeFlag|=t}function LT(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Nf([e.class,i.class]));else if(r==="style")e.style=Uf([e.style,i.style]);else if(Al(r)){const s=e[r],o=i[r];o&&s!==o&&!(ht(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!wl(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function ci(n,e,t,i=null){ri(n,e,7,[t,i])}const OT=Og();let UT=0;function NT(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||OT,s={uid:UT++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(i,r),emitsOptions:Ug(i,r),emit:null,emitted:null,propsDefaults:Bt,inheritAttrs:i.inheritAttrs,ctx:Bt,data:Bt,props:Bt,attrs:Bt,slots:Bt,refs:Bt,setupState:Bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dT.bind(null,s),n.ce&&n.ce(s),s}let Mn=null;const FT=()=>Mn||vi;let sl,Po;{const n=Cl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};sl=e("__VUE_INSTANCE_SETTERS__",t=>Mn=t),Po=e("__VUE_SSR_SETTERS__",t=>Io=t)}const Go=n=>{const e=Mn;return sl(n),n.scope.on(),()=>{n.scope.off(),sl(e)}},op=()=>{Mn&&Mn.scope.off(),sl(null)};function Zg(n){return n.vnode.shapeFlag&4}let Io=!1;function BT(n,e=!1,t=!1){e&&Po(e);const{props:i,children:r}=n.vnode,s=Zg(n);vT(n,i,s,e),ET(n,r,t||e);const o=s?kT(n,e):void 0;return e&&Po(!1),o}function kT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,iT);const{setup:i}=t;if(i){ji();const r=n.setupContext=i.length>1?VT(n):null,s=Go(n),o=Ho(i,n,0,[n.props,r]),a=tg(o);if(Yi(),s(),(a||n.sp)&&!xo(n)&&Cg(n),a){if(o.then(op,op),e)return o.then(c=>{Po(!0);try{ap(n,c,e)}finally{Po(!1)}}).catch(c=>{Il(c,n,0)});n.asyncDep=o}else ap(n,o)}else Qg(n)}function ap(n,e,t){dt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:kt(e)&&(n.setupState=yg(e)),Qg(n)}function Qg(n,e,t){const i=n.type;n.render||(n.render=i.render||Si);{const r=Go(n);ji();try{rT(n)}finally{Yi(),r()}}}const zT={get(n,e){return gn(n,"get",""),n[e]}};function VT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zT),slots:n.slots,emit:n.emit,expose:e}}function Kf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yg(Tb(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yo)return yo[t](n)},has(e,t){return t in e||t in yo}})):n.proxy}function HT(n){return dt(n)&&"__vccOpts"in n}const GT=(n,e)=>Cb(n,e,Io),WT="3.5.42";let ef;const lp=typeof window<"u"&&window.trustedTypes;if(lp)try{ef=lp.createPolicy("vue",{createHTML:n=>n})}catch{}const e0=ef?n=>ef.createHTML(n):n=>n,$T="http://www.w3.org/2000/svg",XT="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,cp=Oi&&Oi.createElement("template"),qT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Oi.createElementNS($T,n):e==="mathml"?Oi.createElementNS(XT,n):t?Oi.createElement(n,{is:t}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cp.innerHTML=e0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=cp.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jT=Symbol("_vtc");function YT(n,e,t){const i=n[jT];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const up=Symbol("_vod"),KT=Symbol("_vsh"),JT=Symbol(""),ZT=/(?:^|;)\s*display\s*:/;function QT(n,e,t){const i=n.style,r=Yt(t);let s=!1;if(t&&!r){if(e)if(Yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&po(i,a,"")}else for(const o in e)t[o]==null&&po(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?tA(n,o,!Yt(e)&&e?e[o]:void 0,a)||po(i,o,a):po(i,o,"")}}else if(r){if(e!==t){const o=i[JT];o&&(t+=";"+o),i.cssText=t,s=ZT.test(t)}}else e&&n.removeAttribute("style");up in n&&(n[up]=s?i.display:"",n[KT]&&(i.display="none"))}const Da=/\s*!important$/;function po(n,e,t){if(ht(t))t.forEach(i=>po(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Da.test(t)?n.setProperty(e,t.replace(Da,""),"important"):n.setProperty(e,t);else{const i=eA(n,e);Da.test(t)?n.setProperty(es(i),t.replace(Da,""),"important"):n[i]=t}}const fp=["Webkit","Moz","ms"],qc={};function eA(n,e){const t=qc[e];if(t)return t;let i=ti(e);if(i!=="filter"&&i in n)return qc[e]=i;i=ng(i);for(let r=0;r<fp.length;r++){const s=fp[r]+i;if(s in n)return qc[e]=s}return e}function tA(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Yt(i)&&t===i}const dp="http://www.w3.org/1999/xlink";function hp(n,e,t,i,r,s=ib(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(dp,e.slice(6,e.length)):n.setAttributeNS(dp,e,t):t==null||s&&!rg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":yr(t)?String(t):t)}function pp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?e0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=rg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function nA(n,e,t,i){n.addEventListener(e,t,i)}function iA(n,e,t,i){n.removeEventListener(e,t,i)}const mp=Symbol("_vei");function rA(n,e,t,i,r=null){const s=n[mp]||(n[mp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=aA(e);if(i){const f=s[e]=uA(i,r);nA(n,a,f,c)}else o&&(iA(n,a,o,c),s[e]=void 0)}}const sA=/(Once|Passive|Capture)$/,oA=/^on:?(?:Once|Passive|Capture)$/;function aA(n){let e,t;for(;(t=n.match(sA))&&!oA.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):es(n.slice(2)),e]}let jc=0;const lA=Promise.resolve(),cA=()=>jc||(lA.then(()=>jc=0),jc=Date.now());function uA(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(ht(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let c=0;c<o.length&&!i._stopped;c++){const f=o[c];f&&ri(f,e,5,a)}}else ri(r,e,5,[i])};return t.value=n,t.attached=cA(),t}const gp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fA=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?YT(n,i,o):e==="style"?QT(n,t,i):Al(e)?wl(e)||rA(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dA(n,e,i,o))?(pp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hp(n,e,i,o,s,e!=="value")):n._isVueCE&&(hA(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Yt(i)))?pp(n,ti(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),hp(n,e,i,o))};function dA(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&gp(e)&&dt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gp(e)&&Yt(t)?!1:e in n}function hA(n,e){const t=n._def.props;if(!t)return!1;const i=ti(e);return Array.isArray(t)?t.some(r=>ti(r)===i):Object.keys(t).some(r=>ti(r)===i)}const pA=fn({patchProp:fA},qT);let _p;function mA(){return _p||(_p=bT(pA))}const gA=((...n)=>{const e=mA().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vA(i);if(!r)return;const s=e._component;!dt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_A(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function _A(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vA(n){return Yt(n)?document.querySelector(n):n}const Wo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},xA={},yA={class:"topbar"};function SA(n,e){return $s(),Xs("section",yA,[...e[0]||(e[0]=[Nl('<div class="brand"><span class="mark"></span><div><small data-i18n="subtitle">NEON GRID / PONG-84</small><strong data-i18n="title">PONG 87</strong><span id="statusText" data-i18n="disconnected">Sin conexion</span></div></div><div class="readout"><span id="modeText">STANDBY</span><span id="roundText">R-01</span></div><button id="pauseButton" class="icon-button" type="button" aria-label="Pausa">II</button><button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Exit game" hidden>X</button>',4)])])}const EA=Wo(xA,[["render",SA]]),MA={},bA={id:"menuLayer",class:"menu-layer"};function TA(n,e){return $s(),Xs("div",bA,[...e[0]||(e[0]=[Nl('<section class="menu-panel" data-menu-view="main"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h1 data-i18n="mainMenuTitle">PONG 87</h1><p data-i18n="mainMenuSubtitle">Arcade neon chileno para 1 a 8 jugadores</p><div class="menu-buttons"><button id="singlePlayerButton" class="primary-menu" type="button" data-i18n="singlePlayer">Single Player</button><button id="multiPlayerButton" type="button" data-i18n="multiPlayer">Multi Player</button><button id="settingsButton" type="button" data-i18n="settings">Configuracion</button><button id="aboutButton" type="button" data-i18n="about">About Me</button><button id="exitButton" class="ghost" type="button" data-i18n="exit">Salir</button></div></section><section class="menu-panel" data-menu-view="settings" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="settingsTitle">Configuracion</h2><div class="settings-stack"><label class="range-field"><span data-i18n="musicVolume">Musica</span><output id="musicVolumeValue">70%</output><input id="musicVolumeInput" type="range" min="0" max="100" step="1"></label><label class="range-field"><span data-i18n="sfxVolume">Efectos</span><output id="sfxVolumeValue">80%</output><input id="sfxVolumeInput" type="range" min="0" max="100" step="1"></label><label><span data-i18n="language">Idioma</span><select id="languageInput"><option value="es">ES</option><option value="en">EN</option></select></label></div><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="about" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="aboutTitle">About Me</h2><p class="about-copy" data-i18n="aboutBody">Proyecto personal para crear minijuegos web mobile-first.</p><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="exit" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="exitTitle">Salir</h2><p class="about-copy" data-i18n="exitBody">En web no siempre se puede cerrar la pestana desde el juego.</p><button class="back-button" type="button" data-i18n="back">Volver</button></section>',4)])])}const AA=Wo(MA,[["render",TA]]),wA={},RA={id:"centerPanel",class:"center-panel hidden","data-flow":"multi"};function CA(n,e){return $s(),Xs("div",RA,[...e[0]||(e[0]=[Nl('<div class="panel-header"><span id="lobbyTitle" data-i18n="arcadeLink">ARCADE LINK</span><strong id="roomCode">----</strong></div><div id="setupPanel" class="setup-panel"><div class="field-grid"><label><span data-i18n="playerTag">Player tag</span><input id="nameInput" maxlength="16" value="Jugador"></label><label><span data-i18n="arena">Arena</span><select id="sidesInput"><option value="2">2</option><option value="3">3</option><option value="4" selected>4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select></label><label><span data-i18n="mode">Modo</span><select id="gameModeInput"><option value="score" data-i18n="scoreRush">Score Rush</option><option value="elimination" data-i18n="elimination">Eliminacion</option></select></label><label id="livesField"><span data-i18n="lives">Vidas</span><input id="livesInput" type="number" min="1" max="9" step="1" value="5"></label><label><span data-i18n="matchTime">Tiempo</span><select id="matchTimeInput"><option value="0" data-i18n="noLimit">Sin limite</option><option value="30">0:30</option><option value="60">1:00</option><option value="90">1:30</option><option value="120">2:00</option><option value="150" selected>2:30</option><option value="180">3:00</option><option value="240">4:00</option><option value="300">5:00</option></select></label></div><div class="actions"><button id="createButton" type="button" data-i18n="host">Host</button><input id="joinInput" maxlength="8" placeholder="CODIGO" data-i18n-placeholder="joinPlaceholder"><button id="joinButton" type="button" data-i18n="link">Link</button></div></div><div id="waitingPanel" class="waiting-panel hidden"><div class="lobby-code"><span>ROOM</span><strong id="waitingRoomCode">----</strong></div><div id="waitingRoster" class="waiting-roster"></div></div><div id="resultsPanel" class="results-panel hidden"><div class="podium-title">RESULTS</div><div id="podiumList" class="podium-list"></div></div><div class="boot-actions"><button id="offlineButton" class="offline" type="button" data-i18n="cpuJam">CPU Jam</button><button id="readyButton" class="ready" type="button" disabled data-i18n="ready">Ready</button><button id="menuBackButton" class="ghost" type="button" data-i18n="mainMenu">Menu</button></div>',5)])])}const PA=Wo(wA,[["render",CA]]),IA={},DA={id:"pauseMenu",class:"pause-menu hidden",role:"dialog","aria-modal":"true","aria-labelledby":"pauseTitle"};function LA(n,e){return $s(),Xs("div",DA,[...e[0]||(e[0]=[Nl('<section class="pause-panel"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 id="pauseTitle" data-i18n="pauseTitle">Pausa</h2><div class="pause-actions"><button id="resumeButton" class="primary-menu" type="button" data-i18n="continueGame">Continuar</button><button id="pauseExitButton" class="ghost" type="button" data-i18n="exitToMenu">Salir</button></div></section>',1)])])}const OA=Wo(IA,[["render",LA]]),UA={},NA={id:"touchRail",class:"touch-rail"};function FA(n,e){return $s(),Xs("div",NA,[...e[0]||(e[0]=[dr("span",{class:"rail-label","data-i18n":"paddleTrack"},"PADDLE TRACK",-1),dr("div",{id:"thumb",class:"thumb"},null,-1)])])}const BA=Wo(UA,[["render",FA]]),kA={class:"shell"},zA={class:"game-wrap"},VA=Gb({__name:"App",setup(n){return(e,t)=>($s(),Xs("main",kA,[t[1]||(t[1]=dr("div",{class:"scanlines","aria-hidden":"true"},null,-1)),Nn(EA),dr("section",zA,[t[0]||(t[0]=dr("canvas",{id:"gameCanvas"},null,-1)),Nn(AA),Nn(PA),Nn(OA),Nn(BA)]),t[2]||(t[2]=dr("section",{id:"scoreStrip",class:"score-strip"},null,-1))]))}}),HA="arcade-hub.v1",t0="pong87",GA="0.1.0";function WA(){const n=new URLSearchParams(window.location.search),e=n.get("arcadeToken")||"";return e?{token:e,roomId:n.get("room")||void 0,returnUrl:n.get("returnUrl")||void 0,offline:n.get("offline")==="1",sides:n.get("sides")?Number(n.get("sides")):void 0,hubUrl:n.get("hubUrl")||void 0||`http://${window.location.hostname||"127.0.0.1"}:2580`}:null}async function n0(n,e,t,i=!1){const r=await fetch(`${n.hubUrl}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:i});return r.ok?r.json():null}async function $A(){const n=WA();if(!n)return null;const e=await fetch(`${n.hubUrl}/api/launch-token/validate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n.token})});if(!e.ok)throw new Error("Arcade token invalido");const t=await e.json();if(!t.valid||!t.payload)throw new Error("Arcade token expirado");return{token:n.token,payload:t.payload,roomId:n.roomId||t.payload.roomId,returnUrl:n.returnUrl||t.payload.returnUrl,hubUrl:n.hubUrl,offline:n.offline,sides:n.sides}}function XA(n,e,t={},i){return{protocol:HA,eventId:crypto.randomUUID(),eventType:e,source:{gameId:t0,runtime:"client",version:GA},occurredAt:new Date().toISOString(),roomId:n.roomId,userId:n.payload.user.userId,sessionId:i,payload:t}}async function i0(n,e,t={},i){await n0(n,"/api/telemetry",XA(n,e,t,i),!0)}function ol(n,e){return{name:n.payload.user.displayName,arcadeToken:n.token,arcadeRoomId:n.roomId,arcadeUserId:n.payload.user.userId,arcadeOrigin:n.payload.user.origin,arcadeHubUrl:n.hubUrl,...e||{}}}function qA(n,e){const t=[...e.seats].filter(r=>r.connected).sort((r,s)=>e.mode==="score"?s.score-r.score||s.lives-r.lives:s.lives-r.lives||s.score-r.score),i=t[0];return{gameId:t0,roomId:n.roomId,winnerUserId:vp(n,i),finishedAt:new Date().toISOString(),players:t.map((r,s)=>({userId:vp(n,r)||r.id,displayName:r.name,score:r.score,placement:s+1,metadata:{sessionId:r.id,edgeIndex:r.edgeIndex,lives:r.lives,bot:r.id.startsWith("bot-")}})),metadata:{mode:e.mode,sides:e.sides,round:e.round,matchTimeSeconds:e.matchTimeSeconds,source:"pong87-client"}}}function vp(n,e){if(!(!e||e.id.startsWith("bot-")))return e.id==="offline-human"?n.payload.user.userId:e.id}async function jA(n,e){await n0(n,"/api/results",qA(n,e),!0)}function YA(n){if(n?.returnUrl){window.location.assign(n.returnUrl);return}window.close()}const r0="es",xp={es:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Sin conexion",connected:"Conectado",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Arcade neon chileno para 1 a 8 jugadores",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Configuracion",about:"About Me",exit:"Salir",back:"Volver",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Modo",lives:"Vidas",matchTime:"Tiempo",noLimit:"Sin limite",scoreRush:"Score Rush",elimination:"Eliminacion",host:"Host",joinPlaceholder:"CODIGO",link:"Link",cpuJam:"CPU Jam",ready:"Ready",waiting:"Waiting",restart:"Reiniciar",pauseTitle:"Pausa",continueGame:"Continuar",exitToMenu:"Salir",settingsTitle:"Configuracion",musicVolume:"Musica",sfxVolume:"Efectos",language:"Idioma",aboutTitle:"About Me",aboutBody:"Proyecto personal para crear minijuegos web mobile-first, aprender multijugador en navegador y tener partidas rapidas para jugar con amigos.",exitTitle:"Salir",exitBody:"En web no siempre se puede cerrar la pestana desde el juego. Puedes volver al menu o cerrar la pestana del navegador.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Error de conexion",offlineEvent:"Offline vs IA",botName:"IA",playerFallback:"Jugador"},en:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Disconnected",connected:"Connected",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Chilean neon arcade for 1 to 8 players",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Settings",about:"About Me",exit:"Exit",back:"Back",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Mode",lives:"Lives",matchTime:"Time",noLimit:"No limit",scoreRush:"Score Rush",elimination:"Elimination",host:"Host",joinPlaceholder:"CODE",link:"Link",cpuJam:"CPU Jam",ready:"Ready",waiting:"Waiting",restart:"Restart",pauseTitle:"Paused",continueGame:"Continue",exitToMenu:"Exit",settingsTitle:"Settings",musicVolume:"Music",sfxVolume:"SFX",language:"Language",aboutTitle:"About Me",aboutBody:"A personal project for building mobile-first web minigames, learning browser multiplayer, and playing fast sessions with friends.",exitTitle:"Exit",exitBody:"Browsers usually do not let games close the tab directly. You can return to the menu or close the browser tab.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Connection error",offlineEvent:"Offline vs AI",botName:"AI",playerFallback:"Player"}};function KA(n,e){return xp[n]?.[e]??xp[r0][e]??e}const qs=4,al=2,ll=8,ai=8,Jf=2.7,JA=.34,Gn=.28,Zf=7.85,ZA=.012,QA=1.26,s0=6,Qf=10,o0=5,cl=150,yp=30,Sp=30,Yc=1/60;function ew(n){return Math.min(s0,Math.max(3,Math.ceil(n*.75)))}function a0(n,e){const t=1+Math.floor(e/Qf);return Math.min(ew(n),t)}function tw(n){return Zf*Math.min(QA,1+Math.max(0,n)*ZA)}function nw(n){return{sides:qs,phase:"lobby",lastEvent:n,round:1,countdown:0,remainingTime:cl,matchTimeSeconds:cl,livesPerPlayer:o0,lastTouchEdge:-1,mode:"score",ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:[]}}function iw(n,e){return{...n,phase:"lobby",lastEvent:e,seats:[],obstacles:[],balls:[],chargedBy:-1}}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function ts(n){return n<=3?4:n}function Fl(n,e){return e===2?n*2:n}function l0(n,e){return e===2?n===0?0:n===2?1:-1:e===3?n<3?n:-1:n<e?n:-1}function Mr(n,e=ai){return n<=2?e*1.04:e*(1.08+Math.max(0,n-4)*.055)}function rw(n,e=ai){const t=-Math.PI/2+Math.PI/n;return Array.from({length:n},(i,r)=>{const s=t+r/n*Math.PI*2;return{x:Math.cos(s)*e,y:Math.sin(s)*e}})}function js(n,e=ai){const t=rw(n,e);return t.map((i,r)=>{const s=t[(r+1)%t.length],o=s.x-i.x,a=s.y-i.y,c=Math.hypot(o,a),f={x:o/c,y:a/c},d={x:(i.x+s.x)/2,y:(i.y+s.y)/2},u={x:-d.x,y:-d.y},p=Math.hypot(u.x,u.y)||1,m={x:u.x/p,y:u.y/p};return{a:i,b:s,tangent:f,inward:m,length:c,angle:Math.atan2(f.y,f.x)}})}function c0(n,e){return{x:n.a.x+(n.b.x-n.a.x)*e,y:n.a.y+(n.b.y-n.a.y)*e}}function qr(n,e){return n.x*e.x+n.y*e.y}function tf(n,e){const t=qr(n,e);return{x:n.x-2*t*e.x,y:n.y-2*t*e.y}}function sw(n,e,t){const i=n==="elimination"?"elimination":"score";let r=Math.round(Number(e||cl)/Sp)*Sp;return i==="score"?r=Math.max(yp,r||cl):r>0&&(r=Math.max(yp,r)),{mode:i,lives:cn(Math.round(Number(t||o0)),1,9),matchTimeSeconds:r}}function ow(n){const e=Math.max(0,Math.ceil(n)),t=Math.floor(e/60),i=e%60;return`${t}:${String(i).padStart(2,"0")}`}function aw(n){return[...n.seats].filter(e=>e.connected).sort((e,t)=>n.mode==="score"?t.score-e.score||t.lives-e.lives:t.lives-e.lives||t.score-e.score)}const u0="polygon-pong-settings",La={language:r0,musicVolume:70,sfxVolume:80};function lw(n=localStorage){try{const e=JSON.parse(n.getItem(u0)||"{}");return{language:e.language==="en"||e.language==="es"?e.language:La.language,musicVolume:cn(Number(e.musicVolume??La.musicVolume),0,100),sfxVolume:cn(Number(e.sfxVolume??La.sfxVolume),0,100)}}catch{return{...La}}}function ed(n,e=localStorage){e.setItem(u0,JSON.stringify(n))}function cw(n){n.geometry.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>t.dispose())}function uw(n){const e=n.variant==="barrier"?new vr(n.radius*2.35,.18,.18):n.variant==="bumper"?new El(n.radius*.82,8):new bl(n.radius*.42,n.radius*.82,28),t=n.variant==="barrier"?16777215:n.variant==="bumper"?16771162:2618879,i=new Bs({color:t,transparent:!0,opacity:n.variant==="post"?.9:.78,side:Jn}),r=new ln(e,i);return r.userData.id=n.id,r.userData.createdAt=performance.now(),r.userData.despawnAt=0,r.scale.setScalar(.1),r}function fw(n,e,t){const i=new Set(e.map(r=>r.id));for(const r of[...n.children])if(!i.has(r.userData.id)){r.userData.despawnAt||=t;const s=Math.min(1,(t-r.userData.despawnAt)/260);if(r.scale.setScalar(Math.max(.01,1-s)),r instanceof ln){const o=r.material;o.opacity=Math.max(0,(r.userData.baseOpacity??.8)*(1-s))}s>=1&&(n.remove(r),r instanceof ln&&cw(r))}e.forEach((r,s)=>{let o=n.children.find(f=>f.userData.id===r.id);o||(o=uw(r),o.userData.baseOpacity=o.material.opacity,n.add(o)),o.userData.despawnAt=0,o.position.set(r.x,r.y,.18),o.rotation.z=r.angle+t*.0015*Math.sign(r.spin);const a=Math.min(1,(t-o.userData.createdAt)/340),c=1+Math.sin(t*.006+s)*(r.variant==="barrier"?.025:.055);o.scale.setScalar((.18+a*.82)*c),o.material.opacity=(o.userData.baseOpacity??.8)*a})}function dw(n){return n>=8?{min:7,max:8}:n>=7?{min:6,max:7}:n>=5?{min:5,max:6}:n>=4?{min:4,max:5}:{min:3,max:4}}function Kc(n,e,t,i=1){return{x:Math.cos(e)*n*t,y:Math.sin(e)*n*t,weight:i}}function hw(n,e){const t=[{x:0,y:0,weight:.2},{x:e*.22,y:0,weight:1.2},{x:-e*.22,y:0,weight:1.2},{x:0,y:e*.22,weight:1.2},{x:0,y:-e*.22,weight:1.2}],i=n>=7?16:n>=5?12:8,r=Math.PI/i;for(let o=0;o<i;o+=1)t.push(Kc(e,r+o/i*Math.PI*2,.39,1.6));const s=n>=7?16:10;for(let o=0;o<s;o+=1)t.push(Kc(e,o/s*Math.PI*2,.58,1.35));if(n>=6)for(let o=0;o<8;o+=1)t.push(Kc(e,Math.PI/4+o/8*Math.PI*2,.69,1));return t}function pw(n,e){return n.map(t=>({item:t,key:e()**(1/t.weight)})).sort((t,i)=>i.key-t.key).map(({item:t})=>t)}function Ep(n,e){const t=["bumper","post","barrier","bumper","post","bumper"],i=t[n%t.length];return e()<.12?t[Math.floor(e()*t.length)]:i}function Mp(n,e){return n==="barrier"?.5+e()*.14:n==="bumper"?.42+e()*.13:.34+e()*.11}function mw(n,e,t,i,r=Math.random){const s=dw(n),o=s.min+Math.floor(r()*(s.max-s.min+1)),a=pw(hw(n,e),r),c=e*(n>=7?.205:n>=5?.19:.18),f=e*(n>=7?.055:.04),d=[];for(const p of a){if(d.length>=o)break;const m=Ep(d.length,r),x=Mp(m,r),y={x:p.x+(r()-.5)*f,y:p.y+(r()-.5)*f},v=Math.hypot(y.x,y.y);v>e*.72||v<e*.1&&d.length>0||d.some(I=>Math.hypot(y.x-I.x,y.y-I.y)<c+(x+I.radius)*.45)||d.push({id:`${t}-${i}-${d.length}`,x:y.x,y:y.y,radius:x,sides:m==="bumper"?8:m==="barrier"?4:16,angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*cn(.5+r()*1.15,.5,1.65),variant:m})}let u=0;for(;d.length<s.min&&u<80;){u+=1;const p=r()*Math.PI*2,m=e*(.3+r()*.38),x=Ep(d.length,r),y=Mp(x,r),v={x:Math.cos(p)*m,y:Math.sin(p)*m};d.some(I=>Math.hypot(v.x-I.x,v.y-I.y)<c)||d.push({id:`${t}-${i}-${d.length}`,x:v.x,y:v.y,radius:y,sides:x==="bumper"?8:x==="barrier"?4:16,angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*(.5+r()*1.15),variant:x})}return d}function gw(n){n.traverse(e=>{if(!(e instanceof ln))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function Jc(n,e=1){return new Bs({color:n,transparent:e<1,opacity:e,side:Jn})}function _w(n,e){const t=new _i,i=new ln(new Pf(Gn,32,18),Jc(e)),r=new ln(new bl(Gn*1.55,Gn*1.95,40),Jc(e,.42)),s=[0,1,2].map(o=>{const a=new ln(new El(Gn*(1.05-o*.16),24),Jc(e,.18-o*.04));return a.position.z=-.03-o*.02,a});return i.scale.z=.42,r.position.z=.02,t.add(...s,r,i),t.userData.id=n.id,t.userData.core=i,t.userData.aura=r,t.userData.trail=s,t}function vw(n,e,t,i){const r=new Set(e.map(s=>s.id));for(const s of[...n.children])r.has(s.userData.id)||(n.remove(s),gw(s));e.forEach((s,o)=>{const a=s.lastTouchEdge>=0?t[s.lastTouchEdge%t.length]:16777215;let c=n.children.find(y=>y.userData.id===s.id);c||(c=_w(s,a),n.add(c));const f=Math.hypot(s.vx,s.vy)||1,d={x:s.vx/f,y:s.vy/f},u=s.chargedBy>=0,p=Math.max(0,1-s.age/.7),m=1+Math.sin(i*.012+o)*(u?.16:.06)+p*.45;c.position.set(s.x,s.y,.32),c.scale.set(m,m,1),[c.userData.core,c.userData.aura,...c.userData.trail].forEach(y=>{y.material.color.setHex(a)}),c.userData.aura.scale.setScalar(u?1.32:1),c.userData.aura.rotation.z=i*.004*(u?1.8:1),c.userData.aura.material.opacity=u?.72:.38+p*.24,c.userData.trail.forEach((y,v)=>{const g=Gn*(2.2+v*1.35);y.position.x=-d.x*g,y.position.y=-d.y*g,y.material.opacity=Math.max(.04,.18-v*.04+(u?.07:0))})})}const f0=document.querySelector("#app");if(!f0)throw new Error("Missing app root");let an=lw();const Ut=n=>KA(an.language,n);gA(VA).mount(f0);const Ki=document.querySelector("#gameCanvas"),nf=document.querySelector(".shell"),rf=document.querySelector("#menuLayer"),Vs=document.querySelector("#statusText"),xw=document.querySelector("#modeText"),yw=document.querySelector("#roundText"),$o=document.querySelector("#roomCode"),Sw=document.querySelector("#lobbyTitle"),Do=document.querySelector("#centerPanel"),Ew=document.querySelector("#setupPanel"),Mw=document.querySelector("#waitingPanel"),bw=document.querySelector("#waitingRoomCode"),Tw=document.querySelector("#waitingRoster"),Aw=document.querySelector("#resultsPanel"),ww=document.querySelector("#podiumList"),d0=document.querySelector("#scoreStrip"),si=document.querySelector("#touchRail"),Rw=document.querySelector("#thumb"),Bl=document.querySelector("#nameInput"),ul=document.querySelector("#sidesInput"),td=document.querySelector("#gameModeInput"),Cw=document.querySelector("#livesField"),sf=document.querySelector("#livesInput"),fl=document.querySelector("#matchTimeInput"),Xo=document.querySelector("#joinInput"),of=document.querySelector("#languageInput"),af=document.querySelector("#musicVolumeInput"),lf=document.querySelector("#sfxVolumeInput"),h0=document.querySelector("#musicVolumeValue"),p0=document.querySelector("#sfxVolumeValue"),Pw=document.querySelector("#singlePlayerButton"),Iw=document.querySelector("#multiPlayerButton"),Dw=document.querySelector("#settingsButton"),Lw=document.querySelector("#aboutButton"),Ow=document.querySelector("#exitButton"),Uw=document.querySelectorAll(".back-button"),Nw=document.querySelector("#createButton"),Fw=document.querySelector("#joinButton"),Bw=document.querySelector("#offlineButton"),Sr=document.querySelector("#readyButton"),kw=document.querySelector("#menuBackButton"),m0=document.querySelector("#pauseButton"),nd=document.querySelector("#gameExitButton"),zw=document.querySelector("#pauseMenu"),Vw=document.querySelector("#resumeButton"),Hw=document.querySelector("#pauseExitButton"),id=new tx;id.background=new Rt(461071);const ur=new qm(-10,10,10,-10,.1,100);ur.position.set(0,0,20);ur.lookAt(0,0,0);const kl=new WM({canvas:Ki,antialias:!0,alpha:!1});kl.setPixelRatio(Math.min(window.devicePixelRatio,2));const dl=new _i,cf=new _i,Lo=new _i,rd=new _i,zl=new _i;dl.add(cf,Lo,rd,zl);id.add(dl);const Vi=[16732013,5242788,6661887,16250716,16751170,13270271,4386047,16777215],Gw="wss://pong87.onrender.com",hl=new B_.Client(Gw);let Qt=null,oi="",pe=nw(Ut("disconnected")),Fi=.5,Er=.5,sd=0,Hs=!1,bp=0,bn=!1,od=null,Tp=performance.now(),Wa=0,Qr=null,uf=0,g0=.5,ad=!1;const Hi=new Set;let _0="",Ap=0,$a=3.5,Ms=0,v0=0,Ds=Qf,Oo=0,Vr=0,Zc="",It=null,ff="";function x0(n){cf.clear(),Lo.clear();const e=ts(n),t=Mr(n,ai),i=js(e,t);_0=`${n}:${e}`,i.forEach((r,s)=>{const o=l0(s,n),a=o>=0?Vi[o%Vi.length]:16777215,c=c0(r,.5),f=new ln(new vr(r.length,.08,.08),new Bs({color:a,transparent:!0,opacity:o>=0?.75:.48}));f.position.set(c.x,c.y,0),f.rotation.z=r.angle,cf.add(f)});for(let r=0;r<n;r+=1){const s=Fl(r,n),o=new ln(new vr(Jf,JA,.18),new Bs({color:Vi[r%Vi.length],transparent:!0,opacity:1}));o.userData.playerIndex=r,o.userData.edgeIndex=s,Lo.add(o)}}function Vl(){const n=window.innerWidth,e=window.innerHeight,t=n/e,i=n<720,r=Mr(pe.sides||qs,ai),s=i?r*2.75:r*2.45;ur.top=s/2,ur.bottom=-s/2,ur.left=-s*t/2,ur.right=s*t/2,ur.updateProjectionMatrix(),kl.setSize(n,e,!1)}function Ww(){const n=pe.seats.find(e=>e.id===oi);return n?Fl(n.edgeIndex,pe.sides||qs):0}function $w(){const n=pe.sides||qs,e=js(ts(n),Mr(n,ai));return-(e[Ww()]??e[0]).angle}function Xw(n,e){return Math.atan2(Math.sin(e-n),Math.cos(e-n))}function df(){return pe.balls.length>0?pe.balls:[{...pe.ball,id:"legacy-ball",lastTouchEdge:pe.lastTouchEdge,chargedBy:pe.chargedBy,age:1,hitCount:0}]}function wp(){return 8+Math.random()*5}function Rp(n){const e=Mr(n,ai),t=mw(n,e,"local",Ap);return Ap+=1,t}function qw(n){return{sides:n.sides,phase:n.phase,lastEvent:n.lastEvent,round:n.round,countdown:n.countdown,remainingTime:n.remainingTime,matchTimeSeconds:n.matchTimeSeconds,livesPerPlayer:n.livesPerPlayer,lastTouchEdge:n.lastTouchEdge,mode:n.mode,ball:{x:n.ball.x,y:n.ball.y,vx:n.ball.vx,vy:n.ball.vy},balls:Array.from(n.balls?.length?n.balls:[n.ball]).map((e,t)=>({id:e.id||`legacy-${t}`,x:e.x,y:e.y,vx:e.vx,vy:e.vy,lastTouchEdge:e.lastTouchEdge??n.lastTouchEdge??-1,chargedBy:e.chargedBy??n.chargedBy??-1,age:e.age??1,hitCount:e.hitCount??0})),chargedBy:n.chargedBy??-1,obstacles:Array.from(n.obstacles??[]).map(e=>({id:e.id,x:e.x,y:e.y,radius:e.radius,sides:e.sides,angle:e.angle,spin:e.spin,variant:e.variant??"post"})),seats:Array.from(n.seats).map(e=>({id:e.id,name:e.name,edgeIndex:e.edgeIndex,paddle:e.paddle,paddleVelocity:0,lives:e.lives,score:e.score,charge:!!e.charge,ready:e.ready,connected:e.connected}))}}function Ys(){const n=sw(td.value,fl.value,sf.value);return fl.value=String(n.matchTimeSeconds),sf.value=String(n.lives),n}function y0(){const n=td.value==="elimination"?"elimination":"score";Cw.classList.toggle("hidden",n!=="elimination"),fl.querySelector('option[value="0"]').disabled=n==="score",Ys()}function S0(){document.documentElement.lang=an.language,document.querySelectorAll("[data-i18n]").forEach(n=>{const e=n.dataset.i18n;n.textContent=Ut(e)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{const e=n.dataset.i18nPlaceholder;n.placeholder=Ut(e)}),of.value=an.language,af.value=String(an.musicVolume),lf.value=String(an.sfxVolume),h0.textContent=`${an.musicVolume}%`,p0.textContent=`${an.sfxVolume}%`,!Qt&&!bn&&(Vs.textContent=Ut("disconnected")),$i()}function qo(n){nf.classList.add("menu-open"),rf.classList.remove("hidden"),Do.classList.add("hidden"),od=null,rf.querySelectorAll("[data-menu-view]").forEach(e=>{e.hidden=e.dataset.menuView!==n})}async function ld(){if(jo(!1),nd.hidden=!0,bn=!1,await Hl(),It){YA(It);return}pe=iw(pe,Ut("disconnected")),pe.ball={x:0,y:0,vx:0,vy:0},pe.balls=[],zl.clear(),rd.clear(),$o.textContent="----",Xo.value="",Sr.disabled=!0,qo("main"),$i()}function Ks(n){od=n,nd.hidden=!1,rf.classList.add("hidden"),Do.dataset.flow=n,Do.classList.remove("hidden"),Sw.textContent=Ut(n==="single"?"singlePlayerTitle":"multiPlayerTitle"),$o.textContent=n==="single"?"SOLO":"----",Sr.disabled=n==="multi"&&!Qt,$i()}async function E0(){bn=!1,await Hl(),Ks("multi");const n=cn(Number(ul.value),al,ll),e=Ys();Qt=await hl.create("polygon_pong",{sides:n,name:Bl.value,...e,...It?ol(It,e):{}}),ud(Qt)}async function jw(){const n=Xo.value.trim().toUpperCase();n&&(bn=!1,await Hl(),Ks("multi"),Qt=await hl.joinById(n,{name:Bl.value,...It?ol(It):{}}),ud(Qt))}async function Hl(){Qt&&(await Qt.leave(),Qt=null)}async function cd(){await Hl(),Ks("single");const n=cn(Number(ul.value),al,ll),e=Ys();bn=!0,oi="offline-human",Fi=.5,Er=.5,sd=0,jo(!1),Wa=0,$a=0,Ms=0,Ds=0,Oo=0,v0=0,zl.clear(),$o.textContent=Ut("botName"),Xo.value="",Sr.disabled=!1,Sr.textContent=Ut("restart"),pe=eR(n,e),ff="",M0(),Vl(),$i()}async function Yw(){if(It=await $A(),!!It){if(Bl.value=It.payload.user.displayName,It.roomId&&(Xo.value=It.roomId),It.sides&&(ul.value=String(cn(It.sides,al,ll))),await i0(It,"game.client_ready",{roomId:It.roomId,returnUrl:It.returnUrl,offline:It.offline,sides:It.sides}),It.offline){await cd();return}Ks("multi");try{if(!It.roomId){await E0();return}Qt=await hl.joinById(It.roomId,ol(It))}catch{const n=Ys();Qt=await hl.create("polygon_pong",{sides:cn(Number(ul.value),al,ll),...ol(It,n)})}ud(Qt)}}function ud(n){oi=n.sessionId,$o.textContent=n.roomId,Xo.value=n.roomId,Sr.disabled=!1,Vs.textContent=Ut("connected"),n.onStateChange(e=>{pe=qw(e),M0(),Vl(),$i()}),n.onLeave(()=>{Vs.textContent=Ut("disconnected"),Sr.disabled=!0})}function M0(){const n=`${pe.sides}:${ts(pe.sides)}`;(Lo.children.length!==pe.sides||_0!==n)&&x0(pe.sides)}function $i(){const n=pe.seats.find(s=>s.id===oi),e=pe.seats.map(s=>`${s.id}:${s.score}:${s.lives}`).join("|");Zc&&e!==Zc&&(Vr=1),Zc=e;const t=pe.phase==="playing"||pe.phase==="countdown";nf.classList.toggle("game-active",t),nf.classList.toggle("menu-open",!t),zw.classList.toggle("hidden",!(bn&&Hs&&t));const i=!!od&&pe.phase!=="playing"&&pe.phase!=="countdown";Do.classList.toggle("hidden",!i);const r=!!Qt||bn;Ew.classList.toggle("hidden",r),Mw.classList.toggle("hidden",!r||pe.phase==="results"),Aw.classList.toggle("hidden",pe.phase!=="results"),Kw(),bw.textContent=$o.textContent||"----",Sr.textContent=bn?Ut("restart"):n?.ready?Ut("waiting"):Ut("ready"),Vs.textContent=`${pe.lastEvent}${pe.phase==="countdown"?` ${Math.ceil(pe.countdown)}`:""}`,xw.textContent=pe.mode==="score"?"SCORE":bn?"SIM":Qt?"K.O.":"STANDBY",yw.textContent=pe.matchTimeSeconds>0?ow(pe.remainingTime):`R-${String(pe.round).padStart(2,"0")}`,d0.innerHTML=pe.seats.map((s,o)=>{const a=s.connected?pe.mode==="score"?String(s.score).padStart(2,"0"):`${s.lives}/${pe.livesPerPlayer}`:"--",c=s.ready?Ut("ready").toUpperCase():Ut("open"),f=Array.from({length:pe.livesPerPlayer},(u,p)=>`<i class="${p<s.lives&&s.connected?"on":""}"></i>`).join(""),d=pe.mode==="score"?`${Ut("last")} ${pe.lastTouchEdge===s.edgeIndex?Ut("lastTouch"):c}`:s.connected&&s.lives<=0?Ut("wall"):c;return`
      <div class="score" style="--accent:#${Vi[o].toString(16).padStart(6,"0")}">
        <span>${String(s.edgeIndex+1).padStart(2,"0")} / ${s.name}</span>
        <strong>${a}</strong>
        <div class="integrity">${f}</div>
        <em>${d}</em>
      </div>
    `}).join(""),Tw.innerHTML=pe.seats.map((s,o)=>`
    <div class="roster-row" style="--accent:#${Vi[o].toString(16).padStart(6,"0")}">
      <span>${String(s.edgeIndex+1).padStart(2,"0")}</span>
      <strong>${s.name}</strong>
      <em>${s.connected&&s.ready?Ut("ready").toUpperCase():Ut("open")}</em>
    </div>
  `).join(""),ww.innerHTML=aw(pe).slice(0,3).map((s,o)=>`
    <div class="podium-row place-${o+1}" style="--accent:#${Vi[s.edgeIndex%Vi.length].toString(16).padStart(6,"0")}">
      <span>#${o+1}</span>
      <strong>${s.name}</strong>
      <em>${pe.mode==="score"?String(s.score).padStart(2,"0"):`${s.lives}/${pe.livesPerPlayer}`}</em>
    </div>
  `).join("")}function Kw(){if(!It||!bn||pe.phase!=="results")return;const n=pe.seats.map(e=>`${e.id}:${e.score}:${e.lives}`).join("|");!n||n===ff||(ff=n,jA(It,pe).catch(Zi))}function jo(n){Hs=n,m0.textContent=Hs?">":"II",Hi.clear(),$i()}function fd(n=!1){if(bn||!Qt)return;const e=performance.now();!n&&e-bp<33||(bp=e,Qt.send("input",{paddle:Er}))}function Gl(n,e=!1){Er=cn(n,0,1),fd(e)}function Jw(){if(bn){const n=pe.seats.find(e=>e.id===oi);n&&n.lives>0&&(n.charge=!0);return}Qt?.send("input",{charge:!0})}function Zw(n){const e=si.getBoundingClientRect();Gl((n-e.left)/e.width)}function b0(n,e,t){Qr=n,uf=e,g0=Er,ad=!1,t.setPointerCapture(n)}function T0(n,e){Math.abs(n-uf)>4&&(ad=!0);const t=window.innerWidth<720?1.25:1,i=(n-uf)/Math.max(1,e)*t;Gl(g0+i)}function Wl(n,e){Qr===n&&(Qr=null,e.hasPointerCapture(n)&&e.releasePointerCapture(n))}si.addEventListener("pointerdown",n=>{b0(n.pointerId,n.clientX,si)});si.addEventListener("pointermove",n=>{Qr===n.pointerId&&T0(n.clientX,si.getBoundingClientRect().width)});si.addEventListener("click",n=>{ad||Zw(n.clientX)});si.addEventListener("pointerup",n=>Wl(n.pointerId,si));si.addEventListener("pointercancel",n=>Wl(n.pointerId,si));si.addEventListener("lostpointercapture",()=>{Qr=null});Ki.addEventListener("pointerdown",n=>{Do.classList.contains("hidden")&&b0(n.pointerId,n.clientX,Ki)});Ki.addEventListener("pointermove",n=>{Qr===n.pointerId&&T0(n.clientX,window.innerWidth*.72)});Ki.addEventListener("pointerup",n=>Wl(n.pointerId,Ki));Ki.addEventListener("pointercancel",n=>Wl(n.pointerId,Ki));Ki.addEventListener("lostpointercapture",()=>{Qr=null});function A0(){const n=Hi.has("ArrowLeft")||Hi.has("KeyA"),e=Hi.has("ArrowRight")||Hi.has("KeyD");return Number(e)-Number(n)}function Qw(n){return n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement}window.addEventListener("keydown",n=>{if(n.code==="Escape"&&bn&&(pe.phase==="playing"||pe.phase==="countdown")){n.preventDefault(),jo(!Hs);return}if(!Qw(n.target)&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)){n.preventDefault(),Hi.add(n.code);const e=A0();e!==0&&Gl(Er+e*.045,!0)}n.code==="Space"&&!n.repeat&&(n.preventDefault(),Jw())});window.addEventListener("keyup",n=>{["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&Hi.delete(n.code)});Pw.addEventListener("click",()=>Ks("single"));Iw.addEventListener("click",()=>Ks("multi"));Dw.addEventListener("click",()=>qo("settings"));Lw.addEventListener("click",()=>qo("about"));Ow.addEventListener("click",()=>qo("exit"));Uw.forEach(n=>n.addEventListener("click",()=>qo("main")));kw.addEventListener("click",()=>ld().catch(Zi));of.addEventListener("change",()=>{an={...an,language:of.value==="en"?"en":"es"},ed(an),S0()});af.addEventListener("input",()=>{an={...an,musicVolume:cn(Number(af.value),0,100)},h0.textContent=`${an.musicVolume}%`,ed(an)});lf.addEventListener("input",()=>{an={...an,sfxVolume:cn(Number(lf.value),0,100)},p0.textContent=`${an.sfxVolume}%`,ed(an)});td.addEventListener("change",y0);fl.addEventListener("change",Ys);sf.addEventListener("change",Ys);Nw.addEventListener("click",()=>E0().catch(Zi));Fw.addEventListener("click",()=>jw().catch(Zi));Bw.addEventListener("click",()=>cd().catch(Zi));Sr.addEventListener("click",()=>{if(bn){cd().catch(Zi);return}const n=pe.seats.find(e=>e.id===oi);Qt?.send("input",{ready:!n?.ready})});m0.addEventListener("click",()=>{jo(!Hs)});nd.addEventListener("click",()=>ld().catch(Zi));Vw.addEventListener("click",()=>jo(!1));Hw.addEventListener("click",()=>ld().catch(Zi));function Zi(n){Vs.textContent=n instanceof Error?n.message:Ut("errorConnection"),It&&i0(It,"error.client",{message:Vs.textContent}).catch(()=>{})}function eR(n,e){const t={sides:n,phase:"countdown",lastEvent:Ut("offlineEvent"),round:1,countdown:.9,remainingTime:e.matchTimeSeconds,matchTimeSeconds:e.matchTimeSeconds,livesPerPlayer:e.lives,lastTouchEdge:-1,mode:e.mode,ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:Array.from({length:n},(r,s)=>({id:s===0?"offline-human":`bot-${s}`,name:s===0?Bl.value.trim().slice(0,16)||Ut("playerFallback"):`${Ut("botName")} ${s}`,edgeIndex:s,paddle:.5,paddleVelocity:0,lives:e.lives,score:0,charge:!1,ready:!0,connected:!0}))},i=dd(-1,n);return t.ball={x:i.x,y:i.y,vx:i.vx,vy:i.vy},t.balls=[i],Ds=0,Oo=0,t}function dd(n=-1,e=pe.sides||qs){const t=js(ts(e),Mr(e,ai)),i=n>=0?Fl(n,e):-1,s=(i>=0?Math.atan2(-t[i].inward.y,-t[i].inward.x):e===2?Math.random()<.5?0:Math.PI:Math.random()*Math.PI*2)+(Math.random()-.5)*.65,o=Zf+Math.min(pe.balls?.length??0,s0-1)*.25;return{id:`local-ball-${v0++}`,x:0,y:0,vx:Math.cos(s)*o,vy:Math.sin(s)*o,lastTouchEdge:-1,chargedBy:-1,age:0,hitCount:0}}function hf(n,e=0){n.hitCount+=1;const t=Math.hypot(n.vx,n.vy)||Zf,i=tw(n.hitCount)+e;n.vx=n.vx/t*i,n.vy=n.vy/t*i}function tR(n){if(!bn||pe.phase==="lobby")return;if(pe.phase==="countdown"){pe.countdown-=n,pe.countdown<=0&&(pe.phase="playing",pe.lastEvent=Ut("offlineEvent")),$i();return}if(Oo+=n,rR(n),nR(n),pe.matchTimeSeconds>0&&(pe.remainingTime=Math.max(0,pe.remainingTime-n),pe.remainingTime<=0)){iR(),$i();return}const e=a0(pe.sides,Oo);Ds+=n,pe.balls.length<e&&Ds>=Qf&&(pe.balls.push(dd()),pe.lastEvent="Nueva esfera",Ds=0);for(let t=pe.balls.length-1;t>=0;t-=1){const i=pe.balls[t];i.age+=n,i.x+=i.vx*n,i.y+=i.vy*n,oR(i),aR(i,t)}w0(),$i()}function nR(n){if(pe.obstacles.forEach(e=>{e.angle+=e.spin*n}),Ms>0){Ms-=n,Ms<=0&&(pe.obstacles=Rp(pe.sides),Ms=wp());return}$a-=n,$a<=0&&(pe.obstacles=Rp(pe.sides),Ms=wp(),$a=0)}function iR(){const n=pe.seats.filter(i=>i.connected),e=Math.max(...n.map(i=>i.score),0),t=n.filter(i=>i.score===e);pe.phase="results",pe.obstacles=[],pe.chargedBy=-1,pe.ball={x:0,y:0,vx:0,vy:0},pe.balls=[],pe.lastEvent=t.length===1?`${t[0].name} gana por tiempo`:"Empate por tiempo"}function rR(n){const e=js(ts(pe.sides),Mr(pe.sides,ai));pe.seats.forEach(t=>{if(t.id===oi||pe.mode==="elimination"&&t.lives<=0)return;const i=e[Fl(t.edgeIndex,pe.sides)],s=df().map(R=>({ball:R,prediction:sR(i,{x:R.x,y:R.y},{x:R.vx,y:R.vy})})).filter(R=>R.prediction).sort((R,T)=>(R.prediction?.time??99)-(T.prediction?.time??99))[0],o=s?.prediction??null,a=s?.ball??df()[0]??pe.ball,c=performance.now()*.001,f=.5+t.edgeIndex*37%5*.08,d=.5+Math.sin(c*(.85+f)+t.edgeIndex*2.1)*.26,u=qr({x:a.vx,y:a.vy},i.tangent),p=cn(u/12,-.14,.14),m=o?cn(1.25-o.time,0,1):0,x=Math.sin(c*3.1+t.edgeIndex*1.7)*(.11-m*.045),y=o?o.t+p*m+x:d,v=cn(y,.08,.92),g=n*(.56+m*1.28+f*.18),I=t.paddle;t.paddle+=cn(v-t.paddle,-g,g),t.paddleVelocity=(t.paddle-I)/Math.max(n,.001)})}function sR(n,e,t){const i=qr(t,n.inward);if(i>=-.001)return null;const r={x:e.x-n.a.x,y:e.y-n.a.y},s=qr(r,n.inward),o=(Gn-s)/i;if(o<0||o>2.5)return null;const a={x:e.x+t.x*o,y:e.y+t.y*o},c=qr({x:a.x-n.a.x,y:a.y-n.a.y},n.tangent);return{t:cn(c/n.length,0,1),time:o}}function oR(n){for(const e of pe.obstacles){const t=n.x-e.x,i=n.y-e.y,r=Math.hypot(t,i),s=e.radius+Gn;if(r>s)continue;const o=r>.001?{x:t/r,y:i/r}:{x:1,y:0},a=tf({x:n.vx,y:n.vy},o),c={x:-o.y,y:o.x};n.vx=a.x+c.x*e.spin*.55,n.vy=a.y+c.y*e.spin*.55,hf(n),n.x=e.x+o.x*(s+.05),n.y=e.y+o.y*(s+.05),n.chargedBy=-1,pe.lastEvent="Obstaculo desvio";return}}function aR(n,e){const t=js(ts(pe.sides),Mr(pe.sides,ai));for(let i=0;i<t.length;i+=1){const r=t[i],s={x:n.x-r.a.x,y:n.y-r.a.y},o=qr(s,r.inward);if(o>Gn)continue;const c=qr(s,r.tangent)/r.length;if(c<-.02||c>1.02)continue;const f=l0(i,pe.sides),d=f>=0?pe.seats[f]:void 0;if(!d){const g=tf({x:n.vx,y:n.vy},r.inward);n.vx=g.x,n.vy=g.y,hf(n),n.x+=r.inward.x*(Gn-o+.06),n.y+=r.inward.y*(Gn-o+.06),n.chargedBy=-1,pe.lastEvent=`Muro ${i+1} reboto`;return}const p=Jf/r.length/2,m=d.id===oi?Fi:d.paddle,x=pe.mode==="elimination"&&d.connected&&d.lives<=0,y=d.connected&&d.lives>0&&Math.abs(c-m)<=p;if(y||x){const g=tf({x:n.vx,y:n.vy},r.inward),I=y?cn((c-m)/p,-1,1):0,R=Math.sign(I)*Math.pow(Math.abs(I),.72)*3.7,T=d.id===oi?sd:d.paddleVelocity,U=y?-cn(T,-3.2,3.2)*1.25:0;n.vx=g.x+r.tangent.x*(R+U),n.vy=g.y+r.tangent.y*(R+U);const B=y&&d.charge;hf(n,B?2.3:0),n.x+=r.inward.x*(Gn-o+.06),n.y+=r.inward.y*(Gn-o+.06),y?(n.lastTouchEdge=d.edgeIndex,n.chargedBy=B?d.edgeIndex:-1,pe.lastTouchEdge=d.edgeIndex,pe.chargedBy=n.chargedBy,d.charge=!1,pe.lastEvent=`${d.name} bloqueo`):(n.chargedBy=-1,pe.lastEvent=`Muro ${d.edgeIndex+1} reboto`);return}if(pe.mode==="score"){const g=pe.seats[n.lastTouchEdge];g&&g.connected&&g.edgeIndex!==d.edgeIndex?(g.score+=1,pe.lastEvent=`${g.name} anota`,Vr=1):pe.lastEvent=`${d.name} fallo`}else d.lives=Math.max(0,d.lives-1),pe.lastEvent=d.lives===0?`${d.name} eliminado`:`${d.name} perdio una vida`;const v=pe.mode==="score"?pe.seats.filter(g=>g.connected):pe.seats.filter(g=>g.lives>0);pe.mode==="elimination"&&v.length<=1?(pe.phase="results",pe.lastEvent=v[0]?`${v[0].name} gana`:"Ronda terminada",pe.balls=[]):(pe.round+=1,pe.balls.splice(e,1),pe.balls.length<a0(pe.sides,Oo)&&(pe.balls.push(dd(d.edgeIndex)),Ds=0)),w0();return}}function w0(){const n=pe.balls[0];if(!n){pe.ball={x:0,y:0,vx:0,vy:0},pe.lastTouchEdge=-1,pe.chargedBy=-1;return}pe.ball={x:n.x,y:n.y,vx:n.vx,vy:n.vy},pe.lastTouchEdge=n.lastTouchEdge,pe.chargedBy=n.chargedBy}function R0(n){const e=Math.min((n-Tp)/1e3,.1);Tp=n;const t=$w();if(dl.rotation.z+=Xw(dl.rotation.z,t)*Math.min(1,e*16),!Hs){const i=A0();i!==0&&Gl(Er+i*e*1.85);const r=Fi;for(Fi+=(Er-Fi)*Math.min(1,e*18),sd=(Fi-r)/Math.max(e,.001),Rw.style.left=`${Fi*100}%`,Wa+=e;Wa>=Yc;)tR(Yc),Wa-=Yc;Vr=Math.max(0,Vr-e*2.8),d0.style.filter=Vr>0?`brightness(${1+Vr*.8}) saturate(${1+Vr*.5})`:"",vw(zl,df(),Vi,n),fw(rd,pe.obstacles,n);const s=js(ts(pe.sides),Mr(pe.sides,ai));Lo.children.forEach(o=>{const a=o,c=a.userData.playerIndex,f=a.userData.edgeIndex,d=s[f],u=pe.seats[c],p=pe.mode==="elimination"&&!!u?.connected&&(u?.lives??0)<=0,m=p?.5:u?.connected&&u.id===oi?Fi:u?.paddle??.5,x=c0(d,m);a.position.set(x.x+d.inward.x*(p?.05:.28),x.y+d.inward.y*(p?.05:.28),.45),a.rotation.z=d.angle,a.scale.x=p?d.length/Jf:1,a.scale.y=p?.32:u?.connected?1:.35;const y=a.material;y.opacity=p?.42:1})}kl.render(id,ur),requestAnimationFrame(R0)}window.addEventListener("resize",Vl);window.addEventListener("blur",()=>{Hi.clear(),fd(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&Hi.clear(),fd(!0)});x0(qs);Vl();S0();y0();Yw().catch(Zi);requestAnimationFrame(R0);window.__THREE_GAME_DIAGNOSTICS__=()=>({renderer:kl.info.render,snapshot:pe,connected:!!Qt,mySessionId:oi,localPaddle:Fi,localPaddleTarget:Er,arcade:It});
