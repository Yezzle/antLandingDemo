(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{112:function(e,t,a){e.exports=a(192)},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=a(15),s=a(16),o=a(18),m=a(17),p=a(19),d=a(83),h=a(46),b=(a(193),a(65)),u=a(9),g=a(47),y=(a(88),a(63)),O=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/,N=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var n="string"===typeof e.children&&e.children.match(O)?c.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=c.a.createElement(y.a,Object(g.a)({},e.children))),c.a.createElement(a,Object(g.a)({key:t.toString()},e),n)},j=b.a.Item,k=b.a.SubMenu,v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:void 0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,n=t.isMobile,r=Object(h.a)(t,["dataSource","isMobile"]),i=this.state.phoneOpen,l=a.Menu.children.map((function(e){var t=e.children,a=e.subItem,n=Object(h.a)(e,["children","subItem"]);return a?c.a.createElement(k,Object.assign({key:e.name},n,{title:c.a.createElement("div",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(N)),popupClassName:"header0-item-child"}),a.map((function(e,t){var a=e.children,n=a.href?c.a.createElement("a",a,a.children.map(N)):c.a.createElement("div",a,a.children.map(N));return c.a.createElement(j,Object.assign({key:e.name||t.toString()},e),n)}))):c.a.createElement(j,Object.assign({key:e.name},n),c.a.createElement("a",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(N)))})),s=void 0===i?300:null;return c.a.createElement(u.a,Object.assign({component:"header",animation:{opacity:0,type:"from"}},a.wrapper,r),c.a.createElement("div",Object.assign({},a.page,{className:"".concat(a.page.className).concat(i?" open":"")}),c.a.createElement(u.a,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),c.a.createElement("img",{width:"100%",src:a.logo.children,alt:"img"})),n&&c.a.createElement("div",Object.assign({},a.mobileMenu,{onClick:function(){e.phoneClick()}}),c.a.createElement("em",null),c.a.createElement("em",null),c.a.createElement("em",null)),c.a.createElement(u.a,Object.assign({},a.Menu,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!i}),c.a.createElement(b.a,{mode:n?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},l))))}}]),t}(c.a.Component),E=(a(177),a(30)),f=a(26),x=a(28),w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(f.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(x.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),c.a.createElement("div",Object.assign({key:"title"},t.title),"string"===typeof t.title.children&&t.title.children.match(O)?c.a.createElement("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children),c.a.createElement("div",Object.assign({key:"content"},t.content),t.content.children),c.a.createElement(y.a,Object.assign({ghost:!0,key:"button"},t.button),t.button.children)),c.a.createElement(u.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",key:"icon"},c.a.createElement(E.a,{type:"down"})))}}]),t}(c.a.PureComponent),M=(a(58),a(35)),S=(a(59),a(29)),W=a(27),P=a.n(W);var z=function(e){var t=Object(f.a)({},e),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r={queue:n?"bottom":"right",one:n?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement(P.a,Object.assign({},a.OverPack,{component:M.a}),c.a.createElement(u.a,Object.assign({key:"img",animation:r.one,resetStyle:!0},a.imgWrapper,{component:S.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs}}),c.a.createElement("span",a.img,c.a.createElement("img",{src:a.img.children,width:"100%",alt:"img"}))),c.a.createElement(x.a,Object.assign({key:"text",type:r.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper,{component:S.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs}}),c.a.createElement("h2",Object.assign({key:"h1"},a.title),a.title.children),c.a.createElement("div",Object.assign({key:"p"},a.content),a.content.children))))},Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(h.a)(e,["dataSource","isMobile"])),n=t.wrapper,r=t.titleWrapper,i=t.page,l=t.OverPack,s=t.childWrapper;return c.a.createElement("div",Object.assign({},a,n),c.a.createElement("div",i,c.a.createElement("div",r,r.children.map(N)),c.a.createElement(P.a,l,c.a.createElement(x.a,{type:"bottom",key:"block",leaveReverse:!0,component:M.a,componentProps:s},s.children.map((function(e,t){var a=e.children,n=Object(h.a)(e,["children"]);return c.a.createElement(S.a,Object.assign({key:t.toString()},n),c.a.createElement("div",a,a.children.map(N)))}))))))}}]),t}(c.a.PureComponent);var C,B=function(e){var t=Object(f.a)({},e),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r={queue:n?"bottom":"right",one:n?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement(P.a,Object.assign({},a.OverPack,{component:M.a}),c.a.createElement(u.a,Object.assign({key:"img",animation:r.one,resetStyle:!0},a.imgWrapper,{component:S.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs}}),c.a.createElement("span",a.img,c.a.createElement("img",{src:a.img.children,width:"100%",alt:"img"}))),c.a.createElement(x.a,Object.assign({key:"text",type:r.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper,{component:S.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs}}),c.a.createElement("h2",Object.assign({key:"h1"},a.title),a.title.children),c.a.createElement("div",Object.assign({key:"p"},a.content),a.content.children))))},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object(f.a)({},this.props),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r=0,i=a.block.children.map((function(t,a){var i=t.children,l=n?50*a:e.getDelay(a,24/t.md),s={opacity:0,type:"from",ease:"easeOutQuad",delay:l},o=Object(g.a)({},s,{x:"+=10",delay:l+100});return r=(r+=t.md)>24?0:r,c.a.createElement(u.a,Object.assign({component:S.a,animation:s,key:t.name},t,{componentProps:{md:t.md,xs:t.xs},className:r?t.className:"".concat(t.className||""," clear-both").trim()}),c.a.createElement(u.a,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},i.icon),c.a.createElement("img",{src:i.icon.children,width:"100%",alt:"img"})),c.a.createElement("div",i.textWrapper,c.a.createElement(u.a,Object.assign({key:"h2",animation:o,component:"h2"},i.title),i.title.children),c.a.createElement(u.a,Object.assign({key:"p",animation:Object(g.a)({},o,{delay:l+200}),component:"div"},i.content),i.content.children)))}));return c.a.createElement("div",Object.assign({},t,a.wrapper),c.a.createElement("div",a.page,c.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(N)),c.a.createElement(P.a,a.OverPack,c.a.createElement(x.a,{key:"u",type:"bottom"},c.a.createElement(M.a,Object.assign({key:"row"},a.block),i)))))}}]),t}(c.a.PureComponent),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(f.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,c.a.createElement("div",Object.assign({},e,t.wrapper),c.a.createElement(P.a,t.OverPack,c.a.createElement(u.a,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},t.copyright),t.copyright.children)))}}]),t}(c.a.PureComponent),A={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e00",name:"text"}]},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}}]},{name:"item1",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e8c",name:"text"}]}},{name:"item2",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e09",name:"text"}]}},{name:"item3",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u56db",name:"text"}]}}]},mobileMenu:{className:"header0-mobile-menu"}},L={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"},content:{className:"banner0-content",children:"\u4e00\u4e2a\u9ad8\u6548\u7684\u9875\u9762\u52a8\u753b\u89e3\u51b3\u65b9\u6848"},button:{className:"banner0-button",children:"Learn More"}},D={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content1-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}},q={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u4ea7\u54c1\u4e0e\u670d\u52a1"}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e1a\u52a1\u63a5\u5165"},{name:"content",children:"\u652f\u4ed8\u3001\u7ed3\u7b97\u3001\u6838\u7b97\u63a5\u5165\u4ea7\u54c1\u6548\u7387\u7ffb\u56db\u500d"}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u4e8b\u4e2d\u98ce\u9669\u76d1\u63a7"},{name:"content",children:"\u5728\u6240\u6709\u9700\u6c42\u914d\u7f6e\u73af\u8282\u4e8b\u524d\u98ce\u9669\u63a7\u5236\u548c\u8d28\u91cf\u63a7\u5236\u80fd\u529b"}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"},{name:"title",className:"content0-block-title",children:"\u4e00\u7ad9\u5f0f\u6570\u636e\u8fd0\u8425"},{name:"content",children:"\u6c89\u6dc0\u4ea7\u54c1\u63a5\u5165\u6548\u7387\u548c\u8fd0\u8425\u5c0f\u4e8c\u5de5\u4f5c\u6548\u7387\u6570\u636e"}]}}]}},R={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content1-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}},H={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u8682\u8681\u91d1\u878d\u4e91\u63d0\u4f9b\u4e13\u4e1a\u7684\u670d\u52a1",className:"title-h1"},{name:"content",className:"title-content",children:"\u57fa\u4e8e\u963f\u91cc\u4e91\u5f3a\u5927\u7684\u57fa\u7840\u8d44\u6e90"}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},content:{className:"content3-content",children:"\u4e91\u8d44\u6e90\u96c6\u4e2d\u7f16\u6392\u3001\u5f39\u6027\u4f38\u7f29\u3001\u6301\u7eed\u53d1\u5e03\u548c\u90e8\u7f72\uff0c\u9ad8\u53ef\u7528\u53ca\u5bb9\u707e\u3002"}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u5b89\u5168"},content:{className:"content3-content",children:"\u6309\u91d1\u878d\u4f01\u4e1a\u5b89\u5168\u8981\u6c42\u6253\u9020\u7684\u5b8c\u6574\u4e91\u4e0a\u5b89\u5168\u4f53\u7cfb\uff0c\u5168\u65b9\u4f4d\u4fdd\u969c\u91d1\u878d\u5e94\u7528\u53ca\u6570\u636e\u5b89\u5168\u3002"}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u4e91\u76d1\u63a7"},content:{className:"content3-content",children:"\u5206\u5e03\u5f0f\u4e91\u73af\u5883\u96c6\u4e2d\u76d1\u63a7\uff0c\u7edf\u4e00\u8d44\u6e90\u53ca\u5e94\u7528\u72b6\u6001\u89c6\u56fe\uff0c\u667a\u80fd\u5206\u6790\u53ca\u6545\u969c\u5b9a\u4f4d\u3002"}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u79fb\u52a8"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u79fb\u52a8\u91d1\u878dAPP\u5f00\u53d1\u53ca\u5168\u9762\u76d1\u63a7\uff1b\u4e30\u5bcc\u53ef\u7528\u7ec4\u4ef6\uff0c\u52a8\u6001\u53d1\u5e03\u548c\u6545\u969c\u70ed\u4fee\u590d\u3002"}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5206\u5e03\u5f0f\u4e2d\u95f4\u4ef6"},content:{className:"content3-content",children:"\u91d1\u878d\u7ea7\u8054\u673a\u4ea4\u6613\u5904\u7406\u4e2d\u95f4\u4ef6\uff0c\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u8ba1\u7b97\u673a\uff0c\u6570\u4e07\u7b14/\u79d2\u7ea7\u5e76\u53d1\u80fd\u529b\uff0c\u4e25\u683c\u4fdd\u8bc1\u4ea4\u6613\u6570\u636e\u7edf\u4e00\u6027\u3002"}}},{name:"block5",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5927\u6570\u636e"},content:{className:"content3-content",children:"\u4e00\u7ad9\u5f0f\u3001\u5168\u5468\u671f\u5927\u6570\u636e\u534f\u540c\u5de5\u4f5c\u5e73\u53f0\uff0cPB\u7ea7\u6570\u636e\u5904\u7406\u3001\u6beb\u79d2\u7ea7\u6570\u636e\u5206\u6790\u5de5\u5177\u3002"}}}]}},K={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:c.a.createElement("span",null,"\xa92018 ",c.a.createElement("a",{href:"https://motion.ant.design"},"Ant Motion")," All Rights Reserved")}};a(190);Object(d.enquireScreen)((function(e){C=e}));var U=window.location,Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isMobile:C,show:!U.port},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.enquireScreen)((function(t){e.setState({isMobile:!!t})})),U.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[c.a.createElement(v,{id:"Nav0_0",key:"Nav0_0",dataSource:A,isMobile:this.state.isMobile}),c.a.createElement(w,{id:"Banner0_0",key:"Banner0_0",dataSource:L,isMobile:this.state.isMobile}),c.a.createElement(z,{id:"Feature1_0",key:"Feature1_0",dataSource:D,isMobile:this.state.isMobile}),c.a.createElement(Q,{id:"Content0_0",key:"Content0_0",dataSource:q,isMobile:this.state.isMobile}),c.a.createElement(B,{id:"Content1_0",key:"Content1_0",dataSource:R,isMobile:this.state.isMobile}),c.a.createElement(_,{id:"Content3_0",key:"Content3_0",dataSource:H,isMobile:this.state.isMobile}),c.a.createElement(I,{id:"Footer0_0",key:"Footer0_0",dataSource:K,isMobile:this.state.isMobile})];return c.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&t)}}]),t}(c.a.Component);a(191);i.a.render(c.a.createElement(Y,null),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.55fa6c8c.chunk.js.map