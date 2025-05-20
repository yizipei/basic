<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
import request from '@/service/request'
import router from '@/router'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
import ButtonView from '@/views/button/ButtonView.vue'

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
  // getData()
  console.log('HomeView')
})
</script>

<template>
  <ButtonView>1233</ButtonView>
</template>

<style lang="less" scoped></style>
