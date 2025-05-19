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
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout class="h-full flex justify-between">
      <a-layout-header :style="headerStyle">
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <RouterView />
      </a-layout-content>
      <!-- <a-layout-footer class="" :style="footerStyle">Footer</a-layout-footer> -->
    </a-layout>
  </a-space>
</template>

<style lang="less" scoped></style>
