<script setup lang="ts">
const imageModules = import.meta.glob('@/assets/images/*.{jpg,png}', { eager: true })
console.log(imageModules)

const imageList = (Object.values(imageModules) as Array<{ default: string }>).map(
  (module: { default: string }) => module.default,
)
</script>
<template>
  <div class="w-200 h-200 grid grid-cols-3 grid-rows-3 gap-4 m-auto mt-100 animate-rotate">
    <div v-for="item in imageList" :key="item" class="item-box overflow-hidden relative">
      <van-image
        class="w-[200%] h-[200%] animate-rotate-reverse left-[50%] top-[50%] translate-[-50%] !absolute"
        :src="item"
        fit="cover"
      />
    </div>
  </div>
</template>
<style scoped>
.grid {
  grid-template-areas:
    'a a b'
    'c d b'
    'c e e';

  .item-box:nth-child(1) {
    grid-area: a;
  }
  .item-box:nth-child(2) {
    grid-area: b;
  }
  .item-box:nth-child(3) {
    grid-area: c;
  }
  .item-box:nth-child(4) {
    grid-area: d;
  }
  .item-box:nth-child(5) {
    grid-area: e;
  }
  /* animation: rotate 1s linear 0 infinite; */
}
</style>
