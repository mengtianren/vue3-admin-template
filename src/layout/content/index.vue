<template>
  <a-layout-content>
    <router-view class="router-view"></router-view>
  </a-layout-content>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.ant-layout-content {
  background: #ccc;
  height: calc(100vh - 133px);
  padding: 16px 8px;


  .router-view {
    background: #fff;
    height: 100%;
    overflow: auto;
    padding: 24px;
  }
}
</style>