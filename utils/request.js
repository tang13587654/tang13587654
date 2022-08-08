import {ApiConfig} from '../config/config'
import wxToPromise from './wx'
import exceptionMessage from "../config/exceptionMessage"

class Http{
  static async request({url,method='GET',data={},name = 'api1'},options){
    wx.showLoading()
    try {
      const res=await wxToPromise('request',{
        url:ApiConfig[name].baseURL+url,
        method,
        data,
        ...options
      })
      wx.hideLoading()

      if(res.statusCode < 400){
        return res.data
      }

      Http._showError(res.data.code, res.data.msg)
      return res
    } catch (error) {
      wx.hideLoading()
      Http._showError(-1)
      console.log(error);
    }
  }
  static _showError(code, msg){
    let title = ""
    title = exceptionMessage[code] || msg || '发生未知错误'
    wx.showToast({
      title,
      icon : 'none',
      duration : 3000
    })
  }
}

export default Http