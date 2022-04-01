// 引入路由组件
const Home = () => import('@/page/Home/Home.vue')
const Login = () => import('@/page/Login/Login.vue')
const Search = () => import('@/page/Search/Search.vue')
const Register = () => import('@/page/Register/Register.vue')
const Detail = () => import('@/page/Detail/index.vue')
const NotFound = () => import('@/page/NotFind/index.vue')
const addCartSuccess = () => import('@/page/AddCartSuccess/index.vue')
const ShopCart = () => import('@/page/ShopCart/index.vue')
const Trade = () => import('@/page/Trade')
const Pay = () => import('@/page/Pay')
const PaySuccess = () => import('@/page/PaySuccess')
const Center = () => import('@/page/Center')
const MyOrder = () => import('@/page/Center/MyOrder')
const GroupOrder = () => import('@/page/Center/GroupOrder')
export default [{
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            show: true
        }
    },
    {
        name: 'center',
        component: Center,
        path: '/center',
        children: [{
                path: 'myOrder',
                name: 'myOrder',
                component: MyOrder,
            },
            {
                path: 'groupOrder',
                name: 'groupOrder',
                component: GroupOrder
            }, { // 不加重定向进入center白屏，加上重定向直接跳转到myOder页面
                path: '/center',
                redirect: '/center/myOrder'
            }
        ]
    },
    {
        path: '/paySuccess',
        component: PaySuccess,
        name: 'paySuccess',
        meta: {
            show: true
        }
    },
    {
        path: '/pay',
        component: Pay,
        name: 'pay',
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next(false)
            }
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
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopCart') {
                next()
            } else {
                // 从其他路由来，停留在当前页面
                next(false)
            }
        }
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