<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
import request from '@/service/request'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore

const getData = async () => {
  const res = await request.post({
    url: '/login',
    data: {
      phone: '15067619919',
      verificationCode: '998800',
      source: 1,
      openId: '',
    },
  })
  console.log(res)
}

onMounted(() => {
  getData()
  console.log('HomeView')
})
</script>

<template>
  <div>{{ count }}</div>
  <van-button type="primary" @click="increment">add</van-button>
  <van-button type="success" @click="getData">成功按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
</template>

<style lang="less" scoped>
div {
  // font-size: 30px;
}
</style>
