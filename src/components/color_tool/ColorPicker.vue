<script setup lang="ts">
const colorRef = $ref('#000000')
const rgb = computed(() => {
  const color = [0, 0, 0]
  colorRef.replace(/^\#?([0-9A-F]{2,2})([0-9A-F]{2,2})([0-9A-F]{2,2})$/i, (...matches) => {
    color[0] = Number.parseInt(matches[1], 16)
    color[1] = Number.parseInt(matches[2], 16)
    color[2] = Number.parseInt(matches[3], 16)
    return ''
  })
  return color
})

</script>

<template>
  <PureCard :title="'Color Picker'" ma>
    <div p-4>
      <label border="~ rounded gray-200 dark:gray-700" leading-normal mx-2>
        <span px-2 border="r gray-200 dark:gray-700">Color</span>
        <input
          v-model="colorRef" type="color"
          focus:outline-none leading-none
          h-20px
          px-1
        >
      </label>
      <ClickCopy
        :content="colorRef"
        :style="{backgroundColor: colorRef, color: rgb.reduce((x, y)=>x+y, 0) > 376 ? 'black': 'white'}"
        rounded shadow
        px-4 mx-2 py-1
      />
      <ClickCopy
        :content="`[${rgb.join(', ')}]`"
        :style="{backgroundColor: colorRef, color: rgb.reduce((x, y)=>x+y, 0) > 376 ? 'black': 'white'}"
        rounded shadow
        px-4 mx-2 py-1
      />
    </div>
  </PureCard>
</template>
