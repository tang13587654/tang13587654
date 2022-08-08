import {whiteList,field} from '../config/config'

// 无需权限
export const navigateTo=(url)=>{
  wx.navigateTo({
    url
  })
}
// 登录之后才可跳转
export const navigateAuthTo=(url)=>{
  const path=whiteList.includes(url)
  if(path){
    wx.navigateTo({
      url
    })
    return
  }
  const token =wx.getStorageSync(field.loginCredentials)
  if(token){
    wx.navigateTo({
      url,
    })
    return
  }
  wx.navigateTo({
    url: '/pages/login/login',
  })
}
