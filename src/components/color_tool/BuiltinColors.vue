<script setup lang="ts">
// import * as manimglColor from '~/data/manimgl-colors.json'
const { t } = useI18n()

</script>

<template>
  <PureCard :title="t('manim-builtin-colors')" ma>
    <Tabs name="color">
      <TabPane name="manimgl-color" tab="ManimGL Color">
        <ManimglColors />
      </TabPane>
      <TabPane name="manim-colors" tab="Manim Colors">
        <ManimColors />
      </TabPane>
    </Tabs>
  </PureCard>
</template>
