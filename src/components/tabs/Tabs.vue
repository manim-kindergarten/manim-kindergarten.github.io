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
const themeColor = 'rgba(13, 148, 136, var(--un-text-opacity))'

const renderOneTabIcon = (value: string, label: string, index: number) => {
  const showInitBorder = index === 0 && !currentTabName
  return h(
    'label',
    {
      class: {
        'px-2 pt-1 mr-2 icon-btn border-b-2': true,
      },
      style: {
        color: showInitBorder || value === currentTabName ? themeColor : '',
        borderBottomColor: showInitBorder ? themeColor : 'transparent',
      },
      onclick() {
        currentTabName = value
        currentTabPos = {
          left: this.offsetLeft,
          width: this.offsetWidth,
        }
        // console.log(currentTabPos.left, currentTabPos.width)
      },
    },
    label,
  )
}

const renderTabBar = () => {
  return h(
    'div',
    {
      class: 'relative px-4 pt-2 flex flex-nowrap overflow-x-scroll overflow-y-hidden',
    },
    [
      h('div', {
        class: {
          'absolute bottom-0 h-0 border-b-2': true,
        },
        style: {
          left: `${currentTabPos.left}px`,
          width: `${currentTabPos.width}px`,
          transition: 'width .2s, left .2s',
          borderBottomColor: themeColor,
        },
      }),
      ...(slots.default?.().map((it, index) => {
        return renderOneTabIcon(it.props?.name, it.props?.tab, index)
      }) ?? []),
    ],
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
