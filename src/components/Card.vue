<script setup lang="ts">
import type { Action } from '~/data/CardData'

const { t } = useI18n()

defineProps<{
  title: string
  description?: string
  action?: Array<Action>
  previous?: Array<{ label: string; link: string }>
  delay?: number
}>()

</script>

<template>
  <pure-card :title="title" :delay="delay" ma>
    <template #header-extra>
      <div flex>
        <a v-for="(a, i) of action" :key="i" flex icon-btn class="xs:(btn op-100)" text-sm ml-2 items-center :href="a.url" :title="t(a.label)">
          <div display-none sm:block mr-1>{{ t(a.label) }}</div>
          <div :class="a.icon" />
        </a>
      </div>
    </template>
    <p p-4 bg-zinc-50 dark:bg-zinc-900>
      {{ description }}
    </p>
    <template #footer>
      <details v-if="previous" p-4>
        <summary>
          {{ t('docs.previous') }}
        </summary>
        <ul>
          <li v-for="(p, i) in previous" :key="i" ml-4>
            <a :href="p.link" underline hover:color-teal-600>{{ p.label }}</a>
          </li>
        </ul>
      </details>
    </template>
  </pure-card>
</template>
