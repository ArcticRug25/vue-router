<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { routerStore } from '@/store/routerStore'

const routerPinia = routerStore()
const router = useRouter()
const route = useRoute()

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
  if (cRoute && cRoute.meta) {
    cRoute.meta.isClick = true
    router.push(cRoute)
  }
}

watch(route, () => {
  routerPinia.setCurrentMenu(route)
}, {
  immediate: true,
})
</script>

<template>
  <div class="menu w-[200px] bg-gray-800" :class="{ close: routerPinia.close }">
    <div class="logo">
      <i class="fas fa-robot text-blue-500 mr-2 text-[30rpx]" />
      <span class="text-md text-white">ArcticRug25</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl>
        <dt class="p-0" :class="{ 'bg-blue-700 text-white p-3': $route.name === 'admin.home' }" @click="$router.push('/admin')">
          <section>
            <i class="fas fa-home" />
            <span class="text-">首页</span>
          </section>
        </dt>
      </dl>
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
.menu {
  .logo {
    @apply first-letter:text-gray-300 flex items-center p-4;
  }
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm p-4 flex justify-between cursor-pointer items-center;
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
  &.close {
    @apply w-auto;
    .logo {
      i {
        @apply mr-0;
      }
      span {
        @apply hidden;
      }
    }
    .left-container {
      dl {
        dt {
          @apply flex justify-center;
          section {
            i {
              @apply mr-0;
            }
            @apply flex justify-center;
            span {
              @apply hidden;
            }
            &:nth-of-type(2) {
              @apply hidden;
            }
          }
        }
      }
    }
  }
}
@media screen and(max-width:768px) {
  .menu{
    @apply h-screen w-[200px] absolute left-0 top-0 z-10;
    &.close {
    }
  }
}
</style>
