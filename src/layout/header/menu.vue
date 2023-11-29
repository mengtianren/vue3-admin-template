<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark" @select="onSelect">
    <template v-for="item in routes" :key="item.name">
      <a-menu-item v-if="!item.children" :key="item.name">
        <template #icon>
          <mail-outlined />
        </template>
        {{ item.title }}
      </a-menu-item>
      <MenuChild :items="item" v-else-if="item.children" />

    </template>



  </a-menu>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { MailOutlined } from '@ant-design/icons-vue';
import { menu as routes } from '@/router/routes'
import MenuChild from './menuChildren.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const current = ref<string[]>(['mail']);


const onSelect = ({ key }: { key: string }) => {
  router.push({ name: key })
}
watchEffect(() => {
  current.value = [route.name as string]
})
</script>