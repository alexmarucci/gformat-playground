(function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],d=0,p=[];d<a.length;d++)o=a[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var l=s[a];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=this["webpackJsonp"]=this["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app h-screen flex font-mono overflow-hidden",attrs:{id:"app"}},[t.showSidebar&&t.isMobile?s("div",{staticClass:"fixed h-screen w-screen bg-black z-20 opacity-75 overflow-hidden",on:{click:function(e){t.showSidebar=!t.showSidebar}}}):t._e(),t.showSidebar?s("div",{staticClass:"sidebar bg-white z-30 border-r-2 h-screen",class:{fixed:t.isMobile}},[s("div",{staticClass:"overflow-auto flex flex-col h-full"},[t._m(0),s("div",{staticClass:"settings px-4 text-grey-darkest"},[s("p",{staticClass:"text-sm text-center mt-1"},[t._v("\n            An humble HTML Formatter\n          ")]),s("div",{staticClass:"section mt-8"},[s("h3",{staticClass:"section-name font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n            Settings\n          ")]),s("button",{staticClass:"mt-2 text-xs text-grey-dark hover:text-grey-darkest",on:{click:t.resetToDefaults}},[t._v("\n            Reset to defaults\n          ")]),s("div",{staticClass:"section-item flex items-center mt-4"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Print width")]),s("div",{staticClass:"setting-input w-16 ml-4"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.opts.printWidth,expression:"opts.printWidth",modifiers:{number:!0}}],staticClass:"bg-grey-lighter text-grey-darkest border font-medium w-full text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline",attrs:{type:"number"},domProps:{value:t.opts.printWidth},on:{input:function(e){e.target.composing||t.$set(t.opts,"printWidth",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),s("div",{staticClass:"section-item flex items-center mt-2",class:{"opacity-50":t.opts.useTabs}},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("\n              "+t._s(t.opts.useTabs?"Tab":"Space")+" width\n            ")]),s("div",{staticClass:"setting-input w-16 ml-4"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.opts.tabWidth,expression:"opts.tabWidth",modifiers:{number:!0}}],staticClass:"bg-grey-lighter text-grey-darkest border font-medium w-full text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline",attrs:{disabled:t.opts.useTabs,type:"number"},domProps:{value:t.opts.tabWidth},on:{input:function(e){e.target.composing||t.$set(t.opts,"tabWidth",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),s("div",{staticClass:"section-item flex items-center mt-1"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Use Tabs")]),s("AppToggle",{staticClass:"ml-4",model:{value:t.opts.useTabs,callback:function(e){t.$set(t.opts,"useTabs",e)},expression:"opts.useTabs"}})],1),s("div",{staticClass:"section-item flex items-center"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Single Quote")]),s("AppToggle",{staticClass:"ml-4",model:{value:t.opts.singleQuote,callback:function(e){t.$set(t.opts,"singleQuote",e)},expression:"opts.singleQuote"}})],1),s("div",{staticClass:"section-item flex items-center"},[s("div",{staticClass:"setting-label w-32 text-sm "},[t._v("Wrap Attributes")]),s("AppToggle",{staticClass:"ml-4",model:{value:t.opts.wrapAttributes,callback:function(e){t.$set(t.opts,"wrapAttributes",e)},expression:"opts.wrapAttributes"}})],1),s("div",{staticClass:"section-item flex items-center"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Sort Attributes")]),s("AppToggle",{staticClass:"ml-4",model:{value:t.opts.sortAttributes,callback:function(e){t.$set(t.opts,"sortAttributes",e)},expression:"opts.sortAttributes"}})],1),s("div",{staticClass:"section-item flex items-center",staticStyle:{display:"none"}},[s("div",{staticClass:"setting-label w-32 text-sm text-grey"},[t._v("\n              Use Prettier\n            ")]),s("AppToggle",{staticClass:"ml-4",attrs:{disabled:""},model:{value:t.opts.usePrettier,callback:function(e){t.$set(t.opts,"usePrettier",e)},expression:"opts.usePrettier"}})],1)]),s("div",{staticClass:"section"},[s("h3",{staticClass:"section-name mt-8 font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n            Editor\n          ")]),t._m(1),s("div",{staticClass:"section-item flex items-center mt-1"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Line Numbers")]),s("AppToggle",{staticClass:"ml-4",model:{value:t.linenumbers,callback:function(e){t.linenumbers=e},expression:"linenumbers"}})],1)])]),s("div",{staticClass:"section mt-8 px-2 lg:hidden"},[s("h3",{staticClass:"section-name px-2 mb-2 font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n          Examples\n        ")]),s("AppExampleButtons",{staticClass:"w-full p-2 flex flex-col flex-no-shrink flex-wrap"})],1),s("div",{staticClass:"about mt-auto pt-8 text-grey-dark"},[s("div",{staticClass:"section px-4 my-4"},[s("div",{staticClass:"flex justify-between"},[s("h3",{staticClass:"section-name font-medium text-xxs uppercase"},[t._v("About")]),s("span",{staticClass:"font-medium text-xxs text-grey"},[t._v("\n              "+t._s(t.prettyHtmlVersion)+"\n            ")])]),t._m(2)])])])]):t._e(),s("div",{staticClass:"content bg-white flex flex-1 flex-col overflow-hidden z-10"},[s("header",{staticClass:"header border-b-2 flex items-center px-4 py-3"},[s("button",{staticClass:"hamburger focus:outline-none text-grey-darker hover:text-black",on:{click:function(e){t.showSidebar=!t.showSidebar}}},[s("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("g",{attrs:{fill:"currentColor"}},[t.showSidebar?s("path",{attrs:{d:"M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"}}):t._e(),s("rect",{attrs:{x:"3",y:"11",width:"18",height:"2",rx:".95",ry:".95"}}),s("rect",{attrs:{x:"3",y:"17",width:"18",height:"2",rx:".95",ry:".95"}}),s("rect",{attrs:{x:"3",y:"5",width:"18",height:"2",rx:".95",ry:".95"}})])])]),t.showSidebar?t._e():s("div",{staticClass:"logo-mobile ml-6 flex items-center"},[t._m(3)]),s("div",{staticClass:"ml-auto hidden lg:flex items-center"},[s("span",{staticClass:"text-xs text-grey-dark font-medium uppercase pr-2"},[t._v("\n          Examples\n        ")]),s("AppExampleButtons")],1),s("button",{staticClass:"ml-auto bg-grey-lighter text-grey-darker uppercase hover:bg-grey-darker hover:text-white font-bold text-sm py-2 px-6 rounded-full inline-flex items-center tracking-wide focus:outline-none focus:shadow-outline",on:{click:t.prettify}},[s("svg",{staticClass:"stroke-current w-3 h-3 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"9971 -24 8.766 10.985"}},[s("path",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M9971.5-23.5l7.766 4.992-4.5 2.892-3.266 2.101z"}})]),s("span",{},[t._v("Run")])])]),s("main",{staticClass:"section--main flex-1 flex flex-col lg:flex-row min-h-0"},[s("div",{staticClass:"editor flex-no-shrink flex-1 flex flex-col overflow-hidden pt-4"},[s("header",{staticClass:"flex relative"},[s("h3",{staticClass:"px-4 flex-no-shrink font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n            Source\n          ")]),s("button",{staticClass:"absolute text-grey-dark flex items-center pin-r pin-t -mt-2 mr-2 p-1 font-normal hover:text-grey-darkest rounded mx-1 focus:outline-none focus:shadow-outline",attrs:{title:"clear text"},on:{click:t.clear}},[s("svg",{staticClass:"w-4 h-4 mt-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M18 6L6 18M6 6l12 12"}})])])]),s("prism-editor",{staticClass:"my-editor mt-4 px-2",attrs:{code:t.code,language:"html","line-numbers":t.linenumbers},on:{change:t.changeCode}})],1),s("div",{staticClass:"output border-t-2 lg:border-t-0 lg:border-l-2 flex-no-shrink flex-1 flex flex-col overflow-hidden pt-4"},[s("header",{staticClass:"flex relative"},[s("h3",{staticClass:"px-4 flex-no-shrink font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n            Output\n          ")]),s("button",{staticClass:"btn-copy absolute text-grey-dark flex items-center pin-r pin-t -mt-2 mr-2 p-1 font-normal uppercase text-xs hover:text-grey-darkest rounded mx-1 focus:outline-none focus:shadow-outline group"},[s("span",{staticClass:"opacity-0 font-semibold mr-2 text-grey-dark group-hover:opacity-100"},[t._v("\n              Copy to clipboard\n            ")]),s("svg",{staticClass:"w-5 h-5 mt-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}}),s("rect",{attrs:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}})])])]),s("prism-editor",{staticClass:"my-editor mt-4 px-2 focus:outline-none",style:{"tab-size":t.opts.tabWidth},attrs:{code:t.result,language:"html",readonly:"","line-numbers":t.linenumbers}}),s("header",{directives:[{name:"show",rawName:"v-show",value:t.debugMsg,expression:"debugMsg"}],staticClass:"flex relative pt-4 border-t-2"},[s("h3",{staticClass:"px-4 flex-no-shrink font-medium tracking-wide text-xxs text-grey-dark uppercase"},[t._v("\n            Debug\n          ")])]),s("prism-editor",{directives:[{name:"show",rawName:"v-show",value:t.debugMsg,expression:"debugMsg"}],staticClass:"my-editor debug-editor mt-4 px-2 focus:outline-none",style:{"tab-size":t.opts.tabWidth},attrs:{code:t.debugMsg,language:"html",readonly:!0,"line-numbers":!1}})],1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"text-center",attrs:{href:"#"}},[n("img",{staticClass:"w-24 px-4 py-3",attrs:{src:s("cf05"),alt:"GFormat HTLM"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-item flex items-center mt-4"},[s("div",{staticClass:"setting-label w-32 text-sm"},[t._v("Source type")]),s("div",{staticClass:"setting-input flex-1 ml-4"},[s("select",{staticClass:"bg-grey-lighter text-grey-darker border font-medium w-full text-xs py-1 pl-2 rounded focus:outline-none focus:shadow-outline"},[s("option",{attrs:{value:"markup"}},[t._v("HTML-like")]),s("option",{attrs:{value:"js",disabled:""}},[t._v("Javascript")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-item leading-normal flex items-center mt-4"},[s("p",{staticClass:"text-xxs font-normal"},[t._v("\n              - Playground for\n              "),s("a",{staticClass:"no-underline hover:underline font-bold text-grey-dark",attrs:{href:"https://github.com/alexmarucci/gformat-html",target:"_blank"}},[t._v("\n                gformat-html\n              ")]),s("br"),t._v("\n              - Source code on\n              "),s("a",{staticClass:"no-underline hover:underline font-bold text-grey-dark",attrs:{href:"https://github.com/alexmarucci/gformat-html-playground",target:"_blank"}},[t._v("\n                GitHub\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"logo w-10 -my-1",attrs:{href:"#"}},[n("img",{attrs:{src:s("cf05"),alt:"GFormat HTML"}})])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("7f7f"),s("96cf"),s("3b8d")),a=s("bd86"),l=(s("fdfb"),s("b311")),c=s.n(l),u=(s("a347"),s("f1b6")),d=s.n(u),p=null;function m(){return null===p&&console.log("[gformat-html-worker]: Worker hasn't initialized yet."),{prettyhtml:p}}function f(){p=d()()}var g=s("431a"),h=s.n(g),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toggle overflow-hidden flex items-center h-8 w-8 relative focus:outline-none",style:t.styleObj,attrs:{tabindex:"0"},on:{click:t.toggle}},[s("span",{staticClass:"bg-grey rounded-full toggle-input w-8 h-2",class:t.underlayClasses}),s("span",{staticClass:"absolute rounded-full w-4 h-4 bg-black focus:bg-grey",class:t.thumbClasses})])},x=[],v={props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{styleObj:function(){return this.disabled?{opacity:".5",cursor:"not-allowed"}:{opacity:"1",cursor:"pointer"}},underlayClasses:function(){var t=this.value?"bg-purple-light":"bg-grey";return[t]},thumbClasses:function(){var t=this.value?"bg-purple border border-purple-dark pin-r":"bg-white border border-grey pin-l";return[t]}},methods:{toggle:function(){this.disabled||this.$emit("input",!this.value)}}},w=v,y=(s("d5b0"),s("2877")),C=Object(y["a"])(w,b,x,!1,null,null,null),k=C.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-sm"},[s("button",{staticClass:"bg-grey-lighter text-grey-darker font-medium text-xs p-2 mx-0 lg:mx-1 my-1 lg:my-0 hover:bg-grey-darker hover:text-white rounded focus:outline-none focus:shadow-outline",on:{click:function(e){return t.example("html")}}},[t._v("\n    HTML5\n  ")]),s("button",{staticClass:"bg-grey-lighter text-grey-darker font-medium text-xs p-2 mx-0 lg:mx-1 my-1 lg:my-0 hover:bg-grey-darker hover:text-white rounded focus:outline-none focus:shadow-outline",on:{click:function(e){return t.example("vue")}}},[t._v("\n    VUE\n  ")]),s("button",{staticClass:"bg-grey-lighter text-grey-darker font-medium text-xs p-2 mx-0 lg:mx-1 my-1 lg:my-0 hover:bg-grey-darker hover:text-white rounded focus:outline-none focus:shadow-outline",on:{click:function(e){return t.example("angular")}}},[t._v("\n    ANGULAR\n  ")]),s("button",{staticClass:"bg-grey-lighter text-grey-darker font-medium text-xs p-2 mx-0 lg:mx-1 my-1 lg:my-0 hover:bg-grey-darker hover:text-white rounded focus:outline-none focus:shadow-outline",on:{click:function(e){return t.example("svelte")}}},[t._v("\n    SVELTE\n  ")])])},S=[],O=new n["a"]({}),j={methods:{example:function(t){O.$emit("example",t)}}},E=j,M=Object(y["a"])(E,_,S,!1,null,null,null),T=M.exports,W={html:'<!DOCTYPE html>\n  <html lang="en">\n    <head>\n    </head>\n\n    <body class="text-center">\n      <form class="form-signin">\n        <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">\n  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>\n      <label for="inputEmail" class="sr-only">Email address</label>\n    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>\n        <div class="checkbox mb-3">\n          <label>\n            <input type="checkbox" value="remember-me"> Remember me\n          </label>\n        </div>\n              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>\n        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>\n      </form>\n    </body>\n  </html>',vue:'\n<div id="app">\n      <div class="header">\n    <button @click="prettify">Prettify</button>\n  </div>\n  <textarea wrap/>\n      <div style="display:flex">\n    <prism-editor class="my-editor" :code="code" @change="changeCode" language="html" />\n<prism-editor :code="result" language="html" />\n  </div>\n</div>',angular:'<form #heroForm (ngSubmit)="onSubmit(heroForm)">\n  <input type="text" class="input too much classes" [(onChange)]="dede" name="test" />\n    <button [style.color]="isSpecial ? \'red\' : \'green\'"></button></form>',svelte:"<input bind:value='newCat' placeholder='Cat name + [ENTER]' on:keydown='addCat(event.keyCode===13)'>\n  <button on:click='addCat()'>Add</button>\n    <ul>\n        {{#each cats as cat}}\n    <Cat cat='{{ cat }}'></Cat>\n  {{/each}}\n  </ul>\n<p>Count: {{count}}</p>"};function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function A(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}f();var $={tabWidth:2,useTabs:!1,printWidth:80,usePrettier:!1,singleQuote:!1,wrapAttributes:!1,sortAttributes:!1},L={name:"app",components:{AppToggle:k,AppExampleButtons:T,PrismEditor:h.a},data:function(){return{isMobile:!1,showSidebar:!0,prettifier:null,prettyHtmlVersion:"0.1.0",linenumbers:!0,opts:A({},$),debugMsg:"",result:"",code:""}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,s,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.prettifier=m().prettyhtml.run,new c.a(".btn-copy",{text:function(){return n.result}}),e=0,s=function(){e!==window.innerWidth&&window.innerWidth<=576?(n.isMobile=!0,n.showSidebar=!1):window.innerWidth>576&&window.innerWidth<=991?(n.isMobile=!1,n.showSidebar=!1):window.innerWidth>991&&(n.isMobile=!1,n.showSidebar=!0),e=window.innerWidth},s(),window.addEventListener("resize",s),O.$on("example",this.example);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{prettify:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.debugMsg="",t.next=4,this.prettifier(this.code,this.opts);case 4:this.result=t.sent,t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),e=t.t0.message,this.debugMsg="❌  ".concat(e.name," - ").concat(e.ruleId||"Error",": ").concat(e.message),console.error("❌  ".concat(e.ruleId||"Error",":"),e);case 12:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),resetToDefaults:function(){this.opts=A({},$)},clear:function(){this.debugMsg="",this.code="",this.result=""},changeCode:function(t){this.code=t},example:function(t){this.clear(),this.code=W[t],this.prettify()}}},N=L,z=(s("034f"),Object(y["a"])(N,r,i,!1,null,null,null)),B=z.exports,H=s("9483"),D=function(t){var e=t.waiting;return e?(console.log("[SW] Doing worker.skipWaiting()."),new Promise(function(t,s){var n=new MessageChannel;n.port1.onmessage=function(e){console.log("[SW] Done worker.skipWaiting()."),e.data.error?s(e.data.error):t(e.data)},e.postMessage({action:"skipWaiting"},[n.port2])})):Promise.resolve()},R=null,F=null,U=function(){D(F).then(function(){window.location.reload()}).catch(function(t){console.error(t)})};function V(){null==R&&(R=document.createElement("div"),document.body.appendChild(R)),R.innerHTML='\n   <div\n    class="sw-snackbar"\n    style="background:#323232; color:#fff; width: 100%; max-width: 344px; height:48px; padding: 1rem; border-radius:2px; font-size: 1em; position:fixed; right:1rem; bottom: 1rem; display:flex; align-items:center; justify-content:space-between;"\n  >\n    <span>New content is available.</span>\n    <button\n      style="background:none; color:#2ecc71; font-size: 0.875em; letter-spacing:.08929em; border:none; outline:none; text-transform: uppercase; cursor: pointer;"\n    >Reload</button>\n  </div>',R.addEventListener("click",function(t){"BUTTON"===t.target.nodeName&&U()})}Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("[SW] App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("[SW] Content has been cached for offline use.")},updated:function(t){console.log("[SW] New content is available; please refresh!."),F=t,V()},offline:function(){console.log("[SW] No internet connection found. App is running in offline mode.")},error:function(t){console.error("[SW] Error during service worker registration:",t)}});s("c197");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,e,s){},a347:function(t,e,s){},bfa4:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.7636e106.png"},d5b0:function(t,e,s){"use strict";var n=s("bfa4"),r=s.n(n);r.a},f1b6:function(t,e,s){var n=s("3d67"),r=["run"];t.exports=function(){var t=new Worker(s.p+"c7c2b96b72f45c7ac64b.worker.js",{name:"[hash].worker.js"});return n(t,r),t}}});
//# sourceMappingURL=app.619725db.js.map