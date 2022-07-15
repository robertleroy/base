import{S as tt,i as nt,s as st,e as p,k as I,t as i,c,a as _,m as N,h as o,d as n,b as y,g as h,H as t,W as xe,Y as rt,I as H,$ as ut,Z as at,E as $e,Q as pt,a0 as ct,a1 as mt,w as ft,x as vt,y as _t,a2 as bt,j as fe,q as kt,o as dt,B as ht,R as wt}from"../../../chunks/index-bb166883.js";import{u as et}from"../../../chunks/store-610c45ae.js";import"../../../chunks/index-b5c6c903.js";function Et(l){let u,s,a,R,m,d,D,w,L,S,q,b;return{c(){u=p("div"),s=p("input"),R=I(),m=p("div"),d=i("\u2212"),D=I(),w=p("div"),L=p("span"),S=i("+"),this.h()},l(k){u=c(k,"DIV",{class:!0});var v=_(u);s=c(v,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0,class:!0}),R=N(v),m=c(v,"DIV",{class:!0});var G=_(m);d=o(G,"\u2212"),G.forEach(n),D=N(v),w=c(v,"DIV",{class:!0});var U=_(w);L=c(U,"SPAN",{});var f=_(L);S=o(f,"+"),f.forEach(n),U.forEach(n),v.forEach(n),this.h()},h(){y(s,"type","number"),y(s,"min",l[1]),y(s,"max",l[2]),y(s,"step",l[3]),y(s,"style",l[4]),y(s,"class","svelte-a7cuet"),y(m,"class","increment minus svelte-a7cuet"),y(w,"class","increment plus svelte-a7cuet"),y(u,"class","number svelte-a7cuet")},m(k,v){h(k,u,v),t(u,s),xe(s,l[0]),t(u,R),t(u,m),t(m,d),t(u,D),t(u,w),t(w,L),t(L,S),q||(b=[rt(a=l[5].call(null,s,l[0])),H(s,"input",l[8]),H(m,"pointerdown",l[9]),H(m,"pointerup",l[7]),H(m,"pointerleave",l[7]),H(w,"pointerdown",l[10]),H(w,"pointerup",l[7]),H(w,"pointerleave",l[7])],q=!0)},p(k,[v]){v&2&&y(s,"min",k[1]),v&4&&y(s,"max",k[2]),v&8&&y(s,"step",k[3]),v&16&&y(s,"style",k[4]),a&&ut(a.update)&&v&1&&a.update.call(null,k[0]),v&1&&at(s.value)!==k[0]&&xe(s,k[0])},i:$e,o:$e,d(k){k&&n(u),q=!1,pt(b)}}}function gt(l,u,s){let{value:a=0}=u,R=a,{min:m}=u,{max:d}=u,{step:D=1}=u,{style:w="text-align:center;"}=u;function L(f,M){return{update(P){s(0,a=P===null||a<f.min?R:parseFloat(P)),R=a}}}let S,q;const b=f=>{s(0,a=a+f*D),S=setTimeout(function(){if(a>d){k(),s(0,a=d);return}else if(a<m){k(),s(0,a=m);return}else q=setInterval(function(){s(0,a=a+f*D)},70)},350)};function k(){clearTimeout(S),clearInterval(q),a>d?s(0,a=d):a<m&&s(0,a=m)}function v(){a=at(this.value),s(0,a)}const G=()=>b(-1),U=()=>b(1);return l.$$set=f=>{"value"in f&&s(0,a=f.value),"min"in f&&s(1,m=f.min),"max"in f&&s(2,d=f.max),"step"in f&&s(3,D=f.step),"style"in f&&s(4,w=f.style)},[a,m,d,D,w,L,b,k,v,G,U]}class yt extends tt{constructor(u){super(),nt(this,u,gt,Et,st,{value:0,min:1,max:2,step:3,style:4})}}function It(l){let u,s,a,R,m,d,D,w,L,S,q,b,k,v=l[0].min+"",G,U,f=l[0].max+"",M,P,Q=l[0].step+"",ae,ve,W=l[0].count+"",le,_e,ie,oe,re,z,lt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> userData <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/stores/store'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Number <span class="token keyword">from</span> <span class="token string">'$lib/components/number.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Number</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;$userData.min&#125;</span> 
        <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;$userData.max&#125;</span> 
        <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;$userData.step&#125;</span> 
        <span class="token attr-name"><span class="token namespace">bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;$userData.count&#125;</span> <span class="token punctuation">/></span></span></code>`,ue,pe,ce,B,Y,be,ke,j,de,O,Z,he,we,J,Ee,ge,K,ye,Ie,E,Ne,X,Re,Te,x,De,Le,$,Se,qe,ee,Be,Ge,te,Oe,Ue,ne,A,Ve,se,ze,Ae,V;function it(e){l[1](e)}let Pe={min:l[0].min,max:l[0].max,step:l[0].step};return l[0].count!==void 0&&(Pe.value=l[0].count),d=new yt({props:Pe}),ct.push(()=>mt(d,"value",it)),{c(){u=p("h2"),s=i("Number"),a=I(),R=p("br"),m=I(),ft(d.$$.fragment),w=I(),L=p("br"),S=p("br"),q=I(),b=p("div"),k=i("min: "),G=i(v),U=i(", max: "),M=i(f),P=i(", step: "),ae=i(Q),ve=i(", value: "),le=i(W),_e=i(","),ie=I(),oe=p("br"),re=I(),z=p("pre"),ue=I(),pe=p("br"),ce=I(),B=p("ul"),Y=p("li"),be=i("Accepts numeric input."),ke=I(),j=p("li"),de=i("Spinners "),O=p("ul"),Z=p("li"),he=i("increment on click"),we=I(),J=p("li"),Ee=i("spin on pointerdown"),ge=I(),K=p("li"),ye=i("stop on pointer up"),Ie=I(),E=p("li"),Ne=i("Takes values for "),X=p("strong"),Re=i("style"),Te=i(", "),x=p("strong"),De=i("min"),Le=i(", "),$=p("strong"),Se=i("max"),qe=i(", "),ee=p("strong"),Be=i("step"),Ge=i(" & "),te=p("strong"),Oe=i("value"),Ue=i(" attributes."),ne=p("ul"),A=p("li"),Ve=i("may pass "),se=p("strong"),ze=i("min/max"),Ae=i(" while spinning, will resolve within range."),this.h()},l(e){u=c(e,"H2",{});var r=_(u);s=o(r,"Number"),r.forEach(n),a=N(e),R=c(e,"BR",{}),m=N(e),vt(d.$$.fragment,e),w=N(e),L=c(e,"BR",{}),S=c(e,"BR",{}),q=N(e),b=c(e,"DIV",{});var g=_(b);k=o(g,"min: "),G=o(g,v),U=o(g,", max: "),M=o(g,f),P=o(g,", step: "),ae=o(g,Q),ve=o(g,", value: "),le=o(g,W),_e=o(g,","),g.forEach(n),ie=N(e),oe=c(e,"BR",{}),re=N(e),z=c(e,"PRE",{class:!0});var ot=_(z);ot.forEach(n),ue=N(e),pe=c(e,"BR",{}),ce=N(e),B=c(e,"UL",{});var C=_(B);Y=c(C,"LI",{});var je=_(Y);be=o(je,"Accepts numeric input."),je.forEach(n),ke=N(C),j=c(C,"LI",{});var He=_(j);de=o(He,"Spinners "),O=c(He,"UL",{});var F=_(O);Z=c(F,"LI",{});var Ce=_(Z);he=o(Ce,"increment on click"),Ce.forEach(n),we=N(F),J=c(F,"LI",{});var Fe=_(J);Ee=o(Fe,"spin on pointerdown"),Fe.forEach(n),ge=N(F),K=c(F,"LI",{});var Me=_(K);ye=o(Me,"stop on pointer up"),Me.forEach(n),F.forEach(n),He.forEach(n),Ie=N(C),E=c(C,"LI",{});var T=_(E);Ne=o(T,"Takes values for "),X=c(T,"STRONG",{});var Qe=_(X);Re=o(Qe,"style"),Qe.forEach(n),Te=o(T,", "),x=c(T,"STRONG",{});var We=_(x);De=o(We,"min"),We.forEach(n),Le=o(T,", "),$=c(T,"STRONG",{});var Ye=_($);Se=o(Ye,"max"),Ye.forEach(n),qe=o(T,", "),ee=c(T,"STRONG",{});var Ze=_(ee);Be=o(Ze,"step"),Ze.forEach(n),Ge=o(T," & "),te=c(T,"STRONG",{});var Je=_(te);Oe=o(Je,"value"),Je.forEach(n),Ue=o(T," attributes."),ne=c(T,"UL",{});var Ke=_(ne);A=c(Ke,"LI",{});var me=_(A);Ve=o(me,"may pass "),se=c(me,"STRONG",{});var Xe=_(se);ze=o(Xe,"min/max"),Xe.forEach(n),Ae=o(me," while spinning, will resolve within range."),me.forEach(n),Ke.forEach(n),T.forEach(n),C.forEach(n),this.h()},h(){y(z,"class","language-html")},m(e,r){h(e,u,r),t(u,s),h(e,a,r),h(e,R,r),h(e,m,r),_t(d,e,r),h(e,w,r),h(e,L,r),h(e,S,r),h(e,q,r),h(e,b,r),t(b,k),t(b,G),t(b,U),t(b,M),t(b,P),t(b,ae),t(b,ve),t(b,le),t(b,_e),h(e,ie,r),h(e,oe,r),h(e,re,r),h(e,z,r),z.innerHTML=lt,h(e,ue,r),h(e,pe,r),h(e,ce,r),h(e,B,r),t(B,Y),t(Y,be),t(B,ke),t(B,j),t(j,de),t(j,O),t(O,Z),t(Z,he),t(O,we),t(O,J),t(J,Ee),t(O,ge),t(O,K),t(K,ye),t(B,Ie),t(B,E),t(E,Ne),t(E,X),t(X,Re),t(E,Te),t(E,x),t(x,De),t(E,Le),t(E,$),t($,Se),t(E,qe),t(E,ee),t(ee,Be),t(E,Ge),t(E,te),t(te,Oe),t(E,Ue),t(E,ne),t(ne,A),t(A,Ve),t(A,se),t(se,ze),t(A,Ae),V=!0},p(e,[r]){const g={};r&1&&(g.min=e[0].min),r&1&&(g.max=e[0].max),r&1&&(g.step=e[0].step),!D&&r&1&&(D=!0,g.value=e[0].count,bt(()=>D=!1)),d.$set(g),(!V||r&1)&&v!==(v=e[0].min+"")&&fe(G,v),(!V||r&1)&&f!==(f=e[0].max+"")&&fe(M,f),(!V||r&1)&&Q!==(Q=e[0].step+"")&&fe(ae,Q),(!V||r&1)&&W!==(W=e[0].count+"")&&fe(le,W)},i(e){V||(kt(d.$$.fragment,e),V=!0)},o(e){dt(d.$$.fragment,e),V=!1},d(e){e&&n(u),e&&n(a),e&&n(R),e&&n(m),ht(d,e),e&&n(w),e&&n(L),e&&n(S),e&&n(q),e&&n(b),e&&n(ie),e&&n(oe),e&&n(re),e&&n(z),e&&n(ue),e&&n(pe),e&&n(ce),e&&n(B)}}}function Nt(l,u,s){let a;wt(l,et,m=>s(0,a=m));function R(m){l.$$.not_equal(a.count,m)&&(a.count=m,et.set(a))}return[a,R]}class Lt extends tt{constructor(u){super(),nt(this,u,Nt,It,st,{})}}export{Lt as default};