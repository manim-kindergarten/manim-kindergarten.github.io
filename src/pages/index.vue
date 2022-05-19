<script setup lang="ts">
import links from '~/data/links'
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div
    max-w-lg
    ma lg:mt-4rem
    p-2xl lg:p-0
    class="animate-fadein-shift-y--2-1000"
  >
    <img v-if="!isDark" src="/favicon.svg">
    <img v-else src="/favicon-dark.svg">
  </div>
  <div
    text-xl sm:text-2xl lg:text-3xl
    flex justify-center space-x-3xl
    animate-fade-in animate-count-1
  >
    <IconTip
      v-for="(it, i) in links" :key="i"
      :name="it.name"
      :description="t(it.description)"
      :icon="it.icon"
      :url="it.url"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
