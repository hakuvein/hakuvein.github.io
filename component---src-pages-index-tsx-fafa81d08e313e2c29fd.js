"use strict";(self.webpackChunkhakuvein=self.webpackChunkhakuvein||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=n(c)===c&&r(c)!==c,s=o,o=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return F},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,c=s(e,h);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=s(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,v);return t?n.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:S},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let O,_;const P=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=s(e,N);const{width:y,height:b,layout:w}=r,v=c(y,b,w),{style:E,className:k}=v,x=s(v,T),I=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,y,b);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=I.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(_&&j.has(C))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;I.current&&(I.current.innerHTML=a(o({isLoading:!0,isLoaded:j.has(C),image:r},f)),j.has(C)||(t=requestAnimationFrame((()=>{I.current&&(n=s(I.current,C,j,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(C)&&_&&(I.current.innerHTML=_(o({isLoading:j.has(C),isLoaded:j.has(C),image:r},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},x,{style:o({},E,i,{backgroundColor:d}),className:k+(u?" "+u:""),ref:I,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(P,e):null}));q.propTypes=L,q.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:r,__error:i}=t,l=s(t,z);return i&&console.warn(i),r?n.createElement(e,o({image:r},l)):(console.warn("Image not loaded",a),null)}}const R=A((function(e){let{as:t="div",className:a,class:r,style:i,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=s(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=o({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:S,layout:L,images:N,placeholder:T,backgroundColor:j}=l,O=c(v,S,L),{style:_,className:P}=O,q=s(O,I),z={fallback:void 0,sources:[]};return N.fallback&&(z.fallback=o({},N.fallback,{srcSet:N.fallback.srcSet?C(N.fallback.srcSet):void 0})),N.sources&&(z.sources=N.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,o({},q,{style:o({},_,i,{backgroundColor:f}),className:P+(a?" "+a:"")}),n.createElement(g,{layout:L,width:v,height:S},n.createElement(E,o({},u(T,!1,L,v,S,j,y,b))),n.createElement(k,o({"data-gatsby-image-ssr":"",className:p},w,d("eager"===m,!1,z,m,h)))))})),H=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:S,width:H,height:H,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=W;const F=A(q);F.displayName="StaticImage",F.propTypes=W},586:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l},default:function(){return c}});var n=a(7294);var r=()=>n.createElement("div",{className:"sticky top-0 bg-black flex justify-center items-center gap-16"},[["Home","#home-section"],["About Me","#about-me-section"],["Media Kit","#media-kit-section"],["Contact Me","#contact-me-section"]].map((e=>{let[t,a]=e;return n.createElement(i,{label:t,link:a})})));const i=e=>n.createElement("a",{href:e.link,className:"text-white font-semibold font-play"},e.label);var o=a(8032),s=a.p+"static/sample-video-9bd63857e1ef961b32fbb8f2bb97d277.mp4";function l(){return n.createElement(n.Fragment,null,n.createElement("title",null,"Hakuvein"),n.createElement("meta",{name:"description",content:"Brian Li - Content Creator Portfolio"}),n.createElement("meta",{name:"keywords",content:"hakuvein brian li streamer content creator portfolio website"}),n.createElement("meta",{name:"author",content:"Jonathan Lee"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}))}var c=()=>n.createElement("main",null,n.createElement("div",{className:"absolute w-screen top-0 left-0 flex flex-col items-center"},n.createElement("div",{id:"left-column",className:"min-w-0"}),n.createElement("div",{id:"center-column",className:"max-w-5xl"},n.createElement(o.S,{id:"header-banner",src:"../media/banner3.png",alt:"Banner",__imageData:a(1564)}),n.createElement(r,null),n.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0},n.createElement("source",{src:s,type:"video/mp4"})),n.createElement("section",{id:"about-me-section"},n.createElement("h1",null,"Welcome to Hakuvein's Streamer Portfolio!"),n.createElement("h2",null,"About Me"),n.createElement("p",null,"Hey there, I'm Hakuvein, also known as Brian Li. It's awesome to have you here and let me share my journey as a streamer with you. Gaming isn't just a hobby for me; it's my absolute passion. I'm thrilled to bring that excitement to viewers like you."),n.createElement("h3",null,"Gaming Expertise"),n.createElement("p",null,"When it comes to games, I'm an all-rounder. From heart-pumping action to epic adventures and everything in between, I've explored a wide range of genres. I take pride in understanding the ins and outs of game mechanics, allowing me to perform at my best and provide helpful insights to fellow gamers. Whether I'm dominating in competitive titles or immersing myself in captivating narratives, I'm always up for a thrilling gaming experience."),n.createElement(o.S,{src:"../media/profile.jpg",alt:"",__imageData:a(9086)}),n.createElement("h3",null,"Interactive Community"),n.createElement("p",null,"But let me tell you, it's not just about me. It's about our community. I believe that streaming is a shared experience, and I'm incredibly grateful for the amazing community we've built together. You're not just a spectator; you're an integral part of the adventure. I cherish our lively conversations, answering your questions, and creating a positive, inclusive space where everyone feels welcome. Together, we make every stream an unforgettable journey.")),n.createElement("section",{id:"media-kit-section"},n.createElement("h2",null,"Media Kit"),n.createElement("h3",null,"Highlights and Achievements"),n.createElement("p",null,"Curious about my past achievements? Well, I've had some truly epic moments and remarkable milestones along the way. From exhilarating multiplayer victories to mind-blowing solo plays, you can catch all the highlights on my portfolio. It's a testament to the hard work and dedication I put into my craft, and I'm excited to share those moments with you."),n.createElement("h3",null,"Support and Collaborations"),n.createElement("p",null,"But my journey wouldn't be complete without your support. It means the world to me, and I'm always open to collaborations and partnerships. If you have an idea or a platform where we can create something extraordinary together, don't hesitate to reach out. Let's combine our talents and provide viewers worldwide with an unforgettable gaming experience.")),n.createElement("section",{id:"contact-me-section"},n.createElement("h2",null,"Stay Connected"),n.createElement("p",null,"To stay connected and never miss a moment, make sure to follow me on Twitch. That's where all the magic happens with my live streams. You can also find me on social media platforms like Twitter and Instagram, where I share updates, highlights, and all the latest news. Join our Hakuvein community today, and together, we'll embark on an incredible gaming adventure."),n.createElement("p",null,"Thank you for visiting my Streamer Portfolio. I hope you enjoy exploring the world of gaming through my streams, and remember, above all, let's have fun along the way!"))),n.createElement("div",{id:"right-column",className:"min-w-0"})))},9086:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/463d6e5cff7d3ce7fd77150b778bec33/1b894/profile.jpg","srcSet":"/static/463d6e5cff7d3ce7fd77150b778bec33/499f6/profile.jpg 80w,\\n/static/463d6e5cff7d3ce7fd77150b778bec33/41624/profile.jpg 160w,\\n/static/463d6e5cff7d3ce7fd77150b778bec33/1b894/profile.jpg 320w","sizes":"(min-width: 320px) 320px, 100vw"},"sources":[{"srcSet":"/static/463d6e5cff7d3ce7fd77150b778bec33/61ca6/profile.webp 80w,\\n/static/463d6e5cff7d3ce7fd77150b778bec33/60b4d/profile.webp 160w,\\n/static/463d6e5cff7d3ce7fd77150b778bec33/5e011/profile.webp 320w","type":"image/webp","sizes":"(min-width: 320px) 320px, 100vw"}]},"width":320,"height":320}')},1564:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/fa184d4c550124d156741e5a1e2aa19e/e244e/banner3.png","srcSet":"/static/fa184d4c550124d156741e5a1e2aa19e/b697a/banner3.png 640w,\\n/static/fa184d4c550124d156741e5a1e2aa19e/0960b/banner3.png 1280w,\\n/static/fa184d4c550124d156741e5a1e2aa19e/e244e/banner3.png 2560w","sizes":"(min-width: 2560px) 2560px, 100vw"},"sources":[{"srcSet":"/static/fa184d4c550124d156741e5a1e2aa19e/f9810/banner3.webp 640w,\\n/static/fa184d4c550124d156741e5a1e2aa19e/c40ec/banner3.webp 1280w,\\n/static/fa184d4c550124d156741e5a1e2aa19e/bd453/banner3.webp 2560w","type":"image/webp","sizes":"(min-width: 2560px) 2560px, 100vw"}]},"width":2560,"height":384}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fafa81d08e313e2c29fd.js.map