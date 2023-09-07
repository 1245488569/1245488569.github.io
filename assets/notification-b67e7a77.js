
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d as g,e as _,o as h,f as k,g as n,w as o,m as s,S as C,_ as $,Q as x,x as u}from"./index-b8c7047d.js";import{u as N}from"./notification-2b564698.js";const b=g({name:"PersonalNotification",__name:"notification",setup(v){const t=N();function p(){t.$patch(e=>{e.message+=1})}function m(){t.$patch(e=>{e.message-=e.message>0?1:0})}function f(){t.$patch(e=>{e.todo+=1})}function d(){t.$patch(e=>{e.todo-=e.todo>0?1:0})}return(e,P)=>{const r=C,i=$,a=_("el-icon"),c=_("el-button"),l=x;return h(),k("div",null,[n(r,{title:"通知中心",content:"本页面仅模拟右上角通知数变化，具体业务逻辑请到 /src/store/modules/notification.ts 文件中编写"}),n(l,{title:"消息"},{default:o(()=>[n(c,{onClick:p},{icon:o(()=>[n(a,null,{default:o(()=>[n(i,{name:"i-ep:plus"})]),_:1})]),default:o(()=>[s(" 1 ")]),_:1}),n(c,{onClick:m},{icon:o(()=>[n(a,null,{default:o(()=>[n(i,{name:"i-ep:minus"})]),_:1})]),default:o(()=>[s(" 1 ")]),_:1})]),_:1}),n(l,{title:"待办"},{default:o(()=>[n(c,{onClick:f},{icon:o(()=>[n(a,null,{default:o(()=>[n(i,{name:"i-ep:plus"})]),_:1})]),default:o(()=>[s(" 1 ")]),_:1}),n(c,{onClick:d},{icon:o(()=>[n(a,null,{default:o(()=>[n(i,{name:"i-ep:minus"})]),_:1})]),default:o(()=>[s(" 1 ")]),_:1})]),_:1})])}}});typeof u=="function"&&u(b);export{b as default};
