<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-vue />
  </div>
</template>

<script>
import MainVue from './components/content/Main.vue'

export default {
  name: 'App',
  components: {
    MainVue,
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import 'assets/css/normalize.css'
</style>
