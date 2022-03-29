// 引入路由组件
const Home = () => import('@/page/Home/Home.vue')
const Login = () => import('@/page/Login/Login.vue')
const Search = () => import('@/page/Search/Search.vue')
const Register = () => import('@/page/Register/Register.vue')
const Detail = () => import('@/page/Detail/index.vue')
const NotFound = () => import('@/page/NotFind/index.vue')
const addCartSuccess = () => import('@/page/AddCartSuccess/index.vue')
const ShopCart = () => import('@/page/ShopCart/index.vue')
const Trade  = () => import('@/page/Trade')
export default [{
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        meta: {
            show: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: '/detail/:skuId?',
        component: Detail,
        name: 'detail',
        meta: {
            show: true
        }
    },
    {
        path: '/',
        redirect: '/home',
        meta: {
            show: true
        }
    },
    {
        name: 'addCartSuccess',
        path: '/addCartSuccess',
        component: addCartSuccess,
        meta: {
            show: true
        }
    },
    {
        name: 'shopCart',
        path: '/shopCart',
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
    },
    {
        name: "NotFound",
        path: "/*",
        component: NotFound,
        meta: {
            notFind: true
        }
    },
]