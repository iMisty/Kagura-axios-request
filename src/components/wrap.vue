<template>
<div class="container">
    <section class="left">
      <logo :imgUrl="avatar"/>
      <div class="list">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/archive">Archives</router-link></li>
        <li><router-link to="/game">Game</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </div>
    </section>
    <section class="right">
      <router-view></router-view>
    </section>
</div>
</template>

<script>
import Logo from './logo'
import avatar from '@/static/avatar.png'
export default {
  components: {
      'logo':Logo
  },
  props: {},
  data () {
    return {
        avatar
    }
  }
}
</script>
<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: row;
    width: 48rem;
    height: 32rem;
    box-shadow: 4px 4px 20px rgba(0,0,0,.4);
    @media screen and (min-width: 770px) {
        display: flex;
        flex-direction: row;
        text-align: center;
        width: 48rem;
        height: 32rem;
    }
    @media screen and (max-width: 770px) {
        display: flex;
        flex-direction: column;
        margin: 2.4rem;
        width: 96%;
        height: 100%;
    }
    .left{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1.2rem;
        background-color: rgba(66,200,244,.6);
        @media screen and (min-width: 770px) {
            width: 24%;
            border-radius: 10px 0 0 10px;
            padding: 1.2rem;
        }
        @media screen and (max-width: 770px) {
            border-radius: 10px 10px 0 0;
        }
        .list{
            display: flex;
            flex-direction: column;
            @media screen and (min-width: 770px) {
                border-radius: 10px;
            }
            @media screen and (max-width: 770px) {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding-top: 1.6rem;
                width: 100%;
            }
            li{
                list-style-type: none;
                padding: .8rem 0;
                a{
                    padding: .8rem 0;
                    color: rgba(248,248,248,.8);
                }
            }

        }
    }
    .right{
        flex-direction: column;
        flex: 1;
        text-align: center;
        background-color: rgba(248,248,248,.68);
        @media screen and (min-width: 770px) {
            border-radius: 0 10px 10px 0;
        }
        @media screen and (max-width: 770px) {
            border-radius: 0 0 10px 10px;
        }
    }
}
</style>
