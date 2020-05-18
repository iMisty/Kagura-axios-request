<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
    
</style>
