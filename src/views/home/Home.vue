<template>
  <!-- 大的组件结构由主要组件结构组成 -->
  <!-- 再次封装的好处是，让主架构更清晰，耦合性降低 -->
  <div id="home">

    <!-- 导航 -->
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner='banner'/>
    <!-- 推荐 -->
    <home-recommend :recommend='recommend'></home-recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'

import {getHomeMultidata} from 'network/home'
export default {
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created(){
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(this.recommend)
    })
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>