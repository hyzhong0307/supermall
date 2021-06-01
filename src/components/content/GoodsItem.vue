<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="loadImage">
    <p>{{goodsItem.title}}</p>
    <span class="prices">{{goodsItem.price | showPrice}}</span>
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
        if (this.$route.path === '/home'){
          this.$bus.$emit('loadImageFull')
        }else if(this.$route.path == '/detail') {
          this.$bus.$emit('DetailImage')
        }
        
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
      
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    filters: {
      showPrice(price) {
        return '¥ '+ price
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
.prices {
  color: red;
}
.collect {
  margin-left: 5px;
}
</style>