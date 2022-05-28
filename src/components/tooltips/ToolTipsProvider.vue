<script setup lang="ts">
withDefaults(defineProps<{
  gap?: number
}>(), {
  gap: 2,
})

let tipOpacity = $ref(0)
let tipContent = $ref('')
const tipPosition = reactive({ x: 0, y: 0 })

const onLeave = () => {
  tipOpacity = 0
}

const refreshTipContent = (content: string) => {
  tipContent = content
  tipOpacity = 1
}

const onEnter = (e: MouseEvent, description: string) => {
  tipContent = description
  tipPosition.x = (e.target as HTMLElement).offsetLeft + (e.target as HTMLElement).clientWidth / 2
  tipPosition.y = (e.target as HTMLElement).offsetTop + (e.target as HTMLElement).offsetHeight + 10
  tipOpacity = 1
}

defineExpose({
  onEnter, onLeave, refreshTipContent,
})

</script>

<template>
  <div flex flex-wrap justify-center :gap="gap">
    <slot />
  </div>
  <div
    class="tooltip"
    absolute
    px-4 py-2
    border="rounded"
    bg="zinc-700 opacity-75"
    backdrop-blur-sm
    text="white sm"
    z-999
    :style="{
      opacity: tipOpacity,
      visibility: tipOpacity ? 'visible' : 'hidden',
      left: `${tipPosition.x}px`,
      top: `${tipPosition.y}px`,
    }"
  >
    <p v-for="row in tipContent.split('\n')" :key="row">
      {{ row }}
    </p>
  </div>
</template>

<style scoped>
.tooltip {
  transition: opacity .3s, visibility .3s;
  transform: translateX(-50%);
}
.tooltip::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 50%;
  margin-left: -5px;
  margin-top:-10px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(31, 41, 55, 0.75) transparent;
}
</style>
