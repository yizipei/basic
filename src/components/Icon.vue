<script setup lang="ts">
const props = defineProps<{
  icon: string
  size?: number | string
}>()
</script>

<template>
  <svg class="icon" aria-hidden="true" :style="{ fontSize: `${props.size}px` }">
    <use :xlink:href="`#${props.icon}`"></use>
  </svg>
</template>

<style scoped></style>
