<script setup lang="ts">
defineProps<{
  name: string
  title: string
}>()
</script>

<template>
  <slot />
</template>
