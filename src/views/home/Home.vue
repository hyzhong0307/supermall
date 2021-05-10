<template>
  <!-- 大的组件结构由主要组件结构组成 -->
  <!-- 再次封装的好处是，让主架构更清晰，耦合性降低 -->
  <div id="home">
    <!-- 导航 -->
    <nav-bar>
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner" />
    <!-- 推荐 -->
    <home-recommend :recommend="recommend"></home-recommend>
    <!-- 本周流行 -->
    <weekly-prop></weekly-prop>

    <!-- 选项卡的封装 因为封装后只有文字不同
        将选项卡的文字通过props传递给组件 组件内容进行处理即可-->
    <title-view class="tab-view" :title="['流行', '新款', '精选']"></title-view>

    <good-list :goods='goods.sell.list'></good-list>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import WeeklyProp from "./childComps/WeeklyProp";

import NavBar from "components/common/navbar/NavBar";
import TitleView from "components/content/TitleView";
import GoodList from 'components/content/GoodList'

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
    };
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    WeeklyProp,

    NavBar,
    TitleView,
    GoodList,
  },
  created() {
    // create生命周期函数中尽量让它起到运行的作用
    this.getMultidata();

    this.getData('pop');
    this.getData('new');
    this.getData('sell');
    
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
    getData(type){
      const page = this.goods[type].page + 1
      getHomedata(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page ++;
      })
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
</style>