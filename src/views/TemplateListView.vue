<script setup lang="ts">
import image from '@/assets/images/5.jpg'
</script>
<template>
  <div class="columns-3 mb-10">
    <div
      v-for="(item, index) in 10"
      :key="index"
      :style="{ height: `${index * 100}px` }"
      class="bg-amber-400 mb-8 break-inside-avoid"
    ></div>
  </div>
  <div class="w-80 aspect-square bg-pink-500">123</div>

  <div class="min-h-(--home-height) grid grid-cols-4 gap-2.5 bg-gray-100 p-2.5">
    <div
      v-for="(item, index) in 1"
      :key="index"
      class="flex flex-col text-black rounded-2xl bg-red-200 h-80 shadow-md overflow-hidden text-left"
    >
      <div
        class="group relative basis-0 grow-8 bg-size-[100%] bg-no-repeat bg-image hover:bg-size-[120%] hover: transition-all duration-1000"
      >
        {{ item }}img
        <div
          class="group-hover:opacity-70 flex opacity-0 absolute inset-0 justify-center items-center bg-gray-500 transition-all duration-1000"
        >
          <a-button>123</a-button>
        </div>
      </div>
      <div class="basis-0 grow-1 bg-emerald-200">title</div>
      <div class="basis-0 grow-1 bg-yellow-200 flex justify-between pl-1.5 pr-1.5 items-center">
        <div>author</div>
        <div>star: 0</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url('@/assets/images/5.jpg');
}
</style>
