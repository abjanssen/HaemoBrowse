"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1326],{11326:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var o=l(7552),n=l(68446),a=l(29499),r=l(36715),i=l(9937),c=l(58507),s=l(5401),h=l(49823),k=l(66395);const m=(0,n.observer)((function({onClose:e,model:t}){const{selectedBookmarks:l}=t,n=0===l.length,[m,u]=(0,o.useState)(l[0]?.highlight??"rgba(247, 129, 192, 0.35)");return o.createElement(h.Dialog,{open:!0,onClose:e,title:"Highlight bookmarks"},o.createElement(a.A,null,o.createElement(r.A,{variant:"h6"},"Bulk highlight selector"),o.createElement(i.A,{severity:"info"},n?o.createElement("span",null,"Use the checkboxes to select individual bookmarks to edit."):"Only selected bookmarks will be edited."),n?null:o.createElement(k.ColorPicker,{color:m,onChange:e=>u(e)})),o.createElement(c.A,null,o.createElement(s.A,{variant:"contained",color:"secondary",onClick:()=>e()},"Cancel"),o.createElement(s.A,{variant:"contained",color:"primary",onClick:()=>{t.updateBulkBookmarkHighlights(m),e()}},"Confirm")))}))}}]);
//# sourceMappingURL=1326.7a8bcff8.chunk.js.map