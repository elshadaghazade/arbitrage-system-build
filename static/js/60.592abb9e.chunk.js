(this["webpackJsonparbitrage-react-app"]=this["webpackJsonparbitrage-react-app"]||[]).push([[60],{1351:function(e,a,n){"use strict";var t=n(1),r=n(1275),i=n(246);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(t.a)({defaultTheme:i.a},a))}},1454:function(e,a,n){"use strict";var t=n(5),r=n(1),i=n(0),s=n.n(i),o=(n(2),n(3)),l=n(11),c=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/a).concat(String(e).replace(String(n),"")||"px")}var d=s.a.forwardRef((function(e,a){var n=e.alignContent,i=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,m=e.classes,p=e.className,d=e.component,u=void 0===d?"div":d,x=e.container,h=void 0!==x&&x,f=e.direction,g=void 0===f?"row":f,y=e.item,w=void 0!==y&&y,E=e.justify,v=void 0===E?"flex-start":E,b=e.lg,N=void 0!==b&&b,H=e.md,P=void 0!==H&&H,k=e.sm,U=void 0!==k&&k,j=e.spacing,S=void 0===j?0:j,T=e.wrap,G=void 0===T?"wrap":T,D=e.xl,W=void 0!==D&&D,O=e.xs,C=void 0!==O&&O,B=e.zeroMinWidth,I=void 0!==B&&B,R=Object(t.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(o.default)(m.root,p,h&&[m.container,0!==S&&m["spacing-xs-".concat(String(S))]],w&&m.item,I&&m.zeroMinWidth,"row"!==g&&m["direction-xs-".concat(String(g))],"wrap"!==G&&m["wrap-xs-".concat(String(G))],"stretch"!==c&&m["align-items-xs-".concat(String(c))],"stretch"!==i&&m["align-content-xs-".concat(String(i))],"flex-start"!==v&&m["justify-xs-".concat(String(v))],!1!==C&&m["grid-xs-".concat(String(C))],!1!==U&&m["grid-sm-".concat(String(U))],!1!==P&&m["grid-md-".concat(String(P))],!1!==N&&m["grid-lg-".concat(String(N))],!1!==W&&m["grid-xl-".concat(String(W))]);return s.a.createElement(u,Object(r.a)({className:z,ref:a},R))})),u=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat(a,"-").concat(t)]={margin:"-".concat(p(r,2)),width:"calc(100% + ".concat(p(r),")"),"& > $item":{padding:p(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(a,n){return function(e,a,n){var t={};m.forEach((function(e){var a="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");t[a]={flexBasis:r,flexGrow:0,maxWidth:r}}else t[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else t[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,t):e[a.breakpoints.up(n)]=t}(a,e,n),a}),{}))}),{name:"MuiGrid"})(d);a.a=u},2196:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(1351),s=n(202),o=n(1319),l=n(1292),c=n(201),m=Object(i.a)((function(e){return{root:{flexGrow:1},container:{display:"flex"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));a.default=Object(l.a)()((function(e){var a=m(),n=e.width;return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:a.container},r.a.createElement(o.a,{xsUp:!0},r.a.createElement(s.a,{className:a.paper},"xsUp")),r.a.createElement(o.a,{smUp:!0},r.a.createElement(s.a,{className:a.paper},"smUp")),r.a.createElement(o.a,{mdUp:!0},r.a.createElement(s.a,{className:a.paper},"mdUp")),r.a.createElement(o.a,{lgUp:!0},r.a.createElement(s.a,{className:a.paper},"lgUp")),r.a.createElement(o.a,{xlUp:!0},r.a.createElement(s.a,{className:a.paper},"xlUp"))))}))},2197:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointUp(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden xsUp>\n          <Paper className={classes.paper}>xsUp</Paper>\n        </Hidden>\n        <Hidden smUp>\n          <Paper className={classes.paper}>smUp</Paper>\n        </Hidden>\n        <Hidden mdUp>\n          <Paper className={classes.paper}>mdUp</Paper>\n        </Hidden>\n        <Hidden lgUp>\n          <Paper className={classes.paper}>lgUp</Paper>\n        </Hidden>\n        <Hidden xlUp>\n          <Paper className={classes.paper}>xlUp</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointUp.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointUp);\n"},2198:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(1351),s=n(202),o=n(1319),l=n(1292),c=n(201),m=Object(i.a)((function(e){return{root:{flexGrow:1},container:{display:"flex"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));a.default=Object(l.a)()((function(e){var a=m(),n=e.width;return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:a.container},r.a.createElement(o.a,{xsDown:!0},r.a.createElement(s.a,{className:a.paper},"xsDown")),r.a.createElement(o.a,{smDown:!0},r.a.createElement(s.a,{className:a.paper},"smDown")),r.a.createElement(o.a,{mdDown:!0},r.a.createElement(s.a,{className:a.paper},"mdDown")),r.a.createElement(o.a,{lgDown:!0},r.a.createElement(s.a,{className:a.paper},"lgDown")),r.a.createElement(o.a,{xlDown:!0},r.a.createElement(s.a,{className:a.paper},"xlDown"))))}))},2199:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointDown(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden xsDown>\n          <Paper className={classes.paper}>xsDown</Paper>\n        </Hidden>\n        <Hidden smDown>\n          <Paper className={classes.paper}>smDown</Paper>\n        </Hidden>\n        <Hidden mdDown>\n          <Paper className={classes.paper}>mdDown</Paper>\n        </Hidden>\n        <Hidden lgDown>\n          <Paper className={classes.paper}>lgDown</Paper>\n        </Hidden>\n        <Hidden xlDown>\n          <Paper className={classes.paper}>xlDown</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointDown.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointDown);\n"},2200:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(1351),s=n(202),o=n(1319),l=n(1292),c=n(201),m=Object(i.a)((function(e){return{root:{flexGrow:1},container:{display:"flex"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));a.default=Object(l.a)()((function(e){var a=m(),n=e.width;return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:a.container},r.a.createElement(o.a,{only:"lg"},r.a.createElement(s.a,{className:a.paper},"Hidden on lg")),r.a.createElement(o.a,{only:"sm"},r.a.createElement(s.a,{className:a.paper},"Hidden on sm")),r.a.createElement(o.a,{only:["sm","lg"]},r.a.createElement(s.a,{className:a.paper},"Hidden on sm and lg"))))}))},2201:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointOnly(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden only=\"lg\">\n          <Paper className={classes.paper}>Hidden on lg</Paper>\n        </Hidden>\n        <Hidden only=\"sm\">\n          <Paper className={classes.paper}>Hidden on sm</Paper>\n        </Hidden>\n        <Hidden only={['sm', 'lg']}>\n          <Paper className={classes.paper}>Hidden on sm and lg</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointOnly.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointOnly);\n"},2202:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(1351),s=n(202),o=n(1454),l=n(1319),c=n(1292),m=n(201),p=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));a.default=Object(c.a)()((function(e){var a=p(),n=e.width;return r.a.createElement("div",{className:a.root},r.a.createElement(m.a,{variant:"subtitle1",gutterBottom:!0},"Current width: ",n),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(l.a,{xsUp:!0},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(s.a,{className:a.paper},"xsUp"))),r.a.createElement(l.a,{smUp:!0},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(s.a,{className:a.paper},"smUp"))),r.a.createElement(l.a,{mdUp:!0},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(s.a,{className:a.paper},"mdUp"))),r.a.createElement(l.a,{lgUp:!0},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(s.a,{className:a.paper},"lgUp"))),r.a.createElement(l.a,{xlUp:!0},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(s.a,{className:a.paper},"xlUp")))))}))},2203:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Grid from '@material-ui/core/Grid';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    flexGrow: 1,\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n  },\n}));\n\nfunction GridIntegration(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\" gutterBottom>\n        Current width: {width}\n      </Typography>\n      <Grid container spacing={3}>\n        <Hidden xsUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>xsUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden smUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>smUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden mdUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>mdUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden lgUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>lgUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden xlUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>xlUp</Paper>\n          </Grid>\n        </Hidden>\n      </Grid>\n    </div>\n  );\n}\n\nGridIntegration.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(GridIntegration);\n"},2761:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(15),s=n(1309),o=n(201),l=n(1316),c=n(1275),m=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));a.default=function(e){var a=m();return r.a.createElement(i.t,{classes:{root:a.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(s.a,{className:"text-18",color:"action"},"home"),r.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(o.a,{color:"textSecondary"},"Documentation"),r.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(o.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(o.a,{variant:"h6"},"Hidden")),r.a.createElement(l.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/hidden",target:"_blank",role:"button"},r.a.createElement(s.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(o.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Hidden"),r.a.createElement(o.a,{className:"description"},"Quickly and responsively toggle the visibility value of components and more with the hidden utilities."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"All elements are visible unless ",r.a.createElement("strong",null,"they are explicitly hidden"),". To ease integration with Material-UI's ",r.a.createElement("a",{href:"/customization/breakpoints/"},"responsive breakpoints"),", this component can be used to hide any content, or you can use it in conjunction with the ",r.a.createElement("a",{href:"/components/grid/"},r.a.createElement("code",null,"Grid"))," component."),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"How it works"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Hidden works with a range of breakpoints e.g. ",r.a.createElement("code",null,"xsUp")," or ",r.a.createElement("code",null,"mdDown"),", or one or more breakpoints e.g. ",r.a.createElement("code",null,"only='sm'")," or ",r.a.createElement("code",null,"only={['md', 'xl']}"),". Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints."),r.a.createElement(i.l,{component:"pre",className:"language-js"}," \ninnerWidth  |xs      sm       md       lg       xl\n            |--------|--------|--------|--------|--------\x3e\nwidth       |   xs   |   sm   |   md   |   lg   |   xl\n\nsmUp        |   show | hide\nmdDown      |                     hide | show\n\n"),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Implementations"),r.a.createElement(o.a,{className:"text-24 mt-32 mb-8",component:"h3"},"js"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"By default, the ",r.a.createElement("code",null,"js")," implementation is used, responsively hiding content based on using the ",r.a.createElement("a",{href:"/customization/breakpoints/#withwidth"},r.a.createElement("code",null,"withWidth()"))," higher-order component that watches screen size. This has the benefit of not rendering any content at all unless the breakpoint is met."),r.a.createElement(o.a,{className:"text-24 mt-32 mb-8",component:"h3"},"css"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"If you are using server-side rendering, you can set ",r.a.createElement("code",null,'implementation="css"')," if you don't want the browser to re-flow your content on the screen."),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint up"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Using any breakpoint ",r.a.createElement("code",null,"up")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at or above")," the breakpoint."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(i.k,{className:"my-24",iframe:!1,component:n(2196).default,raw:n(2197)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint down"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Using any breakpoint ",r.a.createElement("code",null,"down")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at or below")," the breakpoint."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(i.k,{className:"my-24",iframe:!1,component:n(2198).default,raw:n(2199)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint only"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Using the breakpoint ",r.a.createElement("code",null,"only")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at")," the specified breakpoint(s)."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"only")," property can be used in two ways:"),r.a.createElement("ul",null,r.a.createElement("li",null,"list a single breakpoint"),r.a.createElement("li",null,"list an array of breakpoints")),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(i.k,{className:"my-24",iframe:!1,component:n(2200).default,raw:n(2201)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Integration with Grid"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"It is quite common to alter ",r.a.createElement("code",null,"Grid")," at different responsive breakpoints, and in many cases, you want to hide some of those elements."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(i.k,{className:"my-24",iframe:!1,component:n(2202).default,raw:n(2203)})))})}}}]);