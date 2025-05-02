<script lang="ts" setup>
const question = ref('')

const controller = new AbortController()
const signal = controller.signal

const fn = throttle(
  (newV, oldV) => {
    console.log(newV, oldV)
  },
  5000,
  {
    signal,
    edges: ['trailing'],
  },
)

console.log(fn)

watch(question, fn)
</script>

<template>
  <input v-model="question" />

  <van-button type="primary" @click="controller.abort()">cancel</van-button>
  <van-button type="primary" @click="fn.flush()">flush</van-button>
</template>
