import {
    reqCarList,
    reDeleteCartById,
    reqUpdateCheckedById
} from '@/api'
const state = {
    carList: []
}
const mutations = {
    GETCARTLIST(state, data) {
        state.carList = data
    }
}
const actions = {
    // 获取购物车数据
    async getCarList({
        commit
    }) {
        const res = await reqCarList()
        // console.log(res);
        if (res.code === 200) {
            commit('GETCARTLIST', res.data)
        }
    },
    // 删除购物车的数据
    async deleteCartListBySkuId({
        commit
    }, skuId) {
        const res = await reDeleteCartById(skuId);
        if (res.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('filed'))
        }
    },
    // 修改购物车某个商品的选中
    async updateCheckedById({
        commit
    }, {
        skuId,
        isChecked
    }) {
        const res = await reqUpdateCheckedById(skuId, isChecked)
        // console.log(res);
        if (res.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('filed'))
        }
    },
    // 删除全部选中
    async deleteAllCheckedCart({
        getters,
        dispatch
    }) {
        let PromiseAll = []
        // 通过foreach遍历出所有的id，通过在这里触发deleteCartListBySkuId的actions，（返回的是一个Promise）
        // 运用Promise.all（一个失败，返回reject）返回一个reslove状态的Promise，在组件中判断，是否全部删除
        getters.carList.cartInfoList.forEach((item) => {
            // 判断是否选中
            let promise = item.isChecked == '1' ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    updateAllCarIsChecked({
        getters,
        dispatch
    }, isChecked) {
        console.log( getters.carList.cartInfoList);
        let PromiseAll = []
        getters.carList.cartInfoList.forEach((item) => {
            let promise = dispatch('updateCheckedById', {
                skuId: item.skuId,
                isChecked,
            })
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    carList() {
        return state.carList[0] || {}
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}