(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/browseMd/browseMd"],{"3bf0":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var u=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"4c5b":function(e,t,n){"use strict";n.r(t);var a=n("c116"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=u.a},c116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("1eb9"),u=o(n("1487"));function o(e){return e&&e.__esModule?e:{default:e}}n("81ab");var r=function(){Promise.all([n.e("common/vendor"),n.e("node-modules/mp-html/dist/uni-app/components/mp-html/mp-html")]).then(function(){return resolve(n("1f0b"))}.bind(null,n)).catch(n.oe)},i={components:{mpHtml:r},data:function(){return{html:"<div>Hello World!</div>",markdown:'# 我是谢大脚\n今天我给大家敲个代码\n![七龙珠](https://img-baofun.zhhainiao.com/market/133/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.jpg){{{width="auto" height="auto"}}}\n``` javascript\nlet a = 1;\nlet a = function(){\n           const a = 1;\n           console.log(a);\n        }\na();\n```'}},mounted:function(){this.initHighLight(),this.html=(0,a.marked)(this.markdown).replace(/<pre>/g,"<pre class='hljs'>")},methods:{initHighLight:function(){u.default.configure({useBR:!0,tabReplace:" "}),a.marked.setOptions({renderer:new a.marked.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,highlight:function(e,t){return t&&u.default.getLanguage(t)?u.default.highlight(t,e,!0).value:u.default.highlightAuto(e).value}})}}};t.default=i},d93a:function(e,t,n){"use strict";(function(e){n("c726");a(n("66fd"));var t=a(n("e81f"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},e81f:function(e,t,n){"use strict";n.r(t);var a=n("3bf0"),u=n("4c5b");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var r,i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=c.exports}},[["d93a","common/runtime","common/vendor"]]]);