<script setup lang="ts">
import { ref } from 'vue'
import { routerStore } from '@/store/routerStore'
import userStore from '@/store/userStore'
import * as utils from '@/utils'
import Notification from '@/components/notification.vue'
import Breadcrumb from '@/components/breadcrumb.vue'

const userPinia = userStore()
const menuStore = routerStore()

const isFullScreen = ref<boolean>(false)
const fullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}
</script>

<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="menuStore.toggleState">
        <i v-if="menuStore.close" class="fas fa-align-left mr-2 text-gray-700 cursor-pointer" />
        <i v-else class="fas fa-align-right mr-2 text-gray-700 cursor-pointer" />
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>
    <div class="relative flex justify-center items-center cursor-pointer">
      <Notification class="mr-8" />
      <icon-full-screen-one v-if="!isFullScreen" theme="outline" size="20" fill="#333" class="mr-5" @click="fullScreen" />
      <icon-off-screen-one v-else theme="outline" size="20" fill="#333" class="mr-5" @click="fullScreen" />
      <div class="group">
        <div class="flex items-center">
          <img :src="userPinia.info?.avatar" class="w-8 h-8 rounded-full object-cover">
          <span class="ml-1 text-sm text-gray-600">{{ userPinia.info?.name }}</span>
        </div>
        <section class="group-hover:block absolute right-0 top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md z-20 hidden">
          <div class="flex items-center cursor-pointer border-b py-3">
            <icon-log theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">文档资料</span>
          </div>
          <div class="flex items-center cursor-pointer border-b py-3">
            <icon-home theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">用户管理</span>
          </div>
          <div class="flex items-center cursor-pointer py-3" @click="utils.logout">
            <icon-logout theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">退出登录</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
