<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
     <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"></cart-list-item>
      
    </scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem"
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartList"]),
  },
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.$refs.scroll.bs.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>