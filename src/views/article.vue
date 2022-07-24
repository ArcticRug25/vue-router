<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { article } from '@/apis/articleApi'

const articles = ref()
article().then(({ result }) => articles.value = result)
const del = (index: number) => {
  articles.value.splice(index, 1)
}

const beforeEnter = (el: Element) => {
  gsap.set(el, {
    opacity: 0,
  })
}

const enter = (el: Element) => {
  if (el instanceof HTMLElement) {
    gsap.to(el, {
      opacity: 1,
      delay: (el.dataset.index as unknown as number) * 0.2,
    })
  }
}
</script>

<template>
  <div class="article">
    <TransitionGroup appear tag="ul" @before-enter="beforeEnter" @enter="enter">
      <li v-for="(article, index) of articles" :key="article.id" :data-index="index" @click="del(index)">
        {{ article.title }}}
      </li>
    </TransitionGroup>
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

.v-leave-active {
  transition: all 1s ease;
  position: absolute;
  width: 100%;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.v-move {
  transition: all 1s ease;
}
</style>
