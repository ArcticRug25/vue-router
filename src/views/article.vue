<script setup lang="ts">
import { ref } from 'vue'
import { article } from '@/apis/articleApi'
import AnimationList from '@/components/animationList.vue'

const articles = ref()
article().then(({ result }) => articles.value = result)
const del = (index: number) => {
  articles.value.splice(index, 1)
}
</script>

<template>
  <div class="article">
    <AnimationList tag="ul">
      <li v-for="(article, index) of articles" :key="article.id" :data-index="index" @click="del(index)">
        {{ article.title }}
      </li>
    </AnimationList>
  </div>
</template>

<style lang="scss" scoped>
.article {
  position: relative;
  height: 100vh;
  width: 100vw;
  ul {
    padding: 30px;
    li {
      padding: 10px;
      margin-bottom: 20px;
      background-color: #8e44ad;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>
