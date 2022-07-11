<script setup lang="ts">
import { watch } from 'vue'
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
  <div class="admin-menu" :class="{ close: routerPinia.close }">
    <div class="menu w-[200px] bg-gray-800">
      <div class="logo h-[56px]">
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
          <dt
            @click="routerPinia.toggleParentMenu(route)
            "
          >
            <section>
              <i :class="route.meta.icon" />
              <span class="text-">{{ route.meta.title }}</span>
            </section>
            <section>
              <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': !route.meta.isClick }" />
            </section>
          </dt>
          <dd :class="!route.meta.isClick || routerPinia.close ? 'hidden' : 'block'">
            <div
              v-for="(childRoute, key) of route.children"
              :key="key"
              :class="{ active: childRoute.meta?.isClick }"
              @click="handle(route, childRoute)"
            >
              {{ childRoute.meta?.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg block md:hidden" @click="routerPinia.toggleState" />
  </div>
</template>

<style lang="scss" scoped>
.admin-menu {
  @apply z-20;
  .menu {
    @apply h-full;
    .logo {
      @apply first-letter:text-gray-300 flex items-center p-4;
    }
    .left-container {
      dl {
        @apply text-gray-300 text-sm relative p-4;
        dt {
          @apply text-sm flex justify-between cursor-pointer items-center;
          section {
            @apply flex items-center;
            i {
              @apply mr-2 text-sm;
            }
          }
        }
        dd {
          div {
            @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer bg-gray-700 hover:bg-blue-500 duration-300;
            &.active {
              @apply bg-blue-700;
            }
          }
        }
      }
    }
  }
}
@media screen and(min-width:768px) {
  .admin-menu {
   &.close {
    .menu{
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
          &:hover {
            dd {
              @apply block absolute left-full top-0 w-[200px] bg-gray-700;
            }
          }
        }
      }
    }

    }
  }
}
@media screen and(max-width:768px) {
  .admin-menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    .menu{
      @apply h-full z-50 absolute;
      &.close {
      }
    }
    .bg {
      @apply bg-gray-100 opacity-75 w-screen h-screen z-40 absolute left-0 top-0;
    }
    &.close {
      @apply hidden;
    }
  }
}
</style>
