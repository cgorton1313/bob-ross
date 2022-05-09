"use strict";(()=>{var V=Object.defineProperty;var e=(b,f)=>V(b,"name",{value:f,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6686,7157],{2235:(b,f,r)=>{r.d(f,{S:()=>_});function a(v){const n=document.querySelectorAll(v);if(n.length>0)return n[n.length-1]}e(a,"queryLast");function E(){const v=a("meta[name=analytics-location]");return v?v.content:window.location.pathname}e(E,"pagePathname");function u(){const v=a("meta[name=analytics-location-query-strip]");let n="";v||(n=window.location.search);const p=a("meta[name=analytics-location-params]");p&&(n+=(n?"&":"?")+p.content);for(const l of document.querySelectorAll("meta[name=analytics-param-rename]")){const h=l.content.split(":",2);n=n.replace(new RegExp(`(^|[?&])${h[0]}($|=)`,"g"),`$1${h[1]}$2`)}return n}e(u,"pageQuery");function _(){return`${window.location.protocol}//${window.location.host}${E()+u()}`}e(_,"requestUri")},81503:(b,f,r)=>{r.d(f,{$1:()=>E,d8:()=>_,ej:()=>a,kT:()=>v});function a(n){return E(n)[0]}e(a,"getCookie");function E(n){const p=[];for(const l of u()){const[h,g]=l.trim().split("=");n===h&&typeof g!="undefined"&&p.push({key:h,value:g})}return p}e(E,"getCookies");function u(){try{return document.cookie.split(";")}catch{return[]}}e(u,"readCookies");function _(n,p,l=null,h=!1,g="lax"){let y=document.domain;if(y==null)throw new Error("Unable to get document domain");y.endsWith(".github.com")&&(y="github.com");const S=location.protocol==="https:"?"; secure":"",I=l?`; expires=${l}`:"";h===!1&&(y=`.${y}`);try{document.cookie=`${n}=${p}; path=/; domain=${y}${I}${S}; samesite=${g}`}catch{}}e(_,"setCookie");function v(n,p=!1){let l=document.domain;if(l==null)throw new Error("Unable to get document domain");l.endsWith(".github.com")&&(l="github.com");const h=new Date().getTime(),g=new Date(h-1).toUTCString(),y=location.protocol==="https:"?"; secure":"",S=`; expires=${g}`;p===!1&&(l=`.${l}`);try{document.cookie=`${n}=''; path=/; domain=${l}${S}${y}`}catch{}}e(v,"deleteCookie")},26360:(b,f,r)=>{r.d(f,{LN:()=>g,aJ:()=>x,cI:()=>L,eK:()=>S,mT:()=>y});var a=r(79785),E=r(43452),u=r(82918),_=r(50232),v=r(28382),n=r(2235);let p=!1,l=0;const h=Date.now();function g(o){o.error&&I(i(C(o.error)))}e(g,"reportEvent");async function y(o){if(!!o.promise)try{await o.promise}catch(d){I(i(C(d)))}}e(y,"reportPromiseRejectionEvent");function S(o,d={}){o&&o.name!=="AbortError"&&I(i(C(o),d))}e(S,"reportError");async function I(o){var d,R;if(!D())return;const U=(R=(d=document.head)==null?void 0:d.querySelector('meta[name="browser-errors-url"]'))==null?void 0:R.content;if(!!U){if(T(o.error.stacktrace)){p=!0;return}l++;try{await fetch(U,{method:"post",body:JSON.stringify(o)})}catch{}}}e(I,"report");function C(o){return{type:o.name,value:o.message,stacktrace:L(o)}}e(C,"formatError");function i(o,d={}){return Object.assign({error:o,sanitizedUrl:(0,n.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:x()||void 0},d)}e(i,"errorContext");function L(o){return(0,v.Q)(o.stack||"").map(d=>({filename:d.file||"",function:String(d.methodName),lineno:(d.lineNumber||0).toString(),colno:(d.column||0).toString()}))}e(L,"stacktrace");const O=/(chrome|moz|safari)-extension:\/\//;function T(o){return o.some(d=>O.test(d.filename)||O.test(d.function))}e(T,"isExtensionError");function x(){var o,d;const R=(d=(o=document.head)==null?void 0:o.querySelector('meta[name="user-login"]'))==null?void 0:d.content;return R||`anonymous-${(0,u.b)()}`}e(x,"pageUser");let P=!1;window.addEventListener("pageshow",()=>P=!1),window.addEventListener("pagehide",()=>P=!0),document.addEventListener(a.QE.ERROR,o=>{I(i({type:"SoftNavError",value:o.detail,stacktrace:L(new Error)}))});function D(){return!P&&!p&&l<10&&(0,_.Gb)()&&!(0,E.Z)(document)}e(D,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",d=>{S(d.data.error)})},43452:(b,f,r)=>{r.d(f,{Z:()=>a});function a(E){var u,_;const v=(_=(u=E.head)==null?void 0:u.querySelector('meta[name="expected-hostname"]'))==null?void 0:_.content;if(!v)return!1;const n=v.replace(/\.$/,"").split(".").slice(-2).join("."),p=E.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return n!==p}e(a,"detectProxySite")},60785:(b,f,r)=>{r.d(f,{Z:()=>E});class a{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(a,"NoOpStorage");function E(u,_={throwQuotaErrorsOnSet:!1},v=window){let n;try{n=v[u]}catch{n=new a}const{throwQuotaErrorsOnSet:p}=_;function l(y){try{return n.getItem(y)}catch{return null}}e(l,"getItem");function h(y,S){try{n.setItem(y,S)}catch(I){if(p&&I.message.toLowerCase().includes("quota"))throw I}}e(h,"setItem");function g(y){try{n.removeItem(y)}catch{}}return e(g,"removeItem"),{getItem:l,setItem:h,removeItem:g}}e(E,"safeStorage")},46836:(b,f,r)=>{r.d(f,{LS:()=>u,cl:()=>_,rV:()=>E});var a=r(60785);const{getItem:E,setItem:u,removeItem:_}=(0,a.Z)("sessionStorage")},79785:(b,f,r)=>{r.d(f,{Ak:()=>I,F6:()=>T,FP:()=>y,LD:()=>g,OE:()=>h,Po:()=>l,QE:()=>u,Xk:()=>L,Ys:()=>O,wP:()=>x});var a=r(46836),E=r(2235);const u=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error"}),_="soft-navigation-fail",v="soft-navigation-referrer",n="soft-navigation-marker",p="reload";function l(){return(0,a.rV)(n)==="1"}e(l,"inSoftNavigation");function h(){return Boolean(C())}e(h,"hasSoftNavFailure");function g(){(0,a.LS)(n,"1"),(0,a.LS)(v,(0,E.S)()||window.location.href)}e(g,"startSoftNav");function y(){(0,a.LS)(n,"0")}e(y,"endSoftNav");function S(){(0,a.LS)(n,"0"),(0,a.cl)(v),(0,a.cl)(_)}e(S,"clearSoftNav");function I(P){(0,a.LS)(_,P||p)}e(I,"setSoftNavFailReason");function C(){return(0,a.rV)(_)}e(C,"getSoftNavFailReason");let i=0;function L(){i+=1,document.dispatchEvent(new CustomEvent(u.SUCCESS,{detail:i}))}e(L,"softNavSucceeded");function O(){document.dispatchEvent(new CustomEvent(u.ERROR,{detail:C()||p})),i=0,S()}e(O,"softNavFailed");function T(){document.dispatchEvent(new CustomEvent(u.INITIAL)),i=0,S()}e(T,"softNavInitial");function x(){return(0,a.rV)(v)||document.referrer}e(x,"getSoftNavReferrer")},70322:(b,f,r)=>{var a=r(26360),E=r(2235),u=r(48266);const _={handleError(t){l(t)}};function v(){var t;n();const c=(t=document.head.querySelector("meta[name=optimizely-datafile]"))==null?void 0:t.content;return u.ZP.createInstance({datafile:c,errorHandler:_})}e(v,"createInstance");function n(){const t=p("optimizely.logLevel");t?u.ZP.setLogLevel(t):u.ZP.setLogger(null)}e(n,"configureLogger");function p(t){var c;try{return(c=window.localStorage)==null?void 0:c.getItem(t)}catch{return null}}e(p,"localStorage");async function l(t){var c,s;const m=(s=(c=document.head)==null?void 0:c.querySelector('meta[name="browser-optimizely-client-errors-url"]'))==null?void 0:s.content;if(!m)return;const w={message:t.message,stack:t.stack,stacktrace:(0,a.cI)(t),sanitizedUrl:(0,E.S)()||window.location.href,user:(0,a.aJ)()||void 0};try{await fetch(m,{method:"post",body:JSON.stringify(w)})}catch{}}e(l,"reportError");var h=r(81503),g=r(82918),y=r(64463),S=r(59753),I,C;let i;(async function(){i=v(),await i.onReady()})();function L(t){return t.toLowerCase().replace(/-(.)/g,function(c,s){return s.toUpperCase()})}e(L,"camelCase");function O(t){const c={};for(const{name:s,value:m}of t.attributes)if(s.startsWith("data-optimizely-meta-")){const w=s.replace("data-optimizely-meta-","");m&&m.trim().length&&(c[L(w)]=m)}return c}e(O,"getUserAttributes"),(0,S.on)("click","[data-optimizely-event]",function(t){if(!i)return;const c=t.currentTarget,s=c.getAttribute("data-optimizely-event")||"",[m,w]=s.trim().split(/\s*,\s*/),k=O(c);m&&w?i.track(m,w,k):m&&i.track(m,(0,g.b)(),k)}),(0,y.N7)("[data-optimizely-experiment]",t=>{if(!i)return;const c=t.getAttribute("data-optimizely-experiment");if(!c||t.hidden)return;const s=O(t),m=i.activate(c,(0,g.b)(),s);if(!m)return;const w=t.querySelectorAll("[data-optimizely-variation]");for(const k of w){const A=k.getAttribute("data-optimizely-variation");k.hidden=A!==m}});const T=((C=(I=document.querySelector('meta[name="enabled-homepage-translation-languages"]'))==null?void 0:I.getAttribute("content"))==null?void 0:C.split(","))||[],x=(0,h.$1)("_locale_experiment").length>0&&(0,h.$1)("_locale_experiment")[0].value==="ko"&&T.includes("ko");x&&window.location.pathname==="/"&&P(),x&&window.location.pathname==="/join"&&D();async function P(){var t,c;const s="ko_homepage_translation",m=(0,g.b)(),w=(c=(t=(0,h.$1)("_locale")[0])==null?void 0:t.value)==null?void 0:c.slice(0,2);i.setForcedVariation(s,m,w),i.activate(s,m);const k=document.querySelectorAll("[data-optimizely-variation]");for(const A of k)A.hidden=w!==A.getAttribute("data-optimizely-variation");for(const A of document.querySelectorAll('form[action^="/join"]'))A.addEventListener("submit",()=>{i.track("submit.homepage_signup",m)});for(const A of document.querySelectorAll('a[href^="/join"]'))A.addEventListener("click",()=>{i.track("click.homepage_signup",m)})}e(P,"runKoreanHomepageExperiment");async function D(){var t;(t=document.getElementById("signup-form"))==null||t.addEventListener("submit",()=>{const c="ko_homepage_translation",s=(0,g.b)();i.activate(c,s),i.track("submit.create_account",s)})}e(D,"trackSignupsFromKoreanHomepage");const o=document.querySelector('meta[name^="user-currency"]');o&&window.location.pathname==="/pricing"&&R();async function R(){var t,c,s;const m=((c=(t=document.querySelector('meta[name^="supported-currencies"]'))==null?void 0:t.getAttribute("content"))==null?void 0:c.split(","))||[],w="local_currency_pricing",k="view.pricing_page",A="usd",z="localized_currency",N=(0,g.b)(),$=(s=o==null?void 0:o.getAttribute("content"))==null?void 0:s.toUpperCase(),M=new URLSearchParams(window.location.search);if($==="USD"||!$||!m.includes($))return;M.has("currency")&&i.setForcedVariation(w,N,z);const F=i.activate(w,N)===A?"USD":$;i.track(k,N,{requestedCurrency:$});for(const K of document.querySelectorAll("[data-currency]"))K.hidden=K.getAttribute("data-currency")!==F}e(R,"runCurrencyExperiment"),(0,S.on)("click","#signup_button",function(){var t,c;if(!i||!o)return;const s=new URLSearchParams(document.location.href);if(!(s.get("pricing_exp")&&((t=s.get("ref_page"))==null?void 0:t.startsWith("/pricing"))))return;const w="submit.create_account",k=(c=o==null?void 0:o.getAttribute("content"))==null?void 0:c.toUpperCase();i.track(w,(0,g.b)(),{requestedCurrency:k})}),window.location.pathname==="/settings/profile"&&U();async function U(){if(!i)return;const t=(0,g.b)();i.activate("test_experiment",t),i.track("test_event",t)}e(U,"runTestExperiment")},55830:(b,f,r)=>{r.r(f),r.d(f,{v4:()=>a});function a(){return crypto.randomUUID()}e(a,"v4")}},b=>{var f=e(a=>b(b.s=a),"__webpack_exec__");b.O(0,[5724,4978],()=>f(70322));var r=b.O()}]);})();

//# sourceMappingURL=optimizely-5cdd8df83a6e.js.map