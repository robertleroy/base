import{S as ss,i as ns,s as as,e as f,t as R,k as h,c as m,a as b,h as I,d as a,m as g,b as S,G as F,g as p,H as q,I as ts,E as J,P as es}from"../../chunks/index-05c97b0b.js";function O(c,n,r){const t=c.slice();return t[3]=n[r],t}function Q(c){let n,r=c[3]+"",t,l,v,y,d,L;function C(){return c[2](c[3])}return{c(){n=f("div"),t=R(r),l=h(),v=f("div"),y=R("|"),this.h()},l(o){n=m(o,"DIV",{class:!0});var _=b(n);t=I(_,r),_.forEach(a),l=g(o),v=m(o,"DIV",{class:!0});var E=b(v);y=I(E,"|"),E.forEach(a),this.h()},h(){S(n,"class","tab svelte-dyceoo"),F(n,"selectedTab",c[0]===c[3]),S(v,"class","spacer svelte-dyceoo")},m(o,_){p(o,n,_),q(n,t),p(o,l,_),p(o,v,_),q(v,y),d||(L=ts(n,"click",C),d=!0)},p(o,_){c=o,_&3&&F(n,"selectedTab",c[0]===c[3])},d(o){o&&a(n),o&&a(l),o&&a(v),d=!1,L()}}}function ps(c){let n,r=`<code class="language-bash"><span class="token comment"># Init &amp; follow prompts ~ sveltekit</span>
<span class="token function">npm</span> init @svelte-add/vite@latest

<span class="token comment"># Add plugins</span>
<span class="token function">npm</span> i -D postcss-nested

<span class="token function">npm</span> <span class="token function">install</span>    
<span class="token function">npm</span> run dev</code>`;return{c(){n=f("pre"),this.h()},l(t){n=m(t,"PRE",{class:!0});var l=b(n);l.forEach(a),this.h()},h(){S(n,"class","language-bash")},m(t,l){p(t,n,l),n.innerHTML=r},d(t){t&&a(n)}}}function ls(c){let n,r=`<code class="language-bash"><span class="token comment"># Init &amp; follow prompts ~ svelte vite</span>
<span class="token function">npm</span> init @svelte-add/kit@latest

<span class="token comment"># Add plugins</span>
<span class="token function">npm</span> i -D postcss-nested

<span class="token function">npm</span> <span class="token function">install</span>    
<span class="token function">npm</span> run dev</code>`;return{c(){n=f("pre"),this.h()},l(t){n=m(t,"PRE",{class:!0});var l=b(n);l.forEach(a),this.h()},h(){S(n,"class","language-bash")},m(t,l){p(t,n,l),n.innerHTML=r},d(t){t&&a(n)}}}function os(c){let n,r,t,l,v,y,d,L=`<code class="language-js"><span class="token comment">/* postcss.config.cjs */</span>
<span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"autoprefixer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> postcss_nested <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'postcss-nested'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    autoprefixer<span class="token punctuation">,</span> 
    postcss_nested
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span></code>`,C,o,_,E,$,U=`<code class="language-css"><span class="token comment">/* app.css -- Write your global styles here, in PostCSS syntax */</span>

<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/variables.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/base.css'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/lists.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/links.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/forms.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/shadows.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/vs-dark.css'</span><span class="token punctuation">;</span></span> 
<span class="token comment">/* @import '$lib/styles/codeblock.css';  */</span>
<span class="token comment">/* @import '$lib/styles/blockquote.css';  */</span>
<span class="token comment">/* @import '$lib/styles/tables.css';  */</span></code>`,M,P,x,j,w,X=`<code class="language-html"><span class="token comment">&lt;!-- component.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token string">'title'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  &#123;title&#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>postcss<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,D,V,z,B,H=c[1],u=[];for(let s=0;s<H.length;s+=1)u[s]=Q(O(c,H,s));function G(s,e){if(s[0]==="SvelteKit")return ls;if(s[0]==="Svelte Vite")return ps}let T=G(c),k=T&&T(c);return{c(){n=f("h3");for(let s=0;s<u.length;s+=1)u[s].c();r=h(),k&&k.c(),t=h(),l=f("h4"),v=R("PostCSS Config"),y=h(),d=f("pre"),C=h(),o=f("h4"),_=R("PostCSS Import"),E=h(),$=f("pre"),M=h(),P=f("h4"),x=R("Component"),j=h(),w=f("pre"),D=h(),V=f("br"),z=f("br"),B=f("br"),this.h()},l(s){n=m(s,"H3",{class:!0});var e=b(n);for(let A=0;A<u.length;A+=1)u[A].l(e);e.forEach(a),r=g(s),k&&k.l(s),t=g(s),l=m(s,"H4",{});var i=b(l);v=I(i,"PostCSS Config"),i.forEach(a),y=g(s),d=m(s,"PRE",{class:!0});var K=b(d);K.forEach(a),C=g(s),o=m(s,"H4",{});var N=b(o);_=I(N,"PostCSS Import"),N.forEach(a),E=g(s),$=m(s,"PRE",{class:!0});var Y=b($);Y.forEach(a),M=g(s),P=m(s,"H4",{});var W=b(P);x=I(W,"Component"),W.forEach(a),j=g(s),w=m(s,"PRE",{class:!0});var Z=b(w);Z.forEach(a),D=g(s),V=m(s,"BR",{}),z=m(s,"BR",{}),B=m(s,"BR",{}),this.h()},h(){S(n,"class","tabs svelte-dyceoo"),S(d,"class","language-js"),S($,"class","language-css"),S(w,"class","language-html")},m(s,e){p(s,n,e);for(let i=0;i<u.length;i+=1)u[i].m(n,null);p(s,r,e),k&&k.m(s,e),p(s,t,e),p(s,l,e),q(l,v),p(s,y,e),p(s,d,e),d.innerHTML=L,p(s,C,e),p(s,o,e),q(o,_),p(s,E,e),p(s,$,e),$.innerHTML=U,p(s,M,e),p(s,P,e),q(P,x),p(s,j,e),p(s,w,e),w.innerHTML=X,p(s,D,e),p(s,V,e),p(s,z,e),p(s,B,e)},p(s,[e]){if(e&3){H=s[1];let i;for(i=0;i<H.length;i+=1){const K=O(s,H,i);u[i]?u[i].p(K,e):(u[i]=Q(K),u[i].c(),u[i].m(n,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=H.length}T!==(T=G(s))&&(k&&k.d(1),k=T&&T(s),k&&(k.c(),k.m(t.parentNode,t)))},i:J,o:J,d(s){s&&a(n),es(u,s),s&&a(r),k&&k.d(s),s&&a(t),s&&a(l),s&&a(y),s&&a(d),s&&a(C),s&&a(o),s&&a(E),s&&a($),s&&a(M),s&&a(P),s&&a(j),s&&a(w),s&&a(D),s&&a(V),s&&a(z),s&&a(B)}}}function cs(c,n,r){const t=["SvelteKit","Svelte Vite"];let l="SvelteKit";return[l,t,y=>r(0,l=y)]}class us extends ss{constructor(n){super(),ns(this,n,cs,os,as,{})}}export{us as default};
