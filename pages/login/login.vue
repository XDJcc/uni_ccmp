<template>
	<view class="login">
		<view class="status_bar" :style="{height:height+'px'}">
		</view>
		<image class="loginBg " mode="aspectFill" :src="startScreenPng"></image>
		<view class="content">
			<view class="logoBox">
				<image class="logoPng u-skeleton-circle" :fade="false" :lazy-load="false" height="276rpx"
					:src="logoPng"></image>
			</view>
			<button class="toLogin" type="primary" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
				获取手机号
				<image class="icon" width="27rpx" height="23rpx" :src="arrowPng" :fade="false" :lazy-load="false">
				</image>
			</button>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import startScreenPng from "@/static/images/startScreen.png";
	import arrowPng from "@/static/images/arrow@2x.png";
	import logoPng from "@/static/images/logo.png";
	import {
		user_login
	} from "@/utils/request_api.js"
	export default {
		data() {
			return {
				/* 用户的code */
				userCode: "",
				userInfo: {},
				/* 获取的状态栏高度 */
				height: null,
				startScreenPng: startScreenPng,
				arrowPng: arrowPng,
				logoPng: logoPng,
			}
		},
		computed: {
			...mapState(["vuex_appId", "vuex_version"])
		},
		mounted() {
			var _this = this;
			// 获取手机状态栏高度
			uni.getSystemInfo({
				success: function(data) {
					// 将其赋值给this
					_this.height = data.statusBarHeight;
				}
			})
		},
		created() {
			this.getUserCode();
		},
		methods: {
			/* 获取用户的code信息 */
			getUserCode() {
				wx.login({
					success: (res) => {
						let userCode = res.code;
						this.userCode = userCode;
					},
				});
			},
			/* 获取手机号码 */
			getPhoneNumber(e) {
				var that = this;
				// console.log(e.detail.errMsg == "getPhoneNumber:ok");
				if (e.detail.errMsg == "getPhoneNumber:ok") {
					let {
						encryptedData,
						iv
					} = e.detail;
					let userCode = this.userCode;
					let appId = this.vuex_appId;
					user_login({
						appId,
						code: userCode,
						encryptedData: encryptedData,
						iv: iv,
					}).then(res => {
						let {
							phone,
							status
						} = res.user;


						let {
							token
						} = res;
						this.$setvuex('vuex_userPlatformInfo', res.user);
						/* vuex_userPermission==0说明有权限，==1说明没有权限 */
						if (status == 401) {
							this.$setvuex('vuex_userPermission', 1);
							this.$setvuex('vuex_token', "");
						} else {
							/* 保存token和类型 */
							this.$setvuex('vuex_userPermission', 0);
							let _token = 'Bearer ' + token;
							this.$setvuex('vuex_token', _token);
						}
						/* 保存token信息 */
						/* 成功了之后跳转到主页 */
						uni.showToast({
							title: '登陆成功',
							icon: 'success'
						})
						uni.reLaunch({
							url: "/pages/index/index"
						})
					})
				} else {
					this.getUserCode();
				}
			},
			/* 验证登录是否过期*/
			checksession() {
				wx.checkSession({
					success: function(res) {
						console.log(res, '登录未过期')
						wx.showToast({
							title: '登录未过期啊',
						})
					},
					fail: function(res) {
						console.log(res, '登录过期了')
						wx.showModal({
							title: '提示',
							content: '你的登录信息过期了，请重新登录',
						})
						//再次调用wx.login()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		height: 100vh;
		position: relative;

		.logoPng {}

		.loginBg {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
		}

		.toLogin {
			width: 574rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: rgba(100, 193, 177, 1);
			border-radius: 8rpx;
			position: relative;
			margin-top: 300rpx;

			.icon {
				position: absolute;
				right: 38rpx;
				width: 27rpx;
				height: 23rpx;
				top: 50%;
				transform: translateY(-50%);
			}

		}

		.content {
			position: absolute;
			width: 100%;
			top: 50%;
			transform: translateY(-50%);

			.logoBox {
				text-align: center;
			}

			.logoPng {
				display: inline-block;
				width: 189rpx;
				height: 276rpx;
			}
		}
	}
</style>
