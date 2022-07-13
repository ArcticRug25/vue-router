<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('site')
const show = ref<boolean>(false)

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show" />
    <el-tabs v-show="show" v-model="activeName" class="lists" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbaaaaaaaaaa</a>
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbaaaaaaaaaaaaaa</a>
        <a href="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababaaaaaaaaaaa</a>
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
    @apply absolute bg-white w-[300px] px-3 py-2 border rounded-md shadow-md right-[-60px] z-10 text-xs;
    a {
      @apply truncate block border-b pb-2 my-2 hover:text-blue-500;
    }
  }
}
</style>
