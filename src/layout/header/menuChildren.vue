<template>
  <a-sub-menu :key="items.name">
    <template #title>{{ items.title }}1</template>
    <a-menu-item v-for="child in items.children" :key="child.name">
      {{ child.title }}1212121
    </a-menu-item>

  </a-sub-menu>
</template>
<script setup lang="ts" name="MenuChildren">
defineProps({
  items: {
    type: Object,
    default: () => ({
      title: '默认'
    })
  }

})



</script>