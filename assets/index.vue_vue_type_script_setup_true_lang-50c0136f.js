
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d as C,c as I,u as S,y as T,G as k,X as y,e as d,i as u,L as g,w as m,O as L,Y as x,o as p,g as B,f as V,Z as h,W as j,R as v,a6 as D,m as E,t as F}from"./index-b8c7047d.js";const z=C({name:"I18nSelector",__name:"index",setup(O){const{locale:b}=I(),e=S(),t=T(),w=k(()=>D()),i=y(x,Function,!0);function N(n){var c,s,o,l,a,r,_,f;b.value=n,t.setDefaultLang(n),t.settings.app.routeBaseOn!=="filesystem"?(s=(c=e.meta.breadcrumbNeste)==null?void 0:c.at(-1))!=null&&s.i18n||(l=(o=e.meta.breadcrumbNeste)==null?void 0:o.at(-1))!=null&&l.title?t.setTitle(i((r=(a=e.meta.breadcrumbNeste)==null?void 0:a.at(-1))==null?void 0:r.i18n,(f=(_=e.meta.breadcrumbNeste)==null?void 0:_.at(-1))==null?void 0:f.title)):t.setTitle(i(e.meta.i18n,e.meta.title)):(e.meta.i18n||e.meta.title)&&t.setTitle(i(e.meta.i18n,e.meta.title))}return(n,c)=>{const s=d("el-dropdown-item"),o=d("el-dropdown-menu"),l=d("el-dropdown");return u(t).settings.toolbar.enableI18n?(p(),g(l,{key:0,class:"language-container",size:"default",onCommand:N},{dropdown:m(()=>[B(o,null,{default:m(()=>[(p(!0),V(j,null,h(u(w),(a,r)=>(p(),g(s,{key:r,disabled:u(t).settings.app.defaultLang===a.name,command:a.name},{default:m(()=>[E(F(a.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:m(()=>[v(n.$slots,"default")]),_:3})):L("",!0)}}});export{z as _};
