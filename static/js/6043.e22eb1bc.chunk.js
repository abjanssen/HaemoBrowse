"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6043],{8424:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(7552),o=a(49823),l=a(29499),n=a(36715),c=a(1343),s=a(58507),d=a(5401);const i=(0,a(68446).observer)((function({model:e,handleClose:t}){const[a,i]=(0,r.useState)(""),m=/^[A-Za-z][A-Za-z0-9]$/.exec(a);return r.createElement(o.Dialog,{open:!0,onClose:t,title:"Color by tag"},r.createElement(l.A,{style:{overflowX:"hidden"}},r.createElement(n.A,null,"Enter tag to color by: "),r.createElement(n.A,{color:"textSecondary"},"Examples: XS or TS for RNA-seq inferred read strand, ts (lower-case) for minimap2 read strand, HP for haplotype, RG for read group, etc."),r.createElement(c.A,{value:a,onChange:e=>{i(e.target.value)},placeholder:"Enter tag name",error:2===a.length&&!m,helperText:2!==a.length||m?"":"Not a valid tag",autoComplete:"off",slotProps:{htmlInput:{maxLength:2}}}),r.createElement(s.A,null,r.createElement(d.A,{variant:"contained",color:"primary",onClick:()=>{e.setColorScheme({type:"tag",tag:a}),t()},disabled:!m},"Submit"),r.createElement(d.A,{variant:"contained",color:"secondary",onClick:t},"Cancel"))))}))}}]);
//# sourceMappingURL=6043.e22eb1bc.chunk.js.map