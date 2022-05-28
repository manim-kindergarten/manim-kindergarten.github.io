<script setup lang="ts">
const props = defineProps<{
  description: string
}>()
</script>

<template>
  <div
    @mouseenter="e => ($parent as any)?.onEnter(e, props.description)"
    @mouseleave="($parent as any)?.onLeave()"
  >
    <slot />
  </div>
</template>
