"use strict";(self.webpackChunklearn_html=self.webpackChunklearn_html||[]).push([[525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[d]="string"==typeof e?e:r,s[1]=m;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:9,keywords:["html","html comments","comments in html","use of comment in html","syntax for comment in html"]},s="HTML Comments",m={unversionedId:"html-comments",id:"html-comments",title:"HTML Comments",description:"Comments in HTML are the statement that are not executed/ parsed by the browser. Comments are not rendered in user's browsers but are visible in source codes.",source:"@site/docs/html-comments.md",sourceDirName:".",slug:"/html-comments",permalink:"/docs/html-comments",draft:!1,editUrl:"https://github.com/computenepal/learn-html/tree/master/docs/html-comments.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,keywords:["html","html comments","comments in html","use of comment in html","syntax for comment in html"]},sidebar:"tutorialSidebar",previous:{title:"HTML Quotes",permalink:"/docs/html-quotes"},next:{title:"HTML Links",permalink:"/docs/html-links"}},i={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Add Notes",id:"add-notes",level:3},{value:"Debugging",id:"debugging",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html-comments"},"HTML Comments"),(0,r.kt)("p",null,"Comments in HTML are the statement that are not executed/ parsed by the browser. Comments are not rendered in user's browsers but are visible in source codes."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"You can add comment as the following in you code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="comments.html"',title:'"comments.html"'},"<someCodes></someCodes>\n\n\x3c!-- Your comment here --\x3e\n\n<moreCodes></moreCodes>\n")),(0,r.kt)("p",null,"You can add your custom comment inside ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!--")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--\x3e"),"."),(0,r.kt)("admonition",{title:"quick tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If on VS Code, you can use the keyboard shortcut ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to quickly add comments.")),(0,r.kt)("h2",{id:"use-case"},"Use Case"),(0,r.kt)("p",null,"Question may rise, if the comments are not shown on browser why do we need them. But there are few use cases of comments."),(0,r.kt)("h3",{id:"add-notes"},"Add Notes"),(0,r.kt)("p",null,"One of the pretty common use case of comments is to add some notes to the developer itself."),(0,r.kt)("p",null,"Let's say you are developing an application and you want to just draft some feature and have a subtle remainder as a ",(0,r.kt)("inlineCode",{parentName:"p"},"TODO"),". In such case you could use comment as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="add-note.html"',title:'"add-note.html"'},"<someCodes></someCodes>\n\n\x3c!-- TODO: This feature needs to be developed. --\x3e\n\n<upcommingFeature></upcommingFeature>\n")),(0,r.kt)("h3",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Another common use case of comments is to help in debugging."),(0,r.kt)("p",null,"Let's say you get an unexpected result while coding. In such case, you can comment some lines of codes and then see if the results are expected and find out the error code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="debugging.html"',title:'"debugging.html"'},"<someCodes></someCodes>\n\n\x3c!-- <errorCodes></errorCodes> --\x3e\n\n<workingCode></workingCode>\n")),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Comments are one of the most important part of coding. It is always a best practice to write descriptive comments.")))}u.isMDXComponent=!0}}]);