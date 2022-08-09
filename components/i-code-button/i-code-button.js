// components/i-code-button/i-code-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleScanCode(){
      wx.scanCode({
        onlyFromCamera: true,
        success:(res)=>{
          this.triggerEvent("getResult",{code:res.result,type:this.properties.type})
        },
        fail:(error)=>{
          console.log("取消扫码")
        }
      })
    }
  }
})
