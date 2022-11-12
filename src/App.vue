/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import HeaderV2 from '@/components/header-v2.vue'
import FooterV2 from '@/components/footer-v2.vue'
const state = reactive({})
</script>
<template>
    <div class="app">
        <HeaderV2 />
        <router-view class="router-view"></router-view>
        <FooterV2 />
    </div>
</template>
<style lang="less">
@import './assets/iconfont/iconfont.css';
@font-face {
    font-family: SpaceMono;
    src: url('./assets/iconfont/SPACEMONO-BOLD.TTF');
}
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: #000;
}
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
