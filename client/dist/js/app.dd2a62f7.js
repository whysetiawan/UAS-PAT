(function(t){function e(e){for(var n,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"35d98d3d","chunk-0e96da57":"952a9ef4","chunk-12ff7088":"6f62f46d","chunk-1ad43f71":"b0cdff59","chunk-ef9e8d1c":"6c596b58","chunk-2d23797d":"182d4db4","chunk-dba5d85a":"b4c13339"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-0e96da57":1,"chunk-12ff7088":1,"chunk-1ad43f71":1,"chunk-ef9e8d1c":1,"chunk-dba5d85a":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0e96da57":"2e6a0f5b","chunk-12ff7088":"b05ec59d","chunk-1ad43f71":"5c4ce215","chunk-ef9e8d1c":"479992ee","chunk-2d23797d":"31d6cfe0","chunk-dba5d85a":"f1aa3a9a"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=o;var E=document.getElementsByTagName("head")[0];E.appendChild(m)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"345b":function(t,e,a){t.exports=a.p+"img/logo-form.c765d6ca.svg"},3511:function(t,e,a){t.exports=a.p+"img/login-img.05c80e73.svg"},"4ef1":function(t,e,a){"use strict";a("7b08")},"7b08":function(t,e,a){},"85ec":function(t,e,a){},b76f:function(t,e,a){"use strict";a("c274")},bd5e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=window.location.href.indexOf("localhost")>=0?"http://localhost:3000/api/v1":"https://cayn.herokuapp.com/api/v1"},c274:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},s=i,c=(a("034f"),a("2877")),u=a("6544"),l=a.n(u),d=a("7496"),m=Object(c["a"])(s,r,o,!1,null,null,null),E=m.exports;l()(m,{VApp:d["a"]});a("d3b7"),a("3ca3"),a("ddb0");var v=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"my-8 title-text"},[t._v("Home")]),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-row",{staticClass:"px-9"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"pt-4 card-text"},[t._v(" Selamat datang "+t._s(t.auth.auth.data.username)+" di sistem Aplikasi Sugar Daddy ")])]),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"content-text py-2"},[t._v(" Sugar Daddy adalah sistem untuk manajemen barang yang ada pada gudang pusat dan gudang cabang.Sistem ini hanya dapat di akses oleh pihak yang berwenang yaitu manajer pusat dan para admin di setiap cabang. ")]),a("div",{staticClass:"content-text py-4"},[t._v(" Sugar Daddy memiliki fitur untuk manajement user, percabangan gudang, transaksi, dan manajement barang. ")])])],1)],1)],1)],1)],1)},p=[],h=a("5530"),g=a("2f62"),_={name:"Home",computed:Object(h["a"])({},Object(g["d"])({auth:function(t){return t.auth}}))},b=_,S=(a("4ef1"),a("b0af")),U=a("62ad"),C=a("a523"),R=a("0fd9"),T=Object(c["a"])(b,f,p,!1,null,"50ae9706",null),L=T.exports;l()(T,{VCard:S["a"],VCol:U["a"],VContainer:C["a"],VRow:R["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-form",[n("v-row",[t.isMobile()?n("v-col",{staticClass:"bg-login-logo",attrs:{cols:"7",sm:"7"}},[n("v-row",{staticClass:"img-login ma-12 pa-12"},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"action"},[n("v-img",{attrs:{contain:"",src:a("3511"),height:"100%",width:"100%"}})],1)])],1)],1):t._e(),n("v-col",{attrs:{cols:"12",sm:"12",md:"5"}},[n("v-row",{staticClass:"form-login"},[n("v-col",{staticClass:"my-8 py-8",attrs:{cols:"12"}},[n("div",{staticClass:"action"},[n("v-img",{attrs:{contain:"",src:a("345b"),height:"57px",width:"100%"}})],1),n("div",{staticClass:"text-center my-8 login-text"},[t._v("Login your account")]),n("div",{staticClass:"action"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("div",{staticClass:"email-title mb-1"},[n("v-icon",{staticClass:"mr-2 mx-8",attrs:{medium:"",color:"#2a4365"}},[t._v(" mdi-account ")]),t._v("Username ")],1),n("v-text-field",{staticClass:"mx-8",attrs:{color:"#2a4365",type:"email",placeholder:"Type your Username",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("div",{staticClass:"email-title mb-1"},[n("v-icon",{staticClass:"mr-2 mx-8",attrs:{medium:"",color:"#2a4365"}},[t._v(" mdi-lock ")]),t._v("Password ")],1),n("v-text-field",{staticClass:"mx-8",attrs:{id:"password",color:"#2a4365",type:"password",placeholder:"Type your password",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),n("div",{staticClass:"action text-center"},[n("v-row",[n("v-col",{staticClass:"mt-8",attrs:{cols:"12"}},[n("v-btn",{staticClass:"submit mt-8",attrs:{height:"50px",width:"90%",rounded:"",color:"#71C9CE",dark:""},on:{click:t.loginClick}},[t._v(" Login ")]),n("v-overlay",{attrs:{value:t.auth.isLoading}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),n("v-dialog",{attrs:{value:t.auth.isError}},[n("div",{staticClass:"text-center my-8 login-text"},[t._v(" "+t._s(t.auth.errMessage)+" ")])])],1)],1)],1)])],1)],1)],1)],1)],1)},k=[],O={name:"Login",data:function(){return{email:"",password:"",loading:!1}},computed:Object(h["a"])({},Object(g["d"])({auth:function(t){return t.auth}})),methods:{isMobile:function(){return!(screen.width<=800)&&(screen.width,!0)},loginClick:function(){this.$store.dispatch("login",{username:this.email,password:this.password})}}},A=O,y=(a("b76f"),a("8336")),x=a("a75b"),I=a("169a"),j=a("4bd4"),N=a("132d"),P=a("adda"),V=a("a797"),D=a("490a"),G=a("8654"),M=Object(c["a"])(A,w,k,!1,null,"4e832fe2",null),Q=M.exports;l()(M,{VBtn:y["a"],VCol:U["a"],VContent:x["a"],VDialog:I["a"],VForm:j["a"],VIcon:N["a"],VImg:P["a"],VOverlay:V["a"],VProgressCircular:D["a"],VRow:R["a"],VTextField:G["a"]});var F,B,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"nav"}},[a("Drawer")],1),a("v-content",[a("router-view")],1)],1)},q=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"white",flat:"",app:""}},[a("v-row",{staticClass:"ma-4"},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"float-left",attrs:{icon:"",dark:""},on:{click:function(e){t.drawer=!t.drawer}}},[a("v-avatar",{attrs:{color:"#71C9CE",rounded:"",size:"50"}},[a("v-icon",[t._v("mdi-menu")])],1)],1)],1)],1),a("v-spacer"),a("v-row",[a("v-col",{attrs:{cols:"6",sm:"2",md:"9"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!0}}},"v-btn",r,!1),n),[a("v-avatar",{attrs:{color:"#71C9CE",rounded:"",size:"50"}},[t._v(" US ")])],1)]}}])},[a("span",[t._v("Profile")])])],1),a("v-col",{attrs:{cols:"6",sm:"2",md:"2"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",dark:""},on:{click:t.onLogoutClicked}},"v-btn",r,!1),n),[a("v-avatar",{attrs:{color:"#71C9CE",rounded:"",size:"50"}},[a("v-icon",[t._v("mdi-logout")])],1)],1)]}}])},[a("span",[t._v("logout")])])],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",dark:"",color:"#71C9CE","mini-variant":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.menus,(function(e){return a("v-list-item",{key:e.tooltip,attrs:{link:"",to:{name:e.to}}},[a("v-list-item-icon",[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[a("v-icon",t._g(t._b({},"v-icon",o,!1),r),[t._v(t._s(e.icon))])]}}],null,!0)},[a("span",[t._v(t._s(e.tooltip))])])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},$=[],z=a("ade3");(function(t){t["LOGIN_REQUEST"]="LOGIN_REQUEST",t["LOGIN_SUCCESS"]="LOGIN_SUCCESS",t["LOGIN_FAILURE"]="LOGIN_FAILURE",t["LOGOUT_REQUEST"]="LOGOUT_REQUEST"})(B||(B={}));var J=(F={},Object(z["a"])(F,B.LOGIN_REQUEST,(function(t,e){t.isLoading=!0,t.isError=!1,t.isAuthenticated=!1,t.errMessage="Testing error message"})),Object(z["a"])(F,B.LOGIN_SUCCESS,(function(t,e){t.isLoading=!1,t.isAuthenticated=!0,t.isError=!1,t.errMessage="",t.auth=e.data})),Object(z["a"])(F,B.LOGIN_FAILURE,(function(t,e){t.isLoading=!1,t.isAuthenticated=!1,t.isError=!0,t.errMessage=e})),Object(z["a"])(F,B.LOGOUT_REQUEST,(function(t,e){t.isLoading=!1,t.isAuthenticated=!1,t.isError=!1,t.errMessage="",t.auth=void 0})),F),K={data:function(){return{menus:[{icon:"mdi-home",title:"Home",tooltip:"Home",to:"Home"},{icon:"mdi-view-dashboard",title:"Dashboard",tooltip:"Dashboard",to:"Dashboard"},{icon:"mdi-account",title:"User Management",tooltip:"User Management",to:"Users"},{icon:"mdi-source-branch",title:"Cabang",tooltip:"Branch",to:"Branches"},{icon:"mdi-warehouse",title:"Product",tooltip:"Product",to:"Products"}],drawer:!0}},methods:{onLogoutClicked:function(){console.log("logout clicked"),this.$store.commit(B.LOGOUT_REQUEST),this.$router.push({name:"Login"})}}},Y=K,X=a("40dc"),Z=a("8212"),tt=a("8860"),et=a("da13"),at=a("5d23"),nt=a("34c3"),rt=a("f774"),ot=a("2fa4"),it=a("3a2f"),st=Object(c["a"])(Y,H,$,!1,null,null,null),ct=st.exports;l()(st,{VAppBar:X["a"],VAvatar:Z["a"],VBtn:y["a"],VCol:U["a"],VIcon:N["a"],VList:tt["a"],VListItem:et["a"],VListItemContent:at["a"],VListItemIcon:nt["a"],VListItemTitle:at["b"],VNavigationDrawer:rt["a"],VRow:R["a"],VSpacer:ot["a"],VTooltip:it["a"]});var ut={components:{Drawer:ct}},lt=ut,dt=Object(c["a"])(lt,W,q,!1,null,null,null),mt=dt.exports;l()(dt,{VContent:x["a"]});var Et,vt,ft=a("0e44"),pt=a("1da1"),ht=(a("96cf"),a("bc3a")),gt=a.n(ht),_t=a("bd5e"),bt={login:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s,c,u,l,d,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=e.username,o=e.password,a.prev=2,n(B.LOGIN_REQUEST,"isLoading"),a.next=6,gt.a.post("".concat(_t["a"],"/auth/login"),{username:r,password:o});case 6:if(i=a.sent,console.log("response",i.data),!(i.data.status<=201&&i.data.data)){a.next=12;break}return n(B.LOGIN_SUCCESS,i.data),Nt.push({name:"Home"}),a.abrupt("return");case 12:throw i;case 15:a.prev=15,a.t0=a["catch"](2),n(B.LOGIN_FAILURE,null!==(s=null!==(c=null!==(u=null===a.t0||void 0===a.t0||null===(l=a.t0.data)||void 0===l?void 0:l.message)&&void 0!==u?u:null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.message)&&void 0!==c?c:a.t0.message)&&void 0!==s?s:"Terjadi Kesalahan");case 18:case"end":return a.stop()}}),a,null,[[2,15]])})))()}},St={getAccessToken:function(t){var e,a;return null!==(e=null===(a=t.auth)||void 0===a?void 0:a.accessToken)&&void 0!==e?e:""},isAuthenticated:function(t){return t.isAuthenticated}},Ut={isAuthenticated:!1,isLoading:!1,isError:!1,errMessage:""},Ct={state:Ut,actions:bt,mutations:J,getters:St},Rt=a("15fd");a("25f0");(function(t){t["GET_USER_LIST_REQUEST"]="GET_USER_LIST_REQUEST",t["GET_USER_LIST_SUCCESS"]="GET_USER_LIST_SUCCESS",t["GET_USER_LIST_FAILURE"]="GET_USER_LIST_FAILURE",t["CREATE_NEW_USER_REQUEST"]="CREATE_NEW_USER_REQUEST",t["CREATE_NEW_USER_SUCCESS"]="CREATE_NEW_USER_SUCCESS",t["CREATE_NEW_USER_FAILURE"]="CREATE_NEW_USER_FAILURE",t["UPDATE_ONE_USER_REQUEST"]="UPDATE_ONE_USER_REQUEST",t["UPDATE_ONE_USER_SUCCESS"]="UPDATE_ONE_USER_SUCCESS",t["UPDATE_ONE_USER_FAILURE"]="UPDATE_ONE_USER_FAILURE"})(vt||(vt={}));var Tt=(Et={},Object(z["a"])(Et,vt.GET_USER_LIST_REQUEST,(function(t,e){t.isLoading=!0,t.isError=!1,t.errMessage=""})),Object(z["a"])(Et,vt.GET_USER_LIST_SUCCESS,(function(t,e){t.isLoading=!1,t.isError=!1,t.errMessage="",t.users=e})),Object(z["a"])(Et,vt.GET_USER_LIST_FAILURE,(function(t,e){t.isLoading=!1,t.isError=!0,t.errMessage=e})),Object(z["a"])(Et,vt.CREATE_NEW_USER_REQUEST,(function(t,e){t.isLoading=!0,t.isError=!1,t.errMessage=""})),Object(z["a"])(Et,vt.CREATE_NEW_USER_SUCCESS,(function(t,e){t.isLoading=!1,t.isError=!1,t.errMessage="";var a=t.users;a.push(e),t.users=a})),Object(z["a"])(Et,vt.UPDATE_ONE_USER_FAILURE,(function(t,e){t.isLoading=!1,t.isError=!0,t.errMessage=e})),Object(z["a"])(Et,vt.UPDATE_ONE_USER_REQUEST,(function(t,e){t.isLoading=!0,t.isError=!1,t.errMessage=""})),Object(z["a"])(Et,vt.UPDATE_ONE_USER_SUCCESS,(function(t,e){t.isLoading=!1,t.isError=!1,t.errMessage="";var a=t.users;a.push(e),t.users=a})),Object(z["a"])(Et,vt.CREATE_NEW_USER_FAILURE,(function(t,e){t.isLoading=!1,t.isError=!0,t.errMessage=e})),Et),Lt=["id"],wt={getUserList:function(t){return Object(pt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,a(vt.GET_USER_LIST_REQUEST),e.next=5,gt.a.get(_t["a"]+"/user",{params:{limit:25}});case 5:if(n=e.sent,!(n.status<201)){e.next=10;break}if(!(n.data.data.length>0)){e.next=10;break}return a(vt.GET_USER_LIST_SUCCESS,n.data.data),e.abrupt("return");case 10:throw n;case 13:e.prev=13,e.t0=e["catch"](1),a(vt.GET_USER_LIST_FAILURE,e.t0.toString()),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()},addNewUser:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=t.rootState,o=t.dispatch,a.prev=1,n(vt.CREATE_NEW_USER_REQUEST),a.next=5,gt.a.post(_t["a"]+"/user/create",e,{headers:{Authorization:"Bearer ".concat(null!==(i=null===(s=r.auth.auth)||void 0===s?void 0:s.accessToken)&&void 0!==i?i:"")}});case 5:if(c=a.sent,!(c.status<=201)){a.next=10;break}return n(vt.CREATE_NEW_USER_SUCCESS,c.data.data),o("getUserList"),a.abrupt("return");case 10:throw c;case 13:a.prev=13,a.t0=a["catch"](1),n(vt.CREATE_NEW_USER_FAILURE,a.t0.toString());case 16:case"end":return a.stop()}}),a,null,[[1,13]])})))()},editOneUser:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s,c,u,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=t.rootState,o=t.dispatch,a.prev=1,c=e.id,u=Object(Rt["a"])(e,Lt),n(vt.UPDATE_ONE_USER_REQUEST),a.next=6,gt.a.put(_t["a"]+"/user/update/"+c,u,{headers:{Authorization:"Bearer ".concat(null!==(i=null===(s=r.auth.auth)||void 0===s?void 0:s.accessToken)&&void 0!==i?i:"")}});case 6:if(l=a.sent,!(l.status<=201)){a.next=11;break}return n(vt.UPDATE_ONE_USER_SUCCESS,l.data.data),o("getUserList"),a.abrupt("return");case 11:throw l;case 14:a.prev=14,a.t0=a["catch"](1),n(vt.UPDATE_ONE_USER_FAILURE,a.t0.toString());case 17:case"end":return a.stop()}}),a,null,[[1,14]])})))()}},kt={getUserInfo:function(t){return"hello user info"}},Ot={isLoading:!1,isError:!1,errMessage:"",users:[]},At={state:Ot,actions:wt,mutations:Tt,getters:kt};n["a"].use(g["b"]);var yt={modules:{user:At,auth:Ct},plugins:[Object(g["a"])(),Object(ft["a"])({paths:["auth"]})]},xt=new g["b"].Store(yt);n["a"].use(v["a"]);var It=[{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:Q,meta:{title:"Login"}},{path:"/",name:"Layout",meta:{},component:mt,children:[{path:"home",name:"Home",component:L,meta:{title:"Home",requiredAuthentication:!0}},{path:"dashboard",name:"Dashboard",component:function(){return a.e("chunk-dba5d85a").then(a.bind(null,"4e98"))},meta:{title:"Dashboard",requiredAuthentication:!0}},{path:"users",name:"Users",component:function(){return Promise.all([a.e("chunk-0e96da57"),a.e("chunk-ef9e8d1c")]).then(a.bind(null,"1587"))},meta:{title:"Management Users",requiredAuthentication:!0}},{path:"cabang",name:"Branches",component:function(){return Promise.all([a.e("chunk-0e96da57"),a.e("chunk-1ad43f71")]).then(a.bind(null,"e2b5"))},meta:{title:"Cabang List",requiredAuthentication:!0}},{path:"cabang/detail",name:"BranchesDetail",component:function(){return a.e("chunk-2d23797d").then(a.bind(null,"fc7a"))},meta:{title:"Detail Cabang",requiredAuthentication:!0}},{path:"products",name:"Products",component:function(){return Promise.all([a.e("chunk-0e96da57"),a.e("chunk-12ff7088")]).then(a.bind(null,"27e8"))},meta:{title:"Product List",requiredAuthentication:!0}}]}],jt=new v["a"]({mode:"history",base:"/",routes:It});jt.beforeEach((function(t,e,a){if(document.title="CAYN",console.log(xt.state.auth),console.log("auth getters",xt.getters.isAuthenticated),t.matched.some((function(t){return t.meta.requiredAuthentication}))){if(xt.getters.isAuthenticated)return void a();a("/login")}else a()}));var Nt=jt,Pt=a("f309");n["a"].use(Pt["a"]);var Vt=new Pt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Nt,store:xt,vuetify:Vt,render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.dd2a62f7.js.map