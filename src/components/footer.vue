/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
const openUrl = (link) => {
    window.open(link, '_blank')
}
</script>
<template>
    <div class="footer">
        <div class="footer-box">
            <div class="footer-item">
                <p class="privacy-pollcy">Privacy Policy &nbsp;|&nbsp; Terms & Conditions</p>
                <p class="privacy-pollcyb">BonutyClue © 2022. All right reserved.</p>
            </div>
            <div class="footer-item">
                <div class="iconfont-list">
                    <i
                        class="iconfont icon-medium"
                        @click="openUrl('https://bountyclue.medium.com')"></i>
                    <i
                        class="iconfont icon-twitter-fill"
                        @click="openUrl('https://twitter.com/BountyClue')"></i>
                    <i
                        class="iconfont icon-discord"
                        @click="openUrl('https://discord.gg/dcaG4cFex3')"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
    height: 100px;
    background-color: #000;
    box-shadow: 0px 4px 12px 1px rgba(106, 106, 106, 0.31);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .footer-box {
        width: 95vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .footer-item {
        .privacy-pollcy {
            font-size: 16px;
            color: #fff;
        }
        .privacy-pollcyb {
            font-size: 16px;
            font-weight: 500;
            font-style: italic;
            color: #656468;
            margin-top: 5px;
            color: #fff;
        }
        .iconfont-list {
            display: flex;
            align-items: center;
            .iconfont {
                font-size: 40px;
                margin-left: 16px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}
@media screen and (max-width: 600px) {
    .privacy-pollcy {
        display: none;
    }
}
</style>
