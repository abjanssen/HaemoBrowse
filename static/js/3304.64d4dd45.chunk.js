"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3304],{36917:(r,o,e)=>{e.d(o,{DW:()=>_,L9:()=>i,pf:()=>n,sY:()=>a,w7:()=>s});var t=e(86576);const n={color_fwd_strand_not_proper:"#ECC8C8",color_rev_strand_not_proper:"#BEBED8",color_fwd_strand:"#EC8B8B",color_rev_strand:"#8F8FD8",color_fwd_missing_mate:"#D11919",color_rev_missing_mate:"#1919D1",color_fwd_diff_chr:"#000",color_rev_diff_chr:"#969696",color_pair_lr:"#c8c8c8",color_pair_rr:"navy",color_pair_rl:"teal",color_pair_ll:"green",color_nostrand:"#c8c8c8",color_interchrom:"purple",color_longinsert:"red",color_shortinsert:"pink",color_unknown:"grey"},s={color_fwd_strand_not_proper:"#CA6767",color_rev_strand_not_proper:"#7272AA",color_fwd_strand:"#DC2A2A",color_rev_strand:"#4141BA",color_fwd_missing_mate:"#921111",color_rev_missing_mate:"#111192",color_fwd_diff_chr:"#000000",color_rev_diff_chr:"#696969",color_pair_lr:"#8C8C8C",color_pair_rr:"#00005A",color_pair_rl:"#005A5A",color_pair_ll:"#005A00",color_nostrand:"#8C8C8C",color_interchrom:"#5A005A",color_longinsert:"#B30000",color_shortinsert:"#FF3A5C",color_unknown:"grey"};function i(r,o,e){const t=r.refName===o.refName,i=Math.abs(r.tlen||0);return t&&i>(e?.upper||0)?[n.color_longinsert,s.color_longinsert]:t&&i<(e?.lower||0)?[n.color_shortinsert,s.color_shortinsert]:t?void 0:[n.color_interchrom,s.color_interchrom]}const l=[n.color_unknown,n.color_unknown];function a(r,o,e){return c(r)||i(r,o,e)||l}function c(r){const o=t.il.fr[r.pair_orientation||""],e=t.rr[o];return"LR"===o?void 0:[n[e],s[e]]}function _(r){return c(r)||l}},63304:(r,o,e)=>{e.d(o,{drawFeats:()=>c});var t=e(99546),n=e(95805),s=e(36917),i=e(91476);function l(r){return 2*Math.random()*r-r}function a(r,o,e,t){r.strokeStyle=t,r.beginPath(),r.moveTo(o,0),r.lineTo(o,e),r.stroke()}function c(r,o,e,c){const{chainData:_,colorBy:f,drawInter:d,drawLongRange:g,lineWidthSetting:p,jitterVal:h}=r;if(!_)return;const m=(0,t.getContainingView)(r),{assemblyManager:u}=(0,t.getSession)(r),{chains:w,stats:v}=_,k=(0,i.dv)(_),C=u.get(m.assemblyNames[0]),b=f?.type||"insertSizeAndOrientation";if(C){o.lineWidth=p;for(const r of w)if(1===r.length&&g){const o=r[0];if(!k||8&o.flags){const r=[o,...(0,n.featurizeSA)(o.SA,o.id,o.strand,o.name)].sort(((r,o)=>r.clipPos-o.clipPos));for(let o=0;o<r.length-1;o++)y(r[o],r[o+1],C,!0)}else y(o,{refName:o.next_ref||"",start:o.next_pos||0,end:o.next_pos||0,strand:o.strand},C,!0)}else{const o=k?r.filter((r=>!(2048&r.flags||8&r.flags))):r.sort(((r,o)=>r.clipPos-o.clipPos)).filter((r=>!(256&r.flags)));for(let r=0;r<o.length-1;r++)y(o[r],o[r+1],C,!1)}}function y(r,e,t,n){const i=r.strand,_=e.strand,f=-1===_,g=-1===i?r.start:r.end,p=k?f?e.start:e.end:f?e.end:e.start,u=t.getCanonicalRefName(r.refName)||r.refName,w=t.getCanonicalRefName(e.refName)||e.refName,C=m.bpToPx({refName:u,coord:g})?.offsetPx,y=m.bpToPx({refName:w,coord:p})?.offsetPx;if(void 0!==C&&void 0!==y){const t=(y-C)/2,f=Math.abs(t),d=C-m.offsetPx,g=y-m.offsetPx,p=f>1e4;n&&p?(o.moveTo(d,0),o.beginPath()):(o.beginPath(),o.moveTo(d,0)),n&&p?o.strokeStyle="red":k?"insertSizeAndOrientation"===b?o.strokeStyle=(0,s.sY)(r,e,v)[0]:"orientation"===b?o.strokeStyle=(0,s.DW)(r)[0]:"insertSize"===b?o.strokeStyle=(0,s.L9)(r,e,v)?.[0]||"grey":"gradient"===b&&(o.strokeStyle=`hsl(${10*Math.log10(f)},50%,50%)`):"orientation"===b||"insertSizeAndOrientation"===b?o.strokeStyle=-1===i&&1===_?"navy":1===i&&-1===_?"green":"grey":"gradient"===b&&(o.strokeStyle=`hsl(${10*Math.log10(f)},50%,50%)`);const u=d+2*t,w=Math.min(c+l(h),f);n?f>1e5?(a(o,d+l(h),c,"red"),a(o,g+l(h),c,"red")):p?(o.arc(d+t+l(h),0,f,0,Math.PI),o.stroke()):(o.bezierCurveTo(d+l(h),w,u,w,u+l(h),0),o.stroke()):(o.bezierCurveTo(d+l(h),w,u,w,u+l(h),0),o.stroke())}else C&&d&&a(o,C-m.offsetPx,c,"purple")}}}}]);
//# sourceMappingURL=3304.64d4dd45.chunk.js.map