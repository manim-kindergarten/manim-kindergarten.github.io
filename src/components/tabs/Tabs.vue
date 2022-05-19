<script setup lang="ts">
// @unocss-include

import { createTextVNode } from 'vue'

const globalProps = defineProps<{
  // 这一个容器的名称
  name: string
  // 默认展开的那个项
  defaultTab?: string
}>()

const slots = useSlots()

let currentTabName = $ref(globalProps.defaultTab)

const renderOneTabIcon = (value: string, label: string, index: number) => {
  return h(
    'label',
    {
      class: {
        'px-2 pt-1 mr-2 icon-btn': true,
        'border-b-2': (currentTabName === value) || (index === 0 && !currentTabName),
      },
    },
    [h('input',
      {
        type: 'radio',
        name: globalProps.name,
        value,
        onclick: () => { currentTabName = value },
        style: {
          display: 'none',
        },
      },
      {}),
    createTextVNode(label),
    ],
  )
}

const renderTabBar = () => {
  return h(
    'div',
    {
      class: 'px-4 pt-2 flex flex-nowrap',
      style: {
        overflowX: 'scroll',
        overflowY: 'hidden',
      },
    },
    slots.default && slots.default().map((it, index) => {
      return renderOneTabIcon(it.props?.name, it.props?.tab, index)
    }),
  )
}

const renderTabContent = () => {
  return slots.default && slots.default().find((it) => {
    if (!currentTabName)
      return true

    return it.props?.name === currentTabName
  })
}

</script>

<template>
  <div>
    <render-tab-bar />
    <render-tab-content />
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  height: 2px;
}
div::-webkit-scrollbar-track {
  background: transparent;
}
div::-webkit-scrollbar-thumb {
  background: #eee;
}
.dark div::-webkit-scrollbar-thumb {
  background-color: #333;
}
</style>
