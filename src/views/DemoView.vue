<script setup lang="ts">
const active = ref(0)
</script>
<template>
  <div class="demo flex items-center justify-center mt-1">
    <div class="relative" v-for="(item, index) in 2" :key="index">
      <div
        class="[transform:perspective(40px)_rotateX(30deg)] w-20 text-center bg-yellow-500 h-10 rounded-t-2xl pp"
        :class="[active === index ? '!bg-blue-500 item' : '']"
        @click="active = index"
      ></div>
      <div class="absolute left-1.5 top-1.5 text-red-500 rotate-x-[30deg]">tab</div>
    </div>
  </div>
</template>
<style scoped>
.pp {
  /* transform: perspective(40px) rotateX(30deg); */
}
.item {
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: blue;
    bottom: 0;
  }

  &::before {
    left: -20px;
    background: radial-gradient(circle at 0% 0%, transparent 20px, #007bff 21px);
  }
  &::after {
    right: -20px;
    background: radial-gradient(circle at 100% 0%, transparent 20px, #007bff 21px);
  }
}
</style>
