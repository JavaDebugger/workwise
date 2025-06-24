const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/not-found-CfgAXQNu.js","assets/vendor-ui-s4VaHhe3.js","assets/vendor-react-BLR_YkO_.js","assets/card-8UZPBAHq.js","assets/vendor-icons-CgtSIdDt.js","assets/vendor-query-Cm3gWw8b.js","assets/vendor-router-B3zuYAIM.js","assets/vendor-charts-CaNT0DhE.js","assets/Home-DFyv4wxD.js","assets/CustomHelmet-C_Zi0UWb.js","assets/input-IlxudZmX.js","assets/CtaSection-bzBf2Syl.js","assets/skeleton-65i7iYhM.js","assets/JobCard-CD5L-jEY.js","assets/badge-D2cBkUuv.js","assets/Jobs-BMwTr8ce.js","assets/apiClient-Ddw1nvhZ.js","assets/Resources-CALqGimV.js","assets/breadcrumb-BXx3WgM8.js","assets/label-Bf6ViPYU.js","assets/WiseUpPage-CvqQO_Df.js","assets/Login-DObW3Fvl.js","assets/Helmet-0wtNoWcg.js","assets/form-DscTub4z.js","assets/vendor-forms-BbWomOe6.js","assets/checkbox-B6HXUg6f.js","assets/Register-CH07AiwK.js","assets/CVBuilder-D9kg-IEm.js","assets/textarea-Cql9auRd.js","assets/select-aXx2Wv-A.js","assets/separator-Doa1ZjWc.js","assets/UserProfile-5d2H5fy6.js","assets/tabs-BM3G3Ofl.js","assets/progress-_Q1tFUEv.js","assets/ProfileSetup-DqoEi86p.js","assets/dialog-CIc8KdEJ.js","assets/profileService-CVm8ufKb.js","assets/EmailLinkLogin-DpycjN4u.js","assets/EmailSignInComplete-Bhd8Wej1.js","assets/MarketingRulesPage-C6Z8yl6a.js","assets/table-BKqO_Lv-.js","assets/alert-dialog-Cf5MS8R_.js","assets/switch-CZmy3i_B.js","assets/AdminDashboard-qW1G9qHi.js","assets/Dashboard-CjodtFcV.js","assets/ui-test-BolLs7CA.js","assets/TestPage-CtXUfW4v.js","assets/FooterTest-BURB72-f.js","assets/ColorTest-DrSxu3EL.js","assets/SimpleTest-BVZxF6ml.js","assets/HomeSimple-DZ0OTO8a.js","assets/FAQWheelPage-CRBa1b1s.js","assets/FAQWheelPreview-qZ6L2luQ.js","assets/use-mobile-BasZxOCf.js","assets/CVTemplates-DYJJgiYC.js","assets/InterviewTipsPage-rSjXaJ4L.js","assets/SalaryGuide-BNaLMAP8.js","assets/CVBuilderHelp-DOO7EwIp.js","assets/PostJob-8--Oe28z.js","assets/BrowseCandidates-_xjVSZhK.js","assets/Solutions-CyKGtNsD.js","assets/Pricing-BM8CHGQF.js","assets/SuccessStories-DJFo_Lol.js","assets/About-fha0u5d6.js","assets/AboutUsPage-DtJKHrZM.js","assets/index-CGkwm6S_.js","assets/PrivacyPolicy-CvfoQ4LB.js","assets/Terms-brqut4ll.js","assets/FAQ-B9EFJM4v.js"])))=>i.map(i=>d[i]);
import{j as d,V as Eo,R as To,A as ko,C as xo,T as Ao,D as Ro,P as oc,_ as es,S as So,a as Po,b as ac,c as Co,I as No,d as Oo,e as Do,f as Lo,L as jo,g as Mo,h as lc,i as cc,G as uc,k as hc,l as Uo,m as Fo,F as Vo}from"./vendor-ui-s4VaHhe3.js";import{a as dc,b as x,H as Bo,R as fc}from"./vendor-react-BLR_YkO_.js";import{Q as pc,_ as F,a as zo}from"./vendor-query-Cm3gWw8b.js";import{u as $o,L as U,S as mc,R as j,a as gc}from"./vendor-router-B3zuYAIM.js";import{c as Ho}from"./vendor-charts-CaNT0DhE.js";import{X as vc,C as yc,a as _c,b as wc,c as bc,U as Ic,B as Ec,d as Tc,F as kc,S as Wo,e as Go,L as xc,f as Ac,g as Rc,M as Sc,h as Pc,i as Cc}from"./vendor-icons-CgtSIdDt.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Rn={},yi;function Nc(){if(yi)return Rn;yi=1;var t=dc();return Rn.createRoot=t.createRoot,Rn.hydrateRoot=t.hydrateRoot,Rn}var Oc=Nc();async function Ko(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}async function Rg(t,e,n){const s=await fetch(e,{method:t,headers:n?{"Content-Type":"application/json"}:{},body:n?JSON.stringify(n):void 0,credentials:"include"});return await Ko(s),s}const Dc=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return await Ko(n),await n.json()},qo=new pc({defaultOptions:{queries:{queryFn:Dc({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),Lc=1,jc=1e6;let Pr=0;function Mc(){return Pr=(Pr+1)%Number.MAX_SAFE_INTEGER,Pr.toString()}const Cr=new Map,_i=t=>{if(Cr.has(t))return;const e=setTimeout(()=>{Cr.delete(t),Qt({type:"REMOVE_TOAST",toastId:t})},jc);Cr.set(t,e)},Uc=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Lc)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?_i(n):t.toasts.forEach(s=>{_i(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===n||n===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Dn=[];let Ln={toasts:[]};function Qt(t){Ln=Uc(Ln,t),Dn.forEach(e=>{e(Ln)})}function Sg({...t}){const e=Mc(),n=i=>Qt({type:"UPDATE_TOAST",toast:{...i,id:e}}),s=()=>Qt({type:"DISMISS_TOAST",toastId:e});return Qt({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:i=>{i||s()}}}),{id:e,dismiss:s,update:n}}function Jo(){const[t,e]=x.useState(Ln),[n,s]=x.useState([]);return x.useEffect(()=>(Dn.push(e),()=>{const a=Dn.indexOf(e);a>-1&&Dn.splice(a,1)}),[t]),{...t,toasts:n,toast:a=>{s(c=>[...c,a]),setTimeout(()=>{s(c=>c.filter(f=>f!==a))},a.duration||5e3)},dismiss:a=>Qt({type:"DISMISS_TOAST",toastId:a})}}const wi=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,bi=Ho,ts=(t,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return bi(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=e,c=Object.keys(i).map(I=>{const T=n==null?void 0:n[I],A=a==null?void 0:a[I];if(T===null)return null;const P=wi(T)||wi(A);return i[I][P]}),f=n&&Object.entries(n).reduce((I,T)=>{let[A,P]=T;return P===void 0||(I[A]=P),I},{}),p=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((I,T)=>{let{class:A,className:P,...$}=T;return Object.entries($).every(N=>{let[L,D]=N;return Array.isArray(D)?D.includes({...a,...f}[L]):{...a,...f}[L]===D})?[...I,A,P]:I},[]);return bi(t,c,p,n==null?void 0:n.class,n==null?void 0:n.className)},ns="-",Fc=t=>{const e=Bc(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:c=>{const f=c.split(ns);return f[0]===""&&f.length!==1&&f.shift(),Xo(f,e)||Vc(c)},getConflictingClassGroupIds:(c,f)=>{const p=n[c]||[];return f&&s[c]?[...p,...s[c]]:p}}},Xo=(t,e)=>{var c;if(t.length===0)return e.classGroupId;const n=t[0],s=e.nextPart.get(n),i=s?Xo(t.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const a=t.join(ns);return(c=e.validators.find(({validator:f})=>f(a)))==null?void 0:c.classGroupId},Ii=/^\[(.+)\]$/,Vc=t=>{if(Ii.test(t)){const e=Ii.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Bc=t=>{const{theme:e,classGroups:n}=t,s={nextPart:new Map,validators:[]};for(const i in n)$r(n[i],s,i,e);return s},$r=(t,e,n,s)=>{t.forEach(i=>{if(typeof i=="string"){const a=i===""?e:Ei(e,i);a.classGroupId=n;return}if(typeof i=="function"){if(zc(i)){$r(i(s),e,n,s);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,c])=>{$r(c,Ei(e,a),n,s)})})},Ei=(t,e)=>{let n=t;return e.split(ns).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},zc=t=>t.isThemeGetter,$c=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const i=(a,c)=>{n.set(a,c),e++,e>t&&(e=0,s=n,n=new Map)};return{get(a){let c=n.get(a);if(c!==void 0)return c;if((c=s.get(a))!==void 0)return i(a,c),c},set(a,c){n.has(a)?n.set(a,c):i(a,c)}}},Hr="!",Wr=":",Hc=Wr.length,Wc=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=i=>{const a=[];let c=0,f=0,p=0,I;for(let N=0;N<i.length;N++){let L=i[N];if(c===0&&f===0){if(L===Wr){a.push(i.slice(p,N)),p=N+Hc;continue}if(L==="/"){I=N;continue}}L==="["?c++:L==="]"?c--:L==="("?f++:L===")"&&f--}const T=a.length===0?i:i.substring(p),A=Gc(T),P=A!==T,$=I&&I>p?I-p:void 0;return{modifiers:a,hasImportantModifier:P,baseClassName:A,maybePostfixModifierPosition:$}};if(e){const i=e+Wr,a=s;s=c=>c.startsWith(i)?a(c.substring(i.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(n){const i=s;s=a=>n({className:a,parseClassName:i})}return s},Gc=t=>t.endsWith(Hr)?t.substring(0,t.length-1):t.startsWith(Hr)?t.substring(1):t,Kc=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const i=[];let a=[];return s.forEach(c=>{c[0]==="["||e[c]?(i.push(...a.sort(),c),a=[]):a.push(c)}),i.push(...a.sort()),i}},qc=t=>({cache:$c(t.cacheSize),parseClassName:Wc(t),sortModifiers:Kc(t),...Fc(t)}),Jc=/\s+/,Xc=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:i,sortModifiers:a}=e,c=[],f=t.trim().split(Jc);let p="";for(let I=f.length-1;I>=0;I-=1){const T=f[I],{isExternal:A,modifiers:P,hasImportantModifier:$,baseClassName:N,maybePostfixModifierPosition:L}=n(T);if(A){p=T+(p.length>0?" "+p:p);continue}let D=!!L,Q=s(D?N.substring(0,L):N);if(!Q){if(!D){p=T+(p.length>0?" "+p:p);continue}if(Q=s(N),!Q){p=T+(p.length>0?" "+p:p);continue}D=!1}const ee=a(P).join(":"),G=$?ee+Hr:ee,H=G+Q;if(c.includes(H))continue;c.push(H);const te=i(Q,D);for(let q=0;q<te.length;++q){const y=te[q];c.push(G+y)}p=T+(p.length>0?" "+p:p)}return p};function Yc(){let t=0,e,n,s="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Yo(e))&&(s&&(s+=" "),s+=n);return s}const Yo=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Yo(t[s]))&&(n&&(n+=" "),n+=e);return n};function Qc(t,...e){let n,s,i,a=c;function c(p){const I=e.reduce((T,A)=>A(T),t());return n=qc(I),s=n.cache.get,i=n.cache.set,a=f,f(p)}function f(p){const I=s(p);if(I)return I;const T=Xc(p,n);return i(p,T),T}return function(){return a(Yc.apply(null,arguments))}}const ne=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Qo=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Zo=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Zc=/^\d+\/\d+$/,eu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ru=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,su=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,At=t=>Zc.test(t),M=t=>!!t&&!Number.isNaN(Number(t)),et=t=>!!t&&Number.isInteger(Number(t)),Nr=t=>t.endsWith("%")&&M(t.slice(0,-1)),Fe=t=>eu.test(t),iu=()=>!0,ou=t=>tu.test(t)&&!nu.test(t),ea=()=>!1,au=t=>ru.test(t),lu=t=>su.test(t),cu=t=>!R(t)&&!S(t),uu=t=>Ot(t,ra,ea),R=t=>Qo.test(t),ht=t=>Ot(t,sa,ou),Or=t=>Ot(t,mu,M),Ti=t=>Ot(t,ta,ea),hu=t=>Ot(t,na,lu),Sn=t=>Ot(t,ia,au),S=t=>Zo.test(t),Jt=t=>Dt(t,sa),du=t=>Dt(t,gu),ki=t=>Dt(t,ta),fu=t=>Dt(t,ra),pu=t=>Dt(t,na),Pn=t=>Dt(t,ia,!0),Ot=(t,e,n)=>{const s=Qo.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},Dt=(t,e,n=!1)=>{const s=Zo.exec(t);return s?s[1]?e(s[1]):n:!1},ta=t=>t==="position"||t==="percentage",na=t=>t==="image"||t==="url",ra=t=>t==="length"||t==="size"||t==="bg-size",sa=t=>t==="length",mu=t=>t==="number",gu=t=>t==="family-name",ia=t=>t==="shadow",vu=()=>{const t=ne("color"),e=ne("font"),n=ne("text"),s=ne("font-weight"),i=ne("tracking"),a=ne("leading"),c=ne("breakpoint"),f=ne("container"),p=ne("spacing"),I=ne("radius"),T=ne("shadow"),A=ne("inset-shadow"),P=ne("text-shadow"),$=ne("drop-shadow"),N=ne("blur"),L=ne("perspective"),D=ne("aspect"),Q=ne("ease"),ee=ne("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],te=()=>[...H(),S,R],q=()=>["auto","hidden","clip","visible","scroll"],y=()=>["auto","contain","none"],h=()=>[S,R,p],m=()=>[At,"full","auto",...h()],v=()=>[et,"none","subgrid",S,R],_=()=>["auto",{span:["full",et,S,R]},et,S,R],b=()=>[et,"auto",S,R],g=()=>["auto","min","max","fr",S,R],me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ve=()=>["start","end","center","stretch","center-safe","end-safe"],Ie=()=>["auto",...h()],ge=()=>[At,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...h()],O=()=>[t,S,R],wt=()=>[...H(),ki,Ti,{position:[S,R]}],Lt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],dn=()=>["auto","cover","contain",fu,uu,{size:[S,R]}],ye=()=>[Nr,Jt,ht],B=()=>["","none","full",I,S,R],ae=()=>["",M,Jt,ht],Re=()=>["solid","dashed","dotted","double"],fn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>[M,Nr,ki,Ti],pn=()=>["","none",N,S,R],bt=()=>["none",M,S,R],je=()=>["none",M,S,R],Je=()=>[M,S,R],Xe=()=>[At,"full",...h()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fe],breakpoint:[Fe],color:[iu],container:[Fe],"drop-shadow":[Fe],ease:["in","out","in-out"],font:[cu],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fe],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fe],shadow:[Fe],spacing:["px",M],text:[Fe],"text-shadow":[Fe],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",At,R,S,D]}],container:["container"],columns:[{columns:[M,R,S,f]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:te()}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:m()}],"inset-x":[{"inset-x":m()}],"inset-y":[{"inset-y":m()}],start:[{start:m()}],end:[{end:m()}],top:[{top:m()}],right:[{right:m()}],bottom:[{bottom:m()}],left:[{left:m()}],visibility:["visible","invisible","collapse"],z:[{z:[et,"auto",S,R]}],basis:[{basis:[At,"full","auto",f,...h()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,At,"auto","initial","none",R]}],grow:[{grow:["",M,S,R]}],shrink:[{shrink:["",M,S,R]}],order:[{order:[et,"first","last","none",S,R]}],"grid-cols":[{"grid-cols":v()}],"col-start-end":[{col:_()}],"col-start":[{"col-start":b()}],"col-end":[{"col-end":b()}],"grid-rows":[{"grid-rows":v()}],"row-start-end":[{row:_()}],"row-start":[{"row-start":b()}],"row-end":[{"row-end":b()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":g()}],"auto-rows":[{"auto-rows":g()}],gap:[{gap:h()}],"gap-x":[{"gap-x":h()}],"gap-y":[{"gap-y":h()}],"justify-content":[{justify:[...me(),"normal"]}],"justify-items":[{"justify-items":[...ve(),"normal"]}],"justify-self":[{"justify-self":["auto",...ve()]}],"align-content":[{content:["normal",...me()]}],"align-items":[{items:[...ve(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ve(),{baseline:["","last"]}]}],"place-content":[{"place-content":me()}],"place-items":[{"place-items":[...ve(),"baseline"]}],"place-self":[{"place-self":["auto",...ve()]}],p:[{p:h()}],px:[{px:h()}],py:[{py:h()}],ps:[{ps:h()}],pe:[{pe:h()}],pt:[{pt:h()}],pr:[{pr:h()}],pb:[{pb:h()}],pl:[{pl:h()}],m:[{m:Ie()}],mx:[{mx:Ie()}],my:[{my:Ie()}],ms:[{ms:Ie()}],me:[{me:Ie()}],mt:[{mt:Ie()}],mr:[{mr:Ie()}],mb:[{mb:Ie()}],ml:[{ml:Ie()}],"space-x":[{"space-x":h()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":h()}],"space-y-reverse":["space-y-reverse"],size:[{size:ge()}],w:[{w:[f,"screen",...ge()]}],"min-w":[{"min-w":[f,"screen","none",...ge()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[c]},...ge()]}],h:[{h:["screen",...ge()]}],"min-h":[{"min-h":["screen","none",...ge()]}],"max-h":[{"max-h":["screen",...ge()]}],"font-size":[{text:["base",n,Jt,ht]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,S,Or]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Nr,R]}],"font-family":[{font:[du,R,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,S,R]}],"line-clamp":[{"line-clamp":[M,"none",S,Or]}],leading:[{leading:[a,...h()]}],"list-image":[{"list-image":["none",S,R]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",S,R]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Re(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",S,ht]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[M,"auto",S,R]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S,R]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S,R]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:wt()}],"bg-repeat":[{bg:Lt()}],"bg-size":[{bg:dn()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},et,S,R],radial:["",S,R],conic:[et,S,R]},pu,hu]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:ye()}],"gradient-via-pos":[{via:ye()}],"gradient-to-pos":[{to:ye()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:ae()}],"border-w-x":[{"border-x":ae()}],"border-w-y":[{"border-y":ae()}],"border-w-s":[{"border-s":ae()}],"border-w-e":[{"border-e":ae()}],"border-w-t":[{"border-t":ae()}],"border-w-r":[{"border-r":ae()}],"border-w-b":[{"border-b":ae()}],"border-w-l":[{"border-l":ae()}],"divide-x":[{"divide-x":ae()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ae()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Re(),"hidden","none"]}],"divide-style":[{divide:[...Re(),"hidden","none"]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...Re(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,S,R]}],"outline-w":[{outline:["",M,Jt,ht]}],"outline-color":[{outline:O()}],shadow:[{shadow:["","none",T,Pn,Sn]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":["none",A,Pn,Sn]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[M,ht]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":ae()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":["none",P,Pn,Sn]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[M,S,R]}],"mix-blend":[{"mix-blend":[...fn(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":fn()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[M]}],"mask-image-linear-from-pos":[{"mask-linear-from":X()}],"mask-image-linear-to-pos":[{"mask-linear-to":X()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":X()}],"mask-image-t-to-pos":[{"mask-t-to":X()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":X()}],"mask-image-r-to-pos":[{"mask-r-to":X()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":X()}],"mask-image-b-to-pos":[{"mask-b-to":X()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":X()}],"mask-image-l-to-pos":[{"mask-l-to":X()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":X()}],"mask-image-x-to-pos":[{"mask-x-to":X()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":X()}],"mask-image-y-to-pos":[{"mask-y-to":X()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[S,R]}],"mask-image-radial-from-pos":[{"mask-radial-from":X()}],"mask-image-radial-to-pos":[{"mask-radial-to":X()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[M]}],"mask-image-conic-from-pos":[{"mask-conic-from":X()}],"mask-image-conic-to-pos":[{"mask-conic-to":X()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:wt()}],"mask-repeat":[{mask:Lt()}],"mask-size":[{mask:dn()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",S,R]}],filter:[{filter:["","none",S,R]}],blur:[{blur:pn()}],brightness:[{brightness:[M,S,R]}],contrast:[{contrast:[M,S,R]}],"drop-shadow":[{"drop-shadow":["","none",$,Pn,Sn]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:["",M,S,R]}],"hue-rotate":[{"hue-rotate":[M,S,R]}],invert:[{invert:["",M,S,R]}],saturate:[{saturate:[M,S,R]}],sepia:[{sepia:["",M,S,R]}],"backdrop-filter":[{"backdrop-filter":["","none",S,R]}],"backdrop-blur":[{"backdrop-blur":pn()}],"backdrop-brightness":[{"backdrop-brightness":[M,S,R]}],"backdrop-contrast":[{"backdrop-contrast":[M,S,R]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,S,R]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,S,R]}],"backdrop-invert":[{"backdrop-invert":["",M,S,R]}],"backdrop-opacity":[{"backdrop-opacity":[M,S,R]}],"backdrop-saturate":[{"backdrop-saturate":[M,S,R]}],"backdrop-sepia":[{"backdrop-sepia":["",M,S,R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":h()}],"border-spacing-x":[{"border-spacing-x":h()}],"border-spacing-y":[{"border-spacing-y":h()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",S,R]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",S,R]}],ease:[{ease:["linear","initial",Q,S,R]}],delay:[{delay:[M,S,R]}],animate:[{animate:["none",ee,S,R]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,S,R]}],"perspective-origin":[{"perspective-origin":te()}],rotate:[{rotate:bt()}],"rotate-x":[{"rotate-x":bt()}],"rotate-y":[{"rotate-y":bt()}],"rotate-z":[{"rotate-z":bt()}],scale:[{scale:je()}],"scale-x":[{"scale-x":je()}],"scale-y":[{"scale-y":je()}],"scale-z":[{"scale-z":je()}],"scale-3d":["scale-3d"],skew:[{skew:Je()}],"skew-x":[{"skew-x":Je()}],"skew-y":[{"skew-y":Je()}],transform:[{transform:[S,R,"","none","gpu","cpu"]}],"transform-origin":[{origin:te()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Xe()}],"translate-x":[{"translate-x":Xe()}],"translate-y":[{"translate-y":Xe()}],"translate-z":[{"translate-z":Xe()}],"translate-none":["translate-none"],accent:[{accent:O()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S,R]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S,R]}],fill:[{fill:["none",...O()]}],"stroke-w":[{stroke:[M,Jt,ht,Or]}],stroke:[{stroke:["none",...O()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},yu=Qc(vu);function Y(...t){return yu(Ho(t))}const _u=oc,oa=x.forwardRef(({className:t,...e},n)=>d.jsx(Eo,{ref:n,className:Y("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));oa.displayName=Eo.displayName;const wu=ts("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),aa=x.forwardRef(({className:t,variant:e,...n},s)=>d.jsx(To,{ref:s,className:Y(wu({variant:e}),t),...n}));aa.displayName=To.displayName;const bu=x.forwardRef(({className:t,...e},n)=>d.jsx(ko,{ref:n,className:Y("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));bu.displayName=ko.displayName;const la=x.forwardRef(({className:t,...e},n)=>d.jsx(xo,{ref:n,className:Y("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:d.jsx(vc,{className:"h-4 w-4"})}));la.displayName=xo.displayName;const ca=x.forwardRef(({className:t,...e},n)=>d.jsx(Ao,{ref:n,className:Y("text-sm font-semibold",t),...e}));ca.displayName=Ao.displayName;const ua=x.forwardRef(({className:t,...e},n)=>d.jsx(Ro,{ref:n,className:Y("text-sm opacity-90",t),...e}));ua.displayName=Ro.displayName;function Iu(){const{toasts:t}=Jo();return d.jsxs(_u,{children:[t.map(function({id:e,title:n,description:s,action:i,...a}){return d.jsxs(aa,{...a,children:[d.jsxs("div",{className:"grid gap-1",children:[n&&d.jsx(ca,{children:n}),s&&d.jsx(ua,{children:s})]}),i,d.jsx(la,{})]},e)}),d.jsx(oa,{})]})}const Eu=()=>{};var xi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],c=t[n++],f=t[n++],p=((i&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=t[n++],c=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const a=t[i],c=i+1<t.length,f=c?t[i+1]:0,p=i+2<t.length,I=p?t[i+2]:0,T=a>>2,A=(a&3)<<4|f>>4;let P=(f&15)<<2|I>>6,$=I&63;p||($=64,c||(P=64)),s.push(n[T],n[A],n[P],n[$])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ha(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],f=i<t.length?n[t.charAt(i)]:0;++i;const I=i<t.length?n[t.charAt(i)]:64;++i;const A=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||f==null||I==null||A==null)throw new ku;const P=a<<2|f>>4;if(s.push(P),I!==64){const $=f<<4&240|I>>2;if(s.push($),A!==64){const N=I<<6&192|A;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xu=function(t){const e=ha(t);return da.encodeByteArray(e,!0)},Vn=function(t){return xu(t).replace(/\./g,"")},fa=function(t){try{return da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=()=>Au().__FIREBASE_DEFAULTS__,Su=()=>{if(typeof process>"u"||typeof xi>"u")return;const t=xi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fa(t[1]);return e&&JSON.parse(e)},rs=()=>{try{return Eu()||Ru()||Su()||Pu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pa=t=>{var e,n;return(n=(e=rs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ma=t=>{const e=pa(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ga=()=>{var t;return(t=rs())===null||t===void 0?void 0:t.config},va=t=>{var e;return(e=rs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vn(JSON.stringify(n)),Vn(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ou(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Du(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ju(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mu(){try{return typeof indexedDB=="object"}catch{return!1}}function Uu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="FirebaseError";class Oe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fu,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?Vu(a,s):"Error",f=`${this.serviceName}: ${c} (${i}).`;return new Oe(i,f,s)}}function Vu(t,e){return t.replace(Bu,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Bu=/\{\$([^}]+)}/g;function zu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const a=t[i],c=e[i];if(Ai(a)&&Ai(c)){if(!pt(a,c))return!1}else if(a!==c)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ai(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,a]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function Yt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $u(t,e){const n=new Hu(t,e);return n.subscribe.bind(n)}class Hu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Wu(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Dr),i.error===void 0&&(i.error=Dr),i.complete===void 0&&(i.complete=Dr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qu(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});s.resolve(a)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(i,a);const c=this.instances.get(i);return c&&e(c,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ku(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ku(t){return t===dt?void 0:t}function qu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Xu={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Yu=W.INFO,Qu={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Zu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Qu[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ss{constructor(e){this.name=e,this._logLevel=Yu,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const eh=(t,e)=>e.some(n=>t instanceof n);let Ri,Si;function th(){return Ri||(Ri=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,Gr=new WeakMap,wa=new WeakMap,Lr=new WeakMap,is=new WeakMap;function rh(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",c)},a=()=>{n(it(t.result)),i()},c=()=>{s(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&_a.set(n,t)}).catch(()=>{}),is.set(e,t),e}function sh(t){if(Gr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",c),t.removeEventListener("abort",c)},a=()=>{n(),i()},c=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",c),t.addEventListener("abort",c)});Gr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ih(t){Kr=t(Kr)}function oh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(jr(this),e,...n);return wa.set(s,e.sort?e.sort():[e]),it(s)}:nh().includes(t)?function(...e){return t.apply(jr(this),e),it(_a.get(this))}:function(...e){return it(t.apply(jr(this),e))}}function ah(t){return typeof t=="function"?oh(t):(t instanceof IDBTransaction&&sh(t),eh(t,th())?new Proxy(t,Kr):t)}function it(t){if(t instanceof IDBRequest)return rh(t);if(Lr.has(t))return Lr.get(t);const e=ah(t);return e!==t&&(Lr.set(t,e),is.set(e,t)),e}const jr=t=>is.get(t);function lh(t,e,{blocked:n,upgrade:s,blocking:i,terminated:a}={}){const c=indexedDB.open(t,e),f=it(c);return s&&c.addEventListener("upgradeneeded",p=>{s(it(c.result),p.oldVersion,p.newVersion,it(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),i&&p.addEventListener("versionchange",I=>i(I.oldVersion,I.newVersion,I))}).catch(()=>{}),f}const ch=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],Mr=new Map;function Pi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mr.get(e))return Mr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=uh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ch.includes(n)))return;const a=async function(c,...f){const p=this.transaction(c,i?"readwrite":"readonly");let I=p.store;return s&&(I=I.index(f.shift())),(await Promise.all([I[n](...f),i&&p.done]))[0]};return Mr.set(e,a),a}ih(t=>({...t,get:(e,n,s)=>Pi(e,n)||t.get(e,n,s),has:(e,n)=>!!Pi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",Ci="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new ss("@firebase/app"),fh="@firebase/app-compat",ph="@firebase/analytics-compat",mh="@firebase/analytics",gh="@firebase/app-check-compat",vh="@firebase/app-check",yh="@firebase/auth",_h="@firebase/auth-compat",wh="@firebase/database",bh="@firebase/data-connect",Ih="@firebase/database-compat",Eh="@firebase/functions",Th="@firebase/functions-compat",kh="@firebase/installations",xh="@firebase/installations-compat",Ah="@firebase/messaging",Rh="@firebase/messaging-compat",Sh="@firebase/performance",Ph="@firebase/performance-compat",Ch="@firebase/remote-config",Nh="@firebase/remote-config-compat",Oh="@firebase/storage",Dh="@firebase/storage-compat",Lh="@firebase/firestore",jh="@firebase/vertexai",Mh="@firebase/firestore-compat",Uh="firebase",Fh="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",Vh={[qr]:"fire-core",[fh]:"fire-core-compat",[mh]:"fire-analytics",[ph]:"fire-analytics-compat",[vh]:"fire-app-check",[gh]:"fire-app-check-compat",[yh]:"fire-auth",[_h]:"fire-auth-compat",[wh]:"fire-rtdb",[bh]:"fire-data-connect",[Ih]:"fire-rtdb-compat",[Eh]:"fire-fn",[Th]:"fire-fn-compat",[kh]:"fire-iid",[xh]:"fire-iid-compat",[Ah]:"fire-fcm",[Rh]:"fire-fcm-compat",[Sh]:"fire-perf",[Ph]:"fire-perf-compat",[Ch]:"fire-rc",[Nh]:"fire-rc-compat",[Oh]:"fire-gcs",[Dh]:"fire-gcs-compat",[Lh]:"fire-fst",[Mh]:"fire-fst-compat",[jh]:"fire-vertex","fire-js":"fire-js",[Uh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,Bh=new Map,Xr=new Map;function Ni(t,e){try{t.container.addComponent(e)}catch(n){He.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(Xr.has(e))return He.debug(`There were multiple attempts to register component ${e}.`),!1;Xr.set(e,t);for(const n of Bn.values())Ni(n,t);for(const n of Bh.values())Ni(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function he(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ot=new sn("app","Firebase",zh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=Fh;function ba(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ot.create("bad-app-name",{appName:String(i)});if(n||(n=ga()),!n)throw ot.create("no-options");const a=Bn.get(i);if(a){if(pt(n,a.options)&&pt(s,a.config))return a;throw ot.create("duplicate-app",{appName:i})}const c=new Ju(i);for(const p of Xr.values())c.addComponent(p);const f=new $h(n,s,c);return Bn.set(i,f),f}function os(t=Jr){const e=Bn.get(t);if(!e&&t===Jr&&ga())return ba();if(!e)throw ot.create("no-app",{appName:t});return e}function Se(t,e,n){var s;let i=(s=Vh[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${i}" with version "${e}":`];a&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),He.warn(f.join(" "));return}mt(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="firebase-heartbeat-database",Wh=1,nn="firebase-heartbeat-store";let Ur=null;function Ia(){return Ur||(Ur=lh(Hh,Wh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nn)}catch(n){console.warn(n)}}}}).catch(t=>{throw ot.create("idb-open",{originalErrorMessage:t.message})})),Ur}async function Gh(t){try{const n=(await Ia()).transaction(nn),s=await n.objectStore(nn).get(Ea(t));return await n.done,s}catch(e){if(e instanceof Oe)He.warn(e.message);else{const n=ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});He.warn(n.message)}}}async function Oi(t,e){try{const s=(await Ia()).transaction(nn,"readwrite");await s.objectStore(nn).put(e,Ea(t)),await s.done}catch(n){if(n instanceof Oe)He.warn(n.message);else{const s=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});He.warn(s.message)}}}function Ea(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=1024,qh=30;class Jh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Di();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>qh){const c=Qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){He.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Di(),{heartbeatsToSend:s,unsentEntries:i}=Xh(this._heartbeatsCache.heartbeats),a=Vn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return He.warn(n),""}}}function Di(){return new Date().toISOString().substring(0,10)}function Xh(t,e=Kh){const n=[];let s=t.slice();for(const i of t){const a=n.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),Li(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Li(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mu()?Uu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Li(t){return Vn(JSON.stringify({version:2,heartbeats:t})).length}function Qh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t){mt(new at("platform-logger",e=>new hh(e),"PRIVATE")),mt(new at("heartbeat",e=>new Jh(e),"PRIVATE")),Se(qr,Ci,t),Se(qr,Ci,"esm2017"),Se("fire-js","")}Zh("");var ed="firebase",td="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se(ed,td,"app");function Ta(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nd=Ta,ka=new sn("auth","Firebase",Ta());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new ss("@firebase/auth");function rd(t,...e){zn.logLevel<=W.WARN&&zn.warn(`Auth (${yt}): ${t}`,...e)}function jn(t,...e){zn.logLevel<=W.ERROR&&zn.error(`Auth (${yt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,...e){throw ls(t,...e)}function Ae(t,...e){return ls(t,...e)}function as(t,e,n){const s=Object.assign(Object.assign({},nd()),{[e]:n});return new sn("auth","Firebase",s).create(e,{appName:t.name})}function Pe(t){return as(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sd(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&we(t,"argument-error"),as(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ls(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ka.create(t,...e)}function C(t,e,...n){if(!t)throw ls(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jn(e),new Error(e)}function We(t,e){t||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function id(){return ji()==="http:"||ji()==="https:"}function ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(id()||Du()||"connection"in navigator)?navigator.onLine:!0}function ad(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.shortDelay=e,this.longDelay=n,We(n>e,"Short delay should be less than long delay!"),this.isMobile=Nu()||Lu()}get(){return od()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){We(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ud=new an(3e4,6e4);function Ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function De(t,e,n,s,i={}){return Aa(t,i,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=on(Object.assign({key:t.config.apiKey},c)).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const I=Object.assign({method:e,headers:p},a);return Ou()||(I.referrerPolicy="no-referrer"),xa.fetch()(await Ra(t,t.config.apiHost,n,f),I)})}async function Aa(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ld),e);try{const i=new dd(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Cn(t,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,I]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cn(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Cn(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw Cn(t,"user-disabled",c);const T=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw as(t,T,I);we(t,T)}}catch(i){if(i instanceof Oe)throw i;we(t,"network-request-failed",{message:String(i)})}}async function ln(t,e,n,s,i={}){const a=await De(t,e,n,s,i);return"mfaPendingCredential"in a&&we(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ra(t,e,n,s){const i=`${e}${n}?${s}`,a=t,c=a.config.emulator?cs(t.config,i):`${t.config.apiScheme}://${i}`;return cd.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function hd(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ae(this.auth,"network-request-failed")),ud.get())})}}function Cn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ae(t,e,s);return i.customData._tokenResponse=n,i}function Mi(t){return t!==void 0&&t.enterprise!==void 0}class fd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hd(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pd(t,e){return De(t,"GET","/v2/recaptchaConfig",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e){return De(t,"POST","/v1/accounts:delete",e)}async function Hn(t,e){return De(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gd(t,e=!1){const n=be(t),s=await n.getIdToken(e),i=us(s);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:i,token:s,authTime:Zt(Fr(i.auth_time)),issuedAtTime:Zt(Fr(i.iat)),expirationTime:Zt(Fr(i.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Fr(t){return Number(t)*1e3}function us(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return jn("JWT malformed, contained fewer than 3 sections"),null;try{const i=fa(n);return i?JSON.parse(i):(jn("Failed to decode base64 JWT payload"),null)}catch(i){return jn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ui(t){const e=us(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Oe&&vd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zt(this.lastLoginAt),this.creationTime=Zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ct(t,Hn(n,{idToken:s}));C(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Sa(a.providerUserInfo):[],f=wd(t.providerData,c),p=t.isAnonymous,I=!(t.email&&a.passwordHash)&&!(f!=null&&f.length),T=p?I:!1,A={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Yr(a.createdAt,a.lastLoginAt),isAnonymous:T};Object.assign(t,A)}async function _d(t){const e=be(t);await Wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wd(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Sa(t){return t.map(e=>{var{providerId:n}=e,s=es(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(t,e){const n=await Aa(t,{},async()=>{const s=on({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,c=await Ra(t,i,"/v1/token",`key=${a}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",xa.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Id(t,e){return De(t,"POST","/v2/accounts:revokeToken",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ui(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){C(e.length!==0,"internal-error");const n=Ui(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:a}=await bd(e,n);this.updateTokensAndExpiration(s,i,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:a}=n,c=new Rt;return s&&(C(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),i&&(C(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(C(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Te{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,a=es(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yr(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Ct(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gd(this,e)}reload(){return _d(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Te(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Wn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(he(this.auth.app))return Promise.reject(Pe(this.auth));const e=await this.getIdToken();return await Ct(this,md(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,a,c,f,p,I,T;const A=(s=n.displayName)!==null&&s!==void 0?s:void 0,P=(i=n.email)!==null&&i!==void 0?i:void 0,$=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,N=(c=n.photoURL)!==null&&c!==void 0?c:void 0,L=(f=n.tenantId)!==null&&f!==void 0?f:void 0,D=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(I=n.createdAt)!==null&&I!==void 0?I:void 0,ee=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:G,emailVerified:H,isAnonymous:te,providerData:q,stsTokenManager:y}=n;C(G&&y,e,"internal-error");const h=Rt.fromJSON(this.name,y);C(typeof G=="string",e,"internal-error"),tt(A,e.name),tt(P,e.name),C(typeof H=="boolean",e,"internal-error"),C(typeof te=="boolean",e,"internal-error"),tt($,e.name),tt(N,e.name),tt(L,e.name),tt(D,e.name),tt(Q,e.name),tt(ee,e.name);const m=new Te({uid:G,auth:e,email:P,emailVerified:H,displayName:A,isAnonymous:te,photoURL:N,phoneNumber:$,tenantId:L,stsTokenManager:h,createdAt:Q,lastLoginAt:ee});return q&&Array.isArray(q)&&(m.providerData=q.map(v=>Object.assign({},v))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,n,s=!1){const i=new Rt;i.updateFromServerResponse(n);const a=new Te({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Wn(a),a}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];C(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Sa(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),f=new Rt;f.updateFromIdToken(s);const p=new Te({uid:i.localId,auth:e,stsTokenManager:f,isAnonymous:c}),I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,I),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Map;function $e(t){We(t instanceof Function,"Expected a class definition");let e=Fi.get(t);return e?(We(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pa.type="NONE";const Vi=Pa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e,n){return`firebase:${t}:${e}:${n}`}class St{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:a}=this.auth;this.fullUserKey=Mn(this.userKey,i.apiKey,a),this.fullPersistenceKey=Mn("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hn(this.auth,{idToken:e}).catch(()=>{});return n?Te._fromGetAccountInfoResponse(this.auth,n,e):null}return Te._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new St($e(Vi),e,s);const i=(await Promise.all(n.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let a=i[0]||$e(Vi);const c=Mn(s,e.config.apiKey,e.name);let f=null;for(const I of n)try{const T=await I._get(c);if(T){let A;if(typeof T=="string"){const P=await Hn(e,{idToken:T}).catch(()=>{});if(!P)break;A=await Te._fromGetAccountInfoResponse(e,P,T)}else A=Te._fromJSON(e,T);I!==a&&(f=A),a=I;break}}catch{}const p=i.filter(I=>I._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new St(a,e,s):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(n.map(async I=>{if(I!==a)try{await I._remove(c)}catch{}})),new St(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Da(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ca(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ja(e))return"Blackberry";if(Ma(e))return"Webos";if(Na(e))return"Safari";if((e.includes("chrome/")||Oa(e))&&!e.includes("edge/"))return"Chrome";if(La(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ca(t=de()){return/firefox\//i.test(t)}function Na(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oa(t=de()){return/crios\//i.test(t)}function Da(t=de()){return/iemobile/i.test(t)}function La(t=de()){return/android/i.test(t)}function ja(t=de()){return/blackberry/i.test(t)}function Ma(t=de()){return/webos/i.test(t)}function hs(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ed(t=de()){var e;return hs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Td(){return ju()&&document.documentMode===10}function Ua(t=de()){return hs(t)||La(t)||Ma(t)||ja(t)||/windows phone/i.test(t)||Da(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e=[]){let n;switch(t){case"Browser":n=Bi(de());break;case"Worker":n=`${Bi(de())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yt}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t,e={}){return De(t,"GET","/v2/passwordPolicy",Ge(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=6;class Rd{constructor(e){var n,s,i,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:Ad,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(i=p.containsLowercaseLetter)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zi(this),this.idTokenSubscription=new zi(this),this.beforeStateQueue=new kd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$e(n)),this._initializationPromise=this.queue(async()=>{var s,i,a;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hn(this,{idToken:e}),s=await Te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(he(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ad()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(he(this.app))return Promise.reject(Pe(this));const n=e?be(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return he(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return he(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xd(this),n=new Rd(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Id(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$e(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[$e(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,i);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(he(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ke(t){return be(t)}class zi{constructor(e){this.auth=e,this.observer=null,this.addObserver=$u(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pd(t){nr=t}function Va(t){return nr.loadJS(t)}function Cd(){return nr.recaptchaEnterpriseScript}function Nd(){return nr.gapiScript}function Od(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Dd{constructor(){this.enterprise=new Ld}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ld{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jd="recaptcha-enterprise",Ba="NO_RECAPTCHA";class Md{constructor(e){this.type=jd,this.auth=Ke(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,f)=>{pd(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const I=new fd(p);return a.tenantId==null?a._agentRecaptchaConfig=I:a._tenantRecaptchaConfigs[a.tenantId]=I,c(I.siteKey)}}).catch(p=>{f(p)})})}function i(a,c,f){const p=window.grecaptcha;Mi(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(I=>{c(I)}).catch(()=>{c(Ba)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dd().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(f=>{if(!n&&Mi(window.grecaptcha))i(f,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Cd();p.length!==0&&(p+=f),Va(p).then(()=>{i(f,a,c)}).catch(I=>{c(I)})}}).catch(f=>{c(f)})})}}async function $i(t,e,n,s=!1,i=!1){const a=new Md(t);let c;if(i)c=Ba;else try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,I=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:I,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Gn(t,e,n,s,i){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await $i(t,e,n,n==="getOobCode");return s(t,c)}else return s(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await $i(t,e,n,n==="getOobCode");return s(t,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e){const n=tr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(pt(a,e??{}))return i;we(i,"already-initialized")}return n.initialize({options:e})}function Fd(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($e);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Vd(t,e,n){const s=Ke(t);C(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,a=za(e),{host:c,port:f}=Bd(e),p=f===null?"":`:${f}`,I={url:`${a}//${c}${p}/`},T=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){C(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),C(pt(I,s.config.emulator)&&pt(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=I,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,zd()}function za(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bd(t){const e=za(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const a=i[1];return{host:a,port:Hi(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Hi(c)}}}function Hi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function $d(t,e){return De(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t,e){return ln(t,"POST","/v1/accounts:signInWithPassword",Ge(t,e))}async function Wd(t,e){return De(t,"POST","/v1/accounts:sendOobCode",Ge(t,e))}async function Gd(t,e){return Wd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e){return ln(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}async function qd(t,e){return ln(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ds{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gn(e,n,"signInWithPassword",Hd);case"emailLink":return Kd(e,{email:this._email,oobCode:this._password});default:we(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gn(e,s,"signUpPassword",$d);case"emailLink":return qd(e,{idToken:n,email:this._email,oobCode:this._password});default:we(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return ln(t,"POST","/v1/accounts:signInWithIdp",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="http://localhost";class gt extends ds{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):we("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,a=es(n,["providerId","signInMethod"]);if(!s||!i)return null;const c=new gt(s,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Pt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:Jd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=on(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yd(t){const e=Xt(Yt(t)).link,n=e?Xt(Yt(e)).deep_link_id:null,s=Xt(Yt(t)).deep_link_id;return(s?Xt(Yt(s)).link:null)||s||n||e||t}class rr{constructor(e){var n,s,i,a,c,f;const p=Xt(Yt(e)),I=(n=p.apiKey)!==null&&n!==void 0?n:null,T=(s=p.oobCode)!==null&&s!==void 0?s:null,A=Xd((i=p.mode)!==null&&i!==void 0?i:null);C(I&&T&&A,"argument-error"),this.apiKey=I,this.operation=A,this.code=T,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=Yd(e);try{return new rr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.providerId=_t.PROVIDER_ID}static credential(e,n){return rn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=rr.parseLink(n);return C(s,"argument-error"),rn._fromEmailAndCode(e,s.code,s.tenantId)}}_t.PROVIDER_ID="password";_t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends fs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends cn{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Be.credential(n,s)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends cn{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends cn{constructor(){super("twitter.com")}static credential(e,n){return gt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return st.credential(n,s)}catch{return null}}}st.TWITTER_SIGN_IN_METHOD="twitter.com";st.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){return ln(t,"POST","/v1/accounts:signUp",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const a=await Te._fromIdTokenResponse(e,s,i),c=Wi(s);return new vt({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Wi(s);return new vt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Wi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Oe{constructor(e,n,s,i){var a;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Kn(e,n,s,i)}}function $a(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Kn._fromErrorAndOperation(t,a,e,s):a})}async function Zd(t,e,n=!1){const s=await Ct(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(t,e,n=!1){const{auth:s}=t;if(he(s.app))return Promise.reject(Pe(s));const i="reauthenticate";try{const a=await Ct(t,$a(s,i,e,t),n);C(a.idToken,s,"internal-error");const c=us(a.idToken);C(c,s,"internal-error");const{sub:f}=c;return C(t.uid===f,s,"user-mismatch"),vt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&we(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e,n=!1){if(he(t.app))return Promise.reject(Pe(t));const s="signIn",i=await $a(t,s,e),a=await vt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(a.user),a}async function Wa(t,e){return Ha(Ke(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e,n){var s;C(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),C(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),C(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(t){const e=Ke(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nf(t,e,n){if(he(t.app))return Promise.reject(Pe(t));const s=Ke(t),c=await Gn(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qd).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Ga(t),p}),f=await vt._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(f.user),f}function rf(t,e,n){return he(t.app)?Promise.reject(Pe(t)):Wa(be(t),_t.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ga(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(t,e,n){const s=Ke(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function a(c,f){C(f.handleCodeInApp,s,"argument-error"),f&&tf(s,c,f)}a(i,n),await Gn(s,i,"getOobCode",Gd)}function of(t,e){const n=rr.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function af(t,e,n){if(he(t.app))return Promise.reject(Pe(t));const s=be(t),i=_t.credentialWithLink(e,n||$n());return C(i._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Wa(s,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(t,e){return De(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=be(t),a={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await Ct(s,lf(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function uf(t,e,n,s){return be(t).onIdTokenChanged(e,n,s)}function hf(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function df(t,e,n,s){return be(t).onAuthStateChanged(e,n,s)}function ff(t){return be(t).signOut()}const qn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=1e3,mf=10;class qa extends Ka{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ua(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);Td()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mf):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qa.type="LOCAL";const gf=qa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Ka{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ja.type="SESSION";const Xa=Ja;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new sr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:a}=n.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const f=Array.from(c).map(async I=>I(n.origin,a)),p=await vf(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const I=ps("",20);i.port1.start();const T=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:i,onMessage(A){const P=A;if(P.data.eventId===I)switch(P.data.status){case"ack":clearTimeout(T),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(P.data.response);break;default:clearTimeout(T),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:I,data:n},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function _f(t){Ce().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function wf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function If(){return Ya()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="firebaseLocalStorageDb",Ef=1,Jn="firebaseLocalStorage",Za="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function Tf(){const t=indexedDB.deleteDatabase(Qa);return new un(t).toPromise()}function Qr(){const t=indexedDB.open(Qa,Ef);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Jn,{keyPath:Za})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Jn)?e(s):(s.close(),await Tf(),e(await Qr()))})})}async function Gi(t,e,n){const s=ir(t,!0).put({[Za]:e,value:n});return new un(s).toPromise()}async function kf(t,e){const n=ir(t,!1).get(e),s=await new un(n).toPromise();return s===void 0?null:s.value}function Ki(t,e){const n=ir(t,!0).delete(e);return new un(n).toPromise()}const xf=800,Af=3;class el{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Af)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ya()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sr._getInstance(If()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wf(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Gi(e,qn,"1"),await Ki(e,qn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gi(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kf(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ki(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=ir(i,!1).getAll();return new un(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}el.type="LOCAL";const Rf=el;new an(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e){return e?$e(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends ds{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sf(t){return Ha(t.auth,new ms(t),t.bypassAuthState)}function Pf(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),ef(n,new ms(t),t.bypassAuthState)}async function Cf(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Zd(n,new ms(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s,i,a=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(I){this.reject(I)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sf;case"linkViaPopup":case"linkViaRedirect":return Cf;case"reauthViaPopup":case"reauthViaRedirect":return Pf;default:we(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new an(2e3,1e4);async function Of(t,e,n){if(he(t.app))return Promise.reject(Ae(t,"operation-not-supported-in-this-environment"));const s=Ke(t);sd(t,e,fs);const i=tl(s,n);return new ft(s,"signInViaPopup",e,i).executeNotNull()}class ft extends nl{constructor(e,n,s,i,a){super(e,n,i,a),this.provider=s,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nf.get())};e()}}ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="pendingRedirect",Un=new Map;class Lf extends nl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const s=await jf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jf(t,e){const n=Ff(e),s=Uf(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Mf(t,e){Un.set(t._key(),e)}function Uf(t){return $e(t._redirectPersistence)}function Ff(t){return Mn(Df,t.config.apiKey,t.name)}async function Vf(t,e,n=!1){if(he(t.app))return Promise.reject(Pe(t));const s=Ke(t),i=tl(s,e),c=await new Lf(s,i,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=10*60*1e3;class zf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$f(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rl(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ae(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bf&&this.cachedEventUids.clear(),this.cachedEventUids.has(qi(e))}saveEventToCache(e){this.cachedEventUids.add(qi(e)),this.lastProcessedEventTime=Date.now()}}function qi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $f(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e={}){return De(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gf=/^https?/;async function Kf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hf(t);for(const n of e)try{if(qf(n))return}catch{}we(t,"unauthorized-domain")}function qf(t){const e=$n(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!Gf.test(n))return!1;if(Wf.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new an(3e4,6e4);function Ji(){const t=Ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xf(t){return new Promise((e,n)=>{var s,i,a;function c(){Ji(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ji(),n(Ae(t,"network-request-failed"))},timeout:Jf.get()})}if(!((i=(s=Ce().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ce().gapi)===null||a===void 0)&&a.load)c();else{const f=Od("iframefcb");return Ce()[f]=()=>{gapi.load?c():n(Ae(t,"network-request-failed"))},Va(`${Nd()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw Fn=null,e})}let Fn=null;function Yf(t){return Fn=Fn||Xf(t),Fn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new an(5e3,15e3),Zf="__/auth/iframe",ep="emulator/auth/iframe",tp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},np=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rp(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cs(e,ep):`https://${t.config.authDomain}/${Zf}`,s={apiKey:e.apiKey,appName:t.name,v:yt},i=np.get(t.config.apiHost);i&&(s.eid=i);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${on(s).slice(1)}`}async function sp(t){const e=await Yf(t),n=Ce().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:rp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tp,dontclear:!0},s=>new Promise(async(i,a)=>{await s.restyle({setHideOnLeave:!1});const c=Ae(t,"network-request-failed"),f=Ce().setTimeout(()=>{a(c)},Qf.get());function p(){Ce().clearTimeout(f),i(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},op=500,ap=600,lp="_blank",cp="http://localhost";class Xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function up(t,e,n,s=op,i=ap){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},ip),{width:s.toString(),height:i.toString(),top:a,left:c}),I=de().toLowerCase();n&&(f=Oa(I)?lp:n),Ca(I)&&(e=e||cp,p.scrollbars="yes");const T=Object.entries(p).reduce((P,[$,N])=>`${P}${$}=${N},`,"");if(Ed(I)&&f!=="_self")return hp(e||"",f),new Xi(null);const A=window.open(e||"",f,T);C(A,t,"popup-blocked");try{A.focus()}catch{}return new Xi(A)}function hp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="__/auth/handler",fp="emulator/auth/handler",pp=encodeURIComponent("fac");async function Yi(t,e,n,s,i,a){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yt,eventId:i};if(e instanceof fs){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",zu(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))c[T]=A}if(e instanceof cn){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(c.scopes=T.join(","))}t.tenantId&&(c.tid=t.tenantId);const f=c;for(const T of Object.keys(f))f[T]===void 0&&delete f[T];const p=await t._getAppCheckToken(),I=p?`#${pp}=${encodeURIComponent(p)}`:"";return`${mp(t)}?${on(f).slice(1)}${I}`}function mp({config:t}){return t.emulator?cs(t,fp):`https://${t.authDomain}/${dp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class gp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xa,this._completeRedirectFn=Vf,this._overrideRedirectResult=Mf}async _openPopup(e,n,s,i){var a;We((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Yi(e,n,s,$n(),i);return up(e,c,ps())}async _openRedirect(e,n,s,i){await this._originValidation(e);const a=await Yi(e,n,s,$n(),i);return _f(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(We(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sp(e),s=new zf(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},i=>{var a;const c=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Vr];c!==void 0&&n(!!c),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ua()||Na()||hs()}}const vp=gp;var Qi="@firebase/auth",Zi="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wp(t){mt(new at("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;C(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fa(t)},I=new Sd(s,i,a,p);return Fd(I,n),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mt(new at("auth-internal",e=>{const n=Ke(e.getProvider("auth").getImmediate());return(s=>new yp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Qi,Zi,_p(t)),Se(Qi,Zi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=5*60,Ip=va("authIdTokenMaxAge")||bp;let eo=null;const Ep=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ip)return;const i=n==null?void 0:n.token;eo!==i&&(eo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tp(t=os()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ud(t,{popupRedirectResolver:vp,persistence:[Rf,gf,Xa]}),s=va("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=Ep(a.toString());hf(n,c,()=>c(n.currentUser)),uf(n,f=>c(f))}}const i=pa("auth");return i&&Vd(n,`http://${i}`),n}function kp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Pd({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const a=Ae("internal-error");a.customData=i,n(a)},s.type="text/javascript",s.charset="UTF-8",kp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wp("Browser");var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sl;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,h){function m(){}m.prototype=h.prototype,y.D=h.prototype,y.prototype=new m,y.prototype.constructor=y,y.C=function(v,_,b){for(var g=Array(arguments.length-2),me=2;me<arguments.length;me++)g[me-2]=arguments[me];return h.prototype[_].apply(v,g)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,h,m){m||(m=0);var v=Array(16);if(typeof h=="string")for(var _=0;16>_;++_)v[_]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(_=0;16>_;++_)v[_]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=y.g[0],m=y.g[1],_=y.g[2];var b=y.g[3],g=h+(b^m&(_^b))+v[0]+3614090360&4294967295;h=m+(g<<7&4294967295|g>>>25),g=b+(_^h&(m^_))+v[1]+3905402710&4294967295,b=h+(g<<12&4294967295|g>>>20),g=_+(m^b&(h^m))+v[2]+606105819&4294967295,_=b+(g<<17&4294967295|g>>>15),g=m+(h^_&(b^h))+v[3]+3250441966&4294967295,m=_+(g<<22&4294967295|g>>>10),g=h+(b^m&(_^b))+v[4]+4118548399&4294967295,h=m+(g<<7&4294967295|g>>>25),g=b+(_^h&(m^_))+v[5]+1200080426&4294967295,b=h+(g<<12&4294967295|g>>>20),g=_+(m^b&(h^m))+v[6]+2821735955&4294967295,_=b+(g<<17&4294967295|g>>>15),g=m+(h^_&(b^h))+v[7]+4249261313&4294967295,m=_+(g<<22&4294967295|g>>>10),g=h+(b^m&(_^b))+v[8]+1770035416&4294967295,h=m+(g<<7&4294967295|g>>>25),g=b+(_^h&(m^_))+v[9]+2336552879&4294967295,b=h+(g<<12&4294967295|g>>>20),g=_+(m^b&(h^m))+v[10]+4294925233&4294967295,_=b+(g<<17&4294967295|g>>>15),g=m+(h^_&(b^h))+v[11]+2304563134&4294967295,m=_+(g<<22&4294967295|g>>>10),g=h+(b^m&(_^b))+v[12]+1804603682&4294967295,h=m+(g<<7&4294967295|g>>>25),g=b+(_^h&(m^_))+v[13]+4254626195&4294967295,b=h+(g<<12&4294967295|g>>>20),g=_+(m^b&(h^m))+v[14]+2792965006&4294967295,_=b+(g<<17&4294967295|g>>>15),g=m+(h^_&(b^h))+v[15]+1236535329&4294967295,m=_+(g<<22&4294967295|g>>>10),g=h+(_^b&(m^_))+v[1]+4129170786&4294967295,h=m+(g<<5&4294967295|g>>>27),g=b+(m^_&(h^m))+v[6]+3225465664&4294967295,b=h+(g<<9&4294967295|g>>>23),g=_+(h^m&(b^h))+v[11]+643717713&4294967295,_=b+(g<<14&4294967295|g>>>18),g=m+(b^h&(_^b))+v[0]+3921069994&4294967295,m=_+(g<<20&4294967295|g>>>12),g=h+(_^b&(m^_))+v[5]+3593408605&4294967295,h=m+(g<<5&4294967295|g>>>27),g=b+(m^_&(h^m))+v[10]+38016083&4294967295,b=h+(g<<9&4294967295|g>>>23),g=_+(h^m&(b^h))+v[15]+3634488961&4294967295,_=b+(g<<14&4294967295|g>>>18),g=m+(b^h&(_^b))+v[4]+3889429448&4294967295,m=_+(g<<20&4294967295|g>>>12),g=h+(_^b&(m^_))+v[9]+568446438&4294967295,h=m+(g<<5&4294967295|g>>>27),g=b+(m^_&(h^m))+v[14]+3275163606&4294967295,b=h+(g<<9&4294967295|g>>>23),g=_+(h^m&(b^h))+v[3]+4107603335&4294967295,_=b+(g<<14&4294967295|g>>>18),g=m+(b^h&(_^b))+v[8]+1163531501&4294967295,m=_+(g<<20&4294967295|g>>>12),g=h+(_^b&(m^_))+v[13]+2850285829&4294967295,h=m+(g<<5&4294967295|g>>>27),g=b+(m^_&(h^m))+v[2]+4243563512&4294967295,b=h+(g<<9&4294967295|g>>>23),g=_+(h^m&(b^h))+v[7]+1735328473&4294967295,_=b+(g<<14&4294967295|g>>>18),g=m+(b^h&(_^b))+v[12]+2368359562&4294967295,m=_+(g<<20&4294967295|g>>>12),g=h+(m^_^b)+v[5]+4294588738&4294967295,h=m+(g<<4&4294967295|g>>>28),g=b+(h^m^_)+v[8]+2272392833&4294967295,b=h+(g<<11&4294967295|g>>>21),g=_+(b^h^m)+v[11]+1839030562&4294967295,_=b+(g<<16&4294967295|g>>>16),g=m+(_^b^h)+v[14]+4259657740&4294967295,m=_+(g<<23&4294967295|g>>>9),g=h+(m^_^b)+v[1]+2763975236&4294967295,h=m+(g<<4&4294967295|g>>>28),g=b+(h^m^_)+v[4]+1272893353&4294967295,b=h+(g<<11&4294967295|g>>>21),g=_+(b^h^m)+v[7]+4139469664&4294967295,_=b+(g<<16&4294967295|g>>>16),g=m+(_^b^h)+v[10]+3200236656&4294967295,m=_+(g<<23&4294967295|g>>>9),g=h+(m^_^b)+v[13]+681279174&4294967295,h=m+(g<<4&4294967295|g>>>28),g=b+(h^m^_)+v[0]+3936430074&4294967295,b=h+(g<<11&4294967295|g>>>21),g=_+(b^h^m)+v[3]+3572445317&4294967295,_=b+(g<<16&4294967295|g>>>16),g=m+(_^b^h)+v[6]+76029189&4294967295,m=_+(g<<23&4294967295|g>>>9),g=h+(m^_^b)+v[9]+3654602809&4294967295,h=m+(g<<4&4294967295|g>>>28),g=b+(h^m^_)+v[12]+3873151461&4294967295,b=h+(g<<11&4294967295|g>>>21),g=_+(b^h^m)+v[15]+530742520&4294967295,_=b+(g<<16&4294967295|g>>>16),g=m+(_^b^h)+v[2]+3299628645&4294967295,m=_+(g<<23&4294967295|g>>>9),g=h+(_^(m|~b))+v[0]+4096336452&4294967295,h=m+(g<<6&4294967295|g>>>26),g=b+(m^(h|~_))+v[7]+1126891415&4294967295,b=h+(g<<10&4294967295|g>>>22),g=_+(h^(b|~m))+v[14]+2878612391&4294967295,_=b+(g<<15&4294967295|g>>>17),g=m+(b^(_|~h))+v[5]+4237533241&4294967295,m=_+(g<<21&4294967295|g>>>11),g=h+(_^(m|~b))+v[12]+1700485571&4294967295,h=m+(g<<6&4294967295|g>>>26),g=b+(m^(h|~_))+v[3]+2399980690&4294967295,b=h+(g<<10&4294967295|g>>>22),g=_+(h^(b|~m))+v[10]+4293915773&4294967295,_=b+(g<<15&4294967295|g>>>17),g=m+(b^(_|~h))+v[1]+2240044497&4294967295,m=_+(g<<21&4294967295|g>>>11),g=h+(_^(m|~b))+v[8]+1873313359&4294967295,h=m+(g<<6&4294967295|g>>>26),g=b+(m^(h|~_))+v[15]+4264355552&4294967295,b=h+(g<<10&4294967295|g>>>22),g=_+(h^(b|~m))+v[6]+2734768916&4294967295,_=b+(g<<15&4294967295|g>>>17),g=m+(b^(_|~h))+v[13]+1309151649&4294967295,m=_+(g<<21&4294967295|g>>>11),g=h+(_^(m|~b))+v[4]+4149444226&4294967295,h=m+(g<<6&4294967295|g>>>26),g=b+(m^(h|~_))+v[11]+3174756917&4294967295,b=h+(g<<10&4294967295|g>>>22),g=_+(h^(b|~m))+v[2]+718787259&4294967295,_=b+(g<<15&4294967295|g>>>17),g=m+(b^(_|~h))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(_+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+b&4294967295}s.prototype.u=function(y,h){h===void 0&&(h=y.length);for(var m=h-this.blockSize,v=this.B,_=this.h,b=0;b<h;){if(_==0)for(;b<=m;)i(this,y,b),b+=this.blockSize;if(typeof y=="string"){for(;b<h;)if(v[_++]=y.charCodeAt(b++),_==this.blockSize){i(this,v),_=0;break}}else for(;b<h;)if(v[_++]=y[b++],_==this.blockSize){i(this,v),_=0;break}}this.h=_,this.o+=h},s.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;var m=8*this.o;for(h=y.length-8;h<y.length;++h)y[h]=m&255,m/=256;for(this.u(y),y=Array(16),h=m=0;4>h;++h)for(var v=0;32>v;v+=8)y[m++]=this.g[h]>>>v&255;return y};function a(y,h){var m=f;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=h(y)}function c(y,h){this.h=h;for(var m=[],v=!0,_=y.length-1;0<=_;_--){var b=y[_]|0;v&&b==h||(m[_]=b,v=!1)}this.g=m}var f={};function p(y){return-128<=y&&128>y?a(y,function(h){return new c([h|0],0>h?-1:0)}):new c([y|0],0>y?-1:0)}function I(y){if(isNaN(y)||!isFinite(y))return A;if(0>y)return D(I(-y));for(var h=[],m=1,v=0;y>=m;v++)h[v]=y/m|0,m*=4294967296;return new c(h,0)}function T(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return D(T(y.substring(1),h));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=I(Math.pow(h,8)),v=A,_=0;_<y.length;_+=8){var b=Math.min(8,y.length-_),g=parseInt(y.substring(_,_+b),h);8>b?(b=I(Math.pow(h,b)),v=v.j(b).add(I(g))):(v=v.j(m),v=v.add(I(g)))}return v}var A=p(0),P=p(1),$=p(16777216);t=c.prototype,t.m=function(){if(L(this))return-D(this).m();for(var y=0,h=1,m=0;m<this.g.length;m++){var v=this.i(m);y+=(0<=v?v:4294967296+v)*h,h*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+D(this).toString(y);for(var h=I(Math.pow(y,6)),m=this,v="";;){var _=H(m,h).g;m=Q(m,_.j(h));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(y);if(m=_,N(m))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(var h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function L(y){return y.h==-1}t.l=function(y){return y=Q(this,y),L(y)?-1:N(y)?0:1};function D(y){for(var h=y.g.length,m=[],v=0;v<h;v++)m[v]=~y.g[v];return new c(m,~y.h).add(P)}t.abs=function(){return L(this)?D(this):this},t.add=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],v=0,_=0;_<=h;_++){var b=v+(this.i(_)&65535)+(y.i(_)&65535),g=(b>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);v=g>>>16,b&=65535,g&=65535,m[_]=g<<16|b}return new c(m,m[m.length-1]&-2147483648?-1:0)};function Q(y,h){return y.add(D(h))}t.j=function(y){if(N(this)||N(y))return A;if(L(this))return L(y)?D(this).j(D(y)):D(D(this).j(y));if(L(y))return D(this.j(D(y)));if(0>this.l($)&&0>y.l($))return I(this.m()*y.m());for(var h=this.g.length+y.g.length,m=[],v=0;v<2*h;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var _=0;_<y.g.length;_++){var b=this.i(v)>>>16,g=this.i(v)&65535,me=y.i(_)>>>16,ve=y.i(_)&65535;m[2*v+2*_]+=g*ve,ee(m,2*v+2*_),m[2*v+2*_+1]+=b*ve,ee(m,2*v+2*_+1),m[2*v+2*_+1]+=g*me,ee(m,2*v+2*_+1),m[2*v+2*_+2]+=b*me,ee(m,2*v+2*_+2)}for(v=0;v<h;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=h;v<2*h;v++)m[v]=0;return new c(m,0)};function ee(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function G(y,h){this.g=y,this.h=h}function H(y,h){if(N(h))throw Error("division by zero");if(N(y))return new G(A,A);if(L(y))return h=H(D(y),h),new G(D(h.g),D(h.h));if(L(h))return h=H(y,D(h)),new G(D(h.g),h.h);if(30<y.g.length){if(L(y)||L(h))throw Error("slowDivide_ only works with positive integers.");for(var m=P,v=h;0>=v.l(y);)m=te(m),v=te(v);var _=q(m,1),b=q(v,1);for(v=q(v,2),m=q(m,2);!N(v);){var g=b.add(v);0>=g.l(y)&&(_=_.add(m),b=g),v=q(v,1),m=q(m,1)}return h=Q(y,_.j(h)),new G(_,h)}for(_=A;0<=y.l(h);){for(m=Math.max(1,Math.floor(y.m()/h.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=I(m),g=b.j(h);L(g)||0<g.l(y);)m-=v,b=I(m),g=b.j(h);N(b)&&(b=P),_=_.add(b),y=Q(y,g)}return new G(_,y)}t.A=function(y){return H(this,y).h},t.and=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],v=0;v<h;v++)m[v]=this.i(v)&y.i(v);return new c(m,this.h&y.h)},t.or=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],v=0;v<h;v++)m[v]=this.i(v)|y.i(v);return new c(m,this.h|y.h)},t.xor=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],v=0;v<h;v++)m[v]=this.i(v)^y.i(v);return new c(m,this.h^y.h)};function te(y){for(var h=y.g.length+1,m=[],v=0;v<h;v++)m[v]=y.i(v)<<1|y.i(v-1)>>>31;return new c(m,y.h)}function q(y,h){var m=h>>5;h%=32;for(var v=y.g.length-m,_=[],b=0;b<v;b++)_[b]=0<h?y.i(b+m)>>>h|y.i(b+m+1)<<32-h:y.i(b+m);return new c(_,y.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=I,c.fromString=T,sl=c}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,l){return r==Array.prototype||r==Object.prototype||(r[o]=l.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var o=0;o<r.length;++o){var l=r[o];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var s=n(this);function i(r,o){if(o)e:{var l=s;r=r.split(".");for(var u=0;u<r.length-1;u++){var w=r[u];if(!(w in l))break e;l=l[w]}r=r[r.length-1],u=l[r],o=o(u),o!=u&&o!=null&&e(l,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var l=0,u=!1,w={next:function(){if(!u&&l<r.length){var E=l++;return{value:o(E,r[E]),done:!1}}return u=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(r){return r||function(){return a(this,function(o,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function I(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function T(r,o,l){return r.call.apply(r.bind,arguments)}function A(r,o,l){if(!r)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,u),r.apply(o,w)}}return function(){return r.apply(o,arguments)}}function P(r,o,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:A,P.apply(null,arguments)}function $(r,o){var l=Array.prototype.slice.call(arguments,1);return function(){var u=l.slice();return u.push.apply(u,arguments),r.apply(this,u)}}function N(r,o){function l(){}l.prototype=o.prototype,r.aa=o.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(u,w,E){for(var k=Array(arguments.length-2),K=2;K<arguments.length;K++)k[K-2]=arguments[K];return o.prototype[w].apply(u,k)}}function L(r){const o=r.length;if(0<o){const l=Array(o);for(let u=0;u<o;u++)l[u]=r[u];return l}return[]}function D(r,o){for(let l=1;l<arguments.length;l++){const u=arguments[l];if(p(u)){const w=r.length||0,E=u.length||0;r.length=w+E;for(let k=0;k<E;k++)r[w+k]=u[k]}else r.push(u)}}class Q{constructor(o,l){this.i=o,this.j=l,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function ee(r){return/^[\s\xa0]*$/.test(r)}function G(){var r=f.navigator;return r&&(r=r.userAgent)?r:""}function H(r){return H[" "](r),r}H[" "]=function(){};var te=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function q(r,o,l){for(const u in r)o.call(l,r[u],u,r)}function y(r,o){for(const l in r)o.call(void 0,r[l],l,r)}function h(r){const o={};for(const l in r)o[l]=r[l];return o}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(r,o){let l,u;for(let w=1;w<arguments.length;w++){u=arguments[w];for(l in u)r[l]=u[l];for(let E=0;E<m.length;E++)l=m[E],Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l])}}function _(r){var o=1;r=r.split(":");const l=[];for(;0<o&&r.length;)l.push(r.shift()),o--;return r.length&&l.push(r.join(":")),l}function b(r){f.setTimeout(()=>{throw r},0)}function g(){var r=wt;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class me{constructor(){this.h=this.g=null}add(o,l){const u=ve.get();u.set(o,l),this.h?this.h.next=u:this.g=u,this.h=u}}var ve=new Q(()=>new Ie,r=>r.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(o,l){this.h=o,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,O=!1,wt=new me,Lt=()=>{const r=f.Promise.resolve(void 0);ge=()=>{r.then(dn)}};var dn=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(l){b(l)}var o=ve;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}O=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};f.addEventListener("test",l,o),f.removeEventListener("test",l,o)}catch{}return r}();function Re(r,o){if(B.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,u=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(te){e:{try{H(o.nodeName);var w=!0;break e}catch{}w=!1}w||(o=null)}}else l=="mouseover"?o=r.fromElement:l=="mouseout"&&(o=r.toElement);this.relatedTarget=o,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:fn[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Re.aa.h.call(this)}}N(Re,B);var fn={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),pn=0;function bt(r,o,l,u,w){this.listener=r,this.proxy=null,this.src=o,this.type=l,this.capture=!!u,this.ha=w,this.key=++pn,this.da=this.fa=!1}function je(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Je(r){this.src=r,this.g={},this.h=0}Je.prototype.add=function(r,o,l,u,w){var E=r.toString();r=this.g[E],r||(r=this.g[E]=[],this.h++);var k=or(r,o,u,w);return-1<k?(o=r[k],l||(o.fa=!1)):(o=new bt(o,this.src,E,!!u,w),o.fa=l,r.push(o)),o};function Xe(r,o){var l=o.type;if(l in r.g){var u=r.g[l],w=Array.prototype.indexOf.call(u,o,void 0),E;(E=0<=w)&&Array.prototype.splice.call(u,w,1),E&&(je(o),r.g[l].length==0&&(delete r.g[l],r.h--))}}function or(r,o,l,u){for(var w=0;w<r.length;++w){var E=r[w];if(!E.da&&E.listener==o&&E.capture==!!l&&E.ha==u)return w}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),lr={};function bs(r,o,l,u,w){if(Array.isArray(o)){for(var E=0;E<o.length;E++)bs(r,o[E],l,u,w);return null}return l=Ts(l),r&&r[X]?r.K(o,l,I(u)?!!u.capture:!1,w):Sl(r,o,l,!1,u,w)}function Sl(r,o,l,u,w,E){if(!o)throw Error("Invalid event type");var k=I(w)?!!w.capture:!!w,K=ur(r);if(K||(r[ar]=K=new Je(r)),l=K.add(o,l,u,k,E),l.proxy)return l;if(u=Pl(),l.proxy=u,u.src=r,u.listener=l,r.addEventListener)ae||(w=k),w===void 0&&(w=!1),r.addEventListener(o.toString(),u,w);else if(r.attachEvent)r.attachEvent(Es(o.toString()),u);else if(r.addListener&&r.removeListener)r.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Pl(){function r(l){return o.call(r.src,r.listener,l)}const o=Cl;return r}function Is(r,o,l,u,w){if(Array.isArray(o))for(var E=0;E<o.length;E++)Is(r,o[E],l,u,w);else u=I(u)?!!u.capture:!!u,l=Ts(l),r&&r[X]?(r=r.i,o=String(o).toString(),o in r.g&&(E=r.g[o],l=or(E,l,u,w),-1<l&&(je(E[l]),Array.prototype.splice.call(E,l,1),E.length==0&&(delete r.g[o],r.h--)))):r&&(r=ur(r))&&(o=r.g[o.toString()],r=-1,o&&(r=or(o,l,u,w)),(l=-1<r?o[r]:null)&&cr(l))}function cr(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[X])Xe(o.i,r);else{var l=r.type,u=r.proxy;o.removeEventListener?o.removeEventListener(l,u,r.capture):o.detachEvent?o.detachEvent(Es(l),u):o.addListener&&o.removeListener&&o.removeListener(u),(l=ur(o))?(Xe(l,r),l.h==0&&(l.src=null,o[ar]=null)):je(r)}}}function Es(r){return r in lr?lr[r]:lr[r]="on"+r}function Cl(r,o){if(r.da)r=!0;else{o=new Re(o,this);var l=r.listener,u=r.ha||r.src;r.fa&&cr(r),r=l.call(u,o)}return r}function ur(r){return r=r[ar],r instanceof Je?r:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ts(r){return typeof r=="function"?r:(r[hr]||(r[hr]=function(o){return r.handleEvent(o)}),r[hr])}function se(){ye.call(this),this.i=new Je(this),this.M=this,this.F=null}N(se,ye),se.prototype[X]=!0,se.prototype.removeEventListener=function(r,o,l,u){Is(this,r,o,l,u)};function le(r,o){var l,u=r.F;if(u)for(l=[];u;u=u.F)l.push(u);if(r=r.M,u=o.type||o,typeof o=="string")o=new B(o,r);else if(o instanceof B)o.target=o.target||r;else{var w=o;o=new B(u,r),v(o,w)}if(w=!0,l)for(var E=l.length-1;0<=E;E--){var k=o.g=l[E];w=mn(k,u,!0,o)&&w}if(k=o.g=r,w=mn(k,u,!0,o)&&w,w=mn(k,u,!1,o)&&w,l)for(E=0;E<l.length;E++)k=o.g=l[E],w=mn(k,u,!1,o)&&w}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var l=r.g[o],u=0;u<l.length;u++)je(l[u]);delete r.g[o],r.h--}}this.F=null},se.prototype.K=function(r,o,l,u){return this.i.add(String(r),o,!1,l,u)},se.prototype.L=function(r,o,l,u){return this.i.add(String(r),o,!0,l,u)};function mn(r,o,l,u){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var w=!0,E=0;E<o.length;++E){var k=o[E];if(k&&!k.da&&k.capture==l){var K=k.listener,re=k.ha||k.src;k.fa&&Xe(r.i,k),w=K.call(re,u)!==!1&&w}}return w&&!u.defaultPrevented}function ks(r,o,l){if(typeof r=="function")l&&(r=P(r,l));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:f.setTimeout(r,o||0)}function xs(r){r.g=ks(()=>{r.g=null,r.i&&(r.i=!1,xs(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class Nl extends ye{constructor(o,l){super(),this.m=o,this.l=l,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:xs(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(r){ye.call(this),this.h=r,this.g={}}N(jt,ye);var As=[];function Rs(r){q(r.g,function(o,l){this.g.hasOwnProperty(l)&&cr(o)},r),r.g={}}jt.prototype.N=function(){jt.aa.N.call(this),Rs(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=f.JSON.stringify,Ol=f.JSON.parse,Dl=class{stringify(r){return f.JSON.stringify(r,void 0)}parse(r){return f.JSON.parse(r,void 0)}};function fr(){}fr.prototype.h=null;function Ss(r){return r.h||(r.h=r.i())}function Ll(){}var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){B.call(this,"d")}N(pr,B);function mr(){B.call(this,"c")}N(mr,B);var It={},Ps=null;function gr(){return Ps=Ps||new se}It.La="serverreachability";function Cs(r){B.call(this,It.La,r)}N(Cs,B);function Ut(r){const o=gr();le(o,new Cs(o))}It.STAT_EVENT="statevent";function Ns(r,o){B.call(this,It.STAT_EVENT,r),this.stat=o}N(Ns,B);function ce(r){const o=gr();le(o,new Ns(o,r))}It.Ma="timingevent";function Os(r,o){B.call(this,It.Ma,r),this.size=o}N(Os,B);function Ft(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){r()},o)}function Vt(){this.g=!0}Vt.prototype.xa=function(){this.g=!1};function jl(r,o,l,u,w,E){r.info(function(){if(r.g)if(E)for(var k="",K=E.split("&"),re=0;re<K.length;re++){var z=K[re].split("=");if(1<z.length){var ie=z[0];z=z[1];var oe=ie.split("_");k=2<=oe.length&&oe[1]=="type"?k+(ie+"="+z+"&"):k+(ie+"=redacted&")}}else k=null;else k=E;return"XMLHTTP REQ ("+u+") [attempt "+w+"]: "+o+`
`+l+`
`+k})}function Ml(r,o,l,u,w,E,k){r.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+w+"]: "+o+`
`+l+`
`+E+" "+k})}function Et(r,o,l,u){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+Fl(r,l)+(u?" "+u:"")})}function Ul(r,o){r.info(function(){return"TIMEOUT: "+o})}Vt.prototype.info=function(){};function Fl(r,o){if(!r.g)return o;if(!o)return null;try{var l=JSON.parse(o);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var u=l[r];if(!(2>u.length)){var w=u[1];if(Array.isArray(w)&&!(1>w.length)){var E=w[0];if(E!="noop"&&E!="stop"&&E!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return dr(l)}catch{return o}}var vr={NO_ERROR:0,TIMEOUT:8},Vl={},yr;function gn(){}N(gn,fr),gn.prototype.g=function(){return new XMLHttpRequest},gn.prototype.i=function(){return{}},yr=new gn;function Ye(r,o,l,u){this.j=r,this.i=o,this.l=l,this.R=u||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ds}function Ds(){this.i=null,this.g="",this.h=!1}var Ls={},_r={};function wr(r,o,l){r.L=1,r.v=wn(Me(o)),r.m=l,r.P=!0,js(r,null)}function js(r,o){r.F=Date.now(),vn(r),r.A=Me(r.v);var l=r.A,u=r.R;Array.isArray(u)||(u=[String(u)]),Xs(l.i,"t",u),r.C=0,l=r.j.J,r.h=new Ds,r.g=pi(r.j,l?o:null,!r.m),0<r.O&&(r.M=new Nl(P(r.Y,r,r.g),r.O)),o=r.U,l=r.g,u=r.ca;var w="readystatechange";Array.isArray(w)||(w&&(As[0]=w.toString()),w=As);for(var E=0;E<w.length;E++){var k=bs(l,w[E],u||o.handleEvent,!1,o.h||o);if(!k)break;o.g[k.key]=k}o=r.H?h(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Ut(),jl(r.i,r.u,r.A,r.l,r.R,r.m)}Ye.prototype.ca=function(r){r=r.target;const o=this.M;o&&Ue(r)==3?o.j():this.Y(r)},Ye.prototype.Y=function(r){try{if(r==this.g)e:{const oe=Ue(this.g);var o=this.g.Ba();const xt=this.g.Z();if(!(3>oe)&&(oe!=3||this.g&&(this.h.h||this.g.oa()||ri(this.g)))){this.J||oe!=4||o==7||(o==8||0>=xt?Ut(3):Ut(2)),br(this);var l=this.g.Z();this.X=l;t:if(Ms(this)){var u=ri(this.g);r="";var w=u.length,E=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lt(this),Bt(this);var k="";break t}this.h.i=new f.TextDecoder}for(o=0;o<w;o++)this.h.h=!0,r+=this.h.i.decode(u[o],{stream:!(E&&o==w-1)});u.length=0,this.h.g+=r,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=l==200,Ml(this.i,this.u,this.A,this.l,this.R,oe,l),this.o){if(this.T&&!this.K){t:{if(this.g){var K,re=this.g;if((K=re.g?re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(K)){var z=K;break t}}z=null}if(l=z)Et(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ir(this,l);else{this.o=!1,this.s=3,ce(12),lt(this),Bt(this);break e}}if(this.P){l=!0;let Ee;for(;!this.J&&this.C<k.length;)if(Ee=Bl(this,k),Ee==_r){oe==4&&(this.s=4,ce(14),l=!1),Et(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==Ls){this.s=4,ce(15),Et(this.i,this.l,k,"[Invalid Chunk]"),l=!1;break}else Et(this.i,this.l,Ee,null),Ir(this,Ee);if(Ms(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||k.length!=0||this.h.h||(this.s=1,ce(16),l=!1),this.o=this.o&&l,!l)Et(this.i,this.l,k,"[Invalid Chunked Response]"),lt(this),Bt(this);else if(0<k.length&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.ba&&!ie.M&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Rr(ie),ie.M=!0,ce(11))}}else Et(this.i,this.l,k,null),Ir(this,k);oe==4&&lt(this),this.o&&!this.J&&(oe==4?ui(this.j,this):(this.o=!1,vn(this)))}else sc(this.g),l==400&&0<k.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),lt(this),Bt(this)}}}catch{}finally{}};function Ms(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Bl(r,o){var l=r.C,u=o.indexOf(`
`,l);return u==-1?_r:(l=Number(o.substring(l,u)),isNaN(l)?Ls:(u+=1,u+l>o.length?_r:(o=o.slice(u,u+l),r.C=u+l,o)))}Ye.prototype.cancel=function(){this.J=!0,lt(this)};function vn(r){r.S=Date.now()+r.I,Us(r,r.I)}function Us(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ft(P(r.ba,r),o)}function br(r){r.B&&(f.clearTimeout(r.B),r.B=null)}Ye.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Ul(this.i,this.A),this.L!=2&&(Ut(),ce(17)),lt(this),this.s=2,Bt(this)):Us(this,this.S-r)};function Bt(r){r.j.G==0||r.J||ui(r.j,r)}function lt(r){br(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,Rs(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function Ir(r,o){try{var l=r.j;if(l.G!=0&&(l.g==r||Er(l.h,r))){if(!r.K&&Er(l.h,r)&&l.G==3){try{var u=l.Da.g.parse(o)}catch{u=null}if(Array.isArray(u)&&u.length==3){var w=u;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)xn(l),Tn(l);else break e;Ar(l),ce(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ft(P(l.Za,l),6e3));if(1>=Bs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ut(l,11)}else if((r.K||l.g==r)&&xn(l),!ee(o))for(w=l.Da.g.parse(o),o=0;o<w.length;o++){let z=w[o];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const ie=z[3];ie!=null&&(l.la=ie,l.j.info("VER="+l.la));const oe=z[4];oe!=null&&(l.Aa=oe,l.j.info("SVER="+l.Aa));const xt=z[5];xt!=null&&typeof xt=="number"&&0<xt&&(u=1.5*xt,l.L=u,l.j.info("backChannelRequestTimeoutMs_="+u)),u=l;const Ee=r.g;if(Ee){const An=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var E=u.h;E.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Tr(E,E.h),E.h=null))}if(u.D){const Sr=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(u.ya=Sr,J(u.I,u.D,Sr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),u=l;var k=r;if(u.qa=fi(u,u.J?u.ia:null,u.W),k.K){zs(u.h,k);var K=k,re=u.L;re&&(K.I=re),K.B&&(br(K),vn(K)),u.g=k}else li(u);0<l.i.length&&kn(l)}else z[0]!="stop"&&z[0]!="close"||ut(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ut(l,7):xr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}Ut(4)}catch{}}var zl=class{constructor(r,o){this.g=r,this.map=o}};function Fs(r){this.l=r||10,f.PerformanceNavigationTiming?(r=f.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vs(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Bs(r){return r.h?1:r.g?r.g.size:0}function Er(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Tr(r,o){r.g?r.g.add(o):r.h=o}function zs(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Fs.prototype.cancel=function(){if(this.i=$s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function $s(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const l of r.g.values())o=o.concat(l.D);return o}return L(r.i)}function $l(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(p(r)){for(var o=[],l=r.length,u=0;u<l;u++)o.push(r[u]);return o}o=[],l=0;for(u in r)o[l++]=r[u];return o}function Hl(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(p(r)||typeof r=="string"){var o=[];r=r.length;for(var l=0;l<r;l++)o.push(l);return o}o=[],l=0;for(const u in r)o[l++]=u;return o}}}function Hs(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(p(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var l=Hl(r),u=$l(r),w=u.length,E=0;E<w;E++)o.call(void 0,u[E],l&&l[E],r)}var Ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wl(r,o){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var u=r[l].indexOf("="),w=null;if(0<=u){var E=r[l].substring(0,u);w=r[l].substring(u+1)}else E=r[l];o(E,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ct(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof ct){this.h=r.h,yn(this,r.j),this.o=r.o,this.g=r.g,_n(this,r.s),this.l=r.l;var o=r.i,l=new Ht;l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),Gs(this,l),this.m=r.m}else r&&(o=String(r).match(Ws))?(this.h=!1,yn(this,o[1]||"",!0),this.o=zt(o[2]||""),this.g=zt(o[3]||"",!0),_n(this,o[4]),this.l=zt(o[5]||"",!0),Gs(this,o[6]||"",!0),this.m=zt(o[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}ct.prototype.toString=function(){var r=[],o=this.j;o&&r.push($t(o,Ks,!0),":");var l=this.g;return(l||o=="file")&&(r.push("//"),(o=this.o)&&r.push($t(o,Ks,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push($t(l,l.charAt(0)=="/"?ql:Kl,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",$t(l,Xl)),r.join("")};function Me(r){return new ct(r)}function yn(r,o,l){r.j=l?zt(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function _n(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function Gs(r,o,l){o instanceof Ht?(r.i=o,Yl(r.i,r.h)):(l||(o=$t(o,Jl)),r.i=new Ht(o,r.h))}function J(r,o,l){r.i.set(o,l)}function wn(r){return J(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function zt(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function $t(r,o,l){return typeof r=="string"?(r=encodeURI(r).replace(o,Gl),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Gl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Ks=/[#\/\?@]/g,Kl=/[#\?:]/g,ql=/[#\?]/g,Jl=/[#\?@]/g,Xl=/#/g;function Ht(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function Qe(r){r.g||(r.g=new Map,r.h=0,r.i&&Wl(r.i,function(o,l){r.add(decodeURIComponent(o.replace(/\+/g," ")),l)}))}t=Ht.prototype,t.add=function(r,o){Qe(this),this.i=null,r=Tt(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(o),this.h+=1,this};function qs(r,o){Qe(r),o=Tt(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function Js(r,o){return Qe(r),o=Tt(r,o),r.g.has(o)}t.forEach=function(r,o){Qe(this),this.g.forEach(function(l,u){l.forEach(function(w){r.call(o,w,u,this)},this)},this)},t.na=function(){Qe(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),l=[];for(let u=0;u<o.length;u++){const w=r[u];for(let E=0;E<w.length;E++)l.push(o[u])}return l},t.V=function(r){Qe(this);let o=[];if(typeof r=="string")Js(this,r)&&(o=o.concat(this.g.get(Tt(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)o=o.concat(r[l])}return o},t.set=function(r,o){return Qe(this),this.i=null,r=Tt(this,r),Js(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},t.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function Xs(r,o,l){qs(r,o),0<l.length&&(r.i=null,r.g.set(Tt(r,o),L(l)),r.h+=l.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var l=0;l<o.length;l++){var u=o[l];const E=encodeURIComponent(String(u)),k=this.V(u);for(u=0;u<k.length;u++){var w=E;k[u]!==""&&(w+="="+encodeURIComponent(String(k[u]))),r.push(w)}}return this.i=r.join("&")};function Tt(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function Yl(r,o){o&&!r.j&&(Qe(r),r.i=null,r.g.forEach(function(l,u){var w=u.toLowerCase();u!=w&&(qs(this,u),Xs(this,w,l))},r)),r.j=o}function Ql(r,o){const l=new Vt;if(f.Image){const u=new Image;u.onload=$(Ze,l,"TestLoadImage: loaded",!0,o,u),u.onerror=$(Ze,l,"TestLoadImage: error",!1,o,u),u.onabort=$(Ze,l,"TestLoadImage: abort",!1,o,u),u.ontimeout=$(Ze,l,"TestLoadImage: timeout",!1,o,u),f.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=r}else o(!1)}function Zl(r,o){const l=new Vt,u=new AbortController,w=setTimeout(()=>{u.abort(),Ze(l,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:u.signal}).then(E=>{clearTimeout(w),E.ok?Ze(l,"TestPingServer: ok",!0,o):Ze(l,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(w),Ze(l,"TestPingServer: error",!1,o)})}function Ze(r,o,l,u,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),u(l)}catch{}}function ec(){this.g=new Dl}function tc(r,o,l){const u=l||"";try{Hs(r,function(w,E){let k=w;I(w)&&(k=dr(w)),o.push(u+E+"="+encodeURIComponent(k))})}catch(w){throw o.push(u+"type="+encodeURIComponent("_badmap")),w}}function bn(r){this.l=r.Ub||null,this.j=r.eb||!1}N(bn,fr),bn.prototype.g=function(){return new In(this.l,this.j)},bn.prototype.i=function(r){return function(){return r}}({});function In(r,o){se.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(In,se),t=In.prototype,t.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,Gt(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||f).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wt(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ys(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ys(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?Wt(this):Gt(this),this.readyState==3&&Ys(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Wt(this))},t.Qa=function(r){this.g&&(this.response=r,Wt(this))},t.ga=function(){this.g&&Wt(this)};function Wt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Gt(r)}t.setRequestHeader=function(r,o){this.u.append(r,o)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var l=o.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=o.next();return r.join(`\r
`)};function Gt(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Qs(r){let o="";return q(r,function(l,u){o+=u,o+=":",o+=l,o+=`\r
`}),o}function kr(r,o,l){e:{for(u in l){var u=!1;break e}u=!0}u||(l=Qs(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):J(r,o,l))}function Z(r){se.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,se);var nc=/^https?$/i,rc=["POST","PUT"];t=Z.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,o,l,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yr.g(),this.v=this.o?Ss(this.o):Ss(yr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(E){Zs(this,E);return}if(r=l||"",l=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var w in u)l.set(w,u[w]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const E of u.keys())l.set(E,u.get(E));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(l.keys()).find(E=>E.toLowerCase()=="content-type"),w=f.FormData&&r instanceof f.FormData,!(0<=Array.prototype.indexOf.call(rc,o,void 0))||u||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,k]of l)this.g.setRequestHeader(E,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ni(this),this.u=!0,this.g.send(r),this.u=!1}catch(E){Zs(this,E)}};function Zs(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,ei(r),En(r)}function ei(r){r.A||(r.A=!0,le(r,"complete"),le(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,le(this,"complete"),le(this,"abort"),En(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),Z.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ti(this):this.bb())},t.bb=function(){ti(this)};function ti(r){if(r.h&&typeof c<"u"&&(!r.v[1]||Ue(r)!=4||r.Z()!=2)){if(r.u&&Ue(r)==4)ks(r.Ea,0,r);else if(le(r,"readystatechange"),Ue(r)==4){r.h=!1;try{const k=r.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var l;if(!(l=o)){var u;if(u=k===0){var w=String(r.D).match(Ws)[1]||null;!w&&f.self&&f.self.location&&(w=f.self.location.protocol.slice(0,-1)),u=!nc.test(w?w.toLowerCase():"")}l=u}if(l)le(r,"complete"),le(r,"success");else{r.m=6;try{var E=2<Ue(r)?r.g.statusText:""}catch{E=""}r.l=E+" ["+r.Z()+"]",ei(r)}}finally{En(r)}}}}function En(r,o){if(r.g){ni(r);const l=r.g,u=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||le(r,"ready");try{l.onreadystatechange=u}catch{}}}function ni(r){r.I&&(f.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Ue(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),Ol(o)}};function ri(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function sc(r){const o={};r=(r.g&&2<=Ue(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<r.length;u++){if(ee(r[u]))continue;var l=_(r[u]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const E=o[w]||[];o[w]=E,E.push(l)}y(o,function(u){return u.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kt(r,o,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||o}function si(r){this.Aa=0,this.i=[],this.j=new Vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kt("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kt("baseRetryDelayMs",5e3,r),this.cb=Kt("retryDelaySeedMs",1e4,r),this.Wa=Kt("forwardChannelMaxRetries",2,r),this.wa=Kt("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fs(r&&r.concurrentRequestLimit),this.Da=new ec,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=si.prototype,t.la=8,t.G=1,t.connect=function(r,o,l,u){ce(0),this.W=r,this.H=o||{},l&&u!==void 0&&(this.H.OSID=l,this.H.OAID=u),this.F=this.X,this.I=fi(this,null,this.W),kn(this)};function xr(r){if(ii(r),r.G==3){var o=r.U++,l=Me(r.I);if(J(l,"SID",r.K),J(l,"RID",o),J(l,"TYPE","terminate"),qt(r,l),o=new Ye(r,r.j,o),o.L=2,o.v=wn(Me(l)),l=!1,f.navigator&&f.navigator.sendBeacon)try{l=f.navigator.sendBeacon(o.v.toString(),"")}catch{}!l&&f.Image&&(new Image().src=o.v,l=!0),l||(o.g=pi(o.j,null),o.g.ea(o.v)),o.F=Date.now(),vn(o)}di(r)}function Tn(r){r.g&&(Rr(r),r.g.cancel(),r.g=null)}function ii(r){Tn(r),r.u&&(f.clearTimeout(r.u),r.u=null),xn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&f.clearTimeout(r.s),r.s=null)}function kn(r){if(!Vs(r.h)&&!r.s){r.s=!0;var o=r.Ga;ge||Lt(),O||(ge(),O=!0),wt.add(o,r),r.B=0}}function ic(r,o){return Bs(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ft(P(r.Ga,r,o),hi(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const w=new Ye(this,this.j,r);let E=this.o;if(this.S&&(E?(E=h(E),v(E,this.S)):E=this.S),this.m!==null||this.O||(w.H=E,E=null),this.P)e:{for(var o=0,l=0;l<this.i.length;l++){t:{var u=this.i[l];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(o+=u,4096<o){o=l;break e}if(o===4096||l===this.i.length-1){o=l+1;break e}}o=1e3}else o=1e3;o=ai(this,w,o),l=Me(this.I),J(l,"RID",r),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),qt(this,l),E&&(this.O?o="headers="+encodeURIComponent(String(Qs(E)))+"&"+o:this.m&&kr(l,this.m,E)),Tr(this.h,w),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",o),J(l,"SID","null"),w.T=!0,wr(w,l,null)):wr(w,l,o),this.G=2}}else this.G==3&&(r?oi(this,r):this.i.length==0||Vs(this.h)||oi(this))};function oi(r,o){var l;o?l=o.l:l=r.U++;const u=Me(r.I);J(u,"SID",r.K),J(u,"RID",l),J(u,"AID",r.T),qt(r,u),r.m&&r.o&&kr(u,r.m,r.o),l=new Ye(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),o&&(r.i=o.D.concat(r.i)),o=ai(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Tr(r.h,l),wr(l,u,o)}function qt(r,o){r.H&&q(r.H,function(l,u){J(o,u,l)}),r.l&&Hs({},function(l,u){J(o,u,l)})}function ai(r,o,l){l=Math.min(r.i.length,l);var u=r.l?P(r.l.Na,r.l,r):null;e:{var w=r.i;let E=-1;for(;;){const k=["count="+l];E==-1?0<l?(E=w[0].g,k.push("ofs="+E)):E=0:k.push("ofs="+E);let K=!0;for(let re=0;re<l;re++){let z=w[re].g;const ie=w[re].map;if(z-=E,0>z)E=Math.max(0,w[re].g-100),K=!1;else try{tc(ie,k,"req"+z+"_")}catch{u&&u(ie)}}if(K){u=k.join("&");break e}}}return r=r.i.splice(0,l),o.D=r,u}function li(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;ge||Lt(),O||(ge(),O=!0),wt.add(o,r),r.v=0}}function Ar(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ft(P(r.Fa,r),hi(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,ci(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ft(P(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),Tn(this),ci(this))};function Rr(r){r.A!=null&&(f.clearTimeout(r.A),r.A=null)}function ci(r){r.g=new Ye(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Me(r.qa);J(o,"RID","rpc"),J(o,"SID",r.K),J(o,"AID",r.T),J(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&J(o,"TO",r.ja),J(o,"TYPE","xmlhttp"),qt(r,o),r.m&&r.o&&kr(o,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=wn(Me(o)),l.m=null,l.P=!0,js(l,r)}t.Za=function(){this.C!=null&&(this.C=null,Tn(this),Ar(this),ce(19))};function xn(r){r.C!=null&&(f.clearTimeout(r.C),r.C=null)}function ui(r,o){var l=null;if(r.g==o){xn(r),Rr(r),r.g=null;var u=2}else if(Er(r.h,o))l=o.D,zs(r.h,o),u=1;else return;if(r.G!=0){if(o.o)if(u==1){l=o.m?o.m.length:0,o=Date.now()-o.F;var w=r.B;u=gr(),le(u,new Os(u,l)),kn(r)}else li(r);else if(w=o.s,w==3||w==0&&0<o.X||!(u==1&&ic(r,o)||u==2&&Ar(r)))switch(l&&0<l.length&&(o=r.h,o.i=o.i.concat(l)),w){case 1:ut(r,5);break;case 4:ut(r,10);break;case 3:ut(r,6);break;default:ut(r,2)}}}function hi(r,o){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*o}function ut(r,o){if(r.j.info("Error code "+o),o==2){var l=P(r.fb,r),u=r.Xa;const w=!u;u=new ct(u||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||yn(u,"https"),wn(u),w?Ql(u.toString(),l):Zl(u.toString(),l)}else ce(2);r.G=0,r.l&&r.l.sa(o),di(r),ii(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function di(r){if(r.G=0,r.ka=[],r.l){const o=$s(r.h);(o.length!=0||r.i.length!=0)&&(D(r.ka,o),D(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function fi(r,o,l){var u=l instanceof ct?Me(l):new ct(l);if(u.g!="")o&&(u.g=o+"."+u.g),_n(u,u.s);else{var w=f.location;u=w.protocol,o=o?o+"."+w.hostname:w.hostname,w=+w.port;var E=new ct(null);u&&yn(E,u),o&&(E.g=o),w&&_n(E,w),l&&(E.l=l),u=E}return l=r.D,o=r.ya,l&&o&&J(u,l,o),J(u,"VER",r.la),qt(r,u),u}function pi(r,o,l){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new Z(new bn({eb:l})):new Z(r.pa),o.Ha(r.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mi(){}t=mi.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _e(r,o){se.call(this),this.g=new si(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!ee(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!ee(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new kt(this)}N(_e,se),_e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_e.prototype.close=function(){xr(this.g)},_e.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=dr(r),r=l);o.i.push(new zl(o.Ya++,r)),o.G==3&&kn(o)},_e.prototype.N=function(){this.g.l=null,delete this.j,xr(this.g),delete this.g,_e.aa.N.call(this)};function gi(r){pr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const l in o){r=l;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}N(gi,pr);function vi(){mr.call(this),this.status=1}N(vi,mr);function kt(r){this.g=r}N(kt,mi),kt.prototype.ua=function(){le(this.g,"a")},kt.prototype.ta=function(r){le(this.g,new gi(r))},kt.prototype.sa=function(r){le(this.g,new vi)},kt.prototype.ra=function(){le(this.g,"b")},_e.prototype.send=_e.prototype.o,_e.prototype.open=_e.prototype.m,_e.prototype.close=_e.prototype.close,vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,Vl.COMPLETE="complete",Ll.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",se.prototype.listen=se.prototype.K,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const no="@firebase/firestore",ro="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new ss("@firebase/firestore");function ke(t,...e){if(Nt.logLevel<=W.DEBUG){const n=e.map(gs);Nt.debug(`Firestore (${hn}): ${t}`,...n)}}function il(t,...e){if(Nt.logLevel<=W.ERROR){const n=e.map(gs);Nt.error(`Firestore (${hn}): ${t}`,...n)}}function xp(t,...e){if(Nt.logLevel<=W.WARN){const n=e.map(gs);Nt.warn(`Firestore (${hn}): ${t}`,...n)}}function gs(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,al(t,s,n)}function al(t,e,n){let s=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw il(s),new Error(s)}function en(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||al(e,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class pe extends Oe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ue.UNAUTHENTICATED))}shutdown(){}}class Rp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sp{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){en(this.o===void 0,42304);let s=this.i;const i=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let a=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await i(this.currentUser)})},f=p=>{ke("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ke("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new tn)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ke("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(en(typeof s.accessToken=="string",31837,{l:s}),new ll(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return en(e===null||typeof e=="string",2055,{h:e}),new ue(e)}}class Pp{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cp{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Pp(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class so{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Np{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,he(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){en(this.o===void 0,3512);const s=a=>{a.error!=null&&ke("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,ke("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>s(a))};const i=a=>{ke("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ke("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new so(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(en(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new so(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Op(t){return t.name==="IndexedDbTransactionError"}const Zr="(default)";class Xn{constructor(e,n){this.projectId=e,this.database=n||Zr}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io,V;(V=io||(io={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new sl([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=1048576;function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,s=1e3,i=1.5,a=6e4){this.bi=e,this.timerId=n,this.u_=s,this.c_=i,this.l_=a,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),i=Math.max(0,n-s);i>0&&ke("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s,i,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=a,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,a){const c=Date.now()+s,f=new vs(e,n,c,i,a);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var oo,ao;(ao=oo||(oo={})).ya="default",ao.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map;function Up(t,e,n,s){if(e===!0&&s===!0)throw new pe(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ol(12329,{type:typeof t})}function Vp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new pe(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fp(t);throw new pe(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="firestore.googleapis.com",co=!0;class uo{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cl,this.ssl=co}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:co;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lp)throw new pe(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Up("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mp((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Ap;switch(s.type){case"firstParty":return new Cp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pe(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=lo.get(n);s&&(ke("ComponentProvider","Removing Datastore"),lo.delete(n),s.terminate())}(this),Promise.resolve()}}function Bp(t,e,n,s={}){var i;const a=(t=Vp(t,ul))._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),f=`${e}:${n}`;a.host!==cl&&a.host!==f&&xp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},a),{host:f,ssl:!1,emulatorOptions:s});if(!pt(p,c)&&(t._setSettings(p),s.mockUserToken)){let I,T;if(typeof s.mockUserToken=="string")I=s.mockUserToken,T=ue.MOCK_USER;else{I=ya(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new pe(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ue(A)}t._authCredentials=new Rp(new ll(I,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="AsyncQueue";class fo{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new jp(this,"async_queue_retry"),this.ju=()=>{const s=Br();s&&ke(ho,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=e;const n=Br();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new tn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Op(e))throw e;ke(ho,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(s=>{throw this.Ku=s,this.Wu=!1,il("INTERNAL UNHANDLED ERROR: ",po(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=n,n}enqueueAfterDelay(e,n,s){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const i=vs.createAndSchedule(this,e,n,s,a=>this.Xu(a));return this.Uu.push(i),i}Ju(){this.Ku&&ol(47125,{ec:po(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function po(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class zp extends ul{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new fo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fo(e),this._firestoreClient=void 0,await e}}}function $p(t,e){const n=typeof t=="object"?t:os(),s=typeof t=="string"?t:Zr,i=tr(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const a=ma("firestore");a&&Bp(i,...a)}return i}(function(e,n=!0){(function(i){hn=i})(yt),mt(new at("firestore",(s,{instanceIdentifier:i,options:a})=>{const c=s.getProvider("app").getImmediate(),f=new zp(new Sp(s.getProvider("auth-internal")),new Np(c,s.getProvider("app-check-internal")),function(I,T){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new pe(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(I.options.projectId,T)}(c,i),c);return a=Object.assign({useFetchStreams:n},a),f._setSettings(a),f},"PUBLIC").setMultipleInstances(!0)),Se(no,ro,e),Se(no,ro,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="firebasestorage.googleapis.com",Hp="storageBucket",Wp=2*60*1e3,Gp=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Oe{constructor(e,n,s=0){super(zr(e),`Firebase Storage: ${n} (${zr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function zr(t){return"storage/"+t}function Kp(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ne.UNKNOWN,t)}function qp(){return new Le(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jp(){return new Le(Ne.CANCELED,"User canceled the upload/download.")}function Xp(t){return new Le(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function Yp(t){return new Le(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mo(t){return new Le(Ne.INVALID_ARGUMENT,t)}function dl(){return new Le(Ne.APP_DELETED,"The Firebase app was deleted.")}function Qp(t){return new Le(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=xe.makeFromUrl(e,n)}catch{return new xe(e,"")}if(s.path==="")return s;throw Yp(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function a(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+i+c,"i"),p={bucket:1,path:3};function I(H){H.path_=decodeURIComponent(H.path)}const T="v[A-Za-z0-9_]+",A=n.replace(/[.]/g,"\\."),P="(/([^?#]*).*)?$",$=new RegExp(`^https?://${A}/${T}/b/${i}/o${P}`,"i"),N={bucket:1,path:3},L=n===hl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",Q=new RegExp(`^https?://${L}/${i}/${D}`,"i"),G=[{regex:f,indices:p,postModify:a},{regex:$,indices:N,postModify:I},{regex:Q,indices:{bucket:1,path:2},postModify:I}];for(let H=0;H<G.length;H++){const te=G[H],q=te.regex.exec(e);if(q){const y=q[te.indices.bucket];let h=q[te.indices.path];h||(h=""),s=new xe(y,h),te.postModify(s);break}}if(s==null)throw Xp(e);return s}}class Zp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e,n){let s=1,i=null,a=null,c=!1,f=0;function p(){return f===2}let I=!1;function T(...D){I||(I=!0,e.apply(null,D))}function A(D){i=setTimeout(()=>{i=null,t($,p())},D)}function P(){a&&clearTimeout(a)}function $(D,...Q){if(I){P();return}if(D){P(),T.call(null,D,...Q);return}if(p()||c){P(),T.call(null,D,...Q);return}s<64&&(s*=2);let G;f===1?(f=2,G=0):G=(s+Math.random())*1e3,A(G)}let N=!1;function L(D){N||(N=!0,P(),!I&&(i!==null?(D||(f=2),clearTimeout(i),A(0)):D||(f=1)))}return A(0),a=setTimeout(()=>{c=!0,L(!0)},n),L}function tm(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){return t!==void 0}function go(t,e,n,s){if(s<e)throw mo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw mo(`Invalid value for '${t}'. Expected ${n} or less.`)}function rm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Yn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yn||(Yn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||i||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s,i,a,c,f,p,I,T,A,P=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=p,this.timeout_=I,this.progressCallback_=T,this.connectionFactory_=A,this.retry=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,N)=>{this.resolve_=$,this.reject_=N,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new On(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=f=>{const p=f.loaded,I=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,I)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const f=a.getErrorCode()===Yn.NO_ERROR,p=a.getStatus();if(!f||sm(p,this.additionalRetryCodes_)&&this.retry){const T=a.getErrorCode()===Yn.ABORT;s(!1,new On(!1,null,T));return}const I=this.successCodes_.indexOf(p)!==-1;s(!0,new On(I,a))})},n=(s,i)=>{const a=this.resolve_,c=this.reject_,f=i.connection;if(i.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());nm(p)?a(p):a()}catch(p){c(p)}else if(f!==null){const p=Kp();p.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,p)):c(p)}else if(i.canceled){const p=this.appDelete_?dl():Jp();c(p)}else{const p=qp();c(p)}};this.canceled_?n(!1,new On(!1,null,!0)):this.backoffId_=em(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class On{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function om(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function am(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lm(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cm(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function um(t,e,n,s,i,a,c=!0){const f=rm(t.urlParams),p=t.url+f,I=Object.assign({},t.headers);return lm(I,e),om(I,n),am(I,a),cm(I,s),new im(p,t.method,I,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this._service=e,n instanceof xe?this._location=n:this._location=xe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qn(e,n)}get root(){const e=new xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dm(this._location.path)}get storage(){return this._service}get parent(){const e=hm(this._location.path);if(e===null)return null;const n=new xe(this._location.bucket,e);return new Qn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qp(e)}}function vo(t,e){const n=e==null?void 0:e[Hp];return n==null?null:xe.makeFromBucketSpec(n,t)}function fm(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:ya(i,t.app.options.projectId))}class pm{constructor(e,n,s,i,a){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=hl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wp,this._maxUploadRetryTime=Gp,this._requests=new Set,i!=null?this._bucket=xe.makeFromBucketSpec(i,this._host):this._bucket=vo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xe.makeFromBucketSpec(this._url,e):this._bucket=vo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){go("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){go("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(he(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qn(this,e)}_makeRequest(e,n,s,i,a=!0){if(this._deleted)return new Zp(dl());{const c=um(e,this._appId,s,i,n,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const yo="@firebase/storage",_o="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="storage";function mm(t=os(),e){t=be(t);const s=tr(t,fl).getImmediate({identifier:e}),i=ma("storage");return i&&gm(s,...i),s}function gm(t,e,n,s={}){fm(t,e,n,s)}function vm(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pm(n,s,i,e,yt)}function ym(){mt(new at(fl,vm,"PUBLIC").setMultipleInstances(!0)),Se(yo,_o,""),Se(yo,_o,"esm2017")}ym();console.log("Starting Firebase initialization...");const pl={apiKey:"AIzaSyDygjMpaMXBEBcRnVVtOxW41nD7DA-cXJY",authDomain:"workwise-sa-project.firebaseapp.com",projectId:"workwise-sa-project",storageBucket:"workwise-sa-project.firebasestorage.app",messagingSenderId:"716919248302",appId:"1:716919248302:web:582684fa2eb06133aca43f"};console.log("Firebase config:",{...pl,apiKey:"[REDACTED]"});const ys=ba(pl),qe=Tp(ys),_m=new Be;console.log("Firebase initialized successfully");const wm={url:`${window.location.origin}/auth/email-signin-complete`,handleCodeInApp:!0};console.log("Email link authentication URL:",`${window.location.origin}/auth/email-signin-complete`);console.log("Current origin:",window.location.origin);const Pg=async(t,e,n)=>{try{console.log(`Attempting to sign up user with email: ${t}`);const s=await nf(qe,t,e);return console.log("User created successfully:",s.user.uid),s.user&&(console.log("Updating user profile with display name:",n),await cf(s.user,{displayName:n}),console.log("User profile updated successfully")),s.user}catch(s){throw console.error("Error signing up:",s.code,s.message),s}},Cg=async(t,e)=>{try{console.log(`Attempting to sign in user with email: ${t}`);const n=await rf(qe,t,e);return console.log("User signed in successfully:",n.user.uid),n.user}catch(n){throw console.error("Error signing in:",n.code,n.message),n}},Ng=async()=>{try{return(await Of(qe,_m)).user}catch(t){throw console.error("Error signing in with Google:",t),t}},bm=async()=>{try{await ff(qe)}catch(t){throw console.error("Error signing out:",t),t}},Og=()=>qe.currentUser,Im=t=>df(qe,t),Dg=async t=>{try{return await sf(qe,t,wm),window.localStorage.setItem("emailForSignIn",t),!0}catch(e){throw console.error("Error sending sign-in link:",e),e}},Lg=async(t,e)=>{try{const n=await af(qe,t,e);return window.localStorage.removeItem("emailForSignIn"),n.user}catch(n){throw console.error("Error completing sign-in with email link:",n),n}},jg=t=>of(qe,t),Mg=()=>window.localStorage.getItem("emailForSignIn");$p(ys);mm(ys);const ml=x.createContext(null),Em=({children:t})=>{const[e,n]=x.useState(null),[s,i]=x.useState(!0);x.useEffect(()=>Im(f=>{n(f),i(!1)}),[]);const a=x.useMemo(()=>({currentUser:e,user:e,isLoading:s,isAuthenticated:!!e}),[e,s]);return d.jsx(ml.Provider,{value:a,children:!s&&t})},gl=()=>{const t=x.useContext(ml);if(t===null)throw new Error("useAuth must be used within an AuthProvider");return t},Tm=ts("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),vl=x.forwardRef(({className:t,variant:e,...n},s)=>d.jsx("div",{ref:s,role:"alert",className:Y(Tm({variant:e}),t),...n}));vl.displayName="Alert";const yl=x.forwardRef(({className:t,...e},n)=>d.jsx("h5",{ref:n,className:Y("mb-1 font-medium leading-none tracking-tight",t),...e}));yl.displayName="AlertTitle";const _l=x.forwardRef(({className:t,...e},n)=>d.jsx("div",{ref:n,className:Y("text-sm [&_p]:leading-relaxed",t),...e}));_l.displayName="AlertDescription";class km extends x.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("ErrorBoundary caught an error:",e,n)}render(){var e;return this.state.hasError?this.props.fallback?this.props.fallback:d.jsxs(vl,{variant:"destructive",className:"my-4",children:[d.jsx(yc,{className:"h-4 w-4"}),d.jsx(yl,{children:"Something went wrong"}),d.jsx(_l,{children:((e=this.state.error)==null?void 0:e.message)||"An unexpected error occurred"})]}):this.props.children}}const wl=lc,bl=cc,Il=uc,xm=x.forwardRef(({className:t,inset:e,children:n,...s},i)=>d.jsxs(So,{ref:i,className:Y("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",e&&"pl-8",t),...s,children:[n,d.jsx(_c,{className:"ml-auto h-4 w-4"})]}));xm.displayName=So.displayName;const Am=x.forwardRef(({className:t,...e},n)=>d.jsx(Po,{ref:n,className:Y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...e}));Am.displayName=Po.displayName;const _s=x.forwardRef(({className:t,sideOffset:e=4,...n},s)=>d.jsx(ac,{children:d.jsx(Co,{ref:s,sideOffset:e,className:Y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));_s.displayName=Co.displayName;const Ve=x.forwardRef(({className:t,inset:e,...n},s)=>d.jsx(No,{ref:s,className:Y("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e&&"pl-8",t),...n}));Ve.displayName=No.displayName;const Rm=x.forwardRef(({className:t,children:e,checked:n,...s},i)=>d.jsxs(Oo,{ref:i,className:Y("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...s,children:[d.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d.jsx(Do,{children:d.jsx(wc,{className:"h-4 w-4"})})}),e]}));Rm.displayName=Oo.displayName;const Sm=x.forwardRef(({className:t,children:e,...n},s)=>d.jsxs(Lo,{ref:s,className:Y("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[d.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d.jsx(Do,{children:d.jsx(bc,{className:"h-2 w-2 fill-current"})})}),e]}));Sm.displayName=Lo.displayName;const ws=x.forwardRef(({className:t,inset:e,...n},s)=>d.jsx(jo,{ref:s,className:Y("px-2 py-1.5 text-sm font-semibold",e&&"pl-8",t),...n}));ws.displayName=jo.displayName;const Zn=x.forwardRef(({className:t,...e},n)=>d.jsx(Mo,{ref:n,className:Y("-mx-1 my-1 h-px bg-muted",t),...e}));Zn.displayName=Mo.displayName;const Pm=ts("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),er=x.forwardRef(({className:t,variant:e,size:n,asChild:s=!1,...i},a)=>{const c=s?hc:"button";return d.jsx(c,{className:Y(Pm({variant:e,size:n,className:t})),ref:a,...i})});er.displayName="Button";const El=x.forwardRef(({className:t,...e},n)=>d.jsx(Uo,{ref:n,className:Y("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...e}));El.displayName=Uo.displayName;const Tl=x.forwardRef(({className:t,...e},n)=>d.jsx(Fo,{ref:n,className:Y("aspect-square h-full w-full",t),...e}));Tl.displayName=Fo.displayName;const kl=x.forwardRef(({className:t,...e},n)=>d.jsx(Vo,{ref:n,className:Y("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...e}));kl.displayName=Vo.displayName;function Cm(){const{currentUser:t,isAuthenticated:e}=gl(),{toast:n}=Jo(),[,s]=$o(),i=x.useMemo(()=>{var f;return t?t.displayName?t.displayName.split(" ").map(p=>p[0]).join("").toUpperCase():((f=t.email)==null?void 0:f.substring(0,2).toUpperCase())||"U":"U"},[t]),a=x.useMemo(()=>{if(!(t!=null&&t.email))return!1;const f=["workwisesa.co.za","admin.workwisesa.co.za","admin.com"],p=["phakikrwele@gmail.com"];return f.some(I=>t.email.endsWith(I))||p.includes(t.email)},[t]),c=async()=>{try{await bm(),n({title:"Logged out",description:"You have been successfully logged out.",duration:3e3}),s("/")}catch{n({variant:"destructive",title:"Error",description:"Failed to log out. Please try again.",duration:3e3})}};return{isAuthenticated:e,userDisplayName:(t==null?void 0:t.displayName)||"User",userEmail:t==null?void 0:t.email,userPhotoURL:t==null?void 0:t.photoURL,userInitials:i,isAdmin:a,handleLogout:c}}const Nm=({className:t})=>{const{isAuthenticated:e,userDisplayName:n,userEmail:s,userPhotoURL:i,userInitials:a,isAdmin:c,handleLogout:f}=Cm();return e?d.jsx("div",{className:t,children:d.jsxs(wl,{children:[d.jsx(bl,{asChild:!0,children:d.jsx(er,{variant:"ghost",className:"p-0 h-8 w-8 rounded-full focus:ring-2 focus:ring-primary focus:ring-offset-2","aria-label":"User menu",children:d.jsxs(El,{children:[d.jsx(Tl,{src:i,alt:n,loading:"lazy"}),d.jsx(kl,{className:"bg-primary text-white",children:a})]})})}),d.jsxs(_s,{align:"end",className:"w-56",children:[d.jsx(ws,{children:d.jsxs("div",{className:"flex flex-col space-y-1",children:[d.jsx("p",{className:"text-sm font-medium",children:n}),d.jsx("p",{className:"text-xs text-muted-foreground truncate",children:s})]})}),d.jsx(Zn,{}),d.jsxs(Il,{children:[d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/profile",className:"cursor-pointer flex items-center",children:[d.jsx(Ic,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Profile"})]})}),d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/applications",className:"cursor-pointer flex items-center",children:[d.jsx(Ec,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Applications"})]})}),d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/dashboard",className:"cursor-pointer flex items-center",children:[d.jsx(Tc,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Job Market Dashboard"})]})}),d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/cv-builder",className:"cursor-pointer flex items-center",children:[d.jsx(kc,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"CV Builder"})]})}),d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/settings",className:"cursor-pointer flex items-center",children:[d.jsx(Wo,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Settings"})]})}),c&&d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:"/marketing-rules",className:"cursor-pointer flex items-center",children:[d.jsx(Go,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Marketing Rules"})]})})]}),d.jsx(Zn,{}),d.jsxs(Ve,{onClick:f,className:"cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50",children:[d.jsx(xc,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:"Log out"})]})]})]})}):d.jsxs("div",{className:`flex items-center space-x-3 ${t||""}`,children:[d.jsx(U,{href:"/login",className:"text-primary hover:text-primary-dark font-medium transition-colors",children:"Login"}),d.jsx(er,{asChild:!0,className:"bg-primary text-white hover:bg-blue-500 transition-colors",children:d.jsx(U,{href:"/register",children:"Register"})})]})},wo=x.memo(Nm);function Om(){const{currentUser:t}=gl(),e=x.useMemo(()=>{if(!(t!=null&&t.email))return!1;const s=["workwisesa.co.za","admin.workwisesa.co.za","admin.com"],i=["phakikrwele@gmail.com"];return s.some(a=>{var c;return(c=t.email)==null?void 0:c.endsWith(a)})||i.includes(t.email)},[t]);return{isAdmin:e,hasPermission:s=>!!e}}const Dm=({variant:t="outline",className:e="",showIcon:n=!0,buttonText:s="Admin",customMenuItems:i})=>{const{isAdmin:a,hasPermission:c}=Om();if(!a)return null;const p=i||[{href:"/admin",icon:d.jsx(Rc,{className:"mr-2 h-4 w-4"}),label:"Dashboard",permission:"dashboard:view"},{href:"/marketing-rules",icon:d.jsx(Sc,{className:"mr-2 h-4 w-4"}),label:"Marketing Rules",permission:"marketing:view"},{href:"/admin/analytics",icon:d.jsx(Go,{className:"mr-2 h-4 w-4"}),label:"Analytics",permission:"analytics:view"},{href:"/admin/users",icon:d.jsx(Pc,{className:"mr-2 h-4 w-4"}),label:"User Management",permission:"users:view"},{href:"/admin/settings",icon:d.jsx(Wo,{className:"mr-2 h-4 w-4"}),label:"Admin Settings",permission:"settings:view"}].filter(I=>!I.permission||c(I.permission));return d.jsxs(wl,{children:[d.jsx(bl,{asChild:!0,children:d.jsxs(er,{variant:t,className:`flex items-center gap-2 ${e}`,"aria-label":"Admin menu",children:[n&&d.jsx(Ac,{className:"h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:s})]})}),d.jsxs(_s,{align:"end",className:"w-56",sideOffset:4,children:[d.jsx(ws,{children:"Admin Dashboard"}),d.jsx(Zn,{}),d.jsx(Il,{children:p.map((I,T)=>d.jsx(Ve,{asChild:!0,children:d.jsxs(U,{href:I.href,className:"cursor-pointer flex items-center",onClick:A=>A.stopPropagation(),children:[I.icon,d.jsx("span",{children:I.label})]})},T))})]})]})},bo=x.memo(Dm),Lm=()=>{const[t,e]=x.useState(!1),[n]=$o(),s=()=>{e(!t)};return d.jsxs("header",{className:"sticky top-0 bg-white border-b border-border z-50 shadow-sm",children:[d.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[d.jsx("div",{className:"flex items-center",children:d.jsx(U,{href:"/",className:"flex items-center",children:d.jsx("img",{src:"/images/logo.png",alt:"WorkWise SA Logo",className:"h-24 sm:h-28 mr-2 transition-all duration-200 hover:scale-105"})})}),d.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[d.jsxs("ul",{className:"flex space-x-6",children:[d.jsx("li",{children:d.jsx(U,{href:"/jobs",className:`text-dark hover:text-primary font-medium ${n==="/jobs"?"text-primary":""}`,children:"Find Jobs"})}),d.jsx("li",{children:d.jsx(U,{href:"/companies",className:`text-dark hover:text-primary font-medium ${n==="/companies"?"text-primary":""}`,children:"Companies"})}),d.jsx("li",{children:d.jsx(U,{href:"/cv-builder",className:`text-dark hover:text-primary font-medium ${n==="/cv-builder"?"text-primary":""}`,children:"CV Builder"})}),d.jsx("li",{children:d.jsx(U,{href:"/wise-up",className:`text-dark hover:text-primary font-medium ${n==="/wise-up"?"text-primary":""}`,children:"Wise-Up"})}),d.jsx("li",{children:d.jsx(U,{href:"/blog-wise",className:`text-dark hover:text-primary font-medium ${n==="/blog-wise"?"text-primary":""}`,children:"Blog Wise"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources",className:`text-dark hover:text-primary font-medium ${n==="/resources"?"text-primary":""}`,children:"Resources"})}),d.jsx("li",{children:d.jsx(U,{href:"/contact",className:`text-dark hover:text-primary font-medium ${n==="/contact"?"text-primary":""}`,children:"Contact"})})]}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx(bo,{variant:"outline"}),d.jsx(wo,{})]})]}),d.jsx("button",{className:"md:hidden text-dark focus:outline-none",onClick:s,"aria-label":t?"Close menu":"Open menu",children:d.jsx("i",{className:`fas ${t?"fa-times":"fa-bars"} text-xl`})})]}),t&&d.jsx("div",{className:"md:hidden bg-white border-t border-gray-100 py-4 px-6",children:d.jsxs("ul",{className:"space-y-4",children:[d.jsx("li",{children:d.jsx(U,{href:"/jobs",className:`block text-dark hover:text-primary font-medium ${n==="/jobs"?"text-primary":""}`,onClick:()=>e(!1),children:"Find Jobs"})}),d.jsx("li",{children:d.jsx(U,{href:"/companies",className:`block text-dark hover:text-primary font-medium ${n==="/companies"?"text-primary":""}`,onClick:()=>e(!1),children:"Companies"})}),d.jsx("li",{children:d.jsx(U,{href:"/cv-builder",className:`block text-dark hover:text-primary font-medium ${n==="/cv-builder"?"text-primary":""}`,onClick:()=>e(!1),children:"CV Builder"})}),d.jsx("li",{children:d.jsx(U,{href:"/wise-up",className:`block text-dark hover:text-primary font-medium ${n==="/wise-up"?"text-primary":""}`,onClick:()=>e(!1),children:"Wise-Up"})}),d.jsx("li",{children:d.jsx(U,{href:"/blog-wise",className:`block text-dark hover:text-primary font-medium ${n==="/blog-wise"?"text-primary":""}`,onClick:()=>e(!1),children:"Blog Wise"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources",className:`block text-dark hover:text-primary font-medium ${n==="/resources"?"text-primary":""}`,onClick:()=>e(!1),children:"Resources"})}),d.jsx("li",{children:d.jsx(U,{href:"/contact",className:`block text-dark hover:text-primary font-medium ${n==="/contact"?"text-primary":""}`,onClick:()=>e(!1),children:"Contact"})}),d.jsx("li",{className:"pt-3 border-t border-gray-100",children:d.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[d.jsx(bo,{variant:"outline"}),d.jsx(wo,{})]})})]})})]})},jm=()=>(console.log("Footer component rendered"),d.jsx("footer",{className:"bg-white border-t border-border pt-12 pb-6",children:d.jsxs("div",{className:"container mx-auto px-4",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[d.jsxs("div",{children:[d.jsx("div",{className:"h-10 mb-4 flex items-center",children:d.jsxs("div",{className:"flex items-center",children:[d.jsx("img",{src:"/images/hero-logo.png",alt:"WorkWise SA Logo",className:"h-8 w-auto mr-2"}),d.jsxs("span",{className:"text-xl font-bold text-primary",children:["WORK",d.jsx("span",{className:"text-accent",children:"WISE.SA"})]})]})}),d.jsx("p",{className:"text-primary mb-4",children:"The Low Level Jobs Directory is an online platform specifically designed to connect young South Africans with entry-level employment opportunities that require minimal experience or qualifications."}),d.jsxs("div",{className:"flex space-x-4",children:["              ",d.jsx("a",{href:"https://www.facebook.com/profile.php?id=61575790149796",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"Facebook",children:d.jsx("i",{className:"fab fa-facebook-f"})}),"              ",d.jsx("a",{href:"https://x.com/WorkWise_SA",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"X (formerly Twitter)",children:d.jsx("i",{className:"fab fa-x-twitter"})}),"              ",d.jsx("a",{href:"https://www.linkedin.com/in/work-wise-sa-36a133370/",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"LinkedIn",children:d.jsx("i",{className:"fab fa-linkedin-in"})}),d.jsx("a",{href:"https://www.instagram.com/work.wise_sa/",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"Instagram",children:d.jsx("i",{className:"fab fa-instagram"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-lg mb-4",children:"For Job Seekers"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx(U,{href:"/jobs",className:"text-primary hover:text-accent",children:"Browse Jobs"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources",className:"text-primary hover:text-accent",children:"Career Resources"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources/cv-templates",className:"text-primary hover:text-accent",children:"CV Templates"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources/interview-tips",className:"text-primary hover:text-accent",children:"Interview Tips"})}),d.jsx("li",{children:d.jsx(U,{href:"/resources/salary-guide",className:"text-primary hover:text-accent",children:"Salary Guide"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-lg mb-4",children:"For Employers"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx(U,{href:"/employers/post-job",className:"text-primary hover:text-accent",children:"Post a Job"})}),d.jsx("li",{children:d.jsx(U,{href:"/employers/browse-candidates",className:"text-primary hover:text-accent",children:"Browse Candidates"})}),d.jsx("li",{children:d.jsx(U,{href:"/employers/solutions",className:"text-primary hover:text-accent",children:"Recruitment Solutions"})}),d.jsx("li",{children:d.jsx(U,{href:"/employers/pricing",className:"text-primary hover:text-accent",children:"Pricing"})}),d.jsx("li",{children:d.jsx(U,{href:"/employers/success-stories",className:"text-primary hover:text-accent",children:"Success Stories"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-lg mb-4",children:"About Us"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx(U,{href:"/about",className:"text-primary hover:text-accent",children:"About Us"})}),d.jsx("li",{children:d.jsx(U,{href:"/contact",className:"text-primary hover:text-accent",children:"Contact"})}),d.jsx("li",{children:d.jsx(U,{href:"/privacy-policy",className:"text-primary hover:text-accent",children:"Privacy Policy"})}),d.jsx("li",{children:d.jsx(U,{href:"/terms",className:"text-primary hover:text-accent",children:"Terms of Service"})}),d.jsx("li",{children:d.jsx(U,{href:"/faq",className:"text-primary hover:text-accent",children:"FAQ"})})]})]})]}),d.jsx("div",{className:"pt-8 border-t border-border text-center text-sm text-foreground",children:d.jsxs("p",{children:["© ",new Date().getFullYear()," WorkWise SA. All rights reserved."]})})]})})),xl=x.memo(({message:t="Loading...",className:e="",size:n="md",fullPage:s=!0,customSpinner:i,backdropBlur:a="sm",zIndex:c=50})=>{const f={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[n],p={none:"",sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg"}[a],I=s?`fixed inset-0 flex flex-col items-center justify-center bg-background/80 ${p} z-${c}`:"flex flex-col items-center justify-center py-8";return d.jsx("div",{className:Y(I,e),role:"alert","aria-live":"assertive","aria-busy":"true","data-testid":"loading-screen",children:d.jsxs("div",{className:"flex flex-col items-center justify-center space-y-4",children:[i||d.jsx(Cc,{className:Y(f,"text-primary animate-spin"),"aria-hidden":"true"}),t&&d.jsx("p",{className:"text-foreground/80 animate-pulse text-center font-medium",children:t})]})})});xl.displayName="LoadingScreen";const Mm=x.lazy(()=>F(()=>import("./not-found-CfgAXQNu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Um=x.lazy(()=>F(()=>import("./Home-DFyv4wxD.js"),__vite__mapDeps([8,1,2,9,6,10,4,11,5,3,12,13,14,7]))),Fm=x.lazy(()=>F(()=>import("./Jobs-BMwTr8ce.js"),__vite__mapDeps([15,1,2,5,6,3,10,4,13,14,12,16,7]))),Vm=x.lazy(()=>F(()=>import("./Resources-CALqGimV.js"),__vite__mapDeps([17,1,2,18,4,3,10,19,5,6,7]))),Bm=x.lazy(()=>F(()=>import("./WiseUpPage-CvqQO_Df.js"),__vite__mapDeps([20,1,2,4,5,6,7]))),zm=x.lazy(()=>F(()=>import("./Login-DObW3Fvl.js"),__vite__mapDeps([21,1,2,22,7,6,23,24,19,3,10,25,4,5]))),$m=x.lazy(()=>F(()=>import("./Register-CH07AiwK.js"),__vite__mapDeps([26,1,2,22,7,6,23,24,19,3,10,25,4,5]))),Hm=x.lazy(()=>F(()=>import("./CVBuilder-D9kg-IEm.js"),__vite__mapDeps([27,1,2,24,23,19,10,28,29,4,3,30,5,6,7]))),Io=x.lazy(()=>F(()=>import("./UserProfile-5d2H5fy6.js"),__vite__mapDeps([31,1,2,22,7,6,3,32,30,33,14,4,5]))),Wm=x.lazy(()=>F(()=>import("./ProfileSetup-DqoEi86p.js"),__vite__mapDeps([34,1,2,22,7,6,23,24,19,3,32,10,28,29,4,25,14,35,36,16,5]))),Gm=x.lazy(()=>F(()=>import("./EmailLinkLogin-DpycjN4u.js"),__vite__mapDeps([37,1,2,22,7,6,23,24,19,3,10,4,5]))),Km=x.lazy(()=>F(()=>import("./EmailSignInComplete-Bhd8Wej1.js"),__vite__mapDeps([38,1,2,22,7,6,3,10,4,5]))),qm=x.lazy(()=>F(()=>import("./MarketingRulesPage-C6Z8yl6a.js"),__vite__mapDeps([39,1,2,5,24,14,40,41,3,4,23,19,10,28,29,42,32,12,7,6]))),Jm=x.lazy(()=>F(()=>import("./AdminDashboard-qW1G9qHi.js"),__vite__mapDeps([43,1,2,6,3,4,5,7]))),Xm=x.lazy(()=>F(()=>import("./Dashboard-CjodtFcV.js").then(t=>t.D),__vite__mapDeps([44,5,2,1,6,36,16,3,29,4,12,32]))),Ym=x.lazy(()=>F(()=>import("./ui-test-BolLs7CA.js"),__vite__mapDeps([45,1,2,3,14,5,6,7,4]))),Qm=x.lazy(()=>F(()=>import("./TestPage-CtXUfW4v.js"),__vite__mapDeps([46,1,2,5,6,7,4]))),Zm=x.lazy(()=>F(()=>import("./FooterTest-BURB72-f.js"),__vite__mapDeps([47,1,2,6]))),eg=x.lazy(()=>F(()=>import("./ColorTest-DrSxu3EL.js"),__vite__mapDeps([48,1,2]))),tg=x.lazy(()=>F(()=>import("./SimpleTest-BVZxF6ml.js"),__vite__mapDeps([49,1,2,5,6,7,4]))),ng=x.lazy(()=>F(()=>import("./HomeSimple-DZ0OTO8a.js"),__vite__mapDeps([50,1,2,9,11,5,6,3,4,12,7]))),rg=x.lazy(()=>F(()=>import("./FAQWheelPage-CRBa1b1s.js"),__vite__mapDeps([51,1,2,52,5,53,16,4]))),sg=x.lazy(()=>F(()=>import("./CVTemplates-DYJJgiYC.js"),__vite__mapDeps([54,5,2,1,24,9,10,28,3,32,4,6,7]))),ig=x.lazy(()=>F(()=>import("./InterviewTipsPage-rSjXaJ4L.js"),__vite__mapDeps([55,1,2,9,4]))),og=x.lazy(()=>F(()=>import("./SalaryGuide-BNaLMAP8.js").then(t=>t.S),__vite__mapDeps([56,1,2,5,32,35,4,3,19,10,42,30,29,7]))),ag=x.lazy(()=>F(()=>import("./CVBuilderHelp-DOO7EwIp.js"),__vite__mapDeps([57,5,2,1,9,18,4,12,6,7]))),lg=x.lazy(()=>F(()=>import("./PostJob-8--Oe28z.js").then(t=>t.P),__vite__mapDeps([58,5,2,1,6,9,41,3,25,4,35,10,19,33,29,30,53,12,42,32,28]))),cg=x.lazy(()=>F(()=>import("./BrowseCandidates-_xjVSZhK.js"),__vite__mapDeps([59,1,2,3,4,9,10,5,6,7]))),ug=x.lazy(()=>F(()=>import("./Solutions-CyKGtNsD.js"),__vite__mapDeps([60,1,2,3,9,4,5,6,7]))),hg=x.lazy(()=>F(()=>import("./Pricing-BM8CHGQF.js"),__vite__mapDeps([61,1,2,9,3,4,5,6,7]))),dg=x.lazy(()=>F(()=>import("./SuccessStories-DJFo_Lol.js"),__vite__mapDeps([62,1,2,9,3,4,5,6,7]))),fg=x.lazy(()=>F(()=>import("./About-fha0u5d6.js"),__vite__mapDeps([63,1,2,3,9,4,5,6,7]))),pg=x.lazy(()=>F(()=>import("./AboutUsPage-DtJKHrZM.js"),__vite__mapDeps([64,1,2,3,4,5,6,7]))),mg=x.lazy(()=>F(()=>import("./index-CGkwm6S_.js"),__vite__mapDeps([65,5,2,1,9,3,4,6,7]))),gg=x.lazy(()=>F(()=>import("./PrivacyPolicy-CvfoQ4LB.js"),__vite__mapDeps([66,1,2,9]))),vg=x.lazy(()=>F(()=>import("./Terms-brqut4ll.js"),__vite__mapDeps([67,1,2,9]))),yg=x.lazy(()=>F(()=>import("./FAQ-B9EFJM4v.js"),__vite__mapDeps([68,1,2,9,52,5,53,16,4])));function _g(){return d.jsxs(d.Fragment,{children:[d.jsx(Lm,{}),d.jsx(km,{children:d.jsx(x.Suspense,{fallback:d.jsx(xl,{}),children:d.jsxs(mc,{children:[d.jsx(j,{path:"/",component:ng}),d.jsx(j,{path:"/home-original",component:Um}),d.jsx(j,{path:"/jobs",component:Fm}),d.jsx(j,{path:"/resources",component:Vm}),d.jsx(j,{path:"/resources/cv-templates",component:sg}),d.jsx(j,{path:"/resources/interview-tips",component:ig}),d.jsx(j,{path:"/resources/salary-guide",component:og}),d.jsx(j,{path:"/resources/cv-builder-help",component:ag}),d.jsx(j,{path:"/employers/post-job",component:lg}),d.jsx(j,{path:"/employers/browse-candidates",component:cg}),d.jsx(j,{path:"/employers/solutions",component:ug}),d.jsx(j,{path:"/employers/pricing",component:hg}),d.jsx(j,{path:"/employers/success-stories",component:dg}),d.jsx(j,{path:"/about",component:fg}),d.jsx(j,{path:"/about-us",component:pg}),d.jsx(j,{path:"/contact",component:mg}),d.jsx(j,{path:"/privacy-policy",component:gg}),d.jsx(j,{path:"/terms",component:vg}),d.jsx(j,{path:"/faq",component:yg}),d.jsx(j,{path:"/faq-wheel",component:rg}),d.jsx(j,{path:"/wise-up",component:Bm}),d.jsx(j,{path:"/cv-builder",component:Hm}),d.jsx(j,{path:"/login",component:zm}),d.jsx(j,{path:"/register",component:$m}),d.jsx(j,{path:"/profile",component:Io}),d.jsx(j,{path:"/profile/:username",component:Io}),d.jsx(j,{path:"/profile-setup",children:()=>d.jsx(Wm,{})}),d.jsx(j,{path:"/upload-cv",children:()=>d.jsx(gc,{to:"/profile-setup"})}),d.jsx(j,{path:"/email-link-login",component:Gm}),d.jsx(j,{path:"/auth/email-signin-complete",component:Km}),d.jsx(j,{path:"/ui-test",component:Ym}),d.jsx(j,{path:"/test",component:Qm}),d.jsx(j,{path:"/footer-test",component:Zm}),d.jsx(j,{path:"/color-test",component:eg}),d.jsx(j,{path:"/simple-test",component:tg}),d.jsx(j,{path:"/admin",component:Jm}),d.jsx(j,{path:"/marketing-rules",component:qm}),d.jsx(j,{path:"/dashboard",component:Xm}),d.jsx(j,{component:Mm})]})})}),d.jsx(jm,{})]})}function wg(){return d.jsx(Bo,{children:d.jsx(zo,{client:qo,children:d.jsxs(Em,{children:[d.jsx(_g,{}),d.jsx(Iu,{})]})})})}const Al=document.createElement("style");Al.textContent=`
  .job-card:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;document.head.appendChild(Al);const Rl=document.getElementById("root");if(!Rl)throw new Error('Failed to find the root element with id "root". Please check your HTML file.');const bg=Oc.createRoot(Rl);bg.render(d.jsx(fc.StrictMode,{children:d.jsx(Bo,{children:d.jsxs(zo,{client:qo,children:[d.jsx(wg,{}),!1]})})}));export{vl as A,er as B,wl as D,km as E,jm as F,yl as a,_l as b,El as c,Tl as d,kl as e,gl as f,Ng as g,Pg as h,Y as i,Rg as j,Og as k,Dg as l,jg as m,Mg as n,Lg as o,bl as p,_s as q,Ve as r,Cg as s,Sg as t,Jo as u,ts as v,Pm as w};
