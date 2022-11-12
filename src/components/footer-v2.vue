/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="footer">
        <div class="footer-item">
            <p class="privacy-pollcy">Privacy Policy &nbsp; Terms &Conditions</p>
            <p class="privacy-pollcyb">BonutyClue © 2022. All right reserved.</p>
        </div>
        <div class="footer-item">
            <div class="iconfont-list">
                <a href="">
                    <i class="iconfont icon-medium"></i>
                </a>
                <a href="https://twitter.com/BountyClue" target="_blank">
                    <i class="iconfont icon-twitter-fill"></i>
                </a>
                <a href="">
                    <i class="iconfont icon-github-fill"></i>
                </a>
                <a href="">
                    <i class="iconfont icon-discord"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
    width: 1920px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 12px 1px rgba(106, 106, 106, 0.31);
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 115px;
    box-sizing: border-box;
    .footer-item {
        .privacy-pollcy {
            font-size: 20px;
            font-weight: 600;
            color: #000000;
        }
        .privacy-pollcyb {
            font-size: 18px;
            font-weight: 500;
            font-style: italic;
            color: #656468;
            margin-top: 5px;
        }
        .iconfont-list {
            .iconfont {
                font-size: 40px;
                margin-left: 16px;
            }
        }
    }
}
</style>
