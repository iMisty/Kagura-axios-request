<template>
<div class="animated fadeIn">
    <about-title>About</about-title>
    <about-text>像是心在圣洁的羽翼之中坠入了明澈而又辽远的海，亦或是遥远不可及的苍穹，那里有无数璀璨的繁星。有人在上方光辉闪耀的地方唱一只琉璃色的歌曲，将纯净清澈的梦引向东方，流星为不归之人陨落，花朵为已逝之人悲伤的开放。我在寂静之中诞生，在寂静之中归去。万物美好，而你，在中央。</about-text>
</div>
</template>

<script>
import title from './title'
import text from './text'
export default {
    components: {
        'about-title':title,
        'about-text':text
    },
    props: {},
    // data () {
    //     return {
    //         title: 'About',
    //         text: '像是心在圣洁的羽翼之中坠入了明澈而又辽远的海，亦或是遥远不可及的苍穹，那里有无数璀璨的繁星。有人在上方光辉闪耀的地方唱一只琉璃色的歌曲，将纯净清澈的梦引向东方，流星为不归之人陨落，花朵为已逝之人悲伤的开放。我在寂静之中诞生，在寂静之中归去。万物美好，而你，在中央。'
    //     }
    // }
}
</script>
<style lang="less" scoped>
div{
    display: flex;
    flex-direction: column;
    padding: 0;
    p{
        margin: 2.6rem;
        padding-bottom: 1.2rem;
        letter-spacing: 1px;
    }
}
</style>
