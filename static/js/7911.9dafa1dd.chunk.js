/*! For license information please see 7911.9dafa1dd.chunk.js.LICENSE.txt */
(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7911],{14037:e=>{"use strict";e.exports=function(e){return"object"==typeof e?null===e:"function"!=typeof e}},22282:e=>{"use strict";e.exports=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)}},33524:(e,r,t)=>{"use strict";var o=t(22282);function s(e){return!0===o(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function(e){var r,t;return!1!==s(e)&&"function"==typeof(r=e.constructor)&&!1!==s(t=r.prototype)&&!1!==t.hasOwnProperty("isPrototypeOf")}},51687:(e,r,t)=>{const o=t(22282);function s(e,r,t){return"function"==typeof t.join?t.join(e):e[0]+r+e[1]}function n(e,r,t){return"function"!=typeof t.isValid||t.isValid(e,r)}function a(e){return o(e)||Array.isArray(e)||"function"==typeof e}e.exports=function(e,r,t){if(o(t)||(t={default:t}),!a(e))return void 0!==t.default?t.default:e;"number"==typeof r&&(r=String(r));const i=Array.isArray(r),c="string"==typeof r,u=t.separator||".",l=t.joinChar||("string"==typeof u?u:".");if(!c&&!i)return e;if(c&&r in e)return n(r,e,t)?e[r]:t.default;let f=i?r:function(e,r,t){return"function"==typeof t.split?t.split(e):e.split(r)}(r,u,t),p=f.length,d=0;do{let r=f[d];for("number"==typeof r&&(r=String(r));r&&"\\"===r.slice(-1);)r=s([r.slice(0,-1),f[++d]||""],l,t);if(r in e){if(!n(r,e,t))return t.default;e=e[r]}else{let o=!1,a=d+1;for(;a<p;)if(r=s([r,f[a++]],l,t),o=r in e){if(!n(r,e,t))return t.default;e=e[r],d=a-1;break}if(!o)return t.default}}while(++d<p&&a(e));return d===p?e:t.default}},76099:(e,r,t)=>{"use strict";const{deleteProperty:o}=Reflect,s=t(14037),n=t(33524),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,i=e=>{if(!s(e))throw new TypeError("Object keys must be strings or symbols");if((e=>"__proto__"===e||"constructor"===e||"prototype"===e)(e))throw new Error(`Cannot set unsafe key: "${e}"`)},c=(e,r)=>r&&"function"==typeof r.split?r.split(e):"symbol"==typeof e?[e]:Array.isArray(e)?e:((e,r,t)=>{const o=(e=>Array.isArray(e)?e.flat().map(String).join(","):e)(r?((e,r)=>{if("string"!=typeof e||!r)return e;let t=e+";";return void 0!==r.arrays&&(t+=`arrays=${r.arrays};`),void 0!==r.separator&&(t+=`separator=${r.separator};`),void 0!==r.split&&(t+=`split=${r.split};`),void 0!==r.merge&&(t+=`merge=${r.merge};`),void 0!==r.preservePaths&&(t+=`preservePaths=${r.preservePaths};`),t})(e,r):e);i(o);const s=l.cache.get(o)||t();return l.cache.set(o,s),s})(e,r,(()=>((e,r={})=>{const t=r.separator||".",o="/"!==t&&r.preservePaths;if("string"==typeof e&&!1!==o&&/\//.test(e))return[e];const s=[];let n="";const a=e=>{let r;""!==e.trim()&&Number.isInteger(r=Number(e))?s.push(r):s.push(e)};for(let r=0;r<e.length;r++){const o=e[r];"\\"!==o?o!==t?n+=o:(a(n),n=""):n+=e[++r]}return n&&a(n),s})(e,r))),u=(e,r,t,s)=>{if(i(r),void 0===t)o(e,r);else if(s&&s.merge){const o="function"===s.merge?s.merge:Object.assign;o&&n(e[r])&&n(t)?e[r]=o(e[r],t):e[r]=t}else e[r]=t;return e},l=(e,r,t,o)=>{if(!r||!a(e))return e;const s=c(r,o);let n=e;for(let e=0;e<s.length;e++){const r=s[e],c=s[e+1];if(i(r),void 0===c){u(n,r,t,o);break}"number"!=typeof c||Array.isArray(n[r])?(a(n[r])||(n[r]={}),n=n[r]):n=n[r]=[]}return e};l.split=c,l.cache=new Map,l.clear=()=>{l.cache=new Map},e.exports=l},77911:(e,r,t)=>{"use strict";t.d(r,{fetchJb1:()=>w});var o=t(99834),s=t(99546),n=t(51687),a=t.n(n),i=t(76099),c=t.n(i);function u(e){return e?.label&&"string"==typeof e.label}function l(e,r){for(const t of Object.keys(r))t in e&&"object"==typeof r[t]&&"object"==typeof e[t]?l(e[t],r[t]):void 0!==e[t]&&void 0===r[t]||(e[t]=r[t]);return e}function f(e,r){if(e.tracks&&!Array.isArray(e.tracks))if(u(e.tracks))e.tracks=[e.tracks];else{const r=[];for(const t of Object.keys(e.tracks)){const o=e.tracks[t];u(o)?r.push(o):r.push({label:t,...o})}e.tracks=r}const t=e.trackMetadata;if(t?.sources){if("string"==typeof t.sources&&(t.sources=[t.sources]),o=t.sources,o?.url&&"string"==typeof o.url&&(t.sources=[t.sources]),!Array.isArray(t.sources)){const e=[];for(const r of Object.keys(t.sources)){const o=t.sources[r];"name"in o||(o.name=r),e.push(o)}t.sources=e}t.sources=t.sources.map((e=>{if("string"==typeof e){const r={url:e},t=/\.(\w+)$/.exec(e);return t&&(r.type=t[1].toLowerCase()),r}return e}))}var o;if(e.sourceUrl=e.sourceUrl||r,e.sourceUrl.startsWith("/")&&(e.sourceUrl=new URL(e.sourceUrl,window.location.href).href),e.baseUrl=e.baseUrl||new URL(".",e.sourceUrl).href,e.baseUrl.length&&!e.baseUrl.endsWith("/")&&(e.baseUrl+="/"),e.sourceUrl){const r=[];e.tracks&&r.push(...e.tracks),e.stores&&r.push(...Object.values(e.stores)),e.names&&r.push(e.names),r.forEach((r=>{r.baseUrl||(r.baseUrl=e.baseUrl||"/")})),e.refSeqs&&"string"==typeof e.refSeqs&&(e.refSeqs=new URL(e.refSeqs,e.sourceUrl).href),e.nameUrl&&(e.nameUrl=new URL(e.nameUrl,e.sourceUrl).href)}return e.stores=e.stores||{},(e.tracks||[]).forEach((r=>{if(r.config){const e=r.config;r.config=void 0,r={...e,...r}}if(r.store)return;let t;t="FeatureTrack"===r.type?"JBrowse/View/Track/HTMLFeatures":"ImageTrack"===r.type?"JBrowse/View/Track/FixedImage":"ImageTrack.Wiggle"===r.type?"JBrowse/View/Track/FixedImage/Wiggle":"SequenceTrack"===r.type?"JBrowse/View/Track/Sequence":p("JBrowse/View/Track",r.type),r.type=t,d(e,r),r.histograms&&(r.histograms.baseUrl||(r.histograms.baseUrl=r.baseUrl),d(e,r.histograms))})),e}function p(e,r){return r?(r.includes("/")||(r=`${e}/${r}`),r=r.replace(/^\//,"")):""}function d(e,r){const{urlTemplate:t=""}=r,o=r.storeClass?p("JBrowse/Store",r.storeClass):function(e,r){return e?e.type?.includes("/FixedImage")?"JBrowse/Store/TiledImage/Fixed"+(0===e.backendVersion?"_v0":""):/\.jsonz?$/i.test(r)?"JBrowse/Store/SeqFeature/NCList"+(0===e.backendVersion?"_v0":""):/\.bam$/i.test(r)?"JBrowse/Store/SeqFeature/BAM":/\.cram$/i.test(r)?"JBrowse/Store/SeqFeature/CRAM":/\.gff3?$/i.test(r)?"JBrowse/Store/SeqFeature/GFF3":/\.bed$/i.test(r)?"JBrowse/Store/SeqFeature/BED":/\.vcf.b?gz$/i.test(r)?"JBrowse/Store/SeqFeature/VCFTabix":/\.gff3?.b?gz$/i.test(r)?"JBrowse/Store/SeqFeature/GFF3Tabix":/\.bed.b?gz$/i.test(r)?"JBrowse/Store/SeqFeature/BEDTabix":/\.(bw|bigwig)$/i.test(r)?"JBrowse/Store/SeqFeature/BigWig":/\.(bb|bigbed)$/i.test(r)?"JBrowse/Store/SeqFeature/BigBed":/\.(fa|fasta)$/i.test(r)?"JBrowse/Store/SeqFeature/IndexedFasta":/\.(fa|fasta)\.b?gz$/i.test(r)?"JBrowse/Store/SeqFeature/BgzipIndexedFasta":/\.2bit$/i.test(r)?"JBrowse/Store/SeqFeature/TwoBit":e.type?.endsWith("/Sequence")?"JBrowse/Store/Sequence/StaticChunked":"":""}(r,t);if(!o)return void console.warn(`Unable to determine an appropriate data store to use with track '${r.label}', please explicitly specify a storeClass in the configuration.`);const n={...r,type:o};n.name="JBrowse/Store/Sequence/StaticChunked"!==o&&"JBrowse/Store/Sequence/IndexedFasta"!==o&&"JBrowse/Store/SeqFeature/IndexedFasta"!==o&&"JBrowse/Store/SeqFeature/BgzipIndexedFasta"!==o&&"JBrowse/Store/SeqFeature/TwoBit"!==o&&"JBrowse/Store/Sequence/TwoBit"!==o&&!r.useAsRefSeqStore||e.stores?.refseqs?`store${(0,s.objectHash)(n)}`:"refseqs",e.stores||(e.stores={}),e.stores[n.name]=n,r.store=n.name}function y(e){return void 0!==e.uri}function h(e){return void 0!==e.localPath}async function w(e={uri:"",locationType:"UriLocation"},r={include:["{dataRoot}/trackList.json","{dataRoot}/tracks.conf"]},t={uri:"",locationType:"UriLocation"}){const o="uri"in e?"uri":"localPath",s=JSON.parse(JSON.stringify(e));let n="";if(y(e)&&(n=e.uri),h(e)&&(n=e.localPath),n.endsWith("/")&&(s[o]=n.slice(0,-1)),y(t)&&t.uri||h(t)&&t.localPath){const e="uri"in t?"uri":"localPath";let r="";y(t)&&(r=t.uri),h(t)&&(r=t.localPath),r.endsWith("/")&&(r=r.slice(0,-1));let n={};for(const t of["jbrowse.conf","jbrowse_conf.json"]){let o=null;try{o=await g({[e]:`${r}/${t}`})}catch(e){console.error(`tried to access ${r}/${t}, but failed`)}n=S(n,o)||{}}return s[o]&&(n.dataRoot=s[o]),b(n)}const a=f(r,window.location.href);return s[o]&&(a.dataRoot=s[o]),b(a)}async function b(e,r=j){const t=l(structuredClone(r),e);let o=await async function(e){return async function r(t,o){const s=t.sourceUrl||t.baseUrl;if(!s)throw new Error(`Could not determine source URL: ${JSON.stringify(t)}`);const n=S(structuredClone(o),t);if(!n)throw new Error("Problem merging configs");const a=k(function(e){return e?(Array.isArray(e)||(e=[e]),e.map((e=>("string"==typeof e&&(e={url:e}),"format"in e||(e.format=e.url.endsWith(".conf")?"conf":"JB_json"),"JB_json"!==e.format||"version"in e||(e.version=1),e)))):[]}(t.include||[]),n);t.include=void 0;const i=a.map((async t=>(t.cacheBuster=e.cacheBuster,r(await g({uri:new URL(t.url,s).href,locationType:"UriLocation"}),n))));return(await Promise.all(i)).forEach((e=>{t=S(t,e)||t})),t}(e=structuredClone(e),{})}(t);return o=S(o,e)||o,k(o,o),function(e){if(e.tracks||(e.tracks=[]),!e.baseUrl)throw new Error("Must provide a `baseUrl` in configuration")}(o),o}async function g(e){const r=await(0,o.openLocation)(e).readFile("utf8");return y(e)?m(r,e.uri):h(e)?m(r,e.localPath):m(r)}function m(e,r=""){return e.trim().startsWith("{")?function(e,r){if("string"==typeof e){let t;try{t=JSON.parse(e)}catch(e){throw new Error(`${e} when parsing configuration.`)}return f(t,r)}return f(e,r)}(e,r):function(e,r){let t;try{t=function(e,r){let t,o,s,n=[];const i={tracks:{}};let u;function l(){if(void 0!==s){let e;try{const r=/^json:(.+)/i.exec(s);if(e=r?JSON.parse(r[1]):/^[+-]?[\d.,]+([eE][-+]?\d+)?$/.test(s)?Number.parseFloat(s.replaceAll(",","")):s,!t)throw new Error(`Error parsing in section ${n.join(" - ")}`);const u=[...n,...t].join(".");if("+="===o){let r=a()(i,u);r?Array.isArray(r)||(r=[r]):r=[],r.push(e),e=r}"true"===e&&(e=!0),"false"===e&&(e=!1),c()(i,u,e)}catch(e){throw new Error(`syntax error${r?` in ${r}`:""}${u?" at line "+(u-1):""}`)}}}return e.split(/\n|\r\n|\r/).forEach(((e,r)=>{u=r+1;const a=e.replace(/^\s*#.+/,"");let i;if(i=/^\s*\[([^\]]+)/.exec(a))l(),t=void 0,s=void 0,n=i[1].trim().split(/\s*\.\s*/),1===n.length&&"general"===n[0].toLowerCase()&&(n=[]);else if(i=a.match(void 0===s?/^([^+=]+)(\+?=)(.*)/:/^(\S[^+=]+)(\+?=)(.*)/))l(),t=i[1].trim().split(/\s*\.\s*/),[,,o]=i,"include"===[...n,...t].join(".")&&(o="+="),s=i[3].trim();else if(void 0!==t&&(i=/^\s{0,4}\+\s*(.+)/.exec(a)))l(),o="+=",s=i[1].trim();else if(void 0!==s&&(i=/^\s+(\S.*)/.exec(a))){const e=i[1];s+=s.length?` ${e.trim()}`:e.trim()}else l(),t=void 0,s=void 0})),l(),i}(e,r)}catch(e){throw new Error(`${e} when parsing configuration.`)}return f(t,r)}(e,r)}function S(e,r){if(null===r)return null;null===e&&(e={});for(const t of Object.keys(r))if("tracks"===t&&t in e){const o=e[t]||[],s=r[t]||[];if(!Array.isArray(o)||!Array.isArray(s))throw new Error(`Track config has not been properly regularized: ${o} ${s}`);e[t]=v(o,s)}else"datasets"!==t&&t in e&&"object"==typeof r[t]&&"object"==typeof e[t]?e[t]=l(e[t],r[t]):"dataRoot"===t?(void 0===e[t]||"data"===e[t]&&void 0!==r[t])&&(e[t]=r[t]):void 0!==e[t]&&void 0===r[t]||(e[t]=r[t]);return e}function v(e,r){if(!r.length)return e;const t={};return e.forEach(((e,r)=>{e.index=r,t[e.label]=e})),r.forEach((r=>{const o=t[r.label];o?S(o,r):e.push(r)})),e}function k(e,r){if(!e)return e;if(Array.isArray(e))for(let t=0;t<e.length;t+=1)e[t]=k(e[t],r);else if("object"==typeof e){const t=e;for(const e of Object.keys(t))t[e]=k(t[e],r)}else if("string"==typeof e)return function(e,r){return e.replaceAll(/{([\s\w.]+)}/g,((e,t)=>{t=t.replaceAll(/\s+/g,"");const o=a()(r,t);if(void 0!==o)return"function"==typeof o?o(t):o;if(r.callback){const e=r.callback.call(this,t);if(void 0!==e)return e}return e}))}(e,r);return e}const j={tracks:[],containerID:"GenomeBrowser",dataRoot:"data",show_tracklist:!0,show_nav:!0,show_menu:!0,show_overview:!0,show_fullviewlink:!0,update_browser_title:!0,updateBrowserURL:!0,refSeqs:"{dataRoot}/seq/refSeqs.json",include:["jbrowse.conf","jbrowse_conf.json"],nameUrl:"{dataRoot}/names/root.json",datasets:{_DEFAULT_EXAMPLES:!0,volvox:{url:"?data=sample_data/json/volvox",name:"Volvox Example"},modencode:{url:"?data=sample_data/json/modencode",name:"MODEncode Example"},yeast:{url:"?data=sample_data/json/yeast",name:"Yeast Example"}},highlightSearchedRegions:!1,highResolutionMode:"auto"}}}]);
//# sourceMappingURL=7911.9dafa1dd.chunk.js.map