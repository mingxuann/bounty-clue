/** * @file * @author 何明暄 */
<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { discordOauthToken } from '@/api/index.js'
const store = useStore()
const state = reactive({})
const discordCode = computed(() => {
    return store.state.discordCode
})
const onGetNftAssets = async () => {
    localStorage.removeItem('discordCode')
    const windowThis = window.open(
        `https://discord.com/oauth2/authorize?response_type=code&client_id=1035082770885648424&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=http://10.7.11.90:5173&prompt=consent`,
        '',
        'width=550,height=800'
    )
    let timer
    timer = setInterval(async () => {
        if (localStorage.getItem('discordCode')) {
            clearInterval(timer)
            windowThis.close()
            await discordOauthToken(localStorage.getItem('discordCode'))
        }
    }, 500)
    // windowThis.close()
    // const res = await getNftAssets()
    // console.log(res)
}
</script>
<template>
    <div class="home-box">
        <img class="home-backgroundb" src="@/assets/image/home/bg-2.png" alt="" />
        <img class="home-backgroundc" src="@/assets/image/home/bg-4.png" alt="" />
        <div class="home-box-detile">
            <p class="letis-smail-titile">Let's Create Great Things</p>
            <div class="group-big-title">
                <p class="span-bag">Group Purchase Of Crypto Assets</p>
                <p class="span-bag show">Group Purchase Of Crypto Assets</p>
            </div>
            <p class="cheaper-smail-titile">
                Cheaper,trade anytime.choose your favorite crypto project to join and enjoy profits.
            </p>
            <div class="know-more">Claim</div>
            <div class="iconfont-list-hade">
                <i class="iconfont icon-medium"></i>
                <i class="iconfont icon-twitter-fill"></i>
                <i class="iconfont icon-github-fill"></i>
                <i class="iconfont icon-discord" @click="onGetNftAssets"></i>
            </div>
            <p class="features">Features</p>
            <p class="the-formal-stuff">The Formal Stuff</p>
            <div class="promotion">
                <span class="promotion-title">PROMOTION</span>
                <span class="percentage">'- 50%'</span>
                <p class="multi-chain-box">
                    <span class="multi-chain">.Multi-Chain.</span>
                    <span class="largest">Largest Discount By</span>
                </p>
                <p class="no-limit">No Limit On Transactions</p>
                <p class="threshold">
                    No threshold is required to participate in <br />
                    crypto asset promotions.
                </p>
                <div class="explore">Explore</div>
            </div>
            <div class="incubator-card-box">
                <div class="incubator-card">
                    <span>INCUBATOR</span>
                </div>
                <div class="incubator-explain">
                    <div class="text">
                        Infinitely Close To <br />
                        <span>'0'</span> Lock-in Period And Determine The Growth Rate.
                    </div>
                    <div class="button">Get Start</div>
                </div>
            </div>
            <div class="incubator-card-box">
                <div class="incubator-explain">
                    <div class="text">High APY Is Determined By The Chess Rules, Try it out.</div>
                    <div class="button">Stake Now</div>
                </div>
                <div class="incubator-card card-right">
                    <p>STAKE</p>
                </div>
            </div>
            <p class="features">Subscribe</p>
            <p class="the-formal-stuff">Get The Latest News</p>
        </div>
        <div class="mail-box">
            <div class="mail-content">
                <input class="mail-content-input" placeholder="example@gmail.com" type="text" />
                <img class="mail-content-send" src="@/assets/image/home/sendbtn.png" alt="" />
            </div>
            <p class="leave-your-email">
                Leave your email and we will send you the latest project information.
            </p>
        </div>
    </div>
</template>
<style lang="less">
.home-box {
    position: relative;
    .home-backgroundb {
        width: 621px;
        height: 1239px;
        position: absolute;
        top: 401px;
        left: 0;
    }
    .home-backgroundc {
        width: 100%;
        position: absolute;
        opacity: 0.9;
        bottom: -570px;
        left: 0;
    }
    .home-box-detile {
        width: 1606px;
        margin: auto;
        position: relative;
        .letis-smail-titile {
            font-size: 26px;
            font-weight: 400;
            color: #383089;
            text-align: center;
            padding-top: 260px;
            font-weight: 600;
        }
        .group-big-title {
            width: 1606px;
            height: 342px;
            text-align: center;
            margin-top: 50px;
            position: relative;
            .span-bag {
                font-size: 150px;
                font-family: SpaceMono;
                font-weight: 600;
                color: #010101;
                line-height: 200px;
                text-shadow: 0px 15px 14px rgba(0, 0, 0, 0.35);
                position: absolute;
                background: linear-gradient(to right, #0808d7, #bb08c2);
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
            }
            .show {
                font-size: 150px;
                color: #010101;
                font-weight: 500;
            }
        }
        .cheaper-smail-titile {
            font-size: 26px;
            font-weight: 400;
            color: #656468;
            text-align: center;
            margin-top: 120px;
        }
        .know-more {
            width: 305px;
            height: 75px;
            background: #f7f6f6;
            border: 1px solid #8d4591;
            border-radius: 30px;
            font-size: 36px;
            font-weight: 600;
            color: #010101;
            margin: auto;
            color: #010101;
            text-align: center;
            line-height: 75px;
            margin-top: 86px;
        }
        .iconfont-list-hade {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 34px;
            .iconfont {
                font-size: 70px;
                color: #010101;
                margin-left: 28px;
                cursor: pointer;
            }
        }
        .features {
            font-size: 30px;
            font-weight: 600;
            color: #383089;
            text-align: center;
            margin-top: 300px;
        }
        .the-formal-stuff {
            font-size: 48px;
            font-weight: 400;
            color: #858585;
            margin-top: 40px;
            text-align: center;
            font-family: SpaceMono;
        }
        .promotion {
            width: 100%;
            height: 902px;
            margin: auto;
            margin-top: 73px;
            padding-top: 107px;
            padding-left: 89px;
            box-sizing: border-box;
            background: url('../assets/image/home/promtion-bg.png');
            background-size: 100% 100%;
            position: relative;
            .promotion-title {
                font-family: SpaceMono;
                font-size: 72px;
                font-weight: 400;
                color: #010101;
            }
            .percentage {
                font-size: 176px;
                font-family: Impact;
                font-weight: 400;
                color: transparent;
                position: absolute;
                top: 140px;
                right: 85px;
                // text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                background-image: linear-gradient(to bottom right, #4e09d9, #b059e7);
                background-clip: text;
                -webkit-background-clip: text;
            }
            .multi-chain-box {
                display: flex;
                align-items: center;
                margin-top: 30px;
                padding-left: 30px;
                box-sizing: border-box;
                .multi-chain {
                    font-size: 48px;
                    // font-family: Impact;
                    font-weight: 600;
                    color: #95a0f2;
                    text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                }
                .largest {
                    font-size: 56px;
                    font-family: MicrosoftYaHeiUI;
                    font-weight: 600;
                    color: #040119;
                    text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                    margin-left: 30px;
                }
            }
            .no-limit {
                font-size: 55px;
                font-weight: 600;
                color: #0117bf;
                text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                padding-left: 40px;
                box-sizing: border-box;
            }
            .threshold {
                font-size: 28px;
                font-weight: 400;
                color: #585859;
                margin-top: 60px;
                padding-left: 160px;
                box-sizing: border-box;
            }
            .explore {
                width: 432px;
                height: 84px;
                font-size: 36px;
                font-family: SpaceMono;
                font-weight: 400;
                color: #050000;
                text-align: center;
                line-height: 84px;
                background: url('../assets/image/home/getstart.png');
                background-size: 100% 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 70px;
            }
        }
        .incubator-card-box {
            display: flex;
            justify-content: space-between;
            .incubator-card {
                width: 658px;
                height: 933px;
                background: url('../assets/image/home/incubator.png');
                background-size: 100% 100%;
                margin-top: 165px;
                padding: 43px 58px;
                box-sizing: border-box;
                position: relative;
                span {
                    font-size: 60px;
                    font-weight: 400;
                    color: #010101;
                    font-family: SpaceMono;
                    position: absolute;
                    bottom: 60px;
                    right: 90px;
                }
            }
            .card-right {
                background: url('../assets/image/home/stake.png');
                background-size: 100% 100%;
                .stake-rocketb {
                    width: 400px;
                    position: absolute;
                    top: 50%;
                    left: 55%;
                    transform: translate(-50%, -50%);
                }
                p {
                    width: 1px;
                    height: 200px;
                    position: absolute;
                    top: 380px;
                    left: 60px;
                    font-weight: 400;
                    color: #010101;
                    font-family: SpaceMono;
                    word-wrap: break-word;
                    line-height: 93px;
                    font-size: 82px;
                    text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                }
            }
            .incubator-explain {
                width: 740px;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                .text {
                    line-height: 110px;
                    font-size: 66px;
                    font-family: FranklinGothic;
                    font-weight: 600;
                    color: #010101;
                    text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
                    margin-bottom: 100px;
                    span {
                        color: #1010d9;
                        font-size: 150px;
                        font-weight: 700;
                    }
                }
                .button {
                    width: 702px;
                    height: 136px;
                    font-size: 59px;
                    font-family: SpaceMono;
                    font-weight: 400;
                    color: #050000;
                    text-align: center;
                    line-height: 136px;
                    background: url('../assets/image/home/getstart.png');
                    background-size: 100% 100%;
                    margin-bottom: 100px;
                }
            }
        }
    }
    .mail-box {
        width: 100%;
        height: 369px;
        background: url('../assets/image/home/subscribe-bg.png');
        background-size: 100% 100%;
        position: relative;
        margin-top: 76px;
        display: flex;
        align-items: center;
        padding-left: 160px;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 20px;
        .mail-content {
            width: 789px;
            height: 110px;
            background: url('../assets/image/home/email.png');
            background-size: 100% 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .mail-content-input {
                height: 60px;
                width: 460px;
                position: relative;
                top: -14px;
                left: 40px;
                font-size: 35px;
                background: none;
                outline: none;
                border: none;
                &::placeholder {
                    color: #aeacac;
                }
            }
            .mail-content-send {
                width: 169px;
                height: 78px;
                position: relative;
                top: -11px;
                left: -17.5px;
            }
        }
        .leave-your-email {
            font-size: 30px;
            font-weight: 400;
            color: #878484;
            position: absolute;
            bottom: 70px;
            left: 180px;
        }
    }
}
</style>
