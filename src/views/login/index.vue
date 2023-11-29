<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue';

</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(@/assets/images/login_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

}
</style>
