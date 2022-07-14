import{S as js,i as Ds,s as Ss,e as p,t as u,k as e,c as l,a as c,h as r,d as a,m as o,b as q,g as n,I as i,E as ks}from"../chunks/index-aa4d509f.js";function Is(Rs){let f,as,M,m,Hs=`<code class="language-sh"># Init &amp; follow prompts ~ svelte vite
npm init @svelte-add/kit@latest

# Add plugins
npm i -D postcss-nested</code>`,d,L,T,R,ts,j,b,ws=`<code class="language-js"><span class="token comment">/* postcss.config.cjs */</span>
<span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"autoprefixer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> postcss_nested <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'postcss-nested'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    autoprefixer<span class="token punctuation">,</span> 
    postcss_nested
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span></code>`,D,S,I,H,ns,A,v,Ps=`<code class="language-html"><span class="token comment">&lt;!-- app.html --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>%sveltekit.body%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code>`,G,O,U,k,ps,C,ls,es,B,os,cs,W,z,F,w,is,J,K,N,_,xs=`<code class="language-css"><span class="token comment">/* app.css -- Write your global styles here, in PostCSS syntax */</span>

<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/variables.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/base.css'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/lists.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/links.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/forms.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/shadows.css'</span><span class="token punctuation">;</span></span> 
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'$lib/styles/vs-dark.css'</span><span class="token punctuation">;</span></span> 
<span class="token comment">/* @import '$lib/styles/codeblock.css';  */</span>
<span class="token comment">/* @import '$lib/styles/blockquote.css';  */</span>
<span class="token comment">/* @import '$lib/styles/tables.css';  */</span></code>`,Q,V,X,P,us,Y,y,$s=`<code class="language-sh">git init
git add .
git commit -m &quot;first commit&quot;
git branch -M main
git remote add origin https://github.com/robertleroy/base.git
git push -u origin main</code>`,Z,g,h,x,rs,ss,E,qs=`<code class="language-sh">git add . &amp;&amp; git commit -m &quot;update&quot;
git push</code>`;return{c(){f=p("h4"),as=u("1. Create Project"),M=e(),m=p("pre"),d=e(),L=p("br"),T=e(),R=p("h4"),ts=u("2. Configure Plugins"),j=e(),b=p("pre"),D=e(),S=p("br"),I=e(),H=p("h4"),ns=u("3. ID app element"),A=e(),v=p("pre"),G=e(),O=p("br"),U=e(),k=p("h4"),ps=u("4. Add "),C=p("code"),ls=u("lib"),es=u(" structure & "),B=p("code"),os=u("styles"),cs=u(" folder"),W=e(),z=p("br"),F=e(),w=p("h4"),is=u("5. import css files / add global base styles"),J=e(),K=p("br"),N=e(),_=p("pre"),Q=e(),V=p("br"),X=e(),P=p("h4"),us=u("8. Git init"),Y=e(),y=p("pre"),Z=e(),g=p("br"),h=e(),x=p("h4"),rs=u("9. Update Repo"),ss=e(),E=p("pre"),this.h()},l(s){f=l(s,"H4",{});var t=c(f);as=r(t,"1. Create Project"),t.forEach(a),M=o(s),m=l(s,"PRE",{class:!0});var Cs=c(m);Cs.forEach(a),d=o(s),L=l(s,"BR",{}),T=o(s),R=l(s,"H4",{});var fs=c(R);ts=r(fs,"2. Configure Plugins"),fs.forEach(a),j=o(s),b=l(s,"PRE",{class:!0});var Bs=c(b);Bs.forEach(a),D=o(s),S=l(s,"BR",{}),I=o(s),H=l(s,"H4",{});var ms=c(H);ns=r(ms,"3. ID app element"),ms.forEach(a),A=o(s),v=l(s,"PRE",{class:!0});var Ms=c(v);Ms.forEach(a),G=o(s),O=l(s,"BR",{}),U=o(s),k=l(s,"H4",{});var $=c(k);ps=r($,"4. Add "),C=l($,"CODE",{});var bs=c(C);ls=r(bs,"lib"),bs.forEach(a),es=r($," structure & "),B=l($,"CODE",{});var vs=c(B);os=r(vs,"styles"),vs.forEach(a),cs=r($," folder"),$.forEach(a),W=o(s),z=l(s,"BR",{}),F=o(s),w=l(s,"H4",{});var _s=c(w);is=r(_s,"5. import css files / add global base styles"),_s.forEach(a),J=o(s),K=l(s,"BR",{}),N=o(s),_=l(s,"PRE",{class:!0});var ds=c(_);ds.forEach(a),Q=o(s),V=l(s,"BR",{}),X=o(s),P=l(s,"H4",{});var ys=c(P);us=r(ys,"8. Git init"),ys.forEach(a),Y=o(s),y=l(s,"PRE",{class:!0});var Ls=c(y);Ls.forEach(a),Z=o(s),g=l(s,"BR",{}),h=o(s),x=l(s,"H4",{});var Es=c(x);rs=r(Es,"9. Update Repo"),Es.forEach(a),ss=o(s),E=l(s,"PRE",{class:!0});var Ts=c(E);Ts.forEach(a),this.h()},h(){q(m,"class","language-sh"),q(b,"class","language-js"),q(v,"class","language-html"),q(_,"class","language-css"),q(y,"class","language-sh"),q(E,"class","language-sh")},m(s,t){n(s,f,t),i(f,as),n(s,M,t),n(s,m,t),m.innerHTML=Hs,n(s,d,t),n(s,L,t),n(s,T,t),n(s,R,t),i(R,ts),n(s,j,t),n(s,b,t),b.innerHTML=ws,n(s,D,t),n(s,S,t),n(s,I,t),n(s,H,t),i(H,ns),n(s,A,t),n(s,v,t),v.innerHTML=Ps,n(s,G,t),n(s,O,t),n(s,U,t),n(s,k,t),i(k,ps),i(k,C),i(C,ls),i(k,es),i(k,B),i(B,os),i(k,cs),n(s,W,t),n(s,z,t),n(s,F,t),n(s,w,t),i(w,is),n(s,J,t),n(s,K,t),n(s,N,t),n(s,_,t),_.innerHTML=xs,n(s,Q,t),n(s,V,t),n(s,X,t),n(s,P,t),i(P,us),n(s,Y,t),n(s,y,t),y.innerHTML=$s,n(s,Z,t),n(s,g,t),n(s,h,t),n(s,x,t),i(x,rs),n(s,ss,t),n(s,E,t),E.innerHTML=qs},p:ks,i:ks,o:ks,d(s){s&&a(f),s&&a(M),s&&a(m),s&&a(d),s&&a(L),s&&a(T),s&&a(R),s&&a(j),s&&a(b),s&&a(D),s&&a(S),s&&a(I),s&&a(H),s&&a(A),s&&a(v),s&&a(G),s&&a(O),s&&a(U),s&&a(k),s&&a(W),s&&a(z),s&&a(F),s&&a(w),s&&a(J),s&&a(K),s&&a(N),s&&a(_),s&&a(Q),s&&a(V),s&&a(X),s&&a(P),s&&a(Y),s&&a(y),s&&a(Z),s&&a(g),s&&a(h),s&&a(x),s&&a(ss),s&&a(E)}}}class Gs extends js{constructor(f){super(),Ds(this,f,null,Is,Ss,{})}}export{Gs as default};
