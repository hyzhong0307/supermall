<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="info-user">
      <div>
        <img :src="commentInfo.user.avatar" alt="" class="user-avatar">
        <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
      <p class="user-content">{{commentInfo.content}}</p>
      <div>
        <span class="info-data">{{commentInfo.created | showDate}}</span>
        <span class="user-goods-style">{{commentInfo.style}}</span>
      </div>
      
      <div class="info-imgs">
        <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      //  1. 将时间戳转成Date对象
      const date = new Date(value * 1000)

      //  2. 将date进行格式化
      return moment(date).format('YYYY-MM-DD')
    }
  }
};
</script>

<style scoped>
.comment-info {
  padding: 10px 15px;
}
.info-header {
  display: flex;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.info-header > div {
  flex: 1;
}

.user-avatar {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.user-name {
  font-size: 16px;
  margin-left: 10px;
}
.user-content {
  text-indent: 2em;
  margin-top: 10px;
  font-size: 15px;
}
.user-goods-style {
  margin-top:15px;
  margin-left: 25px;
}
.info-imgs {
  margin-top: 15px;
}
.info-imgs img {
  width: 100px;
  height: 100px;
}
</style>