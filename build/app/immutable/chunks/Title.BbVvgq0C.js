import{s as q,f as b,n as m}from"./scheduler.D3hV8Tfu.js";import{S as x,i as j,e as o,s as T,p as k,a as h,f as w,b as _,q as p,d as u,j as c,k as f,l as g,r as I,w as v}from"./index.uzxu_-qU.js";import{b as d}from"./paths.CW2gvrRQ.js";function y(i){let e,a,r,s,t;return{c(){e=o("img"),r=T(),s=o("p"),t=k(i[1]),this.h()},l(l){e=h(l,"IMG",{src:!0,alt:!0,class:!0}),r=w(l),s=h(l,"P",{});var n=_(s);t=p(n,i[1]),n.forEach(u),this.h()},h(){b(e.src,a=`${d}${i[0]}`)||c(e,"src",a),c(e,"alt",i[1]),c(e,"class","svelte-1ckyp3x")},m(l,n){f(l,e,n),f(l,r,n),f(l,s,n),g(s,t)},p(l,[n]){n&1&&!b(e.src,a=`${d}${l[0]}`)&&c(e,"src",a),n&2&&c(e,"alt",l[1]),n&2&&I(t,l[1])},i:m,o:m,d(l){l&&(u(e),u(r),u(s))}}}function E(i,e,a){let{src:r=""}=e,{alt:s=""}=e;return i.$$set=t=>{"src"in t&&a(0,r=t.src),"alt"in t&&a(1,s=t.alt)},[r,s]}class H extends x{constructor(e){super(),j(this,e,E,y,q,{src:0,alt:1})}}function P(i){let e,a,r;return{c(){e=o("div"),a=o("h1"),r=k(i[0]),this.h()},l(s){e=h(s,"DIV",{class:!0,style:!0});var t=_(e);a=h(t,"H1",{class:!0});var l=_(a);r=p(l,i[0]),l.forEach(u),t.forEach(u),this.h()},h(){c(a,"class","xl:!text-8xl sm:!text-6xl drop-shadow-2xl"),c(e,"class","rounded-lg w-full h-64 bg-cover flex items-center justify-center svelte-lq3q3b"),v(e,"background-image","linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("+d+"/ProjectThumbnails/"+i[1]+")")},m(s,t){f(s,e,t),g(e,a),g(a,r)},p(s,[t]){t&1&&I(r,s[0]),t&2&&v(e,"background-image","linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("+d+"/ProjectThumbnails/"+s[1]+")")},i:m,o:m,d(s){s&&u(e)}}}function S(i,e,a){let{title:r}=e,{src:s}=e;return i.$$set=t=>{"title"in t&&a(0,r=t.title),"src"in t&&a(1,s=t.src)},[r,s]}class M extends x{constructor(e){super(),j(this,e,S,P,q,{title:0,src:1})}}export{H as I,M as T};