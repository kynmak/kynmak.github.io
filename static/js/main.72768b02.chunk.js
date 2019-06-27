(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(99)},42:function(e,t,a){},44:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(42),a(9)),i=a(10),m=a(12),s=a(11),u=a(13),d=(a(44),a(2)),E=a(102),h=a(103),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement(d.Grid,{className:"landing-grid"},l.a.createElement(d.Cell,{col:12},l.a.createElement("img",{src:"/images/dingo.jpg",alt:"avatar",className:"avatar-img"}),l.a.createElement("div",{className:"banner-text"},l.a.createElement("h4",null,l.a.createElement("i",null,"Looks like you have stumbled onto my page!")),l.a.createElement("hr",null),l.a.createElement("p",null,"Above is a picture of a dingo not me! Feel free to explore and learn more about my experience as a developer.")))))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"left"}},l.a.createElement(d.Grid,{className:"landing-grid"},l.a.createElement(d.Cell,{col:12},l.a.createElement("div",{className:"introduction",style:{textAlign:"center"}},l.a.createElement("img",{src:"/images/me.jpg",alt:"profile",className:"profile-pic"})),l.a.createElement("div",{className:"body",style:{textAlign:"left"}},l.a.createElement("p",{className:"about-paragraph"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h4",null,l.a.createElement("i",null,"Hi there!"))),l.a.createElement("hr",null),"My name is Kit Yeung, although my friends and family usually call me Nick (Nicolas). Currently, I am studying Computer Science and Engineering at the University of California, Los Angeles. As an undergraduate student, I have been expanding my coding skills through both academic and personal projects. I consider myself as a software developer with experience in mainly Android and web development. Other than coding, I enjoy hip-hop dancing and playing ",l.a.createElement("i",null," Super Smash Brothers Melee "),".",l.a.createElement("br",null),l.a.createElement("br",null),"Visit the ",l.a.createElement("a",{href:"/#/resume"}," resume page ")," for my contact information if you are interested in contacting me!")))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?l.a.createElement("div",{className:"projects-grid"},l.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},l.a.createElement(d.CardTitle,{style:{color:"Black",height:"176px",background:"url(images/smash-preview.png) center / cover"}}),l.a.createElement(d.CardText,null,l.a.createElement("h4",null,l.a.createElement("b",null,"SmashStat"))," ","Statistical mobile application for"," ",l.a.createElement("i",null,"Super Smash Brothers Melee")),l.a.createElement(d.CardMenu,{style:{color:"#fff"}})),l.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},l.a.createElement(d.CardTitle,{style:{color:"black",height:"176px",background:"url(/images/reviewCLA-preview.png) center / cover"}}),l.a.createElement(d.CardText,null,l.a.createElement("h4",null,l.a.createElement("b",null,"ReviewCLA"))," ","Add reviews on anything anywhere!"),l.a.createElement(d.CardMenu,{style:{color:"#fff"}})),l.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},l.a.createElement(d.CardTitle,{style:{color:"black",height:"176px",background:"url(images/weightup-preview.png) center / cover"}}),l.a.createElement(d.CardText,null,l.a.createElement("h4",null,l.a.createElement("b",null,"Weight-up")),"BMI calculator and calorie intake tracker"),l.a.createElement(d.CardMenu,{style:{color:"#fff"}})),l.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},l.a.createElement(d.CardTitle,{style:{color:"black",height:"176px",background:"url(images/alpha-preview.png) center / cover"}}),l.a.createElement(d.CardText,null," ",l.a.createElement("h4",null,l.a.createElement("b",null,"Alpha Air"))," ","2D Airplane mobile game"),l.a.createElement(d.CardMenu,{style:{color:"#fff"}}))):1===this.state.activeTab?l.a.createElement("div",{className:"projects-grid"},l.a.createElement(d.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},l.a.createElement(d.CardTitle,{style:{color:"black",height:"176px",background:"url(https://tryolabs.com/images/blog/social/react.736da783.png) center / cover"}}),l.a.createElement(d.CardText,null,l.a.createElement("h4",null,l.a.createElement("b",null,"Personal Website")),"You're on it!"),l.a.createElement(d.CardActions,null,l.a.createElement(d.Button,{colored:!0,a:!0,href:"/"},"Back to home")),l.a.createElement(d.CardMenu,{style:{color:"#fff"}},l.a.createElement(d.IconButton,{name:"share"})))):void 0}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"category-tabs"},l.a.createElement("div",{style:{textAlign:"center"}}),l.a.createElement(d.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},l.a.createElement(d.Tab,null,"Android"),l.a.createElement(d.Tab,null,"React")),l.a.createElement(d.Grid,null,l.a.createElement(d.Cell,{col:12},l.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement(d.Grid,{className:"landing-grid"},l.a.createElement(d.Cell,{col:8},l.a.createElement("div",{className:"resume-body",style:{textAlign:"left"}},l.a.createElement("h6",null,l.a.createElement("b",null,"Education")),l.a.createElement("hr",null),l.a.createElement("dt",null,"University of California, Los Angeles"),l.a.createElement("dd",null,l.a.createElement("em",null,"2016 - 2020 (Expected graduation year)")),l.a.createElement("dd",null,"B.S. Computer Science and Engineering"),l.a.createElement("p",null),l.a.createElement("dd",null," ",l.a.createElement("b",null,"Relevant Coursework: "),"Data Structures and Algorithms (CS 31-33), Software Construction Laboratory (CS 35L), Logic Design of Digital Systems (CS M51A), Digital Design Laboratory (CS M152A), Operating Systems Principles (CS 111), Computer Networks (M117), Algorithms and Complexity (CS 180), Data Mining (CS 145), Computer Network Fundamentals (CS 118), Programming Languages (CS 131)"),l.a.createElement("p",null),l.a.createElement("dt",null,"Fremont High School"),l.a.createElement("dd",null,l.a.createElement("em",null,"2012 - 2016")),l.a.createElement("h6",null,l.a.createElement("b",null,"Languages")),l.a.createElement("hr",null),l.a.createElement("p",null,"Java, Python, C++, C, Javascript, HTML, CSS, PHP, Prolog, Bash, JSON, Verilog, XML"),l.a.createElement("h6",null,l.a.createElement("b",null,"Personal Projects")),l.a.createElement("hr",null),l.a.createElement("a",{href:"/#/projects"}," View projects "),l.a.createElement("h6",null,l.a.createElement("b",null,"Tools and Technologies")),l.a.createElement("hr",null),l.a.createElement("p",null,"Android Studio, Pandas, GNU Emacs, SQLite, React, Git, NumPy, Tensorflow"),l.a.createElement("h6",null,l.a.createElement("b",null,"Leadership and Honors")),l.a.createElement("hr",null),l.a.createElement("dt",null,"President of Theta Tau"),l.a.createElement("dd",null,l.a.createElement("em",null,"March - September 2018")),l.a.createElement("dd",null,"Oversaw and facilitated positive change in an professional organization of over 60 active members and 8 separate committees. Provided advice for budgeting, resolved member conflicts, and managed projects. Implemented a visionary roadmap for the betterment of the organization."," "),l.a.createElement("p",null),l.a.createElement("dt",null,"Valedictorian of Fremont High School"),l.a.createElement("dd",null,l.a.createElement("em",null,"June 2016")))),l.a.createElement(d.Cell,{col:2},l.a.createElement("div",{className:"social-links",style:{textAlign:"left"}},l.a.createElement("div",null,l.a.createElement(d.List,null,l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{style:{fontSize:"20px"}},l.a.createElement("b",null,"Contact Information"),l.a.createElement("hr",null))),l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{style:{fontSize:"20px"}},"LinkedIn:",l.a.createElement("a",{href:"http://linkedin.com/in/kynmak/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})))),l.a.createElement(d.ListItem,null,l.a.createElement(d.ListItemContent,{style:{fontSize:"20px"}},"Email:"," ",l.a.createElement("a",{href:"mailto:"+this.props.email},"kyn.mak@gmail.com")))))))))}}]),t}(n.Component),y=function(){return l.a.createElement(E.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:g}),l.a.createElement(h.a,{path:"/aboutme",component:p}),l.a.createElement(h.a,{path:"/projects",component:b}),l.a.createElement(h.a,{path:"/resume",component:f}))},v=a(100),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"demo-big-content"},l.a.createElement(d.Layout,null,l.a.createElement(d.Header,{className:"header-color",title:"Portfolio",scroll:!0},l.a.createElement(d.Navigation,null,l.a.createElement(v.a,{to:"/"},"Home"),l.a.createElement(v.a,{to:"/aboutme"},"About Me"),l.a.createElement(v.a,{to:"/resume"},"Resume"),l.a.createElement(v.a,{to:"/projects"},"Projects"))),l.a.createElement(d.Drawer,{title:"Portfolio"},l.a.createElement(d.Navigation,null,l.a.createElement(v.a,{to:"/"},"Home"),l.a.createElement(v.a,{to:"/aboutme"},"About Me"),l.a.createElement(v.a,{to:"/resume"},"Resume"),l.a.createElement(v.a,{to:"/projects"},"Projects"))),l.a.createElement(d.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(y,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96),a(98);var j=a(101);c.a.render(l.a.createElement(j.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.72768b02.chunk.js.map