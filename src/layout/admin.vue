<script setup lang="ts">
import Menu from './components/menu.vue'
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
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
