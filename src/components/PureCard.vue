<script setup lang="ts">

defineProps<{
  title: string
  animated?: number
}>()

const cardRef = $ref<HTMLElement>()
const animateStart = $ref(false)

</script>

<template>
  <div
    ref="cardRef"
    max-w-4xl m-4 my-4
    text-left
    border="~ rounded zinc-200 dark:zinc-700"
    shadow
    hover:shadow-xl
    duration-300
    :class="animated === undefined ? '' : 'animate-fadein-shift-x-4-800'"
    :style="{ animationDelay: animated ? `${animated * 50}ms` : '', opacity: animateStart || animated === undefined ? '1' : '0' }"
    @animationstart="animateStart = true"
  >
    <div
      flex justify-between
      p-4
      bg-zinc-100 dark:bg-zinc-800
    >
      <h2>{{ title }}</h2>
      <slot name="header-extra" />
    </div>
    <slot />
    <slot name="footer" />
  </div>
</template>
