(this["webpackJsonparbitrage-react-app"]=this["webpackJsonparbitrage-react-app"]||[]).push([[70],{1364:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext();a.a=r},1402:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext();a.a=r},1493:function(e,a,t){"use strict";var n=t(5),r=t(1),l=t(0),c=t.n(l),o=(t(2),t(3)),s=t(11),i=t(1402),m=c.a.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,m=void 0===s?"table":s,d=e.padding,u=void 0===d?"default":d,p=e.size,f=void 0===p?"medium":p,x=e.stickyHeader,E=void 0!==x&&x,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),w=c.a.useMemo((function(){return{padding:u,size:f,stickyHeader:E}}),[u,f,E]);return c.a.createElement(i.a.Provider,{value:w},c.a.createElement(m,Object(r.a)({ref:a,className:Object(o.default)(t.root,l,E&&t.stickyHeader)},g)))}));a.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(m)},1494:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=t.n(l),o=(t(2),t(3)),s=t(11),i=t(1364),m={variant:"head"},d=c.a.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,d=void 0===s?"thead":s,u=Object(r.a)(e,["classes","className","component"]);return c.a.createElement(i.a.Provider,{value:m},c.a.createElement(d,Object(n.a)({className:Object(o.default)(t.root,l),ref:a},u)))}));a.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1495:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=t.n(l),o=(t(2),t(3)),s=t(11),i=t(1364),m=c.a.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,m=void 0===s?"tr":s,d=e.hover,u=void 0!==d&&d,p=e.selected,f=void 0!==p&&p,x=Object(r.a)(e,["classes","className","component","hover","selected"]),E=c.a.useContext(i.a);return c.a.createElement(m,Object(n.a)({ref:a,className:Object(o.default)(t.root,l,E&&{head:t.head,footer:t.footer}[E.variant],u&&t.hover,f&&t.selected)},x))}));a.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(m)},1496:function(e,a,t){"use strict";var n=t(5),r=t(1),l=t(0),c=t.n(l),o=(t(2),t(3)),s=t(11),i=t(12),m=t(23),d=t(1402),u=t(1364),p=c.a.forwardRef((function(e,a){var t,l=e.align,s=void 0===l?"inherit":l,m=e.classes,p=e.className,f=e.component,x=e.padding,E=e.scope,g=e.size,w=e.sortDirection,b=e.variant,v=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=c.a.useContext(d.a),h=c.a.useContext(u.a);t=f||(h&&"head"===h.variant?"th":"td");var y=E;!y&&h&&"head"===h.variant&&(y="col");var j=x||(N&&N.padding?N.padding:"default"),O=g||(N&&N.size?N.size:"medium"),k=b||h&&h.variant,C=null;return w&&(C="asc"===w?"ascending":"descending"),c.a.createElement(t,Object(r.a)({ref:a,className:Object(o.default)(m.root,m[k],p,"inherit"!==s&&m["align".concat(Object(i.a)(s))],"default"!==j&&m["padding".concat(Object(i.a)(j))],"medium"!==O&&m["size".concat(Object(i.a)(O))],{head:N&&N.stickyHeader&&m.stickyHeader}[k]),"aria-sort":C,scope:y},v))}));a.a=Object(s.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(m.i)(Object(m.d)(e.palette.divider,1),.88):Object(m.a)(Object(m.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1497:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=t.n(l),o=(t(2),t(3)),s=t(11),i=t(1364),m={variant:"body"},d=c.a.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,d=void 0===s?"tbody":s,u=Object(r.a)(e,["classes","className","component"]);return c.a.createElement(i.a.Provider,{value:m},c.a.createElement(d,Object(n.a)({className:Object(o.default)(t.root,l),ref:a},u)))}));a.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},2808:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(0),l=t.n(r),c=t(201),o=t(1319),s=t(658),i=t(1309),m=t(441),d=t(1310),u=t(1341),p=t(1335),f=t(15),x=t(6),E=t(247),g=t(53),w=t.n(g),b="[PROJECT DASHBOARD APP] GET WIDGETS";var v="[PROJECT DASHBOARD APP] GET PROJECTS";var N=t(64),h=t(9),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(h.a)({},a.payload);default:return e}},j=t(13),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(j.a)(a.payload);default:return e}},k=Object(N.d)({widgets:y,projects:O}),C=t(440),S=t.n(C),R=t(3),B=t(202),T=t(661);var H=l.a.memo((function(e){var a=Object(r.useState)(e.widget.currentRange),t=Object(n.a)(a,2),o=t[0],m=t[1];return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement(T.a,{className:"px-12",native:!0,value:o,onChange:function(e){m(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.widget.ranges).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement("option",{key:t,value:t},r)}))),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"text-center pt-12 pb-28"},l.a.createElement(c.a,{className:"text-72 leading-none text-blue"},e.widget.data.count[o]),l.a.createElement(c.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),l.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},l.a.createElement(c.a,{className:"text-15 flex w-full",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",l.a.createElement("b",{className:"px-8"},e.widget.data.extra.count[o]))))}));var A=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement(c.a,{className:"text-16 px-12"},e.widget.title),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"text-center pt-12 pb-28"},l.a.createElement(c.a,{className:"text-72 leading-none text-red"},e.widget.data.count),l.a.createElement(c.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),l.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},l.a.createElement(c.a,{className:"text-15 flex w-full",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",l.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))}));var P=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement(c.a,{className:"text-16 px-12"},e.widget.title),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"text-center pt-12 pb-28"},l.a.createElement(c.a,{className:"text-72 leading-none text-orange"},e.widget.data.count),l.a.createElement(c.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),l.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},l.a.createElement(c.a,{className:"text-15 flex w-full",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",l.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))}));var M=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement(c.a,{className:"text-16 px-12"},e.widget.title),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"text-center pt-12 pb-28"},l.a.createElement(c.a,{className:"text-72 leading-none text-green"},e.widget.data.count),l.a.createElement(c.a,{className:"text-16",color:"textSecondary"},e.widget.data.label)),l.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},l.a.createElement(c.a,{className:"text-15 flex w-full",color:"textSecondary"},l.a.createElement("span",{className:"truncate"},e.widget.data.extra.label),":",l.a.createElement("b",{className:"px-8"},e.widget.data.extra.count))))})),D=t(1316),U=t(317),z=t(244);var L=l.a.memo((function(e){var a=Object(r.useState)("TW"),t=Object(n.a)(a,2),o=t[0],s=t[1],i=Object(z.a)(),m=S.a.merge({},e.widget);return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 py-16 border-b-1"},l.a.createElement(c.a,{className:"text-16"},m.title),l.a.createElement("div",{className:"items-center"},Object.entries(m.ranges).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement(D.a,{key:t,className:"normal-case shadow-none px-16",onClick:function(){s(t)},color:o===t?"secondary":"default",variant:o===t?"contained":"text"},r)})))),l.a.createElement("div",{className:"flex flex-row flex-wrap"},l.a.createElement("div",{className:"w-full md:w-1/2 p-8 min-h-420 h-420"},l.a.createElement(U.a,{data:{labels:m.mainChart[o].labels,datasets:m.mainChart[o].datasets.map((function(e,a){var t=i.palette[0===a?"primary":"secondary"];return Object(h.a)({},e,{borderColor:t.main,backgroundColor:t.main,pointBackgroundColor:t.dark,pointHoverBackgroundColor:t.main,pointBorderColor:t.contrastText,pointHoverBorderColor:t.contrastText})}))},options:m.mainChart.options})),l.a.createElement("div",{className:"flex w-full md:w-1/2 flex-wrap p-8"},Object.entries(m.supporting).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{key:t,className:"w-full sm:w-1/2 p-12"},l.a.createElement(c.a,{className:"text-15 whitespace-no-wrap",color:"textSecondary"},r.label),l.a.createElement(c.a,{className:"text-32"},r.count[o]),l.a.createElement("div",{className:"h-64 w-full"},l.a.createElement(U.f,{data:{labels:r.chart[o].labels,datasets:r.chart[o].datasets.map((function(e,a){var t=i.palette.secondary;return Object(h.a)({},e,{borderColor:t.main,backgroundColor:t.main,pointBackgroundColor:t.dark,pointHoverBackgroundColor:t.main,pointBorderColor:t.contrastText,pointHoverBorderColor:t.contrastText})}))},options:r.chart.options})))})))))}));var _=l.a.memo((function(e){var a=Object(r.useState)(e.widget.currentRange),t=Object(n.a)(a,2),o=t[0],s=t[1],i=S.a.merge({},e.widget);return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},i.title),l.a.createElement(T.a,{native:!0,value:o,onChange:function(e){s(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(i.ranges).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement("option",{key:t,value:t},r)})))),l.a.createElement("div",{className:"h-400 w-full p-32"},l.a.createElement(U.d,{data:{labels:i.mainChart.labels,datasets:i.mainChart.datasets[o]},options:i.mainChart.options})),l.a.createElement("div",{className:"flex items-center p-8 border-t-1"},l.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16 border-r-1"},l.a.createElement(c.a,{className:"text-32 leading-none"},i.footerLeft.count[o]),l.a.createElement(c.a,{className:"text-15",color:"textSecondary"},i.footerLeft.title)),l.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16"},l.a.createElement(c.a,{className:"text-32 leading-none"},i.footerRight.count[o]),l.a.createElement(c.a,{className:"text-15",color:"textSecondary"},i.footerRight.title))))})),I=t(1267),J=t(1268),W=t(1311),$=t(1339);var G=l.a.memo((function(e){var a=Object(r.useState)(e.widget.currentRange),t=Object(n.a)(a,2),o=t[0],m=t[1];return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},e.widget.title),l.a.createElement(T.a,{native:!0,value:o,onChange:function(e){m(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.widget.ranges).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement("option",{key:t,value:t},r)})))),l.a.createElement(I.a,null,e.widget.schedule[o].map((function(e){return l.a.createElement(J.a,{key:e.id},l.a.createElement(W.a,{primary:e.title,secondary:e.time}),l.a.createElement($.a,null,l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))))}))))}));var Y=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},e.widget.title)),l.a.createElement("div",{className:"h-400 w-full p-32"},l.a.createElement(U.d,{data:{labels:e.widget.mainChart.labels,datasets:e.widget.mainChart.datasets},options:e.widget.mainChart.options})))})),q=t(1331);var F=l.a.memo((function(e){var a=Object(r.useState)(e.widget.currentRange),t=Object(n.a)(a,2),o=t[0],s=t[1],i=S.a.merge({},e.widget),m=Object(z.a)();return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},i.title),l.a.createElement(T.a,{native:!0,value:o,onChange:function(e){s(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(i.ranges).map((function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement("option",{key:t,value:t},r)})))),["weeklySpent","totalSpent","remaining"].map((function(e){return l.a.createElement("div",{className:"flex flex-wrap items-center w-full p-8",key:e},l.a.createElement("div",{className:"flex flex-col w-full sm:w-1/2 p-8"},l.a.createElement(c.a,{className:"text-14",color:"textSecondary"},i[e].title),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(c.a,{className:"text-32",color:"textSecondary"},"$"),l.a.createElement(c.a,{className:"text-32 mx-4"},i[e].count[o]))),l.a.createElement("div",{className:"flex w-full sm:w-1/2 p-8"},l.a.createElement("div",{className:"h-48 w-full"},l.a.createElement(U.f,{data:{labels:i[e].chart[o].labels,datasets:i[e].chart[o].datasets.map((function(e,a){var t=m.palette.secondary;return Object(h.a)({},e,{borderColor:t.main,backgroundColor:t.main,pointBackgroundColor:t.dark,pointHoverBackgroundColor:t.main,pointBorderColor:t.contrastText,pointHoverBorderColor:t.contrastText})}))},options:i[e].chart.options}))))})),l.a.createElement(q.a,null),l.a.createElement("div",{className:"flex flex-col w-full px-16 py-24"},l.a.createElement(c.a,{className:"text-14",color:"textSecondary"},i.totalBudget.title),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(c.a,{className:"text-32",color:"textSecondary"},"$"),l.a.createElement(c.a,{className:"text-32 mx-4"},i.totalBudget.count))))})),K=t(1493),Q=t(1494),V=t(1495),X=t(1496),Z=t(1497);var ee=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},e.widget.title)),l.a.createElement("div",{className:"table-responsive"},l.a.createElement(K.a,{className:"w-full min-w-full"},l.a.createElement(Q.a,null,l.a.createElement(V.a,null,e.widget.table.columns.map((function(e){return l.a.createElement(X.a,{key:e.id,className:"whitespace-no-wrap"},e.title)})))),l.a.createElement(Z.a,null,e.widget.table.rows.map((function(e){return l.a.createElement(V.a,{key:e.id},e.cells.map((function(e){switch(e.id){case"budget_type":return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row"},l.a.createElement(c.a,{className:Object(R.default)(e.classes,"inline text-11 font-500 px-8 py-4 rounded-4")},e.value));case"spent_perc":return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row"},l.a.createElement(c.a,{className:Object(R.default)(e.classes,"flex items-center")},e.value,l.a.createElement(i.a,{className:"text-14 mx-4"},e.icon)));default:return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row"},l.a.createElement(c.a,{className:e.classes},e.value))}})))}))))))})),ae=t(1343);var te=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},l.a.createElement(c.a,{className:"text-16"},e.widget.title),l.a.createElement(c.a,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},e.widget.table.rows.length+" Members")),l.a.createElement("div",{className:"table-responsive"},l.a.createElement(K.a,{className:"w-full min-w-full",size:"small"},l.a.createElement(Q.a,null,l.a.createElement(V.a,null,e.widget.table.columns.map((function(e){switch(e.id){case"avatar":return l.a.createElement(X.a,{key:e.id,className:"whitespace-no-wrap p-8 px-16"},e.title);default:return l.a.createElement(X.a,{key:e.id,className:"whitespace-no-wrap"},e.title)}})))),l.a.createElement(Z.a,null,e.widget.table.rows.map((function(e){return l.a.createElement(V.a,{key:e.id},e.cells.map((function(e){switch(e.id){case"avatar":return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row",className:"px-16"},l.a.createElement(ae.a,{src:e.value}));case"name":return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row",className:"truncate font-600"},e.value);default:return l.a.createElement(X.a,{key:e.id,component:"th",scope:"row",className:"truncate"},e.value)}})))}))))))})),ne=t(89),re=t.n(ne);var le=l.a.memo((function(){var e=Object(r.useState)(re()()),a=Object(n.a)(e,2),t=a[0],o=a[1],m=Object(r.useRef)();function d(){o(re()())}return Object(r.useEffect)((function(){return m.current=setInterval(d,1e3),function(){clearInterval(m.current)}})),l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement(c.a,{className:"text-16 px-12"},t.format("dddd, HH:mm:ss")),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"text-center px-24 py-32"},l.a.createElement(c.a,{className:"text-24 leading-tight",color:"textSecondary"},t.format("MMMM")),l.a.createElement(c.a,{className:"text-72 leading-tight",color:"textSecondary"},t.format("D")),l.a.createElement(c.a,{className:"text-24 leading-tight",color:"textSecondary"},t.format("Y"))))}));var ce=l.a.memo((function(e){return l.a.createElement(B.a,{className:"w-full rounded-8 shadow-none border-1"},l.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"},l.a.createElement("div",{className:"flex items-center px-12"},l.a.createElement(i.a,{color:"action"},"location_on"),l.a.createElement(c.a,{className:"text-16 mx-8"},e.widget.locations[e.widget.currentLocation].name)),l.a.createElement(s.a,{"aria-label":"more"},l.a.createElement(i.a,null,"more_vert"))),l.a.createElement("div",{className:"flex items-center justify-center p-16 pb-32"},l.a.createElement(i.a,{className:"meteocons text-40 ltr:mr-8 rtl:ml-8",color:"action"},e.widget.locations[e.widget.currentLocation].icon),l.a.createElement(c.a,{className:"text-44 mx-8",color:"textSecondary"},e.widget.locations[e.widget.currentLocation].temp[e.widget.tempUnit]),l.a.createElement(c.a,{className:"text-48 font-300",color:"textSecondary"},"\xb0"),l.a.createElement(c.a,{className:"text-44 font-300",color:"textSecondary"},"C")),l.a.createElement(q.a,null),l.a.createElement("div",{className:"flex justify-between items-center p-16"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{className:"meteocons text-14",color:"action"},"windy"),l.a.createElement(c.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].windSpeed[e.widget.speedUnit]),l.a.createElement(c.a,{color:"textSecondary"},e.widget.speedUnit)),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{className:"meteocons text-14",color:"action"},"compass"),l.a.createElement(c.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].windDirection)),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{className:"meteocons text-14",color:"action"},"rainy"),l.a.createElement(c.a,{className:"mx-4"},e.widget.locations[e.widget.currentLocation].rainProbability))),l.a.createElement(q.a,null),l.a.createElement("div",{className:"w-full py-16"},e.widget.locations[e.widget.currentLocation].next3Days.map((function(a){return l.a.createElement("div",{className:"flex items-center justify-between w-full py-16 px-24",key:a.name},l.a.createElement(c.a,{className:"text-15"},a.name),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{className:"meteocons text-24 ltr:mr-16 rtl:ml-16",color:"action"},a.icon),l.a.createElement(c.a,{className:"text-20"},a.temp[e.widget.tempUnit]),l.a.createElement(c.a,{className:"text-20",color:"textSecondary"},"\xb0"),l.a.createElement(c.a,{className:"text-20",color:"textSecondary"},e.widget.tempUnit)))}))))})),oe=t(1275),se=Object(oe.a)((function(e){return{content:{"& canvas":{maxHeight:"100%"}},selectedProject:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 0 0 0"},projectMenuButton:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"0 8px 0 0",marginLeft:1}}}));a.default=Object(E.a)("projectDashboardApp",k)((function(e){var a=Object(x.c)(),t=Object(x.d)((function(e){return e.projectDashboardApp.widgets})),E=Object(x.d)((function(e){return e.projectDashboardApp.projects})),g=se(e),N=Object(r.useRef)(null),h=Object(r.useState)(0),y=Object(n.a)(h,2),j=y[0],O=y[1],k=Object(r.useState)({id:1,menuEl:null}),C=Object(n.a)(k,2),B=C[0],T=C[1];return Object(r.useEffect)((function(){a(function(){var e=w.a.get("/api/project-dashboard-app/widgets");return function(a){return e.then((function(e){return a({type:b,payload:e.data})}))}}()),a(function(){var e=w.a.get("/api/project-dashboard-app/projects");return function(a){return e.then((function(e){return a({type:v,payload:e.data})}))}}())}),[a]),t&&E?l.a.createElement(f.t,{classes:{header:"min-h-160 h-160",toolbar:"min-h-48 h-48",rightSidebar:"w-288",content:g.content},header:l.a.createElement("div",{className:"flex flex-col justify-between flex-1 px-24 pt-24"},l.a.createElement("div",{className:"flex justify-between items-start"},l.a.createElement(c.a,{className:"py-0 sm:py-24",variant:"h4"},"Welcome back, John!"),l.a.createElement(o.a,{lgUp:!0},l.a.createElement(s.a,{onClick:function(e){return N.current.toggleRightSidebar()},"aria-label":"open left sidebar"},l.a.createElement(i.a,null,"menu")))),l.a.createElement("div",{className:"flex items-end"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("div",{className:Object(R.default)(g.selectedProject,"flex items-center h-40 px-16 text-16")},S.a.find(E,["id",B.id]).name),l.a.createElement(s.a,{className:Object(R.default)(g.projectMenuButton,"h-40 w-40 p-0"),"aria-owns":B.menuEl?"project-menu":void 0,"aria-haspopup":"true",onClick:function(e){T({id:B.id,menuEl:e.currentTarget})}},l.a.createElement(i.a,null,"more_horiz")),l.a.createElement(m.a,{id:"project-menu",anchorEl:B.menuEl,open:Boolean(B.menuEl),onClose:function(){T({id:B.id,menuEl:null})}},E&&E.map((function(e){return l.a.createElement(d.a,{key:e.id,onClick:function(a){var t;t=e.id,T({id:t,menuEl:null})}},e.name)})))))),contentToolbar:l.a.createElement(u.a,{value:j,onChange:function(e,a){O(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"off",className:"w-full border-b-1 px-24"},l.a.createElement(p.a,{className:"text-14 font-600 normal-case",label:"Home"}),l.a.createElement(p.a,{className:"text-14 font-600 normal-case",label:"Budget Summary"}),l.a.createElement(p.a,{className:"text-14 font-600 normal-case",label:"Team Members"})),content:l.a.createElement("div",{className:"p-12"},0===j&&l.a.createElement(f.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},l.a.createElement(H,{widget:t.widget1})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},l.a.createElement(A,{widget:t.widget2})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},l.a.createElement(P,{widget:t.widget3})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},l.a.createElement(M,{widget:t.widget4})),l.a.createElement("div",{className:"widget flex w-full p-12"},l.a.createElement(L,{widget:t.widget5})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},l.a.createElement(_,{widget:t.widget6})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},l.a.createElement(G,{widget:t.widget7}))),1===j&&l.a.createElement(f.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},l.a.createElement(Y,{widget:t.widget8})),l.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},l.a.createElement(F,{widget:t.widget9})),l.a.createElement("div",{className:"widget flex w-full p-12"},l.a.createElement(ee,{widget:t.widget10}))),2===j&&l.a.createElement(f.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},l.a.createElement("div",{className:"widget flex w-full p-12"},l.a.createElement(te,{widget:t.widget11})))),rightSidebarContent:l.a.createElement(f.e,{className:"w-full",enter:{animation:"transition.slideUpBigIn"}},l.a.createElement("div",{className:"widget w-full p-12"},l.a.createElement(le,null)),l.a.createElement("div",{className:"widget w-full p-12"},l.a.createElement(ce,{widget:t.weatherWidget}))),ref:N}):null}))}}]);