<script setup lang="ts">
import { routerStore } from './store/routerStore'
routerStore().getRoutes()
</script>

<template>
  <router-view />
</template>

<style>
</style>
