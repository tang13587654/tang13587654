const ApiConfig={
  "api1" : {
    baseURL : 'https://admin.hxwendeng.com'
  },
  "api2" : {
    baseURL : 'http://weixin.itying.com' 
  }
}
// 白名单
const whiteList=[
  "/login",
  "/404",
  "/401",
  "/settings"
]
// 字段
const field={
  loginCredentials : 'token',
  userInfoKey : 'userInfo'
}

export {ApiConfig,whiteList,field}