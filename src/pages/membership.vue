<script setup lang="ts">
import * as coreMembers from '~/data/core-members.json'
import * as upMembers from '~/data/up-members.json'
import * as specialThanks from '~/data/thanks.json'

const { t } = useI18n()

</script>

<template>
  <Accordion
    :name="'membership'"
    :delay="0"
    default-row="core"
    max-w-5xl ma
  >
    <AccordionRow name="core" :title="t('membership.core-members')">
      <div flex justify-center flex-wrap>
        <Avatar
          v-for="(p, i) in coreMembers.data"
          :key="i"
          :avatar="p.avatar"
          :name="p.name"
          :link="p.link"
          p-1
        />
      </div>
    </AccordionRow>
    <AccordionRow name="ups" :title="t('membership.bilibili-video-creators')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照昵称拼音排序，如有遗漏请联系鹤翔万里
      </p>
      <div flex justify-center flex-wrap>
        <Avatar
          v-for="(p, i) in upMembers.data"
          :key="i"
          :avatar="p.avatar"
          :name="p.name"
          :link="p.link"
          p-1
        />
      </div>
    </AccordionRow>
    <AccordionRow name="thanks" :title="t('membership.special-thanks')">
      <div flex justify-center flex-wrap>
        <Avatar
          v-for="(p, i) in specialThanks.data"
          :key="i"
          :avatar="p.avatar"
          :name="p.name"
          :link="p.link"
          p-1
        />
      </div>
    </AccordionRow>
  </Accordion>
</template>
