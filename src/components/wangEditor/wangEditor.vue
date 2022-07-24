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
  const wangEditor = new WangEditor('#wang-editor', props)
})
</script>

<template>
  <div id="wang-editor">
    <p>a</p>
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
