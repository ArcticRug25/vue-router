<script setup lang="ts">

</script>

<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="hd-input">
</template>

<style scoped>
.hd-input {
  @apply w-full border rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs
  focus:ring-1 ring-offset-2 ring-blue-500 duration-300 focus:border-white
}
</style>
