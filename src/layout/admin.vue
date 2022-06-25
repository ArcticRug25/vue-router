<script setup lang="ts">
import Menu from './components/menu.vue'
import Navbar from './components/navbar.vue'
import HistoryLink from './components/historyLink.vue'
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <Menu />
    <div class="content flex-1 bg-gray-200">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
