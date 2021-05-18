<template>
  <div class="detail-info">
    <p>{{ detailInfo.desc }}</p>
    <h3>{{ imageDate.key }}</h3>
    <div
      v-for="(item, index) in imageDate.list"
      :key="index"
      class="detail-item"
    >
      <img :src="item" alt="" @load="imageLoad" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  computed:{
    imageDate() {
      return this.detailInfo?this.detailInfo.detailImage[0]:''
    }
  },
  watch: {
    // detailInfo 是父组件传过来的属性
    detailInfo() {
      this.imagesLength =this.detailInfo?this.detailInfo.detailImage[0].list.length:'';
    },
  },
};
</script>

<style scoped>
.detail-info {
  background-color: #f2f2f2;
}
.detail-info p {
  text-indent: 2em;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 5px;
  border-top: 1px solid #dbd8d8;
  border-bottom: 1px solid #dbd8d8;
}

.detail-info h3 {
  padding: 10px 10px;
}

.detail-item img {
  width: 100%;
  padding: 5px 5px;
}
</style>