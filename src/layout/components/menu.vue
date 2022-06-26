<script setup lang="ts">
import { reactive } from 'vue'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { routerStore } from '@/store/routerStore'

const routerPinia = routerStore()

const reset = () => {
  routerPinia.routes.forEach((route) => {
    route.meta.isClick = false
    route.children.forEach((route) => {
      if (route.meta)
        route.meta.isClick = false
    })
  })
}

const handle = (pmenu: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
  reset()
  pmenu.meta.isClick = true
  if (cRoute && cRoute.meta)
    cRoute.meta.isClick = true
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-blue-500 mr-2 text-[30rpx]" />
      <span class="text-md">ArcticRug25</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(route, index) of routerPinia.routes" :key="index">
        <dt @click="handle(route)">
          <section>
            <i :class="route.meta.icon" />
            <span class="text-">{{ route.meta.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': !route.meta.isClick }" />
          </section>
        </dt>
        <dd v-for="(childRoute, key) of route.children" v-show="route.meta.isClick" :key="key" :class="{ active: childRoute.meta?.isClick }" @click="handle(route, childRoute)">
          {{ childRoute.meta?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-sm;
          }
        }
      }
      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
        &.active {
          @apply bg-blue-700;
        }
      }
    }
  }
}
</style>
