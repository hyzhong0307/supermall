<template>
  <div>
    <!-- 通过传递过来的对象，在子组件中来对数据进行展示 -->
    <p class="title">{{goodsInfo.title}}</p>
    <div class="price">
      <span class="nowPrice left">{{goodsInfo.lowNowPrice | showPrice}}</span>
      <span class="oldPrice left" v-if="goodsInfo.oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="discount left" v-if="goodsInfo.discount">{{goodsInfo.discount}}</span>
      <div class="clear"></div>
    </div>
    <div class="sellInfo">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.service[goodsInfo.service.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="index in goodsInfo.service.length-1" :key="index">
        <img :src="goodsInfo.service[index-1].icon" alt="">
        <span>{{goodsInfo.service[index-1].name}}</span>
      </span>
    </div>
  </div>

</template>

<script>
  export default {
    props:{
      goodsInfo: {
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showPrice(value) {
        return '¥' + value
      }
    }
  }
</script>

<style scoped>
.title {
  font-size: 18px;
  line-height: 25px;
  padding: 5px;
}

.price {
  padding: 5px;
  
}
.price span {
  margin-right: 8px;
}
.nowPrice {
  color: red;
  font-size: 28px;
  font-weight: bold;
}
.oldPrice {
  text-decoration: line-through;
  margin-top: 10px;
  
}
.discount {
  padding:3px 8px;
  background-color: red;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
}
 .sellInfo {
   display: flex;
   padding: 20px 5px;
   border-bottom: 1px solid #eeecec;
   justify-content: space-between;
 }
 
 .info-service {
   display: flex;
   padding: 20px 5px;
   justify-content: space-between;
   font-size: 14px;
   border-bottom: 1px solid #cecaca;
 }
 .info-service-item img {
   width: 15px;
   height: 15px;
   vertical-align: top;
   
 }
 .info-service-item span {
   margin-left: 3px;
 }
</style>