(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a40a9"],{"056d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"my-5 row no-gutters justify-content-center"},[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),e("div",{staticClass:"col-12"},[e("table",{staticClass:"table mt-4"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(s,a){return e("tr",{key:a,class:{"text-secondary":!s.is_paid}},[e("td",[t._v(t._s(s.created.datetime))]),e("td",[t._v(" "+t._s(s.payment)+" ")]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(s.products,(function(s,a){return e("li",{key:a},[t._v(" "+t._s(s.product.title)+" 數量："+t._s(s.quantity)+" "+t._s(s.product.unit)+" ")])})),0)]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(s.amount)+" ")]),e("td",[s.paid?e("strong",{staticClass:"text-success"},[t._v(" 已付款 ")]):e("span",{staticClass:"text-muted"},[t._v(" 未付款 ")])]),e("td",[e("div",{staticClass:"btn-group btn-group-sm"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:s.paid},on:{click:function(e){return e.preventDefault(),t.getDetailed(s.id)}}},[t._v(" 選擇 ")])])])])})),0):t._e()])]),e("hr",{staticClass:"w-100"}),e("form",{staticClass:"col-6",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.order.products,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"align-middle"},[t._v(" "+t._s(s.product.title)+" ")]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(s.quantity)+"/"+t._s(s.product.unit)+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("round")(s.product.price))+" ")])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(" 總計 ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t.order.amount)+" ")])])])]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v(" Email ")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])]),!1===t.order.paid?e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-danger"},[t._v(" 確認付款去 ")])]):t._e()])],1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("購買時間")]),e("th",[t._v("購買方式")]),e("th",[t._v("商品列表")]),e("th",[t._v("應付金額")]),e("th",[t._v("付款狀態")]),e("th",[t._v("編輯")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])}],r=(e("99af"),{name:"CustomerCheckout",data:function(){return{order:{user:{}},orders:[],orderId:"",uuid:"69d7fd56-1f0f-42c9-b209-51c359d76a0b",isLoading:!1}},created:function(){this.orderId=this.$route.params.orderId,this.orderId&&this.getDetailed(this.orderId),this.getOrders()},methods:{getOrders:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/ec/orders?page=").concat(s);this.isLoading=!0,this.$http.get(e).then((function(s){t.orders=s.data.data,t.isLoading=!1}))},getDetailed:function(t){var s=this;this.isLoading=!0,this.orderId=t;var e="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/ec/orders/").concat(t);this.$http.get(e).then((function(t){s.order=t.data.data,s.isLoading=!1}))},payOrder:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","/api/").concat(this.uuid,"/ec/orders/").concat(this.orderId,"/paying");this.$http.post(s).then((function(s){s.data.data.paid&&t.getDetailed(t.orderId),t.isLoading=!1}))}}}),d=r,n=e("2877"),o=Object(n["a"])(d,a,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0a40a9.1993d59c.js.map