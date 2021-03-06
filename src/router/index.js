// 配置路由的地方
import Vue from "vue";
import VueRouter from 'vue-router';
import store from '@/store'
console.log(store);
Vue.use(VueRouter)
import routes from './routers'
// 重写push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {
            // console.log(e)
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {
            // console.log(e)
        })
    }
}

//配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    // scrollBehavior (to, from, savedPosition) {
    //      console.log(to, from, savedPosition);
    //      return 期望滚动到哪个的位置
    //      y: 0 滚动条在y轴的0 px
    //     return {y : 0}
    //   }
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    y: 0
                })
            }, 500)
        })
    },
})
// 路由守卫
router.beforeEach(async (to, form, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        // 用户登录了
        if (to.path == '/login') {
            next('/home')
        } else {
            // 用户登录了去的不是login
            if (name) {
                next()
            } else {
                try {
                    // 尝试获取用户信息(有token)
                    await store.dispatch('userInfo')
                    next()
                } catch (error) {
                    // 没有token（退出登录，删除本地token）
                    await store.dispatch('loginOut')
                    next('/login')
                }
            }
        }
    } else {
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }
    }
})
export default router