import Storage from '../utils/storage'
import ShopModel from "../model/shop"
import {navigateTo} from "../utils/navigate"
async function getShopCode(event){
  console.log(event);
  const code=event.detail.code
  const type=event.detail.type
  if(!code) return
  try {
    const res =await ShopModel.getShopingInfo(code)
    if(!res.success) return
    const result =res.result
    if(result.length<=0) return

    addCart(result[0])
    if(type==='add'||type==='button'){
      return false
    }else{
     // 跳转到购物车页面
     navigateTo("/pages/cart/cart")
    }
  } catch (error) {
    console.log(error);
  }
}
const addCart=(data)=>{
  const carts=[]
  if(!hasLocalData()){
    data.num=1
    carts.push(data)
    Storage.set("carts", carts)
  }else{
    const localData=Storage.get("carts")
    if(hasShopData(data,localData)){
      localData.forEach(item=>{
        if(item._id===data._id){
          item.num++
        }
      })
    }else{
      data.num=1
      localData.push(data)
    }
    Storage.set("carts", localData)
  }
}
const hasLocalData=()=>{
  const carts =Storage.get("carts")
  const status = carts ? true : false
  return status
}
const hasShopData=(data,localData)=>{
  const _data = localData.filter(item=>{
    return item._id === data._id
   })
   return _data.length > 0 ? true : false
}


export {addCart,getShopCode}