<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
import request from '@/service/request'
import router from '@/router'

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
  <van-button type="primary" @click="router.push({ name: 'TemplateSyntax' })">
    template syntax
  </van-button>
  <van-button type="success" @click="router.push({ name: 'ReactivityView' })">
    reactivity view
  </van-button>
  <van-button type="warning" @click="router.push({ name: 'ComputedView' })">
    computed page
  </van-button>
</template>

<style lang="less" scoped></style>
