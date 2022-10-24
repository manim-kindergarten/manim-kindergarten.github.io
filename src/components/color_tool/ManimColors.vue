<script setup lang="ts">
import { renderTabContainer } from './tabRenderer'
import * as manimColor from '~/data/manim-cairo-colors.json'

const r = () => renderTabContainer(manimColor.data, 'manim-cairo-colors')
</script>

<template>
  <r />
</template>
