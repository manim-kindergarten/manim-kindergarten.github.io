<script setup lang="ts">
defineProps<{
  name: string
  link: string
  avatar: string
}>()
</script>

<template>
  <a :href="link" :title="name">
    <img :src="avatar" :alt="name" w-3rem h-3rem class="rounded-1\/2">
  </a>
</template>
