import { RouterOptions, createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
} as RouterOptions)

router.beforeEach((to) => {
  const user = useUserStore()
  const { token } = storeToRefs(user)
  if (!token.value && to.path !== '/login') {
    return '/login'
  } else if (token.value && to.path === '/login') {
    return '/'
  }
})
router.afterEach((to, from) => {
  // console.log('afterEach', to, from)
})


export default router

