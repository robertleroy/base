import{S as U,i as W,s as X,e as O,t as F,k as T,c as k,a as A,h as G,d as _,m as V,b as d,H as N,g as C,I as g,J as K,j as Q,L as Y,M as Z,N as $,O as y,q as x,o as ee,P as ae,R}from"../../chunks/index-aa4d509f.js";import{p as se}from"../../chunks/stores-592b6c36.js";import{t as q}from"../../chunks/filters-6d93f697.js";import{s as w,d as te}from"../../chunks/store-e6bcf55e.js";import"../../chunks/index-5d357a6e.js";function z(s,a,t){const r=s.slice();return r[6]=a[t].name,r[7]=a[t].url,r}function B(s){let a,t,r=q(s[6])+"",f,c,p,m,b;return{c(){a=O("div"),t=O("a"),f=F(r),p=T(),this.h()},l(l){a=k(l,"DIV",{class:!0});var n=A(a);t=k(n,"A",{href:!0});var v=A(t);f=G(v,r),v.forEach(_),p=V(n),n.forEach(_),this.h()},h(){d(t,"href",c=s[7]),d(a,"class","sidenav-item"),N(a,"active",s[7]===s[2].url.pathname)},m(l,n){C(l,a,n),g(a,t),g(t,f),g(a,p),m||(b=K(a,"click",s[3]),m=!0)},p(l,n){n&2&&r!==(r=q(l[6])+"")&&Q(f,r),n&2&&c!==(c=l[7])&&d(t,"href",c),n&6&&N(a,"active",l[7]===l[2].url.pathname)},d(l){l&&_(a),m=!1,b()}}}function le(s){let a,t,r,f,c=q(s[1].title)+"",p,m,b,l,n,v,E,D,j,I=s[1].routes,i=[];for(let e=0;e<I.length;e+=1)i[e]=B(z(s,I,e));const H=s[5].default,h=Y(H,s,s[4],null);return{c(){a=O("aside"),t=O("nav"),r=O("h4"),f=O("a"),p=F(c),b=T();for(let e=0;e<i.length;e+=1)i[e].c();l=T(),n=O("section"),v=O("article"),h&&h.c(),this.h()},l(e){a=k(e,"ASIDE",{class:!0});var u=A(a);t=k(u,"NAV",{class:!0});var o=A(t);r=k(o,"H4",{class:!0});var S=A(r);f=k(S,"A",{href:!0});var J=A(f);p=G(J,c),J.forEach(_),S.forEach(_),b=V(o);for(let L=0;L<i.length;L+=1)i[L].l(o);o.forEach(_),u.forEach(_),l=V(e),n=k(e,"SECTION",{class:!0});var M=A(n);v=k(M,"ARTICLE",{class:!0});var P=A(v);h&&h.l(P),P.forEach(_),M.forEach(_),this.h()},h(){d(f,"href",m=s[1].url),d(r,"class","sidenav-header"),N(r,"active",s[1].url===s[2].url.pathname),d(t,"class","side-nav"),d(a,"class","side-bar"),N(a,"sidebarOpen",s[0]),d(v,"class","content"),d(n,"class","page")},m(e,u){C(e,a,u),g(a,t),g(t,r),g(r,f),g(f,p),g(t,b);for(let o=0;o<i.length;o+=1)i[o].m(t,null);C(e,l,u),C(e,n,u),g(n,v),h&&h.m(v,null),E=!0,D||(j=K(r,"click",s[3]),D=!0)},p(e,[u]){if((!E||u&2)&&c!==(c=q(e[1].title)+"")&&Q(p,c),(!E||u&2&&m!==(m=e[1].url))&&d(f,"href",m),u&6&&N(r,"active",e[1].url===e[2].url.pathname),u&14){I=e[1].routes;let o;for(o=0;o<I.length;o+=1){const S=z(e,I,o);i[o]?i[o].p(S,u):(i[o]=B(S),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=I.length}u&1&&N(a,"sidebarOpen",e[0]),h&&h.p&&(!E||u&16)&&Z(h,H,e,e[4],E?y(H,e[4],u,null):$(e[4]),null)},i(e){E||(x(h,e),E=!0)},o(e){ee(h,e),E=!1},d(e){e&&_(a),ae(i,e),e&&_(l),e&&_(n),h&&h.d(e),D=!1,j()}}}function re(s,a,t){let r,f,c;R(s,w,l=>t(0,r=l)),R(s,te,l=>t(1,f=l)),R(s,se,l=>t(2,c=l));let{$$slots:p={},$$scope:m}=a;const b=()=>w.set(!1);return s.$$set=l=>{"$$scope"in l&&t(4,m=l.$$scope)},[r,f,c,b,m,p]}class ce extends U{constructor(a){super(),W(this,a,re,le,X,{})}}export{ce as default};
