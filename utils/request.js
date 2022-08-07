import {ApiConfig} from '../config/config'
import wxToPromise from './wx'
class Http{
  static async request({url,method='GET',data={}},options){
    wx.showLoading()
    try {
      const res=await wxToPromise('request',{
        url:ApiConfig.baseURL+url,
        method,
        data,
        ...options
      })
      wx.hideLoading()
  
      return res
    } catch (error) {
      wx.hideLoading()
      console.log(error);
    }
  }
}

export default Http