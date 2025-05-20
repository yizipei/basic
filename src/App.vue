<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
}

const contentStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
}

const selectedKeys = ref<string[]>(['2'])
</script>

<template>
  <RouterView />
</template>

<style lang="less" scoped></style>
