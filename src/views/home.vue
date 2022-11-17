/** * @file * @author 何明暄 */
<script setup>
import { reactive, onMounted } from 'vue'
import { discordOauthToken } from '@/api/index.js'
const state = reactive({
    pages: 0,
})
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
const onGetNftAssets = async () => {
    localStorage.removeItem('discordCode')
    const windowThis = window.open(
        `https://discord.com/oauth2/authorize?response_type=code&client_id=1035082770885648424&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=${
            import.meta.env.VITE_REQUEST_URL
        }&prompt=consent`,
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
}
const onNextPage = (nexts) => {
    if (nexts === -1 && state.pages === 0) return
    if (nexts === 1 && state.pages === 4) return
    state.pages = state.pages + nexts
}
</script>
<template>
    <div class="home-box">
        <div class="switch-right" @click="onNextPage(+1)">
            <i class="iconfont icon-xiangyouliangci"></i>
        </div>
        <div class="switch-left" @click="onNextPage(-1)">
            <i class="iconfont icon-xiangyouliangci"></i>
        </div>
        <div class="home-content" :style="{ left: state.pages * -100 + 'vw' }">
            <div class="home-page home-pagea">
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
            <div class="home-page home-pageb">
                <img class="pageb-bga" src="@/assets/image/home/pageb-bg.png" />
                <img class="pageb-bgb" src="@/assets/image/home/pageb-bg.png" />
                <div class="bounty-clue-box">
                    <div class="bounty-clue-biake">BountyClue</div>
                    <div class="bounty-clue-about">
                        <span class="about-titile">About</span>
                        <span class="creating">
                            Creating something great is actually quite simple.
                        </span>
                    </div>
                    <div class="bounty-clue-forin">
                        <h1 class="title-project">For Investor</h1>
                        <div class="lt-aims">
                            BonutvClue integrates multi-chain<br />
                            ecological projects. <br />lt is designed to help crypto investorsto<br />
                            buy crypto assets at cheaper prices.
                        </div>
                    </div>
                    <div class="bounty-clue-forin">
                        <h1 class="title-project">For Project</h1>
                        <div class="lt-aims">
                            lt aims to help the project party getmore <br />
                            real crypto investment users.Facilitate <br />the liquidity and trading
                            <br />
                            volume of crypto assets.
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-page home-pagec">
                <div>
                    <div class="promotion-box">
                        <div class="promotion-featu">
                            <p class="promotiona">Promotion</p>
                            <p class="promotionb">Features</p>
                        </div>
                        <div class="promotion-featu">
                            <div class="providing">
                                providing a solution for crypto investors to create group buying of
                                crypto assets.
                            </div>
                            <div class="start-on">START ON</div>
                        </div>
                    </div>
                    <div class="currency-display">
                        <img class="pagec-promo" src="@/assets/image/home/pagec-promo.png" />
                        <div class="pagec-promo-black">
                            <div class="white"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-page home-paged">
                <div class="incubator-box">
                    <p class="incubator-title">Incubator</p>
                    <p class="incubator-mini">Features</p>
                    <p class="incubator-dash">《《《《《《《《《《《《《《《《《《《《《《《</p>
                    <div class="design-on-box">
                        <div class="design-on">
                            <div class="design-ona">
                                As a link between encrypted investors and project parties,
                                BanutyClue will focus on incubating some projects that are
                                recognized by users. We hope that this move will deepen the dose
                                cooperation between investors and project parties, and drive project
                                growth through the community
                            </div>
                            <div class="design-onb">DESIGN ON</div>
                        </div>
                        <div class="brand-box">
                            <div class="brand-item">
                                <div class="brand-itema">BRAND</div>
                                <div class="brand-itemb"></div>
                                <div class="brand-itemc">
                                    The lamination teach with method rest.The on end.
                                </div>
                            </div>
                            <div class="brand-item">
                                <div class="brand-itema">BRAND</div>
                                <div class="brand-itemb"></div>
                                <div class="brand-itemc">
                                    The lamination teach with method rest.The on end.
                                </div>
                            </div>
                            <div class="brand-item">
                                <div class="brand-itema">BRAND</div>
                                <div class="brand-itemb"></div>
                                <div class="brand-itemc">
                                    The lamination teach with method rest.The on end.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-page home-pagee">
                <img class="pageb-bga" src="@/assets/image/home/pageb-bg.png" />
                <img class="pageb-bgb" src="@/assets/image/home/pageb-bg.png" />
                <div>
                    <p class="road-map">RoadMap</p>
                    <p class="lamination">
                        The lamination teaching method rest. The lamination teaching. The lamination
                        teaching method rest.
                    </p>
                    <img class="pagee-qn" src="@/assets/image/home/pagee-qn.png" />
                    <div class="the-lamination-box">
                        <div class="the-lamination-item">
                            <div class="dian-box">
                                <div class="dian"></div>
                                <div class="diana">1</div>
                            </div>
                            <p class="laminationtt">
                                The lamination teaching method rest. lamination
                            </p>
                        </div>
                        <div class="the-lamination-item">
                            <div class="dian-box">
                                <div class="dian"></div>
                                <div class="diana">2</div>
                            </div>
                            <p class="laminationtt">
                                The lamination teaching method rest. lamination
                            </p>
                        </div>
                        <div class="the-lamination-item">
                            <div class="dian-box">
                                <div class="dian"></div>
                                <div class="diana">3</div>
                            </div>
                            <p class="laminationtt">
                                The lamination teaching method rest. lamination
                            </p>
                        </div>
                        <div class="the-lamination-item">
                            <div class="dian-box">
                                <div class="dian"></div>
                                <div class="diana">4</div>
                            </div>
                            <p class="laminationtt">
                                The lamination teaching method rest. lamination
                            </p>
                        </div>
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
    position: relative;
    overflow: hidden;
    .switch-right {
        position: absolute;
        right: 80px;
        bottom: 40px;
        z-index: 1;
        cursor: pointer;
        .icon-xiangyouliangci {
            font-size: 46px;
            color: #000;
        }
    }
    .switch-left {
        position: absolute;
        left: 80px;
        bottom: 30px;
        z-index: 1;
        cursor: pointer;
        transform: rotate(180deg);
        .icon-xiangyouliangci {
            font-size: 46px;
            color: #000;
        }
    }
    .home-content {
        width: 500vw;
        height: 100vh;
        transition: 0.8s;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        .home-page {
            width: 100vw;
            height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: 100px;
            box-sizing: border-box;
        }
        .home-pagea {
            background: #ededed;
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
        .home-pageb {
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            .pageb-bga {
                width: 826px;
                height: 247px;
                position: absolute;
                top: 100px;
                right: 0;
            }
            .pageb-bgb {
                width: 826px;
                position: absolute;
                bottom: 0px;
                left: 0;
                transform: rotate(180deg);
            }
            .bounty-clue-box {
                width: 1200px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .bounty-clue-biake {
                    width: 540px;
                    height: 154px;
                    background: #262626;
                    line-height: 154px;
                    text-align: center;
                    font-size: 56px;
                    font-weight: 400;
                    color: #ffffff;
                }
                .bounty-clue-about {
                    width: 540px;
                    height: 154px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    .about-titile {
                        font-size: 36px;
                        font-weight: 400;
                        color: #262626;
                    }
                    .creating {
                        font-size: 21px;
                        font-weight: 400;
                        color: #262626;
                        margin-top: 14px;
                    }
                }
                .bounty-clue-forin {
                    width: 540px;
                    height: 340px;
                    background: rgba(38, 38, 38, 0);
                    border: 2px solid #6a6a6a;
                    border-radius: 24px;
                    margin-top: 103px;
                    color: #262626;
                    padding: 40px 40px;
                    box-sizing: border-box;
                    .title-project {
                        font-size: 26px;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .lt-aims {
                        font-size: 24px;
                        line-height: 46px;
                        text-align: center;
                    }
                }
            }
        }
        .home-pagec {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .promotion-box {
                width: 1200px;
                margin: auto;
                display: flex;
                justify-content: space-between;
                .promotion-featu {
                    width: 488px;
                    .promotiona {
                        font-size: 52px;
                        font-weight: 400;
                        color: #494949;
                    }
                    .promotionb {
                        font-size: 28px;
                        font-weight: 400;
                        color: #494949;
                    }
                    .providing {
                        font-family: Aparajita;
                        font-size: 22px;
                        color: #161616;
                        padding-left: 14px;
                        line-height: 36px;
                    }
                    .start-on {
                        width: 488px;
                        height: 54px;
                        background: #3c3c3c;
                        border-radius: 27px;
                        font-size: 18px;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 54px;
                        padding-left: 36px;
                        box-sizing: border-box;
                        margin-top: 16px;
                    }
                }
            }
            .currency-display {
                display: flex;
                justify-content: space-between;
                width: 1200px;
                margin: auto;
                margin-top: 79px;
                .pagec-promo {
                    width: 822px;
                }
                .pagec-promo-black {
                    width: 294px;
                    height: 350px;
                    background: #262626;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 18px;
                    .white {
                        width: 130px;
                        height: 130px;
                        border-radius: 50%;
                        background-color: #fff;
                    }
                }
            }
        }
        .home-paged {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .incubator-box {
                width: 1200px;
                .incubator-title {
                    font-size: 52px;
                    font-weight: 400;
                    color: #494949;
                }
                .incubator-mini {
                    font-size: 28px;
                    font-weight: 400;
                    color: #494949;
                }
                .incubator-dash {
                    font-size: 20px;
                    font-weight: 400;
                    color: #494949;
                    position: relative;
                    left: -10px;
                    margin-top: 26px;
                }
                .design-on-box {
                    width: 1200px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 40px;
                    .design-on {
                        .design-ona {
                            width: 480px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #3c3c3c;
                            line-height: 32px;
                            margin-top: 15px;
                            padding-left: 5px;
                            box-sizing: border-box;
                        }
                        .design-onb {
                            width: 478px;
                            height: 54px;
                            background: #3c3c3c;
                            border-radius: 27px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 54px;
                            padding-left: 36px;
                            box-sizing: border-box;
                            margin-top: 36px;
                        }
                    }
                    .brand-box {
                        display: flex;
                        .brand-item {
                            .brand-itema {
                                width: 211px;
                                height: 53px;
                                background: #d9d9d9;
                                border-radius: 10px;
                                font-size: 23px;
                                font-weight: 600;
                                color: #242424;
                                text-align: center;
                                line-height: 53px;
                            }
                            .brand-itemb {
                                width: 210px;
                                height: 211px;
                                background: #d9d9d9;
                                margin-top: 16px;
                            }
                            .brand-itemc {
                                width: 222px;
                                font-size: 18px;
                                font-weight: 400;
                                color: #242424;
                                margin-top: 28px;
                            }
                        }
                    }
                }
            }
        }
        .home-pagee {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pageb-bga {
                width: 826px;
                height: 247px;
                position: absolute;
                top: 100px;
                right: 0;
            }
            .pageb-bgb {
                width: 826px;
                position: absolute;
                bottom: 0px;
                left: 0;
                transform: rotate(180deg);
            }
            .road-map {
                font-size: 64px;
                font-weight: 400;
                color: #494949;
                text-align: center;
            }
            .lamination {
                font-size: 22px;
                font-weight: 400;
                color: #494949;
                margin-top: 30px;
                text-align: center;
            }
            .pagee-qn {
                margin-top: 110px;
            }
            .the-lamination-box {
                display: flex;
                justify-content: space-between;
                padding-right: 50px;
                .the-lamination-item {
                    .dian-box {
                        display: flex;
                        align-items: flex-end;
                    }
                    .dian {
                        width: 16px;
                        height: 16px;
                        background: #434343;
                        border-radius: 50%;
                        margin: 0 10px;
                        position: relative;
                        top: -12px;
                    }
                    .diana {
                        font-size: 40px;
                        font-weight: 400;
                        color: #434343;
                    }
                    .laminationtt {
                        font-size: 22px;
                        font-weight: 400;
                        color: #434343;
                        width: 280px;
                    }
                }
            }
        }
    }
}
</style>
