<script setup lang="ts">
</script>

<template>
  <div class="grid grid-flow-col gap-3">
    <el-card v-for="(n, index) of 4" :key="index" shadow="hover" :body-style="{ padding: '20px' }">
      <template #header />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
</style>
