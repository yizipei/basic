<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <div>{{ count }}</div>
  <van-button type="primary" @click="increment">add</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
</template>

<style lang="less" scoped>
div {
  // font-size: 30px;
}
</style>
