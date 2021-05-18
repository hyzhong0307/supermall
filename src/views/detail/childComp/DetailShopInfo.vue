<template>
  <div class="shop-info">
    <!-- 商品logo部分 -->
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>

    <div class="shop-detail">
      <div class="csell left">
        <div>
          <strong>{{ (shopInfo.sells / 10000).toFixed(1) }}万</strong>
        </div>
        <div><span>总销量</span></div>
      </div>
      <div class="goodsCount left">
        <div>
          <strong>{{ shopInfo.goodsCount }}</strong>
        </div>
        <div><span>全部宝贝</span></div>
      </div>

      <div class="shop-score-info left">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="shop-info-item">
          <span>{{ item.name }}</span>
          <span class="score">
            <span :style="{ color: scoreColor1 }" v-if="!item.isBetter">{{
              item.score
            }}</span>
            <span :style="{ color: scoreColor2 }" v-else>{{ item.score }}</span>
          </span>

          <span class="desc">
            <span :style="{ color: desc, backgroundColor:scoreColor1}" v-if="!item.isBetter">低</span>
            <span :style="{ color: desc, backgroundColor:scoreColor2 }" v-else>高</span>
          </span>
        </div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      scoreColor1: "green",
      scoreColor2: "red",
      desc:'#fff'
    };
  },
 
};
</script>

<style scoped>
.shop-logo {
  padding: 10px 10px;
  font-size: 18px;
  color: rgb(71, 70, 70);
}
.shop-logo img {
  width: 80px;
  height: 80px;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-detail {
  padding: 10px;
  color: rgb(49, 48, 48);
}

.shop-detail .left {
  padding: 0 18px;
  text-align: center;
  line-height: 25px;
}

.goodsCount {
  border-right: 1px solid #d8d6d6;
}

.shop-detail .shop-score-info  {
  
  padding:0px 0px;
  padding-left: 20px;
  text-align: left;
  margin-bottom:5px ;
}
.shop-info-item span {
  margin-right: 5px;
  text-align: center;
  
}

.score {
  display: inline-block;
  width: 35px;
}

.csell, .goodsCount{
  margin-top: 15px;
}
</style>