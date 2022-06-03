<script setup lang="ts">
defineProps<{
  name: string
  link: string
  avatar: string
}>()
</script>

<template>
  <a :href="link" :title="name" target="_blank">
    <img
      :src="avatar"
      :alt="name"
      w-3rem h-3rem
      hover:shadow-lg
      transition-shadow
      class="rounded-1\/2"
    >
  </a>
</template>
