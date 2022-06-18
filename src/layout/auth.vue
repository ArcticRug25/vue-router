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
          <input type="text" placeholder="请输入手机号或邮箱" class="hd-input">
          <input type="text" placeholder="请输入手机号或邮箱" class="hd-input mt-4">
        </div>
        <button class="hd-button mt-4">
          登录
        </button>
        <div class="flex gap-2 justify-center mt-5">
          <a class="text-xs text-gray-700">网站首页</a>
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
.hd-input {
  @apply w-full border rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs
  focus:ring-1 ring-offset-2 ring-blue-500 duration-300 focus:border-white
}

.hd-button {
  @apply bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-400 duration-200
}
</style>
