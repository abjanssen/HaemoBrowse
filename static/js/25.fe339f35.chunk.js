(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[25,8008],{1773:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var o=r(7552),a=r(93878),s=r(70799),n=r(51148),i=r(4785),d=r(943),l=r(50885),c=r(69500);const u=(0,n.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),p=o.forwardRef((function(e,t){const r=(0,i.b)({props:e,name:"MuiCard"}),{className:o,raised:n=!1,...d}=r,p={...r,raised:n},m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},l.T,t)})(p);return(0,c.jsx)(u,{className:(0,a.A)(m.root,o),elevation:n?8:void 0,ref:t,ownerState:p,...d})}))},7720:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var o=r(74893),a=r(69500);const s=(0,o.A)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},13197:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>b});var o=r(7552),a=r(93878),s=r(70799),n=r(23879),i=r(51148),d=r(84893),l=r(4785),c=r(19363),u=r(51584),p=r(57406),m=r(74823);const h=(0,r(33761).A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var g=r(77999),v=r(69500);const f=(0,i.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.hasSecondaryAction&&t.secondaryAction]}})((0,d.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${h.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),A=(0,i.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),b=o.forwardRef((function(e,t){const r=(0,l.b)({props:e,name:"MuiListItem"}),{alignItems:i="center",children:d,className:h,component:b,components:y={},componentsProps:$={},ContainerComponent:x="li",ContainerProps:{className:w,...S}={},dense:C=!1,disableGutters:R=!1,disablePadding:M=!1,divider:I=!1,secondaryAction:P,slotProps:k={},slots:j={},...N}=r,G=o.useContext(p.A),L=o.useMemo((()=>({dense:C||G.dense||!1,alignItems:i,disableGutters:R})),[i,G.dense,C,R]),T=o.useRef(null),z=o.Children.toArray(d),F=z.length&&(0,c.A)(z[z.length-1],["ListItemSecondaryAction"]),H={...r,alignItems:i,dense:L.dense,disableGutters:R,disablePadding:M,divider:I,hasSecondaryAction:F},V=(e=>{const{alignItems:t,classes:r,dense:o,disableGutters:a,disablePadding:n,divider:i,hasSecondaryAction:d}=e,l={root:["root",o&&"dense",!a&&"gutters",!n&&"padding",i&&"divider","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction"],container:["container"]};return(0,s.A)(l,m._,r)})(H),q=(0,u.A)(T,t),D=j.root||y.Root||f,E=k.root||$.root||{},B={className:(0,a.A)(V.root,E.className,h),...N};let O=b||"li";return F?(O=B.component||b?O:"div","li"===x&&("li"===O?O="div":"li"===B.component&&(B.component="div")),(0,v.jsx)(p.A.Provider,{value:L,children:(0,v.jsxs)(A,{as:x,className:(0,a.A)(V.container,w),ref:q,ownerState:H,...S,children:[(0,v.jsx)(D,{...E,...!(0,n.A)(D)&&{as:O,ownerState:{...H,...E.ownerState}},...B,children:z}),z.pop()]})})):(0,v.jsx)(p.A.Provider,{value:L,children:(0,v.jsxs)(D,{...E,as:O,ref:q,...!(0,n.A)(D)&&{ownerState:{...H,...E.ownerState}},...B,children:[z,P&&(0,v.jsx)(g.A,{children:P})]})})}))},25355:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var o=r(7552),a=r(93878),s=r(70799),n=r(51148),i=r(4785),d=r(61823),l=r(69500);const c=(0,n.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),u=o.forwardRef((function(e,t){const r=(0,i.b)({props:e,name:"MuiCardContent"}),{className:o,component:n="div",...u}=r,p={...r,component:n},m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},d.h,t)})(p);return(0,l.jsx)(c,{as:n,className:(0,a.A)(m.root,o),ownerState:p,ref:t,...u})}))},25762:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var o=r(74893),a=r(69500);const s=(0,o.A)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},25877:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,T:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiAccordionSummary",e)}const n=(0,o.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"])},26875:(e,t,r)=>{"use strict";r.d(t,{A:()=>v});var o=r(7552),a=r(70799),s=r(90175),n=r(36715),i=r(51148),d=r(4785),l=r(63439),c=r(43045),u=r(69500);const p=(0,i.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${l.A.title}`]:t.title},{[`& .${l.A.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),m=(0,i.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),h=(0,i.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,i.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto",[`.${s.A.root}:where(& .${l.A.title})`]:{display:"block"},[`.${s.A.root}:where(& .${l.A.subheader})`]:{display:"block"}}),v=o.forwardRef((function(e,t){const r=(0,d.b)({props:e,name:"MuiCardHeader"}),{action:o,avatar:s,component:i="div",disableTypography:v=!1,subheader:f,subheaderTypographyProps:A,title:b,titleTypographyProps:y,slots:$={},slotProps:x={},...w}=r,S={...r,component:i,disableTypography:v},C=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},l.u,t)})(S),R={slots:$,slotProps:{title:y,subheader:A,...x}};let M=b;const[I,P]=(0,c.A)("title",{className:C.title,elementType:n.A,externalForwardedProps:R,ownerState:S,additionalProps:{variant:s?"body2":"h5",component:"span"}});null==M||M.type===n.A||v||(M=(0,u.jsx)(I,{...P,children:M}));let k=f;const[j,N]=(0,c.A)("subheader",{className:C.subheader,elementType:n.A,externalForwardedProps:R,ownerState:S,additionalProps:{variant:s?"body2":"body1",color:"textSecondary",component:"span"}});null==k||k.type===n.A||v||(k=(0,u.jsx)(j,{...N,children:k}));const[G,L]=(0,c.A)("root",{ref:t,className:C.root,elementType:p,externalForwardedProps:{...R,...w,component:i},ownerState:S}),[T,z]=(0,c.A)("avatar",{className:C.avatar,elementType:m,externalForwardedProps:R,ownerState:S}),[F,H]=(0,c.A)("content",{className:C.content,elementType:g,externalForwardedProps:R,ownerState:S}),[V,q]=(0,c.A)("action",{className:C.action,elementType:h,externalForwardedProps:R,ownerState:S});return(0,u.jsxs)(G,{...L,children:[s&&(0,u.jsx)(T,{...z,children:s}),(0,u.jsxs)(F,{...H,children:[M,k]}),o&&(0,u.jsx)(V,{...q,children:o})]})}))},48253:(e,t,r)=>{"use strict";r.d(t,{A:()=>v});var o=r(7552),a=r(93878),s=r(70799),n=r(51148),i=r(84893),d=r(4785),l=r(48054),c=r(51132),u=r(25877),p=r(69500);const m=(0,n.Ay)(l.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((0,i.A)((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${u.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${u.A.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${u.A.expanded}`]:{minHeight:64}}}]}}))),h=(0,n.Ay)("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((0,i.A)((({theme:e})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${u.A.expanded}`]:{margin:"20px 0"}}}]})))),g=(0,n.Ay)("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((0,i.A)((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${u.A.expanded}`]:{transform:"rotate(180deg)"}})))),v=o.forwardRef((function(e,t){const r=(0,d.b)({props:e,name:"MuiAccordionSummary"}),{children:n,className:i,expandIcon:l,focusVisibleClassName:v,onClick:f,...A}=r,{disabled:b=!1,disableGutters:y,expanded:$,toggle:x}=o.useContext(c.A),w={...r,expanded:$,disabled:b,disableGutters:y},S=(e=>{const{classes:t,expanded:r,disabled:o,disableGutters:a}=e,n={root:["root",r&&"expanded",o&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,s.A)(n,u.T,t)})(w);return(0,p.jsxs)(m,{focusRipple:!1,disableRipple:!0,disabled:b,"aria-expanded":$,className:(0,a.A)(S.root,i),focusVisibleClassName:(0,a.A)(S.focusVisible,v),onClick:e=>{x&&x(e),f&&f(e)},ref:t,ownerState:w,...A,children:[(0,p.jsx)(h,{className:S.content,ownerState:w,children:n}),l&&(0,p.jsx)(g,{className:S.expandIconWrapper,ownerState:w,children:l})]})}))},50885:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,T:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiCard",e)}const n=(0,o.A)("MuiCard",["root"])},61823:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,h:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiCardContent",e)}const n=(0,o.A)("MuiCardContent",["root"])},63165:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var o=r(7552),a=r(93878),s=r(70799),n=r(51148),i=r(84893),d=r(4785),l=r(79509),c=r(69500);const u=(0,n.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((0,i.A)((({theme:e})=>({padding:e.spacing(1,2,2)})))),p=o.forwardRef((function(e,t){const r=(0,d.b)({props:e,name:"MuiAccordionDetails"}),{className:o,...n}=r,i=r,p=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},l.n,t)})(i);return(0,c.jsx)(u,{className:(0,a.A)(p.root,o),ref:t,ownerState:i,...n})}))},63439:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,u:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiCardHeader",e)}const n=(0,o.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"])},74823:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,_:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiListItem",e)}const n=(0,o.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"])},77999:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var o=r(7552),a=r(93878),s=r(70799),n=r(51148),i=r(4785),d=r(57406),l=r(87739),c=r(69500);const u=(0,n.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),p=o.forwardRef((function(e,t){const r=(0,i.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...p}=r,m=o.useContext(d.A),h={...r,disableGutters:m.disableGutters},g=(e=>{const{disableGutters:t,classes:r}=e,o={root:["root",t&&"disableGutters"]};return(0,s.A)(o,l.g,r)})(h);return(0,c.jsx)(u,{className:(0,a.A)(g.root,n),ownerState:h,ref:t,...p})}));p.muiName="ListItemSecondaryAction";const m=p},79509:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,n:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiAccordionDetails",e)}const n=(0,o.A)("MuiAccordionDetails",["root"])},87739:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,g:()=>s});var o=r(33761),a=r(85693);function s(e){return(0,a.Ay)("MuiListItemSecondaryAction",e)}const n=(0,o.A)("MuiListItemSecondaryAction",["root","disableGutters"])},93091:function(e){e.exports=function(){var e=[],t=[],r={},o={},a={};function s(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function n(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function i(e,t){return e.replace(t[0],(function(r,o){var a,s,i=(a=t[1],s=arguments,a.replace(/\$(\d{1,2})/g,(function(e,t){return s[t]||""})));return n(""===r?e[o-1]:r,i)}))}function d(e,t,o){if(!e.length||r.hasOwnProperty(e))return t;for(var a=o.length;a--;){var s=o[a];if(s[0].test(t))return i(t,s)}return t}function l(e,t,r){return function(o){var a=o.toLowerCase();return t.hasOwnProperty(a)?n(o,a):e.hasOwnProperty(a)?n(o,e[a]):d(a,o,r)}}function c(e,t,r,o){return function(o){var a=o.toLowerCase();return!!t.hasOwnProperty(a)||!e.hasOwnProperty(a)&&d(a,a,r)===a}}function u(e,t,r){return(r?t+" ":"")+(1===t?u.singular(e):u.plural(e))}return u.plural=l(a,o,e),u.isPlural=c(a,o,e),u.singular=l(o,a,t),u.isSingular=c(o,a,t),u.addPluralRule=function(t,r){e.push([s(t),r])},u.addSingularRule=function(e,r){t.push([s(e),r])},u.addUncountableRule=function(e){"string"!=typeof e?(u.addPluralRule(e,"$0"),u.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},u.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),a[e]=t,o[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return u.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return u.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return u.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(u.addUncountableRule),u}()}}]);
//# sourceMappingURL=25.fe339f35.chunk.js.map