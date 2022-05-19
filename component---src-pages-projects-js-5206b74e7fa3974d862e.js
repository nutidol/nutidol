"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[853],{9643:function(e,t,a){var l=a(7462),r=a(3366),n=a(5900),c=a.n(n),i=a(7294),o=a(5697),s=a.n(o),m=a(9541),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(s().string,s().bool,s().bool,s().bool,s().bool,i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.fluid,s=e.rounded,u=e.roundedCircle,f=e.thumbnail,p=(0,r.Z)(e,d);a=(0,m.vE)(a,"img");var E=c()(o&&a+"-fluid",s&&"rounded",u&&"rounded-circle",f&&a+"-thumbnail");return i.createElement("img",(0,l.Z)({ref:t},p,{className:c()(n,E)}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=u},6316:function(e,t,a){a.r(t),a.d(t,{default:function(){return te}});var l=a(7294),r=a(2336),n=a(3375),c=a.p+"static/0-779096afe8e96e0f1a21f6d60afa47b2.jpg",i=a.p+"static/1-eaf7daa1aa25457d518b0fcb591286cc.jpg",o=a.p+"static/2-0a1aabebfdfb854ea9c6e6d09486f14b.jpg",s=a.p+"static/2.5-b9a3cb67c5e2d2fd37dcde944d59b733.png",m=a.p+"static/3-f6a23ab1fba87bbe76161c091dc609f5.jpg",d=a.p+"static/4-3a1710a0f8c1739cd00010539436aea8.jpg",u=a.p+"static/5-a15340e11d3aa7f4efccf957b342281c.jpg",f=a.p+"static/6-0e2c3af4cd75e8b7400c5e8a4c61e013.jpg",p=a.p+"static/7-02a188a70f793edc514418bfe268c5e8.jpg",E=a.p+"static/8-6d480119942a6b8fa39826e872f354a6.jpg",b=a(5444),g=a(7462),h=a(3366),v=a(5900),y=a.n(v),k=a(9541),x=["bsPrefix","className","noGutters","as"],Z=["xl","lg","md","sm","xs"],N=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.noGutters,c=e.as,i=void 0===c?"div":c,o=(0,h.Z)(e,x),s=(0,k.vE)(a,"row"),m=s+"-cols",d=[];return Z.forEach((function(e){var t,a=o[e];delete o[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&d.push(""+m+l+"-"+t)})),l.createElement(i,(0,g.Z)({ref:t},o,{className:y().apply(void 0,[r,s,n&&"no-gutters"].concat(d))}))}));N.displayName="Row",N.defaultProps={noGutters:!1};var w=N,B=["bsPrefix","className","as"],T=["xl","lg","md","sm","xs"],P=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.as,c=void 0===n?"div":n,i=(0,h.Z)(e,B),o=(0,k.vE)(a,"col"),s=[],m=[];return T.forEach((function(e){var t,a,l,r=i[e];if(delete i[e],"object"==typeof r&&null!=r){var n=r.span;t=void 0===n||n,a=r.offset,l=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&s.push(!0===t?""+o+c:""+o+c+"-"+t),null!=l&&m.push("order"+c+"-"+l),null!=a&&m.push("offset"+c+"-"+a)})),s.length||s.push(o),l.createElement(c,(0,g.Z)({},i,{ref:t,className:y().apply(void 0,[r].concat(s,m))}))}));P.displayName="Col";var R=P,A=a(8870),D=function(e){return l.forwardRef((function(t,a){return l.createElement("div",(0,g.Z)({},t,{ref:a,className:y()(t.className,e)}))}))},C=a(9503),j=["bsPrefix","className","variant","as"],W=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,c=e.as,i=void 0===c?"img":c,o=(0,h.Z)(e,j),s=(0,k.vE)(a,"card-img");return l.createElement(i,(0,g.Z)({ref:t,className:y()(n?s+"-"+n:s,r)},o))}));W.displayName="CardImg",W.defaultProps={variant:null};var L=W,I=["bsPrefix","className","bg","text","border","body","children","as"],z=D("h5"),G=D("h6"),S=(0,A.Z)("card-body"),O=(0,A.Z)("card-title",{Component:z}),_=(0,A.Z)("card-subtitle",{Component:G}),M=(0,A.Z)("card-link",{Component:"a"}),U=(0,A.Z)("card-text",{Component:"p"}),H=(0,A.Z)("card-header"),Y=(0,A.Z)("card-footer"),q=(0,A.Z)("card-img-overlay"),F=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,c=e.text,i=e.border,o=e.body,s=e.children,m=e.as,d=void 0===m?"div":m,u=(0,h.Z)(e,I),f=(0,k.vE)(a,"card"),p=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:f+"-header"}}),[f]);return l.createElement(C.Z.Provider,{value:p},l.createElement(d,(0,g.Z)({ref:t},u,{className:y()(r,f,n&&"bg-"+n,c&&"text-"+c,i&&"border-"+i)}),o?l.createElement(S,null,s):s))}));F.displayName="Card",F.defaultProps={body:!1},F.Img=L,F.Title=O,F.Subtitle=_,F.Body=S,F.Link=M,F.Text=U,F.Header=H,F.Footer=Y,F.ImgOverlay=q;var J=F,K=a(6306),V=["bsPrefix","variant","size","active","className","block","type","as"],X=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,n=e.size,c=e.active,i=e.className,o=e.block,s=e.type,m=e.as,d=(0,h.Z)(e,V),u=(0,k.vE)(a,"btn"),f=y()(i,u,c&&"active",r&&u+"-"+r,o&&u+"-block",n&&u+"-"+n);if(d.href)return l.createElement(K.Z,(0,g.Z)({},d,{as:m,ref:t,className:y()(f,d.disabled&&"disabled")}));t&&(d.ref=t),s?d.type=s:m||(d.type="button");var p=m||"button";return l.createElement(p,(0,g.Z)({},d,{className:f}))}));X.displayName="Button",X.defaultProps={variant:"primary",active:!1,disabled:!1};var Q=X,$=a(6187),ee=a(9643),te=function(){return l.createElement("div",null,l.createElement(r.Z,null),l.createElement("div",{className:"container",style:{margin:"0 auto",maxWidth:960,paddingBottom:"200px"}},l.createElement($.Z,{className:"text-center"},l.createElement(w,{xs:1,md:2,className:"g-4 py-4"},l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:c,classname:"class-img-top",alt:"DDPG",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"DDPG Bipedal Walker"),l.createElement(J.Text,null,"A reinforcement learning algorithm for the BipedalWalker problem. The DDPG agent teaches the walker to walk through rough terrain in a thousand episodes."),l.createElement(b.Link,{to:"/p-ddpg"},l.createElement(Q,{variant:"outline-dark"},"Read more")),l.createElement(Q,{variant:"outline-dark",className:"m-1",href:"https://www.youtube.com/watch?v=TDYcXUJmAB4"},"Watch demo")))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:i,classname:"class-img-top",alt:"Cook Burn",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Cook Burn Application"),l.createElement(J.Text,null,"A mobile application that generates menus and recipes based on users’ ingredients and preferences. I used the free tier of AWS for backend and React Native for frontend."),l.createElement(b.Link,{to:"/p-cookburn"},l.createElement(Q,{variant:"outline-dark"},"Read more")),l.createElement(Q,{variant:"outline-dark",className:"m-1",href:"https://youtu.be/mhzyxke2IkU"},"Watch demo")))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:o,classname:"class-img-top",alt:"Data Warehouse",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Data Warehouse Project"),l.createElement(J.Text,null,"Implemented Data warehouse for retail business and analyzed past data using Power BI."),l.createElement(b.Link,{to:"/p-dw"},l.createElement(Q,{variant:"outline-dark"},"Read more"))))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:s,classname:"class-img-top",alt:"Data Science",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Data Science Project on Azure ML"),l.createElement(J.Text,null,"Advanced analytics on Azure ML related to Data Warehousing Project in Retails."),l.createElement(b.Link,{to:"/p-ds"},l.createElement(Q,{variant:"outline-dark"},"Read more")),l.createElement(Q,{variant:"outline-dark",className:"m-1",href:"https://youtu.be/OGkc9OhO3Bg"},"Watch demo")))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:m,classname:"class-img-top",alt:"Beat Up",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Beat Up Application"),l.createElement(J.Text,null,"A prototype mobile application for solving the problem of being bored during the lockdown due to the spread of COVID-19."),l.createElement(b.Link,{to:"/p-bu"},l.createElement(Q,{variant:"outline-dark"},"Read more"))))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:d,classname:"class-img-top",alt:"Clover",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Receipt-Based Reverse Engineering Project"),l.createElement(J.Text,null,"Receipt-Based Reverse Engineering for an Enterprise Information System. Me and my classmates reversed engineer the receipt of D'oro coffee shop to obtain an enterprise information system."),l.createElement(b.Link,{to:"/p-eis"},l.createElement(Q,{variant:"outline-dark"},"Read more"))," "))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:u,classname:"class-img-top",alt:"CheezyAvocado",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"CheezyAvocado"),l.createElement(J.Text,null,"A web application with an IOT device aiming to tackle the problem of hotel room services."),l.createElement(b.Link,{to:"/p-ca"},l.createElement(Q,{variant:"outline-dark"},"Read more"))," ",l.createElement(Q,{variant:"outline-dark",className:"m-1",href:"https://www.youtube.com/watch?v=ku1EKh2EWZY&t=18s&ab_channel=NatSaeTang"},"Watch overview")))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:f,classname:"class-img-top",alt:"Bin Bin",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Bin Bin Application"),l.createElement(J.Text,null,"A prototype application that can track and classify users’ trashes."),l.createElement(b.Link,{to:"/p-bb"},l.createElement(Q,{variant:"outline-dark"},"Read more"))))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:p,classname:"class-img-top",alt:"Deer With No Eyes",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Deer With No Eyes"),l.createElement(J.Text,null,"A mathematic(calculus) quiz application made for android devices from Android Studio."),l.createElement(b.Link,{to:"/p-noidea"},l.createElement(Q,{variant:"outline-dark"},"Read more"))," "))),l.createElement(R,null,l.createElement(J,{bg:"light"},l.createElement(ee.Z,{src:E,classname:"class-img-top",alt:"Automatic Tissue Dispenser",fluid:!0}),l.createElement(J.Body,null,l.createElement(J.Title,null,"Automatic Tissue Dispenser"),l.createElement(J.Text,null,"A prototype of an automatic tissue dispenser that can control the length of dispensed paper towel."),l.createElement(b.Link,{to:"/p-ts"},l.createElement(Q,{variant:"outline-dark"},"Read more"))," ")))))),l.createElement(n.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-5206b74e7fa3974d862e.js.map