<template>
  <div id="app">
    <router-view></router-view>
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

</style>
