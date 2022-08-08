import Storage from '../utils/storage'
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
export {addCart}