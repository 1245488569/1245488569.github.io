import{d as G,W as et,q as Ot,o as nt,s as At,i as ot,f as Nt,g as Dt}from"./index-5862e033.js";import{_ as Bt}from"./_plugin-vue_export-helper-c27b6911.js";const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,A=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!M(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!M(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!M(c,n)?null:c}return null},M=(t,e)=>t?!!((t.provider===""||t.provider.match(_))&&(e&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,bt=Object.freeze({left:0,top:0,width:16,height:16}),O=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...bt,...O}),z=Object.freeze({...N,body:"",hidden:!1});function Rt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function rt(t,e){const n=Rt(t,e);for(const r in z)r in O?r in t&&!(r in n)&&(n[r]=O[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function $t(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function zt(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=rt(r[c]||o[c],i)}return s(e),n.forEach(s),rt(t,i)}function xt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=$t(t);for(const o in r){const i=r[o];i&&(e(o,zt(t,o,i)),n.push(o))}return n}const qt={provider:"",aliases:{},not_found:{},...bt};function R(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function wt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!R(t,qt))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(_)||typeof i.body!="string"||!R(i,z))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(_)||typeof s!="string"||!n[s]&&!r[s]||!R(i,z))return null}return e}const it=Object.create(null);function Qt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=it[t]||(it[t]=Object.create(null));return n[e]||(n[e]=Qt(t,e))}function W(t,e){return wt(e)?xt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Vt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let T=!1;function It(t){return typeof t=="boolean"&&(T=t),T}function Ht(t){const e=typeof t=="string"?A(t,!0,T):t;if(e){const n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ut(t,e){const n=A(t,!0,T);if(!n)return!1;const r=v(n.provider,n.prefix);return Vt(r,n.name,e)}function Kt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),T&&!e&&!t.prefix){let o=!1;return wt(t)&&(t.prefix="",xt(t,(i,s)=>{s&&Ut(i,s)&&(o=!0)})),o}const n=t.prefix;if(!M({provider:e,prefix:n,name:"a"}))return!1;const r=v(e,n);return!!W(r,t)}const St=Object.freeze({width:null,height:null}),vt=Object.freeze({...St,...O}),Gt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Wt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function st(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Gt);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=Wt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const Jt=t=>t==="unset"||t==="undefined"||t==="none";function Xt(t,e){const n={...N,...t},r={...vt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const p=[],u=x.hFlip,I=x.vFlip;let y=x.rotate;u?I?y+=2:(p.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),p.push("scale(-1 1)"),o.top=o.left=0):I&&(p.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),p.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,p.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:p.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,p.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=st(d,l/f)):(a=s==="auto"?l:s,d=c===null?st(a,f/l):c==="auto"?f:c);const g={},m=(x,p)=>{Jt(p)||(g[x]=p.toString())};return m("width",a),m("height",d),g.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:g,body:i}}const Yt=/\sid="(\S+)"/g,Zt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let te=0;function ee(t,e=Zt){const n=[];let r;for(;r=Yt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof e=="function"?e(i):e+(te++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const q=Object.create(null);function ne(t,e){q[t]=e}function Q(t){return q[t]||q[""]}function J(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const X=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;C.length>0;)C.length===1||Math.random()>.5?L.push(C.shift()):L.push(C.pop());X[""]=J({resources:["https://api.iconify.design"].concat(L)});function oe(t,e){const n=J(e);return n===null?!1:(X[t]=n,!0)}function Y(t){return X[t]}const re=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ct=re();function ie(t,e){const n=Y(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function se(t){return t===404}const ce=(t,e,n)=>{const r=[],o=ie(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function le(t){if(typeof t=="string"){const e=Y(t);if(e)return e.path}return"/"}const fe=(t,e,n)=>{if(!ct){n("abort",424);return}let r=le(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ct(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(se(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ae={prepare:ce,send:fe};function ue(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let a;c in f.icons?a=e.loaded:s===""||f.missing.has(c)?a=e.missing:a=e.pending;const d={provider:i,prefix:s,name:c};a.push(d)}),e}function kt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function de(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||kt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let pe=0;function he(t,e,n){const r=pe++,o=kt.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ge(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?A(o,e,n):o;i&&r.push(i)}),r}var me={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ye(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let h=t.resources.slice(0);for(s=[];h.length>1;){const w=Math.floor(Math.random()*h.length);s.push(h[w]),h=h.slice(0,w).concat(h.slice(w+1))}s=s.concat(h)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,d=null,g=[],m=[];typeof r=="function"&&m.push(r);function x(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),x(),g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function u(h,w){w&&(m=[]),typeof h=="function"&&m.push(h)}function I(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:g.length,subscribe:u,abort:p}}function y(){l="failed",m.forEach(h=>{h(void 0,a)})}function b(){g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function Ft(h,w,k){const P=w!=="success";switch(g=g.filter(S=>S!==h),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(w==="abort"){a=k,y();return}if(P){a=k,g.length||(s.length?B():y());return}if(x(),b(),!t.random){const S=t.resources.indexOf(h.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",m.forEach(S=>{S(k)})}function B(){if(l!=="pending")return;x();const h=s.shift();if(h===void 0){if(g.length){d=setTimeout(()=>{x(),l==="pending"&&(b(),y())},t.timeout);return}y();return}const w={status:"pending",resource:h,callback:(k,P)=>{Ft(w,k,P)}};g.push(w),f++,d=setTimeout(B,t.rotate),n(h,e,w.callback)}return setTimeout(B),I}function Ct(t){const e={...me,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=ye(e,c,l,(d,g)=>{r(),f&&f(d,g)});return n.push(a),a}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function lt(){}const $=Object.create(null);function be(t){if(!$[t]){const e=Y(t);if(!e)return;const n=Ct(e),r={config:e,redundancy:n};$[t]=r}return $[t]}function xe(t,e,n){let r,o;if(typeof t=="string"){const i=Q(t);if(!i)return n(void 0,424),lt;o=i.send;const s=be(t);s&&(r=s.redundancy)}else{const i=J(t);if(i){r=Ct(i);const s=t.resources?t.resources[0]:"",c=Q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),lt):r.query(e,o,n)().abort}const ft="iconify2",j="iconify",_t=j+"-count",at=j+"-version",Tt=36e5,we=168;function V(t,e){try{return t.getItem(e)}catch{}}function Z(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ut(t,e){try{t.removeItem(e)}catch{}}function H(t,e){return Z(t,_t,e.toString())}function U(t){return parseInt(V(t,_t))||0}const D={local:!0,session:!0},jt={local:new Set,session:new Set};let tt=!1;function Ie(t){tt=t}let E=typeof window>"u"?{}:window;function Pt(t){const e=t+"Storage";try{if(E&&E[e]&&typeof E[e].length=="number")return E[e]}catch{}D[t]=!1}function Et(t,e){const n=Pt(t);if(!n)return;const r=V(n,at);if(r!==ft){if(r){const c=U(n);for(let l=0;l<c;l++)ut(n,j+l.toString())}Z(n,at,ft),H(n,0);return}const o=Math.floor(Date.now()/Tt)-we,i=c=>{const l=j+c.toString(),f=V(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&e(a,c))return!0}catch{}ut(n,l)}};let s=U(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,H(n,s)):jt[t].add(c))}function Mt(){if(!tt){Ie(!0);for(const t in D)Et(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=v(r,o);if(!W(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Se(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in D)Et(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function ve(t,e){tt||Mt();function n(r){let o;if(!D[r]||!(o=Pt(r)))return;const i=jt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=U(o),!H(o,s+1))return;const c={cached:Math.floor(Date.now()/Tt),provider:t.provider,data:e};return Z(o,j+s.toString(),JSON.stringify(c))}e.lastModified&&!Se(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function dt(){}function ke(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,de(t)}))}function Ce(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=Q(n)))return;i.prepare(n,r,o).forEach(c=>{xe(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=W(t,l);if(!f.length)return;const a=t.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),ve(t,l)}catch(f){console.error(f)}ke(t)})})}))}const _e=(t,e)=>{const n=ge(t,!0,It()),r=ue(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,dt)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(v(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,g=v(f,a),m=g.pendingIcons||(g.pendingIcons=new Set);m.has(d)||(m.add(d),o[f][a].push(d))}),i.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&Ce(l,o[f][a])}),e?he(e,r,i):dt};function Te(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in St?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const je=/[\s,]+/;function Pe(t,e){e.split(je).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ee(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function Me(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Le(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Fe(t){return"data:image/svg+xml,"+Le(t)}function Oe(t){return'url("'+Fe(t)+'")'}const pt={...vt,inline:!1},Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ne={display:"inline-block"},K={backgroundColor:"currentColor"},Lt={backgroundColor:"transparent"},ht={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},gt={webkitMask:K,mask:K,background:Lt};for(const t in gt){const e=gt[t];for(const n in ht)e[t+n]=ht[n]}const F={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";F[t+"-flip"]=e,F[t.slice(0,1)+"-flip"]=e,F[t+"Flip"]=e});function mt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const yt=(t,e)=>{const n=Te(pt,e),r={...Ae},o=e.mode||"svg",i={},s=e.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in e){const u=e[p];if(u!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Pe(n,u);break;case"color":i.color=u;break;case"rotate":typeof u=="string"?n[p]=Ee(u):typeof u=="number"&&(n[p]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete r["aria-hidden"];break;default:{const I=F[p];I?(u===!0||u==="true"||u===1)&&(n[I]=!0):pt[p]===void 0&&(r[p]=u)}}}const l=Xt(t,n),f=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),o==="svg"){r.style={...i,...c},Object.assign(r,f);let p=0,u=e.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),r.innerHTML=ee(l.body,u?()=>u+"ID"+p++:"iconifyVue"),et("svg",r)}const{body:a,width:d,height:g}=t,m=o==="mask"||(o==="bg"?!1:a.indexOf("currentColor")!==-1),x=Me(a,{...f,width:d+"",height:g+""});return r.style={...i,"--svg":Oe(x),width:mt(f.width),height:mt(f.height),...Ne,...m?K:Lt,...c},et("span",r)};It(!0);ne("",ae);if(typeof document<"u"&&typeof window<"u"){Mt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Kt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;oe(n,o)||console.error(r)}catch{console.error(r)}}}}const De={...N,body:""},Be=G({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=A(t,!1,!0))===null)return this.abortLoading(),null;const r=Ht(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:_e([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return yt(De,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),yt({...N,...e.data},n)}}),Re={key:1,class:"svg-icon","aria-hidden":"true"},$e=["xlink:href"],ze=G({name:"SvgIcon"}),qe=G({...ze,props:{name:{},prefix:{default:"icon"}},setup(t){const e=t,n=Ot(()=>`#${e.prefix}-${e.name}`);return(r,o)=>r.name.includes(":")?(nt(),At(ot(Be),{key:0,class:"svg-icon",icon:r.name},null,8,["icon"])):(nt(),Nt("svg",Re,[Dt("use",{"xlink:href":ot(n)},null,8,$e)]))}});const He=Bt(qe,[["__scopeId","data-v-d9d6fdf0"]]);export{He as _};
