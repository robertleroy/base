import{S as b,i as k,s as w,K as g,L as m,a as d,d as u,b as e,G as o,g as y,H as v,I as f,E as p,Q as A,V as _}from"./index-05c97b0b.js";function x(n){let t,s,l,i,c,h;return{c(){t=g("svg"),s=g("rect"),l=g("rect"),i=g("rect"),this.h()},l(r){t=m(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var a=d(t);s=m(a,"rect",{class:!0,ry:!0,x:!0,y:!0,height:!0,width:!0}),d(s).forEach(u),l=m(a,"rect",{class:!0,ry:!0,x:!0,y:!0,height:!0,width:!0}),d(l).forEach(u),i=m(a,"rect",{class:!0,ry:!0,x:!0,y:!0,height:!0,width:!0}),d(i).forEach(u),a.forEach(u),this.h()},h(){e(s,"class","topbar svelte-1kg67c8"),e(s,"ry","1.5"),e(s,"x","0"),e(s,"y","2"),e(s,"height","4"),e(s,"width","28"),o(s,"topAnim",!n[1]),e(l,"class","middleBar svelte-1kg67c8"),e(l,"ry","1.5"),e(l,"x","0"),e(l,"y","10"),e(l,"height","4"),e(l,"width","28"),o(l,"middleAnim",!n[1]),e(i,"class","bottombar svelte-1kg67c8"),e(i,"ry","1.5"),e(i,"x","0"),e(i,"y","18"),e(i,"height","4"),e(i,"width","28"),o(i,"bottomAnim",!n[1]),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"viewBox","0 0 28 24"),e(t,"fill",n[0]),e(t,"class","svelte-1kg67c8")},m(r,a){y(r,t,a),v(t,s),v(t,l),v(t,i),c||(h=[f(t,"click",n[2]),f(t,"pointerdown",n[3])],c=!0)},p(r,[a]){a&2&&o(s,"topAnim",!r[1]),a&2&&o(l,"middleAnim",!r[1]),a&2&&o(i,"bottomAnim",!r[1]),a&1&&e(t,"fill",r[0])},i:p,o:p,d(r){r&&u(t),c=!1,A(h)}}}function B(n,t,s){let{fill:l="currentColor"}=t,{openMenu:i=!0}=t;function c(r){_.call(this,n,r)}function h(r){_.call(this,n,r)}return n.$$set=r=>{"fill"in r&&s(0,l=r.fill),"openMenu"in r&&s(1,i=r.openMenu)},[l,i,c,h]}class E extends b{constructor(t){super(),k(this,t,B,x,w,{fill:0,openMenu:1})}}export{E as B};
