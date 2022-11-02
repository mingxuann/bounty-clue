/** * @file * @author 何明暄 */
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
    <footer class="footer">
        <img class="home-backgroundb" src="@/assets/image/home/bg-4.png" alt="" />
        <img
            class="home-backgroundc"
            src="@/assets/image/home/bg-3.png"
            v-if="route.path === 'home'" />
        <div class="footer-logo-box">
            <div class="logo-image">
                <img class="img-this" src="@/assets/image/home/logo.png" alt="" />
                <span class="title-this">BOUNTYCLUE</span>
            </div>
            <p class="description-body">
                BountyClue is designed to help crypto investors to buy crypto assets at cheaper
                prices, investors can get a shorter release cycle.It aims to help the project party
                get more real crypto investment users. Facilitate the liquidity and trading volume
                of crypto assets.
            </p>
        </div>
        <div class="footer-left-box">
            <div class="privacy active">Privacy Policy</div>
            <div class="privacy">Terms & Conditions</div>
            <div class="iconfont-list">
                <div class="iconfont-list-show">
                    <i class="iconfont icon-medium"></i>
                    <i class="iconfont icon-twitter-fill"></i>
                    <i class="iconfont icon-github-fill"></i>
                    <i class="iconfont icon-discord"></i>
                </div>
                <span class="bonuty-clue">BountyClue © 2022. All right reserved.</span>
            </div>
        </div>
    </footer>
</template>
<style lang="less" scoped>
.footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 100px 102px;
    box-sizing: border-box;
    background: transparent;
    padding-bottom: 40px;
    .home-backgroundb {
        width: 100%;
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: -1;
    }
    .home-backgroundc {
        width: 792px;
        position: absolute;
        opacity: 0.9;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
    .footer-logo-box {
        display: flex;
        flex-direction: column;
        .logo-image {
            display: flex;
            align-items: center;
            .img-this {
                width: 60px;
                height: 60px;
            }
            .title-this {
                font-size: 26px;
                font-family: MicrosoftYaHeiUI;
                font-weight: 600;
                color: #010101;
                line-height: 176px;
                opacity: 0.89;
                text-shadow: 0px 9px 6px rgba(0, 0, 0, 0.4);
                margin-left: 10px;
            }
        }
        .description-body {
            width: 563px;
            font-size: 24px;
            font-weight: 400;
            color: #050505;
        }
    }
    .footer-left-box {
        display: flex;
        align-items: flex-end;
        .privacy {
            margin-right: 41px;
            font-size: 24px;
            font-weight: 600;
        }
        .active {
            color: #43378d;
        }
        .iconfont-list {
            .iconfont-list-show {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 28px;
                .iconfont {
                    font-size: 60px;
                    color: #010101;
                    margin-left: 28px;
                }
            }
            .bonuty-clue {
                font-size: 24px;
                font-weight: 400;
                font-style: italic;
                color: #656468;
            }
        }
    }
}
</style>
