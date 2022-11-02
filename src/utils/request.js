import axios from 'axios'
import store from '@/store/index'
let service = axios.create({
    baseURL: '',
    timeout: 20000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['AuthAuthorize'] = store.state.persistence.walletToken || ''
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
