import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {

  },

  // 因为mutations,actions里面的方法较多，一般将它们抽离到一个独立的js文件中
  mutations,
  actions,
})

export default store