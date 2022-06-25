<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
])
</script>

<template>
  <div class="hidden md:grid">
    <div class="m-5 grid grid-flow-col gap-3 justify-start">
      <a v-for="(n, index) of links" :key="index" class="bg-white rounded-md py-2 px-3 text-sm text-gray-600 shadow-md">
        {{ n.title }}
        <i class="fas fa-times ml-1" />
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
