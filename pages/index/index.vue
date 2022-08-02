<template>
	<page-container backgroundColor="#fff">
		<view class="homepage">
			<view class="headerCont">
				<view class="baseInfo u-flex" @tap="toUserInfo">
					<view class="headerImg avatarUrl" v-if="vuex_userWxInfo.avatarUrl">
						<u-image class="coinImg" mode="widthFix" width="92rpx" height="92rpx"
							:src="vuex_userWxInfo.avatarUrl">
						</u-image>
					</view>
					<u-avatar class="headerImg" :src="defaultHeader" size="60" v-else></u-avatar>
					<view class="txtInfo">
						<view class="name u-flex">
							<text class="txt">{{vuex_userWxInfo.nickname||vuex_userPlatformInfo.phone||name}}</text>
							<Image v-for="(item,index) in badgeLists" :key="index" class="badgeIcon"
								:src="item.badge.icon" mode=""></Image>
						</view>
						<view class="infoNum u-flex">
							<!-- 隐藏金币数量 -->
							<!-- <view class="coinDetails box u-flex">
								<u-image class="coinImg" mode="widthFix" width="32rpx" height="32rpx"
									src="/static/images/coin@2x.png">
								</u-image>
								<view class="num">{{vuex_userPlatformInfo.points||0}}</view>
							</view> -->
							<view class="level box u-flex">
								LV.{{vuex_userPlatformInfo.level||1}}
							</view>
						</view>
					</view>
				</view>
			</view>

			<u-sticky offsetTop='-1'>
				<view class="inint_tabbar">
					<u-tabs :current="current" :list="catList" :scrollable="false" lineWidth="20" lineHeight="5"
						:activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}" lineColor="#333" itemStyle="padding-left: 15px; padding-right: 15px; height: 75rpx;" @click='changeTab'>
					</u-tabs>
				</view>
			</u-sticky>

			<view class="article_list">
				<view class="article_item" @click="seeArticleDetail" v-for="(item,index) in articleList" :key="index">
					{{item}}
				</view>
			</view>
			<view style="height: 74rpx;overflow: hidden;background-color: #fff;">
				<u-loadmore bgColor="transparent" :status="more_status" />
			</view>
		</view>
	</page-container>
</template>

<script>
	import defaultHeader from "@/static/images/defaultHeader.png";

	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";

	import {
		getWxUserInfo
	} from "@/utils/request_api.js"
	import {
		getSystemInfo,
		getLoaclWxUserInfo
	} from "@/utils/getUntils.js"
	export default {
		data() {
			return {
				catList: [{
					name: '活动'
				}, {
					name: '测评'
				}, ],
				articleList: 20, //文章列表
				loading: false,
				defaultHeader: defaultHeader,
				wxUserInfo: {
					nickname: '',
					avatarUrl: '',
				},
				current: 0, // 当前的栏目
				scrollTop: 0, //当前的滚动距离
				more_status: 'loadmore'
			}
		},
		computed: {
			...mapState(['vuex_token', 'vuex_userWxInfo', 'vuex_userPlatformInfo']),
			badgeLists() {
				let badge = this.vuex_userPlatformInfo.badge;
				return badge || [];
			},
		},
		beforeCreate() {

		},
		onLoad() {

		},
		onShow() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 1000)
			this.toLogin();
			if (!this.vuex_userWxInfo.nickname) this.getUserInfo();
		},
		created() {

		},
		beforeMount() {

		},
		onReady() {

		},
		mounted() {

		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.articleList = 20
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onPageScroll({
			scrollTop
		}) {
			this.scrollTop = scrollTop;
		},
		onReachBottom() {
			console.log('我到底了');
			this.more_status = "loading";
			setTimeout(() => {
				this.articleList += 20;
				this.more_status = "loadmore"
			}, 2000)
		},
		methods: {
			seeArticleDetail() {
				uni.navigateTo({
					url: '/pages/login/browseMd/browseMd'
				})
			},
			// 切换栏目
			changeTab({
				index
			}) {
				if (index == this.current) {
					return
				};
				this.current = index;
				// 滚动距离超过顶部信息 就跳转到刚刚好吸顶
				if (this.scrollTop > 70) {
					uni.pageScrollTo({
						scrollTop: 71,
						duration: 0
					})
				}
				console.log('item11', index);
				this.more_status = 'loading';
				this.articleList = 0;
				setTimeout(() => {
					this.articleList = 20;
					this.more_status = "loadmore"
				}, 1000)
			},
			/* 查看个人头像、昵称等信息 */
			async getUserInfo() {
				const res = await getWxUserInfo({});
				let userInfo = res.user;
				let data = {
					nickname: userInfo.nickname,
					avatarUrl: userInfo.avatarUrl,
				}
				if (!userInfo.nickname) getLoaclWxUserInfo();
				this.$setvuex('vuex_userWxInfo', data);
				let vuex_userPlatformInfo = this.vuex_userPlatformInfo;
				vuex_userPlatformInfo.badge = userInfo.badge || []
				this.$setvuex('vuex_userPlatformInfo', vuex_userPlatformInfo);

			},
			// 进入用户详情界面
			async toUserInfo() {
				if (!this.vuex_userWxInfo.nickname) {
					await getLoaclWxUserInfo();
				}
				uni.navigateTo({
					url: '/pages/userInfo/userInfo'
				})

			},
			// 是否登陆
			toLogin() {
				if (this.vuex_token) return;
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	$initColor:#D0F2B3;

	.scroll-Y {
		height: 100%;
	}

	.article_list {
		width: 750rpx;
		min-height: calc(100vh - 140rpx);
		background: #fff;

		.article_item {
			width: 710rpx;
			height: 200rpx;
			background: #fafafa;
			border-radius: 20rpx;
			margin: 10rpx 20rpx;
			overflow: hidden;
		}
	}

	.inint_tabbar {
		height: 70rpx;
		width: 100%;
		padding-bottom: 10rpx;
		background: $initColor;
	}

	.homepage {
		width: 100%;
		position: relative;


		.headerCont {
			position: relative;
			overflow: initial;
		}

		.baseInfo {
			// background: $xqb-navigation-bgColor;
			background: $initColor;
			padding: 10rpx 12rpx 20rpx 32rpx;

			.headerImg {
				margin-right: 20rpx;

				&.avatarUrl {
					border: 4rpx solid #FFFFFF;
					box-sizing: border-box;
					overflow: hidden;
					border-radius: 50%;
				}

				// width: 96rpx;
			}

			.txtInfo {
				flex: 1;

				.name {
					color: #333;
					font-size: 32rpx;
					padding-bottom: 14rpx;

					.medalPng {
						padding-left: 4rpx;
					}

					.txt {
						padding-right: 8rpx;
					}

					.badgeIcon {

						width: 40rpx;
						height: 40rpx;
					}
				}

				.coinDetails {
					font-size: 24rpx;
					margin-right: 8rpx;

					.coinImg {
						display: inline-block;
						padding-right: 8rpx;
					}

					.label {
						color: #FADB14;
					}

					.num {
						padding-right: 16rpx;
						margin-left: 8rpx;
						// font-family: Roboto;
						font-weight: bold;
						font-size: 20rpx;
					}
				}

				.infoNum {
					.box {
						background: #fff;
						// color: #EBE0B0;
						color: #999;
						height: 36rpx;
						line-height: 36rpx;
						border-radius: 18rpx;
					}

					.level {
						padding: 0rpx 18rpx;
						font-size: 20rpx;
						// font-family: Roboto;
						font-weight: bold;
						font-style: italic;
					}
				}
			}
		}

		.mainCont {
			margin-top: 20rpx;
		}
	}

	.u-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
