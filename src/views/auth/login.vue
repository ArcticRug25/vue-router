<script setup lang="ts">
import v from '@/plugins/validate'

const { Form, Field, ErrorMessage } = v
</script>

<template>
  <Form>
    <div class="w-[720px] -translate-y-12 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">
          会员登录
        </h2>
        <div class="mt-8">
          <Field name="account" :rules="{ required: true, email: true }" class="hd-input" />
          <ErrorMessage name="account" as="div" class="hd-error" />
          <Field name="password" :rules="{ required: true }" class="hd-input" />
          <ErrorMessage name="password" as="div" class="hd-error" />
          <!-- <hdInput placeholder="请输入邮箱或者手机号 " />
          <hdInput class="mt-4" placeholder="请输入登录密码" /> -->
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
  </Form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-center p-5;
  .hd-input {
  @apply w-full border rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs
  focus:ring-1 ring-offset-2 ring-blue-500 duration-300 focus:border-white
}
}
</style>
