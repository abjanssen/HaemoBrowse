"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5008,8341,722,5484,7865,246,2627],{59705:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(7552),s=t(93878),i=t(70799),o=t(64761),a=t(51148),c=t(60129),l=t(4785),u=t(15622),d=t(72489),p=t(69500);const m=o.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=o.i7`
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
`,f="string"!=typeof m?o.AH`
        animation: ${m} 1.4s linear infinite;
      `:null,h="string"!=typeof v?o.AH`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,g=(0,a.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,u.A)(t.color)}`]]}})((0,c.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:f||{animation:`${m} 1.4s linear infinite`}},...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})))]})))),b=(0,a.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),y=(0,a.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,u.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,c.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:h||{animation:`${v} 1.4s ease-in-out infinite`}}]})))),k=n.forwardRef((function(e,r){const t=(0,l.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:o="primary",disableShrink:a=!1,size:c=40,style:m,thickness:v=3.6,value:f=0,variant:h="indeterminate",...k}=t,A={...t,color:o,disableShrink:a,size:c,thickness:v,value:f,variant:h},x=(e=>{const{classes:r,variant:t,color:n,disableShrink:s}=e,o={root:["root",t,`color${(0,u.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,u.A)(t)}`,s&&"circleDisableShrink"]};return(0,i.A)(o,d.b,r)})(A),w={},S={},E={};if("determinate"===h){const e=2*Math.PI*((44-v)/2);w.strokeDasharray=e.toFixed(3),E["aria-valuenow"]=Math.round(f),w.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,p.jsx)(g,{className:(0,s.A)(x.root,n),style:{width:c,height:c,...S,...m},ownerState:A,ref:r,role:"progressbar",...E,...k,children:(0,p.jsx)(b,{className:x.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,p.jsx)(y,{className:x.circle,style:w,ownerState:A,cx:44,cy:44,r:(44-v)/2,fill:"none",strokeWidth:v})})})}))},72489:(e,r,t)=>{t.d(r,{A:()=>o,b:()=>i});var n=t(33761),s=t(85693);function i(e){return(0,s.Ay)("MuiCircularProgress",e)}const o=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(e,r,t)=>{t.d(r,{x:()=>u});var n=t(7552),s=t(29527),i=t(89887),o=t(99305),a=t(28325),c=t(69500);function l(e){return e.substring(2).toLowerCase()}function u(e){const{children:r,disableReactTree:t=!1,mouseEvent:u="onClick",onClickAway:d,touchEvent:p="onTouchEnd"}=e,m=n.useRef(!1),v=n.useRef(null),f=n.useRef(!1),h=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{f.current=!0}),0),()=>{f.current=!1})),[]);const g=(0,s.A)((0,a.A)(r),v),b=(0,i.A)((e=>{const r=h.current;h.current=!1;const n=(0,o.A)(v.current);if(!f.current||!v.current||"clientX"in e&&function(e,r){return r.documentElement.clientWidth<e.clientX||r.documentElement.clientHeight<e.clientY}(e,n))return;if(m.current)return void(m.current=!1);let s;s=e.composedPath?e.composedPath().indexOf(v.current)>-1:!n.documentElement.contains(e.target)||v.current.contains(e.target),s||!t&&r||d(e)})),y=e=>t=>{h.current=!0;const n=r.props[e];n&&n(t)},k={ref:g};return!1!==p&&(k[p]=y(p)),n.useEffect((()=>{if(!1!==p){const e=l(p),r=(0,o.A)(v.current),t=()=>{m.current=!0};return r.addEventListener(e,b),r.addEventListener("touchmove",t),()=>{r.removeEventListener(e,b),r.removeEventListener("touchmove",t)}}}),[b,p]),!1!==u&&(k[u]=y(u)),n.useEffect((()=>{if(!1!==u){const e=l(u),r=(0,o.A)(v.current);return r.addEventListener(e,b),()=>{r.removeEventListener(e,b)}}}),[b,u]),(0,c.jsx)(n.Fragment,{children:n.cloneElement(r,k)})}},17515:(e,r,t)=>{t.d(r,{A:()=>p});var n=t(7552),s=t(93878),i=t(70799),o=t(51148),a=t(60129),c=t(4785),l=t(89663),u=t(69500);const d=(0,o.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((0,a.A)((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]})))),p=n.forwardRef((function(e,r){const t=(0,c.b)({props:e,name:"MuiToolbar"}),{className:n,component:o="div",disableGutters:a=!1,variant:p="regular",...m}=t,v={...t,component:o,disableGutters:a,variant:p},f=(e=>{const{classes:r,disableGutters:t,variant:n}=e,s={root:["root",!t&&"gutters",n]};return(0,i.A)(s,l.U,r)})(v);return(0,u.jsx)(d,{as:o,className:(0,s.A)(f.root,n),ref:r,ownerState:v,...m})}))},89663:(e,r,t)=>{t.d(r,{A:()=>o,U:()=>i});var n=t(33761),s=t(85693);function i(e){return(0,s.Ay)("MuiToolbar",e)}const o=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=5008.833e2361.chunk.js.map