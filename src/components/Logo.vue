<template>
  <div flex flex-nowrap justify-center class="scale-2/3 sm:scale-1/1">
    <MyCanvas :width="120" :height="120" />
    <div
      w-4px
      m="x-7 y-7"
      bg="gray-700 dark:gray-200"
    />
    <div class="title" text-4xl grid>
      <div text-left self-end>
        <span style="color: #8D5630">M</span>anim
      </div>
      <div text-left self-start>
        <span style="color: #29ABCA">K</span>indergarten
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
.title {
    font-family: orbitron;
}
</style>
