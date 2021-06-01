<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartList.length}})</div>
    </nav-bar>

    <!-- 列表 -->
    <cart-list></cart-list>

    <!-- 底部bar -->
    <cart-bottom-bar></cart-bottom-bar>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childCompos/CartLits'
import CartBottomBar from './childCompos/CartBottomBar'

import {mapState} from 'vuex'
  export default {
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapState(['cartList']),
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}


</style>