<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    props:{
      probeType: {
        type: Number,
        default:0
      }
    },
    data(){
      return {
        bs:null
      }
    },
    mounted(){
      this.bs = new BetterScroll('.wrapper',{
        movable:true,
        observeDOM:true,
        click:true,
        probeType:this.probeType
      })
      this.bs.refresh()
      // this.bs.scrollTo(0, 0)

      this.bs.on('scroll',position => {
        this.$emit('scroll',position)
      })
    },
    methods:{
      scrollTo(x, y, time=300){
        this.bs.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>


</style>