<script setup lang="ts">
/**
 * v-for 失败了捏
 * 例如
 * <ToolTipProvider>
 *   <ToolTip v-for="(it, index) in xxx" :key="index" :title="it.description">
 *     <a :href="it.url"><div :class="it.icon"></a>
 *   </ToolTip>
 * </ToolTipProvider>
 * 这样就会造成在生成元素的时候，ToolTip 的 slots 被包含在一个子 div 中
 * 也就是说下面的 slots.default() 中只有一个 div，而通过 v-for 创建的元素在 slots.default()[0].children 中
 * 所以现在所能想到的方法就是：先判断这玩意是不是上面的一种情况，如果是，则使用 children 易主（暂未实现）
 * 否则就按照正常的程序执行
 *
 * 像下面这样手写，一点问题都没有，就是很奇怪
 * <ToolTipProvider>
 *   <ToolTip title="123">
 *     <a :href="123.com"><div :class="123"></a>
 *   </ToolTip>
 *   <ToolTip title="456">
 *     <a :href="123.com"><div :class="123"></a>
 *   </ToolTip>
 *   <ToolTip title="789">
 *     <a :href="123.com"><div :class="123"></a>
 *   </ToolTip>
 * </ToolTipProvider>
 */

let tipOpacity = $ref(0)
let tipContent = $ref('')
const tipPosition = reactive({ x: 0, y: 0 })

const onLeave = () => {
  tipOpacity = 0
}

const onEnter = (e: MouseEvent, description: string) => {
  tipOpacity = 1
  tipContent = description
  tipPosition.x = (e.target as HTMLElement)?.offsetLeft
}

defineExpose({
  onEnter, onLeave,
})

</script>

<template>
  <div flex justify-center gap="2">
    <slot />
  </div>
  <div relative>
    <div
      absolute
      bg="gray-700"
      text="white"
      z-999
      :style="{
        opacity: tipOpacity,
        left: `${tipPosition.x}px`,
        top: `${tipPosition.y}px`,
        transform: 'translateX(-50%)',
      }"
    >
      {{ tipContent }}
    </div>
  </div>
</template>
