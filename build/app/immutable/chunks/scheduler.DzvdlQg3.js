var B=Object.defineProperty;var G=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function R(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function st(){return Object.create(null)}function I(t){t.forEach(F)}function ct(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function U(t,...e){if(t==null){for(const i of e)i(void 0);return R}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(U(e,n))}function ft(t,e,n,i){if(t){const l=M(t,e,n,i);return t[0](l)}}function M(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const r=[],s=Math.max(e.dirty.length,l.length);for(let o=0;o<s;o+=1)r[o]=e.dirty[o]|l[o];return r}return e.dirty|l}return e.dirty}function ht(t,e,n,i,l,r){if(l){const s=M(e,n,i,r);t.p(s,l)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let y=!1;function pt(){y=!0}function yt(){y=!1}function W(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:W(1,l,q=>e[n[q]].claim_order,u))-1;i[c]=n[a]+1;const N=a+1;n[N]=c,l=Math.max(N,l)}const r=[],s=[];let o=e.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(r.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);r.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<r.length&&s[c].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(s[c],a)}}function K(t,e){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function bt(){return w(" ")}function xt(){return w("")}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:P(t,i,e[i])}function Tt(t,e){for(const n in e)P(t,n,e[n])}function vt(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,l=!1){S(t);const r=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,l||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function L(t,e,n,i){return C(t,l=>l.nodeName===e,l=>{const r=[];for(let s=0;s<l.attributes.length;s++){const o=l.attributes[s];n[o.name]||r.push(o.name)}r.forEach(s=>l.removeAttribute(s))},()=>i(e))}function Nt(t,e,n){return L(t,e,n,j)}function At(t,e,n){return L(t,e,n,D)}function Y(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function kt(t){return Y(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function Ht(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);S(t);const l=t.splice(n,i-n+1);T(l[0]),T(l[l.length-1]);const r=l.slice(1,l.length-1);if(r.length===0)return new b(e);for(const s of r)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function Mt(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Z(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Dt(t,e){const n=[];let i=0;for(const l of e.childNodes)if(l.nodeType===8){const r=l.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(l)):r===`HEAD_${t}_START`&&(i+=1,n.push(l))}else i>0&&n.push(l);return n}class ${constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=D(n.nodeName):this.e=j(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}class b extends ${constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Pt(t,e){return new t(e)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){g().$$.on_mount.push(t)}function Ct(t){g().$$.after_update.push(t)}function Lt(t){g().$$.on_destroy.push(t)}function Ot(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const r=Z(e,n,{cancelable:i});return l.slice().forEach(s=>{s.call(t,r)}),!r.defaultPrevented}return!0}}const d=[],k=[];let h=[];const H=[],O=Promise.resolve();let v=!1;function tt(){v||(v=!0,O.then(nt))}function qt(){return tt(),O}function et(t){h.push(t)}const E=new Set;let _=0;function nt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,x(e),it(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(d.length);for(;H.length;)H.pop()();v=!1,E.clear(),x(t)}function it(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function Bt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{Ot as $,_t as A,ot as B,Dt as C,I as D,st as E,nt as F,ct as G,ut as H,et as I,Bt as J,p as K,x as L,F as M,d as N,tt as O,pt as P,yt as Q,gt as R,Lt as S,z as T,mt as U,Et as V,D as W,b as X,At as Y,Ht as Z,Tt as _,bt as a,wt as b,Nt as c,T as d,j as e,kt as f,vt as g,P as h,V as i,K as j,Y as k,Mt as l,at as m,R as n,xt as o,Ct as p,St as q,jt as r,rt as s,w as t,k as u,Pt as v,qt as w,ft as x,ht as y,dt as z};
