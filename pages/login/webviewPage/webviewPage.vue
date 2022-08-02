<template>
	<web-view :src="inintUrl"></web-view>
</template>

<script>
	export default {
		onLoad(option) {
			let {
				url
			} = option;
			this.inintUrl = url;
		},
		data() {
			return {
				inintUrl: ""
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
