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
#editor {
  @apply bg-white;
  :deep(.toastui-editor-mode-switch) {
    @apply hidden #{!important};
  }
  :deep(.toastui-editor-defaultUI).full-screen {
    @apply fixed left-0 top-0 right-0 bottom-0 z-50 bg-white;
  }
}
</style>
