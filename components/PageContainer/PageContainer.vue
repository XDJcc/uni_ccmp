<template>
	<view class="page_container" :style="{backgroundColor}">
		<slot></slot>
		<view :style="{height: vuex_iphoneSystemInfo.bottom + 'px'}"></view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import {
		getSystemInfo
	} from "@/utils/getUntils.js"
	export default {
		name: "PageContainer",
		data() {
			return {

			};
		},
		props: {
			backgroundColor: {
				type: String,
				default: () => '#f5f5f5'
			}
		},
		computed: {
			...mapState(['vuex_iphoneSystemInfo']),
		},
		created() {
			if (!this.vuex_iphoneSystemInfo.appVersion) getSystemInfo();
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page_container {
		// position: absolute;
		// z-index: -2;
		position: relative;
		margin: 0;
		padding: 0;
		min-height: 100vh;
		min-width: 100vw;
		// overflow: hidden;
	}
</style>
