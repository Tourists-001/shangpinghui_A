import {
    reqAddressInfo,
    reqOrderInfo
} from '@/api'
const state = {
    addressInfo: [],
    orderList: [],
}
const mutations = {
    GETUSERADDRESS(state, data) {
        state.addressInfo = data
    },
    GETORDERLIST(state,data) {
        state.orderList = data
    }
}
const actions = {
    // 获取地址
    async getUserAddress({
        commit
    }) {
        const res = await reqAddressInfo()
        if (res.code === 200) {
            commit('GETUSERADDRESS', res.data)
        }
    },
    // 获取商品订单
    async getOrderList({commit}) {
      const res = await reqOrderInfo()
      if(res.code === 200) {
          commit('GETORDERLIST',res.data)
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