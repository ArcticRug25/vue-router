<script setup lang="ts">
import { nextTick } from 'vue'
import WangEditor from './wangEditor'

interface WangEditorProps {
  height?: number
  modelValue?: string
  uploadImgServer?: string
}

const props = withDefaults(defineProps<WangEditorProps>(), {
  height: 300,
  modelValue: '',
  uploadImgServer: '/api/upload/image',
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const wangEditor = new WangEditor('#wang-editor', (newHtml: string) => {
    emit('update:modelValue', newHtml)
  }, props)
})
</script>

<template>
  <div id="wang-editor" />
</template>

<style lang="scss" scoped>
 #editor—wrapper {
    border: 1px solid #ccc;
    z-index: 100;
    #toolbar-container {
      border-bottom: 1px solid #ccc;
    }
    #editor-container {
      @apply h-[500px]
    }
  }
</style>
