const persistence = {
    state: () => ({
        assets: false, // 钱包地址
        assetsShow: '', // 钱包展示
        walletToken: false, // 钱包地址token
        ethBalance: 0,
        walletType: 'MetaMask',
    }),
    mutations: {
        stateWalletToken(state, data) {
            state.walletToken = data
        },
        setAssets(state, assets) {
            state.assets = assets
            state.assetsShow = `${assets.slice(0, 2)}...${assets.slice(
                assets.length - 4,
                assets.length
            )}`
        },
        setETH(state, assets) {
            state.ethBalance = (assets / 1000000000000000000).toFixed(10)
        },
        setWalletType(state, data) {
            state.walletType = data
        },
        stateLogout(state) {
            state.assets = false
            state.assetsShow = ''
            state.ethBalance = 0
        },
    },
}
export default persistence
