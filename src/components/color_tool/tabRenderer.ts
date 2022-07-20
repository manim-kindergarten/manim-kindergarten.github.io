// @unocss-include
import TabPane from '~/components/tabs/TabPane.vue'
import Tabs from '~/components/tabs/Tabs.vue'
import ClickCopy from '~/components/ClickCopy.vue'

export interface Color {
  name: string
  value: string
}

export interface ColorStruct {
  category: string
  values: Array<Color>
}

export const renderColorCell = (c: Color) => {
  return h(
    ClickCopy,
    {
      content: c.name,
      style: { backgroundColor: c.value, color: c.value === '#FFFFFF' || c.name.includes('YELLOW') ? '#000000' : '' },
      class: 'btn m-1 shadow',
    },
    { default: () => c.name },
  )
}

export const renderTabPane = (tab: ColorStruct) => {
  return h(
    TabPane,
    {
      name: tab.category,
      tab: tab.category,
      class: 'px-4 pb-4 pt-2 flex flex-wrap',
    },
    { default: () => tab.values.map(renderColorCell) },
  )
}

export const renderTabContainer = (colors: ColorStruct[], name: string) => {
  return h(
    Tabs,
    {
      name,
    },
    { default: () => colors.map(it => renderTabPane(it)) },
  )
}
