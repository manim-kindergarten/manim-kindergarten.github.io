<script setup lang="ts">
defineProps<{
  content: string
  value: string
}>()

let mode = $ref<'NAME' | 'RGB'>('NAME')

function toggleMode() {
  if (mode === 'NAME')
    mode = 'RGB'
  else
    mode = 'NAME'
}
</script>

<template>
  <ClickCopy
    :content="mode === 'NAME' ? content : value"
    :style="{backgroundColor: value, color: value === '#FFFFFF' || content.includes('YELLOW') ? '#000000' : ''}"
    class="btn m-1 shadow"
    @content-clicked="toggleMode"
  />
</template>
