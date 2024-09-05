"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9206,9870],{79206:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(71616),n=a(99834),r=a(69870);class i extends r.default{async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation"),a=this.getConf("gziLocation"),r={fasta:(0,n.openLocation)(e,this.pluginManager),fai:(0,n.openLocation)(t,this.pluginManager),gzi:(0,n.openLocation)(a,this.pluginManager)};return{fasta:new s.tP(r)}}}},69870:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(71616),n=a(46377),r=a(99834),i=a(66885),o=a(99546),c=a(47046),l=a(43334);class h extends n.BaseSequenceAdapter{seqCache=new c.A({cache:new l.A({maxSize:200}),fill:async(e,t)=>{const{refName:a,start:s,end:n,fasta:r}=e;return r.getSequence(a,s,n,{...e,signal:t})}});async getRefNames(e){const{fasta:t}=await this.setup();return t.getSequenceNames(e)}async getRegions(e){const{fasta:t}=await this.setup(),a=await t.getSequenceSizes(e);return Object.keys(a).map((e=>({refName:e,start:0,end:a[e]})))}async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation");return{fasta:new s.BL({fasta:(0,r.openLocation)(e,this.pluginManager),fai:(0,r.openLocation)(t,this.pluginManager)})}}async getHeader(){const e=this.getConf("metadataLocation");return""===e.uri||"/path/to/fa.metadata.yaml"===e.uri?null:(0,r.openLocation)(e,this.pluginManager).readFile("utf8")}async setup(){return this.setupP||(this.setupP=this.setupPre().catch((e=>{throw this.setupP=void 0,e}))),this.setupP}getFeatures(e,t){const{refName:a,start:s,end:n}=e;return(0,i.ObservableCreate)((async e=>{const{fasta:r}=await this.setup(),i=await r.getSequenceSize(a,t),c=Math.min(i,n),l=[],h=128e3,f=s-s%h,d=n+(h-n%h);for(let e=f;e<d;e+=h){const s={refName:a,start:e,end:e+h};l.push(this.seqCache.get(JSON.stringify(s),{...s,fasta:r},t?.signal))}const u=(await Promise.all(l)).join("").slice(s-f).slice(0,n-s);u&&e.next(new o.SimpleFeature({id:`${a} ${s}-${c}`,data:{refName:a,start:s,end:c,seq:u}})),e.complete()}))}freeResources(){}}},47046:(e,t,a)=>{a.d(t,{A:()=>i});class s{}class n{constructor(){this.signals=new Set,this.abortController=new AbortController}addSignal(e=new s){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(e),e.aborted?this.handleAborted(e):"function"==typeof e.addEventListener&&e.addEventListener("abort",(()=>{this.handleAborted(e)}))}handleAborted(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}class r{constructor(){this.callbacks=new Set}addCallback(e=()=>{}){this.callbacks.add(e),e(this.currentMessage)}callback(e){this.currentMessage=e;for(const t of this.callbacks)t(e)}}class i{constructor({fill:e,cache:t}){if("function"!=typeof e)throw new TypeError("must pass a fill function");if("object"!=typeof t)throw new TypeError("must pass a cache object");if("function"!=typeof t.get||"function"!=typeof t.set||"function"!=typeof t.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=t,this.fillCallback=e}static isAbortException(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}evict(e,t){this.cache.get(e)===t&&this.cache.delete(e)}fill(e,t,a,s){const i=new n,o=new r;o.addCallback(s);const c={aborter:i,promise:this.fillCallback(t,i.signal,(e=>{o.callback(e)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};c.aborter.addSignal(a),c.aborter.signal.addEventListener("abort",(()=>{c.settled||this.evict(e,c)})),c.promise.then((()=>{c.settled=!0}),(()=>{c.settled=!0,this.evict(e,c)})).catch((e=>{throw console.error(e),e})),this.cache.set(e,c)}static checkSinglePromise(e,t){function a(){if(null==t?void 0:t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((e=>(a(),e)),(e=>{throw a(),e}))}has(e){return this.cache.has(e)}get(e,t,a,s){if(!a&&t instanceof AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const n=this.cache.get(e);return n?n.aborted&&!n.settled?(this.evict(e,n),this.get(e,t,a,s)):n.settled?n.promise:(n.aborter.addSignal(a),n.statusReporter.addCallback(s),i.checkSinglePromise(n.promise,a)):(this.fill(e,t,a,s),i.checkSinglePromise(this.cache.get(e).promise,a))}delete(e){const t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}clear(){const e=this.cache.keys();let t=0;for(let a=e.next();!a.done;a=e.next())this.delete(a.value),t+=1;return t}}},71616:(e,t,a)=>{a.d(t,{tP:()=>c,BL:()=>o});var s=a(45834),n=a(7706),r=a(35451);function i(e,t){return e.offset+e.lineBytes*Math.floor(t/e.lineLength)+t%e.lineLength}class o{constructor({fasta:e,fai:t,path:a,faiPath:n}){if(e)this.fasta=e;else{if(!a)throw new Error("Need to pass filehandle for fasta or path to localfile");this.fasta=new s.EY(a)}if(t)this.fai=t;else if(n)this.fai=new s.EY(n);else{if(!a)throw new Error("Need to pass filehandle for  or path to localfile");this.fai=new s.EY(`${a}.fai`)}}async _getIndexes(e){return this.indexes||(this.indexes=async function(e,t){const a=await e.readFile(t);if(!(null==a?void 0:a.length))throw new Error("No data read from FASTA index (FAI) file");let s,n=0;const r=a.toString("utf8").split(/\r?\n/).filter((e=>/\S/.test(e))).map((e=>e.split("\t"))).filter((e=>""!==e[0])).map((e=>(s&&s.name===e[0]||(s={name:e[0],id:n},n+=1),{id:s.id,name:e[0],length:+e[1],start:0,end:+e[1],offset:+e[2],lineLength:+e[3],lineBytes:+e[4]})));return{name:Object.fromEntries(r.map((e=>[e.name,e]))),id:Object.fromEntries(r.map((e=>[e.id,e])))}}(this.fai,e)),this.indexes}async getSequenceNames(e){return Object.keys((await this._getIndexes(e)).name)}async getSequenceSizes(e){const t={},a=await this._getIndexes(e);for(const e of Object.values(a.id))t[e.name]=e.length;return t}async getSequenceSize(e,t){var a;return null===(a=(await this._getIndexes(t)).name[e])||void 0===a?void 0:a.length}async hasReferenceSequence(e,t){return!!(await this._getIndexes(t)).name[e]}async getResiduesById(e,t,a,s){const n=(await this._getIndexes(s)).id[e];if(n)return this._fetchFromIndexEntry(n,t,a,s)}async getResiduesByName(e,t,a,s){const n=(await this._getIndexes(s)).name[e];if(n)return this._fetchFromIndexEntry(n,t,a,s)}async getSequence(e,t,a,s){return this.getResiduesByName(e,t,a,s)}async _fetchFromIndexEntry(e,t=0,a,s){let n=a;if(t<0)throw new TypeError("regionStart cannot be less than 0");if((void 0===n||n>e.length)&&(n=e.length),t>=n)return"";const o=i(e,t),c=i(e,n)-o,l=r.Buffer.allocUnsafe(c);return await this.fasta.read(l,0,c,o,s),l.toString("utf8").replace(/\s+/g,"")}}class c extends o{constructor({fasta:e,path:t,fai:a,faiPath:s,gzi:r,gziPath:i}){super({fasta:e,path:t,fai:a,faiPath:s}),e&&r?this.fasta=new n.sG({filehandle:e,gziFilehandle:r}):t&&i&&(this.fasta=new n.sG({path:t,gziPath:i}))}}}}]);
//# sourceMappingURL=9206.2bba0991.chunk.js.map