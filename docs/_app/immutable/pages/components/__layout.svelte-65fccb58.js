import{S as W,i as X,s as Y,e as O,t as G,k as V,c as k,a as A,h as K,d as _,m as j,b as d,H as N,g as C,I as b,J as Q,j as U,L as Z,M as $,N as y,O as x,q as ee,o as ae,P as se,R as T}from"../../chunks/index-aa4d509f.js";import{p as te}from"../../chunks/stores-592b6c36.js";import{b as q}from"../../chunks/paths-396f020f.js";import{t as D}from"../../chunks/filters-6d93f697.js";import{s as z,c as le}from"../../chunks/store-e6bcf55e.js";import"../../chunks/index-5d357a6e.js";function B(s,a,t){const r=s.slice();return r[6]=a[t].name,r[7]=a[t].url,r}function F(s){let a,t,r=D(s[6])+"",f,u,m,p,g;return{c(){a=O("div"),t=O("a"),f=G(r),m=V(),this.h()},l(l){a=k(l,"DIV",{class:!0});var n=A(a);t=k(n,"A",{href:!0});var v=A(t);f=K(v,r),v.forEach(_),m=j(n),n.forEach(_),this.h()},h(){d(t,"href",u=""+(q+s[7])),d(a,"class","sidenav-item"),N(a,"active",s[7]===s[2].url.pathname)},m(l,n){C(l,a,n),b(a,t),b(t,f),b(a,m),p||(g=Q(a,"click",s[3]),p=!0)},p(l,n){n&2&&r!==(r=D(l[6])+"")&&U(f,r),n&2&&u!==(u=""+(q+l[7]))&&d(t,"href",u),n&6&&N(a,"active",l[7]===l[2].url.pathname)},d(l){l&&_(a),p=!1,g()}}}function re(s){let a,t,r,f,u=D(s[1].title)+"",m,p,g,l,n,v,E,H,J,I=s[1].routes,i=[];for(let e=0;e<I.length;e+=1)i[e]=F(B(s,I,e));const L=s[5].default,h=Z(L,s,s[4],null);return{c(){a=O("aside"),t=O("nav"),r=O("h4"),f=O("a"),m=G(u),g=V();for(let e=0;e<i.length;e+=1)i[e].c();l=V(),n=O("section"),v=O("article"),h&&h.c(),this.h()},l(e){a=k(e,"ASIDE",{class:!0});var c=A(a);t=k(c,"NAV",{class:!0});var o=A(t);r=k(o,"H4",{class:!0});var S=A(r);f=k(S,"A",{href:!0});var M=A(f);m=K(M,u),M.forEach(_),S.forEach(_),g=j(o);for(let R=0;R<i.length;R+=1)i[R].l(o);o.forEach(_),c.forEach(_),l=j(e),n=k(e,"SECTION",{class:!0});var P=A(n);v=k(P,"ARTICLE",{class:!0});var w=A(v);h&&h.l(w),w.forEach(_),P.forEach(_),this.h()},h(){d(f,"href",p=""+(q+s[1].url)),d(r,"class","sidenav-header"),N(r,"active",s[1].url===s[2].url.pathname),d(t,"class","side-nav"),d(a,"class","side-bar"),N(a,"sidebarOpen",s[0]),d(v,"class","content"),d(n,"class","page")},m(e,c){C(e,a,c),b(a,t),b(t,r),b(r,f),b(f,m),b(t,g);for(let o=0;o<i.length;o+=1)i[o].m(t,null);C(e,l,c),C(e,n,c),b(n,v),h&&h.m(v,null),E=!0,H||(J=Q(r,"click",s[3]),H=!0)},p(e,[c]){if((!E||c&2)&&u!==(u=D(e[1].title)+"")&&U(m,u),(!E||c&2&&p!==(p=""+(q+e[1].url)))&&d(f,"href",p),c&6&&N(r,"active",e[1].url===e[2].url.pathname),c&14){I=e[1].routes;let o;for(o=0;o<I.length;o+=1){const S=B(e,I,o);i[o]?i[o].p(S,c):(i[o]=F(S),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=I.length}c&1&&N(a,"sidebarOpen",e[0]),h&&h.p&&(!E||c&16)&&$(h,L,e,e[4],E?x(L,e[4],c,null):y(e[4]),null)},i(e){E||(ee(h,e),E=!0)},o(e){ae(h,e),E=!1},d(e){e&&_(a),se(i,e),e&&_(l),e&&_(n),h&&h.d(e),H=!1,J()}}}function oe(s,a,t){let r,f,u;T(s,z,l=>t(0,r=l)),T(s,le,l=>t(1,f=l)),T(s,te,l=>t(2,u=l));let{$$slots:m={},$$scope:p}=a;const g=()=>z.set(!1);return s.$$set=l=>{"$$scope"in l&&t(4,p=l.$$scope)},[r,f,u,g,p,m]}class _e extends W{constructor(a){super(),X(this,a,oe,re,Y,{})}}export{_e as default};