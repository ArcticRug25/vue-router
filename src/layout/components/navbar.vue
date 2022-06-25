<script setup lang="ts">
</script>

<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        编辑器
      </el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="relative flex justify-center items-center group cursor-pointer">
      <img src="/images/login.jpg" class="w-8 h-8 rounded-full object-cover">
      <span class="ml-1 text-sm text-gray-600">ArcticRug25</span>
      <section class="group-hover:block absolute top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden">
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer py-3">
          <a class="fas fa-ad" />
          <span class="text-xs text-gray-600 ml-2">个人中心</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
