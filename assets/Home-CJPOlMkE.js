var c=Object.defineProperty;var p=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var h=(e,t,s)=>p(e,typeof t!="symbol"?t+"":t,s);import{V as m,g as i,C as u,_ as d,c as w,a as f,b as _,r as g,F as v,o as k}from"./index-y5mimYVU.js";import{A as y}from"./AnswerSheet-CIYkpqWw.js";const L=`<h2>Fell Like</h2>
<p>This is meant to be an interactive flow chart for people who struggle with self care, executive dysfunction, and/or who have trouble reading internal signals. It&#39;s designed to take as much of the weight off of you as possible, so each decision is very easy and doesn&#39;t require much judgment.</p>
<p>Set aside some time--maybe an hour total- to allow yourself to work through each step. Don&#39;t rush or skip ahead--just follow the directions. Self care is important, and you deserve to devote some time to it.</p>
`,b=`<h2>Fell Like</h2>
<p>是个互动流程表，面向关照自身困难、执行失能、难以察觉内在信号的人。流程旨在尽可能减轻你的负担，每个决定都很简单，不用太过于纠结。</p>
<p>留些许时间——差不多一个小时——允许自己完成每个步骤。不用急于求成或跳过——按指示进行就可以的。关照自身很重要哦，值得为此投入一些时间的。</p>
`,S=`<h2>Fell Like</h2>
<p>是互動流程表，面向關照自身困難、執行失能、難以察覺內在訊號的人。流程旨在盡可能減輕你的負擔，每個決定都很簡單，不用太過於糾結。</p>
<p>留些許時間──差不多一個小時──允許自己完成每個步驟。不用急於求成或跳過－按指示進行就可以的。關照自身很重要哦，值得為此投入一些時間的。</p>
`,A=[{answer:"Let's Start!",jump:"init"}];var F=Object.getOwnPropertyDescriptor,H=(e,t,s,r)=>{for(var n=r>1?void 0:r?F(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let l=class extends m{constructor(){super(...arguments);h(this,"html",i()=="en"?L:i()=="zh_hans"?b:S);h(this,"answers",A)}};l=H([u({components:{AnswerSheet:y}})],l);const $=["innerHTML"];function j(e,t,s,r,n,o){const a=g("AnswerSheet");return k(),w(v,null,[f("div",{class:"markdown",innerHTML:e.html},null,8,$),_(a,{answers:e.answers},null,8,["answers"])],64)}const B=d(l,[["render",j]]);export{B as default};
