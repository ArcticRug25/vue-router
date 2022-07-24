<script setup lang="ts">
import { ref } from 'vue'
import { article } from '@/apis/articleApi'

const { result } = await article()
const articles = ref(result)
</script>

<template>
  <div class="article">
    <ul>
      <li v-for="(article) of articles" :key="article.id">
        {{ article.title }}}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.article {
  ul {
    padding: 30px;
    li {
      padding: 10px;
      margin-bottom: 20px;
      background-color: #8e44ad;
      color: white;
    }
}
}
</style>
