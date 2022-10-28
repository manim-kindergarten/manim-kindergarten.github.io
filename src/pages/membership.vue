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
      <ToolTipsProvider :gap="1">
        <ToolTip
          v-for="(it, i) in coreMembers.data" :key="i"
          :description="it.name"
        >
          <Avatar :avatar="it.avatar" :name="it.name" :link="it.link" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="ups" :title="t('membership.bilibili-video-creators')">
      <p color-zinc-300 dark:color-zinc-600 pb-2>
        按照昵称拼音排序，如需加入名单请至 <a href="https://github.com/manim-kindergarten/manim-kindergarten.github.io/issues/9" target="_blank" underline>issues</a> 反馈
      </p>
      <ToolTipsProvider :gap="1">
        <ToolTip
          v-for="(it, i) in upMembers.data" :key="i"
          :description="it.name"
        >
          <Avatar :avatar="it.avatar" :name="it.name" :link="it.link" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
    <AccordionRow name="thanks" :title="t('membership.special-thanks')">
      <ToolTipsProvider :gap="1">
        <ToolTip
          v-for="(it, i) in specialThanks.data" :key="i"
          :description="it.name"
        >
          <Avatar :avatar="it.avatar" :name="it.name" :link="it.link" />
        </ToolTip>
      </ToolTipsProvider>
    </AccordionRow>
  </Accordion>
</template>
