<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon">
      <slot name="item-icon" v-if="!isActive"></slot>
      <slot v-else></slot>
    </div>

    <div class="item-text" :style="ColorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      path:String,
      ColorActive:{
        type:String,
        default:'red'
      },
    },
    data(){
      return {
        // isActive:false
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)

      }
    },
    computed:{
      isActive(){
        return this.$route.path == this.path
      },
      ColorStyle(){
        return this.isActive ? {color:this.ColorActive}:{}
      }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.item-icon img{
  margin-top: 2px;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-bottom: 1px;
}
.item-text {
  font-size: 14px;
}
</style>