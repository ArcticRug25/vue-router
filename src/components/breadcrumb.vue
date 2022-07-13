<script setup lang="ts">
import { routerStore } from '@/store/routerStore'

const routerPinia = routerStore()
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(r, idx) of routerPinia.route?.matched"
      :key="idx"
      :to="r.path"
    >
      {{ r.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped>

</style>
