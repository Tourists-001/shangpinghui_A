import {
    reqGoodsInfo,
    reqAddOrUpdateShopCart
} from '@/api'
import {
    getUUID
} from '@/utils/uuId_token'
const state = {
    detailInfo: {},
    // shopCarInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GETDETAILINFO(state, data) {
        state.detailInfo = data
    },
    // ADDORUPDATESHOPCART(state, data) {
    //     state.shopCarInfo = data
    // }
}
const actions = {
    async getDetailInfo({
        commit
    }, skuId) {
        const res = await reqGoodsInfo(skuId)
        if (res.code === 200) {
            commit('GETDETAILINFO', res.data)
        }
    },
    async AddOrUpdateShopCart({
        commit
    }, {
        skuId,
        skuNum
    }) {
        const res = await reqAddOrUpdateShopCart(skuId, skuNum)
        // console.log(res);
        if (res.code === 200) {
            // commit('ADDORUPDATESHOPCART', res.data)
            return Promise.resolve('成功')
        } else {
            return Promise.reject(new Error('filed'))
        }
    }
}
const getters = {
    categoryView(state) {
        // 当数据没过来的时候detailInfo为undefined 会出现假报错
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}