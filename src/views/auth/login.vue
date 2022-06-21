<script setup lang="ts">
import v from '@/plugins/validate'

const { Form, Field, ErrorMessage } = v
</script>

<template>
  <Form>
    <div class="w-[720px] -translate-y-12 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-cen ter text-gray-700 text-lg mt-3">
          会员登录
        </h2>
        <div class="mt-8">
          <Field name="account" :rules="{ required: true, email: true }" class="hd-input" :validate-on-input="true" label="账号" />
          <ErrorMessage name="account" as="div" class="hd-error" />
          <Field name="password" :rules="{ required: true, min: 3 }" class="hd-input mt-3" :validate-on-input="true" label="密码" />
          <ErrorMessage name="password" as="div" class="hd-error" />
        </div>
        <hdButton class="mt-" />
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
 }
</style>
