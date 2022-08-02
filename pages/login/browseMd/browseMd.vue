<template>
	<view>
		<mp-html :content="html" />
	</view>
</template>
<script>
	import mpHtml from "mp-html/dist/uni-app/components/mp-html/mp-html";
	import {
		marked
	} from "marked";
	import hljs from "highlight.js";
	import "highlight.js/scss/atom-one-dark.scss";

	export default {
		// 不可省略
		components: {
			mpHtml,
		},
		data() {
			return {
				html: "<div>Hello World!</div>",
				markdown: '# 我是谢大脚\n' +
					'今天我给大家敲个代码\n' +
					'![七龙珠](https://img-baofun.zhhainiao.com/market/133/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.jpg)\n' +
					'今天我给大家敲个代码\n' +
					'![七龙珠](https://img-baofun.zhhainiao.com/market/133/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.jpg)\n' +
					'今天我给大家敲个代码\n' +
					'![七龙珠](https://img-baofun.zhhainiao.com/market/133/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.jpg)\n' +
					'今天我给大家敲个代码\n' +
					'![七龙珠](https://img-baofun.zhhainiao.com/market/133/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.jpg)\n' +
					'``` javascript\n' +
					'let a = 1;\n' +
					'let a = function(){\n' +
					'           const a = 1;\n' +
					'           console.log(a);\n' +
					'        }\n' +
					'a();\n' +
					'```',
			};
		},
		mounted() {
			this.initHighLight();
			// this.html = marked(this.markdown);
			// 下面代码是解决代码高亮无效问题
			this.html = marked(this.markdown).replace(/<pre>/g, "<pre class='hljs'>");
		},
		methods: {
			initHighLight() {
				hljs.configure({
					useBR: true,
					tabReplace: " ",
				});
				marked.setOptions({
					renderer: new marked.Renderer(),
					gfm: true,
					tables: true,
					breaks: false,
					pedantic: false,
					highlight: function(code, lang) {
						if (lang && hljs.getLanguage(lang)) {
							return hljs.highlight(lang, code, true).value;
						} else {
							return hljs.highlightAuto(code).value;
						}
					},
				});
			},
		},
	};
</script>
