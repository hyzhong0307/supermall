import Vue from 'vue'
import VueRouter from 'vue-router'
import All from './routeMoudle' // 映射视图的封装

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:All.Home,
  },
  {
    path:'/category',
    component:All.Category,
  },
  {
    path:'/shopcart',
    component:All.ShopCart,
  },
  {
    path:'/profile',
    component:All.Profile,
  },
  {
    path:'/detail/:iid',
    component:All.Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router