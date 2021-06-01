import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    // 一般处理复杂逻辑 和 异步请求 都放在actions中

    // let oldProduct = null
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }

    // if(oldProduct) {
    //   oldProduct.count += 1
    // }else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    //  1. 查找之前数组中是否有该商品
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })

      //  2. 判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('添加的商品 +1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve("添加商品到购物车")
      }
    })

  }
}