import{S as ke,i as fe,s as _e,e as g,c as u,b as o,f as S,g as E,V as ce,J as me,E as pe,d as n,Q as ye,W as xe,X as Ee,Y as Ve,t as _,k as p,w as Ie,a as k,h as w,m as f,x as ze,I as r,y as De,Z as Re,j as je,q as Ce,o as He,B as Me}from"../../chunks/index-aa4d509f.js";function Se(s){let e,d,b;return{c(){e=g("input"),this.h()},l(t){e=u(t,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0,style:!0}),this.h()},h(){o(e,"class","js svelte-ib5hg3"),o(e,"type","range"),o(e,"min",s[1]),o(e,"max",s[2]),o(e,"step",s[3]),S(e,"--min",s[1]),S(e,"--max",s[2]),S(e,"--val",s[0])},m(t,l){E(t,e,l),ce(e,s[0]),d||(b=[me(e,"change",s[4]),me(e,"input",s[4])],d=!0)},p(t,[l]){l&2&&o(e,"min",t[1]),l&4&&o(e,"max",t[2]),l&8&&o(e,"step",t[3]),l&2&&S(e,"--min",t[1]),l&4&&S(e,"--max",t[2]),l&1&&S(e,"--val",t[0]),l&1&&ce(e,t[0])},i:pe,o:pe,d(t){t&&n(e),d=!1,ye(b)}}}function qe(s,e,d){let{min:b=0}=e,{max:t=100}=e,{step:l=1}=e,{value:h=50}=e;function V(){h=xe(this.value),d(0,h)}return s.$$set=m=>{"min"in m&&d(1,b=m.min),"max"in m&&d(2,t=m.max),"step"in m&&d(3,l=m.step),"value"in m&&d(0,h=m.value)},[h,b,t,l,V]}class Be extends ke{constructor(e){super(),fe(this,e,qe,Se,_e,{min:1,max:2,step:3,value:0})}}function Je(s){let e,d,b,t,l,h,V,m,P,y,Q,T,i,I,U,W,z,X,Y,D,Z,A,R,F,G,j,K,L,C,O,$,H,ee,ae,M,B,J,N,q;function we(a){s[1](a)}let ie={min:re,max:te,step:se};return s[0]!==void 0&&(ie.value=s[0]),y=new Be({props:ie}),Ee.push(()=>Ve(y,"value",we)),{c(){e=g("h2"),d=_("Components"),b=p(),t=g("hr"),l=p(),h=g("div"),V=g("h3"),m=_("Range"),P=p(),Ie(y.$$.fragment),T=p(),i=g("div"),I=g("div"),U=_("Min:"),W=p(),z=g("div"),X=_(re),Y=p(),D=g("div"),Z=_("Max:"),A=p(),R=g("div"),F=_(te),G=p(),j=g("div"),K=_("Step:"),L=p(),C=g("div"),O=_(se),$=p(),H=g("div"),ee=_("Value:"),ae=p(),M=g("div"),B=_(s[0]),J=p(),N=g("hr"),this.h()},l(a){e=u(a,"H2",{});var c=k(e);d=w(c,"Components"),c.forEach(n),b=f(a),t=u(a,"HR",{}),l=f(a),h=u(a,"DIV",{class:!0});var x=k(h);V=u(x,"H3",{});var ne=k(V);m=w(ne,"Range"),ne.forEach(n),P=f(x),ze(y.$$.fragment,x),T=f(x),i=u(x,"DIV",{class:!0});var v=k(i);I=u(v,"DIV",{class:!0});var le=k(I);U=w(le,"Min:"),le.forEach(n),W=f(v),z=u(v,"DIV",{class:!0});var oe=k(z);X=w(oe,re),oe.forEach(n),Y=f(v),D=u(v,"DIV",{class:!0});var he=k(D);Z=w(he,"Max:"),he.forEach(n),A=f(v),R=u(v,"DIV",{class:!0});var ve=k(R);F=w(ve,te),ve.forEach(n),G=f(v),j=u(v,"DIV",{class:!0});var de=k(j);K=w(de,"Step:"),de.forEach(n),L=f(v),C=u(v,"DIV",{class:!0});var ge=k(C);O=w(ge,se),ge.forEach(n),$=f(v),H=u(v,"DIV",{class:!0});var ue=k(H);ee=w(ue,"Value:"),ue.forEach(n),ae=f(v),M=u(v,"DIV",{class:!0});var be=k(M);B=w(be,s[0]),be.forEach(n),v.forEach(n),x.forEach(n),J=f(a),N=u(a,"HR",{}),this.h()},h(){o(I,"class","key"),o(z,"class","value"),o(D,"class","key"),o(R,"class","value"),o(j,"class","key"),o(C,"class","value"),o(H,"class","key"),o(M,"class","value"),o(i,"class","values svelte-1f69g73"),o(h,"class","range svelte-1f69g73")},m(a,c){E(a,e,c),r(e,d),E(a,b,c),E(a,t,c),E(a,l,c),E(a,h,c),r(h,V),r(V,m),r(h,P),De(y,h,null),r(h,T),r(h,i),r(i,I),r(I,U),r(i,W),r(i,z),r(z,X),r(i,Y),r(i,D),r(D,Z),r(i,A),r(i,R),r(R,F),r(i,G),r(i,j),r(j,K),r(i,L),r(i,C),r(C,O),r(i,$),r(i,H),r(H,ee),r(i,ae),r(i,M),r(M,B),E(a,J,c),E(a,N,c),q=!0},p(a,[c]){const x={};!Q&&c&1&&(Q=!0,x.value=a[0],Re(()=>Q=!1)),y.$set(x),(!q||c&1)&&je(B,a[0])},i(a){q||(Ce(y.$$.fragment,a),q=!0)},o(a){He(y.$$.fragment,a),q=!1},d(a){a&&n(e),a&&n(b),a&&n(t),a&&n(l),a&&n(h),Me(y),a&&n(J),a&&n(N)}}}let re=0,te=10,se=1;function Ne(s,e,d){let b=7;function t(l){b=l,d(0,b)}return[b,t]}class Qe extends ke{constructor(e){super(),fe(this,e,Ne,Je,_e,{})}}export{Qe as default};
