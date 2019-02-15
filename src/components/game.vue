<template>
    <div class="animated fadeIn">
        <game-title>Game</game-title>
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
import Title from './title'
export default {
  components: {
      'game-title': Title
      },
  props: {},
  data () {
    return {
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
