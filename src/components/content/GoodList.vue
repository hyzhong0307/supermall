<template>
  <div id="goods-list">
    <goods-item v-for="item in goods" :goods-item='item' :key="item.show.img"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
  export default {
    props:{
      goods:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    components:{
      GoodsItem,
    }
  }
</script>

<style scoped>
#goods-list {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding:2px
 
}


</style>