<template>
  <a-layout-footer :style="{ textAlign: 'center' }">
    {{ VITE_GLOB_APP_TITLE }}
  </a-layout-footer>
</template>
<script setup lang="ts">
const { VITE_GLOB_APP_TITLE = '' } = import.meta.env;
</script>
