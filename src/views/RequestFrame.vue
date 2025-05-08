<script setup lang="ts">
const elapsed = ref(0)
const range = ref(1000)
let lastTime: number
let handle: number

const update = () => {
  elapsed.value = performance.now() - lastTime
  if (elapsed.value > range.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}
const reset = () => {
  lastTime = performance.now()
  elapsed.value = 0
  update()
}

const percentage = computed(() => (Math.min(elapsed.value / range.value, 1) * 100).toFixed(0))

const rr = ref({ qq: 123 })
console.log('rr', rr, rr.value, rr.value.qq)
</script>

<template>
  <progress :value="elapsed" :max="range"></progress>
  {{ percentage }}%
  <input id="range" v-model="range" type="range" name="range" :min="1000" :max="10000" />
  {{ range }}
  <van-button type="primary" @click="reset">reset</van-button>

  <div :class="$style.red" class="label">{{ $style }}</div>
</template>

<style scoped lang="less" module>
.red {
  color: red;
}
</style>
