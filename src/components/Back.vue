<script setup lang="ts">
const router = useRouter()
defineProps<{
  url?: string
}>()
</script>

<template>
  <a
    :href="url || '#'"
    text-sm
    flex
    font-mono
    @click="url === undefined ? router.back() : () => {}"
  >
    ../
  </a>
</template>

