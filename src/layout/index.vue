<template>
  <router-view v-if="route.name === 'login'"></router-view>
  <a-layout v-else-if="route.name !== 'login'">
    <Head />
    <Content />
    <Foot/>
  </a-layout>
</template>
<script setup lang="ts">
import Head from './header/index.vue'

import Content from './content/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import Foot from './footer/index.vue'



</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
