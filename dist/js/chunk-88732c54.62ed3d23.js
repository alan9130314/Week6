(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88732c54"],{"13d5":function(t,a,s){"use strict";var e=s("23e7"),i=s("d58f").left,c=s("a640"),o=s("ae40"),r=c("reduce"),n=o("reduce",{1:0});e({target:"Array",proto:!0,forced:!r||!n},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1799:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,e){return s("li",{key:e,staticClass:"page-item",class:{active:a===t.pages.current_page}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),s("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],c={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},o=c,r=(s("5eaf"),s("2877")),n=Object(r["a"])(o,e,i,!1,null,null,null);a["a"]=n.exports},"2aa4":function(t,a,s){},"5eaf":function(t,a,s){"use strict";var e=s("2aa4"),i=s.n(e);i.a},"81b1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[s("div",{staticClass:"d-flex mb-3"},[s("div",{staticClass:"col-2"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":""},on:{click:function(a){return t.getProducts(1,"")}}},[t._v("全部("+t._s(this.totalProducts)+")")]),s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":"麵包/點心"},on:{click:function(a){return t.getProducts(1,"麵包/點心")}}},[t._v("麵包/點心("+t._s(this.totalBreadProducts)+")")]),s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":"咖啡"},on:{click:function(a){return t.getProducts(1,"咖啡")}}},[t._v("咖啡("+t._s(this.totalCoffeeProducts)+")")]),s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":"茶"},on:{click:function(a){return t.getProducts(1,"茶")}}},[t._v("茶("+t._s(this.totalTeaProducts)+")")]),s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":"茶那堤"},on:{click:function(a){return t.getProducts(1,"茶那堤")}}},[t._v("茶那堤("+t._s(this.totalCTProducts)+")")]),s("li",{staticClass:"list-group-item filter",attrs:{"data-filter":"特調"},on:{click:function(a){return t.getProducts(1,"特調")}}},[t._v("特調("+t._s(this.totalSPProducts)+")")])])]),s("div",{staticClass:"col-10"},[s("div",{staticClass:"row"},t._l(t.products,(function(a){return s("div",{key:a.id,staticClass:"col-3 col-md-3"},[s("div",{staticClass:"card mb-4 position-relative position-relative"},[s("div",{staticClass:"card-mask"},[s("img",{staticClass:"card-img-top rounded",attrs:{src:a.imageUrl[0],alt:"..."}})]),s("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("div",{staticClass:"position-absolute",staticStyle:{right:"16px",top:"16px"}},[s("span",{staticClass:"badge badge-light float-right ml-2",attrs:{"data-filter":a.category},on:{click:function(s){return t.getProducts(1,a.category)}}},[t._v(t._s(a.category))])])]),s("div",{staticClass:"card-body p-0"},[s("h4",{staticClass:"mb-0 mt-3"},[s("router-link",{attrs:{to:"/product/"+a.id}},[t._v(t._s(a.title))])],1),s("del",{staticClass:"text-muted mt-3"},[t._v("NT$ "+t._s(a.origin_price))]),s("p",{staticClass:"text-muted mt-3 h4 font-weight-bold"},[t._v("NT$ "+t._s(a.price))]),s("button",{staticClass:"btn btn-outline-danger btn-sm w-100",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(s){return t.addtoCart(a)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 加到購物車 ")])])])])})),0)])]),s("nav",{staticClass:"d-flex justify-content-center"},[t.filterFlag?t._e():s("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProducts}})],1)])],1)},i=[],c=(s("99af"),s("4de4"),s("4160"),s("13d5"),s("159b"),s("1799")),o={name:"Products",components:{Pagination:c["a"]},data:function(){return{products:[],pagination:{},status:{loadingItem:""},totalProducts:0,totalBreadProducts:0,totalCoffeeProducts:0,totalTeaProducts:0,totalCTProducts:0,totalSPProducts:0,filterFlag:!1,tmpPaged:8}},methods:{goPage:function(t){console.log(this.$router),this.$router.push("/product/".concat(t.id))},getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.isLoading=!0;var e="";this.filterFlag=""!==s,e=this.filterFlag?"".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?paged=").concat(this.totalProducts,"&orderBy=category&sort=desc"):"".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?page=").concat(a,"&paged=12&orderBy=category&sort=desc"),this.$http.get(e).then((function(a){t.products=""!==s?a.data.data.filter((function(t){return t.category===s})):t.products=a.data.data,$(".filter").removeClass("active"),$("[data-filter='".concat(s,"']")).addClass("active"),t.pagination=a.data.meta.pagination,t.isLoading=!1}))},addtoCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/shopping"),i={product:t.id,quantity:s};this.$http.post(e,i).then((function(){a.status.loadingItem="",a.$bus.$emit("get-cart"),a.$bus.$emit("message:push","加入成功","success"),a.getCart()})).catch((function(t){a.status.loadingItem="";var s=t.response.data.errors;s.forEach((function(t){a.$bus.$emit("message:push","加入失敗\n            ".concat(t),"danger")}))}))},getCart:function(){var t=this;this.cartTotal=0,this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity}))})),this.isLoading=!1},getCategory:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?paged=").concat(this.totalProducts,"&orderBy=category&sort=desc");this.$http.get(a).then((function(a){var s=a.data.data.reduce((function(t,a){return a.category in t?t[a.category]++:t[a.category]=1,t}),{});t.totalBreadProducts=s["麵包/點心"],t.totalCoffeeProducts=s["咖啡"],t.totalTeaProducts=s["茶"],t.totalCTProducts=s["茶那堤"],t.totalSPProducts=s["特調"]}))}},created:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/ec/products?");this.$http.get(a).then((function(a){t.totalProducts=a.data.meta.pagination.total,t.getCategory(),t.getProducts(1)}))},mounted:function(){}},r=o,n=(s("b60a"),s("2877")),l=Object(n["a"])(r,e,i,!1,null,null,null);a["default"]=l.exports},b60a:function(t,a,s){"use strict";var e=s("bdc6"),i=s.n(e);i.a},bdc6:function(t,a,s){},d58f:function(t,a,s){var e=s("1c0b"),i=s("7b0b"),c=s("44ad"),o=s("50c4"),r=function(t){return function(a,s,r,n){e(s);var l=i(a),u=c(l),d=o(l.length),g=t?d-1:0,f=t?-1:1;if(r<2)while(1){if(g in u){n=u[g],g+=f;break}if(g+=f,t?g<0:d<=g)throw TypeError("Reduce of empty array with no initial value")}for(;t?g>=0:d>g;g+=f)g in u&&(n=s(n,u[g],g,l));return n}};t.exports={left:r(!1),right:r(!0)}}}]);
//# sourceMappingURL=chunk-88732c54.62ed3d23.js.map