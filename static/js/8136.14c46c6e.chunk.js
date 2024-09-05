"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8136],{28136:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(7552),r=n(68446),o=n(33371),s=n(32808),i=n(29499),l=n(58507),c=n(5401),d=n(75785),f=n(99546),p=n(49823),w=n(36422);const h=(0,d.n9)()({block:{display:"block"}});function m(e){return e.map((({id:e,displays:t,...n})=>({...n,displays:t.map((({id:e,...t})=>t))})))}function b({checked:e,label:t,onChange:n}){const{classes:r}=h();return a.createElement(o.A,{className:r.block,control:a.createElement(s.A,{checked:e,onChange:n}),label:t})}const k=(0,r.observer)((function({model:e,handleClose:t,f1:n,f2:r}){const[o,s]=(0,a.useState)(!0),[d,h]=(0,a.useState)(!0);return a.createElement(p.Dialog,{open:!0,onClose:t,title:"Breakpoint split view options"},a.createElement(i.A,null,a.createElement(b,{checked:o,onChange:e=>{s(e.target.checked)},label:"Copy tracks into the new view"}),a.createElement(b,{checked:d,onChange:e=>{h(e.target.checked)},label:"Mirror tracks vertically in vertically stacked view"})),a.createElement(l.A,null,a.createElement(c.A,{onClick:()=>{const{view:a}=e,o=(0,f.getSession)(e);try{const e=function({f1:e,f2:t,view:n}){const{assemblyName:a}=n.displayedRegions[0],{assemblyManager:r}=(0,f.getSession)(n),o=r.get(a);if(!o)throw new Error(`assembly ${a} not found`);if(!o.regions)throw new Error(`assembly ${a} regions not loaded`);const s=o.regions.find((t=>t.refName===e.refName)),i=o.regions.find((e=>e.refName===t.refName));if(!s||!i)throw new Error("unable to find the refName for the top or bottom of the breakpoint view");const l=[{...s},{...s}],c=[{...i},{...i}],d=1===e.strand?e.end:e.start,p=1===t.strand?t.start:t.end;return l[0].end=d,l[1].start=d+1,c[0].end=p,c[1].start=p+1,{type:"BreakpointSplitView",views:[{type:"LinearGenomeView",displayedRegions:l,hideHeader:!0,bpPerPx:10,offsetPx:(s.start+d)/10},{type:"LinearGenomeView",displayedRegions:c,hideHeader:!0,bpPerPx:10,offsetPx:(i.start+p)/10}],displayName:"breakend split detail"}}({view:a,f1:n,f2:r}),t=e.views,s=t[0],i=t[1],l=(0,w.getSnapshot)(a.tracks);o.addView("BreakpointSplitView",{...e,views:[{...s,tracks:m(l),offsetPx:s.offsetPx-a.width/2+100},{...i,tracks:m(d?[...l].reverse():l),offsetPx:i.offsetPx-a.width/2+100}]})}catch(e){console.error(e),o.notify(`${e}`)}t()},variant:"contained",color:"primary",autoFocus:!0},"OK"),a.createElement(c.A,{onClick:()=>{t()},color:"secondary",variant:"contained"},"Cancel")))}))}}]);
//# sourceMappingURL=8136.14c46c6e.chunk.js.map