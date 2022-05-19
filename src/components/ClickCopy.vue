<script setup lang="ts">
const globalProps = defineProps<{
  content: string
}>()

let copyed = $ref(false)

const clickCopy = () => {
  navigator.clipboard.writeText(globalProps.content)
  copyed = true
}

const cancelCopy = () => {
  setTimeout(() => { copyed = false }, 1000)
}
</script>

<template>
  <label
    leading-none
    @mouseleave="cancelCopy"
  >
    {{ content }}
    <span v-if="!copyed" icon-btn text-sm class="i-carbon-copy animate-fadein-shift-x-1-300" @click="clickCopy" />
    <span v-else icon-btn text-sm class="i-carbon-checkmark animate-fadein-shift-x-1-300" />
  </label>
</template>

<style scoped>

</style>
