/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="promotion-box">
        <div class="promotion-card"></div>
        <div class="coming-soon">
            <div class="time-text">30day:24hours:59min:59sec</div>
            <div class="soon-text">
                Coming <br />
                Soon
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.promotion-box {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 80px;
    padding-top: 100px;
    box-sizing: border-box;
    .promotion-card {
        width: 800px;
        height: 832px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .coming-soon {
        padding-bottom: 100px;
        .time-text {
            font-size: 50px;
            font-family: SpaceMono;
            font-weight: 400;
            color: #010101;
        }
        .soon-text {
            font-size: 170px;
            font-family: SpaceMono;
            font-weight: 400;
            color: #010101;
            line-height: 175px;
            text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
            text-align: center;
            margin-top: 90px;
        }
    }
}
</style>
