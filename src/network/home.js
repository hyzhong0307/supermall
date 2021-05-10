import {request} from './request'

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

// 在home.js中把home中所有用于请求的操作放在一块一起管理
// 在getHomedata中需要传递查询参数，所以这边传递了两个参数
export function getHomedata(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}