(this["webpackJsonparbitrage-react-app"]=this["webpackJsonparbitrage-react-app"]||[]).push([[4],{2819:function(e,t,a){"use strict";var r=a(5),n=a(1),o=a(70),i=a(0),c=a.n(i),l=(a(2),a(3)),u=a(11),s=a(48),d=a(23),v=a(248),m=a(74),b=a(72),p=a(24),f=a(12);var h=Object(u.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(n.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,left:"calc(-50% + -4px)",transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,a=e.classes,r=e.className,n=e.open,o=e.value,i=e.valueLabelDisplay;return"off"===i?t:c.a.cloneElement(t,{className:Object(l.default)(t.props.className,(n||"on"===i)&&a.open,a.thumb)},c.a.createElement("span",{className:Object(l.default)(a.offset,r)},c.a.createElement("span",{className:a.circle},c.a.createElement("span",{className:a.label},o))))}));function g(e,t){return e-t}function x(e,t,a){return Math.min(Math.max(t,e),a)}function y(e,t){return e.reduce((function(e,a,r){var n=Math.abs(t-a);return null===e||n<e.distance||n===e.distance?{distance:n,index:r}:e}),null).index}function O(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var r=e.changedTouches[a];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function k(e,t,a){return 100*(e-t)/(a-t)}function j(e,t,a){var r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var r=e.toString().split(".")[1];return r?r.length:0}(t)))}function w(e){var t=e.values,a=e.source,r=e.newValue,n=e.index;if(t[n]===r)return a;var i=Object(o.a)(t);return i[n]=r,i}function L(e){var t=e.sliderRef,a=e.activeIndex,r=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[data-index="'.concat(a,'"]')).focus(),r&&r(a)}var E={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},C=[],A=function(e){return e},R=c.a.forwardRef((function(e,t){var a=e["aria-label"],i=e["aria-labelledby"],u=e["aria-valuetext"],d=e.classes,R=e.className,V=e.color,$=void 0===V?"primary":V,N=e.component,S=void 0===N?"span":N,I=e.defaultValue,T=e.disabled,D=void 0!==T&&T,M=e.getAriaLabel,F=e.getAriaValueText,z=e.marks,B=void 0===z?C:z,P=e.max,Y=void 0===P?100:P,H=e.min,X=void 0===H?0:H,J=e.name,U=e.onChange,q=e.onChangeCommitted,K=e.onMouseDown,W=e.orientation,G=void 0===W?"horizontal":W,Q=e.step,Z=void 0===Q?1:Q,_=e.ThumbComponent,ee=void 0===_?"span":_,te=e.track,ae=void 0===te?"normal":te,re=e.value,ne=e.ValueLabelComponent,oe=void 0===ne?h:ne,ie=e.valueLabelDisplay,ce=void 0===ie?"off":ie,le=e.valueLabelFormat,ue=void 0===le?A:le,se=Object(r.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),de=Object(s.a)(),ve=c.a.useRef(),me=c.a.useState(-1),be=me[0],pe=me[1],fe=c.a.useState(-1),he=fe[0],ge=fe[1],xe=c.a.useRef(null!=re).current,ye=c.a.useState(I),Oe=ye[0],ke=ye[1],je=xe?re:Oe;var we=Array.isArray(je),Le=c.a.useRef(),Ee=we?Object(o.a)(je).sort(g):[je];Ee=Ee.map((function(e){return x(e,X,Y)}));var Ce=!0===B&&null!==Z?Object(o.a)(Array(Math.floor((Y-X)/Z)+1)).map((function(e,t){return{value:X+Z*t}})):B;Le.current={source:je};var Ae=Object(v.a)(),Re=Ae.isFocusVisible,Ve=Ae.onBlurVisible,$e=Ae.ref,Ne=c.a.useState(-1),Se=Ne[0],Ie=Ne[1],Te=c.a.useRef(),De=Object(p.a)($e,Te),Me=Object(p.a)(t,De),Fe=Object(b.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Re(e)&&Ie(t),ge(t)})),ze=Object(b.a)((function(){-1!==Se&&(Ie(-1),Ve()),ge(-1)})),Be=Object(b.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));ge(t)})),Pe=Object(b.a)((function(){ge(-1)})),Ye=Object(b.a)((function(e){var t,a=Number(e.currentTarget.getAttribute("data-index")),r=Ee[a],n=(Y-X)/10,o=Ce.map((function(e){return e.value})),i=o.indexOf(r);switch(e.key){case"Home":t=X;break;case"End":t=Y;break;case"PageUp":Z&&(t=r+n);break;case"PageDown":Z&&(t=r-n);break;case"ArrowRight":case"ArrowUp":t=Z?r+Z:o[i+1]||o[o.length-1];break;case"ArrowLeft":case"ArrowDown":t=Z?r-Z:o[i-1]||o[0];break;default:return}if(e.preventDefault(),Z&&(t=j(t,Z,X)),t=x(t,X,Y),we){var c=t;t=w({values:Ee,source:je,newValue:t,index:a}).sort(g),L({sliderRef:Te,activeIndex:t.indexOf(c)})}xe||ke(t),Ie(a),U&&U(e,t),q&&q(e,t)})),He=c.a.useRef(),Xe=G;"rtl"===de.direction&&"vertical"!==G&&(Xe+="-reverse");var Je=c.a.useCallback((function(e){var t,a,r=e.finger,n=e.move,o=void 0!==n&&n,i=e.values,c=e.source,l=Te.current.getBoundingClientRect(),u=l.width,s=l.height,d=l.bottom,v=l.left;if(t=0===Xe.indexOf("vertical")?(d-r.y)/s:(r.x-v)/u,-1!==Xe.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,X,Y),Z)a=j(a,Z,X);else{var m=Ce.map((function(e){return e.value}));a=m[y(m,a)]}a=x(a,X,Y);var b=0;if(we){var p=a;b=(a=w({values:i,source:c,newValue:a,index:b=o?He.current:y(i,a)}).sort(g)).indexOf(p),He.current=b}return{newValue:a,activeIndex:b}}),[Y,X,Xe,we,Z,Ce]),Ue=Object(b.a)((function(e){var t=O(e,ve);if(t){var a=Je({finger:t,move:!0,values:Ee,source:je}),r=a.newValue,n=a.activeIndex;L({sliderRef:Te,activeIndex:n,setActive:pe}),xe||ke(r),U&&U(e,r)}})),qe=Object(b.a)((function(e){var t=O(e,ve);if(t){var a=Je({finger:t,values:Ee,source:je}).newValue;pe(-1),"touchend"===e.type&&ge(-1),q&&q(e,a),ve.current=void 0;var r=Object(m.a)(Te.current);r.removeEventListener("mousemove",Ue),r.removeEventListener("mouseup",qe),r.removeEventListener("touchmove",Ue),r.removeEventListener("touchend",qe)}})),Ke=Object(b.a)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(ve.current=t.identifier);var a=O(e,ve),r=Je({finger:a,values:Ee,source:je}),n=r.newValue,o=r.activeIndex;L({sliderRef:Te,activeIndex:o,setActive:pe}),xe||ke(n),U&&U(e,n);var i=Object(m.a)(Te.current);i.addEventListener("touchmove",Ue),i.addEventListener("touchend",qe)}));c.a.useEffect((function(){var e=Te.current;e.addEventListener("touchstart",Ke);var t=Object(m.a)(e);return function(){e.removeEventListener("touchstart",Ke),t.removeEventListener("mousemove",Ue),t.removeEventListener("mouseup",qe),t.removeEventListener("touchmove",Ue),t.removeEventListener("touchend",qe)}}),[qe,Ue,Ke]);var We=Object(b.a)((function(e){K&&K(e),e.preventDefault();var t=O(e,ve),a=Je({finger:t,values:Ee,source:je}),r=a.newValue,n=a.activeIndex;L({sliderRef:Te,activeIndex:n,setActive:pe}),xe||ke(r),U&&U(e,r);var o=Object(m.a)(Te.current);o.addEventListener("mousemove",Ue),o.addEventListener("mouseup",qe)})),Ge=k(we?Ee[0]:X,X,Y),Qe=k(Ee[Ee.length-1],X,Y)-Ge,Ze=Object(n.a)({},E[Xe].offset(Ge),{},E[Xe].leap(Qe));return c.a.createElement(S,Object(n.a)({ref:Me,className:Object(l.default)(d.root,d["color".concat(Object(f.a)($))],R,D&&d.disabled,Ce.length>0&&Ce.some((function(e){return e.label}))&&d.marked,!1===ae&&d.trackFalse,{vertical:d.vertical}[G],{inverted:d.trackInverted}[ae]),onMouseDown:We},se),c.a.createElement("span",{className:d.rail}),c.a.createElement("span",{className:d.track,style:Ze}),c.a.createElement("input",{value:Ee.join(","),name:J,type:"hidden"}),Ce.map((function(e){var t,a=k(e.value,X,Y),r=E[Xe].offset(a);return t=!1===ae?-1!==Ee.indexOf(e.value):"normal"===ae&&(we?e.value>=Ee[0]&&e.value<=Ee[Ee.length-1]:e.value<=Ee[0])||"inverted"===ae&&(we?e.value<=Ee[0]||e.value>=Ee[Ee.length-1]:e.value>=Ee[0]),c.a.createElement(c.a.Fragment,{key:e.value},c.a.createElement("span",{style:r,className:Object(l.default)(d.mark,t&&d.markActive)}),c.a.createElement("span",{"aria-hidden":!0,style:r,className:Object(l.default)(d.markLabel,t&&d.markLabelActive)},e.label))})),Ee.map((function(e,t){var r=k(e,X,Y),n=E[Xe].offset(r);return c.a.createElement(oe,{key:t,valueLabelFormat:ue,valueLabelDisplay:ce,className:d.valueLabel,value:"function"===typeof ue?ue(e,t):ue,index:t,open:he===t||be===t||"on"===ce,disabled:D},c.a.createElement(ee,{className:Object(l.default)(d.thumb,d["thumbColor".concat(Object(f.a)($))],be===t&&d.active,D&&d.disabled,Se===t&&d.focusVisible),tabIndex:D?null:0,role:"slider",style:n,"data-index":t,"aria-label":M?M(t):a,"aria-labelledby":i,"aria-orientation":G,"aria-valuemax":Y,"aria-valuemin":X,"aria-valuenow":e,"aria-valuetext":F?F(e,t):u,onKeyDown:Ye,onFocus:Fe,onBlur:ze,onMouseOver:Be,onMouseLeave:Pe}))})))}));t.a=Object(u.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(d.i)(e.palette.primary.main,.62):Object(d.a)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(d.d)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(d.d)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(d.d)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(d.d)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(n.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(R)}}]);