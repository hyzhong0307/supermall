<template>
  <div class="bottom-bar">
    <div class="choose-all">
      <check-button 
      class="check-button" 
      :is-check="isSelectAll"
      @click.native="checkClick"
      ></check-button>
      <span>全选</span>
 
    </div>

  <!-- 合计 -->
    <div class="total-price">
      <span>合计：</span>
      <span>{{totalPrice}}</span>
    </div>

  <!-- 去计算 -->
    <div class="caculate" @click="calClick">
      <span>去计算 {{showCaculateNum}}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/CheckButton";
import { mapState } from "vuex"
export default {
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return "¥" + this.$store.state.cartList.filter((item) => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    },
    ...mapState(['cartList']),
    showCaculateNum() {
      return this.cartList.filter((item) => {
        return item.checked
      }).length
    },
    isSelectAll() {
      // return !this.cartList.filter((item) => !item.checked).length
      if(this.cartList.length !== 0) {
        return !this.cartList.find(item => !item.checked)
      }
      
    }
  },
  methods: {
    checkClick() {
      // console.log('---');
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calClick() {
      this.$toast.show('请选择您要购买的商品', 2000)
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  bottom: 0px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}

.choose-all {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 100px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.caculate {
  width: 120px;
  height: 100%;
  background-color: red;
  text-align: center;
  color: #fff;
}


</style>