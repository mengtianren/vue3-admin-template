<template>
  <a-layout-sider
    :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
    }"
  >
    <div class="logo">{{ VITE_GLOB_APP_TITLE }}</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <bar-chart-outlined />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
      <a-menu-item key="5">
        <cloud-outlined />
        <span class="nav-text">nav 5</span>
      </a-menu-item>
      <a-menu-item key="6">
        <appstore-outlined />
        <span class="nav-text">nav 6</span>
      </a-menu-item>
      <a-menu-item key="7">
        <team-outlined />
        <span class="nav-text">nav 7</span>
      </a-menu-item>
      <a-menu-item key="8">
        <shop-outlined />
        <span class="nav-text">nav 8</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  const { VITE_GLOB_APP_TITLE = '' } = import.meta.env;

  const selectedKeys = ref<string[]>(['4']);
</script>

<style lang="less" scoped>
  .logo {
    padding: 24px 0;
    width: 100%;
    height: 36px;
    text-align: center;
    line-height: 24px;
  }
</style>
