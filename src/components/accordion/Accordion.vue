<script setup lang="ts">
// @unocss-include
const globalProps = defineProps<{
  name: string
  defaultRow?: string
  delay?: number
}>()

let checkedRow = $ref(globalProps.defaultRow)

const slots = useSlots()

const renderButton = (name: string, title: string) => h(
  'label',
  {
    class: {
      'block p-4': true,
      'bg-zinc-100 dark:bg-zinc-800 hover:color-teal-600': true,
      'text-left cursor-pointer shadow': true,
      'underline': name === checkedRow,
    },
    border: '~ zinc-200 dark:zinc-700',
  },
  [
    h('input', {
      type: 'radio',
      name,
      value: name,
      class: 'display-none',
      onclick: () => { checkedRow = name },
    }, {}),
    title,
  ],
)

const renderBody = () => h(
  'div',
  {
    ref: 'accordionBody',
    class: {
      shadow: true,
    },
    border: '~ rounded zinc-200 dark:zinc-700',
  },
  slots.default && slots.default().map(it => h('div', {
    class: {
      'overflow-hidden transition-all': true,
    },
  },
  [
    renderButton(it.props?.name, it.props?.title),
    h('div', {
      class: {
        'transition-all duration-500': true,
        'h-0 scale-y-0': it.props?.name !== checkedRow,
        'p-4': it.props?.name === checkedRow,
      },
    }, it),
  ])),
)

</script>

<template>
  <AnimateComponent :delay="delay">
    <renderBody />
  </AnimateComponent>
</template>
