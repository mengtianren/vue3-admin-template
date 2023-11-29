<template>
  <a-layout-content>
    <router-view class="router-view" />
  </a-layout-content>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
  .ant-layout-content {
    padding: 16px 8px;
    height: calc(100vh - 133px);
    background: #ccc;

    .router-view {
      overflow: auto;
      padding: 24px;
      height: 100%;
      background: #fff;
    }
  }
</style>
