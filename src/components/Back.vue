<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <a
    href="#"
    text-sm
    flex
    font-mono
    @click="router.back()"
  >
    ../
  </a>
</template>

