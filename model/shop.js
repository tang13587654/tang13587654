import Http from '../utils/request'

class ShopModel extends Http {
  static getShopBanner(){
    return Http.request({
      url:'/api/app/banner'
    },{
      header : {
        devicetype : 'H5'
      }
    })
  }
  static getShopingInfo(qcode){
    return Http.request({
      url : '/api/getProduct',
      method : "GET",
      data : {
        qcode
      },
      name : 'api2'
    })
  }
}
export default ShopModel
