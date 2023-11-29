import type { RouteRecordRawTg } from 'vue-router'


export const menu: RouteRecordRawTg[] = [
  {
    path: '/home',
    name: 'home',
    menu: true,
    title: '首页',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    menu: true,
    title: '关于',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/aboutm',
    name: 'aboutm',
    menu: true,
    title: '关于m',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/about1',
    name: 'about1',
    menu: true,
    title: '关于1',
    redirect: '/about2',
    component: () => import('@/layout/pageView/index.vue'),
    children: [
      {
        path: '/about2',
        name: 'about2',
        // menu: true,
        // title: '关于2',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
]



const routes: RouteRecordRawTg[] = [

  {
    path: '/',
    name: 'root',
    redirect: '/home',
    title: '首页',
    component: () => import('@/layout/index.vue'),
    children: menu,
  },
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@/views/login/index.vue'),
  },




]

export default routes