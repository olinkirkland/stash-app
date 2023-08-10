  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ha=typeof window<"u";function Fc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Zt(e,a){const t={};for(const r in a){const s=a[r];t[r]=Ee(s)?s.map(e):e(s)}return t}const Ka=()=>{},Ee=Array.isArray,Vc=/\/$/,Oc=e=>e.replace(Vc,"");function Xt(e,a,t="/"){let r,s={},i="",l="";const o=a.indexOf("#");let u=a.indexOf("?");return o<u&&o>=0&&(u=-1),u>-1&&(r=a.slice(0,u),i=a.slice(u+1,o>-1?o:a.length),s=e(i)),o>-1&&(r=r||a.slice(0,o),l=a.slice(o,a.length)),r=_c(r??a,t),{fullPath:r+(i&&"?")+i+l,path:r,query:s,hash:l}}function Hc(e,a){const t=a.query?e(a.query):"";return a.path+(t&&"?")+t+(a.hash||"")}function Ss(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function jc(e,a,t){const r=a.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&qa(a.matched[r],t.matched[s])&&wi(a.params,t.params)&&e(a.query)===e(t.query)&&a.hash===t.hash}function qa(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function wi(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const t in e)if(!zc(e[t],a[t]))return!1;return!0}function zc(e,a){return Ee(e)?Cs(e,a):Ee(a)?Cs(a,e):e===a}function Cs(e,a){return Ee(a)?e.length===a.length&&e.every((t,r)=>t===a[r]):e.length===1&&e[0]===a}function _c(e,a){if(e.startsWith("/"))return e;if(!e)return a;const t=a.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,l,o;for(l=0;l<r.length;l++)if(o=r[l],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var rt;(function(e){e.pop="pop",e.push="push"})(rt||(rt={}));var Qa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qa||(Qa={}));function Nc(e){if(!e)if(ha){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Oc(e)}const Kc=/^[^#]+#/;function Qc(e,a){return e.replace(Kc,"#")+a}function Yc(e,a){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:a.behavior,left:r.left-t.left-(a.left||0),top:r.top-t.top-(a.top||0)}}const zt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jc(e){let a;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;a=Yc(s,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function vs(e,a){return(history.state?history.state.position-a:-1)+e}const mr=new Map;function $c(e,a){mr.set(e,a)}function Zc(e){const a=mr.get(e);return mr.delete(e),a}let Xc=()=>location.protocol+"//"+location.host;function Bi(e,a){const{pathname:t,search:r,hash:s}=a,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,u=s.slice(o);return u[0]!=="/"&&(u="/"+u),Ss(u,"")}return Ss(t,e)+r+s}function en(e,a,t,r){let s=[],i=[],l=null;const o=({state:b})=>{const y=Bi(e,location),A=t.value,q=a.value;let F=0;if(b){if(t.value=y,a.value=b,l&&l===A){l=null;return}F=q?b.position-q.position:0}else r(y);s.forEach(R=>{R(t.value,A,{delta:F,type:rt.pop,direction:F?F>0?Qa.forward:Qa.back:Qa.unknown})})};function u(){l=t.value}function n(b){s.push(b);const y=()=>{const A=s.indexOf(b);A>-1&&s.splice(A,1)};return i.push(y),y}function x(){const{history:b}=window;b.state&&b.replaceState(Q({},b.state,{scroll:zt()}),"")}function d(){for(const b of i)b();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",x,{passive:!0}),{pauseListeners:u,listen:n,destroy:d}}function ks(e,a,t,r=!1,s=!1){return{back:e,current:a,forward:t,replaced:r,position:window.history.length,scroll:s?zt():null}}function an(e){const{history:a,location:t}=window,r={value:Bi(e,t)},s={value:a.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(u,n,x){const d=e.indexOf("#"),b=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+u:Xc()+e+u;try{a[x?"replaceState":"pushState"](n,"",b),s.value=n}catch(y){console.error(y),t[x?"replace":"assign"](b)}}function l(u,n){const x=Q({},a.state,ks(s.value.back,u,s.value.forward,!0),n,{position:s.value.position});i(u,x,!0),r.value=u}function o(u,n){const x=Q({},s.value,a.state,{forward:u,scroll:zt()});i(x.current,x,!0);const d=Q({},ks(r.value,u,null),{position:x.position+1},n);i(u,d,!1),r.value=u}return{location:r,state:s,push:o,replace:l}}function tn(e){e=Nc(e);const a=an(e),t=en(e,a.state,a.location,a.replace);function r(i,l=!0){l||t.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:Qc.bind(null,e)},a,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function rn(e){return typeof e=="string"||e&&typeof e=="object"}function Fi(e){return typeof e=="string"||typeof e=="symbol"}const Je={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vi=Symbol("");var Es;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Es||(Es={}));function Wa(e,a){return Q(new Error,{type:e,[Vi]:!0},a)}function Ve(e,a){return e instanceof Error&&Vi in e&&(a==null||!!(e.type&a))}const As="[^/]+?",sn={sensitive:!1,strict:!1,start:!0,end:!0},ln=/[.+*?^${}()[\]/\\]/g;function un(e,a){const t=Q({},sn,a),r=[];let s=t.start?"^":"";const i=[];for(const n of e){const x=n.length?[]:[90];t.strict&&!n.length&&(s+="/");for(let d=0;d<n.length;d++){const b=n[d];let y=40+(t.sensitive?.25:0);if(b.type===0)d||(s+="/"),s+=b.value.replace(ln,"\\$&"),y+=40;else if(b.type===1){const{value:A,repeatable:q,optional:F,regexp:R}=b;i.push({name:A,repeatable:q,optional:F});const P=R||As;if(P!==As){y+=10;try{new RegExp(`(${P})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${A}" (${P}): `+w.message)}}let z=q?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(z=F&&n.length<2?`(?:/${z})`:"/"+z),F&&(z+="?"),s+=z,y+=20,F&&(y+=-8),q&&(y+=-20),P===".*"&&(y+=-50)}x.push(y)}r.push(x)}if(t.strict&&t.end){const n=r.length-1;r[n][r[n].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const l=new RegExp(s,t.sensitive?"":"i");function o(n){const x=n.match(l),d={};if(!x)return null;for(let b=1;b<x.length;b++){const y=x[b]||"",A=i[b-1];d[A.name]=y&&A.repeatable?y.split("/"):y}return d}function u(n){let x="",d=!1;for(const b of e){(!d||!x.endsWith("/"))&&(x+="/"),d=!1;for(const y of b)if(y.type===0)x+=y.value;else if(y.type===1){const{value:A,repeatable:q,optional:F}=y,R=A in n?n[A]:"";if(Ee(R)&&!q)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const P=Ee(R)?R.join("/"):R;if(!P)if(F)b.length<2&&(x.endsWith("/")?x=x.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);x+=P}}return x||"/"}return{re:l,score:r,keys:i,parse:o,stringify:u}}function on(e,a){let t=0;for(;t<e.length&&t<a.length;){const r=a[t]-e[t];if(r)return r;t++}return e.length<a.length?e.length===1&&e[0]===40+40?-1:1:e.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function cn(e,a){let t=0;const r=e.score,s=a.score;for(;t<r.length&&t<s.length;){const i=on(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(Ms(r))return 1;if(Ms(s))return-1}return s.length-r.length}function Ms(e){const a=e[e.length-1];return e.length>0&&a[a.length-1]<0}const nn={type:0,value:""},xn=/[a-zA-Z0-9_]/;function pn(e){if(!e)return[[]];if(e==="/")return[[nn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(y){throw new Error(`ERR (${t})/"${n}": ${y}`)}let t=0,r=t;const s=[];let i;function l(){i&&s.push(i),i=[]}let o=0,u,n="",x="";function d(){n&&(t===0?i.push({type:0,value:n}):t===1||t===2||t===3?(i.length>1&&(u==="*"||u==="+")&&a(`A repeatable param (${n}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:n,regexp:x,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):a("Invalid state to consume buffer"),n="")}function b(){n+=u}for(;o<e.length;){if(u=e[o++],u==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:u==="/"?(n&&d(),l()):u===":"?(d(),t=1):b();break;case 4:b(),t=r;break;case 1:u==="("?t=2:xn.test(u)?b():(d(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&o--);break;case 2:u===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+u:t=3:x+=u;break;case 3:d(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&o--,x="";break;default:a("Unknown state");break}}return t===2&&a(`Unfinished custom RegExp for param "${n}"`),d(),l(),s}function mn(e,a,t){const r=un(pn(e.path),t),s=Q(r,{record:e,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function dn(e,a){const t=[],r=new Map;a=Us({strict:!1,end:!0,sensitive:!1},a);function s(x){return r.get(x)}function i(x,d,b){const y=!b,A=bn(x);A.aliasOf=b&&b.record;const q=Us(a,x),F=[A];if("alias"in x){const z=typeof x.alias=="string"?[x.alias]:x.alias;for(const w of z)F.push(Q({},A,{components:b?b.record.components:A.components,path:w,aliasOf:b?b.record:A}))}let R,P;for(const z of F){const{path:w}=z;if(d&&w[0]!=="/"){const ue=d.record.path,me=ue[ue.length-1]==="/"?"":"/";z.path=d.record.path+(w&&me+w)}if(R=mn(z,d,q),b?b.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),y&&x.name&&!Ws(R)&&l(x.name)),A.children){const ue=A.children;for(let me=0;me<ue.length;me++)i(ue[me],R,b&&b.children[me])}b=b||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&u(R)}return P?()=>{l(P)}:Ka}function l(x){if(Fi(x)){const d=r.get(x);d&&(r.delete(x),t.splice(t.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=t.indexOf(x);d>-1&&(t.splice(d,1),x.record.name&&r.delete(x.record.name),x.children.forEach(l),x.alias.forEach(l))}}function o(){return t}function u(x){let d=0;for(;d<t.length&&cn(x,t[d])>=0&&(x.record.path!==t[d].record.path||!Oi(x,t[d]));)d++;t.splice(d,0,x),x.record.name&&!Ws(x)&&r.set(x.record.name,x)}function n(x,d){let b,y={},A,q;if("name"in x&&x.name){if(b=r.get(x.name),!b)throw Wa(1,{location:x});q=b.record.name,y=Q(qs(d.params,b.keys.filter(P=>!P.optional).map(P=>P.name)),x.params&&qs(x.params,b.keys.map(P=>P.name))),A=b.stringify(y)}else if("path"in x)A=x.path,b=t.find(P=>P.re.test(A)),b&&(y=b.parse(A),q=b.record.name);else{if(b=d.name?r.get(d.name):t.find(P=>P.re.test(d.path)),!b)throw Wa(1,{location:x,currentLocation:d});q=b.record.name,y=Q({},d.params,x.params),A=b.stringify(y)}const F=[];let R=b;for(;R;)F.unshift(R.record),R=R.parent;return{name:q,path:A,params:y,matched:F,meta:gn(F)}}return e.forEach(x=>i(x)),{addRoute:i,resolve:n,removeRoute:l,getRoutes:o,getRecordMatcher:s}}function qs(e,a){const t={};for(const r of a)r in e&&(t[r]=e[r]);return t}function bn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:In(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function In(e){const a={},t=e.props||!1;if("component"in e)a.default=t;else for(const r in e.components)a[r]=typeof t=="object"?t[r]:t;return a}function Ws(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gn(e){return e.reduce((a,t)=>Q(a,t.meta),{})}function Us(e,a){const t={};for(const r in e)t[r]=r in a?a[r]:e[r];return t}function Oi(e,a){return a.children.some(t=>t===e||Oi(e,t))}const Hi=/#/g,fn=/&/g,Dn=/\//g,Tn=/=/g,yn=/\?/g,ji=/\+/g,hn=/%5B/g,Sn=/%5D/g,zi=/%5E/g,Cn=/%60/g,_i=/%7B/g,vn=/%7C/g,Ni=/%7D/g,kn=/%20/g;function Pr(e){return encodeURI(""+e).replace(vn,"|").replace(hn,"[").replace(Sn,"]")}function En(e){return Pr(e).replace(_i,"{").replace(Ni,"}").replace(zi,"^")}function dr(e){return Pr(e).replace(ji,"%2B").replace(kn,"+").replace(Hi,"%23").replace(fn,"%26").replace(Cn,"`").replace(_i,"{").replace(Ni,"}").replace(zi,"^")}function An(e){return dr(e).replace(Tn,"%3D")}function Mn(e){return Pr(e).replace(Hi,"%23").replace(yn,"%3F")}function qn(e){return e==null?"":Mn(e).replace(Dn,"%2F")}function Et(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wn(e){const a={};if(e===""||e==="?")return a;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ji," "),l=i.indexOf("="),o=Et(l<0?i:i.slice(0,l)),u=l<0?null:Et(i.slice(l+1));if(o in a){let n=a[o];Ee(n)||(n=a[o]=[n]),n.push(u)}else a[o]=u}return a}function Gs(e){let a="";for(let t in e){const r=e[t];if(t=An(t),r==null){r!==void 0&&(a+=(a.length?"&":"")+t);continue}(Ee(r)?r.map(i=>i&&dr(i)):[r&&dr(r)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+t,i!=null&&(a+="="+i))})}return a}function Un(e){const a={};for(const t in e){const r=e[t];r!==void 0&&(a[t]=Ee(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const Gn=Symbol(""),Rs=Symbol(""),wr=Symbol(""),Ki=Symbol(""),br=Symbol("");function Va(){let e=[];function a(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function t(){e=[]}return{add:a,list:()=>e.slice(),reset:t}}function Ze(e,a,t,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,o)=>{const u=d=>{d===!1?o(Wa(4,{from:t,to:a})):d instanceof Error?o(d):rn(d)?o(Wa(2,{from:a,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),l())},n=e.call(r&&r.instances[s],a,t,u);let x=Promise.resolve(n);e.length<3&&(x=x.then(u)),x.catch(d=>o(d))})}function er(e,a,t,r){const s=[];for(const i of e)for(const l in i.components){let o=i.components[l];if(!(a!=="beforeRouteEnter"&&!i.instances[l]))if(Rn(o)){const n=(o.__vccOpts||o)[a];n&&s.push(Ze(n,t,r,i,l))}else{let u=o();s.push(()=>u.then(n=>{if(!n)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const x=Fc(n)?n.default:n;i.components[l]=x;const b=(x.__vccOpts||x)[a];return b&&Ze(b,t,r,i,l)()}))}}return s}function Rn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ls(e){const a=He(wr),t=He(Ki),r=Te(()=>a.resolve(H(e.to))),s=Te(()=>{const{matched:u}=r.value,{length:n}=u,x=u[n-1],d=t.matched;if(!x||!d.length)return-1;const b=d.findIndex(qa.bind(null,x));if(b>-1)return b;const y=Ps(u[n-2]);return n>1&&Ps(x)===y&&d[d.length-1].path!==y?d.findIndex(qa.bind(null,u[n-2])):b}),i=Te(()=>s.value>-1&&Bn(t.params,r.value.params)),l=Te(()=>s.value>-1&&s.value===t.matched.length-1&&wi(t.params,r.value.params));function o(u={}){return wn(u)?a[H(e.replace)?"replace":"push"](H(e.to)).catch(Ka):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:l,navigate:o}}const Ln=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ls,setup(e,{slots:a}){const t=Lt(Ls(e)),{options:r}=He(wr),s=Te(()=>({[ws(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ws(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=a.default&&a.default(t);return e.custom?i:Ri("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),Pn=Ln;function wn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function Bn(e,a){for(const t in a){const r=a[t],s=e[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Ee(s)||s.length!==r.length||r.some((i,l)=>i!==s[l]))return!1}return!0}function Ps(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ws=(e,a,t)=>e??a??t,Fn=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:a,slots:t}){const r=He(br),s=Te(()=>e.route||r.value),i=He(Rs,0),l=Te(()=>{let n=H(i);const{matched:x}=s.value;let d;for(;(d=x[n])&&!d.components;)n++;return n}),o=Te(()=>s.value.matched[l.value]);ft(Rs,Te(()=>l.value+1)),ft(Gn,o),ft(br,s);const u=Ha();return gt(()=>[u.value,o.value,e.name],([n,x,d],[b,y,A])=>{x&&(x.instances[d]=n,y&&y!==x&&n&&n===b&&(x.leaveGuards.size||(x.leaveGuards=y.leaveGuards),x.updateGuards.size||(x.updateGuards=y.updateGuards))),n&&x&&(!y||!qa(x,y)||!b)&&(x.enterCallbacks[d]||[]).forEach(q=>q(n))},{flush:"post"}),()=>{const n=s.value,x=e.name,d=o.value,b=d&&d.components[x];if(!b)return Bs(t.default,{Component:b,route:n});const y=d.props[x],A=y?y===!0?n.params:typeof y=="function"?y(n):y:null,F=Ri(b,Q({},A,a,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[x]=null)},ref:u}));return Bs(t.default,{Component:F,route:n})||F}}});function Bs(e,a){if(!e)return null;const t=e(a);return t.length===1?t[0]:t}const Vn=Fn;function On(e){const a=dn(e.routes,e),t=e.parseQuery||Wn,r=e.stringifyQuery||Gs,s=e.history,i=Va(),l=Va(),o=Va(),u=wl(Je);let n=Je;ha&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=Zt.bind(null,g=>""+g),d=Zt.bind(null,qn),b=Zt.bind(null,Et);function y(g,k){let C,M;return Fi(g)?(C=a.getRecordMatcher(g),M=k):M=g,a.addRoute(M,C)}function A(g){const k=a.getRecordMatcher(g);k&&a.removeRoute(k)}function q(){return a.getRoutes().map(g=>g.record)}function F(g){return!!a.getRecordMatcher(g)}function R(g,k){if(k=Q({},k||u.value),typeof g=="string"){const m=Xt(t,g,k.path),I=a.resolve({path:m.path},k),f=s.createHref(m.fullPath);return Q(m,I,{params:b(I.params),hash:Et(m.hash),redirectedFrom:void 0,href:f})}let C;if("path"in g)C=Q({},g,{path:Xt(t,g.path,k.path).path});else{const m=Q({},g.params);for(const I in m)m[I]==null&&delete m[I];C=Q({},g,{params:d(m)}),k.params=d(k.params)}const M=a.resolve(C,k),K=g.hash||"";M.params=x(b(M.params));const c=Hc(r,Q({},g,{hash:En(K),path:M.path})),p=s.createHref(c);return Q({fullPath:c,hash:K,query:r===Gs?Un(g.query):g.query||{}},M,{redirectedFrom:void 0,href:p})}function P(g){return typeof g=="string"?Xt(t,g,u.value.path):Q({},g)}function z(g,k){if(n!==g)return Wa(8,{from:k,to:g})}function w(g){return Ae(g)}function ue(g){return w(Q(P(g),{replace:!0}))}function me(g){const k=g.matched[g.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let M=typeof C=="function"?C(g):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),Q({query:g.query,hash:g.hash,params:"path"in M?{}:g.params},M)}}function Ae(g,k){const C=n=R(g),M=u.value,K=g.state,c=g.force,p=g.replace===!0,m=me(C);if(m)return Ae(Q(P(m),{state:typeof m=="object"?Q({},K,m.state):K,force:c,replace:p}),k||C);const I=C;I.redirectedFrom=k;let f;return!c&&jc(r,M,C)&&(f=Wa(16,{to:I,from:M}),We(M,M,!0,!1)),(f?Promise.resolve(f):Me(I,M)).catch(D=>Ve(D)?Ve(D,2)?D:Qe(D):N(D,I,M)).then(D=>{if(D){if(Ve(D,2))return Ae(Q({replace:p},P(D.to),{state:typeof D.to=="object"?Q({},K,D.to.state):K,force:c}),k||I)}else D=ia(I,M,!0,p,K);return Ke(I,M,D),D})}function Be(g,k){const C=z(g,k);return C?Promise.reject(C):Promise.resolve()}function ba(g){const k=fa.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(g):g()}function Me(g,k){let C;const[M,K,c]=Hn(g,k);C=er(M.reverse(),"beforeRouteLeave",g,k);for(const m of M)m.leaveGuards.forEach(I=>{C.push(Ze(I,g,k))});const p=Be.bind(null,g,k);return C.push(p),oe(C).then(()=>{C=[];for(const m of i.list())C.push(Ze(m,g,k));return C.push(p),oe(C)}).then(()=>{C=er(K,"beforeRouteUpdate",g,k);for(const m of K)m.updateGuards.forEach(I=>{C.push(Ze(I,g,k))});return C.push(p),oe(C)}).then(()=>{C=[];for(const m of c)if(m.beforeEnter)if(Ee(m.beforeEnter))for(const I of m.beforeEnter)C.push(Ze(I,g,k));else C.push(Ze(m.beforeEnter,g,k));return C.push(p),oe(C)}).then(()=>(g.matched.forEach(m=>m.enterCallbacks={}),C=er(c,"beforeRouteEnter",g,k),C.push(p),oe(C))).then(()=>{C=[];for(const m of l.list())C.push(Ze(m,g,k));return C.push(p),oe(C)}).catch(m=>Ve(m,8)?m:Promise.reject(m))}function Ke(g,k,C){o.list().forEach(M=>ba(()=>M(g,k,C)))}function ia(g,k,C,M,K){const c=z(g,k);if(c)return c;const p=k===Je,m=ha?history.state:{};C&&(M||p?s.replace(g.fullPath,Q({scroll:p&&m&&m.scroll},K)):s.push(g.fullPath,K)),u.value=g,We(g,k,C,p),Qe()}let qe;function wa(){qe||(qe=s.listen((g,k,C)=>{if(!ot.listening)return;const M=R(g),K=me(M);if(K){Ae(Q(K,{replace:!0}),M).catch(Ka);return}n=M;const c=u.value;ha&&$c(vs(c.fullPath,C.delta),zt()),Me(M,c).catch(p=>Ve(p,12)?p:Ve(p,2)?(Ae(p.to,M).then(m=>{Ve(m,20)&&!C.delta&&C.type===rt.pop&&s.go(-1,!1)}).catch(Ka),Promise.reject()):(C.delta&&s.go(-C.delta,!1),N(p,M,c))).then(p=>{p=p||ia(M,c,!1),p&&(C.delta&&!Ve(p,8)?s.go(-C.delta,!1):C.type===rt.pop&&Ve(p,20)&&s.go(-1,!1)),Ke(M,c,p)}).catch(Ka)}))}let Ia=Va(),re=Va(),J;function N(g,k,C){Qe(g);const M=re.list();return M.length?M.forEach(K=>K(g,k,C)):console.error(g),Promise.reject(g)}function Fe(){return J&&u.value!==Je?Promise.resolve():new Promise((g,k)=>{Ia.add([g,k])})}function Qe(g){return J||(J=!g,wa(),Ia.list().forEach(([k,C])=>g?C(g):k()),Ia.reset()),g}function We(g,k,C,M){const{scrollBehavior:K}=e;if(!ha||!K)return Promise.resolve();const c=!C&&Zc(vs(g.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return ni().then(()=>K(g,k,c)).then(p=>p&&Jc(p)).catch(p=>N(p,g,k))}const be=g=>s.go(g);let ga;const fa=new Set,ot={currentRoute:u,listening:!0,addRoute:y,removeRoute:A,hasRoute:F,getRoutes:q,resolve:R,options:e,push:w,replace:ue,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:l.add,afterEach:o.add,onError:re.add,isReady:Fe,install(g){const k=this;g.component("RouterLink",Pn),g.component("RouterView",Vn),g.config.globalProperties.$router=k,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>H(u)}),ha&&!ga&&u.value===Je&&(ga=!0,w(s.location).catch(K=>{}));const C={};for(const K in Je)Object.defineProperty(C,K,{get:()=>u.value[K],enumerable:!0});g.provide(wr,k),g.provide(Ki,ai(C)),g.provide(br,u);const M=g.unmount;fa.add(g),g.unmount=function(){fa.delete(g),fa.size<1&&(n=Je,qe&&qe(),qe=null,u.value=Je,ga=!1,J=!1),M()}}};function oe(g){return g.reduce((k,C)=>k.then(()=>ba(C)),Promise.resolve())}return ot}function Hn(e,a){const t=[],r=[],s=[],i=Math.max(a.matched.length,e.matched.length);for(let l=0;l<i;l++){const o=a.matched[l];o&&(e.matched.find(n=>qa(n,o))?r.push(o):t.push(o));const u=e.matched[l];u&&(a.matched.find(n=>qa(n,u))||s.push(u))}return[t,r,s]}const jn=[{path:"/",components:{app:Wo},name:"home"},{path:"/login",components:{app:kc},name:"login"},{path:"/register",components:{app:Bc},name:"register"},{path:"/library",components:{app:Tc},name:"library"},{path:"/:pathMatch(.*)*",components:{app:qc},name:"lost"}],ma=On({history:tn(),routes:jn}),Br=Io(ko);Br.component("Card",yo);Br.use(ma);Br.mount("#app");