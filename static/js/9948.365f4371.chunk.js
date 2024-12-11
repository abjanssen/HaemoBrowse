"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9948],{84885:(t,e,r)=>{r.d(e,{A:()=>y});var n=r(7552),o=r(93878),a=r(43583),i=r(70799),s=r(1045);var l=r(51148),c=r(84893),u=r(58520),d=r(4785),f=r(15622),p=r(47839),g=r(69500);const h=(0,l.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),m=(0,l.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.badge,e[r.variant],e[`anchorOrigin${(0,f.A)(r.anchorOrigin.vertical)}${(0,f.A)(r.anchorOrigin.horizontal)}${(0,f.A)(r.overlap)}`],"default"!==r.color&&e[`color${(0,f.A)(r.color)}`],r.invisible&&e.invisible]}})((0,c.A)((({theme:t})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen}),variants:[...Object.entries(t.palette).filter((0,u.A)(["contrastText"])).map((([e])=>({props:{color:e},style:{backgroundColor:(t.vars||t).palette[e].main,color:(t.vars||t).palette[e].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:t})=>"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:t})=>"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:t})=>"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:t})=>"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:t})=>"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:t})=>"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:t})=>"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:t})=>"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}]}))));function v(t){return{vertical:t?.vertical??"top",horizontal:t?.horizontal??"right"}}const y=n.forwardRef((function(t,e){const r=(0,d.b)({props:t,name:"MuiBadge"}),{anchorOrigin:n,className:l,classes:c,component:u,components:y={},componentsProps:b={},children:S,overlap:w="rectangular",color:D="default",invisible:x=!1,max:O=99,badgeContent:A,slots:M,slotProps:P,showZero:C=!1,variant:T="standard",...k}=r,{badgeContent:E,invisible:N,max:j,displayValue:R}=function(t){const{badgeContent:e,invisible:r=!1,max:n=99,showZero:o=!1}=t,i=(0,a.A)({badgeContent:e,max:n});let s=r;!1!==r||0!==e||o||(s=!0);const{badgeContent:l,max:c=n}=s?i:t;return{badgeContent:l,invisible:s,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:O,invisible:x,badgeContent:A,showZero:C}),L=(0,a.A)({anchorOrigin:v(n),color:D,overlap:w,variant:T,badgeContent:A}),X=N||null==E&&"dot"!==T,{color:Y=D,overlap:W=w,anchorOrigin:$,variant:_=T}=X?L:r,B=v($),z="dot"!==_?R:void 0,I={...r,badgeContent:E,invisible:X,max:j,displayValue:z,showZero:C,anchorOrigin:B,color:Y,overlap:W,variant:_},H=(t=>{const{color:e,anchorOrigin:r,invisible:n,overlap:o,variant:a,classes:s={}}=t,l={root:["root"],badge:["badge",a,n&&"invisible",`anchorOrigin${(0,f.A)(r.vertical)}${(0,f.A)(r.horizontal)}`,`anchorOrigin${(0,f.A)(r.vertical)}${(0,f.A)(r.horizontal)}${(0,f.A)(o)}`,`overlap${(0,f.A)(o)}`,"default"!==e&&`color${(0,f.A)(e)}`]};return(0,i.A)(l,p.w,s)})(I),U=M?.root??y.Root??h,V=M?.badge??y.Badge??m,G=P?.root??b.root,F=P?.badge??b.badge,Z=(0,s.A)({elementType:U,externalSlotProps:G,externalForwardedProps:k,additionalProps:{ref:e,as:u},ownerState:I,className:(0,o.A)(G?.className,H.root,l)}),q=(0,s.A)({elementType:V,externalSlotProps:F,ownerState:I,className:(0,o.A)(H.badge,F?.className)});return(0,g.jsxs)(U,{...Z,children:[S,(0,g.jsx)(V,{...q,children:z})]})}))},47839:(t,e,r)=>{r.d(e,{A:()=>i,w:()=>a});var n=r(33761),o=r(85693);function a(t){return(0,o.Ay)("MuiBadge",t)}const i=(0,n.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},59705:(t,e,r)=>{r.d(e,{A:()=>w});var n=r(7552),o=r(93878),a=r(70799),i=r(64761),s=r(51148),l=r(84893),c=r(4785),u=r(15622),d=r(58520),f=r(72489),p=r(69500);const g=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=i.i7`
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
`,m="string"!=typeof g?i.AH`
        animation: ${g} 1.4s linear infinite;
      `:null,v="string"!=typeof h?i.AH`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,y=(0,s.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`color${(0,u.A)(r.color)}`]]}})((0,l.A)((({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:m||{animation:`${g} 1.4s linear infinite`}},...Object.entries(t.palette).filter((0,d.A)()).map((([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})))]})))),b=(0,s.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),S=(0,s.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.circle,e[`circle${(0,u.A)(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})((0,l.A)((({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink,style:v||{animation:`${h} 1.4s ease-in-out infinite`}}]})))),w=n.forwardRef((function(t,e){const r=(0,c.b)({props:t,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:s=!1,size:l=40,style:d,thickness:g=3.6,value:h=0,variant:m="indeterminate",...v}=r,w={...r,color:i,disableShrink:s,size:l,thickness:g,value:h,variant:m},D=(t=>{const{classes:e,variant:r,color:n,disableShrink:o}=t,i={root:["root",r,`color${(0,u.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,u.A)(r)}`,o&&"circleDisableShrink"]};return(0,a.A)(i,f.b,e)})(w),x={},O={},A={};if("determinate"===m){const t=2*Math.PI*((44-g)/2);x.strokeDasharray=t.toFixed(3),A["aria-valuenow"]=Math.round(h),x.strokeDashoffset=`${((100-h)/100*t).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,p.jsx)(y,{className:(0,o.A)(D.root,n),style:{width:l,height:l,...O,...d},ownerState:w,ref:e,role:"progressbar",...A,...v,children:(0,p.jsx)(b,{className:D.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,p.jsx)(S,{className:D.circle,style:x,ownerState:w,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})})}))},72489:(t,e,r)=>{r.d(e,{A:()=>i,b:()=>a});var n=r(33761),o=r(85693);function a(t){return(0,o.Ay)("MuiCircularProgress",t)}const i=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(t,e,r)=>{r.d(e,{x:()=>c});var n=r(7552),o=r(29527),a=r(89887),i=r(99305),s=r(87995);function l(t){return t.substring(2).toLowerCase()}function c(t){const{children:e,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=t,f=n.useRef(!1),p=n.useRef(null),g=n.useRef(!1),h=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{g.current=!0}),0),()=>{g.current=!1})),[]);const m=(0,o.A)((0,s.A)(e),p),v=(0,a.A)((t=>{const e=h.current;h.current=!1;const n=(0,i.A)(p.current);if(!g.current||!p.current||"clientX"in t&&function(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}(t,n))return;if(f.current)return void(f.current=!1);let o;o=t.composedPath?t.composedPath().includes(p.current):!n.documentElement.contains(t.target)||p.current.contains(t.target),o||!r&&e||u(t)})),y=t=>r=>{h.current=!0;const n=e.props[t];n&&n(r)},b={ref:m};return!1!==d&&(b[d]=y(d)),n.useEffect((()=>{if(!1!==d){const t=l(d),e=(0,i.A)(p.current),r=()=>{f.current=!0};return e.addEventListener(t,v),e.addEventListener("touchmove",r),()=>{e.removeEventListener(t,v),e.removeEventListener("touchmove",r)}}}),[v,d]),!1!==c&&(b[c]=y(c)),n.useEffect((()=>{if(!1!==c){const t=l(c),e=(0,i.A)(p.current);return e.addEventListener(t,v),()=>{e.removeEventListener(t,v)}}}),[v,c]),n.cloneElement(e,b)}},17515:(t,e,r)=>{r.d(e,{A:()=>f});var n=r(7552),o=r(93878),a=r(70799),i=r(51148),s=r(84893),l=r(4785),c=r(89663),u=r(69500);const d=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})((0,s.A)((({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]})))),f=n.forwardRef((function(t,e){const r=(0,l.b)({props:t,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:s=!1,variant:f="regular",...p}=r,g={...r,component:i,disableGutters:s,variant:f},h=(t=>{const{classes:e,disableGutters:r,variant:n}=t,o={root:["root",!r&&"gutters",n]};return(0,a.A)(o,c.U,e)})(g);return(0,u.jsx)(d,{as:i,className:(0,o.A)(h.root,n),ref:e,ownerState:g,...p})}))},89663:(t,e,r)=>{r.d(e,{A:()=>i,U:()=>a});var n=r(33761),o=r(85693);function a(t){return(0,o.Ay)("MuiToolbar",t)}const i=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])},48467:(t,e,r)=>{r.d(e,{A:()=>n});const n=(0,r(26587).Ay)()},50599:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var n=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=p(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}(r(7552)),o=f(r(15152)),a=f(r(28485)),i=f(r(2022)),s=r(87477),l=r(40978),c=r(23068),u=f(r(67556)),d=f(r(82292));function f(t){return t&&t.__esModule?t:{default:t}}function p(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(p=function(t){return t?r:e})(t)}function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},g.apply(this,arguments)}function h(t,e,r){return(e=function(t){var e=function(t){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class m extends n.Component{static getDerivedStateFromProps(t,e){let{position:r}=t,{prevPropsPosition:n}=e;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:{...r}})}constructor(t){super(t),h(this,"onDragStart",((t,e)=>{if((0,d.default)("Draggable: onDragStart: %j",e),!1===this.props.onStart(t,(0,l.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})})),h(this,"onDrag",((t,e)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",e);const r=(0,l.createDraggableData)(this,e),n={x:r.x,y:r.y,slackX:0,slackY:0};if(this.props.bounds){const{x:t,y:e}=n;n.x+=this.state.slackX,n.y+=this.state.slackY;const[o,a]=(0,l.getBoundPosition)(this,n.x,n.y);n.x=o,n.y=a,n.slackX=this.state.slackX+(t-n.x),n.slackY=this.state.slackY+(e-n.y),r.x=n.x,r.y=n.y,r.deltaX=n.x-this.state.x,r.deltaY=n.y-this.state.y}if(!1===this.props.onDrag(t,r))return!1;this.setState(n)})),h(this,"onDragStop",((t,e)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(t,(0,l.createDraggableData)(this,e)))return!1;(0,d.default)("Draggable: onDragStop: %j",e);const r={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:t,y:e}=this.props.position;r.x=t,r.y=e}this.setState(r)})),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!==(t=null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current)&&void 0!==t?t:a.default.findDOMNode(this)}render(){const{axis:t,bounds:e,children:r,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:c,defaultClassNameDragged:d,position:f,positionOffset:p,scale:h,...m}=this.props;let v={},y=null;const b=!Boolean(f)||this.state.dragging,S=f||o,w={x:(0,l.canDragX)(this)&&b?this.state.x:S.x,y:(0,l.canDragY)(this)&&b?this.state.y:S.y};this.state.isElementSVG?y=(0,s.createSVGTransform)(w,p):v=(0,s.createCSSTransform)(w,p);const D=(0,i.default)(r.props.className||"",a,{[c]:this.state.dragging,[d]:this.state.dragged});return n.createElement(u.default,g({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(r),{className:D,style:{...r.props.style,...v},transform:y}))}}e.default=m,h(m,"displayName","Draggable"),h(m,"propTypes",{...u.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),h(m,"defaultProps",{...u.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},67556:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=d(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}(r(7552)),o=u(r(15152)),a=u(r(28485)),i=r(87477),s=r(40978),l=r(23068),c=u(r(82292));function u(t){return t&&t.__esModule?t:{default:t}}function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(d=function(t){return t?r:e})(t)}function f(t,e,r){return(e=function(t){var e=function(t){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p={start:"touchstart",move:"touchmove",stop:"touchend"},g={start:"mousedown",move:"mousemove",stop:"mouseup"};let h=g;class m extends n.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;const e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=e;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();const n=(0,i.getTouchIdentifier)(t);this.touchIdentifier=n;const o=(0,s.getControlPosition)(t,n,this);if(null==o)return;const{x:a,y:l}=o,u=(0,s.createCoreData)(this,a,l);(0,c.default)("DraggableCore: handleDragStart: %j",u),(0,c.default)("calling",this.props.onStart),!1!==this.props.onStart(t,u)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(r),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(r,h.move,this.handleDrag),(0,i.addEvent)(r,h.stop,this.handleDragStop))})),f(this,"handleDrag",(t=>{const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:r,y:n}=e;if(Array.isArray(this.props.grid)){let t=r-this.lastX,e=n-this.lastY;if([t,e]=(0,s.snapToGrid)(this.props.grid,t,e),!t&&!e)return;r=this.lastX+t,n=this.lastY+e}const o=(0,s.createCoreData)(this,r,n);if((0,c.default)("DraggableCore: handleDrag: %j",o),!1!==this.props.onDrag(t,o)&&!1!==this.mounted)this.lastX=r,this.lastY=n;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(t){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),f(this,"handleDragStop",(t=>{if(!this.dragging)return;const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:r,y:n}=e;if(Array.isArray(this.props.grid)){let t=r-this.lastX||0,e=n-this.lastY||0;[t,e]=(0,s.snapToGrid)(this.props.grid,t,e),r=this.lastX+t,n=this.lastY+e}const o=(0,s.createCoreData)(this,r,n);if(!1===this.props.onStop(t,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,c.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,h.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,h.stop,this.handleDragStop))})),f(this,"onMouseDown",(t=>(h=g,this.handleDragStart(t)))),f(this,"onMouseUp",(t=>(h=g,this.handleDragStop(t)))),f(this,"onTouchStart",(t=>(h=p,this.handleDragStart(t)))),f(this,"onTouchEnd",(t=>(h=p,this.handleDragStop(t))))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,i.addEvent)(t,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:e}=t;(0,i.removeEvent)(e,g.move,this.handleDrag),(0,i.removeEvent)(e,p.move,this.handleDrag),(0,i.removeEvent)(e,g.stop,this.handleDragStop),(0,i.removeEvent)(e,p.stop,this.handleDragStop),(0,i.removeEvent)(t,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!==(t=this.props)&&void 0!==t&&t.nodeRef?null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current:a.default.findDOMNode(this)}render(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}e.default=m,f(m,"displayName","DraggableCore"),f(m,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),f(m,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},21254:(t,e,r)=>{const{default:n,DraggableCore:o}=r(50599);t.exports=n,t.exports.default=n,t.exports.DraggableCore=o},87477:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.addClassName=c,e.addEvent=function(t,e,r,n){if(!t)return;const o={capture:!0,...n};t.addEventListener?t.addEventListener(e,r,o):t.attachEvent?t.attachEvent("on"+e,r):t["on"+e]=r},e.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e)),t.body&&c(t.body,"react-draggable-transparent-selection")},e.createCSSTransform=function(t,e){const r=l(t,e,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:r}},e.createSVGTransform=function(t,e){return l(t,e,"")},e.getTouch=function(t,e){return t.targetTouches&&(0,n.findInArray)(t.targetTouches,(t=>e===t.identifier))||t.changedTouches&&(0,n.findInArray)(t.changedTouches,(t=>e===t.identifier))},e.getTouchIdentifier=function(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0},e.getTranslation=l,e.innerHeight=function(t){let e=t.clientHeight;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,n.int)(r.paddingTop),e-=(0,n.int)(r.paddingBottom),e},e.innerWidth=function(t){let e=t.clientWidth;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,n.int)(r.paddingLeft),e-=(0,n.int)(r.paddingRight),e},e.matchesSelector=s,e.matchesSelectorAndParentsTo=function(t,e,r){let n=t;do{if(s(n,e))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},e.offsetXYFromParent=function(t,e,r){const n=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-n.left)/r,y:(t.clientY+e.scrollTop-n.top)/r}},e.outerHeight=function(t){let e=t.clientHeight;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,n.int)(r.borderTopWidth),e+=(0,n.int)(r.borderBottomWidth),e},e.outerWidth=function(t){let e=t.clientWidth;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,n.int)(r.borderLeftWidth),e+=(0,n.int)(r.borderRightWidth),e},e.removeClassName=u,e.removeEvent=function(t,e,r,n){if(!t)return;const o={capture:!0,...n};t.removeEventListener?t.removeEventListener(e,r,o):t.detachEvent?t.detachEvent("on"+e,r):t["on"+e]=null},e.removeUserSelectStyles=function(t){if(t)try{if(t.body&&u(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(t){}};var n=r(23068),o=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=a(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var s=o?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,r&&r.set(t,n),n}(r(10534));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(a=function(t){return t?r:e})(t)}let i="";function s(t,e){return i||(i=(0,n.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return(0,n.isFunction)(t[e])}))),!!(0,n.isFunction)(t[i])&&t[i](e)}function l(t,e,r){let{x:n,y:o}=t,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(e){const t="".concat("string"==typeof e.x?e.x:e.x+r),n="".concat("string"==typeof e.y?e.y:e.y+r);a="translate(".concat(t,", ").concat(n,")")+a}return a}function c(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function u(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}},10534:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.browserPrefixToKey=o,e.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},e.default=void 0,e.getPrefix=n;const r=["Moz","Webkit","O","ms"];function n(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const n=null===(t=window.document)||void 0===t||null===(t=t.documentElement)||void 0===t?void 0:t.style;if(!n)return"";if(e in n)return"";for(let t=0;t<r.length;t++)if(o(e,r[t])in n)return r[t];return""}function o(t,e){return e?"".concat(e).concat(function(t){let e="",r=!0;for(let n=0;n<t.length;n++)r?(e+=t[n].toUpperCase(),r=!1):"-"===t[n]?r=!0:e+=t[n];return e}(t)):t}e.default=n()},82292:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},40978:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},e.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},e.createCoreData=function(t,e,r){const o=!(0,n.isNum)(t.lastX),i=a(t);return o?{node:i,deltaX:0,deltaY:0,lastX:e,lastY:r,x:e,y:r}:{node:i,deltaX:e-t.lastX,deltaY:r-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:r}},e.createDraggableData=function(t,e){const r=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/r,y:t.state.y+e.deltaY/r,deltaX:e.deltaX/r,deltaY:e.deltaY/r,lastX:t.state.x,lastY:t.state.y}},e.getBoundPosition=function(t,e,r){if(!t.props.bounds)return[e,r];let{bounds:i}=t.props;i="string"==typeof i?i:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(i);const s=a(t);if("string"==typeof i){const{ownerDocument:t}=s,e=t.defaultView;let r;if(r="parent"===i?s.parentNode:t.querySelector(i),!(r instanceof e.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=r,l=e.getComputedStyle(s),c=e.getComputedStyle(a);i={left:-s.offsetLeft+(0,n.int)(c.paddingLeft)+(0,n.int)(l.marginLeft),top:-s.offsetTop+(0,n.int)(c.paddingTop)+(0,n.int)(l.marginTop),right:(0,o.innerWidth)(a)-(0,o.outerWidth)(s)-s.offsetLeft+(0,n.int)(c.paddingRight)-(0,n.int)(l.marginRight),bottom:(0,o.innerHeight)(a)-(0,o.outerHeight)(s)-s.offsetTop+(0,n.int)(c.paddingBottom)-(0,n.int)(l.marginBottom)}}return(0,n.isNum)(i.right)&&(e=Math.min(e,i.right)),(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom)),(0,n.isNum)(i.left)&&(e=Math.max(e,i.left)),(0,n.isNum)(i.top)&&(r=Math.max(r,i.top)),[e,r]},e.getControlPosition=function(t,e,r){const n="number"==typeof e?(0,o.getTouch)(t,e):null;if("number"==typeof e&&!n)return null;const i=a(r),s=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||t,s,r.props.scale)},e.snapToGrid=function(t,e,r){return[Math.round(e/t[0])*t[0],Math.round(r/t[1])*t[1]]};var n=r(23068),o=r(87477);function a(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}},23068:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.dontSetMe=function(t,e,r){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(r," - do not set this, set it on the child."))},e.findInArray=function(t,e){for(let r=0,n=t.length;r<n;r++)if(e.apply(e,[t[r],r,t]))return t[r]},e.int=function(t){return parseInt(t,10)},e.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},e.isNum=function(t){return"number"==typeof t&&!isNaN(t)}},2022:(t,e,r)=>{function n(t){var e,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function o(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(o&&(o+=" "),o+=e);return o}r.r(e),r.d(e,{clsx:()=>o,default:()=>a});const a=o}}]);
//# sourceMappingURL=9948.365f4371.chunk.js.map