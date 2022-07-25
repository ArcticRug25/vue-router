<script setup lang="ts">
import gsap from 'gsap'

interface AnimationProps {
  tag?: string
}
const props = withDefaults(defineProps<AnimationProps>(), {
  tag: 'div',
})
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
  <div class="animate-list">
    <TransitionGroup appear :tag="props.tag" @before-enter="beforeEnter" @enter="enter">
      <slot />
    </TransitionGroup>
  </div>
</template>

<style scoped>
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
