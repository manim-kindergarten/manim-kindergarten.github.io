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
    my-2xl
    flex justify-center
    animate-fade-in animate-count-1
  >
    <ToolTipsProvider :gap="6">
      <ToolTip
        v-for="(it, i) in links" :key="i"
        :description="t(it.description)"
      >
        <a :href="it.url" icon-btn :class="it.icon" />
      </ToolTip>
    </ToolTipsProvider>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
