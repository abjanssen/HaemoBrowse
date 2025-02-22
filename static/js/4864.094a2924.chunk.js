"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4864],{28493:(e,t,r)=>{function n(e){const t=e?.trim().split(" ");return[0,1,2,3,5,6].every((e=>void 0!==t?.[e]&&!Number.isNaN(+t[e])))}function a(e){if(n(e)){const[t,r,n,a,s,o,i,c,u,l,d,h,f,m,p]=e.trim().split(" ");return{bitsw_score:t,percent_div:r,percent_del:n,percent_ins:a,query_chr:s,query_begin:o,query_end:i,query_remaining:c,orientation:u,matching_repeat_name:l,matching_repeat_class:d,matching_repeat_begin:h,matching_repeat_end:f,matching_repeat_remaining:m,repeat_id:p}}return{description:e}}function s({line:e,colRef:t,colStart:r,colEnd:n,scoreColumn:a,parser:s,uniqueId:i,names:c}){const u=e.split("\t");return o({splitLine:u,refName:u[t],start:Number.parseInt(u[r],10),end:Number.parseInt(u[n],10)+(r===n?1:0),parser:s,uniqueId:i,scoreColumn:a,names:c})}function o({splitLine:e,refName:t,start:r,end:s,parser:o,uniqueId:c,scoreColumn:u,names:l}){const d=l?function(e,t){let r=!1;const n=[];for(let a=0;a<t.length;a++)"blockCount"===e[a]&&(r=!0),n.push([e[a],t[a]]);const a=Object.fromEntries(n);if(r){const{blockStarts:e,blockCount:t,chromStarts:r,thickEnd:n,thickStart:s,blockSizes:o,...c}=a;return{...c,blockStarts:i(e),chromStarts:i(r),blockSizes:i(o),thickStart:s?+s:void 0,thickEnd:n?+n:void 0,blockCount:t?+t:void 0}}return a}(l,e):o.parseLine(e,{uniqueId:c}),{strand:h,score:f,chrom:m,chromStart:p,chromEnd:b,...k}=d,S=u?+d[u]:f?+f:void 0,_="string"==typeof h?"-"===h?-1:1:h,N=k.blockCount?function({start:e,uniqueId:t,refName:r,chromStarts:n,blockCount:a,blockSizes:s,blockStarts:o}){const i=[],c=n||o||[];for(let n=0;n<a;n++){const a=(c[n]||0)+e,o=s?.[n];if(o&&o>0){const e=a+o;i.push({uniqueId:`${t}-${n}`,start:a,end:e,refName:r,type:"block"})}}return i}({start:r,uniqueId:c,refName:t,chromStarts:k.chromStarts,blockCount:k.blockCount,blockSizes:k.blockSizes,blockStarts:k.blockStarts}):void 0;if(function({splitLine:e,start:t,end:r}){return+(e[6]||0)===t&&+(e[7]||0)===r&&[9,10,11,12,13,14,15,16,17].every((t=>e[t]&&!Number.isNaN(+e[t])))}({splitLine:e,start:r,end:s}))return function({splitLine:e,uniqueId:t,refName:r,start:n,end:a}){const[,,,s,,o,,,i,c,u,l,d,h,f,m,p,b]=e;return{uniqueId:t,refName:r,start:n,end:a,code:s,score:+u||0,strand:o,color:i,source:s,n_valid_cov:c,fraction_modified:u,n_mod:l,n_canonical:d,n_other_mod:h,n_delete:f,n_fail:m,n_diff:p,n_nocall:b}}({splitLine:e,uniqueId:c,refName:t,start:r,end:s});if(n(k.description)){const{chromStarts:e,blockSizes:n,blockStarts:o,type:i,blockCount:u,thickStart:l,thickEnd:d,description:h,...f}=k;return function({uniqueId:e,refName:t,start:r,end:n,description:s,...o}){const{subfeatures:i,...c}=o;return{...c,...a(s),uniqueId:e,refName:t,start:r,end:n}}({...f,uniqueId:c,description:h,type:i,score:S,start:r,end:s,strand:_,refName:t,subfeatures:N})}if(N&&function({thickStart:e,blockCount:t,strand:r}){return e&&t&&0!==r}({strand:_,blockCount:k.blockCount,thickStart:k.thickStart})){const{chromStarts:e,blockSizes:n,type:a,blockCount:o,thickStart:i,thickEnd:u,description:l}=k;return function(e){const{strand:t=0,chrom:r,chromStart:n,chromEnd:a,chromStarts:s,blockStarts:o,blockSizes:i,uniqueId:c,...u}=e,{subfeatures:l,thickStart:d,thickEnd:h,blockCount:f,refName:m,...p}=u,b=[],k=l.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start));for(const e of k){const r=e.start,n=e.end;d>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:n,refName:m}):d>r&&d<n&&h>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:d,refName:m},{type:"CDS",phase:0,start:d,end:n,refName:m}):d<=r&&h>=n?b.push({type:"CDS",phase:0,start:r,end:n,refName:m}):d>r&&d<n&&h<n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:d,refName:m},{type:"CDS",phase:0,start:d,end:h,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:h,end:n,refName:m}):d<=r&&h>r&&h<n?b.push({type:"CDS",phase:0,start:r,end:h,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:h,end:n,refName:m}):h<=r&&b.push({type:(t>0?"three":"five")+"_prime_UTR",start:r,end:n,refName:m})}return{...p,uniqueId:c,strand:t,type:"mRNA",refName:m,subfeatures:b}}({...k,description:l,chromStarts:e,thickStart:i,thickEnd:u,blockSizes:n,blockCount:o,type:a,score:S,start:r,end:s,strand:_,refName:t,uniqueId:c,subfeatures:N})}return{...k,uniqueId:c,score:S,start:r,end:s,strand:_,refName:t,subfeatures:N}}function i(e){return void 0!==e?"string"==typeof e?e.split(",").map((e=>+e)):e:void 0}r.d(t,{dE:()=>s,np:()=>o})},34864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(32598),a=r(60972),s=r(46377),o=r(99546),i=r(99834),c=r(66885),u=r(28493);class l extends s.BaseFeatureDataAdapter{intervalTrees={};static capabilities=["getFeatures","getRefNames"];async loadDataP(e={}){const t=this.pluginManager,r=this.getConf("bedLocation"),n=await(0,o.fetchAndMaybeUnzip)((0,i.openLocation)(r,t),e);if(n.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const s=new TextDecoder("utf8",{fatal:!0}).decode(n).split(/\n|\r\n|\r/).filter((e=>!!e)),c=[];let u=0;for(;u<s.length&&s[u].startsWith("#");u++)c.push(s[u]);const l=c.join("\n"),d={};for(;u<s.length;u++){const e=s[u],t=e.indexOf("\t"),r=e.slice(0,t);d[r]||(d[r]=[]),d[r].push(e)}const h=this.getConf("autoSql");return{header:l,features:d,parser:new a.A({autoSql:h}),columnNames:this.getConf("columnNames"),scoreColumn:this.getConf("scoreColumn"),colRef:this.getConf("colRef"),colStart:this.getConf("colStart"),colEnd:this.getConf("colEnd")}}async loadData(e={}){return this.bedFeatures||(this.bedFeatures=this.loadDataP(e).catch((e=>{throw this.bedFeatures=void 0,e}))),this.bedFeatures}async getRefNames(e={}){const{features:t}=await this.loadData(e);return Object.keys(t)}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}async getNames(){const{header:e,columnNames:t}=await this.loadData();if(t.length)return t;const r=e.split(/\n|\r\n|\r/).filter((e=>!!e)).at(-1);return r?.includes("\t")?r.slice(1).split("\t").map((e=>e.trim())):void 0}async loadFeatureIntervalTreeHelper(e){const{colRef:t,colStart:r,colEnd:a,features:s,parser:i,scoreColumn:c}=await this.loadData(),l=s[e];if(!l)return;const d=await this.getNames(),h=new n.Ay;for(let n=0;n<l.length;n++){const s=l[n],f=`${this.id}-${e}-${n}`,m=new o.SimpleFeature((0,u.dE)({line:s,colRef:t,colStart:r,colEnd:a,scoreColumn:c,parser:i,uniqueId:f,names:d}));h.insert([m.get("start"),m.get("end")],m)}return h}async loadFeatureIntervalTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureIntervalTreeHelper(e).catch((t=>{throw this.intervalTrees[e]=void 0,t}))),this.intervalTrees[e]}getFeatures(e,t={}){return(0,c.ObservableCreate)((async t=>{const{start:r,end:n,refName:a}=e,s=await this.loadFeatureIntervalTree(a),o=s?.search([r,n]);if(o)for(const e of o)t.next(e);t.complete()}),t.stopToken)}freeResources(){}}}}]);
//# sourceMappingURL=4864.094a2924.chunk.js.map