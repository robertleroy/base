import{S as X,i as R,s as q,e as c,t as M,k as _,c as r,a as d,h as b,d as n,m as g,b as i,g as t,H as f,E as A}from"../../../chunks/index-bb166883.js";function B(j){let p,w,m,l,I=`<code class="language-js"><span class="token comment">/* ./mdsvex.config.js */</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> defineMDSveXConfig <span class="token keyword">as</span> defineConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"mdsvex"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rehypeSlug <span class="token keyword">from</span> <span class="token string">'rehype-slug'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rehypeAutolinkHeadings <span class="token keyword">from</span> <span class="token string">'rehype-autolink-headings'</span><span class="token punctuation">;</span>

<span class="token comment">// const behaviors = ['after']</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".svelte.md"</span><span class="token punctuation">,</span> <span class="token string">".md"</span><span class="token punctuation">,</span> <span class="token string">".svx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">smartypants</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">dashes</span><span class="token operator">:</span> <span class="token string">"oldschool"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">remarkPlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    rehypeSlug<span class="token punctuation">,</span>
    rehypeAutolinkHeadings<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code>`,v,y,h,u,e,E,x,k,o,S;return{c(){p=c("h2"),w=M("MDSVEX"),m=_(),l=c("pre"),v=_(),y=c("br"),h=_(),u=c("div"),e=c("a"),E=M("Mdsvex documentation"),x=_(),k=c("div"),o=c("a"),S=M("Svelte-Add Mdsvex"),this.h()},l(s){p=r(s,"H2",{});var a=d(p);w=b(a,"MDSVEX"),a.forEach(n),m=g(s),l=r(s,"PRE",{class:!0});var P=d(l);P.forEach(n),v=g(s),y=r(s,"BR",{}),h=g(s),u=r(s,"DIV",{});var D=d(u);e=r(D,"A",{class:!0,target:!0,href:!0});var H=d(e);E=b(H,"Mdsvex documentation"),H.forEach(n),D.forEach(n),x=g(s),k=r(s,"DIV",{});var C=d(k);o=r(C,"A",{class:!0,target:!0,href:!0});var V=d(o);S=b(V,"Svelte-Add Mdsvex"),V.forEach(n),C.forEach(n),this.h()},h(){i(l,"class","language-js"),i(e,"class","link"),i(e,"target","_blank"),i(e,"href","https://mdsvex.pngwn.io/"),i(o,"class","link"),i(o,"target","_blank"),i(o,"href","https://github.com/svelte-add/mdsvex")},m(s,a){t(s,p,a),f(p,w),t(s,m,a),t(s,l,a),l.innerHTML=I,t(s,v,a),t(s,y,a),t(s,h,a),t(s,u,a),f(u,e),f(e,E),t(s,x,a),t(s,k,a),f(k,o),f(o,S)},p:A,i:A,o:A,d(s){s&&n(p),s&&n(m),s&&n(l),s&&n(v),s&&n(y),s&&n(h),s&&n(u),s&&n(x),s&&n(k)}}}class T extends X{constructor(p){super(),R(this,p,null,B,q,{})}}export{T as default};
