import {
	baseURL
} from "@/utils/config.js"
/**
 * 计算百分比
 * @param   {number} num   分子
 * @param   {number} total 分母
 * @returns {number} 返回数百分比
 */
function calcPercentage(num, total) {
	num = parseFloat(num);
	total = parseFloat(total);
	if (isNaN(num) || isNaN(total)) {
		return "-";
	}
	return total <= 0 ? "0%" : Math.round((num / total) * 10000) / 100.0 + "%";
}

/* 通用下载方法 */
function download(fileName) {
	let url = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
	let that = this;
	debugger
	const downloadTask = wx.downloadFile({
		url,
		filePath: `${wx.env.USER_DATA_PATH}/${fileName}`,
		success: (res) => {
			if (res.statusCode === 200) {
				console.log(res.filePath)
				let filePath = res.filePath;
				// wx.saveFile({
				// 	tempFilePath: filePath,
				// 	success: (res1) => {
				// 		//保存成功并打开文件
				// 		let _url=res1.savedFilePath;
						wx.openDocument({
							filePath: filePath,
							showMenu:true,
							fileType: "xlsx",
							success: (res2) => {
								console.log("下载"+filePath)
								// uni.showToast({
								// 	title:"存储的位置"+_url,
								// 	icon: "none",
								// })
								
							},
							fail(err) {
								uni.showToast({
									title: '导出失败',
									icon: "none",
									duration: 2000
								});
							}
						})
				// 	},
				// 	fail: () => {
				// 		that.$refs.uToast.show({
				// 			title: '下载失败'
				// 		})
				// 	}
				// })
			} else {
				uni.showToast({
					title: '导出失败',
					icon: "none",
					duration: 2000
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				title: '导出失败',
				icon: "none",
				duration: 2000
			});
		}
	});
}
export default {
	calcPercentage,
	download
}
