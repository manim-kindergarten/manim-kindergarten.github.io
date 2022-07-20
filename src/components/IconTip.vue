<script setup lang="ts">

defineProps<{
  name: string
  description: string
  icon: string
  url: string
}>()

let tipShow = $ref(false)
const iconRef = $ref<HTMLElement>()
const tipRef = $ref<HTMLElement>()

const iconHover = () => {
  tipShow = true
  nextTick(() => {
    tipRef.style.left = `${iconRef.offsetLeft - tipRef.clientWidth / 2 + iconRef.clientWidth / 2}px`
  })
}

</script>

<template>
  <div block text-center>
    <div ref="iconRef">
      <a :href="url" :class="icon" icon-btn lg:text-3xl @mouseenter="iconHover" @mouseleave="tipShow = false" />
    </div>
    <div
      ref="tipRef"
      class="tooltip"
      text-1rem
      bg-gray-800 color-white
      border-rounded
      z-1
      px-4 py-2 mt-2
      shadow
      absolute
      duration-300
      :style="{ opacity: tipShow ? 1 : 0 }"
    >
      <h3>{{ name }}</h3>
      <p v-for="d in description.split('\n')" :key="d" text-sm>
        {{ d }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.tooltip::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 50%;
  margin-left: -5px;
  margin-top:-10px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(31, 41, 55, var(--un-bg-opacity)) transparent;
}
</style>
