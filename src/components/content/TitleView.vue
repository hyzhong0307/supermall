<template>
  <div class="title-view">
    <span v-for="(item,index) in title" :key="index" @click="itemClick(index)">
      <span :class="{isActive:index==currentDate}" >{{item}}</span>
    </span>
  </div>
</template>

<script>
  export default {
    props:{
      title:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    data(){
      return {
        currentDate:0
      }
    },
    methods:{
      itemClick(index){
        // this.currentDate = index
        this.$emit('changeClick',index)
      }
    }
  }
</script>

<style scoped>
.title-view {
  display: flex;
  height: 50px;
  line-height: 50px;
  /* background-color: deepskyblue; */
  text-align: center;
  width: 100%;
  font-size: 16px;
  background-color: #fff;
}
.title-view span {
  flex: 1;
}

.isActive {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding:5px
}

</style>