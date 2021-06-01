<template>
  <div id="detail">
    <!-- 详情页标题 -->
    <detail-nav-bar @itemClick="getItemIndex" ref="nav"></detail-nav-bar>

    <scroll class="content" ref="scroll" @scroll="detailScroll">
      <!-- 详情页轮播图 -->
      <detail-swiper
        :top-images="topImages"
        @detailSwiperImage="detailSwiperImage"
      ></detail-swiper>
      <!-- 商品信息 -->
      <detail-goods-info :goods-info="goods"></detail-goods-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop-info="shop"></detail-shop-info>

      <detail-images
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-images>

      <detail-params :item-params="itemParams" ref="params"></detail-params>

      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>

      <good-list :goods="recommends" ref="recommend"></good-list>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>

    <back-top v-show="isShow" @click.native="backTotop"></back-top>

    <toast :message="message" :is-show="show"/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";
import DetailImages from "./childComp/DetailImages";
import DetailParams from "./childComp/DetailParams";
import DetailCommentInfo from "./childComp/DetailCommentInfo";
import DetailBottomBar from  './childComp/DetailBottomBar'

import Scroll from "components/common/scroll/Scroll";
import GoodList from "components/content/GoodList";
import Toast from "components/common/toast/Toast";

import { getDetail, Goods, Shop, getRecommend } from "network/detail";
import { debounce } from "common/utils";

import {backTOPMixin} from 'common/mixin';
import { mapActions } from 'vuex'
export default {
  name: "Detail",
  mixins:[backTOPMixin],
  data() {
    return {
      iid: "",
      topImages: [],  // 轮播图图片数据
      goods: {},  // 商品信息对象
      shop: {},  // 商家信息
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentindex: 0,
      message:'',
      show: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDate();
    this.getRecommendData();
  },

  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImages,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    Toast,

    Scroll,
    GoodList,
  },
  methods: {
    ...mapActions(['addCart']),
    getDetailDate() {
      getDetail(this.iid).then((res) => {
        const data = res.result;
        // console.log(data);
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
        this.shop = new Shop(data.shopInfo);
        // 保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 取出参数的信息
        this.itemParams = data.itemParams;

        // 取出我们的评论信息
        if (data.rate.cRate) {
          this.commentInfo = data.rate.list[0];
        }

        // this.$nextTick(() => {
        //   this.themeTopYs.push(0);
        // //  this.$refs.tabView.$el.offsetTop
        // // console.log(this.$refs.recommend.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);

        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopYs);
        // })
      });
    },
    imageLoad() {
      // console.log("---");
      this.$refs.scroll.bs.refresh();

      this.themeTopYs = [];
      this.themeTopYs.push(0);
        //  this.$refs.tabView.$el.offsetTop
        // console.log(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);

        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
    },
    getRecommendData() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    getItemIndex(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },
    detailSwiperImage() {},

    detailScroll(option) {
      // console.log(option);
      let potionY = -option.y

      // let length = this.themeTopYs.length
      // // console.log(potionY);
      // for(let i = 0; i < this.themeTopYs.length; i++){
      //   if(this.currentindex !== i && 
      //   ((i < length-1 && potionY >= this.themeTopYs[i] && potionY < this.themeTopYs [i+1])
      //   || (i == length-1 && potionY >= this.themeTopYs[i]))){
      //     // this.currentindex = i
      //     console.log(i);
      //     this.currentindex = i
      //     this.$refs.nav.currentIndex = this.currentindex
      //   }
      // }

      for(let i = 0; i < this.themeTopYs.length-1 ; i++) {
        if(this.currentindex !== i && (potionY >= this.themeTopYs[i] && potionY < this.themeTopYs[i+1])) {
          // console.log(i);
          this.currentindex = i
          this.$refs.nav.currentIndex = this.currentindex;

        }
      }

      this.isShow = - option.y > 1000;
    },

    addToCart() {
      //  1. 获取购物车需要展示的信息

      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;

      // 2. 将商品添加到购物车
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })
      this.addCart(product).then(res => {
        // console.log(res);
        // this.message = res;
        // this.show = true;

        // setTimeout(() => {
        //   this.show = false;
        //   this.message = ''
        // },1500)
        
        this.$toast.show(res)
      })
    }
    
  },

  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("DetailImage", () => {
      refresh();
    });
  },


  // updated() {
  //   this.themeTopYs = []
  //   this.themeTopYs.push(0);
  //   //  this.$refs.tabView.$el.offsetTop
  //   // console.log(this.$refs.recommend.$el.offsetTop);
  //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
  //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);

  //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
  //   console.log(this.themeTopYs);
  // },
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
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>