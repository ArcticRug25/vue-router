<script setup lang="ts">
import { routerStore } from '@/store/routerStore'
import userStore from '@/store/userStore'
import * as utils from '@/utils'

const userPinia = userStore()
const menuStore = routerStore()
</script>

<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="menuStore.toggleState">
        <i v-if="menuStore.close" class="fas fa-align-left mr-2 text-gray-700 cursor-pointer" />
        <i v-else class="fas fa-align-right mr-2 text-gray-700 cursor-pointer" />
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          编辑器
        </el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="relative flex justify-center items-center group cursor-pointer">
      <img :src="userPinia.info?.avatar" class="w-8 h-8 rounded-full object-cover">
      <span class="ml-1 text-sm text-gray-600">{{ userPinia.info?.name }}</span>
      <section class="group-hover:block absolute top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md z-10 hidden">
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer py-3" @click="utils.logout">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
