"use strict";(self.webpackChunklearn_html=self.webpackChunklearn_html||[]).push([[89],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:16,keywords:["html","sample html","basic html"]},l="HTML Forms Handling",o={unversionedId:"html-form-handeling",id:"html-form-handeling",title:"HTML Forms Handling",description:"Handling forms in HTML involves collecting user input and submitting it to a server for processing. Understanding different attributes and methods associated with HTML forms is crucial for creating interactive and functional web applications.",source:"@site/docs/html-form-handeling.md",sourceDirName:".",slug:"/html-form-handeling",permalink:"/docs/html-form-handeling",draft:!1,editUrl:"https://github.com/computenepal/learn-html/tree/master/docs/html-form-handeling.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,keywords:["html","sample html","basic html"]},sidebar:"tutorialSidebar",previous:{title:"Media in HTML",permalink:"/docs/html-media"},next:{title:"HTML5 Features",permalink:"/docs/html5-features"}},s={},m=[{value:"Form Submission",id:"form-submission",level:2},{value:"GET Method",id:"get-method",level:3},{value:"POST Method",id:"post-method",level:3},{value:"Form Elements",id:"form-elements",level:2},{value:"Text Input",id:"text-input",level:3},{value:"Password Input",id:"password-input",level:3},{value:"Checkbox Input",id:"checkbox-input",level:3},{value:"Radio Input",id:"radio-input",level:3},{value:"Select Dropdown",id:"select-dropdown",level:3},{value:"Textarea",id:"textarea",level:3},{value:"Form Validation",id:"form-validation",level:2},{value:"Required Attribute",id:"required-attribute",level:3},{value:"Pattern Attribute",id:"pattern-attribute",level:3},{value:"Client-Side Scripting",id:"client-side-scripting",level:2},{value:"Server-Side Processing",id:"server-side-processing",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html-forms-handling"},"HTML Forms Handling"),(0,a.kt)("p",null,"Handling forms in HTML involves collecting user input and submitting it to a server for processing. Understanding different attributes and methods associated with HTML forms is crucial for creating interactive and functional web applications."),(0,a.kt)("h2",{id:"form-submission"},"Form Submission"),(0,a.kt)("p",null,"Forms can be submitted using two HTTP methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,a.kt)("h3",{id:"get-method"},"GET Method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method submits form data as URL parameters. It's suitable for small amounts of data and retrieving information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="get-form.html"',title:'"get-form.html"'},'<form action="/submit-form.php" method="get">\n  <input type="text" name="username" />\n  <input type="submit" value="Submit" />\n</form>\n')),(0,a.kt)("h3",{id:"post-method"},"POST Method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," method submits form data in the request body. It's suitable for sensitive or large amounts of data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="post-form.html"',title:'"post-form.html"'},'<form action="/submit-form.php" method="post">\n  <input type="text" name="username" />\n  <input type="submit" value="Submit" />\n</form>\n')),(0,a.kt)("h2",{id:"form-elements"},"Form Elements"),(0,a.kt)("p",null,"HTML provides various form elements to collect different types of user input."),(0,a.kt)("h3",{id:"text-input"},"Text Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="username" />\n')),(0,a.kt)("h3",{id:"password-input"},"Password Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="password" name="password" />\n')),(0,a.kt)("h3",{id:"checkbox-input"},"Checkbox Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="checkbox" name="subscribe" value="1" />\n')),(0,a.kt)("h3",{id:"radio-input"},"Radio Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="radio" name="gender" value="male" />\n<input type="radio" name="gender" value="female" />\n')),(0,a.kt)("h3",{id:"select-dropdown"},"Select Dropdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<select name="country">\n  <option value="usa">United States</option>\n  <option value="uk">United Kingdom</option>\n</select>\n')),(0,a.kt)("h3",{id:"textarea"},"Textarea"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<textarea name="message"></textarea>\n')),(0,a.kt)("h2",{id:"form-validation"},"Form Validation"),(0,a.kt)("p",null,"HTML5 introduced built-in form validation attributes to ensure data integrity and improve user experience."),(0,a.kt)("h3",{id:"required-attribute"},"Required Attribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="fullname" required />\n')),(0,a.kt)("h3",{id:"pattern-attribute"},"Pattern Attribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="zipcode" pattern="\\d{5}" />\n')),(0,a.kt)("h2",{id:"client-side-scripting"},"Client-Side Scripting"),(0,a.kt)("p",null,"You can use JavaScript to enhance form functionality and perform client-side validation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  function validateForm() {\n    var x = document.forms["myForm"]["email"].value;\n    if (x == "") {\n      alert("Email must be filled out");\n      return false;\n    }\n  }\n<\/script>\n\n<form name="myForm" onsubmit="return validateForm()">\n  <input type="email" name="email">\n  <input type="submit" value="Submit">\n</form>\n')),(0,a.kt)("h2",{id:"server-side-processing"},"Server-Side Processing"),(0,a.kt)("p",null,"After form submission, the data is typically processed on the server using server-side scripting languages like PHP, Python, or Node.js."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$username = $_POST['username'];\n$password = $_POST['password'];\n\n// Process form data...\n?>\n")),(0,a.kt)("p",null,"Understanding these concepts and techniques allows you to create robust and interactive forms that efficiently collect and process user input in web applications."))}d.isMDXComponent=!0}}]);