(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dianyuan/add-or-update"],{"046f":function(e,n,r){"use strict";r.r(n);var t=r("fe06"),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=a.a},"20cf":function(e,n,r){"use strict";(function(e){r("3701");t(r("66fd"));var n=t(r("25af"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"25af":function(e,n,r){"use strict";r.r(n);var t=r("68d7"),a=r("046f");for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);r("651d");var u,o=r("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"07e2fef4",null,!1,t["a"],u);n["default"]=s.exports},"456a":function(e,n,r){},"651d":function(e,n,r){"use strict";var t=r("456a"),a=r.n(t);a.a},"68d7":function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},fe06:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,t,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var u=e.apply(n,r);function o(e){i(u,t,a,o,s,"next",e)}function s(e){i(u,t,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b18e"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{gonghao:"",mima:"",yuangongxingming:"",xingbie:"",youxiang:"",lianxishouji:"",xiangpian:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{gonghao:!1,mima:!1,yuangongxingming:!1,xingbie:!1,youxiang:!1,lianxishouji:!1,xiangpian:!1,money:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function a(){var i,u,o,s;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,r.$api.session(i);case 3:if(u=a.sent,r.user=u.data,r.xingbieOptions="男,女".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return r.ruleForm.id=n.id,a.next=12,r.$api.info("dianyuan",r.ruleForm.id);case 12:u=a.sent,r.ruleForm=u.data;case 14:if(r.cross=n.cross,!n.cross){a.next=54;break}o=e.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=54;break}if(s=a.t1.value,"gonghao"!=s){a.next=24;break}return r.ruleForm.gonghao=o[s],r.ro.gonghao=!0,a.abrupt("continue",18);case 24:if("mima"!=s){a.next=28;break}return r.ruleForm.mima=o[s],r.ro.mima=!0,a.abrupt("continue",18);case 28:if("yuangongxingming"!=s){a.next=32;break}return r.ruleForm.yuangongxingming=o[s],r.ro.yuangongxingming=!0,a.abrupt("continue",18);case 32:if("xingbie"!=s){a.next=36;break}return r.ruleForm.xingbie=o[s],r.ro.xingbie=!0,a.abrupt("continue",18);case 36:if("youxiang"!=s){a.next=40;break}return r.ruleForm.youxiang=o[s],r.ro.youxiang=!0,a.abrupt("continue",18);case 40:if("lianxishouji"!=s){a.next=44;break}return r.ruleForm.lianxishouji=o[s],r.ro.lianxishouji=!0,a.abrupt("continue",18);case 44:if("xiangpian"!=s){a.next=48;break}return r.ruleForm.xiangpian=o[s],r.ro.xiangpian=!0,a.abrupt("continue",18);case 48:if("money"!=s){a.next=52;break}return r.ruleForm.money=o[s],r.ro.money=!0,a.abrupt("continue",18);case 52:a.next=18;break;case 54:r.styleChange();case 55:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xiangpianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangpian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var a,i,u,o,s,c,l,g,f,m;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.gonghao){r.next=3;break}return n.$utils.msg("工号不能为空"),r.abrupt("return");case 3:if(n.ruleForm.mima){r.next=6;break}return n.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(n.ruleForm.yuangongxingming){r.next=9;break}return n.$utils.msg("员工姓名不能为空"),r.abrupt("return");case 9:if(!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){r.next=12;break}return n.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 12:if(!n.ruleForm.lianxishouji||n.$validate.isMobile(n.ruleForm.lianxishouji)){r.next=15;break}return n.$utils.msg("联系手机应输入手机格式"),r.abrupt("return");case 15:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){r.next=18;break}return n.$utils.msg("余额应输入数字"),r.abrupt("return");case 18:if(!n.cross){r.next=34;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=34;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=30;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),r.next=28,n.$api.update("".concat(g),c);case 28:r.next=34;break;case 30:a=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!i||!a){r.next=56;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=40,n.$api.list("dianyuan",f);case 40:if(m=r.sent,!(m.data.total>=u)){r.next=46;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 46:if(!n.ruleForm.id){r.next=51;break}return r.next=49,n.$api.update("dianyuan",n.ruleForm);case 49:r.next=53;break;case 51:return r.next=53,n.$api.add("dianyuan",n.ruleForm);case 53:n.$utils.msgBack("提交成功");case 54:r.next=64;break;case 56:if(!n.ruleForm.id){r.next=61;break}return r.next=59,n.$api.update("dianyuan",n.ruleForm);case 59:r.next=63;break;case 61:return r.next=63,n.$api.add("dianyuan",n.ruleForm);case 63:n.$utils.msgBack("提交成功");case 64:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])}},[["20cf","common/runtime","common/vendor"]]]);