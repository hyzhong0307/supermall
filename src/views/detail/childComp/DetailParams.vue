<template>
  <div class="item-params">
    <div class="item-class">
      <table
      v-for="(item, index) in itemParams.rule.tables[0]"
      :key="index"
      class="item-tables"
    >
      <tr>
        <td v-for="(itemtd, index) in item" :key="index">{{ itemtd }}</td>
      </tr>
    </table>
    </div>
    
    <div class="item-info">
      <table
      v-for="(item, index) in itemParams.info.set"
      :key="index"
      class="itemInfo-table"
    >
      <tr >
        <td >{{ item.key}}</td>
        <td class="item-value"> {{item.value}}</td>
      </tr>
    </table>
    </div>

    <div class="info-img" v-if="itemParams.info.image">
      <img :src="itemParams.info.image[0]" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.item-tables,.itemInfo-table {
  padding: 10px 20px;
  border-bottom: 1px solid #e9e6e6;
  width: 100%;
}
.item-tables tr ,.itemInfo-table tr{
  display: flex;
}
td {
  flex: 1;
}

.itemInfo-table {
  margin-top: 10px;
}
.item-value {
  color: red;
  margin-left: -100px;
}

</style>