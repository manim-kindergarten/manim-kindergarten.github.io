<script setup lang="ts">
// @unocss-include
withDefaults(defineProps<{
  delay?: number
  animation?: string
}>(), {
  delay: 0,
  animation: 'animate-fadein-shift-x-4-800',
})

const animateStart = $ref(false)

// https://v3.cn.vuejs.org/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
// 使用事件修饰符 .prevent.self 可以阻止事件传播
</script>

<template>
  <div
    :class="animation"
    :style="{ animationDelay:delay !== undefined ? `${delay * 50}ms` : '', opacity: (delay === undefined) ? '1' : (animateStart ? '1' : '0') }"
    @animationstart.prevent.self="animateStart = true"
  >
    <slot />
  </div>
</template>
