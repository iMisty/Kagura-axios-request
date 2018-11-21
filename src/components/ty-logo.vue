<template>
    <div>
        <img :src="imgUrl" alt="avatar">
    </div>
</template>

<script>
export default {
  components: {},
  props: ['imgUrl'],
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
div{
    border-radius: 100%;
    width: 160px;
    height: 160px;
    margin: 1.2rem auto;
    @media screen and (max-width: 770px) {
        max-height: 100px;
    }
    img{
        border: 6px solid #fff;
        border-radius: 100%;
        max-width: 148px;
        max-height: 148px;
        @media screen and (max-width: 770px) {
            width: 100px;
        }
    }
}
</style>
