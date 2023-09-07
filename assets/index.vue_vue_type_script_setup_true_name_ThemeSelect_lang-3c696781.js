import{_ as z}from"./index-020b5b35.js";import{d as m,n as S,e as h,o as n,s as k,w as u,h as r,i as p,z as R,q as b,V as E,U as H,R as $,f as c,k as g,v as C,t as I,r as D,g as i,A as B,F as x}from"./index-8e07e28c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const F=m({name:"SidebarCollapse"}),ie=m({...F,props:{size:{default:20}},setup(T){const s=S();function e(){s.appConfig.nav.subMenuCollapse=!s.appConfig.nav.subMenuCollapse}return(a,f)=>{const d=z,l=h("el-icon");return n(),k(l,{size:a.size,onClick:e},{default:u(()=>[r(d,{name:p(s).getCollapse?"hamburger-opened":"hamburger-closed",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["size"])}}}),q=m({name:"ChangeColorScheme"}),me=m({...q,props:{size:{default:20}},setup(T){const s=S();function e(){s.appConfig.app.colorScheme=s.appConfig.app.colorScheme==="dark"?"light":"dark"}return R(()=>s.appConfig.app.colorScheme,a=>{switch(a===""&&(a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),a){case"dark":document.documentElement.classList.add("dark");break;case"light":document.documentElement.classList.remove("dark");break}},{immediate:!0}),(a,f)=>{const d=z,l=h("el-icon");return n(),k(l,{size:a.size,onClick:e},{default:u(()=>[r(d,{class:"cursor-pointer",name:p(s).appConfig.app.colorScheme==="light"?"ep:sunny":"ep:moon"},null,8,["name"])]),_:1},8,["size"])}}}),P={key:0},X=m({name:"XtDialog"}),j=m({...X,props:{modelValue:{type:Boolean},loading:{type:Boolean,default:!1},showCancel:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},cancelButtonText:{default:"取消"},confirmButtonText:{default:"确定"}},emits:["update:modelValue","cancel","confirm"],setup(T,{emit:s}){const e=T,a=b({get(){return e.modelValue},set(l){s("update:modelValue",l)}});function f(){s("cancel")}function d(){s("confirm")}return(l,w)=>{const _=h("el-button"),v=h("el-dialog");return n(),k(v,E({modelValue:p(a),"onUpdate:modelValue":w[0]||(w[0]=M=>H(a)?a.value=M:null),class:"xt-base-dialog","close-on-click-modal":!1,"close-on-press-escape":!1},l.$attrs),{footer:u(()=>[$(l.$slots,"footer",{},()=>[l.showCancel||l.showConfirm?(n(),c("span",P,[l.showCancel?(n(),k(_,{key:0,onClick:f},{default:u(()=>[g(C(l.cancelButtonText),1)]),_:1})):I("",!0),l.showConfirm?(n(),k(_,{key:1,type:"primary",loading:l.loading,onClick:d},{default:u(()=>[g(C(l.confirmButtonText),1)]),_:1},8,["loading"])):I("",!0)])):I("",!0)])]),default:u(()=>[$(l.$slots,"default")]),_:3},16,["modelValue"])}}}),G={class:"flex"},J={class:"mb-1"},K={class:"flex"},O={class:"mb-1"},Q={class:"flex"},W={class:"mb-1"},Y={class:"flex"},Z={class:"mb-1"},ee={class:"flex"},oe={class:"mb-1"},le=m({name:"SelectColor"}),te=m({...le,setup(T,{expose:s}){const e=S(),a=b(()=>[{title:"文字颜色",key:"logoTextColor",value:e.getTheme.logoTextColor}]),f=b(()=>[{title:"背景色",key:"mainMenuBgColor",value:e.getTheme.mainMenuBgColor},{title:"选中背景色",key:"mainMenuActiveBgColor",value:e.getTheme.mainMenuActiveBgColor},{title:"鼠标经过背景色",key:"mainMenuHoverBgColor",value:e.getTheme.mainMenuHoverBgColor},{title:"文字颜色",key:"mainMenuTextColor",value:e.getTheme.mainMenuTextColor},{title:"选中文字颜色",key:"mainMenuActiveTextColor",value:e.getTheme.mainMenuActiveTextColor},{title:"鼠标经过文字颜色",key:"mainMenuHoverTextColor",value:e.getTheme.mainMenuHoverTextColor}]),d=b(()=>[{title:"背景色",key:"menuBgColor",value:e.getTheme.menuBgColor},{title:"选中背景色",key:"menuActiveBgColor",value:e.getTheme.menuActiveBgColor},{title:"鼠标经过背景色",key:"menuHoverBgColor",value:e.getTheme.menuHoverBgColor},{title:"文字颜色",key:"menuTextColor",value:e.getTheme.menuTextColor},{title:"选中文字颜色",key:"menuActiveTextColor",value:e.getTheme.menuActiveTextColor},{title:"鼠标经过文字颜色",key:"menuHoverTextColor",value:e.getTheme.menuHoverTextColor}]),l=b(()=>[{title:"tabbar背景色",key:"tabbarBgColor",value:e.getTheme.tabbarBgColor},{title:"tabbarItem背景色",key:"tabbarItemBgColor",value:e.getTheme.tabbarItemBgColor},{title:"选中背景色",key:"tabbarItemActiveBgColor",value:e.getTheme.tabbarItemActiveBgColor},{title:"鼠标经过背景色",key:"tabbarItemHoverBgColor",value:e.getTheme.tabbarItemHoverBgColor},{title:"文字颜色",key:"tabbarItemTextColor",value:e.getTheme.tabbarItemTextColor},{title:"选中文字颜色",key:"tabbarItemActiveTextColor",value:e.getTheme.tabbarItemActiveTextColor},{title:"鼠标经过文字颜色",key:"tabbarItemHoverTextColor",value:e.getTheme.tabbarItemHoverTextColor}]),w=b(()=>[{title:"背景色",key:"toolbarBgColor",value:e.getTheme.toolbarBgColor},{title:"文字颜色",key:"toolbarTextColor",value:e.getTheme.toolbarTextColor}]);function _(U,A){e.appConfig.theme[U]=A}const v=D(!1);function M(){v.value=!0}return s({open:M}),(U,A)=>{const y=h("el-divider"),V=h("el-color-picker"),N=j;return n(),k(N,{modelValue:p(v),"onUpdate:modelValue":A[0]||(A[0]=o=>H(v)?v.value=o:null),title:"设置主题色","append-to-body":"",width:"900px","show-cancel":!1,"show-confirm":!1},{default:u(()=>[i("div",null,[r(y,null,{default:u(()=>[g("logo")]),_:1}),i("div",G,[(n(!0),c(x,null,B(p(a),o=>(n(),c("div",{key:o.value,class:"color-select-content"},[i("span",J,C(o.title),1),r(V,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,"show-alpha":"",onChange:t=>_(o.key,t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]))),128))]),r(y,null,{default:u(()=>[g("主导航")]),_:1}),i("div",K,[(n(!0),c(x,null,B(p(f),o=>(n(),c("div",{key:o.value,class:"color-select-content"},[i("span",O,C(o.title),1),r(V,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,"show-alpha":"",onChange:t=>_(o.key,t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]))),128))]),r(y,null,{default:u(()=>[g("侧导航")]),_:1}),i("div",Q,[(n(!0),c(x,null,B(p(d),o=>(n(),c("div",{key:o.value,class:"color-select-content"},[i("span",W,C(o.title),1),r(V,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,"show-alpha":"",onChange:t=>_(o.key,t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]))),128))]),r(y,null,{default:u(()=>[g("tabbar")]),_:1}),i("div",Y,[(n(!0),c(x,null,B(p(l),o=>(n(),c("section",{key:o.value,class:"color-select-content"},[i("span",Z,C(o.title),1),r(V,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,"show-alpha":"",onChange:t=>_(o.key,t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]))),128))]),r(y,null,{default:u(()=>[g("toolbar")]),_:1}),i("div",ee,[(n(!0),c(x,null,B(p(w),o=>(n(),c("section",{key:o.value,class:"color-select-content"},[i("span",oe,C(o.title),1),r(V,{modelValue:o.value,"onUpdate:modelValue":t=>o.value=t,"show-alpha":"",onChange:t=>_(o.key,t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]))),128))])])]),_:1},8,["modelValue"])}}});const ae=L(te,[["__scopeId","data-v-1e75a8fb"]]),ne={class:"flex items-center"},se=m({name:"ThemeSelect"}),de=m({...se,props:{size:{default:20}},setup(T){const s=D();function e(){var a;(a=s.value)==null||a.open()}return(a,f)=>{const d=z,l=h("el-icon");return n(),c("div",ne,[r(l,{size:a.size,onClick:e},{default:u(()=>[r(d,{class:"cursor-pointer",name:"ri:palette-line"})]),_:1},8,["size"]),r(ae,{ref_key:"selectColorRef",ref:s},null,512)])}}});export{ie as _,me as a,de as b,j as c};
