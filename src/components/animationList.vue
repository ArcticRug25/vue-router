<script setup lang="ts">
import gsap from 'gsap'
import type { RendererElement } from 'vue'

interface AnimationProps {
  tag?: string
  duration?: number
  delay?: number
}
const props = withDefaults(defineProps<AnimationProps>(), {
  tag: 'div',
  duration: 0.5,
  delay: 0.2,
})
const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  })
}

const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    delay: (el.dataset.index) * props.delay,
  })
}
</script>

<template>
  <div class="animate-list">
    <TransitionGroup appear :tag="props.tag" @before-enter="beforeEnter" @enter="enter">
      <slot />
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.animate-list {
  position: relative;
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
}
</style>
