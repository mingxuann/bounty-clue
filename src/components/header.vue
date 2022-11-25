<script setup>
import { reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { metaMaskVerification } from '@/utils/web3.js'
import { userDoLong } from '@/api/index.js'

const router = useRouter()
const route = useRoute()
const store = useStore()
const state = reactive({
    menuListItem: '/home',
    headerAnmition: true,
    walletPopup: false,
})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const menuList = [
    {
        name: 'Promotion',
        path: '/promotion',
    },
    {
        name: 'Incubator',
        path: '/incubator',
    },
    {
        name: 'Governance',
        path: '/governance',
    },
    {
        name: 'Claim',
        path: '/claim',
    },
]
const routerPush = (item) => {
    state.menuListItem = item.path
    router.push(item.path)
}
const onLogoClick = () => {
    router.push('/home')
}
// window.addEventListener('scroll', function () {
//     if (document.documentElement.scrollTop > 170) {
//         state.headerAnmition = true
//     } else {
//         state.headerAnmition = false
//     }
// })
const onConnectClick = async () => {
    window.open('https://app.bountyclue.com', '_blank')
    // const userDoLongParameter = await metaMaskVerification()
    // store.commit('setAssets', userDoLongParameter.address) // 存入钱包
    // const res = await userDoLong(userDoLongParameter)
    // store.commit('stateWalletToken', res.data.result.token) // 存入Token
}
const openUrl = async (urls) => {
    window.open('https://app.bountyclue.com' + urls, '_blank')
}
</script>

<template>
    <header class="header-box anmition" :class="{ 'anmition-show': state.headerAnmition }">
        <div class="header-box-content">
            <div class="logo-img-box" @click="onLogoClick">
                <img class="logo-img" src="@/assets/image/common/logo.png" alt="" />
                <div class="logo">BOUNYCLUE</div>
            </div>
            <div class="tab-list">
                <div
                    class="tab-item"
                    v-for="item in menuList"
                    :class="{ active: item.path == route.path }"
                    @click="openUrl(item.path)">
                    {{ item.name }}
                </div>
            </div>
            <div class="login-button-box">
                <div class="login-button" @click="onConnectClick">Launch App</div>
            </div>
        </div>
    </header>
</template>

<style lang="less" scoped>
.header-box {
    width: 100%;
    position: relative;
    height: 100px;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 2;
    .header-box-content {
        width: 90vw;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-img-box {
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo-img {
                width: 49px;
                margin-right: 15px;
            }
            .logo {
                font-size: 30px;
                font-weight: 400;
                color: #010101;
                font-weight: 600;
                position: relative;
                top: 3px;
            }
        }

        .tab-list {
            display: flex;
            margin-left: 60px;
            .tab-item {
                margin-left: 44px;
                cursor: pointer;
                font-size: 24px;
                font-family: MicrosoftYaHeiUI;
                color: #010101;
                transition: 0.3s;
                &:hover {
                    color: #c2c4ff;
                }
            }
            .active {
                color: #43378d;
            }
        }
        .login-button-box {
            margin-left: auto;
            position: relative;
            .login-button {
                width: 209px;
                height: 54px;
                background: #f7f6f6;
                border: 1px solid #37388e;
                border-radius: 40px;
                font-size: 24px;
                font-weight: 400;
                color: #010101;
                line-height: 54px;
                text-align: center;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    color: #000;
                    background: #c2c4ff;
                    border: 1px solid #c2c4ff;
                }
            }
        }
    }
}
.anmition {
    position: fixed;
    top: -120px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 12px 1px rgba(106, 106, 106, 0.31);
    transition: 0.5s;
}
.anmition-show {
    top: 0px;
}
@media screen and (max-width: 600px) {
    .login-button {
        display: none;
    }
}
</style>
