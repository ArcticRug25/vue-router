<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
const account = ref('')
const emailRule = (value: unknown) => /@/.test(value as string) ? true : '邮箱格式错误'
const onSubmit = (values: object) => {
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field v-model="account" name="account" :rules="emailRule" />
    <ErrorMessage name="account" />
    <hr>
    <button class="border bg-blue-500 text-white">
      提交标表单
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
}
</style>
