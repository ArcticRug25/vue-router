<script setup lang="ts">
import { useRouter } from 'vue-router'
import { CacheEnum } from '../../../types/cacheEnum'
import { login } from '@/apis/userApi'
import v from '@/plugins/validate'
import { store } from '@/utils'

const router = useRouter()
const { Form, Field, ErrorMessage, yup } = v

// const schema = yup.object({
//   account: yup.string().required().email().label('账号'),
//   password: yup.string().required().min(3).label('密码'),
// })

const schema = {
  account: { required: true, regex: /.+@.+|\d{11}/i },
  password: { required: true, min: 3 },
}

const onSubmit = async (values: unknown) => {
  const { result: { token } } = await login(values)
  store.set(CacheEnum.TOKEN_NAME, {
    token,
    expire: 100,
  })
  router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
  route: { name: 'login', meta: { guest: true } },
}
</script>

<template>
  <Form v-slot="{ errors }" class :validation-schema="schema" @submit="onSubmit">
    <div class="w-[720px] -translate-y-12 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-cen ter text-gray-700 text-lg mt-3">
            会员登录
          </h2>
          <div class="mt-8">
            <Field name="account" class="hd-input" value="admin@163.com" label="账号" placeholder="请输入邮箱或者手机号" />
            <div v-if="errors.account" class="hd-error">
              请输入邮箱或手机号
            </div>
            <!-- <ErrorMessage name="account" as="div" class="hd-error" /> -->
            <Field name="password" class="hd-input mt-3" value="admin888" label="密码" placeholder="请输入密码" type="password" />
            <ErrorMessage name="password" as="div" class="hd-error" />
          </div>
          <hdButton class="w-full" />
          <div class="flex justify-center mt-3">
            <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <hdLink />
          <a class="text-xs text-gray-700">会员注册</a>
          <a class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover">
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-center p-5;
 }
</style>
