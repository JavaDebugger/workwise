const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/not-found-Cf12ai6I.js","assets/vendor-BOJOR_z2.js","assets/contact-C28TQl3y.js","assets/Home-B5OoYVaN.js","assets/CustomHelmet-CJEY1eBY.js","assets/CtaSection-CR2oTmhM.js","assets/skeleton-DTk9rcAT.js","assets/index-BdQq_4o_.js","assets/JobCard-ORdKAsNj.js","assets/badge-Dbv6MStK.js","assets/Jobs-Do-h_p4-.js","assets/apiClient-Ddw1nvhZ.js","assets/Resources-DDW7kc0N.js","assets/breadcrumb-BpcVE2At.js","assets/WiseUpPage-u_F8NhnD.js","assets/Login-Br4eMBkY.js","assets/Helmet-D3USV4CJ.js","assets/index-PjsTQpNX.js","assets/form-BHDrNC-d.js","assets/index.esm-CYlt0PPA.js","assets/checkbox-D1FhjMIf.js","assets/index-B9Pj0zRd.js","assets/Register-DZSHFoJX.js","assets/CVBuilder-DsYV4_3U.js","assets/select-DQ0ST6N3.js","assets/separator-B9UV-a_j.js","assets/UserProfile-KTXpHwKO.js","assets/tabs-DPRANr_g.js","assets/progress-Ex6v7sqJ.js","assets/ProfileSetup-C-TPCQTz.js","assets/dialog-DRP3-jCP.js","assets/index-DxgVd6xj.js","assets/profileService-CVm8ufKb.js","assets/EmailLinkLogin-BPnmJ8jX.js","assets/EmailSignInComplete-mEJPi_1M.js","assets/MarketingRulesPage-1pIy1eKZ.js","assets/table-DLw8QS_r.js","assets/alert-dialog-Dvsv8ooK.js","assets/switch-gFn2Cl-f.js","assets/generateCategoricalChart-CvYaMm7S.js","assets/LineChart-ZNKxPOLL.js","assets/BarChart-DPdmhglm.js","assets/PieChart-BXcJGoK_.js","assets/AdminDashboard-ZEPBW2_8.js","assets/Dashboard-qTPRu7Vn.js","assets/ui-test-BlRER8xZ.js","assets/TestPage-ClmIxZTZ.js","assets/FooterTest-8TIbuiNC.js","assets/ColorTest-DU54NZBR.js","assets/SimpleTest-Q4SjZNHi.js","assets/HomeSimple-BhKni3uR.js","assets/FAQWheelPage-DTLMGkSD.js","assets/FAQWheelPreview-f9jEfcaO.js","assets/use-mobile-CCtnFASt.js","assets/CVTemplates-DUY1gZX0.js","assets/InterviewTipsPage-DIi_Q53M.js","assets/SalaryGuide-BYzIPkhA.js","assets/CVBuilderHelp-B31dpdOC.js","assets/PostJob-CWDqMh60.js","assets/BrowseCandidates-iUTLLS2Z.js","assets/Solutions-BTsRa-ZZ.js","assets/Pricing-CAY5P-oe.js","assets/SuccessStories-7DWYH2qF.js","assets/About-DQDh_VAh.js","assets/AboutUsPage-B2eC7Ecs.js","assets/index-Daz6fL0a.js","assets/PrivacyPolicy-i-MLjzGd.js","assets/Terms-D4opybeN.js","assets/FAQ-Cf1-cZCd.js"])))=>i.map(i=>d[i]);
import{r as _f,b as Qc,R as Ni,a as p,Q as wf,j as h,c as yt,_ as q,H as Zc,d as el}from"./vendor-BOJOR_z2.js";import{u as he,c as ui,P as re,d as Oi,R as Ef,r as tl,a as ie,b as nl,X as Tf,C as bf,e as rl,f as If,g as xf,h as Af,B as di,U as Sf,i as Rf,j as Cf,F as Pf,S as sl,k as il,L as kf,l as Nf,m as Of,M as Df,n as Mf,o as Lf}from"./contact-C28TQl3y.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var pr={},ba;function jf(){if(ba)return pr;ba=1;var t=_f();return pr.createRoot=t.createRoot,pr.hydrateRoot=t.hydrateRoot,pr}var Ff=jf(),Fs={exports:{}},Us={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia;function Uf(){if(Ia)return Us;Ia=1;var t=Qc();function e(g,T){return g===T&&(g!==0||1/g===1/T)||g!==g&&T!==T}var n=typeof Object.is=="function"?Object.is:e,r=t.useState,i=t.useEffect,o=t.useLayoutEffect,a=t.useDebugValue;function l(g,T){var S=T(),C=r({inst:{value:S,getSnapshot:T}}),I=C[0].inst,x=C[1];return o(function(){I.value=S,I.getSnapshot=T,d(I)&&x({inst:I})},[g,S,T]),i(function(){return d(I)&&x({inst:I}),g(function(){d(I)&&x({inst:I})})},[g]),a(S),S}function d(g){var T=g.getSnapshot;g=g.value;try{var S=T();return!n(g,S)}catch{return!0}}function f(g,T){return T()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:l;return Us.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:y,Us}var xa;function $f(){return xa||(xa=1,Fs.exports=Uf()),Fs.exports}var Vf=$f();const{useEffect:Bf,useLayoutEffect:Hf,useRef:Wf,useInsertionEffect:zf}=Ni,Kf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ol=Kf?Hf:Bf,Gf=zf||ol,Di=t=>{const e=Wf([t,(...n)=>e[0](...n)]).current;return Gf(()=>{e[0]=t}),e[1]},qf=(t="",e=location.pathname)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",Xf=(t,e="")=>t[0]==="~"?t.slice(1):e+t,Yf="popstate",Mi="pushState",Li="replaceState",Jf="hashchange",Aa=[Yf,Mi,Li,Jf],Qf=t=>{for(const e of Aa)addEventListener(e,t);return()=>{for(const e of Aa)removeEventListener(e,t)}},Zf=(t,e)=>Vf.useSyncExternalStore(Qf,t,e),Sa=()=>location.pathname,ep=({ssrPath:t}={})=>Zf(Sa,t?()=>t:Sa),tp=(t,{replace:e=!1}={})=>history[e?Li:Mi](null,"",t),np=(t={})=>[qf(t.base,ep(t)),Di((e,n)=>tp(Xf(e,t.base),n))];if(typeof history<"u")for(const t of[Mi,Li]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),n}}function rp(t=ip){let e={};const n=r=>e[r]||(e[r]=t(r));return(r,i)=>{const{regexp:o,keys:a}=n(r||""),l=o.exec(i);return l?[!0,a.reduce((f,y,g)=>(f[y.name]=l[g+1],f),{})]:[!1,null]}}const Ra=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),sp=(t,e,n)=>{let r=t?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return e&&n&&(r="(?:\\/"+r+")"),r+(e?"?":"")},ip=t=>{const e=/:([A-Za-z0-9_]+)([?+*]?)/g;let n=null,r=0,i=[],o="";for(;(n=e.exec(t))!==null;){const[a,l,d]=n,f=d==="+"||d==="*",y=d==="?"||d==="*",g=y&&t[n.index-1]==="/"?1:0,T=t.substring(r,n.index-g);i.push({name:l}),r=e.lastIndex,o+=Ra(T)+sp(f,y,g)}return o+=Ra(t.substring(r)),{keys:i,regexp:new RegExp("^"+o+"(?:\\/)?$","i")}},op={hook:np,matcher:rp(),base:""},ap=p.createContext(op),es=()=>p.useContext(ap),ts=t=>t.hook(t),ji=()=>ts(es()),cp=t=>{const e=es(),[n]=ts(e);return e.matcher(t,n)},al=p.createContext({params:{}}),FI=()=>p.useContext(al).params,Ca=(t,e)=>p.createElement(al.Provider,{value:{params:t},children:e}),z=({path:t,match:e,component:n,children:r})=>{const i=cp(t),[o,a]=e||i;return o?n?Ca(a,p.createElement(n,{params:a})):Ca(a,typeof r=="function"?r(a):r):null},K=p.forwardRef((t,e)=>{const n=es(),[,r]=ts(n),{to:i,href:o=i,children:a,onClick:l}=t,d=Di(g=>{g.ctrlKey||g.metaKey||g.altKey||g.shiftKey||g.button!==0||(l&&l(g),g.defaultPrevented||(g.preventDefault(),r(i||o,t)))}),f={href:o[0]==="~"?o.slice(1):n.base+o,onClick:d,to:null,ref:e},y=p.isValidElement(a)?a:p.createElement("a",t);return p.cloneElement(y,f)}),hi=t=>Array.isArray(t)?[].concat(...t.map(e=>e&&e.type===p.Fragment?hi(e.props.children):hi(e))):[t],lp=({children:t,location:e})=>{const n=es(),r=n.matcher,[i]=ts(n);for(const o of hi(t)){let a=0;if(p.isValidElement(o)&&(a=o.props.path?r(o.props.path,e||i):[!0,{}])[0])return p.cloneElement(o,{match:a})}return null},up=t=>{const{to:e,href:n=e}=t,[,r]=ji(),i=Di(()=>r(e||n,t));return ol(()=>{i()},[]),null};async function cl(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}async function UI(t,e,n){const r=await fetch(e,{method:t,headers:n?{"Content-Type":"application/json"}:{},body:n?JSON.stringify(n):void 0,credentials:"include"});return await cl(r),r}const dp=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return await cl(n),await n.json()},ll=new wf({defaultOptions:{queries:{queryFn:dp({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),hp=1,fp=1e6;let $s=0;function pp(){return $s=($s+1)%Number.MAX_SAFE_INTEGER,$s.toString()}const Vs=new Map,Pa=t=>{if(Vs.has(t))return;const e=setTimeout(()=>{Vs.delete(t),kn({type:"REMOVE_TOAST",toastId:t})},fp);Vs.set(t,e)},mp=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,hp)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Pa(n):t.toasts.forEach(r=>{Pa(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},xr=[];let Ar={toasts:[]};function kn(t){Ar=mp(Ar,t),xr.forEach(e=>{e(Ar)})}function $I({...t}){const e=pp(),n=i=>kn({type:"UPDATE_TOAST",toast:{...i,id:e}}),r=()=>kn({type:"DISMISS_TOAST",toastId:e});return kn({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:i=>{i||r()}}}),{id:e,dismiss:r,update:n}}function ul(){const[t,e]=p.useState(Ar),[n,r]=p.useState([]);return p.useEffect(()=>(xr.push(e),()=>{const o=xr.indexOf(e);o>-1&&xr.splice(o,1)}),[t]),{...t,toasts:n,toast:o=>{r(a=>[...a,o]),setTimeout(()=>{r(a=>a.filter(l=>l!==o))},o.duration||5e3)},dismiss:o=>kn({type:"DISMISS_TOAST",toastId:o})}}function H(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function VI(t,e){const n=p.createContext(e),r=o=>{const{children:a,...l}=o,d=p.useMemo(()=>l,Object.values(l));return h.jsx(n.Provider,{value:d,children:a})};r.displayName=t+"Provider";function i(o){const a=p.useContext(n);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${o}\` must be used within \`${t}\``)}return[r,i]}function Vt(t,e=[]){let n=[];function r(o,a){const l=p.createContext(a),d=n.length;n=[...n,a];const f=g=>{var N;const{scope:T,children:S,...C}=g,I=((N=T==null?void 0:T[t])==null?void 0:N[d])||l,x=p.useMemo(()=>C,Object.values(C));return h.jsx(I.Provider,{value:x,children:S})};f.displayName=o+"Provider";function y(g,T){var I;const S=((I=T==null?void 0:T[t])==null?void 0:I[d])||l,C=p.useContext(S);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${g}\` must be used within \`${o}\``)}return[f,y]}const i=()=>{const o=n.map(a=>p.createContext(a));return function(l){const d=(l==null?void 0:l[t])||o;return p.useMemo(()=>({[`__scope${t}`]:{...l,[t]:d}}),[l,d])}};return i.scopeName=t,[r,gp(i,...e)]}function gp(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((l,{useScope:d,scopeName:f})=>{const g=d(o)[`__scope${f}`];return{...l,...g}},{});return p.useMemo(()=>({[`__scope${e.scopeName}`]:a}),[a])}};return n.scopeName=e.scopeName,n}function Fi(t){const e=t+"CollectionProvider",[n,r]=Vt(e),[i,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),a=I=>{const{scope:x,children:N}=I,M=yt.useRef(null),O=yt.useRef(new Map).current;return h.jsx(i,{scope:x,itemMap:O,collectionRef:M,children:N})};a.displayName=e;const l=t+"CollectionSlot",d=ui(l),f=yt.forwardRef((I,x)=>{const{scope:N,children:M}=I,O=o(l,N),D=he(x,O.collectionRef);return h.jsx(d,{ref:D,children:M})});f.displayName=l;const y=t+"CollectionItemSlot",g="data-radix-collection-item",T=ui(y),S=yt.forwardRef((I,x)=>{const{scope:N,children:M,...O}=I,D=yt.useRef(null),L=he(x,D),F=o(y,N);return yt.useEffect(()=>(F.itemMap.set(D,{ref:D,...O}),()=>void F.itemMap.delete(D))),h.jsx(T,{[g]:"",ref:L,children:M})});S.displayName=y;function C(I){const x=o(t+"CollectionConsumer",I);return yt.useCallback(()=>{const M=x.collectionRef.current;if(!M)return[];const O=Array.from(M.querySelectorAll(`[${g}]`));return Array.from(x.itemMap.values()).sort((F,E)=>O.indexOf(F.ref.current)-O.indexOf(E.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:a,Slot:f,ItemSlot:S},C,r]}function be(t){const e=p.useRef(t);return p.useEffect(()=>{e.current=t}),p.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function vp(t,e=globalThis==null?void 0:globalThis.document){const n=be(t);p.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var yp="DismissableLayer",fi="dismissableLayer.update",_p="dismissableLayer.pointerDownOutside",wp="dismissableLayer.focusOutside",ka,dl=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ui=p.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:a,onDismiss:l,...d}=t,f=p.useContext(dl),[y,g]=p.useState(null),T=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,S]=p.useState({}),C=he(e,E=>g(E)),I=Array.from(f.layers),[x]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),N=I.indexOf(x),M=y?I.indexOf(y):-1,O=f.layersWithOutsidePointerEventsDisabled.size>0,D=M>=N,L=Tp(E=>{const v=E.target,_=[...f.branches].some(b=>b.contains(v));!D||_||(i==null||i(E),a==null||a(E),E.defaultPrevented||l==null||l())},T),F=bp(E=>{const v=E.target;[...f.branches].some(b=>b.contains(v))||(o==null||o(E),a==null||a(E),E.defaultPrevented||l==null||l())},T);return vp(E=>{M===f.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))},T),p.useEffect(()=>{if(y)return n&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ka=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(y)),f.layers.add(y),Na(),()=>{n&&f.layersWithOutsidePointerEventsDisabled.size===1&&(T.body.style.pointerEvents=ka)}},[y,T,n,f]),p.useEffect(()=>()=>{y&&(f.layers.delete(y),f.layersWithOutsidePointerEventsDisabled.delete(y),Na())},[y,f]),p.useEffect(()=>{const E=()=>S({});return document.addEventListener(fi,E),()=>document.removeEventListener(fi,E)},[]),h.jsx(re.div,{...d,ref:C,style:{pointerEvents:O?D?"auto":"none":void 0,...t.style},onFocusCapture:H(t.onFocusCapture,F.onFocusCapture),onBlurCapture:H(t.onBlurCapture,F.onBlurCapture),onPointerDownCapture:H(t.onPointerDownCapture,L.onPointerDownCapture)})});Ui.displayName=yp;var Ep="DismissableLayerBranch",hl=p.forwardRef((t,e)=>{const n=p.useContext(dl),r=p.useRef(null),i=he(e,r);return p.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),h.jsx(re.div,{...t,ref:i})});hl.displayName=Ep;function Tp(t,e=globalThis==null?void 0:globalThis.document){const n=be(t),r=p.useRef(!1),i=p.useRef(()=>{});return p.useEffect(()=>{const o=l=>{if(l.target&&!r.current){let d=function(){fl(_p,n,f,{discrete:!0})};const f={originalEvent:l};l.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=d,e.addEventListener("click",i.current,{once:!0})):d()}else e.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),e.removeEventListener("pointerdown",o),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function bp(t,e=globalThis==null?void 0:globalThis.document){const n=be(t),r=p.useRef(!1);return p.useEffect(()=>{const i=o=>{o.target&&!r.current&&fl(wp,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Na(){const t=new CustomEvent(fi);document.dispatchEvent(t)}function fl(t,e,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Oi(i,o):i.dispatchEvent(o)}var Ip=Ui,xp=hl,Re=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},Ap="Portal",$i=p.forwardRef((t,e)=>{var l;const{container:n,...r}=t,[i,o]=p.useState(!1);Re(()=>o(!0),[]);const a=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?Ef.createPortal(h.jsx(re.div,{...r,ref:e}),a):null});$i.displayName=Ap;function Sp(t,e){return p.useReducer((n,r)=>e[n][r]??n,t)}var dn=t=>{const{present:e,children:n}=t,r=Rp(e),i=typeof n=="function"?n({present:r.isPresent}):p.Children.only(n),o=he(r.ref,Cp(i));return typeof n=="function"||r.isPresent?p.cloneElement(i,{ref:o}):null};dn.displayName="Presence";function Rp(t){const[e,n]=p.useState(),r=p.useRef(null),i=p.useRef(t),o=p.useRef("none"),a=t?"mounted":"unmounted",[l,d]=Sp(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const f=mr(r.current);o.current=l==="mounted"?f:"none"},[l]),Re(()=>{const f=r.current,y=i.current;if(y!==t){const T=o.current,S=mr(f);t?d("MOUNT"):S==="none"||(f==null?void 0:f.display)==="none"?d("UNMOUNT"):d(y&&T!==S?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,d]),Re(()=>{if(e){let f;const y=e.ownerDocument.defaultView??window,g=S=>{const I=mr(r.current).includes(S.animationName);if(S.target===e&&I&&(d("ANIMATION_END"),!i.current)){const x=e.style.animationFillMode;e.style.animationFillMode="forwards",f=y.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=x)})}},T=S=>{S.target===e&&(o.current=mr(r.current))};return e.addEventListener("animationstart",T),e.addEventListener("animationcancel",g),e.addEventListener("animationend",g),()=>{y.clearTimeout(f),e.removeEventListener("animationstart",T),e.removeEventListener("animationcancel",g),e.removeEventListener("animationend",g)}}else d("ANIMATION_END")},[e,d]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:p.useCallback(f=>{r.current=f?getComputedStyle(f):null,n(f)},[])}}function mr(t){return(t==null?void 0:t.animationName)||"none"}function Cp(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Pp=Ni[" useInsertionEffect ".trim().toString()]||Re;function Vi({prop:t,defaultProp:e,onChange:n=()=>{},caller:r}){const[i,o,a]=kp({defaultProp:e,onChange:n}),l=t!==void 0,d=l?t:i;{const y=p.useRef(t!==void 0);p.useEffect(()=>{const g=y.current;g!==l&&console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=l},[l,r])}const f=p.useCallback(y=>{var g;if(l){const T=Np(y)?y(t):y;T!==t&&((g=a.current)==null||g.call(a,T))}else o(y)},[l,t,o,a]);return[d,f]}function kp({defaultProp:t,onChange:e}){const[n,r]=p.useState(t),i=p.useRef(n),o=p.useRef(e);return Pp(()=>{o.current=e},[e]),p.useEffect(()=>{var a;i.current!==n&&((a=o.current)==null||a.call(o,n),i.current=n)},[n,i]),[n,r,o]}function Np(t){return typeof t=="function"}var Op=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Dp="VisuallyHidden",Bi=p.forwardRef((t,e)=>h.jsx(re.span,{...t,ref:e,style:{...Op,...t.style}}));Bi.displayName=Dp;var Hi="ToastProvider",[Wi,Mp,Lp]=Fi("Toast"),[pl,BI]=Vt("Toast",[Lp]),[jp,ns]=pl(Hi),ml=t=>{const{__scopeToast:e,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:a}=t,[l,d]=p.useState(null),[f,y]=p.useState(0),g=p.useRef(!1),T=p.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Hi}\`. Expected non-empty \`string\`.`),h.jsx(Wi.Provider,{scope:e,children:h.jsx(jp,{scope:e,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:f,viewport:l,onViewportChange:d,onToastAdd:p.useCallback(()=>y(S=>S+1),[]),onToastRemove:p.useCallback(()=>y(S=>S-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:T,children:a})})};ml.displayName=Hi;var gl="ToastViewport",Fp=["F8"],pi="toast.viewportPause",mi="toast.viewportResume",vl=p.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:r=Fp,label:i="Notifications ({hotkey})",...o}=t,a=ns(gl,n),l=Mp(n),d=p.useRef(null),f=p.useRef(null),y=p.useRef(null),g=p.useRef(null),T=he(e,g,a.onViewportChange),S=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=a.toastCount>0;p.useEffect(()=>{const x=N=>{var O;r.length!==0&&r.every(D=>N[D]||N.code===D)&&((O=g.current)==null||O.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),p.useEffect(()=>{const x=d.current,N=g.current;if(C&&x&&N){const M=()=>{if(!a.isClosePausedRef.current){const F=new CustomEvent(pi);N.dispatchEvent(F),a.isClosePausedRef.current=!0}},O=()=>{if(a.isClosePausedRef.current){const F=new CustomEvent(mi);N.dispatchEvent(F),a.isClosePausedRef.current=!1}},D=F=>{!x.contains(F.relatedTarget)&&O()},L=()=>{x.contains(document.activeElement)||O()};return x.addEventListener("focusin",M),x.addEventListener("focusout",D),x.addEventListener("pointermove",M),x.addEventListener("pointerleave",L),window.addEventListener("blur",M),window.addEventListener("focus",O),()=>{x.removeEventListener("focusin",M),x.removeEventListener("focusout",D),x.removeEventListener("pointermove",M),x.removeEventListener("pointerleave",L),window.removeEventListener("blur",M),window.removeEventListener("focus",O)}}},[C,a.isClosePausedRef]);const I=p.useCallback(({tabbingDirection:x})=>{const M=l().map(O=>{const D=O.ref.current,L=[D,...Jp(D)];return x==="forwards"?L:L.reverse()});return(x==="forwards"?M.reverse():M).flat()},[l]);return p.useEffect(()=>{const x=g.current;if(x){const N=M=>{var L,F,E;const O=M.altKey||M.ctrlKey||M.metaKey;if(M.key==="Tab"&&!O){const v=document.activeElement,_=M.shiftKey;if(M.target===x&&_){(L=f.current)==null||L.focus();return}const R=I({tabbingDirection:_?"backwards":"forwards"}),w=R.findIndex($=>$===v);Bs(R.slice(w+1))?M.preventDefault():_?(F=f.current)==null||F.focus():(E=y.current)==null||E.focus()}};return x.addEventListener("keydown",N),()=>x.removeEventListener("keydown",N)}},[l,I]),h.jsxs(xp,{ref:d,role:"region","aria-label":i.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:C?void 0:"none"},children:[C&&h.jsx(gi,{ref:f,onFocusFromOutsideViewport:()=>{const x=I({tabbingDirection:"forwards"});Bs(x)}}),h.jsx(Wi.Slot,{scope:n,children:h.jsx(re.ol,{tabIndex:-1,...o,ref:T})}),C&&h.jsx(gi,{ref:y,onFocusFromOutsideViewport:()=>{const x=I({tabbingDirection:"backwards"});Bs(x)}})]})});vl.displayName=gl;var yl="ToastFocusProxy",gi=p.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=t,o=ns(yl,n);return h.jsx(Bi,{"aria-hidden":!0,tabIndex:0,...i,ref:e,style:{position:"fixed"},onFocus:a=>{var f;const l=a.relatedTarget;!((f=o.viewport)!=null&&f.contains(l))&&r()}})});gi.displayName=yl;var Vn="Toast",Up="toast.swipeStart",$p="toast.swipeMove",Vp="toast.swipeCancel",Bp="toast.swipeEnd",_l=p.forwardRef((t,e)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...a}=t,[l,d]=Vi({prop:r,defaultProp:i??!0,onChange:o,caller:Vn});return h.jsx(dn,{present:n||l,children:h.jsx(zp,{open:l,...a,ref:e,onClose:()=>d(!1),onPause:be(t.onPause),onResume:be(t.onResume),onSwipeStart:H(t.onSwipeStart,f=>{f.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:H(t.onSwipeMove,f=>{const{x:y,y:g}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","move"),f.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:H(t.onSwipeCancel,f=>{f.currentTarget.setAttribute("data-swipe","cancel"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:H(t.onSwipeEnd,f=>{const{x:y,y:g}=f.detail.delta;f.currentTarget.setAttribute("data-swipe","end"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),f.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),f.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),d(!1)})})})});_l.displayName=Vn;var[Hp,Wp]=pl(Vn,{onClose(){}}),zp=p.forwardRef((t,e)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:a,onEscapeKeyDown:l,onPause:d,onResume:f,onSwipeStart:y,onSwipeMove:g,onSwipeCancel:T,onSwipeEnd:S,...C}=t,I=ns(Vn,n),[x,N]=p.useState(null),M=he(e,$=>N($)),O=p.useRef(null),D=p.useRef(null),L=i||I.duration,F=p.useRef(0),E=p.useRef(L),v=p.useRef(0),{onToastAdd:_,onToastRemove:b}=I,A=be(()=>{var W;(x==null?void 0:x.contains(document.activeElement))&&((W=I.viewport)==null||W.focus()),a()}),R=p.useCallback($=>{!$||$===1/0||(window.clearTimeout(v.current),F.current=new Date().getTime(),v.current=window.setTimeout(A,$))},[A]);p.useEffect(()=>{const $=I.viewport;if($){const W=()=>{R(E.current),f==null||f()},G=()=>{const Q=new Date().getTime()-F.current;E.current=E.current-Q,window.clearTimeout(v.current),d==null||d()};return $.addEventListener(pi,G),$.addEventListener(mi,W),()=>{$.removeEventListener(pi,G),$.removeEventListener(mi,W)}}},[I.viewport,L,d,f,R]),p.useEffect(()=>{o&&!I.isClosePausedRef.current&&R(L)},[o,L,I.isClosePausedRef,R]),p.useEffect(()=>(_(),()=>b()),[_,b]);const w=p.useMemo(()=>x?Al(x):null,[x]);return I.viewport?h.jsxs(h.Fragment,{children:[w&&h.jsx(Kp,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:w}),h.jsx(Hp,{scope:n,onClose:A,children:tl.createPortal(h.jsx(Wi.ItemSlot,{scope:n,children:h.jsx(Ip,{asChild:!0,onEscapeKeyDown:H(l,()=>{I.isFocusedToastEscapeKeyDownRef.current||A(),I.isFocusedToastEscapeKeyDownRef.current=!1}),children:h.jsx(re.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":I.swipeDirection,...C,ref:M,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:H(t.onKeyDown,$=>{$.key==="Escape"&&(l==null||l($.nativeEvent),$.nativeEvent.defaultPrevented||(I.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:H(t.onPointerDown,$=>{$.button===0&&(O.current={x:$.clientX,y:$.clientY})}),onPointerMove:H(t.onPointerMove,$=>{if(!O.current)return;const W=$.clientX-O.current.x,G=$.clientY-O.current.y,Q=!!D.current,B=["left","right"].includes(I.swipeDirection),U=["left","up"].includes(I.swipeDirection)?Math.min:Math.max,X=B?U(0,W):0,oe=B?0:U(0,G),se=$.pointerType==="touch"?10:2,ee={x:X,y:oe},Fe={originalEvent:$,delta:ee};Q?(D.current=ee,gr($p,g,Fe,{discrete:!1})):Oa(ee,I.swipeDirection,se)?(D.current=ee,gr(Up,y,Fe,{discrete:!1}),$.target.setPointerCapture($.pointerId)):(Math.abs(W)>se||Math.abs(G)>se)&&(O.current=null)}),onPointerUp:H(t.onPointerUp,$=>{const W=D.current,G=$.target;if(G.hasPointerCapture($.pointerId)&&G.releasePointerCapture($.pointerId),D.current=null,O.current=null,W){const Q=$.currentTarget,B={originalEvent:$,delta:W};Oa(W,I.swipeDirection,I.swipeThreshold)?gr(Bp,S,B,{discrete:!0}):gr(Vp,T,B,{discrete:!0}),Q.addEventListener("click",U=>U.preventDefault(),{once:!0})}})})})}),I.viewport)})]}):null}),Kp=t=>{const{__scopeToast:e,children:n,...r}=t,i=ns(Vn,e),[o,a]=p.useState(!1),[l,d]=p.useState(!1);return Xp(()=>a(!0)),p.useEffect(()=>{const f=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(f)},[]),l?null:h.jsx($i,{asChild:!0,children:h.jsx(Bi,{...r,children:o&&h.jsxs(h.Fragment,{children:[i.label," ",n]})})})},Gp="ToastTitle",wl=p.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return h.jsx(re.div,{...r,ref:e})});wl.displayName=Gp;var qp="ToastDescription",El=p.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return h.jsx(re.div,{...r,ref:e})});El.displayName=qp;var Tl="ToastAction",bl=p.forwardRef((t,e)=>{const{altText:n,...r}=t;return n.trim()?h.jsx(xl,{altText:n,asChild:!0,children:h.jsx(zi,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Tl}\`. Expected non-empty \`string\`.`),null)});bl.displayName=Tl;var Il="ToastClose",zi=p.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t,i=Wp(Il,n);return h.jsx(xl,{asChild:!0,children:h.jsx(re.button,{type:"button",...r,ref:e,onClick:H(t.onClick,i.onClose)})})});zi.displayName=Il;var xl=p.forwardRef((t,e)=>{const{__scopeToast:n,altText:r,...i}=t;return h.jsx(re.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:e})});function Al(t){const e=[];return Array.from(t.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),Yp(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const a=r.dataset.radixToastAnnounceAlt;a&&e.push(a)}else e.push(...Al(r))}}),e}function gr(t,e,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?Oi(i,o):i.dispatchEvent(o)}var Oa=(t,e,n=0)=>{const r=Math.abs(t.x),i=Math.abs(t.y),o=r>i;return e==="left"||e==="right"?o&&r>n:!o&&i>n};function Xp(t=()=>{}){const e=be(t);Re(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[e])}function Yp(t){return t.nodeType===t.ELEMENT_NODE}function Jp(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Bs(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var Qp=ml,Sl=vl,Rl=_l,Cl=wl,Pl=El,kl=bl,Nl=zi;const Zp=Qp,Ol=p.forwardRef(({className:t,...e},n)=>h.jsx(Sl,{ref:n,className:ie("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Ol.displayName=Sl.displayName;const em=nl("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Dl=p.forwardRef(({className:t,variant:e,...n},r)=>h.jsx(Rl,{ref:r,className:ie(em({variant:e}),t),...n}));Dl.displayName=Rl.displayName;const tm=p.forwardRef(({className:t,...e},n)=>h.jsx(kl,{ref:n,className:ie("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));tm.displayName=kl.displayName;const Ml=p.forwardRef(({className:t,...e},n)=>h.jsx(Nl,{ref:n,className:ie("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:h.jsx(Tf,{className:"h-4 w-4"})}));Ml.displayName=Nl.displayName;const Ll=p.forwardRef(({className:t,...e},n)=>h.jsx(Cl,{ref:n,className:ie("text-sm font-semibold",t),...e}));Ll.displayName=Cl.displayName;const jl=p.forwardRef(({className:t,...e},n)=>h.jsx(Pl,{ref:n,className:ie("text-sm opacity-90",t),...e}));jl.displayName=Pl.displayName;function nm(){const{toasts:t}=ul();return h.jsxs(Zp,{children:[t.map(function({id:e,title:n,description:r,action:i,...o}){return h.jsxs(Dl,{...o,children:[h.jsxs("div",{className:"grid gap-1",children:[n&&h.jsx(Ll,{children:n}),r&&h.jsx(jl,{children:r})]}),i,h.jsx(Ml,{})]},e)}),h.jsx(Ol,{})]})}const rm=()=>{};var Da={};/**
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
 */const Fl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],l=t[n++],d=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,l=a?t[i+1]:0,d=i+2<t.length,f=d?t[i+2]:0,y=o>>2,g=(o&3)<<4|l>>4;let T=(l&15)<<2|f>>6,S=f&63;d||(S=64,a||(T=64)),r.push(n[y],n[g],n[T],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||f==null||g==null)throw new im;const T=o<<2|l>>4;if(r.push(T),f!==64){const S=l<<4&240|f>>2;if(r.push(S),g!==64){const C=f<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class im extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const om=function(t){const e=Fl(t);return Ul.encodeByteArray(e,!0)},Dr=function(t){return om(t).replace(/\./g,"")},$l=function(t){try{return Ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cm=()=>am().__FIREBASE_DEFAULTS__,lm=()=>{if(typeof process>"u"||typeof Da>"u")return;const t=Da.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},um=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$l(t[1]);return e&&JSON.parse(e)},Ki=()=>{try{return rm()||cm()||lm()||um()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vl=t=>{var e,n;return(n=(e=Ki())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bl=t=>{const e=Vl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hl=()=>{var t;return(t=Ki())===null||t===void 0?void 0:t.config},Wl=t=>{var e;return(e=Ki())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Dr(JSON.stringify(n)),Dr(JSON.stringify(a)),""].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vm(){try{return typeof indexedDB=="object"}catch{return!1}}function ym(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const _m="FirebaseError";class qe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_m,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?wm(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qe(i,l,r)}}function wm(t,e){return t.replace(Em,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Em=/\{\$([^}]+)}/g;function Tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(Ma(o)&&Ma(a)){if(!Lt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ma(t){return t!==null&&typeof t=="object"}/**
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
 */function Hn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bm(t,e){const n=new Im(t,e);return n.subscribe.bind(n)}class Im{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hs),i.error===void 0&&(i.error=Hs),i.complete===void 0&&(i.complete=Hs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hs(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rm(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(t){return t===Dt?void 0:t}function Rm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Pm={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},km=Z.INFO,Nm={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Om=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Nm[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gi{constructor(e){this.name=e,this._logLevel=km,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Dm=(t,e)=>e.some(n=>t instanceof n);let La,ja;function Mm(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lm(){return ja||(ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kl=new WeakMap,vi=new WeakMap,Gl=new WeakMap,Ws=new WeakMap,qi=new WeakMap;function jm(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(bt(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Kl.set(n,t)}).catch(()=>{}),qi.set(e,t),e}function Fm(t){if(vi.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});vi.set(t,e)}let yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Um(t){yi=t(yi)}function $m(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zs(this),e,...n);return Gl.set(r,e.sort?e.sort():[e]),bt(r)}:Lm().includes(t)?function(...e){return t.apply(zs(this),e),bt(Kl.get(this))}:function(...e){return bt(t.apply(zs(this),e))}}function Vm(t){return typeof t=="function"?$m(t):(t instanceof IDBTransaction&&Fm(t),Dm(t,Mm())?new Proxy(t,yi):t)}function bt(t){if(t instanceof IDBRequest)return jm(t);if(Ws.has(t))return Ws.get(t);const e=Vm(t);return e!==t&&(Ws.set(t,e),qi.set(e,t)),e}const zs=t=>qi.get(t);function Bm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),l=bt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(bt(a.result),d.oldVersion,d.newVersion,bt(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Hm=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],Ks=new Map;function Fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Wm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hm.includes(n)))return;const o=async function(a,...l){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&d.done]))[0]};return Ks.set(e,o),o}Um(t=>({...t,get:(e,n,r)=>Fa(e,n)||t.get(e,n,r),has:(e,n)=>!!Fa(e,n)||t.has(e,n)}));/**
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
 */class zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Km(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Km(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",Ua="0.11.5";/**
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
 */const at=new Gi("@firebase/app"),Gm="@firebase/app-compat",qm="@firebase/analytics-compat",Xm="@firebase/analytics",Ym="@firebase/app-check-compat",Jm="@firebase/app-check",Qm="@firebase/auth",Zm="@firebase/auth-compat",eg="@firebase/database",tg="@firebase/data-connect",ng="@firebase/database-compat",rg="@firebase/functions",sg="@firebase/functions-compat",ig="@firebase/installations",og="@firebase/installations-compat",ag="@firebase/messaging",cg="@firebase/messaging-compat",lg="@firebase/performance",ug="@firebase/performance-compat",dg="@firebase/remote-config",hg="@firebase/remote-config-compat",fg="@firebase/storage",pg="@firebase/storage-compat",mg="@firebase/firestore",gg="@firebase/vertexai",vg="@firebase/firestore-compat",yg="firebase",_g="11.6.1";/**
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
 */const wi="[DEFAULT]",wg={[_i]:"fire-core",[Gm]:"fire-core-compat",[Xm]:"fire-analytics",[qm]:"fire-analytics-compat",[Jm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Qm]:"fire-auth",[Zm]:"fire-auth-compat",[eg]:"fire-rtdb",[tg]:"fire-data-connect",[ng]:"fire-rtdb-compat",[rg]:"fire-fn",[sg]:"fire-fn-compat",[ig]:"fire-iid",[og]:"fire-iid-compat",[ag]:"fire-fcm",[cg]:"fire-fcm-compat",[lg]:"fire-perf",[ug]:"fire-perf-compat",[dg]:"fire-rc",[hg]:"fire-rc-compat",[fg]:"fire-gcs",[pg]:"fire-gcs-compat",[mg]:"fire-fst",[vg]:"fire-fst-compat",[gg]:"fire-vertex","fire-js":"fire-js",[yg]:"fire-js-all"};/**
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
 */const Mr=new Map,Eg=new Map,Ei=new Map;function $a(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Ei.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Ei.set(e,t);for(const n of Mr.values())$a(n,t);for(const n of Eg.values())$a(n,t);return!0}function rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ge(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},It=new Bn("app","Firebase",Tg);/**
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
 */class bg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Bt=_g;function ql(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(n||(n=Hl()),!n)throw It.create("no-options");const o=Mr.get(i);if(o){if(Lt(n,o.options)&&Lt(r,o.config))return o;throw It.create("duplicate-app",{appName:i})}const a=new Cm(i);for(const d of Ei.values())a.addComponent(d);const l=new bg(n,r,a);return Mr.set(i,l),l}function Xi(t=wi){const e=Mr.get(t);if(!e&&t===wi&&Hl())return ql();if(!e)throw It.create("no-app",{appName:t});return e}function Be(t,e,n){var r;let i=(r=wg[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(l.join(" "));return}jt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ig="firebase-heartbeat-database",xg=1,Mn="firebase-heartbeat-store";let Gs=null;function Xl(){return Gs||(Gs=Bm(Ig,xg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mn)}catch(n){console.warn(n)}}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),Gs}async function Ag(t){try{const n=(await Xl()).transaction(Mn),r=await n.objectStore(Mn).get(Yl(t));return await n.done,r}catch(e){if(e instanceof qe)at.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function Va(t,e){try{const r=(await Xl()).transaction(Mn,"readwrite");await r.objectStore(Mn).put(e,Yl(t)),await r.done}catch(n){if(n instanceof qe)at.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function Yl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sg=1024,Rg=30;class Cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ba();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Rg){const a=Ng(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ba(),{heartbeatsToSend:r,unsentEntries:i}=Pg(this._heartbeatsCache.heartbeats),o=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return at.warn(n),""}}}function Ba(){return new Date().toISOString().substring(0,10)}function Pg(t,e=Sg){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ha(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ha(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vm()?ym().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ag(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ha(t){return Dr(JSON.stringify({version:2,heartbeats:t})).length}function Ng(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Og(t){jt(new xt("platform-logger",e=>new zm(e),"PRIVATE")),jt(new xt("heartbeat",e=>new Cg(e),"PRIVATE")),Be(_i,Ua,t),Be(_i,Ua,"esm2017"),Be("fire-js","")}Og("");var Dg="firebase",Mg="11.6.1";/**
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
 */Be(Dg,Mg,"app");var Ve=function(){return Ve=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)};function Wn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Lg(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function Jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jg=Jl,Ql=new Bn("auth","Firebase",Jl());/**
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
 */const Lr=new Gi("@firebase/auth");function Fg(t,...e){Lr.logLevel<=Z.WARN&&Lr.warn(`Auth (${Bt}): ${t}`,...e)}function Sr(t,...e){Lr.logLevel<=Z.ERROR&&Lr.error(`Auth (${Bt}): ${t}`,...e)}/**
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
 */function Ce(t,...e){throw Ji(t,...e)}function Me(t,...e){return Ji(t,...e)}function Yi(t,e,n){const r=Object.assign(Object.assign({},jg()),{[e]:n});return new Bn("auth","Firebase",r).create(e,{appName:t.name})}function He(t){return Yi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ug(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ce(t,"argument-error"),Yi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ji(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ql.create(t,...e)}function V(t,e,...n){if(!t)throw Ji(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sr(e),new Error(e)}function ct(t,e){t||st(e)}/**
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
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $g(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||pm()||"connection"in navigator)?navigator.onLine:!0}function Bg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=hm()||mm()}get(){return Vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qi(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zg=new zn(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xe(t,e,n,r,i={}){return eu(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Hn(Object.assign({key:t.config.apiKey},a)).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:d},o);return fm()||(f.referrerPolicy="no-referrer"),Zl.fetch()(await tu(t,t.config.apiHost,n,l),f)})}async function eu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hg),e);try{const i=new Gg(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw vr(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[d,f]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw vr(t,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw vr(t,"email-already-in-use",a);if(d==="USER_DISABLED")throw vr(t,"user-disabled",a);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Yi(t,y,f);Ce(t,y)}}catch(i){if(i instanceof qe)throw i;Ce(t,"network-request-failed",{message:String(i)})}}async function Kn(t,e,n,r,i={}){const o=await Xe(t,e,n,r,i);return"mfaPendingCredential"in o&&Ce(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function tu(t,e,n,r){const i=`${e}${n}?${r}`,o=t,a=o.config.emulator?Qi(t.config,i):`${t.config.apiScheme}://${i}`;return Wg.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function Kg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),zg.get())})}}function vr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Me(t,e,r);return i.customData._tokenResponse=n,i}function za(t){return t!==void 0&&t.enterprise!==void 0}class qg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Xg(t,e){return Xe(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
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
 */async function Yg(t,e){return Xe(t,"POST","/v1/accounts:delete",e)}async function Fr(t,e){return Xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jg(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Zi(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nn(qs(i.auth_time)),issuedAtTime:Nn(qs(i.iat)),expirationTime:Nn(qs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function qs(t){return Number(t)*1e3}function Zi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const i=$l(n);return i?JSON.parse(i):(Sr("Failed to decode base64 JWT payload"),null)}catch(i){return Sr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ka(t){const e=Zi(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qe&&Qg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ti{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ur(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cn(t,Fr(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?nu(o.providerUserInfo):[],l=tv(t.providerData,a),d=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),y=d?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ti(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(t,g)}async function ev(t){const e=Pe(t);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nu(t){return t.map(e=>{var{providerId:n}=e,r=Wn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nv(t,e){const n=await eu(t,{},async()=>{const r=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await tu(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Zl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rv(t,e){return Xe(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
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
 */class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ka(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Ka(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await nv(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new nn;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function vt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Wn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ti(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await cn(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jg(this,e)}reload(){return ev(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ge(this.auth.app))return Promise.reject(He(this.auth));const e=await this.getIdToken();return await cn(this,Yg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,a,l,d,f,y;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,T=(i=n.email)!==null&&i!==void 0?i:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,I=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,N=(f=n.createdAt)!==null&&f!==void 0?f:void 0,M=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:O,emailVerified:D,isAnonymous:L,providerData:F,stsTokenManager:E}=n;V(O&&E,e,"internal-error");const v=nn.fromJSON(this.name,E);V(typeof O=="string",e,"internal-error"),vt(g,e.name),vt(T,e.name),V(typeof D=="boolean",e,"internal-error"),V(typeof L=="boolean",e,"internal-error"),vt(S,e.name),vt(C,e.name),vt(I,e.name),vt(x,e.name),vt(N,e.name),vt(M,e.name);const _=new Ne({uid:O,auth:e,email:T,emailVerified:D,displayName:g,isAnonymous:L,photoURL:C,phoneNumber:S,tenantId:I,stsTokenManager:v,createdAt:N,lastLoginAt:M});return F&&Array.isArray(F)&&(_.providerData=F.map(b=>Object.assign({},b))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new nn;i.updateFromServerResponse(n);const o=new Ne({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ur(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?nu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new nn;l.updateFromIdToken(r);const d=new Ne({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ti(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
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
 */const Ga=new Map;function it(t){ct(t instanceof Function,"Expected a class definition");let e=Ga.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ga.set(t,e),e)}/**
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
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ru.type="NONE";const qa=ru;/**
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
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Rr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Rr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fr(this.auth,{idToken:e}).catch(()=>{});return n?Ne._fromGetAccountInfoResponse(this.auth,n,e):null}return Ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(it(qa),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||it(qa);const a=Rr(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const y=await f._get(a);if(y){let g;if(typeof y=="string"){const T=await Fr(e,{idToken:y}).catch(()=>{});if(!T)break;g=await Ne._fromGetAccountInfoResponse(e,T,y)}else g=Ne._fromJSON(e,y);f!==o&&(l=g),o=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new rn(o,e,r):(o=d[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new rn(o,e,r))}}/**
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
 */function Xa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lu(e))return"Blackberry";if(uu(e))return"Webos";if(iu(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function su(t=ve()){return/firefox\//i.test(t)}function iu(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(t=ve()){return/crios\//i.test(t)}function au(t=ve()){return/iemobile/i.test(t)}function cu(t=ve()){return/android/i.test(t)}function lu(t=ve()){return/blackberry/i.test(t)}function uu(t=ve()){return/webos/i.test(t)}function eo(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sv(t=ve()){var e;return eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iv(){return gm()&&document.documentMode===10}function du(t=ve()){return eo(t)||cu(t)||uu(t)||lu(t)||/windows phone/i.test(t)||au(t)}/**
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
 */function hu(t,e=[]){let n;switch(t){case"Browser":n=Xa(ve());break;case"Worker":n=`${Xa(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bt}/${r}`}/**
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
 */class ov{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const d=e(o);a(d)}catch(d){l(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function av(t,e={}){return Xe(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
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
 */const cv=6;class lv{constructor(e){var n,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:cv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,a,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class uv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ya(this),this.idTokenSubscription=new Ya(this),this.beforeStateQueue=new ov(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ql,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fr(this,{idToken:e}),r=await Ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ge(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&(d!=null&&d.user)&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ur(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ge(this.app))return Promise.reject(He(this));const n=e?Pe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ge(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ge(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await av(this),n=new lv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ht(t){return Pe(t)}class Ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=bm(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dv(t){ss=t}function fu(t){return ss.loadJS(t)}function hv(){return ss.recaptchaEnterpriseScript}function fv(){return ss.gapiScript}function pv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mv{constructor(){this.enterprise=new gv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vv="recaptcha-enterprise",pu="NO_RECAPTCHA";class yv{constructor(e){this.type=vv,this.auth=ht(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Xg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new qg(d);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(d=>{l(d)})})}function i(o,a,l){const d=window.grecaptcha;za(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(pu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mv().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&za(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=hv();d.length!==0&&(d+=l),fu(d).then(()=>{i(l,o,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function Ja(t,e,n,r=!1,i=!1){const o=new yv(t);let a;if(i)a=pu;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function $r(t,e,n,r,i){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ja(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ja(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
 */function _v(t,e){const n=rs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Lt(o,e??{}))return i;Ce(i,"already-initialized")}return n.initialize({options:e})}function wv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ev(t,e,n){const r=ht(t);V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=mu(e),{host:a,port:l}=Tv(e),d=l===null?"":`:${l}`,f={url:`${o}//${a}${d}/`},y=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(Lt(f,r.config.emulator)&&Lt(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,bv()}function mu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tv(t){const e=mu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Qa(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Qa(a)}}}function Qa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function Iv(t,e){return Xe(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xv(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function Av(t,e){return Xe(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function Sv(t,e){return Av(t,e)}/**
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
 */async function Rv(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function Cv(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
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
 */class Ln extends to{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ln(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ln(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,n,"signInWithPassword",xv);case"emailLink":return Rv(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,r,"signUpPassword",Iv);case"emailLink":return Cv(e,{idToken:n,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sn(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
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
 */const Pv="http://localhost";class Ft extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Wn(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ft(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:Pv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hn(n)}return e}}/**
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
 */function kv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nv(t){const e=Rn(Cn(t)).link,n=e?Rn(Cn(e)).deep_link_id:null,r=Rn(Cn(t)).deep_link_id;return(r?Rn(Cn(r)).link:null)||r||n||e||t}class is{constructor(e){var n,r,i,o,a,l;const d=Rn(Cn(e)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,y=(r=d.oobCode)!==null&&r!==void 0?r:null,g=kv((i=d.mode)!==null&&i!==void 0?i:null);V(f&&y&&g,"argument-error"),this.apiKey=f,this.operation=g,this.code=y,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=d.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=d.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Nv(e);try{return new is(n)}catch{return null}}}/**
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
 */class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(e,n){return Ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=is.parseLink(n);return V(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}Ht.PROVIDER_ID="password";Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class no{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gn extends no{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Gn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Et extends Gn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class Tt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */async function Ov(t,e){return Kn(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Ne._fromIdTokenResponse(e,r,i),a=Za(r);return new Ut({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Za(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Za(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vr extends qe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vr(e,n,r,i)}}function gu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(t,o,e,r):o})}async function Dv(t,e,n=!1){const r=await cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ut._forOperation(t,"link",r)}/**
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
 */async function Mv(t,e,n=!1){const{auth:r}=t;if(ge(r.app))return Promise.reject(He(r));const i="reauthenticate";try{const o=await cn(t,gu(r,i,e,t),n);V(o.idToken,r,"internal-error");const a=Zi(o.idToken);V(a,r,"internal-error");const{sub:l}=a;return V(t.uid===l,r,"user-mismatch"),Ut._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),o}}/**
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
 */async function vu(t,e,n=!1){if(ge(t.app))return Promise.reject(He(t));const r="signIn",i=await gu(t,r,e),o=await Ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function yu(t,e){return vu(ht(t),e)}/**
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
 */function Lv(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),V(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function _u(t){const e=ht(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jv(t,e,n){if(ge(t.app))return Promise.reject(He(t));const r=ht(t),a=await $r(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ov).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&_u(t),d}),l=await Ut._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Fv(t,e,n){return ge(t.app)?Promise.reject(He(t)):yu(Pe(t),Ht.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_u(t),r})}/**
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
 */async function Uv(t,e,n){const r=ht(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){V(l.handleCodeInApp,r,"argument-error"),l&&Lv(r,a,l)}o(i,n),await $r(r,i,"getOobCode",Sv)}function $v(t,e){const n=is.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Vv(t,e,n){if(ge(t.app))return Promise.reject(He(t));const r=Pe(t),i=Ht.credentialWithLink(e,n||jr());return V(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),yu(r,i)}/**
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
 */async function Bv(t,e){return Xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Hv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await cn(r,Bv(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Wv(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function zv(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function Kv(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function Gv(t){return Pe(t).signOut()}const Br="__sak";/**
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
 */class wu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Br,"1"),this.storage.removeItem(Br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qv=1e3,Xv=10;class Eu extends wu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,d)=>{this.notifyListeners(a,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);iv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xv):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eu.type="LOCAL";const Yv=Eu;/**
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
 */class Tu extends wu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tu.type="SESSION";const bu=Tu;/**
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
 */function Jv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(n.origin,o)),d=await Jv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function ro(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,d)=>{const f=ro("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const T=g;if(T.data.eventId===f)switch(T.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(T.data.response);break;default:clearTimeout(y),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function We(){return window}function Zv(t){We().location.href=t}/**
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
 */function Iu(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ny(){return Iu()?self:null}/**
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
 */const xu="firebaseLocalStorageDb",ry=1,Hr="firebaseLocalStorage",Au="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Hr],e?"readwrite":"readonly").objectStore(Hr)}function sy(){const t=indexedDB.deleteDatabase(xu);return new qn(t).toPromise()}function bi(){const t=indexedDB.open(xu,ry);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hr,{keyPath:Au})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hr)?e(r):(r.close(),await sy(),e(await bi()))})})}async function ec(t,e,n){const r=as(t,!0).put({[Au]:e,value:n});return new qn(r).toPromise()}async function iy(t,e){const n=as(t,!1).get(e),r=await new qn(n).toPromise();return r===void 0?null:r.value}function tc(t,e){const n=as(t,!0).delete(e);return new qn(n).toPromise()}const oy=800,ay=3;class Su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ay)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(ny()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ey(),!this.activeServiceWorker)return;this.sender=new Qv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bi();return await ec(e,Br,"1"),await tc(e,Br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ec(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=as(i,!1).getAll();return new qn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Su.type="LOCAL";const cy=Su;new zn(3e4,6e4);/**
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
 */function Ru(t,e){return e?it(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class so extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ly(t){return vu(t.auth,new so(t),t.bypassAuthState)}function uy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Mv(n,new so(t),t.bypassAuthState)}async function dy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Dv(n,new so(t),t.bypassAuthState)}/**
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
 */class Cu{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ly;case"linkViaPopup":case"linkViaRedirect":return dy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:Ce(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hy=new zn(2e3,1e4);async function fy(t,e,n){if(ge(t.app))return Promise.reject(Me(t,"operation-not-supported-in-this-environment"));const r=ht(t);Ug(t,e,no);const i=Ru(r,n);return new Mt(r,"signInViaPopup",e,i).executeNotNull()}class Mt extends Cu{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hy.get())};e()}}Mt.currentPopupAction=null;/**
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
 */const py="pendingRedirect",Cr=new Map;class my extends Cu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const r=await gy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gy(t,e){const n=_y(e),r=yy(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vy(t,e){Cr.set(t._key(),e)}function yy(t){return it(t._redirectPersistence)}function _y(t){return Rr(py,t.config.apiKey,t.name)}async function wy(t,e,n=!1){if(ge(t.app))return Promise.reject(He(t));const r=ht(t),i=Ru(r,e),a=await new my(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Ey=10*60*1e3;class Ty{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!by(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ey&&this.cachedEventUids.clear(),this.cachedEventUids.has(nc(e))}saveEventToCache(e){this.cachedEventUids.add(nc(e)),this.lastProcessedEventTime=Date.now()}}function nc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function by(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pu(t);default:return!1}}/**
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
 */async function Iy(t,e={}){return Xe(t,"GET","/v1/projects",e)}/**
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
 */const xy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ay=/^https?/;async function Sy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Iy(t);for(const n of e)try{if(Ry(n))return}catch{}Ce(t,"unauthorized-domain")}function Ry(t){const e=jr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ay.test(n))return!1;if(xy.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Cy=new zn(3e4,6e4);function rc(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Py(t){return new Promise((e,n)=>{var r,i,o;function a(){rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rc(),n(Me(t,"network-request-failed"))},timeout:Cy.get()})}if(!((i=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=We().gapi)===null||o===void 0)&&o.load)a();else{const l=pv("iframefcb");return We()[l]=()=>{gapi.load?a():n(Me(t,"network-request-failed"))},fu(`${fv()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw Pr=null,e})}let Pr=null;function ky(t){return Pr=Pr||Py(t),Pr}/**
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
 */const Ny=new zn(5e3,15e3),Oy="__/auth/iframe",Dy="emulator/auth/iframe",My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jy(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,Dy):`https://${t.config.authDomain}/${Oy}`,r={apiKey:e.apiKey,appName:t.name,v:Bt},i=Ly.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Hn(r).slice(1)}`}async function Fy(t){const e=await ky(t),n=We().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:jy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Me(t,"network-request-failed"),l=We().setTimeout(()=>{o(a)},Ny.get());function d(){We().clearTimeout(l),i(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const Uy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$y=500,Vy=600,By="_blank",Hy="http://localhost";class sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wy(t,e,n,r=$y,i=Vy){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},Uy),{width:r.toString(),height:i.toString(),top:o,left:a}),f=ve().toLowerCase();n&&(l=ou(f)?By:n),su(f)&&(e=e||Hy,d.scrollbars="yes");const y=Object.entries(d).reduce((T,[S,C])=>`${T}${S}=${C},`,"");if(sv(f)&&l!=="_self")return zy(e||"",l),new sc(null);const g=window.open(e||"",l,y);V(g,t,"popup-blocked");try{g.focus()}catch{}return new sc(g)}function zy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ky="__/auth/handler",Gy="emulator/auth/handler",qy=encodeURIComponent("fac");async function ic(t,e,n,r,i,o){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bt,eventId:i};if(e instanceof no){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Tm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,g]of Object.entries({}))a[y]=g}if(e instanceof Gn){const y=e.getScopes().filter(g=>g!=="");y.length>0&&(a.scopes=y.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const y of Object.keys(l))l[y]===void 0&&delete l[y];const d=await t._getAppCheckToken(),f=d?`#${qy}=${encodeURIComponent(d)}`:"";return`${Xy(t)}?${Hn(l).slice(1)}${f}`}function Xy({config:t}){return t.emulator?Qi(t,Gy):`https://${t.authDomain}/${Ky}`}/**
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
 */const Xs="webStorageSupport";class Yy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bu,this._completeRedirectFn=wy,this._overrideRedirectResult=vy}async _openPopup(e,n,r,i){var o;ct((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ic(e,n,r,jr(),i);return Wy(e,a,ro())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await ic(e,n,r,jr(),i);return Zv(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fy(e),r=new Ty(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xs,{type:Xs},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Xs];a!==void 0&&n(!!a),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return du()||iu()||eo()}}const Jy=Yy;var oc="@firebase/auth",ac="1.10.1";/**
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
 */class Qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function e_(t){jt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hu(t)},f=new uv(r,i,o,d);return wv(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jt(new xt("auth-internal",e=>{const n=ht(e.getProvider("auth").getImmediate());return(r=>new Qy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(oc,ac,Zy(t)),Be(oc,ac,"esm2017")}/**
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
 */const t_=5*60,n_=Wl("authIdTokenMaxAge")||t_;let cc=null;const r_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>n_)return;const i=n==null?void 0:n.token;cc!==i&&(cc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s_(t=Xi()){const e=rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_v(t,{popupRedirectResolver:Jy,persistence:[cy,Yv,bu]}),r=Wl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=r_(o.toString());zv(n,a,()=>a(n.currentUser)),Wv(n,l=>a(l))}}const i=Vl("auth");return i&&Ev(n,`http://${i}`),n}function i_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Me("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",i_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});e_("Browser");var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ku;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function _(){}_.prototype=v.prototype,E.D=v.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(b,A,R){for(var w=Array(arguments.length-2),$=2;$<arguments.length;$++)w[$-2]=arguments[$];return v.prototype[A].apply(b,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,_){_||(_=0);var b=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)b[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)b[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=E.g[0],_=E.g[1],A=E.g[2];var R=E.g[3],w=v+(R^_&(A^R))+b[0]+3614090360&4294967295;v=_+(w<<7&4294967295|w>>>25),w=R+(A^v&(_^A))+b[1]+3905402710&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(_^R&(v^_))+b[2]+606105819&4294967295,A=R+(w<<17&4294967295|w>>>15),w=_+(v^A&(R^v))+b[3]+3250441966&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(R^_&(A^R))+b[4]+4118548399&4294967295,v=_+(w<<7&4294967295|w>>>25),w=R+(A^v&(_^A))+b[5]+1200080426&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(_^R&(v^_))+b[6]+2821735955&4294967295,A=R+(w<<17&4294967295|w>>>15),w=_+(v^A&(R^v))+b[7]+4249261313&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(R^_&(A^R))+b[8]+1770035416&4294967295,v=_+(w<<7&4294967295|w>>>25),w=R+(A^v&(_^A))+b[9]+2336552879&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(_^R&(v^_))+b[10]+4294925233&4294967295,A=R+(w<<17&4294967295|w>>>15),w=_+(v^A&(R^v))+b[11]+2304563134&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(R^_&(A^R))+b[12]+1804603682&4294967295,v=_+(w<<7&4294967295|w>>>25),w=R+(A^v&(_^A))+b[13]+4254626195&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(_^R&(v^_))+b[14]+2792965006&4294967295,A=R+(w<<17&4294967295|w>>>15),w=_+(v^A&(R^v))+b[15]+1236535329&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(A^R&(_^A))+b[1]+4129170786&4294967295,v=_+(w<<5&4294967295|w>>>27),w=R+(_^A&(v^_))+b[6]+3225465664&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(R^v))+b[11]+643717713&4294967295,A=R+(w<<14&4294967295|w>>>18),w=_+(R^v&(A^R))+b[0]+3921069994&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(_^A))+b[5]+3593408605&4294967295,v=_+(w<<5&4294967295|w>>>27),w=R+(_^A&(v^_))+b[10]+38016083&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(R^v))+b[15]+3634488961&4294967295,A=R+(w<<14&4294967295|w>>>18),w=_+(R^v&(A^R))+b[4]+3889429448&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(_^A))+b[9]+568446438&4294967295,v=_+(w<<5&4294967295|w>>>27),w=R+(_^A&(v^_))+b[14]+3275163606&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(R^v))+b[3]+4107603335&4294967295,A=R+(w<<14&4294967295|w>>>18),w=_+(R^v&(A^R))+b[8]+1163531501&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(_^A))+b[13]+2850285829&4294967295,v=_+(w<<5&4294967295|w>>>27),w=R+(_^A&(v^_))+b[2]+4243563512&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(R^v))+b[7]+1735328473&4294967295,A=R+(w<<14&4294967295|w>>>18),w=_+(R^v&(A^R))+b[12]+2368359562&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(_^A^R)+b[5]+4294588738&4294967295,v=_+(w<<4&4294967295|w>>>28),w=R+(v^_^A)+b[8]+2272392833&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^_)+b[11]+1839030562&4294967295,A=R+(w<<16&4294967295|w>>>16),w=_+(A^R^v)+b[14]+4259657740&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^R)+b[1]+2763975236&4294967295,v=_+(w<<4&4294967295|w>>>28),w=R+(v^_^A)+b[4]+1272893353&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^_)+b[7]+4139469664&4294967295,A=R+(w<<16&4294967295|w>>>16),w=_+(A^R^v)+b[10]+3200236656&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^R)+b[13]+681279174&4294967295,v=_+(w<<4&4294967295|w>>>28),w=R+(v^_^A)+b[0]+3936430074&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^_)+b[3]+3572445317&4294967295,A=R+(w<<16&4294967295|w>>>16),w=_+(A^R^v)+b[6]+76029189&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^R)+b[9]+3654602809&4294967295,v=_+(w<<4&4294967295|w>>>28),w=R+(v^_^A)+b[12]+3873151461&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^_)+b[15]+530742520&4294967295,A=R+(w<<16&4294967295|w>>>16),w=_+(A^R^v)+b[2]+3299628645&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(A^(_|~R))+b[0]+4096336452&4294967295,v=_+(w<<6&4294967295|w>>>26),w=R+(_^(v|~A))+b[7]+1126891415&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~_))+b[14]+2878612391&4294967295,A=R+(w<<15&4294967295|w>>>17),w=_+(R^(A|~v))+b[5]+4237533241&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~R))+b[12]+1700485571&4294967295,v=_+(w<<6&4294967295|w>>>26),w=R+(_^(v|~A))+b[3]+2399980690&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~_))+b[10]+4293915773&4294967295,A=R+(w<<15&4294967295|w>>>17),w=_+(R^(A|~v))+b[1]+2240044497&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~R))+b[8]+1873313359&4294967295,v=_+(w<<6&4294967295|w>>>26),w=R+(_^(v|~A))+b[15]+4264355552&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~_))+b[6]+2734768916&4294967295,A=R+(w<<15&4294967295|w>>>17),w=_+(R^(A|~v))+b[13]+1309151649&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~R))+b[4]+4149444226&4294967295,v=_+(w<<6&4294967295|w>>>26),w=R+(_^(v|~A))+b[11]+3174756917&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~_))+b[2]+718787259&4294967295,A=R+(w<<15&4294967295|w>>>17),w=_+(R^(A|~v))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var _=v-this.blockSize,b=this.B,A=this.h,R=0;R<v;){if(A==0)for(;R<=_;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<v;)if(b[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,b),A=0;break}}else for(;R<v;)if(b[A++]=E[R++],A==this.blockSize){i(this,b),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var _=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.u(E),E=Array(16),v=_=0;4>v;++v)for(var b=0;32>b;b+=8)E[_++]=this.g[v]>>>b&255;return E};function o(E,v){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=v(E)}function a(E,v){this.h=v;for(var _=[],b=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;b&&R==v||(_[A]=R,b=!1)}this.g=_}var l={};function d(E){return-128<=E&&128>E?o(E,function(v){return new a([v|0],0>v?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return x(f(-E));for(var v=[],_=1,b=0;E>=_;b++)v[b]=E/_|0,_*=4294967296;return new a(v,0)}function y(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return x(y(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(v,8)),b=g,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),w=parseInt(E.substring(A,A+R),v);8>R?(R=f(Math.pow(v,R)),b=b.j(R).add(f(w))):(b=b.j(_),b=b.add(f(w)))}return b}var g=d(0),T=d(1),S=d(16777216);t=a.prototype,t.m=function(){if(I(this))return-x(this).m();for(var E=0,v=1,_=0;_<this.g.length;_++){var b=this.i(_);E+=(0<=b?b:4294967296+b)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(I(this))return"-"+x(this).toString(E);for(var v=f(Math.pow(E,6)),_=this,b="";;){var A=D(_,v).g;_=N(_,A.j(v));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,C(_))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function I(E){return E.h==-1}t.l=function(E){return E=N(this,E),I(E)?-1:C(E)?0:1};function x(E){for(var v=E.g.length,_=[],b=0;b<v;b++)_[b]=~E.g[b];return new a(_,~E.h).add(T)}t.abs=function(){return I(this)?x(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],b=0,A=0;A<=v;A++){var R=b+(this.i(A)&65535)+(E.i(A)&65535),w=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);b=w>>>16,R&=65535,w&=65535,_[A]=w<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function N(E,v){return E.add(x(v))}t.j=function(E){if(C(this)||C(E))return g;if(I(this))return I(E)?x(this).j(x(E)):x(x(this).j(E));if(I(E))return x(this.j(x(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var v=this.g.length+E.g.length,_=[],b=0;b<2*v;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<E.g.length;A++){var R=this.i(b)>>>16,w=this.i(b)&65535,$=E.i(A)>>>16,W=E.i(A)&65535;_[2*b+2*A]+=w*W,M(_,2*b+2*A),_[2*b+2*A+1]+=R*W,M(_,2*b+2*A+1),_[2*b+2*A+1]+=w*$,M(_,2*b+2*A+1),_[2*b+2*A+2]+=R*$,M(_,2*b+2*A+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new a(_,0)};function M(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function O(E,v){this.g=E,this.h=v}function D(E,v){if(C(v))throw Error("division by zero");if(C(E))return new O(g,g);if(I(E))return v=D(x(E),v),new O(x(v.g),x(v.h));if(I(v))return v=D(E,x(v)),new O(x(v.g),v.h);if(30<E.g.length){if(I(E)||I(v))throw Error("slowDivide_ only works with positive integers.");for(var _=T,b=v;0>=b.l(E);)_=L(_),b=L(b);var A=F(_,1),R=F(b,1);for(b=F(b,2),_=F(_,2);!C(b);){var w=R.add(b);0>=w.l(E)&&(A=A.add(_),R=w),b=F(b,1),_=F(_,1)}return v=N(E,A.j(v)),new O(A,v)}for(A=g;0<=E.l(v);){for(_=Math.max(1,Math.floor(E.m()/v.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=f(_),w=R.j(v);I(w)||0<w.l(E);)_-=b,R=f(_),w=R.j(v);C(R)&&(R=T),A=A.add(R),E=N(E,w)}return new O(A,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)&E.i(b);return new a(_,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)|E.i(b);return new a(_,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)^E.i(b);return new a(_,this.h^E.h)};function L(E){for(var v=E.g.length+1,_=[],b=0;b<v;b++)_[b]=E.i(b)<<1|E.i(b-1)>>>31;return new a(_,E.h)}function F(E,v){var _=v>>5;v%=32;for(var b=E.g.length-_,A=[],R=0;R<b;R++)A[R]=0<v?E.i(R+_)>>>v|E.i(R+_+1)<<32-v:E.i(R+_);return new a(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=y,ku=a}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof yr=="object"&&yr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var m=0;m<s.length-1;m++){var P=s[m];if(!(P in u))break e;u=u[P]}s=s[s.length-1],m=u[s],c=c(m),c!=m&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,m=!1,P={next:function(){if(!m&&u<s.length){var k=u++;return{value:c(k,s[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function f(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function y(s,c,u){return s.call.apply(s.bind,arguments)}function g(s,c,u){if(!s)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),s.apply(c,P)}}return function(){return s.apply(c,arguments)}}function T(s,c,u){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:g,T.apply(null,arguments)}function S(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var m=u.slice();return m.push.apply(m,arguments),s.apply(this,m)}}function C(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(m,P,k){for(var j=Array(arguments.length-2),te=2;te<arguments.length;te++)j[te-2]=arguments[te];return c.prototype[P].apply(m,j)}}function I(s){const c=s.length;if(0<c){const u=Array(c);for(let m=0;m<c;m++)u[m]=s[m];return u}return[]}function x(s,c){for(let u=1;u<arguments.length;u++){const m=arguments[u];if(d(m)){const P=s.length||0,k=m.length||0;s.length=P+k;for(let j=0;j<k;j++)s[P+j]=m[j]}else s.push(m)}}class N{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(s){return/^[\s\xa0]*$/.test(s)}function O(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function D(s){return D[" "](s),s}D[" "]=function(){};var L=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function F(s,c,u){for(const m in s)c.call(u,s[m],m,s)}function E(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function v(s){const c={};for(const u in s)c[u]=s[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(s,c){let u,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(u in m)s[u]=m[u];for(let k=0;k<_.length;k++)u=_[k],Object.prototype.hasOwnProperty.call(m,u)&&(s[u]=m[u])}}function A(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function R(s){l.setTimeout(()=>{throw s},0)}function w(){var s=U;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,u){const m=W.get();m.set(c,u),this.h?this.h.next=m:this.g=m,this.h=m}}var W=new N(()=>new G,s=>s.reset());class G{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,B=!1,U=new $,X=()=>{const s=l.Promise.resolve(void 0);Q=()=>{s.then(oe)}};var oe=()=>{for(var s;s=w();){try{s.h.call(s.g)}catch(u){R(u)}var c=W;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}B=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function Ue(s,c){if(ee.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,m=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(L){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Qe[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ue.aa.h.call(this)}}C(Ue,ee);var Qe={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),Rt=0;function we(s,c,u,m,P){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!m,this.ha=P,this.key=++Rt,this.da=this.fa=!1}function $e(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Ct(s){this.src=s,this.g={},this.h=0}Ct.prototype.add=function(s,c,u,m,P){var k=s.toString();s=this.g[k],s||(s=this.g[k]=[],this.h++);var j=Ze(s,c,m,P);return-1<j?(c=s[j],u||(c.fa=!1)):(c=new we(c,this.src,k,!!m,P),c.fa=u,s.push(c)),c};function Kt(s,c){var u=c.type;if(u in s.g){var m=s.g[u],P=Array.prototype.indexOf.call(m,c,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&($e(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Ze(s,c,u,m){for(var P=0;P<s.length;++P){var k=s[P];if(!k.da&&k.listener==c&&k.capture==!!u&&k.ha==m)return P}return-1}var Gt="closure_lm_"+(1e6*Math.random()|0),pn={};function er(s,c,u,m,P){if(Array.isArray(c)){for(var k=0;k<c.length;k++)er(s,c[k],u,m,P);return null}return u=Co(u),s&&s[_e]?s.K(c,u,f(m)?!!m.capture:!1,P):ms(s,c,u,!1,m,P)}function ms(s,c,u,m,P,k){if(!c)throw Error("Invalid event type");var j=f(P)?!!P.capture:!!P,te=ys(s);if(te||(s[Gt]=te=new Ct(s)),u=te.add(c,u,m,j,k),u.proxy)return u;if(m=gs(),u.proxy=m,m.src=s,m.listener=u,s.addEventListener)Fe||(P=j),P===void 0&&(P=!1),s.addEventListener(c.toString(),m,P);else if(s.attachEvent)s.attachEvent(Ro(c.toString()),m);else if(s.addListener&&s.removeListener)s.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return u}function gs(){function s(u){return c.call(s.src,s.listener,u)}const c=Hh;return s}function Pt(s,c,u,m,P){if(Array.isArray(c))for(var k=0;k<c.length;k++)Pt(s,c[k],u,m,P);else m=f(m)?!!m.capture:!!m,u=Co(u),s&&s[_e]?(s=s.i,c=String(c).toString(),c in s.g&&(k=s.g[c],u=Ze(k,u,m,P),-1<u&&($e(k[u]),Array.prototype.splice.call(k,u,1),k.length==0&&(delete s.g[c],s.h--)))):s&&(s=ys(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ze(c,u,m,P)),(u=-1<s?c[s]:null)&&vs(u))}function vs(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[_e])Kt(c.i,s);else{var u=s.type,m=s.proxy;c.removeEventListener?c.removeEventListener(u,m,s.capture):c.detachEvent?c.detachEvent(Ro(u),m):c.addListener&&c.removeListener&&c.removeListener(m),(u=ys(c))?(Kt(u,s),u.h==0&&(u.src=null,c[Gt]=null)):$e(s)}}}function Ro(s){return s in pn?pn[s]:pn[s]="on"+s}function Hh(s,c){if(s.da)s=!0;else{c=new Ue(c,this);var u=s.listener,m=s.ha||s.src;s.fa&&vs(s),s=u.call(m,c)}return s}function ys(s){return s=s[Gt],s instanceof Ct?s:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(s){return typeof s=="function"?s:(s[_s]||(s[_s]=function(c){return s.handleEvent(c)}),s[_s])}function le(){se.call(this),this.i=new Ct(this),this.M=this,this.F=null}C(le,se),le.prototype[_e]=!0,le.prototype.removeEventListener=function(s,c,u,m){Pt(this,s,c,u,m)};function fe(s,c){var u,m=s.F;if(m)for(u=[];m;m=m.F)u.push(m);if(s=s.M,m=c.type||c,typeof c=="string")c=new ee(c,s);else if(c instanceof ee)c.target=c.target||s;else{var P=c;c=new ee(m,s),b(c,P)}if(P=!0,u)for(var k=u.length-1;0<=k;k--){var j=c.g=u[k];P=tr(j,m,!0,c)&&P}if(j=c.g=s,P=tr(j,m,!0,c)&&P,P=tr(j,m,!1,c)&&P,u)for(k=0;k<u.length;k++)j=c.g=u[k],P=tr(j,m,!1,c)&&P}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],m=0;m<u.length;m++)$e(u[m]);delete s.g[c],s.h--}}this.F=null},le.prototype.K=function(s,c,u,m){return this.i.add(String(s),c,!1,u,m)},le.prototype.L=function(s,c,u,m){return this.i.add(String(s),c,!0,u,m)};function tr(s,c,u,m){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,k=0;k<c.length;++k){var j=c[k];if(j&&!j.da&&j.capture==u){var te=j.listener,ce=j.ha||j.src;j.fa&&Kt(s.i,j),P=te.call(ce,m)!==!1&&P}}return P&&!m.defaultPrevented}function Po(s,c,u){if(typeof s=="function")u&&(s=T(s,u));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function ko(s){s.g=Po(()=>{s.g=null,s.i&&(s.i=!1,ko(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Wh extends se{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(s){se.call(this),this.h=s,this.g={}}C(mn,se);var No=[];function Oo(s){F(s.g,function(c,u){this.g.hasOwnProperty(u)&&vs(c)},s),s.g={}}mn.prototype.N=function(){mn.aa.N.call(this),Oo(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ws=l.JSON.stringify,zh=l.JSON.parse,Kh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Es(){}Es.prototype.h=null;function Do(s){return s.h||(s.h=s.i())}function Gh(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ts(){ee.call(this,"d")}C(Ts,ee);function bs(){ee.call(this,"c")}C(bs,ee);var qt={},Mo=null;function Is(){return Mo=Mo||new le}qt.La="serverreachability";function Lo(s){ee.call(this,qt.La,s)}C(Lo,ee);function vn(s){const c=Is();fe(c,new Lo(c))}qt.STAT_EVENT="statevent";function jo(s,c){ee.call(this,qt.STAT_EVENT,s),this.stat=c}C(jo,ee);function pe(s){const c=Is();fe(c,new jo(c,s))}qt.Ma="timingevent";function Fo(s,c){ee.call(this,qt.Ma,s),this.size=c}C(Fo,ee);function yn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function qh(s,c,u,m,P,k){s.info(function(){if(s.g)if(k)for(var j="",te=k.split("&"),ce=0;ce<te.length;ce++){var J=te[ce].split("=");if(1<J.length){var ue=J[0];J=J[1];var de=ue.split("_");j=2<=de.length&&de[1]=="type"?j+(ue+"="+J+"&"):j+(ue+"=redacted&")}}else j=null;else j=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+u+`
`+j})}function Xh(s,c,u,m,P,k,j){s.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+u+`
`+k+" "+j})}function Xt(s,c,u,m){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jh(s,u)+(m?" "+m:"")})}function Yh(s,c){s.info(function(){return"TIMEOUT: "+c})}_n.prototype.info=function(){};function Jh(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var m=u[s];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return ws(u)}catch{return c}}var xs={NO_ERROR:0,TIMEOUT:8},Qh={},As;function nr(){}C(nr,Es),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},As=new nr;function pt(s,c,u,m){this.j=s,this.i=c,this.l=u,this.R=m||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uo}function Uo(){this.i=null,this.g="",this.h=!1}var $o={},Ss={};function Rs(s,c,u){s.L=1,s.v=or(et(c)),s.m=u,s.P=!0,Vo(s,null)}function Vo(s,c){s.F=Date.now(),rr(s),s.A=et(s.v);var u=s.A,m=s.R;Array.isArray(m)||(m=[String(m)]),ta(u.i,"t",m),s.C=0,u=s.j.J,s.h=new Uo,s.g=_a(s.j,u?c:null,!s.m),0<s.O&&(s.M=new Wh(T(s.Y,s,s.g),s.O)),c=s.U,u=s.g,m=s.ca;var P="readystatechange";Array.isArray(P)||(P&&(No[0]=P.toString()),P=No);for(var k=0;k<P.length;k++){var j=er(u,P[k],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=s.H?v(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),vn(),qh(s.i,s.u,s.A,s.l,s.R,s.m)}pt.prototype.ca=function(s){s=s.target;const c=this.M;c&&tt(s)==3?c.j():this.Y(s)},pt.prototype.Y=function(s){try{if(s==this.g)e:{const de=tt(this.g);var c=this.g.Ba();const Qt=this.g.Z();if(!(3>de)&&(de!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||de!=4||c==7||(c==8||0>=Qt?vn(3):vn(2)),Cs(this);var u=this.g.Z();this.X=u;t:if(Bo(this)){var m=ca(this.g);s="";var P=m.length,k=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),wn(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,s+=this.h.i.decode(m[c],{stream:!(k&&c==P-1)});m.length=0,this.h.g+=s,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,Xh(this.i,this.u,this.A,this.l,this.R,de,u),this.o){if(this.T&&!this.K){t:{if(this.g){var te,ce=this.g;if((te=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(te)){var J=te;break t}}J=null}if(u=J)Xt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ps(this,u);else{this.o=!1,this.s=3,pe(12),kt(this),wn(this);break e}}if(this.P){u=!0;let ke;for(;!this.J&&this.C<j.length;)if(ke=Zh(this,j),ke==Ss){de==4&&(this.s=4,pe(14),u=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==$o){this.s=4,pe(15),Xt(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Xt(this.i,this.l,ke,null),Ps(this,ke);if(Bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||j.length!=0||this.h.h||(this.s=1,pe(16),u=!1),this.o=this.o&&u,!u)Xt(this.i,this.l,j,"[Invalid Chunked Response]"),kt(this),wn(this);else if(0<j.length&&!this.W){this.W=!0;var ue=this.j;ue.g==this&&ue.ba&&!ue.M&&(ue.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ls(ue),ue.M=!0,pe(11))}}else Xt(this.i,this.l,j,null),Ps(this,j);de==4&&kt(this),this.o&&!this.J&&(de==4?ma(this.j,this):(this.o=!1,rr(this)))}else vf(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,pe(12)):(this.s=0,pe(13)),kt(this),wn(this)}}}catch{}finally{}};function Bo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Zh(s,c){var u=s.C,m=c.indexOf(`
`,u);return m==-1?Ss:(u=Number(c.substring(u,m)),isNaN(u)?$o:(m+=1,m+u>c.length?Ss:(c=c.slice(m,m+u),s.C=m+u,c)))}pt.prototype.cancel=function(){this.J=!0,kt(this)};function rr(s){s.S=Date.now()+s.I,Ho(s,s.I)}function Ho(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=yn(T(s.ba,s),c)}function Cs(s){s.B&&(l.clearTimeout(s.B),s.B=null)}pt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Yh(this.i,this.A),this.L!=2&&(vn(),pe(17)),kt(this),this.s=2,wn(this)):Ho(this,this.S-s)};function wn(s){s.j.G==0||s.J||ma(s.j,s)}function kt(s){Cs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Oo(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Ps(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||ks(u.h,s))){if(!s.K&&ks(u.h,s)&&u.G==3){try{var m=u.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)hr(u),ur(u);else break e;Ms(u),pe(18)}}else u.za=P[1],0<u.za-u.T&&37500>P[2]&&u.F&&u.v==0&&!u.C&&(u.C=yn(T(u.Za,u),6e3));if(1>=Ko(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ot(u,11)}else if((s.K||u.g==s)&&hr(u),!M(c))for(P=u.Da.g.parse(c),c=0;c<P.length;c++){let J=P[c];if(u.T=J[0],J=J[1],u.G==2)if(J[0]=="c"){u.K=J[1],u.ia=J[2];const ue=J[3];ue!=null&&(u.la=ue,u.j.info("VER="+u.la));const de=J[4];de!=null&&(u.Aa=de,u.j.info("SVER="+u.Aa));const Qt=J[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(m=1.5*Qt,u.L=m,u.j.info("backChannelRequestTimeoutMs_="+m)),m=u;const ke=s.g;if(ke){const fr=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var k=m.h;k.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ns(k,k.h),k.h=null))}if(m.D){const js=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;js&&(m.ya=js,ne(m.I,m.D,js))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),m=u;var j=s;if(m.qa=ya(m,m.J?m.ia:null,m.W),j.K){Go(m.h,j);var te=j,ce=m.L;ce&&(te.I=ce),te.B&&(Cs(te),rr(te)),m.g=j}else fa(m);0<u.i.length&&dr(u)}else J[0]!="stop"&&J[0]!="close"||Ot(u,7);else u.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Ot(u,7):Ds(u):J[0]!="noop"&&u.l&&u.l.ta(J),u.v=0)}}vn(4)}catch{}}var ef=class{constructor(s,c){this.g=s,this.map=c}};function Wo(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ko(s){return s.h?1:s.g?s.g.size:0}function ks(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ns(s,c){s.g?s.g.add(c):s.h=c}function Go(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Wo.prototype.cancel=function(){if(this.i=qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function qo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return I(s.i)}function tf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var c=[],u=s.length,m=0;m<u;m++)c.push(s[m]);return c}c=[],u=0;for(m in s)c[u++]=s[m];return c}function nf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const m in s)c[u++]=m;return c}}}function Xo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=nf(s),m=tf(s),P=m.length,k=0;k<P;k++)c.call(void 0,m[k],u&&u[k],s)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rf(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var m=s[u].indexOf("="),P=null;if(0<=m){var k=s[u].substring(0,m);P=s[u].substring(m+1)}else k=s[u];c(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Nt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Nt){this.h=s.h,sr(this,s.j),this.o=s.o,this.g=s.g,ir(this,s.s),this.l=s.l;var c=s.i,u=new bn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Jo(this,u),this.m=s.m}else s&&(c=String(s).match(Yo))?(this.h=!1,sr(this,c[1]||"",!0),this.o=En(c[2]||""),this.g=En(c[3]||"",!0),ir(this,c[4]),this.l=En(c[5]||"",!0),Jo(this,c[6]||"",!0),this.m=En(c[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}Nt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Tn(c,Qo,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Tn(c,Qo,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Tn(u,u.charAt(0)=="/"?af:of,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Tn(u,lf)),s.join("")};function et(s){return new Nt(s)}function sr(s,c,u){s.j=u?En(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function ir(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Jo(s,c,u){c instanceof bn?(s.i=c,uf(s.i,s.h)):(u||(c=Tn(c,cf)),s.i=new bn(c,s.h))}function ne(s,c,u){s.i.set(c,u)}function or(s){return ne(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function En(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Tn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,sf),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function sf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Qo=/[#\/\?@]/g,of=/[#\?:]/g,af=/[#\?]/g,cf=/[#\?@]/g,lf=/#/g;function bn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function mt(s){s.g||(s.g=new Map,s.h=0,s.i&&rf(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}t=bn.prototype,t.add=function(s,c){mt(this),this.i=null,s=Yt(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function Zo(s,c){mt(s),c=Yt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function ea(s,c){return mt(s),c=Yt(s,c),s.g.has(c)}t.forEach=function(s,c){mt(this),this.g.forEach(function(u,m){u.forEach(function(P){s.call(c,P,m,this)},this)},this)},t.na=function(){mt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let m=0;m<c.length;m++){const P=s[m];for(let k=0;k<P.length;k++)u.push(c[m])}return u},t.V=function(s){mt(this);let c=[];if(typeof s=="string")ea(this,s)&&(c=c.concat(this.g.get(Yt(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},t.set=function(s,c){return mt(this),this.i=null,s=Yt(this,s),ea(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},t.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ta(s,c,u){Zo(s,c),0<u.length&&(s.i=null,s.g.set(Yt(s,c),I(u)),s.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var m=c[u];const k=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var P=k;j[m]!==""&&(P+="="+encodeURIComponent(String(j[m]))),s.push(P)}}return this.i=s.join("&")};function Yt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function uf(s,c){c&&!s.j&&(mt(s),s.i=null,s.g.forEach(function(u,m){var P=m.toLowerCase();m!=P&&(Zo(this,m),ta(this,P,u))},s)),s.j=c}function df(s,c){const u=new _n;if(l.Image){const m=new Image;m.onload=S(gt,u,"TestLoadImage: loaded",!0,c,m),m.onerror=S(gt,u,"TestLoadImage: error",!1,c,m),m.onabort=S(gt,u,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(gt,u,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=s}else c(!1)}function hf(s,c){const u=new _n,m=new AbortController,P=setTimeout(()=>{m.abort(),gt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?gt(u,"TestPingServer: ok",!0,c):gt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),gt(u,"TestPingServer: error",!1,c)})}function gt(s,c,u,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(u)}catch{}}function ff(){this.g=new Kh}function pf(s,c,u){const m=u||"";try{Xo(s,function(P,k){let j=P;f(P)&&(j=ws(P)),c.push(m+k+"="+encodeURIComponent(j))})}catch(P){throw c.push(m+"type="+encodeURIComponent("_badmap")),P}}function ar(s){this.l=s.Ub||null,this.j=s.eb||!1}C(ar,Es),ar.prototype.g=function(){return new cr(this.l,this.j)},ar.prototype.i=function(s){return function(){return s}}({});function cr(s,c){le.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(cr,le),t=cr.prototype,t.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,xn(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;na(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function na(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?In(this):xn(this),this.readyState==3&&na(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,In(this))},t.Qa=function(s){this.g&&(this.response=s,In(this))},t.ga=function(){this.g&&In(this)};function In(s){s.readyState=4,s.l=null,s.j=null,s.v=null,xn(s)}t.setRequestHeader=function(s,c){this.u.append(s,c)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function xn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ra(s){let c="";return F(s,function(u,m){c+=m,c+=":",c+=u,c+=`\r
`}),c}function Os(s,c,u){e:{for(m in u){var m=!1;break e}m=!0}m||(u=ra(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):ne(s,c,u))}function ae(s){le.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ae,le);var mf=/^https?$/i,gf=["POST","PUT"];t=ae.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,c,u,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():As.g(),this.v=this.o?Do(this.o):Do(As),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(k){sa(this,k);return}if(s=u||"",u=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)u.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())u.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(u.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gf,c,void 0))||m||P||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,j]of u)this.g.setRequestHeader(k,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{aa(this),this.u=!0,this.g.send(s),this.u=!1}catch(k){sa(this,k)}};function sa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ia(s),lr(s)}function ia(s){s.A||(s.A=!0,fe(s,"complete"),fe(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,fe(this,"complete"),fe(this,"abort"),lr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lr(this,!0)),ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oa(this):this.bb())},t.bb=function(){oa(this)};function oa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||tt(s)!=4||s.Z()!=2)){if(s.u&&tt(s)==4)Po(s.Ea,0,s);else if(fe(s,"readystatechange"),tt(s)==4){s.h=!1;try{const j=s.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var m;if(m=j===0){var P=String(s.D).match(Yo)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!mf.test(P?P.toLowerCase():"")}u=m}if(u)fe(s,"complete"),fe(s,"success");else{s.m=6;try{var k=2<tt(s)?s.g.statusText:""}catch{k=""}s.l=k+" ["+s.Z()+"]",ia(s)}}finally{lr(s)}}}}function lr(s,c){if(s.g){aa(s);const u=s.g,m=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||fe(s,"ready");try{u.onreadystatechange=m}catch{}}}function aa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function tt(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),zh(c)}};function ca(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(s){const c={};s=(s.g&&2<=tt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<s.length;m++){if(M(s[m]))continue;var u=A(s[m]);const P=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const k=c[P]||[];c[P]=k,k.push(u)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function la(s){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=An("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=An("baseRetryDelayMs",5e3,s),this.cb=An("retryDelaySeedMs",1e4,s),this.Wa=An("forwardChannelMaxRetries",2,s),this.wa=An("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Wo(s&&s.concurrentRequestLimit),this.Da=new ff,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=la.prototype,t.la=8,t.G=1,t.connect=function(s,c,u,m){pe(0),this.W=s,this.H=c||{},u&&m!==void 0&&(this.H.OSID=u,this.H.OAID=m),this.F=this.X,this.I=ya(this,null,this.W),dr(this)};function Ds(s){if(ua(s),s.G==3){var c=s.U++,u=et(s.I);if(ne(u,"SID",s.K),ne(u,"RID",c),ne(u,"TYPE","terminate"),Sn(s,u),c=new pt(s,s.j,c),c.L=2,c.v=or(et(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=_a(c.j,null),c.g.ea(c.v)),c.F=Date.now(),rr(c)}va(s)}function ur(s){s.g&&(Ls(s),s.g.cancel(),s.g=null)}function ua(s){ur(s),s.u&&(l.clearTimeout(s.u),s.u=null),hr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function dr(s){if(!zo(s.h)&&!s.s){s.s=!0;var c=s.Ga;Q||X(),B||(Q(),B=!0),U.add(c,s),s.B=0}}function yf(s,c){return Ko(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=yn(T(s.Ga,s,c),ga(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const P=new pt(this,this.j,s);let k=this.o;if(this.S&&(k?(k=v(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var m=this.i[u];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=ha(this,P,c),u=et(this.I),ne(u,"RID",s),ne(u,"CVER",22),this.D&&ne(u,"X-HTTP-Session-Id",this.D),Sn(this,u),k&&(this.O?c="headers="+encodeURIComponent(String(ra(k)))+"&"+c:this.m&&Os(u,this.m,k)),Ns(this.h,P),this.Ua&&ne(u,"TYPE","init"),this.P?(ne(u,"$req",c),ne(u,"SID","null"),P.T=!0,Rs(P,u,null)):Rs(P,u,c),this.G=2}}else this.G==3&&(s?da(this,s):this.i.length==0||zo(this.h)||da(this))};function da(s,c){var u;c?u=c.l:u=s.U++;const m=et(s.I);ne(m,"SID",s.K),ne(m,"RID",u),ne(m,"AID",s.T),Sn(s,m),s.m&&s.o&&Os(m,s.m,s.o),u=new pt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=ha(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ns(s.h,u),Rs(u,m,c)}function Sn(s,c){s.H&&F(s.H,function(u,m){ne(c,m,u)}),s.l&&Xo({},function(u,m){ne(c,m,u)})}function ha(s,c,u){u=Math.min(s.i.length,u);var m=s.l?T(s.l.Na,s.l,s):null;e:{var P=s.i;let k=-1;for(;;){const j=["count="+u];k==-1?0<u?(k=P[0].g,j.push("ofs="+k)):k=0:j.push("ofs="+k);let te=!0;for(let ce=0;ce<u;ce++){let J=P[ce].g;const ue=P[ce].map;if(J-=k,0>J)k=Math.max(0,P[ce].g-100),te=!1;else try{pf(ue,j,"req"+J+"_")}catch{m&&m(ue)}}if(te){m=j.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,m}function fa(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Q||X(),B||(Q(),B=!0),U.add(c,s),s.v=0}}function Ms(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=yn(T(s.Fa,s),ga(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,pa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=yn(T(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pe(10),ur(this),pa(this))};function Ls(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function pa(s){s.g=new pt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=et(s.qa);ne(c,"RID","rpc"),ne(c,"SID",s.K),ne(c,"AID",s.T),ne(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&ne(c,"TO",s.ja),ne(c,"TYPE","xmlhttp"),Sn(s,c),s.m&&s.o&&Os(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=or(et(c)),u.m=null,u.P=!0,Vo(u,s)}t.Za=function(){this.C!=null&&(this.C=null,ur(this),Ms(this),pe(19))};function hr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ma(s,c){var u=null;if(s.g==c){hr(s),Ls(s),s.g=null;var m=2}else if(ks(s.h,c))u=c.D,Go(s.h,c),m=1;else return;if(s.G!=0){if(c.o)if(m==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var P=s.B;m=Is(),fe(m,new Fo(m,u)),dr(s)}else fa(s);else if(P=c.s,P==3||P==0&&0<c.X||!(m==1&&yf(s,c)||m==2&&Ms(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),P){case 1:Ot(s,5);break;case 4:Ot(s,10);break;case 3:Ot(s,6);break;default:Ot(s,2)}}}function ga(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Ot(s,c){if(s.j.info("Error code "+c),c==2){var u=T(s.fb,s),m=s.Xa;const P=!m;m=new Nt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||sr(m,"https"),or(m),P?df(m.toString(),u):hf(m.toString(),u)}else pe(2);s.G=0,s.l&&s.l.sa(c),va(s),ua(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function va(s){if(s.G=0,s.ka=[],s.l){const c=qo(s.h);(c.length!=0||s.i.length!=0)&&(x(s.ka,c),x(s.ka,s.i),s.h.i.length=0,I(s.i),s.i.length=0),s.l.ra()}}function ya(s,c,u){var m=u instanceof Nt?et(u):new Nt(u);if(m.g!="")c&&(m.g=c+"."+m.g),ir(m,m.s);else{var P=l.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var k=new Nt(null);m&&sr(k,m),c&&(k.g=c),P&&ir(k,P),u&&(k.l=u),m=k}return u=s.D,c=s.ya,u&&c&&ne(m,u,c),ne(m,"VER",s.la),Sn(s,m),m}function _a(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ae(new ar({eb:u})):new ae(s.pa),c.Ha(s.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wa(){}t=wa.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ae(s,c){le.call(this),this.g=new la(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!M(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Jt(this)}C(Ae,le),Ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){Ds(this.g)},Ae.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ws(s),s=u);c.i.push(new ef(c.Ya++,s)),c.G==3&&dr(c)},Ae.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,Ae.aa.N.call(this)};function Ea(s){Ts.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}C(Ea,Ts);function Ta(){bs.call(this),this.status=1}C(Ta,bs);function Jt(s){this.g=s}C(Jt,wa),Jt.prototype.ua=function(){fe(this.g,"a")},Jt.prototype.ta=function(s){fe(this.g,new Ea(s))},Jt.prototype.sa=function(s){fe(this.g,new Ta)},Jt.prototype.ra=function(){fe(this.g,"b")},Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,Qh.COMPLETE="complete",Gh.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",le.prototype.listen=le.prototype.K,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha}).apply(typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{});const uc="@firebase/firestore",dc="4.7.11";/**
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
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let Xn="11.6.1";/**
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
 */const ln=new Gi("@firebase/firestore");function Oe(t,...e){if(ln.logLevel<=Z.DEBUG){const n=e.map(io);ln.debug(`Firestore (${Xn}): ${t}`,...n)}}function Nu(t,...e){if(ln.logLevel<=Z.ERROR){const n=e.map(io);ln.error(`Firestore (${Xn}): ${t}`,...n)}}function o_(t,...e){if(ln.logLevel<=Z.WARN){const n=e.map(io);ln.warn(`Firestore (${Xn}): ${t}`,...n)}}function io(t){if(typeof t=="string")return t;try{/**
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
 */function Ou(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Du(t,r,n)}function Du(t,e,n){let r=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nu(r),new Error(r)}function On(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Du(e,i,r)}/**
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
 */const Ee={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Te extends qe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class c_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l_{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){On(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},l=d=>{Oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(Oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(On(typeof r.accessToken=="string",31837,{l:r}),new Mu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return On(e===null||typeof e=="string",2055,{h:e}),new me(e)}}class u_{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class d_{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new u_(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h_{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){On(this.o===void 0,3512);const r=o=>{o.error!=null&&Oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Oe("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):Oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(On(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function f_(t){return t.name==="IndexedDbTransactionError"}const Ii="(default)";class Wr{constructor(e,n){this.projectId=e,this.database=n||Ii}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database===Ii}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var fc,Y;(Y=fc||(fc={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ku([4294967295,4294967295],0);/**
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
 */const p_=41943040;/**
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
 */const m_=1048576;function Ys(){return typeof document<"u"?document:null}/**
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
 */class g_{constructor(e,n,r=1e3,i=1.5,o=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,n-r);i>0&&Oe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */class oo{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,l=new oo(e,n,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Te(Ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var pc,mc;(mc=pc||(pc={})).ya="default",mc.Cache="cache";/**
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
 */function v_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gc=new Map;function y_(t,e,n,r){if(e===!0&&r===!0)throw new Te(Ee.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function __(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ou(12329,{type:typeof t})}function w_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Te(Ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=__(t);throw new Te(Ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Lu="firestore.googleapis.com",vc=!0;class yc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Te(Ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lu,this.ssl=vc}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:vc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=p_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<m_)throw new Te(Ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Te(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Te(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Te(Ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Te(Ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Te(Ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a_;switch(r.type){case"firstParty":return new d_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Te(Ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gc.get(n);r&&(Oe("ComponentProvider","Removing Datastore"),gc.delete(n),r.terminate())}(this),Promise.resolve()}}function E_(t,e,n,r={}){var i;const o=(t=w_(t,ju))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;o.host!==Lu&&o.host!==l&&o_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:l,ssl:!1,emulatorOptions:r});if(!Lt(d,a)&&(t._setSettings(d),r.mockUserToken)){let f,y;if(typeof r.mockUserToken=="string")f=r.mockUserToken,y=me.MOCK_USER;else{f=zl(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Te(Ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new me(g)}t._authCredentials=new c_(new Mu(f,y))}}/**
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
 */const _c="AsyncQueue";class wc{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new g_(this,"async_queue_retry"),this.ju=()=>{const r=Ys();r&&Oe(_c,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Ys();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Ys();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Dn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!f_(e))throw e;Oe(_c,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Nu("INTERNAL UNHANDLED ERROR: ",Ec(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const i=oo.createAndSchedule(this,e,n,r,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&Ou(47125,{ec:Ec(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function Ec(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class T_ extends ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wc(e),this._firestoreClient=void 0,await e}}}function b_(t,e){const n=typeof t=="object"?t:Xi(),r=typeof t=="string"?t:Ii,i=rs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Bl("firestore");o&&E_(i,...o)}return i}(function(e,n=!0){(function(i){Xn=i})(Bt),jt(new xt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new T_(new l_(r.getProvider("auth-internal")),new h_(a,r.getProvider("app-check-internal")),function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Te(Ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(f.options.projectId,y)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Be(uc,dc,e),Be(uc,dc,"esm2017")})();/**
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
 */const Fu="firebasestorage.googleapis.com",I_="storageBucket",x_=2*60*1e3,A_=10*60*1e3;/**
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
 */class Ye extends qe{constructor(e,n,r=0){super(Js(e),`Firebase Storage: ${n} (${Js(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Js(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function Js(t){return"storage/"+t}function S_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(Ke.UNKNOWN,t)}function R_(){return new Ye(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C_(){return new Ye(Ke.CANCELED,"User canceled the upload/download.")}function P_(t){return new Ye(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function k_(t){return new Ye(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Tc(t){return new Ye(Ke.INVALID_ARGUMENT,t)}function Uu(){return new Ye(Ke.APP_DELETED,"The Firebase app was deleted.")}function N_(t){return new Ye(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class De{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=De.makeFromUrl(e,n)}catch{return new De(e,"")}if(r.path==="")return r;throw k_(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),d={bucket:1,path:3};function f(D){D.path_=decodeURIComponent(D.path)}const y="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${y}/b/${i}/o${T}`,"i"),C={bucket:1,path:3},I=n===Fu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${I}/${i}/${x}`,"i"),O=[{regex:l,indices:d,postModify:o},{regex:S,indices:C,postModify:f},{regex:N,indices:{bucket:1,path:2},postModify:f}];for(let D=0;D<O.length;D++){const L=O[D],F=L.regex.exec(e);if(F){const E=F[L.indices.bucket];let v=F[L.indices.path];v||(v=""),r=new De(E,v),L.postModify(r);break}}if(r==null)throw P_(e);return r}}class O_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function D_(t,e,n){let r=1,i=null,o=null,a=!1,l=0;function d(){return l===2}let f=!1;function y(...x){f||(f=!0,e.apply(null,x))}function g(x){i=setTimeout(()=>{i=null,t(S,d())},x)}function T(){o&&clearTimeout(o)}function S(x,...N){if(f){T();return}if(x){T(),y.call(null,x,...N);return}if(d()||a){T(),y.call(null,x,...N);return}r<64&&(r*=2);let O;l===1?(l=2,O=0):O=(r+Math.random())*1e3,g(O)}let C=!1;function I(x){C||(C=!0,T(),!f&&(i!==null?(x||(l=2),clearTimeout(i),g(0)):x||(l=1)))}return g(0),o=setTimeout(()=>{a=!0,I(!0)},n),I}function M_(t){t(!1)}/**
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
 */function L_(t){return t!==void 0}function bc(t,e,n,r){if(r<e)throw Tc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tc(`Invalid value for '${t}'. Expected ${n} or less.`)}function j_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zr||(zr={}));/**
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
 */function F_(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class U_{constructor(e,n,r,i,o,a,l,d,f,y,g,T=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=y,this.connectionFactory_=g,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,C)=>{this.resolve_=S,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _r(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const d=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===zr.NO_ERROR,d=o.getStatus();if(!l||F_(d,this.additionalRetryCodes_)&&this.retry){const y=o.getErrorCode()===zr.ABORT;r(!1,new _r(!1,null,y));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new _r(f,o))})},n=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());L_(d)?o(d):o()}catch(d){a(d)}else if(l!==null){const d=S_();d.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,d)):a(d)}else if(i.canceled){const d=this.appDelete_?Uu():C_();a(d)}else{const d=R_();a(d)}};this.canceled_?n(!1,new _r(!1,null,!0)):this.backoffId_=D_(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&M_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _r{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $_(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function V_(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function B_(t,e){e&&(t["X-Firebase-GMPID"]=e)}function H_(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function W_(t,e,n,r,i,o,a=!0){const l=j_(t.urlParams),d=t.url+l,f=Object.assign({},t.headers);return B_(f,e),$_(f,n),V_(f,o),H_(f,r),new U_(d,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function z_(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function K_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Kr{constructor(e,n){this._service=e,n instanceof De?this._location=n:this._location=De.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kr(e,n)}get root(){const e=new De(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K_(this._location.path)}get storage(){return this._service}get parent(){const e=z_(this._location.path);if(e===null)return null;const n=new De(this._location.bucket,e);return new Kr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw N_(e)}}function Ic(t,e){const n=e==null?void 0:e[I_];return n==null?null:De.makeFromBucketSpec(n,t)}function G_(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zl(i,t.app.options.projectId))}class q_{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Fu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=x_,this._maxUploadRetryTime=A_,this._requests=new Set,i!=null?this._bucket=De.makeFromBucketSpec(i,this._host):this._bucket=Ic(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,e):this._bucket=Ic(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kr(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new O_(Uu());{const a=W_(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const xc="@firebase/storage",Ac="0.13.7";/**
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
 */const $u="storage";function X_(t=Xi(),e){t=Pe(t);const r=rs(t,$u).getImmediate({identifier:e}),i=Bl("storage");return i&&Y_(r,...i),r}function Y_(t,e,n,r={}){G_(t,e,n,r)}function J_(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new q_(n,r,i,e,Bt)}function Q_(){jt(new xt($u,J_,"PUBLIC").setMultipleInstances(!0)),Be(xc,Ac,""),Be(xc,Ac,"esm2017")}Q_();console.log("Starting Firebase initialization...");const Vu={apiKey:"AIzaSyDygjMpaMXBEBcRnVVtOxW41nD7DA-cXJY",authDomain:"workwise-sa-project.firebaseapp.com",projectId:"workwise-sa-project",storageBucket:"workwise-sa-project.firebasestorage.app",messagingSenderId:"716919248302",appId:"1:716919248302:web:582684fa2eb06133aca43f"};console.log("Firebase config:",{...Vu,apiKey:"[REDACTED]"});const ao=ql(Vu),ft=s_(ao),Z_=new rt;console.log("Firebase initialized successfully");const ew={url:`${window.location.origin}/auth/email-signin-complete`,handleCodeInApp:!0};console.log("Email link authentication URL:",`${window.location.origin}/auth/email-signin-complete`);console.log("Current origin:",window.location.origin);const HI=async(t,e,n)=>{try{console.log(`Attempting to sign up user with email: ${t}`);const r=await jv(ft,t,e);return console.log("User created successfully:",r.user.uid),r.user&&(console.log("Updating user profile with display name:",n),await Hv(r.user,{displayName:n}),console.log("User profile updated successfully")),r.user}catch(r){throw console.error("Error signing up:",r.code,r.message),r}},WI=async(t,e)=>{try{console.log(`Attempting to sign in user with email: ${t}`);const n=await Fv(ft,t,e);return console.log("User signed in successfully:",n.user.uid),n.user}catch(n){throw console.error("Error signing in:",n.code,n.message),n}},zI=async()=>{try{return(await fy(ft,Z_)).user}catch(t){throw console.error("Error signing in with Google:",t),t}},tw=async()=>{try{await Gv(ft)}catch(t){throw console.error("Error signing out:",t),t}},KI=()=>ft.currentUser,nw=t=>Kv(ft,t),GI=async t=>{try{return await Uv(ft,t,ew),window.localStorage.setItem("emailForSignIn",t),!0}catch(e){throw console.error("Error sending sign-in link:",e),e}},qI=async(t,e)=>{try{const n=await Vv(ft,t,e);return window.localStorage.removeItem("emailForSignIn"),n.user}catch(n){throw console.error("Error completing sign-in with email link:",n),n}},XI=t=>$v(ft,t),YI=()=>window.localStorage.getItem("emailForSignIn");b_(ao);X_(ao);const Bu=p.createContext(null),rw=({children:t})=>{const[e,n]=p.useState(null),[r,i]=p.useState(!0);p.useEffect(()=>nw(l=>{n(l),i(!1)}),[]);const o=p.useMemo(()=>({currentUser:e,user:e,isLoading:r,isAuthenticated:!!e}),[e,r]);return h.jsx(Bu.Provider,{value:o,children:!r&&t})},Hu=()=>{const t=p.useContext(Bu);if(t===null)throw new Error("useAuth must be used within an AuthProvider");return t},sw=nl("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Wu=p.forwardRef(({className:t,variant:e,...n},r)=>h.jsx("div",{ref:r,role:"alert",className:ie(sw({variant:e}),t),...n}));Wu.displayName="Alert";const zu=p.forwardRef(({className:t,...e},n)=>h.jsx("h5",{ref:n,className:ie("mb-1 font-medium leading-none tracking-tight",t),...e}));zu.displayName="AlertTitle";const Ku=p.forwardRef(({className:t,...e},n)=>h.jsx("div",{ref:n,className:ie("text-sm [&_p]:leading-relaxed",t),...e}));Ku.displayName="AlertDescription";class iw extends p.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("ErrorBoundary caught an error:",e,n)}render(){var e;return this.state.hasError?this.props.fallback?this.props.fallback:h.jsxs(Wu,{variant:"destructive",className:"my-4",children:[h.jsx(bf,{className:"h-4 w-4"}),h.jsx(zu,{children:"Something went wrong"}),h.jsx(Ku,{children:((e=this.state.error)==null?void 0:e.message)||"An unexpected error occurred"})]}):this.props.children}}var ow=p.createContext(void 0);function Gu(t){const e=p.useContext(ow);return t||e||"ltr"}var Qs=0;function aw(){p.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Sc()),document.body.insertAdjacentElement("beforeend",t[1]??Sc()),Qs++,()=>{Qs===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Qs--}},[])}function Sc(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var Zs="focusScope.autoFocusOnMount",ei="focusScope.autoFocusOnUnmount",Rc={bubbles:!1,cancelable:!0},cw="FocusScope",qu=p.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=t,[l,d]=p.useState(null),f=be(i),y=be(o),g=p.useRef(null),T=he(e,I=>d(I)),S=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let I=function(O){if(S.paused||!l)return;const D=O.target;l.contains(D)?g.current=D:_t(g.current,{select:!0})},x=function(O){if(S.paused||!l)return;const D=O.relatedTarget;D!==null&&(l.contains(D)||_t(g.current,{select:!0}))},N=function(O){if(document.activeElement===document.body)for(const L of O)L.removedNodes.length>0&&_t(l)};document.addEventListener("focusin",I),document.addEventListener("focusout",x);const M=new MutationObserver(N);return l&&M.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",I),document.removeEventListener("focusout",x),M.disconnect()}}},[r,l,S.paused]),p.useEffect(()=>{if(l){Pc.add(S);const I=document.activeElement;if(!l.contains(I)){const N=new CustomEvent(Zs,Rc);l.addEventListener(Zs,f),l.dispatchEvent(N),N.defaultPrevented||(lw(pw(Xu(l)),{select:!0}),document.activeElement===I&&_t(l))}return()=>{l.removeEventListener(Zs,f),setTimeout(()=>{const N=new CustomEvent(ei,Rc);l.addEventListener(ei,y),l.dispatchEvent(N),N.defaultPrevented||_t(I??document.body,{select:!0}),l.removeEventListener(ei,y),Pc.remove(S)},0)}}},[l,f,y,S]);const C=p.useCallback(I=>{if(!n&&!r||S.paused)return;const x=I.key==="Tab"&&!I.altKey&&!I.ctrlKey&&!I.metaKey,N=document.activeElement;if(x&&N){const M=I.currentTarget,[O,D]=uw(M);O&&D?!I.shiftKey&&N===D?(I.preventDefault(),n&&_t(O,{select:!0})):I.shiftKey&&N===O&&(I.preventDefault(),n&&_t(D,{select:!0})):N===M&&I.preventDefault()}},[n,r,S.paused]);return h.jsx(re.div,{tabIndex:-1,...a,ref:T,onKeyDown:C})});qu.displayName=cw;function lw(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(_t(r,{select:e}),document.activeElement!==n)return}function uw(t){const e=Xu(t),n=Cc(e,t),r=Cc(e.reverse(),t);return[n,r]}function Xu(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Cc(t,e){for(const n of t)if(!dw(n,{upTo:e}))return n}function dw(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function hw(t){return t instanceof HTMLInputElement&&"select"in t}function _t(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&hw(t)&&e&&t.select()}}var Pc=fw();function fw(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=kc(t,e),t.unshift(e)},remove(e){var n;t=kc(t,e),(n=t[0])==null||n.resume()}}}function kc(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function pw(t){return t.filter(e=>e.tagName!=="A")}var mw=Ni[" useId ".trim().toString()]||(()=>{}),gw=0;function xi(t){const[e,n]=p.useState(mw());return Re(()=>{n(r=>r??String(gw++))},[t]),e?`radix-${e}`:""}const vw=["top","right","bottom","left"],At=Math.min,Ie=Math.max,Gr=Math.round,wr=Math.floor,ze=t=>({x:t,y:t}),yw={left:"right",right:"left",bottom:"top",top:"bottom"},_w={start:"end",end:"start"};function Ai(t,e,n){return Ie(t,At(e,n))}function lt(t,e){return typeof t=="function"?t(e):t}function ut(t){return t.split("-")[0]}function hn(t){return t.split("-")[1]}function co(t){return t==="x"?"y":"x"}function lo(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(ut(t))?"y":"x"}function uo(t){return co(ot(t))}function ww(t,e,n){n===void 0&&(n=!1);const r=hn(t),i=uo(t),o=lo(i);let a=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=qr(a)),[a,qr(a)]}function Ew(t){const e=qr(t);return[Si(t),e,Si(e)]}function Si(t){return t.replace(/start|end/g,e=>_w[e])}function Tw(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:a;default:return[]}}function bw(t,e,n,r){const i=hn(t);let o=Tw(ut(t),n==="start",r);return i&&(o=o.map(a=>a+"-"+i),e&&(o=o.concat(o.map(Si)))),o}function qr(t){return t.replace(/left|right|bottom|top/g,e=>yw[e])}function Iw(t){return{top:0,right:0,bottom:0,left:0,...t}}function Yu(t){return typeof t!="number"?Iw(t):{top:t,right:t,bottom:t,left:t}}function Xr(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Nc(t,e,n){let{reference:r,floating:i}=t;const o=ot(e),a=uo(e),l=lo(a),d=ut(e),f=o==="y",y=r.x+r.width/2-i.width/2,g=r.y+r.height/2-i.height/2,T=r[l]/2-i[l]/2;let S;switch(d){case"top":S={x:y,y:r.y-i.height};break;case"bottom":S={x:y,y:r.y+r.height};break;case"right":S={x:r.x+r.width,y:g};break;case"left":S={x:r.x-i.width,y:g};break;default:S={x:r.x,y:r.y}}switch(hn(e)){case"start":S[a]-=T*(n&&f?-1:1);break;case"end":S[a]+=T*(n&&f?-1:1);break}return S}const xw=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:y,y:g}=Nc(f,r,d),T=r,S={},C=0;for(let I=0;I<l.length;I++){const{name:x,fn:N}=l[I],{x:M,y:O,data:D,reset:L}=await N({x:y,y:g,initialPlacement:r,placement:T,strategy:i,middlewareData:S,rects:f,platform:a,elements:{reference:t,floating:e}});y=M??y,g=O??g,S={...S,[x]:{...S[x],...D}},L&&C<=50&&(C++,typeof L=="object"&&(L.placement&&(T=L.placement),L.rects&&(f=L.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):L.rects),{x:y,y:g}=Nc(f,T,d)),I=-1)}return{x:y,y:g,placement:T,strategy:i,middlewareData:S}};async function jn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:a,elements:l,strategy:d}=t,{boundary:f="clippingAncestors",rootBoundary:y="viewport",elementContext:g="floating",altBoundary:T=!1,padding:S=0}=lt(e,t),C=Yu(S),x=l[T?g==="floating"?"reference":"floating":g],N=Xr(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(x)))==null||n?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:f,rootBoundary:y,strategy:d})),M=g==="floating"?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,O=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),D=await(o.isElement==null?void 0:o.isElement(O))?await(o.getScale==null?void 0:o.getScale(O))||{x:1,y:1}:{x:1,y:1},L=Xr(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:M,offsetParent:O,strategy:d}):M);return{top:(N.top-L.top+C.top)/D.y,bottom:(L.bottom-N.bottom+C.bottom)/D.y,left:(N.left-L.left+C.left)/D.x,right:(L.right-N.right+C.right)/D.x}}const Aw=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:o,platform:a,elements:l,middlewareData:d}=e,{element:f,padding:y=0}=lt(t,e)||{};if(f==null)return{};const g=Yu(y),T={x:n,y:r},S=uo(i),C=lo(S),I=await a.getDimensions(f),x=S==="y",N=x?"top":"left",M=x?"bottom":"right",O=x?"clientHeight":"clientWidth",D=o.reference[C]+o.reference[S]-T[S]-o.floating[C],L=T[S]-o.reference[S],F=await(a.getOffsetParent==null?void 0:a.getOffsetParent(f));let E=F?F[O]:0;(!E||!await(a.isElement==null?void 0:a.isElement(F)))&&(E=l.floating[O]||o.floating[C]);const v=D/2-L/2,_=E/2-I[C]/2-1,b=At(g[N],_),A=At(g[M],_),R=b,w=E-I[C]-A,$=E/2-I[C]/2+v,W=Ai(R,$,w),G=!d.arrow&&hn(i)!=null&&$!==W&&o.reference[C]/2-($<R?b:A)-I[C]/2<0,Q=G?$<R?$-R:$-w:0;return{[S]:T[S]+Q,data:{[S]:W,centerOffset:$-W-Q,...G&&{alignmentOffset:Q}},reset:G}}}),Sw=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:d,elements:f}=e,{mainAxis:y=!0,crossAxis:g=!0,fallbackPlacements:T,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:I=!0,...x}=lt(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const N=ut(i),M=ot(l),O=ut(l)===l,D=await(d.isRTL==null?void 0:d.isRTL(f.floating)),L=T||(O||!I?[qr(l)]:Ew(l)),F=C!=="none";!T&&F&&L.push(...bw(l,I,C,D));const E=[l,...L],v=await jn(e,x),_=[];let b=((r=o.flip)==null?void 0:r.overflows)||[];if(y&&_.push(v[N]),g){const W=ww(i,a,D);_.push(v[W[0]],v[W[1]])}if(b=[...b,{placement:i,overflows:_}],!_.every(W=>W<=0)){var A,R;const W=(((A=o.flip)==null?void 0:A.index)||0)+1,G=E[W];if(G){var w;const B=g==="alignment"?M!==ot(G):!1,U=((w=b[0])==null?void 0:w.overflows[0])>0;if(!B||U)return{data:{index:W,overflows:b},reset:{placement:G}}}let Q=(R=b.filter(B=>B.overflows[0]<=0).sort((B,U)=>B.overflows[1]-U.overflows[1])[0])==null?void 0:R.placement;if(!Q)switch(S){case"bestFit":{var $;const B=($=b.filter(U=>{if(F){const X=ot(U.placement);return X===M||X==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(X=>X>0).reduce((X,oe)=>X+oe,0)]).sort((U,X)=>U[1]-X[1])[0])==null?void 0:$[0];B&&(Q=B);break}case"initialPlacement":Q=l;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};function Oc(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Dc(t){return vw.some(e=>t[e]>=0)}const Rw=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...i}=lt(t,e);switch(r){case"referenceHidden":{const o=await jn(e,{...i,elementContext:"reference"}),a=Oc(o,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Dc(a)}}}case"escaped":{const o=await jn(e,{...i,altBoundary:!0}),a=Oc(o,n.floating);return{data:{escapedOffsets:a,escaped:Dc(a)}}}default:return{}}}}};async function Cw(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),a=ut(n),l=hn(n),d=ot(n)==="y",f=["left","top"].includes(a)?-1:1,y=o&&d?-1:1,g=lt(e,t);let{mainAxis:T,crossAxis:S,alignmentAxis:C}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return l&&typeof C=="number"&&(S=l==="end"?C*-1:C),d?{x:S*y,y:T*f}:{x:T*f,y:S*y}}const Pw=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:a,middlewareData:l}=e,d=await Cw(e,t);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+d.x,y:o+d.y,data:{...d,placement:a}}}}},kw=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:x=>{let{x:N,y:M}=x;return{x:N,y:M}}},...d}=lt(t,e),f={x:n,y:r},y=await jn(e,d),g=ot(ut(i)),T=co(g);let S=f[T],C=f[g];if(o){const x=T==="y"?"top":"left",N=T==="y"?"bottom":"right",M=S+y[x],O=S-y[N];S=Ai(M,S,O)}if(a){const x=g==="y"?"top":"left",N=g==="y"?"bottom":"right",M=C+y[x],O=C-y[N];C=Ai(M,C,O)}const I=l.fn({...e,[T]:S,[g]:C});return{...I,data:{x:I.x-n,y:I.y-r,enabled:{[T]:o,[g]:a}}}}}},Nw=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:i,rects:o,middlewareData:a}=e,{offset:l=0,mainAxis:d=!0,crossAxis:f=!0}=lt(t,e),y={x:n,y:r},g=ot(i),T=co(g);let S=y[T],C=y[g];const I=lt(l,e),x=typeof I=="number"?{mainAxis:I,crossAxis:0}:{mainAxis:0,crossAxis:0,...I};if(d){const O=T==="y"?"height":"width",D=o.reference[T]-o.floating[O]+x.mainAxis,L=o.reference[T]+o.reference[O]-x.mainAxis;S<D?S=D:S>L&&(S=L)}if(f){var N,M;const O=T==="y"?"width":"height",D=["top","left"].includes(ut(i)),L=o.reference[g]-o.floating[O]+(D&&((N=a.offset)==null?void 0:N[g])||0)+(D?0:x.crossAxis),F=o.reference[g]+o.reference[O]+(D?0:((M=a.offset)==null?void 0:M[g])||0)-(D?x.crossAxis:0);C<L?C=L:C>F&&(C=F)}return{[T]:S,[g]:C}}}},Ow=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,r;const{placement:i,rects:o,platform:a,elements:l}=e,{apply:d=()=>{},...f}=lt(t,e),y=await jn(e,f),g=ut(i),T=hn(i),S=ot(i)==="y",{width:C,height:I}=o.floating;let x,N;g==="top"||g==="bottom"?(x=g,N=T===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(N=g,x=T==="end"?"top":"bottom");const M=I-y.top-y.bottom,O=C-y.left-y.right,D=At(I-y[x],M),L=At(C-y[N],O),F=!e.middlewareData.shift;let E=D,v=L;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(v=O),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(E=M),F&&!T){const b=Ie(y.left,0),A=Ie(y.right,0),R=Ie(y.top,0),w=Ie(y.bottom,0);S?v=C-2*(b!==0||A!==0?b+A:Ie(y.left,y.right)):E=I-2*(R!==0||w!==0?R+w:Ie(y.top,y.bottom))}await d({...e,availableWidth:v,availableHeight:E});const _=await a.getDimensions(l.floating);return C!==_.width||I!==_.height?{reset:{rects:!0}}:{}}}};function cs(){return typeof window<"u"}function fn(t){return Ju(t)?(t.nodeName||"").toLowerCase():"#document"}function xe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Je(t){var e;return(e=(Ju(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ju(t){return cs()?t instanceof Node||t instanceof xe(t).Node:!1}function Le(t){return cs()?t instanceof Element||t instanceof xe(t).Element:!1}function Ge(t){return cs()?t instanceof HTMLElement||t instanceof xe(t).HTMLElement:!1}function Mc(t){return!cs()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof xe(t).ShadowRoot}function Yn(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=je(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Dw(t){return["table","td","th"].includes(fn(t))}function ls(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ho(t){const e=fo(),n=Le(t)?je(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Mw(t){let e=St(t);for(;Ge(e)&&!un(e);){if(ho(e))return e;if(ls(e))return null;e=St(e)}return null}function fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function un(t){return["html","body","#document"].includes(fn(t))}function je(t){return xe(t).getComputedStyle(t)}function us(t){return Le(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function St(t){if(fn(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Mc(t)&&t.host||Je(t);return Mc(e)?e.host:e}function Qu(t){const e=St(t);return un(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ge(e)&&Yn(e)?e:Qu(e)}function Fn(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Qu(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=xe(i);if(o){const l=Ri(a);return e.concat(a,a.visualViewport||[],Yn(i)?i:[],l&&n?Fn(l):[])}return e.concat(i,Fn(i,[],n))}function Ri(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Zu(t){const e=je(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Ge(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Gr(n)!==o||Gr(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function po(t){return Le(t)?t:t.contextElement}function on(t){const e=po(t);if(!Ge(e))return ze(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Zu(e);let a=(o?Gr(n.width):n.width)/r,l=(o?Gr(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Lw=ze(0);function ed(t){const e=xe(t);return!fo()||!e.visualViewport?Lw:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function jw(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==xe(t)?!1:e}function $t(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=po(t);let a=ze(1);e&&(r?Le(r)&&(a=on(r)):a=on(t));const l=jw(o,n,r)?ed(o):ze(0);let d=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,y=i.width/a.x,g=i.height/a.y;if(o){const T=xe(o),S=r&&Le(r)?xe(r):r;let C=T,I=Ri(C);for(;I&&r&&S!==C;){const x=on(I),N=I.getBoundingClientRect(),M=je(I),O=N.left+(I.clientLeft+parseFloat(M.paddingLeft))*x.x,D=N.top+(I.clientTop+parseFloat(M.paddingTop))*x.y;d*=x.x,f*=x.y,y*=x.x,g*=x.y,d+=O,f+=D,C=xe(I),I=Ri(C)}}return Xr({width:y,height:g,x:d,y:f})}function mo(t,e){const n=us(t).scrollLeft;return e?e.left+n:$t(Je(t)).left+n}function td(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:mo(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Fw(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=Je(r),l=e?ls(e.floating):!1;if(r===a||l&&o)return n;let d={scrollLeft:0,scrollTop:0},f=ze(1);const y=ze(0),g=Ge(r);if((g||!g&&!o)&&((fn(r)!=="body"||Yn(a))&&(d=us(r)),Ge(r))){const S=$t(r);f=on(r),y.x=S.x+r.clientLeft,y.y=S.y+r.clientTop}const T=a&&!g&&!o?td(a,d,!0):ze(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-d.scrollLeft*f.x+y.x+T.x,y:n.y*f.y-d.scrollTop*f.y+y.y+T.y}}function Uw(t){return Array.from(t.getClientRects())}function $w(t){const e=Je(t),n=us(t),r=t.ownerDocument.body,i=Ie(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Ie(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+mo(t);const l=-n.scrollTop;return je(r).direction==="rtl"&&(a+=Ie(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Vw(t,e){const n=xe(t),r=Je(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,d=0;if(i){o=i.width,a=i.height;const f=fo();(!f||f&&e==="fixed")&&(l=i.offsetLeft,d=i.offsetTop)}return{width:o,height:a,x:l,y:d}}function Bw(t,e){const n=$t(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=Ge(t)?on(t):ze(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,d=i*o.x,f=r*o.y;return{width:a,height:l,x:d,y:f}}function Lc(t,e,n){let r;if(e==="viewport")r=Vw(t,n);else if(e==="document")r=$w(Je(t));else if(Le(e))r=Bw(e,n);else{const i=ed(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Xr(r)}function nd(t,e){const n=St(t);return n===e||!Le(n)||un(n)?!1:je(n).position==="fixed"||nd(n,e)}function Hw(t,e){const n=e.get(t);if(n)return n;let r=Fn(t,[],!1).filter(l=>Le(l)&&fn(l)!=="body"),i=null;const o=je(t).position==="fixed";let a=o?St(t):t;for(;Le(a)&&!un(a);){const l=je(a),d=ho(a);!d&&l.position==="fixed"&&(i=null),(o?!d&&!i:!d&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Yn(a)&&!d&&nd(t,a))?r=r.filter(y=>y!==a):i=l,a=St(a)}return e.set(t,r),r}function Ww(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?ls(e)?[]:Hw(e,this._c):[].concat(n),r],l=a[0],d=a.reduce((f,y)=>{const g=Lc(e,y,i);return f.top=Ie(g.top,f.top),f.right=At(g.right,f.right),f.bottom=At(g.bottom,f.bottom),f.left=Ie(g.left,f.left),f},Lc(e,l,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function zw(t){const{width:e,height:n}=Zu(t);return{width:e,height:n}}function Kw(t,e,n){const r=Ge(e),i=Je(e),o=n==="fixed",a=$t(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const d=ze(0);function f(){d.x=mo(i)}if(r||!r&&!o)if((fn(e)!=="body"||Yn(i))&&(l=us(e)),r){const S=$t(e,!0,o,e);d.x=S.x+e.clientLeft,d.y=S.y+e.clientTop}else i&&f();o&&!r&&i&&f();const y=i&&!r&&!o?td(i,l):ze(0),g=a.left+l.scrollLeft-d.x-y.x,T=a.top+l.scrollTop-d.y-y.y;return{x:g,y:T,width:a.width,height:a.height}}function ti(t){return je(t).position==="static"}function jc(t,e){if(!Ge(t)||je(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Je(t)===n&&(n=n.ownerDocument.body),n}function rd(t,e){const n=xe(t);if(ls(t))return n;if(!Ge(t)){let i=St(t);for(;i&&!un(i);){if(Le(i)&&!ti(i))return i;i=St(i)}return n}let r=jc(t,e);for(;r&&Dw(r)&&ti(r);)r=jc(r,e);return r&&un(r)&&ti(r)&&!ho(r)?n:r||Mw(t)||n}const Gw=async function(t){const e=this.getOffsetParent||rd,n=this.getDimensions,r=await n(t.floating);return{reference:Kw(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function qw(t){return je(t).direction==="rtl"}const Xw={convertOffsetParentRelativeRectToViewportRelativeRect:Fw,getDocumentElement:Je,getClippingRect:Ww,getOffsetParent:rd,getElementRects:Gw,getClientRects:Uw,getDimensions:zw,getScale:on,isElement:Le,isRTL:qw};function sd(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Yw(t,e){let n=null,r;const i=Je(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),o();const f=t.getBoundingClientRect(),{left:y,top:g,width:T,height:S}=f;if(l||e(),!T||!S)return;const C=wr(g),I=wr(i.clientWidth-(y+T)),x=wr(i.clientHeight-(g+S)),N=wr(y),O={rootMargin:-C+"px "+-I+"px "+-x+"px "+-N+"px",threshold:Ie(0,At(1,d))||1};let D=!0;function L(F){const E=F[0].intersectionRatio;if(E!==d){if(!D)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E===1&&!sd(f,t.getBoundingClientRect())&&a(),D=!1}try{n=new IntersectionObserver(L,{...O,root:i.ownerDocument})}catch{n=new IntersectionObserver(L,O)}n.observe(t)}return a(!0),o}function Jw(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,f=po(t),y=i||o?[...f?Fn(f):[],...Fn(e)]:[];y.forEach(N=>{i&&N.addEventListener("scroll",n,{passive:!0}),o&&N.addEventListener("resize",n)});const g=f&&l?Yw(f,n):null;let T=-1,S=null;a&&(S=new ResizeObserver(N=>{let[M]=N;M&&M.target===f&&S&&(S.unobserve(e),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var O;(O=S)==null||O.observe(e)})),n()}),f&&!d&&S.observe(f),S.observe(e));let C,I=d?$t(t):null;d&&x();function x(){const N=$t(t);I&&!sd(I,N)&&n(),I=N,C=requestAnimationFrame(x)}return n(),()=>{var N;y.forEach(M=>{i&&M.removeEventListener("scroll",n),o&&M.removeEventListener("resize",n)}),g==null||g(),(N=S)==null||N.disconnect(),S=null,d&&cancelAnimationFrame(C)}}const Qw=Pw,Zw=kw,eE=Sw,tE=Ow,nE=Rw,Fc=Aw,rE=Nw,sE=(t,e,n)=>{const r=new Map,i={platform:Xw,...n},o={...i.platform,_c:r};return xw(t,e,{...i,platform:o})};var kr=typeof document<"u"?p.useLayoutEffect:p.useEffect;function Yr(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Yr(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&t.$$typeof)&&!Yr(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function id(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Uc(t,e){const n=id(t);return Math.round(e*n)/n}function ni(t){const e=p.useRef(t);return kr(()=>{e.current=t}),e}function iE(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:a}={},transform:l=!0,whileElementsMounted:d,open:f}=t,[y,g]=p.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[T,S]=p.useState(r);Yr(T,r)||S(r);const[C,I]=p.useState(null),[x,N]=p.useState(null),M=p.useCallback(B=>{B!==F.current&&(F.current=B,I(B))},[]),O=p.useCallback(B=>{B!==E.current&&(E.current=B,N(B))},[]),D=o||C,L=a||x,F=p.useRef(null),E=p.useRef(null),v=p.useRef(y),_=d!=null,b=ni(d),A=ni(i),R=ni(f),w=p.useCallback(()=>{if(!F.current||!E.current)return;const B={placement:e,strategy:n,middleware:T};A.current&&(B.platform=A.current),sE(F.current,E.current,B).then(U=>{const X={...U,isPositioned:R.current!==!1};$.current&&!Yr(v.current,X)&&(v.current=X,tl.flushSync(()=>{g(X)}))})},[T,e,n,A,R]);kr(()=>{f===!1&&v.current.isPositioned&&(v.current.isPositioned=!1,g(B=>({...B,isPositioned:!1})))},[f]);const $=p.useRef(!1);kr(()=>($.current=!0,()=>{$.current=!1}),[]),kr(()=>{if(D&&(F.current=D),L&&(E.current=L),D&&L){if(b.current)return b.current(D,L,w);w()}},[D,L,w,b,_]);const W=p.useMemo(()=>({reference:F,floating:E,setReference:M,setFloating:O}),[M,O]),G=p.useMemo(()=>({reference:D,floating:L}),[D,L]),Q=p.useMemo(()=>{const B={position:n,left:0,top:0};if(!G.floating)return B;const U=Uc(G.floating,y.x),X=Uc(G.floating,y.y);return l?{...B,transform:"translate("+U+"px, "+X+"px)",...id(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:U,top:X}},[n,l,G.floating,y.x,y.y]);return p.useMemo(()=>({...y,update:w,refs:W,elements:G,floatingStyles:Q}),[y,w,W,G,Q])}const oE=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?Fc({element:r.current,padding:i}).fn(n):{}:r?Fc({element:r,padding:i}).fn(n):{}}}},aE=(t,e)=>({...Qw(t),options:[t,e]}),cE=(t,e)=>({...Zw(t),options:[t,e]}),lE=(t,e)=>({...rE(t),options:[t,e]}),uE=(t,e)=>({...eE(t),options:[t,e]}),dE=(t,e)=>({...tE(t),options:[t,e]}),hE=(t,e)=>({...nE(t),options:[t,e]}),fE=(t,e)=>({...oE(t),options:[t,e]});var pE="Arrow",od=p.forwardRef((t,e)=>{const{children:n,width:r=10,height:i=5,...o}=t;return h.jsx(re.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:h.jsx("polygon",{points:"0,0 30,0 15,10"})})});od.displayName=pE;var mE=od;function gE(t){const[e,n]=p.useState(void 0);return Re(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let a,l;if("borderBoxSize"in o){const d=o.borderBoxSize,f=Array.isArray(d)?d[0]:d;a=f.inlineSize,l=f.blockSize}else a=t.offsetWidth,l=t.offsetHeight;n({width:a,height:l})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}var go="Popper",[ad,cd]=Vt(go),[vE,ld]=ad(go),ud=t=>{const{__scopePopper:e,children:n}=t,[r,i]=p.useState(null);return h.jsx(vE,{scope:e,anchor:r,onAnchorChange:i,children:n})};ud.displayName=go;var dd="PopperAnchor",hd=p.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...i}=t,o=ld(dd,n),a=p.useRef(null),l=he(e,a);return p.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:h.jsx(re.div,{...i,ref:l})});hd.displayName=dd;var vo="PopperContent",[yE,_E]=ad(vo),fd=p.forwardRef((t,e)=>{var _e,Rt,we,$e,Ct,Kt;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:d=!0,collisionBoundary:f=[],collisionPadding:y=0,sticky:g="partial",hideWhenDetached:T=!1,updatePositionStrategy:S="optimized",onPlaced:C,...I}=t,x=ld(vo,n),[N,M]=p.useState(null),O=he(e,Ze=>M(Ze)),[D,L]=p.useState(null),F=gE(D),E=(F==null?void 0:F.width)??0,v=(F==null?void 0:F.height)??0,_=r+(o!=="center"?"-"+o:""),b=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},A=Array.isArray(f)?f:[f],R=A.length>0,w={padding:b,boundary:A.filter(EE),altBoundary:R},{refs:$,floatingStyles:W,placement:G,isPositioned:Q,middlewareData:B}=iE({strategy:"fixed",placement:_,whileElementsMounted:(...Ze)=>Jw(...Ze,{animationFrame:S==="always"}),elements:{reference:x.anchor},middleware:[aE({mainAxis:i+v,alignmentAxis:a}),d&&cE({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?lE():void 0,...w}),d&&uE({...w}),dE({...w,apply:({elements:Ze,rects:Gt,availableWidth:pn,availableHeight:er})=>{const{width:ms,height:gs}=Gt.reference,Pt=Ze.floating.style;Pt.setProperty("--radix-popper-available-width",`${pn}px`),Pt.setProperty("--radix-popper-available-height",`${er}px`),Pt.setProperty("--radix-popper-anchor-width",`${ms}px`),Pt.setProperty("--radix-popper-anchor-height",`${gs}px`)}}),D&&fE({element:D,padding:l}),TE({arrowWidth:E,arrowHeight:v}),T&&hE({strategy:"referenceHidden",...w})]}),[U,X]=gd(G),oe=be(C);Re(()=>{Q&&(oe==null||oe())},[Q,oe]);const se=(_e=B.arrow)==null?void 0:_e.x,ee=(Rt=B.arrow)==null?void 0:Rt.y,Fe=((we=B.arrow)==null?void 0:we.centerOffset)!==0,[Ue,Qe]=p.useState();return Re(()=>{N&&Qe(window.getComputedStyle(N).zIndex)},[N]),h.jsx("div",{ref:$.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:Q?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ue,"--radix-popper-transform-origin":[($e=B.transformOrigin)==null?void 0:$e.x,(Ct=B.transformOrigin)==null?void 0:Ct.y].join(" "),...((Kt=B.hide)==null?void 0:Kt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:h.jsx(yE,{scope:n,placedSide:U,onArrowChange:L,arrowX:se,arrowY:ee,shouldHideArrow:Fe,children:h.jsx(re.div,{"data-side":U,"data-align":X,...I,ref:O,style:{...I.style,animation:Q?void 0:"none"}})})})});fd.displayName=vo;var pd="PopperArrow",wE={top:"bottom",right:"left",bottom:"top",left:"right"},md=p.forwardRef(function(e,n){const{__scopePopper:r,...i}=e,o=_E(pd,r),a=wE[o.placedSide];return h.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:h.jsx(mE,{...i,ref:n,style:{...i.style,display:"block"}})})});md.displayName=pd;function EE(t){return t!==null}var TE=t=>({name:"transformOrigin",options:t,fn(e){var x,N,M;const{placement:n,rects:r,middlewareData:i}=e,a=((x=i.arrow)==null?void 0:x.centerOffset)!==0,l=a?0:t.arrowWidth,d=a?0:t.arrowHeight,[f,y]=gd(n),g={start:"0%",center:"50%",end:"100%"}[y],T=(((N=i.arrow)==null?void 0:N.x)??0)+l/2,S=(((M=i.arrow)==null?void 0:M.y)??0)+d/2;let C="",I="";return f==="bottom"?(C=a?g:`${T}px`,I=`${-d}px`):f==="top"?(C=a?g:`${T}px`,I=`${r.floating.height+d}px`):f==="right"?(C=`${-d}px`,I=a?g:`${S}px`):f==="left"&&(C=`${r.floating.width+d}px`,I=a?g:`${S}px`),{data:{x:C,y:I}}}});function gd(t){const[e,n="center"]=t.split("-");return[e,n]}var bE=ud,IE=hd,xE=fd,AE=md,ri="rovingFocusGroup.onEntryFocus",SE={bubbles:!1,cancelable:!0},Jn="RovingFocusGroup",[Ci,vd,RE]=Fi(Jn),[CE,yd]=Vt(Jn,[RE]),[PE,kE]=CE(Jn),_d=p.forwardRef((t,e)=>h.jsx(Ci.Provider,{scope:t.__scopeRovingFocusGroup,children:h.jsx(Ci.Slot,{scope:t.__scopeRovingFocusGroup,children:h.jsx(NE,{...t,ref:e})})}));_d.displayName=Jn;var NE=p.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:d,onEntryFocus:f,preventScrollOnEntryFocus:y=!1,...g}=t,T=p.useRef(null),S=he(e,T),C=Gu(o),[I,x]=Vi({prop:a,defaultProp:l??null,onChange:d,caller:Jn}),[N,M]=p.useState(!1),O=be(f),D=vd(n),L=p.useRef(!1),[F,E]=p.useState(0);return p.useEffect(()=>{const v=T.current;if(v)return v.addEventListener(ri,O),()=>v.removeEventListener(ri,O)},[O]),h.jsx(PE,{scope:n,orientation:r,dir:C,loop:i,currentTabStopId:I,onItemFocus:p.useCallback(v=>x(v),[x]),onItemShiftTab:p.useCallback(()=>M(!0),[]),onFocusableItemAdd:p.useCallback(()=>E(v=>v+1),[]),onFocusableItemRemove:p.useCallback(()=>E(v=>v-1),[]),children:h.jsx(re.div,{tabIndex:N||F===0?-1:0,"data-orientation":r,...g,ref:S,style:{outline:"none",...t.style},onMouseDown:H(t.onMouseDown,()=>{L.current=!0}),onFocus:H(t.onFocus,v=>{const _=!L.current;if(v.target===v.currentTarget&&_&&!N){const b=new CustomEvent(ri,SE);if(v.currentTarget.dispatchEvent(b),!b.defaultPrevented){const A=D().filter(G=>G.focusable),R=A.find(G=>G.active),w=A.find(G=>G.id===I),W=[R,w,...A].filter(Boolean).map(G=>G.ref.current);Td(W,y)}}L.current=!1}),onBlur:H(t.onBlur,()=>M(!1))})})}),wd="RovingFocusGroupItem",Ed=p.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,children:a,...l}=t,d=xi(),f=o||d,y=kE(wd,n),g=y.currentTabStopId===f,T=vd(n),{onFocusableItemAdd:S,onFocusableItemRemove:C,currentTabStopId:I}=y;return p.useEffect(()=>{if(r)return S(),()=>C()},[r,S,C]),h.jsx(Ci.ItemSlot,{scope:n,id:f,focusable:r,active:i,children:h.jsx(re.span,{tabIndex:g?0:-1,"data-orientation":y.orientation,...l,ref:e,onMouseDown:H(t.onMouseDown,x=>{r?y.onItemFocus(f):x.preventDefault()}),onFocus:H(t.onFocus,()=>y.onItemFocus(f)),onKeyDown:H(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){y.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const N=ME(x,y.orientation,y.dir);if(N!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let O=T().filter(D=>D.focusable).map(D=>D.ref.current);if(N==="last")O.reverse();else if(N==="prev"||N==="next"){N==="prev"&&O.reverse();const D=O.indexOf(x.currentTarget);O=y.loop?LE(O,D+1):O.slice(D+1)}setTimeout(()=>Td(O))}}),children:typeof a=="function"?a({isCurrentTabStop:g,hasTabStop:I!=null}):a})})});Ed.displayName=wd;var OE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function DE(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function ME(t,e,n){const r=DE(t.key,n);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return OE[r]}function Td(t,e=!1){const n=document.activeElement;for(const r of t)if(r===n||(r.focus({preventScroll:e}),document.activeElement!==n))return}function LE(t,e){return t.map((n,r)=>t[(e+r)%t.length])}var jE=_d,FE=Ed,UE=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Zt=new WeakMap,Er=new WeakMap,Tr={},si=0,bd=function(t){return t&&(t.host||bd(t.parentNode))},$E=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=bd(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},VE=function(t,e,n,r){var i=$E(e,Array.isArray(t)?t:[t]);Tr[n]||(Tr[n]=new WeakMap);var o=Tr[n],a=[],l=new Set,d=new Set(i),f=function(g){!g||l.has(g)||(l.add(g),f(g.parentNode))};i.forEach(f);var y=function(g){!g||d.has(g)||Array.prototype.forEach.call(g.children,function(T){if(l.has(T))y(T);else try{var S=T.getAttribute(r),C=S!==null&&S!=="false",I=(Zt.get(T)||0)+1,x=(o.get(T)||0)+1;Zt.set(T,I),o.set(T,x),a.push(T),I===1&&C&&Er.set(T,!0),x===1&&T.setAttribute(n,"true"),C||T.setAttribute(r,"true")}catch(N){console.error("aria-hidden: cannot operate on ",T,N)}})};return y(e),l.clear(),si++,function(){a.forEach(function(g){var T=Zt.get(g)-1,S=o.get(g)-1;Zt.set(g,T),o.set(g,S),T||(Er.has(g)||g.removeAttribute(r),Er.delete(g)),S||g.removeAttribute(n)}),si--,si||(Zt=new WeakMap,Zt=new WeakMap,Er=new WeakMap,Tr={})}},BE=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=UE(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),VE(r,i,n,"aria-hidden")):function(){return null}},Nr="right-scroll-bar-position",Or="width-before-scroll-bar",HE="with-scroll-bars-hidden",WE="--removed-body-scroll-bar-size";function ii(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function zE(t,e){var n=p.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var KE=typeof window<"u"?p.useLayoutEffect:p.useEffect,$c=new WeakMap;function GE(t,e){var n=zE(null,function(r){return t.forEach(function(i){return ii(i,r)})});return KE(function(){var r=$c.get(n);if(r){var i=new Set(r),o=new Set(t),a=n.current;i.forEach(function(l){o.has(l)||ii(l,null)}),o.forEach(function(l){i.has(l)||ii(l,a)})}$c.set(n,t)},[t]),n}function qE(t){return t}function XE(t,e){e===void 0&&(e=qE);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(o){var a=e(o,r);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(o){for(r=!0;n.length;){var a=n;n=[],a.forEach(o)}n={push:function(l){return o(l)},filter:function(){return n}}},assignMedium:function(o){r=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(o),a=n}var d=function(){var y=a;a=[],y.forEach(o)},f=function(){return Promise.resolve().then(d)};f(),n={push:function(y){a.push(y),f()},filter:function(y){return a=a.filter(y),n}}}};return i}function YE(t){t===void 0&&(t={});var e=XE(null);return e.options=Ve({async:!0,ssr:!1},t),e}var Id=function(t){var e=t.sideCar,n=Wn(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,Ve({},n))};Id.isSideCarExport=!0;function JE(t,e){return t.useMedium(e),Id}var xd=YE(),oi=function(){},ds=p.forwardRef(function(t,e){var n=p.useRef(null),r=p.useState({onScrollCapture:oi,onWheelCapture:oi,onTouchMoveCapture:oi}),i=r[0],o=r[1],a=t.forwardProps,l=t.children,d=t.className,f=t.removeScrollBar,y=t.enabled,g=t.shards,T=t.sideCar,S=t.noIsolation,C=t.inert,I=t.allowPinchZoom,x=t.as,N=x===void 0?"div":x,M=t.gapMode,O=Wn(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),D=T,L=GE([n,e]),F=Ve(Ve({},O),i);return p.createElement(p.Fragment,null,y&&p.createElement(D,{sideCar:xd,removeScrollBar:f,shards:g,noIsolation:S,inert:C,setCallbacks:o,allowPinchZoom:!!I,lockRef:n,gapMode:M}),a?p.cloneElement(p.Children.only(l),Ve(Ve({},F),{ref:L})):p.createElement(N,Ve({},F,{className:d,ref:L}),l))});ds.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ds.classNames={fullWidth:Or,zeroRight:Nr};var QE=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ZE(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=QE();return e&&t.setAttribute("nonce",e),t}function eT(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function tT(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var nT=function(){var t=0,e=null;return{add:function(n){t==0&&(e=ZE())&&(eT(e,n),tT(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},rT=function(){var t=nT();return function(e,n){p.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},Ad=function(){var t=rT(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},sT={left:0,top:0,right:0,gap:0},ai=function(t){return parseInt(t||"",10)||0},iT=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[ai(n),ai(r),ai(i)]},oT=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return sT;var e=iT(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},aT=Ad(),an="data-scroll-locked",cT=function(t,e,n,r){var i=t.left,o=t.top,a=t.right,l=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(HE,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(an,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Nr,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Or,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Nr," .").concat(Nr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Or," .").concat(Or,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(an,`] {
    `).concat(WE,": ").concat(l,`px;
  }
`)},Vc=function(){var t=parseInt(document.body.getAttribute(an)||"0",10);return isFinite(t)?t:0},lT=function(){p.useEffect(function(){return document.body.setAttribute(an,(Vc()+1).toString()),function(){var t=Vc()-1;t<=0?document.body.removeAttribute(an):document.body.setAttribute(an,t.toString())}},[])},uT=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;lT();var o=p.useMemo(function(){return oT(i)},[i]);return p.createElement(aT,{styles:cT(o,!e,i,n?"":"!important")})},Pi=!1;if(typeof window<"u")try{var br=Object.defineProperty({},"passive",{get:function(){return Pi=!0,!0}});window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Pi=!1}var en=Pi?{passive:!1}:!1,dT=function(t){return t.tagName==="TEXTAREA"},Sd=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!dT(t)&&n[e]==="visible")},hT=function(t){return Sd(t,"overflowY")},fT=function(t){return Sd(t,"overflowX")},Bc=function(t,e){var n=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Rd(t,r);if(i){var o=Cd(t,r),a=o[1],l=o[2];if(a>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},pT=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},mT=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},Rd=function(t,e){return t==="v"?hT(e):fT(e)},Cd=function(t,e){return t==="v"?pT(e):mT(e)},gT=function(t,e){return t==="h"&&e==="rtl"?-1:1},vT=function(t,e,n,r,i){var o=gT(t,window.getComputedStyle(e).direction),a=o*r,l=n.target,d=e.contains(l),f=!1,y=a>0,g=0,T=0;do{var S=Cd(t,l),C=S[0],I=S[1],x=S[2],N=I-x-o*C;(C||N)&&Rd(t,l)&&(g+=N,T+=C),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!d&&l!==document.body||d&&(e.contains(l)||e===l));return(y&&Math.abs(g)<1||!y&&Math.abs(T)<1)&&(f=!0),f},Ir=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Hc=function(t){return[t.deltaX,t.deltaY]},Wc=function(t){return t&&"current"in t?t.current:t},yT=function(t,e){return t[0]===e[0]&&t[1]===e[1]},_T=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},wT=0,tn=[];function ET(t){var e=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),i=p.useState(wT++)[0],o=p.useState(Ad)[0],a=p.useRef(t);p.useEffect(function(){a.current=t},[t]),p.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var I=Lg([t.lockRef.current],(t.shards||[]).map(Wc),!0).filter(Boolean);return I.forEach(function(x){return x.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),I.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var l=p.useCallback(function(I,x){if("touches"in I&&I.touches.length===2||I.type==="wheel"&&I.ctrlKey)return!a.current.allowPinchZoom;var N=Ir(I),M=n.current,O="deltaX"in I?I.deltaX:M[0]-N[0],D="deltaY"in I?I.deltaY:M[1]-N[1],L,F=I.target,E=Math.abs(O)>Math.abs(D)?"h":"v";if("touches"in I&&E==="h"&&F.type==="range")return!1;var v=Bc(E,F);if(!v)return!0;if(v?L=E:(L=E==="v"?"h":"v",v=Bc(E,F)),!v)return!1;if(!r.current&&"changedTouches"in I&&(O||D)&&(r.current=L),!L)return!0;var _=r.current||L;return vT(_,x,I,_==="h"?O:D)},[]),d=p.useCallback(function(I){var x=I;if(!(!tn.length||tn[tn.length-1]!==o)){var N="deltaY"in x?Hc(x):Ir(x),M=e.current.filter(function(L){return L.name===x.type&&(L.target===x.target||x.target===L.shadowParent)&&yT(L.delta,N)})[0];if(M&&M.should){x.cancelable&&x.preventDefault();return}if(!M){var O=(a.current.shards||[]).map(Wc).filter(Boolean).filter(function(L){return L.contains(x.target)}),D=O.length>0?l(x,O[0]):!a.current.noIsolation;D&&x.cancelable&&x.preventDefault()}}},[]),f=p.useCallback(function(I,x,N,M){var O={name:I,delta:x,target:N,should:M,shadowParent:TT(N)};e.current.push(O),setTimeout(function(){e.current=e.current.filter(function(D){return D!==O})},1)},[]),y=p.useCallback(function(I){n.current=Ir(I),r.current=void 0},[]),g=p.useCallback(function(I){f(I.type,Hc(I),I.target,l(I,t.lockRef.current))},[]),T=p.useCallback(function(I){f(I.type,Ir(I),I.target,l(I,t.lockRef.current))},[]);p.useEffect(function(){return tn.push(o),t.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:T}),document.addEventListener("wheel",d,en),document.addEventListener("touchmove",d,en),document.addEventListener("touchstart",y,en),function(){tn=tn.filter(function(I){return I!==o}),document.removeEventListener("wheel",d,en),document.removeEventListener("touchmove",d,en),document.removeEventListener("touchstart",y,en)}},[]);var S=t.removeScrollBar,C=t.inert;return p.createElement(p.Fragment,null,C?p.createElement(o,{styles:_T(i)}):null,S?p.createElement(uT,{gapMode:t.gapMode}):null)}function TT(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const bT=JE(xd,ET);var Pd=p.forwardRef(function(t,e){return p.createElement(ds,Ve({},t,{ref:e,sideCar:bT}))});Pd.classNames=ds.classNames;var ki=["Enter"," "],IT=["ArrowDown","PageUp","Home"],kd=["ArrowUp","PageDown","End"],xT=[...IT,...kd],AT={ltr:[...ki,"ArrowRight"],rtl:[...ki,"ArrowLeft"]},ST={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Qn="Menu",[Un,RT,CT]=Fi(Qn),[Wt,Nd]=Vt(Qn,[CT,cd,yd]),hs=cd(),Od=yd(),[PT,zt]=Wt(Qn),[kT,Zn]=Wt(Qn),Dd=t=>{const{__scopeMenu:e,open:n=!1,children:r,dir:i,onOpenChange:o,modal:a=!0}=t,l=hs(e),[d,f]=p.useState(null),y=p.useRef(!1),g=be(o),T=Gu(i);return p.useEffect(()=>{const S=()=>{y.current=!0,document.addEventListener("pointerdown",C,{capture:!0,once:!0}),document.addEventListener("pointermove",C,{capture:!0,once:!0})},C=()=>y.current=!1;return document.addEventListener("keydown",S,{capture:!0}),()=>{document.removeEventListener("keydown",S,{capture:!0}),document.removeEventListener("pointerdown",C,{capture:!0}),document.removeEventListener("pointermove",C,{capture:!0})}},[]),h.jsx(bE,{...l,children:h.jsx(PT,{scope:e,open:n,onOpenChange:g,content:d,onContentChange:f,children:h.jsx(kT,{scope:e,onClose:p.useCallback(()=>g(!1),[g]),isUsingKeyboardRef:y,dir:T,modal:a,children:r})})})};Dd.displayName=Qn;var NT="MenuAnchor",yo=p.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t,i=hs(n);return h.jsx(IE,{...i,...r,ref:e})});yo.displayName=NT;var _o="MenuPortal",[OT,Md]=Wt(_o,{forceMount:void 0}),Ld=t=>{const{__scopeMenu:e,forceMount:n,children:r,container:i}=t,o=zt(_o,e);return h.jsx(OT,{scope:e,forceMount:n,children:h.jsx(dn,{present:n||o.open,children:h.jsx($i,{asChild:!0,container:i,children:r})})})};Ld.displayName=_o;var Se="MenuContent",[DT,wo]=Wt(Se),jd=p.forwardRef((t,e)=>{const n=Md(Se,t.__scopeMenu),{forceMount:r=n.forceMount,...i}=t,o=zt(Se,t.__scopeMenu),a=Zn(Se,t.__scopeMenu);return h.jsx(Un.Provider,{scope:t.__scopeMenu,children:h.jsx(dn,{present:r||o.open,children:h.jsx(Un.Slot,{scope:t.__scopeMenu,children:a.modal?h.jsx(MT,{...i,ref:e}):h.jsx(LT,{...i,ref:e})})})})}),MT=p.forwardRef((t,e)=>{const n=zt(Se,t.__scopeMenu),r=p.useRef(null),i=he(e,r);return p.useEffect(()=>{const o=r.current;if(o)return BE(o)},[]),h.jsx(Eo,{...t,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:H(t.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),LT=p.forwardRef((t,e)=>{const n=zt(Se,t.__scopeMenu);return h.jsx(Eo,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),jT=ui("MenuContent.ScrollLock"),Eo=p.forwardRef((t,e)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:l,onEntryFocus:d,onEscapeKeyDown:f,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:T,onDismiss:S,disableOutsideScroll:C,...I}=t,x=zt(Se,n),N=Zn(Se,n),M=hs(n),O=Od(n),D=RT(n),[L,F]=p.useState(null),E=p.useRef(null),v=he(e,E,x.onContentChange),_=p.useRef(0),b=p.useRef(""),A=p.useRef(0),R=p.useRef(null),w=p.useRef("right"),$=p.useRef(0),W=C?Pd:p.Fragment,G=C?{as:jT,allowPinchZoom:!0}:void 0,Q=U=>{var _e,Rt;const X=b.current+U,oe=D().filter(we=>!we.disabled),se=document.activeElement,ee=(_e=oe.find(we=>we.ref.current===se))==null?void 0:_e.textValue,Fe=oe.map(we=>we.textValue),Ue=XT(Fe,X,ee),Qe=(Rt=oe.find(we=>we.textValue===Ue))==null?void 0:Rt.ref.current;(function we($e){b.current=$e,window.clearTimeout(_.current),$e!==""&&(_.current=window.setTimeout(()=>we(""),1e3))})(X),Qe&&setTimeout(()=>Qe.focus())};p.useEffect(()=>()=>window.clearTimeout(_.current),[]),aw();const B=p.useCallback(U=>{var oe,se;return w.current===((oe=R.current)==null?void 0:oe.side)&&JT(U,(se=R.current)==null?void 0:se.area)},[]);return h.jsx(DT,{scope:n,searchRef:b,onItemEnter:p.useCallback(U=>{B(U)&&U.preventDefault()},[B]),onItemLeave:p.useCallback(U=>{var X;B(U)||((X=E.current)==null||X.focus(),F(null))},[B]),onTriggerLeave:p.useCallback(U=>{B(U)&&U.preventDefault()},[B]),pointerGraceTimerRef:A,onPointerGraceIntentChange:p.useCallback(U=>{R.current=U},[]),children:h.jsx(W,{...G,children:h.jsx(qu,{asChild:!0,trapped:i,onMountAutoFocus:H(o,U=>{var X;U.preventDefault(),(X=E.current)==null||X.focus({preventScroll:!0})}),onUnmountAutoFocus:a,children:h.jsx(Ui,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:f,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:T,onDismiss:S,children:h.jsx(jE,{asChild:!0,...O,dir:N.dir,orientation:"vertical",loop:r,currentTabStopId:L,onCurrentTabStopIdChange:F,onEntryFocus:H(d,U=>{N.isUsingKeyboardRef.current||U.preventDefault()}),preventScrollOnEntryFocus:!0,children:h.jsx(xE,{role:"menu","aria-orientation":"vertical","data-state":Zd(x.open),"data-radix-menu-content":"",dir:N.dir,...M,...I,ref:v,style:{outline:"none",...I.style},onKeyDown:H(I.onKeyDown,U=>{const oe=U.target.closest("[data-radix-menu-content]")===U.currentTarget,se=U.ctrlKey||U.altKey||U.metaKey,ee=U.key.length===1;oe&&(U.key==="Tab"&&U.preventDefault(),!se&&ee&&Q(U.key));const Fe=E.current;if(U.target!==Fe||!xT.includes(U.key))return;U.preventDefault();const Qe=D().filter(_e=>!_e.disabled).map(_e=>_e.ref.current);kd.includes(U.key)&&Qe.reverse(),GT(Qe)}),onBlur:H(t.onBlur,U=>{U.currentTarget.contains(U.target)||(window.clearTimeout(_.current),b.current="")}),onPointerMove:H(t.onPointerMove,$n(U=>{const X=U.target,oe=$.current!==U.clientX;if(U.currentTarget.contains(X)&&oe){const se=U.clientX>$.current?"right":"left";w.current=se,$.current=U.clientX}}))})})})})})})});jd.displayName=Se;var FT="MenuGroup",To=p.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return h.jsx(re.div,{role:"group",...r,ref:e})});To.displayName=FT;var UT="MenuLabel",Fd=p.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return h.jsx(re.div,{...r,ref:e})});Fd.displayName=UT;var Jr="MenuItem",zc="menu.itemSelect",fs=p.forwardRef((t,e)=>{const{disabled:n=!1,onSelect:r,...i}=t,o=p.useRef(null),a=Zn(Jr,t.__scopeMenu),l=wo(Jr,t.__scopeMenu),d=he(e,o),f=p.useRef(!1),y=()=>{const g=o.current;if(!n&&g){const T=new CustomEvent(zc,{bubbles:!0,cancelable:!0});g.addEventListener(zc,S=>r==null?void 0:r(S),{once:!0}),Oi(g,T),T.defaultPrevented?f.current=!1:a.onClose()}};return h.jsx(Ud,{...i,ref:d,disabled:n,onClick:H(t.onClick,y),onPointerDown:g=>{var T;(T=t.onPointerDown)==null||T.call(t,g),f.current=!0},onPointerUp:H(t.onPointerUp,g=>{var T;f.current||(T=g.currentTarget)==null||T.click()}),onKeyDown:H(t.onKeyDown,g=>{const T=l.searchRef.current!=="";n||T&&g.key===" "||ki.includes(g.key)&&(g.currentTarget.click(),g.preventDefault())})})});fs.displayName=Jr;var Ud=p.forwardRef((t,e)=>{const{__scopeMenu:n,disabled:r=!1,textValue:i,...o}=t,a=wo(Jr,n),l=Od(n),d=p.useRef(null),f=he(e,d),[y,g]=p.useState(!1),[T,S]=p.useState("");return p.useEffect(()=>{const C=d.current;C&&S((C.textContent??"").trim())},[o.children]),h.jsx(Un.ItemSlot,{scope:n,disabled:r,textValue:i??T,children:h.jsx(FE,{asChild:!0,...l,focusable:!r,children:h.jsx(re.div,{role:"menuitem","data-highlighted":y?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...o,ref:f,onPointerMove:H(t.onPointerMove,$n(C=>{r?a.onItemLeave(C):(a.onItemEnter(C),C.defaultPrevented||C.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:H(t.onPointerLeave,$n(C=>a.onItemLeave(C))),onFocus:H(t.onFocus,()=>g(!0)),onBlur:H(t.onBlur,()=>g(!1))})})})}),$T="MenuCheckboxItem",$d=p.forwardRef((t,e)=>{const{checked:n=!1,onCheckedChange:r,...i}=t;return h.jsx(zd,{scope:t.__scopeMenu,checked:n,children:h.jsx(fs,{role:"menuitemcheckbox","aria-checked":Qr(n)?"mixed":n,...i,ref:e,"data-state":Io(n),onSelect:H(i.onSelect,()=>r==null?void 0:r(Qr(n)?!0:!n),{checkForDefaultPrevented:!1})})})});$d.displayName=$T;var Vd="MenuRadioGroup",[VT,BT]=Wt(Vd,{value:void 0,onValueChange:()=>{}}),Bd=p.forwardRef((t,e)=>{const{value:n,onValueChange:r,...i}=t,o=be(r);return h.jsx(VT,{scope:t.__scopeMenu,value:n,onValueChange:o,children:h.jsx(To,{...i,ref:e})})});Bd.displayName=Vd;var Hd="MenuRadioItem",Wd=p.forwardRef((t,e)=>{const{value:n,...r}=t,i=BT(Hd,t.__scopeMenu),o=n===i.value;return h.jsx(zd,{scope:t.__scopeMenu,checked:o,children:h.jsx(fs,{role:"menuitemradio","aria-checked":o,...r,ref:e,"data-state":Io(o),onSelect:H(r.onSelect,()=>{var a;return(a=i.onValueChange)==null?void 0:a.call(i,n)},{checkForDefaultPrevented:!1})})})});Wd.displayName=Hd;var bo="MenuItemIndicator",[zd,HT]=Wt(bo,{checked:!1}),Kd=p.forwardRef((t,e)=>{const{__scopeMenu:n,forceMount:r,...i}=t,o=HT(bo,n);return h.jsx(dn,{present:r||Qr(o.checked)||o.checked===!0,children:h.jsx(re.span,{...i,ref:e,"data-state":Io(o.checked)})})});Kd.displayName=bo;var WT="MenuSeparator",Gd=p.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t;return h.jsx(re.div,{role:"separator","aria-orientation":"horizontal",...r,ref:e})});Gd.displayName=WT;var zT="MenuArrow",qd=p.forwardRef((t,e)=>{const{__scopeMenu:n,...r}=t,i=hs(n);return h.jsx(AE,{...i,...r,ref:e})});qd.displayName=zT;var KT="MenuSub",[JI,Xd]=Wt(KT),Pn="MenuSubTrigger",Yd=p.forwardRef((t,e)=>{const n=zt(Pn,t.__scopeMenu),r=Zn(Pn,t.__scopeMenu),i=Xd(Pn,t.__scopeMenu),o=wo(Pn,t.__scopeMenu),a=p.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:d}=o,f={__scopeMenu:t.__scopeMenu},y=p.useCallback(()=>{a.current&&window.clearTimeout(a.current),a.current=null},[]);return p.useEffect(()=>y,[y]),p.useEffect(()=>{const g=l.current;return()=>{window.clearTimeout(g),d(null)}},[l,d]),h.jsx(yo,{asChild:!0,...f,children:h.jsx(Ud,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":Zd(n.open),...t,ref:rl(e,i.onTriggerChange),onClick:g=>{var T;(T=t.onClick)==null||T.call(t,g),!(t.disabled||g.defaultPrevented)&&(g.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:H(t.onPointerMove,$n(g=>{o.onItemEnter(g),!g.defaultPrevented&&!t.disabled&&!n.open&&!a.current&&(o.onPointerGraceIntentChange(null),a.current=window.setTimeout(()=>{n.onOpenChange(!0),y()},100))})),onPointerLeave:H(t.onPointerLeave,$n(g=>{var S,C;y();const T=(S=n.content)==null?void 0:S.getBoundingClientRect();if(T){const I=(C=n.content)==null?void 0:C.dataset.side,x=I==="right",N=x?-5:5,M=T[x?"left":"right"],O=T[x?"right":"left"];o.onPointerGraceIntentChange({area:[{x:g.clientX+N,y:g.clientY},{x:M,y:T.top},{x:O,y:T.top},{x:O,y:T.bottom},{x:M,y:T.bottom}],side:I}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.onPointerGraceIntentChange(null),300)}else{if(o.onTriggerLeave(g),g.defaultPrevented)return;o.onPointerGraceIntentChange(null)}})),onKeyDown:H(t.onKeyDown,g=>{var S;const T=o.searchRef.current!=="";t.disabled||T&&g.key===" "||AT[r.dir].includes(g.key)&&(n.onOpenChange(!0),(S=n.content)==null||S.focus(),g.preventDefault())})})})});Yd.displayName=Pn;var Jd="MenuSubContent",Qd=p.forwardRef((t,e)=>{const n=Md(Se,t.__scopeMenu),{forceMount:r=n.forceMount,...i}=t,o=zt(Se,t.__scopeMenu),a=Zn(Se,t.__scopeMenu),l=Xd(Jd,t.__scopeMenu),d=p.useRef(null),f=he(e,d);return h.jsx(Un.Provider,{scope:t.__scopeMenu,children:h.jsx(dn,{present:r||o.open,children:h.jsx(Un.Slot,{scope:t.__scopeMenu,children:h.jsx(Eo,{id:l.contentId,"aria-labelledby":l.triggerId,...i,ref:f,align:"start",side:a.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:y=>{var g;a.isUsingKeyboardRef.current&&((g=d.current)==null||g.focus()),y.preventDefault()},onCloseAutoFocus:y=>y.preventDefault(),onFocusOutside:H(t.onFocusOutside,y=>{y.target!==l.trigger&&o.onOpenChange(!1)}),onEscapeKeyDown:H(t.onEscapeKeyDown,y=>{a.onClose(),y.preventDefault()}),onKeyDown:H(t.onKeyDown,y=>{var S;const g=y.currentTarget.contains(y.target),T=ST[a.dir].includes(y.key);g&&T&&(o.onOpenChange(!1),(S=l.trigger)==null||S.focus(),y.preventDefault())})})})})})});Qd.displayName=Jd;function Zd(t){return t?"open":"closed"}function Qr(t){return t==="indeterminate"}function Io(t){return Qr(t)?"indeterminate":t?"checked":"unchecked"}function GT(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}function qT(t,e){return t.map((n,r)=>t[(e+r)%t.length])}function XT(t,e,n){const i=e.length>1&&Array.from(e).every(f=>f===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let a=qT(t,Math.max(o,0));i.length===1&&(a=a.filter(f=>f!==n));const d=a.find(f=>f.toLowerCase().startsWith(i.toLowerCase()));return d!==n?d:void 0}function YT(t,e){const{x:n,y:r}=t;let i=!1;for(let o=0,a=e.length-1;o<e.length;a=o++){const l=e[o],d=e[a],f=l.x,y=l.y,g=d.x,T=d.y;y>r!=T>r&&n<(g-f)*(r-y)/(T-y)+f&&(i=!i)}return i}function JT(t,e){if(!e)return!1;const n={x:t.clientX,y:t.clientY};return YT(n,e)}function $n(t){return e=>e.pointerType==="mouse"?t(e):void 0}var QT=Dd,ZT=yo,eb=Ld,tb=jd,nb=To,rb=Fd,sb=fs,ib=$d,ob=Bd,ab=Wd,cb=Kd,lb=Gd,ub=qd,db=Yd,hb=Qd,ps="DropdownMenu",[fb,QI]=Vt(ps,[Nd]),ye=Nd(),[pb,eh]=fb(ps),th=t=>{const{__scopeDropdownMenu:e,children:n,dir:r,open:i,defaultOpen:o,onOpenChange:a,modal:l=!0}=t,d=ye(e),f=p.useRef(null),[y,g]=Vi({prop:i,defaultProp:o??!1,onChange:a,caller:ps});return h.jsx(pb,{scope:e,triggerId:xi(),triggerRef:f,contentId:xi(),open:y,onOpenChange:g,onOpenToggle:p.useCallback(()=>g(T=>!T),[g]),modal:l,children:h.jsx(QT,{...d,open:y,onOpenChange:g,dir:r,modal:l,children:n})})};th.displayName=ps;var nh="DropdownMenuTrigger",rh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...i}=t,o=eh(nh,n),a=ye(n);return h.jsx(ZT,{asChild:!0,...a,children:h.jsx(re.button,{type:"button",id:o.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":o.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...i,ref:rl(e,o.triggerRef),onPointerDown:H(t.onPointerDown,l=>{!r&&l.button===0&&l.ctrlKey===!1&&(o.onOpenToggle(),o.open||l.preventDefault())}),onKeyDown:H(t.onKeyDown,l=>{r||(["Enter"," "].includes(l.key)&&o.onOpenToggle(),l.key==="ArrowDown"&&o.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});rh.displayName=nh;var mb="DropdownMenuPortal",sh=t=>{const{__scopeDropdownMenu:e,...n}=t,r=ye(e);return h.jsx(eb,{...r,...n})};sh.displayName=mb;var ih="DropdownMenuContent",oh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=eh(ih,n),o=ye(n),a=p.useRef(!1);return h.jsx(tb,{id:i.contentId,"aria-labelledby":i.triggerId,...o,...r,ref:e,onCloseAutoFocus:H(t.onCloseAutoFocus,l=>{var d;a.current||(d=i.triggerRef.current)==null||d.focus(),a.current=!1,l.preventDefault()}),onInteractOutside:H(t.onInteractOutside,l=>{const d=l.detail.originalEvent,f=d.button===0&&d.ctrlKey===!0,y=d.button===2||f;(!i.modal||y)&&(a.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});oh.displayName=ih;var gb="DropdownMenuGroup",ah=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(nb,{...i,...r,ref:e})});ah.displayName=gb;var vb="DropdownMenuLabel",ch=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(rb,{...i,...r,ref:e})});ch.displayName=vb;var yb="DropdownMenuItem",lh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(sb,{...i,...r,ref:e})});lh.displayName=yb;var _b="DropdownMenuCheckboxItem",uh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(ib,{...i,...r,ref:e})});uh.displayName=_b;var wb="DropdownMenuRadioGroup",Eb=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(ob,{...i,...r,ref:e})});Eb.displayName=wb;var Tb="DropdownMenuRadioItem",dh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(ab,{...i,...r,ref:e})});dh.displayName=Tb;var bb="DropdownMenuItemIndicator",hh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(cb,{...i,...r,ref:e})});hh.displayName=bb;var Ib="DropdownMenuSeparator",fh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(lb,{...i,...r,ref:e})});fh.displayName=Ib;var xb="DropdownMenuArrow",Ab=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(ub,{...i,...r,ref:e})});Ab.displayName=xb;var Sb="DropdownMenuSubTrigger",ph=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(db,{...i,...r,ref:e})});ph.displayName=Sb;var Rb="DropdownMenuSubContent",mh=p.forwardRef((t,e)=>{const{__scopeDropdownMenu:n,...r}=t,i=ye(n);return h.jsx(hb,{...i,...r,ref:e,style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});mh.displayName=Rb;var Cb=th,Pb=rh,kb=sh,gh=oh,Nb=ah,vh=ch,yh=lh,_h=uh,wh=dh,Eh=hh,Th=fh,bh=ph,Ih=mh;const xh=Cb,Ah=Pb,Sh=Nb,Ob=p.forwardRef(({className:t,inset:e,children:n,...r},i)=>h.jsxs(bh,{ref:i,className:ie("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",e&&"pl-8",t),...r,children:[n,h.jsx(If,{className:"ml-auto h-4 w-4"})]}));Ob.displayName=bh.displayName;const Db=p.forwardRef(({className:t,...e},n)=>h.jsx(Ih,{ref:n,className:ie("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...e}));Db.displayName=Ih.displayName;const xo=p.forwardRef(({className:t,sideOffset:e=4,...n},r)=>h.jsx(kb,{children:h.jsx(gh,{ref:r,sideOffset:e,className:ie("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));xo.displayName=gh.displayName;const nt=p.forwardRef(({className:t,inset:e,...n},r)=>h.jsx(yh,{ref:r,className:ie("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e&&"pl-8",t),...n}));nt.displayName=yh.displayName;const Mb=p.forwardRef(({className:t,children:e,checked:n,...r},i)=>h.jsxs(_h,{ref:i,className:ie("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...r,children:[h.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsx(Eh,{children:h.jsx(xf,{className:"h-4 w-4"})})}),e]}));Mb.displayName=_h.displayName;const Lb=p.forwardRef(({className:t,children:e,...n},r)=>h.jsxs(wh,{ref:r,className:ie("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[h.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsx(Eh,{children:h.jsx(Af,{className:"h-2 w-2 fill-current"})})}),e]}));Lb.displayName=wh.displayName;const Ao=p.forwardRef(({className:t,inset:e,...n},r)=>h.jsx(vh,{ref:r,className:ie("px-2 py-1.5 text-sm font-semibold",e&&"pl-8",t),...n}));Ao.displayName=vh.displayName;const Zr=p.forwardRef(({className:t,...e},n)=>h.jsx(Th,{ref:n,className:ie("-mx-1 my-1 h-px bg-muted",t),...e}));Zr.displayName=Th.displayName;var ci={exports:{}},li={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function jb(){if(Kc)return li;Kc=1;var t=Qc();function e(g,T){return g===T&&(g!==0||1/g===1/T)||g!==g&&T!==T}var n=typeof Object.is=="function"?Object.is:e,r=t.useState,i=t.useEffect,o=t.useLayoutEffect,a=t.useDebugValue;function l(g,T){var S=T(),C=r({inst:{value:S,getSnapshot:T}}),I=C[0].inst,x=C[1];return o(function(){I.value=S,I.getSnapshot=T,d(I)&&x({inst:I})},[g,S,T]),i(function(){return d(I)&&x({inst:I}),g(function(){d(I)&&x({inst:I})})},[g]),a(S),S}function d(g){var T=g.getSnapshot;g=g.value;try{var S=T();return!n(g,S)}catch{return!0}}function f(g,T){return T()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:l;return li.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:y,li}var Gc;function Fb(){return Gc||(Gc=1,ci.exports=jb()),ci.exports}var Ub=Fb();function $b(){return Ub.useSyncExternalStore(Vb,()=>!0,()=>!1)}function Vb(){return()=>{}}var So="Avatar",[Bb,ZI]=Vt(So),[Hb,Rh]=Bb(So),Ch=p.forwardRef((t,e)=>{const{__scopeAvatar:n,...r}=t,[i,o]=p.useState("idle");return h.jsx(Hb,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:o,children:h.jsx(re.span,{...r,ref:e})})});Ch.displayName=So;var Ph="AvatarImage",kh=p.forwardRef((t,e)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:i=()=>{},...o}=t,a=Rh(Ph,n),l=Wb(r,o),d=be(f=>{i(f),a.onImageLoadingStatusChange(f)});return Re(()=>{l!=="idle"&&d(l)},[l,d]),l==="loaded"?h.jsx(re.img,{...o,ref:e,src:r}):null});kh.displayName=Ph;var Nh="AvatarFallback",Oh=p.forwardRef((t,e)=>{const{__scopeAvatar:n,delayMs:r,...i}=t,o=Rh(Nh,n),[a,l]=p.useState(r===void 0);return p.useEffect(()=>{if(r!==void 0){const d=window.setTimeout(()=>l(!0),r);return()=>window.clearTimeout(d)}},[r]),a&&o.imageLoadingStatus!=="loaded"?h.jsx(re.span,{...i,ref:e}):null});Oh.displayName=Nh;function qc(t,e){return t?e?(t.src!==e&&(t.src=e),t.complete&&t.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Wb(t,{referrerPolicy:e,crossOrigin:n}){const r=$b(),i=p.useRef(null),o=r?(i.current||(i.current=new window.Image),i.current):null,[a,l]=p.useState(()=>qc(o,t));return Re(()=>{l(qc(o,t))},[o,t]),Re(()=>{const d=g=>()=>{l(g)};if(!o)return;const f=d("loaded"),y=d("error");return o.addEventListener("load",f),o.addEventListener("error",y),e&&(o.referrerPolicy=e),typeof n=="string"&&(o.crossOrigin=n),()=>{o.removeEventListener("load",f),o.removeEventListener("error",y)}},[o,n,e]),a}var Dh=Ch,Mh=kh,Lh=Oh;const jh=p.forwardRef(({className:t,...e},n)=>h.jsx(Dh,{ref:n,className:ie("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...e}));jh.displayName=Dh.displayName;const Fh=p.forwardRef(({className:t,...e},n)=>h.jsx(Mh,{ref:n,className:ie("aspect-square h-full w-full",t),...e}));Fh.displayName=Mh.displayName;const Uh=p.forwardRef(({className:t,...e},n)=>h.jsx(Lh,{ref:n,className:ie("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...e}));Uh.displayName=Lh.displayName;function zb(){const{currentUser:t,isAuthenticated:e}=Hu(),{toast:n}=ul(),[,r]=ji(),i=p.useMemo(()=>{var l;return t?t.displayName?t.displayName.split(" ").map(d=>d[0]).join("").toUpperCase():((l=t.email)==null?void 0:l.substring(0,2).toUpperCase())||"U":"U"},[t]),o=p.useMemo(()=>{if(!(t!=null&&t.email))return!1;const l=["workwisesa.co.za","admin.workwisesa.co.za","admin.com"],d=["phakikrwele@gmail.com"];return l.some(f=>t.email.endsWith(f))||d.includes(t.email)},[t]),a=async()=>{try{await tw(),n({title:"Logged out",description:"You have been successfully logged out.",duration:3e3}),r("/")}catch{n({variant:"destructive",title:"Error",description:"Failed to log out. Please try again.",duration:3e3})}};return{isAuthenticated:e,userDisplayName:(t==null?void 0:t.displayName)||"User",userEmail:t==null?void 0:t.email,userPhotoURL:t==null?void 0:t.photoURL,userInitials:i,isAdmin:o,handleLogout:a}}const Kb=({className:t})=>{const{isAuthenticated:e,userDisplayName:n,userEmail:r,userPhotoURL:i,userInitials:o,isAdmin:a,handleLogout:l}=zb();return e?h.jsx("div",{className:t,children:h.jsxs(xh,{children:[h.jsx(Ah,{asChild:!0,children:h.jsx(di,{variant:"ghost",className:"p-0 h-8 w-8 rounded-full focus:ring-2 focus:ring-primary focus:ring-offset-2","aria-label":"User menu",children:h.jsxs(jh,{children:[h.jsx(Fh,{src:i,alt:n,loading:"lazy"}),h.jsx(Uh,{className:"bg-primary text-white",children:o})]})})}),h.jsxs(xo,{align:"end",className:"w-56",children:[h.jsx(Ao,{children:h.jsxs("div",{className:"flex flex-col space-y-1",children:[h.jsx("p",{className:"text-sm font-medium",children:n}),h.jsx("p",{className:"text-xs text-muted-foreground truncate",children:r})]})}),h.jsx(Zr,{}),h.jsxs(Sh,{children:[h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/profile",className:"cursor-pointer flex items-center",children:[h.jsx(Sf,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Profile"})]})}),h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/applications",className:"cursor-pointer flex items-center",children:[h.jsx(Rf,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Applications"})]})}),h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/dashboard",className:"cursor-pointer flex items-center",children:[h.jsx(Cf,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Job Market Dashboard"})]})}),h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/cv-builder",className:"cursor-pointer flex items-center",children:[h.jsx(Pf,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"CV Builder"})]})}),h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/settings",className:"cursor-pointer flex items-center",children:[h.jsx(sl,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Settings"})]})}),a&&h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:"/marketing-rules",className:"cursor-pointer flex items-center",children:[h.jsx(il,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Marketing Rules"})]})})]}),h.jsx(Zr,{}),h.jsxs(nt,{onClick:l,className:"cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50",children:[h.jsx(kf,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:"Log out"})]})]})]})}):h.jsxs("div",{className:`flex items-center space-x-3 ${t||""}`,children:[h.jsx(K,{href:"/login",className:"text-primary hover:text-primary-dark font-medium transition-colors",children:"Login"}),h.jsx(di,{asChild:!0,className:"bg-primary text-white hover:bg-blue-500 transition-colors",children:h.jsx(K,{href:"/register",children:"Register"})})]})},Xc=p.memo(Kb);function Gb(){const{currentUser:t}=Hu(),e=p.useMemo(()=>{if(!(t!=null&&t.email))return!1;const r=["workwisesa.co.za","admin.workwisesa.co.za","admin.com"],i=["phakikrwele@gmail.com"];return r.some(o=>{var a;return(a=t.email)==null?void 0:a.endsWith(o)})||i.includes(t.email)},[t]);return{isAdmin:e,hasPermission:r=>!!e}}const qb=({variant:t="outline",className:e="",showIcon:n=!0,buttonText:r="Admin",customMenuItems:i})=>{const{isAdmin:o,hasPermission:a}=Gb();if(!o)return null;const d=i||[{href:"/admin",icon:h.jsx(Of,{className:"mr-2 h-4 w-4"}),label:"Dashboard",permission:"dashboard:view"},{href:"/marketing-rules",icon:h.jsx(Df,{className:"mr-2 h-4 w-4"}),label:"Marketing Rules",permission:"marketing:view"},{href:"/admin/analytics",icon:h.jsx(il,{className:"mr-2 h-4 w-4"}),label:"Analytics",permission:"analytics:view"},{href:"/admin/users",icon:h.jsx(Mf,{className:"mr-2 h-4 w-4"}),label:"User Management",permission:"users:view"},{href:"/admin/settings",icon:h.jsx(sl,{className:"mr-2 h-4 w-4"}),label:"Admin Settings",permission:"settings:view"}].filter(f=>!f.permission||a(f.permission));return h.jsxs(xh,{children:[h.jsx(Ah,{asChild:!0,children:h.jsxs(di,{variant:t,className:`flex items-center gap-2 ${e}`,"aria-label":"Admin menu",children:[n&&h.jsx(Nf,{className:"h-4 w-4","aria-hidden":"true"}),h.jsx("span",{children:r})]})}),h.jsxs(xo,{align:"end",className:"w-56",sideOffset:4,children:[h.jsx(Ao,{children:"Admin Dashboard"}),h.jsx(Zr,{}),h.jsx(Sh,{children:d.map((f,y)=>h.jsx(nt,{asChild:!0,children:h.jsxs(K,{href:f.href,className:"cursor-pointer flex items-center",onClick:g=>g.stopPropagation(),children:[f.icon,h.jsx("span",{children:f.label})]})},y))})]})]})},Yc=p.memo(qb),Xb=()=>{const[t,e]=p.useState(!1),[n]=ji(),r=()=>{e(!t)};return h.jsxs("header",{className:"sticky top-0 bg-white border-b border-border z-50 shadow-sm",children:[h.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[h.jsx("div",{className:"flex items-center",children:h.jsx(K,{href:"/",className:"flex items-center",children:h.jsx("img",{src:"/images/logo.png",alt:"WorkWise SA Logo",className:"h-24 sm:h-28 mr-2 transition-all duration-200 hover:scale-105"})})}),h.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[h.jsxs("ul",{className:"flex space-x-6",children:[h.jsx("li",{children:h.jsx(K,{href:"/jobs",className:`text-dark hover:text-primary font-medium ${n==="/jobs"?"text-primary":""}`,children:"Find Jobs"})}),h.jsx("li",{children:h.jsx(K,{href:"/companies",className:`text-dark hover:text-primary font-medium ${n==="/companies"?"text-primary":""}`,children:"Companies"})}),h.jsx("li",{children:h.jsx(K,{href:"/cv-builder",className:`text-dark hover:text-primary font-medium ${n==="/cv-builder"?"text-primary":""}`,children:"CV Builder"})}),h.jsx("li",{children:h.jsx(K,{href:"/wise-up",className:`text-dark hover:text-primary font-medium ${n==="/wise-up"?"text-primary":""}`,children:"Wise-Up"})}),h.jsx("li",{children:h.jsx(K,{href:"/blog-wise",className:`text-dark hover:text-primary font-medium ${n==="/blog-wise"?"text-primary":""}`,children:"Blog Wise"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources",className:`text-dark hover:text-primary font-medium ${n==="/resources"?"text-primary":""}`,children:"Resources"})}),h.jsx("li",{children:h.jsx(K,{href:"/contact",className:`text-dark hover:text-primary font-medium ${n==="/contact"?"text-primary":""}`,children:"Contact"})})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(Yc,{variant:"outline"}),h.jsx(Xc,{})]})]}),h.jsx("button",{className:"md:hidden text-dark focus:outline-none",onClick:r,"aria-label":t?"Close menu":"Open menu",children:h.jsx("i",{className:`fas ${t?"fa-times":"fa-bars"} text-xl`})})]}),t&&h.jsx("div",{className:"md:hidden bg-white border-t border-gray-100 py-4 px-6",children:h.jsxs("ul",{className:"space-y-4",children:[h.jsx("li",{children:h.jsx(K,{href:"/jobs",className:`block text-dark hover:text-primary font-medium ${n==="/jobs"?"text-primary":""}`,onClick:()=>e(!1),children:"Find Jobs"})}),h.jsx("li",{children:h.jsx(K,{href:"/companies",className:`block text-dark hover:text-primary font-medium ${n==="/companies"?"text-primary":""}`,onClick:()=>e(!1),children:"Companies"})}),h.jsx("li",{children:h.jsx(K,{href:"/cv-builder",className:`block text-dark hover:text-primary font-medium ${n==="/cv-builder"?"text-primary":""}`,onClick:()=>e(!1),children:"CV Builder"})}),h.jsx("li",{children:h.jsx(K,{href:"/wise-up",className:`block text-dark hover:text-primary font-medium ${n==="/wise-up"?"text-primary":""}`,onClick:()=>e(!1),children:"Wise-Up"})}),h.jsx("li",{children:h.jsx(K,{href:"/blog-wise",className:`block text-dark hover:text-primary font-medium ${n==="/blog-wise"?"text-primary":""}`,onClick:()=>e(!1),children:"Blog Wise"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources",className:`block text-dark hover:text-primary font-medium ${n==="/resources"?"text-primary":""}`,onClick:()=>e(!1),children:"Resources"})}),h.jsx("li",{children:h.jsx(K,{href:"/contact",className:`block text-dark hover:text-primary font-medium ${n==="/contact"?"text-primary":""}`,onClick:()=>e(!1),children:"Contact"})}),h.jsx("li",{className:"pt-3 border-t border-gray-100",children:h.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[h.jsx(Yc,{variant:"outline"}),h.jsx(Xc,{})]})})]})})]})},Yb=()=>(console.log("Footer component rendered"),h.jsx("footer",{className:"bg-white border-t border-border pt-12 pb-6",children:h.jsxs("div",{className:"container mx-auto px-4",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[h.jsxs("div",{children:[h.jsx("div",{className:"h-10 mb-4 flex items-center",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("img",{src:"/images/hero-logo.png",alt:"WorkWise SA Logo",className:"h-8 w-auto mr-2"}),h.jsxs("span",{className:"text-xl font-bold text-primary",children:["WORK",h.jsx("span",{className:"text-accent",children:"WISE.SA"})]})]})}),h.jsx("p",{className:"text-primary mb-4",children:"The Low Level Jobs Directory is an online platform specifically designed to connect young South Africans with entry-level employment opportunities that require minimal experience or qualifications."}),h.jsxs("div",{className:"flex space-x-4",children:["              ",h.jsx("a",{href:"https://www.facebook.com/profile.php?id=61575790149796",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"Facebook",children:h.jsx("i",{className:"fab fa-facebook-f"})}),"              ",h.jsx("a",{href:"https://x.com/WorkWise_SA",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"X (formerly Twitter)",children:h.jsx("i",{className:"fab fa-x-twitter"})}),"              ",h.jsx("a",{href:"https://www.linkedin.com/in/work-wise-sa-36a133370/",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"LinkedIn",children:h.jsx("i",{className:"fab fa-linkedin-in"})}),h.jsx("a",{href:"https://www.instagram.com/work.wise_sa/",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-accent","aria-label":"Instagram",children:h.jsx("i",{className:"fab fa-instagram"})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-lg mb-4",children:"For Job Seekers"}),h.jsxs("ul",{className:"space-y-2",children:[h.jsx("li",{children:h.jsx(K,{href:"/jobs",className:"text-primary hover:text-accent",children:"Browse Jobs"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources",className:"text-primary hover:text-accent",children:"Career Resources"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources/cv-templates",className:"text-primary hover:text-accent",children:"CV Templates"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources/interview-tips",className:"text-primary hover:text-accent",children:"Interview Tips"})}),h.jsx("li",{children:h.jsx(K,{href:"/resources/salary-guide",className:"text-primary hover:text-accent",children:"Salary Guide"})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-lg mb-4",children:"For Employers"}),h.jsxs("ul",{className:"space-y-2",children:[h.jsx("li",{children:h.jsx(K,{href:"/employers/post-job",className:"text-primary hover:text-accent",children:"Post a Job"})}),h.jsx("li",{children:h.jsx(K,{href:"/employers/browse-candidates",className:"text-primary hover:text-accent",children:"Browse Candidates"})}),h.jsx("li",{children:h.jsx(K,{href:"/employers/solutions",className:"text-primary hover:text-accent",children:"Recruitment Solutions"})}),h.jsx("li",{children:h.jsx(K,{href:"/employers/pricing",className:"text-primary hover:text-accent",children:"Pricing"})}),h.jsx("li",{children:h.jsx(K,{href:"/employers/success-stories",className:"text-primary hover:text-accent",children:"Success Stories"})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-lg mb-4",children:"About Us"}),h.jsxs("ul",{className:"space-y-2",children:[h.jsx("li",{children:h.jsx(K,{href:"/about",className:"text-primary hover:text-accent",children:"About Us"})}),h.jsx("li",{children:h.jsx(K,{href:"/contact",className:"text-primary hover:text-accent",children:"Contact"})}),h.jsx("li",{children:h.jsx(K,{href:"/privacy-policy",className:"text-primary hover:text-accent",children:"Privacy Policy"})}),h.jsx("li",{children:h.jsx(K,{href:"/terms",className:"text-primary hover:text-accent",children:"Terms of Service"})}),h.jsx("li",{children:h.jsx(K,{href:"/faq",className:"text-primary hover:text-accent",children:"FAQ"})})]})]})]}),h.jsx("div",{className:"pt-8 border-t border-border text-center text-sm text-foreground",children:h.jsxs("p",{children:["© ",new Date().getFullYear()," WorkWise SA. All rights reserved."]})})]})})),$h=p.memo(({message:t="Loading...",className:e="",size:n="md",fullPage:r=!0,customSpinner:i,backdropBlur:o="sm",zIndex:a=50})=>{const l={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[n],d={none:"",sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg"}[o],f=r?`fixed inset-0 flex flex-col items-center justify-center bg-background/80 ${d} z-${a}`:"flex flex-col items-center justify-center py-8";return h.jsx("div",{className:ie(f,e),role:"alert","aria-live":"assertive","aria-busy":"true","data-testid":"loading-screen",children:h.jsxs("div",{className:"flex flex-col items-center justify-center space-y-4",children:[i||h.jsx(Lf,{className:ie(l,"text-primary animate-spin"),"aria-hidden":"true"}),t&&h.jsx("p",{className:"text-foreground/80 animate-pulse text-center font-medium",children:t})]})})});$h.displayName="LoadingScreen";const Jb=p.lazy(()=>q(()=>import("./not-found-Cf12ai6I.js"),__vite__mapDeps([0,1,2]))),Qb=p.lazy(()=>q(()=>import("./Home-B5OoYVaN.js"),__vite__mapDeps([3,1,4,2,5,6,7,8,9]))),Zb=p.lazy(()=>q(()=>import("./Jobs-Do-h_p4-.js"),__vite__mapDeps([10,1,2,8,9,6,11]))),eI=p.lazy(()=>q(()=>import("./Resources-DDW7kc0N.js"),__vite__mapDeps([12,1,13,2]))),tI=p.lazy(()=>q(()=>import("./WiseUpPage-u_F8NhnD.js"),__vite__mapDeps([14,1,2]))),nI=p.lazy(()=>q(()=>import("./Login-Br4eMBkY.js"),__vite__mapDeps([15,1,16,17,18,19,2,20,21]))),rI=p.lazy(()=>q(()=>import("./Register-DZSHFoJX.js"),__vite__mapDeps([22,1,16,17,18,19,2,20,21]))),sI=p.lazy(()=>q(()=>import("./CVBuilder-DsYV4_3U.js"),__vite__mapDeps([23,1,18,19,2,24,7,21,25]))),Jc=p.lazy(()=>q(()=>import("./UserProfile-KTXpHwKO.js"),__vite__mapDeps([26,1,16,17,2,27,25,28,9]))),iI=p.lazy(()=>q(()=>import("./ProfileSetup-C-TPCQTz.js"),__vite__mapDeps([29,1,16,17,18,19,2,27,24,7,21,20,9,30,31,32,11]))),oI=p.lazy(()=>q(()=>import("./EmailLinkLogin-BPnmJ8jX.js"),__vite__mapDeps([33,1,16,17,18,19,2]))),aI=p.lazy(()=>q(()=>import("./EmailSignInComplete-mEJPi_1M.js"),__vite__mapDeps([34,1,16,17,2]))),cI=p.lazy(()=>q(()=>import("./MarketingRulesPage-1pIy1eKZ.js"),__vite__mapDeps([35,1,18,19,2,9,36,37,31,24,7,21,38,27,6,39,17,40,41,42]))),lI=p.lazy(()=>q(()=>import("./AdminDashboard-ZEPBW2_8.js"),__vite__mapDeps([43,1,2]))),uI=p.lazy(()=>q(()=>import("./Dashboard-qTPRu7Vn.js").then(t=>t.D),__vite__mapDeps([44,1,32,11,2,24,7,21,6,27]))),dI=p.lazy(()=>q(()=>import("./ui-test-BlRER8xZ.js"),__vite__mapDeps([45,1,2,9]))),hI=p.lazy(()=>q(()=>import("./TestPage-ClmIxZTZ.js"),__vite__mapDeps([46,1,2]))),fI=p.lazy(()=>q(()=>import("./FooterTest-8TIbuiNC.js"),__vite__mapDeps([47,1,2]))),pI=p.lazy(()=>q(()=>import("./ColorTest-DU54NZBR.js"),__vite__mapDeps([48,1]))),mI=p.lazy(()=>q(()=>import("./SimpleTest-Q4SjZNHi.js"),__vite__mapDeps([49,1,2]))),gI=p.lazy(()=>q(()=>import("./HomeSimple-BhKni3uR.js"),__vite__mapDeps([50,1,4,5,2,6,7]))),vI=p.lazy(()=>q(()=>import("./FAQWheelPage-DTLMGkSD.js"),__vite__mapDeps([51,1,52,53,11,2]))),yI=p.lazy(()=>q(()=>import("./CVTemplates-DUY1gZX0.js"),__vite__mapDeps([54,1,19,4,2,27]))),_I=p.lazy(()=>q(()=>import("./InterviewTipsPage-DIi_Q53M.js"),__vite__mapDeps([55,1,4,2]))),wI=p.lazy(()=>q(()=>import("./SalaryGuide-BYzIPkhA.js").then(t=>t.S),__vite__mapDeps([56,1,27,2,30,31,38,21,25,24,7,39,17,42]))),EI=p.lazy(()=>q(()=>import("./CVBuilderHelp-B31dpdOC.js"),__vite__mapDeps([57,1,4,13,2,6]))),TI=p.lazy(()=>q(()=>import("./PostJob-CWDqMh60.js").then(t=>t.P),__vite__mapDeps([58,1,4,37,2,31,20,21,30,28,24,7,25,53,6,38,27]))),bI=p.lazy(()=>q(()=>import("./BrowseCandidates-iUTLLS2Z.js"),__vite__mapDeps([59,1,2,4]))),II=p.lazy(()=>q(()=>import("./Solutions-BTsRa-ZZ.js"),__vite__mapDeps([60,1,2,4]))),xI=p.lazy(()=>q(()=>import("./Pricing-CAY5P-oe.js"),__vite__mapDeps([61,1,4,2]))),AI=p.lazy(()=>q(()=>import("./SuccessStories-7DWYH2qF.js"),__vite__mapDeps([62,1,4,2]))),SI=p.lazy(()=>q(()=>import("./About-DQDh_VAh.js"),__vite__mapDeps([63,1,2,4]))),RI=p.lazy(()=>q(()=>import("./AboutUsPage-B2eC7Ecs.js"),__vite__mapDeps([64,1,2]))),CI=p.lazy(()=>q(()=>import("./index-Daz6fL0a.js"),__vite__mapDeps([65,1,4,2]))),PI=p.lazy(()=>q(()=>import("./PrivacyPolicy-i-MLjzGd.js"),__vite__mapDeps([66,1,4]))),kI=p.lazy(()=>q(()=>import("./Terms-D4opybeN.js"),__vite__mapDeps([67,1,4]))),NI=p.lazy(()=>q(()=>import("./FAQ-Cf1-cZCd.js"),__vite__mapDeps([68,1,4,52,53,11,2])));function OI(){return h.jsxs(h.Fragment,{children:[h.jsx(Xb,{}),h.jsx(iw,{children:h.jsx(p.Suspense,{fallback:h.jsx($h,{}),children:h.jsxs(lp,{children:[h.jsx(z,{path:"/",component:gI}),h.jsx(z,{path:"/home-original",component:Qb}),h.jsx(z,{path:"/jobs",component:Zb}),h.jsx(z,{path:"/resources",component:eI}),h.jsx(z,{path:"/resources/cv-templates",component:yI}),h.jsx(z,{path:"/resources/interview-tips",component:_I}),h.jsx(z,{path:"/resources/salary-guide",component:wI}),h.jsx(z,{path:"/resources/cv-builder-help",component:EI}),h.jsx(z,{path:"/employers/post-job",component:TI}),h.jsx(z,{path:"/employers/browse-candidates",component:bI}),h.jsx(z,{path:"/employers/solutions",component:II}),h.jsx(z,{path:"/employers/pricing",component:xI}),h.jsx(z,{path:"/employers/success-stories",component:AI}),h.jsx(z,{path:"/about",component:SI}),h.jsx(z,{path:"/about-us",component:RI}),h.jsx(z,{path:"/contact",component:CI}),h.jsx(z,{path:"/privacy-policy",component:PI}),h.jsx(z,{path:"/terms",component:kI}),h.jsx(z,{path:"/faq",component:NI}),h.jsx(z,{path:"/faq-wheel",component:vI}),h.jsx(z,{path:"/wise-up",component:tI}),h.jsx(z,{path:"/cv-builder",component:sI}),h.jsx(z,{path:"/login",component:nI}),h.jsx(z,{path:"/register",component:rI}),h.jsx(z,{path:"/profile",component:Jc}),h.jsx(z,{path:"/profile/:username",component:Jc}),h.jsx(z,{path:"/profile-setup",children:()=>h.jsx(iI,{})}),h.jsx(z,{path:"/upload-cv",children:()=>h.jsx(up,{to:"/profile-setup"})}),h.jsx(z,{path:"/email-link-login",component:oI}),h.jsx(z,{path:"/auth/email-signin-complete",component:aI}),h.jsx(z,{path:"/ui-test",component:dI}),h.jsx(z,{path:"/test",component:hI}),h.jsx(z,{path:"/footer-test",component:fI}),h.jsx(z,{path:"/color-test",component:pI}),h.jsx(z,{path:"/simple-test",component:mI}),h.jsx(z,{path:"/admin",component:lI}),h.jsx(z,{path:"/marketing-rules",component:cI}),h.jsx(z,{path:"/dashboard",component:uI}),h.jsx(z,{component:Jb})]})})}),h.jsx(Yb,{})]})}function DI(){return h.jsx(Zc,{children:h.jsx(el,{client:ll,children:h.jsxs(rw,{children:[h.jsx(OI,{}),h.jsx(nm,{})]})})})}const Vh=document.createElement("style");Vh.textContent=`
  .job-card:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;document.head.appendChild(Vh);const Bh=document.getElementById("root");if(!Bh)throw new Error('Failed to find the root element with id "root". Please check your HTML file.');const MI=Ff.createRoot(Bh);MI.render(h.jsx(yt.StrictMode,{children:h.jsx(Zc,{children:h.jsxs(el,{client:ll,children:[h.jsx(DI,{}),!1]})})}));export{Ui as $,Wu as A,Ah as B,xo as C,xh as D,iw as E,Yb as F,nt as G,$I as H,vp as I,gE as J,iE as K,K as L,aE as M,cE as N,uE as O,dn as P,dE as Q,fE as R,hE as S,lE as T,Jw as U,BE as V,Pd as W,aw as X,$i as Y,VI as Z,qu as _,ul as a,cd as a0,bE as a1,Op as a2,IE as a3,xE as a4,AE as a5,yd as a6,jE as a7,FE as a8,zu as b,Ku as c,jh as d,Fh as e,Uh as f,Hu as g,zI as h,HI as i,Vt as j,Vi as k,xi as l,H as m,Re as n,Fi as o,Gu as p,UI as q,FI as r,WI as s,KI as t,ji as u,GI as v,XI as w,YI as x,qI as y,be as z};
