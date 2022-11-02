/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
const state = reactive({})
</script>
<template>
    <div class="app">
        <Header />
        <router-view class="router-view"></router-view>
        <Footer />
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
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
