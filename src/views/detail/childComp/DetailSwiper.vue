<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" @load="imageLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

  export default {
    props:{
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        flag: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad() {
        if(!this.flag) {
          this.$emit('detailSwiperImage')
        }
        this.flag = true;
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>