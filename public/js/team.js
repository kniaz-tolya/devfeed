webpackJsonp([1],{"0Zmg":function(t,e){},1:function(t,e,a){t.exports=a("Hsqg")},"5P0w":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team-wrap"},[t.loading?a("loading",{attrs:{className:t.loading}}):t._e(),t._v(" "),t.teams.data?a("team-list",{attrs:{teams:t.teams.data}}):t._e(),t._v(" "),t.teams.data?a("pager",{on:{pagechange:t.pageChange}}):t._e(),t._v(" "),a("team-modal",{attrs:{id:"teamModal",team:t.currentTeam},slot:"modal"})],1)},staticRenderFns:[]}},"7nMR":function(t,e,a){function s(t){a("Z+7k")}var n=a("VU/8")(a("O+Ed"),a("5P0w"),s,null,null);t.exports=n.exports},BkhT:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("p",{class:t.cls},[t._v("loading...")])])},staticRenderFns:[]}},"FP7+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length,expression:"errors.length"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("ul",t._l(t.errors,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"team-form"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("团队名称")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attr.title,expression:"attr.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.attr.title},on:{input:function(e){e.target.composing||(t.attr.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("团队网址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attr.website,expression:"attr.website"}],staticClass:"form-control",attrs:{type:"url",placeholder:"http://"},domProps:{value:t.attr.website},on:{input:function(e){e.target.composing||(t.attr.website=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("团队 LOGO")]),t._v(" "),a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[t.attr.logo?a("img",{staticClass:"media-object img-thumbnail",attrs:{src:t.attr.logo,width:"200",height:"200"}}):t._e()]),t._v(" "),a("div",{staticClass:"media-body"},[a("p",{staticClass:"help-block"},[t._v("可选择jpg、png格式，尺寸为200x200像素")]),t._v(" "),a("input",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"file",accept:"image/jpeg,image/png"},on:{change:t.fileChanged}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("团队介绍")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attr.description,expression:"attr.description"}],staticClass:"form-control",attrs:{rows:"5",placeholder:"输入团队介绍。"},domProps:{value:t.attr.description},on:{input:function(e){e.target.composing||(t.attr.description=e.target.value)}}}),t._v(" "),a("p",{staticClass:"help-block"},[t._v("500字以内，支持"),a("strong",[t._v("Markdown")]),t._v("语法。当前字数："+t._s(t.count)+" / 500")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.onCancel}},[t._v("关闭")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveTeam}},[t._v("保存")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}]}},Hsqg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("I3G/"),n=a.n(s),i=a("/ocq");a("WRGp"),n.a.use(i.default);var o=a("7nMR"),r=[{path:"/admin/team",component:o}],l=new i.default({mode:"history",routes:r});window.bus=new n.a,new n.a({el:"#teamApp",router:l,methods:{addTeam:function(){bus.$emit("addTeam")}}})},KTPw:function(t,e,a){function s(t){a("Sn6q")}var n=a("VU/8")(a("RmJM"),a("BkhT"),s,null,null);t.exports=n.exports},"O+Ed":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("KTPw"),n=a.n(s),i=a("poEP"),o=a.n(i),r=a("lr0V"),l=a.n(r),d=a("xXjE"),c=a.n(d),u={title:"",logo:"",website:"",description:""};e.default={name:"viewHome",data:function(){return{loading:!0,page:1,pageSize:10,teams:{data:[]},currentTeam:u,index:-1}},watch:{page:function(){this.loadTeams()},pageSize:function(){this.loadTeams()}},methods:{reset:function(){this.currentTeam=u,this.index=-1},loadTeams:function(){var t=this;axios.get("/api/v1/teams/list",{params:{page:this.page,size:this.pageSize}}).then(function(e){t.loading&&(t.loading=!1),t.teams=e.data,bus.$emit("pageChanged",e.data)})},pageChange:function(t){this.page+=t},addTeam:function(){this.currentTeam=u,this.index=-1,jQuery("#teamModal").modal("show")},editteam:function(t,e){this.index=e,this.currentTeam=t,jQuery("#teamModal").modal("show")},delteam:function(t,e){var a=this;axios.post("/api/v1/teams/del",{id:t.id}).then(function(t){var s=t.data,n=s.ret,i=s.message;0==n?a.teams.data.splice(e,1):alert(i)}).catch(function(t){})},teamSaved:function(t){-1!==this.index?this.teams.data.splice(this.index,1,t):this.teams.data.unshift(t),jQuery("#teamModal").modal("hide")}},components:{loading:n.a,teamList:o.a,pager:l.a,teamModal:c.a},created:function(){this.loadTeams(),bus.$on("editteam",this.editteam),bus.$on("delteam",this.delteam),bus.$on("pageChange",this.pageChange),bus.$on("addTeam",this.addTeam),bus.$on("teamSaved",this.teamSaved),bus.$on("modalCanceled",this.reset)},destroyed:function(){bus.$off("editteam",this.editteam),bus.$off("delteam",this.delteam),bus.$off("pageChange",this.pageChange),bus.$off("addTeam",this.addTeam),bus.$off("teamSaved",this.teamSaved)}}},PMvJ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12"},[a("ul",{staticClass:"pagination"},[t.pages.prev_page_url?a("li",[a("a",{attrs:{href:"#",rel:"prev"},on:{click:function(e){e.preventDefault(),t.change(-1)}}},[t._v("上一页")])]):a("li",{staticClass:"disabled"},[a("span",[t._v("上一页")])]),t._v(" "),a("li",{staticClass:"disabled"},[a("span",[t._v(t._s(t.pages.current_page)+" / "+t._s(t.totalPage))])]),t._v(" "),t.pages.next_page_url?a("li",[a("a",{attrs:{href:"#",rel:"next"},on:{click:function(e){e.preventDefault(),t.change(1)}}},[t._v("下一页")])]):a("li",{staticClass:"disabled"},[a("span",[t._v("下一页")])])])])},staticRenderFns:[]}},REqO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"teamDetail",props:["index","team"],methods:{edit:function(t){bus.$emit("editteam",t,this.index)},delTeam:function(t){bus.$emit("delteam",t,this.index)}}}},RmJM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",props:["className"],data:function(){return{cls:this.className}}}},Sn6q:function(t,e){},UMMn:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-6 col-sm-6 col-md-4 col-lg-2"},[a("div",{staticClass:"thumbnail team"},[a("img",{staticClass:"logo img-thumbnail",attrs:{src:t.team.logo,alt:"team.title",width:"200",height:"200"}}),t._v(" "),a("div",{staticClass:"caption desc"},[a("h4",{staticClass:"title"},[t._v(t._s(t.team.title))]),t._v(" "),a("p",[a("strong",[t._v("获赞："+t._s(t.team.likes))]),t._v("人次")]),t._v(" "),a("p",[a("strong",[t._v("文章："+t._s(Math.round(1e3*Math.random())))]),t._v("篇")]),t._v(" "),a("p",{staticClass:"options"},[a("button",{staticClass:"btn btn-primary",attrs:{role:"button"},on:{click:function(e){t.edit(t.team)}}},[t._v("编辑")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{role:"button"},on:{click:function(e){t.delTeam(t.team)}}},[t._v("删除")])])])])])},staticRenderFns:[]}},"VU/8":function(t,e){t.exports=function(t,e,a,s,n){var i,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,o=t.default);var l="function"==typeof o?o.options:o;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),s&&(l._scopeId=s);var d;if(n?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=d):a&&(d=a),d){var c=l.functional,u=c?l.render:l.beforeCreate;c?l.render=function(t,e){return d.call(e),u(t,e)}:l.beforeCreate=u?[].concat(u,d):[d]}return{esModule:i,exports:o,options:l}}},WRGp:function(t,e,a){void 0===window.axios&&(window.axios=a("mtWM"));var s=document.head.querySelector('meta[name="csrf-token"]');window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",s&&(window.axios.defaults.headers.common["X-CSRF-TOKEN"]=s.content)},Xk6u:function(t,e,a){function s(t){a("0Zmg")}var n=a("VU/8")(a("REqO"),a("UMMn"),s,null,null);t.exports=n.exports},YRzu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xk6u"),n=a.n(s);e.default={name:"teamList",props:["teams"],components:{teamDetail:n.a}}},"Z+7k":function(t,e){},ca1j:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.teams,function(t,e){return a("team-detail",{key:t.id,attrs:{team:t,index:e}})}))},staticRenderFns:[]}},eugs:function(t,e,a){"use strict";function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pager",data:function(){var t;return{pages:(t={prev_page_url:null,current_page:1,total:1},s(t,"current_page",1),s(t,"next_page_url",null),s(t,"from",0),s(t,"to",0),t)}},computed:{totalPage:function(){return Math.ceil(this.pages.total/this.pages.per_page)}},methods:{change:function(t){bus.$emit("pageChange",t)},changed:function(t){this.pages=t}},created:function(){bus.$on("pageChanged",this.changed)},destroyed:function(){bus.$off("pageChanged",this.changed)}}},lr0V:function(t,e,a){var s=a("VU/8")(a("eugs"),a("PMvJ"),null,null,null);t.exports=s.exports},mqxg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={name:"teamModal",props:["team"],data:function(){return{attr:{id:null,title:"",website:"",logo:"/img/team-default.png",realLogo:null,description:""},errors:[]}},watch:{team:function(t){this.attr=t}},computed:{title:function(){return void 0===this.team?"创建新团队":"编辑团队"},count:function(){return this.attr.description.length||0}},methods:{onCancel:function(){bus.$emit("modalCanceled")},fileChanged:function(t){var e=this,a=t.target.files[0];this.$set(this.attr,"realLogo",a);var s=new FileReader;s.onload=function(t){e.$set(e.attr,"logo",t.target.result)},s.readAsDataURL(a)},saveTeam:function(){var t=this,e=new FormData;for(var a in this.attr)this.attr[a]&&e.append(a,this.attr[a]);e.delete("logo"),e.delete("realLogo");var n=this.attr.realLogo;!n||"object"!==(void 0===n?"undefined":s(n))||"image/png"!==n.type&&"image/jpeg"!==n.type||e.append("logo",n),axios.post("/api/v1/teams/save",e).then(function(e){var a=e.data;switch(a.ret){case 1:t.errors=a.message;break;case 404:t.errors=["要编辑的团队不存在，可能已被删除。"];break;case 2:t.errors=["保存团队信息失败，请联系开发人员排查。"];break;default:t.errors=[],bus.$emit("teamSaved",a.message)}}).catch(function(e){t.errors=[e.message]})}},created:function(){var t=this;jQuery("#teamModal").on("hidden.bs.modal",function(){t.errors=[]})}}},poEP:function(t,e,a){var s=a("VU/8")(a("YRzu"),a("ca1j"),null,null,null);t.exports=s.exports},xXjE:function(t,e,a){var s=a("VU/8")(a("mqxg"),a("FP7+"),null,null,null);t.exports=s.exports}},[1]);