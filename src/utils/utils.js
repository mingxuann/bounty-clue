function setSize() {
    // 设备宽度 动态设置fontSize
    let deviceWidth = document.documentElement.clientWidth
    if (deviceWidth < 1000) deviceWidth = 1000
    if (deviceWidth > 1920) deviceWidth = 1920
    // 设计稿宽度
    const baseValue = 1920
    let oHtml = document.getElementsByTagName('html')[0]
    oHtml.style.fontSize = (deviceWidth / baseValue) * 100 + 'px'
}
export const setScrollbarWidth = () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    container.style.overflow = 'scroll'
    const inner = document.createElement('div')
    container.appendChild(inner)
    const width = container.offsetWidth - inner.offsetWidth
    document.body.removeChild(container)
    document.documentElement.style.setProperty('--scrollbar', `${width}px`)
}
export function monitorSize() {
    // DOM树加载完执行
    window.addEventListener('DOMContentLoaded', function () {
        setScrollbarWidth()
        setSize()
    })
    // 屏幕变化执行
    window.addEventListener('resize', function () {
        setScrollbarWidth()
        setSize()
    })
    setSize()
}
