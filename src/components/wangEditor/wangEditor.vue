<script setup lang="ts">
import { nextTick } from 'vue'
import WangEditor from './wangEditor'

interface WangEditorProps {
  height?: number
}

const props = withDefaults(defineProps<WangEditorProps>(), {
  height: 300,
})

nextTick(() => {
  const wangEditor = new WangEditor()
})
</script>

<template>
  <div id="wang-editor">
    a
  </div>
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
