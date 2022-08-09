// pages/cart/cart.js
import Storage from "../../utils/storage"
import {addCart, getShopCode} from "../../common/cart"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList : [],
    totalPrice:0
  },
  // 获取购物车数据
  getCartList(){
    const cartList =Storage.get('carts')
    if(cartList.length <= 0) return
    this.setData({
      cartList
    })
    this.getShopCode
    this.computedTotalPrice()
  },
  // 计算总价
  computedTotalPrice(){
    let totalPrice=0
    this.data.cartList.forEach(item=>{
      totalPrice+=Number((item.num*item.price).toFixed(2))
    })
    this.setData({
      totalPrice
    })
  },
  handleComputedCount(event, action){
    const _index=event.currentTarget.dataset.index
    action==='increment'?this.data.cartList[_index].num++:this.data.cartList[_index].num--
    if(this.data.cartList[_index].num<=0){
      this.data.cartList[_index].num = 1
      this.openModalAction(_index)
      return false
    }
    this.setData({
      cartList : this.data.cartList
    })
    this.computedTotalPrice()
    Storage.set("carts", this.data.cartList)
  },
  // 减
  handleDecrement(event){
    this.handleComputedCount(event,'decrement')
  },
  // 加
  handleIncrement(event){
    this.handleComputedCount(event,'increment')
  },
  // 删除
  openModalAction(index){
    wx.showModal({
      title: '提示',
      content: '您确定要删除此商品吗?',
      success :(res) =>{
        if (res.confirm) {
          this.data.cartList.splice(index,1)
          this.setData({
            cartList : this.data.cartList
          })
          Storage.set("carts", this.data.cartList)
          this.computedTotalPrice()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })    
  },
  getShopCode:getShopCode,
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
    this.getCartList()
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