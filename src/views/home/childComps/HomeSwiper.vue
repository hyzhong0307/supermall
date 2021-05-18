<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load='imageload'>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banner: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data(){
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    imageload(){
      // 因为轮播图只是为了占位，所以监听一张就可以了
      if(!this.isLoad) {
        this.$emit('SwiperImageLoad')
      }
      this.isLoad = true
      // console.log('---');
      
    }
  }
};
</script>

<style scoped>
</style>