<script setup lang="ts">
import { useLogo } from '~/components/canvas/useTriangle'
import { isDark } from '~/composables/dark'

defineProps<{
  width: number
  height: number
}>()

const canvasRef = ref<HTMLCanvasElement>()
const initCanvas = () => {
  useLogo({
    canvas: canvasRef.value,
    dark: isDark.value,
  })
}

onMounted(() => {
  nextTick(initCanvas)
  // 当颜色模式切换时重绘 Logo
  watchEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isDark.value
    nextTick(() => { initCanvas() })
  })
})

</script>

<template>
  <canvas ref="canvasRef" :width="width" :height="height" />
</template>
