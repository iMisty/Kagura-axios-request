<template>
    <a :href="link" target="_blank">
        <i class="fa fa-3x" :class="icon"></i>
        <p>{{text}}</p>
    </a>
</template>

<script>
export default {
  props: ['text','link','icon']
}
</script>
<style lang="less" scoped>
a{
    width: 32%;
    padding: 1.2em 0;
    transition: .4s;
    &:hover{
        transform: scale(1.2);
        transition: .4s;    
    }
}
</style>
