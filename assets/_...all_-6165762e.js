
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d as v,u as f,a as m,y as b,z as w,r as h,A as g,B as S,e as x,f as y,g as s,h as o,w as I,p as k,k as B,o as N,m as C,t as R,i as V,_ as M,q as T,x as c}from"./index-b8c7047d.js";const _=t=>(k("data-v-eae09b76"),t=t(),B(),t),q={class:"notfound"},z={class:"content"},A=_(()=>o("h1",null,"404",-1)),D=_(()=>o("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1)),r=v({__name:"[...all]",setup(t){const a=f(),u=m(),l=b(),i=w(),e=h({inter:Number.NaN,countdown:5});g(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),S(()=>{l.settings.tabbar.enable&&i.remove(a.meta.activeMenu||a.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),n())},1e3)});function n(){u.push("/")}return(E,L)=>{const d=M,p=x("el-button");return N(),y("div",q,[s(d,{name:"404",class:"icon"}),o("div",z,[A,D,s(p,{type:"primary",onClick:n},{default:I(()=>[C(R(V(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});typeof c=="function"&&c(r);const j=T(r,[["__scopeId","data-v-eae09b76"]]);export{j as default};
