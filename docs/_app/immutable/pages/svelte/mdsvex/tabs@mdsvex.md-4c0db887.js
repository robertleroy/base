import{S as x,i as G,s as N,e as _,t as z,k as E,c as d,a as y,h as I,d as t,m as q,b as O,G as L,g as u,H as P,I as A,E as M,P as J}from"../../../chunks/index-05c97b0b.js";function V(l,a,r){const n=l.slice();return n[3]=a[r],n}function B(l){let a,r=l[3]+"",n,e,b,k,T,m;function g(){return l[2](l[3])}return{c(){a=_("div"),n=z(r),e=E(),b=_("div"),k=z("|"),this.h()},l(c){a=d(c,"DIV",{class:!0});var v=y(a);n=I(v,r),v.forEach(t),e=q(c),b=d(c,"DIV",{class:!0});var h=y(b);k=I(h,"|"),h.forEach(t),this.h()},h(){O(a,"class","tab svelte-1vq70hj"),L(a,"selectedTab",l[0]===l[3]),O(b,"class","spacer svelte-1vq70hj")},m(c,v){u(c,a,v),P(a,n),u(c,e,v),u(c,b,v),P(b,k),T||(m=A(a,"click",g),T=!0)},p(c,v){l=c,v&3&&L(a,"selectedTab",l[0]===l[3])},d(c){c&&t(a),c&&t(e),c&&t(b),T=!1,m()}}}function K(l){let a,r='<code class="language-bash"><span class="token comment"># Two Fishes</span></code>';return{c(){a=_("pre"),this.h()},l(n){a=d(n,"PRE",{class:!0});var e=y(a);e.forEach(t),this.h()},h(){O(a,"class","language-bash")},m(n,e){u(n,a,e),a.innerHTML=r},d(n){n&&t(a)}}}function Q(l){let a,r='<code class="language-bash"><span class="token comment"># One Fish</span></code>';return{c(){a=_("pre"),this.h()},l(n){a=d(n,"PRE",{class:!0});var e=y(a);e.forEach(t),this.h()},h(){O(a,"class","language-bash")},m(n,e){u(n,a,e),a.innerHTML=r},d(n){n&&t(a)}}}function U(l){let a,r,n,e,b,k,T,m,g,c,v,h,F=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> tabs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Tab One"</span><span class="token punctuation">,</span> <span class="token string">"Tab Two"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> selectedTab <span class="token operator">=</span> <span class="token string">"Tab One"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>tabs<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
  &#123;#each tabs as tab&#125;
  &lt;div class='tab' 
    on:click=&#123;() => selectedTab = tab&#125;
    class:selectedTab=&#123;selectedTab === tab&#125;>&#123;tab&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>spacer<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>|<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  &#123;/each&#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


&#123;#if selectedTab === "Tab One"&#125;

    <span class="token comment">&lt;!-- content here --></span>

&#123;:else if selectedTab === "Tab Two"&#125;

    <span class="token comment">&lt;!-- content here --></span>

&#123;/if &#125;


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>postcss<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.tabs</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 0 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">.tab</span> <span class="token punctuation">&#123;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">.spacer</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--h6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token selector">&amp;:last-of-type</span> <span class="token punctuation">&#123;</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">.selectedTab</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,C,R,w=l[1],i=[];for(let s=0;s<w.length;s+=1)i[s]=B(V(l,w,s));function D(s,p){if(s[0]==="Tab One")return Q;if(s[0]==="Tab Two")return K}let j=D(l),f=j&&j(l);return{c(){a=_("h2"),r=z("Tabs Example"),n=E(),e=_("br"),b=E(),k=_("div");for(let s=0;s<i.length;s+=1)i[s].c();T=E(),f&&f.c(),m=E(),g=_("h4"),c=z("Code"),v=E(),h=_("pre"),C=E(),R=_("br"),this.h()},l(s){a=d(s,"H2",{});var p=y(a);r=I(p,"Tabs Example"),p.forEach(t),n=q(s),e=d(s,"BR",{}),b=q(s),k=d(s,"DIV",{class:!0});var o=y(k);for(let $=0;$<i.length;$+=1)i[$].l(o);o.forEach(t),T=q(s),f&&f.l(s),m=q(s),g=d(s,"H4",{});var H=y(g);c=I(H,"Code"),H.forEach(t),v=q(s),h=d(s,"PRE",{class:!0});var S=y(h);S.forEach(t),C=q(s),R=d(s,"BR",{}),this.h()},h(){O(k,"class","tabs svelte-1vq70hj"),O(h,"class","language-html")},m(s,p){u(s,a,p),P(a,r),u(s,n,p),u(s,e,p),u(s,b,p),u(s,k,p);for(let o=0;o<i.length;o+=1)i[o].m(k,null);u(s,T,p),f&&f.m(s,p),u(s,m,p),u(s,g,p),P(g,c),u(s,v,p),u(s,h,p),h.innerHTML=F,u(s,C,p),u(s,R,p)},p(s,[p]){if(p&3){w=s[1];let o;for(o=0;o<w.length;o+=1){const H=V(s,w,o);i[o]?i[o].p(H,p):(i[o]=B(H),i[o].c(),i[o].m(k,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=w.length}j!==(j=D(s))&&(f&&f.d(1),f=j&&j(s),f&&(f.c(),f.m(m.parentNode,m)))},i:M,o:M,d(s){s&&t(a),s&&t(n),s&&t(e),s&&t(b),s&&t(k),J(i,s),s&&t(T),f&&f.d(s),s&&t(m),s&&t(g),s&&t(v),s&&t(h),s&&t(C),s&&t(R)}}}function W(l,a,r){const n=["Tab One","Tab Two"];let e="Tab One";return[e,n,k=>r(0,e=k)]}class Y extends x{constructor(a){super(),G(this,a,W,U,N,{})}}export{Y as default};
