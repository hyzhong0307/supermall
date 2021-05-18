<template>
  <div id="detail">
    <!-- 详情页标题 -->
    <detail-nav-bar></detail-nav-bar>

    <scroll class="content" ref="scroll">
      <!-- 详情页轮播图 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <!-- 商品信息 -->
      <detail-goods-info :goods-info="goods"></detail-goods-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop-info='shop'></detail-shop-info>

      <detail-images :detail-info='detailInfo' @imageLoad='imageLoad'></detail-images>

      <detail-params :item-params='itemParams'></detail-params>
      
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
import DetailShopInfo from './childComp/DetailShopInfo'
import DetailImages from './childComp/DetailImages';
import DetailParams from './childComp/DetailParams'

import Scroll from "components/common/scroll/Scroll";
import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDate();
  },

  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImages,
    DetailParams,

    Scroll,
  },
  methods: {
    getDetailDate() {
      getDetail(this.iid).then((res) => {
        const data = res.result;
        console.log(data);
        // 取出轮播图的数据
        this.topImages = data.itemInfo.topImages;

        // 创建商品对象
        // 这里用类创建对象，便于将需要用的信息存到一个对象中进行整合
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 创建商家对象
        this.shop = new Shop(
          data.shopInfo
        );
        // 保存商品的详情数据
        this.detailInfo = data.detailInfo
        // 取出参数的信息
        this.itemParams = data.itemParams
      });
    },
    imageLoad() {
      this.$refs.scroll.bs.refresh()
    }
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
 .content {
   height: calc(100vh - 44px);
   overflow: hidden;
 }
</style>