(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542f769e"],{"294f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"Login"}},[a("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" 後台管理系統 ")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-dark btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),a("br"),a("button",{staticClass:"btn btn-dark btn-block",attrs:{type:"button"},on:{click:t.signout}},[t._v(" 登出 ")]),a("br"),a("button",{staticClass:"btn btn-dark btn-block",attrs:{type:"button"},on:{click:t.getData}},[t._v(" 取得資料 ")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v(" © 2021~∞ - 咖啡廚房 ")])])])},o=[],n=(a("99af"),a("ac1f"),a("5319"),{name:"Login",data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.$http.post(s,this.user).then((function(s){var a=s.data.token,e=s.data.expired;document.cookie="hexToken=".concat(a,";expires=").concat(new Date(1e3*e),";"),t.$router.push("/admin/products")})).catch((function(s){console.log(s),t.$bus.$emit("message:push",s,"danger")}))},signout:function(){document.cookie="hexToken=;expires=;",console.log("token 已清除")},getData:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("69d7fd56-1f0f-42c9-b209-51c359d76a0b","/admin/ec/products");this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.get(s).then((function(s){t.products=s.data.data,t.pagination=s.data.meta.pagination}))}}}),i=n,r=(a("4600"),a("2877")),c=Object(r["a"])(i,e,o,!1,null,null,null);s["default"]=c.exports},4600:function(t,s,a){"use strict";var e=a("ae10"),o=a.n(e);o.a},ae10:function(t,s,a){}}]);
//# sourceMappingURL=chunk-542f769e.6704bd6b.js.map