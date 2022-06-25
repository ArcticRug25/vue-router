<script setup lang="ts">
import { reactive } from 'vue'

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
const menus = reactive<IMenu[]>([{
  title: '错误页面',
  icon: 'fab fa-bimobject',
  active: true,
  children: [
    { title: '404页面', active: true },
    { title: '403页面' },
    { title: '500页面' },
  ],
}, {
  title: '编辑器',
  icon: 'fab fa-app-store-ios',
  children: [
    { title: 'Markdown编辑器' },
    { title: '富文本编辑器' },
  ],
}])

const resetMenus = () => {
  menus.forEach((menu) => {
    menu.active = false
    menu.children?.forEach(m => m.active = false)
  })
}

const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenus()
  pmenu.active = true
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
      <dl v-for="(menu, index) of menus" :key="index">
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon" />
            <span class="text-">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': !menu.active }" />
          </section>
        </dt>
        <dd v-for="(cmenu, key) of menu.children" v-show="menu.active" :key="key" :class="{ active: cmenu.active }">
          {{ cmenu.title }}
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
