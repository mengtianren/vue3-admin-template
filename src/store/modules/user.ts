import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { loginApi } from '@/api/user'
import type { loginData } from '@/api/model'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const userInfo = ref<loginData>({
    userName: '',
    password: ''
  })
  const token = ref<string | null>('')


  /** 登录 */
  const login = async (params: loginData) => {
    try {
      const data = await loginApi(params)
      userInfo.value = params
      token.value = 'token'
      router.push('/')
      console.log(data)
    } catch (error) {

    }


    // userInfo.value = params
    // token.value = 'token'
    // router.push('/')
  }






  /** 退出登录 */
  const logout = () => {
    const user = useUserStore()
    user.$reset()
    router.push('/login')
  }

  return {
    userInfo,
    token,
    login,
    logout
  }
}, {
  persist: {
    enabled: true
  }
})