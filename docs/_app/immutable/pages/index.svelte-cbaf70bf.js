import{S as Q,i as U,s as W,e as _,t as y,k as H,c as p,a as g,h as C,d as h,m as D,b,g as R,I as f,J as M,j as X,w as Y,x as Z,H as T,y as ee,q as te,o as ae,P as se,B as le,R as x}from"../chunks/index-aa4d509f.js";import{t as z}from"../chunks/filters-6d93f697.js";import{s as F,m as re}from"../chunks/store-e6bcf55e.js";import ne from"./steps.md-edaaed43.js";import"../chunks/index-5d357a6e.js";function G(o,t,a){const l=o.slice();return l[3]=t[a].name,l[4]=t[a].url,l}function K(o){let t,a,l=z(o[3])+"",i,v,d,E,m;return{c(){t=_("div"),a=_("a"),i=y(l),d=H(),this.h()},l(r){t=p(r,"DIV",{class:!0});var c=g(t);a=p(c,"A",{href:!0});var I=g(a);i=C(I,l),I.forEach(h),d=D(c),c.forEach(h),this.h()},h(){b(a,"href",v=o[4]),b(t,"class","sidenav-item")},m(r,c){R(r,t,c),f(t,a),f(a,i),f(t,d),E||(m=M(t,"click",o[2]),E=!0)},p(r,c){c&2&&l!==(l=z(r[3])+"")&&X(i,l),c&2&&v!==(v=r[4])&&b(a,"href",v)},d(r){r&&h(t),E=!1,m()}}}function oe(o){let t,a,l,i,v,d,E,m,r,c,I,V,B,N,$,O,q,j,S=o[1].routes,n=[];for(let e=0;e<S.length;e+=1)n[e]=K(G(o,S,e));return $=new ne({}),{c(){t=_("aside"),a=_("nav"),l=_("div"),i=_("a"),v=y("Home"),d=H();for(let e=0;e<n.length;e+=1)n[e].c();E=H(),m=_("div"),r=_("article"),c=_("h2"),I=y("Base"),V=H(),B=_("hr"),N=H(),Y($.$$.fragment),this.h()},l(e){t=p(e,"ASIDE",{class:!0});var u=g(t);a=p(u,"NAV",{class:!0});var s=g(a);l=p(s,"DIV",{class:!0});var A=g(l);i=p(A,"A",{href:!0});var J=g(i);v=C(J,"Home"),J.forEach(h),A.forEach(h),d=D(s);for(let w=0;w<n.length;w+=1)n[w].l(s);s.forEach(h),u.forEach(h),E=D(e),m=p(e,"DIV",{class:!0});var L=g(m);r=p(L,"ARTICLE",{class:!0});var k=g(r);c=p(k,"H2",{});var P=g(c);I=C(P,"Base"),P.forEach(h),V=D(k),B=p(k,"HR",{}),N=D(k),Z($.$$.fragment,k),k.forEach(h),L.forEach(h),this.h()},h(){b(i,"href","/"),b(l,"class","sidenav-header active"),b(a,"class","side-nav"),b(t,"class","aside"),T(t,"sidebarOpen",o[0]),b(r,"class","content"),b(m,"class","page")},m(e,u){R(e,t,u),f(t,a),f(a,l),f(l,i),f(i,v),f(a,d);for(let s=0;s<n.length;s+=1)n[s].m(a,null);R(e,E,u),R(e,m,u),f(m,r),f(r,c),f(c,I),f(r,V),f(r,B),f(r,N),ee($,r,null),O=!0,q||(j=M(l,"click",o[2]),q=!0)},p(e,[u]){if(u&6){S=e[1].routes;let s;for(s=0;s<S.length;s+=1){const A=G(e,S,s);n[s]?n[s].p(A,u):(n[s]=K(A),n[s].c(),n[s].m(a,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=S.length}u&1&&T(t,"sidebarOpen",e[0])},i(e){O||(te($.$$.fragment,e),O=!0)},o(e){ae($.$$.fragment,e),O=!1},d(e){e&&h(t),se(n,e),e&&h(E),e&&h(m),le($),q=!1,j()}}}function ie(o,t,a){let l,i;return x(o,F,d=>a(0,l=d)),x(o,re,d=>a(1,i=d)),[l,i,()=>F.set(!1)]}class ue extends Q{constructor(t){super(),U(this,t,ie,oe,W,{})}}export{ue as default};
