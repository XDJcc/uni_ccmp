const http = uni.$u.http;
//登陆接口 
export const user_login = (params) => {
	return http.post('/wx/login', params)
}


/* 获取用户微信信息（头像、昵称） */
export const getWxUserInfo = (params) => {
	return http.post('/wx/getUserInfo', params)
}

/* 获取用户微信信息（头像、昵称） */
export const updateWxUserInfo = (params) => {
	return http.post('/wx/userInfo', params)
}
