"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4284],{94284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(7706),r=a(99546),i=a(99834),s=a(46377);class o extends s.BaseAdapter{async getData(){const e=this.pluginManager,t=this.getConf("cytobandLocation");if(""===t.uri||"/path/to/cytoband.txt.gz"===t.uri)return[];const a=await(0,i.openLocation)(t,e).readFile(),s=(0,r.isGzip)(a)?await(0,n.unzip)(a):a;return new TextDecoder("utf8",{fatal:!0}).decode(s).split(/\n|\r\n|\r/).filter((e=>!!e.trim())).map(((e,t)=>{const[a,n,i,s,o]=e.split("\t");return new r.SimpleFeature({uniqueId:`${t}`,refName:a,start:+n,end:+i,name:s,type:o})}))}freeResources(){}}}}]);
//# sourceMappingURL=4284.bc9fba12.chunk.js.map