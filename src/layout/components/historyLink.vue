<script setup lang="ts">
import { routerStore } from '@/store/routerStore'
const menuStore = routerStore()
</script>

<template>
  <div v-show="menuStore.historyMenu?.length" class="hidden md:grid">
    <div class="m-5 grid grid-flow-col gap-3 justify-start">
      <div
        v-for="(n, index) of menuStore.historyMenu"
        :key="index"
        class="bg-white rounded-md py-2 px-3 text-sm text-gray-600 cursor-pointer shadow-md duration-300 hover:text-white hover:bg-blue-500"
        :class="{ 'text-white bg-blue-500': $route.name === n.name }"
      >
        <router-link :to="{ name: n.name }">
          {{ n.title }}
        </router-link>
        <i class="fas fa-times ml-1 hover:text-red-400 cursor-pointer" @click="menuStore.removeHistoryMenu(n)" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
