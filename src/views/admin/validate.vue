<script setup lang="ts">
import { configure, defineRule, useField, useForm } from 'vee-validate'
import { email, required } from '@vee-validate/rules'
import { ref } from 'vue'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import * as yup from 'yup'

defineRule('required', required)
defineRule('email', email)
configure({
  generateMessage: localize('zh_CN', zh_CN),
})
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: 'vben',
    password: '',
  },
  validationSchema: {
    // username: { required: true, email: true },
    username: yup.string().required('不能为空').email('请输入正确的邮箱'),
    password: { required: true },
  },
})
const { value: usernameValue } = useField('username', {}, { label: '用户名' })
const { value: passwordValue } = useField('password', {}, { label: '密码' })
const onSubmit = handleSubmit((values: object) => {
})
</script>

<template>
  <form @submit="onSubmit">
    <section>
      <input v-model="usernameValue" type="text">
      <p v-if="errors.username" class="error">
        {{ errors.username }}
      </p>
    </section>
    <section>
      <input v-model="passwordValue" type="text">
      <p v-if="errors.password" class="error">
        {{ errors.password }}
      </p>
    </section>
    <button>提交</button>
  </form>
</template>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border p-2 rounded-md border-blue-500 outline-none;
  }
  button{
    @apply border bg-gray-600 text-white px-4 rounded-md;
  }
  .error {
    @apply bg-red-600 border border-gray-800 p-2 text-white;
  }
}
</style>
