import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from 'components/common/toast'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue({})
Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png')
})

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

