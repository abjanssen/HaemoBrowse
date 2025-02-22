"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8856],{28856:(e,t,i)=>{i.d(t,{doAfterAttach:()=>f});var n=i(99546),o=i(95095),a=i(27087),s=i(42489),r=i(36422),l=i(30385);function f(e){(0,r.addDisposer)(e,(0,s.autorun)((()=>{const t=(0,n.getContainingView)(e);if(!t.initialized||!t.views.every((e=>e.displayedRegions.length>0&&e.initialized)))return;const i=e.mainCanvas?.getContext("2d"),o=e.cigarClickMapCanvas?.getContext("2d");if(!i||!o)return;const a=e.height,s=t.width;i.clearRect(0,0,s,a),o.clearRect(0,0,s,a),(0,l.Ww)(e,i,o)}))),(0,r.addDisposer)(e,(0,s.autorun)((()=>{const t=(0,n.getContainingView)(e);t.initialized&&t.views.every((e=>e.displayedRegions.length>0&&e.initialized))&&(0,l.C4)(e)}))),(0,r.addDisposer)(e,(0,s.reaction)((()=>{const t=(0,n.getContainingView)(e);return{bpPerPx:t.views.map((e=>e.bpPerPx)),displayedRegions:JSON.stringify(t.views.map((e=>e.displayedRegions))),features:e.features,initialized:t.initialized&&t.views.every((e=>e.displayedRegions.length>0&&e.initialized))}}),(({initialized:t})=>{if(!t)return;const{level:i}=e,{assemblyManager:s}=(0,n.getSession)(e),l=(0,n.getContainingView)(e).views.map((e=>({...(0,r.getSnapshot)(e),width:e.width,staticBlocks:e.staticBlocks,interRegionPaddingWidth:e.interRegionPaddingWidth,minimumBlockWidth:e.minimumBlockWidth}))),f=[],c=e.features||[];for(const e of c){const t=e.get("mate");let n=e.get("start"),r=e.get("end");const c=t.start,d=t.end;-1===e.get("strand")&&([r,n]=[n,r]);const g=s.get(e.get("assemblyName")),h=s.get(t.assemblyName),u=e.get("refName"),m=t.refName,v=g?.getCanonicalRefName(u)||u,p=h?.getCanonicalRefName(m)||m,C=l[i],b=l[i+1],w=(0,o.eB)({self:C,refName:v,coord:n}),M=(0,o.eB)({self:C,refName:v,coord:r}),x=(0,o.eB)({self:b,refName:p,coord:c}),P=(0,o.eB)({self:b,refName:p,coord:d});if(void 0===w||void 0===M||void 0===x||void 0===P)continue;const y=e.get("CIGAR");f.push({p11:w,p12:M,p21:x,p22:P,f:e,cigar:a.aF.parseCigar(y)})}e.setFeatPositions(f)}),{fireImmediately:!0}))}},30385:(e,t,i)=>{i.d(t,{C4:()=>g,OX:()=>c,Ww:()=>d,xx:()=>a});var n=i(99546),o=i(79610);const a=16581375;function s(e){return`rgb(${Math.floor(e/65025)%255},${Math.floor(e/255)%255},${e%255})`}const r={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},l=3,f=1600;function c(e,t,i,n){return Math.floor((255*e*255+255*t+i-1)/n)}function d(e,t,i){const c=(0,n.getContainingView)(e),d=c.drawCurves,g=c.drawCIGAR,{level:h,height:u,featPositions:m}=e,v=c.width,p=c.views.map((e=>e.bpPerPx));i&&(i.imageSmoothingEnabled=!1),t.beginPath();const C=c.views.map((e=>e.offsetPx)),b=Math.floor(a/m.length);t.fillStyle=r.M,t.strokeStyle=r.M;for(const{p11:e,p12:i,p21:n,p22:o}of m){const a=e.offsetPx-C[h],s=i.offsetPx-C[h],r=n.offsetPx-C[h+1],c=o.offsetPx-C[h+1],g=Math.abs(s-a),m=Math.abs(c-r),p=0,b=u,w=(b-p)/2;g<=l&&m<=l&&r<v+f&&r>-f&&(t.moveTo(a,p),d?t.bezierCurveTo(a,w,r,w,r,b):t.lineTo(r,b))}t.stroke(),t.fillStyle=r.M,t.strokeStyle=r.M;for(const{p11:e,p12:b,p21:w,p22:M,f:x,cigar:P}of m){const m=e.offsetPx-C[h],y=b.offsetPx-C[h],k=w.offsetPx-C[h+1],S=M.offsetPx-C[h+1],T=Math.abs(y-m),R=Math.abs(S-k),N=Math.min(k,S),$=Math.max(k,S),I=0,W=u,z=(W-I)/2;if(!(T<=l&&R<=l)&&(0,n.doesIntersect2)(N,$,-f,c.width+f)){const e=x.get("strand"),n=-1===e?y:m,l=n<(-1===e?m:y)?1:-1,f=(k<S?1:-1)*e;let c=n,u=-1===e?S:k;if(P.length&&g){let e=!1,n=0,g=0;const m=Math.floor(a/P.length);for(let a=0;a<P.length;a+=2){const C=a*m+1,b=+P[a],w=P[a+1];e||(n=c,g=u);const M=b/p[h],x=b/p[h+1];if("M"===w||"="===w||"X"===w?(c+=M*l,u+=x*f):"D"===w||"N"===w?c+=M*l:"I"===w&&(u+=x*f),!(Math.max(n,g,c,u)<0||Math.min(n,g,c,u)>v)){const l=a<P.length-2;Math.abs(c-n)<=1&&Math.abs(u-g)<=1&&l?e=!0:(t.fillStyle=r[e&&M>1||x>1?w:"M"],e=!1,(0,o.$2)(t,n,c,I,u,g,W,z,d),t.fill(),i&&(i.fillStyle=s(C),(0,o.$2)(i,n,c,I,u,g,W,z,d),i.fill()))}}}else(0,o.$2)(t,m,y,I,S,k,W,z,d),t.fill()}}const w=e.clickMapCanvas?.getContext("2d");if(w){w.imageSmoothingEnabled=!1,w.clearRect(0,0,v,u);for(let e=0;e<m.length;e++){const t=m[e],i=e*b+1;w.fillStyle=s(i),(0,o.mr)({cb:e=>{e.fill()},feature:t,ctx:w,drawCurves:d,level:h,offsets:C,oobLimit:f,viewWidth:c.width,hideTiny:!0,height:u})}}}function g(e){const{level:t,clickId:i,mouseoverId:a}=e,s=(0,n.getContainingView)(e),r=s.drawCurves,l=e.height,c=s.width,d=e.mouseoverCanvas?.getContext("2d"),g=s.views.map((e=>e.offsetPx));if(!d)return;d.resetTransform(),d.scale(1,1),d.clearRect(0,0,c,l),d.strokeStyle="rgba(0, 0, 0, 0.9)",d.fillStyle="rgba(0, 0, 0, 0.1)";const h=e.featMap[a||""];h&&(0,o.mr)({cb:e=>{e.fill()},feature:h,level:t,ctx:d,oobLimit:f,viewWidth:s.width,drawCurves:r,offsets:g,height:l});const u=e.featMap[i||""];u&&(0,o.mr)({cb:e=>{e.stroke()},feature:u,ctx:d,level:t,oobLimit:f,viewWidth:s.width,drawCurves:r,offsets:g,height:l})}},79610:(e,t,i)=>{i.d(t,{$2:()=>s,Eg:()=>f,WT:()=>r,f0:()=>l,mr:()=>a});var n=i(99546),o=i(30385);function a({feature:e,ctx:t,offsets:i,level:o,cb:a,height:r,drawCurves:l,oobLimit:f,viewWidth:c,hideTiny:d}){const{p11:g,p12:h,p21:u,p22:m}=e,v=g.offsetPx-i[o],p=h.offsetPx-i[o],C=u.offsetPx-i[o+1],b=m.offsetPx-i[o+1],w=Math.abs(p-v),M=Math.abs(b-C),x=r,P=(x-0)/2,y=Math.min(C,b),k=Math.max(C,b);(0,n.doesIntersect2)(y,k,-f,c+f)&&(w<=1&&M<=1?d||(t.beginPath(),t.moveTo(v,0),l?t.bezierCurveTo(v,P,C,P,C,x):t.lineTo(C,x),t.stroke()):(s(t,v,p,0,b,C,x,P,l),a(t)))}function s(e,t,i,n,o,a,s,r,l){l?function(e,t,i,n,o,a,s,r){const l=Math.abs(t-i),f=Math.abs(t-i);if(l<5&&f<5&&i<t&&Math.abs(t-o)>100){const e=t;t=i,i=e}e.beginPath(),e.moveTo(t,n),e.lineTo(i,n),e.bezierCurveTo(i,r,o,r,o,s),e.lineTo(a,s),e.bezierCurveTo(a,r,t,r,t,n),e.closePath()}(e,t,i,n,o,a,s,r):function(e,t,i,n,o,a,s){e.beginPath(),e.moveTo(t,n),e.lineTo(i,n),e.lineTo(o,s),e.lineTo(a,s),e.closePath()}(e,t,i,n,o,a,s)}function r(e,t){const i=(0,n.getContainingView)(t),a=(0,n.getContainingTrack)(t),{featPositions:s,numFeats:r,clickMapCanvas:l,cigarClickMapCanvas:f,level:c}=t;if(!l||!f)return;const d=l.getBoundingClientRect(),g=l.getContext("2d"),h=f.getContext("2d");if(!g||!h)return;const u=e.clientX-d.left,m=e.clientY-d.top,[v,p,C]=g.getImageData(u,m,1,1).data,b=Math.floor(o.xx/r),w=s[(0,o.OX)(v,p,C,b)];if(w){const{f:e}=w;t.setClickId(e.id());const o=(0,n.getSession)(t);(0,n.isSessionModelWithWidgets)(o)&&o.showWidget(o.addWidget("SyntenyFeatureWidget","syntenyFeature",{view:i,track:a,featureData:e.toJSON(),level:c}))}return w}function l(e,t,i){e.preventDefault();const n=t.clickMapCanvas,a=t.cigarClickMapCanvas;if(!n||!a)return;const s=n.getBoundingClientRect(),r=n.getContext("2d"),l=a.getContext("2d");if(!r||!l)return;const{clientX:f,clientY:c}=e,d=f-s.left,g=c-s.top,[h,u,m]=r.getImageData(d,g,1,1).data,v=Math.floor(o.xx/t.numFeats),p=(0,o.OX)(h,u,m,v),C=t.featPositions[p];C&&(t.setClickId(C.f.id()),i({clientX:f,clientY:c,feature:C}))}function f({feature:e,cigarOp:t,cigarOpLen:i}){const o=e.toJSON(),a=o.mate,s=o.end-o.start,r=a.end-a.start,l=o.identity,f=o.name,c=a.name;return[`Loc1: ${(0,n.assembleLocString)(o)}`,`Loc2: ${(0,n.assembleLocString)(a)}`,`Inverted: ${-1===o.strand}`,`Query len: ${s.toLocaleString("en-US")}`,`Target len: ${r.toLocaleString("en-US")}`,l?`Identity: ${l.toPrecision(2)}`:"",t?`CIGAR operator: ${t}${i}`:"",f?`Name 1: ${f}`:"",c?`Name 2: ${c}`:""].filter((e=>!!e)).join("<br/>")}}}]);
//# sourceMappingURL=8856.844f512c.chunk.js.map