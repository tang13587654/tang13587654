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
}
export default ShopModel
