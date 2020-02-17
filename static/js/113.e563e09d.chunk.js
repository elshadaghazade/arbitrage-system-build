(this["webpackJsonparbitrage-react-app"]=this["webpackJsonparbitrage-react-app"]||[]).push([[113],{2802:function(e,a,t){"use strict";t.r(a);var n=t(18),c=t(0),l=t.n(c),r=t(1309),s=t(201),o=t(650),i=t(660),m=t(661),f=t(442),p=t(1310),u=t(1333),d=t(1275),E=t(15),h=["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"],b={translateX:[0,"100%"],opacity:[1,0]},g=Object(d.a)({layoutRoot:{},box:{width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:16}});a.default=function(){var e=g(),a=Object(c.useState)("fade"),t=Object(n.a)(a,2),d=t[0],y=t[1],v=Object(c.useState)(b),x=Object(n.a)(v,2),N=x[0],w=x[1],j=Object(c.useRef)();return Object(c.useEffect)((function(){return j.current=setInterval((function(){w(Boolean(N)?null:b)}),1e3),function(){clearInterval(j.current)}})),l.a.createElement(E.t,{classes:{root:e.layoutRoot},header:l.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"flex items-center mb-16"},l.a.createElement(r.a,{className:"text-18",color:"action"},"home"),l.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(s.a,{color:"textSecondary"},"Documentation"),l.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(s.a,{color:"textSecondary"},"Fuse Components")),l.a.createElement(s.a,{variant:"h6"},"FuseAnimate"))),content:l.a.createElement("div",{className:"p-24 max-w-2xl"},l.a.createElement(s.a,{className:"mb-16",component:"p"},l.a.createElement("code",null,"FuseAnimate")," is a container component which uses ",l.a.createElement("code",null,"VelocityComponent")," of ",l.a.createElement("code",null,"velocity-react")," library."),l.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Predefined Effects Usage"),l.a.createElement(s.a,{className:"mb-16",component:"p"},"You can use predefined animation effects."),l.a.createElement(E.l,{component:"pre",className:"language-jsx"},'\n                                <FuseAnimate\n                                    animation="transition.'.concat(d,'In"\n                                    duration={400}\n                                    delay={400}\n                                >\n                                     <Card className={classes.box}>\n                                        <Typography>\n                                        {selectedEffect}\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             ')),l.a.createElement("div",{className:"flex flex-wrap p-48"},l.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},l.a.createElement(o.a,{className:"w-256"},l.a.createElement(i.a,{htmlFor:"effect-helper"},"Select Effect"),l.a.createElement(m.a,{value:d,onChange:function(e){y(e.target.value)},input:l.a.createElement(f.a,{name:"effect",id:"effect-helper"})},h.map((function(e){return l.a.createElement(p.a,{key:e,value:e},"transition.",e,"In")}))))),l.a.createElement("div",{className:"flex w-full sm:w-1/2 items-center justify-center"},l.a.createElement(E.d,{animation:d&&"transition."+d+"In",duration:400,delay:400},l.a.createElement(u.a,{className:e.box},l.a.createElement(s.a,null,d))))),l.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Custom Effects Usage"),l.a.createElement(s.a,{className:"mb-16",component:"p"},"You can create custom effects."),l.a.createElement(E.l,{component:"pre",className:"language-jsx"},"\n                                <FuseAnimate\n                                    animation={{\n                                        translateX: [0, '100%'],\n                                        opacity   : [1, 0]\n                                    }}\n                                    duration={400}\n                                    delay={400}\n                                >\n                                    <Card className={classes.box}>\n                                        <Typography>\n                                            Slide left and fade in\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             "),l.a.createElement("div",{className:"p-24 flex items-center justify-center"},l.a.createElement(E.d,{animation:N,duration:400,delay:400},l.a.createElement(u.a,{className:e.box},l.a.createElement(s.a,null,"Slide left and fade in")))),l.a.createElement(s.a,{className:"mb-16",component:"p"},"For more information checkout the",l.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8 font-bold"},"velocity-react"),"."))})}}}]);