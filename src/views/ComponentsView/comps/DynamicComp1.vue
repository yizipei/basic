<script setup lang="ts">
const fn = () => {
  console.log('click by comp')
}
</script>
<template>
  <div @click="fn">comp div</div>
</template>
