// pages/order/order.js
import Storage from '../../utils/storage'
import {navigateTo} from '../../utils/navigate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts : [],
    cartsList:[],
    len:0,
    resultCarts : [],
    flag:false,
    totalPrice:0,
    balance:4,
  },
  getCartList(){
    const carts=Storage.get('carts')
    const cartsList=carts.filter(item=>{
      return item
    })
    cartsList.length=1
    this.setData({
      carts:cartsList,
      cartsList,
      len:carts.length,
      resultCarts : carts,
    })
    this.handleComputedPrice()
  },
  // 展开
  handleSpread(){
    if(this.data.carts.length === this.data.len){
      this.setData({
        carts : this.data.cartsList
      })
    }else{
      this.setData({
        carts : this.data.resultCarts,
      })
    }
  },
  handleComputedPrice(){
    let totalPrice = 0
    this.data.resultCarts.forEach(item=>{
      totalPrice += (item.price * item.num)
    })
    this.setData({
      totalPrice
    })
  },
  handleSwitch(event){
    const flag = event.detail.value
    this.setData({
      flag
    })
  },
  handleConfirm(){
    navigateTo('/pages/payment/payment')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCartList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})