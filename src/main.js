import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 模拟数据
import './mock/mockServe.js'
// 全局组件
import TypeNav from './components/TypeNav'
import Carsousel from './components/Carousel'
import Pagination from './components/Pagination'
// 参数一：组件的名字，参数二：组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel)
Vue.component(Pagination.name,Pagination)
// swiper 组件的样式
import 'swiper/css/swiper.css'
new Vue({
    render: h => h(App),
    router,
    store,
    // 配置全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
