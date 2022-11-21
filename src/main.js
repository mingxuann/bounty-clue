import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { getQueryString } from '@/utils/common.js'
import { web3Init, switchChain } from '@/utils/web3.js'

web3Init() // web3初始化
setTimeout(() => {
    switchChain() // 切换网络
}, 1000)
if (getQueryString('code')) {
    store.state.discordCode = getQueryString('code')
    localStorage.setItem('discordCode', getQueryString('code'))
}

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
