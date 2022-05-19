<script setup lang="ts">
defineProps<{
  name: string | undefined
  tab: string | undefined
}>()
</script>

<template>
  <div>
    <slot />
  </div>
</template>
