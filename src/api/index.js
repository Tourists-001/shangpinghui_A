import requests from "./request";
import mockAjax from './mockAjax'
// 三级联动的接口
export const reqContainerList = async () => {
    return await requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

// 图片的mock接口
export const reqGetBannerList = async () => {
    return await mockAjax({
        url: '/banner',
        method: 'get'
    })
}

// 获取floor的数据
export const reqGetFloorList = async () => {
    return await mockAjax({
        url: '/floor',
        method: 'get'
    })
}
// 获取热门推荐的数据
export const reqHotList = async () => {
    return await mockAjax({
        url: '/hot',
        method: 'get'
    })
}
// 获取喜欢列表
export const reqLikeList = async () => {
    return await mockAjax({
        url: '/like',
        method: 'get'
    })
}

// 获取搜索列表
export const reqGetSearchInfo = async (params) => {
    return await requests({
        url: '/list',
        method: 'post',
        data: params,
    })
}

// 获取商品的详细信息
export const reqGoodsInfo = async (skuId) => {
    return await requests({
        url: `/item/${skuId}`,
        method: 'get',
    })
}
// 获取商品详情的mock数据

// 将产品添加到购物车
export const reqAddOrUpdateShopCart = async (skuId, skuNum) => {
    return await requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
// 获取购物车列表的接口
export const reqCarList = async () => {
    return await requests({
        url: '/cart/cartList'
    })
}
// 删除购物商品
export const reDeleteCartById = async (skuId) => {
    return await requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}
// 修改商品的选择状态
export const reqUpdateCheckedById = async (skuId, isChecked) => {
    return await requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}
// 获取验证码
export const reqGetCode = async (phone) => {
    return await requests({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}
// 注册接口
export const reqUserRegister = async (data) => {
    return await requests({
        url: '/user/passport/register',
        method: 'post',
        data,
    })
}
//登录接口
export const reqUserLogin = async (data) => {
    return await requests({
        url: '/user/passport/login',
        method: 'post',
        data,
    })
}

// 根据token获取用户信息
export const reqUserInfo = async () => {
    return await requests({
        url: '/user/passport/auth/getUserInfo',
        method: 'get',
    })
}
// 退出登录
export const reqLoginOut = async () => {
    return await requests({
        url: '/user/passport/logout',
        method: 'get'
    })
}

// 获取用户地址信息
export const reqAddressInfo = async () => {
    return await requests({
        url: '/user/uerAddress/auth/findUserAddressList',
        method: 'get'
    })
}