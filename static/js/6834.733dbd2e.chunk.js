"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6834],{6834:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(93902),a=r(60972),s=r(46377),i=r(99546),o=r(99834),c=r(66885),u=r(44728),d=r(82088),p=r(28493);class m extends s.BaseFeatureDataAdapter{async configurePre(e){const t=this.pluginManager,r=new n.C({filehandle:(0,o.openLocation)(this.getConf("bigBedLocation"),t)}),s=await r.getHeader(e);return{bigbed:r,header:s,parser:new a.A({autoSql:s.autoSql})}}async configure(e){return this.cachedP||(this.cachedP=this.configurePre(e).catch((e=>{throw this.cachedP=void 0,e}))),this.cachedP}async getRefNames(e){const{header:t}=await this.configure(e);return Object.keys(t.refsByName)}async getRefNameAliases(e){const{header:t}=await this.configure(e);return(await Promise.all(Object.keys(t.refsByName).map((async e=>(await(0,u._)(this.getFeatures({assemblyName:"",refName:e,start:0,end:1}).pipe((0,d.$)())))[0])))).map((e=>e.toJSON())).map((e=>({refName:e.ucsc,aliases:[e.ncbi,e.refseq,e.genbank],override:!0})))}async getData(){const e=await this.getRefNames(),t=[];for(const r of e){const e=await(0,u._)(this.getFeatures({assemblyName:"unknown",refName:r,start:0,end:Number.MAX_SAFE_INTEGER}).pipe((0,d.$)()));t.push(e)}return t.flat()}async getHeader(e){const{parser:t,header:r}=await this.configure(e),{version:n,fileType:a}=r,{fields:s,...i}=t.autoSql;return{version:n,fileType:a,autoSql:{...i},fields:Object.fromEntries(s.map((({name:e,comment:t})=>[e,t])))}}async getFeaturesHelper({query:e,opts:t,observer:r,allowRedispatch:n,originalQuery:a=e}){const{statusCallback:s=()=>{}}=t,o=this.getConf("scoreColumn"),c=this.getConf("aggregateField"),{parser:u,bigbed:d}=await(0,i.updateStatus)("Downloading header",s,(()=>this.configure(t))),m=await(0,i.updateStatus)("Downloading features",s,(()=>d.getFeatures(e.refName,e.start,e.end,{basesPerSpan:e.end-e.start})));if(n&&m.length){let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,s=!1;for(const e of m)e.start<n&&(n=e.start),e.end>a&&(a=e.end),e[c]&&(s=!0);if(s&&(a>e.end||n<e.start))return void await this.getFeaturesHelper({query:{...e,start:n-5e5,end:a+5e5},opts:t,observer:r,allowRedispatch:!1,originalQuery:e})}const l={};if(m.some((e=>void 0===e.uniqueId)))throw new Error("found uniqueId undefined");for(const t of m){const n=[e.refName,`${t.start}`,`${t.end}`,...t.rest?.split("\t")||[]],s=u.parseLine(n,{uniqueId:t.uniqueId}),d=s[c];l[d]||(l[d]=[]);const{uniqueId:m,type:f,chrom:h,chromStart:b,chromEnd:k,description:N,chromStarts:S,blockStarts:g,blockSizes:_,score:y,blockCount:I,thickStart:q,thickEnd:C,strand:w,...v}=s,E=(0,p.np)({...v,scoreColumn:o,splitLine:n,parser:u,uniqueId:m,start:t.start,end:t.end,refName:e.refName});d?l[d].push(E):(0,i.doesIntersect2)(E.start,E.end,a.start,a.end)&&r.next(new i.SimpleFeature({id:`${this.id}-${m}`,data:E}))}Object.entries(l).map((([t,n])=>{const s=(0,i.min)(n.map((e=>e.start))),o=(0,i.max)(n.map((e=>e.end)));if((0,i.doesIntersect2)(s,o,a.start,a.end)){const a=n.sort(((e,t)=>e.uniqueId.localeCompare(t.uniqueId)));r.next(new i.SimpleFeature({id:`${this.id}-${a[0]?.uniqueId}-parent`,data:{type:"gene",subfeatures:a,strand:a[0]?.strand||1,name:t,start:s,end:o,refName:e.refName}}))}})),r.complete()}getFeatures(e,t={}){return(0,c.ObservableCreate)((async r=>{try{await this.getFeaturesHelper({query:{...e,start:e.start,end:e.end},opts:t,observer:r,allowRedispatch:!0})}catch(e){r.error(e)}}),t.stopToken)}freeResources(){}}},28493:(e,t,r)=>{function n(e){const t=e?.trim().split(" ");return[0,1,2,3,5,6].every((e=>void 0!==t?.[e]&&!Number.isNaN(+t[e])))}function a(e){if(n(e)){const[t,r,n,a,s,i,o,c,u,d,p,m,l,f,h]=e.trim().split(" ");return{bitsw_score:t,percent_div:r,percent_del:n,percent_ins:a,query_chr:s,query_begin:i,query_end:o,query_remaining:c,orientation:u,matching_repeat_name:d,matching_repeat_class:p,matching_repeat_begin:m,matching_repeat_end:l,matching_repeat_remaining:f,repeat_id:h}}return{description:e}}function s({line:e,colRef:t,colStart:r,colEnd:n,scoreColumn:a,parser:s,uniqueId:o,names:c}){const u=e.split("\t");return i({splitLine:u,refName:u[t],start:Number.parseInt(u[r],10),end:Number.parseInt(u[n],10)+(r===n?1:0),parser:s,uniqueId:o,scoreColumn:a,names:c})}function i({splitLine:e,refName:t,start:r,end:s,parser:i,uniqueId:c,scoreColumn:u,names:d}){const p=d?function(e,t){let r=!1;const n=[];for(let a=0;a<t.length;a++)"blockCount"===e[a]&&(r=!0),n.push([e[a],t[a]]);const a=Object.fromEntries(n);if(r){const{blockStarts:e,blockCount:t,chromStarts:r,thickEnd:n,thickStart:s,blockSizes:i,...c}=a;return{...c,blockStarts:o(e),chromStarts:o(r),blockSizes:o(i),thickStart:s?+s:void 0,thickEnd:n?+n:void 0,blockCount:t?+t:void 0}}return a}(d,e):i.parseLine(e,{uniqueId:c}),{strand:m,score:l,chrom:f,chromStart:h,chromEnd:b,...k}=p,N=u?+p[u]:l?+l:void 0,S="string"==typeof m?"-"===m?-1:1:m,g=k.blockCount?function({start:e,uniqueId:t,refName:r,chromStarts:n,blockCount:a,blockSizes:s,blockStarts:i}){const o=[],c=n||i||[];for(let n=0;n<a;n++){const a=(c[n]||0)+e,i=s?.[n];if(i&&i>0){const e=a+i;o.push({uniqueId:`${t}-${n}`,start:a,end:e,refName:r,type:"block"})}}return o}({start:r,uniqueId:c,refName:t,chromStarts:k.chromStarts,blockCount:k.blockCount,blockSizes:k.blockSizes,blockStarts:k.blockStarts}):void 0;if(function({splitLine:e,start:t,end:r}){return+(e[6]||0)===t&&+(e[7]||0)===r&&[9,10,11,12,13,14,15,16,17].every((t=>e[t]&&!Number.isNaN(+e[t])))}({splitLine:e,start:r,end:s}))return function({splitLine:e,uniqueId:t,refName:r,start:n,end:a}){const[,,,s,,i,,,o,c,u,d,p,m,l,f,h,b]=e;return{uniqueId:t,refName:r,start:n,end:a,code:s,score:+u||0,strand:i,color:o,source:s,n_valid_cov:c,fraction_modified:u,n_mod:d,n_canonical:p,n_other_mod:m,n_delete:l,n_fail:f,n_diff:h,n_nocall:b}}({splitLine:e,uniqueId:c,refName:t,start:r,end:s});if(n(k.description)){const{chromStarts:e,blockSizes:n,blockStarts:i,type:o,blockCount:u,thickStart:d,thickEnd:p,description:m,...l}=k;return function({uniqueId:e,refName:t,start:r,end:n,description:s,...i}){const{subfeatures:o,...c}=i;return{...c,...a(s),uniqueId:e,refName:t,start:r,end:n}}({...l,uniqueId:c,description:m,type:o,score:N,start:r,end:s,strand:S,refName:t,subfeatures:g})}if(g&&function({thickStart:e,blockCount:t,strand:r}){return e&&t&&0!==r}({strand:S,blockCount:k.blockCount,thickStart:k.thickStart})){const{chromStarts:e,blockSizes:n,type:a,blockCount:i,thickStart:o,thickEnd:u,description:d}=k;return function(e){const{strand:t=0,chrom:r,chromStart:n,chromEnd:a,chromStarts:s,blockStarts:i,blockSizes:o,uniqueId:c,...u}=e,{subfeatures:d,thickStart:p,thickEnd:m,blockCount:l,refName:f,...h}=u,b=[],k=d.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start));for(const e of k){const r=e.start,n=e.end;p>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:n,refName:f}):p>r&&p<n&&m>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:p,refName:f},{type:"CDS",phase:0,start:p,end:n,refName:f}):p<=r&&m>=n?b.push({type:"CDS",phase:0,start:r,end:n,refName:f}):p>r&&p<n&&m<n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:p,refName:f},{type:"CDS",phase:0,start:p,end:m,refName:f},{type:(t>0?"three":"five")+"_prime_UTR",start:m,end:n,refName:f}):p<=r&&m>r&&m<n?b.push({type:"CDS",phase:0,start:r,end:m,refName:f},{type:(t>0?"three":"five")+"_prime_UTR",start:m,end:n,refName:f}):m<=r&&b.push({type:(t>0?"three":"five")+"_prime_UTR",start:r,end:n,refName:f})}return{...h,uniqueId:c,strand:t,type:"mRNA",refName:f,subfeatures:b}}({...k,description:d,chromStarts:e,thickStart:o,thickEnd:u,blockSizes:n,blockCount:i,type:a,score:N,start:r,end:s,strand:S,refName:t,uniqueId:c,subfeatures:g})}return{...k,uniqueId:c,score:N,start:r,end:s,strand:S,refName:t,subfeatures:g}}function o(e){return void 0!==e?"string"==typeof e?e.split(",").map((e=>+e)):e:void 0}r.d(t,{dE:()=>s,np:()=>i})}}]);
//# sourceMappingURL=6834.733dbd2e.chunk.js.map