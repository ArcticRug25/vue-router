<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'
interface IProps {
  modalValue?: string
  height?: number
  placeholder?: string
}
const props = withDefaults(defineProps<IProps>(), {
  modalValue: '',
  height: 500,
  placeholder: '',
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const toastEditor = new ToastEditor('#editor', props.modalValue, `${props.height}px`)
  toastEditor.editor.on('change', (type: string) => {
    emit('update:modelValue', toastEditor.editor[type === 'markdown' ? 'getMarkdown' : 'getHTML']())
  })
})
</script>

<template>
  <div id="editor" />
</template>

<style lang="scss" scoped>
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';

#editor {
  @apply bg-white;
  :deep(.toastui-editor-mode-switch) {
    @apply hidden #{!important};
  }
}
</style>
