<template>
<div class="animated fadeIn">
        <home-title>Yukaric Fes</home-title>
        <section class="items">
        <button-link
            v-for="item of list" 
            :key="item.index"
            :icon="item.icon"
            :link="item.link" 
            :text="item.value"/>
        </section>
    </div>
    </template>

<script>
    import Title from './title'
    import buttonLink from './button-link'
    export default {
    components: {
        'button-link': buttonLink,
        'home-title': Title
    },
    props: [],
    data () {
        return {
        list: [
            {
            icon: 'fa-home',
            link: 'https://yukarin.me',
            value: 'Home'
            },{
            icon: 'fa-github',
            link: 'https://github.com/Miya-Yukarin',
            value: 'GitHub'
            },{
            icon: 'fa-terminal',
            link: 'https://blog.yukarin.me',
            value: 'Blog'
            },{
            icon: 'fa-envelope-o',
            link: 'mailto:konmai@foxmail.com',
            value: 'E-Mail'
            },{
            icon: 'fa-paper-plane-o',
            link: 'https://blog.shizu17.pw/?p=5',
            value: 'SS'
            },{
            icon: 'fa-magic',
            link: 'https://miya-yukarin.github.io/Yukarin-Carnvial-HomePage/',
            value: 'Another World'
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
        text-align: center;
        flex: 1;
        header{
        margin-top: 2.4rem;
        }
        .items{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        margin-top: 1.6rem;
        padding-bottom: 1.2rem;
        }
    }
</style>
