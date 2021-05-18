<template>
  <!-- 大的组件结构由主要组件结构组成 -->
  <!-- 再次封装的好处是，让主架构更清晰，耦合性降低 -->
  <div id="home">
    <!-- 导航 -->
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>

    <title-view
        class="tab-view1"
        :title="['流行', '新款', '精选']"
        @changeClick="getIndex"
        v-show = 'isTitleShow'
        ref="tabView1"
      ></title-view>

    <scroll
      class="content"
      ref="scroll"
      @scroll="getScrollData"
      :probe-type="3"
      @pullingUp="LoadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banner="banner" @SwiperImageLoad="SwiperImageLoad" />
      <!-- 推荐 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 本周流行 -->
      <weekly-prop></weekly-prop>

      <!-- 选项卡的封装 因为封装后只有文字不同
        将选项卡的文字通过props传递给组件 组件内容进行处理即可-->
      <title-view
        class="tab-view2"
        :title="['流行', '新款', '精选']"
        @changeClick="getIndex"
        ref="tabView2"
      ></title-view>

      <good-list :goods="goods[style].list"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
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
import BackTop from "components/content/BackTop";

import { getHomeMultidata } from "network/home";
import { getHomedata } from "network/home";

import { debounce } from "common/utils";
import { throttle } from 'common/utils';
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
      isShow: false,
      style: "pop",
      isTitleShow: false,
      offsetTop:null
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
    BackTop,
  },
  mounted() {
    // 图片加载过程中需要相对位置在不停的改变，BetterScroll中的refresh()可以在图片完成加载后及时进行更新位置
    // 但可能图片同时在加载，在停止加载或者间隔超过200ms时进行刷新位置
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("loadImageFull", () => {
      // console.log('---');
      refresh();

      // this.$refs.scroll.refresh()
    });

    // 组件是不能获取到offset属性值的
    // console.log(this.$refs.tabView.offSetTop) undefined

    // 所有的组件都有一个属性$el: 用于获取组件中的元素
    // console.log(this.$refs.tabView.$el.offsetTop)
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
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.bs.finishPullUp();
      });
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getScrollData(position) {
      // 1. 判断backTop 是否显示
      this.isShow = -position.y > 1000;

      // 2. 决定tabControl是否吸顶（）
      this.isTitleShow = -position.y > 602
    },
    getIndex(index) {
      switch (index) {
        case 0:
          this.style = "pop";
          break;
        case 1:
          this.style = "new";
          break;
        case 2:
          this.style = "sell";
      }
      this.$refs.tabView1.currentDate = index
      this.$refs.tabView2.currentDate = index
    },
    LoadMore() {

      // 用节流来防止数据请求过慢显示不出时，用户频繁加载的情况
      const pullUpdata = throttle(()=>{this.getData(this.style)}, 1000)
      pullUpdata()
      // this.getData(this.style)
      // console.log('11')
       
        
    },
    SwiperImageLoad() {
      // 组件的$el拿到组件中的根节点
      console.log(this.$refs.tabView2.$el.offsetTop);
    }
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
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

/* .tab-view {
  position: sticky;
  top: 44px;
} */

.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
 .tab-view1 {
   position: relative;
   z-index: 9;
 }
 
</style>