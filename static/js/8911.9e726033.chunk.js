"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8911],{99105:(e,t,o)=>{var a=o(92120);t.A=void 0;var r=a(o(33380)),s=o(69500);t.A=(0,r.default)((0,s.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},1773:(e,t,o)=>{o.d(t,{A:()=>u});var a=o(7552),r=o(93878),s=o(70799),n=o(51148),i=o(4785),d=o(943),l=o(50885),c=o(69500);const p=(0,n.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),u=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCard"}),{className:a,raised:n=!1,...d}=o,u={...o,raised:n},m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},l.T,t)})(u);return(0,c.jsx)(p,{className:(0,r.A)(m.root,a),elevation:n?8:void 0,ref:t,ownerState:u,...d})}))},50885:(e,t,o)=>{o.d(t,{A:()=>n,T:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiCard",e)}const n=(0,a.A)("MuiCard",["root"])},38815:(e,t,o)=>{o.d(t,{A:()=>m});var a=o(7552),r=o(93878),s=o(70799),n=o(51148),i=o(4785),d=o(61547),l=o(69500);const c=(0,n.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:r}=o;return[t.root,a&&t.media,r&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),p=["video","audio","picture","iframe","img"],u=["picture","img"],m=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCardMedia"}),{children:a,className:n,component:m="div",image:g,src:v,style:b,...A}=o,h=p.includes(m),f=!h&&g?{backgroundImage:`url("${g}")`,...b}:b,x={...o,component:m,isMediaComponent:h,isImageComponent:u.includes(m)},y=(e=>{const{classes:t,isMediaComponent:o,isImageComponent:a}=e,r={root:["root",o&&"media",a&&"img"]};return(0,s.A)(r,d.R,t)})(x);return(0,l.jsx)(c,{className:(0,r.A)(y.root,n),as:m,role:!h&&g?"img":void 0,ref:t,style:f,ownerState:x,src:h?g||v:void 0,...A,children:a})}))},61547:(e,t,o)=>{o.d(t,{A:()=>n,R:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiCardMedia",e)}const n=(0,a.A)("MuiCardMedia",["root","media","img"])},75653:(e,t,o)=>{o.d(t,{A:()=>f});var a=o(7552),r=o(93878),s=o(85693),n=o(70799),i=o(33283),d=o(82081),l=o(24959),c=o(72861),p=o(69500);const u=(0,c.A)(),m=(0,l.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,i.A)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),g=e=>(0,d.A)({props:e,name:"MuiContainer",defaultTheme:u});var v=o(15622),b=o(51148),A=o(31049);const h=function(e={}){const{createStyledComponent:t=m,useThemeProps:o=g,componentName:d="MuiContainer"}=e,l=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const a=o,r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),c=a.forwardRef((function(e,t){const a=o(e),{className:c,component:u="div",disableGutters:m=!1,fixed:g=!1,maxWidth:v="lg",classes:b,...A}=a,h={...a,component:u,disableGutters:m,fixed:g,maxWidth:v},f=((e,t)=>{const{classes:o,fixed:a,disableGutters:r,maxWidth:d}=e,l={root:["root",d&&`maxWidth${(0,i.A)(String(d))}`,a&&"fixed",r&&"disableGutters"]};return(0,n.A)(l,(e=>(0,s.Ay)(t,e)),o)})(h,d);return(0,p.jsx)(l,{as:u,ownerState:h,className:(0,r.A)(f.root,c),ref:t,...A})}));return c}({createStyledComponent:(0,b.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,v.A)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,A.A)({props:e,name:"MuiContainer"})}),f=h},45331:(e,t,o)=>{o.d(t,{Ay:()=>f});var a=o(7552),r=o(93878),s=o(70799),n=o(23879),i=o(51148),d=o(60129),l=o(4785),c=o(3755),p=o(51584),u=o(57406),m=o(74823),g=o(2451),v=o(77999),b=o(69500);const A=(0,i.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.hasSecondaryAction&&t.secondaryAction]}})((0,d.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${g.A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),h=(0,i.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),f=a.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiListItem"}),{alignItems:i="center",children:d,className:g,component:f,components:x={},componentsProps:y={},ContainerComponent:S="li",ContainerProps:{className:C,...w}={},dense:I=!1,disableGutters:M=!1,disablePadding:R=!1,divider:k=!1,secondaryAction:G,slotProps:$={},slots:L={},...j}=o,N=a.useContext(u.A),P=a.useMemo((()=>({dense:I||N.dense||!1,alignItems:i,disableGutters:M})),[i,N.dense,I,M]),W=a.useRef(null),O=a.Children.toArray(d),T=O.length&&(0,c.A)(O[O.length-1],["ListItemSecondaryAction"]),B={...o,alignItems:i,dense:P.dense,disableGutters:M,disablePadding:R,divider:k,hasSecondaryAction:T},F=(e=>{const{alignItems:t,classes:o,dense:a,disableGutters:r,disablePadding:n,divider:i,hasSecondaryAction:d}=e,l={root:["root",a&&"dense",!r&&"gutters",!n&&"padding",i&&"divider","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction"],container:["container"]};return(0,s.A)(l,m._,o)})(B),z=(0,p.A)(W,t),V=L.root||x.Root||A,_=$.root||y.root||{},D={className:(0,r.A)(F.root,_.className,g),...j};let X=f||"li";return T?(X=D.component||f?X:"div","li"===S&&("li"===X?X="div":"li"===D.component&&(D.component="div")),(0,b.jsx)(u.A.Provider,{value:P,children:(0,b.jsxs)(h,{as:S,className:(0,r.A)(F.container,C),ref:z,ownerState:B,...w,children:[(0,b.jsx)(V,{..._,...!(0,n.A)(V)&&{as:X,ownerState:{...B,..._.ownerState}},...D,children:O}),O.pop()]})})):(0,b.jsx)(u.A.Provider,{value:P,children:(0,b.jsxs)(V,{..._,as:X,ref:z,...!(0,n.A)(V)&&{ownerState:{...B,..._.ownerState}},...D,children:[O,G&&(0,b.jsx)(v.A,{children:G})]})})}))},74823:(e,t,o)=>{o.d(t,{A:()=>n,_:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItem",e)}const n=(0,a.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"])},70087:(e,t,o)=>{o.d(t,{A:()=>h});var a=o(7552),r=o(93878),s=o(70799),n=o(72639),i=o(51148),d=o(60129),l=o(4785),c=o(55270),p=o(48054),u=o(82910),m=o(51584),g=o(57406),v=o(2451),b=o(69500);const A=(0,i.Ay)(p.A,{shouldForwardProp:e=>(0,c.A)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((0,d.A)((({theme:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,n.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,n.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.A.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,n.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,n.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]})))),h=a.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:i=!1,component:d="div",children:c,dense:p=!1,disableGutters:h=!1,divider:f=!1,focusVisibleClassName:x,selected:y=!1,className:S,...C}=o,w=a.useContext(g.A),I=a.useMemo((()=>({dense:p||w.dense||!1,alignItems:n,disableGutters:h})),[n,w.dense,p,h]),M=a.useRef(null);(0,u.A)((()=>{i&&M.current&&M.current.focus()}),[i]);const R={...o,alignItems:n,dense:I.dense,disableGutters:h,divider:f,selected:y},k=(e=>{const{alignItems:t,classes:o,dense:a,disabled:r,disableGutters:n,divider:i,selected:d}=e,l={root:["root",a&&"dense",!n&&"gutters",i&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",d&&"selected"]},c=(0,s.A)(l,v.Y,o);return{...o,...c}})(R),G=(0,m.A)(M,t);return(0,b.jsx)(g.A.Provider,{value:I,children:(0,b.jsx)(A,{ref:G,href:C.href||C.to,component:(C.href||C.to)&&"div"===d?"button":d,focusVisibleClassName:(0,r.A)(k.focusVisible,x),ownerState:R,className:(0,r.A)(k.root,S),...C,classes:k,children:c})})}))},2451:(e,t,o)=>{o.d(t,{A:()=>n,Y:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItemButton",e)}const n=(0,a.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},77999:(e,t,o)=>{o.d(t,{A:()=>m});var a=o(7552),r=o(93878),s=o(70799),n=o(51148),i=o(4785),d=o(57406),l=o(87739),c=o(69500);const p=(0,n.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),u=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...u}=o,m=a.useContext(d.A),g={...o,disableGutters:m.disableGutters},v=(e=>{const{disableGutters:t,classes:o}=e,a={root:["root",t&&"disableGutters"]};return(0,s.A)(a,l.g,o)})(g);return(0,c.jsx)(p,{className:(0,r.A)(v.root,n),ownerState:g,ref:t,...u})}));u.muiName="ListItemSecondaryAction";const m=u},87739:(e,t,o)=>{o.d(t,{A:()=>n,g:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItemSecondaryAction",e)}const n=(0,a.A)("MuiListItemSecondaryAction",["root","disableGutters"])},24959:(e,t,o)=>{o.d(t,{A:()=>a});const a=(0,o(15543).Ay)()}}]);
//# sourceMappingURL=8911.9e726033.chunk.js.map