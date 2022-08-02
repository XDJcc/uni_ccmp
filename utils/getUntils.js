import {
	app
} from "@/main.js"
import {
	updateWxUserInfo
} from "@/utils/request_api.js"

export const getSystemInfo = () => {
	uni.getSystemInfo({
		desc: '用于完善用户资料',
		success: (data) => {
			console.log(data);
			const {
				safeAreaInsets: {
					top,
					bottom
				},
				appVersion,
				deviceModel,
			} = data;
			app.$setvuex('vuex_iphoneSystemInfo', {
				top,
				bottom,
				appVersion,
				deviceModel,
			});
		}
	})
}
export const getLoaclWxUserInfo = () => {
	return new Promise((resolve, reject) => {
		wx.getUserProfile({
			desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			success: (res) => {
				let userInfo = res.userInfo;
				app.$setvuex('vuex_userWxInfo', userInfo);
				/* 将个人信息发送给后台 */
				userInfo.appId = app.$store.state.vuex_appId;
				userInfo.id = app.$store.state.vuex_userPlatformInfo.id;
				updateWxUserInfo(userInfo);
				resolve();
			},
			fail() {
				reject()
			}
		})
	})
}
