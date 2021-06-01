<template>
  <div class="cart-item">
    <check-button class="left cart-item-check" :is-check="product.checked" @click.native="checkClick"></check-button>
    <img :src="product.image" alt="" class="left cart-img" />
    <div class="left cart-info">
      <p class="cart-title">
        {{ product.title }}
      </p>
      <p v-if="product.desc ? product.desc : null">{{ product.desc }}</p>
      <div class="cart-item-value">
        <span class="left price">{{ product.price | showPrice }}</span>
        <span class="right count">x {{ product.count }}</span>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import CheckButton from "components/content/CheckButton"
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showPrice(value) {
      return "¥ " + value;
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
};
</script>

<style scoped>
.cart-img {
  width: 80px;
  background-size: cover;
  margin-right: 20px;
}
.cart-item {
  width: 100%;
  padding: 15px;
}

.cart-info {
  width: 60%;
}
.cart-item-value {
  margin-top: 40px;
}
.price {
  font-size: 20px;
  color: red;
}
.cart-item-check {
  margin: 55px 5px 0 0 ;
}
</style>