"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9032],{99032:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var t=a(7552),r=a(99546),l=a(36715),i=a(87731),s=a(68446),o=a(36422);const c=(0,a(75785).n9)()((e=>({root:{margin:e.spacing(2),paddingTop:e.spacing(2)},subtitle:{margin:e.spacing(1)},pluginList:{margin:e.spacing(1),marginTop:e.spacing(5)}}))),m=(0,s.observer)((function({model:e}){const{classes:n}=c(),{version:a}=(0,r.getSession)(e),{pluginManager:s}=(0,o.getEnv)(e),{plugins:m}=s,g=new Set(m.filter((e=>s.pluginMetadata[e.name]?.isCore)).map((e=>e.name)));return t.createElement("div",{className:n.root},t.createElement(l.A,{variant:"h4",align:"center"},"JBrowse 2"),t.createElement(l.A,{variant:"h6",align:"center",className:n.subtitle},a),t.createElement(l.A,{align:"center"},"JBrowse is a"," ",t.createElement(i.A,{href:"http://gmod.org/",target:"_blank",rel:"noopener noreferrer"},"GMOD")," ","project"),t.createElement("br",null),t.createElement(l.A,{align:"center"},"© 2019-2022 The Evolutionary Software Foundation"),t.createElement("div",{className:n.pluginList},t.createElement(l.A,null,"External plugins loaded"),t.createElement("ul",null,m.filter((e=>!g.has(e.name))).map((e=>{const{url:n,name:a,version:r=""}=e,s=`${a} ${r||""}`;return t.createElement("li",{key:e.name},e.url?t.createElement(i.A,{target:"_blank",rel:"noopener noreferrer",href:n},s):t.createElement(l.A,null,s))}))),t.createElement(l.A,null,"Core plugins loaded"),t.createElement("ul",null,m.filter((e=>g.has(e.name))).map((e=>t.createElement("li",{key:e.name},t.createElement(l.A,null,e.name," ",e.version||"")))))))}))}}]);
//# sourceMappingURL=9032.ff3d71fc.chunk.js.map