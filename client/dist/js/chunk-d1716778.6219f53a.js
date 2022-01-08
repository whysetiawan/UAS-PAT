(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1716778"],{"0e01":function(t,e,a){},1587:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-content",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"my-8 title-text"},[t._v("Management Users")])]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"float-right my-8 title-text"},[a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",dark:""}},"v-btn",i,!1),s),[a("v-avatar",{attrs:{color:"#71C9CE",circle:"",size:"50"}},[a("v-icon",[t._v("mdi-plus")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"title-dialog ml-3"},[t._v("Add User")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{id:"terms",outline:"",label:"Full Name",outlined:""},model:{value:t.editedDatas.fullName,callback:function(e){t.$set(t.editedDatas,"fullName",e)},expression:"editedDatas.fullName"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{id:"terms",label:"Username",outlined:""},model:{value:t.editedDatas.username,callback:function(e){t.$set(t.editedDatas,"username",e)},expression:"editedDatas.username"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{id:"terms",items:t.roles,label:"Role",outlined:""},model:{value:t.editedDatas.role,callback:function(e){t.$set(t.editedDatas,"role",e)},expression:"editedDatas.role"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{id:"terms",items:t.status,label:"Status",outlined:""},model:{value:t.editedDatas.status,callback:function(e){t.$set(t.editedDatas,"status",e)},expression:"editedDatas.status"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.deleteItemConfirm}},[t._v("Delete")]),a("v-spacer")],1)],1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datas,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.role",fn:function(e){var s=e.item;return[a("v-chip",{staticClass:"mx-1",attrs:{multiple:"",color:"#71c9ce","text-color":"white"}},[t._v(" "+t._s(s.role)+" ")])]}},{key:"item.action",fn:function(e){var s=e.item;return[a("v-row",[a("v-btn",{attrs:{icon:"",color:"#71c9ce",dark:""},on:{click:function(e){return t.editItem(s)}}},[a("v-icon",[t._v("mdi-account-edit")])],1),a("v-btn",{attrs:{icon:"",color:"#71c9ce",dark:""}},[a("v-icon",{on:{click:function(e){return t.deleteItem(s)}}},[t._v("mdi-trash-can")])],1)],1)]}}])}),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{circle:"",length:t.pageCount,color:"#71c9ce"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])],1)],1)],1)},i=[],l=(a("a434"),{data:function(){return{terms:!1,dialog:!1,dialogDelete:!1,page:1,pageCount:0,itemsPerPage:10,roles:[1,2,3],status:["ACTIVE","INACTIVE","BLOCKED"],headers:[{text:"Name",align:"start",value:"fullName"},{text:"Username",value:"username"},{text:"Role",value:"role"},{text:"Status",value:"status"},{text:"Action",value:"action",sortable:!1}],datas:[],editedIndex:-1,editedDatas:{name:"",email:"",role:"",status:""},defaultDatas:{name:"",email:"",role:"",status:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User"},isDisabled:function(){return!this.terms}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.datas=[]},editItem:function(t){this.editedIndex=this.datas.indexOf(t),this.editedDatas=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.datas.indexOf(t),this.editeddatas=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.datas.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedDatas=Object.assign({},t.defaultDatas),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.datas[this.editedIndex],this.editedDatas):this.datas.push(this.editedDatas),this.close()}}}),n=l,o=(a("b996"),a("2877")),c=a("6544"),d=a.n(c),r=a("8212"),u=a("8336"),v=a("b0af"),m=a("99d9"),f=a("cc20"),h=a("62ad"),g=a("a523"),p=a("a75b"),x=a("8fea"),b=a("169a"),D=a("132d"),C=a("891e"),k=a("0fd9"),I=a("b974"),V=a("2fa4"),_=a("8654"),w=Object(o["a"])(n,s,i,!1,null,"fade7726",null);e["default"]=w.exports;d()(w,{VAvatar:r["a"],VBtn:u["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:f["a"],VCol:h["a"],VContainer:g["a"],VContent:p["a"],VDataTable:x["a"],VDialog:b["a"],VIcon:D["a"],VPagination:C["a"],VRow:k["a"],VSelect:I["a"],VSpacer:V["a"],VTextField:_["a"]})},b996:function(t,e,a){"use strict";a("0e01")}}]);
//# sourceMappingURL=chunk-d1716778.6219f53a.js.map