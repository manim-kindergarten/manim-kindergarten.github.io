<script setup lang="ts">
// import * as manimglColor from '~/data/manimgl-colors.json'

</script>

<template>
  <Tabs name="color">
    <TabPane name="manimgl-colors" tab="ManimGL Colors">
      <ManimglColors />
    </TabPane>
    <TabPane name="manim-colors" tab="Manim Colors">
      <ManimColors />
    </TabPane>
  </Tabs>
</template>
