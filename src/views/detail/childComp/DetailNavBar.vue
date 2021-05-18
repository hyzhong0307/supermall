<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back-image">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title" :key="index" class="title-item" @click="itemClick(index)" 
        :class='{active:currentIndex == index}'>{{item}}</div>
      </div>
    </nav-bar>
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components:{
      NavBar,
    },
    data() {
      return {
        title:['商品', '参数', '评论', '推荐'],
        currentIndex: 0 // 定义点击的初始值
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
 .title {
   display: flex;
   text-align: center;
   /* font-size: 13px; */
 }
 .title-item {
   flex: 1;
 }
 .active {
   color: red;
 }
 .back-image {
   margin-top: 10px;
 }
</style>