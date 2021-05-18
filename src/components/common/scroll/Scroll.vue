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
        probeType:this.probeType,
        pullUpLoad:true
      })

      this.bs.on('scroll',position => {
        this.bs && this.$emit('scroll',position)
        
      })
      // console.log(this.bs);
      this.bs.on('pullingUp', () => {
     
       this.$emit('pullingUp');
      })
    },
    methods:{
      scrollTo(x, y, time=300){
        this.bs && this.bs.scrollTo(x, y, time)
      },
      refresh() {
        // console.log('---');
        this.bs && this.bs.refresh()
      }
    }
  }
</script>

<style scoped>


</style>