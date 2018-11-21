<template>
    <div class="animated fadeIn">
        <ty-title
            :title="title"/>
        <ul>
            <li v-for="item of list" :key="item.index">
                <span class="text">{{ item.name }}</span>
                <span> / </span>
                <span class="date">{{ item.value }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import tyTitle from './ty-title'
export default {
  components: {
      'ty-title': tyTitle
      },
  props: {},
  data () {
    return {
        title: 'Game',
        list: [
            {
                name: '游戏1',
                value: '123 456 789'
            },{
                name: '游戏2',
                value: '123 456 789'
            },{
                name: '游戏3',
                value: '123 456 789'
            },{
                name: '游戏4',
                value: '123 456 789'
            },{
                name: '游戏5',
                value: '123 456 789'
            }
        ]
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
    display: flex;
    flex-direction: column;
    padding: 0;
    ul{
        padding-left: 0;
        li{
            padding: .6rem 0;
        }
    }
}
</style>
