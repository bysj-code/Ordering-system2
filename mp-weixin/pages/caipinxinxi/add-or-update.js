(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinxinxi/add-or-update"],{"432f":function(e,i,n){"use strict";n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b18e"))}},r=function(){var e=this,i=e.$createElement;e._self._c},a=[]},7068:function(e,i,n){"use strict";n.r(i);var t=n("432f"),r=n("b43a");for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);n("e95f");var u,c=n("f0c5"),o=Object(c["a"])(r["default"],t["b"],t["c"],!1,null,"2c7a6757",null,!1,t["a"],u);i["default"]=o.exports},"759d":function(e,i,n){"use strict";(function(e){n("3701");t(n("66fd"));var i=t(n("7068"));function t(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,n("543d")["createPage"])},"77c0":function(e,i,n){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,i,n,t,r,a,u){try{var c=e[a](u),o=c.value}catch(s){return void n(s)}c.done?i(o):Promise.resolve(o).then(t,r)}function u(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var u=e.apply(i,n);function c(e){a(u,t,r,c,o,"next",e)}function o(e){a(u,t,r,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("b18e"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{cross:"",ruleForm:{caipinmingcheng:"",caipintupian:"",caipinfenlei:"",kouwei:"",yuancailiao:"",caipinjianjie:"",caipinxiangqing:"",faburiqi:"",price:"",onelimittimes:"",alllimittimes:""},caipinfenleiOptions:[],caipinfenleiIndex:0,user:{},ro:{caipinmingcheng:!1,caipintupian:!1,caipinfenlei:!1,kouwei:!1,yuancailiao:!1,caipinjianjie:!1,caipinxiangqing:!1,faburiqi:!1,clicktime:!1,clicknum:!1,price:!1,onelimittimes:!1,alllimittimes:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(i){var n=this;return u(t.default.mark((function r(){var a,u,c,o;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.ruleForm.faburiqi=n.$utils.getCurDate(),a=e.getStorageSync("nowTable"),r.next=4,n.$api.session(a);case 4:return u=r.sent,n.user=u.data,r.next=8,n.$api.option("caipinfenlei","caipinfenlei",{});case 8:if(u=r.sent,n.caipinfenleiOptions=u.data,n.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(n.ruleForm.refid=i.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){r.next=18;break}return n.ruleForm.id=i.id,r.next=16,n.$api.info("caipinxinxi",n.ruleForm.id);case 16:u=r.sent,n.ruleForm=u.data;case 18:if(n.cross=i.cross,!i.cross){r.next=78;break}c=e.getStorageSync("crossObj"),r.t0=t.default.keys(c);case 22:if((r.t1=r.t0()).done){r.next=78;break}if(o=r.t1.value,"caipinmingcheng"!=o){r.next=28;break}return n.ruleForm.caipinmingcheng=c[o],n.ro.caipinmingcheng=!0,r.abrupt("continue",22);case 28:if("caipintupian"!=o){r.next=32;break}return n.ruleForm.caipintupian=c[o],n.ro.caipintupian=!0,r.abrupt("continue",22);case 32:if("caipinfenlei"!=o){r.next=36;break}return n.ruleForm.caipinfenlei=c[o],n.ro.caipinfenlei=!0,r.abrupt("continue",22);case 36:if("kouwei"!=o){r.next=40;break}return n.ruleForm.kouwei=c[o],n.ro.kouwei=!0,r.abrupt("continue",22);case 40:if("yuancailiao"!=o){r.next=44;break}return n.ruleForm.yuancailiao=c[o],n.ro.yuancailiao=!0,r.abrupt("continue",22);case 44:if("caipinjianjie"!=o){r.next=48;break}return n.ruleForm.caipinjianjie=c[o],n.ro.caipinjianjie=!0,r.abrupt("continue",22);case 48:if("caipinxiangqing"!=o){r.next=52;break}return n.ruleForm.caipinxiangqing=c[o],n.ro.caipinxiangqing=!0,r.abrupt("continue",22);case 52:if("faburiqi"!=o){r.next=56;break}return n.ruleForm.faburiqi=c[o],n.ro.faburiqi=!0,r.abrupt("continue",22);case 56:if("clicktime"!=o){r.next=60;break}return n.ruleForm.clicktime=c[o],n.ro.clicktime=!0,r.abrupt("continue",22);case 60:if("clicknum"!=o){r.next=64;break}return n.ruleForm.clicknum=c[o],n.ro.clicknum=!0,r.abrupt("continue",22);case 64:if("price"!=o){r.next=68;break}return n.ruleForm.price=c[o],n.ro.price=!0,r.abrupt("continue",22);case 68:if("onelimittimes"!=o){r.next=72;break}return n.ruleForm.onelimittimes=c[o],n.ro.onelimittimes=!0,r.abrupt("continue",22);case 72:if("alllimittimes"!=o){r.next=76;break}return n.ruleForm.alllimittimes=c[o],n.ro.alllimittimes=!0,r.abrupt("continue",22);case 76:r.next=22;break;case 78:n.styleChange();case 79:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},caipinfenleiChange:function(e){this.caipinfenleiIndex=e.target.value,this.ruleForm.caipinfenlei=this.caipinfenleiOptions[this.caipinfenleiIndex]},caipintupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.caipintupian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=this;return u(t.default.mark((function n(){var r,a,u,c,o,s,l,f,m,p;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i.ruleForm.caipinmingcheng){n.next=3;break}return i.$utils.msg("菜品名称不能为空"),n.abrupt("return");case 3:if(i.ruleForm.caipinfenlei){n.next=6;break}return i.$utils.msg("菜品分类不能为空"),n.abrupt("return");case 6:if(!i.ruleForm.clicknum||i.$validate.isIntNumer(i.ruleForm.clicknum)){n.next=9;break}return i.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 9:if(!i.ruleForm.price||i.$validate.isNumber(i.ruleForm.price)){n.next=12;break}return i.$utils.msg("价格应输入数字"),n.abrupt("return");case 12:if(!i.ruleForm.onelimittimes||i.$validate.isIntNumer(i.ruleForm.onelimittimes)){n.next=15;break}return i.$utils.msg("单限应输入整数"),n.abrupt("return");case 15:if(!i.ruleForm.alllimittimes||i.$validate.isIntNumer(i.ruleForm.alllimittimes)){n.next=18;break}return i.$utils.msg("库存应输入整数"),n.abrupt("return");case 18:if(!i.cross){n.next=34;break}if(c=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==c){n.next=34;break}if(s=e.getStorageSync("crossObj"),c.startsWith("[")){n.next=30;break}for(l in s)l==c&&(s[l]=o);return f=e.getStorageSync("crossTable"),n.next=28,i.$api.update("".concat(f),s);case 28:n.next=34;break;case 30:r=Number(e.getStorageSync("userid")),a=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!a||!r){n.next=56;break}return i.ruleForm.crossuserid=r,i.ruleForm.crossrefid=a,m={page:1,limit:10,crossuserid:r,crossrefid:a},n.next=40,i.$api.list("caipinxinxi",m);case 40:if(p=n.sent,!(p.data.total>=u)){n.next=46;break}return i.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 46:if(!i.ruleForm.id){n.next=51;break}return n.next=49,i.$api.update("caipinxinxi",i.ruleForm);case 49:n.next=53;break;case 51:return n.next=53,i.$api.add("caipinxinxi",i.ruleForm);case 53:i.$utils.msgBack("提交成功");case 54:n.next=64;break;case 56:if(!i.ruleForm.id){n.next=61;break}return n.next=59,i.$api.update("caipinxinxi",i.ruleForm);case 59:n.next=63;break;case 61:return n.next=63,i.$api.add("caipinxinxi",i.ruleForm);case 63:i.$utils.msgBack("提交成功");case 64:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),t=i.getMonth()+1,r=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(n,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=o}).call(this,n("543d")["default"])},"8c5d":function(e,i,n){},b43a:function(e,i,n){"use strict";n.r(i);var t=n("77c0"),r=n.n(t);for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);i["default"]=r.a},e95f:function(e,i,n){"use strict";var t=n("8c5d"),r=n.n(t);r.a}},[["759d","common/runtime","common/vendor"]]]);