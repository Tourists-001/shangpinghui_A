// 对 axios进行二次分装
import axios from "axios"
// 引入nprogress
import nprogress from "nprogress"
// 引入样式
import "nprogress/nprogress.css";
// 引入仓库
import store from '@/store';
// console.log(nprogress)
const requests = axios.create({
    baseURL: '/api', // 基于哪个路径
    timeout: 5000, // 请求超时的时间为 5s
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    //  如果有uuid_token，添到响应头
    if (store.state.detail.uuid_token) {
        // 请求头添加一个字段，和后台商量好的
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // 判断用户是否携带token
    if(store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    // 进度条
    nprogress.start()
    // config 配置对象，对象里有个属性，headers
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    // 成功的回调函数
    return res.data
}, () => {
    // 失败的回调函数
    return new Promise.reject(new Error('fail'))
})

export default requests