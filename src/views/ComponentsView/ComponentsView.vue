<script setup lang="ts">
import type { Component } from 'vue'
import PostComp from './comps/PostComp.vue'
import SlotComp from './comps/SlotComp.vue'
import DynamicComp1 from './comps/DynamicComp1.vue'

const fontSize = ref('30px')

const comps = {
  DynamicComp1: defineAsyncComponent(() => import('./comps/DynamicComp1.vue')),
  DynamicComp2: defineAsyncComponent(() => import('./comps/DynamicComp2.vue')),
}

const comp = ref<keyof typeof comps>('DynamicComp1')
const fn = () => {
  console.log('click by father')
}
</script>
<template>
  <DynamicComp1 @click="fn"></DynamicComp1>
  <component :is="comps[comp]" />
  <van-button type="primary" @click="comp = 'DynamicComp2'">toggle</van-button>

  <SlotComp>test slot</SlotComp>

  <br />
  <PostComp
    @enlarge-text="fontSize = parseFloat(fontSize) + 10 + 'px'"
    :title="'Components'"
    content="this is demo page for Jasper to learning Vue3"
    :font-size="fontSize"
    :disabled="0"
  />
</template>
