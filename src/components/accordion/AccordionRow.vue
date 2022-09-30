<script setup lang="ts">
defineProps<{
  name: string
  title: string
}>()
</script>

<template>
  <div p-4>
    <slot />
  </div>
</template>
