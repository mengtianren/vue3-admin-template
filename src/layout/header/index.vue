<template>
  <a-layout-header>
    <Title />
    <Menu />
    <User />
  </a-layout-header>
</template>
<script setup lang="ts">
import Title from './title.vue'
import Menu from './menu.vue'
import User from './user.vue'
</script>

<style scoped lang="less">
.ant-layout-header {
  padding: 0 24px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;

  .ant-layout-header-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }
}
</style>
