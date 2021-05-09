<template>
  <div>
    <recommend>
      <recommend-item v-for="item in recommend" :key="item.sort">
        <template slot="icon-img">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
          
        </template>
        <div>{{item.title}}</div>
        

      </recommend-item>
    </recommend>
  </div>
</template>

<script>
import { Recommend, RecommendItem } from "components/common/recommend";
export default {
  props: {
    recommend: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    Recommend,
    RecommendItem,
  },
};
</script>

<style scoped>

</style>