const __vite__fileDeps=["../nodes/0.BiYwB2z0.js","../chunks/scheduler.DzvdlQg3.js","../chunks/index.BjxXVWaz.js","../assets/0.Sm7YL-wI.css","../nodes/1.BtQVl4y7.js","../chunks/entry.SXoZj2y-.js","../chunks/paths.C_ct18KX.js","../nodes/2.Cm3gAqlr.js","../nodes/3.CTEiggyA.js","../chunks/Title.CkTod0Za.js","../assets/Title.Cevzs6Sk.css","../nodes/4.Bo6G_COB.js","../nodes/5.C9SrR7iQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,a as j,o as d,f as B,i as k,d as h,p as U,q as W,e as z,c as F,b as G,h as A,r as p,t as H,k as J,l as K,u as O,v as y,w as Q}from"../chunks/scheduler.DzvdlQg3.js";import{S as X,i as Y,b as g,e as L,t as w,g as T,c as R,a as I,m as D,d as P}from"../chunks/index.BjxXVWaz.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},S={},E=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in S)return;S[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const v=u[b];if(v.href===o&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":Z,c||(_.as="script",_.crossOrigin=""),_.href=o,r&&_.setAttribute("nonce",r),document.head.appendChild(_),c)return new Promise((b,v)=>{_.addEventListener("load",b),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})},re={};function $(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=y(s,u(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&D(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){T();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}s?(e=y(s,u(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=y(s,u(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&D(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){T();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}s?(e=y(s,u(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function u(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=y(s,u(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&D(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){T();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}s?(e=y(s,u(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&q(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=G(e);n&&n.l(s),s.forEach(h),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function q(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(a){let e,n,i,s,u;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let c=a[5]&&V(a);return{c(){n.c(),i=j(),c&&c.c(),s=d()},l(l){n.l(l),i=B(l),c&&c.l(l),s=d()},m(l,m){r[e].m(l,m),k(l,i,m),c&&c.m(l,m),k(l,s,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?r[e].p(l,m):(T(),g(r[_],1,1,()=>{r[_]=null}),L(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=V(l),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(l){u||(w(n),u=!0)},o(l){g(n),u=!1},d(l){l&&(h(i),h(s)),r[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:c=null}=e;U(i.page.notify);let l=!1,m=!1,_=null;W(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),f});function b(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function v(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,u=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,u,r,o,c,l,m,_,i,s,b,v,C]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>E(()=>import("../nodes/0.BiYwB2z0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>E(()=>import("../nodes/1.BtQVl4y7.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>E(()=>import("../nodes/2.Cm3gAqlr.js"),__vite__mapDeps([7,1,2,6]),import.meta.url),()=>E(()=>import("../nodes/3.CTEiggyA.js"),__vite__mapDeps([8,1,2,9,6,10]),import.meta.url),()=>E(()=>import("../nodes/4.Bo6G_COB.js"),__vite__mapDeps([11,1,2,9,6,10]),import.meta.url),()=>E(()=>import("../nodes/5.C9SrR7iQ.js"),__vite__mapDeps([12,1,2,9,6,10]),import.meta.url)],le=[],ce={"/":[2],"/projects/DesolateDominion":[3],"/projects/TheDevilsDungeon":[4],"/projects/TheOrbetorian":[5]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
