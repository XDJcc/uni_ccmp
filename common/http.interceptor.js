// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
import {
	baseURL
} from "@/utils/config.js"

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = function setHeep(vm) {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = baseURL; /* 根域名 */
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		config.custom = {
			auth: true,
			toast: false,
			catch: false
		};
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if (config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.Authorization = vm.$store.state.vuex_token;
		}

		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		const res = response.data;
		if (res.code === 200) {
			// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
			return res.data || res;
		} else {
			if (res.code == 401) {
				uni.showToast({
					icon: 'none',
					title: "您暂无查看权限",
					duration: 2000
				});
				return false;
			}
			let msg = res.msg;
			if (msg && msg.length > 40) {
				msg = "服务器连接失败"
			}
			uni.showToast({
				icon: 'none',
				title: msg,
				duration: 2000
			});
			return false;
		}
	}, (response) => {
		uni.showToast({
			icon: 'error',
			title: '亲，网络丢失了'
		})
		// 对响应错误做点什么 （statusCode !== 200）
		return response;
	})
}
