import {
    reqGetSearchInfo
} from '@/api'
const state = {
    searchList: {},

}
// 修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, data) {
        state.searchList = data
    }
}
// 处理异步
const actions = {
    async getSearchList({
        commit
    }, params = {}) {
        let res = await reqGetSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHLIST', res.data)
        }
    },

}

const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}