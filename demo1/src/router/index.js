import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/index',
    children: [
      {
        path:'index',
        name:'首页',
        component:()=>import ('../views/index.vue')
      },
      {
        path:'vip',
        name:'会员管理',
        component:()=>import ('../views/vip.vue')
      },
      {
        path:'gys',
        name:'会员管理',
        component:()=>import ('../views/gys.vue')
      },
      {
        path:'shop',
        name:'会员管理',
        component:()=>import ('../views/shop.vue')
      },
      {
        path:'people',
        name:'会员管理',
        component:()=>import ('../views/people.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
