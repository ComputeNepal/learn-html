"use strict";(self.webpackChunklearn_html=self.webpackChunklearn_html||[]).push([[845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,d=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?r.createElement(d,i(i({ref:t},h),{},{components:a})):r.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:6,keywords:["html","paragraphs","html paragraphs","paragraphs in html","html paragraphs syntax"]},i="HTML Paragraphs",p={unversionedId:"html-paragraphs",id:"html-paragraphs",title:"HTML Paragraphs",description:"A paragraph is a block element of HTML which is usually used to render a block of text. It always starts in a new line.",source:"@site/docs/html-paragraphs.md",sourceDirName:".",slug:"/html-paragraphs",permalink:"/docs/html-paragraphs",draft:!1,editUrl:"https://github.com/computenepal/learn-html/tree/master/docs/html-paragraphs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["html","paragraphs","html paragraphs","paragraphs in html","html paragraphs syntax"]},sidebar:"tutorialSidebar",previous:{title:"HTML Headings",permalink:"/docs/html-headings"},next:{title:"HTML Formatting",permalink:"/docs/html-formatting"}},o={},s=[{value:"Paragraph display",id:"paragraph-display",level:2},{value:"The Problem",id:"the-problem",level:3},{value:"pre Tag",id:"pre-tag",level:2},{value:"br Tag",id:"br-tag",level:2},{value:"hr Tag",id:"hr-tag",level:2}],h={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"html-paragraphs"},"HTML Paragraphs"),(0,n.kt)("p",null,"A paragraph is a block element of HTML which is usually used to render a block of text. It always starts in a new line."),(0,n.kt)("p",null,"Usage example of paragraph is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="paragraph.html"',title:'"paragraph.html"'},"<p>This is the first paragraph</p>\n<p>This is the second paragraph</p>\n")),(0,n.kt)("h2",{id:"paragraph-display"},"Paragraph display"),(0,n.kt)("p",null,"The HTML Paragraph will remove all the extra spaces you add in between words, and render the formatted text."),(0,n.kt)("p",null,"Consider this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="paragraph-spaces.html"',title:'"paragraph-spaces.html"'},"<p>\nThis   paragraph       contains alot of     whitespaces.\n  But   the whitespace   is removed by   the browser.\n</p>\n")),(0,n.kt)("p",null,"The above example contains a lot of whitespaces but the paragraph will rendered as the following:"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This   paragraph       contains alot of     whitespaces. But   the whitespace   is removed by   the browser."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"the-problem"},"The Problem"),(0,n.kt)("p",null,"Now we know that the white spaces are removed by the browser but what if you want to really display the white spaces in your HTML page? In order to achieve this we have a special tag in HTML called as ",(0,n.kt)("inlineCode",{parentName:"p"},"<pre>"),"."),(0,n.kt)("h2",{id:"pre-tag"},"pre Tag"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pre")," tag renders the text inside it as it is including all the white spaces. This can sometimes be useful when you want to show the text as you have typed in the code editor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="pre-tag.html"',title:'"pre-tag.html"'},"<pre>\nThis   paragraph       contains alot of     whitespaces.\n  But   the whitespace   is removed by   the browser.\n</pre>\n")),(0,n.kt)("p",null,"The above example contains a lot of white spaces but due to the use of ",(0,n.kt)("inlineCode",{parentName:"p"},"pre")," tag unlike ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," tag, the white spaces will be rendered as it is."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,"This   paragraph       contains alot of     whitespaces. But   the whitespace   is removed by   the browser."),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"Tip ",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pre")," tag can be used to render the source codes by using along with ",(0,n.kt)("inlineCode",{parentName:"p"},"code")," tag. More on that later.")),(0,n.kt)("h2",{id:"br-tag"},"br Tag"),(0,n.kt)("p",null,"Let's say you have a paragraph and you want a new line after certain text, then at that case you need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"<br>")," tag. It is a ",(0,n.kt)("strong",{parentName:"p"},"singular tag"),", so it don't need a closing tag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="br-tag.html"',title:'"br-tag.html"'},"<p>This is the first line.<br>This is the second line</p>\n")),(0,n.kt)("p",null,"The above code will render two lines of text. You can try it in your own local development environment."),(0,n.kt)("h2",{id:"hr-tag"},"hr Tag"),(0,n.kt)("p",null,"Let's say you want a new line along with a separator, in that case you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"<hr>")," tag instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"<br>")," tag. This will also render a separator in between two blocks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="hr-tag.html"',title:'"hr-tag.html"'},"<p>This is the first line.<hr>This is the second line</p>\n")))}u.isMDXComponent=!0}}]);