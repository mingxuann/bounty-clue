import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from 'postcss-px-to-viewport'
const { resolve } = require('path')
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            web3: resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
        },
    },
    base: './',
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        proxy: {
            '/bounty-clue': {
                target: 'https://2507ys1775.oicp.vip',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bounty-clue/, 'bounty-clue'),
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                postcsspxtoviewport({
                    unitToConvert: 'px', // 要转化的单位
                    viewportWidth: 1920, // UI设计稿的宽度
                    unitPrecision: 6, // 转换后的精度，即小数点位数
                    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                    replace: true, // 是否转换后直接更换属性值
                    landscape: false, // 是否处理横屏情况
                }),
            ],
        },
    },
})
