<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('site')
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" />
    <el-tabs v-model="activeName" class="lists">
      <el-tab-pane label="系统通知" name="site">
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">
        Config
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white w-[300px] p-5 border rounded-md shadow-md right-[-60px] z-10;
  }
}
</style>
