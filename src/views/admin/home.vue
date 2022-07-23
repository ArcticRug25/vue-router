<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { echart1, echart2 } from './echart'
interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}
const cards = ref<ICard[]>([
  { title: '总人数', price: 23343, icon: 'fas fa-address-card', iconColor: 'text-blue-500', total: 3892982, totalTitle: '总人数' },
  { title: '销售额', price: 18393, icon: 'fas fa-apple-alt ', iconColor: 'text-violet-500', total: 9303429, totalTitle: '总销售额' },
  { title: '订单数', price: 1243, icon: 'fas fa-award', iconColor: 'text-green-600', total: 83493, totalTitle: '总订单数' },
  { title: '评论数', price: 89944, icon: 'fas fa-baseball-ball', iconColor: 'text-red-500', total: 48920, totalTitle: '总评论' },
])

nextTick(() => {
  echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1)
  echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2)
})
</script>

<template>
  <div>
    <div class="grid md:grid-cols-4 gap-3">
      <el-card v-for="(card, index) of cards" :key="index" shadow="hover" :body-style="{ padding: '20px' }" class="cursor-pointer">
        <template #header>
          <div class="flex justify-between items-center">
            {{ card.title }}
            <el-tag type="danger" size="small" effect="dark">
              月
            </el-tag>
          </div>
        </template>

        <section class="flex mt-2 justify-between items-center">
          <span class="text-3xl">$29322</span>
          <i :class="[card.icon, card.iconColor]" class="text-4xl" />
        </section>
        <section class="text-base mt-5 flex justify-between">
          {{ card.totalTitle }}
          <span>{{ card.total }}</span>
        </section>
      </el-card>
    </div>

    <div class="mt-5 grid md:grid-cols-2 gap-4">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            用户统计
          </div>
        </template>
        <div id="echart1" class=" p-2 h-80 w-full" />
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            用户统计
          </div>
        </template>
        <div id="echart2" class=" p-2 h-80 w-full" />
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
