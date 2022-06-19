<script setup lang="ts">
import { configure, defineRule, useField, useForm } from 'vee-validate'
import { email, required } from '@vee-validate/rules'
import { ref } from 'vue'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
defineRule('required', required)
defineRule('email', email)
configure({
  generateMessage: localize('zh_CN', zh_CN),
})
const { handleSubmit, errors } = useForm()
const { value: usernameValue } = useField('username', { required: true, email: true }, { label: '用户名' })
const onSubmit = handleSubmit((values: object) => {
})
</script>

<template>
  <form @submit="onSubmit">
    <input v-model="usernameValue" type="text">
    <p>{{ errors.username }}</p>
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
}
</style>
