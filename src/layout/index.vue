<template>
  <router-view v-if="route.name === 'login'" />
  <a-layout v-else-if="route.name !== 'login'">
    <Head />
    <Content />
    <Foot />
  </a-layout>
</template>
<script setup lang="ts">
  import Head from './header/index.vue';

  import Content from './content/index.vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  import Foot from './footer/index.vue';
</script>
<style>
  #components-layout-demo-fixed-sider .logo {
    margin: 16px;
    height: 32px;
    background: rgb(255 255 255 / 20%);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
