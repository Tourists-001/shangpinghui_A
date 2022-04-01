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
import {
    Button,
    MessageBox
} from 'element-ui';
// 全局注册ele
Vue.component(Button.name, Button)
// ele-UI注册组件时，可以挂载到原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 参数一：组件的名字，参数二：组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
// swiper 组件的样式
import 'swiper/css/swiper.css'
import * as API from '@/api'
// 图片懒加载组件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    // 懒加载默认的图片
    loading: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.7MQHO4NPLvl7fOmKmBHnewHaE7?pid=ImgDet&rs=1'
})

// 引入校验插件
import '@/plugins/validate'
new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        // 配置全局事件总线
        Vue.prototype.$bus = this
        // 使API可以在全局使用
        Vue.prototype.$API = API
    }
}).$mount('#app')