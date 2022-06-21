<script setup lang="ts">
import v from '@/plugins/validate'

const { Form, Field, ErrorMessage, yup } = v

// const schema = yup.object({
//   account: yup.string().required().email().label('账号'),
//   password: yup.string().required().min(3).label('密码'),
// })

const schema = {
  account: { required: true, regex: /.+@.+|\d{11}/i },
  password: { required: true, min: 3 },
}

const onSubmit = (values) => {
  console.log(values)
}
</script>

<template>
  <Form v-slot="{ errors }" class :validation-schema="schema" @submit="onSubmit">
    <div class="w-[720px] -translate-y-12 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-cen ter text-gray-700 text-lg mt-3">
          会员登录
        </h2>
        <div class="mt-8">
          <Field name="account" class="hd-input" label="账号" placeholder="请输入邮箱或者手机号" />
          <div v-if="errors.account" class="hd-error">
            请输入邮箱或手机号
          </div>
          <!-- <ErrorMessage name="account" as="div" class="hd-error" /> -->
          <Field name="password" class="hd-input mt-3" label="密码" placeholder="请输入密码" type="password" />
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
