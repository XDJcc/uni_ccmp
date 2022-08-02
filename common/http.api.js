// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let hotSearchUrl = '/ebapi/store_api/hot_search';
// let indexUrl = '/ebapi/public_api/index';


/* 登录接口 */
let loginUrl = '/wx/login';
/* 用户信息同步 */
let updateUserInfoUrl = '/wx/userInfo';
/* 获取用户微信信息（头像、昵称） */
let queryUserInfoUrl = '/wx/getUserInfo';

/* 重新获取token */
let queryTokenUrl = '/wx/getToken';
/* 获取所有的问卷 */
let querySurveyListsUrl = '/survey/listByUser';



/* 获取月记配置 */
let queryMonthrecordConfig = '/consumer/survey/monthrecord/listConfig';

/* 获取月记历史记录 */
let queryMonthrecordLists = "/consumer/survey/historyMonthRecord";

/* 查询累计金币 */
let queryAccumulatedPointsDetails = "/consumer/survey/points/accumulated";
/* 查询用户是否中奖 */
let queryIsReward = "/consumer/predict/getRewardList";

/* 修改用户中奖状态 */
let updateReward = "/consumer/predict/updateReward";


/* 查询奖惩金币 */
let queryRewpunPointsDetails = "/consumer/survey/points/rewpen";

/* 查询已结算金币 */
let querySettlementPointsDetails = "/consumer/survey/points/settlement";

/* 查询首页关键数字 */
let queryKeyFigures = "/consumer/survey/homeDetail";

/* 查询用户当前周的问卷id */
let queryThisWeekSurveyId = "/consumer/survey/signSurvey";

/* 查询签到配置 */
let queryQuerySignInConfig = "/consumer/survey/signin/listConfig";

/* 获取单独问卷信息 */
let querySurveyDetailsBySurveyId = "/survey/withoutCorrectAnswer";

/* 批量提交问卷的信息 */
let updateSurveyDetailsBySurveyId = "/survey/answer/batchAdd";

/* 开始答题（开始轮数） */
let beginAnswer = "/survey/surveyRounds";

/* 结束答题（开始轮数） */
let endAnswer = "/survey/surveyRounds";

/* 管理端接口开始 */
/* 查询金币统计 */
let queryQueryPointsStats = "/consumer/survey/points/stats";
/* 导出金币统计 */
let exportPointsStats = "/consumer/survey/points/stats/export";
/* 查询月记统计 */
let queryMonthRecordStats = "/consumer/survey/monthRecord/stats";
/* 导出月记统计-已完成 */
let exportMonthRecordStats = "/consumer/survey/monthRecord/stats/export";
/* 导出月记统计-未完成 */
let exportUnCompletedMonthRecordStats = "/consumer/survey/monthRecord/stats/exportUnComplated";

/* 查询未完成人员统计 */
let queryUnCompletedUserList = "/consumer/survey/unCompletedUserList";
/* 导出未完成人员统计 */
let exportUnCompletedUserList = "/consumer/survey/exportUnCompletedUserList";

/* 查询已完成人员统计 */
let queryCompletedUserList = "/consumer/survey/completedUserList";
/* 导出已完成人员统计 */
let exportCompletedUserList = "/consumer/survey/exportCompletedUserList";
/* 催交未提交的人员 */
let pushMsg = "/consumer/user/pushMsg";
/* 管理员首页详情 */
let adminHomeDetailNum = "/consumer/survey/adminHomeDetail"

/* 管理员查看推送记录 */
let adminPushMsgRecord = "/consumer/survey/pushMsgRecord"
/* 管理员查看本月月记列表 */
let adminCurrentMonthRecord = "/consumer/survey/currentMonthRecordList"
/* 管理员查看本周签到列表 */
let adminCurrentWeekSiginList = "/consumer/survey/currentWeekSiginList"
/* 管理员一键推送签到、月记消息 */
let adminSurveyPushMsg = "/consumer/survey/pushMsg"
// /* 管理员查询签到统计 */
let adminQuerySurveySignInStats = "/consumer/survey/signin/stats";
/* 管理员导出历史已签到统计 */
let exportWeekRecordStats = "/consumer/survey/signin/stats/export"
/* 管理员导出本周未签到统计 */
let exportUnCompletedWeekRecordStats = "/consumer/survey/signin/stats/exportUnComplated"

/* 管理端接口结束 */

/* 推荐结果开始 */

/* 查询推荐结果 */
let queryPredictResult = "/consumer/predict/list"
/* 推荐结果修改 */
let updatePredictResult = "/consumer/predict"

/* 批量添加修改 */
let updateBatchResult = "/consumer/predict/batchUpdate"



/* 推荐结果结束 */

//商品收集详情
let queryGoodsCollectLists = "/goods/collect/listNeedCollectGoods"
//上传商品
let uploadFile = "/minio/uploadFile"
//删除图片
let deleteFile = "/minio/deleteFile"

let collectGoods = "/goods/collect";

let judgeGoodsIsCollected = "/goods/collect/goodsIsCollected";

let queryCollectList = "/goods/collect/list";
//查询商品收集配置
let queryCollectConfig = "/goods/collect/getConfig";


// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

	/* 登录接口 */
	let resLoginUrl = (params = {}) => vm.$u.post(loginUrl, params);
	/* 用户信息同步 */
	let resUpateUserInfo = (params = {}) => vm.$u.post(updateUserInfoUrl, params);
	/* 用户信息同步 */
	let resQueryUserInfoUrl = (params = {}) => vm.$u.post(queryUserInfoUrl, params);
	/* 重新获取token */
	let resQueryTokenUrl = (params = {}) => vm.$u.post(queryTokenUrl, params);

	/* 获取所有的问卷 */
	let resQuerySurveyListsUrl = (params = {}) => vm.$u.get(querySurveyListsUrl, params);

	/* 获取月记配置 */
	let resQueryMonthrecordConfig = (params = {}) => vm.$u.get(queryMonthrecordConfig, params);

	/* 查询历史月记 */
	let resQueryMonthrecordLists = (consumerId) => vm.$u.get(queryMonthrecordLists + "/" + consumerId, {});

	/* 获取月记历史记录 */
	let resQueryAccumulatedPointsDetails = (consumerId) => vm.$u.get(queryAccumulatedPointsDetails + "/" +
		consumerId, {});

	/* 获取奖惩金币 */
	let resQueryRewpunPointsDetails = (consumerId) => vm.$u.get(queryRewpunPointsDetails + "/" + consumerId, {});

	/* 获取积分结算 */
	let resQuerySettlementPointsDetails = (consumerId) => vm.$u.get(querySettlementPointsDetails + "/" +
	consumerId, {});

	/* 查询首页关键数字 */
	let resQueryKeyFigures = (consumerId) => vm.$u.get(queryKeyFigures + "/" + consumerId, {});


	/* 查询是否有中奖 */
	let resQueryIsReward = (consumerId) => vm.$u.get(queryIsReward + "/" + consumerId, {});

	/* 修改用户中奖状态 */
	let resUpdateReward = (params = {}) => vm.$u.post(updateReward, params);

	/* 查询用户当前周的问卷id */
	let resQueryThisWeekSurveyId = (consumerId) => vm.$u.get(queryThisWeekSurveyId + "/" + consumerId, {});

	/* 查询签到配置 */
	let resQueryQuerySignInConfig = (params = {}) => vm.$u.get(queryQuerySignInConfig, params);

	/* 获取问卷的信息 */
	let resQuerySurveyDetailsBySurveyId = (params = {}) => vm.$u.get(querySurveyDetailsBySurveyId, params);

	/* 查询金币统计 */
	let resQueryQueryPointsStats = (params = {}) => vm.$u.post(queryQueryPointsStats, params);

	/* 导出金币统计 */
	let resExportPointsStats = (params = {}) => vm.$u.post(exportPointsStats, params);

	/* 查询月记统计 */
	let resQueryMonthRecordStats = (params = {}) => vm.$u.post(queryMonthRecordStats, params);

	/* 导出月记统计 */
	let resExportMonthRecordStats = (params = {}) => vm.$u.post(exportMonthRecordStats, params);
	/* 导出月记统计-未完成 */
	let resExportUnCompletedMonthRecordStats = (params = {}) => vm.$u.post(exportUnCompletedMonthRecordStats,
		params);
	/* 查询未完成人员统计 */
	let resQueryUnCompletedUserList = (params = {}) => vm.$u.post(queryUnCompletedUserList, params);
	/* 导出未完成人员统计 */
	let resExportUnCompletedUserList = (params = {}) => vm.$u.post(exportUnCompletedUserList, params);
	/* 查询完成人员统计 */
	let resQueryCompletedUserList = (params = {}) => vm.$u.post(queryCompletedUserList, params);
	/* 导出完成人员统计 */
	let resExportCompletedUserList = (params = {}) => vm.$u.post(exportCompletedUserList, params);
	/* 催交未提交的人员 */
	let resPushMsg = (params = {}) => vm.$u.post(pushMsg, params);

	let resAdminHomeDetailNum = (params = {}) => vm.$u.get(adminHomeDetailNum, params);
	/* 查询推送记录 */
	let resQueryPushMsgRecord = (surveyType, params) => vm.$u.get(adminPushMsgRecord + "/" + surveyType, params);

	/* 查询本月月记列表 */
	let resQueryAdminCurrentMonthRecord = (isCompalted = 0, params) => vm.$u.get(adminCurrentMonthRecord + "/" +
		isCompalted, params);
	/* 查询本周签到列表 */
	let resQueryAdminCurrentWeekSiginList = (isCompalted = 0, params) => vm.$u.get(adminCurrentWeekSiginList + "/" +
		isCompalted, params);

	/* 催交未提交的人员 */
	let resAdminPushMsg = (params = {}) => vm.$u.post(adminSurveyPushMsg, params);

	/* 催交未提交的人员 */
	let resQuerySurveySignInStats = (params = {}) => vm.$u.post(adminQuerySurveySignInStats, params);

	let resExportWeekRecordStats = (params = {}) => vm.$u.post(exportWeekRecordStats, params);

	let resExportUnCompletedWeekRecordStats = (params = {}) => vm.$u.post(exportUnCompletedWeekRecordStats, params);
	/* 问卷开始 */
	let resBeginAnswer = (params = {}) => vm.$u.post(beginAnswer, params);
	/* 问卷结束 */
	let resEndAnswer = (params = {}) => vm.$u.put(endAnswer, params);
	/* 批量提交问卷的信息 */
	let resUpdateSurveyDetailsBySurveyId = (params = {}) => vm.$u.post(updateSurveyDetailsBySurveyId, params);


	/* 批量提交问卷的信息 */
	let resQueryPredictResult = (params = {}) => vm.$u.get(queryPredictResult, params, {
		_timeout: 10000
	});

	let resUpdatePredictResult = (params = {}) => vm.$u.put(updatePredictResult, params);

	let resUpdateBatchResult = (params = {}) => vm.$u.post(updateBatchResult, params);

	//商品收集，列表
	let resQueryGoodsCollectLists = (params = {}) => vm.$u.get(queryGoodsCollectLists, params);
	//删除图片
	let resDeleteFile = (params = {}) => vm.$u.post(deleteFile, params);
	let resUploadFile = (params = {}) => vm.$u.post(uploadFile, params);

	//收集商品
	let resCollectGoods = (params = {}) => vm.$u.post(collectGoods, params);

	let resJudgeGoodsIsCollected = (barcode, params = {}) => vm.$u.get(judgeGoodsIsCollected + "/" + barcode,
		params);

	//查询历史列表
	let resQueryCollectList = (params = {}) => vm.$u.get(queryCollectList, params);

	//查询配置
	let resQueryCollectConfig = (params = {}) => vm.$u.post(queryCollectConfig, params);

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		resLoginUrl,
		resUpateUserInfo,
		resQueryUserInfoUrl,
		resQueryTokenUrl,
		resQuerySurveyListsUrl,
		resQueryMonthrecordConfig,
		resQueryMonthrecordLists,
		resQueryAccumulatedPointsDetails,
		resQueryRewpunPointsDetails,
		resQuerySettlementPointsDetails,
		resQueryKeyFigures,
		resQueryIsReward,
		resUpdateReward,
		resQueryThisWeekSurveyId,
		resQueryQuerySignInConfig,
		resQueryQueryPointsStats,
		resExportPointsStats,
		resQueryMonthRecordStats,
		resExportMonthRecordStats,
		resQueryUnCompletedUserList,
		resExportUnCompletedUserList,
		resQueryCompletedUserList,
		resExportCompletedUserList,
		resPushMsg,
		resAdminHomeDetailNum,
		resQueryPushMsgRecord,
		resQueryAdminCurrentMonthRecord,
		resQueryAdminCurrentWeekSiginList,
		resAdminPushMsg,
		resQuerySurveySignInStats,

		resExportWeekRecordStats,
		resExportUnCompletedMonthRecordStats,
		resExportUnCompletedWeekRecordStats,
		resQuerySurveyDetailsBySurveyId,
		resUpdateSurveyDetailsBySurveyId,
		resBeginAnswer,
		resEndAnswer,
		resQueryPredictResult,
		resUpdatePredictResult,
		resUpdateBatchResult,

		resQueryGoodsCollectLists,
		resDeleteFile,
		resUploadFile,
		resCollectGoods,
		resJudgeGoodsIsCollected,

		resQueryCollectList,
		resQueryCollectConfig
	};
}

export default {
	install
}
