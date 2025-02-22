"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1961],{1185:(t,e,n)=>{n.d(e,{A:()=>o});var a=n(74893),r=n(69500);const o=(0,a.A)((0,r.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},14267:(t,e,n)=>{n.d(e,{x:()=>r});var a=n(26463);function r(t,...e){const n=a.w.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}},17515:(t,e,n)=>{n.d(e,{A:()=>h});var a=n(7552),r=n(93878),o=n(70799),i=n(51148),s=n(84893),u=n(4785),d=n(89663),l=n(69500);const c=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})((0,s.A)((({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]})))),h=a.forwardRef((function(t,e){const n=(0,u.b)({props:t,name:"MuiToolbar"}),{className:a,component:i="div",disableGutters:s=!1,variant:h="regular",...m}=n,f={...n,component:i,disableGutters:s,variant:h},g=(t=>{const{classes:e,disableGutters:n,variant:a}=t,r={root:["root",!n&&"gutters",a]};return(0,o.A)(r,d.U,e)})(f);return(0,l.jsx)(c,{as:i,className:(0,r.A)(g.root,a),ref:e,ownerState:f,...m})}))},25762:(t,e,n)=>{n.d(e,{A:()=>o});var a=n(74893),r=n(69500);const o=(0,a.A)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},26463:(t,e,n)=>{n.d(e,{w:()=>r});var a=n(45559);function r(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&a._P in t?t[a._P](e):t instanceof Date?new t.constructor(e):new Date(e)}},45559:(t,e,n)=>{n.d(e,{F6:()=>o,Nw:()=>r,_P:()=>i,w4:()=>a}),Math.pow(10,8);const a=864e5,r=43200,o=1440,i=Symbol.for("constructDateFrom")},55078:(t,e,n)=>{n.d(e,{m:()=>D});var a=n(26463);const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function d(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}var l;const c={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:(t,e,n,a)=>s[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(l.matchPattern);if(!n)return null;const a=n[0],r=t.match(l.parsePattern);if(!r)return null;let o=l.valueCallback?l.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let h={};function m(){return h}var f=n(98862),g=n(14267),b=n(88865);function v(t,e){const n=+(0,b.a)(t)-+(0,b.a)(e);return n<0?-1:n>0?1:n}var w=n(45559);function y(t,e){const n=(0,b.a)(t,e?.in);return+function(t,e){const n=(0,b.a)(t,e?.in);return n.setHours(23,59,59,999),n}(n,e)==+function(t,e){const n=(0,b.a)(t,e?.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}(n,e)}function p(t,e,n){const[a,r,o]=(0,g.x)(n?.in,t,t,e),i=v(r,o),s=Math.abs(function(t,e,n){const[a,r]=(0,g.x)(n?.in,t,e);return 12*(a.getFullYear()-r.getFullYear())+(a.getMonth()-r.getMonth())}(r,o));if(s<1)return 0;1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-i*s);let u=v(r,o)===-i;y(a)&&1===s&&1===v(a,o)&&(u=!1);const d=i*(s-+u);return 0===d?0:d}function M(t,e,n){const a=function(t,e){return+(0,b.a)(t)-+(0,b.a)(e)}(t,e)/1e3;return(r=n?.roundingMethod,t=>{const e=(r?Math[r]:Math.trunc)(t);return 0===e?0:e})(a);var r}function D(t,e){return function(t,e,n){const a=m(),r=n?.locale??a.locale??c,o=v(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:o}),[s,u]=(0,g.x)(n?.in,...o>0?[e,t]:[t,e]),d=M(u,s),l=((0,f.G)(u)-(0,f.G)(s))/1e3,h=Math.round((d-l)/60);let b;if(h<2)return n?.includeSeconds?d<5?r.formatDistance("lessThanXSeconds",5,i):d<10?r.formatDistance("lessThanXSeconds",10,i):d<20?r.formatDistance("lessThanXSeconds",20,i):d<40?r.formatDistance("halfAMinute",0,i):d<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):0===h?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",h,i);if(h<45)return r.formatDistance("xMinutes",h,i);if(h<90)return r.formatDistance("aboutXHours",1,i);if(h<w.F6){const t=Math.round(h/60);return r.formatDistance("aboutXHours",t,i)}if(h<2520)return r.formatDistance("xDays",1,i);if(h<w.Nw){const t=Math.round(h/w.F6);return r.formatDistance("xDays",t,i)}if(h<2*w.Nw)return b=Math.round(h/w.Nw),r.formatDistance("aboutXMonths",b,i);if(b=p(u,s),b<12){const t=Math.round(h/w.Nw);return r.formatDistance("xMonths",t,i)}{const t=b%12,e=Math.trunc(b/12);return t<3?r.formatDistance("aboutXYears",e,i):t<9?r.formatDistance("overXYears",e,i):r.formatDistance("almostXYears",e+1,i)}}(t,function(t){return(0,a.w)(t,Date.now())}(t),e)}},88865:(t,e,n)=>{n.d(e,{a:()=>r});var a=n(26463);function r(t,e){return(0,a.w)(e||t,t)}},89663:(t,e,n)=>{n.d(e,{A:()=>i,U:()=>o});var a=n(33761),r=n(85693);function o(t){return(0,r.Ay)("MuiToolbar",t)}const i=(0,a.A)("MuiToolbar",["root","gutters","regular","dense"])},98862:(t,e,n)=>{n.d(e,{G:()=>r});var a=n(88865);function r(t){const e=(0,a.a)(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}}}]);
//# sourceMappingURL=1961.1285b9e5.chunk.js.map