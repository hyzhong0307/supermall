<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="loadImage">
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
    },
    methods:{
      loadImage() {
        this.$bus.$emit('loadImageFull')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
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