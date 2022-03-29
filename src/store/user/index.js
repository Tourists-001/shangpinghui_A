import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqLoginOut
} from '@/api'
const state = {
    code: '',
    token: localStorage.getItem('TOKEN') || '',
    userInfo: {},
}
const mutations = {
    GETCODE(state, data) {
        state.code = data
    },
    LOGINUSER(state, token) {
        state.token = token
    },
    GETUSERINFO(state, info) {
        state.userInfo = info
    },
    CLEARNINFO(state) {
        state.userInfo = {}
        state.token = ''
        localStorage.removeItem('TOKEN')
    }
}
const actions = {
    // 获取验证码
    async getCode({
        commit
    }, phone) {
        const res = await reqGetCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('filed'))
        }
    },
    // 注册
    async userRegister({
        commit
    }, data) {
        const res = await reqUserRegister(data)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('filed'))
        }
    },
    // 登录
    async userLogin({
        commit
    }, data) {
        const res = await reqUserLogin(data)
        // console.log(res);
        if (res.code === 200) {
            // 持久化存储token
            localStorage.setItem('TOKEN', res.data.token)
            commit('LOGINUSER', res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('filed'))
        }
    },
    // 获取用户信息
    async userInfo({
        commit
    }) {
        const res = await reqUserInfo()
        if (res.code === 200) {
            commit('GETUSERINFO', res.data)
            return 'ok'
        } else {
            return Promise.reject('没有token')
        }
    },
    // 退出登录
    async loginOut({
        commit,
    }) {
        const res = await reqLoginOut()
        console.log(res);
        if (res.code === 200) {
            // 清除token
            // 清除userInfo
            // !actions里面不能操作state，需要提交mutations
            commit('CLEARNINFO')
            return 'ok'
        } else {
            return new Promise(new Error('filed'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}