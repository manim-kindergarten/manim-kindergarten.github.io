<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <pure-card title="RGB to HEX" ma :delay="0">
    <rgb2hex />
  </pure-card>
  <pure-card title="HEX to RGB" ma :delay="1">
    <hex2rgb />
  </pure-card>
  <pure-card title="Color picker" ma :delay="2">
    <color-picker />
  </pure-card>
  <pure-card :title="t('manim-builtin-colors')" ma :delay="3">
    <builtin-colors />
  </pure-card>
</template>
