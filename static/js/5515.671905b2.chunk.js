"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5515],{6500:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(74893),r=o(69500);const s=(0,a.A)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp")},99829:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(74893),r=o(69500);const s=(0,a.A)((0,r.jsx)("path",{d:"m14 7-5 5 5 5z"}),"ArrowLeft")},75653:(e,t,o)=>{o.d(t,{A:()=>x});var a=o(7552),r=o(93878),s=o(85693),n=o(70799),i=o(33283),d=o(82081),c=o(24959),l=o(72861),u=o(69500);const p=(0,l.A)(),m=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,i.A)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),h=e=>(0,d.A)({props:e,name:"MuiContainer",defaultTheme:p});var A=o(15622),v=o(51148),b=o(31049);const f=function(e={}){const{createStyledComponent:t=m,useThemeProps:o=h,componentName:d="MuiContainer"}=e,c=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const a=o,r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),l=a.forwardRef((function(e,t){const a=o(e),{className:l,component:p="div",disableGutters:m=!1,fixed:h=!1,maxWidth:A="lg",classes:v,...b}=a,f={...a,component:p,disableGutters:m,fixed:h,maxWidth:A},x=((e,t)=>{const{classes:o,fixed:a,disableGutters:r,maxWidth:d}=e,c={root:["root",d&&`maxWidth${(0,i.A)(String(d))}`,a&&"fixed",r&&"disableGutters"]};return(0,n.A)(c,(e=>(0,s.Ay)(t,e)),o)})(f,d);return(0,u.jsx)(c,{as:p,ownerState:f,className:(0,r.A)(x.root,l),ref:t,...b})}));return l}({createStyledComponent:(0,v.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,A.A)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.A)({props:e,name:"MuiContainer"})}),x=f},33248:(e,t,o)=>{o.d(t,{A:()=>$});var a=o(7552),r=o(93878),s=o(70799),n=o(72639),i=o(15110),d=o(74893),c=o(69500);const l=(0,d.A)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=(0,d.A)((0,c.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var p=o(55270),m=o(51148),h=o(60129);const A=(0,m.Ay)("span",{shouldForwardProp:p.A})({position:"relative",display:"flex"}),v=(0,m.Ay)(l)({transform:"scale(1)"}),b=(0,m.Ay)(u)((0,h.A)((({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})))),f=function(e){const{checked:t=!1,classes:o={},fontSize:a}=e,r={...e,checked:t};return(0,c.jsxs)(A,{className:o.root,ownerState:r,children:[(0,c.jsx)(v,{fontSize:a,className:o.background,ownerState:r}),(0,c.jsx)(b,{fontSize:a,className:o.dot,ownerState:r})]})};var x=o(15622),g=o(4402),k=o(33960),S=o(39006),y=o(38127),C=o(58520),w=o(4785);const R=(0,m.Ay)(i.A,{shouldForwardProp:e=>(0,p.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"medium"!==o.size&&t[`size${(0,x.A)(o.size)}`],t[`color${(0,x.A)(o.color)}`]]}})((0,h.A)((({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${y.A.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,n.X4)(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter((0,C.A)()).map((([t])=>({props:{color:t,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,n.X4)(e.palette[t].main,e.palette.action.hoverOpacity)}}}))),...Object.entries(e.palette).filter((0,C.A)()).map((([t])=>({props:{color:t,disabled:!1},style:{[`&.${y.A.checked}`]:{color:(e.vars||e).palette[t].main}}}))),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})))),z=(0,c.jsx)(f,{checked:!0}),j=(0,c.jsx)(f,{}),$=a.forwardRef((function(e,t){const o=(0,w.b)({props:e,name:"MuiRadio"}),{checked:n,checkedIcon:i=z,color:d="primary",icon:l=j,name:u,onChange:p,size:m="medium",className:h,disabled:A,disableRipple:v=!1,...b}=o,f=(0,k.A)();let C=A;f&&void 0===C&&(C=f.disabled),C??=!1;const $={...o,disabled:C,disableRipple:v,color:d,size:m},W=(e=>{const{classes:t,color:o,size:a}=e,r={root:["root",`color${(0,x.A)(o)}`,"medium"!==a&&`size${(0,x.A)(a)}`]};return{...t,...(0,s.A)(r,y.q,t)}})($),M=(0,S.A)();let G=n;const N=(0,g.A)(p,M&&M.onChange);let O=u;var P,T;return M&&(void 0===G&&(P=M.value,G="object"==typeof(T=o.value)&&null!==T?P===T:String(P)===String(T)),void 0===O&&(O=M.name)),(0,c.jsx)(R,{type:"radio",icon:a.cloneElement(l,{fontSize:j.props.fontSize??m}),checkedIcon:a.cloneElement(i,{fontSize:z.props.fontSize??m}),disabled:C,ownerState:$,classes:W,name:O,checked:G,onChange:N,ref:t,className:(0,r.A)(W.root,h),...b})}))},38127:(e,t,o)=>{o.d(t,{A:()=>n,q:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiRadio",e)}const n=(0,a.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,o)=>{o.d(t,{A:()=>m});var a=o(7552),r=o(93878),s=o(70799),n=o(83867),i=o(87625),d=o(51584),c=o(77259),l=o(76258),u=o(89456),p=o(69500);const m=a.forwardRef((function(e,t){const{actions:o,children:m,className:h,defaultValue:A,name:v,onChange:b,value:f,...x}=e,g=a.useRef(null),k=(e=>{const{classes:t,row:o,error:a}=e,r={root:["root",o&&"row",a&&"error"]};return(0,s.A)(r,i.B,t)})(e),[S,y]=(0,c.A)({controlled:f,default:A,name:"RadioGroup"});a.useImperativeHandle(o,(()=>({focus:()=>{let e=g.current.querySelector("input:not(:disabled):checked");e||(e=g.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const C=(0,d.A)(t,g),w=(0,u.A)(v),R=a.useMemo((()=>({name:w,onChange(e){y(e.target.value),b&&b(e,e.target.value)},value:S})),[w,b,y,S]);return(0,p.jsx)(l.A.Provider,{value:R,children:(0,p.jsx)(n.A,{role:"radiogroup",ref:C,className:(0,r.A)(k.root,h),...x,children:m})})}))},76258:(e,t,o)=>{o.d(t,{A:()=>a});const a=o(7552).createContext(void 0)},87625:(e,t,o)=>{o.d(t,{A:()=>n,B:()=>s});var a=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiRadioGroup",e)}const n=(0,a.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,o)=>{o.d(t,{A:()=>s});var a=o(7552),r=o(76258);function s(){return a.useContext(r.A)}},24959:(e,t,o)=>{o.d(t,{A:()=>a});const a=(0,o(15543).Ay)()}}]);
//# sourceMappingURL=5515.671905b2.chunk.js.map