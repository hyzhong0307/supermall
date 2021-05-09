import axios from 'axios'

// 1. 创建axios的实例
const instance = axios.create({
  baseURL:'http://152.136.185.210:7878/api/m5',
  timeout:5000,
})

// axios实例拦截器
// 请求前拦截
instance.interceptors.request.use((config) => {
  return config
},error => {
  console.log(error);
})

// axios 实例拦截器
// 数据返回前拦截
instance.interceptors.response.use((res) => {
  return res.data
},error => {
  console.log(error)
})

// 导出修改后的axios配置
export function request(config) {
  return instance(config)
}
