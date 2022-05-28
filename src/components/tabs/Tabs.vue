<script setup lang="ts">
// @unocss-include

const globalProps = defineProps<{
  // 这一个容器的名称
  name: string
  // 默认展开的那个项
  defaultTab?: string
}>()

const slots = useSlots()

let currentTabName = $ref(globalProps.defaultTab)
let currentTabPos = $ref({ left: 0, width: 0 })

const renderTabContent = () => {
  return slots.default?.().find((it) => {
    if (!currentTabName)
      return true

    return it.props?.name === currentTabName
  })
}

const isCurrent = (name: string, index: number) => {
  const isInit = index === 0 && currentTabName === undefined
  return isInit || currentTabName === name
}

const onLabelClick = (e: MouseEvent, name: string) => {
  currentTabName = name
  currentTabPos = {
    left: (e.target as HTMLElement)?.offsetLeft,
    width: (e.target as HTMLElement)?.offsetWidth,
  }
  // console.log(currentTabPos.left, currentTabPos.width)
}

</script>

<template>
  <div>
    <div
      class="tab-bar"
      relative px-4 pt-2 flex flex-nowrap overflow-x-scroll overflow-y-hidden
    >
      <label
        v-for="(tabIcon,index) in slots?.default?.()"
        :key="tabIcon.props?.name"
        class="tab-label"
        :class="isCurrent(tabIcon.props?.name, index) ? 'text-teal-600': 'b-transparent'"
        px-2 pt-1 mr-2 icon-btn b-b-2
        @click="e => onLabelClick(e, tabIcon.props?.name)"
      >{{ tabIcon.props?.tab }}</label>
      <div
        class="tab-indicator"
        absolute bottom-0 h-0 b-b-2 b-teal-600
        :style="{
          left: `${currentTabPos.left}px`,
          width: `${currentTabPos.width}px`,
        }"
      />
    </div>
    <render-tab-content />
  </div>
</template>

<style scoped>
.tab-bar::-webkit-scrollbar {
  height: 2px;
}
.tab-bar::-webkit-scrollbar-track {
  background: transparent;
}
.tab-bar::-webkit-scrollbar-thumb {
  background: #eee;
}
.dark .tab-bar::-webkit-scrollbar-thumb {
  background-color: #333;
}
.tab-indicator {
  transition: width .2s, left .2s;
}
</style>
