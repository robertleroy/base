import{S as W,i as X,s as Y,e as O,t as G,k as V,c as k,a as A,h as K,d as _,m as j,b as d,H as N,g as q,I as b,J as Q,j as U,L as Z,M as $,N as y,O as x,q as ee,o as ae,P as se,R as T}from"../../chunks/index-aa4d509f.js";import{b as S}from"../../chunks/paths-396f020f.js";import{p as te}from"../../chunks/stores-592b6c36.js";import{t as D}from"../../chunks/filters-6d93f697.js";import{s as z,d as le}from"../../chunks/store-e6bcf55e.js";import"../../chunks/index-5d357a6e.js";function B(s,a,t){const r=s.slice();return r[6]=a[t].name,r[7]=a[t].url,r}function F(s){let a,t,r=D(s[6])+"",f,c,p,m,g;return{c(){a=O("div"),t=O("a"),f=G(r),p=V(),this.h()},l(l){a=k(l,"DIV",{class:!0});var i=A(a);t=k(i,"A",{href:!0});var v=A(t);f=K(v,r),v.forEach(_),p=j(i),i.forEach(_),this.h()},h(){d(t,"href",c=""+(S+s[7])),d(a,"class","sidenav-item"),N(a,"active",s[7]===s[2].url.pathname)},m(l,i){q(l,a,i),b(a,t),b(t,f),b(a,p),m||(g=Q(a,"click",s[3]),m=!0)},p(l,i){i&2&&r!==(r=D(l[6])+"")&&U(f,r),i&2&&c!==(c=""+(S+l[7]))&&d(t,"href",c),i&6&&N(a,"active",l[7]===l[2].url.pathname)},d(l){l&&_(a),m=!1,g()}}}function re(s){let a,t,r,f,c=D(s[1].title)+"",p,m,g,l,i,v,E,H,J,I=s[1].routes,n=[];for(let e=0;e<I.length;e+=1)n[e]=F(B(s,I,e));const L=s[5].default,h=Z(L,s,s[4],null);return{c(){a=O("aside"),t=O("nav"),r=O("h4"),f=O("a"),p=G(c),g=V();for(let e=0;e<n.length;e+=1)n[e].c();l=V(),i=O("section"),v=O("article"),h&&h.c(),this.h()},l(e){a=k(e,"ASIDE",{class:!0});var u=A(a);t=k(u,"NAV",{class:!0});var o=A(t);r=k(o,"H4",{class:!0});var C=A(r);f=k(C,"A",{href:!0});var M=A(f);p=K(M,c),M.forEach(_),C.forEach(_),g=j(o);for(let R=0;R<n.length;R+=1)n[R].l(o);o.forEach(_),u.forEach(_),l=j(e),i=k(e,"SECTION",{class:!0});var P=A(i);v=k(P,"ARTICLE",{class:!0});var w=A(v);h&&h.l(w),w.forEach(_),P.forEach(_),this.h()},h(){d(f,"href",m=""+(S+s[1].url)),d(r,"class","sidenav-header"),N(r,"active",S+s[1].url===s[2].url.pathname),d(t,"class","side-nav"),d(a,"class","side-bar"),N(a,"sidebarOpen",s[0]),d(v,"class","content"),d(i,"class","page")},m(e,u){q(e,a,u),b(a,t),b(t,r),b(r,f),b(f,p),b(t,g);for(let o=0;o<n.length;o+=1)n[o].m(t,null);q(e,l,u),q(e,i,u),b(i,v),h&&h.m(v,null),E=!0,H||(J=Q(r,"click",s[3]),H=!0)},p(e,[u]){if((!E||u&2)&&c!==(c=D(e[1].title)+"")&&U(p,c),(!E||u&2&&m!==(m=""+(S+e[1].url)))&&d(f,"href",m),u&6&&N(r,"active",S+e[1].url===e[2].url.pathname),u&14){I=e[1].routes;let o;for(o=0;o<I.length;o+=1){const C=B(e,I,o);n[o]?n[o].p(C,u):(n[o]=F(C),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=I.length}u&1&&N(a,"sidebarOpen",e[0]),h&&h.p&&(!E||u&16)&&$(h,L,e,e[4],E?x(L,e[4],u,null):y(e[4]),null)},i(e){E||(ee(h,e),E=!0)},o(e){ae(h,e),E=!1},d(e){e&&_(a),se(n,e),e&&_(l),e&&_(i),h&&h.d(e),H=!1,J()}}}function oe(s,a,t){let r,f,c;T(s,z,l=>t(0,r=l)),T(s,le,l=>t(1,f=l)),T(s,te,l=>t(2,c=l));let{$$slots:p={},$$scope:m}=a;const g=()=>z.set(!1);return s.$$set=l=>{"$$scope"in l&&t(4,m=l.$$scope)},[r,f,c,g,m,p]}class _e extends W{constructor(a){super(),X(this,a,oe,re,Y,{})}}export{_e as default};
