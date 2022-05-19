<script setup lang="ts">
const rRef = $ref(0)
const gRef = $ref(0)
const bRef = $ref(0)

const hex = computed(() => {
  const rhex = rRef.toString(16)
  const ghex = gRef.toString(16)
  const bhex = bRef.toString(16)
  if (!/^[0-9a-f]{0,2}$/i.test(rhex)
    || !/^[0-9a-f]{0,2}$/i.test(ghex)
    || !/^[0-9a-f]{0,2}$/i.test(bhex))
    return 'Error'

  return `#${rhex.length === 1 ? (`0${rhex}`) : rhex}` + `${ghex.length === 1 ? (`0${ghex}`) : ghex}` + `${bhex.length === 1 ? (`0${bhex}`) : bhex}`
})

const avg = computed(() => {
  return (rRef + gRef + bRef) / 3
})

</script>

<template>
  <PureCard :title="'RGB to HEX'" ma>
    <div p-4 flex flex-wrap>
      <div border="~ rounded gray-200 dark:gray-700" leading-normal mx-2 my-1 flex-nowrap>
        <span px-2 py-1 border="r gray-200 dark:gray-700">R</span>
        <input
          v-model="rRef" type="number" py-1
          focus:outline-none pl-2 w-4rem max="255" min="0" leading-none rounded
        >
      </div>
      <div border="~ rounded gray-200 dark:gray-700" leading-normal mx-2 my-1 flex-nowrap>
        <span px-2 py-1 border="r gray-200 dark:gray-700">G</span>
        <input
          v-model="gRef" type="number" py-1
          focus:outline-none pl-2 w-4rem max="255" min="0" leading-none rounded
        >
      </div>
      <div border="~ rounded gray-200 dark:gray-700" leading-normal mx-2 my-1 flex-nowrap>
        <span px-2 py-1 border="r gray-200 dark:gray-700">B</span>
        <input
          v-model="bRef" type="number" py-1
          focus:outline-none pl-2 w-4rem max="255" min="0" leading-none rounded
        >
      </div>
      <ClickCopy
        :content="hex"
        :style="{backgroundColor: hex, color: avg > 128 ? 'black': 'white'}"
        rounded shadow
        px-4 mx-2 py-1 my-1
      />
    </div>
  </PureCard>
</template>

