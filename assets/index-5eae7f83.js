import{d as r,b as m,e as o,o as p,f as u,h as e,w as a,k as b,g as f}from"./index-8e07e28c.js";const h={class:"p-5"},x=f("div",null,"商品列表",-1),v=r({__name:"index",setup(k){const l=[{id:1,name:"苹果"},{id:2,name:"栗子"},{id:3,name:"橘子"},{id:4,name:"香蕉"}],s=m();function c(t){console.log(t),s.push({name:"GoodsDetail",query:{id:t.id}})}return(t,w)=>{const n=o("el-table-column"),i=o("el-button"),d=o("el-table");return p(),u("div",h,[x,e(d,{data:l,style:{width:"100%"},border:""},{default:a(()=>[e(n,{prop:"name",label:"Name",width:"180"}),e(n,{fixed:"right",label:"Operations",width:"200"},{default:a(({row:_})=>[e(i,{type:"primary",size:"small",onClick:C=>c(_)},{default:a(()=>[b(" Detail ")]),_:2},1032,["onClick"])]),_:1})]),_:1})])}}});export{v as default};
