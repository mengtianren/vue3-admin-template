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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('@/assets/images/login_bg.png');
  }
</style>
