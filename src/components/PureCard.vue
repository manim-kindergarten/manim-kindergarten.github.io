<script setup lang="ts">

defineProps<{
  title: string
  delay?: number
}>()

</script>

<template>
  <animate-component
    max-w-4xl m-4 my-4
    text-left
    border="~ rounded zinc-200 dark:zinc-700"
    shadow
    hover:shadow-xl
    duration-300
    :delay="delay"
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
  </animate-component>
</template>
