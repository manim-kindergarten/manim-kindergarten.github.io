<script setup lang="ts">
import { isDark } from '~/composables'
</script>

<template>
  <img v-if="!isDark" src="/logo/logo.png">
  <img v-else src="/logo/logo-dark.png">
</template>
