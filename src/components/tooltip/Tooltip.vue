<script setup lang="ts">
import ButtonView from '@/views/button/ButtonView.vue'
import { createPopper, type Instance } from '@popperjs/core'

const btn = useTemplateRef<InstanceType<typeof ButtonView>>('btn')
const tooltip = useTemplateRef<HTMLElement>('tooltip')
const instance = ref<Instance>()

onMounted(() => {
  console.log(tooltip.value)
  if (btn.value && tooltip.value) {
    instance.value = createPopper(btn.value.root!, tooltip.value, {
      placement: 'right',
    })
  }

  setTimeout(() => {
    instance.value?.setOptions({
      placement: 'top-end',
    })
  }, 2000)
})
</script>

<template>
  <ButtonView ref="btn" class="btn" type="primary">button</ButtonView>
  <div ref="tooltip">this is a tooltip content</div>
</template>

<style scoped>
.btn {
  margin: 100px;
}
</style>
