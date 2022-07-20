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
  <div
    leading-none
    @mouseleave="cancelCopy"
  >
    <span mr-1>
      {{ content }}
    </span>
    <span v-if="!copyed" leading-none icon-btn text-sm class="i-carbon-copy animate-fadein-shift-x-1-300" @click="clickCopy" />
    <span v-else leading-none icon-btn text-sm class="i-carbon-checkmark animate-fadein-shift-x-1-300" />
  </div>
</template>

<style scoped>

</style>
