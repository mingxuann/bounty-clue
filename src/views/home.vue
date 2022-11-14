/** * @file * @author 何明暄 */
<script setup>
import { reactive, onMounted } from 'vue'
const state = reactive({})
onMounted(() => {
    setInterval(() => {
        changeState()
    }, 1000)
})

const random = (min, max) => Math.floor(min + Math.random() * (max - min))
const remain = (n) => 100 - n
const changeState = () => {
    const blobList = document.querySelectorAll('.blob')
    create(blobList[random(0, blobList.length)])
    // for (const iterator of blobList) {
    //     create(iterator)
    // }
}
let offset = 25
const create = (blob) => {
    let r = []
    for (let i = 0; i < 4; i++) {
        let n = random(offset, remain(offset))
        r.push(n)
        r.push(remain(n))
    }
    let coordinates = `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[6]}% ${r[7]}% ${r[5]}%`
    blob.style.borderRadius = coordinates
    blob.style.setProperty('--r', `${random(0, 20)}deg`)
}
</script>
<template>
    <div class="home-box">
        <div class="home-content">
            <div class="home-page home-pagea">
                <div class="switch-right">
                    <i class="iconfont icon-xiangyouliangci"></i>
                </div>
                <div class="blob random-shapea"></div>
                <div class="blob random-shapeb"></div>
                <div class="blob random-shapec"></div>
                <div class="blob random-shaped"></div>
                <div class="blob random-shapee"></div>
                <div class="blob random-shapef"></div>
                <div class="bountyclue-box">
                    <p class="bountyclue-title">BOUNTYCLUE</p>
                    <div class="bountyclue-line"></div>
                    <p class="bountyclue-smail-title">Group Purchase Of Crypto Assets</p>
                    <div class="button-box">
                        <div class="start-on" @click="changeState">Start On</div>
                        <div class="start-on">
                            Know More
                            <i class="iconfont icon-fenxiang"></i>
                        </div>
                    </div>
                    <div class="iconfont-list-hade">
                        <i class="iconfont icon-medium"></i>
                        <i class="iconfont icon-twitter-fill"></i>
                        <i class="iconfont icon-github-fill"></i>
                        <i class="iconfont icon-discord" @click="onGetNftAssets"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.home-box {
    width: calc(100vw - var(--scrollbar));
    height: 100vh;
    overflow: hidden;
    .home-content {
        width: 200vw;
        height: 100vh;
        background: #ededed;
        .home-page {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
        .home-pagea {
            .switch-right {
                position: absolute;
                right: 80px;
                bottom: 40px;
                z-index: 1;
                .icon-xiangyouliangci {
                    font-size: 46px;
                    color: #000;
                }
            }
            .blob {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 300px;
                height: 300px;
                background: linear-gradient(86deg, #ffffff, #f2f1f1, #cecece);
                box-shadow: 0px 29px 48px 0px rgba(162, 161, 161, 0.32);
                border-radius: 50%;
                transform: rotate(var(--r, 0));
                transition: ease 800ms;
            }
            .random-shapea {
                width: 700px;
                height: 700px;
                top: -20%;
                left: 2%;
            }
            .random-shapeb {
                width: 300px;
                height: 300px;
                top: 20%;
                left: 52%;
            }
            .random-shapec {
                width: 880px;
                height: 800px;
                top: 41%;
                left: 76%;
            }
            .random-shaped {
                width: 450px;
                height: 450px;
                top: 40%;
                left: 25%;
            }
            .random-shapee {
                width: 590px;
                height: 590px;
                top: 45%;
                left: -17%;
            }
            .random-shapef {
                width: 1047px;
                height: 650px;
                top: 80%;
                left: 30%;
            }
            .bountyclue-box {
                position: absolute;
                top: 50%;
                left: 18%;
                transform: translateY(-50%);
                .bountyclue-title {
                    font-size: 68px;
                    font-family: Sitka;
                    font-weight: normal;
                    color: #545456;
                    line-height: 84px;
                    text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.31);
                }
                .bountyclue-line {
                    width: 370px;
                    height: 4px;
                    background-color: #525053;
                    box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.31);
                    margin: 35px 0;
                    margin-left: 230px;
                }
                .bountyclue-smail-title {
                    font-size: 30px;
                    font-family: SpaceMono;
                    font-weight: 400;
                    color: #000005;
                    text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.31);
                }
                .button-box {
                    display: flex;
                    margin-top: 65px;
                    .start-on {
                        padding: 20px 50px;
                        border: 2px solid #454545;
                        box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.31);
                        border-radius: 45px;
                        margin-right: 30px;
                        font-size: 28px;
                        font-weight: 600;
                        color: #010101;
                        display: flex;
                        align-items: center;
                        .icon-fenxiang {
                            font-size: 32px;
                            margin-left: 14px;
                        }
                    }
                }
                .iconfont-list-hade {
                    margin-top: 39px;
                    .iconfont {
                        font-size: 80px;
                        margin-right: 50px;
                        text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.31);
                    }
                }
            }
        }
    }
}
</style>
