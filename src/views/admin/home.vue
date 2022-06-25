<script setup lang="ts">
</script>

<template>
  <div class="grid grid-flow-col gap-3">
    <el-card v-for="(n, index) of 4" :key="index" shadow="hover" :body-style="{ padding: '20px' }" class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          用户数
          <el-tag type="danger" size="small" effect="dark">
            月
          </el-tag>
        </div>
      </template>

      <section class="flex mt-2 justify-between items-center">
        <span class="text-3xl">$29322</span>
        <i class="fas fa-ad text-blue-500 text-4xl" />
      </section>
      <section class="text-base mt-5 flex justify-between">
        总人数
        <span>200人</span>
      </section>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
</style>
