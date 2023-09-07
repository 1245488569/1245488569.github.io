
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d as w,u as g,C as h,e as l,o as p,f as x,g as t,w as o,L as y,h as s,i as n,m as r,t as C,T as V,_ as b,Q as B,p as I,k as S,E,q as L}from"./index-b8c7047d.js";import{u as N}from"./index-b7c18886.js";const T=a=>(I("data-v-2fe81198"),a=a(),S(),a),$={class:"link-view"},q={class:"container"},z=T(()=>s("div",{class:"title"}," 是否访问此链接 ",-1)),D=w({name:"LinkView",__name:"link",setup(a){const e=g(),{copy:d,copied:m}=N();h(m,i=>{i&&E.success("复制成功")});function u(){window.open(e.meta.link,"_blank")}return(i,c)=>{const _=b,k=l("el-tooltip"),f=l("el-button"),v=B;return p(),x("div",$,[t(V,{name:"link",mode:"out-in",appear:""},{default:o(()=>[(p(),y(v,{key:n(e).meta.link,title:"⚠️访问提醒"},{default:o(()=>[s("div",q,[t(_,{name:"icon-park-twotone:planet",size:120,color:"var(--g-theme-color)"}),z,s("div",{class:"link",onClick:c[0]||(c[0]=M=>n(e).meta.link&&n(d)(n(e).meta.link))},[t(k,{effect:"dark",content:"复制链接",placement:"top","show-after":300},{default:o(()=>[r(C(n(e).meta.link),1)]),_:1})]),t(f,{type:"primary",plain:"",round:"",onClick:u},{icon:o(()=>[t(_,{name:"ri:external-link-fill"})]),default:o(()=>[r(" 立即访问 ")]),_:1})])]),_:1}))]),_:1})])}}});const j=L(D,[["__scopeId","data-v-2fe81198"]]);export{j as default};
