(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index","common/main"],{"03b4":function(e,t,n){},"103a":function(e,t,n){"use strict";var o=n("6ae3"),r=n.n(o);r.a},"19ca":function(e,t,n){"use strict";var o=n("c80b"),r=n.n(o);r.a},"1bde":function(e,t,n){"use strict";n.r(t);var o=n("adf2");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("5c38"),n("103a");var u,a,c,i,s=n("f0c5"),l=Object(s["a"])(o["default"],u,a,!1,null,null,null,!1,c,i);t["default"]=l.exports},2077:function(e,t,n){"use strict";n.r(t);var o=n("ee3f"),r=n("7d73");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("19ca");var a,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=i.exports},"56d5":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a34a")),r=i(n("bc3a")),u=n("26cb"),a=n("f388"),c=n("4c1d");function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o,r,u,a){try{var c=e[u](a),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(o,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var u=e.apply(t,n);function a(e){s(u,o,r,a,c,"next",e)}function c(e){s(u,o,r,a,c,"throw",e)}a(void 0)}))}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={data:function(){return{catList:[{name:"活动"},{name:"测评"}],articleList:20,loading:!1,defaultHeader:r.default,wxUserInfo:{nickname:"",avatarUrl:""},current:0,scrollTop:0,more_status:"loadmore"}},computed:d(d({},(0,u.mapState)(["vuex_token","vuex_userWxInfo","vuex_userPlatformInfo"])),{},{badgeLists:function(){var e=this.vuex_userPlatformInfo.badge;return e||[]}}),beforeCreate:function(){},onLoad:function(){},onShow:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),1e3),this.toLogin(),this.vuex_userWxInfo.nickname||this.getUserInfo()},created:function(){},beforeMount:function(){},onReady:function(){},mounted:function(){},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.articleList=20,e.stopPullDownRefresh()}),1e3)},onPageScroll:function(e){var t=e.scrollTop;this.scrollTop=t},onReachBottom:function(){var e=this;console.log("我到底了"),this.more_status="loading",setTimeout((function(){e.articleList+=20,e.more_status="loadmore"}),2e3)},methods:{seeArticleDetail:function(){e.navigateTo({url:"/pages/login/browseMd/browseMd"})},changeTab:function(t){var n=this,o=t.index;o!=this.current&&(this.current=o,this.scrollTop>70&&e.pageScrollTo({scrollTop:71,duration:0}),console.log("item11",o),this.more_status="loading",this.articleList=0,setTimeout((function(){n.articleList=20,n.more_status="loadmore"}),1e3))},getUserInfo:function(){var e=this;return l(o.default.mark((function t(){var n,r,u,i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getWxUserInfo)({});case 2:n=t.sent,r=n.user,u={nickname:r.nickname,avatarUrl:r.avatarUrl},r.nickname||(0,c.getLoaclWxUserInfo)(),e.$setvuex("vuex_userWxInfo",u),i=e.vuex_userPlatformInfo,i.badge=r.badge||[],e.$setvuex("vuex_userPlatformInfo",i);case 10:case"end":return t.stop()}}),t)})))()},toUserInfo:function(){var t=this;return l(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.vuex_userWxInfo.nickname){n.next=3;break}return n.next=3,(0,c.getLoaclWxUserInfo)();case 3:e.navigateTo({url:"/pages/userInfo/userInfo"});case 4:case"end":return n.stop()}}),n)})))()},toLogin:function(){this.vuex_token||e.reLaunch({url:"/pages/login/login"})}}};t.default=m}).call(this,n("543d")["default"])},"5c38":function(e,t,n){"use strict";var o=n("03b4"),r=n.n(o);r.a},"6ae3":function(e,t,n){},"7d73":function(e,t,n){"use strict";n.r(t);var o=n("56d5"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},9190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){this.update()},onHide:function(){console.log("App Hide")},methods:{update:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){console.log("onCheckForUpdate====",t),t.hasUpdate&&(console.log("res.hasUpdate===="),e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){console.log("success====",t),t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}}}};t.default=o},"9d6a":function(e,t,n){"use strict";(function(e){n("c726");o(n("66fd"));var t=o(n("2077"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},a688:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0,n("c726");var o=l(n("1bde")),r=l(n("66fd")),u=l(n("dacf")),a=l(n("9cbb"));n("5eb5");var c=l(n("f948")),i=l(n("5b91")),s=l(n("b1ae"));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,r.default.config.productionTip=!1,o.default.mpType="app",r.default.use(a.default);var m=function(){Promise.all([n.e("common/vendor"),n.e("components/PageContainer/PageContainer")]).then(function(){return resolve(n("0f36"))}.bind(null,n)).catch(n.oe)};r.default.component("page-container",m),r.default.use(s.default);var v=new s.default({locale:"zh",messages:{zh:c.default,en:i.default}});r.default.prototype._i18n=v,r.default.prototype.$setvuex=function(e,t){u.default.commit("$uStore",{name:e,value:t})};var b=new r.default(d({i18n:v,store:u.default},o.default));t.app=b,n("7990")(b),e(b).$mount()}).call(this,n("543d")["createApp"])},adf2:function(e,t,n){"use strict";n.r(t);var o=n("9190"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},c80b:function(e,t,n){},ee3f:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={uImage:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-image/u-image")]).then(n.bind(null,"dcb2"))},uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,"acfb"))},uSticky:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-sticky/u-sticky")]).then(n.bind(null,"7ade"))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"b901"))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,"7623"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[]}},[["9d6a","common/runtime","common/vendor"]]]);