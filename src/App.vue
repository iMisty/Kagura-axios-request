<template>
  <div id="app">
    <wrap/>
    <hitokoto/>
  </div>
</template>

<script>
import wrap from './components/wrap'
import hitokoto from './components/hitokoto'
export default {
  name: 'app',
  components: {
    wrap,
    hitokoto
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.28);
  @media screen and (min-width: 770px) {
    height: 100vh;
  }
}
</style>
