<template>
	<page-container>
		<view class="page_bg"></view>

		<view class="" style="padding: 16rpx 0;">
			<view class="user_info">
				<h2 style="font-size: 32rpx;">{{nickname}}</h2>
				<view class="level">
					lv.{{vuex_userPlatformInfo.level||1}}
				</view>
				<view class="level_experience">
					{{vuex_userPlatformInfo.points||0}}/{{vuex_userPlatformInfo.userLevel.max||0}}
				</view>
				<view class="avatar" @click="uodateUserInfo">
					<u-image width="128rox" height="128rpx" mode="scaleToFill" :src="vuex_userWxInfo.avatarUrl"
						shape="circle">
					</u-image>
					<view class="updateUserInfo">
						更新
					</view>
				</view>
				<u-line-progress :percentage="percent" activeColor="#B2E194" inactiveColor="#f5f5f5" height="8"
					:showText="false"></u-line-progress>
				<u-divider></u-divider>
				<view class="food_medal">
					<view class="foodMedal u-flex" v-for="(item,index) in renderBadgeFoodMedal" :key="index">
						<view class="txt">
							{{item.badge.name}}
						</view>
						<view class="lv u-flex">
							<Image class="medalPng" mode="widthFix" width="40rpx" height="40rpx" :src="item.badge.icon">
							</Image>
							<view class="num">
								x{{item.num}}
							</view>
						</view>
						<view class="noTxt" v-if="renderBadgeFoodMedal.length <1">
							尚未获得任何勋章
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="section listItem">
			<view class="list u-flex" @tap="goPages('https://mp.weixin.qq.com/s/xL62ESBjtnOEX7NIdIZKZA')">
				<view class="left u-flex">
					<u-icon name="account-fill" size="28"></u-icon>
					<view class="name">
						公众号
					</view>
				</view>
				<u-icon class="right" name="arrow-right" color="#999999" size="25"></u-icon>
			</view>
			<view class="list u-flex">
				<view class="cont">
					<view class="left u-flex">
						<u-icon name="kefu-ermai" size="28"></u-icon>
						<view class="name">
							客服中心
						</view>
					</view>
					<u-icon class="right" name="arrow-right" color="#999999" size="24"></u-icon>
				</view>
				<button class="contact" type="default" open-type="contact">客服中心</button>
			</view>
			<view class="list u-flex" @tap="goPages('https://mp.weixin.qq.com/s/YE318L4F92xIVQTPiioGww')">
				<view class="left u-flex">
					<u-icon name="question-circle" size="24"></u-icon>
					<view class="name">
						用户须知
					</view>
				</view>
				<u-icon class="right" name="arrow-right" color="#999999" size="25"></u-icon>
			</view>
		</view>
		<view class="verson">
			版本号：{{version}}
		</view>
	</page-container>
</template>

<script>
	import defaultHeader from "@/static/images/defaultHeader.png";
	import {
		version
	} from "@/utils/config.js"
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";

	import {
		getLoaclWxUserInfo
	} from "@/utils/getUntils.js"
	export default {
		data() {
			return {
				defaultHeader: defaultHeader,
				version,
			}
		},
		computed: {
			...mapState(["vuex_appId", "vuex_version", "vuex_userWxInfo", "vuex_userPlatformInfo", "vuex_token"]),
			nickname() {
				let nickname = this.vuex_userWxInfo.nickname || this.vuex_userWxInfo.nickName;
				let phone = this.vuex_userPlatformInfo.phone;
				let name = nickname || phone
				return name;
			},
			/* 百分比 */
			percent() {
				let vuex_userPlatformInfo = this.vuex_userPlatformInfo;
				let points = vuex_userPlatformInfo.points;
				if (!vuex_userPlatformInfo.userLevel) {
					return 0
				}
				let max = vuex_userPlatformInfo.userLevel.max;
				if (points > max) {
					return 100
				} else {
					return Math.round(points * 100 / max)
				}
			},
			/* 渲染 美食徽章*/
			renderBadgeFoodMedal() {
				let vuex_userPlatformInfo = this.vuex_userPlatformInfo;

				let badge = vuex_userPlatformInfo.badge;
				console.log(badge)
				return badge || [];
			},
		},
		methods: {

			async uodateUserInfo() {
				await getLoaclWxUserInfo()
			},
			/* 跳转页面 */
			goPages(url) {
				this.$u.route({
					url: "pages/login/webviewPage/webviewPage",
					params: {
						url: url
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.verson {
		text-align: center;
		font-size: 20rpx;
		color: rgba($color: #000000, $alpha: 0.3);
		position: absolute;
		bottom: 50rpx;
		width: 100%;
	}

	.section {
		margin: 0 24rpx;
		background: #FFFFFF;
		border-radius: 16rpx;

		&.coinBox {
			margin-top: 116rpx;
			margin-bottom: 24rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
				padding: 24rpx 32rpx 20rpx 32rpx;
			}

			.coinDes {
				padding: 0 42rpx 24rpx 32rpx;
				height: 76rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.num {
					font-weight: bold;
					color: #D4B106;
					font-size: 64rpx;
				}

				.txt1 {
					font-size: 28rpx;
					font-weight: 400;
					color: #999999;
					padding-right: 16rpx;
				}
			}

			.lines {
				display: flex;
				border-top: 1rpx solid #E9E9E9;

				.line {
					flex: 1;
					border-right: 1rpx solid #E9E9E9;

					&:last-child {
						border-right: 0
					}

					.name {
						font-size: 28rpx;
						font-weight: 400;
						color: #999999;
						padding: 24rpx 0 14rpx 32rpx;
					}

					.num {
						font-size: 32rpx;
						font-weight: 400;
						color: #666666;
						padding-bottom: 28rpx;
						padding-left: 32rpx;
					}
				}
			}
		}

		&.listItem {
			padding: 16rpx 42rpx 16rpx 32rpx;

			.list {
				justify-content: space-between;
				height: 96rpx;
				border-bottom: 1rpx solid #E9E9E9;
				position: relative;

				.contact {
					position: absolute;
					width: 100%;
					opacity: 0;
				}

				.cont {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				&:last-child {
					border-bottom: 0;
				}

				.left {
					.name {
						padding-left: 16rpx;
						font-size: 32rpx;
						color: #333333;
					}
				}
			}
		}
	}

	.user_info {
		// height: 300rpx;
		margin: 0 24rpx;
		overflow: hidden;
		background: #fff;
		border-radius: 16rpx;
		padding: 20rpx 24rpx;
		position: relative;

		.foodMedal {
			height: 50rpx;
			opacity: 1;
			justify-content: space-between;
			color: #333;

			.medalPng {
				width: 50rpx;
				height: 50rpx;
			}

			.txt {
				font-size: 28rpx;
			}

			.lv {
				.num {
					font-weight: bold;
					color: #666;
					font-size: 28rpx;
					padding-left: 8rpx;
				}
			}

			.noTxt {
				font-size: 24rpx;
				color: #666;
			}
		}


		.level {
			width: 72rpx;
			height: 32rpx;
			border-radius: 20rpx 20rpx 20rpx 0rpx;
			background: linear-gradient(180deg, #A5EF68 0%, #45DC5C 100%);
			font-size: 20rpx;
			font-weight: bold;
			text-align: center;
			color: #FFFFFF;
			line-height: 32rpx;

			margin: {
				top: 14rpx;
				bottom: 24rpx;
			}

		}

		.level_experience {
			font-size: 24rpx;
			font-weight: 600;
			color: #333333;
			line-height: 34rpx;

			margin: {
				bottom: 8rpx
			}

		}

		.avatar {
			position: relative;
			position: absolute;
			top: 24rpx;
			right: 24rpx;
			width: 128rpx;
			height: 128rpx;

			.updateUserInfo {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				font-size: 18rpx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 26rpx;
				text-align: center;
			}
		}
	}

	.page_bg {
		top: 0;
		left: 0;
		position: absolute;
		z-index: 0;
		height: 206rpx;
		width: 100%;
		background-image: linear-gradient(rgba(237, 251, 223, 1), rgba(232, 244, 218, 0));
	}
</style>
