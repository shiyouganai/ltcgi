"use strict";(self.webpackChunkltcgi=self.webpackChunkltcgi||[]).push([[288],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>A});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(o),A=i,c=h["".concat(s,".").concat(A)]||h[A]||p[A]||a;return o?n.createElement(c,r(r({ref:t},d),{},{components:o})):n.createElement(c,r({ref:t},d))}));function A(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3581:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const a={id:"FAQ",sidebar_position:2},r="\u2753 Frequently Asked Questions",l={unversionedId:"FAQ",id:"FAQ",title:"\u2753 Frequently Asked Questions",description:"If you:",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/FAQ",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"FAQ",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2728 About LTCGI",permalink:"/"},next:{title:"\u26a1 Performance Optimization",permalink:"/Advanced/Performance_Optimization"}},s={},u=[{value:"\u2753 It doesn&#39;t work, nothing works, everything is broken, plz halp?!",id:"-it-doesnt-work-nothing-works-everything-is-broken-plz-halp",level:3},{value:"\u2753 LTCGI isn&#39;t displaying any reflections/lighting after I bake a shadowmap, what do?",id:"-ltcgi-isnt-displaying-any-reflectionslighting-after-i-bake-a-shadowmap-what-do",level:3},{value:"\u2753 I hooked up a video player (ProTV/U#Video/what-have-you) but it&#39;s not reflecting/lighting up?",id:"-i-hooked-up-a-video-player-protvuvideowhat-have-you-but-its-not-reflectinglighting-up",level:3},{value:"\u2753 I hooked up a video player, and while it is working, it breaks when switching resolution/quality/stream mode?",id:"-i-hooked-up-a-video-player-and-while-it-is-working-it-breaks-when-switching-resolutionqualitystream-mode",level:3},{value:"\u2753 I moved around some stuff/changed some settings but it&#39;s not applying to the scene?",id:"-i-moved-around-some-stuffchanged-some-settings-but-its-not-applying-to-the-scene",level:3},{value:"\u2753 Why does moving LTCGI screens around lag my editor?",id:"-why-does-moving-ltcgi-screens-around-lag-my-editor",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-frequently-asked-questions"},"\u2753 Frequently Asked Questions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Came here searching for answers to your problem: Good! Read on. Perhaps also consider reading the rest of the docs, they explain a lot!"),(0,i.kt)("li",{parentName:"ul"},"Have been sent a link to this page on my Discord: Please read through these carefully, either your answer is listed below or it describes how you can make a proper report"),(0,i.kt)("li",{parentName:"ul"},"Are just reading this because you're bored: Get some hobbies or something, idk")),(0,i.kt)("p",null,"Alright, here's my list:"),(0,i.kt)("h3",{id:"-it-doesnt-work-nothing-works-everything-is-broken-plz-halp"},"\u2753 It doesn't work, nothing works, everything is broken, plz halp?!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check the Unity Console!")),(0,i.kt)("p",null,"No, really. Please do this. Just in general, not just for LTCGI. A lot of problems become very obvious when you actually read the error messages."),(0,i.kt)("p",null,"For LTCGI, I recommend the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clear the console")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clear Console button",src:o(7611).Z,width:"565",height:"167"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Force an LTCGI update")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Force Material Update with button in Unity toolbar",src:o(6896).Z,width:"597",height:"229"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the console again, ",(0,i.kt)("em",{parentName:"li"},"only")," if it looks like this (no errors!) are you good")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unity Console with no errors",src:o(3307).Z,width:"156",height:"95"})),(0,i.kt)("h3",{id:"-ltcgi-isnt-displaying-any-reflectionslighting-after-i-bake-a-shadowmap-what-do"},"\u2753 LTCGI isn't displaying any reflections/lighting after I bake a shadowmap, what do?"),(0,i.kt)("p",null,'Shadowmap baking is the root of all evil - try without it. You can use the "Clear Baked Data" to get rid of previously baked ones:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LTCGI Controller clear baked data button",src:o(7539).Z,width:"1061",height:"459"})),(0,i.kt)("p",null,"Only when you're sure everything else is working, and (importantly!) ",(0,i.kt)("em",{parentName:"p"},"normal, unrelated to LTCGI, lightmap baking")," using whatever you use to bake ",(0,i.kt)("em",{parentName:"p"},"actually works"),", feel free to let me know. I will add it as another bullet-point for my ever expanding list of why Unity's handling of lighting data sucks."),(0,i.kt)("h3",{id:"-i-hooked-up-a-video-player-protvuvideowhat-have-you-but-its-not-reflectinglighting-up"},"\u2753 I hooked up a video player (ProTV/U#Video/what-have-you) but it's not reflecting/lighting up?"),(0,i.kt)("p",null,"First off, (discord) support for the video player itself can ",(0,i.kt)("em",{parentName:"p"},"probably not")," help you. Try not to bother them too much, please!"),(0,i.kt)("p",null,"Before reporting anything at all, see above for trying without shadowmaps. Then, do the simple test: Add a default Unity Quad (not a plane!) to your scene, add an ",(0,i.kt)("inlineCode",{parentName:"p"},"LTCGI_Screen")," component and set it to light up in some color, static, no video. Is this reflecting? If no: the video player is not the issue, LTCGI is borked instead. Go Back To Start, Do Not Pass Go."),(0,i.kt)("p",null,"If yes, however: Your video texture input is probably broken. Make sure your controller is not warning you about it like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LTCGI Controller warning about unset video texture",src:o(7553).Z,width:"1066",height:"169"})),(0,i.kt)("p",null,"To test, put some static image in that slot and hit CTRL-S. It should reflect that image now. If so, the problem is in how you get the video texture from your player into the LTCGI loopback-CRT. If you have no idea what that means, use one of the premade adapters and try not to change too much, this is the part where it gets complex and you should probably know what you're doing if it breaks ;)"),(0,i.kt)("h3",{id:"-i-hooked-up-a-video-player-and-while-it-is-working-it-breaks-when-switching-resolutionqualitystream-mode"},"\u2753 I hooked up a video player, and while it is working, it breaks when switching resolution/quality/stream mode?"),(0,i.kt)("p",null,"Video players in VRChat handle these settings by using multiple ",(0,i.kt)("em",{parentName:"p"},"video player components")," - which each need to be configured to output to a render texture, and then you need scripting to handle the switching for LTCGI. The included adapters to this for you!"),(0,i.kt)("p",null,"If your video player is not supported by an adapter, you can open a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PiMaker/ltcgi/issues"},"GitHub Issue")," for it, but no guarantees."),(0,i.kt)("p",null,"If you know some scripting, this is something that can be done manually too - look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PiMaker/ltcgi/tree/main/Adapters"},"existing adapter code")," for inspiration!"),(0,i.kt)("h3",{id:"-i-moved-around-some-stuffchanged-some-settings-but-its-not-applying-to-the-scene"},"\u2753 I moved around some stuff/changed some settings but it's not applying to the scene?"),(0,i.kt)("p",null,"LTCGI tries to run stuff automatically, but sometimes you need to help it out - CTRL-S to save forces a material update to run, or you can use the dedicated button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Force Material Update with button in Unity toolbar",src:o(6896).Z,width:"597",height:"229"})),(0,i.kt)("p",null,"Then go ",(0,i.kt)("strong",{parentName:"p"},"check the Unity Console for any errors!")),(0,i.kt)("h3",{id:"-why-does-moving-ltcgi-screens-around-lag-my-editor"},"\u2753 Why does moving LTCGI screens around lag my editor?"),(0,i.kt)("p",null,"Because I'm a bad programmer that didn't write optimized code. Sorry. Feel free to use the magic of open source to help me make it fast though!"))}p.isMDXComponent=!0},7611:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/clear_console-71e3220e128d44f6daef860f3b5234a1.jpg"},3307:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"},6896:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/force_material_update-1266dbd5872cb44992a8de13fa92aeae.jpg"},7539:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ltcgi_controller_clear_baked_data-468da313aeb5c0b38c389711e39748cf.jpg"},7553:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ltcgi_controller_no_vid_tex_warning-c43f0a2b61c7569144cd22ded7b5a4f2.jpg"}}]);