"use strict";(self.webpackChunkgo_flowmeter_docs=self.webpackChunkgo_flowmeter_docs||[]).push([[116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="CLI",l={unversionedId:"tutorial-cli/create-a-page",id:"tutorial-cli/create-a-page",title:"CLI",description:"-filename",source:"@site/docs/tutorial-cli/create-a-page.md",sourceDirName:"tutorial-cli",slug:"/tutorial-cli/create-a-page",permalink:"/go-flowmeter-docs/docs/tutorial-cli/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-cli/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - CLI",permalink:"/go-flowmeter-docs/docs/category/tutorial---cli"},next:{title:"Tutorial - Time Based Features",permalink:"/go-flowmeter-docs/docs/category/tutorial---time-based-features"}},c={},s=[{value:"<code>-filename</code>",id:"-filename",level:2},{value:"<code>-output</code>",id:"-output",level:2},{value:"<code>-address</code>",id:"-address",level:2},{value:"<code>-port</code>",id:"-port",level:2},{value:"<code>-logs</code>",id:"-logs",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cli"},"CLI"),(0,n.kt)("h2",{id:"-filename"},(0,n.kt)("inlineCode",{parentName:"h2"},"-filename")),(0,n.kt)("p",null,"Used to specify the name of the file to read data from, later on used to generate the flows."),(0,n.kt)("h2",{id:"-output"},(0,n.kt)("inlineCode",{parentName:"h2"},"-output")),(0,n.kt)("p",null,"Once the flow have been generated and their corresponding features extracted, the results are dumped into a file."),(0,n.kt)("h2",{id:"-address"},(0,n.kt)("inlineCode",{parentName:"h2"},"-address")),(0,n.kt)("p",null,"This helps go-flowmeter to know what is the IP to reach the machine running the gRPC server to read data from."),(0,n.kt)("h2",{id:"-port"},(0,n.kt)("inlineCode",{parentName:"h2"},"-port")),(0,n.kt)("p",null,"Same as above, but for the port instead of the IP."),(0,n.kt)("h2",{id:"-logs"},(0,n.kt)("inlineCode",{parentName:"h2"},"-logs")),(0,n.kt)("p",null,"Specifies the log severity to use when running go-flowmeter."))}d.isMDXComponent=!0}}]);