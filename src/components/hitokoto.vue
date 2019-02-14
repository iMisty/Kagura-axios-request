<template>
  <p id="hitokoto">获取中...</p>
</template>

<script>
export default {
  components: {},
  props: [],
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
#hitokoto{
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,.28);
    @media screen and (max-width: 770px) {
        width: 84%;
        text-align: center;
        padding-bottom: 1.2rem;
    }
  }
</style>
