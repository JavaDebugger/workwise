import{r as et,g as tt,a as m,j as i}from"./vendor-BOJOR_z2.js";var Re=et();const lr=tt(Re);function Me(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ot(...e){return t=>{let o=!1;const a=e.map(r=>{const n=Me(r,t);return!o&&typeof n=="function"&&(o=!0),n});if(o)return()=>{for(let r=0;r<a.length;r++){const n=a[r];typeof n=="function"?n():Me(e[r],null)}}}}function at(...e){return m.useCallback(ot(...e),e)}function rt(e){const t=st(e),o=m.forwardRef((a,r)=>{const{children:n,...l}=a,h=m.Children.toArray(n),p=h.find(nt);if(p){const y=p.props.children,k=h.map(b=>b===p?m.Children.count(y)>1?m.Children.only(null):m.isValidElement(y)?y.props.children:null:b);return i.jsx(t,{...l,ref:r,children:m.isValidElement(y)?m.cloneElement(y,void 0,k):null})}return i.jsx(t,{...l,ref:r,children:n})});return o.displayName=`${e}.Slot`,o}function st(e){const t=m.forwardRef((o,a)=>{const{children:r,...n}=o,l=m.isValidElement(r)?lt(r):void 0,h=at(l,a);if(m.isValidElement(r)){const p=it(n,r.props);return r.type!==m.Fragment&&(p.ref=h),m.cloneElement(r,p)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ve=Symbol("radix.slottable");function cr(e){const t=({children:o})=>i.jsx(i.Fragment,{children:o});return t.displayName=`${e}.Slottable`,t.__radixId=Ve,t}function nt(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ve}function it(e,t){const o={...t};for(const a in t){const r=e[a],n=t[a];/^on[A-Z]/.test(a)?r&&n?o[a]=(...h)=>{const p=n(...h);return r(...h),p}:r&&(o[a]=r):a==="style"?o[a]={...r,...n}:a==="className"&&(o[a]=[r,n].filter(Boolean).join(" "))}return{...e,...o}}function lt(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var ct=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],dt=ct.reduce((e,t)=>{const o=rt(`Primitive.${t}`),a=m.forwardRef((r,n)=>{const{asChild:l,...h}=r,p=l?o:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(p,{...h,ref:n})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function dr(e,t){e&&Re.flushSync(()=>e.dispatchEvent(t))}function Pe(e){var t,o,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(o=Pe(e[t]))&&(a&&(a+=" "),a+=o)}else for(o in e)e[o]&&(a&&(a+=" "),a+=o);return a}function Le(){for(var e,t,o=0,a="",r=arguments.length;o<r;o++)(e=arguments[o])&&(t=Pe(e))&&(a&&(a+=" "),a+=t);return a}const _e=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ne=Le,Ee=(e,t)=>o=>{var a;if((t==null?void 0:t.variants)==null)return Ne(e,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:r,defaultVariants:n}=t,l=Object.keys(r).map(y=>{const k=o==null?void 0:o[y],b=n==null?void 0:n[y];if(k===null)return null;const C=_e(k)||_e(b);return r[y][C]}),h=o&&Object.entries(o).reduce((y,k)=>{let[b,C]=k;return C===void 0||(y[b]=C),y},{}),p=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((y,k)=>{let{class:b,className:C,...V}=k;return Object.entries(V).every(M=>{let[_,j]=M;return Array.isArray(j)?j.includes({...n,...h}[_]):{...n,...h}[_]===j})?[...y,b,C]:y},[]);return Ne(e,l,p,o==null?void 0:o.class,o==null?void 0:o.className)};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ht=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase()),Ce=e=>{const t=ht(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ie=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim(),mt=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:r="",children:n,iconNode:l,...h},p)=>m.createElement("svg",{ref:p,...ut,width:t,height:t,stroke:e,strokeWidth:a?Number(o)*24/Number(t):o,className:Ie("lucide",r),...!n&&!mt(h)&&{"aria-hidden":"true"},...h},[...l.map(([y,k])=>m.createElement(y,k)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=(e,t)=>{const o=m.forwardRef(({className:a,...r},n)=>m.createElement(yt,{ref:n,iconNode:t,className:Ie(`lucide-${pt(Ce(e))}`,`lucide-${e}`,a),...r}));return o.displayName=Ce(e),o};/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],pr=s("arrow-down",ft);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hr=s("arrow-left",gt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],mr=s("arrow-right",kt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ur=s("arrow-up",bt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],yr=s("award",xt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],fr=s("baby",vt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],gr=s("bell-off",wt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],kr=s("bell-ring",Mt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],br=s("bell",_t);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xr=s("book-open",Nt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],vr=s("briefcase",Ct);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]],wr=s("brush",jt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Mr=s("building",$t);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],_r=s("calculator",zt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Nr=s("calendar-clock",St);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Cr=s("calendar",At);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],jr=s("chart-column",Rt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],$r=s("chart-line",Vt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zr=s("check",Pt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Sr=s("chevron-down",Lt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ar=s("chevron-left",Et);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Rr=s("chevron-right",It);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Vr=s("chevron-up",qt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pr=s("circle-alert",Ht);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ot=s("circle-check-big",Tt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Lr=s("circle-help",Ft);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Er=s("circle-plus",Gt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Dt=s("circle-x",Bt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ir=s("circle",Wt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],qr=s("clock",Ut);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Hr=s("coffee",Zt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Tr=s("copy",Kt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Or=s("cpu",Xt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Fr=s("credit-card",Qt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Gr=s("database",Yt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Br=s("download",Jt);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Dr=s("external-link",eo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wr=s("eye",to);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],Ur=s("file-plus",oo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Zr=s("file-search",ao);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kr=s("file-text",ro);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],Xr=s("flower-2",so);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]],Qr=s("fuel",no);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Yr=s("funnel",io);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Jr=s("globe",lo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],es=s("graduation-cap",co);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],ts=s("handshake",po);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],os=s("heart-handshake",ho);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],as=s("heart",mo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],rs=s("house",uo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ss=s("image",yo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ns=s("info",fo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],is=s("key-round",go);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],ls=s("laptop",ko);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],cs=s("layout-dashboard",bo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ds=s("lightbulb",xo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],ps=s("link",vo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Mo=s("loader-circle",wo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],hs=s("loader",_o);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ms=s("lock",No);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],us=s("log-out",Co);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ys=s("mail",jo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],fs=s("map-pin",$o);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],gs=s("message-square",zo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],ks=s("panel-left",So);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],bs=s("pause",Ao);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],xs=s("pen-line",Ro);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],vs=s("pencil",Vo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ws=s("phone",Po);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Ms=s("play",Lo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],_s=s("plus",Eo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Ns=s("printer",Io);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Cs=s("rotate-cw",qo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],js=s("save",Ho);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$s=s("search",To);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],zs=s("send",Oo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ss=s("settings",Fo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],As=s("share-2",Go);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Rs=s("shield-alert",Bo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vs=s("shield-check",Do);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ps=s("shield-question",Wo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ls=s("shield",Uo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Es=s("shopping-cart",Zo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Is=s("smile",Ko);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],qs=s("sparkles",Xo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Hs=s("square-pen",Qo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ts=s("star",Yo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Os=s("target",Jo);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Fs=s("trash-2",ea);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],Gs=s("trash",ta);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Bs=s("trending-up",oa);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ds=s("upload",aa);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ws=s("user-check",ra);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Us=s("user-round",sa);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Zs=s("user",na);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ks=s("users",ia);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Xs=s("volume-2",la);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Qs=s("volume-x",ca);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ys=s("x",da);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Js=s("zap",pa),me="-",ha=e=>{const t=ua(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:l=>{const h=l.split(me);return h[0]===""&&h.length!==1&&h.shift(),qe(h,t)||ma(l)},getConflictingClassGroupIds:(l,h)=>{const p=o[l]||[];return h&&a[l]?[...p,...a[l]]:p}}},qe=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const o=e[0],a=t.nextPart.get(o),r=a?qe(e.slice(1),a):void 0;if(r)return r;if(t.validators.length===0)return;const n=e.join(me);return(l=t.validators.find(({validator:h})=>h(n)))==null?void 0:l.classGroupId},je=/^\[(.+)\]$/,ma=e=>{if(je.test(e)){const t=je.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}},ua=e=>{const{theme:t,classGroups:o}=e,a={nextPart:new Map,validators:[]};for(const r in o)de(o[r],a,r,t);return a},de=(e,t,o,a)=>{e.forEach(r=>{if(typeof r=="string"){const n=r===""?t:$e(t,r);n.classGroupId=o;return}if(typeof r=="function"){if(ya(r)){de(r(a),t,o,a);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([n,l])=>{de(l,$e(t,n),o,a)})})},$e=(e,t)=>{let o=e;return t.split(me).forEach(a=>{o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o},ya=e=>e.isThemeGetter,fa=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,a=new Map;const r=(n,l)=>{o.set(n,l),t++,t>e&&(t=0,a=o,o=new Map)};return{get(n){let l=o.get(n);if(l!==void 0)return l;if((l=a.get(n))!==void 0)return r(n,l),l},set(n,l){o.has(n)?o.set(n,l):r(n,l)}}},pe="!",he=":",ga=he.length,ka=e=>{const{prefix:t,experimentalParseClassName:o}=e;let a=r=>{const n=[];let l=0,h=0,p=0,y;for(let M=0;M<r.length;M++){let _=r[M];if(l===0&&h===0){if(_===he){n.push(r.slice(p,M)),p=M+ga;continue}if(_==="/"){y=M;continue}}_==="["?l++:_==="]"?l--:_==="("?h++:_===")"&&h--}const k=n.length===0?r:r.substring(p),b=ba(k),C=b!==k,V=y&&y>p?y-p:void 0;return{modifiers:n,hasImportantModifier:C,baseClassName:b,maybePostfixModifierPosition:V}};if(t){const r=t+he,n=a;a=l=>l.startsWith(r)?n(l.substring(r.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:l,maybePostfixModifierPosition:void 0}}if(o){const r=a;a=n=>o({className:n,parseClassName:r})}return a},ba=e=>e.endsWith(pe)?e.substring(0,e.length-1):e.startsWith(pe)?e.substring(1):e,xa=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(a=>[a,!0]));return a=>{if(a.length<=1)return a;const r=[];let n=[];return a.forEach(l=>{l[0]==="["||t[l]?(r.push(...n.sort(),l),n=[]):n.push(l)}),r.push(...n.sort()),r}},va=e=>({cache:fa(e.cacheSize),parseClassName:ka(e),sortModifiers:xa(e),...ha(e)}),wa=/\s+/,Ma=(e,t)=>{const{parseClassName:o,getClassGroupId:a,getConflictingClassGroupIds:r,sortModifiers:n}=t,l=[],h=e.trim().split(wa);let p="";for(let y=h.length-1;y>=0;y-=1){const k=h[y],{isExternal:b,modifiers:C,hasImportantModifier:V,baseClassName:M,maybePostfixModifierPosition:_}=o(k);if(b){p=k+(p.length>0?" "+p:p);continue}let j=!!_,P=a(j?M.substring(0,_):M);if(!P){if(!j){p=k+(p.length>0?" "+p:p);continue}if(P=a(M),!P){p=k+(p.length>0?" "+p:p);continue}j=!1}const Z=n(C).join(":"),B=V?Z+pe:Z,q=B+P;if(l.includes(q))continue;l.push(q);const H=r(P,j);for(let L=0;L<H.length;++L){const D=H[L];l.push(B+D)}p=k+(p.length>0?" "+p:p)}return p};function _a(){let e=0,t,o,a="";for(;e<arguments.length;)(t=arguments[e++])&&(o=He(t))&&(a&&(a+=" "),a+=o);return a}const He=e=>{if(typeof e=="string")return e;let t,o="";for(let a=0;a<e.length;a++)e[a]&&(t=He(e[a]))&&(o&&(o+=" "),o+=t);return o};function Na(e,...t){let o,a,r,n=l;function l(p){const y=t.reduce((k,b)=>b(k),e());return o=va(y),a=o.cache.get,r=o.cache.set,n=h,h(p)}function h(p){const y=a(p);if(y)return y;const k=Ma(p,o);return r(p,k),k}return function(){return n(_a.apply(null,arguments))}}const x=e=>{const t=o=>o[e]||[];return t.isThemeGetter=!0,t},Te=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Oe=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ca=/^\d+\/\d+$/,ja=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$a=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,za=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Sa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Aa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>Ca.test(e),g=e=>!!e&&!Number.isNaN(Number(e)),R=e=>!!e&&Number.isInteger(Number(e)),le=e=>e.endsWith("%")&&g(e.slice(0,-1)),A=e=>ja.test(e),Ra=()=>!0,Va=e=>$a.test(e)&&!za.test(e),Fe=()=>!1,Pa=e=>Sa.test(e),La=e=>Aa.test(e),Ea=e=>!c(e)&&!d(e),Ia=e=>F(e,De,Fe),c=e=>Te.test(e),I=e=>F(e,We,Va),ce=e=>F(e,Fa,g),ze=e=>F(e,Ge,Fe),qa=e=>F(e,Be,La),ee=e=>F(e,Ue,Pa),d=e=>Oe.test(e),W=e=>G(e,We),Ha=e=>G(e,Ga),Se=e=>G(e,Ge),Ta=e=>G(e,De),Oa=e=>G(e,Be),te=e=>G(e,Ue,!0),F=(e,t,o)=>{const a=Te.exec(e);return a?a[1]?t(a[1]):o(a[2]):!1},G=(e,t,o=!1)=>{const a=Oe.exec(e);return a?a[1]?t(a[1]):o:!1},Ge=e=>e==="position"||e==="percentage",Be=e=>e==="image"||e==="url",De=e=>e==="length"||e==="size"||e==="bg-size",We=e=>e==="length",Fa=e=>e==="number",Ga=e=>e==="family-name",Ue=e=>e==="shadow",Ba=()=>{const e=x("color"),t=x("font"),o=x("text"),a=x("font-weight"),r=x("tracking"),n=x("leading"),l=x("breakpoint"),h=x("container"),p=x("spacing"),y=x("radius"),k=x("shadow"),b=x("inset-shadow"),C=x("text-shadow"),V=x("drop-shadow"),M=x("blur"),_=x("perspective"),j=x("aspect"),P=x("ease"),Z=x("animate"),B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],H=()=>[...q(),d,c],L=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto","contain","none"],f=()=>[d,c,p],z=()=>[O,"full","auto",...f()],ye=()=>[R,"none","subgrid",d,c],fe=()=>["auto",{span:["full",R,d,c]},R,d,c],K=()=>[R,"auto",d,c],ge=()=>["auto","min","max","fr",d,c],se=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],T=()=>["start","end","center","stretch","center-safe","end-safe"],S=()=>["auto",...f()],E=()=>[O,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...f()],u=()=>[e,d,c],ke=()=>[...q(),Se,ze,{position:[d,c]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],xe=()=>["auto","cover","contain",Ta,Ia,{size:[d,c]}],ne=()=>[le,W,I],w=()=>["","none","full",y,d,c],N=()=>["",g,W,I],X=()=>["solid","dashed","dotted","double"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],v=()=>[g,le,Se,ze],we=()=>["","none",M,d,c],Q=()=>["none",g,d,c],Y=()=>["none",g,d,c],ie=()=>[g,d,c],J=()=>[O,"full",...f()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[A],breakpoint:[A],color:[Ra],container:[A],"drop-shadow":[A],ease:["in","out","in-out"],font:[Ea],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[A],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[A],shadow:[A],spacing:["px",g],text:[A],"text-shadow":[A],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",O,c,d,j]}],container:["container"],columns:[{columns:[g,c,d,h]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:H()}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[R,"auto",d,c]}],basis:[{basis:[O,"full","auto",h,...f()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[g,O,"auto","initial","none",c]}],grow:[{grow:["",g,d,c]}],shrink:[{shrink:["",g,d,c]}],order:[{order:[R,"first","last","none",d,c]}],"grid-cols":[{"grid-cols":ye()}],"col-start-end":[{col:fe()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":ye()}],"row-start-end":[{row:fe()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ge()}],"auto-rows":[{"auto-rows":ge()}],gap:[{gap:f()}],"gap-x":[{"gap-x":f()}],"gap-y":[{"gap-y":f()}],"justify-content":[{justify:[...se(),"normal"]}],"justify-items":[{"justify-items":[...T(),"normal"]}],"justify-self":[{"justify-self":["auto",...T()]}],"align-content":[{content:["normal",...se()]}],"align-items":[{items:[...T(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...T(),{baseline:["","last"]}]}],"place-content":[{"place-content":se()}],"place-items":[{"place-items":[...T(),"baseline"]}],"place-self":[{"place-self":["auto",...T()]}],p:[{p:f()}],px:[{px:f()}],py:[{py:f()}],ps:[{ps:f()}],pe:[{pe:f()}],pt:[{pt:f()}],pr:[{pr:f()}],pb:[{pb:f()}],pl:[{pl:f()}],m:[{m:S()}],mx:[{mx:S()}],my:[{my:S()}],ms:[{ms:S()}],me:[{me:S()}],mt:[{mt:S()}],mr:[{mr:S()}],mb:[{mb:S()}],ml:[{ml:S()}],"space-x":[{"space-x":f()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":f()}],"space-y-reverse":["space-y-reverse"],size:[{size:E()}],w:[{w:[h,"screen",...E()]}],"min-w":[{"min-w":[h,"screen","none",...E()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[l]},...E()]}],h:[{h:["screen",...E()]}],"min-h":[{"min-h":["screen","none",...E()]}],"max-h":[{"max-h":["screen",...E()]}],"font-size":[{text:["base",o,W,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,d,ce]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",le,c]}],"font-family":[{font:[Ha,c,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,d,c]}],"line-clamp":[{"line-clamp":[g,"none",d,ce]}],leading:[{leading:[n,...f()]}],"list-image":[{"list-image":["none",d,c]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",d,c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:u()}],"text-color":[{text:u()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:[g,"from-font","auto",d,I]}],"text-decoration-color":[{decoration:u()}],"underline-offset":[{"underline-offset":[g,"auto",d,c]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",d,c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",d,c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ke()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:xe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},R,d,c],radial:["",d,c],conic:[R,d,c]},Oa,qa]}],"bg-color":[{bg:u()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:u()}],"gradient-via":[{via:u()}],"gradient-to":[{to:u()}],rounded:[{rounded:w()}],"rounded-s":[{"rounded-s":w()}],"rounded-e":[{"rounded-e":w()}],"rounded-t":[{"rounded-t":w()}],"rounded-r":[{"rounded-r":w()}],"rounded-b":[{"rounded-b":w()}],"rounded-l":[{"rounded-l":w()}],"rounded-ss":[{"rounded-ss":w()}],"rounded-se":[{"rounded-se":w()}],"rounded-ee":[{"rounded-ee":w()}],"rounded-es":[{"rounded-es":w()}],"rounded-tl":[{"rounded-tl":w()}],"rounded-tr":[{"rounded-tr":w()}],"rounded-br":[{"rounded-br":w()}],"rounded-bl":[{"rounded-bl":w()}],"border-w":[{border:N()}],"border-w-x":[{"border-x":N()}],"border-w-y":[{"border-y":N()}],"border-w-s":[{"border-s":N()}],"border-w-e":[{"border-e":N()}],"border-w-t":[{"border-t":N()}],"border-w-r":[{"border-r":N()}],"border-w-b":[{"border-b":N()}],"border-w-l":[{"border-l":N()}],"divide-x":[{"divide-x":N()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":N()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...X(),"hidden","none"]}],"divide-style":[{divide:[...X(),"hidden","none"]}],"border-color":[{border:u()}],"border-color-x":[{"border-x":u()}],"border-color-y":[{"border-y":u()}],"border-color-s":[{"border-s":u()}],"border-color-e":[{"border-e":u()}],"border-color-t":[{"border-t":u()}],"border-color-r":[{"border-r":u()}],"border-color-b":[{"border-b":u()}],"border-color-l":[{"border-l":u()}],"divide-color":[{divide:u()}],"outline-style":[{outline:[...X(),"none","hidden"]}],"outline-offset":[{"outline-offset":[g,d,c]}],"outline-w":[{outline:["",g,W,I]}],"outline-color":[{outline:u()}],shadow:[{shadow:["","none",k,te,ee]}],"shadow-color":[{shadow:u()}],"inset-shadow":[{"inset-shadow":["none",b,te,ee]}],"inset-shadow-color":[{"inset-shadow":u()}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:u()}],"ring-offset-w":[{"ring-offset":[g,I]}],"ring-offset-color":[{"ring-offset":u()}],"inset-ring-w":[{"inset-ring":N()}],"inset-ring-color":[{"inset-ring":u()}],"text-shadow":[{"text-shadow":["none",C,te,ee]}],"text-shadow-color":[{"text-shadow":u()}],opacity:[{opacity:[g,d,c]}],"mix-blend":[{"mix-blend":[...ve(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ve()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[g]}],"mask-image-linear-from-pos":[{"mask-linear-from":v()}],"mask-image-linear-to-pos":[{"mask-linear-to":v()}],"mask-image-linear-from-color":[{"mask-linear-from":u()}],"mask-image-linear-to-color":[{"mask-linear-to":u()}],"mask-image-t-from-pos":[{"mask-t-from":v()}],"mask-image-t-to-pos":[{"mask-t-to":v()}],"mask-image-t-from-color":[{"mask-t-from":u()}],"mask-image-t-to-color":[{"mask-t-to":u()}],"mask-image-r-from-pos":[{"mask-r-from":v()}],"mask-image-r-to-pos":[{"mask-r-to":v()}],"mask-image-r-from-color":[{"mask-r-from":u()}],"mask-image-r-to-color":[{"mask-r-to":u()}],"mask-image-b-from-pos":[{"mask-b-from":v()}],"mask-image-b-to-pos":[{"mask-b-to":v()}],"mask-image-b-from-color":[{"mask-b-from":u()}],"mask-image-b-to-color":[{"mask-b-to":u()}],"mask-image-l-from-pos":[{"mask-l-from":v()}],"mask-image-l-to-pos":[{"mask-l-to":v()}],"mask-image-l-from-color":[{"mask-l-from":u()}],"mask-image-l-to-color":[{"mask-l-to":u()}],"mask-image-x-from-pos":[{"mask-x-from":v()}],"mask-image-x-to-pos":[{"mask-x-to":v()}],"mask-image-x-from-color":[{"mask-x-from":u()}],"mask-image-x-to-color":[{"mask-x-to":u()}],"mask-image-y-from-pos":[{"mask-y-from":v()}],"mask-image-y-to-pos":[{"mask-y-to":v()}],"mask-image-y-from-color":[{"mask-y-from":u()}],"mask-image-y-to-color":[{"mask-y-to":u()}],"mask-image-radial":[{"mask-radial":[d,c]}],"mask-image-radial-from-pos":[{"mask-radial-from":v()}],"mask-image-radial-to-pos":[{"mask-radial-to":v()}],"mask-image-radial-from-color":[{"mask-radial-from":u()}],"mask-image-radial-to-color":[{"mask-radial-to":u()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[g]}],"mask-image-conic-from-pos":[{"mask-conic-from":v()}],"mask-image-conic-to-pos":[{"mask-conic-to":v()}],"mask-image-conic-from-color":[{"mask-conic-from":u()}],"mask-image-conic-to-color":[{"mask-conic-to":u()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ke()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:xe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",d,c]}],filter:[{filter:["","none",d,c]}],blur:[{blur:we()}],brightness:[{brightness:[g,d,c]}],contrast:[{contrast:[g,d,c]}],"drop-shadow":[{"drop-shadow":["","none",V,te,ee]}],"drop-shadow-color":[{"drop-shadow":u()}],grayscale:[{grayscale:["",g,d,c]}],"hue-rotate":[{"hue-rotate":[g,d,c]}],invert:[{invert:["",g,d,c]}],saturate:[{saturate:[g,d,c]}],sepia:[{sepia:["",g,d,c]}],"backdrop-filter":[{"backdrop-filter":["","none",d,c]}],"backdrop-blur":[{"backdrop-blur":we()}],"backdrop-brightness":[{"backdrop-brightness":[g,d,c]}],"backdrop-contrast":[{"backdrop-contrast":[g,d,c]}],"backdrop-grayscale":[{"backdrop-grayscale":["",g,d,c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g,d,c]}],"backdrop-invert":[{"backdrop-invert":["",g,d,c]}],"backdrop-opacity":[{"backdrop-opacity":[g,d,c]}],"backdrop-saturate":[{"backdrop-saturate":[g,d,c]}],"backdrop-sepia":[{"backdrop-sepia":["",g,d,c]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":f()}],"border-spacing-x":[{"border-spacing-x":f()}],"border-spacing-y":[{"border-spacing-y":f()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",d,c]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[g,"initial",d,c]}],ease:[{ease:["linear","initial",P,d,c]}],delay:[{delay:[g,d,c]}],animate:[{animate:["none",Z,d,c]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,d,c]}],"perspective-origin":[{"perspective-origin":H()}],rotate:[{rotate:Q()}],"rotate-x":[{"rotate-x":Q()}],"rotate-y":[{"rotate-y":Q()}],"rotate-z":[{"rotate-z":Q()}],scale:[{scale:Y()}],"scale-x":[{"scale-x":Y()}],"scale-y":[{"scale-y":Y()}],"scale-z":[{"scale-z":Y()}],"scale-3d":["scale-3d"],skew:[{skew:ie()}],"skew-x":[{"skew-x":ie()}],"skew-y":[{"skew-y":ie()}],transform:[{transform:[d,c,"","none","gpu","cpu"]}],"transform-origin":[{origin:H()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:u()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:u()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",d,c]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",d,c]}],fill:[{fill:["none",...u()]}],"stroke-w":[{stroke:[g,W,I,ce]}],stroke:[{stroke:["none",...u()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Da=Na(Ba);function $(...e){return Da(Le(e))}function Ae(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Wa(...e){return t=>{let o=!1;const a=e.map(r=>{const n=Ae(r,t);return!o&&typeof n=="function"&&(o=!0),n});if(o)return()=>{for(let r=0;r<a.length;r++){const n=a[r];typeof n=="function"?n():Ae(e[r],null)}}}}function Ua(e){const t=Ka(e),o=m.forwardRef((a,r)=>{const{children:n,...l}=a,h=m.Children.toArray(n),p=h.find(Qa);if(p){const y=p.props.children,k=h.map(b=>b===p?m.Children.count(y)>1?m.Children.only(null):m.isValidElement(y)?y.props.children:null:b);return i.jsx(t,{...l,ref:r,children:m.isValidElement(y)?m.cloneElement(y,void 0,k):null})}return i.jsx(t,{...l,ref:r,children:n})});return o.displayName=`${e}.Slot`,o}var Za=Ua("Slot");function Ka(e){const t=m.forwardRef((o,a)=>{const{children:r,...n}=o;if(m.isValidElement(r)){const l=Ja(r),h=Ya(n,r.props);return r.type!==m.Fragment&&(h.ref=a?Wa(a,l):l),m.cloneElement(r,h)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Xa=Symbol("radix.slottable");function Qa(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Xa}function Ya(e,t){const o={...t};for(const a in t){const r=e[a],n=t[a];/^on[A-Z]/.test(a)?r&&n?o[a]=(...h)=>{const p=n(...h);return r(...h),p}:r&&(o[a]=r):a==="style"?o[a]={...r,...n}:a==="className"&&(o[a]=[r,n].filter(Boolean).join(" "))}return{...e,...o}}function Ja(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}const er=Ee("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ue=m.forwardRef(({className:e,variant:t,size:o,asChild:a=!1,...r},n)=>{const l=a?Za:"button";return i.jsx(l,{className:$(er({variant:t,size:o,className:e})),ref:n,...r})});ue.displayName="Button";const ae=m.forwardRef(({className:e,...t},o)=>i.jsx("div",{ref:o,className:$("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));ae.displayName="Card";const Ze=m.forwardRef(({className:e,...t},o)=>i.jsx("div",{ref:o,className:$("flex flex-col space-y-1.5 p-6",e),...t}));Ze.displayName="CardHeader";const Ke=m.forwardRef(({className:e,...t},o)=>i.jsx("h3",{ref:o,className:$("text-2xl font-semibold leading-none tracking-tight",e),...t}));Ke.displayName="CardTitle";const Xe=m.forwardRef(({className:e,...t},o)=>i.jsx("p",{ref:o,className:$("text-sm text-muted-foreground",e),...t}));Xe.displayName="CardDescription";const re=m.forwardRef(({className:e,...t},o)=>i.jsx("div",{ref:o,className:$("p-6 pt-0",e),...t}));re.displayName="CardContent";const tr=m.forwardRef(({className:e,...t},o)=>i.jsx("div",{ref:o,className:$("flex items-center p-6 pt-0",e),...t}));tr.displayName="CardFooter";const oe=m.forwardRef(({className:e,type:t,...o},a)=>i.jsx("input",{type:t,className:$("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...o}));oe.displayName="Input";var or="Label",Qe=m.forwardRef((e,t)=>i.jsx(dt.label,{...e,ref:t,onMouseDown:o=>{var r;o.target.closest("button, input, select, textarea")||((r=e.onMouseDown)==null||r.call(e,o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}}));Qe.displayName=or;var Ye=Qe;const ar=Ee("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),U=m.forwardRef(({className:e,...t},o)=>i.jsx(Ye,{ref:o,className:$(ar(),e),...t}));U.displayName=Ye.displayName;const Je=m.forwardRef(({className:e,...t},o)=>i.jsx("textarea",{className:$("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...t}));Je.displayName="Textarea";const rr=()=>{const[e,t]=m.useState({name:"",email:"",subject:"",message:""}),[o,a]=m.useState(!1),[r,n]=m.useState("idle"),l=p=>{const{name:y,value:k}=p.target;t(b=>({...b,[y]:k}))},h=async p=>{p.preventDefault(),a(!0),n("idle");try{await new Promise(y=>setTimeout(y,1e3)),console.log("Contact form submitted:",e),n("success"),t({name:"",email:"",subject:"",message:""})}catch(y){console.error("Error submitting form:",y),n("error")}finally{a(!1)}};return i.jsx(ae,{children:i.jsxs(re,{className:"p-6",children:[i.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Send us a Message"}),r==="success"&&i.jsxs("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start space-x-3",children:[i.jsx(Ot,{className:"h-5 w-5 text-green-500 mt-0.5"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm font-medium text-green-800",children:"Message sent successfully!"}),i.jsx("p",{className:"mt-1 text-sm text-green-700",children:"Thank you for contacting us. We'll get back to you within 24 hours."})]})]}),r==="error"&&i.jsxs("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start space-x-3",children:[i.jsx(Dt,{className:"h-5 w-5 text-red-500 mt-0.5"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm font-medium text-red-800",children:"Error sending message"}),i.jsx("p",{className:"mt-1 text-sm text-red-700",children:"Please try again or contact us directly at hello@workwisesa.co.za"})]})]}),i.jsxs("form",{onSubmit:h,className:"space-y-6",children:[i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx(U,{htmlFor:"name",children:"Full Name *"}),i.jsx(oe,{id:"name",name:"name",value:e.name,onChange:l,required:!0,placeholder:"Your full name"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(U,{htmlFor:"email",children:"Email Address *"}),i.jsx(oe,{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0,placeholder:"your.email@example.com"})]})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(U,{htmlFor:"subject",children:"Subject *"}),i.jsx(oe,{id:"subject",name:"subject",value:e.subject,onChange:l,required:!0,placeholder:"What's this about?"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx(U,{htmlFor:"message",children:"Message *"}),i.jsx(Je,{id:"message",name:"message",value:e.message,onChange:l,required:!0,rows:6,placeholder:"Tell us how we can help you..."})]}),i.jsx(ue,{type:"submit",disabled:o,className:"w-full sm:w-auto",children:o?i.jsxs(i.Fragment,{children:[i.jsx(Mo,{className:"mr-2 h-4 w-4 animate-spin"}),"Sending..."]}):"Send Message"})]})]})})},en=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"})),sr=({contactMethods:e})=>i.jsx(ae,{children:i.jsxs(re,{className:"p-6",children:[i.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Get in Touch"}),i.jsx("div",{className:"space-y-6",children:e.map((t,o)=>{const a=t.icon;return i.jsxs("div",{className:"flex items-start space-x-4",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx(a,{className:"h-6 w-6 text-primary"})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"font-medium text-foreground",children:t.title}),i.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:t.description}),i.jsx(ue,{variant:"link",className:"p-0 h-auto",asChild:!0,children:i.jsx("a",{href:t.href,className:"text-primary hover:underline",children:t.value})})]})]},o)})}),i.jsxs("div",{className:"mt-8 pt-6 border-t",children:[i.jsx("h3",{className:"font-medium text-foreground mb-3",children:"Business Hours"}),i.jsxs("div",{className:"text-sm text-muted-foreground space-y-1",children:[i.jsx("p",{children:"Monday - Friday: 8:00 AM - 5:00 PM"}),i.jsx("p",{children:"Saturday: 9:00 AM - 1:00 PM"}),i.jsx("p",{children:"Sunday: Closed"}),i.jsx("p",{className:"text-xs mt-2",children:"(South African Standard Time)"})]})]}),i.jsxs("div",{className:"mt-6 p-4 bg-muted/50 rounded-md",children:[i.jsx("h4",{className:"font-medium text-sm text-foreground mb-1",children:"Quick Response"}),i.jsx("p",{className:"text-xs text-muted-foreground",children:"We typically respond to all inquiries within 24 hours during business days."})]})]})}),tn=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"})),nr=({supportCategories:e})=>i.jsxs("div",{className:"mb-12",children:[i.jsx("h2",{className:"text-2xl font-semibold text-center mb-8",children:"How Can We Help You?"}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:e.map((t,o)=>{const a=t.icon;return i.jsxs(ae,{className:"hover:shadow-lg transition-shadow",children:[i.jsxs(Ze,{children:[i.jsx("div",{className:"bg-primary/10 p-3 rounded-lg w-fit",children:i.jsx(a,{className:"h-6 w-6 text-primary"})}),i.jsx(Ke,{children:t.title}),i.jsx(Xe,{children:t.description})]}),i.jsx(re,{children:i.jsx("ul",{className:"space-y-1 text-sm text-muted-foreground",children:t.topics.map((r,n)=>i.jsxs("li",{className:"flex items-center",children:[i.jsx("div",{className:"w-1.5 h-1.5 bg-primary rounded-full mr-2"}),r]},n))})})]},o)})})]}),on=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"}));export{fs as $,zs as A,ue as B,Pr as C,Ms as D,Dr as E,Kr as F,bs as G,Xs as H,oe as I,Vr as J,Sr as K,us as L,gs as M,tr as N,qs as O,dt as P,ds as Q,lr as R,Ss as S,Jr as T,Zs as U,Qs as V,ns as W,Ys as X,Lr as Y,Je as Z,Ar as _,$ as a,Or as a$,Cr as a0,br as a1,Wr as a2,Hs as a3,qr as a4,Ds as a5,Er as a6,Dt as a7,Ur as a8,Zr as a9,yr as aA,Us as aB,kr as aC,Is as aD,Hr as aE,_r as aF,Ns as aG,Tr as aH,ks as aI,Ua as aJ,hr as aK,js as aL,mr as aM,Fs as aN,cr as aO,er as aP,Js as aQ,Vs as aR,xr as aS,Os as aT,Nr as aU,Le as aV,is as aW,hs as aX,Cs as aY,os as aZ,Ws as a_,Ot as aa,_s as ab,vs as ac,Gs as ad,ur as ae,pr as af,Gr as ag,Yr as ah,As as ai,rs as aj,Za as ak,Br as al,Bs as am,Mr as an,es as ao,as as ap,Fr as aq,ls as ar,Xr as as,wr as at,fr as au,Qr as av,Ls as aw,Es as ax,ms as ay,ws as az,Ee as b,Ps as b0,ts as b1,gr as b2,ps as b3,ss as b4,xs as b5,en as b6,tn as b7,on as b8,rt as c,dr as d,ot as e,Rr as f,zr as g,Ir as h,vr as i,$r as j,jr as k,Rs as l,cs as m,Ks as n,Mo as o,ae as p,re as q,Re as r,$s as s,Ze as t,at as u,Ke as v,Xe as w,U as x,Ts as y,ys as z};
