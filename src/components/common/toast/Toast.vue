<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  // props: {
  //   message: {
  //     type:String,
  //     default() {
  //       return ''
  //     }
  //   },
  //   isShow: {
  //     type:Boolean,
  //     default() {
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  padding: 8px 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 5px;
  z-index: 999;
}
</style>