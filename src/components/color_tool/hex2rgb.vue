<script setup lang="ts">
const hexRef = $ref('#000')

const rgb = computed(() => {
  const color = [0, 0, 0]
  if (hexRef.match(/^\#?[0-9A-F]{6,6}$/i)) {
    hexRef.replace(/^\#?([0-9A-F]{2,2})([0-9A-F]{2,2})([0-9A-F]{2,2})$/i, (...matches) => {
      color[0] = Number.parseInt(matches[1], 16)
      color[1] = Number.parseInt(matches[2], 16)
      color[2] = Number.parseInt(matches[3], 16)
      return ''
    })
  }
  else if (hexRef.match(/^\#[0-9A-F]{3,3}$/i)) {
    hexRef.replace(/^\#?([0-9A-F])([0-9A-F])([0-9A-F])$/i, (...matches) => {
      color[0] = Number.parseInt(matches[1] + matches[1], 16)
      color[1] = Number.parseInt(matches[2] + matches[2], 16)
      color[2] = Number.parseInt(matches[3] + matches[3], 16)
      return ''
    })
  }
  return color
})
</script>

<template>
  <div p-4 flex flex-wrap>
    <div border="~ rounded gray-200 dark:gray-700" leading-normal mx-2 my-1 flex-nowrap>
      <span px-2 py-1 border="r gray-200 dark:gray-700">HEX</span>
      <input v-model="hexRef" py-1 focus:outline-none pl-2 leading-none rounded maxlength="7">
    </div>
    <click-copy
      :content="`[${rgb.join(', ')}]`"
      :style="{ backgroundColor: hexRef, color: rgb.reduce((x, y) => x + y, 0) > 376 ? 'black' : 'white' }" rounded shadow px-4
      mx-2 py-1 my-1
    />
  </div>
</template>
