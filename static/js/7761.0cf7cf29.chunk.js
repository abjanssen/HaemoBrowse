"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7761],{77761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(7552),n=r(75785),s=r(29499),o=r(36715),i=r(75653),l=r(59705),c=r(1343),d=r(83867),m=r(33371),u=r(32808),h=r(58507),p=r(5401),f=r(68446),g=r(45465),b=r(68584),v=r(31409),x=r.n(v),A=r(49823),y=r(99546),k=r(90542),w=r(91194);const S=(0,n.n9)()({dialogContent:{width:"80em"},textAreaFont:{fontFamily:"Courier New"}}),C=(0,f.observer)((function({model:e,handleClose:t}){const{classes:r}=S(),[n,f]=(0,a.useState)(),[v,C]=(0,a.useState)(),[$,E]=(0,a.useState)(!1),[R,M]=(0,a.useState)(!1),[W,N]=(0,a.useState)(!1),{leftOffset:q,rightOffset:P}=e,j=Boolean(void 0===v);(0,a.useEffect)((()=>{const t=new AbortController;return(async()=>{try{const r=e.getSelectedRegions(q,P);if(0===r.length)throw new Error("Selected region is out of bounds");const a=await async function(e,t,r){const a=(0,y.getSession)(e),{leftOffset:n,rightOffset:s}=e;if(!n||!s)throw new Error("no offsets on model to use for range");if(n.assemblyName!==s.assemblyName)throw new Error("not able to fetch sequences from multiple assemblies");const{rpcManager:o,assemblyManager:i}=a,l=n.assemblyName||s.assemblyName||"",c=i.get(l);if(!c)throw new Error(`assembly ${l} not found`);const d=(0,b.getConf)(c,["sequence","adapter"]),m="getSequence";return o.call(m,"CoreGetFeatures",{adapterConfig:d,regions:t,sessionId:m,signal:r})}(e,r,t.signal);C(a)}catch(e){console.error(e),f(e)}})(),()=>{t.abort()}}),[e,q,P]);const G=v?v.map((e=>{let t=e.get("seq");const r=e.get("refName"),a=e.get("start")+1,n=e.get("end"),s=`${r}:${a}-${n}`;if(t?.length!==n-a+1)throw new Error(`${s} returned ${t.length.toLocaleString()} bases, but should have returned ${(n-a).toLocaleString()}`);return $&&(t=(0,y.reverse)(t)),W&&(t=(0,y.complement)(t)),{header:s+($?"-rev":"")+(W?"-comp":""),seq:t}})).map((e=>{return`>${e.header}\n${t=e.seq,t.replaceAll(/(.{1,80})/g,"$1\n").trimEnd()}`;var t})).join("\n"):"",D=!!G&&G.length>1e6;return a.createElement(A.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{t(),e.setOffsets()},title:"Reference sequence"},a.createElement(s.A,null,n?a.createElement(o.A,{color:"error"},`${n}`):j?a.createElement(i.A,null,"Retrieving reference sequence...",a.createElement(l.A,{style:{marginLeft:10},size:20,disableShrink:!0})):null,a.createElement(c.A,{"data-testid":"rubberband-sequence",variant:"outlined",multiline:!0,minRows:5,maxRows:10,disabled:D,className:r.dialogContent,fullWidth:!0,value:D?"Reference sequence too large to display, use the download FASTA button":G,InputProps:{readOnly:!0,classes:{input:r.textAreaFont}}}),a.createElement(d.A,null,a.createElement(m.A,{control:a.createElement(u.A,{value:$,onChange:e=>{E(e.target.checked)}}),label:"Reverse sequence"}),a.createElement(m.A,{control:a.createElement(u.A,{value:W,onChange:e=>{N(e.target.checked)}}),label:"Complement sequence"})),a.createElement(o.A,{style:{margin:10}},'Note: Check both boxes for the "reverse complement"')),a.createElement(h.A,null,a.createElement(p.A,{onClick:()=>{x()(G),M(!0),setTimeout((()=>{M(!1)}),500)},disabled:j||!!n||D,color:"primary",startIcon:a.createElement(k.PM,null)},R?"Copied":"Copy to clipboard"),a.createElement(p.A,{onClick:()=>{(0,g.saveAs)(new Blob([G||""],{type:"text/x-fasta;charset=utf-8"}),"jbrowse_ref_seq.fa")},disabled:j||!!n,color:"primary",startIcon:a.createElement(w.A,null)},"Download FASTA"),a.createElement(p.A,{onClick:t,variant:"contained"},"Close")))}))},91194:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(74893),n=r(69500);const s=(0,a.A)((0,n.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"GetApp")},59705:(e,t,r)=>{r.d(t,{A:()=>y});var a=r(7552),n=r(93878),s=r(70799),o=r(64761),i=r(51148),l=r(60129),c=r(4785),d=r(15622),m=r(58520),u=r(72489),h=r(69500);const p=o.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,f=o.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,g="string"!=typeof p?o.AH`
        animation: ${p} 1.4s linear infinite;
      `:null,b="string"!=typeof f?o.AH`
        animation: ${f} 1.4s ease-in-out infinite;
      `:null,v=(0,i.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.A)(r.color)}`]]}})((0,l.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:g||{animation:`${p} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,m.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),x=(0,i.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),A=(0,i.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,d.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,l.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:b||{animation:`${f} 1.4s ease-in-out infinite`}}]})))),y=a.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:i=!1,size:l=40,style:m,thickness:p=3.6,value:f=0,variant:g="indeterminate",...b}=r,y={...r,color:o,disableShrink:i,size:l,thickness:p,value:f,variant:g},k=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,o={root:["root",r,`color${(0,d.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(r)}`,n&&"circleDisableShrink"]};return(0,s.A)(o,u.b,t)})(y),w={},S={},C={};if("determinate"===g){const e=2*Math.PI*((44-p)/2);w.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(f),w.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,h.jsx)(v,{className:(0,n.A)(k.root,a),style:{width:l,height:l,...S,...m},ownerState:y,ref:t,role:"progressbar",...C,...b,children:(0,h.jsx)(x,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(A,{className:k.circle,style:w,ownerState:y,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>o,b:()=>s});var a=r(33761),n=r(85693);function s(e){return(0,n.Ay)("MuiCircularProgress",e)}const o=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},75653:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(7552),n=r(93878),s=r(85693),o=r(70799),i=r(33283),l=r(82081),c=r(24959),d=r(72861),m=r(69500);const u=(0,d.A)(),h=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,i.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),p=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:u});var f=r(15622),g=r(51148),b=r(31049);const v=function(e={}){const{createStyledComponent:t=h,useThemeProps:r=p,componentName:l="MuiContainer"}=e,c=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const a=r,n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),d=a.forwardRef((function(e,t){const a=r(e),{className:d,component:u="div",disableGutters:h=!1,fixed:p=!1,maxWidth:f="lg",classes:g,...b}=a,v={...a,component:u,disableGutters:h,fixed:p,maxWidth:f},x=((e,t)=>{const{classes:r,fixed:a,disableGutters:n,maxWidth:l}=e,c={root:["root",l&&`maxWidth${(0,i.A)(String(l))}`,a&&"fixed",n&&"disableGutters"]};return(0,o.A)(c,(e=>(0,s.Ay)(t,e)),r)})(v,l);return(0,m.jsx)(c,{as:u,ownerState:v,className:(0,n.A)(x.root,d),ref:t,...b})}));return d}({createStyledComponent:(0,g.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,f.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.A)({props:e,name:"MuiContainer"})}),x=v},24959:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(15543).Ay)()}}]);
//# sourceMappingURL=7761.0cf7cf29.chunk.js.map