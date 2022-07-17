<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

nextTick(() => {
  const toastEditor = new ToastEditor('#editor', '300px', '123')
})
</script>

<template>
  <div id="editor" />
</template>

<style lang="scss" scoped>
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';

#editor {
  @apply bg-white;
}
</style>
