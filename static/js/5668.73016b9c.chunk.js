"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5668],{95668:(e,t,a)=>{a.d(t,{renderToSvg:()=>g});var r=a(7552),l=a(42489),n=a(99546),i=a(20139),s=a(49823),c=a(36422),o=a(20529),m=a(48231);function h({width:e,height:t,shift:a}){const l=(0,m.A)();return r.createElement("rect",{width:e+2*a,height:t,fill:(0,n.stripAlpha)(l.palette.background.default)})}var f=a(95727),d=a(91468);async function g(e,t){const{textHeight:a=18,headerHeight:m=30,rulerHeight:g=30,fontSize:u=13,trackLabels:w="offset",Wrapper:p=({children:e})=>e,themeName:k="default"}=t,{createRootFn:E}=(0,c.getRoot)(e),b=(0,n.getSession)(e),v=b.allThemes?.()[k],{width:x,views:y}=e,S=m+g,T=y.map((e=>(0,o.mJ)(e.tracks,a,w)+S)),z=(0,n.sum)(T)+100,$=await Promise.all(y.map((async e=>({view:e,data:await Promise.all(e.tracks.map((async e=>{const a=e.displays[0];return await(0,l.when)((()=>void 0===a.ready||a.ready)),{track:e,result:await a.renderSvg({...t,theme:v})}})))})))),H=function(e,t,a){return(0,n.max)(e.flatMap((e=>e.tracks.map((e=>(0,n.measureText)((0,d.getTrackName)(e.configuration,a),t))))),0)}(y,u,b)+40,L="left"===w?H:0,P="offset"===w?a:0,R=y.map(((e,t)=>function(e,t,a=0){const r={};let l=t;for(const n of e.tracks)r[n.configuration.trackId]=l+a,l+=n.displays[0].height+t;return r}(e,P,u+(t>0?T[t-1]:0)+S))),j=x+L,A=(0,s.createJBrowseTheme)(v);return(0,n.renderToStaticMarkup)(r.createElement(i.A,{theme:A},r.createElement(p,null,r.createElement("svg",{width:x,height:z,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,j+100,z].toString()},r.createElement(h,{width:j,height:z,shift:50}),y[0]?r.createElement("g",{transform:`translate(50 ${u})`},r.createElement("g",{transform:`translate(${L})`},r.createElement("text",{x:0,fontSize:u,fill:A.palette.text.primary},y[0].assemblyNames.join(", ")),r.createElement(o.$m,{model:$[0].view,fontSize:u})),r.createElement(o.zh,{textHeight:a,trackLabels:w,fontSize:u,model:$[0].view,displayResults:$[0].data,offset:S,trackLabelOffset:L})):null,y[1]?r.createElement("g",{transform:`translate(50 ${u+T[0]})`},r.createElement("g",{transform:`translate(${L})`},r.createElement("text",{x:0,fontSize:u,fill:A.palette.text.primary},y[1].assemblyNames.join(", ")),r.createElement(o.$m,{model:$[1].view,fontSize:u})),r.createElement(o.zh,{textHeight:a,trackLabels:w,fontSize:u,model:$[1].view,displayResults:$[1].data,offset:S,trackLabelOffset:L})):null,r.createElement("defs",null,r.createElement("clipPath",{id:"clip-bsv"},r.createElement("rect",{x:0,y:0,width:x,height:z}))),r.createElement("g",{transform:`translate(${L+50})`,clipPath:"url(#clip-bsv)"},e.matchedTracks.map((t=>r.createElement(f.A,{parentRef:{current:null},key:t.configuration.trackId,model:e,trackId:t.configuration.trackId,getTrackYPosOverride:(e,t)=>R[t][e]}))))))),E)}}}]);
//# sourceMappingURL=5668.73016b9c.chunk.js.map