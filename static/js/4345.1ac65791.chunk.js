"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4345],{44345:(e,t,n)=>{n.d(t,{renderArcSvg:()=>i});var o=n(99546),s=n(53740),r=n(69500);async function i(e,t){await(0,o.when)((()=>!e.loading));const n=(0,o.getContainingView)(e).dynamicBlocks.totalWidthPx,i=e.height,a=`arc-${e.id}`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:a,children:(0,r.jsx)("rect",{x:0,y:0,width:n,height:i})})}),(0,r.jsx)("g",{clipPath:`url(#${a})`,children:(0,r.jsx)(s.A,{model:e,exportSVG:!0})})]})}},53740:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(7552),s=n(68584),r=n(99546),i=n(68446),a=n(6854);function l(e,t){const n=t?(0,a.h)(t):void 0,o=e.get("start");let s=e.get("end");const r=e.get("strand"),i=e.get("mate"),l=e.get("refName");let c,u=0,d=0,f=0,m=0;if(["<TRA","<DEL","<INV","<INS","<DUP","<CNV"].some((e=>t?.startsWith(e)))){const t=e.get("INFO"),n=t?.END?.[0]??s;c=t?.CHR2?.[0]??l,u=n,d=n-1,s=o+1}else if(n?.MatePosition){const e=n.MatePosition.split(":");m="left"===n.MateDirection?1:-1,f="left"===n.Join?-1:1,u=+e[1],d=+e[1]-1,c=e[0]}return{k1:{refName:l,start:o,end:s,strand:r,mateDirection:m},k2:i??{refName:c||"unknown",end:u,start:d,mateDirection:f}}}function c(e,t){const{k1:n,k2:o}=l(e,t);return[e.get("name"),e.get("id"),(0,r.assembleLocString)(n),(0,r.assembleLocString)(o),e.get("INFO")?.SVTYPE,t].filter((e=>!!e)).join("<br/>")}var u=n(69500);const d=(0,o.lazy)((()=>n.e(2241).then(n.bind(n,72241)))),f=(0,i.observer)((function({model:e,feature:t,alt:n,assembly:i,view:a}){const[f,m]=(0,o.useState)(!1),{height:h}=e,{k1:g,k2:x}=l(t,n),b=(0,o.useRef)(null),k=(0,s.getConf)(e,"color",{feature:t,alt:n}),p=i.getCanonicalRefName(g.refName)||g.refName,j=i.getCanonicalRefName(x.refName)||x.refName,v=g.start,N=x.start,w=a.bpToPx({refName:p,coord:v})?.offsetPx,P=a.bpToPx({refName:j,coord:N})?.offsetPx;if(void 0!==w&&void 0!==P){const s=(P-w)/2,i=Math.abs(s),l=Math.min(h,i),p=w-a.offsetPx,j=P-a.offsetPx,v=f?"black":k,N=3;return i>1?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{d:`M ${p} 0 C ${p} ${l}, ${j} ${l}, ${j} 0`,ref:b,...(0,r.getStrokeProps)(v),strokeWidth:N,onMouseOut:()=>{m(!1)},onMouseOver:()=>{m(!0)},onClick:()=>{e.selectFeature(t)},fill:"none",pointerEvents:"stroke"}),g.mateDirection?(0,u.jsx)("line",{...(0,r.getStrokeProps)(v),strokeWidth:N,onMouseOut:()=>{m(!1)},onMouseOver:()=>{m(!0)},onClick:()=>{e.selectFeature(t)},x1:p,x2:p+20*g.mateDirection,y1:1.5,y2:1.5}):null,x.mateDirection?(0,u.jsx)("line",{...(0,r.getStrokeProps)(v),strokeWidth:N,onMouseOut:()=>{m(!1)},onMouseOver:()=>{m(!0)},onClick:()=>{e.selectFeature(t)},x1:j,x2:j+20*x.mateDirection,y1:1.5,y2:1.5}):null,f?(0,u.jsx)(o.Suspense,{fallback:null,children:(0,u.jsx)(d,{contents:c(t,n)})}):null]}):null}return null})),m=(0,i.observer)((function({model:e,exportSVG:t,children:n}){const{height:o}=e,s=(0,r.getContainingView)(e),i=Math.round(s.dynamicBlocks.totalWidthPx);return t?n:(0,u.jsx)("svg",{width:i,height:o,children:n})})),h=(0,i.observer)((function({model:e,exportSVG:t}){const n=(0,r.getContainingView)(e),o=(0,r.getSession)(e),{assemblyManager:s}=o,{features:i}=e,a=s.get(n.assemblyNames[0]);return a?(0,u.jsx)(m,{model:e,exportSVG:t,children:i?.map((t=>{const s=t.get("ALT");return s?.map((s=>(0,u.jsx)(f,{session:o,feature:t,alt:s,view:n,model:e,assembly:a},`${t.id()}-${s}`)))??(0,u.jsx)(f,{session:o,feature:t,view:n,model:e,assembly:a},t.id())}))}):null}))}}]);
//# sourceMappingURL=4345.1ac65791.chunk.js.map