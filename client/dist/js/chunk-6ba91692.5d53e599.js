(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ba91692"],{"268a":function(t,e,a){},"27e8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-content",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"my-8 title-text"},[t._v("Product List")])]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"float-right my-8 title-text"},[a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"float-right",attrs:{icon:"",dark:""}},"v-btn",s,!1),i),[a("v-avatar",{attrs:{color:"#71C9CE",circle:"",size:"50"}},[a("v-icon",[t._v("mdi-plus")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"title-dialog ml-3"},[t._v("Add Product")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{id:"terms",outline:"",label:"Product Name",outlined:""},model:{value:t.editedDatas.productName,callback:function(e){t.$set(t.editedDatas,"productName",e)},expression:"editedDatas.productName"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{id:"terms",label:"Price",prefix:"Rp.",outlined:""},model:{value:t.editedDatas.price,callback:function(e){t.$set(t.editedDatas,"price",e)},expression:"editedDatas.price"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{id:"terms",label:"Store ID",prefix:"ID.",outlined:""},model:{value:t.editedDatas.storeID,callback:function(e){t.$set(t.editedDatas,"storeID",e)},expression:"editedDatas.storeID"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"#71c9ce",text:""},on:{click:t.deleteItemConfirm}},[t._v("Delete")]),a("v-spacer")],1)],1)],1)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datas,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.role",fn:function(e){var i=e.item;return[a("v-chip",{staticClass:"mx-1",attrs:{multiple:"",color:"#71c9ce","text-color":"white"}},[t._v(" "+t._s(i.role)+" ")])]}},{key:"item.action",fn:function(e){var i=e.item;return[a("v-row",[a("v-btn",{attrs:{icon:"",color:"#71c9ce",dark:""},on:{click:function(e){return t.editItem(i)}}},[a("v-icon",[t._v("mdi-account-edit")])],1),a("v-btn",{attrs:{icon:"",color:"#71c9ce",dark:""}},[a("v-icon",{on:{click:function(e){return t.deleteItem(i)}}},[t._v("mdi-trash-can")])],1)],1)]}}])}),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{circle:"",length:t.pageCount,color:"#71c9ce"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])],1)],1)],1)},s=[],c=(a("a434"),{data:function(){return{terms:!1,dialog:!1,dialogDelete:!1,page:1,pageCount:0,itemsPerPage:10,roles:[1,2,3],status:["ACTIVE","INACTIVE","BLOCKED"],headers:[{text:"Product Name",align:"start",value:"productName"},{text:"Price",value:"price"},{text:"Store ID",value:"storeID"},{text:"Action",value:"action",sortable:!1}],datas:[],editedIndex:-1,editedDatas:{name:"",email:"",role:"",status:""},defaultDatas:{name:"",email:"",role:"",status:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Product":"Edit Product"},isDisabled:function(){return!this.terms}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.datas=[]},editItem:function(t){this.editedIndex=this.datas.indexOf(t),this.editedDatas=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.datas.indexOf(t),this.editeddatas=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.datas.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedDatas=Object.assign({},t.defaultDatas),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.datas[this.editedIndex],this.editedDatas):this.datas.push(this.editedDatas),this.close()}}}),o=c,n=(a("d832"),a("2877")),d=a("6544"),l=a.n(d),r=a("8212"),u=a("8336"),v=a("b0af"),m=a("99d9"),f=a("cc20"),p=a("62ad"),h=a("a523"),x=a("a75b"),g=a("8fea"),D=a("169a"),b=a("132d"),C=a("891e"),I=a("0fd9"),k=a("2fa4"),V=a("8654"),_=Object(n["a"])(o,i,s,!1,null,"2bfc2054",null);e["default"]=_.exports;l()(_,{VAvatar:r["a"],VBtn:u["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VChip:f["a"],VCol:p["a"],VContainer:h["a"],VContent:x["a"],VDataTable:g["a"],VDialog:D["a"],VIcon:b["a"],VPagination:C["a"],VRow:I["a"],VSpacer:k["a"],VTextField:V["a"]})},d832:function(t,e,a){"use strict";a("268a")}}]);
//# sourceMappingURL=chunk-6ba91692.5d53e599.js.map