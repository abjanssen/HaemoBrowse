"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6214],{86214:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(60972),s=r(68120),o=r(46377),i=r(99546),a=r(99834),c=r(66885),u=r(37347),d=r(28493);class l extends o.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];constructor(e,t,r){super(e,t,r);const o=this.getConf("bedGzLocation"),i=this.getConf(["index","indexType"]),c=this.getConf(["index","location"]),u=this.getConf("autoSql"),d=this.pluginManager;this.bed=new s.wD({filehandle:(0,a.openLocation)(o,d),csiFilehandle:"CSI"===i?(0,a.openLocation)(c,d):void 0,tbiFilehandle:"CSI"!==i?(0,a.openLocation)(c,d):void 0,chunkCacheSize:52428800}),this.columnNames=this.getConf("columnNames"),this.scoreColumn=this.getConf("scoreColumn"),this.parser=new n.A({autoSql:u})}async getRefNames(e={}){return this.bed.getReferenceSequenceNames(e)}async getHeader(){return this.bed.getHeader()}async getNames(){if(this.columnNames.length)return this.columnNames;const e=(await this.bed.getHeader()).split(/\n|\r\n|\r/).filter((e=>!!e)).at(-1);return e?.includes("\t")?e.slice(1).split("\t").map((e=>e.trim())):void 0}getFeatures(e,t={}){const{stopToken:r}=t;return(0,c.ObservableCreate)((async n=>{const s=await this.bed.getMetadata(),{columnNumbers:o}=s,a=o.ref-1,c=o.start-1,l=o.end-1,m=await this.getNames();let p=performance.now();(0,u.SW)(r),await this.bed.getLines(e.refName,e.start,e.end,{lineCallback:(e,t)=>{performance.now()-p>200&&((0,u.SW)(r),p=performance.now()),n.next(new i.SimpleFeature((0,d.dE)({line:e,colRef:a,colStart:c,colEnd:l,scoreColumn:this.scoreColumn,parser:this.parser,uniqueId:`${this.id}-${t}`,names:m})))},stopToken:t.stopToken}),n.complete()}),t.stopToken)}freeResources(){}}},28493:(e,t,r)=>{function n(e){const t=e?.trim().split(" ");return[0,1,2,3,5,6].every((e=>void 0!==t?.[e]&&!Number.isNaN(+t[e])))}function s(e){if(n(e)){const[t,r,n,s,o,i,a,c,u,d,l,m,p,f,h]=e.trim().split(" ");return{bitsw_score:t,percent_div:r,percent_del:n,percent_ins:s,query_chr:o,query_begin:i,query_end:a,query_remaining:c,orientation:u,matching_repeat_name:d,matching_repeat_class:l,matching_repeat_begin:m,matching_repeat_end:p,matching_repeat_remaining:f,repeat_id:h}}return{description:e}}function o({line:e,colRef:t,colStart:r,colEnd:n,scoreColumn:s,parser:o,uniqueId:a,names:c}){const u=e.split("\t");return i({splitLine:u,refName:u[t],start:Number.parseInt(u[r],10),end:Number.parseInt(u[n],10)+(r===n?1:0),parser:o,uniqueId:a,scoreColumn:s,names:c})}function i({splitLine:e,refName:t,start:r,end:o,parser:i,uniqueId:c,scoreColumn:u,names:d}){const l=d?function(e,t){let r=!1;const n=[];for(let s=0;s<t.length;s++)"blockCount"===e[s]&&(r=!0),n.push([e[s],t[s]]);const s=Object.fromEntries(n);if(r){const{blockStarts:e,blockCount:t,chromStarts:r,thickEnd:n,thickStart:o,blockSizes:i,...c}=s;return{...c,blockStarts:a(e),chromStarts:a(r),blockSizes:a(i),thickStart:o?+o:void 0,thickEnd:n?+n:void 0,blockCount:t?+t:void 0}}return s}(d,e):i.parseLine(e,{uniqueId:c}),{strand:m,score:p,chrom:f,chromStart:h,chromEnd:b,...k}=l,S=u?+l[u]:p?+p:void 0,_="string"==typeof m?"-"===m?-1:1:m,N=k.blockCount?function({start:e,uniqueId:t,refName:r,chromStarts:n,blockCount:s,blockSizes:o,blockStarts:i}){const a=[],c=n||i||[];for(let n=0;n<s;n++){const s=(c[n]||0)+e,i=o?.[n];if(i&&i>0){const e=s+i;a.push({uniqueId:`${t}-${n}`,start:s,end:e,refName:r,type:"block"})}}return a}({start:r,uniqueId:c,refName:t,chromStarts:k.chromStarts,blockCount:k.blockCount,blockSizes:k.blockSizes,blockStarts:k.blockStarts}):void 0;if(function({splitLine:e,start:t,end:r}){return+(e[6]||0)===t&&+(e[7]||0)===r}({splitLine:e,start:r,end:o}))return function({splitLine:e,uniqueId:t,refName:r,start:n,end:s}){const[,,,o,,i,,,a,c,u,d,l,m,p,f,h,b]=e;return{uniqueId:t,refName:r,start:n,end:s,code:o,score:+u||0,strand:i,color:a,source:o,n_valid_cov:c,fraction_modified:u,n_mod:d,n_canonical:l,n_other_mod:m,n_delete:p,n_fail:f,n_diff:h,n_nocall:b}}({splitLine:e,uniqueId:c,refName:t,start:r,end:o});if(n(k.description)){const{chromStarts:e,blockSizes:n,blockStarts:i,type:a,blockCount:u,thickStart:d,thickEnd:l,description:m,...p}=k;return function({uniqueId:e,refName:t,start:r,end:n,description:o,...i}){return{...i,...s(o),uniqueId:e,refName:t,start:r,end:n}}({...p,uniqueId:c,description:m,type:a,score:S,start:r,end:o,strand:_,refName:t,subfeatures:N})}if(N&&function({thickStart:e,blockCount:t,strand:r}){return e&&t&&0!==r}({strand:_,blockCount:k.blockCount,thickStart:k.thickStart})){const{chromStarts:e,blockSizes:n,type:s,blockCount:i,thickStart:a,thickEnd:u,description:d}=k;return function(e){const{strand:t=0,chrom:r,chromStart:n,chromEnd:s,chromStarts:o,blockStarts:i,blockSizes:a,uniqueId:c,...u}=e,{subfeatures:d,thickStart:l,thickEnd:m,blockCount:p,refName:f,...h}=u,b=[],k=d.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start));for(const e of k){const r=e.start,n=e.end;l>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:n,refName:f}):l>r&&l<n&&m>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:l,refName:f},{type:"CDS",start:l,end:n,refName:f}):l<=r&&m>=n?b.push({type:"CDS",start:r,end:n,refName:f}):l>r&&l<n&&m<n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:l,refName:f},{type:"CDS",start:l,end:m,refName:f},{type:(t>0?"three":"five")+"_prime_UTR",start:m,end:n,refName:f}):l<=r&&m>r&&m<n?b.push({type:"CDS",start:r,end:m,refName:f},{type:(t>0?"three":"five")+"_prime_UTR",start:m,end:n,refName:f}):m<=r&&b.push({type:(t>0?"three":"five")+"_prime_UTR",start:r,end:n,refName:f})}return{...h,uniqueId:c,strand:t,type:"mRNA",refName:f,subfeatures:b}}({...k,description:d,chromStarts:e,thickStart:a,thickEnd:u,blockSizes:n,blockCount:i,type:s,score:S,start:r,end:o,strand:_,refName:t,uniqueId:c,subfeatures:N})}return{...k,uniqueId:c,score:S,start:r,end:o,strand:_,refName:t,subfeatures:N}}function a(e){return void 0!==e?"string"==typeof e?e.split(",").map((e=>+e)):e:void 0}r.d(t,{dE:()=>o,np:()=>i})}}]);
//# sourceMappingURL=6214.ded73a89.chunk.js.map