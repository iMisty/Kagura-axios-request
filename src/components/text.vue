<template>
    <p>
        {{ text }}
    </p>
</template>

<script>
export default {
  components: {},
  props: ['text'],
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
p{
    margin: 2.6rem;
    padding-bottom: 1.2rem;
    letter-spacing: 1px;
}
</style>
