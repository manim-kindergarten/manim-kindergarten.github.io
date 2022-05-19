<script setup lang="ts">
import type { CardData } from '~/data/CardData'

const { t } = useI18n()

const tools: CardData[] = [
  {
    title: 'tools.color-tools.title',
    description: 'tools.color-tools.description',
    action: [{ label: 'Go', icon: 'i-carbon-arrow-right', url: '/tool/color' }],
  },
  {
    title: 'tools.check-xelatex-packages.title',
    description: 'tools.check-xelatex-packages.description',
    action: [{ label: 'Download', icon: 'i-carbon-download', url: '/download/check_xelatex_packages.py' }],
  },
  {
    title: 'tools.check-manim-dependencies.title',
    description: 'tools.check-manim-dependencies.description',
    action: [{ label: 'Download', icon: 'i-carbon-download', url: '/download/check_manim_dependencies.py' }],
  },
]
</script>

<template>
  <Card
    v-for="(it, i) in tools" :key="i"
    :title="t(it.title)"
    :description="t(it.description)"
    :action="it.action"
    :animated="i"
  />
</template>
