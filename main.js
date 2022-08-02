import App from './App'
import Vue from 'vue'
import store from '@/store';
Vue.config.productionTip = false
App.mpType = 'app';

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);
import '@/static/common/css/index.scss'


import PageContainer from "@/components/PageContainer/PageContainer.vue"
Vue.component('page-container', PageContainer)


// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';
// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';
// VueI18n
Vue.use(VueI18n);
const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

Vue.prototype.$setvuex = (name, value) => {
	store.commit('$uStore', {
		name,
		value
	})
}
export const app = new Vue({
	i18n,
	store,
	...App
})


// http拦截器， 将此部分放在new Vue() 和app.$mount() 之间， 才能App.vue中正常使用
require('@/common/http.interceptor.js')(app);

app.$mount()
