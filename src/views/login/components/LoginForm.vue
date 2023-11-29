<template>
  <a-form ref="formRef" :model="formData" class="login-form" :label-col="{ span: 5 }" @keypress.enter="handleLogin">
    <a-form-item class="enter-x" label="账号" name="userName"
      :rules="{ required: true, message: '请输入账号', trigger: 'blur' }">
      <a-input v-model:value="formData.userName" placeholder="账号" size="large" />
    </a-form-item>

    <a-form-item class="enter-x" name="password" label="密码"
      :rules="{ required: true, message: '请输入密码', trigger: 'blur' }">
      <a-input-password v-model:value="formData.password" placeholder="密码" size="large" />
    </a-form-item>




    <a-form-item class="enter-x">
      <a-button size="large" type="primary" block :loading="loading" @click="handleLogin">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref,  unref, reactive,  } from 'vue'
import type { FormInstance } from 'ant-design-vue';
import { useUserStore } from '@/store/modules/user';
const user = useUserStore();

interface FormState {
  userName: string
  password: string
}



const formRef = ref<FormInstance>();
const loading = ref(false);



const formData = reactive<FormState>({
  userName: '',
  password: '',
});



const handleLogin = async () => {
  const form = unref(formRef);
  if (!form) return;
  const data = await form.validate() as FormState;
  user.login({ ...data })
};



</script>
<style lang="less" scoped>
.login-form {
  padding: 48px 48px 32px;
  border-radius: 8px;
  background: #fff;

}
</style>
