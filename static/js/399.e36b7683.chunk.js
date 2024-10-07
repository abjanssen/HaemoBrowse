"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[399,8341,722,5484,7865,246,2627,5008],{48927:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(7552),a=r(29499),o=r(49823),i=r(68446),l=r(42489),s=r(36422),c=r(85676),d=r(76157),m=r(13476),u=r(99546),h=r(75785),p=r(67314),f=r(1343),v=r(93117),g=r(61723),w=r(31892),b=r(17307),k=r(9469);function E({model:e}){const{faceted:t}=e,[r,a]=(0,n.useState)(null),{showOptions:i,showFilters:l,showSparse:s,useShoppingCart:c}=t;return n.createElement(n.Fragment,null,n.createElement(p.Ay,{container:!0,spacing:4,alignItems:"center"},n.createElement(p.Ay,{item:!0},n.createElement(f.A,{label:"Search...",value:t.filterText,onChange:e=>{t.setFilterText(e.target.value)},InputProps:{endAdornment:n.createElement(v.A,{position:"end"},n.createElement(g.A,{onClick:()=>{t.setFilterText("")}},n.createElement(w.A,null)))}})),n.createElement(p.Ay,{item:!0},n.createElement(g.A,{onClick:e=>{a(e.currentTarget)}},n.createElement(b.A,null))),n.createElement(p.Ay,{item:!0},n.createElement(k.A,{model:e}))),n.createElement(o.Menu,{anchorEl:r,open:!!r,onClose:()=>{a(null)},onMenuItemClick:(e,t)=>{t(),a(null)},menuItems:[{label:"Add tracks to selection instead of turning them on/off",onClick:()=>{t.setUseShoppingCart(!c)},type:"checkbox",checked:c},{label:"Show sparse metadata columns",onClick:()=>{t.setShowSparse(!s)},checked:s,type:"checkbox"},{label:"Show facet filters",onClick:()=>{t.setShowFilters(!l)},checked:l,type:"checkbox"},{label:"Show extra table options",onClick:()=>{t.setShowOptions(!i)},checked:i,type:"checkbox"}]}))}var A=r(89003),y=r(48171),C=r(36715),S=r(98360),x=r(16217),M=r(374);const T=(0,h.n9)()((e=>({facet:{margin:0,marginLeft:e.spacing(2)},select:{marginBottom:e.spacing(2)}})));function R({onClick:e}){return n.createElement(A.A,{title:"Clear selection on this facet filter"},n.createElement(g.A,{onClick:()=>{e()},size:"small"},n.createElement(w.A,null)))}function H({visible:e,onClick:t}){return n.createElement(A.A,{title:"Minimize/expand this facet filter"},n.createElement(g.A,{onClick:()=>{t()},size:"small"},e?n.createElement(x.A,null):n.createElement(M.A,null)))}const L=(0,i.observer)((function({column:e,vals:t,model:r}){const{classes:a}=T(),[o,i]=(0,n.useState)(!0),{faceted:l}=r,{filters:s}=l,{field:c}=e;return n.createElement(y.A,{className:a.facet,fullWidth:!0},n.createElement("div",null,n.createElement(C.A,{component:"span"},c),n.createElement(R,{onClick:()=>{l.setFilter(c,[])}}),n.createElement(H,{visible:o,onClick:()=>{i(!o)}})),o?n.createElement(S.A,{multiple:!0,native:!0,className:a.select,value:s.get(e.field)||[],onChange:t=>{l.setFilter(e.field,[...t.target.options].filter((e=>e.selected)).map((e=>e.value)))}},t.sort(((e,t)=>e[0].localeCompare(t[0]))).map((([e,t])=>n.createElement("option",{key:e,value:e},(0,u.coarseStripHTML)(e)," (",t,")")))):null)}));var N=r(6842);const W=(0,i.observer)((function({rows:e,columns:t,model:r}){const{faceted:a}=r,{filters:o}=a,i=t.slice(1),l=new Map(i.map((e=>[e.field,new Map]))),s=a.filters.keys(),c=i.map((e=>e.field)),d=new Set;for(const e of s)o.get(e)?.length&&d.add(e);for(const e of c)d.add(e);let m=e;for(const e of d){const t=l.get(e);for(const r of m){const n=(0,N.a)(e,r),a=t.get(n);n&&(void 0===a?t.set(n,1):t.set(n,a+1))}const r=o.get(e)?.length?new Set(o.get(e)):void 0;m=m.filter((t=>void 0===r||r.has((0,N.a)(e,t))))}return n.createElement("div",null,i.map((e=>n.createElement(L,{key:e.field,vals:[...l.get(e.field)],column:e,model:r}))))}));var $=r(48408);const F=(0,h.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},resizeHandle:{marginLeft:5,background:"grey",width:5}}),P=.75,D=(0,i.observer)((function({model:e}){const{classes:t}=F(),{view:r,selection:a,shownTrackIds:i,faceted:h}=e,{rows:p,panelWidth:f,showFilters:v,useShoppingCart:g,showOptions:w,filteredRows:b,filteredNonMetadataKeys:k,filteredMetadataKeys:A,visible:y}=h,{pluginManager:C}=(0,u.getEnv)(e),[S,x]=(0,n.useState)({name:(0,u.measureGridWidth)(p.map((e=>e.name)),{maxWidth:500,stripHTML:!0})+15,...Object.fromEntries(k.filter((e=>y[e])).map((e=>[e,(0,u.measureGridWidth)(p.map((t=>t[e])),{maxWidth:400,stripHTML:!0})]))),...Object.fromEntries(A.filter((e=>y[`metadata.${e}`])).map((e=>[`metadata.${e}`,(0,u.measureGridWidth)(p.map((t=>t.metadata[e])),{maxWidth:400,stripHTML:!0})])))}),M=[{field:"name",hideable:!1,renderCell:r=>{const{value:a,row:o}=r,{id:i,conf:l}=o;return n.createElement("div",{className:t.cell},n.createElement(m.A,{html:a}),n.createElement($.A,{id:i,conf:l,trackId:i,model:e}))},width:S.name??100},...k.map((e=>({field:e,width:S[e]??100,renderCell:e=>{const r=e.value;return r?n.createElement(m.A,{className:t.cell,html:r}):""}}))),...A.map((e=>({field:`metadata.${e}`,headerName:["name",...k].includes(e)?`${e} (from metadata)`:e,width:S[`metadata.${e}`]??100,valueGetter:(t,r)=>`${r.metadata[e]??""}`,renderCell:e=>{const r=e.value;return r?n.createElement(m.A,{className:t.cell,html:r}):""}})))];return n.createElement(n.Fragment,null,n.createElement(E,{model:e}),n.createElement("div",{style:{display:"flex",overflow:"hidden",height:window.innerHeight*P,width:window.innerWidth*P}},n.createElement("div",{style:{height:window.innerHeight*P,width:window.innerWidth*P-(v?f:0)}},n.createElement(c.z,{rows:b,onColumnWidthChange:e=>{x({...S,[e.colDef.field]:e.width})},columnVisibilityModel:y,onColumnVisibilityModelChange:e=>{h.setVisible(e)},columnHeaderHeight:35,checkboxSelection:!0,disableRowSelectionOnClick:!0,keepNonExistentRowsSelected:!0,onRowSelectionModelChange:t=>{if(g){const r=(0,s.getRoot)(e),n=C.pluggableConfigSchemaType("track");e.setSelection(t.map((e=>(0,s.resolveIdentifier)(n,r,e))))}else{const n=i,a=new Set(t);(0,l.transaction)((()=>{[...n].filter((e=>!a.has(e))).map((e=>r.hideTrack(e))),[...a].filter((e=>!n.has(e))).map((t=>{r.showTrack(t),e.addToRecentlyUsed(t)}))}))}},rowSelectionModel:g?a.map((e=>e.trackId)):[...i],slots:{toolbar:w?d.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:M,rowHeight:25})),v?n.createElement(n.Fragment,null,n.createElement(o.ResizeHandle,{vertical:!0,onDrag:e=>h.setPanelWidth(f-e),className:t.resizeHandle}),n.createElement("div",{style:{width:f,overflow:"auto"}},n.createElement(W,{model:e,rows:p,columns:M}))):null))})),I=(0,i.observer)((function(e){const{handleClose:t}=e;return n.createElement(o.Dialog,{open:!0,onClose:t,maxWidth:"xl",title:"Faceted track selector"},n.createElement(a.A,null,n.createElement(D,e)))}))},59705:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(7552),a=r(93878),o=r(70799),i=r(64761),l=r(51148),s=r(60129),c=r(4785),d=r(15622),m=r(58520),u=r(72489),h=r(69500);const p=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,f=i.i7`
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
`,v="string"!=typeof p?i.AH`
        animation: ${p} 1.4s linear infinite;
      `:null,g="string"!=typeof f?i.AH`
        animation: ${f} 1.4s ease-in-out infinite;
      `:null,w=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.A)(r.color)}`]]}})((0,s.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:v||{animation:`${p} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,m.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),b=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),k=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,d.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,s.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:g||{animation:`${f} 1.4s ease-in-out infinite`}}]})))),E=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:l=!1,size:s=40,style:m,thickness:p=3.6,value:f=0,variant:v="indeterminate",...g}=r,E={...r,color:i,disableShrink:l,size:s,thickness:p,value:f,variant:v},A=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,i={root:["root",r,`color${(0,d.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(r)}`,a&&"circleDisableShrink"]};return(0,o.A)(i,u.b,t)})(E),y={},C={},S={};if("determinate"===v){const e=2*Math.PI*((44-p)/2);y.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(f),y.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,h.jsx)(w,{className:(0,a.A)(A.root,n),style:{width:s,height:s,...C,...m},ownerState:E,ref:t,role:"progressbar",...S,...g,children:(0,h.jsx)(b,{className:A.svg,ownerState:E,viewBox:"22 22 44 44",children:(0,h.jsx)(k,{className:A.circle,style:y,ownerState:E,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>i,b:()=>o});var n=r(33761),a=r(85693);function o(e){return(0,a.Ay)("MuiCircularProgress",e)}const i=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(e,t,r)=>{r.d(t,{x:()=>d});var n=r(7552),a=r(29527),o=r(89887),i=r(99305),l=r(28325),s=r(69500);function c(e){return e.substring(2).toLowerCase()}function d(e){const{children:t,disableReactTree:r=!1,mouseEvent:d="onClick",onClickAway:m,touchEvent:u="onTouchEnd"}=e,h=n.useRef(!1),p=n.useRef(null),f=n.useRef(!1),v=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{f.current=!0}),0),()=>{f.current=!1})),[]);const g=(0,a.A)((0,l.A)(t),p),w=(0,o.A)((e=>{const t=v.current;v.current=!1;const n=(0,i.A)(p.current);if(!f.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(h.current)return void(h.current=!1);let a;a=e.composedPath?e.composedPath().includes(p.current):!n.documentElement.contains(e.target)||p.current.contains(e.target),a||!r&&t||m(e)})),b=e=>r=>{v.current=!0;const n=t.props[e];n&&n(r)},k={ref:g};return!1!==u&&(k[u]=b(u)),n.useEffect((()=>{if(!1!==u){const e=c(u),t=(0,i.A)(p.current),r=()=>{h.current=!0};return t.addEventListener(e,w),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,w),t.removeEventListener("touchmove",r)}}}),[w,u]),!1!==d&&(k[d]=b(d)),n.useEffect((()=>{if(!1!==d){const e=c(d),t=(0,i.A)(p.current);return t.addEventListener(e,w),()=>{t.removeEventListener(e,w)}}}),[w,d]),(0,s.jsx)(n.Fragment,{children:n.cloneElement(t,k)})}},17515:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(7552),a=r(93878),o=r(70799),i=r(51148),l=r(60129),s=r(4785),c=r(89663),d=r(69500);const m=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((0,l.A)((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]})))),u=n.forwardRef((function(e,t){const r=(0,s.b)({props:e,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:l=!1,variant:u="regular",...h}=r,p={...r,component:i,disableGutters:l,variant:u},f=(e=>{const{classes:t,disableGutters:r,variant:n}=e,a={root:["root",!r&&"gutters",n]};return(0,o.A)(a,c.U,t)})(p);return(0,d.jsx)(m,{as:i,className:(0,a.A)(f.root,n),ref:t,ownerState:p,...h})}))},89663:(e,t,r)=>{r.d(t,{A:()=>i,U:()=>o});var n=r(33761),a=r(85693);function o(e){return(0,a.Ay)("MuiToolbar",e)}const i=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=399.e36b7683.chunk.js.map