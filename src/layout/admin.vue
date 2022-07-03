<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import Menu from './components/menu.vue'
import Navbar from './components/navbar.vue'
import HistoryLink from './components/historyLink.vue'
import { routerStore } from '@/store/routerStore'
const route = useRoute()
const menuStore = routerStore()
menuStore.init()
onBeforeRouteUpdate(() => {
  menuStore.addHistoryMenu(route)
})
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>

<template>
  <div class="admin grid min-h-screen w-screen md:grid-cols-[auto_1fr]">
    <Menu />
    <div class="content bg-gray-200 grid grid-rows-[auto_1fr]">
      <div>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view v-slot="{ Component }">
          <Transition
            appear
            class="animate__animated"
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutLeft"
          >
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animate__fadeInRight {
  animation-duration: .5s;
}
.animate__fadeOutLeft{
  animation-duration: .3s;
}
</style>
