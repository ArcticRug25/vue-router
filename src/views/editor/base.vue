<script setup lang="ts">
import { ref } from 'vue'
import WangEditor from '@/components/wangEditor/wangEditor.vue'

const content = ref<string>('ab1c')
</script>

<template>
  <div>
    <WangEditor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">
      {{ content }}
    </div>
  </div>
</template>

<style scoped>

</style>
