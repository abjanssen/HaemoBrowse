"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5524],{15524:(e,o,t)=>{t.d(o,{drawXY:()=>p});var r=t(68584),n=t(99546),a=t(87485),c=t(37347),s=t(75429);function f(e,o){const t=e.toHsl(),r=t.l*(1+o);return(0,a.M)({...t,l:(0,n.clamp)(r,0,100)})}function l(e,o){const t=e.toHsl(),r=t.l*(1-o);return(0,a.M)({...t,l:(0,n.clamp)(r,0,100)})}const i=.3,m=2;function p(e,o){const{features:t,bpPerPx:p,regions:u,scaleOpts:g,height:x,config:h,ticks:w,displayCrossHatches:d,offset:S=0,colorCallback:b,inverted:C,stopToken:M}=o,v=u[0],y=(v.end-v.start)/p,k=x-2*S,P=(0,r.readConfObject)(h,"filled"),T=(0,r.readConfObject)(h,"clipColor"),R=(0,r.readConfObject)(h,"summaryScoreMode"),j=(0,r.readConfObject)(h,"bicolorPivotValue"),O=(0,r.readConfObject)(h,"minSize"),W=(0,s.getScale)({...g,range:[0,k],inverted:C}),H=(0,s.getOrigin)(g.scaleType),_=W.domain(),I=_[0],N=_[1],E=e=>(0,n.clamp)(k-(W(e)||0),0,k)+S,F=e=>P?(e=>E(H)-E(e))(e):Math.max(O,1);let V=!1,Y=Number.NEGATIVE_INFINITY;const z=[],A=I<j&&N>j;let G=performance.now();if("whiskers"===R){let o,r;G=performance.now();for(const l of t.values()){performance.now()-G>400&&((0,c.SW)(M),G=performance.now());const[t,m]=(0,n.featureSpanPx)(l,v,p);if(l.get("summary")){const n=Math.max(m-t+i,O),c=l.get("maxScore"),p=b(l,c),u=A?p:p===o?r:r=f((0,a.M)(p),.4).toHex();(0,s.fillRectCtx)(t,E(c),n,F(c),e,u),o=p}}r=void 0,o=void 0,G=performance.now();for(const f of t.values()){performance.now()-G>400&&((0,c.SW)(M),G=performance.now());const[t,l]=(0,n.featureSpanPx)(f,v,p),m=f.get("score"),u=f.get("maxScore"),g=f.get("minScore"),x=f.get("summary"),h=b(f,m),w=A&&x?h===o?r:r=(0,a.M)(b(f,u)).mix((0,a.M)(b(f,g))).toString():h,d=Math.max(l-t+i,O);Math.floor(t)!==Math.floor(Y)&&(z.push(f),Y=t),V=V||m<I||m>N,(0,s.fillRectCtx)(t,E(m),d,F(m),e,w),o=h}r=void 0,o=void 0,G=performance.now();for(const f of t.values()){performance.now()-G>400&&((0,c.SW)(M),G=performance.now());const[t,m]=(0,n.featureSpanPx)(f,v,p);if(f.get("summary")){const n=f.get("minScore"),c=b(f,n),p=Math.max(m-t+i,O),u=A?c:c===o?r:r=l((0,a.M)(c),.4).toHex();(0,s.fillRectCtx)(t,E(n),p,F(n),e,u),o=c}}}else{G=performance.now();for(const o of t.values()){performance.now()-G>400&&((0,c.SW)(M),G=performance.now());const[t,r]=(0,n.featureSpanPx)(o,v,p);Math.floor(t)!==Math.floor(Y)&&(z.push(o),Y=t);const a=o.get("score"),f=b(o,a);V=V||a<I||a>N;const l=Math.max(r-t+i,O);if("max"===R){const r=o.get("summary")?o.get("maxScore"):a;(0,s.fillRectCtx)(t,E(r),l,F(r),e,f)}else if("min"===R){const r=o.get("summary")?o.get("minScore"):a;(0,s.fillRectCtx)(t,E(r),l,F(r),e,f)}else(0,s.fillRectCtx)(t,E(a),l,F(a),e,f)}}if(e.save(),V){e.fillStyle=T,G=performance.now();for(const o of t.values()){performance.now()-G>400&&((0,c.SW)(M),G=performance.now());const[t,r]=(0,n.featureSpanPx)(o,v,p),a=r-t+i,f=o.get("score");f>N?(0,s.fillRectCtx)(t,S,a,m,e):f<I&&"log"!==g.scaleType&&(0,s.fillRectCtx)(t,x,a,m,e)}}if(e.restore(),d){e.lineWidth=1,e.strokeStyle="rgba(200,200,200,0.5)";for(const o of w.values)e.beginPath(),e.moveTo(0,Math.round(E(o))),e.lineTo(y,Math.round(E(o))),e.stroke()}return{reducedFeatures:z}}}}]);
//# sourceMappingURL=5524.4e6b637c.chunk.js.map