import { createRouter, createWebHistory } from 'vue-router'
const routes: ({ redirect: { name: string }; path: string } | { path: string; component: () => any; name: string } | { path: string; component: () => any; name: string } | { path: string; component: () => any; name: string } | { path: string; component: () => any; name: string } | { path: string; component: () => any; name: string } | { path: string; component: () => any; name: string })[] = [

  { path: '/', redirect: { name: 'login' } },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/register/register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/main.vue'),
    children: [ {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/home/homePage.vue')
    },
      {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/admin/adminPage.vue')
      },
      {
        path: '/manager',
        name: 'manager',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/manager/managerPage.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/order/orderPage.vue')
      },
      {
        path: '/other',
        name: 'other',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/other/otherPage1.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/user/userPage.vue')
      },
      {
        path: '/gold_jewelryPage',
        name: 'gold_jewelryPage',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/gold_jewelry/gold_jewelryPage.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
