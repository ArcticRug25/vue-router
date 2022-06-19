<script setup lang="ts">
import { ErrorMessage, Field, Form, configure, defineRule } from 'vee-validate'
import { email, required } from '@vee-validate/rules'
import { ref } from 'vue'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
const account = ref<string>('')
defineRule('required', required)
defineRule('email', email)
configure({
  generateMessage: localize('zh_CN', zh_CN),
})
// const emailRule = (value: unknown) => /@/.test(value as string) ? true : '邮箱格式错误'
const onSubmit = (values: object) => {
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field v-slot="{ field, errorMessage }" v-model="account" label="账号" name="account" :rules="{ required: true, email: true }" :validate-on-input="true">
      <input v-bind="field" v-model="account">
      <hr>
      <p>{{ errorMessage }}</p>
    </Field>
    <!-- <ErrorMessage name="account" /> -->
    <hr>
    <button>
      提交表单
    </button>
    <!-- <input type="text"> -->
  </Form>
</template>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border p-2 rounded-md border-blue-500 outline-none;
  }
  button{
    @apply border bg-gray-600 text-white px-4 rounded-md
  }
}
</style>
