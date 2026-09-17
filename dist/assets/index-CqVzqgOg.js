(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Kf(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Ml={},Kh={},Jh;function L_(){return Jh||(Jh=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),Kh}var Ia={},Du=function(n,e){return Du=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Du(n,e)};function Mm(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Du(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wc=function(){return wc=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},wc.apply(this,arguments)};function Tm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function bm(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function wm(n,e){return function(t,i){e(t,i,n)}}function Am(n,e,t,i,r,s){function o(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,p=!1,m=t.length-1;m>=0;m--){var x={};for(var y in i)x[y]=y==="access"?{}:i[y];for(var y in i.access)x.access[y]=i.access[y];x.addInitializer=function(g){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(g||null))};var v=(0,t[m])(a==="accessor"?{get:h.get,set:h.set}:h[c],x);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(f=o(v.get))&&(h.get=f),(f=o(v.set))&&(h.set=f),(f=o(v.init))&&r.unshift(f)}else(f=o(v))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),p=!0}function Rm(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function Cm(n){return typeof n=="symbol"?n:"".concat(n)}function Pm(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Im(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Dm(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Lm(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Yc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function Om(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Yc(e,n,t)}function Ac(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Jf(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function Nm(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Jf(arguments[e]));return n}function Um(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function Fm(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Ys(n){return this instanceof Ys?(this.v=n,this):new Ys(n)}function Bm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(m){return function(x){return Promise.resolve(x).then(m,f)}}function a(m,x){i[m]&&(r[m]=function(y){return new Promise(function(v,g){s.push([m,y,v,g])>1||c(m,y)})},x&&(r[m]=x(r[m])))}function c(m,x){try{l(i[m](x))}catch(y){p(s[0][3],y)}}function l(m){m.value instanceof Ys?Promise.resolve(m.value.v).then(h,f):p(s[0][2],m)}function h(m){c("next",m)}function f(m){c("throw",m)}function p(m,x){m(x),s.shift(),s.length&&c(s[0][0],s[0][1])}}function zm(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:Ys(n[r](o)),done:!1}:s?s(o):o}:s}}function km(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ac=="function"?Ac(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function Vm(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var O_=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},Lu=function(n){return Lu=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},Lu(n)};function Hm(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=Lu(n),i=0;i<t.length;i++)t[i]!=="default"&&Yc(e,n,t[i]);return O_(e,n),e}function Gm(n){return n&&n.__esModule?n:{default:n}}function Wm(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function $m(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function Xm(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function qm(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var N_=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function jm(n){function e(s){n.error=n.hasError?new N_(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function Ym(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const U_={__extends:Mm,__assign:wc,__rest:Tm,__decorate:bm,__param:wm,__esDecorate:Am,__runInitializers:Rm,__propKey:Cm,__setFunctionName:Pm,__metadata:Im,__awaiter:Dm,__generator:Lm,__createBinding:Yc,__exportStar:Om,__values:Ac,__read:Jf,__spread:Nm,__spreadArrays:Um,__spreadArray:Fm,__await:Ys,__asyncGenerator:Bm,__asyncDelegator:zm,__asyncValues:km,__makeTemplateObject:Vm,__importStar:Hm,__importDefault:Gm,__classPrivateFieldGet:Wm,__classPrivateFieldSet:$m,__classPrivateFieldIn:Xm,__addDisposableResource:qm,__disposeResources:jm,__rewriteRelativeImportExtension:Ym},F_=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:qm,get __assign(){return wc},__asyncDelegator:zm,__asyncGenerator:Bm,__asyncValues:km,__await:Ys,__awaiter:Dm,__classPrivateFieldGet:Wm,__classPrivateFieldIn:Xm,__classPrivateFieldSet:$m,__createBinding:Yc,__decorate:bm,__disposeResources:jm,__esDecorate:Am,__exportStar:Om,__extends:Mm,__generator:Lm,__importDefault:Gm,__importStar:Hm,__makeTemplateObject:Vm,__metadata:Im,__param:wm,__propKey:Cm,__read:Jf,__rest:Tm,__rewriteRelativeImportExtension:Ym,__runInitializers:Rm,__setFunctionName:Pm,__spread:Nm,__spreadArray:Fm,__spreadArrays:Um,__values:Ac,default:U_},Symbol.toStringTag,{value:"Module"})),Kc=Kf(F_);var Tl={},Zh;function Jc(){return Zh||(Zh=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(Tl)),Tl}var bl={},wl={},Al={},Ro={exports:{}},B_=Ro.exports,Qh;function Zf(){return Qh||(Qh=1,(function(n,e){(function(t,i){i(e)})(B_,(function(t){t.OPERATION=void 0,(function(b){b[b.ADD=128]="ADD",b[b.REPLACE=0]="REPLACE",b[b.DELETE=64]="DELETE",b[b.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",b[b.MOVE_AND_ADD=160]="MOVE_AND_ADD",b[b.DELETE_AND_ADD=192]="DELETE_AND_ADD",b[b.CLEAR=10]="CLEAR",b[b.REVERSE=15]="REVERSE",b[b.MOVE=32]="MOVE",b[b.DELETE_BY_REFID=33]="DELETE_BY_REFID",b[b.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??=Symbol.for("Symbol.metadata");const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",p="~childType",m="~onEncodeEnd",x="~onDecodeEnd",y="~descriptors",v="~__numFields",g="~__refTypeFieldIndexes",C="~__viewFieldIndexes",A="$__fieldIndexesByViewTag";let T;try{T=new TextEncoder}catch{}const N=new ArrayBuffer(8),B=new Int32Array(N),z=new Float32Array(N),J=new Float64Array(N),I=new BigInt64Array(N),U=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(b,u){for(var d=0,_=0,E=0,O=b.length;E<O;E++)d=b.charCodeAt(E),d<128?_+=1:d<2048?_+=2:d<55296||d>=57344?_+=3:(E++,_+=4);return _};function ye(b,u,d){for(var _=0,E=0,O=u.length;E<O;E++)_=u.charCodeAt(E),_<128?b[d.offset++]=_:_<2048?(b[d.offset]=192|_>>6,b[d.offset+1]=128|_&63,d.offset+=2):_<55296||_>=57344?(b[d.offset]=224|_>>12,b[d.offset+1]=128|_>>6&63,b[d.offset+2]=128|_&63,d.offset+=3):(E++,_=65536+((_&1023)<<10|u.charCodeAt(E)&1023),b[d.offset]=240|_>>18,b[d.offset+1]=128|_>>12&63,b[d.offset+2]=128|_>>6&63,b[d.offset+3]=128|_&63,d.offset+=4)}function D(b,u,d){b[d.offset++]=u&255}function W(b,u,d){b[d.offset++]=u&255}function $(b,u,d){b[d.offset++]=u&255,b[d.offset++]=u>>8&255}function F(b,u,d){b[d.offset++]=u&255,b[d.offset++]=u>>8&255}function V(b,u,d){b[d.offset++]=u&255,b[d.offset++]=u>>8&255,b[d.offset++]=u>>16&255,b[d.offset++]=u>>24&255}function k(b,u,d){const _=u>>24,E=u>>16,O=u>>8,j=u;b[d.offset++]=j&255,b[d.offset++]=O&255,b[d.offset++]=E&255,b[d.offset++]=_&255}function Se(b,u,d){const _=Math.floor(u/Math.pow(2,32)),E=u>>>0;k(b,E,d),k(b,_,d)}function Ee(b,u,d){const _=u/Math.pow(2,32)>>0,E=u>>>0;k(b,E,d),k(b,_,d)}function Ce(b,u,d){I[0]=BigInt.asIntN(64,u),V(b,B[0],d),V(b,B[1],d)}function Ne(b,u,d){I[0]=BigInt.asIntN(64,u),V(b,B[0],d),V(b,B[1],d)}function ft(b,u,d){z[0]=u,V(b,B[0],d)}function ht(b,u,d){J[0]=u,V(b,B[0],d),V(b,B[1],d)}function ge(b,u,d){b[d.offset++]=u?1:0}function Ue(b,u,d){u||(u="");let _=U(u,"utf8"),E=0;if(_<32)b[d.offset++]=_|160,E=1;else if(_<256)b[d.offset++]=217,b[d.offset++]=_%255,E=2;else if(_<65536)b[d.offset++]=218,F(b,_,d),E=3;else if(_<4294967296)b[d.offset++]=219,k(b,_,d),E=5;else throw new Error("String too long");return ye(b,u,d),E+_}function Ie(b,u,d){if(isNaN(u))return Ie(b,0,d);if(isFinite(u)){if(u!==(u|0))return Math.abs(u)<=34028235e31&&(z[0]=u,Math.abs(Math.abs(z[0])-Math.abs(u))<1e-4)?(b[d.offset++]=202,ft(b,u,d),5):(b[d.offset++]=203,ht(b,u,d),9)}else return Ie(b,u>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,d);return u>=0?u<128?(b[d.offset++]=u&255,1):u<256?(b[d.offset++]=204,b[d.offset++]=u&255,2):u<65536?(b[d.offset++]=205,F(b,u,d),3):u<4294967296?(b[d.offset++]=206,k(b,u,d),5):(b[d.offset++]=207,Ee(b,u,d),9):u>=-32?(b[d.offset++]=224|u+32,1):u>=-128?(b[d.offset++]=208,D(b,u,d),2):u>=-32768?(b[d.offset++]=209,$(b,u,d),3):u>=-2147483648?(b[d.offset++]=210,V(b,u,d),5):(b[d.offset++]=211,Se(b,u,d),9)}const Qe={int8:D,uint8:W,int16:$,uint16:F,int32:V,uint32:k,int64:Se,uint64:Ee,bigint64:Ce,biguint64:Ne,float32:ft,float64:ht,boolean:ge,string:Ue,number:Ie,utf8Write:ye,utf8Length:U},nt=new ArrayBuffer(8),it=new Int32Array(nt),Vt=new Float32Array(nt),L=new Float64Array(nt),M=new BigUint64Array(nt),te=new BigInt64Array(nt);function se(b,u,d){d>b.length-u.offset&&(d=b.length-u.offset);for(var _="",E=0,O=u.offset,j=u.offset+d;O<j;O++){var me=b[O];if((me&128)===0){_+=String.fromCharCode(me);continue}if((me&224)===192){_+=String.fromCharCode((me&31)<<6|b[++O]&63);continue}if((me&240)===224){_+=String.fromCharCode((me&15)<<12|(b[++O]&63)<<6|(b[++O]&63)<<0);continue}if((me&248)===240){E=(me&7)<<18|(b[++O]&63)<<12|(b[++O]&63)<<6|(b[++O]&63)<<0,E>=65536?(E-=65536,_+=String.fromCharCode((E>>>10)+55296,(E&1023)+56320)):_+=String.fromCharCode(E);continue}console.error("decode.utf8Read(): Invalid byte "+me+" at offset "+O+". Skip to end of string: "+(u.offset+d));break}return u.offset+=d,_}function he(b,u){return Q(b,u)<<24>>24}function Q(b,u){return b[u.offset++]}function Me(b,u){return oe(b,u)<<16>>16}function oe(b,u){return b[u.offset++]|b[u.offset++]<<8}function de(b,u){return b[u.offset++]|b[u.offset++]<<8|b[u.offset++]<<16|b[u.offset++]<<24}function _e(b,u){return de(b,u)>>>0}function He(b,u){return it[0]=de(b,u),Vt[0]}function w(b,u){return it[0]=de(b,u),it[1]=de(b,u),L[0]}function S(b,u){const d=_e(b,u);return de(b,u)*Math.pow(2,32)+d}function H(b,u){const d=_e(b,u);return _e(b,u)*Math.pow(2,32)+d}function ne(b,u){return it[0]=de(b,u),it[1]=de(b,u),te[0]}function ve(b,u){return it[0]=de(b,u),it[1]=de(b,u),M[0]}function ie(b,u){return Q(b,u)>0}function Fe(b,u){const d=b[u.offset++];let _;return d<192?_=d&31:d===217?_=Q(b,u):d===218?_=oe(b,u):d===219&&(_=_e(b,u)),se(b,u,_)}function Te(b,u){const d=b[u.offset++];if(d<128)return d;if(d===202)return He(b,u);if(d===203)return w(b,u);if(d===204)return Q(b,u);if(d===205)return oe(b,u);if(d===206)return _e(b,u);if(d===207)return H(b,u);if(d===208)return he(b,u);if(d===209)return Me(b,u);if(d===210)return de(b,u);if(d===211)return S(b,u);if(d>223)return(255-d+1)*-1}function Je(b,u){const d=b[u.offset];return d<192&&d>160||d===217||d===218||d===219}const Oe={utf8Read:se,int8:he,uint8:Q,int16:Me,uint16:oe,int32:de,uint32:_e,float32:He,float64:w,int64:S,uint64:H,bigint64:ne,biguint64:ve,boolean:ie,string:Fe,number:Te,stringCheck:Je},we={},ke=new Map;function qe(b,u){u.constructor&&(ke.set(u.constructor,b),we[b]=u),u.encode&&(Qe[b]=u.encode),u.decode&&(Oe[b]=u.decode)}function Ke(b){return we[b]}function Be(b){for(const u in b)qe(u,b[u]);return u=>ze(u)}const yi=class yi{static register(u){const d=Object.getPrototypeOf(u);if(d!==Xe){let _=yi.inheritedTypes.get(d);_||(_=new Set,yi.inheritedTypes.set(d,_)),_.add(u)}}static cache(u){let d=yi.cachedContexts.get(u);return d||(d=new yi(u),yi.cachedContexts.set(u,d)),d}constructor(u){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},u&&this.discoverTypes(u)}has(u){return this.schemas.has(u)}get(u){return this.types[u]}add(u,d=this.schemas.size){return this.schemas.has(u)?!1:(this.types[d]=u,u[Symbol.metadata]===void 0&&Re.initialize(u),this.schemas.set(u,d),!0)}getTypeId(u){return this.schemas.get(u)}discoverTypes(u,d,_,E){if(E&&this.registerFilteredByParent(u,d,_),!this.add(u))return;yi.inheritedTypes.get(u)?.forEach(me=>{this.discoverTypes(me,d,_,E)});let O=u;for(;(O=Object.getPrototypeOf(O))&&O!==Xe&&O!==Function.prototype;)this.discoverTypes(O);const j=u[Symbol.metadata]??={};j[C]&&(this.hasFilters=!0);for(const me in j){const re=me,ue=j[re].type,pe=j[re].tag!==void 0;if(typeof ue!="string")if(typeof ue=="function")this.discoverTypes(ue,u,re,E||pe);else{const le=Object.values(ue)[0];if(typeof le=="string")continue;this.discoverTypes(le,u,re,E||pe)}}}registerFilteredByParent(u,d,_){let O=`${this.schemas.get(u)??this.schemas.size}`;d&&(O+=`-${this.schemas.get(d)}`),O+=`-${_}`,this.parentFiltered[O]=!0}debug(){let u="";for(const d in this.parentFiltered){const _=d.split("-").map(Number),E=_.pop();u+=`
		`,u+=`${d}: ${_.reverse().map((O,j)=>{const me=this.types[O],re=me[Symbol.metadata];let ue=me.name;return j===0&&(ue+=`[${re[E].name}]`),`${ue}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${u}`}};yi.inheritedTypes=new Map,yi.cachedContexts=new Map;let st=yi;function G(b){if(Array.isArray(b))return{array:G(b[0])};if(typeof b.type<"u")return b.type;if(De(b))return Object.keys(b).every(u=>typeof b[u]=="string")?"string":"number";if(typeof b=="object"&&b!==null){const u=Object.keys(b).find(d=>we[d]!==void 0);if(u)return b[u]=G(b[u]),b}return b}function De(b){if(typeof b=="function"&&b[Symbol.metadata])return!1;const u=Object.keys(b),d=u.filter(_=>/\d+/.test(_));return!!(d.length>0&&d.length===u.length/2&&b[b[d[0]]]==d[0]||u.length>0&&u.every(_=>typeof b[_]=="string"&&b[_]===_))}const Re={addField(b,u,d,_,E){if(u>64)throw new Error(`Can't define field '${d}'.
Schema instances may only have up to 64 fields.`);b[u]=Object.assign(b[u]||{},{type:G(_),index:u,name:d}),Object.defineProperty(b,y,{value:b[y]||{},enumerable:!1,configurable:!0}),E?(b[y][d]=E,b[y][`_${d}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):b[y][d]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(b,v,{value:u,enumerable:!1,configurable:!0}),Object.defineProperty(b,d,{value:u,enumerable:!1,configurable:!0}),typeof b[u].type!="string"&&(b[g]===void 0&&Object.defineProperty(b,g,{value:[],enumerable:!1,configurable:!0}),b[g].push(u))},setTag(b,u,d){const _=b[u],E=b[_];E.tag=d,b[C]||(Object.defineProperty(b,C,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(b,A,{value:{},enumerable:!1,configurable:!0})),b[C].push(_),b[A][d]||(b[A][d]=[]),b[A][d].push(_)},setFields(b,u){const d=b.prototype.constructor;st.register(d);const _=Object.getPrototypeOf(d),E=_&&_[Symbol.metadata],O=Re.initialize(d);d[s]||(d[s]=Xe[s]),d[o]||(d[o]=Xe[o]),d[a]||(d[a]=Xe[a]),d.prototype.toJSON||(d.prototype.toJSON=Xe.prototype.toJSON);let j=O[v]??(E&&E[v])??-1;j++;for(const me in u){const re=G(u[me]),ue=typeof Object.keys(re)[0]=="string"&&Ke(Object.keys(re)[0]),pe=ue?Object.values(re)[0]:re;Re.addField(O,j,me,re,ct(`_${me}`,j,pe,ue)),j++}return b},isDeprecated(b,u){return b[u].deprecated===!0},init(b){const u={};b[Symbol.metadata]=u,Object.defineProperty(u,v,{value:0,enumerable:!1,configurable:!0})},initialize(b){const u=Object.getPrototypeOf(b),d=u[Symbol.metadata];let _=b[Symbol.metadata]??Object.create(null);return u!==Xe&&_===d&&(_=Object.create(null),d&&(Object.setPrototypeOf(_,d),Object.defineProperty(_,v,{value:d[v],enumerable:!1,configurable:!0,writable:!0}),d[C]!==void 0&&(Object.defineProperty(_,C,{value:[...d[C]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,A,{value:{...d[A]},enumerable:!1,configurable:!0,writable:!0})),d[g]!==void 0&&Object.defineProperty(_,g,{value:[...d[g]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,y,{value:{...d[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(b,Symbol.metadata,{value:_,writable:!1,configurable:!0}),_},isValidInstance(b){return b.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(b.constructor[Symbol.metadata],v)},getFields(b){const u=b[Symbol.metadata],d={};for(let _=0;_<=u[v];_++)d[u[_].name]=u[_].type;return d},hasViewTagAtIndex(b,u){return b?.[C]?.includes(u)}};function je(b){return{indexes:{},operations:[],queueRootNode:b}}function Ae(){return{next:void 0,tail:void 0}}function xe(b,u){const d=b.indexes[u];d===void 0?b.indexes[u]=b.operations.push(u)-1:b.operations[d]=u}function tt(b,u){let d=b.indexes[u];d===void 0&&(d=Object.values(b.indexes).at(-1),u=Object.entries(b.indexes).find(([_,E])=>E===d)?.[0]),b.operations[d]=void 0,delete b.indexes[u]}class lt{constructor(u){this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=u,this.metadata=u.constructor[Symbol.metadata],this.metadata?.[C]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(u){this.root=u;const d=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,d),d&&this.forEachChild((_,E)=>{_.root!==u?_.setRoot(u):u.add(_)})}setParent(u,d,_){if(this.addParent(u,_),!d)return;const E=d.add(this);d!==this.root&&(this.root=d,this.checkIsFiltered(u,_,E)),E&&this.forEachChild((O,j)=>{if(O.root===d){d.add(O),d.moveNextToParent(O);return}O.setParent(this.ref,d,j)})}forEachChild(u){if(this.ref[p]){if(typeof this.ref[p]!="string")for(const[d,_]of this.ref.entries())_&&u(_[f],this.indexes?.[d]??d)}else for(const d of this.metadata?.[g]??[]){const _=this.metadata[d],E=this.ref[_.name];E&&u(E[f],d)}}operation(u){this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-u),this.root?.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-u),this.root?.enqueueChangeTree(this,"changes"))}change(u,d=t.OPERATION.ADD){const _=this.isFiltered||this.metadata?.[u]?.tag!==void 0,E=_?this.filteredChanges:this.changes,O=this.indexedOperations[u];if(!O||O===t.OPERATION.DELETE){const j=O&&O===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:d;this.indexedOperations[u]=j}xe(E,u),_?(xe(this.allFilteredChanges,u),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(xe(this.allChanges,u),this.root?.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(u){const d=this.isFiltered?this.filteredChanges:this.changes,_={},E={};for(const O in this.indexedOperations)_[Number(O)+u]=this.indexedOperations[O],E[Number(O)+u]=d.indexes[O];this.indexedOperations=_,d.indexes=E,d.operations=d.operations.map(O=>O+u)}shiftAllChangeIndexes(u,d=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(u,d,this.allFilteredChanges),this._shiftAllChangeIndexes(u,d,this.allChanges)):this._shiftAllChangeIndexes(u,d,this.allChanges)}_shiftAllChangeIndexes(u,d=0,_){const E={};let O=0;for(const j in _.indexes)E[O++]=_.indexes[j];_.indexes=E;for(let j=0;j<_.operations.length;j++){const me=_.operations[j];me>d&&(_.operations[j]=me+u)}}indexedOperation(u,d,_=u){this.indexedOperations[u]=d,this.filteredChanges!==void 0?(xe(this.allFilteredChanges,_),xe(this.filteredChanges,u),this.root?.enqueueChangeTree(this,"filteredChanges")):(xe(this.allChanges,_),xe(this.changes,u),this.root?.enqueueChangeTree(this,"changes"))}getType(u){return this.ref[p]||this.metadata[u].type}getChange(u){return this.indexedOperations[u]}getValue(u,d=!1){return this.ref[l](u,d)}delete(u,d,_=u){if(u===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${u}'`)}catch(j){console.warn(j)}return}const E=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[u]=d??t.OPERATION.DELETE,xe(E,u),tt(this.allChanges,_);const O=this.getValue(u);return O&&O[f]&&this.root?.remove(O[f]),this.filteredChanges!==void 0?(tt(this.allFilteredChanges,_),this.root?.enqueueChangeTree(this,"filteredChanges")):this.root?.enqueueChangeTree(this,"changes"),O}endEncode(u){this.indexedOperations={},this[u]=je(),this.ref[m]?.(),this.isNew=!1}discard(u=!1){this.ref[m]?.(),this.indexedOperations={},this.changes=je(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=je(this.filteredChanges.queueRootNode)),u&&(this.allChanges=je(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=je(this.allFilteredChanges.queueRootNode)))}discardAll(){const u=Object.keys(this.indexedOperations);for(let d=0,_=u.length;d<_;d++){const E=this.getValue(Number(u[d]));E&&E[f]&&E[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(u,d,_){this.root.types.hasFilters&&(this._checkFilteredByParent(u,d),this.filteredChanges!==void 0&&(this.root?.enqueueChangeTree(this,"filteredChanges"),_&&this.root?.enqueueChangeTree(this,"allFilteredChanges"))),this.isFiltered||(this.root?.enqueueChangeTree(this,"changes"),_&&this.root?.enqueueChangeTree(this,"allChanges"))}_checkFilteredByParent(u,d){if(!u)return;const _=Re.isValidInstance(this.ref)?this.ref.constructor:this.ref[p];let E,O=!Re.isValidInstance(u);O?(E=u[f],u=E.parent,d=E.parentIndex):E=u[f];const j=u.constructor;let me=`${this.root.types.getTypeId(_)}`;j&&(me+=`-${this.root.types.schemas.get(j)}`),me+=`-${d}`;const re=Re.hasViewTagAtIndex(j?.[Symbol.metadata],d);this.isFiltered=u[f].isFiltered||this.root.types.parentFiltered[me]||re,this.isFiltered&&(this.isVisibilitySharedWithParent=E.isFiltered&&typeof _!="string"&&!re&&O,this.filteredChanges||(this.filteredChanges=je(),this.allFilteredChanges=je()),this.changes.operations.length>0&&(this.changes.operations.forEach(ue=>xe(this.filteredChanges,ue)),this.allChanges.operations.forEach(ue=>xe(this.allFilteredChanges,ue)),this.changes=je(),this.allChanges=je()))}get parent(){return this.parentChain?.ref}get parentIndex(){return this.parentChain?.index}addParent(u,d){if(this.hasParent((_,E)=>_[f]===u[f])){this.parentChain.index=d;return}this.parentChain={ref:u,index:d,next:this.parentChain}}removeParent(u=this.parent){let d=this.parentChain,_=null;for(;d;){if(d.ref[f]===u[f])return _?_.next=d.next:this.parentChain=d.next,!0;_=d,d=d.next}return this.parentChain===void 0}findParent(u){let d=this.parentChain;for(;d;){if(u(d.ref,d.index))return d;d=d.next}}hasParent(u){return this.findParent(u)!==void 0}getAllParents(){const u=[];let d=this.parentChain;for(;d;)u.push({ref:d.ref,index:d.index}),d=d.next;return u}}function wt(b,u,d,_,E,O){typeof d=="string"?Qe[d]?.(u,_,O):d[Symbol.metadata]!==void 0?(Qe.number(u,_[f].refId,O),(E&t.OPERATION.ADD)===t.OPERATION.ADD&&b.tryEncodeTypeId(u,d,_.constructor,O)):Qe.number(u,_[f].refId,O)}const Et=function(b,u,d,_,E,O,j,me,re){if(u[O.offset++]=(_|E)&255,E===t.OPERATION.DELETE)return;const ue=d.ref,pe=re[_];wt(b,u,re[_].type,ue[pe.name],E,O)},Nn=function(b,u,d,_,E,O){if(u[O.offset++]=E&255,Qe.number(u,_,O),E===t.OPERATION.DELETE)return;const j=d.ref;if((E&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof j.set=="function"){const ue=d.ref.$indexes.get(_);Qe.string(u,ue,O)}const me=j[p],re=j[l](_);wt(b,u,me,re,E,O)},kn=function(b,u,d,_,E,O,j,me){const re=d.ref,ue=me&&d.isFiltered&&typeof d.getType(_)!="string";let pe;if(ue){const Ve=re.tmpItems[_];if(!Ve)return;pe=Ve[f].refId,E===t.OPERATION.DELETE?E=t.OPERATION.DELETE_BY_REFID:E===t.OPERATION.ADD&&(E=t.OPERATION.ADD_BY_REFID)}else pe=_;if(u[O.offset++]=E&255,Qe.number(u,pe,O),E===t.OPERATION.DELETE||E===t.OPERATION.DELETE_BY_REFID)return;const le=d.getType(_),Ye=d.getValue(_,j);wt(b,u,le,Ye,E,O)},mo=-1;function ii(b,u,d,_,E,O,j,me){const re=b.root,ue=d[l](_);let pe;if((u&t.OPERATION.DELETE)===t.OPERATION.DELETE){const le=re.refIds.get(ue);le!==void 0&&re.removeRef(le),u!==t.OPERATION.DELETE_AND_ADD&&d[h](_),pe=void 0}if(u!==t.OPERATION.DELETE)if(Xe.is(E)){const le=Oe.number(O,j);if(pe=re.refs.get(le),(u&t.OPERATION.ADD)===t.OPERATION.ADD){const Ye=b.getInstanceType(O,j,E);pe||(pe=b.createInstanceOfType(Ye)),re.addRef(le,pe,pe!==ue||u===t.OPERATION.DELETE_AND_ADD&&pe===ue)}}else if(typeof E=="string")pe=Oe[E](O,j);else{const le=Ke(Object.keys(E)[0]),Ye=Oe.number(O,j),Ve=re.refs.has(Ye)?ue||re.refs.get(Ye):new le.constructor;if(pe=Ve.clone(!0),pe[p]=Object.values(E)[0],ue){let Le=re.refIds.get(ue);if(Le!==void 0&&Ye!==Le){const Pe=ue.entries();let Ze;for(;(Ze=Pe.next())&&!Ze.done;){const[Xt,qt]=Ze.value;typeof qt=="object"&&(Le=re.refIds.get(qt),re.removeRef(Le)),me.push({ref:ue,refId:Le,op:t.OPERATION.DELETE,field:Xt,value:void 0,previousValue:qt})}}}re.addRef(Ye,pe,Ve!==ue||u===t.OPERATION.DELETE_AND_ADD&&Ve===ue)}return{value:pe,previousValue:ue}}const _s=function(b,u,d,_,E){const O=u[d.offset++],j=_.constructor[Symbol.metadata],me=O>>6<<6,re=O%(me||255),ue=j[re];if(ue===void 0)return console.warn("@colyseus/schema: field not defined at",{index:re,ref:_.constructor.name,metadata:j}),mo;const{value:pe,previousValue:le}=ii(b,me,_,re,ue.type,u,d,E);pe!=null&&(_[ue.name]=pe),le!==pe&&E.push({ref:_,refId:b.currentRefId,op:me,field:ue.name,value:pe,previousValue:le})},Nr=function(b,u,d,_,E){const O=u[d.offset++];if(O===t.OPERATION.CLEAR){b.removeChildRefs(_,E),_.clear();return}const j=Oe.number(u,d),me=_[p];let re;(O&t.OPERATION.ADD)===t.OPERATION.ADD?typeof _.set=="function"?(re=Oe.string(u,d),_.setIndex(j,re)):re=j:re=_.getIndex(j);const{value:ue,previousValue:pe}=ii(b,O,_,j,me,u,d,E);if(ue!=null){if(typeof _.set=="function")_.$items.set(re,ue);else if(typeof _.$setAt=="function")_.$setAt(j,ue,O);else if(typeof _.add=="function"){const le=_.add(ue);typeof le=="number"&&_.setIndex(le,le)}}pe!==ue&&E.push({ref:_,refId:b.currentRefId,op:O,field:"",dynamicIndex:re,value:ue,previousValue:pe})},Ta=function(b,u,d,_,E){let O=u[d.offset++],j;if(O===t.OPERATION.CLEAR){b.removeChildRefs(_,E),_.clear();return}else if(O===t.OPERATION.REVERSE){_.reverse();return}else if(O===t.OPERATION.DELETE_BY_REFID){const le=Oe.number(u,d),Ye=b.root.refs.get(le);j=_.findIndex(Ve=>Ve===Ye),_[h](j),E.push({ref:_,refId:b.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:j,value:void 0,previousValue:Ye});return}else if(O===t.OPERATION.ADD_BY_REFID){const le=Oe.number(u,d),Ye=b.root.refs.get(le);Ye&&(j=_.findIndex(Ve=>Ve===Ye)),(j===-1||j===void 0)&&(j=_.length)}else j=Oe.number(u,d);const me=_[p];let re=j;const{value:ue,previousValue:pe}=ii(b,O,_,j,me,u,d,E);ue!=null&&ue!==pe&&_.$setAt(j,ue,O),pe!==ue&&E.push({ref:_,refId:b.currentRefId,op:O,field:"",dynamicIndex:re,value:ue,previousValue:pe})};class Ur extends Error{}function ba(b,u,d,_){let E,O=!1;switch(u){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":E="number",isNaN(b)&&console.log(`trying to encode "NaN" in ${d.constructor.name}#${_}`);break;case"bigint64":case"biguint64":E="bigint";break;case"string":E="string",O=!0;break;case"boolean":return;default:return}if(typeof b!==E&&(!O||O&&b!==null)){let j=`'${JSON.stringify(b)}'${b&&b.constructor&&` (${b.constructor.name})`||""}`;throw new Ur(`a '${E}' was expected, but ${j} was provided in ${d.constructor.name}#${_}`)}}function Fi(b,u,d,_){if(!(b instanceof u))throw new Ur(`a '${u.name}' was expected, but '${b&&b.constructor.name}' was provided in ${d.constructor.name}#${_}`)}var go,_o;const El=(b,u)=>{const d=b.toString(),_=u.toString();return d<_?-1:d>_?1:0},si=class si{static[(go=o,_o=a,c)](u,d,_){return!_||typeof u[p]=="string"||_.isChangeTreeVisible(u.tmpItems[d]?.[f])}static is(u){return Array.isArray(u)||u.array!==void 0}static from(u){return new si(...Array.from(u))}constructor(...u){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const d=new Proxy(this,{get:(_,E)=>typeof E!="symbol"&&!isNaN(E)?this.items[E]:Reflect.get(_,E),set:(_,E,O)=>{if(typeof E!="symbol"&&!isNaN(E)){if(O==null)_.$deleteAt(E);else{if(O[f]){Fi(O,_[p],_,E);const j=_.items[E];_.isMovingItems?(j!==void 0?O[f].isNew?_[f].indexedOperation(Number(E),t.OPERATION.MOVE_AND_ADD):(_[f].getChange(Number(E))&t.OPERATION.DELETE)===t.OPERATION.DELETE?_[f].indexedOperation(Number(E),t.OPERATION.DELETE_AND_MOVE):_[f].indexedOperation(Number(E),t.OPERATION.MOVE):O[f].isNew&&_[f].indexedOperation(Number(E),t.OPERATION.ADD),O[f].setParent(this,_[f].root,E)):_.$changeAt(Number(E),O),j!==void 0&&j[f].root?.remove(j[f])}else _.$changeAt(Number(E),O);_.items[E]=O,_.tmpItems[E]=O}return!0}else return Reflect.set(_,E,O)},deleteProperty:(_,E)=>(typeof E=="number"?_.$deleteAt(E):delete _[E],!0),has:(_,E)=>typeof E!="symbol"&&!isNaN(Number(E))?Reflect.has(this.items,E):Reflect.has(_,E)});return Object.defineProperty(this,f,{value:new lt(d),enumerable:!1,writable:!0}),u.length>0&&this.push(...u),d}set length(u){u===0?this.clear():u<this.items.length?this.splice(u,this.length-u):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...u){let d=this.tmpItems.length;const _=this[f];for(let E=0,O=u.length;E<O;E++,d++){const j=u[E];if(j==null)return;typeof j=="object"&&this[p]&&Fi(j,this[p],this,E),_.indexedOperation(d,t.OPERATION.ADD,this.items.length),this.items.push(j),this.tmpItems.push(j),j[f]?.setParent(this,_.root,d)}return d}pop(){let u=-1;for(let d=this.tmpItems.length-1;d>=0;d--)if(this.deletedIndexes[d]!==!0){u=d;break}if(!(u<0))return this[f].delete(u,void 0,this.items.length-1),this.deletedIndexes[u]=!0,this.items.pop()}at(u){return u<0&&(u+=this.length),this.items[u]}$changeAt(u,d){if(d==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[u]===d)return;const _=this.items[u]!==void 0?typeof d=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,E=this[f];E.change(u,_),d[f]?.setParent(this,E.root,u)}$deleteAt(u,d){this[f].delete(u,d)}$setAt(u,d,_){u===0&&_===t.OPERATION.ADD&&this.items[u]!==void 0?this.items.unshift(d):_===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(u,1),this.items[u]=d):this.items[u]=d}clear(){if(this.items.length===0)return;const u=this[f];u.forEachChild((d,_)=>{u.root?.remove(d)}),u.discard(!0),u.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...u){return new si(...this.items.concat(...u))}join(u){return this.items.join(u)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const u=this[f],d=this.tmpItems.findIndex(E=>E===this.items[0]),_=this.items.findIndex(E=>E===this.items[0]);return u.delete(d,t.OPERATION.DELETE,_),u.shiftAllChangeIndexes(-1,_),this.deletedIndexes[d]=!0,this.items.shift()}slice(u,d){const _=new si;return _.push(...this.items.slice(u,d)),_}sort(u=El){this.isMovingItems=!0;const d=this[f];return this.items.sort(u).forEach((E,O)=>d.change(O,t.OPERATION.REPLACE)),this.tmpItems.sort(u),this.isMovingItems=!1,this}splice(u,d,..._){const E=this[f],O=this.items.length,j=this.tmpItems.length,me=_.length,re=[];for(let ue=0;ue<j;ue++)this.deletedIndexes[ue]!==!0&&re.push(ue);if(O>u){d===void 0&&(d=O-u);for(let ue=u;ue<u+d;ue++){const pe=re[ue];E.delete(pe,t.OPERATION.DELETE),this.deletedIndexes[pe]=!0}}else d=0;if(me>0){if(me>d)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let ue=0;ue<me;ue++){const pe=(re[u]??O)+ue;E.indexedOperation(pe,this.deletedIndexes[pe]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),_[ue][f]?.setParent(this,E.root,pe)}}return d>me&&E.shiftAllChangeIndexes(-(d-me),re[u+me]),E.filteredChanges!==void 0?E.root?.enqueueChangeTree(E,"filteredChanges"):E.root?.enqueueChangeTree(E,"changes"),this.items.splice(u,d,..._)}unshift(...u){const d=this[f];return d.shiftChangeIndexes(u.length),d.isFiltered?xe(d.filteredChanges,this.items.length):xe(d.allChanges,this.items.length),u.forEach((_,E)=>{d.change(E,t.OPERATION.ADD)}),this.tmpItems.unshift(...u),this.items.unshift(...u)}indexOf(u,d){return this.items.indexOf(u,d)}lastIndexOf(u,d=this.length-1){return this.items.lastIndexOf(u,d)}every(u,d){return this.items.every(u,d)}some(u,d){return this.items.some(u,d)}forEach(u,d){return this.items.forEach(u,d)}map(u,d){return this.items.map(u,d)}filter(u,d){return this.items.filter(u,d)}reduce(u,d){return this.items.reduce(u,d)}reduceRight(u,d){return this.items.reduceRight(u,d)}find(u,d){return this.items.find(u,d)}findIndex(u,d){return this.items.findIndex(u,d)}fill(u,d,_){throw new Error("ArraySchema#fill() not implemented")}copyWithin(u,d,_){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return si}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(u,d){return this.items.includes(u,d)}flatMap(u,d){throw new Error("ArraySchema#flatMap() is not supported.")}flat(u){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...u){return this.items.findLastIndex.apply(this.items,arguments)}with(u,d){const _=this.items.slice();return u<0&&(u+=this.length),_[u]=d,new si(..._)}toReversed(){return this.items.slice().reverse()}toSorted(u){return this.items.slice().sort(u)}toSpliced(u,d,..._){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(u=>{let d=this.items.length;for(;d!=0;){let _=Math.floor(Math.random()*d);d--,[this[d],this[_]]=[this[_],this[d]]}})}move(u){return this.isMovingItems=!0,u(this),this.isMovingItems=!1,this}[l](u,d=!1){return d?this.items[u]:this.deletedIndexes[u]?this.items[u]:this.tmpItems[u]||this.items[u]}[h](u){this.items[u]=void 0,this.tmpItems[u]=void 0}[m](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[x](){this.items=this.items.filter(u=>u!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(u=>typeof u.toJSON=="function"?u.toJSON():u)}clone(u){let d;return u?(d=new si,d.push(...this.items)):d=new si(...this.map(_=>_[f]?_.clone():_)),d}};si[go]=kn,si[_o]=Ta;let Vn=si;qe("array",{constructor:Vn});var wa,Aa;const dr=class dr{static[(wa=o,Aa=a,c)](u,d,_){return!_||typeof u[p]=="string"||_.isChangeTreeVisible((u[l](d)??u.deletedItems[d])[f])}static is(u){return u.map!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const d=new lt(this);if(d.indexes={},Object.defineProperty(this,f,{value:d,enumerable:!1,writable:!0}),u)if(u instanceof Map||u instanceof dr)u.forEach((_,E)=>this.set(E,_));else for(const _ in u)this.set(_,u[_]);Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return dr}set(u,d){if(d==null)throw new Error(`MapSchema#set('${u}', ${d}): trying to set ${d} value on '${u}'.`);typeof d=="object"&&this[p]&&Fi(d,this[p],this,u),u=u.toString();const _=this[f],E=d[f]!==void 0;let O,j;if(typeof _.indexes[u]<"u"){O=_.indexes[u],j=t.OPERATION.REPLACE;const me=this.$items.get(u);if(me===d)return;E&&(j=t.OPERATION.DELETE_AND_ADD,me!==void 0&&me[f].root?.remove(me[f])),this.deletedItems[O]&&delete this.deletedItems[O]}else O=_.indexes[v]??0,j=t.OPERATION.ADD,this.$indexes.set(O,u),_.indexes[u]=O,_.indexes[v]=O+1;return this.$items.set(u,d),_.change(O,j),E&&d[f].setParent(this,_.root,O),this}get(u){return this.$items.get(u)}delete(u){if(!this.$items.has(u))return!1;const d=this[f].indexes[u];return this.deletedItems[d]=this[f].delete(d),this.$items.delete(u)}clear(){const u=this[f];u.discard(!0),u.indexes={},u.forEachChild((d,_)=>{u.root?.remove(d)}),this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){return this.$items.has(u)}forEach(u){this.$items.forEach(u)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(u,d){this.$indexes.set(u,d)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[h](u){const d=this.$indexes.get(u);this.$items.delete(d),this.$indexes.delete(u)}[m](){const u=this[f];for(const d in this.deletedItems){const _=parseInt(d),E=this.$indexes.get(_);delete u.indexes[E],this.$indexes.delete(_)}this.deletedItems={}}toJSON(){const u={};return this.forEach((d,_)=>{u[_]=typeof d.toJSON=="function"?d.toJSON():d}),u}clone(u){let d;return u?d=Object.assign(new dr,this):(d=new dr,this.forEach((_,E)=>{_[f]?d.set(E,_.clone()):d.set(E,_)})),d}};dr[wa]=Nn,dr[Aa]=Nr;let ri=dr;qe("map",{constructor:ri});var Ra,R;const vs=class vs{static[(Ra=o,R=a,c)](u,d,_){return!_||typeof u[p]=="string"||_.isChangeTreeVisible((u[l](d)??u.deletedItems[d])[f])}static is(u){return u.collection!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new lt(this),this[f].indexes={},u&&u.forEach(d=>this.add(d)),Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(u){const d=this.$refId++;return u[f]!==void 0&&u[f].setParent(this,this[f].root,d),this[f].indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,u),this[f].change(d),d}at(u){const d=Array.from(this.$items.keys())[u];return this.$items.get(d)}entries(){return this.$items.entries()}delete(u){const d=this.$items.entries();let _,E;for(;(E=d.next())&&!E.done;)if(u===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[f].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const u=this[f];u.discard(!0),u.indexes={},u.forEachChild((d,_)=>{u.root?.remove(d)}),this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){return Array.from(this.$items.values()).some(d=>d===u)}forEach(u){this.$items.forEach((d,_,E)=>u(d,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(u,d){this.$indexes.set(u,d)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[h](u){const d=this.$indexes.get(u);this.$items.delete(d),this.$indexes.delete(u)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const u=[];return this.forEach((d,_)=>{u.push(typeof d.toJSON=="function"?d.toJSON():d)}),u}clone(u){let d;return u?d=Object.assign(new vs,this):(d=new vs,this.forEach(_=>{_[f]?d.add(_.clone()):d.add(_)})),d}};vs[Ra]=Nn,vs[R]=Nr;let X=vs;qe("collection",{constructor:X});var ae,ce;const xs=class xs{static[(ae=o,ce=a,c)](u,d,_){return!_||typeof u[p]=="string"||_.visible.has((u[l](d)??u.deletedItems[d])[f])}static is(u){return u.set!==void 0}constructor(u){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new lt(this),this[f].indexes={},u&&u.forEach(d=>this.add(d)),Object.defineProperty(this,p,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(u){if(this.has(u))return!1;const d=this.$refId++;u[f]!==void 0&&u[f].setParent(this,this[f].root,d);const _=this[f].indexes[d]?.op??t.OPERATION.ADD;return this[f].indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,u),this[f].change(d,_),d}entries(){return this.$items.entries()}delete(u){const d=this.$items.entries();let _,E;for(;(E=d.next())&&!E.done;)if(u===E.value[1]){_=E.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[f].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const u=this[f];u.discard(!0),u.indexes={},this.$indexes.clear(),this.$items.clear(),u.operation(t.OPERATION.CLEAR)}has(u){const d=this.$items.values();let _=!1,E;for(;(E=d.next())&&!E.done;)if(u===E.value){_=!0;break}return _}forEach(u){this.$items.forEach((d,_,E)=>u(d,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(u,d){this.$indexes.set(u,d)}getIndex(u){return this.$indexes.get(u)}[l](u){return this.$items.get(this.$indexes.get(u))}[h](u){const d=this.$indexes.get(u);this.$items.delete(d),this.$indexes.delete(u)}[m](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const u=[];return this.forEach((d,_)=>{u.push(typeof d.toJSON=="function"?d.toJSON():d)}),u}clone(u){let d;return u?d=Object.assign(new xs,this):(d=new xs,this.forEach(_=>{_[f]?d.add(_.clone()):d.add(_)})),d}};xs[ae]=Nn,xs[ce]=Nr;let Y=xs;qe("set",{constructor:Y});const be=-1;function $e(b){return st.register(b),b}function et(b=be){return function(u,d){const _=u.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null));Re.setTag(j,d,b)}}function ze(b,u){return function(d,_){const E=d.constructor;if(!b)throw new Error(`${E.name}: @type() reference provided for "${_}" is undefined. Make sure you don't have any circular dependencies.`);b=G(b),st.register(E);const j=Object.getPrototypeOf(E)[Symbol.metadata],me=Re.initialize(E);let re=me[_];if(me[re]!==void 0){if(me[re].deprecated)return;if(me[re].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${_}' definition on '${E.name}'.
Check @type() annotation`)}catch(ue){const pe=ue.stack.split(`
`)[4].trim();throw new Error(`${ue.message} ${pe}`)}}else re=me[v]??(j&&j[v])??-1,re++;if(u&&u.manual)Re.addField(me,re,_,b,{enumerable:!0,configurable:!0,writable:!0});else{const ue=typeof Object.keys(b)[0]=="string"&&Ke(Object.keys(b)[0]),pe=ue?Object.values(b)[0]:b;Re.addField(me,re,_,b,ct(`_${_}`,re,pe,ue))}}}function ct(b,u,d,_){return{get:function(){return this[b]},set:function(E){const O=this[b]??void 0;if(E!==O){if(E!=null){_?(_.constructor===Vn&&!(E instanceof Vn)&&(E=new Vn(...E)),_.constructor===ri&&!(E instanceof ri)&&(E=new ri(E)),E[p]=d):typeof d!="string"?Fi(E,d,this,b.substring(1)):ba(E,d,this,b.substring(1));const j=this[f];O!==void 0&&O[f]?(j.root?.remove(O[f]),this.constructor[s](j,u,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](j,u,t.OPERATION.ADD),E[f]?.setParent(this,j.root,u)}else O!==void 0&&this[f].delete(u);this[b]=E}},enumerable:!0,configurable:!0}}function ut(b=!0){return function(u,d){const _=u.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null)),me=j[d];j[me].deprecated=!0,b&&(j[y]??={},j[y][d]={get:function(){throw new Error(`${d} is deprecated.`)},set:function(re){},enumerable:!1,configurable:!0}),Object.defineProperty(j,me,{value:j[me],enumerable:!1,configurable:!0})}}function ot(b,u,d){for(let _ in u)ze(u[_],d)(b.prototype,_);return b}function _t(b,u,d=Xe){const _={},E={},O={},j={};for(let pe in b){const le=b[pe];typeof le=="object"?(le.view!==void 0&&(j[pe]=typeof le.view=="boolean"?be:le.view),_[pe]=G(le),Object.prototype.hasOwnProperty.call(le,"default")?O[pe]=le.default:Array.isArray(le)||le.array!==void 0?O[pe]=new Vn:le.map!==void 0?O[pe]=new ri:le.collection!==void 0?O[pe]=new X:le.set!==void 0?O[pe]=new Y:le.type!==void 0&&Xe.is(le.type)&&(!le.type.prototype.initialize||le.type.prototype.initialize.length===0)&&(O[pe]=new le.type)):typeof le=="function"?Xe.is(le)?((!le.prototype.initialize||le.prototype.initialize.length===0)&&(O[pe]=new le),_[pe]=G(le)):E[pe]=le:_[pe]=G(le)}const me=()=>{const pe={};for(const le in O){const Ye=O[le];Ye&&typeof Ye.clone=="function"?pe[le]=Ye.clone():pe[le]=Ye}return pe},re=pe=>{const le=Object.keys(_),Ye={};for(const Ve in pe)le.includes(Ve)||(Ye[Ve]=pe[Ve]);return Ye},ue=Re.setFields(class extends d{constructor(...pe){E.initialize&&typeof E.initialize=="function"?(super(Object.assign({},me(),re(pe[0]||{}))),new.target===ue&&E.initialize.apply(this,pe)):super(Object.assign({},me(),pe[0]||{}))}},_);ue._getDefaultValues=me,Object.assign(ue.prototype,E);for(let pe in j)et(j[pe])(ue.prototype,pe);return u&&Object.defineProperty(ue,"name",{value:u}),ue.extends=(pe,le)=>_t(pe,le,ue),ue}function Mt(b){return new Array(b).fill(0).map((u,d)=>d===b-1?"└─ ":"   ").join("")}function Ht(b){const u=b[f].root,d={ops:{},refs:[]};let _=u.changes.next;for(;_;){const E=_.changeTree;if(E===void 0){_=_.next;continue}const O=E.indexedOperations;d.refs.push(`refId#${E.refId}`);for(const j in O){const me=O[j],re=t.OPERATION[me];d.ops[re]||(d.ops[re]=0),d.ops[t.OPERATION[me]]++}_=_.next}return d}var Pt,At;const ys=class ys{static initialize(u){Object.defineProperty(u,f,{value:new lt(u),enumerable:!1,writable:!0}),Object.defineProperties(u,u.constructor[Symbol.metadata]?.[y]||{})}static is(u){return typeof u[Symbol.metadata]=="object"}static[(Pt=o,At=a,s)](u,d,_=t.OPERATION.ADD){u.change(d,_)}static[c](u,d,_){const O=u.constructor[Symbol.metadata][d]?.tag;if(_===void 0)return O===void 0;if(O===void 0)return!0;if(O===be)return _.isChangeTreeVisible(u[f]);{const j=_.tags?.get(u[f]);return j&&j.has(O)}}constructor(u){ys.initialize(this),u&&Object.assign(this,u)}assign(u){return Object.assign(this,u),this}setDirty(u,d){const _=this.constructor[Symbol.metadata];this[f].change(_[_[u]].index,d)}clone(){const u=Object.create(this.constructor.prototype);ys.initialize(u);const d=this.constructor[Symbol.metadata];for(const _ in d){const E=d[_].name;typeof this[E]=="object"&&typeof this[E]?.clone=="function"?u[E]=this[E].clone():u[E]=this[E]}return u}toJSON(){const u={},d=this.constructor[Symbol.metadata];for(const _ in d){const E=d[_],O=E.name;!E.deprecated&&this[O]!==null&&typeof this[O]<"u"&&(u[O]=typeof this[O].toJSON=="function"?this[O].toJSON():this[O])}return u}discardAllChanges(){this[f].discardAll()}[l](u){const d=this.constructor[Symbol.metadata];return this[d[u].name]}[h](u){const d=this.constructor[Symbol.metadata];this[d[u].name]=void 0}static debugRefIds(u,d=!1,_=0,E,O=""){const j=d?` - ${JSON.stringify(u.toJSON())}`:"",me=u[f],re=E?E.root.refIds.get(u):me.refId,ue=E?E.root:me.root,pe=ue?.refCount?.[re]>1?` [×${ue.refCount[re]}]`:"";let le=`${Mt(_)}${O}${u.constructor.name} (refId: ${re})${pe}${j}
`;return me.forEachChild((Ye,Ve)=>{let Le=Ve;typeof Ve=="number"&&u.$indexes&&(Le=u.$indexes.get(Ve)??Ve);const Pe=u.forEach!==void 0&&Le!==void 0?`["${Le}"]: `:"";le+=this.debugRefIds(Ye.ref,d,_+1,E,Pe)}),le}static debugRefIdEncodingOrder(u,d="allChanges"){let _=[],E=u[f].root[d].next;for(;E;)E.changeTree&&_.push(E.changeTree.refId),E=E.next;return _}static debugRefIdsFromDecoder(u){return this.debugRefIds(u.state,!1,0,u)}static debugChanges(u,d=!1){const _=u[f],E=d?_.allChanges:_.changes,O=d?"allChanges":"changes";let j=`${u.constructor.name} (${_.refId}) -> .${O}:
`;function me(re){re.operations.filter(ue=>ue).forEach(ue=>{const pe=_.indexedOperations[ue];j+=`- [${ue}]: ${t.OPERATION[pe]} (${JSON.stringify(_.getValue(Number(ue),d))})
`})}return me(E),!d&&_.filteredChanges&&_.filteredChanges.operations.filter(re=>re).length>0&&(j+=`${u.constructor.name} (${_.refId}) -> .filteredChanges:
`,me(_.filteredChanges)),d&&_.allFilteredChanges&&_.allFilteredChanges.operations.filter(re=>re).length>0&&(j+=`${u.constructor.name} (${_.refId}) -> .allFilteredChanges:
`,me(_.allFilteredChanges)),j}static debugChangesDeep(u,d="changes"){let _="";const E=u[f],O=E.root,j=new Map,me=[];let re=0;for(const[pe,le]of Object.entries(O[d])){const Ye=O.changeTrees[pe];if(!Ye)continue;let Ve=!1,Le=[],Pe=Ye.parent?.[f];if(Ye===E)Ve=!0;else for(;Pe!==void 0;){if(Le.push(Pe),Pe.ref===u){Ve=!0;break}Pe=Pe.parent?.[f]}Ve&&(me.push(Ye.refId),re+=Object.keys(le).length,j.set(Ye,Le.reverse()))}_+=`---
`,_+=`root refId: ${E.refId}
`,_+=`Total instances: ${me.length} (refIds: ${me.join(", ")})
`,_+=`Total changes: ${re}
`,_+=`---
`;const ue=new WeakSet;for(const[pe,le]of j.entries()){le.forEach((Ze,Xt)=>{ue.has(Ze)||(_+=`${Mt(Xt)}${Ze.ref.constructor.name} (refId: ${Ze.refId})
`,ue.add(Ze))});const Ye=pe.indexedOperations,Ve=le.length,Le=Mt(Ve),Pe=Ve>0?`(${pe.parentIndex}) `:"";_+=`${Le}${Pe}${pe.ref.constructor.name} (refId: ${pe.refId}) - changes: ${Object.keys(Ye).length}
`;for(const Ze in Ye){const Xt=Ye[Ze];_+=`${Mt(Ve+1)}${t.OPERATION[Xt]}: ${Ze}
`}}return`${_}`}};ys[Pt]=Et,ys[At]=_s;let Xe=ys;function Tt(b,u,d,_){var E=arguments.length,O=E<3?u:_,j;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")O=Reflect.decorate(b,u,d,_);else for(var me=b.length-1;me>=0;me--)(j=b[me])&&(O=(E<3?j(O):E>3?j(u,d,O):j(u,d))||O);return E>3&&O&&Object.defineProperty(u,d,O),O}typeof SuppressedError=="function"&&SuppressedError;class St{constructor(u){this.types=u,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Ae(),this.allFilteredChanges=Ae(),this.changes=Ae(),this.filteredChanges=Ae()}getNextUniqueId(){return this.nextUniqueId++}add(u){u.refId===void 0&&(u.refId=this.getNextUniqueId());const d=this.changeTrees[u.refId]===void 0;d&&(this.changeTrees[u.refId]=u);const _=this.refCount[u.refId];if(_===0){const E=u.allChanges.operations;let O=E.length;for(;O--;)u.indexedOperations[E[O]]=t.OPERATION.ADD,xe(u.changes,O)}return this.refCount[u.refId]=(_||0)+1,d}remove(u){const d=this.refCount[u.refId]-1;return d<=0?(u.root=void 0,delete this.changeTrees[u.refId],this.removeChangeFromChangeSet("allChanges",u),this.removeChangeFromChangeSet("changes",u),u.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",u),this.removeChangeFromChangeSet("filteredChanges",u)),this.refCount[u.refId]=0,u.forEachChild((_,E)=>{_.removeParent(u.ref)&&(_.parentChain===void 0||_.parentChain&&this.refCount[_.refId]>0?this.remove(_):_.parentChain&&this.moveNextToParent(_))})):(this.refCount[u.refId]=d,this.recursivelyMoveNextToParent(u)),d}recursivelyMoveNextToParent(u){this.moveNextToParent(u),u.forEachChild((d,_)=>this.recursivelyMoveNextToParent(d))}moveNextToParent(u){u.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",u),this.moveNextToParentInChangeTreeList("allFilteredChanges",u)):(this.moveNextToParentInChangeTreeList("changes",u),this.moveNextToParentInChangeTreeList("allChanges",u))}moveNextToParentInChangeTreeList(u,d){const _=this[u],E=d[u].queueRootNode;if(!E)return;const O=d.parent;if(!O||!O[f])return;const j=O[f][u]?.queueRootNode;if(!j||j===E)return;const me=j.position;E.position>me||(E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,E.prev=j,E.next=j.next,j.next?j.next.prev=E:_.tail=E,j.next=E,this.updatePositionsAfterMove(_,E,me+1))}enqueueChangeTree(u,d,_=u[d].queueRootNode){_||(u[d].queueRootNode=this.addToChangeTreeList(this[d],u))}addToChangeTreeList(u,d){const _={changeTree:d,next:void 0,prev:void 0,position:u.tail?u.tail.position+1:0};return u.next?(_.prev=u.tail,u.tail.next=_,u.tail=_):(u.next=_,u.tail=_),_}updatePositionsAfterRemoval(u,d){let _=u.next,E=0;for(;_;)E>=d&&(_.position=E),_=_.next,E++}updatePositionsAfterMove(u,d,_){let E=u.next,O=0;for(;E;)E.position=O,E=E.next,O++}removeChangeFromChangeSet(u,d){const _=this[u],E=d[u].queueRootNode;if(E&&E.changeTree===d){const O=E.position;return E.prev?E.prev.next=E.next:_.next=E.next,E.next?E.next.prev=E.prev:_.tail=E.prev,this.updatePositionsAfterRemoval(_,O),d[u].queueRootNode=void 0,!0}return!1}}const Ca=class Ca{constructor(u){this.sharedBuffer=Buffer.allocUnsafe(Ca.BUFFER_SIZE),this.context=st.cache(u.constructor),this.root=new St(this.context),this.setState(u)}setState(u){this.state=u,this.state[f].setRoot(this.root)}encode(u={offset:0},d,_=this.sharedBuffer,E="changes",O=E==="allChanges",j=u.offset){const me=d!==void 0,re=this.state[f];let ue=this.root[E];for(;ue=ue.next;){const pe=ue.changeTree;if(me){if(!d.isChangeTreeVisible(pe)){d.invisible.add(pe);continue}d.invisible.delete(pe)}const le=pe[E],Ye=pe.ref,Ve=le.operations.length;if(Ve===0)continue;const Le=Ye.constructor,Pe=Le[o],Ze=Le[c],Xt=Le[Symbol.metadata];(me||u.offset>j||pe!==re)&&(_[u.offset++]=255,Qe.number(_,pe.refId,u));for(let qt=0;qt<Ve;qt++){const Hn=le.operations[qt];if(Hn<0){_[u.offset++]=Math.abs(Hn)&255;continue}const Jn=O?t.OPERATION.ADD:pe.indexedOperations[Hn];Hn===void 0||Jn===void 0||Ze&&!Ze(Ye,Hn,d)||Pe(this,_,pe,Hn,Jn,u,O,me,Xt)}}if(u.offset>_.byteLength){const pe=Math.ceil(u.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),_=Buffer.alloc(pe,_),_===this.sharedBuffer&&(this.sharedBuffer=_),this.encode({offset:j},d,_,E,O)}else return _.subarray(0,u.offset)}encodeAll(u={offset:0},d=this.sharedBuffer){return this.encode(u,void 0,d,"allChanges",!0)}encodeAllView(u,d,_,E=this.sharedBuffer){const O=_.offset;return this.encode(_,u,E,"allFilteredChanges",!0,O),Buffer.concat([E.subarray(0,d),E.subarray(O,_.offset)])}encodeView(u,d,_,E=this.sharedBuffer){const O=_.offset;for(const[j,me]of u.changes){const re=this.root.changeTrees[j];if(re===void 0){u.changes.delete(j);continue}const ue=Object.keys(me);if(ue.length===0)continue;const le=re.ref.constructor,Ye=le[o],Ve=le[Symbol.metadata];E[_.offset++]=255,Qe.number(E,re.refId,_);for(let Le=0,Pe=ue.length;Le<Pe;Le++){const Ze=Number(ue[Le]),qt=re.ref[l](Ze)!==void 0&&me[Ze]||t.OPERATION.DELETE;Ye(this,E,re,Ze,qt,_,!1,!0,Ve)}}return u.changes.clear(),this.encode(_,u,E,"filteredChanges",!1,O),Buffer.concat([E.subarray(0,d),E.subarray(O,_.offset)])}discardChanges(){let u=this.root.changes.next;for(;u;)u.changeTree.endEncode("changes"),u=u.next;for(this.root.changes=Ae(),u=this.root.filteredChanges.next;u;)u.changeTree.endEncode("filteredChanges"),u=u.next;this.root.filteredChanges=Ae()}tryEncodeTypeId(u,d,_,E){const O=this.context.getTypeId(d),j=this.context.getTypeId(_);if(j===void 0){console.warn(`@colyseus/schema WARNING: Class "${_.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}O!==j&&(u[E.offset++]=213,Qe.number(u,j,E))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};Ca.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let fn=Ca;function Bi(b,u){if(u===-1||u>=b.length)return!1;const d=b.length-1;for(let _=u;_<d;_++)b[_]=b[_+1];return b.length=d,!0}class En extends Error{constructor(u){super(u),this.name="DecodingWarning"}}class Fr{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(u,d,_=!0){this.refs.set(u,d),this.refIds.set(d,u),_&&(this.refCount[u]=(this.refCount[u]||0)+1),this.deletedRefs.has(u)&&this.deletedRefs.delete(u)}removeRef(u){const d=this.refCount[u];if(d===void 0){try{throw new En("trying to remove refId that doesn't exist: "+u)}catch(_){console.warn(_)}return}if(d===0){try{const _=this.refs.get(u);throw new En(`trying to remove refId '${u}' with 0 refCount (${_.constructor.name}: ${JSON.stringify(_)})`)}catch(_){console.warn(_)}return}(this.refCount[u]=d-1)<=0&&this.deletedRefs.add(u)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(u=>{if(this.refCount[u]>0)return;const d=this.refs.get(u);if(d.constructor[Symbol.metadata]!==void 0){const _=d.constructor[Symbol.metadata];for(const E in _){const O=_[E].name,j=typeof d[O]=="object"&&this.refIds.get(d[O]);j&&!this.deletedRefs.has(j)&&this.removeRef(j)}}else typeof d[p]=="function"&&Array.from(d.values()).forEach(_=>{const E=this.refIds.get(_);this.deletedRefs.has(E)||this.removeRef(E)});this.refs.delete(u),delete this.refCount[u],delete this.callbacks[u]}),this.deletedRefs.clear()}addCallback(u,d,_){if(u===void 0){const E=typeof d=="number"?t.OPERATION[d]:d;throw new Error(`Can't addCallback on '${E}' (refId is undefined)`)}return this.callbacks[u]||(this.callbacks[u]={}),this.callbacks[u][d]||(this.callbacks[u][d]=[]),this.callbacks[u][d].push(_),()=>this.removeCallback(u,d,_)}removeCallback(u,d,_){const E=this.callbacks?.[u]?.[d]?.indexOf(_);E!==void 0&&E!==-1&&Bi(this.callbacks[u][d],E)}}class Ot{constructor(u,d){this.currentRefId=0,this.setState(u),this.context=d||new st(u.constructor)}setState(u){this.state=u,this.root=new Fr,this.root.addRef(0,u)}decode(u,d={offset:0},_=this.state){const E=[],O=this.root,j=u.byteLength;let me=_.constructor[a];for(this.currentRefId=0;d.offset<j;){if(u[d.offset]==255){d.offset++,_[x]?.();const ue=Oe.number(u,d),pe=O.refs.get(ue);pe?(_=pe,me=_.constructor[a],this.currentRefId=ue):(console.error(`"refId" not found: ${ue}`,{previousRef:_,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(u,d,j));continue}if(me(this,u,d,_,E)===mo){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(u,d,j);continue}}return _[x]?.(),this.triggerChanges?.(E),O.garbageCollectDeletedRefs(),E}skipCurrentStructure(u,d,_){const E={offset:d.offset};for(;d.offset<_&&!(u[d.offset]===255&&(E.offset=d.offset+1,this.root.refs.has(Oe.number(u,E))));)d.offset++}getInstanceType(u,d,_){let E;if(u[d.offset]===213){d.offset++;const O=Oe.number(u,d);E=this.context.get(O)}return E||_}createInstanceOfType(u){return new u}removeChildRefs(u,d){const _=typeof u[p]!="string",E=this.root.refIds.get(u);u.forEach((O,j)=>{d.push({ref:u,refId:E,op:t.OPERATION.DELETE,field:j,value:void 0,previousValue:O}),_&&this.root.removeRef(this.root.refIds.get(O))})}}class rn extends Xe{}Tt([ze("string")],rn.prototype,"name",void 0),Tt([ze("string")],rn.prototype,"type",void 0),Tt([ze("number")],rn.prototype,"referencedType",void 0);class sn extends Xe{constructor(){super(...arguments),this.fields=new Vn}}Tt([ze("number")],sn.prototype,"id",void 0),Tt([ze("number")],sn.prototype,"extendsId",void 0),Tt([ze([rn])],sn.prototype,"fields",void 0);class $t extends Xe{constructor(){super(...arguments),this.types=new Vn}static encode(u,d={offset:0}){const _=u.context,E=new $t,O=new fn(E),j=_.schemas.get(u.state.constructor);j>0&&(E.rootType=j);const me=new Set,re={},ue=le=>{if(le.extendsId===void 0||me.has(le.extendsId)){me.add(le.id),E.types.push(le);const Ye=re[le.id];Ye!==void 0&&(delete re[le.id],Ye.forEach(Ve=>ue(Ve)))}else re[le.extendsId]===void 0&&(re[le.extendsId]=[]),re[le.extendsId].push(le)};_.schemas.forEach((le,Ye)=>{const Ve=new sn;Ve.id=Number(le);const Le=Object.getPrototypeOf(Ye);Le!==Xe&&(Ve.extendsId=_.schemas.get(Le));const Pe=Ye[Symbol.metadata];if(Pe!==Le[Symbol.metadata])for(const Ze in Pe){const Xt=Number(Ze),qt=Pe[Xt].name;if(!Object.prototype.hasOwnProperty.call(Pe,qt))continue;const Hn=new rn;Hn.name=qt;let Jn;const pr=Pe[Xt];if(typeof pr.type=="string")Jn=pr.type;else{let Pa;Xe.is(pr.type)?(Jn="ref",Pa=pr.type):(Jn=Object.keys(pr.type)[0],typeof pr.type[Jn]=="string"?Jn+=":"+pr.type[Jn]:Pa=pr.type[Jn]),Hn.referencedType=Pa?_.getTypeId(Pa):-1}Hn.type=Jn,Ve.fields.push(Hn)}ue(Ve)});for(const le in re)re[le].forEach(Ye=>E.types.push(Ye));return O.encodeAll(d).slice(0,d.offset)}static decode(u,d){const _=new $t;new Ot(_).decode(u,d);const O=new st;_.types.forEach(re=>{const ue=O.get(re.extendsId)??Xe,pe=class extends ue{};st.register(pe),O.add(pe,re.id)},{});const j=(re,ue,pe)=>{ue.fields.forEach((le,Ye)=>{const Ve=pe+Ye;if(le.referencedType!==void 0){let Le=le.type,Pe=O.get(le.referencedType);if(!Pe){const Ze=le.type.split(":");Le=Ze[0],Pe=Ze[1]}Le==="ref"?Re.addField(re,Ve,le.name,Pe):Re.addField(re,Ve,le.name,{[Le]:Pe})}else Re.addField(re,Ve,le.name,le.type)})};_.types.forEach(re=>{const ue=O.get(re.id),pe=Re.initialize(ue),le=[];let Ye=re;do le.push(Ye),Ye=_.types.find(Le=>Le.id===Ye.extendsId);while(Ye);let Ve=0;le.reverse().forEach(Le=>{j(pe,Le,Ve),Ve+=Le.fields.length})});const me=new(O.get(_.rootType||0));return new Ot(me,O)}}Tt([ze([sn])],$t.prototype,"types",void 0),Tt([ze("number")],$t.prototype,"rootType",void 0);function Mn(b){const u=b.root,d=u.callbacks,_=new WeakMap;let E;b.triggerChanges=function(me){const re=new Set;for(let ue=0,pe=me.length;ue<pe;ue++){const le=me[ue],Ye=le.refId,Ve=le.ref,Le=d[Ye];if(Le){if((le.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&le.previousValue instanceof Xe){const Pe=d[u.refIds.get(le.previousValue)]?.[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Ve instanceof Xe){if(!re.has(Ye)){const Pe=Le?.[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze]()}if(Le.hasOwnProperty(le.field)){const Pe=Le[le.field];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](le.value,le.previousValue)}}else{if((le.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(le.previousValue!==void 0){const Pe=Le[t.OPERATION.DELETE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](le.previousValue,le.dynamicIndex??le.field)}if((le.op&t.OPERATION.ADD)===t.OPERATION.ADD){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](le.value,le.dynamicIndex??le.field)}}else if((le.op&t.OPERATION.ADD)===t.OPERATION.ADD&&le.previousValue!==le.value){const Pe=Le[t.OPERATION.ADD];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](le.value,le.dynamicIndex??le.field)}if(le.value!==le.previousValue&&(le.value!==void 0||le.previousValue!==void 0)){const Pe=Le[t.OPERATION.REPLACE];for(let Ze=Pe?.length-1;Ze>=0;Ze--)Pe[Ze](le.value,le.dynamicIndex??le.field)}}re.add(Ye)}}};function O(me,re){let ue=re.instance?.constructor[Symbol.metadata]||me,pe=re.instance&&typeof re.instance.forEach=="function"||me&&typeof me[Symbol.metadata]>"u";if(ue&&!pe){const le=function(Ye,Ve,Le,Pe){return Pe&&re.instance[Ve]!==void 0&&!_.has(E)&&Le(re.instance[Ve],void 0),u.addCallback(u.refIds.get(Ye),Ve,Le)};return new Proxy({listen:function(Ve,Le,Pe=!0){if(re.instance)return le(re.instance,Ve,Le,Pe);{let Ze=()=>{};return re.onInstanceAvailable((Xt,qt)=>{Ze=le(Xt,Ve,Le,Pe&&qt&&!_.has(E))}),()=>Ze()}},onChange:function(Ve){return u.addCallback(u.refIds.get(re.instance),t.OPERATION.REPLACE,Ve)},bindTo:function(Ve,Le){return Le||(Le=Object.keys(ue).map(Pe=>ue[Pe].name)),u.addCallback(u.refIds.get(re.instance),t.OPERATION.REPLACE,()=>{Le.forEach(Pe=>Ve[Pe]=re.instance[Pe])})}},{get(Ye,Ve){const Le=ue[ue[Ve]];if(Le){const Pe=re.instance?.[Ve],Ze=(Xt=>{const qt=j(re.instance).listen(Ve,(Hn,Jn)=>{Xt(Hn,!1),qt?.()},!1);u.refIds.get(Pe)!==void 0&&Xt(Pe,!0)});return O(Le.type,{instance:u.refIds.get(Pe)&&Pe,parentInstance:re.instance,onInstanceAvailable:Ze})}else return Ye[Ve]},has(Ye,Ve){return ue[Ve]!==void 0},set(Ye,Ve,Le){throw new Error("not allowed")},deleteProperty(Ye,Ve){throw new Error("not allowed")}})}else{const le=function(Le,Pe,Ze){return Ze&&Le.forEach((Xt,qt)=>Pe(Xt,qt)),u.addCallback(u.refIds.get(Le),t.OPERATION.ADD,(Xt,qt)=>{_.set(Pe,!0),E=Pe,Pe(Xt,qt),_.delete(Pe),E=void 0})},Ye=function(Le,Pe){return u.addCallback(u.refIds.get(Le),t.OPERATION.DELETE,Pe)},Ve=function(Le,Pe){return u.addCallback(u.refIds.get(Le),t.OPERATION.REPLACE,Pe)};return new Proxy({onAdd:function(Le,Pe=!0){if(re.instance)return le(re.instance,Le,Pe&&!_.has(E));if(re.onInstanceAvailable){let Ze=()=>{};return re.onInstanceAvailable((Xt,qt)=>{Ze=le(Xt,Le,Pe&&qt&&!_.has(E))}),()=>Ze()}},onRemove:function(Le){if(re.instance)return Ye(re.instance,Le);if(re.onInstanceAvailable){let Pe=()=>{};return re.onInstanceAvailable(Ze=>{Pe=Ye(Ze,Le)}),()=>Pe()}},onChange:function(Le){if(re.instance)return Ve(re.instance,Le);if(re.onInstanceAvailable){let Pe=()=>{};return re.onInstanceAvailable(Ze=>{Pe=Ve(Ze,Le)}),()=>Pe()}}},{get(Le,Pe){if(!Le[Pe])throw new Error(`Can't access '${Pe}' through callback proxy. access the instance directly.`);return Le[Pe]},has(Le,Pe){return Le[Pe]!==void 0},set(Le,Pe,Ze){throw new Error("not allowed")},deleteProperty(Le,Pe){throw new Error("not allowed")}})}}function j(me){return O(void 0,{instance:me})}return j}function vo(b,u){b.triggerChanges=u}class zi{constructor(u=!1){this.iterable=u,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,u&&(this.items=[])}add(u,d=be,_=!0){const E=u?.[f],O=E.parent;if(E){if(!O&&E.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${E.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",u),!1;const j=u.constructor[Symbol.metadata];this.visible.add(E),this.iterable&&_&&this.items.push(u),_&&O&&this.addParentOf(E,d);let me=this.changes.get(E.refId);me===void 0&&(me={},this.changes.set(E.refId,me));let re=!1;if(E.forEachChild((ue,pe)=>{j&&j[pe].tag!==void 0&&j[pe].tag!==d||this.add(ue.ref,d,!1)&&(re=!0)}),d!==be){this.tags||(this.tags=new WeakMap);let ue;this.tags.has(E)?ue=this.tags.get(E):(ue=new Set,this.tags.set(E,ue)),ue.add(d),j?.[A]?.[d]?.forEach(pe=>{E.getChange(pe)!==t.OPERATION.DELETE&&(me[pe]=t.OPERATION.ADD)})}else if(!E.isNew||re){const ue=E.filteredChanges!==void 0?E.allFilteredChanges:E.allChanges,pe=this.invisible.has(E);for(let le=0,Ye=ue.operations.length;le<Ye;le++){const Ve=ue.operations[le];if(Ve===void 0)continue;const Le=E.indexedOperations[Ve]??t.OPERATION.ADD,Pe=j?.[Ve].tag;Le!==t.OPERATION.DELETE&&(pe||Pe===void 0||Pe===d)&&(me[Ve]=Le,re=!0)}}return re}addParentOf(u,d){const _=u.parent[f],E=u.parentIndex;if(!this.visible.has(_)){this.visible.add(_);const O=_.parent?.[f];O&&O.filteredChanges!==void 0&&this.addParentOf(_,d)}if(_.getChange(E)!==t.OPERATION.DELETE){let O=this.changes.get(_.refId);O===void 0&&(O={},this.changes.set(_.refId,O)),this.tags||(this.tags=new WeakMap);let j;this.tags.has(_)?j=this.tags.get(_):(j=new Set,this.tags.set(_,j)),j.add(d),O[E]=t.OPERATION.ADD}}remove(u,d=be,_=!1){const E=u[f];if(!E)return console.warn("StateView#remove(), invalid object:",u),this;this.visible.delete(E),this.iterable&&!_&&Bi(this.items,this.items.indexOf(u));const j=E.ref.constructor[Symbol.metadata];let me=this.changes.get(E.refId);if(me===void 0&&(me={},this.changes.set(E.refId,me)),d===be){const re=E.parent;if(re&&!Re.isValidInstance(re)&&E.isFiltered){const ue=re[f];let pe=this.changes.get(ue.refId);pe===void 0?(pe={},this.changes.set(ue.refId,pe)):pe[E.parentIndex]===t.OPERATION.ADD&&this.changes.delete(E.refId),pe[E.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(E)}else j?.[C]?.forEach(ue=>me[ue]=t.OPERATION.DELETE)}else j?.[A][d].forEach(re=>me[re]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(E)){const re=this.tags.get(E);d===void 0?this.tags.delete(E):(re.delete(d),re.size===0&&this.tags.delete(E))}return this}has(u){return this.visible.has(u[f])}hasTag(u,d=be){return this.tags?.get(u[f])?.has(d)??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let u=0,d=this.items.length;u<d;u++)this.remove(this.items[u],be,!0);this.items.length=0}isChangeTreeVisible(u){let d=this.visible.has(u);return!d&&u.isVisibilitySharedWithParent&&this.visible.has(u.parent[f])&&(this.visible.add(u),d=!0),d}_recursiveDeleteVisibleChangeTree(u){u.forEachChild(d=>{this.visible.delete(d),this._recursiveDeleteVisibleChangeTree(d)})}}qe("map",{constructor:ri}),qe("array",{constructor:Vn}),qe("set",{constructor:Y}),qe("collection",{constructor:X}),t.$changes=f,t.$childType=p,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Vn,t.ChangeTree=lt,t.CollectionSchema=X,t.Decoder=Ot,t.Encoder=fn,t.MapSchema=ri,t.Metadata=Re,t.Reflection=$t,t.ReflectionField=rn,t.ReflectionType=sn,t.Schema=Xe,t.SetSchema=Y,t.StateView=zi,t.TypeContext=st,t.decode=Oe,t.decodeKeyValueOperation=Nr,t.decodeSchemaOperation=_s,t.defineCustomTypes=Be,t.defineTypes=ot,t.deprecated=ut,t.dumpChanges=Ht,t.encode=Qe,t.encodeArray=kn,t.encodeKeyValueOperation=Nn,t.encodeSchemaOperation=Et,t.entity=$e,t.getDecoderStateCallbacks=Mn,t.getRawChangesCallback=vo,t.registerType=qe,t.schema=_t,t.type=ze,t.view=et}))})(Ro,Ro.exports)),Ro.exports}var ed;function z_(){if(ed)return Al;ed=1;var n=Kc,e=Zf();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return Al.H3TransportTransport=t,Al}var Rl={},Cl,td;function k_(){return td||(td=1,Cl=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Cl}var nd;function V_(){if(nd)return Rl;nd=1;var n=k_();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Rl.WebSocketTransport=t,Rl}var id;function H_(){if(id)return wl;id=1;var n=z_(),e=V_();let t=class{constructor(r){this.events={},r==="h3"?this.transport=new n.H3TransportTransport(this.events):this.transport=new e.WebSocketTransport(this.events)}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return wl.Connection=t,wl}var Pl={},rd;function Km(){return rd||(rd=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Pl)),Pl}var Da={},sd;function Jm(){if(sd)return Da;sd=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return Da.getSerializer=t,Da.registerSerializer=e,Da}var Il={},od;function Zm(){if(od)return Il;od=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Il.createNanoEvents=n,Il}var La={},ad;function G_(){if(ad)return La;ad=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return La.EventEmitter=n,La.createSignal=e,La}var Oa={},cd;function Qm(){if(cd)return Oa;cd=1;var n=Zf();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return Oa.SchemaSerializer=t,Oa.getStateCallbacks=e,Oa}var Ou;try{Ou=new TextDecoder}catch{}var We,Pi,q=0,Bt={},yt,Tr,Qn=0,wi=0,pn,nr,Rn=[],xt,ld={useRecords:!1,mapsAsObjects:!0};class eg{}const Qf=new eg;Qf.name="MessagePack 0xC1";var wr=!1,tg=2,W_;try{new Function("")}catch{tg=1/0}class Cr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(We)return ag(()=>(Rc(),this?this.unpack(e,t):Cr.prototype.unpack.call(ld,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Pi=t.end||e.length,q=t.start||0):(q=0,Pi=t>-1?t:e.length),wi=0,Tr=null,pn=null,We=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw We=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Cr){if(Bt=this,this.structures)return yt=this.structures,Na(t);(!yt||yt.length>0)&&(yt=[])}else Bt=ld,(!yt||yt.length>0)&&(yt=[]);return Na(t)}unpackMultiple(e,t){let i,r=0;try{wr=!0;let s=e.length,o=this?this.unpack(e,s):Qc.unpack(e,s);if(t){if(t(o,r,q)===!1)return;for(;q<s;)if(r=q,t(Na(),r,q)===!1)return}else{for(i=[o];q<s;)r=q,i.push(Na());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{wr=!1,Rc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function Na(n){try{if(!Bt.trusted&&!wr){let t=yt.sharedLength||0;t<yt.length&&(yt.length=t)}let e;if(Bt.randomAccessStructure&&We[q]<64&&We[q]>=32&&W_||(e=jt()),pn&&(q=pn.postBundlePosition,pn=null),wr&&(yt.restoreStructures=null),q==Pi)yt&&yt.restoreStructures&&ud(),yt=null,We=null,nr&&(nr=null);else{if(q>Pi)throw new Error("Unexpected end of MessagePack data");if(!wr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw yt&&yt.restoreStructures&&ud(),Rc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||q>Pi)&&(e.incomplete=!0),e}}function ud(){for(let n in yt.restoreStructures)yt[n]=yt.restoreStructures[n];yt.restoreStructures=null}function jt(){let n=We[q++];if(n<160)if(n<128){if(n<64)return n;{let e=yt[n&63]||Bt.getStructures&&ng()[n&63];return e?(e.read||(e.read=eh(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Bt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=rg();i==="__proto__"&&(i="__proto_"),e[i]=jt()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(jt(),jt());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=jt();return Bt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(wi>=q)return Tr.slice(q-Qn,(q+=e)-Qn);if(wi==0&&Pi<140){let t=e<16?th(e):ig(e);if(t!=null)return t}return Nu(e)}else{let e;switch(n){case 192:return null;case 193:return pn?(e=jt(),e>0?pn[1].slice(pn.position1,pn.position1+=e):pn[0].slice(pn.position0,pn.position0-=e)):Qf;case 194:return!1;case 195:return!0;case 196:if(e=We[q++],e===void 0)throw new Error("Unexpected end of buffer");return Dl(e);case 197:return e=xt.getUint16(q),q+=2,Dl(e);case 198:return e=xt.getUint32(q),q+=4,Dl(e);case 199:return Br(We[q++]);case 200:return e=xt.getUint16(q),q+=2,Br(e);case 201:return e=xt.getUint32(q),q+=4,Br(e);case 202:if(e=xt.getFloat32(q),Bt.useFloat32>2){let t=Zc[(We[q]&127)<<1|We[q+1]>>7];return q+=4,(t*e+(e>0?.5:-.5)>>0)/t}return q+=4,e;case 203:return e=xt.getFloat64(q),q+=8,e;case 204:return We[q++];case 205:return e=xt.getUint16(q),q+=2,e;case 206:return e=xt.getUint32(q),q+=4,e;case 207:return Bt.int64AsType==="number"?(e=xt.getUint32(q)*4294967296,e+=xt.getUint32(q+4)):Bt.int64AsType==="string"?e=xt.getBigUint64(q).toString():Bt.int64AsType==="auto"?(e=xt.getBigUint64(q),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(q),q+=8,e;case 208:return xt.getInt8(q++);case 209:return e=xt.getInt16(q),q+=2,e;case 210:return e=xt.getInt32(q),q+=4,e;case 211:return Bt.int64AsType==="number"?(e=xt.getInt32(q)*4294967296,e+=xt.getUint32(q+4)):Bt.int64AsType==="string"?e=xt.getBigInt64(q).toString():Bt.int64AsType==="auto"?(e=xt.getBigInt64(q),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(q),q+=8,e;case 212:if(e=We[q++],e==114)return gd(We[q++]&63);{let t=Rn[e];if(t)return t.read?(q++,t.read(jt())):t.noBuffer?(q++,t()):t(We.subarray(q,++q));throw new Error("Unknown extension "+e)}case 213:return e=We[q],e==114?(q++,gd(We[q++]&63,We[q++])):Br(2);case 214:return Br(4);case 215:return Br(8);case 216:return Br(16);case 217:return e=We[q++],wi>=q?Tr.slice(q-Qn,(q+=e)-Qn):X_(e);case 218:return e=xt.getUint16(q),q+=2,wi>=q?Tr.slice(q-Qn,(q+=e)-Qn):q_(e);case 219:return e=xt.getUint32(q),q+=4,wi>=q?Tr.slice(q-Qn,(q+=e)-Qn):j_(e);case 220:return e=xt.getUint16(q),q+=2,hd(e);case 221:return e=xt.getUint32(q),q+=4,hd(e);case 222:return e=xt.getUint16(q),q+=2,dd(e);case 223:return e=xt.getUint32(q),q+=4,dd(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const $_=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function eh(n,e){function t(){if(t.count++>tg){let r=n.read=new Function("r","return function(){return "+(Bt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":$_.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(jt);return n.highByte===0&&(n.read=fd(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=jt()}return Bt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?fd(e,t):t}const fd=(n,e)=>function(){let t=We[q++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=yt[i]||ng()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=eh(r,n)),r.read()};function ng(){let n=ag(()=>(We=null,Bt.getStructures()));return yt=Bt._mergeStructures(n,yt)}var Nu=la,X_=la,q_=la,j_=la;let Y_=!1;function la(n){let e;if(n<16&&(e=th(n)))return e;if(n>64&&Ou)return Ou.decode(We.subarray(q,q+=n));const t=q+n,i=[];for(e="";q<t;){const r=We[q++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=We[q++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=We[q++]&63,o=We[q++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=We[q++]&63,o=We[q++]&63,a=We[q++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=dn.apply(String,i),i.length=0)}return i.length>0&&(e+=dn.apply(String,i)),e}function hd(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=jt();return Bt.freezeData?Object.freeze(e):e}function dd(n){if(Bt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=rg();i==="__proto__"&&(i="__proto_"),e[i]=jt()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(jt(),jt());return e}}var dn=String.fromCharCode;function ig(n){let e=q,t=new Array(n);for(let i=0;i<n;i++){const r=We[q++];if((r&128)>0){q=e;return}t[i]=r}return dn.apply(String,t)}function th(n){if(n<4)if(n<2){if(n===0)return"";{let e=We[q++];if((e&128)>1){q-=1;return}return dn(e)}}else{let e=We[q++],t=We[q++];if((e&128)>0||(t&128)>0){q-=2;return}if(n<3)return dn(e,t);let i=We[q++];if((i&128)>0){q-=3;return}return dn(e,t,i)}else{let e=We[q++],t=We[q++],i=We[q++],r=We[q++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){q-=4;return}if(n<6){if(n===4)return dn(e,t,i,r);{let s=We[q++];if((s&128)>0){q-=5;return}return dn(e,t,i,r,s)}}else if(n<8){let s=We[q++],o=We[q++];if((s&128)>0||(o&128)>0){q-=6;return}if(n<7)return dn(e,t,i,r,s,o);let a=We[q++];if((a&128)>0){q-=7;return}return dn(e,t,i,r,s,o,a)}else{let s=We[q++],o=We[q++],a=We[q++],c=We[q++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){q-=8;return}if(n<10){if(n===8)return dn(e,t,i,r,s,o,a,c);{let l=We[q++];if((l&128)>0){q-=9;return}return dn(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=We[q++],h=We[q++];if((l&128)>0||(h&128)>0){q-=10;return}if(n<11)return dn(e,t,i,r,s,o,a,c,l,h);let f=We[q++];if((f&128)>0){q-=11;return}return dn(e,t,i,r,s,o,a,c,l,h,f)}else{let l=We[q++],h=We[q++],f=We[q++],p=We[q++];if((l&128)>0||(h&128)>0||(f&128)>0||(p&128)>0){q-=12;return}if(n<14){if(n===12)return dn(e,t,i,r,s,o,a,c,l,h,f,p);{let m=We[q++];if((m&128)>0){q-=13;return}return dn(e,t,i,r,s,o,a,c,l,h,f,p,m)}}else{let m=We[q++],x=We[q++];if((m&128)>0||(x&128)>0){q-=14;return}if(n<15)return dn(e,t,i,r,s,o,a,c,l,h,f,p,m,x);let y=We[q++];if((y&128)>0){q-=15;return}return dn(e,t,i,r,s,o,a,c,l,h,f,p,m,x,y)}}}}}function pd(){let n=We[q++],e;if(n<192)e=n-160;else switch(n){case 217:e=We[q++];break;case 218:e=xt.getUint16(q),q+=2;break;case 219:e=xt.getUint32(q),q+=4;break;default:throw new Error("Expected string")}return la(e)}function Dl(n){return Bt.copyBuffers?Uint8Array.prototype.slice.call(We,q,q+=n):We.subarray(q,q+=n)}function Br(n){let e=We[q++];if(Rn[e]){let t;return Rn[e](We.subarray(q,t=q+=n),i=>{q=i;try{return jt()}finally{q=t}})}else throw new Error("Unknown extension type "+e)}var md=new Array(4096);function rg(){let n=We[q++];if(n>=160&&n<192){if(n=n-160,wi>=q)return Tr.slice(q-Qn,(q+=n)-Qn);if(!(wi==0&&Pi<180))return Nu(n)}else return q--,sg(jt());let e=(n<<5^(n>1?xt.getUint16(q):n>0?We[q]:0))&4095,t=md[e],i=q,r=q+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=We[i++],s!=t[o++]){i=1879048192;break}if(i===r)return q=i,t.string;r-=3,i=q}for(t=[],md[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=We[i++],t.push(s);let a=n<16?th(n):ig(n);return a!=null?t.string=a:t.string=Nu(n)}function sg(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Bt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const gd=(n,e)=>{let t=jt().map(sg),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=yt[n];return r&&(r.isShared||wr)&&((yt.restoreStructures||(yt.restoreStructures=[]))[n]=r),yt[n]=t,t.read=eh(t,i),t.read()};Rn[0]=()=>{};Rn[0].noBuffer=!0;Rn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let K_={Error,TypeError,ReferenceError};Rn[101]=()=>{let n=jt();return(K_[n[0]]||Error)(n[1],{cause:n[2]})};Rn[105]=n=>{if(Bt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(q-4);nr||(nr=new Map);let t=We[q],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};nr.set(e,r);let s=jt();return r.used?Object.assign(i,s):(r.target=s,s)};Rn[112]=n=>{if(Bt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(q-4),t=nr.get(e);return t.used=!0,t.target};Rn[115]=()=>new Set(jt());const og=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let J_=typeof globalThis=="object"?globalThis:window;Rn[116]=n=>{let e=n[0],t=og[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new J_[t](Uint8Array.prototype.slice.call(n,1).buffer)};Rn[120]=()=>{let n=jt();return new RegExp(n[0],n[1])};const Z_=[];Rn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=q;return q+=e-n.length,pn=Z_,pn=[pd(),pd()],pn.position0=0,pn.position1=0,pn.postBundlePosition=q,q=t,jt()};Rn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function ag(n){let e=Pi,t=q,i=Qn,r=wi,s=Tr,o=nr,a=pn,c=new Uint8Array(We.slice(0,Pi)),l=yt,h=yt.slice(0,yt.length),f=Bt,p=wr,m=n();return Pi=e,q=t,Qn=i,wi=r,Tr=s,nr=o,pn=a,We=c,wr=p,yt=l,yt.splice(0,yt.length,...h),Bt=f,xt=new DataView(We.buffer,We.byteOffset,We.byteLength),m}function Rc(){We=null,nr=null,yt=null}function Q_(n){n.unpack?Rn[n.type]=n.unpack:Rn[n.type]=n}const Zc=new Array(147);for(let n=0;n<256;n++)Zc[n]=+("1e"+Math.floor(45.15-n*.30103));const ev=Cr;var Qc=new Cr({useRecords:!1});const tv=Qc.unpack,nv=Qc.unpackMultiple,iv=Qc.unpack,cg={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let lg=new Float32Array(1),_d=new Uint8Array(lg.buffer,0,4);function rv(n){lg[0]=n;let e=Zc[(_d[3]&127)<<1|_d[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let dc;try{dc=new TextEncoder}catch{}let Cc,nh;const el=typeof Buffer<"u",Ua=el?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,ug=el?Buffer:Uint8Array,vd=el?4294967296:2144337920;let ee,xo,Nt,K=0,Cn,Gt=null,sv;const ov=21760,av=/[\u0080-\uFFFF]/,Ss=Symbol("record-id");class ua extends Cr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=ug.prototype.utf8Write?function(D,W){return ee.utf8Write(D,W,ee.byteLength-W)}:dc&&dc.encodeInto?function(D,W){return dc.encodeInto(D,ee.subarray(W)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let p=h>32||f+h>64,m=h+64,x=h+f+64;if(x>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],v=0,g=0;this.pack=this.encode=function(D,W){if(ee||(ee=new Ua(8192),Nt=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,8192)),K=0),Cn=ee.length-10,Cn-K<2048?(ee=new Ua(ee.length),Nt=ee.dataView||(ee.dataView=new DataView(ee.buffer,0,ee.length)),Cn=ee.length-10,K=0):K=K+7&2147483640,t=K,W&pg&&(K+=W&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof D!="string"?(Gt=[],Gt.size=1/0):Gt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let F=r.sharedLength||0;if(F>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let V=0;V<F;V++){let k=r[V];if(!k)continue;let Se,Ee=r.transitions;for(let Ce=0,Ne=k.length;Ce<Ne;Ce++){let ft=k[Ce];Se=Ee[ft],Se||(Se=Ee[ft]=Object.create(null)),Ee=Se}Ee[Ss]=V+64}this.lastNamedStructuresLength=F}c||(r.nextId=F+64)}i&&(i=!1);let $;try{a.randomAccessStructure&&D&&D.constructor&&D.constructor===Object?ye(D):T(D);let F=Gt;if(Gt&&Sd(t,T,0),s&&s.idsToInsert){let V=s.idsToInsert.sort((Ce,Ne)=>Ce.offset>Ne.offset?1:-1),k=V.length,Se=-1;for(;F&&k>0;){let Ce=V[--k].offset+t;Ce<F.stringsPosition+t&&Se===-1&&(Se=0),Ce>F.position+t?Se>=0&&(Se+=6):(Se>=0&&(Nt.setUint32(F.position+t,Nt.getUint32(F.position+t)+Se),Se=-1),F=F.previous,k++)}Se>=0&&F&&Nt.setUint32(F.position+t,Nt.getUint32(F.position+t)+Se),K+=V.length*6,K>Cn&&I(K),a.offset=K;let Ee=lv(ee.subarray(t,K),V);return s=null,Ee}return a.offset=K,W&hg?(ee.start=t,ee.end=K,ee):ee.subarray(t,K)}catch(F){throw $=F,F}finally{if(r&&(C(),i&&a.saveStructures)){let F=r.sharedLength||0,V=ee.subarray(t,K),k=fv(r,a);if(!$)return a.saveStructures(k,k.isCompatible)===!1?a.pack(D,W):(a.lastNamedStructuresLength=F,ee.length>1073741824&&(ee=null),V)}ee.length>1073741824&&(ee=null),W&dg&&(K=t)}};const C=()=>{g<10&&g++;let D=r.sharedLength||0;if(r.length>D&&!c&&(r.length=D),v>1e4)r.transitions=null,g=0,v=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let W=0,$=y.length;W<$;W++)y[W][Ss]=0;y=[]}},A=D=>{var W=D.length;W<16?ee[K++]=144|W:W<65536?(ee[K++]=220,ee[K++]=W>>8,ee[K++]=W&255):(ee[K++]=221,Nt.setUint32(K,W),K+=4);for(let $=0;$<W;$++)T(D[$])},T=D=>{K>Cn&&(ee=I(K));var W=typeof D,$;if(W==="string"){let F=D.length;if(Gt&&F>=4&&F<4096){if((Gt.size+=F)>ov){let Ee,Ce=(Gt[0]?Gt[0].length*3+Gt[1].length:0)+10;K+Ce>Cn&&(ee=I(K+Ce));let Ne;Gt.position?(Ne=Gt,ee[K]=200,K+=3,ee[K++]=98,Ee=K-t,K+=4,Sd(t,T,0),Nt.setUint16(Ee+t-3,K-t-Ee)):(ee[K++]=214,ee[K++]=98,Ee=K-t,K+=4),Gt=["",""],Gt.previous=Ne,Gt.size=0,Gt.position=Ee}let Se=av.test(D);Gt[Se?0:1]+=D,ee[K++]=193,T(Se?-F:F);return}let V;F<32?V=1:F<256?V=2:F<65536?V=3:V=5;let k=F*3;if(K+k>Cn&&(ee=I(K+k)),F<64||!o){let Se,Ee,Ce,Ne=K+V;for(Se=0;Se<F;Se++)Ee=D.charCodeAt(Se),Ee<128?ee[Ne++]=Ee:Ee<2048?(ee[Ne++]=Ee>>6|192,ee[Ne++]=Ee&63|128):(Ee&64512)===55296&&((Ce=D.charCodeAt(Se+1))&64512)===56320?(Ee=65536+((Ee&1023)<<10)+(Ce&1023),Se++,ee[Ne++]=Ee>>18|240,ee[Ne++]=Ee>>12&63|128,ee[Ne++]=Ee>>6&63|128,ee[Ne++]=Ee&63|128):(ee[Ne++]=Ee>>12|224,ee[Ne++]=Ee>>6&63|128,ee[Ne++]=Ee&63|128);$=Ne-K-V}else $=o(D,K+V);$<32?ee[K++]=160|$:$<256?(V<2&&ee.copyWithin(K+2,K+1,K+1+$),ee[K++]=217,ee[K++]=$):$<65536?(V<3&&ee.copyWithin(K+3,K+2,K+2+$),ee[K++]=218,ee[K++]=$>>8,ee[K++]=$&255):(V<5&&ee.copyWithin(K+5,K+3,K+3+$),ee[K++]=219,Nt.setUint32(K,$),K+=4),K+=$}else if(W==="number")if(D>>>0===D)D<32||D<128&&this.useRecords===!1||D<64&&!this.randomAccessStructure?ee[K++]=D:D<256?(ee[K++]=204,ee[K++]=D):D<65536?(ee[K++]=205,ee[K++]=D>>8,ee[K++]=D&255):(ee[K++]=206,Nt.setUint32(K,D),K+=4);else if(D>>0===D)D>=-32?ee[K++]=256+D:D>=-128?(ee[K++]=208,ee[K++]=D+256):D>=-32768?(ee[K++]=209,Nt.setInt16(K,D),K+=2):(ee[K++]=210,Nt.setInt32(K,D),K+=4);else{let F;if((F=this.useFloat32)>0&&D<4294967296&&D>=-2147483648){ee[K++]=202,Nt.setFloat32(K,D);let V;if(F<4||(V=D*Zc[(ee[K]&127)<<1|ee[K+1]>>7])>>0===V){K+=4;return}else K--}ee[K++]=203,Nt.setFloat64(K,D),K+=8}else if(W==="object"||W==="function")if(!D)ee[K++]=192;else{if(s){let V=s.get(D);if(V){if(!V.id){let k=s.idsToInsert||(s.idsToInsert=[]);V.id=k.push(V)}ee[K++]=214,ee[K++]=112,Nt.setUint32(K,V.id),K+=4;return}else s.set(D,{offset:K-t})}let F=D.constructor;if(F===Object)J(D);else if(F===Array)A(D);else if(F===Map)if(this.mapAsEmptyObject)ee[K++]=128;else{$=D.size,$<16?ee[K++]=128|$:$<65536?(ee[K++]=222,ee[K++]=$>>8,ee[K++]=$&255):(ee[K++]=223,Nt.setUint32(K,$),K+=4);for(let[V,k]of D)T(V),T(k)}else{for(let V=0,k=Cc.length;V<k;V++){let Se=nh[V];if(D instanceof Se){let Ee=Cc[V];if(Ee.write){Ee.type&&(ee[K++]=212,ee[K++]=Ee.type,ee[K++]=0);let ge=Ee.write.call(this,D);ge===D?Array.isArray(D)?A(D):J(D):T(ge);return}let Ce=ee,Ne=Nt,ft=K;ee=null;let ht;try{ht=Ee.pack.call(this,D,ge=>(ee=Ce,Ce=null,K+=ge,K>Cn&&I(K),{target:ee,targetView:Nt,position:K-ge}),T)}finally{Ce&&(ee=Ce,Nt=Ne,K=ft,Cn=ee.length-10)}ht&&(ht.length+K>Cn&&I(ht.length+K),K=cv(ht,ee,K,Ee.type));return}}if(Array.isArray(D))A(D);else{if(D.toJSON){const V=D.toJSON();if(V!==D)return T(V)}if(W==="function")return T(this.writeFunction&&this.writeFunction(D));J(D)}}}else if(W==="boolean")ee[K++]=D?195:194;else if(W==="bigint"){if(D<BigInt(1)<<BigInt(63)&&D>=-(BigInt(1)<<BigInt(63)))ee[K++]=211,Nt.setBigInt64(K,D);else if(D<BigInt(1)<<BigInt(64)&&D>0)ee[K++]=207,Nt.setBigUint64(K,D);else if(this.largeBigIntToFloat)ee[K++]=203,Nt.setFloat64(K,Number(D));else{if(this.largeBigIntToString)return T(D.toString());if(this.useBigIntExtension&&D<BigInt(2)**BigInt(1023)&&D>-(BigInt(2)**BigInt(1023))){ee[K++]=199,K++,ee[K++]=66;let F=[],V;do{let k=D&BigInt(255);V=(k&BigInt(128))===(D<BigInt(0)?BigInt(128):BigInt(0)),F.push(k),D>>=BigInt(8)}while(!((D===BigInt(0)||D===BigInt(-1))&&V));ee[K-2]=F.length;for(let k=F.length;k>0;)ee[K++]=Number(F[--k]);return}else throw new RangeError(D+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}K+=8}else if(W==="undefined")this.encodeUndefinedAsNil?ee[K++]=192:(ee[K++]=212,ee[K++]=0,ee[K++]=0);else throw new Error("Unknown type: "+W)},N=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?D=>{let W;if(this.skipValues){W=[];for(let V in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(V))&&!this.skipValues.includes(D[V])&&W.push(V)}else W=Object.keys(D);let $=W.length;$<16?ee[K++]=128|$:$<65536?(ee[K++]=222,ee[K++]=$>>8,ee[K++]=$&255):(ee[K++]=223,Nt.setUint32(K,$),K+=4);let F;if(this.coercibleKeyAsNumber)for(let V=0;V<$;V++){F=W[V];let k=Number(F);T(isNaN(k)?F:k),T(D[F])}else for(let V=0;V<$;V++)T(F=W[V]),T(D[F])}:D=>{ee[K++]=222;let W=K-t;K+=2;let $=0;for(let F in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(F))&&(T(F),T(D[F]),$++);if($>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ee[W+++t]=$>>8,ee[W+t]=$&255},B=this.useRecords===!1?N:e.progressiveRecords&&!p?D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=K++-t,V;for(let k in D)if(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(k)){if(W=$[k],W)$=W;else{let Se=Object.keys(D),Ee=$;$=r.transitions;let Ce=0;for(let Ne=0,ft=Se.length;Ne<ft;Ne++){let ht=Se[Ne];W=$[ht],W||(W=$[ht]=Object.create(null),Ce++),$=W}F+t+1==K?(K--,P($,Se,Ce)):U($,Se,F,Ce),V=!0,$=Ee[k]}T(D[k])}if(!V){let k=$[Ss];k?ee[F+t]=k:U($,Object.keys(D),F,0)}}:D=>{let W,$=r.transitions||(r.transitions=Object.create(null)),F=0;for(let k in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(k))&&(W=$[k],W||(W=$[k]=Object.create(null),F++),$=W);let V=$[Ss];V?V>=96&&p?(ee[K++]=((V-=96)&31)+96,ee[K++]=V>>5):ee[K++]=V:P($,$.__keys__||Object.keys(D),F);for(let k in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(k))&&T(D[k])},z=typeof this.useRecords=="function"&&this.useRecords,J=z?D=>{z(D)?B(D):N(D)}:B,I=D=>{let W;if(D>16777216){if(D-t>vd)throw new Error("Packed buffer would be larger than maximum buffer size");W=Math.min(vd,Math.round(Math.max((D-t)*(D>67108864?1.25:2),4194304)/4096)*4096)}else W=(Math.max(D-t<<2,ee.length-1)>>12)+1<<12;let $=new Ua(W);return Nt=$.dataView||($.dataView=new DataView($.buffer,0,W)),D=Math.min(D,ee.length),ee.copy?ee.copy($,0,t,D):$.set(ee.slice(t,D)),K-=t,t=0,Cn=$.length-10,ee=$},P=(D,W,$)=>{let F=r.nextId;F||(F=64),F<m&&this.shouldShareStructure&&!this.shouldShareStructure(W)?(F=r.nextOwnId,F<x||(F=m),r.nextOwnId=F+1):(F>=x&&(F=m),r.nextId=F+1);let V=W.highByte=F>=96&&p?F-96>>5:-1;D[Ss]=F,D.__keys__=W,r[F-64]=W,F<m?(W.isShared=!0,r.sharedLength=F-63,i=!0,V>=0?(ee[K++]=(F&31)+96,ee[K++]=V):ee[K++]=F):(V>=0?(ee[K++]=213,ee[K++]=114,ee[K++]=(F&31)+96,ee[K++]=V):(ee[K++]=212,ee[K++]=114,ee[K++]=F),$&&(v+=g*$),y.length>=f&&(y.shift()[Ss]=0),y.push(D),T(W))},U=(D,W,$,F)=>{let V=ee,k=K,Se=Cn,Ee=t;ee=xo,K=0,t=0,ee||(xo=ee=new Ua(8192)),Cn=ee.length-10,P(D,W,F),xo=ee;let Ce=K;if(ee=V,K=k,Cn=Se,t=Ee,Ce>1){let Ne=K+Ce-1;Ne>Cn&&I(Ne);let ft=$+t;ee.copyWithin(ft+Ce,ft+1,K),ee.set(xo.slice(0,Ce),ft),K=Ne}else ee[$+t]=xo[0]},ye=D=>{let W=sv(D,ee,t,K,r,I,($,F,V)=>{if(V)return i=!0;K=F;let k=ee;return T($),C(),k!==ee?{position:K,targetView:Nt,target:ee}:K},this);if(W===0)return J(D);K=W}}useBuffer(e){ee=e,ee.dataView||(ee.dataView=new DataView(ee.buffer,ee.byteOffset,ee.byteLength)),Nt=ee.dataView,K=0}set position(e){K=e}get position(){return K}set buffer(e){ee=e}get buffer(){return ee}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}nh=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,eg];Cc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?xd(n,16,e):yd(el?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==ug&&this.moreTypes?xd(n,og.indexOf(t.name),e):yd(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function xd(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function yd(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function cv(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function lv(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function Sd(n,e,t){if(Gt.length>0){Nt.setUint32(Gt.position+n,K+t-Gt.position-n),Gt.stringsPosition=K-n;let i=Gt;Gt=null,e(i[0]),e(i[1])}}function uv(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");nh.unshift(n.Class),Cc.unshift(n)}Q_(n)}function fv(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let fg=new ua({useRecords:!1});const hv=fg.pack,dv=fg.pack,pv=ua,{NEVER:mv,ALWAYS:gv,DECIMAL_ROUND:_v,DECIMAL_FIT:vv}=cg,hg=512,dg=1024,pg=2048;function xv(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return yv(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return Sv(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*yv(n,e){const t=new ua(e);for(const i of n)yield t.pack(i)}async function*Sv(n,e){const t=new ua(e);for await(const i of n)yield t.pack(i)}function Ev(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Cr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const Mv=Ev,Tv=xv,bv=!1,wv=!0,Av=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:gv,C1:Qf,DECIMAL_FIT:vv,DECIMAL_ROUND:_v,Decoder:ev,Encoder:pv,FLOAT32_OPTIONS:cg,NEVER:mv,Packr:ua,RESERVE_START_SPACE:pg,RESET_BUFFER_MODE:dg,REUSE_BUFFER_MODE:hg,Unpackr:Cr,addExtension:uv,clearSource:Rc,decode:iv,decodeIter:Mv,encode:dv,encodeIter:Tv,isNativeAccelerationEnabled:Y_,mapsAsObjects:wv,pack:hv,roundFloat32:rv,unpack:tv,unpackMultiple:nv,useRecords:bv},Symbol.toStringTag,{value:"Module"})),Rv=Kf(Av);var Ed;function gg(){if(Ed)return bl;Ed=1;var n=H_(),e=Km(),t=Jm(),i=Zm(),r=G_(),s=Zf(),o=Qm(),a=Jc(),c=Rv;let l=class mg{constructor(f,p){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),p&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=p,this.serializer.state=new p),this.onError((m,x)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${m}) ${x}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,p,m=this,x,y){const v=new n.Connection(x.protocol);if(m.connection=v,v.events.onmessage=mg.prototype.onMessageCallback.bind(m),v.events.onclose=function(g){var C;if(!m.hasJoined){(C=console.warn)===null||C===void 0||C.call(console,`Room connection was closed unexpectedly (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason);return}g.code===a.CloseCode.DEVMODE_RESTART&&p?p():(m.onLeave.invoke(g.code,g.reason),m.destroy())},v.events.onerror=function(g){var C;(C=console.warn)===null||C===void 0||C.call(console,`Room, onError (${g.code}): ${g.reason}`),m.onError.invoke(g.code,g.reason)},x.protocol==="h3"){const g=new URL(f);v.connect(g.origin,x)}else v.connect(f,y)}leave(f=!0){return new Promise(p=>{this.onLeave(m=>p(m)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,p){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),p)}send(f,p){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,m):s.encode.number(this.packr.buffer,f,m),this.packr.position=0;const x=p!==void 0?this.packr.pack(p,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.send(x)}sendUnreliable(f,p){const m={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,m):s.encode.number(this.packr.buffer,f,m),this.packr.position=0;const x=p!==void 0?this.packr.pack(p,2048+m.offset):this.packr.buffer.subarray(0,m.offset);this.connection.sendUnreliable(x)}sendBytes(f,p){const m={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,m):s.encode.number(this.packr.buffer,f,m),p.byteLength+m.offset>this.packr.buffer.byteLength){const x=new Uint8Array(m.offset+p.byteLength);x.set(this.packr.buffer),this.packr.useBuffer(x)}this.packr.buffer.set(p,m.offset),this.connection.send(this.packr.buffer.subarray(0,m.offset+p.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const p=new Uint8Array(f.data),m={offset:1},x=p[0];if(x===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(p,m,p[m.offset++]);if(this.serializerId=s.decode.utf8Read(p,m,p[m.offset++]),!this.serializer){const v=t.getSerializer(this.serializerId);this.serializer=new v}p.byteLength>m.offset&&this.serializer.handshake&&this.serializer.handshake(p,m),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(x===e.Protocol.ERROR){const y=s.decode.number(p,m),v=s.decode.string(p,m);this.onError.invoke(y,v)}else if(x===e.Protocol.LEAVE_ROOM)this.leave();else if(x===e.Protocol.ROOM_STATE)this.serializer.setState(p,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(p,m),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(p,m)?s.decode.string(p,m):s.decode.number(p,m),v=p.byteLength>m.offset?c.unpack(p,{start:m.offset}):void 0;this.dispatchMessage(y,v)}else if(x===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(p,m)?s.decode.string(p,m):s.decode.number(p,m);this.dispatchMessage(y,p.subarray(m.offset))}}dispatchMessage(f,p){var m;const x=this.getMessageHandlerKey(f);this.onMessageHandlers.events[x]?this.onMessageHandlers.emit(x,p):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,p):(m=console.warn)===null||m===void 0||m.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return bl.Room=l,bl}var Ll={};function Md(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function mi(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Md(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return Md(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var Cv=mi.bind(mi,"GET"),Pv=mi.bind(mi,"POST"),Iv=mi.bind(mi,"PATCH"),Dv=mi.bind(mi,"DELETE"),Lv=mi.bind(mi,"PUT");const Ov=Object.freeze(Object.defineProperty({__proto__:null,del:Dv,get:Cv,patch:Iv,post:Pv,put:Lv,send:mi},Symbol.toStringTag,{value:"Module"})),Nv=Kf(Ov);var Td;function Uv(){if(Td)return Ll;Td=1;var n=Jc(),e=Nv;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,p=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!p?l:new n.ServerError(f,p)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return Ll.HTTP=r,Ll}var Ol={},yo={},bd;function Fv(){if(bd)return yo;bd=1;var n=Kc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return yo.getItem=s,yo.removeItem=r,yo.setItem=i,yo}var wd;function _g(){if(wd)return Ol;wd=1;var n=Kc,e=Fv(),t=Zm(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,p)=>{this.getUserData().then(m=>{this.emitChange(Object.assign(Object.assign({},m),{token:this.token}))}).catch(m=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const p=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(p),p})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((p,m)=>{const x=f.width||480,y=f.height||768,v=this.token?`?token=${this.token}`:"",g=`Login with ${h[0].toUpperCase()+h.substring(1)}`,C=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${v}`),A=screen.width/2-x/2,T=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(C,g,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+x+", height="+y+", top="+T+", left="+A),"f");const N=z=>{z.data.user===void 0&&z.data.token===void 0||(clearInterval(B),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",N),z.data.error!==void 0?m(z.data.error):(p(z.data),this.emitChange(z.data)))},B=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),m("cancelled"),window.removeEventListener("message",N))},200);window.addEventListener("message",N)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,Ol.Auth=a,Ol}var Nl={},Ad;function Bv(){if(Ad)return Nl;Ad=1;function n(e){var t;const i=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Nl.discordURLBuilder=n,Nl}var Rd;function zv(){if(Rd)return Ia;Rd=1;var n=Kc,e=Jc(),t=gg(),i=Uv(),r=_g(),s=Bv(),o;class a extends Error{constructor(f,p){super(f),this.code=p,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window?.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,p){var m,x;if(typeof f=="string"){const y=f.startsWith("/")?new URL(f,c):new URL(f),v=y.protocol==="https:"||y.protocol==="wss:",g=Number(y.port||(v?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:g,secure:v,searchParams:y.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,p?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=p?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((x=(m=window?.location)===null||m===void 0?void 0:m.hostname)===null||x===void 0)&&x.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("joinOrCreate",p,m,x)})}create(f){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("create",p,m,x)})}join(f){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("join",p,m,x)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(p,m={},x){return yield this.createMatchMakeRequest("joinById",p,m,x)})}reconnect(f,p){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof p=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[m,x]=f.split(":");if(!m||!x)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",m,{reconnectionToken:x},p)})}consumeSeatReservation(f,p,m){return n.__awaiter(this,void 0,void 0,function*(){const x=this.createRoom(f.room.name,p);x.roomId=f.room.roomId,x.sessionId=f.sessionId;const y={sessionId:x.sessionId};f.reconnectionToken&&(y.reconnectionToken=f.reconnectionToken);const v=m||x;return x.connect(this.buildEndpoint(f.room,y,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${x.roomId}'...`);let g=0,C=8;const A=()=>n.__awaiter(this,void 0,void 0,function*(){g++;try{yield this.consumeSeatReservation(f,p,v),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${x.roomId}'`)}catch{g<C?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${g} out of ${C})`),setTimeout(A,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(A,2e3)})),v,f,this.http.headers),new Promise((g,C)=>{const A=(T,N)=>C(new e.ServerError(T,N));v.onError.once(A),v.onJoin.once(()=>{v.onError.remove(A),g(v)})})})}createMatchMakeRequest(f,p){return n.__awaiter(this,arguments,void 0,function*(m,x,y={},v,g){const C=(yield this.http.post(`matchmake/${m}/${x}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(C.error)throw new a(C.error,C.code);return m==="reconnect"&&(C.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(C,v,g)})}createRoom(f,p){return new t.Room(f,p)}buildEndpoint(f,p={},m="ws"){let x=this.settings.searchParams||"";this.http.authToken&&(p._authToken=this.http.authToken);for(const g in p)p.hasOwnProperty(g)&&(x+=(x?"&":"")+`${g}=${p[g]}`);m==="h3"&&(m="http");let y=this.settings.secure?`${m}s://`:`${m}://`;f.publicAddress?y+=`${f.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${y}/${f.processId}/${f.roomId}?${x}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(f=""){const p=f.startsWith("/")?f:`/${f}`;let m=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${p}`;return this.settings.searchParams&&(m+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(m)):m}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",Ia.Client=l,Ia.MatchMakeError=a,Ia}var Ul={},Cd;function kv(){if(Cd)return Ul;Cd=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Ul.NoneSerializer=n,Ul}var Pd;function Vv(){return Pd||(Pd=1,(function(n){L_();var e=zv(),t=Km(),i=gg(),r=_g(),s=Jc(),o=Qm(),a=kv(),c=Jm();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(Ml)),Ml}var Hv=Vv();const ih="179",Gv=0,Id=1,Wv=2,vg=1,$v=2,Xi=3,Pr=0,Bn=1,ti=2,Ar=0,ir=1,Ks=2,Dd=3,Ld=4,Xv=5,Jr=100,qv=101,jv=102,Yv=103,Kv=104,Jv=200,Zv=201,Qv=202,ex=203,Uu=204,Fu=205,tx=206,nx=207,ix=208,rx=209,sx=210,ox=211,ax=212,cx=213,lx=214,Bu=0,zu=1,ku=2,Js=3,Vu=4,Hu=5,Gu=6,Wu=7,xg=0,ux=1,fx=2,Rr=0,hx=1,dx=2,px=3,mx=4,gx=5,_x=6,vx=7,yg=300,Zs=301,Qs=302,$u=303,Xu=304,tl=306,qu=1e3,es=1001,ju=1002,hi=1003,xx=1004,Fa=1005,Ai=1006,Fl=1007,ts=1008,or=1009,Sg=1010,Eg=1011,Wo=1012,rh=1013,os=1014,er=1015,fa=1016,sh=1017,oh=1018,$o=1020,Mg=35902,Tg=1021,bg=1022,fi=1023,Xo=1026,qo=1027,wg=1028,ah=1029,Ag=1030,ch=1031,lh=1033,pc=33776,mc=33777,gc=33778,_c=33779,Yu=35840,Ku=35841,Ju=35842,Zu=35843,Qu=36196,ef=37492,tf=37496,nf=37808,rf=37809,sf=37810,of=37811,af=37812,cf=37813,lf=37814,uf=37815,ff=37816,hf=37817,df=37818,pf=37819,mf=37820,gf=37821,vc=36492,_f=36494,vf=36495,Rg=36283,xf=36284,yf=36285,Sf=36286,yx=3200,Sx=3201,Ex=0,Mx=1,Er="",$n="srgb",eo="srgb-linear",Pc="linear",It="srgb",Es=7680,Od=519,Tx=512,bx=513,wx=514,Cg=515,Ax=516,Rx=517,Cx=518,Px=519,Nd=35044,Ud="300 es",Ri=2e3,Ic=2001;class oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,Ef=180/Math.PI;function ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Ix(n,e){return(n%e+e)%e}function zl(n,e,t){return(1-t)*n+t*e}function So(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ha{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const p=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(f!==y||c!==p||l!==m||h!==x){let v=1-a;const g=c*p+l*m+h*x+f*y,C=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const N=Math.sqrt(A),B=Math.atan2(N,g*C);v=Math.sin(v*B)/N,a=Math.sin(a*B)/N}const T=a*C;if(c=c*v+p*T,l=l*v+m*T,h=h*v+x*T,f=f*v+y*T,v===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],p=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+h*f+c*m-l*p,e[t+1]=c*x+h*p+l*f-a*m,e[t+2]=l*x+h*m+a*p-c*f,e[t+3]=h*x-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),p=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*h*f+l*m*x,this._y=l*m*f-p*h*x,this._z=l*h*x+p*m*f,this._w=l*h*f-p*m*x;break;case"YXZ":this._x=p*h*f+l*m*x,this._y=l*m*f-p*h*x,this._z=l*h*x-p*m*f,this._w=l*h*f+p*m*x;break;case"ZXY":this._x=p*h*f-l*m*x,this._y=l*m*f+p*h*x,this._z=l*h*x+p*m*f,this._w=l*h*f-p*m*x;break;case"ZYX":this._x=p*h*f-l*m*x,this._y=l*m*f+p*h*x,this._z=l*h*x-p*m*f,this._w=l*h*f+p*m*x;break;case"YZX":this._x=p*h*f+l*m*x,this._y=l*m*f+p*h*x,this._z=l*h*x-p*m*f,this._w=l*h*f-p*m*x;break;case"XZY":this._x=p*h*f-l*m*x,this._y=l*m*f-p*h*x,this._z=l*h*x+p*m*f,this._w=l*h*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new Z,Fd=new ha;class dt{constructor(e,t,i,r,s,o,a,c,l){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],p=i[2],m=i[5],x=i[8],y=r[0],v=r[3],g=r[6],C=r[1],A=r[4],T=r[7],N=r[2],B=r[5],z=r[8];return s[0]=o*y+a*C+c*N,s[3]=o*v+a*A+c*B,s[6]=o*g+a*T+c*z,s[1]=l*y+h*C+f*N,s[4]=l*v+h*A+f*B,s[7]=l*g+h*T+f*z,s[2]=p*y+m*C+x*N,s[5]=p*v+m*A+x*B,s[8]=p*g+m*T+x*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,p=a*c-h*s,m=l*s-o*c,x=t*f+i*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vl=new dt;function Pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dx(){const n=Dc("canvas");return n.style.display="block",n}const Bd={};function Gs(n){n in Bd||(Bd[n]=!0,console.warn(n))}function Lx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const zd=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){const n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?Pc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:e,whitePoint:i,transfer:Pc,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:It,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}const bt=Ox();function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Dc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ux=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hl(r[o].image)):s.push(Hl(r[o]))}else s=Hl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fx=0;const Gl=new Z;class zn extends oo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=es,r=es,s=Ai,o=ts,a=fi,c=or,l=zn.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ao(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=yg;zn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],x=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+v)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,T=(m+1)/2,N=(g+1)/2,B=(h+p)/4,z=(f+y)/4,J=(x+v)/4;return A>T&&A>N?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=B/i,s=z/i):T>N?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=B/r,s=J/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=z/s,r=J/s),this.set(i,r,s,t),this}let C=Math.sqrt((v-x)*(v-x)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(v-x)/C,this.y=(f-y)/C,this.z=(p-h)/C,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bx extends oo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new zn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new uh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends Bx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ig extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zx extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),za.subVectors(this.max,Eo),Ts.subVectors(e.a,Eo),bs.subVectors(e.b,Eo),ws.subVectors(e.c,Eo),mr.subVectors(bs,Ts),gr.subVectors(ws,bs),zr.subVectors(Ts,ws);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-zr.z,zr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,zr.z,0,-zr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-zr.y,zr.x,0];return!Wl(t,Ts,bs,ws,za)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,Ts,bs,ws,za))?!1:(ka.crossVectors(mr,gr),t=[ka.x,ka.y,ka.z],Wl(t,Ts,bs,ws,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],oi=new Z,Ba=new da,Ts=new Z,bs=new Z,ws=new Z,mr=new Z,gr=new Z,zr=new Z,Eo=new Z,za=new Z,ka=new Z,kr=new Z;function Wl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){kr.fromArray(n,s);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),c=e.dot(kr),l=t.dot(kr),h=i.dot(kr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const kx=new da,Mo=new Z,$l=new Z;class fh{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add($l)),this.expandByPoint(Mo.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new Z,Xl=new Z,Va=new Z,_r=new Z,ql=new Z,Ha=new Z,jl=new Z;class Vx{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xl.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Xl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=_r.dot(this.direction),c=-_r.dot(Va),l=_r.lengthSq(),h=Math.abs(1-o*o);let f,p,m,x;if(h>0)if(f=o*c-a,p=o*a-c,x=s*h,f>=0)if(p>=-x)if(p<=x){const y=1/h;f*=y,p*=y,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l):p<=x?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xl).addScaledVector(Va,p),m}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){ql.subVectors(t,e),Ha.subVectors(i,e),jl.crossVectors(ql,Ha);let o=this.direction.dot(jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const c=a*this.direction.dot(Ha.crossVectors(_r,Ha));if(c<0)return null;const l=a*this.direction.dot(ql.cross(_r));if(l<0||c+l>o)return null;const h=-a*_r.dot(jl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,r,s,o,a,c,l,h,f,p,m,x,y,v){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,p,m,x,y,v)}set(e,t,i,r,s,o,a,c,l,h,f,p,m,x,y,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=p,g[3]=m,g[7]=x,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*f,x=a*h,y=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=p-y*l,t[9]=-a*c,t[2]=y-p*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,x=l*h,y=l*f;t[0]=p+y*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=y+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,x=l*h,y=l*f;t[0]=p-y*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=y-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,m=o*f,x=a*h,y=a*f;t[0]=c*h,t[4]=x*l-m,t[8]=p*l+y,t[1]=c*f,t[5]=y*l+p,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,x=a*c,y=a*l;t[0]=c*h,t[4]=y-p*f,t[8]=x*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+x,t[10]=p-y*f}else if(e.order==="XZY"){const p=o*c,m=o*l,x=a*c,y=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+y,t[5]=o*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*h,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Gx)}lookAt(e,t,i){const r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),vr.crossVectors(i,Gn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),vr.crossVectors(i,Gn)),vr.normalize(),Ga.crossVectors(Gn,vr),r[0]=vr.x,r[4]=Ga.x,r[8]=Gn.x,r[1]=vr.y,r[5]=Ga.y,r[9]=Gn.y,r[2]=vr.z,r[6]=Ga.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],p=i[9],m=i[13],x=i[2],y=i[6],v=i[10],g=i[14],C=i[3],A=i[7],T=i[11],N=i[15],B=r[0],z=r[4],J=r[8],I=r[12],P=r[1],U=r[5],ye=r[9],D=r[13],W=r[2],$=r[6],F=r[10],V=r[14],k=r[3],Se=r[7],Ee=r[11],Ce=r[15];return s[0]=o*B+a*P+c*W+l*k,s[4]=o*z+a*U+c*$+l*Se,s[8]=o*J+a*ye+c*F+l*Ee,s[12]=o*I+a*D+c*V+l*Ce,s[1]=h*B+f*P+p*W+m*k,s[5]=h*z+f*U+p*$+m*Se,s[9]=h*J+f*ye+p*F+m*Ee,s[13]=h*I+f*D+p*V+m*Ce,s[2]=x*B+y*P+v*W+g*k,s[6]=x*z+y*U+v*$+g*Se,s[10]=x*J+y*ye+v*F+g*Ee,s[14]=x*I+y*D+v*V+g*Ce,s[3]=C*B+A*P+T*W+N*k,s[7]=C*z+A*U+T*$+N*Se,s[11]=C*J+A*ye+T*F+N*Ee,s[15]=C*I+A*D+T*V+N*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],m=e[14],x=e[3],y=e[7],v=e[11],g=e[15];return x*(+s*c*f-r*l*f-s*a*p+i*l*p+r*a*m-i*c*m)+y*(+t*c*m-t*l*p+s*o*p-r*o*m+r*l*h-s*c*h)+v*(+t*l*f-t*a*m-s*o*f+i*o*m+s*a*h-i*l*h)+g*(-r*a*h-t*c*f+t*a*p+r*o*f-i*o*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],m=e[11],x=e[12],y=e[13],v=e[14],g=e[15],C=f*v*l-y*p*l+y*c*m-a*v*m-f*c*g+a*p*g,A=x*p*l-h*v*l-x*c*m+o*v*m+h*c*g-o*p*g,T=h*y*l-x*f*l+x*a*m-o*y*m-h*a*g+o*f*g,N=x*f*c-h*y*c-x*a*p+o*y*p+h*a*v-o*f*v,B=t*C+i*A+r*T+s*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=C*z,e[1]=(y*p*s-f*v*s-y*r*m+i*v*m+f*r*g-i*p*g)*z,e[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*z,e[3]=(f*c*s-a*p*s-f*r*l+i*p*l+a*r*m-i*c*m)*z,e[4]=A*z,e[5]=(h*v*s-x*p*s+x*r*m-t*v*m-h*r*g+t*p*g)*z,e[6]=(x*c*s-o*v*s-x*r*l+t*v*l+o*r*g-t*c*g)*z,e[7]=(o*p*s-h*c*s+h*r*l-t*p*l-o*r*m+t*c*m)*z,e[8]=T*z,e[9]=(x*f*s-h*y*s-x*i*m+t*y*m+h*i*g-t*f*g)*z,e[10]=(o*y*s-x*a*s+x*i*l-t*y*l-o*i*g+t*a*g)*z,e[11]=(h*a*s-o*f*s-h*i*l+t*f*l+o*i*m-t*a*m)*z,e[12]=N*z,e[13]=(h*y*r-x*f*r+x*i*p-t*y*p-h*i*v+t*f*v)*z,e[14]=(x*a*r-o*y*r-x*i*c+t*y*c+o*i*v-t*a*v)*z,e[15]=(o*f*r-h*a*r+h*i*c-t*f*c-o*i*p+t*a*p)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,p=s*l,m=s*h,x=s*f,y=o*h,v=o*f,g=a*f,C=c*l,A=c*h,T=c*f,N=i.x,B=i.y,z=i.z;return r[0]=(1-(y+g))*N,r[1]=(m+T)*N,r[2]=(x-A)*N,r[3]=0,r[4]=(m-T)*B,r[5]=(1-(p+g))*B,r[6]=(v+C)*B,r[7]=0,r[8]=(x+A)*z,r[9]=(v-C)*z,r[10]=(1-(p+y))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const l=1/s,h=1/o,f=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ri,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let x,y;if(c)x=s/(o-s),y=o*s/(o-s);else if(a===Ri)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ic)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ri,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,y;if(c)x=1/(o-s),y=o/(o-s);else if(a===Ri)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ic)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new Z,ai=new tn,Hx=new Z(0,0,0),Gx=new Z(1,1,1),vr=new Z,Ga=new Z,Gn=new Z,Vd=new tn,Hd=new ha;class ar{constructor(e=0,t=0,i=0,r=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wx=0;const Gd=new Z,Rs=new ha,Hi=new tn,Wa=new Z,To=new Z,$x=new Z,Xx=new ha,Wd=new Z(1,0,0),$d=new Z(0,1,0),Xd=new Z(0,0,1),qd={type:"added"},qx={type:"removed"},Cs={type:"childadded",child:null},Yl={type:"childremoved",child:null};class jn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new Z,t=new ar,i=new ha,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new dt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(To,Wa,this.up):Hi.lookAt(Wa,To,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jn.DEFAULT_UP=new Z(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new Z,Gi=new Z,Kl=new Z,Wi=new Z,Ps=new Z,Is=new Z,jd=new Z,Jl=new Z,Zl=new Z,Ql=new Z,eu=new Kt,tu=new Kt,nu=new Kt;class ui{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Gi.subVectors(i,t),Kl.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Gi),c=ci.dot(Kl),l=Gi.dot(Gi),h=Gi.dot(Kl),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(l*c-a*h)*p,x=(o*h-a*c)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,t),tu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(eu,s.x),o.addScaledVector(tu,s.y),o.addScaledVector(nu,s.z),o}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Gi.subVectors(e,t),ci.cross(Gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ci.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),Is.subVectors(s,i),Jl.subVectors(e,i);const c=Ps.dot(Jl),l=Is.dot(Jl);if(c<=0&&l<=0)return t.copy(i);Zl.subVectors(e,r);const h=Ps.dot(Zl),f=Is.dot(Zl);if(h>=0&&f<=h)return t.copy(r);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ps,o);Ql.subVectors(e,s);const m=Ps.dot(Ql),x=Is.dot(Ql);if(x>=0&&m<=x)return t.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(Is,a);const v=h*x-m*f;if(v<=0&&f-h>=0&&m-x>=0)return jd.subVectors(s,r),a=(f-h)/(f-h+(m-x)),t.copy(r).addScaledVector(jd,a);const g=1/(v+y+p);return o=y*g,a=p*g,t.copy(i).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},$a={h:0,s:0,l:0};function iu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=bt.workingColorSpace){if(e=Ix(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=iu(o,s,e+1/3),this.g=iu(o,s,e),this.b=iu(o,s,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,t=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const i=Lg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return bt.workingToColorSpace(bn.copy(this),e),Math.round(vt(bn.r*255,0,255))*65536+Math.round(vt(bn.g*255,0,255))*256+Math.round(vt(bn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=$n){bt.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL($a);const i=zl(xr.h,$a.h,t),r=zl(xr.s,$a.s,t),s=zl(xr.l,$a.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ct;Ct.NAMES=Lg;let jx=0;class nl extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=ir,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uu&&(i.blendSrc=this.blendSrc),this.blendDst!==Fu&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Z,Xa=new rt;let Yx=0;class Ii{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nd,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=So(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=So(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=So(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=So(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=So(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class Og extends Ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ng extends Ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends Ii{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kx=0;const Zn=new tn,ru=new jn,Ds=new Z,Wn=new da,bo=new da,hn=new Z;class xi extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Ng:Og)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Wn.min,bo.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,bo.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(bo.min),Wn.expandByPoint(bo.max))}Wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),hn.add(Ds)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let J=0;J<i.count;J++)a[J]=new Z,c[J]=new Z;const l=new Z,h=new Z,f=new Z,p=new rt,m=new rt,x=new rt,y=new Z,v=new Z;function g(J,I,P){l.fromBufferAttribute(i,J),h.fromBufferAttribute(i,I),f.fromBufferAttribute(i,P),p.fromBufferAttribute(s,J),m.fromBufferAttribute(s,I),x.fromBufferAttribute(s,P),h.sub(l),f.sub(l),m.sub(p),x.sub(p);const U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(U),v.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),a[J].add(y),a[I].add(y),a[P].add(y),c[J].add(v),c[I].add(v),c[P].add(v))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let J=0,I=C.length;J<I;++J){const P=C[J],U=P.start,ye=P.count;for(let D=U,W=U+ye;D<W;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const A=new Z,T=new Z,N=new Z,B=new Z;function z(J){N.fromBufferAttribute(r,J),B.copy(N);const I=a[J];A.copy(I),A.sub(N.multiplyScalar(N.dot(I))).normalize(),T.crossVectors(B,I);const U=T.dot(c[J])<0?-1:1;o.setXYZW(J,A.x,A.y,A.z,U)}for(let J=0,I=C.length;J<I;++J){const P=C[J],U=P.start,ye=P.count;for(let D=U,W=U+ye;D<W;D+=3)z(e.getX(D+0)),z(e.getX(D+1)),z(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,c=new Z,l=new Z,h=new Z,f=new Z;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),y=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),a.add(h),c.add(h),l.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h);let m=0,x=0;for(let y=0,v=c.length;y<v;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*h;for(let g=0;g<h;g++)p[x++]=l[m++]}return new Ii(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const p=l[h],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new tn,Vr=new Vx,qa=new fh,Kd=new Z,ja=new Z,Ya=new Z,Ka=new Z,su=new Z,Ja=new Z,Jd=new Z,Za=new Z;class at extends jn{constructor(e=new xi,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ja.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(su.fromBufferAttribute(f,e),o?Ja.addScaledVector(su,h):Ja.addScaledVector(su.sub(t),h))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(qa.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(qa,Kd)===null||Vr.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(Yd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],g=o[v.materialIndex],C=Math.max(v.start,m.start),A=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let T=C,N=A;T<N;T+=3){const B=a.getX(T),z=a.getX(T+1),J=a.getX(T+2);r=Qa(this,g,e,i,l,h,f,B,z,J),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const C=a.getX(v),A=a.getX(v+1),T=a.getX(v+2);r=Qa(this,o,e,i,l,h,f,C,A,T),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],g=o[v.materialIndex],C=Math.max(v.start,m.start),A=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let T=C,N=A;T<N;T+=3){const B=T,z=T+1,J=T+2;r=Qa(this,g,e,i,l,h,f,B,z,J),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let v=x,g=y;v<g;v+=3){const C=v,A=v+1,T=v+2;r=Qa(this,o,e,i,l,h,f,C,A,T),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Jx(n,e,t,i,r,s,o,a){let c;if(e.side===Bn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Pr,a),c===null)return null;Za.copy(a),Za.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:n}}function Qa(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ja),n.getVertexPosition(c,Ya),n.getVertexPosition(l,Ka);const h=Jx(n,e,t,i,ja,Ya,Ka,Jd);if(h){const f=new Z;ui.getBarycoord(Jd,ja,Ya,Ka,f),r&&(h.uv=ui.getInterpolatedAttribute(r,a,c,l,f,new rt)),s&&(h.uv1=ui.getInterpolatedAttribute(s,a,c,l,f,new rt)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,c,l,f,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new Z,materialIndex:0};ui.getNormal(ja,Ya,Ka,p.normal),h.face=p,h.barycoord=f}return h}class mn extends xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2));function x(y,v,g,C,A,T,N,B,z,J,I){const P=T/z,U=N/J,ye=T/2,D=N/2,W=B/2,$=z+1,F=J+1;let V=0,k=0;const Se=new Z;for(let Ee=0;Ee<F;Ee++){const Ce=Ee*U-D;for(let Ne=0;Ne<$;Ne++){const ft=Ne*P-ye;Se[y]=ft*C,Se[v]=Ce*A,Se[g]=W,l.push(Se.x,Se.y,Se.z),Se[y]=0,Se[v]=0,Se[g]=B>0?1:-1,h.push(Se.x,Se.y,Se.z),f.push(Ne/z),f.push(1-Ee/J),V+=1}}for(let Ee=0;Ee<J;Ee++)for(let Ce=0;Ce<z;Ce++){const Ne=p+Ce+$*Ee,ft=p+Ce+$*(Ee+1),ht=p+(Ce+1)+$*(Ee+1),ge=p+(Ce+1)+$*Ee;c.push(Ne,ft,ge),c.push(ft,ht,ge),k+=6}a.addGroup(m,k,I),m+=k,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=to(n[t]);for(const r in i)e[r]=i[r]}return e}function Zx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ug(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Qx={clone:to,merge:In};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fg extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Z,Zd=new rt,Qd=new rt;class li extends Fg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Qd),t.subVectors(Qd,Zd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Os=1;class ny extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new li(Ls,Os,e,t);r.layers=this.layers,this.add(r);const s=new li(Ls,Os,e,t);s.layers=this.layers,this.add(s);const o=new li(Ls,Os,e,t);o.layers=this.layers,this.add(o);const a=new li(Ls,Os,e,t);a.layers=this.layers,this.add(a);const c=new li(Ls,Os,e,t);c.layers=this.layers,this.add(c);const l=new li(Ls,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Bg extends zn{constructor(e=[],t=Zs,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iy extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mn(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Ar});s.uniforms.tEquirect.value=t;const o=new at(r,s),a=t.minFilter;return t.minFilter===ts&&(t.minFilter=Ai),new ny(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Zt extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ry={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,i),g=this._getHandJoint(l,y);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&p>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class sy extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const au=new Z,oy=new Z,ay=new dt;class jr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=au.subVectors(i,t).cross(oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ay.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new fh,cy=new rt(.5,.5),ec=new Z;class zg{constructor(e=new jr,t=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],p=s[6],m=s[7],x=s[8],y=s[9],v=s[10],g=s[11],C=s[12],A=s[13],T=s[14],N=s[15];if(r[0].setComponents(l-o,m-h,g-x,N-C).normalize(),r[1].setComponents(l+o,m+h,g+x,N+C).normalize(),r[2].setComponents(l+a,m+f,g+y,N+A).normalize(),r[3].setComponents(l-a,m-f,g-y,N-A).normalize(),i)r[4].setComponents(c,p,v,T).normalize(),r[5].setComponents(l-c,m-p,g-v,N-T).normalize();else if(r[4].setComponents(l-c,m-p,g-v,N-T).normalize(),t===Ri)r[5].setComponents(l+c,m+p,g+v,N+T).normalize();else if(t===Ic)r[5].setComponents(c,p,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=cy.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ec.x=r.normal.x>0?e.max.x:e.min.x,ec.y=r.normal.y>0?e.max.y:e.min.y,ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kg extends zn{constructor(e,t,i=os,r,s,o,a=hi,c=hi,l,h=Xo,f=1){if(h!==Xo&&h!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ni extends xi{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new Z,h=new rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const m=i+f/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new cn(o,3)),this.setAttribute("normal",new cn(a,3)),this.setAttribute("uv",new cn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const h=i[r],p=i[r+1]-h,m=(o-h)/p;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new rt:new Z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Z,r=[],s=[],o=[],a=new Z,c=new tn;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new Z)}s[0]=new Z,o[0]=new Z;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(vt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(vt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hh extends Ui{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new rt){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*h-m*f+this.aX,l=p*f+m*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ly extends hh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dh(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,f){let p=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+f)+(c-a)/f;p*=h,m*=h,r(o,a,p,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const tc=new Z,cu=new dh,lu=new dh,uu=new dh;class uy extends Ui{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(tc.subVectors(r[0],r[1]).add(r[0]),l=tc);const f=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(tc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=tc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(p),m),v=Math.pow(p.distanceToSquared(h),m);y<1e-4&&(y=1),x<1e-4&&(x=y),v<1e-4&&(v=y),cu.initNonuniformCatmullRom(l.x,f.x,p.x,h.x,x,y,v),lu.initNonuniformCatmullRom(l.y,f.y,p.y,h.y,x,y,v),uu.initNonuniformCatmullRom(l.z,f.z,p.z,h.z,x,y,v)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(l.x,f.x,p.x,h.x,this.tension),lu.initCatmullRom(l.y,f.y,p.y,h.y,this.tension),uu.initCatmullRom(l.z,f.z,p.z,h.z,this.tension));return i.set(cu.calc(c),lu.calc(c),uu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ep(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function fy(n,e){const t=1-n;return t*t*e}function hy(n,e){return 2*(1-n)*n*e}function dy(n,e){return n*n*e}function Lo(n,e,t,i){return fy(n,e)+hy(n,t)+dy(n,i)}function py(n,e){const t=1-n;return t*t*t*e}function my(n,e){const t=1-n;return 3*t*t*n*e}function gy(n,e){return 3*(1-n)*n*n*e}function _y(n,e){return n*n*n*e}function Oo(n,e,t,i,r){return py(n,e)+my(n,t)+gy(n,i)+_y(n,r)}class Vg extends Ui{constructor(e=new rt,t=new rt,i=new rt,r=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new rt){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vy extends Ui{constructor(e=new Z,t=new Z,i=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Oo(e,r.x,s.x,o.x,a.x),Oo(e,r.y,s.y,o.y,a.y),Oo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hg extends Ui{constructor(e=new rt,t=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new rt){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new rt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xy extends Ui{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gg extends Ui{constructor(e=new rt,t=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new rt){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Lo(e,r.x,s.x,o.x),Lo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yy extends Ui{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Lo(e,r.x,s.x,o.x),Lo(e,r.y,s.y,o.y),Lo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wg extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new rt){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(ep(a,c.x,l.x,h.x,f.x),ep(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new rt().fromArray(r))}return this}}var tp=Object.freeze({__proto__:null,ArcCurve:ly,CatmullRomCurve3:uy,CubicBezierCurve:Vg,CubicBezierCurve3:vy,EllipseCurve:hh,LineCurve:Hg,LineCurve3:xy,QuadraticBezierCurve:Gg,QuadraticBezierCurve3:yy,SplineCurve:Wg});class Sy extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new tp[r.type]().fromJSON(r))}return this}}class np extends Sy{constructor(e){super(),this.type="Path",this.currentPoint=new rt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hg(this.currentPoint.clone(),new rt(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Gg(this.currentPoint.clone(),new rt(e,t),new rt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Vg(this.currentPoint.clone(),new rt(e,t),new rt(i,r),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wg(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new hh(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ph extends np{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new np().fromJSON(r))}return this}}function Ey(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=$g(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Ay(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let h=-1/0,f=-1/0;for(let p=t;p<r;p+=t){const m=n[p],x=n[p+1];m<a&&(a=m),x<c&&(c=x),m>h&&(h=m),x>f&&(f=x)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return jo(s,o,t,a,c,l,0),o}function $g(n,e,t,i,r){let s;if(r===By(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ip(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ip(o/i|0,n[o],n[o+1],s);return s&&no(s,s.next)&&(Ko(s),s=s.next),s}function cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(no(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ko(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Dy(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Ty(n,i,r,s):My(n)){e.push(c.i,n.i,l.i),Ko(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=by(cs(n),e),jo(n,e,t,i,r,s,2)):o===2&&wy(n,e,t,i,r,s):jo(cs(n),e,t,i,r,s,1);break}}}function My(n){const e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),p=Math.max(r,s,o),m=Math.max(a,c,l);let x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=f&&x.y<=m&&Co(r,a,s,c,o,l,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Ty(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Wt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,p=o.y,m=Math.min(a,c,l),x=Math.min(h,f,p),y=Math.max(a,c,l),v=Math.max(h,f,p),g=Mf(m,x,e,t,i),C=Mf(y,v,e,t,i);let A=n.prevZ,T=n.nextZ;for(;A&&A.z>=g&&T&&T.z<=C;){if(A.x>=m&&A.x<=y&&A.y>=x&&A.y<=v&&A!==r&&A!==o&&Co(a,h,c,f,l,p,A.x,A.y)&&Wt(A.prev,A,A.next)>=0||(A=A.prevZ,T.x>=m&&T.x<=y&&T.y>=x&&T.y<=v&&T!==r&&T!==o&&Co(a,h,c,f,l,p,T.x,T.y)&&Wt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;A&&A.z>=g;){if(A.x>=m&&A.x<=y&&A.y>=x&&A.y<=v&&A!==r&&A!==o&&Co(a,h,c,f,l,p,A.x,A.y)&&Wt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;T&&T.z<=C;){if(T.x>=m&&T.x<=y&&T.y>=x&&T.y<=v&&T!==r&&T!==o&&Co(a,h,c,f,l,p,T.x,T.y)&&Wt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function by(n,e){let t=n;do{const i=t.prev,r=t.next.next;!no(i,r)&&qg(i,t,t.next,r)&&Yo(i,r)&&Yo(r,i)&&(e.push(i.i,t.i,r.i),Ko(t),Ko(t.next),t=n=r),t=t.next}while(t!==n);return cs(t)}function wy(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ny(o,a)){let c=jg(o,a);o=cs(o,o.next),c=cs(c,c.next),jo(o,e,t,i,r,s,0),jo(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Ay(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=$g(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Oy(l))}r.sort(Ry);for(let s=0;s<r.length;s++)t=Cy(r[s],t);return t}function Ry(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Cy(n,e){const t=Py(n,e);if(!t)return e;const i=jg(t,n);return cs(i,i.next),cs(t,t.next)}function Py(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(no(n,t))return t;do{if(no(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Xg(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Yo(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Iy(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Iy(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function Dy(n,e,t,i){let r=n;do r.z===0&&(r.z=Mf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ly(r)}function Ly(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Mf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Oy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xg(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Co(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Xg(n,e,t,i,r,s,o,a)}function Ny(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Uy(n,e)&&(Yo(n,e)&&Yo(e,n)&&Fy(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||no(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function no(n,e){return n.x===e.x&&n.y===e.y}function qg(n,e,t,i){const r=ic(Wt(n,e,t)),s=ic(Wt(n,e,i)),o=ic(Wt(t,i,n)),a=ic(Wt(t,i,e));return!!(r!==s&&o!==a||r===0&&nc(n,t,e)||s===0&&nc(n,i,e)||o===0&&nc(t,n,i)||a===0&&nc(t,e,i))}function nc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ic(n){return n>0?1:n<0?-1:0}function Uy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yo(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function Fy(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jg(n,e){const t=Tf(n.i,n.x,n.y),i=Tf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ip(n,e,t,i){const r=Tf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function By(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class zy{static triangulate(e,t,i=2){return Ey(e,t,i)}}class No{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return No.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];rp(e),sp(i,e);let o=e.length;t.forEach(rp);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,sp(i,t[c]);const a=zy.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function rp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pa extends xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,p=t/c,m=[],x=[],y=[],v=[];for(let g=0;g<h;g++){const C=g*p-o;for(let A=0;A<l;A++){const T=A*f-s;x.push(T,-C,0),y.push(0,0,1),v.push(A/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let C=0;C<a;C++){const A=C+l*g,T=C+l*(g+1),N=C+1+l*(g+1),B=C+1+l*g;m.push(A,T,B),m.push(T,N,B)}this.setIndex(m),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(y,3)),this.setAttribute("uv",new cn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class gi extends xi{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let f=e;const p=(t-e)/r,m=new Z,x=new rt;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const g=s+v/i*o;m.x=f*Math.cos(g),m.y=f*Math.sin(g),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let y=0;y<r;y++){const v=y*(i+1);for(let g=0;g<i;g++){const C=g+v,A=C,T=C+i+1,N=C+i+2,B=C+1;a.push(A,T,B),a.push(T,N,B)}}this.setIndex(a),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(l,3)),this.setAttribute("uv",new cn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jo extends xi{constructor(e=new ph([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new cn(r,3)),this.setAttribute("normal",new cn(s,3)),this.setAttribute("uv",new cn(o,2));function l(h){const f=r.length/3,p=h.extractPoints(t);let m=p.shape;const x=p.holes;No.isClockWise(m)===!1&&(m=m.reverse());for(let v=0,g=x.length;v<g;v++){const C=x[v];No.isClockWise(C)===!0&&(x[v]=C.reverse())}const y=No.triangulateShape(m,x);for(let v=0,g=x.length;v<g;v++){const C=x[v];m=m.concat(C)}for(let v=0,g=m.length;v<g;v++){const C=m[v];r.push(C.x,C.y,0),s.push(0,0,1),o.push(C.x,C.y)}for(let v=0,g=y.length;v<g;v++){const C=y[v],A=C[0]+f,T=C[1]+f,N=C[2]+f;i.push(A,T,N),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ky(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Jo(i,e.curveSegments)}}function ky(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Lc extends xi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new Z,p=new Z,m=[],x=[],y=[],v=[];for(let g=0;g<=i;g++){const C=[],A=g/i;let T=0;g===0&&o===0?T=.5/t:g===i&&c===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const B=N/t;f.x=-e*Math.cos(r+B*s)*Math.sin(o+A*a),f.y=e*Math.cos(o+A*a),f.z=e*Math.sin(r+B*s)*Math.sin(o+A*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),v.push(B+T,1-A),C.push(l++)}h.push(C)}for(let g=0;g<i;g++)for(let C=0;C<t;C++){const A=h[g][C+1],T=h[g][C],N=h[g+1][C],B=h[g+1][C+1];(g!==0||o>0)&&m.push(A,T,B),(g!==i-1||c<Math.PI)&&m.push(T,N,B)}this.setIndex(m),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(y,3)),this.setAttribute("uv",new cn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vy extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hy extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yg extends Fg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gy extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function op(n,e,t,i){const r=Wy(i);switch(t){case Tg:return n*e;case wg:return n*e/r.components*r.byteLength;case ah:return n*e/r.components*r.byteLength;case Ag:return n*e*2/r.components*r.byteLength;case ch:return n*e*2/r.components*r.byteLength;case bg:return n*e*3/r.components*r.byteLength;case fi:return n*e*4/r.components*r.byteLength;case lh:return n*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Zu:return Math.max(n,16)*Math.max(e,8)/4;case Yu:case Ju:return Math.max(n,8)*Math.max(e,8)/2;case Qu:case ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vc:case _f:case vf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rg:case xf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yf:case Sf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(n){switch(n){case or:case Sg:return{byteLength:1,components:1};case Wo:case Eg:case fa:return{byteLength:2,components:1};case sh:case oh:return{byteLength:2,components:4};case os:case rh:case er:return{byteLength:4,components:1};case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);function Kg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $y(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<f.length;m++){const x=f[p],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,x=f.length;m<x;m++){const y=f[m];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
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
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
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
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sS=`#ifdef USE_IRIDESCENCE
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
#endif`,oS=`#ifdef USE_BUMPMAP
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
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mS=`#define PI 3.141592653589793
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
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_S=`vec3 transformedNormal = objectNormal;
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
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ES="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
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
}`,OS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
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
#endif`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
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
#endif`,WS=`struct PhysicalMaterial {
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
}`,$S=`
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tE=`#if defined( USE_POINTS_UV )
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
#endif`,nE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
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
#endif`,cE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
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
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DE=`#ifdef USE_SKINNING
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
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
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
}`,ZE=`#if DEPTH_PACKING == 3200
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
}`,QE=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,rM=`uniform vec3 diffuse;
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
}`,sM=`#include <common>
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,cM=`#define LAMBERT
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
}`,lM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,fM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,dM=`#define PHONG
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
}`,pM=`#define PHONG
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
}`,_M=`#define TOON
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
}`,vM=`#define TOON
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
}`,xM=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,SM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,TM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:jy,alphamap_pars_fragment:Yy,alphatest_fragment:Ky,alphatest_pars_fragment:Jy,aomap_fragment:Zy,aomap_pars_fragment:Qy,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:cS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:uS,color_fragment:fS,color_pars_fragment:hS,color_pars_vertex:dS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:yS,emissivemap_pars_fragment:SS,colorspace_fragment:ES,colorspace_pars_fragment:MS,envmap_fragment:TS,envmap_common_pars_fragment:bS,envmap_pars_fragment:wS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:BS,envmap_vertex:RS,fog_vertex:CS,fog_pars_vertex:PS,fog_fragment:IS,fog_pars_fragment:DS,gradientmap_pars_fragment:LS,lightmap_pars_fragment:OS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:US,lights_pars_begin:FS,lights_toon_fragment:zS,lights_toon_pars_fragment:kS,lights_phong_fragment:VS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:$S,lights_fragment_maps:XS,lights_fragment_end:qS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:KS,logdepthbuf_vertex:JS,map_fragment:ZS,map_pars_fragment:QS,map_particle_fragment:eE,map_particle_pars_fragment:tE,metalnessmap_fragment:nE,metalnessmap_pars_fragment:iE,morphinstance_vertex:rE,morphcolor_vertex:sE,morphnormal_vertex:oE,morphtarget_pars_vertex:aE,morphtarget_vertex:cE,normal_fragment_begin:lE,normal_fragment_maps:uE,normal_pars_fragment:fE,normal_pars_vertex:hE,normal_vertex:dE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:vE,opaque_fragment:xE,packing:yE,premultiplied_alpha_fragment:SE,project_vertex:EE,dithering_fragment:ME,dithering_pars_fragment:TE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:PE,skinbase_vertex:IE,skinning_pars_vertex:DE,skinning_vertex:LE,skinnormal_vertex:OE,specularmap_fragment:NE,specularmap_pars_fragment:UE,tonemapping_fragment:FE,tonemapping_pars_fragment:BE,transmission_fragment:zE,transmission_pars_fragment:kE,uv_pars_fragment:VE,uv_pars_vertex:HE,uv_vertex:GE,worldpos_vertex:WE,background_vert:$E,background_frag:XE,backgroundCube_vert:qE,backgroundCube_frag:jE,cube_vert:YE,cube_frag:KE,depth_vert:JE,depth_frag:ZE,distanceRGBA_vert:QE,distanceRGBA_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:sM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:cM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:fM,meshnormal_frag:hM,meshphong_vert:dM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:_M,meshtoon_frag:vM,points_vert:xM,points_frag:yM,shadow_vert:SM,shadow_frag:EM,sprite_vert:MM,sprite_frag:TM},Ge={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Mi={basic:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([Ge.points,Ge.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([Ge.common,Ge.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([Ge.sprite,Ge.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:In([Ge.common,Ge.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:In([Ge.lights,Ge.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Mi.physical={uniforms:In([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const rc={r:0,b:0,g:0},Gr=new ar,bM=new tn;function wM(n,e,t,i,r,s,o){const a=new Ct(0);let c=s===!0?0:1,l,h,f=null,p=0,m=null;function x(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function y(A){let T=!1;const N=x(A);N===null?g(a,c):N&&N.isColor&&(g(N,1),T=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(A,T){const N=x(T);N&&(N.isCubeTexture||N.mapping===tl)?(h===void 0&&(h=new at(new mn(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:to(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,z,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Gr.copy(T.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(Gr)),h.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,(f!==N||p!==N.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=N,p=N.version,m=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new at(new pa(2,2),new Ir({name:"BackgroundMaterial",uniforms:to(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||p!==N.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=N,p=N.version,m=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,T){A.getRGB(rc,Ug(n)),i.buffers.color.setClear(rc.r,rc.g,rc.b,T,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),c=T,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,g(a,c)},render:y,addToRenderList:v,dispose:C}}function AM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(P,U,ye,D,W){let $=!1;const F=f(D,ye,U);s!==F&&(s=F,l(s.object)),$=m(P,D,ye,W),$&&x(P,D,ye,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(P,U,ye,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function f(P,U,ye){const D=ye.wireframe===!0;let W=i[P.id];W===void 0&&(W={},i[P.id]=W);let $=W[U.id];$===void 0&&($={},W[U.id]=$);let F=$[D];return F===void 0&&(F=p(c()),$[D]=F),F}function p(P){const U=[],ye=[],D=[];for(let W=0;W<t;W++)U[W]=0,ye[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:ye,attributeDivisors:D,object:P,attributes:{},index:null}}function m(P,U,ye,D){const W=s.attributes,$=U.attributes;let F=0;const V=ye.getAttributes();for(const k in V)if(V[k].location>=0){const Ee=W[k];let Ce=$[k];if(Ce===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;F++}return s.attributesNum!==F||s.index!==D}function x(P,U,ye,D){const W={},$=U.attributes;let F=0;const V=ye.getAttributes();for(const k in V)if(V[k].location>=0){let Ee=$[k];Ee===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),W[k]=Ce,F++}s.attributes=W,s.attributesNum=F,s.index=D}function y(){const P=s.newAttributes;for(let U=0,ye=P.length;U<ye;U++)P[U]=0}function v(P){g(P,0)}function g(P,U){const ye=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;ye[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),W[P]!==U&&(n.vertexAttribDivisor(P,U),W[P]=U)}function C(){const P=s.newAttributes,U=s.enabledAttributes;for(let ye=0,D=U.length;ye<D;ye++)U[ye]!==P[ye]&&(n.disableVertexAttribArray(ye),U[ye]=0)}function A(P,U,ye,D,W,$,F){F===!0?n.vertexAttribIPointer(P,U,ye,W,$):n.vertexAttribPointer(P,U,ye,D,W,$)}function T(P,U,ye,D){y();const W=D.attributes,$=ye.getAttributes(),F=U.defaultAttributeValues;for(const V in $){const k=$[V];if(k.location>=0){let Se=W[V];if(Se===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),Se!==void 0){const Ee=Se.normalized,Ce=Se.itemSize,Ne=e.get(Se);if(Ne===void 0)continue;const ft=Ne.buffer,ht=Ne.type,ge=Ne.bytesPerElement,Ue=ht===n.INT||ht===n.UNSIGNED_INT||Se.gpuType===rh;if(Se.isInterleavedBufferAttribute){const Ie=Se.data,Qe=Ie.stride,nt=Se.offset;if(Ie.isInstancedInterleavedBuffer){for(let it=0;it<k.locationSize;it++)g(k.location+it,Ie.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let it=0;it<k.locationSize;it++)v(k.location+it);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let it=0;it<k.locationSize;it++)A(k.location+it,Ce/k.locationSize,ht,Ee,Qe*ge,(nt+Ce/k.locationSize*it)*ge,Ue)}else{if(Se.isInstancedBufferAttribute){for(let Ie=0;Ie<k.locationSize;Ie++)g(k.location+Ie,Se.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ie=0;Ie<k.locationSize;Ie++)v(k.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Ie=0;Ie<k.locationSize;Ie++)A(k.location+Ie,Ce/k.locationSize,ht,Ee,Ce*ge,Ce/k.locationSize*Ie*ge,Ue)}}else if(F!==void 0){const Ee=F[V];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(k.location,Ee);break;case 3:n.vertexAttrib3fv(k.location,Ee);break;case 4:n.vertexAttrib4fv(k.location,Ee);break;default:n.vertexAttrib1fv(k.location,Ee)}}}}C()}function N(){J();for(const P in i){const U=i[P];for(const ye in U){const D=U[ye];for(const W in D)h(D[W].object),delete D[W];delete U[ye]}delete i[P]}}function B(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const ye in U){const D=U[ye];for(const W in D)h(D[W].object),delete D[W];delete U[ye]}delete i[P.id]}function z(P){for(const U in i){const ye=i[U];if(ye[P.id]===void 0)continue;const D=ye[P.id];for(const W in D)h(D[W].object),delete D[W];delete ye[P.id]}}function J(){I(),o=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:J,resetDefaultState:I,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:v,disableUnusedAttributes:C}}function RM(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),t.update(h,i,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];t.update(m,i,1)}function c(l,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)o(l[x],h[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,f);let x=0;for(let y=0;y<f;y++)x+=h[y]*p[y];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function CM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(z){return!(z!==fi&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(z){const J=z===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==or&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==er&&!J)}function c(z){if(z==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:N,maxSamples:B}}function PM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new jr,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const x=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,g=n.get(f);if(!r||x===null||x.length===0||s&&!v)s?h(null):l();else{const C=s?0:i,A=C*4;let T=g.clippingState||null;c.value=T,T=h(x,p,A,m);for(let N=0;N!==A;++N)T[N]=t[N];g.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,x){const y=f!==null?f.length:0;let v=null;if(y!==0){if(v=c.value,x!==!0||v===null){const g=m+y*4,C=p.matrixWorldInverse;a.getNormalMatrix(C),(v===null||v.length<g)&&(v=new Float32Array(g));for(let A=0,T=m;A!==y;++A,T+=4)o.copy(f[A]).applyMatrix4(C,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function IM(n){let e=new WeakMap;function t(o,a){return a===$u?o.mapping=Zs:a===Xu&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$u||a===Xu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new iy(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hs=4,ap=[.125,.215,.35,.446,.526,.582],Zr=20,fu=new Yg,cp=new Ct;let hu=null,du=0,pu=0,mu=!1;const Yr=(1+Math.sqrt(5))/2,Ns=1/Yr,lp=[new Z(-Yr,Ns,0),new Z(Yr,Ns,0),new Z(-Ns,0,Yr),new Z(Ns,0,Yr),new Z(0,Yr,-Ns),new Z(0,Yr,Ns),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],DM=new Z;class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=DM}=s;hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,du,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:fa,format:fi,colorSpace:eo,depthBuffer:!1},r=fp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(s)),this._blurMaterial=OM(s,e,t)}return r}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,fu)}_sceneToCubeUV(e,t,i,r,s){const c=new li(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(cp),f.toneMapping=Rr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const y=new ds({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),v=new at(new mn,y);let g=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,g=!0):(y.color.copy(cp),g=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));const N=this._cubeSize;sc(r,T*N,A>2?N:0,N,N),f.setRenderTarget(r),g&&f.render(v,c),f.render(e,c)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zs||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;sc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,fu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new at(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zr-1),y=s/x,v=isFinite(s)?1+Math.floor(h*y):Zr;v>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zr}`);const g=[];let C=0;for(let z=0;z<Zr;++z){const J=z/y,I=Math.exp(-J*J/2);g.push(I),z===0?C+=I:z<v&&(C+=2*I)}for(let z=0;z<g.length;z++)g[z]=g[z]/C;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=g,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:A}=this;p.dTheta.value=x,p.mipInt.value=A-i;const T=this._sizeLods[r],N=3*T*(r>A-Hs?r-A+Hs:0),B=4*(this._cubeSize-T);sc(t,N,B,3*T,2*T),c.setRenderTarget(t),c.render(f,fu)}}function LM(n){const e=[],t=[],i=[];let r=n;const s=n-Hs+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Hs?c=ap[o-n+Hs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,y=3,v=2,g=1,C=new Float32Array(y*x*m),A=new Float32Array(v*x*m),T=new Float32Array(g*x*m);for(let B=0;B<m;B++){const z=B%3*2/3-1,J=B>2?0:-1,I=[z,J,0,z+2/3,J,0,z+2/3,J+1,0,z,J,0,z+2/3,J+1,0,z,J+1,0];C.set(I,y*x*B),A.set(p,v*x*B);const P=[B,B,B,B,B,B];T.set(P,g*x*B)}const N=new xi;N.setAttribute("position",new Ii(C,y)),N.setAttribute("uv",new Ii(A,v)),N.setAttribute("faceIndex",new Ii(T,g)),e.push(N),r>Hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fp(n,e,t){const i=new as(n,e,t);return i.texture.mapping=tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function OM(n,e,t){const i=new Float32Array(Zr),r=new Z(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function hp(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function dp(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function NM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===$u||c===Xu,h=c===Zs||c===Qs;if(l||h){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new up(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new up(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function UM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FM(n,e,t,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(f){const p=[],m=f.index,x=f.attributes.position;let y=0;if(m!==null){const C=m.array;y=m.version;for(let A=0,T=C.length;A<T;A+=3){const N=C[A+0],B=C[A+1],z=C[A+2];p.push(N,B,B,z,z,N)}}else if(x!==void 0){const C=x.array;y=x.version;for(let A=0,T=C.length/3-1;A<T;A+=3){const N=A+0,B=A+1,z=A+2;p.push(N,B,B,z,z,N)}}else return;const v=new(Pg(p)?Ng:Og)(p,1);v.version=y;const g=s.get(f);g&&e.remove(g),s.set(f,v)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function BM(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,m){n.drawElements(i,m,s,p*o),t.update(m,i,1)}function l(p,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,p*o,x),t.update(m,i,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,x);let v=0;for(let g=0;g<x;g++)v+=m[g];t.update(v,i,1)}function f(p,m,x,y){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<p.length;g++)l(p[g]/o,m[g],y[g]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,y,0,x);let g=0;for(let C=0;C<x;C++)g+=m[C]*y[C];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kM(n,e,t){const i=new WeakMap,r=new Kt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let P=function(){J.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let T=0;x===!0&&(T=1),y===!0&&(T=2),v===!0&&(T=3);let N=a.attributes.position.count*T,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const z=new Float32Array(N*B*4*f),J=new Ig(z,N,B,f);J.type=er,J.needsUpdate=!0;const I=T*4;for(let U=0;U<f;U++){const ye=g[U],D=C[U],W=A[U],$=N*B*4*U;for(let F=0;F<ye.count;F++){const V=F*I;x===!0&&(r.fromBufferAttribute(ye,F),z[$+V+0]=r.x,z[$+V+1]=r.y,z[$+V+2]=r.z,z[$+V+3]=0),y===!0&&(r.fromBufferAttribute(D,F),z[$+V+4]=r.x,z[$+V+5]=r.y,z[$+V+6]=r.z,z[$+V+7]=0),v===!0&&(r.fromBufferAttribute(W,F),z[$+V+8]=r.x,z[$+V+9]=r.y,z[$+V+10]=r.z,z[$+V+11]=W.itemSize===4?r.w:1)}}p={count:f,texture:J,size:new rt(N,B)},i.set(a,p),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let v=0;v<l.length;v++)x+=l[v];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function VM(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Jg=new zn,pp=new kg(1,1),Zg=new Ig,Qg=new zx,e0=new Bg,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function co(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function il(n,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),un(t,i)}}function qM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;vp.set(i),n.uniformMatrix3fv(this.addr,!1,vp),un(t,i)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;_p.set(i),n.uniformMatrix4fv(this.addr,!1,_p),un(t,i)}}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function iT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pp.compareFunction=Cg,s=pp):s=Jg,t.setTexture2D(e||s,r)}function rT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qg,r)}function sT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||e0,r)}function oT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zg,r)}function aT(n){switch(n){case 5126:return HM;case 35664:return GM;case 35665:return WM;case 35666:return $M;case 35674:return XM;case 35675:return qM;case 35676:return jM;case 5124:case 35670:return YM;case 35667:case 35671:return KM;case 35668:case 35672:return JM;case 35669:case 35673:return ZM;case 5125:return QM;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}function cT(n,e){n.uniform1fv(this.addr,e)}function lT(n,e){const t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function uT(n,e){const t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function fT(n,e){const t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function hT(n,e){const t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dT(n,e){const t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pT(n,e){const t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mT(n,e){n.uniform1iv(this.addr,e)}function gT(n,e){n.uniform2iv(this.addr,e)}function _T(n,e){n.uniform3iv(this.addr,e)}function vT(n,e){n.uniform4iv(this.addr,e)}function xT(n,e){n.uniform1uiv(this.addr,e)}function yT(n,e){n.uniform2uiv(this.addr,e)}function ST(n,e){n.uniform3uiv(this.addr,e)}function ET(n,e){n.uniform4uiv(this.addr,e)}function MT(n,e,t){const i=this.cache,r=e.length,s=il(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jg,s[o])}function TT(n,e,t){const i=this.cache,r=e.length,s=il(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qg,s[o])}function bT(n,e,t){const i=this.cache,r=e.length,s=il(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||e0,s[o])}function wT(n,e,t){const i=this.cache,r=e.length,s=il(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zg,s[o])}function AT(n){switch(n){case 5126:return cT;case 35664:return lT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return wT}}class RT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aT(t.type)}}class CT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AT(t.type)}}class PT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function yp(n,e){n.seq.push(e),n.map[e.id]=e}function IT(n,e,t){const i=n.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yp(t,l===void 0?new RT(a,n,e):new CT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new PT(a),yp(t,f)),t=f}}}class xc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DT=37297;let LT=0;function OT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ep=new dt;function NT(n){bt._getMatrix(Ep,bt.workingColorSpace,n);const e=`mat3( ${Ep.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+OT(n.getShaderSource(e),a)}else return s}function UT(n,e){const t=NT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FT(n,e){let t;switch(e){case hx:t="Linear";break;case dx:t="Reinhard";break;case px:t="Cineon";break;case mx:t="ACESFilmic";break;case _x:t="AgX";break;case vx:t="Neutral";break;case gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oc=new Z;function BT(){bt.getLuminanceCoefficients(oc);const n=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function kT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function Tp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(n){return n.replace(HT,WT)}const GT=new Map;function WT(n,e){let t=gt[e];if(t===void 0){const i=GT.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bf(t)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(n){return n.replace($T,XT)}function XT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qs&&(e="ENVMAP_MODE_REFRACTION"),e}function KT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case ux:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function JT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ZT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qT(t),l=jT(t),h=YT(t),f=KT(t),p=JT(t),m=zT(t),x=kT(s),y=r.createProgram();let v,g,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Po).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(v=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Rr?FT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,UT("linearToOutputTexel",t.outputColorSpace),BT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=bf(o),o=Tp(o,t),o=bp(o,t),a=bf(a),a=Tp(a,t),a=bp(a,t),o=wp(o),a=wp(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=C+v+o,T=C+g+a,N=Sp(r,r.VERTEX_SHADER,A),B=Sp(r,r.FRAGMENT_SHADER,T);r.attachShader(y,N),r.attachShader(y,B),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function z(U){if(n.debug.checkShaderErrors){const ye=r.getProgramInfoLog(y)||"",D=r.getShaderInfoLog(N)||"",W=r.getShaderInfoLog(B)||"",$=ye.trim(),F=D.trim(),V=W.trim();let k=!0,Se=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,B);else{const Ee=Mp(r,N,"vertex"),Ce=Mp(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+Ee+`
`+Ce)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||V==="")&&(Se=!1);Se&&(U.diagnostics={runnable:k,programLog:$,vertexShader:{log:F,prefix:v},fragmentShader:{log:V,prefix:g}})}r.deleteShader(N),r.deleteShader(B),J=new xc(r,y),I=VT(r,y)}let J;this.getUniforms=function(){return J===void 0&&z(this),J};let I;this.getAttributes=function(){return I===void 0&&z(this),I};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,DT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=B,this}let QT=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tb(e),t.set(e,i)),i}}class tb{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function nb(n,e,t,i,r,s,o){const a=new Dg,c=new eb,l=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return l.add(I),I===0?"uv":`uv${I}`}function v(I,P,U,ye,D){const W=ye.fog,$=D.geometry,F=I.isMeshStandardMaterial?ye.environment:null,V=(I.isMeshStandardMaterial?t:e).get(I.envMap||F),k=V&&V.mapping===tl?V.image.height:null,Se=x[I.type];I.precision!==null&&(m=r.getMaxPrecision(I.precision),m!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",m,"instead."));const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let ft,ht,ge,Ue;if(Se){const Et=Mi[Se];ft=Et.vertexShader,ht=Et.fragmentShader}else ft=I.vertexShader,ht=I.fragmentShader,c.update(I),ge=c.getVertexShaderID(I),Ue=c.getFragmentShaderID(I);const Ie=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),nt=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,Vt=!!I.map,L=!!I.matcap,M=!!V,te=!!I.aoMap,se=!!I.lightMap,he=!!I.bumpMap,Q=!!I.normalMap,Me=!!I.displacementMap,oe=!!I.emissiveMap,de=!!I.metalnessMap,_e=!!I.roughnessMap,He=I.anisotropy>0,w=I.clearcoat>0,S=I.dispersion>0,H=I.iridescence>0,ne=I.sheen>0,ve=I.transmission>0,ie=He&&!!I.anisotropyMap,Fe=w&&!!I.clearcoatMap,Te=w&&!!I.clearcoatNormalMap,Je=w&&!!I.clearcoatRoughnessMap,Oe=H&&!!I.iridescenceMap,we=H&&!!I.iridescenceThicknessMap,ke=ne&&!!I.sheenColorMap,qe=ne&&!!I.sheenRoughnessMap,Ke=!!I.specularMap,Be=!!I.specularColorMap,st=!!I.specularIntensityMap,G=ve&&!!I.transmissionMap,De=ve&&!!I.thicknessMap,Re=!!I.gradientMap,je=!!I.alphaMap,Ae=I.alphaTest>0,xe=!!I.alphaHash,tt=!!I.extensions;let lt=Rr;I.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(lt=n.toneMapping);const wt={shaderID:Se,shaderType:I.type,shaderName:I.name,vertexShader:ft,fragmentShader:ht,defines:I.defines,customVertexShaderID:ge,customFragmentShaderID:Ue,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:m,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:eo,alphaToCoverage:!!I.alphaToCoverage,map:Vt,matcap:L,envMap:M,envMapMode:M&&V.mapping,envMapCubeUVHeight:k,aoMap:te,lightMap:se,bumpMap:he,normalMap:Q,displacementMap:p&&Me,emissiveMap:oe,normalMapObjectSpace:Q&&I.normalMapType===Mx,normalMapTangentSpace:Q&&I.normalMapType===Ex,metalnessMap:de,roughnessMap:_e,anisotropy:He,anisotropyMap:ie,clearcoat:w,clearcoatMap:Fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Je,dispersion:S,iridescence:H,iridescenceMap:Oe,iridescenceThicknessMap:we,sheen:ne,sheenColorMap:ke,sheenRoughnessMap:qe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:st,transmission:ve,transmissionMap:G,thicknessMap:De,gradientMap:Re,opaque:I.transparent===!1&&I.blending===ir&&I.alphaToCoverage===!1,alphaMap:je,alphaTest:Ae,alphaHash:xe,combine:I.combine,mapUv:Vt&&y(I.map.channel),aoMapUv:te&&y(I.aoMap.channel),lightMapUv:se&&y(I.lightMap.channel),bumpMapUv:he&&y(I.bumpMap.channel),normalMapUv:Q&&y(I.normalMap.channel),displacementMapUv:Me&&y(I.displacementMap.channel),emissiveMapUv:oe&&y(I.emissiveMap.channel),metalnessMapUv:de&&y(I.metalnessMap.channel),roughnessMapUv:_e&&y(I.roughnessMap.channel),anisotropyMapUv:ie&&y(I.anisotropyMap.channel),clearcoatMapUv:Fe&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:Te&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:we&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(I.sheenRoughnessMap.channel),specularMapUv:Ke&&y(I.specularMap.channel),specularColorMapUv:Be&&y(I.specularColorMap.channel),specularIntensityMapUv:st&&y(I.specularIntensityMap.channel),transmissionMapUv:G&&y(I.transmissionMap.channel),thicknessMapUv:De&&y(I.thicknessMap.channel),alphaMapUv:je&&y(I.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Q||He),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(Vt||je),fog:!!W,useFog:I.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:I.flatShading===!0&&I.wireframe===!1,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Qe,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ne,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:I.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Vt&&I.map.isVideoTexture===!0&&bt.getTransfer(I.map.colorSpace)===It,decodeVideoTextureEmissive:oe&&I.emissiveMap.isVideoTexture===!0&&bt.getTransfer(I.emissiveMap.colorSpace)===It,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ti,flipSided:I.side===Bn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:tt&&I.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&I.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(I){const P=[];if(I.shaderID?P.push(I.shaderID):(P.push(I.customVertexShaderID),P.push(I.customFragmentShaderID)),I.defines!==void 0)for(const U in I.defines)P.push(U),P.push(I.defines[U]);return I.isRawShaderMaterial===!1&&(C(P,I),A(P,I),P.push(n.outputColorSpace)),P.push(I.customProgramCacheKey),P.join()}function C(I,P){I.push(P.precision),I.push(P.outputColorSpace),I.push(P.envMapMode),I.push(P.envMapCubeUVHeight),I.push(P.mapUv),I.push(P.alphaMapUv),I.push(P.lightMapUv),I.push(P.aoMapUv),I.push(P.bumpMapUv),I.push(P.normalMapUv),I.push(P.displacementMapUv),I.push(P.emissiveMapUv),I.push(P.metalnessMapUv),I.push(P.roughnessMapUv),I.push(P.anisotropyMapUv),I.push(P.clearcoatMapUv),I.push(P.clearcoatNormalMapUv),I.push(P.clearcoatRoughnessMapUv),I.push(P.iridescenceMapUv),I.push(P.iridescenceThicknessMapUv),I.push(P.sheenColorMapUv),I.push(P.sheenRoughnessMapUv),I.push(P.specularMapUv),I.push(P.specularColorMapUv),I.push(P.specularIntensityMapUv),I.push(P.transmissionMapUv),I.push(P.thicknessMapUv),I.push(P.combine),I.push(P.fogExp2),I.push(P.sizeAttenuation),I.push(P.morphTargetsCount),I.push(P.morphAttributeCount),I.push(P.numDirLights),I.push(P.numPointLights),I.push(P.numSpotLights),I.push(P.numSpotLightMaps),I.push(P.numHemiLights),I.push(P.numRectAreaLights),I.push(P.numDirLightShadows),I.push(P.numPointLightShadows),I.push(P.numSpotLightShadows),I.push(P.numSpotLightShadowsWithMaps),I.push(P.numLightProbes),I.push(P.shadowMapType),I.push(P.toneMapping),I.push(P.numClippingPlanes),I.push(P.numClipIntersection),I.push(P.depthPacking)}function A(I,P){a.disableAll(),P.supportsVertexTextures&&a.enable(0),P.instancing&&a.enable(1),P.instancingColor&&a.enable(2),P.instancingMorph&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),P.dispersion&&a.enable(20),P.batchingColor&&a.enable(21),P.gradientMap&&a.enable(22),I.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),I.push(a.mask)}function T(I){const P=x[I.type];let U;if(P){const ye=Mi[P];U=Qx.clone(ye.uniforms)}else U=I.uniforms;return U}function N(I,P){let U;for(let ye=0,D=h.length;ye<D;ye++){const W=h[ye];if(W.cacheKey===P){U=W,++U.usedTimes;break}}return U===void 0&&(U=new ZT(n,P,I,s),h.push(U)),U}function B(I){if(--I.usedTimes===0){const P=h.indexOf(I);h[P]=h[h.length-1],h.pop(),I.destroy()}}function z(I){c.remove(I)}function J(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:N,releaseProgram:B,releaseShaderCache:z,programs:h,dispose:J}}function ib(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function rb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,m,x,y,v){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:y,group:v},n[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=y,g.group=v),e++,g}function a(f,p,m,x,y,v){const g=o(f,p,m,x,y,v);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function c(f,p,m,x,y,v){const g=o(f,p,m,x,y,v);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function l(f,p){t.length>1&&t.sort(f||rb),i.length>1&&i.sort(p||Rp),r.length>1&&r.sort(p||Rp)}function h(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function sb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cp,n.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ct};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cb=0;function lb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ub(n){const e=new ob,t=ab(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);const r=new Z,s=new tn,o=new tn;function a(l){let h=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,x=0,y=0,v=0,g=0,C=0,A=0,T=0,N=0,B=0,z=0;l.sort(lb);for(let I=0,P=l.length;I<P;I++){const U=l[I],ye=U.color,D=U.intensity,W=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=ye.r*D,f+=ye.g*D,p+=ye.b*D;else if(U.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],D);z++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,k=t.get(U);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=U.shadow.matrix,C++}i.directional[m]=F,m++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(ye).multiplyScalar(D),F.distance=W,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[y]=F;const V=U.shadow;if(U.map&&(i.spotLightMap[N]=U.map,N++,V.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[y]=V.matrix,U.castShadow){const k=t.get(U);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=$,T++}y++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(ye).multiplyScalar(D),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=F,v++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const V=U.shadow,k=t.get(U);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=$,i.pointShadowMatrix[x]=U.shadow.matrix,A++}i.point[x]=F,x++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(D),F.groundColor.copy(U.groundColor).multiplyScalar(D),i.hemi[g]=F,g++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const J=i.hash;(J.directionalLength!==m||J.pointLength!==x||J.spotLength!==y||J.rectAreaLength!==v||J.hemiLength!==g||J.numDirectionalShadows!==C||J.numPointShadows!==A||J.numSpotShadows!==T||J.numSpotMaps!==N||J.numLightProbes!==z)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+N-B,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=z,J.directionalLength=m,J.pointLength=x,J.spotLength=y,J.rectAreaLength=v,J.hemiLength=g,J.numDirectionalShadows=C,J.numPointShadows=A,J.numSpotShadows=T,J.numSpotMaps=N,J.numLightProbes=z,i.version=cb++)}function c(l,h){let f=0,p=0,m=0,x=0,y=0;const v=h.matrixWorldInverse;for(let g=0,C=l.length;g<C;g++){const A=l[g];if(A.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),f++}else if(A.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),m++}else if(A.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(v),o.identity(),s.copy(A.matrixWorld),s.premultiply(v),o.extractRotation(s),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(v),p++}else if(A.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(v),y++}}}return{setup:a,setupView:c,state:i}}function Pp(n){const e=new ub(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function fb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pp(n),e.set(r,[a])):s>=o.length?(a=new Pp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
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
}`;function pb(n,e,t){let i=new zg;const r=new rt,s=new rt,o=new Kt,a=new Vy({depthPacking:Sx}),c=new Hy,l={},h=t.maxTextureSize,f={[Pr]:Bn,[Bn]:Pr,[ti]:ti},p=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:hb,fragmentShader:db}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new xi;x.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let g=this.type;this.render=function(B,z,J){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const I=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),ye=n.state;ye.setBlending(Ar),ye.buffers.depth.getReversed()?ye.buffers.color.setClear(0,0,0,0):ye.buffers.color.setClear(1,1,1,1),ye.buffers.depth.setTest(!0),ye.setScissorTest(!1);const D=g!==Xi&&this.type===Xi,W=g===Xi&&this.type!==Xi;for(let $=0,F=B.length;$<F;$++){const V=B[$],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Se=k.getFrameExtents();if(r.multiply(Se),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Se.x),r.x=s.x*Se.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Se.y),r.y=s.y*Se.y,k.mapSize.y=s.y)),k.map===null||D===!0||W===!0){const Ce=this.type!==Xi?{minFilter:hi,magFilter:hi}:{};k.map!==null&&k.map.dispose(),k.map=new as(r.x,r.y,Ce),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Ee=k.getViewportCount();for(let Ce=0;Ce<Ee;Ce++){const Ne=k.getViewport(Ce);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),ye.viewport(o),k.updateMatrices(V,Ce),i=k.getFrustum(),T(z,J,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Xi&&C(k,J),k.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(I,P,U)};function C(B,z){const J=e.update(y);p.defines.VSM_SAMPLES!==B.blurSamples&&(p.defines.VSM_SAMPLES=B.blurSamples,m.defines.VSM_SAMPLES=B.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new as(r.x,r.y)),p.uniforms.shadow_pass.value=B.map.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(z,null,J,p,y,null),m.uniforms.shadow_pass.value=B.mapPass.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(z,null,J,m,y,null)}function A(B,z,J,I){let P=null;const U=J.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(U!==void 0)P=U;else if(P=J.isPointLight===!0?c:a,n.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ye=P.uuid,D=z.uuid;let W=l[ye];W===void 0&&(W={},l[ye]=W);let $=W[D];$===void 0&&($=P.clone(),W[D]=$,z.addEventListener("dispose",N)),P=$}if(P.visible=z.visible,P.wireframe=z.wireframe,I===Xi?P.side=z.shadowSide!==null?z.shadowSide:z.side:P.side=z.shadowSide!==null?z.shadowSide:f[z.side],P.alphaMap=z.alphaMap,P.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,P.map=z.map,P.clipShadows=z.clipShadows,P.clippingPlanes=z.clippingPlanes,P.clipIntersection=z.clipIntersection,P.displacementMap=z.displacementMap,P.displacementScale=z.displacementScale,P.displacementBias=z.displacementBias,P.wireframeLinewidth=z.wireframeLinewidth,P.linewidth=z.linewidth,J.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ye=n.properties.get(P);ye.light=J}return P}function T(B,z,J,I,P){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&P===Xi)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,B.matrixWorld);const D=e.update(B),W=B.material;if(Array.isArray(W)){const $=D.groups;for(let F=0,V=$.length;F<V;F++){const k=$[F],Se=W[k.materialIndex];if(Se&&Se.visible){const Ee=A(B,Se,I,P);B.onBeforeShadow(n,B,z,J,D,Ee,k),n.renderBufferDirect(J,null,D,Ee,B,k),B.onAfterShadow(n,B,z,J,D,Ee,k)}}}else if(W.visible){const $=A(B,W,I,P);B.onBeforeShadow(n,B,z,J,D,$,null),n.renderBufferDirect(J,null,D,$,B,null),B.onAfterShadow(n,B,z,J,D,$,null)}}const ye=B.children;for(let D=0,W=ye.length;D<W;D++)T(ye[D],z,J,I,P)}function N(B){B.target.removeEventListener("dispose",N);for(const J in l){const I=l[J],P=B.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}const mb={[Bu]:zu,[ku]:Gu,[Vu]:Wu,[Js]:Hu,[zu]:Bu,[Gu]:ku,[Wu]:Vu,[Hu]:Js};function gb(n,e){function t(){let G=!1;const De=new Kt;let Re=null;const je=new Kt(0,0,0,0);return{setMask:function(Ae){Re!==Ae&&!G&&(n.colorMask(Ae,Ae,Ae,Ae),Re=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,xe,tt,lt,wt){wt===!0&&(Ae*=lt,xe*=lt,tt*=lt),De.set(Ae,xe,tt,lt),je.equals(De)===!1&&(n.clearColor(Ae,xe,tt,lt),je.copy(De))},reset:function(){G=!1,Re=null,je.set(-1,0,0,0)}}}function i(){let G=!1,De=!1,Re=null,je=null,Ae=null;return{setReversed:function(xe){if(De!==xe){const tt=e.get("EXT_clip_control");xe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const lt=Ae;Ae=null,this.setClear(lt)}},getReversed:function(){return De},setTest:function(xe){xe?Ie(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(xe){Re!==xe&&!G&&(n.depthMask(xe),Re=xe)},setFunc:function(xe){if(De&&(xe=mb[xe]),je!==xe){switch(xe){case Bu:n.depthFunc(n.NEVER);break;case zu:n.depthFunc(n.ALWAYS);break;case ku:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case Vu:n.depthFunc(n.EQUAL);break;case Hu:n.depthFunc(n.GEQUAL);break;case Gu:n.depthFunc(n.GREATER);break;case Wu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}je=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Ae!==xe&&(De&&(xe=1-xe),n.clearDepth(xe),Ae=xe)},reset:function(){G=!1,Re=null,je=null,Ae=null,De=!1}}}function r(){let G=!1,De=null,Re=null,je=null,Ae=null,xe=null,tt=null,lt=null,wt=null;return{setTest:function(Et){G||(Et?Ie(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Et){De!==Et&&!G&&(n.stencilMask(Et),De=Et)},setFunc:function(Et,Nn,kn){(Re!==Et||je!==Nn||Ae!==kn)&&(n.stencilFunc(Et,Nn,kn),Re=Et,je=Nn,Ae=kn)},setOp:function(Et,Nn,kn){(xe!==Et||tt!==Nn||lt!==kn)&&(n.stencilOp(Et,Nn,kn),xe=Et,tt=Nn,lt=kn)},setLocked:function(Et){G=Et},setClear:function(Et){wt!==Et&&(n.clearStencil(Et),wt=Et)},reset:function(){G=!1,De=null,Re=null,je=null,Ae=null,xe=null,tt=null,lt=null,wt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},p=new WeakMap,m=[],x=null,y=!1,v=null,g=null,C=null,A=null,T=null,N=null,B=null,z=new Ct(0,0,0),J=0,I=!1,P=null,U=null,ye=null,D=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=V>=2);let Se=null,Ee={};const Ce=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),ft=new Kt().fromArray(Ce),ht=new Kt().fromArray(Ne);function ge(G,De,Re,je){const Ae=new Uint8Array(4),xe=n.createTexture();n.bindTexture(G,xe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Re;tt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(De+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return xe}const Ue={};Ue[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ie(n.DEPTH_TEST),o.setFunc(Js),he(!1),Q(Id),Ie(n.CULL_FACE),te(Ar);function Ie(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Qe(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function nt(G,De){return f[G]!==De?(n.bindFramebuffer(G,De),f[G]=De,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=De),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=De),!0):!1}function it(G,De){let Re=m,je=!1;if(G){Re=p.get(De),Re===void 0&&(Re=[],p.set(De,Re));const Ae=G.textures;if(Re.length!==Ae.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,tt=Ae.length;xe<tt;xe++)Re[xe]=n.COLOR_ATTACHMENT0+xe;Re.length=Ae.length,je=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,je=!0);je&&n.drawBuffers(Re)}function Vt(G){return x!==G?(n.useProgram(G),x=G,!0):!1}const L={[Jr]:n.FUNC_ADD,[qv]:n.FUNC_SUBTRACT,[jv]:n.FUNC_REVERSE_SUBTRACT};L[Yv]=n.MIN,L[Kv]=n.MAX;const M={[Jv]:n.ZERO,[Zv]:n.ONE,[Qv]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[sx]:n.SRC_ALPHA_SATURATE,[ix]:n.DST_COLOR,[tx]:n.DST_ALPHA,[ex]:n.ONE_MINUS_SRC_COLOR,[Fu]:n.ONE_MINUS_SRC_ALPHA,[rx]:n.ONE_MINUS_DST_COLOR,[nx]:n.ONE_MINUS_DST_ALPHA,[ox]:n.CONSTANT_COLOR,[ax]:n.ONE_MINUS_CONSTANT_COLOR,[cx]:n.CONSTANT_ALPHA,[lx]:n.ONE_MINUS_CONSTANT_ALPHA};function te(G,De,Re,je,Ae,xe,tt,lt,wt,Et){if(G===Ar){y===!0&&(Qe(n.BLEND),y=!1);return}if(y===!1&&(Ie(n.BLEND),y=!0),G!==Xv){if(G!==v||Et!==I){if((g!==Jr||T!==Jr)&&(n.blendEquation(n.FUNC_ADD),g=Jr,T=Jr),Et)switch(G){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.ONE,n.ONE);break;case Dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ld:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}C=null,A=null,N=null,B=null,z.set(0,0,0),J=0,v=G,I=Et}return}Ae=Ae||De,xe=xe||Re,tt=tt||je,(De!==g||Ae!==T)&&(n.blendEquationSeparate(L[De],L[Ae]),g=De,T=Ae),(Re!==C||je!==A||xe!==N||tt!==B)&&(n.blendFuncSeparate(M[Re],M[je],M[xe],M[tt]),C=Re,A=je,N=xe,B=tt),(lt.equals(z)===!1||wt!==J)&&(n.blendColor(lt.r,lt.g,lt.b,wt),z.copy(lt),J=wt),v=G,I=!1}function se(G,De){G.side===ti?Qe(n.CULL_FACE):Ie(n.CULL_FACE);let Re=G.side===Bn;De&&(Re=!Re),he(Re),G.blending===ir&&G.transparent===!1?te(Ar):te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const je=G.stencilWrite;a.setTest(je),je&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){P!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),P=G)}function Q(G){G!==Gv?(Ie(n.CULL_FACE),G!==U&&(G===Id?n.cullFace(n.BACK):G===Wv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),U=G}function Me(G){G!==ye&&(F&&n.lineWidth(G),ye=G)}function oe(G,De,Re){G?(Ie(n.POLYGON_OFFSET_FILL),(D!==De||W!==Re)&&(n.polygonOffset(De,Re),D=De,W=Re)):Qe(n.POLYGON_OFFSET_FILL)}function de(G){G?Ie(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function _e(G){G===void 0&&(G=n.TEXTURE0+$-1),Se!==G&&(n.activeTexture(G),Se=G)}function He(G,De,Re){Re===void 0&&(Se===null?Re=n.TEXTURE0+$-1:Re=Se);let je=Ee[Re];je===void 0&&(je={type:void 0,texture:void 0},Ee[Re]=je),(je.type!==G||je.texture!==De)&&(Se!==Re&&(n.activeTexture(Re),Se=Re),n.bindTexture(G,De||Ue[G]),je.type=G,je.texture=De)}function w(){const G=Ee[Se];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(G){ft.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ft.copy(G))}function qe(G){ht.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ht.copy(G))}function Ke(G,De){let Re=l.get(De);Re===void 0&&(Re=new WeakMap,l.set(De,Re));let je=Re.get(G);je===void 0&&(je=n.getUniformBlockIndex(De,G.name),Re.set(G,je))}function Be(G,De){const je=l.get(De).get(G);c.get(De)!==je&&(n.uniformBlockBinding(De,je,G.__bindingPointIndex),c.set(De,je))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Se=null,Ee={},f={},p=new WeakMap,m=[],x=null,y=!1,v=null,g=null,C=null,A=null,T=null,N=null,B=null,z=new Ct(0,0,0),J=0,I=!1,P=null,U=null,ye=null,D=null,W=null,ft.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ie,disable:Qe,bindFramebuffer:nt,drawBuffers:it,useProgram:Vt,setBlending:te,setMaterial:se,setFlipSided:he,setCullFace:Q,setLineWidth:Me,setPolygonOffset:oe,setScissorTest:de,activeTexture:_e,bindTexture:He,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:Oe,texImage3D:we,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:Te,texStorage3D:Je,texSubImage2D:ne,texSubImage3D:ve,compressedTexSubImage2D:ie,compressedTexSubImage3D:Fe,scissor:ke,viewport:qe,reset:st}}function _b(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return m?new OffscreenCanvas(w,S):Dc("canvas")}function y(w,S,H){let ne=1;const ve=He(w);if((ve.width>H||ve.height>H)&&(ne=H/Math.max(ve.width,ve.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(ne*ve.width),Fe=Math.floor(ne*ve.height);f===void 0&&(f=x(ie,Fe));const Te=S?x(ie,Fe):f;return Te.width=ie,Te.height=Fe,Te.getContext("2d").drawImage(w,0,0,ie,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ie+"x"+Fe+")."),Te}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),w;return w}function v(w){return w.generateMipmaps}function g(w){n.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(w,S,H,ne,ve=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=S;if(S===n.RED&&(H===n.FLOAT&&(ie=n.R32F),H===n.HALF_FLOAT&&(ie=n.R16F),H===n.UNSIGNED_BYTE&&(ie=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.R8UI),H===n.UNSIGNED_SHORT&&(ie=n.R16UI),H===n.UNSIGNED_INT&&(ie=n.R32UI),H===n.BYTE&&(ie=n.R8I),H===n.SHORT&&(ie=n.R16I),H===n.INT&&(ie=n.R32I)),S===n.RG&&(H===n.FLOAT&&(ie=n.RG32F),H===n.HALF_FLOAT&&(ie=n.RG16F),H===n.UNSIGNED_BYTE&&(ie=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.RG8UI),H===n.UNSIGNED_SHORT&&(ie=n.RG16UI),H===n.UNSIGNED_INT&&(ie=n.RG32UI),H===n.BYTE&&(ie=n.RG8I),H===n.SHORT&&(ie=n.RG16I),H===n.INT&&(ie=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),H===n.UNSIGNED_INT&&(ie=n.RGB32UI),H===n.BYTE&&(ie=n.RGB8I),H===n.SHORT&&(ie=n.RGB16I),H===n.INT&&(ie=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),H===n.UNSIGNED_INT&&(ie=n.RGBA32UI),H===n.BYTE&&(ie=n.RGBA8I),H===n.SHORT&&(ie=n.RGBA16I),H===n.INT&&(ie=n.RGBA32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),S===n.RGBA){const Fe=ve?Pc:bt.getTransfer(ne);H===n.FLOAT&&(ie=n.RGBA32F),H===n.HALF_FLOAT&&(ie=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ie=Fe===It?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(w,S){let H;return w?S===null||S===os||S===$o?H=n.DEPTH24_STENCIL8:S===er?H=n.DEPTH32F_STENCIL8:S===Wo&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===os||S===$o?H=n.DEPTH_COMPONENT24:S===er?H=n.DEPTH_COMPONENT32F:S===Wo&&(H=n.DEPTH_COMPONENT16),H}function N(w,S){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==hi&&w.minFilter!==Ai?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function B(w){const S=w.target;S.removeEventListener("dispose",B),J(S),S.isVideoTexture&&h.delete(S)}function z(w){const S=w.target;S.removeEventListener("dispose",z),P(S)}function J(w){const S=i.get(w);if(S.__webglInit===void 0)return;const H=w.source,ne=p.get(H);if(ne){const ve=ne[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&I(w),Object.keys(ne).length===0&&p.delete(H)}i.remove(w)}function I(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const H=w.source,ne=p.get(H);delete ne[S.__cacheKey],o.memory.textures--}function P(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ve=0;ve<S.__webglFramebuffer[ne].length;ve++)n.deleteFramebuffer(S.__webglFramebuffer[ne][ve]);else n.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[ne]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=w.textures;for(let ne=0,ve=H.length;ne<ve;ne++){const ie=i.get(H[ne]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(H[ne])}i.remove(w)}let U=0;function ye(){U=0}function D(){const w=U;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),U+=1,w}function W(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function $(w,S){const H=i.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(H,w,S);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function F(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ue(H,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function V(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ue(H,w,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function k(w,S){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Ie(H,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const Se={[qu]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[ju]:n.MIRRORED_REPEAT},Ee={[hi]:n.NEAREST,[xx]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[Ai]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},Ce={[Tx]:n.NEVER,[Px]:n.ALWAYS,[bx]:n.LESS,[Cg]:n.LEQUAL,[wx]:n.EQUAL,[Cx]:n.GEQUAL,[Ax]:n.GREATER,[Rx]:n.NOTEQUAL};function Ne(w,S){if(S.type===er&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ai||S.magFilter===Fl||S.magFilter===Fa||S.magFilter===ts||S.minFilter===Ai||S.minFilter===Fl||S.minFilter===Fa||S.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Se[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ee[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hi||S.minFilter!==Fa&&S.minFilter!==ts||S.type===er&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ft(w,S){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",B));const ne=S.source;let ve=p.get(ne);ve===void 0&&(ve={},p.set(ne,ve));const ie=W(S);if(ie!==w.__cacheKey){ve[ie]===void 0&&(ve[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ve[ie].usedTimes++;const Fe=ve[w.__cacheKey];Fe!==void 0&&(ve[w.__cacheKey].usedTimes--,Fe.usedTimes===0&&I(S)),w.__cacheKey=ie,w.__webglTexture=ve[ie].texture}return H}function ht(w,S,H){return Math.floor(Math.floor(w/H)/S)}function ge(w,S,H,ne){const ie=w.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,ne,S.data);else{ie.sort((we,ke)=>we.start-ke.start);let Fe=0;for(let we=1;we<ie.length;we++){const ke=ie[Fe],qe=ie[we],Ke=ke.start+ke.count,Be=ht(qe.start,S.width,4),st=ht(ke.start,S.width,4);qe.start<=Ke+1&&Be===st&&ht(qe.start+qe.count-1,S.width,4)===Be?ke.count=Math.max(ke.count,qe.start+qe.count-ke.start):(++Fe,ie[Fe]=qe)}ie.length=Fe+1;const Te=n.getParameter(n.UNPACK_ROW_LENGTH),Je=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let we=0,ke=ie.length;we<ke;we++){const qe=ie[we],Ke=Math.floor(qe.start/4),Be=Math.ceil(qe.count/4),st=Ke%S.width,G=Math.floor(Ke/S.width),De=Be,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,st,G,De,Re,H,ne,S.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Ue(w,S,H){let ne=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=n.TEXTURE_3D);const ve=ft(w,S),ie=S.source;t.bindTexture(ne,w.__webglTexture,n.TEXTURE0+H);const Fe=i.get(ie);if(ie.version!==Fe.__version||ve===!0){t.activeTexture(n.TEXTURE0+H);const Te=bt.getPrimaries(bt.workingColorSpace),Je=S.colorSpace===Er?null:bt.getPrimaries(S.colorSpace),Oe=S.colorSpace===Er||Te===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let we=y(S.image,!1,r.maxTextureSize);we=_e(S,we);const ke=s.convert(S.format,S.colorSpace),qe=s.convert(S.type);let Ke=A(S.internalFormat,ke,qe,S.colorSpace,S.isVideoTexture);Ne(ne,S);let Be;const st=S.mipmaps,G=S.isVideoTexture!==!0,De=Fe.__version===void 0||ve===!0,Re=ie.dataReady,je=N(S,we);if(S.isDepthTexture)Ke=T(S.format===qo,S.type),De&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ke,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,Ke,we.width,we.height,0,ke,qe,null));else if(S.isDataTexture)if(st.length>0){G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,st[0].width,st[0].height);for(let Ae=0,xe=st.length;Ae<xe;Ae++)Be=st[Ae],G?Re&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,ke,qe,Be.data);S.generateMipmaps=!1}else G?(De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height),Re&&ge(S,we,ke,qe)):t.texImage2D(n.TEXTURE_2D,0,Ke,we.width,we.height,0,ke,qe,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,st[0].width,st[0].height,we.depth);for(let Ae=0,xe=st.length;Ae<xe;Ae++)if(Be=st[Ae],S.format!==fi)if(ke!==null)if(G){if(Re)if(S.layerUpdates.size>0){const tt=op(Be.width,Be.height,S.format,S.type);for(const lt of S.layerUpdates){const wt=Be.data.subarray(lt*tt/Be.data.BYTES_PER_ELEMENT,(lt+1)*tt/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,lt,Be.width,Be.height,1,ke,wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,we.depth,ke,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ae,Ke,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,we.depth,ke,qe,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ae,Ke,Be.width,Be.height,we.depth,0,ke,qe,Be.data)}else{G&&De&&t.texStorage2D(n.TEXTURE_2D,je,Ke,st[0].width,st[0].height);for(let Ae=0,xe=st.length;Ae<xe;Ae++)Be=st[Ae],S.format!==fi?ke!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(n.TEXTURE_2D,Ae,Ke,Be.width,Be.height,0,ke,qe,Be.data)}else if(S.isDataArrayTexture)if(G){if(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ke,we.width,we.height,we.depth),Re)if(S.layerUpdates.size>0){const Ae=op(we.width,we.height,S.format,S.type);for(const xe of S.layerUpdates){const tt=we.data.subarray(xe*Ae/we.data.BYTES_PER_ELEMENT,(xe+1)*Ae/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,we.width,we.height,1,ke,qe,tt)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ke,qe,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,ke,qe,we.data);else if(S.isData3DTexture)G?(De&&t.texStorage3D(n.TEXTURE_3D,je,Ke,we.width,we.height,we.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ke,qe,we.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,ke,qe,we.data);else if(S.isFramebufferTexture){if(De)if(G)t.texStorage2D(n.TEXTURE_2D,je,Ke,we.width,we.height);else{let Ae=we.width,xe=we.height;for(let tt=0;tt<je;tt++)t.texImage2D(n.TEXTURE_2D,tt,Ke,Ae,xe,0,ke,qe,null),Ae>>=1,xe>>=1}}else if(st.length>0){if(G&&De){const Ae=He(st[0]);t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height)}for(let Ae=0,xe=st.length;Ae<xe;Ae++)Be=st[Ae],G?Re&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ke,qe,Be):t.texImage2D(n.TEXTURE_2D,Ae,Ke,ke,qe,Be);S.generateMipmaps=!1}else if(G){if(De){const Ae=He(we);t.texStorage2D(n.TEXTURE_2D,je,Ke,Ae.width,Ae.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,qe,we)}else t.texImage2D(n.TEXTURE_2D,0,Ke,ke,qe,we);v(S)&&g(ne),Fe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ie(w,S,H){if(S.image.length!==6)return;const ne=ft(w,S),ve=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);const ie=i.get(ve);if(ve.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const Fe=bt.getPrimaries(bt.workingColorSpace),Te=S.colorSpace===Er?null:bt.getPrimaries(S.colorSpace),Je=S.colorSpace===Er||Fe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,ke=[];for(let xe=0;xe<6;xe++)!Oe&&!we?ke[xe]=y(S.image[xe],!0,r.maxCubemapSize):ke[xe]=we?S.image[xe].image:S.image[xe],ke[xe]=_e(S,ke[xe]);const qe=ke[0],Ke=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),st=A(S.internalFormat,Ke,Be,S.colorSpace),G=S.isVideoTexture!==!0,De=ie.__version===void 0||ne===!0,Re=ve.dataReady;let je=N(S,qe);Ne(n.TEXTURE_CUBE_MAP,S);let Ae;if(Oe){G&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,st,qe.width,qe.height);for(let xe=0;xe<6;xe++){Ae=ke[xe].mipmaps;for(let tt=0;tt<Ae.length;tt++){const lt=Ae[tt];S.format!==fi?Ke!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,lt.width,lt.height,Ke,lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,lt.width,lt.height,Ke,Be,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,st,lt.width,lt.height,0,Ke,Be,lt.data)}}}else{if(Ae=S.mipmaps,G&&De){Ae.length>0&&je++;const xe=He(ke[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ke[xe].width,ke[xe].height,Ke,Be,ke[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,ke[xe].width,ke[xe].height,0,Ke,Be,ke[xe].data);for(let tt=0;tt<Ae.length;tt++){const wt=Ae[tt].image[xe].image;G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,wt.width,wt.height,Ke,Be,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,st,wt.width,wt.height,0,Ke,Be,wt.data)}}else{G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ke,Be,ke[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ke,Be,ke[xe]);for(let tt=0;tt<Ae.length;tt++){const lt=Ae[tt];G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,Ke,Be,lt.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,st,Ke,Be,lt.image[xe])}}}v(S)&&g(n.TEXTURE_CUBE_MAP),ie.__version=ve.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Qe(w,S,H,ne,ve,ie){const Fe=s.convert(H.format,H.colorSpace),Te=s.convert(H.type),Je=A(H.internalFormat,Fe,Te,H.colorSpace),Oe=i.get(S),we=i.get(H);if(we.__renderTarget=S,!Oe.__hasExternalTextures){const ke=Math.max(1,S.width>>ie),qe=Math.max(1,S.height>>ie);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,ie,Je,ke,qe,S.depth,0,Fe,Te,null):t.texImage2D(ve,ie,Je,ke,qe,0,Fe,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ve,we.__webglTexture,0,Me(S)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ve,we.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(w,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const ne=S.depthTexture,ve=ne&&ne.isDepthTexture?ne.type:null,ie=T(S.stencilBuffer,ve),Fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=Me(S);oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ie,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ie,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,w)}else{const ne=S.textures;for(let ve=0;ve<ne.length;ve++){const ie=ne[ve],Fe=s.convert(ie.format,ie.colorSpace),Te=s.convert(ie.type),Je=A(ie.internalFormat,Fe,Te,ie.colorSpace),Oe=Me(S);H&&oe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Je,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Je,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Je,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ve=ne.__webglTexture,ie=Me(S);if(S.depthTexture.format===Xo)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(S.depthTexture.format===qo)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Vt(w){const S=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const ne=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const ve=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",ve)};ne.addEventListener("dispose",ve),S.__depthDisposeCallback=ve}S.__boundDepthTexture=ne}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const ne=w.texture.mipmaps;ne&&ne.length>0?it(S.__webglFramebuffer[0],w):it(S.__webglFramebuffer,w)}else if(H){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=n.createRenderbuffer(),nt(S.__webglDepthbuffer[ne],w,!1);else{const ve=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ie)}}else{const ne=w.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),nt(S.__webglDepthbuffer,w,!1);else{const ve=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(w,S,H){const ne=i.get(w);S!==void 0&&Qe(ne.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Vt(w)}function M(w){const S=w.texture,H=i.get(w),ne=i.get(S);w.addEventListener("dispose",z);const ve=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Fe=ve.length>1;if(Fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=S.version,o.memory.textures++),ie){H.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Te]=[];for(let Je=0;Je<S.mipmaps.length;Je++)H.__webglFramebuffer[Te][Je]=n.createFramebuffer()}else H.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Te=0;Te<S.mipmaps.length;Te++)H.__webglFramebuffer[Te]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let Te=0,Je=ve.length;Te<Je;Te++){const Oe=i.get(ve[Te]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&oe(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Je=ve[Te];H.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Te]);const Oe=s.convert(Je.format,Je.colorSpace),we=s.convert(Je.type),ke=A(Je.internalFormat,Oe,we,Je.colorSpace,w.isXRRenderTarget===!0),qe=Me(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ke,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,H.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,S);for(let Te=0;Te<6;Te++)if(S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[Te][Je],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je);else Qe(H.__webglFramebuffer[Te],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);v(S)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Te=0,Je=ve.length;Te<Je;Te++){const Oe=ve[Te],we=i.get(Oe);let ke=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ke=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ke,we.__webglTexture),Ne(ke,Oe),Qe(H.__webglFramebuffer,w,Oe,n.COLOR_ATTACHMENT0+Te,ke,0),v(Oe)&&g(ke)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Te=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ne.__webglTexture),Ne(Te,S),S.mipmaps&&S.mipmaps.length>0)for(let Je=0;Je<S.mipmaps.length;Je++)Qe(H.__webglFramebuffer[Je],w,S,n.COLOR_ATTACHMENT0,Te,Je);else Qe(H.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,Te,0);v(S)&&g(Te),t.unbindTexture()}w.depthBuffer&&Vt(w)}function te(w){const S=w.textures;for(let H=0,ne=S.length;H<ne;H++){const ve=S[H];if(v(ve)){const ie=C(w),Fe=i.get(ve).__webglTexture;t.bindTexture(ie,Fe),g(ie),t.unbindTexture()}}}const se=[],he=[];function Q(w){if(w.samples>0){if(oe(w)===!1){const S=w.textures,H=w.width,ne=w.height;let ve=n.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(w),Te=S.length>1;if(Te)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Je=w.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const we=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,ve,n.NEAREST),c===!0&&(se.length=0,he.length=0,se.push(n.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(ie),he.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const we=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Me(w){return Math.min(r.maxSamples,w.samples)}function oe(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function _e(w,S){const H=w.colorSpace,ne=w.format,ve=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==eo&&H!==Er&&(bt.getTransfer(H)===It?(ne!==fi||ve!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=ye,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=L,this.setupRenderTarget=M,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=oe}function vb(n,e){function t(i,r=Er){let s;const o=bt.getTransfer(r);if(i===or)return n.UNSIGNED_BYTE;if(i===sh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sg)return n.BYTE;if(i===Eg)return n.SHORT;if(i===Wo)return n.UNSIGNED_SHORT;if(i===rh)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===er)return n.FLOAT;if(i===fa)return n.HALF_FLOAT;if(i===Tg)return n.ALPHA;if(i===bg)return n.RGB;if(i===fi)return n.RGBA;if(i===Xo)return n.DEPTH_COMPONENT;if(i===qo)return n.DEPTH_STENCIL;if(i===wg)return n.RED;if(i===ah)return n.RED_INTEGER;if(i===Ag)return n.RG;if(i===ch)return n.RG_INTEGER;if(i===lh)return n.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yu||i===Ku||i===Ju||i===Zu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qu||i===ef||i===tf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qu||i===ef)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nf||i===rf||i===sf||i===of||i===af||i===cf||i===lf||i===uf||i===ff||i===hf||i===df||i===pf||i===mf||i===gf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===of)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===af)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ff)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===df)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gf)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===_f||i===vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vc)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rg||i===xf||i===yf||i===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class t0 extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yb=`
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

}`;class Sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new t0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ir({vertexShader:xb,fragmentShader:yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eb extends oo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,x=null;const y=new Sb,v={},g=t.getContextAttributes();let C=null,A=null;const T=[],N=[],B=new rt;let z=null;const J=new li;J.viewport=new Kt;const I=new li;I.viewport=new Kt;const P=[J,I],U=new Gy;let ye=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let Ue=T[ge];return Ue===void 0&&(Ue=new ou,T[ge]=Ue),Ue.getTargetRaySpace()},this.getControllerGrip=function(ge){let Ue=T[ge];return Ue===void 0&&(Ue=new ou,T[ge]=Ue),Ue.getGripSpace()},this.getHand=function(ge){let Ue=T[ge];return Ue===void 0&&(Ue=new ou,T[ge]=Ue),Ue.getHandSpace()};function W(ge){const Ue=N.indexOf(ge.inputSource);if(Ue===-1)return;const Ie=T[Ue];Ie!==void 0&&(Ie.update(ge.inputSource,ge.frame,l||o),Ie.dispatchEvent({type:ge.type,data:ge.inputSource}))}function $(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",F);for(let ge=0;ge<T.length;ge++){const Ue=N[ge];Ue!==null&&(N[ge]=null,T[ge].disconnect(Ue))}ye=null,D=null,y.reset();for(const ge in v)delete v[ge];e.setRenderTarget(C),m=null,p=null,f=null,r=null,A=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){s=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){a=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ge){l=ge},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ge){if(r=ge,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",$),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Qe=null,nt=null;g.depth&&(nt=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=g.stencil?qo:Xo,Qe=g.stencil?$o:os);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:s};p=f.createProjectionLayer(it),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),A=new as(p.textureWidth,p.textureHeight,{format:fi,type:or,depthTexture:new kg(p.textureWidth,p.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new as(m.framebufferWidth,m.framebufferHeight,{format:fi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(ge){for(let Ue=0;Ue<ge.removed.length;Ue++){const Ie=ge.removed[Ue],Qe=N.indexOf(Ie);Qe>=0&&(N[Qe]=null,T[Qe].disconnect(Ie))}for(let Ue=0;Ue<ge.added.length;Ue++){const Ie=ge.added[Ue];let Qe=N.indexOf(Ie);if(Qe===-1){for(let it=0;it<T.length;it++)if(it>=N.length){N.push(Ie),Qe=it;break}else if(N[it]===null){N[it]=Ie,Qe=it;break}if(Qe===-1)break}const nt=T[Qe];nt&&nt.connect(Ie)}}const V=new Z,k=new Z;function Se(ge,Ue,Ie){V.setFromMatrixPosition(Ue.matrixWorld),k.setFromMatrixPosition(Ie.matrixWorld);const Qe=V.distanceTo(k),nt=Ue.projectionMatrix.elements,it=Ie.projectionMatrix.elements,Vt=nt[14]/(nt[10]-1),L=nt[14]/(nt[10]+1),M=(nt[9]+1)/nt[5],te=(nt[9]-1)/nt[5],se=(nt[8]-1)/nt[0],he=(it[8]+1)/it[0],Q=Vt*se,Me=Vt*he,oe=Qe/(-se+he),de=oe*-se;if(Ue.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(de),ge.translateZ(oe),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),nt[10]===-1)ge.projectionMatrix.copy(Ue.projectionMatrix),ge.projectionMatrixInverse.copy(Ue.projectionMatrixInverse);else{const _e=Vt+oe,He=L+oe,w=Q-de,S=Me+(Qe-de),H=M*L/He*_e,ne=te*L/He*_e;ge.projectionMatrix.makePerspective(w,S,H,ne,_e,He),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function Ee(ge,Ue){Ue===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(Ue.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(r===null)return;let Ue=ge.near,Ie=ge.far;y.texture!==null&&(y.depthNear>0&&(Ue=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),U.near=I.near=J.near=Ue,U.far=I.far=J.far=Ie,(ye!==U.near||D!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),ye=U.near,D=U.far),U.layers.mask=ge.layers.mask|6,J.layers.mask=U.layers.mask&3,I.layers.mask=U.layers.mask&5;const Qe=ge.parent,nt=U.cameras;Ee(U,Qe);for(let it=0;it<nt.length;it++)Ee(nt[it],Qe);nt.length===2?Se(U,J,I):U.projectionMatrix.copy(J.projectionMatrix),Ce(ge,U,Qe)};function Ce(ge,Ue,Ie){Ie===null?ge.matrix.copy(Ue.matrixWorld):(ge.matrix.copy(Ie.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(Ue.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(Ue.projectionMatrix),ge.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=Ef*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(ge){c=ge,p!==null&&(p.fixedFoveation=ge),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ge)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(U)},this.getCameraTexture=function(ge){return v[ge]};let Ne=null;function ft(ge,Ue){if(h=Ue.getViewerPose(l||o),x=Ue,h!==null){const Ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let Qe=!1;Ie.length!==U.cameras.length&&(U.cameras.length=0,Qe=!0);for(let L=0;L<Ie.length;L++){const M=Ie[L];let te=null;if(m!==null)te=m.getViewport(M);else{const he=f.getViewSubImage(p,M);te=he.viewport,L===0&&(e.setRenderTargetTextures(A,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(A))}let se=P[L];se===void 0&&(se=new li,se.layers.enable(L),se.viewport=new Kt,P[L]=se),se.matrix.fromArray(M.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(M.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(te.x,te.y,te.width,te.height),L===0&&(U.matrix.copy(se.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Qe===!0&&U.cameras.push(se)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const L=f.getDepthInformation(Ie[0]);L&&L.isValid&&L.texture&&y.init(L,r.renderState)}if(nt&&nt.includes("camera-access")&&(e.state.unbindTexture(),f))for(let L=0;L<Ie.length;L++){const M=Ie[L].camera;if(M){let te=v[M];te||(te=new t0,v[M]=te);const se=f.getCameraImage(M);te.sourceTexture=se}}}for(let Ie=0;Ie<T.length;Ie++){const Qe=N[Ie],nt=T[Ie];Qe!==null&&nt!==void 0&&nt.update(Qe,Ue,l||o)}Ne&&Ne(ge,Ue),Ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ue}),x=null}const ht=new Kg;ht.setAnimationLoop(ft),this.setAnimationLoop=function(ge){Ne=ge},this.dispose=function(){}}}const Wr=new ar,Mb=new tn;function Tb(n,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,Ug(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,C,A,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),f(v,g)):g.isMeshPhongMaterial?(s(v,g),h(v,g)):g.isMeshStandardMaterial?(s(v,g),p(v,g),g.isMeshPhysicalMaterial&&m(v,g,T)):g.isMeshMatcapMaterial?(s(v,g),x(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),y(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(o(v,g),g.isLineDashedMaterial&&a(v,g)):g.isPointsMaterial?c(v,g,C,A):g.isSpriteMaterial?l(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Bn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Bn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const C=e.get(g),A=C.envMap,T=C.envMapRotation;A&&(v.envMap.value=A,Wr.copy(T),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),v.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(Wr)),v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function o(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function a(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,C,A){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*C,v.scale.value=A*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function l(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function h(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function f(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function p(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function m(v,g,C){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,g){g.matcap&&(v.matcap.value=g.matcap)}function y(v,g){const C=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,A){const T=A.program;i.uniformBlockBinding(C,T)}function l(C,A){let T=r[C.id];T===void 0&&(x(C),T=h(C),r[C.id]=T,C.addEventListener("dispose",v));const N=A.program;i.updateUBOMapping(C,N);const B=e.render.frame;s[C.id]!==B&&(p(C),s[C.id]=B)}function h(C){const A=f();C.__bindingPointIndex=A;const T=n.createBuffer(),N=C.__size,B=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,N,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const A=r[C.id],T=C.uniforms,N=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let B=0,z=T.length;B<z;B++){const J=Array.isArray(T[B])?T[B]:[T[B]];for(let I=0,P=J.length;I<P;I++){const U=J[I];if(m(U,B,I,N)===!0){const ye=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let $=0;$<D.length;$++){const F=D[$],V=y(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,ye+W,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ye,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,A,T,N){const B=C.value,z=A+"_"+T;if(N[z]===void 0)return typeof B=="number"||typeof B=="boolean"?N[z]=B:N[z]=B.clone(),!0;{const J=N[z];if(typeof B=="number"||typeof B=="boolean"){if(J!==B)return N[z]=B,!0}else if(J.equals(B)===!1)return J.copy(B),!0}return!1}function x(C){const A=C.uniforms;let T=0;const N=16;for(let z=0,J=A.length;z<J;z++){const I=Array.isArray(A[z])?A[z]:[A[z]];for(let P=0,U=I.length;P<U;P++){const ye=I[P],D=Array.isArray(ye.value)?ye.value:[ye.value];for(let W=0,$=D.length;W<$;W++){const F=D[W],V=y(F),k=T%N,Se=k%V.boundary,Ee=k+Se;T+=Se,Ee!==0&&N-Ee<V.storage&&(T+=N-Ee),ye.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ye.__offset=T,T+=V.storage}}}const B=T%N;return B>0&&(T+=N-B),C.__size=T,C.__cache={},this}function y(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function v(C){const A=C.target;A.removeEventListener("dispose",v);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function g(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:g}}class wb{constructor(e={}){const{canvas:t=Dx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=new Uint32Array(4),y=new Int32Array(4);let v=null,g=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=$n;let B=0,z=0,J=null,I=-1,P=null;const U=new Kt,ye=new Kt;let D=null;const W=new Ct(0);let $=0,F=t.width,V=t.height,k=1,Se=null,Ee=null;const Ce=new Kt(0,0,F,V),Ne=new Kt(0,0,F,V);let ft=!1;const ht=new zg;let ge=!1,Ue=!1;const Ie=new tn,Qe=new Z,nt=new Kt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function L(){return J===null?k:1}let M=i;function te(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),M===null){const X="webgl2";if(M=te(X,R),M===null)throw te(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,he,Q,Me,oe,de,_e,He,w,S,H,ne,ve,ie,Fe,Te,Je,Oe,we,ke,qe,Ke,Be,st;function G(){se=new UM(M),se.init(),Ke=new vb(M,se),he=new CM(M,se,e,Ke),Q=new gb(M,se),he.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),Me=new zM(M),oe=new ib,de=new _b(M,se,Q,oe,he,Ke,Me),_e=new IM(T),He=new NM(T),w=new $y(M),Be=new AM(M,w),S=new FM(M,w,Me,Be),H=new VM(M,S,w,Me),we=new kM(M,he,de),Te=new PM(oe),ne=new nb(T,_e,He,se,he,Be,Te),ve=new Tb(T,oe),ie=new sb,Fe=new fb(se),Oe=new wM(T,_e,He,Q,H,m,c),Je=new pb(T,H,he),st=new bb(M,Me,he,Q),ke=new RM(M,se,Me),qe=new BM(M,se,Me),Me.programs=ne.programs,T.capabilities=he,T.extensions=se,T.properties=oe,T.renderLists=ie,T.shadowMap=Je,T.state=Q,T.info=Me}G();const De=new Eb(T,M);this.xr=De,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(F,V,!1))},this.getSize=function(R){return R.set(F,V)},this.setSize=function(R,X,ae=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,V=X,t.width=Math.floor(R*k),t.height=Math.floor(X*k),ae===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(F*k,V*k).floor()},this.setDrawingBufferSize=function(R,X,ae){F=R,V=X,k=ae,t.width=Math.floor(R*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ce)},this.setViewport=function(R,X,ae,ce){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,X,ae,ce),Q.viewport(U.copy(Ce).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,X,ae,ce){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,X,ae,ce),Q.scissor(ye.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){Q.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){Ee=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ae=!0){let ce=0;if(R){let Y=!1;if(J!==null){const be=J.texture.format;Y=be===lh||be===ch||be===ah}if(Y){const be=J.texture.type,$e=be===or||be===os||be===Wo||be===$o||be===sh||be===oh,et=Oe.getClearColor(),ze=Oe.getClearAlpha(),ct=et.r,ut=et.g,ot=et.b;$e?(x[0]=ct,x[1]=ut,x[2]=ot,x[3]=ze,M.clearBufferuiv(M.COLOR,0,x)):(y[0]=ct,y[1]=ut,y[2]=ot,y[3]=ze,M.clearBufferiv(M.COLOR,0,y))}else ce|=M.COLOR_BUFFER_BIT}X&&(ce|=M.DEPTH_BUFFER_BIT),ae&&(ce|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Oe.dispose(),ie.dispose(),Fe.dispose(),oe.dispose(),_e.dispose(),He.dispose(),H.dispose(),Be.dispose(),st.dispose(),ne.dispose(),De.dispose(),De.removeEventListener("sessionstart",kn),De.removeEventListener("sessionend",mo),ii.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Me.autoReset,X=Je.enabled,ae=Je.autoUpdate,ce=Je.needsUpdate,Y=Je.type;G(),Me.autoReset=R,Je.enabled=X,Je.autoUpdate=ae,Je.needsUpdate=ce,Je.type=Y}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const X=R.target;X.removeEventListener("dispose",xe),tt(X)}function tt(R){lt(R),oe.remove(R)}function lt(R){const X=oe.get(R).programs;X!==void 0&&(X.forEach(function(ae){ne.releaseProgram(ae)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ae,ce,Y,be){X===null&&(X=it);const $e=Y.isMesh&&Y.matrixWorld.determinant()<0,et=El(R,X,ae,ce,Y);Q.setMaterial(ce,$e);let ze=ae.index,ct=1;if(ce.wireframe===!0){if(ze=S.getWireframeAttribute(ae),ze===void 0)return;ct=2}const ut=ae.drawRange,ot=ae.attributes.position;let _t=ut.start*ct,Mt=(ut.start+ut.count)*ct;be!==null&&(_t=Math.max(_t,be.start*ct),Mt=Math.min(Mt,(be.start+be.count)*ct)),ze!==null?(_t=Math.max(_t,0),Mt=Math.min(Mt,ze.count)):ot!=null&&(_t=Math.max(_t,0),Mt=Math.min(Mt,ot.count));const Ht=Mt-_t;if(Ht<0||Ht===1/0)return;Be.setup(Y,ce,et,ae,ze);let Pt,At=ke;if(ze!==null&&(Pt=w.get(ze),At=qe,At.setIndex(Pt)),Y.isMesh)ce.wireframe===!0?(Q.setLineWidth(ce.wireframeLinewidth*L()),At.setMode(M.LINES)):At.setMode(M.TRIANGLES);else if(Y.isLine){let Xe=ce.linewidth;Xe===void 0&&(Xe=1),Q.setLineWidth(Xe*L()),Y.isLineSegments?At.setMode(M.LINES):Y.isLineLoop?At.setMode(M.LINE_LOOP):At.setMode(M.LINE_STRIP)}else Y.isPoints?At.setMode(M.POINTS):Y.isSprite&&At.setMode(M.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xe=Y._multiDrawStarts,Tt=Y._multiDrawCounts,St=Y._multiDrawCount,fn=ze?w.get(ze).bytesPerElement:1,Bi=oe.get(ce).currentProgram.getUniforms();for(let En=0;En<St;En++)Bi.setValue(M,"_gl_DrawID",En),At.render(Xe[En]/fn,Tt[En])}else if(Y.isInstancedMesh)At.renderInstances(_t,Ht,Y.count);else if(ae.isInstancedBufferGeometry){const Xe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Tt=Math.min(ae.instanceCount,Xe);At.renderInstances(_t,Ht,Tt)}else At.render(_t,Ht)};function wt(R,X,ae){R.transparent===!0&&R.side===ti&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,Fi(R,X,ae),R.side=Pr,R.needsUpdate=!0,Fi(R,X,ae),R.side=ti):Fi(R,X,ae)}this.compile=function(R,X,ae=null){ae===null&&(ae=R),g=Fe.get(ae),g.init(X),A.push(g),ae.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==ae&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ce=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let $e=0;$e<be.length;$e++){const et=be[$e];wt(et,ae,Y),ce.add(et)}else wt(be,ae,Y),ce.add(be)}),g=A.pop(),ce},this.compileAsync=function(R,X,ae=null){const ce=this.compile(R,X,ae);return new Promise(Y=>{function be(){if(ce.forEach(function($e){oe.get($e).currentProgram.isReady()&&ce.delete($e)}),ce.size===0){Y(R);return}setTimeout(be,10)}se.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Et=null;function Nn(R){Et&&Et(R)}function kn(){ii.stop()}function mo(){ii.start()}const ii=new Kg;ii.setAnimationLoop(Nn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(R){Et=R,De.setAnimationLoop(R),R===null?ii.stop():ii.start()},De.addEventListener("sessionstart",kn),De.addEventListener("sessionend",mo),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(X),X=De.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,X,J),g=Fe.get(R,A.length),g.init(X),A.push(g),Ie.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ht.setFromProjectionMatrix(Ie,Ri,X.reversedDepth),Ue=this.localClippingEnabled,ge=Te.init(this.clippingPlanes,Ue),v=ie.get(R,C.length),v.init(),C.push(v),De.enabled===!0&&De.isPresenting===!0){const be=T.xr.getDepthSensingMesh();be!==null&&_s(be,X,-1/0,T.sortObjects)}_s(R,X,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(Se,Ee),Vt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Vt&&Oe.addToRenderList(v,R),this.info.render.frame++,ge===!0&&Te.beginShadows();const ae=g.state.shadowsArray;Je.render(ae,R,X),ge===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=v.opaque,Y=v.transmissive;if(g.setupLights(),X.isArrayCamera){const be=X.cameras;if(Y.length>0)for(let $e=0,et=be.length;$e<et;$e++){const ze=be[$e];Ta(ce,Y,R,ze)}Vt&&Oe.render(R);for(let $e=0,et=be.length;$e<et;$e++){const ze=be[$e];Nr(v,R,ze,ze.viewport)}}else Y.length>0&&Ta(ce,Y,R,X),Vt&&Oe.render(R),Nr(v,R,X);J!==null&&z===0&&(de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J)),R.isScene===!0&&R.onAfterRender(T,R,X),Be.resetDefaultState(),I=-1,P=null,A.pop(),A.length>0?(g=A[A.length-1],ge===!0&&Te.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,C.pop(),C.length>0?v=C[C.length-1]:v=null};function _s(R,X,ae,ce){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){ce&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ie);const $e=H.update(R),et=R.material;et.visible&&v.push(R,$e,et,ae,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const $e=H.update(R),et=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),nt.copy($e.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ie)),Array.isArray(et)){const ze=$e.groups;for(let ct=0,ut=ze.length;ct<ut;ct++){const ot=ze[ct],_t=et[ot.materialIndex];_t&&_t.visible&&v.push(R,$e,_t,ae,nt.z,ot)}}else et.visible&&v.push(R,$e,et,ae,nt.z,null)}}const be=R.children;for(let $e=0,et=be.length;$e<et;$e++)_s(be[$e],X,ae,ce)}function Nr(R,X,ae,ce){const Y=R.opaque,be=R.transmissive,$e=R.transparent;g.setupLightsView(ae),ge===!0&&Te.setGlobalState(T.clippingPlanes,ae),ce&&Q.viewport(U.copy(ce)),Y.length>0&&Ur(Y,X,ae),be.length>0&&Ur(be,X,ae),$e.length>0&&Ur($e,X,ae),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ta(R,X,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new as(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?fa:or,minFilter:ts,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const be=g.state.transmissionRenderTarget[ce.id],$e=ce.viewport||U;be.setSize($e.z*T.transmissionResolutionScale,$e.w*T.transmissionResolutionScale);const et=T.getRenderTarget(),ze=T.getActiveCubeFace(),ct=T.getActiveMipmapLevel();T.setRenderTarget(be),T.getClearColor(W),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),Vt&&Oe.render(ae);const ut=T.toneMapping;T.toneMapping=Rr;const ot=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),ge===!0&&Te.setGlobalState(T.clippingPlanes,ce),Ur(R,ae,ce),de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be),se.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Mt=0,Ht=X.length;Mt<Ht;Mt++){const Pt=X[Mt],At=Pt.object,Xe=Pt.geometry,Tt=Pt.material,St=Pt.group;if(Tt.side===ti&&At.layers.test(ce.layers)){const fn=Tt.side;Tt.side=Bn,Tt.needsUpdate=!0,ba(At,ae,ce,Xe,Tt,St),Tt.side=fn,Tt.needsUpdate=!0,_t=!0}}_t===!0&&(de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be))}T.setRenderTarget(et,ze,ct),T.setClearColor(W,$),ot!==void 0&&(ce.viewport=ot),T.toneMapping=ut}function Ur(R,X,ae){const ce=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,be=R.length;Y<be;Y++){const $e=R[Y],et=$e.object,ze=$e.geometry,ct=$e.group;let ut=$e.material;ut.allowOverride===!0&&ce!==null&&(ut=ce),et.layers.test(ae.layers)&&ba(et,X,ae,ze,ut,ct)}}function ba(R,X,ae,ce,Y,be){R.onBeforeRender(T,X,ae,ce,Y,be),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(T,X,ae,ce,R,be),Y.transparent===!0&&Y.side===ti&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,T.renderBufferDirect(ae,X,ce,Y,R,be),Y.side=Pr,Y.needsUpdate=!0,T.renderBufferDirect(ae,X,ce,Y,R,be),Y.side=ti):T.renderBufferDirect(ae,X,ce,Y,R,be),R.onAfterRender(T,X,ae,ce,Y,be)}function Fi(R,X,ae){X.isScene!==!0&&(X=it);const ce=oe.get(R),Y=g.state.lights,be=g.state.shadowsArray,$e=Y.state.version,et=ne.getParameters(R,Y.state,be,X,ae),ze=ne.getProgramCacheKey(et);let ct=ce.programs;ce.environment=R.isMeshStandardMaterial?X.environment:null,ce.fog=X.fog,ce.envMap=(R.isMeshStandardMaterial?He:_e).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",xe),ct=new Map,ce.programs=ct);let ut=ct.get(ze);if(ut!==void 0){if(ce.currentProgram===ut&&ce.lightsStateVersion===$e)return _o(R,et),ut}else et.uniforms=ne.getUniforms(R),R.onBeforeCompile(et,T),ut=ne.acquireProgram(et,ze),ct.set(ze,ut),ce.uniforms=et.uniforms;const ot=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=Te.uniform),_o(R,et),ce.needsLights=wa(R),ce.lightsStateVersion=$e,ce.needsLights&&(ot.ambientLightColor.value=Y.state.ambient,ot.lightProbe.value=Y.state.probe,ot.directionalLights.value=Y.state.directional,ot.directionalLightShadows.value=Y.state.directionalShadow,ot.spotLights.value=Y.state.spot,ot.spotLightShadows.value=Y.state.spotShadow,ot.rectAreaLights.value=Y.state.rectArea,ot.ltc_1.value=Y.state.rectAreaLTC1,ot.ltc_2.value=Y.state.rectAreaLTC2,ot.pointLights.value=Y.state.point,ot.pointLightShadows.value=Y.state.pointShadow,ot.hemisphereLights.value=Y.state.hemi,ot.directionalShadowMap.value=Y.state.directionalShadowMap,ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ot.spotShadowMap.value=Y.state.spotShadowMap,ot.spotLightMatrix.value=Y.state.spotLightMatrix,ot.spotLightMap.value=Y.state.spotLightMap,ot.pointShadowMap.value=Y.state.pointShadowMap,ot.pointShadowMatrix.value=Y.state.pointShadowMatrix),ce.currentProgram=ut,ce.uniformsList=null,ut}function go(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=xc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function _o(R,X){const ae=oe.get(R);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function El(R,X,ae,ce,Y){X.isScene!==!0&&(X=it),de.resetTextureUnits();const be=X.fog,$e=ce.isMeshStandardMaterial?X.environment:null,et=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:eo,ze=(ce.isMeshStandardMaterial?He:_e).get(ce.envMap||$e),ct=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ut=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),ot=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,Mt=!!ae.morphAttributes.color;let Ht=Rr;ce.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ht=T.toneMapping);const Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,At=Pt!==void 0?Pt.length:0,Xe=oe.get(ce),Tt=g.state.lights;if(ge===!0&&(Ue===!0||R!==P)){const $t=R===P&&ce.id===I;Te.setState(ce,R,$t)}let St=!1;ce.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Tt.state.version||Xe.outputColorSpace!==et||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==ze||ce.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==ct||Xe.vertexTangents!==ut||Xe.morphTargets!==ot||Xe.morphNormals!==_t||Xe.morphColors!==Mt||Xe.toneMapping!==Ht||Xe.morphTargetsCount!==At)&&(St=!0):(St=!0,Xe.__version=ce.version);let fn=Xe.currentProgram;St===!0&&(fn=Fi(ce,X,Y));let Bi=!1,En=!1,Fr=!1;const Ot=fn.getUniforms(),rn=Xe.uniforms;if(Q.useProgram(fn.program)&&(Bi=!0,En=!0,Fr=!0),ce.id!==I&&(I=ce.id,En=!0),Bi||P!==R){Q.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ot.setValue(M,"projectionMatrix",R.projectionMatrix),Ot.setValue(M,"viewMatrix",R.matrixWorldInverse);const Mn=Ot.map.cameraPosition;Mn!==void 0&&Mn.setValue(M,Qe.setFromMatrixPosition(R.matrixWorld)),he.logarithmicDepthBuffer&&Ot.setValue(M,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ot.setValue(M,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,En=!0,Fr=!0)}if(Y.isSkinnedMesh){Ot.setOptional(M,Y,"bindMatrix"),Ot.setOptional(M,Y,"bindMatrixInverse");const $t=Y.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ot.setValue(M,"boneTexture",$t.boneTexture,de))}Y.isBatchedMesh&&(Ot.setOptional(M,Y,"batchingTexture"),Ot.setValue(M,"batchingTexture",Y._matricesTexture,de),Ot.setOptional(M,Y,"batchingIdTexture"),Ot.setValue(M,"batchingIdTexture",Y._indirectTexture,de),Ot.setOptional(M,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(M,"batchingColorTexture",Y._colorsTexture,de));const sn=ae.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&we.update(Y,ae,fn),(En||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Ot.setValue(M,"receiveShadow",Y.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(rn.envMap.value=ze,rn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),En&&(Ot.setValue(M,"toneMappingExposure",T.toneMappingExposure),Xe.needsLights&&Vn(rn,Fr),be&&ce.fog===!0&&ve.refreshFogUniforms(rn,be),ve.refreshMaterialUniforms(rn,ce,k,V,g.state.transmissionRenderTarget[R.id]),xc.upload(M,go(Xe),rn,de)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(xc.upload(M,go(Xe),rn,de),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ot.setValue(M,"center",Y.center),Ot.setValue(M,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(M,"normalMatrix",Y.normalMatrix),Ot.setValue(M,"modelMatrix",Y.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const $t=ce.uniformsGroups;for(let Mn=0,vo=$t.length;Mn<vo;Mn++){const zi=$t[Mn];st.update(zi,fn),st.bind(zi,fn)}}return fn}function Vn(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function wa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,X,ae){const ce=oe.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=X,oe.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ae=oe.get(R);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const Aa=M.createFramebuffer();this.setRenderTarget=function(R,X=0,ae=0){J=R,B=X,z=ae;let ce=!0,Y=null,be=!1,$e=!1;if(R){const ze=oe.get(R);if(ze.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(M.FRAMEBUFFER,null),ce=!1;else if(ze.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(ze.__hasExternalTextures)de.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ot=R.depthTexture;if(ze.__boundDepthTexture!==ot){if(ot!==null&&oe.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&($e=!0);const ut=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ut[X])?Y=ut[X][ae]:Y=ut[X],be=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?Y=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[ae]:Y=ut,U.copy(R.viewport),ye.copy(R.scissor),D=R.scissorTest}else U.copy(Ce).multiplyScalar(k).floor(),ye.copy(Ne).multiplyScalar(k).floor(),D=ft;if(ae!==0&&(Y=Aa),Q.bindFramebuffer(M.FRAMEBUFFER,Y)&&ce&&Q.drawBuffers(R,Y),Q.viewport(U),Q.scissor(ye),Q.setScissorTest(D),be){const ze=oe.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ae)}else if($e){const ze=X;for(let ct=0;ct<R.textures.length;ct++){const ut=oe.get(R.textures[ct]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+ct,ut.__webglTexture,ae,ze)}}else if(R!==null&&ae!==0){const ze=oe.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ze.__webglTexture,ae)}I=-1},this.readRenderTargetPixels=function(R,X,ae,ce,Y,be,$e,et=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&$e!==void 0&&(ze=ze[$e]),ze){Q.bindFramebuffer(M.FRAMEBUFFER,ze);try{const ct=R.textures[et],ut=ct.format,ot=ct.type;if(!he.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ce&&ae>=0&&ae<=R.height-Y&&(R.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(X,ae,ce,Y,Ke.convert(ut),Ke.convert(ot),be))}finally{const ct=J!==null?oe.get(J).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(R,X,ae,ce,Y,be,$e,et=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&$e!==void 0&&(ze=ze[$e]),ze)if(X>=0&&X<=R.width-ce&&ae>=0&&ae<=R.height-Y){Q.bindFramebuffer(M.FRAMEBUFFER,ze);const ct=R.textures[et],ut=ct.format,ot=ct.type;if(!he.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,_t),M.bufferData(M.PIXEL_PACK_BUFFER,be.byteLength,M.STREAM_READ),R.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+et),M.readPixels(X,ae,ce,Y,Ke.convert(ut),Ke.convert(ot),0);const Mt=J!==null?oe.get(J).__webglFramebuffer:null;Q.bindFramebuffer(M.FRAMEBUFFER,Mt);const Ht=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Lx(M,Ht,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,_t),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,be),M.deleteBuffer(_t),M.deleteSync(Ht),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ae=0){const ce=Math.pow(2,-ae),Y=Math.floor(R.image.width*ce),be=Math.floor(R.image.height*ce),$e=X!==null?X.x:0,et=X!==null?X.y:0;de.setTexture2D(R,0),M.copyTexSubImage2D(M.TEXTURE_2D,ae,0,0,$e,et,Y,be),Q.unbindTexture()};const ri=M.createFramebuffer(),Ra=M.createFramebuffer();this.copyTextureToTexture=function(R,X,ae=null,ce=null,Y=0,be=null){be===null&&(Y!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Y,Y=0):be=0);let $e,et,ze,ct,ut,ot,_t,Mt,Ht;const Pt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(ae!==null)$e=ae.max.x-ae.min.x,et=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,ct=ae.min.x,ut=ae.min.y,ot=ae.isBox3?ae.min.z:0;else{const sn=Math.pow(2,-Y);$e=Math.floor(Pt.width*sn),et=Math.floor(Pt.height*sn),R.isDataArrayTexture?ze=Pt.depth:R.isData3DTexture?ze=Math.floor(Pt.depth*sn):ze=1,ct=0,ut=0,ot=0}ce!==null?(_t=ce.x,Mt=ce.y,Ht=ce.z):(_t=0,Mt=0,Ht=0);const At=Ke.convert(X.format),Xe=Ke.convert(X.type);let Tt;X.isData3DTexture?(de.setTexture3D(X,0),Tt=M.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(de.setTexture2DArray(X,0),Tt=M.TEXTURE_2D_ARRAY):(de.setTexture2D(X,0),Tt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,X.unpackAlignment);const St=M.getParameter(M.UNPACK_ROW_LENGTH),fn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Bi=M.getParameter(M.UNPACK_SKIP_PIXELS),En=M.getParameter(M.UNPACK_SKIP_ROWS),Fr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Pt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Pt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ct),M.pixelStorei(M.UNPACK_SKIP_ROWS,ut),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ot);const Ot=R.isDataArrayTexture||R.isData3DTexture,rn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const sn=oe.get(R),$t=oe.get(X),Mn=oe.get(sn.__renderTarget),vo=oe.get($t.__renderTarget);Q.bindFramebuffer(M.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let zi=0;zi<ze;zi++)Ot&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,Y,ot+zi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,oe.get(X).__webglTexture,be,Ht+zi)),M.blitFramebuffer(ct,ut,$e,et,_t,Mt,$e,et,M.DEPTH_BUFFER_BIT,M.NEAREST);Q.bindFramebuffer(M.READ_FRAMEBUFFER,null),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||oe.has(R)){const sn=oe.get(R),$t=oe.get(X);Q.bindFramebuffer(M.READ_FRAMEBUFFER,ri),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ra);for(let Mn=0;Mn<ze;Mn++)Ot?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,sn.__webglTexture,Y,ot+Mn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,sn.__webglTexture,Y),rn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,$t.__webglTexture,be,Ht+Mn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,$t.__webglTexture,be),Y!==0?M.blitFramebuffer(ct,ut,$e,et,_t,Mt,$e,et,M.COLOR_BUFFER_BIT,M.NEAREST):rn?M.copyTexSubImage3D(Tt,be,_t,Mt,Ht+Mn,ct,ut,$e,et):M.copyTexSubImage2D(Tt,be,_t,Mt,ct,ut,$e,et);Q.bindFramebuffer(M.READ_FRAMEBUFFER,null),Q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else rn?R.isDataTexture||R.isData3DTexture?M.texSubImage3D(Tt,be,_t,Mt,Ht,$e,et,ze,At,Xe,Pt.data):X.isCompressedArrayTexture?M.compressedTexSubImage3D(Tt,be,_t,Mt,Ht,$e,et,ze,At,Pt.data):M.texSubImage3D(Tt,be,_t,Mt,Ht,$e,et,ze,At,Xe,Pt):R.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,be,_t,Mt,$e,et,At,Xe,Pt.data):R.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,be,_t,Mt,Pt.width,Pt.height,At,Pt.data):M.texSubImage2D(M.TEXTURE_2D,be,_t,Mt,$e,et,At,Xe,Pt);M.pixelStorei(M.UNPACK_ROW_LENGTH,St),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,fn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Bi),M.pixelStorei(M.UNPACK_SKIP_ROWS,En),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Fr),be===0&&X.generateMipmaps&&M.generateMipmap(Tt),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ae=null,ce=null,Y=0){return Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,ae,ce,Y)},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){B=0,z=0,J=null,Q.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function gh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const zt={},$s=[],Di=()=>{},n0=()=>!1,rl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sl=n=>n.startsWith("onUpdate:"),Sn=Object.assign,_h=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ab=Object.prototype.hasOwnProperty,Rt=(n,e)=>Ab.call(n,e),mt=Array.isArray,ns=n=>ma(n)==="[object Map]",wf=n=>ma(n)==="[object Set]",Ip=n=>ma(n)==="[object Date]",pt=n=>typeof n=="function",nn=n=>typeof n=="string",Dr=n=>typeof n=="symbol",kt=n=>n!==null&&typeof n=="object",i0=n=>(kt(n)||pt(n))&&pt(n.then)&&pt(n.catch),Rb=Object.prototype.toString,ma=n=>Rb.call(n),Cb=n=>ma(n).slice(8,-1),Pb=n=>ma(n)==="[object Object]",vh=n=>nn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Uo=gh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Ib=/-\w/g,di=ol(n=>n.replace(Ib,e=>e.slice(1).toUpperCase())),Db=/\B([A-Z])/g,ps=ol(n=>n.replace(Db,"-$1").toLowerCase()),r0=ol(n=>n.charAt(0).toUpperCase()+n.slice(1)),_u=ol(n=>n?`on${r0(n)}`:""),Zi=(n,e)=>!Object.is(n,e),vu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},s0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Lb=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dp;const al=()=>Dp||(Dp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xh(n){if(mt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=nn(i)?Fb(i):xh(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(nn(n)||kt(n))return n}const Ob=/;(?![^(]*\))/g,Nb=/:([^]+)/,Ub=/\/\*[^]*?\*\//g;function Fb(n){const e={};return n.replace(Ub,"").split(Ob).forEach(t=>{if(t){const i=t.split(Nb);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yh(n){let e="";if(nn(n))e=n;else if(mt(n))for(let t=0;t<n.length;t++){const i=yh(n[t]);i&&(e+=i+" ")}else if(kt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zb=gh(Bb);function o0(n){return!!n||n===""}function kb(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=cl(n[i],e[i]);return t}function Lp(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&cl(r,t[o])){s=o;break}if(s<0)return!1;i[s]=1}return!0}function cl(n,e){if(n===e)return!0;let t=Ip(n),i=Ip(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dr(n),i=Dr(e),t||i)return n===e;if(t=mt(n),i=mt(e),t||i)return t&&i?kb(n,e):!1;if(t=kt(n),i=kt(e),t||i){if(!t||!i)return!1;if(t=ns(n),i=ns(e),t||i||(t=wf(n),i=wf(e),t||i))return t&&i?Lp(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!cl(n[o],e[o]))return!1}}return String(n)===String(e)}let vn;class Vb{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&vn&&(vn.active?(this.parent=vn,this.index=(vn.scopes||(vn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){++this._on===1&&(this.prevScope=vn,vn=this)}off(){if(this._on>0&&--this._on===0){if(vn===this)vn=this.prevScope;else{let e=vn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hb(){return vn}let Ft;const xu=new WeakSet;class a0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&(vn.active?vn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xu.has(this)&&(xu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||l0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Op(this),u0(this);const e=Ft,t=pi;Ft=this,pi=!0;try{return this.fn()}finally{f0(this),Ft=e,pi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mh(e);this.deps=this.depsTail=void 0,Op(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Af(this)&&this.run()}get dirty(){return Af(this)}}let c0=0,Fo,Bo;function l0(n,e=!1){if(n.flags|=8,e){n.next=Bo,Bo=n;return}n.next=Fo,Fo=n}function Sh(){c0++}function Eh(){if(--c0>0)return;if(Bo){let e=Bo;for(Bo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Fo;){let e=Fo;for(Fo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function u0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function f0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Mh(i),Gb(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Af(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(h0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function h0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zo)||(n.globalVersion=Zo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Af(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=pi;Ft=n,pi=!0;try{u0(n);const r=n.fn(n._value);(e.version===0||Zi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=t,pi=i,f0(n),n.flags&=-3}}function Mh(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Mh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Gb(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pi=!0;const d0=[];function cr(){d0.push(pi),pi=!1}function lr(){const n=d0.pop();pi=n===void 0?!0:n}function Op(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let Zo=0;class Wb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class p0{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!pi||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new Wb(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,m0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,Zo++,this.notify(e)}notify(e){Sh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Eh()}}}function m0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)m0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Rf=new WeakMap,is=Symbol(""),Cf=Symbol(""),Qo=Symbol("");function An(n,e,t){if(pi&&Ft){let i=Rf.get(n);i||Rf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new p0),r.map=i,r.key=t),r.track()}}function Qi(n,e,t,i,r,s){const o=Rf.get(n);if(!o){Zo++;return}const a=c=>{c&&c.trigger()};if(Sh(),e==="clear")o.forEach(a);else{const c=mt(n),l=c&&vh(t);if(c&&t==="length"){const h=Number(i);o.forEach((f,p)=>{(p==="length"||p===Qo||!Dr(p)&&p>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(Qo)),e){case"add":c?l&&a(o.get("length")):(a(o.get(is)),ns(n)&&a(o.get(Cf)));break;case"delete":c||(a(o.get(is)),ns(n)&&a(o.get(Cf)));break;case"set":ns(n)&&a(o.get(is));break}}Eh()}function Us(n){const e=Lt(n);return e===n?e:(An(e,"iterate",Qo),Li(n)?e:e.map(us))}function Th(n){return An(n=Lt(n),"iterate",Qo),n}function Ti(n,e){return ls(n)?ea(Xs(n)?us(e):e):us(e)}const $b={__proto__:null,[Symbol.iterator](){return yu(this,Symbol.iterator,n=>Ti(this,n))},concat(...n){return Us(this).concat(...n.map(e=>mt(e)?Us(e):e))},entries(){return yu(this,"entries",n=>(n[1]=Ti(this,n[1]),n))},every(n,e){return $i(this,"every",n,e,void 0,arguments)},filter(n,e){return $i(this,"filter",n,e,t=>t.map(i=>Ti(this,i)),arguments)},find(n,e){return $i(this,"find",n,e,t=>Ti(this,t),arguments)},findIndex(n,e){return $i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $i(this,"findLast",n,e,t=>Ti(this,t),arguments)},findLastIndex(n,e){return $i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $i(this,"forEach",n,e,void 0,arguments)},includes(...n){return Su(this,"includes",n)},indexOf(...n){return Su(this,"indexOf",n)},join(n){return Us(this).join(n)},lastIndexOf(...n){return Su(this,"lastIndexOf",n)},map(n,e){return $i(this,"map",n,e,void 0,arguments)},pop(){return wo(this,"pop")},push(...n){return wo(this,"push",n)},reduce(n,...e){return Np(this,"reduce",n,e)},reduceRight(n,...e){return Np(this,"reduceRight",n,e)},shift(){return wo(this,"shift")},some(n,e){return $i(this,"some",n,e,void 0,arguments)},splice(...n){return wo(this,"splice",n)},toReversed(){return Us(this).toReversed()},toSorted(n){return Us(this).toSorted(n)},toSpliced(...n){return Us(this).toSpliced(...n)},unshift(...n){return wo(this,"unshift",n)},values(){return yu(this,"values",n=>Ti(this,n))}};function yu(n,e,t){const i=Th(n),r=i[e]();return i!==n&&!Li(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Xb=Array.prototype;function $i(n,e,t,i,r,s){const o=Th(n),a=o!==n&&!Li(n),c=o[e];if(c!==Xb[e]){const f=c.apply(n,s);return a?us(f):f}let l=t;o!==n&&(a?l=function(f,p){return t.call(this,Ti(n,f),p,n)}:t.length>2&&(l=function(f,p){return t.call(this,f,p,n)}));const h=c.call(o,l,i);return a&&r?r(h):h}function Np(n,e,t,i){const r=Th(n),s=r!==n&&!Li(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(l,h,f){return a&&(a=!1,l=Ti(n,l)),t.call(this,l,Ti(n,h),f,n)}):t.length>3&&(o=function(l,h,f){return t.call(this,l,h,f,n)}));const c=r[e](o,...i);return a?Ti(n,c):c}function Su(n,e,t){const i=Lt(n);An(i,"iterate",Qo);const r=i[e](...t);return(r===-1||r===!1)&&Rh(t[0])?(t[0]=Lt(t[0]),i[e](...t)):r}function wo(n,e,t=[]){cr(),Sh();const i=Lt(n)[e].apply(n,t);return Eh(),lr(),i}const qb=gh("__proto__,__v_isRef,__isVue"),g0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dr));function jb(n){Dr(n)||(n=String(n));const e=Lt(this);return An(e,"has",n),e.hasOwnProperty(n)}class _0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?rw:S0:s?y0:x0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=mt(e);if(!r){let c;if(o&&(c=$b[t]))return c;if(t==="hasOwnProperty")return jb}const a=Reflect.get(e,t,On(e)?e:i);if((Dr(t)?g0.has(t):qb(t))||(r||An(e,"get",t),s))return a;if(On(a)){const c=o&&vh(t)?a:a.value;return r&&kt(c)?If(c):c}return kt(a)?r?If(a):wh(a):a}}class v0 extends _0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=mt(e)&&vh(t);if(!this._isShallow){const l=ls(s);if(!Li(i)&&!ls(i)&&(s=Lt(s),i=Lt(i)),!o&&On(s)&&!On(i))return l||(s.value=i),!0}const a=o?Number(t)<e.length:Rt(e,t),c=Reflect.set(e,t,i,On(e)?e:r);return e===Lt(r)&&c&&(a?Zi(i,s)&&Qi(e,"set",t,i):Qi(e,"add",t,i)),c}deleteProperty(e,t){const i=Rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Dr(t)||!g0.has(t))&&An(e,"has",t),i}ownKeys(e){return An(e,"iterate",mt(e)?"length":is),Reflect.ownKeys(e)}}class Yb extends _0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Kb=new v0,Jb=new Yb,Zb=new v0(!0);const Pf=n=>n,ac=n=>Reflect.getPrototypeOf(n);function Qb(n,e,t){return function(...i){const r=this.__v_raw,s=Lt(r),o=ns(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),h=t?Pf:e?ea:us;return!e&&An(s,"iterate",c?Cf:is),Sn(Object.create(l),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}}})}}function lc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ew(n,e){const t={get(r){const s=this.__v_raw,o=Lt(s),a=Lt(r);n||(Zi(r,a)&&An(o,"get",r),An(o,"get",a));const{has:c}=ac(o),l=e?Pf:n?ea:us;if(c.call(o,r))return l(s.get(r));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&An(Lt(r),"iterate",is),r.size},has(r){const s=this.__v_raw,o=Lt(s),a=Lt(r);return n||(Zi(r,a)&&An(o,"has",r),An(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=Lt(a),l=e?Pf:n?ea:us;return!n&&An(c,"iterate",is),a.forEach((h,f)=>r.call(s,l(h),l(f),o))}};return Sn(t,n?{add:lc("add"),set:lc("set"),delete:lc("delete"),clear:lc("clear")}:{add(r){const s=Lt(this),o=ac(s),a=Lt(r),c=!e&&!Li(r)&&!ls(r)?a:r;return o.has.call(s,c)||Zi(r,c)&&o.has.call(s,r)||Zi(a,c)&&o.has.call(s,a)||(s.add(c),Qi(s,"add",c,c)),this},set(r,s){!e&&!Li(s)&&!ls(s)&&(s=Lt(s));const o=Lt(this),{has:a,get:c}=ac(o);let l=a.call(o,r);l||(r=Lt(r),l=a.call(o,r));const h=c.call(o,r);return o.set(r,s),l?Zi(s,h)&&Qi(o,"set",r,s):Qi(o,"add",r,s),this},delete(r){const s=Lt(this),{has:o,get:a}=ac(s);let c=o.call(s,r);c||(r=Lt(r),c=o.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return c&&Qi(s,"delete",r,void 0),l},clear(){const r=Lt(this),s=r.size!==0,o=r.clear();return s&&Qi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qb(r,n,e)}),t}function bh(n,e){const t=ew(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Rt(t,r)&&r in i?t:i,r,s)}const tw={get:bh(!1,!1)},nw={get:bh(!1,!0)},iw={get:bh(!0,!1)};const x0=new WeakMap,y0=new WeakMap,S0=new WeakMap,rw=new WeakMap;function sw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wh(n){return ls(n)?n:Ah(n,!1,Kb,tw,x0)}function ow(n){return Ah(n,!1,Zb,nw,y0)}function If(n){return Ah(n,!0,Jb,iw,S0)}function Ah(n,e,t,i,r){if(!kt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=sw(Cb(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Xs(n){return ls(n)?Xs(n.__v_raw):!!(n&&n.__v_isReactive)}function ls(n){return!!(n&&n.__v_isReadonly)}function Li(n){return!!(n&&n.__v_isShallow)}function Rh(n){return n?!!n.__v_raw:!1}function Lt(n){const e=n&&n.__v_raw;return e?Lt(e):n}function aw(n){return!Rt(n,"__v_skip")&&Object.isExtensible(n)&&s0(n,"__v_skip",!0),n}const us=n=>kt(n)?wh(n):n,ea=n=>kt(n)?If(n):n;function On(n){return n?n.__v_isRef===!0:!1}function cw(n){return On(n)?n.value:n}const lw={get:(n,e,t)=>e==="__v_raw"?n:cw(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return On(r)&&!On(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function E0(n){return Xs(n)?n:new Proxy(n,lw)}class uw{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new p0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return l0(this,!0),!0}get value(){const e=this.dep.track();return h0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fw(n,e,t=!1){let i,r;return pt(n)?i=n:(i=n.get,r=n.set),new uw(i,r,t)}const uc={},Oc=new WeakMap;let Kr;function hw(n,e=!1,t=Kr){if(t){let i=Oc.get(t);i||Oc.set(t,i=[]),i.push(n)}}function dw(n,e,t=zt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,l=T=>r?T:Li(T)||r===!1||r===0?Mr(T,1):Mr(T);let h,f,p,m,x=!1,y=!1;if(On(n)?(f=()=>n.value,x=Li(n)):Xs(n)?(f=()=>l(n),x=!0):mt(n)?(y=!0,x=n.some(T=>Xs(T)||Li(T)),f=()=>n.map(T=>{if(On(T))return T.value;if(Xs(T))return l(T);if(pt(T))return c?c(T,2):T()})):pt(n)?e?f=c?()=>c(n,2):n:f=()=>{if(p){cr();try{p()}finally{lr()}}const T=Kr;Kr=h;try{return c?c(n,3,[m]):n(m)}finally{Kr=T}}:f=Di,e&&r){const T=f,N=r===!0?1/0:r;f=()=>Mr(T(),N)}const v=Hb(),g=()=>{h.stop(),v&&v.active&&_h(v.effects,h)};if(s&&e){const T=e;e=(...N)=>{const B=T(...N);return g(),B}}let C=y?new Array(n.length).fill(uc):uc;const A=T=>{if(!(!(h.flags&1)||!h.dirty&&!T))if(e){const N=h.run();if(T||r||x||(y?N.some((B,z)=>Zi(B,C[z])):Zi(N,C))){p&&p();const B=Kr;Kr=h;try{const z=[N,C===uc?void 0:y&&C[0]===uc?[]:C,m];C=N,c?c(e,3,z):e(...z)}finally{Kr=B}}}else h.run()};return a&&a(A),h=new a0(f),h.scheduler=o?()=>o(A,!1):A,m=T=>hw(T,!1,h),p=h.onStop=()=>{const T=Oc.get(h);if(T){if(c)c(T,4);else for(const N of T)N();Oc.delete(h)}},e?i?A(!0):C=h.run():o?o(A.bind(null,!0),!0):h.run(),g.pause=h.pause.bind(h),g.resume=h.resume.bind(h),g.stop=g,g}function Mr(n,e=1/0,t){if(e<=0||!kt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,On(n))Mr(n.value,e,t);else if(mt(n))for(let i=0;i<n.length;i++)Mr(n[i],e,t);else if(wf(n)||ns(n))n.forEach(i=>{Mr(i,e,t)});else if(Pb(n)){for(const i in n)Mr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Mr(n[i],e,t)}return n}function ga(n,e,t,i){try{return i?n(...i):n()}catch(r){ll(r,e,t)}}function _i(n,e,t,i){if(pt(n)){const r=ga(n,e,t,i);return r&&i0(r)&&r.catch(s=>{ll(s,e,t)}),r}if(mt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(_i(n[s],e,t,i));return r}}function ll(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||zt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,l)===!1)return}a=a.parent}if(s){cr(),ga(s,null,10,[n,c,l]),lr();return}}pw(n,t,r,i,o)}function pw(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Dn=[];let Ei=-1;const qs=[];let Sr=null,ks=0;const M0=Promise.resolve();let Nc=null;function mw(n){const e=Nc||M0;return n?e.then(this?n.bind(this):n):e}function gw(n){let e=Ei+1,t=Dn.length;for(;e<t;){const i=e+t>>>1,r=Dn[i],s=ta(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ch(n){if(!(n.flags&1)){const e=ta(n),t=Dn[Dn.length-1];!t||!(n.flags&2)&&e>=ta(t)?Dn.push(n):Dn.splice(gw(e),0,n),n.flags|=1,T0()}}function T0(){Nc||(Nc=M0.then(w0))}function _w(n){if(!mt(n))Sr&&n.id===-1?Sr.splice(ks+1,0,n):n.flags&1||(qs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)qs.push(n[e]);T0()}function Up(n,e,t=Ei+1){for(;t<Dn.length;t++){const i=Dn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Dn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function b0(n){if(qs.length){const e=[...new Set(qs)].sort((t,i)=>ta(t)-ta(i));if(qs.length=0,Sr){for(let t=0;t<e.length;t++)Sr.push(e[t]);return}for(Sr=e,ks=0;ks<Sr.length;ks++){const t=Sr[ks];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Sr=null,ks=0}}const ta=n=>n.id==null?n.flags&2?-1:1/0:n.id;function w0(n){try{for(Ei=0;Ei<Dn.length;Ei++){const e=Dn[Ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ga(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ei<Dn.length;Ei++){const e=Dn[Ei];e&&(e.flags&=-2)}Ei=-1,Dn.length=0,b0(),Nc=null,(Dn.length||qs.length)&&w0()}}let Ci=null,A0=null;function Uc(n){const e=Ci;return Ci=n,A0=n&&n.type.__scopeId||null,e}function vw(n,e=Ci,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&qp(-1);const s=Uc(e),o=rs.length;let a;try{a=n(...r)}finally{for(let c=rs.length;c>o;c--)J0();Uc(s),i._d&&qp(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function $r(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(cr(),_i(c,t,8,[n.el,a,n,e]),lr())}}function xw(n,e){if(Ln){let t=Ln.provides;const i=Ln.parent&&Ln.parent.provides;i===t&&(t=Ln.provides=Object.create(i)),t[n]=e}}function yc(n,e,t=!1){const i=xA();if(i||js){let r=js?js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&pt(e)?e.call(i&&i.proxy):e}}const yw=Symbol.for("v-scx"),Sw=()=>yc(yw);function Eu(n,e,t){return R0(n,e,t)}function R0(n,e,t=zt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Sn({},t),c=e&&i||!e&&s!=="post";let l;if(ra){if(s==="sync"){const m=Sw();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Di,m.resume=Di,m.pause=Di,m}}const h=Ln;a.call=(m,x,y)=>_i(m,h,x,y);let f=!1;s==="post"?a.scheduler=m=>{Fn(m,h&&h.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,x)=>{x?m():Ch(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=dw(n,e,a);return ra&&(l?l.push(p):c&&p()),p}function Ew(n,e,t){const i=this.proxy,r=nn(n)?n.includes(".")?C0(i,n):()=>i[n]:n.bind(i,i);let s;pt(e)?s=e:(s=e.handler,t=e);const o=_a(this),a=R0(r,s.bind(i),t);return o(),a}function C0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Mw=Symbol("_vte"),ul=n=>n.__isTeleport,Mu=Symbol("_leaveCb");function Tw(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==fs){e=t;break}}return e}function P0(n){if(!Ih(n))return ul(n.type)&&n.children?Tw(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&pt(t.default))return t.default()}}function Ph(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Ph(ul(t.type)&&P0(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function bw(n,e){return pt(n)?Sn({name:n.name},e,{setup:n}):n}function I0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fp(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Fc=new WeakMap;function zo(n,e,t,i,r=!1){if(mt(n)){n.forEach((y,v)=>zo(y,e&&(mt(e)?e[v]:e),t,i,r));return}if(ko(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zo(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Oh(i.component):i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,h=a.refs===zt?a.refs={}:a.refs,f=a.setupState,p=Lt(f),m=f===zt?n0:y=>Fp(h,y)?!1:Rt(p,y),x=(y,v)=>!(v&&Fp(h,v));if(l!=null&&l!==c){if(Bp(e),nn(l))h[l]=null,m(l)&&(f[l]=null);else if(On(l)){const y=e;x(l,y.k)&&(l.value=null),y.k&&(h[y.k]=null)}}if(pt(c))ga(c,a,12,[o,h]);else{const y=nn(c),v=On(c);if(y||v){const g=()=>{if(n.f){const C=y?m(c)?f[c]:h[c]:x()||!n.k?c.value:h[n.k];if(r)mt(C)&&_h(C,s);else if(mt(C))C.includes(s)||C.push(s);else if(y)h[c]=[s],m(c)&&(f[c]=h[c]);else{const A=[s];x(c,n.k)&&(c.value=A),n.k&&(h[n.k]=A)}}else y?(h[c]=o,m(c)&&(f[c]=o)):v&&(x(c,n.k)&&(c.value=o),n.k&&(h[n.k]=o))};if(o){const C=()=>{g(),Fc.delete(n)};C.id=-1,Fc.set(n,C),Fn(C,t)}else Bp(n),g()}}}function Bp(n){const e=Fc.get(n);e&&(e.flags|=8,Fc.delete(n))}al().requestIdleCallback;al().cancelIdleCallback;const ko=n=>!!n.type.__asyncLoader,Ih=n=>n.type.__isKeepAlive;function ww(n,e){D0(n,"a",e)}function Aw(n,e){D0(n,"da",e)}function D0(n,e,t=Ln){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ih(r.parent.vnode)&&Rw(i,e,t,r),r=r.parent}}function Rw(n,e,t,i){const r=fl(e,n,i,!0);L0(()=>{_h(i[e],r)},t)}function fl(n,e,t=Ln,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{cr();const a=_a(t),c=_i(e,t,n,o);return a(),lr(),c});return i?r.unshift(s):r.push(s),s}}const ur=n=>(e,t=Ln)=>{(!ra||n==="sp")&&fl(n,(...i)=>e(...i),t)},Cw=ur("bm"),Pw=ur("m"),Iw=ur("bu"),Dw=ur("u"),Lw=ur("bum"),L0=ur("um"),Ow=ur("sp"),Nw=ur("rtg"),Uw=ur("rtc");function Fw(n,e=Ln){fl("ec",n,e)}const Bw=Symbol.for("v-ndc"),Df=n=>n?e_(n)?Oh(n):Df(n.parent):null,Vo=Sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Df(n.parent),$root:n=>Df(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>N0(n),$forceUpdate:n=>n.f||(n.f=()=>{Ch(n.update)}),$nextTick:n=>n.n||(n.n=mw.bind(n.proxy)),$watch:n=>Ew.bind(n)}),Tu=(n,e)=>n!==zt&&!n.__isScriptSetup&&Rt(n,e),zw={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Tu(i,e))return o[e]=1,i[e];if(r!==zt&&Rt(r,e))return o[e]=2,r[e];if(Rt(s,e))return o[e]=3,s[e];if(t!==zt&&Rt(t,e))return o[e]=4,t[e];Lf&&(o[e]=0)}}const l=Vo[e];let h,f;if(l)return e==="$attrs"&&An(n.attrs,"get",""),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==zt&&Rt(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,Rt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Tu(r,e)?(r[e]=t,!0):i!==zt&&Rt(i,e)?(i[e]=t,!0):Rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let c;return!!(t[a]||n!==zt&&a[0]!=="$"&&Rt(n,a)||Tu(e,a)||Rt(s,a)||Rt(i,a)||Rt(Vo,a)||Rt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zp(n){return mt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Lf=!0;function kw(n){const e=N0(n),t=n.proxy,i=n.ctx;Lf=!1,e.beforeCreate&&kp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:x,activated:y,deactivated:v,beforeDestroy:g,beforeUnmount:C,destroyed:A,unmounted:T,render:N,renderTracked:B,renderTriggered:z,errorCaptured:J,serverPrefetch:I,expose:P,inheritAttrs:U,components:ye,directives:D,filters:W}=e;if(l&&Vw(l,i,null),o)for(const V in o){const k=o[V];pt(k)&&(i[V]=k.bind(t))}if(r){const V=r.call(t,t);kt(V)&&(n.data=wh(V))}if(Lf=!0,s)for(const V in s){const k=s[V],Se=pt(k)?k.bind(t,t):pt(k.get)?k.get.bind(t,t):Di,Ee=!pt(k)&&pt(k.set)?k.set.bind(t):Di,Ce=bA({get:Se,set:Ee});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Ne=>Ce.value=Ne})}if(a)for(const V in a)O0(a[V],i,t,V);if(c){const V=pt(c)?c.call(t):c;Reflect.ownKeys(V).forEach(k=>{xw(k,V[k])})}h&&kp(h,n,"c");function F(V,k){mt(k)?k.forEach(Se=>V(Se.bind(t))):k&&V(k.bind(t))}if(F(Cw,f),F(Pw,p),F(Iw,m),F(Dw,x),F(ww,y),F(Aw,v),F(Fw,J),F(Uw,B),F(Nw,z),F(Lw,C),F(L0,T),F(Ow,I),mt(P))if(P.length){const V=n.exposed||(n.exposed={});P.forEach(k=>{Object.defineProperty(V,k,{get:()=>t[k],set:Se=>t[k]=Se,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===Di&&(n.render=N),U!=null&&(n.inheritAttrs=U),ye&&(n.components=ye),D&&(n.directives=D),I&&I0(n)}function Vw(n,e,t=Di){mt(n)&&(n=Of(n));for(const i in n){const r=n[i];let s;kt(r)?"default"in r?s=yc(r.from||i,r.default,!0):s=yc(r.from||i):s=yc(r),On(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function kp(n,e,t){_i(mt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function O0(n,e,t,i){let r=i.includes(".")?C0(t,i):()=>t[i];if(nn(n)){const s=e[n];pt(s)&&Eu(r,s)}else if(pt(n))Eu(r,n.bind(t));else if(kt(n))if(mt(n))n.forEach(s=>O0(s,e,t,i));else{const s=pt(n.handler)?n.handler.bind(t):e[n.handler];pt(s)&&Eu(r,s,n)}}function N0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Bc(c,l,o,!0)),Bc(c,e,o)),kt(e)&&s.set(e,c),c}function Bc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Bc(n,s,t,!0),r&&r.forEach(o=>Bc(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Hw[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Hw={data:Vp,props:Hp,emits:Hp,methods:Io,computed:Io,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:Io,directives:Io,watch:Ww,provide:Vp,inject:Gw};function Vp(n,e){return e?n?function(){return Sn(pt(n)?n.call(this,this):n,pt(e)?e.call(this,this):e)}:e:n}function Gw(n,e){return Io(Of(n),Of(e))}function Of(n){if(mt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pn(n,e){return n?[...new Set([].concat(n,e))]:e}function Io(n,e){return n?Sn(Object.create(null),n,e):e}function Hp(n,e){return n?mt(n)&&mt(e)?[...new Set([...n,...e])]:Sn(Object.create(null),zp(n),zp(e??{})):e}function Ww(n,e){if(!n)return e;if(!e)return n;const t=Sn(Object.create(null),n);for(const i in e)t[i]=Pn(n[i],e[i]);return t}function U0(){return{app:null,config:{isNativeTag:n0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $w=0;function Xw(n,e){return function(i,r=null){pt(i)||(i=Sn({},i)),r!=null&&!kt(r)&&(r=null);const s=U0(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:$w++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wA,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&pt(h.install)?(o.add(h),h.install(l,...f)):pt(h)&&(o.add(h),h(l,...f))),l},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),l},component(h,f){return f?(s.components[h]=f,l):s.components[h]},directive(h,f){return f?(s.directives[h]=f,l):s.directives[h]},mount(h,f,p){if(!c){const m=l._ceVNode||Xn(i,r);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),n(m,h,p),c=!0,l._container=h,h.__vue_app__=l,Oh(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(_i(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,f){return s.provides[h]=f,l},runWithContext(h){const f=js;js=l;try{return h()}finally{js=f}}};return l}}let js=null;const qw=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${di(e)}Modifiers`]||n[`${ps(e)}Modifiers`];function jw(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||zt;let r=t;const s=e.startsWith("update:"),o=s&&qw(i,e.slice(7));o&&(o.trim&&(r=t.map(h=>nn(h)?h.trim():h)),o.number&&(r=r.map(Lb)));let a,c=i[a=_u(e)]||i[a=_u(di(e))];!c&&s&&(c=i[a=_u(ps(e))]),c&&_i(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,_i(l,n,6,r)}}const Yw=new WeakMap;function F0(n,e,t=!1){const i=t?Yw:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!pt(n)){const c=l=>{const h=F0(l,e,!0);h&&(a=!0,Sn(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(kt(n)&&i.set(n,null),null):(mt(s)?s.forEach(c=>o[c]=null):Sn(o,s),kt(n)&&i.set(n,o),o)}function hl(n,e){return!n||!rl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Rt(n,e[0].toLowerCase()+e.slice(1))||Rt(n,ps(e))||Rt(n,e))}function Gp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:h,props:f,data:p,setupState:m,ctx:x,inheritAttrs:y}=n,v=Uc(n);let g,C;try{if(t.shapeFlag&4){const T=r||i,N=T;g=bi(l.call(N,T,h,f,m,p,x)),C=a}else{const T=e;g=bi(T.length>1?T(f,{attrs:a,slots:o,emit:c}):T(f,null)),C=e.props?a:Kw(a)}}catch(T){rs.length=0,ll(T,n,1),g=Xn(fs)}let A=g;if(C&&y!==!1){const T=Object.keys(C),{shapeFlag:N}=A;T.length&&N&7&&(s&&T.some(sl)&&(C=Jw(C,s)),A=io(A,C,!1,!0))}if(t.dirs&&(A=io(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition){const T=ul(A.type)&&P0(A)||A;Ph(T,t.transition)}return g=A,Uc(v),g}const Kw=n=>{let e;for(const t in n)(t==="class"||t==="style"||rl(t))&&((e||(e={}))[t]=n[t]);return e},Jw=(n,e)=>{const t={};for(const i in n)(!sl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Zw(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Wp(i,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(B0(o,i,p)&&!hl(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Wp(i,o,l):!0:!!o;return!1}function Wp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(B0(e,n,s)&&!hl(t,s))return!0}return!1}function B0(n,e,t){const i=n[t],r=e[t];return t==="style"&&kt(i)&&kt(r)?!cl(i,r):i!==r}function Qw({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const z0={},k0=()=>Object.create(z0),V0=n=>Object.getPrototypeOf(n)===z0;function eA(n,e,t,i=!1){const r={},s=k0();n.propsDefaults=Object.create(null),H0(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ow(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function tA(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Lt(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(hl(n.emitsOptions,p))continue;const m=e[p];if(c)if(Rt(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const x=di(p);r[x]=Nf(c,a,x,m,n,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{H0(n,e,r,s)&&(l=!0);let h;for(const f in a)(!e||!Rt(e,f)&&((h=ps(f))===f||!Rt(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=Nf(c,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Rt(e,f))&&(delete s[f],l=!0)}l&&Qi(n.attrs,"set","")}function H0(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Uo(c))continue;const l=e[c];let h;r&&Rt(r,h=di(c))?!s||!s.includes(h)?t[h]=l:(a||(a={}))[h]=l:hl(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=Lt(t),l=a||zt;for(let h=0;h<s.length;h++){const f=s[h];t[f]=Nf(r,c,f,l[f],n,!Rt(l,f))}}return o}function Nf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pt(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const h=_a(r);i=l[t]=c.call(null,e),h()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ps(t))&&(i=!0))}return i}const nA=new WeakMap;function G0(n,e,t=!1){const i=t?nA:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!pt(n)){const h=f=>{c=!0;const[p,m]=G0(f,e,!0);Sn(o,p),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!s&&!c)return kt(n)&&i.set(n,$s),$s;if(mt(s))for(let h=0;h<s.length;h++){const f=di(s[h]);$p(f)&&(o[f]=zt)}else if(s)for(const h in s){const f=di(h);if($p(f)){const p=s[h],m=o[f]=mt(p)||pt(p)?{type:p}:Sn({},p),x=m.type;let y=!1,v=!0;if(mt(x))for(let g=0;g<x.length;++g){const C=x[g],A=pt(C)&&C.name;if(A==="Boolean"){y=!0;break}else A==="String"&&(v=!1)}else y=pt(x)&&x.name==="Boolean";m[0]=y,m[1]=v,(y||Rt(m,"default"))&&a.push(f)}}const l=[o,a];return kt(n)&&i.set(n,l),l}function $p(n){return n[0]!=="$"&&!Uo(n)}const Dh=n=>n==="_"||n==="_ctx"||n==="$stable",Lh=n=>mt(n)?n.map(bi):[bi(n)],iA=(n,e,t)=>{if(e._n)return e;const i=vw((...r)=>Lh(e(...r)),t);return i._c=!1,i},W0=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Dh(r))continue;const s=n[r];if(pt(s))e[r]=iA(r,s,i);else if(s!=null){const o=Lh(s);e[r]=()=>o}}},$0=(n,e)=>{const t=Lh(e);n.slots.default=()=>t},X0=(n,e,t)=>{for(const i in e)(t||!Dh(i))&&(n[i]=e[i])},rA=(n,e,t)=>{const i=n.slots=k0();if(n.vnode.shapeFlag&32){const r=e._;r?(X0(i,e,t),t&&s0(i,"_",r,!0)):W0(e,i)}else e&&$0(n,e)},sA=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=zt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:X0(r,e,t):(s=!e.$stable,W0(e,r)),o=e}else e&&($0(n,e),o={default:1});if(s)for(const a in r)!Dh(a)&&o[a]==null&&delete r[a]},Fn=uA;function oA(n){return aA(n)}function aA(n,e){const t=al();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Di,insertStaticContent:x}=n,y=(L,M,te,se=null,he=null,Q=null,Me=void 0,oe=null,de=!!M.dynamicChildren)=>{if(L===M)return;L&&!Ao(L,M)&&(se=Ie(L),Ne(L,he,Q,!0),L=null),M.patchFlag===-2&&(de=!1,M.dynamicChildren=null);const{type:_e,ref:He,shapeFlag:w}=M;switch(_e){case dl:v(L,M,te,se);break;case fs:g(L,M,te,se);break;case Sc:L==null&&C(M,te,se,Me);break;case Yi:ye(L,M,te,se,he,Q,Me,oe,de);break;default:w&1?N(L,M,te,se,he,Q,Me,oe,de):w&6?D(L,M,te,se,he,Q,Me,oe,de):(w&64||w&128)&&_e.process(L,M,te,se,he,Q,Me,oe,de,it)}He!=null&&he?zo(He,L&&L.ref,Q,M||L,!M):He==null&&L&&L.ref!=null&&zo(L.ref,null,Q,L,!0)},v=(L,M,te,se)=>{if(L==null)i(M.el=a(M.children),te,se);else{const he=M.el=L.el;M.children!==L.children&&l(he,M.children)}},g=(L,M,te,se)=>{L==null?i(M.el=c(M.children||""),te,se):M.el=L.el},C=(L,M,te,se)=>{[L.el,L.anchor]=x(L.children,M,te,se,L.el,L.anchor)},A=({el:L,anchor:M},te,se)=>{let he;for(;L&&L!==M;)he=p(L),i(L,te,se),L=he;i(M,te,se)},T=({el:L,anchor:M})=>{let te;for(;L&&L!==M;)te=p(L),r(L),L=te;r(M)},N=(L,M,te,se,he,Q,Me,oe,de)=>{if(M.type==="svg"?Me="svg":M.type==="math"&&(Me="mathml"),L==null)B(M,te,se,he,Q,Me,oe,de);else{const _e=L.el&&L.el._isVueCE?L.el:null;try{_e&&_e._beginPatch(),I(L,M,he,Q,Me,oe,de)}finally{_e&&_e._endPatch()}}},B=(L,M,te,se,he,Q,Me,oe)=>{let de,_e;const{props:He,shapeFlag:w,transition:S,dirs:H}=L;if(de=L.el=o(L.type,Q,He&&He.is,He),w&8?h(de,L.children):w&16&&J(L.children,de,null,se,he,bu(L,Q),Me,oe),H&&$r(L,null,se,"created"),z(de,L,L.scopeId,Me,se),He){for(const ve in He)ve!=="value"&&!Uo(ve)&&s(de,ve,null,He[ve],Q,se);"value"in He&&s(de,"value",null,He.value,Q),(_e=He.onVnodeBeforeMount)&&Si(_e,se,L)}H&&$r(L,null,se,"beforeMount");const ne=cA(he,S);ne&&S.beforeEnter(de),i(de,M,te),((_e=He&&He.onVnodeMounted)||ne||H)&&Fn(()=>{_e&&Si(_e,se,L),ne&&S.enter(de),H&&$r(L,null,se,"mounted")},he)},z=(L,M,te,se,he)=>{if(te&&m(L,te),se)for(let Q=0;Q<se.length;Q++)m(L,se[Q]);if(he){let Q=he.subTree;if(M===Q||K0(Q.type)&&(Q.ssContent===M||Q.ssFallback===M)){const Me=he.vnode;z(L,Me,Me.scopeId,Me.slotScopeIds,he.parent)}}},J=(L,M,te,se,he,Q,Me,oe,de=0)=>{for(let _e=de;_e<L.length;_e++){const He=L[_e]=oe?Ki(L[_e]):bi(L[_e]);y(null,He,M,te,se,he,Q,Me,oe)}},I=(L,M,te,se,he,Q,Me)=>{const oe=M.el=L.el;let{patchFlag:de,dynamicChildren:_e,dirs:He}=M;de|=L.patchFlag&16;const w=L.props||zt,S=M.props||zt;let H;if(te&&Xr(te,!1),(H=S.onVnodeBeforeUpdate)&&Si(H,te,M,L),He&&$r(M,L,te,"beforeUpdate"),te&&Xr(te,!0),_e&&(!L.dynamicChildren||L.dynamicChildren.length!==_e.length)&&(de=0,Me=!1,_e=null),(w.innerHTML&&S.innerHTML==null||w.textContent&&S.textContent==null)&&h(oe,""),_e?P(L.dynamicChildren,_e,oe,te,se,bu(M,he),Q):Me||k(L,M,oe,null,te,se,bu(M,he),Q,!1),de>0){if(de&16)U(oe,w,S,te,he);else if(de&2&&w.class!==S.class&&s(oe,"class",null,S.class,he),de&4&&s(oe,"style",w.style,S.style,he),de&8){const ne=M.dynamicProps;for(let ve=0;ve<ne.length;ve++){const ie=ne[ve],Fe=w[ie],Te=S[ie];(Te!==Fe||ie==="value")&&s(oe,ie,Fe,Te,he,te)}}de&1&&L.children!==M.children&&h(oe,M.children)}else!Me&&_e==null&&U(oe,w,S,te,he);((H=S.onVnodeUpdated)||He)&&Fn(()=>{H&&Si(H,te,M,L),He&&$r(M,L,te,"updated")},se)},P=(L,M,te,se,he,Q,Me)=>{for(let oe=0;oe<M.length;oe++){const de=L[oe],_e=M[oe],He=de.el&&(de.type===Yi||!Ao(de,_e)||de.shapeFlag&198)?f(de.el):te;y(de,_e,He,null,se,he,Q,Me,!0)}},U=(L,M,te,se,he)=>{if(M!==te){if(M!==zt)for(const Q in M)!Uo(Q)&&!(Q in te)&&s(L,Q,M[Q],null,he,se);for(const Q in te){if(Uo(Q))continue;const Me=te[Q],oe=M[Q];Me!==oe&&Q!=="value"&&s(L,Q,oe,Me,he,se)}"value"in te&&s(L,"value",M.value,te.value,he)}},ye=(L,M,te,se,he,Q,Me,oe,de)=>{const _e=M.el=L?L.el:a(""),He=M.anchor=L?L.anchor:a("");let{patchFlag:w,dynamicChildren:S,slotScopeIds:H}=M;H&&(oe=oe?oe.concat(H):H),L==null?(i(_e,te,se),i(He,te,se),J(M.children||[],te,He,he,Q,Me,oe,de)):w>0&&w&64&&S&&L.dynamicChildren&&L.dynamicChildren.length===S.length?(P(L.dynamicChildren,S,te,he,Q,Me,oe),(M.key!=null||he&&M===he.subTree)&&q0(L,M,!0)):k(L,M,te,He,he,Q,Me,oe,de)},D=(L,M,te,se,he,Q,Me,oe,de)=>{M.slotScopeIds=oe,L==null?M.shapeFlag&512?he.ctx.activate(M,te,se,Me,de):W(M,te,se,he,Q,Me,de):$(L,M,de)},W=(L,M,te,se,he,Q,Me)=>{const oe=L.component=vA(L,se,he);if(Ih(L)&&(oe.ctx.renderer=it),yA(oe,!1,Me),oe.asyncDep){if(he&&he.registerDep(oe,F,Me),!L.el){const de=oe.subTree=Xn(fs);g(null,de,M,te),L.placeholder=de.el}}else F(oe,L,M,te,he,Q,Me)},$=(L,M,te)=>{const se=M.component=L.component;if(Zw(L,M,te))if(se.asyncDep&&!se.asyncResolved){V(se,M,te);return}else se.next=M,se.update();else M.el=L.el,se.vnode=M},F=(L,M,te,se,he,Q,Me)=>{const oe=()=>{if(L.isMounted){let{next:w,bu:S,u:H,parent:ne,vnode:ve}=L;{const Oe=j0(L);if(Oe){w&&(w.el=ve.el,V(L,w,Me)),Oe.asyncDep.then(()=>{Fn(()=>{L.isUnmounted||_e()},he)});return}}let ie=w,Fe;Xr(L,!1),w?(w.el=ve.el,V(L,w,Me)):w=ve,S&&vu(S),(Fe=w.props&&w.props.onVnodeBeforeUpdate)&&Si(Fe,ne,w,ve),Xr(L,!0);const Te=Gp(L),Je=L.subTree;L.subTree=Te,y(Je,Te,f(Je.el),Ie(Je),L,he,Q),w.el=Te.el,ie===null&&Qw(L,Te.el),H&&Fn(H,he),(Fe=w.props&&w.props.onVnodeUpdated)&&Fn(()=>Si(Fe,ne,w,ve),he)}else{let w;const{el:S,props:H}=M,{bm:ne,m:ve,parent:ie,root:Fe,type:Te}=L,Je=ko(M);Xr(L,!1),ne&&vu(ne),!Je&&(w=H&&H.onVnodeBeforeMount)&&Si(w,ie,M),Xr(L,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(Te,L.parent?L.parent.type:void 0);const Oe=L.subTree=Gp(L);y(null,Oe,te,se,L,he,Q),M.el=Oe.el}if(ve&&Fn(ve,he),!Je&&(w=H&&H.onVnodeMounted)){const Oe=M;Fn(()=>Si(w,ie,Oe),he)}(M.shapeFlag&256||ie&&ko(ie.vnode)&&ie.vnode.shapeFlag&256)&&L.a&&Fn(L.a,he),L.isMounted=!0,M=te=se=null}};L.scope.on();const de=L.effect=new a0(oe);L.scope.off();const _e=L.update=de.run.bind(de),He=L.job=de.runIfDirty.bind(de);He.i=L,He.id=L.uid,de.scheduler=()=>Ch(He),Xr(L,!0),_e()},V=(L,M,te)=>{M.component=L;const se=L.vnode.props;L.vnode=M,L.next=null,tA(L,M.props,se,te),sA(L,M.children,te),cr(),Up(L),lr()},k=(L,M,te,se,he,Q,Me,oe,de=!1)=>{const _e=L&&L.children,He=L?L.shapeFlag:0,w=M.children,{patchFlag:S,shapeFlag:H}=M;if(S>0){if(S&128){Ee(_e,w,te,se,he,Q,Me,oe,de);return}else if(S&256){Se(_e,w,te,se,he,Q,Me,oe,de);return}}H&8?(He&16&&Ue(_e,he,Q),w!==_e&&h(te,w)):He&16?H&16?Ee(_e,w,te,se,he,Q,Me,oe,de):Ue(_e,he,Q,!0):(He&8&&h(te,""),H&16&&J(w,te,se,he,Q,Me,oe,de))},Se=(L,M,te,se,he,Q,Me,oe,de)=>{L=L||$s,M=M||$s;const _e=L.length,He=M.length,w=Math.min(_e,He);let S;for(S=0;S<w;S++){const H=M[S]=de?Ki(M[S]):bi(M[S]);y(L[S],H,te,null,he,Q,Me,oe,de)}_e>He?Ue(L,he,Q,!0,!1,w):J(M,te,se,he,Q,Me,oe,de,w)},Ee=(L,M,te,se,he,Q,Me,oe,de)=>{let _e=0;const He=M.length;let w=L.length-1,S=He-1;for(;_e<=w&&_e<=S;){const H=L[_e],ne=M[_e]=de?Ki(M[_e]):bi(M[_e]);if(Ao(H,ne))y(H,ne,te,null,he,Q,Me,oe,de);else break;_e++}for(;_e<=w&&_e<=S;){const H=L[w],ne=M[S]=de?Ki(M[S]):bi(M[S]);if(Ao(H,ne))y(H,ne,te,null,he,Q,Me,oe,de);else break;w--,S--}if(_e>w){if(_e<=S){const H=S+1,ne=H<He?M[H].el:se;for(;_e<=S;)y(null,M[_e]=de?Ki(M[_e]):bi(M[_e]),te,ne,he,Q,Me,oe,de),_e++}}else if(_e>S)for(;_e<=w;)Ne(L[_e],he,Q,!0),_e++;else{const H=_e,ne=_e,ve=new Map;for(_e=ne;_e<=S;_e++){const qe=M[_e]=de?Ki(M[_e]):bi(M[_e]);qe.key!=null&&ve.set(qe.key,_e)}let ie,Fe=0;const Te=S-ne+1;let Je=!1,Oe=0;const we=new Array(Te);for(_e=0;_e<Te;_e++)we[_e]=0;for(_e=H;_e<=w;_e++){const qe=L[_e];if(Fe>=Te){Ne(qe,he,Q,!0);continue}let Ke;if(qe.key!=null)Ke=ve.get(qe.key);else for(ie=ne;ie<=S;ie++)if(we[ie-ne]===0&&Ao(qe,M[ie])){Ke=ie;break}Ke===void 0?Ne(qe,he,Q,!0):(we[Ke-ne]=_e+1,Ke>=Oe?Oe=Ke:Je=!0,y(qe,M[Ke],te,null,he,Q,Me,oe,de),Fe++)}const ke=Je?lA(we):$s;for(ie=ke.length-1,_e=Te-1;_e>=0;_e--){const qe=ne+_e,Ke=M[qe],Be=M[qe+1],st=qe+1<He?Be.el||Y0(Be):se;we[_e]===0?y(null,Ke,te,st,he,Q,Me,oe,de):Je&&(ie<0||_e!==ke[ie]?Ce(Ke,te,st,2):ie--)}}},Ce=(L,M,te,se,he=null)=>{const{el:Q,type:Me,transition:oe,children:de,shapeFlag:_e}=L;if(_e&6){Ce(L.component.subTree,M,te,se);return}if(_e&128){L.suspense.move(M,te,se);return}if(_e&64){Me.move(L,M,te,it);return}if(Me===Yi){i(Q,M,te);for(let w=0;w<de.length;w++)Ce(de[w],M,te,se);i(L.anchor,M,te);return}if(Me===Sc){A(L,M,te);return}if(se!==2&&_e&1&&oe)if(se===0)oe.persisted&&!Q[Mu]?i(Q,M,te):(oe.beforeEnter(Q),i(Q,M,te),Fn(()=>oe.enter(Q),he));else{const{leave:w,delayLeave:S,afterLeave:H}=oe,ne=()=>{L.ctx.isUnmounted?r(Q):i(Q,M,te)},ve=()=>{const ie=Q._isLeaving||!!Q[Mu];Q._isLeaving&&Q[Mu](!0),oe.persisted&&!ie?ne():w(Q,()=>{ne(),H&&H()})};S?S(Q,ne,ve):ve()}else i(Q,M,te)},Ne=(L,M,te,se=!1,he=!1)=>{const{type:Q,props:Me,ref:oe,children:de,dynamicChildren:_e,shapeFlag:He,patchFlag:w,dirs:S,cacheIndex:H,memo:ne}=L;if(w===-2&&(he=!1),oe!=null&&(cr(),zo(oe,null,te,L,!0),lr()),H!=null&&(M.renderCache[H]=void 0),He&256){M.ctx.deactivate(L);return}const ve=He&1&&S,ie=!ko(L);let Fe;if(ie&&(Fe=Me&&Me.onVnodeBeforeUnmount)&&Si(Fe,M,L),He&6)ge(L.component,te,se);else{if(He&128){L.suspense.unmount(te,se);return}ve&&$r(L,null,M,"beforeUnmount"),He&64?L.type.remove(L,M,te,it,se):_e&&!_e.hasOnce&&(Q!==Yi||w>0&&w&64)?Ue(_e,M,te,!1,!0):(Q===Yi&&w&384||!he&&He&16)&&Ue(de,M,te),se&&ft(L)}const Te=ne!=null&&H==null;(ie&&(Fe=Me&&Me.onVnodeUnmounted)||ve||Te)&&Fn(()=>{Fe&&Si(Fe,M,L),ve&&$r(L,null,M,"unmounted"),Te&&(L.el=null)},te)},ft=L=>{const{type:M,el:te,anchor:se,transition:he}=L;if(M===Yi){ht(te,se);return}if(M===Sc){T(L);return}const Q=()=>{r(te),he&&!he.persisted&&he.afterLeave&&he.afterLeave()};if(L.shapeFlag&1&&he&&!he.persisted){const{leave:Me,delayLeave:oe}=he,de=()=>Me(te,Q);oe?oe(L.el,Q,de):de()}else Q()},ht=(L,M)=>{let te;for(;L!==M;)te=p(L),r(L),L=te;r(M)},ge=(L,M,te)=>{const{bum:se,scope:he,job:Q,subTree:Me,um:oe,m:de,a:_e}=L;Xp(de),Xp(_e),se&&vu(se),he.stop(),Q&&(Q.flags|=8,Ne(Me,L,M,te)),oe&&Fn(oe,M),Fn(()=>{L.isUnmounted=!0},M)},Ue=(L,M,te,se=!1,he=!1,Q=0)=>{for(let Me=Q;Me<L.length;Me++)Ne(L[Me],M,te,se,he)},Ie=L=>{if(L.shapeFlag&6)return Ie(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const M=p(L.anchor||L.el),te=M&&M[Mw];return te?p(te):M};let Qe=!1;const nt=(L,M,te)=>{let se;L==null?M._vnode&&(Ne(M._vnode,null,null,!0),se=M._vnode.component):y(M._vnode||null,L,M,null,null,null,te),M._vnode=L,Qe||(Qe=!0,Up(se),b0(),Qe=!1)},it={p:y,um:Ne,m:Ce,r:ft,mt:W,mc:J,pc:k,pbc:P,n:Ie,o:n};return{render:nt,hydrate:void 0,createApp:Xw(nt)}}function bu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function cA(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function q0(n,e,t=!1){const i=n.children,r=e.children;if(mt(i)&&mt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ki(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&q0(o,a)),a.type===dl&&(a.patchFlag===-1&&(a=r[s]=Ki(a)),a.el=o.el),a.type===fs&&!a.el&&(a.el=o.el)}}function lA(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function j0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:j0(e)}function Xp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Y0(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Y0(e.subTree):null}const K0=n=>n.__isSuspense;function uA(n,e){e&&e.pendingBranch?mt(n)?e.effects.push(...n):e.effects.push(n):_w(n)}const Yi=Symbol.for("v-fgt"),dl=Symbol.for("v-txt"),fs=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),rs=[];let qn=null;function lo(n=!1){rs.push(qn=n?null:[])}function J0(){rs.pop(),qn=rs[rs.length-1]||null}let na=1;function qp(n,e=!1){na+=n,n<0&&qn&&e&&(qn.hasOnce=!0)}function fA(n){return n.dynamicChildren=na>0?qn||$s:null,J0(),na>0&&qn&&qn.push(n),n}function uo(n,e,t,i,r,s){return fA(br(n,e,t,i,r,s,!0))}function Z0(n){return n?n.__v_isVNode===!0:!1}function Ao(n,e){return n.type===e.type&&n.key===e.key}const Q0=({key:n})=>n??null,Ec=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?nn(n)||On(n)||pt(n)?{i:Ci,r:n,k:e,f:!!t}:n:null);function br(n,e=null,t=null,i=0,r=null,s=n===Yi?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Q0(e),ref:e&&Ec(e),scopeId:A0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ci};return a?(zc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=nn(t)?8:16),na>0&&!o&&qn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&qn.push(c),c}const Xn=hA;function hA(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Bw)&&(n=fs),Z0(n)){const a=io(n,e,!0);return t&&zc(a,t),na>0&&!s&&qn&&(a.shapeFlag&6?qn[qn.indexOf(n)]=a:qn.push(a)),a.patchFlag=-2,a}if(TA(n)&&(n=n.__vccOpts),e){e=dA(e);let{class:a,style:c}=e;a&&!nn(a)&&(e.class=yh(a)),kt(c)&&(Rh(c)&&!mt(c)&&(c=Sn({},c)),e.style=xh(c))}const o=nn(n)?1:K0(n)?128:ul(n)?64:kt(n)?4:pt(n)?2:0;return br(n,e,t,i,r,o,s,!0)}function dA(n){return n?Rh(n)||V0(n)?Sn({},n):n:null}function io(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,l=e?mA(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Q0(l),ref:e&&e.ref?t&&s?mt(s)?s.concat(Ec(e)):[s,Ec(e)]:Ec(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Yi?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&io(n.ssContent),ssFallback:n.ssFallback&&io(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Ph(h,c.clone(h)),h}function pA(n=" ",e=0){return Xn(dl,null,n,e)}function pl(n,e){const t=Xn(Sc,null,n);return t.staticCount=e,t}function bi(n){return n==null||typeof n=="boolean"?Xn(fs):mt(n)?Xn(Yi,null,n.slice()):Z0(n)?Ki(n):Xn(dl,null,String(n))}function Ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:io(n)}function zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(mt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!V0(e)?e._ctx=Ci:r===3&&Ci&&(Ci.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(pt(e)){if(i&65){zc(n,{default:e});return}e={default:e,_ctx:Ci},t=32}else e=String(e),i&64?(t=16,e=[pA(e)]):t=8;n.children=e,n.shapeFlag|=t}function mA(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=yh([e.class,i.class]));else if(r==="style")e.style=xh([e.style,i.style]);else if(rl(r)){const s=e[r],o=i[r];o&&s!==o&&!(mt(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!sl(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Si(n,e,t,i=null){_i(n,e,7,[t,i])}const gA=U0();let _A=0;function vA(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||gA,s={uid:_A++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G0(i,r),emitsOptions:F0(i,r),emit:null,emitted:null,propsDefaults:zt,inheritAttrs:i.inheritAttrs,ctx:zt,data:zt,props:zt,attrs:zt,slots:zt,refs:zt,setupState:zt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jw.bind(null,s),n.ce&&n.ce(s),s}let Ln=null;const xA=()=>Ln||Ci;let kc,ia;{const n=al(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};kc=e("__VUE_INSTANCE_SETTERS__",t=>Ln=t),ia=e("__VUE_SSR_SETTERS__",t=>ra=t)}const _a=n=>{const e=Ln;return kc(n),n.scope.on(),()=>{n.scope.off(),kc(e)}},jp=()=>{Ln&&Ln.scope.off(),kc(null)};function e_(n){return n.vnode.shapeFlag&4}let ra=!1;function yA(n,e=!1,t=!1){e&&ia(e);const{props:i,children:r}=n.vnode,s=e_(n);eA(n,i,s,e),rA(n,r,t||e);const o=s?SA(n,e):void 0;return e&&ia(!1),o}function SA(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zw);const{setup:i}=t;if(i){cr();const r=n.setupContext=i.length>1?MA(n):null,s=_a(n),o=ga(i,n,0,[n.props,r]),a=i0(o);if(lr(),s(),(a||n.sp)&&!ko(n)&&I0(n),a){if(o.then(jp,jp),e)return o.then(c=>{ia(!0);try{Yp(n,c,e)}finally{ia(!1)}}).catch(c=>{ll(c,n,0)});n.asyncDep=o}else Yp(n,o)}else t_(n)}function Yp(n,e,t){pt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:kt(e)&&(n.setupState=E0(e)),t_(n)}function t_(n,e,t){const i=n.type;n.render||(n.render=i.render||Di);{const r=_a(n);cr();try{kw(n)}finally{lr(),r()}}}const EA={get(n,e){return An(n,"get",""),n[e]}};function MA(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,EA),slots:n.slots,emit:n.emit,expose:e}}function Oh(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(E0(aw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vo)return Vo[t](n)},has(e,t){return t in e||t in Vo}})):n.proxy}function TA(n){return pt(n)&&"__vccOpts"in n}const bA=(n,e)=>fw(n,e,ra),wA="3.5.42";let Uf;const Kp=typeof window<"u"&&window.trustedTypes;if(Kp)try{Uf=Kp.createPolicy("vue",{createHTML:n=>n})}catch{}const n_=Uf?n=>Uf.createHTML(n):n=>n,AA="http://www.w3.org/2000/svg",RA="http://www.w3.org/1998/Math/MathML",ji=typeof document<"u"?document:null,Jp=ji&&ji.createElement("template"),CA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ji.createElementNS(AA,n):e==="mathml"?ji.createElementNS(RA,n):t?ji.createElement(n,{is:t}):ji.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ji.createTextNode(n),createComment:n=>ji.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ji.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Jp.innerHTML=n_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Jp.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},PA=Symbol("_vtc");function IA(n,e,t){const i=n[PA];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zp=Symbol("_vod"),DA=Symbol("_vsh"),LA=Symbol(""),OA=/(?:^|;)\s*display\s*:/;function NA(n,e,t){const i=n.style,r=nn(t);let s=!1;if(t&&!r){if(e)if(nn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Do(i,a,"")}else for(const o in e)t[o]==null&&Do(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?FA(n,o,!nn(e)&&e?e[o]:void 0,a)||Do(i,o,a):Do(i,o,"")}}else if(r){if(e!==t){const o=i[LA];o&&(t+=";"+o),i.cssText=t,s=OA.test(t)}}else e&&n.removeAttribute("style");Zp in n&&(n[Zp]=s?i.display:"",n[DA]&&(i.display="none"))}const fc=/\s*!important$/;function Do(n,e,t){if(mt(t))t.forEach(i=>Do(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))fc.test(t)?n.setProperty(e,t.replace(fc,""),"important"):n.setProperty(e,t);else{const i=UA(n,e);fc.test(t)?n.setProperty(ps(i),t.replace(fc,""),"important"):n[i]=t}}const Qp=["Webkit","Moz","ms"],wu={};function UA(n,e){const t=wu[e];if(t)return t;let i=di(e);if(i!=="filter"&&i in n)return wu[e]=i;i=r0(i);for(let r=0;r<Qp.length;r++){const s=Qp[r]+i;if(s in n)return wu[e]=s}return e}function FA(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&nn(i)&&t===i}const em="http://www.w3.org/1999/xlink";function tm(n,e,t,i,r,s=zb(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(em,e.slice(6,e.length)):n.setAttributeNS(em,e,t):t==null||s&&!o0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Dr(t)?String(t):t)}function nm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?n_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=o0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function BA(n,e,t,i){n.addEventListener(e,t,i)}function zA(n,e,t,i){n.removeEventListener(e,t,i)}const im=Symbol("_vei");function kA(n,e,t,i,r=null){const s=n[im]||(n[im]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=GA(e);if(i){const l=s[e]=XA(i,r);BA(n,a,l,c)}else o&&(zA(n,a,o,c),s[e]=void 0)}}const VA=/(Once|Passive|Capture)$/,HA=/^on:?(?:Once|Passive|Capture)$/;function GA(n){let e,t;for(;(t=n.match(VA))&&!HA.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ps(n.slice(2)),e]}let Au=0;const WA=Promise.resolve(),$A=()=>Au||(WA.then(()=>Au=0),Au=Date.now());function XA(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(mt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let c=0;c<o.length&&!i._stopped;c++){const l=o[c];l&&_i(l,e,5,a)}}else _i(r,e,5,[i])};return t.value=n,t.attached=$A(),t}const rm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qA=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?IA(n,i,o):e==="style"?NA(n,t,i):rl(e)?sl(e)||kA(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jA(n,e,i,o))?(nm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tm(n,e,i,o,s,e!=="value")):n._isVueCE&&(YA(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!nn(i)))?nm(n,di(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),tm(n,e,i,o))};function jA(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&rm(e)&&pt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rm(e)&&nn(t)?!1:e in n}function YA(n,e){const t=n._def.props;if(!t)return!1;const i=di(e);return Array.isArray(t)?t.some(r=>di(r)===i):Object.keys(t).some(r=>di(r)===i)}const KA=Sn({patchProp:qA},CA);let sm;function JA(){return sm||(sm=oA(KA))}const ZA=((...n)=>{const e=JA().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=e1(i);if(!r)return;const s=e._component;!pt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,QA(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function QA(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function e1(n){return nn(n)?document.querySelector(n):n}const va=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},t1={},n1={class:"topbar"};function i1(n,e){return lo(),uo("section",n1,[...e[0]||(e[0]=[pl('<div class="brand"><span class="mark"></span><div><small data-i18n="subtitle">NEON GRID / PONG-84</small><strong data-i18n="title">PONG 87</strong><span id="statusText" data-i18n="disconnected">Sin conexion</span></div></div><div class="readout"><span id="modeText">STANDBY</span><span id="roundText">R-01</span></div><button id="pauseButton" class="icon-button" type="button" aria-label="Pausa">II</button><button id="gameExitButton" class="icon-button game-exit" type="button" aria-label="Exit game" hidden>X</button>',4)])])}const r1=va(t1,[["render",i1]]),s1={},o1={id:"menuLayer",class:"menu-layer"};function a1(n,e){return lo(),uo("div",o1,[...e[0]||(e[0]=[pl('<section class="menu-panel" data-menu-view="main"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h1 data-i18n="mainMenuTitle">PONG 87</h1><p data-i18n="mainMenuSubtitle">Arcade neon chileno para 1 a 8 jugadores</p><div class="menu-buttons"><button id="singlePlayerButton" class="primary-menu" type="button" data-i18n="singlePlayer">Single Player</button><button id="multiPlayerButton" type="button" data-i18n="multiPlayer">Multi Player</button><button id="settingsButton" type="button" data-i18n="settings">Configuracion</button><button id="aboutButton" type="button" data-i18n="about">About Me</button><button id="exitButton" class="ghost" type="button" data-i18n="exit">Salir</button></div></section><section class="menu-panel" data-menu-view="settings" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="settingsTitle">Configuracion</h2><div class="settings-stack"><label class="range-field"><span data-i18n="musicVolume">Musica</span><output id="musicVolumeValue">70%</output><input id="musicVolumeInput" type="range" min="0" max="100" step="1"></label><label class="range-field"><span data-i18n="sfxVolume">Efectos</span><output id="sfxVolumeValue">80%</output><input id="sfxVolumeInput" type="range" min="0" max="100" step="1"></label><label><span data-i18n="language">Idioma</span><select id="languageInput"><option value="es">ES</option><option value="en">EN</option></select></label></div><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="about" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="aboutTitle">About Me</h2><p class="about-copy" data-i18n="aboutBody">Proyecto personal para crear minijuegos web mobile-first.</p><button class="back-button" type="button" data-i18n="back">Volver</button></section><section class="menu-panel" data-menu-view="exit" hidden><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 data-i18n="exitTitle">Salir</h2><p class="about-copy" data-i18n="exitBody">En web no siempre se puede cerrar la pestana desde el juego.</p><button class="back-button" type="button" data-i18n="back">Volver</button></section>',4)])])}const c1=va(s1,[["render",a1]]),l1={},u1={id:"centerPanel",class:"center-panel hidden","data-flow":"multi"};function f1(n,e){return lo(),uo("div",u1,[...e[0]||(e[0]=[pl('<div class="panel-header"><span id="lobbyTitle" data-i18n="arcadeLink">ARCADE LINK</span><strong id="roomCode">----</strong></div><div id="setupPanel" class="setup-panel"><div class="field-grid"><label><span data-i18n="playerTag">Player tag</span><input id="nameInput" maxlength="16" value="Jugador"></label><label><span data-i18n="arena">Arena</span><select id="sidesInput"><option value="2">2</option><option value="3">3</option><option value="4" selected>4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select></label><label><span data-i18n="mode">Modo</span><select id="gameModeInput"><option value="score" data-i18n="scoreRush">Score Rush</option><option value="elimination" data-i18n="elimination">Eliminacion</option></select></label><label id="livesField"><span data-i18n="lives">Vidas</span><input id="livesInput" type="number" min="1" max="9" step="1" value="5"></label><label><span data-i18n="matchTime">Tiempo</span><select id="matchTimeInput"><option value="0" data-i18n="noLimit">Sin limite</option><option value="30">0:30</option><option value="60">1:00</option><option value="90">1:30</option><option value="120">2:00</option><option value="150" selected>2:30</option><option value="180">3:00</option><option value="240">4:00</option><option value="300">5:00</option></select></label></div><div class="actions"><button id="createButton" type="button" data-i18n="host">Host</button><input id="joinInput" maxlength="8" placeholder="CODIGO" data-i18n-placeholder="joinPlaceholder"><button id="joinButton" type="button" data-i18n="link">Link</button></div></div><div id="waitingPanel" class="waiting-panel hidden"><div class="lobby-code"><span>ROOM</span><strong id="waitingRoomCode">----</strong></div><div id="waitingRoster" class="waiting-roster"></div></div><div id="resultsPanel" class="results-panel hidden"><div class="podium-title">RESULTS</div><div id="podiumList" class="podium-list"></div></div><div class="boot-actions"><button id="offlineButton" class="offline" type="button" data-i18n="cpuJam">CPU Jam</button><button id="forceStartButton" class="force-start hidden" type="button" data-i18n="fillWithBots">Completar con IA</button><button id="readyButton" class="ready" type="button" disabled data-i18n="ready">Ready</button><button id="menuBackButton" class="ghost" type="button" data-i18n="mainMenu">Menu</button></div>',5)])])}const h1=va(l1,[["render",f1]]),d1={},p1={id:"pauseMenu",class:"pause-menu hidden",role:"dialog","aria-modal":"true","aria-labelledby":"pauseTitle"};function m1(n,e){return lo(),uo("div",p1,[...e[0]||(e[0]=[pl('<section class="pause-panel"><div class="menu-kicker" data-i18n="subtitle">NEON GRID / PONG-84</div><h2 id="pauseTitle" data-i18n="pauseTitle">Pausa</h2><div class="pause-actions"><button id="resumeButton" class="primary-menu" type="button" data-i18n="continueGame">Continuar</button><button id="pauseExitButton" class="ghost" type="button" data-i18n="exitToMenu">Salir</button></div></section>',1)])])}const g1=va(d1,[["render",m1]]),_1={},v1={id:"touchRail",class:"touch-rail"};function x1(n,e){return lo(),uo("div",v1,[...e[0]||(e[0]=[br("span",{class:"rail-label","data-i18n":"paddleTrack"},"PADDLE TRACK",-1),br("div",{id:"thumb",class:"thumb"},null,-1)])])}const y1=va(_1,[["render",x1]]),S1={class:"shell"},E1={class:"game-wrap"},M1=bw({__name:"App",setup(n){return(e,t)=>(lo(),uo("main",S1,[t[1]||(t[1]=br("div",{class:"scanlines","aria-hidden":"true"},null,-1)),Xn(r1),br("section",E1,[t[0]||(t[0]=br("canvas",{id:"gameCanvas"},null,-1)),Xn(c1),Xn(h1),Xn(g1),Xn(y1)]),t[2]||(t[2]=br("section",{id:"scoreStrip",class:"score-strip"},null,-1))]))}});class T1{constructor(e){this.ctx=null,this.master=null,this.sfx=null,this.music=null,this.ambience=null,this.ambienceGain=null,this.lastPlayed=new Map,this.settings=e}setSettings(e){this.settings=e,this.applyVolumes()}async unlock(){this.ensureContext(),this.ctx&&(this.ctx.state!=="running"&&await this.ctx.resume(),this.startAmbience())}play(e,t=1){if(!this.ctx||this.ctx.state!=="running"||!this.canPlay(e))return;const i=Math.max(.35,Math.min(1.45,t));switch(e){case"ui":this.tone({frequency:620,endFrequency:820,duration:.055,volume:.1});break;case"ready":this.tone({frequency:440,endFrequency:760,duration:.11,volume:.12}),this.tone({frequency:880,duration:.07,volume:.07,delay:.055});break;case"charge":this.tone({type:"sawtooth",frequency:320,endFrequency:1280,duration:.18,volume:.08}),this.noise(.08,.05);break;case"pad":this.tone({type:"square",frequency:220*i,endFrequency:520*i,duration:.09,volume:.14}),this.tone({frequency:980*i,duration:.045,volume:.06});break;case"wall":this.tone({type:"triangle",frequency:340,endFrequency:180,duration:.08,volume:.09}),this.noise(.045,.04);break;case"obstacle":this.tone({type:"sawtooth",frequency:540,endFrequency:260,duration:.13,volume:.13}),this.noise(.11,.055);break;case"scoreFor":this.tone({frequency:520,endFrequency:880,duration:.13,volume:.14}),this.tone({frequency:1040,endFrequency:1560,duration:.16,volume:.12,delay:.08}),this.noise(.12,.035,.03);break;case"scoreAgainst":this.tone({type:"sawtooth",frequency:280,endFrequency:92,duration:.24,volume:.16}),this.noise(.18,.06);break;case"spawn":this.tone({frequency:300,endFrequency:980,duration:.2,volume:.09}),this.tone({frequency:1230,duration:.06,volume:.04,delay:.12});break;case"start":this.tone({frequency:180,endFrequency:620,duration:.18,volume:.12}),this.tone({frequency:740,endFrequency:1180,duration:.16,volume:.1,delay:.12});break;case"pause":this.tone({type:"triangle",frequency:500,endFrequency:250,duration:.09,volume:.08});break}}ensureContext(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.sfx=this.ctx.createGain(),this.music=this.ctx.createGain(),this.sfx.connect(this.master),this.music.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes())}applyVolumes(){!this.sfx||!this.music||(this.sfx.gain.value=this.settings.sfxVolume/100*.75,this.music.gain.value=this.settings.musicVolume/100*.22)}startAmbience(){!this.ctx||!this.music||this.ambience||(this.ambience=this.ctx.createOscillator(),this.ambienceGain=this.ctx.createGain(),this.ambience.type="sine",this.ambience.frequency.value=58,this.ambienceGain.gain.value=.22,this.ambience.connect(this.ambienceGain).connect(this.music),this.ambience.start())}canPlay(e){const t=performance.now(),i=e==="pad"||e==="wall"?38:e==="obstacle"?70:120,r=this.lastPlayed.get(e)??-1/0;return t-r<i?!1:(this.lastPlayed.set(e,t),!0)}tone(e){if(!this.ctx||!this.sfx)return;const t=this.ctx.currentTime+(e.delay??0),i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type=e.type??"sine",i.frequency.setValueAtTime(e.frequency,t),e.endFrequency&&i.frequency.exponentialRampToValueAtTime(Math.max(20,e.endFrequency),t+e.duration),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e.volume,t+.012),r.gain.exponentialRampToValueAtTime(1e-4,t+e.duration),i.connect(r).connect(this.sfx),i.start(t),i.stop(t+e.duration+.02)}noise(e,t,i=0){if(!this.ctx||!this.sfx)return;const r=Math.max(1,Math.floor(this.ctx.sampleRate*e)),s=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=s.getChannelData(0);for(let f=0;f<r;f+=1)o[f]=(Math.random()*2-1)*(1-f/r);const a=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain(),h=this.ctx.currentTime+i;a.buffer=s,c.type="bandpass",c.frequency.value=1400,c.Q.value=.8,l.gain.setValueAtTime(t,h),l.gain.exponentialRampToValueAtTime(1e-4,h+e),a.connect(c).connect(l).connect(this.sfx),a.start(h)}}const b1="arcade-hub.v1",i_="pong87",w1="0.1.0";function A1(){const n=new URLSearchParams(window.location.search),e=n.get("arcadeToken")||"";return e?{token:e,roomId:n.get("room")||void 0,returnUrl:n.get("returnUrl")||void 0,offline:n.get("offline")==="1",sides:n.get("sides")?Number(n.get("sides")):void 0,hubUrl:n.get("hubUrl")||void 0||`http://${window.location.hostname||"127.0.0.1"}:2580`}:null}async function r_(n,e,t,i=!1){const r=await fetch(`${n.hubUrl}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:i});return r.ok?r.json():null}async function R1(){const n=A1();if(!n)return null;const e=await fetch(`${n.hubUrl}/api/launch-token/validate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n.token})});if(!e.ok)throw new Error("Arcade token invalido");const t=await e.json();if(!t.valid||!t.payload)throw new Error("Arcade token expirado");return{token:n.token,payload:t.payload,roomId:n.roomId||t.payload.roomId,returnUrl:n.returnUrl||t.payload.returnUrl,hubUrl:n.hubUrl,offline:n.offline,sides:n.sides}}function C1(n,e,t={},i){return{protocol:b1,eventId:crypto.randomUUID(),eventType:e,source:{gameId:i_,runtime:"client",version:w1},occurredAt:new Date().toISOString(),roomId:n.roomId,userId:n.payload.user.userId,sessionId:i,payload:t}}async function s_(n,e,t={},i){await r_(n,"/api/telemetry",C1(n,e,t,i),!0)}function Vc(n,e){return{name:n.payload.user.displayName,arcadeToken:n.token,arcadeRoomId:n.roomId,arcadeUserId:n.payload.user.userId,arcadeOrigin:n.payload.user.origin,arcadeHubUrl:n.hubUrl,...e||{}}}function P1(n,e){const t=[...e.seats].filter(r=>r.connected).sort((r,s)=>e.mode==="score"?s.score-r.score||s.lives-r.lives:s.lives-r.lives||s.score-r.score),i=t[0];return{gameId:i_,roomId:n.roomId,winnerUserId:om(n,i),finishedAt:new Date().toISOString(),players:t.map((r,s)=>({userId:om(n,r)||r.id,displayName:r.name,score:r.score,placement:s+1,metadata:{sessionId:r.id,edgeIndex:r.edgeIndex,lives:r.lives,bot:r.id.startsWith("bot-")}})),metadata:{mode:e.mode,sides:e.sides,round:e.round,matchTimeSeconds:e.matchTimeSeconds,source:"pong87-client"}}}function om(n,e){if(!(!e||e.id.startsWith("bot-")))return e.id==="offline-human"?n.payload.user.userId:e.id}async function I1(n,e){await r_(n,"/api/results",P1(n,e),!0)}function D1(n){if(n?.returnUrl){window.location.assign(n.returnUrl);return}window.close()}const o_="es",am={es:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Sin conexion",connected:"Conectado",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Arcade neon chileno para 1 a 8 jugadores",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Configuracion",about:"About Me",exit:"Salir",back:"Volver",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Modo",lives:"Vidas",matchTime:"Tiempo",noLimit:"Sin limite",scoreRush:"Score Rush",elimination:"Eliminacion",host:"Host",joinPlaceholder:"CODIGO",link:"Link",cpuJam:"CPU Jam",fillWithBots:"Completar con IA",ready:"Ready",waiting:"Waiting",restart:"Reiniciar",pauseTitle:"Pausa",continueGame:"Continuar",exitToMenu:"Salir",settingsTitle:"Configuracion",musicVolume:"Musica",sfxVolume:"Efectos",language:"Idioma",aboutTitle:"About Me",aboutBody:"Soy Ingeniero en Software y Full Stack Dev en Yoy Simulators. Llevo mas de 5 anos armando soluciones web, conectando sistemas, peleando con bases de datos y dejando servidores andando como corresponde. Me gusta aprender haciendo, meter mano en tecnologias como Spring Boot y Oracle Cloud, y cuando no estoy programando probablemente estoy haciendo magia. Hablemos: sebastiancortes.2202@gmail.com.",exitTitle:"Salir",exitBody:"En web no siempre se puede cerrar la pestana desde el juego. Puedes volver al menu o cerrar la pestana del navegador.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Error de conexion",offlineEvent:"Offline vs IA",botName:"IA",playerFallback:"Jugador"},en:{title:"PONG 87",subtitle:"NEON GRID / PONG-84",disconnected:"Disconnected",connected:"Connected",standby:"STANDBY",mainMenuTitle:"PONG 87",mainMenuSubtitle:"Chilean neon arcade for 1 to 8 players",singlePlayer:"Single Player",multiPlayer:"Multi Player",settings:"Settings",about:"About Me",exit:"Exit",back:"Back",mainMenu:"Menu",singlePlayerTitle:"Single Player",multiPlayerTitle:"Multi Player",arcadeLink:"ARCADE LINK",playerTag:"Player tag",arena:"Arena",mode:"Mode",lives:"Lives",matchTime:"Time",noLimit:"No limit",scoreRush:"Score Rush",elimination:"Elimination",host:"Host",joinPlaceholder:"CODE",link:"Link",cpuJam:"CPU Jam",fillWithBots:"Fill with AI",ready:"Ready",waiting:"Waiting",restart:"Restart",pauseTitle:"Paused",continueGame:"Continue",exitToMenu:"Exit",settingsTitle:"Settings",musicVolume:"Music",sfxVolume:"SFX",language:"Language",aboutTitle:"About Me",aboutBody:"I am a Software Engineer and Full Stack Dev at Yoy Simulators. For more than 5 years I have been building web solutions, connecting systems, working through databases, and getting servers to behave. I like learning by building, experimenting with tools like Spring Boot and Oracle Cloud, and when I am not coding I am probably doing magic. Say hi: sebastiancortes.2202@gmail.com.",exitTitle:"Exit",exitBody:"Browsers usually do not let games close the tab directly. You can return to the menu or close the browser tab.",paddleTrack:"PADDLE TRACK",open:"OPEN",wall:"WALL",lastTouch:"TOUCH",last:"LAST",errorConnection:"Connection error",offlineEvent:"Offline vs AI",botName:"AI",playerFallback:"Player"}};function L1(n,e){return am[n]?.[e]??am[o_][e]??e}const fr=4,Hc=2,Gc=8,Kn=8,ei=2.7,qi=.34,xn=.28,a_=7.85,O1=.012,N1=1.26,U1=.45,F1=1.14,c_=3,Nh=10,l_=5,Wc=150,cm=30,lm=30,Ru=1/60;function B1(n){return n<=3?4:n}function z1(n){return n<=2?Kn*1.04:Kn*(1.08+Math.max(0,n-4)*.055)}function um(n){const e=B1(n);return 2*z1(n)*Math.sin(Math.PI/e)}function u_(n){const e=um(fr),t=ei/e,i=um(n)*t;return Math.max(1.45,Math.min(ei,i))}function k1(n){return c_}function f_(n,e){const t=1+Math.floor(e/Nh);return Math.min(k1(),t)}function Ff(n){return a_*(1+Math.max(0,n-fr)*.045)}function V1(n,e=fr){return Ff(e)*Math.min(N1,1+Math.max(0,n)*O1)}function H1(n,e,t=0){const i=Ff(n)+Math.min(e,c_-1)*.25,r=Math.max(0,t-i)*U1,s=i+r;return Math.min(s,Ff(n)*F1)}function G1(n){return{sides:fr,phase:"lobby",lastEvent:n,round:1,countdown:0,remainingTime:Wc,matchTimeSeconds:Wc,livesPerPlayer:l_,lastTouchEdge:-1,mode:"score",ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:[]}}function W1(n,e){return{...n,phase:"lobby",lastEvent:e,seats:[],obstacles:[],balls:[],chargedBy:-1}}function _n(n,e,t){return Math.max(e,Math.min(t,n))}function ms(n){return n<=3?4:n}function ml(n,e){return e===2?n*2:n}function h_(n,e){return e===2?n===0?0:n===2?1:-1:e===3?n<3?n:-1:n<e?n:-1}function Or(n,e=Kn){return n<=2?e*1.04:e*(1.08+Math.max(0,n-4)*.055)}function $1(n,e=Kn){const t=-Math.PI/2+Math.PI/n;return Array.from({length:n},(i,r)=>{const s=t+r/n*Math.PI*2;return{x:Math.cos(s)*e,y:Math.sin(s)*e}})}function fo(n,e=Kn){const t=$1(n,e);return t.map((i,r)=>{const s=t[(r+1)%t.length],o=s.x-i.x,a=s.y-i.y,c=Math.hypot(o,a),l={x:o/c,y:a/c},h={x:(i.x+s.x)/2,y:(i.y+s.y)/2},f={x:-h.x,y:-h.y},p=Math.hypot(f.x,f.y)||1,m={x:f.x/p,y:f.y/p};return{a:i,b:s,tangent:l,inward:m,length:c,angle:Math.atan2(l.y,l.x)}})}function d_(n,e){return{x:n.a.x+(n.b.x-n.a.x)*e,y:n.a.y+(n.b.y-n.a.y)*e}}function ss(n,e){return n.x*e.x+n.y*e.y}function Bf(n,e){const t=ss(n,e);return{x:n.x-2*t*e.x,y:n.y-2*t*e.y}}function X1(n,e,t){const i=n==="elimination"?"elimination":"score";let r=Math.round(Number(e||Wc)/lm)*lm;return i==="score"?r=Math.max(cm,r||Wc):r>0&&(r=Math.max(cm,r)),{mode:i,lives:_n(Math.round(Number(t||l_)),1,9),matchTimeSeconds:r}}function q1(n){const e=Math.max(0,Math.ceil(n)),t=Math.floor(e/60),i=e%60;return`${t}:${String(i).padStart(2,"0")}`}function j1(n){return[...n.seats].filter(e=>e.connected).sort((e,t)=>n.mode==="score"?t.score-e.score||t.lives-e.lives:t.lives-e.lives||t.score-e.score)}const p_="polygon-pong-settings",hc={language:o_,musicVolume:70,sfxVolume:80};function Y1(n=localStorage){try{const e=JSON.parse(n.getItem(p_)||"{}");return{language:e.language==="en"||e.language==="es"?e.language:hc.language,musicVolume:_n(Number(e.musicVolume??hc.musicVolume),0,100),sfxVolume:_n(Number(e.sfxVolume??hc.sfxVolume),0,100)}}catch{return{...hc}}}function Uh(n,e=localStorage){e.setItem(p_,JSON.stringify(n))}function Jt(n,e,t=!1){return new ds({color:n,transparent:e<1,opacity:e,side:ti,depthWrite:!1,blending:t?Ks:ir})}function K1(n){n.traverse(e=>{if(!(e instanceof at))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function fm(n,e){n.traverse(t=>{if(!(t instanceof at))return;const i=t.material,r=t.userData.baseOpacity??i.opacity;i.opacity=Math.max(0,r*e)})}function J1(n){const e=new Zt,t=10419455,i=new at(new mn(n.radius*2.45,n.radius*.33,.16),Jt(16777215,.7)),r=new at(new mn(n.radius*2.85,n.radius*.78,.06),Jt(t,.16,!0)),s=new at(new mn(n.radius*2.7,n.radius*.08,.08),Jt(16732141,.68,!0)),o=s.clone();s.position.y=n.radius*.34,o.position.y=-n.radius*.34;const a=new ph;a.moveTo(0,n.radius*.52),a.lineTo(n.radius*.46,0),a.lineTo(0,-n.radius*.52),a.closePath();const c=new Jo(a),l=new at(c,Jt(16773226,.5,!0)),h=new at(c.clone(),Jt(16773226,.5,!0));return l.position.x=-n.radius*1.38,h.position.x=n.radius*1.38,h.rotation.z=Math.PI,e.add(r,i,s,o,l,h),{group:e,pulseMeshes:[r,l,h],spinMeshes:[]}}function Z1(n){const e=new Zt,t=Math.max(8,n.sides||8),i=new at(new gi(n.radius*.72,n.radius*1.18,t),Jt(16773226,.46,!0)),r=new at(new Ni(n.radius*.58,t),Jt(16771162,.62)),s=new at(new Ni(n.radius*.24,20),Jt(16777215,.76,!0)),o=new at(new gi(n.radius*.35,n.radius*.46,20),Jt(16732013,.62,!0));return e.add(i,r,o,s),{group:e,pulseMeshes:[i,s],spinMeshes:[o]}}function Q1(n){const e=new Zt,t=Math.max(5,Math.min(8,n.sides||6)),i=new at(new Ni(n.radius*.42,t),Jt(2618879,.68)),r=new at(new gi(n.radius*.55,n.radius*.86,28),Jt(2618879,.54,!0)),s=new at(new gi(n.radius*.98,n.radius*1.08,28),Jt(13270271,.34,!0)),o=new Zt;for(let a=0;a<4;a+=1){const c=new at(new mn(n.radius*1.28,n.radius*.11,.06),Jt(a%2===0?16777215:4386047,.48,!0));c.rotation.z=Math.PI/4*a,o.add(c)}return e.add(s,r,i,o),{group:e,pulseMeshes:[s,r],spinMeshes:[o]}}function eR(n){const e=new Zt,t=new at(new Ni(n.radius*.26,18),Jt(16777215,.74,!0)),i=new at(new gi(n.radius*.82,n.radius*1.05,36),Jt(16732013,.38,!0)),r=new Zt;for(let s=0;s<3;s+=1){const o=new at(new mn(n.radius*1.62,n.radius*.16,.08),Jt(s===0?16773226:4386047,.58,!0));o.position.x=n.radius*.58,o.rotation.z=Math.PI*2*s/3,r.add(o);const a=new at(new Ni(n.radius*.16,10),Jt(16777215,.44,!0));a.position.set(Math.cos(o.rotation.z)*n.radius*1.33,Math.sin(o.rotation.z)*n.radius*1.33,.03),r.add(a)}return e.add(i,r,t),{group:e,pulseMeshes:[i,t],spinMeshes:[r]}}function tR(n){const e=new Zt,t=new ph;t.moveTo(0,n.radius*1.2),t.lineTo(n.radius*.52,n.radius*.12),t.lineTo(n.radius*.22,-n.radius*.96),t.lineTo(-n.radius*.38,-n.radius*.72),t.lineTo(-n.radius*.55,n.radius*.08),t.closePath();const i=new at(new Jo(t),Jt(13270271,.58)),r=new at(new Jo(t),Jt(4386047,.26,!0));r.scale.setScalar(.62),r.position.z=.04;const s=new at(new gi(n.radius*.62,n.radius*1.08,5),Jt(13270271,.22,!0)),o=new at(new mn(n.radius*.16,n.radius*1.24,.07),Jt(16777215,.4,!0));return o.rotation.z=-.36,o.position.z=.08,e.add(s,i,r,o),{group:e,pulseMeshes:[s,r,o],spinMeshes:[s]}}function nR(n){const e=new Zt,t=n.variant==="barrier"?J1(n):n.variant==="bumper"?Z1(n):n.variant==="spinner"?eR(n):n.variant==="crystal"?tR(n):Q1(n);return e.add(t.group),e.userData.id=n.id,e.userData.createdAt=performance.now(),e.userData.despawnAt=0,e.userData.baseOpacity=n.variant==="barrier"?.78:.86,e.userData.variant=n.variant,e.userData.pulseMeshes=t.pulseMeshes,e.userData.spinMeshes=t.spinMeshes,e.traverse(i=>{i instanceof at&&(i.userData.baseOpacity=i.material.opacity)}),e.scale.setScalar(.1),e}function iR(n,e,t){const i=new Set(e.map(r=>r.id));for(const r of[...n.children])if(!i.has(r.userData.id)){r.userData.despawnAt||=t;const s=Math.min(1,(t-r.userData.despawnAt)/260);r.scale.setScalar(Math.max(.01,1-s)),fm(r,1-s),s>=1&&(n.remove(r),K1(r))}e.forEach((r,s)=>{let o=n.children.find(l=>l.userData.id===r.id);o||(o=nR(r),n.add(o)),o.userData.despawnAt=0,o.position.set(r.x,r.y,.2),o.rotation.z=r.angle+t*.0013*Math.sign(r.spin||1);const a=Math.min(1,(t-o.userData.createdAt)/340),c=1+Math.sin(t*.0065+s)*(r.variant==="barrier"?.025:.07);o.scale.setScalar((.18+a*.82)*c),fm(o,a),o.userData.pulseMeshes.forEach((l,h)=>{l.scale.setScalar(1+Math.sin(t*.009+h+s)*.08)}),o.userData.spinMeshes.forEach((l,h)=>{l.rotation.z+=.018*Math.sign(r.spin||1)*(h+1)})})}function qr(n,e,t=!1){return new ds({color:n,transparent:e<1,opacity:e,depthWrite:!1,blending:t?Ks:ir})}function hm(n,e){n.material.color.setHex(e)}function Fs(n,e){const t=n.material;t.opacity=e,t.transparent=e<1}function rR(n,e,t){const i=new Zt,r=new at(new mn(ei*1.16,qi*1.95,.035),qr(n,.2,!0));r.position.z=-.035;const s=new at(new mn(ei*1.32,qi*2.85,.025),qr(n,.12,!0));s.position.z=-.06;const o=new at(new mn(ei,qi,.2),qr(n,.96));o.position.z=.02;const a=new mn(ei*1.08,qi*.16,.08),c=new at(a.clone(),qr(16777215,.86,!0)),l=new at(a.clone(),qr(16777215,.86,!0));c.position.set(0,qi*.66,.08),l.position.set(0,-qi*.66,.08);const h=[];for(let p=0;p<5;p+=1){const m=new at(new mn(ei*.055,qi*.42,.09),qr(16777215,.48,!0));m.position.set((p-2)*ei*.18,0,.1),h.push(m)}const f=[];for(let p=0;p<4;p+=1){const m=new at(new mn(ei*.16,qi*.2,.1),qr(16773226,0,!0));m.position.set((p-1.5)*ei*.2,0,.14),f.push(m)}return i.add(s,r,o,c,l,...h,...f),i.userData.playerIndex=e,i.userData.edgeIndex=t,i.userData.refs={core:o,shield:r,glow:s,rails:[c,l],ticks:h,chargeBars:f},i}function sR(n,e){const{refs:t}=n.userData,i=e.eliminatedWall,r=i?16777215:e.color,s=e.connected||i?1:.45,o=.5+.5*Math.sin(e.time*.011+n.userData.playerIndex),a=e.charged?.65+o*.35:0;[t.core,t.shield,t.glow,...t.rails,...t.ticks].forEach(c=>hm(c,r)),Fs(t.core,i?.22:.9*s),Fs(t.shield,i?.16:(.23+a*.24)*s),Fs(t.glow,i?.1:(.14+a*.25)*s),t.rails.forEach(c=>Fs(c,i?.34:(.76+a*.18)*s)),t.ticks.forEach((c,l)=>{const h=.32+Math.sin(e.time*.016+l)*.08;Fs(c,i?0:h*s)}),t.chargeBars.forEach((c,l)=>{Fs(c,e.charged&&!i?(.42+l*.12+o*.22)*s:0),hm(c,l%2===0?16773226:r)}),t.shield.scale.y=i?.7:1+a*.28,t.glow.scale.y=i?.58:1+a*.42,t.core.scale.y=i?.72:1}function oR(n){return n>=8?{min:7,max:8}:n>=7?{min:6,max:7}:n>=5?{min:5,max:6}:n>=4?{min:4,max:5}:{min:3,max:4}}function Cu(n,e,t,i=1){return{x:Math.cos(e)*n*t,y:Math.sin(e)*n*t,weight:i}}function aR(n,e){const t=[{x:0,y:0,weight:.2},{x:e*.22,y:0,weight:1.2},{x:-e*.22,y:0,weight:1.2},{x:0,y:e*.22,weight:1.2},{x:0,y:-e*.22,weight:1.2}],i=n>=7?16:n>=5?12:8,r=Math.PI/i;for(let o=0;o<i;o+=1)t.push(Cu(e,r+o/i*Math.PI*2,.39,1.6));const s=n>=7?16:10;for(let o=0;o<s;o+=1)t.push(Cu(e,o/s*Math.PI*2,.58,1.35));if(n>=6)for(let o=0;o<8;o+=1)t.push(Cu(e,Math.PI/4+o/8*Math.PI*2,.69,1));return t}function cR(n,e){return n.map(t=>({item:t,key:e()**(1/t.weight)})).sort((t,i)=>i.key-t.key).map(({item:t})=>t)}function dm(n,e){const t=["bumper","post","barrier","spinner","crystal","bumper","post"],i=t[n%t.length];return e()<.12?t[Math.floor(e()*t.length)]:i}function pm(n,e){return n==="barrier"?.5+e()*.14:n==="spinner"?.48+e()*.11:n==="crystal"?.38+e()*.12:n==="bumper"?.42+e()*.13:.34+e()*.11}function mm(n){return n==="bumper"?8:n==="barrier"?4:n==="spinner"?6:n==="crystal"?5:16}function lR(n,e,t,i,r=Math.random){const s=oR(n),o=s.min+Math.floor(r()*(s.max-s.min+1)),a=cR(aR(n,e),r),c=e*(n>=7?.205:n>=5?.19:.18),l=e*(n>=7?.055:.04),h=[];for(const p of a){if(h.length>=o)break;const m=dm(h.length,r),x=pm(m,r),y={x:p.x+(r()-.5)*l,y:p.y+(r()-.5)*l},v=Math.hypot(y.x,y.y);v>e*.72||v<e*.1&&h.length>0||h.some(C=>Math.hypot(y.x-C.x,y.y-C.y)<c+(x+C.radius)*.45)||h.push({id:`${t}-${i}-${h.length}`,x:y.x,y:y.y,radius:x,sides:mm(m),angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*_n(.5+r()*1.15,.5,1.65),variant:m})}let f=0;for(;h.length<s.min&&f<80;){f+=1;const p=r()*Math.PI*2,m=e*(.3+r()*.38),x=dm(h.length,r),y=pm(x,r),v={x:Math.cos(p)*m,y:Math.sin(p)*m};h.some(C=>Math.hypot(v.x-C.x,v.y-C.y)<c)||h.push({id:`${t}-${i}-${h.length}`,x:v.x,y:v.y,radius:y,sides:mm(x),angle:r()*Math.PI*2,spin:(r()<.5?-1:1)*(.5+r()*1.15),variant:x})}return h}function uR(n){n.traverse(e=>{if(!(e instanceof at))return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function Bs(n,e=1,t=!1){return new ds({color:n,transparent:e<1,opacity:e,side:ti,depthWrite:!1,blending:t?Ks:ir})}function gm(n,e){n.material.color.setHex(e)}function zs(n,e){const t=n.material;t.opacity=e,t.transparent=e<1}function fR(n,e){const t=new Zt,i=[0,1,2,3].map(l=>{const h=new at(new Ni(xn*(1.32-l*.18),24),Bs(e,.16-l*.03,!0));return h.position.z=-.08-l*.018,h}),r=new at(new Ni(xn*2.25,32),Bs(e,.16,!0)),s=new at(new gi(xn*1.22,xn*1.62,36),Bs(e,.52,!0)),o=new at(new gi(xn*1.82,xn*2.05,36),Bs(16773226,0,!0)),a=new at(new Lc(xn,28,14),Bs(e,.96)),c=new at(new Lc(xn*.48,18,10),Bs(16777215,.92,!0));return a.scale.z=.44,c.scale.z=.38,r.position.z=-.04,s.position.z=.04,o.position.z=.05,a.position.z=.08,c.position.z=.16,t.add(...i,r,s,o,a,c),t.userData.id=n.id,t.userData.core=a,t.userData.hotCore=c,t.userData.halo=r,t.userData.ring=s,t.userData.chargeRing=o,t.userData.trail=i,t.scale.setScalar(.12),t}function hR(n,e,t,i,r=0){const s=new Set(e.map(o=>o.id));for(const o of[...n.children])s.has(o.userData.id)||(n.remove(o),uR(o));e.forEach((o,a)=>{const c=o.lastTouchEdge>=0?t[o.lastTouchEdge%t.length]:16777215,l=o.chargedBy>=0?t[o.chargedBy%t.length]:c;let h=n.children.find(g=>g.userData.id===o.id);h||(h=fR(o,c),n.add(h));const f=Math.hypot(o.vx,o.vy)||1,p={x:o.vx/f,y:o.vy/f},m=o.chargedBy>=0,x=Math.max(0,1-o.age/.58),y=Math.min(1,Math.max(0,(o.hitCount-3)/8)),v=1+Math.sin(i*.014+a)*(m?.14:.045)+x*.6;h.position.set(o.x+o.vx*r,o.y+o.vy*r,.36),h.scale.setScalar(Math.max(.2,v)),h.rotation.z=Math.atan2(o.vy,o.vx),[h.userData.core,h.userData.halo,h.userData.ring,...h.userData.trail].forEach(g=>{gm(g,c)}),gm(h.userData.chargeRing,l),zs(h.userData.core,.92),zs(h.userData.hotCore,.82+x*.16),zs(h.userData.halo,.13+x*.22+y*.1+(m?.2:0)),zs(h.userData.ring,.46+x*.25+y*.12),zs(h.userData.chargeRing,m?.72+Math.sin(i*.022)*.14:0),h.userData.ring.rotation.z=i*.0045*(m?1.75:1),h.userData.chargeRing.rotation.z=-i*.008,h.userData.halo.scale.setScalar(1+x*.55+y*.28+(m?.3:0)),h.userData.chargeRing.scale.setScalar(1+Math.sin(i*.018)*.08),h.userData.trail.forEach((g,C)=>{const A=xn*(2.1+C*1.12+y*.9);g.position.x=-p.x*A,g.position.y=-p.y*A,g.rotation.z=Math.atan2(o.vy,o.vx),g.scale.x=1.15+y*.65+(m?.3:0),g.scale.y=.72,zs(g,Math.max(.035,.17-C*.031+y*.035+(m?.055:0)))})})}const _m=new gi(.18,.34,28),dR=new pa(.34,.045),vm=new Ni(.055,10);function Pu(n,e){return new ds({color:n,transparent:!0,opacity:e,side:ti,depthWrite:!1,blending:Ks})}function pR(n){n.traverse(e=>{if(!(e instanceof at))return;(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose())})}function mR(n){const e=new Zt;n.add(e);function t(i,r,s,o,a=0){const c=new Zt,l=new at(_m,Pu(s,o==="score"?.7:.55)),h=new at(vm,Pu(16777215,.75)),f=o==="spawn"?6:o==="score"?10:4,p=o==="spawn"?.34:.2;for(let m=0;m<f;m+=1){const x=a+Math.PI*2*m/f,y=new at(m%2===0?dR:vm,Pu(m%3===0?16773226:s,.44));y.position.set(Math.cos(x)*p,Math.sin(x)*p,.03),y.rotation.z=x,y.userData.vx=Math.cos(x)*(.18+m*.015),y.userData.vy=Math.sin(x)*(.18+m*.015),c.add(y)}l.rotation.z=a,l.position.z=.05,h.position.z=.08,c.add(l,h),c.position.set(i,r,.62),c.userData.createdAt=performance.now(),c.userData.life=o==="score"?560:360,c.userData.kind=o,c.userData.velocity={x:Math.cos(a)*.02,y:Math.sin(a)*.02},e.add(c)}return{group:e,spawn:t,update(i){for(const r of[...e.children]){const s=i-r.userData.createdAt,o=Math.min(1,s/r.userData.life),a=1-o;r.scale.setScalar(.75+o*(r.userData.kind==="score"?1.4:.9)),r.position.x+=r.userData.velocity.x*a,r.position.y+=r.userData.velocity.y*a,r.rotation.z+=.025*a,r.traverse(c=>{if(!(c instanceof at))return;const l=c.material;l.opacity=(c.geometry===_m?.55:.75)*a,c.position.x+=(c.userData.vx??0)*a,c.position.y+=(c.userData.vy??0)*a}),o>=1&&(e.remove(r),pR(r))}}}}const m_=document.querySelector("#app");if(!m_)throw new Error("Missing app root");let Yt=Y1();const Ut=n=>L1(Yt.language,n),gl=new T1(Yt);ZA(M1).mount(m_);const Yn=document.querySelector("#gameCanvas"),Ho=document.querySelector(".shell"),zf=document.querySelector("#menuLayer"),ro=document.querySelector("#statusText"),gR=document.querySelector("#modeText"),_R=document.querySelector("#roundText"),xa=document.querySelector("#roomCode"),vR=document.querySelector("#lobbyTitle"),sa=document.querySelector("#centerPanel"),xR=document.querySelector("#setupPanel"),yR=document.querySelector("#waitingPanel"),SR=document.querySelector("#waitingRoomCode"),ER=document.querySelector("#waitingRoster"),MR=document.querySelector("#resultsPanel"),TR=document.querySelector("#podiumList"),g_=document.querySelector("#scoreStrip"),vi=document.querySelector("#touchRail"),bR=document.querySelector("#thumb"),_l=document.querySelector("#nameInput"),$c=document.querySelector("#sidesInput"),Fh=document.querySelector("#gameModeInput"),wR=document.querySelector("#livesField"),kf=document.querySelector("#livesInput"),Xc=document.querySelector("#matchTimeInput"),ya=document.querySelector("#joinInput"),Vf=document.querySelector("#languageInput"),Hf=document.querySelector("#musicVolumeInput"),Gf=document.querySelector("#sfxVolumeInput"),__=document.querySelector("#musicVolumeValue"),v_=document.querySelector("#sfxVolumeValue"),AR=document.querySelector("#singlePlayerButton"),RR=document.querySelector("#multiPlayerButton"),CR=document.querySelector("#settingsButton"),PR=document.querySelector("#aboutButton"),IR=document.querySelector("#exitButton"),DR=document.querySelectorAll(".back-button"),LR=document.querySelector("#createButton"),OR=document.querySelector("#joinButton"),NR=document.querySelector("#offlineButton"),Wf=document.querySelector("#forceStartButton"),Lr=document.querySelector("#readyButton"),UR=document.querySelector("#menuBackButton"),x_=document.querySelector("#pauseButton"),Bh=document.querySelector("#gameExitButton"),FR=document.querySelector("#pauseMenu"),BR=document.querySelector("#resumeButton"),zR=document.querySelector("#pauseExitButton"),zh=new sy;zh.background=new Ct(461071);const wn=new Yg(-10,10,10,-10,.1,100);wn.position.set(0,0,20);wn.lookAt(0,0,0);const Sa=new wb({canvas:Yn,antialias:!0,alpha:!1});Sa.setPixelRatio(Math.min(window.devicePixelRatio,1.75));Sa.outputColorSpace=$n;const oa=new Zt,$f=new Zt,aa=new Zt,kh=new Zt,vl=new Zt;oa.add($f,aa,kh,vl);zh.add(oa);const ni=mR(oa),an=[16732013,5242788,6661887,16250716,16751170,13270271,4386047,16777215],kR=20,VR=90,HR=.0015,GR=.075,WR="wss://pong87.onrender.com",qc=new Hv.Client(WR);let Qt=null,yn="",fe=G1(Ut("disconnected")),Ji=.5,Oi=.5,Vh=0,so=!1,Mc=0,Xf=Number.NaN,gn=!1,Hh=null,xm=performance.now(),Tc=0,hs=null,qf=0,y_=.5,Gh=!1;const tr=new Set;let S_="",ym=0,bc=3.5,Vs=0,E_=0,Go=Nh,ca=0,Qr=0,Iu="",Dt=null,jf="";function Wh(){gl.unlock().catch(()=>{})}function on(n,e=1){gl.play(n,e)}function M_(n){$f.clear(),aa.clear();const e=ms(n),t=Or(n,Kn),i=fo(e,t);S_=`${n}:${e}`,i.forEach((r,s)=>{const o=h_(s,n),a=o>=0?an[o%an.length]:16777215,c=d_(r,.5),l=new at(new mn(r.length,.08,.08),new ds({color:a,transparent:!0,opacity:o>=0?.75:.48}));l.position.set(c.x,c.y,0),l.rotation.z=r.angle,$f.add(l)});for(let r=0;r<n;r+=1){const s=ml(r,n),o=rR(an[r%an.length],r,s);aa.add(o)}}function gs(){const n=Yn.parentElement?.getBoundingClientRect(),e=Math.max(1,Math.round(n?.width||window.innerWidth)),t=Math.max(1,Math.round(n?.height||window.innerHeight)),i=e/t,s=(Or(fe.sides||fr,Kn)+qi+xn+.75)*2,o=e<760&&Ho.classList.contains("game-active")?Math.min(96,t*.2):0,a=Math.max(.68,(t-o)/t),c=Math.max(s/i,s/a),h=-(c*(o/t))/2;wn.position.set(0,h,20),wn.lookAt(0,h,0),wn.top=c/2,wn.bottom=-c/2,wn.left=-c*i/2,wn.right=c*i/2,wn.updateProjectionMatrix(),Sa.setSize(e,t,!1)}function $R(){const n=fe.seats.find(e=>e.id===yn);return n?ml(n.edgeIndex,fe.sides||fr):0}function XR(){const n=fe.sides||fr,e=fo(ms(n),Or(n,Kn));return-(e[$R()]??e[0]).angle}function qR(n,e){return Math.atan2(Math.sin(e-n),Math.cos(e-n))}function jc(){return fe.balls.length>0?fe.balls:[{...fe.ball,id:"legacy-ball",lastTouchEdge:fe.lastTouchEdge,chargedBy:fe.chargedBy,age:1,hitCount:0}]}function Sm(){return 8+Math.random()*5}function Em(n){const e=Or(n,Kn),t=lR(n,e,"local",ym);return ym+=1,t}function jR(n){return{sides:n.sides,phase:n.phase,lastEvent:n.lastEvent,round:n.round,countdown:n.countdown,remainingTime:n.remainingTime,matchTimeSeconds:n.matchTimeSeconds,livesPerPlayer:n.livesPerPlayer,lastTouchEdge:n.lastTouchEdge,mode:n.mode,ball:{x:n.ball.x,y:n.ball.y,vx:n.ball.vx,vy:n.ball.vy},balls:Array.from(n.balls?.length?n.balls:[n.ball]).map((e,t)=>({id:e.id||`legacy-${t}`,x:e.x,y:e.y,vx:e.vx,vy:e.vy,lastTouchEdge:e.lastTouchEdge??n.lastTouchEdge??-1,chargedBy:e.chargedBy??n.chargedBy??-1,age:e.age??1,hitCount:e.hitCount??0})),chargedBy:n.chargedBy??-1,obstacles:Array.from(n.obstacles??[]).map(e=>({id:e.id,x:e.x,y:e.y,radius:e.radius,sides:e.sides,angle:e.angle,spin:e.spin,variant:e.variant??"post"})),seats:Array.from(n.seats).map(e=>({id:e.id,name:e.name,edgeIndex:e.edgeIndex,paddle:e.paddle,paddleVelocity:0,lives:e.lives,score:e.score,charge:!!e.charge,ready:e.ready,connected:e.connected}))}}function ho(){const n=X1(Fh.value,Xc.value,kf.value);return Xc.value=String(n.matchTimeSeconds),kf.value=String(n.lives),n}function T_(){const n=Fh.value==="elimination"?"elimination":"score";wR.classList.toggle("hidden",n!=="elimination"),Xc.querySelector('option[value="0"]').disabled=n==="score",ho()}function b_(){document.documentElement.lang=Yt.language,document.querySelectorAll("[data-i18n]").forEach(n=>{const e=n.dataset.i18n;n.textContent=Ut(e)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{const e=n.dataset.i18nPlaceholder;n.placeholder=Ut(e)}),Vf.value=Yt.language,Hf.value=String(Yt.musicVolume),Gf.value=String(Yt.sfxVolume),__.textContent=`${Yt.musicVolume}%`,v_.textContent=`${Yt.sfxVolume}%`,!Qt&&!gn&&(ro.textContent=Ut("disconnected")),sr()}function Ea(n){Ho.classList.add("menu-open"),zf.classList.remove("hidden"),sa.classList.add("hidden"),Hh=null,zf.querySelectorAll("[data-menu-view]").forEach(e=>{e.hidden=e.dataset.menuView!==n})}async function $h(){if(Ma(!1),Bh.hidden=!0,gn=!1,await xl(),Dt){D1(Dt);return}fe=W1(fe,Ut("disconnected")),fe.ball={x:0,y:0,vx:0,vy:0},fe.balls=[],vl.clear(),kh.clear(),xa.textContent="----",ya.value="",Lr.disabled=!0,Ea("main"),sr()}function po(n){Hh=n,Bh.hidden=!1,zf.classList.add("hidden"),sa.dataset.flow=n,sa.classList.remove("hidden"),vR.textContent=Ut(n==="single"?"singlePlayerTitle":"multiPlayerTitle"),xa.textContent=n==="single"?"SOLO":"----",Lr.disabled=n==="multi"&&!Qt,sr()}async function w_(){gn=!1,await xl(),po("multi");const n=_n(Number($c.value),Hc,Gc),e=ho();Qt=await qc.create("polygon_pong",{sides:n,name:_l.value,...e,...Dt?Vc(Dt,e):{}}),qh(Qt)}async function YR(){const n=ya.value.trim().toUpperCase();n&&(gn=!1,await xl(),po("multi"),Qt=await qc.joinById(n,{name:_l.value,...Dt?Vc(Dt):{}}),qh(Qt))}async function xl(){Qt&&(await Qt.leave(),Qt=null)}async function Xh(){await xl(),Wh(),on("start"),po("single");const n=_n(Number($c.value),Hc,Gc),e=ho();gn=!0,yn="offline-human",Ji=.5,Oi=.5,Vh=0,Ma(!1),Tc=0,bc=0,Vs=0,Go=0,ca=0,E_=0,vl.clear(),xa.textContent=Ut("botName"),ya.value="",Lr.disabled=!1,Lr.textContent=Ut("restart"),fe=tC(n,e),jf="",A_(),gs(),sr()}async function KR(){if(Dt=await R1(),!!Dt){if(_l.value=Dt.payload.user.displayName,Dt.roomId&&(ya.value=Dt.roomId),Dt.sides&&($c.value=String(_n(Dt.sides,Hc,Gc))),await s_(Dt,"game.client_ready",{roomId:Dt.roomId,returnUrl:Dt.returnUrl,offline:Dt.offline,sides:Dt.sides}),Dt.offline){await Xh();return}po("multi");try{if(!Dt.roomId){await w_();return}Qt=await qc.joinById(Dt.roomId,Vc(Dt))}catch{const n=ho();Qt=await qc.create("polygon_pong",{sides:_n(Number($c.value),Hc,Gc),...Vc(Dt,n)})}qh(Qt)}}function qh(n){yn=n.sessionId,Mc=0,Xf=Number.NaN,xa.textContent=n.roomId,ya.value=n.roomId,Lr.disabled=!1,ro.textContent=Ut("connected"),n.onStateChange(e=>{const t=fe.lastEvent;fe=jR(e),cC(t,fe),A_(),gs(),sr()}),n.onLeave(()=>{ro.textContent=Ut("disconnected"),Lr.disabled=!0})}function A_(){const n=`${fe.sides}:${ms(fe.sides)}`;(aa.children.length!==fe.sides||S_!==n)&&M_(fe.sides)}function sr(){const n=fe.seats.find(c=>c.id===yn),e=fe.seats.map(c=>`${c.id}:${c.score}:${c.lives}`).join("|");Iu&&e!==Iu&&(Qr=1),Iu=e;const t=fe.phase==="playing"||fe.phase==="countdown",i=Ho.classList.contains("game-active");Ho.classList.toggle("game-active",t),Ho.classList.toggle("menu-open",!t),i!==t&&gs(),FR.classList.toggle("hidden",!(gn&&so&&t));const r=!!Hh&&fe.phase!=="playing"&&fe.phase!=="countdown";sa.classList.toggle("hidden",!r);const s=!!Qt||gn;xR.classList.toggle("hidden",s),yR.classList.toggle("hidden",!s||fe.phase==="results"),MR.classList.toggle("hidden",fe.phase!=="results"),JR(),SR.textContent=xa.textContent||"----";const o=fe.seats.filter(c=>c.connected&&!c.id.startsWith("bot-")).length,a=!!Qt&&!gn&&fe.phase==="lobby"&&o>0&&o<fe.sides;Wf.classList.toggle("hidden",!a),Wf.disabled=!a,Lr.textContent=gn?Ut("restart"):n?.ready?Ut("waiting"):Ut("ready"),ro.textContent=`${fe.lastEvent}${fe.phase==="countdown"?` ${Math.ceil(fe.countdown)}`:""}`,gR.textContent=fe.mode==="score"?"SCORE":gn?"SIM":Qt?"K.O.":"STANDBY",_R.textContent=fe.matchTimeSeconds>0?q1(fe.remainingTime):`R-${String(fe.round).padStart(2,"0")}`,g_.innerHTML=fe.seats.map((c,l)=>{const h=c.connected?fe.mode==="score"?String(c.score).padStart(2,"0"):`${c.lives}/${fe.livesPerPlayer}`:"--",f=c.ready?Ut("ready").toUpperCase():Ut("open"),p=Array.from({length:fe.livesPerPlayer},(x,y)=>`<i class="${y<c.lives&&c.connected?"on":""}"></i>`).join(""),m=fe.mode==="score"?`${Ut("last")} ${fe.lastTouchEdge===c.edgeIndex?Ut("lastTouch"):f}`:c.connected&&c.lives<=0?Ut("wall"):f;return`
      <div class="score" style="--accent:#${an[l].toString(16).padStart(6,"0")}">
        <span>${String(c.edgeIndex+1).padStart(2,"0")} / ${c.name}</span>
        <strong>${h}</strong>
        <div class="integrity">${p}</div>
        <em>${m}</em>
      </div>
    `}).join(""),ER.innerHTML=fe.seats.map((c,l)=>`
    <div class="roster-row" style="--accent:#${an[l].toString(16).padStart(6,"0")}">
      <span>${String(c.edgeIndex+1).padStart(2,"0")}</span>
      <strong>${c.name}</strong>
      <em>${c.connected&&c.ready?Ut("ready").toUpperCase():Ut("open")}</em>
    </div>
  `).join(""),TR.innerHTML=j1(fe).slice(0,3).map((c,l)=>`
    <div class="podium-row place-${l+1}" style="--accent:#${an[c.edgeIndex%an.length].toString(16).padStart(6,"0")}">
      <span>#${l+1}</span>
      <strong>${c.name}</strong>
      <em>${fe.mode==="score"?String(c.score).padStart(2,"0"):`${c.lives}/${fe.livesPerPlayer}`}</em>
    </div>
  `).join("")}function JR(){if(!Dt||!gn||fe.phase!=="results")return;const n=fe.seats.map(e=>`${e.id}:${e.score}:${e.lives}`).join("|");!n||n===jf||(jf=n,I1(Dt,fe).catch(hr))}function Ma(n){so=n,x_.textContent=so?">":"II",tr.clear(),on("pause"),sr()}function jh(n=!1){if(gn||!Qt)return;const e=performance.now(),t=Math.abs(Oi-Xf)>=HR,i=e-Mc>=VR;!n&&(!t||e-Mc<kR)&&!i||(Mc=e,Xf=Oi,Qt.send("input",{paddle:Oi}))}function yl(n,e=!1){Oi=_n(n,0,1),jh(e)}function ZR(){if(on("charge"),gn){const n=fe.seats.find(e=>e.id===yn);n&&n.lives>0&&(n.charge=!0);return}Qt?.send("input",{charge:!0})}function QR(n){const e=vi.getBoundingClientRect();yl((n-e.left)/e.width)}function R_(n,e,t){hs=n,qf=e,y_=Oi,Gh=!1,t.setPointerCapture(n)}function C_(n,e){Math.abs(n-qf)>4&&(Gh=!0);const t=window.innerWidth<720?1.25:1,i=(n-qf)/Math.max(1,e)*t;yl(y_+i)}function Sl(n,e){hs===n&&(hs=null,e.hasPointerCapture(n)&&e.releasePointerCapture(n))}vi.addEventListener("pointerdown",n=>{R_(n.pointerId,n.clientX,vi)});vi.addEventListener("pointermove",n=>{hs===n.pointerId&&C_(n.clientX,vi.getBoundingClientRect().width)});vi.addEventListener("click",n=>{Gh||QR(n.clientX)});vi.addEventListener("pointerup",n=>Sl(n.pointerId,vi));vi.addEventListener("pointercancel",n=>Sl(n.pointerId,vi));vi.addEventListener("lostpointercapture",()=>{hs=null});Yn.addEventListener("pointerdown",n=>{sa.classList.contains("hidden")&&R_(n.pointerId,n.clientX,Yn)});Yn.addEventListener("pointermove",n=>{hs===n.pointerId&&C_(n.clientX,window.innerWidth*.72)});Yn.addEventListener("pointerup",n=>Sl(n.pointerId,Yn));Yn.addEventListener("pointercancel",n=>Sl(n.pointerId,Yn));Yn.addEventListener("lostpointercapture",()=>{hs=null});function P_(){const n=tr.has("ArrowLeft")||tr.has("KeyA"),e=tr.has("ArrowRight")||tr.has("KeyD");return Number(e)-Number(n)}function eC(n){return n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement}window.addEventListener("keydown",n=>{if(Wh(),n.code==="Escape"&&gn&&(fe.phase==="playing"||fe.phase==="countdown")){n.preventDefault(),Ma(!so);return}if(!eC(n.target)&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)){n.preventDefault(),tr.add(n.code);const e=P_();e!==0&&yl(Oi+e*.045,!0)}n.code==="Space"&&!n.repeat&&(n.preventDefault(),ZR())});window.addEventListener("keyup",n=>{["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&tr.delete(n.code)});document.addEventListener("pointerdown",n=>{Wh(),n.target instanceof HTMLButtonElement&&on("ui")},{passive:!0});AR.addEventListener("click",()=>po("single"));RR.addEventListener("click",()=>po("multi"));CR.addEventListener("click",()=>Ea("settings"));PR.addEventListener("click",()=>Ea("about"));IR.addEventListener("click",()=>Ea("exit"));DR.forEach(n=>n.addEventListener("click",()=>Ea("main")));UR.addEventListener("click",()=>$h().catch(hr));Vf.addEventListener("change",()=>{Yt={...Yt,language:Vf.value==="en"?"en":"es"},Uh(Yt),b_()});Hf.addEventListener("input",()=>{Yt={...Yt,musicVolume:_n(Number(Hf.value),0,100)},__.textContent=`${Yt.musicVolume}%`,gl.setSettings(Yt),Uh(Yt)});Gf.addEventListener("input",()=>{Yt={...Yt,sfxVolume:_n(Number(Gf.value),0,100)},v_.textContent=`${Yt.sfxVolume}%`,gl.setSettings(Yt),Uh(Yt)});Fh.addEventListener("change",T_);Xc.addEventListener("change",ho);kf.addEventListener("change",ho);LR.addEventListener("click",()=>w_().catch(hr));OR.addEventListener("click",()=>YR().catch(hr));NR.addEventListener("click",()=>Xh().catch(hr));Wf.addEventListener("click",()=>{Qt?.send("input",{forceStart:!0})});Lr.addEventListener("click",()=>{if(gn){Xh().catch(hr);return}const n=fe.seats.find(e=>e.id===yn);on("ready"),Qt?.send("input",{ready:!n?.ready})});x_.addEventListener("click",()=>{Ma(!so)});Bh.addEventListener("click",()=>$h().catch(hr));BR.addEventListener("click",()=>Ma(!1));zR.addEventListener("click",()=>$h().catch(hr));function hr(n){ro.textContent=n instanceof Error?n.message:Ut("errorConnection"),Dt&&s_(Dt,"error.client",{message:ro.textContent}).catch(()=>{})}function tC(n,e){const t={sides:n,phase:"countdown",lastEvent:Ut("offlineEvent"),round:1,countdown:.9,remainingTime:e.matchTimeSeconds,matchTimeSeconds:e.matchTimeSeconds,livesPerPlayer:e.lives,lastTouchEdge:-1,mode:e.mode,ball:{x:0,y:0,vx:0,vy:0},balls:[],chargedBy:-1,obstacles:[],seats:Array.from({length:n},(r,s)=>({id:s===0?"offline-human":`bot-${s}`,name:s===0?_l.value.trim().slice(0,16)||Ut("playerFallback"):`${Ut("botName")} ${s}`,edgeIndex:s,paddle:.5,paddleVelocity:0,lives:e.lives,score:0,charge:!1,ready:!0,connected:!0}))},i=Yh(-1,n);return t.ball={x:i.x,y:i.y,vx:i.vx,vy:i.vy},t.balls=[i],Go=0,ca=0,t}function Yh(n=-1,e=fe.sides||fr,t=0){const i=fo(ms(e),Or(e,Kn)),r=n>=0?ml(n,e):-1,o=(r>=0?Math.atan2(-i[r].inward.y,-i[r].inward.x):e===2?Math.random()<.5?0:Math.PI:Math.random()*Math.PI*2)+(Math.random()-.5)*.65,a=H1(e,fe.balls?.length??0,t);return{id:`local-ball-${E_++}`,x:0,y:0,vx:Math.cos(o)*a,vy:Math.sin(o)*a,lastTouchEdge:-1,chargedBy:-1,age:0,hitCount:0}}function Yf(n,e=0){n.hitCount+=1;const t=Math.hypot(n.vx,n.vy)||a_,i=V1(n.hitCount,fe.sides)+e;n.vx=n.vx/t*i,n.vy=n.vy/t*i}function nC(n){if(!gn||fe.phase==="lobby")return;if(fe.phase==="countdown"){fe.countdown-=n,fe.countdown<=0&&(fe.phase="playing",fe.lastEvent=Ut("offlineEvent")),sr();return}if(ca+=n,sC(n),iC(n),fe.matchTimeSeconds>0&&(fe.remainingTime=Math.max(0,fe.remainingTime-n),fe.remainingTime<=0)){rC(),sr();return}const e=f_(fe.sides,ca);Go+=n,fe.balls.length<e&&Go>=Nh&&(fe.balls.push(Yh()),fe.lastEvent="Nueva esfera",on("spawn"),Go=0);for(let t=fe.balls.length-1;t>=0;t-=1){const i=fe.balls[t];i.age+=n,i.x+=i.vx*n,i.y+=i.vy*n,aC(i),lC(i,t)}I_(),sr()}function iC(n){if(fe.obstacles.forEach(e=>{e.angle+=e.spin*n}),Vs>0){Vs-=n,Vs<=0&&(fe.obstacles=Em(fe.sides),Vs=Sm());return}bc-=n,bc<=0&&(fe.obstacles=Em(fe.sides),Vs=Sm(),bc=0)}function rC(){const n=fe.seats.filter(i=>i.connected),e=Math.max(...n.map(i=>i.score),0),t=n.filter(i=>i.score===e);fe.phase="results",fe.obstacles=[],fe.chargedBy=-1,fe.ball={x:0,y:0,vx:0,vy:0},fe.balls=[],fe.lastEvent=t.length===1?`${t[0].name} gana por tiempo`:"Empate por tiempo"}function sC(n){const e=fo(ms(fe.sides),Or(fe.sides,Kn));fe.seats.forEach(t=>{if(t.id===yn||fe.mode==="elimination"&&t.lives<=0)return;const i=e[ml(t.edgeIndex,fe.sides)],s=jc().map(A=>({ball:A,prediction:oC(i,{x:A.x,y:A.y},{x:A.vx,y:A.vy})})).filter(A=>A.prediction).sort((A,T)=>(A.prediction?.time??99)-(T.prediction?.time??99))[0],o=s?.prediction??null,a=s?.ball??jc()[0]??fe.ball,c=performance.now()*.001,l=.5+t.edgeIndex*37%5*.08,h=.5+Math.sin(c*(.85+l)+t.edgeIndex*2.1)*.26,f=ss({x:a.vx,y:a.vy},i.tangent),p=_n(f/12,-.14,.14),m=o?_n(1.25-o.time,0,1):0,x=Math.sin(c*3.1+t.edgeIndex*1.7)*(.11-m*.045),y=o?o.t+p*m+x:h,v=_n(y,.08,.92),g=n*(.56+m*1.28+l*.18),C=t.paddle;t.paddle+=_n(v-t.paddle,-g,g),t.paddleVelocity=(t.paddle-C)/Math.max(n,.001)})}function oC(n,e,t){const i=ss(t,n.inward);if(i>=-.001)return null;const r={x:e.x-n.a.x,y:e.y-n.a.y},s=ss(r,n.inward),o=(xn-s)/i;if(o<0||o>2.5)return null;const a={x:e.x+t.x*o,y:e.y+t.y*o},c=ss({x:a.x-n.a.x,y:a.y-n.a.y},n.tangent);return{t:_n(c/n.length,0,1),time:o}}function aC(n){for(const e of fe.obstacles){const t=n.x-e.x,i=n.y-e.y,r=Math.hypot(t,i),s=e.radius+xn;if(r>s)continue;const o=r>.001?{x:t/r,y:i/r}:{x:1,y:0},a=Bf({x:n.vx,y:n.vy},o),c={x:-o.y,y:o.x};n.vx=a.x+c.x*e.spin*.55,n.vy=a.y+c.y*e.spin*.55,Yf(n),n.x=e.x+o.x*(s+.05),n.y=e.y+o.y*(s+.05),n.chargedBy=-1,ni.spawn(n.x,n.y,e.variant==="bumper"?16773226:4386047,"obstacle",Math.atan2(o.y,o.x)),on("obstacle",.85+Math.min(.6,Math.hypot(n.vx,n.vy)/18)),fe.lastEvent="Obstaculo desvio";return}}function cC(n,e){if(n===e.lastEvent||gn)return;const t=jc()[0];if(!t)return;const i=e.lastEvent,r=e.seats.find(a=>a.id===yn),s=e.lastTouchEdge>=0?e.lastTouchEdge:t.lastTouchEdge,o=s>=0?an[s%an.length]:16777215;i.includes("Obstaculo")?(ni.spawn(t.x,t.y,4386047,"obstacle",Math.atan2(t.vy,t.vx)),on("obstacle")):i.includes("bloqueo")?(ni.spawn(t.x,t.y,o,e.chargedBy>=0?"score":"pad",Math.atan2(t.vy,t.vx)),on(s===r?.edgeIndex?"pad":"wall")):i.includes("Muro")||i.includes("reboto")?(ni.spawn(t.x,t.y,16777215,"wall",Math.atan2(t.vy,t.vx)),on("wall")):i.includes("anota")?(ni.spawn(t.x,t.y,o,"score",Math.atan2(t.vy,t.vx)),on(r&&i.includes(r.name)?"scoreFor":"scoreAgainst")):(i.includes("eliminado")||i.includes("perdio"))&&(ni.spawn(t.x,t.y,o,"score",Math.atan2(t.vy,t.vx)),on(r&&i.includes(r.name)?"scoreAgainst":"scoreFor"))}function lC(n,e){const t=fo(ms(fe.sides),Or(fe.sides,Kn));for(let i=0;i<t.length;i+=1){const r=t[i],s={x:n.x-r.a.x,y:n.y-r.a.y},o=ss(s,r.inward);if(o>xn)continue;const c=ss(s,r.tangent)/r.length;if(c<-.02||c>1.02)continue;const l=h_(i,fe.sides),h=l>=0?fe.seats[l]:void 0;if(!h){const g=Bf({x:n.vx,y:n.vy},r.inward);n.vx=g.x,n.vy=g.y,Yf(n),n.x+=r.inward.x*(xn-o+.06),n.y+=r.inward.y*(xn-o+.06),n.chargedBy=-1,ni.spawn(n.x,n.y,16777215,"wall",r.angle),on("wall"),fe.lastEvent=`Muro ${i+1} reboto`;return}const p=u_(fe.sides)/r.length/2,m=h.id===yn?Ji:h.paddle,x=fe.mode==="elimination"&&h.connected&&h.lives<=0,y=h.connected&&h.lives>0&&Math.abs(c-m)<=p;if(y||x){const g=Bf({x:n.vx,y:n.vy},r.inward),C=y?_n((c-m)/p,-1,1):0,A=Math.sign(C)*Math.pow(Math.abs(C),.72)*3.7,T=h.id===yn?Vh:h.paddleVelocity,N=y?-_n(T,-3.2,3.2)*1.25:0;n.vx=g.x+r.tangent.x*(A+N),n.vy=g.y+r.tangent.y*(A+N);const B=y&&h.charge;Yf(n,B?2.3:0),n.x+=r.inward.x*(xn-o+.06),n.y+=r.inward.y*(xn-o+.06),y?(n.lastTouchEdge=h.edgeIndex,n.chargedBy=B?h.edgeIndex:-1,fe.lastTouchEdge=h.edgeIndex,fe.chargedBy=n.chargedBy,h.charge=!1,ni.spawn(n.x,n.y,an[h.edgeIndex%an.length],B?"score":"pad",r.angle),on(h.id===yn?"pad":"wall"),fe.lastEvent=`${h.name} bloqueo`):(n.chargedBy=-1,ni.spawn(n.x,n.y,16777215,"wall",r.angle),on("wall"),fe.lastEvent=`Muro ${h.edgeIndex+1} reboto`);return}if(fe.mode==="score"){const g=fe.seats[n.lastTouchEdge];g&&g.connected&&g.edgeIndex!==h.edgeIndex?(g.score+=1,fe.lastEvent=`${g.name} anota`,Qr=1,ni.spawn(n.x,n.y,an[g.edgeIndex%an.length],"score",r.angle),on(g.id===yn?"scoreFor":h.id===yn?"scoreAgainst":"scoreFor")):(fe.lastEvent=`${h.name} fallo`,h.id===yn&&on("scoreAgainst"))}else h.lives=Math.max(0,h.lives-1),fe.lastEvent=h.lives===0?`${h.name} eliminado`:`${h.name} perdio una vida`,ni.spawn(n.x,n.y,an[h.edgeIndex%an.length],"score",r.angle),on(h.id===yn?"scoreAgainst":"scoreFor");const v=fe.mode==="score"?fe.seats.filter(g=>g.connected):fe.seats.filter(g=>g.lives>0);if(fe.mode==="elimination"&&v.length<=1)fe.phase="results",fe.lastEvent=v[0]?`${v[0].name} gana`:"Ronda terminada",fe.balls=[];else{fe.round+=1;const g=Math.hypot(n.vx,n.vy);fe.balls.splice(e,1);const C=f_(fe.sides,ca);let A=0;for(;fe.balls.length<C;)fe.balls.push(Yh(h.edgeIndex,fe.sides,A===0?g:0)),A+=1;A>0&&on("spawn")}I_();return}}function I_(){const n=fe.balls[0];if(!n){fe.ball={x:0,y:0,vx:0,vy:0},fe.lastTouchEdge=-1,fe.chargedBy=-1;return}fe.ball={x:n.x,y:n.y,vx:n.vx,vy:n.vy},fe.lastTouchEdge=n.lastTouchEdge,fe.chargedBy=n.chargedBy}function D_(n){const e=Math.min((n-xm)/1e3,.1);xm=n;const t=XR();if(oa.rotation.z+=qR(oa.rotation.z,t)*Math.min(1,e*16),!so){const i=P_();i!==0&&yl(Oi+i*e*1.85);const r=Ji;for(Ji+=(Oi-Ji)*Math.min(1,e*18),Vh=(Ji-r)/Math.max(e,.001),bR.style.left=`${Ji*100}%`,Tc+=e;Tc>=Ru;)nC(Ru),Tc-=Ru;Qr=Math.max(0,Qr-e*2.8),g_.style.filter=Qr>0?`brightness(${1+Qr*.8}) saturate(${1+Qr*.5})`:"",hR(vl,jc(),an,n,gn?0:GR),iR(kh,fe.obstacles,n),ni.update(n);const s=fo(ms(fe.sides),Or(fe.sides,Kn));aa.children.forEach(o=>{const a=o,c=a.userData.playerIndex,l=a.userData.edgeIndex,h=s[l],f=fe.seats[c],p=fe.mode==="elimination"&&!!f?.connected&&(f?.lives??0)<=0,m=p?.5:f?.connected&&f.id===yn?Ji:f?.paddle??.5,x=d_(h,m);a.position.set(x.x+h.inward.x*(p?.05:.28),x.y+h.inward.y*(p?.05:.28),.45),a.rotation.z=h.angle;const y=u_(fe.sides);a.scale.x=p?h.length/ei:y/ei,a.scale.y=p?.32:f?.connected?1:.35,sR(a,{color:an[c%an.length],connected:!!f?.connected,eliminatedWall:p,charged:!!f?.charge,time:n})})}Sa.render(zh,wn),requestAnimationFrame(D_)}window.addEventListener("resize",gs);window.addEventListener("orientationchange",gs);window.visualViewport?.addEventListener("resize",gs);window.addEventListener("blur",()=>{tr.clear(),jh(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&tr.clear(),jh(!0)});M_(fr);gs();b_();T_();KR().catch(hr);requestAnimationFrame(D_);window.__THREE_GAME_DIAGNOSTICS__=()=>({renderer:Sa.info.render,canvas:{css:Yn.getBoundingClientRect().toJSON(),buffer:{width:Yn.width,height:Yn.height},dpr:window.devicePixelRatio},camera:{left:wn.left,right:wn.right,top:wn.top,bottom:wn.bottom,x:wn.position.x,y:wn.position.y},snapshot:fe,connected:!!Qt,mySessionId:yn,localPaddle:Ji,localPaddleTarget:Oi,arcade:Dt});
