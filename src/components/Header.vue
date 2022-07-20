<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'

</script>

<template>
  <div lg:flex lg:justify-between lg:mx-36>
    <div class="title" text-3xl mb-1rem>
      <span style="color: #8D5630">M</span>anim <span style="color: #29ABCA">K</span>indergarten
    </div>
    <NavBar lg:text-3xl />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
.title {
    font-family: orbitron;
}
</style>
