<script setup lang="ts">
</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div class="w-[720px] -translate-y-12 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">
          会员登录
        </h2>
        <div class="mt-8">
          <hdInput />
          <hdInput class="mt-4" />
        </div>
        <hdButton />
        <div class="flex gap-2 justify-center mt-5">
          <hdLink />
          <a class="text-xs text-gray-700">会员注册</a>
          <a class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-80 w-full object-cover">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
