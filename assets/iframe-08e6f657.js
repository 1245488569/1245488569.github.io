
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d,u as l,a7 as u,r as p,C as m,a8 as h,o,f as i,W as v,Z as w,i as n,a9 as g,j as _,J as x,g as k,w as y,h as C,v as I,T as L,q as V}from"./index-b8c7047d.js";const b={class:"iframe-view"},B=["data-path","src"],P=d({name:"IframeView",__name:"iframe",setup(R){const s=l(),f=u(),c=p();return m(()=>s.fullPath,t=>{g(()=>{var r;(r=c.value)==null||r.forEach(a=>{a.dataset.path===t&&(a.onload=()=>{f.closeLoading(t)})})})},{immediate:!0}),(t,r)=>{const a=h("loading");return o(),i("div",b,[(o(!0),i(v,null,w(n(f).openedList,e=>_((o(),i("div",{key:e.path,class:x(["iframe",{actived:n(s).fullPath===e.path}])},[k(L,{name:"iframe",mode:"out-in",appear:""},{default:y(()=>[_(C("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0"},null,8,B),[[I,n(s).fullPath===e.path]])]),_:2},1024)],2)),[[a,e.isLoading]])),128))])}}});const T=V(P,[["__scopeId","data-v-ba6f4e14"]]);export{T as default};
