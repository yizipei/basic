<script setup lang="ts">
const props = defineProps<{
  icon: string
  size?: number | string
  spin?: boolean
  color?: string
}>()
</script>

<template>
  <svg
    class="icon"
    :class="{ spin: props.spin }"
    aria-hidden="true"
    :style="{ fontSize: `${props.size}px`, color: props.color }"
  >
    <use :xlink:href="`#${props.icon}`"></use>
  </svg>
</template>

<style scoped>
.spin {
  animation: spin 1.5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
