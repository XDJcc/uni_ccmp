<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			this.update();
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			update() {
				if (wx.canIUse('getUpdateManager')) {
					const updateManager = wx.getUpdateManager()
					updateManager.onCheckForUpdate(function(res) {
						console.log('onCheckForUpdate====', res)
						// 请求完新版本信息的回调
						if (res.hasUpdate) {
							console.log('res.hasUpdate====')
							updateManager.onUpdateReady(function() {
								wx.showModal({
									title: '更新提示',
									content: '新版本已经准备好，是否重启应用？',
									success: function(res) {
										console.log('success====', res)
										// res: {errMsg: "showModal: ok", cancel: false, confirm: true}
										if (res.confirm) {
											// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
											updateManager.applyUpdate()
										}
									}
								})
							})
							updateManager.onUpdateFailed(function() {
								// 新的版本下载失败
								wx.showModal({
									title: '已经有新版本了哟~',
									content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
								})
							})
						}
					})
				}
			}
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	page {
		font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif !important;
	}

	view {
		overflow: initial;
	}

	.mescroll-empty .empty-icon {
		width: 100% !important;
	}
</style>
<style>
	/*每个页面公共css */
</style>
