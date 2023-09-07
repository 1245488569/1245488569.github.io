
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
  
import{d as H,u as L,y as V,F as G,X as U,Y as q,G as R,e as C,o as _,f as M,h as O,i as h,J as I,g as x,O as A,L as N,w as E,W as z,Z as J,a5 as W,_ as X,m as Y,t as Z,q as K}from"./index-b8c7047d.js";import Q from"./index-1e2d2058.js";import j from"./index-8c574578.js";import"./index.vue_vue_type_script_setup_true_lang-50c0136f.js";import"./index-b7c18886.js";import"./index-b8c94418.js";import"./notification-2b564698.js";import"./useMainPage-8e2e343f.js";import"./sortable.esm-0d19b1d3.js";function k(t){for(var n=[],e=0;e<t.length;){var s=t[e];if(s==="*"||s==="+"||s==="?"){n.push({type:"MODIFIER",index:e,value:t[e++]});continue}if(s==="\\"){n.push({type:"ESCAPED_CHAR",index:e++,value:t[e++]});continue}if(s==="{"){n.push({type:"OPEN",index:e,value:t[e++]});continue}if(s==="}"){n.push({type:"CLOSE",index:e,value:t[e++]});continue}if(s===":"){for(var m="",o=e+1;o<t.length;){var c=t.charCodeAt(o);if(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||c===95){m+=t[o++];continue}break}if(!m)throw new TypeError("Missing parameter name at ".concat(e));n.push({type:"NAME",index:e,value:m}),e=o;continue}if(s==="("){var v=1,a="",o=e+1;if(t[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<t.length;){if(t[o]==="\\"){a+=t[o++]+t[o++];continue}if(t[o]===")"){if(v--,v===0){o++;break}}else if(t[o]==="("&&(v++,t[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));a+=t[o++]}if(v)throw new TypeError("Unbalanced pattern at ".concat(e));if(!a)throw new TypeError("Missing pattern at ".concat(e));n.push({type:"PATTERN",index:e,value:a}),e=o;continue}n.push({type:"CHAR",index:e,value:t[e++]})}return n.push({type:"END",index:e,value:""}),n}function ee(t,n){n===void 0&&(n={});for(var e=k(t),s=n.prefixes,m=s===void 0?"./":s,o="[^".concat(ae(n.delimiter||"/#?"),"]+?"),c=[],v=0,a=0,u="",i=function(g){if(a<e.length&&e[a].type===g)return e[a++].value},r=function(g){var y=i(g);if(y!==void 0)return y;var S=e[a],$=S.type,B=S.index;throw new TypeError("Unexpected ".concat($," at ").concat(B,", expected ").concat(g))},l=function(){for(var g="",y;y=i("CHAR")||i("ESCAPED_CHAR");)g+=y;return g};a<e.length;){var f=i("CHAR"),p=i("NAME"),b=i("PATTERN");if(p||b){var d=f||"";m.indexOf(d)===-1&&(u+=d,d=""),u&&(c.push(u),u=""),c.push({name:p||v++,prefix:d,suffix:"",pattern:b||o,modifier:i("MODIFIER")||""});continue}var w=f||i("ESCAPED_CHAR");if(w){u+=w;continue}u&&(c.push(u),u="");var D=i("OPEN");if(D){var d=l(),P=i("NAME")||"",T=i("PATTERN")||"",F=l();r("CLOSE"),c.push({name:P||(T?v++:""),pattern:P&&!T?o:T,prefix:d,suffix:F,modifier:i("MODIFIER")||""});continue}r("END")}return c}function te(t,n){return ne(ee(t,n),n)}function ne(t,n){n===void 0&&(n={});var e=re(n),s=n.encode,m=s===void 0?function(a){return a}:s,o=n.validate,c=o===void 0?!0:o,v=t.map(function(a){if(typeof a=="object")return new RegExp("^(?:".concat(a.pattern,")$"),e)});return function(a){for(var u="",i=0;i<t.length;i++){var r=t[i];if(typeof r=="string"){u+=r;continue}var l=a?a[r.name]:void 0,f=r.modifier==="?"||r.modifier==="*",p=r.modifier==="*"||r.modifier==="+";if(Array.isArray(l)){if(!p)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(l.length===0){if(f)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var b=0;b<l.length;b++){var d=m(l[b],r);if(c&&!v[i].test(d))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(d,'"'));u+=r.prefix+d+r.suffix}continue}if(typeof l=="string"||typeof l=="number"){var d=m(String(l),r);if(c&&!v[i].test(d))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(d,'"'));u+=r.prefix+d+r.suffix;continue}if(!f){var w=p?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(w))}}return u}}function ae(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function re(t){return t&&t.sensitive?"":"i"}const ie={class:"toolbar-container"},oe={class:"left-box"},se={class:"sidebar-favorites"},ue=H({name:"Toolbar",__name:"index",setup(t){const n=L(),e=V(),s=G(),m=U(q,Function,!0),o=R(()=>{var a;return e.mode==="mobile"||["side","head","single"].includes(e.settings.menu.menuMode)&&e.settings.menu.enableSubMenuCollapseButton&&!(e.settings.menu.subMenuOnlyOneHide&&s.sidebarMenus.length===1&&(!s.sidebarMenus[0].children||(a=s.sidebarMenus[0])!=null&&a.children.every(u=>{var i;return((i=u.meta)==null?void 0:i.sidebar)===!1})))}),c=R(()=>{var u,i,r;const a=[];if(e.settings.home.enable&&a.push({path:"/",title:m("route.home",e.settings.home.title)}),n.name!=="home"&&e.settings.breadcrumb.enableMainMenu&&!["single"].includes(e.settings.menu.menuMode)){const l=s.allMenus.findIndex(f=>f.children.some(p=>n.fullPath.indexOf(`${p.path}/`)===0||n.fullPath===p.path));(u=s.allMenus[l])!=null&&u.meta&&a.push({path:"",title:m((i=s.allMenus[l].meta)==null?void 0:i.i18n,(r=s.allMenus[l].meta)==null?void 0:r.title)})}if(n.meta.breadcrumbNeste){n.meta.breadcrumbNeste.forEach(f=>{f.hide===!1&&a.push({path:f.path,title:m(f.i18n,f.title)})});const l=e.customTitleList.find(f=>f.fullPath===n.fullPath);l&&(a[a.length-1].title=l.title)}return a});function v(a){return te(a)(n.params)}return(a,u)=>{const i=X,r=C("el-dropdown"),l=C("el-breadcrumb-item"),f=C("el-breadcrumb");return _(),M("div",ie,[O("div",oe,[h(o)?(_(),M("div",{key:0,class:I(["sidebar-collapse",{"is-collapse":h(e).settings.menu.subMenuCollapse}]),onClick:u[0]||(u[0]=p=>h(e).toggleSidebarCollapse())},[x(i,{name:"toolbar-collapse"})],2)):A("",!0),h(e).mode==="pc"&&h(e).settings.favorites.enable?(_(),N(r,{key:1,placement:"bottom-start"},{dropdown:E(()=>[x(j)]),default:E(()=>[O("div",se,[x(i,{name:"uiw:star-off"})])]),_:1})):A("",!0),h(e).mode==="pc"&&h(e).settings.breadcrumb.enable&&h(e).settings.app.routeBaseOn!=="filesystem"?(_(),N(f,{key:2,class:I(["breadcrumb",{[`breadcrumb-${h(e).settings.breadcrumb.style}`]:h(e).settings.breadcrumb.style!==""}])},{default:E(()=>[x(W,{name:"breadcrumb"},{default:E(()=>[(_(!0),M(z,null,J(h(c),(p,b)=>(_(),N(l,{key:`${b}_${p.path}`,to:b<h(c).length-1&&p.path!==""?v(p.path):""},{default:E(()=>[Y(Z(p.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["class"])):A("",!0)]),x(Q)])}}});const ge=K(ue,[["__scopeId","data-v-2a74cc56"]]);export{ge as default};
