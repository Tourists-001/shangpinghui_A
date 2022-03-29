import {
    reqContainerList,
    reqGetBannerList,
    reqGetFloorList,
    reqHotList,
    reqLikeList
} from "@/api"
const state = {
    // 三级联动数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    floorList: [],
    hotList: [],
    likeList: []
}
// 修改state的唯一手段
const mutations = {
    // 三级联动数据
    CATEGORYLIST(state, data) {
        state.categoryList = data
    },
    GETBANNERLIST(state, data) {
        state.bannerList = data
    },
    GETFLOORLIST(state, data) {
        state.floorList = data
    },
    GETHOTLIST(state, data) {
        state.hotList = data
    },
    GETLIKELIST(state,data) {
        state.likeList = data
    }

}
// 处理异步
const actions = {
    async categoryList({
        commit
    }) {
        const res = await reqContainerList()
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
        }
    },
    async getBannerList({
        commit
    }) {
        const res = await reqGetBannerList()
        if (res.code === 200) {
            commit('GETBANNERLIST', res.data)
        }
    },
    async getFloorList({
        commit
    }) {
        const res = await reqGetFloorList()
        // console.log(res)
        if (res.code === 200) {
            commit('GETFLOORLIST', res.data)
        }
    },
    async getHotList({
        commit
    }) {
        const res = await reqHotList()
        if (res.code === 200) {
            commit('GETHOTLIST', res.data)
        }
    },
    async getLikeList({
        commit
    }) {
        const res = await reqLikeList()
        if(res.code === 200) {
            commit('GETLIKELIST',res.data)
        }
    }
}

const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}