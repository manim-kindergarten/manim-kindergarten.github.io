<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'
const { locale } = useI18n()
locale.value = 'zh-CN'

useHead({
  title: 'Manim Kindergarten',
  meta: [
    { name: 'description', content: 'Manim Kindergarten —— manim 国内爱好者的聚集地' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
