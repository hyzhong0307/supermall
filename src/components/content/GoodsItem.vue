<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
    </a>
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>

  </div>
</template>

<script>
  export default {
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.goods-item{
  width: 48%;
  font-size: 14px;
}
.goods-item img{
  width:100%;

}

/* 对当前文字设置换行超过变省略号才能生效 */
.goods-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>