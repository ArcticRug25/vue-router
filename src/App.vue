<script setup lang="ts">
import { info } from './apis/userApi'
const res = await info()
</script>

<template>
  <router-view />
</template>

<style>
</style>
