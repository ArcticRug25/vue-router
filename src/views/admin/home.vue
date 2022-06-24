<script setup lang="ts">
interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}
const menus = [{
  title: '错误页面',
  icon: 'fas fa-angle-down',
  active: true,
  children: [
    { title: '404页面', active: true },
    { title: '403页面' },
    { title: '500页面' },
  ],
}, {
  title: '编辑器',
  children: [
    { title: 'Markdown编辑器' },
    { title: '富文本编辑器' },
  ],
},
] as IMenu[]
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-300 flex items-center">
        <i class="fas fa-robot text-blue-500 mr-2 text-[25rpx]" />
        <span class="text-md">ArcticRug25</span>
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <dl v-for="(menu, index) of menus" :key="index">
          <dt>
            <section>
              <i class="fab fa-behance-square" />
              <span class="text-">{{ menu.title }}</span>
            </section>
            <section>
              <i :class="menu.icon" />
            </section>
          </dt>
          <dd v-for="(cmenu, key) of menu.children" v-show="menu.active" :key="key" :class="{ active: cmenu.active }">
            {{ cmenu.title }}
          </dd>
        </dl>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200" />
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
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer hover:bg-blue-500 duration-300;
        &.active {
          @apply bg-blue-700;
        }
      }
    }
  }
}
</style>
