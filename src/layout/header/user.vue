<template>
  <a-dropdown>
    <div style="cursor: pointer">
      <a-avatar style="background-color: #f56a00">userInfo.userName</a-avatar>
      <span class="user-name">{{ userInfo.userName || '未知' }}</span>
    </div>

    <template #overlay>
      <a-menu>
        <a-menu-item key="logout" @click="handleLogout">
          <span class="flex items-center">
            <span>退出登录</span>
          </span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
  const { userInfo } = storeToRefs(userStore);

  const handleLogout = () => {
    userStore.logout();
  };
</script>
<style lang="less" scoped>
  .user-name {
    margin-left: 10px;
    font-size: 16px;
  }
</style>
