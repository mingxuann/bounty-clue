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
        name: 'Stake',
        path: '/stake',
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
    const userDoLongParameter = await metaMaskVerification()
    store.commit('setAssets', userDoLongParameter.address) // 存入钱包
    const res = await userDoLong(userDoLongParameter)
    store.commit('stateWalletToken', res.data.result.token) // 存入Token
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
                    @click="routerPush(item)">
                    {{ item.name }}
                </div>
            </div>
            <div class="login-button-box">
                <div class="login-button" v-if="!assets" @click="onConnectClick">Launch App</div>
                <div class="login-button" v-else>{{ assetsShow }}</div>
                <div class="wallet-details" v-if="state.walletPopup">
                    <div class="wallet-details-matemake matemake-show">
                        <img class="mate-logo" src="@/assets/image/common/meta-mask.png" alt="" />
                        <span class="metamask-text">MetaMask</span>
                        <i class="iconfont icon-roundcheckfill"></i>
                    </div>
                    <div class="wallet-details-matemake log-out">
                        <i class="iconfont icon-dengchu-box-r-xian"></i>
                        <span class="metamask-text">Log out</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="less" scoped>
.home-backgrounda {
    width: 1100px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.9;
    z-index: -1;
}
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
        width: 1700px;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-img-box {
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo-img {
                width: 49px;
                height: 49px;
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
            }
            .wallet-details {
                width: 420px;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 10px;
                position: absolute;
                top: 70px;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                padding: 40px 20px;
                box-sizing: border-box;
                .wallet-details-matemake {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin: 26px 0;
                    padding: 16px 30px;
                    box-sizing: border-box;
                    .mate-logo {
                        width: 50px;
                    }
                    .metamask-text {
                        font-size: 26px;
                        color: #333;
                        margin-left: 40px;
                    }
                    .icon-roundcheckfill {
                        font-size: 36px;
                        color: #30c87c;
                        margin-left: 80px;
                    }
                    .icon-dengchu-box-r-xian {
                        width: 50px;
                        text-align: center;
                        font-size: 36px;
                        color: #333;
                    }
                }
                .matemake-show {
                    background-color: rgb(195, 195, 195);
                    border-radius: 14px;
                }
                .log-out {
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        color: #7b35e0;
                    }
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
