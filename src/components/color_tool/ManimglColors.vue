<script setup lang="ts">
import * as manimglColors from '~/data/manimgl-colors.json'
import { renderTabContainer } from '~/components/color_tool/tabRenderer'

const r = () => renderTabContainer(manimglColors.data, 'manimgl-colors')

</script>

<template>
  <r />
</template>
