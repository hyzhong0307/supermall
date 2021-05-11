<template>
  <!-- 大的组件结构由主要组件结构组成 -->
  <!-- 再次封装的好处是，让主架构更清晰，耦合性降低 -->
  <div id="home">
    <!-- 导航 -->
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>

    <scroll class="content" ref="scroll" @scroll="getScrollData" :probe-type="3">
      <!-- 轮播图 -->
      <home-swiper :banner="banner" />
      <!-- 推荐 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 本周流行 -->
      <weekly-prop></weekly-prop>

      <!-- 选项卡的封装 因为封装后只有文字不同
        将选项卡的文字通过props传递给组件 组件内容进行处理即可-->
      <title-view
        class="tab-view"
        :title="['流行', '新款', '精选']"
      ></title-view>

      <good-list :goods="goods.sell.list"></good-list>

    </scroll>
    <back-top @click.native='backClick' v-show="isShow"></back-top>

  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import WeeklyProp from "./childComps/WeeklyProp";

import NavBar from "components/common/navbar/NavBar";
import TitleView from "components/content/TitleView";
import GoodList from "components/content/GoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/content/BackTop'

import { getHomeMultidata } from "network/home";
import { getHomedata } from "network/home";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isShow: false
    };
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    WeeklyProp,

    NavBar,
    TitleView,
    GoodList,
    Scroll,
    BackTop
  },
  created() {
    // create生命周期函数中尽量让它起到运行的作用
    this.getMultidata();

    this.getData("pop");
    this.getData("new");
    this.getData("sell");
  },
  methods: {
    // 处理请求放到methods函数中，调用在create函数中调用
    getMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 通过给定义的函数传递参数不同，导致取得的类型数据不同
    getData(type) {
      const page = this.goods[type].page + 1;
      getHomedata(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },

    backClick(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    getScrollData(position){
      this.isShow = -position.y > 1000
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-view {
  position: sticky;
  top: 44px;
}

.content {
  
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top:44px;
  bottom: 49px;
}
</style>