"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3025],{3025:(t,e,r)=>{r.r(e),r.d(e,{parseBedPEBuffer:()=>a});var n=r(58766),o=r(32622);function a(t){const e=(0,o.P)(t),r=e.filter((t=>!(t.startsWith("#")||t.startsWith("browser")||t.startsWith("track")))),a=e.findLast((t=>t.startsWith("#"))),s=["refName","start","end","mateRef","mateStart","mateEnd","name","score","strand","mateStrand"],i=Math.max(0,(r[0]?.split("\t")?.length||0)-s.length),u=a?.includes("\t")?a.slice(1).split("\t").slice(s.length).map((t=>t.trim())):Array.from({length:i},((t,e)=>`field_${e}`));return{columns:[...s,...u].map((t=>({name:t}))),rowSet:{rows:r.map(((t,e)=>{const r=t.split("\t");return{cellData:{refName:r[0],start:r[1],end:r[2],mateRefName:r[3],mateStart:r[4],mateEnd:r[5],name:r[6],score:+r[7]||r[7],strand:r[8],mateStrand:r[9],...Object.fromEntries(u.map(((t,e)=>{const o=r[e+s.length];return[t,(0,n.Et)(o)?+o:o]})))},feature:{uniqueId:`bedpe-${e}`,refName:r[0],start:+r[1],end:+r[2],strand:(0,o.c)(r[8]),mate:{refName:r[3],start:+r[4],end:+r[5],strand:(0,o.c)(r[9])},name:r[6],score:r[7],...Object.fromEntries(u.map(((t,e)=>{const o=r[e+s.length];return[t,(0,n.Et)(o)?+o:o]})))}}}))}}}},32622:(t,e,r)=>{function n(t){return"+"===t?1:"-"===t?-1:void 0}function o(t){return new TextDecoder("utf8").decode(t).split(/\n|\r\n|\r/).map((t=>t.trim())).filter((t=>!!t))}r.d(e,{P:()=>o,c:()=>n})},58766:(t,e,r)=>{function n(t){return"number"==typeof t&&!Number.isNaN(t)}function o(t){return"function"==typeof t}function a(t){return"object"==typeof t&&null!==t}function s(){try{const t="__some_random_key_you_are_not_going_to_use__";return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}function i(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}r.d(e,{E1:()=>l,Et:()=>n,Go:()=>m,Gv:()=>a,Hv:()=>c,I9:()=>h,Nt:()=>i,Tn:()=>o,Ve:()=>p,qE:()=>u,s3:()=>s,y1:()=>f});const u=(t,e,r)=>Math.max(e,Math.min(r,t));function f(t,e){return Array.from({length:e-t}).map(((e,r)=>t+r))}function c(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;if(Array.isArray(t)){const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n+=1)if(!c(t[n],e[n]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;const r=Array.from(t.entries());for(let t=0;t<r.length;t+=1)if(!e.has(r[t][0]))return!1;for(let t=0;t<r.length;t+=1){const n=r[t];if(!c(n[1],e.get(n[0])))return!1}return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;const r=Array.from(t.entries());for(let t=0;t<r.length;t+=1)if(!e.has(r[t][0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n+=1)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const r=Object.keys(t),n=r.length;if(n!==Object.keys(e).length)return!1;for(let t=0;t<n;t+=1)if(!Object.prototype.hasOwnProperty.call(e,r[t]))return!1;for(let o=0;o<n;o+=1){const n=r[o];if(!c(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function l(t){const e=(r=t,()=>{let t=r+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296});var r;return(t,r)=>t+(r-t)*e()}function m(t){return"function"==typeof structuredClone?structuredClone(t):JSON.parse(JSON.stringify(t))}function h(t){}const p=(t,e)=>r=>{t&&e(r)}}}]);
//# sourceMappingURL=3025.01720b45.chunk.js.map