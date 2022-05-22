<script setup lang="ts">
// @unocss-include
defineProps<{
  animated?: number
}>()

const animateStart = $ref(false)

// https://v3.cn.vuejs.org/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
// 使用事件修饰符 .prevent.self 可以阻止事件传播
</script>

<template>
  <div
    class="animate-fadein-shift-x-4-800"
    :style="{ animationDelay:animated !== undefined ? `${animated * 50}ms` : '', opacity: (animated === undefined) ? '1' : (animateStart ? '1' : '0') }"
    @animationstart.prevent.self="animateStart = true"
  >
    <slot />
  </div>
</template>
