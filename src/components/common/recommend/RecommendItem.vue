<template>
  <div class="recom-item">
    <slot name="icon-img"></slot>
    <div class="icon-text"><slot></slot></div>
  </div>
    
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.recom-item {
  flex:1;
  text-align: center;
  font-size: 12px;
}

.recom-item img {
  width: 65px;
  height: 65px;
  vertical-align: middle;
  margin-bottom: 8px;
}


</style>